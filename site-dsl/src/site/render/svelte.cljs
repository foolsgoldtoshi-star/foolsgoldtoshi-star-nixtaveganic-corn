(ns site.render.svelte
  (:require [clojure.string :as str]))

;; ============================================================================
;; AST to Svelte Component Renderer
;; ============================================================================

(defmulti render-ast 
  "Multi-method to render different AST node types to Svelte markup"
  first)

(defmethod render-ast :h1 [[_ content]]
  (str "<h1>" content "</h1>\n"))

(defmethod render-ast :h2 [[_ content]]
  (str "<h2>" content "</h2>\n"))

(defmethod render-ast :h3 [[_ content]]
  (str "<h3>" content "</h3>\n"))

(defmethod render-ast :p [[_ content]]
  (str "<p>" content "</p>\n"))

(defmethod render-ast :ul [[_ & items]]
  (str "<ul>\n"
       (str/join "\n" (map render-ast items))
       "\n</ul>\n"))

(defmethod render-ast :ol [[_ & items]]
  (str "<ol>\n"
       (str/join "\n" (map render-ast items))
       "\n</ol>\n"))

(defmethod render-ast :li [[_ content]]
  (str "  <li>" (if (vector? content) (render-ast content) content) "</li>"))

(defmethod render-ast :code-block [[_ {:keys [lang]} content]]
  (str "<pre><code class=\"language-" lang "\">" 
       (str/escape content {"<" "&lt;" ">" "&gt;" "&" "&amp;" "{" "&#123;" "}" "&#125;"})
       "</code></pre>\n"))

(defmethod render-ast :p [[_ content]]
  (str "<p>" 
       (str/escape content {"<" "&lt;" ">" "&gt;" "&" "&amp;" "{" "&#123;" "}" "&#125;"})
       "</p>\n"))

(defmethod render-ast :blockquote [[_ content]]
  (str "<blockquote>" 
       (str/escape content {"<" "&lt;" ">" "&gt;" "&" "&amp;" "{" "&#123;" "}" "&#125;"})
       "</blockquote>\n"))

(defmethod render-ast :default [node]
  (if (string? node)
    node
    (str "<!-- Unknown node: " (pr-str node) " -->\n")))

;; ============================================================================
;; Svelte Component Template
;; ============================================================================

(def svelte-component-template
  "<script>
  export let sitemap = [];
  export let pageData = {};
</script>

<div class=\"farm-content\">
  {CONTENT}
</div>

<style>
  .farm-content {
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    line-height: 1.6;
    color: #333;
  }
  
  .farm-content :global(h1) {
    color: #2c5e2e;
    border-bottom: 3px solid #f4a261;
    padding-bottom: 0.5rem;
    margin-bottom: 1.5rem;
  }
  
  .farm-content :global(h2) {
    color: #2c5e2e;
    margin-top: 2rem;
    margin-bottom: 1rem;
    padding-left: 0.5rem;
    border-left: 4px solid #f4a261;
  }
  
  .farm-content :global(h3) {
    color: #4a7c59;
    margin-top: 1.5rem;
  }
  
  .farm-content :global(code) {
    background: #f8f9fa;
    padding: 0.2rem 0.4rem;
    border-radius: 3px;
    font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
    font-size: 0.9em;
    color: #e63946;
  }
  
  .farm-content :global(pre) {
    background: #f8f9fa;
    border: 1px solid #e9ecef;
    border-left: 4px solid #2c5e2e;
    border-radius: 5px;
    padding: 1rem;
    overflow-x: auto;
    line-height: 1.4;
  }
  
  .farm-content :global(pre code) {
    background: none;
    padding: 0;
    color: inherit;
  }
  
  .farm-content :global(blockquote) {
    border-left: 4px solid #f4a261;
    margin: 1.5rem 0;
    padding-left: 1.5rem;
    color: #666;
    font-style: italic;
    background: #fafafa;
    padding: 1rem 1.5rem;
    border-radius: 0 5px 5px 0;
  }
  
  .farm-content :global(ul), 
  .farm-content :global(ol) {
    margin: 1rem 0;
    padding-left: 1.5rem;
  }
  
  .farm-content :global(li) {
    margin: 0.5rem 0;
  }
  
  .farm-content :global(strong) {
    color: #2c5e2e;
    font-weight: 600;
  }
  
  .farm-content :global(em) {
    color: #4a7c59;
  }
  
  .farm-content :global(a) {
    color: #2c5e2e;
    text-decoration: none;
    border-bottom: 1px dotted #2c5e2e;
    transition: all 0.3s ease;
  }
  
  .farm-content :global(a:hover) {
    color: #f4a261;
    border-bottom-color: #f4a261;
  }
  
  /* Farm-specific components */
  .farm-content :global(.farm-metric) {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    background: #f8f9fa;
    padding: 0.5rem 1rem;
    border-radius: 20px;
    margin: 0.25rem;
    border: 1px solid #e9ecef;
  }
  
  .farm-content :global(.metric-value) {
    font-weight: bold;
    color: #2c5e2e;
  }
  
  .farm-content :global(.metric-unit) {
    font-size: 0.9em;
    color: #666;
  }
  
  .farm-content :global(.patch-info) {
    background: #f1f8f1;
    padding: 1rem;
    border-radius: 8px;
    border-left: 4px solid #2c5e2e;
    margin: 1rem 0;
  }
  
  .farm-content :global(.water-source) {
    background: #f0f8ff;
    padding: 1rem;
    border-radius: 8px;
    border-left: 4px solid #4a90e2;
    margin: 1rem 0;
  }
  
  .farm-content :global(.crop-rotation) {
    background: #fff8e1;
    padding: 1rem;
    border-radius: 8px;
    border-left: 4px solid #f4a261;
    margin: 1rem 0;
  }
</style>")

;; ============================================================================
;; Page to Svelte Component Conversion
;; ============================================================================

(defn page->svelte 
  "Convert page data structure to complete Svelte component"
  [{:keys [title body]}]
  (let [content-html (str "<h1>" title "</h1>\n"
                         (str/join "\n" (map render-ast body)))]
    (str/replace svelte-component-template "{CONTENT}" content-html)))

;; ============================================================================
;; Export Functions
;; ============================================================================

(defn render-page [page-data]
  "Main function to render a page to Svelte component"
  (page->svelte page-data))

;; For testing in REPL
(comment
  (md->ast "# Hello\n\nThis is a **test** paragraph.\n\n## Subsection\n\n- Item 1\n- Item 2")
  
  (page->svelte {:title "Test Page"
                 :body [[:p "Hello world"]
                        [:ul [:li "Item 1"] [:li "Item 2"]]]}))

;; Export for main namespace
(def exports {:render-page render-page
              :page->svelte page->svelte
              :md->ast md->ast})


