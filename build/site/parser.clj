(ns site.parser
  (:require [clojure.java.io :as io]
            [clojure.string :as str]
            [clojure.core.async :as async]
            [markdown.core :as md]
            [site.specs :as specs]
            [clojure.edn :as edn])
  (:import [java.time Instant]
           [java.io File]))

;; ============================================================================
;; Pure Functions for Markdown Parsing
;; ============================================================================

(defn file->page-data 
  "Pure function: File -> Page data structure"
  [^File file]
  (let [content (slurp file)
        filename (.getName file)
        id (-> filename (str/replace #"\\.md$" "") (str/replace #"^\d+_" ""))
        [frontmatter markdown] (if (str/starts-with? content "---")
                                (let [parts (str/split content #"---" 3)]
                                  [(edn/read-string (second parts)) (nth parts 2)])
                                [{} content])
        title (or (:title frontmatter) 
                  (some->> markdown 
                          (re-find #"^#\s+(.+)$")
                          second)
                  (str/replace id #"_" " "))]
    (specs/validate-page
      (merge {:id id
              :title title
              :markdown (str/trim markdown)
              :created (or (:created frontmatter) (Instant/ofEpochMilli (.lastModified file)))
              :updated (Instant/ofEpochMilli (.lastModified file))}
             (dissoc frontmatter :title :created)))))

(defn markdown->hiccup
  "Convert markdown string to hiccup data structure"
  [markdown-str]
  ;; For now, we'll use a simple conversion
  ;; In production, you might want a more sophisticated parser
  (let [html (md/md-to-html-string markdown-str)]
    [:div {:dangerouslySetInnerHTML {:__html html}}]))

(defn generate-sitemap
  "Pure function: [Page] -> Sitemap"
  [pages]
  (->> pages
       (map #(select-keys % [:id :title :slug]))
       (sort-by :title)
       (specs/validate-sitemap)))

;; ============================================================================
;; File System Operations
;; ============================================================================

(defn find-markdown-files
  "Find all markdown files in a directory"
  [dir-path]
  (->> (io/file dir-path)
       file-seq
       (filter #(and (.isFile %)
                     (str/ends-with? (.getName %) ".md")))))

(defn ensure-output-dir!
  "Ensure output directory exists"
  [dir-path]
  (let [dir (io/file dir-path)]
    (when-not (.exists dir)
      (.mkdirs dir))
    dir-path))

;; ============================================================================
;; Async Pipeline for Parallel Processing
;; ============================================================================

(defn parse-files-async
  "Parse markdown files in parallel using core.async"
  [file-paths]
  (let [input-ch (async/chan 10)
        output-ch (async/chan 10)
        workers 4] ; Adjust based on CPU cores
    
    ;; Start worker processes
    (dotimes [_ workers]
      (async/go-loop []
        (when-let [file (async/<! input-ch)]
          (try
            (let [page-data (file->page-data file)]
              (async/>! output-ch page-data))
            (catch Exception e
              (println "❌ Error parsing" (.getName file) ":" (.getMessage e))))
          (recur))))
    
    ;; Feed files to workers
    (async/go
      (doseq [file file-paths]
        (async/>! input-ch file))
      (async/close! input-ch))
    
    ;; Collect results
    (async/go-loop [results []]
      (if-let [result (async/<! output-ch)]
        (recur (conj results result))
        results))))

;; ============================================================================
;; Main Parsing Functions
;; ============================================================================

(defn parse-all-markdown
  "Parse all markdown files and generate site data"
  []
  (println "📖 Parsing markdown files...")
  (let [docs-dir "docs"
        output-dir "web/static/content"
        _ (ensure-output-dir! output-dir)
        
        markdown-files (find-markdown-files docs-dir)
        _ (println "📄 Found" (count markdown-files) "markdown files")
        
        ;; Parse files in parallel
        pages-ch (parse-files-async markdown-files)
        pages (async/<!! pages-ch)
        
        ;; Generate additional data
        sitemap (generate-sitemap pages)
        
        ;; Add hiccup conversion
        enriched-pages (map #(assoc % :hiccup (markdown->hiccup (:markdown %))) pages)]
    
    ;; Write outputs
    (spit (str output-dir "/pages.edn") (pr-str enriched-pages))
    (spit (str output-dir "/sitemap.json") 
          (cheshire.core/generate-string sitemap {:pretty true}))
    
    (println "✅ Parsed" (count pages) "pages")
    (println "📊 Generated sitemap with" (count sitemap) "entries")
    
    {:pages enriched-pages
     :sitemap sitemap}))

;; ============================================================================
;; Development Helpers
;; ============================================================================

(defn watch-and-rebuild
  "Watch markdown files and rebuild on changes"
  [callback-fn]
  (println "👀 Watching for markdown changes...")
  ;; Simple polling-based watcher
  ;; In production, use a proper file watcher library
  (future
    (loop [last-modified (System/currentTimeMillis)]
      (Thread/sleep 1000) ; Check every second
      (let [current-modified (->> (find-markdown-files "docs")
                                 (map #(.lastModified %))
                                 (apply max 0))]
        (when (> current-modified last-modified)
          (println "🔄 Markdown files changed, rebuilding...")
          (callback-fn))
        (recur current-modified)))))

(comment
  ;; REPL testing
  (parse-all-markdown)
  
  ;; Watch for changes
  (watch-and-rebuild #(parse-all-markdown)))

