(ns site.core
  (:require [clojure.core.async :as a]
            [clojure.string :as str]
            [clojure.java.io :as io]
            [site.parser :as p]
            [site.render.svelte :as sv]))

;; ============================================================================
;; File System Utilities
;; ============================================================================

(defn spit* [path content]
  "Write content to file, creating directories as needed"
  (let [file (io/file path)]
    (-> file .getParentFile .mkdirs)
    (spit path content)))

(defn ensure-dir! [dir-path]
  "Ensure directory exists"
  (let [dir (io/file dir-path)]
    (when-not (.exists dir)
      (.mkdirs dir))
    dir-path))

;; ============================================================================
;; Core Generation Functions
;; ============================================================================

(defn parse-one [file-path]
  "Parse a single markdown file to page data"
  (let [ast (p/md->ast (slurp file-path))
        filename (.getName (io/file file-path))
        base-id (str/replace filename #"\.md$" "")]
    {:id base-id 
     :file-path file-path
     :ast ast}))

(defn gen-page [{:keys [id ast]}]
  "Generate Svelte component from page AST"
  (let [title (some #(when (= (first %) :h1) (second %)) ast)
        page-data {:id id 
                   :title (or title (str/replace id #"_" " "))
                   :body (remove #(= (first %) :h1) ast)}
        svelte-content (sv/page->svelte page-data)
        output-path (str "../web/src/lib/generated/" id ".svelte")]
    
    (ensure-dir! "../web/src/lib/generated")
    (spit* output-path svelte-content)
    
    (println "📄 Generated:" id ".svelte")
    page-data))

;; ============================================================================
;; Parallel Processing with Core.Async
;; ============================================================================

(defn parse-all []
  "Parse all markdown files in parallel"
  (let [in-ch (a/chan 10)
        out-ch (a/chan 10)
        docs-dir "../docs"
        files (->> (file-seq (io/file docs-dir))
                   (filter #(and (.isFile %)
                                (str/ends-with? (.getName %) ".md")))
                   (map #(.getPath %)))]
    
    (println "📁 Found" (count files) "markdown files")
    
    ;; Feed files to channel
    (a/go
      (doseq [file files]
        (a/>! in-ch file))
      (a/close! in-ch))
    
    ;; Process files in parallel
    (a/pipeline 8 out-ch (map parse-one) in-ch)
    
    ;; Collect all results
    (a/<!! (a/into [] out-ch))))

(defn gen-all []
  "Main generation function: parse all docs → generate Svelte components"
  (println "🌽 Starting NixtaVeganic site generation...")
  
  ;; Parse all markdown files
  (let [pages (parse-all)
        
        ;; Generate sitemap
        sitemap (map #(select-keys % [:id :title]) pages)
        
        ;; Ensure output directories exist
        _ (ensure-dir! "../web/src/lib/generated")
        _ (ensure-dir! "../web/static/content")]
    
    ;; Generate Svelte components for each page
    (doseq [page pages]
      (gen-page page))
    
    ;; Write sitemap JSON
    (spit* "../web/static/content/sitemap.json" 
           (js/JSON.stringify (clj->js sitemap) nil 2))
    
    ;; Generate component index file
    (let [exports (str/join "\n" 
                           (map #(str "export { default as " (:id %) 
                                     " } from './" (:id %) ".svelte';") 
                                pages))]
      (spit* "../web/src/lib/generated/index.js" 
             (str "// Auto-generated component exports\n" exports "\n")))
    
    (println "✅ Generated" (count pages) "Svelte components")
    (println "📊 Created sitemap with" (count sitemap) "entries")
    (println "🎯 Site generation complete!")
    
    {:pages (count pages)
     :components (count pages)
     :sitemap (count sitemap)}))

;; ============================================================================
;; Main Entry Points
;; ============================================================================

(defn ^:export main []
  "Main CLI entry point"
  (try
    (let [result (gen-all)]
      (println "🌟 Generation successful:" (pr-str result))
      0)
    (catch js/Error e
      (println "❌ Generation failed:" (.-message e))
      1)))

;; For Shadow-CLJS node-script execution
(when (exists? js/process)
  (set! *main-cli-fn* main))

;; ============================================================================
;; Development Helpers
;; ============================================================================

(defn dev-rebuild []
  "Quick rebuild for development"
  (println "🔄 Development rebuild...")
  (gen-all))

(comment
  ;; REPL testing
  (gen-all)
  (dev-rebuild)
  
  ;; Test individual functions
  (parse-one "../docs/00_overview.md"))

