(ns site.parser
  (:require             [clojure.string :as str]
            [clojure.core.async :as a]))

;; ============================================================================
;; Pure Markdown to AST Parser (Enhanced for Living Ecosystem Model)
;; ============================================================================

(defn extract-headings
  "Extract headings for table of contents generation"
  [ast]
  (->> ast
       (filter #(and (vector? %) (#{:h1 :h2 :h3} (first %))))
       (map-indexed (fn [idx [level text]]
                     {:level level
                      :text text
                      :anchor (str "heading-" idx)
                      :id (-> text
                             str/lower-case
                             (str/replace #"[^a-z0-9]+" "-")
                             (str/replace #"^-|-$" ""))}))))

(defn extract-searchable-content
  "Extract searchable content for search index"
  [page]
  (let [text-content (->> (:ast page)
                         (filter vector?)
                         (map second)
                         (filter string?)
                         (str/join " "))]
    {:id (:id page)
     :title (:title page)
     :content text-content
     :keywords (-> text-content
                  str/lower-case
                  (str/split #"\s+")
                  (->> (filter #(> (count %) 3))
                       (take 20)
                       distinct
                       vec))}))

(defn create-search-index
  "Create functional search index from pages"
  [pages]
  (->> pages
       (map extract-searchable-content)
       (map #(select-keys % [:id :title :content :keywords]))
       vec))

(defn md->ast 
  "Parse markdown string to AST (pure function)"
  [markdown-str]
  (let [lines (str/split-lines markdown-str)
        blocks (loop [acc []
                      current-block []
                      in-code-block false
                      code-lang nil
                      remaining-lines lines]
                 (if (empty? remaining-lines)
                   (if (seq current-block)
                     (conj acc (str/join "\n" current-block))
                     acc)
                   (let [line (first remaining-lines)
                         trimmed (str/trim line)]
                     (cond
                       ;; Start of code block
                       (str/starts-with? trimmed "```")
                       (if in-code-block
                         ;; End of code block
                         (let [code-content (str/join "\n" current-block)
                               block [:code-block {:lang code-lang} code-content]]
                           (recur (conj acc block) [] false nil (rest remaining-lines)))
                         ;; Start of code block
                         (let [lang (subs trimmed 3)]
                           (recur acc [] true lang (rest remaining-lines))))
                       
                       ;; Inside code block
                       in-code-block
                       (recur acc (conj current-block line) true code-lang (rest remaining-lines))
                       
                       ;; Empty line - end current block
                       (empty? trimmed)
                       (if (seq current-block)
                         (recur (conj acc (str/join "\n" current-block)) [] false nil (rest remaining-lines))
                         (recur acc [] false nil (rest remaining-lines)))
                       
                       ;; Regular line - add to current block
                       :else
                       (recur acc (conj current-block line) false nil (rest remaining-lines))))))
    
    (->> blocks
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


