(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))r(u);new MutationObserver(u=>{for(const d of u)if(d.type==="childList")for(const m of d.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&r(m)}).observe(document,{childList:!0,subtree:!0});function s(u){const d={};return u.integrity&&(d.integrity=u.integrity),u.referrerPolicy&&(d.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?d.credentials="include":u.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function r(u){if(u.ep)return;u.ep=!0;const d=s(u);fetch(u.href,d)}})();function Al(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var qc={exports:{}},Oo={};var sy;function pg(){if(sy)return Oo;sy=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function s(r,u,d){var m=null;if(d!==void 0&&(m=""+d),u.key!==void 0&&(m=""+u.key),"key"in u){d={};for(var y in u)y!=="key"&&(d[y]=u[y])}else d=u;return u=d.ref,{$$typeof:o,type:r,key:m,ref:u!==void 0?u:null,props:d}}return Oo.Fragment=t,Oo.jsx=s,Oo.jsxs=s,Oo}var ly;function bg(){return ly||(ly=1,qc.exports=pg()),qc.exports}var R=bg(),Xc={exports:{}},ie={};var ry;function gg(){if(ry)return ie;ry=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),d=Symbol.for("react.consumer"),m=Symbol.for("react.context"),y=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),w=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),A=Symbol.for("react.activity"),G=Symbol.iterator;function _(b){return b===null||typeof b!="object"?null:(b=G&&b[G]||b["@@iterator"],typeof b=="function"?b:null)}var L={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},U=Object.assign,ee={};function q(b,B,H){this.props=b,this.context=B,this.refs=ee,this.updater=H||L}q.prototype.isReactComponent={},q.prototype.setState=function(b,B){if(typeof b!="object"&&typeof b!="function"&&b!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,b,B,"setState")},q.prototype.forceUpdate=function(b){this.updater.enqueueForceUpdate(this,b,"forceUpdate")};function W(){}W.prototype=q.prototype;function I(b,B,H){this.props=b,this.context=B,this.refs=ee,this.updater=H||L}var ue=I.prototype=new W;ue.constructor=I,U(ue,q.prototype),ue.isPureReactComponent=!0;var Y=Array.isArray;function ce(){}var Q={H:null,A:null,T:null,S:null},Oe=Object.prototype.hasOwnProperty;function Qe(b,B,H){var F=H.ref;return{$$typeof:o,type:b,key:B,ref:F!==void 0?F:null,props:H}}function dn(b,B){return Qe(b.type,B,b.props)}function rn(b){return typeof b=="object"&&b!==null&&b.$$typeof===o}function $(b){var B={"=":"=0",":":"=2"};return"$"+b.replace(/[=:]/g,function(H){return B[H]})}var _e=/\/+/g;function je(b,B){return typeof b=="object"&&b!==null&&b.key!=null?$(""+b.key):B.toString(36)}function He(b){switch(b.status){case"fulfilled":return b.value;case"rejected":throw b.reason;default:switch(typeof b.status=="string"?b.then(ce,ce):(b.status="pending",b.then(function(B){b.status==="pending"&&(b.status="fulfilled",b.value=B)},function(B){b.status==="pending"&&(b.status="rejected",b.reason=B)})),b.status){case"fulfilled":return b.value;case"rejected":throw b.reason}}throw b}function E(b,B,H,F,ae){var oe=typeof b;(oe==="undefined"||oe==="boolean")&&(b=null);var we=!1;if(b===null)we=!0;else switch(oe){case"bigint":case"string":case"number":we=!0;break;case"object":switch(b.$$typeof){case o:case t:we=!0;break;case v:return we=b._init,E(we(b._payload),B,H,F,ae)}}if(we)return ae=ae(b),we=F===""?"."+je(b,0):F,Y(ae)?(H="",we!=null&&(H=we.replace(_e,"$&/")+"/"),E(ae,B,H,"",function(On){return On})):ae!=null&&(rn(ae)&&(ae=dn(ae,H+(ae.key==null||b&&b.key===ae.key?"":(""+ae.key).replace(_e,"$&/")+"/")+we)),B.push(ae)),1;we=0;var Xe=F===""?".":F+":";if(Y(b))for(var Se=0;Se<b.length;Se++)F=b[Se],oe=Xe+je(F,Se),we+=E(F,B,H,oe,ae);else if(Se=_(b),typeof Se=="function")for(b=Se.call(b),Se=0;!(F=b.next()).done;)F=F.value,oe=Xe+je(F,Se++),we+=E(F,B,H,oe,ae);else if(oe==="object"){if(typeof b.then=="function")return E(He(b),B,H,F,ae);throw B=String(b),Error("Objects are not valid as a React child (found: "+(B==="[object Object]"?"object with keys {"+Object.keys(b).join(", ")+"}":B)+"). If you meant to render a collection of children, use an array instead.")}return we}function P(b,B,H){if(b==null)return b;var F=[],ae=0;return E(b,F,"","",function(oe){return B.call(H,oe,ae++)}),F}function J(b){if(b._status===-1){var B=b._result;B=B(),B.then(function(H){(b._status===0||b._status===-1)&&(b._status=1,b._result=H)},function(H){(b._status===0||b._status===-1)&&(b._status=2,b._result=H)}),b._status===-1&&(b._status=0,b._result=B)}if(b._status===1)return b._result.default;throw b._result}var re=typeof reportError=="function"?reportError:function(b){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var B=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof b=="object"&&b!==null&&typeof b.message=="string"?String(b.message):String(b),error:b});if(!window.dispatchEvent(B))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",b);return}console.error(b)},me={map:P,forEach:function(b,B,H){P(b,function(){B.apply(this,arguments)},H)},count:function(b){var B=0;return P(b,function(){B++}),B},toArray:function(b){return P(b,function(B){return B})||[]},only:function(b){if(!rn(b))throw Error("React.Children.only expected to receive a single React element child.");return b}};return ie.Activity=A,ie.Children=me,ie.Component=q,ie.Fragment=s,ie.Profiler=u,ie.PureComponent=I,ie.StrictMode=r,ie.Suspense=h,ie.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Q,ie.__COMPILER_RUNTIME={__proto__:null,c:function(b){return Q.H.useMemoCache(b)}},ie.cache=function(b){return function(){return b.apply(null,arguments)}},ie.cacheSignal=function(){return null},ie.cloneElement=function(b,B,H){if(b==null)throw Error("The argument must be a React element, but you passed "+b+".");var F=U({},b.props),ae=b.key;if(B!=null)for(oe in B.key!==void 0&&(ae=""+B.key),B)!Oe.call(B,oe)||oe==="key"||oe==="__self"||oe==="__source"||oe==="ref"&&B.ref===void 0||(F[oe]=B[oe]);var oe=arguments.length-2;if(oe===1)F.children=H;else if(1<oe){for(var we=Array(oe),Xe=0;Xe<oe;Xe++)we[Xe]=arguments[Xe+2];F.children=we}return Qe(b.type,ae,F)},ie.createContext=function(b){return b={$$typeof:m,_currentValue:b,_currentValue2:b,_threadCount:0,Provider:null,Consumer:null},b.Provider=b,b.Consumer={$$typeof:d,_context:b},b},ie.createElement=function(b,B,H){var F,ae={},oe=null;if(B!=null)for(F in B.key!==void 0&&(oe=""+B.key),B)Oe.call(B,F)&&F!=="key"&&F!=="__self"&&F!=="__source"&&(ae[F]=B[F]);var we=arguments.length-2;if(we===1)ae.children=H;else if(1<we){for(var Xe=Array(we),Se=0;Se<we;Se++)Xe[Se]=arguments[Se+2];ae.children=Xe}if(b&&b.defaultProps)for(F in we=b.defaultProps,we)ae[F]===void 0&&(ae[F]=we[F]);return Qe(b,oe,ae)},ie.createRef=function(){return{current:null}},ie.forwardRef=function(b){return{$$typeof:y,render:b}},ie.isValidElement=rn,ie.lazy=function(b){return{$$typeof:v,_payload:{_status:-1,_result:b},_init:J}},ie.memo=function(b,B){return{$$typeof:w,type:b,compare:B===void 0?null:B}},ie.startTransition=function(b){var B=Q.T,H={};Q.T=H;try{var F=b(),ae=Q.S;ae!==null&&ae(H,F),typeof F=="object"&&F!==null&&typeof F.then=="function"&&F.then(ce,re)}catch(oe){re(oe)}finally{B!==null&&H.types!==null&&(B.types=H.types),Q.T=B}},ie.unstable_useCacheRefresh=function(){return Q.H.useCacheRefresh()},ie.use=function(b){return Q.H.use(b)},ie.useActionState=function(b,B,H){return Q.H.useActionState(b,B,H)},ie.useCallback=function(b,B){return Q.H.useCallback(b,B)},ie.useContext=function(b){return Q.H.useContext(b)},ie.useDebugValue=function(){},ie.useDeferredValue=function(b,B){return Q.H.useDeferredValue(b,B)},ie.useEffect=function(b,B){return Q.H.useEffect(b,B)},ie.useEffectEvent=function(b){return Q.H.useEffectEvent(b)},ie.useId=function(){return Q.H.useId()},ie.useImperativeHandle=function(b,B,H){return Q.H.useImperativeHandle(b,B,H)},ie.useInsertionEffect=function(b,B){return Q.H.useInsertionEffect(b,B)},ie.useLayoutEffect=function(b,B){return Q.H.useLayoutEffect(b,B)},ie.useMemo=function(b,B){return Q.H.useMemo(b,B)},ie.useOptimistic=function(b,B){return Q.H.useOptimistic(b,B)},ie.useReducer=function(b,B,H){return Q.H.useReducer(b,B,H)},ie.useRef=function(b){return Q.H.useRef(b)},ie.useState=function(b){return Q.H.useState(b)},ie.useSyncExternalStore=function(b,B,H){return Q.H.useSyncExternalStore(b,B,H)},ie.useTransition=function(){return Q.H.useTransition()},ie.version="19.2.3",ie}var cy;function Fu(){return cy||(cy=1,Xc.exports=gg()),Xc.exports}var N=Fu();const Ln=Al(N),jg=({chord:o})=>R.jsx("span",{className:"sb-chord",children:`${o} `});var Vc={exports:{}};var uy;function vg(){return uy||(uy=1,(function(o){(function(){var t={}.hasOwnProperty;function s(){for(var d="",m=0;m<arguments.length;m++){var y=arguments[m];y&&(d=u(d,r(y)))}return d}function r(d){if(typeof d=="string"||typeof d=="number")return d;if(typeof d!="object")return"";if(Array.isArray(d))return s.apply(null,d);if(d.toString!==Object.prototype.toString&&!d.toString.toString().includes("[native code]"))return d.toString();var m="";for(var y in d)t.call(d,y)&&d[y]&&(m=u(m,y));return m}function u(d,m){return m?d?d+" "+m:d+m:d}o.exports?(s.default=s,o.exports=s):window.classNames=s})()})(Vc)),Vc.exports}var kg=vg();const en=Al(kg),Ag=({song:o,chordsShown:t,starredCount:s})=>R.jsxs(R.Fragment,{children:[R.jsxs("div",{className:"row songtitle mt-1 mb-1",children:[R.jsxs("div",{className:en("col-10",{"sb-starred-song":o.starred}),children:[o.number,". ",o.title]}),R.jsx("div",{className:"col-2 sb-star-info sb-lyrics",children:o.starred?`${o.starredNumber}/${s}`:R.jsx(R.Fragment,{children:" "})})]}),o.body.map(({lyrics:r,chords:u},d)=>R.jsxs("div",{className:"row",children:[R.jsx("div",{className:"col",children:r||R.jsx("br",{})}),t&&u.length>0&&R.jsx("div",{className:"col-4",children:u.map((m,y)=>R.jsx(jg,{chord:m},y))})]},`songline${d}`))]});function Cg(o,t){if(o==null)return{};var s={};for(var r in o)if({}.hasOwnProperty.call(o,r)){if(t.indexOf(r)!==-1)continue;s[r]=o[r]}return s}function pu(o,t){return pu=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(s,r){return s.__proto__=r,s},pu(o,t)}function Dg(o,t){o.prototype=Object.create(t.prototype),o.prototype.constructor=o,pu(o,t)}const Tg=["xxl","xl","lg","md","sm","xs"],Eg="xs",Uu=N.createContext({prefixes:{},breakpoints:Tg,minBreakpoint:Eg}),{Consumer:cC,Provider:uC}=Uu;function Ni(o,t){const{prefixes:s}=N.useContext(Uu);return o||s[t]||t}function Sg(){const{dir:o}=N.useContext(Uu);return o==="rtl"}function Cl(o){return o&&o.ownerDocument||document}function Gg(o){var t=Cl(o);return t&&t.defaultView||window}function Og(o,t){return Gg(o).getComputedStyle(o,t)}var Bg=/([A-Z])/g;function xg(o){return o.replace(Bg,"-$1").toLowerCase()}var Ng=/^ms-/;function rl(o){return xg(o).replace(Ng,"-ms-")}var Rg=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;function Mg(o){return!!(o&&Rg.test(o))}function Oi(o,t){var s="",r="";if(typeof t=="string")return o.style.getPropertyValue(rl(t))||Og(o).getPropertyValue(rl(t));Object.keys(t).forEach(function(u){var d=t[u];!d&&d!==0?o.style.removeProperty(rl(u)):Mg(u)?r+=u+"("+d+") ":s+=rl(u)+": "+d+";"}),r&&(s+="transform: "+r+";"),o.style.cssText+=";"+s}var Qc={exports:{}},Ic,fy;function _g(){if(fy)return Ic;fy=1;var o="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return Ic=o,Ic}var $c,dy;function Pg(){if(dy)return $c;dy=1;var o=_g();function t(){}function s(){}return s.resetWarningCache=t,$c=function(){function r(m,y,h,w,v,A){if(A!==o){var G=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw G.name="Invariant Violation",G}}r.isRequired=r;function u(){return r}var d={array:r,bigint:r,bool:r,func:r,number:r,object:r,string:r,symbol:r,any:r,arrayOf:u,element:r,elementType:r,instanceOf:u,node:r,objectOf:u,oneOf:u,oneOfType:u,shape:u,exact:u,checkPropTypes:s,resetWarningCache:t};return d.PropTypes=d,d},$c}var my;function Hg(){return my||(my=1,Qc.exports=Pg()()),Qc.exports}var Jg=Hg();const eu=Al(Jg);var nu={exports:{}},un={};var zy;function Fg(){if(zy)return un;zy=1;var o=Fu();function t(h){var w="https://react.dev/errors/"+h;if(1<arguments.length){w+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)w+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+h+"; visit "+w+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(){}var r={d:{f:s,r:function(){throw Error(t(522))},D:s,C:s,L:s,m:s,X:s,S:s,M:s},p:0,findDOMNode:null},u=Symbol.for("react.portal");function d(h,w,v){var A=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:u,key:A==null?null:""+A,children:h,containerInfo:w,implementation:v}}var m=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function y(h,w){if(h==="font")return"";if(typeof w=="string")return w==="use-credentials"?w:""}return un.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,un.createPortal=function(h,w){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!w||w.nodeType!==1&&w.nodeType!==9&&w.nodeType!==11)throw Error(t(299));return d(h,w,null,v)},un.flushSync=function(h){var w=m.T,v=r.p;try{if(m.T=null,r.p=2,h)return h()}finally{m.T=w,r.p=v,r.d.f()}},un.preconnect=function(h,w){typeof h=="string"&&(w?(w=w.crossOrigin,w=typeof w=="string"?w==="use-credentials"?w:"":void 0):w=null,r.d.C(h,w))},un.prefetchDNS=function(h){typeof h=="string"&&r.d.D(h)},un.preinit=function(h,w){if(typeof h=="string"&&w&&typeof w.as=="string"){var v=w.as,A=y(v,w.crossOrigin),G=typeof w.integrity=="string"?w.integrity:void 0,_=typeof w.fetchPriority=="string"?w.fetchPriority:void 0;v==="style"?r.d.S(h,typeof w.precedence=="string"?w.precedence:void 0,{crossOrigin:A,integrity:G,fetchPriority:_}):v==="script"&&r.d.X(h,{crossOrigin:A,integrity:G,fetchPriority:_,nonce:typeof w.nonce=="string"?w.nonce:void 0})}},un.preinitModule=function(h,w){if(typeof h=="string")if(typeof w=="object"&&w!==null){if(w.as==null||w.as==="script"){var v=y(w.as,w.crossOrigin);r.d.M(h,{crossOrigin:v,integrity:typeof w.integrity=="string"?w.integrity:void 0,nonce:typeof w.nonce=="string"?w.nonce:void 0})}}else w==null&&r.d.M(h)},un.preload=function(h,w){if(typeof h=="string"&&typeof w=="object"&&w!==null&&typeof w.as=="string"){var v=w.as,A=y(v,w.crossOrigin);r.d.L(h,v,{crossOrigin:A,integrity:typeof w.integrity=="string"?w.integrity:void 0,nonce:typeof w.nonce=="string"?w.nonce:void 0,type:typeof w.type=="string"?w.type:void 0,fetchPriority:typeof w.fetchPriority=="string"?w.fetchPriority:void 0,referrerPolicy:typeof w.referrerPolicy=="string"?w.referrerPolicy:void 0,imageSrcSet:typeof w.imageSrcSet=="string"?w.imageSrcSet:void 0,imageSizes:typeof w.imageSizes=="string"?w.imageSizes:void 0,media:typeof w.media=="string"?w.media:void 0})}},un.preloadModule=function(h,w){if(typeof h=="string")if(w){var v=y(w.as,w.crossOrigin);r.d.m(h,{as:typeof w.as=="string"&&w.as!=="script"?w.as:void 0,crossOrigin:v,integrity:typeof w.integrity=="string"?w.integrity:void 0})}else r.d.m(h)},un.requestFormReset=function(h){r.d.r(h)},un.unstable_batchedUpdates=function(h,w){return h(w)},un.useFormState=function(h,w,v){return m.H.useFormState(h,w,v)},un.useFormStatus=function(){return m.H.useHostTransitionStatus()},un.version="19.2.3",un}var yy;function jw(){if(yy)return nu.exports;yy=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),nu.exports=Fg(),nu.exports}var Ug=jw();const Et=Al(Ug),wy={disabled:!1},vw=Ln.createContext(null);var Lg=function(t){return t.scrollTop},xo="unmounted",Ci="exited",ni="entering",Di="entered",bu="exiting",Da=(function(o){Dg(t,o);function t(r,u){var d;d=o.call(this,r,u)||this;var m=u,y=m&&!m.isMounting?r.enter:r.appear,h;return d.appearStatus=null,r.in?y?(h=Ci,d.appearStatus=ni):h=Di:r.unmountOnExit||r.mountOnEnter?h=xo:h=Ci,d.state={status:h},d.nextCallback=null,d}t.getDerivedStateFromProps=function(u,d){var m=u.in;return m&&d.status===xo?{status:Ci}:null};var s=t.prototype;return s.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},s.componentDidUpdate=function(u){var d=null;if(u!==this.props){var m=this.state.status;this.props.in?m!==ni&&m!==Di&&(d=ni):(m===ni||m===Di)&&(d=bu)}this.updateStatus(!1,d)},s.componentWillUnmount=function(){this.cancelNextCallback()},s.getTimeouts=function(){var u=this.props.timeout,d,m,y;return d=m=y=u,u!=null&&typeof u!="number"&&(d=u.exit,m=u.enter,y=u.appear!==void 0?u.appear:m),{exit:d,enter:m,appear:y}},s.updateStatus=function(u,d){if(u===void 0&&(u=!1),d!==null)if(this.cancelNextCallback(),d===ni){if(this.props.unmountOnExit||this.props.mountOnEnter){var m=this.props.nodeRef?this.props.nodeRef.current:Et.findDOMNode(this);m&&Lg(m)}this.performEnter(u)}else this.performExit();else this.props.unmountOnExit&&this.state.status===Ci&&this.setState({status:xo})},s.performEnter=function(u){var d=this,m=this.props.enter,y=this.context?this.context.isMounting:u,h=this.props.nodeRef?[y]:[Et.findDOMNode(this),y],w=h[0],v=h[1],A=this.getTimeouts(),G=y?A.appear:A.enter;if(!u&&!m||wy.disabled){this.safeSetState({status:Di},function(){d.props.onEntered(w)});return}this.props.onEnter(w,v),this.safeSetState({status:ni},function(){d.props.onEntering(w,v),d.onTransitionEnd(G,function(){d.safeSetState({status:Di},function(){d.props.onEntered(w,v)})})})},s.performExit=function(){var u=this,d=this.props.exit,m=this.getTimeouts(),y=this.props.nodeRef?void 0:Et.findDOMNode(this);if(!d||wy.disabled){this.safeSetState({status:Ci},function(){u.props.onExited(y)});return}this.props.onExit(y),this.safeSetState({status:bu},function(){u.props.onExiting(y),u.onTransitionEnd(m.exit,function(){u.safeSetState({status:Ci},function(){u.props.onExited(y)})})})},s.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},s.safeSetState=function(u,d){d=this.setNextCallback(d),this.setState(u,d)},s.setNextCallback=function(u){var d=this,m=!0;return this.nextCallback=function(y){m&&(m=!1,d.nextCallback=null,u(y))},this.nextCallback.cancel=function(){m=!1},this.nextCallback},s.onTransitionEnd=function(u,d){this.setNextCallback(d);var m=this.props.nodeRef?this.props.nodeRef.current:Et.findDOMNode(this),y=u==null&&!this.props.addEndListener;if(!m||y){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var h=this.props.nodeRef?[this.nextCallback]:[m,this.nextCallback],w=h[0],v=h[1];this.props.addEndListener(w,v)}u!=null&&setTimeout(this.nextCallback,u)},s.render=function(){var u=this.state.status;if(u===xo)return null;var d=this.props,m=d.children;d.in,d.mountOnEnter,d.unmountOnExit,d.appear,d.enter,d.exit,d.timeout,d.addEndListener,d.onEnter,d.onEntering,d.onEntered,d.onExit,d.onExiting,d.onExited,d.nodeRef;var y=Cg(d,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return Ln.createElement(vw.Provider,{value:null},typeof m=="function"?m(u,y):Ln.cloneElement(Ln.Children.only(m),y))},t})(Ln.Component);Da.contextType=vw;Da.propTypes={};function gt(){}Da.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:gt,onEntering:gt,onEntered:gt,onExit:gt,onExiting:gt,onExited:gt};Da.UNMOUNTED=xo;Da.EXITED=Ci;Da.ENTERING=ni;Da.ENTERED=Di;Da.EXITING=bu;function Kg(o){return o.code==="Escape"||o.keyCode===27}function Zg(){const o=N.version.split(".");return{major:+o[0],minor:+o[1],patch:+o[2]}}function Dl(o){if(!o||typeof o=="function")return null;const{major:t}=Zg();return t>=19?o.props.ref:o.ref}const xt=!!(typeof window<"u"&&window.document&&window.document.createElement);var gu=!1,ju=!1;try{var au={get passive(){return gu=!0},get once(){return ju=gu=!0}};xt&&(window.addEventListener("test",au,au),window.removeEventListener("test",au,!0))}catch{}function kw(o,t,s,r){if(r&&typeof r!="boolean"&&!ju){var u=r.once,d=r.capture,m=s;!ju&&u&&(m=s.__once||function y(h){this.removeEventListener(t,y,d),s.call(this,h)},s.__once=m),o.addEventListener(t,m,gu?r:d)}o.addEventListener(t,s,r)}function vu(o,t,s,r){var u=r&&typeof r!="boolean"?r.capture:r;o.removeEventListener(t,s,u),s.__once&&o.removeEventListener(t,s.__once,u)}function hl(o,t,s,r){return kw(o,t,s,r),function(){vu(o,t,s,r)}}function Wg(o,t,s,r){if(r===void 0&&(r=!0),o){var u=document.createEvent("HTMLEvents");u.initEvent(t,s,r),o.dispatchEvent(u)}}function Yg(o){var t=Oi(o,"transitionDuration")||"",s=t.indexOf("ms")===-1?1e3:1;return parseFloat(t)*s}function qg(o,t,s){s===void 0&&(s=5);var r=!1,u=setTimeout(function(){r||Wg(o,"transitionend",!0)},t+s),d=hl(o,"transitionend",function(){r=!0},{once:!0});return function(){clearTimeout(u),d()}}function Aw(o,t,s,r){s==null&&(s=Yg(o)||0);var u=qg(o,s,r),d=hl(o,"transitionend",t);return function(){u(),d()}}function hy(o,t){const s=Oi(o,t)||"",r=s.indexOf("ms")===-1?1e3:1;return parseFloat(s)*r}function Xg(o,t){const s=hy(o,"transitionDuration"),r=hy(o,"transitionDelay"),u=Aw(o,d=>{d.target===o&&(u(),t(d))},s+r)}function Vg(o){o.offsetHeight}const py=o=>!o||typeof o=="function"?o:t=>{o.current=t};function Qg(o,t){const s=py(o),r=py(t);return u=>{s&&s(u),r&&r(u)}}function Cw(o,t){return N.useMemo(()=>Qg(o,t),[o,t])}function Ig(o){return o&&"setState"in o?Et.findDOMNode(o):o??null}const Dw=Ln.forwardRef(({onEnter:o,onEntering:t,onEntered:s,onExit:r,onExiting:u,onExited:d,addEndListener:m,children:y,childRef:h,...w},v)=>{const A=N.useRef(null),G=Cw(A,h),_=ce=>{G(Ig(ce))},L=ce=>Q=>{ce&&A.current&&ce(A.current,Q)},U=N.useCallback(L(o),[o]),ee=N.useCallback(L(t),[t]),q=N.useCallback(L(s),[s]),W=N.useCallback(L(r),[r]),I=N.useCallback(L(u),[u]),ue=N.useCallback(L(d),[d]),Y=N.useCallback(L(m),[m]);return R.jsx(Da,{ref:v,...w,onEnter:U,onEntered:q,onEntering:ee,onExit:W,onExited:ue,onExiting:I,addEndListener:Y,nodeRef:A,children:typeof y=="function"?(ce,Q)=>y(ce,{...Q,ref:_}):Ln.cloneElement(y,{ref:_})})});Dw.displayName="TransitionWrapper";function $g(o){const t=N.useRef(o);return N.useEffect(()=>{t.current=o},[o]),t}function ku(o){const t=$g(o);return N.useCallback(function(...s){return t.current&&t.current(...s)},[t])}const ej=(o=>N.forwardRef((t,s)=>R.jsx("div",{...t,ref:s,className:en(t.className,o)})));function nj(o){const t=N.useRef(o);return N.useEffect(()=>{t.current=o},[o]),t}function Ti(o){const t=nj(o);return N.useCallback(function(...s){return t.current&&t.current(...s)},[t])}function aj(){const o=N.useRef(!0),t=N.useRef(()=>o.current);return N.useEffect(()=>(o.current=!0,()=>{o.current=!1}),[]),t.current}function ij(o){const t=N.useRef(null);return N.useEffect(()=>{t.current=o}),t.current}const tj=typeof global<"u"&&global.navigator&&global.navigator.product==="ReactNative",oj=typeof document<"u",by=oj||tj?N.useLayoutEffect:N.useEffect,sj=["as","disabled"];function lj(o,t){if(o==null)return{};var s={};for(var r in o)if({}.hasOwnProperty.call(o,r)){if(t.indexOf(r)>=0)continue;s[r]=o[r]}return s}function rj(o){return!o||o.trim()==="#"}function Tw({tagName:o,disabled:t,href:s,target:r,rel:u,role:d,onClick:m,tabIndex:y=0,type:h}){o||(s!=null||r!=null||u!=null?o="a":o="button");const w={tagName:o};if(o==="button")return[{type:h||"button",disabled:t},w];const v=G=>{if((t||o==="a"&&rj(s))&&G.preventDefault(),t){G.stopPropagation();return}m?.(G)},A=G=>{G.key===" "&&(G.preventDefault(),v(G))};return o==="a"&&(s||(s="#"),t&&(s=void 0)),[{role:d??"button",disabled:void 0,tabIndex:t?void 0:y,href:s,target:o==="a"?r:void 0,"aria-disabled":t||void 0,rel:o==="a"?u:void 0,onClick:v,onKeyDown:A},w]}const cj=N.forwardRef((o,t)=>{let{as:s,disabled:r}=o,u=lj(o,sj);const[d,{tagName:m}]=Tw(Object.assign({tagName:s,disabled:r},u));return R.jsx(m,Object.assign({},u,d,{ref:t}))});cj.displayName="Button";const uj={[ni]:"show",[Di]:"show"},Lu=N.forwardRef(({className:o,children:t,transitionClasses:s={},onEnter:r,...u},d)=>{const m={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,...u},y=N.useCallback((h,w)=>{Vg(h),r?.(h,w)},[r]);return R.jsx(Dw,{ref:d,addEndListener:Xg,...m,onEnter:y,childRef:Dl(t),children:(h,w)=>N.cloneElement(t,{...w,className:en("fade",o,t.props.className,uj[h],s[h])})})});Lu.displayName="Fade";const fj={"aria-label":eu.string,onClick:eu.func,variant:eu.oneOf(["white"])},Ku=N.forwardRef(({className:o,variant:t,"aria-label":s="Close",...r},u)=>R.jsx("button",{ref:u,type:"button",className:en("btn-close",t&&`btn-close-${t}`,o),"aria-label":s,...r}));Ku.displayName="CloseButton";Ku.propTypes=fj;const Tt=N.forwardRef(({as:o,bsPrefix:t,variant:s="primary",size:r,active:u=!1,disabled:d=!1,className:m,...y},h)=>{const w=Ni(t,"btn"),[v,{tagName:A}]=Tw({tagName:o,disabled:d,...y}),G=A;return R.jsx(G,{...v,...y,ref:h,disabled:d,className:en(m,w,u&&"active",s&&`${w}-${s}`,r&&`${w}-${r}`,y.href&&d&&"disabled")})});Tt.displayName="Button";function dj(o){const t=N.useRef(o);return t.current=o,t}function mj(o){const t=dj(o);N.useEffect(()=>()=>t.current(),[])}var zj=Function.prototype.bind.call(Function.prototype.call,[].slice);function jt(o,t){return zj(o.querySelectorAll(t))}function gy(o,t){if(o.contains)return o.contains(t);if(o.compareDocumentPosition)return o===t||!!(o.compareDocumentPosition(t)&16)}const yj="data-rr-ui-";function wj(o){return`${yj}${o}`}const Ew=N.createContext(xt?window:void 0);Ew.Provider;function Zu(){return N.useContext(Ew)}const jy=o=>!o||typeof o=="function"?o:t=>{o.current=t};function hj(o,t){const s=jy(o),r=jy(t);return u=>{s&&s(u),r&&r(u)}}function Wu(o,t){return N.useMemo(()=>hj(o,t),[o,t])}var cl;function vy(o){if((!cl&&cl!==0||o)&&xt){var t=document.createElement("div");t.style.position="absolute",t.style.top="-9999px",t.style.width="50px",t.style.height="50px",t.style.overflow="scroll",document.body.appendChild(t),cl=t.offsetWidth-t.clientWidth,document.body.removeChild(t)}return cl}function pj(){return N.useState(null)}function iu(o){o===void 0&&(o=Cl());try{var t=o.activeElement;return!t||!t.nodeName?null:t}catch{return o.body}}function bj(o){const t=N.useRef(o);return t.current=o,t}function gj(o){const t=bj(o);N.useEffect(()=>()=>t.current(),[])}function jj(o=document){const t=o.defaultView;return Math.abs(t.innerWidth-o.documentElement.clientWidth)}const ky=wj("modal-open");class Yu{constructor({ownerDocument:t,handleContainerOverflow:s=!0,isRTL:r=!1}={}){this.handleContainerOverflow=s,this.isRTL=r,this.modals=[],this.ownerDocument=t}getScrollbarWidth(){return jj(this.ownerDocument)}getElement(){return(this.ownerDocument||document).body}setModalAttributes(t){}removeModalAttributes(t){}setContainerStyle(t){const s={overflow:"hidden"},r=this.isRTL?"paddingLeft":"paddingRight",u=this.getElement();t.style={overflow:u.style.overflow,[r]:u.style[r]},t.scrollBarWidth&&(s[r]=`${parseInt(Oi(u,r)||"0",10)+t.scrollBarWidth}px`),u.setAttribute(ky,""),Oi(u,s)}reset(){[...this.modals].forEach(t=>this.remove(t))}removeContainerStyle(t){const s=this.getElement();s.removeAttribute(ky),Object.assign(s.style,t.style)}add(t){let s=this.modals.indexOf(t);return s!==-1||(s=this.modals.length,this.modals.push(t),this.setModalAttributes(t),s!==0)||(this.state={scrollBarWidth:this.getScrollbarWidth(),style:{}},this.handleContainerOverflow&&this.setContainerStyle(this.state)),s}remove(t){const s=this.modals.indexOf(t);s!==-1&&(this.modals.splice(s,1),!this.modals.length&&this.handleContainerOverflow&&this.removeContainerStyle(this.state),this.removeModalAttributes(t))}isTopModal(t){return!!this.modals.length&&this.modals[this.modals.length-1]===t}}const tu=(o,t)=>xt?o==null?(t||Cl()).body:(typeof o=="function"&&(o=o()),o&&"current"in o&&(o=o.current),o&&("nodeType"in o||o.getBoundingClientRect)?o:null):null;function vj(o,t){const s=Zu(),[r,u]=N.useState(()=>tu(o,s?.document));if(!r){const d=tu(o);d&&u(d)}return N.useEffect(()=>{},[t,r]),N.useEffect(()=>{const d=tu(o);d!==r&&u(d)},[o,r]),r}function kj({children:o,in:t,onExited:s,mountOnEnter:r,unmountOnExit:u}){const d=N.useRef(null),m=N.useRef(t),y=Ti(s);N.useEffect(()=>{t?m.current=!0:y(d.current)},[t,y]);const h=Wu(d,Dl(o)),w=N.cloneElement(o,{ref:h});return t?w:u||!m.current&&r?null:w}const Aj=["onEnter","onEntering","onEntered","onExit","onExiting","onExited","addEndListener","children"];function Cj(o,t){if(o==null)return{};var s={};for(var r in o)if({}.hasOwnProperty.call(o,r)){if(t.indexOf(r)>=0)continue;s[r]=o[r]}return s}function Dj(o){let{onEnter:t,onEntering:s,onEntered:r,onExit:u,onExiting:d,onExited:m,addEndListener:y,children:h}=o,w=Cj(o,Aj);const v=N.useRef(null),A=Wu(v,Dl(h)),G=ue=>Y=>{ue&&v.current&&ue(v.current,Y)},_=N.useCallback(G(t),[t]),L=N.useCallback(G(s),[s]),U=N.useCallback(G(r),[r]),ee=N.useCallback(G(u),[u]),q=N.useCallback(G(d),[d]),W=N.useCallback(G(m),[m]),I=N.useCallback(G(y),[y]);return Object.assign({},w,{nodeRef:v},t&&{onEnter:_},s&&{onEntering:L},r&&{onEntered:U},u&&{onExit:ee},d&&{onExiting:q},m&&{onExited:W},y&&{addEndListener:I},{children:typeof h=="function"?(ue,Y)=>h(ue,Object.assign({},Y,{ref:A})):N.cloneElement(h,{ref:A})})}const Tj=["component"];function Ej(o,t){if(o==null)return{};var s={};for(var r in o)if({}.hasOwnProperty.call(o,r)){if(t.indexOf(r)>=0)continue;s[r]=o[r]}return s}const Sj=N.forwardRef((o,t)=>{let{component:s}=o,r=Ej(o,Tj);const u=Dj(r);return R.jsx(s,Object.assign({ref:t},u))});function Gj({in:o,onTransition:t}){const s=N.useRef(null),r=N.useRef(!0),u=Ti(t);return by(()=>{if(!s.current)return;let d=!1;return u({in:o,element:s.current,initial:r.current,isStale:()=>d}),()=>{d=!0}},[o,u]),by(()=>(r.current=!1,()=>{r.current=!0}),[]),s}function Oj({children:o,in:t,onExited:s,onEntered:r,transition:u}){const[d,m]=N.useState(!t);t&&d&&m(!1);const y=Gj({in:!!t,onTransition:w=>{const v=()=>{w.isStale()||(w.in?r?.(w.element,w.initial):(m(!0),s?.(w.element)))};Promise.resolve(u(w)).then(v,A=>{throw w.in||m(!0),A})}}),h=Wu(y,Dl(o));return d&&!t?null:N.cloneElement(o,{ref:h})}function Ay(o,t,s){return o?R.jsx(Sj,Object.assign({},s,{component:o})):t?R.jsx(Oj,Object.assign({},s,{transition:t})):R.jsx(kj,Object.assign({},s))}const Bj=["show","role","className","style","children","backdrop","keyboard","onBackdropClick","onEscapeKeyDown","transition","runTransition","backdropTransition","runBackdropTransition","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","renderDialog","renderBackdrop","manager","container","onShow","onHide","onExit","onExited","onExiting","onEnter","onEntering","onEntered"];function xj(o,t){if(o==null)return{};var s={};for(var r in o)if({}.hasOwnProperty.call(o,r)){if(t.indexOf(r)>=0)continue;s[r]=o[r]}return s}let ou;function Nj(o){return ou||(ou=new Yu({ownerDocument:o?.document})),ou}function Rj(o){const t=Zu(),s=o||Nj(t),r=N.useRef({dialog:null,backdrop:null});return Object.assign(r.current,{add:()=>s.add(r.current),remove:()=>s.remove(r.current),isTopModal:()=>s.isTopModal(r.current),setDialogRef:N.useCallback(u=>{r.current.dialog=u},[]),setBackdropRef:N.useCallback(u=>{r.current.backdrop=u},[])})}const Sw=N.forwardRef((o,t)=>{let{show:s=!1,role:r="dialog",className:u,style:d,children:m,backdrop:y=!0,keyboard:h=!0,onBackdropClick:w,onEscapeKeyDown:v,transition:A,runTransition:G,backdropTransition:_,runBackdropTransition:L,autoFocus:U=!0,enforceFocus:ee=!0,restoreFocus:q=!0,restoreFocusOptions:W,renderDialog:I,renderBackdrop:ue=Ce=>R.jsx("div",Object.assign({},Ce)),manager:Y,container:ce,onShow:Q,onHide:Oe=()=>{},onExit:Qe,onExited:dn,onExiting:rn,onEnter:$,onEntering:_e,onEntered:je}=o,He=xj(o,Bj);const E=Zu(),P=vj(ce),J=Rj(Y),re=aj(),me=ij(s),[b,B]=N.useState(!s),H=N.useRef(null);N.useImperativeHandle(t,()=>J,[J]),xt&&!me&&s&&(H.current=iu(E?.document)),s&&b&&B(!1);const F=Ti(()=>{if(J.add(),On.current=hl(document,"keydown",Xe),Se.current=hl(document,"focus",()=>setTimeout(oe),!0),Q&&Q(),U){var Ce,Sa;const oi=iu((Ce=(Sa=J.dialog)==null?void 0:Sa.ownerDocument)!=null?Ce:E?.document);J.dialog&&oi&&!gy(J.dialog,oi)&&(H.current=oi,J.dialog.focus())}}),ae=Ti(()=>{if(J.remove(),On.current==null||On.current(),Se.current==null||Se.current(),q){var Ce;(Ce=H.current)==null||Ce.focus==null||Ce.focus(W),H.current=null}});N.useEffect(()=>{!s||!P||F()},[s,P,F]),N.useEffect(()=>{b&&ae()},[b,ae]),gj(()=>{ae()});const oe=Ti(()=>{if(!ee||!re()||!J.isTopModal())return;const Ce=iu(E?.document);J.dialog&&Ce&&!gy(J.dialog,Ce)&&J.dialog.focus()}),we=Ti(Ce=>{Ce.target===Ce.currentTarget&&(w?.(Ce),y===!0&&Oe())}),Xe=Ti(Ce=>{h&&Kg(Ce)&&J.isTopModal()&&(v?.(Ce),Ce.defaultPrevented||Oe())}),Se=N.useRef(),On=N.useRef(),na=(...Ce)=>{B(!0),dn?.(...Ce)};if(!P)return null;const Xn=Object.assign({role:r,ref:J.setDialogRef,"aria-modal":r==="dialog"?!0:void 0},He,{style:d,className:u,tabIndex:-1});let Ea=I?I(Xn):R.jsx("div",Object.assign({},Xn,{children:N.cloneElement(m,{role:"document"})}));Ea=Ay(A,G,{unmountOnExit:!0,mountOnEnter:!0,appear:!0,in:!!s,onExit:Qe,onExiting:rn,onExited:na,onEnter:$,onEntering:_e,onEntered:je,children:Ea});let mn=null;return y&&(mn=ue({ref:J.setBackdropRef,onClick:we}),mn=Ay(_,L,{in:!!s,appear:!0,mountOnEnter:!0,unmountOnExit:!0,children:mn})),R.jsx(R.Fragment,{children:Et.createPortal(R.jsxs(R.Fragment,{children:[mn,Ea]}),P)})});Sw.displayName="Modal";const Mj=Object.assign(Sw,{Manager:Yu});function _j(o,t){return o.classList?o.classList.contains(t):(" "+(o.className.baseVal||o.className)+" ").indexOf(" "+t+" ")!==-1}function Pj(o,t){o.classList?o.classList.add(t):_j(o,t)||(typeof o.className=="string"?o.className=o.className+" "+t:o.setAttribute("class",(o.className&&o.className.baseVal||"")+" "+t))}function Cy(o,t){return o.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function Hj(o,t){o.classList?o.classList.remove(t):typeof o.className=="string"?o.className=Cy(o.className,t):o.setAttribute("class",Cy(o.className&&o.className.baseVal||"",t))}const vt={FIXED_CONTENT:".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",STICKY_CONTENT:".sticky-top",NAVBAR_TOGGLER:".navbar-toggler"};class Jj extends Yu{adjustAndStore(t,s,r){const u=s.style[t];s.dataset[t]=u,Oi(s,{[t]:`${parseFloat(Oi(s,t))+r}px`})}restore(t,s){const r=s.dataset[t];r!==void 0&&(delete s.dataset[t],Oi(s,{[t]:r}))}setContainerStyle(t){super.setContainerStyle(t);const s=this.getElement();if(Pj(s,"modal-open"),!t.scrollBarWidth)return;const r=this.isRTL?"paddingLeft":"paddingRight",u=this.isRTL?"marginLeft":"marginRight";jt(s,vt.FIXED_CONTENT).forEach(d=>this.adjustAndStore(r,d,t.scrollBarWidth)),jt(s,vt.STICKY_CONTENT).forEach(d=>this.adjustAndStore(u,d,-t.scrollBarWidth)),jt(s,vt.NAVBAR_TOGGLER).forEach(d=>this.adjustAndStore(u,d,t.scrollBarWidth))}removeContainerStyle(t){super.removeContainerStyle(t);const s=this.getElement();Hj(s,"modal-open");const r=this.isRTL?"paddingLeft":"paddingRight",u=this.isRTL?"marginLeft":"marginRight";jt(s,vt.FIXED_CONTENT).forEach(d=>this.restore(r,d)),jt(s,vt.STICKY_CONTENT).forEach(d=>this.restore(u,d)),jt(s,vt.NAVBAR_TOGGLER).forEach(d=>this.restore(u,d))}}let su;function Fj(o){return su||(su=new Jj(o)),su}const Gw=N.forwardRef(({className:o,bsPrefix:t,as:s="div",...r},u)=>(t=Ni(t,"modal-body"),R.jsx(s,{ref:u,className:en(o,t),...r})));Gw.displayName="ModalBody";const Ow=N.createContext({onHide(){}}),qu=N.forwardRef(({bsPrefix:o,className:t,contentClassName:s,centered:r,size:u,fullscreen:d,children:m,scrollable:y,...h},w)=>{o=Ni(o,"modal");const v=`${o}-dialog`,A=typeof d=="string"?`${o}-fullscreen-${d}`:`${o}-fullscreen`;return R.jsx("div",{...h,ref:w,className:en(v,t,u&&`${o}-${u}`,r&&`${v}-centered`,y&&`${v}-scrollable`,d&&A),children:R.jsx("div",{className:en(`${o}-content`,s),children:m})})});qu.displayName="ModalDialog";const Bw=N.forwardRef(({className:o,bsPrefix:t,as:s="div",...r},u)=>(t=Ni(t,"modal-footer"),R.jsx(s,{ref:u,className:en(o,t),...r})));Bw.displayName="ModalFooter";const xw=N.forwardRef(({closeLabel:o="Close",closeVariant:t,closeButton:s=!1,onHide:r,children:u,...d},m)=>{const y=N.useContext(Ow),h=ku(()=>{y?.onHide(),r?.()});return R.jsxs("div",{ref:m,...d,children:[u,s&&R.jsx(Ku,{"aria-label":o,variant:t,onClick:h})]})});xw.displayName="AbstractModalHeader";const Nw=N.forwardRef(({bsPrefix:o,className:t,closeLabel:s="Close",closeButton:r=!1,...u},d)=>(o=Ni(o,"modal-header"),R.jsx(xw,{ref:d,...u,className:en(t,o),closeLabel:s,closeButton:r})));Nw.displayName="ModalHeader";const Uj=ej("h4"),Rw=N.forwardRef(({className:o,bsPrefix:t,as:s=Uj,...r},u)=>(t=Ni(t,"modal-title"),R.jsx(s,{ref:u,className:en(o,t),...r})));Rw.displayName="ModalTitle";function Lj(o){return R.jsx(Lu,{...o,timeout:null})}function Kj(o){return R.jsx(Lu,{...o,timeout:null})}const Mw=N.forwardRef(({bsPrefix:o,className:t,style:s,dialogClassName:r,contentClassName:u,children:d,dialogAs:m=qu,"data-bs-theme":y,"aria-labelledby":h,"aria-describedby":w,"aria-label":v,show:A=!1,animation:G=!0,backdrop:_=!0,keyboard:L=!0,onEscapeKeyDown:U,onShow:ee,onHide:q,container:W,autoFocus:I=!0,enforceFocus:ue=!0,restoreFocus:Y=!0,restoreFocusOptions:ce,onEntered:Q,onExit:Oe,onExiting:Qe,onEnter:dn,onEntering:rn,onExited:$,backdropClassName:_e,manager:je,...He},E)=>{const[P,J]=N.useState({}),[re,me]=N.useState(!1),b=N.useRef(!1),B=N.useRef(!1),H=N.useRef(null),[F,ae]=pj(),oe=Cw(E,ae),we=ku(q),Xe=Sg();o=Ni(o,"modal");const Se=N.useMemo(()=>({onHide:we}),[we]);function On(){return je||Fj({isRTL:Xe})}function na(pe){if(!xt)return;const aa=On().getScrollbarWidth()>0,si=pe.scrollHeight>Cl(pe).documentElement.clientHeight;J({paddingRight:aa&&!si?vy():void 0,paddingLeft:!aa&&si?vy():void 0})}const Xn=ku(()=>{F&&na(F.dialog)});mj(()=>{vu(window,"resize",Xn),H.current==null||H.current()});const Ea=()=>{b.current=!0},mn=pe=>{b.current&&F&&pe.target===F.dialog&&(B.current=!0),b.current=!1},Ce=()=>{me(!0),H.current=Aw(F.dialog,()=>{me(!1)})},Sa=pe=>{pe.target===pe.currentTarget&&Ce()},oi=pe=>{if(_==="static"){Sa(pe);return}if(B.current||pe.target!==pe.currentTarget){B.current=!1;return}q?.()},Zo=pe=>{L?U?.(pe):(pe.preventDefault(),_==="static"&&Ce())},Rt=(pe,aa)=>{pe&&na(pe),dn?.(pe,aa)},Mt=pe=>{H.current==null||H.current(),Oe?.(pe)},_t=(pe,aa)=>{rn?.(pe,aa),kw(window,"resize",Xn)},xl=pe=>{pe&&(pe.style.display=""),$?.(pe),vu(window,"resize",Xn)},Nl=N.useCallback(pe=>R.jsx("div",{...pe,className:en(`${o}-backdrop`,_e,!G&&"show")}),[G,_e,o]),cn={...s,...P};cn.display="block";const Rl=pe=>R.jsx("div",{role:"dialog",...pe,style:cn,className:en(t,o,re&&`${o}-static`,!G&&"show"),onClick:_?oi:void 0,onMouseUp:mn,"data-bs-theme":y,"aria-label":v,"aria-labelledby":h,"aria-describedby":w,children:R.jsx(m,{...He,onMouseDown:Ea,className:r,contentClassName:u,children:d})});return R.jsx(Ow.Provider,{value:Se,children:R.jsx(Mj,{show:A,ref:oe,backdrop:_,container:W,keyboard:!0,autoFocus:I,enforceFocus:ue,restoreFocus:Y,restoreFocusOptions:ce,onEscapeKeyDown:Zo,onShow:ee,onHide:q,onEnter:Rt,onEntering:_t,onEntered:Q,onExit:Mt,onExiting:Qe,onExited:xl,manager:On(),transition:G?Lj:void 0,backdropTransition:G?Kj:void 0,renderBackdrop:Nl,renderDialog:Rl})})});Mw.displayName="Modal";const ul=Object.assign(Mw,{Body:Gw,Header:Nw,Title:Rw,Footer:Bw,Dialog:qu,TRANSITION_DURATION:300,BACKDROP_TRANSITION_DURATION:150});function Au(o,t){(t==null||t>o.length)&&(t=o.length);for(var s=0,r=Array(t);s<t;s++)r[s]=o[s];return r}function Zj(o){if(Array.isArray(o))return o}function Wj(o){if(Array.isArray(o))return Au(o)}function Yj(o,t){if(!(o instanceof t))throw new TypeError("Cannot call a class as a function")}function qj(o,t){for(var s=0;s<t.length;s++){var r=t[s];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(o,_w(r.key),r)}}function Xj(o,t,s){return t&&qj(o.prototype,t),Object.defineProperty(o,"prototype",{writable:!1}),o}function ml(o,t){var s=typeof Symbol<"u"&&o[Symbol.iterator]||o["@@iterator"];if(!s){if(Array.isArray(o)||(s=Xu(o))||t){s&&(o=s);var r=0,u=function(){};return{s:u,n:function(){return r>=o.length?{done:!0}:{done:!1,value:o[r++]}},e:function(h){throw h},f:u}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var d,m=!0,y=!1;return{s:function(){s=s.call(o)},n:function(){var h=s.next();return m=h.done,h},e:function(h){y=!0,d=h},f:function(){try{m||s.return==null||s.return()}finally{if(y)throw d}}}}function le(o,t,s){return(t=_w(t))in o?Object.defineProperty(o,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):o[t]=s,o}function Vj(o){if(typeof Symbol<"u"&&o[Symbol.iterator]!=null||o["@@iterator"]!=null)return Array.from(o)}function Qj(o,t){var s=o==null?null:typeof Symbol<"u"&&o[Symbol.iterator]||o["@@iterator"];if(s!=null){var r,u,d,m,y=[],h=!0,w=!1;try{if(d=(s=s.call(o)).next,t===0){if(Object(s)!==s)return;h=!1}else for(;!(h=(r=d.call(s)).done)&&(y.push(r.value),y.length!==t);h=!0);}catch(v){w=!0,u=v}finally{try{if(!h&&s.return!=null&&(m=s.return(),Object(m)!==m))return}finally{if(w)throw u}}return y}}function Ij(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function $j(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Dy(o,t){var s=Object.keys(o);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(o);t&&(r=r.filter(function(u){return Object.getOwnPropertyDescriptor(o,u).enumerable})),s.push.apply(s,r)}return s}function M(o){for(var t=1;t<arguments.length;t++){var s=arguments[t]!=null?arguments[t]:{};t%2?Dy(Object(s),!0).forEach(function(r){le(o,r,s[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(s)):Dy(Object(s)).forEach(function(r){Object.defineProperty(o,r,Object.getOwnPropertyDescriptor(s,r))})}return o}function Tl(o,t){return Zj(o)||Qj(o,t)||Xu(o,t)||Ij()}function qn(o){return Wj(o)||Vj(o)||Xu(o)||$j()}function ev(o,t){if(typeof o!="object"||!o)return o;var s=o[Symbol.toPrimitive];if(s!==void 0){var r=s.call(o,t);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(o)}function _w(o){var t=ev(o,"string");return typeof t=="symbol"?t:t+""}function pl(o){"@babel/helpers - typeof";return pl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},pl(o)}function Xu(o,t){if(o){if(typeof o=="string")return Au(o,t);var s={}.toString.call(o).slice(8,-1);return s==="Object"&&o.constructor&&(s=o.constructor.name),s==="Map"||s==="Set"?Array.from(o):s==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s)?Au(o,t):void 0}}var Ty=function(){},Vu={},Pw={},Hw=null,Jw={mark:Ty,measure:Ty};try{typeof window<"u"&&(Vu=window),typeof document<"u"&&(Pw=document),typeof MutationObserver<"u"&&(Hw=MutationObserver),typeof performance<"u"&&(Jw=performance)}catch{}var nv=Vu.navigator||{},Ey=nv.userAgent,Sy=Ey===void 0?"":Ey,ai=Vu,Ne=Pw,Gy=Hw,fl=Jw;ai.document;var Ta=!!Ne.documentElement&&!!Ne.head&&typeof Ne.addEventListener=="function"&&typeof Ne.createElement=="function",Fw=~Sy.indexOf("MSIE")||~Sy.indexOf("Trident/"),lu,av=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,iv=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Whiteboard)?.*/i,Uw={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"},slab:{"fa-regular":"regular",faslr:"regular"},"slab-press":{"fa-regular":"regular",faslpr:"regular"},thumbprint:{"fa-light":"light",fatl:"light"},whiteboard:{"fa-semibold":"semibold",fawsb:"semibold"},notdog:{"fa-solid":"solid",fans:"solid"},"notdog-duo":{"fa-solid":"solid",fands:"solid"},etch:{"fa-solid":"solid",faes:"solid"},jelly:{"fa-regular":"regular",fajr:"regular"},"jelly-fill":{"fa-regular":"regular",fajfr:"regular"},"jelly-duo":{"fa-regular":"regular",fajdr:"regular"},chisel:{"fa-regular":"regular",facr:"regular"},utility:{"fa-semibold":"semibold",fausb:"semibold"},"utility-duo":{"fa-semibold":"semibold",faudsb:"semibold"},"utility-fill":{"fa-semibold":"semibold",faufsb:"semibold"}},tv={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},Lw=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-utility","fa-utility-duo","fa-utility-fill"],ln="classic",Jo="duotone",Kw="sharp",Zw="sharp-duotone",Ww="chisel",Yw="etch",qw="jelly",Xw="jelly-duo",Vw="jelly-fill",Qw="notdog",Iw="notdog-duo",$w="slab",eh="slab-press",nh="thumbprint",ah="utility",ih="utility-duo",th="utility-fill",oh="whiteboard",ov="Classic",sv="Duotone",lv="Sharp",rv="Sharp Duotone",cv="Chisel",uv="Etch",fv="Jelly",dv="Jelly Duo",mv="Jelly Fill",zv="Notdog",yv="Notdog Duo",wv="Slab",hv="Slab Press",pv="Thumbprint",bv="Utility",gv="Utility Duo",jv="Utility Fill",vv="Whiteboard",sh=[ln,Jo,Kw,Zw,Ww,Yw,qw,Xw,Vw,Qw,Iw,$w,eh,nh,ah,ih,th,oh];lu={},le(le(le(le(le(le(le(le(le(le(lu,ln,ov),Jo,sv),Kw,lv),Zw,rv),Ww,cv),Yw,uv),qw,fv),Xw,dv),Vw,mv),Qw,zv),le(le(le(le(le(le(le(le(lu,Iw,yv),$w,wv),eh,hv),nh,pv),ah,bv),ih,gv),th,jv),oh,vv);var kv={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"},slab:{400:"faslr"},"slab-press":{400:"faslpr"},whiteboard:{600:"fawsb"},thumbprint:{300:"fatl"},notdog:{900:"fans"},"notdog-duo":{900:"fands"},etch:{900:"faes"},chisel:{400:"facr"},jelly:{400:"fajr"},"jelly-fill":{400:"fajfr"},"jelly-duo":{400:"fajdr"},utility:{600:"fausb"},"utility-duo":{600:"faudsb"},"utility-fill":{600:"faufsb"}},Av={"Font Awesome 7 Free":{900:"fas",400:"far"},"Font Awesome 7 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 7 Brands":{400:"fab",normal:"fab"},"Font Awesome 7 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 7 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 7 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"},"Font Awesome 7 Jelly":{400:"fajr",normal:"fajr"},"Font Awesome 7 Jelly Fill":{400:"fajfr",normal:"fajfr"},"Font Awesome 7 Jelly Duo":{400:"fajdr",normal:"fajdr"},"Font Awesome 7 Slab":{400:"faslr",normal:"faslr"},"Font Awesome 7 Slab Press":{400:"faslpr",normal:"faslpr"},"Font Awesome 7 Thumbprint":{300:"fatl",normal:"fatl"},"Font Awesome 7 Notdog":{900:"fans",normal:"fans"},"Font Awesome 7 Notdog Duo":{900:"fands",normal:"fands"},"Font Awesome 7 Etch":{900:"faes",normal:"faes"},"Font Awesome 7 Chisel":{400:"facr",normal:"facr"},"Font Awesome 7 Whiteboard":{600:"fawsb",normal:"fawsb"},"Font Awesome 7 Utility":{600:"fausb",normal:"fausb"},"Font Awesome 7 Utility Duo":{600:"faudsb",normal:"faudsb"},"Font Awesome 7 Utility Fill":{600:"faufsb",normal:"faufsb"}},Cv=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["chisel",{defaultShortPrefixId:"facr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["etch",{defaultShortPrefixId:"faes",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["jelly",{defaultShortPrefixId:"fajr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-duo",{defaultShortPrefixId:"fajdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-fill",{defaultShortPrefixId:"fajfr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["notdog",{defaultShortPrefixId:"fans",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog-duo",{defaultShortPrefixId:"fands",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["slab",{defaultShortPrefixId:"faslr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press",{defaultShortPrefixId:"faslpr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["thumbprint",{defaultShortPrefixId:"fatl",defaultStyleId:"light",styleIds:["light"],futureStyleIds:[],defaultFontWeight:300}],["utility",{defaultShortPrefixId:"fausb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-duo",{defaultShortPrefixId:"faudsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-fill",{defaultShortPrefixId:"faufsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["whiteboard",{defaultShortPrefixId:"fawsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}]]),Dv={chisel:{regular:"facr"},classic:{brands:"fab",light:"fal",regular:"far",solid:"fas",thin:"fat"},duotone:{light:"fadl",regular:"fadr",solid:"fad",thin:"fadt"},etch:{solid:"faes"},jelly:{regular:"fajr"},"jelly-duo":{regular:"fajdr"},"jelly-fill":{regular:"fajfr"},notdog:{solid:"fans"},"notdog-duo":{solid:"fands"},sharp:{light:"fasl",regular:"fasr",solid:"fass",thin:"fast"},"sharp-duotone":{light:"fasdl",regular:"fasdr",solid:"fasds",thin:"fasdt"},slab:{regular:"faslr"},"slab-press":{regular:"faslpr"},thumbprint:{light:"fatl"},utility:{semibold:"fausb"},"utility-duo":{semibold:"faudsb"},"utility-fill":{semibold:"faufsb"},whiteboard:{semibold:"fawsb"}},lh=["fak","fa-kit","fakd","fa-kit-duotone"],Oy={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},Tv=["kit"],Ev="kit",Sv="kit-duotone",Gv="Kit",Ov="Kit Duotone";le(le({},Ev,Gv),Sv,Ov);var Bv={kit:{"fa-kit":"fak"}},xv={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},Nv={kit:{fak:"fa-kit"}},By={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},ru,dl={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Rv=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-utility","fa-utility-duo","fa-utility-fill"],Mv="classic",_v="duotone",Pv="sharp",Hv="sharp-duotone",Jv="chisel",Fv="etch",Uv="jelly",Lv="jelly-duo",Kv="jelly-fill",Zv="notdog",Wv="notdog-duo",Yv="slab",qv="slab-press",Xv="thumbprint",Vv="utility",Qv="utility-duo",Iv="utility-fill",$v="whiteboard",ek="Classic",nk="Duotone",ak="Sharp",ik="Sharp Duotone",tk="Chisel",ok="Etch",sk="Jelly",lk="Jelly Duo",rk="Jelly Fill",ck="Notdog",uk="Notdog Duo",fk="Slab",dk="Slab Press",mk="Thumbprint",zk="Utility",yk="Utility Duo",wk="Utility Fill",hk="Whiteboard";ru={},le(le(le(le(le(le(le(le(le(le(ru,Mv,ek),_v,nk),Pv,ak),Hv,ik),Jv,tk),Fv,ok),Uv,sk),Lv,lk),Kv,rk),Zv,ck),le(le(le(le(le(le(le(le(ru,Wv,uk),Yv,fk),qv,dk),Xv,mk),Vv,zk),Qv,yk),Iv,wk),$v,hk);var pk="kit",bk="kit-duotone",gk="Kit",jk="Kit Duotone";le(le({},pk,gk),bk,jk);var vk={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"},slab:{"fa-regular":"faslr"},"slab-press":{"fa-regular":"faslpr"},whiteboard:{"fa-semibold":"fawsb"},thumbprint:{"fa-light":"fatl"},notdog:{"fa-solid":"fans"},"notdog-duo":{"fa-solid":"fands"},etch:{"fa-solid":"faes"},jelly:{"fa-regular":"fajr"},"jelly-fill":{"fa-regular":"fajfr"},"jelly-duo":{"fa-regular":"fajdr"},chisel:{"fa-regular":"facr"},utility:{"fa-semibold":"fausb"},"utility-duo":{"fa-semibold":"faudsb"},"utility-fill":{"fa-semibold":"faufsb"}},kk={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"],slab:["faslr"],"slab-press":["faslpr"],whiteboard:["fawsb"],thumbprint:["fatl"],notdog:["fans"],"notdog-duo":["fands"],etch:["faes"],jelly:["fajr"],"jelly-fill":["fajfr"],"jelly-duo":["fajdr"],chisel:["facr"],utility:["fausb"],"utility-duo":["faudsb"],"utility-fill":["faufsb"]},Cu={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"},slab:{faslr:"fa-regular"},"slab-press":{faslpr:"fa-regular"},whiteboard:{fawsb:"fa-semibold"},thumbprint:{fatl:"fa-light"},notdog:{fans:"fa-solid"},"notdog-duo":{fands:"fa-solid"},etch:{faes:"fa-solid"},jelly:{fajr:"fa-regular"},"jelly-fill":{fajfr:"fa-regular"},"jelly-duo":{fajdr:"fa-regular"},chisel:{facr:"fa-regular"},utility:{fausb:"fa-semibold"},"utility-duo":{faudsb:"fa-semibold"},"utility-fill":{faufsb:"fa-semibold"}},Ak=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands","fa-semibold"],rh=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt","faslr","faslpr","fawsb","fatl","fans","fands","faes","fajr","fajfr","fajdr","facr","fausb","faudsb","faufsb"].concat(Rv,Ak),Ck=["solid","regular","light","thin","duotone","brands","semibold"],ch=[1,2,3,4,5,6,7,8,9,10],Dk=ch.concat([11,12,13,14,15,16,17,18,19,20]),Tk=["aw","fw","pull-left","pull-right"],Ek=[].concat(qn(Object.keys(kk)),Ck,Tk,["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","inverse","layers","layers-bottom-left","layers-bottom-right","layers-counter","layers-text","layers-top-left","layers-top-right","li","pull-end","pull-start","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul","width-auto","width-fixed",dl.GROUP,dl.SWAP_OPACITY,dl.PRIMARY,dl.SECONDARY]).concat(ch.map(function(o){return"".concat(o,"x")})).concat(Dk.map(function(o){return"w-".concat(o)})),Sk={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},Aa="___FONT_AWESOME___",Du=16,uh="fa",fh="svg-inline--fa",Bi="data-fa-i2svg",Tu="data-fa-pseudo-element",Gk="data-fa-pseudo-element-pending",Qu="data-prefix",Iu="data-icon",xy="fontawesome-i2svg",Ok="async",Bk=["HTML","HEAD","STYLE","SCRIPT"],dh=["::before","::after",":before",":after"],mh=(function(){try{return!0}catch{return!1}})();function Fo(o){return new Proxy(o,{get:function(s,r){return r in s?s[r]:s[ln]}})}var zh=M({},Uw);zh[ln]=M(M(M(M({},{"fa-duotone":"duotone"}),Uw[ln]),Oy.kit),Oy["kit-duotone"]);var xk=Fo(zh),Eu=M({},Dv);Eu[ln]=M(M(M(M({},{duotone:"fad"}),Eu[ln]),By.kit),By["kit-duotone"]);var Ny=Fo(Eu),Su=M({},Cu);Su[ln]=M(M({},Su[ln]),Nv.kit);var $u=Fo(Su),Gu=M({},vk);Gu[ln]=M(M({},Gu[ln]),Bv.kit);Fo(Gu);var Nk=av,yh="fa-layers-text",Rk=iv,Mk=M({},kv);Fo(Mk);var _k=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],cu=tv,Pk=[].concat(qn(Tv),qn(Ek)),Ro=ai.FontAwesomeConfig||{};function Hk(o){var t=Ne.querySelector("script["+o+"]");if(t)return t.getAttribute(o)}function Jk(o){return o===""?!0:o==="false"?!1:o==="true"?!0:o}if(Ne&&typeof Ne.querySelector=="function"){var Fk=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-search-pseudo-elements","searchPseudoElements"],["data-search-pseudo-elements-warnings","searchPseudoElementsWarnings"],["data-search-pseudo-elements-full-scan","searchPseudoElementsFullScan"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Fk.forEach(function(o){var t=Tl(o,2),s=t[0],r=t[1],u=Jk(Hk(s));u!=null&&(Ro[r]=u)})}var wh={styleDefault:"solid",familyDefault:ln,cssPrefix:uh,replacementClass:fh,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Ro.familyPrefix&&(Ro.cssPrefix=Ro.familyPrefix);var Ot=M(M({},wh),Ro);Ot.autoReplaceSvg||(Ot.observeMutations=!1);var V={};Object.keys(wh).forEach(function(o){Object.defineProperty(V,o,{enumerable:!0,set:function(s){Ot[o]=s,Mo.forEach(function(r){return r(V)})},get:function(){return Ot[o]}})});Object.defineProperty(V,"familyPrefix",{enumerable:!0,set:function(t){Ot.cssPrefix=t,Mo.forEach(function(s){return s(V)})},get:function(){return Ot.cssPrefix}});ai.FontAwesomeConfig=V;var Mo=[];function Uk(o){return Mo.push(o),function(){Mo.splice(Mo.indexOf(o),1)}}var kt=Du,ea={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Lk(o){if(!(!o||!Ta)){var t=Ne.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=o;for(var s=Ne.head.childNodes,r=null,u=s.length-1;u>-1;u--){var d=s[u],m=(d.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(m)>-1&&(r=d)}return Ne.head.insertBefore(t,r),o}}var Kk="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Ry(){for(var o=12,t="";o-- >0;)t+=Kk[Math.random()*62|0];return t}function Nt(o){for(var t=[],s=(o||[]).length>>>0;s--;)t[s]=o[s];return t}function ef(o){return o.classList?Nt(o.classList):(o.getAttribute("class")||"").split(" ").filter(function(t){return t})}function hh(o){return"".concat(o).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Zk(o){return Object.keys(o||{}).reduce(function(t,s){return t+"".concat(s,'="').concat(hh(o[s]),'" ')},"").trim()}function El(o){return Object.keys(o||{}).reduce(function(t,s){return t+"".concat(s,": ").concat(o[s].trim(),";")},"")}function nf(o){return o.size!==ea.size||o.x!==ea.x||o.y!==ea.y||o.rotate!==ea.rotate||o.flipX||o.flipY}function Wk(o){var t=o.transform,s=o.containerWidth,r=o.iconWidth,u={transform:"translate(".concat(s/2," 256)")},d="translate(".concat(t.x*32,", ").concat(t.y*32,") "),m="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),y="rotate(".concat(t.rotate," 0 0)"),h={transform:"".concat(d," ").concat(m," ").concat(y)},w={transform:"translate(".concat(r/2*-1," -256)")};return{outer:u,inner:h,path:w}}function Yk(o){var t=o.transform,s=o.width,r=s===void 0?Du:s,u=o.height,d=u===void 0?Du:u,m="";return Fw?m+="translate(".concat(t.x/kt-r/2,"em, ").concat(t.y/kt-d/2,"em) "):m+="translate(calc(-50% + ".concat(t.x/kt,"em), calc(-50% + ").concat(t.y/kt,"em)) "),m+="scale(".concat(t.size/kt*(t.flipX?-1:1),", ").concat(t.size/kt*(t.flipY?-1:1),") "),m+="rotate(".concat(t.rotate,"deg) "),m}var qk=`:root, :host {
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
}`;function ph(){var o=uh,t=fh,s=V.cssPrefix,r=V.replacementClass,u=qk;if(s!==o||r!==t){var d=new RegExp("\\.".concat(o,"\\-"),"g"),m=new RegExp("\\--".concat(o,"\\-"),"g"),y=new RegExp("\\.".concat(t),"g");u=u.replace(d,".".concat(s,"-")).replace(m,"--".concat(s,"-")).replace(y,".".concat(r))}return u}var My=!1;function uu(){V.autoAddCss&&!My&&(Lk(ph()),My=!0)}var Xk={mixout:function(){return{dom:{css:ph,insertCss:uu}}},hooks:function(){return{beforeDOMElementCreation:function(){uu()},beforeI2svg:function(){uu()}}}},Ca=ai||{};Ca[Aa]||(Ca[Aa]={});Ca[Aa].styles||(Ca[Aa].styles={});Ca[Aa].hooks||(Ca[Aa].hooks={});Ca[Aa].shims||(Ca[Aa].shims=[]);var Yn=Ca[Aa],bh=[],gh=function(){Ne.removeEventListener("DOMContentLoaded",gh),bl=1,bh.map(function(t){return t()})},bl=!1;Ta&&(bl=(Ne.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Ne.readyState),bl||Ne.addEventListener("DOMContentLoaded",gh));function Vk(o){Ta&&(bl?setTimeout(o,0):bh.push(o))}function Uo(o){var t=o.tag,s=o.attributes,r=s===void 0?{}:s,u=o.children,d=u===void 0?[]:u;return typeof o=="string"?hh(o):"<".concat(t," ").concat(Zk(r),">").concat(d.map(Uo).join(""),"</").concat(t,">")}function _y(o,t,s){if(o&&o[t]&&o[t][s])return{prefix:t,iconName:s,icon:o[t][s]}}var fu=function(t,s,r,u){var d=Object.keys(t),m=d.length,y=s,h,w,v;for(r===void 0?(h=1,v=t[d[0]]):(h=0,v=r);h<m;h++)w=d[h],v=y(v,t[w],w,t);return v};function jh(o){return qn(o).length!==1?null:o.codePointAt(0).toString(16)}function Py(o){return Object.keys(o).reduce(function(t,s){var r=o[s],u=!!r.icon;return u?t[r.iconName]=r.icon:t[s]=r,t},{})}function Ou(o,t){var s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=s.skipHooks,u=r===void 0?!1:r,d=Py(t);typeof Yn.hooks.addPack=="function"&&!u?Yn.hooks.addPack(o,Py(t)):Yn.styles[o]=M(M({},Yn.styles[o]||{}),d),o==="fas"&&Ou("fa",t)}var Po=Yn.styles,Qk=Yn.shims,vh=Object.keys($u),Ik=vh.reduce(function(o,t){return o[t]=Object.keys($u[t]),o},{}),af=null,kh={},Ah={},Ch={},Dh={},Th={};function $k(o){return~Pk.indexOf(o)}function e1(o,t){var s=t.split("-"),r=s[0],u=s.slice(1).join("-");return r===o&&u!==""&&!$k(u)?u:null}var Eh=function(){var t=function(d){return fu(Po,function(m,y,h){return m[h]=fu(y,d,{}),m},{})};kh=t(function(u,d,m){if(d[3]&&(u[d[3]]=m),d[2]){var y=d[2].filter(function(h){return typeof h=="number"});y.forEach(function(h){u[h.toString(16)]=m})}return u}),Ah=t(function(u,d,m){if(u[m]=m,d[2]){var y=d[2].filter(function(h){return typeof h=="string"});y.forEach(function(h){u[h]=m})}return u}),Th=t(function(u,d,m){var y=d[2];return u[m]=m,y.forEach(function(h){u[h]=m}),u});var s="far"in Po||V.autoFetchSvg,r=fu(Qk,function(u,d){var m=d[0],y=d[1],h=d[2];return y==="far"&&!s&&(y="fas"),typeof m=="string"&&(u.names[m]={prefix:y,iconName:h}),typeof m=="number"&&(u.unicodes[m.toString(16)]={prefix:y,iconName:h}),u},{names:{},unicodes:{}});Ch=r.names,Dh=r.unicodes,af=Sl(V.styleDefault,{family:V.familyDefault})};Uk(function(o){af=Sl(o.styleDefault,{family:V.familyDefault})});Eh();function tf(o,t){return(kh[o]||{})[t]}function n1(o,t){return(Ah[o]||{})[t]}function Si(o,t){return(Th[o]||{})[t]}function Sh(o){return Ch[o]||{prefix:null,iconName:null}}function a1(o){var t=Dh[o],s=tf("fas",o);return t||(s?{prefix:"fas",iconName:s}:null)||{prefix:null,iconName:null}}function ii(){return af}var Gh=function(){return{prefix:null,iconName:null,rest:[]}};function i1(o){var t=ln,s=vh.reduce(function(r,u){return r[u]="".concat(V.cssPrefix,"-").concat(u),r},{});return sh.forEach(function(r){(o.includes(s[r])||o.some(function(u){return Ik[r].includes(u)}))&&(t=r)}),t}function Sl(o){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=t.family,r=s===void 0?ln:s,u=xk[r][o];if(r===Jo&&!o)return"fad";var d=Ny[r][o]||Ny[r][u],m=o in Yn.styles?o:null,y=d||m||null;return y}function t1(o){var t=[],s=null;return o.forEach(function(r){var u=e1(V.cssPrefix,r);u?s=u:r&&t.push(r)}),{iconName:s,rest:t}}function Hy(o){return o.sort().filter(function(t,s,r){return r.indexOf(t)===s})}var Jy=rh.concat(lh);function Gl(o){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=t.skipLookups,r=s===void 0?!1:s,u=null,d=Hy(o.filter(function(_){return Jy.includes(_)})),m=Hy(o.filter(function(_){return!Jy.includes(_)})),y=d.filter(function(_){return u=_,!Lw.includes(_)}),h=Tl(y,1),w=h[0],v=w===void 0?null:w,A=i1(d),G=M(M({},t1(m)),{},{prefix:Sl(v,{family:A})});return M(M(M({},G),r1({values:o,family:A,styles:Po,config:V,canonical:G,givenPrefix:u})),o1(r,u,G))}function o1(o,t,s){var r=s.prefix,u=s.iconName;if(o||!r||!u)return{prefix:r,iconName:u};var d=t==="fa"?Sh(u):{},m=Si(r,u);return u=d.iconName||m||u,r=d.prefix||r,r==="far"&&!Po.far&&Po.fas&&!V.autoFetchSvg&&(r="fas"),{prefix:r,iconName:u}}var s1=sh.filter(function(o){return o!==ln||o!==Jo}),l1=Object.keys(Cu).filter(function(o){return o!==ln}).map(function(o){return Object.keys(Cu[o])}).flat();function r1(o){var t=o.values,s=o.family,r=o.canonical,u=o.givenPrefix,d=u===void 0?"":u,m=o.styles,y=m===void 0?{}:m,h=o.config,w=h===void 0?{}:h,v=s===Jo,A=t.includes("fa-duotone")||t.includes("fad"),G=w.familyDefault==="duotone",_=r.prefix==="fad"||r.prefix==="fa-duotone";if(!v&&(A||G||_)&&(r.prefix="fad"),(t.includes("fa-brands")||t.includes("fab"))&&(r.prefix="fab"),!r.prefix&&s1.includes(s)){var L=Object.keys(y).find(function(ee){return l1.includes(ee)});if(L||w.autoFetchSvg){var U=Cv.get(s).defaultShortPrefixId;r.prefix=U,r.iconName=Si(r.prefix,r.iconName)||r.iconName}}return(r.prefix==="fa"||d==="fa")&&(r.prefix=ii()||"fas"),r}var c1=(function(){function o(){Yj(this,o),this.definitions={}}return Xj(o,[{key:"add",value:function(){for(var s=this,r=arguments.length,u=new Array(r),d=0;d<r;d++)u[d]=arguments[d];var m=u.reduce(this._pullDefinitions,{});Object.keys(m).forEach(function(y){s.definitions[y]=M(M({},s.definitions[y]||{}),m[y]),Ou(y,m[y]);var h=$u[ln][y];h&&Ou(h,m[y]),Eh()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(s,r){var u=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(u).map(function(d){var m=u[d],y=m.prefix,h=m.iconName,w=m.icon,v=w[2];s[y]||(s[y]={}),v.length>0&&v.forEach(function(A){typeof A=="string"&&(s[y][A]=w)}),s[y][h]=w}),s}}])})(),Fy=[],St={},Gt={},u1=Object.keys(Gt);function f1(o,t){var s=t.mixoutsTo;return Fy=o,St={},Object.keys(Gt).forEach(function(r){u1.indexOf(r)===-1&&delete Gt[r]}),Fy.forEach(function(r){var u=r.mixout?r.mixout():{};if(Object.keys(u).forEach(function(m){typeof u[m]=="function"&&(s[m]=u[m]),pl(u[m])==="object"&&Object.keys(u[m]).forEach(function(y){s[m]||(s[m]={}),s[m][y]=u[m][y]})}),r.hooks){var d=r.hooks();Object.keys(d).forEach(function(m){St[m]||(St[m]=[]),St[m].push(d[m])})}r.provides&&r.provides(Gt)}),s}function Bu(o,t){for(var s=arguments.length,r=new Array(s>2?s-2:0),u=2;u<s;u++)r[u-2]=arguments[u];var d=St[o]||[];return d.forEach(function(m){t=m.apply(null,[t].concat(r))}),t}function xi(o){for(var t=arguments.length,s=new Array(t>1?t-1:0),r=1;r<t;r++)s[r-1]=arguments[r];var u=St[o]||[];u.forEach(function(d){d.apply(null,s)})}function ti(){var o=arguments[0],t=Array.prototype.slice.call(arguments,1);return Gt[o]?Gt[o].apply(null,t):void 0}function xu(o){o.prefix==="fa"&&(o.prefix="fas");var t=o.iconName,s=o.prefix||ii();if(t)return t=Si(s,t)||t,_y(Oh.definitions,s,t)||_y(Yn.styles,s,t)}var Oh=new c1,d1=function(){V.autoReplaceSvg=!1,V.observeMutations=!1,xi("noAuto")},m1={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Ta?(xi("beforeI2svg",t),ti("pseudoElements2svg",t),ti("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},s=t.autoReplaceSvgRoot;V.autoReplaceSvg===!1&&(V.autoReplaceSvg=!0),V.observeMutations=!0,Vk(function(){y1({autoReplaceSvgRoot:s}),xi("watch",t)})}},z1={icon:function(t){if(t===null)return null;if(pl(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Si(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var s=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=Sl(t[0]);return{prefix:r,iconName:Si(r,s)||s}}if(typeof t=="string"&&(t.indexOf("".concat(V.cssPrefix,"-"))>-1||t.match(Nk))){var u=Gl(t.split(" "),{skipLookups:!0});return{prefix:u.prefix||ii(),iconName:Si(u.prefix,u.iconName)||u.iconName}}if(typeof t=="string"){var d=ii();return{prefix:d,iconName:Si(d,t)||t}}}},Gn={noAuto:d1,config:V,dom:m1,parse:z1,library:Oh,findIconDefinition:xu,toHtml:Uo},y1=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},s=t.autoReplaceSvgRoot,r=s===void 0?Ne:s;(Object.keys(Yn.styles).length>0||V.autoFetchSvg)&&Ta&&V.autoReplaceSvg&&Gn.dom.i2svg({node:r})};function Ol(o,t){return Object.defineProperty(o,"abstract",{get:t}),Object.defineProperty(o,"html",{get:function(){return o.abstract.map(function(r){return Uo(r)})}}),Object.defineProperty(o,"node",{get:function(){if(Ta){var r=Ne.createElement("div");return r.innerHTML=o.html,r.children}}}),o}function w1(o){var t=o.children,s=o.main,r=o.mask,u=o.attributes,d=o.styles,m=o.transform;if(nf(m)&&s.found&&!r.found){var y=s.width,h=s.height,w={x:y/h/2,y:.5};u.style=El(M(M({},d),{},{"transform-origin":"".concat(w.x+m.x/16,"em ").concat(w.y+m.y/16,"em")}))}return[{tag:"svg",attributes:u,children:t}]}function h1(o){var t=o.prefix,s=o.iconName,r=o.children,u=o.attributes,d=o.symbol,m=d===!0?"".concat(t,"-").concat(V.cssPrefix,"-").concat(s):d;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:M(M({},u),{},{id:m}),children:r}]}]}function p1(o){var t=["aria-label","aria-labelledby","title","role"];return t.some(function(s){return s in o})}function of(o){var t=o.icons,s=t.main,r=t.mask,u=o.prefix,d=o.iconName,m=o.transform,y=o.symbol,h=o.maskId,w=o.extra,v=o.watchable,A=v===void 0?!1:v,G=r.found?r:s,_=G.width,L=G.height,U=[V.replacementClass,d?"".concat(V.cssPrefix,"-").concat(d):""].filter(function(Y){return w.classes.indexOf(Y)===-1}).filter(function(Y){return Y!==""||!!Y}).concat(w.classes).join(" "),ee={children:[],attributes:M(M({},w.attributes),{},{"data-prefix":u,"data-icon":d,class:U,role:w.attributes.role||"img",viewBox:"0 0 ".concat(_," ").concat(L)})};!p1(w.attributes)&&!w.attributes["aria-hidden"]&&(ee.attributes["aria-hidden"]="true"),A&&(ee.attributes[Bi]="");var q=M(M({},ee),{},{prefix:u,iconName:d,main:s,mask:r,maskId:h,transform:m,symbol:y,styles:M({},w.styles)}),W=r.found&&s.found?ti("generateAbstractMask",q)||{children:[],attributes:{}}:ti("generateAbstractIcon",q)||{children:[],attributes:{}},I=W.children,ue=W.attributes;return q.children=I,q.attributes=ue,y?h1(q):w1(q)}function Uy(o){var t=o.content,s=o.width,r=o.height,u=o.transform,d=o.extra,m=o.watchable,y=m===void 0?!1:m,h=M(M({},d.attributes),{},{class:d.classes.join(" ")});y&&(h[Bi]="");var w=M({},d.styles);nf(u)&&(w.transform=Yk({transform:u,width:s,height:r}),w["-webkit-transform"]=w.transform);var v=El(w);v.length>0&&(h.style=v);var A=[];return A.push({tag:"span",attributes:h,children:[t]}),A}function b1(o){var t=o.content,s=o.extra,r=M(M({},s.attributes),{},{class:s.classes.join(" ")}),u=El(s.styles);u.length>0&&(r.style=u);var d=[];return d.push({tag:"span",attributes:r,children:[t]}),d}var du=Yn.styles;function Nu(o){var t=o[0],s=o[1],r=o.slice(4),u=Tl(r,1),d=u[0],m=null;return Array.isArray(d)?m={tag:"g",attributes:{class:"".concat(V.cssPrefix,"-").concat(cu.GROUP)},children:[{tag:"path",attributes:{class:"".concat(V.cssPrefix,"-").concat(cu.SECONDARY),fill:"currentColor",d:d[0]}},{tag:"path",attributes:{class:"".concat(V.cssPrefix,"-").concat(cu.PRIMARY),fill:"currentColor",d:d[1]}}]}:m={tag:"path",attributes:{fill:"currentColor",d}},{found:!0,width:t,height:s,icon:m}}var g1={found:!1,width:512,height:512};function j1(o,t){!mh&&!V.showMissingIcons&&o&&console.error('Icon with name "'.concat(o,'" and prefix "').concat(t,'" is missing.'))}function Ru(o,t){var s=t;return t==="fa"&&V.styleDefault!==null&&(t=ii()),new Promise(function(r,u){if(s==="fa"){var d=Sh(o)||{};o=d.iconName||o,t=d.prefix||t}if(o&&t&&du[t]&&du[t][o]){var m=du[t][o];return r(Nu(m))}j1(o,t),r(M(M({},g1),{},{icon:V.showMissingIcons&&o?ti("missingIconAbstract")||{}:{}}))})}var Ly=function(){},Mu=V.measurePerformance&&fl&&fl.mark&&fl.measure?fl:{mark:Ly,measure:Ly},No='FA "7.1.0"',v1=function(t){return Mu.mark("".concat(No," ").concat(t," begins")),function(){return Bh(t)}},Bh=function(t){Mu.mark("".concat(No," ").concat(t," ends")),Mu.measure("".concat(No," ").concat(t),"".concat(No," ").concat(t," begins"),"".concat(No," ").concat(t," ends"))},sf={begin:v1,end:Bh},zl=function(){};function Ky(o){var t=o.getAttribute?o.getAttribute(Bi):null;return typeof t=="string"}function k1(o){var t=o.getAttribute?o.getAttribute(Qu):null,s=o.getAttribute?o.getAttribute(Iu):null;return t&&s}function A1(o){return o&&o.classList&&o.classList.contains&&o.classList.contains(V.replacementClass)}function C1(){if(V.autoReplaceSvg===!0)return yl.replace;var o=yl[V.autoReplaceSvg];return o||yl.replace}function D1(o){return Ne.createElementNS("http://www.w3.org/2000/svg",o)}function T1(o){return Ne.createElement(o)}function xh(o){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=t.ceFn,r=s===void 0?o.tag==="svg"?D1:T1:s;if(typeof o=="string")return Ne.createTextNode(o);var u=r(o.tag);Object.keys(o.attributes||[]).forEach(function(m){u.setAttribute(m,o.attributes[m])});var d=o.children||[];return d.forEach(function(m){u.appendChild(xh(m,{ceFn:r}))}),u}function E1(o){var t=" ".concat(o.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var yl={replace:function(t){var s=t[0];if(s.parentNode)if(t[1].forEach(function(u){s.parentNode.insertBefore(xh(u),s)}),s.getAttribute(Bi)===null&&V.keepOriginalSource){var r=Ne.createComment(E1(s));s.parentNode.replaceChild(r,s)}else s.remove()},nest:function(t){var s=t[0],r=t[1];if(~ef(s).indexOf(V.replacementClass))return yl.replace(t);var u=new RegExp("".concat(V.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var d=r[0].attributes.class.split(" ").reduce(function(y,h){return h===V.replacementClass||h.match(u)?y.toSvg.push(h):y.toNode.push(h),y},{toNode:[],toSvg:[]});r[0].attributes.class=d.toSvg.join(" "),d.toNode.length===0?s.removeAttribute("class"):s.setAttribute("class",d.toNode.join(" "))}var m=r.map(function(y){return Uo(y)}).join(`
`);s.setAttribute(Bi,""),s.innerHTML=m}};function Zy(o){o()}function Nh(o,t){var s=typeof t=="function"?t:zl;if(o.length===0)s();else{var r=Zy;V.mutateApproach===Ok&&(r=ai.requestAnimationFrame||Zy),r(function(){var u=C1(),d=sf.begin("mutate");o.map(u),d(),s()})}}var lf=!1;function Rh(){lf=!0}function _u(){lf=!1}var gl=null;function Wy(o){if(Gy&&V.observeMutations){var t=o.treeCallback,s=t===void 0?zl:t,r=o.nodeCallback,u=r===void 0?zl:r,d=o.pseudoElementsCallback,m=d===void 0?zl:d,y=o.observeMutationsRoot,h=y===void 0?Ne:y;gl=new Gy(function(w){if(!lf){var v=ii();Nt(w).forEach(function(A){if(A.type==="childList"&&A.addedNodes.length>0&&!Ky(A.addedNodes[0])&&(V.searchPseudoElements&&m(A.target),s(A.target)),A.type==="attributes"&&A.target.parentNode&&V.searchPseudoElements&&m([A.target],!0),A.type==="attributes"&&Ky(A.target)&&~_k.indexOf(A.attributeName))if(A.attributeName==="class"&&k1(A.target)){var G=Gl(ef(A.target)),_=G.prefix,L=G.iconName;A.target.setAttribute(Qu,_||v),L&&A.target.setAttribute(Iu,L)}else A1(A.target)&&u(A.target)})}}),Ta&&gl.observe(h,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function S1(){gl&&gl.disconnect()}function G1(o){var t=o.getAttribute("style"),s=[];return t&&(s=t.split(";").reduce(function(r,u){var d=u.split(":"),m=d[0],y=d.slice(1);return m&&y.length>0&&(r[m]=y.join(":").trim()),r},{})),s}function O1(o){var t=o.getAttribute("data-prefix"),s=o.getAttribute("data-icon"),r=o.innerText!==void 0?o.innerText.trim():"",u=Gl(ef(o));return u.prefix||(u.prefix=ii()),t&&s&&(u.prefix=t,u.iconName=s),u.iconName&&u.prefix||(u.prefix&&r.length>0&&(u.iconName=n1(u.prefix,o.innerText)||tf(u.prefix,jh(o.innerText))),!u.iconName&&V.autoFetchSvg&&o.firstChild&&o.firstChild.nodeType===Node.TEXT_NODE&&(u.iconName=o.firstChild.data)),u}function B1(o){var t=Nt(o.attributes).reduce(function(s,r){return s.name!=="class"&&s.name!=="style"&&(s[r.name]=r.value),s},{});return t}function x1(){return{iconName:null,prefix:null,transform:ea,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Yy(o){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},s=O1(o),r=s.iconName,u=s.prefix,d=s.rest,m=B1(o),y=Bu("parseNodeAttributes",{},o),h=t.styleParser?G1(o):[];return M({iconName:r,prefix:u,transform:ea,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:d,styles:h,attributes:m}},y)}var N1=Yn.styles;function Mh(o){var t=V.autoReplaceSvg==="nest"?Yy(o,{styleParser:!1}):Yy(o);return~t.extra.classes.indexOf(yh)?ti("generateLayersText",o,t):ti("generateSvgReplacementMutation",o,t)}function R1(){return[].concat(qn(lh),qn(rh))}function qy(o){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Ta)return Promise.resolve();var s=Ne.documentElement.classList,r=function(A){return s.add("".concat(xy,"-").concat(A))},u=function(A){return s.remove("".concat(xy,"-").concat(A))},d=V.autoFetchSvg?R1():Lw.concat(Object.keys(N1));d.includes("fa")||d.push("fa");var m=[".".concat(yh,":not([").concat(Bi,"])")].concat(d.map(function(v){return".".concat(v,":not([").concat(Bi,"])")})).join(", ");if(m.length===0)return Promise.resolve();var y=[];try{y=Nt(o.querySelectorAll(m))}catch{}if(y.length>0)r("pending"),u("complete");else return Promise.resolve();var h=sf.begin("onTree"),w=y.reduce(function(v,A){try{var G=Mh(A);G&&v.push(G)}catch(_){mh||_.name==="MissingIcon"&&console.error(_)}return v},[]);return new Promise(function(v,A){Promise.all(w).then(function(G){Nh(G,function(){r("active"),r("complete"),u("pending"),typeof t=="function"&&t(),h(),v()})}).catch(function(G){h(),A(G)})})}function M1(o){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Mh(o).then(function(s){s&&Nh([s],t)})}function _1(o){return function(t){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:xu(t||{}),u=s.mask;return u&&(u=(u||{}).icon?u:xu(u||{})),o(r,M(M({},s),{},{mask:u}))}}var P1=function(t){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=s.transform,u=r===void 0?ea:r,d=s.symbol,m=d===void 0?!1:d,y=s.mask,h=y===void 0?null:y,w=s.maskId,v=w===void 0?null:w,A=s.classes,G=A===void 0?[]:A,_=s.attributes,L=_===void 0?{}:_,U=s.styles,ee=U===void 0?{}:U;if(t){var q=t.prefix,W=t.iconName,I=t.icon;return Ol(M({type:"icon"},t),function(){return xi("beforeDOMElementCreation",{iconDefinition:t,params:s}),of({icons:{main:Nu(I),mask:h?Nu(h.icon):{found:!1,width:null,height:null,icon:{}}},prefix:q,iconName:W,transform:M(M({},ea),u),symbol:m,maskId:v,extra:{attributes:L,styles:ee,classes:G}})})}},H1={mixout:function(){return{icon:_1(P1)}},hooks:function(){return{mutationObserverCallbacks:function(s){return s.treeCallback=qy,s.nodeCallback=M1,s}}},provides:function(t){t.i2svg=function(s){var r=s.node,u=r===void 0?Ne:r,d=s.callback,m=d===void 0?function(){}:d;return qy(u,m)},t.generateSvgReplacementMutation=function(s,r){var u=r.iconName,d=r.prefix,m=r.transform,y=r.symbol,h=r.mask,w=r.maskId,v=r.extra;return new Promise(function(A,G){Promise.all([Ru(u,d),h.iconName?Ru(h.iconName,h.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(_){var L=Tl(_,2),U=L[0],ee=L[1];A([s,of({icons:{main:U,mask:ee},prefix:d,iconName:u,transform:m,symbol:y,maskId:w,extra:v,watchable:!0})])}).catch(G)})},t.generateAbstractIcon=function(s){var r=s.children,u=s.attributes,d=s.main,m=s.transform,y=s.styles,h=El(y);h.length>0&&(u.style=h);var w;return nf(m)&&(w=ti("generateAbstractTransformGrouping",{main:d,transform:m,containerWidth:d.width,iconWidth:d.width})),r.push(w||d.icon),{children:r,attributes:u}}}},J1={mixout:function(){return{layer:function(s){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},u=r.classes,d=u===void 0?[]:u;return Ol({type:"layer"},function(){xi("beforeDOMElementCreation",{assembler:s,params:r});var m=[];return s(function(y){Array.isArray(y)?y.map(function(h){m=m.concat(h.abstract)}):m=m.concat(y.abstract)}),[{tag:"span",attributes:{class:["".concat(V.cssPrefix,"-layers")].concat(qn(d)).join(" ")},children:m}]})}}}},F1={mixout:function(){return{counter:function(s){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};r.title;var u=r.classes,d=u===void 0?[]:u,m=r.attributes,y=m===void 0?{}:m,h=r.styles,w=h===void 0?{}:h;return Ol({type:"counter",content:s},function(){return xi("beforeDOMElementCreation",{content:s,params:r}),b1({content:s.toString(),extra:{attributes:y,styles:w,classes:["".concat(V.cssPrefix,"-layers-counter")].concat(qn(d))}})})}}}},U1={mixout:function(){return{text:function(s){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},u=r.transform,d=u===void 0?ea:u,m=r.classes,y=m===void 0?[]:m,h=r.attributes,w=h===void 0?{}:h,v=r.styles,A=v===void 0?{}:v;return Ol({type:"text",content:s},function(){return xi("beforeDOMElementCreation",{content:s,params:r}),Uy({content:s,transform:M(M({},ea),d),extra:{attributes:w,styles:A,classes:["".concat(V.cssPrefix,"-layers-text")].concat(qn(y))}})})}}},provides:function(t){t.generateLayersText=function(s,r){var u=r.transform,d=r.extra,m=null,y=null;if(Fw){var h=parseInt(getComputedStyle(s).fontSize,10),w=s.getBoundingClientRect();m=w.width/h,y=w.height/h}return Promise.resolve([s,Uy({content:s.innerHTML,width:m,height:y,transform:u,extra:d,watchable:!0})])}}},_h=new RegExp('"',"ug"),Xy=[1105920,1112319],Vy=M(M(M(M({},{FontAwesome:{normal:"fas",400:"fas"}}),Av),Sk),xv),Pu=Object.keys(Vy).reduce(function(o,t){return o[t.toLowerCase()]=Vy[t],o},{}),L1=Object.keys(Pu).reduce(function(o,t){var s=Pu[t];return o[t]=s[900]||qn(Object.entries(s))[0][1],o},{});function K1(o){var t=o.replace(_h,"");return jh(qn(t)[0]||"")}function Z1(o){var t=o.getPropertyValue("font-feature-settings").includes("ss01"),s=o.getPropertyValue("content"),r=s.replace(_h,""),u=r.codePointAt(0),d=u>=Xy[0]&&u<=Xy[1],m=r.length===2?r[0]===r[1]:!1;return d||m||t}function W1(o,t){var s=o.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(t),u=isNaN(r)?"normal":r;return(Pu[s]||{})[u]||L1[s]}function Qy(o,t){var s="".concat(Gk).concat(t.replace(":","-"));return new Promise(function(r,u){if(o.getAttribute(s)!==null)return r();var d=Nt(o.children),m=d.filter(function(ce){return ce.getAttribute(Tu)===t})[0],y=ai.getComputedStyle(o,t),h=y.getPropertyValue("font-family"),w=h.match(Rk),v=y.getPropertyValue("font-weight"),A=y.getPropertyValue("content");if(m&&!w)return o.removeChild(m),r();if(w&&A!=="none"&&A!==""){var G=y.getPropertyValue("content"),_=W1(h,v),L=K1(G),U=w[0].startsWith("FontAwesome"),ee=Z1(y),q=tf(_,L),W=q;if(U){var I=a1(L);I.iconName&&I.prefix&&(q=I.iconName,_=I.prefix)}if(q&&!ee&&(!m||m.getAttribute(Qu)!==_||m.getAttribute(Iu)!==W)){o.setAttribute(s,W),m&&o.removeChild(m);var ue=x1(),Y=ue.extra;Y.attributes[Tu]=t,Ru(q,_).then(function(ce){var Q=of(M(M({},ue),{},{icons:{main:ce,mask:Gh()},prefix:_,iconName:W,extra:Y,watchable:!0})),Oe=Ne.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?o.insertBefore(Oe,o.firstChild):o.appendChild(Oe),Oe.outerHTML=Q.map(function(Qe){return Uo(Qe)}).join(`
`),o.removeAttribute(s),r()}).catch(u)}else r()}else r()})}function Y1(o){return Promise.all([Qy(o,"::before"),Qy(o,"::after")])}function q1(o){return o.parentNode!==document.head&&!~Bk.indexOf(o.tagName.toUpperCase())&&!o.getAttribute(Tu)&&(!o.parentNode||o.parentNode.tagName!=="svg")}var X1=function(t){return!!t&&dh.some(function(s){return t.includes(s)})},V1=function(t){if(!t)return[];var s=new Set,r=t.split(/,(?![^()]*\))/).map(function(h){return h.trim()});r=r.flatMap(function(h){return h.includes("(")?h:h.split(",").map(function(w){return w.trim()})});var u=ml(r),d;try{for(u.s();!(d=u.n()).done;){var m=d.value;if(X1(m)){var y=dh.reduce(function(h,w){return h.replace(w,"")},m);y!==""&&y!=="*"&&s.add(y)}}}catch(h){u.e(h)}finally{u.f()}return s};function Iy(o){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(Ta){var s;if(t)s=o;else if(V.searchPseudoElementsFullScan)s=o.querySelectorAll("*");else{var r=new Set,u=ml(document.styleSheets),d;try{for(u.s();!(d=u.n()).done;){var m=d.value;try{var y=ml(m.cssRules),h;try{for(y.s();!(h=y.n()).done;){var w=h.value,v=V1(w.selectorText),A=ml(v),G;try{for(A.s();!(G=A.n()).done;){var _=G.value;r.add(_)}}catch(U){A.e(U)}finally{A.f()}}}catch(U){y.e(U)}finally{y.f()}}catch(U){V.searchPseudoElementsWarnings&&console.warn("Font Awesome: cannot parse stylesheet: ".concat(m.href," (").concat(U.message,`)
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`))}}}catch(U){u.e(U)}finally{u.f()}if(!r.size)return;var L=Array.from(r).join(", ");try{s=o.querySelectorAll(L)}catch{}}return new Promise(function(U,ee){var q=Nt(s).filter(q1).map(Y1),W=sf.begin("searchPseudoElements");Rh(),Promise.all(q).then(function(){W(),_u(),U()}).catch(function(){W(),_u(),ee()})})}}var Q1={hooks:function(){return{mutationObserverCallbacks:function(s){return s.pseudoElementsCallback=Iy,s}}},provides:function(t){t.pseudoElements2svg=function(s){var r=s.node,u=r===void 0?Ne:r;V.searchPseudoElements&&Iy(u)}}},$y=!1,I1={mixout:function(){return{dom:{unwatch:function(){Rh(),$y=!0}}}},hooks:function(){return{bootstrap:function(){Wy(Bu("mutationObserverCallbacks",{}))},noAuto:function(){S1()},watch:function(s){var r=s.observeMutationsRoot;$y?_u():Wy(Bu("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},ew=function(t){var s={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,u){var d=u.toLowerCase().split("-"),m=d[0],y=d.slice(1).join("-");if(m&&y==="h")return r.flipX=!0,r;if(m&&y==="v")return r.flipY=!0,r;if(y=parseFloat(y),isNaN(y))return r;switch(m){case"grow":r.size=r.size+y;break;case"shrink":r.size=r.size-y;break;case"left":r.x=r.x-y;break;case"right":r.x=r.x+y;break;case"up":r.y=r.y-y;break;case"down":r.y=r.y+y;break;case"rotate":r.rotate=r.rotate+y;break}return r},s)},$1={mixout:function(){return{parse:{transform:function(s){return ew(s)}}}},hooks:function(){return{parseNodeAttributes:function(s,r){var u=r.getAttribute("data-fa-transform");return u&&(s.transform=ew(u)),s}}},provides:function(t){t.generateAbstractTransformGrouping=function(s){var r=s.main,u=s.transform,d=s.containerWidth,m=s.iconWidth,y={transform:"translate(".concat(d/2," 256)")},h="translate(".concat(u.x*32,", ").concat(u.y*32,") "),w="scale(".concat(u.size/16*(u.flipX?-1:1),", ").concat(u.size/16*(u.flipY?-1:1),") "),v="rotate(".concat(u.rotate," 0 0)"),A={transform:"".concat(h," ").concat(w," ").concat(v)},G={transform:"translate(".concat(m/2*-1," -256)")},_={outer:y,inner:A,path:G};return{tag:"g",attributes:M({},_.outer),children:[{tag:"g",attributes:M({},_.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:M(M({},r.icon.attributes),_.path)}]}]}}}},mu={x:0,y:0,width:"100%",height:"100%"};function nw(o){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return o.attributes&&(o.attributes.fill||t)&&(o.attributes.fill="black"),o}function e0(o){return o.tag==="g"?o.children:[o]}var n0={hooks:function(){return{parseNodeAttributes:function(s,r){var u=r.getAttribute("data-fa-mask"),d=u?Gl(u.split(" ").map(function(m){return m.trim()})):Gh();return d.prefix||(d.prefix=ii()),s.mask=d,s.maskId=r.getAttribute("data-fa-mask-id"),s}}},provides:function(t){t.generateAbstractMask=function(s){var r=s.children,u=s.attributes,d=s.main,m=s.mask,y=s.maskId,h=s.transform,w=d.width,v=d.icon,A=m.width,G=m.icon,_=Wk({transform:h,containerWidth:A,iconWidth:w}),L={tag:"rect",attributes:M(M({},mu),{},{fill:"white"})},U=v.children?{children:v.children.map(nw)}:{},ee={tag:"g",attributes:M({},_.inner),children:[nw(M({tag:v.tag,attributes:M(M({},v.attributes),_.path)},U))]},q={tag:"g",attributes:M({},_.outer),children:[ee]},W="mask-".concat(y||Ry()),I="clip-".concat(y||Ry()),ue={tag:"mask",attributes:M(M({},mu),{},{id:W,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[L,q]},Y={tag:"defs",children:[{tag:"clipPath",attributes:{id:I},children:e0(G)},ue]};return r.push(Y,{tag:"rect",attributes:M({fill:"currentColor","clip-path":"url(#".concat(I,")"),mask:"url(#".concat(W,")")},mu)}),{children:r,attributes:u}}}},a0={provides:function(t){var s=!1;ai.matchMedia&&(s=ai.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],u={fill:"currentColor"},d={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:M(M({},u),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var m=M(M({},d),{},{attributeName:"opacity"}),y={tag:"circle",attributes:M(M({},u),{},{cx:"256",cy:"364",r:"28"}),children:[]};return s||y.children.push({tag:"animate",attributes:M(M({},d),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:M(M({},m),{},{values:"1;0;1;1;0;1;"})}),r.push(y),r.push({tag:"path",attributes:M(M({},u),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:s?[]:[{tag:"animate",attributes:M(M({},m),{},{values:"1;0;0;0;0;1;"})}]}),s||r.push({tag:"path",attributes:M(M({},u),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:M(M({},m),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},i0={hooks:function(){return{parseNodeAttributes:function(s,r){var u=r.getAttribute("data-fa-symbol"),d=u===null?!1:u===""?!0:u;return s.symbol=d,s}}}},t0=[Xk,H1,J1,F1,U1,Q1,I1,$1,n0,a0,i0];f1(t0,{mixoutsTo:Gn});Gn.noAuto;var Ho=Gn.config;Gn.library;Gn.dom;var Ph=Gn.parse;Gn.findIconDefinition;Gn.toHtml;var o0=Gn.icon;Gn.layer;Gn.text;Gn.counter;function s0(o){return o=o-0,o===o}function Hh(o){return s0(o)?o:(o=o.replace(/[_-]+(.)?/g,(t,s)=>s?s.toUpperCase():""),o.charAt(0).toLowerCase()+o.slice(1))}function l0(o){return o.charAt(0).toUpperCase()+o.slice(1)}var At=new Map,r0=1e3;function c0(o){if(At.has(o))return At.get(o);const t={};let s=0;const r=o.length;for(;s<r;){const u=o.indexOf(";",s),d=u===-1?r:u,m=o.slice(s,d).trim();if(m){const y=m.indexOf(":");if(y>0){const h=m.slice(0,y).trim(),w=m.slice(y+1).trim();if(h&&w){const v=Hh(h);t[v.startsWith("webkit")?l0(v):v]=w}}}s=d+1}if(At.size===r0){const u=At.keys().next().value;u&&At.delete(u)}return At.set(o,t),t}function Jh(o,t,s={}){if(typeof t=="string")return t;const r=(t.children||[]).map(v=>Jh(o,v)),u=t.attributes||{},d={};for(const[v,A]of Object.entries(u))switch(!0){case v==="class":{d.className=A;break}case v==="style":{d.style=c0(String(A));break}case v.startsWith("aria-"):case v.startsWith("data-"):{d[v.toLowerCase()]=A;break}default:d[Hh(v)]=A}const{style:m,role:y,"aria-label":h,...w}=s;return m&&(d.style=d.style?{...d.style,...m}:m),y&&(d.role=y),h&&(d["aria-label"]=h,d["aria-hidden"]="false"),o(t.tag,{...w,...d},...r)}var u0=Jh.bind(null,Ln.createElement),aw=(o,t)=>{const s=N.useId();return o||(t?s:void 0)},f0=class{constructor(o="react-fontawesome"){this.enabled=!1;let t=!1;try{t=typeof process<"u"&&!1}catch{}this.scope=o,this.enabled=t}log(...o){this.enabled&&console.log(`[${this.scope}]`,...o)}warn(...o){this.enabled&&console.warn(`[${this.scope}]`,...o)}error(...o){this.enabled&&console.error(`[${this.scope}]`,...o)}},d0="searchPseudoElementsFullScan"in Ho?"7.0.0":"6.0.0",m0=Number.parseInt(d0)>=7,_o="fa",ja={beat:"fa-beat",fade:"fa-fade",beatFade:"fa-beat-fade",bounce:"fa-bounce",shake:"fa-shake",spin:"fa-spin",spinPulse:"fa-spin-pulse",spinReverse:"fa-spin-reverse",pulse:"fa-pulse"},z0={left:"fa-pull-left",right:"fa-pull-right"},y0={90:"fa-rotate-90",180:"fa-rotate-180",270:"fa-rotate-270"},w0={"2xs":"fa-2xs",xs:"fa-xs",sm:"fa-sm",lg:"fa-lg",xl:"fa-xl","2xl":"fa-2xl","1x":"fa-1x","2x":"fa-2x","3x":"fa-3x","4x":"fa-4x","5x":"fa-5x","6x":"fa-6x","7x":"fa-7x","8x":"fa-8x","9x":"fa-9x","10x":"fa-10x"},va={border:"fa-border",fixedWidth:"fa-fw",flip:"fa-flip",flipHorizontal:"fa-flip-horizontal",flipVertical:"fa-flip-vertical",inverse:"fa-inverse",rotateBy:"fa-rotate-by",swapOpacity:"fa-swap-opacity",widthAuto:"fa-width-auto"};function h0(o){const t=Ho.cssPrefix||Ho.familyPrefix||_o;return t===_o?o:o.replace(new RegExp(String.raw`(?<=^|\s)${_o}-`,"g"),`${t}-`)}function p0(o){const{beat:t,fade:s,beatFade:r,bounce:u,shake:d,spin:m,spinPulse:y,spinReverse:h,pulse:w,fixedWidth:v,inverse:A,border:G,flip:_,size:L,rotation:U,pull:ee,swapOpacity:q,rotateBy:W,widthAuto:I,className:ue}=o,Y=[];return ue&&Y.push(...ue.split(" ")),t&&Y.push(ja.beat),s&&Y.push(ja.fade),r&&Y.push(ja.beatFade),u&&Y.push(ja.bounce),d&&Y.push(ja.shake),m&&Y.push(ja.spin),h&&Y.push(ja.spinReverse),y&&Y.push(ja.spinPulse),w&&Y.push(ja.pulse),v&&Y.push(va.fixedWidth),A&&Y.push(va.inverse),G&&Y.push(va.border),_===!0&&Y.push(va.flip),(_==="horizontal"||_==="both")&&Y.push(va.flipHorizontal),(_==="vertical"||_==="both")&&Y.push(va.flipVertical),L!=null&&Y.push(w0[L]),U!=null&&U!==0&&Y.push(y0[U]),ee!=null&&Y.push(z0[ee]),q&&Y.push(va.swapOpacity),m0?(W&&Y.push(va.rotateBy),I&&Y.push(va.widthAuto),(Ho.cssPrefix||Ho.familyPrefix||_o)===_o?Y:Y.map(h0)):Y}var b0=o=>typeof o=="object"&&"icon"in o&&!!o.icon;function iw(o){if(o)return b0(o)?o:Ph.icon(o)}function g0(o){return Object.keys(o)}var tw=new f0("FontAwesomeIcon"),Fh={border:!1,className:"",mask:void 0,maskId:void 0,fixedWidth:!1,inverse:!1,flip:!1,icon:void 0,listItem:!1,pull:void 0,pulse:!1,rotation:void 0,rotateBy:!1,size:void 0,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:void 0,transform:void 0,swapOpacity:!1,widthAuto:!1},j0=new Set(Object.keys(Fh)),ka=Ln.forwardRef((o,t)=>{const s={...Fh,...o},{icon:r,mask:u,symbol:d,title:m,titleId:y,maskId:h,transform:w}=s,v=aw(h,!!u),A=aw(y,!!m),G=iw(r);if(!G)return tw.error("Icon lookup is undefined",r),null;const _=p0(s),L=typeof w=="string"?Ph.transform(w):w,U=iw(u),ee=o0(G,{..._.length>0&&{classes:_},...L&&{transform:L},...U&&{mask:U},symbol:d,title:m,titleId:A,maskId:v});if(!ee)return tw.error("Could not find icon",G),null;const{abstract:q}=ee,W={ref:t};for(const I of g0(s))j0.has(I)||(W[I]=s[I]);return u0(q[0],W)});ka.displayName="FontAwesomeIcon";var v0={prefix:"fas",iconName:"trash",icon:[448,512,[],"f1f8","M136.7 5.9L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-8.7-26.1C306.9-7.2 294.7-16 280.9-16L167.1-16c-13.8 0-26 8.8-30.4 21.9zM416 144L32 144 53.1 467.1C54.7 492.4 75.7 512 101 512L347 512c25.3 0 46.3-19.6 47.9-44.9L416 144z"]},k0={prefix:"fas",iconName:"guitar",icon:[512,512,[],"f7a6","M465 7c-9.4-9.4-24.6-9.4-33.9 0L383 55c-2.4 2.4-4.3 5.3-5.5 8.5l-15.4 41-77.5 77.6c-45.1-29.4-99.3-30.2-131 1.6-11 11-18 24.6-21.4 39.6-3.7 16.6-19.1 30.7-36.1 31.6-25.6 1.3-49.3 10.7-67.3 28.6-44.8 44.8-36.4 125.8 18.7 180.9S183.6 528 228.4 483.2c17.9-17.9 27.4-41.7 28.6-67.3 .9-17 15-32.3 31.6-36.1 15-3.4 28.6-10.5 39.6-21.4 31.8-31.8 31-85.9 1.6-131l77.6-77.6 41-15.4c3.2-1.2 6.1-3.1 8.5-5.5l48-48c9.4-9.4 9.4-24.6 0-33.9L465 7zM208 256a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"]},A0={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M55.1 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L147.2 256 9.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192.5 301.3 329.9 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.8 256 375.1 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192.5 210.7 55.1 73.4z"]},C0=A0,D0={prefix:"fas",iconName:"star",icon:[576,512,[11088,61446],"f005","M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z"]},T0={prefix:"fas",iconName:"caret-up",icon:[320,512,[],"f0d8","M140.3 135.2c12.6-10.3 31.1-9.5 42.8 2.2l128 128c9.2 9.2 11.9 22.9 6.9 34.9S301.4 320 288.5 320l-256 0c-12.9 0-24.6-7.8-29.6-19.8S.7 274.5 9.9 265.4l128-128 2.4-2.2z"]},E0={prefix:"fas",iconName:"caret-down",icon:[320,512,[],"f0d7","M140.3 376.8c12.6 10.2 31.1 9.5 42.8-2.2l128-128c9.2-9.2 11.9-22.9 6.9-34.9S301.4 192 288.5 192l-256 0c-12.9 0-24.6 7.8-29.6 19.8S.7 237.5 9.9 246.6l128 128 2.4 2.2z"]},Uh={prefix:"fas",iconName:"list-ul",icon:[512,512,["list-dots"],"f0ca","M48 144a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L192 64zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-288 0zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-288 0zM48 464a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM96 256a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z"]};const Gi={PLAIN:"plain",STARRED:"starred",SELECTED:"selected"},jl=({mode:o})=>R.jsx(ka,{icon:D0,className:en("sb-star",`sb-star-mode-${o}`)}),S0=N.memo(({song:o,chooseSong:t,onlyStarred:s})=>{const r=()=>t(o.number),u=s?o.selected?Gi.SELECTED:Gi.STARRED:o.starred?Gi.STARRED:Gi.PLAIN,d=s?o.toggleSelected:o.toggleStarred;return R.jsxs("span",{className:en("sb-menu-songtitle",{"sb-starred-song":o.starred}),children:[R.jsxs("span",{onClick:d,children:[R.jsx(jl,{mode:u})," ",R.jsxs("span",{className:en({"sb-chosen-song":o.chosen}),children:[o.number,". "]})]}),R.jsx("a",{href:"#",onClick:r,className:en("text-reset",{"sb-chosen-song":o.chosen}),children:o.title})]})}),G0=({onlyStarred:o,toggleOnlyStarred:t,starredCount:s,selectedSong:r,searchText:u,setSearchText:d,onClose:m})=>{const y=h=>{d(h.target.value)};return R.jsxs(R.Fragment,{children:[s?R.jsx("div",{className:"me-2",children:R.jsx(Tt,{variant:"info",onClick:t,children:o?R.jsx(ka,{icon:Uh,role:"button",size:"lg"}):R.jsx(R.Fragment,{children:R.jsxs("span",{className:"sb-no-wrap",children:[R.jsx(jl,{mode:Gi.STARRED})," ",s]})})})}):null,o?r?R.jsxs(R.Fragment,{children:[R.jsx(Tt,{className:"ms-2 me-1",variant:"success",disabled:!r.moveUp,onClick:r.moveUp,children:R.jsx(ka,{icon:T0,role:"button",size:"lg"})}),R.jsx(Tt,{className:"me-3",variant:"success",disabled:!r.moveDown,onClick:r.moveDown,children:R.jsx(ka,{icon:E0,role:"button",size:"lg"})}),R.jsx(Tt,{className:"me-1",variant:"danger",onClick:r.toggleStarred,children:R.jsx(ka,{icon:v0,role:"button",size:"lg"})})]}):R.jsx("div",{className:"ms-2",children:R.jsxs("span",{className:"fw-bold sb-no-wrap",children:["Wybrane ",R.jsx(jl,{mode:Gi.STARRED})," ",s]})}):R.jsx("div",{className:"me-2 flex-grow-1",children:R.jsx("input",{type:"search",className:"form-control",placeholder:"Szukaj",autoCapitalize:"none",autoCorrect:"off",value:u,onChange:y})}),R.jsx("div",{className:"ms-auto",children:R.jsx(Tt,{variant:"light",onClick:m,children:R.jsx(ka,{icon:C0,role:"button",size:"lg",onClick:m})})})]})},Lh=o=>o.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[\u0142]/g,"l").replace(/[^a-z ]/g,"").toLowerCase(),O0=({songs:o,checksum:t,chooseSong:s,starredCount:r,onlyStarred:u,toggleOnlyStarred:d,show:m,onClose:y})=>{const[h,w]=N.useState(""),v=N.useRef(null);N.useEffect(()=>{(!m||u)&&w(""),L()},[m,u]);const G=(()=>{const W=h.trim();if(!W)return;const I=parseInt(W,10);return Number.isNaN(I)?Lh(W):I})();N.useEffect(()=>{G||L()},[G]);const _=W=>G?typeof G=="number"?W.number===G:W.latinTitle.includes(G):!0,L=()=>{v.current&&v.current.scrollIntoView()},U=o.findIndex(W=>W.chosen),ee=o.find(W=>W.selected),q=U<3?0:U-3;return R.jsxs(ul,{show:m,onHide:y,scrollable:!0,animation:!1,children:[R.jsx(ul.Header,{className:"py-2 px-2",children:R.jsx(G0,{onlyStarred:u,toggleOnlyStarred:d,starredCount:r,selectedSong:ee,searchText:h,setSearchText:w,onClose:y})}),R.jsx(ul.Body,{children:o.filter(W=>_(W)).map((W,I)=>R.jsxs(N.Fragment,{children:[R.jsx(S0,{song:W,chooseSong:s,onlyStarred:u}),R.jsx("br",{ref:I===q?v:null})]},W.number))}),R.jsx(ul.Footer,{className:"py-0",children:R.jsxs("p",{className:"text-secondary small",children:["Śpiewnik - Tchnienie Boga v","0.4.2"," [",t,"]"]})})]})},B0=({onlyStarred:o,chordsShown:t,onClickMenu:s,onClickGuitar:r})=>R.jsxs("div",{className:"sb-menu-buttons-container",children:[R.jsx("div",{className:en("btn","sb-menu-button","shadow","rounded-circle",t?"sb-menu-button-red":"sb-menu-button-gray","d-flex","justify-content-center","align-items-center","pt-2"),tabIndex:0,role:"button",onClick:r,children:R.jsx("div",{className:"sb-menu-button-icon my-auto",children:R.jsx(ka,{icon:k0,size:"lg"})})}),R.jsx("div",{className:"btn sb-menu-button shadow rounded-circle sb-menu-button-cyan d-flex justify-content-center align-items-center pt-2",tabIndex:1,role:"button",onClick:s,children:R.jsx("div",{className:"sb-menu-button-icon my-auto",children:o?R.jsx(jl,{mode:Gi.STARRED}):R.jsx(ka,{icon:Uh,size:"lg"})})})]}),x0=o=>{const t=localStorage.getItem(o);return typeof t=="string"?JSON.parse(t):void 0},N0=(o,t)=>{t!==void 0&&localStorage.setItem(o,JSON.stringify(t))},Ei=(o,t)=>{const[s,r]=N.useState(()=>{const u=x0(o);return u||t});return N.useEffect(()=>{N0(o,s)},[o,s]),[s,r]};function R0(o,t,s){return Math.max(t,Math.min(o,s))}const Re={toVector(o,t){return o===void 0&&(o=t),Array.isArray(o)?o:[o,o]},add(o,t){return[o[0]+t[0],o[1]+t[1]]},sub(o,t){return[o[0]-t[0],o[1]-t[1]]},addTo(o,t){o[0]+=t[0],o[1]+=t[1]},subTo(o,t){o[0]-=t[0],o[1]-=t[1]}};function ow(o,t,s){return t===0||Math.abs(t)===1/0?Math.pow(o,s*5):o*t*s/(t+s*o)}function sw(o,t,s,r=.15){return r===0?R0(o,t,s):o<t?-ow(t-o,s-t,r)+t:o>s?+ow(o-s,s-t,r)+s:o}function M0(o,[t,s],[r,u]){const[[d,m],[y,h]]=o;return[sw(t,d,m,r),sw(s,y,h,u)]}function _0(o,t){if(typeof o!="object"||o===null)return o;var s=o[Symbol.toPrimitive];if(s!==void 0){var r=s.call(o,t);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(o)}function P0(o){var t=_0(o,"string");return typeof t=="symbol"?t:String(t)}function qe(o,t,s){return t=P0(t),t in o?Object.defineProperty(o,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):o[t]=s,o}function lw(o,t){var s=Object.keys(o);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(o);t&&(r=r.filter(function(u){return Object.getOwnPropertyDescriptor(o,u).enumerable})),s.push.apply(s,r)}return s}function Pe(o){for(var t=1;t<arguments.length;t++){var s=arguments[t]!=null?arguments[t]:{};t%2?lw(Object(s),!0).forEach(function(r){qe(o,r,s[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(s)):lw(Object(s)).forEach(function(r){Object.defineProperty(o,r,Object.getOwnPropertyDescriptor(s,r))})}return o}const Kh={pointer:{start:"down",change:"move",end:"up"},mouse:{start:"down",change:"move",end:"up"},touch:{start:"start",change:"move",end:"end"},gesture:{start:"start",change:"change",end:"end"}};function rw(o){return o?o[0].toUpperCase()+o.slice(1):""}const H0=["enter","leave"];function J0(o=!1,t){return o&&!H0.includes(t)}function F0(o,t="",s=!1){const r=Kh[o],u=r&&r[t]||t;return"on"+rw(o)+rw(u)+(J0(s,u)?"Capture":"")}const U0=["gotpointercapture","lostpointercapture"];function L0(o){let t=o.substring(2).toLowerCase();const s=!!~t.indexOf("passive");s&&(t=t.replace("passive",""));const r=U0.includes(t)?"capturecapture":"capture",u=!!~t.indexOf(r);return u&&(t=t.replace("capture","")),{device:t,capture:u,passive:s}}function K0(o,t=""){const s=Kh[o],r=s&&s[t]||t;return o+r}function Bl(o){return"touches"in o}function Zh(o){return Bl(o)?"touch":"pointerType"in o?o.pointerType:"mouse"}function Z0(o){return Array.from(o.touches).filter(t=>{var s,r;return t.target===o.currentTarget||((s=o.currentTarget)===null||s===void 0||(r=s.contains)===null||r===void 0?void 0:r.call(s,t.target))})}function W0(o){return o.type==="touchend"||o.type==="touchcancel"?o.changedTouches:o.targetTouches}function Wh(o){return Bl(o)?W0(o)[0]:o}function Hu(o,t){try{const s=t.clientX-o.clientX,r=t.clientY-o.clientY,u=(t.clientX+o.clientX)/2,d=(t.clientY+o.clientY)/2,m=Math.hypot(s,r);return{angle:-(Math.atan2(s,r)*180)/Math.PI,distance:m,origin:[u,d]}}catch{}return null}function Y0(o){return Z0(o).map(t=>t.identifier)}function cw(o,t){const[s,r]=Array.from(o.touches).filter(u=>t.includes(u.identifier));return Hu(s,r)}function zu(o){const t=Wh(o);return Bl(o)?t.identifier:t.pointerId}function Bt(o){const t=Wh(o);return[t.clientX,t.clientY]}const uw=40,fw=800;function Yh(o){let{deltaX:t,deltaY:s,deltaMode:r}=o;return r===1?(t*=uw,s*=uw):r===2&&(t*=fw,s*=fw),[t,s]}function q0(o){var t,s;const{scrollX:r,scrollY:u,scrollLeft:d,scrollTop:m}=o.currentTarget;return[(t=r??d)!==null&&t!==void 0?t:0,(s=u??m)!==null&&s!==void 0?s:0]}function X0(o){const t={};if("buttons"in o&&(t.buttons=o.buttons),"shiftKey"in o){const{shiftKey:s,altKey:r,metaKey:u,ctrlKey:d}=o;Object.assign(t,{shiftKey:s,altKey:r,metaKey:u,ctrlKey:d})}return t}function vl(o,...t){return typeof o=="function"?o(...t):o}function V0(){}function Q0(...o){return o.length===0?V0:o.length===1?o[0]:function(){let t;for(const s of o)t=s.apply(this,arguments)||t;return t}}function dw(o,t){return Object.assign({},t,o||{})}const I0=32;class qh{constructor(t,s,r){this.ctrl=t,this.args=s,this.key=r,this.state||(this.state={},this.computeValues([0,0]),this.computeInitial(),this.init&&this.init(),this.reset())}get state(){return this.ctrl.state[this.key]}set state(t){this.ctrl.state[this.key]=t}get shared(){return this.ctrl.state.shared}get eventStore(){return this.ctrl.gestureEventStores[this.key]}get timeoutStore(){return this.ctrl.gestureTimeoutStores[this.key]}get config(){return this.ctrl.config[this.key]}get sharedConfig(){return this.ctrl.config.shared}get handler(){return this.ctrl.handlers[this.key]}reset(){const{state:t,shared:s,ingKey:r,args:u}=this;s[r]=t._active=t.active=t._blocked=t._force=!1,t._step=[!1,!1],t.intentional=!1,t._movement=[0,0],t._distance=[0,0],t._direction=[0,0],t._delta=[0,0],t._bounds=[[-1/0,1/0],[-1/0,1/0]],t.args=u,t.axis=void 0,t.memo=void 0,t.elapsedTime=t.timeDelta=0,t.direction=[0,0],t.distance=[0,0],t.overflow=[0,0],t._movementBound=[!1,!1],t.velocity=[0,0],t.movement=[0,0],t.delta=[0,0],t.timeStamp=0}start(t){const s=this.state,r=this.config;s._active||(this.reset(),this.computeInitial(),s._active=!0,s.target=t.target,s.currentTarget=t.currentTarget,s.lastOffset=r.from?vl(r.from,s):s.offset,s.offset=s.lastOffset,s.startTime=s.timeStamp=t.timeStamp)}computeValues(t){const s=this.state;s._values=t,s.values=this.config.transform(t)}computeInitial(){const t=this.state;t._initial=t._values,t.initial=t.values}compute(t){const{state:s,config:r,shared:u}=this;s.args=this.args;let d=0;if(t&&(s.event=t,r.preventDefault&&t.cancelable&&s.event.preventDefault(),s.type=t.type,u.touches=this.ctrl.pointerIds.size||this.ctrl.touchIds.size,u.locked=!!document.pointerLockElement,Object.assign(u,X0(t)),u.down=u.pressed=u.buttons%2===1||u.touches>0,d=t.timeStamp-s.timeStamp,s.timeStamp=t.timeStamp,s.elapsedTime=s.timeStamp-s.startTime),s._active){const ce=s._delta.map(Math.abs);Re.addTo(s._distance,ce)}this.axisIntent&&this.axisIntent(t);const[m,y]=s._movement,[h,w]=r.threshold,{_step:v,values:A}=s;if(r.hasCustomTransform?(v[0]===!1&&(v[0]=Math.abs(m)>=h&&A[0]),v[1]===!1&&(v[1]=Math.abs(y)>=w&&A[1])):(v[0]===!1&&(v[0]=Math.abs(m)>=h&&Math.sign(m)*h),v[1]===!1&&(v[1]=Math.abs(y)>=w&&Math.sign(y)*w)),s.intentional=v[0]!==!1||v[1]!==!1,!s.intentional)return;const G=[0,0];if(r.hasCustomTransform){const[ce,Q]=A;G[0]=v[0]!==!1?ce-v[0]:0,G[1]=v[1]!==!1?Q-v[1]:0}else G[0]=v[0]!==!1?m-v[0]:0,G[1]=v[1]!==!1?y-v[1]:0;this.restrictToAxis&&!s._blocked&&this.restrictToAxis(G);const _=s.offset,L=s._active&&!s._blocked||s.active;L&&(s.first=s._active&&!s.active,s.last=!s._active&&s.active,s.active=u[this.ingKey]=s._active,t&&(s.first&&("bounds"in r&&(s._bounds=vl(r.bounds,s)),this.setup&&this.setup()),s.movement=G,this.computeOffset()));const[U,ee]=s.offset,[[q,W],[I,ue]]=s._bounds;s.overflow=[U<q?-1:U>W?1:0,ee<I?-1:ee>ue?1:0],s._movementBound[0]=s.overflow[0]?s._movementBound[0]===!1?s._movement[0]:s._movementBound[0]:!1,s._movementBound[1]=s.overflow[1]?s._movementBound[1]===!1?s._movement[1]:s._movementBound[1]:!1;const Y=s._active?r.rubberband||[0,0]:[0,0];if(s.offset=M0(s._bounds,s.offset,Y),s.delta=Re.sub(s.offset,_),this.computeMovement(),L&&(!s.last||d>I0)){s.delta=Re.sub(s.offset,_);const ce=s.delta.map(Math.abs);Re.addTo(s.distance,ce),s.direction=s.delta.map(Math.sign),s._direction=s._delta.map(Math.sign),!s.first&&d>0&&(s.velocity=[ce[0]/d,ce[1]/d],s.timeDelta=d)}}emit(){const t=this.state,s=this.shared,r=this.config;if(t._active||this.clean(),(t._blocked||!t.intentional)&&!t._force&&!r.triggerAllEvents)return;const u=this.handler(Pe(Pe(Pe({},s),t),{},{[this.aliasKey]:t.values}));u!==void 0&&(t.memo=u)}clean(){this.eventStore.clean(),this.timeoutStore.clean()}}function $0([o,t],s){const r=Math.abs(o),u=Math.abs(t);if(r>u&&r>s)return"x";if(u>r&&u>s)return"y"}class Lo extends qh{constructor(...t){super(...t),qe(this,"aliasKey","xy")}reset(){super.reset(),this.state.axis=void 0}init(){this.state.offset=[0,0],this.state.lastOffset=[0,0]}computeOffset(){this.state.offset=Re.add(this.state.lastOffset,this.state.movement)}computeMovement(){this.state.movement=Re.sub(this.state.offset,this.state.lastOffset)}axisIntent(t){const s=this.state,r=this.config;if(!s.axis&&t){const u=typeof r.axisThreshold=="object"?r.axisThreshold[Zh(t)]:r.axisThreshold;s.axis=$0(s._movement,u)}s._blocked=(r.lockDirection||!!r.axis)&&!s.axis||!!r.axis&&r.axis!==s.axis}restrictToAxis(t){if(this.config.axis||this.config.lockDirection)switch(this.state.axis){case"x":t[1]=0;break;case"y":t[0]=0;break}}}const eA=o=>o,mw=.15,Xh={enabled(o=!0){return o},eventOptions(o,t,s){return Pe(Pe({},s.shared.eventOptions),o)},preventDefault(o=!1){return o},triggerAllEvents(o=!1){return o},rubberband(o=0){switch(o){case!0:return[mw,mw];case!1:return[0,0];default:return Re.toVector(o)}},from(o){if(typeof o=="function")return o;if(o!=null)return Re.toVector(o)},transform(o,t,s){const r=o||s.shared.transform;return this.hasCustomTransform=!!r,r||eA},threshold(o){return Re.toVector(o,0)}},nA=0,Ri=Pe(Pe({},Xh),{},{axis(o,t,{axis:s}){if(this.lockDirection=s==="lock",!this.lockDirection)return s},axisThreshold(o=nA){return o},bounds(o={}){if(typeof o=="function")return d=>Ri.bounds(o(d));if("current"in o)return()=>o.current;if(typeof HTMLElement=="function"&&o instanceof HTMLElement)return o;const{left:t=-1/0,right:s=1/0,top:r=-1/0,bottom:u=1/0}=o;return[[t,s],[r,u]]}}),zw={ArrowRight:(o,t=1)=>[o*t,0],ArrowLeft:(o,t=1)=>[-1*o*t,0],ArrowUp:(o,t=1)=>[0,-1*o*t],ArrowDown:(o,t=1)=>[0,o*t]};class aA extends Lo{constructor(...t){super(...t),qe(this,"ingKey","dragging")}reset(){super.reset();const t=this.state;t._pointerId=void 0,t._pointerActive=!1,t._keyboardActive=!1,t._preventScroll=!1,t._delayed=!1,t.swipe=[0,0],t.tap=!1,t.canceled=!1,t.cancel=this.cancel.bind(this)}setup(){const t=this.state;if(t._bounds instanceof HTMLElement){const s=t._bounds.getBoundingClientRect(),r=t.currentTarget.getBoundingClientRect(),u={left:s.left-r.left+t.offset[0],right:s.right-r.right+t.offset[0],top:s.top-r.top+t.offset[1],bottom:s.bottom-r.bottom+t.offset[1]};t._bounds=Ri.bounds(u)}}cancel(){const t=this.state;t.canceled||(t.canceled=!0,t._active=!1,setTimeout(()=>{this.compute(),this.emit()},0))}setActive(){this.state._active=this.state._pointerActive||this.state._keyboardActive}clean(){this.pointerClean(),this.state._pointerActive=!1,this.state._keyboardActive=!1,super.clean()}pointerDown(t){const s=this.config,r=this.state;if(t.buttons!=null&&(Array.isArray(s.pointerButtons)?!s.pointerButtons.includes(t.buttons):s.pointerButtons!==-1&&s.pointerButtons!==t.buttons))return;const u=this.ctrl.setEventIds(t);s.pointerCapture&&t.target.setPointerCapture(t.pointerId),!(u&&u.size>1&&r._pointerActive)&&(this.start(t),this.setupPointer(t),r._pointerId=zu(t),r._pointerActive=!0,this.computeValues(Bt(t)),this.computeInitial(),s.preventScrollAxis&&Zh(t)!=="mouse"?(r._active=!1,this.setupScrollPrevention(t)):s.delay>0?(this.setupDelayTrigger(t),s.triggerAllEvents&&(this.compute(t),this.emit())):this.startPointerDrag(t))}startPointerDrag(t){const s=this.state;s._active=!0,s._preventScroll=!0,s._delayed=!1,this.compute(t),this.emit()}pointerMove(t){const s=this.state,r=this.config;if(!s._pointerActive)return;const u=zu(t);if(s._pointerId!==void 0&&u!==s._pointerId)return;const d=Bt(t);if(document.pointerLockElement===t.target?s._delta=[t.movementX,t.movementY]:(s._delta=Re.sub(d,s._values),this.computeValues(d)),Re.addTo(s._movement,s._delta),this.compute(t),s._delayed&&s.intentional){this.timeoutStore.remove("dragDelay"),s.active=!1,this.startPointerDrag(t);return}if(r.preventScrollAxis&&!s._preventScroll)if(s.axis)if(s.axis===r.preventScrollAxis||r.preventScrollAxis==="xy"){s._active=!1,this.clean();return}else{this.timeoutStore.remove("startPointerDrag"),this.startPointerDrag(t);return}else return;this.emit()}pointerUp(t){this.ctrl.setEventIds(t);try{this.config.pointerCapture&&t.target.hasPointerCapture(t.pointerId)&&t.target.releasePointerCapture(t.pointerId)}catch{}const s=this.state,r=this.config;if(!s._active||!s._pointerActive)return;const u=zu(t);if(s._pointerId!==void 0&&u!==s._pointerId)return;this.state._pointerActive=!1,this.setActive(),this.compute(t);const[d,m]=s._distance;if(s.tap=d<=r.tapsThreshold&&m<=r.tapsThreshold,s.tap&&r.filterTaps)s._force=!0;else{const[y,h]=s._delta,[w,v]=s._movement,[A,G]=r.swipe.velocity,[_,L]=r.swipe.distance,U=r.swipe.duration;if(s.elapsedTime<U){const ee=Math.abs(y/s.timeDelta),q=Math.abs(h/s.timeDelta);ee>A&&Math.abs(w)>_&&(s.swipe[0]=Math.sign(y)),q>G&&Math.abs(v)>L&&(s.swipe[1]=Math.sign(h))}}this.emit()}pointerClick(t){!this.state.tap&&t.detail>0&&(t.preventDefault(),t.stopPropagation())}setupPointer(t){const s=this.config,r=s.device;s.pointerLock&&t.currentTarget.requestPointerLock(),s.pointerCapture||(this.eventStore.add(this.sharedConfig.window,r,"change",this.pointerMove.bind(this)),this.eventStore.add(this.sharedConfig.window,r,"end",this.pointerUp.bind(this)),this.eventStore.add(this.sharedConfig.window,r,"cancel",this.pointerUp.bind(this)))}pointerClean(){this.config.pointerLock&&document.pointerLockElement===this.state.currentTarget&&document.exitPointerLock()}preventScroll(t){this.state._preventScroll&&t.cancelable&&t.preventDefault()}setupScrollPrevention(t){this.state._preventScroll=!1,iA(t);const s=this.eventStore.add(this.sharedConfig.window,"touch","change",this.preventScroll.bind(this),{passive:!1});this.eventStore.add(this.sharedConfig.window,"touch","end",s),this.eventStore.add(this.sharedConfig.window,"touch","cancel",s),this.timeoutStore.add("startPointerDrag",this.startPointerDrag.bind(this),this.config.preventScrollDelay,t)}setupDelayTrigger(t){this.state._delayed=!0,this.timeoutStore.add("dragDelay",()=>{this.state._step=[0,0],this.startPointerDrag(t)},this.config.delay)}keyDown(t){const s=zw[t.key];if(s){const r=this.state,u=t.shiftKey?10:t.altKey?.1:1;this.start(t),r._delta=s(this.config.keyboardDisplacement,u),r._keyboardActive=!0,Re.addTo(r._movement,r._delta),this.compute(t),this.emit()}}keyUp(t){t.key in zw&&(this.state._keyboardActive=!1,this.setActive(),this.compute(t),this.emit())}bind(t){const s=this.config.device;t(s,"start",this.pointerDown.bind(this)),this.config.pointerCapture&&(t(s,"change",this.pointerMove.bind(this)),t(s,"end",this.pointerUp.bind(this)),t(s,"cancel",this.pointerUp.bind(this)),t("lostPointerCapture","",this.pointerUp.bind(this))),this.config.keys&&(t("key","down",this.keyDown.bind(this)),t("key","up",this.keyUp.bind(this))),this.config.filterTaps&&t("click","",this.pointerClick.bind(this),{capture:!0,passive:!1})}}function iA(o){"persist"in o&&typeof o.persist=="function"&&o.persist()}const Ko=typeof window<"u"&&window.document&&window.document.createElement;function Vh(){return Ko&&"ontouchstart"in window}function tA(){return Vh()||Ko&&window.navigator.maxTouchPoints>1}function oA(){return Ko&&"onpointerdown"in window}function sA(){return Ko&&"exitPointerLock"in window.document}function lA(){try{return"constructor"in GestureEvent}catch{return!1}}const Un={isBrowser:Ko,gesture:lA(),touch:Vh(),touchscreen:tA(),pointer:oA(),pointerLock:sA()},rA=250,cA=180,uA=.5,fA=50,dA=250,mA=10,yw={mouse:0,touch:0,pen:8},zA=Pe(Pe({},Ri),{},{device(o,t,{pointer:{touch:s=!1,lock:r=!1,mouse:u=!1}={}}){return this.pointerLock=r&&Un.pointerLock,Un.touch&&s?"touch":this.pointerLock?"mouse":Un.pointer&&!u?"pointer":Un.touch?"touch":"mouse"},preventScrollAxis(o,t,{preventScroll:s}){if(this.preventScrollDelay=typeof s=="number"?s:s||s===void 0&&o?rA:void 0,!(!Un.touchscreen||s===!1))return o||(s!==void 0?"y":void 0)},pointerCapture(o,t,{pointer:{capture:s=!0,buttons:r=1,keys:u=!0}={}}){return this.pointerButtons=r,this.keys=u,!this.pointerLock&&this.device==="pointer"&&s},threshold(o,t,{filterTaps:s=!1,tapsThreshold:r=3,axis:u=void 0}){const d=Re.toVector(o,s?r:u?1:0);return this.filterTaps=s,this.tapsThreshold=r,d},swipe({velocity:o=uA,distance:t=fA,duration:s=dA}={}){return{velocity:this.transform(Re.toVector(o)),distance:this.transform(Re.toVector(t)),duration:s}},delay(o=0){switch(o){case!0:return cA;case!1:return 0;default:return o}},axisThreshold(o){return o?Pe(Pe({},yw),o):yw},keyboardDisplacement(o=mA){return o}});function Qh(o){const[t,s]=o.overflow,[r,u]=o._delta,[d,m]=o._direction;(t<0&&r>0&&d<0||t>0&&r<0&&d>0)&&(o._movement[0]=o._movementBound[0]),(s<0&&u>0&&m<0||s>0&&u<0&&m>0)&&(o._movement[1]=o._movementBound[1])}const yA=30,wA=100;class hA extends qh{constructor(...t){super(...t),qe(this,"ingKey","pinching"),qe(this,"aliasKey","da")}init(){this.state.offset=[1,0],this.state.lastOffset=[1,0],this.state._pointerEvents=new Map}reset(){super.reset();const t=this.state;t._touchIds=[],t.canceled=!1,t.cancel=this.cancel.bind(this),t.turns=0}computeOffset(){const{type:t,movement:s,lastOffset:r}=this.state;t==="wheel"?this.state.offset=Re.add(s,r):this.state.offset=[(1+s[0])*r[0],s[1]+r[1]]}computeMovement(){const{offset:t,lastOffset:s}=this.state;this.state.movement=[t[0]/s[0],t[1]-s[1]]}axisIntent(){const t=this.state,[s,r]=t._movement;if(!t.axis){const u=Math.abs(s)*yA-Math.abs(r);u<0?t.axis="angle":u>0&&(t.axis="scale")}}restrictToAxis(t){this.config.lockDirection&&(this.state.axis==="scale"?t[1]=0:this.state.axis==="angle"&&(t[0]=0))}cancel(){const t=this.state;t.canceled||setTimeout(()=>{t.canceled=!0,t._active=!1,this.compute(),this.emit()},0)}touchStart(t){this.ctrl.setEventIds(t);const s=this.state,r=this.ctrl.touchIds;if(s._active&&s._touchIds.every(d=>r.has(d))||r.size<2)return;this.start(t),s._touchIds=Array.from(r).slice(0,2);const u=cw(t,s._touchIds);u&&this.pinchStart(t,u)}pointerStart(t){if(t.buttons!=null&&t.buttons%2!==1)return;this.ctrl.setEventIds(t),t.target.setPointerCapture(t.pointerId);const s=this.state,r=s._pointerEvents,u=this.ctrl.pointerIds;if(s._active&&Array.from(r.keys()).every(m=>u.has(m))||(r.size<2&&r.set(t.pointerId,t),s._pointerEvents.size<2))return;this.start(t);const d=Hu(...Array.from(r.values()));d&&this.pinchStart(t,d)}pinchStart(t,s){const r=this.state;r.origin=s.origin,this.computeValues([s.distance,s.angle]),this.computeInitial(),this.compute(t),this.emit()}touchMove(t){if(!this.state._active)return;const s=cw(t,this.state._touchIds);s&&this.pinchMove(t,s)}pointerMove(t){const s=this.state._pointerEvents;if(s.has(t.pointerId)&&s.set(t.pointerId,t),!this.state._active)return;const r=Hu(...Array.from(s.values()));r&&this.pinchMove(t,r)}pinchMove(t,s){const r=this.state,u=r._values[1],d=s.angle-u;let m=0;Math.abs(d)>270&&(m+=Math.sign(d)),this.computeValues([s.distance,s.angle-360*m]),r.origin=s.origin,r.turns=m,r._movement=[r._values[0]/r._initial[0]-1,r._values[1]-r._initial[1]],this.compute(t),this.emit()}touchEnd(t){this.ctrl.setEventIds(t),this.state._active&&this.state._touchIds.some(s=>!this.ctrl.touchIds.has(s))&&(this.state._active=!1,this.compute(t),this.emit())}pointerEnd(t){const s=this.state;this.ctrl.setEventIds(t);try{t.target.releasePointerCapture(t.pointerId)}catch{}s._pointerEvents.has(t.pointerId)&&s._pointerEvents.delete(t.pointerId),s._active&&s._pointerEvents.size<2&&(s._active=!1,this.compute(t),this.emit())}gestureStart(t){t.cancelable&&t.preventDefault();const s=this.state;s._active||(this.start(t),this.computeValues([t.scale,t.rotation]),s.origin=[t.clientX,t.clientY],this.compute(t),this.emit())}gestureMove(t){if(t.cancelable&&t.preventDefault(),!this.state._active)return;const s=this.state;this.computeValues([t.scale,t.rotation]),s.origin=[t.clientX,t.clientY];const r=s._movement;s._movement=[t.scale-1,t.rotation],s._delta=Re.sub(s._movement,r),this.compute(t),this.emit()}gestureEnd(t){this.state._active&&(this.state._active=!1,this.compute(t),this.emit())}wheel(t){const s=this.config.modifierKey;s&&(Array.isArray(s)?!s.find(r=>t[r]):!t[s])||(this.state._active?this.wheelChange(t):this.wheelStart(t),this.timeoutStore.add("wheelEnd",this.wheelEnd.bind(this)))}wheelStart(t){this.start(t),this.wheelChange(t)}wheelChange(t){"uv"in t||t.cancelable&&t.preventDefault();const r=this.state;r._delta=[-Yh(t)[1]/wA*r.offset[0],0],Re.addTo(r._movement,r._delta),Qh(r),this.state.origin=[t.clientX,t.clientY],this.compute(t),this.emit()}wheelEnd(){this.state._active&&(this.state._active=!1,this.compute(),this.emit())}bind(t){const s=this.config.device;s&&(t(s,"start",this[s+"Start"].bind(this)),t(s,"change",this[s+"Move"].bind(this)),t(s,"end",this[s+"End"].bind(this)),t(s,"cancel",this[s+"End"].bind(this)),t("lostPointerCapture","",this[s+"End"].bind(this))),this.config.pinchOnWheel&&t("wheel","",this.wheel.bind(this),{passive:!1})}}const pA=Pe(Pe({},Xh),{},{device(o,t,{shared:s,pointer:{touch:r=!1}={}}){if(s.target&&!Un.touch&&Un.gesture)return"gesture";if(Un.touch&&r)return"touch";if(Un.touchscreen){if(Un.pointer)return"pointer";if(Un.touch)return"touch"}},bounds(o,t,{scaleBounds:s={},angleBounds:r={}}){const u=m=>{const y=dw(vl(s,m),{min:-1/0,max:1/0});return[y.min,y.max]},d=m=>{const y=dw(vl(r,m),{min:-1/0,max:1/0});return[y.min,y.max]};return typeof s!="function"&&typeof r!="function"?[u(),d()]:m=>[u(m),d(m)]},threshold(o,t,s){return this.lockDirection=s.axis==="lock",Re.toVector(o,this.lockDirection?[.1,3]:0)},modifierKey(o){return o===void 0?"ctrlKey":o},pinchOnWheel(o=!0){return o}});class bA extends Lo{constructor(...t){super(...t),qe(this,"ingKey","moving")}move(t){this.config.mouseOnly&&t.pointerType!=="mouse"||(this.state._active?this.moveChange(t):this.moveStart(t),this.timeoutStore.add("moveEnd",this.moveEnd.bind(this)))}moveStart(t){this.start(t),this.computeValues(Bt(t)),this.compute(t),this.computeInitial(),this.emit()}moveChange(t){if(!this.state._active)return;const s=Bt(t),r=this.state;r._delta=Re.sub(s,r._values),Re.addTo(r._movement,r._delta),this.computeValues(s),this.compute(t),this.emit()}moveEnd(t){this.state._active&&(this.state._active=!1,this.compute(t),this.emit())}bind(t){t("pointer","change",this.move.bind(this)),t("pointer","leave",this.moveEnd.bind(this))}}const gA=Pe(Pe({},Ri),{},{mouseOnly:(o=!0)=>o});class jA extends Lo{constructor(...t){super(...t),qe(this,"ingKey","scrolling")}scroll(t){this.state._active||this.start(t),this.scrollChange(t),this.timeoutStore.add("scrollEnd",this.scrollEnd.bind(this))}scrollChange(t){t.cancelable&&t.preventDefault();const s=this.state,r=q0(t);s._delta=Re.sub(r,s._values),Re.addTo(s._movement,s._delta),this.computeValues(r),this.compute(t),this.emit()}scrollEnd(){this.state._active&&(this.state._active=!1,this.compute(),this.emit())}bind(t){t("scroll","",this.scroll.bind(this))}}const vA=Ri;class kA extends Lo{constructor(...t){super(...t),qe(this,"ingKey","wheeling")}wheel(t){this.state._active||this.start(t),this.wheelChange(t),this.timeoutStore.add("wheelEnd",this.wheelEnd.bind(this))}wheelChange(t){const s=this.state;s._delta=Yh(t),Re.addTo(s._movement,s._delta),Qh(s),this.compute(t),this.emit()}wheelEnd(){this.state._active&&(this.state._active=!1,this.compute(),this.emit())}bind(t){t("wheel","",this.wheel.bind(this))}}const AA=Ri;class CA extends Lo{constructor(...t){super(...t),qe(this,"ingKey","hovering")}enter(t){this.config.mouseOnly&&t.pointerType!=="mouse"||(this.start(t),this.computeValues(Bt(t)),this.compute(t),this.emit())}leave(t){if(this.config.mouseOnly&&t.pointerType!=="mouse")return;const s=this.state;if(!s._active)return;s._active=!1;const r=Bt(t);s._movement=s._delta=Re.sub(r,s._values),this.computeValues(r),this.compute(t),s.delta=s.movement,this.emit()}bind(t){t("pointer","enter",this.enter.bind(this)),t("pointer","leave",this.leave.bind(this))}}const DA=Pe(Pe({},Ri),{},{mouseOnly:(o=!0)=>o}),rf=new Map,Ju=new Map;function TA(o){rf.set(o.key,o.engine),Ju.set(o.key,o.resolver)}const EA={key:"drag",engine:aA,resolver:zA},SA={key:"hover",engine:CA,resolver:DA},GA={key:"move",engine:bA,resolver:gA},OA={key:"pinch",engine:hA,resolver:pA},BA={key:"scroll",engine:jA,resolver:vA},xA={key:"wheel",engine:kA,resolver:AA};function NA(o,t){if(o==null)return{};var s={},r=Object.keys(o),u,d;for(d=0;d<r.length;d++)u=r[d],!(t.indexOf(u)>=0)&&(s[u]=o[u]);return s}function RA(o,t){if(o==null)return{};var s=NA(o,t),r,u;if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(o);for(u=0;u<d.length;u++)r=d[u],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(o,r)&&(s[r]=o[r])}return s}const MA={target(o){if(o)return()=>"current"in o?o.current:o},enabled(o=!0){return o},window(o=Un.isBrowser?window:void 0){return o},eventOptions({passive:o=!0,capture:t=!1}={}){return{passive:o,capture:t}},transform(o){return o}},_A=["target","eventOptions","window","enabled","transform"];function wl(o={},t){const s={};for(const[r,u]of Object.entries(t))switch(typeof u){case"function":s[r]=u.call(s,o[r],r,o);break;case"object":s[r]=wl(o[r],u);break;case"boolean":u&&(s[r]=o[r]);break}return s}function PA(o,t,s={}){const r=o,{target:u,eventOptions:d,window:m,enabled:y,transform:h}=r,w=RA(r,_A);if(s.shared=wl({target:u,eventOptions:d,window:m,enabled:y,transform:h},MA),t){const v=Ju.get(t);s[t]=wl(Pe({shared:s.shared},w),v)}else for(const v in w){const A=Ju.get(v);A&&(s[v]=wl(Pe({shared:s.shared},w[v]),A))}return s}class Ih{constructor(t,s){qe(this,"_listeners",new Set),this._ctrl=t,this._gestureKey=s}add(t,s,r,u,d){const m=this._listeners,y=K0(s,r),h=this._gestureKey?this._ctrl.config[this._gestureKey].eventOptions:{},w=Pe(Pe({},h),d);t.addEventListener(y,u,w);const v=()=>{t.removeEventListener(y,u,w),m.delete(v)};return m.add(v),v}clean(){this._listeners.forEach(t=>t()),this._listeners.clear()}}class HA{constructor(){qe(this,"_timeouts",new Map)}add(t,s,r=140,...u){this.remove(t),this._timeouts.set(t,window.setTimeout(s,r,...u))}remove(t){const s=this._timeouts.get(t);s&&window.clearTimeout(s)}clean(){this._timeouts.forEach(t=>{window.clearTimeout(t)}),this._timeouts.clear()}}class JA{constructor(t){qe(this,"gestures",new Set),qe(this,"_targetEventStore",new Ih(this)),qe(this,"gestureEventStores",{}),qe(this,"gestureTimeoutStores",{}),qe(this,"handlers",{}),qe(this,"config",{}),qe(this,"pointerIds",new Set),qe(this,"touchIds",new Set),qe(this,"state",{shared:{shiftKey:!1,metaKey:!1,ctrlKey:!1,altKey:!1}}),FA(this,t)}setEventIds(t){if(Bl(t))return this.touchIds=new Set(Y0(t)),this.touchIds;if("pointerId"in t)return t.type==="pointerup"||t.type==="pointercancel"?this.pointerIds.delete(t.pointerId):t.type==="pointerdown"&&this.pointerIds.add(t.pointerId),this.pointerIds}applyHandlers(t,s){this.handlers=t,this.nativeHandlers=s}applyConfig(t,s){this.config=PA(t,s,this.config)}clean(){this._targetEventStore.clean();for(const t of this.gestures)this.gestureEventStores[t].clean(),this.gestureTimeoutStores[t].clean()}effect(){return this.config.shared.target&&this.bind(),()=>this._targetEventStore.clean()}bind(...t){const s=this.config.shared,r={};let u;if(!(s.target&&(u=s.target(),!u))){if(s.enabled){for(const m of this.gestures){const y=this.config[m],h=ww(r,y.eventOptions,!!u);if(y.enabled){const w=rf.get(m);new w(this,t,m).bind(h)}}const d=ww(r,s.eventOptions,!!u);for(const m in this.nativeHandlers)d(m,"",y=>this.nativeHandlers[m](Pe(Pe({},this.state.shared),{},{event:y,args:t})),void 0,!0)}for(const d in r)r[d]=Q0(...r[d]);if(!u)return r;for(const d in r){const{device:m,capture:y,passive:h}=L0(d);this._targetEventStore.add(u,m,"",r[d],{capture:y,passive:h})}}}}function Ct(o,t){o.gestures.add(t),o.gestureEventStores[t]=new Ih(o,t),o.gestureTimeoutStores[t]=new HA}function FA(o,t){t.drag&&Ct(o,"drag"),t.wheel&&Ct(o,"wheel"),t.scroll&&Ct(o,"scroll"),t.move&&Ct(o,"move"),t.pinch&&Ct(o,"pinch"),t.hover&&Ct(o,"hover")}const ww=(o,t,s)=>(r,u,d,m={},y=!1)=>{var h,w;const v=(h=m.capture)!==null&&h!==void 0?h:t.capture,A=(w=m.passive)!==null&&w!==void 0?w:t.passive;let G=y?r:F0(r,u,v);s&&A&&(G+="Passive"),o[G]=o[G]||[],o[G].push(d)},UA=/^on(Drag|Wheel|Scroll|Move|Pinch|Hover)/;function LA(o){const t={},s={},r=new Set;for(let u in o)UA.test(u)?(r.add(RegExp.lastMatch),s[u]=o[u]):t[u]=o[u];return[s,t,r]}function Dt(o,t,s,r,u,d){if(!o.has(s)||!rf.has(r))return;const m=s+"Start",y=s+"End",h=w=>{let v;return w.first&&m in t&&t[m](w),s in t&&(v=t[s](w)),w.last&&y in t&&t[y](w),v};u[r]=h,d[r]=d[r]||{}}function KA(o,t){const[s,r,u]=LA(o),d={};return Dt(u,s,"onDrag","drag",d,t),Dt(u,s,"onWheel","wheel",d,t),Dt(u,s,"onScroll","scroll",d,t),Dt(u,s,"onPinch","pinch",d,t),Dt(u,s,"onMove","move",d,t),Dt(u,s,"onHover","hover",d,t),{handlers:d,config:t,nativeHandlers:r}}function ZA(o,t={},s,r){const u=Ln.useMemo(()=>new JA(o),[]);if(u.applyHandlers(o,r),u.applyConfig(t,s),Ln.useEffect(u.effect.bind(u)),Ln.useEffect(()=>u.clean.bind(u),[]),t.target===void 0)return u.bind.bind(u)}function WA(o){return o.forEach(TA),function(s,r){const{handlers:u,nativeHandlers:d,config:m}=KA(s,r||{});return ZA(u,m,void 0,d)}}function YA(o,t){return WA([EA,OA,BA,xA,GA,SA])(o,t||{})}const qA=({parsedSongs:o,minZoom:t,maxZoom:s,defaultZoom:r,gesturesTarget:u})=>{const[d,m]=Ei("chosenSong",1),[y,h]=Ei("starredSongs",[]),[w,v]=Ei("onlyStarred",!1),[A,G]=Ei("selectedSong",null),[_,L]=Ei("zoomLevel",r),[U,ee]=N.useState(null),[q,W]=N.useState(null),I=y.length;N.useEffect(()=>{w&&(y.length?y.find($=>$===d)||m(y[0]):v(!1))},[w,v,d,m,y]);const ue=$=>{const _e=d===$,je=y.indexOf($),He=je+1,E=!!He,P=A===$;return{chosen:_e,starredNumber:He,starred:E,toggleStarred:()=>{G(E?J=>J===$?y.length<=1?null:y.length>je+1?y[je+1]:y[je-1]:J:$),h(J=>E?J.filter(re=>re!==$):[...J,$])},selected:P,toggleSelected:()=>G(P?null:$),moveUp:je<1?void 0:()=>h(J=>{const re=J.filter(me=>me!==$);return re.splice(je-1,0,$),re}),moveDown:je>y.length-2?void 0:()=>h(J=>{const re=J.filter(me=>me!==$);return re.splice(je+1,0,$),re})}},Y=$=>({...$,...ue($.number)}),Q=(w?y.flatMap($=>{const _e=o.find(je=>je.number===$);return _e?[_e]:[]}):o).map(Y),Oe=$=>{const je=Q.findIndex(E=>E.chosen)-$,He=je>=Q.length?0:je<0?Q.length-1:je;m(Q[He].number)},Qe=$=>{ee($),W(_)},dn=$=>{if(U===null||q===null)return;const _e=$/U,je=Math.floor(Math.log10(_e)*10),He=Math.min(Math.max(t,q+je),s);L(He)};return YA({onDrag:({swipe:[$]})=>{$!==0&&Oe($)},onPinch:({first:$,da:[_e]})=>{$&&Qe(_e),dn(_e)}},{target:u}),{songs:Q,setChosenSong:m,starredCount:I,onlyStarred:w,toggleOnlyStarred:()=>v($=>!$),zoomLevel:_}},XA=({parsedSongbook:o})=>{const t=N.useRef(null),{songs:s,setChosenSong:r,starredCount:u,onlyStarred:d,toggleOnlyStarred:m,zoomLevel:y}=qA({parsedSongs:o.songs,minZoom:1,maxZoom:20,defaultZoom:5,gesturesTarget:t}),[h,w]=Ei("menuShown",!1),[v,A]=Ei("chordsShown",!0),G=()=>w(!0),_=()=>w(!1),L=()=>A(!0),U=()=>A(!1),ee=W=>{r(W),_()},q=s.find(W=>W.chosen);return R.jsxs(R.Fragment,{children:[!h&&R.jsx(B0,{onlyStarred:d,chordsShown:v,onClickMenu:G,onClickGuitar:v?U:L}),R.jsx("div",{ref:t,className:`container-lg pt-1 min-vh-100 bg-white songbook zoom-level-${y}`,children:!!q&&R.jsx(Ag,{song:q,starredCount:u,chordsShown:v})}),R.jsx(O0,{songs:s,checksum:o.checksum,chooseSong:ee,starredCount:u,onlyStarred:d,toggleOnlyStarred:m,show:h,onClose:_})]})},VA=`{title:  Panie, zmiłuj się}
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

2. A komuż takiemu,           [F] [B]
Dzieciątku małemu             [C] [d]
Cóż to za Dzieciątko          [F] [C]
Musi być paniątko             [B] [F]
Hej, kolęda, kolęda           [B] [C] [F]

3. Pasterze na lirze,         [F] [B]
na skrzypeczkach grali        [C] [d]
W tę stronę do szopy          [F] [C]
Prędko przybiegali            [B] [F]
Hej, kolęda, kolęda           [B] [C] [F]

4. To Jezus maluśki,          [F] [B]
to Dzieciątko krasne          [C] [d]
Cichutkie, malutkie           [F] [C]
Jak słoneczko jasne           [B] [F]
Hej, kolęda, kolęda           [B] [C] [F]

Solo skrzypce x2              [F]
                              [d] [g] [A7] [d]

5. Skrzypi wóz, wielki mróz,  [F] [B]
wielki mróz na ziemi          [C] [d]
Trzej królowie jadą           [F] [C]
Złoto, mirrę kładą            [B] [F]
Hej, kolęda, kolęda           [B] [C] [F]

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

1. Mędrcy świata Monarchowie,     [A] [D] [A]
Gdzie śpiesznie dążycie?          [E7] [A]
Powiedzcież nam, Trzej Królowie,  [A] [D] [E]
Chcecie widzieć Dziecię?          [A] [E] [E7] [A]
Ono w żłobie, nie ma tronu,       [E] [A]
I berła nie dzierży,              [h] [A] [E]
A proroctwo Jego zgonu,           [A] [D] [E]
Już się w świecie szerzy.         [A] [E] [E7] [A]

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
`,kl={DIRECTIVE:"DIRECTIVE",BODY_LINE:"BODY_LINE"},QA=o=>["title","number"].includes(o),IA=o=>{const t=/{(.*):(.*)}/,s=o.match(t);if(s){const y=s[1].trim(),h=s[2].trim();return QA(y)?{type:kl.DIRECTIVE,directive:y,value:y==="number"?parseInt(h):h}:null}const r=/\[.*?]/g,u=o.replace(r,"").trim(),d=(o.match(r)||[]).map(y=>y.replace(/[[\]]/g,"")),m={lyrics:u,chords:d};return{type:kl.BODY_LINE,body:m}},$A=o=>{const t=o.split(`
`).map(IA).filter(y=>y!==null),s=t.filter(y=>y.type===kl.BODY_LINE).map(y=>y.body),r=s.findIndex(y=>y.lyrics||y.chords.length),u=s.length-s.slice().reverse().findIndex(y=>y.lyrics||y.chords.length),d=s.slice(r,u),m=t.filter(y=>y.type===kl.DIRECTIVE).reduce((y,h)=>({...y,[h.directive]:h.value}),{});return m.title===void 0||m.number===void 0?null:{title:m.title,number:m.number,latinTitle:Lh(m.title||""),body:d}},eC=o=>{let t=0;for(let s=0;s<o.length;s++)t=(t<<5)-t+o.charCodeAt(s),t=t&65535;return t.toString(16).toUpperCase().padStart(4,"0")},nC=o=>({songs:o.split(/---\s*\n/).map($A).filter(s=>s!==null),checksum:eC(o)}),aC=()=>{const o=nC(VA);return R.jsx(XA,{parsedSongbook:o})};var yu={exports:{}},Bo={},wu={exports:{}},hu={};var hw;function iC(){return hw||(hw=1,(function(o){function t(E,P){var J=E.length;E.push(P);e:for(;0<J;){var re=J-1>>>1,me=E[re];if(0<u(me,P))E[re]=P,E[J]=me,J=re;else break e}}function s(E){return E.length===0?null:E[0]}function r(E){if(E.length===0)return null;var P=E[0],J=E.pop();if(J!==P){E[0]=J;e:for(var re=0,me=E.length,b=me>>>1;re<b;){var B=2*(re+1)-1,H=E[B],F=B+1,ae=E[F];if(0>u(H,J))F<me&&0>u(ae,H)?(E[re]=ae,E[F]=J,re=F):(E[re]=H,E[B]=J,re=B);else if(F<me&&0>u(ae,J))E[re]=ae,E[F]=J,re=F;else break e}}return P}function u(E,P){var J=E.sortIndex-P.sortIndex;return J!==0?J:E.id-P.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var d=performance;o.unstable_now=function(){return d.now()}}else{var m=Date,y=m.now();o.unstable_now=function(){return m.now()-y}}var h=[],w=[],v=1,A=null,G=3,_=!1,L=!1,U=!1,ee=!1,q=typeof setTimeout=="function"?setTimeout:null,W=typeof clearTimeout=="function"?clearTimeout:null,I=typeof setImmediate<"u"?setImmediate:null;function ue(E){for(var P=s(w);P!==null;){if(P.callback===null)r(w);else if(P.startTime<=E)r(w),P.sortIndex=P.expirationTime,t(h,P);else break;P=s(w)}}function Y(E){if(U=!1,ue(E),!L)if(s(h)!==null)L=!0,ce||(ce=!0,$());else{var P=s(w);P!==null&&He(Y,P.startTime-E)}}var ce=!1,Q=-1,Oe=5,Qe=-1;function dn(){return ee?!0:!(o.unstable_now()-Qe<Oe)}function rn(){if(ee=!1,ce){var E=o.unstable_now();Qe=E;var P=!0;try{e:{L=!1,U&&(U=!1,W(Q),Q=-1),_=!0;var J=G;try{n:{for(ue(E),A=s(h);A!==null&&!(A.expirationTime>E&&dn());){var re=A.callback;if(typeof re=="function"){A.callback=null,G=A.priorityLevel;var me=re(A.expirationTime<=E);if(E=o.unstable_now(),typeof me=="function"){A.callback=me,ue(E),P=!0;break n}A===s(h)&&r(h),ue(E)}else r(h);A=s(h)}if(A!==null)P=!0;else{var b=s(w);b!==null&&He(Y,b.startTime-E),P=!1}}break e}finally{A=null,G=J,_=!1}P=void 0}}finally{P?$():ce=!1}}}var $;if(typeof I=="function")$=function(){I(rn)};else if(typeof MessageChannel<"u"){var _e=new MessageChannel,je=_e.port2;_e.port1.onmessage=rn,$=function(){je.postMessage(null)}}else $=function(){q(rn,0)};function He(E,P){Q=q(function(){E(o.unstable_now())},P)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(E){E.callback=null},o.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Oe=0<E?Math.floor(1e3/E):5},o.unstable_getCurrentPriorityLevel=function(){return G},o.unstable_next=function(E){switch(G){case 1:case 2:case 3:var P=3;break;default:P=G}var J=G;G=P;try{return E()}finally{G=J}},o.unstable_requestPaint=function(){ee=!0},o.unstable_runWithPriority=function(E,P){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var J=G;G=E;try{return P()}finally{G=J}},o.unstable_scheduleCallback=function(E,P,J){var re=o.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?re+J:re):J=re,E){case 1:var me=-1;break;case 2:me=250;break;case 5:me=1073741823;break;case 4:me=1e4;break;default:me=5e3}return me=J+me,E={id:v++,callback:P,priorityLevel:E,startTime:J,expirationTime:me,sortIndex:-1},J>re?(E.sortIndex=J,t(w,E),s(h)===null&&E===s(w)&&(U?(W(Q),Q=-1):U=!0,He(Y,J-re))):(E.sortIndex=me,t(h,E),L||_||(L=!0,ce||(ce=!0,$()))),E},o.unstable_shouldYield=dn,o.unstable_wrapCallback=function(E){var P=G;return function(){var J=G;G=P;try{return E.apply(this,arguments)}finally{G=J}}}})(hu)),hu}var pw;function tC(){return pw||(pw=1,wu.exports=iC()),wu.exports}var bw;function oC(){if(bw)return Bo;bw=1;var o=tC(),t=Fu(),s=jw();function r(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function d(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function m(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function y(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function h(e){if(d(e)!==e)throw Error(r(188))}function w(e){var n=e.alternate;if(!n){if(n=d(e),n===null)throw Error(r(188));return n!==e?null:e}for(var a=e,i=n;;){var l=a.return;if(l===null)break;var c=l.alternate;if(c===null){if(i=l.return,i!==null){a=i;continue}break}if(l.child===c.child){for(c=l.child;c;){if(c===a)return h(l),e;if(c===i)return h(l),n;c=c.sibling}throw Error(r(188))}if(a.return!==i.return)a=l,i=c;else{for(var f=!1,z=l.child;z;){if(z===a){f=!0,a=l,i=c;break}if(z===i){f=!0,i=l,a=c;break}z=z.sibling}if(!f){for(z=c.child;z;){if(z===a){f=!0,a=c,i=l;break}if(z===i){f=!0,i=c,a=l;break}z=z.sibling}if(!f)throw Error(r(189))}}if(a.alternate!==i)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?e:n}function v(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=v(e),n!==null)return n;e=e.sibling}return null}var A=Object.assign,G=Symbol.for("react.element"),_=Symbol.for("react.transitional.element"),L=Symbol.for("react.portal"),U=Symbol.for("react.fragment"),ee=Symbol.for("react.strict_mode"),q=Symbol.for("react.profiler"),W=Symbol.for("react.consumer"),I=Symbol.for("react.context"),ue=Symbol.for("react.forward_ref"),Y=Symbol.for("react.suspense"),ce=Symbol.for("react.suspense_list"),Q=Symbol.for("react.memo"),Oe=Symbol.for("react.lazy"),Qe=Symbol.for("react.activity"),dn=Symbol.for("react.memo_cache_sentinel"),rn=Symbol.iterator;function $(e){return e===null||typeof e!="object"?null:(e=rn&&e[rn]||e["@@iterator"],typeof e=="function"?e:null)}var _e=Symbol.for("react.client.reference");function je(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===_e?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case U:return"Fragment";case q:return"Profiler";case ee:return"StrictMode";case Y:return"Suspense";case ce:return"SuspenseList";case Qe:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case L:return"Portal";case I:return e.displayName||"Context";case W:return(e._context.displayName||"Context")+".Consumer";case ue:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Q:return n=e.displayName||null,n!==null?n:je(e.type)||"Memo";case Oe:n=e._payload,e=e._init;try{return je(e(n))}catch{}}return null}var He=Array.isArray,E=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,P=s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,J={pending:!1,data:null,method:null,action:null},re=[],me=-1;function b(e){return{current:e}}function B(e){0>me||(e.current=re[me],re[me]=null,me--)}function H(e,n){me++,re[me]=e.current,e.current=n}var F=b(null),ae=b(null),oe=b(null),we=b(null);function Xe(e,n){switch(H(oe,n),H(ae,e),H(F,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?Sz(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=Sz(n),e=Gz(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}B(F),H(F,e)}function Se(){B(F),B(ae),B(oe)}function On(e){e.memoizedState!==null&&H(we,e);var n=F.current,a=Gz(n,e.type);n!==a&&(H(ae,e),H(F,a))}function na(e){ae.current===e&&(B(F),B(ae)),we.current===e&&(B(we),To._currentValue=J)}var Xn,Ea;function mn(e){if(Xn===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Xn=n&&n[1]||"",Ea=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Xn+e+Ea}var Ce=!1;function Sa(e,n){if(!e||Ce)return"";Ce=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(n){var x=function(){throw Error()};if(Object.defineProperty(x.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(x,[])}catch(T){var D=T}Reflect.construct(e,[],x)}else{try{x.call()}catch(T){D=T}e.call(x.prototype)}}else{try{throw Error()}catch(T){D=T}(x=e())&&typeof x.catch=="function"&&x.catch(function(){})}}catch(T){if(T&&D&&typeof T.stack=="string")return[T.stack,D.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var c=i.DetermineComponentFrameRoot(),f=c[0],z=c[1];if(f&&z){var p=f.split(`
`),C=z.split(`
`);for(l=i=0;i<p.length&&!p[i].includes("DetermineComponentFrameRoot");)i++;for(;l<C.length&&!C[l].includes("DetermineComponentFrameRoot");)l++;if(i===p.length||l===C.length)for(i=p.length-1,l=C.length-1;1<=i&&0<=l&&p[i]!==C[l];)l--;for(;1<=i&&0<=l;i--,l--)if(p[i]!==C[l]){if(i!==1||l!==1)do if(i--,l--,0>l||p[i]!==C[l]){var S=`
`+p[i].replace(" at new "," at ");return e.displayName&&S.includes("<anonymous>")&&(S=S.replace("<anonymous>",e.displayName)),S}while(1<=i&&0<=l);break}}}finally{Ce=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?mn(a):""}function oi(e,n){switch(e.tag){case 26:case 27:case 5:return mn(e.type);case 16:return mn("Lazy");case 13:return e.child!==n&&n!==null?mn("Suspense Fallback"):mn("Suspense");case 19:return mn("SuspenseList");case 0:case 15:return Sa(e.type,!1);case 11:return Sa(e.type.render,!1);case 1:return Sa(e.type,!0);case 31:return mn("Activity");default:return""}}function Zo(e){try{var n="",a=null;do n+=oi(e,a),a=e,e=e.return;while(e);return n}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var Rt=Object.prototype.hasOwnProperty,Mt=o.unstable_scheduleCallback,_t=o.unstable_cancelCallback,xl=o.unstable_shouldYield,Nl=o.unstable_requestPaint,cn=o.unstable_now,Rl=o.unstable_getCurrentPriorityLevel,pe=o.unstable_ImmediatePriority,aa=o.unstable_UserBlockingPriority,si=o.unstable_NormalPriority,$h=o.unstable_LowPriority,cf=o.unstable_IdlePriority,ep=o.log,np=o.unstable_setDisableYieldValue,Pt=null,jn=null;function Ga(e){if(typeof ep=="function"&&np(e),jn&&typeof jn.setStrictMode=="function")try{jn.setStrictMode(Pt,e)}catch{}}var vn=Math.clz32?Math.clz32:tp,ap=Math.log,ip=Math.LN2;function tp(e){return e>>>=0,e===0?32:31-(ap(e)/ip|0)|0}var Wo=256,Yo=262144,qo=4194304;function li(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Xo(e,n,a){var i=e.pendingLanes;if(i===0)return 0;var l=0,c=e.suspendedLanes,f=e.pingedLanes;e=e.warmLanes;var z=i&134217727;return z!==0?(i=z&~c,i!==0?l=li(i):(f&=z,f!==0?l=li(f):a||(a=z&~e,a!==0&&(l=li(a))))):(z=i&~c,z!==0?l=li(z):f!==0?l=li(f):a||(a=i&~e,a!==0&&(l=li(a)))),l===0?0:n!==0&&n!==l&&(n&c)===0&&(c=l&-l,a=n&-n,c>=a||c===32&&(a&4194048)!==0)?n:l}function Ht(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function op(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function uf(){var e=qo;return qo<<=1,(qo&62914560)===0&&(qo=4194304),e}function Ml(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Jt(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function sp(e,n,a,i,l,c){var f=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var z=e.entanglements,p=e.expirationTimes,C=e.hiddenUpdates;for(a=f&~a;0<a;){var S=31-vn(a),x=1<<S;z[S]=0,p[S]=-1;var D=C[S];if(D!==null)for(C[S]=null,S=0;S<D.length;S++){var T=D[S];T!==null&&(T.lane&=-536870913)}a&=~x}i!==0&&ff(e,i,0),c!==0&&l===0&&e.tag!==0&&(e.suspendedLanes|=c&~(f&~n))}function ff(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var i=31-vn(n);e.entangledLanes|=n,e.entanglements[i]=e.entanglements[i]|1073741824|a&261930}function df(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var i=31-vn(a),l=1<<i;l&n|e[i]&n&&(e[i]|=n),a&=~l}}function mf(e,n){var a=n&-n;return a=(a&42)!==0?1:_l(a),(a&(e.suspendedLanes|n))!==0?0:a}function _l(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Pl(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function zf(){var e=P.p;return e!==0?e:(e=window.event,e===void 0?32:$z(e.type))}function yf(e,n){var a=P.p;try{return P.p=e,n()}finally{P.p=a}}var Oa=Math.random().toString(36).slice(2),nn="__reactFiber$"+Oa,zn="__reactProps$"+Oa,Mi="__reactContainer$"+Oa,Hl="__reactEvents$"+Oa,lp="__reactListeners$"+Oa,rp="__reactHandles$"+Oa,wf="__reactResources$"+Oa,Ft="__reactMarker$"+Oa;function Jl(e){delete e[nn],delete e[zn],delete e[Hl],delete e[lp],delete e[rp]}function _i(e){var n=e[nn];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Mi]||a[nn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=_z(e);e!==null;){if(a=e[nn])return a;e=_z(e)}return n}e=a,a=e.parentNode}return null}function Pi(e){if(e=e[nn]||e[Mi]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function Ut(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(r(33))}function Hi(e){var n=e[wf];return n||(n=e[wf]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Ie(e){e[Ft]=!0}var hf=new Set,pf={};function ri(e,n){Ji(e,n),Ji(e+"Capture",n)}function Ji(e,n){for(pf[e]=n,e=0;e<n.length;e++)hf.add(n[e])}var cp=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),bf={},gf={};function up(e){return Rt.call(gf,e)?!0:Rt.call(bf,e)?!1:cp.test(e)?gf[e]=!0:(bf[e]=!0,!1)}function Vo(e,n,a){if(up(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var i=n.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Qo(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function ia(e,n,a,i){if(i===null)e.removeAttribute(a);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+i)}}function Bn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function jf(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function fp(e,n,a){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var l=i.get,c=i.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return l.call(this)},set:function(f){a=""+f,c.call(this,f)}}),Object.defineProperty(e,n,{enumerable:i.enumerable}),{getValue:function(){return a},setValue:function(f){a=""+f},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Fl(e){if(!e._valueTracker){var n=jf(e)?"checked":"value";e._valueTracker=fp(e,n,""+e[n])}}function vf(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),i="";return e&&(i=jf(e)?e.checked?"true":"false":e.value),e=i,e!==a?(n.setValue(e),!0):!1}function Io(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var dp=/[\n"\\]/g;function xn(e){return e.replace(dp,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Ul(e,n,a,i,l,c,f,z){e.name="",f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"?e.type=f:e.removeAttribute("type"),n!=null?f==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+Bn(n)):e.value!==""+Bn(n)&&(e.value=""+Bn(n)):f!=="submit"&&f!=="reset"||e.removeAttribute("value"),n!=null?Ll(e,f,Bn(n)):a!=null?Ll(e,f,Bn(a)):i!=null&&e.removeAttribute("value"),l==null&&c!=null&&(e.defaultChecked=!!c),l!=null&&(e.checked=l&&typeof l!="function"&&typeof l!="symbol"),z!=null&&typeof z!="function"&&typeof z!="symbol"&&typeof z!="boolean"?e.name=""+Bn(z):e.removeAttribute("name")}function kf(e,n,a,i,l,c,f,z){if(c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(e.type=c),n!=null||a!=null){if(!(c!=="submit"&&c!=="reset"||n!=null)){Fl(e);return}a=a!=null?""+Bn(a):"",n=n!=null?""+Bn(n):a,z||n===e.value||(e.value=n),e.defaultValue=n}i=i??l,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=z?e.checked:!!i,e.defaultChecked=!!i,f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.name=f),Fl(e)}function Ll(e,n,a){n==="number"&&Io(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Fi(e,n,a,i){if(e=e.options,n){n={};for(var l=0;l<a.length;l++)n["$"+a[l]]=!0;for(a=0;a<e.length;a++)l=n.hasOwnProperty("$"+e[a].value),e[a].selected!==l&&(e[a].selected=l),l&&i&&(e[a].defaultSelected=!0)}else{for(a=""+Bn(a),n=null,l=0;l<e.length;l++){if(e[l].value===a){e[l].selected=!0,i&&(e[l].defaultSelected=!0);return}n!==null||e[l].disabled||(n=e[l])}n!==null&&(n.selected=!0)}}function Af(e,n,a){if(n!=null&&(n=""+Bn(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+Bn(a):""}function Cf(e,n,a,i){if(n==null){if(i!=null){if(a!=null)throw Error(r(92));if(He(i)){if(1<i.length)throw Error(r(93));i=i[0]}a=i}a==null&&(a=""),n=a}a=Bn(n),e.defaultValue=a,i=e.textContent,i===a&&i!==""&&i!==null&&(e.value=i),Fl(e)}function Ui(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var mp=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Df(e,n,a){var i=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?i?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":i?e.setProperty(n,a):typeof a!="number"||a===0||mp.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Tf(e,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(e=e.style,a!=null){for(var i in a)!a.hasOwnProperty(i)||n!=null&&n.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var l in n)i=n[l],n.hasOwnProperty(l)&&a[l]!==i&&Df(e,l,i)}else for(var c in n)n.hasOwnProperty(c)&&Df(e,c,n[c])}function Kl(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var zp=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),yp=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function $o(e){return yp.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function ta(){}var Zl=null;function Wl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Li=null,Ki=null;function Ef(e){var n=Pi(e);if(n&&(e=n.stateNode)){var a=e[zn]||null;e:switch(e=n.stateNode,n.type){case"input":if(Ul(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+xn(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var i=a[n];if(i!==e&&i.form===e.form){var l=i[zn]||null;if(!l)throw Error(r(90));Ul(i,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(n=0;n<a.length;n++)i=a[n],i.form===e.form&&vf(i)}break e;case"textarea":Af(e,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&Fi(e,!!a.multiple,n,!1)}}}var Yl=!1;function Sf(e,n,a){if(Yl)return e(n,a);Yl=!0;try{var i=e(n);return i}finally{if(Yl=!1,(Li!==null||Ki!==null)&&(Js(),Li&&(n=Li,e=Ki,Ki=Li=null,Ef(n),e)))for(n=0;n<e.length;n++)Ef(e[n])}}function Lt(e,n){var a=e.stateNode;if(a===null)return null;var i=a[zn]||null;if(i===null)return null;a=i[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var oa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ql=!1;if(oa)try{var Kt={};Object.defineProperty(Kt,"passive",{get:function(){ql=!0}}),window.addEventListener("test",Kt,Kt),window.removeEventListener("test",Kt,Kt)}catch{ql=!1}var Ba=null,Xl=null,es=null;function Gf(){if(es)return es;var e,n=Xl,a=n.length,i,l="value"in Ba?Ba.value:Ba.textContent,c=l.length;for(e=0;e<a&&n[e]===l[e];e++);var f=a-e;for(i=1;i<=f&&n[a-i]===l[c-i];i++);return es=l.slice(e,1<i?1-i:void 0)}function ns(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function as(){return!0}function Of(){return!1}function yn(e){function n(a,i,l,c,f){this._reactName=a,this._targetInst=l,this.type=i,this.nativeEvent=c,this.target=f,this.currentTarget=null;for(var z in e)e.hasOwnProperty(z)&&(a=e[z],this[z]=a?a(c):c[z]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?as:Of,this.isPropagationStopped=Of,this}return A(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=as)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=as)},persist:function(){},isPersistent:as}),n}var ci={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},is=yn(ci),Zt=A({},ci,{view:0,detail:0}),wp=yn(Zt),Vl,Ql,Wt,ts=A({},Zt,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:$l,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Wt&&(Wt&&e.type==="mousemove"?(Vl=e.screenX-Wt.screenX,Ql=e.screenY-Wt.screenY):Ql=Vl=0,Wt=e),Vl)},movementY:function(e){return"movementY"in e?e.movementY:Ql}}),Bf=yn(ts),hp=A({},ts,{dataTransfer:0}),pp=yn(hp),bp=A({},Zt,{relatedTarget:0}),Il=yn(bp),gp=A({},ci,{animationName:0,elapsedTime:0,pseudoElement:0}),jp=yn(gp),vp=A({},ci,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),kp=yn(vp),Ap=A({},ci,{data:0}),xf=yn(Ap),Cp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Dp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Tp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ep(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Tp[e])?!!n[e]:!1}function $l(){return Ep}var Sp=A({},Zt,{key:function(e){if(e.key){var n=Cp[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=ns(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Dp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:$l,charCode:function(e){return e.type==="keypress"?ns(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ns(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Gp=yn(Sp),Op=A({},ts,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Nf=yn(Op),Bp=A({},Zt,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:$l}),xp=yn(Bp),Np=A({},ci,{propertyName:0,elapsedTime:0,pseudoElement:0}),Rp=yn(Np),Mp=A({},ts,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),_p=yn(Mp),Pp=A({},ci,{newState:0,oldState:0}),Hp=yn(Pp),Jp=[9,13,27,32],er=oa&&"CompositionEvent"in window,Yt=null;oa&&"documentMode"in document&&(Yt=document.documentMode);var Fp=oa&&"TextEvent"in window&&!Yt,Rf=oa&&(!er||Yt&&8<Yt&&11>=Yt),Mf=" ",_f=!1;function Pf(e,n){switch(e){case"keyup":return Jp.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Hf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Zi=!1;function Up(e,n){switch(e){case"compositionend":return Hf(n);case"keypress":return n.which!==32?null:(_f=!0,Mf);case"textInput":return e=n.data,e===Mf&&_f?null:e;default:return null}}function Lp(e,n){if(Zi)return e==="compositionend"||!er&&Pf(e,n)?(e=Gf(),es=Xl=Ba=null,Zi=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Rf&&n.locale!=="ko"?null:n.data;default:return null}}var Kp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Jf(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Kp[e.type]:n==="textarea"}function Ff(e,n,a,i){Li?Ki?Ki.push(i):Ki=[i]:Li=i,n=Ys(n,"onChange"),0<n.length&&(a=new is("onChange","change",null,a,i),e.push({event:a,listeners:n}))}var qt=null,Xt=null;function Zp(e){kz(e,0)}function os(e){var n=Ut(e);if(vf(n))return e}function Uf(e,n){if(e==="change")return n}var Lf=!1;if(oa){var nr;if(oa){var ar="oninput"in document;if(!ar){var Kf=document.createElement("div");Kf.setAttribute("oninput","return;"),ar=typeof Kf.oninput=="function"}nr=ar}else nr=!1;Lf=nr&&(!document.documentMode||9<document.documentMode)}function Zf(){qt&&(qt.detachEvent("onpropertychange",Wf),Xt=qt=null)}function Wf(e){if(e.propertyName==="value"&&os(Xt)){var n=[];Ff(n,Xt,e,Wl(e)),Sf(Zp,n)}}function Wp(e,n,a){e==="focusin"?(Zf(),qt=n,Xt=a,qt.attachEvent("onpropertychange",Wf)):e==="focusout"&&Zf()}function Yp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return os(Xt)}function qp(e,n){if(e==="click")return os(n)}function Xp(e,n){if(e==="input"||e==="change")return os(n)}function Vp(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var kn=typeof Object.is=="function"?Object.is:Vp;function Vt(e,n){if(kn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),i=Object.keys(n);if(a.length!==i.length)return!1;for(i=0;i<a.length;i++){var l=a[i];if(!Rt.call(n,l)||!kn(e[l],n[l]))return!1}return!0}function Yf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function qf(e,n){var a=Yf(e);e=0;for(var i;a;){if(a.nodeType===3){if(i=e+a.textContent.length,e<=n&&i>=n)return{node:a,offset:n-e};e=i}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Yf(a)}}function Xf(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Xf(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Vf(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Io(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=Io(e.document)}return n}function ir(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var Qp=oa&&"documentMode"in document&&11>=document.documentMode,Wi=null,tr=null,Qt=null,or=!1;function Qf(e,n,a){var i=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;or||Wi==null||Wi!==Io(i)||(i=Wi,"selectionStart"in i&&ir(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Qt&&Vt(Qt,i)||(Qt=i,i=Ys(tr,"onSelect"),0<i.length&&(n=new is("onSelect","select",null,n,a),e.push({event:n,listeners:i}),n.target=Wi)))}function ui(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Yi={animationend:ui("Animation","AnimationEnd"),animationiteration:ui("Animation","AnimationIteration"),animationstart:ui("Animation","AnimationStart"),transitionrun:ui("Transition","TransitionRun"),transitionstart:ui("Transition","TransitionStart"),transitioncancel:ui("Transition","TransitionCancel"),transitionend:ui("Transition","TransitionEnd")},sr={},If={};oa&&(If=document.createElement("div").style,"AnimationEvent"in window||(delete Yi.animationend.animation,delete Yi.animationiteration.animation,delete Yi.animationstart.animation),"TransitionEvent"in window||delete Yi.transitionend.transition);function fi(e){if(sr[e])return sr[e];if(!Yi[e])return e;var n=Yi[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in If)return sr[e]=n[a];return e}var $f=fi("animationend"),ed=fi("animationiteration"),nd=fi("animationstart"),Ip=fi("transitionrun"),$p=fi("transitionstart"),eb=fi("transitioncancel"),ad=fi("transitionend"),id=new Map,lr="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");lr.push("scrollEnd");function Kn(e,n){id.set(e,n),ri(n,[e])}var ss=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Nn=[],qi=0,rr=0;function ls(){for(var e=qi,n=rr=qi=0;n<e;){var a=Nn[n];Nn[n++]=null;var i=Nn[n];Nn[n++]=null;var l=Nn[n];Nn[n++]=null;var c=Nn[n];if(Nn[n++]=null,i!==null&&l!==null){var f=i.pending;f===null?l.next=l:(l.next=f.next,f.next=l),i.pending=l}c!==0&&td(a,l,c)}}function rs(e,n,a,i){Nn[qi++]=e,Nn[qi++]=n,Nn[qi++]=a,Nn[qi++]=i,rr|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function cr(e,n,a,i){return rs(e,n,a,i),cs(e)}function di(e,n){return rs(e,null,null,n),cs(e)}function td(e,n,a){e.lanes|=a;var i=e.alternate;i!==null&&(i.lanes|=a);for(var l=!1,c=e.return;c!==null;)c.childLanes|=a,i=c.alternate,i!==null&&(i.childLanes|=a),c.tag===22&&(e=c.stateNode,e===null||e._visibility&1||(l=!0)),e=c,c=c.return;return e.tag===3?(c=e.stateNode,l&&n!==null&&(l=31-vn(a),e=c.hiddenUpdates,i=e[l],i===null?e[l]=[n]:i.push(n),n.lane=a|536870912),c):null}function cs(e){if(50<go)throw go=0,pc=null,Error(r(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Xi={};function nb(e,n,a,i){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function An(e,n,a,i){return new nb(e,n,a,i)}function ur(e){return e=e.prototype,!(!e||!e.isReactComponent)}function sa(e,n){var a=e.alternate;return a===null?(a=An(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function od(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function us(e,n,a,i,l,c){var f=0;if(i=e,typeof e=="function")ur(e)&&(f=1);else if(typeof e=="string")f=sg(e,a,F.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Qe:return e=An(31,a,n,l),e.elementType=Qe,e.lanes=c,e;case U:return mi(a.children,l,c,n);case ee:f=8,l|=24;break;case q:return e=An(12,a,n,l|2),e.elementType=q,e.lanes=c,e;case Y:return e=An(13,a,n,l),e.elementType=Y,e.lanes=c,e;case ce:return e=An(19,a,n,l),e.elementType=ce,e.lanes=c,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case I:f=10;break e;case W:f=9;break e;case ue:f=11;break e;case Q:f=14;break e;case Oe:f=16,i=null;break e}f=29,a=Error(r(130,e===null?"null":typeof e,"")),i=null}return n=An(f,a,n,l),n.elementType=e,n.type=i,n.lanes=c,n}function mi(e,n,a,i){return e=An(7,e,i,n),e.lanes=a,e}function fr(e,n,a){return e=An(6,e,null,n),e.lanes=a,e}function sd(e){var n=An(18,null,null,0);return n.stateNode=e,n}function dr(e,n,a){return n=An(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var ld=new WeakMap;function Rn(e,n){if(typeof e=="object"&&e!==null){var a=ld.get(e);return a!==void 0?a:(n={value:e,source:n,stack:Zo(n)},ld.set(e,n),n)}return{value:e,source:n,stack:Zo(n)}}var Vi=[],Qi=0,fs=null,It=0,Mn=[],_n=0,xa=null,Vn=1,Qn="";function la(e,n){Vi[Qi++]=It,Vi[Qi++]=fs,fs=e,It=n}function rd(e,n,a){Mn[_n++]=Vn,Mn[_n++]=Qn,Mn[_n++]=xa,xa=e;var i=Vn;e=Qn;var l=32-vn(i)-1;i&=~(1<<l),a+=1;var c=32-vn(n)+l;if(30<c){var f=l-l%5;c=(i&(1<<f)-1).toString(32),i>>=f,l-=f,Vn=1<<32-vn(n)+l|a<<l|i,Qn=c+e}else Vn=1<<c|a<<l|i,Qn=e}function mr(e){e.return!==null&&(la(e,1),rd(e,1,0))}function zr(e){for(;e===fs;)fs=Vi[--Qi],Vi[Qi]=null,It=Vi[--Qi],Vi[Qi]=null;for(;e===xa;)xa=Mn[--_n],Mn[_n]=null,Qn=Mn[--_n],Mn[_n]=null,Vn=Mn[--_n],Mn[_n]=null}function cd(e,n){Mn[_n++]=Vn,Mn[_n++]=Qn,Mn[_n++]=xa,Vn=n.id,Qn=n.overflow,xa=e}var an=null,Be=null,he=!1,Na=null,Pn=!1,yr=Error(r(519));function Ra(e){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw $t(Rn(n,e)),yr}function ud(e){var n=e.stateNode,a=e.type,i=e.memoizedProps;switch(n[nn]=e,n[zn]=i,a){case"dialog":de("cancel",n),de("close",n);break;case"iframe":case"object":case"embed":de("load",n);break;case"video":case"audio":for(a=0;a<vo.length;a++)de(vo[a],n);break;case"source":de("error",n);break;case"img":case"image":case"link":de("error",n),de("load",n);break;case"details":de("toggle",n);break;case"input":de("invalid",n),kf(n,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":de("invalid",n);break;case"textarea":de("invalid",n),Cf(n,i.value,i.defaultValue,i.children)}a=i.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||i.suppressHydrationWarning===!0||Tz(n.textContent,a)?(i.popover!=null&&(de("beforetoggle",n),de("toggle",n)),i.onScroll!=null&&de("scroll",n),i.onScrollEnd!=null&&de("scrollend",n),i.onClick!=null&&(n.onclick=ta),n=!0):n=!1,n||Ra(e,!0)}function fd(e){for(an=e.return;an;)switch(an.tag){case 5:case 31:case 13:Pn=!1;return;case 27:case 3:Pn=!0;return;default:an=an.return}}function Ii(e){if(e!==an)return!1;if(!he)return fd(e),he=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||xc(e.type,e.memoizedProps)),a=!a),a&&Be&&Ra(e),fd(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));Be=Mz(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));Be=Mz(e)}else n===27?(n=Be,Xa(e.type)?(e=Pc,Pc=null,Be=e):Be=n):Be=an?Jn(e.stateNode.nextSibling):null;return!0}function zi(){Be=an=null,he=!1}function wr(){var e=Na;return e!==null&&(bn===null?bn=e:bn.push.apply(bn,e),Na=null),e}function $t(e){Na===null?Na=[e]:Na.push(e)}var hr=b(null),yi=null,ra=null;function Ma(e,n,a){H(hr,n._currentValue),n._currentValue=a}function ca(e){e._currentValue=hr.current,B(hr)}function pr(e,n,a){for(;e!==null;){var i=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,i!==null&&(i.childLanes|=n)):i!==null&&(i.childLanes&n)!==n&&(i.childLanes|=n),e===a)break;e=e.return}}function br(e,n,a,i){var l=e.child;for(l!==null&&(l.return=e);l!==null;){var c=l.dependencies;if(c!==null){var f=l.child;c=c.firstContext;e:for(;c!==null;){var z=c;c=l;for(var p=0;p<n.length;p++)if(z.context===n[p]){c.lanes|=a,z=c.alternate,z!==null&&(z.lanes|=a),pr(c.return,a,e),i||(f=null);break e}c=z.next}}else if(l.tag===18){if(f=l.return,f===null)throw Error(r(341));f.lanes|=a,c=f.alternate,c!==null&&(c.lanes|=a),pr(f,a,e),f=null}else f=l.child;if(f!==null)f.return=l;else for(f=l;f!==null;){if(f===e){f=null;break}if(l=f.sibling,l!==null){l.return=f.return,f=l;break}f=f.return}l=f}}function $i(e,n,a,i){e=null;for(var l=n,c=!1;l!==null;){if(!c){if((l.flags&524288)!==0)c=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var f=l.alternate;if(f===null)throw Error(r(387));if(f=f.memoizedProps,f!==null){var z=l.type;kn(l.pendingProps.value,f.value)||(e!==null?e.push(z):e=[z])}}else if(l===we.current){if(f=l.alternate,f===null)throw Error(r(387));f.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(e!==null?e.push(To):e=[To])}l=l.return}e!==null&&br(n,e,a,i),n.flags|=262144}function ds(e){for(e=e.firstContext;e!==null;){if(!kn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function wi(e){yi=e,ra=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function tn(e){return dd(yi,e)}function ms(e,n){return yi===null&&wi(e),dd(e,n)}function dd(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ra===null){if(e===null)throw Error(r(308));ra=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else ra=ra.next=n;return a}var ab=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,i){e.push(i)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},ib=o.unstable_scheduleCallback,tb=o.unstable_NormalPriority,Ke={$$typeof:I,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function gr(){return{controller:new ab,data:new Map,refCount:0}}function eo(e){e.refCount--,e.refCount===0&&ib(tb,function(){e.controller.abort()})}var no=null,jr=0,et=0,nt=null;function ob(e,n){if(no===null){var a=no=[];jr=0,et=Ac(),nt={status:"pending",value:void 0,then:function(i){a.push(i)}}}return jr++,n.then(md,md),n}function md(){if(--jr===0&&no!==null){nt!==null&&(nt.status="fulfilled");var e=no;no=null,et=0,nt=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function sb(e,n){var a=[],i={status:"pending",value:null,reason:null,then:function(l){a.push(l)}};return e.then(function(){i.status="fulfilled",i.value=n;for(var l=0;l<a.length;l++)(0,a[l])(n)},function(l){for(i.status="rejected",i.reason=l,l=0;l<a.length;l++)(0,a[l])(void 0)}),i}var zd=E.S;E.S=function(e,n){Qm=cn(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&ob(e,n),zd!==null&&zd(e,n)};var hi=b(null);function vr(){var e=hi.current;return e!==null?e:Ge.pooledCache}function zs(e,n){n===null?H(hi,hi.current):H(hi,n.pool)}function yd(){var e=vr();return e===null?null:{parent:Ke._currentValue,pool:e}}var at=Error(r(460)),kr=Error(r(474)),ys=Error(r(542)),ws={then:function(){}};function wd(e){return e=e.status,e==="fulfilled"||e==="rejected"}function hd(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(ta,ta),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,bd(e),e;default:if(typeof n.status=="string")n.then(ta,ta);else{if(e=Ge,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=n,e.status="pending",e.then(function(i){if(n.status==="pending"){var l=n;l.status="fulfilled",l.value=i}},function(i){if(n.status==="pending"){var l=n;l.status="rejected",l.reason=i}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,bd(e),e}throw bi=n,at}}function pi(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(bi=a,at):a}}var bi=null;function pd(){if(bi===null)throw Error(r(459));var e=bi;return bi=null,e}function bd(e){if(e===at||e===ys)throw Error(r(483))}var it=null,ao=0;function hs(e){var n=ao;return ao+=1,it===null&&(it=[]),hd(it,e,n)}function io(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function ps(e,n){throw n.$$typeof===G?Error(r(525)):(e=Object.prototype.toString.call(n),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function gd(e){function n(j,g){if(e){var k=j.deletions;k===null?(j.deletions=[g],j.flags|=16):k.push(g)}}function a(j,g){if(!e)return null;for(;g!==null;)n(j,g),g=g.sibling;return null}function i(j){for(var g=new Map;j!==null;)j.key!==null?g.set(j.key,j):g.set(j.index,j),j=j.sibling;return g}function l(j,g){return j=sa(j,g),j.index=0,j.sibling=null,j}function c(j,g,k){return j.index=k,e?(k=j.alternate,k!==null?(k=k.index,k<g?(j.flags|=67108866,g):k):(j.flags|=67108866,g)):(j.flags|=1048576,g)}function f(j){return e&&j.alternate===null&&(j.flags|=67108866),j}function z(j,g,k,O){return g===null||g.tag!==6?(g=fr(k,j.mode,O),g.return=j,g):(g=l(g,k),g.return=j,g)}function p(j,g,k,O){var X=k.type;return X===U?S(j,g,k.props.children,O,k.key):g!==null&&(g.elementType===X||typeof X=="object"&&X!==null&&X.$$typeof===Oe&&pi(X)===g.type)?(g=l(g,k.props),io(g,k),g.return=j,g):(g=us(k.type,k.key,k.props,null,j.mode,O),io(g,k),g.return=j,g)}function C(j,g,k,O){return g===null||g.tag!==4||g.stateNode.containerInfo!==k.containerInfo||g.stateNode.implementation!==k.implementation?(g=dr(k,j.mode,O),g.return=j,g):(g=l(g,k.children||[]),g.return=j,g)}function S(j,g,k,O,X){return g===null||g.tag!==7?(g=mi(k,j.mode,O,X),g.return=j,g):(g=l(g,k),g.return=j,g)}function x(j,g,k){if(typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint")return g=fr(""+g,j.mode,k),g.return=j,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case _:return k=us(g.type,g.key,g.props,null,j.mode,k),io(k,g),k.return=j,k;case L:return g=dr(g,j.mode,k),g.return=j,g;case Oe:return g=pi(g),x(j,g,k)}if(He(g)||$(g))return g=mi(g,j.mode,k,null),g.return=j,g;if(typeof g.then=="function")return x(j,hs(g),k);if(g.$$typeof===I)return x(j,ms(j,g),k);ps(j,g)}return null}function D(j,g,k,O){var X=g!==null?g.key:null;if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return X!==null?null:z(j,g,""+k,O);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case _:return k.key===X?p(j,g,k,O):null;case L:return k.key===X?C(j,g,k,O):null;case Oe:return k=pi(k),D(j,g,k,O)}if(He(k)||$(k))return X!==null?null:S(j,g,k,O,null);if(typeof k.then=="function")return D(j,g,hs(k),O);if(k.$$typeof===I)return D(j,g,ms(j,k),O);ps(j,k)}return null}function T(j,g,k,O,X){if(typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint")return j=j.get(k)||null,z(g,j,""+O,X);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case _:return j=j.get(O.key===null?k:O.key)||null,p(g,j,O,X);case L:return j=j.get(O.key===null?k:O.key)||null,C(g,j,O,X);case Oe:return O=pi(O),T(j,g,k,O,X)}if(He(O)||$(O))return j=j.get(k)||null,S(g,j,O,X,null);if(typeof O.then=="function")return T(j,g,k,hs(O),X);if(O.$$typeof===I)return T(j,g,k,ms(g,O),X);ps(g,O)}return null}function K(j,g,k,O){for(var X=null,be=null,Z=g,se=g=0,ye=null;Z!==null&&se<k.length;se++){Z.index>se?(ye=Z,Z=null):ye=Z.sibling;var ge=D(j,Z,k[se],O);if(ge===null){Z===null&&(Z=ye);break}e&&Z&&ge.alternate===null&&n(j,Z),g=c(ge,g,se),be===null?X=ge:be.sibling=ge,be=ge,Z=ye}if(se===k.length)return a(j,Z),he&&la(j,se),X;if(Z===null){for(;se<k.length;se++)Z=x(j,k[se],O),Z!==null&&(g=c(Z,g,se),be===null?X=Z:be.sibling=Z,be=Z);return he&&la(j,se),X}for(Z=i(Z);se<k.length;se++)ye=T(Z,j,se,k[se],O),ye!==null&&(e&&ye.alternate!==null&&Z.delete(ye.key===null?se:ye.key),g=c(ye,g,se),be===null?X=ye:be.sibling=ye,be=ye);return e&&Z.forEach(function(ei){return n(j,ei)}),he&&la(j,se),X}function ne(j,g,k,O){if(k==null)throw Error(r(151));for(var X=null,be=null,Z=g,se=g=0,ye=null,ge=k.next();Z!==null&&!ge.done;se++,ge=k.next()){Z.index>se?(ye=Z,Z=null):ye=Z.sibling;var ei=D(j,Z,ge.value,O);if(ei===null){Z===null&&(Z=ye);break}e&&Z&&ei.alternate===null&&n(j,Z),g=c(ei,g,se),be===null?X=ei:be.sibling=ei,be=ei,Z=ye}if(ge.done)return a(j,Z),he&&la(j,se),X;if(Z===null){for(;!ge.done;se++,ge=k.next())ge=x(j,ge.value,O),ge!==null&&(g=c(ge,g,se),be===null?X=ge:be.sibling=ge,be=ge);return he&&la(j,se),X}for(Z=i(Z);!ge.done;se++,ge=k.next())ge=T(Z,j,se,ge.value,O),ge!==null&&(e&&ge.alternate!==null&&Z.delete(ge.key===null?se:ge.key),g=c(ge,g,se),be===null?X=ge:be.sibling=ge,be=ge);return e&&Z.forEach(function(hg){return n(j,hg)}),he&&la(j,se),X}function Ee(j,g,k,O){if(typeof k=="object"&&k!==null&&k.type===U&&k.key===null&&(k=k.props.children),typeof k=="object"&&k!==null){switch(k.$$typeof){case _:e:{for(var X=k.key;g!==null;){if(g.key===X){if(X=k.type,X===U){if(g.tag===7){a(j,g.sibling),O=l(g,k.props.children),O.return=j,j=O;break e}}else if(g.elementType===X||typeof X=="object"&&X!==null&&X.$$typeof===Oe&&pi(X)===g.type){a(j,g.sibling),O=l(g,k.props),io(O,k),O.return=j,j=O;break e}a(j,g);break}else n(j,g);g=g.sibling}k.type===U?(O=mi(k.props.children,j.mode,O,k.key),O.return=j,j=O):(O=us(k.type,k.key,k.props,null,j.mode,O),io(O,k),O.return=j,j=O)}return f(j);case L:e:{for(X=k.key;g!==null;){if(g.key===X)if(g.tag===4&&g.stateNode.containerInfo===k.containerInfo&&g.stateNode.implementation===k.implementation){a(j,g.sibling),O=l(g,k.children||[]),O.return=j,j=O;break e}else{a(j,g);break}else n(j,g);g=g.sibling}O=dr(k,j.mode,O),O.return=j,j=O}return f(j);case Oe:return k=pi(k),Ee(j,g,k,O)}if(He(k))return K(j,g,k,O);if($(k)){if(X=$(k),typeof X!="function")throw Error(r(150));return k=X.call(k),ne(j,g,k,O)}if(typeof k.then=="function")return Ee(j,g,hs(k),O);if(k.$$typeof===I)return Ee(j,g,ms(j,k),O);ps(j,k)}return typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint"?(k=""+k,g!==null&&g.tag===6?(a(j,g.sibling),O=l(g,k),O.return=j,j=O):(a(j,g),O=fr(k,j.mode,O),O.return=j,j=O),f(j)):a(j,g)}return function(j,g,k,O){try{ao=0;var X=Ee(j,g,k,O);return it=null,X}catch(Z){if(Z===at||Z===ys)throw Z;var be=An(29,Z,null,j.mode);return be.lanes=O,be.return=j,be}}}var gi=gd(!0),jd=gd(!1),_a=!1;function Ar(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Cr(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Pa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ha(e,n,a){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(ve&2)!==0){var l=i.pending;return l===null?n.next=n:(n.next=l.next,l.next=n),i.pending=n,n=cs(e),td(e,null,a),n}return rs(e,i,n,a),cs(e)}function to(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var i=n.lanes;i&=e.pendingLanes,a|=i,n.lanes=a,df(e,a)}}function Dr(e,n){var a=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,a===i)){var l=null,c=null;if(a=a.firstBaseUpdate,a!==null){do{var f={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};c===null?l=c=f:c=c.next=f,a=a.next}while(a!==null);c===null?l=c=n:c=c.next=n}else l=c=n;a={baseState:i.baseState,firstBaseUpdate:l,lastBaseUpdate:c,shared:i.shared,callbacks:i.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Tr=!1;function oo(){if(Tr){var e=nt;if(e!==null)throw e}}function so(e,n,a,i){Tr=!1;var l=e.updateQueue;_a=!1;var c=l.firstBaseUpdate,f=l.lastBaseUpdate,z=l.shared.pending;if(z!==null){l.shared.pending=null;var p=z,C=p.next;p.next=null,f===null?c=C:f.next=C,f=p;var S=e.alternate;S!==null&&(S=S.updateQueue,z=S.lastBaseUpdate,z!==f&&(z===null?S.firstBaseUpdate=C:z.next=C,S.lastBaseUpdate=p))}if(c!==null){var x=l.baseState;f=0,S=C=p=null,z=c;do{var D=z.lane&-536870913,T=D!==z.lane;if(T?(ze&D)===D:(i&D)===D){D!==0&&D===et&&(Tr=!0),S!==null&&(S=S.next={lane:0,tag:z.tag,payload:z.payload,callback:null,next:null});e:{var K=e,ne=z;D=n;var Ee=a;switch(ne.tag){case 1:if(K=ne.payload,typeof K=="function"){x=K.call(Ee,x,D);break e}x=K;break e;case 3:K.flags=K.flags&-65537|128;case 0:if(K=ne.payload,D=typeof K=="function"?K.call(Ee,x,D):K,D==null)break e;x=A({},x,D);break e;case 2:_a=!0}}D=z.callback,D!==null&&(e.flags|=64,T&&(e.flags|=8192),T=l.callbacks,T===null?l.callbacks=[D]:T.push(D))}else T={lane:D,tag:z.tag,payload:z.payload,callback:z.callback,next:null},S===null?(C=S=T,p=x):S=S.next=T,f|=D;if(z=z.next,z===null){if(z=l.shared.pending,z===null)break;T=z,z=T.next,T.next=null,l.lastBaseUpdate=T,l.shared.pending=null}}while(!0);S===null&&(p=x),l.baseState=p,l.firstBaseUpdate=C,l.lastBaseUpdate=S,c===null&&(l.shared.lanes=0),Ka|=f,e.lanes=f,e.memoizedState=x}}function vd(e,n){if(typeof e!="function")throw Error(r(191,e));e.call(n)}function kd(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)vd(a[e],n)}var tt=b(null),bs=b(0);function Ad(e,n){e=pa,H(bs,e),H(tt,n),pa=e|n.baseLanes}function Er(){H(bs,pa),H(tt,tt.current)}function Sr(){pa=bs.current,B(tt),B(bs)}var Cn=b(null),Hn=null;function Ja(e){var n=e.alternate;H(Ue,Ue.current&1),H(Cn,e),Hn===null&&(n===null||tt.current!==null||n.memoizedState!==null)&&(Hn=e)}function Gr(e){H(Ue,Ue.current),H(Cn,e),Hn===null&&(Hn=e)}function Cd(e){e.tag===22?(H(Ue,Ue.current),H(Cn,e),Hn===null&&(Hn=e)):Fa()}function Fa(){H(Ue,Ue.current),H(Cn,Cn.current)}function Dn(e){B(Cn),Hn===e&&(Hn=null),B(Ue)}var Ue=b(0);function gs(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Mc(a)||_c(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ua=0,te=null,De=null,Ze=null,js=!1,ot=!1,ji=!1,vs=0,lo=0,st=null,lb=0;function Je(){throw Error(r(321))}function Or(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!kn(e[a],n[a]))return!1;return!0}function Br(e,n,a,i,l,c){return ua=c,te=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,E.H=e===null||e.memoizedState===null?rm:Yr,ji=!1,c=a(i,l),ji=!1,ot&&(c=Td(n,a,i,l)),Dd(e),c}function Dd(e){E.H=uo;var n=De!==null&&De.next!==null;if(ua=0,Ze=De=te=null,js=!1,lo=0,st=null,n)throw Error(r(300));e===null||We||(e=e.dependencies,e!==null&&ds(e)&&(We=!0))}function Td(e,n,a,i){te=e;var l=0;do{if(ot&&(st=null),lo=0,ot=!1,25<=l)throw Error(r(301));if(l+=1,Ze=De=null,e.updateQueue!=null){var c=e.updateQueue;c.lastEffect=null,c.events=null,c.stores=null,c.memoCache!=null&&(c.memoCache.index=0)}E.H=cm,c=n(a,i)}while(ot);return c}function rb(){var e=E.H,n=e.useState()[0];return n=typeof n.then=="function"?ro(n):n,e=e.useState()[0],(De!==null?De.memoizedState:null)!==e&&(te.flags|=1024),n}function xr(){var e=vs!==0;return vs=0,e}function Nr(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Rr(e){if(js){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}js=!1}ua=0,Ze=De=te=null,ot=!1,lo=vs=0,st=null}function fn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ze===null?te.memoizedState=Ze=e:Ze=Ze.next=e,Ze}function Le(){if(De===null){var e=te.alternate;e=e!==null?e.memoizedState:null}else e=De.next;var n=Ze===null?te.memoizedState:Ze.next;if(n!==null)Ze=n,De=e;else{if(e===null)throw te.alternate===null?Error(r(467)):Error(r(310));De=e,e={memoizedState:De.memoizedState,baseState:De.baseState,baseQueue:De.baseQueue,queue:De.queue,next:null},Ze===null?te.memoizedState=Ze=e:Ze=Ze.next=e}return Ze}function ks(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ro(e){var n=lo;return lo+=1,st===null&&(st=[]),e=hd(st,e,n),n=te,(Ze===null?n.memoizedState:Ze.next)===null&&(n=n.alternate,E.H=n===null||n.memoizedState===null?rm:Yr),e}function As(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return ro(e);if(e.$$typeof===I)return tn(e)}throw Error(r(438,String(e)))}function Mr(e){var n=null,a=te.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var i=te.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(n={data:i.data.map(function(l){return l.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=ks(),te.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),i=0;i<e;i++)a[i]=dn;return n.index++,a}function fa(e,n){return typeof n=="function"?n(e):n}function Cs(e){var n=Le();return _r(n,De,e)}function _r(e,n,a){var i=e.queue;if(i===null)throw Error(r(311));i.lastRenderedReducer=a;var l=e.baseQueue,c=i.pending;if(c!==null){if(l!==null){var f=l.next;l.next=c.next,c.next=f}n.baseQueue=l=c,i.pending=null}if(c=e.baseState,l===null)e.memoizedState=c;else{n=l.next;var z=f=null,p=null,C=n,S=!1;do{var x=C.lane&-536870913;if(x!==C.lane?(ze&x)===x:(ua&x)===x){var D=C.revertLane;if(D===0)p!==null&&(p=p.next={lane:0,revertLane:0,gesture:null,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null}),x===et&&(S=!0);else if((ua&D)===D){C=C.next,D===et&&(S=!0);continue}else x={lane:0,revertLane:C.revertLane,gesture:null,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null},p===null?(z=p=x,f=c):p=p.next=x,te.lanes|=D,Ka|=D;x=C.action,ji&&a(c,x),c=C.hasEagerState?C.eagerState:a(c,x)}else D={lane:x,revertLane:C.revertLane,gesture:C.gesture,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null},p===null?(z=p=D,f=c):p=p.next=D,te.lanes|=x,Ka|=x;C=C.next}while(C!==null&&C!==n);if(p===null?f=c:p.next=z,!kn(c,e.memoizedState)&&(We=!0,S&&(a=nt,a!==null)))throw a;e.memoizedState=c,e.baseState=f,e.baseQueue=p,i.lastRenderedState=c}return l===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function Pr(e){var n=Le(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var i=a.dispatch,l=a.pending,c=n.memoizedState;if(l!==null){a.pending=null;var f=l=l.next;do c=e(c,f.action),f=f.next;while(f!==l);kn(c,n.memoizedState)||(We=!0),n.memoizedState=c,n.baseQueue===null&&(n.baseState=c),a.lastRenderedState=c}return[c,i]}function Ed(e,n,a){var i=te,l=Le(),c=he;if(c){if(a===void 0)throw Error(r(407));a=a()}else a=n();var f=!kn((De||l).memoizedState,a);if(f&&(l.memoizedState=a,We=!0),l=l.queue,Fr(Od.bind(null,i,l,e),[e]),l.getSnapshot!==n||f||Ze!==null&&Ze.memoizedState.tag&1){if(i.flags|=2048,lt(9,{destroy:void 0},Gd.bind(null,i,l,a,n),null),Ge===null)throw Error(r(349));c||(ua&127)!==0||Sd(i,n,a)}return a}function Sd(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=te.updateQueue,n===null?(n=ks(),te.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function Gd(e,n,a,i){n.value=a,n.getSnapshot=i,Bd(n)&&xd(e)}function Od(e,n,a){return a(function(){Bd(n)&&xd(e)})}function Bd(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!kn(e,a)}catch{return!0}}function xd(e){var n=di(e,2);n!==null&&gn(n,e,2)}function Hr(e){var n=fn();if(typeof e=="function"){var a=e;if(e=a(),ji){Ga(!0);try{a()}finally{Ga(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:fa,lastRenderedState:e},n}function Nd(e,n,a,i){return e.baseState=a,_r(e,De,typeof i=="function"?i:fa)}function cb(e,n,a,i,l){if(Es(e))throw Error(r(485));if(e=n.action,e!==null){var c={payload:l,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(f){c.listeners.push(f)}};E.T!==null?a(!0):c.isTransition=!1,i(c),a=n.pending,a===null?(c.next=n.pending=c,Rd(n,c)):(c.next=a.next,n.pending=a.next=c)}}function Rd(e,n){var a=n.action,i=n.payload,l=e.state;if(n.isTransition){var c=E.T,f={};E.T=f;try{var z=a(l,i),p=E.S;p!==null&&p(f,z),Md(e,n,z)}catch(C){Jr(e,n,C)}finally{c!==null&&f.types!==null&&(c.types=f.types),E.T=c}}else try{c=a(l,i),Md(e,n,c)}catch(C){Jr(e,n,C)}}function Md(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(i){_d(e,n,i)},function(i){return Jr(e,n,i)}):_d(e,n,a)}function _d(e,n,a){n.status="fulfilled",n.value=a,Pd(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Rd(e,a)))}function Jr(e,n,a){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do n.status="rejected",n.reason=a,Pd(n),n=n.next;while(n!==i)}e.action=null}function Pd(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Hd(e,n){return n}function Jd(e,n){if(he){var a=Ge.formState;if(a!==null){e:{var i=te;if(he){if(Be){n:{for(var l=Be,c=Pn;l.nodeType!==8;){if(!c){l=null;break n}if(l=Jn(l.nextSibling),l===null){l=null;break n}}c=l.data,l=c==="F!"||c==="F"?l:null}if(l){Be=Jn(l.nextSibling),i=l.data==="F!";break e}}Ra(i)}i=!1}i&&(n=a[0])}}return a=fn(),a.memoizedState=a.baseState=n,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Hd,lastRenderedState:n},a.queue=i,a=om.bind(null,te,i),i.dispatch=a,i=Hr(!1),c=Wr.bind(null,te,!1,i.queue),i=fn(),l={state:n,dispatch:null,action:e,pending:null},i.queue=l,a=cb.bind(null,te,l,c,a),l.dispatch=a,i.memoizedState=e,[n,a,!1]}function Fd(e){var n=Le();return Ud(n,De,e)}function Ud(e,n,a){if(n=_r(e,n,Hd)[0],e=Cs(fa)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var i=ro(n)}catch(f){throw f===at?ys:f}else i=n;n=Le();var l=n.queue,c=l.dispatch;return a!==n.memoizedState&&(te.flags|=2048,lt(9,{destroy:void 0},ub.bind(null,l,a),null)),[i,c,e]}function ub(e,n){e.action=n}function Ld(e){var n=Le(),a=De;if(a!==null)return Ud(n,a,e);Le(),n=n.memoizedState,a=Le();var i=a.queue.dispatch;return a.memoizedState=e,[n,i,!1]}function lt(e,n,a,i){return e={tag:e,create:a,deps:i,inst:n,next:null},n=te.updateQueue,n===null&&(n=ks(),te.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(i=a.next,a.next=e,e.next=i,n.lastEffect=e),e}function Kd(){return Le().memoizedState}function Ds(e,n,a,i){var l=fn();te.flags|=e,l.memoizedState=lt(1|n,{destroy:void 0},a,i===void 0?null:i)}function Ts(e,n,a,i){var l=Le();i=i===void 0?null:i;var c=l.memoizedState.inst;De!==null&&i!==null&&Or(i,De.memoizedState.deps)?l.memoizedState=lt(n,c,a,i):(te.flags|=e,l.memoizedState=lt(1|n,c,a,i))}function Zd(e,n){Ds(8390656,8,e,n)}function Fr(e,n){Ts(2048,8,e,n)}function fb(e){te.flags|=4;var n=te.updateQueue;if(n===null)n=ks(),te.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function Wd(e){var n=Le().memoizedState;return fb({ref:n,nextImpl:e}),function(){if((ve&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function Yd(e,n){return Ts(4,2,e,n)}function qd(e,n){return Ts(4,4,e,n)}function Xd(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Vd(e,n,a){a=a!=null?a.concat([e]):null,Ts(4,4,Xd.bind(null,n,e),a)}function Ur(){}function Qd(e,n){var a=Le();n=n===void 0?null:n;var i=a.memoizedState;return n!==null&&Or(n,i[1])?i[0]:(a.memoizedState=[e,n],e)}function Id(e,n){var a=Le();n=n===void 0?null:n;var i=a.memoizedState;if(n!==null&&Or(n,i[1]))return i[0];if(i=e(),ji){Ga(!0);try{e()}finally{Ga(!1)}}return a.memoizedState=[i,n],i}function Lr(e,n,a){return a===void 0||(ua&1073741824)!==0&&(ze&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=$m(),te.lanes|=e,Ka|=e,a)}function $d(e,n,a,i){return kn(a,n)?a:tt.current!==null?(e=Lr(e,a,i),kn(e,n)||(We=!0),e):(ua&42)===0||(ua&1073741824)!==0&&(ze&261930)===0?(We=!0,e.memoizedState=a):(e=$m(),te.lanes|=e,Ka|=e,n)}function em(e,n,a,i,l){var c=P.p;P.p=c!==0&&8>c?c:8;var f=E.T,z={};E.T=z,Wr(e,!1,n,a);try{var p=l(),C=E.S;if(C!==null&&C(z,p),p!==null&&typeof p=="object"&&typeof p.then=="function"){var S=sb(p,i);co(e,n,S,Sn(e))}else co(e,n,i,Sn(e))}catch(x){co(e,n,{then:function(){},status:"rejected",reason:x},Sn())}finally{P.p=c,f!==null&&z.types!==null&&(f.types=z.types),E.T=f}}function db(){}function Kr(e,n,a,i){if(e.tag!==5)throw Error(r(476));var l=nm(e).queue;em(e,l,n,J,a===null?db:function(){return am(e),a(i)})}function nm(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:J,baseState:J,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:fa,lastRenderedState:J},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:fa,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function am(e){var n=nm(e);n.next===null&&(n=e.alternate.memoizedState),co(e,n.next.queue,{},Sn())}function Zr(){return tn(To)}function im(){return Le().memoizedState}function tm(){return Le().memoizedState}function mb(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=Sn();e=Pa(a);var i=Ha(n,e,a);i!==null&&(gn(i,n,a),to(i,n,a)),n={cache:gr()},e.payload=n;return}n=n.return}}function zb(e,n,a){var i=Sn();a={lane:i,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Es(e)?sm(n,a):(a=cr(e,n,a,i),a!==null&&(gn(a,e,i),lm(a,n,i)))}function om(e,n,a){var i=Sn();co(e,n,a,i)}function co(e,n,a,i){var l={lane:i,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Es(e))sm(n,l);else{var c=e.alternate;if(e.lanes===0&&(c===null||c.lanes===0)&&(c=n.lastRenderedReducer,c!==null))try{var f=n.lastRenderedState,z=c(f,a);if(l.hasEagerState=!0,l.eagerState=z,kn(z,f))return rs(e,n,l,0),Ge===null&&ls(),!1}catch{}if(a=cr(e,n,l,i),a!==null)return gn(a,e,i),lm(a,n,i),!0}return!1}function Wr(e,n,a,i){if(i={lane:2,revertLane:Ac(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},Es(e)){if(n)throw Error(r(479))}else n=cr(e,a,i,2),n!==null&&gn(n,e,2)}function Es(e){var n=e.alternate;return e===te||n!==null&&n===te}function sm(e,n){ot=js=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function lm(e,n,a){if((a&4194048)!==0){var i=n.lanes;i&=e.pendingLanes,a|=i,n.lanes=a,df(e,a)}}var uo={readContext:tn,use:As,useCallback:Je,useContext:Je,useEffect:Je,useImperativeHandle:Je,useLayoutEffect:Je,useInsertionEffect:Je,useMemo:Je,useReducer:Je,useRef:Je,useState:Je,useDebugValue:Je,useDeferredValue:Je,useTransition:Je,useSyncExternalStore:Je,useId:Je,useHostTransitionStatus:Je,useFormState:Je,useActionState:Je,useOptimistic:Je,useMemoCache:Je,useCacheRefresh:Je};uo.useEffectEvent=Je;var rm={readContext:tn,use:As,useCallback:function(e,n){return fn().memoizedState=[e,n===void 0?null:n],e},useContext:tn,useEffect:Zd,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Ds(4194308,4,Xd.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Ds(4194308,4,e,n)},useInsertionEffect:function(e,n){Ds(4,2,e,n)},useMemo:function(e,n){var a=fn();n=n===void 0?null:n;var i=e();if(ji){Ga(!0);try{e()}finally{Ga(!1)}}return a.memoizedState=[i,n],i},useReducer:function(e,n,a){var i=fn();if(a!==void 0){var l=a(n);if(ji){Ga(!0);try{a(n)}finally{Ga(!1)}}}else l=n;return i.memoizedState=i.baseState=l,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},i.queue=e,e=e.dispatch=zb.bind(null,te,e),[i.memoizedState,e]},useRef:function(e){var n=fn();return e={current:e},n.memoizedState=e},useState:function(e){e=Hr(e);var n=e.queue,a=om.bind(null,te,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:Ur,useDeferredValue:function(e,n){var a=fn();return Lr(a,e,n)},useTransition:function(){var e=Hr(!1);return e=em.bind(null,te,e.queue,!0,!1),fn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var i=te,l=fn();if(he){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Ge===null)throw Error(r(349));(ze&127)!==0||Sd(i,n,a)}l.memoizedState=a;var c={value:a,getSnapshot:n};return l.queue=c,Zd(Od.bind(null,i,c,e),[e]),i.flags|=2048,lt(9,{destroy:void 0},Gd.bind(null,i,c,a,n),null),a},useId:function(){var e=fn(),n=Ge.identifierPrefix;if(he){var a=Qn,i=Vn;a=(i&~(1<<32-vn(i)-1)).toString(32)+a,n="_"+n+"R_"+a,a=vs++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=lb++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:Zr,useFormState:Jd,useActionState:Jd,useOptimistic:function(e){var n=fn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Wr.bind(null,te,!0,a),a.dispatch=n,[e,n]},useMemoCache:Mr,useCacheRefresh:function(){return fn().memoizedState=mb.bind(null,te)},useEffectEvent:function(e){var n=fn(),a={impl:e};return n.memoizedState=a,function(){if((ve&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},Yr={readContext:tn,use:As,useCallback:Qd,useContext:tn,useEffect:Fr,useImperativeHandle:Vd,useInsertionEffect:Yd,useLayoutEffect:qd,useMemo:Id,useReducer:Cs,useRef:Kd,useState:function(){return Cs(fa)},useDebugValue:Ur,useDeferredValue:function(e,n){var a=Le();return $d(a,De.memoizedState,e,n)},useTransition:function(){var e=Cs(fa)[0],n=Le().memoizedState;return[typeof e=="boolean"?e:ro(e),n]},useSyncExternalStore:Ed,useId:im,useHostTransitionStatus:Zr,useFormState:Fd,useActionState:Fd,useOptimistic:function(e,n){var a=Le();return Nd(a,De,e,n)},useMemoCache:Mr,useCacheRefresh:tm};Yr.useEffectEvent=Wd;var cm={readContext:tn,use:As,useCallback:Qd,useContext:tn,useEffect:Fr,useImperativeHandle:Vd,useInsertionEffect:Yd,useLayoutEffect:qd,useMemo:Id,useReducer:Pr,useRef:Kd,useState:function(){return Pr(fa)},useDebugValue:Ur,useDeferredValue:function(e,n){var a=Le();return De===null?Lr(a,e,n):$d(a,De.memoizedState,e,n)},useTransition:function(){var e=Pr(fa)[0],n=Le().memoizedState;return[typeof e=="boolean"?e:ro(e),n]},useSyncExternalStore:Ed,useId:im,useHostTransitionStatus:Zr,useFormState:Ld,useActionState:Ld,useOptimistic:function(e,n){var a=Le();return De!==null?Nd(a,De,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Mr,useCacheRefresh:tm};cm.useEffectEvent=Wd;function qr(e,n,a,i){n=e.memoizedState,a=a(i,n),a=a==null?n:A({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Xr={enqueueSetState:function(e,n,a){e=e._reactInternals;var i=Sn(),l=Pa(i);l.payload=n,a!=null&&(l.callback=a),n=Ha(e,l,i),n!==null&&(gn(n,e,i),to(n,e,i))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var i=Sn(),l=Pa(i);l.tag=1,l.payload=n,a!=null&&(l.callback=a),n=Ha(e,l,i),n!==null&&(gn(n,e,i),to(n,e,i))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=Sn(),i=Pa(a);i.tag=2,n!=null&&(i.callback=n),n=Ha(e,i,a),n!==null&&(gn(n,e,a),to(n,e,a))}};function um(e,n,a,i,l,c,f){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,c,f):n.prototype&&n.prototype.isPureReactComponent?!Vt(a,i)||!Vt(l,c):!0}function fm(e,n,a,i){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,i),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,i),n.state!==e&&Xr.enqueueReplaceState(n,n.state,null)}function vi(e,n){var a=n;if("ref"in n){a={};for(var i in n)i!=="ref"&&(a[i]=n[i])}if(e=e.defaultProps){a===n&&(a=A({},a));for(var l in e)a[l]===void 0&&(a[l]=e[l])}return a}function dm(e){ss(e)}function mm(e){console.error(e)}function zm(e){ss(e)}function Ss(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(i){setTimeout(function(){throw i})}}function ym(e,n,a){try{var i=e.onCaughtError;i(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function Vr(e,n,a){return a=Pa(a),a.tag=3,a.payload={element:null},a.callback=function(){Ss(e,n)},a}function wm(e){return e=Pa(e),e.tag=3,e}function hm(e,n,a,i){var l=a.type.getDerivedStateFromError;if(typeof l=="function"){var c=i.value;e.payload=function(){return l(c)},e.callback=function(){ym(n,a,i)}}var f=a.stateNode;f!==null&&typeof f.componentDidCatch=="function"&&(e.callback=function(){ym(n,a,i),typeof l!="function"&&(Za===null?Za=new Set([this]):Za.add(this));var z=i.stack;this.componentDidCatch(i.value,{componentStack:z!==null?z:""})})}function yb(e,n,a,i,l){if(a.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(n=a.alternate,n!==null&&$i(n,a,l,!0),a=Cn.current,a!==null){switch(a.tag){case 31:case 13:return Hn===null?Fs():a.alternate===null&&Fe===0&&(Fe=3),a.flags&=-257,a.flags|=65536,a.lanes=l,i===ws?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([i]):n.add(i),jc(e,i,l)),!1;case 22:return a.flags|=65536,i===ws?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([i])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([i]):a.add(i)),jc(e,i,l)),!1}throw Error(r(435,a.tag))}return jc(e,i,l),Fs(),!1}if(he)return n=Cn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=l,i!==yr&&(e=Error(r(422),{cause:i}),$t(Rn(e,a)))):(i!==yr&&(n=Error(r(423),{cause:i}),$t(Rn(n,a))),e=e.current.alternate,e.flags|=65536,l&=-l,e.lanes|=l,i=Rn(i,a),l=Vr(e.stateNode,i,l),Dr(e,l),Fe!==4&&(Fe=2)),!1;var c=Error(r(520),{cause:i});if(c=Rn(c,a),bo===null?bo=[c]:bo.push(c),Fe!==4&&(Fe=2),n===null)return!0;i=Rn(i,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=l&-l,a.lanes|=e,e=Vr(a.stateNode,i,e),Dr(a,e),!1;case 1:if(n=a.type,c=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&(Za===null||!Za.has(c))))return a.flags|=65536,l&=-l,a.lanes|=l,l=wm(l),hm(l,e,a,i),Dr(a,l),!1}a=a.return}while(a!==null);return!1}var Qr=Error(r(461)),We=!1;function on(e,n,a,i){n.child=e===null?jd(n,null,a,i):gi(n,e.child,a,i)}function pm(e,n,a,i,l){a=a.render;var c=n.ref;if("ref"in i){var f={};for(var z in i)z!=="ref"&&(f[z]=i[z])}else f=i;return wi(n),i=Br(e,n,a,f,c,l),z=xr(),e!==null&&!We?(Nr(e,n,l),da(e,n,l)):(he&&z&&mr(n),n.flags|=1,on(e,n,i,l),n.child)}function bm(e,n,a,i,l){if(e===null){var c=a.type;return typeof c=="function"&&!ur(c)&&c.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=c,gm(e,n,c,i,l)):(e=us(a.type,null,i,n,n.mode,l),e.ref=n.ref,e.return=n,n.child=e)}if(c=e.child,!oc(e,l)){var f=c.memoizedProps;if(a=a.compare,a=a!==null?a:Vt,a(f,i)&&e.ref===n.ref)return da(e,n,l)}return n.flags|=1,e=sa(c,i),e.ref=n.ref,e.return=n,n.child=e}function gm(e,n,a,i,l){if(e!==null){var c=e.memoizedProps;if(Vt(c,i)&&e.ref===n.ref)if(We=!1,n.pendingProps=i=c,oc(e,l))(e.flags&131072)!==0&&(We=!0);else return n.lanes=e.lanes,da(e,n,l)}return Ir(e,n,a,i,l)}function jm(e,n,a,i){var l=i.children,c=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((n.flags&128)!==0){if(c=c!==null?c.baseLanes|a:a,e!==null){for(i=n.child=e.child,l=0;i!==null;)l=l|i.lanes|i.childLanes,i=i.sibling;i=l&~c}else i=0,n.child=null;return vm(e,n,c,a,i)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&zs(n,c!==null?c.cachePool:null),c!==null?Ad(n,c):Er(),Cd(n);else return i=n.lanes=536870912,vm(e,n,c!==null?c.baseLanes|a:a,a,i)}else c!==null?(zs(n,c.cachePool),Ad(n,c),Fa(),n.memoizedState=null):(e!==null&&zs(n,null),Er(),Fa());return on(e,n,l,a),n.child}function fo(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function vm(e,n,a,i,l){var c=vr();return c=c===null?null:{parent:Ke._currentValue,pool:c},n.memoizedState={baseLanes:a,cachePool:c},e!==null&&zs(n,null),Er(),Cd(n),e!==null&&$i(e,n,i,!0),n.childLanes=l,null}function Gs(e,n){return n=Bs({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function km(e,n,a){return gi(n,e.child,null,a),e=Gs(n,n.pendingProps),e.flags|=2,Dn(n),n.memoizedState=null,e}function wb(e,n,a){var i=n.pendingProps,l=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(he){if(i.mode==="hidden")return e=Gs(n,i),n.lanes=536870912,fo(null,e);if(Gr(n),(e=Be)?(e=Rz(e,Pn),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:xa!==null?{id:Vn,overflow:Qn}:null,retryLane:536870912,hydrationErrors:null},a=sd(e),a.return=n,n.child=a,an=n,Be=null)):e=null,e===null)throw Ra(n);return n.lanes=536870912,null}return Gs(n,i)}var c=e.memoizedState;if(c!==null){var f=c.dehydrated;if(Gr(n),l)if(n.flags&256)n.flags&=-257,n=km(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(r(558));else if(We||$i(e,n,a,!1),l=(a&e.childLanes)!==0,We||l){if(i=Ge,i!==null&&(f=mf(i,a),f!==0&&f!==c.retryLane))throw c.retryLane=f,di(e,f),gn(i,e,f),Qr;Fs(),n=km(e,n,a)}else e=c.treeContext,Be=Jn(f.nextSibling),an=n,he=!0,Na=null,Pn=!1,e!==null&&cd(n,e),n=Gs(n,i),n.flags|=4096;return n}return e=sa(e.child,{mode:i.mode,children:i.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Os(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function Ir(e,n,a,i,l){return wi(n),a=Br(e,n,a,i,void 0,l),i=xr(),e!==null&&!We?(Nr(e,n,l),da(e,n,l)):(he&&i&&mr(n),n.flags|=1,on(e,n,a,l),n.child)}function Am(e,n,a,i,l,c){return wi(n),n.updateQueue=null,a=Td(n,i,a,l),Dd(e),i=xr(),e!==null&&!We?(Nr(e,n,c),da(e,n,c)):(he&&i&&mr(n),n.flags|=1,on(e,n,a,c),n.child)}function Cm(e,n,a,i,l){if(wi(n),n.stateNode===null){var c=Xi,f=a.contextType;typeof f=="object"&&f!==null&&(c=tn(f)),c=new a(i,c),n.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,c.updater=Xr,n.stateNode=c,c._reactInternals=n,c=n.stateNode,c.props=i,c.state=n.memoizedState,c.refs={},Ar(n),f=a.contextType,c.context=typeof f=="object"&&f!==null?tn(f):Xi,c.state=n.memoizedState,f=a.getDerivedStateFromProps,typeof f=="function"&&(qr(n,a,f,i),c.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(f=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),f!==c.state&&Xr.enqueueReplaceState(c,c.state,null),so(n,i,c,l),oo(),c.state=n.memoizedState),typeof c.componentDidMount=="function"&&(n.flags|=4194308),i=!0}else if(e===null){c=n.stateNode;var z=n.memoizedProps,p=vi(a,z);c.props=p;var C=c.context,S=a.contextType;f=Xi,typeof S=="object"&&S!==null&&(f=tn(S));var x=a.getDerivedStateFromProps;S=typeof x=="function"||typeof c.getSnapshotBeforeUpdate=="function",z=n.pendingProps!==z,S||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(z||C!==f)&&fm(n,c,i,f),_a=!1;var D=n.memoizedState;c.state=D,so(n,i,c,l),oo(),C=n.memoizedState,z||D!==C||_a?(typeof x=="function"&&(qr(n,a,x,i),C=n.memoizedState),(p=_a||um(n,a,p,i,D,C,f))?(S||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(n.flags|=4194308)):(typeof c.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=i,n.memoizedState=C),c.props=i,c.state=C,c.context=f,i=p):(typeof c.componentDidMount=="function"&&(n.flags|=4194308),i=!1)}else{c=n.stateNode,Cr(e,n),f=n.memoizedProps,S=vi(a,f),c.props=S,x=n.pendingProps,D=c.context,C=a.contextType,p=Xi,typeof C=="object"&&C!==null&&(p=tn(C)),z=a.getDerivedStateFromProps,(C=typeof z=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(f!==x||D!==p)&&fm(n,c,i,p),_a=!1,D=n.memoizedState,c.state=D,so(n,i,c,l),oo();var T=n.memoizedState;f!==x||D!==T||_a||e!==null&&e.dependencies!==null&&ds(e.dependencies)?(typeof z=="function"&&(qr(n,a,z,i),T=n.memoizedState),(S=_a||um(n,a,S,i,D,T,p)||e!==null&&e.dependencies!==null&&ds(e.dependencies))?(C||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(i,T,p),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(i,T,p)),typeof c.componentDidUpdate=="function"&&(n.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof c.componentDidUpdate!="function"||f===e.memoizedProps&&D===e.memoizedState||(n.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&D===e.memoizedState||(n.flags|=1024),n.memoizedProps=i,n.memoizedState=T),c.props=i,c.state=T,c.context=p,i=S):(typeof c.componentDidUpdate!="function"||f===e.memoizedProps&&D===e.memoizedState||(n.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&D===e.memoizedState||(n.flags|=1024),i=!1)}return c=i,Os(e,n),i=(n.flags&128)!==0,c||i?(c=n.stateNode,a=i&&typeof a.getDerivedStateFromError!="function"?null:c.render(),n.flags|=1,e!==null&&i?(n.child=gi(n,e.child,null,l),n.child=gi(n,null,a,l)):on(e,n,a,l),n.memoizedState=c.state,e=n.child):e=da(e,n,l),e}function Dm(e,n,a,i){return zi(),n.flags|=256,on(e,n,a,i),n.child}var $r={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ec(e){return{baseLanes:e,cachePool:yd()}}function nc(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=En),e}function Tm(e,n,a){var i=n.pendingProps,l=!1,c=(n.flags&128)!==0,f;if((f=c)||(f=e!==null&&e.memoizedState===null?!1:(Ue.current&2)!==0),f&&(l=!0,n.flags&=-129),f=(n.flags&32)!==0,n.flags&=-33,e===null){if(he){if(l?Ja(n):Fa(),(e=Be)?(e=Rz(e,Pn),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:xa!==null?{id:Vn,overflow:Qn}:null,retryLane:536870912,hydrationErrors:null},a=sd(e),a.return=n,n.child=a,an=n,Be=null)):e=null,e===null)throw Ra(n);return _c(e)?n.lanes=32:n.lanes=536870912,null}var z=i.children;return i=i.fallback,l?(Fa(),l=n.mode,z=Bs({mode:"hidden",children:z},l),i=mi(i,l,a,null),z.return=n,i.return=n,z.sibling=i,n.child=z,i=n.child,i.memoizedState=ec(a),i.childLanes=nc(e,f,a),n.memoizedState=$r,fo(null,i)):(Ja(n),ac(n,z))}var p=e.memoizedState;if(p!==null&&(z=p.dehydrated,z!==null)){if(c)n.flags&256?(Ja(n),n.flags&=-257,n=ic(e,n,a)):n.memoizedState!==null?(Fa(),n.child=e.child,n.flags|=128,n=null):(Fa(),z=i.fallback,l=n.mode,i=Bs({mode:"visible",children:i.children},l),z=mi(z,l,a,null),z.flags|=2,i.return=n,z.return=n,i.sibling=z,n.child=i,gi(n,e.child,null,a),i=n.child,i.memoizedState=ec(a),i.childLanes=nc(e,f,a),n.memoizedState=$r,n=fo(null,i));else if(Ja(n),_c(z)){if(f=z.nextSibling&&z.nextSibling.dataset,f)var C=f.dgst;f=C,i=Error(r(419)),i.stack="",i.digest=f,$t({value:i,source:null,stack:null}),n=ic(e,n,a)}else if(We||$i(e,n,a,!1),f=(a&e.childLanes)!==0,We||f){if(f=Ge,f!==null&&(i=mf(f,a),i!==0&&i!==p.retryLane))throw p.retryLane=i,di(e,i),gn(f,e,i),Qr;Mc(z)||Fs(),n=ic(e,n,a)}else Mc(z)?(n.flags|=192,n.child=e.child,n=null):(e=p.treeContext,Be=Jn(z.nextSibling),an=n,he=!0,Na=null,Pn=!1,e!==null&&cd(n,e),n=ac(n,i.children),n.flags|=4096);return n}return l?(Fa(),z=i.fallback,l=n.mode,p=e.child,C=p.sibling,i=sa(p,{mode:"hidden",children:i.children}),i.subtreeFlags=p.subtreeFlags&65011712,C!==null?z=sa(C,z):(z=mi(z,l,a,null),z.flags|=2),z.return=n,i.return=n,i.sibling=z,n.child=i,fo(null,i),i=n.child,z=e.child.memoizedState,z===null?z=ec(a):(l=z.cachePool,l!==null?(p=Ke._currentValue,l=l.parent!==p?{parent:p,pool:p}:l):l=yd(),z={baseLanes:z.baseLanes|a,cachePool:l}),i.memoizedState=z,i.childLanes=nc(e,f,a),n.memoizedState=$r,fo(e.child,i)):(Ja(n),a=e.child,e=a.sibling,a=sa(a,{mode:"visible",children:i.children}),a.return=n,a.sibling=null,e!==null&&(f=n.deletions,f===null?(n.deletions=[e],n.flags|=16):f.push(e)),n.child=a,n.memoizedState=null,a)}function ac(e,n){return n=Bs({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Bs(e,n){return e=An(22,e,null,n),e.lanes=0,e}function ic(e,n,a){return gi(n,e.child,null,a),e=ac(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Em(e,n,a){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n),pr(e.return,n,a)}function tc(e,n,a,i,l,c){var f=e.memoizedState;f===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:i,tail:a,tailMode:l,treeForkCount:c}:(f.isBackwards=n,f.rendering=null,f.renderingStartTime=0,f.last=i,f.tail=a,f.tailMode=l,f.treeForkCount=c)}function Sm(e,n,a){var i=n.pendingProps,l=i.revealOrder,c=i.tail;i=i.children;var f=Ue.current,z=(f&2)!==0;if(z?(f=f&1|2,n.flags|=128):f&=1,H(Ue,f),on(e,n,i,a),i=he?It:0,!z&&e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Em(e,a,n);else if(e.tag===19)Em(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(l){case"forwards":for(a=n.child,l=null;a!==null;)e=a.alternate,e!==null&&gs(e)===null&&(l=a),a=a.sibling;a=l,a===null?(l=n.child,n.child=null):(l=a.sibling,a.sibling=null),tc(n,!1,l,a,c,i);break;case"backwards":case"unstable_legacy-backwards":for(a=null,l=n.child,n.child=null;l!==null;){if(e=l.alternate,e!==null&&gs(e)===null){n.child=l;break}e=l.sibling,l.sibling=a,a=l,l=e}tc(n,!0,a,null,c,i);break;case"together":tc(n,!1,null,null,void 0,i);break;default:n.memoizedState=null}return n.child}function da(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Ka|=n.lanes,(a&n.childLanes)===0)if(e!==null){if($i(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(r(153));if(n.child!==null){for(e=n.child,a=sa(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=sa(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function oc(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&ds(e)))}function hb(e,n,a){switch(n.tag){case 3:Xe(n,n.stateNode.containerInfo),Ma(n,Ke,e.memoizedState.cache),zi();break;case 27:case 5:On(n);break;case 4:Xe(n,n.stateNode.containerInfo);break;case 10:Ma(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Gr(n),null;break;case 13:var i=n.memoizedState;if(i!==null)return i.dehydrated!==null?(Ja(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Tm(e,n,a):(Ja(n),e=da(e,n,a),e!==null?e.sibling:null);Ja(n);break;case 19:var l=(e.flags&128)!==0;if(i=(a&n.childLanes)!==0,i||($i(e,n,a,!1),i=(a&n.childLanes)!==0),l){if(i)return Sm(e,n,a);n.flags|=128}if(l=n.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),H(Ue,Ue.current),i)break;return null;case 22:return n.lanes=0,jm(e,n,a,n.pendingProps);case 24:Ma(n,Ke,e.memoizedState.cache)}return da(e,n,a)}function Gm(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)We=!0;else{if(!oc(e,a)&&(n.flags&128)===0)return We=!1,hb(e,n,a);We=(e.flags&131072)!==0}else We=!1,he&&(n.flags&1048576)!==0&&rd(n,It,n.index);switch(n.lanes=0,n.tag){case 16:e:{var i=n.pendingProps;if(e=pi(n.elementType),n.type=e,typeof e=="function")ur(e)?(i=vi(e,i),n.tag=1,n=Cm(null,n,e,i,a)):(n.tag=0,n=Ir(null,n,e,i,a));else{if(e!=null){var l=e.$$typeof;if(l===ue){n.tag=11,n=pm(null,n,e,i,a);break e}else if(l===Q){n.tag=14,n=bm(null,n,e,i,a);break e}}throw n=je(e)||e,Error(r(306,n,""))}}return n;case 0:return Ir(e,n,n.type,n.pendingProps,a);case 1:return i=n.type,l=vi(i,n.pendingProps),Cm(e,n,i,l,a);case 3:e:{if(Xe(n,n.stateNode.containerInfo),e===null)throw Error(r(387));i=n.pendingProps;var c=n.memoizedState;l=c.element,Cr(e,n),so(n,i,null,a);var f=n.memoizedState;if(i=f.cache,Ma(n,Ke,i),i!==c.cache&&br(n,[Ke],a,!0),oo(),i=f.element,c.isDehydrated)if(c={element:i,isDehydrated:!1,cache:f.cache},n.updateQueue.baseState=c,n.memoizedState=c,n.flags&256){n=Dm(e,n,i,a);break e}else if(i!==l){l=Rn(Error(r(424)),n),$t(l),n=Dm(e,n,i,a);break e}else for(e=n.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Be=Jn(e.firstChild),an=n,he=!0,Na=null,Pn=!0,a=jd(n,null,i,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(zi(),i===l){n=da(e,n,a);break e}on(e,n,i,a)}n=n.child}return n;case 26:return Os(e,n),e===null?(a=Fz(n.type,null,n.pendingProps,null))?n.memoizedState=a:he||(a=n.type,e=n.pendingProps,i=qs(oe.current).createElement(a),i[nn]=n,i[zn]=e,sn(i,a,e),Ie(i),n.stateNode=i):n.memoizedState=Fz(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return On(n),e===null&&he&&(i=n.stateNode=Pz(n.type,n.pendingProps,oe.current),an=n,Pn=!0,l=Be,Xa(n.type)?(Pc=l,Be=Jn(i.firstChild)):Be=l),on(e,n,n.pendingProps.children,a),Os(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&he&&((l=i=Be)&&(i=Yb(i,n.type,n.pendingProps,Pn),i!==null?(n.stateNode=i,an=n,Be=Jn(i.firstChild),Pn=!1,l=!0):l=!1),l||Ra(n)),On(n),l=n.type,c=n.pendingProps,f=e!==null?e.memoizedProps:null,i=c.children,xc(l,c)?i=null:f!==null&&xc(l,f)&&(n.flags|=32),n.memoizedState!==null&&(l=Br(e,n,rb,null,null,a),To._currentValue=l),Os(e,n),on(e,n,i,a),n.child;case 6:return e===null&&he&&((e=a=Be)&&(a=qb(a,n.pendingProps,Pn),a!==null?(n.stateNode=a,an=n,Be=null,e=!0):e=!1),e||Ra(n)),null;case 13:return Tm(e,n,a);case 4:return Xe(n,n.stateNode.containerInfo),i=n.pendingProps,e===null?n.child=gi(n,null,i,a):on(e,n,i,a),n.child;case 11:return pm(e,n,n.type,n.pendingProps,a);case 7:return on(e,n,n.pendingProps,a),n.child;case 8:return on(e,n,n.pendingProps.children,a),n.child;case 12:return on(e,n,n.pendingProps.children,a),n.child;case 10:return i=n.pendingProps,Ma(n,n.type,i.value),on(e,n,i.children,a),n.child;case 9:return l=n.type._context,i=n.pendingProps.children,wi(n),l=tn(l),i=i(l),n.flags|=1,on(e,n,i,a),n.child;case 14:return bm(e,n,n.type,n.pendingProps,a);case 15:return gm(e,n,n.type,n.pendingProps,a);case 19:return Sm(e,n,a);case 31:return wb(e,n,a);case 22:return jm(e,n,a,n.pendingProps);case 24:return wi(n),i=tn(Ke),e===null?(l=vr(),l===null&&(l=Ge,c=gr(),l.pooledCache=c,c.refCount++,c!==null&&(l.pooledCacheLanes|=a),l=c),n.memoizedState={parent:i,cache:l},Ar(n),Ma(n,Ke,l)):((e.lanes&a)!==0&&(Cr(e,n),so(n,null,null,a),oo()),l=e.memoizedState,c=n.memoizedState,l.parent!==i?(l={parent:i,cache:i},n.memoizedState=l,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=l),Ma(n,Ke,i)):(i=c.cache,Ma(n,Ke,i),i!==l.cache&&br(n,[Ke],a,!0))),on(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function ma(e){e.flags|=4}function sc(e,n,a,i,l){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(l&335544128)===l)if(e.stateNode.complete)e.flags|=8192;else if(iz())e.flags|=8192;else throw bi=ws,kr}else e.flags&=-16777217}function Om(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Wz(n))if(iz())e.flags|=8192;else throw bi=ws,kr}function xs(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?uf():536870912,e.lanes|=n,ft|=n)}function mo(e,n){if(!he)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var i=null;a!==null;)a.alternate!==null&&(i=a),a=a.sibling;i===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function xe(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,i=0;if(n)for(var l=e.child;l!==null;)a|=l.lanes|l.childLanes,i|=l.subtreeFlags&65011712,i|=l.flags&65011712,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)a|=l.lanes|l.childLanes,i|=l.subtreeFlags,i|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=i,e.childLanes=a,n}function pb(e,n,a){var i=n.pendingProps;switch(zr(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return xe(n),null;case 1:return xe(n),null;case 3:return a=n.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),n.memoizedState.cache!==i&&(n.flags|=2048),ca(Ke),Se(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Ii(n)?ma(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,wr())),xe(n),null;case 26:var l=n.type,c=n.memoizedState;return e===null?(ma(n),c!==null?(xe(n),Om(n,c)):(xe(n),sc(n,l,null,i,a))):c?c!==e.memoizedState?(ma(n),xe(n),Om(n,c)):(xe(n),n.flags&=-16777217):(e=e.memoizedProps,e!==i&&ma(n),xe(n),sc(n,l,e,i,a)),null;case 27:if(na(n),a=oe.current,l=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==i&&ma(n);else{if(!i){if(n.stateNode===null)throw Error(r(166));return xe(n),null}e=F.current,Ii(n)?ud(n):(e=Pz(l,i,a),n.stateNode=e,ma(n))}return xe(n),null;case 5:if(na(n),l=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==i&&ma(n);else{if(!i){if(n.stateNode===null)throw Error(r(166));return xe(n),null}if(c=F.current,Ii(n))ud(n);else{var f=qs(oe.current);switch(c){case 1:c=f.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:c=f.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":c=f.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":c=f.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":c=f.createElement("div"),c.innerHTML="<script><\/script>",c=c.removeChild(c.firstChild);break;case"select":c=typeof i.is=="string"?f.createElement("select",{is:i.is}):f.createElement("select"),i.multiple?c.multiple=!0:i.size&&(c.size=i.size);break;default:c=typeof i.is=="string"?f.createElement(l,{is:i.is}):f.createElement(l)}}c[nn]=n,c[zn]=i;e:for(f=n.child;f!==null;){if(f.tag===5||f.tag===6)c.appendChild(f.stateNode);else if(f.tag!==4&&f.tag!==27&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===n)break e;for(;f.sibling===null;){if(f.return===null||f.return===n)break e;f=f.return}f.sibling.return=f.return,f=f.sibling}n.stateNode=c;e:switch(sn(c,l,i),l){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}i&&ma(n)}}return xe(n),sc(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==i&&ma(n);else{if(typeof i!="string"&&n.stateNode===null)throw Error(r(166));if(e=oe.current,Ii(n)){if(e=n.stateNode,a=n.memoizedProps,i=null,l=an,l!==null)switch(l.tag){case 27:case 5:i=l.memoizedProps}e[nn]=n,e=!!(e.nodeValue===a||i!==null&&i.suppressHydrationWarning===!0||Tz(e.nodeValue,a)),e||Ra(n,!0)}else e=qs(e).createTextNode(i),e[nn]=n,n.stateNode=e}return xe(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(i=Ii(n),a!==null){if(e===null){if(!i)throw Error(r(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(557));e[nn]=n}else zi(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;xe(n),e=!1}else a=wr(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(Dn(n),n):(Dn(n),null);if((n.flags&128)!==0)throw Error(r(558))}return xe(n),null;case 13:if(i=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(l=Ii(n),i!==null&&i.dehydrated!==null){if(e===null){if(!l)throw Error(r(318));if(l=n.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(r(317));l[nn]=n}else zi(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;xe(n),l=!1}else l=wr(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),l=!0;if(!l)return n.flags&256?(Dn(n),n):(Dn(n),null)}return Dn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=i!==null,e=e!==null&&e.memoizedState!==null,a&&(i=n.child,l=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(l=i.alternate.memoizedState.cachePool.pool),c=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(c=i.memoizedState.cachePool.pool),c!==l&&(i.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),xs(n,n.updateQueue),xe(n),null);case 4:return Se(),e===null&&Ec(n.stateNode.containerInfo),xe(n),null;case 10:return ca(n.type),xe(n),null;case 19:if(B(Ue),i=n.memoizedState,i===null)return xe(n),null;if(l=(n.flags&128)!==0,c=i.rendering,c===null)if(l)mo(i,!1);else{if(Fe!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(c=gs(e),c!==null){for(n.flags|=128,mo(i,!1),e=c.updateQueue,n.updateQueue=e,xs(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)od(a,e),a=a.sibling;return H(Ue,Ue.current&1|2),he&&la(n,i.treeForkCount),n.child}e=e.sibling}i.tail!==null&&cn()>Ps&&(n.flags|=128,l=!0,mo(i,!1),n.lanes=4194304)}else{if(!l)if(e=gs(c),e!==null){if(n.flags|=128,l=!0,e=e.updateQueue,n.updateQueue=e,xs(n,e),mo(i,!0),i.tail===null&&i.tailMode==="hidden"&&!c.alternate&&!he)return xe(n),null}else 2*cn()-i.renderingStartTime>Ps&&a!==536870912&&(n.flags|=128,l=!0,mo(i,!1),n.lanes=4194304);i.isBackwards?(c.sibling=n.child,n.child=c):(e=i.last,e!==null?e.sibling=c:n.child=c,i.last=c)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=cn(),e.sibling=null,a=Ue.current,H(Ue,l?a&1|2:a&1),he&&la(n,i.treeForkCount),e):(xe(n),null);case 22:case 23:return Dn(n),Sr(),i=n.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(n.flags|=8192):i&&(n.flags|=8192),i?(a&536870912)!==0&&(n.flags&128)===0&&(xe(n),n.subtreeFlags&6&&(n.flags|=8192)):xe(n),a=n.updateQueue,a!==null&&xs(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),i=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(i=n.memoizedState.cachePool.pool),i!==a&&(n.flags|=2048),e!==null&&B(hi),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ca(Ke),xe(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function bb(e,n){switch(zr(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return ca(Ke),Se(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return na(n),null;case 31:if(n.memoizedState!==null){if(Dn(n),n.alternate===null)throw Error(r(340));zi()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(Dn(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(r(340));zi()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return B(Ue),null;case 4:return Se(),null;case 10:return ca(n.type),null;case 22:case 23:return Dn(n),Sr(),e!==null&&B(hi),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return ca(Ke),null;case 25:return null;default:return null}}function Bm(e,n){switch(zr(n),n.tag){case 3:ca(Ke),Se();break;case 26:case 27:case 5:na(n);break;case 4:Se();break;case 31:n.memoizedState!==null&&Dn(n);break;case 13:Dn(n);break;case 19:B(Ue);break;case 10:ca(n.type);break;case 22:case 23:Dn(n),Sr(),e!==null&&B(hi);break;case 24:ca(Ke)}}function zo(e,n){try{var a=n.updateQueue,i=a!==null?a.lastEffect:null;if(i!==null){var l=i.next;a=l;do{if((a.tag&e)===e){i=void 0;var c=a.create,f=a.inst;i=c(),f.destroy=i}a=a.next}while(a!==l)}}catch(z){Ae(n,n.return,z)}}function Ua(e,n,a){try{var i=n.updateQueue,l=i!==null?i.lastEffect:null;if(l!==null){var c=l.next;i=c;do{if((i.tag&e)===e){var f=i.inst,z=f.destroy;if(z!==void 0){f.destroy=void 0,l=n;var p=a,C=z;try{C()}catch(S){Ae(l,p,S)}}}i=i.next}while(i!==c)}}catch(S){Ae(n,n.return,S)}}function xm(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{kd(n,a)}catch(i){Ae(e,e.return,i)}}}function Nm(e,n,a){a.props=vi(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(i){Ae(e,n,i)}}function yo(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof a=="function"?e.refCleanup=a(i):a.current=i}}catch(l){Ae(e,n,l)}}function In(e,n){var a=e.ref,i=e.refCleanup;if(a!==null)if(typeof i=="function")try{i()}catch(l){Ae(e,n,l)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(l){Ae(e,n,l)}else a.current=null}function Rm(e){var n=e.type,a=e.memoizedProps,i=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&i.focus();break e;case"img":a.src?i.src=a.src:a.srcSet&&(i.srcset=a.srcSet)}}catch(l){Ae(e,e.return,l)}}function lc(e,n,a){try{var i=e.stateNode;Fb(i,e.type,a,n),i[zn]=n}catch(l){Ae(e,e.return,l)}}function Mm(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Xa(e.type)||e.tag===4}function rc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Mm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Xa(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function cc(e,n,a){var i=e.tag;if(i===5||i===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=ta));else if(i!==4&&(i===27&&Xa(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(cc(e,n,a),e=e.sibling;e!==null;)cc(e,n,a),e=e.sibling}function Ns(e,n,a){var i=e.tag;if(i===5||i===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(i!==4&&(i===27&&Xa(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Ns(e,n,a),e=e.sibling;e!==null;)Ns(e,n,a),e=e.sibling}function _m(e){var n=e.stateNode,a=e.memoizedProps;try{for(var i=e.type,l=n.attributes;l.length;)n.removeAttributeNode(l[0]);sn(n,i,a),n[nn]=e,n[zn]=a}catch(c){Ae(e,e.return,c)}}var za=!1,Ye=!1,uc=!1,Pm=typeof WeakSet=="function"?WeakSet:Set,$e=null;function gb(e,n){if(e=e.containerInfo,Oc=nl,e=Vf(e),ir(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var i=a.getSelection&&a.getSelection();if(i&&i.rangeCount!==0){a=i.anchorNode;var l=i.anchorOffset,c=i.focusNode;i=i.focusOffset;try{a.nodeType,c.nodeType}catch{a=null;break e}var f=0,z=-1,p=-1,C=0,S=0,x=e,D=null;n:for(;;){for(var T;x!==a||l!==0&&x.nodeType!==3||(z=f+l),x!==c||i!==0&&x.nodeType!==3||(p=f+i),x.nodeType===3&&(f+=x.nodeValue.length),(T=x.firstChild)!==null;)D=x,x=T;for(;;){if(x===e)break n;if(D===a&&++C===l&&(z=f),D===c&&++S===i&&(p=f),(T=x.nextSibling)!==null)break;x=D,D=x.parentNode}x=T}a=z===-1||p===-1?null:{start:z,end:p}}else a=null}a=a||{start:0,end:0}}else a=null;for(Bc={focusedElem:e,selectionRange:a},nl=!1,$e=n;$e!==null;)if(n=$e,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,$e=e;else for(;$e!==null;){switch(n=$e,c=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)l=e[a],l.ref.impl=l.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&c!==null){e=void 0,a=n,l=c.memoizedProps,c=c.memoizedState,i=a.stateNode;try{var K=vi(a.type,l);e=i.getSnapshotBeforeUpdate(K,c),i.__reactInternalSnapshotBeforeUpdate=e}catch(ne){Ae(a,a.return,ne)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)Rc(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Rc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=n.sibling,e!==null){e.return=n.return,$e=e;break}$e=n.return}}function Hm(e,n,a){var i=a.flags;switch(a.tag){case 0:case 11:case 15:wa(e,a),i&4&&zo(5,a);break;case 1:if(wa(e,a),i&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(f){Ae(a,a.return,f)}else{var l=vi(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(l,n,e.__reactInternalSnapshotBeforeUpdate)}catch(f){Ae(a,a.return,f)}}i&64&&xm(a),i&512&&yo(a,a.return);break;case 3:if(wa(e,a),i&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{kd(e,n)}catch(f){Ae(a,a.return,f)}}break;case 27:n===null&&i&4&&_m(a);case 26:case 5:wa(e,a),n===null&&i&4&&Rm(a),i&512&&yo(a,a.return);break;case 12:wa(e,a);break;case 31:wa(e,a),i&4&&Um(e,a);break;case 13:wa(e,a),i&4&&Lm(e,a),i&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Sb.bind(null,a),Xb(e,a))));break;case 22:if(i=a.memoizedState!==null||za,!i){n=n!==null&&n.memoizedState!==null||Ye,l=za;var c=Ye;za=i,(Ye=n)&&!c?ha(e,a,(a.subtreeFlags&8772)!==0):wa(e,a),za=l,Ye=c}break;case 30:break;default:wa(e,a)}}function Jm(e){var n=e.alternate;n!==null&&(e.alternate=null,Jm(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Jl(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Me=null,wn=!1;function ya(e,n,a){for(a=a.child;a!==null;)Fm(e,n,a),a=a.sibling}function Fm(e,n,a){if(jn&&typeof jn.onCommitFiberUnmount=="function")try{jn.onCommitFiberUnmount(Pt,a)}catch{}switch(a.tag){case 26:Ye||In(a,n),ya(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Ye||In(a,n);var i=Me,l=wn;Xa(a.type)&&(Me=a.stateNode,wn=!1),ya(e,n,a),Ao(a.stateNode),Me=i,wn=l;break;case 5:Ye||In(a,n);case 6:if(i=Me,l=wn,Me=null,ya(e,n,a),Me=i,wn=l,Me!==null)if(wn)try{(Me.nodeType===9?Me.body:Me.nodeName==="HTML"?Me.ownerDocument.body:Me).removeChild(a.stateNode)}catch(c){Ae(a,n,c)}else try{Me.removeChild(a.stateNode)}catch(c){Ae(a,n,c)}break;case 18:Me!==null&&(wn?(e=Me,xz(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),bt(e)):xz(Me,a.stateNode));break;case 4:i=Me,l=wn,Me=a.stateNode.containerInfo,wn=!0,ya(e,n,a),Me=i,wn=l;break;case 0:case 11:case 14:case 15:Ua(2,a,n),Ye||Ua(4,a,n),ya(e,n,a);break;case 1:Ye||(In(a,n),i=a.stateNode,typeof i.componentWillUnmount=="function"&&Nm(a,n,i)),ya(e,n,a);break;case 21:ya(e,n,a);break;case 22:Ye=(i=Ye)||a.memoizedState!==null,ya(e,n,a),Ye=i;break;default:ya(e,n,a)}}function Um(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{bt(e)}catch(a){Ae(n,n.return,a)}}}function Lm(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{bt(e)}catch(a){Ae(n,n.return,a)}}function jb(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Pm),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Pm),n;default:throw Error(r(435,e.tag))}}function Rs(e,n){var a=jb(e);n.forEach(function(i){if(!a.has(i)){a.add(i);var l=Gb.bind(null,e,i);i.then(l,l)}})}function hn(e,n){var a=n.deletions;if(a!==null)for(var i=0;i<a.length;i++){var l=a[i],c=e,f=n,z=f;e:for(;z!==null;){switch(z.tag){case 27:if(Xa(z.type)){Me=z.stateNode,wn=!1;break e}break;case 5:Me=z.stateNode,wn=!1;break e;case 3:case 4:Me=z.stateNode.containerInfo,wn=!0;break e}z=z.return}if(Me===null)throw Error(r(160));Fm(c,f,l),Me=null,wn=!1,c=l.alternate,c!==null&&(c.return=null),l.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Km(n,e),n=n.sibling}var Zn=null;function Km(e,n){var a=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:hn(n,e),pn(e),i&4&&(Ua(3,e,e.return),zo(3,e),Ua(5,e,e.return));break;case 1:hn(n,e),pn(e),i&512&&(Ye||a===null||In(a,a.return)),i&64&&za&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?i:a.concat(i))));break;case 26:var l=Zn;if(hn(n,e),pn(e),i&512&&(Ye||a===null||In(a,a.return)),i&4){var c=a!==null?a.memoizedState:null;if(i=e.memoizedState,a===null)if(i===null)if(e.stateNode===null){e:{i=e.type,a=e.memoizedProps,l=l.ownerDocument||l;n:switch(i){case"title":c=l.getElementsByTagName("title")[0],(!c||c[Ft]||c[nn]||c.namespaceURI==="http://www.w3.org/2000/svg"||c.hasAttribute("itemprop"))&&(c=l.createElement(i),l.head.insertBefore(c,l.querySelector("head > title"))),sn(c,i,a),c[nn]=e,Ie(c),i=c;break e;case"link":var f=Kz("link","href",l).get(i+(a.href||""));if(f){for(var z=0;z<f.length;z++)if(c=f[z],c.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&c.getAttribute("rel")===(a.rel==null?null:a.rel)&&c.getAttribute("title")===(a.title==null?null:a.title)&&c.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){f.splice(z,1);break n}}c=l.createElement(i),sn(c,i,a),l.head.appendChild(c);break;case"meta":if(f=Kz("meta","content",l).get(i+(a.content||""))){for(z=0;z<f.length;z++)if(c=f[z],c.getAttribute("content")===(a.content==null?null:""+a.content)&&c.getAttribute("name")===(a.name==null?null:a.name)&&c.getAttribute("property")===(a.property==null?null:a.property)&&c.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&c.getAttribute("charset")===(a.charSet==null?null:a.charSet)){f.splice(z,1);break n}}c=l.createElement(i),sn(c,i,a),l.head.appendChild(c);break;default:throw Error(r(468,i))}c[nn]=e,Ie(c),i=c}e.stateNode=i}else Zz(l,e.type,e.stateNode);else e.stateNode=Lz(l,i,e.memoizedProps);else c!==i?(c===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):c.count--,i===null?Zz(l,e.type,e.stateNode):Lz(l,i,e.memoizedProps)):i===null&&e.stateNode!==null&&lc(e,e.memoizedProps,a.memoizedProps)}break;case 27:hn(n,e),pn(e),i&512&&(Ye||a===null||In(a,a.return)),a!==null&&i&4&&lc(e,e.memoizedProps,a.memoizedProps);break;case 5:if(hn(n,e),pn(e),i&512&&(Ye||a===null||In(a,a.return)),e.flags&32){l=e.stateNode;try{Ui(l,"")}catch(K){Ae(e,e.return,K)}}i&4&&e.stateNode!=null&&(l=e.memoizedProps,lc(e,l,a!==null?a.memoizedProps:l)),i&1024&&(uc=!0);break;case 6:if(hn(n,e),pn(e),i&4){if(e.stateNode===null)throw Error(r(162));i=e.memoizedProps,a=e.stateNode;try{a.nodeValue=i}catch(K){Ae(e,e.return,K)}}break;case 3:if(Qs=null,l=Zn,Zn=Xs(n.containerInfo),hn(n,e),Zn=l,pn(e),i&4&&a!==null&&a.memoizedState.isDehydrated)try{bt(n.containerInfo)}catch(K){Ae(e,e.return,K)}uc&&(uc=!1,Zm(e));break;case 4:i=Zn,Zn=Xs(e.stateNode.containerInfo),hn(n,e),pn(e),Zn=i;break;case 12:hn(n,e),pn(e);break;case 31:hn(n,e),pn(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Rs(e,i)));break;case 13:hn(n,e),pn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(_s=cn()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Rs(e,i)));break;case 22:l=e.memoizedState!==null;var p=a!==null&&a.memoizedState!==null,C=za,S=Ye;if(za=C||l,Ye=S||p,hn(n,e),Ye=S,za=C,pn(e),i&8192)e:for(n=e.stateNode,n._visibility=l?n._visibility&-2:n._visibility|1,l&&(a===null||p||za||Ye||ki(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){p=a=n;try{if(c=p.stateNode,l)f=c.style,typeof f.setProperty=="function"?f.setProperty("display","none","important"):f.display="none";else{z=p.stateNode;var x=p.memoizedProps.style,D=x!=null&&x.hasOwnProperty("display")?x.display:null;z.style.display=D==null||typeof D=="boolean"?"":(""+D).trim()}}catch(K){Ae(p,p.return,K)}}}else if(n.tag===6){if(a===null){p=n;try{p.stateNode.nodeValue=l?"":p.memoizedProps}catch(K){Ae(p,p.return,K)}}}else if(n.tag===18){if(a===null){p=n;try{var T=p.stateNode;l?Nz(T,!0):Nz(p.stateNode,!1)}catch(K){Ae(p,p.return,K)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}i&4&&(i=e.updateQueue,i!==null&&(a=i.retryQueue,a!==null&&(i.retryQueue=null,Rs(e,a))));break;case 19:hn(n,e),pn(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Rs(e,i)));break;case 30:break;case 21:break;default:hn(n,e),pn(e)}}function pn(e){var n=e.flags;if(n&2){try{for(var a,i=e.return;i!==null;){if(Mm(i)){a=i;break}i=i.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var l=a.stateNode,c=rc(e);Ns(e,c,l);break;case 5:var f=a.stateNode;a.flags&32&&(Ui(f,""),a.flags&=-33);var z=rc(e);Ns(e,z,f);break;case 3:case 4:var p=a.stateNode.containerInfo,C=rc(e);cc(e,C,p);break;default:throw Error(r(161))}}catch(S){Ae(e,e.return,S)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Zm(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Zm(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function wa(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Hm(e,n.alternate,n),n=n.sibling}function ki(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Ua(4,n,n.return),ki(n);break;case 1:In(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Nm(n,n.return,a),ki(n);break;case 27:Ao(n.stateNode);case 26:case 5:In(n,n.return),ki(n);break;case 22:n.memoizedState===null&&ki(n);break;case 30:ki(n);break;default:ki(n)}e=e.sibling}}function ha(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var i=n.alternate,l=e,c=n,f=c.flags;switch(c.tag){case 0:case 11:case 15:ha(l,c,a),zo(4,c);break;case 1:if(ha(l,c,a),i=c,l=i.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(C){Ae(i,i.return,C)}if(i=c,l=i.updateQueue,l!==null){var z=i.stateNode;try{var p=l.shared.hiddenCallbacks;if(p!==null)for(l.shared.hiddenCallbacks=null,l=0;l<p.length;l++)vd(p[l],z)}catch(C){Ae(i,i.return,C)}}a&&f&64&&xm(c),yo(c,c.return);break;case 27:_m(c);case 26:case 5:ha(l,c,a),a&&i===null&&f&4&&Rm(c),yo(c,c.return);break;case 12:ha(l,c,a);break;case 31:ha(l,c,a),a&&f&4&&Um(l,c);break;case 13:ha(l,c,a),a&&f&4&&Lm(l,c);break;case 22:c.memoizedState===null&&ha(l,c,a),yo(c,c.return);break;case 30:break;default:ha(l,c,a)}n=n.sibling}}function fc(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&eo(a))}function dc(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&eo(e))}function Wn(e,n,a,i){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Wm(e,n,a,i),n=n.sibling}function Wm(e,n,a,i){var l=n.flags;switch(n.tag){case 0:case 11:case 15:Wn(e,n,a,i),l&2048&&zo(9,n);break;case 1:Wn(e,n,a,i);break;case 3:Wn(e,n,a,i),l&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&eo(e)));break;case 12:if(l&2048){Wn(e,n,a,i),e=n.stateNode;try{var c=n.memoizedProps,f=c.id,z=c.onPostCommit;typeof z=="function"&&z(f,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(p){Ae(n,n.return,p)}}else Wn(e,n,a,i);break;case 31:Wn(e,n,a,i);break;case 13:Wn(e,n,a,i);break;case 23:break;case 22:c=n.stateNode,f=n.alternate,n.memoizedState!==null?c._visibility&2?Wn(e,n,a,i):wo(e,n):c._visibility&2?Wn(e,n,a,i):(c._visibility|=2,rt(e,n,a,i,(n.subtreeFlags&10256)!==0||!1)),l&2048&&fc(f,n);break;case 24:Wn(e,n,a,i),l&2048&&dc(n.alternate,n);break;default:Wn(e,n,a,i)}}function rt(e,n,a,i,l){for(l=l&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var c=e,f=n,z=a,p=i,C=f.flags;switch(f.tag){case 0:case 11:case 15:rt(c,f,z,p,l),zo(8,f);break;case 23:break;case 22:var S=f.stateNode;f.memoizedState!==null?S._visibility&2?rt(c,f,z,p,l):wo(c,f):(S._visibility|=2,rt(c,f,z,p,l)),l&&C&2048&&fc(f.alternate,f);break;case 24:rt(c,f,z,p,l),l&&C&2048&&dc(f.alternate,f);break;default:rt(c,f,z,p,l)}n=n.sibling}}function wo(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,i=n,l=i.flags;switch(i.tag){case 22:wo(a,i),l&2048&&fc(i.alternate,i);break;case 24:wo(a,i),l&2048&&dc(i.alternate,i);break;default:wo(a,i)}n=n.sibling}}var ho=8192;function ct(e,n,a){if(e.subtreeFlags&ho)for(e=e.child;e!==null;)Ym(e,n,a),e=e.sibling}function Ym(e,n,a){switch(e.tag){case 26:ct(e,n,a),e.flags&ho&&e.memoizedState!==null&&lg(a,Zn,e.memoizedState,e.memoizedProps);break;case 5:ct(e,n,a);break;case 3:case 4:var i=Zn;Zn=Xs(e.stateNode.containerInfo),ct(e,n,a),Zn=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=ho,ho=16777216,ct(e,n,a),ho=i):ct(e,n,a));break;default:ct(e,n,a)}}function qm(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function po(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var i=n[a];$e=i,Vm(i,e)}qm(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Xm(e),e=e.sibling}function Xm(e){switch(e.tag){case 0:case 11:case 15:po(e),e.flags&2048&&Ua(9,e,e.return);break;case 3:po(e);break;case 12:po(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Ms(e)):po(e);break;default:po(e)}}function Ms(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var i=n[a];$e=i,Vm(i,e)}qm(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Ua(8,n,n.return),Ms(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Ms(n));break;default:Ms(n)}e=e.sibling}}function Vm(e,n){for(;$e!==null;){var a=$e;switch(a.tag){case 0:case 11:case 15:Ua(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var i=a.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:eo(a.memoizedState.cache)}if(i=a.child,i!==null)i.return=a,$e=i;else e:for(a=e;$e!==null;){i=$e;var l=i.sibling,c=i.return;if(Jm(i),i===a){$e=null;break e}if(l!==null){l.return=c,$e=l;break e}$e=c}}}var vb={getCacheForType:function(e){var n=tn(Ke),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return tn(Ke).controller.signal}},kb=typeof WeakMap=="function"?WeakMap:Map,ve=0,Ge=null,fe=null,ze=0,ke=0,Tn=null,La=!1,ut=!1,mc=!1,pa=0,Fe=0,Ka=0,Ai=0,zc=0,En=0,ft=0,bo=null,bn=null,yc=!1,_s=0,Qm=0,Ps=1/0,Hs=null,Za=null,Ve=0,Wa=null,dt=null,ba=0,wc=0,hc=null,Im=null,go=0,pc=null;function Sn(){return(ve&2)!==0&&ze!==0?ze&-ze:E.T!==null?Ac():zf()}function $m(){if(En===0)if((ze&536870912)===0||he){var e=Yo;Yo<<=1,(Yo&3932160)===0&&(Yo=262144),En=e}else En=536870912;return e=Cn.current,e!==null&&(e.flags|=32),En}function gn(e,n,a){(e===Ge&&(ke===2||ke===9)||e.cancelPendingCommit!==null)&&(mt(e,0),Ya(e,ze,En,!1)),Jt(e,a),((ve&2)===0||e!==Ge)&&(e===Ge&&((ve&2)===0&&(Ai|=a),Fe===4&&Ya(e,ze,En,!1)),$n(e))}function ez(e,n,a){if((ve&6)!==0)throw Error(r(327));var i=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Ht(e,n),l=i?Db(e,n):gc(e,n,!0),c=i;do{if(l===0){ut&&!i&&Ya(e,n,0,!1);break}else{if(a=e.current.alternate,c&&!Ab(a)){l=gc(e,n,!1),c=!1;continue}if(l===2){if(c=n,e.errorRecoveryDisabledLanes&c)var f=0;else f=e.pendingLanes&-536870913,f=f!==0?f:f&536870912?536870912:0;if(f!==0){n=f;e:{var z=e;l=bo;var p=z.current.memoizedState.isDehydrated;if(p&&(mt(z,f).flags|=256),f=gc(z,f,!1),f!==2){if(mc&&!p){z.errorRecoveryDisabledLanes|=c,Ai|=c,l=4;break e}c=bn,bn=l,c!==null&&(bn===null?bn=c:bn.push.apply(bn,c))}l=f}if(c=!1,l!==2)continue}}if(l===1){mt(e,0),Ya(e,n,0,!0);break}e:{switch(i=e,c=l,c){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Ya(i,n,En,!La);break e;case 2:bn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(l=_s+300-cn(),10<l)){if(Ya(i,n,En,!La),Xo(i,0,!0)!==0)break e;ba=n,i.timeoutHandle=Oz(nz.bind(null,i,a,bn,Hs,yc,n,En,Ai,ft,La,c,"Throttled",-0,0),l);break e}nz(i,a,bn,Hs,yc,n,En,Ai,ft,La,c,null,-0,0)}}break}while(!0);$n(e)}function nz(e,n,a,i,l,c,f,z,p,C,S,x,D,T){if(e.timeoutHandle=-1,x=n.subtreeFlags,x&8192||(x&16785408)===16785408){x={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ta},Ym(n,c,x);var K=(c&62914560)===c?_s-cn():(c&4194048)===c?Qm-cn():0;if(K=rg(x,K),K!==null){ba=c,e.cancelPendingCommit=K(cz.bind(null,e,n,c,a,i,l,f,z,p,S,x,null,D,T)),Ya(e,c,f,!C);return}}cz(e,n,c,a,i,l,f,z,p)}function Ab(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var i=0;i<a.length;i++){var l=a[i],c=l.getSnapshot;l=l.value;try{if(!kn(c(),l))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ya(e,n,a,i){n&=~zc,n&=~Ai,e.suspendedLanes|=n,e.pingedLanes&=~n,i&&(e.warmLanes|=n),i=e.expirationTimes;for(var l=n;0<l;){var c=31-vn(l),f=1<<c;i[c]=-1,l&=~f}a!==0&&ff(e,a,n)}function Js(){return(ve&6)===0?(jo(0),!1):!0}function bc(){if(fe!==null){if(ke===0)var e=fe.return;else e=fe,ra=yi=null,Rr(e),it=null,ao=0,e=fe;for(;e!==null;)Bm(e.alternate,e),e=e.return;fe=null}}function mt(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Kb(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),ba=0,bc(),Ge=e,fe=a=sa(e.current,null),ze=n,ke=0,Tn=null,La=!1,ut=Ht(e,n),mc=!1,ft=En=zc=Ai=Ka=Fe=0,bn=bo=null,yc=!1,(n&8)!==0&&(n|=n&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=n;0<i;){var l=31-vn(i),c=1<<l;n|=e[l],i&=~c}return pa=n,ls(),a}function az(e,n){te=null,E.H=uo,n===at||n===ys?(n=pd(),ke=3):n===kr?(n=pd(),ke=4):ke=n===Qr?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Tn=n,fe===null&&(Fe=1,Ss(e,Rn(n,e.current)))}function iz(){var e=Cn.current;return e===null?!0:(ze&4194048)===ze?Hn===null:(ze&62914560)===ze||(ze&536870912)!==0?e===Hn:!1}function tz(){var e=E.H;return E.H=uo,e===null?uo:e}function oz(){var e=E.A;return E.A=vb,e}function Fs(){Fe=4,La||(ze&4194048)!==ze&&Cn.current!==null||(ut=!0),(Ka&134217727)===0&&(Ai&134217727)===0||Ge===null||Ya(Ge,ze,En,!1)}function gc(e,n,a){var i=ve;ve|=2;var l=tz(),c=oz();(Ge!==e||ze!==n)&&(Hs=null,mt(e,n)),n=!1;var f=Fe;e:do try{if(ke!==0&&fe!==null){var z=fe,p=Tn;switch(ke){case 8:bc(),f=6;break e;case 3:case 2:case 9:case 6:Cn.current===null&&(n=!0);var C=ke;if(ke=0,Tn=null,zt(e,z,p,C),a&&ut){f=0;break e}break;default:C=ke,ke=0,Tn=null,zt(e,z,p,C)}}Cb(),f=Fe;break}catch(S){az(e,S)}while(!0);return n&&e.shellSuspendCounter++,ra=yi=null,ve=i,E.H=l,E.A=c,fe===null&&(Ge=null,ze=0,ls()),f}function Cb(){for(;fe!==null;)sz(fe)}function Db(e,n){var a=ve;ve|=2;var i=tz(),l=oz();Ge!==e||ze!==n?(Hs=null,Ps=cn()+500,mt(e,n)):ut=Ht(e,n);e:do try{if(ke!==0&&fe!==null){n=fe;var c=Tn;n:switch(ke){case 1:ke=0,Tn=null,zt(e,n,c,1);break;case 2:case 9:if(wd(c)){ke=0,Tn=null,lz(n);break}n=function(){ke!==2&&ke!==9||Ge!==e||(ke=7),$n(e)},c.then(n,n);break e;case 3:ke=7;break e;case 4:ke=5;break e;case 7:wd(c)?(ke=0,Tn=null,lz(n)):(ke=0,Tn=null,zt(e,n,c,7));break;case 5:var f=null;switch(fe.tag){case 26:f=fe.memoizedState;case 5:case 27:var z=fe;if(f?Wz(f):z.stateNode.complete){ke=0,Tn=null;var p=z.sibling;if(p!==null)fe=p;else{var C=z.return;C!==null?(fe=C,Us(C)):fe=null}break n}}ke=0,Tn=null,zt(e,n,c,5);break;case 6:ke=0,Tn=null,zt(e,n,c,6);break;case 8:bc(),Fe=6;break e;default:throw Error(r(462))}}Tb();break}catch(S){az(e,S)}while(!0);return ra=yi=null,E.H=i,E.A=l,ve=a,fe!==null?0:(Ge=null,ze=0,ls(),Fe)}function Tb(){for(;fe!==null&&!xl();)sz(fe)}function sz(e){var n=Gm(e.alternate,e,pa);e.memoizedProps=e.pendingProps,n===null?Us(e):fe=n}function lz(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=Am(a,n,n.pendingProps,n.type,void 0,ze);break;case 11:n=Am(a,n,n.pendingProps,n.type.render,n.ref,ze);break;case 5:Rr(n);default:Bm(a,n),n=fe=od(n,pa),n=Gm(a,n,pa)}e.memoizedProps=e.pendingProps,n===null?Us(e):fe=n}function zt(e,n,a,i){ra=yi=null,Rr(n),it=null,ao=0;var l=n.return;try{if(yb(e,l,n,a,ze)){Fe=1,Ss(e,Rn(a,e.current)),fe=null;return}}catch(c){if(l!==null)throw fe=l,c;Fe=1,Ss(e,Rn(a,e.current)),fe=null;return}n.flags&32768?(he||i===1?e=!0:ut||(ze&536870912)!==0?e=!1:(La=e=!0,(i===2||i===9||i===3||i===6)&&(i=Cn.current,i!==null&&i.tag===13&&(i.flags|=16384))),rz(n,e)):Us(n)}function Us(e){var n=e;do{if((n.flags&32768)!==0){rz(n,La);return}e=n.return;var a=pb(n.alternate,n,pa);if(a!==null){fe=a;return}if(n=n.sibling,n!==null){fe=n;return}fe=n=e}while(n!==null);Fe===0&&(Fe=5)}function rz(e,n){do{var a=bb(e.alternate,e);if(a!==null){a.flags&=32767,fe=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){fe=e;return}fe=e=a}while(e!==null);Fe=6,fe=null}function cz(e,n,a,i,l,c,f,z,p){e.cancelPendingCommit=null;do Ls();while(Ve!==0);if((ve&6)!==0)throw Error(r(327));if(n!==null){if(n===e.current)throw Error(r(177));if(c=n.lanes|n.childLanes,c|=rr,sp(e,a,c,f,z,p),e===Ge&&(fe=Ge=null,ze=0),dt=n,Wa=e,ba=a,wc=c,hc=l,Im=i,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Ob(si,function(){return zz(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||i){i=E.T,E.T=null,l=P.p,P.p=2,f=ve,ve|=4;try{gb(e,n,a)}finally{ve=f,P.p=l,E.T=i}}Ve=1,uz(),fz(),dz()}}function uz(){if(Ve===1){Ve=0;var e=Wa,n=dt,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=E.T,E.T=null;var i=P.p;P.p=2;var l=ve;ve|=4;try{Km(n,e);var c=Bc,f=Vf(e.containerInfo),z=c.focusedElem,p=c.selectionRange;if(f!==z&&z&&z.ownerDocument&&Xf(z.ownerDocument.documentElement,z)){if(p!==null&&ir(z)){var C=p.start,S=p.end;if(S===void 0&&(S=C),"selectionStart"in z)z.selectionStart=C,z.selectionEnd=Math.min(S,z.value.length);else{var x=z.ownerDocument||document,D=x&&x.defaultView||window;if(D.getSelection){var T=D.getSelection(),K=z.textContent.length,ne=Math.min(p.start,K),Ee=p.end===void 0?ne:Math.min(p.end,K);!T.extend&&ne>Ee&&(f=Ee,Ee=ne,ne=f);var j=qf(z,ne),g=qf(z,Ee);if(j&&g&&(T.rangeCount!==1||T.anchorNode!==j.node||T.anchorOffset!==j.offset||T.focusNode!==g.node||T.focusOffset!==g.offset)){var k=x.createRange();k.setStart(j.node,j.offset),T.removeAllRanges(),ne>Ee?(T.addRange(k),T.extend(g.node,g.offset)):(k.setEnd(g.node,g.offset),T.addRange(k))}}}}for(x=[],T=z;T=T.parentNode;)T.nodeType===1&&x.push({element:T,left:T.scrollLeft,top:T.scrollTop});for(typeof z.focus=="function"&&z.focus(),z=0;z<x.length;z++){var O=x[z];O.element.scrollLeft=O.left,O.element.scrollTop=O.top}}nl=!!Oc,Bc=Oc=null}finally{ve=l,P.p=i,E.T=a}}e.current=n,Ve=2}}function fz(){if(Ve===2){Ve=0;var e=Wa,n=dt,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=E.T,E.T=null;var i=P.p;P.p=2;var l=ve;ve|=4;try{Hm(e,n.alternate,n)}finally{ve=l,P.p=i,E.T=a}}Ve=3}}function dz(){if(Ve===4||Ve===3){Ve=0,Nl();var e=Wa,n=dt,a=ba,i=Im;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Ve=5:(Ve=0,dt=Wa=null,mz(e,e.pendingLanes));var l=e.pendingLanes;if(l===0&&(Za=null),Pl(a),n=n.stateNode,jn&&typeof jn.onCommitFiberRoot=="function")try{jn.onCommitFiberRoot(Pt,n,void 0,(n.current.flags&128)===128)}catch{}if(i!==null){n=E.T,l=P.p,P.p=2,E.T=null;try{for(var c=e.onRecoverableError,f=0;f<i.length;f++){var z=i[f];c(z.value,{componentStack:z.stack})}}finally{E.T=n,P.p=l}}(ba&3)!==0&&Ls(),$n(e),l=e.pendingLanes,(a&261930)!==0&&(l&42)!==0?e===pc?go++:(go=0,pc=e):go=0,jo(0)}}function mz(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,eo(n)))}function Ls(){return uz(),fz(),dz(),zz()}function zz(){if(Ve!==5)return!1;var e=Wa,n=wc;wc=0;var a=Pl(ba),i=E.T,l=P.p;try{P.p=32>a?32:a,E.T=null,a=hc,hc=null;var c=Wa,f=ba;if(Ve=0,dt=Wa=null,ba=0,(ve&6)!==0)throw Error(r(331));var z=ve;if(ve|=4,Xm(c.current),Wm(c,c.current,f,a),ve=z,jo(0,!1),jn&&typeof jn.onPostCommitFiberRoot=="function")try{jn.onPostCommitFiberRoot(Pt,c)}catch{}return!0}finally{P.p=l,E.T=i,mz(e,n)}}function yz(e,n,a){n=Rn(a,n),n=Vr(e.stateNode,n,2),e=Ha(e,n,2),e!==null&&(Jt(e,2),$n(e))}function Ae(e,n,a){if(e.tag===3)yz(e,e,a);else for(;n!==null;){if(n.tag===3){yz(n,e,a);break}else if(n.tag===1){var i=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Za===null||!Za.has(i))){e=Rn(a,e),a=wm(2),i=Ha(n,a,2),i!==null&&(hm(a,i,n,e),Jt(i,2),$n(i));break}}n=n.return}}function jc(e,n,a){var i=e.pingCache;if(i===null){i=e.pingCache=new kb;var l=new Set;i.set(n,l)}else l=i.get(n),l===void 0&&(l=new Set,i.set(n,l));l.has(a)||(mc=!0,l.add(a),e=Eb.bind(null,e,n,a),n.then(e,e))}function Eb(e,n,a){var i=e.pingCache;i!==null&&i.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Ge===e&&(ze&a)===a&&(Fe===4||Fe===3&&(ze&62914560)===ze&&300>cn()-_s?(ve&2)===0&&mt(e,0):zc|=a,ft===ze&&(ft=0)),$n(e)}function wz(e,n){n===0&&(n=uf()),e=di(e,n),e!==null&&(Jt(e,n),$n(e))}function Sb(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),wz(e,a)}function Gb(e,n){var a=0;switch(e.tag){case 31:case 13:var i=e.stateNode,l=e.memoizedState;l!==null&&(a=l.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(r(314))}i!==null&&i.delete(n),wz(e,a)}function Ob(e,n){return Mt(e,n)}var Ks=null,yt=null,vc=!1,Zs=!1,kc=!1,qa=0;function $n(e){e!==yt&&e.next===null&&(yt===null?Ks=yt=e:yt=yt.next=e),Zs=!0,vc||(vc=!0,xb())}function jo(e,n){if(!kc&&Zs){kc=!0;do for(var a=!1,i=Ks;i!==null;){if(e!==0){var l=i.pendingLanes;if(l===0)var c=0;else{var f=i.suspendedLanes,z=i.pingedLanes;c=(1<<31-vn(42|e)+1)-1,c&=l&~(f&~z),c=c&201326741?c&201326741|1:c?c|2:0}c!==0&&(a=!0,gz(i,c))}else c=ze,c=Xo(i,i===Ge?c:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(c&3)===0||Ht(i,c)||(a=!0,gz(i,c));i=i.next}while(a);kc=!1}}function Bb(){hz()}function hz(){Zs=vc=!1;var e=0;qa!==0&&Lb()&&(e=qa);for(var n=cn(),a=null,i=Ks;i!==null;){var l=i.next,c=pz(i,n);c===0?(i.next=null,a===null?Ks=l:a.next=l,l===null&&(yt=a)):(a=i,(e!==0||(c&3)!==0)&&(Zs=!0)),i=l}Ve!==0&&Ve!==5||jo(e),qa!==0&&(qa=0)}function pz(e,n){for(var a=e.suspendedLanes,i=e.pingedLanes,l=e.expirationTimes,c=e.pendingLanes&-62914561;0<c;){var f=31-vn(c),z=1<<f,p=l[f];p===-1?((z&a)===0||(z&i)!==0)&&(l[f]=op(z,n)):p<=n&&(e.expiredLanes|=z),c&=~z}if(n=Ge,a=ze,a=Xo(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,a===0||e===n&&(ke===2||ke===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&_t(i),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Ht(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(i!==null&&_t(i),Pl(a)){case 2:case 8:a=aa;break;case 32:a=si;break;case 268435456:a=cf;break;default:a=si}return i=bz.bind(null,e),a=Mt(a,i),e.callbackPriority=n,e.callbackNode=a,n}return i!==null&&i!==null&&_t(i),e.callbackPriority=2,e.callbackNode=null,2}function bz(e,n){if(Ve!==0&&Ve!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Ls()&&e.callbackNode!==a)return null;var i=ze;return i=Xo(e,e===Ge?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(ez(e,i,n),pz(e,cn()),e.callbackNode!=null&&e.callbackNode===a?bz.bind(null,e):null)}function gz(e,n){if(Ls())return null;ez(e,n,!0)}function xb(){Zb(function(){(ve&6)!==0?Mt(pe,Bb):hz()})}function Ac(){if(qa===0){var e=et;e===0&&(e=Wo,Wo<<=1,(Wo&261888)===0&&(Wo=256)),qa=e}return qa}function jz(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:$o(""+e)}function vz(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function Nb(e,n,a,i,l){if(n==="submit"&&a&&a.stateNode===l){var c=jz((l[zn]||null).action),f=i.submitter;f&&(n=(n=f[zn]||null)?jz(n.formAction):f.getAttribute("formAction"),n!==null&&(c=n,f=null));var z=new is("action","action",null,i,l);e.push({event:z,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(qa!==0){var p=f?vz(l,f):new FormData(l);Kr(a,{pending:!0,data:p,method:l.method,action:c},null,p)}}else typeof c=="function"&&(z.preventDefault(),p=f?vz(l,f):new FormData(l),Kr(a,{pending:!0,data:p,method:l.method,action:c},c,p))},currentTarget:l}]})}}for(var Cc=0;Cc<lr.length;Cc++){var Dc=lr[Cc],Rb=Dc.toLowerCase(),Mb=Dc[0].toUpperCase()+Dc.slice(1);Kn(Rb,"on"+Mb)}Kn($f,"onAnimationEnd"),Kn(ed,"onAnimationIteration"),Kn(nd,"onAnimationStart"),Kn("dblclick","onDoubleClick"),Kn("focusin","onFocus"),Kn("focusout","onBlur"),Kn(Ip,"onTransitionRun"),Kn($p,"onTransitionStart"),Kn(eb,"onTransitionCancel"),Kn(ad,"onTransitionEnd"),Ji("onMouseEnter",["mouseout","mouseover"]),Ji("onMouseLeave",["mouseout","mouseover"]),Ji("onPointerEnter",["pointerout","pointerover"]),Ji("onPointerLeave",["pointerout","pointerover"]),ri("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ri("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ri("onBeforeInput",["compositionend","keypress","textInput","paste"]),ri("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ri("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ri("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var vo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),_b=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(vo));function kz(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var i=e[a],l=i.event;i=i.listeners;e:{var c=void 0;if(n)for(var f=i.length-1;0<=f;f--){var z=i[f],p=z.instance,C=z.currentTarget;if(z=z.listener,p!==c&&l.isPropagationStopped())break e;c=z,l.currentTarget=C;try{c(l)}catch(S){ss(S)}l.currentTarget=null,c=p}else for(f=0;f<i.length;f++){if(z=i[f],p=z.instance,C=z.currentTarget,z=z.listener,p!==c&&l.isPropagationStopped())break e;c=z,l.currentTarget=C;try{c(l)}catch(S){ss(S)}l.currentTarget=null,c=p}}}}function de(e,n){var a=n[Hl];a===void 0&&(a=n[Hl]=new Set);var i=e+"__bubble";a.has(i)||(Az(n,e,2,!1),a.add(i))}function Tc(e,n,a){var i=0;n&&(i|=4),Az(a,e,i,n)}var Ws="_reactListening"+Math.random().toString(36).slice(2);function Ec(e){if(!e[Ws]){e[Ws]=!0,hf.forEach(function(a){a!=="selectionchange"&&(_b.has(a)||Tc(a,!1,e),Tc(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Ws]||(n[Ws]=!0,Tc("selectionchange",!1,n))}}function Az(e,n,a,i){switch($z(n)){case 2:var l=fg;break;case 8:l=dg;break;default:l=Lc}a=l.bind(null,n,a,e),l=void 0,!ql||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(l=!0),i?l!==void 0?e.addEventListener(n,a,{capture:!0,passive:l}):e.addEventListener(n,a,!0):l!==void 0?e.addEventListener(n,a,{passive:l}):e.addEventListener(n,a,!1)}function Sc(e,n,a,i,l){var c=i;if((n&1)===0&&(n&2)===0&&i!==null)e:for(;;){if(i===null)return;var f=i.tag;if(f===3||f===4){var z=i.stateNode.containerInfo;if(z===l)break;if(f===4)for(f=i.return;f!==null;){var p=f.tag;if((p===3||p===4)&&f.stateNode.containerInfo===l)return;f=f.return}for(;z!==null;){if(f=_i(z),f===null)return;if(p=f.tag,p===5||p===6||p===26||p===27){i=c=f;continue e}z=z.parentNode}}i=i.return}Sf(function(){var C=c,S=Wl(a),x=[];e:{var D=id.get(e);if(D!==void 0){var T=is,K=e;switch(e){case"keypress":if(ns(a)===0)break e;case"keydown":case"keyup":T=Gp;break;case"focusin":K="focus",T=Il;break;case"focusout":K="blur",T=Il;break;case"beforeblur":case"afterblur":T=Il;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":T=Bf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":T=pp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":T=xp;break;case $f:case ed:case nd:T=jp;break;case ad:T=Rp;break;case"scroll":case"scrollend":T=wp;break;case"wheel":T=_p;break;case"copy":case"cut":case"paste":T=kp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":T=Nf;break;case"toggle":case"beforetoggle":T=Hp}var ne=(n&4)!==0,Ee=!ne&&(e==="scroll"||e==="scrollend"),j=ne?D!==null?D+"Capture":null:D;ne=[];for(var g=C,k;g!==null;){var O=g;if(k=O.stateNode,O=O.tag,O!==5&&O!==26&&O!==27||k===null||j===null||(O=Lt(g,j),O!=null&&ne.push(ko(g,O,k))),Ee)break;g=g.return}0<ne.length&&(D=new T(D,K,null,a,S),x.push({event:D,listeners:ne}))}}if((n&7)===0){e:{if(D=e==="mouseover"||e==="pointerover",T=e==="mouseout"||e==="pointerout",D&&a!==Zl&&(K=a.relatedTarget||a.fromElement)&&(_i(K)||K[Mi]))break e;if((T||D)&&(D=S.window===S?S:(D=S.ownerDocument)?D.defaultView||D.parentWindow:window,T?(K=a.relatedTarget||a.toElement,T=C,K=K?_i(K):null,K!==null&&(Ee=d(K),ne=K.tag,K!==Ee||ne!==5&&ne!==27&&ne!==6)&&(K=null)):(T=null,K=C),T!==K)){if(ne=Bf,O="onMouseLeave",j="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(ne=Nf,O="onPointerLeave",j="onPointerEnter",g="pointer"),Ee=T==null?D:Ut(T),k=K==null?D:Ut(K),D=new ne(O,g+"leave",T,a,S),D.target=Ee,D.relatedTarget=k,O=null,_i(S)===C&&(ne=new ne(j,g+"enter",K,a,S),ne.target=k,ne.relatedTarget=Ee,O=ne),Ee=O,T&&K)n:{for(ne=Pb,j=T,g=K,k=0,O=j;O;O=ne(O))k++;O=0;for(var X=g;X;X=ne(X))O++;for(;0<k-O;)j=ne(j),k--;for(;0<O-k;)g=ne(g),O--;for(;k--;){if(j===g||g!==null&&j===g.alternate){ne=j;break n}j=ne(j),g=ne(g)}ne=null}else ne=null;T!==null&&Cz(x,D,T,ne,!1),K!==null&&Ee!==null&&Cz(x,Ee,K,ne,!0)}}e:{if(D=C?Ut(C):window,T=D.nodeName&&D.nodeName.toLowerCase(),T==="select"||T==="input"&&D.type==="file")var be=Uf;else if(Jf(D))if(Lf)be=Xp;else{be=Yp;var Z=Wp}else T=D.nodeName,!T||T.toLowerCase()!=="input"||D.type!=="checkbox"&&D.type!=="radio"?C&&Kl(C.elementType)&&(be=Uf):be=qp;if(be&&(be=be(e,C))){Ff(x,be,a,S);break e}Z&&Z(e,D,C),e==="focusout"&&C&&D.type==="number"&&C.memoizedProps.value!=null&&Ll(D,"number",D.value)}switch(Z=C?Ut(C):window,e){case"focusin":(Jf(Z)||Z.contentEditable==="true")&&(Wi=Z,tr=C,Qt=null);break;case"focusout":Qt=tr=Wi=null;break;case"mousedown":or=!0;break;case"contextmenu":case"mouseup":case"dragend":or=!1,Qf(x,a,S);break;case"selectionchange":if(Qp)break;case"keydown":case"keyup":Qf(x,a,S)}var se;if(er)e:{switch(e){case"compositionstart":var ye="onCompositionStart";break e;case"compositionend":ye="onCompositionEnd";break e;case"compositionupdate":ye="onCompositionUpdate";break e}ye=void 0}else Zi?Pf(e,a)&&(ye="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(ye="onCompositionStart");ye&&(Rf&&a.locale!=="ko"&&(Zi||ye!=="onCompositionStart"?ye==="onCompositionEnd"&&Zi&&(se=Gf()):(Ba=S,Xl="value"in Ba?Ba.value:Ba.textContent,Zi=!0)),Z=Ys(C,ye),0<Z.length&&(ye=new xf(ye,e,null,a,S),x.push({event:ye,listeners:Z}),se?ye.data=se:(se=Hf(a),se!==null&&(ye.data=se)))),(se=Fp?Up(e,a):Lp(e,a))&&(ye=Ys(C,"onBeforeInput"),0<ye.length&&(Z=new xf("onBeforeInput","beforeinput",null,a,S),x.push({event:Z,listeners:ye}),Z.data=se)),Nb(x,e,C,a,S)}kz(x,n)})}function ko(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Ys(e,n){for(var a=n+"Capture",i=[];e!==null;){var l=e,c=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||c===null||(l=Lt(e,a),l!=null&&i.unshift(ko(e,l,c)),l=Lt(e,n),l!=null&&i.push(ko(e,l,c))),e.tag===3)return i;e=e.return}return[]}function Pb(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Cz(e,n,a,i,l){for(var c=n._reactName,f=[];a!==null&&a!==i;){var z=a,p=z.alternate,C=z.stateNode;if(z=z.tag,p!==null&&p===i)break;z!==5&&z!==26&&z!==27||C===null||(p=C,l?(C=Lt(a,c),C!=null&&f.unshift(ko(a,C,p))):l||(C=Lt(a,c),C!=null&&f.push(ko(a,C,p)))),a=a.return}f.length!==0&&e.push({event:n,listeners:f})}var Hb=/\r\n?/g,Jb=/\u0000|\uFFFD/g;function Dz(e){return(typeof e=="string"?e:""+e).replace(Hb,`
`).replace(Jb,"")}function Tz(e,n){return n=Dz(n),Dz(e)===n}function Te(e,n,a,i,l,c){switch(a){case"children":typeof i=="string"?n==="body"||n==="textarea"&&i===""||Ui(e,i):(typeof i=="number"||typeof i=="bigint")&&n!=="body"&&Ui(e,""+i);break;case"className":Qo(e,"class",i);break;case"tabIndex":Qo(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":Qo(e,a,i);break;case"style":Tf(e,i,c);break;case"data":if(n!=="object"){Qo(e,"data",i);break}case"src":case"href":if(i===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(a);break}i=$o(""+i),e.setAttribute(a,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof c=="function"&&(a==="formAction"?(n!=="input"&&Te(e,n,"name",l.name,l,null),Te(e,n,"formEncType",l.formEncType,l,null),Te(e,n,"formMethod",l.formMethod,l,null),Te(e,n,"formTarget",l.formTarget,l,null)):(Te(e,n,"encType",l.encType,l,null),Te(e,n,"method",l.method,l,null),Te(e,n,"target",l.target,l,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(a);break}i=$o(""+i),e.setAttribute(a,i);break;case"onClick":i!=null&&(e.onclick=ta);break;case"onScroll":i!=null&&de("scroll",e);break;case"onScrollEnd":i!=null&&de("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(r(61));if(a=i.__html,a!=null){if(l.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}a=$o(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(a,""+i):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":i===!0?e.setAttribute(a,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(a,i):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(a,i):e.removeAttribute(a);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(a):e.setAttribute(a,i);break;case"popover":de("beforetoggle",e),de("toggle",e),Vo(e,"popover",i);break;case"xlinkActuate":ia(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":ia(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":ia(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":ia(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":ia(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":ia(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":ia(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":ia(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":ia(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":Vo(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=zp.get(a)||a,Vo(e,a,i))}}function Gc(e,n,a,i,l,c){switch(a){case"style":Tf(e,i,c);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(r(61));if(a=i.__html,a!=null){if(l.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"children":typeof i=="string"?Ui(e,i):(typeof i=="number"||typeof i=="bigint")&&Ui(e,""+i);break;case"onScroll":i!=null&&de("scroll",e);break;case"onScrollEnd":i!=null&&de("scrollend",e);break;case"onClick":i!=null&&(e.onclick=ta);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!pf.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(l=a.endsWith("Capture"),n=a.slice(2,l?a.length-7:void 0),c=e[zn]||null,c=c!=null?c[a]:null,typeof c=="function"&&e.removeEventListener(n,c,l),typeof i=="function")){typeof c!="function"&&c!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,i,l);break e}a in e?e[a]=i:i===!0?e.setAttribute(a,""):Vo(e,a,i)}}}function sn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":de("error",e),de("load",e);var i=!1,l=!1,c;for(c in a)if(a.hasOwnProperty(c)){var f=a[c];if(f!=null)switch(c){case"src":i=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Te(e,n,c,f,a,null)}}l&&Te(e,n,"srcSet",a.srcSet,a,null),i&&Te(e,n,"src",a.src,a,null);return;case"input":de("invalid",e);var z=c=f=l=null,p=null,C=null;for(i in a)if(a.hasOwnProperty(i)){var S=a[i];if(S!=null)switch(i){case"name":l=S;break;case"type":f=S;break;case"checked":p=S;break;case"defaultChecked":C=S;break;case"value":c=S;break;case"defaultValue":z=S;break;case"children":case"dangerouslySetInnerHTML":if(S!=null)throw Error(r(137,n));break;default:Te(e,n,i,S,a,null)}}kf(e,c,z,p,C,f,l,!1);return;case"select":de("invalid",e),i=f=c=null;for(l in a)if(a.hasOwnProperty(l)&&(z=a[l],z!=null))switch(l){case"value":c=z;break;case"defaultValue":f=z;break;case"multiple":i=z;default:Te(e,n,l,z,a,null)}n=c,a=f,e.multiple=!!i,n!=null?Fi(e,!!i,n,!1):a!=null&&Fi(e,!!i,a,!0);return;case"textarea":de("invalid",e),c=l=i=null;for(f in a)if(a.hasOwnProperty(f)&&(z=a[f],z!=null))switch(f){case"value":i=z;break;case"defaultValue":l=z;break;case"children":c=z;break;case"dangerouslySetInnerHTML":if(z!=null)throw Error(r(91));break;default:Te(e,n,f,z,a,null)}Cf(e,i,l,c);return;case"option":for(p in a)a.hasOwnProperty(p)&&(i=a[p],i!=null)&&(p==="selected"?e.selected=i&&typeof i!="function"&&typeof i!="symbol":Te(e,n,p,i,a,null));return;case"dialog":de("beforetoggle",e),de("toggle",e),de("cancel",e),de("close",e);break;case"iframe":case"object":de("load",e);break;case"video":case"audio":for(i=0;i<vo.length;i++)de(vo[i],e);break;case"image":de("error",e),de("load",e);break;case"details":de("toggle",e);break;case"embed":case"source":case"link":de("error",e),de("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(C in a)if(a.hasOwnProperty(C)&&(i=a[C],i!=null))switch(C){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Te(e,n,C,i,a,null)}return;default:if(Kl(n)){for(S in a)a.hasOwnProperty(S)&&(i=a[S],i!==void 0&&Gc(e,n,S,i,a,void 0));return}}for(z in a)a.hasOwnProperty(z)&&(i=a[z],i!=null&&Te(e,n,z,i,a,null))}function Fb(e,n,a,i){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,c=null,f=null,z=null,p=null,C=null,S=null;for(T in a){var x=a[T];if(a.hasOwnProperty(T)&&x!=null)switch(T){case"checked":break;case"value":break;case"defaultValue":p=x;default:i.hasOwnProperty(T)||Te(e,n,T,null,i,x)}}for(var D in i){var T=i[D];if(x=a[D],i.hasOwnProperty(D)&&(T!=null||x!=null))switch(D){case"type":c=T;break;case"name":l=T;break;case"checked":C=T;break;case"defaultChecked":S=T;break;case"value":f=T;break;case"defaultValue":z=T;break;case"children":case"dangerouslySetInnerHTML":if(T!=null)throw Error(r(137,n));break;default:T!==x&&Te(e,n,D,T,i,x)}}Ul(e,f,z,p,C,S,c,l);return;case"select":T=f=z=D=null;for(c in a)if(p=a[c],a.hasOwnProperty(c)&&p!=null)switch(c){case"value":break;case"multiple":T=p;default:i.hasOwnProperty(c)||Te(e,n,c,null,i,p)}for(l in i)if(c=i[l],p=a[l],i.hasOwnProperty(l)&&(c!=null||p!=null))switch(l){case"value":D=c;break;case"defaultValue":z=c;break;case"multiple":f=c;default:c!==p&&Te(e,n,l,c,i,p)}n=z,a=f,i=T,D!=null?Fi(e,!!a,D,!1):!!i!=!!a&&(n!=null?Fi(e,!!a,n,!0):Fi(e,!!a,a?[]:"",!1));return;case"textarea":T=D=null;for(z in a)if(l=a[z],a.hasOwnProperty(z)&&l!=null&&!i.hasOwnProperty(z))switch(z){case"value":break;case"children":break;default:Te(e,n,z,null,i,l)}for(f in i)if(l=i[f],c=a[f],i.hasOwnProperty(f)&&(l!=null||c!=null))switch(f){case"value":D=l;break;case"defaultValue":T=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(r(91));break;default:l!==c&&Te(e,n,f,l,i,c)}Af(e,D,T);return;case"option":for(var K in a)D=a[K],a.hasOwnProperty(K)&&D!=null&&!i.hasOwnProperty(K)&&(K==="selected"?e.selected=!1:Te(e,n,K,null,i,D));for(p in i)D=i[p],T=a[p],i.hasOwnProperty(p)&&D!==T&&(D!=null||T!=null)&&(p==="selected"?e.selected=D&&typeof D!="function"&&typeof D!="symbol":Te(e,n,p,D,i,T));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ne in a)D=a[ne],a.hasOwnProperty(ne)&&D!=null&&!i.hasOwnProperty(ne)&&Te(e,n,ne,null,i,D);for(C in i)if(D=i[C],T=a[C],i.hasOwnProperty(C)&&D!==T&&(D!=null||T!=null))switch(C){case"children":case"dangerouslySetInnerHTML":if(D!=null)throw Error(r(137,n));break;default:Te(e,n,C,D,i,T)}return;default:if(Kl(n)){for(var Ee in a)D=a[Ee],a.hasOwnProperty(Ee)&&D!==void 0&&!i.hasOwnProperty(Ee)&&Gc(e,n,Ee,void 0,i,D);for(S in i)D=i[S],T=a[S],!i.hasOwnProperty(S)||D===T||D===void 0&&T===void 0||Gc(e,n,S,D,i,T);return}}for(var j in a)D=a[j],a.hasOwnProperty(j)&&D!=null&&!i.hasOwnProperty(j)&&Te(e,n,j,null,i,D);for(x in i)D=i[x],T=a[x],!i.hasOwnProperty(x)||D===T||D==null&&T==null||Te(e,n,x,D,i,T)}function Ez(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Ub(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),i=0;i<a.length;i++){var l=a[i],c=l.transferSize,f=l.initiatorType,z=l.duration;if(c&&z&&Ez(f)){for(f=0,z=l.responseEnd,i+=1;i<a.length;i++){var p=a[i],C=p.startTime;if(C>z)break;var S=p.transferSize,x=p.initiatorType;S&&Ez(x)&&(p=p.responseEnd,f+=S*(p<z?1:(z-C)/(p-C)))}if(--i,n+=8*(c+f)/(l.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Oc=null,Bc=null;function qs(e){return e.nodeType===9?e:e.ownerDocument}function Sz(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Gz(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function xc(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Nc=null;function Lb(){var e=window.event;return e&&e.type==="popstate"?e===Nc?!1:(Nc=e,!0):(Nc=null,!1)}var Oz=typeof setTimeout=="function"?setTimeout:void 0,Kb=typeof clearTimeout=="function"?clearTimeout:void 0,Bz=typeof Promise=="function"?Promise:void 0,Zb=typeof queueMicrotask=="function"?queueMicrotask:typeof Bz<"u"?function(e){return Bz.resolve(null).then(e).catch(Wb)}:Oz;function Wb(e){setTimeout(function(){throw e})}function Xa(e){return e==="head"}function xz(e,n){var a=n,i=0;do{var l=a.nextSibling;if(e.removeChild(a),l&&l.nodeType===8)if(a=l.data,a==="/$"||a==="/&"){if(i===0){e.removeChild(l),bt(n);return}i--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")i++;else if(a==="html")Ao(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Ao(a);for(var c=a.firstChild;c;){var f=c.nextSibling,z=c.nodeName;c[Ft]||z==="SCRIPT"||z==="STYLE"||z==="LINK"&&c.rel.toLowerCase()==="stylesheet"||a.removeChild(c),c=f}}else a==="body"&&Ao(e.ownerDocument.body);a=l}while(a);bt(n)}function Nz(e,n){var a=e;e=0;do{var i=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),i&&i.nodeType===8)if(a=i.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=i}while(a)}function Rc(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Rc(a),Jl(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Yb(e,n,a,i){for(;e.nodeType===1;){var l=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[Ft])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(c=e.getAttribute("rel"),c==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(c!==l.rel||e.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||e.getAttribute("title")!==(l.title==null?null:l.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(c=e.getAttribute("src"),(c!==(l.src==null?null:l.src)||e.getAttribute("type")!==(l.type==null?null:l.type)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&c&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var c=l.name==null?null:""+l.name;if(l.type==="hidden"&&e.getAttribute("name")===c)return e}else return e;if(e=Jn(e.nextSibling),e===null)break}return null}function qb(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Jn(e.nextSibling),e===null))return null;return e}function Rz(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Jn(e.nextSibling),e===null))return null;return e}function Mc(e){return e.data==="$?"||e.data==="$~"}function _c(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Xb(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var i=function(){n(),a.removeEventListener("DOMContentLoaded",i)};a.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function Jn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var Pc=null;function Mz(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return Jn(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function _z(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function Pz(e,n,a){switch(n=qs(a),e){case"html":if(e=n.documentElement,!e)throw Error(r(452));return e;case"head":if(e=n.head,!e)throw Error(r(453));return e;case"body":if(e=n.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function Ao(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Jl(e)}var Fn=new Map,Hz=new Set;function Xs(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ga=P.d;P.d={f:Vb,r:Qb,D:Ib,C:$b,L:eg,m:ng,X:ig,S:ag,M:tg};function Vb(){var e=ga.f(),n=Js();return e||n}function Qb(e){var n=Pi(e);n!==null&&n.tag===5&&n.type==="form"?am(n):ga.r(e)}var wt=typeof document>"u"?null:document;function Jz(e,n,a){var i=wt;if(i&&typeof n=="string"&&n){var l=xn(n);l='link[rel="'+e+'"][href="'+l+'"]',typeof a=="string"&&(l+='[crossorigin="'+a+'"]'),Hz.has(l)||(Hz.add(l),e={rel:e,crossOrigin:a,href:n},i.querySelector(l)===null&&(n=i.createElement("link"),sn(n,"link",e),Ie(n),i.head.appendChild(n)))}}function Ib(e){ga.D(e),Jz("dns-prefetch",e,null)}function $b(e,n){ga.C(e,n),Jz("preconnect",e,n)}function eg(e,n,a){ga.L(e,n,a);var i=wt;if(i&&e&&n){var l='link[rel="preload"][as="'+xn(n)+'"]';n==="image"&&a&&a.imageSrcSet?(l+='[imagesrcset="'+xn(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(l+='[imagesizes="'+xn(a.imageSizes)+'"]')):l+='[href="'+xn(e)+'"]';var c=l;switch(n){case"style":c=ht(e);break;case"script":c=pt(e)}Fn.has(c)||(e=A({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),Fn.set(c,e),i.querySelector(l)!==null||n==="style"&&i.querySelector(Co(c))||n==="script"&&i.querySelector(Do(c))||(n=i.createElement("link"),sn(n,"link",e),Ie(n),i.head.appendChild(n)))}}function ng(e,n){ga.m(e,n);var a=wt;if(a&&e){var i=n&&typeof n.as=="string"?n.as:"script",l='link[rel="modulepreload"][as="'+xn(i)+'"][href="'+xn(e)+'"]',c=l;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":c=pt(e)}if(!Fn.has(c)&&(e=A({rel:"modulepreload",href:e},n),Fn.set(c,e),a.querySelector(l)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Do(c)))return}i=a.createElement("link"),sn(i,"link",e),Ie(i),a.head.appendChild(i)}}}function ag(e,n,a){ga.S(e,n,a);var i=wt;if(i&&e){var l=Hi(i).hoistableStyles,c=ht(e);n=n||"default";var f=l.get(c);if(!f){var z={loading:0,preload:null};if(f=i.querySelector(Co(c)))z.loading=5;else{e=A({rel:"stylesheet",href:e,"data-precedence":n},a),(a=Fn.get(c))&&Hc(e,a);var p=f=i.createElement("link");Ie(p),sn(p,"link",e),p._p=new Promise(function(C,S){p.onload=C,p.onerror=S}),p.addEventListener("load",function(){z.loading|=1}),p.addEventListener("error",function(){z.loading|=2}),z.loading|=4,Vs(f,n,i)}f={type:"stylesheet",instance:f,count:1,state:z},l.set(c,f)}}}function ig(e,n){ga.X(e,n);var a=wt;if(a&&e){var i=Hi(a).hoistableScripts,l=pt(e),c=i.get(l);c||(c=a.querySelector(Do(l)),c||(e=A({src:e,async:!0},n),(n=Fn.get(l))&&Jc(e,n),c=a.createElement("script"),Ie(c),sn(c,"link",e),a.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},i.set(l,c))}}function tg(e,n){ga.M(e,n);var a=wt;if(a&&e){var i=Hi(a).hoistableScripts,l=pt(e),c=i.get(l);c||(c=a.querySelector(Do(l)),c||(e=A({src:e,async:!0,type:"module"},n),(n=Fn.get(l))&&Jc(e,n),c=a.createElement("script"),Ie(c),sn(c,"link",e),a.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},i.set(l,c))}}function Fz(e,n,a,i){var l=(l=oe.current)?Xs(l):null;if(!l)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=ht(a.href),a=Hi(l).hoistableStyles,i=a.get(n),i||(i={type:"style",instance:null,count:0,state:null},a.set(n,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=ht(a.href);var c=Hi(l).hoistableStyles,f=c.get(e);if(f||(l=l.ownerDocument||l,f={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},c.set(e,f),(c=l.querySelector(Co(e)))&&!c._p&&(f.instance=c,f.state.loading=5),Fn.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Fn.set(e,a),c||og(l,e,a,f.state))),n&&i===null)throw Error(r(528,""));return f}if(n&&i!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=pt(a),a=Hi(l).hoistableScripts,i=a.get(n),i||(i={type:"script",instance:null,count:0,state:null},a.set(n,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function ht(e){return'href="'+xn(e)+'"'}function Co(e){return'link[rel="stylesheet"]['+e+"]"}function Uz(e){return A({},e,{"data-precedence":e.precedence,precedence:null})}function og(e,n,a,i){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?i.loading=1:(n=e.createElement("link"),i.preload=n,n.addEventListener("load",function(){return i.loading|=1}),n.addEventListener("error",function(){return i.loading|=2}),sn(n,"link",a),Ie(n),e.head.appendChild(n))}function pt(e){return'[src="'+xn(e)+'"]'}function Do(e){return"script[async]"+e}function Lz(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var i=e.querySelector('style[data-href~="'+xn(a.href)+'"]');if(i)return n.instance=i,Ie(i),i;var l=A({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),Ie(i),sn(i,"style",l),Vs(i,a.precedence,e),n.instance=i;case"stylesheet":l=ht(a.href);var c=e.querySelector(Co(l));if(c)return n.state.loading|=4,n.instance=c,Ie(c),c;i=Uz(a),(l=Fn.get(l))&&Hc(i,l),c=(e.ownerDocument||e).createElement("link"),Ie(c);var f=c;return f._p=new Promise(function(z,p){f.onload=z,f.onerror=p}),sn(c,"link",i),n.state.loading|=4,Vs(c,a.precedence,e),n.instance=c;case"script":return c=pt(a.src),(l=e.querySelector(Do(c)))?(n.instance=l,Ie(l),l):(i=a,(l=Fn.get(c))&&(i=A({},a),Jc(i,l)),e=e.ownerDocument||e,l=e.createElement("script"),Ie(l),sn(l,"link",i),e.head.appendChild(l),n.instance=l);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(i=n.instance,n.state.loading|=4,Vs(i,a.precedence,e));return n.instance}function Vs(e,n,a){for(var i=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=i.length?i[i.length-1]:null,c=l,f=0;f<i.length;f++){var z=i[f];if(z.dataset.precedence===n)c=z;else if(c!==l)break}c?c.parentNode.insertBefore(e,c.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Hc(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Jc(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Qs=null;function Kz(e,n,a){if(Qs===null){var i=new Map,l=Qs=new Map;l.set(a,i)}else l=Qs,i=l.get(a),i||(i=new Map,l.set(a,i));if(i.has(e))return i;for(i.set(e,null),a=a.getElementsByTagName(e),l=0;l<a.length;l++){var c=a[l];if(!(c[Ft]||c[nn]||e==="link"&&c.getAttribute("rel")==="stylesheet")&&c.namespaceURI!=="http://www.w3.org/2000/svg"){var f=c.getAttribute(n)||"";f=e+f;var z=i.get(f);z?z.push(c):i.set(f,[c])}}return i}function Zz(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function sg(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(e=n.disabled,typeof n.precedence=="string"&&e==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Wz(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function lg(e,n,a,i){if(a.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var l=ht(i.href),c=n.querySelector(Co(l));if(c){n=c._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=Is.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=c,Ie(c);return}c=n.ownerDocument||n,i=Uz(i),(l=Fn.get(l))&&Hc(i,l),c=c.createElement("link"),Ie(c);var f=c;f._p=new Promise(function(z,p){f.onload=z,f.onerror=p}),sn(c,"link",i),a.instance=c}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Is.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var Fc=0;function rg(e,n){return e.stylesheets&&e.count===0&&el(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var i=setTimeout(function(){if(e.stylesheets&&el(e,e.stylesheets),e.unsuspend){var c=e.unsuspend;e.unsuspend=null,c()}},6e4+n);0<e.imgBytes&&Fc===0&&(Fc=62500*Ub());var l=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&el(e,e.stylesheets),e.unsuspend)){var c=e.unsuspend;e.unsuspend=null,c()}},(e.imgBytes>Fc?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(l)}}:null}function Is(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)el(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var $s=null;function el(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,$s=new Map,n.forEach(cg,e),$s=null,Is.call(e))}function cg(e,n){if(!(n.state.loading&4)){var a=$s.get(e);if(a)var i=a.get(null);else{a=new Map,$s.set(e,a);for(var l=e.querySelectorAll("link[data-precedence],style[data-precedence]"),c=0;c<l.length;c++){var f=l[c];(f.nodeName==="LINK"||f.getAttribute("media")!=="not all")&&(a.set(f.dataset.precedence,f),i=f)}i&&a.set(null,i)}l=n.instance,f=l.getAttribute("data-precedence"),c=a.get(f)||i,c===i&&a.set(null,l),a.set(f,l),this.count++,i=Is.bind(this),l.addEventListener("load",i),l.addEventListener("error",i),c?c.parentNode.insertBefore(l,c.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(l,e.firstChild)),n.state.loading|=4}}var To={$$typeof:I,Provider:null,Consumer:null,_currentValue:J,_currentValue2:J,_threadCount:0};function ug(e,n,a,i,l,c,f,z,p){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ml(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ml(0),this.hiddenUpdates=Ml(null),this.identifierPrefix=i,this.onUncaughtError=l,this.onCaughtError=c,this.onRecoverableError=f,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=p,this.incompleteTransitions=new Map}function Yz(e,n,a,i,l,c,f,z,p,C,S,x){return e=new ug(e,n,a,f,p,C,S,x,z),n=1,c===!0&&(n|=24),c=An(3,null,null,n),e.current=c,c.stateNode=e,n=gr(),n.refCount++,e.pooledCache=n,n.refCount++,c.memoizedState={element:i,isDehydrated:a,cache:n},Ar(c),e}function qz(e){return e?(e=Xi,e):Xi}function Xz(e,n,a,i,l,c){l=qz(l),i.context===null?i.context=l:i.pendingContext=l,i=Pa(n),i.payload={element:a},c=c===void 0?null:c,c!==null&&(i.callback=c),a=Ha(e,i,n),a!==null&&(gn(a,e,n),to(a,e,n))}function Vz(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Uc(e,n){Vz(e,n),(e=e.alternate)&&Vz(e,n)}function Qz(e){if(e.tag===13||e.tag===31){var n=di(e,67108864);n!==null&&gn(n,e,67108864),Uc(e,67108864)}}function Iz(e){if(e.tag===13||e.tag===31){var n=Sn();n=_l(n);var a=di(e,n);a!==null&&gn(a,e,n),Uc(e,n)}}var nl=!0;function fg(e,n,a,i){var l=E.T;E.T=null;var c=P.p;try{P.p=2,Lc(e,n,a,i)}finally{P.p=c,E.T=l}}function dg(e,n,a,i){var l=E.T;E.T=null;var c=P.p;try{P.p=8,Lc(e,n,a,i)}finally{P.p=c,E.T=l}}function Lc(e,n,a,i){if(nl){var l=Kc(i);if(l===null)Sc(e,n,i,al,a),ey(e,i);else if(zg(l,e,n,a,i))i.stopPropagation();else if(ey(e,i),n&4&&-1<mg.indexOf(e)){for(;l!==null;){var c=Pi(l);if(c!==null)switch(c.tag){case 3:if(c=c.stateNode,c.current.memoizedState.isDehydrated){var f=li(c.pendingLanes);if(f!==0){var z=c;for(z.pendingLanes|=2,z.entangledLanes|=2;f;){var p=1<<31-vn(f);z.entanglements[1]|=p,f&=~p}$n(c),(ve&6)===0&&(Ps=cn()+500,jo(0))}}break;case 31:case 13:z=di(c,2),z!==null&&gn(z,c,2),Js(),Uc(c,2)}if(c=Kc(i),c===null&&Sc(e,n,i,al,a),c===l)break;l=c}l!==null&&i.stopPropagation()}else Sc(e,n,i,null,a)}}function Kc(e){return e=Wl(e),Zc(e)}var al=null;function Zc(e){if(al=null,e=_i(e),e!==null){var n=d(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=m(n),e!==null)return e;e=null}else if(a===31){if(e=y(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return al=e,null}function $z(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Rl()){case pe:return 2;case aa:return 8;case si:case $h:return 32;case cf:return 268435456;default:return 32}default:return 32}}var Wc=!1,Va=null,Qa=null,Ia=null,Eo=new Map,So=new Map,$a=[],mg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function ey(e,n){switch(e){case"focusin":case"focusout":Va=null;break;case"dragenter":case"dragleave":Qa=null;break;case"mouseover":case"mouseout":Ia=null;break;case"pointerover":case"pointerout":Eo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":So.delete(n.pointerId)}}function Go(e,n,a,i,l,c){return e===null||e.nativeEvent!==c?(e={blockedOn:n,domEventName:a,eventSystemFlags:i,nativeEvent:c,targetContainers:[l]},n!==null&&(n=Pi(n),n!==null&&Qz(n)),e):(e.eventSystemFlags|=i,n=e.targetContainers,l!==null&&n.indexOf(l)===-1&&n.push(l),e)}function zg(e,n,a,i,l){switch(n){case"focusin":return Va=Go(Va,e,n,a,i,l),!0;case"dragenter":return Qa=Go(Qa,e,n,a,i,l),!0;case"mouseover":return Ia=Go(Ia,e,n,a,i,l),!0;case"pointerover":var c=l.pointerId;return Eo.set(c,Go(Eo.get(c)||null,e,n,a,i,l)),!0;case"gotpointercapture":return c=l.pointerId,So.set(c,Go(So.get(c)||null,e,n,a,i,l)),!0}return!1}function ny(e){var n=_i(e.target);if(n!==null){var a=d(n);if(a!==null){if(n=a.tag,n===13){if(n=m(a),n!==null){e.blockedOn=n,yf(e.priority,function(){Iz(a)});return}}else if(n===31){if(n=y(a),n!==null){e.blockedOn=n,yf(e.priority,function(){Iz(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function il(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=Kc(e.nativeEvent);if(a===null){a=e.nativeEvent;var i=new a.constructor(a.type,a);Zl=i,a.target.dispatchEvent(i),Zl=null}else return n=Pi(a),n!==null&&Qz(n),e.blockedOn=a,!1;n.shift()}return!0}function ay(e,n,a){il(e)&&a.delete(n)}function yg(){Wc=!1,Va!==null&&il(Va)&&(Va=null),Qa!==null&&il(Qa)&&(Qa=null),Ia!==null&&il(Ia)&&(Ia=null),Eo.forEach(ay),So.forEach(ay)}function tl(e,n){e.blockedOn===n&&(e.blockedOn=null,Wc||(Wc=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,yg)))}var ol=null;function iy(e){ol!==e&&(ol=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){ol===e&&(ol=null);for(var n=0;n<e.length;n+=3){var a=e[n],i=e[n+1],l=e[n+2];if(typeof i!="function"){if(Zc(i||a)===null)continue;break}var c=Pi(a);c!==null&&(e.splice(n,3),n-=3,Kr(c,{pending:!0,data:l,method:a.method,action:i},i,l))}}))}function bt(e){function n(p){return tl(p,e)}Va!==null&&tl(Va,e),Qa!==null&&tl(Qa,e),Ia!==null&&tl(Ia,e),Eo.forEach(n),So.forEach(n);for(var a=0;a<$a.length;a++){var i=$a[a];i.blockedOn===e&&(i.blockedOn=null)}for(;0<$a.length&&(a=$a[0],a.blockedOn===null);)ny(a),a.blockedOn===null&&$a.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(i=0;i<a.length;i+=3){var l=a[i],c=a[i+1],f=l[zn]||null;if(typeof c=="function")f||iy(a);else if(f){var z=null;if(c&&c.hasAttribute("formAction")){if(l=c,f=c[zn]||null)z=f.formAction;else if(Zc(l)!==null)continue}else z=f.action;typeof z=="function"?a[i+1]=z:(a.splice(i,3),i-=3),iy(a)}}}function ty(){function e(c){c.canIntercept&&c.info==="react-transition"&&c.intercept({handler:function(){return new Promise(function(f){return l=f})},focusReset:"manual",scroll:"manual"})}function n(){l!==null&&(l(),l=null),i||setTimeout(a,20)}function a(){if(!i&&!navigation.transition){var c=navigation.currentEntry;c&&c.url!=null&&navigation.navigate(c.url,{state:c.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,l=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),l!==null&&(l(),l=null)}}}function Yc(e){this._internalRoot=e}sl.prototype.render=Yc.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,i=Sn();Xz(a,i,e,n,null,null)},sl.prototype.unmount=Yc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Xz(e.current,2,null,e,null,null),Js(),n[Mi]=null}};function sl(e){this._internalRoot=e}sl.prototype.unstable_scheduleHydration=function(e){if(e){var n=zf();e={blockedOn:null,target:e,priority:n};for(var a=0;a<$a.length&&n!==0&&n<$a[a].priority;a++);$a.splice(a,0,e),a===0&&ny(e)}};var oy=t.version;if(oy!=="19.2.3")throw Error(r(527,oy,"19.2.3"));P.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=w(n),e=e!==null?v(e):null,e=e===null?null:e.stateNode,e};var wg={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:E,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ll=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ll.isDisabled&&ll.supportsFiber)try{Pt=ll.inject(wg),jn=ll}catch{}}return Bo.createRoot=function(e,n){if(!u(e))throw Error(r(299));var a=!1,i="",l=dm,c=mm,f=zm;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onUncaughtError!==void 0&&(l=n.onUncaughtError),n.onCaughtError!==void 0&&(c=n.onCaughtError),n.onRecoverableError!==void 0&&(f=n.onRecoverableError)),n=Yz(e,1,!1,null,null,a,i,null,l,c,f,ty),e[Mi]=n.current,Ec(e),new Yc(n)},Bo.hydrateRoot=function(e,n,a){if(!u(e))throw Error(r(299));var i=!1,l="",c=dm,f=mm,z=zm,p=null;return a!=null&&(a.unstable_strictMode===!0&&(i=!0),a.identifierPrefix!==void 0&&(l=a.identifierPrefix),a.onUncaughtError!==void 0&&(c=a.onUncaughtError),a.onCaughtError!==void 0&&(f=a.onCaughtError),a.onRecoverableError!==void 0&&(z=a.onRecoverableError),a.formState!==void 0&&(p=a.formState)),n=Yz(e,1,!0,n,a??null,i,l,p,c,f,z,ty),n.context=qz(null),a=n.current,i=Sn(),i=_l(i),l=Pa(i),l.callback=null,Ha(a,l,i),a=i,n.current.lanes=a,Jt(n,a),$n(n),e[Mi]=n.current,Ec(e),new sl(n)},Bo.version="19.2.3",Bo}var gw;function sC(){if(gw)return yu.exports;gw=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),yu.exports=oC(),yu.exports}var lC=sC();const rC=lC.createRoot(document.getElementById("root"));rC.render(R.jsx(N.StrictMode,{children:R.jsx(aC,{})}));
