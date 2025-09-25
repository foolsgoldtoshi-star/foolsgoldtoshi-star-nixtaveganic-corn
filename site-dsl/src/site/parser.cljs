(ns site.parser
  (:require [clojure.string :as str]
            [clojure.core.async :as a]))

;; ============================================================================
;; Pure Markdown to AST Parser
;; ============================================================================

(defn md->ast 
  "Parse markdown string to AST (pure function)"
  [markdown-str]
  (->> (str/split markdown-str #"\n\n+")
       (map str/trim)
       (remove empty?)
       (map (fn [block]
              (cond
                (str/starts-with? block "# ")
                [:h1 (subs block 2)]
                
                (str/starts-with? block "## ")
                [:h2 (subs block 3)]
                
                (str/starts-with? block "### ")
                [:h3 (subs block 4)]
                
                (str/starts-with? block "- ")
                [:ul (map (fn [line] [:li (subs line 2)])
                         (str/split-lines block))]
                
                (str/starts-with? block "```")
                (let [lines (str/split-lines block)
                      lang (subs (first lines) 3)
                      content (str/join "\n" (drop 1 (drop-last lines)))]
                  [:code-block {:lang lang} content])
                
                (str/starts-with? block "> ")
                [:blockquote (str/replace block #"^> " "")]
                
                :else
                [:p block])))
       (vec)))

;; ============================================================================
;; File System Operations
;; ============================================================================

(defn load-markdown-file [file-path]
  "Load and parse a single markdown file"
  (try
    (let [content (slurp file-path)
          filename (-> file-path 
                      (str/split #"/") 
                      last
                      (str/replace #"\.md$" ""))
          ast (md->ast content)
          title (some #(when (= (first %) :h1) (second %)) ast)]
      {:id filename
       :title (or title filename)
       :ast ast
       :file-path file-path})
    (catch js/Error e
      (println "Error loading" file-path ":" (.-message e))
      nil)))

(defn find-markdown-files [docs-dir]
  "Find all markdown files in directory"
  (let [fs (js/require "fs")
        path (js/require "path")]
    (->> (.readdirSync fs docs-dir)
         (filter #(str/ends-with? % ".md"))
         (map #(.join path docs-dir %))
         (vec))))

;; ============================================================================
;; Async Processing Pipeline
;; ============================================================================

(defn parse-files-async [file-paths]
  "Parse multiple markdown files in parallel using core.async"
  (let [input-ch (a/chan 10)
        output-ch (a/chan 10)
        workers 4]
    
    ;; Start worker processes
    (dotimes [_ workers]
      (a/go-loop []
        (when-let [file-path (a/<! input-ch)]
          (when-let [parsed-file (load-markdown-file file-path)]
            (a/>! output-ch parsed-file))
          (recur))))
    
    ;; Feed files to workers
    (a/go
      (doseq [file-path file-paths]
        (a/>! input-ch file-path))
      (a/close! input-ch))
    
    ;; Return channel for collecting results
    output-ch))

;; ============================================================================
;; Main Parser Function
;; ============================================================================

(defn parse-all-docs []
  "Parse all documentation files and return structured data"
  (println "📖 Parsing all documentation files...")
  (let [docs-dir "../docs"
        files (find-markdown-files docs-dir)
        _ (println "📄 Found" (count files) "markdown files")
        
        ;; Parse files in parallel
        results-ch (parse-files-async files)
        
        ;; Collect all results
        pages (a/<!! (a/into [] results-ch))
        
        ;; Generate sitemap
        sitemap (map #(select-keys % [:id :title]) pages)]
    
    (println "✅ Parsed" (count pages) "pages")
    
    {:pages pages
     :sitemap sitemap}))

;; ============================================================================
;; Export for Node.js execution
;; ============================================================================

(defn main []
  "Main entry point for command-line execution"
  (let [result (parse-all-docs)]
    (println "Parser completed successfully")
    result))

;; For Shadow-CLJS node-script target
(when (exists? js/process)
  (set! *main-cli-fn* main))

