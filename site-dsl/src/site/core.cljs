(ns site.core
  (:require [clojure.core.async :as a]
            [clojure.string :as str]
            [site.parser :as p]
            [site.render.svelte :as sv]))

;; Node.js File System API
(def fs (js/require "fs"))
(def path (js/require "path"))

;; ============================================================================
;; File System Utilities (Node.js compatible)
;; ============================================================================

(defn spit* [file-path content]
  "Write content to file, creating directories as needed"
  (let [dir-path (.dirname path file-path)]
    (.mkdirSync fs dir-path #js {:recursive true})
    (.writeFileSync fs file-path content)))

(defn ensure-dir! [dir-path]
  "Ensure directory exists"
  (.mkdirSync fs dir-path #js {:recursive true})
  dir-path)

;; ============================================================================
;; Core Generation Functions
;; ============================================================================

(defn parse-one [file-path]
  "Parse a single markdown file to page data"
  (let [content (.readFileSync fs file-path "utf8")
        ast (p/md->ast content)
        filename (.basename path file-path)
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
  "Parse all markdown files"
  (let [docs-dir "../docs"
        files (->> (.readdirSync fs docs-dir)
                   (filter #(str/ends-with? % ".md"))
                   (map #(.join path docs-dir %)))]
    
    (println "📁 Found" (count files) "markdown files")
    
    ;; Parse files sequentially (simpler for Node.js)
    (map parse-one files)))

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
    
    ;; Write sitemap JSON (SvelteKit expects it in static root)
    (spit* "../web/static/sitemap.json" 
           (.stringify js/JSON (clj->js sitemap) nil 2))
    ;; Also keep a copy in content directory
    (spit* "../web/static/content/sitemap.json" 
           (.stringify js/JSON (clj->js sitemap) nil 2))
    
    ;; Generate component index file (fix JS identifier names)
    (let [exports (str/join "\n" 
                           (map #(str "export { default as Page" 
                                     (str/replace (:id %) #"[^a-zA-Z0-9]" "_")
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

;; Main entry point for Node.js
(defn -main [& args]
  "Main entry point for Node.js execution"
  (main))

;; Auto-run when executed as script
(when (and (exists? js/process) (= (.-argv js/process) js/process.argv))
  (main))

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

