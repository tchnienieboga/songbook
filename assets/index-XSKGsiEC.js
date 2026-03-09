(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))c(u);new MutationObserver(u=>{for(const d of u)if(d.type==="childList")for(const z of d.addedNodes)z.tagName==="LINK"&&z.rel==="modulepreload"&&c(z)}).observe(document,{childList:!0,subtree:!0});function s(u){const d={};return u.integrity&&(d.integrity=u.integrity),u.referrerPolicy&&(d.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?d.credentials="include":u.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function c(u){if(u.ep)return;u.ep=!0;const d=s(u);fetch(u.href,d)}})();function kl(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var Yr={exports:{}},xo={};var oy;function hb(){if(oy)return xo;oy=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function s(c,u,d){var z=null;if(d!==void 0&&(z=""+d),u.key!==void 0&&(z=""+u.key),"key"in u){d={};for(var y in u)y!=="key"&&(d[y]=u[y])}else d=u;return u=d.ref,{$$typeof:o,type:c,key:z,ref:u!==void 0?u:null,props:d}}return xo.Fragment=t,xo.jsx=s,xo.jsxs=s,xo}var sy;function gb(){return sy||(sy=1,Yr.exports=hb()),Yr.exports}var N=gb(),qr={exports:{}},ae={};var ly;function pb(){if(ly)return ae;ly=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),d=Symbol.for("react.consumer"),z=Symbol.for("react.context"),y=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),w=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),k=Symbol.for("react.activity"),G=Symbol.iterator;function M(p){return p===null||typeof p!="object"?null:(p=G&&p[G]||p["@@iterator"],typeof p=="function"?p:null)}var K={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},U=Object.assign,ee={};function q(p,x,J){this.props=p,this.context=x,this.refs=ee,this.updater=J||K}q.prototype.isReactComponent={},q.prototype.setState=function(p,x){if(typeof p!="object"&&typeof p!="function"&&p!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,p,x,"setState")},q.prototype.forceUpdate=function(p){this.updater.enqueueForceUpdate(this,p,"forceUpdate")};function W(){}W.prototype=q.prototype;function I(p,x,J){this.props=p,this.context=x,this.refs=ee,this.updater=J||K}var ue=I.prototype=new W;ue.constructor=I,U(ue,q.prototype),ue.isPureReactComponent=!0;var Y=Array.isArray;function re(){}var Q={H:null,A:null,T:null,S:null},xe=Object.prototype.hasOwnProperty;function Qe(p,x,J){var F=J.ref;return{$$typeof:o,type:p,key:x,ref:F!==void 0?F:null,props:J}}function dn(p,x){return Qe(p.type,x,p.props)}function cn(p){return typeof p=="object"&&p!==null&&p.$$typeof===o}function $(p){var x={"=":"=0",":":"=2"};return"$"+p.replace(/[=:]/g,function(J){return x[J]})}var Me=/\/+/g;function je(p,x){return typeof p=="object"&&p!==null&&p.key!=null?$(""+p.key):x.toString(36)}function Je(p){switch(p.status){case"fulfilled":return p.value;case"rejected":throw p.reason;default:switch(typeof p.status=="string"?p.then(re,re):(p.status="pending",p.then(function(x){p.status==="pending"&&(p.status="fulfilled",p.value=x)},function(x){p.status==="pending"&&(p.status="rejected",p.reason=x)})),p.status){case"fulfilled":return p.value;case"rejected":throw p.reason}}throw p}function T(p,x,J,F,ie){var oe=typeof p;(oe==="undefined"||oe==="boolean")&&(p=null);var we=!1;if(p===null)we=!0;else switch(oe){case"bigint":case"string":case"number":we=!0;break;case"object":switch(p.$$typeof){case o:case t:we=!0;break;case v:return we=p._init,T(we(p._payload),x,J,F,ie)}}if(we)return ie=ie(p),we=F===""?"."+je(p,0):F,Y(ie)?(J="",we!=null&&(J=we.replace(Me,"$&/")+"/"),T(ie,x,J,"",function(xn){return xn})):ie!=null&&(cn(ie)&&(ie=dn(ie,J+(ie.key==null||p&&p.key===ie.key?"":(""+ie.key).replace(Me,"$&/")+"/")+we)),x.push(ie)),1;we=0;var Xe=F===""?".":F+":";if(Y(p))for(var Ee=0;Ee<p.length;Ee++)F=p[Ee],oe=Xe+je(F,Ee),we+=T(F,x,J,oe,ie);else if(Ee=M(p),typeof Ee=="function")for(p=Ee.call(p),Ee=0;!(F=p.next()).done;)F=F.value,oe=Xe+je(F,Ee++),we+=T(F,x,J,oe,ie);else if(oe==="object"){if(typeof p.then=="function")return T(Je(p),x,J,F,ie);throw x=String(p),Error("Objects are not valid as a React child (found: "+(x==="[object Object]"?"object with keys {"+Object.keys(p).join(", ")+"}":x)+"). If you meant to render a collection of children, use an array instead.")}return we}function P(p,x,J){if(p==null)return p;var F=[],ie=0;return T(p,F,"","",function(oe){return x.call(J,oe,ie++)}),F}function H(p){if(p._status===-1){var x=p._result;x=x(),x.then(function(J){(p._status===0||p._status===-1)&&(p._status=1,p._result=J)},function(J){(p._status===0||p._status===-1)&&(p._status=2,p._result=J)}),p._status===-1&&(p._status=0,p._result=x)}if(p._status===1)return p._result.default;throw p._result}var ce=typeof reportError=="function"?reportError:function(p){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var x=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof p=="object"&&p!==null&&typeof p.message=="string"?String(p.message):String(p),error:p});if(!window.dispatchEvent(x))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",p);return}console.error(p)},me={map:P,forEach:function(p,x,J){P(p,function(){x.apply(this,arguments)},J)},count:function(p){var x=0;return P(p,function(){x++}),x},toArray:function(p){return P(p,function(x){return x})||[]},only:function(p){if(!cn(p))throw Error("React.Children.only expected to receive a single React element child.");return p}};return ae.Activity=k,ae.Children=me,ae.Component=q,ae.Fragment=s,ae.Profiler=u,ae.PureComponent=I,ae.StrictMode=c,ae.Suspense=h,ae.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Q,ae.__COMPILER_RUNTIME={__proto__:null,c:function(p){return Q.H.useMemoCache(p)}},ae.cache=function(p){return function(){return p.apply(null,arguments)}},ae.cacheSignal=function(){return null},ae.cloneElement=function(p,x,J){if(p==null)throw Error("The argument must be a React element, but you passed "+p+".");var F=U({},p.props),ie=p.key;if(x!=null)for(oe in x.key!==void 0&&(ie=""+x.key),x)!xe.call(x,oe)||oe==="key"||oe==="__self"||oe==="__source"||oe==="ref"&&x.ref===void 0||(F[oe]=x[oe]);var oe=arguments.length-2;if(oe===1)F.children=J;else if(1<oe){for(var we=Array(oe),Xe=0;Xe<oe;Xe++)we[Xe]=arguments[Xe+2];F.children=we}return Qe(p.type,ie,F)},ae.createContext=function(p){return p={$$typeof:z,_currentValue:p,_currentValue2:p,_threadCount:0,Provider:null,Consumer:null},p.Provider=p,p.Consumer={$$typeof:d,_context:p},p},ae.createElement=function(p,x,J){var F,ie={},oe=null;if(x!=null)for(F in x.key!==void 0&&(oe=""+x.key),x)xe.call(x,F)&&F!=="key"&&F!=="__self"&&F!=="__source"&&(ie[F]=x[F]);var we=arguments.length-2;if(we===1)ie.children=J;else if(1<we){for(var Xe=Array(we),Ee=0;Ee<we;Ee++)Xe[Ee]=arguments[Ee+2];ie.children=Xe}if(p&&p.defaultProps)for(F in we=p.defaultProps,we)ie[F]===void 0&&(ie[F]=we[F]);return Qe(p,oe,ie)},ae.createRef=function(){return{current:null}},ae.forwardRef=function(p){return{$$typeof:y,render:p}},ae.isValidElement=cn,ae.lazy=function(p){return{$$typeof:v,_payload:{_status:-1,_result:p},_init:H}},ae.memo=function(p,x){return{$$typeof:w,type:p,compare:x===void 0?null:x}},ae.startTransition=function(p){var x=Q.T,J={};Q.T=J;try{var F=p(),ie=Q.S;ie!==null&&ie(J,F),typeof F=="object"&&F!==null&&typeof F.then=="function"&&F.then(re,ce)}catch(oe){ce(oe)}finally{x!==null&&J.types!==null&&(x.types=J.types),Q.T=x}},ae.unstable_useCacheRefresh=function(){return Q.H.useCacheRefresh()},ae.use=function(p){return Q.H.use(p)},ae.useActionState=function(p,x,J){return Q.H.useActionState(p,x,J)},ae.useCallback=function(p,x){return Q.H.useCallback(p,x)},ae.useContext=function(p){return Q.H.useContext(p)},ae.useDebugValue=function(){},ae.useDeferredValue=function(p,x){return Q.H.useDeferredValue(p,x)},ae.useEffect=function(p,x){return Q.H.useEffect(p,x)},ae.useEffectEvent=function(p){return Q.H.useEffectEvent(p)},ae.useId=function(){return Q.H.useId()},ae.useImperativeHandle=function(p,x,J){return Q.H.useImperativeHandle(p,x,J)},ae.useInsertionEffect=function(p,x){return Q.H.useInsertionEffect(p,x)},ae.useLayoutEffect=function(p,x){return Q.H.useLayoutEffect(p,x)},ae.useMemo=function(p,x){return Q.H.useMemo(p,x)},ae.useOptimistic=function(p,x){return Q.H.useOptimistic(p,x)},ae.useReducer=function(p,x,J){return Q.H.useReducer(p,x,J)},ae.useRef=function(p){return Q.H.useRef(p)},ae.useState=function(p){return Q.H.useState(p)},ae.useSyncExternalStore=function(p,x,J){return Q.H.useSyncExternalStore(p,x,J)},ae.useTransition=function(){return Q.H.useTransition()},ae.version="19.2.3",ae}var cy;function Hu(){return cy||(cy=1,qr.exports=pb()),qr.exports}var B=Hu();const Kn=kl(B),bb=({chord:o})=>N.jsx("span",{className:"sb-chord",children:`${o} `});var Xr={exports:{}};var ry;function jb(){return ry||(ry=1,(function(o){(function(){var t={}.hasOwnProperty;function s(){for(var d="",z=0;z<arguments.length;z++){var y=arguments[z];y&&(d=u(d,c(y)))}return d}function c(d){if(typeof d=="string"||typeof d=="number")return d;if(typeof d!="object")return"";if(Array.isArray(d))return s.apply(null,d);if(d.toString!==Object.prototype.toString&&!d.toString.toString().includes("[native code]"))return d.toString();var z="";for(var y in d)t.call(d,y)&&d[y]&&(z=u(z,y));return z}function u(d,z){return z?d?d+" "+z:d+z:d}o.exports?(s.default=s,o.exports=s):window.classNames=s})()})(Xr)),Xr.exports}var vb=jb();const en=kl(vb),kb=({song:o,chordsShown:t,starredCount:s})=>N.jsxs(N.Fragment,{children:[N.jsxs("div",{className:"row songtitle mt-1 mb-1",children:[N.jsxs("div",{className:en("col-10",{"sb-starred-song":o.starred}),children:[o.number,". ",o.title]}),N.jsx("div",{className:"col-2 sb-star-info sb-lyrics",children:o.starred?`${o.starredNumber}/${s}`:N.jsx(N.Fragment,{children:" "})})]}),o.body.map(({lyrics:c,chords:u},d)=>N.jsxs("div",{className:"row",children:[N.jsx("div",{className:"col",children:c||N.jsx("br",{})}),t&&u.length>0&&N.jsx("div",{className:"col-4",children:u.map((z,y)=>N.jsx(bb,{chord:z},y))})]},`songline${d}`))]});function _b(o,t){if(o==null)return{};var s={};for(var c in o)if({}.hasOwnProperty.call(o,c)){if(t.indexOf(c)!==-1)continue;s[c]=o[c]}return s}function hu(o,t){return hu=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(s,c){return s.__proto__=c,s},hu(o,t)}function Ab(o,t){o.prototype=Object.create(t.prototype),o.prototype.constructor=o,hu(o,t)}const Cb=["xxl","xl","lg","md","sm","xs"],Db="xs",Fu=B.createContext({prefixes:{},breakpoints:Cb,minBreakpoint:Db}),{Consumer:g7,Provider:p7}=Fu;function Ba(o,t){const{prefixes:s}=B.useContext(Fu);return o||s[t]||t}function Tb(){const{dir:o}=B.useContext(Fu);return o==="rtl"}function _l(o){return o&&o.ownerDocument||document}function Eb(o){var t=_l(o);return t&&t.defaultView||window}function Sb(o,t){return Eb(o).getComputedStyle(o,t)}var xb=/([A-Z])/g;function Gb(o){return o.replace(xb,"-$1").toLowerCase()}var Ob=/^ms-/;function cl(o){return Gb(o).replace(Ob,"-ms-")}var Bb=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;function Nb(o){return!!(o&&Bb.test(o))}function xa(o,t){var s="",c="";if(typeof t=="string")return o.style.getPropertyValue(cl(t))||Sb(o).getPropertyValue(cl(t));Object.keys(t).forEach(function(u){var d=t[u];!d&&d!==0?o.style.removeProperty(cl(u)):Nb(u)?c+=u+"("+d+") ":s+=cl(u)+": "+d+";"}),c&&(s+="transform: "+c+";"),o.style.cssText+=";"+s}var Vr={exports:{}},Qr,uy;function Rb(){if(uy)return Qr;uy=1;var o="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return Qr=o,Qr}var Ir,fy;function Mb(){if(fy)return Ir;fy=1;var o=Rb();function t(){}function s(){}return s.resetWarningCache=t,Ir=function(){function c(z,y,h,w,v,k){if(k!==o){var G=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw G.name="Invariant Violation",G}}c.isRequired=c;function u(){return c}var d={array:c,bigint:c,bool:c,func:c,number:c,object:c,string:c,symbol:c,any:c,arrayOf:u,element:c,elementType:c,instanceOf:u,node:c,objectOf:u,oneOf:u,oneOfType:u,shape:u,exact:u,checkPropTypes:s,resetWarningCache:t};return d.PropTypes=d,d},Ir}var dy;function Pb(){return dy||(dy=1,Vr.exports=Mb()()),Vr.exports}var Jb=Pb();const $r=kl(Jb);var eu={exports:{}},un={};var my;function Hb(){if(my)return un;my=1;var o=Hu();function t(h){var w="https://react.dev/errors/"+h;if(1<arguments.length){w+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)w+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+h+"; visit "+w+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(){}var c={d:{f:s,r:function(){throw Error(t(522))},D:s,C:s,L:s,m:s,X:s,S:s,M:s},p:0,findDOMNode:null},u=Symbol.for("react.portal");function d(h,w,v){var k=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:u,key:k==null?null:""+k,children:h,containerInfo:w,implementation:v}}var z=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function y(h,w){if(h==="font")return"";if(typeof w=="string")return w==="use-credentials"?w:""}return un.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=c,un.createPortal=function(h,w){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!w||w.nodeType!==1&&w.nodeType!==9&&w.nodeType!==11)throw Error(t(299));return d(h,w,null,v)},un.flushSync=function(h){var w=z.T,v=c.p;try{if(z.T=null,c.p=2,h)return h()}finally{z.T=w,c.p=v,c.d.f()}},un.preconnect=function(h,w){typeof h=="string"&&(w?(w=w.crossOrigin,w=typeof w=="string"?w==="use-credentials"?w:"":void 0):w=null,c.d.C(h,w))},un.prefetchDNS=function(h){typeof h=="string"&&c.d.D(h)},un.preinit=function(h,w){if(typeof h=="string"&&w&&typeof w.as=="string"){var v=w.as,k=y(v,w.crossOrigin),G=typeof w.integrity=="string"?w.integrity:void 0,M=typeof w.fetchPriority=="string"?w.fetchPriority:void 0;v==="style"?c.d.S(h,typeof w.precedence=="string"?w.precedence:void 0,{crossOrigin:k,integrity:G,fetchPriority:M}):v==="script"&&c.d.X(h,{crossOrigin:k,integrity:G,fetchPriority:M,nonce:typeof w.nonce=="string"?w.nonce:void 0})}},un.preinitModule=function(h,w){if(typeof h=="string")if(typeof w=="object"&&w!==null){if(w.as==null||w.as==="script"){var v=y(w.as,w.crossOrigin);c.d.M(h,{crossOrigin:v,integrity:typeof w.integrity=="string"?w.integrity:void 0,nonce:typeof w.nonce=="string"?w.nonce:void 0})}}else w==null&&c.d.M(h)},un.preload=function(h,w){if(typeof h=="string"&&typeof w=="object"&&w!==null&&typeof w.as=="string"){var v=w.as,k=y(v,w.crossOrigin);c.d.L(h,v,{crossOrigin:k,integrity:typeof w.integrity=="string"?w.integrity:void 0,nonce:typeof w.nonce=="string"?w.nonce:void 0,type:typeof w.type=="string"?w.type:void 0,fetchPriority:typeof w.fetchPriority=="string"?w.fetchPriority:void 0,referrerPolicy:typeof w.referrerPolicy=="string"?w.referrerPolicy:void 0,imageSrcSet:typeof w.imageSrcSet=="string"?w.imageSrcSet:void 0,imageSizes:typeof w.imageSizes=="string"?w.imageSizes:void 0,media:typeof w.media=="string"?w.media:void 0})}},un.preloadModule=function(h,w){if(typeof h=="string")if(w){var v=y(w.as,w.crossOrigin);c.d.m(h,{as:typeof w.as=="string"&&w.as!=="script"?w.as:void 0,crossOrigin:v,integrity:typeof w.integrity=="string"?w.integrity:void 0})}else c.d.m(h)},un.requestFormReset=function(h){c.d.r(h)},un.unstable_batchedUpdates=function(h,w){return h(w)},un.useFormState=function(h,w,v){return z.H.useFormState(h,w,v)},un.useFormStatus=function(){return z.H.useHostTransitionStatus()},un.version="19.2.3",un}var zy;function bw(){if(zy)return eu.exports;zy=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),eu.exports=Hb(),eu.exports}var Fb=bw();const Tt=kl(Fb),yy={disabled:!1},jw=Kn.createContext(null);var Ub=function(t){return t.scrollTop},Oo="unmounted",Aa="exited",na="entering",Ca="entered",gu="exiting",Ci=(function(o){Ab(t,o);function t(c,u){var d;d=o.call(this,c,u)||this;var z=u,y=z&&!z.isMounting?c.enter:c.appear,h;return d.appearStatus=null,c.in?y?(h=Aa,d.appearStatus=na):h=Ca:c.unmountOnExit||c.mountOnEnter?h=Oo:h=Aa,d.state={status:h},d.nextCallback=null,d}t.getDerivedStateFromProps=function(u,d){var z=u.in;return z&&d.status===Oo?{status:Aa}:null};var s=t.prototype;return s.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},s.componentDidUpdate=function(u){var d=null;if(u!==this.props){var z=this.state.status;this.props.in?z!==na&&z!==Ca&&(d=na):(z===na||z===Ca)&&(d=gu)}this.updateStatus(!1,d)},s.componentWillUnmount=function(){this.cancelNextCallback()},s.getTimeouts=function(){var u=this.props.timeout,d,z,y;return d=z=y=u,u!=null&&typeof u!="number"&&(d=u.exit,z=u.enter,y=u.appear!==void 0?u.appear:z),{exit:d,enter:z,appear:y}},s.updateStatus=function(u,d){if(u===void 0&&(u=!1),d!==null)if(this.cancelNextCallback(),d===na){if(this.props.unmountOnExit||this.props.mountOnEnter){var z=this.props.nodeRef?this.props.nodeRef.current:Tt.findDOMNode(this);z&&Ub(z)}this.performEnter(u)}else this.performExit();else this.props.unmountOnExit&&this.state.status===Aa&&this.setState({status:Oo})},s.performEnter=function(u){var d=this,z=this.props.enter,y=this.context?this.context.isMounting:u,h=this.props.nodeRef?[y]:[Tt.findDOMNode(this),y],w=h[0],v=h[1],k=this.getTimeouts(),G=y?k.appear:k.enter;if(!u&&!z||yy.disabled){this.safeSetState({status:Ca},function(){d.props.onEntered(w)});return}this.props.onEnter(w,v),this.safeSetState({status:na},function(){d.props.onEntering(w,v),d.onTransitionEnd(G,function(){d.safeSetState({status:Ca},function(){d.props.onEntered(w,v)})})})},s.performExit=function(){var u=this,d=this.props.exit,z=this.getTimeouts(),y=this.props.nodeRef?void 0:Tt.findDOMNode(this);if(!d||yy.disabled){this.safeSetState({status:Aa},function(){u.props.onExited(y)});return}this.props.onExit(y),this.safeSetState({status:gu},function(){u.props.onExiting(y),u.onTransitionEnd(z.exit,function(){u.safeSetState({status:Aa},function(){u.props.onExited(y)})})})},s.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},s.safeSetState=function(u,d){d=this.setNextCallback(d),this.setState(u,d)},s.setNextCallback=function(u){var d=this,z=!0;return this.nextCallback=function(y){z&&(z=!1,d.nextCallback=null,u(y))},this.nextCallback.cancel=function(){z=!1},this.nextCallback},s.onTransitionEnd=function(u,d){this.setNextCallback(d);var z=this.props.nodeRef?this.props.nodeRef.current:Tt.findDOMNode(this),y=u==null&&!this.props.addEndListener;if(!z||y){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var h=this.props.nodeRef?[this.nextCallback]:[z,this.nextCallback],w=h[0],v=h[1];this.props.addEndListener(w,v)}u!=null&&setTimeout(this.nextCallback,u)},s.render=function(){var u=this.state.status;if(u===Oo)return null;var d=this.props,z=d.children;d.in,d.mountOnEnter,d.unmountOnExit,d.appear,d.enter,d.exit,d.timeout,d.addEndListener,d.onEnter,d.onEntering,d.onEntered,d.onExit,d.onExiting,d.onExited,d.nodeRef;var y=_b(d,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return Kn.createElement(jw.Provider,{value:null},typeof z=="function"?z(u,y):Kn.cloneElement(Kn.Children.only(z),y))},t})(Kn.Component);Ci.contextType=jw;Ci.propTypes={};function bt(){}Ci.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:bt,onEntering:bt,onEntered:bt,onExit:bt,onExiting:bt,onExited:bt};Ci.UNMOUNTED=Oo;Ci.EXITED=Aa;Ci.ENTERING=na;Ci.ENTERED=Ca;Ci.EXITING=gu;function Kb(o){return o.code==="Escape"||o.keyCode===27}function Lb(){const o=B.version.split(".");return{major:+o[0],minor:+o[1],patch:+o[2]}}function Al(o){if(!o||typeof o=="function")return null;const{major:t}=Lb();return t>=19?o.props.ref:o.ref}const Ot=!!(typeof window<"u"&&window.document&&window.document.createElement);var pu=!1,bu=!1;try{var nu={get passive(){return pu=!0},get once(){return bu=pu=!0}};Ot&&(window.addEventListener("test",nu,nu),window.removeEventListener("test",nu,!0))}catch{}function vw(o,t,s,c){if(c&&typeof c!="boolean"&&!bu){var u=c.once,d=c.capture,z=s;!bu&&u&&(z=s.__once||function y(h){this.removeEventListener(t,y,d),s.call(this,h)},s.__once=z),o.addEventListener(t,z,pu?c:d)}o.addEventListener(t,s,c)}function ju(o,t,s,c){var u=c&&typeof c!="boolean"?c.capture:c;o.removeEventListener(t,s,u),s.__once&&o.removeEventListener(t,s.__once,u)}function hl(o,t,s,c){return vw(o,t,s,c),function(){ju(o,t,s,c)}}function Zb(o,t,s,c){if(c===void 0&&(c=!0),o){var u=document.createEvent("HTMLEvents");u.initEvent(t,s,c),o.dispatchEvent(u)}}function Wb(o){var t=xa(o,"transitionDuration")||"",s=t.indexOf("ms")===-1?1e3:1;return parseFloat(t)*s}function Yb(o,t,s){s===void 0&&(s=5);var c=!1,u=setTimeout(function(){c||Zb(o,"transitionend",!0)},t+s),d=hl(o,"transitionend",function(){c=!0},{once:!0});return function(){clearTimeout(u),d()}}function kw(o,t,s,c){s==null&&(s=Wb(o)||0);var u=Yb(o,s,c),d=hl(o,"transitionend",t);return function(){u(),d()}}function wy(o,t){const s=xa(o,t)||"",c=s.indexOf("ms")===-1?1e3:1;return parseFloat(s)*c}function qb(o,t){const s=wy(o,"transitionDuration"),c=wy(o,"transitionDelay"),u=kw(o,d=>{d.target===o&&(u(),t(d))},s+c)}function Xb(o){o.offsetHeight}const hy=o=>!o||typeof o=="function"?o:t=>{o.current=t};function Vb(o,t){const s=hy(o),c=hy(t);return u=>{s&&s(u),c&&c(u)}}function _w(o,t){return B.useMemo(()=>Vb(o,t),[o,t])}function Qb(o){return o&&"setState"in o?Tt.findDOMNode(o):o??null}const Aw=Kn.forwardRef(({onEnter:o,onEntering:t,onEntered:s,onExit:c,onExiting:u,onExited:d,addEndListener:z,children:y,childRef:h,...w},v)=>{const k=B.useRef(null),G=_w(k,h),M=re=>{G(Qb(re))},K=re=>Q=>{re&&k.current&&re(k.current,Q)},U=B.useCallback(K(o),[o]),ee=B.useCallback(K(t),[t]),q=B.useCallback(K(s),[s]),W=B.useCallback(K(c),[c]),I=B.useCallback(K(u),[u]),ue=B.useCallback(K(d),[d]),Y=B.useCallback(K(z),[z]);return N.jsx(Ci,{ref:v,...w,onEnter:U,onEntered:q,onEntering:ee,onExit:W,onExited:ue,onExiting:I,addEndListener:Y,nodeRef:k,children:typeof y=="function"?(re,Q)=>y(re,{...Q,ref:M}):Kn.cloneElement(y,{ref:M})})});Aw.displayName="TransitionWrapper";function Ib(o){const t=B.useRef(o);return B.useEffect(()=>{t.current=o},[o]),t}function vu(o){const t=Ib(o);return B.useCallback(function(...s){return t.current&&t.current(...s)},[t])}const $b=(o=>B.forwardRef((t,s)=>N.jsx("div",{...t,ref:s,className:en(t.className,o)})));function ej(o){const t=B.useRef(o);return B.useEffect(()=>{t.current=o},[o]),t}function Da(o){const t=ej(o);return B.useCallback(function(...s){return t.current&&t.current(...s)},[t])}function nj(){const o=B.useRef(!0),t=B.useRef(()=>o.current);return B.useEffect(()=>(o.current=!0,()=>{o.current=!1}),[]),t.current}function ij(o){const t=B.useRef(null);return B.useEffect(()=>{t.current=o}),t.current}const aj=typeof global<"u"&&global.navigator&&global.navigator.product==="ReactNative",tj=typeof document<"u",gy=tj||aj?B.useLayoutEffect:B.useEffect,oj=["as","disabled"];function sj(o,t){if(o==null)return{};var s={};for(var c in o)if({}.hasOwnProperty.call(o,c)){if(t.indexOf(c)>=0)continue;s[c]=o[c]}return s}function lj(o){return!o||o.trim()==="#"}function Cw({tagName:o,disabled:t,href:s,target:c,rel:u,role:d,onClick:z,tabIndex:y=0,type:h}){o||(s!=null||c!=null||u!=null?o="a":o="button");const w={tagName:o};if(o==="button")return[{type:h||"button",disabled:t},w];const v=G=>{if((t||o==="a"&&lj(s))&&G.preventDefault(),t){G.stopPropagation();return}z?.(G)},k=G=>{G.key===" "&&(G.preventDefault(),v(G))};return o==="a"&&(s||(s="#"),t&&(s=void 0)),[{role:d??"button",disabled:void 0,tabIndex:t?void 0:y,href:s,target:o==="a"?c:void 0,"aria-disabled":t||void 0,rel:o==="a"?u:void 0,onClick:v,onKeyDown:k},w]}const cj=B.forwardRef((o,t)=>{let{as:s,disabled:c}=o,u=sj(o,oj);const[d,{tagName:z}]=Cw(Object.assign({tagName:s,disabled:c},u));return N.jsx(z,Object.assign({},u,d,{ref:t}))});cj.displayName="Button";const rj={[na]:"show",[Ca]:"show"},Uu=B.forwardRef(({className:o,children:t,transitionClasses:s={},onEnter:c,...u},d)=>{const z={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,...u},y=B.useCallback((h,w)=>{Xb(h),c?.(h,w)},[c]);return N.jsx(Aw,{ref:d,addEndListener:qb,...z,onEnter:y,childRef:Al(t),children:(h,w)=>B.cloneElement(t,{...w,className:en("fade",o,t.props.className,rj[h],s[h])})})});Uu.displayName="Fade";const uj={"aria-label":$r.string,onClick:$r.func,variant:$r.oneOf(["white"])},Ku=B.forwardRef(({className:o,variant:t,"aria-label":s="Close",...c},u)=>N.jsx("button",{ref:u,type:"button",className:en("btn-close",t&&`btn-close-${t}`,o),"aria-label":s,...c}));Ku.displayName="CloseButton";Ku.propTypes=uj;const Dt=B.forwardRef(({as:o,bsPrefix:t,variant:s="primary",size:c,active:u=!1,disabled:d=!1,className:z,...y},h)=>{const w=Ba(t,"btn"),[v,{tagName:k}]=Cw({tagName:o,disabled:d,...y}),G=k;return N.jsx(G,{...v,...y,ref:h,disabled:d,className:en(z,w,u&&"active",s&&`${w}-${s}`,c&&`${w}-${c}`,y.href&&d&&"disabled")})});Dt.displayName="Button";function fj(o){const t=B.useRef(o);return t.current=o,t}function dj(o){const t=fj(o);B.useEffect(()=>()=>t.current(),[])}var mj=Function.prototype.bind.call(Function.prototype.call,[].slice);function jt(o,t){return mj(o.querySelectorAll(t))}function py(o,t){if(o.contains)return o.contains(t);if(o.compareDocumentPosition)return o===t||!!(o.compareDocumentPosition(t)&16)}const zj="data-rr-ui-";function yj(o){return`${zj}${o}`}const Dw=B.createContext(Ot?window:void 0);Dw.Provider;function Lu(){return B.useContext(Dw)}const by=o=>!o||typeof o=="function"?o:t=>{o.current=t};function wj(o,t){const s=by(o),c=by(t);return u=>{s&&s(u),c&&c(u)}}function Zu(o,t){return B.useMemo(()=>wj(o,t),[o,t])}var rl;function jy(o){if((!rl&&rl!==0||o)&&Ot){var t=document.createElement("div");t.style.position="absolute",t.style.top="-9999px",t.style.width="50px",t.style.height="50px",t.style.overflow="scroll",document.body.appendChild(t),rl=t.offsetWidth-t.clientWidth,document.body.removeChild(t)}return rl}function hj(){return B.useState(null)}function iu(o){o===void 0&&(o=_l());try{var t=o.activeElement;return!t||!t.nodeName?null:t}catch{return o.body}}function gj(o){const t=B.useRef(o);return t.current=o,t}function pj(o){const t=gj(o);B.useEffect(()=>()=>t.current(),[])}function bj(o=document){const t=o.defaultView;return Math.abs(t.innerWidth-o.documentElement.clientWidth)}const vy=yj("modal-open");class Wu{constructor({ownerDocument:t,handleContainerOverflow:s=!0,isRTL:c=!1}={}){this.handleContainerOverflow=s,this.isRTL=c,this.modals=[],this.ownerDocument=t}getScrollbarWidth(){return bj(this.ownerDocument)}getElement(){return(this.ownerDocument||document).body}setModalAttributes(t){}removeModalAttributes(t){}setContainerStyle(t){const s={overflow:"hidden"},c=this.isRTL?"paddingLeft":"paddingRight",u=this.getElement();t.style={overflow:u.style.overflow,[c]:u.style[c]},t.scrollBarWidth&&(s[c]=`${parseInt(xa(u,c)||"0",10)+t.scrollBarWidth}px`),u.setAttribute(vy,""),xa(u,s)}reset(){[...this.modals].forEach(t=>this.remove(t))}removeContainerStyle(t){const s=this.getElement();s.removeAttribute(vy),Object.assign(s.style,t.style)}add(t){let s=this.modals.indexOf(t);return s!==-1||(s=this.modals.length,this.modals.push(t),this.setModalAttributes(t),s!==0)||(this.state={scrollBarWidth:this.getScrollbarWidth(),style:{}},this.handleContainerOverflow&&this.setContainerStyle(this.state)),s}remove(t){const s=this.modals.indexOf(t);s!==-1&&(this.modals.splice(s,1),!this.modals.length&&this.handleContainerOverflow&&this.removeContainerStyle(this.state),this.removeModalAttributes(t))}isTopModal(t){return!!this.modals.length&&this.modals[this.modals.length-1]===t}}const au=(o,t)=>Ot?o==null?(t||_l()).body:(typeof o=="function"&&(o=o()),o&&"current"in o&&(o=o.current),o&&("nodeType"in o||o.getBoundingClientRect)?o:null):null;function jj(o,t){const s=Lu(),[c,u]=B.useState(()=>au(o,s?.document));if(!c){const d=au(o);d&&u(d)}return B.useEffect(()=>{},[t,c]),B.useEffect(()=>{const d=au(o);d!==c&&u(d)},[o,c]),c}function vj({children:o,in:t,onExited:s,mountOnEnter:c,unmountOnExit:u}){const d=B.useRef(null),z=B.useRef(t),y=Da(s);B.useEffect(()=>{t?z.current=!0:y(d.current)},[t,y]);const h=Zu(d,Al(o)),w=B.cloneElement(o,{ref:h});return t?w:u||!z.current&&c?null:w}const kj=["onEnter","onEntering","onEntered","onExit","onExiting","onExited","addEndListener","children"];function _j(o,t){if(o==null)return{};var s={};for(var c in o)if({}.hasOwnProperty.call(o,c)){if(t.indexOf(c)>=0)continue;s[c]=o[c]}return s}function Aj(o){let{onEnter:t,onEntering:s,onEntered:c,onExit:u,onExiting:d,onExited:z,addEndListener:y,children:h}=o,w=_j(o,kj);const v=B.useRef(null),k=Zu(v,Al(h)),G=ue=>Y=>{ue&&v.current&&ue(v.current,Y)},M=B.useCallback(G(t),[t]),K=B.useCallback(G(s),[s]),U=B.useCallback(G(c),[c]),ee=B.useCallback(G(u),[u]),q=B.useCallback(G(d),[d]),W=B.useCallback(G(z),[z]),I=B.useCallback(G(y),[y]);return Object.assign({},w,{nodeRef:v},t&&{onEnter:M},s&&{onEntering:K},c&&{onEntered:U},u&&{onExit:ee},d&&{onExiting:q},z&&{onExited:W},y&&{addEndListener:I},{children:typeof h=="function"?(ue,Y)=>h(ue,Object.assign({},Y,{ref:k})):B.cloneElement(h,{ref:k})})}const Cj=["component"];function Dj(o,t){if(o==null)return{};var s={};for(var c in o)if({}.hasOwnProperty.call(o,c)){if(t.indexOf(c)>=0)continue;s[c]=o[c]}return s}const Tj=B.forwardRef((o,t)=>{let{component:s}=o,c=Dj(o,Cj);const u=Aj(c);return N.jsx(s,Object.assign({ref:t},u))});function Ej({in:o,onTransition:t}){const s=B.useRef(null),c=B.useRef(!0),u=Da(t);return gy(()=>{if(!s.current)return;let d=!1;return u({in:o,element:s.current,initial:c.current,isStale:()=>d}),()=>{d=!0}},[o,u]),gy(()=>(c.current=!1,()=>{c.current=!0}),[]),s}function Sj({children:o,in:t,onExited:s,onEntered:c,transition:u}){const[d,z]=B.useState(!t);t&&d&&z(!1);const y=Ej({in:!!t,onTransition:w=>{const v=()=>{w.isStale()||(w.in?c?.(w.element,w.initial):(z(!0),s?.(w.element)))};Promise.resolve(u(w)).then(v,k=>{throw w.in||z(!0),k})}}),h=Zu(y,Al(o));return d&&!t?null:B.cloneElement(o,{ref:h})}function ky(o,t,s){return o?N.jsx(Tj,Object.assign({},s,{component:o})):t?N.jsx(Sj,Object.assign({},s,{transition:t})):N.jsx(vj,Object.assign({},s))}const xj=["show","role","className","style","children","backdrop","keyboard","onBackdropClick","onEscapeKeyDown","transition","runTransition","backdropTransition","runBackdropTransition","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","renderDialog","renderBackdrop","manager","container","onShow","onHide","onExit","onExited","onExiting","onEnter","onEntering","onEntered"];function Gj(o,t){if(o==null)return{};var s={};for(var c in o)if({}.hasOwnProperty.call(o,c)){if(t.indexOf(c)>=0)continue;s[c]=o[c]}return s}let tu;function Oj(o){return tu||(tu=new Wu({ownerDocument:o?.document})),tu}function Bj(o){const t=Lu(),s=o||Oj(t),c=B.useRef({dialog:null,backdrop:null});return Object.assign(c.current,{add:()=>s.add(c.current),remove:()=>s.remove(c.current),isTopModal:()=>s.isTopModal(c.current),setDialogRef:B.useCallback(u=>{c.current.dialog=u},[]),setBackdropRef:B.useCallback(u=>{c.current.backdrop=u},[])})}const Tw=B.forwardRef((o,t)=>{let{show:s=!1,role:c="dialog",className:u,style:d,children:z,backdrop:y=!0,keyboard:h=!0,onBackdropClick:w,onEscapeKeyDown:v,transition:k,runTransition:G,backdropTransition:M,runBackdropTransition:K,autoFocus:U=!0,enforceFocus:ee=!0,restoreFocus:q=!0,restoreFocusOptions:W,renderDialog:I,renderBackdrop:ue=Ae=>N.jsx("div",Object.assign({},Ae)),manager:Y,container:re,onShow:Q,onHide:xe=()=>{},onExit:Qe,onExited:dn,onExiting:cn,onEnter:$,onEntering:Me,onEntered:je}=o,Je=Gj(o,xj);const T=Lu(),P=jj(re),H=Bj(Y),ce=nj(),me=ij(s),[p,x]=B.useState(!s),J=B.useRef(null);B.useImperativeHandle(t,()=>H,[H]),Ot&&!me&&s&&(J.current=iu(T?.document)),s&&p&&x(!1);const F=Da(()=>{if(H.add(),xn.current=hl(document,"keydown",Xe),Ee.current=hl(document,"focus",()=>setTimeout(oe),!0),Q&&Q(),U){var Ae,Ei;const oa=iu((Ae=(Ei=H.dialog)==null?void 0:Ei.ownerDocument)!=null?Ae:T?.document);H.dialog&&oa&&!py(H.dialog,oa)&&(J.current=oa,H.dialog.focus())}}),ie=Da(()=>{if(H.remove(),xn.current==null||xn.current(),Ee.current==null||Ee.current(),q){var Ae;(Ae=J.current)==null||Ae.focus==null||Ae.focus(W),J.current=null}});B.useEffect(()=>{!s||!P||F()},[s,P,F]),B.useEffect(()=>{p&&ie()},[p,ie]),pj(()=>{ie()});const oe=Da(()=>{if(!ee||!ce()||!H.isTopModal())return;const Ae=iu(T?.document);H.dialog&&Ae&&!py(H.dialog,Ae)&&H.dialog.focus()}),we=Da(Ae=>{Ae.target===Ae.currentTarget&&(w?.(Ae),y===!0&&xe())}),Xe=Da(Ae=>{h&&Kb(Ae)&&H.isTopModal()&&(v?.(Ae),Ae.defaultPrevented||xe())}),Ee=B.useRef(),xn=B.useRef(),ni=(...Ae)=>{x(!0),dn?.(...Ae)};if(!P)return null;const Xn=Object.assign({role:c,ref:H.setDialogRef,"aria-modal":c==="dialog"?!0:void 0},Je,{style:d,className:u,tabIndex:-1});let Ti=I?I(Xn):N.jsx("div",Object.assign({},Xn,{children:B.cloneElement(z,{role:"document"})}));Ti=ky(k,G,{unmountOnExit:!0,mountOnEnter:!0,appear:!0,in:!!s,onExit:Qe,onExiting:cn,onExited:ni,onEnter:$,onEntering:Me,onEntered:je,children:Ti});let mn=null;return y&&(mn=ue({ref:H.setBackdropRef,onClick:we}),mn=ky(M,K,{in:!!s,appear:!0,mountOnEnter:!0,unmountOnExit:!0,children:mn})),N.jsx(N.Fragment,{children:Tt.createPortal(N.jsxs(N.Fragment,{children:[mn,Ti]}),P)})});Tw.displayName="Modal";const Nj=Object.assign(Tw,{Manager:Wu});function Rj(o,t){return o.classList?o.classList.contains(t):(" "+(o.className.baseVal||o.className)+" ").indexOf(" "+t+" ")!==-1}function Mj(o,t){o.classList?o.classList.add(t):Rj(o,t)||(typeof o.className=="string"?o.className=o.className+" "+t:o.setAttribute("class",(o.className&&o.className.baseVal||"")+" "+t))}function _y(o,t){return o.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function Pj(o,t){o.classList?o.classList.remove(t):typeof o.className=="string"?o.className=_y(o.className,t):o.setAttribute("class",_y(o.className&&o.className.baseVal||"",t))}const vt={FIXED_CONTENT:".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",STICKY_CONTENT:".sticky-top",NAVBAR_TOGGLER:".navbar-toggler"};class Jj extends Wu{adjustAndStore(t,s,c){const u=s.style[t];s.dataset[t]=u,xa(s,{[t]:`${parseFloat(xa(s,t))+c}px`})}restore(t,s){const c=s.dataset[t];c!==void 0&&(delete s.dataset[t],xa(s,{[t]:c}))}setContainerStyle(t){super.setContainerStyle(t);const s=this.getElement();if(Mj(s,"modal-open"),!t.scrollBarWidth)return;const c=this.isRTL?"paddingLeft":"paddingRight",u=this.isRTL?"marginLeft":"marginRight";jt(s,vt.FIXED_CONTENT).forEach(d=>this.adjustAndStore(c,d,t.scrollBarWidth)),jt(s,vt.STICKY_CONTENT).forEach(d=>this.adjustAndStore(u,d,-t.scrollBarWidth)),jt(s,vt.NAVBAR_TOGGLER).forEach(d=>this.adjustAndStore(u,d,t.scrollBarWidth))}removeContainerStyle(t){super.removeContainerStyle(t);const s=this.getElement();Pj(s,"modal-open");const c=this.isRTL?"paddingLeft":"paddingRight",u=this.isRTL?"marginLeft":"marginRight";jt(s,vt.FIXED_CONTENT).forEach(d=>this.restore(c,d)),jt(s,vt.STICKY_CONTENT).forEach(d=>this.restore(u,d)),jt(s,vt.NAVBAR_TOGGLER).forEach(d=>this.restore(u,d))}}let ou;function Hj(o){return ou||(ou=new Jj(o)),ou}const Ew=B.forwardRef(({className:o,bsPrefix:t,as:s="div",...c},u)=>(t=Ba(t,"modal-body"),N.jsx(s,{ref:u,className:en(o,t),...c})));Ew.displayName="ModalBody";const Sw=B.createContext({onHide(){}}),Yu=B.forwardRef(({bsPrefix:o,className:t,contentClassName:s,centered:c,size:u,fullscreen:d,children:z,scrollable:y,...h},w)=>{o=Ba(o,"modal");const v=`${o}-dialog`,k=typeof d=="string"?`${o}-fullscreen-${d}`:`${o}-fullscreen`;return N.jsx("div",{...h,ref:w,className:en(v,t,u&&`${o}-${u}`,c&&`${v}-centered`,y&&`${v}-scrollable`,d&&k),children:N.jsx("div",{className:en(`${o}-content`,s),children:z})})});Yu.displayName="ModalDialog";const xw=B.forwardRef(({className:o,bsPrefix:t,as:s="div",...c},u)=>(t=Ba(t,"modal-footer"),N.jsx(s,{ref:u,className:en(o,t),...c})));xw.displayName="ModalFooter";const Gw=B.forwardRef(({closeLabel:o="Close",closeVariant:t,closeButton:s=!1,onHide:c,children:u,...d},z)=>{const y=B.useContext(Sw),h=vu(()=>{y?.onHide(),c?.()});return N.jsxs("div",{ref:z,...d,children:[u,s&&N.jsx(Ku,{"aria-label":o,variant:t,onClick:h})]})});Gw.displayName="AbstractModalHeader";const Ow=B.forwardRef(({bsPrefix:o,className:t,closeLabel:s="Close",closeButton:c=!1,...u},d)=>(o=Ba(o,"modal-header"),N.jsx(Gw,{ref:d,...u,className:en(t,o),closeLabel:s,closeButton:c})));Ow.displayName="ModalHeader";const Fj=$b("h4"),Bw=B.forwardRef(({className:o,bsPrefix:t,as:s=Fj,...c},u)=>(t=Ba(t,"modal-title"),N.jsx(s,{ref:u,className:en(o,t),...c})));Bw.displayName="ModalTitle";function Uj(o){return N.jsx(Uu,{...o,timeout:null})}function Kj(o){return N.jsx(Uu,{...o,timeout:null})}const Nw=B.forwardRef(({bsPrefix:o,className:t,style:s,dialogClassName:c,contentClassName:u,children:d,dialogAs:z=Yu,"data-bs-theme":y,"aria-labelledby":h,"aria-describedby":w,"aria-label":v,show:k=!1,animation:G=!0,backdrop:M=!0,keyboard:K=!0,onEscapeKeyDown:U,onShow:ee,onHide:q,container:W,autoFocus:I=!0,enforceFocus:ue=!0,restoreFocus:Y=!0,restoreFocusOptions:re,onEntered:Q,onExit:xe,onExiting:Qe,onEnter:dn,onEntering:cn,onExited:$,backdropClassName:Me,manager:je,...Je},T)=>{const[P,H]=B.useState({}),[ce,me]=B.useState(!1),p=B.useRef(!1),x=B.useRef(!1),J=B.useRef(null),[F,ie]=hj(),oe=_w(T,ie),we=vu(q),Xe=Tb();o=Ba(o,"modal");const Ee=B.useMemo(()=>({onHide:we}),[we]);function xn(){return je||Hj({isRTL:Xe})}function ni(ge){if(!Ot)return;const ii=xn().getScrollbarWidth()>0,sa=ge.scrollHeight>_l(ge).documentElement.clientHeight;H({paddingRight:ii&&!sa?jy():void 0,paddingLeft:!ii&&sa?jy():void 0})}const Xn=vu(()=>{F&&ni(F.dialog)});dj(()=>{ju(window,"resize",Xn),J.current==null||J.current()});const Ti=()=>{p.current=!0},mn=ge=>{p.current&&F&&ge.target===F.dialog&&(x.current=!0),p.current=!1},Ae=()=>{me(!0),J.current=kw(F.dialog,()=>{me(!1)})},Ei=ge=>{ge.target===ge.currentTarget&&Ae()},oa=ge=>{if(M==="static"){Ei(ge);return}if(x.current||ge.target!==ge.currentTarget){x.current=!1;return}q?.()},Zo=ge=>{K?U?.(ge):(ge.preventDefault(),M==="static"&&Ae())},Nt=(ge,ii)=>{ge&&ni(ge),dn?.(ge,ii)},Rt=ge=>{J.current==null||J.current(),xe?.(ge)},Mt=(ge,ii)=>{cn?.(ge,ii),vw(window,"resize",Xn)},Gl=ge=>{ge&&(ge.style.display=""),$?.(ge),ju(window,"resize",Xn)},Ol=B.useCallback(ge=>N.jsx("div",{...ge,className:en(`${o}-backdrop`,Me,!G&&"show")}),[G,Me,o]),rn={...s,...P};rn.display="block";const Bl=ge=>N.jsx("div",{role:"dialog",...ge,style:rn,className:en(t,o,ce&&`${o}-static`,!G&&"show"),onClick:M?oa:void 0,onMouseUp:mn,"data-bs-theme":y,"aria-label":v,"aria-labelledby":h,"aria-describedby":w,children:N.jsx(z,{...Je,onMouseDown:Ti,className:c,contentClassName:u,children:d})});return N.jsx(Sw.Provider,{value:Ee,children:N.jsx(Nj,{show:k,ref:oe,backdrop:M,container:W,keyboard:!0,autoFocus:I,enforceFocus:ue,restoreFocus:Y,restoreFocusOptions:re,onEscapeKeyDown:Zo,onShow:ee,onHide:q,onEnter:Nt,onEntering:Mt,onEntered:Q,onExit:Rt,onExiting:Qe,onExited:Gl,manager:xn(),transition:G?Uj:void 0,backdropTransition:G?Kj:void 0,renderBackdrop:Ol,renderDialog:Bl})})});Nw.displayName="Modal";const ul=Object.assign(Nw,{Body:Ew,Header:Ow,Title:Bw,Footer:xw,Dialog:Yu,TRANSITION_DURATION:300,BACKDROP_TRANSITION_DURATION:150});function ku(o,t){(t==null||t>o.length)&&(t=o.length);for(var s=0,c=Array(t);s<t;s++)c[s]=o[s];return c}function Lj(o){if(Array.isArray(o))return o}function Zj(o){if(Array.isArray(o))return ku(o)}function Wj(o,t){if(!(o instanceof t))throw new TypeError("Cannot call a class as a function")}function Yj(o,t){for(var s=0;s<t.length;s++){var c=t[s];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(o,Rw(c.key),c)}}function qj(o,t,s){return t&&Yj(o.prototype,t),Object.defineProperty(o,"prototype",{writable:!1}),o}function ml(o,t){var s=typeof Symbol<"u"&&o[Symbol.iterator]||o["@@iterator"];if(!s){if(Array.isArray(o)||(s=qu(o))||t){s&&(o=s);var c=0,u=function(){};return{s:u,n:function(){return c>=o.length?{done:!0}:{done:!1,value:o[c++]}},e:function(h){throw h},f:u}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var d,z=!0,y=!1;return{s:function(){s=s.call(o)},n:function(){var h=s.next();return z=h.done,h},e:function(h){y=!0,d=h},f:function(){try{z||s.return==null||s.return()}finally{if(y)throw d}}}}function le(o,t,s){return(t=Rw(t))in o?Object.defineProperty(o,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):o[t]=s,o}function Xj(o){if(typeof Symbol<"u"&&o[Symbol.iterator]!=null||o["@@iterator"]!=null)return Array.from(o)}function Vj(o,t){var s=o==null?null:typeof Symbol<"u"&&o[Symbol.iterator]||o["@@iterator"];if(s!=null){var c,u,d,z,y=[],h=!0,w=!1;try{if(d=(s=s.call(o)).next,t===0){if(Object(s)!==s)return;h=!1}else for(;!(h=(c=d.call(s)).done)&&(y.push(c.value),y.length!==t);h=!0);}catch(v){w=!0,u=v}finally{try{if(!h&&s.return!=null&&(z=s.return(),Object(z)!==z))return}finally{if(w)throw u}}return y}}function Qj(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ij(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ay(o,t){var s=Object.keys(o);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(o);t&&(c=c.filter(function(u){return Object.getOwnPropertyDescriptor(o,u).enumerable})),s.push.apply(s,c)}return s}function R(o){for(var t=1;t<arguments.length;t++){var s=arguments[t]!=null?arguments[t]:{};t%2?Ay(Object(s),!0).forEach(function(c){le(o,c,s[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(s)):Ay(Object(s)).forEach(function(c){Object.defineProperty(o,c,Object.getOwnPropertyDescriptor(s,c))})}return o}function Cl(o,t){return Lj(o)||Vj(o,t)||qu(o,t)||Qj()}function qn(o){return Zj(o)||Xj(o)||qu(o)||Ij()}function $j(o,t){if(typeof o!="object"||!o)return o;var s=o[Symbol.toPrimitive];if(s!==void 0){var c=s.call(o,t);if(typeof c!="object")return c;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(o)}function Rw(o){var t=$j(o,"string");return typeof t=="symbol"?t:t+""}function gl(o){"@babel/helpers - typeof";return gl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},gl(o)}function qu(o,t){if(o){if(typeof o=="string")return ku(o,t);var s={}.toString.call(o).slice(8,-1);return s==="Object"&&o.constructor&&(s=o.constructor.name),s==="Map"||s==="Set"?Array.from(o):s==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s)?ku(o,t):void 0}}var Cy=function(){},Xu={},Mw={},Pw=null,Jw={mark:Cy,measure:Cy};try{typeof window<"u"&&(Xu=window),typeof document<"u"&&(Mw=document),typeof MutationObserver<"u"&&(Pw=MutationObserver),typeof performance<"u"&&(Jw=performance)}catch{}var e0=Xu.navigator||{},Dy=e0.userAgent,Ty=Dy===void 0?"":Dy,ia=Xu,Be=Mw,Ey=Pw,fl=Jw;ia.document;var Di=!!Be.documentElement&&!!Be.head&&typeof Be.addEventListener=="function"&&typeof Be.createElement=="function",Hw=~Ty.indexOf("MSIE")||~Ty.indexOf("Trident/"),su,n0=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,i0=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Whiteboard)?.*/i,Fw={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"},slab:{"fa-regular":"regular",faslr:"regular"},"slab-press":{"fa-regular":"regular",faslpr:"regular"},thumbprint:{"fa-light":"light",fatl:"light"},whiteboard:{"fa-semibold":"semibold",fawsb:"semibold"},notdog:{"fa-solid":"solid",fans:"solid"},"notdog-duo":{"fa-solid":"solid",fands:"solid"},etch:{"fa-solid":"solid",faes:"solid"},jelly:{"fa-regular":"regular",fajr:"regular"},"jelly-fill":{"fa-regular":"regular",fajfr:"regular"},"jelly-duo":{"fa-regular":"regular",fajdr:"regular"},chisel:{"fa-regular":"regular",facr:"regular"},utility:{"fa-semibold":"semibold",fausb:"semibold"},"utility-duo":{"fa-semibold":"semibold",faudsb:"semibold"},"utility-fill":{"fa-semibold":"semibold",faufsb:"semibold"}},a0={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},Uw=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-utility","fa-utility-duo","fa-utility-fill"],ln="classic",Ho="duotone",Kw="sharp",Lw="sharp-duotone",Zw="chisel",Ww="etch",Yw="jelly",qw="jelly-duo",Xw="jelly-fill",Vw="notdog",Qw="notdog-duo",Iw="slab",$w="slab-press",eh="thumbprint",nh="utility",ih="utility-duo",ah="utility-fill",th="whiteboard",t0="Classic",o0="Duotone",s0="Sharp",l0="Sharp Duotone",c0="Chisel",r0="Etch",u0="Jelly",f0="Jelly Duo",d0="Jelly Fill",m0="Notdog",z0="Notdog Duo",y0="Slab",w0="Slab Press",h0="Thumbprint",g0="Utility",p0="Utility Duo",b0="Utility Fill",j0="Whiteboard",oh=[ln,Ho,Kw,Lw,Zw,Ww,Yw,qw,Xw,Vw,Qw,Iw,$w,eh,nh,ih,ah,th];su={},le(le(le(le(le(le(le(le(le(le(su,ln,t0),Ho,o0),Kw,s0),Lw,l0),Zw,c0),Ww,r0),Yw,u0),qw,f0),Xw,d0),Vw,m0),le(le(le(le(le(le(le(le(su,Qw,z0),Iw,y0),$w,w0),eh,h0),nh,g0),ih,p0),ah,b0),th,j0);var v0={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"},slab:{400:"faslr"},"slab-press":{400:"faslpr"},whiteboard:{600:"fawsb"},thumbprint:{300:"fatl"},notdog:{900:"fans"},"notdog-duo":{900:"fands"},etch:{900:"faes"},chisel:{400:"facr"},jelly:{400:"fajr"},"jelly-fill":{400:"fajfr"},"jelly-duo":{400:"fajdr"},utility:{600:"fausb"},"utility-duo":{600:"faudsb"},"utility-fill":{600:"faufsb"}},k0={"Font Awesome 7 Free":{900:"fas",400:"far"},"Font Awesome 7 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 7 Brands":{400:"fab",normal:"fab"},"Font Awesome 7 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 7 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 7 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"},"Font Awesome 7 Jelly":{400:"fajr",normal:"fajr"},"Font Awesome 7 Jelly Fill":{400:"fajfr",normal:"fajfr"},"Font Awesome 7 Jelly Duo":{400:"fajdr",normal:"fajdr"},"Font Awesome 7 Slab":{400:"faslr",normal:"faslr"},"Font Awesome 7 Slab Press":{400:"faslpr",normal:"faslpr"},"Font Awesome 7 Thumbprint":{300:"fatl",normal:"fatl"},"Font Awesome 7 Notdog":{900:"fans",normal:"fans"},"Font Awesome 7 Notdog Duo":{900:"fands",normal:"fands"},"Font Awesome 7 Etch":{900:"faes",normal:"faes"},"Font Awesome 7 Chisel":{400:"facr",normal:"facr"},"Font Awesome 7 Whiteboard":{600:"fawsb",normal:"fawsb"},"Font Awesome 7 Utility":{600:"fausb",normal:"fausb"},"Font Awesome 7 Utility Duo":{600:"faudsb",normal:"faudsb"},"Font Awesome 7 Utility Fill":{600:"faufsb",normal:"faufsb"}},_0=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["chisel",{defaultShortPrefixId:"facr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["etch",{defaultShortPrefixId:"faes",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["jelly",{defaultShortPrefixId:"fajr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-duo",{defaultShortPrefixId:"fajdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-fill",{defaultShortPrefixId:"fajfr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["notdog",{defaultShortPrefixId:"fans",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog-duo",{defaultShortPrefixId:"fands",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["slab",{defaultShortPrefixId:"faslr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press",{defaultShortPrefixId:"faslpr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["thumbprint",{defaultShortPrefixId:"fatl",defaultStyleId:"light",styleIds:["light"],futureStyleIds:[],defaultFontWeight:300}],["utility",{defaultShortPrefixId:"fausb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-duo",{defaultShortPrefixId:"faudsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-fill",{defaultShortPrefixId:"faufsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["whiteboard",{defaultShortPrefixId:"fawsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}]]),A0={chisel:{regular:"facr"},classic:{brands:"fab",light:"fal",regular:"far",solid:"fas",thin:"fat"},duotone:{light:"fadl",regular:"fadr",solid:"fad",thin:"fadt"},etch:{solid:"faes"},jelly:{regular:"fajr"},"jelly-duo":{regular:"fajdr"},"jelly-fill":{regular:"fajfr"},notdog:{solid:"fans"},"notdog-duo":{solid:"fands"},sharp:{light:"fasl",regular:"fasr",solid:"fass",thin:"fast"},"sharp-duotone":{light:"fasdl",regular:"fasdr",solid:"fasds",thin:"fasdt"},slab:{regular:"faslr"},"slab-press":{regular:"faslpr"},thumbprint:{light:"fatl"},utility:{semibold:"fausb"},"utility-duo":{semibold:"faudsb"},"utility-fill":{semibold:"faufsb"},whiteboard:{semibold:"fawsb"}},sh=["fak","fa-kit","fakd","fa-kit-duotone"],Sy={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},C0=["kit"],D0="kit",T0="kit-duotone",E0="Kit",S0="Kit Duotone";le(le({},D0,E0),T0,S0);var x0={kit:{"fa-kit":"fak"}},G0={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},O0={kit:{fak:"fa-kit"}},xy={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},lu,dl={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},B0=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-utility","fa-utility-duo","fa-utility-fill"],N0="classic",R0="duotone",M0="sharp",P0="sharp-duotone",J0="chisel",H0="etch",F0="jelly",U0="jelly-duo",K0="jelly-fill",L0="notdog",Z0="notdog-duo",W0="slab",Y0="slab-press",q0="thumbprint",X0="utility",V0="utility-duo",Q0="utility-fill",I0="whiteboard",$0="Classic",ev="Duotone",nv="Sharp",iv="Sharp Duotone",av="Chisel",tv="Etch",ov="Jelly",sv="Jelly Duo",lv="Jelly Fill",cv="Notdog",rv="Notdog Duo",uv="Slab",fv="Slab Press",dv="Thumbprint",mv="Utility",zv="Utility Duo",yv="Utility Fill",wv="Whiteboard";lu={},le(le(le(le(le(le(le(le(le(le(lu,N0,$0),R0,ev),M0,nv),P0,iv),J0,av),H0,tv),F0,ov),U0,sv),K0,lv),L0,cv),le(le(le(le(le(le(le(le(lu,Z0,rv),W0,uv),Y0,fv),q0,dv),X0,mv),V0,zv),Q0,yv),I0,wv);var hv="kit",gv="kit-duotone",pv="Kit",bv="Kit Duotone";le(le({},hv,pv),gv,bv);var jv={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"},slab:{"fa-regular":"faslr"},"slab-press":{"fa-regular":"faslpr"},whiteboard:{"fa-semibold":"fawsb"},thumbprint:{"fa-light":"fatl"},notdog:{"fa-solid":"fans"},"notdog-duo":{"fa-solid":"fands"},etch:{"fa-solid":"faes"},jelly:{"fa-regular":"fajr"},"jelly-fill":{"fa-regular":"fajfr"},"jelly-duo":{"fa-regular":"fajdr"},chisel:{"fa-regular":"facr"},utility:{"fa-semibold":"fausb"},"utility-duo":{"fa-semibold":"faudsb"},"utility-fill":{"fa-semibold":"faufsb"}},vv={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"],slab:["faslr"],"slab-press":["faslpr"],whiteboard:["fawsb"],thumbprint:["fatl"],notdog:["fans"],"notdog-duo":["fands"],etch:["faes"],jelly:["fajr"],"jelly-fill":["fajfr"],"jelly-duo":["fajdr"],chisel:["facr"],utility:["fausb"],"utility-duo":["faudsb"],"utility-fill":["faufsb"]},_u={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"},slab:{faslr:"fa-regular"},"slab-press":{faslpr:"fa-regular"},whiteboard:{fawsb:"fa-semibold"},thumbprint:{fatl:"fa-light"},notdog:{fans:"fa-solid"},"notdog-duo":{fands:"fa-solid"},etch:{faes:"fa-solid"},jelly:{fajr:"fa-regular"},"jelly-fill":{fajfr:"fa-regular"},"jelly-duo":{fajdr:"fa-regular"},chisel:{facr:"fa-regular"},utility:{fausb:"fa-semibold"},"utility-duo":{faudsb:"fa-semibold"},"utility-fill":{faufsb:"fa-semibold"}},kv=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands","fa-semibold"],lh=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt","faslr","faslpr","fawsb","fatl","fans","fands","faes","fajr","fajfr","fajdr","facr","fausb","faudsb","faufsb"].concat(B0,kv),_v=["solid","regular","light","thin","duotone","brands","semibold"],ch=[1,2,3,4,5,6,7,8,9,10],Av=ch.concat([11,12,13,14,15,16,17,18,19,20]),Cv=["aw","fw","pull-left","pull-right"],Dv=[].concat(qn(Object.keys(vv)),_v,Cv,["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","inverse","layers","layers-bottom-left","layers-bottom-right","layers-counter","layers-text","layers-top-left","layers-top-right","li","pull-end","pull-start","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul","width-auto","width-fixed",dl.GROUP,dl.SWAP_OPACITY,dl.PRIMARY,dl.SECONDARY]).concat(ch.map(function(o){return"".concat(o,"x")})).concat(Av.map(function(o){return"w-".concat(o)})),Tv={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},_i="___FONT_AWESOME___",Au=16,rh="fa",uh="svg-inline--fa",Ga="data-fa-i2svg",Cu="data-fa-pseudo-element",Ev="data-fa-pseudo-element-pending",Vu="data-prefix",Qu="data-icon",Gy="fontawesome-i2svg",Sv="async",xv=["HTML","HEAD","STYLE","SCRIPT"],fh=["::before","::after",":before",":after"],dh=(function(){try{return!0}catch{return!1}})();function Fo(o){return new Proxy(o,{get:function(s,c){return c in s?s[c]:s[ln]}})}var mh=R({},Fw);mh[ln]=R(R(R(R({},{"fa-duotone":"duotone"}),Fw[ln]),Sy.kit),Sy["kit-duotone"]);var Gv=Fo(mh),Du=R({},A0);Du[ln]=R(R(R(R({},{duotone:"fad"}),Du[ln]),xy.kit),xy["kit-duotone"]);var Oy=Fo(Du),Tu=R({},_u);Tu[ln]=R(R({},Tu[ln]),O0.kit);var Iu=Fo(Tu),Eu=R({},jv);Eu[ln]=R(R({},Eu[ln]),x0.kit);Fo(Eu);var Ov=n0,zh="fa-layers-text",Bv=i0,Nv=R({},v0);Fo(Nv);var Rv=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],cu=a0,Mv=[].concat(qn(C0),qn(Dv)),No=ia.FontAwesomeConfig||{};function Pv(o){var t=Be.querySelector("script["+o+"]");if(t)return t.getAttribute(o)}function Jv(o){return o===""?!0:o==="false"?!1:o==="true"?!0:o}if(Be&&typeof Be.querySelector=="function"){var Hv=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-search-pseudo-elements","searchPseudoElements"],["data-search-pseudo-elements-warnings","searchPseudoElementsWarnings"],["data-search-pseudo-elements-full-scan","searchPseudoElementsFullScan"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Hv.forEach(function(o){var t=Cl(o,2),s=t[0],c=t[1],u=Jv(Pv(s));u!=null&&(No[c]=u)})}var yh={styleDefault:"solid",familyDefault:ln,cssPrefix:rh,replacementClass:uh,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};No.familyPrefix&&(No.cssPrefix=No.familyPrefix);var xt=R(R({},yh),No);xt.autoReplaceSvg||(xt.observeMutations=!1);var V={};Object.keys(yh).forEach(function(o){Object.defineProperty(V,o,{enumerable:!0,set:function(s){xt[o]=s,Ro.forEach(function(c){return c(V)})},get:function(){return xt[o]}})});Object.defineProperty(V,"familyPrefix",{enumerable:!0,set:function(t){xt.cssPrefix=t,Ro.forEach(function(s){return s(V)})},get:function(){return xt.cssPrefix}});ia.FontAwesomeConfig=V;var Ro=[];function Fv(o){return Ro.push(o),function(){Ro.splice(Ro.indexOf(o),1)}}var kt=Au,ei={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Uv(o){if(!(!o||!Di)){var t=Be.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=o;for(var s=Be.head.childNodes,c=null,u=s.length-1;u>-1;u--){var d=s[u],z=(d.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(z)>-1&&(c=d)}return Be.head.insertBefore(t,c),o}}var Kv="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function By(){for(var o=12,t="";o-- >0;)t+=Kv[Math.random()*62|0];return t}function Bt(o){for(var t=[],s=(o||[]).length>>>0;s--;)t[s]=o[s];return t}function $u(o){return o.classList?Bt(o.classList):(o.getAttribute("class")||"").split(" ").filter(function(t){return t})}function wh(o){return"".concat(o).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Lv(o){return Object.keys(o||{}).reduce(function(t,s){return t+"".concat(s,'="').concat(wh(o[s]),'" ')},"").trim()}function Dl(o){return Object.keys(o||{}).reduce(function(t,s){return t+"".concat(s,": ").concat(o[s].trim(),";")},"")}function ef(o){return o.size!==ei.size||o.x!==ei.x||o.y!==ei.y||o.rotate!==ei.rotate||o.flipX||o.flipY}function Zv(o){var t=o.transform,s=o.containerWidth,c=o.iconWidth,u={transform:"translate(".concat(s/2," 256)")},d="translate(".concat(t.x*32,", ").concat(t.y*32,") "),z="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),y="rotate(".concat(t.rotate," 0 0)"),h={transform:"".concat(d," ").concat(z," ").concat(y)},w={transform:"translate(".concat(c/2*-1," -256)")};return{outer:u,inner:h,path:w}}function Wv(o){var t=o.transform,s=o.width,c=s===void 0?Au:s,u=o.height,d=u===void 0?Au:u,z="";return Hw?z+="translate(".concat(t.x/kt-c/2,"em, ").concat(t.y/kt-d/2,"em) "):z+="translate(calc(-50% + ".concat(t.x/kt,"em), calc(-50% + ").concat(t.y/kt,"em)) "),z+="scale(".concat(t.size/kt*(t.flipX?-1:1),", ").concat(t.size/kt*(t.flipY?-1:1),") "),z+="rotate(".concat(t.rotate,"deg) "),z}var Yv=`:root, :host {
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
}`;function hh(){var o=rh,t=uh,s=V.cssPrefix,c=V.replacementClass,u=Yv;if(s!==o||c!==t){var d=new RegExp("\\.".concat(o,"\\-"),"g"),z=new RegExp("\\--".concat(o,"\\-"),"g"),y=new RegExp("\\.".concat(t),"g");u=u.replace(d,".".concat(s,"-")).replace(z,"--".concat(s,"-")).replace(y,".".concat(c))}return u}var Ny=!1;function ru(){V.autoAddCss&&!Ny&&(Uv(hh()),Ny=!0)}var qv={mixout:function(){return{dom:{css:hh,insertCss:ru}}},hooks:function(){return{beforeDOMElementCreation:function(){ru()},beforeI2svg:function(){ru()}}}},Ai=ia||{};Ai[_i]||(Ai[_i]={});Ai[_i].styles||(Ai[_i].styles={});Ai[_i].hooks||(Ai[_i].hooks={});Ai[_i].shims||(Ai[_i].shims=[]);var Yn=Ai[_i],gh=[],ph=function(){Be.removeEventListener("DOMContentLoaded",ph),pl=1,gh.map(function(t){return t()})},pl=!1;Di&&(pl=(Be.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Be.readyState),pl||Be.addEventListener("DOMContentLoaded",ph));function Xv(o){Di&&(pl?setTimeout(o,0):gh.push(o))}function Uo(o){var t=o.tag,s=o.attributes,c=s===void 0?{}:s,u=o.children,d=u===void 0?[]:u;return typeof o=="string"?wh(o):"<".concat(t," ").concat(Lv(c),">").concat(d.map(Uo).join(""),"</").concat(t,">")}function Ry(o,t,s){if(o&&o[t]&&o[t][s])return{prefix:t,iconName:s,icon:o[t][s]}}var uu=function(t,s,c,u){var d=Object.keys(t),z=d.length,y=s,h,w,v;for(c===void 0?(h=1,v=t[d[0]]):(h=0,v=c);h<z;h++)w=d[h],v=y(v,t[w],w,t);return v};function bh(o){return qn(o).length!==1?null:o.codePointAt(0).toString(16)}function My(o){return Object.keys(o).reduce(function(t,s){var c=o[s],u=!!c.icon;return u?t[c.iconName]=c.icon:t[s]=c,t},{})}function Su(o,t){var s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},c=s.skipHooks,u=c===void 0?!1:c,d=My(t);typeof Yn.hooks.addPack=="function"&&!u?Yn.hooks.addPack(o,My(t)):Yn.styles[o]=R(R({},Yn.styles[o]||{}),d),o==="fas"&&Su("fa",t)}var Po=Yn.styles,Vv=Yn.shims,jh=Object.keys(Iu),Qv=jh.reduce(function(o,t){return o[t]=Object.keys(Iu[t]),o},{}),nf=null,vh={},kh={},_h={},Ah={},Ch={};function Iv(o){return~Mv.indexOf(o)}function $v(o,t){var s=t.split("-"),c=s[0],u=s.slice(1).join("-");return c===o&&u!==""&&!Iv(u)?u:null}var Dh=function(){var t=function(d){return uu(Po,function(z,y,h){return z[h]=uu(y,d,{}),z},{})};vh=t(function(u,d,z){if(d[3]&&(u[d[3]]=z),d[2]){var y=d[2].filter(function(h){return typeof h=="number"});y.forEach(function(h){u[h.toString(16)]=z})}return u}),kh=t(function(u,d,z){if(u[z]=z,d[2]){var y=d[2].filter(function(h){return typeof h=="string"});y.forEach(function(h){u[h]=z})}return u}),Ch=t(function(u,d,z){var y=d[2];return u[z]=z,y.forEach(function(h){u[h]=z}),u});var s="far"in Po||V.autoFetchSvg,c=uu(Vv,function(u,d){var z=d[0],y=d[1],h=d[2];return y==="far"&&!s&&(y="fas"),typeof z=="string"&&(u.names[z]={prefix:y,iconName:h}),typeof z=="number"&&(u.unicodes[z.toString(16)]={prefix:y,iconName:h}),u},{names:{},unicodes:{}});_h=c.names,Ah=c.unicodes,nf=Tl(V.styleDefault,{family:V.familyDefault})};Fv(function(o){nf=Tl(o.styleDefault,{family:V.familyDefault})});Dh();function af(o,t){return(vh[o]||{})[t]}function ek(o,t){return(kh[o]||{})[t]}function Ea(o,t){return(Ch[o]||{})[t]}function Th(o){return _h[o]||{prefix:null,iconName:null}}function nk(o){var t=Ah[o],s=af("fas",o);return t||(s?{prefix:"fas",iconName:s}:null)||{prefix:null,iconName:null}}function aa(){return nf}var Eh=function(){return{prefix:null,iconName:null,rest:[]}};function ik(o){var t=ln,s=jh.reduce(function(c,u){return c[u]="".concat(V.cssPrefix,"-").concat(u),c},{});return oh.forEach(function(c){(o.includes(s[c])||o.some(function(u){return Qv[c].includes(u)}))&&(t=c)}),t}function Tl(o){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=t.family,c=s===void 0?ln:s,u=Gv[c][o];if(c===Ho&&!o)return"fad";var d=Oy[c][o]||Oy[c][u],z=o in Yn.styles?o:null,y=d||z||null;return y}function ak(o){var t=[],s=null;return o.forEach(function(c){var u=$v(V.cssPrefix,c);u?s=u:c&&t.push(c)}),{iconName:s,rest:t}}function Py(o){return o.sort().filter(function(t,s,c){return c.indexOf(t)===s})}var Jy=lh.concat(sh);function El(o){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=t.skipLookups,c=s===void 0?!1:s,u=null,d=Py(o.filter(function(M){return Jy.includes(M)})),z=Py(o.filter(function(M){return!Jy.includes(M)})),y=d.filter(function(M){return u=M,!Uw.includes(M)}),h=Cl(y,1),w=h[0],v=w===void 0?null:w,k=ik(d),G=R(R({},ak(z)),{},{prefix:Tl(v,{family:k})});return R(R(R({},G),lk({values:o,family:k,styles:Po,config:V,canonical:G,givenPrefix:u})),tk(c,u,G))}function tk(o,t,s){var c=s.prefix,u=s.iconName;if(o||!c||!u)return{prefix:c,iconName:u};var d=t==="fa"?Th(u):{},z=Ea(c,u);return u=d.iconName||z||u,c=d.prefix||c,c==="far"&&!Po.far&&Po.fas&&!V.autoFetchSvg&&(c="fas"),{prefix:c,iconName:u}}var ok=oh.filter(function(o){return o!==ln||o!==Ho}),sk=Object.keys(_u).filter(function(o){return o!==ln}).map(function(o){return Object.keys(_u[o])}).flat();function lk(o){var t=o.values,s=o.family,c=o.canonical,u=o.givenPrefix,d=u===void 0?"":u,z=o.styles,y=z===void 0?{}:z,h=o.config,w=h===void 0?{}:h,v=s===Ho,k=t.includes("fa-duotone")||t.includes("fad"),G=w.familyDefault==="duotone",M=c.prefix==="fad"||c.prefix==="fa-duotone";if(!v&&(k||G||M)&&(c.prefix="fad"),(t.includes("fa-brands")||t.includes("fab"))&&(c.prefix="fab"),!c.prefix&&ok.includes(s)){var K=Object.keys(y).find(function(ee){return sk.includes(ee)});if(K||w.autoFetchSvg){var U=_0.get(s).defaultShortPrefixId;c.prefix=U,c.iconName=Ea(c.prefix,c.iconName)||c.iconName}}return(c.prefix==="fa"||d==="fa")&&(c.prefix=aa()||"fas"),c}var ck=(function(){function o(){Wj(this,o),this.definitions={}}return qj(o,[{key:"add",value:function(){for(var s=this,c=arguments.length,u=new Array(c),d=0;d<c;d++)u[d]=arguments[d];var z=u.reduce(this._pullDefinitions,{});Object.keys(z).forEach(function(y){s.definitions[y]=R(R({},s.definitions[y]||{}),z[y]),Su(y,z[y]);var h=Iu[ln][y];h&&Su(h,z[y]),Dh()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(s,c){var u=c.prefix&&c.iconName&&c.icon?{0:c}:c;return Object.keys(u).map(function(d){var z=u[d],y=z.prefix,h=z.iconName,w=z.icon,v=w[2];s[y]||(s[y]={}),v.length>0&&v.forEach(function(k){typeof k=="string"&&(s[y][k]=w)}),s[y][h]=w}),s}}])})(),Hy=[],Et={},St={},rk=Object.keys(St);function uk(o,t){var s=t.mixoutsTo;return Hy=o,Et={},Object.keys(St).forEach(function(c){rk.indexOf(c)===-1&&delete St[c]}),Hy.forEach(function(c){var u=c.mixout?c.mixout():{};if(Object.keys(u).forEach(function(z){typeof u[z]=="function"&&(s[z]=u[z]),gl(u[z])==="object"&&Object.keys(u[z]).forEach(function(y){s[z]||(s[z]={}),s[z][y]=u[z][y]})}),c.hooks){var d=c.hooks();Object.keys(d).forEach(function(z){Et[z]||(Et[z]=[]),Et[z].push(d[z])})}c.provides&&c.provides(St)}),s}function xu(o,t){for(var s=arguments.length,c=new Array(s>2?s-2:0),u=2;u<s;u++)c[u-2]=arguments[u];var d=Et[o]||[];return d.forEach(function(z){t=z.apply(null,[t].concat(c))}),t}function Oa(o){for(var t=arguments.length,s=new Array(t>1?t-1:0),c=1;c<t;c++)s[c-1]=arguments[c];var u=Et[o]||[];u.forEach(function(d){d.apply(null,s)})}function ta(){var o=arguments[0],t=Array.prototype.slice.call(arguments,1);return St[o]?St[o].apply(null,t):void 0}function Gu(o){o.prefix==="fa"&&(o.prefix="fas");var t=o.iconName,s=o.prefix||aa();if(t)return t=Ea(s,t)||t,Ry(Sh.definitions,s,t)||Ry(Yn.styles,s,t)}var Sh=new ck,fk=function(){V.autoReplaceSvg=!1,V.observeMutations=!1,Oa("noAuto")},dk={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Di?(Oa("beforeI2svg",t),ta("pseudoElements2svg",t),ta("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},s=t.autoReplaceSvgRoot;V.autoReplaceSvg===!1&&(V.autoReplaceSvg=!0),V.observeMutations=!0,Xv(function(){zk({autoReplaceSvgRoot:s}),Oa("watch",t)})}},mk={icon:function(t){if(t===null)return null;if(gl(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Ea(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var s=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],c=Tl(t[0]);return{prefix:c,iconName:Ea(c,s)||s}}if(typeof t=="string"&&(t.indexOf("".concat(V.cssPrefix,"-"))>-1||t.match(Ov))){var u=El(t.split(" "),{skipLookups:!0});return{prefix:u.prefix||aa(),iconName:Ea(u.prefix,u.iconName)||u.iconName}}if(typeof t=="string"){var d=aa();return{prefix:d,iconName:Ea(d,t)||t}}}},Sn={noAuto:fk,config:V,dom:dk,parse:mk,library:Sh,findIconDefinition:Gu,toHtml:Uo},zk=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},s=t.autoReplaceSvgRoot,c=s===void 0?Be:s;(Object.keys(Yn.styles).length>0||V.autoFetchSvg)&&Di&&V.autoReplaceSvg&&Sn.dom.i2svg({node:c})};function Sl(o,t){return Object.defineProperty(o,"abstract",{get:t}),Object.defineProperty(o,"html",{get:function(){return o.abstract.map(function(c){return Uo(c)})}}),Object.defineProperty(o,"node",{get:function(){if(Di){var c=Be.createElement("div");return c.innerHTML=o.html,c.children}}}),o}function yk(o){var t=o.children,s=o.main,c=o.mask,u=o.attributes,d=o.styles,z=o.transform;if(ef(z)&&s.found&&!c.found){var y=s.width,h=s.height,w={x:y/h/2,y:.5};u.style=Dl(R(R({},d),{},{"transform-origin":"".concat(w.x+z.x/16,"em ").concat(w.y+z.y/16,"em")}))}return[{tag:"svg",attributes:u,children:t}]}function wk(o){var t=o.prefix,s=o.iconName,c=o.children,u=o.attributes,d=o.symbol,z=d===!0?"".concat(t,"-").concat(V.cssPrefix,"-").concat(s):d;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:R(R({},u),{},{id:z}),children:c}]}]}function hk(o){var t=["aria-label","aria-labelledby","title","role"];return t.some(function(s){return s in o})}function tf(o){var t=o.icons,s=t.main,c=t.mask,u=o.prefix,d=o.iconName,z=o.transform,y=o.symbol,h=o.maskId,w=o.extra,v=o.watchable,k=v===void 0?!1:v,G=c.found?c:s,M=G.width,K=G.height,U=[V.replacementClass,d?"".concat(V.cssPrefix,"-").concat(d):""].filter(function(Y){return w.classes.indexOf(Y)===-1}).filter(function(Y){return Y!==""||!!Y}).concat(w.classes).join(" "),ee={children:[],attributes:R(R({},w.attributes),{},{"data-prefix":u,"data-icon":d,class:U,role:w.attributes.role||"img",viewBox:"0 0 ".concat(M," ").concat(K)})};!hk(w.attributes)&&!w.attributes["aria-hidden"]&&(ee.attributes["aria-hidden"]="true"),k&&(ee.attributes[Ga]="");var q=R(R({},ee),{},{prefix:u,iconName:d,main:s,mask:c,maskId:h,transform:z,symbol:y,styles:R({},w.styles)}),W=c.found&&s.found?ta("generateAbstractMask",q)||{children:[],attributes:{}}:ta("generateAbstractIcon",q)||{children:[],attributes:{}},I=W.children,ue=W.attributes;return q.children=I,q.attributes=ue,y?wk(q):yk(q)}function Fy(o){var t=o.content,s=o.width,c=o.height,u=o.transform,d=o.extra,z=o.watchable,y=z===void 0?!1:z,h=R(R({},d.attributes),{},{class:d.classes.join(" ")});y&&(h[Ga]="");var w=R({},d.styles);ef(u)&&(w.transform=Wv({transform:u,width:s,height:c}),w["-webkit-transform"]=w.transform);var v=Dl(w);v.length>0&&(h.style=v);var k=[];return k.push({tag:"span",attributes:h,children:[t]}),k}function gk(o){var t=o.content,s=o.extra,c=R(R({},s.attributes),{},{class:s.classes.join(" ")}),u=Dl(s.styles);u.length>0&&(c.style=u);var d=[];return d.push({tag:"span",attributes:c,children:[t]}),d}var fu=Yn.styles;function Ou(o){var t=o[0],s=o[1],c=o.slice(4),u=Cl(c,1),d=u[0],z=null;return Array.isArray(d)?z={tag:"g",attributes:{class:"".concat(V.cssPrefix,"-").concat(cu.GROUP)},children:[{tag:"path",attributes:{class:"".concat(V.cssPrefix,"-").concat(cu.SECONDARY),fill:"currentColor",d:d[0]}},{tag:"path",attributes:{class:"".concat(V.cssPrefix,"-").concat(cu.PRIMARY),fill:"currentColor",d:d[1]}}]}:z={tag:"path",attributes:{fill:"currentColor",d}},{found:!0,width:t,height:s,icon:z}}var pk={found:!1,width:512,height:512};function bk(o,t){!dh&&!V.showMissingIcons&&o&&console.error('Icon with name "'.concat(o,'" and prefix "').concat(t,'" is missing.'))}function Bu(o,t){var s=t;return t==="fa"&&V.styleDefault!==null&&(t=aa()),new Promise(function(c,u){if(s==="fa"){var d=Th(o)||{};o=d.iconName||o,t=d.prefix||t}if(o&&t&&fu[t]&&fu[t][o]){var z=fu[t][o];return c(Ou(z))}bk(o,t),c(R(R({},pk),{},{icon:V.showMissingIcons&&o?ta("missingIconAbstract")||{}:{}}))})}var Uy=function(){},Nu=V.measurePerformance&&fl&&fl.mark&&fl.measure?fl:{mark:Uy,measure:Uy},Bo='FA "7.1.0"',jk=function(t){return Nu.mark("".concat(Bo," ").concat(t," begins")),function(){return xh(t)}},xh=function(t){Nu.mark("".concat(Bo," ").concat(t," ends")),Nu.measure("".concat(Bo," ").concat(t),"".concat(Bo," ").concat(t," begins"),"".concat(Bo," ").concat(t," ends"))},of={begin:jk,end:xh},zl=function(){};function Ky(o){var t=o.getAttribute?o.getAttribute(Ga):null;return typeof t=="string"}function vk(o){var t=o.getAttribute?o.getAttribute(Vu):null,s=o.getAttribute?o.getAttribute(Qu):null;return t&&s}function kk(o){return o&&o.classList&&o.classList.contains&&o.classList.contains(V.replacementClass)}function _k(){if(V.autoReplaceSvg===!0)return yl.replace;var o=yl[V.autoReplaceSvg];return o||yl.replace}function Ak(o){return Be.createElementNS("http://www.w3.org/2000/svg",o)}function Ck(o){return Be.createElement(o)}function Gh(o){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=t.ceFn,c=s===void 0?o.tag==="svg"?Ak:Ck:s;if(typeof o=="string")return Be.createTextNode(o);var u=c(o.tag);Object.keys(o.attributes||[]).forEach(function(z){u.setAttribute(z,o.attributes[z])});var d=o.children||[];return d.forEach(function(z){u.appendChild(Gh(z,{ceFn:c}))}),u}function Dk(o){var t=" ".concat(o.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var yl={replace:function(t){var s=t[0];if(s.parentNode)if(t[1].forEach(function(u){s.parentNode.insertBefore(Gh(u),s)}),s.getAttribute(Ga)===null&&V.keepOriginalSource){var c=Be.createComment(Dk(s));s.parentNode.replaceChild(c,s)}else s.remove()},nest:function(t){var s=t[0],c=t[1];if(~$u(s).indexOf(V.replacementClass))return yl.replace(t);var u=new RegExp("".concat(V.cssPrefix,"-.*"));if(delete c[0].attributes.id,c[0].attributes.class){var d=c[0].attributes.class.split(" ").reduce(function(y,h){return h===V.replacementClass||h.match(u)?y.toSvg.push(h):y.toNode.push(h),y},{toNode:[],toSvg:[]});c[0].attributes.class=d.toSvg.join(" "),d.toNode.length===0?s.removeAttribute("class"):s.setAttribute("class",d.toNode.join(" "))}var z=c.map(function(y){return Uo(y)}).join(`
`);s.setAttribute(Ga,""),s.innerHTML=z}};function Ly(o){o()}function Oh(o,t){var s=typeof t=="function"?t:zl;if(o.length===0)s();else{var c=Ly;V.mutateApproach===Sv&&(c=ia.requestAnimationFrame||Ly),c(function(){var u=_k(),d=of.begin("mutate");o.map(u),d(),s()})}}var sf=!1;function Bh(){sf=!0}function Ru(){sf=!1}var bl=null;function Zy(o){if(Ey&&V.observeMutations){var t=o.treeCallback,s=t===void 0?zl:t,c=o.nodeCallback,u=c===void 0?zl:c,d=o.pseudoElementsCallback,z=d===void 0?zl:d,y=o.observeMutationsRoot,h=y===void 0?Be:y;bl=new Ey(function(w){if(!sf){var v=aa();Bt(w).forEach(function(k){if(k.type==="childList"&&k.addedNodes.length>0&&!Ky(k.addedNodes[0])&&(V.searchPseudoElements&&z(k.target),s(k.target)),k.type==="attributes"&&k.target.parentNode&&V.searchPseudoElements&&z([k.target],!0),k.type==="attributes"&&Ky(k.target)&&~Rv.indexOf(k.attributeName))if(k.attributeName==="class"&&vk(k.target)){var G=El($u(k.target)),M=G.prefix,K=G.iconName;k.target.setAttribute(Vu,M||v),K&&k.target.setAttribute(Qu,K)}else kk(k.target)&&u(k.target)})}}),Di&&bl.observe(h,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Tk(){bl&&bl.disconnect()}function Ek(o){var t=o.getAttribute("style"),s=[];return t&&(s=t.split(";").reduce(function(c,u){var d=u.split(":"),z=d[0],y=d.slice(1);return z&&y.length>0&&(c[z]=y.join(":").trim()),c},{})),s}function Sk(o){var t=o.getAttribute("data-prefix"),s=o.getAttribute("data-icon"),c=o.innerText!==void 0?o.innerText.trim():"",u=El($u(o));return u.prefix||(u.prefix=aa()),t&&s&&(u.prefix=t,u.iconName=s),u.iconName&&u.prefix||(u.prefix&&c.length>0&&(u.iconName=ek(u.prefix,o.innerText)||af(u.prefix,bh(o.innerText))),!u.iconName&&V.autoFetchSvg&&o.firstChild&&o.firstChild.nodeType===Node.TEXT_NODE&&(u.iconName=o.firstChild.data)),u}function xk(o){var t=Bt(o.attributes).reduce(function(s,c){return s.name!=="class"&&s.name!=="style"&&(s[c.name]=c.value),s},{});return t}function Gk(){return{iconName:null,prefix:null,transform:ei,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Wy(o){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},s=Sk(o),c=s.iconName,u=s.prefix,d=s.rest,z=xk(o),y=xu("parseNodeAttributes",{},o),h=t.styleParser?Ek(o):[];return R({iconName:c,prefix:u,transform:ei,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:d,styles:h,attributes:z}},y)}var Ok=Yn.styles;function Nh(o){var t=V.autoReplaceSvg==="nest"?Wy(o,{styleParser:!1}):Wy(o);return~t.extra.classes.indexOf(zh)?ta("generateLayersText",o,t):ta("generateSvgReplacementMutation",o,t)}function Bk(){return[].concat(qn(sh),qn(lh))}function Yy(o){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Di)return Promise.resolve();var s=Be.documentElement.classList,c=function(k){return s.add("".concat(Gy,"-").concat(k))},u=function(k){return s.remove("".concat(Gy,"-").concat(k))},d=V.autoFetchSvg?Bk():Uw.concat(Object.keys(Ok));d.includes("fa")||d.push("fa");var z=[".".concat(zh,":not([").concat(Ga,"])")].concat(d.map(function(v){return".".concat(v,":not([").concat(Ga,"])")})).join(", ");if(z.length===0)return Promise.resolve();var y=[];try{y=Bt(o.querySelectorAll(z))}catch{}if(y.length>0)c("pending"),u("complete");else return Promise.resolve();var h=of.begin("onTree"),w=y.reduce(function(v,k){try{var G=Nh(k);G&&v.push(G)}catch(M){dh||M.name==="MissingIcon"&&console.error(M)}return v},[]);return new Promise(function(v,k){Promise.all(w).then(function(G){Oh(G,function(){c("active"),c("complete"),u("pending"),typeof t=="function"&&t(),h(),v()})}).catch(function(G){h(),k(G)})})}function Nk(o){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Nh(o).then(function(s){s&&Oh([s],t)})}function Rk(o){return function(t){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},c=(t||{}).icon?t:Gu(t||{}),u=s.mask;return u&&(u=(u||{}).icon?u:Gu(u||{})),o(c,R(R({},s),{},{mask:u}))}}var Mk=function(t){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},c=s.transform,u=c===void 0?ei:c,d=s.symbol,z=d===void 0?!1:d,y=s.mask,h=y===void 0?null:y,w=s.maskId,v=w===void 0?null:w,k=s.classes,G=k===void 0?[]:k,M=s.attributes,K=M===void 0?{}:M,U=s.styles,ee=U===void 0?{}:U;if(t){var q=t.prefix,W=t.iconName,I=t.icon;return Sl(R({type:"icon"},t),function(){return Oa("beforeDOMElementCreation",{iconDefinition:t,params:s}),tf({icons:{main:Ou(I),mask:h?Ou(h.icon):{found:!1,width:null,height:null,icon:{}}},prefix:q,iconName:W,transform:R(R({},ei),u),symbol:z,maskId:v,extra:{attributes:K,styles:ee,classes:G}})})}},Pk={mixout:function(){return{icon:Rk(Mk)}},hooks:function(){return{mutationObserverCallbacks:function(s){return s.treeCallback=Yy,s.nodeCallback=Nk,s}}},provides:function(t){t.i2svg=function(s){var c=s.node,u=c===void 0?Be:c,d=s.callback,z=d===void 0?function(){}:d;return Yy(u,z)},t.generateSvgReplacementMutation=function(s,c){var u=c.iconName,d=c.prefix,z=c.transform,y=c.symbol,h=c.mask,w=c.maskId,v=c.extra;return new Promise(function(k,G){Promise.all([Bu(u,d),h.iconName?Bu(h.iconName,h.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(M){var K=Cl(M,2),U=K[0],ee=K[1];k([s,tf({icons:{main:U,mask:ee},prefix:d,iconName:u,transform:z,symbol:y,maskId:w,extra:v,watchable:!0})])}).catch(G)})},t.generateAbstractIcon=function(s){var c=s.children,u=s.attributes,d=s.main,z=s.transform,y=s.styles,h=Dl(y);h.length>0&&(u.style=h);var w;return ef(z)&&(w=ta("generateAbstractTransformGrouping",{main:d,transform:z,containerWidth:d.width,iconWidth:d.width})),c.push(w||d.icon),{children:c,attributes:u}}}},Jk={mixout:function(){return{layer:function(s){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},u=c.classes,d=u===void 0?[]:u;return Sl({type:"layer"},function(){Oa("beforeDOMElementCreation",{assembler:s,params:c});var z=[];return s(function(y){Array.isArray(y)?y.map(function(h){z=z.concat(h.abstract)}):z=z.concat(y.abstract)}),[{tag:"span",attributes:{class:["".concat(V.cssPrefix,"-layers")].concat(qn(d)).join(" ")},children:z}]})}}}},Hk={mixout:function(){return{counter:function(s){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};c.title;var u=c.classes,d=u===void 0?[]:u,z=c.attributes,y=z===void 0?{}:z,h=c.styles,w=h===void 0?{}:h;return Sl({type:"counter",content:s},function(){return Oa("beforeDOMElementCreation",{content:s,params:c}),gk({content:s.toString(),extra:{attributes:y,styles:w,classes:["".concat(V.cssPrefix,"-layers-counter")].concat(qn(d))}})})}}}},Fk={mixout:function(){return{text:function(s){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},u=c.transform,d=u===void 0?ei:u,z=c.classes,y=z===void 0?[]:z,h=c.attributes,w=h===void 0?{}:h,v=c.styles,k=v===void 0?{}:v;return Sl({type:"text",content:s},function(){return Oa("beforeDOMElementCreation",{content:s,params:c}),Fy({content:s,transform:R(R({},ei),d),extra:{attributes:w,styles:k,classes:["".concat(V.cssPrefix,"-layers-text")].concat(qn(y))}})})}}},provides:function(t){t.generateLayersText=function(s,c){var u=c.transform,d=c.extra,z=null,y=null;if(Hw){var h=parseInt(getComputedStyle(s).fontSize,10),w=s.getBoundingClientRect();z=w.width/h,y=w.height/h}return Promise.resolve([s,Fy({content:s.innerHTML,width:z,height:y,transform:u,extra:d,watchable:!0})])}}},Rh=new RegExp('"',"ug"),qy=[1105920,1112319],Xy=R(R(R(R({},{FontAwesome:{normal:"fas",400:"fas"}}),k0),Tv),G0),Mu=Object.keys(Xy).reduce(function(o,t){return o[t.toLowerCase()]=Xy[t],o},{}),Uk=Object.keys(Mu).reduce(function(o,t){var s=Mu[t];return o[t]=s[900]||qn(Object.entries(s))[0][1],o},{});function Kk(o){var t=o.replace(Rh,"");return bh(qn(t)[0]||"")}function Lk(o){var t=o.getPropertyValue("font-feature-settings").includes("ss01"),s=o.getPropertyValue("content"),c=s.replace(Rh,""),u=c.codePointAt(0),d=u>=qy[0]&&u<=qy[1],z=c.length===2?c[0]===c[1]:!1;return d||z||t}function Zk(o,t){var s=o.replace(/^['"]|['"]$/g,"").toLowerCase(),c=parseInt(t),u=isNaN(c)?"normal":c;return(Mu[s]||{})[u]||Uk[s]}function Vy(o,t){var s="".concat(Ev).concat(t.replace(":","-"));return new Promise(function(c,u){if(o.getAttribute(s)!==null)return c();var d=Bt(o.children),z=d.filter(function(re){return re.getAttribute(Cu)===t})[0],y=ia.getComputedStyle(o,t),h=y.getPropertyValue("font-family"),w=h.match(Bv),v=y.getPropertyValue("font-weight"),k=y.getPropertyValue("content");if(z&&!w)return o.removeChild(z),c();if(w&&k!=="none"&&k!==""){var G=y.getPropertyValue("content"),M=Zk(h,v),K=Kk(G),U=w[0].startsWith("FontAwesome"),ee=Lk(y),q=af(M,K),W=q;if(U){var I=nk(K);I.iconName&&I.prefix&&(q=I.iconName,M=I.prefix)}if(q&&!ee&&(!z||z.getAttribute(Vu)!==M||z.getAttribute(Qu)!==W)){o.setAttribute(s,W),z&&o.removeChild(z);var ue=Gk(),Y=ue.extra;Y.attributes[Cu]=t,Bu(q,M).then(function(re){var Q=tf(R(R({},ue),{},{icons:{main:re,mask:Eh()},prefix:M,iconName:W,extra:Y,watchable:!0})),xe=Be.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?o.insertBefore(xe,o.firstChild):o.appendChild(xe),xe.outerHTML=Q.map(function(Qe){return Uo(Qe)}).join(`
`),o.removeAttribute(s),c()}).catch(u)}else c()}else c()})}function Wk(o){return Promise.all([Vy(o,"::before"),Vy(o,"::after")])}function Yk(o){return o.parentNode!==document.head&&!~xv.indexOf(o.tagName.toUpperCase())&&!o.getAttribute(Cu)&&(!o.parentNode||o.parentNode.tagName!=="svg")}var qk=function(t){return!!t&&fh.some(function(s){return t.includes(s)})},Xk=function(t){if(!t)return[];var s=new Set,c=t.split(/,(?![^()]*\))/).map(function(h){return h.trim()});c=c.flatMap(function(h){return h.includes("(")?h:h.split(",").map(function(w){return w.trim()})});var u=ml(c),d;try{for(u.s();!(d=u.n()).done;){var z=d.value;if(qk(z)){var y=fh.reduce(function(h,w){return h.replace(w,"")},z);y!==""&&y!=="*"&&s.add(y)}}}catch(h){u.e(h)}finally{u.f()}return s};function Qy(o){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(Di){var s;if(t)s=o;else if(V.searchPseudoElementsFullScan)s=o.querySelectorAll("*");else{var c=new Set,u=ml(document.styleSheets),d;try{for(u.s();!(d=u.n()).done;){var z=d.value;try{var y=ml(z.cssRules),h;try{for(y.s();!(h=y.n()).done;){var w=h.value,v=Xk(w.selectorText),k=ml(v),G;try{for(k.s();!(G=k.n()).done;){var M=G.value;c.add(M)}}catch(U){k.e(U)}finally{k.f()}}}catch(U){y.e(U)}finally{y.f()}}catch(U){V.searchPseudoElementsWarnings&&console.warn("Font Awesome: cannot parse stylesheet: ".concat(z.href," (").concat(U.message,`)
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`))}}}catch(U){u.e(U)}finally{u.f()}if(!c.size)return;var K=Array.from(c).join(", ");try{s=o.querySelectorAll(K)}catch{}}return new Promise(function(U,ee){var q=Bt(s).filter(Yk).map(Wk),W=of.begin("searchPseudoElements");Bh(),Promise.all(q).then(function(){W(),Ru(),U()}).catch(function(){W(),Ru(),ee()})})}}var Vk={hooks:function(){return{mutationObserverCallbacks:function(s){return s.pseudoElementsCallback=Qy,s}}},provides:function(t){t.pseudoElements2svg=function(s){var c=s.node,u=c===void 0?Be:c;V.searchPseudoElements&&Qy(u)}}},Iy=!1,Qk={mixout:function(){return{dom:{unwatch:function(){Bh(),Iy=!0}}}},hooks:function(){return{bootstrap:function(){Zy(xu("mutationObserverCallbacks",{}))},noAuto:function(){Tk()},watch:function(s){var c=s.observeMutationsRoot;Iy?Ru():Zy(xu("mutationObserverCallbacks",{observeMutationsRoot:c}))}}}},$y=function(t){var s={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(c,u){var d=u.toLowerCase().split("-"),z=d[0],y=d.slice(1).join("-");if(z&&y==="h")return c.flipX=!0,c;if(z&&y==="v")return c.flipY=!0,c;if(y=parseFloat(y),isNaN(y))return c;switch(z){case"grow":c.size=c.size+y;break;case"shrink":c.size=c.size-y;break;case"left":c.x=c.x-y;break;case"right":c.x=c.x+y;break;case"up":c.y=c.y-y;break;case"down":c.y=c.y+y;break;case"rotate":c.rotate=c.rotate+y;break}return c},s)},Ik={mixout:function(){return{parse:{transform:function(s){return $y(s)}}}},hooks:function(){return{parseNodeAttributes:function(s,c){var u=c.getAttribute("data-fa-transform");return u&&(s.transform=$y(u)),s}}},provides:function(t){t.generateAbstractTransformGrouping=function(s){var c=s.main,u=s.transform,d=s.containerWidth,z=s.iconWidth,y={transform:"translate(".concat(d/2," 256)")},h="translate(".concat(u.x*32,", ").concat(u.y*32,") "),w="scale(".concat(u.size/16*(u.flipX?-1:1),", ").concat(u.size/16*(u.flipY?-1:1),") "),v="rotate(".concat(u.rotate," 0 0)"),k={transform:"".concat(h," ").concat(w," ").concat(v)},G={transform:"translate(".concat(z/2*-1," -256)")},M={outer:y,inner:k,path:G};return{tag:"g",attributes:R({},M.outer),children:[{tag:"g",attributes:R({},M.inner),children:[{tag:c.icon.tag,children:c.icon.children,attributes:R(R({},c.icon.attributes),M.path)}]}]}}}},du={x:0,y:0,width:"100%",height:"100%"};function ew(o){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return o.attributes&&(o.attributes.fill||t)&&(o.attributes.fill="black"),o}function $k(o){return o.tag==="g"?o.children:[o]}var e1={hooks:function(){return{parseNodeAttributes:function(s,c){var u=c.getAttribute("data-fa-mask"),d=u?El(u.split(" ").map(function(z){return z.trim()})):Eh();return d.prefix||(d.prefix=aa()),s.mask=d,s.maskId=c.getAttribute("data-fa-mask-id"),s}}},provides:function(t){t.generateAbstractMask=function(s){var c=s.children,u=s.attributes,d=s.main,z=s.mask,y=s.maskId,h=s.transform,w=d.width,v=d.icon,k=z.width,G=z.icon,M=Zv({transform:h,containerWidth:k,iconWidth:w}),K={tag:"rect",attributes:R(R({},du),{},{fill:"white"})},U=v.children?{children:v.children.map(ew)}:{},ee={tag:"g",attributes:R({},M.inner),children:[ew(R({tag:v.tag,attributes:R(R({},v.attributes),M.path)},U))]},q={tag:"g",attributes:R({},M.outer),children:[ee]},W="mask-".concat(y||By()),I="clip-".concat(y||By()),ue={tag:"mask",attributes:R(R({},du),{},{id:W,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[K,q]},Y={tag:"defs",children:[{tag:"clipPath",attributes:{id:I},children:$k(G)},ue]};return c.push(Y,{tag:"rect",attributes:R({fill:"currentColor","clip-path":"url(#".concat(I,")"),mask:"url(#".concat(W,")")},du)}),{children:c,attributes:u}}}},n1={provides:function(t){var s=!1;ia.matchMedia&&(s=ia.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var c=[],u={fill:"currentColor"},d={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};c.push({tag:"path",attributes:R(R({},u),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var z=R(R({},d),{},{attributeName:"opacity"}),y={tag:"circle",attributes:R(R({},u),{},{cx:"256",cy:"364",r:"28"}),children:[]};return s||y.children.push({tag:"animate",attributes:R(R({},d),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:R(R({},z),{},{values:"1;0;1;1;0;1;"})}),c.push(y),c.push({tag:"path",attributes:R(R({},u),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:s?[]:[{tag:"animate",attributes:R(R({},z),{},{values:"1;0;0;0;0;1;"})}]}),s||c.push({tag:"path",attributes:R(R({},u),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:R(R({},z),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:c}}}},i1={hooks:function(){return{parseNodeAttributes:function(s,c){var u=c.getAttribute("data-fa-symbol"),d=u===null?!1:u===""?!0:u;return s.symbol=d,s}}}},a1=[qv,Pk,Jk,Hk,Fk,Vk,Qk,Ik,e1,n1,i1];uk(a1,{mixoutsTo:Sn});Sn.noAuto;var Jo=Sn.config;Sn.library;Sn.dom;var Mh=Sn.parse;Sn.findIconDefinition;Sn.toHtml;var t1=Sn.icon;Sn.layer;Sn.text;Sn.counter;function o1(o){return o=o-0,o===o}function Ph(o){return o1(o)?o:(o=o.replace(/[_-]+(.)?/g,(t,s)=>s?s.toUpperCase():""),o.charAt(0).toLowerCase()+o.slice(1))}function s1(o){return o.charAt(0).toUpperCase()+o.slice(1)}var _t=new Map,l1=1e3;function c1(o){if(_t.has(o))return _t.get(o);const t={};let s=0;const c=o.length;for(;s<c;){const u=o.indexOf(";",s),d=u===-1?c:u,z=o.slice(s,d).trim();if(z){const y=z.indexOf(":");if(y>0){const h=z.slice(0,y).trim(),w=z.slice(y+1).trim();if(h&&w){const v=Ph(h);t[v.startsWith("webkit")?s1(v):v]=w}}}s=d+1}if(_t.size===l1){const u=_t.keys().next().value;u&&_t.delete(u)}return _t.set(o,t),t}function Jh(o,t,s={}){if(typeof t=="string")return t;const c=(t.children||[]).map(v=>Jh(o,v)),u=t.attributes||{},d={};for(const[v,k]of Object.entries(u))switch(!0){case v==="class":{d.className=k;break}case v==="style":{d.style=c1(String(k));break}case v.startsWith("aria-"):case v.startsWith("data-"):{d[v.toLowerCase()]=k;break}default:d[Ph(v)]=k}const{style:z,role:y,"aria-label":h,...w}=s;return z&&(d.style=d.style?{...d.style,...z}:z),y&&(d.role=y),h&&(d["aria-label"]=h,d["aria-hidden"]="false"),o(t.tag,{...w,...d},...c)}var r1=Jh.bind(null,Kn.createElement),nw=(o,t)=>{const s=B.useId();return o||(t?s:void 0)},u1=class{constructor(o="react-fontawesome"){this.enabled=!1;let t=!1;try{t=typeof process<"u"&&!1}catch{}this.scope=o,this.enabled=t}log(...o){this.enabled&&console.log(`[${this.scope}]`,...o)}warn(...o){this.enabled&&console.warn(`[${this.scope}]`,...o)}error(...o){this.enabled&&console.error(`[${this.scope}]`,...o)}},f1="searchPseudoElementsFullScan"in Jo?"7.0.0":"6.0.0",d1=Number.parseInt(f1)>=7,Mo="fa",ji={beat:"fa-beat",fade:"fa-fade",beatFade:"fa-beat-fade",bounce:"fa-bounce",shake:"fa-shake",spin:"fa-spin",spinPulse:"fa-spin-pulse",spinReverse:"fa-spin-reverse",pulse:"fa-pulse"},m1={left:"fa-pull-left",right:"fa-pull-right"},z1={90:"fa-rotate-90",180:"fa-rotate-180",270:"fa-rotate-270"},y1={"2xs":"fa-2xs",xs:"fa-xs",sm:"fa-sm",lg:"fa-lg",xl:"fa-xl","2xl":"fa-2xl","1x":"fa-1x","2x":"fa-2x","3x":"fa-3x","4x":"fa-4x","5x":"fa-5x","6x":"fa-6x","7x":"fa-7x","8x":"fa-8x","9x":"fa-9x","10x":"fa-10x"},vi={border:"fa-border",fixedWidth:"fa-fw",flip:"fa-flip",flipHorizontal:"fa-flip-horizontal",flipVertical:"fa-flip-vertical",inverse:"fa-inverse",rotateBy:"fa-rotate-by",swapOpacity:"fa-swap-opacity",widthAuto:"fa-width-auto"};function w1(o){const t=Jo.cssPrefix||Jo.familyPrefix||Mo;return t===Mo?o:o.replace(new RegExp(String.raw`(?<=^|\s)${Mo}-`,"g"),`${t}-`)}function h1(o){const{beat:t,fade:s,beatFade:c,bounce:u,shake:d,spin:z,spinPulse:y,spinReverse:h,pulse:w,fixedWidth:v,inverse:k,border:G,flip:M,size:K,rotation:U,pull:ee,swapOpacity:q,rotateBy:W,widthAuto:I,className:ue}=o,Y=[];return ue&&Y.push(...ue.split(" ")),t&&Y.push(ji.beat),s&&Y.push(ji.fade),c&&Y.push(ji.beatFade),u&&Y.push(ji.bounce),d&&Y.push(ji.shake),z&&Y.push(ji.spin),h&&Y.push(ji.spinReverse),y&&Y.push(ji.spinPulse),w&&Y.push(ji.pulse),v&&Y.push(vi.fixedWidth),k&&Y.push(vi.inverse),G&&Y.push(vi.border),M===!0&&Y.push(vi.flip),(M==="horizontal"||M==="both")&&Y.push(vi.flipHorizontal),(M==="vertical"||M==="both")&&Y.push(vi.flipVertical),K!=null&&Y.push(y1[K]),U!=null&&U!==0&&Y.push(z1[U]),ee!=null&&Y.push(m1[ee]),q&&Y.push(vi.swapOpacity),d1?(W&&Y.push(vi.rotateBy),I&&Y.push(vi.widthAuto),(Jo.cssPrefix||Jo.familyPrefix||Mo)===Mo?Y:Y.map(w1)):Y}var g1=o=>typeof o=="object"&&"icon"in o&&!!o.icon;function iw(o){if(o)return g1(o)?o:Mh.icon(o)}function p1(o){return Object.keys(o)}var aw=new u1("FontAwesomeIcon"),Hh={border:!1,className:"",mask:void 0,maskId:void 0,fixedWidth:!1,inverse:!1,flip:!1,icon:void 0,listItem:!1,pull:void 0,pulse:!1,rotation:void 0,rotateBy:!1,size:void 0,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:void 0,transform:void 0,swapOpacity:!1,widthAuto:!1},b1=new Set(Object.keys(Hh)),ki=Kn.forwardRef((o,t)=>{const s={...Hh,...o},{icon:c,mask:u,symbol:d,title:z,titleId:y,maskId:h,transform:w}=s,v=nw(h,!!u),k=nw(y,!!z),G=iw(c);if(!G)return aw.error("Icon lookup is undefined",c),null;const M=h1(s),K=typeof w=="string"?Mh.transform(w):w,U=iw(u),ee=t1(G,{...M.length>0&&{classes:M},...K&&{transform:K},...U&&{mask:U},symbol:d,title:z,titleId:k,maskId:v});if(!ee)return aw.error("Could not find icon",G),null;const{abstract:q}=ee,W={ref:t};for(const I of p1(s))b1.has(I)||(W[I]=s[I]);return r1(q[0],W)});ki.displayName="FontAwesomeIcon";var j1={prefix:"fas",iconName:"trash",icon:[448,512,[],"f1f8","M136.7 5.9L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-8.7-26.1C306.9-7.2 294.7-16 280.9-16L167.1-16c-13.8 0-26 8.8-30.4 21.9zM416 144L32 144 53.1 467.1C54.7 492.4 75.7 512 101 512L347 512c25.3 0 46.3-19.6 47.9-44.9L416 144z"]},v1={prefix:"fas",iconName:"guitar",icon:[512,512,[],"f7a6","M465 7c-9.4-9.4-24.6-9.4-33.9 0L383 55c-2.4 2.4-4.3 5.3-5.5 8.5l-15.4 41-77.5 77.6c-45.1-29.4-99.3-30.2-131 1.6-11 11-18 24.6-21.4 39.6-3.7 16.6-19.1 30.7-36.1 31.6-25.6 1.3-49.3 10.7-67.3 28.6-44.8 44.8-36.4 125.8 18.7 180.9S183.6 528 228.4 483.2c17.9-17.9 27.4-41.7 28.6-67.3 .9-17 15-32.3 31.6-36.1 15-3.4 28.6-10.5 39.6-21.4 31.8-31.8 31-85.9 1.6-131l77.6-77.6 41-15.4c3.2-1.2 6.1-3.1 8.5-5.5l48-48c9.4-9.4 9.4-24.6 0-33.9L465 7zM208 256a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"]},k1={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M55.1 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L147.2 256 9.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192.5 301.3 329.9 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.8 256 375.1 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192.5 210.7 55.1 73.4z"]},_1=k1,A1={prefix:"fas",iconName:"star",icon:[576,512,[11088,61446],"f005","M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z"]},C1={prefix:"fas",iconName:"caret-up",icon:[320,512,[],"f0d8","M140.3 135.2c12.6-10.3 31.1-9.5 42.8 2.2l128 128c9.2 9.2 11.9 22.9 6.9 34.9S301.4 320 288.5 320l-256 0c-12.9 0-24.6-7.8-29.6-19.8S.7 274.5 9.9 265.4l128-128 2.4-2.2z"]},D1={prefix:"fas",iconName:"caret-down",icon:[320,512,[],"f0d7","M140.3 376.8c12.6 10.2 31.1 9.5 42.8-2.2l128-128c9.2-9.2 11.9-22.9 6.9-34.9S301.4 192 288.5 192l-256 0c-12.9 0-24.6 7.8-29.6 19.8S.7 237.5 9.9 246.6l128 128 2.4 2.2z"]},Fh={prefix:"fas",iconName:"list-ul",icon:[512,512,["list-dots"],"f0ca","M48 144a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L192 64zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-288 0zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-288 0zM48 464a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM96 256a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z"]};const Sa={PLAIN:"plain",STARRED:"starred",SELECTED:"selected"},jl=({mode:o})=>N.jsx(ki,{icon:A1,className:en("sb-star",`sb-star-mode-${o}`)}),T1=B.memo(({song:o,chooseSong:t,onlyStarred:s})=>{const c=()=>t(o.number),u=s?o.selected?Sa.SELECTED:Sa.STARRED:o.starred?Sa.STARRED:Sa.PLAIN,d=s?o.toggleSelected:o.toggleStarred;return N.jsxs("span",{className:en("sb-menu-songtitle",{"sb-starred-song":o.starred}),children:[N.jsxs("span",{onClick:d,children:[N.jsx(jl,{mode:u})," ",N.jsxs("span",{className:en({"sb-chosen-song":o.chosen}),children:[o.number,". "]})]}),N.jsx("a",{href:"#",onClick:c,className:en("text-reset",{"sb-chosen-song":o.chosen}),children:o.title})]})}),E1=({onlyStarred:o,toggleOnlyStarred:t,starredCount:s,selectedSong:c,searchText:u,setSearchText:d,onClose:z})=>{const y=w=>{d(w.target.value)},h=()=>{t(),d("")};return N.jsxs(N.Fragment,{children:[s?N.jsx("div",{className:"me-2",children:N.jsx(Dt,{variant:"info",onClick:h,children:o?N.jsx(ki,{icon:Fh,role:"button",size:"lg"}):N.jsx(N.Fragment,{children:N.jsxs("span",{className:"sb-no-wrap",children:[N.jsx(jl,{mode:Sa.STARRED})," ",s]})})})}):null,o?c?N.jsxs(N.Fragment,{children:[N.jsx(Dt,{className:"ms-2 me-1",variant:"success",disabled:!c.moveUp,onClick:c.moveUp,children:N.jsx(ki,{icon:C1,role:"button",size:"lg"})}),N.jsx(Dt,{className:"me-3",variant:"success",disabled:!c.moveDown,onClick:c.moveDown,children:N.jsx(ki,{icon:D1,role:"button",size:"lg"})}),N.jsx(Dt,{className:"me-1",variant:"danger",onClick:c.toggleStarred,children:N.jsx(ki,{icon:j1,role:"button",size:"lg"})})]}):N.jsx("div",{className:"ms-2",children:N.jsxs("span",{className:"fw-bold sb-no-wrap",children:["Wybrane ",N.jsx(jl,{mode:Sa.STARRED})," ",s]})}):N.jsx("div",{className:"me-2 flex-grow-1",children:N.jsx("input",{type:"search",className:"form-control",placeholder:"Szukaj",autoCapitalize:"none",autoCorrect:"off",value:u,onChange:y})}),N.jsx("div",{className:"ms-auto",children:N.jsx(Dt,{variant:"light",onClick:z,children:N.jsx(ki,{icon:_1,role:"button",size:"lg",onClick:z})})})]})},Uh=o=>o.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[\u0142]/g,"l").replace(/[^a-z ]/g,"").toLowerCase(),S1=({songs:o,checksum:t,chooseSong:s,starredCount:c,onlyStarred:u,toggleOnlyStarred:d,show:z,onClose:y})=>{const[h,w]=B.useState(""),v=B.useRef(null),k=()=>v.current?.scrollIntoView();B.useEffect(()=>{k()},[z,u]);const M=(()=>{const W=h.trim();if(!W)return;const I=parseInt(W,10);return Number.isNaN(I)?Uh(W):I})();B.useEffect(()=>{M||k()},[M]);const K=W=>M?typeof M=="number"?W.number===M:W.latinTitle.includes(M):!0,U=o.findIndex(W=>W.chosen),ee=o.find(W=>W.selected),q=U<3?0:U-3;return N.jsxs(ul,{show:z,onHide:y,scrollable:!0,animation:!1,children:[N.jsx(ul.Header,{className:"py-2 px-2",children:N.jsx(E1,{onlyStarred:u,toggleOnlyStarred:d,starredCount:c,selectedSong:ee,searchText:h,setSearchText:w,onClose:y})}),N.jsx(ul.Body,{children:o.filter(W=>K(W)).map((W,I)=>N.jsxs(B.Fragment,{children:[N.jsx(T1,{song:W,chooseSong:s,onlyStarred:u}),N.jsx("br",{ref:I===q?v:null})]},W.number))}),N.jsx(ul.Footer,{className:"py-0",children:N.jsxs("p",{className:"text-secondary small",children:["Śpiewnik - Tchnienie Boga v","0.4.3"," [",t,"]"]})})]})},x1=({onlyStarred:o,chordsShown:t,onClickMenu:s,onClickGuitar:c})=>N.jsxs("div",{className:"sb-menu-buttons-container",children:[N.jsx("div",{className:en("btn","sb-menu-button","shadow","rounded-circle",t?"sb-menu-button-red":"sb-menu-button-gray","d-flex","justify-content-center","align-items-center","pt-2"),tabIndex:0,role:"button",onClick:c,children:N.jsx("div",{className:"sb-menu-button-icon my-auto",children:N.jsx(ki,{icon:v1,size:"lg"})})}),N.jsx("div",{className:"btn sb-menu-button shadow rounded-circle sb-menu-button-cyan d-flex justify-content-center align-items-center pt-2",tabIndex:1,role:"button",onClick:s,children:N.jsx("div",{className:"sb-menu-button-icon my-auto",children:o?N.jsx(jl,{mode:Sa.STARRED}):N.jsx(ki,{icon:Fh,size:"lg"})})})]}),G1=o=>{const t=localStorage.getItem(o);return typeof t=="string"?JSON.parse(t):void 0},O1=(o,t)=>{t!==void 0&&localStorage.setItem(o,JSON.stringify(t))},Ta=(o,t)=>{const[s,c]=B.useState(()=>{const u=G1(o);return u||t});return B.useEffect(()=>{O1(o,s)},[o,s]),[s,c]};function B1(o,t,s){return Math.max(t,Math.min(o,s))}const Ne={toVector(o,t){return o===void 0&&(o=t),Array.isArray(o)?o:[o,o]},add(o,t){return[o[0]+t[0],o[1]+t[1]]},sub(o,t){return[o[0]-t[0],o[1]-t[1]]},addTo(o,t){o[0]+=t[0],o[1]+=t[1]},subTo(o,t){o[0]-=t[0],o[1]-=t[1]}};function tw(o,t,s){return t===0||Math.abs(t)===1/0?Math.pow(o,s*5):o*t*s/(t+s*o)}function ow(o,t,s,c=.15){return c===0?B1(o,t,s):o<t?-tw(t-o,s-t,c)+t:o>s?+tw(o-s,s-t,c)+s:o}function N1(o,[t,s],[c,u]){const[[d,z],[y,h]]=o;return[ow(t,d,z,c),ow(s,y,h,u)]}function R1(o,t){if(typeof o!="object"||o===null)return o;var s=o[Symbol.toPrimitive];if(s!==void 0){var c=s.call(o,t);if(typeof c!="object")return c;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(o)}function M1(o){var t=R1(o,"string");return typeof t=="symbol"?t:String(t)}function qe(o,t,s){return t=M1(t),t in o?Object.defineProperty(o,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):o[t]=s,o}function sw(o,t){var s=Object.keys(o);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(o);t&&(c=c.filter(function(u){return Object.getOwnPropertyDescriptor(o,u).enumerable})),s.push.apply(s,c)}return s}function Pe(o){for(var t=1;t<arguments.length;t++){var s=arguments[t]!=null?arguments[t]:{};t%2?sw(Object(s),!0).forEach(function(c){qe(o,c,s[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(s)):sw(Object(s)).forEach(function(c){Object.defineProperty(o,c,Object.getOwnPropertyDescriptor(s,c))})}return o}const Kh={pointer:{start:"down",change:"move",end:"up"},mouse:{start:"down",change:"move",end:"up"},touch:{start:"start",change:"move",end:"end"},gesture:{start:"start",change:"change",end:"end"}};function lw(o){return o?o[0].toUpperCase()+o.slice(1):""}const P1=["enter","leave"];function J1(o=!1,t){return o&&!P1.includes(t)}function H1(o,t="",s=!1){const c=Kh[o],u=c&&c[t]||t;return"on"+lw(o)+lw(u)+(J1(s,u)?"Capture":"")}const F1=["gotpointercapture","lostpointercapture"];function U1(o){let t=o.substring(2).toLowerCase();const s=!!~t.indexOf("passive");s&&(t=t.replace("passive",""));const c=F1.includes(t)?"capturecapture":"capture",u=!!~t.indexOf(c);return u&&(t=t.replace("capture","")),{device:t,capture:u,passive:s}}function K1(o,t=""){const s=Kh[o],c=s&&s[t]||t;return o+c}function xl(o){return"touches"in o}function Lh(o){return xl(o)?"touch":"pointerType"in o?o.pointerType:"mouse"}function L1(o){return Array.from(o.touches).filter(t=>{var s,c;return t.target===o.currentTarget||((s=o.currentTarget)===null||s===void 0||(c=s.contains)===null||c===void 0?void 0:c.call(s,t.target))})}function Z1(o){return o.type==="touchend"||o.type==="touchcancel"?o.changedTouches:o.targetTouches}function Zh(o){return xl(o)?Z1(o)[0]:o}function Pu(o,t){try{const s=t.clientX-o.clientX,c=t.clientY-o.clientY,u=(t.clientX+o.clientX)/2,d=(t.clientY+o.clientY)/2,z=Math.hypot(s,c);return{angle:-(Math.atan2(s,c)*180)/Math.PI,distance:z,origin:[u,d]}}catch{}return null}function W1(o){return L1(o).map(t=>t.identifier)}function cw(o,t){const[s,c]=Array.from(o.touches).filter(u=>t.includes(u.identifier));return Pu(s,c)}function mu(o){const t=Zh(o);return xl(o)?t.identifier:t.pointerId}function Gt(o){const t=Zh(o);return[t.clientX,t.clientY]}const rw=40,uw=800;function Wh(o){let{deltaX:t,deltaY:s,deltaMode:c}=o;return c===1?(t*=rw,s*=rw):c===2&&(t*=uw,s*=uw),[t,s]}function Y1(o){var t,s;const{scrollX:c,scrollY:u,scrollLeft:d,scrollTop:z}=o.currentTarget;return[(t=c??d)!==null&&t!==void 0?t:0,(s=u??z)!==null&&s!==void 0?s:0]}function q1(o){const t={};if("buttons"in o&&(t.buttons=o.buttons),"shiftKey"in o){const{shiftKey:s,altKey:c,metaKey:u,ctrlKey:d}=o;Object.assign(t,{shiftKey:s,altKey:c,metaKey:u,ctrlKey:d})}return t}function vl(o,...t){return typeof o=="function"?o(...t):o}function X1(){}function V1(...o){return o.length===0?X1:o.length===1?o[0]:function(){let t;for(const s of o)t=s.apply(this,arguments)||t;return t}}function fw(o,t){return Object.assign({},t,o||{})}const Q1=32;class Yh{constructor(t,s,c){this.ctrl=t,this.args=s,this.key=c,this.state||(this.state={},this.computeValues([0,0]),this.computeInitial(),this.init&&this.init(),this.reset())}get state(){return this.ctrl.state[this.key]}set state(t){this.ctrl.state[this.key]=t}get shared(){return this.ctrl.state.shared}get eventStore(){return this.ctrl.gestureEventStores[this.key]}get timeoutStore(){return this.ctrl.gestureTimeoutStores[this.key]}get config(){return this.ctrl.config[this.key]}get sharedConfig(){return this.ctrl.config.shared}get handler(){return this.ctrl.handlers[this.key]}reset(){const{state:t,shared:s,ingKey:c,args:u}=this;s[c]=t._active=t.active=t._blocked=t._force=!1,t._step=[!1,!1],t.intentional=!1,t._movement=[0,0],t._distance=[0,0],t._direction=[0,0],t._delta=[0,0],t._bounds=[[-1/0,1/0],[-1/0,1/0]],t.args=u,t.axis=void 0,t.memo=void 0,t.elapsedTime=t.timeDelta=0,t.direction=[0,0],t.distance=[0,0],t.overflow=[0,0],t._movementBound=[!1,!1],t.velocity=[0,0],t.movement=[0,0],t.delta=[0,0],t.timeStamp=0}start(t){const s=this.state,c=this.config;s._active||(this.reset(),this.computeInitial(),s._active=!0,s.target=t.target,s.currentTarget=t.currentTarget,s.lastOffset=c.from?vl(c.from,s):s.offset,s.offset=s.lastOffset,s.startTime=s.timeStamp=t.timeStamp)}computeValues(t){const s=this.state;s._values=t,s.values=this.config.transform(t)}computeInitial(){const t=this.state;t._initial=t._values,t.initial=t.values}compute(t){const{state:s,config:c,shared:u}=this;s.args=this.args;let d=0;if(t&&(s.event=t,c.preventDefault&&t.cancelable&&s.event.preventDefault(),s.type=t.type,u.touches=this.ctrl.pointerIds.size||this.ctrl.touchIds.size,u.locked=!!document.pointerLockElement,Object.assign(u,q1(t)),u.down=u.pressed=u.buttons%2===1||u.touches>0,d=t.timeStamp-s.timeStamp,s.timeStamp=t.timeStamp,s.elapsedTime=s.timeStamp-s.startTime),s._active){const re=s._delta.map(Math.abs);Ne.addTo(s._distance,re)}this.axisIntent&&this.axisIntent(t);const[z,y]=s._movement,[h,w]=c.threshold,{_step:v,values:k}=s;if(c.hasCustomTransform?(v[0]===!1&&(v[0]=Math.abs(z)>=h&&k[0]),v[1]===!1&&(v[1]=Math.abs(y)>=w&&k[1])):(v[0]===!1&&(v[0]=Math.abs(z)>=h&&Math.sign(z)*h),v[1]===!1&&(v[1]=Math.abs(y)>=w&&Math.sign(y)*w)),s.intentional=v[0]!==!1||v[1]!==!1,!s.intentional)return;const G=[0,0];if(c.hasCustomTransform){const[re,Q]=k;G[0]=v[0]!==!1?re-v[0]:0,G[1]=v[1]!==!1?Q-v[1]:0}else G[0]=v[0]!==!1?z-v[0]:0,G[1]=v[1]!==!1?y-v[1]:0;this.restrictToAxis&&!s._blocked&&this.restrictToAxis(G);const M=s.offset,K=s._active&&!s._blocked||s.active;K&&(s.first=s._active&&!s.active,s.last=!s._active&&s.active,s.active=u[this.ingKey]=s._active,t&&(s.first&&("bounds"in c&&(s._bounds=vl(c.bounds,s)),this.setup&&this.setup()),s.movement=G,this.computeOffset()));const[U,ee]=s.offset,[[q,W],[I,ue]]=s._bounds;s.overflow=[U<q?-1:U>W?1:0,ee<I?-1:ee>ue?1:0],s._movementBound[0]=s.overflow[0]?s._movementBound[0]===!1?s._movement[0]:s._movementBound[0]:!1,s._movementBound[1]=s.overflow[1]?s._movementBound[1]===!1?s._movement[1]:s._movementBound[1]:!1;const Y=s._active?c.rubberband||[0,0]:[0,0];if(s.offset=N1(s._bounds,s.offset,Y),s.delta=Ne.sub(s.offset,M),this.computeMovement(),K&&(!s.last||d>Q1)){s.delta=Ne.sub(s.offset,M);const re=s.delta.map(Math.abs);Ne.addTo(s.distance,re),s.direction=s.delta.map(Math.sign),s._direction=s._delta.map(Math.sign),!s.first&&d>0&&(s.velocity=[re[0]/d,re[1]/d],s.timeDelta=d)}}emit(){const t=this.state,s=this.shared,c=this.config;if(t._active||this.clean(),(t._blocked||!t.intentional)&&!t._force&&!c.triggerAllEvents)return;const u=this.handler(Pe(Pe(Pe({},s),t),{},{[this.aliasKey]:t.values}));u!==void 0&&(t.memo=u)}clean(){this.eventStore.clean(),this.timeoutStore.clean()}}function I1([o,t],s){const c=Math.abs(o),u=Math.abs(t);if(c>u&&c>s)return"x";if(u>c&&u>s)return"y"}class Ko extends Yh{constructor(...t){super(...t),qe(this,"aliasKey","xy")}reset(){super.reset(),this.state.axis=void 0}init(){this.state.offset=[0,0],this.state.lastOffset=[0,0]}computeOffset(){this.state.offset=Ne.add(this.state.lastOffset,this.state.movement)}computeMovement(){this.state.movement=Ne.sub(this.state.offset,this.state.lastOffset)}axisIntent(t){const s=this.state,c=this.config;if(!s.axis&&t){const u=typeof c.axisThreshold=="object"?c.axisThreshold[Lh(t)]:c.axisThreshold;s.axis=I1(s._movement,u)}s._blocked=(c.lockDirection||!!c.axis)&&!s.axis||!!c.axis&&c.axis!==s.axis}restrictToAxis(t){if(this.config.axis||this.config.lockDirection)switch(this.state.axis){case"x":t[1]=0;break;case"y":t[0]=0;break}}}const $1=o=>o,dw=.15,qh={enabled(o=!0){return o},eventOptions(o,t,s){return Pe(Pe({},s.shared.eventOptions),o)},preventDefault(o=!1){return o},triggerAllEvents(o=!1){return o},rubberband(o=0){switch(o){case!0:return[dw,dw];case!1:return[0,0];default:return Ne.toVector(o)}},from(o){if(typeof o=="function")return o;if(o!=null)return Ne.toVector(o)},transform(o,t,s){const c=o||s.shared.transform;return this.hasCustomTransform=!!c,c||$1},threshold(o){return Ne.toVector(o,0)}},e_=0,Na=Pe(Pe({},qh),{},{axis(o,t,{axis:s}){if(this.lockDirection=s==="lock",!this.lockDirection)return s},axisThreshold(o=e_){return o},bounds(o={}){if(typeof o=="function")return d=>Na.bounds(o(d));if("current"in o)return()=>o.current;if(typeof HTMLElement=="function"&&o instanceof HTMLElement)return o;const{left:t=-1/0,right:s=1/0,top:c=-1/0,bottom:u=1/0}=o;return[[t,s],[c,u]]}}),mw={ArrowRight:(o,t=1)=>[o*t,0],ArrowLeft:(o,t=1)=>[-1*o*t,0],ArrowUp:(o,t=1)=>[0,-1*o*t],ArrowDown:(o,t=1)=>[0,o*t]};class n_ extends Ko{constructor(...t){super(...t),qe(this,"ingKey","dragging")}reset(){super.reset();const t=this.state;t._pointerId=void 0,t._pointerActive=!1,t._keyboardActive=!1,t._preventScroll=!1,t._delayed=!1,t.swipe=[0,0],t.tap=!1,t.canceled=!1,t.cancel=this.cancel.bind(this)}setup(){const t=this.state;if(t._bounds instanceof HTMLElement){const s=t._bounds.getBoundingClientRect(),c=t.currentTarget.getBoundingClientRect(),u={left:s.left-c.left+t.offset[0],right:s.right-c.right+t.offset[0],top:s.top-c.top+t.offset[1],bottom:s.bottom-c.bottom+t.offset[1]};t._bounds=Na.bounds(u)}}cancel(){const t=this.state;t.canceled||(t.canceled=!0,t._active=!1,setTimeout(()=>{this.compute(),this.emit()},0))}setActive(){this.state._active=this.state._pointerActive||this.state._keyboardActive}clean(){this.pointerClean(),this.state._pointerActive=!1,this.state._keyboardActive=!1,super.clean()}pointerDown(t){const s=this.config,c=this.state;if(t.buttons!=null&&(Array.isArray(s.pointerButtons)?!s.pointerButtons.includes(t.buttons):s.pointerButtons!==-1&&s.pointerButtons!==t.buttons))return;const u=this.ctrl.setEventIds(t);s.pointerCapture&&t.target.setPointerCapture(t.pointerId),!(u&&u.size>1&&c._pointerActive)&&(this.start(t),this.setupPointer(t),c._pointerId=mu(t),c._pointerActive=!0,this.computeValues(Gt(t)),this.computeInitial(),s.preventScrollAxis&&Lh(t)!=="mouse"?(c._active=!1,this.setupScrollPrevention(t)):s.delay>0?(this.setupDelayTrigger(t),s.triggerAllEvents&&(this.compute(t),this.emit())):this.startPointerDrag(t))}startPointerDrag(t){const s=this.state;s._active=!0,s._preventScroll=!0,s._delayed=!1,this.compute(t),this.emit()}pointerMove(t){const s=this.state,c=this.config;if(!s._pointerActive)return;const u=mu(t);if(s._pointerId!==void 0&&u!==s._pointerId)return;const d=Gt(t);if(document.pointerLockElement===t.target?s._delta=[t.movementX,t.movementY]:(s._delta=Ne.sub(d,s._values),this.computeValues(d)),Ne.addTo(s._movement,s._delta),this.compute(t),s._delayed&&s.intentional){this.timeoutStore.remove("dragDelay"),s.active=!1,this.startPointerDrag(t);return}if(c.preventScrollAxis&&!s._preventScroll)if(s.axis)if(s.axis===c.preventScrollAxis||c.preventScrollAxis==="xy"){s._active=!1,this.clean();return}else{this.timeoutStore.remove("startPointerDrag"),this.startPointerDrag(t);return}else return;this.emit()}pointerUp(t){this.ctrl.setEventIds(t);try{this.config.pointerCapture&&t.target.hasPointerCapture(t.pointerId)&&t.target.releasePointerCapture(t.pointerId)}catch{}const s=this.state,c=this.config;if(!s._active||!s._pointerActive)return;const u=mu(t);if(s._pointerId!==void 0&&u!==s._pointerId)return;this.state._pointerActive=!1,this.setActive(),this.compute(t);const[d,z]=s._distance;if(s.tap=d<=c.tapsThreshold&&z<=c.tapsThreshold,s.tap&&c.filterTaps)s._force=!0;else{const[y,h]=s._delta,[w,v]=s._movement,[k,G]=c.swipe.velocity,[M,K]=c.swipe.distance,U=c.swipe.duration;if(s.elapsedTime<U){const ee=Math.abs(y/s.timeDelta),q=Math.abs(h/s.timeDelta);ee>k&&Math.abs(w)>M&&(s.swipe[0]=Math.sign(y)),q>G&&Math.abs(v)>K&&(s.swipe[1]=Math.sign(h))}}this.emit()}pointerClick(t){!this.state.tap&&t.detail>0&&(t.preventDefault(),t.stopPropagation())}setupPointer(t){const s=this.config,c=s.device;s.pointerLock&&t.currentTarget.requestPointerLock(),s.pointerCapture||(this.eventStore.add(this.sharedConfig.window,c,"change",this.pointerMove.bind(this)),this.eventStore.add(this.sharedConfig.window,c,"end",this.pointerUp.bind(this)),this.eventStore.add(this.sharedConfig.window,c,"cancel",this.pointerUp.bind(this)))}pointerClean(){this.config.pointerLock&&document.pointerLockElement===this.state.currentTarget&&document.exitPointerLock()}preventScroll(t){this.state._preventScroll&&t.cancelable&&t.preventDefault()}setupScrollPrevention(t){this.state._preventScroll=!1,i_(t);const s=this.eventStore.add(this.sharedConfig.window,"touch","change",this.preventScroll.bind(this),{passive:!1});this.eventStore.add(this.sharedConfig.window,"touch","end",s),this.eventStore.add(this.sharedConfig.window,"touch","cancel",s),this.timeoutStore.add("startPointerDrag",this.startPointerDrag.bind(this),this.config.preventScrollDelay,t)}setupDelayTrigger(t){this.state._delayed=!0,this.timeoutStore.add("dragDelay",()=>{this.state._step=[0,0],this.startPointerDrag(t)},this.config.delay)}keyDown(t){const s=mw[t.key];if(s){const c=this.state,u=t.shiftKey?10:t.altKey?.1:1;this.start(t),c._delta=s(this.config.keyboardDisplacement,u),c._keyboardActive=!0,Ne.addTo(c._movement,c._delta),this.compute(t),this.emit()}}keyUp(t){t.key in mw&&(this.state._keyboardActive=!1,this.setActive(),this.compute(t),this.emit())}bind(t){const s=this.config.device;t(s,"start",this.pointerDown.bind(this)),this.config.pointerCapture&&(t(s,"change",this.pointerMove.bind(this)),t(s,"end",this.pointerUp.bind(this)),t(s,"cancel",this.pointerUp.bind(this)),t("lostPointerCapture","",this.pointerUp.bind(this))),this.config.keys&&(t("key","down",this.keyDown.bind(this)),t("key","up",this.keyUp.bind(this))),this.config.filterTaps&&t("click","",this.pointerClick.bind(this),{capture:!0,passive:!1})}}function i_(o){"persist"in o&&typeof o.persist=="function"&&o.persist()}const Lo=typeof window<"u"&&window.document&&window.document.createElement;function Xh(){return Lo&&"ontouchstart"in window}function a_(){return Xh()||Lo&&window.navigator.maxTouchPoints>1}function t_(){return Lo&&"onpointerdown"in window}function o_(){return Lo&&"exitPointerLock"in window.document}function s_(){try{return"constructor"in GestureEvent}catch{return!1}}const Un={isBrowser:Lo,gesture:s_(),touch:Xh(),touchscreen:a_(),pointer:t_(),pointerLock:o_()},l_=250,c_=180,r_=.5,u_=50,f_=250,d_=10,zw={mouse:0,touch:0,pen:8},m_=Pe(Pe({},Na),{},{device(o,t,{pointer:{touch:s=!1,lock:c=!1,mouse:u=!1}={}}){return this.pointerLock=c&&Un.pointerLock,Un.touch&&s?"touch":this.pointerLock?"mouse":Un.pointer&&!u?"pointer":Un.touch?"touch":"mouse"},preventScrollAxis(o,t,{preventScroll:s}){if(this.preventScrollDelay=typeof s=="number"?s:s||s===void 0&&o?l_:void 0,!(!Un.touchscreen||s===!1))return o||(s!==void 0?"y":void 0)},pointerCapture(o,t,{pointer:{capture:s=!0,buttons:c=1,keys:u=!0}={}}){return this.pointerButtons=c,this.keys=u,!this.pointerLock&&this.device==="pointer"&&s},threshold(o,t,{filterTaps:s=!1,tapsThreshold:c=3,axis:u=void 0}){const d=Ne.toVector(o,s?c:u?1:0);return this.filterTaps=s,this.tapsThreshold=c,d},swipe({velocity:o=r_,distance:t=u_,duration:s=f_}={}){return{velocity:this.transform(Ne.toVector(o)),distance:this.transform(Ne.toVector(t)),duration:s}},delay(o=0){switch(o){case!0:return c_;case!1:return 0;default:return o}},axisThreshold(o){return o?Pe(Pe({},zw),o):zw},keyboardDisplacement(o=d_){return o}});function Vh(o){const[t,s]=o.overflow,[c,u]=o._delta,[d,z]=o._direction;(t<0&&c>0&&d<0||t>0&&c<0&&d>0)&&(o._movement[0]=o._movementBound[0]),(s<0&&u>0&&z<0||s>0&&u<0&&z>0)&&(o._movement[1]=o._movementBound[1])}const z_=30,y_=100;class w_ extends Yh{constructor(...t){super(...t),qe(this,"ingKey","pinching"),qe(this,"aliasKey","da")}init(){this.state.offset=[1,0],this.state.lastOffset=[1,0],this.state._pointerEvents=new Map}reset(){super.reset();const t=this.state;t._touchIds=[],t.canceled=!1,t.cancel=this.cancel.bind(this),t.turns=0}computeOffset(){const{type:t,movement:s,lastOffset:c}=this.state;t==="wheel"?this.state.offset=Ne.add(s,c):this.state.offset=[(1+s[0])*c[0],s[1]+c[1]]}computeMovement(){const{offset:t,lastOffset:s}=this.state;this.state.movement=[t[0]/s[0],t[1]-s[1]]}axisIntent(){const t=this.state,[s,c]=t._movement;if(!t.axis){const u=Math.abs(s)*z_-Math.abs(c);u<0?t.axis="angle":u>0&&(t.axis="scale")}}restrictToAxis(t){this.config.lockDirection&&(this.state.axis==="scale"?t[1]=0:this.state.axis==="angle"&&(t[0]=0))}cancel(){const t=this.state;t.canceled||setTimeout(()=>{t.canceled=!0,t._active=!1,this.compute(),this.emit()},0)}touchStart(t){this.ctrl.setEventIds(t);const s=this.state,c=this.ctrl.touchIds;if(s._active&&s._touchIds.every(d=>c.has(d))||c.size<2)return;this.start(t),s._touchIds=Array.from(c).slice(0,2);const u=cw(t,s._touchIds);u&&this.pinchStart(t,u)}pointerStart(t){if(t.buttons!=null&&t.buttons%2!==1)return;this.ctrl.setEventIds(t),t.target.setPointerCapture(t.pointerId);const s=this.state,c=s._pointerEvents,u=this.ctrl.pointerIds;if(s._active&&Array.from(c.keys()).every(z=>u.has(z))||(c.size<2&&c.set(t.pointerId,t),s._pointerEvents.size<2))return;this.start(t);const d=Pu(...Array.from(c.values()));d&&this.pinchStart(t,d)}pinchStart(t,s){const c=this.state;c.origin=s.origin,this.computeValues([s.distance,s.angle]),this.computeInitial(),this.compute(t),this.emit()}touchMove(t){if(!this.state._active)return;const s=cw(t,this.state._touchIds);s&&this.pinchMove(t,s)}pointerMove(t){const s=this.state._pointerEvents;if(s.has(t.pointerId)&&s.set(t.pointerId,t),!this.state._active)return;const c=Pu(...Array.from(s.values()));c&&this.pinchMove(t,c)}pinchMove(t,s){const c=this.state,u=c._values[1],d=s.angle-u;let z=0;Math.abs(d)>270&&(z+=Math.sign(d)),this.computeValues([s.distance,s.angle-360*z]),c.origin=s.origin,c.turns=z,c._movement=[c._values[0]/c._initial[0]-1,c._values[1]-c._initial[1]],this.compute(t),this.emit()}touchEnd(t){this.ctrl.setEventIds(t),this.state._active&&this.state._touchIds.some(s=>!this.ctrl.touchIds.has(s))&&(this.state._active=!1,this.compute(t),this.emit())}pointerEnd(t){const s=this.state;this.ctrl.setEventIds(t);try{t.target.releasePointerCapture(t.pointerId)}catch{}s._pointerEvents.has(t.pointerId)&&s._pointerEvents.delete(t.pointerId),s._active&&s._pointerEvents.size<2&&(s._active=!1,this.compute(t),this.emit())}gestureStart(t){t.cancelable&&t.preventDefault();const s=this.state;s._active||(this.start(t),this.computeValues([t.scale,t.rotation]),s.origin=[t.clientX,t.clientY],this.compute(t),this.emit())}gestureMove(t){if(t.cancelable&&t.preventDefault(),!this.state._active)return;const s=this.state;this.computeValues([t.scale,t.rotation]),s.origin=[t.clientX,t.clientY];const c=s._movement;s._movement=[t.scale-1,t.rotation],s._delta=Ne.sub(s._movement,c),this.compute(t),this.emit()}gestureEnd(t){this.state._active&&(this.state._active=!1,this.compute(t),this.emit())}wheel(t){const s=this.config.modifierKey;s&&(Array.isArray(s)?!s.find(c=>t[c]):!t[s])||(this.state._active?this.wheelChange(t):this.wheelStart(t),this.timeoutStore.add("wheelEnd",this.wheelEnd.bind(this)))}wheelStart(t){this.start(t),this.wheelChange(t)}wheelChange(t){"uv"in t||t.cancelable&&t.preventDefault();const c=this.state;c._delta=[-Wh(t)[1]/y_*c.offset[0],0],Ne.addTo(c._movement,c._delta),Vh(c),this.state.origin=[t.clientX,t.clientY],this.compute(t),this.emit()}wheelEnd(){this.state._active&&(this.state._active=!1,this.compute(),this.emit())}bind(t){const s=this.config.device;s&&(t(s,"start",this[s+"Start"].bind(this)),t(s,"change",this[s+"Move"].bind(this)),t(s,"end",this[s+"End"].bind(this)),t(s,"cancel",this[s+"End"].bind(this)),t("lostPointerCapture","",this[s+"End"].bind(this))),this.config.pinchOnWheel&&t("wheel","",this.wheel.bind(this),{passive:!1})}}const h_=Pe(Pe({},qh),{},{device(o,t,{shared:s,pointer:{touch:c=!1}={}}){if(s.target&&!Un.touch&&Un.gesture)return"gesture";if(Un.touch&&c)return"touch";if(Un.touchscreen){if(Un.pointer)return"pointer";if(Un.touch)return"touch"}},bounds(o,t,{scaleBounds:s={},angleBounds:c={}}){const u=z=>{const y=fw(vl(s,z),{min:-1/0,max:1/0});return[y.min,y.max]},d=z=>{const y=fw(vl(c,z),{min:-1/0,max:1/0});return[y.min,y.max]};return typeof s!="function"&&typeof c!="function"?[u(),d()]:z=>[u(z),d(z)]},threshold(o,t,s){return this.lockDirection=s.axis==="lock",Ne.toVector(o,this.lockDirection?[.1,3]:0)},modifierKey(o){return o===void 0?"ctrlKey":o},pinchOnWheel(o=!0){return o}});class g_ extends Ko{constructor(...t){super(...t),qe(this,"ingKey","moving")}move(t){this.config.mouseOnly&&t.pointerType!=="mouse"||(this.state._active?this.moveChange(t):this.moveStart(t),this.timeoutStore.add("moveEnd",this.moveEnd.bind(this)))}moveStart(t){this.start(t),this.computeValues(Gt(t)),this.compute(t),this.computeInitial(),this.emit()}moveChange(t){if(!this.state._active)return;const s=Gt(t),c=this.state;c._delta=Ne.sub(s,c._values),Ne.addTo(c._movement,c._delta),this.computeValues(s),this.compute(t),this.emit()}moveEnd(t){this.state._active&&(this.state._active=!1,this.compute(t),this.emit())}bind(t){t("pointer","change",this.move.bind(this)),t("pointer","leave",this.moveEnd.bind(this))}}const p_=Pe(Pe({},Na),{},{mouseOnly:(o=!0)=>o});class b_ extends Ko{constructor(...t){super(...t),qe(this,"ingKey","scrolling")}scroll(t){this.state._active||this.start(t),this.scrollChange(t),this.timeoutStore.add("scrollEnd",this.scrollEnd.bind(this))}scrollChange(t){t.cancelable&&t.preventDefault();const s=this.state,c=Y1(t);s._delta=Ne.sub(c,s._values),Ne.addTo(s._movement,s._delta),this.computeValues(c),this.compute(t),this.emit()}scrollEnd(){this.state._active&&(this.state._active=!1,this.compute(),this.emit())}bind(t){t("scroll","",this.scroll.bind(this))}}const j_=Na;class v_ extends Ko{constructor(...t){super(...t),qe(this,"ingKey","wheeling")}wheel(t){this.state._active||this.start(t),this.wheelChange(t),this.timeoutStore.add("wheelEnd",this.wheelEnd.bind(this))}wheelChange(t){const s=this.state;s._delta=Wh(t),Ne.addTo(s._movement,s._delta),Vh(s),this.compute(t),this.emit()}wheelEnd(){this.state._active&&(this.state._active=!1,this.compute(),this.emit())}bind(t){t("wheel","",this.wheel.bind(this))}}const k_=Na;class __ extends Ko{constructor(...t){super(...t),qe(this,"ingKey","hovering")}enter(t){this.config.mouseOnly&&t.pointerType!=="mouse"||(this.start(t),this.computeValues(Gt(t)),this.compute(t),this.emit())}leave(t){if(this.config.mouseOnly&&t.pointerType!=="mouse")return;const s=this.state;if(!s._active)return;s._active=!1;const c=Gt(t);s._movement=s._delta=Ne.sub(c,s._values),this.computeValues(c),this.compute(t),s.delta=s.movement,this.emit()}bind(t){t("pointer","enter",this.enter.bind(this)),t("pointer","leave",this.leave.bind(this))}}const A_=Pe(Pe({},Na),{},{mouseOnly:(o=!0)=>o}),lf=new Map,Ju=new Map;function C_(o){lf.set(o.key,o.engine),Ju.set(o.key,o.resolver)}const D_={key:"drag",engine:n_,resolver:m_},T_={key:"hover",engine:__,resolver:A_},E_={key:"move",engine:g_,resolver:p_},S_={key:"pinch",engine:w_,resolver:h_},x_={key:"scroll",engine:b_,resolver:j_},G_={key:"wheel",engine:v_,resolver:k_};function O_(o,t){if(o==null)return{};var s={},c=Object.keys(o),u,d;for(d=0;d<c.length;d++)u=c[d],!(t.indexOf(u)>=0)&&(s[u]=o[u]);return s}function B_(o,t){if(o==null)return{};var s=O_(o,t),c,u;if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(o);for(u=0;u<d.length;u++)c=d[u],!(t.indexOf(c)>=0)&&Object.prototype.propertyIsEnumerable.call(o,c)&&(s[c]=o[c])}return s}const N_={target(o){if(o)return()=>"current"in o?o.current:o},enabled(o=!0){return o},window(o=Un.isBrowser?window:void 0){return o},eventOptions({passive:o=!0,capture:t=!1}={}){return{passive:o,capture:t}},transform(o){return o}},R_=["target","eventOptions","window","enabled","transform"];function wl(o={},t){const s={};for(const[c,u]of Object.entries(t))switch(typeof u){case"function":s[c]=u.call(s,o[c],c,o);break;case"object":s[c]=wl(o[c],u);break;case"boolean":u&&(s[c]=o[c]);break}return s}function M_(o,t,s={}){const c=o,{target:u,eventOptions:d,window:z,enabled:y,transform:h}=c,w=B_(c,R_);if(s.shared=wl({target:u,eventOptions:d,window:z,enabled:y,transform:h},N_),t){const v=Ju.get(t);s[t]=wl(Pe({shared:s.shared},w),v)}else for(const v in w){const k=Ju.get(v);k&&(s[v]=wl(Pe({shared:s.shared},w[v]),k))}return s}class Qh{constructor(t,s){qe(this,"_listeners",new Set),this._ctrl=t,this._gestureKey=s}add(t,s,c,u,d){const z=this._listeners,y=K1(s,c),h=this._gestureKey?this._ctrl.config[this._gestureKey].eventOptions:{},w=Pe(Pe({},h),d);t.addEventListener(y,u,w);const v=()=>{t.removeEventListener(y,u,w),z.delete(v)};return z.add(v),v}clean(){this._listeners.forEach(t=>t()),this._listeners.clear()}}class P_{constructor(){qe(this,"_timeouts",new Map)}add(t,s,c=140,...u){this.remove(t),this._timeouts.set(t,window.setTimeout(s,c,...u))}remove(t){const s=this._timeouts.get(t);s&&window.clearTimeout(s)}clean(){this._timeouts.forEach(t=>{window.clearTimeout(t)}),this._timeouts.clear()}}class J_{constructor(t){qe(this,"gestures",new Set),qe(this,"_targetEventStore",new Qh(this)),qe(this,"gestureEventStores",{}),qe(this,"gestureTimeoutStores",{}),qe(this,"handlers",{}),qe(this,"config",{}),qe(this,"pointerIds",new Set),qe(this,"touchIds",new Set),qe(this,"state",{shared:{shiftKey:!1,metaKey:!1,ctrlKey:!1,altKey:!1}}),H_(this,t)}setEventIds(t){if(xl(t))return this.touchIds=new Set(W1(t)),this.touchIds;if("pointerId"in t)return t.type==="pointerup"||t.type==="pointercancel"?this.pointerIds.delete(t.pointerId):t.type==="pointerdown"&&this.pointerIds.add(t.pointerId),this.pointerIds}applyHandlers(t,s){this.handlers=t,this.nativeHandlers=s}applyConfig(t,s){this.config=M_(t,s,this.config)}clean(){this._targetEventStore.clean();for(const t of this.gestures)this.gestureEventStores[t].clean(),this.gestureTimeoutStores[t].clean()}effect(){return this.config.shared.target&&this.bind(),()=>this._targetEventStore.clean()}bind(...t){const s=this.config.shared,c={};let u;if(!(s.target&&(u=s.target(),!u))){if(s.enabled){for(const z of this.gestures){const y=this.config[z],h=yw(c,y.eventOptions,!!u);if(y.enabled){const w=lf.get(z);new w(this,t,z).bind(h)}}const d=yw(c,s.eventOptions,!!u);for(const z in this.nativeHandlers)d(z,"",y=>this.nativeHandlers[z](Pe(Pe({},this.state.shared),{},{event:y,args:t})),void 0,!0)}for(const d in c)c[d]=V1(...c[d]);if(!u)return c;for(const d in c){const{device:z,capture:y,passive:h}=U1(d);this._targetEventStore.add(u,z,"",c[d],{capture:y,passive:h})}}}}function At(o,t){o.gestures.add(t),o.gestureEventStores[t]=new Qh(o,t),o.gestureTimeoutStores[t]=new P_}function H_(o,t){t.drag&&At(o,"drag"),t.wheel&&At(o,"wheel"),t.scroll&&At(o,"scroll"),t.move&&At(o,"move"),t.pinch&&At(o,"pinch"),t.hover&&At(o,"hover")}const yw=(o,t,s)=>(c,u,d,z={},y=!1)=>{var h,w;const v=(h=z.capture)!==null&&h!==void 0?h:t.capture,k=(w=z.passive)!==null&&w!==void 0?w:t.passive;let G=y?c:H1(c,u,v);s&&k&&(G+="Passive"),o[G]=o[G]||[],o[G].push(d)},F_=/^on(Drag|Wheel|Scroll|Move|Pinch|Hover)/;function U_(o){const t={},s={},c=new Set;for(let u in o)F_.test(u)?(c.add(RegExp.lastMatch),s[u]=o[u]):t[u]=o[u];return[s,t,c]}function Ct(o,t,s,c,u,d){if(!o.has(s)||!lf.has(c))return;const z=s+"Start",y=s+"End",h=w=>{let v;return w.first&&z in t&&t[z](w),s in t&&(v=t[s](w)),w.last&&y in t&&t[y](w),v};u[c]=h,d[c]=d[c]||{}}function K_(o,t){const[s,c,u]=U_(o),d={};return Ct(u,s,"onDrag","drag",d,t),Ct(u,s,"onWheel","wheel",d,t),Ct(u,s,"onScroll","scroll",d,t),Ct(u,s,"onPinch","pinch",d,t),Ct(u,s,"onMove","move",d,t),Ct(u,s,"onHover","hover",d,t),{handlers:d,config:t,nativeHandlers:c}}function L_(o,t={},s,c){const u=Kn.useMemo(()=>new J_(o),[]);if(u.applyHandlers(o,c),u.applyConfig(t,s),Kn.useEffect(u.effect.bind(u)),Kn.useEffect(()=>u.clean.bind(u),[]),t.target===void 0)return u.bind.bind(u)}function Z_(o){return o.forEach(C_),function(s,c){const{handlers:u,nativeHandlers:d,config:z}=K_(s,c||{});return L_(u,z,void 0,d)}}function W_(o,t){return Z_([D_,S_,x_,G_,E_,T_])(o,t||{})}const Y_=({parsedSongs:o,minZoom:t,maxZoom:s,defaultZoom:c,gesturesTarget:u})=>{const[d,z]=Ta("chosenSong",1),[y,h]=Ta("starredSongs",[]),[w,v]=Ta("onlyStarred",!1),[k,G]=Ta("selectedSong",null),[M,K]=Ta("zoomLevel",c),[U,ee]=B.useState(null),[q,W]=B.useState(null),I=y.length;B.useEffect(()=>{w&&(y.length?y.find($=>$===d)||z(y[0]):v(!1))},[w,v,d,z,y]);const ue=$=>{const Me=d===$,je=y.indexOf($),Je=je+1,T=!!Je,P=k===$;return{chosen:Me,starredNumber:Je,starred:T,toggleStarred:()=>{G(T?H=>H===$?y.length<=1?null:y.length>je+1?y[je+1]:y[je-1]:H:$),h(H=>T?H.filter(ce=>ce!==$):[...H,$])},selected:P,toggleSelected:()=>G(P?null:$),moveUp:je<1?void 0:()=>h(H=>{const ce=H.filter(me=>me!==$);return ce.splice(je-1,0,$),ce}),moveDown:je>y.length-2?void 0:()=>h(H=>{const ce=H.filter(me=>me!==$);return ce.splice(je+1,0,$),ce})}},Y=$=>({...$,...ue($.number)}),Q=(w?y.flatMap($=>{const Me=o.find(je=>je.number===$);return Me?[Me]:[]}):o).map(Y),xe=$=>{const je=Q.findIndex(T=>T.chosen)-$,Je=je>=Q.length?0:je<0?Q.length-1:je;z(Q[Je].number)},Qe=$=>{ee($),W(M)},dn=$=>{if(U===null||q===null)return;const Me=$/U,je=Math.floor(Math.log10(Me)*10),Je=Math.min(Math.max(t,q+je),s);K(Je)};return W_({onDrag:({swipe:[$]})=>{$!==0&&xe($)},onPinch:({first:$,da:[Me]})=>{$&&Qe(Me),dn(Me)}},{target:u}),{songs:Q,setChosenSong:z,starredCount:I,onlyStarred:w,toggleOnlyStarred:()=>v($=>!$),zoomLevel:M}},q_=({parsedSongbook:o})=>{const t=B.useRef(null),{songs:s,setChosenSong:c,starredCount:u,onlyStarred:d,toggleOnlyStarred:z,zoomLevel:y}=Y_({parsedSongs:o.songs,minZoom:1,maxZoom:20,defaultZoom:5,gesturesTarget:t}),[h,w]=Ta("menuShown",!1),[v,k]=Ta("chordsShown",!0),G=()=>w(!0),M=()=>w(!1),K=()=>k(!0),U=()=>k(!1),ee=W=>{c(W),M()},q=s.find(W=>W.chosen);return N.jsxs(N.Fragment,{children:[!h&&N.jsx(x1,{onlyStarred:d,chordsShown:v,onClickMenu:G,onClickGuitar:v?U:K}),N.jsx("div",{ref:t,className:`container-lg pt-1 min-vh-100 bg-white songbook zoom-level-${y}`,children:!!q&&N.jsx(kb,{song:q,starredCount:u,chordsShown:v})}),N.jsx(S1,{songs:s,checksum:o.checksum,chooseSong:ee,starredCount:u,onlyStarred:d,toggleOnlyStarred:z,show:h,onClose:M})]})},X_=` [Cadd9] [G] [e7] [D]
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
`,V_=`Ref. Gloria in excelsis Deo, Gloria, Gloria! [A] [cis] [D] [E] [E7]
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
`,Q_=`Ref. Chwała na wysokości! [A] [D] [E]
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
`,I_=`Alleluja, alleluja, alleluja, alleluuuuja! |2x [A] [D] [A] [D] [E] [A]
(werset z Ewangelii) [a] [e]
(werset z Ewangelii) [G] [e] [F] [G]
Alleluja, alleluja, alleluja, alleluuuuja!   |2x
`,$_=`                            [G7]
O usłysz mój głos!          [c]
O usłysz mój głos!          [B]
Przyjdź i wysłuchaj mnie.   [As] [G7] [c]
`,eA=` [A9] [E7sus/A] [A9] [E/A]
Święty, święty Pan, Bóg zastępów
Pełne jest niebo i ziemia Twej chwały |2x
Hosanna, hosanna, hosanna na wysokości! [A] [fis] [cis] [Dsus2] [h7] [E]

Błogosławiony, który idzie w imię Twoje, Panie
Hosanna, hosanna, hosanna na wysokości |2x
`,nA=`Ojcze nasz, który jesteś w niebie [B] [F] [g7] [d]
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
`,iA=`Baranku Boży [H] [E]
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
`,aA=`1. Tryumfy Króla Niebieskiego [G] [C] [G] [G] [D] [G]
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
`,tA=`1. Gdy śliczna Panna        [D] [A] [h]
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
`,oA=`1. Lulajże Jezuniu, moja perełko, [C] [d] [G] [C]
Lulaj ulubione me Pieścidełko. [a] [d] [G] [C]

Ref. Lulajże, Jezuniu, lulajże lulaj! [C] [F] [A7] [d] [G] [C]
A Ty Go, Matulu w płaczu utulaj. [a] [d] [G] [C]

2. Zamknijże znużone płaczem powieczki,
Utulże zemdlone łkaniem usteczki.

3. Lulajże, piękniuchny nasz Aniołeczku.
Lulajże wdzięczniuchny świata Kwiateczku.

4. Lulajże, Różyczko najozdobniejsza,
Lulajże, Lilijko najprzyjemniejsza.
`,sA=`1. Z Narodzenia Pana dzień dziś wesoły. [D] [G] [A] [D]
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
`,lA=` [C] [As] [B] [C]
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
`,cA=`1. Dzisiaj w Betlejem, dzisiaj w Betlejem wesoła nowina [D] [A]
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
`,rA=` [h] [D/A] [G7] [e6] [Fis4-3]
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
`,uA=`1. Cicha noc, święta noc,   [G]
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
`,fA=`1. Jezusa narodzonego wszyscy witajmy, [D] [G] [D] [A] [A7] [D]
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
`,dA=`1. Pastuszkowie bracia mili [F]
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
`,mA=`1. Gdy się Chrystus rodzi, [C] [F] [C]
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
`,zA=`1. Pójdźmy wszyscy do stajenki,     [F]
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
`,yA=` [D] [h] [G] [A]
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
`,wA=`1. Prawda jedyna słowa Jezusa z Nazaretu, [D] [A] [fis] [cis]
że Swego Syna posłał z niebios Bóg na świat.
Aby niewinnie cierpiąc zmarł za nasze grzechy
i w pohańbieniu przyjął winy wszystkich nas.

Ref. Dzięki Ci, Boże mój, za ten krzyż, który Jezus
cierpiał za mnie, Jezus cierpiał za mnie.

2. Uwierz w Jezusa, przecież On za ciebie umarł
i z miłości do nas przyszedł z nieba na ten świat.
Błogosławiony ten, kto wierzy, choć nie widział
zaufaj dziś Bogu, a na wieki będziesz żył.
`,hA=`1. Drzewo krzyża surowe,
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
`,gA=`Dzięki za Twój krzyż [A] [E] [fis] [A]
Dzięki za zwycięstwo Twe [D/Fis] [A] [E] [E7]
Niech Twa Krew oczyszcza mnie [A] [E] [fis] [A]
Dzięki za miłosierdzie Twe [D/Fis] [Esus] [E7]
`,pA=`1. Golgoto, Golgoto, Golgoto! [g] [c] [F] [B] [D7]
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
`,bA=` [a] [a7] [d] [d7] [a] [E7] [a]
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
`,jA=`1. Ten którego pocałuję w twarz, [d] [C]
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
`,vA=`1. Bez wstążek lub balonów [e]
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
`,kA=`Ref. Rozpięty na ramionach [a] [C] [G]
Jak sokół na niebie, [F] [C] [E7]
Chrystusie, Synu Boga, [a] [C] [G]
Spójrz, proszę, na ziemię. [F] [a] [E7]

1. Na ruchliwe ulice, zabieganych ludzi, [a] [F] [G] [C]
Gdy dzień się już kończy, a ranek się budzi. [F] [d] [C] [E7]
Uśmiechnij się przyjaźnie [a] [F]
Z wysokiego krzyża, do ciężko pracujących, [G] [C] [F] [d]
Których głód poniża. [C] [E7]

Ref.: Rozpięty…

2. Pociesz zrozpaczonych, zrozum głodujących,
Modlących się wysłuchaj, wybacz umierającym.
Spójrz, cierpienia sokole na wszechświat, na ziemię,
Na cichy, ciemny kościół, dziecko wzywające Ciebie.

Ref.: Rozpięty...

3. A gdy nas będziesz sądził, Boskie miłosierdzie,
Prosimy, Twoje dzieci, nie sądź na miarę siebie.

Ref.: Rozpięty…
`,_A=`Ref.: Śpiewajcie Panu, bo wielka Jego moc i chwała!
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
`,AA=`Uwielbiam Imię Twoje, Panie [G] [C] [D]
Wywyższam Cię i daję Ci hołd [G] [C] [D]
W przedsionku chwały Twej staję [e] [C]
Z radością śpiewam Ci pieśń [a] [D]
O Panie Jezu, chcę wyznać, że [G] [C] [D]
Ja kocham Ciebie, [G]
Ty zmieniasz mnie! [C] [D]
Chcę Ci dziękować [G]
dziś ze wszystkich sił [C] [D]
Dajesz mi siebie, bym na wieki żył! [a] [C] [D]
`,CA=`Ref. Zaśpiewajcie Panu pieśń nową [D] [E] [fis]
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
`,DA=`1. Po szabacie pierwszego dnia z rana [e] [C]
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
`,TA=`Wody nie ugaszą jej,    [C] [G] [a7]
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
`,EA=`Ref. Zmartwychwstał Pan i żyje dziś, [e] [C] [G]
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
`,SA=`Ref. Oto są baranki młode, oto ci, co zawołali: alleluja!
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
`,xA=`1. Gdy drogi pomyli los zły [G] [C7+]
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
`,GA=`Swojego Ducha, Panie,    [D]
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

`,OA=` [G] [e] [G] [e]
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
`,BA=`1. Maryjo, Matko mojego wezwania [G] [H]
chcę i pragnę idąc za Twym słowem, [e] [C]
czynić wszystko co powie mi Jezus,
miłować Jego wolę, a wszystko inne ze względu na Niego samego.

Ref: Bo tak jest z tymi, którzy z Ducha narodzili się,
nikt nie wie dokąd pójdą za wolą Twą.

2. Słuchać Słowa całym sercem
i w Duchu Świętym je wypełnić.
Amen. Amen. Amen.
`,NA=` [h] [G7+] [fis7]
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
`,RA=`Powietrzem moim Jest x2 [F] [B] [F] [B]
Obecność Twoja [F] [a7/E] [d] [C9]
Święta w sercu mym [B] [F/A] [C]
Powszednim chlebem mym x2 [F] [B] [F] [B]
Twe żywe słowo [F] [a7/E] [d] [C9]
dane mi dziś [B] [F/A] [C] [C7]

Ref. Bez Ciebie [F] [a7/E] [d] [C9]
nie mogę już żyć [B] [F/A] [C]
Dla Ciebie me serce chce bić [F] [a7/E] [d] [C9] [B] [F/A] [C]
`,MA=`1. Kochany bracie, [F]
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
`,PA=`Pan jest Pasterzem moim, [h] [e] [G] [A] [h]
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
`,JA=`Do Ciebie, Panie [G] [C]
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
`,HA=` [E] [E7+] [fis7] [A2]
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
`,FA=`Nic, nie musisz mówić nic [d] [B]
Odpocznij we mnie [C]
Czuj się bezpiecznie [F] [A7]

Ref. Pozwól kochać się [d] [B]
Miłość pragnie Ciebie [C] [F] [A7] [d]
`,UA=`Ref. Wszystko, co dziś mamy [A] [cis]
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
`,KA=` [G] [D] [C] [G] [e] [C] [D] [G]
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
`,LA=`Mój Pan mocą moją jest [C] [B]
Skałą i zbawieniem, On Bogiem mym [F] [C]

Ref.: Dla Ciebie otwieram serce me |3x [B] [F] [C]

Mój Pan Królem moim jest [C] [B]
Na zawsze i na wieki. Amen. [F] [C]
`,ZA=`Solo akordeon
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
`,WA=`1. Niech wam błogosławi Pan [H] [E] [H] [E]
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
`,YA=` [E] [fis] [E] [fis] [gis] [fis]
 [E] [fis] [H] [A] [gis] [fis]
Śpiewajcie Panu, sławcie Go! [E] [fis] [E] [fis]
On jest naszą pomocą. [E] [fis] [E] [fis] [E]
Śpiewajcie Panu, sławcie Go! [E] [fis] [E] [fis]
On jest naszą pomocą. [E] [fis] [E]
Amen, amen, amen |x4 [E] [fis] [gis] [fis]
`,qA=` [C] [e/H] [a7] [Gsus4]
Jezus dziś przyszedł do mnie [C] [e/H] [F/A] [G]
Wziął mnie w ramiona Swoje [C] [e/H] [F/A] [G]
Rzekł, jesteś mój [C] [e/H] [a7] [Gsus4]
Ja zaś bratem twoim jestem [F] [G]
Daj mi dłoń [C] [e/H] [a7] [Gsus4]
 [F] [As] [G] [C7+]
`,XA=`Ref. Wykrzykujcie na cześć Pana [e] [C]
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
`,VA=`Nie bójcie się żyć dla miłości [e] [C] [a] [D]
Dla tej miłości warto żyć [e] [D] [e] [D]
`,QA=`1. Usłyszałem i ujrzałem [A] [A4/3]
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
`,IA=`1.Twoje ręce to mój ląd, wiem nie utonę [a] [F] [C]
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
`,$A=`1. Schowaj mnie [C] [G/H] [a]
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
`,eC=`Niechaj zstąpi Duch Twój i odnowi ziemię [e]
Życiodajny spłynie deszcz [C]
Na spragnione serca [C]
Obmyj mnie i uświęć mnie [a] [H7]
Uwielbienia niech popłynie pieśń [e] [(e7)]

Chwała Jezusowi, który za mnie życie dał [C] [G]
Chwała Temu, który [C]
pierwszy umiłował mnie [G]
Jezus, tylko Jezus Panem jest! [C] [H7] [e]
`,nC=`1. Wznoszę swe oczy ku górom, [cis] [A] [E]
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
`,iC=`Stoję dziś, moje serce, ręce tak wyciągam [A] [E] [H] [cis]
w podziwie dla Tego, [A] [E]
który wszystko dał. [H] [cis]
Stoję dziś, [A] [E]
moją duszę, Panie, Tobie składam. [H] [cis]
Ja chcę być jak Ty. [A] [E] [H]
`,aC=`Mów do mnie, Panie,     [c] [B]
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
`,tC=`Dotknij Panie moich oczu, [D] [A]
abym przejrzał [h]
Dotknij Panie moich warg, [D] [A]
abym przemówił uwielbieniem [h] [G] [A]
Dotknij Panie mego serca [D] [A]
i oczyść je [h]
Niech Twój Święty Duch [e]
dziś ogarnia mnie. [G] [A]
`,oC=`Uwielbiajcie Pana [d] [C]
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
`,sC=`Ref. Oto ja, poślij mnie. [E] [A] [H7]
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
`,lC=`W ciele Chrystusa [D]
Tworzymy jedno [h]
chociaż tak wielu nas jest x2 [e] [G] [A]

Ref. Jeden duch, jedna wiara [A] [h]
Jedna nadzieja w nas jest [e] [G] [A]
Jeden duch, jedna wiara [A] [h]
Jeden Bóg i Ojciec nasz [e] [G] [A]
`,cC=`1. Tylko w Bogu moje jest zbawienie. [D7+] [E] [fis4-3]
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
`,rC=`Więcej miłości, więcej mocy [e] [C]
Więcej Ciebie w życiu mym [D] [e]

Ref. Bo całym swoim sercem [a]
uwielbiam Ciebie [D] [e]
Całą swoją duszą [a]
uwielbiam Ciebie [D] [e]
Całym swoim życiem [a]
uwielbiam Ciebie [D] [e]
Tyś jest Bogiem mym [C] [D]
Tyś Panem moim jest [e]
`,uC=`Duchu Święty, Stworzycielu [B]
Ożywiaj moją modlitwę, [Es] [B]
Ożywiaj moje pragnienie [c] [F]
Pełnienia woli Ojca. [B] [F]
Duchu Święty, Stworzycielu, [B]
Otwieraj moje oczy, by widziały, [Es] [B]
Otwieraj moje uszy, by słyszały, [c] [F]
Serce, aby czuło [B] [F]
Duchu Święty, Ożywicielu – przyjdź! [c] [F] [B]
`,fC=`Jezus, najwyższe Imię [D] [D7+] [D6] [D7+]
nasz Zbawiciel, Książę Pokoju [e] [A7] [D] [G] [A]
Emmanuel, Bóg jest z nami [D] [D7+] [D6] [D7+]
Odkupiciel, Słowo żywota [e] [A7] [D] [D7]
Święty Bóg, Mesjasz prawdziwy, [G] [A] [D] [h]
jedyny Ojca Syn, Umiłowany. [G] [A] [D] [D7]
Zgładził grzech, Baranek na wieki, [G] [A] [D] [h]
Królów Król i Panów Pan. [e] [A7] [D]
`,dC=`1. Duchu Święty, obiecany nam [e] [C] [D] [h] [a] [h] [e]
Przypominaj to, co mówi Pan. [e] [C] [D] [h] [a] [h] [e]

Ref. Z Tobą Słowo Boże [e] [C] [D]
żywe staje się. [D] [G] [D/Fis]
W moim życiu, Duchu [e] [C] [D] [h]
prowadź mnie. [a] [h] [e]

2. Duchu Prawdy, Ty umacniaj mnie
W drodze życia, gdzie wybrałeś mnie.

3. Daj mi spotkać dzisiaj twarzą w twarz
Żyjącego Pana pośród nas.
`,mC=`1. Patrzę w moje serce, widzę krew i rany [cis] [H] [E]
Patrzę głębiej, widzę obraz,
obraz piękny, namalowany przez Ojca.

2. Na tym obrazie jesteś Ty, widzę Twoją twarz,
Jezu, to naprawdę jesteś Ty,
Ty żyjesz we mnie, jesteś w moim sercu.

Ref. Ja dziękuję Ci za Twą świętą Krew, [A] [H] [cis] [E] [A] [H] [cis] [E]
która spływa dziś [A] [H] [cis] [gis]
na me serce i oczyszcza je [A] [H] [E]
`,zC=`Duchu Święty, pouczaj mnie. [e] [h]
Duchu Święty, poprowadź mnie. [e] [h]
Chcę iść za Tobą Duchu Święty, [C] [D] [e]
chcę iść za Tobą Duchu Święty. [C] [D] [e]
`,yC=` [B] [F] [g] [a] [d]
Nasz Pan jest potężny [B] [F]
w mocy Swej, [C]
króluje nad nami dziś. [d] [B]
Z nieba rządzi w mocy, [F]
miłości, mądrości Swej. [g] [a] [d]
 [B] [F] [g] [a] [h7/5-]
`,wC=`Jesteśmy piękni [F] [C/e]
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
`,hC=` [G] [F] [G] [F]
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
`,gC=`1. Wodę zamieniłeś w wino [cis] [A] [E]
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
`,pC=`Będę śpiewał Tobie [C] [F] [G]
mocy moja [e] [a] [C]
Ty, Panie, jesteś mą nadzieją [F] [G] [C] [a]
Tobie ufam i bać się nie będę [C] [d] [G] [C]
`,bC=`Wszyscy ludzie klaszczą w dłonie [C] [G] [D] [e7]
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
`,jC=`/x2/ Duchu Święty, Duchu Święty [a] [F7+] [d] [E7]
1. O przyjdź i rozpal nas i ulecz nas, miłość nam daj
2. O przyjdź, napełnij nas, rozraduj nas, miłość nam daj
3. O przyjdź i utul nas, rozkochaj nas, miłość nam daj
`,vC=`1. Miałem Pana zawsze [e]
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
`,kC=`Oddajmy cześć wiecznemu Panu chwał, [h] [e] [fis] [h]
Pokłońmy się Temu, który [e] [A] [A7] [D] [D7]
Rozpostarł niebiosa i utwierdził ziemi krąg, [G] [h]
Jego chwała wznosi się ponad szczyty gór, [e] [A] [A7] [D] [es0]
Jego łaska nad nami jest, a niebo Jego tron. [e] [G] [fis] [h]

Ref. Bóg to nasz Pan i tylko On. [G] [fis] [h]
`,_C=`Panu naszemu pieśni grajcie [d] [C] [F]
wysławiajcie Jego święte Imię [C] [F] [C] [d] [(C)]

Ref. Alleluja, alleluja, alleluja, alleluja. [d] [C] [F] [C] [F] [C] [d] [(C)]
`,AC=`1. Moje wędrowanie, moje upadanie, [D] [E] [A] [D] [E] [fis]
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
`,CC=`Przyjaciela mam, co pociesza mnie, [C] [G] [a] [F]
gdy o Jego ramię oprę się.
W nim nadzieję mam, uleciał strach.
On najbliżej jest, zawsze troszczy się.

Ref. Królów Król, z nami Bóg.
Jezus, Jezus
`,DC=`Jezus, Jezus, Jezus, Jezus, Jezus [D] [E7] [G] [A7] [D]

Ref. Pokonał śmierć, pokonał mój grzech [G] [D]
Zmartwychwstał Pan i Królem jest [G] [D]
 [G] [D] [G] [A] [D]
`,TC=`Jedyny Pan, prawdziwy Bóg, [a] [D] [G] [C]
wszystko, co mam, oddaję Mu. [a] [D] [G] [C]
On jedynym Panem jest, [a] [D] [G] [C]
Szema Izrael! [F] [G]
Szema Izrael! [F] [G]

Solo gitara [A7] [D7] [G] [C] [|x3]
 [F] [G] [|x2]
`,EC=`Ref. Jezus uzdrawia dziś. Alleluja! [e] [G] [a] [H7]
Jezus obecny tu. Pan obecny tu.
Jezus uzdrawia dziś. Alleluja! Jezus obecny tu.

Z każdej nędzy wydobywa. [a] [H7]
Pan miłosierdzie Swoje [e] [C]
Dziś wylewa na zebrany [a] [H7]
Lud - Swoje dzieci. [e] [C]
Wolność daje, więzy zrywa. [a] [H7]
Jezus, Pan poprowadzi [e] [C]
Drogą prostą. On nie zawiedzie mnie. [C] [H7]
`,SC=`Jak dobrze jest dziękować Ci Panie [a7] [d7]
i śpiewać psalm Twojemu Imieniu [G7] [C] [E7]
i opowiadać rano Twoje miłosierdzie, [a7] [d7]
a w nocy wierność Twoją [a7]
przy dziesięciostrunnej harfie i lutni [E7] [F] [d7]
i dźwięcznej cytrze [a7] [E7]
`,xC=`W Tobie jest światło, każdy mrok rozjaśni. [h] [A] [G] [D] [fis7]
W Tobie jest życie, ono śmierć zwycięża. [h] [A] [G] [fis] [h]
Ufam Tobie, Miłosierny [G] [D] [G7+] [D]
Jezu, wybaw nas! [G] [A] [D] [(fis7)]
`,GC=`1. O, Panie, Ty nam dajesz [d] [F]
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
`,OC=`Boże, Ojcze na niebie, [fis]
przez Syna Twego, Jezusa, [D]
poślij nam Ducha Świętego. x2 [A] [E] [fis]

Ref. Niech umacnia nas, [D]
niech prowadzi nas, [E]
niech wyzwala nas i niech strzeże nas. [fis] [A]
Niech ogarnia nas Jego moc! x2 [D] [E] [fis]
`,BC=`Przed Tobą, Wszechmocny,    [B] [F/A]
kolana zginamy.             [g7] [Ges7+]
Dla Ciebie, żyjemy,         [B] [F/A]
stworzeni, by kochać Cię.   [g7] [Es7+]
Przed Tobą, Przedwieczny,   [B] [F/A]
korony składamy             [g7] [Ges7+]
Ty jesteś spełnieniem       [B/F] [c7]
Tęsknoty naszych serc       [B/D] [Es7+]

Ref. Wszystko, co mam       [c7] [Es7+] [g7]
to prawda i łaska           [c7] [Es7+] [g7]
wypisać je chcę             [c7] [Es7+] [g7]
na serca tablicach          [c7] [Fsus]

Przed Tobą, Wszechmocny,    [G] [D/Fis]
kolana zginamy.             [e7] [Es7+]
Dla Ciebie, żyjemy,         [G] [D/Fis]
stworzeni, by kochać Cię.   [e7] [C7+]
Przed Tobą, Przedwieczny,   [G] [D/Fis]
korony składamy             [e7] [Es7+]
Ty jesteś spełnieniem       [B/D] [c7]
Tęsknoty naszych serc       [B/D] [Es7+]

Ref. Wszystko, co mam...

Bridge: Jesteś naszą chlubą,  [B]
grą na strunach,              [c7/11]
niewinnego serca śpiewem.     [Es7/9] [F]
Jesteś naszą chlubą,          [g7]
grą na strunach               [F/A] [Bsus2]
serca niewinnego.             [Es7+/9] [F]

Ref. x2 Wszystko, co mam...
`,NC=`Ref. x2 Szukam Cię, Panie, [cis] [gis]
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
`,RC=`1. Śpiewaj Panu, swemu Bogu [D]
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
`,MC=`Ukaż mi, Panie, Swą twarz. [D] [G] [D] [G]
Daj mi usłyszeć Twój głos, [D] [G] [D] [G]
bo słodki jest Twój głos [D] [e] [fis]
i twarz pełna wdzięku [G] [e]
Ukaż mi, Panie, Swą twarz. [G] [A6/4] [D]
`,PC=`Panie, Twój tron wznosi się [e] [A]
Nad wszystkie ziemie świata [D] [fis] [h]
Jesteś Najwyższy, Panie mój [e] [A]
i Królu mój. x2 [D]

Ref. Wywyższamy Cię, Alleluja [D]
Wywyższamy Cię, Alleluja [fis]
Wywyższamy Cię, Boże nasz. [G] [D] [A] [(A] [D)]
`,JC=`Nic nie odłączy mnie od miłości Twej [C] [C7] [F] [F7+] [d]
Bo góry mogą ustąpić i zachwiać się pagórki [F] [G] [e] [B]
Lecz miłość Twoja, Panie wierna jest. [d] [d7] [G7]
`,HC=`1. My, którzy wszystko liczymy, [h]
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
`,FC=`Nie lękajcie się, Ja jestem z wami.         [C] [F] [G] [C] [F] [G]
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
`,UC=`Ofiaruję Tobie, Panie mój,              [C] [G] [a]
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

`,KC=`1. Ty światłość dnia wszedłeś [E] [H]
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
`,LC=`Daję Ci serce moje, Panie, [D] [fis] [G] [H7]
daję Ci silne ręce moje. [e] [A] [D] [A7]
Dodawaj sił mi nieustannie, [D] [fis] [G] [H7]
by udźwignęły świat (ku Tobie). [e] [A] [D] [A7]
`,ZC=`1. Jezus daje nam zbawienie     [d] [C] [a] [d]
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
`,WC=`Boże Twa łaska nad nami jest [D] [A4-3] [G]
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
`,YC=`1. Szedłem kiedyś Jezu [D]
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
`,qC=`2x: Pokorna Służebnico Pana [g] [F]
Łamiąca strzały nieprzyjaciela [g] [F] [B]
Miażdżąca głowę węża [F] [g]

Ref. x2: Bądź zawsze przy mnie [Es]
Abym stawał się pokornym sługą [c] [B]
Na wzór mego Mistrza i Pana [F] [g]
`,XC=`1. Nie zastanawiał się długo, [D]
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
`,VC=`Będę z aniołami śpiewał: Alleluja! [E] [H] [A] [H] [E]
Będę tańczył ze świętymi. Alleluja! [cis7] [gis7] [A] [H] [E]
Radość duszy mojej chcę wyśpiewać światu. [A] [gis7] [fis7] [H]
Jezu, niesiesz pokój, prowadź mnie zawsze. [A] [gis7] [fis7] [A] [H]

Ref. Alleluja, radość duszy mojej! [E] [H] [A] [H] [E]
Alleluja! [E] [H] [fis7] [gis7] [A] [H]
`,QC=`Ref. Zbudowani na Chrystusie [C] [G]
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
`,IC=`Duchu Miłości wylewaj się na nas [D] [A] [h] [fis]
Z przebitego serca Jezusa, Jezusa. [G] [D/Fis] [e7] [A7]
`,$C=`Albowiem tak Bóg umiłował świat, [e7/9] [C] [D] [h7]
Że Syna Jednorodzonego dał, [a7] [h7] [e7/9]
By każdy kto w Niego wierzy, [e7/9] [C] [D] [h7]
Nie zginął, ale życie wieczne miał [a7] [h7] [e7/9]

Ref. Lecz by mógł żyć na wieki, [D7] [G] [D] [es0]
by mógł żyć na wieki, [e] [H7]
Lecz by mógł żyć na wieki, [D7] [G] [D] [es0]
by mógł żyć na wieki. [e] [H7]
`,e2=`1. W kruszynie chleba           [G] [h]
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
`,n2=`Spocznij na nas, Duchu Pana, [D] [A] [G] [e7]
Duchu mądrości i rozumu [D] [A] [G] [e7]
Duchu poznania i bojaźni Bożej [D] [A] [h] [fis]
Duchu miłości i mocy, [G] [A] [D] [h]
Duchu miłości i mocy. [G] [A] [D] [(C] [A7)]
`,i2=`Uwielbiam Cię, błogosławię Cię [D] [h]
Swym Duchem napełnij mnie. [e] [A]
Uwielbiam Cię, chcę widzieć Twoją [D]
świętą twarz [h]
i w miłość Twoją wtopić się. [G] [A] [D]
`,a2=`Pan jest mocą Swojego ludu          [F] [B] [C7]
Pieśnią moją jest Pan               [F] [B] [C7]
Moja tarcza i moja moc              [B] [a] [d]
On jest mym Bogiem, nie jestem sam  [C7] [F] [B] [C7]
W Nim moja siła, nie jestem sam     [e] [B] [C7] [F]
`,t2=`Ty masz moc uzdrowienia, Jezu. [A] [G/A]
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
`,o2=`Łaską jesteśmy zbawieni [A] [fis]
Z łaski możemy tu stać [h] [E7]
Łaską usprawiedliwieni [A] [fis]
I przez Baranka Krew [h] [E7]
Wzywasz nas Panie do Siebie [cis] [fis]
Przed Twój w niebie tron [h7] [E7]
My łaską obdarzeni [A] [fis]
Tobie składamy hołd [h] [E] [A]
`,s2=`Ref: Kiedyś wino i chleb [D] [G] [A]
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
`,l2=`Duchu Święty ogarnij mnie           [C] [G] [E] [a]
Otwórz oczy mego serca,             [F] [d]
Napełnij miłością                   [G] [G7]
Duchu święty ja kocham Cię          [C] [G] [E] [a]
Niech Twa święta wola spełni się    [d] [G7] [C]

`,c2=` [cis7/5-] [C7+] [h] [a] [D]
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
`,r2=`1. Czekam na Ciebie, dobry Boże, [a] [d]
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
`,u2=`Raduje się dusza ma, wielbi Pana swego [fis]
Będę Ci śpiewał z całej siły [Cis]
Sławić Cię będę za Twe dzieła [fis]
Będę Ci śpiewał z całej siły [Cis]
Błogosławić będę Twoje Imię [A]
Jest miłosierny Pan Zastępów [E]
Moc Jego ramienia nad Swym ludem [fis]
Pan mój Zbawca [Cis]
`,f2=`1. Zabierz, Panie, i przyjmij [a] [G]
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
`,d2=` [a] [G] [D/Fis] [G]
Ty jesteś zawsze wierna, [a] [G] [F] [E]
Ucz nas ufać do końca [C] [F] [G]
Temu, który nam pierwszy zaufał. [F] [E] [a] [G]
Wstawiaj się za nami u Syna. [d] [C] [E]

Ref. W Twoje ręce, o Matko, składamy dar [a] [F] [G] [C]
naszego zawierzenia Panu. [F] [G] [E7]
`,m2=`Chcę wywyższać Imię Twe,                [F] [B] [C] [B]
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
`,z2=`Ref. Nadzieja nosi niebieską sukienkę, [D] [G7+] [h]
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
`,y2=`Ubi caritas             [D] [A] [h]
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
`,w2=`1. Kocham, więc nie muszę się bać [H]
zabierz mój strach! [A] [E] [H]
Jezus mówi ci, że miłość ta [H]
zabiera strach. [A] [E] [H]

Ref.: Oo, Jezus, Jezus /4x [H] [A] [E] [H]

3. Jezus daje ci miłość Swą, nie lękaj się!
Jezus mówi ci, że miłość ta zabiera strach!
`,h2=`W lekkim powiewie [a]
przychodzisz do mnie Panie /x2 [D] [a] [D]
Nie przez wicher ogromny i nie przez ogień [F] [G]
ale w lekkim powiewie [F]
przychodzisz do mnie [G]
W lekkim powiewie nawiedzasz duszę mą [a] [D] [E] [a]
`,g2=`1. Hosanna, hosanna, hosanna na niebiosach. [D] [A] [h] [G] [A]

Ref. Sławić chcemy Cię wciąż [G] [A7] [D] [h]
z radością i czcią [G] [A7] [D] [D/Fis]
Wywyższony bądź Boże nasz. [E7] [A7] [D] [A] [h]
Hosanna niechaj ciągle brzmi. [G] [A7] [D]

2. Chwała, chwała królowi królów chwała cześć.

Ref. Sławić chcemy Cię wciąż z radością i czcią.
Wywyższony bądź Boże nasz. Królowi królów chwała, cześć!
`,p2=`Ref. To jest Baranka Ciało, Jego Krew [fis] [cis]
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

`,b2=`1. Wielkie światło, które dałeś [D]
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
`,j2=` [E] [cis] [A] [H7] [E] [H7]
Oto idzie mój Bóg, oto idzie mój Król, [E] [cis]
Oto Zbawiciel mój, a imię Jego: Jezus /x2 [A] [E] [H7]

Tęsknię za Tobą, Panie [A] [H7]
Wiem, że przyjdziesz niebawem, [A] [H7]
Z głębi serca dziś wołam: Maranatha /x2 [A] [H7] [cis]
 [A] [H7] [E]
`,v2=` [D7+] [G] [C9]
1. Pomódl się Miriam, [D7+]
aby Twój Syn żył we mnie. [G] [C9]
Pomódl się, by Jezus we mnie żył. [D7+] [G]
Gdzie Ty jesteś, zstępuje Duch Święty. [e] [A7]
Gdzie Ty jesteś, Niebo staje się... [e] [A7]

2. Miriam, Tyś jest Bramą do Nieba. [D7+] [G]
Moim Niebem jest Twój Syn [D7+] [G]
Weź mnie, Weź mnie, do Swego łona, [e] [A7]
Bym bóstwem Jezusa zajaśniał jak Ty. [D] [G] [A] [D7+]
`,k2=`Maryjo, wzorze prostoty, [E] [fis7/11] [cis7/9]
Przez Ducha Świętego napełniona. [Asus2] [Hsus4]
Radością wieczną [E] [fis7/11] [cis7/9]
Wciąż i na zawsze przepełniona. [Asus2] [Hsus4]

Ref. Świątynio Syna Bożego, [E] [H] [cis7]
Prowadź nas ścieżką Ducha Świętego [fis] [H]
Wszędzie tam, [E] [H] [cis7]
gdzie człowiek czeka sam. [fis] [H]
`,_2=`1. Jestem dzieckiem Boga, [a7] [e7]
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
`,A2=`/x3/ Jezus jest z nami tu [B] [C] [F] [d]
Jezus jest z nami tu [B] [C] [F]

Ref. A Jego moc działa dziś, [B] [C]
by namaścić cię, [F] [d]
A Jego moc działa dziś, by uzdrowić cię, [B] [C] [F] [d]
A Jego moc działa dziś, aby zbawić cię. [g7] [C] [a] [d]
Jezus jest z nami tu. [B] [C] [F]
`,C2=`Ref. x2 Alleluja, Alleluja,     [fis] [E]
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
`,D2=`1. Pan kiedyś stanął nad brzegiem,      [D] [A7] [h] [h7]
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

`,T2=`1. Panie, dla Ciebie nie ma rzeczy [E7+]
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
`,E2=` [d] [C] [F] [g] [a]
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
`,S2=`Nie bój się [D]
wypłyń na głębię [G] [A]
Jest przy Tobie Chrystus [G] [e] [A4-3]
`,x2=` [G7+]
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
`,G2=`                                    [e] [h] [C] [a7/9]
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
`,O2=`Ref. Chrystus Pan karmi nas [e] [C] [h7]
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
`,B2=` [D] [h] [G] [Asus4] [A]
O Jezu, w Hostii utajony [D] [h]
Serce moje Cię czuje [G] [A4-3]
I choć kryją Cię zasłony [D] [G] [g6]
Ty wiesz, jak Cię miłuję [D] [A4-3]
(....Panie mój!) [D]
`,N2=`Ta Krew z grzechu obmywa nas [D] [G]
Ta Krew czyni nas bielszych od śniegu [A] [D] [fis]
Ta Krew z grzechu obmywa nas  [h] [G]
To jest Baranka święta Krew [A7] [D]
`,R2=`Przyodziałeś mnie Panie w Swoją moc, [D] [A] [h]
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
`,M2=`Jezus, Królem naszym jest [D] [A] [h] [G] [A]
Jezus, nasz Umiłowany. /x2 [D] [A] [h] [G] [A]

Ref. Daj wielki pokój nam. [D] [A] [h] [G] [A]
Przyjdź i zamieszkaj z nami. /x2 [D] [A] [h] [G] [A]
`,P2=`Ref. Wypłyń na głębię /x2 [G] [A] [D] [h]
Pan tak blisko jest [C]
Z Nim zarzucisz swą sieć. [h] [A]

1. Pan ci mówi „otwórz się” [D] [A] [G] [A]
Pan ci mówi „wstań”. [D] [fis] [G] [A]
Ja Jestem, odwagi [G] [A] [h] [A]
Czemu wątpisz w łaskę Mą. [h] [G] [A]
`,J2=`Ref. Idzie mój Pan, idzie mój Pan [d]
On teraz biegnie, by spotkać mnie [d] [g] [A7] [d]
Mija góry, łąki, lasy [d] [g] [d]
By komunii stał się cud [C] [C7] [F] [A7]
On chce chlebem nas nakarmić [d] [g] [d]
By nasycić życia głód [C] [A] [d]
`,H2=`Ty, który jesteś samą Prawdą, [Es] [F] [g]
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
`,F2=` [D] [Cadd9] [h] [Bsus2] [C]
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
`,U2=`Już teraz we mnie kwitną Twe ogrody, [C] [F] [G]
już teraz we mnie Twe królestwo jest. x2 [F] [d] [G] [(C)]
`,K2=`Z Tobą ciemność nie będzie ciemna [E] [a] [G] [C]
Wokół mnie [F] [E]
A noc tak jak dzień zajaśnieje [a] [G] [C] [d] [E]
`,L2=`(Solo gitara x2)                    [fis] [E] [cis] [D7+]
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
`,Z2=`Rzekł Pan, stało się: Jam Alfa i Omega [D] [Asus4] [A] [e7]
Początek i Koniec [G] [Cadd9]
Ja pragnącemu dam darmo pić ze źródła wody życia

Ref. x2: Pan daje mi pić, Pan daje mi pić, Pan daje mi pić
Ze źródła wody życia.
`,W2=`1. Zwykły chleb przemieniasz, Panie, [E]
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
`,Y2=`1. Ty wyzwoliłeś nas Panie      [A] [D] [E] [A]
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
`,q2=`Ref.: Błogosław duszo moja Pana [E]
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
`,X2=`W Swym Sercu na wieki ukryłeś nas, [e] [A] [G] [A]
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
`,V2=`Podnieś mnie, Jezu i prowadź do Ojca [d] [C] [a]
Podnieś mnie, Jezu i prowadź do Ojca [d] [C] [a] [(e)]
Zanurz mnie w wodzie Jego Miłosierdzia [F] [C] [a]
Amen, Amen [d] [C] [d] [d] [C] [a] [d]
`,Q2=`1. Ja wierzę, że to Jezus [E] [A] [H7]
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
`,I2=`Jesteś Królem, jesteś Królem [E] [H7] [cis]
Królem jest Bóg! |2x [A] [(H7)]

Podnieśmy wszyscy nasze serca [E]
Podnieśmy wszyscy nasze dłonie [H7]
Stawajmy przed obliczem Pana, wielbiąc Go [cis] [A]
`,$2=`1. Przyjdź, królestwo Twoje [D] [A] [h]
Twoja miłość, o Panie [G]
Jest większa, niż całe zło [A] [D]

Ref.: Jestem Twoim dzieckiem, [D] [G]
Twoim synem, Tyś mnie dziś zrodził [A] [D]

Aaaa… aaaa… aaaa… x2 [B] [C] [D]

2. Ty wyzwoliłeś mnie, Jezu, otworzyłeś mi bramy
Twojego królestwa.

Ref.: Jestem Twoim dzieckiem… Aaaa… aaaa… aaaa…
`,eD=`Ref. Jesteś perłą w życiu mym [E]
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
`,nD=`Ref.: Lud Twój, Panie, lud pielgrzymi [D] [A] [h] [D7]
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
`,iD=`Otwórz me oczy,         [e] [A]
Chcę widzieć Jezusa     [D] [h]
I być bliżej Niego,     [e] [A7]
I kochać goręcej.       [D] [D7]
Otwórz me uszy          [e] [A7]
I naucz mnie słuchać.   [D] [h]
Otwórz me oczy,         [e] [A7]
chcę widzieć Jezusa     [D]
                        [G] [g] [D]

`,aD=`Ref. Duchu Święty, błagam nie zwlekaj! [D] [D7+] [G] [A]
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
`,tD=`Ref.: Nie, nie, nie lękaj się [A] [D] [E]
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
`,oD=`1. Za to, że mnie ukochałeś [D] [h]
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
`,sD=`Jezu, Tyś wszystkim dla mnie jest, [D] [Asus4] [G] [A]
Jak żyć bez miłości Twej? [D] [Asus4] [G] [A]
Jezu, otwórz me oczy, [D] [Asus4] [G] [A]
Bym ujrzeć mógł [D] [Asus4]
Twej miłości cud. [G] [A] [Dsus2]

Ref. Przyjdź i napełnij nas [G] [A] [D]
Mocą Bożą co dnia [G] [A] [h]
Tyś pokoju Księciem, Lekarzem dusz [G] [A] [fis] [h]
Jesteś Światłem, co w ciemnościach [G]
nie gaśnie. [A]
`,lD=`Pan mnie strzeże, Pan mnie strzeże. Czuwa [E] [A]
nade mną Bóg, On jest moim cieniem. [cis] [H7]
Ref. Czuwa nade mną Bóg, /x3 Mój Bóg! [E] [A] [cis] [H7]
`,cD=`Ref. Aaa, alleluja, w Tobie cała nadzieja ma [f] [b] [C]
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
`,rD=`To mój Pan, wiele mi uczynił [a] [d] [g]
On moim Bogiem [G] [C] [C] [F]
To mój Pan, wiele mi uczynił [a] [d] [g]
On mnie uzdrowił [E7] [a] [A7] [d]
`,uD=`Niech będzie chwała i cześć i uwielbienie [E] [A]
Chwała i cześć Jezusowi! [E] [H7]
Chwała, niech będzie chwała. [E] [A] [a]
Tak, Jemu chwała i cześć! [E] [H7] [E]
`,fD=`1. Kocham Twoją wolę Panie, [h] [Fis]
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
`,dD=`1. Godzien chwały jest Baranek [C] [g]
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
`,mD=`Ref. Oddaję Ci życie swe [D] [e]
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
`,zD=`Jestem cały Twój, Twym ogniem płonę. [C] [(a7/9)]
jestem cały Twój. [F7+]
Widzę Twoją twarz, słyszę Twój głos,
trzymam rękę Twą, nie puszczę nie puszczę już.
`,yD=`1. 2x Z okrzykiem radości [G] [D]
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

`,wD=`1. Mizerna, cicha, stajenka licha, [a] [h7/5-] [a] [E7]
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
`,hD=`1. Przyjdź jak deszcz ożyw dziś [cis] [A]
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
`,gD=`Ref. Niegodny jestem Panie [d]
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
`,pD=`Chwała Bogu Ojcu, w chwale Jego Syn [e] [D] [e] [D]
Chwała Tobie Duchu, [e] [D/Fis]
tworzysz jedno w Nich. [C/G] [D/A] [e/H]
`,bD=`Ref. Ooo... Chwała Panu i cześć [C] [G] [a] [C] [F] [G] [D] [A] [h] [D] [G] [A]
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
`,jD=`Ref. Chwalcie Pana Niebios [e]
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
`,vD=`Wszystkie narody klaskajcie w dłonie [D]
Wykrzykujcie Bogu radosnym głosem, [h]
Bo Pan Najwyższy jest [G]
Królem nad całą ziemią. [A] [D] [(A)]

Ref. Śpiewajcie, wszystkie narody [D]
Śpiewajcie, radosnym głosem [h]
Śpiewajcie, Królowi [G] [A] [D] [(A)]
`,kD=`O Stworzycielu, Duchu, przyjdź,
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
`,_D=`O Zbawcza Hostio godna czci,
Co lud do niebios wiedziesz bram:
Znój srogi nęka wiernych Ci,
Daj siłę, pomoc ześlij nam.

Jednemu w Trójcy Władcy ziem,
Niech będzie chwała w każdy czas.
Niech On wieczystym życiem swym.
W Ojczyźnie rajskiej darzy nas. Amen.
`,AD=`Ref. Nie mądrość świata tego,
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
`,CD=`Blisko blisko, blisko jesteś, Panie, [h] [G7+]
blisko tak, że czuję tchnienie Twe [e] [fis]
i przychodzisz do mnie, już dotykasz mnie, [h] [G7+]
chlebem przebaczenia karmisz moją duszę. [e] [e7] [Fis]
`,DD=`1. Boże wieczny, Boże żywy, [D5]
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
`,TD=`Ciebie pragnie dusza moja [h] [G] [D] [A]
w suchej ziemi pragnie Cię. x2

Ref. Przyjdź i zajmij miejsce swe
na tronie naszych serc,
przyjdź i zajmij miejsce swe na tronie.
`,ED=`1. Zaśpiewajmy pastorałkę od serca do ucha [a] [G] [C] [G]
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
`,SD=`1. Powstań i świeć oto tutaj twe światło, [d] [A]
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
`,xD=`1. Języku ognia przyjdź [H2] [D2]
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
`,GD=`Jego Miłość zakrywa grzech [e] [h]
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
`,OD=`Jestem tego pewien, nic nie oddzieli nas    [a7/9]
Od Miłości Twojej Panie / x2                [F7+] [G/A]

Ani śmierć,                         [F]
Ani życie, ani aniołowie            [G]
Potęgi niebieskie,                  [a]
teraźniejszość, przyszłość, moce.   [G] [C]
Ani wysokość                        [F]
i głębokość, stworzenie też,        [G]
nic nie oddzieli nas                [a] [G] [C]

`,BD=`Powstań przyjaciółko ma [e]
Piękna ma i pójdź, [e]
bo oto minęła już zima, [a] [D]
deszcz ustał i przeszedł, [G] [e]
na ziemi widać już kwiaty, [C] [a]
nadszedł czas przycinania winnic. [e] [H7] [e]

Drzewo figowe wydało zawiązki owoców [e]
i winnic krzewy kwitnące już pachną [a] [e] [fis7/5-] [H7] [e]
`,ND=`1. Mroźna cisza świat okryła [h] [e]
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
`,RD=`(wstęp) [G] [D] [h] [A] [x2]
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
`,MD=`Ref. Alleluja, alleluja,            [B] [C] [a] [B]
Alleluja amen                       [g] [a] [G]
Alleluja, alleluja,                 [B] [C] [a] [B]
Alleluja amen.                      [B] [C] [d]

Memu Bogu, Królowi,                 [d] [C]
będę śpiewał tę pieśń               [a] [d]
Teraz zawsze na wieki amen. /x2     [B] [C] [d]

`,PD=` [(A] [G] [D] [G)] [x3] [E]
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
`,JD=`                                            [G] [D/Fis] [fis0]
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
`,HD=`1. Tyle światła wokół mnie, [Es-sus2]
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
`,FD=`Nie chcę w innym miejscu być [D]
Nie chcę w innym miejscu być [G]
Nie chcę w innym miejscu być [h]
Lecz w miłości Twej, w miłości Twej [G]

Więc rozpal ogień w duszy mej [D]
Niech płonie, niech pochłonie mnie [G]
Boże, więcej Ciebie chcę [h]
Boże, więcej Ciebie chcę [G]
`,UD=`Duchu Święty, Tchnienie Ojca,   [F] [B]
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

`,KD=`Ref. Yeshua, Yeshua [g] [d] [Es] [F] [g]

1. Jedno jest Imię pod Niebem dane nam, aby zbawić nas,
Twoje Imię ponad wszelką władzą, Panie, Jezu, Zbawco nasz!

2. Ty zstąpisz do nas z Nieba, by wprowadzić nas do Jeruzalem.
Z wiarą czekamy na Ciebie, Panie, Jezu, Zbawco nasz!
`,LD=`Chcę tonąć w morzu Twego miłosierdzia [a] [F]
Pomóż mi wypłynąć, [C]
pomóż mi zaufać Tobie dziś [G]
pomóż mi zaufać Tobie dziś /x2 [a] [F] [C] [G]

Podaj mi dłoń, uwolnij mnie [a] [F] [C] [G]
`,ZD=`Ref. Jak w Betlejem cud zdarzył się     [d] [C]
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
`,WD=`Otwórz me oczy o Panie [C]
Otwórz me oczy i serce [e]
Chcę widzieć Ciebie [F]
Chcę widzieć Ciebie [C]

Ref. Wywyższonego widzieć chcę [e] [a]
ujrzeć Ciebie w blasku Twej chwały [F] [G]
Wylej swą miłość i moc, [G] [e] [a]
gdy śpiewam “Święty, święty, święty” [F] [d] [G]

Chcę widzieć Ciebie [C]
`,YD=`1. Krzyżu Święty, co świat obejmujesz, [d] [A7] [d]
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
`,qD=`1. Daj mi usłyszeć Twój głos, rozpoznać go. [G] [D]
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
`,XD=`Nie bój się, Ja Jestem [D] [e7]
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
`,VD=`1. Przybądź Duchu Święty, ześlij z nieba wzięty [d] [C] [B]
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
`,QD=`1. Wspaniały Dawco miłości, [D] [G] [D] [G]
składamy na Twoim stole [D] [G] [A]
Wszystko, co mamy, wszystko, co mamy, [e] [A] [fis] [h]
Choć i tak to od wieków jest Twoje [G] [e] [A7]

2. Wspaniały Dawco miłości,
składamy na Twoim stole
Radość i szczęście, trudy i znoje
Choć i tak to od wieków jest Twoje
`,ID=`1. Zbliżam się w pokorze i niskości swej. [C] [G] [a]
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
`,$D=`1. Duszo moja Pana chwal. [d]
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
`,eT=` [d] [C] [B] [/x2]
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
`,nT=`1. Znad oceanów do mnie wołasz [h] [A/Cis] [D]
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
`,iT=`1. Być bliżej Ciebie chcę, o Boże mój, [D] [G] [D] [A]
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
`,aT=`1. Światłość świata rozjaśnia mrok      [c] [As] [B] [f]
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

`,tT=`1. W żłobie leży, któż pobieży          [D] [e] [A7]
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
`,oT=`1. Ty na początku byłeś Słowem     [C]
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
`,sT=`Mój Jezu, mój Zbawco,              [A] [E]
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
`,lT=`Ref. Wykrzykujcie Bogu,        [d]
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
`,cT=`Ref. Duszo ma, Pana chwal,  [G] [D]
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
`,rT=`Zaufałem Panu i już              [e] [D]
Niczego nie muszę się lękać      [C] [G]
Zaufałem Panu i już              [e] [D]
Niczego nie muszę się trwożyć    [C] [G]

Ref. Wierzę Mu, bo On ma moc     [a] [D]
Przezwyciężyć w moim sercu zło.  [G] [C]
Wierzę Mu, bo On ma              [a]
Właśnie taką moc. /x2            [D] [e]
`,uT=`Przyjdź, o Jezu, Maranatha      [e]
Przyjdź, o Jezu, Maranatha      [D]
Przyjdź, o Jezu, Maranatha      [e]
Przyjdź, o Jezu, Maranatha      [D] [e]
`,fT=`1. Przywołaj mnie Panie         [e] [D]
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
`,dT=`                                      [e]
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
`,mT=`1. Jesteś tu jesteś pośród nas     [D] [A]
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
`,zT=`1. Pełen czci przed Tobą klękam    [G] [D]
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
`,yT=`1. Ktoś zbudował dom na piasku,     [h]
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

`,wT=`Maryjo, chcę zamieszkać z Tobą,     [F] [C]
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

`,hT=`Dzięki Ci Maryjo,           [E] [H7] [A] [E]
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

`,gT=`Ref. Duchu Święty, Boże przyjdź,    [g] [d]
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

`,pT=`1. Dziś jest czas, by oddać Bogu chwałę	    [D] [G] [D] [G]
W tej świątyni, którą my jesteśmy sami.	    [D] [G] [A7]
Ref. Więc otwórz serce swe 		            [G] [D]
i zacznij wielbić Go		                [G] [D]
Jego chwała wnet wypełni miejsce to.		[G] [C] [A7]
Chwała cześć, chwalimy Go! /x2		        [D] [G] [A] [G]

2. Bóg przebywa w chwale swego ludu	        [D] [G] [D] [G]
On pragnie, aby wielbić Jego Imię		    [D] [G] [A7]
`,bT=`Ref. Chlebie najcichszy,	    [G] [D]
otul mnie swym milczeniem.	    [C] [D]
Ukryj mnie w Twojej bieli,	    [G] [D]
wchłoń moją ciemność.	        [a] [e]

1. Przemień mnie w siebie,	    [e] [C]
bym jak Ty stał się chlebem /x2 [G] [D]
Pobłogosław mnie, połam,        [e] [C]
rozdaj łaknącym braciom /x2     [G] [D]

2. A ułomki chleba, które zostaną
Rozdaj tym, którzy nie wierzą w swój głód
`,jT=`Przyjacielu, przyjacielu    [G] [e]
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
`,vT=`Ref. O, Matko       [D]
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
`,kT=`Ojcze nasz, Zdrowaś Maryjo, Wierzę w Boga

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

`,_T=`1. Pańska jest ziemia       [d] [C]
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

`,AT=`                                        [C5] [B5] [C5]
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
`,CT=`1. Wśród nocnej ciszy           [D] [A] [D] [A7]
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

`,DT=`1. Jezus malusieńki     [e] [H7]
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

`,TT=`1. Gore gwiazda Jezusowi        [d] [F]
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

`,ET=`Jezu jesteś tu                  [A] [E/Gis] [fis] [fis/E]
świat odszedł w cień            [D] [A/Cis] [h] [Esus4]
Mam tylko Ciebie                [A] [E/Gis] [D/Fis] [h7]
Moje życie to Ty                [D] [E] [A]
Każdy dzień Twoim darem         [cis7] [D/Fis] [Esus4] [A]
Nocą jesteś schronieniem mym    [D/Fis] [h] [E4-3]

Ref. Chwała, chwała!            [D] [cis]
Jezu wielbię Cię                [fis] [D/Fis] [A]

`,ST=`Przymnóż nam wiary, Panie       [fis] [E/Gis] [fis/A] [hsus2]
Zmiłuj się nad nami             [fis] [E/Gis] [fis/A] [hsus2]
Rozlej swój pokój               [D/Fis] [E] [fis]
Boże ochroń nas                 [D] [h] [E]

Ref. Maryjo, Królowo Pokoju     [A/Cis] [D] [E4-3]
Módl się za nami                [fis] [D7+] [E4-3]
Maryjo, Królowo Pokoju          [A/Cis] [D] [E4-3]
Wspieraj nas                    [fis] [D7+] [E] [A]

`,xT=`1. Przybądź, Duchu Święty,
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

`,GT=`1. Zjednoczeni w Duchu,     [e]
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

`,OT=`                                    [d] [B] [g]
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
`,BT=`[a] [H7] [e]
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
`,NT=`1. Niech Ci błogosławi Pan          [H] [E] [H] [E]
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
`,RT=`1. W żłobie leży, któż pobieży          [D] [A]
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

`,MT=`                                    [G] [D] [h] [A]
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

`,PT=`Panie mój, przychodzę dziś,     [D] [G]
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

`,JT=`1. Głoś imię Pana,            [C] [a]
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

`,HT=`1. Otwarta na Boga, odwiecznie wybrana  [e]
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


`,FT=`1. Skrzypi wóz, wielki mróz,  [F] [B]
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

`,UT=`1. Bóg się rodzi, moc truchleje,  [C] [F]
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

`,KT=`1. Mędrcy świata Monarchowie,     [A] [D] [A]
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

`,LT=`1. Anioł pasterzom mówił:     [D] [A] [D] [A] [D]
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

`,ZT=`1. Do szopy, hej pasterze,  [D] [A]
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

`,WT=`1. Cóż to za Dziecię słodko śpi   [d] [F] [C] [a]
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

`,YT=`Ref. Narodził się, narodził się,  [D] [A] [e] [h]
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

`,qT=`1. Adeste, fideles,             [D] [A]
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
`,XT=`O Jezu, cichy i pokorny         [d] [a] [d] [C]
Uczyń serce me                  [F] [a]
Według Serca Twego.             [B] [A7]
`,VT=`1. Duszo Chrystusowa, uświęć mnie.      [d] [a] [d]
Ciało Chrystusowe, zbaw mnie.           [d] [a] [d]
Krwi Chrystusowa, napój mnie.           [F] [d] [g] [d] [C]
Wodo z boku Chrystusowego,              [C] [d] [g] [C]
Obmyj mnie.                             [a] [d]

2. Męko Chrystusowa, wzmocnij mnie.
O, dobry Jezu, wysłuchaj mnie.
W ranach Twoich ukryj mnie.
Nie daj mi z Tobą rozłączyć się.

3. Od złego wroga obroń mnie.
W godzinę śmierci wezwij mnie.
I każ mi przyjść do Siebie,
Abym ze Świętymi Twymi chwalił Cię

Na wieki wieków. Amen.                  [d] [C] [a] [C] [d]`,QT=`1. Upadnij na kolana,           [e] [H] [e] [H7]
ludu, czcią przejęty,           [e] [a] [C] [H7]
Uwielbiaj swego Pana:           [e] [C] [G] [D]
Święty, Święty, Święty.         [e] [H7] [e]

2. Zabrzmijcie z nami nieba,
Bóg nasz niepojęty,
W postaci przyszedł chleba:
Święty, Święty, Święty.

3. Powtarzaj ludzki rodzie,
wiarą przeniknięty,
Na wschodzie i zachodzie:
Święty, Święty, Święty.

4. Pan wieczny zawsze, wszędzie,
ku nam łaską zdjęty,
Niech wiecznie wielbion będzie:
Święty, Święty, Święty.
`,IT=`Chrystus Pan Boży Syn,        [G] [e]
Zbawca nasz zgodził się       [a7] [D7]
Wziąć mój grzech,             [G]
Za mnie umrzeć chciał,        [G] [Cadd9]
Ażebym znał mój ogrom win     [G] [a7]
I wiedział, że                [G]
Krew Jego zbawia,             [C]
Oczyszcza i leczy.            [a] [G] [D]

Ref. Wywyższony bądź,         [C] [D] [G]
Jezu Baranku mój.             [e7]
Tyś jedyny odkupiciel,        [a7] [D]
Tyś mój Król!                 [G] [D]
Wywyższony bądź,              [C] [D] [G]
Boży Baranku!.                [e7]
Przed Twym tronem, dziś       [C]
Najwyższy składam hołd!       [D] [G]
`,$T=`
Ref. Pokładam w Panu ufność mą, zawsze ufam Jego słowu.

1. Z głębokości wznoszę głos do Ciebie,
racz wysłuchać, Panie prośby mej.
nakłoń ku mnie ucho Twe łaskawie,
usłysz modły i błagania.

2. Jeśli grzechów nie zapomnisz, Panie,
Któż przed gniewem Twym ostoi się?
Lecz ufamy, że przebaczysz winy,
Byśmy kornie Ci służyli.

3. Całą ufność mą pokładam w Panu,
Dusza moja ufa Jego słowu,
Tęskniej czeka dusza moja Pana,
Niż jutrzenki nocne straże.

4. Tęskniej niż jutrzenki nocne straże
Niechaj Pana czeka Boży lud,
Bo u Pana znajdzie zmiłowanie
I obfite odkupienie.`,e7=`1. Zamieszkałem w cieniu Twoich rąk       [g] [Es]
Kiedy grzech mój zabrał wszystko mi       [B] [F]
Tam znalazłem upragniony dom              [g] [Es]
Ocaliłeś mnie mocą swojej Krwi            [B] [F] [Es]
Ocaliłeś mnie mocą swojej Krwi            [B] [F] [Es]

2. Szedłeś ku mnie przez zamknięte drzwi  [g] [Es]
Pozwoliłeś dotknąć Twoich ran             [B] [F]
Umarłemu obiecałeś żyć                    [g] [Es]
Na ramionach swych niosłeś mnie Ty sam    [B] [F] [Es]
Na ramionach swych niosłeś mnie Ty sam    [B] [F] [Es]

Ref. Na Twoich dłoniach wyryte imię me    [g] [Es]
Miłością karmi mnie Twoje zranione serce  [B] [F]
Ostatnie czyny ostatnie słowa Twe         [g] [Es]
Lampa dla moich stóp                      [B]
światło na mojej ścieżce                  [F]

3. Zamieszkałem w cieniu Twoich rąk       [g] [Es]
Twoja miłość strzeże moich drzwi          [B] [F]
W Tobie Jezu upragniony dom               [g] [Es]
Ty zabrałeś strach pokój dając mi         [B] [F] [Es]
Ty zabrałeś strach pokój dając mi         [B] [F] [Es]

Ref. Na Twoich dłoniach...
`,n7=[{title:"Panie, zmiłuj się",file:"001-panie-zmiluj-sie.txt"},{title:"Gloria",file:"002-gloria.txt"},{title:"Chwała na wysokości",file:"003-chwala-na-wysokosci.txt"},{title:"Alleluja",file:"004-alleluja.txt"},{title:"O usłysz mój głos - modlitwa wiernych",file:"005-o-uslysz-moj-glos--modlitwa-wiernych.txt"},{title:"Święty, święty",file:"006-swiety-swiety.txt"},{title:"Ojcze nasz",file:"007-ojcze-nasz.txt"},{title:"Baranku Boży",file:"008-baranku-bozy.txt"},{title:"Tryumfy Króla Niebieskiego",file:"009-tryumfy-krola-niebieskiego.txt"},{title:"Gdy śliczna Panna",file:"010-gdy-sliczna-panna.txt"},{title:"Lulajże, Jezuniu",file:"011-lulajze-jezuniu.txt"},{title:"Z Narodzenia Pana",file:"012-z-narodzenia-pana.txt"},{title:"Przybieżeli do Betlejem",file:"013-przybiezeli-do-betlejem.txt"},{title:"Dzisiaj w Betlejem",file:"014-dzisiaj-w-betlejem.txt"},{title:"Nie płaczże, mój Syneczku",file:"015-nie-placzze-moj-syneczku.txt"},{title:"Cicha noc",file:"016-cicha-noc.txt"},{title:"Jezusa narodzonego",file:"017-jezusa-narodzonego.txt"},{title:"Pastuszkowie bracia mili",file:"018-pastuszkowie-bracia-mili.txt"},{title:"Gdy się Chrystus rodzi",file:"019-gdy-sie-chrystus-rodzi.txt"},{title:"Pójdźmy wszyscy do stajenki",file:"020-pojdzmy-wszyscy-do-stajenki.txt"},{title:"Ciemne niebo świat otula",file:"021-ciemne-niebo-swiat-otula.txt"},{title:"Prawda jedyna",file:"022-prawda-jedyna.txt"},{title:"Drzewo krzyża surowe",file:"023-drzewo-krzyza-surowe.txt"},{title:"Dzięki za Twój krzyż",file:"024-dzieki-za-twoj-krzyz.txt"},{title:"Golgoto, Golgoto, Golgoto",file:"025-golgoto-golgoto-golgoto.txt"},{title:"Zbawienie przyszło przez krzyż",file:"026-zbawienie-przyszlo-przez-krzyz.txt"},{title:"Żydowski Król, Boży Syn",file:"027-zydowski-krol-bozy-syn.txt"},{title:"Bez wstążek lub balonów",file:"028-bez-wstazek-lub-balonow.txt"},{title:"Rozpięty na ramionach",file:"029-rozpiety-na-ramionach.txt"},{title:'Psalm "Hosanna"',file:"030-psalm-hosanna.txt"},{title:"Uwielbiam Imię Twoje, Panie",file:"031-uwielbiam-imie-twoje-panie.txt"},{title:"Zaśpiewajcie Panu pieśń nową",file:"032-zaspiewajcie-panu-piesn-nowa.txt"},{title:"Po szabacie pierwszego dnia z rana",file:"033-po-szabacie-pierwszego-dnia-z-rana.txt"},{title:"Wody nie ugaszą jej",file:"034-wody-nie-ugasza-jej.txt"},{title:"Zmartwychwstał Pan i żyje dziś",file:"035-zmartwychwstal-pan-i-zyje-dzis.txt"},{title:"Oto są baranki młode",file:"036-oto-sa-baranki-mlode.txt"},{title:"Ty tylko mnie poprowadź",file:"037-ty-tylko-mnie-poprowadz.txt"},{title:"Swojego Ducha, Panie",file:"038-swojego-ducha-panie.txt"},{title:"Alleluja (Cohen)",file:"039-alleluja-cohen.txt"},{title:"Maryjo, Matko mojego wezwania",file:"040-maryjo-matko-mojego-wezwania.txt"},{title:"Twoja Miłość",file:"041-twoja-milosc.txt"},{title:"Powietrzem moim jest",file:"042-powietrzem-moim-jest.txt"},{title:"Kochany bracie, kochana siostro",file:"043-kochany-bracie-kochana-siostro.txt"},{title:"Pan jest Pasterzem moim (laj, la laj)",file:"044-pan-jest-pasterzem-moim-laj-la-laj.txt"},{title:"Do Ciebie, Panie, woła dusza moja",file:"045-do-ciebie-panie-wola-dusza-moja.txt"},{title:"Maryjo, oddana Panu",file:"046-maryjo-oddana-panu.txt"},{title:"Nic nie musisz mówić nic",file:"047-nic-nie-musisz-mowic-nic.txt"},{title:"Wszystko, co dziś mamy",file:"048-wszystko-co-dzis-mamy.txt"},{title:"Cisza",file:"049-cisza.txt"},{title:"Mój Pan mocą moją jest",file:"050-moj-pan-moca-moja-jest.txt"},{title:"Będziemy tańczyć, będziemy śpiewać",file:"051-bedziemy-tanczyc-bedziemy-spiewac.txt"},{title:"Niech Wam błogosławi Pan",file:"052-niech-wam-blogoslawi-pan.txt"},{title:"Śpiewajcie Panu, sławcie Go",file:"053-spiewajcie-panu-slawcie-go.txt"},{title:"Jezus dziś przyszedł do mnie",file:"054-jezus-dzis-przyszedl-do-mnie.txt"},{title:"Wykrzykujcie na cześć Pana",file:"055-wykrzykujcie-na-czesc-pana.txt"},{title:"Nie bójcie się żyć dla miłości",file:"056-nie-bojcie-sie-zyc-dla-milosci.txt"},{title:"Otwierasz niebo",file:"057-otwierasz-niebo.txt"},{title:"Mój ląd",file:"058-moj-lad.txt"},{title:"Schowaj mnie",file:"059-schowaj-mnie.txt"},{title:"Niechaj zstąpi Duch Twój",file:"060-niechaj-zstapi-duch-twoj.txt"},{title:"Błogosławieni miłosierni",file:"061-blogoslawieni-milosierni.txt"},{title:"Stoję dziś",file:"062-stoje-dzis.txt"},{title:"Mów do mnie Panie",file:"063-mow-do-mnie-panie.txt"},{title:"Dotknij, Panie, moich oczu",file:"064-dotknij-panie-moich-oczu.txt"},{title:"Uwielbiajcie Pana",file:"065-uwielbiajcie-pana.txt"},{title:"Oto ja, poślij mnie",file:"066-oto-ja-poslij-mnie.txt"},{title:"W ciele Chrystusa tworzymy jedno",file:"067-w-ciele-chrystusa-tworzymy-jedno.txt"},{title:"Ukojenie",file:"068-ukojenie.txt"},{title:"Więcej miłości, więcej mocy",file:"069-wiecej-milosci-wiecej-mocy.txt"},{title:"Duchu Święty, Stworzycielu",file:"070-duchu-swiety-stworzycielu.txt"},{title:"Jezus, najwyższe Imię",file:"071-jezus-najwyzsze-imie.txt"},{title:"Duchu Święty, obiecany nam",file:"072-duchu-swiety-obiecany-nam.txt"},{title:"Ja dziękuję Ci",file:"073-ja-dziekuje-ci.txt"},{title:"Duchu Święty, pouczaj mnie",file:"074-duchu-swiety-pouczaj-mnie.txt"},{title:"Nasz Pan jest potężny",file:"075-nasz-pan-jest-potezny.txt"},{title:"Jesteśmy piękni Twoim pięknem",file:"076-jestesmy-piekni-twoim-pieknem.txt"},{title:"Godzien, o godzien",file:"077-godzien-o-godzien.txt"},{title:"Nasz Bóg jest wielki",file:"078-nasz-bog-jest-wielki.txt"},{title:"Będę śpiewał Tobie",file:"079-bede-spiewal-tobie.txt"},{title:"Wszyscy ludzie klaszczą w dłonie",file:"080-wszyscy-ludzie-klaszcza-w-dlonie.txt"},{title:"Duchu Święty, przyjdź i rozpal nas",file:"081-duchu-swiety-przyjdz-i-rozpal-nas.txt"},{title:"Miałem Pana zawsze przed oczami",file:"082-mialem-pana-zawsze-przed-oczami.txt"},{title:"Oddajmy cześć wiecznemu Panu chwał",file:"083-oddajmy-czesc-wiecznemu-panu-chwal.txt"},{title:"Panu naszemu pieśni grajcie",file:"084-panu-naszemu-piesni-grajcie.txt"},{title:"Moje wędrowanie",file:"085-moje-wedrowanie.txt"},{title:"Przyjaciela mam",file:"086-przyjaciela-mam.txt"},{title:"Jezus, pokonał śmierć",file:"087-jezus-pokonal-smierc.txt"},{title:"Jedyny Pan, prawdziwy Bóg",file:"088-jedyny-pan-prawdziwy-bog.txt"},{title:"Jezus uzdrawia dziś",file:"089-jezus-uzdrawia-dzis.txt"},{title:"Jak dobrze jest dziękować Ci, Panie",file:"090-jak-dobrze-jest-dziekowac-ci-panie.txt"},{title:"W Tobie jest światło",file:"091-w-tobie-jest-swiatlo.txt"},{title:"O, Panie, Ty nam dajesz",file:"092-o-panie-ty-nam-dajesz.txt"},{title:"Boże, Ojcze na niebie",file:"093-boze-ojcze-na-niebie.txt"},{title:"Przed Tobą, Wszechmocny",file:"094-przed-toba-wszechmocny.txt"},{title:"Szukam Cię, Panie, o wschodzie",file:"095-szukam-cie-panie-o-wschodzie.txt"},{title:"Śpiewaj Panu, swemu Bogu serce daj",file:"096-spiewaj-panu-swemu-bogu-serce-daj.txt"},{title:"Ukaż mi, Panie, Swą twarz",file:"097-ukaz-mi-panie-swa-twarz.txt"},{title:"Panie, Twój tron",file:"098-panie-twoj-tron.txt"},{title:"Nic nie odłączy mnie",file:"099-nic-nie-odlaczy-mnie.txt"},{title:"Każdy wschód słońca",file:"100-kazdy-wschod-slonca.txt"},{title:"Nie lękajcie się",file:"101-nie-lekajcie-sie.txt"},{title:"Ofiaruję Tobie, Panie mój",file:"102-ofiaruje-tobie-panie-moj.txt"},{title:"Jestem tu, by wielbić",file:"103-jestem-tu-by-wielbic.txt"},{title:"Daję Ci serce moje Panie",file:"104-daje-ci-serce-moje-panie.txt"},{title:"Jezus daje nam zbawienie",file:"105-jezus-daje-nam-zbawienie.txt"},{title:"Boże Twa łaska nad nami jest",file:"106-boze-twa-laska-nad-nami-jest.txt"},{title:"Szedłem kiedyś Jezu",file:"107-szedlem-kiedys-jezu.txt"},{title:"Pokorna służebnico Pana",file:"108-pokorna-sluzebnico-pana.txt"},{title:"Jestem do Niego podobny",file:"109-jestem-do-niego-podobny.txt"},{title:"Będę z aniołami śpiewał, alleluja",file:"110-bede-z-aniolami-spiewal-alleluja.txt"},{title:"Zbudowani na Chrystusie",file:"111-zbudowani-na-chrystusie.txt"},{title:"Duchu miłości, wylewaj się na nas",file:"112-duchu-milosci-wylewaj-sie-na-nas.txt"},{title:"Albowiem tak Bóg umiłował świat",file:"113-albowiem-tak-bog-umilowal-swiat.txt"},{title:"W kruszynie chleba",file:"114-w-kruszynie-chleba.txt"},{title:"Spocznij na nas, Duchu Pana",file:"115-spocznij-na-nas-duchu-pana.txt"},{title:"Uwielbiam Cię, błogosławię Cię",file:"116-uwielbiam-cie-blogoslawie-cie.txt"},{title:"Pan jest mocą swojego ludu",file:"117-pan-jest-moca-swojego-ludu.txt"},{title:"Ty masz moc uzdrowienia",file:"118-ty-masz-moc-uzdrowienia.txt"},{title:"Łaską jesteśmy zbawieni",file:"119-laska-jestesmy-zbawieni.txt"},{title:"Kiedyś wino i chleb",file:"120-kiedys-wino-i-chleb.txt"},{title:"Duchu Święty ogarnij mnie",file:"121-duchu-swiety-ogarnij-mnie.txt"},{title:"Fundamentem jest miłość",file:"122-fundamentem-jest-milosc.txt"},{title:"Czekam na Ciebie, dobry Boże",file:"123-czekam-na-ciebie-dobry-boze.txt"},{title:"Raduje się dusza ma",file:"124-raduje-sie-dusza-ma.txt"},{title:"Modlitwa o Miłość (Zabierz Panie i przyjmij)",file:"125-modlitwa-o-milosc-zabierz-panie-i-przyjmij.txt"},{title:"W Twoje ręce, o Matko",file:"126-w-twoje-rece-o-matko.txt"},{title:"Chcę wywyższać Imię Twe",file:"127-chce-wywyzszac-imie-twe.txt"},{title:"Nadzieja nosi niebieską sukienkę",file:"128-nadzieja-nosi-niebieska-sukienke.txt"},{title:"Ubi caritas",file:"129-ubi-caritas.txt"},{title:"Kocham, więc nie muszę się bać",file:"130-kocham-wiec-nie-musze-sie-bac.txt"},{title:"W lekkim powiewie",file:"131-w-lekkim-powiewie.txt"},{title:"Hosanna, hosanna",file:"132-hosanna-hosanna.txt"},{title:"To jest Baranka Ciało, Jego Krew",file:"133-to-jest-baranka-cialo-jego-krew.txt"},{title:"Emmanuel, Emmanuel",file:"134-emmanuel-emmanuel.txt"},{title:"Oto idzie mój Bóg",file:"135-oto-idzie-moj-bog.txt"},{title:"Pomódl się, Miriam",file:"136-pomodl-sie-miriam.txt"},{title:"Maryjo, wzorze prostoty",file:"137-maryjo-wzorze-prostoty.txt"},{title:"Jestem dzieckiem Boga",file:"138-jestem-dzieckiem-boga.txt"},{title:"Jezus jest z nami tu",file:"139-jezus-jest-z-nami-tu.txt"},{title:"Niech zabrzmi Panu chwała w niebiosach",file:"140-niech-zabrzmi-panu-chwala-w-niebiosach.txt"},{title:"Barka",file:"141-barka.txt"},{title:"Ja Jestem",file:"142-ja-jestem.txt"},{title:"Jezu, Źródło",file:"143-jezu-zrodlo.txt"},{title:"Nie bój się, wypłyń na głębię",file:"144-nie-boj-sie-wyplyn-na-glebie.txt"},{title:"Niepojęty, niezmierzony",file:"145-niepojety-niezmierzony.txt"},{title:"Witaj, Pokarmie",file:"146-witaj-pokarmie.txt"},{title:"Chrystus Pan karmi nas",file:"147-chrystus-pan-karmi-nas.txt"},{title:"O, Jezu, w Hostii utajony",file:"148-o-jezu-w-hostii-utajony.txt"},{title:"Ta krew z grzechu obmywa nas",file:"149-ta-krew-z-grzechu-obmywa-nas.txt"},{title:"Przyodziałeś mnie, Panie",file:"150-przyodziales-mnie-panie.txt"},{title:"Jezus, Królem naszym jest",file:"151-jezus-krolem-naszym-jest.txt"},{title:"Wypłyń na głębię",file:"152-wyplyn-na-glebie.txt"},{title:"Idzie mój Pan",file:"153-idzie-moj-pan.txt"},{title:"Z Jezusem w chwale Ojca",file:"154-z-jezusem-w-chwale-ojca.txt"},{title:"Odnajduję Cię",file:"155-odnajduje-cie.txt"},{title:"Już teraz we mnie kwitną Twe ogrody",file:"156-juz-teraz-we-mnie-kwitna-twe-ogrody.txt"},{title:"Z Tobą ciemność nie będzie ciemna",file:"157-z-toba-ciemnosc-nie-bedzie-ciemna.txt"},{title:"Mrok ogarnął całą ziemię",file:"158-mrok-ogarnal-cala-ziemie.txt"},{title:"Rzekł Pan stało się",file:"159-rzekl-pan-stalo-sie.txt"},{title:"Zwykły chleb przemieniasz",file:"160-zwykly-chleb-przemieniasz.txt"},{title:"Abba Ojcze",file:"161-abba-ojcze.txt"},{title:"Błogosław duszo moja Pana",file:"162-blogoslaw-duszo-moja-pana.txt"},{title:"W Swym Sercu na wieki ukryłeś nas",file:"163-w-swym-sercu-na-wieki-ukryles-nas.txt"},{title:"Podnieś mnie, Jezu",file:"164-podnies-mnie-jezu.txt"},{title:"Ja wierzę, że to Jezus",file:"165-ja-wierze-ze-to-jezus.txt"},{title:"Jesteś Królem",file:"166-jestes-krolem.txt"},{title:"Przyjdź, królestwo Twoje",file:"167-przyjdz-krolestwo-twoje.txt"},{title:"Jesteś perłą",file:"168-jestes-perla.txt"},{title:"Lud Twój, Panie, lud pielgrzymi",file:"169-lud-twoj-panie-lud-pielgrzymi.txt"},{title:"Otwórz me oczy, chcę widzieć Jezusa",file:"170-otworz-me-oczy-chce-widziec-jezusa.txt"},{title:"Duchu Święty, błagam nie zwlekaj!",file:"171-duchu-swiety-blagam-nie-zwlekaj.txt"},{title:"Nie, nie, nie lękaj się",file:"172-nie-nie-nie-lekaj-sie.txt"},{title:"Za to, że mnie ukochałeś",file:"173-za-to-ze-mnie-ukochales.txt"},{title:"Jezu, Tyś wszystkim dla mnie jest",file:"174-jezu-tys-wszystkim-dla-mnie-jest.txt"},{title:"Pan mnie strzeże",file:"175-pan-mnie-strzeze.txt"},{title:"W Tobie cała nadzieja ma",file:"176-w-tobie-cala-nadzieja-ma.txt"},{title:"To mój Pan wiele mi uczynił",file:"177-to-moj-pan-wiele-mi-uczynil.txt"},{title:"Niech będzie chwała i cześć",file:"178-niech-bedzie-chwala-i-czesc.txt"},{title:"Kocham Twoją wolę, Panie",file:"179-kocham-twoja-wole-panie.txt"},{title:"Godzien chwały jest Baranek",file:"180-godzien-chwaly-jest-baranek.txt"},{title:"Oddaję Ci życie swe",file:"181-oddaje-ci-zycie-swe.txt"},{title:"Jestem cały Twój",file:"182-jestem-caly-twoj.txt"},{title:"Z okrzykiem radości wracamy na Syjon",file:"183-z-okrzykiem-radosci-wracamy-na-syjon.txt"},{title:"Mizerna, cicha",file:"184-mizerna-cicha.txt"},{title:"Przyjdź jak deszcz (A. Gorączkowska)",file:"185-przyjdz-jak-deszcz-a-goraczkowska.txt"},{title:"Niegodny",file:"186-niegodny.txt"},{title:"Chwała Bogu Ojcu",file:"187-chwala-bogu-ojcu.txt"},{title:"Chwała Panu i cześć",file:"188-chwala-panu-i-czesc.txt"},{title:"Chwalcie Pana niebios",file:"189-chwalcie-pana-niebios.txt"},{title:"Wszystkie narody klaskajcie w dłonie",file:"190-wszystkie-narody-klaskajcie-w-dlonie.txt"},{title:"Hymn do Ducha Świętego",file:"191-hymn-do-ducha-swietego.txt"},{title:"O, Zbawcza Hostio",file:"192-o-zbawcza-hostio.txt"},{title:"Nie mądrość świata tego",file:"193-nie-madrosc-swiata-tego.txt"},{title:"Blisko, blisko, blisko jesteś, Panie",file:"194-blisko-blisko-blisko-jestes-panie.txt"},{title:"Boże wieczny, Boże żywy",file:"195-boze-wieczny-boze-zywy.txt"},{title:"Ciebie pragnie dusza moja",file:"196-ciebie-pragnie-dusza-moja.txt"},{title:"Pastorałka od serca do ucha",file:"197-pastoralka-od-serca-do-ucha.txt"},{title:"Powstań i świeć",file:"198-powstan-i-swiec.txt"},{title:"Przybądź, Święty",file:"199-przybadz-swiety.txt"},{title:"Jego Miłość",file:"200-jego-milosc.txt"},{title:"Jestem tego pewien",file:"201-jestem-tego-pewien.txt"},{title:"Powstań przyjaciółko ma",file:"202-powstan-przyjaciolko-ma.txt"},{title:"Mroźna cisza",file:"203-mrozna-cisza.txt"},{title:"Hymn ŚDM Panama 2019",file:"204-hymn-sdm-panama-.txt"},{title:"Memu Bogu, królowi",file:"205-memu-bogu-krolowi.txt"},{title:"Miłość uzdalnia mnie",file:"206-milosc-uzdalnia-mnie.txt"},{title:"Panie Jezu, przyjdź",file:"207-panie-jezu-przyjdz.txt"},{title:"Jahwe",file:"208-jahwe.txt"},{title:"Nie chcę w innym miejscu być",file:"209-nie-chce-w-innym-miejscu-byc.txt"},{title:"Duchu Święty, Tchnienie Ojca",file:"210-duchu-swiety-tchnienie-ojca.txt"},{title:"Yeshua (Jedno jest Imię pod niebem)",file:"211-yeshua-jedno-jest-imie-pod-niebem.txt"},{title:"Chcę tonąć w morzu Twego miłosierdzia",file:"212-chce-tonac-w-morzu-twego-milosierdzia.txt"},{title:"Jak w Betlejem",file:"213-jak-w-betlejem.txt"},{title:"Otwórz me oczy, o Panie",file:"214-otworz-me-oczy-o-panie.txt"},{title:"Krzyżu Święty, co świat obejmujesz",file:"215-krzyzu-swiety-co-swiat-obejmujesz.txt"},{title:"Daj mi usłyszeć Twój głos",file:"216-daj-mi-uslyszec-twoj-glos.txt"},{title:"Nie bój się, Ja Jestem",file:"217-nie-boj-sie-ja-jestem.txt"},{title:"Przybądź, Duchu Święty",file:"218-przybadz-duchu-swiety.txt"},{title:"Wspaniały dawco miłości",file:"219-wspanialy-dawco-milosci.txt"},{title:"Zbliżam się w pokorze",file:"220-zblizam-sie-w-pokorze.txt"},{title:"Duszo moja, Pana chwal",file:"221-duszo-moja-pana-chwal.txt"},{title:"Niech przyjęcie Ciała i Krwi",file:"222-niech-przyjecie-ciala-i-krwi.txt"},{title:"Oceany",file:"223-oceany.txt"},{title:"Być bliżej Ciebie chcę",file:"224-byc-blizej-ciebie-chce.txt"},{title:"Śpiewaj Jemu",file:"225-spiewaj-jemu.txt"},{title:"W żłobie leży",file:"226-w-zlobie-lezy.txt"},{title:"Jakie piękne jest Imię Twe",file:"227-jakie-piekne-jest-imie-twe.txt"},{title:"Mój Jezu, mój Zbawco",file:"228-moj-jezu-moj-zbawco.txt"},{title:"Wykrzykujcie Bogu, wykrzykujcie Królowi",file:"229-wykrzykujcie-bogu-wykrzykujcie-krolowi.txt"},{title:"Duszo ma, Pana chwal",file:"230-duszo-ma-pana-chwal.txt"},{title:"Zaufałem Panu i już",file:"231-zaufalem-panu-i-juz.txt"},{title:"Przyjdź, o Jezu, Maranatha!",file:"232-przyjdz-o-jezu-maranatha.txt"},{title:"Przywołaj mnie, Panie, na pustynię",file:"233-przywolaj-mnie-panie-na-pustynie.txt"},{title:"Miłość przychodzi teraz (Jezus cię kocha)",file:"234-milosc-przychodzi-teraz-jezus-cie-kocha.txt"},{title:"Taki jesteś Ty",file:"235-taki-jestes-ty.txt"},{title:"Pełen czci przed Tobą klękam",file:"236-pelen-czci-przed-toba-klekam.txt"},{title:"Dom na skale",file:"237-dom-na-skale.txt"},{title:"Maryjo, chcę zamieszkać z Tobą",file:"238-maryjo-chce-zamieszkac-z-toba.txt"},{title:"Dzięki Ci, Maryjo",file:"239-dzieki-ci-maryjo.txt"},{title:"Duchu Święty, Boże przyjdź",file:"240-duchu-swiety-boze-przyjdz.txt"},{title:"Dziś jest czas, by oddać Bogu chwałę",file:"241-dzis-jest-czas-by-oddac-bogu-chwale.txt"},{title:"Chlebie najcichszy",file:"242-chlebie-najcichszy.txt"},{title:"Przyjacielu, chcę zostać z Tobą",file:"243-przyjacielu-chce-zostac-z-toba.txt"},{title:"O Matko, z Częstochowskiego wizerunku",file:"244-o-matko-z-czestochowskiego-wizerunku.txt"},{title:"Koronka do Miłosierdzia Bożego",file:"245-koronka-do-milosierdzia-bozego.txt"},{title:"Otwórzcie bramy",file:"246-otworzcie-bramy.txt"},{title:"Przybieżeli do Betlejem (żydowskie)",file:"247-przybiezeli-do-betlejem-zydowskie.txt"},{title:"Wśród nocnej ciszy",file:"248-wsrod-nocnej-ciszy.txt"},{title:"Jezus malusieńki",file:"249-jezus-malusienki.txt"},{title:"Gore gwiazda Jezusowi",file:"250-gore-gwiazda-jezusowi.txt"},{title:"Jezu jesteś tu (Chwała)",file:"251-jezu-jestes-tu-chwala.txt"},{title:"Modlitwa o pokój",file:"252-modlitwa-o-pokoj.txt"},{title:"Sekwencja - Przybądź Duchu Święty",file:"253-sekwencja--przybadz-duchu-swiety.txt"},{title:"Zjednoczeni w Duchu",file:"254-zjednoczeni-w-duchu.txt"},{title:"Życie trzeba umieć oddać",file:"255-zycie-trzeba-umiec-oddac.txt"},{title:"Uwierz Polsko",file:"256-uwierz-polsko.txt"},{title:"Niech Ci błogosławi Pan",file:"257-niech-ci-blogoslawi-pan.txt"},{title:"W żłobie leży (wersja 2)",file:"258-w-zlobie-lezy-wersja-.txt"},{title:"Żywy jest Kościół Twój",file:"259-zywy-jest-kosciol-twoj.txt"},{title:"Panie mój, przychodzę dziś",file:"260-panie-moj-przychodze-dzis.txt"},{title:"Głoś imię Pana",file:"261-glos-imie-pana.txt"},{title:"Niepokalana (J. Tomalak)",file:"262-niepokalana-j-tomalak.txt"},{title:"Skrzypi wóz",file:"263-skrzypi-woz.txt"},{title:"Bóg się rodzi",file:"264-bog-sie-rodzi.txt"},{title:"Mędrcy świata, monarchowie",file:"265-medrcy-swiata-monarchowie.txt"},{title:"Anioł pasterzom mówił",file:"266-aniol-pasterzom-mowil.txt"},{title:"Do szopy hej pasterze",file:"267-do-szopy-hej-pasterze.txt"},{title:"Cóż to za Dziecię",file:"268-coz-to-za-dziecie.txt"},{title:"Narodził się Jezus Chrystus",file:"269-narodzil-sie-jezus-chrystus.txt"},{title:"Adeste, fideles",file:"270-adeste-fideles.txt"},{title:"O Jezu, cichy i pokorny",file:"271-o-jezu-cichy-i-pokorny.txt"},{title:"Duszo Chrystusowa",file:"272-duszo-chrystusowa.txt"},{title:"Upadnij na kolana",file:"273-upadnij-na-kolana.txt"},{title:"Chrystus Pan, Boży Syn",file:"274-chrystus-pan-bozy-syn.txt"},{title:"Pokładam w Panu ufność mą",file:"275-pokladam-w-panu-ufnosc-ma.txt"},{title:"Zamieszkałem w cieniu Twoich rąk",file:"276-zamieszkalem-w-cieniu-twoich-rak.txt"}],i7="Nie mamy jeszcze tekstu do tego utworu. 😇",a7=Object.assign({"./lyrics/001-panie-zmiluj-sie.txt":X_,"./lyrics/002-gloria.txt":V_,"./lyrics/003-chwala-na-wysokosci.txt":Q_,"./lyrics/004-alleluja.txt":I_,"./lyrics/005-o-uslysz-moj-glos--modlitwa-wiernych.txt":$_,"./lyrics/006-swiety-swiety.txt":eA,"./lyrics/007-ojcze-nasz.txt":nA,"./lyrics/008-baranku-bozy.txt":iA,"./lyrics/009-tryumfy-krola-niebieskiego.txt":aA,"./lyrics/010-gdy-sliczna-panna.txt":tA,"./lyrics/011-lulajze-jezuniu.txt":oA,"./lyrics/012-z-narodzenia-pana.txt":sA,"./lyrics/013-przybiezeli-do-betlejem.txt":lA,"./lyrics/014-dzisiaj-w-betlejem.txt":cA,"./lyrics/015-nie-placzze-moj-syneczku.txt":rA,"./lyrics/016-cicha-noc.txt":uA,"./lyrics/017-jezusa-narodzonego.txt":fA,"./lyrics/018-pastuszkowie-bracia-mili.txt":dA,"./lyrics/019-gdy-sie-chrystus-rodzi.txt":mA,"./lyrics/020-pojdzmy-wszyscy-do-stajenki.txt":zA,"./lyrics/021-ciemne-niebo-swiat-otula.txt":yA,"./lyrics/022-prawda-jedyna.txt":wA,"./lyrics/023-drzewo-krzyza-surowe.txt":hA,"./lyrics/024-dzieki-za-twoj-krzyz.txt":gA,"./lyrics/025-golgoto-golgoto-golgoto.txt":pA,"./lyrics/026-zbawienie-przyszlo-przez-krzyz.txt":bA,"./lyrics/027-zydowski-krol-bozy-syn.txt":jA,"./lyrics/028-bez-wstazek-lub-balonow.txt":vA,"./lyrics/029-rozpiety-na-ramionach.txt":kA,"./lyrics/030-psalm-hosanna.txt":_A,"./lyrics/031-uwielbiam-imie-twoje-panie.txt":AA,"./lyrics/032-zaspiewajcie-panu-piesn-nowa.txt":CA,"./lyrics/033-po-szabacie-pierwszego-dnia-z-rana.txt":DA,"./lyrics/034-wody-nie-ugasza-jej.txt":TA,"./lyrics/035-zmartwychwstal-pan-i-zyje-dzis.txt":EA,"./lyrics/036-oto-sa-baranki-mlode.txt":SA,"./lyrics/037-ty-tylko-mnie-poprowadz.txt":xA,"./lyrics/038-swojego-ducha-panie.txt":GA,"./lyrics/039-alleluja-cohen.txt":OA,"./lyrics/040-maryjo-matko-mojego-wezwania.txt":BA,"./lyrics/041-twoja-milosc.txt":NA,"./lyrics/042-powietrzem-moim-jest.txt":RA,"./lyrics/043-kochany-bracie-kochana-siostro.txt":MA,"./lyrics/044-pan-jest-pasterzem-moim-laj-la-laj.txt":PA,"./lyrics/045-do-ciebie-panie-wola-dusza-moja.txt":JA,"./lyrics/046-maryjo-oddana-panu.txt":HA,"./lyrics/047-nic-nie-musisz-mowic-nic.txt":FA,"./lyrics/048-wszystko-co-dzis-mamy.txt":UA,"./lyrics/049-cisza.txt":KA,"./lyrics/050-moj-pan-moca-moja-jest.txt":LA,"./lyrics/051-bedziemy-tanczyc-bedziemy-spiewac.txt":ZA,"./lyrics/052-niech-wam-blogoslawi-pan.txt":WA,"./lyrics/053-spiewajcie-panu-slawcie-go.txt":YA,"./lyrics/054-jezus-dzis-przyszedl-do-mnie.txt":qA,"./lyrics/055-wykrzykujcie-na-czesc-pana.txt":XA,"./lyrics/056-nie-bojcie-sie-zyc-dla-milosci.txt":VA,"./lyrics/057-otwierasz-niebo.txt":QA,"./lyrics/058-moj-lad.txt":IA,"./lyrics/059-schowaj-mnie.txt":$A,"./lyrics/060-niechaj-zstapi-duch-twoj.txt":eC,"./lyrics/061-blogoslawieni-milosierni.txt":nC,"./lyrics/062-stoje-dzis.txt":iC,"./lyrics/063-mow-do-mnie-panie.txt":aC,"./lyrics/064-dotknij-panie-moich-oczu.txt":tC,"./lyrics/065-uwielbiajcie-pana.txt":oC,"./lyrics/066-oto-ja-poslij-mnie.txt":sC,"./lyrics/067-w-ciele-chrystusa-tworzymy-jedno.txt":lC,"./lyrics/068-ukojenie.txt":cC,"./lyrics/069-wiecej-milosci-wiecej-mocy.txt":rC,"./lyrics/070-duchu-swiety-stworzycielu.txt":uC,"./lyrics/071-jezus-najwyzsze-imie.txt":fC,"./lyrics/072-duchu-swiety-obiecany-nam.txt":dC,"./lyrics/073-ja-dziekuje-ci.txt":mC,"./lyrics/074-duchu-swiety-pouczaj-mnie.txt":zC,"./lyrics/075-nasz-pan-jest-potezny.txt":yC,"./lyrics/076-jestesmy-piekni-twoim-pieknem.txt":wC,"./lyrics/077-godzien-o-godzien.txt":hC,"./lyrics/078-nasz-bog-jest-wielki.txt":gC,"./lyrics/079-bede-spiewal-tobie.txt":pC,"./lyrics/080-wszyscy-ludzie-klaszcza-w-dlonie.txt":bC,"./lyrics/081-duchu-swiety-przyjdz-i-rozpal-nas.txt":jC,"./lyrics/082-mialem-pana-zawsze-przed-oczami.txt":vC,"./lyrics/083-oddajmy-czesc-wiecznemu-panu-chwal.txt":kC,"./lyrics/084-panu-naszemu-piesni-grajcie.txt":_C,"./lyrics/085-moje-wedrowanie.txt":AC,"./lyrics/086-przyjaciela-mam.txt":CC,"./lyrics/087-jezus-pokonal-smierc.txt":DC,"./lyrics/088-jedyny-pan-prawdziwy-bog.txt":TC,"./lyrics/089-jezus-uzdrawia-dzis.txt":EC,"./lyrics/090-jak-dobrze-jest-dziekowac-ci-panie.txt":SC,"./lyrics/091-w-tobie-jest-swiatlo.txt":xC,"./lyrics/092-o-panie-ty-nam-dajesz.txt":GC,"./lyrics/093-boze-ojcze-na-niebie.txt":OC,"./lyrics/094-przed-toba-wszechmocny.txt":BC,"./lyrics/095-szukam-cie-panie-o-wschodzie.txt":NC,"./lyrics/096-spiewaj-panu-swemu-bogu-serce-daj.txt":RC,"./lyrics/097-ukaz-mi-panie-swa-twarz.txt":MC,"./lyrics/098-panie-twoj-tron.txt":PC,"./lyrics/099-nic-nie-odlaczy-mnie.txt":JC,"./lyrics/100-kazdy-wschod-slonca.txt":HC,"./lyrics/101-nie-lekajcie-sie.txt":FC,"./lyrics/102-ofiaruje-tobie-panie-moj.txt":UC,"./lyrics/103-jestem-tu-by-wielbic.txt":KC,"./lyrics/104-daje-ci-serce-moje-panie.txt":LC,"./lyrics/105-jezus-daje-nam-zbawienie.txt":ZC,"./lyrics/106-boze-twa-laska-nad-nami-jest.txt":WC,"./lyrics/107-szedlem-kiedys-jezu.txt":YC,"./lyrics/108-pokorna-sluzebnico-pana.txt":qC,"./lyrics/109-jestem-do-niego-podobny.txt":XC,"./lyrics/110-bede-z-aniolami-spiewal-alleluja.txt":VC,"./lyrics/111-zbudowani-na-chrystusie.txt":QC,"./lyrics/112-duchu-milosci-wylewaj-sie-na-nas.txt":IC,"./lyrics/113-albowiem-tak-bog-umilowal-swiat.txt":$C,"./lyrics/114-w-kruszynie-chleba.txt":e2,"./lyrics/115-spocznij-na-nas-duchu-pana.txt":n2,"./lyrics/116-uwielbiam-cie-blogoslawie-cie.txt":i2,"./lyrics/117-pan-jest-moca-swojego-ludu.txt":a2,"./lyrics/118-ty-masz-moc-uzdrowienia.txt":t2,"./lyrics/119-laska-jestesmy-zbawieni.txt":o2,"./lyrics/120-kiedys-wino-i-chleb.txt":s2,"./lyrics/121-duchu-swiety-ogarnij-mnie.txt":l2,"./lyrics/122-fundamentem-jest-milosc.txt":c2,"./lyrics/123-czekam-na-ciebie-dobry-boze.txt":r2,"./lyrics/124-raduje-sie-dusza-ma.txt":u2,"./lyrics/125-modlitwa-o-milosc-zabierz-panie-i-przyjmij.txt":f2,"./lyrics/126-w-twoje-rece-o-matko.txt":d2,"./lyrics/127-chce-wywyzszac-imie-twe.txt":m2,"./lyrics/128-nadzieja-nosi-niebieska-sukienke.txt":z2,"./lyrics/129-ubi-caritas.txt":y2,"./lyrics/130-kocham-wiec-nie-musze-sie-bac.txt":w2,"./lyrics/131-w-lekkim-powiewie.txt":h2,"./lyrics/132-hosanna-hosanna.txt":g2,"./lyrics/133-to-jest-baranka-cialo-jego-krew.txt":p2,"./lyrics/134-emmanuel-emmanuel.txt":b2,"./lyrics/135-oto-idzie-moj-bog.txt":j2,"./lyrics/136-pomodl-sie-miriam.txt":v2,"./lyrics/137-maryjo-wzorze-prostoty.txt":k2,"./lyrics/138-jestem-dzieckiem-boga.txt":_2,"./lyrics/139-jezus-jest-z-nami-tu.txt":A2,"./lyrics/140-niech-zabrzmi-panu-chwala-w-niebiosach.txt":C2,"./lyrics/141-barka.txt":D2,"./lyrics/142-ja-jestem.txt":T2,"./lyrics/143-jezu-zrodlo.txt":E2,"./lyrics/144-nie-boj-sie-wyplyn-na-glebie.txt":S2,"./lyrics/145-niepojety-niezmierzony.txt":x2,"./lyrics/146-witaj-pokarmie.txt":G2,"./lyrics/147-chrystus-pan-karmi-nas.txt":O2,"./lyrics/148-o-jezu-w-hostii-utajony.txt":B2,"./lyrics/149-ta-krew-z-grzechu-obmywa-nas.txt":N2,"./lyrics/150-przyodziales-mnie-panie.txt":R2,"./lyrics/151-jezus-krolem-naszym-jest.txt":M2,"./lyrics/152-wyplyn-na-glebie.txt":P2,"./lyrics/153-idzie-moj-pan.txt":J2,"./lyrics/154-z-jezusem-w-chwale-ojca.txt":H2,"./lyrics/155-odnajduje-cie.txt":F2,"./lyrics/156-juz-teraz-we-mnie-kwitna-twe-ogrody.txt":U2,"./lyrics/157-z-toba-ciemnosc-nie-bedzie-ciemna.txt":K2,"./lyrics/158-mrok-ogarnal-cala-ziemie.txt":L2,"./lyrics/159-rzekl-pan-stalo-sie.txt":Z2,"./lyrics/160-zwykly-chleb-przemieniasz.txt":W2,"./lyrics/161-abba-ojcze.txt":Y2,"./lyrics/162-blogoslaw-duszo-moja-pana.txt":q2,"./lyrics/163-w-swym-sercu-na-wieki-ukryles-nas.txt":X2,"./lyrics/164-podnies-mnie-jezu.txt":V2,"./lyrics/165-ja-wierze-ze-to-jezus.txt":Q2,"./lyrics/166-jestes-krolem.txt":I2,"./lyrics/167-przyjdz-krolestwo-twoje.txt":$2,"./lyrics/168-jestes-perla.txt":eD,"./lyrics/169-lud-twoj-panie-lud-pielgrzymi.txt":nD,"./lyrics/170-otworz-me-oczy-chce-widziec-jezusa.txt":iD,"./lyrics/171-duchu-swiety-blagam-nie-zwlekaj.txt":aD,"./lyrics/172-nie-nie-nie-lekaj-sie.txt":tD,"./lyrics/173-za-to-ze-mnie-ukochales.txt":oD,"./lyrics/174-jezu-tys-wszystkim-dla-mnie-jest.txt":sD,"./lyrics/175-pan-mnie-strzeze.txt":lD,"./lyrics/176-w-tobie-cala-nadzieja-ma.txt":cD,"./lyrics/177-to-moj-pan-wiele-mi-uczynil.txt":rD,"./lyrics/178-niech-bedzie-chwala-i-czesc.txt":uD,"./lyrics/179-kocham-twoja-wole-panie.txt":fD,"./lyrics/180-godzien-chwaly-jest-baranek.txt":dD,"./lyrics/181-oddaje-ci-zycie-swe.txt":mD,"./lyrics/182-jestem-caly-twoj.txt":zD,"./lyrics/183-z-okrzykiem-radosci-wracamy-na-syjon.txt":yD,"./lyrics/184-mizerna-cicha.txt":wD,"./lyrics/185-przyjdz-jak-deszcz-a-goraczkowska.txt":hD,"./lyrics/186-niegodny.txt":gD,"./lyrics/187-chwala-bogu-ojcu.txt":pD,"./lyrics/188-chwala-panu-i-czesc.txt":bD,"./lyrics/189-chwalcie-pana-niebios.txt":jD,"./lyrics/190-wszystkie-narody-klaskajcie-w-dlonie.txt":vD,"./lyrics/191-hymn-do-ducha-swietego.txt":kD,"./lyrics/192-o-zbawcza-hostio.txt":_D,"./lyrics/193-nie-madrosc-swiata-tego.txt":AD,"./lyrics/194-blisko-blisko-blisko-jestes-panie.txt":CD,"./lyrics/195-boze-wieczny-boze-zywy.txt":DD,"./lyrics/196-ciebie-pragnie-dusza-moja.txt":TD,"./lyrics/197-pastoralka-od-serca-do-ucha.txt":ED,"./lyrics/198-powstan-i-swiec.txt":SD,"./lyrics/199-przybadz-swiety.txt":xD,"./lyrics/200-jego-milosc.txt":GD,"./lyrics/201-jestem-tego-pewien.txt":OD,"./lyrics/202-powstan-przyjaciolko-ma.txt":BD,"./lyrics/203-mrozna-cisza.txt":ND,"./lyrics/204-hymn-sdm-panama-.txt":RD,"./lyrics/205-memu-bogu-krolowi.txt":MD,"./lyrics/206-milosc-uzdalnia-mnie.txt":PD,"./lyrics/207-panie-jezu-przyjdz.txt":JD,"./lyrics/208-jahwe.txt":HD,"./lyrics/209-nie-chce-w-innym-miejscu-byc.txt":FD,"./lyrics/210-duchu-swiety-tchnienie-ojca.txt":UD,"./lyrics/211-yeshua-jedno-jest-imie-pod-niebem.txt":KD,"./lyrics/212-chce-tonac-w-morzu-twego-milosierdzia.txt":LD,"./lyrics/213-jak-w-betlejem.txt":ZD,"./lyrics/214-otworz-me-oczy-o-panie.txt":WD,"./lyrics/215-krzyzu-swiety-co-swiat-obejmujesz.txt":YD,"./lyrics/216-daj-mi-uslyszec-twoj-glos.txt":qD,"./lyrics/217-nie-boj-sie-ja-jestem.txt":XD,"./lyrics/218-przybadz-duchu-swiety.txt":VD,"./lyrics/219-wspanialy-dawco-milosci.txt":QD,"./lyrics/220-zblizam-sie-w-pokorze.txt":ID,"./lyrics/221-duszo-moja-pana-chwal.txt":$D,"./lyrics/222-niech-przyjecie-ciala-i-krwi.txt":eT,"./lyrics/223-oceany.txt":nT,"./lyrics/224-byc-blizej-ciebie-chce.txt":iT,"./lyrics/225-spiewaj-jemu.txt":aT,"./lyrics/226-w-zlobie-lezy.txt":tT,"./lyrics/227-jakie-piekne-jest-imie-twe.txt":oT,"./lyrics/228-moj-jezu-moj-zbawco.txt":sT,"./lyrics/229-wykrzykujcie-bogu-wykrzykujcie-krolowi.txt":lT,"./lyrics/230-duszo-ma-pana-chwal.txt":cT,"./lyrics/231-zaufalem-panu-i-juz.txt":rT,"./lyrics/232-przyjdz-o-jezu-maranatha.txt":uT,"./lyrics/233-przywolaj-mnie-panie-na-pustynie.txt":fT,"./lyrics/234-milosc-przychodzi-teraz-jezus-cie-kocha.txt":dT,"./lyrics/235-taki-jestes-ty.txt":mT,"./lyrics/236-pelen-czci-przed-toba-klekam.txt":zT,"./lyrics/237-dom-na-skale.txt":yT,"./lyrics/238-maryjo-chce-zamieszkac-z-toba.txt":wT,"./lyrics/239-dzieki-ci-maryjo.txt":hT,"./lyrics/240-duchu-swiety-boze-przyjdz.txt":gT,"./lyrics/241-dzis-jest-czas-by-oddac-bogu-chwale.txt":pT,"./lyrics/242-chlebie-najcichszy.txt":bT,"./lyrics/243-przyjacielu-chce-zostac-z-toba.txt":jT,"./lyrics/244-o-matko-z-czestochowskiego-wizerunku.txt":vT,"./lyrics/245-koronka-do-milosierdzia-bozego.txt":kT,"./lyrics/246-otworzcie-bramy.txt":_T,"./lyrics/247-przybiezeli-do-betlejem-zydowskie.txt":AT,"./lyrics/248-wsrod-nocnej-ciszy.txt":CT,"./lyrics/249-jezus-malusienki.txt":DT,"./lyrics/250-gore-gwiazda-jezusowi.txt":TT,"./lyrics/251-jezu-jestes-tu-chwala.txt":ET,"./lyrics/252-modlitwa-o-pokoj.txt":ST,"./lyrics/253-sekwencja--przybadz-duchu-swiety.txt":xT,"./lyrics/254-zjednoczeni-w-duchu.txt":GT,"./lyrics/255-zycie-trzeba-umiec-oddac.txt":OT,"./lyrics/256-uwierz-polsko.txt":BT,"./lyrics/257-niech-ci-blogoslawi-pan.txt":NT,"./lyrics/258-w-zlobie-lezy-wersja-.txt":RT,"./lyrics/259-zywy-jest-kosciol-twoj.txt":MT,"./lyrics/260-panie-moj-przychodze-dzis.txt":PT,"./lyrics/261-glos-imie-pana.txt":JT,"./lyrics/262-niepokalana-j-tomalak.txt":HT,"./lyrics/263-skrzypi-woz.txt":FT,"./lyrics/264-bog-sie-rodzi.txt":UT,"./lyrics/265-medrcy-swiata-monarchowie.txt":KT,"./lyrics/266-aniol-pasterzom-mowil.txt":LT,"./lyrics/267-do-szopy-hej-pasterze.txt":ZT,"./lyrics/268-coz-to-za-dziecie.txt":WT,"./lyrics/269-narodzil-sie-jezus-chrystus.txt":YT,"./lyrics/270-adeste-fideles.txt":qT,"./lyrics/271-o-jezu-cichy-i-pokorny.txt":XT,"./lyrics/272-duszo-chrystusowa.txt":VT,"./lyrics/273-upadnij-na-kolana.txt":QT,"./lyrics/274-chrystus-pan-bozy-syn.txt":IT,"./lyrics/275-pokladam-w-panu-ufnosc-ma.txt":$T,"./lyrics/276-zamieszkalem-w-cieniu-twoich-rak.txt":e7}),t7=Object.entries(a7).reduce((o,[t,s])=>{const c=t.split("/").pop();return c&&(o[c]=s),o},{}),o7=n7.map(({title:o,file:t},s)=>({number:s+1,title:o,body:t7[t]||i7})),s7=o=>{const t=/\[.*?]/g,s=o.replace(t,"").trim(),c=(o.match(t)||[]).map(u=>u.replace(/[[\]]/g,""));return{lyrics:s,chords:c}},l7=o=>{const t=o.body.split(`
`).map(s7),s=t.findIndex(d=>d.lyrics||d.chords.length),c=t.length-t.slice().reverse().findIndex(d=>d.lyrics||d.chords.length),u=t.slice(s,c);return{title:o.title,number:o.number,latinTitle:Uh(o.title),body:u}},c7=o=>{let t=0;for(const s of o){const c=`${s.number}|${s.title}|${s.body}`;for(let u=0;u<c.length;u++)t=(t<<5)-t+c.charCodeAt(u),t=t&65535}return t.toString(16).toUpperCase().padStart(4,"0")},r7=o=>{const t=o.map(l7),s=c7(o);return{songs:t,checksum:s}},u7=r7(o7),f7=()=>N.jsx(q_,{parsedSongbook:u7});var zu={exports:{}},Go={},yu={exports:{}},wu={};var ww;function d7(){return ww||(ww=1,(function(o){function t(T,P){var H=T.length;T.push(P);e:for(;0<H;){var ce=H-1>>>1,me=T[ce];if(0<u(me,P))T[ce]=P,T[H]=me,H=ce;else break e}}function s(T){return T.length===0?null:T[0]}function c(T){if(T.length===0)return null;var P=T[0],H=T.pop();if(H!==P){T[0]=H;e:for(var ce=0,me=T.length,p=me>>>1;ce<p;){var x=2*(ce+1)-1,J=T[x],F=x+1,ie=T[F];if(0>u(J,H))F<me&&0>u(ie,J)?(T[ce]=ie,T[F]=H,ce=F):(T[ce]=J,T[x]=H,ce=x);else if(F<me&&0>u(ie,H))T[ce]=ie,T[F]=H,ce=F;else break e}}return P}function u(T,P){var H=T.sortIndex-P.sortIndex;return H!==0?H:T.id-P.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var d=performance;o.unstable_now=function(){return d.now()}}else{var z=Date,y=z.now();o.unstable_now=function(){return z.now()-y}}var h=[],w=[],v=1,k=null,G=3,M=!1,K=!1,U=!1,ee=!1,q=typeof setTimeout=="function"?setTimeout:null,W=typeof clearTimeout=="function"?clearTimeout:null,I=typeof setImmediate<"u"?setImmediate:null;function ue(T){for(var P=s(w);P!==null;){if(P.callback===null)c(w);else if(P.startTime<=T)c(w),P.sortIndex=P.expirationTime,t(h,P);else break;P=s(w)}}function Y(T){if(U=!1,ue(T),!K)if(s(h)!==null)K=!0,re||(re=!0,$());else{var P=s(w);P!==null&&Je(Y,P.startTime-T)}}var re=!1,Q=-1,xe=5,Qe=-1;function dn(){return ee?!0:!(o.unstable_now()-Qe<xe)}function cn(){if(ee=!1,re){var T=o.unstable_now();Qe=T;var P=!0;try{e:{K=!1,U&&(U=!1,W(Q),Q=-1),M=!0;var H=G;try{n:{for(ue(T),k=s(h);k!==null&&!(k.expirationTime>T&&dn());){var ce=k.callback;if(typeof ce=="function"){k.callback=null,G=k.priorityLevel;var me=ce(k.expirationTime<=T);if(T=o.unstable_now(),typeof me=="function"){k.callback=me,ue(T),P=!0;break n}k===s(h)&&c(h),ue(T)}else c(h);k=s(h)}if(k!==null)P=!0;else{var p=s(w);p!==null&&Je(Y,p.startTime-T),P=!1}}break e}finally{k=null,G=H,M=!1}P=void 0}}finally{P?$():re=!1}}}var $;if(typeof I=="function")$=function(){I(cn)};else if(typeof MessageChannel<"u"){var Me=new MessageChannel,je=Me.port2;Me.port1.onmessage=cn,$=function(){je.postMessage(null)}}else $=function(){q(cn,0)};function Je(T,P){Q=q(function(){T(o.unstable_now())},P)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(T){T.callback=null},o.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):xe=0<T?Math.floor(1e3/T):5},o.unstable_getCurrentPriorityLevel=function(){return G},o.unstable_next=function(T){switch(G){case 1:case 2:case 3:var P=3;break;default:P=G}var H=G;G=P;try{return T()}finally{G=H}},o.unstable_requestPaint=function(){ee=!0},o.unstable_runWithPriority=function(T,P){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var H=G;G=T;try{return P()}finally{G=H}},o.unstable_scheduleCallback=function(T,P,H){var ce=o.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?ce+H:ce):H=ce,T){case 1:var me=-1;break;case 2:me=250;break;case 5:me=1073741823;break;case 4:me=1e4;break;default:me=5e3}return me=H+me,T={id:v++,callback:P,priorityLevel:T,startTime:H,expirationTime:me,sortIndex:-1},H>ce?(T.sortIndex=H,t(w,T),s(h)===null&&T===s(w)&&(U?(W(Q),Q=-1):U=!0,Je(Y,H-ce))):(T.sortIndex=me,t(h,T),K||M||(K=!0,re||(re=!0,$()))),T},o.unstable_shouldYield=dn,o.unstable_wrapCallback=function(T){var P=G;return function(){var H=G;G=P;try{return T.apply(this,arguments)}finally{G=H}}}})(wu)),wu}var hw;function m7(){return hw||(hw=1,yu.exports=d7()),yu.exports}var gw;function z7(){if(gw)return Go;gw=1;var o=m7(),t=Hu(),s=bw();function c(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var i=2;i<arguments.length;i++)n+="&args[]="+encodeURIComponent(arguments[i])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function d(e){var n=e,i=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(i=n.return),e=n.return;while(e)}return n.tag===3?i:null}function z(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function y(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function h(e){if(d(e)!==e)throw Error(c(188))}function w(e){var n=e.alternate;if(!n){if(n=d(e),n===null)throw Error(c(188));return n!==e?null:e}for(var i=e,a=n;;){var l=i.return;if(l===null)break;var r=l.alternate;if(r===null){if(a=l.return,a!==null){i=a;continue}break}if(l.child===r.child){for(r=l.child;r;){if(r===i)return h(l),e;if(r===a)return h(l),n;r=r.sibling}throw Error(c(188))}if(i.return!==a.return)i=l,a=r;else{for(var f=!1,m=l.child;m;){if(m===i){f=!0,i=l,a=r;break}if(m===a){f=!0,a=l,i=r;break}m=m.sibling}if(!f){for(m=r.child;m;){if(m===i){f=!0,i=r,a=l;break}if(m===a){f=!0,a=r,i=l;break}m=m.sibling}if(!f)throw Error(c(189))}}if(i.alternate!==a)throw Error(c(190))}if(i.tag!==3)throw Error(c(188));return i.stateNode.current===i?e:n}function v(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=v(e),n!==null)return n;e=e.sibling}return null}var k=Object.assign,G=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),K=Symbol.for("react.portal"),U=Symbol.for("react.fragment"),ee=Symbol.for("react.strict_mode"),q=Symbol.for("react.profiler"),W=Symbol.for("react.consumer"),I=Symbol.for("react.context"),ue=Symbol.for("react.forward_ref"),Y=Symbol.for("react.suspense"),re=Symbol.for("react.suspense_list"),Q=Symbol.for("react.memo"),xe=Symbol.for("react.lazy"),Qe=Symbol.for("react.activity"),dn=Symbol.for("react.memo_cache_sentinel"),cn=Symbol.iterator;function $(e){return e===null||typeof e!="object"?null:(e=cn&&e[cn]||e["@@iterator"],typeof e=="function"?e:null)}var Me=Symbol.for("react.client.reference");function je(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Me?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case U:return"Fragment";case q:return"Profiler";case ee:return"StrictMode";case Y:return"Suspense";case re:return"SuspenseList";case Qe:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case K:return"Portal";case I:return e.displayName||"Context";case W:return(e._context.displayName||"Context")+".Consumer";case ue:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Q:return n=e.displayName||null,n!==null?n:je(e.type)||"Memo";case xe:n=e._payload,e=e._init;try{return je(e(n))}catch{}}return null}var Je=Array.isArray,T=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,P=s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H={pending:!1,data:null,method:null,action:null},ce=[],me=-1;function p(e){return{current:e}}function x(e){0>me||(e.current=ce[me],ce[me]=null,me--)}function J(e,n){me++,ce[me]=e.current,e.current=n}var F=p(null),ie=p(null),oe=p(null),we=p(null);function Xe(e,n){switch(J(oe,n),J(ie,e),J(F,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?Tz(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=Tz(n),e=Ez(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}x(F),J(F,e)}function Ee(){x(F),x(ie),x(oe)}function xn(e){e.memoizedState!==null&&J(we,e);var n=F.current,i=Ez(n,e.type);n!==i&&(J(ie,e),J(F,i))}function ni(e){ie.current===e&&(x(F),x(ie)),we.current===e&&(x(we),Do._currentValue=H)}var Xn,Ti;function mn(e){if(Xn===void 0)try{throw Error()}catch(i){var n=i.stack.trim().match(/\n( *(at )?)/);Xn=n&&n[1]||"",Ti=-1<i.stack.indexOf(`
    at`)?" (<anonymous>)":-1<i.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Xn+e+Ti}var Ae=!1;function Ei(e,n){if(!e||Ae)return"";Ae=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(n){var O=function(){throw Error()};if(Object.defineProperty(O.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(O,[])}catch(D){var C=D}Reflect.construct(e,[],O)}else{try{O.call()}catch(D){C=D}e.call(O.prototype)}}else{try{throw Error()}catch(D){C=D}(O=e())&&typeof O.catch=="function"&&O.catch(function(){})}}catch(D){if(D&&C&&typeof D.stack=="string")return[D.stack,C.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=a.DetermineComponentFrameRoot(),f=r[0],m=r[1];if(f&&m){var g=f.split(`
`),A=m.split(`
`);for(l=a=0;a<g.length&&!g[a].includes("DetermineComponentFrameRoot");)a++;for(;l<A.length&&!A[l].includes("DetermineComponentFrameRoot");)l++;if(a===g.length||l===A.length)for(a=g.length-1,l=A.length-1;1<=a&&0<=l&&g[a]!==A[l];)l--;for(;1<=a&&0<=l;a--,l--)if(g[a]!==A[l]){if(a!==1||l!==1)do if(a--,l--,0>l||g[a]!==A[l]){var E=`
`+g[a].replace(" at new "," at ");return e.displayName&&E.includes("<anonymous>")&&(E=E.replace("<anonymous>",e.displayName)),E}while(1<=a&&0<=l);break}}}finally{Ae=!1,Error.prepareStackTrace=i}return(i=e?e.displayName||e.name:"")?mn(i):""}function oa(e,n){switch(e.tag){case 26:case 27:case 5:return mn(e.type);case 16:return mn("Lazy");case 13:return e.child!==n&&n!==null?mn("Suspense Fallback"):mn("Suspense");case 19:return mn("SuspenseList");case 0:case 15:return Ei(e.type,!1);case 11:return Ei(e.type.render,!1);case 1:return Ei(e.type,!0);case 31:return mn("Activity");default:return""}}function Zo(e){try{var n="",i=null;do n+=oa(e,i),i=e,e=e.return;while(e);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var Nt=Object.prototype.hasOwnProperty,Rt=o.unstable_scheduleCallback,Mt=o.unstable_cancelCallback,Gl=o.unstable_shouldYield,Ol=o.unstable_requestPaint,rn=o.unstable_now,Bl=o.unstable_getCurrentPriorityLevel,ge=o.unstable_ImmediatePriority,ii=o.unstable_UserBlockingPriority,sa=o.unstable_NormalPriority,Ih=o.unstable_LowPriority,cf=o.unstable_IdlePriority,$h=o.log,eg=o.unstable_setDisableYieldValue,Pt=null,jn=null;function Si(e){if(typeof $h=="function"&&eg(e),jn&&typeof jn.setStrictMode=="function")try{jn.setStrictMode(Pt,e)}catch{}}var vn=Math.clz32?Math.clz32:ag,ng=Math.log,ig=Math.LN2;function ag(e){return e>>>=0,e===0?32:31-(ng(e)/ig|0)|0}var Wo=256,Yo=262144,qo=4194304;function la(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Xo(e,n,i){var a=e.pendingLanes;if(a===0)return 0;var l=0,r=e.suspendedLanes,f=e.pingedLanes;e=e.warmLanes;var m=a&134217727;return m!==0?(a=m&~r,a!==0?l=la(a):(f&=m,f!==0?l=la(f):i||(i=m&~e,i!==0&&(l=la(i))))):(m=a&~r,m!==0?l=la(m):f!==0?l=la(f):i||(i=a&~e,i!==0&&(l=la(i)))),l===0?0:n!==0&&n!==l&&(n&r)===0&&(r=l&-l,i=n&-n,r>=i||r===32&&(i&4194048)!==0)?n:l}function Jt(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function tg(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function rf(){var e=qo;return qo<<=1,(qo&62914560)===0&&(qo=4194304),e}function Nl(e){for(var n=[],i=0;31>i;i++)n.push(e);return n}function Ht(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function og(e,n,i,a,l,r){var f=e.pendingLanes;e.pendingLanes=i,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=i,e.entangledLanes&=i,e.errorRecoveryDisabledLanes&=i,e.shellSuspendCounter=0;var m=e.entanglements,g=e.expirationTimes,A=e.hiddenUpdates;for(i=f&~i;0<i;){var E=31-vn(i),O=1<<E;m[E]=0,g[E]=-1;var C=A[E];if(C!==null)for(A[E]=null,E=0;E<C.length;E++){var D=C[E];D!==null&&(D.lane&=-536870913)}i&=~O}a!==0&&uf(e,a,0),r!==0&&l===0&&e.tag!==0&&(e.suspendedLanes|=r&~(f&~n))}function uf(e,n,i){e.pendingLanes|=n,e.suspendedLanes&=~n;var a=31-vn(n);e.entangledLanes|=n,e.entanglements[a]=e.entanglements[a]|1073741824|i&261930}function ff(e,n){var i=e.entangledLanes|=n;for(e=e.entanglements;i;){var a=31-vn(i),l=1<<a;l&n|e[a]&n&&(e[a]|=n),i&=~l}}function df(e,n){var i=n&-n;return i=(i&42)!==0?1:Rl(i),(i&(e.suspendedLanes|n))!==0?0:i}function Rl(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ml(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function mf(){var e=P.p;return e!==0?e:(e=window.event,e===void 0?32:Iz(e.type))}function zf(e,n){var i=P.p;try{return P.p=e,n()}finally{P.p=i}}var xi=Math.random().toString(36).slice(2),nn="__reactFiber$"+xi,zn="__reactProps$"+xi,Ra="__reactContainer$"+xi,Pl="__reactEvents$"+xi,sg="__reactListeners$"+xi,lg="__reactHandles$"+xi,yf="__reactResources$"+xi,Ft="__reactMarker$"+xi;function Jl(e){delete e[nn],delete e[zn],delete e[Pl],delete e[sg],delete e[lg]}function Ma(e){var n=e[nn];if(n)return n;for(var i=e.parentNode;i;){if(n=i[Ra]||i[nn]){if(i=n.alternate,n.child!==null||i!==null&&i.child!==null)for(e=Rz(e);e!==null;){if(i=e[nn])return i;e=Rz(e)}return n}e=i,i=e.parentNode}return null}function Pa(e){if(e=e[nn]||e[Ra]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function Ut(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(c(33))}function Ja(e){var n=e[yf];return n||(n=e[yf]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Ie(e){e[Ft]=!0}var wf=new Set,hf={};function ca(e,n){Ha(e,n),Ha(e+"Capture",n)}function Ha(e,n){for(hf[e]=n,e=0;e<n.length;e++)wf.add(n[e])}var cg=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),gf={},pf={};function rg(e){return Nt.call(pf,e)?!0:Nt.call(gf,e)?!1:cg.test(e)?pf[e]=!0:(gf[e]=!0,!1)}function Vo(e,n,i){if(rg(n))if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var a=n.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+i)}}function Qo(e,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+i)}}function ai(e,n,i,a){if(a===null)e.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttributeNS(n,i,""+a)}}function Gn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function bf(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function ug(e,n,i){var a=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var l=a.get,r=a.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return l.call(this)},set:function(f){i=""+f,r.call(this,f)}}),Object.defineProperty(e,n,{enumerable:a.enumerable}),{getValue:function(){return i},setValue:function(f){i=""+f},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Hl(e){if(!e._valueTracker){var n=bf(e)?"checked":"value";e._valueTracker=ug(e,n,""+e[n])}}function jf(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var i=n.getValue(),a="";return e&&(a=bf(e)?e.checked?"true":"false":e.value),e=a,e!==i?(n.setValue(e),!0):!1}function Io(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var fg=/[\n"\\]/g;function On(e){return e.replace(fg,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Fl(e,n,i,a,l,r,f,m){e.name="",f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"?e.type=f:e.removeAttribute("type"),n!=null?f==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+Gn(n)):e.value!==""+Gn(n)&&(e.value=""+Gn(n)):f!=="submit"&&f!=="reset"||e.removeAttribute("value"),n!=null?Ul(e,f,Gn(n)):i!=null?Ul(e,f,Gn(i)):a!=null&&e.removeAttribute("value"),l==null&&r!=null&&(e.defaultChecked=!!r),l!=null&&(e.checked=l&&typeof l!="function"&&typeof l!="symbol"),m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"?e.name=""+Gn(m):e.removeAttribute("name")}function vf(e,n,i,a,l,r,f,m){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.type=r),n!=null||i!=null){if(!(r!=="submit"&&r!=="reset"||n!=null)){Hl(e);return}i=i!=null?""+Gn(i):"",n=n!=null?""+Gn(n):i,m||n===e.value||(e.value=n),e.defaultValue=n}a=a??l,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=m?e.checked:!!a,e.defaultChecked=!!a,f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.name=f),Hl(e)}function Ul(e,n,i){n==="number"&&Io(e.ownerDocument)===e||e.defaultValue===""+i||(e.defaultValue=""+i)}function Fa(e,n,i,a){if(e=e.options,n){n={};for(var l=0;l<i.length;l++)n["$"+i[l]]=!0;for(i=0;i<e.length;i++)l=n.hasOwnProperty("$"+e[i].value),e[i].selected!==l&&(e[i].selected=l),l&&a&&(e[i].defaultSelected=!0)}else{for(i=""+Gn(i),n=null,l=0;l<e.length;l++){if(e[l].value===i){e[l].selected=!0,a&&(e[l].defaultSelected=!0);return}n!==null||e[l].disabled||(n=e[l])}n!==null&&(n.selected=!0)}}function kf(e,n,i){if(n!=null&&(n=""+Gn(n),n!==e.value&&(e.value=n),i==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=i!=null?""+Gn(i):""}function _f(e,n,i,a){if(n==null){if(a!=null){if(i!=null)throw Error(c(92));if(Je(a)){if(1<a.length)throw Error(c(93));a=a[0]}i=a}i==null&&(i=""),n=i}i=Gn(n),e.defaultValue=i,a=e.textContent,a===i&&a!==""&&a!==null&&(e.value=a),Hl(e)}function Ua(e,n){if(n){var i=e.firstChild;if(i&&i===e.lastChild&&i.nodeType===3){i.nodeValue=n;return}}e.textContent=n}var dg=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Af(e,n,i){var a=n.indexOf("--")===0;i==null||typeof i=="boolean"||i===""?a?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":a?e.setProperty(n,i):typeof i!="number"||i===0||dg.has(n)?n==="float"?e.cssFloat=i:e[n]=(""+i).trim():e[n]=i+"px"}function Cf(e,n,i){if(n!=null&&typeof n!="object")throw Error(c(62));if(e=e.style,i!=null){for(var a in i)!i.hasOwnProperty(a)||n!=null&&n.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var l in n)a=n[l],n.hasOwnProperty(l)&&i[l]!==a&&Af(e,l,a)}else for(var r in n)n.hasOwnProperty(r)&&Af(e,r,n[r])}function Kl(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var mg=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),zg=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function $o(e){return zg.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function ti(){}var Ll=null;function Zl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ka=null,La=null;function Df(e){var n=Pa(e);if(n&&(e=n.stateNode)){var i=e[zn]||null;e:switch(e=n.stateNode,n.type){case"input":if(Fl(e,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name),n=i.name,i.type==="radio"&&n!=null){for(i=e;i.parentNode;)i=i.parentNode;for(i=i.querySelectorAll('input[name="'+On(""+n)+'"][type="radio"]'),n=0;n<i.length;n++){var a=i[n];if(a!==e&&a.form===e.form){var l=a[zn]||null;if(!l)throw Error(c(90));Fl(a,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(n=0;n<i.length;n++)a=i[n],a.form===e.form&&jf(a)}break e;case"textarea":kf(e,i.value,i.defaultValue);break e;case"select":n=i.value,n!=null&&Fa(e,!!i.multiple,n,!1)}}}var Wl=!1;function Tf(e,n,i){if(Wl)return e(n,i);Wl=!0;try{var a=e(n);return a}finally{if(Wl=!1,(Ka!==null||La!==null)&&(Hs(),Ka&&(n=Ka,e=La,La=Ka=null,Df(n),e)))for(n=0;n<e.length;n++)Df(e[n])}}function Kt(e,n){var i=e.stateNode;if(i===null)return null;var a=i[zn]||null;if(a===null)return null;i=a[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(i&&typeof i!="function")throw Error(c(231,n,typeof i));return i}var oi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Yl=!1;if(oi)try{var Lt={};Object.defineProperty(Lt,"passive",{get:function(){Yl=!0}}),window.addEventListener("test",Lt,Lt),window.removeEventListener("test",Lt,Lt)}catch{Yl=!1}var Gi=null,ql=null,es=null;function Ef(){if(es)return es;var e,n=ql,i=n.length,a,l="value"in Gi?Gi.value:Gi.textContent,r=l.length;for(e=0;e<i&&n[e]===l[e];e++);var f=i-e;for(a=1;a<=f&&n[i-a]===l[r-a];a++);return es=l.slice(e,1<a?1-a:void 0)}function ns(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function is(){return!0}function Sf(){return!1}function yn(e){function n(i,a,l,r,f){this._reactName=i,this._targetInst=l,this.type=a,this.nativeEvent=r,this.target=f,this.currentTarget=null;for(var m in e)e.hasOwnProperty(m)&&(i=e[m],this[m]=i?i(r):r[m]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?is:Sf,this.isPropagationStopped=Sf,this}return k(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var i=this.nativeEvent;i&&(i.preventDefault?i.preventDefault():typeof i.returnValue!="unknown"&&(i.returnValue=!1),this.isDefaultPrevented=is)},stopPropagation:function(){var i=this.nativeEvent;i&&(i.stopPropagation?i.stopPropagation():typeof i.cancelBubble!="unknown"&&(i.cancelBubble=!0),this.isPropagationStopped=is)},persist:function(){},isPersistent:is}),n}var ra={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},as=yn(ra),Zt=k({},ra,{view:0,detail:0}),yg=yn(Zt),Xl,Vl,Wt,ts=k({},Zt,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Il,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Wt&&(Wt&&e.type==="mousemove"?(Xl=e.screenX-Wt.screenX,Vl=e.screenY-Wt.screenY):Vl=Xl=0,Wt=e),Xl)},movementY:function(e){return"movementY"in e?e.movementY:Vl}}),xf=yn(ts),wg=k({},ts,{dataTransfer:0}),hg=yn(wg),gg=k({},Zt,{relatedTarget:0}),Ql=yn(gg),pg=k({},ra,{animationName:0,elapsedTime:0,pseudoElement:0}),bg=yn(pg),jg=k({},ra,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),vg=yn(jg),kg=k({},ra,{data:0}),Gf=yn(kg),_g={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ag={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Cg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Dg(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Cg[e])?!!n[e]:!1}function Il(){return Dg}var Tg=k({},Zt,{key:function(e){if(e.key){var n=_g[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=ns(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ag[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Il,charCode:function(e){return e.type==="keypress"?ns(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ns(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Eg=yn(Tg),Sg=k({},ts,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Of=yn(Sg),xg=k({},Zt,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Il}),Gg=yn(xg),Og=k({},ra,{propertyName:0,elapsedTime:0,pseudoElement:0}),Bg=yn(Og),Ng=k({},ts,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Rg=yn(Ng),Mg=k({},ra,{newState:0,oldState:0}),Pg=yn(Mg),Jg=[9,13,27,32],$l=oi&&"CompositionEvent"in window,Yt=null;oi&&"documentMode"in document&&(Yt=document.documentMode);var Hg=oi&&"TextEvent"in window&&!Yt,Bf=oi&&(!$l||Yt&&8<Yt&&11>=Yt),Nf=" ",Rf=!1;function Mf(e,n){switch(e){case"keyup":return Jg.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Pf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Za=!1;function Fg(e,n){switch(e){case"compositionend":return Pf(n);case"keypress":return n.which!==32?null:(Rf=!0,Nf);case"textInput":return e=n.data,e===Nf&&Rf?null:e;default:return null}}function Ug(e,n){if(Za)return e==="compositionend"||!$l&&Mf(e,n)?(e=Ef(),es=ql=Gi=null,Za=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Bf&&n.locale!=="ko"?null:n.data;default:return null}}var Kg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Jf(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Kg[e.type]:n==="textarea"}function Hf(e,n,i,a){Ka?La?La.push(a):La=[a]:Ka=a,n=Ys(n,"onChange"),0<n.length&&(i=new as("onChange","change",null,i,a),e.push({event:i,listeners:n}))}var qt=null,Xt=null;function Lg(e){vz(e,0)}function os(e){var n=Ut(e);if(jf(n))return e}function Ff(e,n){if(e==="change")return n}var Uf=!1;if(oi){var ec;if(oi){var nc="oninput"in document;if(!nc){var Kf=document.createElement("div");Kf.setAttribute("oninput","return;"),nc=typeof Kf.oninput=="function"}ec=nc}else ec=!1;Uf=ec&&(!document.documentMode||9<document.documentMode)}function Lf(){qt&&(qt.detachEvent("onpropertychange",Zf),Xt=qt=null)}function Zf(e){if(e.propertyName==="value"&&os(Xt)){var n=[];Hf(n,Xt,e,Zl(e)),Tf(Lg,n)}}function Zg(e,n,i){e==="focusin"?(Lf(),qt=n,Xt=i,qt.attachEvent("onpropertychange",Zf)):e==="focusout"&&Lf()}function Wg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return os(Xt)}function Yg(e,n){if(e==="click")return os(n)}function qg(e,n){if(e==="input"||e==="change")return os(n)}function Xg(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var kn=typeof Object.is=="function"?Object.is:Xg;function Vt(e,n){if(kn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var i=Object.keys(e),a=Object.keys(n);if(i.length!==a.length)return!1;for(a=0;a<i.length;a++){var l=i[a];if(!Nt.call(n,l)||!kn(e[l],n[l]))return!1}return!0}function Wf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Yf(e,n){var i=Wf(e);e=0;for(var a;i;){if(i.nodeType===3){if(a=e+i.textContent.length,e<=n&&a>=n)return{node:i,offset:n-e};e=a}e:{for(;i;){if(i.nextSibling){i=i.nextSibling;break e}i=i.parentNode}i=void 0}i=Wf(i)}}function qf(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?qf(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Xf(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Io(e.document);n instanceof e.HTMLIFrameElement;){try{var i=typeof n.contentWindow.location.href=="string"}catch{i=!1}if(i)e=n.contentWindow;else break;n=Io(e.document)}return n}function ic(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var Vg=oi&&"documentMode"in document&&11>=document.documentMode,Wa=null,ac=null,Qt=null,tc=!1;function Vf(e,n,i){var a=i.window===i?i.document:i.nodeType===9?i:i.ownerDocument;tc||Wa==null||Wa!==Io(a)||(a=Wa,"selectionStart"in a&&ic(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Qt&&Vt(Qt,a)||(Qt=a,a=Ys(ac,"onSelect"),0<a.length&&(n=new as("onSelect","select",null,n,i),e.push({event:n,listeners:a}),n.target=Wa)))}function ua(e,n){var i={};return i[e.toLowerCase()]=n.toLowerCase(),i["Webkit"+e]="webkit"+n,i["Moz"+e]="moz"+n,i}var Ya={animationend:ua("Animation","AnimationEnd"),animationiteration:ua("Animation","AnimationIteration"),animationstart:ua("Animation","AnimationStart"),transitionrun:ua("Transition","TransitionRun"),transitionstart:ua("Transition","TransitionStart"),transitioncancel:ua("Transition","TransitionCancel"),transitionend:ua("Transition","TransitionEnd")},oc={},Qf={};oi&&(Qf=document.createElement("div").style,"AnimationEvent"in window||(delete Ya.animationend.animation,delete Ya.animationiteration.animation,delete Ya.animationstart.animation),"TransitionEvent"in window||delete Ya.transitionend.transition);function fa(e){if(oc[e])return oc[e];if(!Ya[e])return e;var n=Ya[e],i;for(i in n)if(n.hasOwnProperty(i)&&i in Qf)return oc[e]=n[i];return e}var If=fa("animationend"),$f=fa("animationiteration"),ed=fa("animationstart"),Qg=fa("transitionrun"),Ig=fa("transitionstart"),$g=fa("transitioncancel"),nd=fa("transitionend"),id=new Map,sc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");sc.push("scrollEnd");function Ln(e,n){id.set(e,n),ca(n,[e])}var ss=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Bn=[],qa=0,lc=0;function ls(){for(var e=qa,n=lc=qa=0;n<e;){var i=Bn[n];Bn[n++]=null;var a=Bn[n];Bn[n++]=null;var l=Bn[n];Bn[n++]=null;var r=Bn[n];if(Bn[n++]=null,a!==null&&l!==null){var f=a.pending;f===null?l.next=l:(l.next=f.next,f.next=l),a.pending=l}r!==0&&ad(i,l,r)}}function cs(e,n,i,a){Bn[qa++]=e,Bn[qa++]=n,Bn[qa++]=i,Bn[qa++]=a,lc|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function cc(e,n,i,a){return cs(e,n,i,a),rs(e)}function da(e,n){return cs(e,null,null,n),rs(e)}function ad(e,n,i){e.lanes|=i;var a=e.alternate;a!==null&&(a.lanes|=i);for(var l=!1,r=e.return;r!==null;)r.childLanes|=i,a=r.alternate,a!==null&&(a.childLanes|=i),r.tag===22&&(e=r.stateNode,e===null||e._visibility&1||(l=!0)),e=r,r=r.return;return e.tag===3?(r=e.stateNode,l&&n!==null&&(l=31-vn(i),e=r.hiddenUpdates,a=e[l],a===null?e[l]=[n]:a.push(n),n.lane=i|536870912),r):null}function rs(e){if(50<bo)throw bo=0,hr=null,Error(c(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Xa={};function ep(e,n,i,a){this.tag=e,this.key=i,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function _n(e,n,i,a){return new ep(e,n,i,a)}function rc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function si(e,n){var i=e.alternate;return i===null?(i=_n(e.tag,n,e.key,e.mode),i.elementType=e.elementType,i.type=e.type,i.stateNode=e.stateNode,i.alternate=e,e.alternate=i):(i.pendingProps=n,i.type=e.type,i.flags=0,i.subtreeFlags=0,i.deletions=null),i.flags=e.flags&65011712,i.childLanes=e.childLanes,i.lanes=e.lanes,i.child=e.child,i.memoizedProps=e.memoizedProps,i.memoizedState=e.memoizedState,i.updateQueue=e.updateQueue,n=e.dependencies,i.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},i.sibling=e.sibling,i.index=e.index,i.ref=e.ref,i.refCleanup=e.refCleanup,i}function td(e,n){e.flags&=65011714;var i=e.alternate;return i===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=i.childLanes,e.lanes=i.lanes,e.child=i.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=i.memoizedProps,e.memoizedState=i.memoizedState,e.updateQueue=i.updateQueue,e.type=i.type,n=i.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function us(e,n,i,a,l,r){var f=0;if(a=e,typeof e=="function")rc(e)&&(f=1);else if(typeof e=="string")f=ob(e,i,F.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Qe:return e=_n(31,i,n,l),e.elementType=Qe,e.lanes=r,e;case U:return ma(i.children,l,r,n);case ee:f=8,l|=24;break;case q:return e=_n(12,i,n,l|2),e.elementType=q,e.lanes=r,e;case Y:return e=_n(13,i,n,l),e.elementType=Y,e.lanes=r,e;case re:return e=_n(19,i,n,l),e.elementType=re,e.lanes=r,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case I:f=10;break e;case W:f=9;break e;case ue:f=11;break e;case Q:f=14;break e;case xe:f=16,a=null;break e}f=29,i=Error(c(130,e===null?"null":typeof e,"")),a=null}return n=_n(f,i,n,l),n.elementType=e,n.type=a,n.lanes=r,n}function ma(e,n,i,a){return e=_n(7,e,a,n),e.lanes=i,e}function uc(e,n,i){return e=_n(6,e,null,n),e.lanes=i,e}function od(e){var n=_n(18,null,null,0);return n.stateNode=e,n}function fc(e,n,i){return n=_n(4,e.children!==null?e.children:[],e.key,n),n.lanes=i,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var sd=new WeakMap;function Nn(e,n){if(typeof e=="object"&&e!==null){var i=sd.get(e);return i!==void 0?i:(n={value:e,source:n,stack:Zo(n)},sd.set(e,n),n)}return{value:e,source:n,stack:Zo(n)}}var Va=[],Qa=0,fs=null,It=0,Rn=[],Mn=0,Oi=null,Vn=1,Qn="";function li(e,n){Va[Qa++]=It,Va[Qa++]=fs,fs=e,It=n}function ld(e,n,i){Rn[Mn++]=Vn,Rn[Mn++]=Qn,Rn[Mn++]=Oi,Oi=e;var a=Vn;e=Qn;var l=32-vn(a)-1;a&=~(1<<l),i+=1;var r=32-vn(n)+l;if(30<r){var f=l-l%5;r=(a&(1<<f)-1).toString(32),a>>=f,l-=f,Vn=1<<32-vn(n)+l|i<<l|a,Qn=r+e}else Vn=1<<r|i<<l|a,Qn=e}function dc(e){e.return!==null&&(li(e,1),ld(e,1,0))}function mc(e){for(;e===fs;)fs=Va[--Qa],Va[Qa]=null,It=Va[--Qa],Va[Qa]=null;for(;e===Oi;)Oi=Rn[--Mn],Rn[Mn]=null,Qn=Rn[--Mn],Rn[Mn]=null,Vn=Rn[--Mn],Rn[Mn]=null}function cd(e,n){Rn[Mn++]=Vn,Rn[Mn++]=Qn,Rn[Mn++]=Oi,Vn=n.id,Qn=n.overflow,Oi=e}var an=null,Ge=null,he=!1,Bi=null,Pn=!1,zc=Error(c(519));function Ni(e){var n=Error(c(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw $t(Nn(n,e)),zc}function rd(e){var n=e.stateNode,i=e.type,a=e.memoizedProps;switch(n[nn]=e,n[zn]=a,i){case"dialog":de("cancel",n),de("close",n);break;case"iframe":case"object":case"embed":de("load",n);break;case"video":case"audio":for(i=0;i<vo.length;i++)de(vo[i],n);break;case"source":de("error",n);break;case"img":case"image":case"link":de("error",n),de("load",n);break;case"details":de("toggle",n);break;case"input":de("invalid",n),vf(n,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":de("invalid",n);break;case"textarea":de("invalid",n),_f(n,a.value,a.defaultValue,a.children)}i=a.children,typeof i!="string"&&typeof i!="number"&&typeof i!="bigint"||n.textContent===""+i||a.suppressHydrationWarning===!0||Cz(n.textContent,i)?(a.popover!=null&&(de("beforetoggle",n),de("toggle",n)),a.onScroll!=null&&de("scroll",n),a.onScrollEnd!=null&&de("scrollend",n),a.onClick!=null&&(n.onclick=ti),n=!0):n=!1,n||Ni(e,!0)}function ud(e){for(an=e.return;an;)switch(an.tag){case 5:case 31:case 13:Pn=!1;return;case 27:case 3:Pn=!0;return;default:an=an.return}}function Ia(e){if(e!==an)return!1;if(!he)return ud(e),he=!0,!1;var n=e.tag,i;if((i=n!==3&&n!==27)&&((i=n===5)&&(i=e.type,i=!(i!=="form"&&i!=="button")||Gr(e.type,e.memoizedProps)),i=!i),i&&Ge&&Ni(e),ud(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));Ge=Nz(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));Ge=Nz(e)}else n===27?(n=Ge,Xi(e.type)?(e=Mr,Mr=null,Ge=e):Ge=n):Ge=an?Hn(e.stateNode.nextSibling):null;return!0}function za(){Ge=an=null,he=!1}function yc(){var e=Bi;return e!==null&&(pn===null?pn=e:pn.push.apply(pn,e),Bi=null),e}function $t(e){Bi===null?Bi=[e]:Bi.push(e)}var wc=p(null),ya=null,ci=null;function Ri(e,n,i){J(wc,n._currentValue),n._currentValue=i}function ri(e){e._currentValue=wc.current,x(wc)}function hc(e,n,i){for(;e!==null;){var a=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,a!==null&&(a.childLanes|=n)):a!==null&&(a.childLanes&n)!==n&&(a.childLanes|=n),e===i)break;e=e.return}}function gc(e,n,i,a){var l=e.child;for(l!==null&&(l.return=e);l!==null;){var r=l.dependencies;if(r!==null){var f=l.child;r=r.firstContext;e:for(;r!==null;){var m=r;r=l;for(var g=0;g<n.length;g++)if(m.context===n[g]){r.lanes|=i,m=r.alternate,m!==null&&(m.lanes|=i),hc(r.return,i,e),a||(f=null);break e}r=m.next}}else if(l.tag===18){if(f=l.return,f===null)throw Error(c(341));f.lanes|=i,r=f.alternate,r!==null&&(r.lanes|=i),hc(f,i,e),f=null}else f=l.child;if(f!==null)f.return=l;else for(f=l;f!==null;){if(f===e){f=null;break}if(l=f.sibling,l!==null){l.return=f.return,f=l;break}f=f.return}l=f}}function $a(e,n,i,a){e=null;for(var l=n,r=!1;l!==null;){if(!r){if((l.flags&524288)!==0)r=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var f=l.alternate;if(f===null)throw Error(c(387));if(f=f.memoizedProps,f!==null){var m=l.type;kn(l.pendingProps.value,f.value)||(e!==null?e.push(m):e=[m])}}else if(l===we.current){if(f=l.alternate,f===null)throw Error(c(387));f.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(e!==null?e.push(Do):e=[Do])}l=l.return}e!==null&&gc(n,e,i,a),n.flags|=262144}function ds(e){for(e=e.firstContext;e!==null;){if(!kn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function wa(e){ya=e,ci=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function tn(e){return fd(ya,e)}function ms(e,n){return ya===null&&wa(e),fd(e,n)}function fd(e,n){var i=n._currentValue;if(n={context:n,memoizedValue:i,next:null},ci===null){if(e===null)throw Error(c(308));ci=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else ci=ci.next=n;return i}var np=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(i,a){e.push(a)}};this.abort=function(){n.aborted=!0,e.forEach(function(i){return i()})}},ip=o.unstable_scheduleCallback,ap=o.unstable_NormalPriority,Le={$$typeof:I,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function pc(){return{controller:new np,data:new Map,refCount:0}}function eo(e){e.refCount--,e.refCount===0&&ip(ap,function(){e.controller.abort()})}var no=null,bc=0,et=0,nt=null;function tp(e,n){if(no===null){var i=no=[];bc=0,et=kr(),nt={status:"pending",value:void 0,then:function(a){i.push(a)}}}return bc++,n.then(dd,dd),n}function dd(){if(--bc===0&&no!==null){nt!==null&&(nt.status="fulfilled");var e=no;no=null,et=0,nt=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function op(e,n){var i=[],a={status:"pending",value:null,reason:null,then:function(l){i.push(l)}};return e.then(function(){a.status="fulfilled",a.value=n;for(var l=0;l<i.length;l++)(0,i[l])(n)},function(l){for(a.status="rejected",a.reason=l,l=0;l<i.length;l++)(0,i[l])(void 0)}),a}var md=T.S;T.S=function(e,n){Vm=rn(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&tp(e,n),md!==null&&md(e,n)};var ha=p(null);function jc(){var e=ha.current;return e!==null?e:Se.pooledCache}function zs(e,n){n===null?J(ha,ha.current):J(ha,n.pool)}function zd(){var e=jc();return e===null?null:{parent:Le._currentValue,pool:e}}var it=Error(c(460)),vc=Error(c(474)),ys=Error(c(542)),ws={then:function(){}};function yd(e){return e=e.status,e==="fulfilled"||e==="rejected"}function wd(e,n,i){switch(i=e[i],i===void 0?e.push(n):i!==n&&(n.then(ti,ti),n=i),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,gd(e),e;default:if(typeof n.status=="string")n.then(ti,ti);else{if(e=Se,e!==null&&100<e.shellSuspendCounter)throw Error(c(482));e=n,e.status="pending",e.then(function(a){if(n.status==="pending"){var l=n;l.status="fulfilled",l.value=a}},function(a){if(n.status==="pending"){var l=n;l.status="rejected",l.reason=a}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,gd(e),e}throw pa=n,it}}function ga(e){try{var n=e._init;return n(e._payload)}catch(i){throw i!==null&&typeof i=="object"&&typeof i.then=="function"?(pa=i,it):i}}var pa=null;function hd(){if(pa===null)throw Error(c(459));var e=pa;return pa=null,e}function gd(e){if(e===it||e===ys)throw Error(c(483))}var at=null,io=0;function hs(e){var n=io;return io+=1,at===null&&(at=[]),wd(at,e,n)}function ao(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function gs(e,n){throw n.$$typeof===G?Error(c(525)):(e=Object.prototype.toString.call(n),Error(c(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function pd(e){function n(j,b){if(e){var _=j.deletions;_===null?(j.deletions=[b],j.flags|=16):_.push(b)}}function i(j,b){if(!e)return null;for(;b!==null;)n(j,b),b=b.sibling;return null}function a(j){for(var b=new Map;j!==null;)j.key!==null?b.set(j.key,j):b.set(j.index,j),j=j.sibling;return b}function l(j,b){return j=si(j,b),j.index=0,j.sibling=null,j}function r(j,b,_){return j.index=_,e?(_=j.alternate,_!==null?(_=_.index,_<b?(j.flags|=67108866,b):_):(j.flags|=67108866,b)):(j.flags|=1048576,b)}function f(j){return e&&j.alternate===null&&(j.flags|=67108866),j}function m(j,b,_,S){return b===null||b.tag!==6?(b=uc(_,j.mode,S),b.return=j,b):(b=l(b,_),b.return=j,b)}function g(j,b,_,S){var X=_.type;return X===U?E(j,b,_.props.children,S,_.key):b!==null&&(b.elementType===X||typeof X=="object"&&X!==null&&X.$$typeof===xe&&ga(X)===b.type)?(b=l(b,_.props),ao(b,_),b.return=j,b):(b=us(_.type,_.key,_.props,null,j.mode,S),ao(b,_),b.return=j,b)}function A(j,b,_,S){return b===null||b.tag!==4||b.stateNode.containerInfo!==_.containerInfo||b.stateNode.implementation!==_.implementation?(b=fc(_,j.mode,S),b.return=j,b):(b=l(b,_.children||[]),b.return=j,b)}function E(j,b,_,S,X){return b===null||b.tag!==7?(b=ma(_,j.mode,S,X),b.return=j,b):(b=l(b,_),b.return=j,b)}function O(j,b,_){if(typeof b=="string"&&b!==""||typeof b=="number"||typeof b=="bigint")return b=uc(""+b,j.mode,_),b.return=j,b;if(typeof b=="object"&&b!==null){switch(b.$$typeof){case M:return _=us(b.type,b.key,b.props,null,j.mode,_),ao(_,b),_.return=j,_;case K:return b=fc(b,j.mode,_),b.return=j,b;case xe:return b=ga(b),O(j,b,_)}if(Je(b)||$(b))return b=ma(b,j.mode,_,null),b.return=j,b;if(typeof b.then=="function")return O(j,hs(b),_);if(b.$$typeof===I)return O(j,ms(j,b),_);gs(j,b)}return null}function C(j,b,_,S){var X=b!==null?b.key:null;if(typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint")return X!==null?null:m(j,b,""+_,S);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case M:return _.key===X?g(j,b,_,S):null;case K:return _.key===X?A(j,b,_,S):null;case xe:return _=ga(_),C(j,b,_,S)}if(Je(_)||$(_))return X!==null?null:E(j,b,_,S,null);if(typeof _.then=="function")return C(j,b,hs(_),S);if(_.$$typeof===I)return C(j,b,ms(j,_),S);gs(j,_)}return null}function D(j,b,_,S,X){if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return j=j.get(_)||null,m(b,j,""+S,X);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case M:return j=j.get(S.key===null?_:S.key)||null,g(b,j,S,X);case K:return j=j.get(S.key===null?_:S.key)||null,A(b,j,S,X);case xe:return S=ga(S),D(j,b,_,S,X)}if(Je(S)||$(S))return j=j.get(_)||null,E(b,j,S,X,null);if(typeof S.then=="function")return D(j,b,_,hs(S),X);if(S.$$typeof===I)return D(j,b,_,ms(b,S),X);gs(b,S)}return null}function L(j,b,_,S){for(var X=null,pe=null,Z=b,se=b=0,ye=null;Z!==null&&se<_.length;se++){Z.index>se?(ye=Z,Z=null):ye=Z.sibling;var be=C(j,Z,_[se],S);if(be===null){Z===null&&(Z=ye);break}e&&Z&&be.alternate===null&&n(j,Z),b=r(be,b,se),pe===null?X=be:pe.sibling=be,pe=be,Z=ye}if(se===_.length)return i(j,Z),he&&li(j,se),X;if(Z===null){for(;se<_.length;se++)Z=O(j,_[se],S),Z!==null&&(b=r(Z,b,se),pe===null?X=Z:pe.sibling=Z,pe=Z);return he&&li(j,se),X}for(Z=a(Z);se<_.length;se++)ye=D(Z,j,se,_[se],S),ye!==null&&(e&&ye.alternate!==null&&Z.delete(ye.key===null?se:ye.key),b=r(ye,b,se),pe===null?X=ye:pe.sibling=ye,pe=ye);return e&&Z.forEach(function(ea){return n(j,ea)}),he&&li(j,se),X}function ne(j,b,_,S){if(_==null)throw Error(c(151));for(var X=null,pe=null,Z=b,se=b=0,ye=null,be=_.next();Z!==null&&!be.done;se++,be=_.next()){Z.index>se?(ye=Z,Z=null):ye=Z.sibling;var ea=C(j,Z,be.value,S);if(ea===null){Z===null&&(Z=ye);break}e&&Z&&ea.alternate===null&&n(j,Z),b=r(ea,b,se),pe===null?X=ea:pe.sibling=ea,pe=ea,Z=ye}if(be.done)return i(j,Z),he&&li(j,se),X;if(Z===null){for(;!be.done;se++,be=_.next())be=O(j,be.value,S),be!==null&&(b=r(be,b,se),pe===null?X=be:pe.sibling=be,pe=be);return he&&li(j,se),X}for(Z=a(Z);!be.done;se++,be=_.next())be=D(Z,j,se,be.value,S),be!==null&&(e&&be.alternate!==null&&Z.delete(be.key===null?se:be.key),b=r(be,b,se),pe===null?X=be:pe.sibling=be,pe=be);return e&&Z.forEach(function(wb){return n(j,wb)}),he&&li(j,se),X}function Te(j,b,_,S){if(typeof _=="object"&&_!==null&&_.type===U&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case M:e:{for(var X=_.key;b!==null;){if(b.key===X){if(X=_.type,X===U){if(b.tag===7){i(j,b.sibling),S=l(b,_.props.children),S.return=j,j=S;break e}}else if(b.elementType===X||typeof X=="object"&&X!==null&&X.$$typeof===xe&&ga(X)===b.type){i(j,b.sibling),S=l(b,_.props),ao(S,_),S.return=j,j=S;break e}i(j,b);break}else n(j,b);b=b.sibling}_.type===U?(S=ma(_.props.children,j.mode,S,_.key),S.return=j,j=S):(S=us(_.type,_.key,_.props,null,j.mode,S),ao(S,_),S.return=j,j=S)}return f(j);case K:e:{for(X=_.key;b!==null;){if(b.key===X)if(b.tag===4&&b.stateNode.containerInfo===_.containerInfo&&b.stateNode.implementation===_.implementation){i(j,b.sibling),S=l(b,_.children||[]),S.return=j,j=S;break e}else{i(j,b);break}else n(j,b);b=b.sibling}S=fc(_,j.mode,S),S.return=j,j=S}return f(j);case xe:return _=ga(_),Te(j,b,_,S)}if(Je(_))return L(j,b,_,S);if($(_)){if(X=$(_),typeof X!="function")throw Error(c(150));return _=X.call(_),ne(j,b,_,S)}if(typeof _.then=="function")return Te(j,b,hs(_),S);if(_.$$typeof===I)return Te(j,b,ms(j,_),S);gs(j,_)}return typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint"?(_=""+_,b!==null&&b.tag===6?(i(j,b.sibling),S=l(b,_),S.return=j,j=S):(i(j,b),S=uc(_,j.mode,S),S.return=j,j=S),f(j)):i(j,b)}return function(j,b,_,S){try{io=0;var X=Te(j,b,_,S);return at=null,X}catch(Z){if(Z===it||Z===ys)throw Z;var pe=_n(29,Z,null,j.mode);return pe.lanes=S,pe.return=j,pe}}}var ba=pd(!0),bd=pd(!1),Mi=!1;function kc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function _c(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Pi(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ji(e,n,i){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(ve&2)!==0){var l=a.pending;return l===null?n.next=n:(n.next=l.next,l.next=n),a.pending=n,n=rs(e),ad(e,null,i),n}return cs(e,a,n,i),rs(e)}function to(e,n,i){if(n=n.updateQueue,n!==null&&(n=n.shared,(i&4194048)!==0)){var a=n.lanes;a&=e.pendingLanes,i|=a,n.lanes=i,ff(e,i)}}function Ac(e,n){var i=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,i===a)){var l=null,r=null;if(i=i.firstBaseUpdate,i!==null){do{var f={lane:i.lane,tag:i.tag,payload:i.payload,callback:null,next:null};r===null?l=r=f:r=r.next=f,i=i.next}while(i!==null);r===null?l=r=n:r=r.next=n}else l=r=n;i={baseState:a.baseState,firstBaseUpdate:l,lastBaseUpdate:r,shared:a.shared,callbacks:a.callbacks},e.updateQueue=i;return}e=i.lastBaseUpdate,e===null?i.firstBaseUpdate=n:e.next=n,i.lastBaseUpdate=n}var Cc=!1;function oo(){if(Cc){var e=nt;if(e!==null)throw e}}function so(e,n,i,a){Cc=!1;var l=e.updateQueue;Mi=!1;var r=l.firstBaseUpdate,f=l.lastBaseUpdate,m=l.shared.pending;if(m!==null){l.shared.pending=null;var g=m,A=g.next;g.next=null,f===null?r=A:f.next=A,f=g;var E=e.alternate;E!==null&&(E=E.updateQueue,m=E.lastBaseUpdate,m!==f&&(m===null?E.firstBaseUpdate=A:m.next=A,E.lastBaseUpdate=g))}if(r!==null){var O=l.baseState;f=0,E=A=g=null,m=r;do{var C=m.lane&-536870913,D=C!==m.lane;if(D?(ze&C)===C:(a&C)===C){C!==0&&C===et&&(Cc=!0),E!==null&&(E=E.next={lane:0,tag:m.tag,payload:m.payload,callback:null,next:null});e:{var L=e,ne=m;C=n;var Te=i;switch(ne.tag){case 1:if(L=ne.payload,typeof L=="function"){O=L.call(Te,O,C);break e}O=L;break e;case 3:L.flags=L.flags&-65537|128;case 0:if(L=ne.payload,C=typeof L=="function"?L.call(Te,O,C):L,C==null)break e;O=k({},O,C);break e;case 2:Mi=!0}}C=m.callback,C!==null&&(e.flags|=64,D&&(e.flags|=8192),D=l.callbacks,D===null?l.callbacks=[C]:D.push(C))}else D={lane:C,tag:m.tag,payload:m.payload,callback:m.callback,next:null},E===null?(A=E=D,g=O):E=E.next=D,f|=C;if(m=m.next,m===null){if(m=l.shared.pending,m===null)break;D=m,m=D.next,D.next=null,l.lastBaseUpdate=D,l.shared.pending=null}}while(!0);E===null&&(g=O),l.baseState=g,l.firstBaseUpdate=A,l.lastBaseUpdate=E,r===null&&(l.shared.lanes=0),Li|=f,e.lanes=f,e.memoizedState=O}}function jd(e,n){if(typeof e!="function")throw Error(c(191,e));e.call(n)}function vd(e,n){var i=e.callbacks;if(i!==null)for(e.callbacks=null,e=0;e<i.length;e++)jd(i[e],n)}var tt=p(null),ps=p(0);function kd(e,n){e=gi,J(ps,e),J(tt,n),gi=e|n.baseLanes}function Dc(){J(ps,gi),J(tt,tt.current)}function Tc(){gi=ps.current,x(tt),x(ps)}var An=p(null),Jn=null;function Hi(e){var n=e.alternate;J(Ue,Ue.current&1),J(An,e),Jn===null&&(n===null||tt.current!==null||n.memoizedState!==null)&&(Jn=e)}function Ec(e){J(Ue,Ue.current),J(An,e),Jn===null&&(Jn=e)}function _d(e){e.tag===22?(J(Ue,Ue.current),J(An,e),Jn===null&&(Jn=e)):Fi()}function Fi(){J(Ue,Ue.current),J(An,An.current)}function Cn(e){x(An),Jn===e&&(Jn=null),x(Ue)}var Ue=p(0);function bs(e){for(var n=e;n!==null;){if(n.tag===13){var i=n.memoizedState;if(i!==null&&(i=i.dehydrated,i===null||Nr(i)||Rr(i)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ui=0,te=null,Ce=null,Ze=null,js=!1,ot=!1,ja=!1,vs=0,lo=0,st=null,sp=0;function He(){throw Error(c(321))}function Sc(e,n){if(n===null)return!1;for(var i=0;i<n.length&&i<e.length;i++)if(!kn(e[i],n[i]))return!1;return!0}function xc(e,n,i,a,l,r){return ui=r,te=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,T.H=e===null||e.memoizedState===null?lm:Wc,ja=!1,r=i(a,l),ja=!1,ot&&(r=Cd(n,i,a,l)),Ad(e),r}function Ad(e){T.H=uo;var n=Ce!==null&&Ce.next!==null;if(ui=0,Ze=Ce=te=null,js=!1,lo=0,st=null,n)throw Error(c(300));e===null||We||(e=e.dependencies,e!==null&&ds(e)&&(We=!0))}function Cd(e,n,i,a){te=e;var l=0;do{if(ot&&(st=null),lo=0,ot=!1,25<=l)throw Error(c(301));if(l+=1,Ze=Ce=null,e.updateQueue!=null){var r=e.updateQueue;r.lastEffect=null,r.events=null,r.stores=null,r.memoCache!=null&&(r.memoCache.index=0)}T.H=cm,r=n(i,a)}while(ot);return r}function lp(){var e=T.H,n=e.useState()[0];return n=typeof n.then=="function"?co(n):n,e=e.useState()[0],(Ce!==null?Ce.memoizedState:null)!==e&&(te.flags|=1024),n}function Gc(){var e=vs!==0;return vs=0,e}function Oc(e,n,i){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i}function Bc(e){if(js){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}js=!1}ui=0,Ze=Ce=te=null,ot=!1,lo=vs=0,st=null}function fn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ze===null?te.memoizedState=Ze=e:Ze=Ze.next=e,Ze}function Ke(){if(Ce===null){var e=te.alternate;e=e!==null?e.memoizedState:null}else e=Ce.next;var n=Ze===null?te.memoizedState:Ze.next;if(n!==null)Ze=n,Ce=e;else{if(e===null)throw te.alternate===null?Error(c(467)):Error(c(310));Ce=e,e={memoizedState:Ce.memoizedState,baseState:Ce.baseState,baseQueue:Ce.baseQueue,queue:Ce.queue,next:null},Ze===null?te.memoizedState=Ze=e:Ze=Ze.next=e}return Ze}function ks(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function co(e){var n=lo;return lo+=1,st===null&&(st=[]),e=wd(st,e,n),n=te,(Ze===null?n.memoizedState:Ze.next)===null&&(n=n.alternate,T.H=n===null||n.memoizedState===null?lm:Wc),e}function _s(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return co(e);if(e.$$typeof===I)return tn(e)}throw Error(c(438,String(e)))}function Nc(e){var n=null,i=te.updateQueue;if(i!==null&&(n=i.memoCache),n==null){var a=te.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(n={data:a.data.map(function(l){return l.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),i===null&&(i=ks(),te.updateQueue=i),i.memoCache=n,i=n.data[n.index],i===void 0)for(i=n.data[n.index]=Array(e),a=0;a<e;a++)i[a]=dn;return n.index++,i}function fi(e,n){return typeof n=="function"?n(e):n}function As(e){var n=Ke();return Rc(n,Ce,e)}function Rc(e,n,i){var a=e.queue;if(a===null)throw Error(c(311));a.lastRenderedReducer=i;var l=e.baseQueue,r=a.pending;if(r!==null){if(l!==null){var f=l.next;l.next=r.next,r.next=f}n.baseQueue=l=r,a.pending=null}if(r=e.baseState,l===null)e.memoizedState=r;else{n=l.next;var m=f=null,g=null,A=n,E=!1;do{var O=A.lane&-536870913;if(O!==A.lane?(ze&O)===O:(ui&O)===O){var C=A.revertLane;if(C===0)g!==null&&(g=g.next={lane:0,revertLane:0,gesture:null,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null}),O===et&&(E=!0);else if((ui&C)===C){A=A.next,C===et&&(E=!0);continue}else O={lane:0,revertLane:A.revertLane,gesture:null,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null},g===null?(m=g=O,f=r):g=g.next=O,te.lanes|=C,Li|=C;O=A.action,ja&&i(r,O),r=A.hasEagerState?A.eagerState:i(r,O)}else C={lane:O,revertLane:A.revertLane,gesture:A.gesture,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null},g===null?(m=g=C,f=r):g=g.next=C,te.lanes|=O,Li|=O;A=A.next}while(A!==null&&A!==n);if(g===null?f=r:g.next=m,!kn(r,e.memoizedState)&&(We=!0,E&&(i=nt,i!==null)))throw i;e.memoizedState=r,e.baseState=f,e.baseQueue=g,a.lastRenderedState=r}return l===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function Mc(e){var n=Ke(),i=n.queue;if(i===null)throw Error(c(311));i.lastRenderedReducer=e;var a=i.dispatch,l=i.pending,r=n.memoizedState;if(l!==null){i.pending=null;var f=l=l.next;do r=e(r,f.action),f=f.next;while(f!==l);kn(r,n.memoizedState)||(We=!0),n.memoizedState=r,n.baseQueue===null&&(n.baseState=r),i.lastRenderedState=r}return[r,a]}function Dd(e,n,i){var a=te,l=Ke(),r=he;if(r){if(i===void 0)throw Error(c(407));i=i()}else i=n();var f=!kn((Ce||l).memoizedState,i);if(f&&(l.memoizedState=i,We=!0),l=l.queue,Hc(Sd.bind(null,a,l,e),[e]),l.getSnapshot!==n||f||Ze!==null&&Ze.memoizedState.tag&1){if(a.flags|=2048,lt(9,{destroy:void 0},Ed.bind(null,a,l,i,n),null),Se===null)throw Error(c(349));r||(ui&127)!==0||Td(a,n,i)}return i}function Td(e,n,i){e.flags|=16384,e={getSnapshot:n,value:i},n=te.updateQueue,n===null?(n=ks(),te.updateQueue=n,n.stores=[e]):(i=n.stores,i===null?n.stores=[e]:i.push(e))}function Ed(e,n,i,a){n.value=i,n.getSnapshot=a,xd(n)&&Gd(e)}function Sd(e,n,i){return i(function(){xd(n)&&Gd(e)})}function xd(e){var n=e.getSnapshot;e=e.value;try{var i=n();return!kn(e,i)}catch{return!0}}function Gd(e){var n=da(e,2);n!==null&&bn(n,e,2)}function Pc(e){var n=fn();if(typeof e=="function"){var i=e;if(e=i(),ja){Si(!0);try{i()}finally{Si(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:fi,lastRenderedState:e},n}function Od(e,n,i,a){return e.baseState=i,Rc(e,Ce,typeof a=="function"?a:fi)}function cp(e,n,i,a,l){if(Ts(e))throw Error(c(485));if(e=n.action,e!==null){var r={payload:l,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(f){r.listeners.push(f)}};T.T!==null?i(!0):r.isTransition=!1,a(r),i=n.pending,i===null?(r.next=n.pending=r,Bd(n,r)):(r.next=i.next,n.pending=i.next=r)}}function Bd(e,n){var i=n.action,a=n.payload,l=e.state;if(n.isTransition){var r=T.T,f={};T.T=f;try{var m=i(l,a),g=T.S;g!==null&&g(f,m),Nd(e,n,m)}catch(A){Jc(e,n,A)}finally{r!==null&&f.types!==null&&(r.types=f.types),T.T=r}}else try{r=i(l,a),Nd(e,n,r)}catch(A){Jc(e,n,A)}}function Nd(e,n,i){i!==null&&typeof i=="object"&&typeof i.then=="function"?i.then(function(a){Rd(e,n,a)},function(a){return Jc(e,n,a)}):Rd(e,n,i)}function Rd(e,n,i){n.status="fulfilled",n.value=i,Md(n),e.state=i,n=e.pending,n!==null&&(i=n.next,i===n?e.pending=null:(i=i.next,n.next=i,Bd(e,i)))}function Jc(e,n,i){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do n.status="rejected",n.reason=i,Md(n),n=n.next;while(n!==a)}e.action=null}function Md(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Pd(e,n){return n}function Jd(e,n){if(he){var i=Se.formState;if(i!==null){e:{var a=te;if(he){if(Ge){n:{for(var l=Ge,r=Pn;l.nodeType!==8;){if(!r){l=null;break n}if(l=Hn(l.nextSibling),l===null){l=null;break n}}r=l.data,l=r==="F!"||r==="F"?l:null}if(l){Ge=Hn(l.nextSibling),a=l.data==="F!";break e}}Ni(a)}a=!1}a&&(n=i[0])}}return i=fn(),i.memoizedState=i.baseState=n,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pd,lastRenderedState:n},i.queue=a,i=tm.bind(null,te,a),a.dispatch=i,a=Pc(!1),r=Zc.bind(null,te,!1,a.queue),a=fn(),l={state:n,dispatch:null,action:e,pending:null},a.queue=l,i=cp.bind(null,te,l,r,i),l.dispatch=i,a.memoizedState=e,[n,i,!1]}function Hd(e){var n=Ke();return Fd(n,Ce,e)}function Fd(e,n,i){if(n=Rc(e,n,Pd)[0],e=As(fi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var a=co(n)}catch(f){throw f===it?ys:f}else a=n;n=Ke();var l=n.queue,r=l.dispatch;return i!==n.memoizedState&&(te.flags|=2048,lt(9,{destroy:void 0},rp.bind(null,l,i),null)),[a,r,e]}function rp(e,n){e.action=n}function Ud(e){var n=Ke(),i=Ce;if(i!==null)return Fd(n,i,e);Ke(),n=n.memoizedState,i=Ke();var a=i.queue.dispatch;return i.memoizedState=e,[n,a,!1]}function lt(e,n,i,a){return e={tag:e,create:i,deps:a,inst:n,next:null},n=te.updateQueue,n===null&&(n=ks(),te.updateQueue=n),i=n.lastEffect,i===null?n.lastEffect=e.next=e:(a=i.next,i.next=e,e.next=a,n.lastEffect=e),e}function Kd(){return Ke().memoizedState}function Cs(e,n,i,a){var l=fn();te.flags|=e,l.memoizedState=lt(1|n,{destroy:void 0},i,a===void 0?null:a)}function Ds(e,n,i,a){var l=Ke();a=a===void 0?null:a;var r=l.memoizedState.inst;Ce!==null&&a!==null&&Sc(a,Ce.memoizedState.deps)?l.memoizedState=lt(n,r,i,a):(te.flags|=e,l.memoizedState=lt(1|n,r,i,a))}function Ld(e,n){Cs(8390656,8,e,n)}function Hc(e,n){Ds(2048,8,e,n)}function up(e){te.flags|=4;var n=te.updateQueue;if(n===null)n=ks(),te.updateQueue=n,n.events=[e];else{var i=n.events;i===null?n.events=[e]:i.push(e)}}function Zd(e){var n=Ke().memoizedState;return up({ref:n,nextImpl:e}),function(){if((ve&2)!==0)throw Error(c(440));return n.impl.apply(void 0,arguments)}}function Wd(e,n){return Ds(4,2,e,n)}function Yd(e,n){return Ds(4,4,e,n)}function qd(e,n){if(typeof n=="function"){e=e();var i=n(e);return function(){typeof i=="function"?i():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Xd(e,n,i){i=i!=null?i.concat([e]):null,Ds(4,4,qd.bind(null,n,e),i)}function Fc(){}function Vd(e,n){var i=Ke();n=n===void 0?null:n;var a=i.memoizedState;return n!==null&&Sc(n,a[1])?a[0]:(i.memoizedState=[e,n],e)}function Qd(e,n){var i=Ke();n=n===void 0?null:n;var a=i.memoizedState;if(n!==null&&Sc(n,a[1]))return a[0];if(a=e(),ja){Si(!0);try{e()}finally{Si(!1)}}return i.memoizedState=[a,n],a}function Uc(e,n,i){return i===void 0||(ui&1073741824)!==0&&(ze&261930)===0?e.memoizedState=n:(e.memoizedState=i,e=Im(),te.lanes|=e,Li|=e,i)}function Id(e,n,i,a){return kn(i,n)?i:tt.current!==null?(e=Uc(e,i,a),kn(e,n)||(We=!0),e):(ui&42)===0||(ui&1073741824)!==0&&(ze&261930)===0?(We=!0,e.memoizedState=i):(e=Im(),te.lanes|=e,Li|=e,n)}function $d(e,n,i,a,l){var r=P.p;P.p=r!==0&&8>r?r:8;var f=T.T,m={};T.T=m,Zc(e,!1,n,i);try{var g=l(),A=T.S;if(A!==null&&A(m,g),g!==null&&typeof g=="object"&&typeof g.then=="function"){var E=op(g,a);ro(e,n,E,En(e))}else ro(e,n,a,En(e))}catch(O){ro(e,n,{then:function(){},status:"rejected",reason:O},En())}finally{P.p=r,f!==null&&m.types!==null&&(f.types=m.types),T.T=f}}function fp(){}function Kc(e,n,i,a){if(e.tag!==5)throw Error(c(476));var l=em(e).queue;$d(e,l,n,H,i===null?fp:function(){return nm(e),i(a)})}function em(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:H,baseState:H,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:fi,lastRenderedState:H},next:null};var i={};return n.next={memoizedState:i,baseState:i,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:fi,lastRenderedState:i},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function nm(e){var n=em(e);n.next===null&&(n=e.alternate.memoizedState),ro(e,n.next.queue,{},En())}function Lc(){return tn(Do)}function im(){return Ke().memoizedState}function am(){return Ke().memoizedState}function dp(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var i=En();e=Pi(i);var a=Ji(n,e,i);a!==null&&(bn(a,n,i),to(a,n,i)),n={cache:pc()},e.payload=n;return}n=n.return}}function mp(e,n,i){var a=En();i={lane:a,revertLane:0,gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},Ts(e)?om(n,i):(i=cc(e,n,i,a),i!==null&&(bn(i,e,a),sm(i,n,a)))}function tm(e,n,i){var a=En();ro(e,n,i,a)}function ro(e,n,i,a){var l={lane:a,revertLane:0,gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null};if(Ts(e))om(n,l);else{var r=e.alternate;if(e.lanes===0&&(r===null||r.lanes===0)&&(r=n.lastRenderedReducer,r!==null))try{var f=n.lastRenderedState,m=r(f,i);if(l.hasEagerState=!0,l.eagerState=m,kn(m,f))return cs(e,n,l,0),Se===null&&ls(),!1}catch{}if(i=cc(e,n,l,a),i!==null)return bn(i,e,a),sm(i,n,a),!0}return!1}function Zc(e,n,i,a){if(a={lane:2,revertLane:kr(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Ts(e)){if(n)throw Error(c(479))}else n=cc(e,i,a,2),n!==null&&bn(n,e,2)}function Ts(e){var n=e.alternate;return e===te||n!==null&&n===te}function om(e,n){ot=js=!0;var i=e.pending;i===null?n.next=n:(n.next=i.next,i.next=n),e.pending=n}function sm(e,n,i){if((i&4194048)!==0){var a=n.lanes;a&=e.pendingLanes,i|=a,n.lanes=i,ff(e,i)}}var uo={readContext:tn,use:_s,useCallback:He,useContext:He,useEffect:He,useImperativeHandle:He,useLayoutEffect:He,useInsertionEffect:He,useMemo:He,useReducer:He,useRef:He,useState:He,useDebugValue:He,useDeferredValue:He,useTransition:He,useSyncExternalStore:He,useId:He,useHostTransitionStatus:He,useFormState:He,useActionState:He,useOptimistic:He,useMemoCache:He,useCacheRefresh:He};uo.useEffectEvent=He;var lm={readContext:tn,use:_s,useCallback:function(e,n){return fn().memoizedState=[e,n===void 0?null:n],e},useContext:tn,useEffect:Ld,useImperativeHandle:function(e,n,i){i=i!=null?i.concat([e]):null,Cs(4194308,4,qd.bind(null,n,e),i)},useLayoutEffect:function(e,n){return Cs(4194308,4,e,n)},useInsertionEffect:function(e,n){Cs(4,2,e,n)},useMemo:function(e,n){var i=fn();n=n===void 0?null:n;var a=e();if(ja){Si(!0);try{e()}finally{Si(!1)}}return i.memoizedState=[a,n],a},useReducer:function(e,n,i){var a=fn();if(i!==void 0){var l=i(n);if(ja){Si(!0);try{i(n)}finally{Si(!1)}}}else l=n;return a.memoizedState=a.baseState=l,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},a.queue=e,e=e.dispatch=mp.bind(null,te,e),[a.memoizedState,e]},useRef:function(e){var n=fn();return e={current:e},n.memoizedState=e},useState:function(e){e=Pc(e);var n=e.queue,i=tm.bind(null,te,n);return n.dispatch=i,[e.memoizedState,i]},useDebugValue:Fc,useDeferredValue:function(e,n){var i=fn();return Uc(i,e,n)},useTransition:function(){var e=Pc(!1);return e=$d.bind(null,te,e.queue,!0,!1),fn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,i){var a=te,l=fn();if(he){if(i===void 0)throw Error(c(407));i=i()}else{if(i=n(),Se===null)throw Error(c(349));(ze&127)!==0||Td(a,n,i)}l.memoizedState=i;var r={value:i,getSnapshot:n};return l.queue=r,Ld(Sd.bind(null,a,r,e),[e]),a.flags|=2048,lt(9,{destroy:void 0},Ed.bind(null,a,r,i,n),null),i},useId:function(){var e=fn(),n=Se.identifierPrefix;if(he){var i=Qn,a=Vn;i=(a&~(1<<32-vn(a)-1)).toString(32)+i,n="_"+n+"R_"+i,i=vs++,0<i&&(n+="H"+i.toString(32)),n+="_"}else i=sp++,n="_"+n+"r_"+i.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:Lc,useFormState:Jd,useActionState:Jd,useOptimistic:function(e){var n=fn();n.memoizedState=n.baseState=e;var i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=i,n=Zc.bind(null,te,!0,i),i.dispatch=n,[e,n]},useMemoCache:Nc,useCacheRefresh:function(){return fn().memoizedState=dp.bind(null,te)},useEffectEvent:function(e){var n=fn(),i={impl:e};return n.memoizedState=i,function(){if((ve&2)!==0)throw Error(c(440));return i.impl.apply(void 0,arguments)}}},Wc={readContext:tn,use:_s,useCallback:Vd,useContext:tn,useEffect:Hc,useImperativeHandle:Xd,useInsertionEffect:Wd,useLayoutEffect:Yd,useMemo:Qd,useReducer:As,useRef:Kd,useState:function(){return As(fi)},useDebugValue:Fc,useDeferredValue:function(e,n){var i=Ke();return Id(i,Ce.memoizedState,e,n)},useTransition:function(){var e=As(fi)[0],n=Ke().memoizedState;return[typeof e=="boolean"?e:co(e),n]},useSyncExternalStore:Dd,useId:im,useHostTransitionStatus:Lc,useFormState:Hd,useActionState:Hd,useOptimistic:function(e,n){var i=Ke();return Od(i,Ce,e,n)},useMemoCache:Nc,useCacheRefresh:am};Wc.useEffectEvent=Zd;var cm={readContext:tn,use:_s,useCallback:Vd,useContext:tn,useEffect:Hc,useImperativeHandle:Xd,useInsertionEffect:Wd,useLayoutEffect:Yd,useMemo:Qd,useReducer:Mc,useRef:Kd,useState:function(){return Mc(fi)},useDebugValue:Fc,useDeferredValue:function(e,n){var i=Ke();return Ce===null?Uc(i,e,n):Id(i,Ce.memoizedState,e,n)},useTransition:function(){var e=Mc(fi)[0],n=Ke().memoizedState;return[typeof e=="boolean"?e:co(e),n]},useSyncExternalStore:Dd,useId:im,useHostTransitionStatus:Lc,useFormState:Ud,useActionState:Ud,useOptimistic:function(e,n){var i=Ke();return Ce!==null?Od(i,Ce,e,n):(i.baseState=e,[e,i.queue.dispatch])},useMemoCache:Nc,useCacheRefresh:am};cm.useEffectEvent=Zd;function Yc(e,n,i,a){n=e.memoizedState,i=i(a,n),i=i==null?n:k({},n,i),e.memoizedState=i,e.lanes===0&&(e.updateQueue.baseState=i)}var qc={enqueueSetState:function(e,n,i){e=e._reactInternals;var a=En(),l=Pi(a);l.payload=n,i!=null&&(l.callback=i),n=Ji(e,l,a),n!==null&&(bn(n,e,a),to(n,e,a))},enqueueReplaceState:function(e,n,i){e=e._reactInternals;var a=En(),l=Pi(a);l.tag=1,l.payload=n,i!=null&&(l.callback=i),n=Ji(e,l,a),n!==null&&(bn(n,e,a),to(n,e,a))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var i=En(),a=Pi(i);a.tag=2,n!=null&&(a.callback=n),n=Ji(e,a,i),n!==null&&(bn(n,e,i),to(n,e,i))}};function rm(e,n,i,a,l,r,f){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,r,f):n.prototype&&n.prototype.isPureReactComponent?!Vt(i,a)||!Vt(l,r):!0}function um(e,n,i,a){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(i,a),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(i,a),n.state!==e&&qc.enqueueReplaceState(n,n.state,null)}function va(e,n){var i=n;if("ref"in n){i={};for(var a in n)a!=="ref"&&(i[a]=n[a])}if(e=e.defaultProps){i===n&&(i=k({},i));for(var l in e)i[l]===void 0&&(i[l]=e[l])}return i}function fm(e){ss(e)}function dm(e){console.error(e)}function mm(e){ss(e)}function Es(e,n){try{var i=e.onUncaughtError;i(n.value,{componentStack:n.stack})}catch(a){setTimeout(function(){throw a})}}function zm(e,n,i){try{var a=e.onCaughtError;a(i.value,{componentStack:i.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function Xc(e,n,i){return i=Pi(i),i.tag=3,i.payload={element:null},i.callback=function(){Es(e,n)},i}function ym(e){return e=Pi(e),e.tag=3,e}function wm(e,n,i,a){var l=i.type.getDerivedStateFromError;if(typeof l=="function"){var r=a.value;e.payload=function(){return l(r)},e.callback=function(){zm(n,i,a)}}var f=i.stateNode;f!==null&&typeof f.componentDidCatch=="function"&&(e.callback=function(){zm(n,i,a),typeof l!="function"&&(Zi===null?Zi=new Set([this]):Zi.add(this));var m=a.stack;this.componentDidCatch(a.value,{componentStack:m!==null?m:""})})}function zp(e,n,i,a,l){if(i.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(n=i.alternate,n!==null&&$a(n,i,l,!0),i=An.current,i!==null){switch(i.tag){case 31:case 13:return Jn===null?Fs():i.alternate===null&&Fe===0&&(Fe=3),i.flags&=-257,i.flags|=65536,i.lanes=l,a===ws?i.flags|=16384:(n=i.updateQueue,n===null?i.updateQueue=new Set([a]):n.add(a),br(e,a,l)),!1;case 22:return i.flags|=65536,a===ws?i.flags|=16384:(n=i.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([a])},i.updateQueue=n):(i=n.retryQueue,i===null?n.retryQueue=new Set([a]):i.add(a)),br(e,a,l)),!1}throw Error(c(435,i.tag))}return br(e,a,l),Fs(),!1}if(he)return n=An.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=l,a!==zc&&(e=Error(c(422),{cause:a}),$t(Nn(e,i)))):(a!==zc&&(n=Error(c(423),{cause:a}),$t(Nn(n,i))),e=e.current.alternate,e.flags|=65536,l&=-l,e.lanes|=l,a=Nn(a,i),l=Xc(e.stateNode,a,l),Ac(e,l),Fe!==4&&(Fe=2)),!1;var r=Error(c(520),{cause:a});if(r=Nn(r,i),po===null?po=[r]:po.push(r),Fe!==4&&(Fe=2),n===null)return!0;a=Nn(a,i),i=n;do{switch(i.tag){case 3:return i.flags|=65536,e=l&-l,i.lanes|=e,e=Xc(i.stateNode,a,e),Ac(i,e),!1;case 1:if(n=i.type,r=i.stateNode,(i.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&(Zi===null||!Zi.has(r))))return i.flags|=65536,l&=-l,i.lanes|=l,l=ym(l),wm(l,e,i,a),Ac(i,l),!1}i=i.return}while(i!==null);return!1}var Vc=Error(c(461)),We=!1;function on(e,n,i,a){n.child=e===null?bd(n,null,i,a):ba(n,e.child,i,a)}function hm(e,n,i,a,l){i=i.render;var r=n.ref;if("ref"in a){var f={};for(var m in a)m!=="ref"&&(f[m]=a[m])}else f=a;return wa(n),a=xc(e,n,i,f,r,l),m=Gc(),e!==null&&!We?(Oc(e,n,l),di(e,n,l)):(he&&m&&dc(n),n.flags|=1,on(e,n,a,l),n.child)}function gm(e,n,i,a,l){if(e===null){var r=i.type;return typeof r=="function"&&!rc(r)&&r.defaultProps===void 0&&i.compare===null?(n.tag=15,n.type=r,pm(e,n,r,a,l)):(e=us(i.type,null,a,n,n.mode,l),e.ref=n.ref,e.return=n,n.child=e)}if(r=e.child,!tr(e,l)){var f=r.memoizedProps;if(i=i.compare,i=i!==null?i:Vt,i(f,a)&&e.ref===n.ref)return di(e,n,l)}return n.flags|=1,e=si(r,a),e.ref=n.ref,e.return=n,n.child=e}function pm(e,n,i,a,l){if(e!==null){var r=e.memoizedProps;if(Vt(r,a)&&e.ref===n.ref)if(We=!1,n.pendingProps=a=r,tr(e,l))(e.flags&131072)!==0&&(We=!0);else return n.lanes=e.lanes,di(e,n,l)}return Qc(e,n,i,a,l)}function bm(e,n,i,a){var l=a.children,r=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((n.flags&128)!==0){if(r=r!==null?r.baseLanes|i:i,e!==null){for(a=n.child=e.child,l=0;a!==null;)l=l|a.lanes|a.childLanes,a=a.sibling;a=l&~r}else a=0,n.child=null;return jm(e,n,r,i,a)}if((i&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&zs(n,r!==null?r.cachePool:null),r!==null?kd(n,r):Dc(),_d(n);else return a=n.lanes=536870912,jm(e,n,r!==null?r.baseLanes|i:i,i,a)}else r!==null?(zs(n,r.cachePool),kd(n,r),Fi(),n.memoizedState=null):(e!==null&&zs(n,null),Dc(),Fi());return on(e,n,l,i),n.child}function fo(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function jm(e,n,i,a,l){var r=jc();return r=r===null?null:{parent:Le._currentValue,pool:r},n.memoizedState={baseLanes:i,cachePool:r},e!==null&&zs(n,null),Dc(),_d(n),e!==null&&$a(e,n,a,!0),n.childLanes=l,null}function Ss(e,n){return n=Gs({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function vm(e,n,i){return ba(n,e.child,null,i),e=Ss(n,n.pendingProps),e.flags|=2,Cn(n),n.memoizedState=null,e}function yp(e,n,i){var a=n.pendingProps,l=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(he){if(a.mode==="hidden")return e=Ss(n,a),n.lanes=536870912,fo(null,e);if(Ec(n),(e=Ge)?(e=Bz(e,Pn),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Oi!==null?{id:Vn,overflow:Qn}:null,retryLane:536870912,hydrationErrors:null},i=od(e),i.return=n,n.child=i,an=n,Ge=null)):e=null,e===null)throw Ni(n);return n.lanes=536870912,null}return Ss(n,a)}var r=e.memoizedState;if(r!==null){var f=r.dehydrated;if(Ec(n),l)if(n.flags&256)n.flags&=-257,n=vm(e,n,i);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(c(558));else if(We||$a(e,n,i,!1),l=(i&e.childLanes)!==0,We||l){if(a=Se,a!==null&&(f=df(a,i),f!==0&&f!==r.retryLane))throw r.retryLane=f,da(e,f),bn(a,e,f),Vc;Fs(),n=vm(e,n,i)}else e=r.treeContext,Ge=Hn(f.nextSibling),an=n,he=!0,Bi=null,Pn=!1,e!==null&&cd(n,e),n=Ss(n,a),n.flags|=4096;return n}return e=si(e.child,{mode:a.mode,children:a.children}),e.ref=n.ref,n.child=e,e.return=n,e}function xs(e,n){var i=n.ref;if(i===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof i!="function"&&typeof i!="object")throw Error(c(284));(e===null||e.ref!==i)&&(n.flags|=4194816)}}function Qc(e,n,i,a,l){return wa(n),i=xc(e,n,i,a,void 0,l),a=Gc(),e!==null&&!We?(Oc(e,n,l),di(e,n,l)):(he&&a&&dc(n),n.flags|=1,on(e,n,i,l),n.child)}function km(e,n,i,a,l,r){return wa(n),n.updateQueue=null,i=Cd(n,a,i,l),Ad(e),a=Gc(),e!==null&&!We?(Oc(e,n,r),di(e,n,r)):(he&&a&&dc(n),n.flags|=1,on(e,n,i,r),n.child)}function _m(e,n,i,a,l){if(wa(n),n.stateNode===null){var r=Xa,f=i.contextType;typeof f=="object"&&f!==null&&(r=tn(f)),r=new i(a,r),n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=qc,n.stateNode=r,r._reactInternals=n,r=n.stateNode,r.props=a,r.state=n.memoizedState,r.refs={},kc(n),f=i.contextType,r.context=typeof f=="object"&&f!==null?tn(f):Xa,r.state=n.memoizedState,f=i.getDerivedStateFromProps,typeof f=="function"&&(Yc(n,i,f,a),r.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(f=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),f!==r.state&&qc.enqueueReplaceState(r,r.state,null),so(n,a,r,l),oo(),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308),a=!0}else if(e===null){r=n.stateNode;var m=n.memoizedProps,g=va(i,m);r.props=g;var A=r.context,E=i.contextType;f=Xa,typeof E=="object"&&E!==null&&(f=tn(E));var O=i.getDerivedStateFromProps;E=typeof O=="function"||typeof r.getSnapshotBeforeUpdate=="function",m=n.pendingProps!==m,E||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(m||A!==f)&&um(n,r,a,f),Mi=!1;var C=n.memoizedState;r.state=C,so(n,a,r,l),oo(),A=n.memoizedState,m||C!==A||Mi?(typeof O=="function"&&(Yc(n,i,O,a),A=n.memoizedState),(g=Mi||rm(n,i,g,a,C,A,f))?(E||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(n.flags|=4194308)):(typeof r.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=a,n.memoizedState=A),r.props=a,r.state=A,r.context=f,a=g):(typeof r.componentDidMount=="function"&&(n.flags|=4194308),a=!1)}else{r=n.stateNode,_c(e,n),f=n.memoizedProps,E=va(i,f),r.props=E,O=n.pendingProps,C=r.context,A=i.contextType,g=Xa,typeof A=="object"&&A!==null&&(g=tn(A)),m=i.getDerivedStateFromProps,(A=typeof m=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(f!==O||C!==g)&&um(n,r,a,g),Mi=!1,C=n.memoizedState,r.state=C,so(n,a,r,l),oo();var D=n.memoizedState;f!==O||C!==D||Mi||e!==null&&e.dependencies!==null&&ds(e.dependencies)?(typeof m=="function"&&(Yc(n,i,m,a),D=n.memoizedState),(E=Mi||rm(n,i,E,a,C,D,g)||e!==null&&e.dependencies!==null&&ds(e.dependencies))?(A||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(a,D,g),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(a,D,g)),typeof r.componentDidUpdate=="function"&&(n.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof r.componentDidUpdate!="function"||f===e.memoizedProps&&C===e.memoizedState||(n.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&C===e.memoizedState||(n.flags|=1024),n.memoizedProps=a,n.memoizedState=D),r.props=a,r.state=D,r.context=g,a=E):(typeof r.componentDidUpdate!="function"||f===e.memoizedProps&&C===e.memoizedState||(n.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&C===e.memoizedState||(n.flags|=1024),a=!1)}return r=a,xs(e,n),a=(n.flags&128)!==0,r||a?(r=n.stateNode,i=a&&typeof i.getDerivedStateFromError!="function"?null:r.render(),n.flags|=1,e!==null&&a?(n.child=ba(n,e.child,null,l),n.child=ba(n,null,i,l)):on(e,n,i,l),n.memoizedState=r.state,e=n.child):e=di(e,n,l),e}function Am(e,n,i,a){return za(),n.flags|=256,on(e,n,i,a),n.child}var Ic={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function $c(e){return{baseLanes:e,cachePool:zd()}}function er(e,n,i){return e=e!==null?e.childLanes&~i:0,n&&(e|=Tn),e}function Cm(e,n,i){var a=n.pendingProps,l=!1,r=(n.flags&128)!==0,f;if((f=r)||(f=e!==null&&e.memoizedState===null?!1:(Ue.current&2)!==0),f&&(l=!0,n.flags&=-129),f=(n.flags&32)!==0,n.flags&=-33,e===null){if(he){if(l?Hi(n):Fi(),(e=Ge)?(e=Bz(e,Pn),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Oi!==null?{id:Vn,overflow:Qn}:null,retryLane:536870912,hydrationErrors:null},i=od(e),i.return=n,n.child=i,an=n,Ge=null)):e=null,e===null)throw Ni(n);return Rr(e)?n.lanes=32:n.lanes=536870912,null}var m=a.children;return a=a.fallback,l?(Fi(),l=n.mode,m=Gs({mode:"hidden",children:m},l),a=ma(a,l,i,null),m.return=n,a.return=n,m.sibling=a,n.child=m,a=n.child,a.memoizedState=$c(i),a.childLanes=er(e,f,i),n.memoizedState=Ic,fo(null,a)):(Hi(n),nr(n,m))}var g=e.memoizedState;if(g!==null&&(m=g.dehydrated,m!==null)){if(r)n.flags&256?(Hi(n),n.flags&=-257,n=ir(e,n,i)):n.memoizedState!==null?(Fi(),n.child=e.child,n.flags|=128,n=null):(Fi(),m=a.fallback,l=n.mode,a=Gs({mode:"visible",children:a.children},l),m=ma(m,l,i,null),m.flags|=2,a.return=n,m.return=n,a.sibling=m,n.child=a,ba(n,e.child,null,i),a=n.child,a.memoizedState=$c(i),a.childLanes=er(e,f,i),n.memoizedState=Ic,n=fo(null,a));else if(Hi(n),Rr(m)){if(f=m.nextSibling&&m.nextSibling.dataset,f)var A=f.dgst;f=A,a=Error(c(419)),a.stack="",a.digest=f,$t({value:a,source:null,stack:null}),n=ir(e,n,i)}else if(We||$a(e,n,i,!1),f=(i&e.childLanes)!==0,We||f){if(f=Se,f!==null&&(a=df(f,i),a!==0&&a!==g.retryLane))throw g.retryLane=a,da(e,a),bn(f,e,a),Vc;Nr(m)||Fs(),n=ir(e,n,i)}else Nr(m)?(n.flags|=192,n.child=e.child,n=null):(e=g.treeContext,Ge=Hn(m.nextSibling),an=n,he=!0,Bi=null,Pn=!1,e!==null&&cd(n,e),n=nr(n,a.children),n.flags|=4096);return n}return l?(Fi(),m=a.fallback,l=n.mode,g=e.child,A=g.sibling,a=si(g,{mode:"hidden",children:a.children}),a.subtreeFlags=g.subtreeFlags&65011712,A!==null?m=si(A,m):(m=ma(m,l,i,null),m.flags|=2),m.return=n,a.return=n,a.sibling=m,n.child=a,fo(null,a),a=n.child,m=e.child.memoizedState,m===null?m=$c(i):(l=m.cachePool,l!==null?(g=Le._currentValue,l=l.parent!==g?{parent:g,pool:g}:l):l=zd(),m={baseLanes:m.baseLanes|i,cachePool:l}),a.memoizedState=m,a.childLanes=er(e,f,i),n.memoizedState=Ic,fo(e.child,a)):(Hi(n),i=e.child,e=i.sibling,i=si(i,{mode:"visible",children:a.children}),i.return=n,i.sibling=null,e!==null&&(f=n.deletions,f===null?(n.deletions=[e],n.flags|=16):f.push(e)),n.child=i,n.memoizedState=null,i)}function nr(e,n){return n=Gs({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Gs(e,n){return e=_n(22,e,null,n),e.lanes=0,e}function ir(e,n,i){return ba(n,e.child,null,i),e=nr(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Dm(e,n,i){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n),hc(e.return,n,i)}function ar(e,n,i,a,l,r){var f=e.memoizedState;f===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:a,tail:i,tailMode:l,treeForkCount:r}:(f.isBackwards=n,f.rendering=null,f.renderingStartTime=0,f.last=a,f.tail=i,f.tailMode=l,f.treeForkCount=r)}function Tm(e,n,i){var a=n.pendingProps,l=a.revealOrder,r=a.tail;a=a.children;var f=Ue.current,m=(f&2)!==0;if(m?(f=f&1|2,n.flags|=128):f&=1,J(Ue,f),on(e,n,a,i),a=he?It:0,!m&&e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Dm(e,i,n);else if(e.tag===19)Dm(e,i,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(l){case"forwards":for(i=n.child,l=null;i!==null;)e=i.alternate,e!==null&&bs(e)===null&&(l=i),i=i.sibling;i=l,i===null?(l=n.child,n.child=null):(l=i.sibling,i.sibling=null),ar(n,!1,l,i,r,a);break;case"backwards":case"unstable_legacy-backwards":for(i=null,l=n.child,n.child=null;l!==null;){if(e=l.alternate,e!==null&&bs(e)===null){n.child=l;break}e=l.sibling,l.sibling=i,i=l,l=e}ar(n,!0,i,null,r,a);break;case"together":ar(n,!1,null,null,void 0,a);break;default:n.memoizedState=null}return n.child}function di(e,n,i){if(e!==null&&(n.dependencies=e.dependencies),Li|=n.lanes,(i&n.childLanes)===0)if(e!==null){if($a(e,n,i,!1),(i&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(c(153));if(n.child!==null){for(e=n.child,i=si(e,e.pendingProps),n.child=i,i.return=n;e.sibling!==null;)e=e.sibling,i=i.sibling=si(e,e.pendingProps),i.return=n;i.sibling=null}return n.child}function tr(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&ds(e)))}function wp(e,n,i){switch(n.tag){case 3:Xe(n,n.stateNode.containerInfo),Ri(n,Le,e.memoizedState.cache),za();break;case 27:case 5:xn(n);break;case 4:Xe(n,n.stateNode.containerInfo);break;case 10:Ri(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Ec(n),null;break;case 13:var a=n.memoizedState;if(a!==null)return a.dehydrated!==null?(Hi(n),n.flags|=128,null):(i&n.child.childLanes)!==0?Cm(e,n,i):(Hi(n),e=di(e,n,i),e!==null?e.sibling:null);Hi(n);break;case 19:var l=(e.flags&128)!==0;if(a=(i&n.childLanes)!==0,a||($a(e,n,i,!1),a=(i&n.childLanes)!==0),l){if(a)return Tm(e,n,i);n.flags|=128}if(l=n.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),J(Ue,Ue.current),a)break;return null;case 22:return n.lanes=0,bm(e,n,i,n.pendingProps);case 24:Ri(n,Le,e.memoizedState.cache)}return di(e,n,i)}function Em(e,n,i){if(e!==null)if(e.memoizedProps!==n.pendingProps)We=!0;else{if(!tr(e,i)&&(n.flags&128)===0)return We=!1,wp(e,n,i);We=(e.flags&131072)!==0}else We=!1,he&&(n.flags&1048576)!==0&&ld(n,It,n.index);switch(n.lanes=0,n.tag){case 16:e:{var a=n.pendingProps;if(e=ga(n.elementType),n.type=e,typeof e=="function")rc(e)?(a=va(e,a),n.tag=1,n=_m(null,n,e,a,i)):(n.tag=0,n=Qc(null,n,e,a,i));else{if(e!=null){var l=e.$$typeof;if(l===ue){n.tag=11,n=hm(null,n,e,a,i);break e}else if(l===Q){n.tag=14,n=gm(null,n,e,a,i);break e}}throw n=je(e)||e,Error(c(306,n,""))}}return n;case 0:return Qc(e,n,n.type,n.pendingProps,i);case 1:return a=n.type,l=va(a,n.pendingProps),_m(e,n,a,l,i);case 3:e:{if(Xe(n,n.stateNode.containerInfo),e===null)throw Error(c(387));a=n.pendingProps;var r=n.memoizedState;l=r.element,_c(e,n),so(n,a,null,i);var f=n.memoizedState;if(a=f.cache,Ri(n,Le,a),a!==r.cache&&gc(n,[Le],i,!0),oo(),a=f.element,r.isDehydrated)if(r={element:a,isDehydrated:!1,cache:f.cache},n.updateQueue.baseState=r,n.memoizedState=r,n.flags&256){n=Am(e,n,a,i);break e}else if(a!==l){l=Nn(Error(c(424)),n),$t(l),n=Am(e,n,a,i);break e}else for(e=n.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Ge=Hn(e.firstChild),an=n,he=!0,Bi=null,Pn=!0,i=bd(n,null,a,i),n.child=i;i;)i.flags=i.flags&-3|4096,i=i.sibling;else{if(za(),a===l){n=di(e,n,i);break e}on(e,n,a,i)}n=n.child}return n;case 26:return xs(e,n),e===null?(i=Hz(n.type,null,n.pendingProps,null))?n.memoizedState=i:he||(i=n.type,e=n.pendingProps,a=qs(oe.current).createElement(i),a[nn]=n,a[zn]=e,sn(a,i,e),Ie(a),n.stateNode=a):n.memoizedState=Hz(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return xn(n),e===null&&he&&(a=n.stateNode=Mz(n.type,n.pendingProps,oe.current),an=n,Pn=!0,l=Ge,Xi(n.type)?(Mr=l,Ge=Hn(a.firstChild)):Ge=l),on(e,n,n.pendingProps.children,i),xs(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&he&&((l=a=Ge)&&(a=Wp(a,n.type,n.pendingProps,Pn),a!==null?(n.stateNode=a,an=n,Ge=Hn(a.firstChild),Pn=!1,l=!0):l=!1),l||Ni(n)),xn(n),l=n.type,r=n.pendingProps,f=e!==null?e.memoizedProps:null,a=r.children,Gr(l,r)?a=null:f!==null&&Gr(l,f)&&(n.flags|=32),n.memoizedState!==null&&(l=xc(e,n,lp,null,null,i),Do._currentValue=l),xs(e,n),on(e,n,a,i),n.child;case 6:return e===null&&he&&((e=i=Ge)&&(i=Yp(i,n.pendingProps,Pn),i!==null?(n.stateNode=i,an=n,Ge=null,e=!0):e=!1),e||Ni(n)),null;case 13:return Cm(e,n,i);case 4:return Xe(n,n.stateNode.containerInfo),a=n.pendingProps,e===null?n.child=ba(n,null,a,i):on(e,n,a,i),n.child;case 11:return hm(e,n,n.type,n.pendingProps,i);case 7:return on(e,n,n.pendingProps,i),n.child;case 8:return on(e,n,n.pendingProps.children,i),n.child;case 12:return on(e,n,n.pendingProps.children,i),n.child;case 10:return a=n.pendingProps,Ri(n,n.type,a.value),on(e,n,a.children,i),n.child;case 9:return l=n.type._context,a=n.pendingProps.children,wa(n),l=tn(l),a=a(l),n.flags|=1,on(e,n,a,i),n.child;case 14:return gm(e,n,n.type,n.pendingProps,i);case 15:return pm(e,n,n.type,n.pendingProps,i);case 19:return Tm(e,n,i);case 31:return yp(e,n,i);case 22:return bm(e,n,i,n.pendingProps);case 24:return wa(n),a=tn(Le),e===null?(l=jc(),l===null&&(l=Se,r=pc(),l.pooledCache=r,r.refCount++,r!==null&&(l.pooledCacheLanes|=i),l=r),n.memoizedState={parent:a,cache:l},kc(n),Ri(n,Le,l)):((e.lanes&i)!==0&&(_c(e,n),so(n,null,null,i),oo()),l=e.memoizedState,r=n.memoizedState,l.parent!==a?(l={parent:a,cache:a},n.memoizedState=l,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=l),Ri(n,Le,a)):(a=r.cache,Ri(n,Le,a),a!==l.cache&&gc(n,[Le],i,!0))),on(e,n,n.pendingProps.children,i),n.child;case 29:throw n.pendingProps}throw Error(c(156,n.tag))}function mi(e){e.flags|=4}function or(e,n,i,a,l){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(l&335544128)===l)if(e.stateNode.complete)e.flags|=8192;else if(iz())e.flags|=8192;else throw pa=ws,vc}else e.flags&=-16777217}function Sm(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Zz(n))if(iz())e.flags|=8192;else throw pa=ws,vc}function Os(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?rf():536870912,e.lanes|=n,ft|=n)}function mo(e,n){if(!he)switch(e.tailMode){case"hidden":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e.tail=null:i.sibling=null;break;case"collapsed":i=e.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function Oe(e){var n=e.alternate!==null&&e.alternate.child===e.child,i=0,a=0;if(n)for(var l=e.child;l!==null;)i|=l.lanes|l.childLanes,a|=l.subtreeFlags&65011712,a|=l.flags&65011712,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)i|=l.lanes|l.childLanes,a|=l.subtreeFlags,a|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=a,e.childLanes=i,n}function hp(e,n,i){var a=n.pendingProps;switch(mc(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Oe(n),null;case 1:return Oe(n),null;case 3:return i=n.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ri(Le),Ee(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(e===null||e.child===null)&&(Ia(n)?mi(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,yc())),Oe(n),null;case 26:var l=n.type,r=n.memoizedState;return e===null?(mi(n),r!==null?(Oe(n),Sm(n,r)):(Oe(n),or(n,l,null,a,i))):r?r!==e.memoizedState?(mi(n),Oe(n),Sm(n,r)):(Oe(n),n.flags&=-16777217):(e=e.memoizedProps,e!==a&&mi(n),Oe(n),or(n,l,e,a,i)),null;case 27:if(ni(n),i=oe.current,l=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==a&&mi(n);else{if(!a){if(n.stateNode===null)throw Error(c(166));return Oe(n),null}e=F.current,Ia(n)?rd(n):(e=Mz(l,a,i),n.stateNode=e,mi(n))}return Oe(n),null;case 5:if(ni(n),l=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==a&&mi(n);else{if(!a){if(n.stateNode===null)throw Error(c(166));return Oe(n),null}if(r=F.current,Ia(n))rd(n);else{var f=qs(oe.current);switch(r){case 1:r=f.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:r=f.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":r=f.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":r=f.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":r=f.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild);break;case"select":r=typeof a.is=="string"?f.createElement("select",{is:a.is}):f.createElement("select"),a.multiple?r.multiple=!0:a.size&&(r.size=a.size);break;default:r=typeof a.is=="string"?f.createElement(l,{is:a.is}):f.createElement(l)}}r[nn]=n,r[zn]=a;e:for(f=n.child;f!==null;){if(f.tag===5||f.tag===6)r.appendChild(f.stateNode);else if(f.tag!==4&&f.tag!==27&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===n)break e;for(;f.sibling===null;){if(f.return===null||f.return===n)break e;f=f.return}f.sibling.return=f.return,f=f.sibling}n.stateNode=r;e:switch(sn(r,l,a),l){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}a&&mi(n)}}return Oe(n),or(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,i),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==a&&mi(n);else{if(typeof a!="string"&&n.stateNode===null)throw Error(c(166));if(e=oe.current,Ia(n)){if(e=n.stateNode,i=n.memoizedProps,a=null,l=an,l!==null)switch(l.tag){case 27:case 5:a=l.memoizedProps}e[nn]=n,e=!!(e.nodeValue===i||a!==null&&a.suppressHydrationWarning===!0||Cz(e.nodeValue,i)),e||Ni(n,!0)}else e=qs(e).createTextNode(a),e[nn]=n,n.stateNode=e}return Oe(n),null;case 31:if(i=n.memoizedState,e===null||e.memoizedState!==null){if(a=Ia(n),i!==null){if(e===null){if(!a)throw Error(c(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(557));e[nn]=n}else za(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Oe(n),e=!1}else i=yc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),e=!0;if(!e)return n.flags&256?(Cn(n),n):(Cn(n),null);if((n.flags&128)!==0)throw Error(c(558))}return Oe(n),null;case 13:if(a=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(l=Ia(n),a!==null&&a.dehydrated!==null){if(e===null){if(!l)throw Error(c(318));if(l=n.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(c(317));l[nn]=n}else za(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Oe(n),l=!1}else l=yc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),l=!0;if(!l)return n.flags&256?(Cn(n),n):(Cn(n),null)}return Cn(n),(n.flags&128)!==0?(n.lanes=i,n):(i=a!==null,e=e!==null&&e.memoizedState!==null,i&&(a=n.child,l=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(l=a.alternate.memoizedState.cachePool.pool),r=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(r=a.memoizedState.cachePool.pool),r!==l&&(a.flags|=2048)),i!==e&&i&&(n.child.flags|=8192),Os(n,n.updateQueue),Oe(n),null);case 4:return Ee(),e===null&&Dr(n.stateNode.containerInfo),Oe(n),null;case 10:return ri(n.type),Oe(n),null;case 19:if(x(Ue),a=n.memoizedState,a===null)return Oe(n),null;if(l=(n.flags&128)!==0,r=a.rendering,r===null)if(l)mo(a,!1);else{if(Fe!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(r=bs(e),r!==null){for(n.flags|=128,mo(a,!1),e=r.updateQueue,n.updateQueue=e,Os(n,e),n.subtreeFlags=0,e=i,i=n.child;i!==null;)td(i,e),i=i.sibling;return J(Ue,Ue.current&1|2),he&&li(n,a.treeForkCount),n.child}e=e.sibling}a.tail!==null&&rn()>Ps&&(n.flags|=128,l=!0,mo(a,!1),n.lanes=4194304)}else{if(!l)if(e=bs(r),e!==null){if(n.flags|=128,l=!0,e=e.updateQueue,n.updateQueue=e,Os(n,e),mo(a,!0),a.tail===null&&a.tailMode==="hidden"&&!r.alternate&&!he)return Oe(n),null}else 2*rn()-a.renderingStartTime>Ps&&i!==536870912&&(n.flags|=128,l=!0,mo(a,!1),n.lanes=4194304);a.isBackwards?(r.sibling=n.child,n.child=r):(e=a.last,e!==null?e.sibling=r:n.child=r,a.last=r)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=rn(),e.sibling=null,i=Ue.current,J(Ue,l?i&1|2:i&1),he&&li(n,a.treeForkCount),e):(Oe(n),null);case 22:case 23:return Cn(n),Tc(),a=n.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(n.flags|=8192):a&&(n.flags|=8192),a?(i&536870912)!==0&&(n.flags&128)===0&&(Oe(n),n.subtreeFlags&6&&(n.flags|=8192)):Oe(n),i=n.updateQueue,i!==null&&Os(n,i.retryQueue),i=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(i=e.memoizedState.cachePool.pool),a=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(a=n.memoizedState.cachePool.pool),a!==i&&(n.flags|=2048),e!==null&&x(ha),null;case 24:return i=null,e!==null&&(i=e.memoizedState.cache),n.memoizedState.cache!==i&&(n.flags|=2048),ri(Le),Oe(n),null;case 25:return null;case 30:return null}throw Error(c(156,n.tag))}function gp(e,n){switch(mc(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return ri(Le),Ee(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return ni(n),null;case 31:if(n.memoizedState!==null){if(Cn(n),n.alternate===null)throw Error(c(340));za()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(Cn(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(c(340));za()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return x(Ue),null;case 4:return Ee(),null;case 10:return ri(n.type),null;case 22:case 23:return Cn(n),Tc(),e!==null&&x(ha),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return ri(Le),null;case 25:return null;default:return null}}function xm(e,n){switch(mc(n),n.tag){case 3:ri(Le),Ee();break;case 26:case 27:case 5:ni(n);break;case 4:Ee();break;case 31:n.memoizedState!==null&&Cn(n);break;case 13:Cn(n);break;case 19:x(Ue);break;case 10:ri(n.type);break;case 22:case 23:Cn(n),Tc(),e!==null&&x(ha);break;case 24:ri(Le)}}function zo(e,n){try{var i=n.updateQueue,a=i!==null?i.lastEffect:null;if(a!==null){var l=a.next;i=l;do{if((i.tag&e)===e){a=void 0;var r=i.create,f=i.inst;a=r(),f.destroy=a}i=i.next}while(i!==l)}}catch(m){_e(n,n.return,m)}}function Ui(e,n,i){try{var a=n.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var r=l.next;a=r;do{if((a.tag&e)===e){var f=a.inst,m=f.destroy;if(m!==void 0){f.destroy=void 0,l=n;var g=i,A=m;try{A()}catch(E){_e(l,g,E)}}}a=a.next}while(a!==r)}}catch(E){_e(n,n.return,E)}}function Gm(e){var n=e.updateQueue;if(n!==null){var i=e.stateNode;try{vd(n,i)}catch(a){_e(e,e.return,a)}}}function Om(e,n,i){i.props=va(e.type,e.memoizedProps),i.state=e.memoizedState;try{i.componentWillUnmount()}catch(a){_e(e,n,a)}}function yo(e,n){try{var i=e.ref;if(i!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:a=e.stateNode;break;default:a=e.stateNode}typeof i=="function"?e.refCleanup=i(a):i.current=a}}catch(l){_e(e,n,l)}}function In(e,n){var i=e.ref,a=e.refCleanup;if(i!==null)if(typeof a=="function")try{a()}catch(l){_e(e,n,l)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof i=="function")try{i(null)}catch(l){_e(e,n,l)}else i.current=null}function Bm(e){var n=e.type,i=e.memoizedProps,a=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":i.autoFocus&&a.focus();break e;case"img":i.src?a.src=i.src:i.srcSet&&(a.srcset=i.srcSet)}}catch(l){_e(e,e.return,l)}}function sr(e,n,i){try{var a=e.stateNode;Hp(a,e.type,i,n),a[zn]=n}catch(l){_e(e,e.return,l)}}function Nm(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Xi(e.type)||e.tag===4}function lr(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Nm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Xi(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function cr(e,n,i){var a=e.tag;if(a===5||a===6)e=e.stateNode,n?(i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i).insertBefore(e,n):(n=i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i,n.appendChild(e),i=i._reactRootContainer,i!=null||n.onclick!==null||(n.onclick=ti));else if(a!==4&&(a===27&&Xi(e.type)&&(i=e.stateNode,n=null),e=e.child,e!==null))for(cr(e,n,i),e=e.sibling;e!==null;)cr(e,n,i),e=e.sibling}function Bs(e,n,i){var a=e.tag;if(a===5||a===6)e=e.stateNode,n?i.insertBefore(e,n):i.appendChild(e);else if(a!==4&&(a===27&&Xi(e.type)&&(i=e.stateNode),e=e.child,e!==null))for(Bs(e,n,i),e=e.sibling;e!==null;)Bs(e,n,i),e=e.sibling}function Rm(e){var n=e.stateNode,i=e.memoizedProps;try{for(var a=e.type,l=n.attributes;l.length;)n.removeAttributeNode(l[0]);sn(n,a,i),n[nn]=e,n[zn]=i}catch(r){_e(e,e.return,r)}}var zi=!1,Ye=!1,rr=!1,Mm=typeof WeakSet=="function"?WeakSet:Set,$e=null;function pp(e,n){if(e=e.containerInfo,Sr=nl,e=Xf(e),ic(e)){if("selectionStart"in e)var i={start:e.selectionStart,end:e.selectionEnd};else e:{i=(i=e.ownerDocument)&&i.defaultView||window;var a=i.getSelection&&i.getSelection();if(a&&a.rangeCount!==0){i=a.anchorNode;var l=a.anchorOffset,r=a.focusNode;a=a.focusOffset;try{i.nodeType,r.nodeType}catch{i=null;break e}var f=0,m=-1,g=-1,A=0,E=0,O=e,C=null;n:for(;;){for(var D;O!==i||l!==0&&O.nodeType!==3||(m=f+l),O!==r||a!==0&&O.nodeType!==3||(g=f+a),O.nodeType===3&&(f+=O.nodeValue.length),(D=O.firstChild)!==null;)C=O,O=D;for(;;){if(O===e)break n;if(C===i&&++A===l&&(m=f),C===r&&++E===a&&(g=f),(D=O.nextSibling)!==null)break;O=C,C=O.parentNode}O=D}i=m===-1||g===-1?null:{start:m,end:g}}else i=null}i=i||{start:0,end:0}}else i=null;for(xr={focusedElem:e,selectionRange:i},nl=!1,$e=n;$e!==null;)if(n=$e,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,$e=e;else for(;$e!==null;){switch(n=$e,r=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(i=0;i<e.length;i++)l=e[i],l.ref.impl=l.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&r!==null){e=void 0,i=n,l=r.memoizedProps,r=r.memoizedState,a=i.stateNode;try{var L=va(i.type,l);e=a.getSnapshotBeforeUpdate(L,r),a.__reactInternalSnapshotBeforeUpdate=e}catch(ne){_e(i,i.return,ne)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,i=e.nodeType,i===9)Br(e);else if(i===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Br(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(c(163))}if(e=n.sibling,e!==null){e.return=n.return,$e=e;break}$e=n.return}}function Pm(e,n,i){var a=i.flags;switch(i.tag){case 0:case 11:case 15:wi(e,i),a&4&&zo(5,i);break;case 1:if(wi(e,i),a&4)if(e=i.stateNode,n===null)try{e.componentDidMount()}catch(f){_e(i,i.return,f)}else{var l=va(i.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(l,n,e.__reactInternalSnapshotBeforeUpdate)}catch(f){_e(i,i.return,f)}}a&64&&Gm(i),a&512&&yo(i,i.return);break;case 3:if(wi(e,i),a&64&&(e=i.updateQueue,e!==null)){if(n=null,i.child!==null)switch(i.child.tag){case 27:case 5:n=i.child.stateNode;break;case 1:n=i.child.stateNode}try{vd(e,n)}catch(f){_e(i,i.return,f)}}break;case 27:n===null&&a&4&&Rm(i);case 26:case 5:wi(e,i),n===null&&a&4&&Bm(i),a&512&&yo(i,i.return);break;case 12:wi(e,i);break;case 31:wi(e,i),a&4&&Fm(e,i);break;case 13:wi(e,i),a&4&&Um(e,i),a&64&&(e=i.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(i=Tp.bind(null,i),qp(e,i))));break;case 22:if(a=i.memoizedState!==null||zi,!a){n=n!==null&&n.memoizedState!==null||Ye,l=zi;var r=Ye;zi=a,(Ye=n)&&!r?hi(e,i,(i.subtreeFlags&8772)!==0):wi(e,i),zi=l,Ye=r}break;case 30:break;default:wi(e,i)}}function Jm(e){var n=e.alternate;n!==null&&(e.alternate=null,Jm(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Jl(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Re=null,wn=!1;function yi(e,n,i){for(i=i.child;i!==null;)Hm(e,n,i),i=i.sibling}function Hm(e,n,i){if(jn&&typeof jn.onCommitFiberUnmount=="function")try{jn.onCommitFiberUnmount(Pt,i)}catch{}switch(i.tag){case 26:Ye||In(i,n),yi(e,n,i),i.memoizedState?i.memoizedState.count--:i.stateNode&&(i=i.stateNode,i.parentNode.removeChild(i));break;case 27:Ye||In(i,n);var a=Re,l=wn;Xi(i.type)&&(Re=i.stateNode,wn=!1),yi(e,n,i),_o(i.stateNode),Re=a,wn=l;break;case 5:Ye||In(i,n);case 6:if(a=Re,l=wn,Re=null,yi(e,n,i),Re=a,wn=l,Re!==null)if(wn)try{(Re.nodeType===9?Re.body:Re.nodeName==="HTML"?Re.ownerDocument.body:Re).removeChild(i.stateNode)}catch(r){_e(i,n,r)}else try{Re.removeChild(i.stateNode)}catch(r){_e(i,n,r)}break;case 18:Re!==null&&(wn?(e=Re,Gz(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,i.stateNode),pt(e)):Gz(Re,i.stateNode));break;case 4:a=Re,l=wn,Re=i.stateNode.containerInfo,wn=!0,yi(e,n,i),Re=a,wn=l;break;case 0:case 11:case 14:case 15:Ui(2,i,n),Ye||Ui(4,i,n),yi(e,n,i);break;case 1:Ye||(In(i,n),a=i.stateNode,typeof a.componentWillUnmount=="function"&&Om(i,n,a)),yi(e,n,i);break;case 21:yi(e,n,i);break;case 22:Ye=(a=Ye)||i.memoizedState!==null,yi(e,n,i),Ye=a;break;default:yi(e,n,i)}}function Fm(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{pt(e)}catch(i){_e(n,n.return,i)}}}function Um(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{pt(e)}catch(i){_e(n,n.return,i)}}function bp(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Mm),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Mm),n;default:throw Error(c(435,e.tag))}}function Ns(e,n){var i=bp(e);n.forEach(function(a){if(!i.has(a)){i.add(a);var l=Ep.bind(null,e,a);a.then(l,l)}})}function hn(e,n){var i=n.deletions;if(i!==null)for(var a=0;a<i.length;a++){var l=i[a],r=e,f=n,m=f;e:for(;m!==null;){switch(m.tag){case 27:if(Xi(m.type)){Re=m.stateNode,wn=!1;break e}break;case 5:Re=m.stateNode,wn=!1;break e;case 3:case 4:Re=m.stateNode.containerInfo,wn=!0;break e}m=m.return}if(Re===null)throw Error(c(160));Hm(r,f,l),Re=null,wn=!1,r=l.alternate,r!==null&&(r.return=null),l.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Km(n,e),n=n.sibling}var Zn=null;function Km(e,n){var i=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:hn(n,e),gn(e),a&4&&(Ui(3,e,e.return),zo(3,e),Ui(5,e,e.return));break;case 1:hn(n,e),gn(e),a&512&&(Ye||i===null||In(i,i.return)),a&64&&zi&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(i=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=i===null?a:i.concat(a))));break;case 26:var l=Zn;if(hn(n,e),gn(e),a&512&&(Ye||i===null||In(i,i.return)),a&4){var r=i!==null?i.memoizedState:null;if(a=e.memoizedState,i===null)if(a===null)if(e.stateNode===null){e:{a=e.type,i=e.memoizedProps,l=l.ownerDocument||l;n:switch(a){case"title":r=l.getElementsByTagName("title")[0],(!r||r[Ft]||r[nn]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=l.createElement(a),l.head.insertBefore(r,l.querySelector("head > title"))),sn(r,a,i),r[nn]=e,Ie(r),a=r;break e;case"link":var f=Kz("link","href",l).get(a+(i.href||""));if(f){for(var m=0;m<f.length;m++)if(r=f[m],r.getAttribute("href")===(i.href==null||i.href===""?null:i.href)&&r.getAttribute("rel")===(i.rel==null?null:i.rel)&&r.getAttribute("title")===(i.title==null?null:i.title)&&r.getAttribute("crossorigin")===(i.crossOrigin==null?null:i.crossOrigin)){f.splice(m,1);break n}}r=l.createElement(a),sn(r,a,i),l.head.appendChild(r);break;case"meta":if(f=Kz("meta","content",l).get(a+(i.content||""))){for(m=0;m<f.length;m++)if(r=f[m],r.getAttribute("content")===(i.content==null?null:""+i.content)&&r.getAttribute("name")===(i.name==null?null:i.name)&&r.getAttribute("property")===(i.property==null?null:i.property)&&r.getAttribute("http-equiv")===(i.httpEquiv==null?null:i.httpEquiv)&&r.getAttribute("charset")===(i.charSet==null?null:i.charSet)){f.splice(m,1);break n}}r=l.createElement(a),sn(r,a,i),l.head.appendChild(r);break;default:throw Error(c(468,a))}r[nn]=e,Ie(r),a=r}e.stateNode=a}else Lz(l,e.type,e.stateNode);else e.stateNode=Uz(l,a,e.memoizedProps);else r!==a?(r===null?i.stateNode!==null&&(i=i.stateNode,i.parentNode.removeChild(i)):r.count--,a===null?Lz(l,e.type,e.stateNode):Uz(l,a,e.memoizedProps)):a===null&&e.stateNode!==null&&sr(e,e.memoizedProps,i.memoizedProps)}break;case 27:hn(n,e),gn(e),a&512&&(Ye||i===null||In(i,i.return)),i!==null&&a&4&&sr(e,e.memoizedProps,i.memoizedProps);break;case 5:if(hn(n,e),gn(e),a&512&&(Ye||i===null||In(i,i.return)),e.flags&32){l=e.stateNode;try{Ua(l,"")}catch(L){_e(e,e.return,L)}}a&4&&e.stateNode!=null&&(l=e.memoizedProps,sr(e,l,i!==null?i.memoizedProps:l)),a&1024&&(rr=!0);break;case 6:if(hn(n,e),gn(e),a&4){if(e.stateNode===null)throw Error(c(162));a=e.memoizedProps,i=e.stateNode;try{i.nodeValue=a}catch(L){_e(e,e.return,L)}}break;case 3:if(Qs=null,l=Zn,Zn=Xs(n.containerInfo),hn(n,e),Zn=l,gn(e),a&4&&i!==null&&i.memoizedState.isDehydrated)try{pt(n.containerInfo)}catch(L){_e(e,e.return,L)}rr&&(rr=!1,Lm(e));break;case 4:a=Zn,Zn=Xs(e.stateNode.containerInfo),hn(n,e),gn(e),Zn=a;break;case 12:hn(n,e),gn(e);break;case 31:hn(n,e),gn(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Ns(e,a)));break;case 13:hn(n,e),gn(e),e.child.flags&8192&&e.memoizedState!==null!=(i!==null&&i.memoizedState!==null)&&(Ms=rn()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Ns(e,a)));break;case 22:l=e.memoizedState!==null;var g=i!==null&&i.memoizedState!==null,A=zi,E=Ye;if(zi=A||l,Ye=E||g,hn(n,e),Ye=E,zi=A,gn(e),a&8192)e:for(n=e.stateNode,n._visibility=l?n._visibility&-2:n._visibility|1,l&&(i===null||g||zi||Ye||ka(e)),i=null,n=e;;){if(n.tag===5||n.tag===26){if(i===null){g=i=n;try{if(r=g.stateNode,l)f=r.style,typeof f.setProperty=="function"?f.setProperty("display","none","important"):f.display="none";else{m=g.stateNode;var O=g.memoizedProps.style,C=O!=null&&O.hasOwnProperty("display")?O.display:null;m.style.display=C==null||typeof C=="boolean"?"":(""+C).trim()}}catch(L){_e(g,g.return,L)}}}else if(n.tag===6){if(i===null){g=n;try{g.stateNode.nodeValue=l?"":g.memoizedProps}catch(L){_e(g,g.return,L)}}}else if(n.tag===18){if(i===null){g=n;try{var D=g.stateNode;l?Oz(D,!0):Oz(g.stateNode,!1)}catch(L){_e(g,g.return,L)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;i===n&&(i=null),n=n.return}i===n&&(i=null),n.sibling.return=n.return,n=n.sibling}a&4&&(a=e.updateQueue,a!==null&&(i=a.retryQueue,i!==null&&(a.retryQueue=null,Ns(e,i))));break;case 19:hn(n,e),gn(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Ns(e,a)));break;case 30:break;case 21:break;default:hn(n,e),gn(e)}}function gn(e){var n=e.flags;if(n&2){try{for(var i,a=e.return;a!==null;){if(Nm(a)){i=a;break}a=a.return}if(i==null)throw Error(c(160));switch(i.tag){case 27:var l=i.stateNode,r=lr(e);Bs(e,r,l);break;case 5:var f=i.stateNode;i.flags&32&&(Ua(f,""),i.flags&=-33);var m=lr(e);Bs(e,m,f);break;case 3:case 4:var g=i.stateNode.containerInfo,A=lr(e);cr(e,A,g);break;default:throw Error(c(161))}}catch(E){_e(e,e.return,E)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Lm(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Lm(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function wi(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Pm(e,n.alternate,n),n=n.sibling}function ka(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Ui(4,n,n.return),ka(n);break;case 1:In(n,n.return);var i=n.stateNode;typeof i.componentWillUnmount=="function"&&Om(n,n.return,i),ka(n);break;case 27:_o(n.stateNode);case 26:case 5:In(n,n.return),ka(n);break;case 22:n.memoizedState===null&&ka(n);break;case 30:ka(n);break;default:ka(n)}e=e.sibling}}function hi(e,n,i){for(i=i&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var a=n.alternate,l=e,r=n,f=r.flags;switch(r.tag){case 0:case 11:case 15:hi(l,r,i),zo(4,r);break;case 1:if(hi(l,r,i),a=r,l=a.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(A){_e(a,a.return,A)}if(a=r,l=a.updateQueue,l!==null){var m=a.stateNode;try{var g=l.shared.hiddenCallbacks;if(g!==null)for(l.shared.hiddenCallbacks=null,l=0;l<g.length;l++)jd(g[l],m)}catch(A){_e(a,a.return,A)}}i&&f&64&&Gm(r),yo(r,r.return);break;case 27:Rm(r);case 26:case 5:hi(l,r,i),i&&a===null&&f&4&&Bm(r),yo(r,r.return);break;case 12:hi(l,r,i);break;case 31:hi(l,r,i),i&&f&4&&Fm(l,r);break;case 13:hi(l,r,i),i&&f&4&&Um(l,r);break;case 22:r.memoizedState===null&&hi(l,r,i),yo(r,r.return);break;case 30:break;default:hi(l,r,i)}n=n.sibling}}function ur(e,n){var i=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(i=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==i&&(e!=null&&e.refCount++,i!=null&&eo(i))}function fr(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&eo(e))}function Wn(e,n,i,a){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Zm(e,n,i,a),n=n.sibling}function Zm(e,n,i,a){var l=n.flags;switch(n.tag){case 0:case 11:case 15:Wn(e,n,i,a),l&2048&&zo(9,n);break;case 1:Wn(e,n,i,a);break;case 3:Wn(e,n,i,a),l&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&eo(e)));break;case 12:if(l&2048){Wn(e,n,i,a),e=n.stateNode;try{var r=n.memoizedProps,f=r.id,m=r.onPostCommit;typeof m=="function"&&m(f,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(g){_e(n,n.return,g)}}else Wn(e,n,i,a);break;case 31:Wn(e,n,i,a);break;case 13:Wn(e,n,i,a);break;case 23:break;case 22:r=n.stateNode,f=n.alternate,n.memoizedState!==null?r._visibility&2?Wn(e,n,i,a):wo(e,n):r._visibility&2?Wn(e,n,i,a):(r._visibility|=2,ct(e,n,i,a,(n.subtreeFlags&10256)!==0||!1)),l&2048&&ur(f,n);break;case 24:Wn(e,n,i,a),l&2048&&fr(n.alternate,n);break;default:Wn(e,n,i,a)}}function ct(e,n,i,a,l){for(l=l&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var r=e,f=n,m=i,g=a,A=f.flags;switch(f.tag){case 0:case 11:case 15:ct(r,f,m,g,l),zo(8,f);break;case 23:break;case 22:var E=f.stateNode;f.memoizedState!==null?E._visibility&2?ct(r,f,m,g,l):wo(r,f):(E._visibility|=2,ct(r,f,m,g,l)),l&&A&2048&&ur(f.alternate,f);break;case 24:ct(r,f,m,g,l),l&&A&2048&&fr(f.alternate,f);break;default:ct(r,f,m,g,l)}n=n.sibling}}function wo(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var i=e,a=n,l=a.flags;switch(a.tag){case 22:wo(i,a),l&2048&&ur(a.alternate,a);break;case 24:wo(i,a),l&2048&&fr(a.alternate,a);break;default:wo(i,a)}n=n.sibling}}var ho=8192;function rt(e,n,i){if(e.subtreeFlags&ho)for(e=e.child;e!==null;)Wm(e,n,i),e=e.sibling}function Wm(e,n,i){switch(e.tag){case 26:rt(e,n,i),e.flags&ho&&e.memoizedState!==null&&sb(i,Zn,e.memoizedState,e.memoizedProps);break;case 5:rt(e,n,i);break;case 3:case 4:var a=Zn;Zn=Xs(e.stateNode.containerInfo),rt(e,n,i),Zn=a;break;case 22:e.memoizedState===null&&(a=e.alternate,a!==null&&a.memoizedState!==null?(a=ho,ho=16777216,rt(e,n,i),ho=a):rt(e,n,i));break;default:rt(e,n,i)}}function Ym(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function go(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var i=0;i<n.length;i++){var a=n[i];$e=a,Xm(a,e)}Ym(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)qm(e),e=e.sibling}function qm(e){switch(e.tag){case 0:case 11:case 15:go(e),e.flags&2048&&Ui(9,e,e.return);break;case 3:go(e);break;case 12:go(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Rs(e)):go(e);break;default:go(e)}}function Rs(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var i=0;i<n.length;i++){var a=n[i];$e=a,Xm(a,e)}Ym(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Ui(8,n,n.return),Rs(n);break;case 22:i=n.stateNode,i._visibility&2&&(i._visibility&=-3,Rs(n));break;default:Rs(n)}e=e.sibling}}function Xm(e,n){for(;$e!==null;){var i=$e;switch(i.tag){case 0:case 11:case 15:Ui(8,i,n);break;case 23:case 22:if(i.memoizedState!==null&&i.memoizedState.cachePool!==null){var a=i.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:eo(i.memoizedState.cache)}if(a=i.child,a!==null)a.return=i,$e=a;else e:for(i=e;$e!==null;){a=$e;var l=a.sibling,r=a.return;if(Jm(a),a===i){$e=null;break e}if(l!==null){l.return=r,$e=l;break e}$e=r}}}var jp={getCacheForType:function(e){var n=tn(Le),i=n.data.get(e);return i===void 0&&(i=e(),n.data.set(e,i)),i},cacheSignal:function(){return tn(Le).controller.signal}},vp=typeof WeakMap=="function"?WeakMap:Map,ve=0,Se=null,fe=null,ze=0,ke=0,Dn=null,Ki=!1,ut=!1,dr=!1,gi=0,Fe=0,Li=0,_a=0,mr=0,Tn=0,ft=0,po=null,pn=null,zr=!1,Ms=0,Vm=0,Ps=1/0,Js=null,Zi=null,Ve=0,Wi=null,dt=null,pi=0,yr=0,wr=null,Qm=null,bo=0,hr=null;function En(){return(ve&2)!==0&&ze!==0?ze&-ze:T.T!==null?kr():mf()}function Im(){if(Tn===0)if((ze&536870912)===0||he){var e=Yo;Yo<<=1,(Yo&3932160)===0&&(Yo=262144),Tn=e}else Tn=536870912;return e=An.current,e!==null&&(e.flags|=32),Tn}function bn(e,n,i){(e===Se&&(ke===2||ke===9)||e.cancelPendingCommit!==null)&&(mt(e,0),Yi(e,ze,Tn,!1)),Ht(e,i),((ve&2)===0||e!==Se)&&(e===Se&&((ve&2)===0&&(_a|=i),Fe===4&&Yi(e,ze,Tn,!1)),$n(e))}function $m(e,n,i){if((ve&6)!==0)throw Error(c(327));var a=!i&&(n&127)===0&&(n&e.expiredLanes)===0||Jt(e,n),l=a?Ap(e,n):pr(e,n,!0),r=a;do{if(l===0){ut&&!a&&Yi(e,n,0,!1);break}else{if(i=e.current.alternate,r&&!kp(i)){l=pr(e,n,!1),r=!1;continue}if(l===2){if(r=n,e.errorRecoveryDisabledLanes&r)var f=0;else f=e.pendingLanes&-536870913,f=f!==0?f:f&536870912?536870912:0;if(f!==0){n=f;e:{var m=e;l=po;var g=m.current.memoizedState.isDehydrated;if(g&&(mt(m,f).flags|=256),f=pr(m,f,!1),f!==2){if(dr&&!g){m.errorRecoveryDisabledLanes|=r,_a|=r,l=4;break e}r=pn,pn=l,r!==null&&(pn===null?pn=r:pn.push.apply(pn,r))}l=f}if(r=!1,l!==2)continue}}if(l===1){mt(e,0),Yi(e,n,0,!0);break}e:{switch(a=e,r=l,r){case 0:case 1:throw Error(c(345));case 4:if((n&4194048)!==n)break;case 6:Yi(a,n,Tn,!Ki);break e;case 2:pn=null;break;case 3:case 5:break;default:throw Error(c(329))}if((n&62914560)===n&&(l=Ms+300-rn(),10<l)){if(Yi(a,n,Tn,!Ki),Xo(a,0,!0)!==0)break e;pi=n,a.timeoutHandle=Sz(ez.bind(null,a,i,pn,Js,zr,n,Tn,_a,ft,Ki,r,"Throttled",-0,0),l);break e}ez(a,i,pn,Js,zr,n,Tn,_a,ft,Ki,r,null,-0,0)}}break}while(!0);$n(e)}function ez(e,n,i,a,l,r,f,m,g,A,E,O,C,D){if(e.timeoutHandle=-1,O=n.subtreeFlags,O&8192||(O&16785408)===16785408){O={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ti},Wm(n,r,O);var L=(r&62914560)===r?Ms-rn():(r&4194048)===r?Vm-rn():0;if(L=lb(O,L),L!==null){pi=r,e.cancelPendingCommit=L(cz.bind(null,e,n,r,i,a,l,f,m,g,E,O,null,C,D)),Yi(e,r,f,!A);return}}cz(e,n,r,i,a,l,f,m,g)}function kp(e){for(var n=e;;){var i=n.tag;if((i===0||i===11||i===15)&&n.flags&16384&&(i=n.updateQueue,i!==null&&(i=i.stores,i!==null)))for(var a=0;a<i.length;a++){var l=i[a],r=l.getSnapshot;l=l.value;try{if(!kn(r(),l))return!1}catch{return!1}}if(i=n.child,n.subtreeFlags&16384&&i!==null)i.return=n,n=i;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Yi(e,n,i,a){n&=~mr,n&=~_a,e.suspendedLanes|=n,e.pingedLanes&=~n,a&&(e.warmLanes|=n),a=e.expirationTimes;for(var l=n;0<l;){var r=31-vn(l),f=1<<r;a[r]=-1,l&=~f}i!==0&&uf(e,i,n)}function Hs(){return(ve&6)===0?(jo(0),!1):!0}function gr(){if(fe!==null){if(ke===0)var e=fe.return;else e=fe,ci=ya=null,Bc(e),at=null,io=0,e=fe;for(;e!==null;)xm(e.alternate,e),e=e.return;fe=null}}function mt(e,n){var i=e.timeoutHandle;i!==-1&&(e.timeoutHandle=-1,Kp(i)),i=e.cancelPendingCommit,i!==null&&(e.cancelPendingCommit=null,i()),pi=0,gr(),Se=e,fe=i=si(e.current,null),ze=n,ke=0,Dn=null,Ki=!1,ut=Jt(e,n),dr=!1,ft=Tn=mr=_a=Li=Fe=0,pn=po=null,zr=!1,(n&8)!==0&&(n|=n&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=n;0<a;){var l=31-vn(a),r=1<<l;n|=e[l],a&=~r}return gi=n,ls(),i}function nz(e,n){te=null,T.H=uo,n===it||n===ys?(n=hd(),ke=3):n===vc?(n=hd(),ke=4):ke=n===Vc?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Dn=n,fe===null&&(Fe=1,Es(e,Nn(n,e.current)))}function iz(){var e=An.current;return e===null?!0:(ze&4194048)===ze?Jn===null:(ze&62914560)===ze||(ze&536870912)!==0?e===Jn:!1}function az(){var e=T.H;return T.H=uo,e===null?uo:e}function tz(){var e=T.A;return T.A=jp,e}function Fs(){Fe=4,Ki||(ze&4194048)!==ze&&An.current!==null||(ut=!0),(Li&134217727)===0&&(_a&134217727)===0||Se===null||Yi(Se,ze,Tn,!1)}function pr(e,n,i){var a=ve;ve|=2;var l=az(),r=tz();(Se!==e||ze!==n)&&(Js=null,mt(e,n)),n=!1;var f=Fe;e:do try{if(ke!==0&&fe!==null){var m=fe,g=Dn;switch(ke){case 8:gr(),f=6;break e;case 3:case 2:case 9:case 6:An.current===null&&(n=!0);var A=ke;if(ke=0,Dn=null,zt(e,m,g,A),i&&ut){f=0;break e}break;default:A=ke,ke=0,Dn=null,zt(e,m,g,A)}}_p(),f=Fe;break}catch(E){nz(e,E)}while(!0);return n&&e.shellSuspendCounter++,ci=ya=null,ve=a,T.H=l,T.A=r,fe===null&&(Se=null,ze=0,ls()),f}function _p(){for(;fe!==null;)oz(fe)}function Ap(e,n){var i=ve;ve|=2;var a=az(),l=tz();Se!==e||ze!==n?(Js=null,Ps=rn()+500,mt(e,n)):ut=Jt(e,n);e:do try{if(ke!==0&&fe!==null){n=fe;var r=Dn;n:switch(ke){case 1:ke=0,Dn=null,zt(e,n,r,1);break;case 2:case 9:if(yd(r)){ke=0,Dn=null,sz(n);break}n=function(){ke!==2&&ke!==9||Se!==e||(ke=7),$n(e)},r.then(n,n);break e;case 3:ke=7;break e;case 4:ke=5;break e;case 7:yd(r)?(ke=0,Dn=null,sz(n)):(ke=0,Dn=null,zt(e,n,r,7));break;case 5:var f=null;switch(fe.tag){case 26:f=fe.memoizedState;case 5:case 27:var m=fe;if(f?Zz(f):m.stateNode.complete){ke=0,Dn=null;var g=m.sibling;if(g!==null)fe=g;else{var A=m.return;A!==null?(fe=A,Us(A)):fe=null}break n}}ke=0,Dn=null,zt(e,n,r,5);break;case 6:ke=0,Dn=null,zt(e,n,r,6);break;case 8:gr(),Fe=6;break e;default:throw Error(c(462))}}Cp();break}catch(E){nz(e,E)}while(!0);return ci=ya=null,T.H=a,T.A=l,ve=i,fe!==null?0:(Se=null,ze=0,ls(),Fe)}function Cp(){for(;fe!==null&&!Gl();)oz(fe)}function oz(e){var n=Em(e.alternate,e,gi);e.memoizedProps=e.pendingProps,n===null?Us(e):fe=n}function sz(e){var n=e,i=n.alternate;switch(n.tag){case 15:case 0:n=km(i,n,n.pendingProps,n.type,void 0,ze);break;case 11:n=km(i,n,n.pendingProps,n.type.render,n.ref,ze);break;case 5:Bc(n);default:xm(i,n),n=fe=td(n,gi),n=Em(i,n,gi)}e.memoizedProps=e.pendingProps,n===null?Us(e):fe=n}function zt(e,n,i,a){ci=ya=null,Bc(n),at=null,io=0;var l=n.return;try{if(zp(e,l,n,i,ze)){Fe=1,Es(e,Nn(i,e.current)),fe=null;return}}catch(r){if(l!==null)throw fe=l,r;Fe=1,Es(e,Nn(i,e.current)),fe=null;return}n.flags&32768?(he||a===1?e=!0:ut||(ze&536870912)!==0?e=!1:(Ki=e=!0,(a===2||a===9||a===3||a===6)&&(a=An.current,a!==null&&a.tag===13&&(a.flags|=16384))),lz(n,e)):Us(n)}function Us(e){var n=e;do{if((n.flags&32768)!==0){lz(n,Ki);return}e=n.return;var i=hp(n.alternate,n,gi);if(i!==null){fe=i;return}if(n=n.sibling,n!==null){fe=n;return}fe=n=e}while(n!==null);Fe===0&&(Fe=5)}function lz(e,n){do{var i=gp(e.alternate,e);if(i!==null){i.flags&=32767,fe=i;return}if(i=e.return,i!==null&&(i.flags|=32768,i.subtreeFlags=0,i.deletions=null),!n&&(e=e.sibling,e!==null)){fe=e;return}fe=e=i}while(e!==null);Fe=6,fe=null}function cz(e,n,i,a,l,r,f,m,g){e.cancelPendingCommit=null;do Ks();while(Ve!==0);if((ve&6)!==0)throw Error(c(327));if(n!==null){if(n===e.current)throw Error(c(177));if(r=n.lanes|n.childLanes,r|=lc,og(e,i,r,f,m,g),e===Se&&(fe=Se=null,ze=0),dt=n,Wi=e,pi=i,yr=r,wr=l,Qm=a,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Sp(sa,function(){return mz(),null})):(e.callbackNode=null,e.callbackPriority=0),a=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||a){a=T.T,T.T=null,l=P.p,P.p=2,f=ve,ve|=4;try{pp(e,n,i)}finally{ve=f,P.p=l,T.T=a}}Ve=1,rz(),uz(),fz()}}function rz(){if(Ve===1){Ve=0;var e=Wi,n=dt,i=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||i){i=T.T,T.T=null;var a=P.p;P.p=2;var l=ve;ve|=4;try{Km(n,e);var r=xr,f=Xf(e.containerInfo),m=r.focusedElem,g=r.selectionRange;if(f!==m&&m&&m.ownerDocument&&qf(m.ownerDocument.documentElement,m)){if(g!==null&&ic(m)){var A=g.start,E=g.end;if(E===void 0&&(E=A),"selectionStart"in m)m.selectionStart=A,m.selectionEnd=Math.min(E,m.value.length);else{var O=m.ownerDocument||document,C=O&&O.defaultView||window;if(C.getSelection){var D=C.getSelection(),L=m.textContent.length,ne=Math.min(g.start,L),Te=g.end===void 0?ne:Math.min(g.end,L);!D.extend&&ne>Te&&(f=Te,Te=ne,ne=f);var j=Yf(m,ne),b=Yf(m,Te);if(j&&b&&(D.rangeCount!==1||D.anchorNode!==j.node||D.anchorOffset!==j.offset||D.focusNode!==b.node||D.focusOffset!==b.offset)){var _=O.createRange();_.setStart(j.node,j.offset),D.removeAllRanges(),ne>Te?(D.addRange(_),D.extend(b.node,b.offset)):(_.setEnd(b.node,b.offset),D.addRange(_))}}}}for(O=[],D=m;D=D.parentNode;)D.nodeType===1&&O.push({element:D,left:D.scrollLeft,top:D.scrollTop});for(typeof m.focus=="function"&&m.focus(),m=0;m<O.length;m++){var S=O[m];S.element.scrollLeft=S.left,S.element.scrollTop=S.top}}nl=!!Sr,xr=Sr=null}finally{ve=l,P.p=a,T.T=i}}e.current=n,Ve=2}}function uz(){if(Ve===2){Ve=0;var e=Wi,n=dt,i=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||i){i=T.T,T.T=null;var a=P.p;P.p=2;var l=ve;ve|=4;try{Pm(e,n.alternate,n)}finally{ve=l,P.p=a,T.T=i}}Ve=3}}function fz(){if(Ve===4||Ve===3){Ve=0,Ol();var e=Wi,n=dt,i=pi,a=Qm;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Ve=5:(Ve=0,dt=Wi=null,dz(e,e.pendingLanes));var l=e.pendingLanes;if(l===0&&(Zi=null),Ml(i),n=n.stateNode,jn&&typeof jn.onCommitFiberRoot=="function")try{jn.onCommitFiberRoot(Pt,n,void 0,(n.current.flags&128)===128)}catch{}if(a!==null){n=T.T,l=P.p,P.p=2,T.T=null;try{for(var r=e.onRecoverableError,f=0;f<a.length;f++){var m=a[f];r(m.value,{componentStack:m.stack})}}finally{T.T=n,P.p=l}}(pi&3)!==0&&Ks(),$n(e),l=e.pendingLanes,(i&261930)!==0&&(l&42)!==0?e===hr?bo++:(bo=0,hr=e):bo=0,jo(0)}}function dz(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,eo(n)))}function Ks(){return rz(),uz(),fz(),mz()}function mz(){if(Ve!==5)return!1;var e=Wi,n=yr;yr=0;var i=Ml(pi),a=T.T,l=P.p;try{P.p=32>i?32:i,T.T=null,i=wr,wr=null;var r=Wi,f=pi;if(Ve=0,dt=Wi=null,pi=0,(ve&6)!==0)throw Error(c(331));var m=ve;if(ve|=4,qm(r.current),Zm(r,r.current,f,i),ve=m,jo(0,!1),jn&&typeof jn.onPostCommitFiberRoot=="function")try{jn.onPostCommitFiberRoot(Pt,r)}catch{}return!0}finally{P.p=l,T.T=a,dz(e,n)}}function zz(e,n,i){n=Nn(i,n),n=Xc(e.stateNode,n,2),e=Ji(e,n,2),e!==null&&(Ht(e,2),$n(e))}function _e(e,n,i){if(e.tag===3)zz(e,e,i);else for(;n!==null;){if(n.tag===3){zz(n,e,i);break}else if(n.tag===1){var a=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Zi===null||!Zi.has(a))){e=Nn(i,e),i=ym(2),a=Ji(n,i,2),a!==null&&(wm(i,a,n,e),Ht(a,2),$n(a));break}}n=n.return}}function br(e,n,i){var a=e.pingCache;if(a===null){a=e.pingCache=new vp;var l=new Set;a.set(n,l)}else l=a.get(n),l===void 0&&(l=new Set,a.set(n,l));l.has(i)||(dr=!0,l.add(i),e=Dp.bind(null,e,n,i),n.then(e,e))}function Dp(e,n,i){var a=e.pingCache;a!==null&&a.delete(n),e.pingedLanes|=e.suspendedLanes&i,e.warmLanes&=~i,Se===e&&(ze&i)===i&&(Fe===4||Fe===3&&(ze&62914560)===ze&&300>rn()-Ms?(ve&2)===0&&mt(e,0):mr|=i,ft===ze&&(ft=0)),$n(e)}function yz(e,n){n===0&&(n=rf()),e=da(e,n),e!==null&&(Ht(e,n),$n(e))}function Tp(e){var n=e.memoizedState,i=0;n!==null&&(i=n.retryLane),yz(e,i)}function Ep(e,n){var i=0;switch(e.tag){case 31:case 13:var a=e.stateNode,l=e.memoizedState;l!==null&&(i=l.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(c(314))}a!==null&&a.delete(n),yz(e,i)}function Sp(e,n){return Rt(e,n)}var Ls=null,yt=null,jr=!1,Zs=!1,vr=!1,qi=0;function $n(e){e!==yt&&e.next===null&&(yt===null?Ls=yt=e:yt=yt.next=e),Zs=!0,jr||(jr=!0,Gp())}function jo(e,n){if(!vr&&Zs){vr=!0;do for(var i=!1,a=Ls;a!==null;){if(e!==0){var l=a.pendingLanes;if(l===0)var r=0;else{var f=a.suspendedLanes,m=a.pingedLanes;r=(1<<31-vn(42|e)+1)-1,r&=l&~(f&~m),r=r&201326741?r&201326741|1:r?r|2:0}r!==0&&(i=!0,pz(a,r))}else r=ze,r=Xo(a,a===Se?r:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(r&3)===0||Jt(a,r)||(i=!0,pz(a,r));a=a.next}while(i);vr=!1}}function xp(){wz()}function wz(){Zs=jr=!1;var e=0;qi!==0&&Up()&&(e=qi);for(var n=rn(),i=null,a=Ls;a!==null;){var l=a.next,r=hz(a,n);r===0?(a.next=null,i===null?Ls=l:i.next=l,l===null&&(yt=i)):(i=a,(e!==0||(r&3)!==0)&&(Zs=!0)),a=l}Ve!==0&&Ve!==5||jo(e),qi!==0&&(qi=0)}function hz(e,n){for(var i=e.suspendedLanes,a=e.pingedLanes,l=e.expirationTimes,r=e.pendingLanes&-62914561;0<r;){var f=31-vn(r),m=1<<f,g=l[f];g===-1?((m&i)===0||(m&a)!==0)&&(l[f]=tg(m,n)):g<=n&&(e.expiredLanes|=m),r&=~m}if(n=Se,i=ze,i=Xo(e,e===n?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,i===0||e===n&&(ke===2||ke===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&Mt(a),e.callbackNode=null,e.callbackPriority=0;if((i&3)===0||Jt(e,i)){if(n=i&-i,n===e.callbackPriority)return n;switch(a!==null&&Mt(a),Ml(i)){case 2:case 8:i=ii;break;case 32:i=sa;break;case 268435456:i=cf;break;default:i=sa}return a=gz.bind(null,e),i=Rt(i,a),e.callbackPriority=n,e.callbackNode=i,n}return a!==null&&a!==null&&Mt(a),e.callbackPriority=2,e.callbackNode=null,2}function gz(e,n){if(Ve!==0&&Ve!==5)return e.callbackNode=null,e.callbackPriority=0,null;var i=e.callbackNode;if(Ks()&&e.callbackNode!==i)return null;var a=ze;return a=Xo(e,e===Se?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:($m(e,a,n),hz(e,rn()),e.callbackNode!=null&&e.callbackNode===i?gz.bind(null,e):null)}function pz(e,n){if(Ks())return null;$m(e,n,!0)}function Gp(){Lp(function(){(ve&6)!==0?Rt(ge,xp):wz()})}function kr(){if(qi===0){var e=et;e===0&&(e=Wo,Wo<<=1,(Wo&261888)===0&&(Wo=256)),qi=e}return qi}function bz(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:$o(""+e)}function jz(e,n){var i=n.ownerDocument.createElement("input");return i.name=n.name,i.value=n.value,e.id&&i.setAttribute("form",e.id),n.parentNode.insertBefore(i,n),e=new FormData(e),i.parentNode.removeChild(i),e}function Op(e,n,i,a,l){if(n==="submit"&&i&&i.stateNode===l){var r=bz((l[zn]||null).action),f=a.submitter;f&&(n=(n=f[zn]||null)?bz(n.formAction):f.getAttribute("formAction"),n!==null&&(r=n,f=null));var m=new as("action","action",null,a,l);e.push({event:m,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(qi!==0){var g=f?jz(l,f):new FormData(l);Kc(i,{pending:!0,data:g,method:l.method,action:r},null,g)}}else typeof r=="function"&&(m.preventDefault(),g=f?jz(l,f):new FormData(l),Kc(i,{pending:!0,data:g,method:l.method,action:r},r,g))},currentTarget:l}]})}}for(var _r=0;_r<sc.length;_r++){var Ar=sc[_r],Bp=Ar.toLowerCase(),Np=Ar[0].toUpperCase()+Ar.slice(1);Ln(Bp,"on"+Np)}Ln(If,"onAnimationEnd"),Ln($f,"onAnimationIteration"),Ln(ed,"onAnimationStart"),Ln("dblclick","onDoubleClick"),Ln("focusin","onFocus"),Ln("focusout","onBlur"),Ln(Qg,"onTransitionRun"),Ln(Ig,"onTransitionStart"),Ln($g,"onTransitionCancel"),Ln(nd,"onTransitionEnd"),Ha("onMouseEnter",["mouseout","mouseover"]),Ha("onMouseLeave",["mouseout","mouseover"]),Ha("onPointerEnter",["pointerout","pointerover"]),Ha("onPointerLeave",["pointerout","pointerover"]),ca("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ca("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ca("onBeforeInput",["compositionend","keypress","textInput","paste"]),ca("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ca("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ca("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var vo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Rp=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(vo));function vz(e,n){n=(n&4)!==0;for(var i=0;i<e.length;i++){var a=e[i],l=a.event;a=a.listeners;e:{var r=void 0;if(n)for(var f=a.length-1;0<=f;f--){var m=a[f],g=m.instance,A=m.currentTarget;if(m=m.listener,g!==r&&l.isPropagationStopped())break e;r=m,l.currentTarget=A;try{r(l)}catch(E){ss(E)}l.currentTarget=null,r=g}else for(f=0;f<a.length;f++){if(m=a[f],g=m.instance,A=m.currentTarget,m=m.listener,g!==r&&l.isPropagationStopped())break e;r=m,l.currentTarget=A;try{r(l)}catch(E){ss(E)}l.currentTarget=null,r=g}}}}function de(e,n){var i=n[Pl];i===void 0&&(i=n[Pl]=new Set);var a=e+"__bubble";i.has(a)||(kz(n,e,2,!1),i.add(a))}function Cr(e,n,i){var a=0;n&&(a|=4),kz(i,e,a,n)}var Ws="_reactListening"+Math.random().toString(36).slice(2);function Dr(e){if(!e[Ws]){e[Ws]=!0,wf.forEach(function(i){i!=="selectionchange"&&(Rp.has(i)||Cr(i,!1,e),Cr(i,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Ws]||(n[Ws]=!0,Cr("selectionchange",!1,n))}}function kz(e,n,i,a){switch(Iz(n)){case 2:var l=ub;break;case 8:l=fb;break;default:l=Ur}i=l.bind(null,n,i,e),l=void 0,!Yl||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(l=!0),a?l!==void 0?e.addEventListener(n,i,{capture:!0,passive:l}):e.addEventListener(n,i,!0):l!==void 0?e.addEventListener(n,i,{passive:l}):e.addEventListener(n,i,!1)}function Tr(e,n,i,a,l){var r=a;if((n&1)===0&&(n&2)===0&&a!==null)e:for(;;){if(a===null)return;var f=a.tag;if(f===3||f===4){var m=a.stateNode.containerInfo;if(m===l)break;if(f===4)for(f=a.return;f!==null;){var g=f.tag;if((g===3||g===4)&&f.stateNode.containerInfo===l)return;f=f.return}for(;m!==null;){if(f=Ma(m),f===null)return;if(g=f.tag,g===5||g===6||g===26||g===27){a=r=f;continue e}m=m.parentNode}}a=a.return}Tf(function(){var A=r,E=Zl(i),O=[];e:{var C=id.get(e);if(C!==void 0){var D=as,L=e;switch(e){case"keypress":if(ns(i)===0)break e;case"keydown":case"keyup":D=Eg;break;case"focusin":L="focus",D=Ql;break;case"focusout":L="blur",D=Ql;break;case"beforeblur":case"afterblur":D=Ql;break;case"click":if(i.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":D=xf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":D=hg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":D=Gg;break;case If:case $f:case ed:D=bg;break;case nd:D=Bg;break;case"scroll":case"scrollend":D=yg;break;case"wheel":D=Rg;break;case"copy":case"cut":case"paste":D=vg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":D=Of;break;case"toggle":case"beforetoggle":D=Pg}var ne=(n&4)!==0,Te=!ne&&(e==="scroll"||e==="scrollend"),j=ne?C!==null?C+"Capture":null:C;ne=[];for(var b=A,_;b!==null;){var S=b;if(_=S.stateNode,S=S.tag,S!==5&&S!==26&&S!==27||_===null||j===null||(S=Kt(b,j),S!=null&&ne.push(ko(b,S,_))),Te)break;b=b.return}0<ne.length&&(C=new D(C,L,null,i,E),O.push({event:C,listeners:ne}))}}if((n&7)===0){e:{if(C=e==="mouseover"||e==="pointerover",D=e==="mouseout"||e==="pointerout",C&&i!==Ll&&(L=i.relatedTarget||i.fromElement)&&(Ma(L)||L[Ra]))break e;if((D||C)&&(C=E.window===E?E:(C=E.ownerDocument)?C.defaultView||C.parentWindow:window,D?(L=i.relatedTarget||i.toElement,D=A,L=L?Ma(L):null,L!==null&&(Te=d(L),ne=L.tag,L!==Te||ne!==5&&ne!==27&&ne!==6)&&(L=null)):(D=null,L=A),D!==L)){if(ne=xf,S="onMouseLeave",j="onMouseEnter",b="mouse",(e==="pointerout"||e==="pointerover")&&(ne=Of,S="onPointerLeave",j="onPointerEnter",b="pointer"),Te=D==null?C:Ut(D),_=L==null?C:Ut(L),C=new ne(S,b+"leave",D,i,E),C.target=Te,C.relatedTarget=_,S=null,Ma(E)===A&&(ne=new ne(j,b+"enter",L,i,E),ne.target=_,ne.relatedTarget=Te,S=ne),Te=S,D&&L)n:{for(ne=Mp,j=D,b=L,_=0,S=j;S;S=ne(S))_++;S=0;for(var X=b;X;X=ne(X))S++;for(;0<_-S;)j=ne(j),_--;for(;0<S-_;)b=ne(b),S--;for(;_--;){if(j===b||b!==null&&j===b.alternate){ne=j;break n}j=ne(j),b=ne(b)}ne=null}else ne=null;D!==null&&_z(O,C,D,ne,!1),L!==null&&Te!==null&&_z(O,Te,L,ne,!0)}}e:{if(C=A?Ut(A):window,D=C.nodeName&&C.nodeName.toLowerCase(),D==="select"||D==="input"&&C.type==="file")var pe=Ff;else if(Jf(C))if(Uf)pe=qg;else{pe=Wg;var Z=Zg}else D=C.nodeName,!D||D.toLowerCase()!=="input"||C.type!=="checkbox"&&C.type!=="radio"?A&&Kl(A.elementType)&&(pe=Ff):pe=Yg;if(pe&&(pe=pe(e,A))){Hf(O,pe,i,E);break e}Z&&Z(e,C,A),e==="focusout"&&A&&C.type==="number"&&A.memoizedProps.value!=null&&Ul(C,"number",C.value)}switch(Z=A?Ut(A):window,e){case"focusin":(Jf(Z)||Z.contentEditable==="true")&&(Wa=Z,ac=A,Qt=null);break;case"focusout":Qt=ac=Wa=null;break;case"mousedown":tc=!0;break;case"contextmenu":case"mouseup":case"dragend":tc=!1,Vf(O,i,E);break;case"selectionchange":if(Vg)break;case"keydown":case"keyup":Vf(O,i,E)}var se;if($l)e:{switch(e){case"compositionstart":var ye="onCompositionStart";break e;case"compositionend":ye="onCompositionEnd";break e;case"compositionupdate":ye="onCompositionUpdate";break e}ye=void 0}else Za?Mf(e,i)&&(ye="onCompositionEnd"):e==="keydown"&&i.keyCode===229&&(ye="onCompositionStart");ye&&(Bf&&i.locale!=="ko"&&(Za||ye!=="onCompositionStart"?ye==="onCompositionEnd"&&Za&&(se=Ef()):(Gi=E,ql="value"in Gi?Gi.value:Gi.textContent,Za=!0)),Z=Ys(A,ye),0<Z.length&&(ye=new Gf(ye,e,null,i,E),O.push({event:ye,listeners:Z}),se?ye.data=se:(se=Pf(i),se!==null&&(ye.data=se)))),(se=Hg?Fg(e,i):Ug(e,i))&&(ye=Ys(A,"onBeforeInput"),0<ye.length&&(Z=new Gf("onBeforeInput","beforeinput",null,i,E),O.push({event:Z,listeners:ye}),Z.data=se)),Op(O,e,A,i,E)}vz(O,n)})}function ko(e,n,i){return{instance:e,listener:n,currentTarget:i}}function Ys(e,n){for(var i=n+"Capture",a=[];e!==null;){var l=e,r=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||r===null||(l=Kt(e,i),l!=null&&a.unshift(ko(e,l,r)),l=Kt(e,n),l!=null&&a.push(ko(e,l,r))),e.tag===3)return a;e=e.return}return[]}function Mp(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function _z(e,n,i,a,l){for(var r=n._reactName,f=[];i!==null&&i!==a;){var m=i,g=m.alternate,A=m.stateNode;if(m=m.tag,g!==null&&g===a)break;m!==5&&m!==26&&m!==27||A===null||(g=A,l?(A=Kt(i,r),A!=null&&f.unshift(ko(i,A,g))):l||(A=Kt(i,r),A!=null&&f.push(ko(i,A,g)))),i=i.return}f.length!==0&&e.push({event:n,listeners:f})}var Pp=/\r\n?/g,Jp=/\u0000|\uFFFD/g;function Az(e){return(typeof e=="string"?e:""+e).replace(Pp,`
`).replace(Jp,"")}function Cz(e,n){return n=Az(n),Az(e)===n}function De(e,n,i,a,l,r){switch(i){case"children":typeof a=="string"?n==="body"||n==="textarea"&&a===""||Ua(e,a):(typeof a=="number"||typeof a=="bigint")&&n!=="body"&&Ua(e,""+a);break;case"className":Qo(e,"class",a);break;case"tabIndex":Qo(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":Qo(e,i,a);break;case"style":Cf(e,a,r);break;case"data":if(n!=="object"){Qo(e,"data",a);break}case"src":case"href":if(a===""&&(n!=="a"||i!=="href")){e.removeAttribute(i);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(i);break}a=$o(""+a),e.setAttribute(i,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(i,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof r=="function"&&(i==="formAction"?(n!=="input"&&De(e,n,"name",l.name,l,null),De(e,n,"formEncType",l.formEncType,l,null),De(e,n,"formMethod",l.formMethod,l,null),De(e,n,"formTarget",l.formTarget,l,null)):(De(e,n,"encType",l.encType,l,null),De(e,n,"method",l.method,l,null),De(e,n,"target",l.target,l,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(i);break}a=$o(""+a),e.setAttribute(i,a);break;case"onClick":a!=null&&(e.onclick=ti);break;case"onScroll":a!=null&&de("scroll",e);break;case"onScrollEnd":a!=null&&de("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(c(61));if(i=a.__html,i!=null){if(l.children!=null)throw Error(c(60));e.innerHTML=i}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}i=$o(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",i);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(i,""+a):e.removeAttribute(i);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(i,""):e.removeAttribute(i);break;case"capture":case"download":a===!0?e.setAttribute(i,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(i,a):e.removeAttribute(i);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(i,a):e.removeAttribute(i);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(i):e.setAttribute(i,a);break;case"popover":de("beforetoggle",e),de("toggle",e),Vo(e,"popover",a);break;case"xlinkActuate":ai(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":ai(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":ai(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":ai(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":ai(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":ai(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":ai(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":ai(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":ai(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":Vo(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(i=mg.get(i)||i,Vo(e,i,a))}}function Er(e,n,i,a,l,r){switch(i){case"style":Cf(e,a,r);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(c(61));if(i=a.__html,i!=null){if(l.children!=null)throw Error(c(60));e.innerHTML=i}}break;case"children":typeof a=="string"?Ua(e,a):(typeof a=="number"||typeof a=="bigint")&&Ua(e,""+a);break;case"onScroll":a!=null&&de("scroll",e);break;case"onScrollEnd":a!=null&&de("scrollend",e);break;case"onClick":a!=null&&(e.onclick=ti);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!hf.hasOwnProperty(i))e:{if(i[0]==="o"&&i[1]==="n"&&(l=i.endsWith("Capture"),n=i.slice(2,l?i.length-7:void 0),r=e[zn]||null,r=r!=null?r[i]:null,typeof r=="function"&&e.removeEventListener(n,r,l),typeof a=="function")){typeof r!="function"&&r!==null&&(i in e?e[i]=null:e.hasAttribute(i)&&e.removeAttribute(i)),e.addEventListener(n,a,l);break e}i in e?e[i]=a:a===!0?e.setAttribute(i,""):Vo(e,i,a)}}}function sn(e,n,i){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":de("error",e),de("load",e);var a=!1,l=!1,r;for(r in i)if(i.hasOwnProperty(r)){var f=i[r];if(f!=null)switch(r){case"src":a=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(c(137,n));default:De(e,n,r,f,i,null)}}l&&De(e,n,"srcSet",i.srcSet,i,null),a&&De(e,n,"src",i.src,i,null);return;case"input":de("invalid",e);var m=r=f=l=null,g=null,A=null;for(a in i)if(i.hasOwnProperty(a)){var E=i[a];if(E!=null)switch(a){case"name":l=E;break;case"type":f=E;break;case"checked":g=E;break;case"defaultChecked":A=E;break;case"value":r=E;break;case"defaultValue":m=E;break;case"children":case"dangerouslySetInnerHTML":if(E!=null)throw Error(c(137,n));break;default:De(e,n,a,E,i,null)}}vf(e,r,m,g,A,f,l,!1);return;case"select":de("invalid",e),a=f=r=null;for(l in i)if(i.hasOwnProperty(l)&&(m=i[l],m!=null))switch(l){case"value":r=m;break;case"defaultValue":f=m;break;case"multiple":a=m;default:De(e,n,l,m,i,null)}n=r,i=f,e.multiple=!!a,n!=null?Fa(e,!!a,n,!1):i!=null&&Fa(e,!!a,i,!0);return;case"textarea":de("invalid",e),r=l=a=null;for(f in i)if(i.hasOwnProperty(f)&&(m=i[f],m!=null))switch(f){case"value":a=m;break;case"defaultValue":l=m;break;case"children":r=m;break;case"dangerouslySetInnerHTML":if(m!=null)throw Error(c(91));break;default:De(e,n,f,m,i,null)}_f(e,a,l,r);return;case"option":for(g in i)i.hasOwnProperty(g)&&(a=i[g],a!=null)&&(g==="selected"?e.selected=a&&typeof a!="function"&&typeof a!="symbol":De(e,n,g,a,i,null));return;case"dialog":de("beforetoggle",e),de("toggle",e),de("cancel",e),de("close",e);break;case"iframe":case"object":de("load",e);break;case"video":case"audio":for(a=0;a<vo.length;a++)de(vo[a],e);break;case"image":de("error",e),de("load",e);break;case"details":de("toggle",e);break;case"embed":case"source":case"link":de("error",e),de("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(A in i)if(i.hasOwnProperty(A)&&(a=i[A],a!=null))switch(A){case"children":case"dangerouslySetInnerHTML":throw Error(c(137,n));default:De(e,n,A,a,i,null)}return;default:if(Kl(n)){for(E in i)i.hasOwnProperty(E)&&(a=i[E],a!==void 0&&Er(e,n,E,a,i,void 0));return}}for(m in i)i.hasOwnProperty(m)&&(a=i[m],a!=null&&De(e,n,m,a,i,null))}function Hp(e,n,i,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,r=null,f=null,m=null,g=null,A=null,E=null;for(D in i){var O=i[D];if(i.hasOwnProperty(D)&&O!=null)switch(D){case"checked":break;case"value":break;case"defaultValue":g=O;default:a.hasOwnProperty(D)||De(e,n,D,null,a,O)}}for(var C in a){var D=a[C];if(O=i[C],a.hasOwnProperty(C)&&(D!=null||O!=null))switch(C){case"type":r=D;break;case"name":l=D;break;case"checked":A=D;break;case"defaultChecked":E=D;break;case"value":f=D;break;case"defaultValue":m=D;break;case"children":case"dangerouslySetInnerHTML":if(D!=null)throw Error(c(137,n));break;default:D!==O&&De(e,n,C,D,a,O)}}Fl(e,f,m,g,A,E,r,l);return;case"select":D=f=m=C=null;for(r in i)if(g=i[r],i.hasOwnProperty(r)&&g!=null)switch(r){case"value":break;case"multiple":D=g;default:a.hasOwnProperty(r)||De(e,n,r,null,a,g)}for(l in a)if(r=a[l],g=i[l],a.hasOwnProperty(l)&&(r!=null||g!=null))switch(l){case"value":C=r;break;case"defaultValue":m=r;break;case"multiple":f=r;default:r!==g&&De(e,n,l,r,a,g)}n=m,i=f,a=D,C!=null?Fa(e,!!i,C,!1):!!a!=!!i&&(n!=null?Fa(e,!!i,n,!0):Fa(e,!!i,i?[]:"",!1));return;case"textarea":D=C=null;for(m in i)if(l=i[m],i.hasOwnProperty(m)&&l!=null&&!a.hasOwnProperty(m))switch(m){case"value":break;case"children":break;default:De(e,n,m,null,a,l)}for(f in a)if(l=a[f],r=i[f],a.hasOwnProperty(f)&&(l!=null||r!=null))switch(f){case"value":C=l;break;case"defaultValue":D=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(c(91));break;default:l!==r&&De(e,n,f,l,a,r)}kf(e,C,D);return;case"option":for(var L in i)C=i[L],i.hasOwnProperty(L)&&C!=null&&!a.hasOwnProperty(L)&&(L==="selected"?e.selected=!1:De(e,n,L,null,a,C));for(g in a)C=a[g],D=i[g],a.hasOwnProperty(g)&&C!==D&&(C!=null||D!=null)&&(g==="selected"?e.selected=C&&typeof C!="function"&&typeof C!="symbol":De(e,n,g,C,a,D));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ne in i)C=i[ne],i.hasOwnProperty(ne)&&C!=null&&!a.hasOwnProperty(ne)&&De(e,n,ne,null,a,C);for(A in a)if(C=a[A],D=i[A],a.hasOwnProperty(A)&&C!==D&&(C!=null||D!=null))switch(A){case"children":case"dangerouslySetInnerHTML":if(C!=null)throw Error(c(137,n));break;default:De(e,n,A,C,a,D)}return;default:if(Kl(n)){for(var Te in i)C=i[Te],i.hasOwnProperty(Te)&&C!==void 0&&!a.hasOwnProperty(Te)&&Er(e,n,Te,void 0,a,C);for(E in a)C=a[E],D=i[E],!a.hasOwnProperty(E)||C===D||C===void 0&&D===void 0||Er(e,n,E,C,a,D);return}}for(var j in i)C=i[j],i.hasOwnProperty(j)&&C!=null&&!a.hasOwnProperty(j)&&De(e,n,j,null,a,C);for(O in a)C=a[O],D=i[O],!a.hasOwnProperty(O)||C===D||C==null&&D==null||De(e,n,O,C,a,D)}function Dz(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Fp(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,i=performance.getEntriesByType("resource"),a=0;a<i.length;a++){var l=i[a],r=l.transferSize,f=l.initiatorType,m=l.duration;if(r&&m&&Dz(f)){for(f=0,m=l.responseEnd,a+=1;a<i.length;a++){var g=i[a],A=g.startTime;if(A>m)break;var E=g.transferSize,O=g.initiatorType;E&&Dz(O)&&(g=g.responseEnd,f+=E*(g<m?1:(m-A)/(g-A)))}if(--a,n+=8*(r+f)/(l.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Sr=null,xr=null;function qs(e){return e.nodeType===9?e:e.ownerDocument}function Tz(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Ez(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Gr(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Or=null;function Up(){var e=window.event;return e&&e.type==="popstate"?e===Or?!1:(Or=e,!0):(Or=null,!1)}var Sz=typeof setTimeout=="function"?setTimeout:void 0,Kp=typeof clearTimeout=="function"?clearTimeout:void 0,xz=typeof Promise=="function"?Promise:void 0,Lp=typeof queueMicrotask=="function"?queueMicrotask:typeof xz<"u"?function(e){return xz.resolve(null).then(e).catch(Zp)}:Sz;function Zp(e){setTimeout(function(){throw e})}function Xi(e){return e==="head"}function Gz(e,n){var i=n,a=0;do{var l=i.nextSibling;if(e.removeChild(i),l&&l.nodeType===8)if(i=l.data,i==="/$"||i==="/&"){if(a===0){e.removeChild(l),pt(n);return}a--}else if(i==="$"||i==="$?"||i==="$~"||i==="$!"||i==="&")a++;else if(i==="html")_o(e.ownerDocument.documentElement);else if(i==="head"){i=e.ownerDocument.head,_o(i);for(var r=i.firstChild;r;){var f=r.nextSibling,m=r.nodeName;r[Ft]||m==="SCRIPT"||m==="STYLE"||m==="LINK"&&r.rel.toLowerCase()==="stylesheet"||i.removeChild(r),r=f}}else i==="body"&&_o(e.ownerDocument.body);i=l}while(i);pt(n)}function Oz(e,n){var i=e;e=0;do{var a=i.nextSibling;if(i.nodeType===1?n?(i._stashedDisplay=i.style.display,i.style.display="none"):(i.style.display=i._stashedDisplay||"",i.getAttribute("style")===""&&i.removeAttribute("style")):i.nodeType===3&&(n?(i._stashedText=i.nodeValue,i.nodeValue=""):i.nodeValue=i._stashedText||""),a&&a.nodeType===8)if(i=a.data,i==="/$"){if(e===0)break;e--}else i!=="$"&&i!=="$?"&&i!=="$~"&&i!=="$!"||e++;i=a}while(i)}function Br(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var i=n;switch(n=n.nextSibling,i.nodeName){case"HTML":case"HEAD":case"BODY":Br(i),Jl(i);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(i.rel.toLowerCase()==="stylesheet")continue}e.removeChild(i)}}function Wp(e,n,i,a){for(;e.nodeType===1;){var l=i;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[Ft])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(r=e.getAttribute("rel"),r==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(r!==l.rel||e.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||e.getAttribute("title")!==(l.title==null?null:l.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(r=e.getAttribute("src"),(r!==(l.src==null?null:l.src)||e.getAttribute("type")!==(l.type==null?null:l.type)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&r&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var r=l.name==null?null:""+l.name;if(l.type==="hidden"&&e.getAttribute("name")===r)return e}else return e;if(e=Hn(e.nextSibling),e===null)break}return null}function Yp(e,n,i){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!i||(e=Hn(e.nextSibling),e===null))return null;return e}function Bz(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Hn(e.nextSibling),e===null))return null;return e}function Nr(e){return e.data==="$?"||e.data==="$~"}function Rr(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function qp(e,n){var i=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||i.readyState!=="loading")n();else{var a=function(){n(),i.removeEventListener("DOMContentLoaded",a)};i.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function Hn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var Mr=null;function Nz(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var i=e.data;if(i==="/$"||i==="/&"){if(n===0)return Hn(e.nextSibling);n--}else i!=="$"&&i!=="$!"&&i!=="$?"&&i!=="$~"&&i!=="&"||n++}e=e.nextSibling}return null}function Rz(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var i=e.data;if(i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"){if(n===0)return e;n--}else i!=="/$"&&i!=="/&"||n++}e=e.previousSibling}return null}function Mz(e,n,i){switch(n=qs(i),e){case"html":if(e=n.documentElement,!e)throw Error(c(452));return e;case"head":if(e=n.head,!e)throw Error(c(453));return e;case"body":if(e=n.body,!e)throw Error(c(454));return e;default:throw Error(c(451))}}function _o(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Jl(e)}var Fn=new Map,Pz=new Set;function Xs(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var bi=P.d;P.d={f:Xp,r:Vp,D:Qp,C:Ip,L:$p,m:eb,X:ib,S:nb,M:ab};function Xp(){var e=bi.f(),n=Hs();return e||n}function Vp(e){var n=Pa(e);n!==null&&n.tag===5&&n.type==="form"?nm(n):bi.r(e)}var wt=typeof document>"u"?null:document;function Jz(e,n,i){var a=wt;if(a&&typeof n=="string"&&n){var l=On(n);l='link[rel="'+e+'"][href="'+l+'"]',typeof i=="string"&&(l+='[crossorigin="'+i+'"]'),Pz.has(l)||(Pz.add(l),e={rel:e,crossOrigin:i,href:n},a.querySelector(l)===null&&(n=a.createElement("link"),sn(n,"link",e),Ie(n),a.head.appendChild(n)))}}function Qp(e){bi.D(e),Jz("dns-prefetch",e,null)}function Ip(e,n){bi.C(e,n),Jz("preconnect",e,n)}function $p(e,n,i){bi.L(e,n,i);var a=wt;if(a&&e&&n){var l='link[rel="preload"][as="'+On(n)+'"]';n==="image"&&i&&i.imageSrcSet?(l+='[imagesrcset="'+On(i.imageSrcSet)+'"]',typeof i.imageSizes=="string"&&(l+='[imagesizes="'+On(i.imageSizes)+'"]')):l+='[href="'+On(e)+'"]';var r=l;switch(n){case"style":r=ht(e);break;case"script":r=gt(e)}Fn.has(r)||(e=k({rel:"preload",href:n==="image"&&i&&i.imageSrcSet?void 0:e,as:n},i),Fn.set(r,e),a.querySelector(l)!==null||n==="style"&&a.querySelector(Ao(r))||n==="script"&&a.querySelector(Co(r))||(n=a.createElement("link"),sn(n,"link",e),Ie(n),a.head.appendChild(n)))}}function eb(e,n){bi.m(e,n);var i=wt;if(i&&e){var a=n&&typeof n.as=="string"?n.as:"script",l='link[rel="modulepreload"][as="'+On(a)+'"][href="'+On(e)+'"]',r=l;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=gt(e)}if(!Fn.has(r)&&(e=k({rel:"modulepreload",href:e},n),Fn.set(r,e),i.querySelector(l)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(i.querySelector(Co(r)))return}a=i.createElement("link"),sn(a,"link",e),Ie(a),i.head.appendChild(a)}}}function nb(e,n,i){bi.S(e,n,i);var a=wt;if(a&&e){var l=Ja(a).hoistableStyles,r=ht(e);n=n||"default";var f=l.get(r);if(!f){var m={loading:0,preload:null};if(f=a.querySelector(Ao(r)))m.loading=5;else{e=k({rel:"stylesheet",href:e,"data-precedence":n},i),(i=Fn.get(r))&&Pr(e,i);var g=f=a.createElement("link");Ie(g),sn(g,"link",e),g._p=new Promise(function(A,E){g.onload=A,g.onerror=E}),g.addEventListener("load",function(){m.loading|=1}),g.addEventListener("error",function(){m.loading|=2}),m.loading|=4,Vs(f,n,a)}f={type:"stylesheet",instance:f,count:1,state:m},l.set(r,f)}}}function ib(e,n){bi.X(e,n);var i=wt;if(i&&e){var a=Ja(i).hoistableScripts,l=gt(e),r=a.get(l);r||(r=i.querySelector(Co(l)),r||(e=k({src:e,async:!0},n),(n=Fn.get(l))&&Jr(e,n),r=i.createElement("script"),Ie(r),sn(r,"link",e),i.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},a.set(l,r))}}function ab(e,n){bi.M(e,n);var i=wt;if(i&&e){var a=Ja(i).hoistableScripts,l=gt(e),r=a.get(l);r||(r=i.querySelector(Co(l)),r||(e=k({src:e,async:!0,type:"module"},n),(n=Fn.get(l))&&Jr(e,n),r=i.createElement("script"),Ie(r),sn(r,"link",e),i.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},a.set(l,r))}}function Hz(e,n,i,a){var l=(l=oe.current)?Xs(l):null;if(!l)throw Error(c(446));switch(e){case"meta":case"title":return null;case"style":return typeof i.precedence=="string"&&typeof i.href=="string"?(n=ht(i.href),i=Ja(l).hoistableStyles,a=i.get(n),a||(a={type:"style",instance:null,count:0,state:null},i.set(n,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(i.rel==="stylesheet"&&typeof i.href=="string"&&typeof i.precedence=="string"){e=ht(i.href);var r=Ja(l).hoistableStyles,f=r.get(e);if(f||(l=l.ownerDocument||l,f={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(e,f),(r=l.querySelector(Ao(e)))&&!r._p&&(f.instance=r,f.state.loading=5),Fn.has(e)||(i={rel:"preload",as:"style",href:i.href,crossOrigin:i.crossOrigin,integrity:i.integrity,media:i.media,hrefLang:i.hrefLang,referrerPolicy:i.referrerPolicy},Fn.set(e,i),r||tb(l,e,i,f.state))),n&&a===null)throw Error(c(528,""));return f}if(n&&a!==null)throw Error(c(529,""));return null;case"script":return n=i.async,i=i.src,typeof i=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=gt(i),i=Ja(l).hoistableScripts,a=i.get(n),a||(a={type:"script",instance:null,count:0,state:null},i.set(n,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(c(444,e))}}function ht(e){return'href="'+On(e)+'"'}function Ao(e){return'link[rel="stylesheet"]['+e+"]"}function Fz(e){return k({},e,{"data-precedence":e.precedence,precedence:null})}function tb(e,n,i,a){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?a.loading=1:(n=e.createElement("link"),a.preload=n,n.addEventListener("load",function(){return a.loading|=1}),n.addEventListener("error",function(){return a.loading|=2}),sn(n,"link",i),Ie(n),e.head.appendChild(n))}function gt(e){return'[src="'+On(e)+'"]'}function Co(e){return"script[async]"+e}function Uz(e,n,i){if(n.count++,n.instance===null)switch(n.type){case"style":var a=e.querySelector('style[data-href~="'+On(i.href)+'"]');if(a)return n.instance=a,Ie(a),a;var l=k({},i,{"data-href":i.href,"data-precedence":i.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),Ie(a),sn(a,"style",l),Vs(a,i.precedence,e),n.instance=a;case"stylesheet":l=ht(i.href);var r=e.querySelector(Ao(l));if(r)return n.state.loading|=4,n.instance=r,Ie(r),r;a=Fz(i),(l=Fn.get(l))&&Pr(a,l),r=(e.ownerDocument||e).createElement("link"),Ie(r);var f=r;return f._p=new Promise(function(m,g){f.onload=m,f.onerror=g}),sn(r,"link",a),n.state.loading|=4,Vs(r,i.precedence,e),n.instance=r;case"script":return r=gt(i.src),(l=e.querySelector(Co(r)))?(n.instance=l,Ie(l),l):(a=i,(l=Fn.get(r))&&(a=k({},i),Jr(a,l)),e=e.ownerDocument||e,l=e.createElement("script"),Ie(l),sn(l,"link",a),e.head.appendChild(l),n.instance=l);case"void":return null;default:throw Error(c(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(a=n.instance,n.state.loading|=4,Vs(a,i.precedence,e));return n.instance}function Vs(e,n,i){for(var a=i.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=a.length?a[a.length-1]:null,r=l,f=0;f<a.length;f++){var m=a[f];if(m.dataset.precedence===n)r=m;else if(r!==l)break}r?r.parentNode.insertBefore(e,r.nextSibling):(n=i.nodeType===9?i.head:i,n.insertBefore(e,n.firstChild))}function Pr(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Jr(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Qs=null;function Kz(e,n,i){if(Qs===null){var a=new Map,l=Qs=new Map;l.set(i,a)}else l=Qs,a=l.get(i),a||(a=new Map,l.set(i,a));if(a.has(e))return a;for(a.set(e,null),i=i.getElementsByTagName(e),l=0;l<i.length;l++){var r=i[l];if(!(r[Ft]||r[nn]||e==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var f=r.getAttribute(n)||"";f=e+f;var m=a.get(f);m?m.push(r):a.set(f,[r])}}return a}function Lz(e,n,i){e=e.ownerDocument||e,e.head.insertBefore(i,n==="title"?e.querySelector("head > title"):null)}function ob(e,n,i){if(i===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(e=n.disabled,typeof n.precedence=="string"&&e==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Zz(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function sb(e,n,i,a){if(i.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var l=ht(a.href),r=n.querySelector(Ao(l));if(r){n=r._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=Is.bind(e),n.then(e,e)),i.state.loading|=4,i.instance=r,Ie(r);return}r=n.ownerDocument||n,a=Fz(a),(l=Fn.get(l))&&Pr(a,l),r=r.createElement("link"),Ie(r);var f=r;f._p=new Promise(function(m,g){f.onload=m,f.onerror=g}),sn(r,"link",a),i.instance=r}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(i,n),(n=i.state.preload)&&(i.state.loading&3)===0&&(e.count++,i=Is.bind(e),n.addEventListener("load",i),n.addEventListener("error",i))}}var Hr=0;function lb(e,n){return e.stylesheets&&e.count===0&&el(e,e.stylesheets),0<e.count||0<e.imgCount?function(i){var a=setTimeout(function(){if(e.stylesheets&&el(e,e.stylesheets),e.unsuspend){var r=e.unsuspend;e.unsuspend=null,r()}},6e4+n);0<e.imgBytes&&Hr===0&&(Hr=62500*Fp());var l=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&el(e,e.stylesheets),e.unsuspend)){var r=e.unsuspend;e.unsuspend=null,r()}},(e.imgBytes>Hr?50:800)+n);return e.unsuspend=i,function(){e.unsuspend=null,clearTimeout(a),clearTimeout(l)}}:null}function Is(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)el(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var $s=null;function el(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,$s=new Map,n.forEach(cb,e),$s=null,Is.call(e))}function cb(e,n){if(!(n.state.loading&4)){var i=$s.get(e);if(i)var a=i.get(null);else{i=new Map,$s.set(e,i);for(var l=e.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<l.length;r++){var f=l[r];(f.nodeName==="LINK"||f.getAttribute("media")!=="not all")&&(i.set(f.dataset.precedence,f),a=f)}a&&i.set(null,a)}l=n.instance,f=l.getAttribute("data-precedence"),r=i.get(f)||a,r===a&&i.set(null,l),i.set(f,l),this.count++,a=Is.bind(this),l.addEventListener("load",a),l.addEventListener("error",a),r?r.parentNode.insertBefore(l,r.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(l,e.firstChild)),n.state.loading|=4}}var Do={$$typeof:I,Provider:null,Consumer:null,_currentValue:H,_currentValue2:H,_threadCount:0};function rb(e,n,i,a,l,r,f,m,g){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Nl(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Nl(0),this.hiddenUpdates=Nl(null),this.identifierPrefix=a,this.onUncaughtError=l,this.onCaughtError=r,this.onRecoverableError=f,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=g,this.incompleteTransitions=new Map}function Wz(e,n,i,a,l,r,f,m,g,A,E,O){return e=new rb(e,n,i,f,g,A,E,O,m),n=1,r===!0&&(n|=24),r=_n(3,null,null,n),e.current=r,r.stateNode=e,n=pc(),n.refCount++,e.pooledCache=n,n.refCount++,r.memoizedState={element:a,isDehydrated:i,cache:n},kc(r),e}function Yz(e){return e?(e=Xa,e):Xa}function qz(e,n,i,a,l,r){l=Yz(l),a.context===null?a.context=l:a.pendingContext=l,a=Pi(n),a.payload={element:i},r=r===void 0?null:r,r!==null&&(a.callback=r),i=Ji(e,a,n),i!==null&&(bn(i,e,n),to(i,e,n))}function Xz(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var i=e.retryLane;e.retryLane=i!==0&&i<n?i:n}}function Fr(e,n){Xz(e,n),(e=e.alternate)&&Xz(e,n)}function Vz(e){if(e.tag===13||e.tag===31){var n=da(e,67108864);n!==null&&bn(n,e,67108864),Fr(e,67108864)}}function Qz(e){if(e.tag===13||e.tag===31){var n=En();n=Rl(n);var i=da(e,n);i!==null&&bn(i,e,n),Fr(e,n)}}var nl=!0;function ub(e,n,i,a){var l=T.T;T.T=null;var r=P.p;try{P.p=2,Ur(e,n,i,a)}finally{P.p=r,T.T=l}}function fb(e,n,i,a){var l=T.T;T.T=null;var r=P.p;try{P.p=8,Ur(e,n,i,a)}finally{P.p=r,T.T=l}}function Ur(e,n,i,a){if(nl){var l=Kr(a);if(l===null)Tr(e,n,a,il,i),$z(e,a);else if(mb(l,e,n,i,a))a.stopPropagation();else if($z(e,a),n&4&&-1<db.indexOf(e)){for(;l!==null;){var r=Pa(l);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var f=la(r.pendingLanes);if(f!==0){var m=r;for(m.pendingLanes|=2,m.entangledLanes|=2;f;){var g=1<<31-vn(f);m.entanglements[1]|=g,f&=~g}$n(r),(ve&6)===0&&(Ps=rn()+500,jo(0))}}break;case 31:case 13:m=da(r,2),m!==null&&bn(m,r,2),Hs(),Fr(r,2)}if(r=Kr(a),r===null&&Tr(e,n,a,il,i),r===l)break;l=r}l!==null&&a.stopPropagation()}else Tr(e,n,a,null,i)}}function Kr(e){return e=Zl(e),Lr(e)}var il=null;function Lr(e){if(il=null,e=Ma(e),e!==null){var n=d(e);if(n===null)e=null;else{var i=n.tag;if(i===13){if(e=z(n),e!==null)return e;e=null}else if(i===31){if(e=y(n),e!==null)return e;e=null}else if(i===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return il=e,null}function Iz(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Bl()){case ge:return 2;case ii:return 8;case sa:case Ih:return 32;case cf:return 268435456;default:return 32}default:return 32}}var Zr=!1,Vi=null,Qi=null,Ii=null,To=new Map,Eo=new Map,$i=[],db="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function $z(e,n){switch(e){case"focusin":case"focusout":Vi=null;break;case"dragenter":case"dragleave":Qi=null;break;case"mouseover":case"mouseout":Ii=null;break;case"pointerover":case"pointerout":To.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Eo.delete(n.pointerId)}}function So(e,n,i,a,l,r){return e===null||e.nativeEvent!==r?(e={blockedOn:n,domEventName:i,eventSystemFlags:a,nativeEvent:r,targetContainers:[l]},n!==null&&(n=Pa(n),n!==null&&Vz(n)),e):(e.eventSystemFlags|=a,n=e.targetContainers,l!==null&&n.indexOf(l)===-1&&n.push(l),e)}function mb(e,n,i,a,l){switch(n){case"focusin":return Vi=So(Vi,e,n,i,a,l),!0;case"dragenter":return Qi=So(Qi,e,n,i,a,l),!0;case"mouseover":return Ii=So(Ii,e,n,i,a,l),!0;case"pointerover":var r=l.pointerId;return To.set(r,So(To.get(r)||null,e,n,i,a,l)),!0;case"gotpointercapture":return r=l.pointerId,Eo.set(r,So(Eo.get(r)||null,e,n,i,a,l)),!0}return!1}function ey(e){var n=Ma(e.target);if(n!==null){var i=d(n);if(i!==null){if(n=i.tag,n===13){if(n=z(i),n!==null){e.blockedOn=n,zf(e.priority,function(){Qz(i)});return}}else if(n===31){if(n=y(i),n!==null){e.blockedOn=n,zf(e.priority,function(){Qz(i)});return}}else if(n===3&&i.stateNode.current.memoizedState.isDehydrated){e.blockedOn=i.tag===3?i.stateNode.containerInfo:null;return}}}e.blockedOn=null}function al(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var i=Kr(e.nativeEvent);if(i===null){i=e.nativeEvent;var a=new i.constructor(i.type,i);Ll=a,i.target.dispatchEvent(a),Ll=null}else return n=Pa(i),n!==null&&Vz(n),e.blockedOn=i,!1;n.shift()}return!0}function ny(e,n,i){al(e)&&i.delete(n)}function zb(){Zr=!1,Vi!==null&&al(Vi)&&(Vi=null),Qi!==null&&al(Qi)&&(Qi=null),Ii!==null&&al(Ii)&&(Ii=null),To.forEach(ny),Eo.forEach(ny)}function tl(e,n){e.blockedOn===n&&(e.blockedOn=null,Zr||(Zr=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,zb)))}var ol=null;function iy(e){ol!==e&&(ol=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){ol===e&&(ol=null);for(var n=0;n<e.length;n+=3){var i=e[n],a=e[n+1],l=e[n+2];if(typeof a!="function"){if(Lr(a||i)===null)continue;break}var r=Pa(i);r!==null&&(e.splice(n,3),n-=3,Kc(r,{pending:!0,data:l,method:i.method,action:a},a,l))}}))}function pt(e){function n(g){return tl(g,e)}Vi!==null&&tl(Vi,e),Qi!==null&&tl(Qi,e),Ii!==null&&tl(Ii,e),To.forEach(n),Eo.forEach(n);for(var i=0;i<$i.length;i++){var a=$i[i];a.blockedOn===e&&(a.blockedOn=null)}for(;0<$i.length&&(i=$i[0],i.blockedOn===null);)ey(i),i.blockedOn===null&&$i.shift();if(i=(e.ownerDocument||e).$$reactFormReplay,i!=null)for(a=0;a<i.length;a+=3){var l=i[a],r=i[a+1],f=l[zn]||null;if(typeof r=="function")f||iy(i);else if(f){var m=null;if(r&&r.hasAttribute("formAction")){if(l=r,f=r[zn]||null)m=f.formAction;else if(Lr(l)!==null)continue}else m=f.action;typeof m=="function"?i[a+1]=m:(i.splice(a,3),a-=3),iy(i)}}}function ay(){function e(r){r.canIntercept&&r.info==="react-transition"&&r.intercept({handler:function(){return new Promise(function(f){return l=f})},focusReset:"manual",scroll:"manual"})}function n(){l!==null&&(l(),l=null),a||setTimeout(i,20)}function i(){if(!a&&!navigation.transition){var r=navigation.currentEntry;r&&r.url!=null&&navigation.navigate(r.url,{state:r.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,l=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(i,100),function(){a=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),l!==null&&(l(),l=null)}}}function Wr(e){this._internalRoot=e}sl.prototype.render=Wr.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(c(409));var i=n.current,a=En();qz(i,a,e,n,null,null)},sl.prototype.unmount=Wr.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;qz(e.current,2,null,e,null,null),Hs(),n[Ra]=null}};function sl(e){this._internalRoot=e}sl.prototype.unstable_scheduleHydration=function(e){if(e){var n=mf();e={blockedOn:null,target:e,priority:n};for(var i=0;i<$i.length&&n!==0&&n<$i[i].priority;i++);$i.splice(i,0,e),i===0&&ey(e)}};var ty=t.version;if(ty!=="19.2.3")throw Error(c(527,ty,"19.2.3"));P.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(c(188)):(e=Object.keys(e).join(","),Error(c(268,e)));return e=w(n),e=e!==null?v(e):null,e=e===null?null:e.stateNode,e};var yb={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:T,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ll=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ll.isDisabled&&ll.supportsFiber)try{Pt=ll.inject(yb),jn=ll}catch{}}return Go.createRoot=function(e,n){if(!u(e))throw Error(c(299));var i=!1,a="",l=fm,r=dm,f=mm;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onUncaughtError!==void 0&&(l=n.onUncaughtError),n.onCaughtError!==void 0&&(r=n.onCaughtError),n.onRecoverableError!==void 0&&(f=n.onRecoverableError)),n=Wz(e,1,!1,null,null,i,a,null,l,r,f,ay),e[Ra]=n.current,Dr(e),new Wr(n)},Go.hydrateRoot=function(e,n,i){if(!u(e))throw Error(c(299));var a=!1,l="",r=fm,f=dm,m=mm,g=null;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(r=i.onUncaughtError),i.onCaughtError!==void 0&&(f=i.onCaughtError),i.onRecoverableError!==void 0&&(m=i.onRecoverableError),i.formState!==void 0&&(g=i.formState)),n=Wz(e,1,!0,n,i??null,a,l,g,r,f,m,ay),n.context=Yz(null),i=n.current,a=En(),a=Rl(a),l=Pi(a),l.callback=null,Ji(i,l,a),i=a,n.current.lanes=i,Ht(n,i),$n(n),e[Ra]=n.current,Dr(e),new sl(n)},Go.version="19.2.3",Go}var pw;function y7(){if(pw)return zu.exports;pw=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),zu.exports=z7(),zu.exports}var w7=y7();const h7=w7.createRoot(document.getElementById("root"));h7.render(N.jsx(B.StrictMode,{children:N.jsx(f7,{})}));
