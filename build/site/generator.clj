(ns site.generator
  (:require [clojure.java.io :as io]
            [clojure.string :as str]
            [clojure.core.async :as async]
            [hiccup.core :as h]
            [site.specs :as specs]
            [clojure.edn :as edn]))

;; ============================================================================
;; ClojureScript DSL for Svelte Components
;; ============================================================================

(def ^:private svelte-template
  "Template for generated Svelte components"
  "<script>
  export let sitemap = [];
  export let pageData = {};
</script>

<div class=\"content\">
  {CONTENT}
</div>

<style>
  .content {
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    line-height: 1.6;
  }
  
  .content :global(h1) {
    color: #2c5e2e;
    border-bottom: 2px solid #f4a261;
    padding-bottom: 0.5rem;
  }
  
  .content :global(h2) {
    color: #2c5e2e;
    margin-top: 2rem;
  }
  
  .content :global(code) {
    background: #f8f9fa;
    padding: 0.2rem 0.4rem;
    border-radius: 3px;
    font-family: 'Monaco', 'Menlo', monospace;
  }
  
  .content :global(pre) {
    background: #f8f9fa;
    padding: 1rem;
    border-radius: 5px;
    overflow-x: auto;
    border-left: 4px solid #f4a261;
  }
  
  .content :global(blockquote) {
    border-left: 4px solid #2c5e2e;
    padding-left: 1rem;
    margin-left: 0;
    font-style: italic;
    color: #555;
  }
</style>")

;; ============================================================================
;; Hiccup to Svelte Conversion
;; ============================================================================

(defn hiccup->svelte
  "Convert hiccup data structure to Svelte markup"
  [hiccup-data]
  (cond
    (string? hiccup-data)
    hiccup-data
    
    (vector? hiccup-data)
    (let [[tag attrs & children] hiccup-data
          tag-name (name tag)
          attrs-str (when (map? attrs)
                     (->> attrs
                          (map (fn [[k v]] 
                                (str " " (name k) "=\"" v "\"")))
                          (str/join "")))
          children-str (->> children
                           (map hiccup->svelte)
                           (str/join ""))]
      (if (empty? children)
        (str "<" tag-name attrs-str " />")
        (str "<" tag-name attrs-str ">" children-str "</" tag-name ">")))
    
    :else
    (str hiccup-data)))

;; ============================================================================
;; Component Generation Functions
;; ============================================================================

(defn generate-page-component
  "Generate a Svelte component from page data"
  [{:keys [id title markdown hiccup] :as page}]
  (specs/validate-page page)
  (let [content (if hiccup 
                  (hiccup->svelte hiccup)
                  (str "<div>" markdown "</div>"))
        component-content (str/replace svelte-template "{CONTENT}" content)]
    {:filename (str id ".svelte")
     :content component-content}))

(defn generate-nav-component
  "Generate navigation component"
  [sitemap]
  (specs/validate-sitemap sitemap)
  "<script>
  export let sitemap = [];
  export let currentPage = '';
</script>

<nav class=\"main-nav\">
  <div class=\"nav-container\">
    <a href=\"/\" class=\"home-link\">🌽 NixtaVeganic</a>
    <div class=\"nav-links\">
      {#each sitemap as item}
        <a 
          href=\"/wiki/{item.id}\" 
          class:active={currentPage === item.id}
          class=\"nav-link\"
        >
          {item.title}
        </a>
      {/each}
    </div>
  </div>
</nav>

<style>
  .main-nav {
    background: linear-gradient(135deg, #2c5e2e, #4a7c59);
    padding: 1rem 0;
    box-shadow: 0 2px 10px rgba(44, 94, 46, 0.1);
  }
  
  .nav-container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
  }
  
  .home-link {
    font-size: 1.5rem;
    font-weight: bold;
    color: #f4a261;
    text-decoration: none;
    transition: color 0.3s ease;
  }
  
  .home-link:hover {
    color: #e76f51;
  }
  
  .nav-links {
    display: flex;
    gap: 1.5rem;
  }
  
  .nav-link {
    color: white;
    text-decoration: none;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    transition: all 0.3s ease;
    border: 1px solid transparent;
  }
  
  .nav-link:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: #f4a261;
  }
  
  .nav-link.active {
    background: #f4a261;
    color: #2c5e2e;
    font-weight: bold;
  }
  
  @media (max-width: 768px) {
    .nav-container {
      flex-direction: column;
      gap: 1rem;
    }
    
    .nav-links {
      flex-wrap: wrap;
      justify-content: center;
    }
  }
</style>")

(defn generate-footer-component
  "Generate footer component"
  [sitemap]
  "<script>
  export let sitemap = [];
</script>

<footer class=\"main-footer\">
  <div class=\"footer-container\">
    <div class=\"footer-section\">
      <h3>🌽 NixtaVeganic Corn Project</h3>
      <p>Ecological, no-till, veganic field corn with on-site nixtamalization</p>
    </div>
    
    <div class=\"footer-section\">
      <h4>Documentation</h4>
      <div class=\"footer-links\">
        {#each sitemap.slice(0, 5) as item}
          <a href=\"/wiki/{item.id}\">{item.title}</a>
        {/each}
      </div>
    </div>
    
    <div class=\"footer-section\">
      <h4>Quick Links</h4>
      <div class=\"footer-links\">
        <a href=\"/\">Home</a>
        <a href=\"/wiki/00_overview\">Overview</a>
        <a href=\"https://github.com/foolsgoldtoshi-star/foolsgoldtoshi-star-nixtaveganic-corn\" target=\"_blank\" rel=\"noopener\">
          GitHub Repository
        </a>
      </div>
    </div>
  </div>
  
  <div class=\"footer-bottom\">
    <p>Built with 💛 by foolsgoldtoshi-star using ClojureScript + Svelte + Nix</p>
  </div>
</footer>

<style>
  .main-footer {
    background: #2c5e2e;
    color: white;
    margin-top: 4rem;
  }
  
  .footer-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 3rem 2rem 2rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
  }
  
  .footer-section h3 {
    color: #f4a261;
    margin-bottom: 1rem;
  }
  
  .footer-section h4 {
    color: #f4a261;
    margin-bottom: 0.5rem;
  }
  
  .footer-links {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .footer-links a {
    color: #ccc;
    text-decoration: none;
    transition: color 0.3s ease;
  }
  
  .footer-links a:hover {
    color: #f4a261;
  }
  
  .footer-bottom {
    border-top: 1px solid #4a7c59;
    padding: 1rem 2rem;
    text-align: center;
    color: #ccc;
  }
</style>")

;; ============================================================================
;; Main Generation Functions
;; ============================================================================

(defn generate-svelte-components
  "Generate all Svelte components from parsed data"
  []
  (println "⚡ Generating Svelte components...")
  (let [output-dir "web/src/lib/generated"
        _ (ensure-output-dir! output-dir)
        
        ;; Load parsed data
        pages (-> "web/static/content/pages.edn" slurp edn/read-string)
        sitemap (-> "web/static/content/sitemap.json" slurp cheshire.core/parse-string true)
        
        ;; Generate page components in parallel
        component-ch (async/chan 10)
        
        ;; Generate page components
        _ (async/go
            (doseq [page pages]
              (async/>! component-ch (generate-page-component page)))
            (async/close! component-ch))
        
        ;; Collect components
        components (async/<!! (async/into [] component-ch))]
    
    ;; Write page components
    (doseq [{:keys [filename content]} components]
      (spit (str output-dir "/" filename) content))
    
    ;; Write shared components
    (spit (str output-dir "/Nav.svelte") (generate-nav-component sitemap))
    (spit (str output-dir "/Footer.svelte") (generate-footer-component sitemap))
    
    ;; Generate component index
    (let [index-content (str "// Auto-generated component exports\n"
                            (->> components
                                 (map #(str "export { default as " 
                                           (-> (:filename %) 
                                               (str/replace #"\.svelte$" ""))
                                           " } from './" (:filename %) "';"))
                                 (str/join "\n")))]
      (spit (str output-dir "/index.js") index-content))
    
    (println "✅ Generated" (count components) "page components")
    (println "📦 Generated shared components: Nav, Footer")
    
    {:components components
     :shared-components ["Nav.svelte" "Footer.svelte"]}))

;; ============================================================================
;; Utility Functions
;; ============================================================================

(defn ensure-output-dir!
  "Ensure output directory exists"
  [dir-path]
  (let [dir (io/file dir-path)]
    (when-not (.exists dir)
      (.mkdirs dir))
    dir-path))

(comment
  ;; REPL testing
  (generate-svelte-components))

