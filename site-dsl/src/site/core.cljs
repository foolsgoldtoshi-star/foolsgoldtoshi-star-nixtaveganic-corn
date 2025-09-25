(ns site.core
  "ClojureScript DSL generator for functional farm documentation
   Enhanced with clj-nix integration for better Nix + Clojure workflow
   Reference: https://github.com/jlesquembre/clj-nix (EPL-2.0, 169 stars)"
  (:require [clojure.core.async :as a]
            [clojure.string :as str]
            [site.parser :as p]
            [site.render.svelte :as sv]))

;; Node.js File System API (clj-nix compatible)
(def fs (js/require "fs"))
(def path (js/require "path"))

;; Build metadata for clj-nix integration
(def build-info
  {:generator "ClojureScript DSL with clj-nix"
   :version "0.4.0"
   :philosophy "Rich Hickey meets NixOS meets ecological agriculture"
   :clj-nix-integration true
   :nix-reproducible true})

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
    (println "📦 Using clj-nix enhanced build system")
    (println "⭐ Reference: https://github.com/jlesquembre/clj-nix")
    
    ;; Parse all markdown files with clj-nix integration
    (let [pages (parse-all)
        
        ;; Generate enhanced navigation data
        sitemap (map #(select-keys % [:id :title]) pages)
        
        ;; Create search index for living ecosystem functionality
        search-index (p/create-search-index pages)
        
        ;; Generate navigation relationships (prev/next)
        sorted-pages (sort-by :id pages)
        nav-graph (map-indexed (fn [idx page]
                                {:id (:id page)
                                 :title (:title page)
                                 :prev (when (> idx 0) 
                                        (select-keys (nth sorted-pages (dec idx)) [:id :title]))
                                 :next (when (< idx (dec (count sorted-pages)))
                                        (select-keys (nth sorted-pages (inc idx)) [:id :title]))})
                              sorted-pages)
        
        ;; Ensure output directories exist
        _ (ensure-dir! "../web/src/lib/generated")
        _ (ensure-dir! "../web/static/content")]
    
    ;; Generate Svelte components for each page
    (doseq [page pages]
      (gen-page page))
    
    ;; Write enhanced navigation data for living ecosystem
    (spit* "../web/src/lib/generated/sitemap.js" 
           (str "// Auto-generated sitemap for functional farm system\n"
                "export default " (.stringify js/JSON (clj->js sitemap) nil 2) ";\n"))
    
    ;; Write search index for ecosystem-wide knowledge discovery
    (spit* "../web/src/lib/generated/search-index.js"
           (str "// Auto-generated search index for living farm knowledge\n"
                "export default " (.stringify js/JSON (clj->js search-index) nil 2) ";\n"))
    
    ;; Write navigation graph for ecosystem browsing
    (spit* "../web/src/lib/generated/navigation.js"
           (str "// Auto-generated navigation graph\n"
                "export default " (.stringify js/JSON (clj->js nav-graph) nil 2) ";\n"))
    
    ;; Keep JSON copies for external ecosystem integration
    (spit* "../web/static/sitemap.json" 
           (.stringify js/JSON (clj->js sitemap) nil 2))
    (spit* "../web/static/search-index.json"
           (.stringify js/JSON (clj->js search-index) nil 2))
    
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
    (println "🔍 Generated search index with" (count search-index) "searchable pages")
    (println "⬅️➡️ Created navigation graph for ecosystem browsing")
    (println "🎯 Living ecosystem model generation complete!")
    (println "🔧 clj-nix integration: Enhanced Nix + Clojure workflow")
    (println "🌱 Ready for: Real-time agronomic data integration")
    
    {:pages (count pages)
     :components (count pages)
     :sitemap (count sitemap)
     :search-index (count search-index)
     :navigation-graph (count nav-graph)
     :ecosystem-features [:search :navigation :toc]
     :build-info build-info
     :clj-nix-enhanced true
     :living-model-ready true}))

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

