goog.provide('site.core');
site.core.fs = require("fs");
site.core.path = require("path");
site.core.spit_STAR_ = (function site$core$spit_STAR_(file_path,content){

var dir_path = site.core.path.dirname(file_path);
site.core.fs.mkdirSync(dir_path,({"recursive": true}));

return site.core.fs.writeFileSync(file_path,content);
});
site.core.ensure_dir_BANG_ = (function site$core$ensure_dir_BANG_(dir_path){

site.core.fs.mkdirSync(dir_path,({"recursive": true}));

return dir_path;
});
site.core.parse_one = (function site$core$parse_one(file_path){

var content = site.core.fs.readFileSync(file_path,"utf8");
var ast = site.parser.md__GT_ast(content);
var filename = site.core.path.basename(file_path);
var base_id = clojure.string.replace(filename,/\.md$/,"");
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),base_id,new cljs.core.Keyword(null,"file-path","file-path",-2005501162),file_path,new cljs.core.Keyword(null,"ast","ast",-860334068),ast], null);
});
site.core.gen_page = (function site$core$gen_page(p__7383){
var map__7384 = p__7383;
var map__7384__$1 = cljs.core.__destructure_map(map__7384);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7384__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7384__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));

var title = cljs.core.some((function (p1__7379_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(p1__7379_SHARP_),new cljs.core.Keyword(null,"h1","h1",-1896887462))){
return cljs.core.second(p1__7379_SHARP_);
} else {
return null;
}
}),ast);
var page_data = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"title","title",636505583),(function (){var or__5002__auto__ = title;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return clojure.string.replace(id,/_/," ");
}
})(),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__7381_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(p1__7381_SHARP_),new cljs.core.Keyword(null,"h1","h1",-1896887462));
}),ast)], null);
var svelte_content = site.render.svelte.page__GT_svelte(page_data);
var output_path = ["../web/src/lib/generated/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),".svelte"].join('');
site.core.ensure_dir_BANG_("../web/src/lib/generated");

site.core.spit_STAR_(output_path,svelte_content);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\uD83D\uDCC4 Generated:",id,".svelte"], 0));

return page_data;
});
site.core.parse_all = (function site$core$parse_all(){

var docs_dir = "../docs";
var files = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__7390_SHARP_){
return site.core.path.join(docs_dir,p1__7390_SHARP_);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__7389_SHARP_){
return clojure.string.ends_with_QMARK_(p1__7389_SHARP_,".md");
}),site.core.fs.readdirSync(docs_dir)));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\uD83D\uDCC1 Found",cljs.core.count(files),"markdown files"], 0));

return cljs.core.map.cljs$core$IFn$_invoke$arity$2(site.core.parse_one,files);
});
site.core.gen_all = (function site$core$gen_all(){

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\uD83C\uDF3D Starting NixtaVeganic site generation..."], 0));

var pages = site.core.parse_all();
var sitemap = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__7395_SHARP_){
return cljs.core.select_keys(p1__7395_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"title","title",636505583)], null));
}),pages);
var _ = site.core.ensure_dir_BANG_("../web/src/lib/generated");
var ___$1 = site.core.ensure_dir_BANG_("../web/static/content");
var seq__7404_7410 = cljs.core.seq(pages);
var chunk__7405_7411 = null;
var count__7406_7412 = (0);
var i__7407_7413 = (0);
while(true){
if((i__7407_7413 < count__7406_7412)){
var page_7414 = chunk__7405_7411.cljs$core$IIndexed$_nth$arity$2(null,i__7407_7413);
site.core.gen_page(page_7414);


var G__7415 = seq__7404_7410;
var G__7416 = chunk__7405_7411;
var G__7417 = count__7406_7412;
var G__7418 = (i__7407_7413 + (1));
seq__7404_7410 = G__7415;
chunk__7405_7411 = G__7416;
count__7406_7412 = G__7417;
i__7407_7413 = G__7418;
continue;
} else {
var temp__5804__auto___7419 = cljs.core.seq(seq__7404_7410);
if(temp__5804__auto___7419){
var seq__7404_7420__$1 = temp__5804__auto___7419;
if(cljs.core.chunked_seq_QMARK_(seq__7404_7420__$1)){
var c__5525__auto___7421 = cljs.core.chunk_first(seq__7404_7420__$1);
var G__7422 = cljs.core.chunk_rest(seq__7404_7420__$1);
var G__7423 = c__5525__auto___7421;
var G__7424 = cljs.core.count(c__5525__auto___7421);
var G__7425 = (0);
seq__7404_7410 = G__7422;
chunk__7405_7411 = G__7423;
count__7406_7412 = G__7424;
i__7407_7413 = G__7425;
continue;
} else {
var page_7426 = cljs.core.first(seq__7404_7420__$1);
site.core.gen_page(page_7426);


var G__7427 = cljs.core.next(seq__7404_7420__$1);
var G__7428 = null;
var G__7429 = (0);
var G__7430 = (0);
seq__7404_7410 = G__7427;
chunk__7405_7411 = G__7428;
count__7406_7412 = G__7429;
i__7407_7413 = G__7430;
continue;
}
} else {
}
}
break;
}

site.core.spit_STAR_("../web/src/lib/generated/sitemap.js",["// Auto-generated sitemap\n","export default ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(cljs.core.clj__GT_js(sitemap),null,(2))),";\n"].join(''));

site.core.spit_STAR_("../web/static/sitemap.json",JSON.stringify(cljs.core.clj__GT_js(sitemap),null,(2)));

var exports_7431__$1 = clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__7398_SHARP_){
return ["export { default as Page",clojure.string.replace(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__7398_SHARP_),/[^a-zA-Z0-9]/,"_")," } from './",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__7398_SHARP_)),".svelte';"].join('');
}),pages));
site.core.spit_STAR_("../web/src/lib/generated/index.js",["// Auto-generated component exports\n",exports_7431__$1,"\n"].join(''));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\u2705 Generated",cljs.core.count(pages),"Svelte components"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\uD83D\uDCCA Created sitemap with",cljs.core.count(sitemap),"entries"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\uD83C\uDFAF Site generation complete!"], 0));

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pages","pages",-285406513),cljs.core.count(pages),new cljs.core.Keyword(null,"components","components",-1073188942),cljs.core.count(pages),new cljs.core.Keyword(null,"sitemap","sitemap",-1803284096),cljs.core.count(sitemap)], null);
});
site.core.main = (function site$core$main(){

try{var result = site.core.gen_all();
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\uD83C\uDF1F Generation successful:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([result], 0))], 0));

return (0);
}catch (e7408){if((e7408 instanceof Error)){
var e = e7408;
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\u274C Generation failed:",e.message], 0));

return (1);
} else {
throw e7408;

}
}});
goog.exportSymbol('site.core.main', site.core.main);
site.core._main = (function site$core$_main(var_args){
var args__5732__auto__ = [];
var len__5726__auto___7432 = arguments.length;
var i__5727__auto___7433 = (0);
while(true){
if((i__5727__auto___7433 < len__5726__auto___7432)){
args__5732__auto__.push((arguments[i__5727__auto___7433]));

var G__7434 = (i__5727__auto___7433 + (1));
i__5727__auto___7433 = G__7434;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return site.core._main.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(site.core._main.cljs$core$IFn$_invoke$arity$variadic = (function (args){

return site.core.main();
}));

(site.core._main.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(site.core._main.cljs$lang$applyTo = (function (seq7409){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq7409));
}));

if((((typeof process !== 'undefined')) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(process.argv,process.argv)))){
site.core.main();
} else {
}
site.core.dev_rebuild = (function site$core$dev_rebuild(){

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\uD83D\uDD04 Development rebuild..."], 0));

return site.core.gen_all();
});

//# sourceMappingURL=site.core.js.map
