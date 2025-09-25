goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9399 = (function (f,blockable,meta9400){
this.f = f;
this.blockable = blockable;
this.meta9400 = meta9400;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async9399.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9401,meta9400__$1){
var self__ = this;
var _9401__$1 = this;
return (new cljs.core.async.t_cljs$core$async9399(self__.f,self__.blockable,meta9400__$1));
}));

(cljs.core.async.t_cljs$core$async9399.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9401){
var self__ = this;
var _9401__$1 = this;
return self__.meta9400;
}));

(cljs.core.async.t_cljs$core$async9399.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async9399.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async9399.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async9399.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async9399.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta9400","meta9400",831437102,null)], null);
}));

(cljs.core.async.t_cljs$core$async9399.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async9399.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9399");

(cljs.core.async.t_cljs$core$async9399.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async9399");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async9399.
 */
cljs.core.async.__GT_t_cljs$core$async9399 = (function cljs$core$async$__GT_t_cljs$core$async9399(f,blockable,meta9400){
return (new cljs.core.async.t_cljs$core$async9399(f,blockable,meta9400));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__9398 = arguments.length;
switch (G__9398) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async9399(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__9451 = arguments.length;
switch (G__9451) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__9478 = arguments.length;
switch (G__9478) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__9482 = arguments.length;
switch (G__9482) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_11621 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_11621) : fn1.call(null,val_11621));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_11621) : fn1.call(null,val_11621));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__9488 = arguments.length;
switch (G__9488) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5593__auto___11635 = n;
var x_11638 = (0);
while(true){
if((x_11638 < n__5593__auto___11635)){
(a[x_11638] = x_11638);

var G__11648 = (x_11638 + (1));
x_11638 = G__11648;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9496 = (function (flag,meta9497){
this.flag = flag;
this.meta9497 = meta9497;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async9496.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9498,meta9497__$1){
var self__ = this;
var _9498__$1 = this;
return (new cljs.core.async.t_cljs$core$async9496(self__.flag,meta9497__$1));
}));

(cljs.core.async.t_cljs$core$async9496.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9498){
var self__ = this;
var _9498__$1 = this;
return self__.meta9497;
}));

(cljs.core.async.t_cljs$core$async9496.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async9496.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async9496.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async9496.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async9496.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta9497","meta9497",1474510018,null)], null);
}));

(cljs.core.async.t_cljs$core$async9496.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async9496.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9496");

(cljs.core.async.t_cljs$core$async9496.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async9496");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async9496.
 */
cljs.core.async.__GT_t_cljs$core$async9496 = (function cljs$core$async$__GT_t_cljs$core$async9496(flag,meta9497){
return (new cljs.core.async.t_cljs$core$async9496(flag,meta9497));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async9496(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9508 = (function (flag,cb,meta9509){
this.flag = flag;
this.cb = cb;
this.meta9509 = meta9509;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async9508.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9510,meta9509__$1){
var self__ = this;
var _9510__$1 = this;
return (new cljs.core.async.t_cljs$core$async9508(self__.flag,self__.cb,meta9509__$1));
}));

(cljs.core.async.t_cljs$core$async9508.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9510){
var self__ = this;
var _9510__$1 = this;
return self__.meta9509;
}));

(cljs.core.async.t_cljs$core$async9508.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async9508.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async9508.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async9508.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async9508.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta9509","meta9509",848544964,null)], null);
}));

(cljs.core.async.t_cljs$core$async9508.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async9508.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9508");

(cljs.core.async.t_cljs$core$async9508.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async9508");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async9508.
 */
cljs.core.async.__GT_t_cljs$core$async9508 = (function cljs$core$async$__GT_t_cljs$core$async9508(flag,cb,meta9509){
return (new cljs.core.async.t_cljs$core$async9508(flag,cb,meta9509));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async9508(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__9527_SHARP_){
var G__9535 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__9527_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__9535) : fret.call(null,G__9535));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__9528_SHARP_){
var G__9538 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__9528_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__9538) : fret.call(null,G__9538));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5002__auto__ = wport;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return port;
}
})()], null));
} else {
var G__11661 = (i + (1));
i = G__11661;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5002__auto__ = ret;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5000__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5000__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5000__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___11664 = arguments.length;
var i__5727__auto___11665 = (0);
while(true){
if((i__5727__auto___11665 < len__5726__auto___11664)){
args__5732__auto__.push((arguments[i__5727__auto___11665]));

var G__11667 = (i__5727__auto___11665 + (1));
i__5727__auto___11665 = G__11667;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__9541){
var map__9542 = p__9541;
var map__9542__$1 = cljs.core.__destructure_map(map__9542);
var opts = map__9542__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq9539){
var G__9540 = cljs.core.first(seq9539);
var seq9539__$1 = cljs.core.next(seq9539);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9540,seq9539__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__9551 = arguments.length;
switch (G__9551) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__9331__auto___11677 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__9332__auto__ = (function (){var switch__8854__auto__ = (function (state_9588){
var state_val_9589 = (state_9588[(1)]);
if((state_val_9589 === (7))){
var inst_9584 = (state_9588[(2)]);
var state_9588__$1 = state_9588;
var statearr_9595_11680 = state_9588__$1;
(statearr_9595_11680[(2)] = inst_9584);

(statearr_9595_11680[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9589 === (1))){
var state_9588__$1 = state_9588;
var statearr_9597_11683 = state_9588__$1;
(statearr_9597_11683[(2)] = null);

(statearr_9597_11683[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9589 === (4))){
var inst_9563 = (state_9588[(7)]);
var inst_9563__$1 = (state_9588[(2)]);
var inst_9566 = (inst_9563__$1 == null);
var state_9588__$1 = (function (){var statearr_9602 = state_9588;
(statearr_9602[(7)] = inst_9563__$1);

return statearr_9602;
})();
if(cljs.core.truth_(inst_9566)){
var statearr_9603_11684 = state_9588__$1;
(statearr_9603_11684[(1)] = (5));

} else {
var statearr_9605_11685 = state_9588__$1;
(statearr_9605_11685[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9589 === (13))){
var state_9588__$1 = state_9588;
var statearr_9609_11687 = state_9588__$1;
(statearr_9609_11687[(2)] = null);

(statearr_9609_11687[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9589 === (6))){
var inst_9563 = (state_9588[(7)]);
var state_9588__$1 = state_9588;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_9588__$1,(11),to,inst_9563);
} else {
if((state_val_9589 === (3))){
var inst_9586 = (state_9588[(2)]);
var state_9588__$1 = state_9588;
return cljs.core.async.impl.ioc_helpers.return_chan(state_9588__$1,inst_9586);
} else {
if((state_val_9589 === (12))){
var state_9588__$1 = state_9588;
var statearr_9615_11712 = state_9588__$1;
(statearr_9615_11712[(2)] = null);

(statearr_9615_11712[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9589 === (2))){
var state_9588__$1 = state_9588;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_9588__$1,(4),from);
} else {
if((state_val_9589 === (11))){
var inst_9577 = (state_9588[(2)]);
var state_9588__$1 = state_9588;
if(cljs.core.truth_(inst_9577)){
var statearr_9616_11724 = state_9588__$1;
(statearr_9616_11724[(1)] = (12));

} else {
var statearr_9618_11732 = state_9588__$1;
(statearr_9618_11732[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9589 === (9))){
var state_9588__$1 = state_9588;
var statearr_9620_11739 = state_9588__$1;
(statearr_9620_11739[(2)] = null);

(statearr_9620_11739[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9589 === (5))){
var state_9588__$1 = state_9588;
if(cljs.core.truth_(close_QMARK_)){
var statearr_9622_11746 = state_9588__$1;
(statearr_9622_11746[(1)] = (8));

} else {
var statearr_9623_11747 = state_9588__$1;
(statearr_9623_11747[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9589 === (14))){
var inst_9582 = (state_9588[(2)]);
var state_9588__$1 = state_9588;
var statearr_9626_11748 = state_9588__$1;
(statearr_9626_11748[(2)] = inst_9582);

(statearr_9626_11748[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9589 === (10))){
var inst_9574 = (state_9588[(2)]);
var state_9588__$1 = state_9588;
var statearr_9627_11749 = state_9588__$1;
(statearr_9627_11749[(2)] = inst_9574);

(statearr_9627_11749[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9589 === (8))){
var inst_9571 = cljs.core.async.close_BANG_(to);
var state_9588__$1 = state_9588;
var statearr_9628_11751 = state_9588__$1;
(statearr_9628_11751[(2)] = inst_9571);

(statearr_9628_11751[(1)] = (10));


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
var cljs$core$async$state_machine__8855__auto__ = null;
var cljs$core$async$state_machine__8855__auto____0 = (function (){
var statearr_9629 = [null,null,null,null,null,null,null,null];
(statearr_9629[(0)] = cljs$core$async$state_machine__8855__auto__);

(statearr_9629[(1)] = (1));

return statearr_9629;
});
var cljs$core$async$state_machine__8855__auto____1 = (function (state_9588){
while(true){
var ret_value__8856__auto__ = (function (){try{while(true){
var result__8857__auto__ = switch__8854__auto__(state_9588);
if(cljs.core.keyword_identical_QMARK_(result__8857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8857__auto__;
}
break;
}
}catch (e9630){var ex__8858__auto__ = e9630;
var statearr_9631_11753 = state_9588;
(statearr_9631_11753[(2)] = ex__8858__auto__);


if(cljs.core.seq((state_9588[(4)]))){
var statearr_9632_11755 = state_9588;
(statearr_9632_11755[(1)] = cljs.core.first((state_9588[(4)])));

} else {
throw ex__8858__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11756 = state_9588;
state_9588 = G__11756;
continue;
} else {
return ret_value__8856__auto__;
}
break;
}
});
cljs$core$async$state_machine__8855__auto__ = function(state_9588){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8855__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8855__auto____1.call(this,state_9588);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8855__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8855__auto____0;
cljs$core$async$state_machine__8855__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8855__auto____1;
return cljs$core$async$state_machine__8855__auto__;
})()
})();
var state__9333__auto__ = (function (){var statearr_9636 = f__9332__auto__();
(statearr_9636[(6)] = c__9331__auto___11677);

return statearr_9636;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__9333__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__9649){
var vec__9650 = p__9649;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9650,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9650,(1),null);
var job = vec__9650;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__9331__auto___11760 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__9332__auto__ = (function (){var switch__8854__auto__ = (function (state_9662){
var state_val_9663 = (state_9662[(1)]);
if((state_val_9663 === (1))){
var state_9662__$1 = state_9662;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_9662__$1,(2),res,v);
} else {
if((state_val_9663 === (2))){
var inst_9659 = (state_9662[(2)]);
var inst_9660 = cljs.core.async.close_BANG_(res);
var state_9662__$1 = (function (){var statearr_9667 = state_9662;
(statearr_9667[(7)] = inst_9659);

return statearr_9667;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_9662__$1,inst_9660);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__8855__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__8855__auto____0 = (function (){
var statearr_9668 = [null,null,null,null,null,null,null,null];
(statearr_9668[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__8855__auto__);

(statearr_9668[(1)] = (1));

return statearr_9668;
});
var cljs$core$async$pipeline_STAR__$_state_machine__8855__auto____1 = (function (state_9662){
while(true){
var ret_value__8856__auto__ = (function (){try{while(true){
var result__8857__auto__ = switch__8854__auto__(state_9662);
if(cljs.core.keyword_identical_QMARK_(result__8857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8857__auto__;
}
break;
}
}catch (e9669){var ex__8858__auto__ = e9669;
var statearr_9670_11763 = state_9662;
(statearr_9670_11763[(2)] = ex__8858__auto__);


if(cljs.core.seq((state_9662[(4)]))){
var statearr_9671_11764 = state_9662;
(statearr_9671_11764[(1)] = cljs.core.first((state_9662[(4)])));

} else {
throw ex__8858__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11765 = state_9662;
state_9662 = G__11765;
continue;
} else {
return ret_value__8856__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__8855__auto__ = function(state_9662){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__8855__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__8855__auto____1.call(this,state_9662);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__8855__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__8855__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__8855__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__8855__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__8855__auto__;
})()
})();
var state__9333__auto__ = (function (){var statearr_9672 = f__9332__auto__();
(statearr_9672[(6)] = c__9331__auto___11760);

return statearr_9672;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__9333__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__9674){
var vec__9675 = p__9674;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9675,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9675,(1),null);
var job = vec__9675;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5593__auto___11769 = n;
var __11770 = (0);
while(true){
if((__11770 < n__5593__auto___11769)){
var G__9679_11772 = type;
var G__9679_11773__$1 = (((G__9679_11772 instanceof cljs.core.Keyword))?G__9679_11772.fqn:null);
switch (G__9679_11773__$1) {
case "compute":
var c__9331__auto___11776 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__11770,c__9331__auto___11776,G__9679_11772,G__9679_11773__$1,n__5593__auto___11769,jobs,results,process__$1,async){
return (function (){
var f__9332__auto__ = (function (){var switch__8854__auto__ = ((function (__11770,c__9331__auto___11776,G__9679_11772,G__9679_11773__$1,n__5593__auto___11769,jobs,results,process__$1,async){
return (function (state_9694){
var state_val_9695 = (state_9694[(1)]);
if((state_val_9695 === (1))){
var state_9694__$1 = state_9694;
var statearr_9696_11778 = state_9694__$1;
(statearr_9696_11778[(2)] = null);

(statearr_9696_11778[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9695 === (2))){
var state_9694__$1 = state_9694;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_9694__$1,(4),jobs);
} else {
if((state_val_9695 === (3))){
var inst_9692 = (state_9694[(2)]);
var state_9694__$1 = state_9694;
return cljs.core.async.impl.ioc_helpers.return_chan(state_9694__$1,inst_9692);
} else {
if((state_val_9695 === (4))){
var inst_9684 = (state_9694[(2)]);
var inst_9685 = process__$1(inst_9684);
var state_9694__$1 = state_9694;
if(cljs.core.truth_(inst_9685)){
var statearr_9700_11782 = state_9694__$1;
(statearr_9700_11782[(1)] = (5));

} else {
var statearr_9703_11783 = state_9694__$1;
(statearr_9703_11783[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9695 === (5))){
var state_9694__$1 = state_9694;
var statearr_9705_11784 = state_9694__$1;
(statearr_9705_11784[(2)] = null);

(statearr_9705_11784[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9695 === (6))){
var state_9694__$1 = state_9694;
var statearr_9707_11786 = state_9694__$1;
(statearr_9707_11786[(2)] = null);

(statearr_9707_11786[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9695 === (7))){
var inst_9690 = (state_9694[(2)]);
var state_9694__$1 = state_9694;
var statearr_9708_11788 = state_9694__$1;
(statearr_9708_11788[(2)] = inst_9690);

(statearr_9708_11788[(1)] = (3));


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
});})(__11770,c__9331__auto___11776,G__9679_11772,G__9679_11773__$1,n__5593__auto___11769,jobs,results,process__$1,async))
;
return ((function (__11770,switch__8854__auto__,c__9331__auto___11776,G__9679_11772,G__9679_11773__$1,n__5593__auto___11769,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__8855__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__8855__auto____0 = (function (){
var statearr_9711 = [null,null,null,null,null,null,null];
(statearr_9711[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__8855__auto__);

(statearr_9711[(1)] = (1));

return statearr_9711;
});
var cljs$core$async$pipeline_STAR__$_state_machine__8855__auto____1 = (function (state_9694){
while(true){
var ret_value__8856__auto__ = (function (){try{while(true){
var result__8857__auto__ = switch__8854__auto__(state_9694);
if(cljs.core.keyword_identical_QMARK_(result__8857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8857__auto__;
}
break;
}
}catch (e9714){var ex__8858__auto__ = e9714;
var statearr_9715_11793 = state_9694;
(statearr_9715_11793[(2)] = ex__8858__auto__);


if(cljs.core.seq((state_9694[(4)]))){
var statearr_9716_11795 = state_9694;
(statearr_9716_11795[(1)] = cljs.core.first((state_9694[(4)])));

} else {
throw ex__8858__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11796 = state_9694;
state_9694 = G__11796;
continue;
} else {
return ret_value__8856__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__8855__auto__ = function(state_9694){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__8855__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__8855__auto____1.call(this,state_9694);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__8855__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__8855__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__8855__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__8855__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__8855__auto__;
})()
;})(__11770,switch__8854__auto__,c__9331__auto___11776,G__9679_11772,G__9679_11773__$1,n__5593__auto___11769,jobs,results,process__$1,async))
})();
var state__9333__auto__ = (function (){var statearr_9719 = f__9332__auto__();
(statearr_9719[(6)] = c__9331__auto___11776);

return statearr_9719;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__9333__auto__);
});})(__11770,c__9331__auto___11776,G__9679_11772,G__9679_11773__$1,n__5593__auto___11769,jobs,results,process__$1,async))
);


break;
case "async":
var c__9331__auto___11798 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__11770,c__9331__auto___11798,G__9679_11772,G__9679_11773__$1,n__5593__auto___11769,jobs,results,process__$1,async){
return (function (){
var f__9332__auto__ = (function (){var switch__8854__auto__ = ((function (__11770,c__9331__auto___11798,G__9679_11772,G__9679_11773__$1,n__5593__auto___11769,jobs,results,process__$1,async){
return (function (state_9734){
var state_val_9735 = (state_9734[(1)]);
if((state_val_9735 === (1))){
var state_9734__$1 = state_9734;
var statearr_9736_11802 = state_9734__$1;
(statearr_9736_11802[(2)] = null);

(statearr_9736_11802[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9735 === (2))){
var state_9734__$1 = state_9734;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_9734__$1,(4),jobs);
} else {
if((state_val_9735 === (3))){
var inst_9732 = (state_9734[(2)]);
var state_9734__$1 = state_9734;
return cljs.core.async.impl.ioc_helpers.return_chan(state_9734__$1,inst_9732);
} else {
if((state_val_9735 === (4))){
var inst_9724 = (state_9734[(2)]);
var inst_9725 = async(inst_9724);
var state_9734__$1 = state_9734;
if(cljs.core.truth_(inst_9725)){
var statearr_9737_11804 = state_9734__$1;
(statearr_9737_11804[(1)] = (5));

} else {
var statearr_9739_11805 = state_9734__$1;
(statearr_9739_11805[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9735 === (5))){
var state_9734__$1 = state_9734;
var statearr_9741_11806 = state_9734__$1;
(statearr_9741_11806[(2)] = null);

(statearr_9741_11806[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9735 === (6))){
var state_9734__$1 = state_9734;
var statearr_9742_11807 = state_9734__$1;
(statearr_9742_11807[(2)] = null);

(statearr_9742_11807[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9735 === (7))){
var inst_9730 = (state_9734[(2)]);
var state_9734__$1 = state_9734;
var statearr_9743_11809 = state_9734__$1;
(statearr_9743_11809[(2)] = inst_9730);

(statearr_9743_11809[(1)] = (3));


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
});})(__11770,c__9331__auto___11798,G__9679_11772,G__9679_11773__$1,n__5593__auto___11769,jobs,results,process__$1,async))
;
return ((function (__11770,switch__8854__auto__,c__9331__auto___11798,G__9679_11772,G__9679_11773__$1,n__5593__auto___11769,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__8855__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__8855__auto____0 = (function (){
var statearr_9744 = [null,null,null,null,null,null,null];
(statearr_9744[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__8855__auto__);

(statearr_9744[(1)] = (1));

return statearr_9744;
});
var cljs$core$async$pipeline_STAR__$_state_machine__8855__auto____1 = (function (state_9734){
while(true){
var ret_value__8856__auto__ = (function (){try{while(true){
var result__8857__auto__ = switch__8854__auto__(state_9734);
if(cljs.core.keyword_identical_QMARK_(result__8857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8857__auto__;
}
break;
}
}catch (e9746){var ex__8858__auto__ = e9746;
var statearr_9747_11811 = state_9734;
(statearr_9747_11811[(2)] = ex__8858__auto__);


if(cljs.core.seq((state_9734[(4)]))){
var statearr_9750_11813 = state_9734;
(statearr_9750_11813[(1)] = cljs.core.first((state_9734[(4)])));

} else {
throw ex__8858__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11814 = state_9734;
state_9734 = G__11814;
continue;
} else {
return ret_value__8856__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__8855__auto__ = function(state_9734){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__8855__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__8855__auto____1.call(this,state_9734);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__8855__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__8855__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__8855__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__8855__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__8855__auto__;
})()
;})(__11770,switch__8854__auto__,c__9331__auto___11798,G__9679_11772,G__9679_11773__$1,n__5593__auto___11769,jobs,results,process__$1,async))
})();
var state__9333__auto__ = (function (){var statearr_9754 = f__9332__auto__();
(statearr_9754[(6)] = c__9331__auto___11798);

return statearr_9754;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__9333__auto__);
});})(__11770,c__9331__auto___11798,G__9679_11772,G__9679_11773__$1,n__5593__auto___11769,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9679_11773__$1)].join('')));

}

var G__11816 = (__11770 + (1));
__11770 = G__11816;
continue;
} else {
}
break;
}

var c__9331__auto___11817 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__9332__auto__ = (function (){var switch__8854__auto__ = (function (state_9777){
var state_val_9778 = (state_9777[(1)]);
if((state_val_9778 === (7))){
var inst_9773 = (state_9777[(2)]);
var state_9777__$1 = state_9777;
var statearr_9781_11819 = state_9777__$1;
(statearr_9781_11819[(2)] = inst_9773);

(statearr_9781_11819[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9778 === (1))){
var state_9777__$1 = state_9777;
var statearr_9783_11820 = state_9777__$1;
(statearr_9783_11820[(2)] = null);

(statearr_9783_11820[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9778 === (4))){
var inst_9757 = (state_9777[(7)]);
var inst_9757__$1 = (state_9777[(2)]);
var inst_9758 = (inst_9757__$1 == null);
var state_9777__$1 = (function (){var statearr_9786 = state_9777;
(statearr_9786[(7)] = inst_9757__$1);

return statearr_9786;
})();
if(cljs.core.truth_(inst_9758)){
var statearr_9787_11821 = state_9777__$1;
(statearr_9787_11821[(1)] = (5));

} else {
var statearr_9788_11823 = state_9777__$1;
(statearr_9788_11823[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9778 === (6))){
var inst_9757 = (state_9777[(7)]);
var inst_9762 = (state_9777[(8)]);
var inst_9762__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_9764 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_9765 = [inst_9757,inst_9762__$1];
var inst_9766 = (new cljs.core.PersistentVector(null,2,(5),inst_9764,inst_9765,null));
var state_9777__$1 = (function (){var statearr_9789 = state_9777;
(statearr_9789[(8)] = inst_9762__$1);

return statearr_9789;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_9777__$1,(8),jobs,inst_9766);
} else {
if((state_val_9778 === (3))){
var inst_9775 = (state_9777[(2)]);
var state_9777__$1 = state_9777;
return cljs.core.async.impl.ioc_helpers.return_chan(state_9777__$1,inst_9775);
} else {
if((state_val_9778 === (2))){
var state_9777__$1 = state_9777;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_9777__$1,(4),from);
} else {
if((state_val_9778 === (9))){
var inst_9770 = (state_9777[(2)]);
var state_9777__$1 = (function (){var statearr_9794 = state_9777;
(statearr_9794[(9)] = inst_9770);

return statearr_9794;
})();
var statearr_9795_11825 = state_9777__$1;
(statearr_9795_11825[(2)] = null);

(statearr_9795_11825[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9778 === (5))){
var inst_9760 = cljs.core.async.close_BANG_(jobs);
var state_9777__$1 = state_9777;
var statearr_9796_11826 = state_9777__$1;
(statearr_9796_11826[(2)] = inst_9760);

(statearr_9796_11826[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9778 === (8))){
var inst_9762 = (state_9777[(8)]);
var inst_9768 = (state_9777[(2)]);
var state_9777__$1 = (function (){var statearr_9797 = state_9777;
(statearr_9797[(10)] = inst_9768);

return statearr_9797;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_9777__$1,(9),results,inst_9762);
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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__8855__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__8855__auto____0 = (function (){
var statearr_9800 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_9800[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__8855__auto__);

(statearr_9800[(1)] = (1));

return statearr_9800;
});
var cljs$core$async$pipeline_STAR__$_state_machine__8855__auto____1 = (function (state_9777){
while(true){
var ret_value__8856__auto__ = (function (){try{while(true){
var result__8857__auto__ = switch__8854__auto__(state_9777);
if(cljs.core.keyword_identical_QMARK_(result__8857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8857__auto__;
}
break;
}
}catch (e9801){var ex__8858__auto__ = e9801;
var statearr_9802_11828 = state_9777;
(statearr_9802_11828[(2)] = ex__8858__auto__);


if(cljs.core.seq((state_9777[(4)]))){
var statearr_9803_11829 = state_9777;
(statearr_9803_11829[(1)] = cljs.core.first((state_9777[(4)])));

} else {
throw ex__8858__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11831 = state_9777;
state_9777 = G__11831;
continue;
} else {
return ret_value__8856__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__8855__auto__ = function(state_9777){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__8855__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__8855__auto____1.call(this,state_9777);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__8855__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__8855__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__8855__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__8855__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__8855__auto__;
})()
})();
var state__9333__auto__ = (function (){var statearr_9805 = f__9332__auto__();
(statearr_9805[(6)] = c__9331__auto___11817);

return statearr_9805;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__9333__auto__);
}));


var c__9331__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__9332__auto__ = (function (){var switch__8854__auto__ = (function (state_9850){
var state_val_9852 = (state_9850[(1)]);
if((state_val_9852 === (7))){
var inst_9845 = (state_9850[(2)]);
var state_9850__$1 = state_9850;
var statearr_9854_11833 = state_9850__$1;
(statearr_9854_11833[(2)] = inst_9845);

(statearr_9854_11833[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9852 === (20))){
var state_9850__$1 = state_9850;
var statearr_9856_11835 = state_9850__$1;
(statearr_9856_11835[(2)] = null);

(statearr_9856_11835[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9852 === (1))){
var state_9850__$1 = state_9850;
var statearr_9857_11836 = state_9850__$1;
(statearr_9857_11836[(2)] = null);

(statearr_9857_11836[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9852 === (4))){
var inst_9811 = (state_9850[(7)]);
var inst_9811__$1 = (state_9850[(2)]);
var inst_9812 = (inst_9811__$1 == null);
var state_9850__$1 = (function (){var statearr_9858 = state_9850;
(statearr_9858[(7)] = inst_9811__$1);

return statearr_9858;
})();
if(cljs.core.truth_(inst_9812)){
var statearr_9860_11837 = state_9850__$1;
(statearr_9860_11837[(1)] = (5));

} else {
var statearr_9861_11838 = state_9850__$1;
(statearr_9861_11838[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9852 === (15))){
var inst_9825 = (state_9850[(8)]);
var state_9850__$1 = state_9850;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_9850__$1,(18),to,inst_9825);
} else {
if((state_val_9852 === (21))){
var inst_9839 = (state_9850[(2)]);
var state_9850__$1 = state_9850;
var statearr_9865_11840 = state_9850__$1;
(statearr_9865_11840[(2)] = inst_9839);

(statearr_9865_11840[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9852 === (13))){
var inst_9841 = (state_9850[(2)]);
var state_9850__$1 = (function (){var statearr_9867 = state_9850;
(statearr_9867[(9)] = inst_9841);

return statearr_9867;
})();
var statearr_9868_11841 = state_9850__$1;
(statearr_9868_11841[(2)] = null);

(statearr_9868_11841[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9852 === (6))){
var inst_9811 = (state_9850[(7)]);
var state_9850__$1 = state_9850;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_9850__$1,(11),inst_9811);
} else {
if((state_val_9852 === (17))){
var inst_9834 = (state_9850[(2)]);
var state_9850__$1 = state_9850;
if(cljs.core.truth_(inst_9834)){
var statearr_9869_11842 = state_9850__$1;
(statearr_9869_11842[(1)] = (19));

} else {
var statearr_9870_11843 = state_9850__$1;
(statearr_9870_11843[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9852 === (3))){
var inst_9848 = (state_9850[(2)]);
var state_9850__$1 = state_9850;
return cljs.core.async.impl.ioc_helpers.return_chan(state_9850__$1,inst_9848);
} else {
if((state_val_9852 === (12))){
var inst_9821 = (state_9850[(10)]);
var state_9850__$1 = state_9850;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_9850__$1,(14),inst_9821);
} else {
if((state_val_9852 === (2))){
var state_9850__$1 = state_9850;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_9850__$1,(4),results);
} else {
if((state_val_9852 === (19))){
var state_9850__$1 = state_9850;
var statearr_9871_11844 = state_9850__$1;
(statearr_9871_11844[(2)] = null);

(statearr_9871_11844[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9852 === (11))){
var inst_9821 = (state_9850[(2)]);
var state_9850__$1 = (function (){var statearr_9873 = state_9850;
(statearr_9873[(10)] = inst_9821);

return statearr_9873;
})();
var statearr_9874_11845 = state_9850__$1;
(statearr_9874_11845[(2)] = null);

(statearr_9874_11845[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9852 === (9))){
var state_9850__$1 = state_9850;
var statearr_9875_11848 = state_9850__$1;
(statearr_9875_11848[(2)] = null);

(statearr_9875_11848[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9852 === (5))){
var state_9850__$1 = state_9850;
if(cljs.core.truth_(close_QMARK_)){
var statearr_9876_11850 = state_9850__$1;
(statearr_9876_11850[(1)] = (8));

} else {
var statearr_9877_11851 = state_9850__$1;
(statearr_9877_11851[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9852 === (14))){
var inst_9828 = (state_9850[(11)]);
var inst_9825 = (state_9850[(8)]);
var inst_9825__$1 = (state_9850[(2)]);
var inst_9827 = (inst_9825__$1 == null);
var inst_9828__$1 = cljs.core.not(inst_9827);
var state_9850__$1 = (function (){var statearr_9879 = state_9850;
(statearr_9879[(11)] = inst_9828__$1);

(statearr_9879[(8)] = inst_9825__$1);

return statearr_9879;
})();
if(inst_9828__$1){
var statearr_9882_11854 = state_9850__$1;
(statearr_9882_11854[(1)] = (15));

} else {
var statearr_9883_11855 = state_9850__$1;
(statearr_9883_11855[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9852 === (16))){
var inst_9828 = (state_9850[(11)]);
var state_9850__$1 = state_9850;
var statearr_9887_11856 = state_9850__$1;
(statearr_9887_11856[(2)] = inst_9828);

(statearr_9887_11856[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9852 === (10))){
var inst_9818 = (state_9850[(2)]);
var state_9850__$1 = state_9850;
var statearr_9888_11859 = state_9850__$1;
(statearr_9888_11859[(2)] = inst_9818);

(statearr_9888_11859[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9852 === (18))){
var inst_9831 = (state_9850[(2)]);
var state_9850__$1 = state_9850;
var statearr_9889_11860 = state_9850__$1;
(statearr_9889_11860[(2)] = inst_9831);

(statearr_9889_11860[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9852 === (8))){
var inst_9815 = cljs.core.async.close_BANG_(to);
var state_9850__$1 = state_9850;
var statearr_9891_11861 = state_9850__$1;
(statearr_9891_11861[(2)] = inst_9815);

(statearr_9891_11861[(1)] = (10));


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
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__8855__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__8855__auto____0 = (function (){
var statearr_9895 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9895[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__8855__auto__);

(statearr_9895[(1)] = (1));

return statearr_9895;
});
var cljs$core$async$pipeline_STAR__$_state_machine__8855__auto____1 = (function (state_9850){
while(true){
var ret_value__8856__auto__ = (function (){try{while(true){
var result__8857__auto__ = switch__8854__auto__(state_9850);
if(cljs.core.keyword_identical_QMARK_(result__8857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8857__auto__;
}
break;
}
}catch (e9896){var ex__8858__auto__ = e9896;
var statearr_9897_11863 = state_9850;
(statearr_9897_11863[(2)] = ex__8858__auto__);


if(cljs.core.seq((state_9850[(4)]))){
var statearr_9898_11864 = state_9850;
(statearr_9898_11864[(1)] = cljs.core.first((state_9850[(4)])));

} else {
throw ex__8858__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11869 = state_9850;
state_9850 = G__11869;
continue;
} else {
return ret_value__8856__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__8855__auto__ = function(state_9850){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__8855__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__8855__auto____1.call(this,state_9850);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__8855__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__8855__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__8855__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__8855__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__8855__auto__;
})()
})();
var state__9333__auto__ = (function (){var statearr_9899 = f__9332__auto__();
(statearr_9899[(6)] = c__9331__auto__);

return statearr_9899;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__9333__auto__);
}));

return c__9331__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__9901 = arguments.length;
switch (G__9901) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__9907 = arguments.length;
switch (G__9907) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__9911 = arguments.length;
switch (G__9911) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__9331__auto___11909 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__9332__auto__ = (function (){var switch__8854__auto__ = (function (state_9941){
var state_val_9942 = (state_9941[(1)]);
if((state_val_9942 === (7))){
var inst_9937 = (state_9941[(2)]);
var state_9941__$1 = state_9941;
var statearr_9943_11911 = state_9941__$1;
(statearr_9943_11911[(2)] = inst_9937);

(statearr_9943_11911[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9942 === (1))){
var state_9941__$1 = state_9941;
var statearr_9945_11912 = state_9941__$1;
(statearr_9945_11912[(2)] = null);

(statearr_9945_11912[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9942 === (4))){
var inst_9918 = (state_9941[(7)]);
var inst_9918__$1 = (state_9941[(2)]);
var inst_9919 = (inst_9918__$1 == null);
var state_9941__$1 = (function (){var statearr_9946 = state_9941;
(statearr_9946[(7)] = inst_9918__$1);

return statearr_9946;
})();
if(cljs.core.truth_(inst_9919)){
var statearr_9947_11913 = state_9941__$1;
(statearr_9947_11913[(1)] = (5));

} else {
var statearr_9948_11914 = state_9941__$1;
(statearr_9948_11914[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9942 === (13))){
var state_9941__$1 = state_9941;
var statearr_9949_11915 = state_9941__$1;
(statearr_9949_11915[(2)] = null);

(statearr_9949_11915[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9942 === (6))){
var inst_9918 = (state_9941[(7)]);
var inst_9924 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_9918) : p.call(null,inst_9918));
var state_9941__$1 = state_9941;
if(cljs.core.truth_(inst_9924)){
var statearr_9953_11916 = state_9941__$1;
(statearr_9953_11916[(1)] = (9));

} else {
var statearr_9954_11917 = state_9941__$1;
(statearr_9954_11917[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9942 === (3))){
var inst_9939 = (state_9941[(2)]);
var state_9941__$1 = state_9941;
return cljs.core.async.impl.ioc_helpers.return_chan(state_9941__$1,inst_9939);
} else {
if((state_val_9942 === (12))){
var state_9941__$1 = state_9941;
var statearr_9956_11918 = state_9941__$1;
(statearr_9956_11918[(2)] = null);

(statearr_9956_11918[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9942 === (2))){
var state_9941__$1 = state_9941;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_9941__$1,(4),ch);
} else {
if((state_val_9942 === (11))){
var inst_9918 = (state_9941[(7)]);
var inst_9928 = (state_9941[(2)]);
var state_9941__$1 = state_9941;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_9941__$1,(8),inst_9928,inst_9918);
} else {
if((state_val_9942 === (9))){
var state_9941__$1 = state_9941;
var statearr_9958_11919 = state_9941__$1;
(statearr_9958_11919[(2)] = tc);

(statearr_9958_11919[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9942 === (5))){
var inst_9921 = cljs.core.async.close_BANG_(tc);
var inst_9922 = cljs.core.async.close_BANG_(fc);
var state_9941__$1 = (function (){var statearr_9959 = state_9941;
(statearr_9959[(8)] = inst_9921);

return statearr_9959;
})();
var statearr_9960_11920 = state_9941__$1;
(statearr_9960_11920[(2)] = inst_9922);

(statearr_9960_11920[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9942 === (14))){
var inst_9935 = (state_9941[(2)]);
var state_9941__$1 = state_9941;
var statearr_9965_11921 = state_9941__$1;
(statearr_9965_11921[(2)] = inst_9935);

(statearr_9965_11921[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9942 === (10))){
var state_9941__$1 = state_9941;
var statearr_9966_11922 = state_9941__$1;
(statearr_9966_11922[(2)] = fc);

(statearr_9966_11922[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9942 === (8))){
var inst_9930 = (state_9941[(2)]);
var state_9941__$1 = state_9941;
if(cljs.core.truth_(inst_9930)){
var statearr_9967_11923 = state_9941__$1;
(statearr_9967_11923[(1)] = (12));

} else {
var statearr_9968_11924 = state_9941__$1;
(statearr_9968_11924[(1)] = (13));

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
var cljs$core$async$state_machine__8855__auto__ = null;
var cljs$core$async$state_machine__8855__auto____0 = (function (){
var statearr_9969 = [null,null,null,null,null,null,null,null,null];
(statearr_9969[(0)] = cljs$core$async$state_machine__8855__auto__);

(statearr_9969[(1)] = (1));

return statearr_9969;
});
var cljs$core$async$state_machine__8855__auto____1 = (function (state_9941){
while(true){
var ret_value__8856__auto__ = (function (){try{while(true){
var result__8857__auto__ = switch__8854__auto__(state_9941);
if(cljs.core.keyword_identical_QMARK_(result__8857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8857__auto__;
}
break;
}
}catch (e9970){var ex__8858__auto__ = e9970;
var statearr_9971_11925 = state_9941;
(statearr_9971_11925[(2)] = ex__8858__auto__);


if(cljs.core.seq((state_9941[(4)]))){
var statearr_9972_11926 = state_9941;
(statearr_9972_11926[(1)] = cljs.core.first((state_9941[(4)])));

} else {
throw ex__8858__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11927 = state_9941;
state_9941 = G__11927;
continue;
} else {
return ret_value__8856__auto__;
}
break;
}
});
cljs$core$async$state_machine__8855__auto__ = function(state_9941){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8855__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8855__auto____1.call(this,state_9941);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8855__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8855__auto____0;
cljs$core$async$state_machine__8855__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8855__auto____1;
return cljs$core$async$state_machine__8855__auto__;
})()
})();
var state__9333__auto__ = (function (){var statearr_9973 = f__9332__auto__();
(statearr_9973[(6)] = c__9331__auto___11909);

return statearr_9973;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__9333__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__9331__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__9332__auto__ = (function (){var switch__8854__auto__ = (function (state_10002){
var state_val_10003 = (state_10002[(1)]);
if((state_val_10003 === (7))){
var inst_9997 = (state_10002[(2)]);
var state_10002__$1 = state_10002;
var statearr_10005_11928 = state_10002__$1;
(statearr_10005_11928[(2)] = inst_9997);

(statearr_10005_11928[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10003 === (1))){
var inst_9978 = init;
var inst_9979 = inst_9978;
var state_10002__$1 = (function (){var statearr_10006 = state_10002;
(statearr_10006[(7)] = inst_9979);

return statearr_10006;
})();
var statearr_10007_11929 = state_10002__$1;
(statearr_10007_11929[(2)] = null);

(statearr_10007_11929[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10003 === (4))){
var inst_9982 = (state_10002[(8)]);
var inst_9982__$1 = (state_10002[(2)]);
var inst_9983 = (inst_9982__$1 == null);
var state_10002__$1 = (function (){var statearr_10008 = state_10002;
(statearr_10008[(8)] = inst_9982__$1);

return statearr_10008;
})();
if(cljs.core.truth_(inst_9983)){
var statearr_10009_11930 = state_10002__$1;
(statearr_10009_11930[(1)] = (5));

} else {
var statearr_10012_11931 = state_10002__$1;
(statearr_10012_11931[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10003 === (6))){
var inst_9986 = (state_10002[(9)]);
var inst_9979 = (state_10002[(7)]);
var inst_9982 = (state_10002[(8)]);
var inst_9986__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_9979,inst_9982) : f.call(null,inst_9979,inst_9982));
var inst_9987 = cljs.core.reduced_QMARK_(inst_9986__$1);
var state_10002__$1 = (function (){var statearr_10013 = state_10002;
(statearr_10013[(9)] = inst_9986__$1);

return statearr_10013;
})();
if(inst_9987){
var statearr_10014_11932 = state_10002__$1;
(statearr_10014_11932[(1)] = (8));

} else {
var statearr_10017_11933 = state_10002__$1;
(statearr_10017_11933[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10003 === (3))){
var inst_9999 = (state_10002[(2)]);
var state_10002__$1 = state_10002;
return cljs.core.async.impl.ioc_helpers.return_chan(state_10002__$1,inst_9999);
} else {
if((state_val_10003 === (2))){
var state_10002__$1 = state_10002;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10002__$1,(4),ch);
} else {
if((state_val_10003 === (9))){
var inst_9986 = (state_10002[(9)]);
var inst_9979 = inst_9986;
var state_10002__$1 = (function (){var statearr_10019 = state_10002;
(statearr_10019[(7)] = inst_9979);

return statearr_10019;
})();
var statearr_10021_11955 = state_10002__$1;
(statearr_10021_11955[(2)] = null);

(statearr_10021_11955[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10003 === (5))){
var inst_9979 = (state_10002[(7)]);
var state_10002__$1 = state_10002;
var statearr_10022_11957 = state_10002__$1;
(statearr_10022_11957[(2)] = inst_9979);

(statearr_10022_11957[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10003 === (10))){
var inst_9995 = (state_10002[(2)]);
var state_10002__$1 = state_10002;
var statearr_10024_11958 = state_10002__$1;
(statearr_10024_11958[(2)] = inst_9995);

(statearr_10024_11958[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10003 === (8))){
var inst_9986 = (state_10002[(9)]);
var inst_9991 = cljs.core.deref(inst_9986);
var state_10002__$1 = state_10002;
var statearr_10025_11959 = state_10002__$1;
(statearr_10025_11959[(2)] = inst_9991);

(statearr_10025_11959[(1)] = (10));


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
});
return (function() {
var cljs$core$async$reduce_$_state_machine__8855__auto__ = null;
var cljs$core$async$reduce_$_state_machine__8855__auto____0 = (function (){
var statearr_10026 = [null,null,null,null,null,null,null,null,null,null];
(statearr_10026[(0)] = cljs$core$async$reduce_$_state_machine__8855__auto__);

(statearr_10026[(1)] = (1));

return statearr_10026;
});
var cljs$core$async$reduce_$_state_machine__8855__auto____1 = (function (state_10002){
while(true){
var ret_value__8856__auto__ = (function (){try{while(true){
var result__8857__auto__ = switch__8854__auto__(state_10002);
if(cljs.core.keyword_identical_QMARK_(result__8857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8857__auto__;
}
break;
}
}catch (e10027){var ex__8858__auto__ = e10027;
var statearr_10028_11963 = state_10002;
(statearr_10028_11963[(2)] = ex__8858__auto__);


if(cljs.core.seq((state_10002[(4)]))){
var statearr_10029_11964 = state_10002;
(statearr_10029_11964[(1)] = cljs.core.first((state_10002[(4)])));

} else {
throw ex__8858__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11965 = state_10002;
state_10002 = G__11965;
continue;
} else {
return ret_value__8856__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__8855__auto__ = function(state_10002){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__8855__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__8855__auto____1.call(this,state_10002);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__8855__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__8855__auto____0;
cljs$core$async$reduce_$_state_machine__8855__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__8855__auto____1;
return cljs$core$async$reduce_$_state_machine__8855__auto__;
})()
})();
var state__9333__auto__ = (function (){var statearr_10030 = f__9332__auto__();
(statearr_10030[(6)] = c__9331__auto__);

return statearr_10030;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__9333__auto__);
}));

return c__9331__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__9331__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__9332__auto__ = (function (){var switch__8854__auto__ = (function (state_10036){
var state_val_10037 = (state_10036[(1)]);
if((state_val_10037 === (1))){
var inst_10031 = cljs.core.async.reduce(f__$1,init,ch);
var state_10036__$1 = state_10036;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10036__$1,(2),inst_10031);
} else {
if((state_val_10037 === (2))){
var inst_10033 = (state_10036[(2)]);
var inst_10034 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_10033) : f__$1.call(null,inst_10033));
var state_10036__$1 = state_10036;
return cljs.core.async.impl.ioc_helpers.return_chan(state_10036__$1,inst_10034);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__8855__auto__ = null;
var cljs$core$async$transduce_$_state_machine__8855__auto____0 = (function (){
var statearr_10039 = [null,null,null,null,null,null,null];
(statearr_10039[(0)] = cljs$core$async$transduce_$_state_machine__8855__auto__);

(statearr_10039[(1)] = (1));

return statearr_10039;
});
var cljs$core$async$transduce_$_state_machine__8855__auto____1 = (function (state_10036){
while(true){
var ret_value__8856__auto__ = (function (){try{while(true){
var result__8857__auto__ = switch__8854__auto__(state_10036);
if(cljs.core.keyword_identical_QMARK_(result__8857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8857__auto__;
}
break;
}
}catch (e10040){var ex__8858__auto__ = e10040;
var statearr_10042_11966 = state_10036;
(statearr_10042_11966[(2)] = ex__8858__auto__);


if(cljs.core.seq((state_10036[(4)]))){
var statearr_10043_11967 = state_10036;
(statearr_10043_11967[(1)] = cljs.core.first((state_10036[(4)])));

} else {
throw ex__8858__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11968 = state_10036;
state_10036 = G__11968;
continue;
} else {
return ret_value__8856__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__8855__auto__ = function(state_10036){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__8855__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__8855__auto____1.call(this,state_10036);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__8855__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__8855__auto____0;
cljs$core$async$transduce_$_state_machine__8855__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__8855__auto____1;
return cljs$core$async$transduce_$_state_machine__8855__auto__;
})()
})();
var state__9333__auto__ = (function (){var statearr_10045 = f__9332__auto__();
(statearr_10045[(6)] = c__9331__auto__);

return statearr_10045;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__9333__auto__);
}));

return c__9331__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__10050 = arguments.length;
switch (G__10050) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__9331__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__9332__auto__ = (function (){var switch__8854__auto__ = (function (state_10075){
var state_val_10076 = (state_10075[(1)]);
if((state_val_10076 === (7))){
var inst_10057 = (state_10075[(2)]);
var state_10075__$1 = state_10075;
var statearr_10077_11970 = state_10075__$1;
(statearr_10077_11970[(2)] = inst_10057);

(statearr_10077_11970[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10076 === (1))){
var inst_10051 = cljs.core.seq(coll);
var inst_10052 = inst_10051;
var state_10075__$1 = (function (){var statearr_10078 = state_10075;
(statearr_10078[(7)] = inst_10052);

return statearr_10078;
})();
var statearr_10079_11971 = state_10075__$1;
(statearr_10079_11971[(2)] = null);

(statearr_10079_11971[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10076 === (4))){
var inst_10052 = (state_10075[(7)]);
var inst_10055 = cljs.core.first(inst_10052);
var state_10075__$1 = state_10075;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_10075__$1,(7),ch,inst_10055);
} else {
if((state_val_10076 === (13))){
var inst_10069 = (state_10075[(2)]);
var state_10075__$1 = state_10075;
var statearr_10081_11972 = state_10075__$1;
(statearr_10081_11972[(2)] = inst_10069);

(statearr_10081_11972[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10076 === (6))){
var inst_10060 = (state_10075[(2)]);
var state_10075__$1 = state_10075;
if(cljs.core.truth_(inst_10060)){
var statearr_10082_11973 = state_10075__$1;
(statearr_10082_11973[(1)] = (8));

} else {
var statearr_10083_11974 = state_10075__$1;
(statearr_10083_11974[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10076 === (3))){
var inst_10073 = (state_10075[(2)]);
var state_10075__$1 = state_10075;
return cljs.core.async.impl.ioc_helpers.return_chan(state_10075__$1,inst_10073);
} else {
if((state_val_10076 === (12))){
var state_10075__$1 = state_10075;
var statearr_10084_11975 = state_10075__$1;
(statearr_10084_11975[(2)] = null);

(statearr_10084_11975[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10076 === (2))){
var inst_10052 = (state_10075[(7)]);
var state_10075__$1 = state_10075;
if(cljs.core.truth_(inst_10052)){
var statearr_10090_11976 = state_10075__$1;
(statearr_10090_11976[(1)] = (4));

} else {
var statearr_10091_11977 = state_10075__$1;
(statearr_10091_11977[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10076 === (11))){
var inst_10066 = cljs.core.async.close_BANG_(ch);
var state_10075__$1 = state_10075;
var statearr_10092_11978 = state_10075__$1;
(statearr_10092_11978[(2)] = inst_10066);

(statearr_10092_11978[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10076 === (9))){
var state_10075__$1 = state_10075;
if(cljs.core.truth_(close_QMARK_)){
var statearr_10094_11979 = state_10075__$1;
(statearr_10094_11979[(1)] = (11));

} else {
var statearr_10095_11980 = state_10075__$1;
(statearr_10095_11980[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10076 === (5))){
var inst_10052 = (state_10075[(7)]);
var state_10075__$1 = state_10075;
var statearr_10096_11981 = state_10075__$1;
(statearr_10096_11981[(2)] = inst_10052);

(statearr_10096_11981[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10076 === (10))){
var inst_10071 = (state_10075[(2)]);
var state_10075__$1 = state_10075;
var statearr_10097_11982 = state_10075__$1;
(statearr_10097_11982[(2)] = inst_10071);

(statearr_10097_11982[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10076 === (8))){
var inst_10052 = (state_10075[(7)]);
var inst_10062 = cljs.core.next(inst_10052);
var inst_10052__$1 = inst_10062;
var state_10075__$1 = (function (){var statearr_10098 = state_10075;
(statearr_10098[(7)] = inst_10052__$1);

return statearr_10098;
})();
var statearr_10099_11983 = state_10075__$1;
(statearr_10099_11983[(2)] = null);

(statearr_10099_11983[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__8855__auto__ = null;
var cljs$core$async$state_machine__8855__auto____0 = (function (){
var statearr_10100 = [null,null,null,null,null,null,null,null];
(statearr_10100[(0)] = cljs$core$async$state_machine__8855__auto__);

(statearr_10100[(1)] = (1));

return statearr_10100;
});
var cljs$core$async$state_machine__8855__auto____1 = (function (state_10075){
while(true){
var ret_value__8856__auto__ = (function (){try{while(true){
var result__8857__auto__ = switch__8854__auto__(state_10075);
if(cljs.core.keyword_identical_QMARK_(result__8857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8857__auto__;
}
break;
}
}catch (e10101){var ex__8858__auto__ = e10101;
var statearr_10102_11985 = state_10075;
(statearr_10102_11985[(2)] = ex__8858__auto__);


if(cljs.core.seq((state_10075[(4)]))){
var statearr_10103_11986 = state_10075;
(statearr_10103_11986[(1)] = cljs.core.first((state_10075[(4)])));

} else {
throw ex__8858__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11987 = state_10075;
state_10075 = G__11987;
continue;
} else {
return ret_value__8856__auto__;
}
break;
}
});
cljs$core$async$state_machine__8855__auto__ = function(state_10075){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8855__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8855__auto____1.call(this,state_10075);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8855__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8855__auto____0;
cljs$core$async$state_machine__8855__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8855__auto____1;
return cljs$core$async$state_machine__8855__auto__;
})()
})();
var state__9333__auto__ = (function (){var statearr_10106 = f__9332__auto__();
(statearr_10106[(6)] = c__9331__auto__);

return statearr_10106;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__9333__auto__);
}));

return c__9331__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__10108 = arguments.length;
switch (G__10108) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_11990 = (function (_){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5351__auto__.call(null,_));
} else {
var m__5349__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5349__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_11990(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_11991 = (function (m,ch,close_QMARK_){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5351__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5349__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5349__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_11991(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_11992 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null,m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_11992(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_11995 = (function (m){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5351__auto__.call(null,m));
} else {
var m__5349__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5349__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_11995(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10114 = (function (ch,cs,meta10115){
this.ch = ch;
this.cs = cs;
this.meta10115 = meta10115;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async10114.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10116,meta10115__$1){
var self__ = this;
var _10116__$1 = this;
return (new cljs.core.async.t_cljs$core$async10114(self__.ch,self__.cs,meta10115__$1));
}));

(cljs.core.async.t_cljs$core$async10114.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10116){
var self__ = this;
var _10116__$1 = this;
return self__.meta10115;
}));

(cljs.core.async.t_cljs$core$async10114.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async10114.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async10114.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async10114.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async10114.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async10114.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async10114.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta10115","meta10115",1796016382,null)], null);
}));

(cljs.core.async.t_cljs$core$async10114.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async10114.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10114");

(cljs.core.async.t_cljs$core$async10114.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async10114");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async10114.
 */
cljs.core.async.__GT_t_cljs$core$async10114 = (function cljs$core$async$__GT_t_cljs$core$async10114(ch,cs,meta10115){
return (new cljs.core.async.t_cljs$core$async10114(ch,cs,meta10115));
});


/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async10114(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__9331__auto___11996 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__9332__auto__ = (function (){var switch__8854__auto__ = (function (state_10258){
var state_val_10259 = (state_10258[(1)]);
if((state_val_10259 === (7))){
var inst_10254 = (state_10258[(2)]);
var state_10258__$1 = state_10258;
var statearr_10260_11997 = state_10258__$1;
(statearr_10260_11997[(2)] = inst_10254);

(statearr_10260_11997[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10259 === (20))){
var inst_10158 = (state_10258[(7)]);
var inst_10170 = cljs.core.first(inst_10158);
var inst_10171 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_10170,(0),null);
var inst_10172 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_10170,(1),null);
var state_10258__$1 = (function (){var statearr_10262 = state_10258;
(statearr_10262[(8)] = inst_10171);

return statearr_10262;
})();
if(cljs.core.truth_(inst_10172)){
var statearr_10263_11998 = state_10258__$1;
(statearr_10263_11998[(1)] = (22));

} else {
var statearr_10265_11999 = state_10258__$1;
(statearr_10265_11999[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10259 === (27))){
var inst_10127 = (state_10258[(9)]);
var inst_10208 = (state_10258[(10)]);
var inst_10203 = (state_10258[(11)]);
var inst_10201 = (state_10258[(12)]);
var inst_10208__$1 = cljs.core._nth(inst_10201,inst_10203);
var inst_10209 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_10208__$1,inst_10127,done);
var state_10258__$1 = (function (){var statearr_10268 = state_10258;
(statearr_10268[(10)] = inst_10208__$1);

return statearr_10268;
})();
if(cljs.core.truth_(inst_10209)){
var statearr_10270_12001 = state_10258__$1;
(statearr_10270_12001[(1)] = (30));

} else {
var statearr_10271_12002 = state_10258__$1;
(statearr_10271_12002[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10259 === (1))){
var state_10258__$1 = state_10258;
var statearr_10272_12003 = state_10258__$1;
(statearr_10272_12003[(2)] = null);

(statearr_10272_12003[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10259 === (24))){
var inst_10158 = (state_10258[(7)]);
var inst_10177 = (state_10258[(2)]);
var inst_10178 = cljs.core.next(inst_10158);
var inst_10136 = inst_10178;
var inst_10137 = null;
var inst_10138 = (0);
var inst_10139 = (0);
var state_10258__$1 = (function (){var statearr_10276 = state_10258;
(statearr_10276[(13)] = inst_10139);

(statearr_10276[(14)] = inst_10136);

(statearr_10276[(15)] = inst_10137);

(statearr_10276[(16)] = inst_10177);

(statearr_10276[(17)] = inst_10138);

return statearr_10276;
})();
var statearr_10278_12004 = state_10258__$1;
(statearr_10278_12004[(2)] = null);

(statearr_10278_12004[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10259 === (39))){
var state_10258__$1 = state_10258;
var statearr_10283_12005 = state_10258__$1;
(statearr_10283_12005[(2)] = null);

(statearr_10283_12005[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10259 === (4))){
var inst_10127 = (state_10258[(9)]);
var inst_10127__$1 = (state_10258[(2)]);
var inst_10128 = (inst_10127__$1 == null);
var state_10258__$1 = (function (){var statearr_10284 = state_10258;
(statearr_10284[(9)] = inst_10127__$1);

return statearr_10284;
})();
if(cljs.core.truth_(inst_10128)){
var statearr_10285_12006 = state_10258__$1;
(statearr_10285_12006[(1)] = (5));

} else {
var statearr_10286_12007 = state_10258__$1;
(statearr_10286_12007[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10259 === (15))){
var inst_10139 = (state_10258[(13)]);
var inst_10136 = (state_10258[(14)]);
var inst_10137 = (state_10258[(15)]);
var inst_10138 = (state_10258[(17)]);
var inst_10154 = (state_10258[(2)]);
var inst_10155 = (inst_10139 + (1));
var tmp10280 = inst_10136;
var tmp10281 = inst_10137;
var tmp10282 = inst_10138;
var inst_10136__$1 = tmp10280;
var inst_10137__$1 = tmp10281;
var inst_10138__$1 = tmp10282;
var inst_10139__$1 = inst_10155;
var state_10258__$1 = (function (){var statearr_10287 = state_10258;
(statearr_10287[(13)] = inst_10139__$1);

(statearr_10287[(18)] = inst_10154);

(statearr_10287[(14)] = inst_10136__$1);

(statearr_10287[(15)] = inst_10137__$1);

(statearr_10287[(17)] = inst_10138__$1);

return statearr_10287;
})();
var statearr_10288_12008 = state_10258__$1;
(statearr_10288_12008[(2)] = null);

(statearr_10288_12008[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10259 === (21))){
var inst_10181 = (state_10258[(2)]);
var state_10258__$1 = state_10258;
var statearr_10292_12011 = state_10258__$1;
(statearr_10292_12011[(2)] = inst_10181);

(statearr_10292_12011[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10259 === (31))){
var inst_10208 = (state_10258[(10)]);
var inst_10212 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_10208);
var state_10258__$1 = state_10258;
var statearr_10294_12013 = state_10258__$1;
(statearr_10294_12013[(2)] = inst_10212);

(statearr_10294_12013[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10259 === (32))){
var inst_10200 = (state_10258[(19)]);
var inst_10203 = (state_10258[(11)]);
var inst_10202 = (state_10258[(20)]);
var inst_10201 = (state_10258[(12)]);
var inst_10214 = (state_10258[(2)]);
var inst_10215 = (inst_10203 + (1));
var tmp10289 = inst_10200;
var tmp10290 = inst_10202;
var tmp10291 = inst_10201;
var inst_10200__$1 = tmp10289;
var inst_10201__$1 = tmp10291;
var inst_10202__$1 = tmp10290;
var inst_10203__$1 = inst_10215;
var state_10258__$1 = (function (){var statearr_10295 = state_10258;
(statearr_10295[(19)] = inst_10200__$1);

(statearr_10295[(11)] = inst_10203__$1);

(statearr_10295[(20)] = inst_10202__$1);

(statearr_10295[(21)] = inst_10214);

(statearr_10295[(12)] = inst_10201__$1);

return statearr_10295;
})();
var statearr_10296_12017 = state_10258__$1;
(statearr_10296_12017[(2)] = null);

(statearr_10296_12017[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10259 === (40))){
var inst_10227 = (state_10258[(22)]);
var inst_10231 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_10227);
var state_10258__$1 = state_10258;
var statearr_10298_12018 = state_10258__$1;
(statearr_10298_12018[(2)] = inst_10231);

(statearr_10298_12018[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10259 === (33))){
var inst_10218 = (state_10258[(23)]);
var inst_10220 = cljs.core.chunked_seq_QMARK_(inst_10218);
var state_10258__$1 = state_10258;
if(inst_10220){
var statearr_10300_12021 = state_10258__$1;
(statearr_10300_12021[(1)] = (36));

} else {
var statearr_10301_12022 = state_10258__$1;
(statearr_10301_12022[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10259 === (13))){
var inst_10148 = (state_10258[(24)]);
var inst_10151 = cljs.core.async.close_BANG_(inst_10148);
var state_10258__$1 = state_10258;
var statearr_10302_12023 = state_10258__$1;
(statearr_10302_12023[(2)] = inst_10151);

(statearr_10302_12023[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10259 === (22))){
var inst_10171 = (state_10258[(8)]);
var inst_10174 = cljs.core.async.close_BANG_(inst_10171);
var state_10258__$1 = state_10258;
var statearr_10303_12024 = state_10258__$1;
(statearr_10303_12024[(2)] = inst_10174);

(statearr_10303_12024[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10259 === (36))){
var inst_10218 = (state_10258[(23)]);
var inst_10222 = cljs.core.chunk_first(inst_10218);
var inst_10223 = cljs.core.chunk_rest(inst_10218);
var inst_10224 = cljs.core.count(inst_10222);
var inst_10200 = inst_10223;
var inst_10201 = inst_10222;
var inst_10202 = inst_10224;
var inst_10203 = (0);
var state_10258__$1 = (function (){var statearr_10304 = state_10258;
(statearr_10304[(19)] = inst_10200);

(statearr_10304[(11)] = inst_10203);

(statearr_10304[(20)] = inst_10202);

(statearr_10304[(12)] = inst_10201);

return statearr_10304;
})();
var statearr_10305_12025 = state_10258__$1;
(statearr_10305_12025[(2)] = null);

(statearr_10305_12025[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10259 === (41))){
var inst_10218 = (state_10258[(23)]);
var inst_10233 = (state_10258[(2)]);
var inst_10234 = cljs.core.next(inst_10218);
var inst_10200 = inst_10234;
var inst_10201 = null;
var inst_10202 = (0);
var inst_10203 = (0);
var state_10258__$1 = (function (){var statearr_10306 = state_10258;
(statearr_10306[(19)] = inst_10200);

(statearr_10306[(11)] = inst_10203);

(statearr_10306[(25)] = inst_10233);

(statearr_10306[(20)] = inst_10202);

(statearr_10306[(12)] = inst_10201);

return statearr_10306;
})();
var statearr_10307_12031 = state_10258__$1;
(statearr_10307_12031[(2)] = null);

(statearr_10307_12031[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10259 === (43))){
var state_10258__$1 = state_10258;
var statearr_10308_12032 = state_10258__$1;
(statearr_10308_12032[(2)] = null);

(statearr_10308_12032[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10259 === (29))){
var inst_10242 = (state_10258[(2)]);
var state_10258__$1 = state_10258;
var statearr_10309_12037 = state_10258__$1;
(statearr_10309_12037[(2)] = inst_10242);

(statearr_10309_12037[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10259 === (44))){
var inst_10251 = (state_10258[(2)]);
var state_10258__$1 = (function (){var statearr_10310 = state_10258;
(statearr_10310[(26)] = inst_10251);

return statearr_10310;
})();
var statearr_10311_12043 = state_10258__$1;
(statearr_10311_12043[(2)] = null);

(statearr_10311_12043[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10259 === (6))){
var inst_10191 = (state_10258[(27)]);
var inst_10190 = cljs.core.deref(cs);
var inst_10191__$1 = cljs.core.keys(inst_10190);
var inst_10192 = cljs.core.count(inst_10191__$1);
var inst_10193 = cljs.core.reset_BANG_(dctr,inst_10192);
var inst_10199 = cljs.core.seq(inst_10191__$1);
var inst_10200 = inst_10199;
var inst_10201 = null;
var inst_10202 = (0);
var inst_10203 = (0);
var state_10258__$1 = (function (){var statearr_10312 = state_10258;
(statearr_10312[(19)] = inst_10200);

(statearr_10312[(28)] = inst_10193);

(statearr_10312[(11)] = inst_10203);

(statearr_10312[(27)] = inst_10191__$1);

(statearr_10312[(20)] = inst_10202);

(statearr_10312[(12)] = inst_10201);

return statearr_10312;
})();
var statearr_10313_12044 = state_10258__$1;
(statearr_10313_12044[(2)] = null);

(statearr_10313_12044[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10259 === (28))){
var inst_10218 = (state_10258[(23)]);
var inst_10200 = (state_10258[(19)]);
var inst_10218__$1 = cljs.core.seq(inst_10200);
var state_10258__$1 = (function (){var statearr_10322 = state_10258;
(statearr_10322[(23)] = inst_10218__$1);

return statearr_10322;
})();
if(inst_10218__$1){
var statearr_10323_12045 = state_10258__$1;
(statearr_10323_12045[(1)] = (33));

} else {
var statearr_10328_12046 = state_10258__$1;
(statearr_10328_12046[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10259 === (25))){
var inst_10203 = (state_10258[(11)]);
var inst_10202 = (state_10258[(20)]);
var inst_10205 = (inst_10203 < inst_10202);
var inst_10206 = inst_10205;
var state_10258__$1 = state_10258;
if(cljs.core.truth_(inst_10206)){
var statearr_10329_12047 = state_10258__$1;
(statearr_10329_12047[(1)] = (27));

} else {
var statearr_10330_12048 = state_10258__$1;
(statearr_10330_12048[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10259 === (34))){
var state_10258__$1 = state_10258;
var statearr_10331_12049 = state_10258__$1;
(statearr_10331_12049[(2)] = null);

(statearr_10331_12049[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10259 === (17))){
var state_10258__$1 = state_10258;
var statearr_10334_12050 = state_10258__$1;
(statearr_10334_12050[(2)] = null);

(statearr_10334_12050[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10259 === (3))){
var inst_10256 = (state_10258[(2)]);
var state_10258__$1 = state_10258;
return cljs.core.async.impl.ioc_helpers.return_chan(state_10258__$1,inst_10256);
} else {
if((state_val_10259 === (12))){
var inst_10186 = (state_10258[(2)]);
var state_10258__$1 = state_10258;
var statearr_10335_12051 = state_10258__$1;
(statearr_10335_12051[(2)] = inst_10186);

(statearr_10335_12051[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10259 === (2))){
var state_10258__$1 = state_10258;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10258__$1,(4),ch);
} else {
if((state_val_10259 === (23))){
var state_10258__$1 = state_10258;
var statearr_10337_12052 = state_10258__$1;
(statearr_10337_12052[(2)] = null);

(statearr_10337_12052[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10259 === (35))){
var inst_10240 = (state_10258[(2)]);
var state_10258__$1 = state_10258;
var statearr_10338_12053 = state_10258__$1;
(statearr_10338_12053[(2)] = inst_10240);

(statearr_10338_12053[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10259 === (19))){
var inst_10158 = (state_10258[(7)]);
var inst_10162 = cljs.core.chunk_first(inst_10158);
var inst_10163 = cljs.core.chunk_rest(inst_10158);
var inst_10164 = cljs.core.count(inst_10162);
var inst_10136 = inst_10163;
var inst_10137 = inst_10162;
var inst_10138 = inst_10164;
var inst_10139 = (0);
var state_10258__$1 = (function (){var statearr_10341 = state_10258;
(statearr_10341[(13)] = inst_10139);

(statearr_10341[(14)] = inst_10136);

(statearr_10341[(15)] = inst_10137);

(statearr_10341[(17)] = inst_10138);

return statearr_10341;
})();
var statearr_10344_12054 = state_10258__$1;
(statearr_10344_12054[(2)] = null);

(statearr_10344_12054[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10259 === (11))){
var inst_10158 = (state_10258[(7)]);
var inst_10136 = (state_10258[(14)]);
var inst_10158__$1 = cljs.core.seq(inst_10136);
var state_10258__$1 = (function (){var statearr_10345 = state_10258;
(statearr_10345[(7)] = inst_10158__$1);

return statearr_10345;
})();
if(inst_10158__$1){
var statearr_10346_12058 = state_10258__$1;
(statearr_10346_12058[(1)] = (16));

} else {
var statearr_10347_12059 = state_10258__$1;
(statearr_10347_12059[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10259 === (9))){
var inst_10188 = (state_10258[(2)]);
var state_10258__$1 = state_10258;
var statearr_10348_12060 = state_10258__$1;
(statearr_10348_12060[(2)] = inst_10188);

(statearr_10348_12060[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10259 === (5))){
var inst_10134 = cljs.core.deref(cs);
var inst_10135 = cljs.core.seq(inst_10134);
var inst_10136 = inst_10135;
var inst_10137 = null;
var inst_10138 = (0);
var inst_10139 = (0);
var state_10258__$1 = (function (){var statearr_10349 = state_10258;
(statearr_10349[(13)] = inst_10139);

(statearr_10349[(14)] = inst_10136);

(statearr_10349[(15)] = inst_10137);

(statearr_10349[(17)] = inst_10138);

return statearr_10349;
})();
var statearr_10352_12061 = state_10258__$1;
(statearr_10352_12061[(2)] = null);

(statearr_10352_12061[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10259 === (14))){
var state_10258__$1 = state_10258;
var statearr_10354_12062 = state_10258__$1;
(statearr_10354_12062[(2)] = null);

(statearr_10354_12062[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10259 === (45))){
var inst_10248 = (state_10258[(2)]);
var state_10258__$1 = state_10258;
var statearr_10355_12063 = state_10258__$1;
(statearr_10355_12063[(2)] = inst_10248);

(statearr_10355_12063[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10259 === (26))){
var inst_10191 = (state_10258[(27)]);
var inst_10244 = (state_10258[(2)]);
var inst_10245 = cljs.core.seq(inst_10191);
var state_10258__$1 = (function (){var statearr_10356 = state_10258;
(statearr_10356[(29)] = inst_10244);

return statearr_10356;
})();
if(inst_10245){
var statearr_10357_12064 = state_10258__$1;
(statearr_10357_12064[(1)] = (42));

} else {
var statearr_10358_12065 = state_10258__$1;
(statearr_10358_12065[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10259 === (16))){
var inst_10158 = (state_10258[(7)]);
var inst_10160 = cljs.core.chunked_seq_QMARK_(inst_10158);
var state_10258__$1 = state_10258;
if(inst_10160){
var statearr_10359_12066 = state_10258__$1;
(statearr_10359_12066[(1)] = (19));

} else {
var statearr_10360_12067 = state_10258__$1;
(statearr_10360_12067[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10259 === (38))){
var inst_10237 = (state_10258[(2)]);
var state_10258__$1 = state_10258;
var statearr_10365_12069 = state_10258__$1;
(statearr_10365_12069[(2)] = inst_10237);

(statearr_10365_12069[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10259 === (30))){
var state_10258__$1 = state_10258;
var statearr_10367_12070 = state_10258__$1;
(statearr_10367_12070[(2)] = null);

(statearr_10367_12070[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10259 === (10))){
var inst_10139 = (state_10258[(13)]);
var inst_10137 = (state_10258[(15)]);
var inst_10147 = cljs.core._nth(inst_10137,inst_10139);
var inst_10148 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_10147,(0),null);
var inst_10149 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_10147,(1),null);
var state_10258__$1 = (function (){var statearr_10373 = state_10258;
(statearr_10373[(24)] = inst_10148);

return statearr_10373;
})();
if(cljs.core.truth_(inst_10149)){
var statearr_10375_12071 = state_10258__$1;
(statearr_10375_12071[(1)] = (13));

} else {
var statearr_10376_12072 = state_10258__$1;
(statearr_10376_12072[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10259 === (18))){
var inst_10184 = (state_10258[(2)]);
var state_10258__$1 = state_10258;
var statearr_10377_12073 = state_10258__$1;
(statearr_10377_12073[(2)] = inst_10184);

(statearr_10377_12073[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10259 === (42))){
var state_10258__$1 = state_10258;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10258__$1,(45),dchan);
} else {
if((state_val_10259 === (37))){
var inst_10127 = (state_10258[(9)]);
var inst_10218 = (state_10258[(23)]);
var inst_10227 = (state_10258[(22)]);
var inst_10227__$1 = cljs.core.first(inst_10218);
var inst_10228 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_10227__$1,inst_10127,done);
var state_10258__$1 = (function (){var statearr_10383 = state_10258;
(statearr_10383[(22)] = inst_10227__$1);

return statearr_10383;
})();
if(cljs.core.truth_(inst_10228)){
var statearr_10384_12074 = state_10258__$1;
(statearr_10384_12074[(1)] = (39));

} else {
var statearr_10385_12075 = state_10258__$1;
(statearr_10385_12075[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10259 === (8))){
var inst_10139 = (state_10258[(13)]);
var inst_10138 = (state_10258[(17)]);
var inst_10141 = (inst_10139 < inst_10138);
var inst_10142 = inst_10141;
var state_10258__$1 = state_10258;
if(cljs.core.truth_(inst_10142)){
var statearr_10388_12076 = state_10258__$1;
(statearr_10388_12076[(1)] = (10));

} else {
var statearr_10389_12077 = state_10258__$1;
(statearr_10389_12077[(1)] = (11));

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
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__8855__auto__ = null;
var cljs$core$async$mult_$_state_machine__8855__auto____0 = (function (){
var statearr_10396 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10396[(0)] = cljs$core$async$mult_$_state_machine__8855__auto__);

(statearr_10396[(1)] = (1));

return statearr_10396;
});
var cljs$core$async$mult_$_state_machine__8855__auto____1 = (function (state_10258){
while(true){
var ret_value__8856__auto__ = (function (){try{while(true){
var result__8857__auto__ = switch__8854__auto__(state_10258);
if(cljs.core.keyword_identical_QMARK_(result__8857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8857__auto__;
}
break;
}
}catch (e10401){var ex__8858__auto__ = e10401;
var statearr_10402_12078 = state_10258;
(statearr_10402_12078[(2)] = ex__8858__auto__);


if(cljs.core.seq((state_10258[(4)]))){
var statearr_10403_12079 = state_10258;
(statearr_10403_12079[(1)] = cljs.core.first((state_10258[(4)])));

} else {
throw ex__8858__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12080 = state_10258;
state_10258 = G__12080;
continue;
} else {
return ret_value__8856__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__8855__auto__ = function(state_10258){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__8855__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__8855__auto____1.call(this,state_10258);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__8855__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__8855__auto____0;
cljs$core$async$mult_$_state_machine__8855__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__8855__auto____1;
return cljs$core$async$mult_$_state_machine__8855__auto__;
})()
})();
var state__9333__auto__ = (function (){var statearr_10404 = f__9332__auto__();
(statearr_10404[(6)] = c__9331__auto___11996);

return statearr_10404;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__9333__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__10408 = arguments.length;
switch (G__10408) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_12083 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null,m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_12083(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_12084 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null,m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_12084(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_12085 = (function (m){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5351__auto__.call(null,m));
} else {
var m__5349__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5349__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_12085(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_12086 = (function (m,state_map){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5351__auto__.call(null,m,state_map));
} else {
var m__5349__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5349__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_12086(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_12087 = (function (m,mode){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5351__auto__.call(null,m,mode));
} else {
var m__5349__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5349__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_12087(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___12088 = arguments.length;
var i__5727__auto___12089 = (0);
while(true){
if((i__5727__auto___12089 < len__5726__auto___12088)){
args__5732__auto__.push((arguments[i__5727__auto___12089]));

var G__12090 = (i__5727__auto___12089 + (1));
i__5727__auto___12089 = G__12090;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__10427){
var map__10428 = p__10427;
var map__10428__$1 = cljs.core.__destructure_map(map__10428);
var opts = map__10428__$1;
var statearr_10429_12091 = state;
(statearr_10429_12091[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_10430_12092 = state;
(statearr_10430_12092[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_10433_12093 = state;
(statearr_10433_12093[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq10421){
var G__10422 = cljs.core.first(seq10421);
var seq10421__$1 = cljs.core.next(seq10421);
var G__10425 = cljs.core.first(seq10421__$1);
var seq10421__$2 = cljs.core.next(seq10421__$1);
var G__10426 = cljs.core.first(seq10421__$2);
var seq10421__$3 = cljs.core.next(seq10421__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10422,G__10425,G__10426,seq10421__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10444 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta10445){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta10445 = meta10445;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async10444.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10446,meta10445__$1){
var self__ = this;
var _10446__$1 = this;
return (new cljs.core.async.t_cljs$core$async10444(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta10445__$1));
}));

(cljs.core.async.t_cljs$core$async10444.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10446){
var self__ = this;
var _10446__$1 = this;
return self__.meta10445;
}));

(cljs.core.async.t_cljs$core$async10444.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async10444.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async10444.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async10444.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async10444.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async10444.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async10444.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async10444.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async10444.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta10445","meta10445",1057725798,null)], null);
}));

(cljs.core.async.t_cljs$core$async10444.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async10444.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10444");

(cljs.core.async.t_cljs$core$async10444.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async10444");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async10444.
 */
cljs.core.async.__GT_t_cljs$core$async10444 = (function cljs$core$async$__GT_t_cljs$core$async10444(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta10445){
return (new cljs.core.async.t_cljs$core$async10444(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta10445));
});


/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async10444(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__9331__auto___12094 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__9332__auto__ = (function (){var switch__8854__auto__ = (function (state_10519){
var state_val_10520 = (state_10519[(1)]);
if((state_val_10520 === (7))){
var inst_10479 = (state_10519[(2)]);
var state_10519__$1 = state_10519;
if(cljs.core.truth_(inst_10479)){
var statearr_10521_12095 = state_10519__$1;
(statearr_10521_12095[(1)] = (8));

} else {
var statearr_10522_12096 = state_10519__$1;
(statearr_10522_12096[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10520 === (20))){
var inst_10472 = (state_10519[(7)]);
var state_10519__$1 = state_10519;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_10519__$1,(23),out,inst_10472);
} else {
if((state_val_10520 === (1))){
var inst_10455 = calc_state();
var inst_10456 = cljs.core.__destructure_map(inst_10455);
var inst_10457 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_10456,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_10458 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_10456,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_10459 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_10456,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_10460 = inst_10455;
var state_10519__$1 = (function (){var statearr_10523 = state_10519;
(statearr_10523[(8)] = inst_10457);

(statearr_10523[(9)] = inst_10458);

(statearr_10523[(10)] = inst_10459);

(statearr_10523[(11)] = inst_10460);

return statearr_10523;
})();
var statearr_10524_12097 = state_10519__$1;
(statearr_10524_12097[(2)] = null);

(statearr_10524_12097[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10520 === (24))){
var inst_10463 = (state_10519[(12)]);
var inst_10460 = inst_10463;
var state_10519__$1 = (function (){var statearr_10525 = state_10519;
(statearr_10525[(11)] = inst_10460);

return statearr_10525;
})();
var statearr_10526_12098 = state_10519__$1;
(statearr_10526_12098[(2)] = null);

(statearr_10526_12098[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10520 === (4))){
var inst_10474 = (state_10519[(13)]);
var inst_10472 = (state_10519[(7)]);
var inst_10471 = (state_10519[(2)]);
var inst_10472__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_10471,(0),null);
var inst_10473 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_10471,(1),null);
var inst_10474__$1 = (inst_10472__$1 == null);
var state_10519__$1 = (function (){var statearr_10528 = state_10519;
(statearr_10528[(13)] = inst_10474__$1);

(statearr_10528[(7)] = inst_10472__$1);

(statearr_10528[(14)] = inst_10473);

return statearr_10528;
})();
if(cljs.core.truth_(inst_10474__$1)){
var statearr_10529_12099 = state_10519__$1;
(statearr_10529_12099[(1)] = (5));

} else {
var statearr_10530_12100 = state_10519__$1;
(statearr_10530_12100[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10520 === (15))){
var inst_10464 = (state_10519[(15)]);
var inst_10493 = (state_10519[(16)]);
var inst_10493__$1 = cljs.core.empty_QMARK_(inst_10464);
var state_10519__$1 = (function (){var statearr_10531 = state_10519;
(statearr_10531[(16)] = inst_10493__$1);

return statearr_10531;
})();
if(inst_10493__$1){
var statearr_10532_12101 = state_10519__$1;
(statearr_10532_12101[(1)] = (17));

} else {
var statearr_10533_12102 = state_10519__$1;
(statearr_10533_12102[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10520 === (21))){
var inst_10463 = (state_10519[(12)]);
var inst_10460 = inst_10463;
var state_10519__$1 = (function (){var statearr_10535 = state_10519;
(statearr_10535[(11)] = inst_10460);

return statearr_10535;
})();
var statearr_10537_12103 = state_10519__$1;
(statearr_10537_12103[(2)] = null);

(statearr_10537_12103[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10520 === (13))){
var inst_10486 = (state_10519[(2)]);
var inst_10487 = calc_state();
var inst_10460 = inst_10487;
var state_10519__$1 = (function (){var statearr_10538 = state_10519;
(statearr_10538[(11)] = inst_10460);

(statearr_10538[(17)] = inst_10486);

return statearr_10538;
})();
var statearr_10539_12104 = state_10519__$1;
(statearr_10539_12104[(2)] = null);

(statearr_10539_12104[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10520 === (22))){
var inst_10513 = (state_10519[(2)]);
var state_10519__$1 = state_10519;
var statearr_10540_12105 = state_10519__$1;
(statearr_10540_12105[(2)] = inst_10513);

(statearr_10540_12105[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10520 === (6))){
var inst_10473 = (state_10519[(14)]);
var inst_10477 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_10473,change);
var state_10519__$1 = state_10519;
var statearr_10541_12106 = state_10519__$1;
(statearr_10541_12106[(2)] = inst_10477);

(statearr_10541_12106[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10520 === (25))){
var state_10519__$1 = state_10519;
var statearr_10542_12107 = state_10519__$1;
(statearr_10542_12107[(2)] = null);

(statearr_10542_12107[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10520 === (17))){
var inst_10465 = (state_10519[(18)]);
var inst_10473 = (state_10519[(14)]);
var inst_10495 = (inst_10465.cljs$core$IFn$_invoke$arity$1 ? inst_10465.cljs$core$IFn$_invoke$arity$1(inst_10473) : inst_10465.call(null,inst_10473));
var inst_10496 = cljs.core.not(inst_10495);
var state_10519__$1 = state_10519;
var statearr_10543_12108 = state_10519__$1;
(statearr_10543_12108[(2)] = inst_10496);

(statearr_10543_12108[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10520 === (3))){
var inst_10517 = (state_10519[(2)]);
var state_10519__$1 = state_10519;
return cljs.core.async.impl.ioc_helpers.return_chan(state_10519__$1,inst_10517);
} else {
if((state_val_10520 === (12))){
var state_10519__$1 = state_10519;
var statearr_10544_12109 = state_10519__$1;
(statearr_10544_12109[(2)] = null);

(statearr_10544_12109[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10520 === (2))){
var inst_10463 = (state_10519[(12)]);
var inst_10460 = (state_10519[(11)]);
var inst_10463__$1 = cljs.core.__destructure_map(inst_10460);
var inst_10464 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_10463__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_10465 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_10463__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_10466 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_10463__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_10519__$1 = (function (){var statearr_10546 = state_10519;
(statearr_10546[(15)] = inst_10464);

(statearr_10546[(12)] = inst_10463__$1);

(statearr_10546[(18)] = inst_10465);

return statearr_10546;
})();
return cljs.core.async.ioc_alts_BANG_(state_10519__$1,(4),inst_10466);
} else {
if((state_val_10520 === (23))){
var inst_10504 = (state_10519[(2)]);
var state_10519__$1 = state_10519;
if(cljs.core.truth_(inst_10504)){
var statearr_10548_12110 = state_10519__$1;
(statearr_10548_12110[(1)] = (24));

} else {
var statearr_10550_12111 = state_10519__$1;
(statearr_10550_12111[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10520 === (19))){
var inst_10499 = (state_10519[(2)]);
var state_10519__$1 = state_10519;
var statearr_10551_12112 = state_10519__$1;
(statearr_10551_12112[(2)] = inst_10499);

(statearr_10551_12112[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10520 === (11))){
var inst_10473 = (state_10519[(14)]);
var inst_10483 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_10473);
var state_10519__$1 = state_10519;
var statearr_10554_12113 = state_10519__$1;
(statearr_10554_12113[(2)] = inst_10483);

(statearr_10554_12113[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10520 === (9))){
var inst_10464 = (state_10519[(15)]);
var inst_10473 = (state_10519[(14)]);
var inst_10490 = (state_10519[(19)]);
var inst_10490__$1 = (inst_10464.cljs$core$IFn$_invoke$arity$1 ? inst_10464.cljs$core$IFn$_invoke$arity$1(inst_10473) : inst_10464.call(null,inst_10473));
var state_10519__$1 = (function (){var statearr_10555 = state_10519;
(statearr_10555[(19)] = inst_10490__$1);

return statearr_10555;
})();
if(cljs.core.truth_(inst_10490__$1)){
var statearr_10556_12114 = state_10519__$1;
(statearr_10556_12114[(1)] = (14));

} else {
var statearr_10557_12115 = state_10519__$1;
(statearr_10557_12115[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10520 === (5))){
var inst_10474 = (state_10519[(13)]);
var state_10519__$1 = state_10519;
var statearr_10558_12116 = state_10519__$1;
(statearr_10558_12116[(2)] = inst_10474);

(statearr_10558_12116[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10520 === (14))){
var inst_10490 = (state_10519[(19)]);
var state_10519__$1 = state_10519;
var statearr_10559_12117 = state_10519__$1;
(statearr_10559_12117[(2)] = inst_10490);

(statearr_10559_12117[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10520 === (26))){
var inst_10509 = (state_10519[(2)]);
var state_10519__$1 = state_10519;
var statearr_10560_12118 = state_10519__$1;
(statearr_10560_12118[(2)] = inst_10509);

(statearr_10560_12118[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10520 === (16))){
var inst_10501 = (state_10519[(2)]);
var state_10519__$1 = state_10519;
if(cljs.core.truth_(inst_10501)){
var statearr_10561_12119 = state_10519__$1;
(statearr_10561_12119[(1)] = (20));

} else {
var statearr_10562_12120 = state_10519__$1;
(statearr_10562_12120[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10520 === (10))){
var inst_10515 = (state_10519[(2)]);
var state_10519__$1 = state_10519;
var statearr_10563_12121 = state_10519__$1;
(statearr_10563_12121[(2)] = inst_10515);

(statearr_10563_12121[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10520 === (18))){
var inst_10493 = (state_10519[(16)]);
var state_10519__$1 = state_10519;
var statearr_10564_12122 = state_10519__$1;
(statearr_10564_12122[(2)] = inst_10493);

(statearr_10564_12122[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10520 === (8))){
var inst_10472 = (state_10519[(7)]);
var inst_10481 = (inst_10472 == null);
var state_10519__$1 = state_10519;
if(cljs.core.truth_(inst_10481)){
var statearr_10566_12123 = state_10519__$1;
(statearr_10566_12123[(1)] = (11));

} else {
var statearr_10567_12124 = state_10519__$1;
(statearr_10567_12124[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__8855__auto__ = null;
var cljs$core$async$mix_$_state_machine__8855__auto____0 = (function (){
var statearr_10570 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10570[(0)] = cljs$core$async$mix_$_state_machine__8855__auto__);

(statearr_10570[(1)] = (1));

return statearr_10570;
});
var cljs$core$async$mix_$_state_machine__8855__auto____1 = (function (state_10519){
while(true){
var ret_value__8856__auto__ = (function (){try{while(true){
var result__8857__auto__ = switch__8854__auto__(state_10519);
if(cljs.core.keyword_identical_QMARK_(result__8857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8857__auto__;
}
break;
}
}catch (e10571){var ex__8858__auto__ = e10571;
var statearr_10572_12125 = state_10519;
(statearr_10572_12125[(2)] = ex__8858__auto__);


if(cljs.core.seq((state_10519[(4)]))){
var statearr_10573_12126 = state_10519;
(statearr_10573_12126[(1)] = cljs.core.first((state_10519[(4)])));

} else {
throw ex__8858__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12127 = state_10519;
state_10519 = G__12127;
continue;
} else {
return ret_value__8856__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__8855__auto__ = function(state_10519){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__8855__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__8855__auto____1.call(this,state_10519);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__8855__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__8855__auto____0;
cljs$core$async$mix_$_state_machine__8855__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__8855__auto____1;
return cljs$core$async$mix_$_state_machine__8855__auto__;
})()
})();
var state__9333__auto__ = (function (){var statearr_10574 = f__9332__auto__();
(statearr_10574[(6)] = c__9331__auto___12094);

return statearr_10574;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__9333__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_12128 = (function (p,v,ch,close_QMARK_){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5351__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5349__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5349__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_12128(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_12129 = (function (p,v,ch){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5351__auto__.call(null,p,v,ch));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5349__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_12129(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_12130 = (function() {
var G__12131 = null;
var G__12131__1 = (function (p){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5351__auto__.call(null,p));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5349__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__12131__2 = (function (p,v){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5351__auto__.call(null,p,v));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5349__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__12131 = function(p,v){
switch(arguments.length){
case 1:
return G__12131__1.call(this,p);
case 2:
return G__12131__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__12131.cljs$core$IFn$_invoke$arity$1 = G__12131__1;
G__12131.cljs$core$IFn$_invoke$arity$2 = G__12131__2;
return G__12131;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__10596 = arguments.length;
switch (G__10596) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_12130(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_12130(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10606 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta10607){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta10607 = meta10607;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async10606.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10608,meta10607__$1){
var self__ = this;
var _10608__$1 = this;
return (new cljs.core.async.t_cljs$core$async10606(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta10607__$1));
}));

(cljs.core.async.t_cljs$core$async10606.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10608){
var self__ = this;
var _10608__$1 = this;
return self__.meta10607;
}));

(cljs.core.async.t_cljs$core$async10606.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async10606.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async10606.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async10606.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async10606.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async10606.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async10606.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async10606.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta10607","meta10607",194045322,null)], null);
}));

(cljs.core.async.t_cljs$core$async10606.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async10606.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10606");

(cljs.core.async.t_cljs$core$async10606.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async10606");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async10606.
 */
cljs.core.async.__GT_t_cljs$core$async10606 = (function cljs$core$async$__GT_t_cljs$core$async10606(ch,topic_fn,buf_fn,mults,ensure_mult,meta10607){
return (new cljs.core.async.t_cljs$core$async10606(ch,topic_fn,buf_fn,mults,ensure_mult,meta10607));
});


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__10602 = arguments.length;
switch (G__10602) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5002__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__10600_SHARP_){
if(cljs.core.truth_((p1__10600_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__10600_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__10600_SHARP_.call(null,topic)))){
return p1__10600_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__10600_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async10606(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__9331__auto___12134 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__9332__auto__ = (function (){var switch__8854__auto__ = (function (state_10685){
var state_val_10686 = (state_10685[(1)]);
if((state_val_10686 === (7))){
var inst_10681 = (state_10685[(2)]);
var state_10685__$1 = state_10685;
var statearr_10687_12135 = state_10685__$1;
(statearr_10687_12135[(2)] = inst_10681);

(statearr_10687_12135[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10686 === (20))){
var state_10685__$1 = state_10685;
var statearr_10688_12136 = state_10685__$1;
(statearr_10688_12136[(2)] = null);

(statearr_10688_12136[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10686 === (1))){
var state_10685__$1 = state_10685;
var statearr_10689_12137 = state_10685__$1;
(statearr_10689_12137[(2)] = null);

(statearr_10689_12137[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10686 === (24))){
var inst_10664 = (state_10685[(7)]);
var inst_10673 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_10664);
var state_10685__$1 = state_10685;
var statearr_10690_12138 = state_10685__$1;
(statearr_10690_12138[(2)] = inst_10673);

(statearr_10690_12138[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10686 === (4))){
var inst_10613 = (state_10685[(8)]);
var inst_10613__$1 = (state_10685[(2)]);
var inst_10614 = (inst_10613__$1 == null);
var state_10685__$1 = (function (){var statearr_10691 = state_10685;
(statearr_10691[(8)] = inst_10613__$1);

return statearr_10691;
})();
if(cljs.core.truth_(inst_10614)){
var statearr_10692_12139 = state_10685__$1;
(statearr_10692_12139[(1)] = (5));

} else {
var statearr_10693_12140 = state_10685__$1;
(statearr_10693_12140[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10686 === (15))){
var inst_10658 = (state_10685[(2)]);
var state_10685__$1 = state_10685;
var statearr_10694_12141 = state_10685__$1;
(statearr_10694_12141[(2)] = inst_10658);

(statearr_10694_12141[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10686 === (21))){
var inst_10678 = (state_10685[(2)]);
var state_10685__$1 = (function (){var statearr_10696 = state_10685;
(statearr_10696[(9)] = inst_10678);

return statearr_10696;
})();
var statearr_10697_12142 = state_10685__$1;
(statearr_10697_12142[(2)] = null);

(statearr_10697_12142[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10686 === (13))){
var inst_10637 = (state_10685[(10)]);
var inst_10640 = cljs.core.chunked_seq_QMARK_(inst_10637);
var state_10685__$1 = state_10685;
if(inst_10640){
var statearr_10701_12143 = state_10685__$1;
(statearr_10701_12143[(1)] = (16));

} else {
var statearr_10702_12144 = state_10685__$1;
(statearr_10702_12144[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10686 === (22))){
var inst_10670 = (state_10685[(2)]);
var state_10685__$1 = state_10685;
if(cljs.core.truth_(inst_10670)){
var statearr_10703_12145 = state_10685__$1;
(statearr_10703_12145[(1)] = (23));

} else {
var statearr_10704_12146 = state_10685__$1;
(statearr_10704_12146[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10686 === (6))){
var inst_10613 = (state_10685[(8)]);
var inst_10664 = (state_10685[(7)]);
var inst_10666 = (state_10685[(11)]);
var inst_10664__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_10613) : topic_fn.call(null,inst_10613));
var inst_10665 = cljs.core.deref(mults);
var inst_10666__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_10665,inst_10664__$1);
var state_10685__$1 = (function (){var statearr_10705 = state_10685;
(statearr_10705[(7)] = inst_10664__$1);

(statearr_10705[(11)] = inst_10666__$1);

return statearr_10705;
})();
if(cljs.core.truth_(inst_10666__$1)){
var statearr_10706_12147 = state_10685__$1;
(statearr_10706_12147[(1)] = (19));

} else {
var statearr_10708_12148 = state_10685__$1;
(statearr_10708_12148[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10686 === (25))){
var inst_10675 = (state_10685[(2)]);
var state_10685__$1 = state_10685;
var statearr_10709_12149 = state_10685__$1;
(statearr_10709_12149[(2)] = inst_10675);

(statearr_10709_12149[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10686 === (17))){
var inst_10637 = (state_10685[(10)]);
var inst_10648 = cljs.core.first(inst_10637);
var inst_10649 = cljs.core.async.muxch_STAR_(inst_10648);
var inst_10650 = cljs.core.async.close_BANG_(inst_10649);
var inst_10651 = cljs.core.next(inst_10637);
var inst_10623 = inst_10651;
var inst_10624 = null;
var inst_10625 = (0);
var inst_10626 = (0);
var state_10685__$1 = (function (){var statearr_10710 = state_10685;
(statearr_10710[(12)] = inst_10626);

(statearr_10710[(13)] = inst_10625);

(statearr_10710[(14)] = inst_10650);

(statearr_10710[(15)] = inst_10623);

(statearr_10710[(16)] = inst_10624);

return statearr_10710;
})();
var statearr_10711_12150 = state_10685__$1;
(statearr_10711_12150[(2)] = null);

(statearr_10711_12150[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10686 === (3))){
var inst_10683 = (state_10685[(2)]);
var state_10685__$1 = state_10685;
return cljs.core.async.impl.ioc_helpers.return_chan(state_10685__$1,inst_10683);
} else {
if((state_val_10686 === (12))){
var inst_10660 = (state_10685[(2)]);
var state_10685__$1 = state_10685;
var statearr_10712_12151 = state_10685__$1;
(statearr_10712_12151[(2)] = inst_10660);

(statearr_10712_12151[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10686 === (2))){
var state_10685__$1 = state_10685;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10685__$1,(4),ch);
} else {
if((state_val_10686 === (23))){
var state_10685__$1 = state_10685;
var statearr_10713_12152 = state_10685__$1;
(statearr_10713_12152[(2)] = null);

(statearr_10713_12152[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10686 === (19))){
var inst_10613 = (state_10685[(8)]);
var inst_10666 = (state_10685[(11)]);
var inst_10668 = cljs.core.async.muxch_STAR_(inst_10666);
var state_10685__$1 = state_10685;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_10685__$1,(22),inst_10668,inst_10613);
} else {
if((state_val_10686 === (11))){
var inst_10637 = (state_10685[(10)]);
var inst_10623 = (state_10685[(15)]);
var inst_10637__$1 = cljs.core.seq(inst_10623);
var state_10685__$1 = (function (){var statearr_10714 = state_10685;
(statearr_10714[(10)] = inst_10637__$1);

return statearr_10714;
})();
if(inst_10637__$1){
var statearr_10715_12153 = state_10685__$1;
(statearr_10715_12153[(1)] = (13));

} else {
var statearr_10716_12154 = state_10685__$1;
(statearr_10716_12154[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10686 === (9))){
var inst_10662 = (state_10685[(2)]);
var state_10685__$1 = state_10685;
var statearr_10717_12155 = state_10685__$1;
(statearr_10717_12155[(2)] = inst_10662);

(statearr_10717_12155[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10686 === (5))){
var inst_10620 = cljs.core.deref(mults);
var inst_10621 = cljs.core.vals(inst_10620);
var inst_10622 = cljs.core.seq(inst_10621);
var inst_10623 = inst_10622;
var inst_10624 = null;
var inst_10625 = (0);
var inst_10626 = (0);
var state_10685__$1 = (function (){var statearr_10718 = state_10685;
(statearr_10718[(12)] = inst_10626);

(statearr_10718[(13)] = inst_10625);

(statearr_10718[(15)] = inst_10623);

(statearr_10718[(16)] = inst_10624);

return statearr_10718;
})();
var statearr_10719_12156 = state_10685__$1;
(statearr_10719_12156[(2)] = null);

(statearr_10719_12156[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10686 === (14))){
var state_10685__$1 = state_10685;
var statearr_10723_12157 = state_10685__$1;
(statearr_10723_12157[(2)] = null);

(statearr_10723_12157[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10686 === (16))){
var inst_10637 = (state_10685[(10)]);
var inst_10643 = cljs.core.chunk_first(inst_10637);
var inst_10644 = cljs.core.chunk_rest(inst_10637);
var inst_10645 = cljs.core.count(inst_10643);
var inst_10623 = inst_10644;
var inst_10624 = inst_10643;
var inst_10625 = inst_10645;
var inst_10626 = (0);
var state_10685__$1 = (function (){var statearr_10724 = state_10685;
(statearr_10724[(12)] = inst_10626);

(statearr_10724[(13)] = inst_10625);

(statearr_10724[(15)] = inst_10623);

(statearr_10724[(16)] = inst_10624);

return statearr_10724;
})();
var statearr_10725_12158 = state_10685__$1;
(statearr_10725_12158[(2)] = null);

(statearr_10725_12158[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10686 === (10))){
var inst_10626 = (state_10685[(12)]);
var inst_10625 = (state_10685[(13)]);
var inst_10623 = (state_10685[(15)]);
var inst_10624 = (state_10685[(16)]);
var inst_10631 = cljs.core._nth(inst_10624,inst_10626);
var inst_10632 = cljs.core.async.muxch_STAR_(inst_10631);
var inst_10633 = cljs.core.async.close_BANG_(inst_10632);
var inst_10634 = (inst_10626 + (1));
var tmp10720 = inst_10625;
var tmp10721 = inst_10623;
var tmp10722 = inst_10624;
var inst_10623__$1 = tmp10721;
var inst_10624__$1 = tmp10722;
var inst_10625__$1 = tmp10720;
var inst_10626__$1 = inst_10634;
var state_10685__$1 = (function (){var statearr_10726 = state_10685;
(statearr_10726[(12)] = inst_10626__$1);

(statearr_10726[(13)] = inst_10625__$1);

(statearr_10726[(15)] = inst_10623__$1);

(statearr_10726[(17)] = inst_10633);

(statearr_10726[(16)] = inst_10624__$1);

return statearr_10726;
})();
var statearr_10731_12159 = state_10685__$1;
(statearr_10731_12159[(2)] = null);

(statearr_10731_12159[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10686 === (18))){
var inst_10655 = (state_10685[(2)]);
var state_10685__$1 = state_10685;
var statearr_10736_12160 = state_10685__$1;
(statearr_10736_12160[(2)] = inst_10655);

(statearr_10736_12160[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10686 === (8))){
var inst_10626 = (state_10685[(12)]);
var inst_10625 = (state_10685[(13)]);
var inst_10628 = (inst_10626 < inst_10625);
var inst_10629 = inst_10628;
var state_10685__$1 = state_10685;
if(cljs.core.truth_(inst_10629)){
var statearr_10741_12161 = state_10685__$1;
(statearr_10741_12161[(1)] = (10));

} else {
var statearr_10742_12162 = state_10685__$1;
(statearr_10742_12162[(1)] = (11));

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
var cljs$core$async$state_machine__8855__auto__ = null;
var cljs$core$async$state_machine__8855__auto____0 = (function (){
var statearr_10745 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10745[(0)] = cljs$core$async$state_machine__8855__auto__);

(statearr_10745[(1)] = (1));

return statearr_10745;
});
var cljs$core$async$state_machine__8855__auto____1 = (function (state_10685){
while(true){
var ret_value__8856__auto__ = (function (){try{while(true){
var result__8857__auto__ = switch__8854__auto__(state_10685);
if(cljs.core.keyword_identical_QMARK_(result__8857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8857__auto__;
}
break;
}
}catch (e10746){var ex__8858__auto__ = e10746;
var statearr_10747_12163 = state_10685;
(statearr_10747_12163[(2)] = ex__8858__auto__);


if(cljs.core.seq((state_10685[(4)]))){
var statearr_10748_12164 = state_10685;
(statearr_10748_12164[(1)] = cljs.core.first((state_10685[(4)])));

} else {
throw ex__8858__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12165 = state_10685;
state_10685 = G__12165;
continue;
} else {
return ret_value__8856__auto__;
}
break;
}
});
cljs$core$async$state_machine__8855__auto__ = function(state_10685){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8855__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8855__auto____1.call(this,state_10685);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8855__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8855__auto____0;
cljs$core$async$state_machine__8855__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8855__auto____1;
return cljs$core$async$state_machine__8855__auto__;
})()
})();
var state__9333__auto__ = (function (){var statearr_10749 = f__9332__auto__();
(statearr_10749[(6)] = c__9331__auto___12134);

return statearr_10749;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__9333__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__10751 = arguments.length;
switch (G__10751) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__10767 = arguments.length;
switch (G__10767) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__10778 = arguments.length;
switch (G__10778) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__9331__auto___12169 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__9332__auto__ = (function (){var switch__8854__auto__ = (function (state_10833){
var state_val_10834 = (state_10833[(1)]);
if((state_val_10834 === (7))){
var state_10833__$1 = state_10833;
var statearr_10835_12170 = state_10833__$1;
(statearr_10835_12170[(2)] = null);

(statearr_10835_12170[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10834 === (1))){
var state_10833__$1 = state_10833;
var statearr_10837_12171 = state_10833__$1;
(statearr_10837_12171[(2)] = null);

(statearr_10837_12171[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10834 === (4))){
var inst_10793 = (state_10833[(7)]);
var inst_10794 = (state_10833[(8)]);
var inst_10796 = (inst_10794 < inst_10793);
var state_10833__$1 = state_10833;
if(cljs.core.truth_(inst_10796)){
var statearr_10839_12172 = state_10833__$1;
(statearr_10839_12172[(1)] = (6));

} else {
var statearr_10840_12173 = state_10833__$1;
(statearr_10840_12173[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10834 === (15))){
var inst_10819 = (state_10833[(9)]);
var inst_10824 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_10819);
var state_10833__$1 = state_10833;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_10833__$1,(17),out,inst_10824);
} else {
if((state_val_10834 === (13))){
var inst_10819 = (state_10833[(9)]);
var inst_10819__$1 = (state_10833[(2)]);
var inst_10820 = cljs.core.some(cljs.core.nil_QMARK_,inst_10819__$1);
var state_10833__$1 = (function (){var statearr_10841 = state_10833;
(statearr_10841[(9)] = inst_10819__$1);

return statearr_10841;
})();
if(cljs.core.truth_(inst_10820)){
var statearr_10842_12174 = state_10833__$1;
(statearr_10842_12174[(1)] = (14));

} else {
var statearr_10843_12175 = state_10833__$1;
(statearr_10843_12175[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10834 === (6))){
var state_10833__$1 = state_10833;
var statearr_10844_12176 = state_10833__$1;
(statearr_10844_12176[(2)] = null);

(statearr_10844_12176[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10834 === (17))){
var inst_10826 = (state_10833[(2)]);
var state_10833__$1 = (function (){var statearr_10848 = state_10833;
(statearr_10848[(10)] = inst_10826);

return statearr_10848;
})();
var statearr_10850_12177 = state_10833__$1;
(statearr_10850_12177[(2)] = null);

(statearr_10850_12177[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10834 === (3))){
var inst_10831 = (state_10833[(2)]);
var state_10833__$1 = state_10833;
return cljs.core.async.impl.ioc_helpers.return_chan(state_10833__$1,inst_10831);
} else {
if((state_val_10834 === (12))){
var _ = (function (){var statearr_10851 = state_10833;
(statearr_10851[(4)] = cljs.core.rest((state_10833[(4)])));

return statearr_10851;
})();
var state_10833__$1 = state_10833;
var ex10845 = (state_10833__$1[(2)]);
var statearr_10855_12178 = state_10833__$1;
(statearr_10855_12178[(5)] = ex10845);


if((ex10845 instanceof Object)){
var statearr_10856_12179 = state_10833__$1;
(statearr_10856_12179[(1)] = (11));

(statearr_10856_12179[(5)] = null);

} else {
throw ex10845;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10834 === (2))){
var inst_10792 = cljs.core.reset_BANG_(dctr,cnt);
var inst_10793 = cnt;
var inst_10794 = (0);
var state_10833__$1 = (function (){var statearr_10859 = state_10833;
(statearr_10859[(7)] = inst_10793);

(statearr_10859[(11)] = inst_10792);

(statearr_10859[(8)] = inst_10794);

return statearr_10859;
})();
var statearr_10860_12180 = state_10833__$1;
(statearr_10860_12180[(2)] = null);

(statearr_10860_12180[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10834 === (11))){
var inst_10798 = (state_10833[(2)]);
var inst_10799 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_10833__$1 = (function (){var statearr_10861 = state_10833;
(statearr_10861[(12)] = inst_10798);

return statearr_10861;
})();
var statearr_10862_12181 = state_10833__$1;
(statearr_10862_12181[(2)] = inst_10799);

(statearr_10862_12181[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10834 === (9))){
var inst_10794 = (state_10833[(8)]);
var _ = (function (){var statearr_10863 = state_10833;
(statearr_10863[(4)] = cljs.core.cons((12),(state_10833[(4)])));

return statearr_10863;
})();
var inst_10805 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_10794) : chs__$1.call(null,inst_10794));
var inst_10806 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_10794) : done.call(null,inst_10794));
var inst_10807 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_10805,inst_10806);
var ___$1 = (function (){var statearr_10864 = state_10833;
(statearr_10864[(4)] = cljs.core.rest((state_10833[(4)])));

return statearr_10864;
})();
var state_10833__$1 = state_10833;
var statearr_10865_12182 = state_10833__$1;
(statearr_10865_12182[(2)] = inst_10807);

(statearr_10865_12182[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10834 === (5))){
var inst_10817 = (state_10833[(2)]);
var state_10833__$1 = (function (){var statearr_10866 = state_10833;
(statearr_10866[(13)] = inst_10817);

return statearr_10866;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10833__$1,(13),dchan);
} else {
if((state_val_10834 === (14))){
var inst_10822 = cljs.core.async.close_BANG_(out);
var state_10833__$1 = state_10833;
var statearr_10875_12183 = state_10833__$1;
(statearr_10875_12183[(2)] = inst_10822);

(statearr_10875_12183[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10834 === (16))){
var inst_10829 = (state_10833[(2)]);
var state_10833__$1 = state_10833;
var statearr_10880_12184 = state_10833__$1;
(statearr_10880_12184[(2)] = inst_10829);

(statearr_10880_12184[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10834 === (10))){
var inst_10794 = (state_10833[(8)]);
var inst_10810 = (state_10833[(2)]);
var inst_10811 = (inst_10794 + (1));
var inst_10794__$1 = inst_10811;
var state_10833__$1 = (function (){var statearr_10881 = state_10833;
(statearr_10881[(14)] = inst_10810);

(statearr_10881[(8)] = inst_10794__$1);

return statearr_10881;
})();
var statearr_10882_12185 = state_10833__$1;
(statearr_10882_12185[(2)] = null);

(statearr_10882_12185[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10834 === (8))){
var inst_10815 = (state_10833[(2)]);
var state_10833__$1 = state_10833;
var statearr_10883_12186 = state_10833__$1;
(statearr_10883_12186[(2)] = inst_10815);

(statearr_10883_12186[(1)] = (5));


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
}
}
}
});
return (function() {
var cljs$core$async$state_machine__8855__auto__ = null;
var cljs$core$async$state_machine__8855__auto____0 = (function (){
var statearr_10884 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10884[(0)] = cljs$core$async$state_machine__8855__auto__);

(statearr_10884[(1)] = (1));

return statearr_10884;
});
var cljs$core$async$state_machine__8855__auto____1 = (function (state_10833){
while(true){
var ret_value__8856__auto__ = (function (){try{while(true){
var result__8857__auto__ = switch__8854__auto__(state_10833);
if(cljs.core.keyword_identical_QMARK_(result__8857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8857__auto__;
}
break;
}
}catch (e10885){var ex__8858__auto__ = e10885;
var statearr_10886_12187 = state_10833;
(statearr_10886_12187[(2)] = ex__8858__auto__);


if(cljs.core.seq((state_10833[(4)]))){
var statearr_10887_12188 = state_10833;
(statearr_10887_12188[(1)] = cljs.core.first((state_10833[(4)])));

} else {
throw ex__8858__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12189 = state_10833;
state_10833 = G__12189;
continue;
} else {
return ret_value__8856__auto__;
}
break;
}
});
cljs$core$async$state_machine__8855__auto__ = function(state_10833){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8855__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8855__auto____1.call(this,state_10833);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8855__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8855__auto____0;
cljs$core$async$state_machine__8855__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8855__auto____1;
return cljs$core$async$state_machine__8855__auto__;
})()
})();
var state__9333__auto__ = (function (){var statearr_10889 = f__9332__auto__();
(statearr_10889[(6)] = c__9331__auto___12169);

return statearr_10889;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__9333__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__10892 = arguments.length;
switch (G__10892) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__9331__auto___12191 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__9332__auto__ = (function (){var switch__8854__auto__ = (function (state_10935){
var state_val_10936 = (state_10935[(1)]);
if((state_val_10936 === (7))){
var inst_10914 = (state_10935[(7)]);
var inst_10915 = (state_10935[(8)]);
var inst_10914__$1 = (state_10935[(2)]);
var inst_10915__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_10914__$1,(0),null);
var inst_10916 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_10914__$1,(1),null);
var inst_10917 = (inst_10915__$1 == null);
var state_10935__$1 = (function (){var statearr_10945 = state_10935;
(statearr_10945[(9)] = inst_10916);

(statearr_10945[(7)] = inst_10914__$1);

(statearr_10945[(8)] = inst_10915__$1);

return statearr_10945;
})();
if(cljs.core.truth_(inst_10917)){
var statearr_10950_12192 = state_10935__$1;
(statearr_10950_12192[(1)] = (8));

} else {
var statearr_10951_12193 = state_10935__$1;
(statearr_10951_12193[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10936 === (1))){
var inst_10903 = cljs.core.vec(chs);
var inst_10904 = inst_10903;
var state_10935__$1 = (function (){var statearr_10952 = state_10935;
(statearr_10952[(10)] = inst_10904);

return statearr_10952;
})();
var statearr_10953_12194 = state_10935__$1;
(statearr_10953_12194[(2)] = null);

(statearr_10953_12194[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10936 === (4))){
var inst_10904 = (state_10935[(10)]);
var state_10935__$1 = state_10935;
return cljs.core.async.ioc_alts_BANG_(state_10935__$1,(7),inst_10904);
} else {
if((state_val_10936 === (6))){
var inst_10931 = (state_10935[(2)]);
var state_10935__$1 = state_10935;
var statearr_10954_12195 = state_10935__$1;
(statearr_10954_12195[(2)] = inst_10931);

(statearr_10954_12195[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10936 === (3))){
var inst_10933 = (state_10935[(2)]);
var state_10935__$1 = state_10935;
return cljs.core.async.impl.ioc_helpers.return_chan(state_10935__$1,inst_10933);
} else {
if((state_val_10936 === (2))){
var inst_10904 = (state_10935[(10)]);
var inst_10906 = cljs.core.count(inst_10904);
var inst_10907 = (inst_10906 > (0));
var state_10935__$1 = state_10935;
if(cljs.core.truth_(inst_10907)){
var statearr_10956_12196 = state_10935__$1;
(statearr_10956_12196[(1)] = (4));

} else {
var statearr_10957_12197 = state_10935__$1;
(statearr_10957_12197[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10936 === (11))){
var inst_10904 = (state_10935[(10)]);
var inst_10924 = (state_10935[(2)]);
var tmp10955 = inst_10904;
var inst_10904__$1 = tmp10955;
var state_10935__$1 = (function (){var statearr_10958 = state_10935;
(statearr_10958[(10)] = inst_10904__$1);

(statearr_10958[(11)] = inst_10924);

return statearr_10958;
})();
var statearr_10959_12198 = state_10935__$1;
(statearr_10959_12198[(2)] = null);

(statearr_10959_12198[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10936 === (9))){
var inst_10915 = (state_10935[(8)]);
var state_10935__$1 = state_10935;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_10935__$1,(11),out,inst_10915);
} else {
if((state_val_10936 === (5))){
var inst_10929 = cljs.core.async.close_BANG_(out);
var state_10935__$1 = state_10935;
var statearr_10961_12199 = state_10935__$1;
(statearr_10961_12199[(2)] = inst_10929);

(statearr_10961_12199[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10936 === (10))){
var inst_10927 = (state_10935[(2)]);
var state_10935__$1 = state_10935;
var statearr_10962_12200 = state_10935__$1;
(statearr_10962_12200[(2)] = inst_10927);

(statearr_10962_12200[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10936 === (8))){
var inst_10916 = (state_10935[(9)]);
var inst_10914 = (state_10935[(7)]);
var inst_10904 = (state_10935[(10)]);
var inst_10915 = (state_10935[(8)]);
var inst_10919 = (function (){var cs = inst_10904;
var vec__10910 = inst_10914;
var v = inst_10915;
var c = inst_10916;
return (function (p1__10890_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__10890_SHARP_);
});
})();
var inst_10920 = cljs.core.filterv(inst_10919,inst_10904);
var inst_10904__$1 = inst_10920;
var state_10935__$1 = (function (){var statearr_10965 = state_10935;
(statearr_10965[(10)] = inst_10904__$1);

return statearr_10965;
})();
var statearr_10966_12201 = state_10935__$1;
(statearr_10966_12201[(2)] = null);

(statearr_10966_12201[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__8855__auto__ = null;
var cljs$core$async$state_machine__8855__auto____0 = (function (){
var statearr_10969 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10969[(0)] = cljs$core$async$state_machine__8855__auto__);

(statearr_10969[(1)] = (1));

return statearr_10969;
});
var cljs$core$async$state_machine__8855__auto____1 = (function (state_10935){
while(true){
var ret_value__8856__auto__ = (function (){try{while(true){
var result__8857__auto__ = switch__8854__auto__(state_10935);
if(cljs.core.keyword_identical_QMARK_(result__8857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8857__auto__;
}
break;
}
}catch (e10973){var ex__8858__auto__ = e10973;
var statearr_10975_12202 = state_10935;
(statearr_10975_12202[(2)] = ex__8858__auto__);


if(cljs.core.seq((state_10935[(4)]))){
var statearr_10976_12203 = state_10935;
(statearr_10976_12203[(1)] = cljs.core.first((state_10935[(4)])));

} else {
throw ex__8858__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12204 = state_10935;
state_10935 = G__12204;
continue;
} else {
return ret_value__8856__auto__;
}
break;
}
});
cljs$core$async$state_machine__8855__auto__ = function(state_10935){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8855__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8855__auto____1.call(this,state_10935);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8855__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8855__auto____0;
cljs$core$async$state_machine__8855__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8855__auto____1;
return cljs$core$async$state_machine__8855__auto__;
})()
})();
var state__9333__auto__ = (function (){var statearr_10980 = f__9332__auto__();
(statearr_10980[(6)] = c__9331__auto___12191);

return statearr_10980;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__9333__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__10986 = arguments.length;
switch (G__10986) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__9331__auto___12206 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__9332__auto__ = (function (){var switch__8854__auto__ = (function (state_11014){
var state_val_11015 = (state_11014[(1)]);
if((state_val_11015 === (7))){
var inst_10994 = (state_11014[(7)]);
var inst_10994__$1 = (state_11014[(2)]);
var inst_10995 = (inst_10994__$1 == null);
var inst_10996 = cljs.core.not(inst_10995);
var state_11014__$1 = (function (){var statearr_11018 = state_11014;
(statearr_11018[(7)] = inst_10994__$1);

return statearr_11018;
})();
if(inst_10996){
var statearr_11022_12207 = state_11014__$1;
(statearr_11022_12207[(1)] = (8));

} else {
var statearr_11023_12208 = state_11014__$1;
(statearr_11023_12208[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11015 === (1))){
var inst_10989 = (0);
var state_11014__$1 = (function (){var statearr_11025 = state_11014;
(statearr_11025[(8)] = inst_10989);

return statearr_11025;
})();
var statearr_11027_12209 = state_11014__$1;
(statearr_11027_12209[(2)] = null);

(statearr_11027_12209[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11015 === (4))){
var state_11014__$1 = state_11014;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11014__$1,(7),ch);
} else {
if((state_val_11015 === (6))){
var inst_11007 = (state_11014[(2)]);
var state_11014__$1 = state_11014;
var statearr_11030_12210 = state_11014__$1;
(statearr_11030_12210[(2)] = inst_11007);

(statearr_11030_12210[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11015 === (3))){
var inst_11009 = (state_11014[(2)]);
var inst_11010 = cljs.core.async.close_BANG_(out);
var state_11014__$1 = (function (){var statearr_11031 = state_11014;
(statearr_11031[(9)] = inst_11009);

return statearr_11031;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_11014__$1,inst_11010);
} else {
if((state_val_11015 === (2))){
var inst_10989 = (state_11014[(8)]);
var inst_10991 = (inst_10989 < n);
var state_11014__$1 = state_11014;
if(cljs.core.truth_(inst_10991)){
var statearr_11032_12211 = state_11014__$1;
(statearr_11032_12211[(1)] = (4));

} else {
var statearr_11034_12212 = state_11014__$1;
(statearr_11034_12212[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11015 === (11))){
var inst_10989 = (state_11014[(8)]);
var inst_10999 = (state_11014[(2)]);
var inst_11000 = (inst_10989 + (1));
var inst_10989__$1 = inst_11000;
var state_11014__$1 = (function (){var statearr_11038 = state_11014;
(statearr_11038[(10)] = inst_10999);

(statearr_11038[(8)] = inst_10989__$1);

return statearr_11038;
})();
var statearr_11039_12213 = state_11014__$1;
(statearr_11039_12213[(2)] = null);

(statearr_11039_12213[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11015 === (9))){
var state_11014__$1 = state_11014;
var statearr_11040_12214 = state_11014__$1;
(statearr_11040_12214[(2)] = null);

(statearr_11040_12214[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11015 === (5))){
var state_11014__$1 = state_11014;
var statearr_11041_12215 = state_11014__$1;
(statearr_11041_12215[(2)] = null);

(statearr_11041_12215[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11015 === (10))){
var inst_11004 = (state_11014[(2)]);
var state_11014__$1 = state_11014;
var statearr_11042_12216 = state_11014__$1;
(statearr_11042_12216[(2)] = inst_11004);

(statearr_11042_12216[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11015 === (8))){
var inst_10994 = (state_11014[(7)]);
var state_11014__$1 = state_11014;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11014__$1,(11),out,inst_10994);
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
});
return (function() {
var cljs$core$async$state_machine__8855__auto__ = null;
var cljs$core$async$state_machine__8855__auto____0 = (function (){
var statearr_11043 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11043[(0)] = cljs$core$async$state_machine__8855__auto__);

(statearr_11043[(1)] = (1));

return statearr_11043;
});
var cljs$core$async$state_machine__8855__auto____1 = (function (state_11014){
while(true){
var ret_value__8856__auto__ = (function (){try{while(true){
var result__8857__auto__ = switch__8854__auto__(state_11014);
if(cljs.core.keyword_identical_QMARK_(result__8857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8857__auto__;
}
break;
}
}catch (e11044){var ex__8858__auto__ = e11044;
var statearr_11045_12217 = state_11014;
(statearr_11045_12217[(2)] = ex__8858__auto__);


if(cljs.core.seq((state_11014[(4)]))){
var statearr_11047_12218 = state_11014;
(statearr_11047_12218[(1)] = cljs.core.first((state_11014[(4)])));

} else {
throw ex__8858__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12219 = state_11014;
state_11014 = G__12219;
continue;
} else {
return ret_value__8856__auto__;
}
break;
}
});
cljs$core$async$state_machine__8855__auto__ = function(state_11014){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8855__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8855__auto____1.call(this,state_11014);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8855__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8855__auto____0;
cljs$core$async$state_machine__8855__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8855__auto____1;
return cljs$core$async$state_machine__8855__auto__;
})()
})();
var state__9333__auto__ = (function (){var statearr_11049 = f__9332__auto__();
(statearr_11049[(6)] = c__9331__auto___12206);

return statearr_11049;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__9333__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11056 = (function (f,ch,meta11053,_,fn1,meta11057){
this.f = f;
this.ch = ch;
this.meta11053 = meta11053;
this._ = _;
this.fn1 = fn1;
this.meta11057 = meta11057;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11056.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11058,meta11057__$1){
var self__ = this;
var _11058__$1 = this;
return (new cljs.core.async.t_cljs$core$async11056(self__.f,self__.ch,self__.meta11053,self__._,self__.fn1,meta11057__$1));
}));

(cljs.core.async.t_cljs$core$async11056.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11058){
var self__ = this;
var _11058__$1 = this;
return self__.meta11057;
}));

(cljs.core.async.t_cljs$core$async11056.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11056.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async11056.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async11056.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__11050_SHARP_){
var G__11062 = (((p1__11050_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__11050_SHARP_) : self__.f.call(null,p1__11050_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__11062) : f1.call(null,G__11062));
});
}));

(cljs.core.async.t_cljs$core$async11056.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta11053","meta11053",-2113248324,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async11052","cljs.core.async/t_cljs$core$async11052",412128130,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta11057","meta11057",1813686823,null)], null);
}));

(cljs.core.async.t_cljs$core$async11056.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11056.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11056");

(cljs.core.async.t_cljs$core$async11056.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async11056");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11056.
 */
cljs.core.async.__GT_t_cljs$core$async11056 = (function cljs$core$async$__GT_t_cljs$core$async11056(f,ch,meta11053,_,fn1,meta11057){
return (new cljs.core.async.t_cljs$core$async11056(f,ch,meta11053,_,fn1,meta11057));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11052 = (function (f,ch,meta11053){
this.f = f;
this.ch = ch;
this.meta11053 = meta11053;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11052.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11054,meta11053__$1){
var self__ = this;
var _11054__$1 = this;
return (new cljs.core.async.t_cljs$core$async11052(self__.f,self__.ch,meta11053__$1));
}));

(cljs.core.async.t_cljs$core$async11052.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11054){
var self__ = this;
var _11054__$1 = this;
return self__.meta11053;
}));

(cljs.core.async.t_cljs$core$async11052.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11052.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async11052.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async11052.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11052.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async11056(self__.f,self__.ch,self__.meta11053,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5000__auto__ = ret;
if(cljs.core.truth_(and__5000__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5000__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__11064 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__11064) : self__.f.call(null,G__11064));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async11052.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11052.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async11052.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta11053","meta11053",-2113248324,null)], null);
}));

(cljs.core.async.t_cljs$core$async11052.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11052.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11052");

(cljs.core.async.t_cljs$core$async11052.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async11052");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11052.
 */
cljs.core.async.__GT_t_cljs$core$async11052 = (function cljs$core$async$__GT_t_cljs$core$async11052(f,ch,meta11053){
return (new cljs.core.async.t_cljs$core$async11052(f,ch,meta11053));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async11052(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11065 = (function (f,ch,meta11066){
this.f = f;
this.ch = ch;
this.meta11066 = meta11066;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11065.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11067,meta11066__$1){
var self__ = this;
var _11067__$1 = this;
return (new cljs.core.async.t_cljs$core$async11065(self__.f,self__.ch,meta11066__$1));
}));

(cljs.core.async.t_cljs$core$async11065.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11067){
var self__ = this;
var _11067__$1 = this;
return self__.meta11066;
}));

(cljs.core.async.t_cljs$core$async11065.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11065.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async11065.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11065.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async11065.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11065.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async11065.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta11066","meta11066",-870613523,null)], null);
}));

(cljs.core.async.t_cljs$core$async11065.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11065.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11065");

(cljs.core.async.t_cljs$core$async11065.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async11065");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11065.
 */
cljs.core.async.__GT_t_cljs$core$async11065 = (function cljs$core$async$__GT_t_cljs$core$async11065(f,ch,meta11066){
return (new cljs.core.async.t_cljs$core$async11065(f,ch,meta11066));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async11065(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11070 = (function (p,ch,meta11071){
this.p = p;
this.ch = ch;
this.meta11071 = meta11071;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11070.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11072,meta11071__$1){
var self__ = this;
var _11072__$1 = this;
return (new cljs.core.async.t_cljs$core$async11070(self__.p,self__.ch,meta11071__$1));
}));

(cljs.core.async.t_cljs$core$async11070.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11072){
var self__ = this;
var _11072__$1 = this;
return self__.meta11071;
}));

(cljs.core.async.t_cljs$core$async11070.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11070.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async11070.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async11070.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11070.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async11070.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11070.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async11070.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta11071","meta11071",-1547856958,null)], null);
}));

(cljs.core.async.t_cljs$core$async11070.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11070.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11070");

(cljs.core.async.t_cljs$core$async11070.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async11070");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11070.
 */
cljs.core.async.__GT_t_cljs$core$async11070 = (function cljs$core$async$__GT_t_cljs$core$async11070(p,ch,meta11071){
return (new cljs.core.async.t_cljs$core$async11070(p,ch,meta11071));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async11070(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__11080 = arguments.length;
switch (G__11080) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__9331__auto___12221 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__9332__auto__ = (function (){var switch__8854__auto__ = (function (state_11103){
var state_val_11104 = (state_11103[(1)]);
if((state_val_11104 === (7))){
var inst_11099 = (state_11103[(2)]);
var state_11103__$1 = state_11103;
var statearr_11105_12222 = state_11103__$1;
(statearr_11105_12222[(2)] = inst_11099);

(statearr_11105_12222[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11104 === (1))){
var state_11103__$1 = state_11103;
var statearr_11106_12223 = state_11103__$1;
(statearr_11106_12223[(2)] = null);

(statearr_11106_12223[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11104 === (4))){
var inst_11085 = (state_11103[(7)]);
var inst_11085__$1 = (state_11103[(2)]);
var inst_11086 = (inst_11085__$1 == null);
var state_11103__$1 = (function (){var statearr_11108 = state_11103;
(statearr_11108[(7)] = inst_11085__$1);

return statearr_11108;
})();
if(cljs.core.truth_(inst_11086)){
var statearr_11109_12224 = state_11103__$1;
(statearr_11109_12224[(1)] = (5));

} else {
var statearr_11110_12225 = state_11103__$1;
(statearr_11110_12225[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11104 === (6))){
var inst_11085 = (state_11103[(7)]);
var inst_11090 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_11085) : p.call(null,inst_11085));
var state_11103__$1 = state_11103;
if(cljs.core.truth_(inst_11090)){
var statearr_11111_12226 = state_11103__$1;
(statearr_11111_12226[(1)] = (8));

} else {
var statearr_11112_12227 = state_11103__$1;
(statearr_11112_12227[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11104 === (3))){
var inst_11101 = (state_11103[(2)]);
var state_11103__$1 = state_11103;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11103__$1,inst_11101);
} else {
if((state_val_11104 === (2))){
var state_11103__$1 = state_11103;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11103__$1,(4),ch);
} else {
if((state_val_11104 === (11))){
var inst_11093 = (state_11103[(2)]);
var state_11103__$1 = state_11103;
var statearr_11113_12228 = state_11103__$1;
(statearr_11113_12228[(2)] = inst_11093);

(statearr_11113_12228[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11104 === (9))){
var state_11103__$1 = state_11103;
var statearr_11115_12229 = state_11103__$1;
(statearr_11115_12229[(2)] = null);

(statearr_11115_12229[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11104 === (5))){
var inst_11088 = cljs.core.async.close_BANG_(out);
var state_11103__$1 = state_11103;
var statearr_11117_12230 = state_11103__$1;
(statearr_11117_12230[(2)] = inst_11088);

(statearr_11117_12230[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11104 === (10))){
var inst_11096 = (state_11103[(2)]);
var state_11103__$1 = (function (){var statearr_11118 = state_11103;
(statearr_11118[(8)] = inst_11096);

return statearr_11118;
})();
var statearr_11119_12231 = state_11103__$1;
(statearr_11119_12231[(2)] = null);

(statearr_11119_12231[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11104 === (8))){
var inst_11085 = (state_11103[(7)]);
var state_11103__$1 = state_11103;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11103__$1,(11),out,inst_11085);
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
});
return (function() {
var cljs$core$async$state_machine__8855__auto__ = null;
var cljs$core$async$state_machine__8855__auto____0 = (function (){
var statearr_11121 = [null,null,null,null,null,null,null,null,null];
(statearr_11121[(0)] = cljs$core$async$state_machine__8855__auto__);

(statearr_11121[(1)] = (1));

return statearr_11121;
});
var cljs$core$async$state_machine__8855__auto____1 = (function (state_11103){
while(true){
var ret_value__8856__auto__ = (function (){try{while(true){
var result__8857__auto__ = switch__8854__auto__(state_11103);
if(cljs.core.keyword_identical_QMARK_(result__8857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8857__auto__;
}
break;
}
}catch (e11122){var ex__8858__auto__ = e11122;
var statearr_11124_12232 = state_11103;
(statearr_11124_12232[(2)] = ex__8858__auto__);


if(cljs.core.seq((state_11103[(4)]))){
var statearr_11125_12233 = state_11103;
(statearr_11125_12233[(1)] = cljs.core.first((state_11103[(4)])));

} else {
throw ex__8858__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12234 = state_11103;
state_11103 = G__12234;
continue;
} else {
return ret_value__8856__auto__;
}
break;
}
});
cljs$core$async$state_machine__8855__auto__ = function(state_11103){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8855__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8855__auto____1.call(this,state_11103);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8855__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8855__auto____0;
cljs$core$async$state_machine__8855__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8855__auto____1;
return cljs$core$async$state_machine__8855__auto__;
})()
})();
var state__9333__auto__ = (function (){var statearr_11126 = f__9332__auto__();
(statearr_11126[(6)] = c__9331__auto___12221);

return statearr_11126;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__9333__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__11128 = arguments.length;
switch (G__11128) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__9331__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__9332__auto__ = (function (){var switch__8854__auto__ = (function (state_11201){
var state_val_11202 = (state_11201[(1)]);
if((state_val_11202 === (7))){
var inst_11197 = (state_11201[(2)]);
var state_11201__$1 = state_11201;
var statearr_11205_12236 = state_11201__$1;
(statearr_11205_12236[(2)] = inst_11197);

(statearr_11205_12236[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11202 === (20))){
var inst_11163 = (state_11201[(7)]);
var inst_11177 = (state_11201[(2)]);
var inst_11178 = cljs.core.next(inst_11163);
var inst_11148 = inst_11178;
var inst_11149 = null;
var inst_11150 = (0);
var inst_11151 = (0);
var state_11201__$1 = (function (){var statearr_11210 = state_11201;
(statearr_11210[(8)] = inst_11150);

(statearr_11210[(9)] = inst_11149);

(statearr_11210[(10)] = inst_11151);

(statearr_11210[(11)] = inst_11177);

(statearr_11210[(12)] = inst_11148);

return statearr_11210;
})();
var statearr_11212_12237 = state_11201__$1;
(statearr_11212_12237[(2)] = null);

(statearr_11212_12237[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11202 === (1))){
var state_11201__$1 = state_11201;
var statearr_11213_12238 = state_11201__$1;
(statearr_11213_12238[(2)] = null);

(statearr_11213_12238[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11202 === (4))){
var inst_11136 = (state_11201[(13)]);
var inst_11136__$1 = (state_11201[(2)]);
var inst_11138 = (inst_11136__$1 == null);
var state_11201__$1 = (function (){var statearr_11214 = state_11201;
(statearr_11214[(13)] = inst_11136__$1);

return statearr_11214;
})();
if(cljs.core.truth_(inst_11138)){
var statearr_11215_12239 = state_11201__$1;
(statearr_11215_12239[(1)] = (5));

} else {
var statearr_11216_12240 = state_11201__$1;
(statearr_11216_12240[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11202 === (15))){
var state_11201__$1 = state_11201;
var statearr_11225_12241 = state_11201__$1;
(statearr_11225_12241[(2)] = null);

(statearr_11225_12241[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11202 === (21))){
var state_11201__$1 = state_11201;
var statearr_11227_12242 = state_11201__$1;
(statearr_11227_12242[(2)] = null);

(statearr_11227_12242[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11202 === (13))){
var inst_11150 = (state_11201[(8)]);
var inst_11149 = (state_11201[(9)]);
var inst_11151 = (state_11201[(10)]);
var inst_11148 = (state_11201[(12)]);
var inst_11159 = (state_11201[(2)]);
var inst_11160 = (inst_11151 + (1));
var tmp11219 = inst_11150;
var tmp11220 = inst_11149;
var tmp11221 = inst_11148;
var inst_11148__$1 = tmp11221;
var inst_11149__$1 = tmp11220;
var inst_11150__$1 = tmp11219;
var inst_11151__$1 = inst_11160;
var state_11201__$1 = (function (){var statearr_11228 = state_11201;
(statearr_11228[(8)] = inst_11150__$1);

(statearr_11228[(9)] = inst_11149__$1);

(statearr_11228[(10)] = inst_11151__$1);

(statearr_11228[(12)] = inst_11148__$1);

(statearr_11228[(14)] = inst_11159);

return statearr_11228;
})();
var statearr_11230_12243 = state_11201__$1;
(statearr_11230_12243[(2)] = null);

(statearr_11230_12243[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11202 === (22))){
var state_11201__$1 = state_11201;
var statearr_11235_12244 = state_11201__$1;
(statearr_11235_12244[(2)] = null);

(statearr_11235_12244[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11202 === (6))){
var inst_11136 = (state_11201[(13)]);
var inst_11146 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_11136) : f.call(null,inst_11136));
var inst_11147 = cljs.core.seq(inst_11146);
var inst_11148 = inst_11147;
var inst_11149 = null;
var inst_11150 = (0);
var inst_11151 = (0);
var state_11201__$1 = (function (){var statearr_11236 = state_11201;
(statearr_11236[(8)] = inst_11150);

(statearr_11236[(9)] = inst_11149);

(statearr_11236[(10)] = inst_11151);

(statearr_11236[(12)] = inst_11148);

return statearr_11236;
})();
var statearr_11237_12245 = state_11201__$1;
(statearr_11237_12245[(2)] = null);

(statearr_11237_12245[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11202 === (17))){
var inst_11163 = (state_11201[(7)]);
var inst_11169 = cljs.core.chunk_first(inst_11163);
var inst_11170 = cljs.core.chunk_rest(inst_11163);
var inst_11171 = cljs.core.count(inst_11169);
var inst_11148 = inst_11170;
var inst_11149 = inst_11169;
var inst_11150 = inst_11171;
var inst_11151 = (0);
var state_11201__$1 = (function (){var statearr_11239 = state_11201;
(statearr_11239[(8)] = inst_11150);

(statearr_11239[(9)] = inst_11149);

(statearr_11239[(10)] = inst_11151);

(statearr_11239[(12)] = inst_11148);

return statearr_11239;
})();
var statearr_11241_12246 = state_11201__$1;
(statearr_11241_12246[(2)] = null);

(statearr_11241_12246[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11202 === (3))){
var inst_11199 = (state_11201[(2)]);
var state_11201__$1 = state_11201;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11201__$1,inst_11199);
} else {
if((state_val_11202 === (12))){
var inst_11187 = (state_11201[(2)]);
var state_11201__$1 = state_11201;
var statearr_11245_12247 = state_11201__$1;
(statearr_11245_12247[(2)] = inst_11187);

(statearr_11245_12247[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11202 === (2))){
var state_11201__$1 = state_11201;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11201__$1,(4),in$);
} else {
if((state_val_11202 === (23))){
var inst_11195 = (state_11201[(2)]);
var state_11201__$1 = state_11201;
var statearr_11246_12248 = state_11201__$1;
(statearr_11246_12248[(2)] = inst_11195);

(statearr_11246_12248[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11202 === (19))){
var inst_11181 = (state_11201[(2)]);
var state_11201__$1 = state_11201;
var statearr_11247_12249 = state_11201__$1;
(statearr_11247_12249[(2)] = inst_11181);

(statearr_11247_12249[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11202 === (11))){
var inst_11163 = (state_11201[(7)]);
var inst_11148 = (state_11201[(12)]);
var inst_11163__$1 = cljs.core.seq(inst_11148);
var state_11201__$1 = (function (){var statearr_11248 = state_11201;
(statearr_11248[(7)] = inst_11163__$1);

return statearr_11248;
})();
if(inst_11163__$1){
var statearr_11249_12250 = state_11201__$1;
(statearr_11249_12250[(1)] = (14));

} else {
var statearr_11250_12251 = state_11201__$1;
(statearr_11250_12251[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11202 === (9))){
var inst_11189 = (state_11201[(2)]);
var inst_11190 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_11201__$1 = (function (){var statearr_11251 = state_11201;
(statearr_11251[(15)] = inst_11189);

return statearr_11251;
})();
if(cljs.core.truth_(inst_11190)){
var statearr_11252_12252 = state_11201__$1;
(statearr_11252_12252[(1)] = (21));

} else {
var statearr_11253_12253 = state_11201__$1;
(statearr_11253_12253[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11202 === (5))){
var inst_11140 = cljs.core.async.close_BANG_(out);
var state_11201__$1 = state_11201;
var statearr_11254_12254 = state_11201__$1;
(statearr_11254_12254[(2)] = inst_11140);

(statearr_11254_12254[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11202 === (14))){
var inst_11163 = (state_11201[(7)]);
var inst_11167 = cljs.core.chunked_seq_QMARK_(inst_11163);
var state_11201__$1 = state_11201;
if(inst_11167){
var statearr_11255_12255 = state_11201__$1;
(statearr_11255_12255[(1)] = (17));

} else {
var statearr_11256_12256 = state_11201__$1;
(statearr_11256_12256[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11202 === (16))){
var inst_11184 = (state_11201[(2)]);
var state_11201__$1 = state_11201;
var statearr_11257_12257 = state_11201__$1;
(statearr_11257_12257[(2)] = inst_11184);

(statearr_11257_12257[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11202 === (10))){
var inst_11149 = (state_11201[(9)]);
var inst_11151 = (state_11201[(10)]);
var inst_11156 = cljs.core._nth(inst_11149,inst_11151);
var state_11201__$1 = state_11201;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11201__$1,(13),out,inst_11156);
} else {
if((state_val_11202 === (18))){
var inst_11163 = (state_11201[(7)]);
var inst_11175 = cljs.core.first(inst_11163);
var state_11201__$1 = state_11201;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11201__$1,(20),out,inst_11175);
} else {
if((state_val_11202 === (8))){
var inst_11150 = (state_11201[(8)]);
var inst_11151 = (state_11201[(10)]);
var inst_11153 = (inst_11151 < inst_11150);
var inst_11154 = inst_11153;
var state_11201__$1 = state_11201;
if(cljs.core.truth_(inst_11154)){
var statearr_11268_12258 = state_11201__$1;
(statearr_11268_12258[(1)] = (10));

} else {
var statearr_11269_12259 = state_11201__$1;
(statearr_11269_12259[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__8855__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__8855__auto____0 = (function (){
var statearr_11273 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11273[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__8855__auto__);

(statearr_11273[(1)] = (1));

return statearr_11273;
});
var cljs$core$async$mapcat_STAR__$_state_machine__8855__auto____1 = (function (state_11201){
while(true){
var ret_value__8856__auto__ = (function (){try{while(true){
var result__8857__auto__ = switch__8854__auto__(state_11201);
if(cljs.core.keyword_identical_QMARK_(result__8857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8857__auto__;
}
break;
}
}catch (e11278){var ex__8858__auto__ = e11278;
var statearr_11283_12260 = state_11201;
(statearr_11283_12260[(2)] = ex__8858__auto__);


if(cljs.core.seq((state_11201[(4)]))){
var statearr_11288_12261 = state_11201;
(statearr_11288_12261[(1)] = cljs.core.first((state_11201[(4)])));

} else {
throw ex__8858__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12262 = state_11201;
state_11201 = G__12262;
continue;
} else {
return ret_value__8856__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__8855__auto__ = function(state_11201){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__8855__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__8855__auto____1.call(this,state_11201);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__8855__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__8855__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__8855__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__8855__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__8855__auto__;
})()
})();
var state__9333__auto__ = (function (){var statearr_11289 = f__9332__auto__();
(statearr_11289[(6)] = c__9331__auto__);

return statearr_11289;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__9333__auto__);
}));

return c__9331__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__11294 = arguments.length;
switch (G__11294) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__11297 = arguments.length;
switch (G__11297) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__11299 = arguments.length;
switch (G__11299) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__9331__auto___12266 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__9332__auto__ = (function (){var switch__8854__auto__ = (function (state_11336){
var state_val_11337 = (state_11336[(1)]);
if((state_val_11337 === (7))){
var inst_11331 = (state_11336[(2)]);
var state_11336__$1 = state_11336;
var statearr_11342_12267 = state_11336__$1;
(statearr_11342_12267[(2)] = inst_11331);

(statearr_11342_12267[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11337 === (1))){
var inst_11312 = null;
var state_11336__$1 = (function (){var statearr_11345 = state_11336;
(statearr_11345[(7)] = inst_11312);

return statearr_11345;
})();
var statearr_11346_12268 = state_11336__$1;
(statearr_11346_12268[(2)] = null);

(statearr_11346_12268[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11337 === (4))){
var inst_11315 = (state_11336[(8)]);
var inst_11315__$1 = (state_11336[(2)]);
var inst_11316 = (inst_11315__$1 == null);
var inst_11317 = cljs.core.not(inst_11316);
var state_11336__$1 = (function (){var statearr_11350 = state_11336;
(statearr_11350[(8)] = inst_11315__$1);

return statearr_11350;
})();
if(inst_11317){
var statearr_11351_12269 = state_11336__$1;
(statearr_11351_12269[(1)] = (5));

} else {
var statearr_11352_12270 = state_11336__$1;
(statearr_11352_12270[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11337 === (6))){
var state_11336__$1 = state_11336;
var statearr_11353_12271 = state_11336__$1;
(statearr_11353_12271[(2)] = null);

(statearr_11353_12271[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11337 === (3))){
var inst_11333 = (state_11336[(2)]);
var inst_11334 = cljs.core.async.close_BANG_(out);
var state_11336__$1 = (function (){var statearr_11358 = state_11336;
(statearr_11358[(9)] = inst_11333);

return statearr_11358;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_11336__$1,inst_11334);
} else {
if((state_val_11337 === (2))){
var state_11336__$1 = state_11336;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11336__$1,(4),ch);
} else {
if((state_val_11337 === (11))){
var inst_11315 = (state_11336[(8)]);
var inst_11325 = (state_11336[(2)]);
var inst_11312 = inst_11315;
var state_11336__$1 = (function (){var statearr_11360 = state_11336;
(statearr_11360[(10)] = inst_11325);

(statearr_11360[(7)] = inst_11312);

return statearr_11360;
})();
var statearr_11362_12272 = state_11336__$1;
(statearr_11362_12272[(2)] = null);

(statearr_11362_12272[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11337 === (9))){
var inst_11315 = (state_11336[(8)]);
var state_11336__$1 = state_11336;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11336__$1,(11),out,inst_11315);
} else {
if((state_val_11337 === (5))){
var inst_11312 = (state_11336[(7)]);
var inst_11315 = (state_11336[(8)]);
var inst_11320 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_11315,inst_11312);
var state_11336__$1 = state_11336;
if(inst_11320){
var statearr_11366_12273 = state_11336__$1;
(statearr_11366_12273[(1)] = (8));

} else {
var statearr_11367_12274 = state_11336__$1;
(statearr_11367_12274[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11337 === (10))){
var inst_11328 = (state_11336[(2)]);
var state_11336__$1 = state_11336;
var statearr_11371_12275 = state_11336__$1;
(statearr_11371_12275[(2)] = inst_11328);

(statearr_11371_12275[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11337 === (8))){
var inst_11312 = (state_11336[(7)]);
var tmp11365 = inst_11312;
var inst_11312__$1 = tmp11365;
var state_11336__$1 = (function (){var statearr_11372 = state_11336;
(statearr_11372[(7)] = inst_11312__$1);

return statearr_11372;
})();
var statearr_11373_12276 = state_11336__$1;
(statearr_11373_12276[(2)] = null);

(statearr_11373_12276[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__8855__auto__ = null;
var cljs$core$async$state_machine__8855__auto____0 = (function (){
var statearr_11377 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11377[(0)] = cljs$core$async$state_machine__8855__auto__);

(statearr_11377[(1)] = (1));

return statearr_11377;
});
var cljs$core$async$state_machine__8855__auto____1 = (function (state_11336){
while(true){
var ret_value__8856__auto__ = (function (){try{while(true){
var result__8857__auto__ = switch__8854__auto__(state_11336);
if(cljs.core.keyword_identical_QMARK_(result__8857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8857__auto__;
}
break;
}
}catch (e11378){var ex__8858__auto__ = e11378;
var statearr_11379_12277 = state_11336;
(statearr_11379_12277[(2)] = ex__8858__auto__);


if(cljs.core.seq((state_11336[(4)]))){
var statearr_11380_12278 = state_11336;
(statearr_11380_12278[(1)] = cljs.core.first((state_11336[(4)])));

} else {
throw ex__8858__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12279 = state_11336;
state_11336 = G__12279;
continue;
} else {
return ret_value__8856__auto__;
}
break;
}
});
cljs$core$async$state_machine__8855__auto__ = function(state_11336){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8855__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8855__auto____1.call(this,state_11336);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8855__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8855__auto____0;
cljs$core$async$state_machine__8855__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8855__auto____1;
return cljs$core$async$state_machine__8855__auto__;
})()
})();
var state__9333__auto__ = (function (){var statearr_11381 = f__9332__auto__();
(statearr_11381[(6)] = c__9331__auto___12266);

return statearr_11381;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__9333__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__11392 = arguments.length;
switch (G__11392) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__9331__auto___12281 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__9332__auto__ = (function (){var switch__8854__auto__ = (function (state_11430){
var state_val_11431 = (state_11430[(1)]);
if((state_val_11431 === (7))){
var inst_11426 = (state_11430[(2)]);
var state_11430__$1 = state_11430;
var statearr_11432_12282 = state_11430__$1;
(statearr_11432_12282[(2)] = inst_11426);

(statearr_11432_12282[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11431 === (1))){
var inst_11393 = (new Array(n));
var inst_11394 = inst_11393;
var inst_11395 = (0);
var state_11430__$1 = (function (){var statearr_11433 = state_11430;
(statearr_11433[(7)] = inst_11394);

(statearr_11433[(8)] = inst_11395);

return statearr_11433;
})();
var statearr_11434_12283 = state_11430__$1;
(statearr_11434_12283[(2)] = null);

(statearr_11434_12283[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11431 === (4))){
var inst_11398 = (state_11430[(9)]);
var inst_11398__$1 = (state_11430[(2)]);
var inst_11399 = (inst_11398__$1 == null);
var inst_11400 = cljs.core.not(inst_11399);
var state_11430__$1 = (function (){var statearr_11435 = state_11430;
(statearr_11435[(9)] = inst_11398__$1);

return statearr_11435;
})();
if(inst_11400){
var statearr_11436_12284 = state_11430__$1;
(statearr_11436_12284[(1)] = (5));

} else {
var statearr_11437_12285 = state_11430__$1;
(statearr_11437_12285[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11431 === (15))){
var inst_11420 = (state_11430[(2)]);
var state_11430__$1 = state_11430;
var statearr_11438_12286 = state_11430__$1;
(statearr_11438_12286[(2)] = inst_11420);

(statearr_11438_12286[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11431 === (13))){
var state_11430__$1 = state_11430;
var statearr_11439_12287 = state_11430__$1;
(statearr_11439_12287[(2)] = null);

(statearr_11439_12287[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11431 === (6))){
var inst_11395 = (state_11430[(8)]);
var inst_11416 = (inst_11395 > (0));
var state_11430__$1 = state_11430;
if(cljs.core.truth_(inst_11416)){
var statearr_11440_12288 = state_11430__$1;
(statearr_11440_12288[(1)] = (12));

} else {
var statearr_11441_12289 = state_11430__$1;
(statearr_11441_12289[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11431 === (3))){
var inst_11428 = (state_11430[(2)]);
var state_11430__$1 = state_11430;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11430__$1,inst_11428);
} else {
if((state_val_11431 === (12))){
var inst_11394 = (state_11430[(7)]);
var inst_11418 = cljs.core.vec(inst_11394);
var state_11430__$1 = state_11430;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11430__$1,(15),out,inst_11418);
} else {
if((state_val_11431 === (2))){
var state_11430__$1 = state_11430;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11430__$1,(4),ch);
} else {
if((state_val_11431 === (11))){
var inst_11410 = (state_11430[(2)]);
var inst_11411 = (new Array(n));
var inst_11394 = inst_11411;
var inst_11395 = (0);
var state_11430__$1 = (function (){var statearr_11442 = state_11430;
(statearr_11442[(10)] = inst_11410);

(statearr_11442[(7)] = inst_11394);

(statearr_11442[(8)] = inst_11395);

return statearr_11442;
})();
var statearr_11443_12290 = state_11430__$1;
(statearr_11443_12290[(2)] = null);

(statearr_11443_12290[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11431 === (9))){
var inst_11394 = (state_11430[(7)]);
var inst_11408 = cljs.core.vec(inst_11394);
var state_11430__$1 = state_11430;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11430__$1,(11),out,inst_11408);
} else {
if((state_val_11431 === (5))){
var inst_11398 = (state_11430[(9)]);
var inst_11394 = (state_11430[(7)]);
var inst_11403 = (state_11430[(11)]);
var inst_11395 = (state_11430[(8)]);
var inst_11402 = (inst_11394[inst_11395] = inst_11398);
var inst_11403__$1 = (inst_11395 + (1));
var inst_11404 = (inst_11403__$1 < n);
var state_11430__$1 = (function (){var statearr_11444 = state_11430;
(statearr_11444[(12)] = inst_11402);

(statearr_11444[(11)] = inst_11403__$1);

return statearr_11444;
})();
if(cljs.core.truth_(inst_11404)){
var statearr_11445_12291 = state_11430__$1;
(statearr_11445_12291[(1)] = (8));

} else {
var statearr_11446_12292 = state_11430__$1;
(statearr_11446_12292[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11431 === (14))){
var inst_11423 = (state_11430[(2)]);
var inst_11424 = cljs.core.async.close_BANG_(out);
var state_11430__$1 = (function (){var statearr_11448 = state_11430;
(statearr_11448[(13)] = inst_11423);

return statearr_11448;
})();
var statearr_11449_12293 = state_11430__$1;
(statearr_11449_12293[(2)] = inst_11424);

(statearr_11449_12293[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11431 === (10))){
var inst_11414 = (state_11430[(2)]);
var state_11430__$1 = state_11430;
var statearr_11450_12294 = state_11430__$1;
(statearr_11450_12294[(2)] = inst_11414);

(statearr_11450_12294[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11431 === (8))){
var inst_11394 = (state_11430[(7)]);
var inst_11403 = (state_11430[(11)]);
var tmp11447 = inst_11394;
var inst_11394__$1 = tmp11447;
var inst_11395 = inst_11403;
var state_11430__$1 = (function (){var statearr_11451 = state_11430;
(statearr_11451[(7)] = inst_11394__$1);

(statearr_11451[(8)] = inst_11395);

return statearr_11451;
})();
var statearr_11452_12295 = state_11430__$1;
(statearr_11452_12295[(2)] = null);

(statearr_11452_12295[(1)] = (2));


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
}
});
return (function() {
var cljs$core$async$state_machine__8855__auto__ = null;
var cljs$core$async$state_machine__8855__auto____0 = (function (){
var statearr_11453 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11453[(0)] = cljs$core$async$state_machine__8855__auto__);

(statearr_11453[(1)] = (1));

return statearr_11453;
});
var cljs$core$async$state_machine__8855__auto____1 = (function (state_11430){
while(true){
var ret_value__8856__auto__ = (function (){try{while(true){
var result__8857__auto__ = switch__8854__auto__(state_11430);
if(cljs.core.keyword_identical_QMARK_(result__8857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8857__auto__;
}
break;
}
}catch (e11454){var ex__8858__auto__ = e11454;
var statearr_11455_12296 = state_11430;
(statearr_11455_12296[(2)] = ex__8858__auto__);


if(cljs.core.seq((state_11430[(4)]))){
var statearr_11456_12297 = state_11430;
(statearr_11456_12297[(1)] = cljs.core.first((state_11430[(4)])));

} else {
throw ex__8858__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12298 = state_11430;
state_11430 = G__12298;
continue;
} else {
return ret_value__8856__auto__;
}
break;
}
});
cljs$core$async$state_machine__8855__auto__ = function(state_11430){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8855__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8855__auto____1.call(this,state_11430);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8855__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8855__auto____0;
cljs$core$async$state_machine__8855__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8855__auto____1;
return cljs$core$async$state_machine__8855__auto__;
})()
})();
var state__9333__auto__ = (function (){var statearr_11457 = f__9332__auto__();
(statearr_11457[(6)] = c__9331__auto___12281);

return statearr_11457;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__9333__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__11459 = arguments.length;
switch (G__11459) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__9331__auto___12300 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__9332__auto__ = (function (){var switch__8854__auto__ = (function (state_11504){
var state_val_11505 = (state_11504[(1)]);
if((state_val_11505 === (7))){
var inst_11500 = (state_11504[(2)]);
var state_11504__$1 = state_11504;
var statearr_11506_12301 = state_11504__$1;
(statearr_11506_12301[(2)] = inst_11500);

(statearr_11506_12301[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11505 === (1))){
var inst_11460 = [];
var inst_11461 = inst_11460;
var inst_11462 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_11504__$1 = (function (){var statearr_11508 = state_11504;
(statearr_11508[(7)] = inst_11462);

(statearr_11508[(8)] = inst_11461);

return statearr_11508;
})();
var statearr_11510_12302 = state_11504__$1;
(statearr_11510_12302[(2)] = null);

(statearr_11510_12302[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11505 === (4))){
var inst_11465 = (state_11504[(9)]);
var inst_11465__$1 = (state_11504[(2)]);
var inst_11466 = (inst_11465__$1 == null);
var inst_11467 = cljs.core.not(inst_11466);
var state_11504__$1 = (function (){var statearr_11512 = state_11504;
(statearr_11512[(9)] = inst_11465__$1);

return statearr_11512;
})();
if(inst_11467){
var statearr_11513_12303 = state_11504__$1;
(statearr_11513_12303[(1)] = (5));

} else {
var statearr_11514_12304 = state_11504__$1;
(statearr_11514_12304[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11505 === (15))){
var inst_11461 = (state_11504[(8)]);
var inst_11492 = cljs.core.vec(inst_11461);
var state_11504__$1 = state_11504;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11504__$1,(18),out,inst_11492);
} else {
if((state_val_11505 === (13))){
var inst_11487 = (state_11504[(2)]);
var state_11504__$1 = state_11504;
var statearr_11515_12305 = state_11504__$1;
(statearr_11515_12305[(2)] = inst_11487);

(statearr_11515_12305[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11505 === (6))){
var inst_11461 = (state_11504[(8)]);
var inst_11489 = inst_11461.length;
var inst_11490 = (inst_11489 > (0));
var state_11504__$1 = state_11504;
if(cljs.core.truth_(inst_11490)){
var statearr_11517_12306 = state_11504__$1;
(statearr_11517_12306[(1)] = (15));

} else {
var statearr_11518_12307 = state_11504__$1;
(statearr_11518_12307[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11505 === (17))){
var inst_11497 = (state_11504[(2)]);
var inst_11498 = cljs.core.async.close_BANG_(out);
var state_11504__$1 = (function (){var statearr_11519 = state_11504;
(statearr_11519[(10)] = inst_11497);

return statearr_11519;
})();
var statearr_11520_12308 = state_11504__$1;
(statearr_11520_12308[(2)] = inst_11498);

(statearr_11520_12308[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11505 === (3))){
var inst_11502 = (state_11504[(2)]);
var state_11504__$1 = state_11504;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11504__$1,inst_11502);
} else {
if((state_val_11505 === (12))){
var inst_11461 = (state_11504[(8)]);
var inst_11480 = cljs.core.vec(inst_11461);
var state_11504__$1 = state_11504;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11504__$1,(14),out,inst_11480);
} else {
if((state_val_11505 === (2))){
var state_11504__$1 = state_11504;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11504__$1,(4),ch);
} else {
if((state_val_11505 === (11))){
var inst_11469 = (state_11504[(11)]);
var inst_11465 = (state_11504[(9)]);
var inst_11461 = (state_11504[(8)]);
var inst_11477 = inst_11461.push(inst_11465);
var tmp11521 = inst_11461;
var inst_11461__$1 = tmp11521;
var inst_11462 = inst_11469;
var state_11504__$1 = (function (){var statearr_11522 = state_11504;
(statearr_11522[(7)] = inst_11462);

(statearr_11522[(12)] = inst_11477);

(statearr_11522[(8)] = inst_11461__$1);

return statearr_11522;
})();
var statearr_11523_12309 = state_11504__$1;
(statearr_11523_12309[(2)] = null);

(statearr_11523_12309[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11505 === (9))){
var inst_11462 = (state_11504[(7)]);
var inst_11473 = cljs.core.keyword_identical_QMARK_(inst_11462,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_11504__$1 = state_11504;
var statearr_11524_12310 = state_11504__$1;
(statearr_11524_12310[(2)] = inst_11473);

(statearr_11524_12310[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11505 === (5))){
var inst_11469 = (state_11504[(11)]);
var inst_11462 = (state_11504[(7)]);
var inst_11470 = (state_11504[(13)]);
var inst_11465 = (state_11504[(9)]);
var inst_11469__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_11465) : f.call(null,inst_11465));
var inst_11470__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_11469__$1,inst_11462);
var state_11504__$1 = (function (){var statearr_11526 = state_11504;
(statearr_11526[(11)] = inst_11469__$1);

(statearr_11526[(13)] = inst_11470__$1);

return statearr_11526;
})();
if(inst_11470__$1){
var statearr_11527_12311 = state_11504__$1;
(statearr_11527_12311[(1)] = (8));

} else {
var statearr_11528_12312 = state_11504__$1;
(statearr_11528_12312[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11505 === (14))){
var inst_11469 = (state_11504[(11)]);
var inst_11465 = (state_11504[(9)]);
var inst_11482 = (state_11504[(2)]);
var inst_11483 = [];
var inst_11484 = inst_11483.push(inst_11465);
var inst_11461 = inst_11483;
var inst_11462 = inst_11469;
var state_11504__$1 = (function (){var statearr_11530 = state_11504;
(statearr_11530[(7)] = inst_11462);

(statearr_11530[(14)] = inst_11484);

(statearr_11530[(15)] = inst_11482);

(statearr_11530[(8)] = inst_11461);

return statearr_11530;
})();
var statearr_11532_12313 = state_11504__$1;
(statearr_11532_12313[(2)] = null);

(statearr_11532_12313[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11505 === (16))){
var state_11504__$1 = state_11504;
var statearr_11533_12314 = state_11504__$1;
(statearr_11533_12314[(2)] = null);

(statearr_11533_12314[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11505 === (10))){
var inst_11475 = (state_11504[(2)]);
var state_11504__$1 = state_11504;
if(cljs.core.truth_(inst_11475)){
var statearr_11534_12315 = state_11504__$1;
(statearr_11534_12315[(1)] = (11));

} else {
var statearr_11535_12316 = state_11504__$1;
(statearr_11535_12316[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11505 === (18))){
var inst_11494 = (state_11504[(2)]);
var state_11504__$1 = state_11504;
var statearr_11536_12317 = state_11504__$1;
(statearr_11536_12317[(2)] = inst_11494);

(statearr_11536_12317[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11505 === (8))){
var inst_11470 = (state_11504[(13)]);
var state_11504__$1 = state_11504;
var statearr_11538_12318 = state_11504__$1;
(statearr_11538_12318[(2)] = inst_11470);

(statearr_11538_12318[(1)] = (10));


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
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__8855__auto__ = null;
var cljs$core$async$state_machine__8855__auto____0 = (function (){
var statearr_11540 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11540[(0)] = cljs$core$async$state_machine__8855__auto__);

(statearr_11540[(1)] = (1));

return statearr_11540;
});
var cljs$core$async$state_machine__8855__auto____1 = (function (state_11504){
while(true){
var ret_value__8856__auto__ = (function (){try{while(true){
var result__8857__auto__ = switch__8854__auto__(state_11504);
if(cljs.core.keyword_identical_QMARK_(result__8857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8857__auto__;
}
break;
}
}catch (e11542){var ex__8858__auto__ = e11542;
var statearr_11543_12319 = state_11504;
(statearr_11543_12319[(2)] = ex__8858__auto__);


if(cljs.core.seq((state_11504[(4)]))){
var statearr_11544_12320 = state_11504;
(statearr_11544_12320[(1)] = cljs.core.first((state_11504[(4)])));

} else {
throw ex__8858__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12321 = state_11504;
state_11504 = G__12321;
continue;
} else {
return ret_value__8856__auto__;
}
break;
}
});
cljs$core$async$state_machine__8855__auto__ = function(state_11504){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8855__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8855__auto____1.call(this,state_11504);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8855__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8855__auto____0;
cljs$core$async$state_machine__8855__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8855__auto____1;
return cljs$core$async$state_machine__8855__auto__;
})()
})();
var state__9333__auto__ = (function (){var statearr_11546 = f__9332__auto__();
(statearr_11546[(6)] = c__9331__auto___12300);

return statearr_11546;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__9333__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
