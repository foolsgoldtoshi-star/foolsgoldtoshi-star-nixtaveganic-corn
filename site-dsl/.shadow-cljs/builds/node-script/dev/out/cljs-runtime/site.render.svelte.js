goog.provide('site.render.svelte');
if((typeof site !== 'undefined') && (typeof site.render !== 'undefined') && (typeof site.render.svelte !== 'undefined') && (typeof site.render.svelte.render_ast !== 'undefined')){
} else {
/**
 * Multi-method to render different AST node types to Svelte markup
 */
site.render.svelte.render_ast = (function (){var method_table__5599__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5600__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5601__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5602__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__5754 = cljs.core.get_global_hierarchy;
return (fexpr__5754.cljs$core$IFn$_invoke$arity$0 ? fexpr__5754.cljs$core$IFn$_invoke$arity$0() : fexpr__5754.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("site.render.svelte","render-ast"),cljs.core.first,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5603__auto__,method_table__5599__auto__,prefer_table__5600__auto__,method_cache__5601__auto__,cached_hierarchy__5602__auto__));
})();
}
site.render.svelte.render_ast.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"h1","h1",-1896887462),(function (p__5770){
var vec__5780 = p__5770;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5780,(0),null);
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5780,(1),null);
return ["<h1>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(content),"</h1>\n"].join('');
}));
site.render.svelte.render_ast.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"h2","h2",-372662728),(function (p__5808){
var vec__5810 = p__5808;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5810,(0),null);
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5810,(1),null);
return ["<h2>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(content),"</h2>\n"].join('');
}));
site.render.svelte.render_ast.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"h3","h3",2067611163),(function (p__5820){
var vec__5821 = p__5820;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5821,(0),null);
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5821,(1),null);
return ["<h3>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(content),"</h3>\n"].join('');
}));
site.render.svelte.render_ast.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"p","p",151049309),(function (p__5833){
var vec__5834 = p__5833;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5834,(0),null);
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5834,(1),null);
return ["<p>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(content),"</p>\n"].join('');
}));
site.render.svelte.render_ast.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (p__5863){
var vec__5865 = p__5863;
var seq__5866 = cljs.core.seq(vec__5865);
var first__5867 = cljs.core.first(seq__5866);
var seq__5866__$1 = cljs.core.next(seq__5866);
var _ = first__5867;
var items = seq__5866__$1;
return ["<ul>\n",clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.map.cljs$core$IFn$_invoke$arity$2(site.render.svelte.render_ast,items)),"\n</ul>\n"].join('');
}));
site.render.svelte.render_ast.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"ol","ol",932524051),(function (p__5870){
var vec__5872 = p__5870;
var seq__5873 = cljs.core.seq(vec__5872);
var first__5874 = cljs.core.first(seq__5873);
var seq__5873__$1 = cljs.core.next(seq__5873);
var _ = first__5874;
var items = seq__5873__$1;
return ["<ol>\n",clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.map.cljs$core$IFn$_invoke$arity$2(site.render.svelte.render_ast,items)),"\n</ol>\n"].join('');
}));
site.render.svelte.render_ast.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"li","li",723558921),(function (p__5895){
var vec__5898 = p__5895;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5898,(0),null);
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5898,(1),null);
return ["  <li>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core.vector_QMARK_(content))?site.render.svelte.render_ast.cljs$core$IFn$_invoke$arity$1(content):content)),"</li>"].join('');
}));
site.render.svelte.render_ast.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"code-block","code-block",-2113425141),(function (p__5933){
var vec__5934 = p__5933;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5934,(0),null);
var map__5937 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5934,(1),null);
var map__5937__$1 = cljs.core.__destructure_map(map__5937);
var lang = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5937__$1,new cljs.core.Keyword(null,"lang","lang",-1819677104));
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5934,(2),null);
return ["<pre><code class=\"language-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lang),"\">",clojure.string.escape(content,new cljs.core.PersistentArrayMap(null, 3, ["<","&lt;",">","&gt;","&","&amp;"], null)),"</code></pre>\n"].join('');
}));
site.render.svelte.render_ast.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"blockquote","blockquote",372264190),(function (p__5954){
var vec__5956 = p__5954;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5956,(0),null);
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5956,(1),null);
return ["<blockquote>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(content),"</blockquote>\n"].join('');
}));
site.render.svelte.render_ast.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (node){
if(typeof node === 'string'){
return node;
} else {
return ["<!-- Unknown node: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([node], 0))," -->\n"].join('');
}
}));
site.render.svelte.svelte_component_template = "<script>\n  export let sitemap = [];\n  export let pageData = {};\n</script>\n\n<div class=\"farm-content\">\n  {CONTENT}\n</div>\n\n<style>\n  .farm-content {\n    max-width: 800px;\n    margin: 0 auto;\n    padding: 2rem;\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;\n    line-height: 1.6;\n    color: #333;\n  }\n  \n  .farm-content :global(h1) {\n    color: #2c5e2e;\n    border-bottom: 3px solid #f4a261;\n    padding-bottom: 0.5rem;\n    margin-bottom: 1.5rem;\n  }\n  \n  .farm-content :global(h2) {\n    color: #2c5e2e;\n    margin-top: 2rem;\n    margin-bottom: 1rem;\n    padding-left: 0.5rem;\n    border-left: 4px solid #f4a261;\n  }\n  \n  .farm-content :global(h3) {\n    color: #4a7c59;\n    margin-top: 1.5rem;\n  }\n  \n  .farm-content :global(code) {\n    background: #f8f9fa;\n    padding: 0.2rem 0.4rem;\n    border-radius: 3px;\n    font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;\n    font-size: 0.9em;\n    color: #e63946;\n  }\n  \n  .farm-content :global(pre) {\n    background: #f8f9fa;\n    border: 1px solid #e9ecef;\n    border-left: 4px solid #2c5e2e;\n    border-radius: 5px;\n    padding: 1rem;\n    overflow-x: auto;\n    line-height: 1.4;\n  }\n  \n  .farm-content :global(pre code) {\n    background: none;\n    padding: 0;\n    color: inherit;\n  }\n  \n  .farm-content :global(blockquote) {\n    border-left: 4px solid #f4a261;\n    margin: 1.5rem 0;\n    padding-left: 1.5rem;\n    color: #666;\n    font-style: italic;\n    background: #fafafa;\n    padding: 1rem 1.5rem;\n    border-radius: 0 5px 5px 0;\n  }\n  \n  .farm-content :global(ul), \n  .farm-content :global(ol) {\n    margin: 1rem 0;\n    padding-left: 1.5rem;\n  }\n  \n  .farm-content :global(li) {\n    margin: 0.5rem 0;\n  }\n  \n  .farm-content :global(strong) {\n    color: #2c5e2e;\n    font-weight: 600;\n  }\n  \n  .farm-content :global(em) {\n    color: #4a7c59;\n  }\n  \n  .farm-content :global(a) {\n    color: #2c5e2e;\n    text-decoration: none;\n    border-bottom: 1px dotted #2c5e2e;\n    transition: all 0.3s ease;\n  }\n  \n  .farm-content :global(a:hover) {\n    color: #f4a261;\n    border-bottom-color: #f4a261;\n  }\n  \n  /* Farm-specific components */\n  .farm-content :global(.farm-metric) {\n    display: inline-flex;\n    align-items: center;\n    gap: 0.5rem;\n    background: #f8f9fa;\n    padding: 0.5rem 1rem;\n    border-radius: 20px;\n    margin: 0.25rem;\n    border: 1px solid #e9ecef;\n  }\n  \n  .farm-content :global(.metric-value) {\n    font-weight: bold;\n    color: #2c5e2e;\n  }\n  \n  .farm-content :global(.metric-unit) {\n    font-size: 0.9em;\n    color: #666;\n  }\n  \n  .farm-content :global(.patch-info) {\n    background: #f1f8f1;\n    padding: 1rem;\n    border-radius: 8px;\n    border-left: 4px solid #2c5e2e;\n    margin: 1rem 0;\n  }\n  \n  .farm-content :global(.water-source) {\n    background: #f0f8ff;\n    padding: 1rem;\n    border-radius: 8px;\n    border-left: 4px solid #4a90e2;\n    margin: 1rem 0;\n  }\n  \n  .farm-content :global(.crop-rotation) {\n    background: #fff8e1;\n    padding: 1rem;\n    border-radius: 8px;\n    border-left: 4px solid #f4a261;\n    margin: 1rem 0;\n  }\n</style>";
/**
 * Convert page data structure to complete Svelte component
 */
site.render.svelte.page__GT_svelte = (function site$render$svelte$page__GT_svelte(p__6010){
var map__6017 = p__6010;
var map__6017__$1 = cljs.core.__destructure_map(map__6017);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6017__$1,new cljs.core.Keyword(null,"title","title",636505583));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6017__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var content_html = ["<h1>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(title),"</h1>\n",clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.map.cljs$core$IFn$_invoke$arity$2(site.render.svelte.render_ast,body))].join('');
return clojure.string.replace(site.render.svelte.svelte_component_template,"{CONTENT}",content_html);
});
site.render.svelte.render_page = (function site$render$svelte$render_page(page_data){

return site.render.svelte.page__GT_svelte(page_data);
});
site.render.svelte.exports = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"render-page","render-page",-1818263917),site.render.svelte.render_page,new cljs.core.Keyword(null,"page->svelte","page->svelte",429450784),site.render.svelte.page__GT_svelte,new cljs.core.Keyword(null,"md->ast","md->ast",-901675162),site.render.svelte.md__GT_ast], null);

//# sourceMappingURL=site.render.svelte.js.map
