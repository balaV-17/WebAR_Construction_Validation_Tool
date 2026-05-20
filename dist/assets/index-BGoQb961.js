(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}})();var lh={exports:{}},bl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var iv;function $b(){if(iv)return bl;iv=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function n(a,o,c){var u=null;if(c!==void 0&&(u=""+c),o.key!==void 0&&(u=""+o.key),"key"in o){c={};for(var h in o)h!=="key"&&(c[h]=o[h])}else c=o;return o=c.ref,{$$typeof:r,type:a,key:u,ref:o!==void 0?o:null,props:c}}return bl.Fragment=e,bl.jsx=n,bl.jsxs=n,bl}var av;function eM(){return av||(av=1,lh.exports=$b()),lh.exports}var ct=eM(),ch={exports:{}},rt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sv;function tM(){if(sv)return rt;sv=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),u=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),v=Symbol.iterator;function x(O){return O===null||typeof O!="object"?null:(O=v&&O[v]||O["@@iterator"],typeof O=="function"?O:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A=Object.assign,S={};function y(O,K,ge){this.props=O,this.context=K,this.refs=S,this.updater=ge||M}y.prototype.isReactComponent={},y.prototype.setState=function(O,K){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,K,"setState")},y.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function C(){}C.prototype=y.prototype;function L(O,K,ge){this.props=O,this.context=K,this.refs=S,this.updater=ge||M}var U=L.prototype=new C;U.constructor=L,A(U,y.prototype),U.isPureReactComponent=!0;var F=Array.isArray;function D(){}var I={H:null,A:null,T:null,S:null},E=Object.prototype.hasOwnProperty;function B(O,K,ge){var ye=ge.ref;return{$$typeof:r,type:O,key:K,ref:ye!==void 0?ye:null,props:ge}}function j(O,K){return B(O.type,K,O.props)}function H(O){return typeof O=="object"&&O!==null&&O.$$typeof===r}function W(O){var K={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(ge){return K[ge]})}var ce=/\/+/g;function fe(O,K){return typeof O=="object"&&O!==null&&O.key!=null?W(""+O.key):K.toString(36)}function X(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(D,D):(O.status="pending",O.then(function(K){O.status==="pending"&&(O.status="fulfilled",O.value=K)},function(K){O.status==="pending"&&(O.status="rejected",O.reason=K)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function P(O,K,ge,ye,be){var ee=typeof O;(ee==="undefined"||ee==="boolean")&&(O=null);var Se=!1;if(O===null)Se=!0;else switch(ee){case"bigint":case"string":case"number":Se=!0;break;case"object":switch(O.$$typeof){case r:case e:Se=!0;break;case g:return Se=O._init,P(Se(O._payload),K,ge,ye,be)}}if(Se)return be=be(O),Se=ye===""?"."+fe(O,0):ye,F(be)?(ge="",Se!=null&&(ge=Se.replace(ce,"$&/")+"/"),P(be,K,ge,"",function(et){return et})):be!=null&&(H(be)&&(be=j(be,ge+(be.key==null||O&&O.key===be.key?"":(""+be.key).replace(ce,"$&/")+"/")+Se)),K.push(be)),1;Se=0;var Te=ye===""?".":ye+":";if(F(O))for(var Re=0;Re<O.length;Re++)ye=O[Re],ee=Te+fe(ye,Re),Se+=P(ye,K,ge,ee,be);else if(Re=x(O),typeof Re=="function")for(O=Re.call(O),Re=0;!(ye=O.next()).done;)ye=ye.value,ee=Te+fe(ye,Re++),Se+=P(ye,K,ge,ee,be);else if(ee==="object"){if(typeof O.then=="function")return P(X(O),K,ge,ye,be);throw K=String(O),Error("Objects are not valid as a React child (found: "+(K==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":K)+"). If you meant to render a collection of children, use an array instead.")}return Se}function z(O,K,ge){if(O==null)return O;var ye=[],be=0;return P(O,ye,"","",function(ee){return K.call(ge,ee,be++)}),ye}function oe(O){if(O._status===-1){var K=O._result;K=K(),K.then(function(ge){(O._status===0||O._status===-1)&&(O._status=1,O._result=ge)},function(ge){(O._status===0||O._status===-1)&&(O._status=2,O._result=ge)}),O._status===-1&&(O._status=0,O._result=K)}if(O._status===1)return O._result.default;throw O._result}var pe=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var K=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent(K))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)},Q={map:z,forEach:function(O,K,ge){z(O,function(){K.apply(this,arguments)},ge)},count:function(O){var K=0;return z(O,function(){K++}),K},toArray:function(O){return z(O,function(K){return K})||[]},only:function(O){if(!H(O))throw Error("React.Children.only expected to receive a single React element child.");return O}};return rt.Activity=_,rt.Children=Q,rt.Component=y,rt.Fragment=n,rt.Profiler=o,rt.PureComponent=L,rt.StrictMode=a,rt.Suspense=p,rt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=I,rt.__COMPILER_RUNTIME={__proto__:null,c:function(O){return I.H.useMemoCache(O)}},rt.cache=function(O){return function(){return O.apply(null,arguments)}},rt.cacheSignal=function(){return null},rt.cloneElement=function(O,K,ge){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var ye=A({},O.props),be=O.key;if(K!=null)for(ee in K.key!==void 0&&(be=""+K.key),K)!E.call(K,ee)||ee==="key"||ee==="__self"||ee==="__source"||ee==="ref"&&K.ref===void 0||(ye[ee]=K[ee]);var ee=arguments.length-2;if(ee===1)ye.children=ge;else if(1<ee){for(var Se=Array(ee),Te=0;Te<ee;Te++)Se[Te]=arguments[Te+2];ye.children=Se}return B(O.type,be,ye)},rt.createContext=function(O){return O={$$typeof:u,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:c,_context:O},O},rt.createElement=function(O,K,ge){var ye,be={},ee=null;if(K!=null)for(ye in K.key!==void 0&&(ee=""+K.key),K)E.call(K,ye)&&ye!=="key"&&ye!=="__self"&&ye!=="__source"&&(be[ye]=K[ye]);var Se=arguments.length-2;if(Se===1)be.children=ge;else if(1<Se){for(var Te=Array(Se),Re=0;Re<Se;Re++)Te[Re]=arguments[Re+2];be.children=Te}if(O&&O.defaultProps)for(ye in Se=O.defaultProps,Se)be[ye]===void 0&&(be[ye]=Se[ye]);return B(O,ee,be)},rt.createRef=function(){return{current:null}},rt.forwardRef=function(O){return{$$typeof:h,render:O}},rt.isValidElement=H,rt.lazy=function(O){return{$$typeof:g,_payload:{_status:-1,_result:O},_init:oe}},rt.memo=function(O,K){return{$$typeof:d,type:O,compare:K===void 0?null:K}},rt.startTransition=function(O){var K=I.T,ge={};I.T=ge;try{var ye=O(),be=I.S;be!==null&&be(ge,ye),typeof ye=="object"&&ye!==null&&typeof ye.then=="function"&&ye.then(D,pe)}catch(ee){pe(ee)}finally{K!==null&&ge.types!==null&&(K.types=ge.types),I.T=K}},rt.unstable_useCacheRefresh=function(){return I.H.useCacheRefresh()},rt.use=function(O){return I.H.use(O)},rt.useActionState=function(O,K,ge){return I.H.useActionState(O,K,ge)},rt.useCallback=function(O,K){return I.H.useCallback(O,K)},rt.useContext=function(O){return I.H.useContext(O)},rt.useDebugValue=function(){},rt.useDeferredValue=function(O,K){return I.H.useDeferredValue(O,K)},rt.useEffect=function(O,K){return I.H.useEffect(O,K)},rt.useEffectEvent=function(O){return I.H.useEffectEvent(O)},rt.useId=function(){return I.H.useId()},rt.useImperativeHandle=function(O,K,ge){return I.H.useImperativeHandle(O,K,ge)},rt.useInsertionEffect=function(O,K){return I.H.useInsertionEffect(O,K)},rt.useLayoutEffect=function(O,K){return I.H.useLayoutEffect(O,K)},rt.useMemo=function(O,K){return I.H.useMemo(O,K)},rt.useOptimistic=function(O,K){return I.H.useOptimistic(O,K)},rt.useReducer=function(O,K,ge){return I.H.useReducer(O,K,ge)},rt.useRef=function(O){return I.H.useRef(O)},rt.useState=function(O){return I.H.useState(O)},rt.useSyncExternalStore=function(O,K,ge){return I.H.useSyncExternalStore(O,K,ge)},rt.useTransition=function(){return I.H.useTransition()},rt.version="19.2.6",rt}var rv;function Zp(){return rv||(rv=1,ch.exports=tM()),ch.exports}var _n=Zp(),uh={exports:{}},Ml={},fh={exports:{}},dh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ov;function nM(){return ov||(ov=1,(function(r){function e(P,z){var oe=P.length;P.push(z);e:for(;0<oe;){var pe=oe-1>>>1,Q=P[pe];if(0<o(Q,z))P[pe]=z,P[oe]=Q,oe=pe;else break e}}function n(P){return P.length===0?null:P[0]}function a(P){if(P.length===0)return null;var z=P[0],oe=P.pop();if(oe!==z){P[0]=oe;e:for(var pe=0,Q=P.length,O=Q>>>1;pe<O;){var K=2*(pe+1)-1,ge=P[K],ye=K+1,be=P[ye];if(0>o(ge,oe))ye<Q&&0>o(be,ge)?(P[pe]=be,P[ye]=oe,pe=ye):(P[pe]=ge,P[K]=oe,pe=K);else if(ye<Q&&0>o(be,oe))P[pe]=be,P[ye]=oe,pe=ye;else break e}}return z}function o(P,z){var oe=P.sortIndex-z.sortIndex;return oe!==0?oe:P.id-z.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var u=Date,h=u.now();r.unstable_now=function(){return u.now()-h}}var p=[],d=[],g=1,_=null,v=3,x=!1,M=!1,A=!1,S=!1,y=typeof setTimeout=="function"?setTimeout:null,C=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function U(P){for(var z=n(d);z!==null;){if(z.callback===null)a(d);else if(z.startTime<=P)a(d),z.sortIndex=z.expirationTime,e(p,z);else break;z=n(d)}}function F(P){if(A=!1,U(P),!M)if(n(p)!==null)M=!0,D||(D=!0,W());else{var z=n(d);z!==null&&X(F,z.startTime-P)}}var D=!1,I=-1,E=5,B=-1;function j(){return S?!0:!(r.unstable_now()-B<E)}function H(){if(S=!1,D){var P=r.unstable_now();B=P;var z=!0;try{e:{M=!1,A&&(A=!1,C(I),I=-1),x=!0;var oe=v;try{t:{for(U(P),_=n(p);_!==null&&!(_.expirationTime>P&&j());){var pe=_.callback;if(typeof pe=="function"){_.callback=null,v=_.priorityLevel;var Q=pe(_.expirationTime<=P);if(P=r.unstable_now(),typeof Q=="function"){_.callback=Q,U(P),z=!0;break t}_===n(p)&&a(p),U(P)}else a(p);_=n(p)}if(_!==null)z=!0;else{var O=n(d);O!==null&&X(F,O.startTime-P),z=!1}}break e}finally{_=null,v=oe,x=!1}z=void 0}}finally{z?W():D=!1}}}var W;if(typeof L=="function")W=function(){L(H)};else if(typeof MessageChannel<"u"){var ce=new MessageChannel,fe=ce.port2;ce.port1.onmessage=H,W=function(){fe.postMessage(null)}}else W=function(){y(H,0)};function X(P,z){I=y(function(){P(r.unstable_now())},z)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(P){P.callback=null},r.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<P?Math.floor(1e3/P):5},r.unstable_getCurrentPriorityLevel=function(){return v},r.unstable_next=function(P){switch(v){case 1:case 2:case 3:var z=3;break;default:z=v}var oe=v;v=z;try{return P()}finally{v=oe}},r.unstable_requestPaint=function(){S=!0},r.unstable_runWithPriority=function(P,z){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var oe=v;v=P;try{return z()}finally{v=oe}},r.unstable_scheduleCallback=function(P,z,oe){var pe=r.unstable_now();switch(typeof oe=="object"&&oe!==null?(oe=oe.delay,oe=typeof oe=="number"&&0<oe?pe+oe:pe):oe=pe,P){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=oe+Q,P={id:g++,callback:z,priorityLevel:P,startTime:oe,expirationTime:Q,sortIndex:-1},oe>pe?(P.sortIndex=oe,e(d,P),n(p)===null&&P===n(d)&&(A?(C(I),I=-1):A=!0,X(F,oe-pe))):(P.sortIndex=Q,e(p,P),M||x||(M=!0,D||(D=!0,W()))),P},r.unstable_shouldYield=j,r.unstable_wrapCallback=function(P){var z=v;return function(){var oe=v;v=z;try{return P.apply(this,arguments)}finally{v=oe}}}})(dh)),dh}var lv;function iM(){return lv||(lv=1,fh.exports=nM()),fh.exports}var hh={exports:{}},Xn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cv;function aM(){if(cv)return Xn;cv=1;var r=Zp();function e(p){var d="https://react.dev/errors/"+p;if(1<arguments.length){d+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)d+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+p+"; visit "+d+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var a={d:{f:n,r:function(){throw Error(e(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function c(p,d,g){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:_==null?null:""+_,children:p,containerInfo:d,implementation:g}}var u=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(p,d){if(p==="font")return"";if(typeof d=="string")return d==="use-credentials"?d:""}return Xn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,Xn.createPortal=function(p,d){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!d||d.nodeType!==1&&d.nodeType!==9&&d.nodeType!==11)throw Error(e(299));return c(p,d,null,g)},Xn.flushSync=function(p){var d=u.T,g=a.p;try{if(u.T=null,a.p=2,p)return p()}finally{u.T=d,a.p=g,a.d.f()}},Xn.preconnect=function(p,d){typeof p=="string"&&(d?(d=d.crossOrigin,d=typeof d=="string"?d==="use-credentials"?d:"":void 0):d=null,a.d.C(p,d))},Xn.prefetchDNS=function(p){typeof p=="string"&&a.d.D(p)},Xn.preinit=function(p,d){if(typeof p=="string"&&d&&typeof d.as=="string"){var g=d.as,_=h(g,d.crossOrigin),v=typeof d.integrity=="string"?d.integrity:void 0,x=typeof d.fetchPriority=="string"?d.fetchPriority:void 0;g==="style"?a.d.S(p,typeof d.precedence=="string"?d.precedence:void 0,{crossOrigin:_,integrity:v,fetchPriority:x}):g==="script"&&a.d.X(p,{crossOrigin:_,integrity:v,fetchPriority:x,nonce:typeof d.nonce=="string"?d.nonce:void 0})}},Xn.preinitModule=function(p,d){if(typeof p=="string")if(typeof d=="object"&&d!==null){if(d.as==null||d.as==="script"){var g=h(d.as,d.crossOrigin);a.d.M(p,{crossOrigin:g,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0})}}else d==null&&a.d.M(p)},Xn.preload=function(p,d){if(typeof p=="string"&&typeof d=="object"&&d!==null&&typeof d.as=="string"){var g=d.as,_=h(g,d.crossOrigin);a.d.L(p,g,{crossOrigin:_,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0,type:typeof d.type=="string"?d.type:void 0,fetchPriority:typeof d.fetchPriority=="string"?d.fetchPriority:void 0,referrerPolicy:typeof d.referrerPolicy=="string"?d.referrerPolicy:void 0,imageSrcSet:typeof d.imageSrcSet=="string"?d.imageSrcSet:void 0,imageSizes:typeof d.imageSizes=="string"?d.imageSizes:void 0,media:typeof d.media=="string"?d.media:void 0})}},Xn.preloadModule=function(p,d){if(typeof p=="string")if(d){var g=h(d.as,d.crossOrigin);a.d.m(p,{as:typeof d.as=="string"&&d.as!=="script"?d.as:void 0,crossOrigin:g,integrity:typeof d.integrity=="string"?d.integrity:void 0})}else a.d.m(p)},Xn.requestFormReset=function(p){a.d.r(p)},Xn.unstable_batchedUpdates=function(p,d){return p(d)},Xn.useFormState=function(p,d,g){return u.H.useFormState(p,d,g)},Xn.useFormStatus=function(){return u.H.useHostTransitionStatus()},Xn.version="19.2.6",Xn}var uv;function sM(){if(uv)return hh.exports;uv=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),hh.exports=aM(),hh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fv;function rM(){if(fv)return Ml;fv=1;var r=iM(),e=Zp(),n=sM();function a(t){var i="https://react.dev/errors/"+t;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var i=t,s=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(s=i.return),t=i.return;while(t)}return i.tag===3?s:null}function u(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function h(t){if(t.tag===31){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function p(t){if(c(t)!==t)throw Error(a(188))}function d(t){var i=t.alternate;if(!i){if(i=c(t),i===null)throw Error(a(188));return i!==t?null:t}for(var s=t,l=i;;){var f=s.return;if(f===null)break;var m=f.alternate;if(m===null){if(l=f.return,l!==null){s=l;continue}break}if(f.child===m.child){for(m=f.child;m;){if(m===s)return p(f),t;if(m===l)return p(f),i;m=m.sibling}throw Error(a(188))}if(s.return!==l.return)s=f,l=m;else{for(var b=!1,w=f.child;w;){if(w===s){b=!0,s=f,l=m;break}if(w===l){b=!0,l=f,s=m;break}w=w.sibling}if(!b){for(w=m.child;w;){if(w===s){b=!0,s=m,l=f;break}if(w===l){b=!0,l=m,s=f;break}w=w.sibling}if(!b)throw Error(a(189))}}if(s.alternate!==l)throw Error(a(190))}if(s.tag!==3)throw Error(a(188));return s.stateNode.current===s?t:i}function g(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t;for(t=t.child;t!==null;){if(i=g(t),i!==null)return i;t=t.sibling}return null}var _=Object.assign,v=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),M=Symbol.for("react.portal"),A=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),C=Symbol.for("react.consumer"),L=Symbol.for("react.context"),U=Symbol.for("react.forward_ref"),F=Symbol.for("react.suspense"),D=Symbol.for("react.suspense_list"),I=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),B=Symbol.for("react.activity"),j=Symbol.for("react.memo_cache_sentinel"),H=Symbol.iterator;function W(t){return t===null||typeof t!="object"?null:(t=H&&t[H]||t["@@iterator"],typeof t=="function"?t:null)}var ce=Symbol.for("react.client.reference");function fe(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===ce?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case A:return"Fragment";case y:return"Profiler";case S:return"StrictMode";case F:return"Suspense";case D:return"SuspenseList";case B:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case M:return"Portal";case L:return t.displayName||"Context";case C:return(t._context.displayName||"Context")+".Consumer";case U:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case I:return i=t.displayName||null,i!==null?i:fe(t.type)||"Memo";case E:i=t._payload,t=t._init;try{return fe(t(i))}catch{}}return null}var X=Array.isArray,P=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,z=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,oe={pending:!1,data:null,method:null,action:null},pe=[],Q=-1;function O(t){return{current:t}}function K(t){0>Q||(t.current=pe[Q],pe[Q]=null,Q--)}function ge(t,i){Q++,pe[Q]=t.current,t.current=i}var ye=O(null),be=O(null),ee=O(null),Se=O(null);function Te(t,i){switch(ge(ee,i),ge(be,t),ge(ye,null),i.nodeType){case 9:case 11:t=(t=i.documentElement)&&(t=t.namespaceURI)?A_(t):0;break;default:if(t=i.tagName,i=i.namespaceURI)i=A_(i),t=R_(i,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}K(ye),ge(ye,t)}function Re(){K(ye),K(be),K(ee)}function et(t){t.memoizedState!==null&&ge(Se,t);var i=ye.current,s=R_(i,t.type);i!==s&&(ge(be,t),ge(ye,s))}function Ze(t){be.current===t&&(K(ye),K(be)),Se.current===t&&(K(Se),vl._currentValue=oe)}var Nt,lt;function ht(t){if(Nt===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);Nt=i&&i[1]||"",lt=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Nt+t+lt}var Ft=!1;function pt(t,i){if(!t||Ft)return"";Ft=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var xe=function(){throw Error()};if(Object.defineProperty(xe.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(xe,[])}catch(le){var re=le}Reflect.construct(t,[],xe)}else{try{xe.call()}catch(le){re=le}t.call(xe.prototype)}}else{try{throw Error()}catch(le){re=le}(xe=t())&&typeof xe.catch=="function"&&xe.catch(function(){})}}catch(le){if(le&&re&&typeof le.stack=="string")return[le.stack,re.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=l.DetermineComponentFrameRoot(),b=m[0],w=m[1];if(b&&w){var G=b.split(`
`),ne=w.split(`
`);for(f=l=0;l<G.length&&!G[l].includes("DetermineComponentFrameRoot");)l++;for(;f<ne.length&&!ne[f].includes("DetermineComponentFrameRoot");)f++;if(l===G.length||f===ne.length)for(l=G.length-1,f=ne.length-1;1<=l&&0<=f&&G[l]!==ne[f];)f--;for(;1<=l&&0<=f;l--,f--)if(G[l]!==ne[f]){if(l!==1||f!==1)do if(l--,f--,0>f||G[l]!==ne[f]){var he=`
`+G[l].replace(" at new "," at ");return t.displayName&&he.includes("<anonymous>")&&(he=he.replace("<anonymous>",t.displayName)),he}while(1<=l&&0<=f);break}}}finally{Ft=!1,Error.prepareStackTrace=s}return(s=t?t.displayName||t.name:"")?ht(s):""}function hn(t,i){switch(t.tag){case 26:case 27:case 5:return ht(t.type);case 16:return ht("Lazy");case 13:return t.child!==i&&i!==null?ht("Suspense Fallback"):ht("Suspense");case 19:return ht("SuspenseList");case 0:case 15:return pt(t.type,!1);case 11:return pt(t.type.render,!1);case 1:return pt(t.type,!0);case 31:return ht("Activity");default:return""}}function en(t){try{var i="",s=null;do i+=hn(t,s),s=t,t=t.return;while(t);return i}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var Pn=Object.prototype.hasOwnProperty,q=r.unstable_scheduleCallback,cn=r.unstable_cancelCallback,xt=r.unstable_shouldYield,Yt=r.unstable_requestPaint,we=r.unstable_now,an=r.unstable_getCurrentPriorityLevel,N=r.unstable_ImmediatePriority,T=r.unstable_UserBlockingPriority,J=r.unstable_NormalPriority,ve=r.unstable_LowPriority,Ee=r.unstable_IdlePriority,Ce=r.log,Ue=r.unstable_setDisableYieldValue,ue=null,de=null;function Oe(t){if(typeof Ce=="function"&&Ue(t),de&&typeof de.setStrictMode=="function")try{de.setStrictMode(ue,t)}catch{}}var Pe=Math.clz32?Math.clz32:at,Ne=Math.log,De=Math.LN2;function at(t){return t>>>=0,t===0?32:31-(Ne(t)/De|0)|0}var st=256,St=262144,V=4194304;function Ae(t){var i=t&42;if(i!==0)return i;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function me(t,i,s){var l=t.pendingLanes;if(l===0)return 0;var f=0,m=t.suspendedLanes,b=t.pingedLanes;t=t.warmLanes;var w=l&134217727;return w!==0?(l=w&~m,l!==0?f=Ae(l):(b&=w,b!==0?f=Ae(b):s||(s=w&~t,s!==0&&(f=Ae(s))))):(w=l&~m,w!==0?f=Ae(w):b!==0?f=Ae(b):s||(s=l&~t,s!==0&&(f=Ae(s)))),f===0?0:i!==0&&i!==f&&(i&m)===0&&(m=f&-f,s=i&-i,m>=s||m===32&&(s&4194048)!==0)?i:f}function Fe(t,i){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&i)===0}function Le(t,i){switch(t){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Me(){var t=V;return V<<=1,(V&62914560)===0&&(V=4194304),t}function Ye(t){for(var i=[],s=0;31>s;s++)i.push(t);return i}function it(t,i){t.pendingLanes|=i,i!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function un(t,i,s,l,f,m){var b=t.pendingLanes;t.pendingLanes=s,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=s,t.entangledLanes&=s,t.errorRecoveryDisabledLanes&=s,t.shellSuspendCounter=0;var w=t.entanglements,G=t.expirationTimes,ne=t.hiddenUpdates;for(s=b&~s;0<s;){var he=31-Pe(s),xe=1<<he;w[he]=0,G[he]=-1;var re=ne[he];if(re!==null)for(ne[he]=null,he=0;he<re.length;he++){var le=re[he];le!==null&&(le.lane&=-536870913)}s&=~xe}l!==0&&Pt(t,l,0),m!==0&&f===0&&t.tag!==0&&(t.suspendedLanes|=m&~(b&~i))}function Pt(t,i,s){t.pendingLanes|=i,t.suspendedLanes&=~i;var l=31-Pe(i);t.entangledLanes|=i,t.entanglements[l]=t.entanglements[l]|1073741824|s&261930}function bi(t,i){var s=t.entangledLanes|=i;for(t=t.entanglements;s;){var l=31-Pe(s),f=1<<l;f&i|t[l]&i&&(t[l]|=i),s&=~f}}function oi(t,i){var s=i&-i;return s=(s&42)!==0?1:Bs(s),(s&(t.suspendedLanes|i))!==0?0:s}function Bs(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Do(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function No(){var t=z.p;return t!==0?t:(t=window.event,t===void 0?32:Z_(t.type))}function Lo(t,i){var s=z.p;try{return z.p=t,i()}finally{z.p=s}}var Vn=Math.random().toString(36).slice(2),pn="__reactFiber$"+Vn,In="__reactProps$"+Vn,pa="__reactContainer$"+Vn,Ka="__reactEvents$"+Vn,jl="__reactListeners$"+Vn,_r="__reactHandles$"+Vn,Uo="__reactResources$"+Vn,Za="__reactMarker$"+Vn;function Oo(t){delete t[pn],delete t[In],delete t[Ka],delete t[jl],delete t[_r]}function Qa(t){var i=t[pn];if(i)return i;for(var s=t.parentNode;s;){if(i=s[pa]||s[pn]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(t=O_(t);t!==null;){if(s=t[pn])return s;t=O_(t)}return i}t=s,s=t.parentNode}return null}function Ja(t){if(t=t[pn]||t[pa]){var i=t.tag;if(i===5||i===6||i===13||i===31||i===26||i===27||i===3)return t}return null}function Fs(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t.stateNode;throw Error(a(33))}function $a(t){var i=t[Uo];return i||(i=t[Uo]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function xn(t){t[Za]=!0}var Kl=new Set,R={};function Y(t,i){se(t,i),se(t+"Capture",i)}function se(t,i){for(R[t]=i,t=0;t<i.length;t++)Kl.add(i[t])}var ie=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ae={},Be={};function Ge(t){return Pn.call(Be,t)?!0:Pn.call(ae,t)?!1:ie.test(t)?Be[t]=!0:(ae[t]=!0,!1)}function Ie(t,i,s){if(Ge(i))if(s===null)t.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":t.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(i);return}}t.setAttribute(i,""+s)}}function We(t,i,s){if(s===null)t.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(i);return}t.setAttribute(i,""+s)}}function Ve(t,i,s,l){if(l===null)t.removeAttribute(s);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(s);return}t.setAttributeNS(i,s,""+l)}}function Je(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ft(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Qe(t,i,s){var l=Object.getOwnPropertyDescriptor(t.constructor.prototype,i);if(!t.hasOwnProperty(i)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var f=l.get,m=l.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return f.call(this)},set:function(b){s=""+b,m.call(this,b)}}),Object.defineProperty(t,i,{enumerable:l.enumerable}),{getValue:function(){return s},setValue:function(b){s=""+b},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function Lt(t){if(!t._valueTracker){var i=ft(t)?"checked":"value";t._valueTracker=Qe(t,i,""+t[i])}}function sn(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var s=i.getValue(),l="";return t&&(l=ft(t)?t.checked?"true":"false":t.value),t=l,t!==s?(i.setValue(t),!0):!1}function Qt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var zt=/[\n"\\]/g;function Ht(t){return t.replace(zt,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function He(t,i,s,l,f,m,b,w){t.name="",b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?t.type=b:t.removeAttribute("type"),i!=null?b==="number"?(i===0&&t.value===""||t.value!=i)&&(t.value=""+Je(i)):t.value!==""+Je(i)&&(t.value=""+Je(i)):b!=="submit"&&b!=="reset"||t.removeAttribute("value"),i!=null?bt(t,b,Je(i)):s!=null?bt(t,b,Je(s)):l!=null&&t.removeAttribute("value"),f==null&&m!=null&&(t.defaultChecked=!!m),f!=null&&(t.checked=f&&typeof f!="function"&&typeof f!="symbol"),w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"?t.name=""+Je(w):t.removeAttribute("name")}function kn(t,i,s,l,f,m,b,w){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(t.type=m),i!=null||s!=null){if(!(m!=="submit"&&m!=="reset"||i!=null)){Lt(t);return}s=s!=null?""+Je(s):"",i=i!=null?""+Je(i):s,w||i===t.value||(t.value=i),t.defaultValue=i}l=l??f,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=w?t.checked:!!l,t.defaultChecked=!!l,b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"&&(t.name=b),Lt(t)}function bt(t,i,s){i==="number"&&Qt(t.ownerDocument)===t||t.defaultValue===""+s||(t.defaultValue=""+s)}function Tn(t,i,s,l){if(t=t.options,i){i={};for(var f=0;f<s.length;f++)i["$"+s[f]]=!0;for(s=0;s<t.length;s++)f=i.hasOwnProperty("$"+t[s].value),t[s].selected!==f&&(t[s].selected=f),f&&l&&(t[s].defaultSelected=!0)}else{for(s=""+Je(s),i=null,f=0;f<t.length;f++){if(t[f].value===s){t[f].selected=!0,l&&(t[f].defaultSelected=!0);return}i!==null||t[f].disabled||(i=t[f])}i!==null&&(i.selected=!0)}}function li(t,i,s){if(i!=null&&(i=""+Je(i),i!==t.value&&(t.value=i),s==null)){t.defaultValue!==i&&(t.defaultValue=i);return}t.defaultValue=s!=null?""+Je(s):""}function Pi(t,i,s,l){if(i==null){if(l!=null){if(s!=null)throw Error(a(92));if(X(l)){if(1<l.length)throw Error(a(93));l=l[0]}s=l}s==null&&(s=""),i=s}s=Je(i),t.defaultValue=s,l=t.textContent,l===s&&l!==""&&l!==null&&(t.value=l),Lt(t)}function ci(t,i){if(i){var s=t.firstChild;if(s&&s===t.lastChild&&s.nodeType===3){s.nodeValue=i;return}}t.textContent=i}var Gt=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function rn(t,i,s){var l=i.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?l?t.setProperty(i,""):i==="float"?t.cssFloat="":t[i]="":l?t.setProperty(i,s):typeof s!="number"||s===0||Gt.has(i)?i==="float"?t.cssFloat=s:t[i]=(""+s).trim():t[i]=s+"px"}function Ii(t,i,s){if(i!=null&&typeof i!="object")throw Error(a(62));if(t=t.style,s!=null){for(var l in s)!s.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var f in i)l=i[f],i.hasOwnProperty(f)&&s[f]!==l&&rn(t,f,l)}else for(var m in i)i.hasOwnProperty(m)&&rn(t,m,i[m])}function Bt(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ji=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),es=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function zs(t){return es.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function ma(){}var sf=null;function rf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var vr=null,xr=null;function Tm(t){var i=Ja(t);if(i&&(t=i.stateNode)){var s=t[In]||null;e:switch(t=i.stateNode,i.type){case"input":if(He(t,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),i=s.name,s.type==="radio"&&i!=null){for(s=t;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+Ht(""+i)+'"][type="radio"]'),i=0;i<s.length;i++){var l=s[i];if(l!==t&&l.form===t.form){var f=l[In]||null;if(!f)throw Error(a(90));He(l,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(i=0;i<s.length;i++)l=s[i],l.form===t.form&&sn(l)}break e;case"textarea":li(t,s.value,s.defaultValue);break e;case"select":i=s.value,i!=null&&Tn(t,!!s.multiple,i,!1)}}}var of=!1;function Am(t,i,s){if(of)return t(i,s);of=!0;try{var l=t(i);return l}finally{if(of=!1,(vr!==null||xr!==null)&&(Ic(),vr&&(i=vr,t=xr,xr=vr=null,Tm(i),t)))for(i=0;i<t.length;i++)Tm(t[i])}}function Po(t,i){var s=t.stateNode;if(s===null)return null;var l=s[In]||null;if(l===null)return null;s=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(s&&typeof s!="function")throw Error(a(231,i,typeof s));return s}var ga=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),lf=!1;if(ga)try{var Io={};Object.defineProperty(Io,"passive",{get:function(){lf=!0}}),window.addEventListener("test",Io,Io),window.removeEventListener("test",Io,Io)}catch{lf=!1}var ts=null,cf=null,Zl=null;function Rm(){if(Zl)return Zl;var t,i=cf,s=i.length,l,f="value"in ts?ts.value:ts.textContent,m=f.length;for(t=0;t<s&&i[t]===f[t];t++);var b=s-t;for(l=1;l<=b&&i[s-l]===f[m-l];l++);return Zl=f.slice(t,1<l?1-l:void 0)}function Ql(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function Jl(){return!0}function wm(){return!1}function $n(t){function i(s,l,f,m,b){this._reactName=s,this._targetInst=f,this.type=l,this.nativeEvent=m,this.target=b,this.currentTarget=null;for(var w in t)t.hasOwnProperty(w)&&(s=t[w],this[w]=s?s(m):m[w]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Jl:wm,this.isPropagationStopped=wm,this}return _(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=Jl)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=Jl)},persist:function(){},isPersistent:Jl}),i}var Hs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},$l=$n(Hs),Bo=_({},Hs,{view:0,detail:0}),Qy=$n(Bo),uf,ff,Fo,ec=_({},Bo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:hf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Fo&&(Fo&&t.type==="mousemove"?(uf=t.screenX-Fo.screenX,ff=t.screenY-Fo.screenY):ff=uf=0,Fo=t),uf)},movementY:function(t){return"movementY"in t?t.movementY:ff}}),Cm=$n(ec),Jy=_({},ec,{dataTransfer:0}),$y=$n(Jy),eS=_({},Bo,{relatedTarget:0}),df=$n(eS),tS=_({},Hs,{animationName:0,elapsedTime:0,pseudoElement:0}),nS=$n(tS),iS=_({},Hs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),aS=$n(iS),sS=_({},Hs,{data:0}),Dm=$n(sS),rS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},oS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},lS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function cS(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=lS[t])?!!i[t]:!1}function hf(){return cS}var uS=_({},Bo,{key:function(t){if(t.key){var i=rS[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=Ql(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?oS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:hf,charCode:function(t){return t.type==="keypress"?Ql(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ql(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),fS=$n(uS),dS=_({},ec,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Nm=$n(dS),hS=_({},Bo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:hf}),pS=$n(hS),mS=_({},Hs,{propertyName:0,elapsedTime:0,pseudoElement:0}),gS=$n(mS),_S=_({},ec,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),vS=$n(_S),xS=_({},Hs,{newState:0,oldState:0}),yS=$n(xS),SS=[9,13,27,32],pf=ga&&"CompositionEvent"in window,zo=null;ga&&"documentMode"in document&&(zo=document.documentMode);var bS=ga&&"TextEvent"in window&&!zo,Lm=ga&&(!pf||zo&&8<zo&&11>=zo),Um=" ",Om=!1;function Pm(t,i){switch(t){case"keyup":return SS.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Im(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var yr=!1;function MS(t,i){switch(t){case"compositionend":return Im(i);case"keypress":return i.which!==32?null:(Om=!0,Um);case"textInput":return t=i.data,t===Um&&Om?null:t;default:return null}}function ES(t,i){if(yr)return t==="compositionend"||!pf&&Pm(t,i)?(t=Rm(),Zl=cf=ts=null,yr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Lm&&i.locale!=="ko"?null:i.data;default:return null}}var TS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Bm(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!TS[t.type]:i==="textarea"}function Fm(t,i,s,l){vr?xr?xr.push(l):xr=[l]:vr=l,i=kc(i,"onChange"),0<i.length&&(s=new $l("onChange","change",null,s,l),t.push({event:s,listeners:i}))}var Ho=null,Go=null;function AS(t){y_(t,0)}function tc(t){var i=Fs(t);if(sn(i))return t}function zm(t,i){if(t==="change")return i}var Hm=!1;if(ga){var mf;if(ga){var gf="oninput"in document;if(!gf){var Gm=document.createElement("div");Gm.setAttribute("oninput","return;"),gf=typeof Gm.oninput=="function"}mf=gf}else mf=!1;Hm=mf&&(!document.documentMode||9<document.documentMode)}function Vm(){Ho&&(Ho.detachEvent("onpropertychange",km),Go=Ho=null)}function km(t){if(t.propertyName==="value"&&tc(Go)){var i=[];Fm(i,Go,t,rf(t)),Am(AS,i)}}function RS(t,i,s){t==="focusin"?(Vm(),Ho=i,Go=s,Ho.attachEvent("onpropertychange",km)):t==="focusout"&&Vm()}function wS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return tc(Go)}function CS(t,i){if(t==="click")return tc(i)}function DS(t,i){if(t==="input"||t==="change")return tc(i)}function NS(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var ui=typeof Object.is=="function"?Object.is:NS;function Vo(t,i){if(ui(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var s=Object.keys(t),l=Object.keys(i);if(s.length!==l.length)return!1;for(l=0;l<s.length;l++){var f=s[l];if(!Pn.call(i,f)||!ui(t[f],i[f]))return!1}return!0}function Xm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Wm(t,i){var s=Xm(t);t=0;for(var l;s;){if(s.nodeType===3){if(l=t+s.textContent.length,t<=i&&l>=i)return{node:s,offset:i-t};t=l}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=Xm(s)}}function qm(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?qm(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function Ym(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var i=Qt(t.document);i instanceof t.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)t=i.contentWindow;else break;i=Qt(t.document)}return i}function _f(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}var LS=ga&&"documentMode"in document&&11>=document.documentMode,Sr=null,vf=null,ko=null,xf=!1;function jm(t,i,s){var l=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;xf||Sr==null||Sr!==Qt(l)||(l=Sr,"selectionStart"in l&&_f(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),ko&&Vo(ko,l)||(ko=l,l=kc(vf,"onSelect"),0<l.length&&(i=new $l("onSelect","select",null,i,s),t.push({event:i,listeners:l}),i.target=Sr)))}function Gs(t,i){var s={};return s[t.toLowerCase()]=i.toLowerCase(),s["Webkit"+t]="webkit"+i,s["Moz"+t]="moz"+i,s}var br={animationend:Gs("Animation","AnimationEnd"),animationiteration:Gs("Animation","AnimationIteration"),animationstart:Gs("Animation","AnimationStart"),transitionrun:Gs("Transition","TransitionRun"),transitionstart:Gs("Transition","TransitionStart"),transitioncancel:Gs("Transition","TransitionCancel"),transitionend:Gs("Transition","TransitionEnd")},yf={},Km={};ga&&(Km=document.createElement("div").style,"AnimationEvent"in window||(delete br.animationend.animation,delete br.animationiteration.animation,delete br.animationstart.animation),"TransitionEvent"in window||delete br.transitionend.transition);function Vs(t){if(yf[t])return yf[t];if(!br[t])return t;var i=br[t],s;for(s in i)if(i.hasOwnProperty(s)&&s in Km)return yf[t]=i[s];return t}var Zm=Vs("animationend"),Qm=Vs("animationiteration"),Jm=Vs("animationstart"),US=Vs("transitionrun"),OS=Vs("transitionstart"),PS=Vs("transitioncancel"),$m=Vs("transitionend"),eg=new Map,Sf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Sf.push("scrollEnd");function Bi(t,i){eg.set(t,i),Y(i,[t])}var nc=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Mi=[],Mr=0,bf=0;function ic(){for(var t=Mr,i=bf=Mr=0;i<t;){var s=Mi[i];Mi[i++]=null;var l=Mi[i];Mi[i++]=null;var f=Mi[i];Mi[i++]=null;var m=Mi[i];if(Mi[i++]=null,l!==null&&f!==null){var b=l.pending;b===null?f.next=f:(f.next=b.next,b.next=f),l.pending=f}m!==0&&tg(s,f,m)}}function ac(t,i,s,l){Mi[Mr++]=t,Mi[Mr++]=i,Mi[Mr++]=s,Mi[Mr++]=l,bf|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function Mf(t,i,s,l){return ac(t,i,s,l),sc(t)}function ks(t,i){return ac(t,null,null,i),sc(t)}function tg(t,i,s){t.lanes|=s;var l=t.alternate;l!==null&&(l.lanes|=s);for(var f=!1,m=t.return;m!==null;)m.childLanes|=s,l=m.alternate,l!==null&&(l.childLanes|=s),m.tag===22&&(t=m.stateNode,t===null||t._visibility&1||(f=!0)),t=m,m=m.return;return t.tag===3?(m=t.stateNode,f&&i!==null&&(f=31-Pe(s),t=m.hiddenUpdates,l=t[f],l===null?t[f]=[i]:l.push(i),i.lane=s|536870912),m):null}function sc(t){if(50<fl)throw fl=0,Ld=null,Error(a(185));for(var i=t.return;i!==null;)t=i,i=t.return;return t.tag===3?t.stateNode:null}var Er={};function IS(t,i,s,l){this.tag=t,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function fi(t,i,s,l){return new IS(t,i,s,l)}function Ef(t){return t=t.prototype,!(!t||!t.isReactComponent)}function _a(t,i){var s=t.alternate;return s===null?(s=fi(t.tag,i,t.key,t.mode),s.elementType=t.elementType,s.type=t.type,s.stateNode=t.stateNode,s.alternate=t,t.alternate=s):(s.pendingProps=i,s.type=t.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=t.flags&65011712,s.childLanes=t.childLanes,s.lanes=t.lanes,s.child=t.child,s.memoizedProps=t.memoizedProps,s.memoizedState=t.memoizedState,s.updateQueue=t.updateQueue,i=t.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=t.sibling,s.index=t.index,s.ref=t.ref,s.refCleanup=t.refCleanup,s}function ng(t,i){t.flags&=65011714;var s=t.alternate;return s===null?(t.childLanes=0,t.lanes=i,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=s.childLanes,t.lanes=s.lanes,t.child=s.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=s.memoizedProps,t.memoizedState=s.memoizedState,t.updateQueue=s.updateQueue,t.type=s.type,i=s.dependencies,t.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),t}function rc(t,i,s,l,f,m){var b=0;if(l=t,typeof t=="function")Ef(t)&&(b=1);else if(typeof t=="string")b=Gb(t,s,ye.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case B:return t=fi(31,s,i,f),t.elementType=B,t.lanes=m,t;case A:return Xs(s.children,f,m,i);case S:b=8,f|=24;break;case y:return t=fi(12,s,i,f|2),t.elementType=y,t.lanes=m,t;case F:return t=fi(13,s,i,f),t.elementType=F,t.lanes=m,t;case D:return t=fi(19,s,i,f),t.elementType=D,t.lanes=m,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case L:b=10;break e;case C:b=9;break e;case U:b=11;break e;case I:b=14;break e;case E:b=16,l=null;break e}b=29,s=Error(a(130,t===null?"null":typeof t,"")),l=null}return i=fi(b,s,i,f),i.elementType=t,i.type=l,i.lanes=m,i}function Xs(t,i,s,l){return t=fi(7,t,l,i),t.lanes=s,t}function Tf(t,i,s){return t=fi(6,t,null,i),t.lanes=s,t}function ig(t){var i=fi(18,null,null,0);return i.stateNode=t,i}function Af(t,i,s){return i=fi(4,t.children!==null?t.children:[],t.key,i),i.lanes=s,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}var ag=new WeakMap;function Ei(t,i){if(typeof t=="object"&&t!==null){var s=ag.get(t);return s!==void 0?s:(i={value:t,source:i,stack:en(i)},ag.set(t,i),i)}return{value:t,source:i,stack:en(i)}}var Tr=[],Ar=0,oc=null,Xo=0,Ti=[],Ai=0,ns=null,Ki=1,Zi="";function va(t,i){Tr[Ar++]=Xo,Tr[Ar++]=oc,oc=t,Xo=i}function sg(t,i,s){Ti[Ai++]=Ki,Ti[Ai++]=Zi,Ti[Ai++]=ns,ns=t;var l=Ki;t=Zi;var f=32-Pe(l)-1;l&=~(1<<f),s+=1;var m=32-Pe(i)+f;if(30<m){var b=f-f%5;m=(l&(1<<b)-1).toString(32),l>>=b,f-=b,Ki=1<<32-Pe(i)+f|s<<f|l,Zi=m+t}else Ki=1<<m|s<<f|l,Zi=t}function Rf(t){t.return!==null&&(va(t,1),sg(t,1,0))}function wf(t){for(;t===oc;)oc=Tr[--Ar],Tr[Ar]=null,Xo=Tr[--Ar],Tr[Ar]=null;for(;t===ns;)ns=Ti[--Ai],Ti[Ai]=null,Zi=Ti[--Ai],Ti[Ai]=null,Ki=Ti[--Ai],Ti[Ai]=null}function rg(t,i){Ti[Ai++]=Ki,Ti[Ai++]=Zi,Ti[Ai++]=ns,Ki=i.id,Zi=i.overflow,ns=t}var Bn=null,tn=null,Ct=!1,is=null,Ri=!1,Cf=Error(a(519));function as(t){var i=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Wo(Ei(i,t)),Cf}function og(t){var i=t.stateNode,s=t.type,l=t.memoizedProps;switch(i[pn]=t,i[In]=l,s){case"dialog":Et("cancel",i),Et("close",i);break;case"iframe":case"object":case"embed":Et("load",i);break;case"video":case"audio":for(s=0;s<hl.length;s++)Et(hl[s],i);break;case"source":Et("error",i);break;case"img":case"image":case"link":Et("error",i),Et("load",i);break;case"details":Et("toggle",i);break;case"input":Et("invalid",i),kn(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":Et("invalid",i);break;case"textarea":Et("invalid",i),Pi(i,l.value,l.defaultValue,l.children)}s=l.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||i.textContent===""+s||l.suppressHydrationWarning===!0||E_(i.textContent,s)?(l.popover!=null&&(Et("beforetoggle",i),Et("toggle",i)),l.onScroll!=null&&Et("scroll",i),l.onScrollEnd!=null&&Et("scrollend",i),l.onClick!=null&&(i.onclick=ma),i=!0):i=!1,i||as(t,!0)}function lg(t){for(Bn=t.return;Bn;)switch(Bn.tag){case 5:case 31:case 13:Ri=!1;return;case 27:case 3:Ri=!0;return;default:Bn=Bn.return}}function Rr(t){if(t!==Bn)return!1;if(!Ct)return lg(t),Ct=!0,!1;var i=t.tag,s;if((s=i!==3&&i!==27)&&((s=i===5)&&(s=t.type,s=!(s!=="form"&&s!=="button")||Yd(t.type,t.memoizedProps)),s=!s),s&&tn&&as(t),lg(t),i===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(317));tn=U_(t)}else if(i===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(317));tn=U_(t)}else i===27?(i=tn,vs(t.type)?(t=Jd,Jd=null,tn=t):tn=i):tn=Bn?Ci(t.stateNode.nextSibling):null;return!0}function Ws(){tn=Bn=null,Ct=!1}function Df(){var t=is;return t!==null&&(ii===null?ii=t:ii.push.apply(ii,t),is=null),t}function Wo(t){is===null?is=[t]:is.push(t)}var Nf=O(null),qs=null,xa=null;function ss(t,i,s){ge(Nf,i._currentValue),i._currentValue=s}function ya(t){t._currentValue=Nf.current,K(Nf)}function Lf(t,i,s){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===s)break;t=t.return}}function Uf(t,i,s,l){var f=t.child;for(f!==null&&(f.return=t);f!==null;){var m=f.dependencies;if(m!==null){var b=f.child;m=m.firstContext;e:for(;m!==null;){var w=m;m=f;for(var G=0;G<i.length;G++)if(w.context===i[G]){m.lanes|=s,w=m.alternate,w!==null&&(w.lanes|=s),Lf(m.return,s,t),l||(b=null);break e}m=w.next}}else if(f.tag===18){if(b=f.return,b===null)throw Error(a(341));b.lanes|=s,m=b.alternate,m!==null&&(m.lanes|=s),Lf(b,s,t),b=null}else b=f.child;if(b!==null)b.return=f;else for(b=f;b!==null;){if(b===t){b=null;break}if(f=b.sibling,f!==null){f.return=b.return,b=f;break}b=b.return}f=b}}function wr(t,i,s,l){t=null;for(var f=i,m=!1;f!==null;){if(!m){if((f.flags&524288)!==0)m=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var b=f.alternate;if(b===null)throw Error(a(387));if(b=b.memoizedProps,b!==null){var w=f.type;ui(f.pendingProps.value,b.value)||(t!==null?t.push(w):t=[w])}}else if(f===Se.current){if(b=f.alternate,b===null)throw Error(a(387));b.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(t!==null?t.push(vl):t=[vl])}f=f.return}t!==null&&Uf(i,t,s,l),i.flags|=262144}function lc(t){for(t=t.firstContext;t!==null;){if(!ui(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Ys(t){qs=t,xa=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Fn(t){return cg(qs,t)}function cc(t,i){return qs===null&&Ys(t),cg(t,i)}function cg(t,i){var s=i._currentValue;if(i={context:i,memoizedValue:s,next:null},xa===null){if(t===null)throw Error(a(308));xa=i,t.dependencies={lanes:0,firstContext:i},t.flags|=524288}else xa=xa.next=i;return s}var BS=typeof AbortController<"u"?AbortController:function(){var t=[],i=this.signal={aborted:!1,addEventListener:function(s,l){t.push(l)}};this.abort=function(){i.aborted=!0,t.forEach(function(s){return s()})}},FS=r.unstable_scheduleCallback,zS=r.unstable_NormalPriority,yn={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Of(){return{controller:new BS,data:new Map,refCount:0}}function qo(t){t.refCount--,t.refCount===0&&FS(zS,function(){t.controller.abort()})}var Yo=null,Pf=0,Cr=0,Dr=null;function HS(t,i){if(Yo===null){var s=Yo=[];Pf=0,Cr=Fd(),Dr={status:"pending",value:void 0,then:function(l){s.push(l)}}}return Pf++,i.then(ug,ug),i}function ug(){if(--Pf===0&&Yo!==null){Dr!==null&&(Dr.status="fulfilled");var t=Yo;Yo=null,Cr=0,Dr=null;for(var i=0;i<t.length;i++)(0,t[i])()}}function GS(t,i){var s=[],l={status:"pending",value:null,reason:null,then:function(f){s.push(f)}};return t.then(function(){l.status="fulfilled",l.value=i;for(var f=0;f<s.length;f++)(0,s[f])(i)},function(f){for(l.status="rejected",l.reason=f,f=0;f<s.length;f++)(0,s[f])(void 0)}),l}var fg=P.S;P.S=function(t,i){j0=we(),typeof i=="object"&&i!==null&&typeof i.then=="function"&&HS(t,i),fg!==null&&fg(t,i)};var js=O(null);function If(){var t=js.current;return t!==null?t:Jt.pooledCache}function uc(t,i){i===null?ge(js,js.current):ge(js,i.pool)}function dg(){var t=If();return t===null?null:{parent:yn._currentValue,pool:t}}var Nr=Error(a(460)),Bf=Error(a(474)),fc=Error(a(542)),dc={then:function(){}};function hg(t){return t=t.status,t==="fulfilled"||t==="rejected"}function pg(t,i,s){switch(s=t[s],s===void 0?t.push(i):s!==i&&(i.then(ma,ma),i=s),i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,gg(t),t;default:if(typeof i.status=="string")i.then(ma,ma);else{if(t=Jt,t!==null&&100<t.shellSuspendCounter)throw Error(a(482));t=i,t.status="pending",t.then(function(l){if(i.status==="pending"){var f=i;f.status="fulfilled",f.value=l}},function(l){if(i.status==="pending"){var f=i;f.status="rejected",f.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,gg(t),t}throw Zs=i,Nr}}function Ks(t){try{var i=t._init;return i(t._payload)}catch(s){throw s!==null&&typeof s=="object"&&typeof s.then=="function"?(Zs=s,Nr):s}}var Zs=null;function mg(){if(Zs===null)throw Error(a(459));var t=Zs;return Zs=null,t}function gg(t){if(t===Nr||t===fc)throw Error(a(483))}var Lr=null,jo=0;function hc(t){var i=jo;return jo+=1,Lr===null&&(Lr=[]),pg(Lr,t,i)}function Ko(t,i){i=i.props.ref,t.ref=i!==void 0?i:null}function pc(t,i){throw i.$$typeof===v?Error(a(525)):(t=Object.prototype.toString.call(i),Error(a(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t)))}function _g(t){function i(Z,k){if(t){var te=Z.deletions;te===null?(Z.deletions=[k],Z.flags|=16):te.push(k)}}function s(Z,k){if(!t)return null;for(;k!==null;)i(Z,k),k=k.sibling;return null}function l(Z){for(var k=new Map;Z!==null;)Z.key!==null?k.set(Z.key,Z):k.set(Z.index,Z),Z=Z.sibling;return k}function f(Z,k){return Z=_a(Z,k),Z.index=0,Z.sibling=null,Z}function m(Z,k,te){return Z.index=te,t?(te=Z.alternate,te!==null?(te=te.index,te<k?(Z.flags|=67108866,k):te):(Z.flags|=67108866,k)):(Z.flags|=1048576,k)}function b(Z){return t&&Z.alternate===null&&(Z.flags|=67108866),Z}function w(Z,k,te,_e){return k===null||k.tag!==6?(k=Tf(te,Z.mode,_e),k.return=Z,k):(k=f(k,te),k.return=Z,k)}function G(Z,k,te,_e){var $e=te.type;return $e===A?he(Z,k,te.props.children,_e,te.key):k!==null&&(k.elementType===$e||typeof $e=="object"&&$e!==null&&$e.$$typeof===E&&Ks($e)===k.type)?(k=f(k,te.props),Ko(k,te),k.return=Z,k):(k=rc(te.type,te.key,te.props,null,Z.mode,_e),Ko(k,te),k.return=Z,k)}function ne(Z,k,te,_e){return k===null||k.tag!==4||k.stateNode.containerInfo!==te.containerInfo||k.stateNode.implementation!==te.implementation?(k=Af(te,Z.mode,_e),k.return=Z,k):(k=f(k,te.children||[]),k.return=Z,k)}function he(Z,k,te,_e,$e){return k===null||k.tag!==7?(k=Xs(te,Z.mode,_e,$e),k.return=Z,k):(k=f(k,te),k.return=Z,k)}function xe(Z,k,te){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=Tf(""+k,Z.mode,te),k.return=Z,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case x:return te=rc(k.type,k.key,k.props,null,Z.mode,te),Ko(te,k),te.return=Z,te;case M:return k=Af(k,Z.mode,te),k.return=Z,k;case E:return k=Ks(k),xe(Z,k,te)}if(X(k)||W(k))return k=Xs(k,Z.mode,te,null),k.return=Z,k;if(typeof k.then=="function")return xe(Z,hc(k),te);if(k.$$typeof===L)return xe(Z,cc(Z,k),te);pc(Z,k)}return null}function re(Z,k,te,_e){var $e=k!==null?k.key:null;if(typeof te=="string"&&te!==""||typeof te=="number"||typeof te=="bigint")return $e!==null?null:w(Z,k,""+te,_e);if(typeof te=="object"&&te!==null){switch(te.$$typeof){case x:return te.key===$e?G(Z,k,te,_e):null;case M:return te.key===$e?ne(Z,k,te,_e):null;case E:return te=Ks(te),re(Z,k,te,_e)}if(X(te)||W(te))return $e!==null?null:he(Z,k,te,_e,null);if(typeof te.then=="function")return re(Z,k,hc(te),_e);if(te.$$typeof===L)return re(Z,k,cc(Z,te),_e);pc(Z,te)}return null}function le(Z,k,te,_e,$e){if(typeof _e=="string"&&_e!==""||typeof _e=="number"||typeof _e=="bigint")return Z=Z.get(te)||null,w(k,Z,""+_e,$e);if(typeof _e=="object"&&_e!==null){switch(_e.$$typeof){case x:return Z=Z.get(_e.key===null?te:_e.key)||null,G(k,Z,_e,$e);case M:return Z=Z.get(_e.key===null?te:_e.key)||null,ne(k,Z,_e,$e);case E:return _e=Ks(_e),le(Z,k,te,_e,$e)}if(X(_e)||W(_e))return Z=Z.get(te)||null,he(k,Z,_e,$e,null);if(typeof _e.then=="function")return le(Z,k,te,hc(_e),$e);if(_e.$$typeof===L)return le(Z,k,te,cc(k,_e),$e);pc(k,_e)}return null}function qe(Z,k,te,_e){for(var $e=null,Ut=null,je=k,mt=k=0,wt=null;je!==null&&mt<te.length;mt++){je.index>mt?(wt=je,je=null):wt=je.sibling;var Ot=re(Z,je,te[mt],_e);if(Ot===null){je===null&&(je=wt);break}t&&je&&Ot.alternate===null&&i(Z,je),k=m(Ot,k,mt),Ut===null?$e=Ot:Ut.sibling=Ot,Ut=Ot,je=wt}if(mt===te.length)return s(Z,je),Ct&&va(Z,mt),$e;if(je===null){for(;mt<te.length;mt++)je=xe(Z,te[mt],_e),je!==null&&(k=m(je,k,mt),Ut===null?$e=je:Ut.sibling=je,Ut=je);return Ct&&va(Z,mt),$e}for(je=l(je);mt<te.length;mt++)wt=le(je,Z,mt,te[mt],_e),wt!==null&&(t&&wt.alternate!==null&&je.delete(wt.key===null?mt:wt.key),k=m(wt,k,mt),Ut===null?$e=wt:Ut.sibling=wt,Ut=wt);return t&&je.forEach(function(Ms){return i(Z,Ms)}),Ct&&va(Z,mt),$e}function tt(Z,k,te,_e){if(te==null)throw Error(a(151));for(var $e=null,Ut=null,je=k,mt=k=0,wt=null,Ot=te.next();je!==null&&!Ot.done;mt++,Ot=te.next()){je.index>mt?(wt=je,je=null):wt=je.sibling;var Ms=re(Z,je,Ot.value,_e);if(Ms===null){je===null&&(je=wt);break}t&&je&&Ms.alternate===null&&i(Z,je),k=m(Ms,k,mt),Ut===null?$e=Ms:Ut.sibling=Ms,Ut=Ms,je=wt}if(Ot.done)return s(Z,je),Ct&&va(Z,mt),$e;if(je===null){for(;!Ot.done;mt++,Ot=te.next())Ot=xe(Z,Ot.value,_e),Ot!==null&&(k=m(Ot,k,mt),Ut===null?$e=Ot:Ut.sibling=Ot,Ut=Ot);return Ct&&va(Z,mt),$e}for(je=l(je);!Ot.done;mt++,Ot=te.next())Ot=le(je,Z,mt,Ot.value,_e),Ot!==null&&(t&&Ot.alternate!==null&&je.delete(Ot.key===null?mt:Ot.key),k=m(Ot,k,mt),Ut===null?$e=Ot:Ut.sibling=Ot,Ut=Ot);return t&&je.forEach(function(Jb){return i(Z,Jb)}),Ct&&va(Z,mt),$e}function Zt(Z,k,te,_e){if(typeof te=="object"&&te!==null&&te.type===A&&te.key===null&&(te=te.props.children),typeof te=="object"&&te!==null){switch(te.$$typeof){case x:e:{for(var $e=te.key;k!==null;){if(k.key===$e){if($e=te.type,$e===A){if(k.tag===7){s(Z,k.sibling),_e=f(k,te.props.children),_e.return=Z,Z=_e;break e}}else if(k.elementType===$e||typeof $e=="object"&&$e!==null&&$e.$$typeof===E&&Ks($e)===k.type){s(Z,k.sibling),_e=f(k,te.props),Ko(_e,te),_e.return=Z,Z=_e;break e}s(Z,k);break}else i(Z,k);k=k.sibling}te.type===A?(_e=Xs(te.props.children,Z.mode,_e,te.key),_e.return=Z,Z=_e):(_e=rc(te.type,te.key,te.props,null,Z.mode,_e),Ko(_e,te),_e.return=Z,Z=_e)}return b(Z);case M:e:{for($e=te.key;k!==null;){if(k.key===$e)if(k.tag===4&&k.stateNode.containerInfo===te.containerInfo&&k.stateNode.implementation===te.implementation){s(Z,k.sibling),_e=f(k,te.children||[]),_e.return=Z,Z=_e;break e}else{s(Z,k);break}else i(Z,k);k=k.sibling}_e=Af(te,Z.mode,_e),_e.return=Z,Z=_e}return b(Z);case E:return te=Ks(te),Zt(Z,k,te,_e)}if(X(te))return qe(Z,k,te,_e);if(W(te)){if($e=W(te),typeof $e!="function")throw Error(a(150));return te=$e.call(te),tt(Z,k,te,_e)}if(typeof te.then=="function")return Zt(Z,k,hc(te),_e);if(te.$$typeof===L)return Zt(Z,k,cc(Z,te),_e);pc(Z,te)}return typeof te=="string"&&te!==""||typeof te=="number"||typeof te=="bigint"?(te=""+te,k!==null&&k.tag===6?(s(Z,k.sibling),_e=f(k,te),_e.return=Z,Z=_e):(s(Z,k),_e=Tf(te,Z.mode,_e),_e.return=Z,Z=_e),b(Z)):s(Z,k)}return function(Z,k,te,_e){try{jo=0;var $e=Zt(Z,k,te,_e);return Lr=null,$e}catch(je){if(je===Nr||je===fc)throw je;var Ut=fi(29,je,null,Z.mode);return Ut.lanes=_e,Ut.return=Z,Ut}finally{}}}var Qs=_g(!0),vg=_g(!1),rs=!1;function Ff(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function zf(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function os(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function ls(t,i,s){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(It&2)!==0){var f=l.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),l.pending=i,i=sc(t),tg(t,null,s),i}return ac(t,l,i,s),sc(t)}function Zo(t,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194048)!==0)){var l=i.lanes;l&=t.pendingLanes,s|=l,i.lanes=s,bi(t,s)}}function Hf(t,i){var s=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,s===l)){var f=null,m=null;if(s=s.firstBaseUpdate,s!==null){do{var b={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};m===null?f=m=b:m=m.next=b,s=s.next}while(s!==null);m===null?f=m=i:m=m.next=i}else f=m=i;s={baseState:l.baseState,firstBaseUpdate:f,lastBaseUpdate:m,shared:l.shared,callbacks:l.callbacks},t.updateQueue=s;return}t=s.lastBaseUpdate,t===null?s.firstBaseUpdate=i:t.next=i,s.lastBaseUpdate=i}var Gf=!1;function Qo(){if(Gf){var t=Dr;if(t!==null)throw t}}function Jo(t,i,s,l){Gf=!1;var f=t.updateQueue;rs=!1;var m=f.firstBaseUpdate,b=f.lastBaseUpdate,w=f.shared.pending;if(w!==null){f.shared.pending=null;var G=w,ne=G.next;G.next=null,b===null?m=ne:b.next=ne,b=G;var he=t.alternate;he!==null&&(he=he.updateQueue,w=he.lastBaseUpdate,w!==b&&(w===null?he.firstBaseUpdate=ne:w.next=ne,he.lastBaseUpdate=G))}if(m!==null){var xe=f.baseState;b=0,he=ne=G=null,w=m;do{var re=w.lane&-536870913,le=re!==w.lane;if(le?(Rt&re)===re:(l&re)===re){re!==0&&re===Cr&&(Gf=!0),he!==null&&(he=he.next={lane:0,tag:w.tag,payload:w.payload,callback:null,next:null});e:{var qe=t,tt=w;re=i;var Zt=s;switch(tt.tag){case 1:if(qe=tt.payload,typeof qe=="function"){xe=qe.call(Zt,xe,re);break e}xe=qe;break e;case 3:qe.flags=qe.flags&-65537|128;case 0:if(qe=tt.payload,re=typeof qe=="function"?qe.call(Zt,xe,re):qe,re==null)break e;xe=_({},xe,re);break e;case 2:rs=!0}}re=w.callback,re!==null&&(t.flags|=64,le&&(t.flags|=8192),le=f.callbacks,le===null?f.callbacks=[re]:le.push(re))}else le={lane:re,tag:w.tag,payload:w.payload,callback:w.callback,next:null},he===null?(ne=he=le,G=xe):he=he.next=le,b|=re;if(w=w.next,w===null){if(w=f.shared.pending,w===null)break;le=w,w=le.next,le.next=null,f.lastBaseUpdate=le,f.shared.pending=null}}while(!0);he===null&&(G=xe),f.baseState=G,f.firstBaseUpdate=ne,f.lastBaseUpdate=he,m===null&&(f.shared.lanes=0),hs|=b,t.lanes=b,t.memoizedState=xe}}function xg(t,i){if(typeof t!="function")throw Error(a(191,t));t.call(i)}function yg(t,i){var s=t.callbacks;if(s!==null)for(t.callbacks=null,t=0;t<s.length;t++)xg(s[t],i)}var Ur=O(null),mc=O(0);function Sg(t,i){t=Ca,ge(mc,t),ge(Ur,i),Ca=t|i.baseLanes}function Vf(){ge(mc,Ca),ge(Ur,Ur.current)}function kf(){Ca=mc.current,K(Ur),K(mc)}var di=O(null),wi=null;function cs(t){var i=t.alternate;ge(mn,mn.current&1),ge(di,t),wi===null&&(i===null||Ur.current!==null||i.memoizedState!==null)&&(wi=t)}function Xf(t){ge(mn,mn.current),ge(di,t),wi===null&&(wi=t)}function bg(t){t.tag===22?(ge(mn,mn.current),ge(di,t),wi===null&&(wi=t)):us()}function us(){ge(mn,mn.current),ge(di,di.current)}function hi(t){K(di),wi===t&&(wi=null),K(mn)}var mn=O(0);function gc(t){for(var i=t;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||Zd(s)||Qd(s)))return i}else if(i.tag===19&&(i.memoizedProps.revealOrder==="forwards"||i.memoizedProps.revealOrder==="backwards"||i.memoizedProps.revealOrder==="unstable_legacy-backwards"||i.memoizedProps.revealOrder==="together")){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Sa=0,dt=null,jt=null,Sn=null,_c=!1,Or=!1,Js=!1,vc=0,$o=0,Pr=null,VS=0;function fn(){throw Error(a(321))}function Wf(t,i){if(i===null)return!1;for(var s=0;s<i.length&&s<t.length;s++)if(!ui(t[s],i[s]))return!1;return!0}function qf(t,i,s,l,f,m){return Sa=m,dt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,P.H=t===null||t.memoizedState===null?s0:od,Js=!1,m=s(l,f),Js=!1,Or&&(m=Eg(i,s,l,f)),Mg(t),m}function Mg(t){P.H=nl;var i=jt!==null&&jt.next!==null;if(Sa=0,Sn=jt=dt=null,_c=!1,$o=0,Pr=null,i)throw Error(a(300));t===null||bn||(t=t.dependencies,t!==null&&lc(t)&&(bn=!0))}function Eg(t,i,s,l){dt=t;var f=0;do{if(Or&&(Pr=null),$o=0,Or=!1,25<=f)throw Error(a(301));if(f+=1,Sn=jt=null,t.updateQueue!=null){var m=t.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}P.H=r0,m=i(s,l)}while(Or);return m}function kS(){var t=P.H,i=t.useState()[0];return i=typeof i.then=="function"?el(i):i,t=t.useState()[0],(jt!==null?jt.memoizedState:null)!==t&&(dt.flags|=1024),i}function Yf(){var t=vc!==0;return vc=0,t}function jf(t,i,s){i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~s}function Kf(t){if(_c){for(t=t.memoizedState;t!==null;){var i=t.queue;i!==null&&(i.pending=null),t=t.next}_c=!1}Sa=0,Sn=jt=dt=null,Or=!1,$o=vc=0,Pr=null}function Yn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Sn===null?dt.memoizedState=Sn=t:Sn=Sn.next=t,Sn}function gn(){if(jt===null){var t=dt.alternate;t=t!==null?t.memoizedState:null}else t=jt.next;var i=Sn===null?dt.memoizedState:Sn.next;if(i!==null)Sn=i,jt=t;else{if(t===null)throw dt.alternate===null?Error(a(467)):Error(a(310));jt=t,t={memoizedState:jt.memoizedState,baseState:jt.baseState,baseQueue:jt.baseQueue,queue:jt.queue,next:null},Sn===null?dt.memoizedState=Sn=t:Sn=Sn.next=t}return Sn}function xc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function el(t){var i=$o;return $o+=1,Pr===null&&(Pr=[]),t=pg(Pr,t,i),i=dt,(Sn===null?i.memoizedState:Sn.next)===null&&(i=i.alternate,P.H=i===null||i.memoizedState===null?s0:od),t}function yc(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return el(t);if(t.$$typeof===L)return Fn(t)}throw Error(a(438,String(t)))}function Zf(t){var i=null,s=dt.updateQueue;if(s!==null&&(i=s.memoCache),i==null){var l=dt.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(f){return f.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),s===null&&(s=xc(),dt.updateQueue=s),s.memoCache=i,s=i.data[i.index],s===void 0)for(s=i.data[i.index]=Array(t),l=0;l<t;l++)s[l]=j;return i.index++,s}function ba(t,i){return typeof i=="function"?i(t):i}function Sc(t){var i=gn();return Qf(i,jt,t)}function Qf(t,i,s){var l=t.queue;if(l===null)throw Error(a(311));l.lastRenderedReducer=s;var f=t.baseQueue,m=l.pending;if(m!==null){if(f!==null){var b=f.next;f.next=m.next,m.next=b}i.baseQueue=f=m,l.pending=null}if(m=t.baseState,f===null)t.memoizedState=m;else{i=f.next;var w=b=null,G=null,ne=i,he=!1;do{var xe=ne.lane&-536870913;if(xe!==ne.lane?(Rt&xe)===xe:(Sa&xe)===xe){var re=ne.revertLane;if(re===0)G!==null&&(G=G.next={lane:0,revertLane:0,gesture:null,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null}),xe===Cr&&(he=!0);else if((Sa&re)===re){ne=ne.next,re===Cr&&(he=!0);continue}else xe={lane:0,revertLane:ne.revertLane,gesture:null,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null},G===null?(w=G=xe,b=m):G=G.next=xe,dt.lanes|=re,hs|=re;xe=ne.action,Js&&s(m,xe),m=ne.hasEagerState?ne.eagerState:s(m,xe)}else re={lane:xe,revertLane:ne.revertLane,gesture:ne.gesture,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null},G===null?(w=G=re,b=m):G=G.next=re,dt.lanes|=xe,hs|=xe;ne=ne.next}while(ne!==null&&ne!==i);if(G===null?b=m:G.next=w,!ui(m,t.memoizedState)&&(bn=!0,he&&(s=Dr,s!==null)))throw s;t.memoizedState=m,t.baseState=b,t.baseQueue=G,l.lastRenderedState=m}return f===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function Jf(t){var i=gn(),s=i.queue;if(s===null)throw Error(a(311));s.lastRenderedReducer=t;var l=s.dispatch,f=s.pending,m=i.memoizedState;if(f!==null){s.pending=null;var b=f=f.next;do m=t(m,b.action),b=b.next;while(b!==f);ui(m,i.memoizedState)||(bn=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),s.lastRenderedState=m}return[m,l]}function Tg(t,i,s){var l=dt,f=gn(),m=Ct;if(m){if(s===void 0)throw Error(a(407));s=s()}else s=i();var b=!ui((jt||f).memoizedState,s);if(b&&(f.memoizedState=s,bn=!0),f=f.queue,td(wg.bind(null,l,f,t),[t]),f.getSnapshot!==i||b||Sn!==null&&Sn.memoizedState.tag&1){if(l.flags|=2048,Ir(9,{destroy:void 0},Rg.bind(null,l,f,s,i),null),Jt===null)throw Error(a(349));m||(Sa&127)!==0||Ag(l,i,s)}return s}function Ag(t,i,s){t.flags|=16384,t={getSnapshot:i,value:s},i=dt.updateQueue,i===null?(i=xc(),dt.updateQueue=i,i.stores=[t]):(s=i.stores,s===null?i.stores=[t]:s.push(t))}function Rg(t,i,s,l){i.value=s,i.getSnapshot=l,Cg(i)&&Dg(t)}function wg(t,i,s){return s(function(){Cg(i)&&Dg(t)})}function Cg(t){var i=t.getSnapshot;t=t.value;try{var s=i();return!ui(t,s)}catch{return!0}}function Dg(t){var i=ks(t,2);i!==null&&ai(i,t,2)}function $f(t){var i=Yn();if(typeof t=="function"){var s=t;if(t=s(),Js){Oe(!0);try{s()}finally{Oe(!1)}}}return i.memoizedState=i.baseState=t,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ba,lastRenderedState:t},i}function Ng(t,i,s,l){return t.baseState=s,Qf(t,jt,typeof l=="function"?l:ba)}function XS(t,i,s,l,f){if(Ec(t))throw Error(a(485));if(t=i.action,t!==null){var m={payload:f,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(b){m.listeners.push(b)}};P.T!==null?s(!0):m.isTransition=!1,l(m),s=i.pending,s===null?(m.next=i.pending=m,Lg(i,m)):(m.next=s.next,i.pending=s.next=m)}}function Lg(t,i){var s=i.action,l=i.payload,f=t.state;if(i.isTransition){var m=P.T,b={};P.T=b;try{var w=s(f,l),G=P.S;G!==null&&G(b,w),Ug(t,i,w)}catch(ne){ed(t,i,ne)}finally{m!==null&&b.types!==null&&(m.types=b.types),P.T=m}}else try{m=s(f,l),Ug(t,i,m)}catch(ne){ed(t,i,ne)}}function Ug(t,i,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(l){Og(t,i,l)},function(l){return ed(t,i,l)}):Og(t,i,s)}function Og(t,i,s){i.status="fulfilled",i.value=s,Pg(i),t.state=s,i=t.pending,i!==null&&(s=i.next,s===i?t.pending=null:(s=s.next,i.next=s,Lg(t,s)))}function ed(t,i,s){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=s,Pg(i),i=i.next;while(i!==l)}t.action=null}function Pg(t){t=t.listeners;for(var i=0;i<t.length;i++)(0,t[i])()}function Ig(t,i){return i}function Bg(t,i){if(Ct){var s=Jt.formState;if(s!==null){e:{var l=dt;if(Ct){if(tn){t:{for(var f=tn,m=Ri;f.nodeType!==8;){if(!m){f=null;break t}if(f=Ci(f.nextSibling),f===null){f=null;break t}}m=f.data,f=m==="F!"||m==="F"?f:null}if(f){tn=Ci(f.nextSibling),l=f.data==="F!";break e}}as(l)}l=!1}l&&(i=s[0])}}return s=Yn(),s.memoizedState=s.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ig,lastRenderedState:i},s.queue=l,s=n0.bind(null,dt,l),l.dispatch=s,l=$f(!1),m=rd.bind(null,dt,!1,l.queue),l=Yn(),f={state:i,dispatch:null,action:t,pending:null},l.queue=f,s=XS.bind(null,dt,f,m,s),f.dispatch=s,l.memoizedState=t,[i,s,!1]}function Fg(t){var i=gn();return zg(i,jt,t)}function zg(t,i,s){if(i=Qf(t,i,Ig)[0],t=Sc(ba)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=el(i)}catch(b){throw b===Nr?fc:b}else l=i;i=gn();var f=i.queue,m=f.dispatch;return s!==i.memoizedState&&(dt.flags|=2048,Ir(9,{destroy:void 0},WS.bind(null,f,s),null)),[l,m,t]}function WS(t,i){t.action=i}function Hg(t){var i=gn(),s=jt;if(s!==null)return zg(i,s,t);gn(),i=i.memoizedState,s=gn();var l=s.queue.dispatch;return s.memoizedState=t,[i,l,!1]}function Ir(t,i,s,l){return t={tag:t,create:s,deps:l,inst:i,next:null},i=dt.updateQueue,i===null&&(i=xc(),dt.updateQueue=i),s=i.lastEffect,s===null?i.lastEffect=t.next=t:(l=s.next,s.next=t,t.next=l,i.lastEffect=t),t}function Gg(){return gn().memoizedState}function bc(t,i,s,l){var f=Yn();dt.flags|=t,f.memoizedState=Ir(1|i,{destroy:void 0},s,l===void 0?null:l)}function Mc(t,i,s,l){var f=gn();l=l===void 0?null:l;var m=f.memoizedState.inst;jt!==null&&l!==null&&Wf(l,jt.memoizedState.deps)?f.memoizedState=Ir(i,m,s,l):(dt.flags|=t,f.memoizedState=Ir(1|i,m,s,l))}function Vg(t,i){bc(8390656,8,t,i)}function td(t,i){Mc(2048,8,t,i)}function qS(t){dt.flags|=4;var i=dt.updateQueue;if(i===null)i=xc(),dt.updateQueue=i,i.events=[t];else{var s=i.events;s===null?i.events=[t]:s.push(t)}}function kg(t){var i=gn().memoizedState;return qS({ref:i,nextImpl:t}),function(){if((It&2)!==0)throw Error(a(440));return i.impl.apply(void 0,arguments)}}function Xg(t,i){return Mc(4,2,t,i)}function Wg(t,i){return Mc(4,4,t,i)}function qg(t,i){if(typeof i=="function"){t=t();var s=i(t);return function(){typeof s=="function"?s():i(null)}}if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function Yg(t,i,s){s=s!=null?s.concat([t]):null,Mc(4,4,qg.bind(null,i,t),s)}function nd(){}function jg(t,i){var s=gn();i=i===void 0?null:i;var l=s.memoizedState;return i!==null&&Wf(i,l[1])?l[0]:(s.memoizedState=[t,i],t)}function Kg(t,i){var s=gn();i=i===void 0?null:i;var l=s.memoizedState;if(i!==null&&Wf(i,l[1]))return l[0];if(l=t(),Js){Oe(!0);try{t()}finally{Oe(!1)}}return s.memoizedState=[l,i],l}function id(t,i,s){return s===void 0||(Sa&1073741824)!==0&&(Rt&261930)===0?t.memoizedState=i:(t.memoizedState=s,t=Z0(),dt.lanes|=t,hs|=t,s)}function Zg(t,i,s,l){return ui(s,i)?s:Ur.current!==null?(t=id(t,s,l),ui(t,i)||(bn=!0),t):(Sa&42)===0||(Sa&1073741824)!==0&&(Rt&261930)===0?(bn=!0,t.memoizedState=s):(t=Z0(),dt.lanes|=t,hs|=t,i)}function Qg(t,i,s,l,f){var m=z.p;z.p=m!==0&&8>m?m:8;var b=P.T,w={};P.T=w,rd(t,!1,i,s);try{var G=f(),ne=P.S;if(ne!==null&&ne(w,G),G!==null&&typeof G=="object"&&typeof G.then=="function"){var he=GS(G,l);tl(t,i,he,gi(t))}else tl(t,i,l,gi(t))}catch(xe){tl(t,i,{then:function(){},status:"rejected",reason:xe},gi())}finally{z.p=m,b!==null&&w.types!==null&&(b.types=w.types),P.T=b}}function YS(){}function ad(t,i,s,l){if(t.tag!==5)throw Error(a(476));var f=Jg(t).queue;Qg(t,f,i,oe,s===null?YS:function(){return $g(t),s(l)})}function Jg(t){var i=t.memoizedState;if(i!==null)return i;i={memoizedState:oe,baseState:oe,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ba,lastRenderedState:oe},next:null};var s={};return i.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ba,lastRenderedState:s},next:null},t.memoizedState=i,t=t.alternate,t!==null&&(t.memoizedState=i),i}function $g(t){var i=Jg(t);i.next===null&&(i=t.alternate.memoizedState),tl(t,i.next.queue,{},gi())}function sd(){return Fn(vl)}function e0(){return gn().memoizedState}function t0(){return gn().memoizedState}function jS(t){for(var i=t.return;i!==null;){switch(i.tag){case 24:case 3:var s=gi();t=os(s);var l=ls(i,t,s);l!==null&&(ai(l,i,s),Zo(l,i,s)),i={cache:Of()},t.payload=i;return}i=i.return}}function KS(t,i,s){var l=gi();s={lane:l,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},Ec(t)?i0(i,s):(s=Mf(t,i,s,l),s!==null&&(ai(s,t,l),a0(s,i,l)))}function n0(t,i,s){var l=gi();tl(t,i,s,l)}function tl(t,i,s,l){var f={lane:l,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null};if(Ec(t))i0(i,f);else{var m=t.alternate;if(t.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var b=i.lastRenderedState,w=m(b,s);if(f.hasEagerState=!0,f.eagerState=w,ui(w,b))return ac(t,i,f,0),Jt===null&&ic(),!1}catch{}finally{}if(s=Mf(t,i,f,l),s!==null)return ai(s,t,l),a0(s,i,l),!0}return!1}function rd(t,i,s,l){if(l={lane:2,revertLane:Fd(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Ec(t)){if(i)throw Error(a(479))}else i=Mf(t,s,l,2),i!==null&&ai(i,t,2)}function Ec(t){var i=t.alternate;return t===dt||i!==null&&i===dt}function i0(t,i){Or=_c=!0;var s=t.pending;s===null?i.next=i:(i.next=s.next,s.next=i),t.pending=i}function a0(t,i,s){if((s&4194048)!==0){var l=i.lanes;l&=t.pendingLanes,s|=l,i.lanes=s,bi(t,s)}}var nl={readContext:Fn,use:yc,useCallback:fn,useContext:fn,useEffect:fn,useImperativeHandle:fn,useLayoutEffect:fn,useInsertionEffect:fn,useMemo:fn,useReducer:fn,useRef:fn,useState:fn,useDebugValue:fn,useDeferredValue:fn,useTransition:fn,useSyncExternalStore:fn,useId:fn,useHostTransitionStatus:fn,useFormState:fn,useActionState:fn,useOptimistic:fn,useMemoCache:fn,useCacheRefresh:fn};nl.useEffectEvent=fn;var s0={readContext:Fn,use:yc,useCallback:function(t,i){return Yn().memoizedState=[t,i===void 0?null:i],t},useContext:Fn,useEffect:Vg,useImperativeHandle:function(t,i,s){s=s!=null?s.concat([t]):null,bc(4194308,4,qg.bind(null,i,t),s)},useLayoutEffect:function(t,i){return bc(4194308,4,t,i)},useInsertionEffect:function(t,i){bc(4,2,t,i)},useMemo:function(t,i){var s=Yn();i=i===void 0?null:i;var l=t();if(Js){Oe(!0);try{t()}finally{Oe(!1)}}return s.memoizedState=[l,i],l},useReducer:function(t,i,s){var l=Yn();if(s!==void 0){var f=s(i);if(Js){Oe(!0);try{s(i)}finally{Oe(!1)}}}else f=i;return l.memoizedState=l.baseState=f,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:f},l.queue=t,t=t.dispatch=KS.bind(null,dt,t),[l.memoizedState,t]},useRef:function(t){var i=Yn();return t={current:t},i.memoizedState=t},useState:function(t){t=$f(t);var i=t.queue,s=n0.bind(null,dt,i);return i.dispatch=s,[t.memoizedState,s]},useDebugValue:nd,useDeferredValue:function(t,i){var s=Yn();return id(s,t,i)},useTransition:function(){var t=$f(!1);return t=Qg.bind(null,dt,t.queue,!0,!1),Yn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,i,s){var l=dt,f=Yn();if(Ct){if(s===void 0)throw Error(a(407));s=s()}else{if(s=i(),Jt===null)throw Error(a(349));(Rt&127)!==0||Ag(l,i,s)}f.memoizedState=s;var m={value:s,getSnapshot:i};return f.queue=m,Vg(wg.bind(null,l,m,t),[t]),l.flags|=2048,Ir(9,{destroy:void 0},Rg.bind(null,l,m,s,i),null),s},useId:function(){var t=Yn(),i=Jt.identifierPrefix;if(Ct){var s=Zi,l=Ki;s=(l&~(1<<32-Pe(l)-1)).toString(32)+s,i="_"+i+"R_"+s,s=vc++,0<s&&(i+="H"+s.toString(32)),i+="_"}else s=VS++,i="_"+i+"r_"+s.toString(32)+"_";return t.memoizedState=i},useHostTransitionStatus:sd,useFormState:Bg,useActionState:Bg,useOptimistic:function(t){var i=Yn();i.memoizedState=i.baseState=t;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=s,i=rd.bind(null,dt,!0,s),s.dispatch=i,[t,i]},useMemoCache:Zf,useCacheRefresh:function(){return Yn().memoizedState=jS.bind(null,dt)},useEffectEvent:function(t){var i=Yn(),s={impl:t};return i.memoizedState=s,function(){if((It&2)!==0)throw Error(a(440));return s.impl.apply(void 0,arguments)}}},od={readContext:Fn,use:yc,useCallback:jg,useContext:Fn,useEffect:td,useImperativeHandle:Yg,useInsertionEffect:Xg,useLayoutEffect:Wg,useMemo:Kg,useReducer:Sc,useRef:Gg,useState:function(){return Sc(ba)},useDebugValue:nd,useDeferredValue:function(t,i){var s=gn();return Zg(s,jt.memoizedState,t,i)},useTransition:function(){var t=Sc(ba)[0],i=gn().memoizedState;return[typeof t=="boolean"?t:el(t),i]},useSyncExternalStore:Tg,useId:e0,useHostTransitionStatus:sd,useFormState:Fg,useActionState:Fg,useOptimistic:function(t,i){var s=gn();return Ng(s,jt,t,i)},useMemoCache:Zf,useCacheRefresh:t0};od.useEffectEvent=kg;var r0={readContext:Fn,use:yc,useCallback:jg,useContext:Fn,useEffect:td,useImperativeHandle:Yg,useInsertionEffect:Xg,useLayoutEffect:Wg,useMemo:Kg,useReducer:Jf,useRef:Gg,useState:function(){return Jf(ba)},useDebugValue:nd,useDeferredValue:function(t,i){var s=gn();return jt===null?id(s,t,i):Zg(s,jt.memoizedState,t,i)},useTransition:function(){var t=Jf(ba)[0],i=gn().memoizedState;return[typeof t=="boolean"?t:el(t),i]},useSyncExternalStore:Tg,useId:e0,useHostTransitionStatus:sd,useFormState:Hg,useActionState:Hg,useOptimistic:function(t,i){var s=gn();return jt!==null?Ng(s,jt,t,i):(s.baseState=t,[t,s.queue.dispatch])},useMemoCache:Zf,useCacheRefresh:t0};r0.useEffectEvent=kg;function ld(t,i,s,l){i=t.memoizedState,s=s(l,i),s=s==null?i:_({},i,s),t.memoizedState=s,t.lanes===0&&(t.updateQueue.baseState=s)}var cd={enqueueSetState:function(t,i,s){t=t._reactInternals;var l=gi(),f=os(l);f.payload=i,s!=null&&(f.callback=s),i=ls(t,f,l),i!==null&&(ai(i,t,l),Zo(i,t,l))},enqueueReplaceState:function(t,i,s){t=t._reactInternals;var l=gi(),f=os(l);f.tag=1,f.payload=i,s!=null&&(f.callback=s),i=ls(t,f,l),i!==null&&(ai(i,t,l),Zo(i,t,l))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var s=gi(),l=os(s);l.tag=2,i!=null&&(l.callback=i),i=ls(t,l,s),i!==null&&(ai(i,t,s),Zo(i,t,s))}};function o0(t,i,s,l,f,m,b){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,m,b):i.prototype&&i.prototype.isPureReactComponent?!Vo(s,l)||!Vo(f,m):!0}function l0(t,i,s,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,l),i.state!==t&&cd.enqueueReplaceState(i,i.state,null)}function $s(t,i){var s=i;if("ref"in i){s={};for(var l in i)l!=="ref"&&(s[l]=i[l])}if(t=t.defaultProps){s===i&&(s=_({},s));for(var f in t)s[f]===void 0&&(s[f]=t[f])}return s}function c0(t){nc(t)}function u0(t){console.error(t)}function f0(t){nc(t)}function Tc(t,i){try{var s=t.onUncaughtError;s(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function d0(t,i,s){try{var l=t.onCaughtError;l(s.value,{componentStack:s.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function ud(t,i,s){return s=os(s),s.tag=3,s.payload={element:null},s.callback=function(){Tc(t,i)},s}function h0(t){return t=os(t),t.tag=3,t}function p0(t,i,s,l){var f=s.type.getDerivedStateFromError;if(typeof f=="function"){var m=l.value;t.payload=function(){return f(m)},t.callback=function(){d0(i,s,l)}}var b=s.stateNode;b!==null&&typeof b.componentDidCatch=="function"&&(t.callback=function(){d0(i,s,l),typeof f!="function"&&(ps===null?ps=new Set([this]):ps.add(this));var w=l.stack;this.componentDidCatch(l.value,{componentStack:w!==null?w:""})})}function ZS(t,i,s,l,f){if(s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=s.alternate,i!==null&&wr(i,s,f,!0),s=di.current,s!==null){switch(s.tag){case 31:case 13:return wi===null?Bc():s.alternate===null&&dn===0&&(dn=3),s.flags&=-257,s.flags|=65536,s.lanes=f,l===dc?s.flags|=16384:(i=s.updateQueue,i===null?s.updateQueue=new Set([l]):i.add(l),Pd(t,l,f)),!1;case 22:return s.flags|=65536,l===dc?s.flags|=16384:(i=s.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},s.updateQueue=i):(s=i.retryQueue,s===null?i.retryQueue=new Set([l]):s.add(l)),Pd(t,l,f)),!1}throw Error(a(435,s.tag))}return Pd(t,l,f),Bc(),!1}if(Ct)return i=di.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=f,l!==Cf&&(t=Error(a(422),{cause:l}),Wo(Ei(t,s)))):(l!==Cf&&(i=Error(a(423),{cause:l}),Wo(Ei(i,s))),t=t.current.alternate,t.flags|=65536,f&=-f,t.lanes|=f,l=Ei(l,s),f=ud(t.stateNode,l,f),Hf(t,f),dn!==4&&(dn=2)),!1;var m=Error(a(520),{cause:l});if(m=Ei(m,s),ul===null?ul=[m]:ul.push(m),dn!==4&&(dn=2),i===null)return!0;l=Ei(l,s),s=i;do{switch(s.tag){case 3:return s.flags|=65536,t=f&-f,s.lanes|=t,t=ud(s.stateNode,l,t),Hf(s,t),!1;case 1:if(i=s.type,m=s.stateNode,(s.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(ps===null||!ps.has(m))))return s.flags|=65536,f&=-f,s.lanes|=f,f=h0(f),p0(f,t,s,l),Hf(s,f),!1}s=s.return}while(s!==null);return!1}var fd=Error(a(461)),bn=!1;function zn(t,i,s,l){i.child=t===null?vg(i,null,s,l):Qs(i,t.child,s,l)}function m0(t,i,s,l,f){s=s.render;var m=i.ref;if("ref"in l){var b={};for(var w in l)w!=="ref"&&(b[w]=l[w])}else b=l;return Ys(i),l=qf(t,i,s,b,m,f),w=Yf(),t!==null&&!bn?(jf(t,i,f),Ma(t,i,f)):(Ct&&w&&Rf(i),i.flags|=1,zn(t,i,l,f),i.child)}function g0(t,i,s,l,f){if(t===null){var m=s.type;return typeof m=="function"&&!Ef(m)&&m.defaultProps===void 0&&s.compare===null?(i.tag=15,i.type=m,_0(t,i,m,l,f)):(t=rc(s.type,null,l,i,i.mode,f),t.ref=i.ref,t.return=i,i.child=t)}if(m=t.child,!xd(t,f)){var b=m.memoizedProps;if(s=s.compare,s=s!==null?s:Vo,s(b,l)&&t.ref===i.ref)return Ma(t,i,f)}return i.flags|=1,t=_a(m,l),t.ref=i.ref,t.return=i,i.child=t}function _0(t,i,s,l,f){if(t!==null){var m=t.memoizedProps;if(Vo(m,l)&&t.ref===i.ref)if(bn=!1,i.pendingProps=l=m,xd(t,f))(t.flags&131072)!==0&&(bn=!0);else return i.lanes=t.lanes,Ma(t,i,f)}return dd(t,i,s,l,f)}function v0(t,i,s,l){var f=l.children,m=t!==null?t.memoizedState:null;if(t===null&&i.stateNode===null&&(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((i.flags&128)!==0){if(m=m!==null?m.baseLanes|s:s,t!==null){for(l=i.child=t.child,f=0;l!==null;)f=f|l.lanes|l.childLanes,l=l.sibling;l=f&~m}else l=0,i.child=null;return x0(t,i,m,s,l)}if((s&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},t!==null&&uc(i,m!==null?m.cachePool:null),m!==null?Sg(i,m):Vf(),bg(i);else return l=i.lanes=536870912,x0(t,i,m!==null?m.baseLanes|s:s,s,l)}else m!==null?(uc(i,m.cachePool),Sg(i,m),us(),i.memoizedState=null):(t!==null&&uc(i,null),Vf(),us());return zn(t,i,f,s),i.child}function il(t,i){return t!==null&&t.tag===22||i.stateNode!==null||(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.sibling}function x0(t,i,s,l,f){var m=If();return m=m===null?null:{parent:yn._currentValue,pool:m},i.memoizedState={baseLanes:s,cachePool:m},t!==null&&uc(i,null),Vf(),bg(i),t!==null&&wr(t,i,l,!0),i.childLanes=f,null}function Ac(t,i){return i=wc({mode:i.mode,children:i.children},t.mode),i.ref=t.ref,t.child=i,i.return=t,i}function y0(t,i,s){return Qs(i,t.child,null,s),t=Ac(i,i.pendingProps),t.flags|=2,hi(i),i.memoizedState=null,t}function QS(t,i,s){var l=i.pendingProps,f=(i.flags&128)!==0;if(i.flags&=-129,t===null){if(Ct){if(l.mode==="hidden")return t=Ac(i,l),i.lanes=536870912,il(null,t);if(Xf(i),(t=tn)?(t=L_(t,Ri),t=t!==null&&t.data==="&"?t:null,t!==null&&(i.memoizedState={dehydrated:t,treeContext:ns!==null?{id:Ki,overflow:Zi}:null,retryLane:536870912,hydrationErrors:null},s=ig(t),s.return=i,i.child=s,Bn=i,tn=null)):t=null,t===null)throw as(i);return i.lanes=536870912,null}return Ac(i,l)}var m=t.memoizedState;if(m!==null){var b=m.dehydrated;if(Xf(i),f)if(i.flags&256)i.flags&=-257,i=y0(t,i,s);else if(i.memoizedState!==null)i.child=t.child,i.flags|=128,i=null;else throw Error(a(558));else if(bn||wr(t,i,s,!1),f=(s&t.childLanes)!==0,bn||f){if(l=Jt,l!==null&&(b=oi(l,s),b!==0&&b!==m.retryLane))throw m.retryLane=b,ks(t,b),ai(l,t,b),fd;Bc(),i=y0(t,i,s)}else t=m.treeContext,tn=Ci(b.nextSibling),Bn=i,Ct=!0,is=null,Ri=!1,t!==null&&rg(i,t),i=Ac(i,l),i.flags|=4096;return i}return t=_a(t.child,{mode:l.mode,children:l.children}),t.ref=i.ref,i.child=t,t.return=i,t}function Rc(t,i){var s=i.ref;if(s===null)t!==null&&t.ref!==null&&(i.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(a(284));(t===null||t.ref!==s)&&(i.flags|=4194816)}}function dd(t,i,s,l,f){return Ys(i),s=qf(t,i,s,l,void 0,f),l=Yf(),t!==null&&!bn?(jf(t,i,f),Ma(t,i,f)):(Ct&&l&&Rf(i),i.flags|=1,zn(t,i,s,f),i.child)}function S0(t,i,s,l,f,m){return Ys(i),i.updateQueue=null,s=Eg(i,l,s,f),Mg(t),l=Yf(),t!==null&&!bn?(jf(t,i,m),Ma(t,i,m)):(Ct&&l&&Rf(i),i.flags|=1,zn(t,i,s,m),i.child)}function b0(t,i,s,l,f){if(Ys(i),i.stateNode===null){var m=Er,b=s.contextType;typeof b=="object"&&b!==null&&(m=Fn(b)),m=new s(l,m),i.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=cd,i.stateNode=m,m._reactInternals=i,m=i.stateNode,m.props=l,m.state=i.memoizedState,m.refs={},Ff(i),b=s.contextType,m.context=typeof b=="object"&&b!==null?Fn(b):Er,m.state=i.memoizedState,b=s.getDerivedStateFromProps,typeof b=="function"&&(ld(i,s,b,l),m.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(b=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),b!==m.state&&cd.enqueueReplaceState(m,m.state,null),Jo(i,l,m,f),Qo(),m.state=i.memoizedState),typeof m.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(t===null){m=i.stateNode;var w=i.memoizedProps,G=$s(s,w);m.props=G;var ne=m.context,he=s.contextType;b=Er,typeof he=="object"&&he!==null&&(b=Fn(he));var xe=s.getDerivedStateFromProps;he=typeof xe=="function"||typeof m.getSnapshotBeforeUpdate=="function",w=i.pendingProps!==w,he||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(w||ne!==b)&&l0(i,m,l,b),rs=!1;var re=i.memoizedState;m.state=re,Jo(i,l,m,f),Qo(),ne=i.memoizedState,w||re!==ne||rs?(typeof xe=="function"&&(ld(i,s,xe,l),ne=i.memoizedState),(G=rs||o0(i,s,G,l,re,ne,b))?(he||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(i.flags|=4194308)):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=ne),m.props=l,m.state=ne,m.context=b,l=G):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{m=i.stateNode,zf(t,i),b=i.memoizedProps,he=$s(s,b),m.props=he,xe=i.pendingProps,re=m.context,ne=s.contextType,G=Er,typeof ne=="object"&&ne!==null&&(G=Fn(ne)),w=s.getDerivedStateFromProps,(ne=typeof w=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(b!==xe||re!==G)&&l0(i,m,l,G),rs=!1,re=i.memoizedState,m.state=re,Jo(i,l,m,f),Qo();var le=i.memoizedState;b!==xe||re!==le||rs||t!==null&&t.dependencies!==null&&lc(t.dependencies)?(typeof w=="function"&&(ld(i,s,w,l),le=i.memoizedState),(he=rs||o0(i,s,he,l,re,le,G)||t!==null&&t.dependencies!==null&&lc(t.dependencies))?(ne||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(l,le,G),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(l,le,G)),typeof m.componentDidUpdate=="function"&&(i.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof m.componentDidUpdate!="function"||b===t.memoizedProps&&re===t.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||b===t.memoizedProps&&re===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=le),m.props=l,m.state=le,m.context=G,l=he):(typeof m.componentDidUpdate!="function"||b===t.memoizedProps&&re===t.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||b===t.memoizedProps&&re===t.memoizedState||(i.flags|=1024),l=!1)}return m=l,Rc(t,i),l=(i.flags&128)!==0,m||l?(m=i.stateNode,s=l&&typeof s.getDerivedStateFromError!="function"?null:m.render(),i.flags|=1,t!==null&&l?(i.child=Qs(i,t.child,null,f),i.child=Qs(i,null,s,f)):zn(t,i,s,f),i.memoizedState=m.state,t=i.child):t=Ma(t,i,f),t}function M0(t,i,s,l){return Ws(),i.flags|=256,zn(t,i,s,l),i.child}var hd={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function pd(t){return{baseLanes:t,cachePool:dg()}}function md(t,i,s){return t=t!==null?t.childLanes&~s:0,i&&(t|=mi),t}function E0(t,i,s){var l=i.pendingProps,f=!1,m=(i.flags&128)!==0,b;if((b=m)||(b=t!==null&&t.memoizedState===null?!1:(mn.current&2)!==0),b&&(f=!0,i.flags&=-129),b=(i.flags&32)!==0,i.flags&=-33,t===null){if(Ct){if(f?cs(i):us(),(t=tn)?(t=L_(t,Ri),t=t!==null&&t.data!=="&"?t:null,t!==null&&(i.memoizedState={dehydrated:t,treeContext:ns!==null?{id:Ki,overflow:Zi}:null,retryLane:536870912,hydrationErrors:null},s=ig(t),s.return=i,i.child=s,Bn=i,tn=null)):t=null,t===null)throw as(i);return Qd(t)?i.lanes=32:i.lanes=536870912,null}var w=l.children;return l=l.fallback,f?(us(),f=i.mode,w=wc({mode:"hidden",children:w},f),l=Xs(l,f,s,null),w.return=i,l.return=i,w.sibling=l,i.child=w,l=i.child,l.memoizedState=pd(s),l.childLanes=md(t,b,s),i.memoizedState=hd,il(null,l)):(cs(i),gd(i,w))}var G=t.memoizedState;if(G!==null&&(w=G.dehydrated,w!==null)){if(m)i.flags&256?(cs(i),i.flags&=-257,i=_d(t,i,s)):i.memoizedState!==null?(us(),i.child=t.child,i.flags|=128,i=null):(us(),w=l.fallback,f=i.mode,l=wc({mode:"visible",children:l.children},f),w=Xs(w,f,s,null),w.flags|=2,l.return=i,w.return=i,l.sibling=w,i.child=l,Qs(i,t.child,null,s),l=i.child,l.memoizedState=pd(s),l.childLanes=md(t,b,s),i.memoizedState=hd,i=il(null,l));else if(cs(i),Qd(w)){if(b=w.nextSibling&&w.nextSibling.dataset,b)var ne=b.dgst;b=ne,l=Error(a(419)),l.stack="",l.digest=b,Wo({value:l,source:null,stack:null}),i=_d(t,i,s)}else if(bn||wr(t,i,s,!1),b=(s&t.childLanes)!==0,bn||b){if(b=Jt,b!==null&&(l=oi(b,s),l!==0&&l!==G.retryLane))throw G.retryLane=l,ks(t,l),ai(b,t,l),fd;Zd(w)||Bc(),i=_d(t,i,s)}else Zd(w)?(i.flags|=192,i.child=t.child,i=null):(t=G.treeContext,tn=Ci(w.nextSibling),Bn=i,Ct=!0,is=null,Ri=!1,t!==null&&rg(i,t),i=gd(i,l.children),i.flags|=4096);return i}return f?(us(),w=l.fallback,f=i.mode,G=t.child,ne=G.sibling,l=_a(G,{mode:"hidden",children:l.children}),l.subtreeFlags=G.subtreeFlags&65011712,ne!==null?w=_a(ne,w):(w=Xs(w,f,s,null),w.flags|=2),w.return=i,l.return=i,l.sibling=w,i.child=l,il(null,l),l=i.child,w=t.child.memoizedState,w===null?w=pd(s):(f=w.cachePool,f!==null?(G=yn._currentValue,f=f.parent!==G?{parent:G,pool:G}:f):f=dg(),w={baseLanes:w.baseLanes|s,cachePool:f}),l.memoizedState=w,l.childLanes=md(t,b,s),i.memoizedState=hd,il(t.child,l)):(cs(i),s=t.child,t=s.sibling,s=_a(s,{mode:"visible",children:l.children}),s.return=i,s.sibling=null,t!==null&&(b=i.deletions,b===null?(i.deletions=[t],i.flags|=16):b.push(t)),i.child=s,i.memoizedState=null,s)}function gd(t,i){return i=wc({mode:"visible",children:i},t.mode),i.return=t,t.child=i}function wc(t,i){return t=fi(22,t,null,i),t.lanes=0,t}function _d(t,i,s){return Qs(i,t.child,null,s),t=gd(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function T0(t,i,s){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),Lf(t.return,i,s)}function vd(t,i,s,l,f,m){var b=t.memoizedState;b===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:s,tailMode:f,treeForkCount:m}:(b.isBackwards=i,b.rendering=null,b.renderingStartTime=0,b.last=l,b.tail=s,b.tailMode=f,b.treeForkCount=m)}function A0(t,i,s){var l=i.pendingProps,f=l.revealOrder,m=l.tail;l=l.children;var b=mn.current,w=(b&2)!==0;if(w?(b=b&1|2,i.flags|=128):b&=1,ge(mn,b),zn(t,i,l,s),l=Ct?Xo:0,!w&&t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&T0(t,s,i);else if(t.tag===19)T0(t,s,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(f){case"forwards":for(s=i.child,f=null;s!==null;)t=s.alternate,t!==null&&gc(t)===null&&(f=s),s=s.sibling;s=f,s===null?(f=i.child,i.child=null):(f=s.sibling,s.sibling=null),vd(i,!1,f,s,m,l);break;case"backwards":case"unstable_legacy-backwards":for(s=null,f=i.child,i.child=null;f!==null;){if(t=f.alternate,t!==null&&gc(t)===null){i.child=f;break}t=f.sibling,f.sibling=s,s=f,f=t}vd(i,!0,s,null,m,l);break;case"together":vd(i,!1,null,null,void 0,l);break;default:i.memoizedState=null}return i.child}function Ma(t,i,s){if(t!==null&&(i.dependencies=t.dependencies),hs|=i.lanes,(s&i.childLanes)===0)if(t!==null){if(wr(t,i,s,!1),(s&i.childLanes)===0)return null}else return null;if(t!==null&&i.child!==t.child)throw Error(a(153));if(i.child!==null){for(t=i.child,s=_a(t,t.pendingProps),i.child=s,s.return=i;t.sibling!==null;)t=t.sibling,s=s.sibling=_a(t,t.pendingProps),s.return=i;s.sibling=null}return i.child}function xd(t,i){return(t.lanes&i)!==0?!0:(t=t.dependencies,!!(t!==null&&lc(t)))}function JS(t,i,s){switch(i.tag){case 3:Te(i,i.stateNode.containerInfo),ss(i,yn,t.memoizedState.cache),Ws();break;case 27:case 5:et(i);break;case 4:Te(i,i.stateNode.containerInfo);break;case 10:ss(i,i.type,i.memoizedProps.value);break;case 31:if(i.memoizedState!==null)return i.flags|=128,Xf(i),null;break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(cs(i),i.flags|=128,null):(s&i.child.childLanes)!==0?E0(t,i,s):(cs(i),t=Ma(t,i,s),t!==null?t.sibling:null);cs(i);break;case 19:var f=(t.flags&128)!==0;if(l=(s&i.childLanes)!==0,l||(wr(t,i,s,!1),l=(s&i.childLanes)!==0),f){if(l)return A0(t,i,s);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),ge(mn,mn.current),l)break;return null;case 22:return i.lanes=0,v0(t,i,s,i.pendingProps);case 24:ss(i,yn,t.memoizedState.cache)}return Ma(t,i,s)}function R0(t,i,s){if(t!==null)if(t.memoizedProps!==i.pendingProps)bn=!0;else{if(!xd(t,s)&&(i.flags&128)===0)return bn=!1,JS(t,i,s);bn=(t.flags&131072)!==0}else bn=!1,Ct&&(i.flags&1048576)!==0&&sg(i,Xo,i.index);switch(i.lanes=0,i.tag){case 16:e:{var l=i.pendingProps;if(t=Ks(i.elementType),i.type=t,typeof t=="function")Ef(t)?(l=$s(t,l),i.tag=1,i=b0(null,i,t,l,s)):(i.tag=0,i=dd(null,i,t,l,s));else{if(t!=null){var f=t.$$typeof;if(f===U){i.tag=11,i=m0(null,i,t,l,s);break e}else if(f===I){i.tag=14,i=g0(null,i,t,l,s);break e}}throw i=fe(t)||t,Error(a(306,i,""))}}return i;case 0:return dd(t,i,i.type,i.pendingProps,s);case 1:return l=i.type,f=$s(l,i.pendingProps),b0(t,i,l,f,s);case 3:e:{if(Te(i,i.stateNode.containerInfo),t===null)throw Error(a(387));l=i.pendingProps;var m=i.memoizedState;f=m.element,zf(t,i),Jo(i,l,null,s);var b=i.memoizedState;if(l=b.cache,ss(i,yn,l),l!==m.cache&&Uf(i,[yn],s,!0),Qo(),l=b.element,m.isDehydrated)if(m={element:l,isDehydrated:!1,cache:b.cache},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){i=M0(t,i,l,s);break e}else if(l!==f){f=Ei(Error(a(424)),i),Wo(f),i=M0(t,i,l,s);break e}else{switch(t=i.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(tn=Ci(t.firstChild),Bn=i,Ct=!0,is=null,Ri=!0,s=vg(i,null,l,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling}else{if(Ws(),l===f){i=Ma(t,i,s);break e}zn(t,i,l,s)}i=i.child}return i;case 26:return Rc(t,i),t===null?(s=F_(i.type,null,i.pendingProps,null))?i.memoizedState=s:Ct||(s=i.type,t=i.pendingProps,l=Xc(ee.current).createElement(s),l[pn]=i,l[In]=t,Hn(l,s,t),xn(l),i.stateNode=l):i.memoizedState=F_(i.type,t.memoizedProps,i.pendingProps,t.memoizedState),null;case 27:return et(i),t===null&&Ct&&(l=i.stateNode=P_(i.type,i.pendingProps,ee.current),Bn=i,Ri=!0,f=tn,vs(i.type)?(Jd=f,tn=Ci(l.firstChild)):tn=f),zn(t,i,i.pendingProps.children,s),Rc(t,i),t===null&&(i.flags|=4194304),i.child;case 5:return t===null&&Ct&&((f=l=tn)&&(l=wb(l,i.type,i.pendingProps,Ri),l!==null?(i.stateNode=l,Bn=i,tn=Ci(l.firstChild),Ri=!1,f=!0):f=!1),f||as(i)),et(i),f=i.type,m=i.pendingProps,b=t!==null?t.memoizedProps:null,l=m.children,Yd(f,m)?l=null:b!==null&&Yd(f,b)&&(i.flags|=32),i.memoizedState!==null&&(f=qf(t,i,kS,null,null,s),vl._currentValue=f),Rc(t,i),zn(t,i,l,s),i.child;case 6:return t===null&&Ct&&((t=s=tn)&&(s=Cb(s,i.pendingProps,Ri),s!==null?(i.stateNode=s,Bn=i,tn=null,t=!0):t=!1),t||as(i)),null;case 13:return E0(t,i,s);case 4:return Te(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=Qs(i,null,l,s):zn(t,i,l,s),i.child;case 11:return m0(t,i,i.type,i.pendingProps,s);case 7:return zn(t,i,i.pendingProps,s),i.child;case 8:return zn(t,i,i.pendingProps.children,s),i.child;case 12:return zn(t,i,i.pendingProps.children,s),i.child;case 10:return l=i.pendingProps,ss(i,i.type,l.value),zn(t,i,l.children,s),i.child;case 9:return f=i.type._context,l=i.pendingProps.children,Ys(i),f=Fn(f),l=l(f),i.flags|=1,zn(t,i,l,s),i.child;case 14:return g0(t,i,i.type,i.pendingProps,s);case 15:return _0(t,i,i.type,i.pendingProps,s);case 19:return A0(t,i,s);case 31:return QS(t,i,s);case 22:return v0(t,i,s,i.pendingProps);case 24:return Ys(i),l=Fn(yn),t===null?(f=If(),f===null&&(f=Jt,m=Of(),f.pooledCache=m,m.refCount++,m!==null&&(f.pooledCacheLanes|=s),f=m),i.memoizedState={parent:l,cache:f},Ff(i),ss(i,yn,f)):((t.lanes&s)!==0&&(zf(t,i),Jo(i,null,null,s),Qo()),f=t.memoizedState,m=i.memoizedState,f.parent!==l?(f={parent:l,cache:l},i.memoizedState=f,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=f),ss(i,yn,l)):(l=m.cache,ss(i,yn,l),l!==f.cache&&Uf(i,[yn],s,!0))),zn(t,i,i.pendingProps.children,s),i.child;case 29:throw i.pendingProps}throw Error(a(156,i.tag))}function Ea(t){t.flags|=4}function yd(t,i,s,l,f){if((i=(t.mode&32)!==0)&&(i=!1),i){if(t.flags|=16777216,(f&335544128)===f)if(t.stateNode.complete)t.flags|=8192;else if(e_())t.flags|=8192;else throw Zs=dc,Bf}else t.flags&=-16777217}function w0(t,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!k_(i))if(e_())t.flags|=8192;else throw Zs=dc,Bf}function Cc(t,i){i!==null&&(t.flags|=4),t.flags&16384&&(i=t.tag!==22?Me():536870912,t.lanes|=i,Hr|=i)}function al(t,i){if(!Ct)switch(t.tailMode){case"hidden":i=t.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?t.tail=null:s.sibling=null;break;case"collapsed":s=t.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function nn(t){var i=t.alternate!==null&&t.alternate.child===t.child,s=0,l=0;if(i)for(var f=t.child;f!==null;)s|=f.lanes|f.childLanes,l|=f.subtreeFlags&65011712,l|=f.flags&65011712,f.return=t,f=f.sibling;else for(f=t.child;f!==null;)s|=f.lanes|f.childLanes,l|=f.subtreeFlags,l|=f.flags,f.return=t,f=f.sibling;return t.subtreeFlags|=l,t.childLanes=s,i}function $S(t,i,s){var l=i.pendingProps;switch(wf(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return nn(i),null;case 1:return nn(i),null;case 3:return s=i.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),ya(yn),Re(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(t===null||t.child===null)&&(Rr(i)?Ea(i):t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Df())),nn(i),null;case 26:var f=i.type,m=i.memoizedState;return t===null?(Ea(i),m!==null?(nn(i),w0(i,m)):(nn(i),yd(i,f,null,l,s))):m?m!==t.memoizedState?(Ea(i),nn(i),w0(i,m)):(nn(i),i.flags&=-16777217):(t=t.memoizedProps,t!==l&&Ea(i),nn(i),yd(i,f,t,l,s)),null;case 27:if(Ze(i),s=ee.current,f=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==l&&Ea(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return nn(i),null}t=ye.current,Rr(i)?og(i):(t=P_(f,l,s),i.stateNode=t,Ea(i))}return nn(i),null;case 5:if(Ze(i),f=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==l&&Ea(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return nn(i),null}if(m=ye.current,Rr(i))og(i);else{var b=Xc(ee.current);switch(m){case 1:m=b.createElementNS("http://www.w3.org/2000/svg",f);break;case 2:m=b.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;default:switch(f){case"svg":m=b.createElementNS("http://www.w3.org/2000/svg",f);break;case"math":m=b.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;case"script":m=b.createElement("div"),m.innerHTML="<script><\/script>",m=m.removeChild(m.firstChild);break;case"select":m=typeof l.is=="string"?b.createElement("select",{is:l.is}):b.createElement("select"),l.multiple?m.multiple=!0:l.size&&(m.size=l.size);break;default:m=typeof l.is=="string"?b.createElement(f,{is:l.is}):b.createElement(f)}}m[pn]=i,m[In]=l;e:for(b=i.child;b!==null;){if(b.tag===5||b.tag===6)m.appendChild(b.stateNode);else if(b.tag!==4&&b.tag!==27&&b.child!==null){b.child.return=b,b=b.child;continue}if(b===i)break e;for(;b.sibling===null;){if(b.return===null||b.return===i)break e;b=b.return}b.sibling.return=b.return,b=b.sibling}i.stateNode=m;e:switch(Hn(m,f,l),f){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&Ea(i)}}return nn(i),yd(i,i.type,t===null?null:t.memoizedProps,i.pendingProps,s),null;case 6:if(t&&i.stateNode!=null)t.memoizedProps!==l&&Ea(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(a(166));if(t=ee.current,Rr(i)){if(t=i.stateNode,s=i.memoizedProps,l=null,f=Bn,f!==null)switch(f.tag){case 27:case 5:l=f.memoizedProps}t[pn]=i,t=!!(t.nodeValue===s||l!==null&&l.suppressHydrationWarning===!0||E_(t.nodeValue,s)),t||as(i,!0)}else t=Xc(t).createTextNode(l),t[pn]=i,i.stateNode=t}return nn(i),null;case 31:if(s=i.memoizedState,t===null||t.memoizedState!==null){if(l=Rr(i),s!==null){if(t===null){if(!l)throw Error(a(318));if(t=i.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(557));t[pn]=i}else Ws(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;nn(i),t=!1}else s=Df(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=s),t=!0;if(!t)return i.flags&256?(hi(i),i):(hi(i),null);if((i.flags&128)!==0)throw Error(a(558))}return nn(i),null;case 13:if(l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(f=Rr(i),l!==null&&l.dehydrated!==null){if(t===null){if(!f)throw Error(a(318));if(f=i.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(a(317));f[pn]=i}else Ws(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;nn(i),f=!1}else f=Df(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=f),f=!0;if(!f)return i.flags&256?(hi(i),i):(hi(i),null)}return hi(i),(i.flags&128)!==0?(i.lanes=s,i):(s=l!==null,t=t!==null&&t.memoizedState!==null,s&&(l=i.child,f=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(f=l.alternate.memoizedState.cachePool.pool),m=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(m=l.memoizedState.cachePool.pool),m!==f&&(l.flags|=2048)),s!==t&&s&&(i.child.flags|=8192),Cc(i,i.updateQueue),nn(i),null);case 4:return Re(),t===null&&Vd(i.stateNode.containerInfo),nn(i),null;case 10:return ya(i.type),nn(i),null;case 19:if(K(mn),l=i.memoizedState,l===null)return nn(i),null;if(f=(i.flags&128)!==0,m=l.rendering,m===null)if(f)al(l,!1);else{if(dn!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(m=gc(t),m!==null){for(i.flags|=128,al(l,!1),t=m.updateQueue,i.updateQueue=t,Cc(i,t),i.subtreeFlags=0,t=s,s=i.child;s!==null;)ng(s,t),s=s.sibling;return ge(mn,mn.current&1|2),Ct&&va(i,l.treeForkCount),i.child}t=t.sibling}l.tail!==null&&we()>Oc&&(i.flags|=128,f=!0,al(l,!1),i.lanes=4194304)}else{if(!f)if(t=gc(m),t!==null){if(i.flags|=128,f=!0,t=t.updateQueue,i.updateQueue=t,Cc(i,t),al(l,!0),l.tail===null&&l.tailMode==="hidden"&&!m.alternate&&!Ct)return nn(i),null}else 2*we()-l.renderingStartTime>Oc&&s!==536870912&&(i.flags|=128,f=!0,al(l,!1),i.lanes=4194304);l.isBackwards?(m.sibling=i.child,i.child=m):(t=l.last,t!==null?t.sibling=m:i.child=m,l.last=m)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=we(),t.sibling=null,s=mn.current,ge(mn,f?s&1|2:s&1),Ct&&va(i,l.treeForkCount),t):(nn(i),null);case 22:case 23:return hi(i),kf(),l=i.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(s&536870912)!==0&&(i.flags&128)===0&&(nn(i),i.subtreeFlags&6&&(i.flags|=8192)):nn(i),s=i.updateQueue,s!==null&&Cc(i,s.retryQueue),s=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==s&&(i.flags|=2048),t!==null&&K(js),null;case 24:return s=null,t!==null&&(s=t.memoizedState.cache),i.memoizedState.cache!==s&&(i.flags|=2048),ya(yn),nn(i),null;case 25:return null;case 30:return null}throw Error(a(156,i.tag))}function eb(t,i){switch(wf(i),i.tag){case 1:return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return ya(yn),Re(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 26:case 27:case 5:return Ze(i),null;case 31:if(i.memoizedState!==null){if(hi(i),i.alternate===null)throw Error(a(340));Ws()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 13:if(hi(i),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(a(340));Ws()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return K(mn),null;case 4:return Re(),null;case 10:return ya(i.type),null;case 22:case 23:return hi(i),kf(),t!==null&&K(js),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 24:return ya(yn),null;case 25:return null;default:return null}}function C0(t,i){switch(wf(i),i.tag){case 3:ya(yn),Re();break;case 26:case 27:case 5:Ze(i);break;case 4:Re();break;case 31:i.memoizedState!==null&&hi(i);break;case 13:hi(i);break;case 19:K(mn);break;case 10:ya(i.type);break;case 22:case 23:hi(i),kf(),t!==null&&K(js);break;case 24:ya(yn)}}function sl(t,i){try{var s=i.updateQueue,l=s!==null?s.lastEffect:null;if(l!==null){var f=l.next;s=f;do{if((s.tag&t)===t){l=void 0;var m=s.create,b=s.inst;l=m(),b.destroy=l}s=s.next}while(s!==f)}}catch(w){kt(i,i.return,w)}}function fs(t,i,s){try{var l=i.updateQueue,f=l!==null?l.lastEffect:null;if(f!==null){var m=f.next;l=m;do{if((l.tag&t)===t){var b=l.inst,w=b.destroy;if(w!==void 0){b.destroy=void 0,f=i;var G=s,ne=w;try{ne()}catch(he){kt(f,G,he)}}}l=l.next}while(l!==m)}}catch(he){kt(i,i.return,he)}}function D0(t){var i=t.updateQueue;if(i!==null){var s=t.stateNode;try{yg(i,s)}catch(l){kt(t,t.return,l)}}}function N0(t,i,s){s.props=$s(t.type,t.memoizedProps),s.state=t.memoizedState;try{s.componentWillUnmount()}catch(l){kt(t,i,l)}}function rl(t,i){try{var s=t.ref;if(s!==null){switch(t.tag){case 26:case 27:case 5:var l=t.stateNode;break;case 30:l=t.stateNode;break;default:l=t.stateNode}typeof s=="function"?t.refCleanup=s(l):s.current=l}}catch(f){kt(t,i,f)}}function Qi(t,i){var s=t.ref,l=t.refCleanup;if(s!==null)if(typeof l=="function")try{l()}catch(f){kt(t,i,f)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(f){kt(t,i,f)}else s.current=null}function L0(t){var i=t.type,s=t.memoizedProps,l=t.stateNode;try{e:switch(i){case"button":case"input":case"select":case"textarea":s.autoFocus&&l.focus();break e;case"img":s.src?l.src=s.src:s.srcSet&&(l.srcset=s.srcSet)}}catch(f){kt(t,t.return,f)}}function Sd(t,i,s){try{var l=t.stateNode;bb(l,t.type,s,i),l[In]=i}catch(f){kt(t,t.return,f)}}function U0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&vs(t.type)||t.tag===4}function bd(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||U0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&vs(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Md(t,i,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(t,i):(i=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,i.appendChild(t),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=ma));else if(l!==4&&(l===27&&vs(t.type)&&(s=t.stateNode,i=null),t=t.child,t!==null))for(Md(t,i,s),t=t.sibling;t!==null;)Md(t,i,s),t=t.sibling}function Dc(t,i,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?s.insertBefore(t,i):s.appendChild(t);else if(l!==4&&(l===27&&vs(t.type)&&(s=t.stateNode),t=t.child,t!==null))for(Dc(t,i,s),t=t.sibling;t!==null;)Dc(t,i,s),t=t.sibling}function O0(t){var i=t.stateNode,s=t.memoizedProps;try{for(var l=t.type,f=i.attributes;f.length;)i.removeAttributeNode(f[0]);Hn(i,l,s),i[pn]=t,i[In]=s}catch(m){kt(t,t.return,m)}}var Ta=!1,Mn=!1,Ed=!1,P0=typeof WeakSet=="function"?WeakSet:Set,Ln=null;function tb(t,i){if(t=t.containerInfo,Wd=Qc,t=Ym(t),_f(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else e:{s=(s=t.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var f=l.anchorOffset,m=l.focusNode;l=l.focusOffset;try{s.nodeType,m.nodeType}catch{s=null;break e}var b=0,w=-1,G=-1,ne=0,he=0,xe=t,re=null;t:for(;;){for(var le;xe!==s||f!==0&&xe.nodeType!==3||(w=b+f),xe!==m||l!==0&&xe.nodeType!==3||(G=b+l),xe.nodeType===3&&(b+=xe.nodeValue.length),(le=xe.firstChild)!==null;)re=xe,xe=le;for(;;){if(xe===t)break t;if(re===s&&++ne===f&&(w=b),re===m&&++he===l&&(G=b),(le=xe.nextSibling)!==null)break;xe=re,re=xe.parentNode}xe=le}s=w===-1||G===-1?null:{start:w,end:G}}else s=null}s=s||{start:0,end:0}}else s=null;for(qd={focusedElem:t,selectionRange:s},Qc=!1,Ln=i;Ln!==null;)if(i=Ln,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,Ln=t;else for(;Ln!==null;){switch(i=Ln,m=i.alternate,t=i.flags,i.tag){case 0:if((t&4)!==0&&(t=i.updateQueue,t=t!==null?t.events:null,t!==null))for(s=0;s<t.length;s++)f=t[s],f.ref.impl=f.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&m!==null){t=void 0,s=i,f=m.memoizedProps,m=m.memoizedState,l=s.stateNode;try{var qe=$s(s.type,f);t=l.getSnapshotBeforeUpdate(qe,m),l.__reactInternalSnapshotBeforeUpdate=t}catch(tt){kt(s,s.return,tt)}}break;case 3:if((t&1024)!==0){if(t=i.stateNode.containerInfo,s=t.nodeType,s===9)Kd(t);else if(s===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Kd(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(a(163))}if(t=i.sibling,t!==null){t.return=i.return,Ln=t;break}Ln=i.return}}function I0(t,i,s){var l=s.flags;switch(s.tag){case 0:case 11:case 15:Ra(t,s),l&4&&sl(5,s);break;case 1:if(Ra(t,s),l&4)if(t=s.stateNode,i===null)try{t.componentDidMount()}catch(b){kt(s,s.return,b)}else{var f=$s(s.type,i.memoizedProps);i=i.memoizedState;try{t.componentDidUpdate(f,i,t.__reactInternalSnapshotBeforeUpdate)}catch(b){kt(s,s.return,b)}}l&64&&D0(s),l&512&&rl(s,s.return);break;case 3:if(Ra(t,s),l&64&&(t=s.updateQueue,t!==null)){if(i=null,s.child!==null)switch(s.child.tag){case 27:case 5:i=s.child.stateNode;break;case 1:i=s.child.stateNode}try{yg(t,i)}catch(b){kt(s,s.return,b)}}break;case 27:i===null&&l&4&&O0(s);case 26:case 5:Ra(t,s),i===null&&l&4&&L0(s),l&512&&rl(s,s.return);break;case 12:Ra(t,s);break;case 31:Ra(t,s),l&4&&z0(t,s);break;case 13:Ra(t,s),l&4&&H0(t,s),l&64&&(t=s.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(s=ub.bind(null,s),Db(t,s))));break;case 22:if(l=s.memoizedState!==null||Ta,!l){i=i!==null&&i.memoizedState!==null||Mn,f=Ta;var m=Mn;Ta=l,(Mn=i)&&!m?wa(t,s,(s.subtreeFlags&8772)!==0):Ra(t,s),Ta=f,Mn=m}break;case 30:break;default:Ra(t,s)}}function B0(t){var i=t.alternate;i!==null&&(t.alternate=null,B0(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&Oo(i)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var on=null,ei=!1;function Aa(t,i,s){for(s=s.child;s!==null;)F0(t,i,s),s=s.sibling}function F0(t,i,s){if(de&&typeof de.onCommitFiberUnmount=="function")try{de.onCommitFiberUnmount(ue,s)}catch{}switch(s.tag){case 26:Mn||Qi(s,i),Aa(t,i,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:Mn||Qi(s,i);var l=on,f=ei;vs(s.type)&&(on=s.stateNode,ei=!1),Aa(t,i,s),ml(s.stateNode),on=l,ei=f;break;case 5:Mn||Qi(s,i);case 6:if(l=on,f=ei,on=null,Aa(t,i,s),on=l,ei=f,on!==null)if(ei)try{(on.nodeType===9?on.body:on.nodeName==="HTML"?on.ownerDocument.body:on).removeChild(s.stateNode)}catch(m){kt(s,i,m)}else try{on.removeChild(s.stateNode)}catch(m){kt(s,i,m)}break;case 18:on!==null&&(ei?(t=on,D_(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,s.stateNode),jr(t)):D_(on,s.stateNode));break;case 4:l=on,f=ei,on=s.stateNode.containerInfo,ei=!0,Aa(t,i,s),on=l,ei=f;break;case 0:case 11:case 14:case 15:fs(2,s,i),Mn||fs(4,s,i),Aa(t,i,s);break;case 1:Mn||(Qi(s,i),l=s.stateNode,typeof l.componentWillUnmount=="function"&&N0(s,i,l)),Aa(t,i,s);break;case 21:Aa(t,i,s);break;case 22:Mn=(l=Mn)||s.memoizedState!==null,Aa(t,i,s),Mn=l;break;default:Aa(t,i,s)}}function z0(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{jr(t)}catch(s){kt(i,i.return,s)}}}function H0(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{jr(t)}catch(s){kt(i,i.return,s)}}function nb(t){switch(t.tag){case 31:case 13:case 19:var i=t.stateNode;return i===null&&(i=t.stateNode=new P0),i;case 22:return t=t.stateNode,i=t._retryCache,i===null&&(i=t._retryCache=new P0),i;default:throw Error(a(435,t.tag))}}function Nc(t,i){var s=nb(t);i.forEach(function(l){if(!s.has(l)){s.add(l);var f=fb.bind(null,t,l);l.then(f,f)}})}function ti(t,i){var s=i.deletions;if(s!==null)for(var l=0;l<s.length;l++){var f=s[l],m=t,b=i,w=b;e:for(;w!==null;){switch(w.tag){case 27:if(vs(w.type)){on=w.stateNode,ei=!1;break e}break;case 5:on=w.stateNode,ei=!1;break e;case 3:case 4:on=w.stateNode.containerInfo,ei=!0;break e}w=w.return}if(on===null)throw Error(a(160));F0(m,b,f),on=null,ei=!1,m=f.alternate,m!==null&&(m.return=null),f.return=null}if(i.subtreeFlags&13886)for(i=i.child;i!==null;)G0(i,t),i=i.sibling}var Fi=null;function G0(t,i){var s=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:ti(i,t),ni(t),l&4&&(fs(3,t,t.return),sl(3,t),fs(5,t,t.return));break;case 1:ti(i,t),ni(t),l&512&&(Mn||s===null||Qi(s,s.return)),l&64&&Ta&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(s=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=s===null?l:s.concat(l))));break;case 26:var f=Fi;if(ti(i,t),ni(t),l&512&&(Mn||s===null||Qi(s,s.return)),l&4){var m=s!==null?s.memoizedState:null;if(l=t.memoizedState,s===null)if(l===null)if(t.stateNode===null){e:{l=t.type,s=t.memoizedProps,f=f.ownerDocument||f;t:switch(l){case"title":m=f.getElementsByTagName("title")[0],(!m||m[Za]||m[pn]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=f.createElement(l),f.head.insertBefore(m,f.querySelector("head > title"))),Hn(m,l,s),m[pn]=t,xn(m),l=m;break e;case"link":var b=G_("link","href",f).get(l+(s.href||""));if(b){for(var w=0;w<b.length;w++)if(m=b[w],m.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&m.getAttribute("rel")===(s.rel==null?null:s.rel)&&m.getAttribute("title")===(s.title==null?null:s.title)&&m.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){b.splice(w,1);break t}}m=f.createElement(l),Hn(m,l,s),f.head.appendChild(m);break;case"meta":if(b=G_("meta","content",f).get(l+(s.content||""))){for(w=0;w<b.length;w++)if(m=b[w],m.getAttribute("content")===(s.content==null?null:""+s.content)&&m.getAttribute("name")===(s.name==null?null:s.name)&&m.getAttribute("property")===(s.property==null?null:s.property)&&m.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&m.getAttribute("charset")===(s.charSet==null?null:s.charSet)){b.splice(w,1);break t}}m=f.createElement(l),Hn(m,l,s),f.head.appendChild(m);break;default:throw Error(a(468,l))}m[pn]=t,xn(m),l=m}t.stateNode=l}else V_(f,t.type,t.stateNode);else t.stateNode=H_(f,l,t.memoizedProps);else m!==l?(m===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):m.count--,l===null?V_(f,t.type,t.stateNode):H_(f,l,t.memoizedProps)):l===null&&t.stateNode!==null&&Sd(t,t.memoizedProps,s.memoizedProps)}break;case 27:ti(i,t),ni(t),l&512&&(Mn||s===null||Qi(s,s.return)),s!==null&&l&4&&Sd(t,t.memoizedProps,s.memoizedProps);break;case 5:if(ti(i,t),ni(t),l&512&&(Mn||s===null||Qi(s,s.return)),t.flags&32){f=t.stateNode;try{ci(f,"")}catch(qe){kt(t,t.return,qe)}}l&4&&t.stateNode!=null&&(f=t.memoizedProps,Sd(t,f,s!==null?s.memoizedProps:f)),l&1024&&(Ed=!0);break;case 6:if(ti(i,t),ni(t),l&4){if(t.stateNode===null)throw Error(a(162));l=t.memoizedProps,s=t.stateNode;try{s.nodeValue=l}catch(qe){kt(t,t.return,qe)}}break;case 3:if(Yc=null,f=Fi,Fi=Wc(i.containerInfo),ti(i,t),Fi=f,ni(t),l&4&&s!==null&&s.memoizedState.isDehydrated)try{jr(i.containerInfo)}catch(qe){kt(t,t.return,qe)}Ed&&(Ed=!1,V0(t));break;case 4:l=Fi,Fi=Wc(t.stateNode.containerInfo),ti(i,t),ni(t),Fi=l;break;case 12:ti(i,t),ni(t);break;case 31:ti(i,t),ni(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Nc(t,l)));break;case 13:ti(i,t),ni(t),t.child.flags&8192&&t.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(Uc=we()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Nc(t,l)));break;case 22:f=t.memoizedState!==null;var G=s!==null&&s.memoizedState!==null,ne=Ta,he=Mn;if(Ta=ne||f,Mn=he||G,ti(i,t),Mn=he,Ta=ne,ni(t),l&8192)e:for(i=t.stateNode,i._visibility=f?i._visibility&-2:i._visibility|1,f&&(s===null||G||Ta||Mn||er(t)),s=null,i=t;;){if(i.tag===5||i.tag===26){if(s===null){G=s=i;try{if(m=G.stateNode,f)b=m.style,typeof b.setProperty=="function"?b.setProperty("display","none","important"):b.display="none";else{w=G.stateNode;var xe=G.memoizedProps.style,re=xe!=null&&xe.hasOwnProperty("display")?xe.display:null;w.style.display=re==null||typeof re=="boolean"?"":(""+re).trim()}}catch(qe){kt(G,G.return,qe)}}}else if(i.tag===6){if(s===null){G=i;try{G.stateNode.nodeValue=f?"":G.memoizedProps}catch(qe){kt(G,G.return,qe)}}}else if(i.tag===18){if(s===null){G=i;try{var le=G.stateNode;f?N_(le,!0):N_(G.stateNode,!1)}catch(qe){kt(G,G.return,qe)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===t)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;s===i&&(s=null),i=i.return}s===i&&(s=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=t.updateQueue,l!==null&&(s=l.retryQueue,s!==null&&(l.retryQueue=null,Nc(t,s))));break;case 19:ti(i,t),ni(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Nc(t,l)));break;case 30:break;case 21:break;default:ti(i,t),ni(t)}}function ni(t){var i=t.flags;if(i&2){try{for(var s,l=t.return;l!==null;){if(U0(l)){s=l;break}l=l.return}if(s==null)throw Error(a(160));switch(s.tag){case 27:var f=s.stateNode,m=bd(t);Dc(t,m,f);break;case 5:var b=s.stateNode;s.flags&32&&(ci(b,""),s.flags&=-33);var w=bd(t);Dc(t,w,b);break;case 3:case 4:var G=s.stateNode.containerInfo,ne=bd(t);Md(t,ne,G);break;default:throw Error(a(161))}}catch(he){kt(t,t.return,he)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function V0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var i=t;V0(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),t=t.sibling}}function Ra(t,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)I0(t,i.alternate,i),i=i.sibling}function er(t){for(t=t.child;t!==null;){var i=t;switch(i.tag){case 0:case 11:case 14:case 15:fs(4,i,i.return),er(i);break;case 1:Qi(i,i.return);var s=i.stateNode;typeof s.componentWillUnmount=="function"&&N0(i,i.return,s),er(i);break;case 27:ml(i.stateNode);case 26:case 5:Qi(i,i.return),er(i);break;case 22:i.memoizedState===null&&er(i);break;case 30:er(i);break;default:er(i)}t=t.sibling}}function wa(t,i,s){for(s=s&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,f=t,m=i,b=m.flags;switch(m.tag){case 0:case 11:case 15:wa(f,m,s),sl(4,m);break;case 1:if(wa(f,m,s),l=m,f=l.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(ne){kt(l,l.return,ne)}if(l=m,f=l.updateQueue,f!==null){var w=l.stateNode;try{var G=f.shared.hiddenCallbacks;if(G!==null)for(f.shared.hiddenCallbacks=null,f=0;f<G.length;f++)xg(G[f],w)}catch(ne){kt(l,l.return,ne)}}s&&b&64&&D0(m),rl(m,m.return);break;case 27:O0(m);case 26:case 5:wa(f,m,s),s&&l===null&&b&4&&L0(m),rl(m,m.return);break;case 12:wa(f,m,s);break;case 31:wa(f,m,s),s&&b&4&&z0(f,m);break;case 13:wa(f,m,s),s&&b&4&&H0(f,m);break;case 22:m.memoizedState===null&&wa(f,m,s),rl(m,m.return);break;case 30:break;default:wa(f,m,s)}i=i.sibling}}function Td(t,i){var s=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),t=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(t=i.memoizedState.cachePool.pool),t!==s&&(t!=null&&t.refCount++,s!=null&&qo(s))}function Ad(t,i){t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&qo(t))}function zi(t,i,s,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)k0(t,i,s,l),i=i.sibling}function k0(t,i,s,l){var f=i.flags;switch(i.tag){case 0:case 11:case 15:zi(t,i,s,l),f&2048&&sl(9,i);break;case 1:zi(t,i,s,l);break;case 3:zi(t,i,s,l),f&2048&&(t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&qo(t)));break;case 12:if(f&2048){zi(t,i,s,l),t=i.stateNode;try{var m=i.memoizedProps,b=m.id,w=m.onPostCommit;typeof w=="function"&&w(b,i.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(G){kt(i,i.return,G)}}else zi(t,i,s,l);break;case 31:zi(t,i,s,l);break;case 13:zi(t,i,s,l);break;case 23:break;case 22:m=i.stateNode,b=i.alternate,i.memoizedState!==null?m._visibility&2?zi(t,i,s,l):ol(t,i):m._visibility&2?zi(t,i,s,l):(m._visibility|=2,Br(t,i,s,l,(i.subtreeFlags&10256)!==0||!1)),f&2048&&Td(b,i);break;case 24:zi(t,i,s,l),f&2048&&Ad(i.alternate,i);break;default:zi(t,i,s,l)}}function Br(t,i,s,l,f){for(f=f&&((i.subtreeFlags&10256)!==0||!1),i=i.child;i!==null;){var m=t,b=i,w=s,G=l,ne=b.flags;switch(b.tag){case 0:case 11:case 15:Br(m,b,w,G,f),sl(8,b);break;case 23:break;case 22:var he=b.stateNode;b.memoizedState!==null?he._visibility&2?Br(m,b,w,G,f):ol(m,b):(he._visibility|=2,Br(m,b,w,G,f)),f&&ne&2048&&Td(b.alternate,b);break;case 24:Br(m,b,w,G,f),f&&ne&2048&&Ad(b.alternate,b);break;default:Br(m,b,w,G,f)}i=i.sibling}}function ol(t,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var s=t,l=i,f=l.flags;switch(l.tag){case 22:ol(s,l),f&2048&&Td(l.alternate,l);break;case 24:ol(s,l),f&2048&&Ad(l.alternate,l);break;default:ol(s,l)}i=i.sibling}}var ll=8192;function Fr(t,i,s){if(t.subtreeFlags&ll)for(t=t.child;t!==null;)X0(t,i,s),t=t.sibling}function X0(t,i,s){switch(t.tag){case 26:Fr(t,i,s),t.flags&ll&&t.memoizedState!==null&&Vb(s,Fi,t.memoizedState,t.memoizedProps);break;case 5:Fr(t,i,s);break;case 3:case 4:var l=Fi;Fi=Wc(t.stateNode.containerInfo),Fr(t,i,s),Fi=l;break;case 22:t.memoizedState===null&&(l=t.alternate,l!==null&&l.memoizedState!==null?(l=ll,ll=16777216,Fr(t,i,s),ll=l):Fr(t,i,s));break;default:Fr(t,i,s)}}function W0(t){var i=t.alternate;if(i!==null&&(t=i.child,t!==null)){i.child=null;do i=t.sibling,t.sibling=null,t=i;while(t!==null)}}function cl(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];Ln=l,Y0(l,t)}W0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)q0(t),t=t.sibling}function q0(t){switch(t.tag){case 0:case 11:case 15:cl(t),t.flags&2048&&fs(9,t,t.return);break;case 3:cl(t);break;case 12:cl(t);break;case 22:var i=t.stateNode;t.memoizedState!==null&&i._visibility&2&&(t.return===null||t.return.tag!==13)?(i._visibility&=-3,Lc(t)):cl(t);break;default:cl(t)}}function Lc(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];Ln=l,Y0(l,t)}W0(t)}for(t=t.child;t!==null;){switch(i=t,i.tag){case 0:case 11:case 15:fs(8,i,i.return),Lc(i);break;case 22:s=i.stateNode,s._visibility&2&&(s._visibility&=-3,Lc(i));break;default:Lc(i)}t=t.sibling}}function Y0(t,i){for(;Ln!==null;){var s=Ln;switch(s.tag){case 0:case 11:case 15:fs(8,s,i);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var l=s.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:qo(s.memoizedState.cache)}if(l=s.child,l!==null)l.return=s,Ln=l;else e:for(s=t;Ln!==null;){l=Ln;var f=l.sibling,m=l.return;if(B0(l),l===s){Ln=null;break e}if(f!==null){f.return=m,Ln=f;break e}Ln=m}}}var ib={getCacheForType:function(t){var i=Fn(yn),s=i.data.get(t);return s===void 0&&(s=t(),i.data.set(t,s)),s},cacheSignal:function(){return Fn(yn).controller.signal}},ab=typeof WeakMap=="function"?WeakMap:Map,It=0,Jt=null,Mt=null,Rt=0,Vt=0,pi=null,ds=!1,zr=!1,Rd=!1,Ca=0,dn=0,hs=0,tr=0,wd=0,mi=0,Hr=0,ul=null,ii=null,Cd=!1,Uc=0,j0=0,Oc=1/0,Pc=null,ps=null,An=0,ms=null,Gr=null,Da=0,Dd=0,Nd=null,K0=null,fl=0,Ld=null;function gi(){return(It&2)!==0&&Rt!==0?Rt&-Rt:P.T!==null?Fd():No()}function Z0(){if(mi===0)if((Rt&536870912)===0||Ct){var t=St;St<<=1,(St&3932160)===0&&(St=262144),mi=t}else mi=536870912;return t=di.current,t!==null&&(t.flags|=32),mi}function ai(t,i,s){(t===Jt&&(Vt===2||Vt===9)||t.cancelPendingCommit!==null)&&(Vr(t,0),gs(t,Rt,mi,!1)),it(t,s),((It&2)===0||t!==Jt)&&(t===Jt&&((It&2)===0&&(tr|=s),dn===4&&gs(t,Rt,mi,!1)),Ji(t))}function Q0(t,i,s){if((It&6)!==0)throw Error(a(327));var l=!s&&(i&127)===0&&(i&t.expiredLanes)===0||Fe(t,i),f=l?ob(t,i):Od(t,i,!0),m=l;do{if(f===0){zr&&!l&&gs(t,i,0,!1);break}else{if(s=t.current.alternate,m&&!sb(s)){f=Od(t,i,!1),m=!1;continue}if(f===2){if(m=i,t.errorRecoveryDisabledLanes&m)var b=0;else b=t.pendingLanes&-536870913,b=b!==0?b:b&536870912?536870912:0;if(b!==0){i=b;e:{var w=t;f=ul;var G=w.current.memoizedState.isDehydrated;if(G&&(Vr(w,b).flags|=256),b=Od(w,b,!1),b!==2){if(Rd&&!G){w.errorRecoveryDisabledLanes|=m,tr|=m,f=4;break e}m=ii,ii=f,m!==null&&(ii===null?ii=m:ii.push.apply(ii,m))}f=b}if(m=!1,f!==2)continue}}if(f===1){Vr(t,0),gs(t,i,0,!0);break}e:{switch(l=t,m=f,m){case 0:case 1:throw Error(a(345));case 4:if((i&4194048)!==i)break;case 6:gs(l,i,mi,!ds);break e;case 2:ii=null;break;case 3:case 5:break;default:throw Error(a(329))}if((i&62914560)===i&&(f=Uc+300-we(),10<f)){if(gs(l,i,mi,!ds),me(l,0,!0)!==0)break e;Da=i,l.timeoutHandle=w_(J0.bind(null,l,s,ii,Pc,Cd,i,mi,tr,Hr,ds,m,"Throttled",-0,0),f);break e}J0(l,s,ii,Pc,Cd,i,mi,tr,Hr,ds,m,null,-0,0)}}break}while(!0);Ji(t)}function J0(t,i,s,l,f,m,b,w,G,ne,he,xe,re,le){if(t.timeoutHandle=-1,xe=i.subtreeFlags,xe&8192||(xe&16785408)===16785408){xe={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ma},X0(i,m,xe);var qe=(m&62914560)===m?Uc-we():(m&4194048)===m?j0-we():0;if(qe=kb(xe,qe),qe!==null){Da=m,t.cancelPendingCommit=qe(r_.bind(null,t,i,m,s,l,f,b,w,G,he,xe,null,re,le)),gs(t,m,b,!ne);return}}r_(t,i,m,s,l,f,b,w,G)}function sb(t){for(var i=t;;){var s=i.tag;if((s===0||s===11||s===15)&&i.flags&16384&&(s=i.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var l=0;l<s.length;l++){var f=s[l],m=f.getSnapshot;f=f.value;try{if(!ui(m(),f))return!1}catch{return!1}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function gs(t,i,s,l){i&=~wd,i&=~tr,t.suspendedLanes|=i,t.pingedLanes&=~i,l&&(t.warmLanes|=i),l=t.expirationTimes;for(var f=i;0<f;){var m=31-Pe(f),b=1<<m;l[m]=-1,f&=~b}s!==0&&Pt(t,s,i)}function Ic(){return(It&6)===0?(dl(0),!1):!0}function Ud(){if(Mt!==null){if(Vt===0)var t=Mt.return;else t=Mt,xa=qs=null,Kf(t),Lr=null,jo=0,t=Mt;for(;t!==null;)C0(t.alternate,t),t=t.return;Mt=null}}function Vr(t,i){var s=t.timeoutHandle;s!==-1&&(t.timeoutHandle=-1,Tb(s)),s=t.cancelPendingCommit,s!==null&&(t.cancelPendingCommit=null,s()),Da=0,Ud(),Jt=t,Mt=s=_a(t.current,null),Rt=i,Vt=0,pi=null,ds=!1,zr=Fe(t,i),Rd=!1,Hr=mi=wd=tr=hs=dn=0,ii=ul=null,Cd=!1,(i&8)!==0&&(i|=i&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=i;0<l;){var f=31-Pe(l),m=1<<f;i|=t[f],l&=~m}return Ca=i,ic(),s}function $0(t,i){dt=null,P.H=nl,i===Nr||i===fc?(i=mg(),Vt=3):i===Bf?(i=mg(),Vt=4):Vt=i===fd?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,pi=i,Mt===null&&(dn=1,Tc(t,Ei(i,t.current)))}function e_(){var t=di.current;return t===null?!0:(Rt&4194048)===Rt?wi===null:(Rt&62914560)===Rt||(Rt&536870912)!==0?t===wi:!1}function t_(){var t=P.H;return P.H=nl,t===null?nl:t}function n_(){var t=P.A;return P.A=ib,t}function Bc(){dn=4,ds||(Rt&4194048)!==Rt&&di.current!==null||(zr=!0),(hs&134217727)===0&&(tr&134217727)===0||Jt===null||gs(Jt,Rt,mi,!1)}function Od(t,i,s){var l=It;It|=2;var f=t_(),m=n_();(Jt!==t||Rt!==i)&&(Pc=null,Vr(t,i)),i=!1;var b=dn;e:do try{if(Vt!==0&&Mt!==null){var w=Mt,G=pi;switch(Vt){case 8:Ud(),b=6;break e;case 3:case 2:case 9:case 6:di.current===null&&(i=!0);var ne=Vt;if(Vt=0,pi=null,kr(t,w,G,ne),s&&zr){b=0;break e}break;default:ne=Vt,Vt=0,pi=null,kr(t,w,G,ne)}}rb(),b=dn;break}catch(he){$0(t,he)}while(!0);return i&&t.shellSuspendCounter++,xa=qs=null,It=l,P.H=f,P.A=m,Mt===null&&(Jt=null,Rt=0,ic()),b}function rb(){for(;Mt!==null;)i_(Mt)}function ob(t,i){var s=It;It|=2;var l=t_(),f=n_();Jt!==t||Rt!==i?(Pc=null,Oc=we()+500,Vr(t,i)):zr=Fe(t,i);e:do try{if(Vt!==0&&Mt!==null){i=Mt;var m=pi;t:switch(Vt){case 1:Vt=0,pi=null,kr(t,i,m,1);break;case 2:case 9:if(hg(m)){Vt=0,pi=null,a_(i);break}i=function(){Vt!==2&&Vt!==9||Jt!==t||(Vt=7),Ji(t)},m.then(i,i);break e;case 3:Vt=7;break e;case 4:Vt=5;break e;case 7:hg(m)?(Vt=0,pi=null,a_(i)):(Vt=0,pi=null,kr(t,i,m,7));break;case 5:var b=null;switch(Mt.tag){case 26:b=Mt.memoizedState;case 5:case 27:var w=Mt;if(b?k_(b):w.stateNode.complete){Vt=0,pi=null;var G=w.sibling;if(G!==null)Mt=G;else{var ne=w.return;ne!==null?(Mt=ne,Fc(ne)):Mt=null}break t}}Vt=0,pi=null,kr(t,i,m,5);break;case 6:Vt=0,pi=null,kr(t,i,m,6);break;case 8:Ud(),dn=6;break e;default:throw Error(a(462))}}lb();break}catch(he){$0(t,he)}while(!0);return xa=qs=null,P.H=l,P.A=f,It=s,Mt!==null?0:(Jt=null,Rt=0,ic(),dn)}function lb(){for(;Mt!==null&&!xt();)i_(Mt)}function i_(t){var i=R0(t.alternate,t,Ca);t.memoizedProps=t.pendingProps,i===null?Fc(t):Mt=i}function a_(t){var i=t,s=i.alternate;switch(i.tag){case 15:case 0:i=S0(s,i,i.pendingProps,i.type,void 0,Rt);break;case 11:i=S0(s,i,i.pendingProps,i.type.render,i.ref,Rt);break;case 5:Kf(i);default:C0(s,i),i=Mt=ng(i,Ca),i=R0(s,i,Ca)}t.memoizedProps=t.pendingProps,i===null?Fc(t):Mt=i}function kr(t,i,s,l){xa=qs=null,Kf(i),Lr=null,jo=0;var f=i.return;try{if(ZS(t,f,i,s,Rt)){dn=1,Tc(t,Ei(s,t.current)),Mt=null;return}}catch(m){if(f!==null)throw Mt=f,m;dn=1,Tc(t,Ei(s,t.current)),Mt=null;return}i.flags&32768?(Ct||l===1?t=!0:zr||(Rt&536870912)!==0?t=!1:(ds=t=!0,(l===2||l===9||l===3||l===6)&&(l=di.current,l!==null&&l.tag===13&&(l.flags|=16384))),s_(i,t)):Fc(i)}function Fc(t){var i=t;do{if((i.flags&32768)!==0){s_(i,ds);return}t=i.return;var s=$S(i.alternate,i,Ca);if(s!==null){Mt=s;return}if(i=i.sibling,i!==null){Mt=i;return}Mt=i=t}while(i!==null);dn===0&&(dn=5)}function s_(t,i){do{var s=eb(t.alternate,t);if(s!==null){s.flags&=32767,Mt=s;return}if(s=t.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!i&&(t=t.sibling,t!==null)){Mt=t;return}Mt=t=s}while(t!==null);dn=6,Mt=null}function r_(t,i,s,l,f,m,b,w,G){t.cancelPendingCommit=null;do zc();while(An!==0);if((It&6)!==0)throw Error(a(327));if(i!==null){if(i===t.current)throw Error(a(177));if(m=i.lanes|i.childLanes,m|=bf,un(t,s,m,b,w,G),t===Jt&&(Mt=Jt=null,Rt=0),Gr=i,ms=t,Da=s,Dd=m,Nd=f,K0=l,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,db(J,function(){return f_(),null})):(t.callbackNode=null,t.callbackPriority=0),l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=P.T,P.T=null,f=z.p,z.p=2,b=It,It|=4;try{tb(t,i,s)}finally{It=b,z.p=f,P.T=l}}An=1,o_(),l_(),c_()}}function o_(){if(An===1){An=0;var t=ms,i=Gr,s=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||s){s=P.T,P.T=null;var l=z.p;z.p=2;var f=It;It|=4;try{G0(i,t);var m=qd,b=Ym(t.containerInfo),w=m.focusedElem,G=m.selectionRange;if(b!==w&&w&&w.ownerDocument&&qm(w.ownerDocument.documentElement,w)){if(G!==null&&_f(w)){var ne=G.start,he=G.end;if(he===void 0&&(he=ne),"selectionStart"in w)w.selectionStart=ne,w.selectionEnd=Math.min(he,w.value.length);else{var xe=w.ownerDocument||document,re=xe&&xe.defaultView||window;if(re.getSelection){var le=re.getSelection(),qe=w.textContent.length,tt=Math.min(G.start,qe),Zt=G.end===void 0?tt:Math.min(G.end,qe);!le.extend&&tt>Zt&&(b=Zt,Zt=tt,tt=b);var Z=Wm(w,tt),k=Wm(w,Zt);if(Z&&k&&(le.rangeCount!==1||le.anchorNode!==Z.node||le.anchorOffset!==Z.offset||le.focusNode!==k.node||le.focusOffset!==k.offset)){var te=xe.createRange();te.setStart(Z.node,Z.offset),le.removeAllRanges(),tt>Zt?(le.addRange(te),le.extend(k.node,k.offset)):(te.setEnd(k.node,k.offset),le.addRange(te))}}}}for(xe=[],le=w;le=le.parentNode;)le.nodeType===1&&xe.push({element:le,left:le.scrollLeft,top:le.scrollTop});for(typeof w.focus=="function"&&w.focus(),w=0;w<xe.length;w++){var _e=xe[w];_e.element.scrollLeft=_e.left,_e.element.scrollTop=_e.top}}Qc=!!Wd,qd=Wd=null}finally{It=f,z.p=l,P.T=s}}t.current=i,An=2}}function l_(){if(An===2){An=0;var t=ms,i=Gr,s=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||s){s=P.T,P.T=null;var l=z.p;z.p=2;var f=It;It|=4;try{I0(t,i.alternate,i)}finally{It=f,z.p=l,P.T=s}}An=3}}function c_(){if(An===4||An===3){An=0,Yt();var t=ms,i=Gr,s=Da,l=K0;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?An=5:(An=0,Gr=ms=null,u_(t,t.pendingLanes));var f=t.pendingLanes;if(f===0&&(ps=null),Do(s),i=i.stateNode,de&&typeof de.onCommitFiberRoot=="function")try{de.onCommitFiberRoot(ue,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=P.T,f=z.p,z.p=2,P.T=null;try{for(var m=t.onRecoverableError,b=0;b<l.length;b++){var w=l[b];m(w.value,{componentStack:w.stack})}}finally{P.T=i,z.p=f}}(Da&3)!==0&&zc(),Ji(t),f=t.pendingLanes,(s&261930)!==0&&(f&42)!==0?t===Ld?fl++:(fl=0,Ld=t):fl=0,dl(0)}}function u_(t,i){(t.pooledCacheLanes&=i)===0&&(i=t.pooledCache,i!=null&&(t.pooledCache=null,qo(i)))}function zc(){return o_(),l_(),c_(),f_()}function f_(){if(An!==5)return!1;var t=ms,i=Dd;Dd=0;var s=Do(Da),l=P.T,f=z.p;try{z.p=32>s?32:s,P.T=null,s=Nd,Nd=null;var m=ms,b=Da;if(An=0,Gr=ms=null,Da=0,(It&6)!==0)throw Error(a(331));var w=It;if(It|=4,q0(m.current),k0(m,m.current,b,s),It=w,dl(0,!1),de&&typeof de.onPostCommitFiberRoot=="function")try{de.onPostCommitFiberRoot(ue,m)}catch{}return!0}finally{z.p=f,P.T=l,u_(t,i)}}function d_(t,i,s){i=Ei(s,i),i=ud(t.stateNode,i,2),t=ls(t,i,2),t!==null&&(it(t,2),Ji(t))}function kt(t,i,s){if(t.tag===3)d_(t,t,s);else for(;i!==null;){if(i.tag===3){d_(i,t,s);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(ps===null||!ps.has(l))){t=Ei(s,t),s=h0(2),l=ls(i,s,2),l!==null&&(p0(s,l,i,t),it(l,2),Ji(l));break}}i=i.return}}function Pd(t,i,s){var l=t.pingCache;if(l===null){l=t.pingCache=new ab;var f=new Set;l.set(i,f)}else f=l.get(i),f===void 0&&(f=new Set,l.set(i,f));f.has(s)||(Rd=!0,f.add(s),t=cb.bind(null,t,i,s),i.then(t,t))}function cb(t,i,s){var l=t.pingCache;l!==null&&l.delete(i),t.pingedLanes|=t.suspendedLanes&s,t.warmLanes&=~s,Jt===t&&(Rt&s)===s&&(dn===4||dn===3&&(Rt&62914560)===Rt&&300>we()-Uc?(It&2)===0&&Vr(t,0):wd|=s,Hr===Rt&&(Hr=0)),Ji(t)}function h_(t,i){i===0&&(i=Me()),t=ks(t,i),t!==null&&(it(t,i),Ji(t))}function ub(t){var i=t.memoizedState,s=0;i!==null&&(s=i.retryLane),h_(t,s)}function fb(t,i){var s=0;switch(t.tag){case 31:case 13:var l=t.stateNode,f=t.memoizedState;f!==null&&(s=f.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(a(314))}l!==null&&l.delete(i),h_(t,s)}function db(t,i){return q(t,i)}var Hc=null,Xr=null,Id=!1,Gc=!1,Bd=!1,_s=0;function Ji(t){t!==Xr&&t.next===null&&(Xr===null?Hc=Xr=t:Xr=Xr.next=t),Gc=!0,Id||(Id=!0,pb())}function dl(t,i){if(!Bd&&Gc){Bd=!0;do for(var s=!1,l=Hc;l!==null;){if(t!==0){var f=l.pendingLanes;if(f===0)var m=0;else{var b=l.suspendedLanes,w=l.pingedLanes;m=(1<<31-Pe(42|t)+1)-1,m&=f&~(b&~w),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(s=!0,__(l,m))}else m=Rt,m=me(l,l===Jt?m:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(m&3)===0||Fe(l,m)||(s=!0,__(l,m));l=l.next}while(s);Bd=!1}}function hb(){p_()}function p_(){Gc=Id=!1;var t=0;_s!==0&&Eb()&&(t=_s);for(var i=we(),s=null,l=Hc;l!==null;){var f=l.next,m=m_(l,i);m===0?(l.next=null,s===null?Hc=f:s.next=f,f===null&&(Xr=s)):(s=l,(t!==0||(m&3)!==0)&&(Gc=!0)),l=f}An!==0&&An!==5||dl(t),_s!==0&&(_s=0)}function m_(t,i){for(var s=t.suspendedLanes,l=t.pingedLanes,f=t.expirationTimes,m=t.pendingLanes&-62914561;0<m;){var b=31-Pe(m),w=1<<b,G=f[b];G===-1?((w&s)===0||(w&l)!==0)&&(f[b]=Le(w,i)):G<=i&&(t.expiredLanes|=w),m&=~w}if(i=Jt,s=Rt,s=me(t,t===i?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l=t.callbackNode,s===0||t===i&&(Vt===2||Vt===9)||t.cancelPendingCommit!==null)return l!==null&&l!==null&&cn(l),t.callbackNode=null,t.callbackPriority=0;if((s&3)===0||Fe(t,s)){if(i=s&-s,i===t.callbackPriority)return i;switch(l!==null&&cn(l),Do(s)){case 2:case 8:s=T;break;case 32:s=J;break;case 268435456:s=Ee;break;default:s=J}return l=g_.bind(null,t),s=q(s,l),t.callbackPriority=i,t.callbackNode=s,i}return l!==null&&l!==null&&cn(l),t.callbackPriority=2,t.callbackNode=null,2}function g_(t,i){if(An!==0&&An!==5)return t.callbackNode=null,t.callbackPriority=0,null;var s=t.callbackNode;if(zc()&&t.callbackNode!==s)return null;var l=Rt;return l=me(t,t===Jt?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l===0?null:(Q0(t,l,i),m_(t,we()),t.callbackNode!=null&&t.callbackNode===s?g_.bind(null,t):null)}function __(t,i){if(zc())return null;Q0(t,i,!0)}function pb(){Ab(function(){(It&6)!==0?q(N,hb):p_()})}function Fd(){if(_s===0){var t=Cr;t===0&&(t=st,st<<=1,(st&261888)===0&&(st=256)),_s=t}return _s}function v_(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:zs(""+t)}function x_(t,i){var s=i.ownerDocument.createElement("input");return s.name=i.name,s.value=i.value,t.id&&s.setAttribute("form",t.id),i.parentNode.insertBefore(s,i),t=new FormData(t),s.parentNode.removeChild(s),t}function mb(t,i,s,l,f){if(i==="submit"&&s&&s.stateNode===f){var m=v_((f[In]||null).action),b=l.submitter;b&&(i=(i=b[In]||null)?v_(i.formAction):b.getAttribute("formAction"),i!==null&&(m=i,b=null));var w=new $l("action","action",null,l,f);t.push({event:w,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(_s!==0){var G=b?x_(f,b):new FormData(f);ad(s,{pending:!0,data:G,method:f.method,action:m},null,G)}}else typeof m=="function"&&(w.preventDefault(),G=b?x_(f,b):new FormData(f),ad(s,{pending:!0,data:G,method:f.method,action:m},m,G))},currentTarget:f}]})}}for(var zd=0;zd<Sf.length;zd++){var Hd=Sf[zd],gb=Hd.toLowerCase(),_b=Hd[0].toUpperCase()+Hd.slice(1);Bi(gb,"on"+_b)}Bi(Zm,"onAnimationEnd"),Bi(Qm,"onAnimationIteration"),Bi(Jm,"onAnimationStart"),Bi("dblclick","onDoubleClick"),Bi("focusin","onFocus"),Bi("focusout","onBlur"),Bi(US,"onTransitionRun"),Bi(OS,"onTransitionStart"),Bi(PS,"onTransitionCancel"),Bi($m,"onTransitionEnd"),se("onMouseEnter",["mouseout","mouseover"]),se("onMouseLeave",["mouseout","mouseover"]),se("onPointerEnter",["pointerout","pointerover"]),se("onPointerLeave",["pointerout","pointerover"]),Y("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Y("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Y("onBeforeInput",["compositionend","keypress","textInput","paste"]),Y("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Y("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Y("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var hl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),vb=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(hl));function y_(t,i){i=(i&4)!==0;for(var s=0;s<t.length;s++){var l=t[s],f=l.event;l=l.listeners;e:{var m=void 0;if(i)for(var b=l.length-1;0<=b;b--){var w=l[b],G=w.instance,ne=w.currentTarget;if(w=w.listener,G!==m&&f.isPropagationStopped())break e;m=w,f.currentTarget=ne;try{m(f)}catch(he){nc(he)}f.currentTarget=null,m=G}else for(b=0;b<l.length;b++){if(w=l[b],G=w.instance,ne=w.currentTarget,w=w.listener,G!==m&&f.isPropagationStopped())break e;m=w,f.currentTarget=ne;try{m(f)}catch(he){nc(he)}f.currentTarget=null,m=G}}}}function Et(t,i){var s=i[Ka];s===void 0&&(s=i[Ka]=new Set);var l=t+"__bubble";s.has(l)||(S_(i,t,2,!1),s.add(l))}function Gd(t,i,s){var l=0;i&&(l|=4),S_(s,t,l,i)}var Vc="_reactListening"+Math.random().toString(36).slice(2);function Vd(t){if(!t[Vc]){t[Vc]=!0,Kl.forEach(function(s){s!=="selectionchange"&&(vb.has(s)||Gd(s,!1,t),Gd(s,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[Vc]||(i[Vc]=!0,Gd("selectionchange",!1,i))}}function S_(t,i,s,l){switch(Z_(i)){case 2:var f=qb;break;case 8:f=Yb;break;default:f=ih}s=f.bind(null,i,s,t),f=void 0,!lf||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),l?f!==void 0?t.addEventListener(i,s,{capture:!0,passive:f}):t.addEventListener(i,s,!0):f!==void 0?t.addEventListener(i,s,{passive:f}):t.addEventListener(i,s,!1)}function kd(t,i,s,l,f){var m=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var b=l.tag;if(b===3||b===4){var w=l.stateNode.containerInfo;if(w===f)break;if(b===4)for(b=l.return;b!==null;){var G=b.tag;if((G===3||G===4)&&b.stateNode.containerInfo===f)return;b=b.return}for(;w!==null;){if(b=Qa(w),b===null)return;if(G=b.tag,G===5||G===6||G===26||G===27){l=m=b;continue e}w=w.parentNode}}l=l.return}Am(function(){var ne=m,he=rf(s),xe=[];e:{var re=eg.get(t);if(re!==void 0){var le=$l,qe=t;switch(t){case"keypress":if(Ql(s)===0)break e;case"keydown":case"keyup":le=fS;break;case"focusin":qe="focus",le=df;break;case"focusout":qe="blur",le=df;break;case"beforeblur":case"afterblur":le=df;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":le=Cm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":le=$y;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":le=pS;break;case Zm:case Qm:case Jm:le=nS;break;case $m:le=gS;break;case"scroll":case"scrollend":le=Qy;break;case"wheel":le=vS;break;case"copy":case"cut":case"paste":le=aS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":le=Nm;break;case"toggle":case"beforetoggle":le=yS}var tt=(i&4)!==0,Zt=!tt&&(t==="scroll"||t==="scrollend"),Z=tt?re!==null?re+"Capture":null:re;tt=[];for(var k=ne,te;k!==null;){var _e=k;if(te=_e.stateNode,_e=_e.tag,_e!==5&&_e!==26&&_e!==27||te===null||Z===null||(_e=Po(k,Z),_e!=null&&tt.push(pl(k,_e,te))),Zt)break;k=k.return}0<tt.length&&(re=new le(re,qe,null,s,he),xe.push({event:re,listeners:tt}))}}if((i&7)===0){e:{if(re=t==="mouseover"||t==="pointerover",le=t==="mouseout"||t==="pointerout",re&&s!==sf&&(qe=s.relatedTarget||s.fromElement)&&(Qa(qe)||qe[pa]))break e;if((le||re)&&(re=he.window===he?he:(re=he.ownerDocument)?re.defaultView||re.parentWindow:window,le?(qe=s.relatedTarget||s.toElement,le=ne,qe=qe?Qa(qe):null,qe!==null&&(Zt=c(qe),tt=qe.tag,qe!==Zt||tt!==5&&tt!==27&&tt!==6)&&(qe=null)):(le=null,qe=ne),le!==qe)){if(tt=Cm,_e="onMouseLeave",Z="onMouseEnter",k="mouse",(t==="pointerout"||t==="pointerover")&&(tt=Nm,_e="onPointerLeave",Z="onPointerEnter",k="pointer"),Zt=le==null?re:Fs(le),te=qe==null?re:Fs(qe),re=new tt(_e,k+"leave",le,s,he),re.target=Zt,re.relatedTarget=te,_e=null,Qa(he)===ne&&(tt=new tt(Z,k+"enter",qe,s,he),tt.target=te,tt.relatedTarget=Zt,_e=tt),Zt=_e,le&&qe)t:{for(tt=xb,Z=le,k=qe,te=0,_e=Z;_e;_e=tt(_e))te++;_e=0;for(var $e=k;$e;$e=tt($e))_e++;for(;0<te-_e;)Z=tt(Z),te--;for(;0<_e-te;)k=tt(k),_e--;for(;te--;){if(Z===k||k!==null&&Z===k.alternate){tt=Z;break t}Z=tt(Z),k=tt(k)}tt=null}else tt=null;le!==null&&b_(xe,re,le,tt,!1),qe!==null&&Zt!==null&&b_(xe,Zt,qe,tt,!0)}}e:{if(re=ne?Fs(ne):window,le=re.nodeName&&re.nodeName.toLowerCase(),le==="select"||le==="input"&&re.type==="file")var Ut=zm;else if(Bm(re))if(Hm)Ut=DS;else{Ut=wS;var je=RS}else le=re.nodeName,!le||le.toLowerCase()!=="input"||re.type!=="checkbox"&&re.type!=="radio"?ne&&Bt(ne.elementType)&&(Ut=zm):Ut=CS;if(Ut&&(Ut=Ut(t,ne))){Fm(xe,Ut,s,he);break e}je&&je(t,re,ne),t==="focusout"&&ne&&re.type==="number"&&ne.memoizedProps.value!=null&&bt(re,"number",re.value)}switch(je=ne?Fs(ne):window,t){case"focusin":(Bm(je)||je.contentEditable==="true")&&(Sr=je,vf=ne,ko=null);break;case"focusout":ko=vf=Sr=null;break;case"mousedown":xf=!0;break;case"contextmenu":case"mouseup":case"dragend":xf=!1,jm(xe,s,he);break;case"selectionchange":if(LS)break;case"keydown":case"keyup":jm(xe,s,he)}var mt;if(pf)e:{switch(t){case"compositionstart":var wt="onCompositionStart";break e;case"compositionend":wt="onCompositionEnd";break e;case"compositionupdate":wt="onCompositionUpdate";break e}wt=void 0}else yr?Pm(t,s)&&(wt="onCompositionEnd"):t==="keydown"&&s.keyCode===229&&(wt="onCompositionStart");wt&&(Lm&&s.locale!=="ko"&&(yr||wt!=="onCompositionStart"?wt==="onCompositionEnd"&&yr&&(mt=Rm()):(ts=he,cf="value"in ts?ts.value:ts.textContent,yr=!0)),je=kc(ne,wt),0<je.length&&(wt=new Dm(wt,t,null,s,he),xe.push({event:wt,listeners:je}),mt?wt.data=mt:(mt=Im(s),mt!==null&&(wt.data=mt)))),(mt=bS?MS(t,s):ES(t,s))&&(wt=kc(ne,"onBeforeInput"),0<wt.length&&(je=new Dm("onBeforeInput","beforeinput",null,s,he),xe.push({event:je,listeners:wt}),je.data=mt)),mb(xe,t,ne,s,he)}y_(xe,i)})}function pl(t,i,s){return{instance:t,listener:i,currentTarget:s}}function kc(t,i){for(var s=i+"Capture",l=[];t!==null;){var f=t,m=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||m===null||(f=Po(t,s),f!=null&&l.unshift(pl(t,f,m)),f=Po(t,i),f!=null&&l.push(pl(t,f,m))),t.tag===3)return l;t=t.return}return[]}function xb(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function b_(t,i,s,l,f){for(var m=i._reactName,b=[];s!==null&&s!==l;){var w=s,G=w.alternate,ne=w.stateNode;if(w=w.tag,G!==null&&G===l)break;w!==5&&w!==26&&w!==27||ne===null||(G=ne,f?(ne=Po(s,m),ne!=null&&b.unshift(pl(s,ne,G))):f||(ne=Po(s,m),ne!=null&&b.push(pl(s,ne,G)))),s=s.return}b.length!==0&&t.push({event:i,listeners:b})}var yb=/\r\n?/g,Sb=/\u0000|\uFFFD/g;function M_(t){return(typeof t=="string"?t:""+t).replace(yb,`
`).replace(Sb,"")}function E_(t,i){return i=M_(i),M_(t)===i}function Kt(t,i,s,l,f,m){switch(s){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||ci(t,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&ci(t,""+l);break;case"className":We(t,"class",l);break;case"tabIndex":We(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":We(t,s,l);break;case"style":Ii(t,l,m);break;case"data":if(i!=="object"){We(t,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||s!=="href")){t.removeAttribute(s);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(s);break}l=zs(""+l),t.setAttribute(s,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(s==="formAction"?(i!=="input"&&Kt(t,i,"name",f.name,f,null),Kt(t,i,"formEncType",f.formEncType,f,null),Kt(t,i,"formMethod",f.formMethod,f,null),Kt(t,i,"formTarget",f.formTarget,f,null)):(Kt(t,i,"encType",f.encType,f,null),Kt(t,i,"method",f.method,f,null),Kt(t,i,"target",f.target,f,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(s);break}l=zs(""+l),t.setAttribute(s,l);break;case"onClick":l!=null&&(t.onclick=ma);break;case"onScroll":l!=null&&Et("scroll",t);break;case"onScrollEnd":l!=null&&Et("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(s=l.__html,s!=null){if(f.children!=null)throw Error(a(60));t.innerHTML=s}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}s=zs(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,""+l):t.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,""):t.removeAttribute(s);break;case"capture":case"download":l===!0?t.setAttribute(s,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,l):t.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(s,l):t.removeAttribute(s);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(s):t.setAttribute(s,l);break;case"popover":Et("beforetoggle",t),Et("toggle",t),Ie(t,"popover",l);break;case"xlinkActuate":Ve(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Ve(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Ve(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Ve(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Ve(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Ve(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Ve(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Ve(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Ve(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Ie(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=ji.get(s)||s,Ie(t,s,l))}}function Xd(t,i,s,l,f,m){switch(s){case"style":Ii(t,l,m);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(s=l.__html,s!=null){if(f.children!=null)throw Error(a(60));t.innerHTML=s}}break;case"children":typeof l=="string"?ci(t,l):(typeof l=="number"||typeof l=="bigint")&&ci(t,""+l);break;case"onScroll":l!=null&&Et("scroll",t);break;case"onScrollEnd":l!=null&&Et("scrollend",t);break;case"onClick":l!=null&&(t.onclick=ma);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!R.hasOwnProperty(s))e:{if(s[0]==="o"&&s[1]==="n"&&(f=s.endsWith("Capture"),i=s.slice(2,f?s.length-7:void 0),m=t[In]||null,m=m!=null?m[s]:null,typeof m=="function"&&t.removeEventListener(i,m,f),typeof l=="function")){typeof m!="function"&&m!==null&&(s in t?t[s]=null:t.hasAttribute(s)&&t.removeAttribute(s)),t.addEventListener(i,l,f);break e}s in t?t[s]=l:l===!0?t.setAttribute(s,""):Ie(t,s,l)}}}function Hn(t,i,s){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Et("error",t),Et("load",t);var l=!1,f=!1,m;for(m in s)if(s.hasOwnProperty(m)){var b=s[m];if(b!=null)switch(m){case"src":l=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:Kt(t,i,m,b,s,null)}}f&&Kt(t,i,"srcSet",s.srcSet,s,null),l&&Kt(t,i,"src",s.src,s,null);return;case"input":Et("invalid",t);var w=m=b=f=null,G=null,ne=null;for(l in s)if(s.hasOwnProperty(l)){var he=s[l];if(he!=null)switch(l){case"name":f=he;break;case"type":b=he;break;case"checked":G=he;break;case"defaultChecked":ne=he;break;case"value":m=he;break;case"defaultValue":w=he;break;case"children":case"dangerouslySetInnerHTML":if(he!=null)throw Error(a(137,i));break;default:Kt(t,i,l,he,s,null)}}kn(t,m,w,G,ne,b,f,!1);return;case"select":Et("invalid",t),l=b=m=null;for(f in s)if(s.hasOwnProperty(f)&&(w=s[f],w!=null))switch(f){case"value":m=w;break;case"defaultValue":b=w;break;case"multiple":l=w;default:Kt(t,i,f,w,s,null)}i=m,s=b,t.multiple=!!l,i!=null?Tn(t,!!l,i,!1):s!=null&&Tn(t,!!l,s,!0);return;case"textarea":Et("invalid",t),m=f=l=null;for(b in s)if(s.hasOwnProperty(b)&&(w=s[b],w!=null))switch(b){case"value":l=w;break;case"defaultValue":f=w;break;case"children":m=w;break;case"dangerouslySetInnerHTML":if(w!=null)throw Error(a(91));break;default:Kt(t,i,b,w,s,null)}Pi(t,l,f,m);return;case"option":for(G in s)if(s.hasOwnProperty(G)&&(l=s[G],l!=null))switch(G){case"selected":t.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Kt(t,i,G,l,s,null)}return;case"dialog":Et("beforetoggle",t),Et("toggle",t),Et("cancel",t),Et("close",t);break;case"iframe":case"object":Et("load",t);break;case"video":case"audio":for(l=0;l<hl.length;l++)Et(hl[l],t);break;case"image":Et("error",t),Et("load",t);break;case"details":Et("toggle",t);break;case"embed":case"source":case"link":Et("error",t),Et("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ne in s)if(s.hasOwnProperty(ne)&&(l=s[ne],l!=null))switch(ne){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:Kt(t,i,ne,l,s,null)}return;default:if(Bt(i)){for(he in s)s.hasOwnProperty(he)&&(l=s[he],l!==void 0&&Xd(t,i,he,l,s,void 0));return}}for(w in s)s.hasOwnProperty(w)&&(l=s[w],l!=null&&Kt(t,i,w,l,s,null))}function bb(t,i,s,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,m=null,b=null,w=null,G=null,ne=null,he=null;for(le in s){var xe=s[le];if(s.hasOwnProperty(le)&&xe!=null)switch(le){case"checked":break;case"value":break;case"defaultValue":G=xe;default:l.hasOwnProperty(le)||Kt(t,i,le,null,l,xe)}}for(var re in l){var le=l[re];if(xe=s[re],l.hasOwnProperty(re)&&(le!=null||xe!=null))switch(re){case"type":m=le;break;case"name":f=le;break;case"checked":ne=le;break;case"defaultChecked":he=le;break;case"value":b=le;break;case"defaultValue":w=le;break;case"children":case"dangerouslySetInnerHTML":if(le!=null)throw Error(a(137,i));break;default:le!==xe&&Kt(t,i,re,le,l,xe)}}He(t,b,w,G,ne,he,m,f);return;case"select":le=b=w=re=null;for(m in s)if(G=s[m],s.hasOwnProperty(m)&&G!=null)switch(m){case"value":break;case"multiple":le=G;default:l.hasOwnProperty(m)||Kt(t,i,m,null,l,G)}for(f in l)if(m=l[f],G=s[f],l.hasOwnProperty(f)&&(m!=null||G!=null))switch(f){case"value":re=m;break;case"defaultValue":w=m;break;case"multiple":b=m;default:m!==G&&Kt(t,i,f,m,l,G)}i=w,s=b,l=le,re!=null?Tn(t,!!s,re,!1):!!l!=!!s&&(i!=null?Tn(t,!!s,i,!0):Tn(t,!!s,s?[]:"",!1));return;case"textarea":le=re=null;for(w in s)if(f=s[w],s.hasOwnProperty(w)&&f!=null&&!l.hasOwnProperty(w))switch(w){case"value":break;case"children":break;default:Kt(t,i,w,null,l,f)}for(b in l)if(f=l[b],m=s[b],l.hasOwnProperty(b)&&(f!=null||m!=null))switch(b){case"value":re=f;break;case"defaultValue":le=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(a(91));break;default:f!==m&&Kt(t,i,b,f,l,m)}li(t,re,le);return;case"option":for(var qe in s)if(re=s[qe],s.hasOwnProperty(qe)&&re!=null&&!l.hasOwnProperty(qe))switch(qe){case"selected":t.selected=!1;break;default:Kt(t,i,qe,null,l,re)}for(G in l)if(re=l[G],le=s[G],l.hasOwnProperty(G)&&re!==le&&(re!=null||le!=null))switch(G){case"selected":t.selected=re&&typeof re!="function"&&typeof re!="symbol";break;default:Kt(t,i,G,re,l,le)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var tt in s)re=s[tt],s.hasOwnProperty(tt)&&re!=null&&!l.hasOwnProperty(tt)&&Kt(t,i,tt,null,l,re);for(ne in l)if(re=l[ne],le=s[ne],l.hasOwnProperty(ne)&&re!==le&&(re!=null||le!=null))switch(ne){case"children":case"dangerouslySetInnerHTML":if(re!=null)throw Error(a(137,i));break;default:Kt(t,i,ne,re,l,le)}return;default:if(Bt(i)){for(var Zt in s)re=s[Zt],s.hasOwnProperty(Zt)&&re!==void 0&&!l.hasOwnProperty(Zt)&&Xd(t,i,Zt,void 0,l,re);for(he in l)re=l[he],le=s[he],!l.hasOwnProperty(he)||re===le||re===void 0&&le===void 0||Xd(t,i,he,re,l,le);return}}for(var Z in s)re=s[Z],s.hasOwnProperty(Z)&&re!=null&&!l.hasOwnProperty(Z)&&Kt(t,i,Z,null,l,re);for(xe in l)re=l[xe],le=s[xe],!l.hasOwnProperty(xe)||re===le||re==null&&le==null||Kt(t,i,xe,re,l,le)}function T_(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Mb(){if(typeof performance.getEntriesByType=="function"){for(var t=0,i=0,s=performance.getEntriesByType("resource"),l=0;l<s.length;l++){var f=s[l],m=f.transferSize,b=f.initiatorType,w=f.duration;if(m&&w&&T_(b)){for(b=0,w=f.responseEnd,l+=1;l<s.length;l++){var G=s[l],ne=G.startTime;if(ne>w)break;var he=G.transferSize,xe=G.initiatorType;he&&T_(xe)&&(G=G.responseEnd,b+=he*(G<w?1:(w-ne)/(G-ne)))}if(--l,i+=8*(m+b)/(f.duration/1e3),t++,10<t)break}}if(0<t)return i/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Wd=null,qd=null;function Xc(t){return t.nodeType===9?t:t.ownerDocument}function A_(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function R_(t,i){if(t===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&i==="foreignObject"?0:t}function Yd(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var jd=null;function Eb(){var t=window.event;return t&&t.type==="popstate"?t===jd?!1:(jd=t,!0):(jd=null,!1)}var w_=typeof setTimeout=="function"?setTimeout:void 0,Tb=typeof clearTimeout=="function"?clearTimeout:void 0,C_=typeof Promise=="function"?Promise:void 0,Ab=typeof queueMicrotask=="function"?queueMicrotask:typeof C_<"u"?function(t){return C_.resolve(null).then(t).catch(Rb)}:w_;function Rb(t){setTimeout(function(){throw t})}function vs(t){return t==="head"}function D_(t,i){var s=i,l=0;do{var f=s.nextSibling;if(t.removeChild(s),f&&f.nodeType===8)if(s=f.data,s==="/$"||s==="/&"){if(l===0){t.removeChild(f),jr(i);return}l--}else if(s==="$"||s==="$?"||s==="$~"||s==="$!"||s==="&")l++;else if(s==="html")ml(t.ownerDocument.documentElement);else if(s==="head"){s=t.ownerDocument.head,ml(s);for(var m=s.firstChild;m;){var b=m.nextSibling,w=m.nodeName;m[Za]||w==="SCRIPT"||w==="STYLE"||w==="LINK"&&m.rel.toLowerCase()==="stylesheet"||s.removeChild(m),m=b}}else s==="body"&&ml(t.ownerDocument.body);s=f}while(s);jr(i)}function N_(t,i){var s=t;t=0;do{var l=s.nextSibling;if(s.nodeType===1?i?(s._stashedDisplay=s.style.display,s.style.display="none"):(s.style.display=s._stashedDisplay||"",s.getAttribute("style")===""&&s.removeAttribute("style")):s.nodeType===3&&(i?(s._stashedText=s.nodeValue,s.nodeValue=""):s.nodeValue=s._stashedText||""),l&&l.nodeType===8)if(s=l.data,s==="/$"){if(t===0)break;t--}else s!=="$"&&s!=="$?"&&s!=="$~"&&s!=="$!"||t++;s=l}while(s)}function Kd(t){var i=t.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var s=i;switch(i=i.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":Kd(s),Oo(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}t.removeChild(s)}}function wb(t,i,s,l){for(;t.nodeType===1;){var f=s;if(t.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[Za])switch(i){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(m=t.getAttribute("rel"),m==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(m!==f.rel||t.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||t.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||t.getAttribute("title")!==(f.title==null?null:f.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(m=t.getAttribute("src"),(m!==(f.src==null?null:f.src)||t.getAttribute("type")!==(f.type==null?null:f.type)||t.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&m&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(i==="input"&&t.type==="hidden"){var m=f.name==null?null:""+f.name;if(f.type==="hidden"&&t.getAttribute("name")===m)return t}else return t;if(t=Ci(t.nextSibling),t===null)break}return null}function Cb(t,i,s){if(i==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!s||(t=Ci(t.nextSibling),t===null))return null;return t}function L_(t,i){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!i||(t=Ci(t.nextSibling),t===null))return null;return t}function Zd(t){return t.data==="$?"||t.data==="$~"}function Qd(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Db(t,i){var s=t.ownerDocument;if(t.data==="$~")t._reactRetry=i;else if(t.data!=="$?"||s.readyState!=="loading")i();else{var l=function(){i(),s.removeEventListener("DOMContentLoaded",l)};s.addEventListener("DOMContentLoaded",l),t._reactRetry=l}}function Ci(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"||i==="F!"||i==="F")break;if(i==="/$"||i==="/&")return null}}return t}var Jd=null;function U_(t){t=t.nextSibling;for(var i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="/$"||s==="/&"){if(i===0)return Ci(t.nextSibling);i--}else s!=="$"&&s!=="$!"&&s!=="$?"&&s!=="$~"&&s!=="&"||i++}t=t.nextSibling}return null}function O_(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="$"||s==="$!"||s==="$?"||s==="$~"||s==="&"){if(i===0)return t;i--}else s!=="/$"&&s!=="/&"||i++}t=t.previousSibling}return null}function P_(t,i,s){switch(i=Xc(s),t){case"html":if(t=i.documentElement,!t)throw Error(a(452));return t;case"head":if(t=i.head,!t)throw Error(a(453));return t;case"body":if(t=i.body,!t)throw Error(a(454));return t;default:throw Error(a(451))}}function ml(t){for(var i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Oo(t)}var Di=new Map,I_=new Set;function Wc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Na=z.d;z.d={f:Nb,r:Lb,D:Ub,C:Ob,L:Pb,m:Ib,X:Fb,S:Bb,M:zb};function Nb(){var t=Na.f(),i=Ic();return t||i}function Lb(t){var i=Ja(t);i!==null&&i.tag===5&&i.type==="form"?$g(i):Na.r(t)}var Wr=typeof document>"u"?null:document;function B_(t,i,s){var l=Wr;if(l&&typeof i=="string"&&i){var f=Ht(i);f='link[rel="'+t+'"][href="'+f+'"]',typeof s=="string"&&(f+='[crossorigin="'+s+'"]'),I_.has(f)||(I_.add(f),t={rel:t,crossOrigin:s,href:i},l.querySelector(f)===null&&(i=l.createElement("link"),Hn(i,"link",t),xn(i),l.head.appendChild(i)))}}function Ub(t){Na.D(t),B_("dns-prefetch",t,null)}function Ob(t,i){Na.C(t,i),B_("preconnect",t,i)}function Pb(t,i,s){Na.L(t,i,s);var l=Wr;if(l&&t&&i){var f='link[rel="preload"][as="'+Ht(i)+'"]';i==="image"&&s&&s.imageSrcSet?(f+='[imagesrcset="'+Ht(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(f+='[imagesizes="'+Ht(s.imageSizes)+'"]')):f+='[href="'+Ht(t)+'"]';var m=f;switch(i){case"style":m=qr(t);break;case"script":m=Yr(t)}Di.has(m)||(t=_({rel:"preload",href:i==="image"&&s&&s.imageSrcSet?void 0:t,as:i},s),Di.set(m,t),l.querySelector(f)!==null||i==="style"&&l.querySelector(gl(m))||i==="script"&&l.querySelector(_l(m))||(i=l.createElement("link"),Hn(i,"link",t),xn(i),l.head.appendChild(i)))}}function Ib(t,i){Na.m(t,i);var s=Wr;if(s&&t){var l=i&&typeof i.as=="string"?i.as:"script",f='link[rel="modulepreload"][as="'+Ht(l)+'"][href="'+Ht(t)+'"]',m=f;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=Yr(t)}if(!Di.has(m)&&(t=_({rel:"modulepreload",href:t},i),Di.set(m,t),s.querySelector(f)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(_l(m)))return}l=s.createElement("link"),Hn(l,"link",t),xn(l),s.head.appendChild(l)}}}function Bb(t,i,s){Na.S(t,i,s);var l=Wr;if(l&&t){var f=$a(l).hoistableStyles,m=qr(t);i=i||"default";var b=f.get(m);if(!b){var w={loading:0,preload:null};if(b=l.querySelector(gl(m)))w.loading=5;else{t=_({rel:"stylesheet",href:t,"data-precedence":i},s),(s=Di.get(m))&&$d(t,s);var G=b=l.createElement("link");xn(G),Hn(G,"link",t),G._p=new Promise(function(ne,he){G.onload=ne,G.onerror=he}),G.addEventListener("load",function(){w.loading|=1}),G.addEventListener("error",function(){w.loading|=2}),w.loading|=4,qc(b,i,l)}b={type:"stylesheet",instance:b,count:1,state:w},f.set(m,b)}}}function Fb(t,i){Na.X(t,i);var s=Wr;if(s&&t){var l=$a(s).hoistableScripts,f=Yr(t),m=l.get(f);m||(m=s.querySelector(_l(f)),m||(t=_({src:t,async:!0},i),(i=Di.get(f))&&eh(t,i),m=s.createElement("script"),xn(m),Hn(m,"link",t),s.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},l.set(f,m))}}function zb(t,i){Na.M(t,i);var s=Wr;if(s&&t){var l=$a(s).hoistableScripts,f=Yr(t),m=l.get(f);m||(m=s.querySelector(_l(f)),m||(t=_({src:t,async:!0,type:"module"},i),(i=Di.get(f))&&eh(t,i),m=s.createElement("script"),xn(m),Hn(m,"link",t),s.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},l.set(f,m))}}function F_(t,i,s,l){var f=(f=ee.current)?Wc(f):null;if(!f)throw Error(a(446));switch(t){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(i=qr(s.href),s=$a(f).hoistableStyles,l=s.get(i),l||(l={type:"style",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){t=qr(s.href);var m=$a(f).hoistableStyles,b=m.get(t);if(b||(f=f.ownerDocument||f,b={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(t,b),(m=f.querySelector(gl(t)))&&!m._p&&(b.instance=m,b.state.loading=5),Di.has(t)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},Di.set(t,s),m||Hb(f,t,s,b.state))),i&&l===null)throw Error(a(528,""));return b}if(i&&l!==null)throw Error(a(529,""));return null;case"script":return i=s.async,s=s.src,typeof s=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=Yr(s),s=$a(f).hoistableScripts,l=s.get(i),l||(l={type:"script",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,t))}}function qr(t){return'href="'+Ht(t)+'"'}function gl(t){return'link[rel="stylesheet"]['+t+"]"}function z_(t){return _({},t,{"data-precedence":t.precedence,precedence:null})}function Hb(t,i,s,l){t.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=t.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),Hn(i,"link",s),xn(i),t.head.appendChild(i))}function Yr(t){return'[src="'+Ht(t)+'"]'}function _l(t){return"script[async]"+t}function H_(t,i,s){if(i.count++,i.instance===null)switch(i.type){case"style":var l=t.querySelector('style[data-href~="'+Ht(s.href)+'"]');if(l)return i.instance=l,xn(l),l;var f=_({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),xn(l),Hn(l,"style",f),qc(l,s.precedence,t),i.instance=l;case"stylesheet":f=qr(s.href);var m=t.querySelector(gl(f));if(m)return i.state.loading|=4,i.instance=m,xn(m),m;l=z_(s),(f=Di.get(f))&&$d(l,f),m=(t.ownerDocument||t).createElement("link"),xn(m);var b=m;return b._p=new Promise(function(w,G){b.onload=w,b.onerror=G}),Hn(m,"link",l),i.state.loading|=4,qc(m,s.precedence,t),i.instance=m;case"script":return m=Yr(s.src),(f=t.querySelector(_l(m)))?(i.instance=f,xn(f),f):(l=s,(f=Di.get(m))&&(l=_({},s),eh(l,f)),t=t.ownerDocument||t,f=t.createElement("script"),xn(f),Hn(f,"link",l),t.head.appendChild(f),i.instance=f);case"void":return null;default:throw Error(a(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,qc(l,s.precedence,t));return i.instance}function qc(t,i,s){for(var l=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=l.length?l[l.length-1]:null,m=f,b=0;b<l.length;b++){var w=l[b];if(w.dataset.precedence===i)m=w;else if(m!==f)break}m?m.parentNode.insertBefore(t,m.nextSibling):(i=s.nodeType===9?s.head:s,i.insertBefore(t,i.firstChild))}function $d(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.title==null&&(t.title=i.title)}function eh(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.integrity==null&&(t.integrity=i.integrity)}var Yc=null;function G_(t,i,s){if(Yc===null){var l=new Map,f=Yc=new Map;f.set(s,l)}else f=Yc,l=f.get(s),l||(l=new Map,f.set(s,l));if(l.has(t))return l;for(l.set(t,null),s=s.getElementsByTagName(t),f=0;f<s.length;f++){var m=s[f];if(!(m[Za]||m[pn]||t==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var b=m.getAttribute(i)||"";b=t+b;var w=l.get(b);w?w.push(m):l.set(b,[m])}}return l}function V_(t,i,s){t=t.ownerDocument||t,t.head.insertBefore(s,i==="title"?t.querySelector("head > title"):null)}function Gb(t,i,s){if(s===1||i.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return t=i.disabled,typeof i.precedence=="string"&&t==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function k_(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function Vb(t,i,s,l){if(s.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var f=qr(l.href),m=i.querySelector(gl(f));if(m){i=m._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(t.count++,t=jc.bind(t),i.then(t,t)),s.state.loading|=4,s.instance=m,xn(m);return}m=i.ownerDocument||i,l=z_(l),(f=Di.get(f))&&$d(l,f),m=m.createElement("link"),xn(m);var b=m;b._p=new Promise(function(w,G){b.onload=w,b.onerror=G}),Hn(m,"link",l),s.instance=m}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(s,i),(i=s.state.preload)&&(s.state.loading&3)===0&&(t.count++,s=jc.bind(t),i.addEventListener("load",s),i.addEventListener("error",s))}}var th=0;function kb(t,i){return t.stylesheets&&t.count===0&&Zc(t,t.stylesheets),0<t.count||0<t.imgCount?function(s){var l=setTimeout(function(){if(t.stylesheets&&Zc(t,t.stylesheets),t.unsuspend){var m=t.unsuspend;t.unsuspend=null,m()}},6e4+i);0<t.imgBytes&&th===0&&(th=62500*Mb());var f=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Zc(t,t.stylesheets),t.unsuspend)){var m=t.unsuspend;t.unsuspend=null,m()}},(t.imgBytes>th?50:800)+i);return t.unsuspend=s,function(){t.unsuspend=null,clearTimeout(l),clearTimeout(f)}}:null}function jc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Zc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Kc=null;function Zc(t,i){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Kc=new Map,i.forEach(Xb,t),Kc=null,jc.call(t))}function Xb(t,i){if(!(i.state.loading&4)){var s=Kc.get(t);if(s)var l=s.get(null);else{s=new Map,Kc.set(t,s);for(var f=t.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<f.length;m++){var b=f[m];(b.nodeName==="LINK"||b.getAttribute("media")!=="not all")&&(s.set(b.dataset.precedence,b),l=b)}l&&s.set(null,l)}f=i.instance,b=f.getAttribute("data-precedence"),m=s.get(b)||l,m===l&&s.set(null,f),s.set(b,f),this.count++,l=jc.bind(this),f.addEventListener("load",l),f.addEventListener("error",l),m?m.parentNode.insertBefore(f,m.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(f,t.firstChild)),i.state.loading|=4}}var vl={$$typeof:L,Provider:null,Consumer:null,_currentValue:oe,_currentValue2:oe,_threadCount:0};function Wb(t,i,s,l,f,m,b,w,G){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ye(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ye(0),this.hiddenUpdates=Ye(null),this.identifierPrefix=l,this.onUncaughtError=f,this.onCaughtError=m,this.onRecoverableError=b,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=G,this.incompleteTransitions=new Map}function X_(t,i,s,l,f,m,b,w,G,ne,he,xe){return t=new Wb(t,i,s,b,G,ne,he,xe,w),i=1,m===!0&&(i|=24),m=fi(3,null,null,i),t.current=m,m.stateNode=t,i=Of(),i.refCount++,t.pooledCache=i,i.refCount++,m.memoizedState={element:l,isDehydrated:s,cache:i},Ff(m),t}function W_(t){return t?(t=Er,t):Er}function q_(t,i,s,l,f,m){f=W_(f),l.context===null?l.context=f:l.pendingContext=f,l=os(i),l.payload={element:s},m=m===void 0?null:m,m!==null&&(l.callback=m),s=ls(t,l,i),s!==null&&(ai(s,t,i),Zo(s,t,i))}function Y_(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var s=t.retryLane;t.retryLane=s!==0&&s<i?s:i}}function nh(t,i){Y_(t,i),(t=t.alternate)&&Y_(t,i)}function j_(t){if(t.tag===13||t.tag===31){var i=ks(t,67108864);i!==null&&ai(i,t,67108864),nh(t,67108864)}}function K_(t){if(t.tag===13||t.tag===31){var i=gi();i=Bs(i);var s=ks(t,i);s!==null&&ai(s,t,i),nh(t,i)}}var Qc=!0;function qb(t,i,s,l){var f=P.T;P.T=null;var m=z.p;try{z.p=2,ih(t,i,s,l)}finally{z.p=m,P.T=f}}function Yb(t,i,s,l){var f=P.T;P.T=null;var m=z.p;try{z.p=8,ih(t,i,s,l)}finally{z.p=m,P.T=f}}function ih(t,i,s,l){if(Qc){var f=ah(l);if(f===null)kd(t,i,l,Jc,s),Q_(t,l);else if(Kb(f,t,i,s,l))l.stopPropagation();else if(Q_(t,l),i&4&&-1<jb.indexOf(t)){for(;f!==null;){var m=Ja(f);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var b=Ae(m.pendingLanes);if(b!==0){var w=m;for(w.pendingLanes|=2,w.entangledLanes|=2;b;){var G=1<<31-Pe(b);w.entanglements[1]|=G,b&=~G}Ji(m),(It&6)===0&&(Oc=we()+500,dl(0))}}break;case 31:case 13:w=ks(m,2),w!==null&&ai(w,m,2),Ic(),nh(m,2)}if(m=ah(l),m===null&&kd(t,i,l,Jc,s),m===f)break;f=m}f!==null&&l.stopPropagation()}else kd(t,i,l,null,s)}}function ah(t){return t=rf(t),sh(t)}var Jc=null;function sh(t){if(Jc=null,t=Qa(t),t!==null){var i=c(t);if(i===null)t=null;else{var s=i.tag;if(s===13){if(t=u(i),t!==null)return t;t=null}else if(s===31){if(t=h(i),t!==null)return t;t=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null)}}return Jc=t,null}function Z_(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(an()){case N:return 2;case T:return 8;case J:case ve:return 32;case Ee:return 268435456;default:return 32}default:return 32}}var rh=!1,xs=null,ys=null,Ss=null,xl=new Map,yl=new Map,bs=[],jb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Q_(t,i){switch(t){case"focusin":case"focusout":xs=null;break;case"dragenter":case"dragleave":ys=null;break;case"mouseover":case"mouseout":Ss=null;break;case"pointerover":case"pointerout":xl.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":yl.delete(i.pointerId)}}function Sl(t,i,s,l,f,m){return t===null||t.nativeEvent!==m?(t={blockedOn:i,domEventName:s,eventSystemFlags:l,nativeEvent:m,targetContainers:[f]},i!==null&&(i=Ja(i),i!==null&&j_(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),t)}function Kb(t,i,s,l,f){switch(i){case"focusin":return xs=Sl(xs,t,i,s,l,f),!0;case"dragenter":return ys=Sl(ys,t,i,s,l,f),!0;case"mouseover":return Ss=Sl(Ss,t,i,s,l,f),!0;case"pointerover":var m=f.pointerId;return xl.set(m,Sl(xl.get(m)||null,t,i,s,l,f)),!0;case"gotpointercapture":return m=f.pointerId,yl.set(m,Sl(yl.get(m)||null,t,i,s,l,f)),!0}return!1}function J_(t){var i=Qa(t.target);if(i!==null){var s=c(i);if(s!==null){if(i=s.tag,i===13){if(i=u(s),i!==null){t.blockedOn=i,Lo(t.priority,function(){K_(s)});return}}else if(i===31){if(i=h(s),i!==null){t.blockedOn=i,Lo(t.priority,function(){K_(s)});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){t.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}t.blockedOn=null}function $c(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var s=ah(t.nativeEvent);if(s===null){s=t.nativeEvent;var l=new s.constructor(s.type,s);sf=l,s.target.dispatchEvent(l),sf=null}else return i=Ja(s),i!==null&&j_(i),t.blockedOn=s,!1;i.shift()}return!0}function $_(t,i,s){$c(t)&&s.delete(i)}function Zb(){rh=!1,xs!==null&&$c(xs)&&(xs=null),ys!==null&&$c(ys)&&(ys=null),Ss!==null&&$c(Ss)&&(Ss=null),xl.forEach($_),yl.forEach($_)}function eu(t,i){t.blockedOn===i&&(t.blockedOn=null,rh||(rh=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Zb)))}var tu=null;function ev(t){tu!==t&&(tu=t,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){tu===t&&(tu=null);for(var i=0;i<t.length;i+=3){var s=t[i],l=t[i+1],f=t[i+2];if(typeof l!="function"){if(sh(l||s)===null)continue;break}var m=Ja(s);m!==null&&(t.splice(i,3),i-=3,ad(m,{pending:!0,data:f,method:s.method,action:l},l,f))}}))}function jr(t){function i(G){return eu(G,t)}xs!==null&&eu(xs,t),ys!==null&&eu(ys,t),Ss!==null&&eu(Ss,t),xl.forEach(i),yl.forEach(i);for(var s=0;s<bs.length;s++){var l=bs[s];l.blockedOn===t&&(l.blockedOn=null)}for(;0<bs.length&&(s=bs[0],s.blockedOn===null);)J_(s),s.blockedOn===null&&bs.shift();if(s=(t.ownerDocument||t).$$reactFormReplay,s!=null)for(l=0;l<s.length;l+=3){var f=s[l],m=s[l+1],b=f[In]||null;if(typeof m=="function")b||ev(s);else if(b){var w=null;if(m&&m.hasAttribute("formAction")){if(f=m,b=m[In]||null)w=b.formAction;else if(sh(f)!==null)continue}else w=b.action;typeof w=="function"?s[l+1]=w:(s.splice(l,3),l-=3),ev(s)}}}function tv(){function t(m){m.canIntercept&&m.info==="react-transition"&&m.intercept({handler:function(){return new Promise(function(b){return f=b})},focusReset:"manual",scroll:"manual"})}function i(){f!==null&&(f(),f=null),l||setTimeout(s,20)}function s(){if(!l&&!navigation.transition){var m=navigation.currentEntry;m&&m.url!=null&&navigation.navigate(m.url,{state:m.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,f=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",i),navigation.addEventListener("navigateerror",i),setTimeout(s,100),function(){l=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",i),navigation.removeEventListener("navigateerror",i),f!==null&&(f(),f=null)}}}function oh(t){this._internalRoot=t}nu.prototype.render=oh.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(a(409));var s=i.current,l=gi();q_(s,l,t,i,null,null)},nu.prototype.unmount=oh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;q_(t.current,2,null,t,null,null),Ic(),i[pa]=null}};function nu(t){this._internalRoot=t}nu.prototype.unstable_scheduleHydration=function(t){if(t){var i=No();t={blockedOn:null,target:t,priority:i};for(var s=0;s<bs.length&&i!==0&&i<bs[s].priority;s++);bs.splice(s,0,t),s===0&&J_(t)}};var nv=e.version;if(nv!=="19.2.6")throw Error(a(527,nv,"19.2.6"));z.findDOMNode=function(t){var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(a(188)):(t=Object.keys(t).join(","),Error(a(268,t)));return t=d(i),t=t!==null?g(t):null,t=t===null?null:t.stateNode,t};var Qb={bundleType:0,version:"19.2.6",rendererPackageName:"react-dom",currentDispatcherRef:P,reconcilerVersion:"19.2.6"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var iu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!iu.isDisabled&&iu.supportsFiber)try{ue=iu.inject(Qb),de=iu}catch{}}return Ml.createRoot=function(t,i){if(!o(t))throw Error(a(299));var s=!1,l="",f=c0,m=u0,b=f0;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(f=i.onUncaughtError),i.onCaughtError!==void 0&&(m=i.onCaughtError),i.onRecoverableError!==void 0&&(b=i.onRecoverableError)),i=X_(t,1,!1,null,null,s,l,null,f,m,b,tv),t[pa]=i.current,Vd(t),new oh(i)},Ml.hydrateRoot=function(t,i,s){if(!o(t))throw Error(a(299));var l=!1,f="",m=c0,b=u0,w=f0,G=null;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(f=s.identifierPrefix),s.onUncaughtError!==void 0&&(m=s.onUncaughtError),s.onCaughtError!==void 0&&(b=s.onCaughtError),s.onRecoverableError!==void 0&&(w=s.onRecoverableError),s.formState!==void 0&&(G=s.formState)),i=X_(t,1,!0,i,s??null,l,f,G,m,b,w,tv),i.context=W_(null),s=i.current,l=gi(),l=Bs(l),f=os(l),f.callback=null,ls(s,f,l),s=l,i.current.lanes=s,it(i,s),Ji(i),t[pa]=i.current,Vd(t),new nu(i)},Ml.version="19.2.6",Ml}var dv;function oM(){if(dv)return uh.exports;dv=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),uh.exports=rM(),uh.exports}var lM=oM();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Qp="184",cM=0,hv=1,uM=2,Ou=1,fM=2,Il=3,Xa=0,si=1,aa=2,Va=0,fo=1,pv=2,mv=3,gv=4,dM=5,cr=100,hM=101,pM=102,mM=103,gM=104,_M=200,vM=201,xM=202,yM=203,ep=204,tp=205,SM=206,bM=207,MM=208,EM=209,TM=210,AM=211,RM=212,wM=213,CM=214,np=0,ip=1,ap=2,mo=3,sp=4,rp=5,op=6,lp=7,Xx=0,DM=1,NM=2,oa=0,Wx=1,qx=2,Yx=3,jx=4,Kx=5,Zx=6,Qx=7,_v="attached",LM="detached",Jx=300,hr=301,go=302,ph=303,mh=304,Zu=306,_o=1e3,sa=1001,Gu=1002,wn=1003,$x=1004,Bl=1005,Cn=1006,Pu=1007,Ha=1008,xi=1009,ey=1010,ty=1011,Vl=1012,Jp=1013,ua=1014,Ui=1015,Wa=1016,$p=1017,em=1018,kl=1020,ny=35902,iy=35899,ay=1021,sy=1022,Oi=1023,qa=1026,fr=1027,tm=1028,nm=1029,pr=1030,im=1031,am=1033,Iu=33776,Bu=33777,Fu=33778,zu=33779,cp=35840,up=35841,fp=35842,dp=35843,hp=36196,pp=37492,mp=37496,gp=37488,_p=37489,Vu=37490,vp=37491,xp=37808,yp=37809,Sp=37810,bp=37811,Mp=37812,Ep=37813,Tp=37814,Ap=37815,Rp=37816,wp=37817,Cp=37818,Dp=37819,Np=37820,Lp=37821,Up=36492,Op=36494,Pp=36495,Ip=36283,Bp=36284,ku=36285,Fp=36286,Xl=2300,Wl=2301,gh=2302,vv=2303,xv=2400,yv=2401,Sv=2402,UM=2500,OM=0,ry=1,zp=2,PM=3200,Hp=0,IM=1,Ls="",Gn="srgb",yi="srgb-linear",Xu="linear",Xt="srgb",Kr=7680,bv=519,BM=512,FM=513,zM=514,sm=515,HM=516,GM=517,rm=518,VM=519,Gp=35044,Mv="300 es",ra=2e3,ql=2001;function kM(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function XM(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function Yl(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function WM(){const r=Yl("canvas");return r.style.display="block",r}const Ev={};function Wu(...r){const e="THREE."+r.shift();console.log(e,...r)}function oy(r){const e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=r[1];n&&n.isStackTrace?r[0]+=" "+n.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function Ke(...r){r=oy(r);const e="THREE."+r.shift();{const n=r[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...r)}}function nt(...r){r=oy(r);const e="THREE."+r.shift();{const n=r[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...r)}}function Vp(...r){const e=r.join(" ");e in Ev||(Ev[e]=!0,Ke(...r))}function qM(r,e,n){return new Promise(function(a,o){function c(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:o();break;case r.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:a()}}setTimeout(c,n)})}const YM={[np]:ip,[ap]:op,[sp]:lp,[mo]:rp,[ip]:np,[op]:ap,[lp]:sp,[rp]:mo};class mr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[e]===void 0&&(a[e]=[]),a[e].indexOf(n)===-1&&a[e].push(n)}hasEventListener(e,n){const a=this._listeners;return a===void 0?!1:a[e]!==void 0&&a[e].indexOf(n)!==-1}removeEventListener(e,n){const a=this._listeners;if(a===void 0)return;const o=a[e];if(o!==void 0){const c=o.indexOf(n);c!==-1&&o.splice(c,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const a=n[e.type];if(a!==void 0){e.target=this;const o=a.slice(0);for(let c=0,u=o.length;c<u;c++)o[c].call(this,e);e.target=null}}}const Wn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Tv=1234567;const zl=Math.PI/180,vo=180/Math.PI;function Wi(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(Wn[r&255]+Wn[r>>8&255]+Wn[r>>16&255]+Wn[r>>24&255]+"-"+Wn[e&255]+Wn[e>>8&255]+"-"+Wn[e>>16&15|64]+Wn[e>>24&255]+"-"+Wn[n&63|128]+Wn[n>>8&255]+"-"+Wn[n>>16&255]+Wn[n>>24&255]+Wn[a&255]+Wn[a>>8&255]+Wn[a>>16&255]+Wn[a>>24&255]).toLowerCase()}function At(r,e,n){return Math.max(e,Math.min(n,r))}function om(r,e){return(r%e+e)%e}function jM(r,e,n,a,o){return a+(r-e)*(o-a)/(n-e)}function KM(r,e,n){return r!==e?(n-r)/(e-r):0}function Hl(r,e,n){return(1-n)*r+n*e}function ZM(r,e,n,a){return Hl(r,e,1-Math.exp(-n*a))}function QM(r,e=1){return e-Math.abs(om(r,e*2)-e)}function JM(r,e,n){return r<=e?0:r>=n?1:(r=(r-e)/(n-e),r*r*(3-2*r))}function $M(r,e,n){return r<=e?0:r>=n?1:(r=(r-e)/(n-e),r*r*r*(r*(r*6-15)+10))}function eE(r,e){return r+Math.floor(Math.random()*(e-r+1))}function tE(r,e){return r+Math.random()*(e-r)}function nE(r){return r*(.5-Math.random())}function iE(r){r!==void 0&&(Tv=r);let e=Tv+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function aE(r){return r*zl}function sE(r){return r*vo}function rE(r){return(r&r-1)===0&&r!==0}function oE(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function lE(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function cE(r,e,n,a,o){const c=Math.cos,u=Math.sin,h=c(n/2),p=u(n/2),d=c((e+a)/2),g=u((e+a)/2),_=c((e-a)/2),v=u((e-a)/2),x=c((a-e)/2),M=u((a-e)/2);switch(o){case"XYX":r.set(h*g,p*_,p*v,h*d);break;case"YZY":r.set(p*v,h*g,p*_,h*d);break;case"ZXZ":r.set(p*_,p*v,h*g,h*d);break;case"XZX":r.set(h*g,p*M,p*x,h*d);break;case"YXY":r.set(p*x,h*g,p*M,h*d);break;case"ZYZ":r.set(p*M,p*x,h*g,h*d);break;default:Ke("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}}function ki(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Wt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const uE={DEG2RAD:zl,RAD2DEG:vo,generateUUID:Wi,clamp:At,euclideanModulo:om,mapLinear:jM,inverseLerp:KM,lerp:Hl,damp:ZM,pingpong:QM,smoothstep:JM,smootherstep:$M,randInt:eE,randFloat:tE,randFloatSpread:nE,seededRandom:iE,degToRad:aE,radToDeg:sE,isPowerOfTwo:rE,ceilPowerOfTwo:oE,floorPowerOfTwo:lE,setQuaternionFromProperEuler:cE,normalize:Wt,denormalize:ki},ym=class ym{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,a=this.y,o=e.elements;return this.x=o[0]*n+o[3]*a+o[6],this.y=o[1]*n+o[4]*a+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=At(this.x,e.x,n.x),this.y=At(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=At(this.x,e,n),this.y=At(this.y,e,n),this}clampLength(e,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(At(a,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(e)/n;return Math.acos(At(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,a=this.y-e.y;return n*n+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,a){return this.x=e.x+(n.x-e.x)*a,this.y=e.y+(n.y-e.y)*a,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const a=Math.cos(n),o=Math.sin(n),c=this.x-e.x,u=this.y-e.y;return this.x=c*a-u*o+e.x,this.y=c*o+u*a+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};ym.prototype.isVector2=!0;let Dt=ym;class Ya{constructor(e=0,n=0,a=0,o=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=a,this._w=o}static slerpFlat(e,n,a,o,c,u,h){let p=a[o+0],d=a[o+1],g=a[o+2],_=a[o+3],v=c[u+0],x=c[u+1],M=c[u+2],A=c[u+3];if(_!==A||p!==v||d!==x||g!==M){let S=p*v+d*x+g*M+_*A;S<0&&(v=-v,x=-x,M=-M,A=-A,S=-S);let y=1-h;if(S<.9995){const C=Math.acos(S),L=Math.sin(C);y=Math.sin(y*C)/L,h=Math.sin(h*C)/L,p=p*y+v*h,d=d*y+x*h,g=g*y+M*h,_=_*y+A*h}else{p=p*y+v*h,d=d*y+x*h,g=g*y+M*h,_=_*y+A*h;const C=1/Math.sqrt(p*p+d*d+g*g+_*_);p*=C,d*=C,g*=C,_*=C}}e[n]=p,e[n+1]=d,e[n+2]=g,e[n+3]=_}static multiplyQuaternionsFlat(e,n,a,o,c,u){const h=a[o],p=a[o+1],d=a[o+2],g=a[o+3],_=c[u],v=c[u+1],x=c[u+2],M=c[u+3];return e[n]=h*M+g*_+p*x-d*v,e[n+1]=p*M+g*v+d*_-h*x,e[n+2]=d*M+g*x+h*v-p*_,e[n+3]=g*M-h*_-p*v-d*x,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,a,o){return this._x=e,this._y=n,this._z=a,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const a=e._x,o=e._y,c=e._z,u=e._order,h=Math.cos,p=Math.sin,d=h(a/2),g=h(o/2),_=h(c/2),v=p(a/2),x=p(o/2),M=p(c/2);switch(u){case"XYZ":this._x=v*g*_+d*x*M,this._y=d*x*_-v*g*M,this._z=d*g*M+v*x*_,this._w=d*g*_-v*x*M;break;case"YXZ":this._x=v*g*_+d*x*M,this._y=d*x*_-v*g*M,this._z=d*g*M-v*x*_,this._w=d*g*_+v*x*M;break;case"ZXY":this._x=v*g*_-d*x*M,this._y=d*x*_+v*g*M,this._z=d*g*M+v*x*_,this._w=d*g*_-v*x*M;break;case"ZYX":this._x=v*g*_-d*x*M,this._y=d*x*_+v*g*M,this._z=d*g*M-v*x*_,this._w=d*g*_+v*x*M;break;case"YZX":this._x=v*g*_+d*x*M,this._y=d*x*_+v*g*M,this._z=d*g*M-v*x*_,this._w=d*g*_-v*x*M;break;case"XZY":this._x=v*g*_-d*x*M,this._y=d*x*_-v*g*M,this._z=d*g*M+v*x*_,this._w=d*g*_+v*x*M;break;default:Ke("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const a=n/2,o=Math.sin(a);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,a=n[0],o=n[4],c=n[8],u=n[1],h=n[5],p=n[9],d=n[2],g=n[6],_=n[10],v=a+h+_;if(v>0){const x=.5/Math.sqrt(v+1);this._w=.25/x,this._x=(g-p)*x,this._y=(c-d)*x,this._z=(u-o)*x}else if(a>h&&a>_){const x=2*Math.sqrt(1+a-h-_);this._w=(g-p)/x,this._x=.25*x,this._y=(o+u)/x,this._z=(c+d)/x}else if(h>_){const x=2*Math.sqrt(1+h-a-_);this._w=(c-d)/x,this._x=(o+u)/x,this._y=.25*x,this._z=(p+g)/x}else{const x=2*Math.sqrt(1+_-a-h);this._w=(u-o)/x,this._x=(c+d)/x,this._y=(p+g)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let a=e.dot(n)+1;return a<1e-8?(a=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=a):(this._x=0,this._y=-e.z,this._z=e.y,this._w=a)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=a),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(At(this.dot(e),-1,1)))}rotateTowards(e,n){const a=this.angleTo(e);if(a===0)return this;const o=Math.min(1,n/a);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const a=e._x,o=e._y,c=e._z,u=e._w,h=n._x,p=n._y,d=n._z,g=n._w;return this._x=a*g+u*h+o*d-c*p,this._y=o*g+u*p+c*h-a*d,this._z=c*g+u*d+a*p-o*h,this._w=u*g-a*h-o*p-c*d,this._onChangeCallback(),this}slerp(e,n){let a=e._x,o=e._y,c=e._z,u=e._w,h=this.dot(e);h<0&&(a=-a,o=-o,c=-c,u=-u,h=-h);let p=1-n;if(h<.9995){const d=Math.acos(h),g=Math.sin(d);p=Math.sin(p*d)/g,n=Math.sin(n*d)/g,this._x=this._x*p+a*n,this._y=this._y*p+o*n,this._z=this._z*p+c*n,this._w=this._w*p+u*n,this._onChangeCallback()}else this._x=this._x*p+a*n,this._y=this._y*p+o*n,this._z=this._z*p+c*n,this._w=this._w*p+u*n,this.normalize();return this}slerpQuaternions(e,n,a){return this.copy(e).slerp(n,a)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),a=Math.random(),o=Math.sqrt(1-a),c=Math.sqrt(a);return this.set(o*Math.sin(e),o*Math.cos(e),c*Math.sin(n),c*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Sm=class Sm{constructor(e=0,n=0,a=0){this.x=e,this.y=n,this.z=a}set(e,n,a){return a===void 0&&(a=this.z),this.x=e,this.y=n,this.z=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Av.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Av.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,a=this.y,o=this.z,c=e.elements;return this.x=c[0]*n+c[3]*a+c[6]*o,this.y=c[1]*n+c[4]*a+c[7]*o,this.z=c[2]*n+c[5]*a+c[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,a=this.y,o=this.z,c=e.elements,u=1/(c[3]*n+c[7]*a+c[11]*o+c[15]);return this.x=(c[0]*n+c[4]*a+c[8]*o+c[12])*u,this.y=(c[1]*n+c[5]*a+c[9]*o+c[13])*u,this.z=(c[2]*n+c[6]*a+c[10]*o+c[14])*u,this}applyQuaternion(e){const n=this.x,a=this.y,o=this.z,c=e.x,u=e.y,h=e.z,p=e.w,d=2*(u*o-h*a),g=2*(h*n-c*o),_=2*(c*a-u*n);return this.x=n+p*d+u*_-h*g,this.y=a+p*g+h*d-c*_,this.z=o+p*_+c*g-u*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,a=this.y,o=this.z,c=e.elements;return this.x=c[0]*n+c[4]*a+c[8]*o,this.y=c[1]*n+c[5]*a+c[9]*o,this.z=c[2]*n+c[6]*a+c[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=At(this.x,e.x,n.x),this.y=At(this.y,e.y,n.y),this.z=At(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=At(this.x,e,n),this.y=At(this.y,e,n),this.z=At(this.z,e,n),this}clampLength(e,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(At(a,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,a){return this.x=e.x+(n.x-e.x)*a,this.y=e.y+(n.y-e.y)*a,this.z=e.z+(n.z-e.z)*a,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const a=e.x,o=e.y,c=e.z,u=n.x,h=n.y,p=n.z;return this.x=o*p-c*h,this.y=c*u-a*p,this.z=a*h-o*u,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const a=e.dot(this)/n;return this.copy(e).multiplyScalar(a)}projectOnPlane(e){return _h.copy(this).projectOnVector(e),this.sub(_h)}reflect(e){return this.sub(_h.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(e)/n;return Math.acos(At(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,a=this.y-e.y,o=this.z-e.z;return n*n+a*a+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,a){const o=Math.sin(n)*e;return this.x=o*Math.sin(a),this.y=Math.cos(n)*e,this.z=o*Math.cos(a),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,a){return this.x=e*Math.sin(n),this.y=a,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),a=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=a,this.z=o,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,a=Math.sqrt(1-n*n);return this.x=a*Math.cos(e),this.y=n,this.z=a*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Sm.prototype.isVector3=!0;let $=Sm;const _h=new $,Av=new Ya,bm=class bm{constructor(e,n,a,o,c,u,h,p,d){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,a,o,c,u,h,p,d)}set(e,n,a,o,c,u,h,p,d){const g=this.elements;return g[0]=e,g[1]=o,g[2]=h,g[3]=n,g[4]=c,g[5]=p,g[6]=a,g[7]=u,g[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,a=e.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],this}extractBasis(e,n,a){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const a=e.elements,o=n.elements,c=this.elements,u=a[0],h=a[3],p=a[6],d=a[1],g=a[4],_=a[7],v=a[2],x=a[5],M=a[8],A=o[0],S=o[3],y=o[6],C=o[1],L=o[4],U=o[7],F=o[2],D=o[5],I=o[8];return c[0]=u*A+h*C+p*F,c[3]=u*S+h*L+p*D,c[6]=u*y+h*U+p*I,c[1]=d*A+g*C+_*F,c[4]=d*S+g*L+_*D,c[7]=d*y+g*U+_*I,c[2]=v*A+x*C+M*F,c[5]=v*S+x*L+M*D,c[8]=v*y+x*U+M*I,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],a=e[1],o=e[2],c=e[3],u=e[4],h=e[5],p=e[6],d=e[7],g=e[8];return n*u*g-n*h*d-a*c*g+a*h*p+o*c*d-o*u*p}invert(){const e=this.elements,n=e[0],a=e[1],o=e[2],c=e[3],u=e[4],h=e[5],p=e[6],d=e[7],g=e[8],_=g*u-h*d,v=h*p-g*c,x=d*c-u*p,M=n*_+a*v+o*x;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/M;return e[0]=_*A,e[1]=(o*d-g*a)*A,e[2]=(h*a-o*u)*A,e[3]=v*A,e[4]=(g*n-o*p)*A,e[5]=(o*c-h*n)*A,e[6]=x*A,e[7]=(a*p-d*n)*A,e[8]=(u*n-a*c)*A,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,a,o,c,u,h){const p=Math.cos(c),d=Math.sin(c);return this.set(a*p,a*d,-a*(p*u+d*h)+u+e,-o*d,o*p,-o*(-d*u+p*h)+h+n,0,0,1),this}scale(e,n){return this.premultiply(vh.makeScale(e,n)),this}rotate(e){return this.premultiply(vh.makeRotation(-e)),this}translate(e,n){return this.premultiply(vh.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),a=Math.sin(e);return this.set(n,-a,0,a,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,a=e.elements;for(let o=0;o<9;o++)if(n[o]!==a[o])return!1;return!0}fromArray(e,n=0){for(let a=0;a<9;a++)this.elements[a]=e[a+n];return this}toArray(e=[],n=0){const a=this.elements;return e[n]=a[0],e[n+1]=a[1],e[n+2]=a[2],e[n+3]=a[3],e[n+4]=a[4],e[n+5]=a[5],e[n+6]=a[6],e[n+7]=a[7],e[n+8]=a[8],e}clone(){return new this.constructor().fromArray(this.elements)}};bm.prototype.isMatrix3=!0;let ut=bm;const vh=new ut,Rv=new ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),wv=new ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function fE(){const r={enabled:!0,workingColorSpace:yi,spaces:{},convert:function(o,c,u){return this.enabled===!1||c===u||!c||!u||(this.spaces[c].transfer===Xt&&(o.r=ka(o.r),o.g=ka(o.g),o.b=ka(o.b)),this.spaces[c].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[c].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Xt&&(o.r=ho(o.r),o.g=ho(o.g),o.b=ho(o.b))),o},workingToColorSpace:function(o,c){return this.convert(o,this.workingColorSpace,c)},colorSpaceToWorking:function(o,c){return this.convert(o,c,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Ls?Xu:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,c=this.workingColorSpace){return o.fromArray(this.spaces[c].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,c,u){return o.copy(this.spaces[c].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,c){return Vp("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(o,c)},toWorkingColorSpace:function(o,c){return Vp("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(o,c)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],a=[.3127,.329];return r.define({[yi]:{primaries:e,whitePoint:a,transfer:Xu,toXYZ:Rv,fromXYZ:wv,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Gn},outputColorSpaceConfig:{drawingBufferColorSpace:Gn}},[Gn]:{primaries:e,whitePoint:a,transfer:Xt,toXYZ:Rv,fromXYZ:wv,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Gn}}}),r}const Tt=fE();function ka(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function ho(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Zr;class dE{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let a;if(e instanceof HTMLCanvasElement)a=e;else{Zr===void 0&&(Zr=Yl("canvas")),Zr.width=e.width,Zr.height=e.height;const o=Zr.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),a=Zr}return a.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Yl("canvas");n.width=e.width,n.height=e.height;const a=n.getContext("2d");a.drawImage(e,0,0,e.width,e.height);const o=a.getImageData(0,0,e.width,e.height),c=o.data;for(let u=0;u<c.length;u++)c[u]=ka(c[u]/255)*255;return a.putImageData(o,0,0),n}else if(e.data){const n=e.data.slice(0);for(let a=0;a<n.length;a++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[a]=Math.floor(ka(n[a]/255)*255):n[a]=ka(n[a]);return{data:n,width:e.width,height:e.height}}else return Ke("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let hE=0;class lm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:hE++}),this.uuid=Wi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const a={uuid:this.uuid,url:""},o=this.data;if(o!==null){let c;if(Array.isArray(o)){c=[];for(let u=0,h=o.length;u<h;u++)o[u].isDataTexture?c.push(xh(o[u].image)):c.push(xh(o[u]))}else c=xh(o);a.url=c}return n||(e.images[this.uuid]=a),a}}function xh(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?dE.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(Ke("Texture: Unable to serialize Texture."),{})}let pE=0;const yh=new $;class On extends mr{constructor(e=On.DEFAULT_IMAGE,n=On.DEFAULT_MAPPING,a=sa,o=sa,c=Cn,u=Ha,h=Oi,p=xi,d=On.DEFAULT_ANISOTROPY,g=Ls){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:pE++}),this.uuid=Wi(),this.name="",this.source=new lm(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=a,this.wrapT=o,this.magFilter=c,this.minFilter=u,this.anisotropy=d,this.format=h,this.internalFormat=null,this.type=p,this.offset=new Dt(0,0),this.repeat=new Dt(1,1),this.center=new Dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(yh).x}get height(){return this.source.getSize(yh).y}get depth(){return this.source.getSize(yh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const a=e[n];if(a===void 0){Ke(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){Ke(`Texture.setValues(): property '${n}' does not exist.`);continue}o&&a&&o.isVector2&&a.isVector2||o&&a&&o.isVector3&&a.isVector3||o&&a&&o.isMatrix3&&a.isMatrix3?o.copy(a):this[n]=a}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const a={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),n||(e.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Jx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case _o:e.x=e.x-Math.floor(e.x);break;case sa:e.x=e.x<0?0:1;break;case Gu:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case _o:e.y=e.y-Math.floor(e.y);break;case sa:e.y=e.y<0?0:1;break;case Gu:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}On.DEFAULT_IMAGE=null;On.DEFAULT_MAPPING=Jx;On.DEFAULT_ANISOTROPY=1;const Mm=class Mm{constructor(e=0,n=0,a=0,o=1){this.x=e,this.y=n,this.z=a,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,a,o){return this.x=e,this.y=n,this.z=a,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,a=this.y,o=this.z,c=this.w,u=e.elements;return this.x=u[0]*n+u[4]*a+u[8]*o+u[12]*c,this.y=u[1]*n+u[5]*a+u[9]*o+u[13]*c,this.z=u[2]*n+u[6]*a+u[10]*o+u[14]*c,this.w=u[3]*n+u[7]*a+u[11]*o+u[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,a,o,c;const p=e.elements,d=p[0],g=p[4],_=p[8],v=p[1],x=p[5],M=p[9],A=p[2],S=p[6],y=p[10];if(Math.abs(g-v)<.01&&Math.abs(_-A)<.01&&Math.abs(M-S)<.01){if(Math.abs(g+v)<.1&&Math.abs(_+A)<.1&&Math.abs(M+S)<.1&&Math.abs(d+x+y-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const L=(d+1)/2,U=(x+1)/2,F=(y+1)/2,D=(g+v)/4,I=(_+A)/4,E=(M+S)/4;return L>U&&L>F?L<.01?(a=0,o=.707106781,c=.707106781):(a=Math.sqrt(L),o=D/a,c=I/a):U>F?U<.01?(a=.707106781,o=0,c=.707106781):(o=Math.sqrt(U),a=D/o,c=E/o):F<.01?(a=.707106781,o=.707106781,c=0):(c=Math.sqrt(F),a=I/c,o=E/c),this.set(a,o,c,n),this}let C=Math.sqrt((S-M)*(S-M)+(_-A)*(_-A)+(v-g)*(v-g));return Math.abs(C)<.001&&(C=1),this.x=(S-M)/C,this.y=(_-A)/C,this.z=(v-g)/C,this.w=Math.acos((d+x+y-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=At(this.x,e.x,n.x),this.y=At(this.y,e.y,n.y),this.z=At(this.z,e.z,n.z),this.w=At(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=At(this.x,e,n),this.y=At(this.y,e,n),this.z=At(this.z,e,n),this.w=At(this.w,e,n),this}clampLength(e,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(At(a,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,a){return this.x=e.x+(n.x-e.x)*a,this.y=e.y+(n.y-e.y)*a,this.z=e.z+(n.z-e.z)*a,this.w=e.w+(n.w-e.w)*a,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Mm.prototype.isVector4=!0;let $t=Mm;class mE extends mr{constructor(e=1,n=1,a={}){super(),a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Cn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},a),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=a.depth,this.scissor=new $t(0,0,e,n),this.scissorTest=!1,this.viewport=new $t(0,0,e,n),this.textures=[];const o={width:e,height:n,depth:a.depth},c=new On(o),u=a.count;for(let h=0;h<u;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(a),this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=a.depthTexture,this.samples=a.samples,this.multiview=a.multiview}_setTextureOptions(e={}){const n={minFilter:Cn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let a=0;a<this.textures.length;a++)this.textures[a].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,a=1){if(this.width!==e||this.height!==n||this.depth!==a){this.width=e,this.height=n,this.depth=a;for(let o=0,c=this.textures.length;o<c;o++)this.textures[o].image.width=e,this.textures[o].image.height=n,this.textures[o].image.depth=a,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,a=e.textures.length;n<a;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const o=Object.assign({},e.textures[n].image);this.textures[n].source=new lm(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class la extends mE{constructor(e=1,n=1,a={}){super(e,n,a),this.isWebGLRenderTarget=!0}}class ly extends On{constructor(e=null,n=1,a=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:a,depth:o},this.magFilter=wn,this.minFilter=wn,this.wrapR=sa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class gE extends On{constructor(e=null,n=1,a=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:a,depth:o},this.magFilter=wn,this.minFilter=wn,this.wrapR=sa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ku=class Ku{constructor(e,n,a,o,c,u,h,p,d,g,_,v,x,M,A,S){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,a,o,c,u,h,p,d,g,_,v,x,M,A,S)}set(e,n,a,o,c,u,h,p,d,g,_,v,x,M,A,S){const y=this.elements;return y[0]=e,y[4]=n,y[8]=a,y[12]=o,y[1]=c,y[5]=u,y[9]=h,y[13]=p,y[2]=d,y[6]=g,y[10]=_,y[14]=v,y[3]=x,y[7]=M,y[11]=A,y[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ku().fromArray(this.elements)}copy(e){const n=this.elements,a=e.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],n[9]=a[9],n[10]=a[10],n[11]=a[11],n[12]=a[12],n[13]=a[13],n[14]=a[14],n[15]=a[15],this}copyPosition(e){const n=this.elements,a=e.elements;return n[12]=a[12],n[13]=a[13],n[14]=a[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,a){return this.determinant()===0?(e.set(1,0,0),n.set(0,1,0),a.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this)}makeBasis(e,n,a){return this.set(e.x,n.x,a.x,0,e.y,n.y,a.y,0,e.z,n.z,a.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const n=this.elements,a=e.elements,o=1/Qr.setFromMatrixColumn(e,0).length(),c=1/Qr.setFromMatrixColumn(e,1).length(),u=1/Qr.setFromMatrixColumn(e,2).length();return n[0]=a[0]*o,n[1]=a[1]*o,n[2]=a[2]*o,n[3]=0,n[4]=a[4]*c,n[5]=a[5]*c,n[6]=a[6]*c,n[7]=0,n[8]=a[8]*u,n[9]=a[9]*u,n[10]=a[10]*u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,a=e.x,o=e.y,c=e.z,u=Math.cos(a),h=Math.sin(a),p=Math.cos(o),d=Math.sin(o),g=Math.cos(c),_=Math.sin(c);if(e.order==="XYZ"){const v=u*g,x=u*_,M=h*g,A=h*_;n[0]=p*g,n[4]=-p*_,n[8]=d,n[1]=x+M*d,n[5]=v-A*d,n[9]=-h*p,n[2]=A-v*d,n[6]=M+x*d,n[10]=u*p}else if(e.order==="YXZ"){const v=p*g,x=p*_,M=d*g,A=d*_;n[0]=v+A*h,n[4]=M*h-x,n[8]=u*d,n[1]=u*_,n[5]=u*g,n[9]=-h,n[2]=x*h-M,n[6]=A+v*h,n[10]=u*p}else if(e.order==="ZXY"){const v=p*g,x=p*_,M=d*g,A=d*_;n[0]=v-A*h,n[4]=-u*_,n[8]=M+x*h,n[1]=x+M*h,n[5]=u*g,n[9]=A-v*h,n[2]=-u*d,n[6]=h,n[10]=u*p}else if(e.order==="ZYX"){const v=u*g,x=u*_,M=h*g,A=h*_;n[0]=p*g,n[4]=M*d-x,n[8]=v*d+A,n[1]=p*_,n[5]=A*d+v,n[9]=x*d-M,n[2]=-d,n[6]=h*p,n[10]=u*p}else if(e.order==="YZX"){const v=u*p,x=u*d,M=h*p,A=h*d;n[0]=p*g,n[4]=A-v*_,n[8]=M*_+x,n[1]=_,n[5]=u*g,n[9]=-h*g,n[2]=-d*g,n[6]=x*_+M,n[10]=v-A*_}else if(e.order==="XZY"){const v=u*p,x=u*d,M=h*p,A=h*d;n[0]=p*g,n[4]=-_,n[8]=d*g,n[1]=v*_+A,n[5]=u*g,n[9]=x*_-M,n[2]=M*_-x,n[6]=h*g,n[10]=A*_+v}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(_E,e,vE)}lookAt(e,n,a){const o=this.elements;return _i.subVectors(e,n),_i.lengthSq()===0&&(_i.z=1),_i.normalize(),Es.crossVectors(a,_i),Es.lengthSq()===0&&(Math.abs(a.z)===1?_i.x+=1e-4:_i.z+=1e-4,_i.normalize(),Es.crossVectors(a,_i)),Es.normalize(),au.crossVectors(_i,Es),o[0]=Es.x,o[4]=au.x,o[8]=_i.x,o[1]=Es.y,o[5]=au.y,o[9]=_i.y,o[2]=Es.z,o[6]=au.z,o[10]=_i.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const a=e.elements,o=n.elements,c=this.elements,u=a[0],h=a[4],p=a[8],d=a[12],g=a[1],_=a[5],v=a[9],x=a[13],M=a[2],A=a[6],S=a[10],y=a[14],C=a[3],L=a[7],U=a[11],F=a[15],D=o[0],I=o[4],E=o[8],B=o[12],j=o[1],H=o[5],W=o[9],ce=o[13],fe=o[2],X=o[6],P=o[10],z=o[14],oe=o[3],pe=o[7],Q=o[11],O=o[15];return c[0]=u*D+h*j+p*fe+d*oe,c[4]=u*I+h*H+p*X+d*pe,c[8]=u*E+h*W+p*P+d*Q,c[12]=u*B+h*ce+p*z+d*O,c[1]=g*D+_*j+v*fe+x*oe,c[5]=g*I+_*H+v*X+x*pe,c[9]=g*E+_*W+v*P+x*Q,c[13]=g*B+_*ce+v*z+x*O,c[2]=M*D+A*j+S*fe+y*oe,c[6]=M*I+A*H+S*X+y*pe,c[10]=M*E+A*W+S*P+y*Q,c[14]=M*B+A*ce+S*z+y*O,c[3]=C*D+L*j+U*fe+F*oe,c[7]=C*I+L*H+U*X+F*pe,c[11]=C*E+L*W+U*P+F*Q,c[15]=C*B+L*ce+U*z+F*O,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],a=e[4],o=e[8],c=e[12],u=e[1],h=e[5],p=e[9],d=e[13],g=e[2],_=e[6],v=e[10],x=e[14],M=e[3],A=e[7],S=e[11],y=e[15],C=p*x-d*v,L=h*x-d*_,U=h*v-p*_,F=u*x-d*g,D=u*v-p*g,I=u*_-h*g;return n*(A*C-S*L+y*U)-a*(M*C-S*F+y*D)+o*(M*L-A*F+y*I)-c*(M*U-A*D+S*I)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,a){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=n,o[14]=a),this}invert(){const e=this.elements,n=e[0],a=e[1],o=e[2],c=e[3],u=e[4],h=e[5],p=e[6],d=e[7],g=e[8],_=e[9],v=e[10],x=e[11],M=e[12],A=e[13],S=e[14],y=e[15],C=n*h-a*u,L=n*p-o*u,U=n*d-c*u,F=a*p-o*h,D=a*d-c*h,I=o*d-c*p,E=g*A-_*M,B=g*S-v*M,j=g*y-x*M,H=_*S-v*A,W=_*y-x*A,ce=v*y-x*S,fe=C*ce-L*W+U*H+F*j-D*B+I*E;if(fe===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const X=1/fe;return e[0]=(h*ce-p*W+d*H)*X,e[1]=(o*W-a*ce-c*H)*X,e[2]=(A*I-S*D+y*F)*X,e[3]=(v*D-_*I-x*F)*X,e[4]=(p*j-u*ce-d*B)*X,e[5]=(n*ce-o*j+c*B)*X,e[6]=(S*U-M*I-y*L)*X,e[7]=(g*I-v*U+x*L)*X,e[8]=(u*W-h*j+d*E)*X,e[9]=(a*j-n*W-c*E)*X,e[10]=(M*D-A*U+y*C)*X,e[11]=(_*U-g*D-x*C)*X,e[12]=(h*B-u*H-p*E)*X,e[13]=(n*H-a*B+o*E)*X,e[14]=(A*L-M*F-S*C)*X,e[15]=(g*F-_*L+v*C)*X,this}scale(e){const n=this.elements,a=e.x,o=e.y,c=e.z;return n[0]*=a,n[4]*=o,n[8]*=c,n[1]*=a,n[5]*=o,n[9]*=c,n[2]*=a,n[6]*=o,n[10]*=c,n[3]*=a,n[7]*=o,n[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],a=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,a,o))}makeTranslation(e,n,a){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,a,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),a=Math.sin(e);return this.set(1,0,0,0,0,n,-a,0,0,a,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),a=Math.sin(e);return this.set(n,0,a,0,0,1,0,0,-a,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),a=Math.sin(e);return this.set(n,-a,0,0,a,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const a=Math.cos(n),o=Math.sin(n),c=1-a,u=e.x,h=e.y,p=e.z,d=c*u,g=c*h;return this.set(d*u+a,d*h-o*p,d*p+o*h,0,d*h+o*p,g*h+a,g*p-o*u,0,d*p-o*h,g*p+o*u,c*p*p+a,0,0,0,0,1),this}makeScale(e,n,a){return this.set(e,0,0,0,0,n,0,0,0,0,a,0,0,0,0,1),this}makeShear(e,n,a,o,c,u){return this.set(1,a,c,0,e,1,u,0,n,o,1,0,0,0,0,1),this}compose(e,n,a){const o=this.elements,c=n._x,u=n._y,h=n._z,p=n._w,d=c+c,g=u+u,_=h+h,v=c*d,x=c*g,M=c*_,A=u*g,S=u*_,y=h*_,C=p*d,L=p*g,U=p*_,F=a.x,D=a.y,I=a.z;return o[0]=(1-(A+y))*F,o[1]=(x+U)*F,o[2]=(M-L)*F,o[3]=0,o[4]=(x-U)*D,o[5]=(1-(v+y))*D,o[6]=(S+C)*D,o[7]=0,o[8]=(M+L)*I,o[9]=(S-C)*I,o[10]=(1-(v+A))*I,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,n,a){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const c=this.determinant();if(c===0)return a.set(1,1,1),n.identity(),this;let u=Qr.set(o[0],o[1],o[2]).length();const h=Qr.set(o[4],o[5],o[6]).length(),p=Qr.set(o[8],o[9],o[10]).length();c<0&&(u=-u),Hi.copy(this);const d=1/u,g=1/h,_=1/p;return Hi.elements[0]*=d,Hi.elements[1]*=d,Hi.elements[2]*=d,Hi.elements[4]*=g,Hi.elements[5]*=g,Hi.elements[6]*=g,Hi.elements[8]*=_,Hi.elements[9]*=_,Hi.elements[10]*=_,n.setFromRotationMatrix(Hi),a.x=u,a.y=h,a.z=p,this}makePerspective(e,n,a,o,c,u,h=ra,p=!1){const d=this.elements,g=2*c/(n-e),_=2*c/(a-o),v=(n+e)/(n-e),x=(a+o)/(a-o);let M,A;if(p)M=c/(u-c),A=u*c/(u-c);else if(h===ra)M=-(u+c)/(u-c),A=-2*u*c/(u-c);else if(h===ql)M=-u/(u-c),A=-u*c/(u-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return d[0]=g,d[4]=0,d[8]=v,d[12]=0,d[1]=0,d[5]=_,d[9]=x,d[13]=0,d[2]=0,d[6]=0,d[10]=M,d[14]=A,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,n,a,o,c,u,h=ra,p=!1){const d=this.elements,g=2/(n-e),_=2/(a-o),v=-(n+e)/(n-e),x=-(a+o)/(a-o);let M,A;if(p)M=1/(u-c),A=u/(u-c);else if(h===ra)M=-2/(u-c),A=-(u+c)/(u-c);else if(h===ql)M=-1/(u-c),A=-c/(u-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return d[0]=g,d[4]=0,d[8]=0,d[12]=v,d[1]=0,d[5]=_,d[9]=0,d[13]=x,d[2]=0,d[6]=0,d[10]=M,d[14]=A,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const n=this.elements,a=e.elements;for(let o=0;o<16;o++)if(n[o]!==a[o])return!1;return!0}fromArray(e,n=0){for(let a=0;a<16;a++)this.elements[a]=e[a+n];return this}toArray(e=[],n=0){const a=this.elements;return e[n]=a[0],e[n+1]=a[1],e[n+2]=a[2],e[n+3]=a[3],e[n+4]=a[4],e[n+5]=a[5],e[n+6]=a[6],e[n+7]=a[7],e[n+8]=a[8],e[n+9]=a[9],e[n+10]=a[10],e[n+11]=a[11],e[n+12]=a[12],e[n+13]=a[13],e[n+14]=a[14],e[n+15]=a[15],e}};Ku.prototype.isMatrix4=!0;let vt=Ku;const Qr=new $,Hi=new vt,_E=new $(0,0,0),vE=new $(1,1,1),Es=new $,au=new $,_i=new $,Cv=new vt,Dv=new Ya;class Ps{constructor(e=0,n=0,a=0,o=Ps.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=a,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,a,o=this._order){return this._x=e,this._y=n,this._z=a,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,a=!0){const o=e.elements,c=o[0],u=o[4],h=o[8],p=o[1],d=o[5],g=o[9],_=o[2],v=o[6],x=o[10];switch(n){case"XYZ":this._y=Math.asin(At(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,x),this._z=Math.atan2(-u,c)):(this._x=Math.atan2(v,d),this._z=0);break;case"YXZ":this._x=Math.asin(-At(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,x),this._z=Math.atan2(p,d)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(At(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-_,x),this._z=Math.atan2(-u,d)):(this._y=0,this._z=Math.atan2(p,c));break;case"ZYX":this._y=Math.asin(-At(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(v,x),this._z=Math.atan2(p,c)):(this._x=0,this._z=Math.atan2(-u,d));break;case"YZX":this._z=Math.asin(At(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-g,d),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(h,x));break;case"XZY":this._z=Math.asin(-At(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(v,d),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-g,x),this._y=0);break;default:Ke("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,a===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,a){return Cv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Cv,n,a)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Dv.setFromEuler(this),this.setFromQuaternion(Dv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ps.DEFAULT_ORDER="XYZ";let cy=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},xE=0;const Nv=new $,Jr=new Ya,La=new vt,su=new $,El=new $,yE=new $,SE=new Ya,Lv=new $(1,0,0),Uv=new $(0,1,0),Ov=new $(0,0,1),Pv={type:"added"},bE={type:"removed"},$r={type:"childadded",child:null},Sh={type:"childremoved",child:null};class ln extends mr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xE++}),this.uuid=Wi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ln.DEFAULT_UP.clone();const e=new $,n=new Ps,a=new Ya,o=new $(1,1,1);function c(){a.setFromEuler(n,!1)}function u(){n.setFromQuaternion(a,void 0,!1)}n._onChange(c),a._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new vt},normalMatrix:{value:new ut}}),this.matrix=new vt,this.matrixWorld=new vt,this.matrixAutoUpdate=ln.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new cy,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Jr.setFromAxisAngle(e,n),this.quaternion.multiply(Jr),this}rotateOnWorldAxis(e,n){return Jr.setFromAxisAngle(e,n),this.quaternion.premultiply(Jr),this}rotateX(e){return this.rotateOnAxis(Lv,e)}rotateY(e){return this.rotateOnAxis(Uv,e)}rotateZ(e){return this.rotateOnAxis(Ov,e)}translateOnAxis(e,n){return Nv.copy(e).applyQuaternion(this.quaternion),this.position.add(Nv.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Lv,e)}translateY(e){return this.translateOnAxis(Uv,e)}translateZ(e){return this.translateOnAxis(Ov,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(La.copy(this.matrixWorld).invert())}lookAt(e,n,a){e.isVector3?su.copy(e):su.set(e,n,a);const o=this.parent;this.updateWorldMatrix(!0,!1),El.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?La.lookAt(El,su,this.up):La.lookAt(su,El,this.up),this.quaternion.setFromRotationMatrix(La),o&&(La.extractRotation(o.matrixWorld),Jr.setFromRotationMatrix(La),this.quaternion.premultiply(Jr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(nt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Pv),$r.child=e,this.dispatchEvent($r),$r.child=null):nt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(bE),Sh.child=e,this.dispatchEvent(Sh),Sh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),La.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),La.multiply(e.parent.matrixWorld)),e.applyMatrix4(La),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Pv),$r.child=e,this.dispatchEvent($r),$r.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let a=0,o=this.children.length;a<o;a++){const u=this.children[a].getObjectByProperty(e,n);if(u!==void 0)return u}}getObjectsByProperty(e,n,a=[]){this[e]===n&&a.push(this);const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].getObjectsByProperty(e,n,a);return a}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(El,e,yE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(El,SE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,a=e.y,o=e.z,c=this.matrix.elements;c[12]+=n-c[0]*n-c[4]*a-c[8]*o,c[13]+=a-c[1]*n-c[5]*a-c[9]*o,c[14]+=o-c[2]*n-c[6]*a-c[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].updateMatrixWorld(e)}updateWorldMatrix(e,n){const a=this.parent;if(e===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",a={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),this.static!==!1&&(o.static=this.static),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(h=>({...h})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function c(h,p){return h[p.uuid]===void 0&&(h[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=c(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const p=h.shapes;if(Array.isArray(p))for(let d=0,g=p.length;d<g;d++){const _=p[d];c(e.shapes,_)}else c(e.shapes,p)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let p=0,d=this.material.length;p<d;p++)h.push(c(e.materials,this.material[p]));o.material=h}else o.material=c(e.materials,this.material);if(this.children.length>0){o.children=[];for(let h=0;h<this.children.length;h++)o.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let h=0;h<this.animations.length;h++){const p=this.animations[h];o.animations.push(c(e.animations,p))}}if(n){const h=u(e.geometries),p=u(e.materials),d=u(e.textures),g=u(e.images),_=u(e.shapes),v=u(e.skeletons),x=u(e.animations),M=u(e.nodes);h.length>0&&(a.geometries=h),p.length>0&&(a.materials=p),d.length>0&&(a.textures=d),g.length>0&&(a.images=g),_.length>0&&(a.shapes=_),v.length>0&&(a.skeletons=v),x.length>0&&(a.animations=x),M.length>0&&(a.nodes=M)}return a.object=o,a;function u(h){const p=[];for(const d in h){const g=h[d];delete g.metadata,p.push(g)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let a=0;a<e.children.length;a++){const o=e.children[a];this.add(o.clone())}return this}}ln.DEFAULT_UP=new $(0,1,0);ln.DEFAULT_MATRIX_AUTO_UPDATE=!0;ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class dr extends ln{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ME={type:"move"};class bh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new dr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new dr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new dr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const a of e.hand.values())this._getHandJoint(n,a)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,a){let o=null,c=null,u=null;const h=this._targetRay,p=this._grip,d=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(d&&e.hand){u=!0;for(const A of e.hand.values()){const S=n.getJointPose(A,a),y=this._getHandJoint(d,A);S!==null&&(y.matrix.fromArray(S.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=S.radius),y.visible=S!==null}const g=d.joints["index-finger-tip"],_=d.joints["thumb-tip"],v=g.position.distanceTo(_.position),x=.02,M=.005;d.inputState.pinching&&v>x+M?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&v<=x-M&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(c=n.getPose(e.gripSpace,a),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1,p.eventsEnabled&&p.dispatchEvent({type:"gripUpdated",data:e,target:this})));h!==null&&(o=n.getPose(e.targetRaySpace,a),o===null&&c!==null&&(o=c),o!==null&&(h.matrix.fromArray(o.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,o.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(o.linearVelocity)):h.hasLinearVelocity=!1,o.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(o.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(ME)))}return h!==null&&(h.visible=o!==null),p!==null&&(p.visible=c!==null),d!==null&&(d.visible=u!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const a=new dr;a.matrixAutoUpdate=!1,a.visible=!1,e.joints[n.jointName]=a,e.add(a)}return e.joints[n.jointName]}}const uy={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ts={h:0,s:0,l:0},ru={h:0,s:0,l:0};function Mh(r,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?r+(e-r)*6*n:n<1/2?e:n<2/3?r+(e-r)*6*(2/3-n):r}class ot{constructor(e,n,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,a)}set(e,n,a){if(n===void 0&&a===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,n,a);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Gn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Tt.colorSpaceToWorking(this,n),this}setRGB(e,n,a,o=Tt.workingColorSpace){return this.r=e,this.g=n,this.b=a,Tt.colorSpaceToWorking(this,o),this}setHSL(e,n,a,o=Tt.workingColorSpace){if(e=om(e,1),n=At(n,0,1),a=At(a,0,1),n===0)this.r=this.g=this.b=a;else{const c=a<=.5?a*(1+n):a+n-a*n,u=2*a-c;this.r=Mh(u,c,e+1/3),this.g=Mh(u,c,e),this.b=Mh(u,c,e-1/3)}return Tt.colorSpaceToWorking(this,o),this}setStyle(e,n=Gn){function a(c){c!==void 0&&parseFloat(c)<1&&Ke("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const u=o[1],h=o[2];switch(u){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:Ke("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=o[1],u=c.length;if(u===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(u===6)return this.setHex(parseInt(c,16),n);Ke("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Gn){const a=uy[e.toLowerCase()];return a!==void 0?this.setHex(a,n):Ke("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ka(e.r),this.g=ka(e.g),this.b=ka(e.b),this}copyLinearToSRGB(e){return this.r=ho(e.r),this.g=ho(e.g),this.b=ho(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Gn){return Tt.workingToColorSpace(qn.copy(this),e),Math.round(At(qn.r*255,0,255))*65536+Math.round(At(qn.g*255,0,255))*256+Math.round(At(qn.b*255,0,255))}getHexString(e=Gn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Tt.workingColorSpace){Tt.workingToColorSpace(qn.copy(this),n);const a=qn.r,o=qn.g,c=qn.b,u=Math.max(a,o,c),h=Math.min(a,o,c);let p,d;const g=(h+u)/2;if(h===u)p=0,d=0;else{const _=u-h;switch(d=g<=.5?_/(u+h):_/(2-u-h),u){case a:p=(o-c)/_+(o<c?6:0);break;case o:p=(c-a)/_+2;break;case c:p=(a-o)/_+4;break}p/=6}return e.h=p,e.s=d,e.l=g,e}getRGB(e,n=Tt.workingColorSpace){return Tt.workingToColorSpace(qn.copy(this),n),e.r=qn.r,e.g=qn.g,e.b=qn.b,e}getStyle(e=Gn){Tt.workingToColorSpace(qn.copy(this),e);const n=qn.r,a=qn.g,o=qn.b;return e!==Gn?`color(${e} ${n.toFixed(3)} ${a.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(a*255)},${Math.round(o*255)})`}offsetHSL(e,n,a){return this.getHSL(Ts),this.setHSL(Ts.h+e,Ts.s+n,Ts.l+a)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,a){return this.r=e.r+(n.r-e.r)*a,this.g=e.g+(n.g-e.g)*a,this.b=e.b+(n.b-e.b)*a,this}lerpHSL(e,n){this.getHSL(Ts),e.getHSL(ru);const a=Hl(Ts.h,ru.h,n),o=Hl(Ts.s,ru.s,n),c=Hl(Ts.l,ru.l,n);return this.setHSL(a,o,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,a=this.g,o=this.b,c=e.elements;return this.r=c[0]*n+c[3]*a+c[6]*o,this.g=c[1]*n+c[4]*a+c[7]*o,this.b=c[2]*n+c[5]*a+c[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const qn=new ot;ot.NAMES=uy;class EE extends ln{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ps,this.environmentIntensity=1,this.environmentRotation=new Ps,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Gi=new $,Ua=new $,Eh=new $,Oa=new $,eo=new $,to=new $,Iv=new $,Th=new $,Ah=new $,Rh=new $,wh=new $t,Ch=new $t,Dh=new $t;class Xi{constructor(e=new $,n=new $,a=new $){this.a=e,this.b=n,this.c=a}static getNormal(e,n,a,o){o.subVectors(a,n),Gi.subVectors(e,n),o.cross(Gi);const c=o.lengthSq();return c>0?o.multiplyScalar(1/Math.sqrt(c)):o.set(0,0,0)}static getBarycoord(e,n,a,o,c){Gi.subVectors(o,n),Ua.subVectors(a,n),Eh.subVectors(e,n);const u=Gi.dot(Gi),h=Gi.dot(Ua),p=Gi.dot(Eh),d=Ua.dot(Ua),g=Ua.dot(Eh),_=u*d-h*h;if(_===0)return c.set(0,0,0),null;const v=1/_,x=(d*p-h*g)*v,M=(u*g-h*p)*v;return c.set(1-x-M,M,x)}static containsPoint(e,n,a,o){return this.getBarycoord(e,n,a,o,Oa)===null?!1:Oa.x>=0&&Oa.y>=0&&Oa.x+Oa.y<=1}static getInterpolation(e,n,a,o,c,u,h,p){return this.getBarycoord(e,n,a,o,Oa)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(c,Oa.x),p.addScaledVector(u,Oa.y),p.addScaledVector(h,Oa.z),p)}static getInterpolatedAttribute(e,n,a,o,c,u){return wh.setScalar(0),Ch.setScalar(0),Dh.setScalar(0),wh.fromBufferAttribute(e,n),Ch.fromBufferAttribute(e,a),Dh.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(wh,c.x),u.addScaledVector(Ch,c.y),u.addScaledVector(Dh,c.z),u}static isFrontFacing(e,n,a,o){return Gi.subVectors(a,n),Ua.subVectors(e,n),Gi.cross(Ua).dot(o)<0}set(e,n,a){return this.a.copy(e),this.b.copy(n),this.c.copy(a),this}setFromPointsAndIndices(e,n,a,o){return this.a.copy(e[n]),this.b.copy(e[a]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,n,a,o){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,a),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Gi.subVectors(this.c,this.b),Ua.subVectors(this.a,this.b),Gi.cross(Ua).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Xi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Xi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,a,o,c){return Xi.getInterpolation(e,this.a,this.b,this.c,n,a,o,c)}containsPoint(e){return Xi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Xi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const a=this.a,o=this.b,c=this.c;let u,h;eo.subVectors(o,a),to.subVectors(c,a),Th.subVectors(e,a);const p=eo.dot(Th),d=to.dot(Th);if(p<=0&&d<=0)return n.copy(a);Ah.subVectors(e,o);const g=eo.dot(Ah),_=to.dot(Ah);if(g>=0&&_<=g)return n.copy(o);const v=p*_-g*d;if(v<=0&&p>=0&&g<=0)return u=p/(p-g),n.copy(a).addScaledVector(eo,u);Rh.subVectors(e,c);const x=eo.dot(Rh),M=to.dot(Rh);if(M>=0&&x<=M)return n.copy(c);const A=x*d-p*M;if(A<=0&&d>=0&&M<=0)return h=d/(d-M),n.copy(a).addScaledVector(to,h);const S=g*M-x*_;if(S<=0&&_-g>=0&&x-M>=0)return Iv.subVectors(c,o),h=(_-g)/(_-g+(x-M)),n.copy(o).addScaledVector(Iv,h);const y=1/(S+A+v);return u=A*y,h=v*y,n.copy(a).addScaledVector(eo,u).addScaledVector(to,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class ja{constructor(e=new $(1/0,1/0,1/0),n=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,a=e.length;n<a;n+=3)this.expandByPoint(Vi.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,a=e.count;n<a;n++)this.expandByPoint(Vi.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,a=e.length;n<a;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const a=Vi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(a),this.max.copy(e).add(a),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const a=e.geometry;if(a!==void 0){const c=a.getAttribute("position");if(n===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let u=0,h=c.count;u<h;u++)e.isMesh===!0?e.getVertexPosition(u,Vi):Vi.fromBufferAttribute(c,u),Vi.applyMatrix4(e.matrixWorld),this.expandByPoint(Vi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ou.copy(e.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),ou.copy(a.boundingBox)),ou.applyMatrix4(e.matrixWorld),this.union(ou)}const o=e.children;for(let c=0,u=o.length;c<u;c++)this.expandByObject(o[c],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Vi),Vi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,a;return e.normal.x>0?(n=e.normal.x*this.min.x,a=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,a=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,a+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,a+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,a+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,a+=e.normal.z*this.min.z),n<=-e.constant&&a>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Tl),lu.subVectors(this.max,Tl),no.subVectors(e.a,Tl),io.subVectors(e.b,Tl),ao.subVectors(e.c,Tl),As.subVectors(io,no),Rs.subVectors(ao,io),nr.subVectors(no,ao);let n=[0,-As.z,As.y,0,-Rs.z,Rs.y,0,-nr.z,nr.y,As.z,0,-As.x,Rs.z,0,-Rs.x,nr.z,0,-nr.x,-As.y,As.x,0,-Rs.y,Rs.x,0,-nr.y,nr.x,0];return!Nh(n,no,io,ao,lu)||(n=[1,0,0,0,1,0,0,0,1],!Nh(n,no,io,ao,lu))?!1:(cu.crossVectors(As,Rs),n=[cu.x,cu.y,cu.z],Nh(n,no,io,ao,lu))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Vi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Vi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Pa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Pa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Pa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Pa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Pa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Pa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Pa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Pa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Pa),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Pa=[new $,new $,new $,new $,new $,new $,new $,new $],Vi=new $,ou=new ja,no=new $,io=new $,ao=new $,As=new $,Rs=new $,nr=new $,Tl=new $,lu=new $,cu=new $,ir=new $;function Nh(r,e,n,a,o){for(let c=0,u=r.length-3;c<=u;c+=3){ir.fromArray(r,c);const h=o.x*Math.abs(ir.x)+o.y*Math.abs(ir.y)+o.z*Math.abs(ir.z),p=e.dot(ir),d=n.dot(ir),g=a.dot(ir);if(Math.max(-Math.max(p,d,g),Math.min(p,d,g))>h)return!1}return!0}const En=new $,uu=new Dt;let TE=0;class Qn extends mr{constructor(e,n,a=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:TE++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=a,this.usage=Gp,this.updateRanges=[],this.gpuType=Ui,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,a){e*=this.itemSize,a*=n.itemSize;for(let o=0,c=this.itemSize;o<c;o++)this.array[e+o]=n.array[a+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,a=this.count;n<a;n++)uu.fromBufferAttribute(this,n),uu.applyMatrix3(e),this.setXY(n,uu.x,uu.y);else if(this.itemSize===3)for(let n=0,a=this.count;n<a;n++)En.fromBufferAttribute(this,n),En.applyMatrix3(e),this.setXYZ(n,En.x,En.y,En.z);return this}applyMatrix4(e){for(let n=0,a=this.count;n<a;n++)En.fromBufferAttribute(this,n),En.applyMatrix4(e),this.setXYZ(n,En.x,En.y,En.z);return this}applyNormalMatrix(e){for(let n=0,a=this.count;n<a;n++)En.fromBufferAttribute(this,n),En.applyNormalMatrix(e),this.setXYZ(n,En.x,En.y,En.z);return this}transformDirection(e){for(let n=0,a=this.count;n<a;n++)En.fromBufferAttribute(this,n),En.transformDirection(e),this.setXYZ(n,En.x,En.y,En.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let a=this.array[e*this.itemSize+n];return this.normalized&&(a=ki(a,this.array)),a}setComponent(e,n,a){return this.normalized&&(a=Wt(a,this.array)),this.array[e*this.itemSize+n]=a,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=ki(n,this.array)),n}setX(e,n){return this.normalized&&(n=Wt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=ki(n,this.array)),n}setY(e,n){return this.normalized&&(n=Wt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=ki(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Wt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=ki(n,this.array)),n}setW(e,n){return this.normalized&&(n=Wt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,a){return e*=this.itemSize,this.normalized&&(n=Wt(n,this.array),a=Wt(a,this.array)),this.array[e+0]=n,this.array[e+1]=a,this}setXYZ(e,n,a,o){return e*=this.itemSize,this.normalized&&(n=Wt(n,this.array),a=Wt(a,this.array),o=Wt(o,this.array)),this.array[e+0]=n,this.array[e+1]=a,this.array[e+2]=o,this}setXYZW(e,n,a,o,c){return e*=this.itemSize,this.normalized&&(n=Wt(n,this.array),a=Wt(a,this.array),o=Wt(o,this.array),c=Wt(c,this.array)),this.array[e+0]=n,this.array[e+1]=a,this.array[e+2]=o,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Gp&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class fy extends Qn{constructor(e,n,a){super(new Uint16Array(e),n,a)}}class dy extends Qn{constructor(e,n,a){super(new Uint32Array(e),n,a)}}class ri extends Qn{constructor(e,n,a){super(new Float32Array(e),n,a)}}const AE=new ja,Al=new $,Lh=new $;class da{constructor(e=new $,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const a=this.center;n!==void 0?a.copy(n):AE.setFromPoints(e).getCenter(a);let o=0;for(let c=0,u=e.length;c<u;c++)o=Math.max(o,a.distanceToSquared(e[c]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const a=this.center.distanceToSquared(e);return n.copy(e),a>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Al.subVectors(e,this.center);const n=Al.lengthSq();if(n>this.radius*this.radius){const a=Math.sqrt(n),o=(a-this.radius)*.5;this.center.addScaledVector(Al,o/a),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Lh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Al.copy(e.center).add(Lh)),this.expandByPoint(Al.copy(e.center).sub(Lh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let RE=0;const Ni=new vt,Uh=new ln,so=new $,vi=new ja,Rl=new ja,Un=new $;class Si extends mr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:RE++}),this.uuid=Wi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(kM(e)?dy:fy)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,a=0){this.groups.push({start:e,count:n,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const c=new ut().getNormalMatrix(e);a.applyNormalMatrix(c),a.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ni.makeRotationFromQuaternion(e),this.applyMatrix4(Ni),this}rotateX(e){return Ni.makeRotationX(e),this.applyMatrix4(Ni),this}rotateY(e){return Ni.makeRotationY(e),this.applyMatrix4(Ni),this}rotateZ(e){return Ni.makeRotationZ(e),this.applyMatrix4(Ni),this}translate(e,n,a){return Ni.makeTranslation(e,n,a),this.applyMatrix4(Ni),this}scale(e,n,a){return Ni.makeScale(e,n,a),this.applyMatrix4(Ni),this}lookAt(e){return Uh.lookAt(e),Uh.updateMatrix(),this.applyMatrix4(Uh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(so).negate(),this.translate(so.x,so.y,so.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const a=[];for(let o=0,c=e.length;o<c;o++){const u=e[o];a.push(u.x,u.y,u.z||0)}this.setAttribute("position",new ri(a,3))}else{const a=Math.min(e.length,n.count);for(let o=0;o<a;o++){const c=e[o];n.setXYZ(o,c.x,c.y,c.z||0)}e.length>n.count&&Ke("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ja);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){nt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let a=0,o=n.length;a<o;a++){const c=n[a];vi.setFromBufferAttribute(c),this.morphTargetsRelative?(Un.addVectors(this.boundingBox.min,vi.min),this.boundingBox.expandByPoint(Un),Un.addVectors(this.boundingBox.max,vi.max),this.boundingBox.expandByPoint(Un)):(this.boundingBox.expandByPoint(vi.min),this.boundingBox.expandByPoint(vi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&nt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new da);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){nt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(e){const a=this.boundingSphere.center;if(vi.setFromBufferAttribute(e),n)for(let c=0,u=n.length;c<u;c++){const h=n[c];Rl.setFromBufferAttribute(h),this.morphTargetsRelative?(Un.addVectors(vi.min,Rl.min),vi.expandByPoint(Un),Un.addVectors(vi.max,Rl.max),vi.expandByPoint(Un)):(vi.expandByPoint(Rl.min),vi.expandByPoint(Rl.max))}vi.getCenter(a);let o=0;for(let c=0,u=e.count;c<u;c++)Un.fromBufferAttribute(e,c),o=Math.max(o,a.distanceToSquared(Un));if(n)for(let c=0,u=n.length;c<u;c++){const h=n[c],p=this.morphTargetsRelative;for(let d=0,g=h.count;d<g;d++)Un.fromBufferAttribute(h,d),p&&(so.fromBufferAttribute(e,d),Un.add(so)),o=Math.max(o,a.distanceToSquared(Un))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&nt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){nt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=n.position,o=n.normal,c=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Qn(new Float32Array(4*a.count),4));const u=this.getAttribute("tangent"),h=[],p=[];for(let E=0;E<a.count;E++)h[E]=new $,p[E]=new $;const d=new $,g=new $,_=new $,v=new Dt,x=new Dt,M=new Dt,A=new $,S=new $;function y(E,B,j){d.fromBufferAttribute(a,E),g.fromBufferAttribute(a,B),_.fromBufferAttribute(a,j),v.fromBufferAttribute(c,E),x.fromBufferAttribute(c,B),M.fromBufferAttribute(c,j),g.sub(d),_.sub(d),x.sub(v),M.sub(v);const H=1/(x.x*M.y-M.x*x.y);isFinite(H)&&(A.copy(g).multiplyScalar(M.y).addScaledVector(_,-x.y).multiplyScalar(H),S.copy(_).multiplyScalar(x.x).addScaledVector(g,-M.x).multiplyScalar(H),h[E].add(A),h[B].add(A),h[j].add(A),p[E].add(S),p[B].add(S),p[j].add(S))}let C=this.groups;C.length===0&&(C=[{start:0,count:e.count}]);for(let E=0,B=C.length;E<B;++E){const j=C[E],H=j.start,W=j.count;for(let ce=H,fe=H+W;ce<fe;ce+=3)y(e.getX(ce+0),e.getX(ce+1),e.getX(ce+2))}const L=new $,U=new $,F=new $,D=new $;function I(E){F.fromBufferAttribute(o,E),D.copy(F);const B=h[E];L.copy(B),L.sub(F.multiplyScalar(F.dot(B))).normalize(),U.crossVectors(D,B);const H=U.dot(p[E])<0?-1:1;u.setXYZW(E,L.x,L.y,L.z,H)}for(let E=0,B=C.length;E<B;++E){const j=C[E],H=j.start,W=j.count;for(let ce=H,fe=H+W;ce<fe;ce+=3)I(e.getX(ce+0)),I(e.getX(ce+1)),I(e.getX(ce+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let a=this.getAttribute("normal");if(a===void 0)a=new Qn(new Float32Array(n.count*3),3),this.setAttribute("normal",a);else for(let v=0,x=a.count;v<x;v++)a.setXYZ(v,0,0,0);const o=new $,c=new $,u=new $,h=new $,p=new $,d=new $,g=new $,_=new $;if(e)for(let v=0,x=e.count;v<x;v+=3){const M=e.getX(v+0),A=e.getX(v+1),S=e.getX(v+2);o.fromBufferAttribute(n,M),c.fromBufferAttribute(n,A),u.fromBufferAttribute(n,S),g.subVectors(u,c),_.subVectors(o,c),g.cross(_),h.fromBufferAttribute(a,M),p.fromBufferAttribute(a,A),d.fromBufferAttribute(a,S),h.add(g),p.add(g),d.add(g),a.setXYZ(M,h.x,h.y,h.z),a.setXYZ(A,p.x,p.y,p.z),a.setXYZ(S,d.x,d.y,d.z)}else for(let v=0,x=n.count;v<x;v+=3)o.fromBufferAttribute(n,v+0),c.fromBufferAttribute(n,v+1),u.fromBufferAttribute(n,v+2),g.subVectors(u,c),_.subVectors(o,c),g.cross(_),a.setXYZ(v+0,g.x,g.y,g.z),a.setXYZ(v+1,g.x,g.y,g.z),a.setXYZ(v+2,g.x,g.y,g.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,a=e.count;n<a;n++)Un.fromBufferAttribute(e,n),Un.normalize(),e.setXYZ(n,Un.x,Un.y,Un.z)}toNonIndexed(){function e(h,p){const d=h.array,g=h.itemSize,_=h.normalized,v=new d.constructor(p.length*g);let x=0,M=0;for(let A=0,S=p.length;A<S;A++){h.isInterleavedBufferAttribute?x=p[A]*h.data.stride+h.offset:x=p[A]*g;for(let y=0;y<g;y++)v[M++]=d[x++]}return new Qn(v,g,_)}if(this.index===null)return Ke("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Si,a=this.index.array,o=this.attributes;for(const h in o){const p=o[h],d=e(p,a);n.setAttribute(h,d)}const c=this.morphAttributes;for(const h in c){const p=[],d=c[h];for(let g=0,_=d.length;g<_;g++){const v=d[g],x=e(v,a);p.push(x)}n.morphAttributes[h]=p}n.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let h=0,p=u.length;h<p;h++){const d=u[h];n.addGroup(d.start,d.count,d.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const d in p)p[d]!==void 0&&(e[d]=p[d]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const a=this.attributes;for(const p in a){const d=a[p];e.data.attributes[p]=d.toJSON(e.data)}const o={};let c=!1;for(const p in this.morphAttributes){const d=this.morphAttributes[p],g=[];for(let _=0,v=d.length;_<v;_++){const x=d[_];g.push(x.toJSON(e.data))}g.length>0&&(o[p]=g,c=!0)}c&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const a=e.index;a!==null&&this.setIndex(a.clone());const o=e.attributes;for(const d in o){const g=o[d];this.setAttribute(d,g.clone(n))}const c=e.morphAttributes;for(const d in c){const g=[],_=c[d];for(let v=0,x=_.length;v<x;v++)g.push(_[v].clone(n));this.morphAttributes[d]=g}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let d=0,g=u.length;d<g;d++){const _=u[d];this.addGroup(_.start,_.count,_.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class wE{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=Gp,this.updateRanges=[],this.version=0,this.uuid=Wi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,a){e*=this.stride,a*=n.stride;for(let o=0,c=this.stride;o<c;o++)this.array[e+o]=n.array[a+o];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Wi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),a=new this.constructor(n,this.stride);return a.setUsage(this.usage),a}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Wi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const jn=new $;class cm{constructor(e,n,a,o=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=a,this.normalized=o}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,a=this.data.count;n<a;n++)jn.fromBufferAttribute(this,n),jn.applyMatrix4(e),this.setXYZ(n,jn.x,jn.y,jn.z);return this}applyNormalMatrix(e){for(let n=0,a=this.count;n<a;n++)jn.fromBufferAttribute(this,n),jn.applyNormalMatrix(e),this.setXYZ(n,jn.x,jn.y,jn.z);return this}transformDirection(e){for(let n=0,a=this.count;n<a;n++)jn.fromBufferAttribute(this,n),jn.transformDirection(e),this.setXYZ(n,jn.x,jn.y,jn.z);return this}getComponent(e,n){let a=this.array[e*this.data.stride+this.offset+n];return this.normalized&&(a=ki(a,this.array)),a}setComponent(e,n,a){return this.normalized&&(a=Wt(a,this.array)),this.data.array[e*this.data.stride+this.offset+n]=a,this}setX(e,n){return this.normalized&&(n=Wt(n,this.array)),this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.normalized&&(n=Wt(n,this.array)),this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.normalized&&(n=Wt(n,this.array)),this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.normalized&&(n=Wt(n,this.array)),this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){let n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=ki(n,this.array)),n}getY(e){let n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=ki(n,this.array)),n}getZ(e){let n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=ki(n,this.array)),n}getW(e){let n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=ki(n,this.array)),n}setXY(e,n,a){return e=e*this.data.stride+this.offset,this.normalized&&(n=Wt(n,this.array),a=Wt(a,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=a,this}setXYZ(e,n,a,o){return e=e*this.data.stride+this.offset,this.normalized&&(n=Wt(n,this.array),a=Wt(a,this.array),o=Wt(o,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=a,this.data.array[e+2]=o,this}setXYZW(e,n,a,o,c){return e=e*this.data.stride+this.offset,this.normalized&&(n=Wt(n,this.array),a=Wt(a,this.array),o=Wt(o,this.array),c=Wt(c,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=a,this.data.array[e+2]=o,this.data.array[e+3]=c,this}clone(e){if(e===void 0){Wu("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let a=0;a<this.count;a++){const o=a*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)n.push(this.data.array[o+c])}return new Qn(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new cm(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Wu("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let a=0;a<this.count;a++){const o=a*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)n.push(this.data.array[o+c])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let CE=0;class ca extends mr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:CE++}),this.uuid=Wi(),this.name="",this.type="Material",this.blending=fo,this.side=Xa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ep,this.blendDst=tp,this.blendEquation=cr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ot(0,0,0),this.blendAlpha=0,this.depthFunc=mo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=bv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Kr,this.stencilZFail=Kr,this.stencilZPass=Kr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const a=e[n];if(a===void 0){Ke(`Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){Ke(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(a):o&&o.isVector3&&a&&a.isVector3?o.copy(a):this[n]=a}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const a={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(a.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(a.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(e).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(e).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(e).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(e).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(e).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.shadowSide!==null&&(a.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),this.blending!==fo&&(a.blending=this.blending),this.side!==Xa&&(a.side=this.side),this.vertexColors===!0&&(a.vertexColors=!0),this.opacity<1&&(a.opacity=this.opacity),this.transparent===!0&&(a.transparent=!0),this.blendSrc!==ep&&(a.blendSrc=this.blendSrc),this.blendDst!==tp&&(a.blendDst=this.blendDst),this.blendEquation!==cr&&(a.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(a.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(a.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(a.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(a.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(a.blendAlpha=this.blendAlpha),this.depthFunc!==mo&&(a.depthFunc=this.depthFunc),this.depthTest===!1&&(a.depthTest=this.depthTest),this.depthWrite===!1&&(a.depthWrite=this.depthWrite),this.colorWrite===!1&&(a.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(a.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==bv&&(a.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(a.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(a.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Kr&&(a.stencilFail=this.stencilFail),this.stencilZFail!==Kr&&(a.stencilZFail=this.stencilZFail),this.stencilZPass!==Kr&&(a.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(a.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(a.rotation=this.rotation),this.polygonOffset===!0&&(a.polygonOffset=!0),this.polygonOffsetFactor!==0&&(a.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(a.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(a.linewidth=this.linewidth),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.dithering===!0&&(a.dithering=!0),this.alphaTest>0&&(a.alphaTest=this.alphaTest),this.alphaHash===!0&&(a.alphaHash=!0),this.alphaToCoverage===!0&&(a.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(a.premultipliedAlpha=!0),this.forceSinglePass===!0&&(a.forceSinglePass=!0),this.allowOverride===!1&&(a.allowOverride=!1),this.wireframe===!0&&(a.wireframe=!0),this.wireframeLinewidth>1&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(a.flatShading=!0),this.visible===!1&&(a.visible=!1),this.toneMapped===!1&&(a.toneMapped=!1),this.fog===!1&&(a.fog=!1),Object.keys(this.userData).length>0&&(a.userData=this.userData);function o(c){const u=[];for(const h in c){const p=c[h];delete p.metadata,u.push(p)}return u}if(n){const c=o(e.textures),u=o(e.images);c.length>0&&(a.textures=c),u.length>0&&(a.images=u)}return a}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let a=null;if(n!==null){const o=n.length;a=new Array(o);for(let c=0;c!==o;++c)a[c]=n[c].clone()}return this.clippingPlanes=a,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Ia=new $,Oh=new $,fu=new $,ws=new $,Ph=new $,du=new $,Ih=new $;class Qu{constructor(e=new $,n=new $(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ia)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const a=n.dot(this.direction);return a<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ia.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ia.copy(this.origin).addScaledVector(this.direction,n),Ia.distanceToSquared(e))}distanceSqToSegment(e,n,a,o){Oh.copy(e).add(n).multiplyScalar(.5),fu.copy(n).sub(e).normalize(),ws.copy(this.origin).sub(Oh);const c=e.distanceTo(n)*.5,u=-this.direction.dot(fu),h=ws.dot(this.direction),p=-ws.dot(fu),d=ws.lengthSq(),g=Math.abs(1-u*u);let _,v,x,M;if(g>0)if(_=u*p-h,v=u*h-p,M=c*g,_>=0)if(v>=-M)if(v<=M){const A=1/g;_*=A,v*=A,x=_*(_+u*v+2*h)+v*(u*_+v+2*p)+d}else v=c,_=Math.max(0,-(u*v+h)),x=-_*_+v*(v+2*p)+d;else v=-c,_=Math.max(0,-(u*v+h)),x=-_*_+v*(v+2*p)+d;else v<=-M?(_=Math.max(0,-(-u*c+h)),v=_>0?-c:Math.min(Math.max(-c,-p),c),x=-_*_+v*(v+2*p)+d):v<=M?(_=0,v=Math.min(Math.max(-c,-p),c),x=v*(v+2*p)+d):(_=Math.max(0,-(u*c+h)),v=_>0?c:Math.min(Math.max(-c,-p),c),x=-_*_+v*(v+2*p)+d);else v=u>0?-c:c,_=Math.max(0,-(u*v+h)),x=-_*_+v*(v+2*p)+d;return a&&a.copy(this.origin).addScaledVector(this.direction,_),o&&o.copy(Oh).addScaledVector(fu,v),x}intersectSphere(e,n){Ia.subVectors(e.center,this.origin);const a=Ia.dot(this.direction),o=Ia.dot(Ia)-a*a,c=e.radius*e.radius;if(o>c)return null;const u=Math.sqrt(c-o),h=a-u,p=a+u;return p<0?null:h<0?this.at(p,n):this.at(h,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(e.normal)+e.constant)/n;return a>=0?a:null}intersectPlane(e,n){const a=this.distanceToPlane(e);return a===null?null:this.at(a,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let a,o,c,u,h,p;const d=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,v=this.origin;return d>=0?(a=(e.min.x-v.x)*d,o=(e.max.x-v.x)*d):(a=(e.max.x-v.x)*d,o=(e.min.x-v.x)*d),g>=0?(c=(e.min.y-v.y)*g,u=(e.max.y-v.y)*g):(c=(e.max.y-v.y)*g,u=(e.min.y-v.y)*g),a>u||c>o||((c>a||isNaN(a))&&(a=c),(u<o||isNaN(o))&&(o=u),_>=0?(h=(e.min.z-v.z)*_,p=(e.max.z-v.z)*_):(h=(e.max.z-v.z)*_,p=(e.min.z-v.z)*_),a>p||h>o)||((h>a||a!==a)&&(a=h),(p<o||o!==o)&&(o=p),o<0)?null:this.at(a>=0?a:o,n)}intersectsBox(e){return this.intersectBox(e,Ia)!==null}intersectTriangle(e,n,a,o,c){Ph.subVectors(n,e),du.subVectors(a,e),Ih.crossVectors(Ph,du);let u=this.direction.dot(Ih),h;if(u>0){if(o)return null;h=1}else if(u<0)h=-1,u=-u;else return null;ws.subVectors(this.origin,e);const p=h*this.direction.dot(du.crossVectors(ws,du));if(p<0)return null;const d=h*this.direction.dot(Ph.cross(ws));if(d<0||p+d>u)return null;const g=-h*ws.dot(Ih);return g<0?null:this.at(g/u,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Us extends ca{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ps,this.combine=Xx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Bv=new vt,ar=new Qu,hu=new da,Fv=new $,pu=new $,mu=new $,gu=new $,Bh=new $,_u=new $,zv=new $,vu=new $;class Jn extends ln{constructor(e=new Si,n=new Us){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const o=n[a[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const h=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(e,n){const a=this.geometry,o=a.attributes.position,c=a.morphAttributes.position,u=a.morphTargetsRelative;n.fromBufferAttribute(o,e);const h=this.morphTargetInfluences;if(c&&h){_u.set(0,0,0);for(let p=0,d=c.length;p<d;p++){const g=h[p],_=c[p];g!==0&&(Bh.fromBufferAttribute(_,e),u?_u.addScaledVector(Bh,g):_u.addScaledVector(Bh.sub(n),g))}n.add(_u)}return n}raycast(e,n){const a=this.geometry,o=this.material,c=this.matrixWorld;o!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),hu.copy(a.boundingSphere),hu.applyMatrix4(c),ar.copy(e.ray).recast(e.near),!(hu.containsPoint(ar.origin)===!1&&(ar.intersectSphere(hu,Fv)===null||ar.origin.distanceToSquared(Fv)>(e.far-e.near)**2))&&(Bv.copy(c).invert(),ar.copy(e.ray).applyMatrix4(Bv),!(a.boundingBox!==null&&ar.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(e,n,ar)))}_computeIntersections(e,n,a){let o;const c=this.geometry,u=this.material,h=c.index,p=c.attributes.position,d=c.attributes.uv,g=c.attributes.uv1,_=c.attributes.normal,v=c.groups,x=c.drawRange;if(h!==null)if(Array.isArray(u))for(let M=0,A=v.length;M<A;M++){const S=v[M],y=u[S.materialIndex],C=Math.max(S.start,x.start),L=Math.min(h.count,Math.min(S.start+S.count,x.start+x.count));for(let U=C,F=L;U<F;U+=3){const D=h.getX(U),I=h.getX(U+1),E=h.getX(U+2);o=xu(this,y,e,a,d,g,_,D,I,E),o&&(o.faceIndex=Math.floor(U/3),o.face.materialIndex=S.materialIndex,n.push(o))}}else{const M=Math.max(0,x.start),A=Math.min(h.count,x.start+x.count);for(let S=M,y=A;S<y;S+=3){const C=h.getX(S),L=h.getX(S+1),U=h.getX(S+2);o=xu(this,u,e,a,d,g,_,C,L,U),o&&(o.faceIndex=Math.floor(S/3),n.push(o))}}else if(p!==void 0)if(Array.isArray(u))for(let M=0,A=v.length;M<A;M++){const S=v[M],y=u[S.materialIndex],C=Math.max(S.start,x.start),L=Math.min(p.count,Math.min(S.start+S.count,x.start+x.count));for(let U=C,F=L;U<F;U+=3){const D=U,I=U+1,E=U+2;o=xu(this,y,e,a,d,g,_,D,I,E),o&&(o.faceIndex=Math.floor(U/3),o.face.materialIndex=S.materialIndex,n.push(o))}}else{const M=Math.max(0,x.start),A=Math.min(p.count,x.start+x.count);for(let S=M,y=A;S<y;S+=3){const C=S,L=S+1,U=S+2;o=xu(this,u,e,a,d,g,_,C,L,U),o&&(o.faceIndex=Math.floor(S/3),n.push(o))}}}}function DE(r,e,n,a,o,c,u,h){let p;if(e.side===si?p=a.intersectTriangle(u,c,o,!0,h):p=a.intersectTriangle(o,c,u,e.side===Xa,h),p===null)return null;vu.copy(h),vu.applyMatrix4(r.matrixWorld);const d=n.ray.origin.distanceTo(vu);return d<n.near||d>n.far?null:{distance:d,point:vu.clone(),object:r}}function xu(r,e,n,a,o,c,u,h,p,d){r.getVertexPosition(h,pu),r.getVertexPosition(p,mu),r.getVertexPosition(d,gu);const g=DE(r,e,n,a,pu,mu,gu,zv);if(g){const _=new $;Xi.getBarycoord(zv,pu,mu,gu,_),o&&(g.uv=Xi.getInterpolatedAttribute(o,h,p,d,_,new Dt)),c&&(g.uv1=Xi.getInterpolatedAttribute(c,h,p,d,_,new Dt)),u&&(g.normal=Xi.getInterpolatedAttribute(u,h,p,d,_,new $),g.normal.dot(a.direction)>0&&g.normal.multiplyScalar(-1));const v={a:h,b:p,c:d,normal:new $,materialIndex:0};Xi.getNormal(pu,mu,gu,v.normal),g.face=v,g.barycoord=_}return g}const wl=new $t,Hv=new $t,Gv=new $t,NE=new $t,Vv=new vt,yu=new $,Fh=new da,kv=new vt,zh=new Qu;class LE extends Jn{constructor(e,n){super(e,n),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=_v,this.bindMatrix=new vt,this.bindMatrixInverse=new vt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new ja),this.boundingBox.makeEmpty();const n=e.getAttribute("position");for(let a=0;a<n.count;a++)this.getVertexPosition(a,yu),this.boundingBox.expandByPoint(yu)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new da),this.boundingSphere.makeEmpty();const n=e.getAttribute("position");for(let a=0;a<n.count;a++)this.getVertexPosition(a,yu),this.boundingSphere.expandByPoint(yu)}copy(e,n){return super.copy(e,n),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,n){const a=this.material,o=this.matrixWorld;a!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Fh.copy(this.boundingSphere),Fh.applyMatrix4(o),e.ray.intersectsSphere(Fh)!==!1&&(kv.copy(o).invert(),zh.copy(e.ray).applyMatrix4(kv),!(this.boundingBox!==null&&zh.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,n,zh)))}getVertexPosition(e,n){return super.getVertexPosition(e,n),this.applyBoneTransform(e,n),n}bind(e,n){this.skeleton=e,n===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),n=this.matrixWorld),this.bindMatrix.copy(n),this.bindMatrixInverse.copy(n).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new $t,n=this.geometry.attributes.skinWeight;for(let a=0,o=n.count;a<o;a++){e.fromBufferAttribute(n,a);const c=1/e.manhattanLength();c!==1/0?e.multiplyScalar(c):e.set(1,0,0,0),n.setXYZW(a,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===_v?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===LM?this.bindMatrixInverse.copy(this.bindMatrix).invert():Ke("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,n){const a=this.skeleton,o=this.geometry;Hv.fromBufferAttribute(o.attributes.skinIndex,e),Gv.fromBufferAttribute(o.attributes.skinWeight,e),n.isVector4?(wl.copy(n),n.set(0,0,0,0)):(wl.set(...n,1),n.set(0,0,0)),wl.applyMatrix4(this.bindMatrix);for(let c=0;c<4;c++){const u=Gv.getComponent(c);if(u!==0){const h=Hv.getComponent(c);Vv.multiplyMatrices(a.bones[h].matrixWorld,a.boneInverses[h]),n.addScaledVector(NE.copy(wl).applyMatrix4(Vv),u)}}return n.isVector4&&(n.w=wl.w),n.applyMatrix4(this.bindMatrixInverse)}}class hy extends ln{constructor(){super(),this.isBone=!0,this.type="Bone"}}class um extends On{constructor(e=null,n=1,a=1,o,c,u,h,p,d=wn,g=wn,_,v){super(null,u,h,p,d,g,o,c,_,v),this.isDataTexture=!0,this.image={data:e,width:n,height:a},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Xv=new vt,UE=new vt;class fm{constructor(e=[],n=[]){this.uuid=Wi(),this.bones=e.slice(0),this.boneInverses=n,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,n=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),n.length===0)this.calculateInverses();else if(e.length!==n.length){Ke("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let a=0,o=this.bones.length;a<o;a++)this.boneInverses.push(new vt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,n=this.bones.length;e<n;e++){const a=new vt;this.bones[e]&&a.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(a)}}pose(){for(let e=0,n=this.bones.length;e<n;e++){const a=this.bones[e];a&&a.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,n=this.bones.length;e<n;e++){const a=this.bones[e];a&&(a.parent&&a.parent.isBone?(a.matrix.copy(a.parent.matrixWorld).invert(),a.matrix.multiply(a.matrixWorld)):a.matrix.copy(a.matrixWorld),a.matrix.decompose(a.position,a.quaternion,a.scale))}}update(){const e=this.bones,n=this.boneInverses,a=this.boneMatrices,o=this.boneTexture;for(let c=0,u=e.length;c<u;c++){const h=e[c]?e[c].matrixWorld:UE;Xv.multiplyMatrices(h,n[c]),Xv.toArray(a,c*16)}o!==null&&(o.needsUpdate=!0)}clone(){return new fm(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const n=new Float32Array(e*e*4);n.set(this.boneMatrices);const a=new um(n,e,e,Oi,Ui);return a.needsUpdate=!0,this.boneMatrices=n,this.boneTexture=a,this}getBoneByName(e){for(let n=0,a=this.bones.length;n<a;n++){const o=this.bones[n];if(o.name===e)return o}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,n){this.uuid=e.uuid;for(let a=0,o=e.bones.length;a<o;a++){const c=e.bones[a];let u=n[c];u===void 0&&(Ke("Skeleton: No bone found with UUID:",c),u=new hy),this.bones.push(u),this.boneInverses.push(new vt().fromArray(e.boneInverses[a]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const n=this.bones,a=this.boneInverses;for(let o=0,c=n.length;o<c;o++){const u=n[o];e.bones.push(u.uuid);const h=a[o];e.boneInverses.push(h.toArray())}return e}}class kp extends Qn{constructor(e,n,a,o=1){super(e,n,a),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=o}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ro=new vt,Wv=new vt,Su=[],qv=new ja,OE=new vt,Cl=new Jn,Dl=new da;class PE extends Jn{constructor(e,n,a){super(e,n),this.isInstancedMesh=!0,this.instanceMatrix=new kp(new Float32Array(a*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=a,this.boundingBox=null,this.boundingSphere=null;for(let o=0;o<a;o++)this.setMatrixAt(o,OE)}computeBoundingBox(){const e=this.geometry,n=this.count;this.boundingBox===null&&(this.boundingBox=new ja),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let a=0;a<n;a++)this.getMatrixAt(a,ro),qv.copy(e.boundingBox).applyMatrix4(ro),this.boundingBox.union(qv)}computeBoundingSphere(){const e=this.geometry,n=this.count;this.boundingSphere===null&&(this.boundingSphere=new da),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let a=0;a<n;a++)this.getMatrixAt(a,ro),Dl.copy(e.boundingSphere).applyMatrix4(ro),this.boundingSphere.union(Dl)}copy(e,n){return super.copy(e,n),this.instanceMatrix.copy(e.instanceMatrix),e.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=e.previousInstanceMatrix.clone()),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,n){return this.instanceColor===null?n.setRGB(1,1,1):n.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,n){return n.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,n){const a=n.morphTargetInfluences,o=this.morphTexture.source.data.data,c=a.length+1,u=e*c+1;for(let h=0;h<a.length;h++)a[h]=o[u+h]}raycast(e,n){const a=this.matrixWorld,o=this.count;if(Cl.geometry=this.geometry,Cl.material=this.material,Cl.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Dl.copy(this.boundingSphere),Dl.applyMatrix4(a),e.ray.intersectsSphere(Dl)!==!1))for(let c=0;c<o;c++){this.getMatrixAt(c,ro),Wv.multiplyMatrices(a,ro),Cl.matrixWorld=Wv,Cl.raycast(e,Su);for(let u=0,h=Su.length;u<h;u++){const p=Su[u];p.instanceId=c,p.object=this,n.push(p)}Su.length=0}}setColorAt(e,n){return this.instanceColor===null&&(this.instanceColor=new kp(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),n.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,n){return n.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,n){const a=n.morphTargetInfluences,o=a.length+1;this.morphTexture===null&&(this.morphTexture=new um(new Float32Array(o*this.count),o,this.count,tm,Ui));const c=this.morphTexture.source.data.data;let u=0;for(let d=0;d<a.length;d++)u+=a[d];const h=this.geometry.morphTargetsRelative?1:1-u,p=o*e;return c[p]=h,c.set(a,p+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Hh=new $,IE=new $,BE=new ut;class lr{constructor(e=new $(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,a,o){return this.normal.set(e,n,a),this.constant=o,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,a){const o=Hh.subVectors(a,n).cross(IE.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,a=!0){const o=e.delta(Hh),c=this.normal.dot(o);if(c===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/c;return a===!0&&(u<0||u>1)?null:n.copy(e.start).addScaledVector(o,u)}intersectsLine(e){const n=this.distanceToPoint(e.start),a=this.distanceToPoint(e.end);return n<0&&a>0||a<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const a=n||BE.getNormalMatrix(e),o=this.coplanarPoint(Hh).applyMatrix4(e),c=this.normal.applyMatrix3(a).normalize();return this.constant=-o.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const sr=new da,FE=new Dt(.5,.5),bu=new $;class dm{constructor(e=new lr,n=new lr,a=new lr,o=new lr,c=new lr,u=new lr){this.planes=[e,n,a,o,c,u]}set(e,n,a,o,c,u){const h=this.planes;return h[0].copy(e),h[1].copy(n),h[2].copy(a),h[3].copy(o),h[4].copy(c),h[5].copy(u),this}copy(e){const n=this.planes;for(let a=0;a<6;a++)n[a].copy(e.planes[a]);return this}setFromProjectionMatrix(e,n=ra,a=!1){const o=this.planes,c=e.elements,u=c[0],h=c[1],p=c[2],d=c[3],g=c[4],_=c[5],v=c[6],x=c[7],M=c[8],A=c[9],S=c[10],y=c[11],C=c[12],L=c[13],U=c[14],F=c[15];if(o[0].setComponents(d-u,x-g,y-M,F-C).normalize(),o[1].setComponents(d+u,x+g,y+M,F+C).normalize(),o[2].setComponents(d+h,x+_,y+A,F+L).normalize(),o[3].setComponents(d-h,x-_,y-A,F-L).normalize(),a)o[4].setComponents(p,v,S,U).normalize(),o[5].setComponents(d-p,x-v,y-S,F-U).normalize();else if(o[4].setComponents(d-p,x-v,y-S,F-U).normalize(),n===ra)o[5].setComponents(d+p,x+v,y+S,F+U).normalize();else if(n===ql)o[5].setComponents(p,v,S,U).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),sr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),sr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(sr)}intersectsSprite(e){sr.center.set(0,0,0);const n=FE.distanceTo(e.center);return sr.radius=.7071067811865476+n,sr.applyMatrix4(e.matrixWorld),this.intersectsSphere(sr)}intersectsSphere(e){const n=this.planes,a=e.center,o=-e.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(a)<o)return!1;return!0}intersectsBox(e){const n=this.planes;for(let a=0;a<6;a++){const o=n[a];if(bu.x=o.normal.x>0?e.max.x:e.min.x,bu.y=o.normal.y>0?e.max.y:e.min.y,bu.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(bu)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let a=0;a<6;a++)if(n[a].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class py extends ca{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ot(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const qu=new $,Yu=new $,Yv=new vt,Nl=new Qu,Mu=new da,Gh=new $,jv=new $;class hm extends ln{constructor(e=new Si,n=new py){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,a=[0];for(let o=1,c=n.count;o<c;o++)qu.fromBufferAttribute(n,o-1),Yu.fromBufferAttribute(n,o),a[o]=a[o-1],a[o]+=qu.distanceTo(Yu);e.setAttribute("lineDistance",new ri(a,1))}else Ke("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const a=this.geometry,o=this.matrixWorld,c=e.params.Line.threshold,u=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),Mu.copy(a.boundingSphere),Mu.applyMatrix4(o),Mu.radius+=c,e.ray.intersectsSphere(Mu)===!1)return;Yv.copy(o).invert(),Nl.copy(e.ray).applyMatrix4(Yv);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),p=h*h,d=this.isLineSegments?2:1,g=a.index,v=a.attributes.position;if(g!==null){const x=Math.max(0,u.start),M=Math.min(g.count,u.start+u.count);for(let A=x,S=M-1;A<S;A+=d){const y=g.getX(A),C=g.getX(A+1),L=Eu(this,e,Nl,p,y,C,A);L&&n.push(L)}if(this.isLineLoop){const A=g.getX(M-1),S=g.getX(x),y=Eu(this,e,Nl,p,A,S,M-1);y&&n.push(y)}}else{const x=Math.max(0,u.start),M=Math.min(v.count,u.start+u.count);for(let A=x,S=M-1;A<S;A+=d){const y=Eu(this,e,Nl,p,A,A+1,A);y&&n.push(y)}if(this.isLineLoop){const A=Eu(this,e,Nl,p,M-1,x,M-1);A&&n.push(A)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const o=n[a[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const h=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function Eu(r,e,n,a,o,c,u){const h=r.geometry.attributes.position;if(qu.fromBufferAttribute(h,o),Yu.fromBufferAttribute(h,c),n.distanceSqToSegment(qu,Yu,Gh,jv)>a)return;Gh.applyMatrix4(r.matrixWorld);const d=e.ray.origin.distanceTo(Gh);if(!(d<e.near||d>e.far))return{distance:d,point:jv.clone().applyMatrix4(r.matrixWorld),index:u,face:null,faceIndex:null,barycoord:null,object:r}}const Kv=new $,Zv=new $;class zE extends hm{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,a=[];for(let o=0,c=n.count;o<c;o+=2)Kv.fromBufferAttribute(n,o),Zv.fromBufferAttribute(n,o+1),a[o]=o===0?0:a[o-1],a[o+1]=a[o]+Kv.distanceTo(Zv);e.setAttribute("lineDistance",new ri(a,1))}else Ke("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class HE extends hm{constructor(e,n){super(e,n),this.isLineLoop=!0,this.type="LineLoop"}}class my extends ca{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ot(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Qv=new vt,Xp=new Qu,Tu=new da,Au=new $;class GE extends ln{constructor(e=new Si,n=new my){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const a=this.geometry,o=this.matrixWorld,c=e.params.Points.threshold,u=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),Tu.copy(a.boundingSphere),Tu.applyMatrix4(o),Tu.radius+=c,e.ray.intersectsSphere(Tu)===!1)return;Qv.copy(o).invert(),Xp.copy(e.ray).applyMatrix4(Qv);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),p=h*h,d=a.index,_=a.attributes.position;if(d!==null){const v=Math.max(0,u.start),x=Math.min(d.count,u.start+u.count);for(let M=v,A=x;M<A;M++){const S=d.getX(M);Au.fromBufferAttribute(_,S),Jv(Au,S,p,o,e,n,this)}}else{const v=Math.max(0,u.start),x=Math.min(_.count,u.start+u.count);for(let M=v,A=x;M<A;M++)Au.fromBufferAttribute(_,M),Jv(Au,M,p,o,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const o=n[a[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const h=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function Jv(r,e,n,a,o,c,u){const h=Xp.distanceSqToPoint(r);if(h<n){const p=new $;Xp.closestPointToPoint(r,p),p.applyMatrix4(a);const d=o.ray.origin.distanceTo(p);if(d<o.near||d>o.far)return;c.push({distance:d,distanceToRay:Math.sqrt(h),point:p,index:e,face:null,faceIndex:null,barycoord:null,object:u})}}class gy extends On{constructor(e=[],n=hr,a,o,c,u,h,p,d,g){super(e,n,a,o,c,u,h,p,d,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class xo extends On{constructor(e,n,a=ua,o,c,u,h=wn,p=wn,d,g=qa,_=1){if(g!==qa&&g!==fr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:e,height:n,depth:_};super(v,o,c,u,h,p,g,a,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new lm(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class VE extends xo{constructor(e,n=ua,a=hr,o,c,u=wn,h=wn,p,d=qa){const g={width:e,height:e,depth:1},_=[g,g,g,g,g,g];super(e,e,n,a,o,c,u,h,p,d),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class _y extends On{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Eo extends Si{constructor(e=1,n=1,a=1,o=1,c=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:a,widthSegments:o,heightSegments:c,depthSegments:u};const h=this;o=Math.floor(o),c=Math.floor(c),u=Math.floor(u);const p=[],d=[],g=[],_=[];let v=0,x=0;M("z","y","x",-1,-1,a,n,e,u,c,0),M("z","y","x",1,-1,a,n,-e,u,c,1),M("x","z","y",1,1,e,a,n,o,u,2),M("x","z","y",1,-1,e,a,-n,o,u,3),M("x","y","z",1,-1,e,n,a,o,c,4),M("x","y","z",-1,-1,e,n,-a,o,c,5),this.setIndex(p),this.setAttribute("position",new ri(d,3)),this.setAttribute("normal",new ri(g,3)),this.setAttribute("uv",new ri(_,2));function M(A,S,y,C,L,U,F,D,I,E,B){const j=U/I,H=F/E,W=U/2,ce=F/2,fe=D/2,X=I+1,P=E+1;let z=0,oe=0;const pe=new $;for(let Q=0;Q<P;Q++){const O=Q*H-ce;for(let K=0;K<X;K++){const ge=K*j-W;pe[A]=ge*C,pe[S]=O*L,pe[y]=fe,d.push(pe.x,pe.y,pe.z),pe[A]=0,pe[S]=0,pe[y]=D>0?1:-1,g.push(pe.x,pe.y,pe.z),_.push(K/I),_.push(1-Q/E),z+=1}}for(let Q=0;Q<E;Q++)for(let O=0;O<I;O++){const K=v+O+X*Q,ge=v+O+X*(Q+1),ye=v+(O+1)+X*(Q+1),be=v+(O+1)+X*Q;p.push(K,ge,be),p.push(ge,ye,be),oe+=6}h.addGroup(x,oe,B),x+=oe,v+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Eo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Ju extends Si{constructor(e=1,n=1,a=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:a,heightSegments:o};const c=e/2,u=n/2,h=Math.floor(a),p=Math.floor(o),d=h+1,g=p+1,_=e/h,v=n/p,x=[],M=[],A=[],S=[];for(let y=0;y<g;y++){const C=y*v-u;for(let L=0;L<d;L++){const U=L*_-c;M.push(U,-C,0),A.push(0,0,1),S.push(L/h),S.push(1-y/p)}}for(let y=0;y<p;y++)for(let C=0;C<h;C++){const L=C+d*y,U=C+d*(y+1),F=C+1+d*(y+1),D=C+1+d*y;x.push(L,U,D),x.push(U,F,D)}this.setIndex(x),this.setAttribute("position",new ri(M,3)),this.setAttribute("normal",new ri(A,3)),this.setAttribute("uv",new ri(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ju(e.width,e.height,e.widthSegments,e.heightSegments)}}class pm extends Si{constructor(e=.5,n=1,a=32,o=1,c=0,u=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:n,thetaSegments:a,phiSegments:o,thetaStart:c,thetaLength:u},a=Math.max(3,a),o=Math.max(1,o);const h=[],p=[],d=[],g=[];let _=e;const v=(n-e)/o,x=new $,M=new Dt;for(let A=0;A<=o;A++){for(let S=0;S<=a;S++){const y=c+S/a*u;x.x=_*Math.cos(y),x.y=_*Math.sin(y),p.push(x.x,x.y,x.z),d.push(0,0,1),M.x=(x.x/n+1)/2,M.y=(x.y/n+1)/2,g.push(M.x,M.y)}_+=v}for(let A=0;A<o;A++){const S=A*(a+1);for(let y=0;y<a;y++){const C=y+S,L=C,U=C+a+1,F=C+a+2,D=C+1;h.push(L,U,D),h.push(U,F,D)}}this.setIndex(h),this.setAttribute("position",new ri(p,3)),this.setAttribute("normal",new ri(d,3)),this.setAttribute("uv",new ri(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pm(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}function yo(r){const e={};for(const n in r){e[n]={};for(const a in r[n]){const o=r[n][a];if($v(o))o.isRenderTargetTexture?(Ke("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][a]=null):e[n][a]=o.clone();else if(Array.isArray(o))if($v(o[0])){const c=[];for(let u=0,h=o.length;u<h;u++)c[u]=o[u].clone();e[n][a]=c}else e[n][a]=o.slice();else e[n][a]=o}}return e}function Kn(r){const e={};for(let n=0;n<r.length;n++){const a=yo(r[n]);for(const o in a)e[o]=a[o]}return e}function $v(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function kE(r){const e=[];for(let n=0;n<r.length;n++)e.push(r[n].clone());return e}function vy(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Tt.workingColorSpace}const XE={clone:yo,merge:Kn};var WE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,qE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class fa extends ca{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=WE,this.fragmentShader=qE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=yo(e.uniforms),this.uniformsGroups=kE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?n.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?n.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?n.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?n.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?n.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?n.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?n.uniforms[o]={type:"m4",value:u.toArray()}:n.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const a={};for(const o in this.extensions)this.extensions[o]===!0&&(a[o]=!0);return Object.keys(a).length>0&&(n.extensions=a),n}}class YE extends fa{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class $u extends ca{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ot(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Hp,this.normalScale=new Dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ps,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ha extends $u{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Dt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return At(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ot(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ot(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ot(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class jE extends ca{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=PM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class KE extends ca{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Ru(r,e){return!r||r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function ZE(r){function e(o,c){return r[o]-r[c]}const n=r.length,a=new Array(n);for(let o=0;o!==n;++o)a[o]=o;return a.sort(e),a}function ex(r,e,n){const a=r.length,o=new r.constructor(a);for(let c=0,u=0;u!==a;++c){const h=n[c]*e;for(let p=0;p!==e;++p)o[u++]=r[h+p]}return o}function xy(r,e,n,a){let o=1,c=r[0];for(;c!==void 0&&c[a]===void 0;)c=r[o++];if(c===void 0)return;let u=c[a];if(u!==void 0)if(Array.isArray(u))do u=c[a],u!==void 0&&(e.push(c.time),n.push(...u)),c=r[o++];while(c!==void 0);else if(u.toArray!==void 0)do u=c[a],u!==void 0&&(e.push(c.time),u.toArray(n,n.length)),c=r[o++];while(c!==void 0);else do u=c[a],u!==void 0&&(e.push(c.time),n.push(u)),c=r[o++];while(c!==void 0)}class To{constructor(e,n,a,o){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=o!==void 0?o:new n.constructor(a),this.sampleValues=n,this.valueSize=a,this.settings=null,this.DefaultSettings_={}}evaluate(e){const n=this.parameterPositions;let a=this._cachedIndex,o=n[a],c=n[a-1];e:{t:{let u;n:{i:if(!(e<o)){for(let h=a+2;;){if(o===void 0){if(e<c)break i;return a=n.length,this._cachedIndex=a,this.copySampleValue_(a-1)}if(a===h)break;if(c=o,o=n[++a],e<o)break t}u=n.length;break n}if(!(e>=c)){const h=n[1];e<h&&(a=2,c=h);for(let p=a-2;;){if(c===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(a===p)break;if(o=c,c=n[--a-1],e>=c)break t}u=a,a=0;break n}break e}for(;a<u;){const h=a+u>>>1;e<n[h]?u=h:a=h+1}if(o=n[a],c=n[a-1],c===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(o===void 0)return a=n.length,this._cachedIndex=a,this.copySampleValue_(a-1)}this._cachedIndex=a,this.intervalChanged_(a,c,o)}return this.interpolate_(a,c,e,o)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const n=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o;for(let u=0;u!==o;++u)n[u]=a[c+u];return n}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class QE extends To{constructor(e,n,a,o){super(e,n,a,o),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:xv,endingEnd:xv}}intervalChanged_(e,n,a){const o=this.parameterPositions;let c=e-2,u=e+1,h=o[c],p=o[u];if(h===void 0)switch(this.getSettings_().endingStart){case yv:c=e,h=2*n-a;break;case Sv:c=o.length-2,h=n+o[c]-o[c+1];break;default:c=e,h=a}if(p===void 0)switch(this.getSettings_().endingEnd){case yv:u=e,p=2*a-n;break;case Sv:u=1,p=a+o[1]-o[0];break;default:u=e-1,p=n}const d=(a-n)*.5,g=this.valueSize;this._weightPrev=d/(n-h),this._weightNext=d/(p-a),this._offsetPrev=c*g,this._offsetNext=u*g}interpolate_(e,n,a,o){const c=this.resultBuffer,u=this.sampleValues,h=this.valueSize,p=e*h,d=p-h,g=this._offsetPrev,_=this._offsetNext,v=this._weightPrev,x=this._weightNext,M=(a-n)/(o-n),A=M*M,S=A*M,y=-v*S+2*v*A-v*M,C=(1+v)*S+(-1.5-2*v)*A+(-.5+v)*M+1,L=(-1-x)*S+(1.5+x)*A+.5*M,U=x*S-x*A;for(let F=0;F!==h;++F)c[F]=y*u[g+F]+C*u[d+F]+L*u[p+F]+U*u[_+F];return c}}class JE extends To{constructor(e,n,a,o){super(e,n,a,o)}interpolate_(e,n,a,o){const c=this.resultBuffer,u=this.sampleValues,h=this.valueSize,p=e*h,d=p-h,g=(a-n)/(o-n),_=1-g;for(let v=0;v!==h;++v)c[v]=u[d+v]*_+u[p+v]*g;return c}}class $E extends To{constructor(e,n,a,o){super(e,n,a,o)}interpolate_(e){return this.copySampleValue_(e-1)}}class eT extends To{interpolate_(e,n,a,o){const c=this.resultBuffer,u=this.sampleValues,h=this.valueSize,p=e*h,d=p-h,g=this.settings||this.DefaultSettings_,_=g.inTangents,v=g.outTangents;if(!_||!v){const A=(a-n)/(o-n),S=1-A;for(let y=0;y!==h;++y)c[y]=u[d+y]*S+u[p+y]*A;return c}const x=h*2,M=e-1;for(let A=0;A!==h;++A){const S=u[d+A],y=u[p+A],C=M*x+A*2,L=v[C],U=v[C+1],F=e*x+A*2,D=_[F],I=_[F+1];let E=(a-n)/(o-n),B,j,H,W,ce;for(let fe=0;fe<8;fe++){B=E*E,j=B*E,H=1-E,W=H*H,ce=W*H;const P=ce*n+3*W*E*L+3*H*B*D+j*o-a;if(Math.abs(P)<1e-10)break;const z=3*W*(L-n)+6*H*E*(D-L)+3*B*(o-D);if(Math.abs(z)<1e-10)break;E=E-P/z,E=Math.max(0,Math.min(1,E))}c[A]=ce*S+3*W*E*U+3*H*B*I+j*y}return c}}class qi{constructor(e,n,a,o){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(n===void 0||n.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ru(n,this.TimeBufferType),this.values=Ru(a,this.ValueBufferType),this.setInterpolation(o||this.DefaultInterpolation)}static toJSON(e){const n=e.constructor;let a;if(n.toJSON!==this.toJSON)a=n.toJSON(e);else{a={name:e.name,times:Ru(e.times,Array),values:Ru(e.values,Array)};const o=e.getInterpolation();o!==e.DefaultInterpolation&&(a.interpolation=o)}return a.type=e.ValueTypeName,a}InterpolantFactoryMethodDiscrete(e){return new $E(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new JE(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new QE(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){const n=new eT(this.times,this.values,this.getValueSize(),e);return this.settings&&(n.settings=this.settings),n}setInterpolation(e){let n;switch(e){case Xl:n=this.InterpolantFactoryMethodDiscrete;break;case Wl:n=this.InterpolantFactoryMethodLinear;break;case gh:n=this.InterpolantFactoryMethodSmooth;break;case vv:n=this.InterpolantFactoryMethodBezier;break}if(n===void 0){const a="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(a);return Ke("KeyframeTrack:",a),this}return this.createInterpolant=n,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Xl;case this.InterpolantFactoryMethodLinear:return Wl;case this.InterpolantFactoryMethodSmooth:return gh;case this.InterpolantFactoryMethodBezier:return vv}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const n=this.times;for(let a=0,o=n.length;a!==o;++a)n[a]+=e}return this}scale(e){if(e!==1){const n=this.times;for(let a=0,o=n.length;a!==o;++a)n[a]*=e}return this}trim(e,n){const a=this.times,o=a.length;let c=0,u=o-1;for(;c!==o&&a[c]<e;)++c;for(;u!==-1&&a[u]>n;)--u;if(++u,c!==0||u!==o){c>=u&&(u=Math.max(u,1),c=u-1);const h=this.getValueSize();this.times=a.slice(c,u),this.values=this.values.slice(c*h,u*h)}return this}validate(){let e=!0;const n=this.getValueSize();n-Math.floor(n)!==0&&(nt("KeyframeTrack: Invalid value size in track.",this),e=!1);const a=this.times,o=this.values,c=a.length;c===0&&(nt("KeyframeTrack: Track is empty.",this),e=!1);let u=null;for(let h=0;h!==c;h++){const p=a[h];if(typeof p=="number"&&isNaN(p)){nt("KeyframeTrack: Time is not a valid number.",this,h,p),e=!1;break}if(u!==null&&u>p){nt("KeyframeTrack: Out of order keys.",this,h,p,u),e=!1;break}u=p}if(o!==void 0&&XM(o))for(let h=0,p=o.length;h!==p;++h){const d=o[h];if(isNaN(d)){nt("KeyframeTrack: Value is not a valid number.",this,h,d),e=!1;break}}return e}optimize(){const e=this.times.slice(),n=this.values.slice(),a=this.getValueSize(),o=this.getInterpolation()===gh,c=e.length-1;let u=1;for(let h=1;h<c;++h){let p=!1;const d=e[h],g=e[h+1];if(d!==g&&(h!==1||d!==e[0]))if(o)p=!0;else{const _=h*a,v=_-a,x=_+a;for(let M=0;M!==a;++M){const A=n[_+M];if(A!==n[v+M]||A!==n[x+M]){p=!0;break}}}if(p){if(h!==u){e[u]=e[h];const _=h*a,v=u*a;for(let x=0;x!==a;++x)n[v+x]=n[_+x]}++u}}if(c>0){e[u]=e[c];for(let h=c*a,p=u*a,d=0;d!==a;++d)n[p+d]=n[h+d];++u}return u!==e.length?(this.times=e.slice(0,u),this.values=n.slice(0,u*a)):(this.times=e,this.values=n),this}clone(){const e=this.times.slice(),n=this.values.slice(),a=this.constructor,o=new a(this.name,e,n);return o.createInterpolant=this.createInterpolant,o}}qi.prototype.ValueTypeName="";qi.prototype.TimeBufferType=Float32Array;qi.prototype.ValueBufferType=Float32Array;qi.prototype.DefaultInterpolation=Wl;class Ao extends qi{constructor(e,n,a){super(e,n,a)}}Ao.prototype.ValueTypeName="bool";Ao.prototype.ValueBufferType=Array;Ao.prototype.DefaultInterpolation=Xl;Ao.prototype.InterpolantFactoryMethodLinear=void 0;Ao.prototype.InterpolantFactoryMethodSmooth=void 0;class yy extends qi{constructor(e,n,a,o){super(e,n,a,o)}}yy.prototype.ValueTypeName="color";class So extends qi{constructor(e,n,a,o){super(e,n,a,o)}}So.prototype.ValueTypeName="number";class tT extends To{constructor(e,n,a,o){super(e,n,a,o)}interpolate_(e,n,a,o){const c=this.resultBuffer,u=this.sampleValues,h=this.valueSize,p=(a-n)/(o-n);let d=e*h;for(let g=d+h;d!==g;d+=4)Ya.slerpFlat(c,0,u,d-h,u,d,p);return c}}class bo extends qi{constructor(e,n,a,o){super(e,n,a,o)}InterpolantFactoryMethodLinear(e){return new tT(this.times,this.values,this.getValueSize(),e)}}bo.prototype.ValueTypeName="quaternion";bo.prototype.InterpolantFactoryMethodSmooth=void 0;class Ro extends qi{constructor(e,n,a){super(e,n,a)}}Ro.prototype.ValueTypeName="string";Ro.prototype.ValueBufferType=Array;Ro.prototype.DefaultInterpolation=Xl;Ro.prototype.InterpolantFactoryMethodLinear=void 0;Ro.prototype.InterpolantFactoryMethodSmooth=void 0;class Mo extends qi{constructor(e,n,a,o){super(e,n,a,o)}}Mo.prototype.ValueTypeName="vector";class nT{constructor(e="",n=-1,a=[],o=UM){this.name=e,this.tracks=a,this.duration=n,this.blendMode=o,this.uuid=Wi(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const n=[],a=e.tracks,o=1/(e.fps||1);for(let u=0,h=a.length;u!==h;++u)n.push(aT(a[u]).scale(o));const c=new this(e.name,e.duration,n,e.blendMode);return c.uuid=e.uuid,c.userData=JSON.parse(e.userData||"{}"),c}static toJSON(e){const n=[],a=e.tracks,o={name:e.name,duration:e.duration,tracks:n,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let c=0,u=a.length;c!==u;++c)n.push(qi.toJSON(a[c]));return o}static CreateFromMorphTargetSequence(e,n,a,o){const c=n.length,u=[];for(let h=0;h<c;h++){let p=[],d=[];p.push((h+c-1)%c,h,(h+1)%c),d.push(0,1,0);const g=ZE(p);p=ex(p,1,g),d=ex(d,1,g),!o&&p[0]===0&&(p.push(c),d.push(d[0])),u.push(new So(".morphTargetInfluences["+n[h].name+"]",p,d).scale(1/a))}return new this(e,-1,u)}static findByName(e,n){let a=e;if(!Array.isArray(e)){const o=e;a=o.geometry&&o.geometry.animations||o.animations}for(let o=0;o<a.length;o++)if(a[o].name===n)return a[o];return null}static CreateClipsFromMorphTargetSequences(e,n,a){const o={},c=/^([\w-]*?)([\d]+)$/;for(let h=0,p=e.length;h<p;h++){const d=e[h],g=d.name.match(c);if(g&&g.length>1){const _=g[1];let v=o[_];v||(o[_]=v=[]),v.push(d)}}const u=[];for(const h in o)u.push(this.CreateFromMorphTargetSequence(h,o[h],n,a));return u}static parseAnimation(e,n){if(Ke("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return nt("AnimationClip: No animation in JSONLoader data."),null;const a=function(_,v,x,M,A){if(x.length!==0){const S=[],y=[];xy(x,S,y,M),S.length!==0&&A.push(new _(v,S,y))}},o=[],c=e.name||"default",u=e.fps||30,h=e.blendMode;let p=e.length||-1;const d=e.hierarchy||[];for(let _=0;_<d.length;_++){const v=d[_].keys;if(!(!v||v.length===0))if(v[0].morphTargets){const x={};let M;for(M=0;M<v.length;M++)if(v[M].morphTargets)for(let A=0;A<v[M].morphTargets.length;A++)x[v[M].morphTargets[A]]=-1;for(const A in x){const S=[],y=[];for(let C=0;C!==v[M].morphTargets.length;++C){const L=v[M];S.push(L.time),y.push(L.morphTarget===A?1:0)}o.push(new So(".morphTargetInfluence["+A+"]",S,y))}p=x.length*u}else{const x=".bones["+n[_].name+"]";a(Mo,x+".position",v,"pos",o),a(bo,x+".quaternion",v,"rot",o),a(Mo,x+".scale",v,"scl",o)}}return o.length===0?null:new this(c,p,o,h)}resetDuration(){const e=this.tracks;let n=0;for(let a=0,o=e.length;a!==o;++a){const c=this.tracks[a];n=Math.max(n,c.times[c.times.length-1])}return this.duration=n,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let n=0;n<this.tracks.length;n++)e=e&&this.tracks[n].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let a=0;a<this.tracks.length;a++)e.push(this.tracks[a].clone());const n=new this.constructor(this.name,this.duration,e,this.blendMode);return n.userData=JSON.parse(JSON.stringify(this.userData)),n}toJSON(){return this.constructor.toJSON(this)}}function iT(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return So;case"vector":case"vector2":case"vector3":case"vector4":return Mo;case"color":return yy;case"quaternion":return bo;case"bool":case"boolean":return Ao;case"string":return Ro}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function aT(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=iT(r.type);if(r.times===void 0){const n=[],a=[];xy(r.keys,n,a,"value"),r.times=n,r.values=a}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const Ga={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(tx(r)||(this.files[r]=e))},get:function(r){if(this.enabled!==!1&&!tx(r))return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};function tx(r){try{const e=r.slice(r.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class sT{constructor(e,n,a){const o=this;let c=!1,u=0,h=0,p;const d=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=a,this._abortController=null,this.itemStart=function(g){h++,c===!1&&o.onStart!==void 0&&o.onStart(g,u,h),c=!0},this.itemEnd=function(g){u++,o.onProgress!==void 0&&o.onProgress(g,u,h),u===h&&(c=!1,o.onLoad!==void 0&&o.onLoad())},this.itemError=function(g){o.onError!==void 0&&o.onError(g)},this.resolveURL=function(g){return p?p(g):g},this.setURLModifier=function(g){return p=g,this},this.addHandler=function(g,_){return d.push(g,_),this},this.removeHandler=function(g){const _=d.indexOf(g);return _!==-1&&d.splice(_,2),this},this.getHandler=function(g){for(let _=0,v=d.length;_<v;_+=2){const x=d[_],M=d[_+1];if(x.global&&(x.lastIndex=0),x.test(g))return M}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const rT=new sT;class wo{constructor(e){this.manager=e!==void 0?e:rT,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,n){const a=this;return new Promise(function(o,c){a.load(e,o,n,c)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}wo.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ba={};class oT extends Error{constructor(e,n){super(e),this.response=n}}class Sy extends wo{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,n,a,o){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const c=Ga.get(`file:${e}`);if(c!==void 0){this.manager.itemStart(e),setTimeout(()=>{n&&n(c),this.manager.itemEnd(e)},0);return}if(Ba[e]!==void 0){Ba[e].push({onLoad:n,onProgress:a,onError:o});return}Ba[e]=[],Ba[e].push({onLoad:n,onProgress:a,onError:o});const u=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),h=this.mimeType,p=this.responseType;fetch(u).then(d=>{if(d.status===200||d.status===0){if(d.status===0&&Ke("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||d.body===void 0||d.body.getReader===void 0)return d;const g=Ba[e],_=d.body.getReader(),v=d.headers.get("X-File-Size")||d.headers.get("Content-Length"),x=v?parseInt(v):0,M=x!==0;let A=0;const S=new ReadableStream({start(y){C();function C(){_.read().then(({done:L,value:U})=>{if(L)y.close();else{A+=U.byteLength;const F=new ProgressEvent("progress",{lengthComputable:M,loaded:A,total:x});for(let D=0,I=g.length;D<I;D++){const E=g[D];E.onProgress&&E.onProgress(F)}y.enqueue(U),C()}},L=>{y.error(L)})}}});return new Response(S)}else throw new oT(`fetch for "${d.url}" responded with ${d.status}: ${d.statusText}`,d)}).then(d=>{switch(p){case"arraybuffer":return d.arrayBuffer();case"blob":return d.blob();case"document":return d.text().then(g=>new DOMParser().parseFromString(g,h));case"json":return d.json();default:if(h==="")return d.text();{const _=/charset="?([^;"\s]*)"?/i.exec(h),v=_&&_[1]?_[1].toLowerCase():void 0,x=new TextDecoder(v);return d.arrayBuffer().then(M=>x.decode(M))}}}).then(d=>{Ga.add(`file:${e}`,d);const g=Ba[e];delete Ba[e];for(let _=0,v=g.length;_<v;_++){const x=g[_];x.onLoad&&x.onLoad(d)}}).catch(d=>{const g=Ba[e];if(g===void 0)throw this.manager.itemError(e),d;delete Ba[e];for(let _=0,v=g.length;_<v;_++){const x=g[_];x.onError&&x.onError(d)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const oo=new WeakMap;class lT extends wo{constructor(e){super(e)}load(e,n,a,o){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const c=this,u=Ga.get(`image:${e}`);if(u!==void 0){if(u.complete===!0)c.manager.itemStart(e),setTimeout(function(){n&&n(u),c.manager.itemEnd(e)},0);else{let _=oo.get(u);_===void 0&&(_=[],oo.set(u,_)),_.push({onLoad:n,onError:o})}return u}const h=Yl("img");function p(){g(),n&&n(this);const _=oo.get(this)||[];for(let v=0;v<_.length;v++){const x=_[v];x.onLoad&&x.onLoad(this)}oo.delete(this),c.manager.itemEnd(e)}function d(_){g(),o&&o(_),Ga.remove(`image:${e}`);const v=oo.get(this)||[];for(let x=0;x<v.length;x++){const M=v[x];M.onError&&M.onError(_)}oo.delete(this),c.manager.itemError(e),c.manager.itemEnd(e)}function g(){h.removeEventListener("load",p,!1),h.removeEventListener("error",d,!1)}return h.addEventListener("load",p,!1),h.addEventListener("error",d,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(h.crossOrigin=this.crossOrigin),Ga.add(`image:${e}`,h),c.manager.itemStart(e),h.src=e,h}}class cT extends wo{constructor(e){super(e)}load(e,n,a,o){const c=new On,u=new lT(this.manager);return u.setCrossOrigin(this.crossOrigin),u.setPath(this.path),u.load(e,function(h){c.image=h,c.needsUpdate=!0,n!==void 0&&n(c)},a,o),c}}class ef extends ln{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new ot(e),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}class uT extends ef{constructor(e,n,a){super(e,a),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ln.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ot(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}toJSON(e){const n=super.toJSON(e);return n.object.groundColor=this.groundColor.getHex(),n}}const Vh=new vt,nx=new $,ix=new $;class mm{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Dt(512,512),this.mapType=xi,this.map=null,this.mapPass=null,this.matrix=new vt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new dm,this._frameExtents=new Dt(1,1),this._viewportCount=1,this._viewports=[new $t(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,a=this.matrix;nx.setFromMatrixPosition(e.matrixWorld),n.position.copy(nx),ix.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(ix),n.updateMatrixWorld(),Vh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Vh,n.coordinateSystem,n.reversedDepth),n.coordinateSystem===ql||n.reversedDepth?a.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):a.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),a.multiply(Vh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const wu=new $,Cu=new Ya,$i=new $;class by extends ln{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new vt,this.projectionMatrix=new vt,this.projectionMatrixInverse=new vt,this.coordinateSystem=ra,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(wu,Cu,$i),$i.x===1&&$i.y===1&&$i.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(wu,Cu,$i.set(1,1,1)).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorld.decompose(wu,Cu,$i),$i.x===1&&$i.y===1&&$i.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(wu,Cu,$i.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Cs=new $,ax=new Dt,sx=new Dt;class Zn extends by{constructor(e=50,n=1,a=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=a,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=vo*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(zl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return vo*2*Math.atan(Math.tan(zl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,a){Cs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Cs.x,Cs.y).multiplyScalar(-e/Cs.z),Cs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(Cs.x,Cs.y).multiplyScalar(-e/Cs.z)}getViewSize(e,n){return this.getViewBounds(e,ax,sx),n.subVectors(sx,ax)}setViewOffset(e,n,a,o,c,u){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(zl*.5*this.fov)/this.zoom,a=2*n,o=this.aspect*a,c=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const p=u.fullWidth,d=u.fullHeight;c+=u.offsetX*o/p,n-=u.offsetY*a/d,o*=u.width/p,a*=u.height/d}const h=this.filmOffset;h!==0&&(c+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+o,n,n-a,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class fT extends mm{constructor(){super(new Zn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const n=this.camera,a=vo*2*e.angle*this.focus,o=this.mapSize.width/this.mapSize.height*this.aspect,c=e.distance||n.far;(a!==n.fov||o!==n.aspect||c!==n.far)&&(n.fov=a,n.aspect=o,n.far=c,n.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class dT extends ef{constructor(e,n,a=0,o=Math.PI/3,c=0,u=2){super(e,n),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ln.DEFAULT_UP),this.updateMatrix(),this.target=new ln,this.distance=a,this.angle=o,this.penumbra=c,this.decay=u,this.map=null,this.shadow=new fT}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.distance=this.distance,n.object.angle=this.angle,n.object.decay=this.decay,n.object.penumbra=this.penumbra,n.object.target=this.target.uuid,this.map&&this.map.isTexture&&(n.object.map=this.map.toJSON(e).uuid),n.object.shadow=this.shadow.toJSON(),n}}class hT extends mm{constructor(){super(new Zn(90,1,.5,500)),this.isPointLightShadow=!0}}class pT extends ef{constructor(e,n,a=0,o=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=a,this.decay=o,this.shadow=new hT}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.distance=this.distance,n.object.decay=this.decay,n.object.shadow=this.shadow.toJSON(),n}}class tf extends by{constructor(e=-1,n=1,a=1,o=-1,c=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=a,this.bottom=o,this.near=c,this.far=u,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,a,o,c,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let c=a-e,u=a+e,h=o+n,p=o-n;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=d*this.view.offsetX,u=c+d*this.view.width,h-=g*this.view.offsetY,p=h-g*this.view.height}this.projectionMatrix.makeOrthographic(c,u,h,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class mT extends mm{constructor(){super(new tf(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class My extends ef{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ln.DEFAULT_UP),this.updateMatrix(),this.target=new ln,this.shadow=new mT}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}class Gl{static extractUrlBase(e){const n=e.lastIndexOf("/");return n===-1?"./":e.slice(0,n+1)}static resolveURL(e,n){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(n)&&/^\//.test(e)&&(n=n.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:n+e)}}const kh=new WeakMap;class gT extends wo{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Ke("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Ke("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,n,a,o){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const c=this,u=Ga.get(`image-bitmap:${e}`);if(u!==void 0){if(c.manager.itemStart(e),u.then){u.then(d=>{kh.has(u)===!0?(o&&o(kh.get(u)),c.manager.itemError(e),c.manager.itemEnd(e)):(n&&n(d),c.manager.itemEnd(e))});return}setTimeout(function(){n&&n(u),c.manager.itemEnd(e)},0);return}const h={};h.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",h.headers=this.requestHeader,h.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const p=fetch(e,h).then(function(d){return d.blob()}).then(function(d){return createImageBitmap(d,Object.assign(c.options,{colorSpaceConversion:"none"}))}).then(function(d){Ga.add(`image-bitmap:${e}`,d),n&&n(d),c.manager.itemEnd(e)}).catch(function(d){o&&o(d),kh.set(p,d),Ga.remove(`image-bitmap:${e}`),c.manager.itemError(e),c.manager.itemEnd(e)});Ga.add(`image-bitmap:${e}`,p),c.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const lo=-90,co=1;class _T extends ln{constructor(e,n,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Zn(lo,co,e,n);o.layers=this.layers,this.add(o);const c=new Zn(lo,co,e,n);c.layers=this.layers,this.add(c);const u=new Zn(lo,co,e,n);u.layers=this.layers,this.add(u);const h=new Zn(lo,co,e,n);h.layers=this.layers,this.add(h);const p=new Zn(lo,co,e,n);p.layers=this.layers,this.add(p);const d=new Zn(lo,co,e,n);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[a,o,c,u,h,p]=n;for(const d of n)this.remove(d);if(e===ra)a.up.set(0,1,0),a.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===ql)a.up.set(0,-1,0),a.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const d of n)this.add(d),d.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:a,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,u,h,p,d,g]=this.children,_=e.getRenderTarget(),v=e.getActiveCubeFace(),x=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const A=a.texture.generateMipmaps;a.texture.generateMipmaps=!1;let S=!1;e.isWebGLRenderer===!0?S=e.state.buffers.depth.getReversed():S=e.reversedDepthBuffer,e.setRenderTarget(a,0,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),e.setRenderTarget(a,1,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(n,u),e.setRenderTarget(a,2,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(n,h),e.setRenderTarget(a,3,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(n,p),e.setRenderTarget(a,4,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(n,d),a.texture.generateMipmaps=A,e.setRenderTarget(a,5,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(n,g),e.setRenderTarget(_,v,x),e.xr.enabled=M,a.texture.needsPMREMUpdate=!0}}class vT extends Zn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const gm="\\[\\]\\.:\\/",xT=new RegExp("["+gm+"]","g"),_m="[^"+gm+"]",yT="[^"+gm.replace("\\.","")+"]",ST=/((?:WC+[\/:])*)/.source.replace("WC",_m),bT=/(WCOD+)?/.source.replace("WCOD",yT),MT=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",_m),ET=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",_m),TT=new RegExp("^"+ST+bT+MT+ET+"$"),AT=["material","materials","bones","map"];class RT{constructor(e,n,a){const o=a||qt.parseTrackName(n);this._targetGroup=e,this._bindings=e.subscribe_(n,o)}getValue(e,n){this.bind();const a=this._targetGroup.nCachedObjects_,o=this._bindings[a];o!==void 0&&o.getValue(e,n)}setValue(e,n){const a=this._bindings;for(let o=this._targetGroup.nCachedObjects_,c=a.length;o!==c;++o)a[o].setValue(e,n)}bind(){const e=this._bindings;for(let n=this._targetGroup.nCachedObjects_,a=e.length;n!==a;++n)e[n].bind()}unbind(){const e=this._bindings;for(let n=this._targetGroup.nCachedObjects_,a=e.length;n!==a;++n)e[n].unbind()}}class qt{constructor(e,n,a){this.path=n,this.parsedPath=a||qt.parseTrackName(n),this.node=qt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,n,a){return e&&e.isAnimationObjectGroup?new qt.Composite(e,n,a):new qt(e,n,a)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(xT,"")}static parseTrackName(e){const n=TT.exec(e);if(n===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const a={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},o=a.nodeName&&a.nodeName.lastIndexOf(".");if(o!==void 0&&o!==-1){const c=a.nodeName.substring(o+1);AT.indexOf(c)!==-1&&(a.nodeName=a.nodeName.substring(0,o),a.objectName=c)}if(a.propertyName===null||a.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return a}static findNode(e,n){if(n===void 0||n===""||n==="."||n===-1||n===e.name||n===e.uuid)return e;if(e.skeleton){const a=e.skeleton.getBoneByName(n);if(a!==void 0)return a}if(e.children){const a=function(c){for(let u=0;u<c.length;u++){const h=c[u];if(h.name===n||h.uuid===n)return h;const p=a(h.children);if(p)return p}return null},o=a(e.children);if(o)return o}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,n){e[n]=this.targetObject[this.propertyName]}_getValue_array(e,n){const a=this.resolvedProperty;for(let o=0,c=a.length;o!==c;++o)e[n++]=a[o]}_getValue_arrayElement(e,n){e[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,n){this.resolvedProperty.toArray(e,n)}_setValue_direct(e,n){this.targetObject[this.propertyName]=e[n]}_setValue_direct_setNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,n){const a=this.resolvedProperty;for(let o=0,c=a.length;o!==c;++o)a[o]=e[n++]}_setValue_array_setNeedsUpdate(e,n){const a=this.resolvedProperty;for(let o=0,c=a.length;o!==c;++o)a[o]=e[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,n){const a=this.resolvedProperty;for(let o=0,c=a.length;o!==c;++o)a[o]=e[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,n){this.resolvedProperty[this.propertyIndex]=e[n]}_setValue_arrayElement_setNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,n){this.resolvedProperty.fromArray(e,n)}_setValue_fromArray_setNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,n){this.bind(),this.getValue(e,n)}_setValue_unbound(e,n){this.bind(),this.setValue(e,n)}bind(){let e=this.node;const n=this.parsedPath,a=n.objectName,o=n.propertyName;let c=n.propertyIndex;if(e||(e=qt.findNode(this.rootNode,n.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ke("PropertyBinding: No target node found for track: "+this.path+".");return}if(a){let d=n.objectIndex;switch(a){case"materials":if(!e.material){nt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){nt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){nt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let g=0;g<e.length;g++)if(e[g].name===d){d=g;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){nt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){nt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[a]===void 0){nt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[a]}if(d!==void 0){if(e[d]===void 0){nt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[d]}}const u=e[o];if(u===void 0){const d=n.nodeName;nt("PropertyBinding: Trying to update property for track: "+d+"."+o+" but it wasn't found.",e);return}let h=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?h=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(h=this.Versioning.MatrixWorldNeedsUpdate);let p=this.BindingType.Direct;if(c!==void 0){if(o==="morphTargetInfluences"){if(!e.geometry){nt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){nt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[c]!==void 0&&(c=e.morphTargetDictionary[c])}p=this.BindingType.ArrayElement,this.resolvedProperty=u,this.propertyIndex=c}else u.fromArray!==void 0&&u.toArray!==void 0?(p=this.BindingType.HasFromToArray,this.resolvedProperty=u):Array.isArray(u)?(p=this.BindingType.EntireArray,this.resolvedProperty=u):this.propertyName=o;this.getValue=this.GetterByBindingType[p],this.setValue=this.SetterByBindingTypeAndVersioning[p][h]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}qt.Composite=RT;qt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};qt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};qt.prototype.GetterByBindingType=[qt.prototype._getValue_direct,qt.prototype._getValue_array,qt.prototype._getValue_arrayElement,qt.prototype._getValue_toArray];qt.prototype.SetterByBindingTypeAndVersioning=[[qt.prototype._setValue_direct,qt.prototype._setValue_direct_setNeedsUpdate,qt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[qt.prototype._setValue_array,qt.prototype._setValue_array_setNeedsUpdate,qt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[qt.prototype._setValue_arrayElement,qt.prototype._setValue_arrayElement_setNeedsUpdate,qt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[qt.prototype._setValue_fromArray,qt.prototype._setValue_fromArray_setNeedsUpdate,qt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const Em=class Em{constructor(e,n,a,o){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,a,o)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let a=0;a<4;a++)this.elements[a]=e[a+n];return this}set(e,n,a,o){const c=this.elements;return c[0]=e,c[2]=n,c[1]=a,c[3]=o,this}};Em.prototype.isMatrix2=!0;let rx=Em;function ox(r,e,n,a){const o=wT(a);switch(n){case ay:return r*e;case tm:return r*e/o.components*o.byteLength;case nm:return r*e/o.components*o.byteLength;case pr:return r*e*2/o.components*o.byteLength;case im:return r*e*2/o.components*o.byteLength;case sy:return r*e*3/o.components*o.byteLength;case Oi:return r*e*4/o.components*o.byteLength;case am:return r*e*4/o.components*o.byteLength;case Iu:case Bu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Fu:case zu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case up:case dp:return Math.max(r,16)*Math.max(e,8)/4;case cp:case fp:return Math.max(r,8)*Math.max(e,8)/2;case hp:case pp:case gp:case _p:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case mp:case Vu:case vp:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case xp:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case yp:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Sp:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case bp:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Mp:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Ep:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Tp:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Ap:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Rp:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case wp:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Cp:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Dp:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Np:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Lp:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Up:case Op:case Pp:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Ip:case Bp:return Math.ceil(r/4)*Math.ceil(e/4)*8;case ku:case Fp:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function wT(r){switch(r){case xi:case ey:return{byteLength:1,components:1};case Vl:case ty:case Wa:return{byteLength:2,components:1};case $p:case em:return{byteLength:2,components:4};case ua:case Jp:case Ui:return{byteLength:4,components:1};case ny:case iy:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Qp}}));typeof window<"u"&&(window.__THREE__?Ke("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Qp);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Ey(){let r=null,e=!1,n=null,a=null;function o(c,u){n(c,u),a=r.requestAnimationFrame(o)}return{start:function(){e!==!0&&n!==null&&r!==null&&(a=r.requestAnimationFrame(o),e=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(a),e=!1},setAnimationLoop:function(c){n=c},setContext:function(c){r=c}}}function CT(r){const e=new WeakMap;function n(h,p){const d=h.array,g=h.usage,_=d.byteLength,v=r.createBuffer();r.bindBuffer(p,v),r.bufferData(p,d,g),h.onUploadCallback();let x;if(d instanceof Float32Array)x=r.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)x=r.HALF_FLOAT;else if(d instanceof Uint16Array)h.isFloat16BufferAttribute?x=r.HALF_FLOAT:x=r.UNSIGNED_SHORT;else if(d instanceof Int16Array)x=r.SHORT;else if(d instanceof Uint32Array)x=r.UNSIGNED_INT;else if(d instanceof Int32Array)x=r.INT;else if(d instanceof Int8Array)x=r.BYTE;else if(d instanceof Uint8Array)x=r.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)x=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:v,type:x,bytesPerElement:d.BYTES_PER_ELEMENT,version:h.version,size:_}}function a(h,p,d){const g=p.array,_=p.updateRanges;if(r.bindBuffer(d,h),_.length===0)r.bufferSubData(d,0,g);else{_.sort((x,M)=>x.start-M.start);let v=0;for(let x=1;x<_.length;x++){const M=_[v],A=_[x];A.start<=M.start+M.count+1?M.count=Math.max(M.count,A.start+A.count-M.start):(++v,_[v]=A)}_.length=v+1;for(let x=0,M=_.length;x<M;x++){const A=_[x];r.bufferSubData(d,A.start*g.BYTES_PER_ELEMENT,g,A.start,A.count)}p.clearUpdateRanges()}p.onUploadCallback()}function o(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const p=e.get(h);p&&(r.deleteBuffer(p.buffer),e.delete(h))}function u(h,p){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const g=e.get(h);(!g||g.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const d=e.get(h);if(d===void 0)e.set(h,n(h,p));else if(d.version<h.version){if(d.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(d.buffer,h,p),d.version=h.version}}return{get:o,remove:c,update:u}}var DT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,NT=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,LT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,UT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,OT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,PT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,IT=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,BT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,FT=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,zT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,HT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,GT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,VT=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,kT=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,XT=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,WT=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,qT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,YT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,jT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,KT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,ZT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,QT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,JT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,$T=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,eA=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,tA=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,nA=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,iA=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,aA=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,sA=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,rA="gl_FragColor = linearToOutputTexel( gl_FragColor );",oA=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,lA=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,cA=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,uA=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,fA=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,dA=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,hA=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,pA=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,mA=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,gA=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,_A=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,vA=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,xA=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,yA=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,SA=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,bA=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,MA=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,EA=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,TA=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,AA=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,RA=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,wA=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,CA=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,DA=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,NA=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,LA=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,UA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,OA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,PA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,IA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,BA=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,FA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,zA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,HA=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,GA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,VA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,kA=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,XA=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,WA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qA=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,YA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,KA=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ZA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,QA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,JA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$A=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,e1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,t1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,n1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,i1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,a1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,s1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,r1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,o1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,l1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,c1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,u1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,f1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,d1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,h1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,p1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,m1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,g1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,_1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,v1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,x1=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,y1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,S1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,b1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,M1=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,E1=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,T1=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,A1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,R1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,w1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,C1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const D1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,N1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,L1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,U1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,O1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,P1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,I1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,B1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,F1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,z1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,H1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,G1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,V1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,k1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,X1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,W1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,q1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Y1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,j1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,K1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Z1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Q1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,J1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eR=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,tR=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nR=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,iR=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,aR=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,sR=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,rR=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,oR=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,lR=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,cR=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,gt={alphahash_fragment:DT,alphahash_pars_fragment:NT,alphamap_fragment:LT,alphamap_pars_fragment:UT,alphatest_fragment:OT,alphatest_pars_fragment:PT,aomap_fragment:IT,aomap_pars_fragment:BT,batching_pars_vertex:FT,batching_vertex:zT,begin_vertex:HT,beginnormal_vertex:GT,bsdfs:VT,iridescence_fragment:kT,bumpmap_pars_fragment:XT,clipping_planes_fragment:WT,clipping_planes_pars_fragment:qT,clipping_planes_pars_vertex:YT,clipping_planes_vertex:jT,color_fragment:KT,color_pars_fragment:ZT,color_pars_vertex:QT,color_vertex:JT,common:$T,cube_uv_reflection_fragment:eA,defaultnormal_vertex:tA,displacementmap_pars_vertex:nA,displacementmap_vertex:iA,emissivemap_fragment:aA,emissivemap_pars_fragment:sA,colorspace_fragment:rA,colorspace_pars_fragment:oA,envmap_fragment:lA,envmap_common_pars_fragment:cA,envmap_pars_fragment:uA,envmap_pars_vertex:fA,envmap_physical_pars_fragment:bA,envmap_vertex:dA,fog_vertex:hA,fog_pars_vertex:pA,fog_fragment:mA,fog_pars_fragment:gA,gradientmap_pars_fragment:_A,lightmap_pars_fragment:vA,lights_lambert_fragment:xA,lights_lambert_pars_fragment:yA,lights_pars_begin:SA,lights_toon_fragment:MA,lights_toon_pars_fragment:EA,lights_phong_fragment:TA,lights_phong_pars_fragment:AA,lights_physical_fragment:RA,lights_physical_pars_fragment:wA,lights_fragment_begin:CA,lights_fragment_maps:DA,lights_fragment_end:NA,lightprobes_pars_fragment:LA,logdepthbuf_fragment:UA,logdepthbuf_pars_fragment:OA,logdepthbuf_pars_vertex:PA,logdepthbuf_vertex:IA,map_fragment:BA,map_pars_fragment:FA,map_particle_fragment:zA,map_particle_pars_fragment:HA,metalnessmap_fragment:GA,metalnessmap_pars_fragment:VA,morphinstance_vertex:kA,morphcolor_vertex:XA,morphnormal_vertex:WA,morphtarget_pars_vertex:qA,morphtarget_vertex:YA,normal_fragment_begin:jA,normal_fragment_maps:KA,normal_pars_fragment:ZA,normal_pars_vertex:QA,normal_vertex:JA,normalmap_pars_fragment:$A,clearcoat_normal_fragment_begin:e1,clearcoat_normal_fragment_maps:t1,clearcoat_pars_fragment:n1,iridescence_pars_fragment:i1,opaque_fragment:a1,packing:s1,premultiplied_alpha_fragment:r1,project_vertex:o1,dithering_fragment:l1,dithering_pars_fragment:c1,roughnessmap_fragment:u1,roughnessmap_pars_fragment:f1,shadowmap_pars_fragment:d1,shadowmap_pars_vertex:h1,shadowmap_vertex:p1,shadowmask_pars_fragment:m1,skinbase_vertex:g1,skinning_pars_vertex:_1,skinning_vertex:v1,skinnormal_vertex:x1,specularmap_fragment:y1,specularmap_pars_fragment:S1,tonemapping_fragment:b1,tonemapping_pars_fragment:M1,transmission_fragment:E1,transmission_pars_fragment:T1,uv_pars_fragment:A1,uv_pars_vertex:R1,uv_vertex:w1,worldpos_vertex:C1,background_vert:D1,background_frag:N1,backgroundCube_vert:L1,backgroundCube_frag:U1,cube_vert:O1,cube_frag:P1,depth_vert:I1,depth_frag:B1,distance_vert:F1,distance_frag:z1,equirect_vert:H1,equirect_frag:G1,linedashed_vert:V1,linedashed_frag:k1,meshbasic_vert:X1,meshbasic_frag:W1,meshlambert_vert:q1,meshlambert_frag:Y1,meshmatcap_vert:j1,meshmatcap_frag:K1,meshnormal_vert:Z1,meshnormal_frag:Q1,meshphong_vert:J1,meshphong_frag:$1,meshphysical_vert:eR,meshphysical_frag:tR,meshtoon_vert:nR,meshtoon_frag:iR,points_vert:aR,points_frag:sR,shadow_vert:rR,shadow_frag:oR,sprite_vert:lR,sprite_frag:cR},ze={common:{diffuse:{value:new ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ut}},envmap:{envMap:{value:null},envMapRotation:{value:new ut},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ut},normalScale:{value:new Dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new $},probesMax:{value:new $},probesResolution:{value:new $}},points:{diffuse:{value:new ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0},uvTransform:{value:new ut}},sprite:{diffuse:{value:new ot(16777215)},opacity:{value:1},center:{value:new Dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}}},ia={basic:{uniforms:Kn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.fog]),vertexShader:gt.meshbasic_vert,fragmentShader:gt.meshbasic_frag},lambert:{uniforms:Kn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,ze.lights,{emissive:{value:new ot(0)},envMapIntensity:{value:1}}]),vertexShader:gt.meshlambert_vert,fragmentShader:gt.meshlambert_frag},phong:{uniforms:Kn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,ze.lights,{emissive:{value:new ot(0)},specular:{value:new ot(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:gt.meshphong_vert,fragmentShader:gt.meshphong_frag},standard:{uniforms:Kn([ze.common,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.roughnessmap,ze.metalnessmap,ze.fog,ze.lights,{emissive:{value:new ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag},toon:{uniforms:Kn([ze.common,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.gradientmap,ze.fog,ze.lights,{emissive:{value:new ot(0)}}]),vertexShader:gt.meshtoon_vert,fragmentShader:gt.meshtoon_frag},matcap:{uniforms:Kn([ze.common,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,{matcap:{value:null}}]),vertexShader:gt.meshmatcap_vert,fragmentShader:gt.meshmatcap_frag},points:{uniforms:Kn([ze.points,ze.fog]),vertexShader:gt.points_vert,fragmentShader:gt.points_frag},dashed:{uniforms:Kn([ze.common,ze.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:gt.linedashed_vert,fragmentShader:gt.linedashed_frag},depth:{uniforms:Kn([ze.common,ze.displacementmap]),vertexShader:gt.depth_vert,fragmentShader:gt.depth_frag},normal:{uniforms:Kn([ze.common,ze.bumpmap,ze.normalmap,ze.displacementmap,{opacity:{value:1}}]),vertexShader:gt.meshnormal_vert,fragmentShader:gt.meshnormal_frag},sprite:{uniforms:Kn([ze.sprite,ze.fog]),vertexShader:gt.sprite_vert,fragmentShader:gt.sprite_frag},background:{uniforms:{uvTransform:{value:new ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:gt.background_vert,fragmentShader:gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ut}},vertexShader:gt.backgroundCube_vert,fragmentShader:gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:gt.cube_vert,fragmentShader:gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:gt.equirect_vert,fragmentShader:gt.equirect_frag},distance:{uniforms:Kn([ze.common,ze.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:gt.distance_vert,fragmentShader:gt.distance_frag},shadow:{uniforms:Kn([ze.lights,ze.fog,{color:{value:new ot(0)},opacity:{value:1}}]),vertexShader:gt.shadow_vert,fragmentShader:gt.shadow_frag}};ia.physical={uniforms:Kn([ia.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ut},clearcoatNormalScale:{value:new Dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ut},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ut},sheen:{value:0},sheenColor:{value:new ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ut},transmissionSamplerSize:{value:new Dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ut},attenuationDistance:{value:0},attenuationColor:{value:new ot(0)},specularColor:{value:new ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ut},anisotropyVector:{value:new Dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ut}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag};const Du={r:0,b:0,g:0},uR=new vt,Ty=new ut;Ty.set(-1,0,0,0,1,0,0,0,1);function fR(r,e,n,a,o,c){const u=new ot(0);let h=o===!0?0:1,p,d,g=null,_=0,v=null;function x(C){let L=C.isScene===!0?C.background:null;if(L&&L.isTexture){const U=C.backgroundBlurriness>0;L=e.get(L,U)}return L}function M(C){let L=!1;const U=x(C);U===null?S(u,h):U&&U.isColor&&(S(U,1),L=!0);const F=r.xr.getEnvironmentBlendMode();F==="additive"?n.buffers.color.setClear(0,0,0,1,c):F==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,c),(r.autoClear||L)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function A(C,L){const U=x(L);U&&(U.isCubeTexture||U.mapping===Zu)?(d===void 0&&(d=new Jn(new Eo(1,1,1),new fa({name:"BackgroundCubeMaterial",uniforms:yo(ia.backgroundCube.uniforms),vertexShader:ia.backgroundCube.vertexShader,fragmentShader:ia.backgroundCube.fragmentShader,side:si,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(F,D,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(d)),d.material.uniforms.envMap.value=U,d.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(uR.makeRotationFromEuler(L.backgroundRotation)).transpose(),U.isCubeTexture&&U.isRenderTargetTexture===!1&&d.material.uniforms.backgroundRotation.value.premultiply(Ty),d.material.toneMapped=Tt.getTransfer(U.colorSpace)!==Xt,(g!==U||_!==U.version||v!==r.toneMapping)&&(d.material.needsUpdate=!0,g=U,_=U.version,v=r.toneMapping),d.layers.enableAll(),C.unshift(d,d.geometry,d.material,0,0,null)):U&&U.isTexture&&(p===void 0&&(p=new Jn(new Ju(2,2),new fa({name:"BackgroundMaterial",uniforms:yo(ia.background.uniforms),vertexShader:ia.background.vertexShader,fragmentShader:ia.background.fragmentShader,side:Xa,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(p)),p.material.uniforms.t2D.value=U,p.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,p.material.toneMapped=Tt.getTransfer(U.colorSpace)!==Xt,U.matrixAutoUpdate===!0&&U.updateMatrix(),p.material.uniforms.uvTransform.value.copy(U.matrix),(g!==U||_!==U.version||v!==r.toneMapping)&&(p.material.needsUpdate=!0,g=U,_=U.version,v=r.toneMapping),p.layers.enableAll(),C.unshift(p,p.geometry,p.material,0,0,null))}function S(C,L){C.getRGB(Du,vy(r)),n.buffers.color.setClear(Du.r,Du.g,Du.b,L,c)}function y(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return u},setClearColor:function(C,L=1){u.set(C),h=L,S(u,h)},getClearAlpha:function(){return h},setClearAlpha:function(C){h=C,S(u,h)},render:M,addToRenderList:A,dispose:y}}function dR(r,e){const n=r.getParameter(r.MAX_VERTEX_ATTRIBS),a={},o=v(null);let c=o,u=!1;function h(H,W,ce,fe,X){let P=!1;const z=_(H,fe,ce,W);c!==z&&(c=z,d(c.object)),P=x(H,fe,ce,X),P&&M(H,fe,ce,X),X!==null&&e.update(X,r.ELEMENT_ARRAY_BUFFER),(P||u)&&(u=!1,U(H,W,ce,fe),X!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function p(){return r.createVertexArray()}function d(H){return r.bindVertexArray(H)}function g(H){return r.deleteVertexArray(H)}function _(H,W,ce,fe){const X=fe.wireframe===!0;let P=a[W.id];P===void 0&&(P={},a[W.id]=P);const z=H.isInstancedMesh===!0?H.id:0;let oe=P[z];oe===void 0&&(oe={},P[z]=oe);let pe=oe[ce.id];pe===void 0&&(pe={},oe[ce.id]=pe);let Q=pe[X];return Q===void 0&&(Q=v(p()),pe[X]=Q),Q}function v(H){const W=[],ce=[],fe=[];for(let X=0;X<n;X++)W[X]=0,ce[X]=0,fe[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:W,enabledAttributes:ce,attributeDivisors:fe,object:H,attributes:{},index:null}}function x(H,W,ce,fe){const X=c.attributes,P=W.attributes;let z=0;const oe=ce.getAttributes();for(const pe in oe)if(oe[pe].location>=0){const O=X[pe];let K=P[pe];if(K===void 0&&(pe==="instanceMatrix"&&H.instanceMatrix&&(K=H.instanceMatrix),pe==="instanceColor"&&H.instanceColor&&(K=H.instanceColor)),O===void 0||O.attribute!==K||K&&O.data!==K.data)return!0;z++}return c.attributesNum!==z||c.index!==fe}function M(H,W,ce,fe){const X={},P=W.attributes;let z=0;const oe=ce.getAttributes();for(const pe in oe)if(oe[pe].location>=0){let O=P[pe];O===void 0&&(pe==="instanceMatrix"&&H.instanceMatrix&&(O=H.instanceMatrix),pe==="instanceColor"&&H.instanceColor&&(O=H.instanceColor));const K={};K.attribute=O,O&&O.data&&(K.data=O.data),X[pe]=K,z++}c.attributes=X,c.attributesNum=z,c.index=fe}function A(){const H=c.newAttributes;for(let W=0,ce=H.length;W<ce;W++)H[W]=0}function S(H){y(H,0)}function y(H,W){const ce=c.newAttributes,fe=c.enabledAttributes,X=c.attributeDivisors;ce[H]=1,fe[H]===0&&(r.enableVertexAttribArray(H),fe[H]=1),X[H]!==W&&(r.vertexAttribDivisor(H,W),X[H]=W)}function C(){const H=c.newAttributes,W=c.enabledAttributes;for(let ce=0,fe=W.length;ce<fe;ce++)W[ce]!==H[ce]&&(r.disableVertexAttribArray(ce),W[ce]=0)}function L(H,W,ce,fe,X,P,z){z===!0?r.vertexAttribIPointer(H,W,ce,X,P):r.vertexAttribPointer(H,W,ce,fe,X,P)}function U(H,W,ce,fe){A();const X=fe.attributes,P=ce.getAttributes(),z=W.defaultAttributeValues;for(const oe in P){const pe=P[oe];if(pe.location>=0){let Q=X[oe];if(Q===void 0&&(oe==="instanceMatrix"&&H.instanceMatrix&&(Q=H.instanceMatrix),oe==="instanceColor"&&H.instanceColor&&(Q=H.instanceColor)),Q!==void 0){const O=Q.normalized,K=Q.itemSize,ge=e.get(Q);if(ge===void 0)continue;const ye=ge.buffer,be=ge.type,ee=ge.bytesPerElement,Se=be===r.INT||be===r.UNSIGNED_INT||Q.gpuType===Jp;if(Q.isInterleavedBufferAttribute){const Te=Q.data,Re=Te.stride,et=Q.offset;if(Te.isInstancedInterleavedBuffer){for(let Ze=0;Ze<pe.locationSize;Ze++)y(pe.location+Ze,Te.meshPerAttribute);H.isInstancedMesh!==!0&&fe._maxInstanceCount===void 0&&(fe._maxInstanceCount=Te.meshPerAttribute*Te.count)}else for(let Ze=0;Ze<pe.locationSize;Ze++)S(pe.location+Ze);r.bindBuffer(r.ARRAY_BUFFER,ye);for(let Ze=0;Ze<pe.locationSize;Ze++)L(pe.location+Ze,K/pe.locationSize,be,O,Re*ee,(et+K/pe.locationSize*Ze)*ee,Se)}else{if(Q.isInstancedBufferAttribute){for(let Te=0;Te<pe.locationSize;Te++)y(pe.location+Te,Q.meshPerAttribute);H.isInstancedMesh!==!0&&fe._maxInstanceCount===void 0&&(fe._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let Te=0;Te<pe.locationSize;Te++)S(pe.location+Te);r.bindBuffer(r.ARRAY_BUFFER,ye);for(let Te=0;Te<pe.locationSize;Te++)L(pe.location+Te,K/pe.locationSize,be,O,K*ee,K/pe.locationSize*Te*ee,Se)}}else if(z!==void 0){const O=z[oe];if(O!==void 0)switch(O.length){case 2:r.vertexAttrib2fv(pe.location,O);break;case 3:r.vertexAttrib3fv(pe.location,O);break;case 4:r.vertexAttrib4fv(pe.location,O);break;default:r.vertexAttrib1fv(pe.location,O)}}}}C()}function F(){B();for(const H in a){const W=a[H];for(const ce in W){const fe=W[ce];for(const X in fe){const P=fe[X];for(const z in P)g(P[z].object),delete P[z];delete fe[X]}}delete a[H]}}function D(H){if(a[H.id]===void 0)return;const W=a[H.id];for(const ce in W){const fe=W[ce];for(const X in fe){const P=fe[X];for(const z in P)g(P[z].object),delete P[z];delete fe[X]}}delete a[H.id]}function I(H){for(const W in a){const ce=a[W];for(const fe in ce){const X=ce[fe];if(X[H.id]===void 0)continue;const P=X[H.id];for(const z in P)g(P[z].object),delete P[z];delete X[H.id]}}}function E(H){for(const W in a){const ce=a[W],fe=H.isInstancedMesh===!0?H.id:0,X=ce[fe];if(X!==void 0){for(const P in X){const z=X[P];for(const oe in z)g(z[oe].object),delete z[oe];delete X[P]}delete ce[fe],Object.keys(ce).length===0&&delete a[W]}}}function B(){j(),u=!0,c!==o&&(c=o,d(c.object))}function j(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:h,reset:B,resetDefaultState:j,dispose:F,releaseStatesOfGeometry:D,releaseStatesOfObject:E,releaseStatesOfProgram:I,initAttributes:A,enableAttribute:S,disableUnusedAttributes:C}}function hR(r,e,n){let a;function o(p){a=p}function c(p,d){r.drawArrays(a,p,d),n.update(d,a,1)}function u(p,d,g){g!==0&&(r.drawArraysInstanced(a,p,d,g),n.update(d,a,g))}function h(p,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,p,0,d,0,g);let v=0;for(let x=0;x<g;x++)v+=d[x];n.update(v,a,1)}this.setMode=o,this.render=c,this.renderInstances=u,this.renderMultiDraw=h}function pR(r,e,n,a){let o;function c(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");o=r.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(I){return!(I!==Oi&&a.convert(I)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(I){const E=I===Wa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==xi&&a.convert(I)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==Ui&&!E)}function p(I){if(I==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=n.precision!==void 0?n.precision:"highp";const g=p(d);g!==d&&(Ke("WebGLRenderer:",d,"not supported, using",g,"instead."),d=g);const _=n.logarithmicDepthBuffer===!0,v=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&v===!1&&Ke("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const x=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),M=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=r.getParameter(r.MAX_TEXTURE_SIZE),S=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),y=r.getParameter(r.MAX_VERTEX_ATTRIBS),C=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),L=r.getParameter(r.MAX_VARYING_VECTORS),U=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),F=r.getParameter(r.MAX_SAMPLES),D=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:p,textureFormatReadable:u,textureTypeReadable:h,precision:d,logarithmicDepthBuffer:_,reversedDepthBuffer:v,maxTextures:x,maxVertexTextures:M,maxTextureSize:A,maxCubemapSize:S,maxAttributes:y,maxVertexUniforms:C,maxVaryings:L,maxFragmentUniforms:U,maxSamples:F,samples:D}}function mR(r){const e=this;let n=null,a=0,o=!1,c=!1;const u=new lr,h=new ut,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(_,v){const x=_.length!==0||v||a!==0||o;return o=v,a=_.length,x},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,v){n=g(_,v,0)},this.setState=function(_,v,x){const M=_.clippingPlanes,A=_.clipIntersection,S=_.clipShadows,y=r.get(_);if(!o||M===null||M.length===0||c&&!S)c?g(null):d();else{const C=c?0:a,L=C*4;let U=y.clippingState||null;p.value=U,U=g(M,v,L,x);for(let F=0;F!==L;++F)U[F]=n[F];y.clippingState=U,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=C}};function d(){p.value!==n&&(p.value=n,p.needsUpdate=a>0),e.numPlanes=a,e.numIntersection=0}function g(_,v,x,M){const A=_!==null?_.length:0;let S=null;if(A!==0){if(S=p.value,M!==!0||S===null){const y=x+A*4,C=v.matrixWorldInverse;h.getNormalMatrix(C),(S===null||S.length<y)&&(S=new Float32Array(y));for(let L=0,U=x;L!==A;++L,U+=4)u.copy(_[L]).applyMatrix4(C,h),u.normal.toArray(S,U),S[U+3]=u.constant}p.value=S,p.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,S}}const Os=4,lx=[.125,.215,.35,.446,.526,.582],ur=20,gR=256,Ll=new tf,cx=new ot;let Xh=null,Wh=0,qh=0,Yh=!1;const _R=new $;class ux{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,a=.1,o=100,c={}){const{size:u=256,position:h=_R}=c;Xh=this._renderer.getRenderTarget(),Wh=this._renderer.getActiveCubeFace(),qh=this._renderer.getActiveMipmapLevel(),Yh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(e,a,o,p,h),n>0&&this._blur(p,0,0,n),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=hx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=dx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Xh,Wh,qh),this._renderer.xr.enabled=Yh,e.scissorTest=!1,uo(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===hr||e.mapping===go?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Xh=this._renderer.getRenderTarget(),Wh=this._renderer.getActiveCubeFace(),qh=this._renderer.getActiveMipmapLevel(),Yh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const a=n||this._allocateTargets();return this._textureToCubeUV(e,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,a={magFilter:Cn,minFilter:Cn,generateMipmaps:!1,type:Wa,format:Oi,colorSpace:yi,depthBuffer:!1},o=fx(e,n,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=fx(e,n,a);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=vR(c)),this._blurMaterial=yR(c,e,n),this._ggxMaterial=xR(c,e,n)}return o}_compileMaterial(e){const n=new Jn(new Si,e);this._renderer.compile(n,Ll)}_sceneToCubeUV(e,n,a,o,c){const p=new Zn(90,1,n,a),d=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,v=_.autoClear,x=_.toneMapping;_.getClearColor(cx),_.toneMapping=oa,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(o),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Jn(new Eo,new Us({name:"PMREM.Background",side:si,depthWrite:!1,depthTest:!1})));const A=this._backgroundBox,S=A.material;let y=!1;const C=e.background;C?C.isColor&&(S.color.copy(C),e.background=null,y=!0):(S.color.copy(cx),y=!0);for(let L=0;L<6;L++){const U=L%3;U===0?(p.up.set(0,d[L],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x+g[L],c.y,c.z)):U===1?(p.up.set(0,0,d[L]),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y+g[L],c.z)):(p.up.set(0,d[L],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y,c.z+g[L]));const F=this._cubeSize;uo(o,U*F,L>2?F:0,F,F),_.setRenderTarget(o),y&&_.render(A,p),_.render(e,p)}_.toneMapping=x,_.autoClear=v,e.background=C}_textureToCubeUV(e,n){const a=this._renderer,o=e.mapping===hr||e.mapping===go;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=hx()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=dx());const c=o?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=c;const h=c.uniforms;h.envMap.value=e;const p=this._cubeSize;uo(n,0,0,3*p,2*p),a.setRenderTarget(n),a.render(u,Ll)}_applyPMREM(e){const n=this._renderer,a=n.autoClear;n.autoClear=!1;const o=this._lodMeshes.length;for(let c=1;c<o;c++)this._applyGGXFilter(e,c-1,c);n.autoClear=a}_applyGGXFilter(e,n,a){const o=this._renderer,c=this._pingPongRenderTarget,u=this._ggxMaterial,h=this._lodMeshes[a];h.material=u;const p=u.uniforms,d=a/(this._lodMeshes.length-1),g=n/(this._lodMeshes.length-1),_=Math.sqrt(d*d-g*g),v=0+d*1.25,x=_*v,{_lodMax:M}=this,A=this._sizeLods[a],S=3*A*(a>M-Os?a-M+Os:0),y=4*(this._cubeSize-A);p.envMap.value=e.texture,p.roughness.value=x,p.mipInt.value=M-n,uo(c,S,y,3*A,2*A),o.setRenderTarget(c),o.render(h,Ll),p.envMap.value=c.texture,p.roughness.value=0,p.mipInt.value=M-a,uo(e,S,y,3*A,2*A),o.setRenderTarget(e),o.render(h,Ll)}_blur(e,n,a,o,c){const u=this._pingPongRenderTarget;this._halfBlur(e,u,n,a,o,"latitudinal",c),this._halfBlur(u,e,a,a,o,"longitudinal",c)}_halfBlur(e,n,a,o,c,u,h){const p=this._renderer,d=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&nt("blur direction must be either latitudinal or longitudinal!");const g=3,_=this._lodMeshes[o];_.material=d;const v=d.uniforms,x=this._sizeLods[a]-1,M=isFinite(c)?Math.PI/(2*x):2*Math.PI/(2*ur-1),A=c/M,S=isFinite(c)?1+Math.floor(g*A):ur;S>ur&&Ke(`sigmaRadians, ${c}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${ur}`);const y=[];let C=0;for(let I=0;I<ur;++I){const E=I/A,B=Math.exp(-E*E/2);y.push(B),I===0?C+=B:I<S&&(C+=2*B)}for(let I=0;I<y.length;I++)y[I]=y[I]/C;v.envMap.value=e.texture,v.samples.value=S,v.weights.value=y,v.latitudinal.value=u==="latitudinal",h&&(v.poleAxis.value=h);const{_lodMax:L}=this;v.dTheta.value=M,v.mipInt.value=L-a;const U=this._sizeLods[o],F=3*U*(o>L-Os?o-L+Os:0),D=4*(this._cubeSize-U);uo(n,F,D,3*U,2*U),p.setRenderTarget(n),p.render(_,Ll)}}function vR(r){const e=[],n=[],a=[];let o=r;const c=r-Os+1+lx.length;for(let u=0;u<c;u++){const h=Math.pow(2,o);e.push(h);let p=1/h;u>r-Os?p=lx[u-r+Os-1]:u===0&&(p=0),n.push(p);const d=1/(h-2),g=-d,_=1+d,v=[g,g,_,g,_,_,g,g,_,_,g,_],x=6,M=6,A=3,S=2,y=1,C=new Float32Array(A*M*x),L=new Float32Array(S*M*x),U=new Float32Array(y*M*x);for(let D=0;D<x;D++){const I=D%3*2/3-1,E=D>2?0:-1,B=[I,E,0,I+2/3,E,0,I+2/3,E+1,0,I,E,0,I+2/3,E+1,0,I,E+1,0];C.set(B,A*M*D),L.set(v,S*M*D);const j=[D,D,D,D,D,D];U.set(j,y*M*D)}const F=new Si;F.setAttribute("position",new Qn(C,A)),F.setAttribute("uv",new Qn(L,S)),F.setAttribute("faceIndex",new Qn(U,y)),a.push(new Jn(F,null)),o>Os&&o--}return{lodMeshes:a,sizeLods:e,sigmas:n}}function fx(r,e,n){const a=new la(r,e,n);return a.texture.mapping=Zu,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function uo(r,e,n,a,o){r.viewport.set(e,n,a,o),r.scissor.set(e,n,a,o)}function xR(r,e,n){return new fa({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:gR,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:nf(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Va,depthTest:!1,depthWrite:!1})}function yR(r,e,n){const a=new Float32Array(ur),o=new $(0,1,0);return new fa({name:"SphericalGaussianBlur",defines:{n:ur,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:a},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:nf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Va,depthTest:!1,depthWrite:!1})}function dx(){return new fa({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:nf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Va,depthTest:!1,depthWrite:!1})}function hx(){return new fa({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:nf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Va,depthTest:!1,depthWrite:!1})}function nf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class Ay extends la{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const a={width:e,height:e,depth:1},o=[a,a,a,a,a,a];this.texture=new gy(o),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new Eo(5,5,5),c=new fa({name:"CubemapFromEquirect",uniforms:yo(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:si,blending:Va});c.uniforms.tEquirect.value=n;const u=new Jn(o,c),h=n.minFilter;return n.minFilter===Ha&&(n.minFilter=Cn),new _T(1,10,this).update(e,u),n.minFilter=h,u.geometry.dispose(),u.material.dispose(),this}clear(e,n=!0,a=!0,o=!0){const c=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(n,a,o);e.setRenderTarget(c)}}function SR(r){let e=new WeakMap,n=new WeakMap,a=null;function o(v,x=!1){return v==null?null:x?u(v):c(v)}function c(v){if(v&&v.isTexture){const x=v.mapping;if(x===ph||x===mh)if(e.has(v)){const M=e.get(v).texture;return h(M,v.mapping)}else{const M=v.image;if(M&&M.height>0){const A=new Ay(M.height);return A.fromEquirectangularTexture(r,v),e.set(v,A),v.addEventListener("dispose",d),h(A.texture,v.mapping)}else return null}}return v}function u(v){if(v&&v.isTexture){const x=v.mapping,M=x===ph||x===mh,A=x===hr||x===go;if(M||A){let S=n.get(v);const y=S!==void 0?S.texture.pmremVersion:0;if(v.isRenderTargetTexture&&v.pmremVersion!==y)return a===null&&(a=new ux(r)),S=M?a.fromEquirectangular(v,S):a.fromCubemap(v,S),S.texture.pmremVersion=v.pmremVersion,n.set(v,S),S.texture;if(S!==void 0)return S.texture;{const C=v.image;return M&&C&&C.height>0||A&&C&&p(C)?(a===null&&(a=new ux(r)),S=M?a.fromEquirectangular(v):a.fromCubemap(v),S.texture.pmremVersion=v.pmremVersion,n.set(v,S),v.addEventListener("dispose",g),S.texture):null}}}return v}function h(v,x){return x===ph?v.mapping=hr:x===mh&&(v.mapping=go),v}function p(v){let x=0;const M=6;for(let A=0;A<M;A++)v[A]!==void 0&&x++;return x===M}function d(v){const x=v.target;x.removeEventListener("dispose",d);const M=e.get(x);M!==void 0&&(e.delete(x),M.dispose())}function g(v){const x=v.target;x.removeEventListener("dispose",g);const M=n.get(x);M!==void 0&&(n.delete(x),M.dispose())}function _(){e=new WeakMap,n=new WeakMap,a!==null&&(a.dispose(),a=null)}return{get:o,dispose:_}}function bR(r){const e={};function n(a){if(e[a]!==void 0)return e[a];const o=r.getExtension(a);return e[a]=o,o}return{has:function(a){return n(a)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(a){const o=n(a);return o===null&&Vp("WebGLRenderer: "+a+" extension not supported."),o}}}function MR(r,e,n,a){const o={},c=new WeakMap;function u(_){const v=_.target;v.index!==null&&e.remove(v.index);for(const M in v.attributes)e.remove(v.attributes[M]);v.removeEventListener("dispose",u),delete o[v.id];const x=c.get(v);x&&(e.remove(x),c.delete(v)),a.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,n.memory.geometries--}function h(_,v){return o[v.id]===!0||(v.addEventListener("dispose",u),o[v.id]=!0,n.memory.geometries++),v}function p(_){const v=_.attributes;for(const x in v)e.update(v[x],r.ARRAY_BUFFER)}function d(_){const v=[],x=_.index,M=_.attributes.position;let A=0;if(M===void 0)return;if(x!==null){const C=x.array;A=x.version;for(let L=0,U=C.length;L<U;L+=3){const F=C[L+0],D=C[L+1],I=C[L+2];v.push(F,D,D,I,I,F)}}else{const C=M.array;A=M.version;for(let L=0,U=C.length/3-1;L<U;L+=3){const F=L+0,D=L+1,I=L+2;v.push(F,D,D,I,I,F)}}const S=new(M.count>=65535?dy:fy)(v,1);S.version=A;const y=c.get(_);y&&e.remove(y),c.set(_,S)}function g(_){const v=c.get(_);if(v){const x=_.index;x!==null&&v.version<x.version&&d(_)}else d(_);return c.get(_)}return{get:h,update:p,getWireframeAttribute:g}}function ER(r,e,n){let a;function o(_){a=_}let c,u;function h(_){c=_.type,u=_.bytesPerElement}function p(_,v){r.drawElements(a,v,c,_*u),n.update(v,a,1)}function d(_,v,x){x!==0&&(r.drawElementsInstanced(a,v,c,_*u,x),n.update(v,a,x))}function g(_,v,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,v,0,c,_,0,x);let A=0;for(let S=0;S<x;S++)A+=v[S];n.update(A,a,1)}this.setMode=o,this.setIndex=h,this.render=p,this.renderInstances=d,this.renderMultiDraw=g}function TR(r){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function a(c,u,h){switch(n.calls++,u){case r.TRIANGLES:n.triangles+=h*(c/3);break;case r.LINES:n.lines+=h*(c/2);break;case r.LINE_STRIP:n.lines+=h*(c-1);break;case r.LINE_LOOP:n.lines+=h*c;break;case r.POINTS:n.points+=h*c;break;default:nt("WebGLInfo: Unknown draw mode:",u);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:o,update:a}}function AR(r,e,n){const a=new WeakMap,o=new $t;function c(u,h,p){const d=u.morphTargetInfluences,g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=g!==void 0?g.length:0;let v=a.get(h);if(v===void 0||v.count!==_){let j=function(){E.dispose(),a.delete(h),h.removeEventListener("dispose",j)};var x=j;v!==void 0&&v.texture.dispose();const M=h.morphAttributes.position!==void 0,A=h.morphAttributes.normal!==void 0,S=h.morphAttributes.color!==void 0,y=h.morphAttributes.position||[],C=h.morphAttributes.normal||[],L=h.morphAttributes.color||[];let U=0;M===!0&&(U=1),A===!0&&(U=2),S===!0&&(U=3);let F=h.attributes.position.count*U,D=1;F>e.maxTextureSize&&(D=Math.ceil(F/e.maxTextureSize),F=e.maxTextureSize);const I=new Float32Array(F*D*4*_),E=new ly(I,F,D,_);E.type=Ui,E.needsUpdate=!0;const B=U*4;for(let H=0;H<_;H++){const W=y[H],ce=C[H],fe=L[H],X=F*D*4*H;for(let P=0;P<W.count;P++){const z=P*B;M===!0&&(o.fromBufferAttribute(W,P),I[X+z+0]=o.x,I[X+z+1]=o.y,I[X+z+2]=o.z,I[X+z+3]=0),A===!0&&(o.fromBufferAttribute(ce,P),I[X+z+4]=o.x,I[X+z+5]=o.y,I[X+z+6]=o.z,I[X+z+7]=0),S===!0&&(o.fromBufferAttribute(fe,P),I[X+z+8]=o.x,I[X+z+9]=o.y,I[X+z+10]=o.z,I[X+z+11]=fe.itemSize===4?o.w:1)}}v={count:_,texture:E,size:new Dt(F,D)},a.set(h,v),h.addEventListener("dispose",j)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)p.getUniforms().setValue(r,"morphTexture",u.morphTexture,n);else{let M=0;for(let S=0;S<d.length;S++)M+=d[S];const A=h.morphTargetsRelative?1:1-M;p.getUniforms().setValue(r,"morphTargetBaseInfluence",A),p.getUniforms().setValue(r,"morphTargetInfluences",d)}p.getUniforms().setValue(r,"morphTargetsTexture",v.texture,n),p.getUniforms().setValue(r,"morphTargetsTextureSize",v.size)}return{update:c}}function RR(r,e,n,a,o){let c=new WeakMap;function u(d){const g=o.render.frame,_=d.geometry,v=e.get(d,_);if(c.get(v)!==g&&(e.update(v),c.set(v,g)),d.isInstancedMesh&&(d.hasEventListener("dispose",p)===!1&&d.addEventListener("dispose",p),c.get(d)!==g&&(n.update(d.instanceMatrix,r.ARRAY_BUFFER),d.instanceColor!==null&&n.update(d.instanceColor,r.ARRAY_BUFFER),c.set(d,g))),d.isSkinnedMesh){const x=d.skeleton;c.get(x)!==g&&(x.update(),c.set(x,g))}return v}function h(){c=new WeakMap}function p(d){const g=d.target;g.removeEventListener("dispose",p),a.releaseStatesOfObject(g),n.remove(g.instanceMatrix),g.instanceColor!==null&&n.remove(g.instanceColor)}return{update:u,dispose:h}}const wR={[Wx]:"LINEAR_TONE_MAPPING",[qx]:"REINHARD_TONE_MAPPING",[Yx]:"CINEON_TONE_MAPPING",[jx]:"ACES_FILMIC_TONE_MAPPING",[Zx]:"AGX_TONE_MAPPING",[Qx]:"NEUTRAL_TONE_MAPPING",[Kx]:"CUSTOM_TONE_MAPPING"};function CR(r,e,n,a,o){const c=new la(e,n,{type:r,depthBuffer:a,stencilBuffer:o,depthTexture:a?new xo(e,n):void 0}),u=new la(e,n,{type:Wa,depthBuffer:!1,stencilBuffer:!1}),h=new Si;h.setAttribute("position",new ri([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new ri([0,2,0,0,2,0],2));const p=new YE({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new Jn(h,p),g=new tf(-1,1,1,-1,0,1);let _=null,v=null,x=!1,M,A=null,S=[],y=!1;this.setSize=function(C,L){c.setSize(C,L),u.setSize(C,L);for(let U=0;U<S.length;U++){const F=S[U];F.setSize&&F.setSize(C,L)}},this.setEffects=function(C){S=C,y=S.length>0&&S[0].isRenderPass===!0;const L=c.width,U=c.height;for(let F=0;F<S.length;F++){const D=S[F];D.setSize&&D.setSize(L,U)}},this.begin=function(C,L){if(x||C.toneMapping===oa&&S.length===0)return!1;if(A=L,L!==null){const U=L.width,F=L.height;(c.width!==U||c.height!==F)&&this.setSize(U,F)}return y===!1&&C.setRenderTarget(c),M=C.toneMapping,C.toneMapping=oa,!0},this.hasRenderPass=function(){return y},this.end=function(C,L){C.toneMapping=M,x=!0;let U=c,F=u;for(let D=0;D<S.length;D++){const I=S[D];if(I.enabled!==!1&&(I.render(C,F,U,L),I.needsSwap!==!1)){const E=U;U=F,F=E}}if(_!==C.outputColorSpace||v!==C.toneMapping){_=C.outputColorSpace,v=C.toneMapping,p.defines={},Tt.getTransfer(_)===Xt&&(p.defines.SRGB_TRANSFER="");const D=wR[v];D&&(p.defines[D]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=U.texture,C.setRenderTarget(A),C.render(d,g),A=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){c.depthTexture&&c.depthTexture.dispose(),c.dispose(),u.dispose(),h.dispose(),p.dispose()}}const Ry=new On,Wp=new xo(1,1),wy=new ly,Cy=new gE,Dy=new gy,px=[],mx=[],gx=new Float32Array(16),_x=new Float32Array(9),vx=new Float32Array(4);function Co(r,e,n){const a=r[0];if(a<=0||a>0)return r;const o=e*n;let c=px[o];if(c===void 0&&(c=new Float32Array(o),px[o]=c),e!==0){a.toArray(c,0);for(let u=1,h=0;u!==e;++u)h+=n,r[u].toArray(c,h)}return c}function Dn(r,e){if(r.length!==e.length)return!1;for(let n=0,a=r.length;n<a;n++)if(r[n]!==e[n])return!1;return!0}function Nn(r,e){for(let n=0,a=e.length;n<a;n++)r[n]=e[n]}function af(r,e){let n=mx[e];n===void 0&&(n=new Int32Array(e),mx[e]=n);for(let a=0;a!==e;++a)n[a]=r.allocateTextureUnit();return n}function DR(r,e){const n=this.cache;n[0]!==e&&(r.uniform1f(this.addr,e),n[0]=e)}function NR(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Dn(n,e))return;r.uniform2fv(this.addr,e),Nn(n,e)}}function LR(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Dn(n,e))return;r.uniform3fv(this.addr,e),Nn(n,e)}}function UR(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Dn(n,e))return;r.uniform4fv(this.addr,e),Nn(n,e)}}function OR(r,e){const n=this.cache,a=e.elements;if(a===void 0){if(Dn(n,e))return;r.uniformMatrix2fv(this.addr,!1,e),Nn(n,e)}else{if(Dn(n,a))return;vx.set(a),r.uniformMatrix2fv(this.addr,!1,vx),Nn(n,a)}}function PR(r,e){const n=this.cache,a=e.elements;if(a===void 0){if(Dn(n,e))return;r.uniformMatrix3fv(this.addr,!1,e),Nn(n,e)}else{if(Dn(n,a))return;_x.set(a),r.uniformMatrix3fv(this.addr,!1,_x),Nn(n,a)}}function IR(r,e){const n=this.cache,a=e.elements;if(a===void 0){if(Dn(n,e))return;r.uniformMatrix4fv(this.addr,!1,e),Nn(n,e)}else{if(Dn(n,a))return;gx.set(a),r.uniformMatrix4fv(this.addr,!1,gx),Nn(n,a)}}function BR(r,e){const n=this.cache;n[0]!==e&&(r.uniform1i(this.addr,e),n[0]=e)}function FR(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Dn(n,e))return;r.uniform2iv(this.addr,e),Nn(n,e)}}function zR(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Dn(n,e))return;r.uniform3iv(this.addr,e),Nn(n,e)}}function HR(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Dn(n,e))return;r.uniform4iv(this.addr,e),Nn(n,e)}}function GR(r,e){const n=this.cache;n[0]!==e&&(r.uniform1ui(this.addr,e),n[0]=e)}function VR(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Dn(n,e))return;r.uniform2uiv(this.addr,e),Nn(n,e)}}function kR(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Dn(n,e))return;r.uniform3uiv(this.addr,e),Nn(n,e)}}function XR(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Dn(n,e))return;r.uniform4uiv(this.addr,e),Nn(n,e)}}function WR(r,e,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(r.uniform1i(this.addr,o),a[0]=o);let c;this.type===r.SAMPLER_2D_SHADOW?(Wp.compareFunction=n.isReversedDepthBuffer()?rm:sm,c=Wp):c=Ry,n.setTexture2D(e||c,o)}function qR(r,e,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(r.uniform1i(this.addr,o),a[0]=o),n.setTexture3D(e||Cy,o)}function YR(r,e,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(r.uniform1i(this.addr,o),a[0]=o),n.setTextureCube(e||Dy,o)}function jR(r,e,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(r.uniform1i(this.addr,o),a[0]=o),n.setTexture2DArray(e||wy,o)}function KR(r){switch(r){case 5126:return DR;case 35664:return NR;case 35665:return LR;case 35666:return UR;case 35674:return OR;case 35675:return PR;case 35676:return IR;case 5124:case 35670:return BR;case 35667:case 35671:return FR;case 35668:case 35672:return zR;case 35669:case 35673:return HR;case 5125:return GR;case 36294:return VR;case 36295:return kR;case 36296:return XR;case 35678:case 36198:case 36298:case 36306:case 35682:return WR;case 35679:case 36299:case 36307:return qR;case 35680:case 36300:case 36308:case 36293:return YR;case 36289:case 36303:case 36311:case 36292:return jR}}function ZR(r,e){r.uniform1fv(this.addr,e)}function QR(r,e){const n=Co(e,this.size,2);r.uniform2fv(this.addr,n)}function JR(r,e){const n=Co(e,this.size,3);r.uniform3fv(this.addr,n)}function $R(r,e){const n=Co(e,this.size,4);r.uniform4fv(this.addr,n)}function ew(r,e){const n=Co(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,n)}function tw(r,e){const n=Co(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,n)}function nw(r,e){const n=Co(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,n)}function iw(r,e){r.uniform1iv(this.addr,e)}function aw(r,e){r.uniform2iv(this.addr,e)}function sw(r,e){r.uniform3iv(this.addr,e)}function rw(r,e){r.uniform4iv(this.addr,e)}function ow(r,e){r.uniform1uiv(this.addr,e)}function lw(r,e){r.uniform2uiv(this.addr,e)}function cw(r,e){r.uniform3uiv(this.addr,e)}function uw(r,e){r.uniform4uiv(this.addr,e)}function fw(r,e,n){const a=this.cache,o=e.length,c=af(n,o);Dn(a,c)||(r.uniform1iv(this.addr,c),Nn(a,c));let u;this.type===r.SAMPLER_2D_SHADOW?u=Wp:u=Ry;for(let h=0;h!==o;++h)n.setTexture2D(e[h]||u,c[h])}function dw(r,e,n){const a=this.cache,o=e.length,c=af(n,o);Dn(a,c)||(r.uniform1iv(this.addr,c),Nn(a,c));for(let u=0;u!==o;++u)n.setTexture3D(e[u]||Cy,c[u])}function hw(r,e,n){const a=this.cache,o=e.length,c=af(n,o);Dn(a,c)||(r.uniform1iv(this.addr,c),Nn(a,c));for(let u=0;u!==o;++u)n.setTextureCube(e[u]||Dy,c[u])}function pw(r,e,n){const a=this.cache,o=e.length,c=af(n,o);Dn(a,c)||(r.uniform1iv(this.addr,c),Nn(a,c));for(let u=0;u!==o;++u)n.setTexture2DArray(e[u]||wy,c[u])}function mw(r){switch(r){case 5126:return ZR;case 35664:return QR;case 35665:return JR;case 35666:return $R;case 35674:return ew;case 35675:return tw;case 35676:return nw;case 5124:case 35670:return iw;case 35667:case 35671:return aw;case 35668:case 35672:return sw;case 35669:case 35673:return rw;case 5125:return ow;case 36294:return lw;case 36295:return cw;case 36296:return uw;case 35678:case 36198:case 36298:case 36306:case 35682:return fw;case 35679:case 36299:case 36307:return dw;case 35680:case 36300:case 36308:case 36293:return hw;case 36289:case 36303:case 36311:case 36292:return pw}}class gw{constructor(e,n,a){this.id=e,this.addr=a,this.cache=[],this.type=n.type,this.setValue=KR(n.type)}}class _w{constructor(e,n,a){this.id=e,this.addr=a,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=mw(n.type)}}class vw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,a){const o=this.seq;for(let c=0,u=o.length;c!==u;++c){const h=o[c];h.setValue(e,n[h.id],a)}}}const jh=/(\w+)(\])?(\[|\.)?/g;function xx(r,e){r.seq.push(e),r.map[e.id]=e}function xw(r,e,n){const a=r.name,o=a.length;for(jh.lastIndex=0;;){const c=jh.exec(a),u=jh.lastIndex;let h=c[1];const p=c[2]==="]",d=c[3];if(p&&(h=h|0),d===void 0||d==="["&&u+2===o){xx(n,d===void 0?new gw(h,r,e):new _w(h,r,e));break}else{let _=n.map[h];_===void 0&&(_=new vw(h),xx(n,_)),n=_}}}class Hu{constructor(e,n){this.seq=[],this.map={};const a=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let u=0;u<a;++u){const h=e.getActiveUniform(n,u),p=e.getUniformLocation(n,h.name);xw(h,p,this)}const o=[],c=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(u):c.push(u);o.length>0&&(this.seq=o.concat(c))}setValue(e,n,a,o){const c=this.map[n];c!==void 0&&c.setValue(e,a,o)}setOptional(e,n,a){const o=n[a];o!==void 0&&this.setValue(e,a,o)}static upload(e,n,a,o){for(let c=0,u=n.length;c!==u;++c){const h=n[c],p=a[h.id];p.needsUpdate!==!1&&h.setValue(e,p.value,o)}}static seqWithValue(e,n){const a=[];for(let o=0,c=e.length;o!==c;++o){const u=e[o];u.id in n&&a.push(u)}return a}}function yx(r,e,n){const a=r.createShader(e);return r.shaderSource(a,n),r.compileShader(a),a}const yw=37297;let Sw=0;function bw(r,e){const n=r.split(`
`),a=[],o=Math.max(e-6,0),c=Math.min(e+6,n.length);for(let u=o;u<c;u++){const h=u+1;a.push(`${h===e?">":" "} ${h}: ${n[u]}`)}return a.join(`
`)}const Sx=new ut;function Mw(r){Tt._getMatrix(Sx,Tt.workingColorSpace,r);const e=`mat3( ${Sx.elements.map(n=>n.toFixed(4))} )`;switch(Tt.getTransfer(r)){case Xu:return[e,"LinearTransferOETF"];case Xt:return[e,"sRGBTransferOETF"];default:return Ke("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function bx(r,e,n){const a=r.getShaderParameter(e,r.COMPILE_STATUS),c=(r.getShaderInfoLog(e)||"").trim();if(a&&c==="")return"";const u=/ERROR: 0:(\d+)/.exec(c);if(u){const h=parseInt(u[1]);return n.toUpperCase()+`

`+c+`

`+bw(r.getShaderSource(e),h)}else return c}function Ew(r,e){const n=Mw(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const Tw={[Wx]:"Linear",[qx]:"Reinhard",[Yx]:"Cineon",[jx]:"ACESFilmic",[Zx]:"AgX",[Qx]:"Neutral",[Kx]:"Custom"};function Aw(r,e){const n=Tw[e];return n===void 0?(Ke("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Nu=new $;function Rw(){Tt.getLuminanceCoefficients(Nu);const r=Nu.x.toFixed(4),e=Nu.y.toFixed(4),n=Nu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ww(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Fl).join(`
`)}function Cw(r){const e=[];for(const n in r){const a=r[n];a!==!1&&e.push("#define "+n+" "+a)}return e.join(`
`)}function Dw(r,e){const n={},a=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let o=0;o<a;o++){const c=r.getActiveAttrib(e,o),u=c.name;let h=1;c.type===r.FLOAT_MAT2&&(h=2),c.type===r.FLOAT_MAT3&&(h=3),c.type===r.FLOAT_MAT4&&(h=4),n[u]={type:c.type,location:r.getAttribLocation(e,u),locationSize:h}}return n}function Fl(r){return r!==""}function Mx(r,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ex(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Nw=/^[ \t]*#include +<([\w\d./]+)>/gm;function qp(r){return r.replace(Nw,Uw)}const Lw=new Map;function Uw(r,e){let n=gt[e];if(n===void 0){const a=Lw.get(e);if(a!==void 0)n=gt[a],Ke('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,a);else throw new Error("Can not resolve #include <"+e+">")}return qp(n)}const Ow=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Tx(r){return r.replace(Ow,Pw)}function Pw(r,e,n,a){let o="";for(let c=parseInt(e);c<parseInt(n);c++)o+=a.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return o}function Ax(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const Iw={[Ou]:"SHADOWMAP_TYPE_PCF",[Il]:"SHADOWMAP_TYPE_VSM"};function Bw(r){return Iw[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Fw={[hr]:"ENVMAP_TYPE_CUBE",[go]:"ENVMAP_TYPE_CUBE",[Zu]:"ENVMAP_TYPE_CUBE_UV"};function zw(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":Fw[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const Hw={[go]:"ENVMAP_MODE_REFRACTION"};function Gw(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":Hw[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Vw={[Xx]:"ENVMAP_BLENDING_MULTIPLY",[DM]:"ENVMAP_BLENDING_MIX",[NM]:"ENVMAP_BLENDING_ADD"};function kw(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":Vw[r.combine]||"ENVMAP_BLENDING_NONE"}function Xw(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,a=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:a,maxMip:n}}function Ww(r,e,n,a){const o=r.getContext(),c=n.defines;let u=n.vertexShader,h=n.fragmentShader;const p=Bw(n),d=zw(n),g=Gw(n),_=kw(n),v=Xw(n),x=ww(n),M=Cw(c),A=o.createProgram();let S,y,C=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(S=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M].filter(Fl).join(`
`),S.length>0&&(S+=`
`),y=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M].filter(Fl).join(`
`),y.length>0&&(y+=`
`)):(S=[Ax(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+g:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fl).join(`
`),y=[Ax(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.envMap?"#define "+g:"",n.envMap?"#define "+_:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==oa?"#define TONE_MAPPING":"",n.toneMapping!==oa?gt.tonemapping_pars_fragment:"",n.toneMapping!==oa?Aw("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",gt.colorspace_pars_fragment,Ew("linearToOutputTexel",n.outputColorSpace),Rw(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Fl).join(`
`)),u=qp(u),u=Mx(u,n),u=Ex(u,n),h=qp(h),h=Mx(h,n),h=Ex(h,n),u=Tx(u),h=Tx(h),n.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,S=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,y=["#define varying in",n.glslVersion===Mv?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Mv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const L=C+S+u,U=C+y+h,F=yx(o,o.VERTEX_SHADER,L),D=yx(o,o.FRAGMENT_SHADER,U);o.attachShader(A,F),o.attachShader(A,D),n.index0AttributeName!==void 0?o.bindAttribLocation(A,0,n.index0AttributeName):n.morphTargets===!0&&o.bindAttribLocation(A,0,"position"),o.linkProgram(A);function I(H){if(r.debug.checkShaderErrors){const W=o.getProgramInfoLog(A)||"",ce=o.getShaderInfoLog(F)||"",fe=o.getShaderInfoLog(D)||"",X=W.trim(),P=ce.trim(),z=fe.trim();let oe=!0,pe=!0;if(o.getProgramParameter(A,o.LINK_STATUS)===!1)if(oe=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(o,A,F,D);else{const Q=bx(o,F,"vertex"),O=bx(o,D,"fragment");nt("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(A,o.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+X+`
`+Q+`
`+O)}else X!==""?Ke("WebGLProgram: Program Info Log:",X):(P===""||z==="")&&(pe=!1);pe&&(H.diagnostics={runnable:oe,programLog:X,vertexShader:{log:P,prefix:S},fragmentShader:{log:z,prefix:y}})}o.deleteShader(F),o.deleteShader(D),E=new Hu(o,A),B=Dw(o,A)}let E;this.getUniforms=function(){return E===void 0&&I(this),E};let B;this.getAttributes=function(){return B===void 0&&I(this),B};let j=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return j===!1&&(j=o.getProgramParameter(A,yw)),j},this.destroy=function(){a.releaseStatesOfProgram(this),o.deleteProgram(A),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Sw++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=F,this.fragmentShader=D,this}let qw=0;class Yw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,a=e.fragmentShader,o=this._getShaderStage(n),c=this._getShaderStage(a),u=this._getShaderCacheForMaterial(e);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(c)===!1&&(u.add(c),c.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const a of n)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let a=n.get(e);return a===void 0&&(a=new Set,n.set(e,a)),a}_getShaderStage(e){const n=this.shaderCache;let a=n.get(e);return a===void 0&&(a=new jw(e),n.set(e,a)),a}}class jw{constructor(e){this.id=qw++,this.code=e,this.usedTimes=0}}function Kw(r){return r===pr||r===Vu||r===ku}function Zw(r,e,n,a,o,c){const u=new cy,h=new Yw,p=new Set,d=[],g=new Map,_=a.logarithmicDepthBuffer;let v=a.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(E){return p.add(E),E===0?"uv":`uv${E}`}function A(E,B,j,H,W,ce){const fe=H.fog,X=W.geometry,P=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?H.environment:null,z=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap,oe=e.get(E.envMap||P,z),pe=oe&&oe.mapping===Zu?oe.image.height:null,Q=x[E.type];E.precision!==null&&(v=a.getMaxPrecision(E.precision),v!==E.precision&&Ke("WebGLProgram.getParameters:",E.precision,"not supported, using",v,"instead."));const O=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,K=O!==void 0?O.length:0;let ge=0;X.morphAttributes.position!==void 0&&(ge=1),X.morphAttributes.normal!==void 0&&(ge=2),X.morphAttributes.color!==void 0&&(ge=3);let ye,be,ee,Se;if(Q){const it=ia[Q];ye=it.vertexShader,be=it.fragmentShader}else ye=E.vertexShader,be=E.fragmentShader,h.update(E),ee=h.getVertexShaderID(E),Se=h.getFragmentShaderID(E);const Te=r.getRenderTarget(),Re=r.state.buffers.depth.getReversed(),et=W.isInstancedMesh===!0,Ze=W.isBatchedMesh===!0,Nt=!!E.map,lt=!!E.matcap,ht=!!oe,Ft=!!E.aoMap,pt=!!E.lightMap,hn=!!E.bumpMap,en=!!E.normalMap,Pn=!!E.displacementMap,q=!!E.emissiveMap,cn=!!E.metalnessMap,xt=!!E.roughnessMap,Yt=E.anisotropy>0,we=E.clearcoat>0,an=E.dispersion>0,N=E.iridescence>0,T=E.sheen>0,J=E.transmission>0,ve=Yt&&!!E.anisotropyMap,Ee=we&&!!E.clearcoatMap,Ce=we&&!!E.clearcoatNormalMap,Ue=we&&!!E.clearcoatRoughnessMap,ue=N&&!!E.iridescenceMap,de=N&&!!E.iridescenceThicknessMap,Oe=T&&!!E.sheenColorMap,Pe=T&&!!E.sheenRoughnessMap,Ne=!!E.specularMap,De=!!E.specularColorMap,at=!!E.specularIntensityMap,st=J&&!!E.transmissionMap,St=J&&!!E.thicknessMap,V=!!E.gradientMap,Ae=!!E.alphaMap,me=E.alphaTest>0,Fe=!!E.alphaHash,Le=!!E.extensions;let Me=oa;E.toneMapped&&(Te===null||Te.isXRRenderTarget===!0)&&(Me=r.toneMapping);const Ye={shaderID:Q,shaderType:E.type,shaderName:E.name,vertexShader:ye,fragmentShader:be,defines:E.defines,customVertexShaderID:ee,customFragmentShaderID:Se,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:v,batching:Ze,batchingColor:Ze&&W._colorsTexture!==null,instancing:et,instancingColor:et&&W.instanceColor!==null,instancingMorph:et&&W.morphTexture!==null,outputColorSpace:Te===null?r.outputColorSpace:Te.isXRRenderTarget===!0?Te.texture.colorSpace:Tt.workingColorSpace,alphaToCoverage:!!E.alphaToCoverage,map:Nt,matcap:lt,envMap:ht,envMapMode:ht&&oe.mapping,envMapCubeUVHeight:pe,aoMap:Ft,lightMap:pt,bumpMap:hn,normalMap:en,displacementMap:Pn,emissiveMap:q,normalMapObjectSpace:en&&E.normalMapType===IM,normalMapTangentSpace:en&&E.normalMapType===Hp,packedNormalMap:en&&E.normalMapType===Hp&&Kw(E.normalMap.format),metalnessMap:cn,roughnessMap:xt,anisotropy:Yt,anisotropyMap:ve,clearcoat:we,clearcoatMap:Ee,clearcoatNormalMap:Ce,clearcoatRoughnessMap:Ue,dispersion:an,iridescence:N,iridescenceMap:ue,iridescenceThicknessMap:de,sheen:T,sheenColorMap:Oe,sheenRoughnessMap:Pe,specularMap:Ne,specularColorMap:De,specularIntensityMap:at,transmission:J,transmissionMap:st,thicknessMap:St,gradientMap:V,opaque:E.transparent===!1&&E.blending===fo&&E.alphaToCoverage===!1,alphaMap:Ae,alphaTest:me,alphaHash:Fe,combine:E.combine,mapUv:Nt&&M(E.map.channel),aoMapUv:Ft&&M(E.aoMap.channel),lightMapUv:pt&&M(E.lightMap.channel),bumpMapUv:hn&&M(E.bumpMap.channel),normalMapUv:en&&M(E.normalMap.channel),displacementMapUv:Pn&&M(E.displacementMap.channel),emissiveMapUv:q&&M(E.emissiveMap.channel),metalnessMapUv:cn&&M(E.metalnessMap.channel),roughnessMapUv:xt&&M(E.roughnessMap.channel),anisotropyMapUv:ve&&M(E.anisotropyMap.channel),clearcoatMapUv:Ee&&M(E.clearcoatMap.channel),clearcoatNormalMapUv:Ce&&M(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ue&&M(E.clearcoatRoughnessMap.channel),iridescenceMapUv:ue&&M(E.iridescenceMap.channel),iridescenceThicknessMapUv:de&&M(E.iridescenceThicknessMap.channel),sheenColorMapUv:Oe&&M(E.sheenColorMap.channel),sheenRoughnessMapUv:Pe&&M(E.sheenRoughnessMap.channel),specularMapUv:Ne&&M(E.specularMap.channel),specularColorMapUv:De&&M(E.specularColorMap.channel),specularIntensityMapUv:at&&M(E.specularIntensityMap.channel),transmissionMapUv:st&&M(E.transmissionMap.channel),thicknessMapUv:St&&M(E.thicknessMap.channel),alphaMapUv:Ae&&M(E.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(en||Yt),vertexNormals:!!X.attributes.normal,vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!X.attributes.uv&&(Nt||Ae),fog:!!fe,useFog:E.fog===!0,fogExp2:!!fe&&fe.isFogExp2,flatShading:E.wireframe===!1&&(E.flatShading===!0||X.attributes.normal===void 0&&en===!1&&(E.isMeshLambertMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isMeshPhysicalMaterial)),sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:Re,skinning:W.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:ge,numDirLights:B.directional.length,numPointLights:B.point.length,numSpotLights:B.spot.length,numSpotLightMaps:B.spotLightMap.length,numRectAreaLights:B.rectArea.length,numHemiLights:B.hemi.length,numDirLightShadows:B.directionalShadowMap.length,numPointLightShadows:B.pointShadowMap.length,numSpotLightShadows:B.spotShadowMap.length,numSpotLightShadowsWithMaps:B.numSpotLightShadowsWithMaps,numLightProbes:B.numLightProbes,numLightProbeGrids:ce.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:E.dithering,shadowMapEnabled:r.shadowMap.enabled&&j.length>0,shadowMapType:r.shadowMap.type,toneMapping:Me,decodeVideoTexture:Nt&&E.map.isVideoTexture===!0&&Tt.getTransfer(E.map.colorSpace)===Xt,decodeVideoTextureEmissive:q&&E.emissiveMap.isVideoTexture===!0&&Tt.getTransfer(E.emissiveMap.colorSpace)===Xt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===aa,flipSided:E.side===si,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Le&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Le&&E.extensions.multiDraw===!0||Ze)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Ye.vertexUv1s=p.has(1),Ye.vertexUv2s=p.has(2),Ye.vertexUv3s=p.has(3),p.clear(),Ye}function S(E){const B=[];if(E.shaderID?B.push(E.shaderID):(B.push(E.customVertexShaderID),B.push(E.customFragmentShaderID)),E.defines!==void 0)for(const j in E.defines)B.push(j),B.push(E.defines[j]);return E.isRawShaderMaterial===!1&&(y(B,E),C(B,E),B.push(r.outputColorSpace)),B.push(E.customProgramCacheKey),B.join()}function y(E,B){E.push(B.precision),E.push(B.outputColorSpace),E.push(B.envMapMode),E.push(B.envMapCubeUVHeight),E.push(B.mapUv),E.push(B.alphaMapUv),E.push(B.lightMapUv),E.push(B.aoMapUv),E.push(B.bumpMapUv),E.push(B.normalMapUv),E.push(B.displacementMapUv),E.push(B.emissiveMapUv),E.push(B.metalnessMapUv),E.push(B.roughnessMapUv),E.push(B.anisotropyMapUv),E.push(B.clearcoatMapUv),E.push(B.clearcoatNormalMapUv),E.push(B.clearcoatRoughnessMapUv),E.push(B.iridescenceMapUv),E.push(B.iridescenceThicknessMapUv),E.push(B.sheenColorMapUv),E.push(B.sheenRoughnessMapUv),E.push(B.specularMapUv),E.push(B.specularColorMapUv),E.push(B.specularIntensityMapUv),E.push(B.transmissionMapUv),E.push(B.thicknessMapUv),E.push(B.combine),E.push(B.fogExp2),E.push(B.sizeAttenuation),E.push(B.morphTargetsCount),E.push(B.morphAttributeCount),E.push(B.numDirLights),E.push(B.numPointLights),E.push(B.numSpotLights),E.push(B.numSpotLightMaps),E.push(B.numHemiLights),E.push(B.numRectAreaLights),E.push(B.numDirLightShadows),E.push(B.numPointLightShadows),E.push(B.numSpotLightShadows),E.push(B.numSpotLightShadowsWithMaps),E.push(B.numLightProbes),E.push(B.shadowMapType),E.push(B.toneMapping),E.push(B.numClippingPlanes),E.push(B.numClipIntersection),E.push(B.depthPacking)}function C(E,B){u.disableAll(),B.instancing&&u.enable(0),B.instancingColor&&u.enable(1),B.instancingMorph&&u.enable(2),B.matcap&&u.enable(3),B.envMap&&u.enable(4),B.normalMapObjectSpace&&u.enable(5),B.normalMapTangentSpace&&u.enable(6),B.clearcoat&&u.enable(7),B.iridescence&&u.enable(8),B.alphaTest&&u.enable(9),B.vertexColors&&u.enable(10),B.vertexAlphas&&u.enable(11),B.vertexUv1s&&u.enable(12),B.vertexUv2s&&u.enable(13),B.vertexUv3s&&u.enable(14),B.vertexTangents&&u.enable(15),B.anisotropy&&u.enable(16),B.alphaHash&&u.enable(17),B.batching&&u.enable(18),B.dispersion&&u.enable(19),B.batchingColor&&u.enable(20),B.gradientMap&&u.enable(21),B.packedNormalMap&&u.enable(22),B.vertexNormals&&u.enable(23),E.push(u.mask),u.disableAll(),B.fog&&u.enable(0),B.useFog&&u.enable(1),B.flatShading&&u.enable(2),B.logarithmicDepthBuffer&&u.enable(3),B.reversedDepthBuffer&&u.enable(4),B.skinning&&u.enable(5),B.morphTargets&&u.enable(6),B.morphNormals&&u.enable(7),B.morphColors&&u.enable(8),B.premultipliedAlpha&&u.enable(9),B.shadowMapEnabled&&u.enable(10),B.doubleSided&&u.enable(11),B.flipSided&&u.enable(12),B.useDepthPacking&&u.enable(13),B.dithering&&u.enable(14),B.transmission&&u.enable(15),B.sheen&&u.enable(16),B.opaque&&u.enable(17),B.pointsUvs&&u.enable(18),B.decodeVideoTexture&&u.enable(19),B.decodeVideoTextureEmissive&&u.enable(20),B.alphaToCoverage&&u.enable(21),B.numLightProbeGrids>0&&u.enable(22),E.push(u.mask)}function L(E){const B=x[E.type];let j;if(B){const H=ia[B];j=XE.clone(H.uniforms)}else j=E.uniforms;return j}function U(E,B){let j=g.get(B);return j!==void 0?++j.usedTimes:(j=new Ww(r,B,E,o),d.push(j),g.set(B,j)),j}function F(E){if(--E.usedTimes===0){const B=d.indexOf(E);d[B]=d[d.length-1],d.pop(),g.delete(E.cacheKey),E.destroy()}}function D(E){h.remove(E)}function I(){h.dispose()}return{getParameters:A,getProgramCacheKey:S,getUniforms:L,acquireProgram:U,releaseProgram:F,releaseShaderCache:D,programs:d,dispose:I}}function Qw(){let r=new WeakMap;function e(u){return r.has(u)}function n(u){let h=r.get(u);return h===void 0&&(h={},r.set(u,h)),h}function a(u){r.delete(u)}function o(u,h,p){r.get(u)[h]=p}function c(){r=new WeakMap}return{has:e,get:n,remove:a,update:o,dispose:c}}function Jw(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function Rx(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function wx(){const r=[];let e=0;const n=[],a=[],o=[];function c(){e=0,n.length=0,a.length=0,o.length=0}function u(v){let x=0;return v.isInstancedMesh&&(x+=2),v.isSkinnedMesh&&(x+=1),x}function h(v,x,M,A,S,y){let C=r[e];return C===void 0?(C={id:v.id,object:v,geometry:x,material:M,materialVariant:u(v),groupOrder:A,renderOrder:v.renderOrder,z:S,group:y},r[e]=C):(C.id=v.id,C.object=v,C.geometry=x,C.material=M,C.materialVariant=u(v),C.groupOrder=A,C.renderOrder=v.renderOrder,C.z=S,C.group=y),e++,C}function p(v,x,M,A,S,y){const C=h(v,x,M,A,S,y);M.transmission>0?a.push(C):M.transparent===!0?o.push(C):n.push(C)}function d(v,x,M,A,S,y){const C=h(v,x,M,A,S,y);M.transmission>0?a.unshift(C):M.transparent===!0?o.unshift(C):n.unshift(C)}function g(v,x){n.length>1&&n.sort(v||Jw),a.length>1&&a.sort(x||Rx),o.length>1&&o.sort(x||Rx)}function _(){for(let v=e,x=r.length;v<x;v++){const M=r[v];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:n,transmissive:a,transparent:o,init:c,push:p,unshift:d,finish:_,sort:g}}function $w(){let r=new WeakMap;function e(a,o){const c=r.get(a);let u;return c===void 0?(u=new wx,r.set(a,[u])):o>=c.length?(u=new wx,c.push(u)):u=c[o],u}function n(){r=new WeakMap}return{get:e,dispose:n}}function eC(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new $,color:new ot};break;case"SpotLight":n={position:new $,direction:new $,color:new ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new $,color:new ot,distance:0,decay:0};break;case"HemisphereLight":n={direction:new $,skyColor:new ot,groundColor:new ot};break;case"RectAreaLight":n={color:new ot,position:new $,halfWidth:new $,halfHeight:new $};break}return r[e.id]=n,n}}}function tC(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=n,n}}}let nC=0;function iC(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function aC(r){const e=new eC,n=tC(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)a.probe.push(new $);const o=new $,c=new vt,u=new vt;function h(d){let g=0,_=0,v=0;for(let B=0;B<9;B++)a.probe[B].set(0,0,0);let x=0,M=0,A=0,S=0,y=0,C=0,L=0,U=0,F=0,D=0,I=0;d.sort(iC);for(let B=0,j=d.length;B<j;B++){const H=d[B],W=H.color,ce=H.intensity,fe=H.distance;let X=null;if(H.shadow&&H.shadow.map&&(H.shadow.map.texture.format===pr?X=H.shadow.map.texture:X=H.shadow.map.depthTexture||H.shadow.map.texture),H.isAmbientLight)g+=W.r*ce,_+=W.g*ce,v+=W.b*ce;else if(H.isLightProbe){for(let P=0;P<9;P++)a.probe[P].addScaledVector(H.sh.coefficients[P],ce);I++}else if(H.isDirectionalLight){const P=e.get(H);if(P.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const z=H.shadow,oe=n.get(H);oe.shadowIntensity=z.intensity,oe.shadowBias=z.bias,oe.shadowNormalBias=z.normalBias,oe.shadowRadius=z.radius,oe.shadowMapSize=z.mapSize,a.directionalShadow[x]=oe,a.directionalShadowMap[x]=X,a.directionalShadowMatrix[x]=H.shadow.matrix,C++}a.directional[x]=P,x++}else if(H.isSpotLight){const P=e.get(H);P.position.setFromMatrixPosition(H.matrixWorld),P.color.copy(W).multiplyScalar(ce),P.distance=fe,P.coneCos=Math.cos(H.angle),P.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),P.decay=H.decay,a.spot[A]=P;const z=H.shadow;if(H.map&&(a.spotLightMap[F]=H.map,F++,z.updateMatrices(H),H.castShadow&&D++),a.spotLightMatrix[A]=z.matrix,H.castShadow){const oe=n.get(H);oe.shadowIntensity=z.intensity,oe.shadowBias=z.bias,oe.shadowNormalBias=z.normalBias,oe.shadowRadius=z.radius,oe.shadowMapSize=z.mapSize,a.spotShadow[A]=oe,a.spotShadowMap[A]=X,U++}A++}else if(H.isRectAreaLight){const P=e.get(H);P.color.copy(W).multiplyScalar(ce),P.halfWidth.set(H.width*.5,0,0),P.halfHeight.set(0,H.height*.5,0),a.rectArea[S]=P,S++}else if(H.isPointLight){const P=e.get(H);if(P.color.copy(H.color).multiplyScalar(H.intensity),P.distance=H.distance,P.decay=H.decay,H.castShadow){const z=H.shadow,oe=n.get(H);oe.shadowIntensity=z.intensity,oe.shadowBias=z.bias,oe.shadowNormalBias=z.normalBias,oe.shadowRadius=z.radius,oe.shadowMapSize=z.mapSize,oe.shadowCameraNear=z.camera.near,oe.shadowCameraFar=z.camera.far,a.pointShadow[M]=oe,a.pointShadowMap[M]=X,a.pointShadowMatrix[M]=H.shadow.matrix,L++}a.point[M]=P,M++}else if(H.isHemisphereLight){const P=e.get(H);P.skyColor.copy(H.color).multiplyScalar(ce),P.groundColor.copy(H.groundColor).multiplyScalar(ce),a.hemi[y]=P,y++}}S>0&&(r.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=ze.LTC_FLOAT_1,a.rectAreaLTC2=ze.LTC_FLOAT_2):(a.rectAreaLTC1=ze.LTC_HALF_1,a.rectAreaLTC2=ze.LTC_HALF_2)),a.ambient[0]=g,a.ambient[1]=_,a.ambient[2]=v;const E=a.hash;(E.directionalLength!==x||E.pointLength!==M||E.spotLength!==A||E.rectAreaLength!==S||E.hemiLength!==y||E.numDirectionalShadows!==C||E.numPointShadows!==L||E.numSpotShadows!==U||E.numSpotMaps!==F||E.numLightProbes!==I)&&(a.directional.length=x,a.spot.length=A,a.rectArea.length=S,a.point.length=M,a.hemi.length=y,a.directionalShadow.length=C,a.directionalShadowMap.length=C,a.pointShadow.length=L,a.pointShadowMap.length=L,a.spotShadow.length=U,a.spotShadowMap.length=U,a.directionalShadowMatrix.length=C,a.pointShadowMatrix.length=L,a.spotLightMatrix.length=U+F-D,a.spotLightMap.length=F,a.numSpotLightShadowsWithMaps=D,a.numLightProbes=I,E.directionalLength=x,E.pointLength=M,E.spotLength=A,E.rectAreaLength=S,E.hemiLength=y,E.numDirectionalShadows=C,E.numPointShadows=L,E.numSpotShadows=U,E.numSpotMaps=F,E.numLightProbes=I,a.version=nC++)}function p(d,g){let _=0,v=0,x=0,M=0,A=0;const S=g.matrixWorldInverse;for(let y=0,C=d.length;y<C;y++){const L=d[y];if(L.isDirectionalLight){const U=a.directional[_];U.direction.setFromMatrixPosition(L.matrixWorld),o.setFromMatrixPosition(L.target.matrixWorld),U.direction.sub(o),U.direction.transformDirection(S),_++}else if(L.isSpotLight){const U=a.spot[x];U.position.setFromMatrixPosition(L.matrixWorld),U.position.applyMatrix4(S),U.direction.setFromMatrixPosition(L.matrixWorld),o.setFromMatrixPosition(L.target.matrixWorld),U.direction.sub(o),U.direction.transformDirection(S),x++}else if(L.isRectAreaLight){const U=a.rectArea[M];U.position.setFromMatrixPosition(L.matrixWorld),U.position.applyMatrix4(S),u.identity(),c.copy(L.matrixWorld),c.premultiply(S),u.extractRotation(c),U.halfWidth.set(L.width*.5,0,0),U.halfHeight.set(0,L.height*.5,0),U.halfWidth.applyMatrix4(u),U.halfHeight.applyMatrix4(u),M++}else if(L.isPointLight){const U=a.point[v];U.position.setFromMatrixPosition(L.matrixWorld),U.position.applyMatrix4(S),v++}else if(L.isHemisphereLight){const U=a.hemi[A];U.direction.setFromMatrixPosition(L.matrixWorld),U.direction.transformDirection(S),A++}}}return{setup:h,setupView:p,state:a}}function Cx(r){const e=new aC(r),n=[],a=[],o=[];function c(v){_.camera=v,n.length=0,a.length=0,o.length=0}function u(v){n.push(v)}function h(v){a.push(v)}function p(v){o.push(v)}function d(){e.setup(n)}function g(v){e.setupView(n,v)}const _={lightsArray:n,shadowsArray:a,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:_,setupLights:d,setupLightsView:g,pushLight:u,pushShadow:h,pushLightProbeGrid:p}}function sC(r){let e=new WeakMap;function n(o,c=0){const u=e.get(o);let h;return u===void 0?(h=new Cx(r),e.set(o,[h])):c>=u.length?(h=new Cx(r),u.push(h)):h=u[c],h}function a(){e=new WeakMap}return{get:n,dispose:a}}const rC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,oC=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,lC=[new $(1,0,0),new $(-1,0,0),new $(0,1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1)],cC=[new $(0,-1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1),new $(0,-1,0),new $(0,-1,0)],Dx=new vt,Ul=new $,Kh=new $;function uC(r,e,n){let a=new dm;const o=new Dt,c=new Dt,u=new $t,h=new jE,p=new KE,d={},g=n.maxTextureSize,_={[Xa]:si,[si]:Xa,[aa]:aa},v=new fa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Dt},radius:{value:4}},vertexShader:rC,fragmentShader:oC}),x=v.clone();x.defines.HORIZONTAL_PASS=1;const M=new Si;M.setAttribute("position",new Qn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new Jn(M,v),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ou;let y=this.type;this.render=function(D,I,E){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||D.length===0)return;this.type===fM&&(Ke("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Ou);const B=r.getRenderTarget(),j=r.getActiveCubeFace(),H=r.getActiveMipmapLevel(),W=r.state;W.setBlending(Va),W.buffers.depth.getReversed()===!0?W.buffers.color.setClear(0,0,0,0):W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const ce=y!==this.type;ce&&I.traverse(function(fe){fe.material&&(Array.isArray(fe.material)?fe.material.forEach(X=>X.needsUpdate=!0):fe.material.needsUpdate=!0)});for(let fe=0,X=D.length;fe<X;fe++){const P=D[fe],z=P.shadow;if(z===void 0){Ke("WebGLShadowMap:",P,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;o.copy(z.mapSize);const oe=z.getFrameExtents();o.multiply(oe),c.copy(z.mapSize),(o.x>g||o.y>g)&&(o.x>g&&(c.x=Math.floor(g/oe.x),o.x=c.x*oe.x,z.mapSize.x=c.x),o.y>g&&(c.y=Math.floor(g/oe.y),o.y=c.y*oe.y,z.mapSize.y=c.y));const pe=r.state.buffers.depth.getReversed();if(z.camera._reversedDepth=pe,z.map===null||ce===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===Il){if(P.isPointLight){Ke("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new la(o.x,o.y,{format:pr,type:Wa,minFilter:Cn,magFilter:Cn,generateMipmaps:!1}),z.map.texture.name=P.name+".shadowMap",z.map.depthTexture=new xo(o.x,o.y,Ui),z.map.depthTexture.name=P.name+".shadowMapDepth",z.map.depthTexture.format=qa,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=wn,z.map.depthTexture.magFilter=wn}else P.isPointLight?(z.map=new Ay(o.x),z.map.depthTexture=new VE(o.x,ua)):(z.map=new la(o.x,o.y),z.map.depthTexture=new xo(o.x,o.y,ua)),z.map.depthTexture.name=P.name+".shadowMap",z.map.depthTexture.format=qa,this.type===Ou?(z.map.depthTexture.compareFunction=pe?rm:sm,z.map.depthTexture.minFilter=Cn,z.map.depthTexture.magFilter=Cn):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=wn,z.map.depthTexture.magFilter=wn);z.camera.updateProjectionMatrix()}const Q=z.map.isWebGLCubeRenderTarget?6:1;for(let O=0;O<Q;O++){if(z.map.isWebGLCubeRenderTarget)r.setRenderTarget(z.map,O),r.clear();else{O===0&&(r.setRenderTarget(z.map),r.clear());const K=z.getViewport(O);u.set(c.x*K.x,c.y*K.y,c.x*K.z,c.y*K.w),W.viewport(u)}if(P.isPointLight){const K=z.camera,ge=z.matrix,ye=P.distance||K.far;ye!==K.far&&(K.far=ye,K.updateProjectionMatrix()),Ul.setFromMatrixPosition(P.matrixWorld),K.position.copy(Ul),Kh.copy(K.position),Kh.add(lC[O]),K.up.copy(cC[O]),K.lookAt(Kh),K.updateMatrixWorld(),ge.makeTranslation(-Ul.x,-Ul.y,-Ul.z),Dx.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),z._frustum.setFromProjectionMatrix(Dx,K.coordinateSystem,K.reversedDepth)}else z.updateMatrices(P);a=z.getFrustum(),U(I,E,z.camera,P,this.type)}z.isPointLightShadow!==!0&&this.type===Il&&C(z,E),z.needsUpdate=!1}y=this.type,S.needsUpdate=!1,r.setRenderTarget(B,j,H)};function C(D,I){const E=e.update(A);v.defines.VSM_SAMPLES!==D.blurSamples&&(v.defines.VSM_SAMPLES=D.blurSamples,x.defines.VSM_SAMPLES=D.blurSamples,v.needsUpdate=!0,x.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new la(o.x,o.y,{format:pr,type:Wa})),v.uniforms.shadow_pass.value=D.map.depthTexture,v.uniforms.resolution.value=D.mapSize,v.uniforms.radius.value=D.radius,r.setRenderTarget(D.mapPass),r.clear(),r.renderBufferDirect(I,null,E,v,A,null),x.uniforms.shadow_pass.value=D.mapPass.texture,x.uniforms.resolution.value=D.mapSize,x.uniforms.radius.value=D.radius,r.setRenderTarget(D.map),r.clear(),r.renderBufferDirect(I,null,E,x,A,null)}function L(D,I,E,B){let j=null;const H=E.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(H!==void 0)j=H;else if(j=E.isPointLight===!0?p:h,r.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const W=j.uuid,ce=I.uuid;let fe=d[W];fe===void 0&&(fe={},d[W]=fe);let X=fe[ce];X===void 0&&(X=j.clone(),fe[ce]=X,I.addEventListener("dispose",F)),j=X}if(j.visible=I.visible,j.wireframe=I.wireframe,B===Il?j.side=I.shadowSide!==null?I.shadowSide:I.side:j.side=I.shadowSide!==null?I.shadowSide:_[I.side],j.alphaMap=I.alphaMap,j.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,j.map=I.map,j.clipShadows=I.clipShadows,j.clippingPlanes=I.clippingPlanes,j.clipIntersection=I.clipIntersection,j.displacementMap=I.displacementMap,j.displacementScale=I.displacementScale,j.displacementBias=I.displacementBias,j.wireframeLinewidth=I.wireframeLinewidth,j.linewidth=I.linewidth,E.isPointLight===!0&&j.isMeshDistanceMaterial===!0){const W=r.properties.get(j);W.light=E}return j}function U(D,I,E,B,j){if(D.visible===!1)return;if(D.layers.test(I.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&j===Il)&&(!D.frustumCulled||a.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,D.matrixWorld);const ce=e.update(D),fe=D.material;if(Array.isArray(fe)){const X=ce.groups;for(let P=0,z=X.length;P<z;P++){const oe=X[P],pe=fe[oe.materialIndex];if(pe&&pe.visible){const Q=L(D,pe,B,j);D.onBeforeShadow(r,D,I,E,ce,Q,oe),r.renderBufferDirect(E,null,ce,Q,D,oe),D.onAfterShadow(r,D,I,E,ce,Q,oe)}}}else if(fe.visible){const X=L(D,fe,B,j);D.onBeforeShadow(r,D,I,E,ce,X,null),r.renderBufferDirect(E,null,ce,X,D,null),D.onAfterShadow(r,D,I,E,ce,X,null)}}const W=D.children;for(let ce=0,fe=W.length;ce<fe;ce++)U(W[ce],I,E,B,j)}function F(D){D.target.removeEventListener("dispose",F);for(const E in d){const B=d[E],j=D.target.uuid;j in B&&(B[j].dispose(),delete B[j])}}}function fC(r,e){function n(){let V=!1;const Ae=new $t;let me=null;const Fe=new $t(0,0,0,0);return{setMask:function(Le){me!==Le&&!V&&(r.colorMask(Le,Le,Le,Le),me=Le)},setLocked:function(Le){V=Le},setClear:function(Le,Me,Ye,it,un){un===!0&&(Le*=it,Me*=it,Ye*=it),Ae.set(Le,Me,Ye,it),Fe.equals(Ae)===!1&&(r.clearColor(Le,Me,Ye,it),Fe.copy(Ae))},reset:function(){V=!1,me=null,Fe.set(-1,0,0,0)}}}function a(){let V=!1,Ae=!1,me=null,Fe=null,Le=null;return{setReversed:function(Me){if(Ae!==Me){const Ye=e.get("EXT_clip_control");Me?Ye.clipControlEXT(Ye.LOWER_LEFT_EXT,Ye.ZERO_TO_ONE_EXT):Ye.clipControlEXT(Ye.LOWER_LEFT_EXT,Ye.NEGATIVE_ONE_TO_ONE_EXT),Ae=Me;const it=Le;Le=null,this.setClear(it)}},getReversed:function(){return Ae},setTest:function(Me){Me?Te(r.DEPTH_TEST):Re(r.DEPTH_TEST)},setMask:function(Me){me!==Me&&!V&&(r.depthMask(Me),me=Me)},setFunc:function(Me){if(Ae&&(Me=YM[Me]),Fe!==Me){switch(Me){case np:r.depthFunc(r.NEVER);break;case ip:r.depthFunc(r.ALWAYS);break;case ap:r.depthFunc(r.LESS);break;case mo:r.depthFunc(r.LEQUAL);break;case sp:r.depthFunc(r.EQUAL);break;case rp:r.depthFunc(r.GEQUAL);break;case op:r.depthFunc(r.GREATER);break;case lp:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Fe=Me}},setLocked:function(Me){V=Me},setClear:function(Me){Le!==Me&&(Le=Me,Ae&&(Me=1-Me),r.clearDepth(Me))},reset:function(){V=!1,me=null,Fe=null,Le=null,Ae=!1}}}function o(){let V=!1,Ae=null,me=null,Fe=null,Le=null,Me=null,Ye=null,it=null,un=null;return{setTest:function(Pt){V||(Pt?Te(r.STENCIL_TEST):Re(r.STENCIL_TEST))},setMask:function(Pt){Ae!==Pt&&!V&&(r.stencilMask(Pt),Ae=Pt)},setFunc:function(Pt,bi,oi){(me!==Pt||Fe!==bi||Le!==oi)&&(r.stencilFunc(Pt,bi,oi),me=Pt,Fe=bi,Le=oi)},setOp:function(Pt,bi,oi){(Me!==Pt||Ye!==bi||it!==oi)&&(r.stencilOp(Pt,bi,oi),Me=Pt,Ye=bi,it=oi)},setLocked:function(Pt){V=Pt},setClear:function(Pt){un!==Pt&&(r.clearStencil(Pt),un=Pt)},reset:function(){V=!1,Ae=null,me=null,Fe=null,Le=null,Me=null,Ye=null,it=null,un=null}}}const c=new n,u=new a,h=new o,p=new WeakMap,d=new WeakMap;let g={},_={},v={},x=new WeakMap,M=[],A=null,S=!1,y=null,C=null,L=null,U=null,F=null,D=null,I=null,E=new ot(0,0,0),B=0,j=!1,H=null,W=null,ce=null,fe=null,X=null;const P=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,oe=0;const pe=r.getParameter(r.VERSION);pe.indexOf("WebGL")!==-1?(oe=parseFloat(/^WebGL (\d)/.exec(pe)[1]),z=oe>=1):pe.indexOf("OpenGL ES")!==-1&&(oe=parseFloat(/^OpenGL ES (\d)/.exec(pe)[1]),z=oe>=2);let Q=null,O={};const K=r.getParameter(r.SCISSOR_BOX),ge=r.getParameter(r.VIEWPORT),ye=new $t().fromArray(K),be=new $t().fromArray(ge);function ee(V,Ae,me,Fe){const Le=new Uint8Array(4),Me=r.createTexture();r.bindTexture(V,Me),r.texParameteri(V,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(V,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Ye=0;Ye<me;Ye++)V===r.TEXTURE_3D||V===r.TEXTURE_2D_ARRAY?r.texImage3D(Ae,0,r.RGBA,1,1,Fe,0,r.RGBA,r.UNSIGNED_BYTE,Le):r.texImage2D(Ae+Ye,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Le);return Me}const Se={};Se[r.TEXTURE_2D]=ee(r.TEXTURE_2D,r.TEXTURE_2D,1),Se[r.TEXTURE_CUBE_MAP]=ee(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Se[r.TEXTURE_2D_ARRAY]=ee(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Se[r.TEXTURE_3D]=ee(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),u.setClear(1),h.setClear(0),Te(r.DEPTH_TEST),u.setFunc(mo),hn(!1),en(hv),Te(r.CULL_FACE),Ft(Va);function Te(V){g[V]!==!0&&(r.enable(V),g[V]=!0)}function Re(V){g[V]!==!1&&(r.disable(V),g[V]=!1)}function et(V,Ae){return v[V]!==Ae?(r.bindFramebuffer(V,Ae),v[V]=Ae,V===r.DRAW_FRAMEBUFFER&&(v[r.FRAMEBUFFER]=Ae),V===r.FRAMEBUFFER&&(v[r.DRAW_FRAMEBUFFER]=Ae),!0):!1}function Ze(V,Ae){let me=M,Fe=!1;if(V){me=x.get(Ae),me===void 0&&(me=[],x.set(Ae,me));const Le=V.textures;if(me.length!==Le.length||me[0]!==r.COLOR_ATTACHMENT0){for(let Me=0,Ye=Le.length;Me<Ye;Me++)me[Me]=r.COLOR_ATTACHMENT0+Me;me.length=Le.length,Fe=!0}}else me[0]!==r.BACK&&(me[0]=r.BACK,Fe=!0);Fe&&r.drawBuffers(me)}function Nt(V){return A!==V?(r.useProgram(V),A=V,!0):!1}const lt={[cr]:r.FUNC_ADD,[hM]:r.FUNC_SUBTRACT,[pM]:r.FUNC_REVERSE_SUBTRACT};lt[mM]=r.MIN,lt[gM]=r.MAX;const ht={[_M]:r.ZERO,[vM]:r.ONE,[xM]:r.SRC_COLOR,[ep]:r.SRC_ALPHA,[TM]:r.SRC_ALPHA_SATURATE,[MM]:r.DST_COLOR,[SM]:r.DST_ALPHA,[yM]:r.ONE_MINUS_SRC_COLOR,[tp]:r.ONE_MINUS_SRC_ALPHA,[EM]:r.ONE_MINUS_DST_COLOR,[bM]:r.ONE_MINUS_DST_ALPHA,[AM]:r.CONSTANT_COLOR,[RM]:r.ONE_MINUS_CONSTANT_COLOR,[wM]:r.CONSTANT_ALPHA,[CM]:r.ONE_MINUS_CONSTANT_ALPHA};function Ft(V,Ae,me,Fe,Le,Me,Ye,it,un,Pt){if(V===Va){S===!0&&(Re(r.BLEND),S=!1);return}if(S===!1&&(Te(r.BLEND),S=!0),V!==dM){if(V!==y||Pt!==j){if((C!==cr||F!==cr)&&(r.blendEquation(r.FUNC_ADD),C=cr,F=cr),Pt)switch(V){case fo:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case pv:r.blendFunc(r.ONE,r.ONE);break;case mv:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case gv:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:nt("WebGLState: Invalid blending: ",V);break}else switch(V){case fo:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case pv:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case mv:nt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case gv:nt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:nt("WebGLState: Invalid blending: ",V);break}L=null,U=null,D=null,I=null,E.set(0,0,0),B=0,y=V,j=Pt}return}Le=Le||Ae,Me=Me||me,Ye=Ye||Fe,(Ae!==C||Le!==F)&&(r.blendEquationSeparate(lt[Ae],lt[Le]),C=Ae,F=Le),(me!==L||Fe!==U||Me!==D||Ye!==I)&&(r.blendFuncSeparate(ht[me],ht[Fe],ht[Me],ht[Ye]),L=me,U=Fe,D=Me,I=Ye),(it.equals(E)===!1||un!==B)&&(r.blendColor(it.r,it.g,it.b,un),E.copy(it),B=un),y=V,j=!1}function pt(V,Ae){V.side===aa?Re(r.CULL_FACE):Te(r.CULL_FACE);let me=V.side===si;Ae&&(me=!me),hn(me),V.blending===fo&&V.transparent===!1?Ft(Va):Ft(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),u.setFunc(V.depthFunc),u.setTest(V.depthTest),u.setMask(V.depthWrite),c.setMask(V.colorWrite);const Fe=V.stencilWrite;h.setTest(Fe),Fe&&(h.setMask(V.stencilWriteMask),h.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),h.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),q(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?Te(r.SAMPLE_ALPHA_TO_COVERAGE):Re(r.SAMPLE_ALPHA_TO_COVERAGE)}function hn(V){H!==V&&(V?r.frontFace(r.CW):r.frontFace(r.CCW),H=V)}function en(V){V!==cM?(Te(r.CULL_FACE),V!==W&&(V===hv?r.cullFace(r.BACK):V===uM?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Re(r.CULL_FACE),W=V}function Pn(V){V!==ce&&(z&&r.lineWidth(V),ce=V)}function q(V,Ae,me){V?(Te(r.POLYGON_OFFSET_FILL),(fe!==Ae||X!==me)&&(fe=Ae,X=me,u.getReversed()&&(Ae=-Ae),r.polygonOffset(Ae,me))):Re(r.POLYGON_OFFSET_FILL)}function cn(V){V?Te(r.SCISSOR_TEST):Re(r.SCISSOR_TEST)}function xt(V){V===void 0&&(V=r.TEXTURE0+P-1),Q!==V&&(r.activeTexture(V),Q=V)}function Yt(V,Ae,me){me===void 0&&(Q===null?me=r.TEXTURE0+P-1:me=Q);let Fe=O[me];Fe===void 0&&(Fe={type:void 0,texture:void 0},O[me]=Fe),(Fe.type!==V||Fe.texture!==Ae)&&(Q!==me&&(r.activeTexture(me),Q=me),r.bindTexture(V,Ae||Se[V]),Fe.type=V,Fe.texture=Ae)}function we(){const V=O[Q];V!==void 0&&V.type!==void 0&&(r.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function an(){try{r.compressedTexImage2D(...arguments)}catch(V){nt("WebGLState:",V)}}function N(){try{r.compressedTexImage3D(...arguments)}catch(V){nt("WebGLState:",V)}}function T(){try{r.texSubImage2D(...arguments)}catch(V){nt("WebGLState:",V)}}function J(){try{r.texSubImage3D(...arguments)}catch(V){nt("WebGLState:",V)}}function ve(){try{r.compressedTexSubImage2D(...arguments)}catch(V){nt("WebGLState:",V)}}function Ee(){try{r.compressedTexSubImage3D(...arguments)}catch(V){nt("WebGLState:",V)}}function Ce(){try{r.texStorage2D(...arguments)}catch(V){nt("WebGLState:",V)}}function Ue(){try{r.texStorage3D(...arguments)}catch(V){nt("WebGLState:",V)}}function ue(){try{r.texImage2D(...arguments)}catch(V){nt("WebGLState:",V)}}function de(){try{r.texImage3D(...arguments)}catch(V){nt("WebGLState:",V)}}function Oe(V){return _[V]!==void 0?_[V]:r.getParameter(V)}function Pe(V,Ae){_[V]!==Ae&&(r.pixelStorei(V,Ae),_[V]=Ae)}function Ne(V){ye.equals(V)===!1&&(r.scissor(V.x,V.y,V.z,V.w),ye.copy(V))}function De(V){be.equals(V)===!1&&(r.viewport(V.x,V.y,V.z,V.w),be.copy(V))}function at(V,Ae){let me=d.get(Ae);me===void 0&&(me=new WeakMap,d.set(Ae,me));let Fe=me.get(V);Fe===void 0&&(Fe=r.getUniformBlockIndex(Ae,V.name),me.set(V,Fe))}function st(V,Ae){const Fe=d.get(Ae).get(V);p.get(Ae)!==Fe&&(r.uniformBlockBinding(Ae,Fe,V.__bindingPointIndex),p.set(Ae,Fe))}function St(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),u.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),g={},_={},Q=null,O={},v={},x=new WeakMap,M=[],A=null,S=!1,y=null,C=null,L=null,U=null,F=null,D=null,I=null,E=new ot(0,0,0),B=0,j=!1,H=null,W=null,ce=null,fe=null,X=null,ye.set(0,0,r.canvas.width,r.canvas.height),be.set(0,0,r.canvas.width,r.canvas.height),c.reset(),u.reset(),h.reset()}return{buffers:{color:c,depth:u,stencil:h},enable:Te,disable:Re,bindFramebuffer:et,drawBuffers:Ze,useProgram:Nt,setBlending:Ft,setMaterial:pt,setFlipSided:hn,setCullFace:en,setLineWidth:Pn,setPolygonOffset:q,setScissorTest:cn,activeTexture:xt,bindTexture:Yt,unbindTexture:we,compressedTexImage2D:an,compressedTexImage3D:N,texImage2D:ue,texImage3D:de,pixelStorei:Pe,getParameter:Oe,updateUBOMapping:at,uniformBlockBinding:st,texStorage2D:Ce,texStorage3D:Ue,texSubImage2D:T,texSubImage3D:J,compressedTexSubImage2D:ve,compressedTexSubImage3D:Ee,scissor:Ne,viewport:De,reset:St}}function dC(r,e,n,a,o,c,u){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new Dt,g=new WeakMap,_=new Set;let v;const x=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(N,T){return M?new OffscreenCanvas(N,T):Yl("canvas")}function S(N,T,J){let ve=1;const Ee=an(N);if((Ee.width>J||Ee.height>J)&&(ve=J/Math.max(Ee.width,Ee.height)),ve<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const Ce=Math.floor(ve*Ee.width),Ue=Math.floor(ve*Ee.height);v===void 0&&(v=A(Ce,Ue));const ue=T?A(Ce,Ue):v;return ue.width=Ce,ue.height=Ue,ue.getContext("2d").drawImage(N,0,0,Ce,Ue),Ke("WebGLRenderer: Texture has been resized from ("+Ee.width+"x"+Ee.height+") to ("+Ce+"x"+Ue+")."),ue}else return"data"in N&&Ke("WebGLRenderer: Image in DataTexture is too big ("+Ee.width+"x"+Ee.height+")."),N;return N}function y(N){return N.generateMipmaps}function C(N){r.generateMipmap(N)}function L(N){return N.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?r.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function U(N,T,J,ve,Ee,Ce=!1){if(N!==null){if(r[N]!==void 0)return r[N];Ke("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let Ue;ve&&(Ue=e.get("EXT_texture_norm16"),Ue||Ke("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ue=T;if(T===r.RED&&(J===r.FLOAT&&(ue=r.R32F),J===r.HALF_FLOAT&&(ue=r.R16F),J===r.UNSIGNED_BYTE&&(ue=r.R8),J===r.UNSIGNED_SHORT&&Ue&&(ue=Ue.R16_EXT),J===r.SHORT&&Ue&&(ue=Ue.R16_SNORM_EXT)),T===r.RED_INTEGER&&(J===r.UNSIGNED_BYTE&&(ue=r.R8UI),J===r.UNSIGNED_SHORT&&(ue=r.R16UI),J===r.UNSIGNED_INT&&(ue=r.R32UI),J===r.BYTE&&(ue=r.R8I),J===r.SHORT&&(ue=r.R16I),J===r.INT&&(ue=r.R32I)),T===r.RG&&(J===r.FLOAT&&(ue=r.RG32F),J===r.HALF_FLOAT&&(ue=r.RG16F),J===r.UNSIGNED_BYTE&&(ue=r.RG8),J===r.UNSIGNED_SHORT&&Ue&&(ue=Ue.RG16_EXT),J===r.SHORT&&Ue&&(ue=Ue.RG16_SNORM_EXT)),T===r.RG_INTEGER&&(J===r.UNSIGNED_BYTE&&(ue=r.RG8UI),J===r.UNSIGNED_SHORT&&(ue=r.RG16UI),J===r.UNSIGNED_INT&&(ue=r.RG32UI),J===r.BYTE&&(ue=r.RG8I),J===r.SHORT&&(ue=r.RG16I),J===r.INT&&(ue=r.RG32I)),T===r.RGB_INTEGER&&(J===r.UNSIGNED_BYTE&&(ue=r.RGB8UI),J===r.UNSIGNED_SHORT&&(ue=r.RGB16UI),J===r.UNSIGNED_INT&&(ue=r.RGB32UI),J===r.BYTE&&(ue=r.RGB8I),J===r.SHORT&&(ue=r.RGB16I),J===r.INT&&(ue=r.RGB32I)),T===r.RGBA_INTEGER&&(J===r.UNSIGNED_BYTE&&(ue=r.RGBA8UI),J===r.UNSIGNED_SHORT&&(ue=r.RGBA16UI),J===r.UNSIGNED_INT&&(ue=r.RGBA32UI),J===r.BYTE&&(ue=r.RGBA8I),J===r.SHORT&&(ue=r.RGBA16I),J===r.INT&&(ue=r.RGBA32I)),T===r.RGB&&(J===r.UNSIGNED_SHORT&&Ue&&(ue=Ue.RGB16_EXT),J===r.SHORT&&Ue&&(ue=Ue.RGB16_SNORM_EXT),J===r.UNSIGNED_INT_5_9_9_9_REV&&(ue=r.RGB9_E5),J===r.UNSIGNED_INT_10F_11F_11F_REV&&(ue=r.R11F_G11F_B10F)),T===r.RGBA){const de=Ce?Xu:Tt.getTransfer(Ee);J===r.FLOAT&&(ue=r.RGBA32F),J===r.HALF_FLOAT&&(ue=r.RGBA16F),J===r.UNSIGNED_BYTE&&(ue=de===Xt?r.SRGB8_ALPHA8:r.RGBA8),J===r.UNSIGNED_SHORT&&Ue&&(ue=Ue.RGBA16_EXT),J===r.SHORT&&Ue&&(ue=Ue.RGBA16_SNORM_EXT),J===r.UNSIGNED_SHORT_4_4_4_4&&(ue=r.RGBA4),J===r.UNSIGNED_SHORT_5_5_5_1&&(ue=r.RGB5_A1)}return(ue===r.R16F||ue===r.R32F||ue===r.RG16F||ue===r.RG32F||ue===r.RGBA16F||ue===r.RGBA32F)&&e.get("EXT_color_buffer_float"),ue}function F(N,T){let J;return N?T===null||T===ua||T===kl?J=r.DEPTH24_STENCIL8:T===Ui?J=r.DEPTH32F_STENCIL8:T===Vl&&(J=r.DEPTH24_STENCIL8,Ke("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===ua||T===kl?J=r.DEPTH_COMPONENT24:T===Ui?J=r.DEPTH_COMPONENT32F:T===Vl&&(J=r.DEPTH_COMPONENT16),J}function D(N,T){return y(N)===!0||N.isFramebufferTexture&&N.minFilter!==wn&&N.minFilter!==Cn?Math.log2(Math.max(T.width,T.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?T.mipmaps.length:1}function I(N){const T=N.target;T.removeEventListener("dispose",I),B(T),T.isVideoTexture&&g.delete(T),T.isHTMLTexture&&_.delete(T)}function E(N){const T=N.target;T.removeEventListener("dispose",E),H(T)}function B(N){const T=a.get(N);if(T.__webglInit===void 0)return;const J=N.source,ve=x.get(J);if(ve){const Ee=ve[T.__cacheKey];Ee.usedTimes--,Ee.usedTimes===0&&j(N),Object.keys(ve).length===0&&x.delete(J)}a.remove(N)}function j(N){const T=a.get(N);r.deleteTexture(T.__webglTexture);const J=N.source,ve=x.get(J);delete ve[T.__cacheKey],u.memory.textures--}function H(N){const T=a.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),a.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let ve=0;ve<6;ve++){if(Array.isArray(T.__webglFramebuffer[ve]))for(let Ee=0;Ee<T.__webglFramebuffer[ve].length;Ee++)r.deleteFramebuffer(T.__webglFramebuffer[ve][Ee]);else r.deleteFramebuffer(T.__webglFramebuffer[ve]);T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer[ve])}else{if(Array.isArray(T.__webglFramebuffer))for(let ve=0;ve<T.__webglFramebuffer.length;ve++)r.deleteFramebuffer(T.__webglFramebuffer[ve]);else r.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&r.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let ve=0;ve<T.__webglColorRenderbuffer.length;ve++)T.__webglColorRenderbuffer[ve]&&r.deleteRenderbuffer(T.__webglColorRenderbuffer[ve]);T.__webglDepthRenderbuffer&&r.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const J=N.textures;for(let ve=0,Ee=J.length;ve<Ee;ve++){const Ce=a.get(J[ve]);Ce.__webglTexture&&(r.deleteTexture(Ce.__webglTexture),u.memory.textures--),a.remove(J[ve])}a.remove(N)}let W=0;function ce(){W=0}function fe(){return W}function X(N){W=N}function P(){const N=W;return N>=o.maxTextures&&Ke("WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+o.maxTextures),W+=1,N}function z(N){const T=[];return T.push(N.wrapS),T.push(N.wrapT),T.push(N.wrapR||0),T.push(N.magFilter),T.push(N.minFilter),T.push(N.anisotropy),T.push(N.internalFormat),T.push(N.format),T.push(N.type),T.push(N.generateMipmaps),T.push(N.premultiplyAlpha),T.push(N.flipY),T.push(N.unpackAlignment),T.push(N.colorSpace),T.join()}function oe(N,T){const J=a.get(N);if(N.isVideoTexture&&Yt(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&J.__version!==N.version){const ve=N.image;if(ve===null)Ke("WebGLRenderer: Texture marked for update but no image data found.");else if(ve.complete===!1)Ke("WebGLRenderer: Texture marked for update but image is incomplete");else{Re(J,N,T);return}}else N.isExternalTexture&&(J.__webglTexture=N.sourceTexture?N.sourceTexture:null);n.bindTexture(r.TEXTURE_2D,J.__webglTexture,r.TEXTURE0+T)}function pe(N,T){const J=a.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&J.__version!==N.version){Re(J,N,T);return}else N.isExternalTexture&&(J.__webglTexture=N.sourceTexture?N.sourceTexture:null);n.bindTexture(r.TEXTURE_2D_ARRAY,J.__webglTexture,r.TEXTURE0+T)}function Q(N,T){const J=a.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&J.__version!==N.version){Re(J,N,T);return}n.bindTexture(r.TEXTURE_3D,J.__webglTexture,r.TEXTURE0+T)}function O(N,T){const J=a.get(N);if(N.isCubeDepthTexture!==!0&&N.version>0&&J.__version!==N.version){et(J,N,T);return}n.bindTexture(r.TEXTURE_CUBE_MAP,J.__webglTexture,r.TEXTURE0+T)}const K={[_o]:r.REPEAT,[sa]:r.CLAMP_TO_EDGE,[Gu]:r.MIRRORED_REPEAT},ge={[wn]:r.NEAREST,[$x]:r.NEAREST_MIPMAP_NEAREST,[Bl]:r.NEAREST_MIPMAP_LINEAR,[Cn]:r.LINEAR,[Pu]:r.LINEAR_MIPMAP_NEAREST,[Ha]:r.LINEAR_MIPMAP_LINEAR},ye={[BM]:r.NEVER,[VM]:r.ALWAYS,[FM]:r.LESS,[sm]:r.LEQUAL,[zM]:r.EQUAL,[rm]:r.GEQUAL,[HM]:r.GREATER,[GM]:r.NOTEQUAL};function be(N,T){if(T.type===Ui&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Cn||T.magFilter===Pu||T.magFilter===Bl||T.magFilter===Ha||T.minFilter===Cn||T.minFilter===Pu||T.minFilter===Bl||T.minFilter===Ha)&&Ke("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(N,r.TEXTURE_WRAP_S,K[T.wrapS]),r.texParameteri(N,r.TEXTURE_WRAP_T,K[T.wrapT]),(N===r.TEXTURE_3D||N===r.TEXTURE_2D_ARRAY)&&r.texParameteri(N,r.TEXTURE_WRAP_R,K[T.wrapR]),r.texParameteri(N,r.TEXTURE_MAG_FILTER,ge[T.magFilter]),r.texParameteri(N,r.TEXTURE_MIN_FILTER,ge[T.minFilter]),T.compareFunction&&(r.texParameteri(N,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(N,r.TEXTURE_COMPARE_FUNC,ye[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===wn||T.minFilter!==Bl&&T.minFilter!==Ha||T.type===Ui&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||a.get(T).__currentAnisotropy){const J=e.get("EXT_texture_filter_anisotropic");r.texParameterf(N,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,o.getMaxAnisotropy())),a.get(T).__currentAnisotropy=T.anisotropy}}}function ee(N,T){let J=!1;N.__webglInit===void 0&&(N.__webglInit=!0,T.addEventListener("dispose",I));const ve=T.source;let Ee=x.get(ve);Ee===void 0&&(Ee={},x.set(ve,Ee));const Ce=z(T);if(Ce!==N.__cacheKey){Ee[Ce]===void 0&&(Ee[Ce]={texture:r.createTexture(),usedTimes:0},u.memory.textures++,J=!0),Ee[Ce].usedTimes++;const Ue=Ee[N.__cacheKey];Ue!==void 0&&(Ee[N.__cacheKey].usedTimes--,Ue.usedTimes===0&&j(T)),N.__cacheKey=Ce,N.__webglTexture=Ee[Ce].texture}return J}function Se(N,T,J){return Math.floor(Math.floor(N/J)/T)}function Te(N,T,J,ve){const Ce=N.updateRanges;if(Ce.length===0)n.texSubImage2D(r.TEXTURE_2D,0,0,0,T.width,T.height,J,ve,T.data);else{Ce.sort((Pe,Ne)=>Pe.start-Ne.start);let Ue=0;for(let Pe=1;Pe<Ce.length;Pe++){const Ne=Ce[Ue],De=Ce[Pe],at=Ne.start+Ne.count,st=Se(De.start,T.width,4),St=Se(Ne.start,T.width,4);De.start<=at+1&&st===St&&Se(De.start+De.count-1,T.width,4)===st?Ne.count=Math.max(Ne.count,De.start+De.count-Ne.start):(++Ue,Ce[Ue]=De)}Ce.length=Ue+1;const ue=n.getParameter(r.UNPACK_ROW_LENGTH),de=n.getParameter(r.UNPACK_SKIP_PIXELS),Oe=n.getParameter(r.UNPACK_SKIP_ROWS);n.pixelStorei(r.UNPACK_ROW_LENGTH,T.width);for(let Pe=0,Ne=Ce.length;Pe<Ne;Pe++){const De=Ce[Pe],at=Math.floor(De.start/4),st=Math.ceil(De.count/4),St=at%T.width,V=Math.floor(at/T.width),Ae=st,me=1;n.pixelStorei(r.UNPACK_SKIP_PIXELS,St),n.pixelStorei(r.UNPACK_SKIP_ROWS,V),n.texSubImage2D(r.TEXTURE_2D,0,St,V,Ae,me,J,ve,T.data)}N.clearUpdateRanges(),n.pixelStorei(r.UNPACK_ROW_LENGTH,ue),n.pixelStorei(r.UNPACK_SKIP_PIXELS,de),n.pixelStorei(r.UNPACK_SKIP_ROWS,Oe)}}function Re(N,T,J){let ve=r.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ve=r.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ve=r.TEXTURE_3D);const Ee=ee(N,T),Ce=T.source;n.bindTexture(ve,N.__webglTexture,r.TEXTURE0+J);const Ue=a.get(Ce);if(Ce.version!==Ue.__version||Ee===!0){if(n.activeTexture(r.TEXTURE0+J),(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)===!1){const me=Tt.getPrimaries(Tt.workingColorSpace),Fe=T.colorSpace===Ls?null:Tt.getPrimaries(T.colorSpace),Le=T.colorSpace===Ls||me===Fe?r.NONE:r.BROWSER_DEFAULT_WEBGL;n.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),n.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),n.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le)}n.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment);let de=S(T.image,!1,o.maxTextureSize);de=we(T,de);const Oe=c.convert(T.format,T.colorSpace),Pe=c.convert(T.type);let Ne=U(T.internalFormat,Oe,Pe,T.normalized,T.colorSpace,T.isVideoTexture);be(ve,T);let De;const at=T.mipmaps,st=T.isVideoTexture!==!0,St=Ue.__version===void 0||Ee===!0,V=Ce.dataReady,Ae=D(T,de);if(T.isDepthTexture)Ne=F(T.format===fr,T.type),St&&(st?n.texStorage2D(r.TEXTURE_2D,1,Ne,de.width,de.height):n.texImage2D(r.TEXTURE_2D,0,Ne,de.width,de.height,0,Oe,Pe,null));else if(T.isDataTexture)if(at.length>0){st&&St&&n.texStorage2D(r.TEXTURE_2D,Ae,Ne,at[0].width,at[0].height);for(let me=0,Fe=at.length;me<Fe;me++)De=at[me],st?V&&n.texSubImage2D(r.TEXTURE_2D,me,0,0,De.width,De.height,Oe,Pe,De.data):n.texImage2D(r.TEXTURE_2D,me,Ne,De.width,De.height,0,Oe,Pe,De.data);T.generateMipmaps=!1}else st?(St&&n.texStorage2D(r.TEXTURE_2D,Ae,Ne,de.width,de.height),V&&Te(T,de,Oe,Pe)):n.texImage2D(r.TEXTURE_2D,0,Ne,de.width,de.height,0,Oe,Pe,de.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){st&&St&&n.texStorage3D(r.TEXTURE_2D_ARRAY,Ae,Ne,at[0].width,at[0].height,de.depth);for(let me=0,Fe=at.length;me<Fe;me++)if(De=at[me],T.format!==Oi)if(Oe!==null)if(st){if(V)if(T.layerUpdates.size>0){const Le=ox(De.width,De.height,T.format,T.type);for(const Me of T.layerUpdates){const Ye=De.data.subarray(Me*Le/De.data.BYTES_PER_ELEMENT,(Me+1)*Le/De.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,me,0,0,Me,De.width,De.height,1,Oe,Ye)}T.clearLayerUpdates()}else n.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,me,0,0,0,De.width,De.height,de.depth,Oe,De.data)}else n.compressedTexImage3D(r.TEXTURE_2D_ARRAY,me,Ne,De.width,De.height,de.depth,0,De.data,0,0);else Ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else st?V&&n.texSubImage3D(r.TEXTURE_2D_ARRAY,me,0,0,0,De.width,De.height,de.depth,Oe,Pe,De.data):n.texImage3D(r.TEXTURE_2D_ARRAY,me,Ne,De.width,De.height,de.depth,0,Oe,Pe,De.data)}else{st&&St&&n.texStorage2D(r.TEXTURE_2D,Ae,Ne,at[0].width,at[0].height);for(let me=0,Fe=at.length;me<Fe;me++)De=at[me],T.format!==Oi?Oe!==null?st?V&&n.compressedTexSubImage2D(r.TEXTURE_2D,me,0,0,De.width,De.height,Oe,De.data):n.compressedTexImage2D(r.TEXTURE_2D,me,Ne,De.width,De.height,0,De.data):Ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):st?V&&n.texSubImage2D(r.TEXTURE_2D,me,0,0,De.width,De.height,Oe,Pe,De.data):n.texImage2D(r.TEXTURE_2D,me,Ne,De.width,De.height,0,Oe,Pe,De.data)}else if(T.isDataArrayTexture)if(st){if(St&&n.texStorage3D(r.TEXTURE_2D_ARRAY,Ae,Ne,de.width,de.height,de.depth),V)if(T.layerUpdates.size>0){const me=ox(de.width,de.height,T.format,T.type);for(const Fe of T.layerUpdates){const Le=de.data.subarray(Fe*me/de.data.BYTES_PER_ELEMENT,(Fe+1)*me/de.data.BYTES_PER_ELEMENT);n.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Fe,de.width,de.height,1,Oe,Pe,Le)}T.clearLayerUpdates()}else n.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,de.width,de.height,de.depth,Oe,Pe,de.data)}else n.texImage3D(r.TEXTURE_2D_ARRAY,0,Ne,de.width,de.height,de.depth,0,Oe,Pe,de.data);else if(T.isData3DTexture)st?(St&&n.texStorage3D(r.TEXTURE_3D,Ae,Ne,de.width,de.height,de.depth),V&&n.texSubImage3D(r.TEXTURE_3D,0,0,0,0,de.width,de.height,de.depth,Oe,Pe,de.data)):n.texImage3D(r.TEXTURE_3D,0,Ne,de.width,de.height,de.depth,0,Oe,Pe,de.data);else if(T.isFramebufferTexture){if(St)if(st)n.texStorage2D(r.TEXTURE_2D,Ae,Ne,de.width,de.height);else{let me=de.width,Fe=de.height;for(let Le=0;Le<Ae;Le++)n.texImage2D(r.TEXTURE_2D,Le,Ne,me,Fe,0,Oe,Pe,null),me>>=1,Fe>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in r){const me=r.canvas;if(me.hasAttribute("layoutsubtree")||me.setAttribute("layoutsubtree","true"),de.parentNode!==me){me.appendChild(de),_.add(T),me.onpaint=it=>{const un=it.changedElements;for(const Pt of _)un.includes(Pt.image)&&(Pt.needsUpdate=!0)},me.requestPaint();return}const Fe=0,Le=r.RGBA,Me=r.RGBA,Ye=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,Fe,Le,Me,Ye,de),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(at.length>0){if(st&&St){const me=an(at[0]);n.texStorage2D(r.TEXTURE_2D,Ae,Ne,me.width,me.height)}for(let me=0,Fe=at.length;me<Fe;me++)De=at[me],st?V&&n.texSubImage2D(r.TEXTURE_2D,me,0,0,Oe,Pe,De):n.texImage2D(r.TEXTURE_2D,me,Ne,Oe,Pe,De);T.generateMipmaps=!1}else if(st){if(St){const me=an(de);n.texStorage2D(r.TEXTURE_2D,Ae,Ne,me.width,me.height)}V&&n.texSubImage2D(r.TEXTURE_2D,0,0,0,Oe,Pe,de)}else n.texImage2D(r.TEXTURE_2D,0,Ne,Oe,Pe,de);y(T)&&C(ve),Ue.__version=Ce.version,T.onUpdate&&T.onUpdate(T)}N.__version=T.version}function et(N,T,J){if(T.image.length!==6)return;const ve=ee(N,T),Ee=T.source;n.bindTexture(r.TEXTURE_CUBE_MAP,N.__webglTexture,r.TEXTURE0+J);const Ce=a.get(Ee);if(Ee.version!==Ce.__version||ve===!0){n.activeTexture(r.TEXTURE0+J);const Ue=Tt.getPrimaries(Tt.workingColorSpace),ue=T.colorSpace===Ls?null:Tt.getPrimaries(T.colorSpace),de=T.colorSpace===Ls||Ue===ue?r.NONE:r.BROWSER_DEFAULT_WEBGL;n.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),n.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),n.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),n.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);const Oe=T.isCompressedTexture||T.image[0].isCompressedTexture,Pe=T.image[0]&&T.image[0].isDataTexture,Ne=[];for(let Me=0;Me<6;Me++)!Oe&&!Pe?Ne[Me]=S(T.image[Me],!0,o.maxCubemapSize):Ne[Me]=Pe?T.image[Me].image:T.image[Me],Ne[Me]=we(T,Ne[Me]);const De=Ne[0],at=c.convert(T.format,T.colorSpace),st=c.convert(T.type),St=U(T.internalFormat,at,st,T.normalized,T.colorSpace),V=T.isVideoTexture!==!0,Ae=Ce.__version===void 0||ve===!0,me=Ee.dataReady;let Fe=D(T,De);be(r.TEXTURE_CUBE_MAP,T);let Le;if(Oe){V&&Ae&&n.texStorage2D(r.TEXTURE_CUBE_MAP,Fe,St,De.width,De.height);for(let Me=0;Me<6;Me++){Le=Ne[Me].mipmaps;for(let Ye=0;Ye<Le.length;Ye++){const it=Le[Ye];T.format!==Oi?at!==null?V?me&&n.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ye,0,0,it.width,it.height,at,it.data):n.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ye,St,it.width,it.height,0,it.data):Ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?me&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ye,0,0,it.width,it.height,at,st,it.data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ye,St,it.width,it.height,0,at,st,it.data)}}}else{if(Le=T.mipmaps,V&&Ae){Le.length>0&&Fe++;const Me=an(Ne[0]);n.texStorage2D(r.TEXTURE_CUBE_MAP,Fe,St,Me.width,Me.height)}for(let Me=0;Me<6;Me++)if(Pe){V?me&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,Ne[Me].width,Ne[Me].height,at,st,Ne[Me].data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,St,Ne[Me].width,Ne[Me].height,0,at,st,Ne[Me].data);for(let Ye=0;Ye<Le.length;Ye++){const un=Le[Ye].image[Me].image;V?me&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ye+1,0,0,un.width,un.height,at,st,un.data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ye+1,St,un.width,un.height,0,at,st,un.data)}}else{V?me&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,at,st,Ne[Me]):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,St,at,st,Ne[Me]);for(let Ye=0;Ye<Le.length;Ye++){const it=Le[Ye];V?me&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ye+1,0,0,at,st,it.image[Me]):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ye+1,St,at,st,it.image[Me])}}}y(T)&&C(r.TEXTURE_CUBE_MAP),Ce.__version=Ee.version,T.onUpdate&&T.onUpdate(T)}N.__version=T.version}function Ze(N,T,J,ve,Ee,Ce){const Ue=c.convert(J.format,J.colorSpace),ue=c.convert(J.type),de=U(J.internalFormat,Ue,ue,J.normalized,J.colorSpace),Oe=a.get(T),Pe=a.get(J);if(Pe.__renderTarget=T,!Oe.__hasExternalTextures){const Ne=Math.max(1,T.width>>Ce),De=Math.max(1,T.height>>Ce);Ee===r.TEXTURE_3D||Ee===r.TEXTURE_2D_ARRAY?n.texImage3D(Ee,Ce,de,Ne,De,T.depth,0,Ue,ue,null):n.texImage2D(Ee,Ce,de,Ne,De,0,Ue,ue,null)}n.bindFramebuffer(r.FRAMEBUFFER,N),xt(T)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ve,Ee,Pe.__webglTexture,0,cn(T)):(Ee===r.TEXTURE_2D||Ee>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Ee<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ve,Ee,Pe.__webglTexture,Ce),n.bindFramebuffer(r.FRAMEBUFFER,null)}function Nt(N,T,J){if(r.bindRenderbuffer(r.RENDERBUFFER,N),T.depthBuffer){const ve=T.depthTexture,Ee=ve&&ve.isDepthTexture?ve.type:null,Ce=F(T.stencilBuffer,Ee),Ue=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;xt(T)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,cn(T),Ce,T.width,T.height):J?r.renderbufferStorageMultisample(r.RENDERBUFFER,cn(T),Ce,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,Ce,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ue,r.RENDERBUFFER,N)}else{const ve=T.textures;for(let Ee=0;Ee<ve.length;Ee++){const Ce=ve[Ee],Ue=c.convert(Ce.format,Ce.colorSpace),ue=c.convert(Ce.type),de=U(Ce.internalFormat,Ue,ue,Ce.normalized,Ce.colorSpace);xt(T)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,cn(T),de,T.width,T.height):J?r.renderbufferStorageMultisample(r.RENDERBUFFER,cn(T),de,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,de,T.width,T.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function lt(N,T,J){const ve=T.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(r.FRAMEBUFFER,N),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Ee=a.get(T.depthTexture);if(Ee.__renderTarget=T,(!Ee.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),ve){if(Ee.__webglInit===void 0&&(Ee.__webglInit=!0,T.depthTexture.addEventListener("dispose",I)),Ee.__webglTexture===void 0){Ee.__webglTexture=r.createTexture(),n.bindTexture(r.TEXTURE_CUBE_MAP,Ee.__webglTexture),be(r.TEXTURE_CUBE_MAP,T.depthTexture);const Oe=c.convert(T.depthTexture.format),Pe=c.convert(T.depthTexture.type);let Ne;T.depthTexture.format===qa?Ne=r.DEPTH_COMPONENT24:T.depthTexture.format===fr&&(Ne=r.DEPTH24_STENCIL8);for(let De=0;De<6;De++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+De,0,Ne,T.width,T.height,0,Oe,Pe,null)}}else oe(T.depthTexture,0);const Ce=Ee.__webglTexture,Ue=cn(T),ue=ve?r.TEXTURE_CUBE_MAP_POSITIVE_X+J:r.TEXTURE_2D,de=T.depthTexture.format===fr?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(T.depthTexture.format===qa)xt(T)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,de,ue,Ce,0,Ue):r.framebufferTexture2D(r.FRAMEBUFFER,de,ue,Ce,0);else if(T.depthTexture.format===fr)xt(T)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,de,ue,Ce,0,Ue):r.framebufferTexture2D(r.FRAMEBUFFER,de,ue,Ce,0);else throw new Error("Unknown depthTexture format")}function ht(N){const T=a.get(N),J=N.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==N.depthTexture){const ve=N.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),ve){const Ee=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,ve.removeEventListener("dispose",Ee)};ve.addEventListener("dispose",Ee),T.__depthDisposeCallback=Ee}T.__boundDepthTexture=ve}if(N.depthTexture&&!T.__autoAllocateDepthBuffer)if(J)for(let ve=0;ve<6;ve++)lt(T.__webglFramebuffer[ve],N,ve);else{const ve=N.texture.mipmaps;ve&&ve.length>0?lt(T.__webglFramebuffer[0],N,0):lt(T.__webglFramebuffer,N,0)}else if(J){T.__webglDepthbuffer=[];for(let ve=0;ve<6;ve++)if(n.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[ve]),T.__webglDepthbuffer[ve]===void 0)T.__webglDepthbuffer[ve]=r.createRenderbuffer(),Nt(T.__webglDepthbuffer[ve],N,!1);else{const Ee=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ce=T.__webglDepthbuffer[ve];r.bindRenderbuffer(r.RENDERBUFFER,Ce),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ee,r.RENDERBUFFER,Ce)}}else{const ve=N.texture.mipmaps;if(ve&&ve.length>0?n.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[0]):n.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=r.createRenderbuffer(),Nt(T.__webglDepthbuffer,N,!1);else{const Ee=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ce=T.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Ce),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ee,r.RENDERBUFFER,Ce)}}n.bindFramebuffer(r.FRAMEBUFFER,null)}function Ft(N,T,J){const ve=a.get(N);T!==void 0&&Ze(ve.__webglFramebuffer,N,N.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),J!==void 0&&ht(N)}function pt(N){const T=N.texture,J=a.get(N),ve=a.get(T);N.addEventListener("dispose",E);const Ee=N.textures,Ce=N.isWebGLCubeRenderTarget===!0,Ue=Ee.length>1;if(Ue||(ve.__webglTexture===void 0&&(ve.__webglTexture=r.createTexture()),ve.__version=T.version,u.memory.textures++),Ce){J.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(T.mipmaps&&T.mipmaps.length>0){J.__webglFramebuffer[ue]=[];for(let de=0;de<T.mipmaps.length;de++)J.__webglFramebuffer[ue][de]=r.createFramebuffer()}else J.__webglFramebuffer[ue]=r.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){J.__webglFramebuffer=[];for(let ue=0;ue<T.mipmaps.length;ue++)J.__webglFramebuffer[ue]=r.createFramebuffer()}else J.__webglFramebuffer=r.createFramebuffer();if(Ue)for(let ue=0,de=Ee.length;ue<de;ue++){const Oe=a.get(Ee[ue]);Oe.__webglTexture===void 0&&(Oe.__webglTexture=r.createTexture(),u.memory.textures++)}if(N.samples>0&&xt(N)===!1){J.__webglMultisampledFramebuffer=r.createFramebuffer(),J.__webglColorRenderbuffer=[],n.bindFramebuffer(r.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let ue=0;ue<Ee.length;ue++){const de=Ee[ue];J.__webglColorRenderbuffer[ue]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,J.__webglColorRenderbuffer[ue]);const Oe=c.convert(de.format,de.colorSpace),Pe=c.convert(de.type),Ne=U(de.internalFormat,Oe,Pe,de.normalized,de.colorSpace,N.isXRRenderTarget===!0),De=cn(N);r.renderbufferStorageMultisample(r.RENDERBUFFER,De,Ne,N.width,N.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ue,r.RENDERBUFFER,J.__webglColorRenderbuffer[ue])}r.bindRenderbuffer(r.RENDERBUFFER,null),N.depthBuffer&&(J.__webglDepthRenderbuffer=r.createRenderbuffer(),Nt(J.__webglDepthRenderbuffer,N,!0)),n.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Ce){n.bindTexture(r.TEXTURE_CUBE_MAP,ve.__webglTexture),be(r.TEXTURE_CUBE_MAP,T);for(let ue=0;ue<6;ue++)if(T.mipmaps&&T.mipmaps.length>0)for(let de=0;de<T.mipmaps.length;de++)Ze(J.__webglFramebuffer[ue][de],N,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ue,de);else Ze(J.__webglFramebuffer[ue],N,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);y(T)&&C(r.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ue){for(let ue=0,de=Ee.length;ue<de;ue++){const Oe=Ee[ue],Pe=a.get(Oe);let Ne=r.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Ne=N.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),n.bindTexture(Ne,Pe.__webglTexture),be(Ne,Oe),Ze(J.__webglFramebuffer,N,Oe,r.COLOR_ATTACHMENT0+ue,Ne,0),y(Oe)&&C(Ne)}n.unbindTexture()}else{let ue=r.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(ue=N.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),n.bindTexture(ue,ve.__webglTexture),be(ue,T),T.mipmaps&&T.mipmaps.length>0)for(let de=0;de<T.mipmaps.length;de++)Ze(J.__webglFramebuffer[de],N,T,r.COLOR_ATTACHMENT0,ue,de);else Ze(J.__webglFramebuffer,N,T,r.COLOR_ATTACHMENT0,ue,0);y(T)&&C(ue),n.unbindTexture()}N.depthBuffer&&ht(N)}function hn(N){const T=N.textures;for(let J=0,ve=T.length;J<ve;J++){const Ee=T[J];if(y(Ee)){const Ce=L(N),Ue=a.get(Ee).__webglTexture;n.bindTexture(Ce,Ue),C(Ce),n.unbindTexture()}}}const en=[],Pn=[];function q(N){if(N.samples>0){if(xt(N)===!1){const T=N.textures,J=N.width,ve=N.height;let Ee=r.COLOR_BUFFER_BIT;const Ce=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ue=a.get(N),ue=T.length>1;if(ue)for(let Oe=0;Oe<T.length;Oe++)n.bindFramebuffer(r.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Oe,r.RENDERBUFFER,null),n.bindFramebuffer(r.FRAMEBUFFER,Ue.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Oe,r.TEXTURE_2D,null,0);n.bindFramebuffer(r.READ_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer);const de=N.texture.mipmaps;de&&de.length>0?n.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer[0]):n.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer);for(let Oe=0;Oe<T.length;Oe++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(Ee|=r.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(Ee|=r.STENCIL_BUFFER_BIT)),ue){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Ue.__webglColorRenderbuffer[Oe]);const Pe=a.get(T[Oe]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Pe,0)}r.blitFramebuffer(0,0,J,ve,0,0,J,ve,Ee,r.NEAREST),p===!0&&(en.length=0,Pn.length=0,en.push(r.COLOR_ATTACHMENT0+Oe),N.depthBuffer&&N.resolveDepthBuffer===!1&&(en.push(Ce),Pn.push(Ce),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Pn)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,en))}if(n.bindFramebuffer(r.READ_FRAMEBUFFER,null),n.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ue)for(let Oe=0;Oe<T.length;Oe++){n.bindFramebuffer(r.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Oe,r.RENDERBUFFER,Ue.__webglColorRenderbuffer[Oe]);const Pe=a.get(T[Oe]).__webglTexture;n.bindFramebuffer(r.FRAMEBUFFER,Ue.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Oe,r.TEXTURE_2D,Pe,0)}n.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&p){const T=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[T])}}}function cn(N){return Math.min(o.maxSamples,N.samples)}function xt(N){const T=a.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Yt(N){const T=u.render.frame;g.get(N)!==T&&(g.set(N,T),N.update())}function we(N,T){const J=N.colorSpace,ve=N.format,Ee=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||J!==yi&&J!==Ls&&(Tt.getTransfer(J)===Xt?(ve!==Oi||Ee!==xi)&&Ke("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):nt("WebGLTextures: Unsupported texture color space:",J)),T}function an(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(d.width=N.naturalWidth||N.width,d.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(d.width=N.displayWidth,d.height=N.displayHeight):(d.width=N.width,d.height=N.height),d}this.allocateTextureUnit=P,this.resetTextureUnits=ce,this.getTextureUnits=fe,this.setTextureUnits=X,this.setTexture2D=oe,this.setTexture2DArray=pe,this.setTexture3D=Q,this.setTextureCube=O,this.rebindTextures=Ft,this.setupRenderTarget=pt,this.updateRenderTargetMipmap=hn,this.updateMultisampleRenderTarget=q,this.setupDepthRenderbuffer=ht,this.setupFrameBufferTexture=Ze,this.useMultisampledRTT=xt,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function hC(r,e){function n(a,o=Ls){let c;const u=Tt.getTransfer(o);if(a===xi)return r.UNSIGNED_BYTE;if(a===$p)return r.UNSIGNED_SHORT_4_4_4_4;if(a===em)return r.UNSIGNED_SHORT_5_5_5_1;if(a===ny)return r.UNSIGNED_INT_5_9_9_9_REV;if(a===iy)return r.UNSIGNED_INT_10F_11F_11F_REV;if(a===ey)return r.BYTE;if(a===ty)return r.SHORT;if(a===Vl)return r.UNSIGNED_SHORT;if(a===Jp)return r.INT;if(a===ua)return r.UNSIGNED_INT;if(a===Ui)return r.FLOAT;if(a===Wa)return r.HALF_FLOAT;if(a===ay)return r.ALPHA;if(a===sy)return r.RGB;if(a===Oi)return r.RGBA;if(a===qa)return r.DEPTH_COMPONENT;if(a===fr)return r.DEPTH_STENCIL;if(a===tm)return r.RED;if(a===nm)return r.RED_INTEGER;if(a===pr)return r.RG;if(a===im)return r.RG_INTEGER;if(a===am)return r.RGBA_INTEGER;if(a===Iu||a===Bu||a===Fu||a===zu)if(u===Xt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(a===Iu)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===Bu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===Fu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===zu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(a===Iu)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===Bu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===Fu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===zu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===cp||a===up||a===fp||a===dp)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(a===cp)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===up)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===fp)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===dp)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===hp||a===pp||a===mp||a===gp||a===_p||a===Vu||a===vp)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(a===hp||a===pp)return u===Xt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(a===mp)return u===Xt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(a===gp)return c.COMPRESSED_R11_EAC;if(a===_p)return c.COMPRESSED_SIGNED_R11_EAC;if(a===Vu)return c.COMPRESSED_RG11_EAC;if(a===vp)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(a===xp||a===yp||a===Sp||a===bp||a===Mp||a===Ep||a===Tp||a===Ap||a===Rp||a===wp||a===Cp||a===Dp||a===Np||a===Lp)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(a===xp)return u===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===yp)return u===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===Sp)return u===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===bp)return u===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===Mp)return u===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===Ep)return u===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===Tp)return u===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===Ap)return u===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===Rp)return u===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===wp)return u===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===Cp)return u===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===Dp)return u===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===Np)return u===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===Lp)return u===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===Up||a===Op||a===Pp)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(a===Up)return u===Xt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===Op)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===Pp)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===Ip||a===Bp||a===ku||a===Fp)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(a===Ip)return c.COMPRESSED_RED_RGTC1_EXT;if(a===Bp)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===ku)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===Fp)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===kl?r.UNSIGNED_INT_24_8:r[a]!==void 0?r[a]:null}return{convert:n}}const pC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,mC=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class gC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const a=new _y(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,a=new fa({vertexShader:pC,fragmentShader:mC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Jn(new Ju(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class _C extends mr{constructor(e,n){super();const a=this;let o=null,c=1,u=null,h="local-floor",p=1,d=null,g=null,_=null,v=null,x=null,M=null;const A=typeof XRWebGLBinding<"u",S=new gC,y={},C=n.getContextAttributes();let L=null,U=null;const F=[],D=[],I=new Dt;let E=null;const B=new Zn;B.viewport=new $t;const j=new Zn;j.viewport=new $t;const H=[B,j],W=new vT;let ce=null,fe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let Se=F[ee];return Se===void 0&&(Se=new bh,F[ee]=Se),Se.getTargetRaySpace()},this.getControllerGrip=function(ee){let Se=F[ee];return Se===void 0&&(Se=new bh,F[ee]=Se),Se.getGripSpace()},this.getHand=function(ee){let Se=F[ee];return Se===void 0&&(Se=new bh,F[ee]=Se),Se.getHandSpace()};function X(ee){const Se=D.indexOf(ee.inputSource);if(Se===-1)return;const Te=F[Se];Te!==void 0&&(Te.update(ee.inputSource,ee.frame,d||u),Te.dispatchEvent({type:ee.type,data:ee.inputSource}))}function P(){o.removeEventListener("select",X),o.removeEventListener("selectstart",X),o.removeEventListener("selectend",X),o.removeEventListener("squeeze",X),o.removeEventListener("squeezestart",X),o.removeEventListener("squeezeend",X),o.removeEventListener("end",P),o.removeEventListener("inputsourceschange",z);for(let ee=0;ee<F.length;ee++){const Se=D[ee];Se!==null&&(D[ee]=null,F[ee].disconnect(Se))}ce=null,fe=null,S.reset();for(const ee in y)delete y[ee];e.setRenderTarget(L),x=null,v=null,_=null,o=null,U=null,be.stop(),a.isPresenting=!1,e.setPixelRatio(E),e.setSize(I.width,I.height,!1),a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){c=ee,a.isPresenting===!0&&Ke("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){h=ee,a.isPresenting===!0&&Ke("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||u},this.setReferenceSpace=function(ee){d=ee},this.getBaseLayer=function(){return v!==null?v:x},this.getBinding=function(){return _===null&&A&&(_=new XRWebGLBinding(o,n)),_},this.getFrame=function(){return M},this.getSession=function(){return o},this.setSession=async function(ee){if(o=ee,o!==null){if(L=e.getRenderTarget(),o.addEventListener("select",X),o.addEventListener("selectstart",X),o.addEventListener("selectend",X),o.addEventListener("squeeze",X),o.addEventListener("squeezestart",X),o.addEventListener("squeezeend",X),o.addEventListener("end",P),o.addEventListener("inputsourceschange",z),C.xrCompatible!==!0&&await n.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(I),A&&"createProjectionLayer"in XRWebGLBinding.prototype){let Te=null,Re=null,et=null;C.depth&&(et=C.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Te=C.stencil?fr:qa,Re=C.stencil?kl:ua);const Ze={colorFormat:n.RGBA8,depthFormat:et,scaleFactor:c};_=this.getBinding(),v=_.createProjectionLayer(Ze),o.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),U=new la(v.textureWidth,v.textureHeight,{format:Oi,type:xi,depthTexture:new xo(v.textureWidth,v.textureHeight,Re,void 0,void 0,void 0,void 0,void 0,void 0,Te),stencilBuffer:C.stencil,colorSpace:e.outputColorSpace,samples:C.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const Te={antialias:C.antialias,alpha:!0,depth:C.depth,stencil:C.stencil,framebufferScaleFactor:c};x=new XRWebGLLayer(o,n,Te),o.updateRenderState({baseLayer:x}),e.setPixelRatio(1),e.setSize(x.framebufferWidth,x.framebufferHeight,!1),U=new la(x.framebufferWidth,x.framebufferHeight,{format:Oi,type:xi,colorSpace:e.outputColorSpace,stencilBuffer:C.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}U.isXRRenderTarget=!0,this.setFoveation(p),d=null,u=await o.requestReferenceSpace(h),be.setContext(o),be.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function z(ee){for(let Se=0;Se<ee.removed.length;Se++){const Te=ee.removed[Se],Re=D.indexOf(Te);Re>=0&&(D[Re]=null,F[Re].disconnect(Te))}for(let Se=0;Se<ee.added.length;Se++){const Te=ee.added[Se];let Re=D.indexOf(Te);if(Re===-1){for(let Ze=0;Ze<F.length;Ze++)if(Ze>=D.length){D.push(Te),Re=Ze;break}else if(D[Ze]===null){D[Ze]=Te,Re=Ze;break}if(Re===-1)break}const et=F[Re];et&&et.connect(Te)}}const oe=new $,pe=new $;function Q(ee,Se,Te){oe.setFromMatrixPosition(Se.matrixWorld),pe.setFromMatrixPosition(Te.matrixWorld);const Re=oe.distanceTo(pe),et=Se.projectionMatrix.elements,Ze=Te.projectionMatrix.elements,Nt=et[14]/(et[10]-1),lt=et[14]/(et[10]+1),ht=(et[9]+1)/et[5],Ft=(et[9]-1)/et[5],pt=(et[8]-1)/et[0],hn=(Ze[8]+1)/Ze[0],en=Nt*pt,Pn=Nt*hn,q=Re/(-pt+hn),cn=q*-pt;if(Se.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(cn),ee.translateZ(q),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert(),et[10]===-1)ee.projectionMatrix.copy(Se.projectionMatrix),ee.projectionMatrixInverse.copy(Se.projectionMatrixInverse);else{const xt=Nt+q,Yt=lt+q,we=en-cn,an=Pn+(Re-cn),N=ht*lt/Yt*xt,T=Ft*lt/Yt*xt;ee.projectionMatrix.makePerspective(we,an,N,T,xt,Yt),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}}function O(ee,Se){Se===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(Se.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(o===null)return;let Se=ee.near,Te=ee.far;S.texture!==null&&(S.depthNear>0&&(Se=S.depthNear),S.depthFar>0&&(Te=S.depthFar)),W.near=j.near=B.near=Se,W.far=j.far=B.far=Te,(ce!==W.near||fe!==W.far)&&(o.updateRenderState({depthNear:W.near,depthFar:W.far}),ce=W.near,fe=W.far),W.layers.mask=ee.layers.mask|6,B.layers.mask=W.layers.mask&-5,j.layers.mask=W.layers.mask&-3;const Re=ee.parent,et=W.cameras;O(W,Re);for(let Ze=0;Ze<et.length;Ze++)O(et[Ze],Re);et.length===2?Q(W,B,j):W.projectionMatrix.copy(B.projectionMatrix),K(ee,W,Re)};function K(ee,Se,Te){Te===null?ee.matrix.copy(Se.matrixWorld):(ee.matrix.copy(Te.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(Se.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(Se.projectionMatrix),ee.projectionMatrixInverse.copy(Se.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=vo*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return W},this.getFoveation=function(){if(!(v===null&&x===null))return p},this.setFoveation=function(ee){p=ee,v!==null&&(v.fixedFoveation=ee),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=ee)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(W)},this.getCameraTexture=function(ee){return y[ee]};let ge=null;function ye(ee,Se){if(g=Se.getViewerPose(d||u),M=Se,g!==null){const Te=g.views;x!==null&&(e.setRenderTargetFramebuffer(U,x.framebuffer),e.setRenderTarget(U));let Re=!1;Te.length!==W.cameras.length&&(W.cameras.length=0,Re=!0);for(let lt=0;lt<Te.length;lt++){const ht=Te[lt];let Ft=null;if(x!==null)Ft=x.getViewport(ht);else{const hn=_.getViewSubImage(v,ht);Ft=hn.viewport,lt===0&&(e.setRenderTargetTextures(U,hn.colorTexture,hn.depthStencilTexture),e.setRenderTarget(U))}let pt=H[lt];pt===void 0&&(pt=new Zn,pt.layers.enable(lt),pt.viewport=new $t,H[lt]=pt),pt.matrix.fromArray(ht.transform.matrix),pt.matrix.decompose(pt.position,pt.quaternion,pt.scale),pt.projectionMatrix.fromArray(ht.projectionMatrix),pt.projectionMatrixInverse.copy(pt.projectionMatrix).invert(),pt.viewport.set(Ft.x,Ft.y,Ft.width,Ft.height),lt===0&&(W.matrix.copy(pt.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale)),Re===!0&&W.cameras.push(pt)}const et=o.enabledFeatures;if(et&&et.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&A){_=a.getBinding();const lt=_.getDepthInformation(Te[0]);lt&&lt.isValid&&lt.texture&&S.init(lt,o.renderState)}if(et&&et.includes("camera-access")&&A){e.state.unbindTexture(),_=a.getBinding();for(let lt=0;lt<Te.length;lt++){const ht=Te[lt].camera;if(ht){let Ft=y[ht];Ft||(Ft=new _y,y[ht]=Ft);const pt=_.getCameraImage(ht);Ft.sourceTexture=pt}}}}for(let Te=0;Te<F.length;Te++){const Re=D[Te],et=F[Te];Re!==null&&et!==void 0&&et.update(Re,Se,d||u)}ge&&ge(ee,Se),Se.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:Se}),M=null}const be=new Ey;be.setAnimationLoop(ye),this.setAnimationLoop=function(ee){ge=ee},this.dispose=function(){}}}const vC=new vt,Ny=new ut;Ny.set(-1,0,0,0,1,0,0,0,1);function xC(r,e){function n(S,y){S.matrixAutoUpdate===!0&&S.updateMatrix(),y.value.copy(S.matrix)}function a(S,y){y.color.getRGB(S.fogColor.value,vy(r)),y.isFog?(S.fogNear.value=y.near,S.fogFar.value=y.far):y.isFogExp2&&(S.fogDensity.value=y.density)}function o(S,y,C,L,U){y.isNodeMaterial?y.uniformsNeedUpdate=!1:y.isMeshBasicMaterial?c(S,y):y.isMeshLambertMaterial?(c(S,y),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)):y.isMeshToonMaterial?(c(S,y),_(S,y)):y.isMeshPhongMaterial?(c(S,y),g(S,y),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)):y.isMeshStandardMaterial?(c(S,y),v(S,y),y.isMeshPhysicalMaterial&&x(S,y,U)):y.isMeshMatcapMaterial?(c(S,y),M(S,y)):y.isMeshDepthMaterial?c(S,y):y.isMeshDistanceMaterial?(c(S,y),A(S,y)):y.isMeshNormalMaterial?c(S,y):y.isLineBasicMaterial?(u(S,y),y.isLineDashedMaterial&&h(S,y)):y.isPointsMaterial?p(S,y,C,L):y.isSpriteMaterial?d(S,y):y.isShadowMaterial?(S.color.value.copy(y.color),S.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function c(S,y){S.opacity.value=y.opacity,y.color&&S.diffuse.value.copy(y.color),y.emissive&&S.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(S.map.value=y.map,n(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,n(y.alphaMap,S.alphaMapTransform)),y.bumpMap&&(S.bumpMap.value=y.bumpMap,n(y.bumpMap,S.bumpMapTransform),S.bumpScale.value=y.bumpScale,y.side===si&&(S.bumpScale.value*=-1)),y.normalMap&&(S.normalMap.value=y.normalMap,n(y.normalMap,S.normalMapTransform),S.normalScale.value.copy(y.normalScale),y.side===si&&S.normalScale.value.negate()),y.displacementMap&&(S.displacementMap.value=y.displacementMap,n(y.displacementMap,S.displacementMapTransform),S.displacementScale.value=y.displacementScale,S.displacementBias.value=y.displacementBias),y.emissiveMap&&(S.emissiveMap.value=y.emissiveMap,n(y.emissiveMap,S.emissiveMapTransform)),y.specularMap&&(S.specularMap.value=y.specularMap,n(y.specularMap,S.specularMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest);const C=e.get(y),L=C.envMap,U=C.envMapRotation;L&&(S.envMap.value=L,S.envMapRotation.value.setFromMatrix4(vC.makeRotationFromEuler(U)).transpose(),L.isCubeTexture&&L.isRenderTargetTexture===!1&&S.envMapRotation.value.premultiply(Ny),S.reflectivity.value=y.reflectivity,S.ior.value=y.ior,S.refractionRatio.value=y.refractionRatio),y.lightMap&&(S.lightMap.value=y.lightMap,S.lightMapIntensity.value=y.lightMapIntensity,n(y.lightMap,S.lightMapTransform)),y.aoMap&&(S.aoMap.value=y.aoMap,S.aoMapIntensity.value=y.aoMapIntensity,n(y.aoMap,S.aoMapTransform))}function u(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,y.map&&(S.map.value=y.map,n(y.map,S.mapTransform))}function h(S,y){S.dashSize.value=y.dashSize,S.totalSize.value=y.dashSize+y.gapSize,S.scale.value=y.scale}function p(S,y,C,L){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.size.value=y.size*C,S.scale.value=L*.5,y.map&&(S.map.value=y.map,n(y.map,S.uvTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,n(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function d(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.rotation.value=y.rotation,y.map&&(S.map.value=y.map,n(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,n(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function g(S,y){S.specular.value.copy(y.specular),S.shininess.value=Math.max(y.shininess,1e-4)}function _(S,y){y.gradientMap&&(S.gradientMap.value=y.gradientMap)}function v(S,y){S.metalness.value=y.metalness,y.metalnessMap&&(S.metalnessMap.value=y.metalnessMap,n(y.metalnessMap,S.metalnessMapTransform)),S.roughness.value=y.roughness,y.roughnessMap&&(S.roughnessMap.value=y.roughnessMap,n(y.roughnessMap,S.roughnessMapTransform)),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)}function x(S,y,C){S.ior.value=y.ior,y.sheen>0&&(S.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),S.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(S.sheenColorMap.value=y.sheenColorMap,n(y.sheenColorMap,S.sheenColorMapTransform)),y.sheenRoughnessMap&&(S.sheenRoughnessMap.value=y.sheenRoughnessMap,n(y.sheenRoughnessMap,S.sheenRoughnessMapTransform))),y.clearcoat>0&&(S.clearcoat.value=y.clearcoat,S.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(S.clearcoatMap.value=y.clearcoatMap,n(y.clearcoatMap,S.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,n(y.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(S.clearcoatNormalMap.value=y.clearcoatNormalMap,n(y.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===si&&S.clearcoatNormalScale.value.negate())),y.dispersion>0&&(S.dispersion.value=y.dispersion),y.iridescence>0&&(S.iridescence.value=y.iridescence,S.iridescenceIOR.value=y.iridescenceIOR,S.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(S.iridescenceMap.value=y.iridescenceMap,n(y.iridescenceMap,S.iridescenceMapTransform)),y.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=y.iridescenceThicknessMap,n(y.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),y.transmission>0&&(S.transmission.value=y.transmission,S.transmissionSamplerMap.value=C.texture,S.transmissionSamplerSize.value.set(C.width,C.height),y.transmissionMap&&(S.transmissionMap.value=y.transmissionMap,n(y.transmissionMap,S.transmissionMapTransform)),S.thickness.value=y.thickness,y.thicknessMap&&(S.thicknessMap.value=y.thicknessMap,n(y.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=y.attenuationDistance,S.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(S.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(S.anisotropyMap.value=y.anisotropyMap,n(y.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=y.specularIntensity,S.specularColor.value.copy(y.specularColor),y.specularColorMap&&(S.specularColorMap.value=y.specularColorMap,n(y.specularColorMap,S.specularColorMapTransform)),y.specularIntensityMap&&(S.specularIntensityMap.value=y.specularIntensityMap,n(y.specularIntensityMap,S.specularIntensityMapTransform))}function M(S,y){y.matcap&&(S.matcap.value=y.matcap)}function A(S,y){const C=e.get(y).light;S.referencePosition.value.setFromMatrixPosition(C.matrixWorld),S.nearDistance.value=C.shadow.camera.near,S.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:o}}function yC(r,e,n,a){let o={},c={},u=[];const h=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function p(C,L){const U=L.program;a.uniformBlockBinding(C,U)}function d(C,L){let U=o[C.id];U===void 0&&(M(C),U=g(C),o[C.id]=U,C.addEventListener("dispose",S));const F=L.program;a.updateUBOMapping(C,F);const D=e.render.frame;c[C.id]!==D&&(v(C),c[C.id]=D)}function g(C){const L=_();C.__bindingPointIndex=L;const U=r.createBuffer(),F=C.__size,D=C.usage;return r.bindBuffer(r.UNIFORM_BUFFER,U),r.bufferData(r.UNIFORM_BUFFER,F,D),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,L,U),U}function _(){for(let C=0;C<h;C++)if(u.indexOf(C)===-1)return u.push(C),C;return nt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(C){const L=o[C.id],U=C.uniforms,F=C.__cache;r.bindBuffer(r.UNIFORM_BUFFER,L);for(let D=0,I=U.length;D<I;D++){const E=Array.isArray(U[D])?U[D]:[U[D]];for(let B=0,j=E.length;B<j;B++){const H=E[B];if(x(H,D,B,F)===!0){const W=H.__offset,ce=Array.isArray(H.value)?H.value:[H.value];let fe=0;for(let X=0;X<ce.length;X++){const P=ce[X],z=A(P);typeof P=="number"||typeof P=="boolean"?(H.__data[0]=P,r.bufferSubData(r.UNIFORM_BUFFER,W+fe,H.__data)):P.isMatrix3?(H.__data[0]=P.elements[0],H.__data[1]=P.elements[1],H.__data[2]=P.elements[2],H.__data[3]=0,H.__data[4]=P.elements[3],H.__data[5]=P.elements[4],H.__data[6]=P.elements[5],H.__data[7]=0,H.__data[8]=P.elements[6],H.__data[9]=P.elements[7],H.__data[10]=P.elements[8],H.__data[11]=0):ArrayBuffer.isView(P)?H.__data.set(new P.constructor(P.buffer,P.byteOffset,H.__data.length)):(P.toArray(H.__data,fe),fe+=z.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,W,H.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function x(C,L,U,F){const D=C.value,I=L+"_"+U;if(F[I]===void 0)return typeof D=="number"||typeof D=="boolean"?F[I]=D:ArrayBuffer.isView(D)?F[I]=D.slice():F[I]=D.clone(),!0;{const E=F[I];if(typeof D=="number"||typeof D=="boolean"){if(E!==D)return F[I]=D,!0}else{if(ArrayBuffer.isView(D))return!0;if(E.equals(D)===!1)return E.copy(D),!0}}return!1}function M(C){const L=C.uniforms;let U=0;const F=16;for(let I=0,E=L.length;I<E;I++){const B=Array.isArray(L[I])?L[I]:[L[I]];for(let j=0,H=B.length;j<H;j++){const W=B[j],ce=Array.isArray(W.value)?W.value:[W.value];for(let fe=0,X=ce.length;fe<X;fe++){const P=ce[fe],z=A(P),oe=U%F,pe=oe%z.boundary,Q=oe+pe;U+=pe,Q!==0&&F-Q<z.storage&&(U+=F-Q),W.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=U,U+=z.storage}}}const D=U%F;return D>0&&(U+=F-D),C.__size=U,C.__cache={},this}function A(C){const L={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(L.boundary=4,L.storage=4):C.isVector2?(L.boundary=8,L.storage=8):C.isVector3||C.isColor?(L.boundary=16,L.storage=12):C.isVector4?(L.boundary=16,L.storage=16):C.isMatrix3?(L.boundary=48,L.storage=48):C.isMatrix4?(L.boundary=64,L.storage=64):C.isTexture?Ke("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(C)?(L.boundary=16,L.storage=C.byteLength):Ke("WebGLRenderer: Unsupported uniform value type.",C),L}function S(C){const L=C.target;L.removeEventListener("dispose",S);const U=u.indexOf(L.__bindingPointIndex);u.splice(U,1),r.deleteBuffer(o[L.id]),delete o[L.id],delete c[L.id]}function y(){for(const C in o)r.deleteBuffer(o[C]);u=[],o={},c={}}return{bind:p,update:d,dispose:y}}const SC=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ea=null;function bC(){return ea===null&&(ea=new um(SC,16,16,pr,Wa),ea.name="DFG_LUT",ea.minFilter=Cn,ea.magFilter=Cn,ea.wrapS=sa,ea.wrapT=sa,ea.generateMipmaps=!1,ea.needsUpdate=!0),ea}class MC{constructor(e={}){const{canvas:n=WM(),context:a=null,depth:o=!0,stencil:c=!1,alpha:u=!1,antialias:h=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:d=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:v=!1,outputBufferType:x=xi}=e;this.isWebGLRenderer=!0;let M;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=a.getContextAttributes().alpha}else M=u;const A=x,S=new Set([am,im,nm]),y=new Set([xi,ua,Vl,kl,$p,em]),C=new Uint32Array(4),L=new Int32Array(4),U=new $;let F=null,D=null;const I=[],E=[];let B=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=oa,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const j=this;let H=!1,W=null;this._outputColorSpace=Gn;let ce=0,fe=0,X=null,P=-1,z=null;const oe=new $t,pe=new $t;let Q=null;const O=new ot(0);let K=0,ge=n.width,ye=n.height,be=1,ee=null,Se=null;const Te=new $t(0,0,ge,ye),Re=new $t(0,0,ge,ye);let et=!1;const Ze=new dm;let Nt=!1,lt=!1;const ht=new vt,Ft=new $,pt=new $t,hn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let en=!1;function Pn(){return X===null?be:1}let q=a;function cn(R,Y){return n.getContext(R,Y)}try{const R={alpha:!0,depth:o,stencil:c,antialias:h,premultipliedAlpha:p,preserveDrawingBuffer:d,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Qp}`),n.addEventListener("webglcontextlost",Me,!1),n.addEventListener("webglcontextrestored",Ye,!1),n.addEventListener("webglcontextcreationerror",it,!1),q===null){const Y="webgl2";if(q=cn(Y,R),q===null)throw cn(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw nt("WebGLRenderer: "+R.message),R}let xt,Yt,we,an,N,T,J,ve,Ee,Ce,Ue,ue,de,Oe,Pe,Ne,De,at,st,St,V,Ae,me;function Fe(){xt=new bR(q),xt.init(),V=new hC(q,xt),Yt=new pR(q,xt,e,V),we=new fC(q,xt),Yt.reversedDepthBuffer&&v&&we.buffers.depth.setReversed(!0),an=new TR(q),N=new Qw,T=new dC(q,xt,we,N,Yt,V,an),J=new SR(j),ve=new CT(q),Ae=new dR(q,ve),Ee=new MR(q,ve,an,Ae),Ce=new RR(q,Ee,ve,Ae,an),at=new AR(q,Yt,T),Pe=new mR(N),Ue=new Zw(j,J,xt,Yt,Ae,Pe),ue=new xC(j,N),de=new $w,Oe=new sC(xt),De=new fR(j,J,we,Ce,M,p),Ne=new uC(j,Ce,Yt),me=new yC(q,an,Yt,we),st=new hR(q,xt,an),St=new ER(q,xt,an),an.programs=Ue.programs,j.capabilities=Yt,j.extensions=xt,j.properties=N,j.renderLists=de,j.shadowMap=Ne,j.state=we,j.info=an}Fe(),A!==xi&&(B=new CR(A,n.width,n.height,o,c));const Le=new _C(j,q);this.xr=Le,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){const R=xt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=xt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return be},this.setPixelRatio=function(R){R!==void 0&&(be=R,this.setSize(ge,ye,!1))},this.getSize=function(R){return R.set(ge,ye)},this.setSize=function(R,Y,se=!0){if(Le.isPresenting){Ke("WebGLRenderer: Can't change size while VR device is presenting.");return}ge=R,ye=Y,n.width=Math.floor(R*be),n.height=Math.floor(Y*be),se===!0&&(n.style.width=R+"px",n.style.height=Y+"px"),B!==null&&B.setSize(n.width,n.height),this.setViewport(0,0,R,Y)},this.getDrawingBufferSize=function(R){return R.set(ge*be,ye*be).floor()},this.setDrawingBufferSize=function(R,Y,se){ge=R,ye=Y,be=se,n.width=Math.floor(R*se),n.height=Math.floor(Y*se),this.setViewport(0,0,R,Y)},this.setEffects=function(R){if(A===xi){nt("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let Y=0;Y<R.length;Y++)if(R[Y].isOutputPass===!0){Ke("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}B.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(oe)},this.getViewport=function(R){return R.copy(Te)},this.setViewport=function(R,Y,se,ie){R.isVector4?Te.set(R.x,R.y,R.z,R.w):Te.set(R,Y,se,ie),we.viewport(oe.copy(Te).multiplyScalar(be).round())},this.getScissor=function(R){return R.copy(Re)},this.setScissor=function(R,Y,se,ie){R.isVector4?Re.set(R.x,R.y,R.z,R.w):Re.set(R,Y,se,ie),we.scissor(pe.copy(Re).multiplyScalar(be).round())},this.getScissorTest=function(){return et},this.setScissorTest=function(R){we.setScissorTest(et=R)},this.setOpaqueSort=function(R){ee=R},this.setTransparentSort=function(R){Se=R},this.getClearColor=function(R){return R.copy(De.getClearColor())},this.setClearColor=function(){De.setClearColor(...arguments)},this.getClearAlpha=function(){return De.getClearAlpha()},this.setClearAlpha=function(){De.setClearAlpha(...arguments)},this.clear=function(R=!0,Y=!0,se=!0){let ie=0;if(R){let ae=!1;if(X!==null){const Be=X.texture.format;ae=S.has(Be)}if(ae){const Be=X.texture.type,Ge=y.has(Be),Ie=De.getClearColor(),We=De.getClearAlpha(),Ve=Ie.r,Je=Ie.g,ft=Ie.b;Ge?(C[0]=Ve,C[1]=Je,C[2]=ft,C[3]=We,q.clearBufferuiv(q.COLOR,0,C)):(L[0]=Ve,L[1]=Je,L[2]=ft,L[3]=We,q.clearBufferiv(q.COLOR,0,L))}else ie|=q.COLOR_BUFFER_BIT}Y&&(ie|=q.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),se&&(ie|=q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ie!==0&&q.clear(ie)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(R){R.setRenderer(this),W=R},this.dispose=function(){n.removeEventListener("webglcontextlost",Me,!1),n.removeEventListener("webglcontextrestored",Ye,!1),n.removeEventListener("webglcontextcreationerror",it,!1),De.dispose(),de.dispose(),Oe.dispose(),N.dispose(),J.dispose(),Ce.dispose(),Ae.dispose(),me.dispose(),Ue.dispose(),Le.dispose(),Le.removeEventListener("sessionstart",No),Le.removeEventListener("sessionend",Lo),Vn.stop()};function Me(R){R.preventDefault(),Wu("WebGLRenderer: Context Lost."),H=!0}function Ye(){Wu("WebGLRenderer: Context Restored."),H=!1;const R=an.autoReset,Y=Ne.enabled,se=Ne.autoUpdate,ie=Ne.needsUpdate,ae=Ne.type;Fe(),an.autoReset=R,Ne.enabled=Y,Ne.autoUpdate=se,Ne.needsUpdate=ie,Ne.type=ae}function it(R){nt("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function un(R){const Y=R.target;Y.removeEventListener("dispose",un),Pt(Y)}function Pt(R){bi(R),N.remove(R)}function bi(R){const Y=N.get(R).programs;Y!==void 0&&(Y.forEach(function(se){Ue.releaseProgram(se)}),R.isShaderMaterial&&Ue.releaseShaderCache(R))}this.renderBufferDirect=function(R,Y,se,ie,ae,Be){Y===null&&(Y=hn);const Ge=ae.isMesh&&ae.matrixWorld.determinant()<0,Ie=Qa(R,Y,se,ie,ae);we.setMaterial(ie,Ge);let We=se.index,Ve=1;if(ie.wireframe===!0){if(We=Ee.getWireframeAttribute(se),We===void 0)return;Ve=2}const Je=se.drawRange,ft=se.attributes.position;let Qe=Je.start*Ve,Lt=(Je.start+Je.count)*Ve;Be!==null&&(Qe=Math.max(Qe,Be.start*Ve),Lt=Math.min(Lt,(Be.start+Be.count)*Ve)),We!==null?(Qe=Math.max(Qe,0),Lt=Math.min(Lt,We.count)):ft!=null&&(Qe=Math.max(Qe,0),Lt=Math.min(Lt,ft.count));const sn=Lt-Qe;if(sn<0||sn===1/0)return;Ae.setup(ae,ie,Ie,se,We);let Qt,zt=st;if(We!==null&&(Qt=ve.get(We),zt=St,zt.setIndex(Qt)),ae.isMesh)ie.wireframe===!0?(we.setLineWidth(ie.wireframeLinewidth*Pn()),zt.setMode(q.LINES)):zt.setMode(q.TRIANGLES);else if(ae.isLine){let Ht=ie.linewidth;Ht===void 0&&(Ht=1),we.setLineWidth(Ht*Pn()),ae.isLineSegments?zt.setMode(q.LINES):ae.isLineLoop?zt.setMode(q.LINE_LOOP):zt.setMode(q.LINE_STRIP)}else ae.isPoints?zt.setMode(q.POINTS):ae.isSprite&&zt.setMode(q.TRIANGLES);if(ae.isBatchedMesh)if(xt.get("WEBGL_multi_draw"))zt.renderMultiDraw(ae._multiDrawStarts,ae._multiDrawCounts,ae._multiDrawCount);else{const Ht=ae._multiDrawStarts,He=ae._multiDrawCounts,kn=ae._multiDrawCount,bt=We?ve.get(We).bytesPerElement:1,Tn=N.get(ie).currentProgram.getUniforms();for(let li=0;li<kn;li++)Tn.setValue(q,"_gl_DrawID",li),zt.render(Ht[li]/bt,He[li])}else if(ae.isInstancedMesh)zt.renderInstances(Qe,sn,ae.count);else if(se.isInstancedBufferGeometry){const Ht=se._maxInstanceCount!==void 0?se._maxInstanceCount:1/0,He=Math.min(se.instanceCount,Ht);zt.renderInstances(Qe,sn,He)}else zt.render(Qe,sn)};function oi(R,Y,se){R.transparent===!0&&R.side===aa&&R.forceSinglePass===!1?(R.side=si,R.needsUpdate=!0,_r(R,Y,se),R.side=Xa,R.needsUpdate=!0,_r(R,Y,se),R.side=aa):_r(R,Y,se)}this.compile=function(R,Y,se=null){se===null&&(se=R),D=Oe.get(se),D.init(Y),E.push(D),se.traverseVisible(function(ae){ae.isLight&&ae.layers.test(Y.layers)&&(D.pushLight(ae),ae.castShadow&&D.pushShadow(ae))}),R!==se&&R.traverseVisible(function(ae){ae.isLight&&ae.layers.test(Y.layers)&&(D.pushLight(ae),ae.castShadow&&D.pushShadow(ae))}),D.setupLights();const ie=new Set;return R.traverse(function(ae){if(!(ae.isMesh||ae.isPoints||ae.isLine||ae.isSprite))return;const Be=ae.material;if(Be)if(Array.isArray(Be))for(let Ge=0;Ge<Be.length;Ge++){const Ie=Be[Ge];oi(Ie,se,ae),ie.add(Ie)}else oi(Be,se,ae),ie.add(Be)}),D=E.pop(),ie},this.compileAsync=function(R,Y,se=null){const ie=this.compile(R,Y,se);return new Promise(ae=>{function Be(){if(ie.forEach(function(Ge){N.get(Ge).currentProgram.isReady()&&ie.delete(Ge)}),ie.size===0){ae(R);return}setTimeout(Be,10)}xt.get("KHR_parallel_shader_compile")!==null?Be():setTimeout(Be,10)})};let Bs=null;function Do(R){Bs&&Bs(R)}function No(){Vn.stop()}function Lo(){Vn.start()}const Vn=new Ey;Vn.setAnimationLoop(Do),typeof self<"u"&&Vn.setContext(self),this.setAnimationLoop=function(R){Bs=R,Le.setAnimationLoop(R),R===null?Vn.stop():Vn.start()},Le.addEventListener("sessionstart",No),Le.addEventListener("sessionend",Lo),this.render=function(R,Y){if(Y!==void 0&&Y.isCamera!==!0){nt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(H===!0)return;W!==null&&W.renderStart(R,Y);const se=Le.enabled===!0&&Le.isPresenting===!0,ie=B!==null&&(X===null||se)&&B.begin(j,X);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),Le.enabled===!0&&Le.isPresenting===!0&&(B===null||B.isCompositing()===!1)&&(Le.cameraAutoUpdate===!0&&Le.updateCamera(Y),Y=Le.getCamera()),R.isScene===!0&&R.onBeforeRender(j,R,Y,X),D=Oe.get(R,E.length),D.init(Y),D.state.textureUnits=T.getTextureUnits(),E.push(D),ht.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),Ze.setFromProjectionMatrix(ht,ra,Y.reversedDepth),lt=this.localClippingEnabled,Nt=Pe.init(this.clippingPlanes,lt),F=de.get(R,I.length),F.init(),I.push(F),Le.enabled===!0&&Le.isPresenting===!0){const Ge=j.xr.getDepthSensingMesh();Ge!==null&&pn(Ge,Y,-1/0,j.sortObjects)}pn(R,Y,0,j.sortObjects),F.finish(),j.sortObjects===!0&&F.sort(ee,Se),en=Le.enabled===!1||Le.isPresenting===!1||Le.hasDepthSensing()===!1,en&&De.addToRenderList(F,R),this.info.render.frame++,Nt===!0&&Pe.beginShadows();const ae=D.state.shadowsArray;if(Ne.render(ae,R,Y),Nt===!0&&Pe.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ie&&B.hasRenderPass())===!1){const Ge=F.opaque,Ie=F.transmissive;if(D.setupLights(),Y.isArrayCamera){const We=Y.cameras;if(Ie.length>0)for(let Ve=0,Je=We.length;Ve<Je;Ve++){const ft=We[Ve];pa(Ge,Ie,R,ft)}en&&De.render(R);for(let Ve=0,Je=We.length;Ve<Je;Ve++){const ft=We[Ve];In(F,R,ft,ft.viewport)}}else Ie.length>0&&pa(Ge,Ie,R,Y),en&&De.render(R),In(F,R,Y)}X!==null&&fe===0&&(T.updateMultisampleRenderTarget(X),T.updateRenderTargetMipmap(X)),ie&&B.end(j),R.isScene===!0&&R.onAfterRender(j,R,Y),Ae.resetDefaultState(),P=-1,z=null,E.pop(),E.length>0?(D=E[E.length-1],T.setTextureUnits(D.state.textureUnits),Nt===!0&&Pe.setGlobalState(j.clippingPlanes,D.state.camera)):D=null,I.pop(),I.length>0?F=I[I.length-1]:F=null,W!==null&&W.renderEnd()};function pn(R,Y,se,ie){if(R.visible===!1)return;if(R.layers.test(Y.layers)){if(R.isGroup)se=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(Y);else if(R.isLightProbeGrid)D.pushLightProbeGrid(R);else if(R.isLight)D.pushLight(R),R.castShadow&&D.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Ze.intersectsSprite(R)){ie&&pt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(ht);const Ge=Ce.update(R),Ie=R.material;Ie.visible&&F.push(R,Ge,Ie,se,pt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Ze.intersectsObject(R))){const Ge=Ce.update(R),Ie=R.material;if(ie&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),pt.copy(R.boundingSphere.center)):(Ge.boundingSphere===null&&Ge.computeBoundingSphere(),pt.copy(Ge.boundingSphere.center)),pt.applyMatrix4(R.matrixWorld).applyMatrix4(ht)),Array.isArray(Ie)){const We=Ge.groups;for(let Ve=0,Je=We.length;Ve<Je;Ve++){const ft=We[Ve],Qe=Ie[ft.materialIndex];Qe&&Qe.visible&&F.push(R,Ge,Qe,se,pt.z,ft)}}else Ie.visible&&F.push(R,Ge,Ie,se,pt.z,null)}}const Be=R.children;for(let Ge=0,Ie=Be.length;Ge<Ie;Ge++)pn(Be[Ge],Y,se,ie)}function In(R,Y,se,ie){const{opaque:ae,transmissive:Be,transparent:Ge}=R;D.setupLightsView(se),Nt===!0&&Pe.setGlobalState(j.clippingPlanes,se),ie&&we.viewport(oe.copy(ie)),ae.length>0&&Ka(ae,Y,se),Be.length>0&&Ka(Be,Y,se),Ge.length>0&&Ka(Ge,Y,se),we.buffers.depth.setTest(!0),we.buffers.depth.setMask(!0),we.buffers.color.setMask(!0),we.setPolygonOffset(!1)}function pa(R,Y,se,ie){if((se.isScene===!0?se.overrideMaterial:null)!==null)return;if(D.state.transmissionRenderTarget[ie.id]===void 0){const Qe=xt.has("EXT_color_buffer_half_float")||xt.has("EXT_color_buffer_float");D.state.transmissionRenderTarget[ie.id]=new la(1,1,{generateMipmaps:!0,type:Qe?Wa:xi,minFilter:Ha,samples:Math.max(4,Yt.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Tt.workingColorSpace})}const Be=D.state.transmissionRenderTarget[ie.id],Ge=ie.viewport||oe;Be.setSize(Ge.z*j.transmissionResolutionScale,Ge.w*j.transmissionResolutionScale);const Ie=j.getRenderTarget(),We=j.getActiveCubeFace(),Ve=j.getActiveMipmapLevel();j.setRenderTarget(Be),j.getClearColor(O),K=j.getClearAlpha(),K<1&&j.setClearColor(16777215,.5),j.clear(),en&&De.render(se);const Je=j.toneMapping;j.toneMapping=oa;const ft=ie.viewport;if(ie.viewport!==void 0&&(ie.viewport=void 0),D.setupLightsView(ie),Nt===!0&&Pe.setGlobalState(j.clippingPlanes,ie),Ka(R,se,ie),T.updateMultisampleRenderTarget(Be),T.updateRenderTargetMipmap(Be),xt.has("WEBGL_multisampled_render_to_texture")===!1){let Qe=!1;for(let Lt=0,sn=Y.length;Lt<sn;Lt++){const Qt=Y[Lt],{object:zt,geometry:Ht,material:He,group:kn}=Qt;if(He.side===aa&&zt.layers.test(ie.layers)){const bt=He.side;He.side=si,He.needsUpdate=!0,jl(zt,se,ie,Ht,He,kn),He.side=bt,He.needsUpdate=!0,Qe=!0}}Qe===!0&&(T.updateMultisampleRenderTarget(Be),T.updateRenderTargetMipmap(Be))}j.setRenderTarget(Ie,We,Ve),j.setClearColor(O,K),ft!==void 0&&(ie.viewport=ft),j.toneMapping=Je}function Ka(R,Y,se){const ie=Y.isScene===!0?Y.overrideMaterial:null;for(let ae=0,Be=R.length;ae<Be;ae++){const Ge=R[ae],{object:Ie,geometry:We,group:Ve}=Ge;let Je=Ge.material;Je.allowOverride===!0&&ie!==null&&(Je=ie),Ie.layers.test(se.layers)&&jl(Ie,Y,se,We,Je,Ve)}}function jl(R,Y,se,ie,ae,Be){R.onBeforeRender(j,Y,se,ie,ae,Be),R.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),ae.onBeforeRender(j,Y,se,ie,R,Be),ae.transparent===!0&&ae.side===aa&&ae.forceSinglePass===!1?(ae.side=si,ae.needsUpdate=!0,j.renderBufferDirect(se,Y,ie,ae,R,Be),ae.side=Xa,ae.needsUpdate=!0,j.renderBufferDirect(se,Y,ie,ae,R,Be),ae.side=aa):j.renderBufferDirect(se,Y,ie,ae,R,Be),R.onAfterRender(j,Y,se,ie,ae,Be)}function _r(R,Y,se){Y.isScene!==!0&&(Y=hn);const ie=N.get(R),ae=D.state.lights,Be=D.state.shadowsArray,Ge=ae.state.version,Ie=Ue.getParameters(R,ae.state,Be,Y,se,D.state.lightProbeGridArray),We=Ue.getProgramCacheKey(Ie);let Ve=ie.programs;ie.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?Y.environment:null,ie.fog=Y.fog;const Je=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;ie.envMap=J.get(R.envMap||ie.environment,Je),ie.envMapRotation=ie.environment!==null&&R.envMap===null?Y.environmentRotation:R.envMapRotation,Ve===void 0&&(R.addEventListener("dispose",un),Ve=new Map,ie.programs=Ve);let ft=Ve.get(We);if(ft!==void 0){if(ie.currentProgram===ft&&ie.lightsStateVersion===Ge)return Za(R,Ie),ft}else Ie.uniforms=Ue.getUniforms(R),W!==null&&R.isNodeMaterial&&W.build(R,se,Ie),R.onBeforeCompile(Ie,j),ft=Ue.acquireProgram(Ie,We),Ve.set(We,ft),ie.uniforms=Ie.uniforms;const Qe=ie.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Qe.clippingPlanes=Pe.uniform),Za(R,Ie),ie.needsLights=Fs(R),ie.lightsStateVersion=Ge,ie.needsLights&&(Qe.ambientLightColor.value=ae.state.ambient,Qe.lightProbe.value=ae.state.probe,Qe.directionalLights.value=ae.state.directional,Qe.directionalLightShadows.value=ae.state.directionalShadow,Qe.spotLights.value=ae.state.spot,Qe.spotLightShadows.value=ae.state.spotShadow,Qe.rectAreaLights.value=ae.state.rectArea,Qe.ltc_1.value=ae.state.rectAreaLTC1,Qe.ltc_2.value=ae.state.rectAreaLTC2,Qe.pointLights.value=ae.state.point,Qe.pointLightShadows.value=ae.state.pointShadow,Qe.hemisphereLights.value=ae.state.hemi,Qe.directionalShadowMatrix.value=ae.state.directionalShadowMatrix,Qe.spotLightMatrix.value=ae.state.spotLightMatrix,Qe.spotLightMap.value=ae.state.spotLightMap,Qe.pointShadowMatrix.value=ae.state.pointShadowMatrix),ie.lightProbeGrid=D.state.lightProbeGridArray.length>0,ie.currentProgram=ft,ie.uniformsList=null,ft}function Uo(R){if(R.uniformsList===null){const Y=R.currentProgram.getUniforms();R.uniformsList=Hu.seqWithValue(Y.seq,R.uniforms)}return R.uniformsList}function Za(R,Y){const se=N.get(R);se.outputColorSpace=Y.outputColorSpace,se.batching=Y.batching,se.batchingColor=Y.batchingColor,se.instancing=Y.instancing,se.instancingColor=Y.instancingColor,se.instancingMorph=Y.instancingMorph,se.skinning=Y.skinning,se.morphTargets=Y.morphTargets,se.morphNormals=Y.morphNormals,se.morphColors=Y.morphColors,se.morphTargetsCount=Y.morphTargetsCount,se.numClippingPlanes=Y.numClippingPlanes,se.numIntersection=Y.numClipIntersection,se.vertexAlphas=Y.vertexAlphas,se.vertexTangents=Y.vertexTangents,se.toneMapping=Y.toneMapping}function Oo(R,Y){if(R.length===0)return null;if(R.length===1)return R[0].texture!==null?R[0]:null;U.setFromMatrixPosition(Y.matrixWorld);for(let se=0,ie=R.length;se<ie;se++){const ae=R[se];if(ae.texture!==null&&ae.boundingBox.containsPoint(U))return ae}return null}function Qa(R,Y,se,ie,ae){Y.isScene!==!0&&(Y=hn),T.resetTextureUnits();const Be=Y.fog,Ge=ie.isMeshStandardMaterial||ie.isMeshLambertMaterial||ie.isMeshPhongMaterial?Y.environment:null,Ie=X===null?j.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:Tt.workingColorSpace,We=ie.isMeshStandardMaterial||ie.isMeshLambertMaterial&&!ie.envMap||ie.isMeshPhongMaterial&&!ie.envMap,Ve=J.get(ie.envMap||Ge,We),Je=ie.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,ft=!!se.attributes.tangent&&(!!ie.normalMap||ie.anisotropy>0),Qe=!!se.morphAttributes.position,Lt=!!se.morphAttributes.normal,sn=!!se.morphAttributes.color;let Qt=oa;ie.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(Qt=j.toneMapping);const zt=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,Ht=zt!==void 0?zt.length:0,He=N.get(ie),kn=D.state.lights;if(Nt===!0&&(lt===!0||R!==z)){const Bt=R===z&&ie.id===P;Pe.setState(ie,R,Bt)}let bt=!1;ie.version===He.__version?(He.needsLights&&He.lightsStateVersion!==kn.state.version||He.outputColorSpace!==Ie||ae.isBatchedMesh&&He.batching===!1||!ae.isBatchedMesh&&He.batching===!0||ae.isBatchedMesh&&He.batchingColor===!0&&ae.colorTexture===null||ae.isBatchedMesh&&He.batchingColor===!1&&ae.colorTexture!==null||ae.isInstancedMesh&&He.instancing===!1||!ae.isInstancedMesh&&He.instancing===!0||ae.isSkinnedMesh&&He.skinning===!1||!ae.isSkinnedMesh&&He.skinning===!0||ae.isInstancedMesh&&He.instancingColor===!0&&ae.instanceColor===null||ae.isInstancedMesh&&He.instancingColor===!1&&ae.instanceColor!==null||ae.isInstancedMesh&&He.instancingMorph===!0&&ae.morphTexture===null||ae.isInstancedMesh&&He.instancingMorph===!1&&ae.morphTexture!==null||He.envMap!==Ve||ie.fog===!0&&He.fog!==Be||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==Pe.numPlanes||He.numIntersection!==Pe.numIntersection)||He.vertexAlphas!==Je||He.vertexTangents!==ft||He.morphTargets!==Qe||He.morphNormals!==Lt||He.morphColors!==sn||He.toneMapping!==Qt||He.morphTargetsCount!==Ht||!!He.lightProbeGrid!=D.state.lightProbeGridArray.length>0)&&(bt=!0):(bt=!0,He.__version=ie.version);let Tn=He.currentProgram;bt===!0&&(Tn=_r(ie,Y,ae),W&&ie.isNodeMaterial&&W.onUpdateProgram(ie,Tn,He));let li=!1,Pi=!1,ci=!1;const Gt=Tn.getUniforms(),rn=He.uniforms;if(we.useProgram(Tn.program)&&(li=!0,Pi=!0,ci=!0),ie.id!==P&&(P=ie.id,Pi=!0),He.needsLights){const Bt=Oo(D.state.lightProbeGridArray,ae);He.lightProbeGrid!==Bt&&(He.lightProbeGrid=Bt,Pi=!0)}if(li||z!==R){we.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Gt.setValue(q,"projectionMatrix",R.projectionMatrix),Gt.setValue(q,"viewMatrix",R.matrixWorldInverse);const ji=Gt.map.cameraPosition;ji!==void 0&&ji.setValue(q,Ft.setFromMatrixPosition(R.matrixWorld)),Yt.logarithmicDepthBuffer&&Gt.setValue(q,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ie.isMeshPhongMaterial||ie.isMeshToonMaterial||ie.isMeshLambertMaterial||ie.isMeshBasicMaterial||ie.isMeshStandardMaterial||ie.isShaderMaterial)&&Gt.setValue(q,"isOrthographic",R.isOrthographicCamera===!0),z!==R&&(z=R,Pi=!0,ci=!0)}if(He.needsLights&&(kn.state.directionalShadowMap.length>0&&Gt.setValue(q,"directionalShadowMap",kn.state.directionalShadowMap,T),kn.state.spotShadowMap.length>0&&Gt.setValue(q,"spotShadowMap",kn.state.spotShadowMap,T),kn.state.pointShadowMap.length>0&&Gt.setValue(q,"pointShadowMap",kn.state.pointShadowMap,T)),ae.isSkinnedMesh){Gt.setOptional(q,ae,"bindMatrix"),Gt.setOptional(q,ae,"bindMatrixInverse");const Bt=ae.skeleton;Bt&&(Bt.boneTexture===null&&Bt.computeBoneTexture(),Gt.setValue(q,"boneTexture",Bt.boneTexture,T))}ae.isBatchedMesh&&(Gt.setOptional(q,ae,"batchingTexture"),Gt.setValue(q,"batchingTexture",ae._matricesTexture,T),Gt.setOptional(q,ae,"batchingIdTexture"),Gt.setValue(q,"batchingIdTexture",ae._indirectTexture,T),Gt.setOptional(q,ae,"batchingColorTexture"),ae._colorsTexture!==null&&Gt.setValue(q,"batchingColorTexture",ae._colorsTexture,T));const Ii=se.morphAttributes;if((Ii.position!==void 0||Ii.normal!==void 0||Ii.color!==void 0)&&at.update(ae,se,Tn),(Pi||He.receiveShadow!==ae.receiveShadow)&&(He.receiveShadow=ae.receiveShadow,Gt.setValue(q,"receiveShadow",ae.receiveShadow)),(ie.isMeshStandardMaterial||ie.isMeshLambertMaterial||ie.isMeshPhongMaterial)&&ie.envMap===null&&Y.environment!==null&&(rn.envMapIntensity.value=Y.environmentIntensity),rn.dfgLUT!==void 0&&(rn.dfgLUT.value=bC()),Pi){if(Gt.setValue(q,"toneMappingExposure",j.toneMappingExposure),He.needsLights&&Ja(rn,ci),Be&&ie.fog===!0&&ue.refreshFogUniforms(rn,Be),ue.refreshMaterialUniforms(rn,ie,be,ye,D.state.transmissionRenderTarget[R.id]),He.needsLights&&He.lightProbeGrid){const Bt=He.lightProbeGrid;rn.probesSH.value=Bt.texture,rn.probesMin.value.copy(Bt.boundingBox.min),rn.probesMax.value.copy(Bt.boundingBox.max),rn.probesResolution.value.copy(Bt.resolution)}Hu.upload(q,Uo(He),rn,T)}if(ie.isShaderMaterial&&ie.uniformsNeedUpdate===!0&&(Hu.upload(q,Uo(He),rn,T),ie.uniformsNeedUpdate=!1),ie.isSpriteMaterial&&Gt.setValue(q,"center",ae.center),Gt.setValue(q,"modelViewMatrix",ae.modelViewMatrix),Gt.setValue(q,"normalMatrix",ae.normalMatrix),Gt.setValue(q,"modelMatrix",ae.matrixWorld),ie.uniformsGroups!==void 0){const Bt=ie.uniformsGroups;for(let ji=0,es=Bt.length;ji<es;ji++){const zs=Bt[ji];me.update(zs,Tn),me.bind(zs,Tn)}}return Tn}function Ja(R,Y){R.ambientLightColor.needsUpdate=Y,R.lightProbe.needsUpdate=Y,R.directionalLights.needsUpdate=Y,R.directionalLightShadows.needsUpdate=Y,R.pointLights.needsUpdate=Y,R.pointLightShadows.needsUpdate=Y,R.spotLights.needsUpdate=Y,R.spotLightShadows.needsUpdate=Y,R.rectAreaLights.needsUpdate=Y,R.hemisphereLights.needsUpdate=Y}function Fs(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return ce},this.getActiveMipmapLevel=function(){return fe},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(R,Y,se){const ie=N.get(R);ie.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,ie.__autoAllocateDepthBuffer===!1&&(ie.__useRenderToTexture=!1),N.get(R.texture).__webglTexture=Y,N.get(R.depthTexture).__webglTexture=ie.__autoAllocateDepthBuffer?void 0:se,ie.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,Y){const se=N.get(R);se.__webglFramebuffer=Y,se.__useDefaultFramebuffer=Y===void 0};const $a=q.createFramebuffer();this.setRenderTarget=function(R,Y=0,se=0){X=R,ce=Y,fe=se;let ie=null,ae=!1,Be=!1;if(R){const Ie=N.get(R);if(Ie.__useDefaultFramebuffer!==void 0){we.bindFramebuffer(q.FRAMEBUFFER,Ie.__webglFramebuffer),oe.copy(R.viewport),pe.copy(R.scissor),Q=R.scissorTest,we.viewport(oe),we.scissor(pe),we.setScissorTest(Q),P=-1;return}else if(Ie.__webglFramebuffer===void 0)T.setupRenderTarget(R);else if(Ie.__hasExternalTextures)T.rebindTextures(R,N.get(R.texture).__webglTexture,N.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Je=R.depthTexture;if(Ie.__boundDepthTexture!==Je){if(Je!==null&&N.has(Je)&&(R.width!==Je.image.width||R.height!==Je.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(R)}}const We=R.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(Be=!0);const Ve=N.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Ve[Y])?ie=Ve[Y][se]:ie=Ve[Y],ae=!0):R.samples>0&&T.useMultisampledRTT(R)===!1?ie=N.get(R).__webglMultisampledFramebuffer:Array.isArray(Ve)?ie=Ve[se]:ie=Ve,oe.copy(R.viewport),pe.copy(R.scissor),Q=R.scissorTest}else oe.copy(Te).multiplyScalar(be).floor(),pe.copy(Re).multiplyScalar(be).floor(),Q=et;if(se!==0&&(ie=$a),we.bindFramebuffer(q.FRAMEBUFFER,ie)&&we.drawBuffers(R,ie),we.viewport(oe),we.scissor(pe),we.setScissorTest(Q),ae){const Ie=N.get(R.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Ie.__webglTexture,se)}else if(Be){const Ie=Y;for(let We=0;We<R.textures.length;We++){const Ve=N.get(R.textures[We]);q.framebufferTextureLayer(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0+We,Ve.__webglTexture,se,Ie)}}else if(R!==null&&se!==0){const Ie=N.get(R.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,Ie.__webglTexture,se)}P=-1},this.readRenderTargetPixels=function(R,Y,se,ie,ae,Be,Ge,Ie=0){if(!(R&&R.isWebGLRenderTarget)){nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let We=N.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ge!==void 0&&(We=We[Ge]),We){we.bindFramebuffer(q.FRAMEBUFFER,We);try{const Ve=R.textures[Ie],Je=Ve.format,ft=Ve.type;if(R.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+Ie),!Yt.textureFormatReadable(Je)){nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Yt.textureTypeReadable(ft)){nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=R.width-ie&&se>=0&&se<=R.height-ae&&q.readPixels(Y,se,ie,ae,V.convert(Je),V.convert(ft),Be)}finally{const Ve=X!==null?N.get(X).__webglFramebuffer:null;we.bindFramebuffer(q.FRAMEBUFFER,Ve)}}},this.readRenderTargetPixelsAsync=async function(R,Y,se,ie,ae,Be,Ge,Ie=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let We=N.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ge!==void 0&&(We=We[Ge]),We)if(Y>=0&&Y<=R.width-ie&&se>=0&&se<=R.height-ae){we.bindFramebuffer(q.FRAMEBUFFER,We);const Ve=R.textures[Ie],Je=Ve.format,ft=Ve.type;if(R.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+Ie),!Yt.textureFormatReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Yt.textureTypeReadable(ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Qe=q.createBuffer();q.bindBuffer(q.PIXEL_PACK_BUFFER,Qe),q.bufferData(q.PIXEL_PACK_BUFFER,Be.byteLength,q.STREAM_READ),q.readPixels(Y,se,ie,ae,V.convert(Je),V.convert(ft),0);const Lt=X!==null?N.get(X).__webglFramebuffer:null;we.bindFramebuffer(q.FRAMEBUFFER,Lt);const sn=q.fenceSync(q.SYNC_GPU_COMMANDS_COMPLETE,0);return q.flush(),await qM(q,sn,4),q.bindBuffer(q.PIXEL_PACK_BUFFER,Qe),q.getBufferSubData(q.PIXEL_PACK_BUFFER,0,Be),q.deleteBuffer(Qe),q.deleteSync(sn),Be}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,Y=null,se=0){const ie=Math.pow(2,-se),ae=Math.floor(R.image.width*ie),Be=Math.floor(R.image.height*ie),Ge=Y!==null?Y.x:0,Ie=Y!==null?Y.y:0;T.setTexture2D(R,0),q.copyTexSubImage2D(q.TEXTURE_2D,se,0,0,Ge,Ie,ae,Be),we.unbindTexture()};const xn=q.createFramebuffer(),Kl=q.createFramebuffer();this.copyTextureToTexture=function(R,Y,se=null,ie=null,ae=0,Be=0){let Ge,Ie,We,Ve,Je,ft,Qe,Lt,sn;const Qt=R.isCompressedTexture?R.mipmaps[Be]:R.image;if(se!==null)Ge=se.max.x-se.min.x,Ie=se.max.y-se.min.y,We=se.isBox3?se.max.z-se.min.z:1,Ve=se.min.x,Je=se.min.y,ft=se.isBox3?se.min.z:0;else{const rn=Math.pow(2,-ae);Ge=Math.floor(Qt.width*rn),Ie=Math.floor(Qt.height*rn),R.isDataArrayTexture?We=Qt.depth:R.isData3DTexture?We=Math.floor(Qt.depth*rn):We=1,Ve=0,Je=0,ft=0}ie!==null?(Qe=ie.x,Lt=ie.y,sn=ie.z):(Qe=0,Lt=0,sn=0);const zt=V.convert(Y.format),Ht=V.convert(Y.type);let He;Y.isData3DTexture?(T.setTexture3D(Y,0),He=q.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(T.setTexture2DArray(Y,0),He=q.TEXTURE_2D_ARRAY):(T.setTexture2D(Y,0),He=q.TEXTURE_2D),we.activeTexture(q.TEXTURE0),we.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,Y.flipY),we.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),we.pixelStorei(q.UNPACK_ALIGNMENT,Y.unpackAlignment);const kn=we.getParameter(q.UNPACK_ROW_LENGTH),bt=we.getParameter(q.UNPACK_IMAGE_HEIGHT),Tn=we.getParameter(q.UNPACK_SKIP_PIXELS),li=we.getParameter(q.UNPACK_SKIP_ROWS),Pi=we.getParameter(q.UNPACK_SKIP_IMAGES);we.pixelStorei(q.UNPACK_ROW_LENGTH,Qt.width),we.pixelStorei(q.UNPACK_IMAGE_HEIGHT,Qt.height),we.pixelStorei(q.UNPACK_SKIP_PIXELS,Ve),we.pixelStorei(q.UNPACK_SKIP_ROWS,Je),we.pixelStorei(q.UNPACK_SKIP_IMAGES,ft);const ci=R.isDataArrayTexture||R.isData3DTexture,Gt=Y.isDataArrayTexture||Y.isData3DTexture;if(R.isDepthTexture){const rn=N.get(R),Ii=N.get(Y),Bt=N.get(rn.__renderTarget),ji=N.get(Ii.__renderTarget);we.bindFramebuffer(q.READ_FRAMEBUFFER,Bt.__webglFramebuffer),we.bindFramebuffer(q.DRAW_FRAMEBUFFER,ji.__webglFramebuffer);for(let es=0;es<We;es++)ci&&(q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,N.get(R).__webglTexture,ae,ft+es),q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,N.get(Y).__webglTexture,Be,sn+es)),q.blitFramebuffer(Ve,Je,Ge,Ie,Qe,Lt,Ge,Ie,q.DEPTH_BUFFER_BIT,q.NEAREST);we.bindFramebuffer(q.READ_FRAMEBUFFER,null),we.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else if(ae!==0||R.isRenderTargetTexture||N.has(R)){const rn=N.get(R),Ii=N.get(Y);we.bindFramebuffer(q.READ_FRAMEBUFFER,xn),we.bindFramebuffer(q.DRAW_FRAMEBUFFER,Kl);for(let Bt=0;Bt<We;Bt++)ci?q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,rn.__webglTexture,ae,ft+Bt):q.framebufferTexture2D(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,rn.__webglTexture,ae),Gt?q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,Ii.__webglTexture,Be,sn+Bt):q.framebufferTexture2D(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,Ii.__webglTexture,Be),ae!==0?q.blitFramebuffer(Ve,Je,Ge,Ie,Qe,Lt,Ge,Ie,q.COLOR_BUFFER_BIT,q.NEAREST):Gt?q.copyTexSubImage3D(He,Be,Qe,Lt,sn+Bt,Ve,Je,Ge,Ie):q.copyTexSubImage2D(He,Be,Qe,Lt,Ve,Je,Ge,Ie);we.bindFramebuffer(q.READ_FRAMEBUFFER,null),we.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else Gt?R.isDataTexture||R.isData3DTexture?q.texSubImage3D(He,Be,Qe,Lt,sn,Ge,Ie,We,zt,Ht,Qt.data):Y.isCompressedArrayTexture?q.compressedTexSubImage3D(He,Be,Qe,Lt,sn,Ge,Ie,We,zt,Qt.data):q.texSubImage3D(He,Be,Qe,Lt,sn,Ge,Ie,We,zt,Ht,Qt):R.isDataTexture?q.texSubImage2D(q.TEXTURE_2D,Be,Qe,Lt,Ge,Ie,zt,Ht,Qt.data):R.isCompressedTexture?q.compressedTexSubImage2D(q.TEXTURE_2D,Be,Qe,Lt,Qt.width,Qt.height,zt,Qt.data):q.texSubImage2D(q.TEXTURE_2D,Be,Qe,Lt,Ge,Ie,zt,Ht,Qt);we.pixelStorei(q.UNPACK_ROW_LENGTH,kn),we.pixelStorei(q.UNPACK_IMAGE_HEIGHT,bt),we.pixelStorei(q.UNPACK_SKIP_PIXELS,Tn),we.pixelStorei(q.UNPACK_SKIP_ROWS,li),we.pixelStorei(q.UNPACK_SKIP_IMAGES,Pi),Be===0&&Y.generateMipmaps&&q.generateMipmap(He),we.unbindTexture()},this.initRenderTarget=function(R){N.get(R).__webglFramebuffer===void 0&&T.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?T.setTextureCube(R,0):R.isData3DTexture?T.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?T.setTexture2DArray(R,0):T.setTexture2D(R,0),we.unbindTexture()},this.resetState=function(){ce=0,fe=0,X=null,we.reset(),Ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ra}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Tt._getDrawingBufferColorSpace(e),n.unpackColorSpace=Tt._getUnpackColorSpace()}}class EC{static createButton(e,n={}){const a=document.createElement("button");function o(){if(n.domOverlay===void 0){const v=document.createElement("div");v.style.display="none",document.body.appendChild(v);const x=document.createElementNS("http://www.w3.org/2000/svg","svg");x.setAttribute("width",38),x.setAttribute("height",38),x.style.position="absolute",x.style.right="20px",x.style.top="20px",x.addEventListener("click",function(){d.end()}),v.appendChild(x);const M=document.createElementNS("http://www.w3.org/2000/svg","path");M.setAttribute("d","M 12,12 L 28,28 M 28,12 12,28"),M.setAttribute("stroke","#fff"),M.setAttribute("stroke-width",2),x.appendChild(M),n.optionalFeatures===void 0&&(n.optionalFeatures=[]),n.optionalFeatures.push("dom-overlay"),n.domOverlay={root:v}}let d=null;async function g(v){v.addEventListener("end",_),e.xr.setReferenceSpaceType("local"),await e.xr.setSession(v),a.textContent="STOP AR",n.domOverlay.root.style.display="",d=v}function _(){d.removeEventListener("end",_),a.textContent="START AR",n.domOverlay.root.style.display="none",d=null}a.style.display="",a.style.cursor="pointer",a.style.left="calc(50% - 50px)",a.style.width="100px",a.textContent="START AR",a.onmouseenter=function(){a.style.opacity="1.0"},a.onmouseleave=function(){a.style.opacity="0.5"},a.onclick=function(){d===null?navigator.xr.requestSession("immersive-ar",n).then(g):(d.end(),navigator.xr.offerSession!==void 0&&navigator.xr.offerSession("immersive-ar",n).then(g).catch(v=>{console.warn(v)}))},navigator.xr.offerSession!==void 0&&navigator.xr.offerSession("immersive-ar",n).then(g).catch(v=>{console.warn(v)})}function c(){a.style.display="",a.style.cursor="auto",a.style.left="calc(50% - 75px)",a.style.width="150px",a.onmouseenter=null,a.onmouseleave=null,a.onclick=null}function u(){c(),a.textContent="AR NOT SUPPORTED"}function h(d){c(),console.warn("Exception when trying to call xr.isSessionSupported",d),a.textContent="AR NOT ALLOWED"}function p(d){d.style.position="absolute",d.style.bottom="20px",d.style.padding="12px 6px",d.style.border="1px solid #fff",d.style.borderRadius="4px",d.style.background="rgba(0,0,0,0.1)",d.style.color="#fff",d.style.font="normal 13px sans-serif",d.style.textAlign="center",d.style.opacity="0.5",d.style.outline="none",d.style.zIndex="999"}if("xr"in navigator)return a.id="ARButton",a.style.display="none",p(a),navigator.xr.isSessionSupported("immersive-ar").then(function(d){d?o():u()}).catch(h),a;{const d=document.createElement("a");return window.isSecureContext===!1?(d.href=document.location.href.replace(/^http:/,"https:"),d.innerHTML="WEBXR NEEDS HTTPS"):(d.href="https://immersiveweb.dev/",d.innerHTML="WEBXR NOT AVAILABLE"),d.style.left="calc(50% - 90px)",d.style.width="180px",d.style.textDecoration="none",p(d),d}}}function Nx(r,e){if(e===OM)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===zp||e===ry){let n=r.getIndex();if(n===null){const u=[],h=r.getAttribute("position");if(h!==void 0){for(let p=0;p<h.count;p++)u.push(p);r.setIndex(u),n=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const a=n.count-2,o=[];if(e===zp)for(let u=1;u<=a;u++)o.push(n.getX(0)),o.push(n.getX(u)),o.push(n.getX(u+1));else for(let u=0;u<a;u++)u%2===0?(o.push(n.getX(u)),o.push(n.getX(u+1)),o.push(n.getX(u+2))):(o.push(n.getX(u+2)),o.push(n.getX(u+1)),o.push(n.getX(u)));o.length/3!==a&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const c=r.clone();return c.setIndex(o),c.clearGroups(),c}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}function TC(r){const e=new Map,n=new Map,a=r.clone();return Ly(r,a,function(o,c){e.set(c,o),n.set(o,c)}),a.traverse(function(o){if(!o.isSkinnedMesh)return;const c=o,u=e.get(o),h=u.skeleton.bones;c.skeleton=u.skeleton.clone(),c.bindMatrix.copy(u.bindMatrix),c.skeleton.bones=h.map(function(p){return n.get(p)}),c.bind(c.skeleton,c.bindMatrix)}),a}function Ly(r,e,n){n(r,e);for(let a=0;a<r.children.length;a++)Ly(r.children[a],e.children[a],n)}class AC extends wo{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(n){return new NC(n)}),this.register(function(n){return new LC(n)}),this.register(function(n){return new GC(n)}),this.register(function(n){return new VC(n)}),this.register(function(n){return new kC(n)}),this.register(function(n){return new OC(n)}),this.register(function(n){return new PC(n)}),this.register(function(n){return new IC(n)}),this.register(function(n){return new BC(n)}),this.register(function(n){return new DC(n)}),this.register(function(n){return new FC(n)}),this.register(function(n){return new UC(n)}),this.register(function(n){return new HC(n)}),this.register(function(n){return new zC(n)}),this.register(function(n){return new wC(n)}),this.register(function(n){return new Lx(n,yt.EXT_MESHOPT_COMPRESSION)}),this.register(function(n){return new Lx(n,yt.KHR_MESHOPT_COMPRESSION)}),this.register(function(n){return new XC(n)})}load(e,n,a,o){const c=this;let u;if(this.resourcePath!=="")u=this.resourcePath;else if(this.path!==""){const d=Gl.extractUrlBase(e);u=Gl.resolveURL(d,this.path)}else u=Gl.extractUrlBase(e);this.manager.itemStart(e);const h=function(d){o?o(d):console.error(d),c.manager.itemError(e),c.manager.itemEnd(e)},p=new Sy(this.manager);p.setPath(this.path),p.setResponseType("arraybuffer"),p.setRequestHeader(this.requestHeader),p.setWithCredentials(this.withCredentials),p.load(e,function(d){try{c.parse(d,u,function(g){n(g),c.manager.itemEnd(e)},h)}catch(g){h(g)}},a,h)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,n,a,o){let c;const u={},h={},p=new TextDecoder;if(typeof e=="string")c=JSON.parse(e);else if(e instanceof ArrayBuffer)if(p.decode(new Uint8Array(e,0,4))===Uy){try{u[yt.KHR_BINARY_GLTF]=new WC(e)}catch(_){o&&o(_);return}c=JSON.parse(u[yt.KHR_BINARY_GLTF].content)}else c=JSON.parse(p.decode(e));else c=e;if(c.asset===void 0||c.asset.version[0]<2){o&&o(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const d=new a2(c,{path:n||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});d.fileLoader.setRequestHeader(this.requestHeader);for(let g=0;g<this.pluginCallbacks.length;g++){const _=this.pluginCallbacks[g](d);_.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),h[_.name]=_,u[_.name]=!0}if(c.extensionsUsed)for(let g=0;g<c.extensionsUsed.length;++g){const _=c.extensionsUsed[g],v=c.extensionsRequired||[];switch(_){case yt.KHR_MATERIALS_UNLIT:u[_]=new CC;break;case yt.KHR_DRACO_MESH_COMPRESSION:u[_]=new qC(c,this.dracoLoader);break;case yt.KHR_TEXTURE_TRANSFORM:u[_]=new YC;break;case yt.KHR_MESH_QUANTIZATION:u[_]=new jC;break;default:v.indexOf(_)>=0&&h[_]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+_+'".')}}d.setExtensions(u),d.setPlugins(h),d.parse(a,o)}parseAsync(e,n){const a=this;return new Promise(function(o,c){a.parse(e,n,o,c)})}}function RC(){let r={};return{get:function(e){return r[e]},add:function(e,n){r[e]=n},remove:function(e){delete r[e]},removeAll:function(){r={}}}}function vn(r,e,n){const a=r.json.materials[e];return a.extensions&&a.extensions[n]?a.extensions[n]:null}const yt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class wC{constructor(e){this.parser=e,this.name=yt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,n=this.parser.json.nodes||[];for(let a=0,o=n.length;a<o;a++){const c=n[a];c.extensions&&c.extensions[this.name]&&c.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,c.extensions[this.name].light)}}_loadLight(e){const n=this.parser,a="light:"+e;let o=n.cache.get(a);if(o)return o;const c=n.json,p=((c.extensions&&c.extensions[this.name]||{}).lights||[])[e];let d;const g=new ot(16777215);p.color!==void 0&&g.setRGB(p.color[0],p.color[1],p.color[2],yi);const _=p.range!==void 0?p.range:0;switch(p.type){case"directional":d=new My(g),d.target.position.set(0,0,-1),d.add(d.target);break;case"point":d=new pT(g),d.distance=_;break;case"spot":d=new dT(g),d.distance=_,p.spot=p.spot||{},p.spot.innerConeAngle=p.spot.innerConeAngle!==void 0?p.spot.innerConeAngle:0,p.spot.outerConeAngle=p.spot.outerConeAngle!==void 0?p.spot.outerConeAngle:Math.PI/4,d.angle=p.spot.outerConeAngle,d.penumbra=1-p.spot.innerConeAngle/p.spot.outerConeAngle,d.target.position.set(0,0,-1),d.add(d.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+p.type)}return d.position.set(0,0,0),na(d,p),p.intensity!==void 0&&(d.intensity=p.intensity),d.name=n.createUniqueName(p.name||"light_"+e),o=Promise.resolve(d),n.cache.add(a,o),o}getDependency(e,n){if(e==="light")return this._loadLight(n)}createNodeAttachment(e){const n=this,a=this.parser,c=a.json.nodes[e],h=(c.extensions&&c.extensions[this.name]||{}).light;return h===void 0?null:this._loadLight(h).then(function(p){return a._getNodeRef(n.cache,h,p)})}}class CC{constructor(){this.name=yt.KHR_MATERIALS_UNLIT}getMaterialType(){return Us}extendParams(e,n,a){const o=[];e.color=new ot(1,1,1),e.opacity=1;const c=n.pbrMetallicRoughness;if(c){if(Array.isArray(c.baseColorFactor)){const u=c.baseColorFactor;e.color.setRGB(u[0],u[1],u[2],yi),e.opacity=u[3]}c.baseColorTexture!==void 0&&o.push(a.assignTexture(e,"map",c.baseColorTexture,Gn))}return Promise.all(o)}}class DC{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,n){const a=vn(this.parser,e,this.name);return a===null||a.emissiveStrength!==void 0&&(n.emissiveIntensity=a.emissiveStrength),Promise.resolve()}}class NC{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return vn(this.parser,e,this.name)!==null?ha:null}extendMaterialParams(e,n){const a=vn(this.parser,e,this.name);if(a===null)return Promise.resolve();const o=[];if(a.clearcoatFactor!==void 0&&(n.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&o.push(this.parser.assignTexture(n,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(n.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&o.push(this.parser.assignTexture(n,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(o.push(this.parser.assignTexture(n,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const c=a.clearcoatNormalTexture.scale;n.clearcoatNormalScale=new Dt(c,c)}return Promise.all(o)}}class LC{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_DISPERSION}getMaterialType(e){return vn(this.parser,e,this.name)!==null?ha:null}extendMaterialParams(e,n){const a=vn(this.parser,e,this.name);return a===null||(n.dispersion=a.dispersion!==void 0?a.dispersion:0),Promise.resolve()}}class UC{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return vn(this.parser,e,this.name)!==null?ha:null}extendMaterialParams(e,n){const a=vn(this.parser,e,this.name);if(a===null)return Promise.resolve();const o=[];return a.iridescenceFactor!==void 0&&(n.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&o.push(this.parser.assignTexture(n,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(n.iridescenceIOR=a.iridescenceIor),n.iridescenceThicknessRange===void 0&&(n.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&o.push(this.parser.assignTexture(n,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(o)}}class OC{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_SHEEN}getMaterialType(e){return vn(this.parser,e,this.name)!==null?ha:null}extendMaterialParams(e,n){const a=vn(this.parser,e,this.name);if(a===null)return Promise.resolve();const o=[];if(n.sheenColor=new ot(0,0,0),n.sheenRoughness=0,n.sheen=1,a.sheenColorFactor!==void 0){const c=a.sheenColorFactor;n.sheenColor.setRGB(c[0],c[1],c[2],yi)}return a.sheenRoughnessFactor!==void 0&&(n.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&o.push(this.parser.assignTexture(n,"sheenColorMap",a.sheenColorTexture,Gn)),a.sheenRoughnessTexture!==void 0&&o.push(this.parser.assignTexture(n,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(o)}}class PC{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return vn(this.parser,e,this.name)!==null?ha:null}extendMaterialParams(e,n){const a=vn(this.parser,e,this.name);if(a===null)return Promise.resolve();const o=[];return a.transmissionFactor!==void 0&&(n.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&o.push(this.parser.assignTexture(n,"transmissionMap",a.transmissionTexture)),Promise.all(o)}}class IC{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_VOLUME}getMaterialType(e){return vn(this.parser,e,this.name)!==null?ha:null}extendMaterialParams(e,n){const a=vn(this.parser,e,this.name);if(a===null)return Promise.resolve();const o=[];n.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&o.push(this.parser.assignTexture(n,"thicknessMap",a.thicknessTexture)),n.attenuationDistance=a.attenuationDistance||1/0;const c=a.attenuationColor||[1,1,1];return n.attenuationColor=new ot().setRGB(c[0],c[1],c[2],yi),Promise.all(o)}}class BC{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_IOR}getMaterialType(e){return vn(this.parser,e,this.name)!==null?ha:null}extendMaterialParams(e,n){const a=vn(this.parser,e,this.name);return a===null||(n.ior=a.ior!==void 0?a.ior:1.5,n.ior===0&&(n.ior=1e3)),Promise.resolve()}}class FC{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_SPECULAR}getMaterialType(e){return vn(this.parser,e,this.name)!==null?ha:null}extendMaterialParams(e,n){const a=vn(this.parser,e,this.name);if(a===null)return Promise.resolve();const o=[];n.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&o.push(this.parser.assignTexture(n,"specularIntensityMap",a.specularTexture));const c=a.specularColorFactor||[1,1,1];return n.specularColor=new ot().setRGB(c[0],c[1],c[2],yi),a.specularColorTexture!==void 0&&o.push(this.parser.assignTexture(n,"specularColorMap",a.specularColorTexture,Gn)),Promise.all(o)}}class zC{constructor(e){this.parser=e,this.name=yt.EXT_MATERIALS_BUMP}getMaterialType(e){return vn(this.parser,e,this.name)!==null?ha:null}extendMaterialParams(e,n){const a=vn(this.parser,e,this.name);if(a===null)return Promise.resolve();const o=[];return n.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&o.push(this.parser.assignTexture(n,"bumpMap",a.bumpTexture)),Promise.all(o)}}class HC{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return vn(this.parser,e,this.name)!==null?ha:null}extendMaterialParams(e,n){const a=vn(this.parser,e,this.name);if(a===null)return Promise.resolve();const o=[];return a.anisotropyStrength!==void 0&&(n.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(n.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&o.push(this.parser.assignTexture(n,"anisotropyMap",a.anisotropyTexture)),Promise.all(o)}}class GC{constructor(e){this.parser=e,this.name=yt.KHR_TEXTURE_BASISU}loadTexture(e){const n=this.parser,a=n.json,o=a.textures[e];if(!o.extensions||!o.extensions[this.name])return null;const c=o.extensions[this.name],u=n.options.ktx2Loader;if(!u){if(a.extensionsRequired&&a.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return n.loadTextureImage(e,c.source,u)}}class VC{constructor(e){this.parser=e,this.name=yt.EXT_TEXTURE_WEBP}loadTexture(e){const n=this.name,a=this.parser,o=a.json,c=o.textures[e];if(!c.extensions||!c.extensions[n])return null;const u=c.extensions[n],h=o.images[u.source];let p=a.textureLoader;if(h.uri){const d=a.options.manager.getHandler(h.uri);d!==null&&(p=d)}return a.loadTextureImage(e,u.source,p)}}class kC{constructor(e){this.parser=e,this.name=yt.EXT_TEXTURE_AVIF}loadTexture(e){const n=this.name,a=this.parser,o=a.json,c=o.textures[e];if(!c.extensions||!c.extensions[n])return null;const u=c.extensions[n],h=o.images[u.source];let p=a.textureLoader;if(h.uri){const d=a.options.manager.getHandler(h.uri);d!==null&&(p=d)}return a.loadTextureImage(e,u.source,p)}}class Lx{constructor(e,n){this.name=n,this.parser=e}loadBufferView(e){const n=this.parser.json,a=n.bufferViews[e];if(a.extensions&&a.extensions[this.name]){const o=a.extensions[this.name],c=this.parser.getDependency("buffer",o.buffer),u=this.parser.options.meshoptDecoder;if(!u||!u.supported){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return c.then(function(h){const p=o.byteOffset||0,d=o.byteLength||0,g=o.count,_=o.byteStride,v=new Uint8Array(h,p,d);return u.decodeGltfBufferAsync?u.decodeGltfBufferAsync(g,_,v,o.mode,o.filter).then(function(x){return x.buffer}):u.ready.then(function(){const x=new ArrayBuffer(g*_);return u.decodeGltfBuffer(new Uint8Array(x),g,_,v,o.mode,o.filter),x})})}else return null}}class XC{constructor(e){this.name=yt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const n=this.parser.json,a=n.nodes[e];if(!a.extensions||!a.extensions[this.name]||a.mesh===void 0)return null;const o=n.meshes[a.mesh];for(const d of o.primitives)if(d.mode!==Li.TRIANGLES&&d.mode!==Li.TRIANGLE_STRIP&&d.mode!==Li.TRIANGLE_FAN&&d.mode!==void 0)return null;const u=a.extensions[this.name].attributes,h=[],p={};for(const d in u)h.push(this.parser.getDependency("accessor",u[d]).then(g=>(p[d]=g,p[d])));return h.length<1?null:(h.push(this.parser.createNodeMesh(e)),Promise.all(h).then(d=>{const g=d.pop(),_=g.isGroup?g.children:[g],v=d[0].count,x=[];for(const M of _){const A=new vt,S=new $,y=new Ya,C=new $(1,1,1),L=new PE(M.geometry,M.material,v);for(let U=0;U<v;U++)p.TRANSLATION&&S.fromBufferAttribute(p.TRANSLATION,U),p.ROTATION&&y.fromBufferAttribute(p.ROTATION,U),p.SCALE&&C.fromBufferAttribute(p.SCALE,U),L.setMatrixAt(U,A.compose(S,y,C));for(const U in p)if(U==="_COLOR_0"){const F=p[U];L.instanceColor=new kp(F.array,F.itemSize,F.normalized)}else U!=="TRANSLATION"&&U!=="ROTATION"&&U!=="SCALE"&&M.geometry.setAttribute(U,p[U]);ln.prototype.copy.call(L,M),this.parser.assignFinalMaterial(L),x.push(L)}return g.isGroup?(g.clear(),g.add(...x),g):x[0]}))}}const Uy="glTF",Ol=12,Ux={JSON:1313821514,BIN:5130562};class WC{constructor(e){this.name=yt.KHR_BINARY_GLTF,this.content=null,this.body=null;const n=new DataView(e,0,Ol),a=new TextDecoder;if(this.header={magic:a.decode(new Uint8Array(e.slice(0,4))),version:n.getUint32(4,!0),length:n.getUint32(8,!0)},this.header.magic!==Uy)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const o=this.header.length-Ol,c=new DataView(e,Ol);let u=0;for(;u<o;){const h=c.getUint32(u,!0);u+=4;const p=c.getUint32(u,!0);if(u+=4,p===Ux.JSON){const d=new Uint8Array(e,Ol+u,h);this.content=a.decode(d)}else if(p===Ux.BIN){const d=Ol+u;this.body=e.slice(d,d+h)}u+=h}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class qC{constructor(e,n){if(!n)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=yt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=n,this.dracoLoader.preload()}decodePrimitive(e,n){const a=this.json,o=this.dracoLoader,c=e.extensions[this.name].bufferView,u=e.extensions[this.name].attributes,h={},p={},d={};for(const g in u){const _=Yp[g]||g.toLowerCase();h[_]=u[g]}for(const g in e.attributes){const _=Yp[g]||g.toLowerCase();if(u[g]!==void 0){const v=a.accessors[e.attributes[g]],x=po[v.componentType];d[_]=x.name,p[_]=v.normalized===!0}}return n.getDependency("bufferView",c).then(function(g){return new Promise(function(_,v){o.decodeDracoFile(g,function(x){for(const M in x.attributes){const A=x.attributes[M],S=p[M];S!==void 0&&(A.normalized=S)}_(x)},h,d,yi,v)})})}}class YC{constructor(){this.name=yt.KHR_TEXTURE_TRANSFORM}extendTexture(e,n){return(n.texCoord===void 0||n.texCoord===e.channel)&&n.offset===void 0&&n.rotation===void 0&&n.scale===void 0||(e=e.clone(),n.texCoord!==void 0&&(e.channel=n.texCoord),n.offset!==void 0&&e.offset.fromArray(n.offset),n.rotation!==void 0&&(e.rotation=n.rotation),n.scale!==void 0&&e.repeat.fromArray(n.scale),e.needsUpdate=!0),e}}class jC{constructor(){this.name=yt.KHR_MESH_QUANTIZATION}}class Oy extends To{constructor(e,n,a,o){super(e,n,a,o)}copySampleValue_(e){const n=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o*3+o;for(let u=0;u!==o;u++)n[u]=a[c+u];return n}interpolate_(e,n,a,o){const c=this.resultBuffer,u=this.sampleValues,h=this.valueSize,p=h*2,d=h*3,g=o-n,_=(a-n)/g,v=_*_,x=v*_,M=e*d,A=M-d,S=-2*x+3*v,y=x-v,C=1-S,L=y-v+_;for(let U=0;U!==h;U++){const F=u[A+U+h],D=u[A+U+p]*g,I=u[M+U+h],E=u[M+U]*g;c[U]=C*F+L*D+S*I+y*E}return c}}const KC=new Ya;class ZC extends Oy{interpolate_(e,n,a,o){const c=super.interpolate_(e,n,a,o);return KC.fromArray(c).normalize().toArray(c),c}}const Li={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},po={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Ox={9728:wn,9729:Cn,9984:$x,9985:Pu,9986:Bl,9987:Ha},Px={33071:sa,33648:Gu,10497:_o},Zh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Yp={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ds={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},QC={CUBICSPLINE:void 0,LINEAR:Wl,STEP:Xl},Qh={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function JC(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new $u({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Xa})),r.DefaultMaterial}function rr(r,e,n){for(const a in n.extensions)r[a]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[a]=n.extensions[a])}function na(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function $C(r,e,n){let a=!1,o=!1,c=!1;for(let d=0,g=e.length;d<g;d++){const _=e[d];if(_.POSITION!==void 0&&(a=!0),_.NORMAL!==void 0&&(o=!0),_.COLOR_0!==void 0&&(c=!0),a&&o&&c)break}if(!a&&!o&&!c)return Promise.resolve(r);const u=[],h=[],p=[];for(let d=0,g=e.length;d<g;d++){const _=e[d];if(a){const v=_.POSITION!==void 0?n.getDependency("accessor",_.POSITION):r.attributes.position;u.push(v)}if(o){const v=_.NORMAL!==void 0?n.getDependency("accessor",_.NORMAL):r.attributes.normal;h.push(v)}if(c){const v=_.COLOR_0!==void 0?n.getDependency("accessor",_.COLOR_0):r.attributes.color;p.push(v)}}return Promise.all([Promise.all(u),Promise.all(h),Promise.all(p)]).then(function(d){const g=d[0],_=d[1],v=d[2];return a&&(r.morphAttributes.position=g),o&&(r.morphAttributes.normal=_),c&&(r.morphAttributes.color=v),r.morphTargetsRelative=!0,r})}function e2(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let n=0,a=e.weights.length;n<a;n++)r.morphTargetInfluences[n]=e.weights[n];if(e.extras&&Array.isArray(e.extras.targetNames)){const n=e.extras.targetNames;if(r.morphTargetInfluences.length===n.length){r.morphTargetDictionary={};for(let a=0,o=n.length;a<o;a++)r.morphTargetDictionary[n[a]]=a}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function t2(r){let e;const n=r.extensions&&r.extensions[yt.KHR_DRACO_MESH_COMPRESSION];if(n?e="draco:"+n.bufferView+":"+n.indices+":"+Jh(n.attributes):e=r.indices+":"+Jh(r.attributes)+":"+r.mode,r.targets!==void 0)for(let a=0,o=r.targets.length;a<o;a++)e+=":"+Jh(r.targets[a]);return e}function Jh(r){let e="";const n=Object.keys(r).sort();for(let a=0,o=n.length;a<o;a++)e+=n[a]+":"+r[n[a]]+";";return e}function jp(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function n2(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":r.search(/\.ktx2($|\?)/i)>0||r.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const i2=new vt;class a2{constructor(e={},n={}){this.json=e,this.extensions={},this.plugins={},this.options=n,this.cache=new RC,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let a=!1,o=-1,c=!1,u=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){const h=navigator.userAgent;a=/^((?!chrome|android).)*safari/i.test(h)===!0;const p=h.match(/Version\/(\d+)/);o=a&&p?parseInt(p[1],10):-1,c=h.indexOf("Firefox")>-1,u=c?h.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||a&&o<17||c&&u<98?this.textureLoader=new cT(this.options.manager):this.textureLoader=new gT(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Sy(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,n){const a=this,o=this.json,c=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(u){return u._markDefs&&u._markDefs()}),Promise.all(this._invokeAll(function(u){return u.beforeRoot&&u.beforeRoot()})).then(function(){return Promise.all([a.getDependencies("scene"),a.getDependencies("animation"),a.getDependencies("camera")])}).then(function(u){const h={scene:u[0][o.scene||0],scenes:u[0],animations:u[1],cameras:u[2],asset:o.asset,parser:a,userData:{}};return rr(c,h,o),na(h,o),Promise.all(a._invokeAll(function(p){return p.afterRoot&&p.afterRoot(h)})).then(function(){for(const p of h.scenes)p.updateMatrixWorld();e(h)})}).catch(n)}_markDefs(){const e=this.json.nodes||[],n=this.json.skins||[],a=this.json.meshes||[];for(let o=0,c=n.length;o<c;o++){const u=n[o].joints;for(let h=0,p=u.length;h<p;h++)e[u[h]].isBone=!0}for(let o=0,c=e.length;o<c;o++){const u=e[o];u.mesh!==void 0&&(this._addNodeRef(this.meshCache,u.mesh),u.skin!==void 0&&(a[u.mesh].isSkinnedMesh=!0)),u.camera!==void 0&&this._addNodeRef(this.cameraCache,u.camera)}}_addNodeRef(e,n){n!==void 0&&(e.refs[n]===void 0&&(e.refs[n]=e.uses[n]=0),e.refs[n]++)}_getNodeRef(e,n,a){if(e.refs[n]<=1)return a;const o=a.clone(),c=(u,h)=>{const p=this.associations.get(u);p!=null&&this.associations.set(h,p);for(const[d,g]of u.children.entries())c(g,h.children[d])};return c(a,o),o.name+="_instance_"+e.uses[n]++,o}_invokeOne(e){const n=Object.values(this.plugins);n.push(this);for(let a=0;a<n.length;a++){const o=e(n[a]);if(o)return o}return null}_invokeAll(e){const n=Object.values(this.plugins);n.unshift(this);const a=[];for(let o=0;o<n.length;o++){const c=e(n[o]);c&&a.push(c)}return a}getDependency(e,n){const a=e+":"+n;let o=this.cache.get(a);if(!o){switch(e){case"scene":o=this.loadScene(n);break;case"node":o=this._invokeOne(function(c){return c.loadNode&&c.loadNode(n)});break;case"mesh":o=this._invokeOne(function(c){return c.loadMesh&&c.loadMesh(n)});break;case"accessor":o=this.loadAccessor(n);break;case"bufferView":o=this._invokeOne(function(c){return c.loadBufferView&&c.loadBufferView(n)});break;case"buffer":o=this.loadBuffer(n);break;case"material":o=this._invokeOne(function(c){return c.loadMaterial&&c.loadMaterial(n)});break;case"texture":o=this._invokeOne(function(c){return c.loadTexture&&c.loadTexture(n)});break;case"skin":o=this.loadSkin(n);break;case"animation":o=this._invokeOne(function(c){return c.loadAnimation&&c.loadAnimation(n)});break;case"camera":o=this.loadCamera(n);break;default:if(o=this._invokeOne(function(c){return c!=this&&c.getDependency&&c.getDependency(e,n)}),!o)throw new Error("Unknown type: "+e);break}this.cache.add(a,o)}return o}getDependencies(e){let n=this.cache.get(e);if(!n){const a=this,o=this.json[e+(e==="mesh"?"es":"s")]||[];n=Promise.all(o.map(function(c,u){return a.getDependency(e,u)})),this.cache.add(e,n)}return n}loadBuffer(e){const n=this.json.buffers[e],a=this.fileLoader;if(n.type&&n.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+n.type+" buffer type is not supported.");if(n.uri===void 0&&e===0)return Promise.resolve(this.extensions[yt.KHR_BINARY_GLTF].body);const o=this.options;return new Promise(function(c,u){a.load(Gl.resolveURL(n.uri,o.path),c,void 0,function(){u(new Error('THREE.GLTFLoader: Failed to load buffer "'+n.uri+'".'))})})}loadBufferView(e){const n=this.json.bufferViews[e];return this.getDependency("buffer",n.buffer).then(function(a){const o=n.byteLength||0,c=n.byteOffset||0;return a.slice(c,c+o)})}loadAccessor(e){const n=this,a=this.json,o=this.json.accessors[e];if(o.bufferView===void 0&&o.sparse===void 0){const u=Zh[o.type],h=po[o.componentType],p=o.normalized===!0,d=new h(o.count*u);return Promise.resolve(new Qn(d,u,p))}const c=[];return o.bufferView!==void 0?c.push(this.getDependency("bufferView",o.bufferView)):c.push(null),o.sparse!==void 0&&(c.push(this.getDependency("bufferView",o.sparse.indices.bufferView)),c.push(this.getDependency("bufferView",o.sparse.values.bufferView))),Promise.all(c).then(function(u){const h=u[0],p=Zh[o.type],d=po[o.componentType],g=d.BYTES_PER_ELEMENT,_=g*p,v=o.byteOffset||0,x=o.bufferView!==void 0?a.bufferViews[o.bufferView].byteStride:void 0,M=o.normalized===!0;let A,S;if(x&&x!==_){const y=Math.floor(v/x),C="InterleavedBuffer:"+o.bufferView+":"+o.componentType+":"+y+":"+o.count;let L=n.cache.get(C);L||(A=new d(h,y*x,o.count*x/g),L=new wE(A,x/g),n.cache.add(C,L)),S=new cm(L,p,v%x/g,M)}else h===null?A=new d(o.count*p):A=new d(h,v,o.count*p),S=new Qn(A,p,M);if(o.sparse!==void 0){const y=Zh.SCALAR,C=po[o.sparse.indices.componentType],L=o.sparse.indices.byteOffset||0,U=o.sparse.values.byteOffset||0,F=new C(u[1],L,o.sparse.count*y),D=new d(u[2],U,o.sparse.count*p);h!==null&&(S=new Qn(S.array.slice(),S.itemSize,S.normalized)),S.normalized=!1;for(let I=0,E=F.length;I<E;I++){const B=F[I];if(S.setX(B,D[I*p]),p>=2&&S.setY(B,D[I*p+1]),p>=3&&S.setZ(B,D[I*p+2]),p>=4&&S.setW(B,D[I*p+3]),p>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}S.normalized=M}return S})}loadTexture(e){const n=this.json,a=this.options,c=n.textures[e].source,u=n.images[c];let h=this.textureLoader;if(u.uri){const p=a.manager.getHandler(u.uri);p!==null&&(h=p)}return this.loadTextureImage(e,c,h)}loadTextureImage(e,n,a){const o=this,c=this.json,u=c.textures[e],h=c.images[n],p=(h.uri||h.bufferView)+":"+u.sampler;if(this.textureCache[p])return this.textureCache[p];const d=this.loadImageSource(n,a).then(function(g){g.flipY=!1,g.name=u.name||h.name||"",g.name===""&&typeof h.uri=="string"&&h.uri.startsWith("data:image/")===!1&&(g.name=h.uri);const v=(c.samplers||{})[u.sampler]||{};return g.magFilter=Ox[v.magFilter]||Cn,g.minFilter=Ox[v.minFilter]||Ha,g.wrapS=Px[v.wrapS]||_o,g.wrapT=Px[v.wrapT]||_o,g.generateMipmaps=!g.isCompressedTexture&&g.minFilter!==wn&&g.minFilter!==Cn,o.associations.set(g,{textures:e}),g}).catch(function(){return null});return this.textureCache[p]=d,d}loadImageSource(e,n){const a=this,o=this.json,c=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(_=>_.clone());const u=o.images[e],h=self.URL||self.webkitURL;let p=u.uri||"",d=!1;if(u.bufferView!==void 0)p=a.getDependency("bufferView",u.bufferView).then(function(_){d=!0;const v=new Blob([_],{type:u.mimeType});return p=h.createObjectURL(v),p});else if(u.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const g=Promise.resolve(p).then(function(_){return new Promise(function(v,x){let M=v;n.isImageBitmapLoader===!0&&(M=function(A){const S=new On(A);S.needsUpdate=!0,v(S)}),n.load(Gl.resolveURL(_,c.path),M,void 0,x)})}).then(function(_){return d===!0&&h.revokeObjectURL(p),na(_,u),_.userData.mimeType=u.mimeType||n2(u.uri),_}).catch(function(_){throw console.error("THREE.GLTFLoader: Couldn't load texture",p),_});return this.sourceCache[e]=g,g}assignTexture(e,n,a,o){const c=this;return this.getDependency("texture",a.index).then(function(u){if(!u)return null;if(a.texCoord!==void 0&&a.texCoord>0&&(u=u.clone(),u.channel=a.texCoord),c.extensions[yt.KHR_TEXTURE_TRANSFORM]){const h=a.extensions!==void 0?a.extensions[yt.KHR_TEXTURE_TRANSFORM]:void 0;if(h){const p=c.associations.get(u);u=c.extensions[yt.KHR_TEXTURE_TRANSFORM].extendTexture(u,h),c.associations.set(u,p)}}return o!==void 0&&(u.colorSpace=o),e[n]=u,u})}assignFinalMaterial(e){const n=e.geometry;let a=e.material;const o=n.attributes.tangent===void 0,c=n.attributes.color!==void 0,u=n.attributes.normal===void 0;if(e.isPoints){const h="PointsMaterial:"+a.uuid;let p=this.cache.get(h);p||(p=new my,ca.prototype.copy.call(p,a),p.color.copy(a.color),p.map=a.map,p.sizeAttenuation=!1,this.cache.add(h,p)),a=p}else if(e.isLine){const h="LineBasicMaterial:"+a.uuid;let p=this.cache.get(h);p||(p=new py,ca.prototype.copy.call(p,a),p.color.copy(a.color),p.map=a.map,this.cache.add(h,p)),a=p}if(o||c||u){let h="ClonedMaterial:"+a.uuid+":";o&&(h+="derivative-tangents:"),c&&(h+="vertex-colors:"),u&&(h+="flat-shading:");let p=this.cache.get(h);p||(p=a.clone(),c&&(p.vertexColors=!0),u&&(p.flatShading=!0),o&&(p.normalScale&&(p.normalScale.y*=-1),p.clearcoatNormalScale&&(p.clearcoatNormalScale.y*=-1)),this.cache.add(h,p),this.associations.set(p,this.associations.get(a))),a=p}e.material=a}getMaterialType(){return $u}loadMaterial(e){const n=this,a=this.json,o=this.extensions,c=a.materials[e];let u;const h={},p=c.extensions||{},d=[];if(p[yt.KHR_MATERIALS_UNLIT]){const _=o[yt.KHR_MATERIALS_UNLIT];u=_.getMaterialType(),d.push(_.extendParams(h,c,n))}else{const _=c.pbrMetallicRoughness||{};if(h.color=new ot(1,1,1),h.opacity=1,Array.isArray(_.baseColorFactor)){const v=_.baseColorFactor;h.color.setRGB(v[0],v[1],v[2],yi),h.opacity=v[3]}_.baseColorTexture!==void 0&&d.push(n.assignTexture(h,"map",_.baseColorTexture,Gn)),h.metalness=_.metallicFactor!==void 0?_.metallicFactor:1,h.roughness=_.roughnessFactor!==void 0?_.roughnessFactor:1,_.metallicRoughnessTexture!==void 0&&(d.push(n.assignTexture(h,"metalnessMap",_.metallicRoughnessTexture)),d.push(n.assignTexture(h,"roughnessMap",_.metallicRoughnessTexture))),u=this._invokeOne(function(v){return v.getMaterialType&&v.getMaterialType(e)}),d.push(Promise.all(this._invokeAll(function(v){return v.extendMaterialParams&&v.extendMaterialParams(e,h)})))}c.doubleSided===!0&&(h.side=aa);const g=c.alphaMode||Qh.OPAQUE;if(g===Qh.BLEND?(h.transparent=!0,h.depthWrite=!1):(h.transparent=!1,g===Qh.MASK&&(h.alphaTest=c.alphaCutoff!==void 0?c.alphaCutoff:.5)),c.normalTexture!==void 0&&u!==Us&&(d.push(n.assignTexture(h,"normalMap",c.normalTexture)),h.normalScale=new Dt(1,1),c.normalTexture.scale!==void 0)){const _=c.normalTexture.scale;h.normalScale.set(_,_)}if(c.occlusionTexture!==void 0&&u!==Us&&(d.push(n.assignTexture(h,"aoMap",c.occlusionTexture)),c.occlusionTexture.strength!==void 0&&(h.aoMapIntensity=c.occlusionTexture.strength)),c.emissiveFactor!==void 0&&u!==Us){const _=c.emissiveFactor;h.emissive=new ot().setRGB(_[0],_[1],_[2],yi)}return c.emissiveTexture!==void 0&&u!==Us&&d.push(n.assignTexture(h,"emissiveMap",c.emissiveTexture,Gn)),Promise.all(d).then(function(){const _=new u(h);return c.name&&(_.name=c.name),na(_,c),n.associations.set(_,{materials:e}),c.extensions&&rr(o,_,c),_})}createUniqueName(e){const n=qt.sanitizeNodeName(e||"");return n in this.nodeNamesUsed?n+"_"+ ++this.nodeNamesUsed[n]:(this.nodeNamesUsed[n]=0,n)}loadGeometries(e){const n=this,a=this.extensions,o=this.primitiveCache;function c(h){return a[yt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(h,n).then(function(p){return Ix(p,h,n)})}const u=[];for(let h=0,p=e.length;h<p;h++){const d=e[h],g=t2(d),_=o[g];if(_)u.push(_.promise);else{let v;d.extensions&&d.extensions[yt.KHR_DRACO_MESH_COMPRESSION]?v=c(d):v=Ix(new Si,d,n),o[g]={primitive:d,promise:v},u.push(v)}}return Promise.all(u)}loadMesh(e){const n=this,a=this.json,o=this.extensions,c=a.meshes[e],u=c.primitives,h=[];for(let p=0,d=u.length;p<d;p++){const g=u[p].material===void 0?JC(this.cache):this.getDependency("material",u[p].material);h.push(g)}return h.push(n.loadGeometries(u)),Promise.all(h).then(function(p){const d=p.slice(0,p.length-1),g=p[p.length-1],_=[];for(let x=0,M=g.length;x<M;x++){const A=g[x],S=u[x];let y;const C=d[x];if(S.mode===Li.TRIANGLES||S.mode===Li.TRIANGLE_STRIP||S.mode===Li.TRIANGLE_FAN||S.mode===void 0)y=c.isSkinnedMesh===!0?new LE(A,C):new Jn(A,C),y.isSkinnedMesh===!0&&y.normalizeSkinWeights(),S.mode===Li.TRIANGLE_STRIP?y.geometry=Nx(y.geometry,ry):S.mode===Li.TRIANGLE_FAN&&(y.geometry=Nx(y.geometry,zp));else if(S.mode===Li.LINES)y=new zE(A,C);else if(S.mode===Li.LINE_STRIP)y=new hm(A,C);else if(S.mode===Li.LINE_LOOP)y=new HE(A,C);else if(S.mode===Li.POINTS)y=new GE(A,C);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+S.mode);Object.keys(y.geometry.morphAttributes).length>0&&e2(y,c),y.name=n.createUniqueName(c.name||"mesh_"+e),na(y,c),S.extensions&&rr(o,y,S),n.assignFinalMaterial(y),_.push(y)}for(let x=0,M=_.length;x<M;x++)n.associations.set(_[x],{meshes:e,primitives:x});if(_.length===1)return c.extensions&&rr(o,_[0],c),_[0];const v=new dr;c.extensions&&rr(o,v,c),n.associations.set(v,{meshes:e});for(let x=0,M=_.length;x<M;x++)v.add(_[x]);return v})}loadCamera(e){let n;const a=this.json.cameras[e],o=a[a.type];if(!o){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return a.type==="perspective"?n=new Zn(uE.radToDeg(o.yfov),o.aspectRatio||1,o.znear||1,o.zfar||2e6):a.type==="orthographic"&&(n=new tf(-o.xmag,o.xmag,o.ymag,-o.ymag,o.znear,o.zfar)),a.name&&(n.name=this.createUniqueName(a.name)),na(n,a),Promise.resolve(n)}loadSkin(e){const n=this.json.skins[e],a=[];for(let o=0,c=n.joints.length;o<c;o++)a.push(this._loadNodeShallow(n.joints[o]));return n.inverseBindMatrices!==void 0?a.push(this.getDependency("accessor",n.inverseBindMatrices)):a.push(null),Promise.all(a).then(function(o){const c=o.pop(),u=o,h=[],p=[];for(let d=0,g=u.length;d<g;d++){const _=u[d];if(_){h.push(_);const v=new vt;c!==null&&v.fromArray(c.array,d*16),p.push(v)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',n.joints[d])}return new fm(h,p)})}loadAnimation(e){const n=this.json,a=this,o=n.animations[e],c=o.name?o.name:"animation_"+e,u=[],h=[],p=[],d=[],g=[];for(let _=0,v=o.channels.length;_<v;_++){const x=o.channels[_],M=o.samplers[x.sampler],A=x.target,S=A.node,y=o.parameters!==void 0?o.parameters[M.input]:M.input,C=o.parameters!==void 0?o.parameters[M.output]:M.output;A.node!==void 0&&(u.push(this.getDependency("node",S)),h.push(this.getDependency("accessor",y)),p.push(this.getDependency("accessor",C)),d.push(M),g.push(A))}return Promise.all([Promise.all(u),Promise.all(h),Promise.all(p),Promise.all(d),Promise.all(g)]).then(function(_){const v=_[0],x=_[1],M=_[2],A=_[3],S=_[4],y=[];for(let L=0,U=v.length;L<U;L++){const F=v[L],D=x[L],I=M[L],E=A[L],B=S[L];if(F===void 0)continue;F.updateMatrix&&F.updateMatrix();const j=a._createAnimationTracks(F,D,I,E,B);if(j)for(let H=0;H<j.length;H++)y.push(j[H])}const C=new nT(c,void 0,y);return na(C,o),C})}createNodeMesh(e){const n=this.json,a=this,o=n.nodes[e];return o.mesh===void 0?null:a.getDependency("mesh",o.mesh).then(function(c){const u=a._getNodeRef(a.meshCache,o.mesh,c);return o.weights!==void 0&&u.traverse(function(h){if(h.isMesh)for(let p=0,d=o.weights.length;p<d;p++)h.morphTargetInfluences[p]=o.weights[p]}),u})}loadNode(e){const n=this.json,a=this,o=n.nodes[e],c=a._loadNodeShallow(e),u=[],h=o.children||[];for(let d=0,g=h.length;d<g;d++)u.push(a.getDependency("node",h[d]));const p=o.skin===void 0?Promise.resolve(null):a.getDependency("skin",o.skin);return Promise.all([c,Promise.all(u),p]).then(function(d){const g=d[0],_=d[1],v=d[2];v!==null&&g.traverse(function(x){x.isSkinnedMesh&&x.bind(v,i2)});for(let x=0,M=_.length;x<M;x++)g.add(_[x]);if(g.userData.pivot!==void 0&&_.length>0){const x=g.userData.pivot,M=_[0];g.pivot=new $().fromArray(x),g.position.x-=x[0],g.position.y-=x[1],g.position.z-=x[2],M.position.set(0,0,0),delete g.userData.pivot}return g})}_loadNodeShallow(e){const n=this.json,a=this.extensions,o=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const c=n.nodes[e],u=c.name?o.createUniqueName(c.name):"",h=[],p=o._invokeOne(function(d){return d.createNodeMesh&&d.createNodeMesh(e)});return p&&h.push(p),c.camera!==void 0&&h.push(o.getDependency("camera",c.camera).then(function(d){return o._getNodeRef(o.cameraCache,c.camera,d)})),o._invokeAll(function(d){return d.createNodeAttachment&&d.createNodeAttachment(e)}).forEach(function(d){h.push(d)}),this.nodeCache[e]=Promise.all(h).then(function(d){let g;if(c.isBone===!0?g=new hy:d.length>1?g=new dr:d.length===1?g=d[0]:g=new ln,g!==d[0])for(let _=0,v=d.length;_<v;_++)g.add(d[_]);if(c.name&&(g.userData.name=c.name,g.name=u),na(g,c),c.extensions&&rr(a,g,c),c.matrix!==void 0){const _=new vt;_.fromArray(c.matrix),g.applyMatrix4(_)}else c.translation!==void 0&&g.position.fromArray(c.translation),c.rotation!==void 0&&g.quaternion.fromArray(c.rotation),c.scale!==void 0&&g.scale.fromArray(c.scale);if(!o.associations.has(g))o.associations.set(g,{});else if(c.mesh!==void 0&&o.meshCache.refs[c.mesh]>1){const _=o.associations.get(g);o.associations.set(g,{..._})}return o.associations.get(g).nodes=e,g}),this.nodeCache[e]}loadScene(e){const n=this.extensions,a=this.json.scenes[e],o=this,c=new dr;a.name&&(c.name=o.createUniqueName(a.name)),na(c,a),a.extensions&&rr(n,c,a);const u=a.nodes||[],h=[];for(let p=0,d=u.length;p<d;p++)h.push(o.getDependency("node",u[p]));return Promise.all(h).then(function(p){for(let g=0,_=p.length;g<_;g++){const v=p[g];v.parent!==null?c.add(TC(v)):c.add(v)}const d=g=>{const _=new Map;for(const[v,x]of o.associations)(v instanceof ca||v instanceof On)&&_.set(v,x);return g.traverse(v=>{const x=o.associations.get(v);x!=null&&_.set(v,x)}),_};return o.associations=d(c),c})}_createAnimationTracks(e,n,a,o,c){const u=[],h=e.name?e.name:e.uuid,p=[];function d(x){x.morphTargetInfluences&&p.push(x.name?x.name:x.uuid)}Ds[c.path]===Ds.weights?(d(e),e.isGroup&&e.children.forEach(d)):p.push(h);let g;switch(Ds[c.path]){case Ds.weights:g=So;break;case Ds.rotation:g=bo;break;case Ds.translation:case Ds.scale:g=Mo;break;default:switch(a.itemSize){case 1:g=So;break;case 2:case 3:default:g=Mo;break}break}const _=o.interpolation!==void 0?QC[o.interpolation]:Wl,v=this._getArrayFromAccessor(a);for(let x=0,M=p.length;x<M;x++){const A=new g(p[x]+"."+Ds[c.path],n.array,v,_);o.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(A),u.push(A)}return u}_getArrayFromAccessor(e){let n=e.array;if(e.normalized){const a=jp(n.constructor),o=new Float32Array(n.length);for(let c=0,u=n.length;c<u;c++)o[c]=n[c]*a;n=o}return n}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(a){const o=this instanceof bo?ZC:Oy;return new o(this.times,this.values,this.getValueSize()/3,a)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function s2(r,e,n){const a=e.attributes,o=new ja;if(a.POSITION!==void 0){const h=n.json.accessors[a.POSITION],p=h.min,d=h.max;if(p!==void 0&&d!==void 0){if(o.set(new $(p[0],p[1],p[2]),new $(d[0],d[1],d[2])),h.normalized){const g=jp(po[h.componentType]);o.min.multiplyScalar(g),o.max.multiplyScalar(g)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const c=e.targets;if(c!==void 0){const h=new $,p=new $;for(let d=0,g=c.length;d<g;d++){const _=c[d];if(_.POSITION!==void 0){const v=n.json.accessors[_.POSITION],x=v.min,M=v.max;if(x!==void 0&&M!==void 0){if(p.setX(Math.max(Math.abs(x[0]),Math.abs(M[0]))),p.setY(Math.max(Math.abs(x[1]),Math.abs(M[1]))),p.setZ(Math.max(Math.abs(x[2]),Math.abs(M[2]))),v.normalized){const A=jp(po[v.componentType]);p.multiplyScalar(A)}h.max(p)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}o.expandByVector(h)}r.boundingBox=o;const u=new da;o.getCenter(u.center),u.radius=o.min.distanceTo(o.max)/2,r.boundingSphere=u}function Ix(r,e,n){const a=e.attributes,o=[];function c(u,h){return n.getDependency("accessor",u).then(function(p){r.setAttribute(h,p)})}for(const u in a){const h=Yp[u]||u.toLowerCase();h in r.attributes||o.push(c(a[u],h))}if(e.indices!==void 0&&!r.index){const u=n.getDependency("accessor",e.indices).then(function(h){r.setIndex(h)});o.push(u)}return Tt.workingColorSpace!==yi&&"COLOR_0"in a&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Tt.workingColorSpace}" not supported.`),na(r,e),s2(r,e,n),Promise.all(o).then(function(){return e.targets!==void 0?$C(r,e.targets,n):r})}function r2({floors:r,teleportedFloor:e,activeSystem:n}){const a=_n.useRef(null),o=_n.useRef(null),c=_n.useRef(n),u=_n.useRef(null);return _n.useEffect(()=>{c.current=n},[n]),_n.useEffect(()=>{if(o.current){const h=o.current.getObjectByName("Mod-Floor-1"),p=o.current.getObjectByName("Mod-Floor-2"),d=o.current.getObjectByName("Mod-Floor-3"),g=o.current.getObjectByName("Mod-Floor-7");h&&(h.visible=r.f1),p&&(p.visible=r.f2),d&&(d.visible=r.f3),g&&(g.visible=r.f7);const _=o.current.getObjectByName("Default Building");_&&(e&&e==="f1"?_.position.y=-.3:e&&e==="f2"?_.position.y=-.9:e&&e==="f3"?_.position.y=-1.5:e&&e==="f7"?_.position.y=-3.3:_.position.y=0)}},[r,e]),_n.useEffect(()=>{if(!a.current)return;const h=a.current,p=new EE;o.current=p;const d={};new AC().load("`${import.meta.env.BASE_URL}model1.glb`",Q=>{const O=Q.scene;O.visible=!1,O.matrixAutoUpdate=!1,p.add(O),d.building=O},void 0,Q=>{console.error("Critical: Failed to resolve model1.glb layout:",Q)}),Object.entries({HVAC:3900150,Plumb:15680580,Elec:15381256,Fire:16347926}).forEach(([Q,O])=>{const K=new Eo(.2,.2,.2),ge=new $u({color:O,roughness:.3,metalness:.2}),ye=new Jn(K,ge);ye.visible=!1,ye.matrixAutoUpdate=!1,p.add(ye),d[Q]=ye});let v=[],x=[];const M=()=>{const Q={};for(const O in d){const K=d[O];Q[O]={visible:K.visible,matrix:K.matrix.clone()}}return Q},A=Q=>{for(const O in Q)d[O]&&(d[O].visible=Q[O].visible,d[O].matrix.copy(Q[O].matrix))},S=()=>{v.push(M()),x=[],y()},y=()=>{window.dispatchEvent(new CustomEvent("ar-history-update",{detail:{canUndo:v.length>0,canRedo:x.length>0}}))},C=new uT(16777215,12303359,1);C.position.set(.5,1,.25),p.add(C);const L=new My(16777215,1.5);L.position.set(2,5,2),L.castShadow=!0,p.add(L);const U=new Zn(70,h.clientWidth/h.clientHeight,.01,20),F=new MC({antialias:!0,alpha:!0});F.setPixelRatio(window.devicePixelRatio),F.setSize(h.clientWidth,h.clientHeight),F.xr.enabled=!0,h.appendChild(F.domElement);let D=null,I=!1;const E=new pm(.1,.12,32).rotateX(-Math.PI/2),B=new Us({color:1096065}),j=new Jn(E,B);j.matrixAutoUpdate=!1,j.visible=!1,p.add(j),u.current=j;const H=document.getElementById("ar-overlay"),W=EC.createButton(F,{requiredFeatures:["hit-test","dom-overlay"],domOverlay:{root:H||document.body}});W.style.position="absolute",W.style.top="50%",W.style.left="50%",W.style.transform="translate(-50%, -50%)",W.style.bottom="auto",W.style.backgroundColor="#10b981",W.style.color="#0f172a",W.style.opacity="1",W.style.border="1px solid #047857",W.style.fontWeight="bold",W.style.textTransform="uppercase",W.style.fontFamily="monospace",W.style.padding="16px 24px",W.style.zIndex="99999",W.style.borderRadius="12px",W.style.pointerEvents="auto",document.body.appendChild(W);const ce=F.xr.getController(0);p.add(ce);const fe=Q=>{var K;const O=Q.detail.system;if((K=u.current)!=null&&K.visible){S();const ye=d[O||"building"];ye&&(ye.matrix.copy(u.current.matrix),ye.visible=!0)}},X=()=>{if(v.length>0){x.push(M());const Q=v.pop();A(Q),y()}},P=()=>{if(x.length>0){v.push(M());const Q=x.pop();A(Q),y()}},z=()=>{S();for(const Q in d)d[Q].visible=!1};window.addEventListener("ar-action-place",fe),window.addEventListener("ar-action-undo",X),window.addEventListener("ar-action-redo",P),window.addEventListener("ar-action-clear",z);function oe(Q,O){if(O){const K=F.xr.getReferenceSpace(),ge=F.xr.getSession();if(ge&&K&&!I&&(ge.requestReferenceSpace("viewer").then(ye=>{ge.requestHitTestSource&&ge.requestHitTestSource({space:ye}).then(be=>{D=be})}),ge.addEventListener("end",()=>{I=!1,D=null,u.current&&(u.current.visible=!1,window.dispatchEvent(new CustomEvent("ar-reticle-update",{detail:{visible:!1}})))}),I=!0),D&&K){const ye=O.getHitTestResults(D);if(ye.length>0){const ee=ye[0].getPose(K);ee&&u.current&&(u.current.visible||window.dispatchEvent(new CustomEvent("ar-reticle-update",{detail:{visible:!0}})),u.current.visible=!0,u.current.matrix.fromArray(ee.transform.matrix))}else u.current&&u.current.visible&&(u.current.visible=!1,window.dispatchEvent(new CustomEvent("ar-reticle-update",{detail:{visible:!1}})))}}F.render(p,U)}F.setAnimationLoop(oe);const pe=()=>{h&&(U.aspect=h.clientWidth/h.clientHeight,U.updateProjectionMatrix(),F.setSize(h.clientWidth,h.clientHeight))};return window.addEventListener("resize",pe),()=>{F.setAnimationLoop(null),window.removeEventListener("resize",pe),h.contains(F.domElement)&&h.removeChild(F.domElement),document.body.contains(W)&&document.body.removeChild(W),window.removeEventListener("ar-action-place",fe),window.removeEventListener("ar-action-undo",X),window.removeEventListener("ar-action-redo",P),window.removeEventListener("ar-action-clear",z)}},[]),ct.jsx("div",{ref:a,className:"absolute inset-0 w-full h-full z-10"})}/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o2=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),l2=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,a)=>a?a.toUpperCase():n.toLowerCase()),Bx=r=>{const e=l2(r);return e.charAt(0).toUpperCase()+e.slice(1)},Py=(...r)=>r.filter((e,n,a)=>!!e&&e.trim()!==""&&a.indexOf(e)===n).join(" ").trim(),c2=r=>{for(const e in r)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var u2={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f2=_n.forwardRef(({color:r="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:a,className:o="",children:c,iconNode:u,...h},p)=>_n.createElement("svg",{ref:p,...u2,width:e,height:e,stroke:r,strokeWidth:a?Number(n)*24/Number(e):n,className:Py("lucide",o),...!c&&!c2(h)&&{"aria-hidden":"true"},...h},[...u.map(([d,g])=>_n.createElement(d,g)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yi=(r,e)=>{const n=_n.forwardRef(({className:a,...o},c)=>_n.createElement(f2,{ref:c,iconNode:e,className:Py(`lucide-${o2(Bx(r))}`,`lucide-${r}`,a),...o}));return n.displayName=Bx(r),n};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d2=[["path",{d:"M12 17V3",key:"1cwfxf"}],["path",{d:"m6 11 6 6 6-6",key:"12ii2o"}],["path",{d:"M19 21H5",key:"150jfl"}]],h2=Yi("arrow-down-to-line",d2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p2=[["path",{d:"M4.929 4.929 19.07 19.071",key:"196cmz"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],m2=Yi("ban",p2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g2=[["path",{d:"M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z",key:"c7niix"}]],_2=Yi("droplet",g2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v2=[["path",{d:"M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4",key:"1slcih"}]],x2=Yi("flame",v2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y2=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],S2=Yi("layers",y2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b2=[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3",key:"1dcmit"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3",key:"1e4gt3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3",key:"wsl5sc"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3",key:"18trek"}]],M2=Yi("maximize",b2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E2=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],T2=Yi("plus",E2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A2=[["path",{d:"M21 7v6h-6",key:"3ptur4"}],["path",{d:"M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7",key:"1kgawr"}]],R2=Yi("redo",A2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w2=[["path",{d:"M3 7v6h6",key:"1v2h90"}],["path",{d:"M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13",key:"1r6uu6"}]],C2=Yi("undo",w2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D2=[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z",key:"1ngwbx"}]],N2=Yi("wrench",D2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L2=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],U2=Yi("zap",L2);function Iy(r){var e,n,a="";if(typeof r=="string"||typeof r=="number")a+=r;else if(typeof r=="object")if(Array.isArray(r)){var o=r.length;for(e=0;e<o;e++)r[e]&&(n=Iy(r[e]))&&(a&&(a+=" "),a+=n)}else for(n in r)r[n]&&(a&&(a+=" "),a+=n);return a}function O2(){for(var r,e,n=0,a="",o=arguments.length;n<o;n++)(r=arguments[n])&&(e=Iy(r))&&(a&&(a+=" "),a+=e);return a}const P2=(r,e)=>{const n=new Array(r.length+e.length);for(let a=0;a<r.length;a++)n[a]=r[a];for(let a=0;a<e.length;a++)n[r.length+a]=e[a];return n},I2=(r,e)=>({classGroupId:r,validator:e}),By=(r=new Map,e=null,n)=>({nextPart:r,validators:e,classGroupId:n}),ju="-",Fx=[],B2="arbitrary..",F2=r=>{const e=H2(r),{conflictingClassGroups:n,conflictingClassGroupModifiers:a}=r;return{getClassGroupId:u=>{if(u.startsWith("[")&&u.endsWith("]"))return z2(u);const h=u.split(ju),p=h[0]===""&&h.length>1?1:0;return Fy(h,p,e)},getConflictingClassGroupIds:(u,h)=>{if(h){const p=a[u],d=n[u];return p?d?P2(d,p):p:d||Fx}return n[u]||Fx}}},Fy=(r,e,n)=>{if(r.length-e===0)return n.classGroupId;const o=r[e],c=n.nextPart.get(o);if(c){const d=Fy(r,e+1,c);if(d)return d}const u=n.validators;if(u===null)return;const h=e===0?r.join(ju):r.slice(e).join(ju),p=u.length;for(let d=0;d<p;d++){const g=u[d];if(g.validator(h))return g.classGroupId}},z2=r=>r.slice(1,-1).indexOf(":")===-1?void 0:(()=>{const e=r.slice(1,-1),n=e.indexOf(":"),a=e.slice(0,n);return a?B2+a:void 0})(),H2=r=>{const{theme:e,classGroups:n}=r;return G2(n,e)},G2=(r,e)=>{const n=By();for(const a in r){const o=r[a];vm(o,n,a,e)}return n},vm=(r,e,n,a)=>{const o=r.length;for(let c=0;c<o;c++){const u=r[c];V2(u,e,n,a)}},V2=(r,e,n,a)=>{if(typeof r=="string"){k2(r,e,n);return}if(typeof r=="function"){X2(r,e,n,a);return}W2(r,e,n,a)},k2=(r,e,n)=>{const a=r===""?e:zy(e,r);a.classGroupId=n},X2=(r,e,n,a)=>{if(q2(r)){vm(r(a),e,n,a);return}e.validators===null&&(e.validators=[]),e.validators.push(I2(n,r))},W2=(r,e,n,a)=>{const o=Object.entries(r),c=o.length;for(let u=0;u<c;u++){const[h,p]=o[u];vm(p,zy(e,h),n,a)}},zy=(r,e)=>{let n=r;const a=e.split(ju),o=a.length;for(let c=0;c<o;c++){const u=a[c];let h=n.nextPart.get(u);h||(h=By(),n.nextPart.set(u,h)),n=h}return n},q2=r=>"isThemeGetter"in r&&r.isThemeGetter===!0,Y2=r=>{if(r<1)return{get:()=>{},set:()=>{}};let e=0,n=Object.create(null),a=Object.create(null);const o=(c,u)=>{n[c]=u,e++,e>r&&(e=0,a=n,n=Object.create(null))};return{get(c){let u=n[c];if(u!==void 0)return u;if((u=a[c])!==void 0)return o(c,u),u},set(c,u){c in n?n[c]=u:o(c,u)}}},Kp="!",zx=":",j2=[],Hx=(r,e,n,a,o)=>({modifiers:r,hasImportantModifier:e,baseClassName:n,maybePostfixModifierPosition:a,isExternal:o}),K2=r=>{const{prefix:e,experimentalParseClassName:n}=r;let a=o=>{const c=[];let u=0,h=0,p=0,d;const g=o.length;for(let A=0;A<g;A++){const S=o[A];if(u===0&&h===0){if(S===zx){c.push(o.slice(p,A)),p=A+1;continue}if(S==="/"){d=A;continue}}S==="["?u++:S==="]"?u--:S==="("?h++:S===")"&&h--}const _=c.length===0?o:o.slice(p);let v=_,x=!1;_.endsWith(Kp)?(v=_.slice(0,-1),x=!0):_.startsWith(Kp)&&(v=_.slice(1),x=!0);const M=d&&d>p?d-p:void 0;return Hx(c,x,v,M)};if(e){const o=e+zx,c=a;a=u=>u.startsWith(o)?c(u.slice(o.length)):Hx(j2,!1,u,void 0,!0)}if(n){const o=a;a=c=>n({className:c,parseClassName:o})}return a},Z2=r=>{const e=new Map;return r.orderSensitiveModifiers.forEach((n,a)=>{e.set(n,1e6+a)}),n=>{const a=[];let o=[];for(let c=0;c<n.length;c++){const u=n[c],h=u[0]==="[",p=e.has(u);h||p?(o.length>0&&(o.sort(),a.push(...o),o=[]),a.push(u)):o.push(u)}return o.length>0&&(o.sort(),a.push(...o)),a}},Q2=r=>({cache:Y2(r.cacheSize),parseClassName:K2(r),sortModifiers:Z2(r),postfixLookupClassGroupIds:J2(r),...F2(r)}),J2=r=>{const e=Object.create(null),n=r.postfixLookupClassGroups;if(n)for(let a=0;a<n.length;a++)e[n[a]]=!0;return e},$2=/\s+/,e3=(r,e)=>{const{parseClassName:n,getClassGroupId:a,getConflictingClassGroupIds:o,sortModifiers:c,postfixLookupClassGroupIds:u}=e,h=[],p=r.trim().split($2);let d="";for(let g=p.length-1;g>=0;g-=1){const _=p[g],{isExternal:v,modifiers:x,hasImportantModifier:M,baseClassName:A,maybePostfixModifierPosition:S}=n(_);if(v){d=_+(d.length>0?" "+d:d);continue}let y=!!S,C;if(y){const I=A.substring(0,S);C=a(I);const E=C&&u[C]?a(A):void 0;E&&E!==C&&(C=E,y=!1)}else C=a(A);if(!C){if(!y){d=_+(d.length>0?" "+d:d);continue}if(C=a(A),!C){d=_+(d.length>0?" "+d:d);continue}y=!1}const L=x.length===0?"":x.length===1?x[0]:c(x).join(":"),U=M?L+Kp:L,F=U+C;if(h.indexOf(F)>-1)continue;h.push(F);const D=o(C,y);for(let I=0;I<D.length;++I){const E=D[I];h.push(U+E)}d=_+(d.length>0?" "+d:d)}return d},t3=(...r)=>{let e=0,n,a,o="";for(;e<r.length;)(n=r[e++])&&(a=Hy(n))&&(o&&(o+=" "),o+=a);return o},Hy=r=>{if(typeof r=="string")return r;let e,n="";for(let a=0;a<r.length;a++)r[a]&&(e=Hy(r[a]))&&(n&&(n+=" "),n+=e);return n},n3=(r,...e)=>{let n,a,o,c;const u=p=>{const d=e.reduce((g,_)=>_(g),r());return n=Q2(d),a=n.cache.get,o=n.cache.set,c=h,h(p)},h=p=>{const d=a(p);if(d)return d;const g=e3(p,n);return o(p,g),g};return c=u,(...p)=>c(t3(...p))},i3=[],Rn=r=>{const e=n=>n[r]||i3;return e.isThemeGetter=!0,e},Gy=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,Vy=/^\((?:(\w[\w-]*):)?(.+)\)$/i,a3=/^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/,s3=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,r3=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,o3=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,l3=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,c3=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Ns=r=>a3.test(r),_t=r=>!!r&&!Number.isNaN(Number(r)),ta=r=>!!r&&Number.isInteger(Number(r)),$h=r=>r.endsWith("%")&&_t(r.slice(0,-1)),Fa=r=>s3.test(r),ky=()=>!0,u3=r=>r3.test(r)&&!o3.test(r),xm=()=>!1,f3=r=>l3.test(r),d3=r=>c3.test(r),h3=r=>!ke(r)&&!Xe(r),p3=r=>r.startsWith("@container")&&(r[10]==="/"&&r[11]!==void 0||r[11]==="s"&&r[16]!==void 0&&r.startsWith("-size/",10)||r[11]==="n"&&r[18]!==void 0&&r.startsWith("-normal/",10)),m3=r=>Is(r,qy,xm),ke=r=>Gy.test(r),or=r=>Is(r,Yy,u3),Gx=r=>Is(r,M3,_t),g3=r=>Is(r,Ky,ky),_3=r=>Is(r,jy,xm),Vx=r=>Is(r,Xy,xm),v3=r=>Is(r,Wy,d3),Lu=r=>Is(r,Zy,f3),Xe=r=>Vy.test(r),Pl=r=>gr(r,Yy),x3=r=>gr(r,jy),kx=r=>gr(r,Xy),y3=r=>gr(r,qy),S3=r=>gr(r,Wy),Uu=r=>gr(r,Zy,!0),b3=r=>gr(r,Ky,!0),Is=(r,e,n)=>{const a=Gy.exec(r);return a?a[1]?e(a[1]):n(a[2]):!1},gr=(r,e,n=!1)=>{const a=Vy.exec(r);return a?a[1]?e(a[1]):n:!1},Xy=r=>r==="position"||r==="percentage",Wy=r=>r==="image"||r==="url",qy=r=>r==="length"||r==="size"||r==="bg-size",Yy=r=>r==="length",M3=r=>r==="number",jy=r=>r==="family-name",Ky=r=>r==="number"||r==="weight",Zy=r=>r==="shadow",E3=()=>{const r=Rn("color"),e=Rn("font"),n=Rn("text"),a=Rn("font-weight"),o=Rn("tracking"),c=Rn("leading"),u=Rn("breakpoint"),h=Rn("container"),p=Rn("spacing"),d=Rn("radius"),g=Rn("shadow"),_=Rn("inset-shadow"),v=Rn("text-shadow"),x=Rn("drop-shadow"),M=Rn("blur"),A=Rn("perspective"),S=Rn("aspect"),y=Rn("ease"),C=Rn("animate"),L=()=>["auto","avoid","all","avoid-page","page","left","right","column"],U=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],F=()=>[...U(),Xe,ke],D=()=>["auto","hidden","clip","visible","scroll"],I=()=>["auto","contain","none"],E=()=>[Xe,ke,p],B=()=>[Ns,"full","auto",...E()],j=()=>[ta,"none","subgrid",Xe,ke],H=()=>["auto",{span:["full",ta,Xe,ke]},ta,Xe,ke],W=()=>[ta,"auto",Xe,ke],ce=()=>["auto","min","max","fr",Xe,ke],fe=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],X=()=>["start","end","center","stretch","center-safe","end-safe"],P=()=>["auto",...E()],z=()=>[Ns,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...E()],oe=()=>[Ns,"screen","full","dvw","lvw","svw","min","max","fit",...E()],pe=()=>[Ns,"screen","full","lh","dvh","lvh","svh","min","max","fit",...E()],Q=()=>[r,Xe,ke],O=()=>[...U(),kx,Vx,{position:[Xe,ke]}],K=()=>["no-repeat",{repeat:["","x","y","space","round"]}],ge=()=>["auto","cover","contain",y3,m3,{size:[Xe,ke]}],ye=()=>[$h,Pl,or],be=()=>["","none","full",d,Xe,ke],ee=()=>["",_t,Pl,or],Se=()=>["solid","dashed","dotted","double"],Te=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],Re=()=>[_t,$h,kx,Vx],et=()=>["","none",M,Xe,ke],Ze=()=>["none",_t,Xe,ke],Nt=()=>["none",_t,Xe,ke],lt=()=>[_t,Xe,ke],ht=()=>[Ns,"full",...E()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[Fa],breakpoint:[Fa],color:[ky],container:[Fa],"drop-shadow":[Fa],ease:["in","out","in-out"],font:[h3],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[Fa],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[Fa],shadow:[Fa],spacing:["px",_t],text:[Fa],"text-shadow":[Fa],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",Ns,ke,Xe,S]}],container:["container"],"container-type":[{"@container":["","normal","size",Xe,ke]}],"container-named":[p3],columns:[{columns:[_t,ke,Xe,h]}],"break-after":[{"break-after":L()}],"break-before":[{"break-before":L()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:F()}],overflow:[{overflow:D()}],"overflow-x":[{"overflow-x":D()}],"overflow-y":[{"overflow-y":D()}],overscroll:[{overscroll:I()}],"overscroll-x":[{"overscroll-x":I()}],"overscroll-y":[{"overscroll-y":I()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:B()}],"inset-x":[{"inset-x":B()}],"inset-y":[{"inset-y":B()}],start:[{"inset-s":B(),start:B()}],end:[{"inset-e":B(),end:B()}],"inset-bs":[{"inset-bs":B()}],"inset-be":[{"inset-be":B()}],top:[{top:B()}],right:[{right:B()}],bottom:[{bottom:B()}],left:[{left:B()}],visibility:["visible","invisible","collapse"],z:[{z:[ta,"auto",Xe,ke]}],basis:[{basis:[Ns,"full","auto",h,...E()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[_t,Ns,"auto","initial","none",ke]}],grow:[{grow:["",_t,Xe,ke]}],shrink:[{shrink:["",_t,Xe,ke]}],order:[{order:[ta,"first","last","none",Xe,ke]}],"grid-cols":[{"grid-cols":j()}],"col-start-end":[{col:H()}],"col-start":[{"col-start":W()}],"col-end":[{"col-end":W()}],"grid-rows":[{"grid-rows":j()}],"row-start-end":[{row:H()}],"row-start":[{"row-start":W()}],"row-end":[{"row-end":W()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":ce()}],"auto-rows":[{"auto-rows":ce()}],gap:[{gap:E()}],"gap-x":[{"gap-x":E()}],"gap-y":[{"gap-y":E()}],"justify-content":[{justify:[...fe(),"normal"]}],"justify-items":[{"justify-items":[...X(),"normal"]}],"justify-self":[{"justify-self":["auto",...X()]}],"align-content":[{content:["normal",...fe()]}],"align-items":[{items:[...X(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...X(),{baseline:["","last"]}]}],"place-content":[{"place-content":fe()}],"place-items":[{"place-items":[...X(),"baseline"]}],"place-self":[{"place-self":["auto",...X()]}],p:[{p:E()}],px:[{px:E()}],py:[{py:E()}],ps:[{ps:E()}],pe:[{pe:E()}],pbs:[{pbs:E()}],pbe:[{pbe:E()}],pt:[{pt:E()}],pr:[{pr:E()}],pb:[{pb:E()}],pl:[{pl:E()}],m:[{m:P()}],mx:[{mx:P()}],my:[{my:P()}],ms:[{ms:P()}],me:[{me:P()}],mbs:[{mbs:P()}],mbe:[{mbe:P()}],mt:[{mt:P()}],mr:[{mr:P()}],mb:[{mb:P()}],ml:[{ml:P()}],"space-x":[{"space-x":E()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":E()}],"space-y-reverse":["space-y-reverse"],size:[{size:z()}],"inline-size":[{inline:["auto",...oe()]}],"min-inline-size":[{"min-inline":["auto",...oe()]}],"max-inline-size":[{"max-inline":["none",...oe()]}],"block-size":[{block:["auto",...pe()]}],"min-block-size":[{"min-block":["auto",...pe()]}],"max-block-size":[{"max-block":["none",...pe()]}],w:[{w:[h,"screen",...z()]}],"min-w":[{"min-w":[h,"screen","none",...z()]}],"max-w":[{"max-w":[h,"screen","none","prose",{screen:[u]},...z()]}],h:[{h:["screen","lh",...z()]}],"min-h":[{"min-h":["screen","lh","none",...z()]}],"max-h":[{"max-h":["screen","lh",...z()]}],"font-size":[{text:["base",n,Pl,or]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[a,b3,g3]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",$h,ke]}],"font-family":[{font:[x3,_3,e]}],"font-features":[{"font-features":[ke]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[o,Xe,ke]}],"line-clamp":[{"line-clamp":[_t,"none",Xe,Gx]}],leading:[{leading:[c,...E()]}],"list-image":[{"list-image":["none",Xe,ke]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",Xe,ke]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:Q()}],"text-color":[{text:Q()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...Se(),"wavy"]}],"text-decoration-thickness":[{decoration:[_t,"from-font","auto",Xe,or]}],"text-decoration-color":[{decoration:Q()}],"underline-offset":[{"underline-offset":[_t,"auto",Xe,ke]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:E()}],"tab-size":[{tab:[ta,Xe,ke]}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",Xe,ke]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",Xe,ke]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:O()}],"bg-repeat":[{bg:K()}],"bg-size":[{bg:ge()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},ta,Xe,ke],radial:["",Xe,ke],conic:[ta,Xe,ke]},S3,v3]}],"bg-color":[{bg:Q()}],"gradient-from-pos":[{from:ye()}],"gradient-via-pos":[{via:ye()}],"gradient-to-pos":[{to:ye()}],"gradient-from":[{from:Q()}],"gradient-via":[{via:Q()}],"gradient-to":[{to:Q()}],rounded:[{rounded:be()}],"rounded-s":[{"rounded-s":be()}],"rounded-e":[{"rounded-e":be()}],"rounded-t":[{"rounded-t":be()}],"rounded-r":[{"rounded-r":be()}],"rounded-b":[{"rounded-b":be()}],"rounded-l":[{"rounded-l":be()}],"rounded-ss":[{"rounded-ss":be()}],"rounded-se":[{"rounded-se":be()}],"rounded-ee":[{"rounded-ee":be()}],"rounded-es":[{"rounded-es":be()}],"rounded-tl":[{"rounded-tl":be()}],"rounded-tr":[{"rounded-tr":be()}],"rounded-br":[{"rounded-br":be()}],"rounded-bl":[{"rounded-bl":be()}],"border-w":[{border:ee()}],"border-w-x":[{"border-x":ee()}],"border-w-y":[{"border-y":ee()}],"border-w-s":[{"border-s":ee()}],"border-w-e":[{"border-e":ee()}],"border-w-bs":[{"border-bs":ee()}],"border-w-be":[{"border-be":ee()}],"border-w-t":[{"border-t":ee()}],"border-w-r":[{"border-r":ee()}],"border-w-b":[{"border-b":ee()}],"border-w-l":[{"border-l":ee()}],"divide-x":[{"divide-x":ee()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":ee()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...Se(),"hidden","none"]}],"divide-style":[{divide:[...Se(),"hidden","none"]}],"border-color":[{border:Q()}],"border-color-x":[{"border-x":Q()}],"border-color-y":[{"border-y":Q()}],"border-color-s":[{"border-s":Q()}],"border-color-e":[{"border-e":Q()}],"border-color-bs":[{"border-bs":Q()}],"border-color-be":[{"border-be":Q()}],"border-color-t":[{"border-t":Q()}],"border-color-r":[{"border-r":Q()}],"border-color-b":[{"border-b":Q()}],"border-color-l":[{"border-l":Q()}],"divide-color":[{divide:Q()}],"outline-style":[{outline:[...Se(),"none","hidden"]}],"outline-offset":[{"outline-offset":[_t,Xe,ke]}],"outline-w":[{outline:["",_t,Pl,or]}],"outline-color":[{outline:Q()}],shadow:[{shadow:["","none",g,Uu,Lu]}],"shadow-color":[{shadow:Q()}],"inset-shadow":[{"inset-shadow":["none",_,Uu,Lu]}],"inset-shadow-color":[{"inset-shadow":Q()}],"ring-w":[{ring:ee()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:Q()}],"ring-offset-w":[{"ring-offset":[_t,or]}],"ring-offset-color":[{"ring-offset":Q()}],"inset-ring-w":[{"inset-ring":ee()}],"inset-ring-color":[{"inset-ring":Q()}],"text-shadow":[{"text-shadow":["none",v,Uu,Lu]}],"text-shadow-color":[{"text-shadow":Q()}],opacity:[{opacity:[_t,Xe,ke]}],"mix-blend":[{"mix-blend":[...Te(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":Te()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[_t]}],"mask-image-linear-from-pos":[{"mask-linear-from":Re()}],"mask-image-linear-to-pos":[{"mask-linear-to":Re()}],"mask-image-linear-from-color":[{"mask-linear-from":Q()}],"mask-image-linear-to-color":[{"mask-linear-to":Q()}],"mask-image-t-from-pos":[{"mask-t-from":Re()}],"mask-image-t-to-pos":[{"mask-t-to":Re()}],"mask-image-t-from-color":[{"mask-t-from":Q()}],"mask-image-t-to-color":[{"mask-t-to":Q()}],"mask-image-r-from-pos":[{"mask-r-from":Re()}],"mask-image-r-to-pos":[{"mask-r-to":Re()}],"mask-image-r-from-color":[{"mask-r-from":Q()}],"mask-image-r-to-color":[{"mask-r-to":Q()}],"mask-image-b-from-pos":[{"mask-b-from":Re()}],"mask-image-b-to-pos":[{"mask-b-to":Re()}],"mask-image-b-from-color":[{"mask-b-from":Q()}],"mask-image-b-to-color":[{"mask-b-to":Q()}],"mask-image-l-from-pos":[{"mask-l-from":Re()}],"mask-image-l-to-pos":[{"mask-l-to":Re()}],"mask-image-l-from-color":[{"mask-l-from":Q()}],"mask-image-l-to-color":[{"mask-l-to":Q()}],"mask-image-x-from-pos":[{"mask-x-from":Re()}],"mask-image-x-to-pos":[{"mask-x-to":Re()}],"mask-image-x-from-color":[{"mask-x-from":Q()}],"mask-image-x-to-color":[{"mask-x-to":Q()}],"mask-image-y-from-pos":[{"mask-y-from":Re()}],"mask-image-y-to-pos":[{"mask-y-to":Re()}],"mask-image-y-from-color":[{"mask-y-from":Q()}],"mask-image-y-to-color":[{"mask-y-to":Q()}],"mask-image-radial":[{"mask-radial":[Xe,ke]}],"mask-image-radial-from-pos":[{"mask-radial-from":Re()}],"mask-image-radial-to-pos":[{"mask-radial-to":Re()}],"mask-image-radial-from-color":[{"mask-radial-from":Q()}],"mask-image-radial-to-color":[{"mask-radial-to":Q()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":U()}],"mask-image-conic-pos":[{"mask-conic":[_t]}],"mask-image-conic-from-pos":[{"mask-conic-from":Re()}],"mask-image-conic-to-pos":[{"mask-conic-to":Re()}],"mask-image-conic-from-color":[{"mask-conic-from":Q()}],"mask-image-conic-to-color":[{"mask-conic-to":Q()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:O()}],"mask-repeat":[{mask:K()}],"mask-size":[{mask:ge()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",Xe,ke]}],filter:[{filter:["","none",Xe,ke]}],blur:[{blur:et()}],brightness:[{brightness:[_t,Xe,ke]}],contrast:[{contrast:[_t,Xe,ke]}],"drop-shadow":[{"drop-shadow":["","none",x,Uu,Lu]}],"drop-shadow-color":[{"drop-shadow":Q()}],grayscale:[{grayscale:["",_t,Xe,ke]}],"hue-rotate":[{"hue-rotate":[_t,Xe,ke]}],invert:[{invert:["",_t,Xe,ke]}],saturate:[{saturate:[_t,Xe,ke]}],sepia:[{sepia:["",_t,Xe,ke]}],"backdrop-filter":[{"backdrop-filter":["","none",Xe,ke]}],"backdrop-blur":[{"backdrop-blur":et()}],"backdrop-brightness":[{"backdrop-brightness":[_t,Xe,ke]}],"backdrop-contrast":[{"backdrop-contrast":[_t,Xe,ke]}],"backdrop-grayscale":[{"backdrop-grayscale":["",_t,Xe,ke]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[_t,Xe,ke]}],"backdrop-invert":[{"backdrop-invert":["",_t,Xe,ke]}],"backdrop-opacity":[{"backdrop-opacity":[_t,Xe,ke]}],"backdrop-saturate":[{"backdrop-saturate":[_t,Xe,ke]}],"backdrop-sepia":[{"backdrop-sepia":["",_t,Xe,ke]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":E()}],"border-spacing-x":[{"border-spacing-x":E()}],"border-spacing-y":[{"border-spacing-y":E()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",Xe,ke]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[_t,"initial",Xe,ke]}],ease:[{ease:["linear","initial",y,Xe,ke]}],delay:[{delay:[_t,Xe,ke]}],animate:[{animate:["none",C,Xe,ke]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[A,Xe,ke]}],"perspective-origin":[{"perspective-origin":F()}],rotate:[{rotate:Ze()}],"rotate-x":[{"rotate-x":Ze()}],"rotate-y":[{"rotate-y":Ze()}],"rotate-z":[{"rotate-z":Ze()}],scale:[{scale:Nt()}],"scale-x":[{"scale-x":Nt()}],"scale-y":[{"scale-y":Nt()}],"scale-z":[{"scale-z":Nt()}],"scale-3d":["scale-3d"],skew:[{skew:lt()}],"skew-x":[{"skew-x":lt()}],"skew-y":[{"skew-y":lt()}],transform:[{transform:[Xe,ke,"","none","gpu","cpu"]}],"transform-origin":[{origin:F()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:ht()}],"translate-x":[{"translate-x":ht()}],"translate-y":[{"translate-y":ht()}],"translate-z":[{"translate-z":ht()}],"translate-none":["translate-none"],zoom:[{zoom:[ta,Xe,ke]}],accent:[{accent:Q()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:Q()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",Xe,ke]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scrollbar-thumb-color":[{"scrollbar-thumb":Q()}],"scrollbar-track-color":[{"scrollbar-track":Q()}],"scrollbar-gutter":[{"scrollbar-gutter":["auto","stable","both"]}],"scrollbar-w":[{scrollbar:["auto","thin","none"]}],"scroll-m":[{"scroll-m":E()}],"scroll-mx":[{"scroll-mx":E()}],"scroll-my":[{"scroll-my":E()}],"scroll-ms":[{"scroll-ms":E()}],"scroll-me":[{"scroll-me":E()}],"scroll-mbs":[{"scroll-mbs":E()}],"scroll-mbe":[{"scroll-mbe":E()}],"scroll-mt":[{"scroll-mt":E()}],"scroll-mr":[{"scroll-mr":E()}],"scroll-mb":[{"scroll-mb":E()}],"scroll-ml":[{"scroll-ml":E()}],"scroll-p":[{"scroll-p":E()}],"scroll-px":[{"scroll-px":E()}],"scroll-py":[{"scroll-py":E()}],"scroll-ps":[{"scroll-ps":E()}],"scroll-pe":[{"scroll-pe":E()}],"scroll-pbs":[{"scroll-pbs":E()}],"scroll-pbe":[{"scroll-pbe":E()}],"scroll-pt":[{"scroll-pt":E()}],"scroll-pr":[{"scroll-pr":E()}],"scroll-pb":[{"scroll-pb":E()}],"scroll-pl":[{"scroll-pl":E()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",Xe,ke]}],fill:[{fill:["none",...Q()]}],"stroke-w":[{stroke:[_t,Pl,or,Gx]}],stroke:[{stroke:["none",...Q()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{"container-named":["container-type"],overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","inset-bs","inset-be","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pbs","pbe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mbs","mbe","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-bs","border-w-be","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-bs","border-color-be","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mbs","scroll-mbe","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pbs","scroll-pbe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},postfixLookupClassGroups:["container-type"],orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},T3=n3(E3);function za(...r){return T3(O2(r))}function A3(){const[r,e]=_n.useState({f1:!0,f2:!0,f3:!0,f7:!0}),[n,a]=_n.useState(!1),[o,c]=_n.useState(null),[u,h]=_n.useState(null),[p,d]=_n.useState(!1),[g,_]=_n.useState(!1),[v,x]=_n.useState(!1),M=Object.values(r).filter(Boolean).length,A=M===1,S=D=>{e(I=>({...I,[D]:!I[D]})),a(!1)},y=()=>{const D=M===4;e({f1:!D,f2:!D,f3:!D,f7:!D}),a(!1)},C=Object.entries(r).find(([D,I])=>I),L=A&&C?C[0]:null,U=()=>{window.dispatchEvent(new CustomEvent("ar-action-place",{detail:{system:o}}))},F=()=>{window.dispatchEvent(new CustomEvent("ar-action-clear"))};return _n.useEffect(()=>{const D=B=>h(B.detail.id),I=B=>d(B.detail.visible),E=B=>{_(B.detail.canUndo),x(B.detail.canRedo)};return window.addEventListener("ar-model-selected",D),window.addEventListener("ar-reticle-update",I),window.addEventListener("ar-history-update",E),()=>{window.removeEventListener("ar-model-selected",D),window.removeEventListener("ar-reticle-update",I),window.removeEventListener("ar-history-update",E)}},[]),ct.jsxs("div",{className:"w-full h-full bg-slate-900 text-slate-200 font-sans flex items-center justify-center overflow-hidden absolute inset-0",children:[ct.jsx(r2,{floors:r,teleportedFloor:n?L:null,activeSystem:o}),ct.jsxs("div",{id:"ar-overlay",className:"absolute inset-0 pointer-events-none flex flex-col justify-between p-4 z-20",children:[ct.jsxs("div",{className:"flex flex-col gap-4 pointer-events-auto w-full max-w-3xl mx-auto",children:[ct.jsxs("div",{className:"bg-slate-800/90 backdrop-blur-md rounded-2xl p-3 border border-slate-700/50 flex justify-between items-center shadow-lg",children:[ct.jsxs("div",{className:"flex items-center gap-3",children:[ct.jsx("div",{className:"w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.8)]"}),ct.jsx("span",{className:"text-xs font-bold tracking-wider uppercase text-slate-300",children:"AR Active"})]}),ct.jsx("div",{className:"text-xs font-mono text-slate-400",children:n?`TELEPORTED: ${L==null?void 0:L.toUpperCase()}`:"OVERVIEW"})]}),ct.jsx("div",{className:"flex justify-center gap-2",children:[{id:"HVAC",color:"bg-blue-500",activeBg:"bg-blue-500/20",border:"border-blue-500/50",icon:N2},{id:"Plumb",color:"bg-red-500",activeBg:"bg-red-500/20",border:"border-red-500/50",icon:_2},{id:"Elec",color:"bg-yellow-500",activeBg:"bg-yellow-500/20",border:"border-yellow-500/50",icon:U2},{id:"Fire",color:"bg-orange-500",activeBg:"bg-orange-500/20",border:"border-orange-500/50",icon:x2}].map(D=>{const I=o===D.id,E=D.icon;return ct.jsxs("button",{onClick:()=>c(I?null:D.id),className:za("flex flex-col items-center justify-center p-3 rounded-2xl border transition-all duration-200","w-16 h-16 shadow-lg backdrop-blur-md",I?za(D.activeBg,D.border,"shadow-[0_0_15px_rgba(0,0,0,0.2)]"):"bg-slate-800/80 border-slate-700/50 text-slate-400 hover:bg-slate-700"),children:[ct.jsx(E,{size:20,className:I?D.color.replace("bg-","text-"):""}),ct.jsx("span",{className:za("text-[9px] font-bold uppercase mt-1.5",I?"text-white":""),children:D.id})]},D.id)})})]}),ct.jsx("div",{className:"absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-2 pointer-events-auto",children:ct.jsxs("div",{className:"bg-slate-800/90 backdrop-blur-md rounded-2xl p-2 border border-slate-700/50 flex flex-col gap-2 shadow-xl",children:[ct.jsxs("button",{onClick:y,className:za("w-12 h-12 rounded-xl flex flex-col items-center justify-center transition-all",M===4?"bg-emerald-500 text-slate-900 font-bold":"bg-slate-700 text-slate-300"),children:[ct.jsx(S2,{size:18}),ct.jsx("span",{className:"text-[9px] uppercase mt-0.5",children:"All"})]}),ct.jsx("div",{className:"w-8 h-px bg-slate-700 mx-auto"}),["f7","f3","f2","f1"].map(D=>{const I=r[D];return ct.jsx("button",{onClick:()=>S(D),className:za("w-12 h-12 rounded-xl flex items-center justify-center font-bold text-sm transition-all",I?"bg-emerald-500 text-slate-900":"bg-slate-700 text-slate-300"),children:D.toUpperCase()},D)}),ct.jsx("div",{className:"w-8 h-px bg-slate-700 mx-auto"}),ct.jsxs("button",{onClick:()=>A&&a(!n),disabled:!A,className:za("w-12 h-12 rounded-xl flex flex-col items-center justify-center transition-all",n?"bg-amber-500 text-slate-900 shadow-[0_0_15px_rgba(245,158,11,0.5)]":A?"bg-slate-700 text-white hover:bg-slate-600":"opacity-30 cursor-not-allowed bg-slate-800 text-slate-500 text-slate-500"),children:[n?ct.jsx(M2,{size:18}):ct.jsx(h2,{size:18}),ct.jsx("span",{className:"text-[9px] uppercase mt-0.5",children:n?"Back":"TP ↓"})]})]})}),ct.jsx("div",{className:"pointer-events-auto flex justify-center w-full max-w-xl mx-auto mb-16",children:ct.jsxs("div",{className:"bg-slate-800/90 backdrop-blur-md rounded-2xl p-2 border border-slate-700/50 flex gap-2 shadow-xl items-center",children:[ct.jsxs("button",{onClick:U,disabled:!p,className:za("px-6 py-4 rounded-xl flex items-center gap-2 font-bold uppercase transition-all",p?"bg-emerald-500 text-slate-900 hover:bg-emerald-400":"bg-slate-800 text-slate-600 cursor-not-allowed border-2 border-slate-700 border-dashed"),children:[ct.jsx(T2,{size:20}),ct.jsx("span",{children:o?`Place ${o}`:"Place Bldg"})]}),ct.jsx("div",{className:"w-px h-10 bg-slate-700 mx-1"}),ct.jsxs("button",{onClick:()=>window.dispatchEvent(new CustomEvent("ar-action-undo")),disabled:!g,className:za("w-14 h-14 rounded-xl flex flex-col items-center justify-center transition-all",g?"bg-slate-700 text-white hover:bg-slate-600":"opacity-30 bg-slate-800"),children:[ct.jsx(C2,{size:18}),ct.jsx("span",{className:"text-[9px] uppercase mt-1",children:"Undo"})]}),ct.jsxs("button",{onClick:()=>window.dispatchEvent(new CustomEvent("ar-action-redo")),disabled:!v,className:za("w-14 h-14 rounded-xl flex flex-col items-center justify-center transition-all",v?"bg-slate-700 text-white hover:bg-slate-600":"opacity-30 bg-slate-800"),children:[ct.jsx(R2,{size:18}),ct.jsx("span",{className:"text-[9px] uppercase mt-1",children:"Redo"})]}),ct.jsxs("button",{onClick:F,className:"w-14 h-14 rounded-xl flex flex-col items-center justify-center text-slate-400 hover:bg-slate-700 transition-all bg-slate-800/50",children:[ct.jsx(m2,{size:18}),ct.jsx("span",{className:"text-[9px] uppercase mt-1",children:"Clr"})]})]})})]})]})}lM.createRoot(document.getElementById("root")).render(ct.jsx(_n.StrictMode,{children:ct.jsx(A3,{})}));
