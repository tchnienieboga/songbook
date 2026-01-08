(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))s(c);new MutationObserver(c=>{for(const d of c)if(d.type==="childList")for(const f of d.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function r(c){const d={};return c.integrity&&(d.integrity=c.integrity),c.referrerPolicy&&(d.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?d.credentials="include":c.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function s(c){if(c.ep)return;c.ep=!0;const d=r(c);fetch(c.href,d)}})();function wo(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var fl={exports:{}},Ta={},yl={exports:{}},le={};var zm;function sp(){if(zm)return le;zm=1;var a=Symbol.for("react.element"),t=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),d=Symbol.for("react.provider"),f=Symbol.for("react.context"),y=Symbol.for("react.forward_ref"),w=Symbol.for("react.suspense"),j=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),D=Symbol.iterator;function A(g){return g===null||typeof g!="object"?null:(g=D&&g[D]||g["@@iterator"],typeof g=="function"?g:null)}var O={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},L=Object.assign,F={};function I(g,E,q){this.props=g,this.context=E,this.refs=F,this.updater=q||O}I.prototype.isReactComponent={},I.prototype.setState=function(g,E){if(typeof g!="object"&&typeof g!="function"&&g!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,g,E,"setState")},I.prototype.forceUpdate=function(g){this.updater.enqueueForceUpdate(this,g,"forceUpdate")};function J(){}J.prototype=I.prototype;function X(g,E,q){this.props=g,this.context=E,this.refs=F,this.updater=q||O}var te=X.prototype=new J;te.constructor=X,L(te,I.prototype),te.isPureReactComponent=!0;var ae=Array.isArray,U=Object.prototype.hasOwnProperty,oe={current:null},ce={key:!0,ref:!0,__self:!0,__source:!0};function Pe(g,E,q){var ie,se={},ue=null,pe=null;if(E!=null)for(ie in E.ref!==void 0&&(pe=E.ref),E.key!==void 0&&(ue=""+E.key),E)U.call(E,ie)&&!ce.hasOwnProperty(ie)&&(se[ie]=E[ie]);var me=arguments.length-2;if(me===1)se.children=q;else if(1<me){for(var he=Array(me),Fe=0;Fe<me;Fe++)he[Fe]=arguments[Fe+2];se.children=he}if(g&&g.defaultProps)for(ie in me=g.defaultProps,me)se[ie]===void 0&&(se[ie]=me[ie]);return{$$typeof:a,type:g,key:ue,ref:pe,props:se,_owner:oe.current}}function Ye(g,E){return{$$typeof:a,type:g.type,key:E,ref:g.ref,props:g.props,_owner:g._owner}}function Ue(g){return typeof g=="object"&&g!==null&&g.$$typeof===a}function cn(g){var E={"=":"=0",":":"=2"};return"$"+g.replace(/[=:]/g,function(q){return E[q]})}var ee=/\/+/g;function ge(g,E){return typeof g=="object"&&g!==null&&g.key!=null?cn(""+g.key):E.toString(36)}function de(g,E,q,ie,se){var ue=typeof g;(ue==="undefined"||ue==="boolean")&&(g=null);var pe=!1;if(g===null)pe=!0;else switch(ue){case"string":case"number":pe=!0;break;case"object":switch(g.$$typeof){case a:case t:pe=!0}}if(pe)return pe=g,se=se(pe),g=ie===""?"."+ge(pe,0):ie,ae(se)?(q="",g!=null&&(q=g.replace(ee,"$&/")+"/"),de(se,E,q,"",function(Fe){return Fe})):se!=null&&(Ue(se)&&(se=Ye(se,q+(!se.key||pe&&pe.key===se.key?"":(""+se.key).replace(ee,"$&/")+"/")+g)),E.push(se)),1;if(pe=0,ie=ie===""?".":ie+":",ae(g))for(var me=0;me<g.length;me++){ue=g[me];var he=ie+ge(ue,me);pe+=de(ue,E,q,he,se)}else if(he=A(g),typeof he=="function")for(g=he.call(g),me=0;!(ue=g.next()).done;)ue=ue.value,he=ie+ge(ue,me++),pe+=de(ue,E,q,he,se);else if(ue==="object")throw E=String(g),Error("Objects are not valid as a React child (found: "+(E==="[object Object]"?"object with keys {"+Object.keys(g).join(", ")+"}":E)+"). If you meant to render a collection of children, use an array instead.");return pe}function Be(g,E,q){if(g==null)return g;var ie=[],se=0;return de(g,ie,"","",function(ue){return E.call(q,ue,se++)}),ie}function je(g){if(g._status===-1){var E=g._result;E=E(),E.then(function(q){(g._status===0||g._status===-1)&&(g._status=1,g._result=q)},function(q){(g._status===0||g._status===-1)&&(g._status=2,g._result=q)}),g._status===-1&&(g._status=0,g._result=E)}if(g._status===1)return g._result.default;throw g._result}var ze={current:null},G={transition:null},$={ReactCurrentDispatcher:ze,ReactCurrentBatchConfig:G,ReactCurrentOwner:oe};function _(){throw Error("act(...) is not supported in production builds of React.")}return le.Children={map:Be,forEach:function(g,E,q){Be(g,function(){E.apply(this,arguments)},q)},count:function(g){var E=0;return Be(g,function(){E++}),E},toArray:function(g){return Be(g,function(E){return E})||[]},only:function(g){if(!Ue(g))throw Error("React.Children.only expected to receive a single React element child.");return g}},le.Component=I,le.Fragment=r,le.Profiler=c,le.PureComponent=X,le.StrictMode=s,le.Suspense=w,le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$,le.act=_,le.cloneElement=function(g,E,q){if(g==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+g+".");var ie=L({},g.props),se=g.key,ue=g.ref,pe=g._owner;if(E!=null){if(E.ref!==void 0&&(ue=E.ref,pe=oe.current),E.key!==void 0&&(se=""+E.key),g.type&&g.type.defaultProps)var me=g.type.defaultProps;for(he in E)U.call(E,he)&&!ce.hasOwnProperty(he)&&(ie[he]=E[he]===void 0&&me!==void 0?me[he]:E[he])}var he=arguments.length-2;if(he===1)ie.children=q;else if(1<he){me=Array(he);for(var Fe=0;Fe<he;Fe++)me[Fe]=arguments[Fe+2];ie.children=me}return{$$typeof:a,type:g.type,key:se,ref:ue,props:ie,_owner:pe}},le.createContext=function(g){return g={$$typeof:f,_currentValue:g,_currentValue2:g,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},g.Provider={$$typeof:d,_context:g},g.Consumer=g},le.createElement=Pe,le.createFactory=function(g){var E=Pe.bind(null,g);return E.type=g,E},le.createRef=function(){return{current:null}},le.forwardRef=function(g){return{$$typeof:y,render:g}},le.isValidElement=Ue,le.lazy=function(g){return{$$typeof:v,_payload:{_status:-1,_result:g},_init:je}},le.memo=function(g,E){return{$$typeof:j,type:g,compare:E===void 0?null:E}},le.startTransition=function(g){var E=G.transition;G.transition={};try{g()}finally{G.transition=E}},le.unstable_act=_,le.useCallback=function(g,E){return ze.current.useCallback(g,E)},le.useContext=function(g){return ze.current.useContext(g)},le.useDebugValue=function(){},le.useDeferredValue=function(g){return ze.current.useDeferredValue(g)},le.useEffect=function(g,E){return ze.current.useEffect(g,E)},le.useId=function(){return ze.current.useId()},le.useImperativeHandle=function(g,E,q){return ze.current.useImperativeHandle(g,E,q)},le.useInsertionEffect=function(g,E){return ze.current.useInsertionEffect(g,E)},le.useLayoutEffect=function(g,E){return ze.current.useLayoutEffect(g,E)},le.useMemo=function(g,E){return ze.current.useMemo(g,E)},le.useReducer=function(g,E,q){return ze.current.useReducer(g,E,q)},le.useRef=function(g){return ze.current.useRef(g)},le.useState=function(g){return ze.current.useState(g)},le.useSyncExternalStore=function(g,E,q){return ze.current.useSyncExternalStore(g,E,q)},le.useTransition=function(){return ze.current.useTransition()},le.version="18.3.1",le}var wm;function lu(){return wm||(wm=1,yl.exports=sp()),yl.exports}var pm;function lp(){if(pm)return Ta;pm=1;var a=lu(),t=Symbol.for("react.element"),r=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,c=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function f(y,w,j){var v,D={},A=null,O=null;j!==void 0&&(A=""+j),w.key!==void 0&&(A=""+w.key),w.ref!==void 0&&(O=w.ref);for(v in w)s.call(w,v)&&!d.hasOwnProperty(v)&&(D[v]=w[v]);if(y&&y.defaultProps)for(v in w=y.defaultProps,w)D[v]===void 0&&(D[v]=w[v]);return{$$typeof:t,type:y,key:A,ref:O,props:D,_owner:c.current}}return Ta.Fragment=r,Ta.jsx=f,Ta.jsxs=f,Ta}var hm;function up(){return hm||(hm=1,fl.exports=lp()),fl.exports}var x=up(),P=lu();const zn=wo(P),cp=({chord:a})=>x.jsx("span",{className:"sb-chord",children:`${a} `});var zl={exports:{}};var gm;function dp(){return gm||(gm=1,(function(a){(function(){var t={}.hasOwnProperty;function r(){for(var d="",f=0;f<arguments.length;f++){var y=arguments[f];y&&(d=c(d,s(y)))}return d}function s(d){if(typeof d=="string"||typeof d=="number")return d;if(typeof d!="object")return"";if(Array.isArray(d))return r.apply(null,d);if(d.toString!==Object.prototype.toString&&!d.toString.toString().includes("[native code]"))return d.toString();var f="";for(var y in d)t.call(d,y)&&d[y]&&(f=c(f,y));return f}function c(d,f){return f?d?d+" "+f:d+f:d}a.exports?(r.default=r,a.exports=r):window.classNames=r})()})(zl)),zl.exports}var mp=dp();const Ke=wo(mp),fp=({song:a,chordsShown:t,starredCount:r})=>x.jsxs(x.Fragment,{children:[x.jsxs("div",{className:"row songtitle mt-1 mb-1",children:[x.jsxs("div",{className:Ke("col-10",{"sb-starred-song":a.starred}),children:[a.number,". ",a.title]}),x.jsx("div",{className:"col-2 sb-star-info sb-lyrics",children:a.starred?`${a.starredNumber}/${r}`:x.jsx(x.Fragment,{children:" "})})]}),a.body.map(({lyrics:s,chords:c},d)=>x.jsxs("div",{className:"row",children:[x.jsx("div",{className:"col",children:s||x.jsx("br",{})}),t&&c.length>0&&x.jsx("div",{className:"col-4",children:c.map((f,y)=>x.jsx(cp,{chord:f},y))})]},`songline${d}`))]});function yp(a,t){if(a==null)return{};var r={};for(var s in a)if({}.hasOwnProperty.call(a,s)){if(t.indexOf(s)!==-1)continue;r[s]=a[s]}return r}function Ml(a,t){return Ml=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,s){return r.__proto__=s,r},Ml(a,t)}function zp(a,t){a.prototype=Object.create(t.prototype),a.prototype.constructor=a,Ml(a,t)}const wp=["xxl","xl","lg","md","sm","xs"],pp="xs",uu=P.createContext({prefixes:{},breakpoints:wp,minBreakpoint:pp}),{Consumer:qb,Provider:e1}=uu;function nt(a,t){const{prefixes:r}=P.useContext(uu);return a||r[t]||t}function hp(){const{dir:a}=P.useContext(uu);return a==="rtl"}function po(a){return a&&a.ownerDocument||document}function gp(a){var t=po(a);return t&&t.defaultView||window}function jp(a,t){return gp(a).getComputedStyle(a,t)}var kp=/([A-Z])/g;function vp(a){return a.replace(kp,"-$1").toLowerCase()}var bp=/^ms-/;function Xr(a){return vp(a).replace(bp,"-ms-")}var Cp=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;function Dp(a){return!!(a&&Cp.test(a))}function Xi(a,t){var r="",s="";if(typeof t=="string")return a.style.getPropertyValue(Xr(t))||jp(a).getPropertyValue(Xr(t));Object.keys(t).forEach(function(c){var d=t[c];!d&&d!==0?a.style.removeProperty(Xr(c)):Dp(c)?s+=c+"("+d+") ":r+=Xr(c)+": "+d+";"}),s&&(r+="transform: "+s+";"),a.style.cssText+=";"+r}var wl={exports:{}},pl,jm;function Ap(){if(jm)return pl;jm=1;var a="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return pl=a,pl}var hl,km;function Ep(){if(km)return hl;km=1;var a=Ap();function t(){}function r(){}return r.resetWarningCache=t,hl=function(){function s(f,y,w,j,v,D){if(D!==a){var A=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw A.name="Invariant Violation",A}}s.isRequired=s;function c(){return s}var d={array:s,bool:s,func:s,number:s,object:s,string:s,symbol:s,any:s,arrayOf:c,element:s,elementType:s,instanceOf:c,node:s,objectOf:c,oneOf:c,oneOfType:c,shape:c,exact:c,checkPropTypes:r,resetWarningCache:t};return d.PropTypes=d,d},hl}var vm;function Pp(){return vm||(vm=1,wl.exports=Ep()()),wl.exports}Pp();var gl={exports:{}},un={},jl={exports:{}},kl={};var bm;function Tp(){return bm||(bm=1,(function(a){function t(G,$){var _=G.length;G.push($);e:for(;0<_;){var g=_-1>>>1,E=G[g];if(0<c(E,$))G[g]=$,G[_]=E,_=g;else break e}}function r(G){return G.length===0?null:G[0]}function s(G){if(G.length===0)return null;var $=G[0],_=G.pop();if(_!==$){G[0]=_;e:for(var g=0,E=G.length,q=E>>>1;g<q;){var ie=2*(g+1)-1,se=G[ie],ue=ie+1,pe=G[ue];if(0>c(se,_))ue<E&&0>c(pe,se)?(G[g]=pe,G[ue]=_,g=ue):(G[g]=se,G[ie]=_,g=ie);else if(ue<E&&0>c(pe,_))G[g]=pe,G[ue]=_,g=ue;else break e}}return $}function c(G,$){var _=G.sortIndex-$.sortIndex;return _!==0?_:G.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var d=performance;a.unstable_now=function(){return d.now()}}else{var f=Date,y=f.now();a.unstable_now=function(){return f.now()-y}}var w=[],j=[],v=1,D=null,A=3,O=!1,L=!1,F=!1,I=typeof setTimeout=="function"?setTimeout:null,J=typeof clearTimeout=="function"?clearTimeout:null,X=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function te(G){for(var $=r(j);$!==null;){if($.callback===null)s(j);else if($.startTime<=G)s(j),$.sortIndex=$.expirationTime,t(w,$);else break;$=r(j)}}function ae(G){if(F=!1,te(G),!L)if(r(w)!==null)L=!0,je(U);else{var $=r(j);$!==null&&ze(ae,$.startTime-G)}}function U(G,$){L=!1,F&&(F=!1,J(Pe),Pe=-1),O=!0;var _=A;try{for(te($),D=r(w);D!==null&&(!(D.expirationTime>$)||G&&!cn());){var g=D.callback;if(typeof g=="function"){D.callback=null,A=D.priorityLevel;var E=g(D.expirationTime<=$);$=a.unstable_now(),typeof E=="function"?D.callback=E:D===r(w)&&s(w),te($)}else s(w);D=r(w)}if(D!==null)var q=!0;else{var ie=r(j);ie!==null&&ze(ae,ie.startTime-$),q=!1}return q}finally{D=null,A=_,O=!1}}var oe=!1,ce=null,Pe=-1,Ye=5,Ue=-1;function cn(){return!(a.unstable_now()-Ue<Ye)}function ee(){if(ce!==null){var G=a.unstable_now();Ue=G;var $=!0;try{$=ce(!0,G)}finally{$?ge():(oe=!1,ce=null)}}else oe=!1}var ge;if(typeof X=="function")ge=function(){X(ee)};else if(typeof MessageChannel<"u"){var de=new MessageChannel,Be=de.port2;de.port1.onmessage=ee,ge=function(){Be.postMessage(null)}}else ge=function(){I(ee,0)};function je(G){ce=G,oe||(oe=!0,ge())}function ze(G,$){Pe=I(function(){G(a.unstable_now())},$)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(G){G.callback=null},a.unstable_continueExecution=function(){L||O||(L=!0,je(U))},a.unstable_forceFrameRate=function(G){0>G||125<G?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ye=0<G?Math.floor(1e3/G):5},a.unstable_getCurrentPriorityLevel=function(){return A},a.unstable_getFirstCallbackNode=function(){return r(w)},a.unstable_next=function(G){switch(A){case 1:case 2:case 3:var $=3;break;default:$=A}var _=A;A=$;try{return G()}finally{A=_}},a.unstable_pauseExecution=function(){},a.unstable_requestPaint=function(){},a.unstable_runWithPriority=function(G,$){switch(G){case 1:case 2:case 3:case 4:case 5:break;default:G=3}var _=A;A=G;try{return $()}finally{A=_}},a.unstable_scheduleCallback=function(G,$,_){var g=a.unstable_now();switch(typeof _=="object"&&_!==null?(_=_.delay,_=typeof _=="number"&&0<_?g+_:g):_=g,G){case 1:var E=-1;break;case 2:E=250;break;case 5:E=1073741823;break;case 4:E=1e4;break;default:E=5e3}return E=_+E,G={id:v++,callback:$,priorityLevel:G,startTime:_,expirationTime:E,sortIndex:-1},_>g?(G.sortIndex=_,t(j,G),r(w)===null&&G===r(j)&&(F?(J(Pe),Pe=-1):F=!0,ze(ae,_-g))):(G.sortIndex=E,t(w,G),L||O||(L=!0,je(U))),G},a.unstable_shouldYield=cn,a.unstable_wrapCallback=function(G){var $=A;return function(){var _=A;A=$;try{return G.apply(this,arguments)}finally{A=_}}}})(kl)),kl}var Cm;function Sp(){return Cm||(Cm=1,jl.exports=Tp()),jl.exports}var Dm;function xp(){if(Dm)return un;Dm=1;var a=lu(),t=Sp();function r(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,i=1;i<arguments.length;i++)n+="&args[]="+encodeURIComponent(arguments[i]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,c={};function d(e,n){f(e,n),f(e+"Capture",n)}function f(e,n){for(c[e]=n,e=0;e<n.length;e++)s.add(n[e])}var y=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),w=Object.prototype.hasOwnProperty,j=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},D={};function A(e){return w.call(D,e)?!0:w.call(v,e)?!1:j.test(e)?D[e]=!0:(v[e]=!0,!1)}function O(e,n,i,o){if(i!==null&&i.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return o?!1:i!==null?!i.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function L(e,n,i,o){if(n===null||typeof n>"u"||O(e,n,i,o))return!0;if(o)return!1;if(i!==null)switch(i.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function F(e,n,i,o,l,u,m){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=o,this.attributeNamespace=l,this.mustUseProperty=i,this.propertyName=e,this.type=n,this.sanitizeURL=u,this.removeEmptyString=m}var I={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){I[e]=new F(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];I[n]=new F(n,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){I[e]=new F(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){I[e]=new F(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){I[e]=new F(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){I[e]=new F(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){I[e]=new F(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){I[e]=new F(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){I[e]=new F(e,5,!1,e.toLowerCase(),null,!1,!1)});var J=/[\-:]([a-z])/g;function X(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(J,X);I[n]=new F(n,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(J,X);I[n]=new F(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(J,X);I[n]=new F(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){I[e]=new F(e,1,!1,e.toLowerCase(),null,!1,!1)}),I.xlinkHref=new F("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){I[e]=new F(e,1,!1,e.toLowerCase(),null,!0,!0)});function te(e,n,i,o){var l=I.hasOwnProperty(n)?I[n]:null;(l!==null?l.type!==0:o||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(L(n,i,l,o)&&(i=null),o||l===null?A(n)&&(i===null?e.removeAttribute(n):e.setAttribute(n,""+i)):l.mustUseProperty?e[l.propertyName]=i===null?l.type===3?!1:"":i:(n=l.attributeName,o=l.attributeNamespace,i===null?e.removeAttribute(n):(l=l.type,i=l===3||l===4&&i===!0?"":""+i,o?e.setAttributeNS(o,n,i):e.setAttribute(n,i))))}var ae=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,U=Symbol.for("react.element"),oe=Symbol.for("react.portal"),ce=Symbol.for("react.fragment"),Pe=Symbol.for("react.strict_mode"),Ye=Symbol.for("react.profiler"),Ue=Symbol.for("react.provider"),cn=Symbol.for("react.context"),ee=Symbol.for("react.forward_ref"),ge=Symbol.for("react.suspense"),de=Symbol.for("react.suspense_list"),Be=Symbol.for("react.memo"),je=Symbol.for("react.lazy"),ze=Symbol.for("react.offscreen"),G=Symbol.iterator;function $(e){return e===null||typeof e!="object"?null:(e=G&&e[G]||e["@@iterator"],typeof e=="function"?e:null)}var _=Object.assign,g;function E(e){if(g===void 0)try{throw Error()}catch(i){var n=i.stack.trim().match(/\n( *(at )?)/);g=n&&n[1]||""}return`
`+g+e}var q=!1;function ie(e,n){if(!e||q)return"";q=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(C){var o=C}Reflect.construct(e,[],n)}else{try{n.call()}catch(C){o=C}e.call(n.prototype)}else{try{throw Error()}catch(C){o=C}e()}}catch(C){if(C&&o&&typeof C.stack=="string"){for(var l=C.stack.split(`
`),u=o.stack.split(`
`),m=l.length-1,z=u.length-1;1<=m&&0<=z&&l[m]!==u[z];)z--;for(;1<=m&&0<=z;m--,z--)if(l[m]!==u[z]){if(m!==1||z!==1)do if(m--,z--,0>z||l[m]!==u[z]){var p=`
`+l[m].replace(" at new "," at ");return e.displayName&&p.includes("<anonymous>")&&(p=p.replace("<anonymous>",e.displayName)),p}while(1<=m&&0<=z);break}}}finally{q=!1,Error.prepareStackTrace=i}return(e=e?e.displayName||e.name:"")?E(e):""}function se(e){switch(e.tag){case 5:return E(e.type);case 16:return E("Lazy");case 13:return E("Suspense");case 19:return E("SuspenseList");case 0:case 2:case 15:return e=ie(e.type,!1),e;case 11:return e=ie(e.type.render,!1),e;case 1:return e=ie(e.type,!0),e;default:return""}}function ue(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ce:return"Fragment";case oe:return"Portal";case Ye:return"Profiler";case Pe:return"StrictMode";case ge:return"Suspense";case de:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case cn:return(e.displayName||"Context")+".Consumer";case Ue:return(e._context.displayName||"Context")+".Provider";case ee:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Be:return n=e.displayName||null,n!==null?n:ue(e.type)||"Memo";case je:n=e._payload,e=e._init;try{return ue(e(n))}catch{}}return null}function pe(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ue(n);case 8:return n===Pe?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function me(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function he(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Fe(e){var n=he(e)?"checked":"value",i=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),o=""+e[n];if(!e.hasOwnProperty(n)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var l=i.get,u=i.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return l.call(this)},set:function(m){o=""+m,u.call(this,m)}}),Object.defineProperty(e,n,{enumerable:i.enumerable}),{getValue:function(){return o},setValue:function(m){o=""+m},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Wn(e){e._valueTracker||(e._valueTracker=Fe(e))}function Ln(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var i=n.getValue(),o="";return e&&(o=he(e)?e.checked?"true":"false":e.value),e=o,e!==i?(n.setValue(e),!0):!1}function Nn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Bn(e,n){var i=n.checked;return _({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:i??e._wrapperState.initialChecked})}function ve(e,n){var i=n.defaultValue==null?"":n.defaultValue,o=n.checked!=null?n.checked:n.defaultChecked;i=me(n.value!=null?n.value:i),e._wrapperState={initialChecked:o,initialValue:i,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function Si(e,n){n=n.checked,n!=null&&te(e,"checked",n,!1)}function Hn(e,n){Si(e,n);var i=me(n.value),o=n.type;if(i!=null)o==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+i):e.value!==""+i&&(e.value=""+i);else if(o==="submit"||o==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?Wt(e,n.type,i):n.hasOwnProperty("defaultValue")&&Wt(e,n.type,me(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function Wa(e,n,i){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var o=n.type;if(!(o!=="submit"&&o!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,i||n===e.value||(e.value=n),e.defaultValue=n}i=e.name,i!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,i!==""&&(e.name=i)}function Wt(e,n,i){(n!=="number"||Nn(e.ownerDocument)!==e)&&(i==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+i&&(e.defaultValue=""+i))}var xi=Array.isArray;function oi(e,n,i,o){if(e=e.options,n){n={};for(var l=0;l<i.length;l++)n["$"+i[l]]=!0;for(i=0;i<e.length;i++)l=n.hasOwnProperty("$"+e[i].value),e[i].selected!==l&&(e[i].selected=l),l&&o&&(e[i].defaultSelected=!0)}else{for(i=""+me(i),n=null,l=0;l<e.length;l++){if(e[l].value===i){e[l].selected=!0,o&&(e[l].defaultSelected=!0);return}n!==null||e[l].disabled||(n=e[l])}n!==null&&(n.selected=!0)}}function Lt(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(r(91));return _({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function La(e,n){var i=n.value;if(i==null){if(i=n.children,n=n.defaultValue,i!=null){if(n!=null)throw Error(r(92));if(xi(i)){if(1<i.length)throw Error(r(93));i=i[0]}n=i}n==null&&(n=""),i=n}e._wrapperState={initialValue:me(i)}}function Ht(e,n){var i=me(n.value),o=me(n.defaultValue);i!=null&&(i=""+i,i!==e.value&&(e.value=i),n.defaultValue==null&&e.defaultValue!==i&&(e.defaultValue=i)),o!=null&&(e.defaultValue=""+o)}function Ha(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function fe(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Rn(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?fe(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Gi,Tu=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,i,o,l){MSApp.execUnsafeLocalFunction(function(){return e(n,i,o,l)})}:e})(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(Gi=Gi||document.createElement("div"),Gi.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=Gi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function Kt(e,n){if(n){var i=e.firstChild;if(i&&i===e.lastChild&&i.nodeType===3){i.nodeValue=n;return}}e.textContent=n}var Ut={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},dz=["Webkit","ms","Moz","O"];Object.keys(Ut).forEach(function(e){dz.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Ut[n]=Ut[e]})});function Su(e,n,i){return n==null||typeof n=="boolean"||n===""?"":i||typeof n!="number"||n===0||Ut.hasOwnProperty(e)&&Ut[e]?(""+n).trim():n+"px"}function xu(e,n){e=e.style;for(var i in n)if(n.hasOwnProperty(i)){var o=i.indexOf("--")===0,l=Su(i,n[i],o);i==="float"&&(i="cssFloat"),o?e.setProperty(i,l):e[i]=l}}var mz=_({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Do(e,n){if(n){if(mz[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(r(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(r(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(r(61))}if(n.style!=null&&typeof n.style!="object")throw Error(r(62))}}function Ao(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Eo=null;function Po(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var To=null,tt=null,at=null;function Gu(e){if(e=ya(e)){if(typeof To!="function")throw Error(r(280));var n=e.stateNode;n&&(n=fr(n),To(e.stateNode,e.type,n))}}function Nu(e){tt?at?at.push(e):at=[e]:tt=e}function Bu(){if(tt){var e=tt,n=at;if(at=tt=null,Gu(e),n)for(e=0;e<n.length;e++)Gu(n[e])}}function Ru(e,n){return e(n)}function Ou(){}var So=!1;function Fu(e,n,i){if(So)return e(n,i);So=!0;try{return Ru(e,n,i)}finally{So=!1,(tt!==null||at!==null)&&(Ou(),Bu())}}function $t(e,n){var i=e.stateNode;if(i===null)return null;var o=fr(i);if(o===null)return null;i=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(i&&typeof i!="function")throw Error(r(231,n,typeof i));return i}var xo=!1;if(y)try{var Zt={};Object.defineProperty(Zt,"passive",{get:function(){xo=!0}}),window.addEventListener("test",Zt,Zt),window.removeEventListener("test",Zt,Zt)}catch{xo=!1}function fz(e,n,i,o,l,u,m,z,p){var C=Array.prototype.slice.call(arguments,3);try{n.apply(i,C)}catch(S){this.onError(S)}}var Vt=!1,Ka=null,Ua=!1,Go=null,yz={onError:function(e){Vt=!0,Ka=e}};function zz(e,n,i,o,l,u,m,z,p){Vt=!1,Ka=null,fz.apply(yz,arguments)}function wz(e,n,i,o,l,u,m,z,p){if(zz.apply(this,arguments),Vt){if(Vt){var C=Ka;Vt=!1,Ka=null}else throw Error(r(198));Ua||(Ua=!0,Go=C)}}function Ni(e){var n=e,i=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(i=n.return),e=n.return;while(e)}return n.tag===3?i:null}function _u(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function Mu(e){if(Ni(e)!==e)throw Error(r(188))}function pz(e){var n=e.alternate;if(!n){if(n=Ni(e),n===null)throw Error(r(188));return n!==e?null:e}for(var i=e,o=n;;){var l=i.return;if(l===null)break;var u=l.alternate;if(u===null){if(o=l.return,o!==null){i=o;continue}break}if(l.child===u.child){for(u=l.child;u;){if(u===i)return Mu(l),e;if(u===o)return Mu(l),n;u=u.sibling}throw Error(r(188))}if(i.return!==o.return)i=l,o=u;else{for(var m=!1,z=l.child;z;){if(z===i){m=!0,i=l,o=u;break}if(z===o){m=!0,o=l,i=u;break}z=z.sibling}if(!m){for(z=u.child;z;){if(z===i){m=!0,i=u,o=l;break}if(z===o){m=!0,o=u,i=l;break}z=z.sibling}if(!m)throw Error(r(189))}}if(i.alternate!==o)throw Error(r(190))}if(i.tag!==3)throw Error(r(188));return i.stateNode.current===i?e:n}function Iu(e){return e=pz(e),e!==null?Ju(e):null}function Ju(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=Ju(e);if(n!==null)return n;e=e.sibling}return null}var Wu=t.unstable_scheduleCallback,Lu=t.unstable_cancelCallback,hz=t.unstable_shouldYield,gz=t.unstable_requestPaint,Re=t.unstable_now,jz=t.unstable_getCurrentPriorityLevel,No=t.unstable_ImmediatePriority,Hu=t.unstable_UserBlockingPriority,$a=t.unstable_NormalPriority,kz=t.unstable_LowPriority,Ku=t.unstable_IdlePriority,Za=null,On=null;function vz(e){if(On&&typeof On.onCommitFiberRoot=="function")try{On.onCommitFiberRoot(Za,e,void 0,(e.current.flags&128)===128)}catch{}}var Cn=Math.clz32?Math.clz32:Dz,bz=Math.log,Cz=Math.LN2;function Dz(e){return e>>>=0,e===0?32:31-(bz(e)/Cz|0)|0}var Va=64,Ya=4194304;function Yt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Qa(e,n){var i=e.pendingLanes;if(i===0)return 0;var o=0,l=e.suspendedLanes,u=e.pingedLanes,m=i&268435455;if(m!==0){var z=m&~l;z!==0?o=Yt(z):(u&=m,u!==0&&(o=Yt(u)))}else m=i&~l,m!==0?o=Yt(m):u!==0&&(o=Yt(u));if(o===0)return 0;if(n!==0&&n!==o&&(n&l)===0&&(l=o&-o,u=n&-n,l>=u||l===16&&(u&4194240)!==0))return n;if((o&4)!==0&&(o|=i&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=o;0<n;)i=31-Cn(n),l=1<<i,o|=e[i],n&=~l;return o}function Az(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ez(e,n){for(var i=e.suspendedLanes,o=e.pingedLanes,l=e.expirationTimes,u=e.pendingLanes;0<u;){var m=31-Cn(u),z=1<<m,p=l[m];p===-1?((z&i)===0||(z&o)!==0)&&(l[m]=Az(z,n)):p<=n&&(e.expiredLanes|=z),u&=~z}}function Bo(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Uu(){var e=Va;return Va<<=1,(Va&4194240)===0&&(Va=64),e}function Ro(e){for(var n=[],i=0;31>i;i++)n.push(e);return n}function Qt(e,n,i){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-Cn(n),e[n]=i}function Pz(e,n){var i=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var o=e.eventTimes;for(e=e.expirationTimes;0<i;){var l=31-Cn(i),u=1<<l;n[l]=0,o[l]=-1,e[l]=-1,i&=~u}}function Oo(e,n){var i=e.entangledLanes|=n;for(e=e.entanglements;i;){var o=31-Cn(i),l=1<<o;l&n|e[o]&n&&(e[o]|=n),i&=~l}}var ke=0;function $u(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Zu,Fo,Vu,Yu,Qu,_o=!1,Xa=[],si=null,li=null,ui=null,Xt=new Map,qt=new Map,ci=[],Tz="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Xu(e,n){switch(e){case"focusin":case"focusout":si=null;break;case"dragenter":case"dragleave":li=null;break;case"mouseover":case"mouseout":ui=null;break;case"pointerover":case"pointerout":Xt.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":qt.delete(n.pointerId)}}function ea(e,n,i,o,l,u){return e===null||e.nativeEvent!==u?(e={blockedOn:n,domEventName:i,eventSystemFlags:o,nativeEvent:u,targetContainers:[l]},n!==null&&(n=ya(n),n!==null&&Fo(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,l!==null&&n.indexOf(l)===-1&&n.push(l),e)}function Sz(e,n,i,o,l){switch(n){case"focusin":return si=ea(si,e,n,i,o,l),!0;case"dragenter":return li=ea(li,e,n,i,o,l),!0;case"mouseover":return ui=ea(ui,e,n,i,o,l),!0;case"pointerover":var u=l.pointerId;return Xt.set(u,ea(Xt.get(u)||null,e,n,i,o,l)),!0;case"gotpointercapture":return u=l.pointerId,qt.set(u,ea(qt.get(u)||null,e,n,i,o,l)),!0}return!1}function qu(e){var n=Bi(e.target);if(n!==null){var i=Ni(n);if(i!==null){if(n=i.tag,n===13){if(n=_u(i),n!==null){e.blockedOn=n,Qu(e.priority,function(){Vu(i)});return}}else if(n===3&&i.stateNode.current.memoizedState.isDehydrated){e.blockedOn=i.tag===3?i.stateNode.containerInfo:null;return}}}e.blockedOn=null}function qa(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var i=Io(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(i===null){i=e.nativeEvent;var o=new i.constructor(i.type,i);Eo=o,i.target.dispatchEvent(o),Eo=null}else return n=ya(i),n!==null&&Fo(n),e.blockedOn=i,!1;n.shift()}return!0}function ec(e,n,i){qa(e)&&i.delete(n)}function xz(){_o=!1,si!==null&&qa(si)&&(si=null),li!==null&&qa(li)&&(li=null),ui!==null&&qa(ui)&&(ui=null),Xt.forEach(ec),qt.forEach(ec)}function na(e,n){e.blockedOn===n&&(e.blockedOn=null,_o||(_o=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,xz)))}function ia(e){function n(l){return na(l,e)}if(0<Xa.length){na(Xa[0],e);for(var i=1;i<Xa.length;i++){var o=Xa[i];o.blockedOn===e&&(o.blockedOn=null)}}for(si!==null&&na(si,e),li!==null&&na(li,e),ui!==null&&na(ui,e),Xt.forEach(n),qt.forEach(n),i=0;i<ci.length;i++)o=ci[i],o.blockedOn===e&&(o.blockedOn=null);for(;0<ci.length&&(i=ci[0],i.blockedOn===null);)qu(i),i.blockedOn===null&&ci.shift()}var rt=ae.ReactCurrentBatchConfig,er=!0;function Gz(e,n,i,o){var l=ke,u=rt.transition;rt.transition=null;try{ke=1,Mo(e,n,i,o)}finally{ke=l,rt.transition=u}}function Nz(e,n,i,o){var l=ke,u=rt.transition;rt.transition=null;try{ke=4,Mo(e,n,i,o)}finally{ke=l,rt.transition=u}}function Mo(e,n,i,o){if(er){var l=Io(e,n,i,o);if(l===null)ts(e,n,o,nr,i),Xu(e,o);else if(Sz(l,e,n,i,o))o.stopPropagation();else if(Xu(e,o),n&4&&-1<Tz.indexOf(e)){for(;l!==null;){var u=ya(l);if(u!==null&&Zu(u),u=Io(e,n,i,o),u===null&&ts(e,n,o,nr,i),u===l)break;l=u}l!==null&&o.stopPropagation()}else ts(e,n,o,null,i)}}var nr=null;function Io(e,n,i,o){if(nr=null,e=Po(o),e=Bi(e),e!==null)if(n=Ni(e),n===null)e=null;else if(i=n.tag,i===13){if(e=_u(n),e!==null)return e;e=null}else if(i===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return nr=e,null}function nc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(jz()){case No:return 1;case Hu:return 4;case $a:case kz:return 16;case Ku:return 536870912;default:return 16}default:return 16}}var di=null,Jo=null,ir=null;function ic(){if(ir)return ir;var e,n=Jo,i=n.length,o,l="value"in di?di.value:di.textContent,u=l.length;for(e=0;e<i&&n[e]===l[e];e++);var m=i-e;for(o=1;o<=m&&n[i-o]===l[u-o];o++);return ir=l.slice(e,1<o?1-o:void 0)}function tr(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function ar(){return!0}function tc(){return!1}function dn(e){function n(i,o,l,u,m){this._reactName=i,this._targetInst=l,this.type=o,this.nativeEvent=u,this.target=m,this.currentTarget=null;for(var z in e)e.hasOwnProperty(z)&&(i=e[z],this[z]=i?i(u):u[z]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?ar:tc,this.isPropagationStopped=tc,this}return _(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var i=this.nativeEvent;i&&(i.preventDefault?i.preventDefault():typeof i.returnValue!="unknown"&&(i.returnValue=!1),this.isDefaultPrevented=ar)},stopPropagation:function(){var i=this.nativeEvent;i&&(i.stopPropagation?i.stopPropagation():typeof i.cancelBubble!="unknown"&&(i.cancelBubble=!0),this.isPropagationStopped=ar)},persist:function(){},isPersistent:ar}),n}var ot={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Wo=dn(ot),ta=_({},ot,{view:0,detail:0}),Bz=dn(ta),Lo,Ho,aa,rr=_({},ta,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Uo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==aa&&(aa&&e.type==="mousemove"?(Lo=e.screenX-aa.screenX,Ho=e.screenY-aa.screenY):Ho=Lo=0,aa=e),Lo)},movementY:function(e){return"movementY"in e?e.movementY:Ho}}),ac=dn(rr),Rz=_({},rr,{dataTransfer:0}),Oz=dn(Rz),Fz=_({},ta,{relatedTarget:0}),Ko=dn(Fz),_z=_({},ot,{animationName:0,elapsedTime:0,pseudoElement:0}),Mz=dn(_z),Iz=_({},ot,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Jz=dn(Iz),Wz=_({},ot,{data:0}),rc=dn(Wz),Lz={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Hz={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Kz={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Uz(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Kz[e])?!!n[e]:!1}function Uo(){return Uz}var $z=_({},ta,{key:function(e){if(e.key){var n=Lz[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=tr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Hz[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Uo,charCode:function(e){return e.type==="keypress"?tr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?tr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Zz=dn($z),Vz=_({},rr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),oc=dn(Vz),Yz=_({},ta,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Uo}),Qz=dn(Yz),Xz=_({},ot,{propertyName:0,elapsedTime:0,pseudoElement:0}),qz=dn(Xz),ew=_({},rr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),nw=dn(ew),iw=[9,13,27,32],$o=y&&"CompositionEvent"in window,ra=null;y&&"documentMode"in document&&(ra=document.documentMode);var tw=y&&"TextEvent"in window&&!ra,sc=y&&(!$o||ra&&8<ra&&11>=ra),lc=" ",uc=!1;function cc(e,n){switch(e){case"keyup":return iw.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function dc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var st=!1;function aw(e,n){switch(e){case"compositionend":return dc(n);case"keypress":return n.which!==32?null:(uc=!0,lc);case"textInput":return e=n.data,e===lc&&uc?null:e;default:return null}}function rw(e,n){if(st)return e==="compositionend"||!$o&&cc(e,n)?(e=ic(),ir=Jo=di=null,st=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return sc&&n.locale!=="ko"?null:n.data;default:return null}}var ow={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function mc(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!ow[e.type]:n==="textarea"}function fc(e,n,i,o){Nu(o),n=cr(n,"onChange"),0<n.length&&(i=new Wo("onChange","change",null,i,o),e.push({event:i,listeners:n}))}var oa=null,sa=null;function sw(e){xc(e,0)}function or(e){var n=mt(e);if(Ln(n))return e}function lw(e,n){if(e==="change")return n}var yc=!1;if(y){var Zo;if(y){var Vo="oninput"in document;if(!Vo){var zc=document.createElement("div");zc.setAttribute("oninput","return;"),Vo=typeof zc.oninput=="function"}Zo=Vo}else Zo=!1;yc=Zo&&(!document.documentMode||9<document.documentMode)}function wc(){oa&&(oa.detachEvent("onpropertychange",pc),sa=oa=null)}function pc(e){if(e.propertyName==="value"&&or(sa)){var n=[];fc(n,sa,e,Po(e)),Fu(sw,n)}}function uw(e,n,i){e==="focusin"?(wc(),oa=n,sa=i,oa.attachEvent("onpropertychange",pc)):e==="focusout"&&wc()}function cw(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return or(sa)}function dw(e,n){if(e==="click")return or(n)}function mw(e,n){if(e==="input"||e==="change")return or(n)}function fw(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Dn=typeof Object.is=="function"?Object.is:fw;function la(e,n){if(Dn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var i=Object.keys(e),o=Object.keys(n);if(i.length!==o.length)return!1;for(o=0;o<i.length;o++){var l=i[o];if(!w.call(n,l)||!Dn(e[l],n[l]))return!1}return!0}function hc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function gc(e,n){var i=hc(e);e=0;for(var o;i;){if(i.nodeType===3){if(o=e+i.textContent.length,e<=n&&o>=n)return{node:i,offset:n-e};e=o}e:{for(;i;){if(i.nextSibling){i=i.nextSibling;break e}i=i.parentNode}i=void 0}i=hc(i)}}function jc(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?jc(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function kc(){for(var e=window,n=Nn();n instanceof e.HTMLIFrameElement;){try{var i=typeof n.contentWindow.location.href=="string"}catch{i=!1}if(i)e=n.contentWindow;else break;n=Nn(e.document)}return n}function Yo(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function yw(e){var n=kc(),i=e.focusedElem,o=e.selectionRange;if(n!==i&&i&&i.ownerDocument&&jc(i.ownerDocument.documentElement,i)){if(o!==null&&Yo(i)){if(n=o.start,e=o.end,e===void 0&&(e=n),"selectionStart"in i)i.selectionStart=n,i.selectionEnd=Math.min(e,i.value.length);else if(e=(n=i.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var l=i.textContent.length,u=Math.min(o.start,l);o=o.end===void 0?u:Math.min(o.end,l),!e.extend&&u>o&&(l=o,o=u,u=l),l=gc(i,u);var m=gc(i,o);l&&m&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==m.node||e.focusOffset!==m.offset)&&(n=n.createRange(),n.setStart(l.node,l.offset),e.removeAllRanges(),u>o?(e.addRange(n),e.extend(m.node,m.offset)):(n.setEnd(m.node,m.offset),e.addRange(n)))}}for(n=[],e=i;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof i.focus=="function"&&i.focus(),i=0;i<n.length;i++)e=n[i],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var zw=y&&"documentMode"in document&&11>=document.documentMode,lt=null,Qo=null,ua=null,Xo=!1;function vc(e,n,i){var o=i.window===i?i.document:i.nodeType===9?i:i.ownerDocument;Xo||lt==null||lt!==Nn(o)||(o=lt,"selectionStart"in o&&Yo(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),ua&&la(ua,o)||(ua=o,o=cr(Qo,"onSelect"),0<o.length&&(n=new Wo("onSelect","select",null,n,i),e.push({event:n,listeners:o}),n.target=lt)))}function sr(e,n){var i={};return i[e.toLowerCase()]=n.toLowerCase(),i["Webkit"+e]="webkit"+n,i["Moz"+e]="moz"+n,i}var ut={animationend:sr("Animation","AnimationEnd"),animationiteration:sr("Animation","AnimationIteration"),animationstart:sr("Animation","AnimationStart"),transitionend:sr("Transition","TransitionEnd")},qo={},bc={};y&&(bc=document.createElement("div").style,"AnimationEvent"in window||(delete ut.animationend.animation,delete ut.animationiteration.animation,delete ut.animationstart.animation),"TransitionEvent"in window||delete ut.transitionend.transition);function lr(e){if(qo[e])return qo[e];if(!ut[e])return e;var n=ut[e],i;for(i in n)if(n.hasOwnProperty(i)&&i in bc)return qo[e]=n[i];return e}var Cc=lr("animationend"),Dc=lr("animationiteration"),Ac=lr("animationstart"),Ec=lr("transitionend"),Pc=new Map,Tc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function mi(e,n){Pc.set(e,n),d(n,[e])}for(var es=0;es<Tc.length;es++){var ns=Tc[es],ww=ns.toLowerCase(),pw=ns[0].toUpperCase()+ns.slice(1);mi(ww,"on"+pw)}mi(Cc,"onAnimationEnd"),mi(Dc,"onAnimationIteration"),mi(Ac,"onAnimationStart"),mi("dblclick","onDoubleClick"),mi("focusin","onFocus"),mi("focusout","onBlur"),mi(Ec,"onTransitionEnd"),f("onMouseEnter",["mouseout","mouseover"]),f("onMouseLeave",["mouseout","mouseover"]),f("onPointerEnter",["pointerout","pointerover"]),f("onPointerLeave",["pointerout","pointerover"]),d("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),d("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),d("onBeforeInput",["compositionend","keypress","textInput","paste"]),d("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),d("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),d("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ca="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),hw=new Set("cancel close invalid load scroll toggle".split(" ").concat(ca));function Sc(e,n,i){var o=e.type||"unknown-event";e.currentTarget=i,wz(o,n,void 0,e),e.currentTarget=null}function xc(e,n){n=(n&4)!==0;for(var i=0;i<e.length;i++){var o=e[i],l=o.event;o=o.listeners;e:{var u=void 0;if(n)for(var m=o.length-1;0<=m;m--){var z=o[m],p=z.instance,C=z.currentTarget;if(z=z.listener,p!==u&&l.isPropagationStopped())break e;Sc(l,z,C),u=p}else for(m=0;m<o.length;m++){if(z=o[m],p=z.instance,C=z.currentTarget,z=z.listener,p!==u&&l.isPropagationStopped())break e;Sc(l,z,C),u=p}}}if(Ua)throw e=Go,Ua=!1,Go=null,e}function Ce(e,n){var i=n[us];i===void 0&&(i=n[us]=new Set);var o=e+"__bubble";i.has(o)||(Gc(n,e,2,!1),i.add(o))}function is(e,n,i){var o=0;n&&(o|=4),Gc(i,e,o,n)}var ur="_reactListening"+Math.random().toString(36).slice(2);function da(e){if(!e[ur]){e[ur]=!0,s.forEach(function(i){i!=="selectionchange"&&(hw.has(i)||is(i,!1,e),is(i,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[ur]||(n[ur]=!0,is("selectionchange",!1,n))}}function Gc(e,n,i,o){switch(nc(n)){case 1:var l=Gz;break;case 4:l=Nz;break;default:l=Mo}i=l.bind(null,n,i,e),l=void 0,!xo||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(l=!0),o?l!==void 0?e.addEventListener(n,i,{capture:!0,passive:l}):e.addEventListener(n,i,!0):l!==void 0?e.addEventListener(n,i,{passive:l}):e.addEventListener(n,i,!1)}function ts(e,n,i,o,l){var u=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var m=o.tag;if(m===3||m===4){var z=o.stateNode.containerInfo;if(z===l||z.nodeType===8&&z.parentNode===l)break;if(m===4)for(m=o.return;m!==null;){var p=m.tag;if((p===3||p===4)&&(p=m.stateNode.containerInfo,p===l||p.nodeType===8&&p.parentNode===l))return;m=m.return}for(;z!==null;){if(m=Bi(z),m===null)return;if(p=m.tag,p===5||p===6){o=u=m;continue e}z=z.parentNode}}o=o.return}Fu(function(){var C=u,S=Po(i),N=[];e:{var T=Pc.get(e);if(T!==void 0){var M=Wo,H=e;switch(e){case"keypress":if(tr(i)===0)break e;case"keydown":case"keyup":M=Zz;break;case"focusin":H="focus",M=Ko;break;case"focusout":H="blur",M=Ko;break;case"beforeblur":case"afterblur":M=Ko;break;case"click":if(i.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":M=ac;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":M=Oz;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":M=Qz;break;case Cc:case Dc:case Ac:M=Mz;break;case Ec:M=qz;break;case"scroll":M=Bz;break;case"wheel":M=nw;break;case"copy":case"cut":case"paste":M=Jz;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":M=oc}var K=(n&4)!==0,Oe=!K&&e==="scroll",k=K?T!==null?T+"Capture":null:T;K=[];for(var h=C,b;h!==null;){b=h;var R=b.stateNode;if(b.tag===5&&R!==null&&(b=R,k!==null&&(R=$t(h,k),R!=null&&K.push(ma(h,R,b)))),Oe)break;h=h.return}0<K.length&&(T=new M(T,H,null,i,S),N.push({event:T,listeners:K}))}}if((n&7)===0){e:{if(T=e==="mouseover"||e==="pointerover",M=e==="mouseout"||e==="pointerout",T&&i!==Eo&&(H=i.relatedTarget||i.fromElement)&&(Bi(H)||H[Kn]))break e;if((M||T)&&(T=S.window===S?S:(T=S.ownerDocument)?T.defaultView||T.parentWindow:window,M?(H=i.relatedTarget||i.toElement,M=C,H=H?Bi(H):null,H!==null&&(Oe=Ni(H),H!==Oe||H.tag!==5&&H.tag!==6)&&(H=null)):(M=null,H=C),M!==H)){if(K=ac,R="onMouseLeave",k="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(K=oc,R="onPointerLeave",k="onPointerEnter",h="pointer"),Oe=M==null?T:mt(M),b=H==null?T:mt(H),T=new K(R,h+"leave",M,i,S),T.target=Oe,T.relatedTarget=b,R=null,Bi(S)===C&&(K=new K(k,h+"enter",H,i,S),K.target=b,K.relatedTarget=Oe,R=K),Oe=R,M&&H)n:{for(K=M,k=H,h=0,b=K;b;b=ct(b))h++;for(b=0,R=k;R;R=ct(R))b++;for(;0<h-b;)K=ct(K),h--;for(;0<b-h;)k=ct(k),b--;for(;h--;){if(K===k||k!==null&&K===k.alternate)break n;K=ct(K),k=ct(k)}K=null}else K=null;M!==null&&Nc(N,T,M,K,!1),H!==null&&Oe!==null&&Nc(N,Oe,H,K,!0)}}e:{if(T=C?mt(C):window,M=T.nodeName&&T.nodeName.toLowerCase(),M==="select"||M==="input"&&T.type==="file")var Z=lw;else if(mc(T))if(yc)Z=mw;else{Z=cw;var Y=uw}else(M=T.nodeName)&&M.toLowerCase()==="input"&&(T.type==="checkbox"||T.type==="radio")&&(Z=dw);if(Z&&(Z=Z(e,C))){fc(N,Z,i,S);break e}Y&&Y(e,T,C),e==="focusout"&&(Y=T._wrapperState)&&Y.controlled&&T.type==="number"&&Wt(T,"number",T.value)}switch(Y=C?mt(C):window,e){case"focusin":(mc(Y)||Y.contentEditable==="true")&&(lt=Y,Qo=C,ua=null);break;case"focusout":ua=Qo=lt=null;break;case"mousedown":Xo=!0;break;case"contextmenu":case"mouseup":case"dragend":Xo=!1,vc(N,i,S);break;case"selectionchange":if(zw)break;case"keydown":case"keyup":vc(N,i,S)}var Q;if($o)e:{switch(e){case"compositionstart":var ne="onCompositionStart";break e;case"compositionend":ne="onCompositionEnd";break e;case"compositionupdate":ne="onCompositionUpdate";break e}ne=void 0}else st?cc(e,i)&&(ne="onCompositionEnd"):e==="keydown"&&i.keyCode===229&&(ne="onCompositionStart");ne&&(sc&&i.locale!=="ko"&&(st||ne!=="onCompositionStart"?ne==="onCompositionEnd"&&st&&(Q=ic()):(di=S,Jo="value"in di?di.value:di.textContent,st=!0)),Y=cr(C,ne),0<Y.length&&(ne=new rc(ne,e,null,i,S),N.push({event:ne,listeners:Y}),Q?ne.data=Q:(Q=dc(i),Q!==null&&(ne.data=Q)))),(Q=tw?aw(e,i):rw(e,i))&&(C=cr(C,"onBeforeInput"),0<C.length&&(S=new rc("onBeforeInput","beforeinput",null,i,S),N.push({event:S,listeners:C}),S.data=Q))}xc(N,n)})}function ma(e,n,i){return{instance:e,listener:n,currentTarget:i}}function cr(e,n){for(var i=n+"Capture",o=[];e!==null;){var l=e,u=l.stateNode;l.tag===5&&u!==null&&(l=u,u=$t(e,i),u!=null&&o.unshift(ma(e,u,l)),u=$t(e,n),u!=null&&o.push(ma(e,u,l))),e=e.return}return o}function ct(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Nc(e,n,i,o,l){for(var u=n._reactName,m=[];i!==null&&i!==o;){var z=i,p=z.alternate,C=z.stateNode;if(p!==null&&p===o)break;z.tag===5&&C!==null&&(z=C,l?(p=$t(i,u),p!=null&&m.unshift(ma(i,p,z))):l||(p=$t(i,u),p!=null&&m.push(ma(i,p,z)))),i=i.return}m.length!==0&&e.push({event:n,listeners:m})}var gw=/\r\n?/g,jw=/\u0000|\uFFFD/g;function Bc(e){return(typeof e=="string"?e:""+e).replace(gw,`
`).replace(jw,"")}function dr(e,n,i){if(n=Bc(n),Bc(e)!==n&&i)throw Error(r(425))}function mr(){}var as=null,rs=null;function os(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var ss=typeof setTimeout=="function"?setTimeout:void 0,kw=typeof clearTimeout=="function"?clearTimeout:void 0,Rc=typeof Promise=="function"?Promise:void 0,vw=typeof queueMicrotask=="function"?queueMicrotask:typeof Rc<"u"?function(e){return Rc.resolve(null).then(e).catch(bw)}:ss;function bw(e){setTimeout(function(){throw e})}function ls(e,n){var i=n,o=0;do{var l=i.nextSibling;if(e.removeChild(i),l&&l.nodeType===8)if(i=l.data,i==="/$"){if(o===0){e.removeChild(l),ia(n);return}o--}else i!=="$"&&i!=="$?"&&i!=="$!"||o++;i=l}while(i);ia(n)}function fi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function Oc(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var i=e.data;if(i==="$"||i==="$!"||i==="$?"){if(n===0)return e;n--}else i==="/$"&&n++}e=e.previousSibling}return null}var dt=Math.random().toString(36).slice(2),Fn="__reactFiber$"+dt,fa="__reactProps$"+dt,Kn="__reactContainer$"+dt,us="__reactEvents$"+dt,Cw="__reactListeners$"+dt,Dw="__reactHandles$"+dt;function Bi(e){var n=e[Fn];if(n)return n;for(var i=e.parentNode;i;){if(n=i[Kn]||i[Fn]){if(i=n.alternate,n.child!==null||i!==null&&i.child!==null)for(e=Oc(e);e!==null;){if(i=e[Fn])return i;e=Oc(e)}return n}e=i,i=e.parentNode}return null}function ya(e){return e=e[Fn]||e[Kn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function mt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(r(33))}function fr(e){return e[fa]||null}var cs=[],ft=-1;function yi(e){return{current:e}}function De(e){0>ft||(e.current=cs[ft],cs[ft]=null,ft--)}function be(e,n){ft++,cs[ft]=e.current,e.current=n}var zi={},Qe=yi(zi),an=yi(!1),Ri=zi;function yt(e,n){var i=e.type.contextTypes;if(!i)return zi;var o=e.stateNode;if(o&&o.__reactInternalMemoizedUnmaskedChildContext===n)return o.__reactInternalMemoizedMaskedChildContext;var l={},u;for(u in i)l[u]=n[u];return o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=l),l}function rn(e){return e=e.childContextTypes,e!=null}function yr(){De(an),De(Qe)}function Fc(e,n,i){if(Qe.current!==zi)throw Error(r(168));be(Qe,n),be(an,i)}function _c(e,n,i){var o=e.stateNode;if(n=n.childContextTypes,typeof o.getChildContext!="function")return i;o=o.getChildContext();for(var l in o)if(!(l in n))throw Error(r(108,pe(e)||"Unknown",l));return _({},i,o)}function zr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||zi,Ri=Qe.current,be(Qe,e),be(an,an.current),!0}function Mc(e,n,i){var o=e.stateNode;if(!o)throw Error(r(169));i?(e=_c(e,n,Ri),o.__reactInternalMemoizedMergedChildContext=e,De(an),De(Qe),be(Qe,e)):De(an),be(an,i)}var Un=null,wr=!1,ds=!1;function Ic(e){Un===null?Un=[e]:Un.push(e)}function Aw(e){wr=!0,Ic(e)}function wi(){if(!ds&&Un!==null){ds=!0;var e=0,n=ke;try{var i=Un;for(ke=1;e<i.length;e++){var o=i[e];do o=o(!0);while(o!==null)}Un=null,wr=!1}catch(l){throw Un!==null&&(Un=Un.slice(e+1)),Wu(No,wi),l}finally{ke=n,ds=!1}}return null}var zt=[],wt=0,pr=null,hr=0,pn=[],hn=0,Oi=null,$n=1,Zn="";function Fi(e,n){zt[wt++]=hr,zt[wt++]=pr,pr=e,hr=n}function Jc(e,n,i){pn[hn++]=$n,pn[hn++]=Zn,pn[hn++]=Oi,Oi=e;var o=$n;e=Zn;var l=32-Cn(o)-1;o&=~(1<<l),i+=1;var u=32-Cn(n)+l;if(30<u){var m=l-l%5;u=(o&(1<<m)-1).toString(32),o>>=m,l-=m,$n=1<<32-Cn(n)+l|i<<l|o,Zn=u+e}else $n=1<<u|i<<l|o,Zn=e}function ms(e){e.return!==null&&(Fi(e,1),Jc(e,1,0))}function fs(e){for(;e===pr;)pr=zt[--wt],zt[wt]=null,hr=zt[--wt],zt[wt]=null;for(;e===Oi;)Oi=pn[--hn],pn[hn]=null,Zn=pn[--hn],pn[hn]=null,$n=pn[--hn],pn[hn]=null}var mn=null,fn=null,Te=!1,An=null;function Wc(e,n){var i=vn(5,null,null,0);i.elementType="DELETED",i.stateNode=n,i.return=e,n=e.deletions,n===null?(e.deletions=[i],e.flags|=16):n.push(i)}function Lc(e,n){switch(e.tag){case 5:var i=e.type;return n=n.nodeType!==1||i.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,mn=e,fn=fi(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,mn=e,fn=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(i=Oi!==null?{id:$n,overflow:Zn}:null,e.memoizedState={dehydrated:n,treeContext:i,retryLane:1073741824},i=vn(18,null,null,0),i.stateNode=n,i.return=e,e.child=i,mn=e,fn=null,!0):!1;default:return!1}}function ys(e){return(e.mode&1)!==0&&(e.flags&128)===0}function zs(e){if(Te){var n=fn;if(n){var i=n;if(!Lc(e,n)){if(ys(e))throw Error(r(418));n=fi(i.nextSibling);var o=mn;n&&Lc(e,n)?Wc(o,i):(e.flags=e.flags&-4097|2,Te=!1,mn=e)}}else{if(ys(e))throw Error(r(418));e.flags=e.flags&-4097|2,Te=!1,mn=e}}}function Hc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;mn=e}function gr(e){if(e!==mn)return!1;if(!Te)return Hc(e),Te=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!os(e.type,e.memoizedProps)),n&&(n=fn)){if(ys(e))throw Kc(),Error(r(418));for(;n;)Wc(e,n),n=fi(n.nextSibling)}if(Hc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var i=e.data;if(i==="/$"){if(n===0){fn=fi(e.nextSibling);break e}n--}else i!=="$"&&i!=="$!"&&i!=="$?"||n++}e=e.nextSibling}fn=null}}else fn=mn?fi(e.stateNode.nextSibling):null;return!0}function Kc(){for(var e=fn;e;)e=fi(e.nextSibling)}function pt(){fn=mn=null,Te=!1}function ws(e){An===null?An=[e]:An.push(e)}var Ew=ae.ReactCurrentBatchConfig;function za(e,n,i){if(e=i.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(i._owner){if(i=i._owner,i){if(i.tag!==1)throw Error(r(309));var o=i.stateNode}if(!o)throw Error(r(147,e));var l=o,u=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===u?n.ref:(n=function(m){var z=l.refs;m===null?delete z[u]:z[u]=m},n._stringRef=u,n)}if(typeof e!="string")throw Error(r(284));if(!i._owner)throw Error(r(290,e))}return e}function jr(e,n){throw e=Object.prototype.toString.call(n),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function Uc(e){var n=e._init;return n(e._payload)}function $c(e){function n(k,h){if(e){var b=k.deletions;b===null?(k.deletions=[h],k.flags|=16):b.push(h)}}function i(k,h){if(!e)return null;for(;h!==null;)n(k,h),h=h.sibling;return null}function o(k,h){for(k=new Map;h!==null;)h.key!==null?k.set(h.key,h):k.set(h.index,h),h=h.sibling;return k}function l(k,h){return k=Ci(k,h),k.index=0,k.sibling=null,k}function u(k,h,b){return k.index=b,e?(b=k.alternate,b!==null?(b=b.index,b<h?(k.flags|=2,h):b):(k.flags|=2,h)):(k.flags|=1048576,h)}function m(k){return e&&k.alternate===null&&(k.flags|=2),k}function z(k,h,b,R){return h===null||h.tag!==6?(h=sl(b,k.mode,R),h.return=k,h):(h=l(h,b),h.return=k,h)}function p(k,h,b,R){var Z=b.type;return Z===ce?S(k,h,b.props.children,R,b.key):h!==null&&(h.elementType===Z||typeof Z=="object"&&Z!==null&&Z.$$typeof===je&&Uc(Z)===h.type)?(R=l(h,b.props),R.ref=za(k,h,b),R.return=k,R):(R=Hr(b.type,b.key,b.props,null,k.mode,R),R.ref=za(k,h,b),R.return=k,R)}function C(k,h,b,R){return h===null||h.tag!==4||h.stateNode.containerInfo!==b.containerInfo||h.stateNode.implementation!==b.implementation?(h=ll(b,k.mode,R),h.return=k,h):(h=l(h,b.children||[]),h.return=k,h)}function S(k,h,b,R,Z){return h===null||h.tag!==7?(h=Ki(b,k.mode,R,Z),h.return=k,h):(h=l(h,b),h.return=k,h)}function N(k,h,b){if(typeof h=="string"&&h!==""||typeof h=="number")return h=sl(""+h,k.mode,b),h.return=k,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case U:return b=Hr(h.type,h.key,h.props,null,k.mode,b),b.ref=za(k,null,h),b.return=k,b;case oe:return h=ll(h,k.mode,b),h.return=k,h;case je:var R=h._init;return N(k,R(h._payload),b)}if(xi(h)||$(h))return h=Ki(h,k.mode,b,null),h.return=k,h;jr(k,h)}return null}function T(k,h,b,R){var Z=h!==null?h.key:null;if(typeof b=="string"&&b!==""||typeof b=="number")return Z!==null?null:z(k,h,""+b,R);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case U:return b.key===Z?p(k,h,b,R):null;case oe:return b.key===Z?C(k,h,b,R):null;case je:return Z=b._init,T(k,h,Z(b._payload),R)}if(xi(b)||$(b))return Z!==null?null:S(k,h,b,R,null);jr(k,b)}return null}function M(k,h,b,R,Z){if(typeof R=="string"&&R!==""||typeof R=="number")return k=k.get(b)||null,z(h,k,""+R,Z);if(typeof R=="object"&&R!==null){switch(R.$$typeof){case U:return k=k.get(R.key===null?b:R.key)||null,p(h,k,R,Z);case oe:return k=k.get(R.key===null?b:R.key)||null,C(h,k,R,Z);case je:var Y=R._init;return M(k,h,b,Y(R._payload),Z)}if(xi(R)||$(R))return k=k.get(b)||null,S(h,k,R,Z,null);jr(h,R)}return null}function H(k,h,b,R){for(var Z=null,Y=null,Q=h,ne=h=0,He=null;Q!==null&&ne<b.length;ne++){Q.index>ne?(He=Q,Q=null):He=Q.sibling;var we=T(k,Q,b[ne],R);if(we===null){Q===null&&(Q=He);break}e&&Q&&we.alternate===null&&n(k,Q),h=u(we,h,ne),Y===null?Z=we:Y.sibling=we,Y=we,Q=He}if(ne===b.length)return i(k,Q),Te&&Fi(k,ne),Z;if(Q===null){for(;ne<b.length;ne++)Q=N(k,b[ne],R),Q!==null&&(h=u(Q,h,ne),Y===null?Z=Q:Y.sibling=Q,Y=Q);return Te&&Fi(k,ne),Z}for(Q=o(k,Q);ne<b.length;ne++)He=M(Q,k,ne,b[ne],R),He!==null&&(e&&He.alternate!==null&&Q.delete(He.key===null?ne:He.key),h=u(He,h,ne),Y===null?Z=He:Y.sibling=He,Y=He);return e&&Q.forEach(function(Di){return n(k,Di)}),Te&&Fi(k,ne),Z}function K(k,h,b,R){var Z=$(b);if(typeof Z!="function")throw Error(r(150));if(b=Z.call(b),b==null)throw Error(r(151));for(var Y=Z=null,Q=h,ne=h=0,He=null,we=b.next();Q!==null&&!we.done;ne++,we=b.next()){Q.index>ne?(He=Q,Q=null):He=Q.sibling;var Di=T(k,Q,we.value,R);if(Di===null){Q===null&&(Q=He);break}e&&Q&&Di.alternate===null&&n(k,Q),h=u(Di,h,ne),Y===null?Z=Di:Y.sibling=Di,Y=Di,Q=He}if(we.done)return i(k,Q),Te&&Fi(k,ne),Z;if(Q===null){for(;!we.done;ne++,we=b.next())we=N(k,we.value,R),we!==null&&(h=u(we,h,ne),Y===null?Z=we:Y.sibling=we,Y=we);return Te&&Fi(k,ne),Z}for(Q=o(k,Q);!we.done;ne++,we=b.next())we=M(Q,k,ne,we.value,R),we!==null&&(e&&we.alternate!==null&&Q.delete(we.key===null?ne:we.key),h=u(we,h,ne),Y===null?Z=we:Y.sibling=we,Y=we);return e&&Q.forEach(function(op){return n(k,op)}),Te&&Fi(k,ne),Z}function Oe(k,h,b,R){if(typeof b=="object"&&b!==null&&b.type===ce&&b.key===null&&(b=b.props.children),typeof b=="object"&&b!==null){switch(b.$$typeof){case U:e:{for(var Z=b.key,Y=h;Y!==null;){if(Y.key===Z){if(Z=b.type,Z===ce){if(Y.tag===7){i(k,Y.sibling),h=l(Y,b.props.children),h.return=k,k=h;break e}}else if(Y.elementType===Z||typeof Z=="object"&&Z!==null&&Z.$$typeof===je&&Uc(Z)===Y.type){i(k,Y.sibling),h=l(Y,b.props),h.ref=za(k,Y,b),h.return=k,k=h;break e}i(k,Y);break}else n(k,Y);Y=Y.sibling}b.type===ce?(h=Ki(b.props.children,k.mode,R,b.key),h.return=k,k=h):(R=Hr(b.type,b.key,b.props,null,k.mode,R),R.ref=za(k,h,b),R.return=k,k=R)}return m(k);case oe:e:{for(Y=b.key;h!==null;){if(h.key===Y)if(h.tag===4&&h.stateNode.containerInfo===b.containerInfo&&h.stateNode.implementation===b.implementation){i(k,h.sibling),h=l(h,b.children||[]),h.return=k,k=h;break e}else{i(k,h);break}else n(k,h);h=h.sibling}h=ll(b,k.mode,R),h.return=k,k=h}return m(k);case je:return Y=b._init,Oe(k,h,Y(b._payload),R)}if(xi(b))return H(k,h,b,R);if($(b))return K(k,h,b,R);jr(k,b)}return typeof b=="string"&&b!==""||typeof b=="number"?(b=""+b,h!==null&&h.tag===6?(i(k,h.sibling),h=l(h,b),h.return=k,k=h):(i(k,h),h=sl(b,k.mode,R),h.return=k,k=h),m(k)):i(k,h)}return Oe}var ht=$c(!0),Zc=$c(!1),kr=yi(null),vr=null,gt=null,ps=null;function hs(){ps=gt=vr=null}function gs(e){var n=kr.current;De(kr),e._currentValue=n}function js(e,n,i){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===i)break;e=e.return}}function jt(e,n){vr=e,ps=gt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&n)!==0&&(on=!0),e.firstContext=null)}function gn(e){var n=e._currentValue;if(ps!==e)if(e={context:e,memoizedValue:n,next:null},gt===null){if(vr===null)throw Error(r(308));gt=e,vr.dependencies={lanes:0,firstContext:e}}else gt=gt.next=e;return n}var _i=null;function ks(e){_i===null?_i=[e]:_i.push(e)}function Vc(e,n,i,o){var l=n.interleaved;return l===null?(i.next=i,ks(n)):(i.next=l.next,l.next=i),n.interleaved=i,Vn(e,o)}function Vn(e,n){e.lanes|=n;var i=e.alternate;for(i!==null&&(i.lanes|=n),i=e,e=e.return;e!==null;)e.childLanes|=n,i=e.alternate,i!==null&&(i.childLanes|=n),i=e,e=e.return;return i.tag===3?i.stateNode:null}var pi=!1;function vs(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Yc(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Yn(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function hi(e,n,i){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(ye&2)!==0){var l=o.pending;return l===null?n.next=n:(n.next=l.next,l.next=n),o.pending=n,Vn(e,i)}return l=o.interleaved,l===null?(n.next=n,ks(o)):(n.next=l.next,l.next=n),o.interleaved=n,Vn(e,i)}function br(e,n,i){if(n=n.updateQueue,n!==null&&(n=n.shared,(i&4194240)!==0)){var o=n.lanes;o&=e.pendingLanes,i|=o,n.lanes=i,Oo(e,i)}}function Qc(e,n){var i=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,i===o)){var l=null,u=null;if(i=i.firstBaseUpdate,i!==null){do{var m={eventTime:i.eventTime,lane:i.lane,tag:i.tag,payload:i.payload,callback:i.callback,next:null};u===null?l=u=m:u=u.next=m,i=i.next}while(i!==null);u===null?l=u=n:u=u.next=n}else l=u=n;i={baseState:o.baseState,firstBaseUpdate:l,lastBaseUpdate:u,shared:o.shared,effects:o.effects},e.updateQueue=i;return}e=i.lastBaseUpdate,e===null?i.firstBaseUpdate=n:e.next=n,i.lastBaseUpdate=n}function Cr(e,n,i,o){var l=e.updateQueue;pi=!1;var u=l.firstBaseUpdate,m=l.lastBaseUpdate,z=l.shared.pending;if(z!==null){l.shared.pending=null;var p=z,C=p.next;p.next=null,m===null?u=C:m.next=C,m=p;var S=e.alternate;S!==null&&(S=S.updateQueue,z=S.lastBaseUpdate,z!==m&&(z===null?S.firstBaseUpdate=C:z.next=C,S.lastBaseUpdate=p))}if(u!==null){var N=l.baseState;m=0,S=C=p=null,z=u;do{var T=z.lane,M=z.eventTime;if((o&T)===T){S!==null&&(S=S.next={eventTime:M,lane:0,tag:z.tag,payload:z.payload,callback:z.callback,next:null});e:{var H=e,K=z;switch(T=n,M=i,K.tag){case 1:if(H=K.payload,typeof H=="function"){N=H.call(M,N,T);break e}N=H;break e;case 3:H.flags=H.flags&-65537|128;case 0:if(H=K.payload,T=typeof H=="function"?H.call(M,N,T):H,T==null)break e;N=_({},N,T);break e;case 2:pi=!0}}z.callback!==null&&z.lane!==0&&(e.flags|=64,T=l.effects,T===null?l.effects=[z]:T.push(z))}else M={eventTime:M,lane:T,tag:z.tag,payload:z.payload,callback:z.callback,next:null},S===null?(C=S=M,p=N):S=S.next=M,m|=T;if(z=z.next,z===null){if(z=l.shared.pending,z===null)break;T=z,z=T.next,T.next=null,l.lastBaseUpdate=T,l.shared.pending=null}}while(!0);if(S===null&&(p=N),l.baseState=p,l.firstBaseUpdate=C,l.lastBaseUpdate=S,n=l.shared.interleaved,n!==null){l=n;do m|=l.lane,l=l.next;while(l!==n)}else u===null&&(l.shared.lanes=0);Ji|=m,e.lanes=m,e.memoizedState=N}}function Xc(e,n,i){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var o=e[n],l=o.callback;if(l!==null){if(o.callback=null,o=i,typeof l!="function")throw Error(r(191,l));l.call(o)}}}var wa={},_n=yi(wa),pa=yi(wa),ha=yi(wa);function Mi(e){if(e===wa)throw Error(r(174));return e}function bs(e,n){switch(be(ha,n),be(pa,e),be(_n,wa),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:Rn(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=Rn(n,e)}De(_n),be(_n,n)}function kt(){De(_n),De(pa),De(ha)}function qc(e){Mi(ha.current);var n=Mi(_n.current),i=Rn(n,e.type);n!==i&&(be(pa,e),be(_n,i))}function Cs(e){pa.current===e&&(De(_n),De(pa))}var Se=yi(0);function Dr(e){for(var n=e;n!==null;){if(n.tag===13){var i=n.memoizedState;if(i!==null&&(i=i.dehydrated,i===null||i.data==="$?"||i.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Ds=[];function As(){for(var e=0;e<Ds.length;e++)Ds[e]._workInProgressVersionPrimary=null;Ds.length=0}var Ar=ae.ReactCurrentDispatcher,Es=ae.ReactCurrentBatchConfig,Ii=0,xe=null,Ie=null,We=null,Er=!1,ga=!1,ja=0,Pw=0;function Xe(){throw Error(r(321))}function Ps(e,n){if(n===null)return!1;for(var i=0;i<n.length&&i<e.length;i++)if(!Dn(e[i],n[i]))return!1;return!0}function Ts(e,n,i,o,l,u){if(Ii=u,xe=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Ar.current=e===null||e.memoizedState===null?Gw:Nw,e=i(o,l),ga){u=0;do{if(ga=!1,ja=0,25<=u)throw Error(r(301));u+=1,We=Ie=null,n.updateQueue=null,Ar.current=Bw,e=i(o,l)}while(ga)}if(Ar.current=Sr,n=Ie!==null&&Ie.next!==null,Ii=0,We=Ie=xe=null,Er=!1,n)throw Error(r(300));return e}function Ss(){var e=ja!==0;return ja=0,e}function Mn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return We===null?xe.memoizedState=We=e:We=We.next=e,We}function jn(){if(Ie===null){var e=xe.alternate;e=e!==null?e.memoizedState:null}else e=Ie.next;var n=We===null?xe.memoizedState:We.next;if(n!==null)We=n,Ie=e;else{if(e===null)throw Error(r(310));Ie=e,e={memoizedState:Ie.memoizedState,baseState:Ie.baseState,baseQueue:Ie.baseQueue,queue:Ie.queue,next:null},We===null?xe.memoizedState=We=e:We=We.next=e}return We}function ka(e,n){return typeof n=="function"?n(e):n}function xs(e){var n=jn(),i=n.queue;if(i===null)throw Error(r(311));i.lastRenderedReducer=e;var o=Ie,l=o.baseQueue,u=i.pending;if(u!==null){if(l!==null){var m=l.next;l.next=u.next,u.next=m}o.baseQueue=l=u,i.pending=null}if(l!==null){u=l.next,o=o.baseState;var z=m=null,p=null,C=u;do{var S=C.lane;if((Ii&S)===S)p!==null&&(p=p.next={lane:0,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null}),o=C.hasEagerState?C.eagerState:e(o,C.action);else{var N={lane:S,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null};p===null?(z=p=N,m=o):p=p.next=N,xe.lanes|=S,Ji|=S}C=C.next}while(C!==null&&C!==u);p===null?m=o:p.next=z,Dn(o,n.memoizedState)||(on=!0),n.memoizedState=o,n.baseState=m,n.baseQueue=p,i.lastRenderedState=o}if(e=i.interleaved,e!==null){l=e;do u=l.lane,xe.lanes|=u,Ji|=u,l=l.next;while(l!==e)}else l===null&&(i.lanes=0);return[n.memoizedState,i.dispatch]}function Gs(e){var n=jn(),i=n.queue;if(i===null)throw Error(r(311));i.lastRenderedReducer=e;var o=i.dispatch,l=i.pending,u=n.memoizedState;if(l!==null){i.pending=null;var m=l=l.next;do u=e(u,m.action),m=m.next;while(m!==l);Dn(u,n.memoizedState)||(on=!0),n.memoizedState=u,n.baseQueue===null&&(n.baseState=u),i.lastRenderedState=u}return[u,o]}function ed(){}function nd(e,n){var i=xe,o=jn(),l=n(),u=!Dn(o.memoizedState,l);if(u&&(o.memoizedState=l,on=!0),o=o.queue,Ns(ad.bind(null,i,o,e),[e]),o.getSnapshot!==n||u||We!==null&&We.memoizedState.tag&1){if(i.flags|=2048,va(9,td.bind(null,i,o,l,n),void 0,null),Le===null)throw Error(r(349));(Ii&30)!==0||id(i,n,l)}return l}function id(e,n,i){e.flags|=16384,e={getSnapshot:n,value:i},n=xe.updateQueue,n===null?(n={lastEffect:null,stores:null},xe.updateQueue=n,n.stores=[e]):(i=n.stores,i===null?n.stores=[e]:i.push(e))}function td(e,n,i,o){n.value=i,n.getSnapshot=o,rd(n)&&od(e)}function ad(e,n,i){return i(function(){rd(n)&&od(e)})}function rd(e){var n=e.getSnapshot;e=e.value;try{var i=n();return!Dn(e,i)}catch{return!0}}function od(e){var n=Vn(e,1);n!==null&&Sn(n,e,1,-1)}function sd(e){var n=Mn();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ka,lastRenderedState:e},n.queue=e,e=e.dispatch=xw.bind(null,xe,e),[n.memoizedState,e]}function va(e,n,i,o){return e={tag:e,create:n,destroy:i,deps:o,next:null},n=xe.updateQueue,n===null?(n={lastEffect:null,stores:null},xe.updateQueue=n,n.lastEffect=e.next=e):(i=n.lastEffect,i===null?n.lastEffect=e.next=e:(o=i.next,i.next=e,e.next=o,n.lastEffect=e)),e}function ld(){return jn().memoizedState}function Pr(e,n,i,o){var l=Mn();xe.flags|=e,l.memoizedState=va(1|n,i,void 0,o===void 0?null:o)}function Tr(e,n,i,o){var l=jn();o=o===void 0?null:o;var u=void 0;if(Ie!==null){var m=Ie.memoizedState;if(u=m.destroy,o!==null&&Ps(o,m.deps)){l.memoizedState=va(n,i,u,o);return}}xe.flags|=e,l.memoizedState=va(1|n,i,u,o)}function ud(e,n){return Pr(8390656,8,e,n)}function Ns(e,n){return Tr(2048,8,e,n)}function cd(e,n){return Tr(4,2,e,n)}function dd(e,n){return Tr(4,4,e,n)}function md(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function fd(e,n,i){return i=i!=null?i.concat([e]):null,Tr(4,4,md.bind(null,n,e),i)}function Bs(){}function yd(e,n){var i=jn();n=n===void 0?null:n;var o=i.memoizedState;return o!==null&&n!==null&&Ps(n,o[1])?o[0]:(i.memoizedState=[e,n],e)}function zd(e,n){var i=jn();n=n===void 0?null:n;var o=i.memoizedState;return o!==null&&n!==null&&Ps(n,o[1])?o[0]:(e=e(),i.memoizedState=[e,n],e)}function wd(e,n,i){return(Ii&21)===0?(e.baseState&&(e.baseState=!1,on=!0),e.memoizedState=i):(Dn(i,n)||(i=Uu(),xe.lanes|=i,Ji|=i,e.baseState=!0),n)}function Tw(e,n){var i=ke;ke=i!==0&&4>i?i:4,e(!0);var o=Es.transition;Es.transition={};try{e(!1),n()}finally{ke=i,Es.transition=o}}function pd(){return jn().memoizedState}function Sw(e,n,i){var o=vi(e);if(i={lane:o,action:i,hasEagerState:!1,eagerState:null,next:null},hd(e))gd(n,i);else if(i=Vc(e,n,i,o),i!==null){var l=tn();Sn(i,e,o,l),jd(i,n,o)}}function xw(e,n,i){var o=vi(e),l={lane:o,action:i,hasEagerState:!1,eagerState:null,next:null};if(hd(e))gd(n,l);else{var u=e.alternate;if(e.lanes===0&&(u===null||u.lanes===0)&&(u=n.lastRenderedReducer,u!==null))try{var m=n.lastRenderedState,z=u(m,i);if(l.hasEagerState=!0,l.eagerState=z,Dn(z,m)){var p=n.interleaved;p===null?(l.next=l,ks(n)):(l.next=p.next,p.next=l),n.interleaved=l;return}}catch{}i=Vc(e,n,l,o),i!==null&&(l=tn(),Sn(i,e,o,l),jd(i,n,o))}}function hd(e){var n=e.alternate;return e===xe||n!==null&&n===xe}function gd(e,n){ga=Er=!0;var i=e.pending;i===null?n.next=n:(n.next=i.next,i.next=n),e.pending=n}function jd(e,n,i){if((i&4194240)!==0){var o=n.lanes;o&=e.pendingLanes,i|=o,n.lanes=i,Oo(e,i)}}var Sr={readContext:gn,useCallback:Xe,useContext:Xe,useEffect:Xe,useImperativeHandle:Xe,useInsertionEffect:Xe,useLayoutEffect:Xe,useMemo:Xe,useReducer:Xe,useRef:Xe,useState:Xe,useDebugValue:Xe,useDeferredValue:Xe,useTransition:Xe,useMutableSource:Xe,useSyncExternalStore:Xe,useId:Xe,unstable_isNewReconciler:!1},Gw={readContext:gn,useCallback:function(e,n){return Mn().memoizedState=[e,n===void 0?null:n],e},useContext:gn,useEffect:ud,useImperativeHandle:function(e,n,i){return i=i!=null?i.concat([e]):null,Pr(4194308,4,md.bind(null,n,e),i)},useLayoutEffect:function(e,n){return Pr(4194308,4,e,n)},useInsertionEffect:function(e,n){return Pr(4,2,e,n)},useMemo:function(e,n){var i=Mn();return n=n===void 0?null:n,e=e(),i.memoizedState=[e,n],e},useReducer:function(e,n,i){var o=Mn();return n=i!==void 0?i(n):n,o.memoizedState=o.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},o.queue=e,e=e.dispatch=Sw.bind(null,xe,e),[o.memoizedState,e]},useRef:function(e){var n=Mn();return e={current:e},n.memoizedState=e},useState:sd,useDebugValue:Bs,useDeferredValue:function(e){return Mn().memoizedState=e},useTransition:function(){var e=sd(!1),n=e[0];return e=Tw.bind(null,e[1]),Mn().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,i){var o=xe,l=Mn();if(Te){if(i===void 0)throw Error(r(407));i=i()}else{if(i=n(),Le===null)throw Error(r(349));(Ii&30)!==0||id(o,n,i)}l.memoizedState=i;var u={value:i,getSnapshot:n};return l.queue=u,ud(ad.bind(null,o,u,e),[e]),o.flags|=2048,va(9,td.bind(null,o,u,i,n),void 0,null),i},useId:function(){var e=Mn(),n=Le.identifierPrefix;if(Te){var i=Zn,o=$n;i=(o&~(1<<32-Cn(o)-1)).toString(32)+i,n=":"+n+"R"+i,i=ja++,0<i&&(n+="H"+i.toString(32)),n+=":"}else i=Pw++,n=":"+n+"r"+i.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},Nw={readContext:gn,useCallback:yd,useContext:gn,useEffect:Ns,useImperativeHandle:fd,useInsertionEffect:cd,useLayoutEffect:dd,useMemo:zd,useReducer:xs,useRef:ld,useState:function(){return xs(ka)},useDebugValue:Bs,useDeferredValue:function(e){var n=jn();return wd(n,Ie.memoizedState,e)},useTransition:function(){var e=xs(ka)[0],n=jn().memoizedState;return[e,n]},useMutableSource:ed,useSyncExternalStore:nd,useId:pd,unstable_isNewReconciler:!1},Bw={readContext:gn,useCallback:yd,useContext:gn,useEffect:Ns,useImperativeHandle:fd,useInsertionEffect:cd,useLayoutEffect:dd,useMemo:zd,useReducer:Gs,useRef:ld,useState:function(){return Gs(ka)},useDebugValue:Bs,useDeferredValue:function(e){var n=jn();return Ie===null?n.memoizedState=e:wd(n,Ie.memoizedState,e)},useTransition:function(){var e=Gs(ka)[0],n=jn().memoizedState;return[e,n]},useMutableSource:ed,useSyncExternalStore:nd,useId:pd,unstable_isNewReconciler:!1};function En(e,n){if(e&&e.defaultProps){n=_({},n),e=e.defaultProps;for(var i in e)n[i]===void 0&&(n[i]=e[i]);return n}return n}function Rs(e,n,i,o){n=e.memoizedState,i=i(o,n),i=i==null?n:_({},n,i),e.memoizedState=i,e.lanes===0&&(e.updateQueue.baseState=i)}var xr={isMounted:function(e){return(e=e._reactInternals)?Ni(e)===e:!1},enqueueSetState:function(e,n,i){e=e._reactInternals;var o=tn(),l=vi(e),u=Yn(o,l);u.payload=n,i!=null&&(u.callback=i),n=hi(e,u,l),n!==null&&(Sn(n,e,l,o),br(n,e,l))},enqueueReplaceState:function(e,n,i){e=e._reactInternals;var o=tn(),l=vi(e),u=Yn(o,l);u.tag=1,u.payload=n,i!=null&&(u.callback=i),n=hi(e,u,l),n!==null&&(Sn(n,e,l,o),br(n,e,l))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var i=tn(),o=vi(e),l=Yn(i,o);l.tag=2,n!=null&&(l.callback=n),n=hi(e,l,o),n!==null&&(Sn(n,e,o,i),br(n,e,o))}};function kd(e,n,i,o,l,u,m){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,u,m):n.prototype&&n.prototype.isPureReactComponent?!la(i,o)||!la(l,u):!0}function vd(e,n,i){var o=!1,l=zi,u=n.contextType;return typeof u=="object"&&u!==null?u=gn(u):(l=rn(n)?Ri:Qe.current,o=n.contextTypes,u=(o=o!=null)?yt(e,l):zi),n=new n(i,u),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=xr,e.stateNode=n,n._reactInternals=e,o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=u),n}function bd(e,n,i,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(i,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(i,o),n.state!==e&&xr.enqueueReplaceState(n,n.state,null)}function Os(e,n,i,o){var l=e.stateNode;l.props=i,l.state=e.memoizedState,l.refs={},vs(e);var u=n.contextType;typeof u=="object"&&u!==null?l.context=gn(u):(u=rn(n)?Ri:Qe.current,l.context=yt(e,u)),l.state=e.memoizedState,u=n.getDerivedStateFromProps,typeof u=="function"&&(Rs(e,n,u,i),l.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(n=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),n!==l.state&&xr.enqueueReplaceState(l,l.state,null),Cr(e,i,l,o),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function vt(e,n){try{var i="",o=n;do i+=se(o),o=o.return;while(o);var l=i}catch(u){l=`
Error generating stack: `+u.message+`
`+u.stack}return{value:e,source:n,stack:l,digest:null}}function Fs(e,n,i){return{value:e,source:null,stack:i??null,digest:n??null}}function _s(e,n){try{console.error(n.value)}catch(i){setTimeout(function(){throw i})}}var Rw=typeof WeakMap=="function"?WeakMap:Map;function Cd(e,n,i){i=Yn(-1,i),i.tag=3,i.payload={element:null};var o=n.value;return i.callback=function(){_r||(_r=!0,qs=o),_s(e,n)},i}function Dd(e,n,i){i=Yn(-1,i),i.tag=3;var o=e.type.getDerivedStateFromError;if(typeof o=="function"){var l=n.value;i.payload=function(){return o(l)},i.callback=function(){_s(e,n)}}var u=e.stateNode;return u!==null&&typeof u.componentDidCatch=="function"&&(i.callback=function(){_s(e,n),typeof o!="function"&&(ji===null?ji=new Set([this]):ji.add(this));var m=n.stack;this.componentDidCatch(n.value,{componentStack:m!==null?m:""})}),i}function Ad(e,n,i){var o=e.pingCache;if(o===null){o=e.pingCache=new Rw;var l=new Set;o.set(n,l)}else l=o.get(n),l===void 0&&(l=new Set,o.set(n,l));l.has(i)||(l.add(i),e=Vw.bind(null,e,n,i),n.then(e,e))}function Ed(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function Pd(e,n,i,o,l){return(e.mode&1)===0?(e===n?e.flags|=65536:(e.flags|=128,i.flags|=131072,i.flags&=-52805,i.tag===1&&(i.alternate===null?i.tag=17:(n=Yn(-1,1),n.tag=2,hi(i,n,1))),i.lanes|=1),e):(e.flags|=65536,e.lanes=l,e)}var Ow=ae.ReactCurrentOwner,on=!1;function nn(e,n,i,o){n.child=e===null?Zc(n,null,i,o):ht(n,e.child,i,o)}function Td(e,n,i,o,l){i=i.render;var u=n.ref;return jt(n,l),o=Ts(e,n,i,o,u,l),i=Ss(),e!==null&&!on?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~l,Qn(e,n,l)):(Te&&i&&ms(n),n.flags|=1,nn(e,n,o,l),n.child)}function Sd(e,n,i,o,l){if(e===null){var u=i.type;return typeof u=="function"&&!ol(u)&&u.defaultProps===void 0&&i.compare===null&&i.defaultProps===void 0?(n.tag=15,n.type=u,xd(e,n,u,o,l)):(e=Hr(i.type,null,o,n,n.mode,l),e.ref=n.ref,e.return=n,n.child=e)}if(u=e.child,(e.lanes&l)===0){var m=u.memoizedProps;if(i=i.compare,i=i!==null?i:la,i(m,o)&&e.ref===n.ref)return Qn(e,n,l)}return n.flags|=1,e=Ci(u,o),e.ref=n.ref,e.return=n,n.child=e}function xd(e,n,i,o,l){if(e!==null){var u=e.memoizedProps;if(la(u,o)&&e.ref===n.ref)if(on=!1,n.pendingProps=o=u,(e.lanes&l)!==0)(e.flags&131072)!==0&&(on=!0);else return n.lanes=e.lanes,Qn(e,n,l)}return Ms(e,n,i,o,l)}function Gd(e,n,i){var o=n.pendingProps,l=o.children,u=e!==null?e.memoizedState:null;if(o.mode==="hidden")if((n.mode&1)===0)n.memoizedState={baseLanes:0,cachePool:null,transitions:null},be(Ct,yn),yn|=i;else{if((i&1073741824)===0)return e=u!==null?u.baseLanes|i:i,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,be(Ct,yn),yn|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},o=u!==null?u.baseLanes:i,be(Ct,yn),yn|=o}else u!==null?(o=u.baseLanes|i,n.memoizedState=null):o=i,be(Ct,yn),yn|=o;return nn(e,n,l,i),n.child}function Nd(e,n){var i=n.ref;(e===null&&i!==null||e!==null&&e.ref!==i)&&(n.flags|=512,n.flags|=2097152)}function Ms(e,n,i,o,l){var u=rn(i)?Ri:Qe.current;return u=yt(n,u),jt(n,l),i=Ts(e,n,i,o,u,l),o=Ss(),e!==null&&!on?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~l,Qn(e,n,l)):(Te&&o&&ms(n),n.flags|=1,nn(e,n,i,l),n.child)}function Bd(e,n,i,o,l){if(rn(i)){var u=!0;zr(n)}else u=!1;if(jt(n,l),n.stateNode===null)Nr(e,n),vd(n,i,o),Os(n,i,o,l),o=!0;else if(e===null){var m=n.stateNode,z=n.memoizedProps;m.props=z;var p=m.context,C=i.contextType;typeof C=="object"&&C!==null?C=gn(C):(C=rn(i)?Ri:Qe.current,C=yt(n,C));var S=i.getDerivedStateFromProps,N=typeof S=="function"||typeof m.getSnapshotBeforeUpdate=="function";N||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(z!==o||p!==C)&&bd(n,m,o,C),pi=!1;var T=n.memoizedState;m.state=T,Cr(n,o,m,l),p=n.memoizedState,z!==o||T!==p||an.current||pi?(typeof S=="function"&&(Rs(n,i,S,o),p=n.memoizedState),(z=pi||kd(n,i,z,o,T,p,C))?(N||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(n.flags|=4194308)):(typeof m.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=p),m.props=o,m.state=p,m.context=C,o=z):(typeof m.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{m=n.stateNode,Yc(e,n),z=n.memoizedProps,C=n.type===n.elementType?z:En(n.type,z),m.props=C,N=n.pendingProps,T=m.context,p=i.contextType,typeof p=="object"&&p!==null?p=gn(p):(p=rn(i)?Ri:Qe.current,p=yt(n,p));var M=i.getDerivedStateFromProps;(S=typeof M=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(z!==N||T!==p)&&bd(n,m,o,p),pi=!1,T=n.memoizedState,m.state=T,Cr(n,o,m,l);var H=n.memoizedState;z!==N||T!==H||an.current||pi?(typeof M=="function"&&(Rs(n,i,M,o),H=n.memoizedState),(C=pi||kd(n,i,C,o,T,H,p)||!1)?(S||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(o,H,p),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(o,H,p)),typeof m.componentDidUpdate=="function"&&(n.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof m.componentDidUpdate!="function"||z===e.memoizedProps&&T===e.memoizedState||(n.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||z===e.memoizedProps&&T===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=H),m.props=o,m.state=H,m.context=p,o=C):(typeof m.componentDidUpdate!="function"||z===e.memoizedProps&&T===e.memoizedState||(n.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||z===e.memoizedProps&&T===e.memoizedState||(n.flags|=1024),o=!1)}return Is(e,n,i,o,u,l)}function Is(e,n,i,o,l,u){Nd(e,n);var m=(n.flags&128)!==0;if(!o&&!m)return l&&Mc(n,i,!1),Qn(e,n,u);o=n.stateNode,Ow.current=n;var z=m&&typeof i.getDerivedStateFromError!="function"?null:o.render();return n.flags|=1,e!==null&&m?(n.child=ht(n,e.child,null,u),n.child=ht(n,null,z,u)):nn(e,n,z,u),n.memoizedState=o.state,l&&Mc(n,i,!0),n.child}function Rd(e){var n=e.stateNode;n.pendingContext?Fc(e,n.pendingContext,n.pendingContext!==n.context):n.context&&Fc(e,n.context,!1),bs(e,n.containerInfo)}function Od(e,n,i,o,l){return pt(),ws(l),n.flags|=256,nn(e,n,i,o),n.child}var Js={dehydrated:null,treeContext:null,retryLane:0};function Ws(e){return{baseLanes:e,cachePool:null,transitions:null}}function Fd(e,n,i){var o=n.pendingProps,l=Se.current,u=!1,m=(n.flags&128)!==0,z;if((z=m)||(z=e!==null&&e.memoizedState===null?!1:(l&2)!==0),z?(u=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),be(Se,l&1),e===null)return zs(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((n.mode&1)===0?n.lanes=1:e.data==="$!"?n.lanes=8:n.lanes=1073741824,null):(m=o.children,e=o.fallback,u?(o=n.mode,u=n.child,m={mode:"hidden",children:m},(o&1)===0&&u!==null?(u.childLanes=0,u.pendingProps=m):u=Kr(m,o,0,null),e=Ki(e,o,i,null),u.return=n,e.return=n,u.sibling=e,n.child=u,n.child.memoizedState=Ws(i),n.memoizedState=Js,e):Ls(n,m));if(l=e.memoizedState,l!==null&&(z=l.dehydrated,z!==null))return Fw(e,n,m,o,z,l,i);if(u){u=o.fallback,m=n.mode,l=e.child,z=l.sibling;var p={mode:"hidden",children:o.children};return(m&1)===0&&n.child!==l?(o=n.child,o.childLanes=0,o.pendingProps=p,n.deletions=null):(o=Ci(l,p),o.subtreeFlags=l.subtreeFlags&14680064),z!==null?u=Ci(z,u):(u=Ki(u,m,i,null),u.flags|=2),u.return=n,o.return=n,o.sibling=u,n.child=o,o=u,u=n.child,m=e.child.memoizedState,m=m===null?Ws(i):{baseLanes:m.baseLanes|i,cachePool:null,transitions:m.transitions},u.memoizedState=m,u.childLanes=e.childLanes&~i,n.memoizedState=Js,o}return u=e.child,e=u.sibling,o=Ci(u,{mode:"visible",children:o.children}),(n.mode&1)===0&&(o.lanes=i),o.return=n,o.sibling=null,e!==null&&(i=n.deletions,i===null?(n.deletions=[e],n.flags|=16):i.push(e)),n.child=o,n.memoizedState=null,o}function Ls(e,n){return n=Kr({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function Gr(e,n,i,o){return o!==null&&ws(o),ht(n,e.child,null,i),e=Ls(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Fw(e,n,i,o,l,u,m){if(i)return n.flags&256?(n.flags&=-257,o=Fs(Error(r(422))),Gr(e,n,m,o)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(u=o.fallback,l=n.mode,o=Kr({mode:"visible",children:o.children},l,0,null),u=Ki(u,l,m,null),u.flags|=2,o.return=n,u.return=n,o.sibling=u,n.child=o,(n.mode&1)!==0&&ht(n,e.child,null,m),n.child.memoizedState=Ws(m),n.memoizedState=Js,u);if((n.mode&1)===0)return Gr(e,n,m,null);if(l.data==="$!"){if(o=l.nextSibling&&l.nextSibling.dataset,o)var z=o.dgst;return o=z,u=Error(r(419)),o=Fs(u,o,void 0),Gr(e,n,m,o)}if(z=(m&e.childLanes)!==0,on||z){if(o=Le,o!==null){switch(m&-m){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=(l&(o.suspendedLanes|m))!==0?0:l,l!==0&&l!==u.retryLane&&(u.retryLane=l,Vn(e,l),Sn(o,e,l,-1))}return rl(),o=Fs(Error(r(421))),Gr(e,n,m,o)}return l.data==="$?"?(n.flags|=128,n.child=e.child,n=Yw.bind(null,e),l._reactRetry=n,null):(e=u.treeContext,fn=fi(l.nextSibling),mn=n,Te=!0,An=null,e!==null&&(pn[hn++]=$n,pn[hn++]=Zn,pn[hn++]=Oi,$n=e.id,Zn=e.overflow,Oi=n),n=Ls(n,o.children),n.flags|=4096,n)}function _d(e,n,i){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),js(e.return,n,i)}function Hs(e,n,i,o,l){var u=e.memoizedState;u===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:i,tailMode:l}:(u.isBackwards=n,u.rendering=null,u.renderingStartTime=0,u.last=o,u.tail=i,u.tailMode=l)}function Md(e,n,i){var o=n.pendingProps,l=o.revealOrder,u=o.tail;if(nn(e,n,o.children,i),o=Se.current,(o&2)!==0)o=o&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&_d(e,i,n);else if(e.tag===19)_d(e,i,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}if(be(Se,o),(n.mode&1)===0)n.memoizedState=null;else switch(l){case"forwards":for(i=n.child,l=null;i!==null;)e=i.alternate,e!==null&&Dr(e)===null&&(l=i),i=i.sibling;i=l,i===null?(l=n.child,n.child=null):(l=i.sibling,i.sibling=null),Hs(n,!1,l,i,u);break;case"backwards":for(i=null,l=n.child,n.child=null;l!==null;){if(e=l.alternate,e!==null&&Dr(e)===null){n.child=l;break}e=l.sibling,l.sibling=i,i=l,l=e}Hs(n,!0,i,null,u);break;case"together":Hs(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Nr(e,n){(n.mode&1)===0&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function Qn(e,n,i){if(e!==null&&(n.dependencies=e.dependencies),Ji|=n.lanes,(i&n.childLanes)===0)return null;if(e!==null&&n.child!==e.child)throw Error(r(153));if(n.child!==null){for(e=n.child,i=Ci(e,e.pendingProps),n.child=i,i.return=n;e.sibling!==null;)e=e.sibling,i=i.sibling=Ci(e,e.pendingProps),i.return=n;i.sibling=null}return n.child}function _w(e,n,i){switch(n.tag){case 3:Rd(n),pt();break;case 5:qc(n);break;case 1:rn(n.type)&&zr(n);break;case 4:bs(n,n.stateNode.containerInfo);break;case 10:var o=n.type._context,l=n.memoizedProps.value;be(kr,o._currentValue),o._currentValue=l;break;case 13:if(o=n.memoizedState,o!==null)return o.dehydrated!==null?(be(Se,Se.current&1),n.flags|=128,null):(i&n.child.childLanes)!==0?Fd(e,n,i):(be(Se,Se.current&1),e=Qn(e,n,i),e!==null?e.sibling:null);be(Se,Se.current&1);break;case 19:if(o=(i&n.childLanes)!==0,(e.flags&128)!==0){if(o)return Md(e,n,i);n.flags|=128}if(l=n.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),be(Se,Se.current),o)break;return null;case 22:case 23:return n.lanes=0,Gd(e,n,i)}return Qn(e,n,i)}var Id,Ks,Jd,Wd;Id=function(e,n){for(var i=n.child;i!==null;){if(i.tag===5||i.tag===6)e.appendChild(i.stateNode);else if(i.tag!==4&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return;i=i.return}i.sibling.return=i.return,i=i.sibling}},Ks=function(){},Jd=function(e,n,i,o){var l=e.memoizedProps;if(l!==o){e=n.stateNode,Mi(_n.current);var u=null;switch(i){case"input":l=Bn(e,l),o=Bn(e,o),u=[];break;case"select":l=_({},l,{value:void 0}),o=_({},o,{value:void 0}),u=[];break;case"textarea":l=Lt(e,l),o=Lt(e,o),u=[];break;default:typeof l.onClick!="function"&&typeof o.onClick=="function"&&(e.onclick=mr)}Do(i,o);var m;i=null;for(C in l)if(!o.hasOwnProperty(C)&&l.hasOwnProperty(C)&&l[C]!=null)if(C==="style"){var z=l[C];for(m in z)z.hasOwnProperty(m)&&(i||(i={}),i[m]="")}else C!=="dangerouslySetInnerHTML"&&C!=="children"&&C!=="suppressContentEditableWarning"&&C!=="suppressHydrationWarning"&&C!=="autoFocus"&&(c.hasOwnProperty(C)?u||(u=[]):(u=u||[]).push(C,null));for(C in o){var p=o[C];if(z=l?.[C],o.hasOwnProperty(C)&&p!==z&&(p!=null||z!=null))if(C==="style")if(z){for(m in z)!z.hasOwnProperty(m)||p&&p.hasOwnProperty(m)||(i||(i={}),i[m]="");for(m in p)p.hasOwnProperty(m)&&z[m]!==p[m]&&(i||(i={}),i[m]=p[m])}else i||(u||(u=[]),u.push(C,i)),i=p;else C==="dangerouslySetInnerHTML"?(p=p?p.__html:void 0,z=z?z.__html:void 0,p!=null&&z!==p&&(u=u||[]).push(C,p)):C==="children"?typeof p!="string"&&typeof p!="number"||(u=u||[]).push(C,""+p):C!=="suppressContentEditableWarning"&&C!=="suppressHydrationWarning"&&(c.hasOwnProperty(C)?(p!=null&&C==="onScroll"&&Ce("scroll",e),u||z===p||(u=[])):(u=u||[]).push(C,p))}i&&(u=u||[]).push("style",i);var C=u;(n.updateQueue=C)&&(n.flags|=4)}},Wd=function(e,n,i,o){i!==o&&(n.flags|=4)};function ba(e,n){if(!Te)switch(e.tailMode){case"hidden":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e.tail=null:i.sibling=null;break;case"collapsed":i=e.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function qe(e){var n=e.alternate!==null&&e.alternate.child===e.child,i=0,o=0;if(n)for(var l=e.child;l!==null;)i|=l.lanes|l.childLanes,o|=l.subtreeFlags&14680064,o|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)i|=l.lanes|l.childLanes,o|=l.subtreeFlags,o|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=o,e.childLanes=i,n}function Mw(e,n,i){var o=n.pendingProps;switch(fs(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qe(n),null;case 1:return rn(n.type)&&yr(),qe(n),null;case 3:return o=n.stateNode,kt(),De(an),De(Qe),As(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(e===null||e.child===null)&&(gr(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,An!==null&&(il(An),An=null))),Ks(e,n),qe(n),null;case 5:Cs(n);var l=Mi(ha.current);if(i=n.type,e!==null&&n.stateNode!=null)Jd(e,n,i,o,l),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!o){if(n.stateNode===null)throw Error(r(166));return qe(n),null}if(e=Mi(_n.current),gr(n)){o=n.stateNode,i=n.type;var u=n.memoizedProps;switch(o[Fn]=n,o[fa]=u,e=(n.mode&1)!==0,i){case"dialog":Ce("cancel",o),Ce("close",o);break;case"iframe":case"object":case"embed":Ce("load",o);break;case"video":case"audio":for(l=0;l<ca.length;l++)Ce(ca[l],o);break;case"source":Ce("error",o);break;case"img":case"image":case"link":Ce("error",o),Ce("load",o);break;case"details":Ce("toggle",o);break;case"input":ve(o,u),Ce("invalid",o);break;case"select":o._wrapperState={wasMultiple:!!u.multiple},Ce("invalid",o);break;case"textarea":La(o,u),Ce("invalid",o)}Do(i,u),l=null;for(var m in u)if(u.hasOwnProperty(m)){var z=u[m];m==="children"?typeof z=="string"?o.textContent!==z&&(u.suppressHydrationWarning!==!0&&dr(o.textContent,z,e),l=["children",z]):typeof z=="number"&&o.textContent!==""+z&&(u.suppressHydrationWarning!==!0&&dr(o.textContent,z,e),l=["children",""+z]):c.hasOwnProperty(m)&&z!=null&&m==="onScroll"&&Ce("scroll",o)}switch(i){case"input":Wn(o),Wa(o,u,!0);break;case"textarea":Wn(o),Ha(o);break;case"select":case"option":break;default:typeof u.onClick=="function"&&(o.onclick=mr)}o=l,n.updateQueue=o,o!==null&&(n.flags|=4)}else{m=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=fe(i)),e==="http://www.w3.org/1999/xhtml"?i==="script"?(e=m.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof o.is=="string"?e=m.createElement(i,{is:o.is}):(e=m.createElement(i),i==="select"&&(m=e,o.multiple?m.multiple=!0:o.size&&(m.size=o.size))):e=m.createElementNS(e,i),e[Fn]=n,e[fa]=o,Id(e,n,!1,!1),n.stateNode=e;e:{switch(m=Ao(i,o),i){case"dialog":Ce("cancel",e),Ce("close",e),l=o;break;case"iframe":case"object":case"embed":Ce("load",e),l=o;break;case"video":case"audio":for(l=0;l<ca.length;l++)Ce(ca[l],e);l=o;break;case"source":Ce("error",e),l=o;break;case"img":case"image":case"link":Ce("error",e),Ce("load",e),l=o;break;case"details":Ce("toggle",e),l=o;break;case"input":ve(e,o),l=Bn(e,o),Ce("invalid",e);break;case"option":l=o;break;case"select":e._wrapperState={wasMultiple:!!o.multiple},l=_({},o,{value:void 0}),Ce("invalid",e);break;case"textarea":La(e,o),l=Lt(e,o),Ce("invalid",e);break;default:l=o}Do(i,l),z=l;for(u in z)if(z.hasOwnProperty(u)){var p=z[u];u==="style"?xu(e,p):u==="dangerouslySetInnerHTML"?(p=p?p.__html:void 0,p!=null&&Tu(e,p)):u==="children"?typeof p=="string"?(i!=="textarea"||p!=="")&&Kt(e,p):typeof p=="number"&&Kt(e,""+p):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(c.hasOwnProperty(u)?p!=null&&u==="onScroll"&&Ce("scroll",e):p!=null&&te(e,u,p,m))}switch(i){case"input":Wn(e),Wa(e,o,!1);break;case"textarea":Wn(e),Ha(e);break;case"option":o.value!=null&&e.setAttribute("value",""+me(o.value));break;case"select":e.multiple=!!o.multiple,u=o.value,u!=null?oi(e,!!o.multiple,u,!1):o.defaultValue!=null&&oi(e,!!o.multiple,o.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=mr)}switch(i){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}}o&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return qe(n),null;case 6:if(e&&n.stateNode!=null)Wd(e,n,e.memoizedProps,o);else{if(typeof o!="string"&&n.stateNode===null)throw Error(r(166));if(i=Mi(ha.current),Mi(_n.current),gr(n)){if(o=n.stateNode,i=n.memoizedProps,o[Fn]=n,(u=o.nodeValue!==i)&&(e=mn,e!==null))switch(e.tag){case 3:dr(o.nodeValue,i,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&dr(o.nodeValue,i,(e.mode&1)!==0)}u&&(n.flags|=4)}else o=(i.nodeType===9?i:i.ownerDocument).createTextNode(o),o[Fn]=n,n.stateNode=o}return qe(n),null;case 13:if(De(Se),o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Te&&fn!==null&&(n.mode&1)!==0&&(n.flags&128)===0)Kc(),pt(),n.flags|=98560,u=!1;else if(u=gr(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[Fn]=n}else pt(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;qe(n),u=!1}else An!==null&&(il(An),An=null),u=!0;if(!u)return n.flags&65536?n:null}return(n.flags&128)!==0?(n.lanes=i,n):(o=o!==null,o!==(e!==null&&e.memoizedState!==null)&&o&&(n.child.flags|=8192,(n.mode&1)!==0&&(e===null||(Se.current&1)!==0?Je===0&&(Je=3):rl())),n.updateQueue!==null&&(n.flags|=4),qe(n),null);case 4:return kt(),Ks(e,n),e===null&&da(n.stateNode.containerInfo),qe(n),null;case 10:return gs(n.type._context),qe(n),null;case 17:return rn(n.type)&&yr(),qe(n),null;case 19:if(De(Se),u=n.memoizedState,u===null)return qe(n),null;if(o=(n.flags&128)!==0,m=u.rendering,m===null)if(o)ba(u,!1);else{if(Je!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(m=Dr(e),m!==null){for(n.flags|=128,ba(u,!1),o=m.updateQueue,o!==null&&(n.updateQueue=o,n.flags|=4),n.subtreeFlags=0,o=i,i=n.child;i!==null;)u=i,e=o,u.flags&=14680066,m=u.alternate,m===null?(u.childLanes=0,u.lanes=e,u.child=null,u.subtreeFlags=0,u.memoizedProps=null,u.memoizedState=null,u.updateQueue=null,u.dependencies=null,u.stateNode=null):(u.childLanes=m.childLanes,u.lanes=m.lanes,u.child=m.child,u.subtreeFlags=0,u.deletions=null,u.memoizedProps=m.memoizedProps,u.memoizedState=m.memoizedState,u.updateQueue=m.updateQueue,u.type=m.type,e=m.dependencies,u.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),i=i.sibling;return be(Se,Se.current&1|2),n.child}e=e.sibling}u.tail!==null&&Re()>Dt&&(n.flags|=128,o=!0,ba(u,!1),n.lanes=4194304)}else{if(!o)if(e=Dr(m),e!==null){if(n.flags|=128,o=!0,i=e.updateQueue,i!==null&&(n.updateQueue=i,n.flags|=4),ba(u,!0),u.tail===null&&u.tailMode==="hidden"&&!m.alternate&&!Te)return qe(n),null}else 2*Re()-u.renderingStartTime>Dt&&i!==1073741824&&(n.flags|=128,o=!0,ba(u,!1),n.lanes=4194304);u.isBackwards?(m.sibling=n.child,n.child=m):(i=u.last,i!==null?i.sibling=m:n.child=m,u.last=m)}return u.tail!==null?(n=u.tail,u.rendering=n,u.tail=n.sibling,u.renderingStartTime=Re(),n.sibling=null,i=Se.current,be(Se,o?i&1|2:i&1),n):(qe(n),null);case 22:case 23:return al(),o=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==o&&(n.flags|=8192),o&&(n.mode&1)!==0?(yn&1073741824)!==0&&(qe(n),n.subtreeFlags&6&&(n.flags|=8192)):qe(n),null;case 24:return null;case 25:return null}throw Error(r(156,n.tag))}function Iw(e,n){switch(fs(n),n.tag){case 1:return rn(n.type)&&yr(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return kt(),De(an),De(Qe),As(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 5:return Cs(n),null;case 13:if(De(Se),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(r(340));pt()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return De(Se),null;case 4:return kt(),null;case 10:return gs(n.type._context),null;case 22:case 23:return al(),null;case 24:return null;default:return null}}var Br=!1,en=!1,Jw=typeof WeakSet=="function"?WeakSet:Set,W=null;function bt(e,n){var i=e.ref;if(i!==null)if(typeof i=="function")try{i(null)}catch(o){Ne(e,n,o)}else i.current=null}function Us(e,n,i){try{i()}catch(o){Ne(e,n,o)}}var Ld=!1;function Ww(e,n){if(as=er,e=kc(),Yo(e)){if("selectionStart"in e)var i={start:e.selectionStart,end:e.selectionEnd};else e:{i=(i=e.ownerDocument)&&i.defaultView||window;var o=i.getSelection&&i.getSelection();if(o&&o.rangeCount!==0){i=o.anchorNode;var l=o.anchorOffset,u=o.focusNode;o=o.focusOffset;try{i.nodeType,u.nodeType}catch{i=null;break e}var m=0,z=-1,p=-1,C=0,S=0,N=e,T=null;n:for(;;){for(var M;N!==i||l!==0&&N.nodeType!==3||(z=m+l),N!==u||o!==0&&N.nodeType!==3||(p=m+o),N.nodeType===3&&(m+=N.nodeValue.length),(M=N.firstChild)!==null;)T=N,N=M;for(;;){if(N===e)break n;if(T===i&&++C===l&&(z=m),T===u&&++S===o&&(p=m),(M=N.nextSibling)!==null)break;N=T,T=N.parentNode}N=M}i=z===-1||p===-1?null:{start:z,end:p}}else i=null}i=i||{start:0,end:0}}else i=null;for(rs={focusedElem:e,selectionRange:i},er=!1,W=n;W!==null;)if(n=W,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,W=e;else for(;W!==null;){n=W;try{var H=n.alternate;if((n.flags&1024)!==0)switch(n.tag){case 0:case 11:case 15:break;case 1:if(H!==null){var K=H.memoizedProps,Oe=H.memoizedState,k=n.stateNode,h=k.getSnapshotBeforeUpdate(n.elementType===n.type?K:En(n.type,K),Oe);k.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var b=n.stateNode.containerInfo;b.nodeType===1?b.textContent="":b.nodeType===9&&b.documentElement&&b.removeChild(b.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(r(163))}}catch(R){Ne(n,n.return,R)}if(e=n.sibling,e!==null){e.return=n.return,W=e;break}W=n.return}return H=Ld,Ld=!1,H}function Ca(e,n,i){var o=n.updateQueue;if(o=o!==null?o.lastEffect:null,o!==null){var l=o=o.next;do{if((l.tag&e)===e){var u=l.destroy;l.destroy=void 0,u!==void 0&&Us(n,i,u)}l=l.next}while(l!==o)}}function Rr(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var i=n=n.next;do{if((i.tag&e)===e){var o=i.create;i.destroy=o()}i=i.next}while(i!==n)}}function $s(e){var n=e.ref;if(n!==null){var i=e.stateNode;e.tag,e=i,typeof n=="function"?n(e):n.current=e}}function Hd(e){var n=e.alternate;n!==null&&(e.alternate=null,Hd(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Fn],delete n[fa],delete n[us],delete n[Cw],delete n[Dw])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Kd(e){return e.tag===5||e.tag===3||e.tag===4}function Ud(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Kd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Zs(e,n,i){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?i.nodeType===8?i.parentNode.insertBefore(e,n):i.insertBefore(e,n):(i.nodeType===8?(n=i.parentNode,n.insertBefore(e,i)):(n=i,n.appendChild(e)),i=i._reactRootContainer,i!=null||n.onclick!==null||(n.onclick=mr));else if(o!==4&&(e=e.child,e!==null))for(Zs(e,n,i),e=e.sibling;e!==null;)Zs(e,n,i),e=e.sibling}function Vs(e,n,i){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?i.insertBefore(e,n):i.appendChild(e);else if(o!==4&&(e=e.child,e!==null))for(Vs(e,n,i),e=e.sibling;e!==null;)Vs(e,n,i),e=e.sibling}var $e=null,Pn=!1;function gi(e,n,i){for(i=i.child;i!==null;)$d(e,n,i),i=i.sibling}function $d(e,n,i){if(On&&typeof On.onCommitFiberUnmount=="function")try{On.onCommitFiberUnmount(Za,i)}catch{}switch(i.tag){case 5:en||bt(i,n);case 6:var o=$e,l=Pn;$e=null,gi(e,n,i),$e=o,Pn=l,$e!==null&&(Pn?(e=$e,i=i.stateNode,e.nodeType===8?e.parentNode.removeChild(i):e.removeChild(i)):$e.removeChild(i.stateNode));break;case 18:$e!==null&&(Pn?(e=$e,i=i.stateNode,e.nodeType===8?ls(e.parentNode,i):e.nodeType===1&&ls(e,i),ia(e)):ls($e,i.stateNode));break;case 4:o=$e,l=Pn,$e=i.stateNode.containerInfo,Pn=!0,gi(e,n,i),$e=o,Pn=l;break;case 0:case 11:case 14:case 15:if(!en&&(o=i.updateQueue,o!==null&&(o=o.lastEffect,o!==null))){l=o=o.next;do{var u=l,m=u.destroy;u=u.tag,m!==void 0&&((u&2)!==0||(u&4)!==0)&&Us(i,n,m),l=l.next}while(l!==o)}gi(e,n,i);break;case 1:if(!en&&(bt(i,n),o=i.stateNode,typeof o.componentWillUnmount=="function"))try{o.props=i.memoizedProps,o.state=i.memoizedState,o.componentWillUnmount()}catch(z){Ne(i,n,z)}gi(e,n,i);break;case 21:gi(e,n,i);break;case 22:i.mode&1?(en=(o=en)||i.memoizedState!==null,gi(e,n,i),en=o):gi(e,n,i);break;default:gi(e,n,i)}}function Zd(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var i=e.stateNode;i===null&&(i=e.stateNode=new Jw),n.forEach(function(o){var l=Qw.bind(null,e,o);i.has(o)||(i.add(o),o.then(l,l))})}}function Tn(e,n){var i=n.deletions;if(i!==null)for(var o=0;o<i.length;o++){var l=i[o];try{var u=e,m=n,z=m;e:for(;z!==null;){switch(z.tag){case 5:$e=z.stateNode,Pn=!1;break e;case 3:$e=z.stateNode.containerInfo,Pn=!0;break e;case 4:$e=z.stateNode.containerInfo,Pn=!0;break e}z=z.return}if($e===null)throw Error(r(160));$d(u,m,l),$e=null,Pn=!1;var p=l.alternate;p!==null&&(p.return=null),l.return=null}catch(C){Ne(l,n,C)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Vd(n,e),n=n.sibling}function Vd(e,n){var i=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Tn(n,e),In(e),o&4){try{Ca(3,e,e.return),Rr(3,e)}catch(K){Ne(e,e.return,K)}try{Ca(5,e,e.return)}catch(K){Ne(e,e.return,K)}}break;case 1:Tn(n,e),In(e),o&512&&i!==null&&bt(i,i.return);break;case 5:if(Tn(n,e),In(e),o&512&&i!==null&&bt(i,i.return),e.flags&32){var l=e.stateNode;try{Kt(l,"")}catch(K){Ne(e,e.return,K)}}if(o&4&&(l=e.stateNode,l!=null)){var u=e.memoizedProps,m=i!==null?i.memoizedProps:u,z=e.type,p=e.updateQueue;if(e.updateQueue=null,p!==null)try{z==="input"&&u.type==="radio"&&u.name!=null&&Si(l,u),Ao(z,m);var C=Ao(z,u);for(m=0;m<p.length;m+=2){var S=p[m],N=p[m+1];S==="style"?xu(l,N):S==="dangerouslySetInnerHTML"?Tu(l,N):S==="children"?Kt(l,N):te(l,S,N,C)}switch(z){case"input":Hn(l,u);break;case"textarea":Ht(l,u);break;case"select":var T=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!u.multiple;var M=u.value;M!=null?oi(l,!!u.multiple,M,!1):T!==!!u.multiple&&(u.defaultValue!=null?oi(l,!!u.multiple,u.defaultValue,!0):oi(l,!!u.multiple,u.multiple?[]:"",!1))}l[fa]=u}catch(K){Ne(e,e.return,K)}}break;case 6:if(Tn(n,e),In(e),o&4){if(e.stateNode===null)throw Error(r(162));l=e.stateNode,u=e.memoizedProps;try{l.nodeValue=u}catch(K){Ne(e,e.return,K)}}break;case 3:if(Tn(n,e),In(e),o&4&&i!==null&&i.memoizedState.isDehydrated)try{ia(n.containerInfo)}catch(K){Ne(e,e.return,K)}break;case 4:Tn(n,e),In(e);break;case 13:Tn(n,e),In(e),l=e.child,l.flags&8192&&(u=l.memoizedState!==null,l.stateNode.isHidden=u,!u||l.alternate!==null&&l.alternate.memoizedState!==null||(Xs=Re())),o&4&&Zd(e);break;case 22:if(S=i!==null&&i.memoizedState!==null,e.mode&1?(en=(C=en)||S,Tn(n,e),en=C):Tn(n,e),In(e),o&8192){if(C=e.memoizedState!==null,(e.stateNode.isHidden=C)&&!S&&(e.mode&1)!==0)for(W=e,S=e.child;S!==null;){for(N=W=S;W!==null;){switch(T=W,M=T.child,T.tag){case 0:case 11:case 14:case 15:Ca(4,T,T.return);break;case 1:bt(T,T.return);var H=T.stateNode;if(typeof H.componentWillUnmount=="function"){o=T,i=T.return;try{n=o,H.props=n.memoizedProps,H.state=n.memoizedState,H.componentWillUnmount()}catch(K){Ne(o,i,K)}}break;case 5:bt(T,T.return);break;case 22:if(T.memoizedState!==null){Xd(N);continue}}M!==null?(M.return=T,W=M):Xd(N)}S=S.sibling}e:for(S=null,N=e;;){if(N.tag===5){if(S===null){S=N;try{l=N.stateNode,C?(u=l.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none"):(z=N.stateNode,p=N.memoizedProps.style,m=p!=null&&p.hasOwnProperty("display")?p.display:null,z.style.display=Su("display",m))}catch(K){Ne(e,e.return,K)}}}else if(N.tag===6){if(S===null)try{N.stateNode.nodeValue=C?"":N.memoizedProps}catch(K){Ne(e,e.return,K)}}else if((N.tag!==22&&N.tag!==23||N.memoizedState===null||N===e)&&N.child!==null){N.child.return=N,N=N.child;continue}if(N===e)break e;for(;N.sibling===null;){if(N.return===null||N.return===e)break e;S===N&&(S=null),N=N.return}S===N&&(S=null),N.sibling.return=N.return,N=N.sibling}}break;case 19:Tn(n,e),In(e),o&4&&Zd(e);break;case 21:break;default:Tn(n,e),In(e)}}function In(e){var n=e.flags;if(n&2){try{e:{for(var i=e.return;i!==null;){if(Kd(i)){var o=i;break e}i=i.return}throw Error(r(160))}switch(o.tag){case 5:var l=o.stateNode;o.flags&32&&(Kt(l,""),o.flags&=-33);var u=Ud(e);Vs(e,u,l);break;case 3:case 4:var m=o.stateNode.containerInfo,z=Ud(e);Zs(e,z,m);break;default:throw Error(r(161))}}catch(p){Ne(e,e.return,p)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Lw(e,n,i){W=e,Yd(e)}function Yd(e,n,i){for(var o=(e.mode&1)!==0;W!==null;){var l=W,u=l.child;if(l.tag===22&&o){var m=l.memoizedState!==null||Br;if(!m){var z=l.alternate,p=z!==null&&z.memoizedState!==null||en;z=Br;var C=en;if(Br=m,(en=p)&&!C)for(W=l;W!==null;)m=W,p=m.child,m.tag===22&&m.memoizedState!==null?qd(l):p!==null?(p.return=m,W=p):qd(l);for(;u!==null;)W=u,Yd(u),u=u.sibling;W=l,Br=z,en=C}Qd(e)}else(l.subtreeFlags&8772)!==0&&u!==null?(u.return=l,W=u):Qd(e)}}function Qd(e){for(;W!==null;){var n=W;if((n.flags&8772)!==0){var i=n.alternate;try{if((n.flags&8772)!==0)switch(n.tag){case 0:case 11:case 15:en||Rr(5,n);break;case 1:var o=n.stateNode;if(n.flags&4&&!en)if(i===null)o.componentDidMount();else{var l=n.elementType===n.type?i.memoizedProps:En(n.type,i.memoizedProps);o.componentDidUpdate(l,i.memoizedState,o.__reactInternalSnapshotBeforeUpdate)}var u=n.updateQueue;u!==null&&Xc(n,u,o);break;case 3:var m=n.updateQueue;if(m!==null){if(i=null,n.child!==null)switch(n.child.tag){case 5:i=n.child.stateNode;break;case 1:i=n.child.stateNode}Xc(n,m,i)}break;case 5:var z=n.stateNode;if(i===null&&n.flags&4){i=z;var p=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":p.autoFocus&&i.focus();break;case"img":p.src&&(i.src=p.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var C=n.alternate;if(C!==null){var S=C.memoizedState;if(S!==null){var N=S.dehydrated;N!==null&&ia(N)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(r(163))}en||n.flags&512&&$s(n)}catch(T){Ne(n,n.return,T)}}if(n===e){W=null;break}if(i=n.sibling,i!==null){i.return=n.return,W=i;break}W=n.return}}function Xd(e){for(;W!==null;){var n=W;if(n===e){W=null;break}var i=n.sibling;if(i!==null){i.return=n.return,W=i;break}W=n.return}}function qd(e){for(;W!==null;){var n=W;try{switch(n.tag){case 0:case 11:case 15:var i=n.return;try{Rr(4,n)}catch(p){Ne(n,i,p)}break;case 1:var o=n.stateNode;if(typeof o.componentDidMount=="function"){var l=n.return;try{o.componentDidMount()}catch(p){Ne(n,l,p)}}var u=n.return;try{$s(n)}catch(p){Ne(n,u,p)}break;case 5:var m=n.return;try{$s(n)}catch(p){Ne(n,m,p)}}}catch(p){Ne(n,n.return,p)}if(n===e){W=null;break}var z=n.sibling;if(z!==null){z.return=n.return,W=z;break}W=n.return}}var Hw=Math.ceil,Or=ae.ReactCurrentDispatcher,Ys=ae.ReactCurrentOwner,kn=ae.ReactCurrentBatchConfig,ye=0,Le=null,_e=null,Ze=0,yn=0,Ct=yi(0),Je=0,Da=null,Ji=0,Fr=0,Qs=0,Aa=null,sn=null,Xs=0,Dt=1/0,Xn=null,_r=!1,qs=null,ji=null,Mr=!1,ki=null,Ir=0,Ea=0,el=null,Jr=-1,Wr=0;function tn(){return(ye&6)!==0?Re():Jr!==-1?Jr:Jr=Re()}function vi(e){return(e.mode&1)===0?1:(ye&2)!==0&&Ze!==0?Ze&-Ze:Ew.transition!==null?(Wr===0&&(Wr=Uu()),Wr):(e=ke,e!==0||(e=window.event,e=e===void 0?16:nc(e.type)),e)}function Sn(e,n,i,o){if(50<Ea)throw Ea=0,el=null,Error(r(185));Qt(e,i,o),((ye&2)===0||e!==Le)&&(e===Le&&((ye&2)===0&&(Fr|=i),Je===4&&bi(e,Ze)),ln(e,o),i===1&&ye===0&&(n.mode&1)===0&&(Dt=Re()+500,wr&&wi()))}function ln(e,n){var i=e.callbackNode;Ez(e,n);var o=Qa(e,e===Le?Ze:0);if(o===0)i!==null&&Lu(i),e.callbackNode=null,e.callbackPriority=0;else if(n=o&-o,e.callbackPriority!==n){if(i!=null&&Lu(i),n===1)e.tag===0?Aw(nm.bind(null,e)):Ic(nm.bind(null,e)),vw(function(){(ye&6)===0&&wi()}),i=null;else{switch($u(o)){case 1:i=No;break;case 4:i=Hu;break;case 16:i=$a;break;case 536870912:i=Ku;break;default:i=$a}i=um(i,em.bind(null,e))}e.callbackPriority=n,e.callbackNode=i}}function em(e,n){if(Jr=-1,Wr=0,(ye&6)!==0)throw Error(r(327));var i=e.callbackNode;if(At()&&e.callbackNode!==i)return null;var o=Qa(e,e===Le?Ze:0);if(o===0)return null;if((o&30)!==0||(o&e.expiredLanes)!==0||n)n=Lr(e,o);else{n=o;var l=ye;ye|=2;var u=tm();(Le!==e||Ze!==n)&&(Xn=null,Dt=Re()+500,Li(e,n));do try{$w();break}catch(z){im(e,z)}while(!0);hs(),Or.current=u,ye=l,_e!==null?n=0:(Le=null,Ze=0,n=Je)}if(n!==0){if(n===2&&(l=Bo(e),l!==0&&(o=l,n=nl(e,l))),n===1)throw i=Da,Li(e,0),bi(e,o),ln(e,Re()),i;if(n===6)bi(e,o);else{if(l=e.current.alternate,(o&30)===0&&!Kw(l)&&(n=Lr(e,o),n===2&&(u=Bo(e),u!==0&&(o=u,n=nl(e,u))),n===1))throw i=Da,Li(e,0),bi(e,o),ln(e,Re()),i;switch(e.finishedWork=l,e.finishedLanes=o,n){case 0:case 1:throw Error(r(345));case 2:Hi(e,sn,Xn);break;case 3:if(bi(e,o),(o&130023424)===o&&(n=Xs+500-Re(),10<n)){if(Qa(e,0)!==0)break;if(l=e.suspendedLanes,(l&o)!==o){tn(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=ss(Hi.bind(null,e,sn,Xn),n);break}Hi(e,sn,Xn);break;case 4:if(bi(e,o),(o&4194240)===o)break;for(n=e.eventTimes,l=-1;0<o;){var m=31-Cn(o);u=1<<m,m=n[m],m>l&&(l=m),o&=~u}if(o=l,o=Re()-o,o=(120>o?120:480>o?480:1080>o?1080:1920>o?1920:3e3>o?3e3:4320>o?4320:1960*Hw(o/1960))-o,10<o){e.timeoutHandle=ss(Hi.bind(null,e,sn,Xn),o);break}Hi(e,sn,Xn);break;case 5:Hi(e,sn,Xn);break;default:throw Error(r(329))}}}return ln(e,Re()),e.callbackNode===i?em.bind(null,e):null}function nl(e,n){var i=Aa;return e.current.memoizedState.isDehydrated&&(Li(e,n).flags|=256),e=Lr(e,n),e!==2&&(n=sn,sn=i,n!==null&&il(n)),e}function il(e){sn===null?sn=e:sn.push.apply(sn,e)}function Kw(e){for(var n=e;;){if(n.flags&16384){var i=n.updateQueue;if(i!==null&&(i=i.stores,i!==null))for(var o=0;o<i.length;o++){var l=i[o],u=l.getSnapshot;l=l.value;try{if(!Dn(u(),l))return!1}catch{return!1}}}if(i=n.child,n.subtreeFlags&16384&&i!==null)i.return=n,n=i;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function bi(e,n){for(n&=~Qs,n&=~Fr,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var i=31-Cn(n),o=1<<i;e[i]=-1,n&=~o}}function nm(e){if((ye&6)!==0)throw Error(r(327));At();var n=Qa(e,0);if((n&1)===0)return ln(e,Re()),null;var i=Lr(e,n);if(e.tag!==0&&i===2){var o=Bo(e);o!==0&&(n=o,i=nl(e,o))}if(i===1)throw i=Da,Li(e,0),bi(e,n),ln(e,Re()),i;if(i===6)throw Error(r(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,Hi(e,sn,Xn),ln(e,Re()),null}function tl(e,n){var i=ye;ye|=1;try{return e(n)}finally{ye=i,ye===0&&(Dt=Re()+500,wr&&wi())}}function Wi(e){ki!==null&&ki.tag===0&&(ye&6)===0&&At();var n=ye;ye|=1;var i=kn.transition,o=ke;try{if(kn.transition=null,ke=1,e)return e()}finally{ke=o,kn.transition=i,ye=n,(ye&6)===0&&wi()}}function al(){yn=Ct.current,De(Ct)}function Li(e,n){e.finishedWork=null,e.finishedLanes=0;var i=e.timeoutHandle;if(i!==-1&&(e.timeoutHandle=-1,kw(i)),_e!==null)for(i=_e.return;i!==null;){var o=i;switch(fs(o),o.tag){case 1:o=o.type.childContextTypes,o!=null&&yr();break;case 3:kt(),De(an),De(Qe),As();break;case 5:Cs(o);break;case 4:kt();break;case 13:De(Se);break;case 19:De(Se);break;case 10:gs(o.type._context);break;case 22:case 23:al()}i=i.return}if(Le=e,_e=e=Ci(e.current,null),Ze=yn=n,Je=0,Da=null,Qs=Fr=Ji=0,sn=Aa=null,_i!==null){for(n=0;n<_i.length;n++)if(i=_i[n],o=i.interleaved,o!==null){i.interleaved=null;var l=o.next,u=i.pending;if(u!==null){var m=u.next;u.next=l,o.next=m}i.pending=o}_i=null}return e}function im(e,n){do{var i=_e;try{if(hs(),Ar.current=Sr,Er){for(var o=xe.memoizedState;o!==null;){var l=o.queue;l!==null&&(l.pending=null),o=o.next}Er=!1}if(Ii=0,We=Ie=xe=null,ga=!1,ja=0,Ys.current=null,i===null||i.return===null){Je=1,Da=n,_e=null;break}e:{var u=e,m=i.return,z=i,p=n;if(n=Ze,z.flags|=32768,p!==null&&typeof p=="object"&&typeof p.then=="function"){var C=p,S=z,N=S.tag;if((S.mode&1)===0&&(N===0||N===11||N===15)){var T=S.alternate;T?(S.updateQueue=T.updateQueue,S.memoizedState=T.memoizedState,S.lanes=T.lanes):(S.updateQueue=null,S.memoizedState=null)}var M=Ed(m);if(M!==null){M.flags&=-257,Pd(M,m,z,u,n),M.mode&1&&Ad(u,C,n),n=M,p=C;var H=n.updateQueue;if(H===null){var K=new Set;K.add(p),n.updateQueue=K}else H.add(p);break e}else{if((n&1)===0){Ad(u,C,n),rl();break e}p=Error(r(426))}}else if(Te&&z.mode&1){var Oe=Ed(m);if(Oe!==null){(Oe.flags&65536)===0&&(Oe.flags|=256),Pd(Oe,m,z,u,n),ws(vt(p,z));break e}}u=p=vt(p,z),Je!==4&&(Je=2),Aa===null?Aa=[u]:Aa.push(u),u=m;do{switch(u.tag){case 3:u.flags|=65536,n&=-n,u.lanes|=n;var k=Cd(u,p,n);Qc(u,k);break e;case 1:z=p;var h=u.type,b=u.stateNode;if((u.flags&128)===0&&(typeof h.getDerivedStateFromError=="function"||b!==null&&typeof b.componentDidCatch=="function"&&(ji===null||!ji.has(b)))){u.flags|=65536,n&=-n,u.lanes|=n;var R=Dd(u,z,n);Qc(u,R);break e}}u=u.return}while(u!==null)}rm(i)}catch(Z){n=Z,_e===i&&i!==null&&(_e=i=i.return);continue}break}while(!0)}function tm(){var e=Or.current;return Or.current=Sr,e===null?Sr:e}function rl(){(Je===0||Je===3||Je===2)&&(Je=4),Le===null||(Ji&268435455)===0&&(Fr&268435455)===0||bi(Le,Ze)}function Lr(e,n){var i=ye;ye|=2;var o=tm();(Le!==e||Ze!==n)&&(Xn=null,Li(e,n));do try{Uw();break}catch(l){im(e,l)}while(!0);if(hs(),ye=i,Or.current=o,_e!==null)throw Error(r(261));return Le=null,Ze=0,Je}function Uw(){for(;_e!==null;)am(_e)}function $w(){for(;_e!==null&&!hz();)am(_e)}function am(e){var n=lm(e.alternate,e,yn);e.memoizedProps=e.pendingProps,n===null?rm(e):_e=n,Ys.current=null}function rm(e){var n=e;do{var i=n.alternate;if(e=n.return,(n.flags&32768)===0){if(i=Mw(i,n,yn),i!==null){_e=i;return}}else{if(i=Iw(i,n),i!==null){i.flags&=32767,_e=i;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Je=6,_e=null;return}}if(n=n.sibling,n!==null){_e=n;return}_e=n=e}while(n!==null);Je===0&&(Je=5)}function Hi(e,n,i){var o=ke,l=kn.transition;try{kn.transition=null,ke=1,Zw(e,n,i,o)}finally{kn.transition=l,ke=o}return null}function Zw(e,n,i,o){do At();while(ki!==null);if((ye&6)!==0)throw Error(r(327));i=e.finishedWork;var l=e.finishedLanes;if(i===null)return null;if(e.finishedWork=null,e.finishedLanes=0,i===e.current)throw Error(r(177));e.callbackNode=null,e.callbackPriority=0;var u=i.lanes|i.childLanes;if(Pz(e,u),e===Le&&(_e=Le=null,Ze=0),(i.subtreeFlags&2064)===0&&(i.flags&2064)===0||Mr||(Mr=!0,um($a,function(){return At(),null})),u=(i.flags&15990)!==0,(i.subtreeFlags&15990)!==0||u){u=kn.transition,kn.transition=null;var m=ke;ke=1;var z=ye;ye|=4,Ys.current=null,Ww(e,i),Vd(i,e),yw(rs),er=!!as,rs=as=null,e.current=i,Lw(i),gz(),ye=z,ke=m,kn.transition=u}else e.current=i;if(Mr&&(Mr=!1,ki=e,Ir=l),u=e.pendingLanes,u===0&&(ji=null),vz(i.stateNode),ln(e,Re()),n!==null)for(o=e.onRecoverableError,i=0;i<n.length;i++)l=n[i],o(l.value,{componentStack:l.stack,digest:l.digest});if(_r)throw _r=!1,e=qs,qs=null,e;return(Ir&1)!==0&&e.tag!==0&&At(),u=e.pendingLanes,(u&1)!==0?e===el?Ea++:(Ea=0,el=e):Ea=0,wi(),null}function At(){if(ki!==null){var e=$u(Ir),n=kn.transition,i=ke;try{if(kn.transition=null,ke=16>e?16:e,ki===null)var o=!1;else{if(e=ki,ki=null,Ir=0,(ye&6)!==0)throw Error(r(331));var l=ye;for(ye|=4,W=e.current;W!==null;){var u=W,m=u.child;if((W.flags&16)!==0){var z=u.deletions;if(z!==null){for(var p=0;p<z.length;p++){var C=z[p];for(W=C;W!==null;){var S=W;switch(S.tag){case 0:case 11:case 15:Ca(8,S,u)}var N=S.child;if(N!==null)N.return=S,W=N;else for(;W!==null;){S=W;var T=S.sibling,M=S.return;if(Hd(S),S===C){W=null;break}if(T!==null){T.return=M,W=T;break}W=M}}}var H=u.alternate;if(H!==null){var K=H.child;if(K!==null){H.child=null;do{var Oe=K.sibling;K.sibling=null,K=Oe}while(K!==null)}}W=u}}if((u.subtreeFlags&2064)!==0&&m!==null)m.return=u,W=m;else e:for(;W!==null;){if(u=W,(u.flags&2048)!==0)switch(u.tag){case 0:case 11:case 15:Ca(9,u,u.return)}var k=u.sibling;if(k!==null){k.return=u.return,W=k;break e}W=u.return}}var h=e.current;for(W=h;W!==null;){m=W;var b=m.child;if((m.subtreeFlags&2064)!==0&&b!==null)b.return=m,W=b;else e:for(m=h;W!==null;){if(z=W,(z.flags&2048)!==0)try{switch(z.tag){case 0:case 11:case 15:Rr(9,z)}}catch(Z){Ne(z,z.return,Z)}if(z===m){W=null;break e}var R=z.sibling;if(R!==null){R.return=z.return,W=R;break e}W=z.return}}if(ye=l,wi(),On&&typeof On.onPostCommitFiberRoot=="function")try{On.onPostCommitFiberRoot(Za,e)}catch{}o=!0}return o}finally{ke=i,kn.transition=n}}return!1}function om(e,n,i){n=vt(i,n),n=Cd(e,n,1),e=hi(e,n,1),n=tn(),e!==null&&(Qt(e,1,n),ln(e,n))}function Ne(e,n,i){if(e.tag===3)om(e,e,i);else for(;n!==null;){if(n.tag===3){om(n,e,i);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(ji===null||!ji.has(o))){e=vt(i,e),e=Dd(n,e,1),n=hi(n,e,1),e=tn(),n!==null&&(Qt(n,1,e),ln(n,e));break}}n=n.return}}function Vw(e,n,i){var o=e.pingCache;o!==null&&o.delete(n),n=tn(),e.pingedLanes|=e.suspendedLanes&i,Le===e&&(Ze&i)===i&&(Je===4||Je===3&&(Ze&130023424)===Ze&&500>Re()-Xs?Li(e,0):Qs|=i),ln(e,n)}function sm(e,n){n===0&&((e.mode&1)===0?n=1:(n=Ya,Ya<<=1,(Ya&130023424)===0&&(Ya=4194304)));var i=tn();e=Vn(e,n),e!==null&&(Qt(e,n,i),ln(e,i))}function Yw(e){var n=e.memoizedState,i=0;n!==null&&(i=n.retryLane),sm(e,i)}function Qw(e,n){var i=0;switch(e.tag){case 13:var o=e.stateNode,l=e.memoizedState;l!==null&&(i=l.retryLane);break;case 19:o=e.stateNode;break;default:throw Error(r(314))}o!==null&&o.delete(n),sm(e,i)}var lm;lm=function(e,n,i){if(e!==null)if(e.memoizedProps!==n.pendingProps||an.current)on=!0;else{if((e.lanes&i)===0&&(n.flags&128)===0)return on=!1,_w(e,n,i);on=(e.flags&131072)!==0}else on=!1,Te&&(n.flags&1048576)!==0&&Jc(n,hr,n.index);switch(n.lanes=0,n.tag){case 2:var o=n.type;Nr(e,n),e=n.pendingProps;var l=yt(n,Qe.current);jt(n,i),l=Ts(null,n,o,e,l,i);var u=Ss();return n.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,rn(o)?(u=!0,zr(n)):u=!1,n.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,vs(n),l.updater=xr,n.stateNode=l,l._reactInternals=n,Os(n,o,e,i),n=Is(null,n,o,!0,u,i)):(n.tag=0,Te&&u&&ms(n),nn(null,n,l,i),n=n.child),n;case 16:o=n.elementType;e:{switch(Nr(e,n),e=n.pendingProps,l=o._init,o=l(o._payload),n.type=o,l=n.tag=qw(o),e=En(o,e),l){case 0:n=Ms(null,n,o,e,i);break e;case 1:n=Bd(null,n,o,e,i);break e;case 11:n=Td(null,n,o,e,i);break e;case 14:n=Sd(null,n,o,En(o.type,e),i);break e}throw Error(r(306,o,""))}return n;case 0:return o=n.type,l=n.pendingProps,l=n.elementType===o?l:En(o,l),Ms(e,n,o,l,i);case 1:return o=n.type,l=n.pendingProps,l=n.elementType===o?l:En(o,l),Bd(e,n,o,l,i);case 3:e:{if(Rd(n),e===null)throw Error(r(387));o=n.pendingProps,u=n.memoizedState,l=u.element,Yc(e,n),Cr(n,o,null,i);var m=n.memoizedState;if(o=m.element,u.isDehydrated)if(u={element:o,isDehydrated:!1,cache:m.cache,pendingSuspenseBoundaries:m.pendingSuspenseBoundaries,transitions:m.transitions},n.updateQueue.baseState=u,n.memoizedState=u,n.flags&256){l=vt(Error(r(423)),n),n=Od(e,n,o,i,l);break e}else if(o!==l){l=vt(Error(r(424)),n),n=Od(e,n,o,i,l);break e}else for(fn=fi(n.stateNode.containerInfo.firstChild),mn=n,Te=!0,An=null,i=Zc(n,null,o,i),n.child=i;i;)i.flags=i.flags&-3|4096,i=i.sibling;else{if(pt(),o===l){n=Qn(e,n,i);break e}nn(e,n,o,i)}n=n.child}return n;case 5:return qc(n),e===null&&zs(n),o=n.type,l=n.pendingProps,u=e!==null?e.memoizedProps:null,m=l.children,os(o,l)?m=null:u!==null&&os(o,u)&&(n.flags|=32),Nd(e,n),nn(e,n,m,i),n.child;case 6:return e===null&&zs(n),null;case 13:return Fd(e,n,i);case 4:return bs(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=ht(n,null,o,i):nn(e,n,o,i),n.child;case 11:return o=n.type,l=n.pendingProps,l=n.elementType===o?l:En(o,l),Td(e,n,o,l,i);case 7:return nn(e,n,n.pendingProps,i),n.child;case 8:return nn(e,n,n.pendingProps.children,i),n.child;case 12:return nn(e,n,n.pendingProps.children,i),n.child;case 10:e:{if(o=n.type._context,l=n.pendingProps,u=n.memoizedProps,m=l.value,be(kr,o._currentValue),o._currentValue=m,u!==null)if(Dn(u.value,m)){if(u.children===l.children&&!an.current){n=Qn(e,n,i);break e}}else for(u=n.child,u!==null&&(u.return=n);u!==null;){var z=u.dependencies;if(z!==null){m=u.child;for(var p=z.firstContext;p!==null;){if(p.context===o){if(u.tag===1){p=Yn(-1,i&-i),p.tag=2;var C=u.updateQueue;if(C!==null){C=C.shared;var S=C.pending;S===null?p.next=p:(p.next=S.next,S.next=p),C.pending=p}}u.lanes|=i,p=u.alternate,p!==null&&(p.lanes|=i),js(u.return,i,n),z.lanes|=i;break}p=p.next}}else if(u.tag===10)m=u.type===n.type?null:u.child;else if(u.tag===18){if(m=u.return,m===null)throw Error(r(341));m.lanes|=i,z=m.alternate,z!==null&&(z.lanes|=i),js(m,i,n),m=u.sibling}else m=u.child;if(m!==null)m.return=u;else for(m=u;m!==null;){if(m===n){m=null;break}if(u=m.sibling,u!==null){u.return=m.return,m=u;break}m=m.return}u=m}nn(e,n,l.children,i),n=n.child}return n;case 9:return l=n.type,o=n.pendingProps.children,jt(n,i),l=gn(l),o=o(l),n.flags|=1,nn(e,n,o,i),n.child;case 14:return o=n.type,l=En(o,n.pendingProps),l=En(o.type,l),Sd(e,n,o,l,i);case 15:return xd(e,n,n.type,n.pendingProps,i);case 17:return o=n.type,l=n.pendingProps,l=n.elementType===o?l:En(o,l),Nr(e,n),n.tag=1,rn(o)?(e=!0,zr(n)):e=!1,jt(n,i),vd(n,o,l),Os(n,o,l,i),Is(null,n,o,!0,e,i);case 19:return Md(e,n,i);case 22:return Gd(e,n,i)}throw Error(r(156,n.tag))};function um(e,n){return Wu(e,n)}function Xw(e,n,i,o){this.tag=e,this.key=i,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function vn(e,n,i,o){return new Xw(e,n,i,o)}function ol(e){return e=e.prototype,!(!e||!e.isReactComponent)}function qw(e){if(typeof e=="function")return ol(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ee)return 11;if(e===Be)return 14}return 2}function Ci(e,n){var i=e.alternate;return i===null?(i=vn(e.tag,n,e.key,e.mode),i.elementType=e.elementType,i.type=e.type,i.stateNode=e.stateNode,i.alternate=e,e.alternate=i):(i.pendingProps=n,i.type=e.type,i.flags=0,i.subtreeFlags=0,i.deletions=null),i.flags=e.flags&14680064,i.childLanes=e.childLanes,i.lanes=e.lanes,i.child=e.child,i.memoizedProps=e.memoizedProps,i.memoizedState=e.memoizedState,i.updateQueue=e.updateQueue,n=e.dependencies,i.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},i.sibling=e.sibling,i.index=e.index,i.ref=e.ref,i}function Hr(e,n,i,o,l,u){var m=2;if(o=e,typeof e=="function")ol(e)&&(m=1);else if(typeof e=="string")m=5;else e:switch(e){case ce:return Ki(i.children,l,u,n);case Pe:m=8,l|=8;break;case Ye:return e=vn(12,i,n,l|2),e.elementType=Ye,e.lanes=u,e;case ge:return e=vn(13,i,n,l),e.elementType=ge,e.lanes=u,e;case de:return e=vn(19,i,n,l),e.elementType=de,e.lanes=u,e;case ze:return Kr(i,l,u,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ue:m=10;break e;case cn:m=9;break e;case ee:m=11;break e;case Be:m=14;break e;case je:m=16,o=null;break e}throw Error(r(130,e==null?e:typeof e,""))}return n=vn(m,i,n,l),n.elementType=e,n.type=o,n.lanes=u,n}function Ki(e,n,i,o){return e=vn(7,e,o,n),e.lanes=i,e}function Kr(e,n,i,o){return e=vn(22,e,o,n),e.elementType=ze,e.lanes=i,e.stateNode={isHidden:!1},e}function sl(e,n,i){return e=vn(6,e,null,n),e.lanes=i,e}function ll(e,n,i){return n=vn(4,e.children!==null?e.children:[],e.key,n),n.lanes=i,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function ep(e,n,i,o,l){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ro(0),this.expirationTimes=Ro(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ro(0),this.identifierPrefix=o,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function ul(e,n,i,o,l,u,m,z,p){return e=new ep(e,n,i,z,p),n===1?(n=1,u===!0&&(n|=8)):n=0,u=vn(3,null,null,n),e.current=u,u.stateNode=e,u.memoizedState={element:o,isDehydrated:i,cache:null,transitions:null,pendingSuspenseBoundaries:null},vs(u),e}function np(e,n,i){var o=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:oe,key:o==null?null:""+o,children:e,containerInfo:n,implementation:i}}function cm(e){if(!e)return zi;e=e._reactInternals;e:{if(Ni(e)!==e||e.tag!==1)throw Error(r(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(rn(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(r(171))}if(e.tag===1){var i=e.type;if(rn(i))return _c(e,i,n)}return n}function dm(e,n,i,o,l,u,m,z,p){return e=ul(i,o,!0,e,l,u,m,z,p),e.context=cm(null),i=e.current,o=tn(),l=vi(i),u=Yn(o,l),u.callback=n??null,hi(i,u,l),e.current.lanes=l,Qt(e,l,o),ln(e,o),e}function Ur(e,n,i,o){var l=n.current,u=tn(),m=vi(l);return i=cm(i),n.context===null?n.context=i:n.pendingContext=i,n=Yn(u,m),n.payload={element:e},o=o===void 0?null:o,o!==null&&(n.callback=o),e=hi(l,n,m),e!==null&&(Sn(e,l,m,u),br(e,l,m)),m}function $r(e){return e=e.current,e.child?(e.child.tag===5,e.child.stateNode):null}function mm(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var i=e.retryLane;e.retryLane=i!==0&&i<n?i:n}}function cl(e,n){mm(e,n),(e=e.alternate)&&mm(e,n)}function ip(){return null}var fm=typeof reportError=="function"?reportError:function(e){console.error(e)};function dl(e){this._internalRoot=e}Zr.prototype.render=dl.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(r(409));Ur(e,n,null,null)},Zr.prototype.unmount=dl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Wi(function(){Ur(null,e,null,null)}),n[Kn]=null}};function Zr(e){this._internalRoot=e}Zr.prototype.unstable_scheduleHydration=function(e){if(e){var n=Yu();e={blockedOn:null,target:e,priority:n};for(var i=0;i<ci.length&&n!==0&&n<ci[i].priority;i++);ci.splice(i,0,e),i===0&&qu(e)}};function ml(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Vr(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ym(){}function tp(e,n,i,o,l){if(l){if(typeof o=="function"){var u=o;o=function(){var C=$r(m);u.call(C)}}var m=dm(n,o,e,0,null,!1,!1,"",ym);return e._reactRootContainer=m,e[Kn]=m.current,da(e.nodeType===8?e.parentNode:e),Wi(),m}for(;l=e.lastChild;)e.removeChild(l);if(typeof o=="function"){var z=o;o=function(){var C=$r(p);z.call(C)}}var p=ul(e,0,!1,null,null,!1,!1,"",ym);return e._reactRootContainer=p,e[Kn]=p.current,da(e.nodeType===8?e.parentNode:e),Wi(function(){Ur(n,p,i,o)}),p}function Yr(e,n,i,o,l){var u=i._reactRootContainer;if(u){var m=u;if(typeof l=="function"){var z=l;l=function(){var p=$r(m);z.call(p)}}Ur(n,m,e,l)}else m=tp(i,n,e,l,o);return $r(m)}Zu=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var i=Yt(n.pendingLanes);i!==0&&(Oo(n,i|1),ln(n,Re()),(ye&6)===0&&(Dt=Re()+500,wi()))}break;case 13:Wi(function(){var o=Vn(e,1);if(o!==null){var l=tn();Sn(o,e,1,l)}}),cl(e,1)}},Fo=function(e){if(e.tag===13){var n=Vn(e,134217728);if(n!==null){var i=tn();Sn(n,e,134217728,i)}cl(e,134217728)}},Vu=function(e){if(e.tag===13){var n=vi(e),i=Vn(e,n);if(i!==null){var o=tn();Sn(i,e,n,o)}cl(e,n)}},Yu=function(){return ke},Qu=function(e,n){var i=ke;try{return ke=e,n()}finally{ke=i}},To=function(e,n,i){switch(n){case"input":if(Hn(e,i),n=i.name,i.type==="radio"&&n!=null){for(i=e;i.parentNode;)i=i.parentNode;for(i=i.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<i.length;n++){var o=i[n];if(o!==e&&o.form===e.form){var l=fr(o);if(!l)throw Error(r(90));Ln(o),Hn(o,l)}}}break;case"textarea":Ht(e,i);break;case"select":n=i.value,n!=null&&oi(e,!!i.multiple,n,!1)}},Ru=tl,Ou=Wi;var ap={usingClientEntryPoint:!1,Events:[ya,mt,fr,Nu,Bu,tl]},Pa={findFiberByHostInstance:Bi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},rp={bundleType:Pa.bundleType,version:Pa.version,rendererPackageName:Pa.rendererPackageName,rendererConfig:Pa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ae.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Iu(e),e===null?null:e.stateNode},findFiberByHostInstance:Pa.findFiberByHostInstance||ip,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Qr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Qr.isDisabled&&Qr.supportsFiber)try{Za=Qr.inject(rp),On=Qr}catch{}}return un.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ap,un.createPortal=function(e,n){var i=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ml(n))throw Error(r(200));return np(e,n,null,i)},un.createRoot=function(e,n){if(!ml(e))throw Error(r(299));var i=!1,o="",l=fm;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),n=ul(e,1,!1,null,null,i,!1,o,l),e[Kn]=n.current,da(e.nodeType===8?e.parentNode:e),new dl(n)},un.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=Iu(n),e=e===null?null:e.stateNode,e},un.flushSync=function(e){return Wi(e)},un.hydrate=function(e,n,i){if(!Vr(n))throw Error(r(200));return Yr(null,e,n,!0,i)},un.hydrateRoot=function(e,n,i){if(!ml(e))throw Error(r(405));var o=i!=null&&i.hydratedSources||null,l=!1,u="",m=fm;if(i!=null&&(i.unstable_strictMode===!0&&(l=!0),i.identifierPrefix!==void 0&&(u=i.identifierPrefix),i.onRecoverableError!==void 0&&(m=i.onRecoverableError)),n=dm(n,null,e,1,i??null,l,!1,u,m),e[Kn]=n.current,da(e),o)for(e=0;e<o.length;e++)i=o[e],l=i._getVersion,l=l(i._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[i,l]:n.mutableSourceEagerHydrationData.push(i,l);return new Zr(n)},un.render=function(e,n,i){if(!Vr(n))throw Error(r(200));return Yr(null,e,n,!1,i)},un.unmountComponentAtNode=function(e){if(!Vr(e))throw Error(r(40));return e._reactRootContainer?(Wi(function(){Yr(null,null,e,!1,function(){e._reactRootContainer=null,e[Kn]=null})}),!0):!1},un.unstable_batchedUpdates=tl,un.unstable_renderSubtreeIntoContainer=function(e,n,i,o){if(!Vr(i))throw Error(r(200));if(e==null||e._reactInternals===void 0)throw Error(r(38));return Yr(e,n,i,!1,o)},un.version="18.3.1-next-f1338f8080-20240426",un}var Am;function Nf(){if(Am)return gl.exports;Am=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(t){console.error(t)}}return a(),gl.exports=xp(),gl.exports}var Gp=Nf();const Rt=wo(Gp),Em={disabled:!1},Bf=zn.createContext(null);var Np=function(t){return t.scrollTop},Sa="unmounted",Ui="exited",Ai="entering",$i="entered",Il="exiting",ai=(function(a){zp(t,a);function t(s,c){var d;d=a.call(this,s,c)||this;var f=c,y=f&&!f.isMounting?s.enter:s.appear,w;return d.appearStatus=null,s.in?y?(w=Ui,d.appearStatus=Ai):w=$i:s.unmountOnExit||s.mountOnEnter?w=Sa:w=Ui,d.state={status:w},d.nextCallback=null,d}t.getDerivedStateFromProps=function(c,d){var f=c.in;return f&&d.status===Sa?{status:Ui}:null};var r=t.prototype;return r.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},r.componentDidUpdate=function(c){var d=null;if(c!==this.props){var f=this.state.status;this.props.in?f!==Ai&&f!==$i&&(d=Ai):(f===Ai||f===$i)&&(d=Il)}this.updateStatus(!1,d)},r.componentWillUnmount=function(){this.cancelNextCallback()},r.getTimeouts=function(){var c=this.props.timeout,d,f,y;return d=f=y=c,c!=null&&typeof c!="number"&&(d=c.exit,f=c.enter,y=c.appear!==void 0?c.appear:f),{exit:d,enter:f,appear:y}},r.updateStatus=function(c,d){if(c===void 0&&(c=!1),d!==null)if(this.cancelNextCallback(),d===Ai){if(this.props.unmountOnExit||this.props.mountOnEnter){var f=this.props.nodeRef?this.props.nodeRef.current:Rt.findDOMNode(this);f&&Np(f)}this.performEnter(c)}else this.performExit();else this.props.unmountOnExit&&this.state.status===Ui&&this.setState({status:Sa})},r.performEnter=function(c){var d=this,f=this.props.enter,y=this.context?this.context.isMounting:c,w=this.props.nodeRef?[y]:[Rt.findDOMNode(this),y],j=w[0],v=w[1],D=this.getTimeouts(),A=y?D.appear:D.enter;if(!c&&!f||Em.disabled){this.safeSetState({status:$i},function(){d.props.onEntered(j)});return}this.props.onEnter(j,v),this.safeSetState({status:Ai},function(){d.props.onEntering(j,v),d.onTransitionEnd(A,function(){d.safeSetState({status:$i},function(){d.props.onEntered(j,v)})})})},r.performExit=function(){var c=this,d=this.props.exit,f=this.getTimeouts(),y=this.props.nodeRef?void 0:Rt.findDOMNode(this);if(!d||Em.disabled){this.safeSetState({status:Ui},function(){c.props.onExited(y)});return}this.props.onExit(y),this.safeSetState({status:Il},function(){c.props.onExiting(y),c.onTransitionEnd(f.exit,function(){c.safeSetState({status:Ui},function(){c.props.onExited(y)})})})},r.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},r.safeSetState=function(c,d){d=this.setNextCallback(d),this.setState(c,d)},r.setNextCallback=function(c){var d=this,f=!0;return this.nextCallback=function(y){f&&(f=!1,d.nextCallback=null,c(y))},this.nextCallback.cancel=function(){f=!1},this.nextCallback},r.onTransitionEnd=function(c,d){this.setNextCallback(d);var f=this.props.nodeRef?this.props.nodeRef.current:Rt.findDOMNode(this),y=c==null&&!this.props.addEndListener;if(!f||y){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var w=this.props.nodeRef?[this.nextCallback]:[f,this.nextCallback],j=w[0],v=w[1];this.props.addEndListener(j,v)}c!=null&&setTimeout(this.nextCallback,c)},r.render=function(){var c=this.state.status;if(c===Sa)return null;var d=this.props,f=d.children;d.in,d.mountOnEnter,d.unmountOnExit,d.appear,d.enter,d.exit,d.timeout,d.addEndListener,d.onEnter,d.onEntering,d.onEntered,d.onExit,d.onExiting,d.onExited,d.nodeRef;var y=yp(d,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return zn.createElement(Bf.Provider,{value:null},typeof f=="function"?f(c,y):zn.cloneElement(zn.Children.only(f),y))},t})(zn.Component);ai.contextType=Bf;ai.propTypes={};function Et(){}ai.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:Et,onEntering:Et,onEntered:Et,onExit:Et,onExiting:Et,onExited:Et};ai.UNMOUNTED=Sa;ai.EXITED=Ui;ai.ENTERING=Ai;ai.ENTERED=$i;ai.EXITING=Il;function Bp(a){return a.code==="Escape"||a.keyCode===27}function Rp(){const a=P.version.split(".");return{major:+a[0],minor:+a[1],patch:+a[2]}}function ho(a){if(!a||typeof a=="function")return null;const{major:t}=Rp();return t>=19?a.props.ref:a.ref}const It=!!(typeof window<"u"&&window.document&&window.document.createElement);var Jl=!1,Wl=!1;try{var vl={get passive(){return Jl=!0},get once(){return Wl=Jl=!0}};It&&(window.addEventListener("test",vl,vl),window.removeEventListener("test",vl,!0))}catch{}function Rf(a,t,r,s){if(s&&typeof s!="boolean"&&!Wl){var c=s.once,d=s.capture,f=r;!Wl&&c&&(f=r.__once||function y(w){this.removeEventListener(t,y,d),r.call(this,w)},r.__once=f),a.addEventListener(t,f,Jl?s:d)}a.addEventListener(t,r,s)}function Ll(a,t,r,s){var c=s&&typeof s!="boolean"?s.capture:s;a.removeEventListener(t,r,c),r.__once&&a.removeEventListener(t,r.__once,c)}function lo(a,t,r,s){return Rf(a,t,r,s),function(){Ll(a,t,r,s)}}function Op(a,t,r,s){if(s===void 0&&(s=!0),a){var c=document.createEvent("HTMLEvents");c.initEvent(t,r,s),a.dispatchEvent(c)}}function Fp(a){var t=Xi(a,"transitionDuration")||"",r=t.indexOf("ms")===-1?1e3:1;return parseFloat(t)*r}function _p(a,t,r){r===void 0&&(r=5);var s=!1,c=setTimeout(function(){s||Op(a,"transitionend",!0)},t+r),d=lo(a,"transitionend",function(){s=!0},{once:!0});return function(){clearTimeout(c),d()}}function Of(a,t,r,s){r==null&&(r=Fp(a)||0);var c=_p(a,r,s),d=lo(a,"transitionend",t);return function(){c(),d()}}function Pm(a,t){const r=Xi(a,t)||"",s=r.indexOf("ms")===-1?1e3:1;return parseFloat(r)*s}function Mp(a,t){const r=Pm(a,"transitionDuration"),s=Pm(a,"transitionDelay"),c=Of(a,d=>{d.target===a&&(c(),t(d))},r+s)}function Ip(a){a.offsetHeight}const Tm=a=>!a||typeof a=="function"?a:t=>{a.current=t};function Jp(a,t){const r=Tm(a),s=Tm(t);return c=>{r&&r(c),s&&s(c)}}function Ff(a,t){return P.useMemo(()=>Jp(a,t),[a,t])}function Wp(a){return a&&"setState"in a?Rt.findDOMNode(a):a??null}const _f=zn.forwardRef(({onEnter:a,onEntering:t,onEntered:r,onExit:s,onExiting:c,onExited:d,addEndListener:f,children:y,childRef:w,...j},v)=>{const D=P.useRef(null),A=Ff(D,w),O=oe=>{A(Wp(oe))},L=oe=>ce=>{oe&&D.current&&oe(D.current,ce)},F=P.useCallback(L(a),[a]),I=P.useCallback(L(t),[t]),J=P.useCallback(L(r),[r]),X=P.useCallback(L(s),[s]),te=P.useCallback(L(c),[c]),ae=P.useCallback(L(d),[d]),U=P.useCallback(L(f),[f]);return x.jsx(ai,{ref:v,...j,onEnter:F,onEntered:J,onEntering:I,onExit:X,onExited:ae,onExiting:te,addEndListener:U,nodeRef:D,children:typeof y=="function"?(oe,ce)=>y(oe,{...ce,ref:O}):zn.cloneElement(y,{ref:O})})});_f.displayName="TransitionWrapper";function Lp(a){const t=P.useRef(a);return P.useEffect(()=>{t.current=a},[a]),t}function Hl(a){const t=Lp(a);return P.useCallback(function(...r){return t.current&&t.current(...r)},[t])}const Hp=(a=>P.forwardRef((t,r)=>x.jsx("div",{...t,ref:r,className:Ke(t.className,a)})));function Kp(a){const t=P.useRef(a);return P.useEffect(()=>{t.current=a},[a]),t}function Zi(a){const t=Kp(a);return P.useCallback(function(...r){return t.current&&t.current(...r)},[t])}function Up(){const a=P.useRef(!0),t=P.useRef(()=>a.current);return P.useEffect(()=>(a.current=!0,()=>{a.current=!1}),[]),t.current}function $p(a){const t=P.useRef(null);return P.useEffect(()=>{t.current=a}),t.current}const Zp=typeof global<"u"&&global.navigator&&global.navigator.product==="ReactNative",Vp=typeof document<"u",Sm=Vp||Zp?P.useLayoutEffect:P.useEffect,Yp=["as","disabled"];function Qp(a,t){if(a==null)return{};var r={};for(var s in a)if({}.hasOwnProperty.call(a,s)){if(t.indexOf(s)>=0)continue;r[s]=a[s]}return r}function Xp(a){return!a||a.trim()==="#"}function Mf({tagName:a,disabled:t,href:r,target:s,rel:c,role:d,onClick:f,tabIndex:y=0,type:w}){a||(r!=null||s!=null||c!=null?a="a":a="button");const j={tagName:a};if(a==="button")return[{type:w||"button",disabled:t},j];const v=A=>{if((t||a==="a"&&Xp(r))&&A.preventDefault(),t){A.stopPropagation();return}f?.(A)},D=A=>{A.key===" "&&(A.preventDefault(),v(A))};return a==="a"&&(r||(r="#"),t&&(r=void 0)),[{role:d??"button",disabled:void 0,tabIndex:t?void 0:y,href:r,target:a==="a"?s:void 0,"aria-disabled":t||void 0,rel:a==="a"?c:void 0,onClick:v,onKeyDown:D},j]}const qp=P.forwardRef((a,t)=>{let{as:r,disabled:s}=a,c=Qp(a,Yp);const[d,{tagName:f}]=Mf(Object.assign({tagName:r,disabled:s},c));return x.jsx(f,Object.assign({},c,d,{ref:t}))});qp.displayName="Button";const eh={[Ai]:"show",[$i]:"show"},cu=P.forwardRef(({className:a,children:t,transitionClasses:r={},onEnter:s,...c},d)=>{const f={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,...c},y=P.useCallback((w,j)=>{Ip(w),s?.(w,j)},[s]);return x.jsx(_f,{ref:d,addEndListener:Mp,...f,onEnter:y,childRef:ho(t),children:(w,j)=>P.cloneElement(t,{...j,className:Ke("fade",a,t.props.className,eh[w],r[w])})})});cu.displayName="Fade";var bl={exports:{}},Cl,xm;function nh(){if(xm)return Cl;xm=1;var a="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return Cl=a,Cl}var Dl,Gm;function ih(){if(Gm)return Dl;Gm=1;var a=nh();function t(){}function r(){}return r.resetWarningCache=t,Dl=function(){function s(f,y,w,j,v,D){if(D!==a){var A=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw A.name="Invariant Violation",A}}s.isRequired=s;function c(){return s}var d={array:s,bigint:s,bool:s,func:s,number:s,object:s,string:s,symbol:s,any:s,arrayOf:c,element:s,elementType:s,instanceOf:c,node:s,objectOf:c,oneOf:c,oneOfType:c,shape:c,exact:c,checkPropTypes:r,resetWarningCache:t};return d.PropTypes=d,d},Dl}var Nm;function th(){return Nm||(Nm=1,bl.exports=ih()()),bl.exports}var ah=th();const Al=wo(ah),rh={"aria-label":Al.string,onClick:Al.func,variant:Al.oneOf(["white"])},du=P.forwardRef(({className:a,variant:t,"aria-label":r="Close",...s},c)=>x.jsx("button",{ref:c,type:"button",className:Ke("btn-close",t&&`btn-close-${t}`,a),"aria-label":r,...s}));du.displayName="CloseButton";du.propTypes=rh;const Bt=P.forwardRef(({as:a,bsPrefix:t,variant:r="primary",size:s,active:c=!1,disabled:d=!1,className:f,...y},w)=>{const j=nt(t,"btn"),[v,{tagName:D}]=Mf({tagName:a,disabled:d,...y}),A=D;return x.jsx(A,{...v,...y,ref:w,disabled:d,className:Ke(f,j,c&&"active",r&&`${j}-${r}`,s&&`${j}-${s}`,y.href&&d&&"disabled")})});Bt.displayName="Button";function oh(a){const t=P.useRef(a);return t.current=a,t}function sh(a){const t=oh(a);P.useEffect(()=>()=>t.current(),[])}var lh=Function.prototype.bind.call(Function.prototype.call,[].slice);function Pt(a,t){return lh(a.querySelectorAll(t))}function Bm(a,t){if(a.contains)return a.contains(t);if(a.compareDocumentPosition)return a===t||!!(a.compareDocumentPosition(t)&16)}const uh="data-rr-ui-";function ch(a){return`${uh}${a}`}const If=P.createContext(It?window:void 0);If.Provider;function mu(){return P.useContext(If)}const Rm=a=>!a||typeof a=="function"?a:t=>{a.current=t};function dh(a,t){const r=Rm(a),s=Rm(t);return c=>{r&&r(c),s&&s(c)}}function fu(a,t){return P.useMemo(()=>dh(a,t),[a,t])}var qr;function Om(a){if((!qr&&qr!==0||a)&&It){var t=document.createElement("div");t.style.position="absolute",t.style.top="-9999px",t.style.width="50px",t.style.height="50px",t.style.overflow="scroll",document.body.appendChild(t),qr=t.offsetWidth-t.clientWidth,document.body.removeChild(t)}return qr}function mh(){return P.useState(null)}function El(a){a===void 0&&(a=po());try{var t=a.activeElement;return!t||!t.nodeName?null:t}catch{return a.body}}function fh(a){const t=P.useRef(a);return t.current=a,t}function yh(a){const t=fh(a);P.useEffect(()=>()=>t.current(),[])}function zh(a=document){const t=a.defaultView;return Math.abs(t.innerWidth-a.documentElement.clientWidth)}const Fm=ch("modal-open");class yu{constructor({ownerDocument:t,handleContainerOverflow:r=!0,isRTL:s=!1}={}){this.handleContainerOverflow=r,this.isRTL=s,this.modals=[],this.ownerDocument=t}getScrollbarWidth(){return zh(this.ownerDocument)}getElement(){return(this.ownerDocument||document).body}setModalAttributes(t){}removeModalAttributes(t){}setContainerStyle(t){const r={overflow:"hidden"},s=this.isRTL?"paddingLeft":"paddingRight",c=this.getElement();t.style={overflow:c.style.overflow,[s]:c.style[s]},t.scrollBarWidth&&(r[s]=`${parseInt(Xi(c,s)||"0",10)+t.scrollBarWidth}px`),c.setAttribute(Fm,""),Xi(c,r)}reset(){[...this.modals].forEach(t=>this.remove(t))}removeContainerStyle(t){const r=this.getElement();r.removeAttribute(Fm),Object.assign(r.style,t.style)}add(t){let r=this.modals.indexOf(t);return r!==-1||(r=this.modals.length,this.modals.push(t),this.setModalAttributes(t),r!==0)||(this.state={scrollBarWidth:this.getScrollbarWidth(),style:{}},this.handleContainerOverflow&&this.setContainerStyle(this.state)),r}remove(t){const r=this.modals.indexOf(t);r!==-1&&(this.modals.splice(r,1),!this.modals.length&&this.handleContainerOverflow&&this.removeContainerStyle(this.state),this.removeModalAttributes(t))}isTopModal(t){return!!this.modals.length&&this.modals[this.modals.length-1]===t}}const Pl=(a,t)=>It?a==null?(t||po()).body:(typeof a=="function"&&(a=a()),a&&"current"in a&&(a=a.current),a&&("nodeType"in a||a.getBoundingClientRect)?a:null):null;function wh(a,t){const r=mu(),[s,c]=P.useState(()=>Pl(a,r?.document));if(!s){const d=Pl(a);d&&c(d)}return P.useEffect(()=>{},[t,s]),P.useEffect(()=>{const d=Pl(a);d!==s&&c(d)},[a,s]),s}function ph({children:a,in:t,onExited:r,mountOnEnter:s,unmountOnExit:c}){const d=P.useRef(null),f=P.useRef(t),y=Zi(r);P.useEffect(()=>{t?f.current=!0:y(d.current)},[t,y]);const w=fu(d,ho(a)),j=P.cloneElement(a,{ref:w});return t?j:c||!f.current&&s?null:j}const hh=["onEnter","onEntering","onEntered","onExit","onExiting","onExited","addEndListener","children"];function gh(a,t){if(a==null)return{};var r={};for(var s in a)if({}.hasOwnProperty.call(a,s)){if(t.indexOf(s)>=0)continue;r[s]=a[s]}return r}function jh(a){let{onEnter:t,onEntering:r,onEntered:s,onExit:c,onExiting:d,onExited:f,addEndListener:y,children:w}=a,j=gh(a,hh);const v=P.useRef(null),D=fu(v,ho(w)),A=ae=>U=>{ae&&v.current&&ae(v.current,U)},O=P.useCallback(A(t),[t]),L=P.useCallback(A(r),[r]),F=P.useCallback(A(s),[s]),I=P.useCallback(A(c),[c]),J=P.useCallback(A(d),[d]),X=P.useCallback(A(f),[f]),te=P.useCallback(A(y),[y]);return Object.assign({},j,{nodeRef:v},t&&{onEnter:O},r&&{onEntering:L},s&&{onEntered:F},c&&{onExit:I},d&&{onExiting:J},f&&{onExited:X},y&&{addEndListener:te},{children:typeof w=="function"?(ae,U)=>w(ae,Object.assign({},U,{ref:D})):P.cloneElement(w,{ref:D})})}const kh=["component"];function vh(a,t){if(a==null)return{};var r={};for(var s in a)if({}.hasOwnProperty.call(a,s)){if(t.indexOf(s)>=0)continue;r[s]=a[s]}return r}const bh=P.forwardRef((a,t)=>{let{component:r}=a,s=vh(a,kh);const c=jh(s);return x.jsx(r,Object.assign({ref:t},c))});function Ch({in:a,onTransition:t}){const r=P.useRef(null),s=P.useRef(!0),c=Zi(t);return Sm(()=>{if(!r.current)return;let d=!1;return c({in:a,element:r.current,initial:s.current,isStale:()=>d}),()=>{d=!0}},[a,c]),Sm(()=>(s.current=!1,()=>{s.current=!0}),[]),r}function Dh({children:a,in:t,onExited:r,onEntered:s,transition:c}){const[d,f]=P.useState(!t);t&&d&&f(!1);const y=Ch({in:!!t,onTransition:j=>{const v=()=>{j.isStale()||(j.in?s?.(j.element,j.initial):(f(!0),r?.(j.element)))};Promise.resolve(c(j)).then(v,D=>{throw j.in||f(!0),D})}}),w=fu(y,ho(a));return d&&!t?null:P.cloneElement(a,{ref:w})}function _m(a,t,r){return a?x.jsx(bh,Object.assign({},r,{component:a})):t?x.jsx(Dh,Object.assign({},r,{transition:t})):x.jsx(ph,Object.assign({},r))}const Ah=["show","role","className","style","children","backdrop","keyboard","onBackdropClick","onEscapeKeyDown","transition","runTransition","backdropTransition","runBackdropTransition","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","renderDialog","renderBackdrop","manager","container","onShow","onHide","onExit","onExited","onExiting","onEnter","onEntering","onEntered"];function Eh(a,t){if(a==null)return{};var r={};for(var s in a)if({}.hasOwnProperty.call(a,s)){if(t.indexOf(s)>=0)continue;r[s]=a[s]}return r}let Tl;function Ph(a){return Tl||(Tl=new yu({ownerDocument:a?.document})),Tl}function Th(a){const t=mu(),r=a||Ph(t),s=P.useRef({dialog:null,backdrop:null});return Object.assign(s.current,{add:()=>r.add(s.current),remove:()=>r.remove(s.current),isTopModal:()=>r.isTopModal(s.current),setDialogRef:P.useCallback(c=>{s.current.dialog=c},[]),setBackdropRef:P.useCallback(c=>{s.current.backdrop=c},[])})}const Jf=P.forwardRef((a,t)=>{let{show:r=!1,role:s="dialog",className:c,style:d,children:f,backdrop:y=!0,keyboard:w=!0,onBackdropClick:j,onEscapeKeyDown:v,transition:D,runTransition:A,backdropTransition:O,runBackdropTransition:L,autoFocus:F=!0,enforceFocus:I=!0,restoreFocus:J=!0,restoreFocusOptions:X,renderDialog:te,renderBackdrop:ae=ve=>x.jsx("div",Object.assign({},ve)),manager:U,container:oe,onShow:ce,onHide:Pe=()=>{},onExit:Ye,onExited:Ue,onExiting:cn,onEnter:ee,onEntering:ge,onEntered:de}=a,Be=Eh(a,Ah);const je=mu(),ze=wh(oe),G=Th(U),$=Up(),_=$p(r),[g,E]=P.useState(!r),q=P.useRef(null);P.useImperativeHandle(t,()=>G,[G]),It&&!_&&r&&(q.current=El(je?.document)),r&&g&&E(!1);const ie=Zi(()=>{if(G.add(),Fe.current=lo(document,"keydown",me),he.current=lo(document,"focus",()=>setTimeout(ue),!0),ce&&ce(),F){var ve,Si;const Hn=El((ve=(Si=G.dialog)==null?void 0:Si.ownerDocument)!=null?ve:je?.document);G.dialog&&Hn&&!Bm(G.dialog,Hn)&&(q.current=Hn,G.dialog.focus())}}),se=Zi(()=>{if(G.remove(),Fe.current==null||Fe.current(),he.current==null||he.current(),J){var ve;(ve=q.current)==null||ve.focus==null||ve.focus(X),q.current=null}});P.useEffect(()=>{!r||!ze||ie()},[r,ze,ie]),P.useEffect(()=>{g&&se()},[g,se]),yh(()=>{se()});const ue=Zi(()=>{if(!I||!$()||!G.isTopModal())return;const ve=El(je?.document);G.dialog&&ve&&!Bm(G.dialog,ve)&&G.dialog.focus()}),pe=Zi(ve=>{ve.target===ve.currentTarget&&(j?.(ve),y===!0&&Pe())}),me=Zi(ve=>{w&&Bp(ve)&&G.isTopModal()&&(v?.(ve),ve.defaultPrevented||Pe())}),he=P.useRef(),Fe=P.useRef(),Wn=(...ve)=>{E(!0),Ue?.(...ve)};if(!ze)return null;const Ln=Object.assign({role:s,ref:G.setDialogRef,"aria-modal":s==="dialog"?!0:void 0},Be,{style:d,className:c,tabIndex:-1});let Nn=te?te(Ln):x.jsx("div",Object.assign({},Ln,{children:P.cloneElement(f,{role:"document"})}));Nn=_m(D,A,{unmountOnExit:!0,mountOnEnter:!0,appear:!0,in:!!r,onExit:Ye,onExiting:cn,onExited:Wn,onEnter:ee,onEntering:ge,onEntered:de,children:Nn});let Bn=null;return y&&(Bn=ae({ref:G.setBackdropRef,onClick:pe}),Bn=_m(O,L,{in:!!r,appear:!0,mountOnEnter:!0,unmountOnExit:!0,children:Bn})),x.jsx(x.Fragment,{children:Rt.createPortal(x.jsxs(x.Fragment,{children:[Bn,Nn]}),ze)})});Jf.displayName="Modal";const Sh=Object.assign(Jf,{Manager:yu});function xh(a,t){return a.classList?a.classList.contains(t):(" "+(a.className.baseVal||a.className)+" ").indexOf(" "+t+" ")!==-1}function Gh(a,t){a.classList?a.classList.add(t):xh(a,t)||(typeof a.className=="string"?a.className=a.className+" "+t:a.setAttribute("class",(a.className&&a.className.baseVal||"")+" "+t))}function Mm(a,t){return a.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function Nh(a,t){a.classList?a.classList.remove(t):typeof a.className=="string"?a.className=Mm(a.className,t):a.setAttribute("class",Mm(a.className&&a.className.baseVal||"",t))}const Tt={FIXED_CONTENT:".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",STICKY_CONTENT:".sticky-top",NAVBAR_TOGGLER:".navbar-toggler"};class Bh extends yu{adjustAndStore(t,r,s){const c=r.style[t];r.dataset[t]=c,Xi(r,{[t]:`${parseFloat(Xi(r,t))+s}px`})}restore(t,r){const s=r.dataset[t];s!==void 0&&(delete r.dataset[t],Xi(r,{[t]:s}))}setContainerStyle(t){super.setContainerStyle(t);const r=this.getElement();if(Gh(r,"modal-open"),!t.scrollBarWidth)return;const s=this.isRTL?"paddingLeft":"paddingRight",c=this.isRTL?"marginLeft":"marginRight";Pt(r,Tt.FIXED_CONTENT).forEach(d=>this.adjustAndStore(s,d,t.scrollBarWidth)),Pt(r,Tt.STICKY_CONTENT).forEach(d=>this.adjustAndStore(c,d,-t.scrollBarWidth)),Pt(r,Tt.NAVBAR_TOGGLER).forEach(d=>this.adjustAndStore(c,d,t.scrollBarWidth))}removeContainerStyle(t){super.removeContainerStyle(t);const r=this.getElement();Nh(r,"modal-open");const s=this.isRTL?"paddingLeft":"paddingRight",c=this.isRTL?"marginLeft":"marginRight";Pt(r,Tt.FIXED_CONTENT).forEach(d=>this.restore(s,d)),Pt(r,Tt.STICKY_CONTENT).forEach(d=>this.restore(c,d)),Pt(r,Tt.NAVBAR_TOGGLER).forEach(d=>this.restore(c,d))}}let Sl;function Rh(a){return Sl||(Sl=new Bh(a)),Sl}const Wf=P.forwardRef(({className:a,bsPrefix:t,as:r="div",...s},c)=>(t=nt(t,"modal-body"),x.jsx(r,{ref:c,className:Ke(a,t),...s})));Wf.displayName="ModalBody";const Lf=P.createContext({onHide(){}}),zu=P.forwardRef(({bsPrefix:a,className:t,contentClassName:r,centered:s,size:c,fullscreen:d,children:f,scrollable:y,...w},j)=>{a=nt(a,"modal");const v=`${a}-dialog`,D=typeof d=="string"?`${a}-fullscreen-${d}`:`${a}-fullscreen`;return x.jsx("div",{...w,ref:j,className:Ke(v,t,c&&`${a}-${c}`,s&&`${v}-centered`,y&&`${v}-scrollable`,d&&D),children:x.jsx("div",{className:Ke(`${a}-content`,r),children:f})})});zu.displayName="ModalDialog";const Hf=P.forwardRef(({className:a,bsPrefix:t,as:r="div",...s},c)=>(t=nt(t,"modal-footer"),x.jsx(r,{ref:c,className:Ke(a,t),...s})));Hf.displayName="ModalFooter";const Kf=P.forwardRef(({closeLabel:a="Close",closeVariant:t,closeButton:r=!1,onHide:s,children:c,...d},f)=>{const y=P.useContext(Lf),w=Hl(()=>{y?.onHide(),s?.()});return x.jsxs("div",{ref:f,...d,children:[c,r&&x.jsx(du,{"aria-label":a,variant:t,onClick:w})]})});Kf.displayName="AbstractModalHeader";const Uf=P.forwardRef(({bsPrefix:a,className:t,closeLabel:r="Close",closeButton:s=!1,...c},d)=>(a=nt(a,"modal-header"),x.jsx(Kf,{ref:d,...c,className:Ke(t,a),closeLabel:r,closeButton:s})));Uf.displayName="ModalHeader";const Oh=Hp("h4"),$f=P.forwardRef(({className:a,bsPrefix:t,as:r=Oh,...s},c)=>(t=nt(t,"modal-title"),x.jsx(r,{ref:c,className:Ke(a,t),...s})));$f.displayName="ModalTitle";function Fh(a){return x.jsx(cu,{...a,timeout:null})}function _h(a){return x.jsx(cu,{...a,timeout:null})}const Zf=P.forwardRef(({bsPrefix:a,className:t,style:r,dialogClassName:s,contentClassName:c,children:d,dialogAs:f=zu,"data-bs-theme":y,"aria-labelledby":w,"aria-describedby":j,"aria-label":v,show:D=!1,animation:A=!0,backdrop:O=!0,keyboard:L=!0,onEscapeKeyDown:F,onShow:I,onHide:J,container:X,autoFocus:te=!0,enforceFocus:ae=!0,restoreFocus:U=!0,restoreFocusOptions:oe,onEntered:ce,onExit:Pe,onExiting:Ye,onEnter:Ue,onEntering:cn,onExited:ee,backdropClassName:ge,manager:de,...Be},je)=>{const[ze,G]=P.useState({}),[$,_]=P.useState(!1),g=P.useRef(!1),E=P.useRef(!1),q=P.useRef(null),[ie,se]=mh(),ue=Ff(je,se),pe=Hl(J),me=hp();a=nt(a,"modal");const he=P.useMemo(()=>({onHide:pe}),[pe]);function Fe(){return de||Rh({isRTL:me})}function Wn(fe){if(!It)return;const Rn=Fe().getScrollbarWidth()>0,Gi=fe.scrollHeight>po(fe).documentElement.clientHeight;G({paddingRight:Rn&&!Gi?Om():void 0,paddingLeft:!Rn&&Gi?Om():void 0})}const Ln=Hl(()=>{ie&&Wn(ie.dialog)});sh(()=>{Ll(window,"resize",Ln),q.current==null||q.current()});const Nn=()=>{g.current=!0},Bn=fe=>{g.current&&ie&&fe.target===ie.dialog&&(E.current=!0),g.current=!1},ve=()=>{_(!0),q.current=Of(ie.dialog,()=>{_(!1)})},Si=fe=>{fe.target===fe.currentTarget&&ve()},Hn=fe=>{if(O==="static"){Si(fe);return}if(E.current||fe.target!==fe.currentTarget){E.current=!1;return}J?.()},Wa=fe=>{L?F?.(fe):(fe.preventDefault(),O==="static"&&ve())},Wt=(fe,Rn)=>{fe&&Wn(fe),Ue?.(fe,Rn)},xi=fe=>{q.current==null||q.current(),Pe?.(fe)},oi=(fe,Rn)=>{cn?.(fe,Rn),Rf(window,"resize",Ln)},Lt=fe=>{fe&&(fe.style.display=""),ee?.(fe),Ll(window,"resize",Ln)},La=P.useCallback(fe=>x.jsx("div",{...fe,className:Ke(`${a}-backdrop`,ge,!A&&"show")}),[A,ge,a]),Ht={...r,...ze};Ht.display="block";const Ha=fe=>x.jsx("div",{role:"dialog",...fe,style:Ht,className:Ke(t,a,$&&`${a}-static`,!A&&"show"),onClick:O?Hn:void 0,onMouseUp:Bn,"data-bs-theme":y,"aria-label":v,"aria-labelledby":w,"aria-describedby":j,children:x.jsx(f,{...Be,onMouseDown:Nn,className:s,contentClassName:c,children:d})});return x.jsx(Lf.Provider,{value:he,children:x.jsx(Sh,{show:D,ref:ue,backdrop:O,container:X,keyboard:!0,autoFocus:te,enforceFocus:ae,restoreFocus:U,restoreFocusOptions:oe,onEscapeKeyDown:Wa,onShow:I,onHide:J,onEnter:Wt,onEntering:oi,onEntered:ce,onExit:xi,onExiting:Ye,onExited:Lt,manager:Fe(),transition:A?Fh:void 0,backdropTransition:A?_h:void 0,renderBackdrop:La,renderDialog:Ha})})});Zf.displayName="Modal";const eo=Object.assign(Zf,{Body:Wf,Header:Uf,Title:$f,Footer:Hf,Dialog:zu,TRANSITION_DURATION:300,BACKDROP_TRANSITION_DURATION:150});function Kl(a,t){(t==null||t>a.length)&&(t=a.length);for(var r=0,s=Array(t);r<t;r++)s[r]=a[r];return s}function Mh(a){if(Array.isArray(a))return a}function Ih(a){if(Array.isArray(a))return Kl(a)}function Jh(a,t){if(!(a instanceof t))throw new TypeError("Cannot call a class as a function")}function Wh(a,t){for(var r=0;r<t.length;r++){var s=t[r];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(a,Vf(s.key),s)}}function Lh(a,t,r){return t&&Wh(a.prototype,t),Object.defineProperty(a,"prototype",{writable:!1}),a}function ao(a,t){var r=typeof Symbol<"u"&&a[Symbol.iterator]||a["@@iterator"];if(!r){if(Array.isArray(a)||(r=wu(a))||t){r&&(a=r);var s=0,c=function(){};return{s:c,n:function(){return s>=a.length?{done:!0}:{done:!1,value:a[s++]}},e:function(w){throw w},f:c}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var d,f=!0,y=!1;return{s:function(){r=r.call(a)},n:function(){var w=r.next();return f=w.done,w},e:function(w){y=!0,d=w},f:function(){try{f||r.return==null||r.return()}finally{if(y)throw d}}}}function re(a,t,r){return(t=Vf(t))in a?Object.defineProperty(a,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):a[t]=r,a}function Hh(a){if(typeof Symbol<"u"&&a[Symbol.iterator]!=null||a["@@iterator"]!=null)return Array.from(a)}function Kh(a,t){var r=a==null?null:typeof Symbol<"u"&&a[Symbol.iterator]||a["@@iterator"];if(r!=null){var s,c,d,f,y=[],w=!0,j=!1;try{if(d=(r=r.call(a)).next,t===0){if(Object(r)!==r)return;w=!1}else for(;!(w=(s=d.call(r)).done)&&(y.push(s.value),y.length!==t);w=!0);}catch(v){j=!0,c=v}finally{try{if(!w&&r.return!=null&&(f=r.return(),Object(f)!==f))return}finally{if(j)throw c}}return y}}function Uh(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function $h(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Im(a,t){var r=Object.keys(a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(a);t&&(s=s.filter(function(c){return Object.getOwnPropertyDescriptor(a,c).enumerable})),r.push.apply(r,s)}return r}function B(a){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?Im(Object(r),!0).forEach(function(s){re(a,s,r[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(r)):Im(Object(r)).forEach(function(s){Object.defineProperty(a,s,Object.getOwnPropertyDescriptor(r,s))})}return a}function go(a,t){return Mh(a)||Kh(a,t)||wu(a,t)||Uh()}function Gn(a){return Ih(a)||Hh(a)||wu(a)||$h()}function Zh(a,t){if(typeof a!="object"||!a)return a;var r=a[Symbol.toPrimitive];if(r!==void 0){var s=r.call(a,t);if(typeof s!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(a)}function Vf(a){var t=Zh(a,"string");return typeof t=="symbol"?t:t+""}function uo(a){"@babel/helpers - typeof";return uo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},uo(a)}function wu(a,t){if(a){if(typeof a=="string")return Kl(a,t);var r={}.toString.call(a).slice(8,-1);return r==="Object"&&a.constructor&&(r=a.constructor.name),r==="Map"||r==="Set"?Array.from(a):r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Kl(a,t):void 0}}var Jm=function(){},pu={},Yf={},Qf=null,Xf={mark:Jm,measure:Jm};try{typeof window<"u"&&(pu=window),typeof document<"u"&&(Yf=document),typeof MutationObserver<"u"&&(Qf=MutationObserver),typeof performance<"u"&&(Xf=performance)}catch{}var Vh=pu.navigator||{},Wm=Vh.userAgent,Lm=Wm===void 0?"":Wm,Ei=pu,Ae=Yf,Hm=Qf,no=Xf;Ei.document;var ri=!!Ae.documentElement&&!!Ae.head&&typeof Ae.addEventListener=="function"&&typeof Ae.createElement=="function",qf=~Lm.indexOf("MSIE")||~Lm.indexOf("Trident/"),xl,Yh=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,Qh=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Whiteboard)?.*/i,ey={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"},slab:{"fa-regular":"regular",faslr:"regular"},"slab-press":{"fa-regular":"regular",faslpr:"regular"},thumbprint:{"fa-light":"light",fatl:"light"},whiteboard:{"fa-semibold":"semibold",fawsb:"semibold"},notdog:{"fa-solid":"solid",fans:"solid"},"notdog-duo":{"fa-solid":"solid",fands:"solid"},etch:{"fa-solid":"solid",faes:"solid"},jelly:{"fa-regular":"regular",fajr:"regular"},"jelly-fill":{"fa-regular":"regular",fajfr:"regular"},"jelly-duo":{"fa-regular":"regular",fajdr:"regular"},chisel:{"fa-regular":"regular",facr:"regular"},utility:{"fa-semibold":"semibold",fausb:"semibold"},"utility-duo":{"fa-semibold":"semibold",faudsb:"semibold"},"utility-fill":{"fa-semibold":"semibold",faufsb:"semibold"}},Xh={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},ny=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-utility","fa-utility-duo","fa-utility-fill"],Ve="classic",Fa="duotone",iy="sharp",ty="sharp-duotone",ay="chisel",ry="etch",oy="jelly",sy="jelly-duo",ly="jelly-fill",uy="notdog",cy="notdog-duo",dy="slab",my="slab-press",fy="thumbprint",yy="utility",zy="utility-duo",wy="utility-fill",py="whiteboard",qh="Classic",eg="Duotone",ng="Sharp",ig="Sharp Duotone",tg="Chisel",ag="Etch",rg="Jelly",og="Jelly Duo",sg="Jelly Fill",lg="Notdog",ug="Notdog Duo",cg="Slab",dg="Slab Press",mg="Thumbprint",fg="Utility",yg="Utility Duo",zg="Utility Fill",wg="Whiteboard",hy=[Ve,Fa,iy,ty,ay,ry,oy,sy,ly,uy,cy,dy,my,fy,yy,zy,wy,py];xl={},re(re(re(re(re(re(re(re(re(re(xl,Ve,qh),Fa,eg),iy,ng),ty,ig),ay,tg),ry,ag),oy,rg),sy,og),ly,sg),uy,lg),re(re(re(re(re(re(re(re(xl,cy,ug),dy,cg),my,dg),fy,mg),yy,fg),zy,yg),wy,zg),py,wg);var pg={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"},slab:{400:"faslr"},"slab-press":{400:"faslpr"},whiteboard:{600:"fawsb"},thumbprint:{300:"fatl"},notdog:{900:"fans"},"notdog-duo":{900:"fands"},etch:{900:"faes"},chisel:{400:"facr"},jelly:{400:"fajr"},"jelly-fill":{400:"fajfr"},"jelly-duo":{400:"fajdr"},utility:{600:"fausb"},"utility-duo":{600:"faudsb"},"utility-fill":{600:"faufsb"}},hg={"Font Awesome 7 Free":{900:"fas",400:"far"},"Font Awesome 7 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 7 Brands":{400:"fab",normal:"fab"},"Font Awesome 7 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 7 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 7 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"},"Font Awesome 7 Jelly":{400:"fajr",normal:"fajr"},"Font Awesome 7 Jelly Fill":{400:"fajfr",normal:"fajfr"},"Font Awesome 7 Jelly Duo":{400:"fajdr",normal:"fajdr"},"Font Awesome 7 Slab":{400:"faslr",normal:"faslr"},"Font Awesome 7 Slab Press":{400:"faslpr",normal:"faslpr"},"Font Awesome 7 Thumbprint":{300:"fatl",normal:"fatl"},"Font Awesome 7 Notdog":{900:"fans",normal:"fans"},"Font Awesome 7 Notdog Duo":{900:"fands",normal:"fands"},"Font Awesome 7 Etch":{900:"faes",normal:"faes"},"Font Awesome 7 Chisel":{400:"facr",normal:"facr"},"Font Awesome 7 Whiteboard":{600:"fawsb",normal:"fawsb"},"Font Awesome 7 Utility":{600:"fausb",normal:"fausb"},"Font Awesome 7 Utility Duo":{600:"faudsb",normal:"faudsb"},"Font Awesome 7 Utility Fill":{600:"faufsb",normal:"faufsb"}},gg=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["chisel",{defaultShortPrefixId:"facr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["etch",{defaultShortPrefixId:"faes",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["jelly",{defaultShortPrefixId:"fajr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-duo",{defaultShortPrefixId:"fajdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-fill",{defaultShortPrefixId:"fajfr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["notdog",{defaultShortPrefixId:"fans",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog-duo",{defaultShortPrefixId:"fands",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["slab",{defaultShortPrefixId:"faslr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press",{defaultShortPrefixId:"faslpr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["thumbprint",{defaultShortPrefixId:"fatl",defaultStyleId:"light",styleIds:["light"],futureStyleIds:[],defaultFontWeight:300}],["utility",{defaultShortPrefixId:"fausb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-duo",{defaultShortPrefixId:"faudsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-fill",{defaultShortPrefixId:"faufsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["whiteboard",{defaultShortPrefixId:"fawsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}]]),jg={chisel:{regular:"facr"},classic:{brands:"fab",light:"fal",regular:"far",solid:"fas",thin:"fat"},duotone:{light:"fadl",regular:"fadr",solid:"fad",thin:"fadt"},etch:{solid:"faes"},jelly:{regular:"fajr"},"jelly-duo":{regular:"fajdr"},"jelly-fill":{regular:"fajfr"},notdog:{solid:"fans"},"notdog-duo":{solid:"fands"},sharp:{light:"fasl",regular:"fasr",solid:"fass",thin:"fast"},"sharp-duotone":{light:"fasdl",regular:"fasdr",solid:"fasds",thin:"fasdt"},slab:{regular:"faslr"},"slab-press":{regular:"faslpr"},thumbprint:{light:"fatl"},utility:{semibold:"fausb"},"utility-duo":{semibold:"faudsb"},"utility-fill":{semibold:"faufsb"},whiteboard:{semibold:"fawsb"}},gy=["fak","fa-kit","fakd","fa-kit-duotone"],Km={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},kg=["kit"],vg="kit",bg="kit-duotone",Cg="Kit",Dg="Kit Duotone";re(re({},vg,Cg),bg,Dg);var Ag={kit:{"fa-kit":"fak"}},Eg={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},Pg={kit:{fak:"fa-kit"}},Um={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},Gl,io={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Tg=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-utility","fa-utility-duo","fa-utility-fill"],Sg="classic",xg="duotone",Gg="sharp",Ng="sharp-duotone",Bg="chisel",Rg="etch",Og="jelly",Fg="jelly-duo",_g="jelly-fill",Mg="notdog",Ig="notdog-duo",Jg="slab",Wg="slab-press",Lg="thumbprint",Hg="utility",Kg="utility-duo",Ug="utility-fill",$g="whiteboard",Zg="Classic",Vg="Duotone",Yg="Sharp",Qg="Sharp Duotone",Xg="Chisel",qg="Etch",ej="Jelly",nj="Jelly Duo",ij="Jelly Fill",tj="Notdog",aj="Notdog Duo",rj="Slab",oj="Slab Press",sj="Thumbprint",lj="Utility",uj="Utility Duo",cj="Utility Fill",dj="Whiteboard";Gl={},re(re(re(re(re(re(re(re(re(re(Gl,Sg,Zg),xg,Vg),Gg,Yg),Ng,Qg),Bg,Xg),Rg,qg),Og,ej),Fg,nj),_g,ij),Mg,tj),re(re(re(re(re(re(re(re(Gl,Ig,aj),Jg,rj),Wg,oj),Lg,sj),Hg,lj),Kg,uj),Ug,cj),$g,dj);var mj="kit",fj="kit-duotone",yj="Kit",zj="Kit Duotone";re(re({},mj,yj),fj,zj);var wj={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"},slab:{"fa-regular":"faslr"},"slab-press":{"fa-regular":"faslpr"},whiteboard:{"fa-semibold":"fawsb"},thumbprint:{"fa-light":"fatl"},notdog:{"fa-solid":"fans"},"notdog-duo":{"fa-solid":"fands"},etch:{"fa-solid":"faes"},jelly:{"fa-regular":"fajr"},"jelly-fill":{"fa-regular":"fajfr"},"jelly-duo":{"fa-regular":"fajdr"},chisel:{"fa-regular":"facr"},utility:{"fa-semibold":"fausb"},"utility-duo":{"fa-semibold":"faudsb"},"utility-fill":{"fa-semibold":"faufsb"}},pj={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"],slab:["faslr"],"slab-press":["faslpr"],whiteboard:["fawsb"],thumbprint:["fatl"],notdog:["fans"],"notdog-duo":["fands"],etch:["faes"],jelly:["fajr"],"jelly-fill":["fajfr"],"jelly-duo":["fajdr"],chisel:["facr"],utility:["fausb"],"utility-duo":["faudsb"],"utility-fill":["faufsb"]},Ul={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"},slab:{faslr:"fa-regular"},"slab-press":{faslpr:"fa-regular"},whiteboard:{fawsb:"fa-semibold"},thumbprint:{fatl:"fa-light"},notdog:{fans:"fa-solid"},"notdog-duo":{fands:"fa-solid"},etch:{faes:"fa-solid"},jelly:{fajr:"fa-regular"},"jelly-fill":{fajfr:"fa-regular"},"jelly-duo":{fajdr:"fa-regular"},chisel:{facr:"fa-regular"},utility:{fausb:"fa-semibold"},"utility-duo":{faudsb:"fa-semibold"},"utility-fill":{faufsb:"fa-semibold"}},hj=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands","fa-semibold"],jy=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt","faslr","faslpr","fawsb","fatl","fans","fands","faes","fajr","fajfr","fajdr","facr","fausb","faudsb","faufsb"].concat(Tg,hj),gj=["solid","regular","light","thin","duotone","brands","semibold"],ky=[1,2,3,4,5,6,7,8,9,10],jj=ky.concat([11,12,13,14,15,16,17,18,19,20]),kj=["aw","fw","pull-left","pull-right"],vj=[].concat(Gn(Object.keys(pj)),gj,kj,["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","inverse","layers","layers-bottom-left","layers-bottom-right","layers-counter","layers-text","layers-top-left","layers-top-right","li","pull-end","pull-start","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul","width-auto","width-fixed",io.GROUP,io.SWAP_OPACITY,io.PRIMARY,io.SECONDARY]).concat(ky.map(function(a){return"".concat(a,"x")})).concat(jj.map(function(a){return"w-".concat(a)})),bj={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},ii="___FONT_AWESOME___",$l=16,vy="fa",by="svg-inline--fa",qi="data-fa-i2svg",Zl="data-fa-pseudo-element",Cj="data-fa-pseudo-element-pending",hu="data-prefix",gu="data-icon",$m="fontawesome-i2svg",Dj="async",Aj=["HTML","HEAD","STYLE","SCRIPT"],Cy=["::before","::after",":before",":after"],Dy=(function(){try{return!0}catch{return!1}})();function _a(a){return new Proxy(a,{get:function(r,s){return s in r?r[s]:r[Ve]}})}var Ay=B({},ey);Ay[Ve]=B(B(B(B({},{"fa-duotone":"duotone"}),ey[Ve]),Km.kit),Km["kit-duotone"]);var Ej=_a(Ay),Vl=B({},jg);Vl[Ve]=B(B(B(B({},{duotone:"fad"}),Vl[Ve]),Um.kit),Um["kit-duotone"]);var Zm=_a(Vl),Yl=B({},Ul);Yl[Ve]=B(B({},Yl[Ve]),Pg.kit);var ju=_a(Yl),Ql=B({},wj);Ql[Ve]=B(B({},Ql[Ve]),Ag.kit);_a(Ql);var Pj=Yh,Ey="fa-layers-text",Tj=Qh,Sj=B({},pg);_a(Sj);var xj=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Nl=Xh,Gj=[].concat(Gn(kg),Gn(vj)),Ga=Ei.FontAwesomeConfig||{};function Nj(a){var t=Ae.querySelector("script["+a+"]");if(t)return t.getAttribute(a)}function Bj(a){return a===""?!0:a==="false"?!1:a==="true"?!0:a}if(Ae&&typeof Ae.querySelector=="function"){var Rj=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-search-pseudo-elements","searchPseudoElements"],["data-search-pseudo-elements-warnings","searchPseudoElementsWarnings"],["data-search-pseudo-elements-full-scan","searchPseudoElementsFullScan"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Rj.forEach(function(a){var t=go(a,2),r=t[0],s=t[1],c=Bj(Nj(r));c!=null&&(Ga[s]=c)})}var Py={styleDefault:"solid",familyDefault:Ve,cssPrefix:vy,replacementClass:by,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Ga.familyPrefix&&(Ga.cssPrefix=Ga.familyPrefix);var _t=B(B({},Py),Ga);_t.autoReplaceSvg||(_t.observeMutations=!1);var V={};Object.keys(Py).forEach(function(a){Object.defineProperty(V,a,{enumerable:!0,set:function(r){_t[a]=r,Na.forEach(function(s){return s(V)})},get:function(){return _t[a]}})});Object.defineProperty(V,"familyPrefix",{enumerable:!0,set:function(t){_t.cssPrefix=t,Na.forEach(function(r){return r(V)})},get:function(){return _t.cssPrefix}});Ei.FontAwesomeConfig=V;var Na=[];function Oj(a){return Na.push(a),function(){Na.splice(Na.indexOf(a),1)}}var St=$l,Jn={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Fj(a){if(!(!a||!ri)){var t=Ae.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=a;for(var r=Ae.head.childNodes,s=null,c=r.length-1;c>-1;c--){var d=r[c],f=(d.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(f)>-1&&(s=d)}return Ae.head.insertBefore(t,s),a}}var _j="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Vm(){for(var a=12,t="";a-- >0;)t+=_j[Math.random()*62|0];return t}function Jt(a){for(var t=[],r=(a||[]).length>>>0;r--;)t[r]=a[r];return t}function ku(a){return a.classList?Jt(a.classList):(a.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Ty(a){return"".concat(a).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Mj(a){return Object.keys(a||{}).reduce(function(t,r){return t+"".concat(r,'="').concat(Ty(a[r]),'" ')},"").trim()}function jo(a){return Object.keys(a||{}).reduce(function(t,r){return t+"".concat(r,": ").concat(a[r].trim(),";")},"")}function vu(a){return a.size!==Jn.size||a.x!==Jn.x||a.y!==Jn.y||a.rotate!==Jn.rotate||a.flipX||a.flipY}function Ij(a){var t=a.transform,r=a.containerWidth,s=a.iconWidth,c={transform:"translate(".concat(r/2," 256)")},d="translate(".concat(t.x*32,", ").concat(t.y*32,") "),f="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),y="rotate(".concat(t.rotate," 0 0)"),w={transform:"".concat(d," ").concat(f," ").concat(y)},j={transform:"translate(".concat(s/2*-1," -256)")};return{outer:c,inner:w,path:j}}function Jj(a){var t=a.transform,r=a.width,s=r===void 0?$l:r,c=a.height,d=c===void 0?$l:c,f="";return qf?f+="translate(".concat(t.x/St-s/2,"em, ").concat(t.y/St-d/2,"em) "):f+="translate(calc(-50% + ".concat(t.x/St,"em), calc(-50% + ").concat(t.y/St,"em)) "),f+="scale(".concat(t.size/St*(t.flipX?-1:1),", ").concat(t.size/St*(t.flipY?-1:1),") "),f+="rotate(".concat(t.rotate,"deg) "),f}var Wj=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 7 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 7 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 7 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 7 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 7 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 7 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-slab-regular: normal 400 1em/1 "Font Awesome 7 Slab";
  --fa-font-slab-press-regular: normal 400 1em/1 "Font Awesome 7 Slab Press";
  --fa-font-whiteboard-semibold: normal 600 1em/1 "Font Awesome 7 Whiteboard";
  --fa-font-thumbprint-light: normal 300 1em/1 "Font Awesome 7 Thumbprint";
  --fa-font-notdog-solid: normal 900 1em/1 "Font Awesome 7 Notdog";
  --fa-font-notdog-duo-solid: normal 900 1em/1 "Font Awesome 7 Notdog Duo";
  --fa-font-etch-solid: normal 900 1em/1 "Font Awesome 7 Etch";
  --fa-font-jelly-regular: normal 400 1em/1 "Font Awesome 7 Jelly";
  --fa-font-jelly-fill-regular: normal 400 1em/1 "Font Awesome 7 Jelly Fill";
  --fa-font-jelly-duo-regular: normal 400 1em/1 "Font Awesome 7 Jelly Duo";
  --fa-font-chisel-regular: normal 400 1em/1 "Font Awesome 7 Chisel";
  --fa-font-utility-semibold: normal 600 1em/1 "Font Awesome 7 Utility";
  --fa-font-utility-duo-semibold: normal 600 1em/1 "Font Awesome 7 Utility Duo";
  --fa-font-utility-fill-semibold: normal 600 1em/1 "Font Awesome 7 Utility Fill";
}

.svg-inline--fa {
  box-sizing: content-box;
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285714em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left,
.svg-inline--fa .fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-pull-right,
.svg-inline--fa .fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.fa-layers .svg-inline--fa {
  inset: 0;
  margin: auto;
  position: absolute;
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xs {
  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-sm {
  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-lg {
  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xl {
  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-2xl {
  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-width-auto {
  --fa-width: auto;
}

.fa-fw,
.fa-width-fixed {
  --fa-width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-inline-start: var(--fa-li-margin, 2.5em);
  padding-inline-start: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

/* Heads Up: Bordered Icons will not be supported in the future!
  - This feature will be deprecated in the next major release of Font Awesome (v8)!
  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.
*/
/* Notes:
* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)
* --@{v.$css-prefix}-border-padding =
  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)
  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)
*/
.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.0625em);
  box-sizing: var(--fa-border-box-sizing, content-box);
  padding: var(--fa-border-padding, 0.1875em 0.25em);
}

.fa-pull-left,
.fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right,
.fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
  .fa-bounce,
  .fa-fade,
  .fa-beat-fade,
  .fa-flip,
  .fa-pulse,
  .fa-shake,
  .fa-spin,
  .fa-spin-pulse {
    animation: none !important;
    transition: none !important;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.svg-inline--fa.fa-inverse {
  fill: var(--fa-inverse, #fff);
}

.fa-stack {
  display: inline-block;
  height: 2em;
  line-height: 2em;
  position: relative;
  vertical-align: middle;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.svg-inline--fa.fa-stack-1x {
  --fa-width: 1.25em;
  height: 1em;
  width: var(--fa-width);
}
.svg-inline--fa.fa-stack-2x {
  --fa-width: 2.5em;
  height: 2em;
  width: var(--fa-width);
}

.fa-stack-1x,
.fa-stack-2x {
  inset: 0;
  margin: auto;
  position: absolute;
  z-index: var(--fa-stack-z-index, auto);
}`;function Sy(){var a=vy,t=by,r=V.cssPrefix,s=V.replacementClass,c=Wj;if(r!==a||s!==t){var d=new RegExp("\\.".concat(a,"\\-"),"g"),f=new RegExp("\\--".concat(a,"\\-"),"g"),y=new RegExp("\\.".concat(t),"g");c=c.replace(d,".".concat(r,"-")).replace(f,"--".concat(r,"-")).replace(y,".".concat(s))}return c}var Ym=!1;function Bl(){V.autoAddCss&&!Ym&&(Fj(Sy()),Ym=!0)}var Lj={mixout:function(){return{dom:{css:Sy,insertCss:Bl}}},hooks:function(){return{beforeDOMElementCreation:function(){Bl()},beforeI2svg:function(){Bl()}}}},ti=Ei||{};ti[ii]||(ti[ii]={});ti[ii].styles||(ti[ii].styles={});ti[ii].hooks||(ti[ii].hooks={});ti[ii].shims||(ti[ii].shims=[]);var xn=ti[ii],xy=[],Gy=function(){Ae.removeEventListener("DOMContentLoaded",Gy),co=1,xy.map(function(t){return t()})},co=!1;ri&&(co=(Ae.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Ae.readyState),co||Ae.addEventListener("DOMContentLoaded",Gy));function Hj(a){ri&&(co?setTimeout(a,0):xy.push(a))}function Ma(a){var t=a.tag,r=a.attributes,s=r===void 0?{}:r,c=a.children,d=c===void 0?[]:c;return typeof a=="string"?Ty(a):"<".concat(t," ").concat(Mj(s),">").concat(d.map(Ma).join(""),"</").concat(t,">")}function Qm(a,t,r){if(a&&a[t]&&a[t][r])return{prefix:t,iconName:r,icon:a[t][r]}}var Rl=function(t,r,s,c){var d=Object.keys(t),f=d.length,y=r,w,j,v;for(s===void 0?(w=1,v=t[d[0]]):(w=0,v=s);w<f;w++)j=d[w],v=y(v,t[j],j,t);return v};function Ny(a){return Gn(a).length!==1?null:a.codePointAt(0).toString(16)}function Xm(a){return Object.keys(a).reduce(function(t,r){var s=a[r],c=!!s.icon;return c?t[s.iconName]=s.icon:t[r]=s,t},{})}function Xl(a,t){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},s=r.skipHooks,c=s===void 0?!1:s,d=Xm(t);typeof xn.hooks.addPack=="function"&&!c?xn.hooks.addPack(a,Xm(t)):xn.styles[a]=B(B({},xn.styles[a]||{}),d),a==="fas"&&Xl("fa",t)}var Ra=xn.styles,Kj=xn.shims,By=Object.keys(ju),Uj=By.reduce(function(a,t){return a[t]=Object.keys(ju[t]),a},{}),bu=null,Ry={},Oy={},Fy={},_y={},My={};function $j(a){return~Gj.indexOf(a)}function Zj(a,t){var r=t.split("-"),s=r[0],c=r.slice(1).join("-");return s===a&&c!==""&&!$j(c)?c:null}var Iy=function(){var t=function(d){return Rl(Ra,function(f,y,w){return f[w]=Rl(y,d,{}),f},{})};Ry=t(function(c,d,f){if(d[3]&&(c[d[3]]=f),d[2]){var y=d[2].filter(function(w){return typeof w=="number"});y.forEach(function(w){c[w.toString(16)]=f})}return c}),Oy=t(function(c,d,f){if(c[f]=f,d[2]){var y=d[2].filter(function(w){return typeof w=="string"});y.forEach(function(w){c[w]=f})}return c}),My=t(function(c,d,f){var y=d[2];return c[f]=f,y.forEach(function(w){c[w]=f}),c});var r="far"in Ra||V.autoFetchSvg,s=Rl(Kj,function(c,d){var f=d[0],y=d[1],w=d[2];return y==="far"&&!r&&(y="fas"),typeof f=="string"&&(c.names[f]={prefix:y,iconName:w}),typeof f=="number"&&(c.unicodes[f.toString(16)]={prefix:y,iconName:w}),c},{names:{},unicodes:{}});Fy=s.names,_y=s.unicodes,bu=ko(V.styleDefault,{family:V.familyDefault})};Oj(function(a){bu=ko(a.styleDefault,{family:V.familyDefault})});Iy();function Cu(a,t){return(Ry[a]||{})[t]}function Vj(a,t){return(Oy[a]||{})[t]}function Yi(a,t){return(My[a]||{})[t]}function Jy(a){return Fy[a]||{prefix:null,iconName:null}}function Yj(a){var t=_y[a],r=Cu("fas",a);return t||(r?{prefix:"fas",iconName:r}:null)||{prefix:null,iconName:null}}function Pi(){return bu}var Wy=function(){return{prefix:null,iconName:null,rest:[]}};function Qj(a){var t=Ve,r=By.reduce(function(s,c){return s[c]="".concat(V.cssPrefix,"-").concat(c),s},{});return hy.forEach(function(s){(a.includes(r[s])||a.some(function(c){return Uj[s].includes(c)}))&&(t=s)}),t}function ko(a){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=t.family,s=r===void 0?Ve:r,c=Ej[s][a];if(s===Fa&&!a)return"fad";var d=Zm[s][a]||Zm[s][c],f=a in xn.styles?a:null,y=d||f||null;return y}function Xj(a){var t=[],r=null;return a.forEach(function(s){var c=Zj(V.cssPrefix,s);c?r=c:s&&t.push(s)}),{iconName:r,rest:t}}function qm(a){return a.sort().filter(function(t,r,s){return s.indexOf(t)===r})}var ef=jy.concat(gy);function vo(a){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=t.skipLookups,s=r===void 0?!1:r,c=null,d=qm(a.filter(function(O){return ef.includes(O)})),f=qm(a.filter(function(O){return!ef.includes(O)})),y=d.filter(function(O){return c=O,!ny.includes(O)}),w=go(y,1),j=w[0],v=j===void 0?null:j,D=Qj(d),A=B(B({},Xj(f)),{},{prefix:ko(v,{family:D})});return B(B(B({},A),ik({values:a,family:D,styles:Ra,config:V,canonical:A,givenPrefix:c})),qj(s,c,A))}function qj(a,t,r){var s=r.prefix,c=r.iconName;if(a||!s||!c)return{prefix:s,iconName:c};var d=t==="fa"?Jy(c):{},f=Yi(s,c);return c=d.iconName||f||c,s=d.prefix||s,s==="far"&&!Ra.far&&Ra.fas&&!V.autoFetchSvg&&(s="fas"),{prefix:s,iconName:c}}var ek=hy.filter(function(a){return a!==Ve||a!==Fa}),nk=Object.keys(Ul).filter(function(a){return a!==Ve}).map(function(a){return Object.keys(Ul[a])}).flat();function ik(a){var t=a.values,r=a.family,s=a.canonical,c=a.givenPrefix,d=c===void 0?"":c,f=a.styles,y=f===void 0?{}:f,w=a.config,j=w===void 0?{}:w,v=r===Fa,D=t.includes("fa-duotone")||t.includes("fad"),A=j.familyDefault==="duotone",O=s.prefix==="fad"||s.prefix==="fa-duotone";if(!v&&(D||A||O)&&(s.prefix="fad"),(t.includes("fa-brands")||t.includes("fab"))&&(s.prefix="fab"),!s.prefix&&ek.includes(r)){var L=Object.keys(y).find(function(I){return nk.includes(I)});if(L||j.autoFetchSvg){var F=gg.get(r).defaultShortPrefixId;s.prefix=F,s.iconName=Yi(s.prefix,s.iconName)||s.iconName}}return(s.prefix==="fa"||d==="fa")&&(s.prefix=Pi()||"fas"),s}var tk=(function(){function a(){Jh(this,a),this.definitions={}}return Lh(a,[{key:"add",value:function(){for(var r=this,s=arguments.length,c=new Array(s),d=0;d<s;d++)c[d]=arguments[d];var f=c.reduce(this._pullDefinitions,{});Object.keys(f).forEach(function(y){r.definitions[y]=B(B({},r.definitions[y]||{}),f[y]),Xl(y,f[y]);var w=ju[Ve][y];w&&Xl(w,f[y]),Iy()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(r,s){var c=s.prefix&&s.iconName&&s.icon?{0:s}:s;return Object.keys(c).map(function(d){var f=c[d],y=f.prefix,w=f.iconName,j=f.icon,v=j[2];r[y]||(r[y]={}),v.length>0&&v.forEach(function(D){typeof D=="string"&&(r[y][D]=j)}),r[y][w]=j}),r}}])})(),nf=[],Ot={},Ft={},ak=Object.keys(Ft);function rk(a,t){var r=t.mixoutsTo;return nf=a,Ot={},Object.keys(Ft).forEach(function(s){ak.indexOf(s)===-1&&delete Ft[s]}),nf.forEach(function(s){var c=s.mixout?s.mixout():{};if(Object.keys(c).forEach(function(f){typeof c[f]=="function"&&(r[f]=c[f]),uo(c[f])==="object"&&Object.keys(c[f]).forEach(function(y){r[f]||(r[f]={}),r[f][y]=c[f][y]})}),s.hooks){var d=s.hooks();Object.keys(d).forEach(function(f){Ot[f]||(Ot[f]=[]),Ot[f].push(d[f])})}s.provides&&s.provides(Ft)}),r}function ql(a,t){for(var r=arguments.length,s=new Array(r>2?r-2:0),c=2;c<r;c++)s[c-2]=arguments[c];var d=Ot[a]||[];return d.forEach(function(f){t=f.apply(null,[t].concat(s))}),t}function et(a){for(var t=arguments.length,r=new Array(t>1?t-1:0),s=1;s<t;s++)r[s-1]=arguments[s];var c=Ot[a]||[];c.forEach(function(d){d.apply(null,r)})}function Ti(){var a=arguments[0],t=Array.prototype.slice.call(arguments,1);return Ft[a]?Ft[a].apply(null,t):void 0}function eu(a){a.prefix==="fa"&&(a.prefix="fas");var t=a.iconName,r=a.prefix||Pi();if(t)return t=Yi(r,t)||t,Qm(Ly.definitions,r,t)||Qm(xn.styles,r,t)}var Ly=new tk,ok=function(){V.autoReplaceSvg=!1,V.observeMutations=!1,et("noAuto")},sk={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return ri?(et("beforeI2svg",t),Ti("pseudoElements2svg",t),Ti("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=t.autoReplaceSvgRoot;V.autoReplaceSvg===!1&&(V.autoReplaceSvg=!0),V.observeMutations=!0,Hj(function(){uk({autoReplaceSvgRoot:r}),et("watch",t)})}},lk={icon:function(t){if(t===null)return null;if(uo(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Yi(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var r=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],s=ko(t[0]);return{prefix:s,iconName:Yi(s,r)||r}}if(typeof t=="string"&&(t.indexOf("".concat(V.cssPrefix,"-"))>-1||t.match(Pj))){var c=vo(t.split(" "),{skipLookups:!0});return{prefix:c.prefix||Pi(),iconName:Yi(c.prefix,c.iconName)||c.iconName}}if(typeof t=="string"){var d=Pi();return{prefix:d,iconName:Yi(d,t)||t}}}},wn={noAuto:ok,config:V,dom:sk,parse:lk,library:Ly,findIconDefinition:eu,toHtml:Ma},uk=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=t.autoReplaceSvgRoot,s=r===void 0?Ae:r;(Object.keys(xn.styles).length>0||V.autoFetchSvg)&&ri&&V.autoReplaceSvg&&wn.dom.i2svg({node:s})};function bo(a,t){return Object.defineProperty(a,"abstract",{get:t}),Object.defineProperty(a,"html",{get:function(){return a.abstract.map(function(s){return Ma(s)})}}),Object.defineProperty(a,"node",{get:function(){if(ri){var s=Ae.createElement("div");return s.innerHTML=a.html,s.children}}}),a}function ck(a){var t=a.children,r=a.main,s=a.mask,c=a.attributes,d=a.styles,f=a.transform;if(vu(f)&&r.found&&!s.found){var y=r.width,w=r.height,j={x:y/w/2,y:.5};c.style=jo(B(B({},d),{},{"transform-origin":"".concat(j.x+f.x/16,"em ").concat(j.y+f.y/16,"em")}))}return[{tag:"svg",attributes:c,children:t}]}function dk(a){var t=a.prefix,r=a.iconName,s=a.children,c=a.attributes,d=a.symbol,f=d===!0?"".concat(t,"-").concat(V.cssPrefix,"-").concat(r):d;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:B(B({},c),{},{id:f}),children:s}]}]}function mk(a){var t=["aria-label","aria-labelledby","title","role"];return t.some(function(r){return r in a})}function Du(a){var t=a.icons,r=t.main,s=t.mask,c=a.prefix,d=a.iconName,f=a.transform,y=a.symbol,w=a.maskId,j=a.extra,v=a.watchable,D=v===void 0?!1:v,A=s.found?s:r,O=A.width,L=A.height,F=[V.replacementClass,d?"".concat(V.cssPrefix,"-").concat(d):""].filter(function(U){return j.classes.indexOf(U)===-1}).filter(function(U){return U!==""||!!U}).concat(j.classes).join(" "),I={children:[],attributes:B(B({},j.attributes),{},{"data-prefix":c,"data-icon":d,class:F,role:j.attributes.role||"img",viewBox:"0 0 ".concat(O," ").concat(L)})};!mk(j.attributes)&&!j.attributes["aria-hidden"]&&(I.attributes["aria-hidden"]="true"),D&&(I.attributes[qi]="");var J=B(B({},I),{},{prefix:c,iconName:d,main:r,mask:s,maskId:w,transform:f,symbol:y,styles:B({},j.styles)}),X=s.found&&r.found?Ti("generateAbstractMask",J)||{children:[],attributes:{}}:Ti("generateAbstractIcon",J)||{children:[],attributes:{}},te=X.children,ae=X.attributes;return J.children=te,J.attributes=ae,y?dk(J):ck(J)}function tf(a){var t=a.content,r=a.width,s=a.height,c=a.transform,d=a.extra,f=a.watchable,y=f===void 0?!1:f,w=B(B({},d.attributes),{},{class:d.classes.join(" ")});y&&(w[qi]="");var j=B({},d.styles);vu(c)&&(j.transform=Jj({transform:c,width:r,height:s}),j["-webkit-transform"]=j.transform);var v=jo(j);v.length>0&&(w.style=v);var D=[];return D.push({tag:"span",attributes:w,children:[t]}),D}function fk(a){var t=a.content,r=a.extra,s=B(B({},r.attributes),{},{class:r.classes.join(" ")}),c=jo(r.styles);c.length>0&&(s.style=c);var d=[];return d.push({tag:"span",attributes:s,children:[t]}),d}var Ol=xn.styles;function nu(a){var t=a[0],r=a[1],s=a.slice(4),c=go(s,1),d=c[0],f=null;return Array.isArray(d)?f={tag:"g",attributes:{class:"".concat(V.cssPrefix,"-").concat(Nl.GROUP)},children:[{tag:"path",attributes:{class:"".concat(V.cssPrefix,"-").concat(Nl.SECONDARY),fill:"currentColor",d:d[0]}},{tag:"path",attributes:{class:"".concat(V.cssPrefix,"-").concat(Nl.PRIMARY),fill:"currentColor",d:d[1]}}]}:f={tag:"path",attributes:{fill:"currentColor",d}},{found:!0,width:t,height:r,icon:f}}var yk={found:!1,width:512,height:512};function zk(a,t){!Dy&&!V.showMissingIcons&&a&&console.error('Icon with name "'.concat(a,'" and prefix "').concat(t,'" is missing.'))}function iu(a,t){var r=t;return t==="fa"&&V.styleDefault!==null&&(t=Pi()),new Promise(function(s,c){if(r==="fa"){var d=Jy(a)||{};a=d.iconName||a,t=d.prefix||t}if(a&&t&&Ol[t]&&Ol[t][a]){var f=Ol[t][a];return s(nu(f))}zk(a,t),s(B(B({},yk),{},{icon:V.showMissingIcons&&a?Ti("missingIconAbstract")||{}:{}}))})}var af=function(){},tu=V.measurePerformance&&no&&no.mark&&no.measure?no:{mark:af,measure:af},xa='FA "7.1.0"',wk=function(t){return tu.mark("".concat(xa," ").concat(t," begins")),function(){return Hy(t)}},Hy=function(t){tu.mark("".concat(xa," ").concat(t," ends")),tu.measure("".concat(xa," ").concat(t),"".concat(xa," ").concat(t," begins"),"".concat(xa," ").concat(t," ends"))},Au={begin:wk,end:Hy},ro=function(){};function rf(a){var t=a.getAttribute?a.getAttribute(qi):null;return typeof t=="string"}function pk(a){var t=a.getAttribute?a.getAttribute(hu):null,r=a.getAttribute?a.getAttribute(gu):null;return t&&r}function hk(a){return a&&a.classList&&a.classList.contains&&a.classList.contains(V.replacementClass)}function gk(){if(V.autoReplaceSvg===!0)return oo.replace;var a=oo[V.autoReplaceSvg];return a||oo.replace}function jk(a){return Ae.createElementNS("http://www.w3.org/2000/svg",a)}function kk(a){return Ae.createElement(a)}function Ky(a){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=t.ceFn,s=r===void 0?a.tag==="svg"?jk:kk:r;if(typeof a=="string")return Ae.createTextNode(a);var c=s(a.tag);Object.keys(a.attributes||[]).forEach(function(f){c.setAttribute(f,a.attributes[f])});var d=a.children||[];return d.forEach(function(f){c.appendChild(Ky(f,{ceFn:s}))}),c}function vk(a){var t=" ".concat(a.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var oo={replace:function(t){var r=t[0];if(r.parentNode)if(t[1].forEach(function(c){r.parentNode.insertBefore(Ky(c),r)}),r.getAttribute(qi)===null&&V.keepOriginalSource){var s=Ae.createComment(vk(r));r.parentNode.replaceChild(s,r)}else r.remove()},nest:function(t){var r=t[0],s=t[1];if(~ku(r).indexOf(V.replacementClass))return oo.replace(t);var c=new RegExp("".concat(V.cssPrefix,"-.*"));if(delete s[0].attributes.id,s[0].attributes.class){var d=s[0].attributes.class.split(" ").reduce(function(y,w){return w===V.replacementClass||w.match(c)?y.toSvg.push(w):y.toNode.push(w),y},{toNode:[],toSvg:[]});s[0].attributes.class=d.toSvg.join(" "),d.toNode.length===0?r.removeAttribute("class"):r.setAttribute("class",d.toNode.join(" "))}var f=s.map(function(y){return Ma(y)}).join(`
`);r.setAttribute(qi,""),r.innerHTML=f}};function of(a){a()}function Uy(a,t){var r=typeof t=="function"?t:ro;if(a.length===0)r();else{var s=of;V.mutateApproach===Dj&&(s=Ei.requestAnimationFrame||of),s(function(){var c=gk(),d=Au.begin("mutate");a.map(c),d(),r()})}}var Eu=!1;function $y(){Eu=!0}function au(){Eu=!1}var mo=null;function sf(a){if(Hm&&V.observeMutations){var t=a.treeCallback,r=t===void 0?ro:t,s=a.nodeCallback,c=s===void 0?ro:s,d=a.pseudoElementsCallback,f=d===void 0?ro:d,y=a.observeMutationsRoot,w=y===void 0?Ae:y;mo=new Hm(function(j){if(!Eu){var v=Pi();Jt(j).forEach(function(D){if(D.type==="childList"&&D.addedNodes.length>0&&!rf(D.addedNodes[0])&&(V.searchPseudoElements&&f(D.target),r(D.target)),D.type==="attributes"&&D.target.parentNode&&V.searchPseudoElements&&f([D.target],!0),D.type==="attributes"&&rf(D.target)&&~xj.indexOf(D.attributeName))if(D.attributeName==="class"&&pk(D.target)){var A=vo(ku(D.target)),O=A.prefix,L=A.iconName;D.target.setAttribute(hu,O||v),L&&D.target.setAttribute(gu,L)}else hk(D.target)&&c(D.target)})}}),ri&&mo.observe(w,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function bk(){mo&&mo.disconnect()}function Ck(a){var t=a.getAttribute("style"),r=[];return t&&(r=t.split(";").reduce(function(s,c){var d=c.split(":"),f=d[0],y=d.slice(1);return f&&y.length>0&&(s[f]=y.join(":").trim()),s},{})),r}function Dk(a){var t=a.getAttribute("data-prefix"),r=a.getAttribute("data-icon"),s=a.innerText!==void 0?a.innerText.trim():"",c=vo(ku(a));return c.prefix||(c.prefix=Pi()),t&&r&&(c.prefix=t,c.iconName=r),c.iconName&&c.prefix||(c.prefix&&s.length>0&&(c.iconName=Vj(c.prefix,a.innerText)||Cu(c.prefix,Ny(a.innerText))),!c.iconName&&V.autoFetchSvg&&a.firstChild&&a.firstChild.nodeType===Node.TEXT_NODE&&(c.iconName=a.firstChild.data)),c}function Ak(a){var t=Jt(a.attributes).reduce(function(r,s){return r.name!=="class"&&r.name!=="style"&&(r[s.name]=s.value),r},{});return t}function Ek(){return{iconName:null,prefix:null,transform:Jn,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function lf(a){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},r=Dk(a),s=r.iconName,c=r.prefix,d=r.rest,f=Ak(a),y=ql("parseNodeAttributes",{},a),w=t.styleParser?Ck(a):[];return B({iconName:s,prefix:c,transform:Jn,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:d,styles:w,attributes:f}},y)}var Pk=xn.styles;function Zy(a){var t=V.autoReplaceSvg==="nest"?lf(a,{styleParser:!1}):lf(a);return~t.extra.classes.indexOf(Ey)?Ti("generateLayersText",a,t):Ti("generateSvgReplacementMutation",a,t)}function Tk(){return[].concat(Gn(gy),Gn(jy))}function uf(a){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!ri)return Promise.resolve();var r=Ae.documentElement.classList,s=function(D){return r.add("".concat($m,"-").concat(D))},c=function(D){return r.remove("".concat($m,"-").concat(D))},d=V.autoFetchSvg?Tk():ny.concat(Object.keys(Pk));d.includes("fa")||d.push("fa");var f=[".".concat(Ey,":not([").concat(qi,"])")].concat(d.map(function(v){return".".concat(v,":not([").concat(qi,"])")})).join(", ");if(f.length===0)return Promise.resolve();var y=[];try{y=Jt(a.querySelectorAll(f))}catch{}if(y.length>0)s("pending"),c("complete");else return Promise.resolve();var w=Au.begin("onTree"),j=y.reduce(function(v,D){try{var A=Zy(D);A&&v.push(A)}catch(O){Dy||O.name==="MissingIcon"&&console.error(O)}return v},[]);return new Promise(function(v,D){Promise.all(j).then(function(A){Uy(A,function(){s("active"),s("complete"),c("pending"),typeof t=="function"&&t(),w(),v()})}).catch(function(A){w(),D(A)})})}function Sk(a){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Zy(a).then(function(r){r&&Uy([r],t)})}function xk(a){return function(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=(t||{}).icon?t:eu(t||{}),c=r.mask;return c&&(c=(c||{}).icon?c:eu(c||{})),a(s,B(B({},r),{},{mask:c}))}}var Gk=function(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=r.transform,c=s===void 0?Jn:s,d=r.symbol,f=d===void 0?!1:d,y=r.mask,w=y===void 0?null:y,j=r.maskId,v=j===void 0?null:j,D=r.classes,A=D===void 0?[]:D,O=r.attributes,L=O===void 0?{}:O,F=r.styles,I=F===void 0?{}:F;if(t){var J=t.prefix,X=t.iconName,te=t.icon;return bo(B({type:"icon"},t),function(){return et("beforeDOMElementCreation",{iconDefinition:t,params:r}),Du({icons:{main:nu(te),mask:w?nu(w.icon):{found:!1,width:null,height:null,icon:{}}},prefix:J,iconName:X,transform:B(B({},Jn),c),symbol:f,maskId:v,extra:{attributes:L,styles:I,classes:A}})})}},Nk={mixout:function(){return{icon:xk(Gk)}},hooks:function(){return{mutationObserverCallbacks:function(r){return r.treeCallback=uf,r.nodeCallback=Sk,r}}},provides:function(t){t.i2svg=function(r){var s=r.node,c=s===void 0?Ae:s,d=r.callback,f=d===void 0?function(){}:d;return uf(c,f)},t.generateSvgReplacementMutation=function(r,s){var c=s.iconName,d=s.prefix,f=s.transform,y=s.symbol,w=s.mask,j=s.maskId,v=s.extra;return new Promise(function(D,A){Promise.all([iu(c,d),w.iconName?iu(w.iconName,w.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(O){var L=go(O,2),F=L[0],I=L[1];D([r,Du({icons:{main:F,mask:I},prefix:d,iconName:c,transform:f,symbol:y,maskId:j,extra:v,watchable:!0})])}).catch(A)})},t.generateAbstractIcon=function(r){var s=r.children,c=r.attributes,d=r.main,f=r.transform,y=r.styles,w=jo(y);w.length>0&&(c.style=w);var j;return vu(f)&&(j=Ti("generateAbstractTransformGrouping",{main:d,transform:f,containerWidth:d.width,iconWidth:d.width})),s.push(j||d.icon),{children:s,attributes:c}}}},Bk={mixout:function(){return{layer:function(r){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},c=s.classes,d=c===void 0?[]:c;return bo({type:"layer"},function(){et("beforeDOMElementCreation",{assembler:r,params:s});var f=[];return r(function(y){Array.isArray(y)?y.map(function(w){f=f.concat(w.abstract)}):f=f.concat(y.abstract)}),[{tag:"span",attributes:{class:["".concat(V.cssPrefix,"-layers")].concat(Gn(d)).join(" ")},children:f}]})}}}},Rk={mixout:function(){return{counter:function(r){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};s.title;var c=s.classes,d=c===void 0?[]:c,f=s.attributes,y=f===void 0?{}:f,w=s.styles,j=w===void 0?{}:w;return bo({type:"counter",content:r},function(){return et("beforeDOMElementCreation",{content:r,params:s}),fk({content:r.toString(),extra:{attributes:y,styles:j,classes:["".concat(V.cssPrefix,"-layers-counter")].concat(Gn(d))}})})}}}},Ok={mixout:function(){return{text:function(r){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},c=s.transform,d=c===void 0?Jn:c,f=s.classes,y=f===void 0?[]:f,w=s.attributes,j=w===void 0?{}:w,v=s.styles,D=v===void 0?{}:v;return bo({type:"text",content:r},function(){return et("beforeDOMElementCreation",{content:r,params:s}),tf({content:r,transform:B(B({},Jn),d),extra:{attributes:j,styles:D,classes:["".concat(V.cssPrefix,"-layers-text")].concat(Gn(y))}})})}}},provides:function(t){t.generateLayersText=function(r,s){var c=s.transform,d=s.extra,f=null,y=null;if(qf){var w=parseInt(getComputedStyle(r).fontSize,10),j=r.getBoundingClientRect();f=j.width/w,y=j.height/w}return Promise.resolve([r,tf({content:r.innerHTML,width:f,height:y,transform:c,extra:d,watchable:!0})])}}},Vy=new RegExp('"',"ug"),cf=[1105920,1112319],df=B(B(B(B({},{FontAwesome:{normal:"fas",400:"fas"}}),hg),bj),Eg),ru=Object.keys(df).reduce(function(a,t){return a[t.toLowerCase()]=df[t],a},{}),Fk=Object.keys(ru).reduce(function(a,t){var r=ru[t];return a[t]=r[900]||Gn(Object.entries(r))[0][1],a},{});function _k(a){var t=a.replace(Vy,"");return Ny(Gn(t)[0]||"")}function Mk(a){var t=a.getPropertyValue("font-feature-settings").includes("ss01"),r=a.getPropertyValue("content"),s=r.replace(Vy,""),c=s.codePointAt(0),d=c>=cf[0]&&c<=cf[1],f=s.length===2?s[0]===s[1]:!1;return d||f||t}function Ik(a,t){var r=a.replace(/^['"]|['"]$/g,"").toLowerCase(),s=parseInt(t),c=isNaN(s)?"normal":s;return(ru[r]||{})[c]||Fk[r]}function mf(a,t){var r="".concat(Cj).concat(t.replace(":","-"));return new Promise(function(s,c){if(a.getAttribute(r)!==null)return s();var d=Jt(a.children),f=d.filter(function(oe){return oe.getAttribute(Zl)===t})[0],y=Ei.getComputedStyle(a,t),w=y.getPropertyValue("font-family"),j=w.match(Tj),v=y.getPropertyValue("font-weight"),D=y.getPropertyValue("content");if(f&&!j)return a.removeChild(f),s();if(j&&D!=="none"&&D!==""){var A=y.getPropertyValue("content"),O=Ik(w,v),L=_k(A),F=j[0].startsWith("FontAwesome"),I=Mk(y),J=Cu(O,L),X=J;if(F){var te=Yj(L);te.iconName&&te.prefix&&(J=te.iconName,O=te.prefix)}if(J&&!I&&(!f||f.getAttribute(hu)!==O||f.getAttribute(gu)!==X)){a.setAttribute(r,X),f&&a.removeChild(f);var ae=Ek(),U=ae.extra;U.attributes[Zl]=t,iu(J,O).then(function(oe){var ce=Du(B(B({},ae),{},{icons:{main:oe,mask:Wy()},prefix:O,iconName:X,extra:U,watchable:!0})),Pe=Ae.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?a.insertBefore(Pe,a.firstChild):a.appendChild(Pe),Pe.outerHTML=ce.map(function(Ye){return Ma(Ye)}).join(`
`),a.removeAttribute(r),s()}).catch(c)}else s()}else s()})}function Jk(a){return Promise.all([mf(a,"::before"),mf(a,"::after")])}function Wk(a){return a.parentNode!==document.head&&!~Aj.indexOf(a.tagName.toUpperCase())&&!a.getAttribute(Zl)&&(!a.parentNode||a.parentNode.tagName!=="svg")}var Lk=function(t){return!!t&&Cy.some(function(r){return t.includes(r)})},Hk=function(t){if(!t)return[];var r=new Set,s=t.split(/,(?![^()]*\))/).map(function(w){return w.trim()});s=s.flatMap(function(w){return w.includes("(")?w:w.split(",").map(function(j){return j.trim()})});var c=ao(s),d;try{for(c.s();!(d=c.n()).done;){var f=d.value;if(Lk(f)){var y=Cy.reduce(function(w,j){return w.replace(j,"")},f);y!==""&&y!=="*"&&r.add(y)}}}catch(w){c.e(w)}finally{c.f()}return r};function ff(a){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(ri){var r;if(t)r=a;else if(V.searchPseudoElementsFullScan)r=a.querySelectorAll("*");else{var s=new Set,c=ao(document.styleSheets),d;try{for(c.s();!(d=c.n()).done;){var f=d.value;try{var y=ao(f.cssRules),w;try{for(y.s();!(w=y.n()).done;){var j=w.value,v=Hk(j.selectorText),D=ao(v),A;try{for(D.s();!(A=D.n()).done;){var O=A.value;s.add(O)}}catch(F){D.e(F)}finally{D.f()}}}catch(F){y.e(F)}finally{y.f()}}catch(F){V.searchPseudoElementsWarnings&&console.warn("Font Awesome: cannot parse stylesheet: ".concat(f.href," (").concat(F.message,`)
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`))}}}catch(F){c.e(F)}finally{c.f()}if(!s.size)return;var L=Array.from(s).join(", ");try{r=a.querySelectorAll(L)}catch{}}return new Promise(function(F,I){var J=Jt(r).filter(Wk).map(Jk),X=Au.begin("searchPseudoElements");$y(),Promise.all(J).then(function(){X(),au(),F()}).catch(function(){X(),au(),I()})})}}var Kk={hooks:function(){return{mutationObserverCallbacks:function(r){return r.pseudoElementsCallback=ff,r}}},provides:function(t){t.pseudoElements2svg=function(r){var s=r.node,c=s===void 0?Ae:s;V.searchPseudoElements&&ff(c)}}},yf=!1,Uk={mixout:function(){return{dom:{unwatch:function(){$y(),yf=!0}}}},hooks:function(){return{bootstrap:function(){sf(ql("mutationObserverCallbacks",{}))},noAuto:function(){bk()},watch:function(r){var s=r.observeMutationsRoot;yf?au():sf(ql("mutationObserverCallbacks",{observeMutationsRoot:s}))}}}},zf=function(t){var r={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(s,c){var d=c.toLowerCase().split("-"),f=d[0],y=d.slice(1).join("-");if(f&&y==="h")return s.flipX=!0,s;if(f&&y==="v")return s.flipY=!0,s;if(y=parseFloat(y),isNaN(y))return s;switch(f){case"grow":s.size=s.size+y;break;case"shrink":s.size=s.size-y;break;case"left":s.x=s.x-y;break;case"right":s.x=s.x+y;break;case"up":s.y=s.y-y;break;case"down":s.y=s.y+y;break;case"rotate":s.rotate=s.rotate+y;break}return s},r)},$k={mixout:function(){return{parse:{transform:function(r){return zf(r)}}}},hooks:function(){return{parseNodeAttributes:function(r,s){var c=s.getAttribute("data-fa-transform");return c&&(r.transform=zf(c)),r}}},provides:function(t){t.generateAbstractTransformGrouping=function(r){var s=r.main,c=r.transform,d=r.containerWidth,f=r.iconWidth,y={transform:"translate(".concat(d/2," 256)")},w="translate(".concat(c.x*32,", ").concat(c.y*32,") "),j="scale(".concat(c.size/16*(c.flipX?-1:1),", ").concat(c.size/16*(c.flipY?-1:1),") "),v="rotate(".concat(c.rotate," 0 0)"),D={transform:"".concat(w," ").concat(j," ").concat(v)},A={transform:"translate(".concat(f/2*-1," -256)")},O={outer:y,inner:D,path:A};return{tag:"g",attributes:B({},O.outer),children:[{tag:"g",attributes:B({},O.inner),children:[{tag:s.icon.tag,children:s.icon.children,attributes:B(B({},s.icon.attributes),O.path)}]}]}}}},Fl={x:0,y:0,width:"100%",height:"100%"};function wf(a){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return a.attributes&&(a.attributes.fill||t)&&(a.attributes.fill="black"),a}function Zk(a){return a.tag==="g"?a.children:[a]}var Vk={hooks:function(){return{parseNodeAttributes:function(r,s){var c=s.getAttribute("data-fa-mask"),d=c?vo(c.split(" ").map(function(f){return f.trim()})):Wy();return d.prefix||(d.prefix=Pi()),r.mask=d,r.maskId=s.getAttribute("data-fa-mask-id"),r}}},provides:function(t){t.generateAbstractMask=function(r){var s=r.children,c=r.attributes,d=r.main,f=r.mask,y=r.maskId,w=r.transform,j=d.width,v=d.icon,D=f.width,A=f.icon,O=Ij({transform:w,containerWidth:D,iconWidth:j}),L={tag:"rect",attributes:B(B({},Fl),{},{fill:"white"})},F=v.children?{children:v.children.map(wf)}:{},I={tag:"g",attributes:B({},O.inner),children:[wf(B({tag:v.tag,attributes:B(B({},v.attributes),O.path)},F))]},J={tag:"g",attributes:B({},O.outer),children:[I]},X="mask-".concat(y||Vm()),te="clip-".concat(y||Vm()),ae={tag:"mask",attributes:B(B({},Fl),{},{id:X,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[L,J]},U={tag:"defs",children:[{tag:"clipPath",attributes:{id:te},children:Zk(A)},ae]};return s.push(U,{tag:"rect",attributes:B({fill:"currentColor","clip-path":"url(#".concat(te,")"),mask:"url(#".concat(X,")")},Fl)}),{children:s,attributes:c}}}},Yk={provides:function(t){var r=!1;Ei.matchMedia&&(r=Ei.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var s=[],c={fill:"currentColor"},d={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};s.push({tag:"path",attributes:B(B({},c),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var f=B(B({},d),{},{attributeName:"opacity"}),y={tag:"circle",attributes:B(B({},c),{},{cx:"256",cy:"364",r:"28"}),children:[]};return r||y.children.push({tag:"animate",attributes:B(B({},d),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:B(B({},f),{},{values:"1;0;1;1;0;1;"})}),s.push(y),s.push({tag:"path",attributes:B(B({},c),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:r?[]:[{tag:"animate",attributes:B(B({},f),{},{values:"1;0;0;0;0;1;"})}]}),r||s.push({tag:"path",attributes:B(B({},c),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:B(B({},f),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:s}}}},Qk={hooks:function(){return{parseNodeAttributes:function(r,s){var c=s.getAttribute("data-fa-symbol"),d=c===null?!1:c===""?!0:c;return r.symbol=d,r}}}},Xk=[Lj,Nk,Bk,Rk,Ok,Kk,Uk,$k,Vk,Yk,Qk];rk(Xk,{mixoutsTo:wn});wn.noAuto;var Oa=wn.config;wn.library;wn.dom;var Yy=wn.parse;wn.findIconDefinition;wn.toHtml;var qk=wn.icon;wn.layer;wn.text;wn.counter;function ev(a){return a=a-0,a===a}function Qy(a){return ev(a)?a:(a=a.replace(/[_-]+(.)?/g,(t,r)=>r?r.toUpperCase():""),a.charAt(0).toLowerCase()+a.slice(1))}function nv(a){return a.charAt(0).toUpperCase()+a.slice(1)}var xt=new Map,iv=1e3;function tv(a){if(xt.has(a))return xt.get(a);const t={};let r=0;const s=a.length;for(;r<s;){const c=a.indexOf(";",r),d=c===-1?s:c,f=a.slice(r,d).trim();if(f){const y=f.indexOf(":");if(y>0){const w=f.slice(0,y).trim(),j=f.slice(y+1).trim();if(w&&j){const v=Qy(w);t[v.startsWith("webkit")?nv(v):v]=j}}}r=d+1}if(xt.size===iv){const c=xt.keys().next().value;c&&xt.delete(c)}return xt.set(a,t),t}function Xy(a,t,r={}){if(typeof t=="string")return t;const s=(t.children||[]).map(v=>Xy(a,v)),c=t.attributes||{},d={};for(const[v,D]of Object.entries(c))switch(!0){case v==="class":{d.className=D;break}case v==="style":{d.style=tv(String(D));break}case v.startsWith("aria-"):case v.startsWith("data-"):{d[v.toLowerCase()]=D;break}default:d[Qy(v)]=D}const{style:f,role:y,"aria-label":w,...j}=r;return f&&(d.style=d.style?{...d.style,...f}:f),y&&(d.role=y),w&&(d["aria-label"]=w,d["aria-hidden"]="false"),a(t.tag,{...j,...d},...s)}var av=Xy.bind(null,zn.createElement),pf=(a,t)=>{const r=P.useId();return a||(t?r:void 0)},rv=class{constructor(a="react-fontawesome"){this.enabled=!1;let t=!1;try{t=typeof process<"u"&&!1}catch{}this.scope=a,this.enabled=t}log(...a){this.enabled&&console.log(`[${this.scope}]`,...a)}warn(...a){this.enabled&&console.warn(`[${this.scope}]`,...a)}error(...a){this.enabled&&console.error(`[${this.scope}]`,...a)}},ov="searchPseudoElementsFullScan"in Oa?"7.0.0":"6.0.0",sv=Number.parseInt(ov)>=7,Ba="fa",qn={beat:"fa-beat",fade:"fa-fade",beatFade:"fa-beat-fade",bounce:"fa-bounce",shake:"fa-shake",spin:"fa-spin",spinPulse:"fa-spin-pulse",spinReverse:"fa-spin-reverse",pulse:"fa-pulse"},lv={left:"fa-pull-left",right:"fa-pull-right"},uv={90:"fa-rotate-90",180:"fa-rotate-180",270:"fa-rotate-270"},cv={"2xs":"fa-2xs",xs:"fa-xs",sm:"fa-sm",lg:"fa-lg",xl:"fa-xl","2xl":"fa-2xl","1x":"fa-1x","2x":"fa-2x","3x":"fa-3x","4x":"fa-4x","5x":"fa-5x","6x":"fa-6x","7x":"fa-7x","8x":"fa-8x","9x":"fa-9x","10x":"fa-10x"},ei={border:"fa-border",fixedWidth:"fa-fw",flip:"fa-flip",flipHorizontal:"fa-flip-horizontal",flipVertical:"fa-flip-vertical",inverse:"fa-inverse",rotateBy:"fa-rotate-by",swapOpacity:"fa-swap-opacity",widthAuto:"fa-width-auto"};function dv(a){const t=Oa.cssPrefix||Oa.familyPrefix||Ba;return t===Ba?a:a.replace(new RegExp(String.raw`(?<=^|\s)${Ba}-`,"g"),`${t}-`)}function mv(a){const{beat:t,fade:r,beatFade:s,bounce:c,shake:d,spin:f,spinPulse:y,spinReverse:w,pulse:j,fixedWidth:v,inverse:D,border:A,flip:O,size:L,rotation:F,pull:I,swapOpacity:J,rotateBy:X,widthAuto:te,className:ae}=a,U=[];return ae&&U.push(...ae.split(" ")),t&&U.push(qn.beat),r&&U.push(qn.fade),s&&U.push(qn.beatFade),c&&U.push(qn.bounce),d&&U.push(qn.shake),f&&U.push(qn.spin),w&&U.push(qn.spinReverse),y&&U.push(qn.spinPulse),j&&U.push(qn.pulse),v&&U.push(ei.fixedWidth),D&&U.push(ei.inverse),A&&U.push(ei.border),O===!0&&U.push(ei.flip),(O==="horizontal"||O==="both")&&U.push(ei.flipHorizontal),(O==="vertical"||O==="both")&&U.push(ei.flipVertical),L!=null&&U.push(cv[L]),F!=null&&F!==0&&U.push(uv[F]),I!=null&&U.push(lv[I]),J&&U.push(ei.swapOpacity),sv?(X&&U.push(ei.rotateBy),te&&U.push(ei.widthAuto),(Oa.cssPrefix||Oa.familyPrefix||Ba)===Ba?U:U.map(dv)):U}var fv=a=>typeof a=="object"&&"icon"in a&&!!a.icon;function hf(a){if(a)return fv(a)?a:Yy.icon(a)}function yv(a){return Object.keys(a)}var gf=new rv("FontAwesomeIcon"),qy={border:!1,className:"",mask:void 0,maskId:void 0,fixedWidth:!1,inverse:!1,flip:!1,icon:void 0,listItem:!1,pull:void 0,pulse:!1,rotation:void 0,rotateBy:!1,size:void 0,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:void 0,transform:void 0,swapOpacity:!1,widthAuto:!1},zv=new Set(Object.keys(qy)),ni=zn.forwardRef((a,t)=>{const r={...qy,...a},{icon:s,mask:c,symbol:d,title:f,titleId:y,maskId:w,transform:j}=r,v=pf(w,!!c),D=pf(y,!!f),A=hf(s);if(!A)return gf.error("Icon lookup is undefined",s),null;const O=mv(r),L=typeof j=="string"?Yy.transform(j):j,F=hf(c),I=qk(A,{...O.length>0&&{classes:O},...L&&{transform:L},...F&&{mask:F},symbol:d,title:f,titleId:D,maskId:v});if(!I)return gf.error("Could not find icon",A),null;const{abstract:J}=I,X={ref:t};for(const te of yv(r))zv.has(te)||(X[te]=r[te]);return av(J[0],X)});ni.displayName="FontAwesomeIcon";var wv={prefix:"fas",iconName:"trash",icon:[448,512,[],"f1f8","M136.7 5.9L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-8.7-26.1C306.9-7.2 294.7-16 280.9-16L167.1-16c-13.8 0-26 8.8-30.4 21.9zM416 144L32 144 53.1 467.1C54.7 492.4 75.7 512 101 512L347 512c25.3 0 46.3-19.6 47.9-44.9L416 144z"]},pv={prefix:"fas",iconName:"guitar",icon:[512,512,[],"f7a6","M465 7c-9.4-9.4-24.6-9.4-33.9 0L383 55c-2.4 2.4-4.3 5.3-5.5 8.5l-15.4 41-77.5 77.6c-45.1-29.4-99.3-30.2-131 1.6-11 11-18 24.6-21.4 39.6-3.7 16.6-19.1 30.7-36.1 31.6-25.6 1.3-49.3 10.7-67.3 28.6-44.8 44.8-36.4 125.8 18.7 180.9S183.6 528 228.4 483.2c17.9-17.9 27.4-41.7 28.6-67.3 .9-17 15-32.3 31.6-36.1 15-3.4 28.6-10.5 39.6-21.4 31.8-31.8 31-85.9 1.6-131l77.6-77.6 41-15.4c3.2-1.2 6.1-3.1 8.5-5.5l48-48c9.4-9.4 9.4-24.6 0-33.9L465 7zM208 256a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"]},hv={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M55.1 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L147.2 256 9.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192.5 301.3 329.9 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.8 256 375.1 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192.5 210.7 55.1 73.4z"]},gv=hv,jv={prefix:"fas",iconName:"star",icon:[576,512,[11088,61446],"f005","M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z"]},kv={prefix:"fas",iconName:"caret-up",icon:[320,512,[],"f0d8","M140.3 135.2c12.6-10.3 31.1-9.5 42.8 2.2l128 128c9.2 9.2 11.9 22.9 6.9 34.9S301.4 320 288.5 320l-256 0c-12.9 0-24.6-7.8-29.6-19.8S.7 274.5 9.9 265.4l128-128 2.4-2.2z"]},vv={prefix:"fas",iconName:"caret-down",icon:[320,512,[],"f0d7","M140.3 376.8c12.6 10.2 31.1 9.5 42.8-2.2l128-128c9.2-9.2 11.9-22.9 6.9-34.9S301.4 192 288.5 192l-256 0c-12.9 0-24.6 7.8-29.6 19.8S.7 237.5 9.9 246.6l128 128 2.4 2.2z"]},ez={prefix:"fas",iconName:"list-ul",icon:[512,512,["list-dots"],"f0ca","M48 144a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L192 64zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-288 0zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-288 0zM48 464a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM96 256a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z"]};const Qi={PLAIN:"plain",STARRED:"starred",SELECTED:"selected"},fo=({mode:a})=>x.jsx(ni,{icon:jv,className:Ke("sb-star",`sb-star-mode-${a}`)}),bv=P.memo(({song:a,chooseSong:t,onlyStarred:r})=>{const s=()=>t(a.number),c=r?a.selected?Qi.SELECTED:Qi.STARRED:a.starred?Qi.STARRED:Qi.PLAIN,d=r?a.toggleSelected:a.toggleStarred;return x.jsxs("span",{className:Ke("sb-menu-songtitle",{"sb-starred-song":a.starred}),children:[x.jsxs("span",{onClick:d,children:[x.jsx(fo,{mode:c})," ",x.jsxs("span",{className:Ke({"sb-chosen-song":a.chosen}),children:[a.number,". "]})]}),x.jsx("a",{href:"#",onClick:s,className:Ke("text-reset",{"sb-chosen-song":a.chosen}),children:a.title})]})}),Cv=({onlyStarred:a,toggleOnlyStarred:t,starredCount:r,selectedSong:s,searchText:c,setSearchText:d,onClose:f})=>{const y=w=>{d(w.target.value)};return x.jsxs(x.Fragment,{children:[r?x.jsx("div",{className:"me-2",children:x.jsx(Bt,{variant:"info",onClick:t,children:a?x.jsx(ni,{icon:ez,role:"button",size:"lg"}):x.jsx(x.Fragment,{children:x.jsxs("span",{className:"sb-no-wrap",children:[x.jsx(fo,{mode:Qi.STARRED})," ",r]})})})}):null,a?s?x.jsxs(x.Fragment,{children:[x.jsx(Bt,{className:"ms-2 me-1",variant:"success",disabled:!s.moveUp,onClick:s.moveUp,children:x.jsx(ni,{icon:kv,role:"button",size:"lg"})}),x.jsx(Bt,{className:"me-3",variant:"success",disabled:!s.moveDown,onClick:s.moveDown,children:x.jsx(ni,{icon:vv,role:"button",size:"lg"})}),x.jsx(Bt,{className:"me-1",variant:"danger",onClick:s.toggleStarred,children:x.jsx(ni,{icon:wv,role:"button",size:"lg"})})]}):x.jsx("div",{className:"ms-2",children:x.jsxs("span",{className:"fw-bold sb-no-wrap",children:["Wybrane ",x.jsx(fo,{mode:Qi.STARRED})," ",r]})}):x.jsx("div",{className:"me-2 flex-grow-1",children:x.jsx("input",{type:"search",className:"form-control",placeholder:"Szukaj",autoCapitalize:"none",autoCorrect:"off",value:c,onChange:y})}),x.jsx("div",{className:"ms-auto",children:x.jsx(Bt,{variant:"light",onClick:f,children:x.jsx(ni,{icon:gv,role:"button",size:"lg",onClick:f})})})]})},nz=a=>a.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[\u0142]/g,"l").replace(/[^a-z ]/g,"").toLowerCase(),Dv=({songs:a,chooseSong:t,starredCount:r,onlyStarred:s,toggleOnlyStarred:c,show:d,onClose:f})=>{const[y,w]=P.useState(""),j=P.useRef(null);P.useEffect(()=>{(!d||s)&&w(""),O()},[d,s]);const D=(()=>{const J=y.trim();if(!J)return;const X=parseInt(J,10);return Number.isNaN(X)?nz(J):X})();P.useEffect(()=>{D||O()},[D]);const A=J=>D?typeof D=="number"?J.number===D:J.latinTitle.includes(D):!0,O=()=>{j.current&&j.current.scrollIntoView()},L=a.findIndex(J=>J.chosen),F=a.find(J=>J.selected),I=L<3?0:L-3;return x.jsxs(eo,{show:d,onHide:f,scrollable:!0,animation:!1,children:[x.jsx(eo.Header,{className:"py-2 px-2",children:x.jsx(Cv,{onlyStarred:s,toggleOnlyStarred:c,starredCount:r,selectedSong:F,searchText:y,setSearchText:w,onClose:f})}),x.jsx(eo.Body,{children:a.filter(J=>A(J)).map((J,X)=>x.jsxs(P.Fragment,{children:[x.jsx(bv,{song:J,chooseSong:t,onlyStarred:s}),x.jsx("br",{ref:X===I?j:null})]},J.number))}),x.jsx(eo.Footer,{className:"py-0",children:x.jsxs("p",{className:"text-secondary small",children:["Śpiewnik - Tchnienie Boga v","0.4.1"]})})]})},Av=({onlyStarred:a,chordsShown:t,onClickMenu:r,onClickGuitar:s})=>x.jsxs("div",{className:"sb-menu-buttons-container",children:[x.jsx("div",{className:Ke("btn","sb-menu-button","shadow","rounded-circle",t?"sb-menu-button-red":"sb-menu-button-gray","d-flex","justify-content-center","align-items-center","pt-2"),tabIndex:0,role:"button",onClick:s,children:x.jsx("div",{className:"sb-menu-button-icon my-auto",children:x.jsx(ni,{icon:pv,size:"lg"})})}),x.jsx("div",{className:"btn sb-menu-button shadow rounded-circle sb-menu-button-cyan d-flex justify-content-center align-items-center pt-2",tabIndex:1,role:"button",onClick:r,children:x.jsx("div",{className:"sb-menu-button-icon my-auto",children:a?x.jsx(fo,{mode:Qi.STARRED}):x.jsx(ni,{icon:ez,size:"lg"})})})]}),Ev=a=>{const t=localStorage.getItem(a);return typeof t=="string"?JSON.parse(t):void 0},Pv=(a,t)=>{t!==void 0&&localStorage.setItem(a,JSON.stringify(t))},Vi=(a,t)=>{const[r,s]=P.useState(()=>{const c=Ev(a);return c||t});return P.useEffect(()=>{Pv(a,r)},[a,r]),[r,s]};function Tv(a,t,r){return Math.max(t,Math.min(a,r))}const Ee={toVector(a,t){return a===void 0&&(a=t),Array.isArray(a)?a:[a,a]},add(a,t){return[a[0]+t[0],a[1]+t[1]]},sub(a,t){return[a[0]-t[0],a[1]-t[1]]},addTo(a,t){a[0]+=t[0],a[1]+=t[1]},subTo(a,t){a[0]-=t[0],a[1]-=t[1]}};function jf(a,t,r){return t===0||Math.abs(t)===1/0?Math.pow(a,r*5):a*t*r/(t+r*a)}function kf(a,t,r,s=.15){return s===0?Tv(a,t,r):a<t?-jf(t-a,r-t,s)+t:a>r?+jf(a-r,r-t,s)+r:a}function Sv(a,[t,r],[s,c]){const[[d,f],[y,w]]=a;return[kf(t,d,f,s),kf(r,y,w,c)]}function xv(a,t){if(typeof a!="object"||a===null)return a;var r=a[Symbol.toPrimitive];if(r!==void 0){var s=r.call(a,t);if(typeof s!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(a)}function Gv(a){var t=xv(a,"string");return typeof t=="symbol"?t:String(t)}function Me(a,t,r){return t=Gv(t),t in a?Object.defineProperty(a,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):a[t]=r,a}function vf(a,t){var r=Object.keys(a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(a);t&&(s=s.filter(function(c){return Object.getOwnPropertyDescriptor(a,c).enumerable})),r.push.apply(r,s)}return r}function Ge(a){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?vf(Object(r),!0).forEach(function(s){Me(a,s,r[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(r)):vf(Object(r)).forEach(function(s){Object.defineProperty(a,s,Object.getOwnPropertyDescriptor(r,s))})}return a}const iz={pointer:{start:"down",change:"move",end:"up"},mouse:{start:"down",change:"move",end:"up"},touch:{start:"start",change:"move",end:"end"},gesture:{start:"start",change:"change",end:"end"}};function bf(a){return a?a[0].toUpperCase()+a.slice(1):""}const Nv=["enter","leave"];function Bv(a=!1,t){return a&&!Nv.includes(t)}function Rv(a,t="",r=!1){const s=iz[a],c=s&&s[t]||t;return"on"+bf(a)+bf(c)+(Bv(r,c)?"Capture":"")}const Ov=["gotpointercapture","lostpointercapture"];function Fv(a){let t=a.substring(2).toLowerCase();const r=!!~t.indexOf("passive");r&&(t=t.replace("passive",""));const s=Ov.includes(t)?"capturecapture":"capture",c=!!~t.indexOf(s);return c&&(t=t.replace("capture","")),{device:t,capture:c,passive:r}}function _v(a,t=""){const r=iz[a],s=r&&r[t]||t;return a+s}function Co(a){return"touches"in a}function tz(a){return Co(a)?"touch":"pointerType"in a?a.pointerType:"mouse"}function Mv(a){return Array.from(a.touches).filter(t=>{var r,s;return t.target===a.currentTarget||((r=a.currentTarget)===null||r===void 0||(s=r.contains)===null||s===void 0?void 0:s.call(r,t.target))})}function Iv(a){return a.type==="touchend"||a.type==="touchcancel"?a.changedTouches:a.targetTouches}function az(a){return Co(a)?Iv(a)[0]:a}function ou(a,t){try{const r=t.clientX-a.clientX,s=t.clientY-a.clientY,c=(t.clientX+a.clientX)/2,d=(t.clientY+a.clientY)/2,f=Math.hypot(r,s);return{angle:-(Math.atan2(r,s)*180)/Math.PI,distance:f,origin:[c,d]}}catch{}return null}function Jv(a){return Mv(a).map(t=>t.identifier)}function Cf(a,t){const[r,s]=Array.from(a.touches).filter(c=>t.includes(c.identifier));return ou(r,s)}function _l(a){const t=az(a);return Co(a)?t.identifier:t.pointerId}function Mt(a){const t=az(a);return[t.clientX,t.clientY]}const Df=40,Af=800;function rz(a){let{deltaX:t,deltaY:r,deltaMode:s}=a;return s===1?(t*=Df,r*=Df):s===2&&(t*=Af,r*=Af),[t,r]}function Wv(a){var t,r;const{scrollX:s,scrollY:c,scrollLeft:d,scrollTop:f}=a.currentTarget;return[(t=s??d)!==null&&t!==void 0?t:0,(r=c??f)!==null&&r!==void 0?r:0]}function Lv(a){const t={};if("buttons"in a&&(t.buttons=a.buttons),"shiftKey"in a){const{shiftKey:r,altKey:s,metaKey:c,ctrlKey:d}=a;Object.assign(t,{shiftKey:r,altKey:s,metaKey:c,ctrlKey:d})}return t}function yo(a,...t){return typeof a=="function"?a(...t):a}function Hv(){}function Kv(...a){return a.length===0?Hv:a.length===1?a[0]:function(){let t;for(const r of a)t=r.apply(this,arguments)||t;return t}}function Ef(a,t){return Object.assign({},t,a||{})}const Uv=32;class oz{constructor(t,r,s){this.ctrl=t,this.args=r,this.key=s,this.state||(this.state={},this.computeValues([0,0]),this.computeInitial(),this.init&&this.init(),this.reset())}get state(){return this.ctrl.state[this.key]}set state(t){this.ctrl.state[this.key]=t}get shared(){return this.ctrl.state.shared}get eventStore(){return this.ctrl.gestureEventStores[this.key]}get timeoutStore(){return this.ctrl.gestureTimeoutStores[this.key]}get config(){return this.ctrl.config[this.key]}get sharedConfig(){return this.ctrl.config.shared}get handler(){return this.ctrl.handlers[this.key]}reset(){const{state:t,shared:r,ingKey:s,args:c}=this;r[s]=t._active=t.active=t._blocked=t._force=!1,t._step=[!1,!1],t.intentional=!1,t._movement=[0,0],t._distance=[0,0],t._direction=[0,0],t._delta=[0,0],t._bounds=[[-1/0,1/0],[-1/0,1/0]],t.args=c,t.axis=void 0,t.memo=void 0,t.elapsedTime=t.timeDelta=0,t.direction=[0,0],t.distance=[0,0],t.overflow=[0,0],t._movementBound=[!1,!1],t.velocity=[0,0],t.movement=[0,0],t.delta=[0,0],t.timeStamp=0}start(t){const r=this.state,s=this.config;r._active||(this.reset(),this.computeInitial(),r._active=!0,r.target=t.target,r.currentTarget=t.currentTarget,r.lastOffset=s.from?yo(s.from,r):r.offset,r.offset=r.lastOffset,r.startTime=r.timeStamp=t.timeStamp)}computeValues(t){const r=this.state;r._values=t,r.values=this.config.transform(t)}computeInitial(){const t=this.state;t._initial=t._values,t.initial=t.values}compute(t){const{state:r,config:s,shared:c}=this;r.args=this.args;let d=0;if(t&&(r.event=t,s.preventDefault&&t.cancelable&&r.event.preventDefault(),r.type=t.type,c.touches=this.ctrl.pointerIds.size||this.ctrl.touchIds.size,c.locked=!!document.pointerLockElement,Object.assign(c,Lv(t)),c.down=c.pressed=c.buttons%2===1||c.touches>0,d=t.timeStamp-r.timeStamp,r.timeStamp=t.timeStamp,r.elapsedTime=r.timeStamp-r.startTime),r._active){const oe=r._delta.map(Math.abs);Ee.addTo(r._distance,oe)}this.axisIntent&&this.axisIntent(t);const[f,y]=r._movement,[w,j]=s.threshold,{_step:v,values:D}=r;if(s.hasCustomTransform?(v[0]===!1&&(v[0]=Math.abs(f)>=w&&D[0]),v[1]===!1&&(v[1]=Math.abs(y)>=j&&D[1])):(v[0]===!1&&(v[0]=Math.abs(f)>=w&&Math.sign(f)*w),v[1]===!1&&(v[1]=Math.abs(y)>=j&&Math.sign(y)*j)),r.intentional=v[0]!==!1||v[1]!==!1,!r.intentional)return;const A=[0,0];if(s.hasCustomTransform){const[oe,ce]=D;A[0]=v[0]!==!1?oe-v[0]:0,A[1]=v[1]!==!1?ce-v[1]:0}else A[0]=v[0]!==!1?f-v[0]:0,A[1]=v[1]!==!1?y-v[1]:0;this.restrictToAxis&&!r._blocked&&this.restrictToAxis(A);const O=r.offset,L=r._active&&!r._blocked||r.active;L&&(r.first=r._active&&!r.active,r.last=!r._active&&r.active,r.active=c[this.ingKey]=r._active,t&&(r.first&&("bounds"in s&&(r._bounds=yo(s.bounds,r)),this.setup&&this.setup()),r.movement=A,this.computeOffset()));const[F,I]=r.offset,[[J,X],[te,ae]]=r._bounds;r.overflow=[F<J?-1:F>X?1:0,I<te?-1:I>ae?1:0],r._movementBound[0]=r.overflow[0]?r._movementBound[0]===!1?r._movement[0]:r._movementBound[0]:!1,r._movementBound[1]=r.overflow[1]?r._movementBound[1]===!1?r._movement[1]:r._movementBound[1]:!1;const U=r._active?s.rubberband||[0,0]:[0,0];if(r.offset=Sv(r._bounds,r.offset,U),r.delta=Ee.sub(r.offset,O),this.computeMovement(),L&&(!r.last||d>Uv)){r.delta=Ee.sub(r.offset,O);const oe=r.delta.map(Math.abs);Ee.addTo(r.distance,oe),r.direction=r.delta.map(Math.sign),r._direction=r._delta.map(Math.sign),!r.first&&d>0&&(r.velocity=[oe[0]/d,oe[1]/d],r.timeDelta=d)}}emit(){const t=this.state,r=this.shared,s=this.config;if(t._active||this.clean(),(t._blocked||!t.intentional)&&!t._force&&!s.triggerAllEvents)return;const c=this.handler(Ge(Ge(Ge({},r),t),{},{[this.aliasKey]:t.values}));c!==void 0&&(t.memo=c)}clean(){this.eventStore.clean(),this.timeoutStore.clean()}}function $v([a,t],r){const s=Math.abs(a),c=Math.abs(t);if(s>c&&s>r)return"x";if(c>s&&c>r)return"y"}class Ia extends oz{constructor(...t){super(...t),Me(this,"aliasKey","xy")}reset(){super.reset(),this.state.axis=void 0}init(){this.state.offset=[0,0],this.state.lastOffset=[0,0]}computeOffset(){this.state.offset=Ee.add(this.state.lastOffset,this.state.movement)}computeMovement(){this.state.movement=Ee.sub(this.state.offset,this.state.lastOffset)}axisIntent(t){const r=this.state,s=this.config;if(!r.axis&&t){const c=typeof s.axisThreshold=="object"?s.axisThreshold[tz(t)]:s.axisThreshold;r.axis=$v(r._movement,c)}r._blocked=(s.lockDirection||!!s.axis)&&!r.axis||!!s.axis&&s.axis!==r.axis}restrictToAxis(t){if(this.config.axis||this.config.lockDirection)switch(this.state.axis){case"x":t[1]=0;break;case"y":t[0]=0;break}}}const Zv=a=>a,Pf=.15,sz={enabled(a=!0){return a},eventOptions(a,t,r){return Ge(Ge({},r.shared.eventOptions),a)},preventDefault(a=!1){return a},triggerAllEvents(a=!1){return a},rubberband(a=0){switch(a){case!0:return[Pf,Pf];case!1:return[0,0];default:return Ee.toVector(a)}},from(a){if(typeof a=="function")return a;if(a!=null)return Ee.toVector(a)},transform(a,t,r){const s=a||r.shared.transform;return this.hasCustomTransform=!!s,s||Zv},threshold(a){return Ee.toVector(a,0)}},Vv=0,it=Ge(Ge({},sz),{},{axis(a,t,{axis:r}){if(this.lockDirection=r==="lock",!this.lockDirection)return r},axisThreshold(a=Vv){return a},bounds(a={}){if(typeof a=="function")return d=>it.bounds(a(d));if("current"in a)return()=>a.current;if(typeof HTMLElement=="function"&&a instanceof HTMLElement)return a;const{left:t=-1/0,right:r=1/0,top:s=-1/0,bottom:c=1/0}=a;return[[t,r],[s,c]]}}),Tf={ArrowRight:(a,t=1)=>[a*t,0],ArrowLeft:(a,t=1)=>[-1*a*t,0],ArrowUp:(a,t=1)=>[0,-1*a*t],ArrowDown:(a,t=1)=>[0,a*t]};class Yv extends Ia{constructor(...t){super(...t),Me(this,"ingKey","dragging")}reset(){super.reset();const t=this.state;t._pointerId=void 0,t._pointerActive=!1,t._keyboardActive=!1,t._preventScroll=!1,t._delayed=!1,t.swipe=[0,0],t.tap=!1,t.canceled=!1,t.cancel=this.cancel.bind(this)}setup(){const t=this.state;if(t._bounds instanceof HTMLElement){const r=t._bounds.getBoundingClientRect(),s=t.currentTarget.getBoundingClientRect(),c={left:r.left-s.left+t.offset[0],right:r.right-s.right+t.offset[0],top:r.top-s.top+t.offset[1],bottom:r.bottom-s.bottom+t.offset[1]};t._bounds=it.bounds(c)}}cancel(){const t=this.state;t.canceled||(t.canceled=!0,t._active=!1,setTimeout(()=>{this.compute(),this.emit()},0))}setActive(){this.state._active=this.state._pointerActive||this.state._keyboardActive}clean(){this.pointerClean(),this.state._pointerActive=!1,this.state._keyboardActive=!1,super.clean()}pointerDown(t){const r=this.config,s=this.state;if(t.buttons!=null&&(Array.isArray(r.pointerButtons)?!r.pointerButtons.includes(t.buttons):r.pointerButtons!==-1&&r.pointerButtons!==t.buttons))return;const c=this.ctrl.setEventIds(t);r.pointerCapture&&t.target.setPointerCapture(t.pointerId),!(c&&c.size>1&&s._pointerActive)&&(this.start(t),this.setupPointer(t),s._pointerId=_l(t),s._pointerActive=!0,this.computeValues(Mt(t)),this.computeInitial(),r.preventScrollAxis&&tz(t)!=="mouse"?(s._active=!1,this.setupScrollPrevention(t)):r.delay>0?(this.setupDelayTrigger(t),r.triggerAllEvents&&(this.compute(t),this.emit())):this.startPointerDrag(t))}startPointerDrag(t){const r=this.state;r._active=!0,r._preventScroll=!0,r._delayed=!1,this.compute(t),this.emit()}pointerMove(t){const r=this.state,s=this.config;if(!r._pointerActive)return;const c=_l(t);if(r._pointerId!==void 0&&c!==r._pointerId)return;const d=Mt(t);if(document.pointerLockElement===t.target?r._delta=[t.movementX,t.movementY]:(r._delta=Ee.sub(d,r._values),this.computeValues(d)),Ee.addTo(r._movement,r._delta),this.compute(t),r._delayed&&r.intentional){this.timeoutStore.remove("dragDelay"),r.active=!1,this.startPointerDrag(t);return}if(s.preventScrollAxis&&!r._preventScroll)if(r.axis)if(r.axis===s.preventScrollAxis||s.preventScrollAxis==="xy"){r._active=!1,this.clean();return}else{this.timeoutStore.remove("startPointerDrag"),this.startPointerDrag(t);return}else return;this.emit()}pointerUp(t){this.ctrl.setEventIds(t);try{this.config.pointerCapture&&t.target.hasPointerCapture(t.pointerId)&&t.target.releasePointerCapture(t.pointerId)}catch{}const r=this.state,s=this.config;if(!r._active||!r._pointerActive)return;const c=_l(t);if(r._pointerId!==void 0&&c!==r._pointerId)return;this.state._pointerActive=!1,this.setActive(),this.compute(t);const[d,f]=r._distance;if(r.tap=d<=s.tapsThreshold&&f<=s.tapsThreshold,r.tap&&s.filterTaps)r._force=!0;else{const[y,w]=r._delta,[j,v]=r._movement,[D,A]=s.swipe.velocity,[O,L]=s.swipe.distance,F=s.swipe.duration;if(r.elapsedTime<F){const I=Math.abs(y/r.timeDelta),J=Math.abs(w/r.timeDelta);I>D&&Math.abs(j)>O&&(r.swipe[0]=Math.sign(y)),J>A&&Math.abs(v)>L&&(r.swipe[1]=Math.sign(w))}}this.emit()}pointerClick(t){!this.state.tap&&t.detail>0&&(t.preventDefault(),t.stopPropagation())}setupPointer(t){const r=this.config,s=r.device;r.pointerLock&&t.currentTarget.requestPointerLock(),r.pointerCapture||(this.eventStore.add(this.sharedConfig.window,s,"change",this.pointerMove.bind(this)),this.eventStore.add(this.sharedConfig.window,s,"end",this.pointerUp.bind(this)),this.eventStore.add(this.sharedConfig.window,s,"cancel",this.pointerUp.bind(this)))}pointerClean(){this.config.pointerLock&&document.pointerLockElement===this.state.currentTarget&&document.exitPointerLock()}preventScroll(t){this.state._preventScroll&&t.cancelable&&t.preventDefault()}setupScrollPrevention(t){this.state._preventScroll=!1,Qv(t);const r=this.eventStore.add(this.sharedConfig.window,"touch","change",this.preventScroll.bind(this),{passive:!1});this.eventStore.add(this.sharedConfig.window,"touch","end",r),this.eventStore.add(this.sharedConfig.window,"touch","cancel",r),this.timeoutStore.add("startPointerDrag",this.startPointerDrag.bind(this),this.config.preventScrollDelay,t)}setupDelayTrigger(t){this.state._delayed=!0,this.timeoutStore.add("dragDelay",()=>{this.state._step=[0,0],this.startPointerDrag(t)},this.config.delay)}keyDown(t){const r=Tf[t.key];if(r){const s=this.state,c=t.shiftKey?10:t.altKey?.1:1;this.start(t),s._delta=r(this.config.keyboardDisplacement,c),s._keyboardActive=!0,Ee.addTo(s._movement,s._delta),this.compute(t),this.emit()}}keyUp(t){t.key in Tf&&(this.state._keyboardActive=!1,this.setActive(),this.compute(t),this.emit())}bind(t){const r=this.config.device;t(r,"start",this.pointerDown.bind(this)),this.config.pointerCapture&&(t(r,"change",this.pointerMove.bind(this)),t(r,"end",this.pointerUp.bind(this)),t(r,"cancel",this.pointerUp.bind(this)),t("lostPointerCapture","",this.pointerUp.bind(this))),this.config.keys&&(t("key","down",this.keyDown.bind(this)),t("key","up",this.keyUp.bind(this))),this.config.filterTaps&&t("click","",this.pointerClick.bind(this),{capture:!0,passive:!1})}}function Qv(a){"persist"in a&&typeof a.persist=="function"&&a.persist()}const Ja=typeof window<"u"&&window.document&&window.document.createElement;function lz(){return Ja&&"ontouchstart"in window}function Xv(){return lz()||Ja&&window.navigator.maxTouchPoints>1}function qv(){return Ja&&"onpointerdown"in window}function eb(){return Ja&&"exitPointerLock"in window.document}function nb(){try{return"constructor"in GestureEvent}catch{return!1}}const bn={isBrowser:Ja,gesture:nb(),touch:lz(),touchscreen:Xv(),pointer:qv(),pointerLock:eb()},ib=250,tb=180,ab=.5,rb=50,ob=250,sb=10,Sf={mouse:0,touch:0,pen:8},lb=Ge(Ge({},it),{},{device(a,t,{pointer:{touch:r=!1,lock:s=!1,mouse:c=!1}={}}){return this.pointerLock=s&&bn.pointerLock,bn.touch&&r?"touch":this.pointerLock?"mouse":bn.pointer&&!c?"pointer":bn.touch?"touch":"mouse"},preventScrollAxis(a,t,{preventScroll:r}){if(this.preventScrollDelay=typeof r=="number"?r:r||r===void 0&&a?ib:void 0,!(!bn.touchscreen||r===!1))return a||(r!==void 0?"y":void 0)},pointerCapture(a,t,{pointer:{capture:r=!0,buttons:s=1,keys:c=!0}={}}){return this.pointerButtons=s,this.keys=c,!this.pointerLock&&this.device==="pointer"&&r},threshold(a,t,{filterTaps:r=!1,tapsThreshold:s=3,axis:c=void 0}){const d=Ee.toVector(a,r?s:c?1:0);return this.filterTaps=r,this.tapsThreshold=s,d},swipe({velocity:a=ab,distance:t=rb,duration:r=ob}={}){return{velocity:this.transform(Ee.toVector(a)),distance:this.transform(Ee.toVector(t)),duration:r}},delay(a=0){switch(a){case!0:return tb;case!1:return 0;default:return a}},axisThreshold(a){return a?Ge(Ge({},Sf),a):Sf},keyboardDisplacement(a=sb){return a}});function uz(a){const[t,r]=a.overflow,[s,c]=a._delta,[d,f]=a._direction;(t<0&&s>0&&d<0||t>0&&s<0&&d>0)&&(a._movement[0]=a._movementBound[0]),(r<0&&c>0&&f<0||r>0&&c<0&&f>0)&&(a._movement[1]=a._movementBound[1])}const ub=30,cb=100;class db extends oz{constructor(...t){super(...t),Me(this,"ingKey","pinching"),Me(this,"aliasKey","da")}init(){this.state.offset=[1,0],this.state.lastOffset=[1,0],this.state._pointerEvents=new Map}reset(){super.reset();const t=this.state;t._touchIds=[],t.canceled=!1,t.cancel=this.cancel.bind(this),t.turns=0}computeOffset(){const{type:t,movement:r,lastOffset:s}=this.state;t==="wheel"?this.state.offset=Ee.add(r,s):this.state.offset=[(1+r[0])*s[0],r[1]+s[1]]}computeMovement(){const{offset:t,lastOffset:r}=this.state;this.state.movement=[t[0]/r[0],t[1]-r[1]]}axisIntent(){const t=this.state,[r,s]=t._movement;if(!t.axis){const c=Math.abs(r)*ub-Math.abs(s);c<0?t.axis="angle":c>0&&(t.axis="scale")}}restrictToAxis(t){this.config.lockDirection&&(this.state.axis==="scale"?t[1]=0:this.state.axis==="angle"&&(t[0]=0))}cancel(){const t=this.state;t.canceled||setTimeout(()=>{t.canceled=!0,t._active=!1,this.compute(),this.emit()},0)}touchStart(t){this.ctrl.setEventIds(t);const r=this.state,s=this.ctrl.touchIds;if(r._active&&r._touchIds.every(d=>s.has(d))||s.size<2)return;this.start(t),r._touchIds=Array.from(s).slice(0,2);const c=Cf(t,r._touchIds);c&&this.pinchStart(t,c)}pointerStart(t){if(t.buttons!=null&&t.buttons%2!==1)return;this.ctrl.setEventIds(t),t.target.setPointerCapture(t.pointerId);const r=this.state,s=r._pointerEvents,c=this.ctrl.pointerIds;if(r._active&&Array.from(s.keys()).every(f=>c.has(f))||(s.size<2&&s.set(t.pointerId,t),r._pointerEvents.size<2))return;this.start(t);const d=ou(...Array.from(s.values()));d&&this.pinchStart(t,d)}pinchStart(t,r){const s=this.state;s.origin=r.origin,this.computeValues([r.distance,r.angle]),this.computeInitial(),this.compute(t),this.emit()}touchMove(t){if(!this.state._active)return;const r=Cf(t,this.state._touchIds);r&&this.pinchMove(t,r)}pointerMove(t){const r=this.state._pointerEvents;if(r.has(t.pointerId)&&r.set(t.pointerId,t),!this.state._active)return;const s=ou(...Array.from(r.values()));s&&this.pinchMove(t,s)}pinchMove(t,r){const s=this.state,c=s._values[1],d=r.angle-c;let f=0;Math.abs(d)>270&&(f+=Math.sign(d)),this.computeValues([r.distance,r.angle-360*f]),s.origin=r.origin,s.turns=f,s._movement=[s._values[0]/s._initial[0]-1,s._values[1]-s._initial[1]],this.compute(t),this.emit()}touchEnd(t){this.ctrl.setEventIds(t),this.state._active&&this.state._touchIds.some(r=>!this.ctrl.touchIds.has(r))&&(this.state._active=!1,this.compute(t),this.emit())}pointerEnd(t){const r=this.state;this.ctrl.setEventIds(t);try{t.target.releasePointerCapture(t.pointerId)}catch{}r._pointerEvents.has(t.pointerId)&&r._pointerEvents.delete(t.pointerId),r._active&&r._pointerEvents.size<2&&(r._active=!1,this.compute(t),this.emit())}gestureStart(t){t.cancelable&&t.preventDefault();const r=this.state;r._active||(this.start(t),this.computeValues([t.scale,t.rotation]),r.origin=[t.clientX,t.clientY],this.compute(t),this.emit())}gestureMove(t){if(t.cancelable&&t.preventDefault(),!this.state._active)return;const r=this.state;this.computeValues([t.scale,t.rotation]),r.origin=[t.clientX,t.clientY];const s=r._movement;r._movement=[t.scale-1,t.rotation],r._delta=Ee.sub(r._movement,s),this.compute(t),this.emit()}gestureEnd(t){this.state._active&&(this.state._active=!1,this.compute(t),this.emit())}wheel(t){const r=this.config.modifierKey;r&&(Array.isArray(r)?!r.find(s=>t[s]):!t[r])||(this.state._active?this.wheelChange(t):this.wheelStart(t),this.timeoutStore.add("wheelEnd",this.wheelEnd.bind(this)))}wheelStart(t){this.start(t),this.wheelChange(t)}wheelChange(t){"uv"in t||t.cancelable&&t.preventDefault();const s=this.state;s._delta=[-rz(t)[1]/cb*s.offset[0],0],Ee.addTo(s._movement,s._delta),uz(s),this.state.origin=[t.clientX,t.clientY],this.compute(t),this.emit()}wheelEnd(){this.state._active&&(this.state._active=!1,this.compute(),this.emit())}bind(t){const r=this.config.device;r&&(t(r,"start",this[r+"Start"].bind(this)),t(r,"change",this[r+"Move"].bind(this)),t(r,"end",this[r+"End"].bind(this)),t(r,"cancel",this[r+"End"].bind(this)),t("lostPointerCapture","",this[r+"End"].bind(this))),this.config.pinchOnWheel&&t("wheel","",this.wheel.bind(this),{passive:!1})}}const mb=Ge(Ge({},sz),{},{device(a,t,{shared:r,pointer:{touch:s=!1}={}}){if(r.target&&!bn.touch&&bn.gesture)return"gesture";if(bn.touch&&s)return"touch";if(bn.touchscreen){if(bn.pointer)return"pointer";if(bn.touch)return"touch"}},bounds(a,t,{scaleBounds:r={},angleBounds:s={}}){const c=f=>{const y=Ef(yo(r,f),{min:-1/0,max:1/0});return[y.min,y.max]},d=f=>{const y=Ef(yo(s,f),{min:-1/0,max:1/0});return[y.min,y.max]};return typeof r!="function"&&typeof s!="function"?[c(),d()]:f=>[c(f),d(f)]},threshold(a,t,r){return this.lockDirection=r.axis==="lock",Ee.toVector(a,this.lockDirection?[.1,3]:0)},modifierKey(a){return a===void 0?"ctrlKey":a},pinchOnWheel(a=!0){return a}});class fb extends Ia{constructor(...t){super(...t),Me(this,"ingKey","moving")}move(t){this.config.mouseOnly&&t.pointerType!=="mouse"||(this.state._active?this.moveChange(t):this.moveStart(t),this.timeoutStore.add("moveEnd",this.moveEnd.bind(this)))}moveStart(t){this.start(t),this.computeValues(Mt(t)),this.compute(t),this.computeInitial(),this.emit()}moveChange(t){if(!this.state._active)return;const r=Mt(t),s=this.state;s._delta=Ee.sub(r,s._values),Ee.addTo(s._movement,s._delta),this.computeValues(r),this.compute(t),this.emit()}moveEnd(t){this.state._active&&(this.state._active=!1,this.compute(t),this.emit())}bind(t){t("pointer","change",this.move.bind(this)),t("pointer","leave",this.moveEnd.bind(this))}}const yb=Ge(Ge({},it),{},{mouseOnly:(a=!0)=>a});class zb extends Ia{constructor(...t){super(...t),Me(this,"ingKey","scrolling")}scroll(t){this.state._active||this.start(t),this.scrollChange(t),this.timeoutStore.add("scrollEnd",this.scrollEnd.bind(this))}scrollChange(t){t.cancelable&&t.preventDefault();const r=this.state,s=Wv(t);r._delta=Ee.sub(s,r._values),Ee.addTo(r._movement,r._delta),this.computeValues(s),this.compute(t),this.emit()}scrollEnd(){this.state._active&&(this.state._active=!1,this.compute(),this.emit())}bind(t){t("scroll","",this.scroll.bind(this))}}const wb=it;class pb extends Ia{constructor(...t){super(...t),Me(this,"ingKey","wheeling")}wheel(t){this.state._active||this.start(t),this.wheelChange(t),this.timeoutStore.add("wheelEnd",this.wheelEnd.bind(this))}wheelChange(t){const r=this.state;r._delta=rz(t),Ee.addTo(r._movement,r._delta),uz(r),this.compute(t),this.emit()}wheelEnd(){this.state._active&&(this.state._active=!1,this.compute(),this.emit())}bind(t){t("wheel","",this.wheel.bind(this))}}const hb=it;class gb extends Ia{constructor(...t){super(...t),Me(this,"ingKey","hovering")}enter(t){this.config.mouseOnly&&t.pointerType!=="mouse"||(this.start(t),this.computeValues(Mt(t)),this.compute(t),this.emit())}leave(t){if(this.config.mouseOnly&&t.pointerType!=="mouse")return;const r=this.state;if(!r._active)return;r._active=!1;const s=Mt(t);r._movement=r._delta=Ee.sub(s,r._values),this.computeValues(s),this.compute(t),r.delta=r.movement,this.emit()}bind(t){t("pointer","enter",this.enter.bind(this)),t("pointer","leave",this.leave.bind(this))}}const jb=Ge(Ge({},it),{},{mouseOnly:(a=!0)=>a}),Pu=new Map,su=new Map;function kb(a){Pu.set(a.key,a.engine),su.set(a.key,a.resolver)}const vb={key:"drag",engine:Yv,resolver:lb},bb={key:"hover",engine:gb,resolver:jb},Cb={key:"move",engine:fb,resolver:yb},Db={key:"pinch",engine:db,resolver:mb},Ab={key:"scroll",engine:zb,resolver:wb},Eb={key:"wheel",engine:pb,resolver:hb};function Pb(a,t){if(a==null)return{};var r={},s=Object.keys(a),c,d;for(d=0;d<s.length;d++)c=s[d],!(t.indexOf(c)>=0)&&(r[c]=a[c]);return r}function Tb(a,t){if(a==null)return{};var r=Pb(a,t),s,c;if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);for(c=0;c<d.length;c++)s=d[c],!(t.indexOf(s)>=0)&&Object.prototype.propertyIsEnumerable.call(a,s)&&(r[s]=a[s])}return r}const Sb={target(a){if(a)return()=>"current"in a?a.current:a},enabled(a=!0){return a},window(a=bn.isBrowser?window:void 0){return a},eventOptions({passive:a=!0,capture:t=!1}={}){return{passive:a,capture:t}},transform(a){return a}},xb=["target","eventOptions","window","enabled","transform"];function so(a={},t){const r={};for(const[s,c]of Object.entries(t))switch(typeof c){case"function":r[s]=c.call(r,a[s],s,a);break;case"object":r[s]=so(a[s],c);break;case"boolean":c&&(r[s]=a[s]);break}return r}function Gb(a,t,r={}){const s=a,{target:c,eventOptions:d,window:f,enabled:y,transform:w}=s,j=Tb(s,xb);if(r.shared=so({target:c,eventOptions:d,window:f,enabled:y,transform:w},Sb),t){const v=su.get(t);r[t]=so(Ge({shared:r.shared},j),v)}else for(const v in j){const D=su.get(v);D&&(r[v]=so(Ge({shared:r.shared},j[v]),D))}return r}class cz{constructor(t,r){Me(this,"_listeners",new Set),this._ctrl=t,this._gestureKey=r}add(t,r,s,c,d){const f=this._listeners,y=_v(r,s),w=this._gestureKey?this._ctrl.config[this._gestureKey].eventOptions:{},j=Ge(Ge({},w),d);t.addEventListener(y,c,j);const v=()=>{t.removeEventListener(y,c,j),f.delete(v)};return f.add(v),v}clean(){this._listeners.forEach(t=>t()),this._listeners.clear()}}class Nb{constructor(){Me(this,"_timeouts",new Map)}add(t,r,s=140,...c){this.remove(t),this._timeouts.set(t,window.setTimeout(r,s,...c))}remove(t){const r=this._timeouts.get(t);r&&window.clearTimeout(r)}clean(){this._timeouts.forEach(t=>{window.clearTimeout(t)}),this._timeouts.clear()}}class Bb{constructor(t){Me(this,"gestures",new Set),Me(this,"_targetEventStore",new cz(this)),Me(this,"gestureEventStores",{}),Me(this,"gestureTimeoutStores",{}),Me(this,"handlers",{}),Me(this,"config",{}),Me(this,"pointerIds",new Set),Me(this,"touchIds",new Set),Me(this,"state",{shared:{shiftKey:!1,metaKey:!1,ctrlKey:!1,altKey:!1}}),Rb(this,t)}setEventIds(t){if(Co(t))return this.touchIds=new Set(Jv(t)),this.touchIds;if("pointerId"in t)return t.type==="pointerup"||t.type==="pointercancel"?this.pointerIds.delete(t.pointerId):t.type==="pointerdown"&&this.pointerIds.add(t.pointerId),this.pointerIds}applyHandlers(t,r){this.handlers=t,this.nativeHandlers=r}applyConfig(t,r){this.config=Gb(t,r,this.config)}clean(){this._targetEventStore.clean();for(const t of this.gestures)this.gestureEventStores[t].clean(),this.gestureTimeoutStores[t].clean()}effect(){return this.config.shared.target&&this.bind(),()=>this._targetEventStore.clean()}bind(...t){const r=this.config.shared,s={};let c;if(!(r.target&&(c=r.target(),!c))){if(r.enabled){for(const f of this.gestures){const y=this.config[f],w=xf(s,y.eventOptions,!!c);if(y.enabled){const j=Pu.get(f);new j(this,t,f).bind(w)}}const d=xf(s,r.eventOptions,!!c);for(const f in this.nativeHandlers)d(f,"",y=>this.nativeHandlers[f](Ge(Ge({},this.state.shared),{},{event:y,args:t})),void 0,!0)}for(const d in s)s[d]=Kv(...s[d]);if(!c)return s;for(const d in s){const{device:f,capture:y,passive:w}=Fv(d);this._targetEventStore.add(c,f,"",s[d],{capture:y,passive:w})}}}}function Gt(a,t){a.gestures.add(t),a.gestureEventStores[t]=new cz(a,t),a.gestureTimeoutStores[t]=new Nb}function Rb(a,t){t.drag&&Gt(a,"drag"),t.wheel&&Gt(a,"wheel"),t.scroll&&Gt(a,"scroll"),t.move&&Gt(a,"move"),t.pinch&&Gt(a,"pinch"),t.hover&&Gt(a,"hover")}const xf=(a,t,r)=>(s,c,d,f={},y=!1)=>{var w,j;const v=(w=f.capture)!==null&&w!==void 0?w:t.capture,D=(j=f.passive)!==null&&j!==void 0?j:t.passive;let A=y?s:Rv(s,c,v);r&&D&&(A+="Passive"),a[A]=a[A]||[],a[A].push(d)},Ob=/^on(Drag|Wheel|Scroll|Move|Pinch|Hover)/;function Fb(a){const t={},r={},s=new Set;for(let c in a)Ob.test(c)?(s.add(RegExp.lastMatch),r[c]=a[c]):t[c]=a[c];return[r,t,s]}function Nt(a,t,r,s,c,d){if(!a.has(r)||!Pu.has(s))return;const f=r+"Start",y=r+"End",w=j=>{let v;return j.first&&f in t&&t[f](j),r in t&&(v=t[r](j)),j.last&&y in t&&t[y](j),v};c[s]=w,d[s]=d[s]||{}}function _b(a,t){const[r,s,c]=Fb(a),d={};return Nt(c,r,"onDrag","drag",d,t),Nt(c,r,"onWheel","wheel",d,t),Nt(c,r,"onScroll","scroll",d,t),Nt(c,r,"onPinch","pinch",d,t),Nt(c,r,"onMove","move",d,t),Nt(c,r,"onHover","hover",d,t),{handlers:d,config:t,nativeHandlers:s}}function Mb(a,t={},r,s){const c=zn.useMemo(()=>new Bb(a),[]);if(c.applyHandlers(a,s),c.applyConfig(t,r),zn.useEffect(c.effect.bind(c)),zn.useEffect(()=>c.clean.bind(c),[]),t.target===void 0)return c.bind.bind(c)}function Ib(a){return a.forEach(kb),function(r,s){const{handlers:c,nativeHandlers:d,config:f}=_b(r,s||{});return Mb(c,f,void 0,d)}}function Jb(a,t){return Ib([vb,Db,Ab,Eb,Cb,bb])(a,t||{})}const Wb=({parsedSongs:a,minZoom:t,maxZoom:r,defaultZoom:s,gesturesTarget:c})=>{const[d,f]=Vi("chosenSong",1),[y,w]=Vi("starredSongs",[]),[j,v]=Vi("onlyStarred",!1),[D,A]=Vi("selectedSong",null),[O,L]=Vi("zoomLevel",s),[F,I]=P.useState(null),[J,X]=P.useState(null),te=y.length;P.useEffect(()=>{j&&(y.length?y.find(ee=>ee===d)||f(y[0]):v(!1))},[j,v,d,f,y]);const ae=ee=>{const ge=d===ee,de=y.indexOf(ee),Be=de+1,je=!!Be,ze=D===ee;return{chosen:ge,starredNumber:Be,starred:je,toggleStarred:()=>{A(je?G=>G===ee?y.length<=1?null:y.length>de+1?y[de+1]:y[de-1]:G:ee),w(G=>je?G.filter($=>$!==ee):[...G,ee])},selected:ze,toggleSelected:()=>A(ze?null:ee),moveUp:de<1?void 0:()=>w(G=>{const $=G.filter(_=>_!==ee);return $.splice(de-1,0,ee),$}),moveDown:de>y.length-2?void 0:()=>w(G=>{const $=G.filter(_=>_!==ee);return $.splice(de+1,0,ee),$})}},U=ee=>({...ee,...ae(ee.number)}),ce=(j?y.flatMap(ee=>{const ge=a.find(de=>de.number===ee);return ge?[ge]:[]}):a).map(U),Pe=ee=>{const de=ce.findIndex(je=>je.chosen)-ee,Be=de>=ce.length?0:de<0?ce.length-1:de;f(ce[Be].number)},Ye=ee=>{I(ee),X(O)},Ue=ee=>{if(F===null||J===null)return;const ge=ee/F,de=Math.floor(Math.log10(ge)*10),Be=Math.min(Math.max(t,J+de),r);L(Be)};return Jb({onDrag:({swipe:[ee]})=>{ee!==0&&Pe(ee)},onPinch:({first:ee,da:[ge]})=>{ee&&Ye(ge),Ue(ge)}},{target:c,drag:{swipe:{distance:30,velocity:.1}}}),{songs:ce,setChosenSong:f,starredCount:te,onlyStarred:j,toggleOnlyStarred:()=>v(ee=>!ee),zoomLevel:O}},Lb=({parsedSongs:a})=>{const t=P.useRef(null),{songs:r,setChosenSong:s,starredCount:c,onlyStarred:d,toggleOnlyStarred:f,zoomLevel:y}=Wb({parsedSongs:a,minZoom:1,maxZoom:20,defaultZoom:5,gesturesTarget:t}),[w,j]=Vi("menuShown",!1),[v,D]=Vi("chordsShown",!0),A=()=>j(!0),O=()=>j(!1),L=()=>D(!0),F=()=>D(!1),I=X=>{s(X),O()},J=r.find(X=>X.chosen);return x.jsxs(x.Fragment,{children:[!w&&x.jsx(Av,{onlyStarred:d,chordsShown:v,onClickMenu:A,onClickGuitar:v?F:L}),x.jsx("div",{ref:t,className:`container-lg pt-1 min-vh-100 bg-white songbook zoom-level-${y}`,children:!!J&&x.jsx(fp,{song:J,starredCount:c,chordsShown:v})}),x.jsx(Dv,{songs:r,chooseSong:I,starredCount:c,onlyStarred:d,toggleOnlyStarred:f,show:w,onClose:O})]})},Hb=`
{title:  Panie, zmiłuj się}
{number: 1}
 [Cadd9] [G] [e7] [D]
1. Panie, który za nas umarłeś, zmiłuj się! [Cadd9] [G] [e7] [D]
Panie, który życie oddałeś, zmiłuj się! [Cadd9] [G] [e7] [D]
Niech Twe przebaczenie [Cadd9] [G]
Dusze nasze odrodzi, [a7] [G]
Niech Twe przebaczenie [Cadd9] [G]
Czystym dzieckiem uczyni nas. [a7] [h7] [Cadd9] [D]
 [C] [G]

2. Chryste, który byłeś posłuszny, Zmiłuj się!
Który uczniom nogi obmyłeś, Zmiłuj się!
Niech Twe przebaczenie moc pokory objawi,
Niech Twe przebaczenie ku braciom prowadzi nas.

3. Panie, Synu Boga Żywego, zmiłuj się!
Panie dawco życia, nadziei, zmiłuj się!
Niech Twe przebaczenie drogi nasze uprości,
Niech Twe przebaczenie miłość wielką rozbudzi w nas.
---
{title:  Gloria}
{number: 2}
Ref. Gloria in excelsis Deo, Gloria, Gloria! [A] [cis] [D] [E] [E7]
Chwalimy Cię, błogosławimy Cię [A]
Wielbimy Cię, wysławiamy Cię, [cis]
Dzięki Ci składamy [D]
Bo wielka jest chwała Twoja. [E] [E7]
Panie Boże, Królu Nieba, [A]
Boże Ojcze wszechmogący, [cis]
Panie, Synu Jednorodzony [D]
Jezu Chryste, Jezu Chryste, Jezu Chryste! [D] [E] [D7+] [E7]

Ref. Gloria in excelsis Deo, Gloria, Gloria!

Panie Boże, Baranku Boży Synu Ojca,
Który gładzisz grzechy świata, zmiłuj się nad nami
Który gładzisz grzechy świata, przyjm błaganie nasze,
Który siedzisz po prawicy Ojca, zmiłuj się nad nami.
Albowiem tylko Tyś jest Święty, tylko tyś jest Panem,
Tylko tyś najwyższy, Jezu Chryste, z Duchem Świętym,
W chwale Boga Ojca.

Ref. Gloria in excelsis Deo, Gloria, Gloria!
---
{title:  Chwała na wysokości}
{number: 3}
Ref. Chwała na wysokości! [A] [D] [E]
Chwała Jedynemu Bogu! [A] [D] [E]
Chwała na wysokości! [A] [D] [E]
Chwała, a ludziom pokój! [A] [D] [E]

1. Chwalimy Cię, błogosławimy Cię [D] [E] [A]
Wielbimy Cię, wysławiamy [D] [E] [A]
Dzięki Ci składamy [D] [E] [fis]
Bo wielka jest chwała Twoja! [h] [E]
Panie Boże, Królu nieba [D] [E] [A]
Boże Ojcze Wszechmogący [D] [E] [A]
Panie, Synu Jednorodzony [D] [E] [fis]
Jezu Chryste. [h] [E]

Ref. Chwała na wysokości!...

2. Baranku Boży, Synu Ojca [D] [E] [A]
Który gładzisz grzechy świata [D] [E] [A]
Zmiłuj się nad nami, zmiłuj się nad nami [D] [E] [fis] [h] [E]
Który gładzisz grzechy świata [D] [E] [A]
Przyjm błaganie nasze [D] [E] [A]
Który siedzisz po prawicy Ojca [D] [E] [fis]
Zmiłuj się nad nami. [h] [E]

Ref. Chwała na wysokości!...

3. Albowiem tylko Tyś jest święty [D] [E] [A]
Tylko Tyś jest Panem [D] [E] [A]
Tylko Tyś najwyższy, Jezu Chryste [D] [E] [fis]
Z Duchem Świętym, w chwale Boga Ojca. [h] [E] [h] [E]

Ref. Chwała na wysokości!...
---
{title:  Alleluja}
{number: 4}
Alleluja, alleluja, alleluja, alleluuuuja! |2x [A] [D] [A] [D] [E] [A]
(werset z Ewangelii) [a] [e]
(werset z Ewangelii) [G] [e] [F] [G]
Alleluja, alleluja, alleluja, alleluuuuja!   |2x
---
{title:  O usłysz mój głos - modlitwa wiernych}
{number: 5}
                            [G7]
O usłysz mój głos!          [c]
O usłysz mój głos!          [B]
Przyjdź i wysłuchaj mnie.   [As] [G7] [c]
---
{title:  Święty, święty}
{number: 6}
 [A9] [E7sus/A] [A9] [E/A]
Święty, święty Pan, Bóg zastępów
Pełne jest niebo i ziemia Twej chwały |2x
Hosanna, hosanna, hosanna na wysokości! [A] [fis] [cis] [Dsus2] [h7] [E]

Błogosławiony, który idzie w imię Twoje, Panie
Hosanna, hosanna, hosanna na wysokości |2x
---
{title:  Ojcze nasz}
{number: 7}
Ojcze nasz, który jesteś w niebie [B] [F] [g7] [d]
Święć się imię Twoje, [Es] [B]
przyjdź królestwo Twoje. [c] [F]
Bądź wola Twoja, [B] [F]
jako w niebie tak i na ziemi. [g7] [B]
Chleba naszego powszedniego [Es] [B]
daj nam dziś. [c] [F]
I odpuść nam nasze winy, jako i my [Es] [D7] [g7] [Es]
odpuszczamy naszym winowajcom. [B] [F] [c] [F]
I nie wódź nas na pokuszenie, ale nas zbaw. [Es] [D7] [g7] [Es]
Ale zbaw nas ode złego, Ojcze nasz [B] [F] [c] [F] [B] [F] [B]
---
{title:  Baranku Boży}
{number: 8}
Baranku Boży [H] [E]
(Baranku Boży) [H] [E]
Który gładzisz grzechy świata [gis] [Fis]
gładzisz grzechy świata [gis] [Fis]
Zmiłuj się nad nami [E] [Fis] [gis]
Zmiłuj się nad nami [E] [Fis] [H] [E] [H] [E]

Baranku Boży [H] [E]
Baranku Boży [H] [E]
Który gładzisz grzechy świata [gis] [Fis]
gładzisz grzechy świata [gis] [Fis]
Obdarz nas pokojem [E] [Fis] [gis]
Obdarz nas pokojem [E] [Fis] [H]
Obdarz nas pokojem [E] [Fis] [gis]
Obdarz nas pokojem [E] [Fis] [H] [E] [H] [E]
---
{title:  Tryumfy Króla Niebieskiego}
{number: 9}
1. Tryumfy Króla Niebieskiego [G] [C] [G] [G] [D] [G]
zstąpiły z nieba wysokiego /x2 [G] [C] [G] [G] [D] [G]

Pobudziły pasterzy, pobudziły pasterzy [G]
śpiewaniem! [D]
Pobudziły pasterzy, dobytku swego stróżów, śpiewaniem!
Pobudziły, pobudziły, pobudziły pasterzy śpiewaniem!
Pobudziły pasterzy, dobytku swego stróżów, śpiewaniem!

Solo [G] [C] [G] [D]
 [G] [C] [G] [D] [G] [C]
2. Chwała bądź Bogu w wysokości a ludziom pokój na niskości.

Ref. Narodził się nam, narodził się nam Zbawiciel!
Narodził się nam, narodził się nam Zbawiciel!
Niesłychana to nowina, Panna porodziła syna, Jezusa!
Niesłychana to nowina, Panna porodziła syna, Jezusa!

3. Od Boga światłem oświeceni, pokornie przed nim uniżeni.

Ref. Aniołowie się radują, aniołowie się radują, radują!
Jezusowi śpiewają, Jezusowi śpiewają, śpiewają!
Aniołowie się radują, aniołowie się radują, radują!
Jezusowi śpiewają, Jezusowi śpiewają, śpiewają!
---
{title:  Gdy śliczna Panna}
{number: 10}
1. Gdy śliczna Panna        [D] [A] [h]
Syna kołysała               [e] [G] [A7] [D]
Z wielkim weselem           [D] [A] [h]
tak Jemu śpiewała:          [e] [G] [A7] [D]

Ref. Li, li, li, li, laj,   [h] [e] [G]
moje Dzieciąteczko          [A] [G] [D]
Li, li, li, li, laj,        [h] [G] [g]
śliczne Paniąteczko         [D] [e] [A] [D]

2. Wszystko stworzenie śpiewaj Panu swemu
Pomóż radości wielkiej sercu memu

Ref. Li, li, li, li, laj, wielki Królewiczu
Li, li, li, li, laj, niebieski Dziedzicu

3. Sypcie się z nieba śliczni aniołowie
Śpiewajcie Panu niebiescy duchowie

Li, li, li, li, laj, mój wonny kwiateczku
Li, li, li, li, laj, w ubogim żłóbeczku
---
{title:  Lulajże, Jezuniu}
{number: 11}
1. Lulajże Jezuniu, moja perełko, [C] [d] [G] [C]
Lulaj ulubione me Pieścidełko. [a] [d] [G] [C]

Ref. Lulajże, Jezuniu, lulajże lulaj! [C] [F] [A7] [d] [G] [C]
A Ty Go, Matulu w płaczu utulaj. [a] [d] [G] [C]

2. Zamknijże znużone płaczem powieczki,
Utulże zemdlone łkaniem usteczki.

3. Lulajże, piękniuchny nasz Aniołeczku.
Lulajże wdzięczniuchny świata Kwiateczku.

4. Lulajże, Różyczko najozdobniejsza,
Lulajże, Lilijko najprzyjemniejsza.
---
{title:  Z Narodzenia Pana}
{number: 12}
1. Z Narodzenia Pana dzień dziś wesoły. [D] [G] [A] [D]
Wyśpiewują chwałę Bogu żywioły. [D] [G] [A] [D]
Radość ludzi wszędzie słynie. [D/A] [A]
Anioł budzi przy dolinie [D/A] [A]
pasterzów, co paśli pod borem woły. [D] [G] [A] [D]

2. Wypada wśród nocy ogień z obłoku,
dumają pasterze w takim widoku.
Każdy pyta: "Co się dzieje? Czy nie świta? Czy nie dnieje?
Skąd ta łuna bije, tak miła oku!"

3. Ale gdy anielskie głosy słyszeli,
zaraz do Betlejem prosto bieżeli
tam witali w żłobie Pana, poklękali na kolana
i oddali dary, co z sobą wzięli.

4. Odchodzą z Betlejem pełni wesela,
że już Bóg wysłuchał próśb Izraela
gdy tej nocy to widzieli, co prorocy widzieć chcieli,
w ciele ludzkim Boga i Zbawiciela.

5. I my z pastuszkami dziś się radujmy,
chwałę z Aniołami wraz wyśpiewujmy,
bo ten Jezus z nieba dany, weźmie nas między niebiany,
tylko Go z całego serca miłujmy!
---
{title:  Przybieżeli do Betlejem}
{number: 13}
 [C] [As] [B] [C]
1. Przybieżeli do Betlejem pasterze, [C] [F] [C]
Grając skocznie Dzieciąteczku na lirze. [C] [F] [C]

Ref. Chwała na wysokości, [C] [F]
chwała na wysokości, [d7] [G]
A pokój na ziemi! [C] [F] [C] [G] [C]

2. Oddawali swe ukłony w pokorze
Tobie z serca ochotnego, o Boże!

3. Anioł Pański sam ogłosił te dziwy,
Których oni nie słyszeli, jak żywi.

4. Dziwili się napowietrznej muzyce
i myśleli, co to będzie za Dziecię?
---
{title:  Dzisiaj w Betlejem}
{number: 14}
1. Dzisiaj w Betlejem, dzisiaj w Betlejem wesoła nowina [D] [A]
Że Panna czysta, że Panna czysta porodziła Syna [D] [A]

Ref. Chrystus się rodzi, nas oswobodzi [A] [D]
Anieli grają, króle witają [A] [D]
Pasterze śpiewają, bydlęta klękają [D]
Cuda, cuda ogłaszają [D] [G] [D] [A] [D]

2. Maryja Panna, Maryja Panna Dzieciątko piastuje
I Józef święty i Józef święty Ono pielęgnuje

3. Choć w stajeneczce, choć w stajeneczce Panna Syna rodzi
Przecież On wkrótce, przecież On wkrótce ludzi oswobodzi

4. I Trzej królowie, i trzej królowie od wschodu przybyli
I dary Panu, i dary Panu kosztowne złożyli
---
{title:  Nie płaczże, mój Syneczku}
{number: 15}
 [h] [D/A] [G7] [e6] [Fis4-3]
Nie płaczże, mój Syneczku, nie płacz, [h7/9] [d6] [gis7/5-] [gis0]
Woda będzie w balijce ciepła, [e6] [Fis7]
Kolebeczki Bóg Ci poskąpił, [h7] [A6/9]
Za to Matka ukołysa, ukąpie. [G7+] [e6]
Matka ukołysa, ukąpie. [e] [fis] [h]

Wody trochę zaczerpa w dłonie, [D] [e7]
Włoski zleje, namaści skronie, [D] [e7]
Ale zamknij oczęta, Synu, [G] [Fis]
Bo kropelki po czole spłyną. [e] [Fis]
Śpiewa Panna i woda śpiewa, [D] [A/Cis]
Bierze dziecię, tuli, oblewa. [G] [D] [A]

Panna schyla zdziwione lice: [e7] [h]
Sama woda pluska w balijce, [D] [A]
Sama woda do rączek bieży, [e7] [h]
Sama woda u nóżek leży; [G] [D] [A] [D]

Kruchy boczek tylko opłynie, [D]
Nosi woda, kąpie woda Dziecinę. [D] [h] [G] [A] [D]

Milknie woda i śpiewa Panna: [G] [A] [D]
Lichać, cienkać koszulka lniana, [G] [A] [h]

Ale nie płacz, mój Syneczku, nie płacz [h7/9] [d6] [gis7/5-] [gis0]
Bo u Ojca jest dużo ciepła, [e6] [Fis7]

Wyprosimy sobie giezłeczko [h7] [A6/9]
Lulaj, Synku, lulaj, Syneczku. [G7+] [e6]
Lulaj, Synku, lulaj, Syneczku [e] [fis] [h]
---
{title:  Cicha noc}
{number: 16}
1. Cicha noc, święta noc,   [G]
Pokój niesie ludziom wszem  [D] [D7] [G] [G7]
A u żłobka Matka Święta     [C] [G]
Czuwa sama uśmiechnięta     [C] [G]
Nad Dzieciątka              [a] [D] [dis0]
Snem...                     [e] [cis7/5-]
Nad Dzieciątka snem         [G] [D] [G]

2. Cicha noc, święta noc,
Pastuszkowie od swych trzód
Biegną wielce zadziwieni
Za anielskim głosem pieni
Gdzie się spełnił cud...
Gdzie się spełnił cud.

3. Cicha noc, święta noc,
Narodzony Boży Syn
Pan wielkiego majestatu
Niesie dziś całemu światu
Odkupienie win...
Odkupienie win.
---
{title:  Jezusa narodzonego}
{number: 17}
1. Jezusa narodzonego wszyscy witajmy, [D] [G] [D] [A] [A7] [D]
Jemu po kolędzie dary wzajem oddajmy. [D] [G] [D] [A] [A7] [D]

Ref. Oddajmy wesoło, [D] [G]
skłaniajmy swe czoło, [e] [A]
Skłaniajmy swe czoło, [h] [G]
Panu naszemu. [A7] [D]

2. Oddajmy za złoto wiarę, czyniąc wyznanie,
Że to Bóg i Człowiek prawy leży na sianie.

3. Oddajmy też za kadzidło Panu nadzieję,
Że Go będziem widzieć w niebie, mówiąc to śmiele.

4. Oddajmy za mirrę miłość na dowód tego,
Że Go nad wszystko kochamy, z serca całego.
---
{title:  Pastuszkowie bracia mili}
{number: 18}
1. Pastuszkowie bracia mili [F]
gdzieście po ten czas chodzil [F]
...Poszliśmy hen ku dolinie [F] [B]
tam gdzie rwący potok płynie, [F] [C]
paść owieczki. /x2 [F] [C] [F]

2. Anioł do was woła z nieba do Betlejem iść wam trzeba.
...Ledwośmy pozasypiali jak tu łuna w oczy pali, co się dzieje? /x2

Solo akordeon x2 [B] [C] [F] [d7] [B] [C] [F]

3. Wśród stajenki Bóg się rodzi co świat z grzechów oswobodzi.
...Więc zaprowadź nas do Niego zagramy Mu krzesanego
na osłodę. /x2

4. A co żeście mu przynieśli [G]
kiedyście do szopy weszli. [G]
...Dwa króliczki i wróbelka [G] [C]
co rozkosznie będzie ćwierkał [G] [D]
Mu nad żłobkiem./x2 [G] [D] [G]

5. Pójdźmy wszyscy w Imię Pańskie otworzą nam wrota rajskie
...przez narodzenie Jezusa będzie w niebie nasza dusza,
królowała /x2

Solo akordeon x2 [C] [D] [G] [e7] [C] [D] [G]
---
{title:  Gdy się Chrystus rodzi}
{number: 19}
1. Gdy się Chrystus rodzi, [C] [F] [C]
i na świat przychodzi. [a] [d] [G7] [C]
Ciemna noc w jasności [C] [F] [C]
promienistej brodzi [a] [d] [G7] [C]

Ref. Aniołowie się radują, [G] [C]
Pod niebiosy wyśpiewują: [G] [C]
Gloria, gloria, gloria, [C] [F] [G] [d0]
in excelsis Deo! [a] [e] [F] [f] [D9] [G] [C]

2. Mówią do pasterzy, którzy trzód swych strzegli.
Aby do Betlejem, czem prędzej pobiegli.

Ref. Bo się narodził Zbawiciel, wszego świata Odkupiciel,
Gloria, gloria, gloria, in excelsis Deo!

3. "O niebieskie Duchy i posłowie nieba.
Powiedzcież wyraźniej co nam czynić trzeba:

Ref. Bo my nic nie pojmujemy, Ledwo od strachu żyjemy". Gloria, gloria, gloria, in excelsis Deo!

4. "Idźcież do Betlejem, gdzie Dziecię zrodzone,
W pieluszki powite, w żłobie położone:

Ref. Oddajcie Mu pokłon boski, On osłodzi wasze troski".
Gloria, gloria, gloria, in excelsis Deo!
---
{title:  Pójdźmy wszyscy do stajenki}
{number: 20}
1. Pójdźmy wszyscy do stajenki,     [F]
Do Jezusa i Panienki!               [F]
Powitajmy Maleńkiego,               [g] [C7] [F] [d]
I Maryję Matkę Jego.                [C7] [F] [F7]
Powitajmy Maleńkiego,               [g] [C7] [A] [d]
I Maryję Matkę Jego.                [g] [C7] [F] [B] [F]
                                    [g] [C7] [F]
2. Witaj, Jezu ukochany, od Patriarchów czekany,
Od Proroków ogłoszony, od narodów upragniony.

3. Witaj, Dzieciąteczko w żłobie, wyznajemy Boga w Tobie,
Coś się narodził tej nocy, byś nas wyrwał z czarta mocy.

4. Witaj, Jezu nam zjawiony, witaj, dwakroć narodzony
Raz z Ojca przed wieków wiekiem, a teraz z Matki człowiekiem.
---
{title:  Ciemne niebo świat otula}
{number: 21}
 [D] [h] [G] [A]
1. Ciemne niebo świat otula, nad Betlejem gwiazda wschodzi,
Niosą dary Trzej Królowie, Jezus Chrystus się nam rodzi.
Stajnia nisko się pochyla, jakby chciała zgiąć kolana,
Oddać pokłon Maleńkiemu, uznać Boga w Nim i Pana

Ref: Gloria, gloria in excelsis Deo, zaśpiewali aniołowie,
Pokój ludziom dobrej woli, przyniósł Chrystus w Swej osobie.

2. Płacze w żłóbku Dzieciąteczko, Matka siankiem je otula,
Nie płacz Jezu malusieńki, lulaj mały lulaj, lulaj
Serce swoje niosę w darze, za Twą miłość, mały Panie,
Żeś narodził się w Betlejem, w starej szopie i na sianie.

Ref: Gloria, gloria …
---
{title:  Prawda jedyna}
{number: 22}
1. Prawda jedyna słowa Jezusa z Nazaretu, [D] [A] [fis] [cis]
że Swego Syna posłał z niebios Bóg na świat.
Aby niewinnie cierpiąc zmarł za nasze grzechy
i w pohańbieniu przyjął winy wszystkich nas.

Ref. Dzięki Ci, Boże mój, za ten krzyż, który Jezus
cierpiał za mnie, Jezus cierpiał za mnie.

2. Uwierz w Jezusa, przecież On za ciebie umarł
i z miłości do nas przyszedł z nieba na ten świat.
Błogosławiony ten, kto wierzy, choć nie widział
zaufaj dziś Bogu, a na wieki będziesz żył.
---
{title:  Drzewo krzyża surowe}
{number: 23}
1. Drzewo krzyża surowe,
Tyś Ciało Chrystusowe dźwigało.
Marii Panny lamenty
i bok święty rozcięty widziało.

2. Na Ciebie krew i woda
i łaska Chrystusowa spłynęły.
Na Tobie Kościół święty
i wiary fundamenty stanęły.

3. Potężnym majestatem
wysoko ponad światem górujesz.
Przemija postać świata,
a Ty po wszystkie lata królujesz.
---
{title:  Dzięki za Twój krzyż}
{number: 24}
Dzięki za Twój krzyż [A] [E] [fis] [A]
Dzięki za zwycięstwo Twe [D/Fis] [A] [E] [E7]
Niech Twa Krew oczyszcza mnie [A] [E] [fis] [A]
Dzięki za miłosierdzie Twe [D/Fis] [Esus] [E7]
---
{title:  Golgoto, Golgoto, Golgoto}
{number: 25}
1. Golgoto, Golgoto, Golgoto! [g] [c] [F] [B] [D7]
W tej ciszy przebywam wciąż rad, [g] [B]
W tej ciszy daleki jest świat. [Es] [B]
Ty koisz mój ból, usuwasz mój strach, [c] [g]
Gdy widzę Cię Zbawco przez łzy. [D] [D7]

Ref. To nie gwoździe Cię przybiły, [g]
lecz mój grzech [c]
To nie ludzie Cię skrzywdzili, [F]
lecz mój grzech [B] [D7]
To nie gwoździe Cię trzymały, [g]
lecz mój grzech [c]
Choć tak dawno to się stało, [g] [A] [D7]
widziałeś mnie. [g]

2. Golgoto, Golgoto, Golgoto!
Ja widzę Cię Jezu mój tam,
Jak wiele masz sińców i ran.
Miłości Twej moc, zawiodła Cię tam,
Uwolnić mnie z grzechów i win.

Ref. To nie gwoździe Cię przybiły...

3. Golgoto, Golgoto, Golgoto!
Wspominam tak często ten dzień,
Golgotę i słodki jej cień.
Przyszedłem pod Krzyż z ciężarem mych win,
Uwolnił mnie tam Boży Syn.

Ref. To nie gwoździe Cię przybiły…
---
{title:  Zbawienie przyszło przez krzyż}
{number: 26}
 [a] [a7] [d] [d7] [a] [E7] [a]
1. Zbawienie przyszło przez krzyż, [a] [a7]
Ogromna to tajemnica. [d] [a]
Każde cierpienie ma sens, [d] [G] [C]
Prowadzi do pełni życia. [H7] [E] [E7]

Ref.2x Jeżeli chcesz Mnie naśladować, [E] [E7] [a7]
To weź swój krzyż na każdy dzień [d] [d7] [E7]
I chodź ze Mną zbawiać świat [a] [a7] [d]
Kolejny już wiek. [E] [E7] [a]

2. Codzienność wiedzie przez Krzyż,
Większy im kochasz goręcej.
Nie musisz ginąć już dziś,
Lecz ukrzyżować swe serce.

Ref.2x Jeżeli chcesz Mnie naśladować...

3. Każde spojrzenie na krzyż [a] [a7]
Niech niepokojem zagości, [B] [a]
Bo wszystko w życiu to nic [d] [G] [C]
Wobec tak wielkiej miłości. [H7] [E] [E7]

Ref.2x Jeżeli chcesz Mnie naśladować...
---
{title:  Żydowski Król, Boży Syn}
{number: 27}
1. Ten którego pocałuję w twarz, [d] [C]
Ten będzie wasz, Tego wam wskażę. [B] [A7] [d]
Wy Go sądzić będziecie, nie ja. [d] [C]
Ja tylko powiem, tylko pokażę. [B] [A7] [d]

Ref. To będzie Jezus, Jezus, Jezus. [C] [d]
Żydowski Król, Boży Syn. [C] [d]

2. Poznaję Twoją twarz, tyś był razem z Nim.
Przyznaj, że Go znasz. Na co czekasz? Tyś jest Kefas.
NIE ZNAM TEGO CZŁOWIEKA!
Tyś uczniem Jego był, twoja mowa cię zdradza. Mów nie zwlekaj.
NIE ZNAM TEGO CZŁOWIEKA!

Ref. Słyszał to Jezus, Jezus, Jezus. Żydowski król, Boży Syn.

3. Nie znajduję w Nim żadnej winy, umywam obie ręce
Dla mnie ten człowiek niewinny, a zginie w okrutnej męce

Ref. To zginie Jezus, Jezus, Jezus. Żydowski król, Boży Syn.

4. Rozwścieczeni żołnierze, uzbrojeni siepacze.
Ogromne drzewo Krzyża, łzy od śmiechu i płaczu

Ref. I jeden Jezus, Jezus, Jezus. Żydowski król, Boży Syn.

5. Okrutnie grobowa cisza i nagle śmiertelny jęk.
To Jezus zawołał z krzyża, że wykonało się.

Umiera Jezus, Jezus, Jezus. Żydowski król, Boży Syn.
---
{title:  Bez wstążek lub balonów}
{number: 28}
1. Bez wstążek lub balonów [e]
Żadnych ozdób ani flag [C7+]
Bez trąbek i bez tłumów [a7] [e7]
Żadnych pieśni ani braw [fis7/5-] [H7]

Ref. Oto Król dziś się narodził [e] [a]
Tu na ziemię zszedł [D] [G]
Z nadzieją Nań czekano [a] [e]
Z wielką wiarą w sercach swych [fis7/5-] [H7]
Lecz On miał tylko stajnię małą [e] [a]
Bez pałacu, tronu, sług [D7] [G]
Przyszedł jako Dziecię małe [a] [e]
Chociaż wielkim Królem był... [C] [H7] [e]

2. Bez petard, strzałów armat, zwyczajna, cicha noc.
Bez kwiatów czy też fanfar, skryta w ciszy Boża moc.

Ref. Oto Król dziś się narodził…
---
{title:  Rozpięty na ramionach}
{number: 29}
Ref. Rozpięty na ramionach [a] [C] [G]
Jak sokół na niebie, [F] [C] [E7]
Chrystusie, Synu Boga, [a] [C] [G]
Spójrz, proszę, na ziemię. [F] [a] [E7]

1. Na ruchliwe ulice, zabieganych ludzi, [a] [F] [G] [C]
Gdy dzień się już kończy, a ranek się budzi. [F] [d] [C] [E7]
Uśmiechnij się przyjaźnie [a] [F]
Z wysokiego krzyża, do ciężko pracujących, [G] [C] [F] [d]
Cierpiących na pryczach. [C] [E7]

Ref.: Rozpięty…

2. Pociesz zrozpaczonych, zrozum głodujących,
Modlących się wysłuchaj, wybacz umierającym.
Spójrz, cierpienia sokole na wszechświat, na ziemię,
Na cichy, ciemny kościół, dziecko wzywające Ciebie.

Ref.: Rozpięty...

3. A gdy nas będziesz sądził, Boskie miłosierdzie,
Prosimy, Twoje dzieci, nie sądź na miarę siebie.

Ref.: Rozpięty…
---
{title:  Psalm "Hosanna"}
{number: 30}
Ref.: Śpiewajcie Panu, bo wielka Jego moc i chwała!
On z niewoli zła swój lud ocala!

1. Będę śpiewał na cześć Pana, który wspaniale potęgę okazał,
gdy konia i jeźdźca pogrążył w morskiej przepaści.

2. Pan jest moją mocą i źródłem męstwa,
Jemu zawdzięczam moje ocalenie.
On Bogiem moim, uwielbiać Go będę,
On Bogiem Ojca mego, będę Go wywyższał.

3. Rzucił w morze rydwany faraona i jego wojsko.
Wybrani Jego wodzowie zginęli w Morzu Czerwonym.
Przepaści ich ogarnęły, jak głaz runęli w głębinę.

4. Wyprowadziłeś lud swój i osadziłeś
na górze Twojego dziedzictwa,
w miejscu, które uczyniłeś swoim mieszkaniem.
Pan Bóg jest Królem na zawsze i na wieki. / x2
---
{title:  Uwielbiam Imię Twoje, Panie}
{number: 31}
Uwielbiam Imię Twoje, Panie [G] [C] [D]
Wywyższam Cię i daję Ci hołd [G] [C] [D]
W przedsionku chwały Twej staję [e] [C]
Z radością śpiewam Ci pieśń [a] [D]
O Panie Jezu, chcę wyznać, że [G] [C] [D]
Ja kocham Ciebie, [G]
Ty zmieniasz mnie! [C] [D]
Chcę Ci dziękować [G]
dziś ze wszystkich sił [C] [D]
Dajesz mi siebie, bym na wieki żył! [a] [C] [D]
---
{title:  Zaśpiewajcie Panu pieśń nową}
{number: 32}
Ref. Zaśpiewajcie Panu pieśń nową [D] [E] [fis]
Bo Sam wielkich cudów dokonał
Przyniosła Mu pewne zwycięstwo
Jego prawica i święte ramię.

1. Oznajmił Pan Swoje zwycięstwo [fis] [cis]
Wyjawił Swą sprawiedliwość [D]
w oczach narodów [E]
Wspomniał na Swą łaskawość i wierność
Ujrzały wszystkie krańce ziemi Jego zbawienie

Ref. Zaśpiewajcie Panu pieśń nową...

2. Wykrzykuj Panu, cała ziemio
Weselcie się, radujcie, śpiewajcie
Chwalcie Pana przy wtórze cytry
Przy wtórze liry i pieśni głosem

Ref. Zaśpiewajcie Panu pieśń nową...

3. Niech zabrzmi morze i co je napełnia
I okrąg świata i jego mieszkańcy
Rzeki niechaj klaszczą w dłonie
Góry niech z radości śpiewają

Ref. Zaśpiewajcie Panu pieśń nową…
---
{title:  Po szabacie pierwszego dnia z rana}
{number: 33}
1. Po szabacie pierwszego dnia z rana [e] [C]
Biegła Maria z Magdali do grobu, do Pana [a7] [H7]
Właśnie słońce wschodziło i rzęsy złotymi [e] [C]
Budziło ze snu to, co żyje na ziemi. [a7] [H7]
Swym ciepłym tchnieniem, suszyło trawę [e] [D] [e] [H7]
Całowało litośnie oczy łzawe. [e] [h7] [e] [D] [D7]

Ref.
To dzień, dzień, dzień zmartwychwstania [G]
To dzień, dzień, dzień ukazania się [D] [H7]
Dzień, dzień, dzień zmartwychwstania [e]
To dzień. [D] [D7]
 [es0]

2. I spiesząc odurzona rankiem, tęsknotą
stanęła przed żałobną grotą.
Zdziwiona spostrzegła, że właśnie tym razem
grób nie jest zamknięty jak zawsze głazem.
Niemało strwożona, z pobladłymi usty,
zagląda do wnętrza, grób cały pusty.

Ref. To dzień, dzień, dzień zmartwychwstania…
---
{title:  Wody nie ugaszą jej}
{number: 34}
Wody nie ugaszą jej,    [C] [G] [a7]
nie da zdławić się      [F] [G]
przez wiatr.            [C] [G7]
Rzeki nie zatopią jej,  [C] [G] [a7]
a jej żar to ognia żar. [F] [G] [C]
Jak śmierć jest miłość, [G] [a7]
tak potężna jest,       [F] [G] [C]
jak śmierć jest miłość, [G] [a7]
potężniejsza jest.      [F] [G] [C]

                        [(A7)]
Wody nie ugaszą jej,    [D] [A] [h7]
nie da zdławić się      [G] [A]
przez wiatr.            [D] [A7]
Rzeki nie zatopią jej,  [D] [A] [h7]
a jej żar to ognia żar. [G] [A] [D]
Jak śmierć jest miłość, [A] [h7]
tak potężna jest,       [G] [A] [D]
jak śmierć jest miłość, [A] [h7]
potężniejsza jest.      [G] [A] [D]

 ---
{title:  Zmartwychwstał Pan i żyje dziś}
{number: 35}
Ref. Zmartwychwstał Pan i żyje dziś, [e] [C] [G]
blaskiem jaśnieje noc [D]
Nie umrę, nie, lecz będę żył, [e] [C] [G]
Bóg okazał Swą moc [D]
Krzyż to jest brama Pana, [a] [e]
jeśli chcesz przez nią wejdź [G] [D]
Zbliżmy się do ołtarza, [a] [e]
Bogu oddajmy cześć! [G] [D]

 [e] [D] [G] [a] [H7]
1. Dzięki składajmy Mu, bo wieczna jest Jego łaska
Z grobu powstał dziś Pan, a noc jest pełna blasku
Chcę dziękować Mu i chcę Go dziś błogosławić
Jezus mój Pan i Bóg, On przyszedł, aby nas zbawić!

Ref. Zmartwychwstał Pan i żyje dziś...

2. Lepiej się uciec do Pana niż zaufać książętom
Pan   moja moc i pieśń, podtrzymał, gdy mnie popchnięto
Już nie będę się bać, cóż może zrobić mi śmierć
Nie, nie lękam się i śpiewam chwały pieśń!

Ref. Zmartwychwstał Pan i żyje dziś...

3. Odrzucony Pan, stał się kamieniem węgielnym
Pan wysłuchał mnie, On jest zbawieniem mym
Cudem staje się noc, gdy w dzień jest przemieniona
Tańczmy dla niego dziś prawica Pańska wzniesiona!

Ref. Zmartwychwstał Pan, i żyje dziś...
Alleluja, alleluja!... Krzyż to jest brama…
---
{title:  Oto są baranki młode}
{number: 36}
Ref. Oto są baranki młode, oto ci, co zawołali: alleluja!
Dopiero przyszli do zdrojów,
światłością się napełnili, alleluja, alleluja!

1. Na Baranka Pańskich godach,
W szat świątecznych czystej bieli,
Po krwawego morza wodach, nieśmy Panu pieśń weseli.
2. W Swej miłości wiekuistej On nas Swoją Krwią częstuje,
Nam też Ciało Swe przeczyste Chrystus Kapłan ofiaruje.

Ref. Oto są baranki młode...

3. Na drzwi świętą Krwią skropione
Anioł mściciel z lękiem wziera,
Pędzi morze rozdzielone, wrogów w nurtach swych pożera.
4. Już nam Paschą Tyś, o Chryste, Wielkanocną też ofiarą,
Tyś przaśniki nasze czyste dla dusz prostych z szczerą wiarą.

Ref. Oto są baranki młode...

5. O Ofiaro niebios święta, Ty moc piekła pokonywasz,
Zrywasz ciężkie śmieci pęta, wieniec życia nam zdobywasz.
6. Chrystus piekło pogromiwszy, swój zwycięski znak roztacza,
Niebo ludziom otworzywszy, króla mroków w więzy wtłacza.

Ref. Oto są baranki młode...

7. Byś nam wiecznie, Jezu drogi, Wielkanocną był radością,
Strzeż od grzechu, śmierci srogiej odrodzonych Twą miłością.
8. Chwała Ojcu i Synowi, który z martwych żywy wstaje
I świętemu też Duchowi niech na wieki nie ustaje.

Ref. Oto są baranki młode…
---
{title:  Ty tylko mnie poprowadź}
{number: 37}
1. Gdy drogi pomyli los zły [G] [C7+]
I oczy mgłą zasnuje [D] [h]
Miej w sobie tę ufność [C]
Nie lękaj się [D4-3] [G]
A kiedy gniew świat Ci przysłoni
I zazdrość jak chwast zakiełkuje
Miej w sobie tę ufność
Nie lękaj się!

Ref. Ty tylko mnie poprowadź [C] [D]
Tobie powierzam mą drogę [G] [h] [e]
Ty tylko mnie poprowadź [a7] [D7]
Panie mój /2x [G] [G7]

2. Poprowadź jak Jego prowadzisz
Przez drogi najprostsze z możliwych
I pokaż mi jedną
Tę jedną z nich
A kiedy już głos Twój usłyszę
I karmić się będę nim co dzień
Miej w sobie tę ufność
Nie lękaj się!

Ref. Ty tylko mnie poprowadź
Tobie powierzam mą drogę
Ty tylko mnie poprowadź [a7] [D7]
Panie mój /2x [C] [c] [G]
---
{title:  Swojego Ducha, Panie}
{number: 38}
Swojego Ducha, Panie,    [D]
Wylej na nas dziś!
Swojego Ducha, Panie,    [h]
Wylej na nas dziś!
Swojego Ducha, Panie,    [G]
Wylej na nas dziś!
Swojego Ducha, Panie,    [D]
Wylej na nas dziś!

Swojego Ducha, Panie,    [D]
Wylej na nas dziś!       [cis7/5-] [Fis7]
Swojego Ducha, Panie,    [h]
Wylej na nas dziś!       [a] [D7]
Swojego Ducha, Panie,    [G]
Wylej na nas dziś!       [g]
Swojego Ducha, Panie,    [e] [fis]
Wylej na nas dziś!       [G] [A]

---
{title:  Alleluja (Cohen)}
{number: 39}
 [G] [e] [G] [e]
1. Bóg w raju piękny zasiał dar, [G] [e]
mężczyźnie i kobiecie dał [G] [e]
tę miłość, która wiecznie niechaj trwa. [C] [D] [G] [D]
Więc chwalmy Pana głośno tak [G] [C] [D]
za miłość, za jej wielki dar, [e] [C]
śpiewajmy i wołajmy: Alleluja! [D] [H7] [e]

Ref. Alleluja, alleluja, [C] [G]
alleluja, alleluja! [C] [G] [D] [G]

2. O, Panie, dzisiaj w domu Twym
rozbrzmiewa ten miłości hymn,
bo sławić Ciebie pragnę z całych sił.
Błogosław więc miłości tej
daj siłę w każdy wspólny dzień.
Prosimy Cię, wołając: Alleluja!
Ref. Alleluja…
---
{title:  Maryjo, Matko mojego wezwania}
{number: 40}

1. Maryjo, Matko mojego wezwania [G] [H]
chcę i pragnę idąc za Twym słowem, [e] [C]
czynić wszystko co powie mi Jezus,
miłować Jego wolę, a wszystko inne ze względu na Niego samego.

Ref: Bo tak jest z tymi, którzy z Ducha narodzili się,
nikt nie wie dokąd pójdą za wolą Twą.

2. Słuchać Słowa całym sercem
i w Duchu Świętym je wypełnić.
Amen. Amen. Amen.
---
{title:  Twoja Miłość}
{number: 41}
 [h] [G7+] [fis7]
 [h] [G7+] [Fis7/9]
Jesteś blisko mnie [h] [G7+]
Tęsknię za Duchem Twym [A6] [E4-3]
Kocham kroki Twe [h] [G7+]
Wiem jak pukasz do drzwi [A6] [E4] [3]
Przychodzisz jak ciepły wiatr [G7+] [fis7] [E4] [3]
Otwieram się [D7+] [A/Cis]
I czuję znów, że: [C7] [Fis7]

Ref. Twoja miłość jak  ciepły deszcz [h] [e] [Fis]
Twoja miłość jak morze gwiazd za dnia [h] [G] [A]
Twoja miłość sprawia, że [D] [e6]
Nieskończenie dobry [Fis7]
Święty Duch ogarnia mnie [h] [G7+] [fis7] [h]
---
{title:  Powietrzem moim jest}
{number: 42}
Powietrzem moim Jest x2 [F] [B] [F] [B]
Obecność Twoja [F] [a7/E] [d] [C9]
Święta w sercu mym [B] [F/A] [C]
Powszednim chlebem mym x2 [F] [B] [F] [B]
Twe żywe słowo [F] [a7/E] [d] [C9]
dane mi dziś [B] [F/A] [C] [C7]

Ref. Bez Ciebie [F] [a7/E] [d] [C9]
nie mogę już żyć [B] [F/A] [C]
Dla Ciebie me serce chce bić [F] [a7/E] [d] [C9] [B] [F/A] [C]
---
{title:  Kochany bracie, kochana siostro}
{number: 43}
1. Kochany bracie, [F]
kochana siostro, [a]
nie wiem, kim jesteś, [B]
nie wiem, gdzie żyjesz, [g]
lecz ja chcę dla ciebie [C]
poświęcić wszystko, [C7]
chcę dać ci siebie. [B] [b] [F]
 [(C)]
Ref.: Takie jest prawo miłości, [F]
które dał Pan. [g]
Takie jest prawo miłości, [C]
jest kluczem do nieba bram. [F] [C]
Takie jest prawo miłości [F]
i jego strzeżmy, [g]
i miłość wszystkim dokoła [C]
ze sobą nieśmy. [B] [b] [F]
 [(C)]
2. Kimkolwiek jesteś, gdziekolwiek żyjesz,
na jakiejkolwiek spotkam cię drodze,
zawsze otwarte moje ramiona przygarną ciebie.

Ref. Takie jest prawo miłości...

3. Kochany bracie, kochana siostro,
już wiem, kim jesteś, już wiem, gdzie żyjesz,
ja chcę dla ciebie przychylić nieba,
chcę dać ci Boga.

Ref. Takie jest prawo miłości…
---
{title:  Pan jest Pasterzem moim (laj, la laj)}
{number: 44}
Pan jest Pasterzem moim, [h] [e] [G] [A] [h]
niczego mi nie braknie, [h] [e]
na zielonych niwach pasie mnie. [G] [A] [h]
Nad spokojne wody [h] [e]
mnie prowadzi [G] [A] [h]
i duszę mą pokrzepia, [h] [e]
i wiedzie mnie ścieżkami [G] [A]
sprawiedliwości Swojej. [fis] [h]

Laj, la laj, la lala lala laj [h] [e] [G] [A] [h]

Ref. Choćbym nawet szedł [D] [fis]
ciemną doliną, [E] [h]
zła się nie ulęknę, [D] [fis]
boś Ty ze mną, [E] [h]
laska Twoja [D] [A] [E] [h]
i kij Twój mnie [D] [A] [E] [Fis7]
pocieszają. [h]
---
{title:  Do Ciebie, Panie, woła dusza moja}
{number: 45}
Do Ciebie, Panie [G] [C]
woła dusza moja, [G] [C]
tęskni ciało me [G] [C] [D] [C]
Gdy nie ma Cię [G] [C]
moje serce ogarnia lęk [G] [C]
Przyjdź, dotknij mnie, [G] [C]
rozraduj mnie [D] [C]

Ref: Jezu, pragnę blisko Ciebie być [e] [C] [G] [D]
Jezu, w Twych ramionach się skryć [e] [C] [G] [D]
Słodycz Twą poznawać co dnia [e] [C] [G] [D]
Przy sercu Twym trwać. [e] [C] [G]
---
{title:  Maryjo, oddana Panu}
{number: 46}
 [E] [E7+] [fis7] [A2]
Maryjo, oddana Panu [E] [E7+]
W zaufaniu bez końca [fis7] [A2]
Służebnico pokorna [E] [fis] [cis] [A2]
Uznająca Jezusa [E] [fis] [cis] [A2]
Całym sercem Swym [gis] [fis]
Całym sercem Swym [E] [fis] [E] [fis]

Bez granic otwarta na słowo Pana [A2] [H4]
Pośredniczko wszelkich łask [A2] [H4]
Bez granic otwarta na słowo Pana [A2] [H4]
Pośredniczko łask [A2] [H4]

Za mną proś i ze mną bądź, [E] [fis] [E] [fis]
Za mną proś i ze mną bądź, [E] [fis] [C7+] [fis]
Za mną proś i ze mną bądź, [E] [fis] [E] [fis]
Za mną proś i ze mną [A2] [H4]
Bądź! [fis] [A2] [H4] [E]
---
{title:  Nic nie musisz mówić nic}
{number: 47}
Nic, nie musisz mówić nic [d] [B]
Odpocznij we mnie [C]
Czuj się bezpiecznie [F] [A7]

Ref. Pozwól kochać się [d] [B]
Miłość pragnie Ciebie [C] [F] [A7] [d]
---
{title:  Wszystko, co dziś mamy}
{number: 48}
Ref. Wszystko, co dziś mamy [A] [cis]
Nie należy do nas już [D] [A]
Oto plony całej ziemi, [fis] [cis]
Które Ty rozmnożyć chciej. [D] [E7]
Oto nasze dłonie [A] [cis]
Niech Ci służą, tak jak chcesz [D] [A]
By nie brakło w świecie chleba, [fis] [cis]
Którym karmisz dzieci Twe. [D] [E7] [A]

1. Dałeś moim dłoniom [fis]
Ziarno cudu, teraz wiem. [cis]
Oddam Ci je Panie, [A7]
Bo ode mnie tego chcesz. [D]
A........, a......... [D] [E] [cis] [D]
A ziarno maleńkie to, [h] [D]
We wszechmocnych dłoniach Twych [A] [cis]
Świeżym chlebem stanie się. [D] [A]

Ref. Wszystko, co dziś mamy…

2. Wszystkie nasze ziarna, które Ty przemieniasz w chleb,
staną się pokarmem życia dla łaknących serc.
A........, a......... Bo długo już czeka świat
na miłości wielki znak, na powszedni miłości chleb.

Ref. Na dalekich drogach świata
wiatr ze sobą będzie niósł
dar tych ziaren dla każdego,
by nie było głodnych już.
Miłość plon podzieli
i u Pana złoży stóp,
Aby świat zobaczył znowu
chlebów rozmnożenia cud…
---
{title:  Cisza}
{number: 49}
 [G] [D] [C] [G] [e] [C] [D] [G]
1. Chciałbym ciszę znaleźć w domu, [C] [D] [e]
By w niej schować smutku ból [C] [D] [G]
Tylko cisza może pomóc [C] [D] [h] [e]
Rozbić samotności mur [C] [a7] [D]

2. Chciałbym w domu znaleźć światło
By rozjaśnić wspomnień mrok
I w tym blasku żyć wciąż prawdą
Co dzień pewniej stawiać krok

Ref.: Ciągle szukam swego domu [G] [h] [C] [D]
Ciszy światła i wolności [G] [h] [C] [D]
Ciągle domu swego szukam [G] [h] [C] [D]
Domu prawdy i miłości a [C] [D] [G]

3. Chciałbym w domu stać się wolnym
Tak jak ptak, co niebo tnie
By do życia wciąż być zdolnym
I radować się każdym dniem...

Ref.x2: Ciągle szukam swego domu…
---
{title:  Mój Pan mocą moją jest}
{number: 50}
Mój Pan mocą moją jest [C] [B]
Skałą i zbawieniem, On Bogiem mym [F] [C]

Ref.: Dla Ciebie otwieram serce me |3x [B] [F] [C]

Mój Pan Królem moim jest [C] [B]
Na zawsze i na wieki. Amen. [F] [C]
---
{title:  Będziemy tańczyć, będziemy śpiewać}
{number: 51}
Solo akordeon
2x Ref. 1. Będziemy tańczyć [d] [B]
Będziemy śpiewać [C] [d]
Będziemy klaskać w dłonie swe [d] [B] [C] [d]
Kiedy nasz Pan [d] [B]
Stanie z nami twarzą w twarz [C] [d]
Spotkamy się w Nowym Jeruzalem [d] [B] [C] [d]

Solo akordeon
2x Ref. 2. Będziemy tańczyć, będziemy śpiewać
Będziemy klaskać w dłonie swe
Kiedy nasz Pan
W białych szatach stawi nas
Przed Ojcem swym, przed Adonai

1. Nadejdzie dzień, [g]
w którym wszystko spełni się [d]
Co dawno już objawił Bóg [C] [a] [d]
Więc mocno trwaj, [g]
nigdy nie poddawaj się [d]
Nie poddawaj się [C] [A7] [d]

2x Ref. 1. Będziemy tańczyć ... spotkamy się w Nowym Jeruzalem

Solo żydowskie akordeon
4x Bridge: Jeruzalem, Nowe Jeruzalem [D] [c] [D]

Solo akordeon
2x Ref. 2. Będziemy tańczyć ... przed Ojcem swym, przed Adonai

Solo akordeon
Zakończenie: [d] [B] [C] [d] [d] [B] [g7] [a7] [D]
---
{title:  Niech Wam błogosławi Pan}
{number: 52}
1. Niech wam błogosławi Pan [H] [E] [H] [E]
Niechaj was strzeże [cis] [H] [Fis]
Niech rozjaśni oblicze Swe nad wami [cis] [dis] [gis]
I niech miłościw wam będzie [cis] [H] [Fis]

2. Niech wam błogosławi Pan [H] [E] [H] [E]
Niechaj was strzeże [cis] [H] [Fis]
Niech obróci twarz Swoją ku wam [cis] [dis] [gis]
I niech da wam Swój pokój [cis] [H] [Fis]

Ref. Niech wam błogosławi Pan [H] [E] [H] [E]
Niech wam błogosławi Pan [H] [E] [Fis]
Niech wam błogosławi Pan [H] [E] [H] [E]
Niech wam błogosławi Pan [gis] [Fis] [H]

Bridge x2:
Niech wam błogosławi [E] [H]
Niech wam błogosławi [E] [H]
Niech wam błogosławi Pan [E] [H] [Fis]
 [(G)]
Ref. Niech wam błogosławi Pan [C] [F] [C] [F]
Niech wam błogosławi Pan [C] [F] [G]
Niech wam błogosławi Pan [C] [F] [C] [F]
Niech wam błogosławi Pan [a] [G] [C] [F]
 [a] [G] [C] [F]
 [a] [G] [F]
---
{title:  Śpiewajcie Panu, sławcie Go}
{number: 53}
 [E] [fis] [E] [fis] [gis] [fis]
 [E] [fis] [H] [A] [gis] [fis]
Śpiewajcie Panu, sławcie Go! [E] [fis] [E] [fis]
On jest naszą pomocą. [E] [fis] [E] [fis] [E]
Śpiewajcie Panu, sławcie Go! [E] [fis] [E] [fis]
On jest naszą pomocą. [E] [fis] [E]
Amen, amen, amen |x4 [E] [fis] [gis] [fis]
---
{title:  Jezus dziś przyszedł do mnie}
{number: 54}
 [C] [e/H] [a7] [Gsus4]
Jezus dziś przyszedł do mnie [C] [e/H] [F/A] [G]
Wziął mnie w ramiona Swoje [C] [e/H] [F/A] [G]
Rzekł, jesteś mój [C] [e/H] [a7] [Gsus4]
Ja zaś bratem twoim jestem [F] [G]
Daj mi dłoń [C] [e/H] [a7] [Gsus4]
 [F] [As] [G] [C7+]
---
{title:  Wykrzykujcie na cześć Pana}
{number: 55}
Ref. Wykrzykujcie na cześć Pana [e] [C]
Wszystkie ziemie [G] [D/Fis]
Wśród okrzyków i radości [e] [C]
wysławiajcie Go [G] [D/Fis]

1. Wiedzcie, że Pan jest Bogiem [C] [H7]
On sam stworzył nas [C] [H7]
Jesteśmy Jego ludem [C] [H7]
Jesteśmy Jego własnością [C] [H7]

2. W Jego bramy wstępujcie z dziękczynieniem
Wśród hymnów w Jego przedsionki
Błogosławcie imię Jego
Chwalcie Pana dziś

3. Albowiem dobry jest Pan
Łaskawość Jego na wieki
Albowiem dobry jest Pan
Jego wierność przez pokolenia
---
{title:  Nie bójcie się żyć dla miłości}
{number: 56}
Nie bójcie się żyć dla miłości [e] [C] [a] [D]
Dla tej miłości warto żyć [e] [D] [e] [D]
---
{title:  Otwierasz niebo}
{number: 57}
1. Usłyszałem i ujrzałem [A] [A4/3]
głos wielu aniołów [fis7] [cis7] [D] [E]
Mówiących: Oto jest Pan! [fis7] [cis7] [D] [E]

Ref. Otwierasz niebo, Panie [fis7] [cis7] [D7+]
Baranku Boży, zapraszasz nas [h7] [E]
Otwierasz niebo, Panie [fis7] [cis7] [D7+]
Baranku Boży [h7]

2. Niebo nowe, ziemia nowa
Tam mieszkać będziemy,
Baranek obiecał nam.

Ref. Otwierasz niebo, Panie [A] [E] [fis7]
Baranku Boży, zapraszasz nas [h] [D] [E]
Otwierasz niebo, Panie [A] [E] [fis7]
Baranku Boży [D7+]

 [h7] [cis7] [D7+] [E]
Bridge 1: Masz księgę w której [h7] [cis7]
zapisane jest imię me [D7+] [E]
Bądź uwielbiony! [cis7] [D7+]

Ref.x2 Otwierasz niebo, Panie...

Bridge 2: Otwierasz niebo nam |x3 [A]
Baranku! [A]
Otwierasz niebo nam |x3 [A]

Ref.x2 Otwierasz niebo, Panie…
---
{title:  Mój ląd}
{number: 58}
1.Twoje ręce to mój ląd, wiem nie utonę [a] [F] [C]
Twoje ręce to mój brzeg, kiedy dokoła sztorm [a] [F] [C]
Twoje ręce to mój ląd pokonam drogę [a] [F] [C]
Do tych wyciągniętych rąk. [a] [F] [G]
Czuję, że już blisko jest to wytęsknione [a] [F] [C]
Wtulam się w ramiona Twe, kiedy dokoła chłód [a] [F] [C]
Pierwsza gwiazda nieba gest, wskazuje drogę [a] [F] [C]
Może dziś się zdarzy cud [a] [F] [G]

Widzę Cię, jesteś tam, światło woła mnie [F] [Fis0] [G] [E7]

Ref: Coraz bliżej Ciebie być, (tego pragnę) [a] [F] [C] [Gsus4]
Chociaż czasem trzeba iść (pod prąd) [a] [F] [C] [E]
Suchą stopą przejdę dziś (po tej wodzie) [a] [F] [C] [Gsus4]
Twoje ręce to mój ląd [a] [F] [C] [Gsus4]

2.Twoje ręce to mój ląd, (wiem nie utonę) [a] [F] [e] [C]
Twoje ręce to mój brzeg, (i obiecany dom) [a] [F] [e] [C]
Jedno miejsce wolne wciąż, (zaczeka na mnie) [a] [F] [e] [C]
Twoje ręce to mój ląd [a] [F] [G]
(Widzę Cię jesteś tam, słyszę głos znany tak) [F] [Fis0] [G] [Gis0]
(jesteś tam widzę Cię światło woła mnie) [a] [Fis0] [G]
 [G] [E7]

Ref: Coraz bliżej Ciebie być...

(Twoje ręce to mój brzeg, Twoje ręce to mój ląd) [a] [F] [C]

Wiem, że nigdy nie opuścisz mnie
Wiem, że nigdy nie zostawisz

Tato ufam Tobie
Wierzę w każde słowo
Twoje ręce to mój ląd
---
{title:  Schowaj mnie}
{number: 59}
1. Schowaj mnie [C] [G/H] [a]
pod skrzydła Twe. [F] [D7/Fis] [G] [G7]
Ukryj mnie [C] [e] [F]
w silnej dłoni Swej. [d7] [d7/5-]
 [(d7] [G] [C)]
Ref. Kiedy fale mórz [F]
chcą porwać mnie, [G] [C]
z Tobą wzniosę się, [F]
podniesiesz mnie. [G] [a]
Panie, Królem Tyś [F/A]
spienionych wód. [G/A] [C]
Ja ufam Ci, Ty jesteś Bóg. [F] [G] [a]
Ja ufam Ci, Ty jesteś Bóg. [F] [G] [C]

2. Odpocznę dziś, w ramionach Twych.
Dusza ma, w Tobie będzie trwać.
---
{title:  Niechaj zstąpi Duch Twój}
{number: 60}
Niechaj zstąpi Duch Twój i odnowi ziemię [e]
Życiodajny spłynie deszcz [C]
Na spragnione serca [C]
Obmyj mnie i uświęć mnie [a] [H7]
Uwielbienia niech popłynie pieśń [e] [(e7)]

Chwała Jezusowi, który za mnie życie dał [C] [G]
Chwała Temu, który [C]
pierwszy umiłował mnie [G]
Jezus, tylko Jezus Panem jest! [C] [H7] [e]
---
{title:  Błogosławieni miłosierni}
{number: 61}
1. Wznoszę swe oczy ku górom, [cis] [A] [E]
skąd przyjdzie mi pomoc; [D] [A/C#] [E]
Pomoc od Pana, wszak Bogiem On [H] [Fis]
Miłosiernym jest! [A] [H] [Cis]

2. Kiedy zbłądzimy, sam szuka nas, by w Swe ramiona wziąć,
Rany uleczyć Krwią Swoich ran, nowe życie tchnąć!

Ref. Błogosławieni miłosierni, [E] [H] [cis] [A]
albowiem oni miłosierdzia dostąpią! x2 [E] [H] [Fis4-3]

3. Gdyby nam Pan nie odpuścił win, któż ostać by się mógł?
Lecz On przebacza, przeto i my czyńmy jak nasz Bóg!

4. Pan Syna Krwią zmazał wszelki dług, Syn z grobu żywy wstał;
„Panem jest Jezus” – mówi w nas Duch. Niech to widzi świat!

Ref. Błogosławieni miłosierni...

Bridge: Więc odrzuć lęk i wiernym bądź, [A] [H] [cis]
Swe troski w Panu złóż [A] [E] [H]
I ufaj, bo zmartwychwstał i wciąż [A] [H] [cis]
Żyje Pan, Twój Bóg! [A] [H] [Cis4-3]

Ref. Błogosławieni miłosierni, [A] [E] [fis] [D]
albowiem oni [A]
miłosierdzia dostąpią! x2 [E] [H4-3]
---
{title:  Stoję dziś}
{number: 62}
Stoję dziś, moje serce, ręce tak wyciągam [A] [E] [H] [cis]
w podziwie dla Tego, [A] [E]
który wszystko dał. [H] [cis]
Stoję dziś, [A] [E]
moją duszę, Panie, Tobie składam. [H] [cis]
Ja chcę być jak Ty. [A] [E] [H]
---
{title:  Mów do mnie Panie}
{number: 63}
Mów do mnie, Panie,     [c] [B]
chcę słyszeć Cię,       [As7+] [B]
Przyjąć od Ciebie,      [As7+] [B]
co masz dla mnie.       [f7]
Nie chcę się chować,    [c] [B]
lecz w Tobie skryć.     [As7+] [B]
W cieniu Twym, Panie,   [As7+] [B]
chcę iść.               [f7] [(f6)]

Ref. 2x Święty,             [c]
potężny jesteś, Panie nasz, [B] [As] [c]
Przed Tobą dziś możemy stać [B] [As] [c]
Dzięki łasce,               [B] [As]
nie dzięki nam samym.       [Es] [B]
---
{title:  Dotknij, Panie, moich oczu}
{number: 64}
Dotknij Panie moich oczu, [D] [A]
abym przejrzał [h]
Dotknij Panie moich warg, [D] [A]
abym przemówił uwielbieniem [h] [G] [A]
Dotknij Panie mego serca [D] [A]
i oczyść je [h]
Niech Twój Święty Duch [e]
dziś ogarnia mnie. [G] [A]
---
{title:  Uwielbiajcie Pana}
{number: 65}
Uwielbiajcie Pana [d] [C]
ludzkich serc bijące dzwony. [d] [C] [d] [C] [B] [A7]
Padnij na kolana [d] [C]
przed Nim ludu utrudzony. [d] [C] [d] [C] [d]
On osuszy twoje łzy, [F] [G]
On ratunkiem będzie Ci. [d] [A7]
Tu u Jego stóp padnie wróg, [d] [C]
bo On Bóg niezwyciężony. [d] [C] [d] [C] [d]

2x: Niepojęty w Swej mądrości, [F] [G]
Święty, Święty Bóg Miłości. [d] [A7]
Śpiewaj Panu Ziemio, [d] [C]
chwalcie wszystkie [d] [C]
świata strony. [d] [C] [d]

Uwielbiajcie Pana… [d] [C] [F] [A7]
---
{title:  Oto ja, poślij mnie}
{number: 66}
Ref. Oto ja, poślij mnie. [E] [A] [H7]
Dotknij ogniem moich warg. [E] [A] [H7]
Powiedz, Panie, czego chcesz, [E] [A] [H7]
A moją rozkoszą [A] [cis]
Będzie być posłusznym. [A] [H7]

1. Daj mi Twego Ducha, [Gis] [cis]
Abym mógł stać się chlebem, [A] [H7]
Abym stał się winem, [Gis] [cis]
Abym gasił Twe pragnienie. [A] [H7]

Ref. Oto ja, poślij mnie…

2. Nie chcę Ci już mówić o moich potrzebach,
Panie, Ty wiesz wszystko, objaw mi Twe pragnienia.

Ref. Oto ja, poślij mnie…
---
{title:  W ciele Chrystusa tworzymy jedno}
{number: 67}
W ciele Chrystusa [D]
Tworzymy jedno [h]
chociaż tak wielu nas jest x2 [e] [G] [A]

Ref. Jeden duch, jedna wiara [A] [h]
Jedna nadzieja w nas jest [e] [G] [A]
Jeden duch, jedna wiara [A] [h]
Jeden Bóg i Ojciec nasz [e] [G] [A]
---
{title:  Ukojenie}
{number: 68}
1. Tylko w Bogu moje jest zbawienie. [D7+] [E] [fis4-3]
W Nim jedynie duszy ukojenie. [D7+] [E] [A4-3]
Moja chwała i skała, [H/Dis] [E] [A/Cis] [D]
w Nim pokładam mą nadzieję. [h7] [cis7] [E] [Fis5]

2. Ufaj Mu, kościele w każdym czasie.
Wylewajcie przed Nim serca wasze.
Ludzie lżejsi, niż tchnienie, tylko w Bogu jest zbawienie.

Ref. Sprawiedliwy jest nasz Pan        [D7+] [E]
Każdy zbierze to, co siał              [fis] [A]
Kto uwierzy, nie zawiedzie się.        [D7+] [E] [H]
Przychodzimy przed Twój tron,          [D7+] [E]
chcemy widzieć Twoją moc               [fis] [A]
i doświadczyć, Panie, łaski Twej. /x2  [D7+] [E] [Fis5]

Sprawiedliwy jest nasz Pan             [E7+] [Fis]
Każdy zbierze to, co siał              [gis] [H]
Kto uwierzy, nie zawiedzie się.        [E7+] [Fis] [Cis]
Przychodzimy przed Twój tron,          [E7+] [Fis]
chcemy widzieć Twoją moc               [gis] [H]
i doświadczyć, Panie, łaski Twej. /x2  [E7+] [Fis] [Gis5]

Tylko w Bogu moje jest zbawienie.      [E7+] [Fis] [gis]
                                       [E7+] [Fis] [Gis]
---
{title:  Więcej miłości, więcej mocy}
{number: 69}
Więcej miłości, więcej mocy [e] [C]
Więcej Ciebie w życiu mym [D] [e]

Ref. Bo całym swoim sercem [a]
uwielbiam Ciebie [D] [e]
Całą swoją duszą [a]
uwielbiam Ciebie [D] [e]
Całym swoim życiem [a]
uwielbiam Ciebie [D] [e]
Tyś jest Bogiem mym [C] [D]
Tyś Panem moim jest [e]
---
{title:  Duchu Święty, Stworzycielu}
{number: 70}
Duchu Święty, Stworzycielu [B]
Ożywiaj moją modlitwę, [Es] [B]
Ożywiaj moje pragnienie [c] [F]
Pełnienia woli Ojca. [B] [F]
Duchu Święty, Stworzycielu, [B]
Otwieraj moje oczy, by widziały, [Es] [B]
Otwieraj moje uszy, by słyszały, [c] [F]
Serce, aby czuło [B] [F]
Duchu Święty, Ożywicielu – przyjdź! [c] [F] [B]
---
{title:  Jezus, najwyższe Imię}
{number: 71}
Jezus, najwyższe Imię [D] [D7+] [D6] [D7+]
nasz Zbawiciel, Książę Pokoju [e] [A7] [D] [G] [A]
Emmanuel, Bóg jest z nami [D] [D7+] [D6] [D7+]
Odkupiciel, Słowo żywota [e] [A7] [D] [D7]
Święty Bóg, Mesjasz prawdziwy, [G] [A] [D] [h]
jedyny Ojca Syn, Umiłowany. [G] [A] [D] [D7]
Zgładził grzech, Baranek na wieki, [G] [A] [D] [h]
Królów Król i Panów Pan. [e] [A7] [D]
---
{title:  Duchu Święty, obiecany nam}
{number: 72}
1. Duchu Święty, obiecany nam [e] [C] [D] [h] [a] [h] [e]
Przypominaj to, co mówi Pan. [e] [C] [D] [h] [a] [h] [e]

Ref. Z Tobą Słowo Boże [e] [C] [D]
żywe staje się. [D] [G] [D/Fis]
W moim życiu, Duchu [e] [C] [D] [h]
prowadź mnie. [a] [h] [e]

2. Duchu Prawdy, Ty umacniaj mnie
W drodze życia, gdzie wybrałeś mnie.

3. Daj mi spotkać dzisiaj twarzą w twarz
Żyjącego Pana pośród nas.
---
{title:  Ja dziękuję Ci}
{number: 73}
1. Patrzę w moje serce, widzę krew i rany [cis] [H] [E]
Patrzę głębiej, widzę obraz,
obraz piękny, namalowany przez Ojca.

2. Na tym obrazie jesteś Ty, widzę Twoją twarz,
Jezu, to naprawdę jesteś Ty,
Ty żyjesz we mnie, jesteś w moim sercu.

Ref. Ja dziękuję Ci za Twą świętą Krew, [A] [H] [cis] [E] [A] [H] [cis] [E]
która spływa dziś [A] [H] [cis] [gis]
na me serce i oczyszcza je [A] [H] [E]
---
{title:  Duchu Święty, pouczaj mnie}
{number: 74}
Duchu Święty, pouczaj mnie. [e] [h]
Duchu Święty, poprowadź mnie. [e] [h]
Chcę iść za Tobą Duchu Święty, [C] [D] [e]
chcę iść za Tobą Duchu Święty. [C] [D] [e]
---
{title:  Nasz Pan jest potężny}
{number: 75}
 [B] [F] [g] [a] [d]
Nasz Pan jest potężny [B] [F]
w mocy Swej, [C]
króluje nad nami dziś. [d] [B]
Z nieba rządzi w mocy, [F]
miłości, mądrości Swej. [g] [a] [d]
 [B] [F] [g] [a] [h7/5-]
---
{title:  Jesteśmy piękni Twoim pięknem}
{number: 76}
Jesteśmy piękni [F] [C/e]
Twoim pięknem, Panie! [d7] [B]
Jesteśmy piękni [F] [C/e]
Twoim pięknem, Panie! [d7] [B]
Ty otwierasz nasze oczy [g7] [d7]
na piękno Twoje Panie! [C]
Ty otwierasz nasze oczy, Panie! [g7] [d7] [C]
Ty otwierasz nasze oczy [g7] [d7]
na piękno Twoje Panie! [C]
Ty otwierasz nasze oczy, Panie, [g7] [d7] [C]
na Twoje piękno! [F]
---
{title:  Godzien, o godzien}
{number: 77}
 [G] [F] [G] [F]
1. Godzien o godzien jest Bóg [G] [D/Fis] [e]
siedzący na tronie, [C] [G] [C] [D]
Baranek wśród chwał, [G] [D/Fis] [e]
przyjąć wdzięczność, siłę i moc, [C] [G] [C] [D]
błogosławieństwo i cześć. [F] [C] [D]

Ref. On Panem jest [G] [D]
od wieków na wieki. / x3 [C] [D]
Amen. [G]
 [G] [F] [G] [F]
2. Będziemy niezmiennie wciąż trwać
w miłości i w prawdzie, oddając Mu hołd,
miłość, wdzięczność, siłę i moc, błogosławieństwo i cześć.
---
{title:  Nasz Bóg jest wielki}
{number: 78}
1. Wodę zamieniłeś w wino [cis] [A] [E]
Ślepi przy Tobie znów widzą [cis] [A] [E]
Któż jest jak Ty? Tylko Ty! [fis] [H]

2. Blaskiem rozświetlasz ciemności
Człowiek powstaje z marności
Któż jest jak Ty? Tylko Ty!

Ref. Nasz Bóg jest wielki [cis]
Nasz Bóg jest silny [A]
Boże, nikt inny nie równa się z Tobą [E] [H]
Nasz Bóg uzdrawia [cis]
Jest Wszechmogący nasz Bóg, nasz Bóg. [A] [E] [H]

2. Blaskiem rozświetlasz ciemności...

Ref. x2 Nasz Bóg jest wielki...

Jeśli nasz Bóg jest przy nas [cis]
Już nic nas nie zatrzyma [A]
Jeśli nasz Bóg jest z nami [E]
Któż jest przeciwko nam? (x2) [H]

Któż jest przeciwko nam? [cis] [A] [E] [H]

Ref. x2 Nasz Bóg jest wielki...
Jeśli nasz Bóg jest przy nas…
---
{title:  Będę śpiewał Tobie}
{number: 79}
Będę śpiewał Tobie [C] [F] [G]
mocy moja [e] [a] [C]
Ty, Panie, jesteś mą nadzieją [F] [G] [C] [a]
Tobie ufam i bać się nie będę [C] [d] [G] [C]
---
{title:  Wszyscy ludzie klaszczą w dłonie}
{number: 80}
Wszyscy ludzie klaszczą w dłonie [C] [G] [D] [e7]
cała ziemia śpiewa, śpiewa
Wielka radość na Syjonie, Król zstępuje z nieba, z nieba x2

Nadejdzie dzień, (nadejdzie dzień) x2
Zobaczy to (zobaczy to) każdy z nas
Nadejdzie dzień, (nadejdzie dzień) x2
Uwielbi Go (uwielbi Go) cały świat

Wszyscy ludzie...

Nasz Pan, potężny i groźny [H7] [e] [H7] [e] [E7] [a]
Królem całej ziemi jest [a] [e] [H7] [e]
A nam oddaje narody słychać już zwycięstwa pieśń

Nasz Pan (o tak!) potężny (o tak!) i groźny (o tak!)
Królem całej ziemi jest
O tak, (o tak!) Królestwo (o tak!) nadchodzi (o tak!)
Słychać już zwycięstwa pieśń

Wszyscy ludzie…    Nadejdzie dzień...

To Król nasz [cis7/5-]
przybywa przy dźwiękach trąb [D9sus4] [e7]
Wśród radosnych okrzyków zajmuje tron
Wszystkie świata korony u Jego stóp
To Pan wywyższony, jedyny Bóg [cis7/5-] [D9sus4] [H7/9+]

Wszyscy ludzie… Nadejdzie dzień…
---
{title:  Duchu Święty, przyjdź i rozpal nas}
{number: 81}
/x2/ Duchu Święty, Duchu Święty [a] [F7+] [d] [E7]
1. O przyjdź i rozpal nas i ulecz nas, miłość nam daj
2. O przyjdź, napełnij nas, rozraduj nas, miłość nam daj
3. O przyjdź i utul nas, rozkochaj nas, miłość nam daj
---
{title:  Miałem Pana zawsze przed oczami}
{number: 82}

1. Miałem Pana zawsze [e]
przed oczami, zawsze miałem Pana [C] [D] [e]
Gdyż stoi po mojej prawicy, [e] [C] [D]
abym się nie zachwiał [e]

Ref. Dlatego cieszy się moje serce [e] [D] [G] [a7]
i raduje język [H7]
Także ciało moje [e] [D] [G]
spoczywa w nadziei, [a7]
spoczywa w nadziei [es0]

2. Że nie zostawisz duszy mej w otchłani nie zostawisz
Ani nie dasz świętemu Twemu ulec skażeniu

Ref. Dajesz mi poznać wszystkie drogi życia dajesz mi poznać
i napełniasz mnie radością Swoją przed obliczem Twoim.
---
{title:  Oddajmy cześć wiecznemu Panu chwał}
{number: 83}
Oddajmy cześć wiecznemu Panu chwał, [h] [e] [fis] [h]
Pokłońmy się Temu, który [e] [A] [A7] [D] [D7]
Rozpostarł niebiosa i utwierdził ziemi krąg, [G] [h]
Jego chwała wznosi się ponad szczyty gór, [e] [A] [A7] [D] [es0]
Jego łaska nad nami jest, a niebo Jego tron. [e] [G] [fis] [h]

Ref. Bóg to nasz Pan i tylko On. [G] [fis] [h]
---
{title:  Panu naszemu pieśni grajcie}
{number: 84}
Panu naszemu pieśni grajcie [d] [C] [F]
wysławiajcie Jego święte Imię [C] [F] [C] [d] [(C)]

Ref. Alleluja, alleluja, alleluja, alleluja. [d] [C] [F] [C] [F] [C] [d] [(C)]
---
{title:  Moje wędrowanie}
{number: 85}
1. Moje wędrowanie, moje upadanie, [D] [E] [A] [D] [E] [fis]
moje powstawanie, Twoje miłowanie. [D] [E] [A] [D] [E] [fis]

Ref. Jesteś dla nas spragnionych [D]
jak rosa poranna [E] [fis]
Tobie śpiewamy radosne Hosanna [D] [E] [A] [cis] [fis]
Jesteś dla nas wędrowców [D]
jak zdrój czystej wody [E] [fis]
duszy wytchnienie niebiańskie ogrody. [D] [E] [A]

2. Nasze wędrowanie, nasze upadanie,
nasze powstawanie, Twoje miłowanie.

Ref. Jesteś dla nas, żeglarzy jak gwiazda zaranna
Tobie śpiewamy radosne Hosanna
Jesteś dla nas pielgrzymów jak burzy ustanie
Jesteś drogą, co nam przez Ojca jest dana

Jesteś dla nas spragnionych…
---
{title:  Przyjaciela mam}
{number: 86}
Przyjaciela mam, co pociesza mnie, [C] [G] [a] [F]
gdy o Jego ramię oprę się.
W nim nadzieję mam, uleciał strach.
On najbliżej jest, zawsze troszczy się.

Ref. Królów Król, z nami Bóg.
Jezus, Jezus
---
{title:  Jezus, pokonał śmierć}
{number: 87}
Jezus, Jezus, Jezus, Jezus, Jezus [D] [E7] [G] [A7] [D]

Ref. Pokonał śmierć, pokonał mój grzech [G] [D]
Zmartwychwstał Pan i Królem jest [G] [D]
 [G] [D] [G] [A] [D]
---
{title:  Jedyny Pan, prawdziwy Bóg}
{number: 88}
Jedyny Pan, prawdziwy Bóg, [a] [D] [G] [C]
wszystko, co mam, oddaję Mu. [a] [D] [G] [C]
On jedynym Panem jest, [a] [D] [G] [C]
Szema Izrael! [F] [G]
Szema Izrael! [F] [G]

Solo gitara [A7] [D7] [G] [C] [|x3]
 [F] [G] [|x2]
---
{title:  Jezus uzdrawia dziś}
{number: 89}
Ref. Jezus uzdrawia dziś. Alleluja! [e] [G] [a] [H7]
Jezus obecny tu. Pan obecny tu.
Jezus uzdrawia dziś. Alleluja! Jezus obecny tu.

Z każdej nędzy wydobywa. [a] [H7]
Pan miłosierdzie Swoje [e] [C]
Dziś wylewa na zebrany [a] [H7]
Lud - Swoje dzieci. [e] [C]
Wolność daje, więzy zrywa. [a] [H7]
Jezus, Pan poprowadzi [e] [C]
Drogą prostą. On nie zawiedzie mnie. [C] [H7]
---
{title:  Jak dobrze jest dziękować Ci, Panie}
{number: 90}
Jak dobrze jest dziękować Ci Panie [a7] [d7]
i śpiewać psalm Twojemu Imieniu [G7] [C] [E7]
i opowiadać rano Twoje miłosierdzie, [a7] [d7]
a w nocy wierność Twoją [a7]
przy dziesięciostrunnej harfie i lutni [E7] [F] [d7]
i dźwięcznej cytrze [a7] [E7]
---
{title:  W Tobie jest światło}
{number: 91}
W Tobie jest światło, każdy mrok rozjaśni. [h] [A] [G] [D] [fis7]
W Tobie jest życie, ono śmierć zwycięża. [h] [A] [G] [fis] [h]
Ufam Tobie, Miłosierny [G] [D] [G7+] [D]
Jezu, wybaw nas! [G] [A] [D] [(fis7)]
---
{title:  O, Panie, Ty nam dajesz}
{number: 92}
1. O, Panie, Ty nam dajesz [d] [F]
Ciało Swe i Krew. /2x [g] [a7] [d]
Do Ciebie więc idziemy wciąż, [d] [C] [B] [A]
radosną nucąc pieśń: [B] [g] [A7]

Ref. Ty jesteś Bogiem wiernym [B] [C] [F] [d]
na wieczny czas. /2x [g] [a7] [d]

2. Przez dar Twojego Chleba, dobry Boże nasz, /2x
Rodzinę bratnią czynisz z nas, miłować uczysz nas.

Ref. Ty jesteś Bogiem wiernym... /2x

3. To Twoje miłowanie dało wolność nam, /2x
Chwalimy Święte Imię Boga, jak uczyłeś nas.

Ref. Ty jesteś Bogiem wiernym... /2x

4. Tyś nam wyznaczył drogę wiodącą na Twój szlak, /2x
Idziemy więc, by radość nieść tam, gdzie jej światu brak.

Ref. Ty jesteś Bogiem wiernym... /2x
---
{title:  Boże, Ojcze na niebie}
{number: 93}
Boże, Ojcze na niebie, [fis]
przez Syna Twego, Jezusa, [D]
poślij nam Ducha Świętego. x2 [A] [E] [fis]

Ref. Niech umacnia nas, [D]
niech prowadzi nas, [E]
niech wyzwala nas i niech strzeże nas. [fis] [A]
Niech ogarnia nas Jego moc! x2 [D] [E] [fis]
---
{title:  Przed Tobą, Wszechmocny}
{number: 94}
Przed Tobą, Wszechmocny, [B] [F/A]
kolana zginamy. [g7] [Ges7+]
Dla Ciebie, żyjemy, [B] [F/A]
stworzeni, by kochać Cię. [g7] [Es7+]
Przed Tobą, Przedwieczny, [B] [F/A]
korony składamy [g7] [Ges7+]
Ty jesteś spełnieniem [B/F] [c7]
Tęsknoty naszych serc [B/D] [Es7+]

Ref. Wszystko, co mam [c7] [Es7+] [g7]
to prawda i łaska [c7] [Es7+] [g7]
wypisać je chcę [c7] [Es7+] [g7]
na serca tablicach [c7] [Fsus]

Przed Tobą, Wszechmocny, [G] [D/Fis]
kolana zginamy. [e7] [Es7+]
Dla Ciebie, żyjemy, [G] [D/Fis]
stworzeni, by kochać Cię. [e7] [C7+]
Przed Tobą, Przedwieczny, [G] [D/Fis]
korony składamy [e7] [Es7+]
Ty jesteś spełnieniem [B/D] [c7]
Tęsknoty naszych serc [B/D] [Es7+]

Ref. Wszystko, co mam....

Bridge: Jesteś naszą chlubą, grą na strunach [B] [c7/11]
niewinnego serca śpiewem. [Es7/9] [F]
Jesteś naszą chlubą, grą na strunach [g7] [F/A] [Bsus2]
serca niewinnego. [Es7+/9] [F]

Ref. x2 Wszystko, co mam…
---
{title:  Szukam Cię, Panie, o wschodzie}
{number: 95}
Ref. x2 Szukam Cię, Panie, [cis] [gis]
o wschodzie [A] [H]
wzywam, gdy noc się przybliża [cis] [gis] [A] [H]
pragnienie moje to Ty [cis] [gis] [A] [H]
jak ziemia bez wody [cis] [gis]
moja dusza usycha [A] [H]

1. Nie zatrzymam się [cis] [gis]
chcę znaleźć Ciebie [fis] [H]
zawsze będę śpiewał [cis] [gis]
o Twojej chwale [fis] [H]
jesteś moim Bogiem [E] [H]
moim schronieniem [A] [H]
Boże mój obrońco [E] [H]
ukryj mnie w cieniu Twych [A] [H]
skrzydeł [fis]

Ref. Szukam Cię, Panie, o wschodzie...

2. Nie zatrzymam się, chcę znaleźć Ciebie
będę opowiadał o Twoich dziełach
Jesteś moim Bogiem, jedynym Dobrym
żadna ciemna noc nie może już mnie pochłonąć

Ref. x2 Szukam Cię, Panie, o wschodzie…
---
{title:  Śpiewaj Panu, swemu Bogu serce daj}
{number: 96}
1. Śpiewaj Panu, swemu Bogu [D]
serce daj, serce daj i wysławiaj [h] [A]
Jego uśmiech i skinienie głowy [D]
którym daje tyle łask, tyle łask. [h] [A]
Jeśli tylko sam spróbujesz [D]
wsłuchać się w Jego głos, [h]
Zabrzmi w duszy niby dzwon, [G]
Będziesz wtedy się uśmiechać [D]
tak, jak On. [h]

Ref. Śpiewaj Panu, swemu Bogu modlitwę, [D] [A] [h]
Niby żagiel rozpiętą na dźwięków maszt. [D] [A] [h]
Czekaj wichru, co porwie [D] [A]
ją w niebo jak rybitwę, [h] [G]
Znów rozwiniesz swe skrzydła jak ten ptak. [D] [A] [H]
---
{title:  Ukaż mi, Panie, Swą twarz}
{number: 97}
Ukaż mi, Panie, Swą twarz. [D] [G] [D] [G]
Daj mi usłyszeć Twój głos, [D] [G] [D] [G]
bo słodki jest Twój głos [D] [e] [fis]
i twarz pełna wdzięku [G] [e]
Ukaż mi, Panie, Swą twarz. [G] [A6/4] [D]
---
{title:  Panie, Twój tron}
{number: 98}
Panie, Twój tron wznosi się [e] [A]
Nad wszystkie ziemie świata [D] [fis] [h]
Jesteś Najwyższy, Panie mój [e] [A]
i Królu mój. x2 [D]

Ref. Wywyższamy Cię, Alleluja [D]
Wywyższamy Cię, Alleluja [fis]
Wywyższamy Cię, Boże nasz. [G] [D] [A] [(A] [D)]
---
{title:  Nic nie odłączy mnie}
{number: 99}
Nic nie odłączy mnie od miłości Twej [C] [C7] [F] [F7+] [d]
Bo góry mogą ustąpić i zachwiać się pagórki [F] [G] [e] [B]
Lecz miłość Twoja, Panie wierna jest. [d] [d7] [G7]
---
{title:  Każdy wschód słońca}
{number: 100}
1. My, którzy wszystko liczymy, [h]
Ciebie mamy za darmo. [G] [D] [G] [A]
Dajesz nam Siebie w całości [D] [A] [h] [E]
i jesteś taki rozrzutny. [D] [A4-3]

Ref. Każdy wschód słońca [D] [A]
Ciebie zapowiada, [e] [h]
nie pozwól nam [G] [A]
przespać poranka. (2x) [D] [A] [(h)]

2. Mało, że do nas przyszedłeś, co dzień dajesz nam Siebie.
Zostałeś z nami w tym Chlebie, który bierzemy do ręki.

Ref. Każdy wschód słońca...

3. Dałeś nam Siebie za darmo, Twoja hojność zdumiewa.
Naucz nas liczyć dni nasze, niech człowiek już nie umiera.

Ref. Każdy wschód słońca...

4. Ty jesteś pełnią życia, daj nam Twojego Chleba,
daj nam oddychać wiecznością, Twój oddech ożywia i wspiera.

Ref. Każdy wschód słońca...

5. Przyjdź, Panie, przyjdź nareszcie, jak przyszedłeś już kiedyś.
A co dzień nowy wschód słońca, niech Ciebie nam zapowiada.

Ref. Każdy wschód słońca…
---
{title:  Nie lękajcie się}
{number: 101}
Nie lękajcie się, Ja jestem z wami.         [C] [F] [G] [C] [F] [G]
Nie lękajcie się, Ja jestem z wami.         [a] [e] [F] [d] [B] [G]
Nie lękajcie się, Bóg jest miłością.        [C] [F] [G] [C] [F] [G]
Nie lękajcie się, trwajcie mocni w wierze.  [a] [e] [F] [d] [B] [G]

1. Ty jesteś Skałą Zbawienia,           [C] [F] [G] [F]
Jedyną naszą ostoją.                    [C] [F] [G] [a]
Przychodzimy do Ciebie po światło.      [a] [e] [F] [C]
Ulecz nasze serca, zmartwychwstać daj.  [d] [F] [G] [G7]

2. Pomóż nam wytrwać przy Tobie,
Być wiernym w wierze przez życia czas.
Tylko w Tobie cała nasza nadzieja.
Miłosierdziem swoim uzdrawiaj nas.

3. Przekażcie światu Mój Ogień
Pokoju i Miłosierdzia.
Nieście wszystkim orędzie nadziei.
Moje światło niech świeci wśród was.
---
{title:  Ofiaruję Tobie, Panie mój}
{number: 102}

Ofiaruję Tobie, Panie mój,              [C] [G] [a]
Całe życie me,                          [e] [F]
Cały jestem Twój,                       [C] [d]
Aż na wieki.                            [G7]
Oto moje serce, przecież wiesz,         [C] [G] [a]
Tyś miłością mą jedyną jest             [e] [F] [G] [C]
                                        [A7]
Ofiaruję Tobie, Panie mój,              [D] [A] [h]
Całe życie me,                          [fis] [G]
Cały jestem Twój,                       [D] [e]
Aż na wieki.                            [A7]
Oto moje serce, przecież wiesz,         [D] [A] [h]
Tyś miłością mą jedyną jest             [fis] [G] [g6]
                                        [D7+]

---
{title:  Jestem tu, by wielbić}
{number: 103}
1. Ty światłość dnia wszedłeś [E] [H]
w moje ciemności, [fis] [A]
dałeś mi wzrok, abym mógł [E] [H] [A]
widzieć Twą Twarz [E] [H]
i Spojrzenie Miłości, [fis] [A]
którym roztapiasz mój strach [E] [H] [A]

Ref. x2 Jestem tu, by wielbić, [E]
by oddawać chwałę, [H]
jestem tu, by wyznać: “to mój Bóg! [cis] [A]
dobry i łaskawy, cały tak wspaniały [E] [H]
ponad wszystko cenny dla mnie jest. [cis] [A]

Bridge: I niczym nie odpłacę się [H] [cis] [A]
za miłość Twą i za Twój Krzyż! x3 [H] [E] [A]

Bridge2: Wezwij Imię Twojego Pana [E] [H]
i On zbawi Cię! x4 [cis] [A]

Ref. x2 Jestem tu, by wielbić…
---
{title:  Daję Ci serce moje Panie}
{number: 104}
Daję Ci serce moje, Panie, [D] [fis] [G] [H7]
daję Ci silne ręce moje. [e] [A] [D] [A7]
Dodawaj sił mi nieustannie, [D] [fis] [G] [H7]
by udźwignęły świat (ku Tobie). [e] [A] [D] [A7]
---
{title:  Jezus daje nam zbawienie}
{number: 105}
1. Jezus daje nam zbawienie     [d] [C] [a] [d]
Jezus daje pokój nam            [d] [C] [a] [d]
Jemu składam dziękczynienie     [d] [C] [a] [d]
Chwałę z serca mego dam         [d] [C] [a] [d]

Ref. Jezus siłą mą,             [F] [C]
Jezus pieśnią mego życia        [a] [d]
Królem wiecznym On              [F] [C]
niepojęty w mocy Swej           [a] [d]
W Nim znalazłem to, czego       [F] [C]
szukałem do dzisiaj             [a] [d]
Sam mi podał dłoń               [F] [C]
bym zwyciężał każdy dzień       [a] [d]

2. W Jego ranach uzdrowienie,
w Jego śmierci życia dar.
Jego krew to oczyszczenie,
Jego życie chwałą nam.

Ref. Jezus siłą mą…
---
{title:  Boże Twa łaska nad nami jest}
{number: 106}
Boże Twa łaska nad nami jest [D] [A4-3] [G]
Twoja miłość przychodzi wciąż [D] [A4-3] [G]
Działasz w mocy pośród nas [e] [G] [A4-3]
Przenikasz serca, gładzisz grzech [e] [G] [D] [G] [A]

Ref. My chcemy [A]
Więcej Ciebie, więcej łaski Twej [D] [G] [A4-3]
Pragniemy [A]
Więcej mocy, więcej miłości Twojej [D] [G] [A4] [3]

4x: Więcej Ciebie, więcej łaski... [e] [G] [A4] [3]

Ref. My chcemy...

8x: Więcej Ciebie, więcej łaski... Twej!
---
{title:  Szedłem kiedyś Jezu}
{number: 107}
1. Szedłem kiedyś Jezu [D]
ciemną drogą wstecz, [fis] [h]
Wówczas Cię spotkałem [D]
w blasku chwały Twej, [fis] [h]
Wtedy zrozumiałem, [e] [e7]
co to znaczy mieć [A7sus4] [A7]
Twoją miłość w sercu [e] [e7]
i ją innym nieść [A7sus4] [A7]

Ref. Znalazłem Cię [D]
pośród wielu życia dróg [D7+] [fis]
W mym sercu dziś [D]
ma mieszkanie Chrystus Bóg, [D7+] [fis] [h]
Jego miłość wciąż pokrzepia mnie. [G] [g6] [D]
W Eucharystii On nam daje się. [G] [g6] [D]

2. Bardzo chciałbym, Panie, sługą Twoim być.
Całym swoim życiem kochać Cię i czcić.
Z Tobą łatwiej przeżyć smutek, ból czy łzy,
Trzeba więc uwierzyć: Ty oddalisz strach!

Ref. Znalazłem Cię…
---
{title:  Pokorna służebnico Pana}
{number: 108}
2x: Pokorna Służebnico Pana [g] [F]
Łamiąca strzały nieprzyjaciela [g] [F] [B]
Miażdżąca głowę węża [F] [g]

Ref. x2: Bądź zawsze przy mnie [Es]
Abym stawał się pokornym sługą [c] [B]
Na wzór mego Mistrza i Pana [F] [g]
---
{title:  Jestem do Niego podobny}
{number: 109}
1. Nie zastanawiał się długo, [D]
kiedy stwarzał świat, [D7+]
podpowiedzią była miłość.
Morza, jeziora i lasy, [G]
potem deszcz i wiatr, [G7+]
wszystko stworzył Swoją siłą.
Stworzył świat, bo nie chciał zostać sam. [e] [e7]
"Uczyńmy kogoś podobnego Nam". [A7sus4] [A7]

Ref. Teraz jestem do Niego podobny, [D] [D7+]
te same oczy mam, co On, [C7+]
a dłonie niosą miłość. [G7+]
Jestem do Niego podobny, [D] [a7/13]
wystarczy jeden krok, a On, [G]
dokończy wszystko swoją siłą. [B] [C] [D]

2. Zszedł bez wahania na ziemię, żeby zbawić świat,
podpowiedzią była miłość.
Co dzień nauczał, że każdy człowiek to mój brat,
mogę kochać Jego siłą.
Blisko jest, bo nie chce, bym był sam
Przejdziemy drogę razem – On i ja.

Ref. Teraz jestem do Niego podobny…
---
{title:  Będę z aniołami śpiewał, alleluja}
{number: 110}
Będę z aniołami śpiewał: Alleluja! [E] [H] [A] [H] [E]
Będę tańczył ze świętymi. Alleluja! [cis7] [gis7] [A] [H] [E]
Radość duszy mojej chcę wyśpiewać światu. [A] [gis7] [fis7] [H]
Jezu, niesiesz pokój, prowadź mnie zawsze. [A] [gis7] [fis7] [A] [H]

Ref. Alleluja, radość duszy mojej! [E] [H] [A] [H] [E]
Alleluja! [E] [H] [fis7] [gis7] [A] [H]
---
{title:  Zbudowani na Chrystusie}
{number: 111}
Ref. Zbudowani na Chrystusie [C] [G]
W Nim zakorzenieni [a7] [C] [h7] [e]
Mocni w wierze i wdzięczni [a] [e] [C]
Bo On jest Źródłem Życia [a] [h] [e]

Nic nas nie zdoła odłączyć od Ciebie [G9] [D/Fis] [e7]
Ani śmierć, ani życie, [C]
utrapienie i prześladowanie [a7] [h7]
Nic nas nie zdoła odłączyć od Ciebie [G9] [D/Fis] [e7]
Ale we wszystkim tym [C]
odnosimy pełnię zwycięstwa [a7] [h7]
Dzięki Temu, Który nas umiłował [C] [a7] [C/D] [D]

Ref. Zbudowani na Chrystusie...

Alleluja, alleluja, alleluja, alleluja [C] [G] [a] [h] [e] [C] [G] [C/D]
Alleluja, alleluja, alleluja, alleluja [C] [G] [a] [h] [e] [C] [G] [D]
---
{title:  Duchu miłości, wylewaj się na nas}
{number: 112}
Duchu Miłości wylewaj się na nas [D] [A] [h] [fis]
Z przebitego serca Jezusa, Jezusa. [G] [D/Fis] [e7] [A7]
---
{title:  Albowiem tak Bóg umiłował świat}
{number: 113}

Albowiem tak Bóg umiłował świat, [e7/9] [C] [D] [h7]
Że Syna Jednorodzonego dał, [a7] [h7] [e7/9]
By każdy kto w Niego wierzy, [e7/9] [C] [D] [h7]
Nie zginął, ale życie wieczne miał [a7] [h7] [e7/9]

Ref. Lecz by mógł żyć na wieki, [D7] [G] [D] [es0]
by mógł żyć na wieki, [e] [H7]
Lecz by mógł żyć na wieki, [D7] [G] [D] [es0]
by mógł żyć na wieki. [e] [H7]
---
{title:  W kruszynie chleba}
{number: 114}
1. W kruszynie chleba           [G] [h]
Panie jesteś                    [e]
Schowany, wielki Ty Pan         [C] [D] [G] [e]
Przychodzisz do nas             [C] [D]
Już od wieków                   [G] [e]
By ofiarować Siebie nam         [C] [a7] [D] [D+]

2. W tych kroplach wina Twoja krew,
Przelana za nas Panie mój.
Tak wiele jej na krzyżu było
By odkupić nas od win.

3. Ty, Panie miłością jesteś,
Ty Panie kochasz nas.
I proszę Ciebie, by tak było,
Wciąż przez wiele lat.
---
{title:  Spocznij na nas, Duchu Pana}
{number: 115}
Spocznij na nas, Duchu Pana, [D] [A] [G] [e7]
Duchu mądrości i rozumu [D] [A] [G] [e7]
Duchu poznania i bojaźni Bożej [D] [A] [h] [fis]
Duchu miłości i mocy, [G] [A] [D] [h]
Duchu miłości i mocy. [G] [A] [D] [(C] [A7)]
---
{title:  Uwielbiam Cię, błogosławię Cię}
{number: 116}
Uwielbiam Cię, błogosławię Cię [D] [h]
Swym Duchem napełnij mnie. [e] [A]
Uwielbiam Cię, chcę widzieć Twoją [D]
świętą twarz [h]
i w miłość Twoją wtopić się. [G] [A] [D]
---
{title:  Pan jest mocą swojego ludu}
{number: 117}
Pan jest mocą Swojego ludu          [F] [B] [C7]
Pieśnią moją jest Pan               [F] [B] [C7]
Moja tarcza i moja moc              [B] [a] [d]
On jest mym Bogiem, nie jestem sam  [C7] [F] [B] [C7]
W Nim moja siła, nie jestem sam     [e] [B] [C7] [F]
---
{title:  Ty masz moc uzdrowienia}
{number: 118}
Ty masz moc uzdrowienia, Jezu. [A] [G/A]
Wierzę Tobie, bo obiecałeś: [A] [G/A]
"Przyjdźcie do Mnie, Ja was pokrzepię [G] [F/G]
Utrudzeni i chorzy" [G] [G/A] [A]
Zbliżam się w nadziei wielkiej, nie zawodzisz Swoich dzieci.
Wspomóż łaską naszą wiarę, oddajemy się Tobie.

Ref. Jezu, uzdrów dzisiaj mnie, [D] [E] [A]
Prowadź do wolności Twej. [D] [E] [A]
Nie pomijaj żadnej ciemnej strony [G] [A]
duszy mojej. [fis] [h]
Całkowicie Tobie oddaję się. [e] [D/Fis] [G] [A] [D]

Ufam Twojej dobroci na zawsze. [A] [G/A] [G] [A]
Wierzę, możesz wszystko, jesteś Bogiem.
Kocham, prowadź mnie bezpiecznie.
Kocham, uzdrów dzisiaj mnie.
---
{title:  Łaską jesteśmy zbawieni}
{number: 119}
Łaską jesteśmy zbawieni [A] [fis]
Z łaski możemy tu stać [h] [E7]
Łaską usprawiedliwieni [A] [fis]
I przez Baranka Krew [h] [E7]
Wzywasz nas Panie do Siebie [cis] [fis]
Przed Twój w niebie tron [h7] [E7]
My łaską obdarzeni [A] [fis]
Tobie składamy hołd [h] [E] [A]
---
{title:  Kiedyś wino i chleb}
{number: 120}
Ref: Kiedyś wino i chleb [D] [G] [A]
Teraz Ciało i Krew [D] [G] [A]
Możesz wierzyć lub nie [D] [e] [A]
To naprawdę dzieje się [G] [g] [D] [A]

1. Ciągle czekasz na cud [D] [G] [A]
Niespokojny twój duch [D] [G] [A]
A ja przypomnę, że [h] [G] [A]
W ciszy i przy blasku świec [G]
Cud największy dzieje się [g]

Ref: Kiedyś wino i chleb...

2. Wypatrujesz co dnia, czekasz na jakiś znak.
A ja przypomnę, że w ciszy i przy blasku świec
cud największy dzieje się.

Ref: Kiedyś wino i chleb…
---
{title:  Duchu Święty ogarnij mnie}
{number: 121}
Duchu Święty ogarnij mnie           [C] [G] [E] [a]
Otwórz oczy mego serca,             [F] [d]
Napełnij miłością                   [G] [G7]
Duchu święty ja kocham Cię          [C] [G] [E] [a]
Niech Twa święta wola spełni się    [d] [G7] [C]

---
{title:  Fundamentem jest miłość}
{number: 122}
 [cis7/5-] [C7+] [h] [a] [D]
Ref. Fundamentem jest miłość [G] [C]
Fundamentem miłosierdzie [cis7/5-] [C7+]
Fundamentem jest miłość [e] [C]
On zawsze przebacza mi [cis7/5-] [C7+] [D]
Chcę Go chwalić, chcę go czcić [h7] [a7]
Służyć Mu. Życie oddaję Ci, [C7+] [cis7/5-] [dis0]
W swych dłoniach trzymaj mnie [e] [C] [a7] [D]

1. Nosisz rany, popękany, [C7+] [a7]
Życie dawno rozsypało się [h7]
Przez naczynia twarde ściany [C7+] [a7]
Kruche serce wołać chce [h7]
Nikt o tobie nie powiedział [C7+] [a7]
Słowa prawdy, dobrą treść [h7]
Dociśnięty jak do ściany [C7+] [a7]
W cudzą rolę próbowałeś [h7]
Wcisnąć się [h7] [D]

Ref. Fundamentem jest miłość...

2. Stała sama w wielkim tłumie i nikt nie mógł dotknąć jej.
W nieczystości uciekała, "Córko, wiara twoja ocaliła cię".

Ref. Fundamentem jest miłość [e] [C]
Fundamentem miłosierdzie [cis7/5-] [dis0]
Fundamentem jest miłość. [e] [C]
 [cis7/5-] [C7+] [e7/9]
---
{title:  Czekam na Ciebie, dobry Boże}
{number: 123}
1. Czekam na Ciebie, dobry Boże, [a] [d]
przyjdź do mnie, Panie, pospiesz się. [G] [C] [d6] [E7]
Niechaj mi łaska Twa pomoże, [a] [d]
chcę czystym sercem przyjąć Cię. [a] [E] [g6] [A7]

Ref. Przyjdź do mnie, Panie, [d]
mój dobry Boże, [a]
Przyjdź i nie spóźniaj się. [E] [g6] [A7]
Przyjdź do mnie, Panie, [d]
przyjdź z łaską Swoją, [a]
Przyjdź i nie spóźniaj się [E] [F] [E] [a]
 [(a] [e7] [a] [e7)]
2. Wśród licznych trosk i niepokojów,
kiedy już sił nie starcza nam,
Karmisz nas, Panie, Swoim Ciałem,
Tyś nasza moc, nasz Bóg i Pan.

Ref.: Przyjdź do nas, Panie, nasz dobry Boże,
Przyjdź i nie spóźniaj się.
Przyjdź do nas, Panie, Przyjdź z łaską Swoją,
Przyjdź i nie spóźniaj się.
---
{title:  Raduje się dusza ma}
{number: 124}
Raduje się dusza ma, wielbi Pana swego [fis]
Będę Ci śpiewał z całej siły [Cis]
Sławić Cię będę za Twe dzieła [fis]
Będę Ci śpiewał z całej siły [Cis]
Błogosławić będę Twoje Imię [A]
Jest miłosierny Pan Zastępów [E]
Moc Jego ramienia nad Swym ludem [fis]
Pan mój Zbawca [Cis]
---
{title:  Modlitwa o Miłość (Zabierz Panie i przyjmij)}
{number: 125}
1. Zabierz, Panie, i przyjmij [a] [G]
całą wolność moją, [F] [E] [a]
Pamięć moją i rozum, i wolę mą całą. [F7+] [e7] [d7] [C] [G]
Cokolwiek mam i posiadam [F7+] [e7] [d7] [C]
Cokolwiek mam i posiadam [F7+] [G] [d7] [C]

Ref. Ty mi to wszystko dałeś, [d7] [C]
Tobie to Panie oddaję. [G] [C]
Twoje jest wszystko. Twoje jest wszystko. [F] [C] [G] [E]

2. Rozporządzaj tym w pełni [h] [A]
według Twojej woli. [G] [Fis] [h]
Daj mi jedynie miłość Twą i łaskę. [G7+] [fis7] [e7] [D] [A]
Rozporządzaj tym w pełni [G7+] [fis7]
według Twojej woli. [e7] [D]
Daj mi jedynie miłość Twą i łaskę. [G7+] [A] [e7] [D]

Ref. Albowiem to mi wystarczy, [e7] [D]
albowiem to mi wystarczy. [A] [D]
Twoje jest wszystko, amen. [G] [D] [A] [Fis]
---
{title:  W Twoje ręce, o Matko}
{number: 126}
 [a] [G] [D/Fis] [G]
Ty jesteś zawsze wierna, [a] [G] [F] [E]
Ucz nas ufać do końca [C] [F] [G]
Temu, który nam pierwszy zaufał. [F] [E] [a] [G]
Wstawiaj się za nami u Syna. [d] [C] [E]

Ref. W Twoje ręce, o Matko, składamy dar [a] [F] [G] [C]
naszego zawierzenia Panu. [F] [G] [E7]
---
{title:  Chcę wywyższać Imię Twe}
{number: 127}

Chcę wywyższać Imię Twe,                [F] [B] [C] [B]
Chcę zaśpiewać Tobie chwałę.            [F] [B] [C] [B]
Panie, dziś raduję się,                 [F] [B] [C] [B]
Bo przyszedłeś, by mnie zbawić.         [F] [B] [C] [B]

Ref. Z nieba zstąpiłeś i chcesz         [F] [B] [C]
Prowadzić mnie                          [B]
Na krzyżu zmarłeś, by mój               [F] [B] [C]
Zapłacić dług                           [B]
Z grobu wstałeś i dziś                  [F] [B] [C]
Nieba Królem jesteś Ty                  [d7]
Chcę wywyższać Imię Twe                 [B] [C] [F]
                                        [D7]
Chcę wywyższać Imię Twe,                [G] [C] [D] [C]
Chcę zaśpiewać Tobie chwałę.            [G] [C] [D] [C]
Panie, dziś raduję się,                 [G] [C] [D] [C]
Bo przyszedłeś, by mnie zbawić.         [G] [C] [D] [C]

Ref. Z nieba zstąpiłeś i chcesz         [G] [C] [D]
Prowadzić mnie                          [C]
Na krzyżu zmarłeś, by mój               [G] [C] [D]
Zapłacić dług                           [C]
Z grobu wstałeś i dziś                  [G] [C] [D]
Nieba Królem jesteś Ty                  [e7]
Chcę wywyższać Imię Twe                 [C] [D] [G] [e]
Chcę wywyższać Imię Twe                 [C] [D] [G] [e]
Chcę wywyższać Imię Twe                 [C] [D] [G]
---
{title:  Nadzieja nosi niebieską sukienkę}
{number: 128}
Ref. Nadzieja nosi niebieską sukienkę, [D] [G7+] [h]
Bo ta nadzieja jest z nieba, [G] [e]
Każdy, kto kocha, ten wie. [G] [A] [(D)]

1. Przyjmij do serca wiary ziarenko, [G] [A] [fis] [h]
Co drzewem staje się. [G] [A]
Potem je zanieś dobrą piosenką. [G] [A] [fis] [h]
Wiarę rozdaje się! [G] [A] [D]

Ref. Nadzieja nosi niebieską sukienkę...

2. Z Nieba spogląda Jezus pogodny. Święci niosą wieść:
"Warto jest kochać sercem łagodnym. Miłość największa jest!"

Ref. Nadzieja nosi niebieską sukienkę…
---
{title:  Ubi caritas}
{number: 129}

Ubi caritas             [D] [A] [h]
Et amor,                [G] [A4-3]
Ubi caritas             [D] [A] [h]
Deus ibi est.           [G] [A] [D]

Tam gdzie miłość jest   [D] [A] [h]
I dobroć,               [G] [A4-3]
Tam gdzie miłość jest   [D] [A] [h]
Tam mieszka Bóg.        [G] [A] [D]

(Solo skrzypce)         [D] [A] [h]
                        [G] [D] [G] [A7]
                        [D] [A] [h]
                        [G] [D] [G] [A7]
                        [D]
---
{title:  Kocham, więc nie muszę się bać}
{number: 130}
1. Kocham, więc nie muszę się bać [H]
zabierz mój strach! [A] [E] [H]
Jezus mówi ci, że miłość ta [H]
zabiera strach. [A] [E] [H]

Ref.: Oo, Jezus, Jezus /4x [H] [A] [E] [H]

3. Jezus daje ci miłość Swą, nie lękaj się!
Jezus mówi ci, że miłość ta zabiera strach!
---
{title:  W lekkim powiewie}
{number: 131}
W lekkim powiewie [a]
przychodzisz do mnie Panie /x2 [D] [a] [D]
Nie przez wicher ogromny i nie przez ogień [F] [G]
ale w lekkim powiewie [F]
przychodzisz do mnie [G]
W lekkim powiewie nawiedzasz duszę mą [a] [D] [E] [a]
---
{title:  Hosanna, hosanna}
{number: 132}
1. Hosanna, hosanna, hosanna na niebiosach. [D] [A] [h] [G] [A]

Ref. Sławić chcemy Cię wciąż [G] [A7] [D] [h]
z radością i czcią [G] [A7] [D] [D/Fis]
Wywyższony bądź Boże nasz. [E7] [A7] [D] [A] [h]
Hosanna niechaj ciągle brzmi. [G] [A7] [D]

2. Chwała, chwała królowi królów chwała cześć.

Ref. Sławić chcemy Cię wciąż z radością i czcią.
Wywyższony bądź Boże nasz. Królowi królów chwała, cześć!
---
{title:  To jest Baranka Ciało, Jego Krew}
{number: 133}
Ref. To jest Baranka Ciało, Jego Krew [fis] [cis]
Chleb, który dał za życie świata [fis] [E]
Winne grono zmiażdżył, poi mnie [h] [Cis7]
We Krwi zdrojach płuczę szaty swe. [h] [Cis7]
To jest Baranka Ciało, Jego Krew [fis] [cis]
Chleb, który dał za życie świata [fis] [E]
Ziarno pęcznieje, otchłań budzi się [h] [Cis7]
Pascha Pana staje się. [h] [D] [Cis] [fis]

1. W Nim odkupienie win, uzdrowienie ran [h] [Cis] [fis] [E] [D]
Chleb z nieba dany nam, karmi nas [h] [Cis] [fis]
Tyś krzewem winnym jest, [h] [Cis]
spragnionym wody dasz [fis] [E] [D]
Panie wypełnij serce me! [h] [Cis7]

Ref. To jest Baranka Ciało, Jego Krew...

2. Tyś żywym znakiem jest, śmierci mego Pana
Chlebie, co dajesz życie wieczne.
Pokarmie słodki nasz, daj zaspokoić głód
Niech dusza zgłodniała się nasyci.

Ref. To jest Baranka Ciało, Jego Krew...

3. Krew Twoja dana nam, przymierzem z nami jest
Pokarmem duszy na życie wieczne.
Malutka kropla Krwi, otwiera wnętrza drzwi
Panie, naucz mnie umierać!

Ref. To jest Baranka Ciało, Jego Krew…

---
{title:  Emmanuel, Emmanuel}
{number: 134}
1. Wielkie światło, które dałeś [D]
ciemność zwyciężyło [A]
rozświetlając nasze życie prawdę objawiło [G] [A]
w Twoim mieście pod tym niebem [D]
dla całego świata [A]
Ojciec daje nam Jezusa, Zbawiciela [G] [A]

Bridge: Będąc tu [h]
stojąc w tym samym świetle [D]
W cieniu Twojego krzyża [e]
śpiewamy jednym głosem: [G] [A]

Ref. Emmanuel /x6 [D] [A] [G] [A]

2. Wielki dar samego Boga [E]
Chrystus Pan Syn Jego [H]
cała ludzkość odnowiona [A]
i w Nim wybawiona [H]
Jedyny Bóg - Prawdziwy Człowiek [E]
On jest Chlebem Życia [H]
Wszystkim ludziom Swoim braciom [A]
On daje się [H]

Bridge: I my z Nim, objęci Jego światłem [cis] [E]
złączeni Jego krzyżem [fis]
śpiewamy jednym głosem: [A] [H]

Ref. Emmanuel /x6 [E] [H] [A] [H]
---
{title:  Oto idzie mój Bóg}
{number: 135}
 [E] [cis] [A] [H7] [E] [H7]
Oto idzie mój Bóg, oto idzie mój Król, [E] [cis]
Oto Zbawiciel mój, a imię Jego: Jezus /x2 [A] [E] [H7]

Tęsknię za Tobą, Panie [A] [H7]
Wiem, że przyjdziesz niebawem, [A] [H7]
Z głębi serca dziś wołam: Maranatha /x2 [A] [H7] [cis]
 [A] [H7] [E]
---
{title:  Pomódl się, Miriam}
{number: 136}
 [D7+] [G] [C9]
1. Pomódl się Miriam, [D7+]
aby Twój Syn żył we mnie. [G] [C9]
Pomódl się, by Jezus we mnie żył. [D7+] [G]
Gdzie Ty jesteś, zstępuje Duch Święty. [e] [A7]
Gdzie Ty jesteś, Niebo staje się... [e] [A7]

2. Miriam, Tyś jest Bramą do Nieba. [D7+] [G]
Moim Niebem jest Twój Syn [D7+] [G]
Weź mnie, Weź mnie, do Swego łona, [e] [A7]
Bym bóstwem Jezusa zajaśniał jak Ty. [D] [G] [A] [D7+]
---
{title:  Maryjo, wzorze prostoty}
{number: 137}
Maryjo, wzorze prostoty, [E] [fis7/11] [cis7/9]
Przez Ducha Świętego napełniona. [Asus2] [Hsus4]
Radością wieczną [E] [fis7/11] [cis7/9]
Wciąż i na zawsze przepełniona. [Asus2] [Hsus4]

Ref. Świątynio Syna Bożego, [E] [H] [cis7]
Prowadź nas ścieżką Ducha Świętego [fis] [H]
Wszędzie tam, [E] [H] [cis7]
gdzie człowiek czeka sam. [fis] [H]
---
{title:  Jestem dzieckiem Boga}
{number: 138}
1. Jestem dzieckiem Boga, [a7] [e7]
Synem, na którego czekał Bóg, [a7] [e7]
Królewskim płaszczem Pan odział mnie, [a7] [e7]
Moja nadzieja znalazła w Nim swój dom. [F] [E4-3]

Ref. Bo jestem upragnionym dzieckiem, [a7] [e7]
Potężnego Ojca w niebie mam, [a7] [e7]
Królewskim dziedzicem Pan [F]
już nazwał mnie, [C]
W przestronnych komnatach znalazł [d]
dla mnie dom. [E4-3]

2. Jesteś dzieckiem Boga, synem, na którego czeka Bóg,
Królewskim płaszczem Pan odzieje cię,
Twoja nadzieja znajdzie w Nim swój dom.

Ref. Bo jesteś upragnionym dzieckiem,
Potężnego Ojca w niebie masz,
Królewskim dziedzicem Pan już nazwał cię,
W przestronnych komnatach znalazł dla ciebie dom.
---
{title:  Jezus jest z nami tu}
{number: 139}
/x3/ Jezus jest z nami tu [B] [C] [F] [d]
Jezus jest z nami tu [B] [C] [F]

Ref. A Jego moc działa dziś, [B] [C]
by namaścić cię, [F] [d]
A Jego moc działa dziś, by uzdrowić cię, [B] [C] [F] [d]
A Jego moc działa dziś, aby zbawić cię. [g7] [C] [a] [d]
Jezus jest z nami tu. [B] [C] [F]
---
{title:  Niech zabrzmi Panu chwała w niebiosach}
{number: 140}
Ref. x2 Alleluja, Alleluja,     [fis] [E]
Alleluja, Alleluja!             [D] [cis] [fis]

1. Niech zabrzmi Panu               [fis]
chwała w niebiosach,                [E] [fis]
na wysokościach                     [cis] [D]
cześć niech oddadzą,                [E] [fis]
wielbijcie Pana, duchy niebieskie,  [fis] [E] [D] [fis]
wielbicie Pana, Jego zastępy        [fis] [E] [cis] [fis]

2. Słońce, księżycu, wielbijcie Pana,
gwiazdy świecące wielbijcie Pana,
niebiosa niebios, wielbijcie Pana,
wody podniebne wielbijcie Pana!

3. Niech wszyscy wielbią Imię Pana,
bo Jego Słowo stwarza wciąż wszystko,
bo tylko Jego Imię jest wzniosłe,
niechaj na wieki brzmi Jego chwała!

4. On daje siłę Swemu ludowi,
z prochu podnosi Swoich przyjaciół,
jest Bogiem bliskim dla Izraela,
Swoich wybranych On Sam umacnia.

5. Niech zabrzmi chwała Ojcu, co stwarza,
Jego Synowi, który jest Panem,
Duchowi, który w nas zamieszkuje,
przez wszystkie wieki wieków. Amen!
---
{title:  Barka}
{number: 141}
1. Pan kiedyś stanął nad brzegiem,      [D] [A7] [h] [h7]
szukał ludzi, gotowych pójść za Nim,    [e] [G] [A] [A7]
by łowić serca Słów Bożych prawdą.      [D] [A7] [D] [D7]

Ref. O Panie, to Ty na mnie spojrzałeś, [G] [A] [D] [H7]
Twoje usta dziś wyrzekły me imię.       [e] [A7] [D] [D7]
Swoją barkę pozostawiam na brzegu,      [G] [A] [D] [H7]
razem z Tobą nowy zacznę dziś łów.      [e] [A7] [D] [G] [D]

2. Jestem ubogim człowiekiem,
moim skarbem są ręce gotowe
do pracy z Tobą i czyste serce.

3. Ty potrzebujesz mych dłoni,
mego serca młodego zapałem,
mych kropli potu i samotności.

4. Dziś wypłyniemy już razem,
łowić serca na morzach dusz ludzkich
Twej prawdy siecią i Słowem Życia.

---
{title:  Ja Jestem}
{number: 142}
1. Panie, dla Ciebie nie ma rzeczy [E7+]
niemożliwych. [A]
Ty przychodzisz do mnie [E7+] [A]
Ze słowem umocnienia i pociechy. [A] [E7+]
Mówisz mi "Ja Jestem, nie lękaj się". [A] [H7]

2. Gdy nadejdzie czas Mej łaski, Ja wysłucham cię.
W dniu zbawienia przyjdę ci z pomocą. Przyjdę i wysłucham cię.

Ref. Ja Jestem... [E7+] [A]

Gdy nadejdzie czas, mej łaski czas wysłucham cię
W dniu zbawienia przyjdę ci z pomocą, przyjdę i wysłucham Cię

Bo Ja Jestem, Ja Jestem, Ja Jestem, Ja Jestem, Ja Jestem |x2
---
{title:  Jezu, Źródło}
{number: 143}
 [d] [C] [F] [g] [a]
 [d] [C] [F] [g] [A7/9-]
Jezu, Źródło nieginącej miłości Ojca [d] [C] [F] [g]
Otworzyło się, obmywając z grzechów mnie. [C] [a] [B] [g] [a] [d]
Jezu, Źródło nieginącej miłości Ojca
Otworzyło się, obmywając z grzechów mnie.
solo
Jezu, unieś tę modlitwę do tronu Ojca
Rozpoznaję Cię, Tobie ufać wiernie chcę.
Jezu, Źródło nieginącej miłości Ojca
Otworzyło się, obmywając z grzechów mnie.
 [d] [C] [B7+] [C] [(Dadd9)]
---
{title:  Nie bój się, wypłyń na głębię}
{number: 144}
Nie bój się [D]
wypłyń na głębię [G] [A]
Jest przy Tobie Chrystus [G] [e] [A4-3]
---
{title:  Niepojęty, niezmierzony}
{number: 145}
 [G7+]
1. Z głębokości mórz aż po szczyty gór [h] [A] [D]
Stworzenie objawia Majestat Twój [e7] [C]
Od kolorów jesieni po wiosenny deszcz [h] [A] [D]
Wszystko śpiewa Ci pieśń pełną [e7]
cudownych słów, ogłaszając: [C] [G] [A]

Ref. Niepojęty, niezmierzony [D] [A]
gwiazdy stworzyłeś na niebie [G]
i każdą z nich znasz [h]
Wspaniałym Bogiem Tyś jest [A] [G]
Wszechmogący, nieskończony [D] [A]
W zachwycie klękam przed Tobą [G]
By wyznać to, że [h]
wspaniałym Bogiem Tyś jest! [A] [G]

2. Kto uwalnia błyskawic moc w czasie burz,
Kto maluje kolory porannych zórz
Słońce stworzył na niebie i dał mu Swą moc
Orzeźwienie przynosi w gwieździstą noc Tylko Ty

Ref. Niepojęty, niezmierzony
Gwiazdy stworzyłeś na niebie i każdą z nich znasz
Wspaniałym Bogiem Tyś jest
Zawsze dobry, miłujący, Ty znasz me serce i mimo to
Wciąż kochasz mnie, wspaniałym Bogiem Tyś jest!

Wspaniałym Bogiem Tyś jest [e] [D] [C] [F] [Es]

Ref.x3 Niepojęty, niezmierzony... [D] [A] [G] [h] [A] [G]
---
{title:  Witaj, Pokarmie}
{number: 146}

                                    [e] [h] [C] [a7/9]
1. Witaj Pokarmie,                  [e] [h]
W którym niezmierzony               [C] [D]
Nieba i ziemie                      [e] [h]
Twórca jest zamkniony,              [C] [D]
Witaj napoju                        [G] [D]
Zupełnie gaszący                    [a] [D4-3]
Umysł pragnący.                     [G] [h] [e]

2. Witaj Krynico wszystkiego dobrego
Gdy bowiem w sobie masz Boga samego
Znasz ludziom wszystkie Jego wszechmocności
Niesiesz godności.

3. Witaj z niebiosów Manno padająca
Rozkoszny w sercu naszym smak czyniąca:
Wszystko na świecie co jedno smakuje
W tym się najduje.

4. Witaj rozkoszne z ogrodu rajskiego
Drzewo owocu pełne żywiącego:
Kto Cię skosztuje śmierci się nie boi
Choć nad nim stoi.

5. Witaj Jedyna serc ludzkich Radości
Witaj strapionych wszelka Łaskawości
Ciebie dziś moje łzy słodkie szukają
K Tobie wołają.
---
{title:  Chrystus Pan karmi nas}
{number: 147}
Ref. Chrystus Pan karmi nas [e] [C] [h7]
Swoim świętym Ciałem, [e] [a] [Fis7] [H]
Chwalmy Go na wieki! [e] [C] [D] [a7] [e] [(H7)]

1. Duchem całym wielbię Pana, [e] [C] [a] [e]
Boga, Zbawcę jedynego, [C] [e] [h7] [a7] [e]
Bo w Nim samym odnajduję [e] [C] [a] [e]
Wszelką radość życia mego. [C] [e] [h7] [a7] [e] [h]

2. Wielbię, bo chciał wejrzeć z nieba na Swą sługę uniżoną,
By mnie odtąd wszyscy ludzie mogli zwać błogosławioną.

3. Sprawił we mnie wielkie dzieła w Swej dobroci niepojętej.
On Wszechmocny, On Najwyższy, On Sam jeden zawsze Święty.

4. On, który przez pokolenia pozostaje miłosierny
Wobec tego, kto Mu służy i chce zostać Jemu wierny.

5. On, który Swą moc objawia, gdy wyniosłość serc uniża,
Każdy zamiar może zburzyć, który pychą Mu ubliża
---
{title:  O, Jezu, w Hostii utajony}
{number: 148}
 [D] [h] [G] [Asus4] [A]
O Jezu, w Hostii utajony [D] [h]
Serce moje Cię czuje [G] [A4-3]
I choć kryją Cię zasłony [D] [G] [g6]
Ty wiesz, jak Cię miłuję [D] [A4-3]
(....Panie mój!) [D]
---
{title:  Ta krew z grzechu obmywa nas}
{number: 149}
Ta Krew z grzechu obmywa nas [D] [G]
Ta Krew czyni nas bielszych od śniegu [A] [D] [fis]
Ta Krew z grzechu obmywa nas  [h] [G]
To jest Baranka święta Krew [A7] [D]
---
{title:  Przyodziałeś mnie, Panie}
{number: 150}
Przyodziałeś mnie Panie w Swoją moc, [D] [A] [h]
Duch Twój na mnie spoczął. [G] [A] [h7] [A7]
/Wysławiam Jezu Twoje zwycięstwo [D7+] [Fis7] [G] [g7]
Nad mocami ciemności! /(x2) [D] [A] [D]

Ref. Sławię Cię, Panie mój, [D] [fis7]
bo mnie wybawiłeś. [G] [A]
Sławię Cię, Panie, bo mnie wybawiłeś. [D] [fis7] [G] [A]
/Dzięki Ci za to, żeś [D] [Fis7] [G] [e]
Uchronił moje życie od śmierci, [D]
Nogi od upadku i oczy od łez./ (x2) [A] [D]

Przyodziałeś...

Ref. chór: (Sławię Cię) Ty wybawiłeś mnie
(Dzięki Ci) Za to, żeś uchronił moje życie…
---
{title:  Jezus, Królem naszym jest}
{number: 151}
Jezus, Królem naszym jest [D] [A] [h] [G] [A]
Jezus, nasz Umiłowany. /x2 [D] [A] [h] [G] [A]

Ref. Daj wielki pokój nam. [D] [A] [h] [G] [A]
Przyjdź i zamieszkaj z nami. /x2 [D] [A] [h] [G] [A]
---
{title:  Wypłyń na głębię}
{number: 152}
Ref. Wypłyń na głębię /x2 [G] [A] [D] [h]
Pan tak blisko jest [C]
Z Nim zarzucisz swą sieć. [h] [A]

1. Pan ci mówi „otwórz się” [D] [A] [G] [A]
Pan ci mówi „wstań”. [D] [fis] [G] [A]
Ja Jestem, odwagi [G] [A] [h] [A]
Czemu wątpisz w łaskę Mą. [h] [G] [A]
---
{title:  Idzie mój Pan}
{number: 153}
Ref. Idzie mój Pan, idzie mój Pan [d]
On teraz biegnie, by spotkać mnie [d] [g] [A7] [d]
Mija góry, łąki, lasy [d] [g] [d]
By komunii stał się cud [C] [C7] [F] [A7]
On chce chlebem nas nakarmić [d] [g] [d]
By nasycić życia głód [C] [A] [d]
---
{title:  Z Jezusem w chwale Ojca}
{number: 154}
Ty, który jesteś samą Prawdą, [Es] [F] [g]
Duchu Święty, bądź uwielbiony. [Es] [F] [g]
Duchu, Prawdo odwieczna, | [c7] [d7]
Uświęć nas w prawdzie.      |x2 [g]

Ref. Daj nam ujrzeć świat taki, jakim jest [Es] [F]
Daj nam łaskę widzenia [d]
W prawdzie siebie samych [g]
Daj nam poznać, jak bardzo [Es] [F]
Zostaliśmy obdarowani. [d] [g]

Przyjdź i ogarnij tych, co siedzą w mroku. [Es] [F] [g]
Przekonaj ich o Twej obecności. [Es] [F] [g]
I doprowadź do spotkania z Jezusem | [c7] [d7]
W chwale Ojca [|x2] [g]

Ref. Daj nam ujrzeć świat…

Ty, który jesteś samą Prawdą, [Es] [F] [g]
Duchu Święty, bądź uwielbiony. [Es] [F] [g]
Duchu, Prawdo odwieczna, [c7] [d7]
Uświęć nas w prawdzie. [g]
I doprowadź do spotkania z Jezusem |x3 [Es] [F]
W chwale Ojca [G]
---
{title:  Odnajduję Cię}
{number: 155}
 [D] [Cadd9] [h] [Bsus2] [C]
1. Nie jestem sam, Ciebie w sobie mam, [D] [Cadd9]
W mych myślach, w mym sercu, Jezu. /x2 [h] [Bsus2] [C] [(A)]

Ref. Odnajduję Cię, [G] [A]
bo Ty znasz i przenikasz mnie. [D] [h]
Odnajduję Ciebie, Panie. [G] [A] [D]
Jesteś blisko mnie, [G] [A]
gdy zasypiam i gdy budzę się. [D] [h]
Jesteś blisko mnie. [G] [A] [C]

1. Nie jestem... /x2
Ref. x2: Odnajduję Cię...

Jezu, nie zostawiasz nigdy mnie. [G] [A] [D] [h]
Jesteś tuż przy mnie. [G] [A] [D]
Niesiesz mnie swą miłością, [G] [A] [D]
abym nie oddalił się. [h]
Abym Ciebie zaniósł innym. /x2 [G] [A] [C]
---
{title:  Już teraz we mnie kwitną Twe ogrody}
{number: 156}
Już teraz we mnie kwitną Twe ogrody, [C] [F] [G]
już teraz we mnie Twe królestwo jest. x2 [F] [d] [G] [(C)]
---
{title:  Z Tobą ciemność nie będzie ciemna}
{number: 157}
Z Tobą ciemność nie będzie ciemna [E] [a] [G] [C]
Wokół mnie [F] [E]
A noc tak jak dzień zajaśnieje [a] [G] [C] [d] [E]
---
{title:  Mrok ogarnął całą ziemię}
{number: 158}

(Solo gitara x2)                    [fis] [E] [cis] [D7+]
                                    [h] [cis] [E] [fis] [(E)]

1. Mrok ogarnął całą ziemię         [fis] [E] [cis] [D7+]
na ulicy cisza.                     [h] [cis] [fis] [E]
Tylko Twoje kroki słychać,          [fis] [E] [cis] [D7+]
Twój płacz i jęk.                   [h] [cis] [E] [fis]

Ref. x2: On przyszedł po to,        [h] [cis] [fis]
by ci pomóc z upadku twego wyjść    [h] [cis] [fis]
Byś nigdy więcej już nie błądził    [h] [cis] [fis]
byś znalazł drogę w życiu tym.      [h] [cis] [fis]

2. Jesteś przecież jeszcze          [fis] [E]
młody.                              [cis] [D7+]
Wiele możesz zdziałać.              [h] [cis] [D7+]
Tylko życie tracisz swoje           [fis] [E] [cis] [D7+]
W różny sposób.                     [h] [cis] [E] [fis]

Ref. x2: On przyszedł po to...      [h] [cis] [fis]

(Solo skrzypce x2)                  [cis] [D7+] [A] [E]
                                    [cis] [D7+] [A]

Jesteś przecież jeszcze             [fis] [E]
młody.                              [cis] [D7+]
Wiele możesz zdziałać.              [h] [cis] [D7+]
                                    [fis] [E] [fis]
---
{title:  Rzekł Pan stało się}
{number: 159}
Rzekł Pan, stało się: Jam Alfa i Omega [D] [Asus4] [A] [e7]
Początek i Koniec [G] [Cadd9]
Ja pragnącemu dam darmo pić ze źródła wody życia

Ref. x2: Pan daje mi pić, Pan daje mi pić, Pan daje mi pić
Ze źródła wody życia.
---
{title:  Zwykły chleb przemieniasz}
{number: 160}
1. Zwykły chleb przemieniasz, Panie, [E]
w Ciało Swe, [A] [E] [(A] [E)]
Zwykły chleb przemieniasz, Panie, [E]
w Ciało Swe, [H7]
Zwykły chleb przemieniasz, Panie, [E]
By nasycić nim bez granic, [A] [E]
By nasycić nim bez granic dzisiaj mnie. [A] [H7] [E] [(A] [E)]

2. Zwykłe wino w Swoją Krew przemienia Bóg, /x2
Zwykłe wino w Krew przemienia, by ugasić serc pragnienia,
By ugasić serc pragnienia ludzi mógł.

3. Otaczamy kołem święty ołtarz Twój, /x2
Otaczamy ołtarz kołem, by z nas każdy w niebie społem,
By z nas każdy w niebie społem stanąć mógł.

4. Bóg jest pełen Swej miłości względem nas, /x2
Bóg jest pełen Swej miłości w naszych sercach brak wdzięczności,
W naszych sercach brak wdzięczności za ten cud.
---
{title:  Abba Ojcze}
{number: 161}
1. Ty wyzwoliłeś nas Panie      [A] [D] [E] [A]
Z kajdan i samych siebie        [A] [D] [E] [E7]
A Chrystus stając się bratem    [Cis] [fis] [D]
Nauczył nas wołać do Ciebie.    [A] [D] [E] [E7]

Ref.: Abba Ojcze,               [A] [D] [A] [E]
Abba Ojcze!                     [A] [D] [A] [E]
Abba, Abba Ojcze                [A] [Cis] [fis] [D]
Abba Ojcze! (Ojcze!)            [A] [E] [A] [E7]

2. Bo Kościół jak drzewo życia w wieczności zapuszcza korzenie
Przenika naszą codzienność i pokazuje nam Ciebie.

3. Bóg hojnym Dawcą jest życia, On wyswobodził nas z śmierci
I przygarniając do siebie uczynił Swoimi dziećmi.

4. Wszyscy jesteśmy braćmi, jesteśmy jedną rodziną.
Tej prawdy nic już nie zaćmi, i teraz jest jej godzina.
---
{title:  Błogosław duszo moja Pana}
{number: 162}
Ref.: Błogosław duszo moja Pana [E]
wszystko, co we mnie, Jego Najświętsze Imię!
Błogosław duszo moja Pana Jego dobroci
nigdy nie zapominaj. [fis7] [A6] [D2] [/x2]

1. On odpuszcza wszystkie twoje grzechy [fis7/9] [A7+]
leczy wszystkie twoje choroby [E]
Okazuje Swoje miłosierdzie On ratuje ciebie od zguby
On napełnia twoje życie dobrem
aż odnowi się twoja młodość, jak u orła
Nie odpłaca według grzechów, [fis7/9]
nie chce wiecznie gniewać się, [fis7/9]
On pamięta żeśmy prochem, [D7+/9]
On najlepiej wie! [H/Dis]

Ref.: Błogosław duszo moja …

2. Tak jak ojciec nad swoimi dziećmi [e7/9] [G7+]
Pan lituje się nad pokornym. [D]
On oddala od nas nasze winy jak daleko wschód od zachodu.
Jak wysoko niebo jest nad ziemią tak jest wielka dobroć dla ludzi,
którzy się Go boją.
Dni człowieka są jak trawa, [e7/9]
Kwitnie On jak polny kwiat. [e7/9]
Kiedy mocniej wiatr zawieje, [C7+/9]
Znika po nim ślad! [A/Cis]

Ref.: Błogosław duszo moja…

Błogosławcie Pana - wszyscy aniołowie
Błogosławcie Pana - wszyscy Jego ludzie
Błogosławcie Pana - wszystkie Jego dzieła
Bło-go-sław-cie Go! O o o o...

Ref.: Błogosław duszo moja Pana… [E]
---
{title:  W Swym Sercu na wieki ukryłeś nas}
{number: 163}
W Swym Sercu na wieki ukryłeś nas, [e] [A] [G] [A]
Odnaleźć Twą miłość już czas. [G] [A] [G]
Podnoszę me dłonie, oddając Ci cześć, [e] [A] [Dsus2] [A] [G]
Mocy moja, uwielbiam Cię. |x2 [e/D] [A4-3]

Ref. Jezu, Serce Twoje schronieniem mym [D] [Asus4] [h/Fis]
Panie, w Sercu Twoim mój dom. [G] [A4-3]
Umiłował mnie Pan [e]
I mogę w Sercu Jego trwać [h]
Umiłował mnie Pan [G] [A]

W Swym Sercu na wieki ukryłeś nas, [e] [A] [G] [A]
Odnaleźć Twą miłość już czas. [G] [A] [G]
Podnoszę me dłonie, [e] [A]
oddając Ci cześć, [Dsus2] [A] [G]
Mocy moja, uwielbiam Cię. |x2 [e/D] [A4-3]

Ref. Jezu, Serce Twoje [D]
schronieniem mym [Asus4] [h/Fis]
Panie, w Sercu Twoim mój dom. [G] [A4-3]
Umiłował mnie Pan [e7]
I mogę w Sercu Jego trwać [h]
Umiłował mnie Pan, na wieki. [G] [A]
Jezu, Serce Twoje schronieniem mym
Panie, w Sercu Twoim mój dom.
Do nas zniżył się Pan, by Serce Swoje oddać nam,
Do nas zniżył się Pan, alleluja.

Ref. Jezu, Serce Twoje…

Umiłował mnie Pan alleluja, alleluja. [G] [C] [A]

Ref. Jezu, Serce Twoje….
---
{title:  Podnieś mnie, Jezu}
{number: 164}
Podnieś mnie, Jezu i prowadź do Ojca [d] [C] [a]
Podnieś mnie, Jezu i prowadź do Ojca [d] [C] [a] [(e)]
Zanurz mnie w wodzie Jego Miłosierdzia [F] [C] [a]
Amen, Amen [d] [C] [d] [d] [C] [a] [d]
---
{title:  Ja wierzę, że to Jezus}
{number: 165}
1. Ja wierzę, że to Jezus [E] [A] [H7]
Wierzę, że On Synem Boga jest [E] [A] [H7]
On zmarł i powstał, aby żyć [E] [A] [H7]
I za cenę śmierci życie dał [E] [A] [H7]

Ref. Wierzę, że jest tu teraz [A] [H7] [E]
(On tu teraz jest!) [cis]
Stoi pośród nas! [A] [H7] [E] [E7]
Ma moc nas teraz uzdrawiać [A] [H7] [E]
(uzdrowienia moc) [cis]
Ma przebaczenia dar. [A] [H7] [E] [(H7)]

2. Ja wierzę Tobie, Panie. Wierzę, że Tyś Synem Boga jest.
Zmarłeś i powstałeś, aby żyć i za cenę śmierci życie dać.

Ref. Wierzę, że tutaj jesteś (Ty jesteś tu) [A] [H7] [E] [cis]
Stoisz pośród nas [A] [H7] [E] [E7]
Masz moc nas teraz uzdrawiać [A] [H7] [E]
(uzdrowienia moc) [cis]
Masz przebaczenia dar [A] [H7] [A] [a6] [E]
---
{title:  Jesteś Królem}
{number: 166}
Jesteś Królem, jesteś Królem [E] [H7] [cis]
Królem jest Bóg! |2x [A] [(H7)]

Podnieśmy wszyscy nasze serca [E]
Podnieśmy wszyscy nasze dłonie [H7]
Stawajmy przed obliczem Pana, wielbiąc Go [cis] [A]
---
{title:  Przyjdź, królestwo Twoje}
{number: 167}
1. Przyjdź, królestwo Twoje [D] [A] [h]
Twoja miłość, o Panie [G]
Jest większa, niż całe zło [A] [D]

Ref.: Jestem Twoim dzieckiem, [D] [G]
Twoim synem, Tyś mnie dziś zrodził [A] [D]

Aaaa… aaaa… aaaa… x2 [B] [C] [D]

2. Ty wyzwoliłeś mnie, Jezu, otworzyłeś mi bramy
Twojego królestwa.

Ref.: Jestem Twoim dzieckiem… Aaaa… aaaa… aaaa…
---
{title:  Jesteś perłą}
{number: 168}
Ref. Jesteś perłą w życiu mym [E]
Skarbem, który darmo jest [fis]
Jezu kochać Cię chcę z całych moich sił [A] [fis]

1. Bo Ty nie zgasisz płomienia [A]
Co dogasa i ledwie się tli [E]
A trzcinę nadłamaną do życia wrócisz znów [A] [fis] [H]
Mówisz do mnie: Żyj! Ja ci daję życie Swe [E] [fis]
Pan mój i Bóg mój [A] [fis] [H]

Ref. Jesteś perłą w życiu mym…

2. Teraz wiem, że choćbym upadał
Ty nie zwątpisz i podasz mi dłoń,
Bo miłość Twoja, Panie, od najwyższych wyższa gór
Jestem dzieckiem Twym, w niebie mam swój dom
Ojcze dziękuję Ci!

Ref. Jesteś perłą w życiu mym…
---
{title:  Lud Twój, Panie, lud pielgrzymi}
{number: 169}
Ref.: Lud Twój, Panie, lud pielgrzymi [D] [A] [h] [D7]
prosi, byś był Światłem. [G] [E] [D] [A]
Byś na drodze do Królestwa [D] [A] [h] [D7]
wzmacniał serca Swoim Ciałem. [G] [E7] [D] [A]
Zostań, zostań wśród nas, o Panie! [fis] [G] [g] [D] [A] [D] [d]

1. Chlebie Życia, Tyś sam jest naszą siłą [d] [g] [d]
i czynisz trudną drogę tak bezpieczną [g] [a7] [d]
Jeśli siły na tym szlaku w nas osłabną, [d] [A7] [d] [D7]
ręka Twoja niech obdarza wciąż nadzieją [g] [E7] [A] [A7]

Ref. Lud Twój, Panie…

2. Twoja Krew niechaj jest napojem mocy
i kieruje zapał kroków w Twoje ślady.
Jeśli radość gaśnie w sercach od słabości,
Twój głos sprawi, że obudzi się w nas świeżość.

Ref. Lud Twój, Panie…

3. Twoje Ciało, o Jezu, rodzi Kościół,
bo uczysz, żeśmy braćmi w pyle drogi.
Jeśli krzywdy niszczą światło Twej Miłości,
z Twego serca płynie nowe przebaczenie.

Ref. Lud Twój, Panie…
---
{title:  Otwórz me oczy, chcę widzieć Jezusa}
{number: 170}

Otwórz me oczy,         [e] [A]
Chcę widzieć Jezusa     [D] [h]
I być bliżej Niego,     [e] [A7]
I kochać goręcej.       [D] [D7]
Otwórz me uszy          [e] [A7]
I naucz mnie słuchać.   [D] [h]
Otwórz me oczy,         [e] [A7]
chcę widzieć Jezusa     [D]
                        [G] [g] [D]

---
{title:  Duchu Święty, błagam nie zwlekaj!}
{number: 171}
Ref. Duchu Święty, błagam nie zwlekaj! [D] [D7+] [G] [A]
Duchu Święty, błagam przyjdź! [D] [D7+] [G] [A]

1. Rozogniłeś mnie pragnieniem [G]
Teraz zalej je wodą z Twego źródła [A] [h7]
Zobacz, jęczę i wzdycham, [G]
Rodząc się na nowo [A] [h7] [A]
Teraz wiem, tylko Ciebie mi trzeba /x3 [D] [A] [G] [D] [fis] [G] [D] [A] [h]
Wszystko inne to detale i ozdoby [G] [A]

Ref. Duchu Święty…

2. Boski Wichrze, przyjdź i rozkrusz kamień mego grzechu
Rozbij mury niewiary i przekonaj mnie o Prawdzie.
Teraz wiem, tylko Ciebie mi trzeba |x3
Wszystko inne to detale i ozdoby

Ref. Duchu Święty…
---
{title:  Nie, nie, nie lękaj się}
{number: 172}
Ref.: Nie, nie, nie lękaj się [A] [D] [E]
Nie, nie poddawaj się [A] [D] [E]
Bo dobry Bóg jest tu [A]
On ze wszystkiego wyciągnie cię! [D] [E] [fis] [cis] [D] [E]

1. Zapytasz: Po co świat? [A] [(E] [D)]
Zapytasz: Po co ja? [A] [(E] [D)]
Zauważ może, że Ktoś stworzył cię [A] [D] [E]
Z miłości, bo tak kocha cię. [fis] [cis] [D] [E]

2. Kolejny wieczór sam, powoli dosyć masz
Usiądź może, bo Ktoś czeka całe życie, aby spotkać cię.
3. Tak czasem trudno wstać, z radością życie brać
Przebacz może, będzie łatwiej żyć i kochać tak, jak tego chcesz!
---
{title:  Za to, że mnie ukochałeś}
{number: 173}
1. Za to, że mnie ukochałeś [D] [h]
Boską miłością Swą [e] [A7]
Za to, że się zatopiłem [D] [h]
W nieskończoności Twej, [G] [A7]
Gdy mnie spytasz, kim jestem [D] [h]
Odpowiem – imię moje brzmi: Dziękuję Ci. [e] [A7] [e] [A7]
Bo za wszystko chcę Tobie dziękować [D] [h] [e]
Dzięki Ci, dzięki Ci [A] [A7] [D] [(H7)]

2. Kiedy dojdę już do Ciebie, [E] [cis]
Do Twych niebieskich bram, [A] [H7]
Wtedy w Tobie się zagubię [E] [cis]
W Tobie zagubię się [A] [H7]
I gdy spytasz, kim jestem, odpowiem: [E] [cis]
Imię moje brzmi: Dziękuję Ci [fis] [H7] [fis] [H7]
Bo za wszystko chcę Tobie dziękować [E] [cis] [fis]
Dzięki Ci, dzięki Ci. [H7] [E] [A] [a] [E]
---
{title:  Jezu,Tyś wszystkim dla mnie jest}
{number: 174}
Jezu, Tyś wszystkim dla mnie jest, [D] [Asus4] [G] [A]
Jak żyć bez miłości Twej? [D] [Asus4] [G] [A]
Jezu, otwórz me oczy, [D] [Asus4] [G] [A]
Bym ujrzeć mógł [D] [Asus4]
Twej miłości cud. [G] [A] [Dsus2]

Ref. Przyjdź i napełnij nas [G] [A] [D]
Mocą Bożą co dnia [G] [A] [h]
Tyś pokoju Księciem, Lekarzem dusz [G] [A] [fis] [h]
Jesteś Światłem, co w ciemnościach [G]
nie gaśnie. [A]
---
{title:  Pan mnie strzeże}
{number: 175}
Pan mnie strzeże, Pan mnie strzeże. Czuwa [E] [A]
nade mną Bóg, On jest moim cieniem. [cis] [H7]
Ref. Czuwa nade mną Bóg, /x3 Mój Bóg! [E] [A] [cis] [H7]
---
{title:  W Tobie cała nadzieja ma}
{number: 176}
Ref. Aaa, alleluja, w Tobie cała nadzieja ma [f] [b] [C]
Alleluja, alleluja, tak, w Tobie nadzieja ma! [f] [b] [C] [f]

1. Kiedy duch mój omdlewa, serce zamiera, dusza pragnie Cię.
jak zeschła ziemia, ogrodu ulewa. Prędko wysłuchaj mnie.

2. Twój dobry Duch mnie wyprowadzi,
Po równej ziemi zaprowadzi mnie.
Bo wiem, że ci, co we łzach sieją, żąć będą w radości.

3. Z głębokości wołam do Ciebie, [fis]
Nakłoń Swe ucho, głośno błagam Cię. [h7] [Cis]
Bo jeśli zachowasz pamięć o grzechach, [fis]
Któż ostoi się? [h7] [Cis] [fis]

4. Gdybym szedł przez ciemną dolinę,
Zła nie ulęknę, nie ulęknę się!
Bo wiem, że Ty, choć jest ciemno, Zawsze jesteś ze mną!
---
{title:  To mój Pan wiele mi uczynił}
{number: 177}
To mój Pan, wiele mi uczynił [a] [d] [g]
On moim Bogiem [G] [C] [C] [F]
To mój Pan, wiele mi uczynił [a] [d] [g]
On mnie uzdrowił [E7] [a] [A7] [d]
---
{title:  Niech będzie chwała i cześć}
{number: 178}
Niech będzie chwała i cześć i uwielbienie [E] [A]
Chwała i cześć Jezusowi! [E] [H7]
Chwała, niech będzie chwała. [E] [A] [a]
Tak, Jemu chwała i cześć! [E] [H7] [E]
---
{title:  Kocham Twoją wolę, Panie}
{number: 179}

1. Kocham Twoją wolę Panie, [h] [Fis]
jeszcze bardziej drzazgi małe, [D] [A]
których przyjąć sercem nie potrafię. [h] [Fis] [h]
Moje łzy na rzęsie przyjmij, [h] [Fis]
ręce złożone złącz na zawsze, [D] [A]
niech życie moje wielbić Ciebie zacznie. [h] [Fis] [h] [H7]

Ref.: Znów wstaję i biegnę do Ciebie, [e] [A]
kolana zdarte krwawią jeszcze. [D] [h]
Ach Panie płacze serce me, [E] [A7]
wszak ranić Twej miłości nie chcę. /2x [D] [D7] [(h)]

2. Znajdź mnie Boże w nocy serca, w labiryncie myśli moich,
których nie mam siły związać w uśmiech.
Pomnij na nieufność moją, pomóż mi uprzątnąć wnętrze.
Czy już odpocząć możesz Panie we mnie?

Ref.: Znów wstaję i biegnę do Ciebie,
naciskam klamkę wszak z mojej strony.
Ach, Panie, tak wierzyłem, że przyjdziesz i biło serce moje. (2x)

3. W niepewności mnie zostawiasz, potem nagle wznosisz serce,
aż na szczyt milczenia tajemnicy.
Potem nagle zbijasz z tropu i wyciskasz z serca wszystko,
jestem coraz słabszy, lecz tak blisko.

Ref.: Znów wstawać mi każesz, Chryste,
zlituj się, już siły mi brakuje.
Przecież kochasz Swe stworzenie.
Od nowa wdrapać się na szczyt?
Zgoda, więc wstaję i biegnę do Ciebie...
---
{title:  Godzien chwały jest Baranek}
{number: 180}
1. Godzien chwały jest Baranek [C] [g]
Ten, co poszedł na śmierć. [B] [F]
Ten, co oddał życie Swoje
Godzien przyjąć cześć.

Godzien chwały jest Baranek
Święty, Święty jest Bóg
Temu, który siedzi na tronie
Śpiewam nową pieśń

Ref. Święty, Święty, Święty [C]
jest Pan Bóg wszechmogący [g]
On był i jest, i przyjdzie znów [B] [F]
Z całym stworzeniem śpiewam
Królowi Królów cześć
Tyś wszystkim dla mnie jest i Ciebie uwielbiam

2. Pełen piękna, odziany w tęczę
błyskawic blask i grzmotów huk
Błogosławieństwo mądrość,
wdzięczność i moc, i chwałę
niech przyjmie Pan, potężny Bóg

Ref. Święty, Święty, Święty...

3. Staję w zachwycie, staję w podziwie
gdy wspominam imię Twe
Twe imię żywą wodą,
oddechem mym i mocą
Niepojęty, wielki Bóg

Ref. Święty, Święty, Święty...
---
{title:  Oddaję Ci życie swe}
{number: 181}
Ref. Oddaję Ci życie swe [D] [e]
Ty Panie wiesz, jakie jest [A4-3] [h] [A]
za wszystko przepraszam Cię, [D] [e]
co było grzechem i złem [A4-3] [h] [A]

1. Oczyść Panie duszę mą [D] [e]
zapomnij mi moje winy [A4-3] [h] [A]
obmyj mnie Swą świętą krwią [D] [e]
podaruj mi nowe życie [A4-3] [G] [A]

Ref. Daj Ducha świętego mi
by odtąd prowadził mnie
rozpalił dziś w sercu mym
ognisko miłości Twej

2. Przyjdź zamieszkaj w domu mym
z Twą łaską i miłosierdziem
otocz mnie ramieniem Swym
bo ja...

Ref. Oddaję Ci życie swe...

3. Wybawiłeś duszę mą
umarłeś za moje winy
Jezu jesteś Panem mym
Zbawicielem mym

Ref. Daj Ducha świętego mi…
---
{title:  Jestem cały Twój}
{number: 182}
Jestem cały Twój, Twym ogniem płonę. [C] [(a7/9)]
jestem cały Twój. [F7+]
Widzę Twoją twarz, słyszę Twój głos,
trzymam rękę Twą, nie puszczę nie puszczę już.
---
{title:  Z okrzykiem radości wracamy na Syjon}
{number: 183}
1. 2x Z okrzykiem radości [G] [D]
wracamy na Syjon [C] [D]
W korowodzie chwały, tańcu uwielbienia
Krzyczymy z uciechy, bo nasz Pan powraca
Góry mkną w podskokach, zakwita pustynia

Ref. Wyśpiewajmy nową pieśń Panu [G] [C] [D] [G]
Ludu Pański, Rodzie Królewski
Ciesz się Panem, o Izraelu
Odkupieniem raduj się ziemio

2. Przodem idą starcy, na końcu dziewczęta
Weseli młodzieńcy mocno klaszczą w dłonie
Dźwięczą pięknie harfy, tańczą małe dzieci
Rozbrzmiewają głośno bębny na Syjonie

Ref. Wyśpiewajmy nową pieśń Panu…

Bridge: Powrócą na Syjon ludy [e] [H7]
i oddadzą Panu chwałę
będą śpiewem chwalić Pana
tańcem wielbić Jego imię

Powrócą na Syjon ludy
i oddadzą Panu chwałę
będą śpiewem chwalić Pana
tańcem wielbić swego Króla [e] [D7]

Ref. Wyśpiewajmy nową pieśń Panu...

---
{title:  Mizerna, cicha}
{number: 184}
1. Mizerna, cicha, stajenka licha, [a] [h7/5-] [a] [E7]
Pełna niebieskiej chwały. [F] [d] [a] [E7]
Oto leżący, przed nami śpiący [a] [h7/5-] [a] [E7]
W promieniach Jezus mały. [F] [E+] [a] [F7]

2. Nad nim anieli w locie stanęli [b] [c7/5-] [b] [F7]
I pochyleni klęczą [Ges] [es] [b] [F7]
Z włosy złotymi, skrzydły białymi, [b] [c7/5-] [b] [F7]
Pod malowaną tęczą. [Ges] [F+] [b] [Fis7]

3. Wielkie zdziwienie, wszelkie stworzenie [h] [cis7/5-] [h] [Fis7]
Cały świat orzeźwiony. [G] [e] [h] [Fis7]
Mądrość Mądrości, Światłość Światłości, [h] [cis7/5-] [h] [Fis7]
Bóg - Człowiek tu wcielony! [G] [A] [H]
---
{title:  Przyjdź jak deszcz (A. Gorączkowska)}
{number: 185}
1. Przyjdź jak deszcz ożyw dziś [cis] [A]
suchą ziemię naszych serc [E] [H]
Przyjdź jak deszcz na spragniony świat [cis] [A] [H]
Dotknij nas tak jak wiatr rozpędź smutek, otrzyj łzy
zabierz tam, gdzie się w radość zmienia strach

Bridge: Wszystko dziś nowe staje się [fis] [A] [H4-3]
Panie, przyjdź i napełnij mnie!

Ref. Przyjdź jak deszcz [cis] [A]
do spragnionych serc [E] [H]
tak pragniemy Ciebie, Panie
niech Twa moc dziś objawi się, pokaż swoją chwałę!
 [(A)]
2. Przyjdź jak deszcz, Panie nasz, obmyj gorycz, żal i ból
Pozwól dziś niech nadzieja kwitnie w nas.
To, co złe zniknie gdzieś, nowy dzień nastaje już
Jesteś jak słońca blask w pochmurny czas.
---
{title:  Niegodny}
{number: 186}
Ref. Niegodny jestem Panie [d]
przyjąć Cię do mej duszy, lecz niech [B] [g]
to wyznanie niech Cię żal mój wzruszy. [A7]
Pociesz mnie przebaczeniem, [d]
daruj mi winy, zbrodnie, [B]
I uświęć Swym wejrzeniem, [g]
bym Cię przyjął godnie. [A7]

1. Dzieci, niegodne tak wielkiej ofiary, [d] [C]
Z Twego stołu dary biorą, [g] [A7]
Ręce do Ojca podnoszą po dary [d] [C]
I z ufnością, i z pokorą. [g] [A7]
Panem Tyś naszym i Ojcem na wieki, [d] [C]
Chociaż mali pobłądzimy, [g] [A7]
Przecież spod Twojej nie wyjdziem opieki, [d] [C] [B] [a]
Gdy Cię pośród nas czujemy. [e7/5-] [A] [A+]

2. My za Chrystusa idziemy przykładem
Czy w nieszczęściu, czy w niedoli.
On nam wytyczył i drogi, i szlaki,
Jak żyć według Ojca woli.
Boży Baranku co gładzisz grzech świata,
Aby lud Twój żył bezpieczny,
Uproś nam wiarę i miłość do brata,
Daj nam pokój, pokój wieczny.
---
{title:  Chwała Bogu Ojcu}
{number: 187}

Chwała Bogu Ojcu, w chwale Jego Syn [e] [D] [e] [D]
Chwała Tobie Duchu, [e] [D/Fis]
tworzysz jedno w Nich. [C/G] [D/A] [e/H]
---
{title:  Chwała Panu i cześć}
{number: 188}

Ref. Ooo... Chwała Panu i cześć [C] [G] [a] [C] [F] [G] [D] [A] [h] [D] [G] [A]
Ooo… Chwała Panu i cześć [d] [A] [d] [F] [G] [C] [e] [H] [e] [G] [A] [D]
Ooo… Chwała Panu i cześć [a] [E] [a] [F] [G] [C] [h] [Fis] [h] [G] [A] [D]
Chwała Panu i cześć [F] [G] [C] [G] [A] [D]

1. Śpiewaj Panu nową pieśń, grajmy Panu radujmy się.
Niech cała ziemia wielbi Go!

2. Błogosławiony jest nasz Pan, nasza siła i moc.
Śpiewajmy mu dziękczynną pieśń!

3. On ze mną jest, nie lękam się. On, moja moc i moja pieśń.
Dziękujmy Mu, bo dobry jest!

4. Niechaj słońce śpiewa Mu. Ogniu i żarze, śpiewajcie Mu.
Rosy śniegi, śpiewajcie Mu!

5. Morza i góry, śpiewajcie Mu. Rośliny, śpiewajcie Mu.
Niechaj to, co żyje, śpiewa Mu!

6. Źródła, śpiewajcie Mu. Ptaki, śpiewajcie Mu.
Niech cała ziemia wielbi Go!

7. Dni i noce, śpiewajcie Mu. Ranne zorze, śpiewajcie Mu.
Gwiazdy, śpiewajcie Mu!

8. Synowie ludzcy wielbią Go. Słudzy Pańscy chronią Go.
Pokorni sercem wielbią Go!

9. Kapłani Pana chwalcie Go, z ufnością śpiewajcie Mu.
W świecie uwielbiajcie Go!

10. We wszystkich słowach wierny jest. We wszystkich dziełach Święty jest. Jest blisko wzywających Go.
---
{title:  Chwalcie Pana niebios}
{number: 189}

Ref. Chwalcie Pana Niebios [e]
Chwalcie Go na cytrze
Chwalcie Króla świata, [D]
bo On Bogiem jest [C] [D] [e]

1. Chwal duszo moja Pana mego Króla [e]
Chcę chwalić Pana, jak długo będę żył [D] [C] [D] [e]
Chcę śpiewać memu Bogu, póki będę istniał [e]
Chcę Go wysławiać, śpiewać Alleluja! [D] [C] [D] [e]

2. Szczęśliwy ten, któremu Pan jest pomocą
Kto ma nadzieję w Panu Bogu swym
W Bogu, który stworzył niebo i ziemię
Wszystko, co żyje śpiewa Alleluja!

3. Pan Bóg króluje, wesel się ziemio
Bóg Twój Syjonie przez pokolenia
On dał Ci życie, On da ci wszystko
Śpiewaj Mu wysławiaj Go Alleluja!
---
{title:  Wszystkie narody klaskajcie w dłonie}
{number: 190}

Wszystkie narody klaskajcie w dłonie [D]
Wykrzykujcie Bogu radosnym głosem, [h]
Bo Pan Najwyższy jest [G]
Królem nad całą ziemią. [A] [D] [(A)]

Ref. Śpiewajcie, wszystkie narody [D]
Śpiewajcie, radosnym głosem [h]
Śpiewajcie, Królowi [G] [A] [D] [(A)]
---
{title:  Hymn do Ducha Świętego}
{number: 191}
O Stworzycielu, Duchu, przyjdź,
Nawiedź dusz wiernych Tobie krąg.
Niebieską łaskę zesłać racz
Sercom, co dziełem są Twych rąk.

Pocieszycielem jesteś zwan
I najwyższego Boga dar.
Tyś namaszczeniem naszych dusz
Zdrój żywy, miłość, ognia żar.

Ty darzysz łaską siedemkroć,
Bo moc z prawicy Ojca masz,
Przez Ojca obiecany nam,
Mową wzbogacasz język nasz.

Światłem rozjaśnij naszą myśl,
W serca nam miłość świętą wlej,
I wątłą słabość naszych ciał,
Pokrzep stałością mocy swej.

Nieprzyjaciela odpędź w dal
I Twym pokojem obdarz wraz.
Niech w drodze za przewodem Twym,
Miniemy zło, co kusi nas

Daj nam przez Ciebie Ojca znać,
Daj, by i Syn poznany był,
I Ciebie, jedno Tchnienie Dwóch,
Niech wyznajemy z wszystkich sił.

Niech Bogu Ojcu chwała brzmi,
Synowi, który zmartwychwstał,
I Temu, co pociesza nas,
Niech hołd wieczystych płynie chwał.
Amen.
---
{title:  O, Zbawcza Hostio}
{number: 192}
O Zbawcza Hostio godna czci,
Co lud do niebios wiedziesz bram:
Znój srogi nęka wiernych Ci,
Daj siłę, pomoc ześlij nam.

Jednemu w Trójcy Władcy ziem,
Niech będzie chwała w każdy czas.
Niech On wieczystym życiem swym.
W Ojczyźnie rajskiej darzy nas. Amen.
---
{title:  Nie mądrość świata tego}
{number: 193}
Ref. Nie mądrość świata tego,
Lecz Pana ukrzyżowanego
Głosimy, aż przyjdzie znów. /2x

1. Bo Chrystus Jezus skałą serca mego
Odsunął kamień, serce z Ciała dał mi swego,
By nas na nowo zrodzić wstąpił w niebo,
Aby Świętego Ducha zesłać nam, dlatego:

2. Zbawienie swoje z wiarą spożywajcie,
Zrodzeni w ogniu z Ducha, życiem rozgłaszajcie,
Że Tego, któregośmy krzyżowali
Bóg wezwał z martwych i do swojej chwały wziął stąd.

3. Idźcie i głoście Syna Boga Panem!
Krwią Jego imię wasze w niebie zapisane.
W Jego miłości wszystkich zanurzajcie,
Królestwa Jego: "Niechaj przyjdzie" przyzywajcie.
---
{title:  Blisko, blisko, blisko jesteś, Panie}
{number: 194}
Blisko blisko, blisko jesteś, Panie, [h] [G7+]
blisko tak, że czuję tchnienie Twe [e] [fis]
i przychodzisz do mnie, już dotykasz mnie, [h] [G7+]
chlebem przebaczenia karmisz moją duszę. [e] [e7] [Fis]
---
{title:  Boże wieczny, Boże żywy}
{number: 195}
1. Boże wieczny, Boże żywy, [D5]
Odkupicielu prawdziwy,
Wysłuchaj nasz głos płaczliwy.

2. Któryś jest na wysokości, [D5]
schyl nieba, użycz litości,
spuść się w nasze głębokości.

3. O, niebieskie góry srogie, [D5] [G5] [D5]
spuśćcie rosę na ubogie, [D5] [C5]
dajcie nam zbawienie drogie. [C5] [A5] [D5]

4. Nie trzymajcie Przejrzanego,
Chmury, swoim dżdżem naszego
Przynieście Sprawiedliwego.

5. Przyjdź co rychlej, Miłosierny; [d] [G] [d]
O Boże, człowiek mizerny [d] [C]
Ciebie czeka, Tobie wierny. [C] [a7] [d]

6. A my krzykniem głosy swymi
by nas Pan Bóg ze świętymi
złączył z poczty anielskimi.
---
{title:  Ciebie pragnie dusza moja}
{number: 196}
Ciebie pragnie dusza moja [h] [G] [D] [A]
w suchej ziemi pragnie Cię. x2

Ref. Przyjdź i zajmij miejsce swe
na tronie naszych serc,
przyjdź i zajmij miejsce swe na tronie.
---
{title:  Pastorałka od serca do ucha}
{number: 197}

1. Zaśpiewajmy pastorałkę od serca do ucha [a] [G] [C] [G]
Gdy za oknem biała śniegu, [a] [G]
poducha, poducha [C] [G]
Już Pan Jezus w żłobie leży [F] [G]
Na wyścigi każdy bieży [C] [d]
Zobaczyć Malucha, Malucha /x2 [a] [E] [a] [(A)]

2. Powitajmy maleńkiego Jezusa z radością
A Maryję matkę Jego, z godnością, godnością
Niech mu wszystkie dzwony grają
Aniołowie zaśpiewają
Wesołą nowinę, nowinę

3. Dzieciąteczko tam na sianie cicho śpi, cicho śpi
A Maryi z oczu płyną szczęścia łzy, szczęścia łzy
Okruszyno moja miła
W bólu Ciebie porodziłam
Witaj mi, witaj mi, witaj mi

4. My zagrajmy żwawą nutę na flecie, na flecie
I uczcijmy jak najlepiej to Dziecię, to Dziecię
Świeci gwiazda migotliwie
Narodził się Bóg prawdziwie
Na świecie, na świecie, na świecie
---
{title:  Powstań i świeć}
{number: 198}

1. Powstań i świeć oto tutaj twe światło, [d] [A]
chwała Pana nad tobą rozbłyska: /x2 [A7] [d]
Podnieś twoje oczy i popatrz w dal [D7] [g7]
serce twoje zadrży z radości. [C7] [e7/5-] [A7]
Oto twoje dzieci z daleka wracają, [d] [A]
córki twe na rękach niesione. [A7] [d]

Ref. Jeruzalem, Jeruzalem, [D7] [g7]
odrzuć daleko już twój smutek. [F] [g] [A]
Jeruzalem, Jeruzalem, [D7] [g7]
śpiewaj, tańcz przed twym Bogiem. [d] [A7] [d]

2. Do twojego światła nadciągną narody
królowie do blasku twego wschodu. /x2
Mnogość wielbłądów zaleje cię,
zza morza napłyną bogactwa.
przybędą z Efy, ze Saby, z Madianu
nucąc razem hymny na cześć Pana.

3. Obce narody naprawią twe mury,
ich królowie będą ci służyli. /x2
będą źródłem twojej radości,
nazwą ciebie miastem Boga.
Dni twojej żałoby na zawsze skończone,
pośród ludów będziesz mnie wychwalać.
---
{title:  Przybądź, Święty}
{number: 199}

1. Języku ognia przyjdź [H2] [D2]
i płoń w naszych sercach [E2] [H2]
Duchu Miłości przemieniaj nas [E2] [H2]
Swe pocieszenie nam daj i nim wypełniaj [H2] [D2] [E2] [H2]
Duchu Nadziei umacniaj nas [E2] [H2]

Ref. Przybądź Święty Niepojęty [gis7]
z Nieba na nas tchnięty Duchu [E] [H]
Rozpal Świętą, Niepojętą [gis7]
z Nieba na nas tchniętą miłość [E] [H]
Nią ogarnij nas, Amen [E] [H]

Nią ogarnij nas, Amen [E] [H]

2. Obłoku jasny ochroń nas przed gniewem Złego
Daj soli smak i światłu blask
Nie daj się ukryć miastu Boga Przedwiecznego
Osłaniaj je, strzeż jego bram.

Ref. x2 Przybądź Święty Niepojęty...
Nią ogarnij nas, Amen

3. Pocieszycielu radość Swą ześlij z Nieba
Wszak Dobry ją obiecał nam
Przerwij milczenie w Imię Syna Słowa Chleba
Najświętsze Tchnienie wołaj w nas

Ref. x2 Przybądź Święty Niepojęty...
Nią ogarnij nas, Amen

Solo

Ref. x2 Witaj Święty Niepojęty...
Nią ogarnij nas, Amen
---
{title:  Jego Miłość}
{number: 200}

Jego Miłość zakrywa grzech [e] [h]
Ona nie pamięta złego [C] [G] [D/Fis]
Jego Krew największy dar dla każdego. [e] [h] [C] [a7/9]
Jego Imię potężna moc,
Jezus drogą, prawdą, życiem.
Emmanuel, Bóg pośród nas, Odkupiciel.

Ref. Bóg w łasce swej do nas zniżył się [e] [h]
pozostawił chwałę nieba. [C] [G] [D/Fis]
Jezus wycierpiał każdy trud, [e] [h]
żebyś żył i już się nie bał. [C] [a7/9]

Jego Miłość zakrywa grzech…
Ref. x2 Bóg w łasce swej…

Bridge x2 O… Jezus Królem królów jest [e] [h] [C] [G] [D/Fis]
O… Nasza wolność tylko w Nim [e] [h] [C] [G] [D/Fis]
 [e]
Tylko Tobie należy się chwała, [a] [C] [e]
Tylko Tobie należy się cześć, [h]
Tylko Tobie będziemy się kłaniać, Jezu! [C] [G] [D/Fis]

Ref. Bóg w łasce swej…
…żebyś żył [C7+]
---
{title:  Jestem tego pewien}
{number: 201}

Jestem tego pewien, nic nie oddzieli nas    [a7/9]
Od Miłości Twojej Panie / x2                [F7+] [G/A]

Ani śmierć,                         [F]
Ani życie, ani aniołowie            [G]
Potęgi niebieskie,                  [a]
teraźniejszość, przyszłość, moce.   [G] [C]
Ani wysokość                        [F]
i głębokość, stworzenie też,        [G]
nic nie oddzieli nas                [a] [G] [C]

---
{title:  Powstań przyjaciółko ma}
{number: 202}

Powstań przyjaciółko ma [e]
Piękna ma i pójdź, [e]
bo oto minęła już zima, [a] [D]
deszcz ustał i przeszedł, [G] [e]
na ziemi widać już kwiaty, [C] [a]
nadszedł czas przycinania winnic. [e] [H7] [e]

Drzewo figowe wydało zawiązki owoców [e]
i winnic krzewy kwitnące już pachną [a] [e] [fis7/5-] [H7] [e]
---
{title:  Mroźna cisza}
{number: 203}

1. Mroźna cisza świat okryła [h] [e]
i na ziemię noc spłynęła, [A] [D]
tylko gwiazda świeci. [e] [Fis7] [h] [(A)]
W ciemnej szopie Maria miła [D] [G] [A]
tuli do snu Dziecię. [D] [A] [D]

Luli, la-a-aj, luli, luli, luli laj, [D] [G] [A]
luli, la-a-aj, luli, luli, luli laj, luli laj. [D] [e] [Fis7] [h]

2. Pochowały się ptaszęta
w ciepłą słomę pod strzechami.
Dzieci śpią w łóżeczkach.
Zaśnij, prosi Matka Święta, zaśnij mój Syneczku.
Luli, la-a-aj...

3. Skrzy się mrozem śnieg na polach,
już ucichły leśne szmery.
Drzew wiatr nie porusza.
Maria płacze nad niedolą małego Jezusa
Luli, la-a-aj…
---
{title:  Hymn ŚDM Panama 2019}
{number: 204}

(wstęp) [G] [D] [h] [A] [x2]
My jako pielgrzymi przybywamy dzisiaj tu [D] [h]
z różnych kontynentów, miast i wsi [G] [A]
Dobrą Nowinę chcemy z mocą głosić światu  G A h
każdy z nas jest Twoim misjonarzem [G] [A]

Tak jak Maryja chcemy odpowiedzieć "tak" [D] [A/Cis] [h] [D]
na Twe wezwanie i Twój plan [G] [A]
Niebo się raduje i rozbrzmiewa śpiewem [G] [Fis7] [h7] [E7]
Cała Ziemia chwali Twoje dzieła [G] [A]

Ref. Oto ja - służebnica Pańska [D] [A] [h] [D]
Niech mi się stanie według Słowa Twego x2 [G] [h] [A4-3]

Służebnicą jestem, córką Twoją jestem [D] [D7]
Synem Twoim jestem [G] [A]

Tak jak Maryja chcemy teraz razem pójść [D] [A/Cis] [h] [D]
jako Kościół niosąc Twoją Miłość [G] [A]
Młodzi świadkowie i uczniowie [G] [Fis7] [h7] [E7]
pełni wiary, radości, powołania! [G] [A]

Ref. Oto ja - służebnica Pańska...

Nie lękajcie się! Nie bójcie się! [Fis7] [G]
zanieść światu Bożą Miłość [e7] [h] [A]
oddać Mu życie swe, tak jak Maryja [Fis7] [G]
wskazuje nam, jak służebnicą być [e7] [G] [h] [A]

Ref. Oto ja - służebnica Pańska...
---
{title:  Memu Bogu, królowi}
{number: 205}

Ref. Alleluja, alleluja,            [B] [C] [a] [B]
Alleluja amen                       [g] [a] [G]
Alleluja, alleluja,                 [B] [C] [a] [B]
Alleluja amen.                      [B] [C] [d]

Memu Bogu, Królowi,                 [d] [C]
będę śpiewał tę pieśń               [a] [d]
Teraz zawsze na wieki amen. /x2     [B] [C] [d]

---
{title:  Miłość uzdalnia mnie}
{number: 206}
 [(A] [G] [D] [G)] [x3] [E]
1. Kiedy byłem całkiem daleko [A] [E]
Nie umiałem do Ciebie zbliżyć się [C] [D]
Ty wyzwoliłeś mnie z grzechu mego [A] [E]
Uzdrowiłeś zranione serce me [C] [D]
Niech mnie ogarnie, [C]
Panie, łaska Twa [D]
Niech Twoja moc przemienia mnie [G] [e]
Pełen miłości Twej, zaśpiewam Tobie pieśń! [C] [D] [E]

Ref. Śpiewam, póki starczy mi sił [E] [A]
Będę śpiewał Tobie pieśń [cis] [D]
Ja pragnę śpiewać aż do końca mych dni [E] [A]
Twoja Miłość uzdalnia mnie. [D11] [E]
 [G] [(A] [G] [D] [G)] [x3] [E]
2. Gdy radości, kiedy cierpienia, ja do Ciebie podnoszę ręce swe
Bo tylko w Tobie jest życia pełnia, czyste serce
z radością wielbi Cię. Niech mnie ogarnie...

Ref. Śpiewam… Dlatego śpiewam…
Bridge: Pełen łaski i miłosierdzia Bóg [(E] [D)] [C] [D] [A]
Strzeże moich krętych życia dróg [C] [D] [A]
Roześmiany, rozradowany będę śpiewać Mu [C] [D] [G] [A]
Któż jak On by zbawić mnie mógł? [C] [D] [E]
Ref. Śpiewam… Dlatego śpiewam
---
{title:  Panie Jezu, przyjdź}
{number: 207}

                                            [G] [D/Fis] [fis0]
                                            [e] [Es] [e0]
                                            [C] [c]
                                            [G/H] [A7] [D7] [G]
1. Panie Jezu, przyjdź, serce swe otworzę [G] [D/Fis]
Chcę, byś mieszkał w nim, [a] [C]
ze mną zawsze był [D] [D7]
Tyś największy skarb, mojej wiary płomień [G] [D/Fis]
Pragnę z Tobą iść, kochać tak, jak Ty [a] [C] [D] [D7]

Ref. Tak wiele dałeś mi, [G] [D/Fis]
a ja nie umiem przyjść [e] [e7]
By poprzez grzechu mrok [a] [C]
podać Ci swą dłoń [D] [D7]
Cóż mogę Tobie dać za tyle w życiu łask? [G] [D/Fis] [e] [e7]
Więc serce Jezu weź, chcę by kochało Cię. [a] [C] [D] [D7]

2. Biegnę ścieżką dnia, szukam Twojej twarzy
I nie widzę jak obok cierpisz sam
Panie, pomóż, przyjm modlitwę moją
Chcę, by Miłość Twa napełniała

Ref. Tak wiele dałeś mi…
---
{title:  Jahwe}
{number: 208}

1. Tyle światła wokół mnie, [Es-sus2]
kiedy jesteś przy mnie wiem, [Es-sus2/G]
nie muszę się bać. [As-maj9]
Kto mi krzywdę zrobi, gdy na ratunek spieszysz Ty,
nie muszę się bać. Świstu wypuszczonych strzał ani huku wielkich dział, nie muszę się bać.
Bo Ty podniesiesz mnie, [B] [B/D]
skryjesz w obłoku Twojej chwały [As/C] [f7] [As]

Ref. Jahwe – Ty jesteś światłem, [B] [c7] [f7/11]
świecisz najjaśniej, Święty [As-maj9]
Jahwe nieopisane piękno [B] [c7] [Des-maj9] [f7] [As]
Jahwe – moje zbawienie, znajdę [B] [c7] [f7/11]
schronienie w domu Twym [As-maj9]
Przez wszystkie życia mego dni [B] [B7sus4]
 [Es-sus2] [Es-sus2/G] [As-maj9]
2. O to jedno proszę Cię i jednego tylko chcę, zobaczyć Twą twarz. Prowadź mnie najprostszą z dróg, bym Cię na niej spotkać mógł. Zobaczyć Twą twarz. Tyle światła wokół mnie. Jesteś coraz bliżej wiem. Zobaczę Twą twarz. Gdy Ty podniesiesz mnie,
Skryjesz w obłoku Twojej chwały.

Ref. Jahwe – Ty jesteś światłem...
 [c7] [g7] [As-maj9] [Es-sus2]
Miej nadzieję w Panu...

On cię nigdy nie porzuci, On cię nigdy nie opuści,
nawet jeśli zrobią to najbliżsi On przygarnie cię.
Gdy napotkasz swoich wrogów, ludzi z nienawiści chorych,
co potrafią kłamać w żywe oczy, On ochroni cię.
Niech się wzmocni twoja wiara, niech wypełni cię odwaga
w sercu nie do pokonania niech światło świeci się.

Ref. Jahwe – Ty jesteś światłem…
---
{title:  Nie chcę w innym miejscu być}
{number: 209}

Nie chcę w innym miejscu być [D]
Nie chcę w innym miejscu być [G]
Nie chcę w innym miejscu być [h]
Lecz w miłości Twej, w miłości Twej [G]

Więc rozpal ogień w duszy mej [D]
Niech płonie, niech pochłonie mnie [G]
Boże, więcej Ciebie chcę [h]
Boże, więcej Ciebie chcę [G]
---
{title:  Duchu Święty, Tchnienie Ojca}
{number: 210}

Duchu Święty, Tchnienie Ojca,   [F] [B]
Dawco życia.                    [F]
Duchu Święty, Źródło wody       [F] [B]
żywej w nas.                    [F]

Ref. Tak pragniemy Ciebie Panie,    [d] [a]
jak spękana ziemia deszczu,         [B] [F/A]
jak pustynia kropli wody,           [B] [F/A]
Duchu, przyjdź.                     [C]

Duchu Święty, Tyś Mądrością     [F] [B]
niezmierzoną.                   [F]
Duchu Święty, Ty oświetlasz     [F] [B]
drogi nam.                      [F]

Ref. I prowadzisz nas do domu,
gdzie mieszkanie przed wiekami
przygotował dla nas Ojciec, Duchu, przyjdź.
Tak pragniemy Ciebie Panie,
jak spękana ziemia deszczu,
jak pustynia kropli wody, Duchu, przyjdź.

Prowadź mnie, prowadź mnie.     [F] [C/E] [B/D] [B]
Prowadź nas, prowadź nas.       [F] [C/E] [B/D] [B]

---
{title:  Yeshua (Jedno jest Imię pod niebem)}
{number: 211}

Ref. Yeshua, Yeshua [g] [d] [Es] [F] [g]

1. Jedno jest Imię pod Niebem dane nam, aby zbawić nas,
Twoje Imię ponad wszelką władzą, Panie, Jezu, Zbawco nasz!

2. Ty zstąpisz do nas z Nieba, by wprowadzić nas do Jeruzalem.
Z wiarą czekamy na Ciebie, Panie, Jezu, Zbawco nasz!
---
{title:  Chcę tonąć w morzu Twego miłosierdzia}
{number: 212}

Chcę tonąć w morzu Twego miłosierdzia [a] [F]
Pomóż mi wypłynąć, [C]
pomóż mi zaufać Tobie dziś [G]
pomóż mi zaufać Tobie dziś /x2 [a] [F] [C] [G]

Podaj mi dłoń, uwolnij mnie [a] [F] [C] [G]
---
{title:  Jak w Betlejem}
{number: 213}

Ref. Jak w Betlejem cud zdarzył się     [d] [C]
Tak od Juraty po Zakopane               [G] [a] [d]
Od Sejn po Cieszyn niech blaskiem lśni  [d] [C]
Nad całą Polską nam niebo dziś          [G] [a] [d]
Niech każdy kto usłyszy dźwięk          [B] [C]
Niebiańskiej muzyki aniołów śpiew       [a] [B] [C]
Jaśnieje światłem gwiazdy tej           [d] [C]
Co narodziła się w Betlejem             [G] [a] [d]

2x Solo skrzypce                        [d] [C] [G] [a]

1. Choć płoną miasta wkoło              [d] [d7/11]
Świątecznych promocji zgiełk            [d6] [d]
Chodźcie tu wokoło                      [d] [d7/11]
Odnajdźmy nawzajem się                  [d6] [d]
Niech nie zabraknie                     [d] [G]
miłości w świąteczny czas               [B] [F] [C]
Głodnych nakarmimy,                     [d] [d7/11]
Wystarczy dla wszystkich nas            [d6] [d]

Ref. Jak w Betlejem cud zdarzył się     [d] [C]
Tak od Juraty po Zakopane               [G] [a] [d]
Od Sejn po Cieszyn niech blaskiem lśni  [d] [C]
Nad całą Polską nam niebo dziś          [G] [a] [d]
Niech każdy kto usłyszy dźwięk          [B] [C]
Niebiańskiej muzyki aniołów śpiew       [a] [B] [C]
Jaśnieje światłem gwiazdy tej           [d] [C]
Co narodziła się w Betlejem             [G] [a] [d]

2. Choć rośnie miasto w koło,           [d] [d7/11]
Lombardów i banków tłok                 [d6] [d]
I miejsca wciąż tak mało                [d] [d7/11]
Na zwykłą, pomocną dłoń                 [d6] [d]
2x Niech nie zabraknie                  [d] [G]
Miłości w świąteczny czas               [B] [F] [C]
Głodnych nakarmimy,                     [d] [d7/11]
Wystarczy dla wszystkich nas            [d6] [d]

Ref. Jak w Betlejem cud zdarzył się     [d] [C]
Tak od Juraty po Zakopane               [G] [a] [d]
Od Sejn po Cieszyn niech blaskiem lśni  [d] [C]
Nad całą Polską nam niebo dziś          [G] [a] [d]
2x Niech każdy kto usłyszy dźwięk       [B] [C]
Niebiańskiej muzyki aniołów śpiew       [a] [B] [C]
Jaśnieje światłem gwiazdy tej           [d] [C]
Co narodziła się w Betlejem             [G] [a] [d]

3x Solo skrzypce                        [d]
Ło ło ło ło, ło ło ło, ło ło...         [d] [C] [G] [a] [d] [C] [G] [a]
Ło ło ło ło, ło ło ło ło, ło ło         [B] [C] [a] [B] [C]
Ło ło ło ło, ło ło ło, ło ło            [d] [C] [G] [a]
Ło ło, ło ło ło ło                      [d]
---
{title:  Otwórz me oczy, o Panie}
{number: 214}

Otwórz me oczy o Panie [C]
Otwórz me oczy i serce [e]
Chcę widzieć Ciebie [F]
Chcę widzieć Ciebie [C]

Ref. Wywyższonego widzieć chcę [e] [a]
ujrzeć Ciebie w blasku Twej chwały [F] [G]
Wylej swą miłość i moc, [G] [e] [a]
gdy śpiewam “Święty, święty, święty” [F] [d] [G]

Chcę widzieć Ciebie [C]
---
{title:  Krzyżu Święty, co świat obejmujesz}
{number: 215}

1. Krzyżu Święty, co świat obejmujesz, [d] [A7] [d]
Który rozdartą ziemię ramionami dwoma, [F] [C] [F] [A7]
Jak dziecko słabe matka [d] [C]
przed ciemnością bronisz, [g] [d]
Zmiłuj się nad nami. [g] [A7] [d]

Krzyżu Święty, masz moc pojednania
i północy z południem i wschodu z zachodem,
który nienawiść łamiesz, a niewolę kruszysz,
zmiłuj się nad nami.

Ref. Z Tobą mury rozwalać, [d] [A7] [d]
Tobą się osłonić, [F] [C] [F]
Tobie się ufnym sercem [B] [F] [C]
z miłością pokłonić. x2 [B] [F] [C] [A7]

2. Krzyżu Święty, który ziemię spinasz,
Jak gdy żelazną klamrą
człowiek dom swój chroni,
By się w gruzy nie rozpadł na zwęglonej ziemi,
Zmiłuj się nad nami.

Krzyżu Święty, nad nami wzniesiony,
Jak bandaż litościwie ściągasz brzegi rany,
By się nowe zaczęło w sercu wyleczonym,
Zmiłuj się nad nami.
---
{title:  Daj mi usłyszeć Twój głos}
{number: 216}

1. Daj mi usłyszeć Twój głos, rozpoznać go. [G] [D]
Daj mi wybierać Twe słowa pośród tysiąca słów. [e] [C] [D]
Daj mi zobaczyć Twą twarz, zatrzymać wzrok. [G] [D]
Pokój znajduję w Tobie, gdy widzę Ciebie blisko. [e] [C] [D]
Ref. Jezus, Jezus, Jezus, Jezus... x2 [G] [D] [e] [C] [D]

2. Daj mi łaskę Twą, bym nie bał się.
Daj mi uwierzyć, że mogę czynić cuda w Twoje Imię.
Ref. Jezus, Jezus, Jezus, Jezus... x2 [G] [D] [e] [C] [D]

Coda: Postaw mnie mocno na skale. [a] [h] [C]
Umocnij mnie, wybieram Cię na zawsze. [a] [h] [C] [D]
Ref. Jezus, Jezus, Jezus, Jezus... x4 [G] [D] [e] [C] [D]

Gdybyś mówił językami świata tego, nie znał granic,
Wiedzę jego posiadł pełną, nic nie będziesz miał.
To, co widzisz i co słyszysz, co smakujesz i co liczysz,
Co posiadasz, to posiada cię.

A ja kocham cię, mówi Pan. Naprawdę kocham cię, na wieki kocham cię. x2

Miłość czeka, nie zawodzi, kiedy zdradzisz - nie odchodzę.
Miłość nigdy nie ustaje, trwa. Jestem w tobie, zawsze byłem, czekam dzisiaj - każdą chwilę z tobą spędzić, życie twoje, chcę.

Bo ja kocham cię, mówi Pan.
Naprawdę kocham cię, na wieki kocham cię...

Solo: Kocham proste twoje ścieżki, kocham proste twoje słowa
Kocham piękne oczy twoje, widzę siebie w nich
Kocham jasne twe spojrzenie, kocham jasne twoje myśli
Moje serce mocniej bije, mocniej bije dziś
---
{title:  Nie bój się, Ja Jestem}
{number: 217}

Nie bój się, Ja Jestem [D] [e7]
Blisko tak, gdy zechcesz [D/Fis] [G]
Przytul się i trwaj tak przy mnie [D] [A/Cis]
Zawsze [h7/9] [A]

Czekam tu na ciebie [D] [e7]
Abyś był w mym niebie [D/Fis] [G]
Tylko zechciej wybrać właśnie [D] [A/Cis]
Mnie [fis] [G]

 [B] [a] [G] [B] [C] [A4-3]

Ref. Bo tylko Jezus jest mą miłością [D] [fis]
Tylko On moją radością [h] [A]
Tylko Jezus jest mym wytchnieniem [G] [e7]
Panem moim jest [fis] [G] [A]
Tylko Jezus jest mą miłością [D] [A/Cis]
Tylko On moją radością [h] [A]
Tylko Jezus jest mym wytchnieniem [G] [e7]
Panem moim jest [A]
 [B] [C] [G] [B] [C] [Asus] [A]

 [D] [C] [B] [A]
 [D] [C] [B] [A] [G]
---
{title:  Przybądź, Duchu Święty}
{number: 218}

1. Przybądź Duchu Święty, ześlij z nieba wzięty [d] [C] [B]
światła Twego strumień. [C] [B] [C] [d]
Przyjdź, Ojcze ubogich, Dawco darów mnogich, [d] [C] [B]
Przyjdź, światłości sumień [C] [B] [C] [d]

2. O, najmilszy z Gości, słodka serc radości, [B] [C] [B]
Słodkie orzeźwienie. [C] [B] [C] [d]
W pracy Tyś ochłodą, w skwarze żywą wodą, [B] [C] [B]
W płaczu utulenie. [C] [F] [C] [d]

3. Światłości najświętsza! [d] [C]
Serc wierzących wnętrza poddaj Twej potędze. [B] [C] [B] [C] [d]
Bez Twojego tchnienia [d] [C]
cóż jest wśród stworzenia? Jeno cierń i nędze. [B] [C] [B] [C] [d]

4. Obmyj, co nieświęte, oschłym wlej zachętę [B] [C] [B]
Ulecz serca ranę! [C] [F] [B] [d]
Nagnij, co jest harde, rozgrzej serca twarde, [B] [C] [B]
Prowadź zabłąkane. [C] [F] [B] [d]

5. Daj Twoim wierzącym, w Tobie ufającym, [C] [F] [B]
Siedmiorakie dary! [C] [F] [B] [C]
Daj zasługę męstwa, daj wieniec zwycięstwa, [C] [F] [B]
Daj szczęście bez miary [C] [F] [B] [C]

Daj męstwo, daj zwycięstwo, [C] [F] [B]
daj szczęście bez miary! [C] [F] [B] [C]
---
{title:  Wspaniały dawco miłości}
{number: 219}

1. Wspaniały Dawco miłości, [D] [G] [D] [G]
składamy na Twoim stole [D] [G] [A]
Wszystko, co mamy, wszystko, co mamy, [e] [A] [fis] [h]
Choć i tak to od wieków jest Twoje [G] [e] [A7]

2. Wspaniały Dawco miłości,
składamy na Twoim stole
Radość i szczęście, trudy i znoje
Choć i tak to od wieków jest Twoje
---
{title:  Zbliżam się w pokorze}
{number: 220}

1. Zbliżam się w pokorze i niskości swej. [C] [G] [a]
Wielbię Twój majestat, skryty w Hostii tej. [F] [G] [C] [C7]
Tobie dziś w ofierze serce daję swe. [F] [G] [C] [e] [a]
O, utwierdzaj w wierze, Jezu, dzieci Twe! [F] [G] [C] [(C7)]
 [G]
2. Mylą się, o Boże, w Tobie wzrok i smak.
Kto się im poddaje, temu wiary brak.
Ja jedynie wierzyć Twej nauce chcę,
Że w postaci Chleba utaiłeś się.

3. Bóstwo Swe na Krzyżu skryłeś wobec nas,
Tu ukryte z Bóstwem Człowieczeństwo wraz,
Lecz w Oboje wierząc, wiem, że dojdę tam,
Gdzieś przygarnął łotra, do Twych niebios bram.

4. Jak niewierny Tomasz Twych nie szukam ran,
Lecz wyznaję z wiarą, żeś mój Bóg i Pan,
Pomóż wierze mojej, Jezu, łaską swą,
Ożyw mą nadzieję, rozpal miłość mą.

5. Ty, coś upamiętnił śmierci Bożej czas,
Chlebie Żywy, życiem swym darzący nas.
Spraw, bym dla swej duszy życie z Ciebie brał,
Bym nad wszelką słodycz Ciebie poznać chciał.

6. Ty, co jak Pelikan, Krwią swą karmisz lud,
Przywróć mi niewinność, oddal grzechów brud.
Oczyść mnie Krwią swoją, która wszystkich nas
Jedną kroplą może obmyć z win i zmaz.

7. Pod zasłoną teraz, Jezu, widzę Cię,
Niech pragnienie serca kiedyś spełni się.
Bym Oblicze Twoje tam oglądać mógł,
Gdzie wybranym  miejsce przygotował Bóg.
---
{title:  Duszo moja, Pana chwal}
{number: 221}

1. Duszo moja Pana chwal. [d]
Jego chwali serce me. [C]
Póki życia starczy mi, [B]
Bogu memu śpiewać chcę! [A7]

2. Nie dla władców ufność ma
I dla człowieka, który tkwi
W swych zamiarach, póki śmierć
Ich nie zetrze w proch i pył.

3. Pełen szczęścia będzie ten,
Kto w Bogu swym nadzieję ma.
Ten, co stworzył ziemi krąg
W martwe ciało życie wlał

4. Źródłem wiary jest mój Pan,
On zniewolonym pęta rwie,
Syci ciało Chlebem Swym,
Duszy noc zamienia w dzień.

5. Pochylonych wesprze Pan,
On sprawiedliwym miłość da.
Osieroconych Ojcem jest.
Głupcem ten, kto w grzechu trwa.
---
{title:  Niech przyjęcie Ciała i Krwi}
{number: 222}

 [d] [C] [B] [/x2]
1. Panie, moje serce się nie pyszni, [d] [C] [B]
Oczy moje nie są wyniosłe. [a7] [B] [C]
Wprowadziłem ład i pokój do mej duszy, [d] [C] [B] [a7]
Uwielbiać Cię, Panie, chcę. [g] [a7] [B] [C] [d] [C]

Ref. Niech przyjęcie Ciała i Krwi [F] [C] [g]
Rozproszy ciemność, ocali od zwątpienia [B] [C] [g] [a7] [B] [C]
I skutecznie leczy, [d] [C]
Panie Jezu Chryste, [B] [(a7)]
mą duszę i ciało. [g] [a7] [B] [C]
 [d] [C] [B] [/x2]

2. Panie, niespokojne moje serce,
Póki nie spocznie w Tobie.
Szukam Ciebie w dzień i szukam Ciebie nocą.
W Tobie nadzieja ma.
---
{title:  Oceany}
{number: 223}

1. Znad oceanów do mnie wołasz [h] [A/Cis] [D]
Gdzie każdy krok niepewny jest [A] [G]
Ty jesteś tam gdzie niewiadoma [h] [A/Cis] [D]
Tam znajdę grunt dla wiary mej [A] [G]

Ref. I będę wzywać Imię Twe [G] [D] [A]
I ponad fale patrzeć chcę, gdy burzą się [G] [D] [A]
Dla duszy pokój w Tobie jest [G] [D] [A]
Gdzie pójdziesz Ty, ja pójdę też [G] [A]
[h] [A/Cis] [D] [A] [G]

2. Mój strach utonie w Twojej łasce [h] [A/Cis] [D]
Bo ręka Twa prowadzi mnie [A] [G]
I Ty mnie nigdy nie zawiodłeś [h] [A/Cis] [D]
Wiem teraz też nie zawiedziesz mnie [A] [G]

Ref. I będę wzywać Imię Twe [G] [D] [A]
I ponad fale patrzeć chcę, gdy burzą się [G] [D] [A]
Dla duszy pokój w Tobie jest [G] [D] [A]
Gdzie pójdziesz Ty, ja pójdę też [G] [A]

Więc daj mi odwagę [h] [A/Cis] [D] [A] [G] [/x2]
I prowadź mnie
Chcę ufać Tobie

Duchu prowadź mnie [h] [G] [D] [A] [/x4]
Gdzie wiara nie ma granic [G] [D] [A] [e] [/x2]
Daj mi chodzić nad wodami [h] [A/Cis] [D] [A] [e] [/x6]
Gdziekolwiek mnie zabierzesz
Prowadź głębiej niż
Pójść mogą moje stopy
Moja wiara się umocni
W Twej obecności Boże /x5

Ja chcę iść za Tobą więc prowadź mnie [h] [A/Cis] [D] [A] [G]
Dokądkolwiek pójdziesz [h] [A/Cis] [D] [A] [G]

Ref. I będę wzywać Imię Twe [G] [D] [A]
I ponad fale patrzeć chcę, gdy burzą się [G] [D] [A]
Dla duszy pokój w Tobie jest [G] [D] [A]
Gdzie pójdziesz Ty, ja pójdę też [G] [A]
---
{title:  Być bliżej Ciebie chcę}
{number: 224}

1. Być bliżej Ciebie chcę, o Boże mój, [D] [G] [D] [A]
Z Tobą przez życie lżej nieść krzyża znój. [D] [G] [e] [D] [A7] [D]
Ty w sercu moim trwasz, [D]
Z miłością Stwórcy ziem [D] [G] [A7]
Tulisz w ojcowski płaszcz, [D] [D/Fis] [G] [e]
chroniąc mnie w nim. [D] [A7] [D]

2. Być bliżej Ciebie chcę na każdy dzień,
za Tobą życiem swym iść jako cień.
Daj tylko, Boże dusz,
obecność Twoją czuć,
myśl moją pośród burz na Ciebie zwróć.

3. Choć jak wędrowiec sam idę przez noc,
w Tobie niech siłę mam i w Tobie moc,
gdy czuwam i wśród snu,
czy słońce jest, czy mrok
niechaj mnie strzeże Twój, o Panie, wzrok.

4. Być bliżej Ciebie chcę i w śmierci czas,
gdy mnie już będzie krył grobowy głaz.
być bliżej Ciebie chcę
to me pragnienie czuj,
bom ja jest dziecię Twe, Tyś Ojciec mój.

5. Promieniem słońca Bóg, odblaskiem zórz.
Po nocy krętych dróg i strasznych snów.
Przyjm Panie wdzięczny śpiew, za Twoje Ciało, Krew,
Być bliżej Ciebie chcę, o Boże mój.
---
{title:  Śpiewaj Jemu}
{number: 225}

1. Światłość świata rozjaśnia mrok      [c] [As] [B] [f]
przedwieczny Pan Bóg objawia swą moc    [c] [As] [B] [f]
dziś w Betlejem zdarzył się cud         [c] [Es] [B] [f]
Jezus Chrystus zbawia swój lud          [c] [As] [B] [f]

Ref. Śpiewaj, śpiewaj, Jemu ziemio      [c] [Es] [F]
I wychwalaj miłości dar                 [f] [Es] [c]
Stwórca twój odnawia Ciebie             [c] [As]
Pokój dziś przynosząc nam. /x2          [B] [F]

2. Pokłon, chwałę, oddajmy Mu           [c] [As] [B] [f]
Swoje troski złóżmy u Jego stóp         [c] [As] [B] [f]
Przebaczenie przynosi nam               [c] [Es] [B] [f]
Jezus Chrystus zbawił świat             [c] [As] [B] [f]

Ref. Śpiewaj, śpiewaj, Jemu ziemio      [c] [Es] [F]
I wychwalaj miłości dar                 [f] [Es] [c]
Stwórca twój odnawia Ciebie             [c] [As]
Pokój dziś przynosząc nam. /x2          [B] [F]

solo skrzypce                           [As] [B] [c] [Es]
                                        [As] [B] [F]

Ref. Śpiewaj, śpiewaj, Jemu ziemio      [c] [Es] [F]
I wychwalaj miłości dar                 [f] [Es] [c]
Stwórca twój odnawia Ciebie             [c] [As]
Pokój dziś przynosząc nam. /x3          [B] [F]

---
{title:  W żłobie leży}
{number: 226}

1. W żłobie leży, któż pobieży          [D] [e] [A7]
Kolędować Małemu?                       [D] [e7] [A7] [D]
Jezusowi, Chrystusowi                   [D] [e] [A7]
Dziś nam narodzonemu?                   [D] [D7] [G] [A7] [D]
Pastuszkowie, przybywajcie              [D] [H7] [e]
Jemu wdzięcznie przygrywajcie,          [A7] [D]
Jako Panu naszemu.                      [Fis7] [G] [e] [A7] [D]

2. My zaś sami z piosneczkami za wami pospieszymy,
I tak tego, maleńkiego, niech wszyscy zobaczymy.
Jak ubogo narodzony, płacze w stajni położony,
Więc go dziś ucieszymy.

3. Naprzód tedy, niechaj wszędy zabrzmi świat w wesołości,
Że posłany nam jest dany, Emmanuel w niskości.
Jego tedy przywitajmy, z aniołami zaśpiewajmy
Chwała na wysokości!

4. Witaj, Panie, cóż się stanie, że rozkosze niebieskie
Opuściłeś, a zstąpiłeś na te niskości ziemskie?
Miłość moja to sprawiła, by człowieka wywyższyła
Pod nieba Empirejskie.
                                        [Fis7] [G] [g6] [A7] [D]
---
{title:  Jakie piękne jest Imię Twe}
{number: 227}

1. Ty na początku byłeś Słowem     [C]
tam, gdzie sam Najwyższy Pan       [F] [a] [G]
Swą chwałę ukrył w tym co stworzył [a] [G/H] [C]
Lecz objawił Ciebie nam            [F] [a] [G]

Ref. Jakie piękne jest Imię Twe   [C]
Jakie piękne jest Imię Twe        [G]
Twe Imię, Jezu, Królu nasz        [a] [G] [F]
Jakie piękne jest Imię Twe        [C/E]
Nic z nim nie równa się           [G]
Jakie piękne jest Imię Twe        [a]
Twe Imię Jezu                     [G] [F]

2. Nie chciałeś mieszkać w niebie bez nas [C]
Więc przyniosłeś niebo tu                 [F] [a] [G]
Twa miłość, Jezu jest największa          [a] [G/H] [C]
Nic nas nie rozłączy już                  [F] [a] [G]

Ref. Jak cudowne jest Imię Twe    [C]
Jak cudowne jest Imię Twe         [G]
Twe Imię, Jezu, Królu nasz        [a] [G] [F]
Jak cudowne jest Imię Twe         [C/E]
Nic z nim nie równa się           [G]
Jak cudowne jest Imię Twe         [a]
Twe Imię Jezu x2                  [G] [F]

[F] [G] [a] [C/E]
Śmierć pokonana zasłona rozdarta       [F] [G]
Zamilkł już grzech i zamilkł grób      [a] [C/E]
Głośno grzmi niebo chwałę Twą wielbiąc [F] [G]
Bo zmartwychwstał nasz Pan i Bóg       [a] [C/E]
Nie masz rywala sobie równego          [F] [G]
Na zawsze rządzisz w mocy swej         [a] [C/E]
Twoja jest chwała, Twoje królestwo     [F] [G]
A Imię Twe najwyższe jest              [a] [C/E]

Ref. Jak potężne jest Imię Twe    [C]
Jak potężne jest Imię Twe         [G]
Twe Imię, Jezu, Królu nasz        [a] [G] [F]
Jak potężne jest Imię Twe         [C/E]
Nic z nim nie równa się           [G]
Jak potężne jest Imię Twe         [a]
Twe Imię Jezu x2                  [G] [F]
---
{title:  Mój Jezu, mój Zbawco}
{number: 228}

Mój Jezu, mój Zbawco,              [A] [E]
Któż jest tak wielki jak Ty?       [fis] [cis] [D]
Przez wszystkie dni wysławiać chcę [A] [E]
Wspaniałe dzieła Twoich rąk.       [G] [E]

Mój Panie, Obrońco                 [A] [E]
Zródło mych natchnień i sił.       [fis] [cis] [D]
Niech cały świat, wszystko co jest [A] [E]
Zawsze wielbi Imię Twe.            [G] [E]

Ref. Krzycz na cześć Pana      [A] [fis]
Rozraduj się w Nim             [D] [E]
Ogłaszaj wszędzie              [A] [fis]
Że On Panem jest               [D] [E]
Góry ustąpią                   [A] [fis]
na dźwięk Jego słów            [D]
Gdy przemówi Stwórca ziem.     [E] [E7]

Patrzę z podziwem              [A] [fis]
Na dzieła Twych rąk            [D] [E]
Zawsze chcę kochać Cię         [A] [fis]
Przy Tobie być                 [D] [E]
Co może równać się             [A] [fis]
Z tym, co u Ciebie mam?        [D] [E] [A]
---
{title:  Wykrzykujcie Bogu, wykrzykujcie Królowi}
{number: 229}

Ref. Wykrzykujcie Bogu,        [d]
wykrzykujcie Królowi,          [d]
klaszczcie w dłonie            [g]
i hymny śpiewajcie. /2x        [C] [d]

1. Pan najwyższy, straszliwy,  [C] [a]
jest Królem całej ziemi.       [d]
On poddaje nam narody          [C] [a]
jest Królem całej ziemi;       [d]
ludy rzuca pod stopy,          [C] [a]
jest Królem całej ziemi.       [d]
Bóg Abrahama                   [d]

2. Wybrał dla nas dziedzictwo, [C] [a]
jest Królem całej ziemi.       [d]
On nas bardzo miłuje,          [C] [a]
jest Królem całej ziemi.       [d]
Śpiewajcie Mu, śpiewajcie,     [C] [a]
jest Królem całej ziemi.       [d]
Bóg Abrahama                   [d]

3. On zasiada na tronie,       [C] [a]
jest Królem całej ziemi.       [d]
możni świata hołd Mu złożą,    [C] [a]
jest Królem całej ziemi,       [d]
bo do Niego należą,            [C] [a]
jest Królem całej ziemi.       [d]
Bóg Abrahama                   [d]
---
{title: Duszo ma, Pana chwal}
{number: 230}

Ref. Duszo ma, Pana chwal,  [G] [D]
Oddaj Bogu cześć,           [A/Cis] [h]
Świętemu śpiewaj pieśń.     [G] [D] [A]
Z mocą wywyższaj Go,        [G] [D]
Duszo ma,                   [G] [A] [h]
Uwielbiam, Boże, Cię.        [G] [A] [D]

1. Nowy dzień                 [G] [D]
Wraz ze wschodem słońca,      [A] [h]
Znów nadszedł czas,           [G] [D]
By Ci śpiewać pieśń.          [A] [h]
Cokolwiek jest już za mną     [G] [D]
I to wszystko, co przede mną  [A/Cis] [h]
Wiem, będę śpiewać,           [G] [D]
Gdy nadejdzie zmrok.          [A] [D]

2. Bogaty w miłość, gniew oddalasz, Panie,
Twe serce miłe, wielkie Imię Twe.
Ze względu na Twą dobroć
Będę śpiewać Tobie pieśni,
Wiele powodów, by uwielbiać Cię.

3. Przyjdzie dzień, gdy bez sił zostanę,
Nadejdzie czas mego końca tu.
Dusza moja będzie
Już na zawsze Cię uwielbiać,
W wieczności z Tobą piękna zabrzmi pieśń.
---
{title: Zaufałem Panu i już}
{number: 231}

Zaufałem Panu i już              [e] [D]
Niczego nie muszę się lękać      [C] [G]
Zaufałem Panu i już              [e] [D]
Niczego nie muszę się trwożyć    [C] [G]

Ref. Wierzę Mu, bo On ma moc     [a] [D]
Przezwyciężyć w moim sercu zło.  [G] [C]
Wierzę Mu, bo On ma              [a]
Właśnie taką moc. /x2            [D] [e]
---
{title: Przyjdź, o Jezu, Maranatha!}
{number: 232}

Przyjdź, o Jezu, Maranatha      [e]
Przyjdź, o Jezu, Maranatha      [D]
Przyjdź, o Jezu, Maranatha      [e]
Przyjdź, o Jezu, Maranatha      [D] [e]
---
{title: Przywołaj mnie, Panie, na pustynię}
{number: 233}

1. Przywołaj mnie Panie         [e] [D]
Przywołaj mnie Panie            [C7+] [h]
Na pustynię.                    [a] [dis0] [e]
I niech mój głód Ciebie         [e] [D]
I moja tęsknota                 [C7+] [h]
Przywoła Ciebie.                [a] [dis0] [e]

Ref. 2x Mów do mego serca       [e] [D] [e]
Mów do mego serca.              [e] [D] [e]
Ty znasz jego ukryte doliny,    [C] [D] [C] [D]
Tam gdzie usychają,             [e] [D] [e]
Piękne winnice                  [e] [D] [e]
Ty wiesz, gdzie otworzyć        [C] [D] [C] [h]
Ukryte źródła.                  [e]

2. Niech we mnie zamilkną       [e] [D]
Pragnienia i myśli              [C7+] [h]
Abyś mógł mówić Ty.             [a] [dis0] [e]
Niech słowa miłości             [e] [D]
I przebaczenia                  [C7+] [h]
Ogarną duszę mą.                [a] [dis0] [e]
---
{title: Miłość przychodzi teraz (Jezus cię kocha)}
{number: 234}
                                      [e]
Ref. 3x Jezus cię kocha, pragnie,     [C]
leczy właśnie                         [D]
dziś tu i teraz.                      [e]
Chcę Go uwielbiać, bo jest            [C]
ze mną właśnie                        [D]
dziś.                                 [e]

W Tobie ma nadzieja                   [C] [D]
W Tobie życie me                      [C] [D]
We mnie możesz wszystko               [C] [D]
Jeśli chcesz                          [e]
Moje nawrócenie                       [C] [D]
Tylko w Tobie jest                    [C] [D]
Oczyść moje serce                     [C] [D]
Weź mój grzech                        [e]

Ref. 4x Jezus cię kocha, pragnie,     [C]
leczy właśnie                         [D]
dziś tu i teraz.                      [e]
Chcę Go uwielbiać, bo jest            [C]
ze mną właśnie                        [D]
dziś.                                 [e]
---
{title: Taki jesteś Ty}
{number: 235}

1. Jesteś tu jesteś pośród nas     [D] [A]
Uwielbiam Cię, uwielbiam Cię       [E] [fis]
Jesteś tu, działasz w każdym z nas [D] [A]
Uwielbiam Cię, uwielbiam Cię       [E] [fis]

2. Jesteś tu i dotykasz serc       [D] [A]
Uwielbiam Cię, uwielbiam Cię       [E] [fis]
Jesteś tu, leczysz każde z serc    [D] [A]
Uwielbiam Cię, uwielbiam Cię       [E] [fis]

Ref. Jesteś Wszechmocny            [D] [A]
Ty czynisz cuda                    [E] [fis]
Jesteś drogą, światłem w ciemności [D] [A]
O tak, taki jesteś Ty              [E] [fis]

3. Jesteś tu zmieniasz życie       [D] [A]
Uwielbiam Cię, uwielbiam Cię       [E] [fis]
Jesteś tu i odnawiasz mnie         [D] [A]
Uwielbiam Cię, uwielbiam Cię       [E] [fis]

Ref. Jesteś Wszechmocny..

Taki jesteś Ty, taki jesteś Ty,    [D] [A]
taki jesteś Ty, taki jesteś Ty     [E] [fis]

Bridge: Choć czasem tego           [D]
nie widzę, Ty działasz
Choć czasem tego                   [A]
nie czuję, Ty działasz
Nie zmieniasz się                  [E]
i wiem, że wciąż działasz
Nie zmieniasz się                  [fis]
(i wiem, że wciąż działasz)

Taki jesteś Ty...
---
{title: Pełen czci przed Tobą klękam}
{number: 236}

1. Pełen czci przed Tobą klękam    [G] [D]
wszystko oddam by móc ujrzeć Cię   [e] [C]
by z Tobą Panie być                [G] [D] [e] [C]

2. Życie składam w Twoje ręce      [G] [D]
Boże łaski cześć oddaję Ci         [e] [C]
przed Twym tronem kłaniam się      [G] [D] [e] [C]

Ref. Mój płacz słyszałeś           [G] [D] [e]
i z pomocą przyszedłeś od dziś     [C]
chcę być zawsze tam gdzie Ty       [G] [D] [e] [C]

1. Pełen czci przed Tobą klękam...
2. Życie składam w Toje ręce...

Ref 2x. Mój płacz słyszałeś...
                                       [e] [D/Fis] [G] [D/Fis]
Bridge 4x: Życiem swym wywyższam Cię   [e] [D/Fis]
miłość ma wywyższa Cię                 [G] [D/Fis]
chcę by świat wywyższał Cię            [e] [D/Fis] [C] [D]
---
{title: Dom na skale}
{number: 237}

1. Ktoś zbudował dom na piasku,     [h]
wymarzony wspaniały dom,            [D] [h]
ale przyszła burza,                 [e]
runął z wielkim trzaskiem,          [h]
zbudowany na piasku dom.            [Fis] [h]
Ktoś zbudował dom na skale,
wymarzony wspaniały dom,
przyszły chmury ciemne, uderzyły fale,
dom na skale ani drgnął.

Ref. Trzeba miłość budować na skale,    [h] [Fis]
swoje szczęście oprzeć o głaz.          [Fis] [h]
Gdy w godzinę złą                       [e]
wiatr powieje prosto w dom,             [h]
mój dom na skale będzie stał.           [Fis] [h]

2. Na to nasze budowanie,
Boże połóż wszechmocną dłoń.
Kto Ci ufa Panie, mocny jest jak granit,
i szczęśliwie zbuduje dom.
Nie wiem co przyniesie życie,
za godzinę za dzień za rok.
Ale wiem to jedno, Bóg jest skałą wierną,
nie odstąpisz Go na krok.

Ref.x2 Trzeba miłość budować na skale...
...mocno stał, zawsze stał.

---
{title: Maryjo, chcę zamieszkać z Tobą}
{number: 238}

Maryjo, chcę zamieszkać z Tobą,     [F] [C]
Naucz mnie kochać jak Ty.           [B] [C]
Maryjo, chcę zamieszkać z Tobą,     [F] [C]
Naucz mnie kochać od dziś.          [B] [C]

Zachwycasz mnie prostotą            [F] [a7]
I pięknem Twego serca.              [B] [C4/3]
Pociągasz mnie, abym żyła w świetle [F] [a7]
Maryjo!                             [B] [C]

Razem z Tobą powiedzieć chcę Panu       [F] [a7]
Słowa, co zmieniły świat.               [B6/9] [C4/3]
Razem z Tobą powiedzieć chcę: Panie!    [F] [a7]
Niech będzie tak, jak chcesz Ty.        [B6/9] [C]

---
{title: Dzięki Ci, Maryjo}
{number: 239}

Dzięki Ci Maryjo,           [E] [H7] [A] [E]
Maryjo dzięki Ci. x2        [Fis] [A] [E]

1.Za błękitu nieba toń,     [gis] [cis]
za pomocną Twoją dłoń,      [gis] [A]
Maryjo, dzięki Ci.          [Fis] [H7]
Za nadziei Syna twarz,      [gis] [cis]
że matczyną miłość masz,    [gis] [A]
Maryjo, dzięki Ci.          [Fis] [A] [E]

Ref. Maryjo                     [D] [A]
Tyś wiarą, nadzieją, miłością,  [E]
Maryjo                          [D] [A]
bądź Matką, Królową, bliskością [E]
Maryjo!                         [D] [A] [E]

Dzięki Ci ...
2.Za radości życia me, za pociechy słowa Twe
Za troskliwą przy nas straż, że obfite łaski dasz

3.Za ufności wielkiej znak, za służebne Twoje "Tak"
Za łaskawość, w której trwasz, że potrzeby nasze znasz

---
{title: Duchu Święty, Boże przyjdź}
{number: 240}

Ref. Duchu Święty, Boże przyjdź,    [g] [d]
przyjdź Duchu Światło,              [g] [F]
Duchu Ogniu przyjdź,                [B] [F]
przyjdź i rozpal nas.               [d] [g]

1.Przyjdź Duchu Ojca,   [g] [d] [g]
bądź naszym światłem,   [d] [g]
Niech promienieje       [F] [B]
Twej chwały blask.      [F] [d] [g]

2.O, Świadku prawdziwy umocnij nas,
Chcemy rozgłaszać: Zmartwychwstał Pan!

3.Przyjdź Źródło niebieskie, przyjdź zdroju życia,
Bądź nam uzdrowieniem, moc sercom daj.

4.O, Duchu Radości, rozraduj Kościół,
Niech płynie z serc naszych Baranka pieśń.

5.Ty daj nam doświadczyć miłości Ojca,
Oblicze Chrystusa objawiaj nam.

---
{title: Dziś jest czas, by oddać Bogu chwałę}
{number: 241}

1. Dziś jest czas, by oddać Bogu chwałę	    [D] [G] [D] [G]
W tej świątyni, którą my jesteśmy sami.	    [D] [G] [A7]
Ref. Więc otwórz serce swe 		            [G] [D]
i zacznij wielbić Go		                [G] [D]
Jego chwała wnet wypełni miejsce to.		[G] [C] [A7]
Chwała cześć, chwalimy Go! /x2		        [D] [G] [A] [G]

2. Bóg przebywa w chwale swego ludu	        [D] [G] [D] [G]
On pragnie, aby wielbić Jego Imię		    [D] [G] [A7]
---
{title: Chlebie najcichszy}
{number: 242}

Ref. Chlebie najcichszy,	    [G] [D]
otul mnie swym milczeniem.	    [C] [D]
Ukryj mnie w Twojej bieli,	    [G] [D]
wchłoń moją ciemność.	        [a] [e]

1. Przemień mnie w siebie,	    [e] [C]
bym jak Ty stał się chlebem /x2 [G] [D]
Pobłogosław mnie, połam,        [e] [C]
rozdaj łaknącym braciom /x2     [G] [D]

2. A ułomki chleba, które zostaną
Rozdaj tym, którzy nie wierzą w swój głód
---
{title: Przyjacielu, chcę zostać z Tobą}
{number: 243}

Przyjacielu, przyjacielu    [G] [e]
chcę zostać z tobą          [C]
Przy tobie chcę być         [D]
I nie trzeba, i nie trzeba  [G] [e]
byś mówił coś               [C]
Wystarczy byś był. /x2      [D]

Ref.x2 Bo nie ma            [G]
większej miłości niż ta,    [e]
Gdy ktoś życie oddaje       [C]
bym ja mógł żyć             [D]

2. Chcę być z tobą, chcę być z Tobą
Gdy jest mi dobrze i kiedy mi źle
Przyjacielu, przyjacielu
Otwieram przed Tobą serce me /x2
---
{title: O Matko, z Częstochowskiego wizerunku}
{number: 244}

Ref. O, Matko       [D]
z Częstochowskiego  [A] [G]
Wizerunku,          [A]
Pani Jasnogórska,   [G] [fis]
Jutrzenko Wolności, [e] [A]
Źródło Światła      [Fis] [h]
i Życia dla nas,    [D] [e] [G] [Fis]
Bądź Matką,         [h] [G]
bądź Matką          [fis] [h]
naszego zawierzenia [e] [h]

1.Wraz z Tobą, Matko,       [D] [A]
chcemy dziś się zanurzyć    [h] [A]
W jedynym świetle,          [G] [fis]
którym jest Jezus,          [e] [A]
Aby moc Zmartwychwstałego   [D] [A] [h] [D]
była uzdrowieniem.          [e] [G] [A]

2.Spraw, aby w sercach Twoich synów i córek,
Dotkniętych ogniem Bożego światła,
Wytrysnęło źródło życia, dar miłości Ojca.

3.Pomóż nam, Matko, przyjąć całą prawdę
I za Jezusem pójść drogą krzyża,
By w ciemności nikt nie chodził,
lecz miał światło życia.
---
{title: Koronka do Miłosierdzia Bożego}
{number: 245}

Ojcze nasz, Zdrowaś Maryjo, Wierzę w Boga

Ojcze przedwieczny, ofiaruję Ci     [a] [G]
Ciało i Krew, Duszę i Bóstwo        [F] [E7]
Najmilszego Syna Twojego,           [a] [G]
A Pana naszego                      [F]
Jezusa Chrystusa                    [E7]
Na przebłaganie                     [F]
za grzechy nasze                    [C]
i świata całego                     [F] [E7]
Na przebłaganie                     [F]
za grzechy nasze                    [C]
i świata całego                     [F] [E7]

Dla Jego bolesnej męki              [a] [G] [a]
Miej miłosierdzie                   [a] [G]
Dla nas i świata całego             [C] [E7] [a]

Święty Boże, Święty Mocny           [G] [a] [G] [a]
Święty Nieśmiertelny                [G] [a]
zmiłuj się nad nami                 [a] [G] [C]
i nad całym światem                 [E7] [a]

---
{title: Otwórzcie bramy}
{number: 246}

1. Pańska jest ziemia       [d] [C]
I co jest na ziemi          [a] [d]
Jej długi okrąg z mieszkańcami swymi
On ją na morzach utrzymuje stale,
I miękkie wody chciał dać za grunt skale.

Ref.: Otwórzcie bramy,      [d] [C]
Co nietknione stały.        [a] [d]
Bramy wieczyste! Bo idzie Król chwały.
Któż ten Król chwały? I kto jest ten mężny?
Pan mocny w boju i Bóg nasz potężny.
Otwórzcie bramy,            [d] [g]
Co nietknione stały.        [C] [d]
Bramy wieczyste,            [d] [g]
Bo idzie Król chwały.       [C] [d]
Któż ten Król chwały?       [F] [g]
Pan o cnoty dbały.          [C] [d]
On w te drzwi wnijdzie,     [F] [g]
On jest Królem chwały.      [C] [d] [C] [d]

2. Któż na Twą górę może wstąpić, Panie?
Albo na miejscu poświęconym stanie?
Ten, który krzywdą rąk swych nie oszpeci,
Ten, co ma serce czyste, Bożych dzieci.

3. Kto dba o duszę, nie przysiągł kłamliwie,
Z Pańskiej litości pójdzie mu szczęśliwie.
Oto jest rodzaj i taka rachuba,
Tych, co chcą znaleźć twarz Boga Jakuba.

---
{title: Przybieżeli do Betlejem (żydowskie)}
{number: 247}
                                        [C5] [B5] [C5]
                                        [C5] [Cis5] [C5]
                                        [C5] [B5] [C5] [Cis5]
                                        [C5] [B5] [C5]
1. Przybieżeli do Betlejem pasterze,    [C5] [Cis5] [C5]
Grając skocznie Dzieciąteczku na lirze. [C5] [Cis5] [C5]

Ref. x2 Chwała na wysokości,            [C5]
chwała na wysokości,                    [B5] [Cis5]
A pokój na ziemi!                       [C5] [B5] [C5]

2. Oddawali swe ukłony w pokorze
Tobie z serca ochotnego, o Boże!

3. Anioł Pański sam ogłosił te dziwy,
Których oni nie słyszeli, jak żywi.

4. Dziwili się napowietrznej muzyce
i myśleli, co to będzie za Dziecię?
---
{title:  Wśród nocnej ciszy}
{number: 248}

1. Wśród nocnej ciszy           [D] [A] [D] [A7]
głos się rozchodzi:             [h] [e] [A7] [D]
Wstańcie, pasterze,             [D] [A] [D] [A7]
Bóg się wam rodzi               [h] [e] [A7] [D]
Czem prędzej się wybierajcie,   [D] [h] [e] [A7]
Do Betlejem pospieszajcie,      [D] [h] [e] [A7]
Przywitać Pana,                 [D] [A] [D]
Przywitać Pana.                 [h] [e] [A7] [D]

2. Poszli, znaleźli Dzieciątko w żłobie
Z wszystkimi znaki danymi sobie.
Jako Bogu cześć Mu dali,
A witając zawołali
Z wielkiej radości, z wielkiej radości.

3. Ach, witaj Zbawco z dawna żądany,
Cztery tysiące lat wyglądany
Na Ciebie króle, prorocy
Czekali, a Tyś tej nocy
Nam się objawił, nam się objawił.

4. I my czekamy na Ciebie, Pana,
A skoro przyjdziesz na głos kapłana,
Padniemy na twarz przed Tobą,
Wierząc, żeś jest pod osłoną
Chleba i wina, chleba i wina.

---
{title: Jezus malusieńki}
{number: 249}

1. Jezus malusieńki     [e] [H7]
Leży wśród stajenki     [e] [H7]
Płacze z zimna          [a] [D7]
Nie dała mu             [G] [E7]
Matula sukienki.        [a] [D7] [G]
Płacze z zimna          [a] [D7]
Nie dała mu             [G] [E7]
Matula sukienki.        [a] [D7] [G] [es0]

2. Bo uboga była,       [e] [H7]
Rąbek z głowy zdjęła,   [e] [H7]
W który Dziecię         [a] [D7]
Owinąwszy,              [G] [E7]
Siankiem Je okryła      [a] [D7] [G]
W który Dziecię         [a] [D7]
Owinąwszy,              [G] [E7]
Siankiem Je okryła      [a] [D7] [G] [es0]

3. Nie ma kolebeczki,   [e] [H7]
Ani poduszeczki,        [C] [H7]
We żłobie Mu            [a] [D7]
Położyła                [G] [E7]
Sianka pod główeczki.   [a] [D7] [G]
We żłobie Mu            [a] [D7]
Położyła                [G] [E7]
sianka pod główeczki.   [a] [D7] [G]

---
{title: Gore gwiazda Jezusowi}
{number: 250}

1. Gore gwiazda Jezusowi        [d] [F]
W obłoku, w obłoku              [g] [A]
Józef z Panną asystują          [d] [F]
Przy boku, przy boku            [g] [A]

Ref. x2 Hejże ino dyna, dyna,   [d] [A]
Narodził się Bóg dziecina       [d] [A]
W Betlejem, w Betlejem.         [F] [g] [A] [d]

2. Wół i osioł w parze służą przy żłobie, przy żłobie
Huczą, buczą delikatnej osobie, osobie.

3. Pastuszkowie z podarunki przybiegli, przybiegli
W koło szopę o północy obiegli, obiegli.

4. Anioł Pański sam ogłosił te dziwy, te dziwy
Których oni nie słyszeli jak żywi, jak żywi.

5. Anioł Pański kuranciki wycina, wycina
Stąd pociech dla człowieka jedyna, jedyna.

6. Już Maryja Jezuleńka powiła, powiła
Stąd wesele i pociecha nam miła, nam miła.

---
{title: Jezu jesteś tu (Chwała)}
{number: 251}

Jezu jesteś tu                  [A] [E/Gis] [fis] [fis/E]
świat odszedł w cień            [D] [A/Cis] [h] [Esus4]
Mam tylko Ciebie                [A] [E/Gis] [D/Fis] [h7]
Moje życie to Ty                [D] [E] [A]
Każdy dzień Twoim darem         [cis7] [D/Fis] [Esus4] [A]
Nocą jesteś schronieniem mym    [D/Fis] [h] [E4-3]

Ref. Chwała, chwała!            [D] [cis]
Jezu wielbię Cię                [fis] [D/Fis] [A]

---
{title: Modlitwa o pokój}
{number: 252}

Przymnóż nam wiary, Panie       [fis] [E/Gis] [fis/A] [hsus2]
Zmiłuj się nad nami             [fis] [E/Gis] [fis/A] [hsus2]
Rozlej swój pokój               [D/Fis] [E] [fis]
Boże ochroń nas                 [D] [h] [E]

Ref. Maryjo, Królowo Pokoju     [A/Cis] [D] [E4-3]
Módl się za nami                [fis] [D7+] [E4-3]
Maryjo, Królowo Pokoju          [A/Cis] [D] [E4-3]
Wspieraj nas                    [fis] [D7+] [E] [A]

---
{title: Sekwencja - Przybądź Duchu Święty}
{number: 253}

1. Przybądź, Duchu Święty,
Spuść z niebiosów wzięty
Światła Twego strumień.
Przyjdź, Ojcze ubogich,
Dawco darów mnogich,
Przyjdź Światłości sumień!

2. O najmilszy z Gości,
Słodka serc radości,
Słodkie orzeźwienie.
W pracy Tyś ochłodą,
W skwarze żywą wodą,
W płaczu utulenie.

3. Światłości najświętsza!
Serc wierzących wnętrza
Poddaj swej potędze!
Bez Twojego tchnienia
Cóż jest wśród stworzenia?
Jeno cierń i nędze!

4. Obmyj, co nieświęte,
Oschłym wlej zachętę,
Ulecz serca ranę!
Nagnij, co jest harde,
Rozgrzej serca twarde,
Prowadź zabłąkane.

5. Daj Twoim wierzącym,
W Tobie ufającym,
Siedmiorakie dary!
Daj zasługę męstwa,
Daj wieniec zwycięstwa,
Daj szczęście bez miary!

---
{title: Zjednoczeni w Duchu}
{number: 254}

1. Zjednoczeni w Duchu,     [e]
Zjednoczeni w Nim,          [e]
Zjednoczeni w Duchu,        [a]
Zjednoczeni w Nim,          [e]
Módlmy się, aby jedność     [a]
Była odnowiona w nas,       [e]
Aby świat cały poznał       [C]
Uczniów Chrystusa w nas,    [e] [a]
Aby świat cały              [C]
Ujrzał miłość w nas.        [D] [e]
[H7]

2. Wraz z innymi pójdziemy,
Podaj mi swoją dłoń. /x2
Wszystkim głosić będziemy tę radosną dla nas wieść,
Że nasz Pan kroczy z nami, że nasz Pan z nami jest,
Że nasz Pan zawsze z nami wszędzie jest.

3. Chcemy razem pracować,
Chcemy złączyć swój trud. /x2
By nie stracić godności, którą Pan obdarzył nas,
Aby strzec ludzką dumę, aby strzec dumę swą,
Żeby człowiek zachował godność swą.

4. Niechaj chwała brzmi Ojcu,
Który stworzył ten świat. /x2
Chwała też Chrystusowi, który Synem Jego jest
I Duchowi też chwała, który jednoczy nas,
I Duchowi też, który łączy nas.

---
{title: Życie trzeba umieć oddać}
{number: 255}
                                    [d] [B] [g]
                                    [Asus4] [A7]
Ref. Życie trzeba umieć oddać       [D] [B]
Zawierzyć na Miłość Wieczystą       [d]
Życie trzeba umieć oddać            [D] [B]
Zaufać, że źródła wytrysną          [d]
Że z każdej pustyni,                [g]
Kamienia i skały                    [g]
Bóg wywiedzie życie                 [A]
O znanym mu świcie                  [B] [g] [A7]

1. Idziemy za Tobą w nieznane       [d] [g]
Z lampami mądrymi czuwaniem         [C] [A] [d] [A7]
Rytm kroków                         [d]
Drabiną psalmową się zdaje          [d7] [g]
Czy sosny to szumią?                [B]
Czy oliwne gaje?                    [A]

2. Spoczniemy w dolinie cienistej,
w paprociach, we mchach rosa błyśnie.
Jak ptaki zranione wysoko wzlecimy,
Bóg życie wywiedzie ze śmierci doliny.

Ref Życie trzeba umieć oddać...

3. Na ziemi to jutrznia ostatnia
Lecz pierwszą w niebiosach się stanie
Za Mistrzem, co kiedyś opuścił Nazaret
Wziął krzyż na ramiona i my pójdźmy dalej
                                    [D] [A]
Ref. Życie trzeba umieć oddać...

4. I poszły na samą głębinę
W toń morza czerwoną ofiarą
I życie oddały, by życie ocalić
W nas miłość ratować, w nas wiarę zapalić

Ref. Życie swe umiały oddać
Zawierzyć na Miłość Wieczystą
Życie swe umiały oddać
Ufały, że źródła wytrysną
Że z każdej pustyni,
Kamienia i skały
Bóg wywiedzie życie
Jak wtedy o świcie
---
{title: Uwierz Polsko}
{number: 256}

[a] [H7] [e]
[e0] [Fis7] [H7]
1. Moja Ojczyzna, moja Polska,  [a] [H7] [e]
Moja Ojczyzna to mój dom,       [a] [H7] [e]
Którego strzeże Ojciec, Matka   [a] [D] [G]
I wiara od lat.                 [a] [C] [H7]

2. Moja Ojczyzna to historia    [a] [H7] [e]
Pamięć o poległych za nasz kraj [a] [H7] [e]
Pamięć o tysiącach bohaterów    [a] [D] [G]
Niezłomnych jak stal!           [a] [C] [H7]

Ref. Uwierz, Polsko!            [G]
Naszej wiary nie zabraknie nam! [dis0] [e]
Żaden wróg                      [a]
Nie zwycięży                    [C]
Boga w nas!                     [H7]
Z Bogiem zawsze                 [e]
Pokonamy każde zło.             [C] [D] [G] [e]
Dopomóż, Boże, nam,             [a] [a7] [a6]
Dopomóż nam.                    [H7]

3. Kraju mój piękny, mój Wiślany,
Kraju mej nadziei w lepszy los.
Z wiarą Ojców tak niepokonany,
Bo wiara - to broń!

Ref. Uwierz, Polsko!...

4. Śladem naszych przodków iść będziemy,
Za Ojczyznę walczyć - to nasz cel!
Do lepszego jutra iść pragniemy.
Wznieś w górę swą skroń!

Ref. Uwierz, Polsko!...
---
{title:  Niech Ci błogosławi Pan}
{number: 257}
1. Niech Ci błogosławi Pan          [H] [E] [H] [E]
Niechaj Cię strzeże                 [cis] [H] [Fis]
Niech rozjaśni                      [cis] [dis]
oblicze Swe nad Tobą                [gis]
I niech miłościw Ci będzie          [cis] [H] [Fis]

2. Niech Ci błogosławi Pan          [H] [E] [H] [E]
Niechaj Cię strzeże                 [cis] [H] [Fis]
Niech obróci                        [cis] [dis]
twarz Swoją ku Tobie                [gis]
I niech da Ci Swój pokój            [cis] [H] [Fis]

Ref. Niech Ci błogosławi Pan        [H] [E] [H] [E]
Niech Ci błogosławi Pan             [H] [E] [Fis]
Niech Ci błogosławi Pan             [H] [E] [H] [E]
Niech Ci błogosławi Pan             [gis] [Fis] [H]

Bridge x2:
Niech Ci błogosławi     [E] [H]
Niech Ci błogosławi     [E] [H]
Niech Ci błogosławi Pan [E] [H] [Fis]
                        [(G)]

Ref. Niech Ci błogosławi Pan        [C] [F] [C] [F]
Niech Ci błogosławi Pan             [C] [F] [G]
Niech Ci błogosławi Pan             [C] [F] [C] [F]
Niech Ci błogosławi Pan             [a] [G] [C] [F]
                                    [a] [G] [C] [F]
                                    [a] [G] [F]
---
{title:  W żłobie leży (wersja 2)}
{number: 258}

1. W żłobie leży, któż pobieży          [D] [A]
Kolędować Małemu?                       [G] [A] [D]
Jezusowi, Chrystusowi                   [D] [A]
Dziś nam narodzonemu?                   [G] [A] [D]
Pastuszkowie, przybywajcie              [G] [A]
Jemu wdzięcznie przygrywajcie,          [h] [C]
Jako Panu naszemu.                      [G] [A] [h]
Jako Panu naszemu.                      [G] [A] [D]

2. My zaś sami z piosneczkami za wami pospieszymy,
I tak tego, maleńkiego, niech wszyscy zobaczymy.
Jak ubogo narodzony, płacze w stajni położony,
Więc go dziś ucieszymy. /x2

3. Naprzód tedy, niechaj wszędy zabrzmi świat w wesołości,
Że posłany nam jest dany, Emmanuel w niskości.
Jego tedy przywitajmy, z aniołami zaśpiewajmy
Chwała na wysokości! /x2

Solo skrzypce                           [G] [A] [h]
                                        [G] [A] [D]

---
{title:  Żywy jest Kościół Twój}
{number: 259}

                                    [G] [D] [h] [A]
                                    [G] [D]
                                    [h] [A/Cis]
                                    [G] [A] [D]
1. Kościół jest Chrystusa Ciałem,   [G] [D] [Asus4]
Z woli Ojca nam dany                [h] [G] [D]
Każdy z nas ochrzczony w Duchu      [G] [D] [Asus4]
do życia w nim jest wezwany.        [h] [G] [D]
To co dawne minęło                  [f7] [h] [G] [A]
Jezus wybawił świat                 [e] [G] [A]
Z nami zostać na zawsze chciał      [f7] [h] [G] [D]
Nadszedł Kościoła czas.             [G] [A] [D]

Ref. Żywy jest Kościół Twój,        [G] [A] [D]
Działa w nim Święty Duch,           [G] [A] [h]
Niezwyciężony trwa,                 [G] [A] [D]
By ogłaszać zbawienia czas.         [D/Fis] [e] [G] [A]
W otwartych domu drzwiach           [G] [A] [D]
Jezu zapraszasz nas                 [G] [A] [h]
By co dzień bliżej nieba być        [G] [A] [D] [A/Cis] [h]
W żywym Kościele Twym.              [G] [A] [D]

2. Kościół jest świątynią Pana      [G] [D] [Asus4]
gdzie wspólnota wierzących          [h] [G] [D]
Wciąż na nowo w sakramentach        [G] [D] [Asus4]
staje się Ludem Bożym.              [h] [G] [D]
Karmiąc Słowem i Ciałem             [f7] [h] [G] [A]
Kościół ożywia nas.                 [e] [G] [A]
Źródłem życia i szczytem            [f7] [h] [G] [D]
Jest Eucharystii dar.               [G] [A] [D]

Ref. Żywy jest Kościół Twój,        [G] [A] [D]
Działa w nim Święty Duch,           [G] [A] [h]
Niezwyciężony trwa,                 [G] [A] [D]
By ogłaszać zbawienia czas.         [D/Fis] [e] [G] [A]
W otwartych domu drzwiach           [G] [A] [D]
Jezu zapraszasz nas                 [G] [A] [h]
By co dzień bliżej nieba być        [G] [A] [D] [A/Cis] [h]
W żywym Kościele Twym.              [G] [A] [D]

3. Kościół jest najlepszą Matką     [G] [D] [Asus4]
która życie nam daje.               [h] [G] [D]
Nową drogą chcemy kroczyć           [G] [D] [Asus4]
z Jezusem - Nowym Adamem.           [h] [G] [D]
Zjednoczeni w miłości               [f7] [h] [G] [A]
braćmi stajemy się,                 [e] [G] [A]
wyzwoleni chcemy żyć                [f7] [h] [G] [D]
Jezu w Kościele Twym.               [G] [A] [D]

Ref. Żywy jest Kościół Twój,        [G] [A] [D]
Działa w nim Święty Duch,           [G] [A] [h]
Niezwyciężony trwa,                 [G] [A] [D]
By ogłaszać zbawienia czas.         [D/Fis] [e] [G] [A]
W otwartych domu drzwiach           [G] [A] [D]
Jezu zapraszasz nas                 [G] [A] [h]
By co dzień bliżej nieba być        [G] [A] [D] [A/Cis] [h]
W żywym Kościele Twym.              [G] [A] [D]

Bridge: Niepokalana Matko Kościoła  [G7+/9] [A]
Spraw aby Kościół żywy              [D] [G] [D/Fis]
Stał się żywy we mnie               [h] [G] [A]
Niepokalana Matko Kościoła          [G7+/9] [A]
Spraw aby Kościół żywy              [h] [G] [D/Fis]
Stał się żywy we mnie               [h] [G] [A]

Ref. Żywy jest Kościół Twój…

---
{title:  Panie mój, przychodzę dziś}
{number: 260}

Panie mój, przychodzę dziś,     [D] [G]
Serce me skruszone przyjm,      [D] [G]
Skłaniam się                    [D]
Przed świętym tronem Twym.      [G] [A4-3]
Wznoszę ręce moje wzwyż,        [D] [G]
Miłość mą wyznaję dziś.         [D/Fis] [h]
Uwielbiam Ciebie w Duchu,       [e] [A7]
Uwielbiam w Prawdzie Cię.       [e] [A7]
Życie me oddaję Tobie,          [e] [A7]
Uświęć je.                      [D]

                                [G] [g] [D7+]

---
{title: Głoś imię Pana}
{number: 261}

1. Głoś imię Pana,            [C] [a]
Króla wszechmocy i chwały.    [e] [F] [G] [C]
Złącz się z chórami niebios   [C] [a]
zastępów wspaniałych.         [e] [F] [G] [C]
Harfa i róg niech zagra:      [C] [F]
„Któż jest, jak Bóg!”         [a] [d] [G]
by krańce ziemi słyszały.     [e] [F] [G] [C]

2. Głoś imię Pana,            [C] [a]
On twoim losem kieruje.       [e] [F] [G] [C]
Na skrzydłach niesie,         [C] [a]
jak orzeł się opiekuje.       [e] [F] [G] [C]
Daj Mu swą dłoń,              [C] [F]
w przygodzie zawołaj doń.     [a] [d] [G]
On cię od zła zachowuje.      [e] [F] [G] [C]
                              [Asus] [A]

3. Głoś imię Pana,            [D] [h]
razem ze wszystkim, co żyje.  [fis] [G] [A] [D]
On twoim światłem,            [D] [h]
Jemu niech serce twe bije!    [fis] [G] [A] [D]
On życiem twym,               [D] [G]
wdzięczności śpiewaj Mu hymn  [h] [e] [A]
teraz i na wieki. Amen.       [fis] [G] [A]
                              [g] [D7+]

---
{title: Niepokalana (J. Tomalak)}
{number: 262}

1. Otwarta na Boga, odwiecznie wybrana  [e]
Matko Chrystusa,                        [C] [D] [A]
Pełna wiary na wzór Abrahama            [e]
- Niepokalana.                          [C] [D] [A]

Ref. Ciebie otacza nieziemski blask,    [C] [G] [D] [e]
A nad Twą głową dwanaście gwiazd,       [C] [G] [D] [e]
Księżyc się srebrzy u Twoich stóp,      [C] [G] [D] [e]
Boga uwielbia Twój pokorny duch.        [a] [G] [D] [e]

2. Troskliwa, radosna, spiesząca z pomocą
Oblubienico Ducha
Śpiewasz Panu hymn uwielbienia
- Magnificat.

3. Najdoskonalsza uczennico Jezusa,
Do końca wierna,
Współcierpiąca pod Krzyżem Syna
- Maryjo.

4. Z miłości nam dana w godzinie zbawienia
Matko Kościoła,
Ty, która jesteś znakiem nadziei
- módl się za nami.

Bridge: Błogosławią Ciebie wszystkie pokolenia,
Najpiękniejsza z niewiast, uczczona przez Syna.


---
{title: Skrzypi wóz}
{number: 263}

1. Skrzypi wóz, wielki mróz,  [F] [B]
wielki mróz na ziemi          [C] [d]
Trzej królowie jadą           [F] [C]
Złoto, mirrę kładą            [B] [F]
Hej, kolęda, kolęda           [B] [C] [F]

2. A komuż takiemu,
Dzieciątku małemu
Cóż to za Dzieciątko
Musi być paniątko
Hej, kolęda, kolęda

3. Pasterze na lirze,
na skrzypeczkach grali
W tę stronę do szopy
Prędko przybiegali
Hej, kolęda, kolęda

4. To Jezus maluśki,
to Dzieciątko krasne
Cichutkie, malutkie
Jak słoneczko jasne
Hej, kolęda, kolęda

5. Skrzypi wóz, wielki mróz,
wielki mróz na ziemi
Trzej królowie jadą
Złoto, mirrę kładą
Hej, kolęda, kolęda

---
{title: Bóg się rodzi}
{number: 264}

1. Bóg się rodzi, moc truchleje,  [C] [F]
Pan niebiosów obnażony!           [C] [G7]
Ogień krzepnie, blask ciemnieje,  [C] [F]
Ma granice Nieskończony.          [C] [G7]
Wzgardzony, okryty chwałą,        [G7] [C]
Śmiertelny Król nad wiekami!      [G7] [C]
A Słowo Ciałem się stało          [G7] [C] [A7]
I mieszkało między nami. x2       [d] [G7] [C]

2. Cóż masz niebo nad ziemiany?
Bóg porzucił szczęście swoje,
Wszedł między lud ukochany,
Dzieląc z nim trudy i znoje.
Niemało cierpiał, niemało,nvm
Żeśmy byli winni sami,
A Słowo... x2

3. W nędznej szopie urodzony,
Żłób Mu za kolebkę dano!
Cóż jest czym był otoczony?
Bydło, pasterze i siano.
Ubodzy, was to spotkało
Witać Go przed bogaczami!
A Słowo... x2

4. Potem królowie widziani
Cisną się między prostotą,
Niosąc dary Panu w dani:
Mirrę, kadzidło i złoto.
Bóstwo to razem zmieszało
Z wieśniaczymi ofiarami.
A Słowo... x2

5. Podnieś rękę, Boże Dziecię,
Błogosław Ojczyznę miłą!
W dobrych radach, w dobrym bycie
Wspieraj jej siłę swą siłą.
Dom nasz i majętność całą,
I wszystkie wioski z miastami.
A Słowo... x2

---
{title: Mędrcy świata, monarchowie}
{number: 265}

1. Mędrcy świata Monarchowie,     [G] [C] [G]
Gdzie śpiesznie dążycie?          [D7] [G]
Powiedzcież nam, Trzej Królowie,  [G] [C] [D]
Chcecie widzieć Dziecię?          [G] [D] [D7] [G]
Ono w żłobie, nie ma tronu,       [D] [G]
I berła nie dzierży,              [a] [G] [D]
A proroctwo Jego zgonu,           [G] [C] [D]
Już się w świecie szerzy.         [G] [D] [D7] [G]

2. Mędrcy świata, złość okrutna,
Dziecię prześladuje.
Wieść okropna, wieść to smutna,
Herod spisek knuje:
Nic monarchów nie odstrasza,
Do Betlejem śpieszą,
Gwiazda Zbawcę im ogłasza,
Nadzieją się cieszą.

3. Przed Maryją stają społem,
Niosą Panu dary.
Przed Jezusem biją czołem,
Składają ofiary.
Trzykroć szczęśliwi królowie,
Któż wam nie zazdrości?
Cóż my damy, kto nam powie,
Pałając z miłości?

4. Tak, jak każą nam kapłani,
Damy dar troisty:
Modły, pracę niosąc w dani,
I żar serca czysty.
To kadzidło, mirrę, złoto
Niesiem, Jezu szczerze,
Co dajemy Ci z ochotą,
Od nas przyjm w ofierze.

---
{title: Anioł pasterzom mówił}
{number: 266}

1. Anioł pasterzom mówił:     [D] [A] [D] [A] [D]
Chrystus się wam narodził!    [D] [G] [D] [E7] [A]
W Betlejem, nie bardzo        [D] [G] [D] [G]
podłym mieście                [D] [A]
Narodził się w ubóstwie       [D] [G] [D] [A]
Pan wszego stworzenia.        [D] [G] [A] [D]

2. Chcąc się dowiedzieć tego
Poselstwa wesołego,
Bieżeli do Betlejem skwapliwie,
Znaleźli Dziecię w żłobie,
Maryję z Józefem.

3. Taki Pan chwały wielkiej
Uniżył się Wysoki.
Pałacu kosztownego żadnego
Nie miał zbudowanego
Pan wszego stworzenia!

4. O dziwne narodzenie,
Nigdy niewysłowione!
Poczęła Panna Syna w czystości,
Porodziła w całości
Panieństwa swojego.

---
{title: Do szopy hej pasterze}
{number: 267}

1. Do szopy, hej pasterze,  [D] [A]
Do Szopy, bo tam cud!       [A7] [D]
Syn Boży w żłobie leży,     [D] [A]
by zbawić ludzki ród.       [A7] [D]

Ref.: Śpiewajcie Aniołowie, [D] [A]
pasterze, grajcie Mu.       [G] [D]
Kłaniajcie się Królowie,    [h] [e]
nie budźcie Go ze snu.      [A] [D]

2. Padnijmy na kolana,
to Dziecię to nasz Bóg,
Uczcijmy niebios Pana;
miłości złóżmy dług.

Ref.: Śpiewajcie...

3. O Boże niepojęty, kto
pojmie miłość Twą?
Na sianie wśród bydlęty,
masz tron i służbę swą.

Ref.: Śpiewajcie...

4. On Ojcu równy w Bóstwie
opuszcza niebo swe
A rodzi się w ubóstwie
i cierpi wszystko złe

Ref.: Śpiewajcie...

5.Bóg, Stwórca wiecznej chwały,
Bóg godzien wszelkiej czci,
patrz, w szopie tej zbutwiałej,
jak słodko On w niej śpi.

Ref.: Śpiewajcie...

6. Jezuniu mój najsłodszy,
Tobie oddaję się.
O skarbie mój najdroższy,
racz wziąć na własność mnie.

---
{title: Cóż to za Dziecię}
{number: 268}

1. Cóż to za Dziecię słodko śpi   [d] [F] [C] [a]
na sianie, w twardym żłobie?      [d] [G] [A7]
Aniołów pieśń dla niego brzmi     [d] [F] [C] [a]
wśród pól w tej nocnej dobie.     [d] [A] [d] [(C)]

Ref. To, to jest Chrystus Pan     [F] [C] [a]
co ludziom z nieba został dan     [d] [G] [A7]
Śpiesz, śpiesz Mu oddać cześć!    [F] [C] [a]
To Jezus, Syn Maryi               [d] [A7] [d] [(C)]

2. Dlaczego leży w stajni tej
wśród zwierząt w podłym żłobie
Bezgrzeszny, grzesznym ludziom śle
nadzieję w swoim słowie

Ref. To, to jest Chrystus Pan

3. Przynieście Jemu dary swe
królowie i wieśniacy
Przez Niego Bóg zbawienie śle
dzisiejszej dziwnej nocy

Ref. Brzmij, brzmij ma pieśni chwał
Bóg grzesznym ludziom Zbawcę dał!
Cud! Cud, bo w żłobie śpi
Dzieciątko, Syn Maryi

---
{title: Narodził się Jezus Chrystus}
{number: 269}

Ref. Narodził się, narodził się,  [D] [A] [e] [h]
Jezus Chrystus, Bóg i Pan!        [D/Fis] [G] [A]
Narodził się, narodził się,       [D] [A] [e] [h]
Jezus Chrystus, Bóg i Pan!        [D/Fis] [G] [A7] [D]

1. Tobie chwała, narodzony        [D] [A] [h] [fis]
Dla zbawienia wszystkich ludzi.   [G] [fis] [G] [A]
Panie Jezu, Synu Matki,           [D] [A] [h] [fis]
Która z Ducha Cię poczęła.        [e] [A] [D]

2. Tobie dzisiaj oddajemy         [D] [A] [h] [fis]
Myśli, słowa i uczynki,           [G] [fis] [G] [A]
Ty przeniknij je swą łaską,       [D] [A] [h] [fis]
Aby godne były Ciebie.            [e] [A] [D]

3. Twoja gwiazda betlejemska      [D] [A] [h] [fis]
Stała się już jasnym słońcem      [G] [fis] [G] [A]
I oświeca drogę życia,            [D] [A] [h] [fis]
Którą chcemy iść ku Tobie.        [e] [A] [D]

4. Chryste, któryś się objawił    [D] [A] [h] [fis]
Wielkim mędrcom i pasterzom,      [G] [fis] [G] [A]
Cześć i wieczne panowanie         [D] [A] [h] [fis]
Ojcu, Tobie i Duchowi. Amen.      [e] [A] [D]

---
{title: Adeste, fideles}
{number: 270}

1. Adeste, fideles,             [D] [A]
laeti triumphantes:             [D] [A]
Venite, venite in Bethlehem:    [h] [A] [E] [A]
Natum videte                    [D] [G] [D]
Regem Angelorum.                [e] [G] [A]

Ref. Venite, adoremus.          [D]
Venite, adoremus.               [D]
Venite, adoremus                [a] [A] [h]
Dominum.                        [G] [A] [D]

2. En grege relicto, humiles ad cunas
Vocati pastores approperant:
Et nos ovanti gradu festinemus:

Ref. Venite, adoremus...

3. Aeterni Parentis splendorem aeternum
Velatum sub carne videbimus.
Deum infantem pannis involutum.

Ref. Venite, adoremus...

4. Pro nobis egenum, et foeno cubantem
Piis foveamus amplexibus:
Sic nos amantem quis non redamaret ?

Ref. Venite, adoremus...

5. Qui foeno iacebat panis speciebus,
Pro nobis effectus Emmanuel.
Sic nos amantem, quis non redamaret?
`,zo={DIRECTIVE:"DIRECTIVE",BODY_LINE:"BODY_LINE"},Kb=a=>["title","number"].includes(a),Ub=a=>{const t=/{(.*):(.*)}/,r=a.match(t);if(r){const y=r[1].trim(),w=r[2].trim();return Kb(y)?{type:zo.DIRECTIVE,directive:y,value:y==="number"?parseInt(w):w}:null}const s=/\[.*?]/g,c=a.replace(s,"").trim(),d=(a.match(s)||[]).map(y=>y.replace(/[[\]]/g,"")),f={lyrics:c,chords:d};return{type:zo.BODY_LINE,body:f}},$b=a=>{const t=a.split(`
`).map(Ub).filter(y=>y!==null),r=t.filter(y=>y.type===zo.BODY_LINE).map(y=>y.body),s=r.findIndex(y=>y.lyrics||y.chords.length),c=r.length-r.slice().reverse().findIndex(y=>y.lyrics||y.chords.length),d=r.slice(s,c),f=t.filter(y=>y.type===zo.DIRECTIVE).reduce((y,w)=>({...y,[w.directive]:w.value}),{});return f.title===void 0||f.number===void 0?null:{title:f.title,number:f.number,latinTitle:nz(f.title||""),body:d}},Zb=a=>a.split(/---\s*\n/).map($b).filter(t=>t!==null),Vb=()=>{const a=Zb(Hb);return x.jsx(Lb,{parsedSongs:a})};var to={},Gf;function Yb(){if(Gf)return to;Gf=1;var a=Nf();return to.createRoot=a.createRoot,to.hydrateRoot=a.hydrateRoot,to}var Qb=Yb();const Xb=Qb.createRoot(document.getElementById("root"));Xb.render(x.jsx(zn.StrictMode,{children:x.jsx(Vb,{})}));
