goog.provide('site.parser');
/**
 * Parse markdown string to AST (pure function)
 */
site.parser.md__GT_ast = (function site$parser$md__GT_ast(markdown_str){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (block){
if(clojure.string.starts_with_QMARK_(block,"# ")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(block,(2))], null);
} else {
if(clojure.string.starts_with_QMARK_(block,"## ")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(block,(3))], null);
} else {
if(clojure.string.starts_with_QMARK_(block,"### ")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(block,(4))], null);
} else {
if(clojure.string.starts_with_QMARK_(block,"- ")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (line){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(line,(2))], null);
}),clojure.string.split_lines(block))], null);
} else {
if(clojure.string.starts_with_QMARK_(block,"```")){
var lines = clojure.string.split_lines(block);
var lang = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(cljs.core.first(lines),(3));
var content = clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.drop.cljs$core$IFn$_invoke$arity$2((1),cljs.core.drop_last.cljs$core$IFn$_invoke$arity$1(lines)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code-block","code-block",-2113425141),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lang","lang",-1819677104),lang], null),content], null);
} else {
if(clojure.string.starts_with_QMARK_(block,"> ")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blockquote","blockquote",372264190),clojure.string.replace(block,/^> /,"")], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),block], null);

}
}
}
}
}
}
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.empty_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,clojure.string.split.cljs$core$IFn$_invoke$arity$2(markdown_str,/\n\n+/)))));
});
site.parser.load_markdown_file = (function site$parser$load_markdown_file(file_path){

try{var content = (site.parser.slurp.cljs$core$IFn$_invoke$arity$1 ? site.parser.slurp.cljs$core$IFn$_invoke$arity$1(file_path) : site.parser.slurp.call(null,file_path));
var filename = clojure.string.replace(cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(file_path,/\//)),/\.md$/,"");
var ast = site.parser.md__GT_ast(content);
var title = cljs.core.some((function (p1__7243_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(p1__7243_SHARP_),new cljs.core.Keyword(null,"h1","h1",-1896887462))){
return cljs.core.second(p1__7243_SHARP_);
} else {
return null;
}
}),ast);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),filename,new cljs.core.Keyword(null,"title","title",636505583),(function (){var or__5002__auto__ = title;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return filename;
}
})(),new cljs.core.Keyword(null,"ast","ast",-860334068),ast,new cljs.core.Keyword(null,"file-path","file-path",-2005501162),file_path], null);
}catch (e7244){if((e7244 instanceof Error)){
var e = e7244;
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error loading",file_path,":",e.message], 0));

return null;
} else {
throw e7244;

}
}});
site.parser.find_markdown_files = (function site$parser$find_markdown_files(docs_dir){

var fs = require("fs");
var path = require("path");
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__7246_SHARP_){
return path.join(docs_dir,p1__7246_SHARP_);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__7245_SHARP_){
return clojure.string.ends_with_QMARK_(p1__7245_SHARP_,".md");
}),fs.readdirSync(docs_dir))));
});
site.parser.parse_files_async = (function site$parser$parse_files_async(file_paths){

var input_ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((10));
var output_ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((10));
var workers = (4);
var n__5593__auto___7361 = workers;
var __7362 = (0);
while(true){
if((__7362 < n__5593__auto___7361)){
var c__7186__auto___7363 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__7362,c__7186__auto___7363,n__5593__auto___7361,input_ch,output_ch,workers){
return (function (){
var f__7187__auto__ = (function (){var switch__7163__auto__ = ((function (__7362,c__7186__auto___7363,n__5593__auto___7361,input_ch,output_ch,workers){
return (function (state_7265){
var state_val_7266 = (state_7265[(1)]);
if((state_val_7266 === (7))){
var inst_7261 = (state_7265[(2)]);
var state_7265__$1 = state_7265;
var statearr_7267_7364 = state_7265__$1;
(statearr_7267_7364[(2)] = inst_7261);

(statearr_7267_7364[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7266 === (1))){
var state_7265__$1 = state_7265;
var statearr_7268_7365 = state_7265__$1;
(statearr_7268_7365[(2)] = null);

(statearr_7268_7365[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7266 === (4))){
var inst_7249 = (state_7265[(7)]);
var inst_7249__$1 = (state_7265[(2)]);
var state_7265__$1 = (function (){var statearr_7269 = state_7265;
(statearr_7269[(7)] = inst_7249__$1);

return statearr_7269;
})();
if(cljs.core.truth_(inst_7249__$1)){
var statearr_7270_7366 = state_7265__$1;
(statearr_7270_7366[(1)] = (5));

} else {
var statearr_7271_7367 = state_7265__$1;
(statearr_7271_7367[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7266 === (6))){
var state_7265__$1 = state_7265;
var statearr_7272_7368 = state_7265__$1;
(statearr_7272_7368[(2)] = null);

(statearr_7272_7368[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7266 === (3))){
var inst_7263 = (state_7265[(2)]);
var state_7265__$1 = state_7265;
return cljs.core.async.impl.ioc_helpers.return_chan(state_7265__$1,inst_7263);
} else {
if((state_val_7266 === (2))){
var state_7265__$1 = state_7265;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_7265__$1,(4),input_ch);
} else {
if((state_val_7266 === (11))){
var inst_7254 = (state_7265[(2)]);
var state_7265__$1 = state_7265;
var statearr_7273_7369 = state_7265__$1;
(statearr_7273_7369[(2)] = inst_7254);

(statearr_7273_7369[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7266 === (9))){
var state_7265__$1 = state_7265;
var statearr_7274_7370 = state_7265__$1;
(statearr_7274_7370[(2)] = null);

(statearr_7274_7370[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7266 === (5))){
var inst_7249 = (state_7265[(7)]);
var inst_7251 = (state_7265[(8)]);
var inst_7251__$1 = site.parser.load_markdown_file(inst_7249);
var state_7265__$1 = (function (){var statearr_7275 = state_7265;
(statearr_7275[(8)] = inst_7251__$1);

return statearr_7275;
})();
if(cljs.core.truth_(inst_7251__$1)){
var statearr_7276_7371 = state_7265__$1;
(statearr_7276_7371[(1)] = (8));

} else {
var statearr_7277_7372 = state_7265__$1;
(statearr_7277_7372[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7266 === (10))){
var inst_7257 = (state_7265[(2)]);
var state_7265__$1 = (function (){var statearr_7278 = state_7265;
(statearr_7278[(9)] = inst_7257);

return statearr_7278;
})();
var statearr_7279_7373 = state_7265__$1;
(statearr_7279_7373[(2)] = null);

(statearr_7279_7373[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7266 === (8))){
var inst_7251 = (state_7265[(8)]);
var state_7265__$1 = state_7265;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_7265__$1,(11),output_ch,inst_7251);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(__7362,c__7186__auto___7363,n__5593__auto___7361,input_ch,output_ch,workers))
;
return ((function (__7362,switch__7163__auto__,c__7186__auto___7363,n__5593__auto___7361,input_ch,output_ch,workers){
return (function() {
var site$parser$parse_files_async_$_state_machine__7164__auto__ = null;
var site$parser$parse_files_async_$_state_machine__7164__auto____0 = (function (){
var statearr_7280 = [null,null,null,null,null,null,null,null,null,null];
(statearr_7280[(0)] = site$parser$parse_files_async_$_state_machine__7164__auto__);

(statearr_7280[(1)] = (1));

return statearr_7280;
});
var site$parser$parse_files_async_$_state_machine__7164__auto____1 = (function (state_7265){
while(true){
var ret_value__7165__auto__ = (function (){try{while(true){
var result__7166__auto__ = switch__7163__auto__(state_7265);
if(cljs.core.keyword_identical_QMARK_(result__7166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7166__auto__;
}
break;
}
}catch (e7281){var ex__7167__auto__ = e7281;
var statearr_7282_7374 = state_7265;
(statearr_7282_7374[(2)] = ex__7167__auto__);


if(cljs.core.seq((state_7265[(4)]))){
var statearr_7283_7375 = state_7265;
(statearr_7283_7375[(1)] = cljs.core.first((state_7265[(4)])));

} else {
throw ex__7167__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7165__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7376 = state_7265;
state_7265 = G__7376;
continue;
} else {
return ret_value__7165__auto__;
}
break;
}
});
site$parser$parse_files_async_$_state_machine__7164__auto__ = function(state_7265){
switch(arguments.length){
case 0:
return site$parser$parse_files_async_$_state_machine__7164__auto____0.call(this);
case 1:
return site$parser$parse_files_async_$_state_machine__7164__auto____1.call(this,state_7265);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
site$parser$parse_files_async_$_state_machine__7164__auto__.cljs$core$IFn$_invoke$arity$0 = site$parser$parse_files_async_$_state_machine__7164__auto____0;
site$parser$parse_files_async_$_state_machine__7164__auto__.cljs$core$IFn$_invoke$arity$1 = site$parser$parse_files_async_$_state_machine__7164__auto____1;
return site$parser$parse_files_async_$_state_machine__7164__auto__;
})()
;})(__7362,switch__7163__auto__,c__7186__auto___7363,n__5593__auto___7361,input_ch,output_ch,workers))
})();
var state__7188__auto__ = (function (){var statearr_7284 = f__7187__auto__();
(statearr_7284[(6)] = c__7186__auto___7363);

return statearr_7284;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7188__auto__);
});})(__7362,c__7186__auto___7363,n__5593__auto___7361,input_ch,output_ch,workers))
);


var G__7377 = (__7362 + (1));
__7362 = G__7377;
continue;
} else {
}
break;
}

var c__7186__auto___7378 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__7187__auto__ = (function (){var switch__7163__auto__ = (function (state_7329){
var state_val_7330 = (state_7329[(1)]);
if((state_val_7330 === (7))){
var inst_7291 = (state_7329[(7)]);
var inst_7292 = (state_7329[(8)]);
var inst_7293 = (state_7329[(9)]);
var inst_7290 = (state_7329[(10)]);
var inst_7300 = (state_7329[(2)]);
var inst_7301 = (inst_7293 + (1));
var tmp7331 = inst_7291;
var tmp7332 = inst_7292;
var tmp7333 = inst_7290;
var inst_7290__$1 = tmp7333;
var inst_7291__$1 = tmp7331;
var inst_7292__$1 = tmp7332;
var inst_7293__$1 = inst_7301;
var state_7329__$1 = (function (){var statearr_7334 = state_7329;
(statearr_7334[(7)] = inst_7291__$1);

(statearr_7334[(8)] = inst_7292__$1);

(statearr_7334[(9)] = inst_7293__$1);

(statearr_7334[(11)] = inst_7300);

(statearr_7334[(10)] = inst_7290__$1);

return statearr_7334;
})();
var statearr_7335_7381 = state_7329__$1;
(statearr_7335_7381[(2)] = null);

(statearr_7335_7381[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7330 === (1))){
var inst_7289 = cljs.core.seq(file_paths);
var inst_7290 = inst_7289;
var inst_7291 = null;
var inst_7292 = (0);
var inst_7293 = (0);
var state_7329__$1 = (function (){var statearr_7336 = state_7329;
(statearr_7336[(7)] = inst_7291);

(statearr_7336[(8)] = inst_7292);

(statearr_7336[(9)] = inst_7293);

(statearr_7336[(10)] = inst_7290);

return statearr_7336;
})();
var statearr_7337_7384 = state_7329__$1;
(statearr_7337_7384[(2)] = null);

(statearr_7337_7384[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7330 === (4))){
var inst_7291 = (state_7329[(7)]);
var inst_7293 = (state_7329[(9)]);
var inst_7298 = cljs.core._nth(inst_7291,inst_7293);
var state_7329__$1 = state_7329;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_7329__$1,(7),input_ch,inst_7298);
} else {
if((state_val_7330 === (13))){
var inst_7319 = (state_7329[(2)]);
var state_7329__$1 = state_7329;
var statearr_7338_7385 = state_7329__$1;
(statearr_7338_7385[(2)] = inst_7319);

(statearr_7338_7385[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7330 === (6))){
var inst_7324 = (state_7329[(2)]);
var state_7329__$1 = state_7329;
var statearr_7339_7386 = state_7329__$1;
(statearr_7339_7386[(2)] = inst_7324);

(statearr_7339_7386[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7330 === (3))){
var inst_7326 = (state_7329[(2)]);
var inst_7327 = cljs.core.async.close_BANG_(input_ch);
var state_7329__$1 = (function (){var statearr_7340 = state_7329;
(statearr_7340[(12)] = inst_7326);

return statearr_7340;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_7329__$1,inst_7327);
} else {
if((state_val_7330 === (12))){
var inst_7304 = (state_7329[(13)]);
var inst_7313 = cljs.core.first(inst_7304);
var state_7329__$1 = state_7329;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_7329__$1,(14),input_ch,inst_7313);
} else {
if((state_val_7330 === (2))){
var inst_7292 = (state_7329[(8)]);
var inst_7293 = (state_7329[(9)]);
var inst_7295 = (inst_7293 < inst_7292);
var inst_7296 = inst_7295;
var state_7329__$1 = state_7329;
if(cljs.core.truth_(inst_7296)){
var statearr_7341_7389 = state_7329__$1;
(statearr_7341_7389[(1)] = (4));

} else {
var statearr_7342_7390 = state_7329__$1;
(statearr_7342_7390[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7330 === (11))){
var inst_7304 = (state_7329[(13)]);
var inst_7308 = cljs.core.chunk_first(inst_7304);
var inst_7309 = cljs.core.chunk_rest(inst_7304);
var inst_7310 = cljs.core.count(inst_7308);
var inst_7290 = inst_7309;
var inst_7291 = inst_7308;
var inst_7292 = inst_7310;
var inst_7293 = (0);
var state_7329__$1 = (function (){var statearr_7343 = state_7329;
(statearr_7343[(7)] = inst_7291);

(statearr_7343[(8)] = inst_7292);

(statearr_7343[(9)] = inst_7293);

(statearr_7343[(10)] = inst_7290);

return statearr_7343;
})();
var statearr_7344_7391 = state_7329__$1;
(statearr_7344_7391[(2)] = null);

(statearr_7344_7391[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7330 === (9))){
var state_7329__$1 = state_7329;
var statearr_7345_7392 = state_7329__$1;
(statearr_7345_7392[(2)] = null);

(statearr_7345_7392[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7330 === (5))){
var inst_7304 = (state_7329[(13)]);
var inst_7290 = (state_7329[(10)]);
var inst_7304__$1 = cljs.core.seq(inst_7290);
var state_7329__$1 = (function (){var statearr_7346 = state_7329;
(statearr_7346[(13)] = inst_7304__$1);

return statearr_7346;
})();
if(inst_7304__$1){
var statearr_7347_7394 = state_7329__$1;
(statearr_7347_7394[(1)] = (8));

} else {
var statearr_7348_7395 = state_7329__$1;
(statearr_7348_7395[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7330 === (14))){
var inst_7304 = (state_7329[(13)]);
var inst_7315 = (state_7329[(2)]);
var inst_7316 = cljs.core.next(inst_7304);
var inst_7290 = inst_7316;
var inst_7291 = null;
var inst_7292 = (0);
var inst_7293 = (0);
var state_7329__$1 = (function (){var statearr_7349 = state_7329;
(statearr_7349[(7)] = inst_7291);

(statearr_7349[(8)] = inst_7292);

(statearr_7349[(9)] = inst_7293);

(statearr_7349[(14)] = inst_7315);

(statearr_7349[(10)] = inst_7290);

return statearr_7349;
})();
var statearr_7350_7397 = state_7329__$1;
(statearr_7350_7397[(2)] = null);

(statearr_7350_7397[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7330 === (10))){
var inst_7322 = (state_7329[(2)]);
var state_7329__$1 = state_7329;
var statearr_7351_7398 = state_7329__$1;
(statearr_7351_7398[(2)] = inst_7322);

(statearr_7351_7398[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7330 === (8))){
var inst_7304 = (state_7329[(13)]);
var inst_7306 = cljs.core.chunked_seq_QMARK_(inst_7304);
var state_7329__$1 = state_7329;
if(inst_7306){
var statearr_7352_7399 = state_7329__$1;
(statearr_7352_7399[(1)] = (11));

} else {
var statearr_7353_7400 = state_7329__$1;
(statearr_7353_7400[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var site$parser$parse_files_async_$_state_machine__7164__auto__ = null;
var site$parser$parse_files_async_$_state_machine__7164__auto____0 = (function (){
var statearr_7354 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_7354[(0)] = site$parser$parse_files_async_$_state_machine__7164__auto__);

(statearr_7354[(1)] = (1));

return statearr_7354;
});
var site$parser$parse_files_async_$_state_machine__7164__auto____1 = (function (state_7329){
while(true){
var ret_value__7165__auto__ = (function (){try{while(true){
var result__7166__auto__ = switch__7163__auto__(state_7329);
if(cljs.core.keyword_identical_QMARK_(result__7166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7166__auto__;
}
break;
}
}catch (e7355){var ex__7167__auto__ = e7355;
var statearr_7356_7405 = state_7329;
(statearr_7356_7405[(2)] = ex__7167__auto__);


if(cljs.core.seq((state_7329[(4)]))){
var statearr_7357_7406 = state_7329;
(statearr_7357_7406[(1)] = cljs.core.first((state_7329[(4)])));

} else {
throw ex__7167__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7165__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7407 = state_7329;
state_7329 = G__7407;
continue;
} else {
return ret_value__7165__auto__;
}
break;
}
});
site$parser$parse_files_async_$_state_machine__7164__auto__ = function(state_7329){
switch(arguments.length){
case 0:
return site$parser$parse_files_async_$_state_machine__7164__auto____0.call(this);
case 1:
return site$parser$parse_files_async_$_state_machine__7164__auto____1.call(this,state_7329);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
site$parser$parse_files_async_$_state_machine__7164__auto__.cljs$core$IFn$_invoke$arity$0 = site$parser$parse_files_async_$_state_machine__7164__auto____0;
site$parser$parse_files_async_$_state_machine__7164__auto__.cljs$core$IFn$_invoke$arity$1 = site$parser$parse_files_async_$_state_machine__7164__auto____1;
return site$parser$parse_files_async_$_state_machine__7164__auto__;
})()
})();
var state__7188__auto__ = (function (){var statearr_7358 = f__7187__auto__();
(statearr_7358[(6)] = c__7186__auto___7378);

return statearr_7358;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7188__auto__);
}));


return output_ch;
});
site.parser.parse_all_docs = (function site$parser$parse_all_docs(){

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\uD83D\uDCD6 Parsing all documentation files..."], 0));

var docs_dir = "../docs";
var files = site.parser.find_markdown_files(docs_dir);
var _ = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\uD83D\uDCC4 Found",cljs.core.count(files),"markdown files"], 0));
var results_ch = site.parser.parse_files_async(files);
var pages = (function (){var G__7360 = cljs.core.async.into(cljs.core.PersistentVector.EMPTY,results_ch);
return (cljs.core.async._LT__BANG__BANG_.cljs$core$IFn$_invoke$arity$1 ? cljs.core.async._LT__BANG__BANG_.cljs$core$IFn$_invoke$arity$1(G__7360) : cljs.core.async._LT__BANG__BANG_.call(null,G__7360));
})();
var sitemap = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__7359_SHARP_){
return cljs.core.select_keys(p1__7359_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"title","title",636505583)], null));
}),pages);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\u2705 Parsed",cljs.core.count(pages),"pages"], 0));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pages","pages",-285406513),pages,new cljs.core.Keyword(null,"sitemap","sitemap",-1803284096),sitemap], null);
});
site.parser.main = (function site$parser$main(){

var result = site.parser.parse_all_docs();
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Parser completed successfully"], 0));

return result;
});
if((typeof process !== 'undefined')){
(cljs.core._STAR_main_cli_fn_STAR_ = site.parser.main);
} else {
}

//# sourceMappingURL=site.parser.js.map
