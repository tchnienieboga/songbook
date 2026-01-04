(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))s(c);new MutationObserver(c=>{for(const d of c)if(d.type==="childList")for(const f of d.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function r(c){const d={};return c.integrity&&(d.integrity=c.integrity),c.referrerPolicy&&(d.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?d.credentials="include":c.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function s(c){if(c.ep)return;c.ep=!0;const d=r(c);fetch(c.href,d)}})();function Mt(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Kr={exports:{}},Ln={},Ur={exports:{}},fe={};var Zr,Cu;function gd(){if(Cu)return Zr;Cu=1;var t=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;function s(d){if(d==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(d)}function c(){try{if(!Object.assign)return!1;var d=new String("abc");if(d[5]="de",Object.getOwnPropertyNames(d)[0]==="5")return!1;for(var f={},z=0;z<10;z++)f["_"+String.fromCharCode(z)]=z;var g=Object.getOwnPropertyNames(f).map(function(D){return f[D]});if(g.join("")!=="0123456789")return!1;var C={};return"abcdefghijklmnopqrst".split("").forEach(function(D){C[D]=D}),Object.keys(Object.assign({},C)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}return Zr=c()?Object.assign:function(d,f){for(var z,g=s(d),C,D=1;D<arguments.length;D++){z=Object(arguments[D]);for(var S in z)a.call(z,S)&&(g[S]=z[S]);if(t){C=t(z);for(var A=0;A<C.length;A++)r.call(z,C[A])&&(g[C[A]]=z[C[A]])}}return g},Zr}var vu;function sy(){if(vu)return fe;vu=1;var t=gd(),a=typeof Symbol=="function"&&Symbol.for,r=a?Symbol.for("react.element"):60103,s=a?Symbol.for("react.portal"):60106,c=a?Symbol.for("react.fragment"):60107,d=a?Symbol.for("react.strict_mode"):60108,f=a?Symbol.for("react.profiler"):60114,z=a?Symbol.for("react.provider"):60109,g=a?Symbol.for("react.context"):60110,C=a?Symbol.for("react.forward_ref"):60112,D=a?Symbol.for("react.suspense"):60113,S=a?Symbol.for("react.memo"):60115,A=a?Symbol.for("react.lazy"):60116,H=typeof Symbol=="function"&&Symbol.iterator;function W(w){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+w,O=1;O<arguments.length;O++)b+="&args[]="+encodeURIComponent(arguments[O]);return"Minified React error #"+w+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Q={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},U={};function G(w,b,O){this.props=w,this.context=b,this.refs=U,this.updater=O||Q}G.prototype.isReactComponent={},G.prototype.setState=function(w,b){if(typeof w!="object"&&typeof w!="function"&&w!=null)throw Error(W(85));this.updater.enqueueSetState(this,w,b,"setState")},G.prototype.forceUpdate=function(w){this.updater.enqueueForceUpdate(this,w,"forceUpdate")};function X(){}X.prototype=G.prototype;function $(w,b,O){this.props=w,this.context=b,this.refs=U,this.updater=O||Q}var ie=$.prototype=new X;ie.constructor=$,t(ie,G.prototype),ie.isPureReactComponent=!0;var le={current:null},V=Object.prototype.hasOwnProperty,oe={key:!0,ref:!0,__self:!0,__source:!0};function re(w,b,O){var J,K={},ne=null,q=null;if(b!=null)for(J in b.ref!==void 0&&(q=b.ref),b.key!==void 0&&(ne=""+b.key),b)V.call(b,J)&&!oe.hasOwnProperty(J)&&(K[J]=b[J]);var M=arguments.length-2;if(M===1)K.children=O;else if(1<M){for(var ge=Array(M),xe=0;xe<M;xe++)ge[xe]=arguments[xe+2];K.children=ge}if(w&&w.defaultProps)for(J in M=w.defaultProps,M)K[J]===void 0&&(K[J]=M[J]);return{$$typeof:r,type:w,key:ne,ref:q,props:K,_owner:le.current}}function we(w,b){return{$$typeof:r,type:w.type,key:b,ref:w.ref,props:w.props,_owner:w._owner}}function ke(w){return typeof w=="object"&&w!==null&&w.$$typeof===r}function pe(w){var b={"=":"=0",":":"=2"};return"$"+(""+w).replace(/[=:]/g,function(O){return b[O]})}var be=/\/+/g,Ue=[];function ye(w,b,O,J){if(Ue.length){var K=Ue.pop();return K.result=w,K.keyPrefix=b,K.func=O,K.context=J,K.count=0,K}return{result:w,keyPrefix:b,func:O,context:J,count:0}}function ze(w){w.result=null,w.keyPrefix=null,w.func=null,w.context=null,w.count=0,10>Ue.length&&Ue.push(w)}function Ee(w,b,O,J){var K=typeof w;(K==="undefined"||K==="boolean")&&(w=null);var ne=!1;if(w===null)ne=!0;else switch(K){case"string":case"number":ne=!0;break;case"object":switch(w.$$typeof){case r:case s:ne=!0}}if(ne)return O(J,w,b===""?"."+ue(w,0):b),1;if(ne=0,b=b===""?".":b+":",Array.isArray(w))for(var q=0;q<w.length;q++){K=w[q];var M=b+ue(K,q);ne+=Ee(K,M,O,J)}else if(w===null||typeof w!="object"?M=null:(M=H&&w[H]||w["@@iterator"],M=typeof M=="function"?M:null),typeof M=="function")for(w=M.call(w),q=0;!(K=w.next()).done;)K=K.value,M=b+ue(K,q++),ne+=Ee(K,M,O,J);else if(K==="object")throw O=""+w,Error(W(31,O==="[object Object]"?"object with keys {"+Object.keys(w).join(", ")+"}":O,""));return ne}function Ae(w,b,O){return w==null?0:Ee(w,"",b,O)}function ue(w,b){return typeof w=="object"&&w!==null&&w.key!=null?pe(w.key):b.toString(36)}function Qe(w,b){w.func.call(w.context,b,w.count++)}function Oe(w,b,O){var J=w.result,K=w.keyPrefix;w=w.func.call(w.context,b,w.count++),Array.isArray(w)?Se(w,J,O,function(ne){return ne}):w!=null&&(ke(w)&&(w=we(w,K+(!w.key||b&&b.key===w.key?"":(""+w.key).replace(be,"$&/")+"/")+O)),J.push(w))}function Se(w,b,O,J,K){var ne="";O!=null&&(ne=(""+O).replace(be,"$&/")+"/"),b=ye(b,ne,J,K),Ae(w,Oe,b),ze(b)}var Me={current:null};function he(){var w=Me.current;if(w===null)throw Error(W(321));return w}var P={ReactCurrentDispatcher:Me,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:le,IsSomeRendererActing:{current:!1},assign:t};return fe.Children={map:function(w,b,O){if(w==null)return w;var J=[];return Se(w,J,null,b,O),J},forEach:function(w,b,O){if(w==null)return w;b=ye(null,null,b,O),Ae(w,Qe,b),ze(b)},count:function(w){return Ae(w,function(){return null},null)},toArray:function(w){var b=[];return Se(w,b,null,function(O){return O}),b},only:function(w){if(!ke(w))throw Error(W(143));return w}},fe.Component=G,fe.Fragment=c,fe.Profiler=f,fe.PureComponent=$,fe.StrictMode=d,fe.Suspense=D,fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=P,fe.cloneElement=function(w,b,O){if(w==null)throw Error(W(267,w));var J=t({},w.props),K=w.key,ne=w.ref,q=w._owner;if(b!=null){if(b.ref!==void 0&&(ne=b.ref,q=le.current),b.key!==void 0&&(K=""+b.key),w.type&&w.type.defaultProps)var M=w.type.defaultProps;for(ge in b)V.call(b,ge)&&!oe.hasOwnProperty(ge)&&(J[ge]=b[ge]===void 0&&M!==void 0?M[ge]:b[ge])}var ge=arguments.length-2;if(ge===1)J.children=O;else if(1<ge){M=Array(ge);for(var xe=0;xe<ge;xe++)M[xe]=arguments[xe+2];J.children=M}return{$$typeof:r,type:w.type,key:K,ref:ne,props:J,_owner:q}},fe.createContext=function(w,b){return b===void 0&&(b=null),w={$$typeof:g,_calculateChangedBits:b,_currentValue:w,_currentValue2:w,_threadCount:0,Provider:null,Consumer:null},w.Provider={$$typeof:z,_context:w},w.Consumer=w},fe.createElement=re,fe.createFactory=function(w){var b=re.bind(null,w);return b.type=w,b},fe.createRef=function(){return{current:null}},fe.forwardRef=function(w){return{$$typeof:C,render:w}},fe.isValidElement=ke,fe.lazy=function(w){return{$$typeof:A,_ctor:w,_status:-1,_result:null}},fe.memo=function(w,b){return{$$typeof:S,type:w,compare:b===void 0?null:b}},fe.useCallback=function(w,b){return he().useCallback(w,b)},fe.useContext=function(w,b){return he().useContext(w,b)},fe.useDebugValue=function(){},fe.useEffect=function(w,b){return he().useEffect(w,b)},fe.useImperativeHandle=function(w,b,O){return he().useImperativeHandle(w,b,O)},fe.useLayoutEffect=function(w,b){return he().useLayoutEffect(w,b)},fe.useMemo=function(w,b){return he().useMemo(w,b)},fe.useReducer=function(w,b,O){return he().useReducer(w,b,O)},fe.useRef=function(w){return he().useRef(w)},fe.useState=function(w){return he().useState(w)},fe.version="16.14.0",fe}var Du;function xs(){return Du||(Du=1,Ur.exports=sy()),Ur.exports}var Tu;function ly(){if(Tu)return Ln;Tu=1;var t=xs(),a=60103;if(Ln.Fragment=60107,typeof Symbol=="function"&&Symbol.for){var r=Symbol.for;a=r("react.element"),Ln.Fragment=r("react.fragment")}var s=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c=Object.prototype.hasOwnProperty,d={key:!0,ref:!0,__self:!0,__source:!0};function f(z,g,C){var D,S={},A=null,H=null;C!==void 0&&(A=""+C),g.key!==void 0&&(A=""+g.key),g.ref!==void 0&&(H=g.ref);for(D in g)c.call(g,D)&&!d.hasOwnProperty(D)&&(S[D]=g[D]);if(z&&z.defaultProps)for(D in g=z.defaultProps,g)S[D]===void 0&&(S[D]=g[D]);return{$$typeof:a,type:z,key:A,ref:H,props:S,_owner:s.current}}return Ln.jsx=f,Ln.jsxs=f,Ln}var Eu;function cy(){return Eu||(Eu=1,Kr.exports=ly()),Kr.exports}var E=cy(),T=xs();const Ye=Mt(T);var Vr={exports:{}},ti={},$r={exports:{}},Yr={};var Au;function uy(){return Au||(Au=1,(function(t){var a,r,s,c,d;if(typeof window>"u"||typeof MessageChannel!="function"){var f=null,z=null,g=function(){if(f!==null)try{var P=t.unstable_now();f(!0,P),f=null}catch(w){throw setTimeout(g,0),w}},C=Date.now();t.unstable_now=function(){return Date.now()-C},a=function(P){f!==null?setTimeout(a,0,P):(f=P,setTimeout(g,0))},r=function(P,w){z=setTimeout(P,w)},s=function(){clearTimeout(z)},c=function(){return!1},d=t.unstable_forceFrameRate=function(){}}else{var D=window.performance,S=window.Date,A=window.setTimeout,H=window.clearTimeout;if(typeof console<"u"){var W=window.cancelAnimationFrame;typeof window.requestAnimationFrame!="function"&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"),typeof W!="function"&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills")}if(typeof D=="object"&&typeof D.now=="function")t.unstable_now=function(){return D.now()};else{var Q=S.now();t.unstable_now=function(){return S.now()-Q}}var U=!1,G=null,X=-1,$=5,ie=0;c=function(){return t.unstable_now()>=ie},d=function(){},t.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported"):$=0<P?Math.floor(1e3/P):5};var le=new MessageChannel,V=le.port2;le.port1.onmessage=function(){if(G!==null){var P=t.unstable_now();ie=P+$;try{G(!0,P)?V.postMessage(null):(U=!1,G=null)}catch(w){throw V.postMessage(null),w}}else U=!1},a=function(P){G=P,U||(U=!0,V.postMessage(null))},r=function(P,w){X=A(function(){P(t.unstable_now())},w)},s=function(){H(X),X=-1}}function oe(P,w){var b=P.length;P.push(w);e:for(;;){var O=b-1>>>1,J=P[O];if(J!==void 0&&0<ke(J,w))P[O]=w,P[b]=J,b=O;else break e}}function re(P){return P=P[0],P===void 0?null:P}function we(P){var w=P[0];if(w!==void 0){var b=P.pop();if(b!==w){P[0]=b;e:for(var O=0,J=P.length;O<J;){var K=2*(O+1)-1,ne=P[K],q=K+1,M=P[q];if(ne!==void 0&&0>ke(ne,b))M!==void 0&&0>ke(M,ne)?(P[O]=M,P[q]=b,O=q):(P[O]=ne,P[K]=b,O=K);else if(M!==void 0&&0>ke(M,b))P[O]=M,P[q]=b,O=q;else break e}}return w}return null}function ke(P,w){var b=P.sortIndex-w.sortIndex;return b!==0?b:P.id-w.id}var pe=[],be=[],Ue=1,ye=null,ze=3,Ee=!1,Ae=!1,ue=!1;function Qe(P){for(var w=re(be);w!==null;){if(w.callback===null)we(be);else if(w.startTime<=P)we(be),w.sortIndex=w.expirationTime,oe(pe,w);else break;w=re(be)}}function Oe(P){if(ue=!1,Qe(P),!Ae)if(re(pe)!==null)Ae=!0,a(Se);else{var w=re(be);w!==null&&r(Oe,w.startTime-P)}}function Se(P,w){Ae=!1,ue&&(ue=!1,s()),Ee=!0;var b=ze;try{for(Qe(w),ye=re(pe);ye!==null&&(!(ye.expirationTime>w)||P&&!c());){var O=ye.callback;if(O!==null){ye.callback=null,ze=ye.priorityLevel;var J=O(ye.expirationTime<=w);w=t.unstable_now(),typeof J=="function"?ye.callback=J:ye===re(pe)&&we(pe),Qe(w)}else we(pe);ye=re(pe)}if(ye!==null)var K=!0;else{var ne=re(be);ne!==null&&r(Oe,ne.startTime-w),K=!1}return K}finally{ye=null,ze=b,Ee=!1}}function Me(P){switch(P){case 1:return-1;case 2:return 250;case 5:return 1073741823;case 4:return 1e4;default:return 5e3}}var he=d;t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(P){P.callback=null},t.unstable_continueExecution=function(){Ae||Ee||(Ae=!0,a(Se))},t.unstable_getCurrentPriorityLevel=function(){return ze},t.unstable_getFirstCallbackNode=function(){return re(pe)},t.unstable_next=function(P){switch(ze){case 1:case 2:case 3:var w=3;break;default:w=ze}var b=ze;ze=w;try{return P()}finally{ze=b}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=he,t.unstable_runWithPriority=function(P,w){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var b=ze;ze=P;try{return w()}finally{ze=b}},t.unstable_scheduleCallback=function(P,w,b){var O=t.unstable_now();if(typeof b=="object"&&b!==null){var J=b.delay;J=typeof J=="number"&&0<J?O+J:O,b=typeof b.timeout=="number"?b.timeout:Me(P)}else b=Me(P),J=O;return b=J+b,P={id:Ue++,callback:w,priorityLevel:P,startTime:J,expirationTime:b,sortIndex:-1},J>O?(P.sortIndex=J,oe(be,P),re(pe)===null&&P===re(be)&&(ue?s():ue=!0,r(Oe,J-O))):(P.sortIndex=b,oe(pe,P),Ae||Ee||(Ae=!0,a(Se))),P},t.unstable_shouldYield=function(){var P=t.unstable_now();Qe(P);var w=re(pe);return w!==ye&&ye!==null&&w!==null&&w.callback!==null&&w.startTime<=P&&w.expirationTime<ye.expirationTime||c()},t.unstable_wrapCallback=function(P){var w=ze;return function(){var b=ze;ze=w;try{return P.apply(this,arguments)}finally{ze=b}}}})(Yr)),Yr}var Pu;function dy(){return Pu||(Pu=1,$r.exports=uy()),$r.exports}var xu;function my(){if(xu)return ti;xu=1;var t=xs(),a=gd(),r=dy();function s(e){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)i+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}if(!t)throw Error(s(227));function c(e,i,n,o,l,u,m,y,j){var k=Array.prototype.slice.call(arguments,3);try{i.apply(n,k)}catch(R){this.onError(R)}}var d=!1,f=null,z=!1,g=null,C={onError:function(e){d=!0,f=e}};function D(e,i,n,o,l,u,m,y,j){d=!1,f=null,c.apply(C,arguments)}function S(e,i,n,o,l,u,m,y,j){if(D.apply(this,arguments),d){if(d){var k=f;d=!1,f=null}else throw Error(s(198));z||(z=!0,g=k)}}var A=null,H=null,W=null;function Q(e,i,n){var o=e.type||"unknown-event";e.currentTarget=W(n),S(o,i,void 0,e),e.currentTarget=null}var U=null,G={};function X(){if(U)for(var e in G){var i=G[e],n=U.indexOf(e);if(!(-1<n))throw Error(s(96,e));if(!ie[n]){if(!i.extractEvents)throw Error(s(97,e));ie[n]=i,n=i.eventTypes;for(var o in n){var l=void 0,u=n[o],m=i,y=o;if(le.hasOwnProperty(y))throw Error(s(99,y));le[y]=u;var j=u.phasedRegistrationNames;if(j){for(l in j)j.hasOwnProperty(l)&&$(j[l],m,y);l=!0}else u.registrationName?($(u.registrationName,m,y),l=!0):l=!1;if(!l)throw Error(s(98,o,e))}}}}function $(e,i,n){if(V[e])throw Error(s(100,e));V[e]=i,oe[e]=i.eventTypes[n].dependencies}var ie=[],le={},V={},oe={};function re(e){var i=!1,n;for(n in e)if(e.hasOwnProperty(n)){var o=e[n];if(!G.hasOwnProperty(n)||G[n]!==o){if(G[n])throw Error(s(102,n));G[n]=o,i=!0}}i&&X()}var we=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ke=null,pe=null,be=null;function Ue(e){if(e=H(e)){if(typeof ke!="function")throw Error(s(280));var i=e.stateNode;i&&(i=A(i),ke(e.stateNode,e.type,i))}}function ye(e){pe?be?be.push(e):be=[e]:pe=e}function ze(){if(pe){var e=pe,i=be;if(be=pe=null,Ue(e),i)for(e=0;e<i.length;e++)Ue(i[e])}}function Ee(e,i){return e(i)}function Ae(e,i,n,o,l){return e(i,n,o,l)}function ue(){}var Qe=Ee,Oe=!1,Se=!1;function Me(){(pe!==null||be!==null)&&(ue(),ze())}function he(e,i,n){if(Se)return e(i,n);Se=!0;try{return Qe(e,i,n)}finally{Se=!1,Me()}}var P=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,w=Object.prototype.hasOwnProperty,b={},O={};function J(e){return w.call(O,e)?!0:w.call(b,e)?!1:P.test(e)?O[e]=!0:(b[e]=!0,!1)}function K(e,i,n,o){if(n!==null&&n.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return o?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function ne(e,i,n,o){if(i===null||typeof i>"u"||K(e,i,n,o))return!0;if(o)return!1;if(n!==null)switch(n.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function q(e,i,n,o,l,u){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=o,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=i,this.sanitizeURL=u}var M={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){M[e]=new q(e,0,!1,e,null,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var i=e[0];M[i]=new q(i,1,!1,e[1],null,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){M[e]=new q(e,2,!1,e.toLowerCase(),null,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){M[e]=new q(e,2,!1,e,null,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){M[e]=new q(e,3,!1,e.toLowerCase(),null,!1)}),["checked","multiple","muted","selected"].forEach(function(e){M[e]=new q(e,3,!0,e,null,!1)}),["capture","download"].forEach(function(e){M[e]=new q(e,4,!1,e,null,!1)}),["cols","rows","size","span"].forEach(function(e){M[e]=new q(e,6,!1,e,null,!1)}),["rowSpan","start"].forEach(function(e){M[e]=new q(e,5,!1,e.toLowerCase(),null,!1)});var ge=/[\-:]([a-z])/g;function xe(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var i=e.replace(ge,xe);M[i]=new q(i,1,!1,e,null,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var i=e.replace(ge,xe);M[i]=new q(i,1,!1,e,"http://www.w3.org/1999/xlink",!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var i=e.replace(ge,xe);M[i]=new q(i,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1)}),["tabIndex","crossOrigin"].forEach(function(e){M[e]=new q(e,1,!1,e.toLowerCase(),null,!1)}),M.xlinkHref=new q("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0),["src","href","action","formAction"].forEach(function(e){M[e]=new q(e,1,!1,e.toLowerCase(),null,!0)});var te=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;te.hasOwnProperty("ReactCurrentDispatcher")||(te.ReactCurrentDispatcher={current:null}),te.hasOwnProperty("ReactCurrentBatchConfig")||(te.ReactCurrentBatchConfig={suspense:null});function Ri(e,i,n,o){var l=M.hasOwnProperty(i)?M[i]:null,u=l!==null?l.type===0:o?!1:!(!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N");u||(ne(i,n,l,o)&&(n=null),o||l===null?J(i)&&(n===null?e.removeAttribute(i):e.setAttribute(i,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(i=l.attributeName,o=l.attributeNamespace,n===null?e.removeAttribute(i):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,o?e.setAttributeNS(o,i,n):e.setAttribute(i,n))))}var nn=/^(.*)[\\\/]/,Ie=typeof Symbol=="function"&&Symbol.for,Tn=Ie?Symbol.for("react.element"):60103,Ni=Ie?Symbol.for("react.portal"):60106,Ci=Ie?Symbol.for("react.fragment"):60107,Wt=Ie?Symbol.for("react.strict_mode"):60108,En=Ie?Symbol.for("react.profiler"):60114,qn=Ie?Symbol.for("react.provider"):60109,Ht=Ie?Symbol.for("react.context"):60110,ce=Ie?Symbol.for("react.concurrent_mode"):60111,yi=Ie?Symbol.for("react.forward_ref"):60112,tn=Ie?Symbol.for("react.suspense"):60113,lo=Ie?Symbol.for("react.suspense_list"):60120,co=Ie?Symbol.for("react.memo"):60115,Hs=Ie?Symbol.for("react.lazy"):60116,Ls=Ie?Symbol.for("react.block"):60121,Ks=typeof Symbol=="function"&&Symbol.iterator;function et(e){return e===null||typeof e!="object"?null:(e=Ks&&e[Ks]||e["@@iterator"],typeof e=="function"?e:null)}function Tm(e){if(e._status===-1){e._status=0;var i=e._ctor;i=i(),e._result=i,i.then(function(n){e._status===0&&(n=n.default,e._status=1,e._result=n)},function(n){e._status===0&&(e._status=2,e._result=n)})}}function vi(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ci:return"Fragment";case Ni:return"Portal";case En:return"Profiler";case Wt:return"StrictMode";case tn:return"Suspense";case lo:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ht:return"Context.Consumer";case qn:return"Context.Provider";case yi:var i=e.render;return i=i.displayName||i.name||"",e.displayName||(i!==""?"ForwardRef("+i+")":"ForwardRef");case co:return vi(e.type);case Ls:return vi(e.render);case Hs:if(e=e._status===1?e._result:null)return vi(e)}return null}function uo(e){var i="";do{e:switch(e.tag){case 3:case 4:case 6:case 7:case 10:case 9:var n="";break e;default:var o=e._debugOwner,l=e._debugSource,u=vi(e.type);n=null,o&&(n=vi(o.type)),o=u,u="",l?u=" (at "+l.fileName.replace(nn,"")+":"+l.lineNumber+")":n&&(u=" (created by "+n+")"),n=`
    in `+(o||"Unknown")+u}i+=n,e=e.return}while(e);return i}function Fi(e){switch(typeof e){case"boolean":case"number":case"object":case"string":case"undefined":return e;default:return""}}function Us(e){var i=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Em(e){var i=Us(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,i),o=""+e[i];if(!e.hasOwnProperty(i)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,u=n.set;return Object.defineProperty(e,i,{configurable:!0,get:function(){return l.call(this)},set:function(m){o=""+m,u.call(this,m)}}),Object.defineProperty(e,i,{enumerable:n.enumerable}),{getValue:function(){return o},setValue:function(m){o=""+m},stopTracking:function(){e._valueTracker=null,delete e[i]}}}}function Lt(e){e._valueTracker||(e._valueTracker=Em(e))}function Zs(e){if(!e)return!1;var i=e._valueTracker;if(!i)return!0;var n=i.getValue(),o="";return e&&(o=Us(e)?e.checked?"true":"false":e.value),e=o,e!==n?(i.setValue(e),!0):!1}function mo(e,i){var n=i.checked;return a({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Vs(e,i){var n=i.defaultValue==null?"":i.defaultValue,o=i.checked!=null?i.checked:i.defaultChecked;n=Fi(i.value!=null?i.value:n),e._wrapperState={initialChecked:o,initialValue:n,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function $s(e,i){i=i.checked,i!=null&&Ri(e,"checked",i,!1)}function fo(e,i){$s(e,i);var n=Fi(i.value),o=i.type;if(n!=null)o==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(o==="submit"||o==="reset"){e.removeAttribute("value");return}i.hasOwnProperty("value")?yo(e,i.type,n):i.hasOwnProperty("defaultValue")&&yo(e,i.type,Fi(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(e.defaultChecked=!!i.defaultChecked)}function Ys(e,i,n){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var o=i.type;if(!(o!=="submit"&&o!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+e._wrapperState.initialValue,n||i===e.value||(e.value=i),e.defaultValue=i}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function yo(e,i,n){(i!=="number"||e.ownerDocument.activeElement!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}function Am(e){var i="";return t.Children.forEach(e,function(n){n!=null&&(i+=n)}),i}function zo(e,i){return e=a({children:void 0},i),(i=Am(i.children))&&(e.children=i),e}function An(e,i,n,o){if(e=e.options,i){i={};for(var l=0;l<n.length;l++)i["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=i.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&o&&(e[n].defaultSelected=!0)}else{for(n=""+Fi(n),i=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,o&&(e[l].defaultSelected=!0);return}i!==null||e[l].disabled||(i=e[l])}i!==null&&(i.selected=!0)}}function wo(e,i){if(i.dangerouslySetInnerHTML!=null)throw Error(s(91));return a({},i,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Qs(e,i){var n=i.value;if(n==null){if(n=i.children,i=i.defaultValue,n!=null){if(i!=null)throw Error(s(92));if(Array.isArray(n)){if(!(1>=n.length))throw Error(s(93));n=n[0]}i=n}i==null&&(i=""),n=i}e._wrapperState={initialValue:Fi(n)}}function Xs(e,i){var n=Fi(i.value),o=Fi(i.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),i.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),o!=null&&(e.defaultValue=""+o)}function qs(e){var i=e.textContent;i===e._wrapperState.initialValue&&i!==""&&i!==null&&(e.value=i)}var el={html:"http://www.w3.org/1999/xhtml",svg:"http://www.w3.org/2000/svg"};function il(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function po(e,i){return e==null||e==="http://www.w3.org/1999/xhtml"?il(i):e==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Kt,nl=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,n,o,l){MSApp.execUnsafeLocalFunction(function(){return e(i,n,o,l)})}:e})(function(e,i){if(e.namespaceURI!==el.svg||"innerHTML"in e)e.innerHTML=i;else{for(Kt=Kt||document.createElement("div"),Kt.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Kt.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;i.firstChild;)e.appendChild(i.firstChild)}});function it(e,i){if(i){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=i;return}}e.textContent=i}function Ut(e,i){var n={};return n[e.toLowerCase()]=i.toLowerCase(),n["Webkit"+e]="webkit"+i,n["Moz"+e]="moz"+i,n}var Pn={animationend:Ut("Animation","AnimationEnd"),animationiteration:Ut("Animation","AnimationIteration"),animationstart:Ut("Animation","AnimationStart"),transitionend:Ut("Transition","TransitionEnd")},ho={},tl={};we&&(tl=document.createElement("div").style,"AnimationEvent"in window||(delete Pn.animationend.animation,delete Pn.animationiteration.animation,delete Pn.animationstart.animation),"TransitionEvent"in window||delete Pn.transitionend.transition);function Zt(e){if(ho[e])return ho[e];if(!Pn[e])return e;var i=Pn[e],n;for(n in i)if(i.hasOwnProperty(n)&&n in tl)return ho[e]=i[n];return e}var al=Zt("animationend"),ol=Zt("animationiteration"),rl=Zt("animationstart"),sl=Zt("transitionend"),nt="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ll=new(typeof WeakMap=="function"?WeakMap:Map);function go(e){var i=ll.get(e);return i===void 0&&(i=new Map,ll.set(e,i)),i}function an(e){var i=e,n=e;if(e.alternate)for(;i.return;)i=i.return;else{e=i;do i=e,(i.effectTag&1026)!==0&&(n=i.return),e=i.return;while(e)}return i.tag===3?n:null}function cl(e){if(e.tag===13){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function ul(e){if(an(e)!==e)throw Error(s(188))}function Pm(e){var i=e.alternate;if(!i){if(i=an(e),i===null)throw Error(s(188));return i!==e?null:e}for(var n=e,o=i;;){var l=n.return;if(l===null)break;var u=l.alternate;if(u===null){if(o=l.return,o!==null){n=o;continue}break}if(l.child===u.child){for(u=l.child;u;){if(u===n)return ul(l),e;if(u===o)return ul(l),i;u=u.sibling}throw Error(s(188))}if(n.return!==o.return)n=l,o=u;else{for(var m=!1,y=l.child;y;){if(y===n){m=!0,n=l,o=u;break}if(y===o){m=!0,o=l,n=u;break}y=y.sibling}if(!m){for(y=u.child;y;){if(y===n){m=!0,n=u,o=l;break}if(y===o){m=!0,o=u,n=l;break}y=y.sibling}if(!m)throw Error(s(189))}}if(n.alternate!==o)throw Error(s(190))}if(n.tag!==3)throw Error(s(188));return n.stateNode.current===n?e:i}function dl(e){if(e=Pm(e),!e)return null;for(var i=e;;){if(i.tag===5||i.tag===6)return i;if(i.child)i.child.return=i,i=i.child;else{if(i===e)break;for(;!i.sibling;){if(!i.return||i.return===e)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}}return null}function xn(e,i){if(i==null)throw Error(s(30));return e==null?i:Array.isArray(e)?Array.isArray(i)?(e.push.apply(e,i),e):(e.push(i),e):Array.isArray(i)?[e].concat(i):[e,i]}function jo(e,i,n){Array.isArray(e)?e.forEach(i,n):e&&i.call(n,e)}var tt=null;function xm(e){if(e){var i=e._dispatchListeners,n=e._dispatchInstances;if(Array.isArray(i))for(var o=0;o<i.length&&!e.isPropagationStopped();o++)Q(e,i[o],n[o]);else i&&Q(e,i,n);e._dispatchListeners=null,e._dispatchInstances=null,e.isPersistent()||e.constructor.release(e)}}function Vt(e){if(e!==null&&(tt=xn(tt,e)),e=tt,tt=null,e){if(jo(e,xm),tt)throw Error(s(95));if(z)throw e=g,z=!1,g=null,e}}function ko(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}function ml(e){if(!we)return!1;e="on"+e;var i=e in document;return i||(i=document.createElement("div"),i.setAttribute(e,"return;"),i=typeof i[e]=="function"),i}var $t=[];function fl(e){e.topLevelType=null,e.nativeEvent=null,e.targetInst=null,e.ancestors.length=0,10>$t.length&&$t.push(e)}function yl(e,i,n,o){if($t.length){var l=$t.pop();return l.topLevelType=e,l.eventSystemFlags=o,l.nativeEvent=i,l.targetInst=n,l}return{topLevelType:e,eventSystemFlags:o,nativeEvent:i,targetInst:n,ancestors:[]}}function zl(e){var i=e.targetInst,n=i;do{if(!n){e.ancestors.push(n);break}var o=n;if(o.tag===3)o=o.stateNode.containerInfo;else{for(;o.return;)o=o.return;o=o.tag!==3?null:o.stateNode.containerInfo}if(!o)break;i=n.tag,i!==5&&i!==6||e.ancestors.push(n),n=mt(o)}while(n);for(n=0;n<e.ancestors.length;n++){i=e.ancestors[n];var l=ko(e.nativeEvent);o=e.topLevelType;var u=e.nativeEvent,m=e.eventSystemFlags;n===0&&(m|=64);for(var y=null,j=0;j<ie.length;j++){var k=ie[j];k&&(k=k.extractEvents(o,i,u,l,m))&&(y=xn(y,k))}Vt(y)}}function bo(e,i,n){if(!n.has(e)){switch(e){case"scroll":ct(i,"scroll",!0);break;case"focus":case"blur":ct(i,"focus",!0),ct(i,"blur",!0),n.set("blur",null),n.set("focus",null);break;case"cancel":case"close":ml(e)&&ct(i,e,!0);break;case"invalid":case"submit":case"reset":break;default:nt.indexOf(e)===-1&&Ce(e,i)}n.set(e,null)}}var wl,Co,pl,vo=!1,zi=[],_i=null,Mi=null,Ii=null,at=new Map,ot=new Map,rt=[],Do="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput close cancel copy cut paste click change contextmenu reset submit".split(" "),Sm="focus blur dragenter dragleave mouseover mouseout pointerover pointerout gotpointercapture lostpointercapture".split(" ");function Gm(e,i){var n=go(i);Do.forEach(function(o){bo(o,i,n)}),Sm.forEach(function(o){bo(o,i,n)})}function To(e,i,n,o,l){return{blockedOn:e,topLevelType:i,eventSystemFlags:n|32,nativeEvent:l,container:o}}function hl(e,i){switch(e){case"focus":case"blur":_i=null;break;case"dragenter":case"dragleave":Mi=null;break;case"mouseover":case"mouseout":Ii=null;break;case"pointerover":case"pointerout":at.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":ot.delete(i.pointerId)}}function st(e,i,n,o,l,u){return e===null||e.nativeEvent!==u?(e=To(i,n,o,l,u),i!==null&&(i=ft(i),i!==null&&Co(i)),e):(e.eventSystemFlags|=o,e)}function Bm(e,i,n,o,l){switch(i){case"focus":return _i=st(_i,e,i,n,o,l),!0;case"dragenter":return Mi=st(Mi,e,i,n,o,l),!0;case"mouseover":return Ii=st(Ii,e,i,n,o,l),!0;case"pointerover":var u=l.pointerId;return at.set(u,st(at.get(u)||null,e,i,n,o,l)),!0;case"gotpointercapture":return u=l.pointerId,ot.set(u,st(ot.get(u)||null,e,i,n,o,l)),!0}return!1}function Om(e){var i=mt(e.target);if(i!==null){var n=an(i);if(n!==null){if(i=n.tag,i===13){if(i=cl(n),i!==null){e.blockedOn=i,r.unstable_runWithPriority(e.priority,function(){pl(n)});return}}else if(i===3&&n.stateNode.hydrate){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Yt(e){if(e.blockedOn!==null)return!1;var i=xo(e.topLevelType,e.eventSystemFlags,e.container,e.nativeEvent);if(i!==null){var n=ft(i);return n!==null&&Co(n),e.blockedOn=i,!1}return!0}function gl(e,i,n){Yt(e)&&n.delete(i)}function Rm(){for(vo=!1;0<zi.length;){var e=zi[0];if(e.blockedOn!==null){e=ft(e.blockedOn),e!==null&&wl(e);break}var i=xo(e.topLevelType,e.eventSystemFlags,e.container,e.nativeEvent);i!==null?e.blockedOn=i:zi.shift()}_i!==null&&Yt(_i)&&(_i=null),Mi!==null&&Yt(Mi)&&(Mi=null),Ii!==null&&Yt(Ii)&&(Ii=null),at.forEach(gl),ot.forEach(gl)}function lt(e,i){e.blockedOn===i&&(e.blockedOn=null,vo||(vo=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Rm)))}function jl(e){function i(l){return lt(l,e)}if(0<zi.length){lt(zi[0],e);for(var n=1;n<zi.length;n++){var o=zi[n];o.blockedOn===e&&(o.blockedOn=null)}}for(_i!==null&&lt(_i,e),Mi!==null&&lt(Mi,e),Ii!==null&&lt(Ii,e),at.forEach(i),ot.forEach(i),n=0;n<rt.length;n++)o=rt[n],o.blockedOn===e&&(o.blockedOn=null);for(;0<rt.length&&(n=rt[0],n.blockedOn===null);)Om(n),n.blockedOn===null&&rt.shift()}var kl={},bl=new Map,Eo=new Map,Nm=["abort","abort",al,"animationEnd",ol,"animationIteration",rl,"animationStart","canplay","canPlay","canplaythrough","canPlayThrough","durationchange","durationChange","emptied","emptied","encrypted","encrypted","ended","ended","error","error","gotpointercapture","gotPointerCapture","load","load","loadeddata","loadedData","loadedmetadata","loadedMetadata","loadstart","loadStart","lostpointercapture","lostPointerCapture","playing","playing","progress","progress","seeking","seeking","stalled","stalled","suspend","suspend","timeupdate","timeUpdate",sl,"transitionEnd","waiting","waiting"];function Ao(e,i){for(var n=0;n<e.length;n+=2){var o=e[n],l=e[n+1],u="on"+(l[0].toUpperCase()+l.slice(1));u={phasedRegistrationNames:{bubbled:u,captured:u+"Capture"},dependencies:[o],eventPriority:i},Eo.set(o,i),bl.set(o,u),kl[l]=u}}Ao("blur blur cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focus focus input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "),0),Ao("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "),1),Ao(Nm,2);for(var Cl="change selectionchange textInput compositionstart compositionend compositionupdate".split(" "),Po=0;Po<Cl.length;Po++)Eo.set(Cl[Po],0);var Fm=r.unstable_UserBlockingPriority,_m=r.unstable_runWithPriority,Qt=!0;function Ce(e,i){ct(i,e,!1)}function ct(e,i,n){var o=Eo.get(i);switch(o===void 0?2:o){case 0:o=Mm.bind(null,i,1,e);break;case 1:o=Im.bind(null,i,1,e);break;default:o=Xt.bind(null,i,1,e)}n?e.addEventListener(i,o,!0):e.addEventListener(i,o,!1)}function Mm(e,i,n,o){Oe||ue();var l=Xt,u=Oe;Oe=!0;try{Ae(l,e,i,n,o)}finally{(Oe=u)||Me()}}function Im(e,i,n,o){_m(Fm,Xt.bind(null,e,i,n,o))}function Xt(e,i,n,o){if(Qt)if(0<zi.length&&-1<Do.indexOf(e))e=To(null,e,i,n,o),zi.push(e);else{var l=xo(e,i,n,o);if(l===null)hl(e,o);else if(-1<Do.indexOf(e))e=To(l,e,i,n,o),zi.push(e);else if(!Bm(l,e,i,n,o)){hl(e,o),e=yl(e,o,null,i);try{he(zl,e)}finally{fl(e)}}}}function xo(e,i,n,o){if(n=ko(o),n=mt(n),n!==null){var l=an(n);if(l===null)n=null;else{var u=l.tag;if(u===13){if(n=cl(l),n!==null)return n;n=null}else if(u===3){if(l.stateNode.hydrate)return l.tag===3?l.stateNode.containerInfo:null;n=null}else l!==n&&(n=null)}}e=yl(e,o,n,i);try{he(zl,e)}finally{fl(e)}return null}var ut={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Jm=["Webkit","ms","Moz","O"];Object.keys(ut).forEach(function(e){Jm.forEach(function(i){i=i+e.charAt(0).toUpperCase()+e.substring(1),ut[i]=ut[e]})});function vl(e,i,n){return i==null||typeof i=="boolean"||i===""?"":n||typeof i!="number"||i===0||ut.hasOwnProperty(e)&&ut[e]?(""+i).trim():i+"px"}function Dl(e,i){e=e.style;for(var n in i)if(i.hasOwnProperty(n)){var o=n.indexOf("--")===0,l=vl(n,i[n],o);n==="float"&&(n="cssFloat"),o?e.setProperty(n,l):e[n]=l}}var Wm=a({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function So(e,i){if(i){if(Wm[e]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(s(137,e,""));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(s(60));if(!(typeof i.dangerouslySetInnerHTML=="object"&&"__html"in i.dangerouslySetInnerHTML))throw Error(s(61))}if(i.style!=null&&typeof i.style!="object")throw Error(s(62,""))}}function Go(e,i){if(e.indexOf("-")===-1)return typeof i.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Tl=el.html;function Di(e,i){e=e.nodeType===9||e.nodeType===11?e:e.ownerDocument;var n=go(e);i=oe[i];for(var o=0;o<i.length;o++)bo(i[o],e,n)}function qt(){}function Bo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function El(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Al(e,i){var n=El(e);e=0;for(var o;n;){if(n.nodeType===3){if(o=e+n.textContent.length,e<=i&&o>=i)return{node:n,offset:i-e};e=o}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=El(n)}}function Pl(e,i){return e&&i?e===i?!0:e&&e.nodeType===3?!1:i&&i.nodeType===3?Pl(e,i.parentNode):"contains"in e?e.contains(i):e.compareDocumentPosition?!!(e.compareDocumentPosition(i)&16):!1:!1}function xl(){for(var e=window,i=Bo();i instanceof e.HTMLIFrameElement;){try{var n=typeof i.contentWindow.location.href=="string"}catch{n=!1}if(n)e=i.contentWindow;else break;i=Bo(e.document)}return i}function Oo(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i&&(i==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||i==="textarea"||e.contentEditable==="true")}var Sl="$",Gl="/$",Ro="$?",No="$!",Fo=null,_o=null;function Bl(e,i){switch(e){case"button":case"input":case"select":case"textarea":return!!i.autoFocus}return!1}function Mo(e,i){return e==="textarea"||e==="option"||e==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Io=typeof setTimeout=="function"?setTimeout:void 0,Hm=typeof clearTimeout=="function"?clearTimeout:void 0;function Sn(e){for(;e!=null;e=e.nextSibling){var i=e.nodeType;if(i===1||i===3)break}return e}function Ol(e){e=e.previousSibling;for(var i=0;e;){if(e.nodeType===8){var n=e.data;if(n===Sl||n===No||n===Ro){if(i===0)return e;i--}else n===Gl&&i++}e=e.previousSibling}return null}var Jo=Math.random().toString(36).slice(2),Ji="__reactInternalInstance$"+Jo,ea="__reactEventHandlers$"+Jo,dt="__reactContainere$"+Jo;function mt(e){var i=e[Ji];if(i)return i;for(var n=e.parentNode;n;){if(i=n[dt]||n[Ji]){if(n=i.alternate,i.child!==null||n!==null&&n.child!==null)for(e=Ol(e);e!==null;){if(n=e[Ji])return n;e=Ol(e)}return i}e=n,n=e.parentNode}return null}function ft(e){return e=e[Ji]||e[dt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function on(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(s(33))}function Wo(e){return e[ea]||null}function Ti(e){do e=e.return;while(e&&e.tag!==5);return e||null}function Rl(e,i){var n=e.stateNode;if(!n)return null;var o=A(n);if(!o)return null;n=o[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(s(231,i,typeof n));return n}function Nl(e,i,n){(i=Rl(e,n.dispatchConfig.phasedRegistrationNames[i]))&&(n._dispatchListeners=xn(n._dispatchListeners,i),n._dispatchInstances=xn(n._dispatchInstances,e))}function Lm(e){if(e&&e.dispatchConfig.phasedRegistrationNames){for(var i=e._targetInst,n=[];i;)n.push(i),i=Ti(i);for(i=n.length;0<i--;)Nl(n[i],"captured",e);for(i=0;i<n.length;i++)Nl(n[i],"bubbled",e)}}function Ho(e,i,n){e&&n&&n.dispatchConfig.registrationName&&(i=Rl(e,n.dispatchConfig.registrationName))&&(n._dispatchListeners=xn(n._dispatchListeners,i),n._dispatchInstances=xn(n._dispatchInstances,e))}function Km(e){e&&e.dispatchConfig.registrationName&&Ho(e._targetInst,null,e)}function Gn(e){jo(e,Lm)}var Wi=null,Lo=null,ia=null;function Fl(){if(ia)return ia;var e,i=Lo,n=i.length,o,l="value"in Wi?Wi.value:Wi.textContent,u=l.length;for(e=0;e<n&&i[e]===l[e];e++);var m=n-e;for(o=1;o<=m&&i[n-o]===l[u-o];o++);return ia=l.slice(e,1<o?1-o:void 0)}function na(){return!0}function ta(){return!1}function Xe(e,i,n,o){this.dispatchConfig=e,this._targetInst=i,this.nativeEvent=n,e=this.constructor.Interface;for(var l in e)e.hasOwnProperty(l)&&((i=e[l])?this[l]=i(n):l==="target"?this.target=o:this[l]=n[l]);return this.isDefaultPrevented=(n.defaultPrevented!=null?n.defaultPrevented:n.returnValue===!1)?na:ta,this.isPropagationStopped=ta,this}a(Xe.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!="unknown"&&(e.returnValue=!1),this.isDefaultPrevented=na)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!="unknown"&&(e.cancelBubble=!0),this.isPropagationStopped=na)},persist:function(){this.isPersistent=na},isPersistent:ta,destructor:function(){var e=this.constructor.Interface,i;for(i in e)this[i]=null;this.nativeEvent=this._targetInst=this.dispatchConfig=null,this.isPropagationStopped=this.isDefaultPrevented=ta,this._dispatchInstances=this._dispatchListeners=null}}),Xe.Interface={type:null,target:null,currentTarget:function(){return null},eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null},Xe.extend=function(e){function i(){}function n(){return o.apply(this,arguments)}var o=this;i.prototype=o.prototype;var l=new i;return a(l,n.prototype),n.prototype=l,n.prototype.constructor=n,n.Interface=a({},o.Interface,e),n.extend=o.extend,_l(n),n},_l(Xe);function Um(e,i,n,o){if(this.eventPool.length){var l=this.eventPool.pop();return this.call(l,e,i,n,o),l}return new this(e,i,n,o)}function Zm(e){if(!(e instanceof this))throw Error(s(279));e.destructor(),10>this.eventPool.length&&this.eventPool.push(e)}function _l(e){e.eventPool=[],e.getPooled=Um,e.release=Zm}var Vm=Xe.extend({data:null}),$m=Xe.extend({data:null}),Ym=[9,13,27,32],Ko=we&&"CompositionEvent"in window,yt=null;we&&"documentMode"in document&&(yt=document.documentMode);var Qm=we&&"TextEvent"in window&&!yt,Ml=we&&(!Ko||yt&&8<yt&&11>=yt),Il=" ",Ei={beforeInput:{phasedRegistrationNames:{bubbled:"onBeforeInput",captured:"onBeforeInputCapture"},dependencies:["compositionend","keypress","textInput","paste"]},compositionEnd:{phasedRegistrationNames:{bubbled:"onCompositionEnd",captured:"onCompositionEndCapture"},dependencies:"blur compositionend keydown keypress keyup mousedown".split(" ")},compositionStart:{phasedRegistrationNames:{bubbled:"onCompositionStart",captured:"onCompositionStartCapture"},dependencies:"blur compositionstart keydown keypress keyup mousedown".split(" ")},compositionUpdate:{phasedRegistrationNames:{bubbled:"onCompositionUpdate",captured:"onCompositionUpdateCapture"},dependencies:"blur compositionupdate keydown keypress keyup mousedown".split(" ")}},Jl=!1;function Wl(e,i){switch(e){case"keyup":return Ym.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"blur":return!0;default:return!1}}function Hl(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Bn=!1;function Xm(e,i){switch(e){case"compositionend":return Hl(i);case"keypress":return i.which!==32?null:(Jl=!0,Il);case"textInput":return e=i.data,e===Il&&Jl?null:e;default:return null}}function qm(e,i){if(Bn)return e==="compositionend"||!Ko&&Wl(e,i)?(e=Fl(),ia=Lo=Wi=null,Bn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Ml&&i.locale!=="ko"?null:i.data;default:return null}}var ef={eventTypes:Ei,extractEvents:function(e,i,n,o){var l;if(Ko)e:{switch(e){case"compositionstart":var u=Ei.compositionStart;break e;case"compositionend":u=Ei.compositionEnd;break e;case"compositionupdate":u=Ei.compositionUpdate;break e}u=void 0}else Bn?Wl(e,n)&&(u=Ei.compositionEnd):e==="keydown"&&n.keyCode===229&&(u=Ei.compositionStart);return u?(Ml&&n.locale!=="ko"&&(Bn||u!==Ei.compositionStart?u===Ei.compositionEnd&&Bn&&(l=Fl()):(Wi=o,Lo="value"in Wi?Wi.value:Wi.textContent,Bn=!0)),u=Vm.getPooled(u,i,n,o),l?u.data=l:(l=Hl(n),l!==null&&(u.data=l)),Gn(u),l=u):l=null,(e=Qm?Xm(e,n):qm(e,n))?(i=$m.getPooled(Ei.beforeInput,i,n,o),i.data=e,Gn(i)):i=null,l===null?i:i===null?l:[l,i]}},nf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ll(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i==="input"?!!nf[e.type]:i==="textarea"}var Kl={change:{phasedRegistrationNames:{bubbled:"onChange",captured:"onChangeCapture"},dependencies:"blur change click focus input keydown keyup selectionchange".split(" ")}};function Ul(e,i,n){return e=Xe.getPooled(Kl.change,e,i,n),e.type="change",ye(n),Gn(e),e}var zt=null,wt=null;function tf(e){Vt(e)}function aa(e){var i=on(e);if(Zs(i))return e}function af(e,i){if(e==="change")return i}var Uo=!1;we&&(Uo=ml("input")&&(!document.documentMode||9<document.documentMode));function Zl(){zt&&(zt.detachEvent("onpropertychange",Vl),wt=zt=null)}function Vl(e){if(e.propertyName==="value"&&aa(wt))if(e=Ul(wt,e,ko(e)),Oe)Vt(e);else{Oe=!0;try{Ee(tf,e)}finally{Oe=!1,Me()}}}function of(e,i,n){e==="focus"?(Zl(),zt=i,wt=n,zt.attachEvent("onpropertychange",Vl)):e==="blur"&&Zl()}function rf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return aa(wt)}function sf(e,i){if(e==="click")return aa(i)}function lf(e,i){if(e==="input"||e==="change")return aa(i)}var cf={eventTypes:Kl,_isInputEventSupported:Uo,extractEvents:function(e,i,n,o){var l=i?on(i):window,u=l.nodeName&&l.nodeName.toLowerCase();if(u==="select"||u==="input"&&l.type==="file")var m=af;else if(Ll(l))if(Uo)m=lf;else{m=rf;var y=of}else(u=l.nodeName)&&u.toLowerCase()==="input"&&(l.type==="checkbox"||l.type==="radio")&&(m=sf);if(m&&(m=m(e,i)))return Ul(m,n,o);y&&y(e,l,i),e==="blur"&&(e=l._wrapperState)&&e.controlled&&l.type==="number"&&yo(l,"number",l.value)}},pt=Xe.extend({view:null,detail:null}),uf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function df(e){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(e):(e=uf[e])?!!i[e]:!1}function Zo(){return df}var $l=0,Yl=0,Ql=!1,Xl=!1,ht=pt.extend({screenX:null,screenY:null,clientX:null,clientY:null,pageX:null,pageY:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,getModifierState:Zo,button:null,buttons:null,relatedTarget:function(e){return e.relatedTarget||(e.fromElement===e.srcElement?e.toElement:e.fromElement)},movementX:function(e){if("movementX"in e)return e.movementX;var i=$l;return $l=e.screenX,Ql?e.type==="mousemove"?e.screenX-i:0:(Ql=!0,0)},movementY:function(e){if("movementY"in e)return e.movementY;var i=Yl;return Yl=e.screenY,Xl?e.type==="mousemove"?e.screenY-i:0:(Xl=!0,0)}}),ql=ht.extend({pointerId:null,width:null,height:null,pressure:null,tangentialPressure:null,tiltX:null,tiltY:null,twist:null,pointerType:null,isPrimary:null}),gt={mouseEnter:{registrationName:"onMouseEnter",dependencies:["mouseout","mouseover"]},mouseLeave:{registrationName:"onMouseLeave",dependencies:["mouseout","mouseover"]},pointerEnter:{registrationName:"onPointerEnter",dependencies:["pointerout","pointerover"]},pointerLeave:{registrationName:"onPointerLeave",dependencies:["pointerout","pointerover"]}},mf={eventTypes:gt,extractEvents:function(e,i,n,o,l){var u=e==="mouseover"||e==="pointerover",m=e==="mouseout"||e==="pointerout";if(u&&(l&32)===0&&(n.relatedTarget||n.fromElement)||!m&&!u)return null;if(u=o.window===o?o:(u=o.ownerDocument)?u.defaultView||u.parentWindow:window,m){if(m=i,i=(i=n.relatedTarget||n.toElement)?mt(i):null,i!==null){var y=an(i);(i!==y||i.tag!==5&&i.tag!==6)&&(i=null)}}else m=null;if(m===i)return null;if(e==="mouseout"||e==="mouseover")var j=ht,k=gt.mouseLeave,R=gt.mouseEnter,N="mouse";else(e==="pointerout"||e==="pointerover")&&(j=ql,k=gt.pointerLeave,R=gt.pointerEnter,N="pointer");if(e=m==null?u:on(m),u=i==null?u:on(i),k=j.getPooled(k,m,n,o),k.type=N+"leave",k.target=e,k.relatedTarget=u,n=j.getPooled(R,i,n,o),n.type=N+"enter",n.target=u,n.relatedTarget=e,o=m,N=i,o&&N)e:{for(j=o,R=N,m=0,e=j;e;e=Ti(e))m++;for(e=0,i=R;i;i=Ti(i))e++;for(;0<m-e;)j=Ti(j),m--;for(;0<e-m;)R=Ti(R),e--;for(;m--;){if(j===R||j===R.alternate)break e;j=Ti(j),R=Ti(R)}j=null}else j=null;for(R=j,j=[];o&&o!==R&&(m=o.alternate,!(m!==null&&m===R));)j.push(o),o=Ti(o);for(o=[];N&&N!==R&&(m=N.alternate,!(m!==null&&m===R));)o.push(N),N=Ti(N);for(N=0;N<j.length;N++)Ho(j[N],"bubbled",k);for(N=o.length;0<N--;)Ho(o[N],"captured",n);return(l&64)===0?[k]:[k,n]}};function ff(e,i){return e===i&&(e!==0||1/e===1/i)||e!==e&&i!==i}var rn=typeof Object.is=="function"?Object.is:ff,yf=Object.prototype.hasOwnProperty;function jt(e,i){if(rn(e,i))return!0;if(typeof e!="object"||e===null||typeof i!="object"||i===null)return!1;var n=Object.keys(e),o=Object.keys(i);if(n.length!==o.length)return!1;for(o=0;o<n.length;o++)if(!yf.call(i,n[o])||!rn(e[n[o]],i[n[o]]))return!1;return!0}var zf=we&&"documentMode"in document&&11>=document.documentMode,ec={select:{phasedRegistrationNames:{bubbled:"onSelect",captured:"onSelectCapture"},dependencies:"blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(" ")}},On=null,Vo=null,kt=null,$o=!1;function ic(e,i){var n=i.window===i?i.document:i.nodeType===9?i:i.ownerDocument;return $o||On==null||On!==Bo(n)?null:(n=On,"selectionStart"in n&&Oo(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),kt&&jt(kt,n)?null:(kt=n,e=Xe.getPooled(ec.select,Vo,e,i),e.type="select",e.target=On,Gn(e),e))}var wf={eventTypes:ec,extractEvents:function(e,i,n,o,l,u){if(l=u||(o.window===o?o.document:o.nodeType===9?o:o.ownerDocument),!(u=!l)){e:{l=go(l),u=oe.onSelect;for(var m=0;m<u.length;m++)if(!l.has(u[m])){l=!1;break e}l=!0}u=!l}if(u)return null;switch(l=i?on(i):window,e){case"focus":(Ll(l)||l.contentEditable==="true")&&(On=l,Vo=i,kt=null);break;case"blur":kt=Vo=On=null;break;case"mousedown":$o=!0;break;case"contextmenu":case"mouseup":case"dragend":return $o=!1,ic(n,o);case"selectionchange":if(zf)break;case"keydown":case"keyup":return ic(n,o)}return null}},pf=Xe.extend({animationName:null,elapsedTime:null,pseudoElement:null}),hf=Xe.extend({clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),gf=pt.extend({relatedTarget:null});function oa(e){var i=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&i===13&&(e=13)):e=i,e===10&&(e=13),32<=e||e===13?e:0}var jf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},kf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},bf=pt.extend({key:function(e){if(e.key){var i=jf[e.key]||e.key;if(i!=="Unidentified")return i}return e.type==="keypress"?(e=oa(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?kf[e.keyCode]||"Unidentified":""},location:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,repeat:null,locale:null,getModifierState:Zo,charCode:function(e){return e.type==="keypress"?oa(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?oa(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Cf=ht.extend({dataTransfer:null}),vf=pt.extend({touches:null,targetTouches:null,changedTouches:null,altKey:null,metaKey:null,ctrlKey:null,shiftKey:null,getModifierState:Zo}),Df=Xe.extend({propertyName:null,elapsedTime:null,pseudoElement:null}),Tf=ht.extend({deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:null,deltaMode:null}),Ef={eventTypes:kl,extractEvents:function(e,i,n,o){var l=bl.get(e);if(!l)return null;switch(e){case"keypress":if(oa(n)===0)return null;case"keydown":case"keyup":e=bf;break;case"blur":case"focus":e=gf;break;case"click":if(n.button===2)return null;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":e=ht;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":e=Cf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":e=vf;break;case al:case ol:case rl:e=pf;break;case sl:e=Df;break;case"scroll":e=pt;break;case"wheel":e=Tf;break;case"copy":case"cut":case"paste":e=hf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":e=ql;break;default:e=Xe}return i=e.getPooled(l,i,n,o),Gn(i),i}};if(U)throw Error(s(101));U=Array.prototype.slice.call("ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" ")),X();var Af=ft;A=Wo,H=Af,W=on,re({SimpleEventPlugin:Ef,EnterLeaveEventPlugin:mf,ChangeEventPlugin:cf,SelectEventPlugin:wf,BeforeInputEventPlugin:ef});var Yo=[],Rn=-1;function je(e){0>Rn||(e.current=Yo[Rn],Yo[Rn]=null,Rn--)}function Pe(e,i){Rn++,Yo[Rn]=e.current,e.current=i}var Hi={},Je={current:Hi},Ze={current:!1},sn=Hi;function Nn(e,i){var n=e.type.contextTypes;if(!n)return Hi;var o=e.stateNode;if(o&&o.__reactInternalMemoizedUnmaskedChildContext===i)return o.__reactInternalMemoizedMaskedChildContext;var l={},u;for(u in n)l[u]=i[u];return o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=l),l}function Ve(e){return e=e.childContextTypes,e!=null}function ra(){je(Ze),je(Je)}function nc(e,i,n){if(Je.current!==Hi)throw Error(s(168));Pe(Je,i),Pe(Ze,n)}function tc(e,i,n){var o=e.stateNode;if(e=i.childContextTypes,typeof o.getChildContext!="function")return n;o=o.getChildContext();for(var l in o)if(!(l in e))throw Error(s(108,vi(i)||"Unknown",l));return a({},n,{},o)}function sa(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Hi,sn=Je.current,Pe(Je,e),Pe(Ze,Ze.current),!0}function ac(e,i,n){var o=e.stateNode;if(!o)throw Error(s(169));n?(e=tc(e,i,sn),o.__reactInternalMemoizedMergedChildContext=e,je(Ze),je(Je),Pe(Je,e)):je(Ze),Pe(Ze,n)}var Pf=r.unstable_runWithPriority,Qo=r.unstable_scheduleCallback,oc=r.unstable_cancelCallback,rc=r.unstable_requestPaint,Xo=r.unstable_now,xf=r.unstable_getCurrentPriorityLevel,la=r.unstable_ImmediatePriority,sc=r.unstable_UserBlockingPriority,lc=r.unstable_NormalPriority,cc=r.unstable_LowPriority,uc=r.unstable_IdlePriority,dc={},Sf=r.unstable_shouldYield,Gf=rc!==void 0?rc:function(){},Ai=null,ca=null,qo=!1,mc=Xo(),oi=1e4>mc?Xo:function(){return Xo()-mc};function ua(){switch(xf()){case la:return 99;case sc:return 98;case lc:return 97;case cc:return 96;case uc:return 95;default:throw Error(s(332))}}function fc(e){switch(e){case 99:return la;case 98:return sc;case 97:return lc;case 96:return cc;case 95:return uc;default:throw Error(s(332))}}function Li(e,i){return e=fc(e),Pf(e,i)}function yc(e,i,n){return e=fc(e),Qo(e,i,n)}function zc(e){return Ai===null?(Ai=[e],ca=Qo(la,wc)):Ai.push(e),dc}function wi(){if(ca!==null){var e=ca;ca=null,oc(e)}wc()}function wc(){if(!qo&&Ai!==null){qo=!0;var e=0;try{var i=Ai;Li(99,function(){for(;e<i.length;e++){var n=i[e];do n=n(!0);while(n!==null)}}),Ai=null}catch(n){throw Ai!==null&&(Ai=Ai.slice(e+1)),Qo(la,wi),n}finally{qo=!1}}}function da(e,i,n){return n/=10,1073741821-(((1073741821-e+i/10)/n|0)+1)*n}function di(e,i){if(e&&e.defaultProps){i=a({},i),e=e.defaultProps;for(var n in e)i[n]===void 0&&(i[n]=e[n])}return i}var ma={current:null},fa=null,Fn=null,ya=null;function er(){ya=Fn=fa=null}function ir(e){var i=ma.current;je(ma),e.type._context._currentValue=i}function pc(e,i){for(;e!==null;){var n=e.alternate;if(e.childExpirationTime<i)e.childExpirationTime=i,n!==null&&n.childExpirationTime<i&&(n.childExpirationTime=i);else if(n!==null&&n.childExpirationTime<i)n.childExpirationTime=i;else break;e=e.return}}function _n(e,i){fa=e,ya=Fn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.expirationTime>=i&&(hi=!0),e.firstContext=null)}function ri(e,i){if(ya!==e&&i!==!1&&i!==0)if((typeof i!="number"||i===1073741823)&&(ya=e,i=1073741823),i={context:e,observedBits:i,next:null},Fn===null){if(fa===null)throw Error(s(308));Fn=i,fa.dependencies={expirationTime:0,firstContext:i,responders:null}}else Fn=Fn.next=i;return e._currentValue}var Ki=!1;function nr(e){e.updateQueue={baseState:e.memoizedState,baseQueue:null,shared:{pending:null},effects:null}}function tr(e,i){e=e.updateQueue,i.updateQueue===e&&(i.updateQueue={baseState:e.baseState,baseQueue:e.baseQueue,shared:e.shared,effects:e.effects})}function Ui(e,i){return e={expirationTime:e,suspenseConfig:i,tag:0,payload:null,callback:null,next:null},e.next=e}function Zi(e,i){if(e=e.updateQueue,e!==null){e=e.shared;var n=e.pending;n===null?i.next=i:(i.next=n.next,n.next=i),e.pending=i}}function hc(e,i){var n=e.alternate;n!==null&&tr(n,e),e=e.updateQueue,n=e.baseQueue,n===null?(e.baseQueue=i.next=i,i.next=i):(i.next=n.next,n.next=i)}function bt(e,i,n,o){var l=e.updateQueue;Ki=!1;var u=l.baseQueue,m=l.shared.pending;if(m!==null){if(u!==null){var y=u.next;u.next=m.next,m.next=y}u=m,l.shared.pending=null,y=e.alternate,y!==null&&(y=y.updateQueue,y!==null&&(y.baseQueue=m))}if(u!==null){y=u.next;var j=l.baseState,k=0,R=null,N=null,ae=null;if(y!==null){var de=y;do{if(m=de.expirationTime,m<o){var li={expirationTime:de.expirationTime,suspenseConfig:de.suspenseConfig,tag:de.tag,payload:de.payload,callback:de.callback,next:null};ae===null?(N=ae=li,R=j):ae=ae.next=li,m>k&&(k=m)}else{ae!==null&&(ae=ae.next={expirationTime:1073741823,suspenseConfig:de.suspenseConfig,tag:de.tag,payload:de.payload,callback:de.callback,next:null}),yu(m,de.suspenseConfig);e:{var _e=e,h=de;switch(m=i,li=n,h.tag){case 1:if(_e=h.payload,typeof _e=="function"){j=_e.call(li,j,m);break e}j=_e;break e;case 3:_e.effectTag=_e.effectTag&-4097|64;case 0:if(_e=h.payload,m=typeof _e=="function"?_e.call(li,j,m):_e,m==null)break e;j=a({},j,m);break e;case 2:Ki=!0}}de.callback!==null&&(e.effectTag|=32,m=l.effects,m===null?l.effects=[de]:m.push(de))}if(de=de.next,de===null||de===y){if(m=l.shared.pending,m===null)break;de=u.next=m.next,m.next=y,l.baseQueue=u=m,l.shared.pending=null}}while(!0)}ae===null?R=j:ae.next=N,l.baseState=R,l.baseQueue=ae,Ja(k),e.expirationTime=k,e.memoizedState=j}}function gc(e,i,n){if(e=i.effects,i.effects=null,e!==null)for(i=0;i<e.length;i++){var o=e[i],l=o.callback;if(l!==null){if(o.callback=null,o=l,l=n,typeof o!="function")throw Error(s(191,o));o.call(l)}}}var Ct=te.ReactCurrentBatchConfig,jc=new t.Component().refs;function za(e,i,n,o){i=e.memoizedState,n=n(o,i),n=n==null?i:a({},i,n),e.memoizedState=n,e.expirationTime===0&&(e.updateQueue.baseState=n)}var wa={isMounted:function(e){return(e=e._reactInternalFiber)?an(e)===e:!1},enqueueSetState:function(e,i,n){e=e._reactInternalFiber;var o=ji(),l=Ct.suspense;o=fn(o,e,l),l=Ui(o,l),l.payload=i,n!=null&&(l.callback=n),Zi(e,l),Qi(e,o)},enqueueReplaceState:function(e,i,n){e=e._reactInternalFiber;var o=ji(),l=Ct.suspense;o=fn(o,e,l),l=Ui(o,l),l.tag=1,l.payload=i,n!=null&&(l.callback=n),Zi(e,l),Qi(e,o)},enqueueForceUpdate:function(e,i){e=e._reactInternalFiber;var n=ji(),o=Ct.suspense;n=fn(n,e,o),o=Ui(n,o),o.tag=2,i!=null&&(o.callback=i),Zi(e,o),Qi(e,n)}};function kc(e,i,n,o,l,u,m){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,u,m):i.prototype&&i.prototype.isPureReactComponent?!jt(n,o)||!jt(l,u):!0}function bc(e,i,n){var o=!1,l=Hi,u=i.contextType;return typeof u=="object"&&u!==null?u=ri(u):(l=Ve(i)?sn:Je.current,o=i.contextTypes,u=(o=o!=null)?Nn(e,l):Hi),i=new i(n,u),e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=wa,e.stateNode=i,i._reactInternalFiber=e,o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=u),i}function Cc(e,i,n,o){e=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(n,o),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(n,o),i.state!==e&&wa.enqueueReplaceState(i,i.state,null)}function ar(e,i,n,o){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs=jc,nr(e);var u=i.contextType;typeof u=="object"&&u!==null?l.context=ri(u):(u=Ve(i)?sn:Je.current,l.context=Nn(e,u)),bt(e,n,l,o),l.state=e.memoizedState,u=i.getDerivedStateFromProps,typeof u=="function"&&(za(e,i,u,n),l.state=e.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(i=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),i!==l.state&&wa.enqueueReplaceState(l,l.state,null),bt(e,n,l,o),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.effectTag|=4)}var pa=Array.isArray;function vt(e,i,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(s(309));var o=n.stateNode}if(!o)throw Error(s(147,e));var l=""+e;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===l?i.ref:(i=function(u){var m=o.refs;m===jc&&(m=o.refs={}),u===null?delete m[l]:m[l]=u},i._stringRef=l,i)}if(typeof e!="string")throw Error(s(284));if(!n._owner)throw Error(s(290,e))}return e}function ha(e,i){if(e.type!=="textarea")throw Error(s(31,Object.prototype.toString.call(i)==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":i,""))}function vc(e){function i(h,p){if(e){var v=h.lastEffect;v!==null?(v.nextEffect=p,h.lastEffect=p):h.firstEffect=h.lastEffect=p,p.nextEffect=null,p.effectTag=8}}function n(h,p){if(!e)return null;for(;p!==null;)i(h,p),p=p.sibling;return null}function o(h,p){for(h=new Map;p!==null;)p.key!==null?h.set(p.key,p):h.set(p.index,p),p=p.sibling;return h}function l(h,p){return h=pn(h,p),h.index=0,h.sibling=null,h}function u(h,p,v){return h.index=v,e?(v=h.alternate,v!==null?(v=v.index,v<p?(h.effectTag=2,p):v):(h.effectTag=2,p)):p}function m(h){return e&&h.alternate===null&&(h.effectTag=2),h}function y(h,p,v,x){return p===null||p.tag!==6?(p=Mr(v,h.mode,x),p.return=h,p):(p=l(p,v),p.return=h,p)}function j(h,p,v,x){return p!==null&&p.elementType===v.type?(x=l(p,v.props),x.ref=vt(h,p,v),x.return=h,x):(x=Wa(v.type,v.key,v.props,null,h.mode,x),x.ref=vt(h,p,v),x.return=h,x)}function k(h,p,v,x){return p===null||p.tag!==4||p.stateNode.containerInfo!==v.containerInfo||p.stateNode.implementation!==v.implementation?(p=Ir(v,h.mode,x),p.return=h,p):(p=l(p,v.children||[]),p.return=h,p)}function R(h,p,v,x,B){return p===null||p.tag!==7?(p=Xi(v,h.mode,x,B),p.return=h,p):(p=l(p,v),p.return=h,p)}function N(h,p,v){if(typeof p=="string"||typeof p=="number")return p=Mr(""+p,h.mode,v),p.return=h,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Tn:return v=Wa(p.type,p.key,p.props,null,h.mode,v),v.ref=vt(h,null,p),v.return=h,v;case Ni:return p=Ir(p,h.mode,v),p.return=h,p}if(pa(p)||et(p))return p=Xi(p,h.mode,v,null),p.return=h,p;ha(h,p)}return null}function ae(h,p,v,x){var B=p!==null?p.key:null;if(typeof v=="string"||typeof v=="number")return B!==null?null:y(h,p,""+v,x);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Tn:return v.key===B?v.type===Ci?R(h,p,v.props.children,x,B):j(h,p,v,x):null;case Ni:return v.key===B?k(h,p,v,x):null}if(pa(v)||et(v))return B!==null?null:R(h,p,v,x,null);ha(h,v)}return null}function de(h,p,v,x,B){if(typeof x=="string"||typeof x=="number")return h=h.get(v)||null,y(p,h,""+x,B);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Tn:return h=h.get(x.key===null?v:x.key)||null,x.type===Ci?R(p,h,x.props.children,B,x.key):j(p,h,x,B);case Ni:return h=h.get(x.key===null?v:x.key)||null,k(p,h,x,B)}if(pa(x)||et(x))return h=h.get(v)||null,R(p,h,x,B,null);ha(p,x)}return null}function li(h,p,v,x){for(var B=null,F=null,L=p,se=p=0,ve=null;L!==null&&se<v.length;se++){L.index>se?(ve=L,L=null):ve=L.sibling;var ee=ae(h,L,v[se],x);if(ee===null){L===null&&(L=ve);break}e&&L&&ee.alternate===null&&i(h,L),p=u(ee,p,se),F===null?B=ee:F.sibling=ee,F=ee,L=ve}if(se===v.length)return n(h,L),B;if(L===null){for(;se<v.length;se++)L=N(h,v[se],x),L!==null&&(p=u(L,p,se),F===null?B=L:F.sibling=L,F=L);return B}for(L=o(h,L);se<v.length;se++)ve=de(L,h,se,v[se],x),ve!==null&&(e&&ve.alternate!==null&&L.delete(ve.key===null?se:ve.key),p=u(ve,p,se),F===null?B=ve:F.sibling=ve,F=ve);return e&&L.forEach(function(qi){return i(h,qi)}),B}function _e(h,p,v,x){var B=et(v);if(typeof B!="function")throw Error(s(150));if(v=B.call(v),v==null)throw Error(s(151));for(var F=B=null,L=p,se=p=0,ve=null,ee=v.next();L!==null&&!ee.done;se++,ee=v.next()){L.index>se?(ve=L,L=null):ve=L.sibling;var qi=ae(h,L,ee.value,x);if(qi===null){L===null&&(L=ve);break}e&&L&&qi.alternate===null&&i(h,L),p=u(qi,p,se),F===null?B=qi:F.sibling=qi,F=qi,L=ve}if(ee.done)return n(h,L),B;if(L===null){for(;!ee.done;se++,ee=v.next())ee=N(h,ee.value,x),ee!==null&&(p=u(ee,p,se),F===null?B=ee:F.sibling=ee,F=ee);return B}for(L=o(h,L);!ee.done;se++,ee=v.next())ee=de(L,h,se,ee.value,x),ee!==null&&(e&&ee.alternate!==null&&L.delete(ee.key===null?se:ee.key),p=u(ee,p,se),F===null?B=ee:F.sibling=ee,F=ee);return e&&L.forEach(function(ry){return i(h,ry)}),B}return function(h,p,v,x){var B=typeof v=="object"&&v!==null&&v.type===Ci&&v.key===null;B&&(v=v.props.children);var F=typeof v=="object"&&v!==null;if(F)switch(v.$$typeof){case Tn:e:{for(F=v.key,B=p;B!==null;){if(B.key===F){switch(B.tag){case 7:if(v.type===Ci){n(h,B.sibling),p=l(B,v.props.children),p.return=h,h=p;break e}break;default:if(B.elementType===v.type){n(h,B.sibling),p=l(B,v.props),p.ref=vt(h,B,v),p.return=h,h=p;break e}}n(h,B);break}else i(h,B);B=B.sibling}v.type===Ci?(p=Xi(v.props.children,h.mode,x,v.key),p.return=h,h=p):(x=Wa(v.type,v.key,v.props,null,h.mode,x),x.ref=vt(h,p,v),x.return=h,h=x)}return m(h);case Ni:e:{for(B=v.key;p!==null;){if(p.key===B)if(p.tag===4&&p.stateNode.containerInfo===v.containerInfo&&p.stateNode.implementation===v.implementation){n(h,p.sibling),p=l(p,v.children||[]),p.return=h,h=p;break e}else{n(h,p);break}else i(h,p);p=p.sibling}p=Ir(v,h.mode,x),p.return=h,h=p}return m(h)}if(typeof v=="string"||typeof v=="number")return v=""+v,p!==null&&p.tag===6?(n(h,p.sibling),p=l(p,v),p.return=h,h=p):(n(h,p),p=Mr(v,h.mode,x),p.return=h,h=p),m(h);if(pa(v))return li(h,p,v,x);if(et(v))return _e(h,p,v,x);if(F&&ha(h,v),typeof v>"u"&&!B)switch(h.tag){case 1:case 0:throw h=h.type,Error(s(152,h.displayName||h.name||"Component"))}return n(h,p)}}var Mn=vc(!0),or=vc(!1),Dt={},pi={current:Dt},Tt={current:Dt},Et={current:Dt};function ln(e){if(e===Dt)throw Error(s(174));return e}function rr(e,i){switch(Pe(Et,i),Pe(Tt,e),Pe(pi,Dt),e=i.nodeType,e){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:po(null,"");break;default:e=e===8?i.parentNode:i,i=e.namespaceURI||null,e=e.tagName,i=po(i,e)}je(pi),Pe(pi,i)}function In(){je(pi),je(Tt),je(Et)}function Dc(e){ln(Et.current);var i=ln(pi.current),n=po(i,e.type);i!==n&&(Pe(Tt,e),Pe(pi,n))}function sr(e){Tt.current===e&&(je(pi),je(Tt))}var Te={current:0};function ga(e){for(var i=e;i!==null;){if(i.tag===13){var n=i.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data===Ro||n.data===No))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.effectTag&64)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}function lr(e,i){return{responder:e,props:i}}var ja=te.ReactCurrentDispatcher,si=te.ReactCurrentBatchConfig,Vi=0,Ge=null,We=null,He=null,ka=!1;function qe(){throw Error(s(321))}function cr(e,i){if(i===null)return!1;for(var n=0;n<i.length&&n<e.length;n++)if(!rn(e[n],i[n]))return!1;return!0}function ur(e,i,n,o,l,u){if(Vi=u,Ge=i,i.memoizedState=null,i.updateQueue=null,i.expirationTime=0,ja.current=e===null||e.memoizedState===null?Bf:Of,e=n(o,l),i.expirationTime===Vi){u=0;do{if(i.expirationTime=0,!(25>u))throw Error(s(301));u+=1,He=We=null,i.updateQueue=null,ja.current=Rf,e=n(o,l)}while(i.expirationTime===Vi)}if(ja.current=Ta,i=We!==null&&We.next!==null,Vi=0,He=We=Ge=null,ka=!1,i)throw Error(s(300));return e}function Jn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return He===null?Ge.memoizedState=He=e:He=He.next=e,He}function Wn(){if(We===null){var e=Ge.alternate;e=e!==null?e.memoizedState:null}else e=We.next;var i=He===null?Ge.memoizedState:He.next;if(i!==null)He=i,We=e;else{if(e===null)throw Error(s(310));We=e,e={memoizedState:We.memoizedState,baseState:We.baseState,baseQueue:We.baseQueue,queue:We.queue,next:null},He===null?Ge.memoizedState=He=e:He=He.next=e}return He}function cn(e,i){return typeof i=="function"?i(e):i}function ba(e){var i=Wn(),n=i.queue;if(n===null)throw Error(s(311));n.lastRenderedReducer=e;var o=We,l=o.baseQueue,u=n.pending;if(u!==null){if(l!==null){var m=l.next;l.next=u.next,u.next=m}o.baseQueue=l=u,n.pending=null}if(l!==null){l=l.next,o=o.baseState;var y=m=u=null,j=l;do{var k=j.expirationTime;if(k<Vi){var R={expirationTime:j.expirationTime,suspenseConfig:j.suspenseConfig,action:j.action,eagerReducer:j.eagerReducer,eagerState:j.eagerState,next:null};y===null?(m=y=R,u=o):y=y.next=R,k>Ge.expirationTime&&(Ge.expirationTime=k,Ja(k))}else y!==null&&(y=y.next={expirationTime:1073741823,suspenseConfig:j.suspenseConfig,action:j.action,eagerReducer:j.eagerReducer,eagerState:j.eagerState,next:null}),yu(k,j.suspenseConfig),o=j.eagerReducer===e?j.eagerState:e(o,j.action);j=j.next}while(j!==null&&j!==l);y===null?u=o:y.next=m,rn(o,i.memoizedState)||(hi=!0),i.memoizedState=o,i.baseState=u,i.baseQueue=y,n.lastRenderedState=o}return[i.memoizedState,n.dispatch]}function Ca(e){var i=Wn(),n=i.queue;if(n===null)throw Error(s(311));n.lastRenderedReducer=e;var o=n.dispatch,l=n.pending,u=i.memoizedState;if(l!==null){n.pending=null;var m=l=l.next;do u=e(u,m.action),m=m.next;while(m!==l);rn(u,i.memoizedState)||(hi=!0),i.memoizedState=u,i.baseQueue===null&&(i.baseState=u),n.lastRenderedState=u}return[u,o]}function dr(e){var i=Jn();return typeof e=="function"&&(e=e()),i.memoizedState=i.baseState=e,e=i.queue={pending:null,dispatch:null,lastRenderedReducer:cn,lastRenderedState:e},e=e.dispatch=Bc.bind(null,Ge,e),[i.memoizedState,e]}function mr(e,i,n,o){return e={tag:e,create:i,destroy:n,deps:o,next:null},i=Ge.updateQueue,i===null?(i={lastEffect:null},Ge.updateQueue=i,i.lastEffect=e.next=e):(n=i.lastEffect,n===null?i.lastEffect=e.next=e:(o=n.next,n.next=e,e.next=o,i.lastEffect=e)),e}function Tc(){return Wn().memoizedState}function fr(e,i,n,o){var l=Jn();Ge.effectTag|=e,l.memoizedState=mr(1|i,n,void 0,o===void 0?null:o)}function yr(e,i,n,o){var l=Wn();o=o===void 0?null:o;var u=void 0;if(We!==null){var m=We.memoizedState;if(u=m.destroy,o!==null&&cr(o,m.deps)){mr(i,n,u,o);return}}Ge.effectTag|=e,l.memoizedState=mr(1|i,n,u,o)}function Ec(e,i){return fr(516,4,e,i)}function va(e,i){return yr(516,4,e,i)}function Ac(e,i){return yr(4,2,e,i)}function Pc(e,i){if(typeof i=="function")return e=e(),i(e),function(){i(null)};if(i!=null)return e=e(),i.current=e,function(){i.current=null}}function xc(e,i,n){return n=n!=null?n.concat([e]):null,yr(4,2,Pc.bind(null,i,e),n)}function zr(){}function Sc(e,i){return Jn().memoizedState=[e,i===void 0?null:i],e}function Da(e,i){var n=Wn();i=i===void 0?null:i;var o=n.memoizedState;return o!==null&&i!==null&&cr(i,o[1])?o[0]:(n.memoizedState=[e,i],e)}function Gc(e,i){var n=Wn();i=i===void 0?null:i;var o=n.memoizedState;return o!==null&&i!==null&&cr(i,o[1])?o[0]:(e=e(),n.memoizedState=[e,i],e)}function wr(e,i,n){var o=ua();Li(98>o?98:o,function(){e(!0)}),Li(97<o?97:o,function(){var l=si.suspense;si.suspense=i===void 0?null:i;try{e(!1),n()}finally{si.suspense=l}})}function Bc(e,i,n){var o=ji(),l=Ct.suspense;o=fn(o,e,l),l={expirationTime:o,suspenseConfig:l,action:n,eagerReducer:null,eagerState:null,next:null};var u=i.pending;if(u===null?l.next=l:(l.next=u.next,u.next=l),i.pending=l,u=e.alternate,e===Ge||u!==null&&u===Ge)ka=!0,l.expirationTime=Vi,Ge.expirationTime=Vi;else{if(e.expirationTime===0&&(u===null||u.expirationTime===0)&&(u=i.lastRenderedReducer,u!==null))try{var m=i.lastRenderedState,y=u(m,n);if(l.eagerReducer=u,l.eagerState=y,rn(y,m))return}catch{}Qi(e,o)}}var Ta={readContext:ri,useCallback:qe,useContext:qe,useEffect:qe,useImperativeHandle:qe,useLayoutEffect:qe,useMemo:qe,useReducer:qe,useRef:qe,useState:qe,useDebugValue:qe,useResponder:qe,useDeferredValue:qe,useTransition:qe},Bf={readContext:ri,useCallback:Sc,useContext:ri,useEffect:Ec,useImperativeHandle:function(e,i,n){return n=n!=null?n.concat([e]):null,fr(4,2,Pc.bind(null,i,e),n)},useLayoutEffect:function(e,i){return fr(4,2,e,i)},useMemo:function(e,i){var n=Jn();return i=i===void 0?null:i,e=e(),n.memoizedState=[e,i],e},useReducer:function(e,i,n){var o=Jn();return i=n!==void 0?n(i):i,o.memoizedState=o.baseState=i,e=o.queue={pending:null,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},e=e.dispatch=Bc.bind(null,Ge,e),[o.memoizedState,e]},useRef:function(e){var i=Jn();return e={current:e},i.memoizedState=e},useState:dr,useDebugValue:zr,useResponder:lr,useDeferredValue:function(e,i){var n=dr(e),o=n[0],l=n[1];return Ec(function(){var u=si.suspense;si.suspense=i===void 0?null:i;try{l(e)}finally{si.suspense=u}},[e,i]),o},useTransition:function(e){var i=dr(!1),n=i[0];return i=i[1],[Sc(wr.bind(null,i,e),[i,e]),n]}},Of={readContext:ri,useCallback:Da,useContext:ri,useEffect:va,useImperativeHandle:xc,useLayoutEffect:Ac,useMemo:Gc,useReducer:ba,useRef:Tc,useState:function(){return ba(cn)},useDebugValue:zr,useResponder:lr,useDeferredValue:function(e,i){var n=ba(cn),o=n[0],l=n[1];return va(function(){var u=si.suspense;si.suspense=i===void 0?null:i;try{l(e)}finally{si.suspense=u}},[e,i]),o},useTransition:function(e){var i=ba(cn),n=i[0];return i=i[1],[Da(wr.bind(null,i,e),[i,e]),n]}},Rf={readContext:ri,useCallback:Da,useContext:ri,useEffect:va,useImperativeHandle:xc,useLayoutEffect:Ac,useMemo:Gc,useReducer:Ca,useRef:Tc,useState:function(){return Ca(cn)},useDebugValue:zr,useResponder:lr,useDeferredValue:function(e,i){var n=Ca(cn),o=n[0],l=n[1];return va(function(){var u=si.suspense;si.suspense=i===void 0?null:i;try{l(e)}finally{si.suspense=u}},[e,i]),o},useTransition:function(e){var i=Ca(cn),n=i[0];return i=i[1],[Da(wr.bind(null,i,e),[i,e]),n]}},Pi=null,$i=null,un=!1;function Oc(e,i){var n=ki(5,null,null,0);n.elementType="DELETED",n.type="DELETED",n.stateNode=i,n.return=e,n.effectTag=8,e.lastEffect!==null?(e.lastEffect.nextEffect=n,e.lastEffect=n):e.firstEffect=e.lastEffect=n}function Rc(e,i){switch(e.tag){case 5:var n=e.type;return i=i.nodeType!==1||n.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(e.stateNode=i,!0):!1;case 6:return i=e.pendingProps===""||i.nodeType!==3?null:i,i!==null?(e.stateNode=i,!0):!1;case 13:return!1;default:return!1}}function pr(e){if(un){var i=$i;if(i){var n=i;if(!Rc(e,i)){if(i=Sn(n.nextSibling),!i||!Rc(e,i)){e.effectTag=e.effectTag&-1025|2,un=!1,Pi=e;return}Oc(Pi,n)}Pi=e,$i=Sn(i.firstChild)}else e.effectTag=e.effectTag&-1025|2,un=!1,Pi=e}}function Nc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Pi=e}function Ea(e){if(e!==Pi)return!1;if(!un)return Nc(e),un=!0,!1;var i=e.type;if(e.tag!==5||i!=="head"&&i!=="body"&&!Mo(i,e.memoizedProps))for(i=$i;i;)Oc(e,i),i=Sn(i.nextSibling);if(Nc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));e:{for(e=e.nextSibling,i=0;e;){if(e.nodeType===8){var n=e.data;if(n===Gl){if(i===0){$i=Sn(e.nextSibling);break e}i--}else n!==Sl&&n!==No&&n!==Ro||i++}e=e.nextSibling}$i=null}}else $i=Pi?Sn(e.stateNode.nextSibling):null;return!0}function hr(){$i=Pi=null,un=!1}var Nf=te.ReactCurrentOwner,hi=!1;function ei(e,i,n,o){i.child=e===null?or(i,null,n,o):Mn(i,e.child,n,o)}function Fc(e,i,n,o,l){n=n.render;var u=i.ref;return _n(i,l),o=ur(e,i,n,o,u,l),e!==null&&!hi?(i.updateQueue=e.updateQueue,i.effectTag&=-517,e.expirationTime<=l&&(e.expirationTime=0),xi(e,i,l)):(i.effectTag|=1,ei(e,i,o,l),i.child)}function _c(e,i,n,o,l,u){if(e===null){var m=n.type;return typeof m=="function"&&!_r(m)&&m.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(i.tag=15,i.type=m,Mc(e,i,m,o,l,u)):(e=Wa(n.type,null,o,null,i.mode,u),e.ref=i.ref,e.return=i,i.child=e)}return m=e.child,l<u&&(l=m.memoizedProps,n=n.compare,n=n!==null?n:jt,n(l,o)&&e.ref===i.ref)?xi(e,i,u):(i.effectTag|=1,e=pn(m,o),e.ref=i.ref,e.return=i,i.child=e)}function Mc(e,i,n,o,l,u){return e!==null&&jt(e.memoizedProps,o)&&e.ref===i.ref&&(hi=!1,l<u)?(i.expirationTime=e.expirationTime,xi(e,i,u)):gr(e,i,n,o,u)}function Ic(e,i){var n=i.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(i.effectTag|=128)}function gr(e,i,n,o,l){var u=Ve(n)?sn:Je.current;return u=Nn(i,u),_n(i,l),n=ur(e,i,n,o,u,l),e!==null&&!hi?(i.updateQueue=e.updateQueue,i.effectTag&=-517,e.expirationTime<=l&&(e.expirationTime=0),xi(e,i,l)):(i.effectTag|=1,ei(e,i,n,l),i.child)}function Jc(e,i,n,o,l){if(Ve(n)){var u=!0;sa(i)}else u=!1;if(_n(i,l),i.stateNode===null)e!==null&&(e.alternate=null,i.alternate=null,i.effectTag|=2),bc(i,n,o),ar(i,n,o,l),o=!0;else if(e===null){var m=i.stateNode,y=i.memoizedProps;m.props=y;var j=m.context,k=n.contextType;typeof k=="object"&&k!==null?k=ri(k):(k=Ve(n)?sn:Je.current,k=Nn(i,k));var R=n.getDerivedStateFromProps,N=typeof R=="function"||typeof m.getSnapshotBeforeUpdate=="function";N||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(y!==o||j!==k)&&Cc(i,m,o,k),Ki=!1;var ae=i.memoizedState;m.state=ae,bt(i,o,m,l),j=i.memoizedState,y!==o||ae!==j||Ze.current||Ki?(typeof R=="function"&&(za(i,n,R,o),j=i.memoizedState),(y=Ki||kc(i,n,y,o,ae,j,k))?(N||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(i.effectTag|=4)):(typeof m.componentDidMount=="function"&&(i.effectTag|=4),i.memoizedProps=o,i.memoizedState=j),m.props=o,m.state=j,m.context=k,o=y):(typeof m.componentDidMount=="function"&&(i.effectTag|=4),o=!1)}else m=i.stateNode,tr(e,i),y=i.memoizedProps,m.props=i.type===i.elementType?y:di(i.type,y),j=m.context,k=n.contextType,typeof k=="object"&&k!==null?k=ri(k):(k=Ve(n)?sn:Je.current,k=Nn(i,k)),R=n.getDerivedStateFromProps,(N=typeof R=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(y!==o||j!==k)&&Cc(i,m,o,k),Ki=!1,j=i.memoizedState,m.state=j,bt(i,o,m,l),ae=i.memoizedState,y!==o||j!==ae||Ze.current||Ki?(typeof R=="function"&&(za(i,n,R,o),ae=i.memoizedState),(R=Ki||kc(i,n,y,o,j,ae,k))?(N||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(o,ae,k),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(o,ae,k)),typeof m.componentDidUpdate=="function"&&(i.effectTag|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(i.effectTag|=256)):(typeof m.componentDidUpdate!="function"||y===e.memoizedProps&&j===e.memoizedState||(i.effectTag|=4),typeof m.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&j===e.memoizedState||(i.effectTag|=256),i.memoizedProps=o,i.memoizedState=ae),m.props=o,m.state=ae,m.context=k,o=R):(typeof m.componentDidUpdate!="function"||y===e.memoizedProps&&j===e.memoizedState||(i.effectTag|=4),typeof m.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&j===e.memoizedState||(i.effectTag|=256),o=!1);return jr(e,i,n,o,u,l)}function jr(e,i,n,o,l,u){Ic(e,i);var m=(i.effectTag&64)!==0;if(!o&&!m)return l&&ac(i,n,!1),xi(e,i,u);o=i.stateNode,Nf.current=i;var y=m&&typeof n.getDerivedStateFromError!="function"?null:o.render();return i.effectTag|=1,e!==null&&m?(i.child=Mn(i,e.child,null,u),i.child=Mn(i,null,y,u)):ei(e,i,y,u),i.memoizedState=o.state,l&&ac(i,n,!0),i.child}function Wc(e){var i=e.stateNode;i.pendingContext?nc(e,i.pendingContext,i.pendingContext!==i.context):i.context&&nc(e,i.context,!1),rr(e,i.containerInfo)}var kr={dehydrated:null,retryTime:0};function Hc(e,i,n){var o=i.mode,l=i.pendingProps,u=Te.current,m=!1,y;if((y=(i.effectTag&64)!==0)||(y=(u&2)!==0&&(e===null||e.memoizedState!==null)),y?(m=!0,i.effectTag&=-65):e!==null&&e.memoizedState===null||l.fallback===void 0||l.unstable_avoidThisFallback===!0||(u|=1),Pe(Te,u&1),e===null){if(l.fallback!==void 0&&pr(i),m){if(m=l.fallback,l=Xi(null,o,0,null),l.return=i,(i.mode&2)===0)for(e=i.memoizedState!==null?i.child.child:i.child,l.child=e;e!==null;)e.return=l,e=e.sibling;return n=Xi(m,o,n,null),n.return=i,l.sibling=n,i.memoizedState=kr,i.child=l,n}return o=l.children,i.memoizedState=null,i.child=or(i,null,o,n)}if(e.memoizedState!==null){if(e=e.child,o=e.sibling,m){if(l=l.fallback,n=pn(e,e.pendingProps),n.return=i,(i.mode&2)===0&&(m=i.memoizedState!==null?i.child.child:i.child,m!==e.child))for(n.child=m;m!==null;)m.return=n,m=m.sibling;return o=pn(o,l),o.return=i,n.sibling=o,n.childExpirationTime=0,i.memoizedState=kr,i.child=n,o}return n=Mn(i,e.child,l.children,n),i.memoizedState=null,i.child=n}if(e=e.child,m){if(m=l.fallback,l=Xi(null,o,0,null),l.return=i,l.child=e,e!==null&&(e.return=l),(i.mode&2)===0)for(e=i.memoizedState!==null?i.child.child:i.child,l.child=e;e!==null;)e.return=l,e=e.sibling;return n=Xi(m,o,n,null),n.return=i,l.sibling=n,n.effectTag|=2,l.childExpirationTime=0,i.memoizedState=kr,i.child=l,n}return i.memoizedState=null,i.child=Mn(i,e,l.children,n)}function Lc(e,i){e.expirationTime<i&&(e.expirationTime=i);var n=e.alternate;n!==null&&n.expirationTime<i&&(n.expirationTime=i),pc(e.return,i)}function br(e,i,n,o,l,u){var m=e.memoizedState;m===null?e.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:o,tail:n,tailExpiration:0,tailMode:l,lastEffect:u}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=o,m.tail=n,m.tailExpiration=0,m.tailMode=l,m.lastEffect=u)}function Kc(e,i,n){var o=i.pendingProps,l=o.revealOrder,u=o.tail;if(ei(e,i,o.children,n),o=Te.current,(o&2)!==0)o=o&1|2,i.effectTag|=64;else{if(e!==null&&(e.effectTag&64)!==0)e:for(e=i.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Lc(e,n);else if(e.tag===19)Lc(e,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===i)break e;for(;e.sibling===null;){if(e.return===null||e.return===i)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}if(Pe(Te,o),(i.mode&2)===0)i.memoizedState=null;else switch(l){case"forwards":for(n=i.child,l=null;n!==null;)e=n.alternate,e!==null&&ga(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=i.child,i.child=null):(l=n.sibling,n.sibling=null),br(i,!1,l,n,u,i.lastEffect);break;case"backwards":for(n=null,l=i.child,i.child=null;l!==null;){if(e=l.alternate,e!==null&&ga(e)===null){i.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}br(i,!0,n,null,u,i.lastEffect);break;case"together":br(i,!1,null,null,void 0,i.lastEffect);break;default:i.memoizedState=null}return i.child}function xi(e,i,n){e!==null&&(i.dependencies=e.dependencies);var o=i.expirationTime;if(o!==0&&Ja(o),i.childExpirationTime<n)return null;if(e!==null&&i.child!==e.child)throw Error(s(153));if(i.child!==null){for(e=i.child,n=pn(e,e.pendingProps),i.child=n,n.return=i;e.sibling!==null;)e=e.sibling,n=n.sibling=pn(e,e.pendingProps),n.return=i;n.sibling=null}return i.child}var Uc,Cr,Zc,Vc;Uc=function(e,i){for(var n=i.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break;for(;n.sibling===null;){if(n.return===null||n.return===i)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},Cr=function(){},Zc=function(e,i,n,o,l){var u=e.memoizedProps;if(u!==o){var m=i.stateNode;switch(ln(pi.current),e=null,n){case"input":u=mo(m,u),o=mo(m,o),e=[];break;case"option":u=zo(m,u),o=zo(m,o),e=[];break;case"select":u=a({},u,{value:void 0}),o=a({},o,{value:void 0}),e=[];break;case"textarea":u=wo(m,u),o=wo(m,o),e=[];break;default:typeof u.onClick!="function"&&typeof o.onClick=="function"&&(m.onclick=qt)}So(n,o);var y,j;n=null;for(y in u)if(!o.hasOwnProperty(y)&&u.hasOwnProperty(y)&&u[y]!=null)if(y==="style")for(j in m=u[y],m)m.hasOwnProperty(j)&&(n||(n={}),n[j]="");else y!=="dangerouslySetInnerHTML"&&y!=="children"&&y!=="suppressContentEditableWarning"&&y!=="suppressHydrationWarning"&&y!=="autoFocus"&&(V.hasOwnProperty(y)?e||(e=[]):(e=e||[]).push(y,null));for(y in o){var k=o[y];if(m=u?.[y],o.hasOwnProperty(y)&&k!==m&&(k!=null||m!=null))if(y==="style")if(m){for(j in m)!m.hasOwnProperty(j)||k&&k.hasOwnProperty(j)||(n||(n={}),n[j]="");for(j in k)k.hasOwnProperty(j)&&m[j]!==k[j]&&(n||(n={}),n[j]=k[j])}else n||(e||(e=[]),e.push(y,n)),n=k;else y==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,m=m?m.__html:void 0,k!=null&&m!==k&&(e=e||[]).push(y,k)):y==="children"?m===k||typeof k!="string"&&typeof k!="number"||(e=e||[]).push(y,""+k):y!=="suppressContentEditableWarning"&&y!=="suppressHydrationWarning"&&(V.hasOwnProperty(y)?(k!=null&&Di(l,y),e||m===k||(e=[])):(e=e||[]).push(y,k))}n&&(e=e||[]).push("style",n),l=e,(i.updateQueue=l)&&(i.effectTag|=4)}},Vc=function(e,i,n,o){n!==o&&(i.effectTag|=4)};function Aa(e,i){switch(e.tailMode){case"hidden":i=e.tail;for(var n=null;i!==null;)i.alternate!==null&&(n=i),i=i.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var o=null;n!==null;)n.alternate!==null&&(o=n),n=n.sibling;o===null?i||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Ff(e,i,n){var o=i.pendingProps;switch(i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return null;case 1:return Ve(i.type)&&ra(),null;case 3:return In(),je(Ze),je(Je),n=i.stateNode,n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),e!==null&&e.child!==null||!Ea(i)||(i.effectTag|=4),Cr(i),null;case 5:sr(i),n=ln(Et.current);var l=i.type;if(e!==null&&i.stateNode!=null)Zc(e,i,l,o,n),e.ref!==i.ref&&(i.effectTag|=128);else{if(!o){if(i.stateNode===null)throw Error(s(166));return null}if(e=ln(pi.current),Ea(i)){o=i.stateNode,l=i.type;var u=i.memoizedProps;switch(o[Ji]=i,o[ea]=u,l){case"iframe":case"object":case"embed":Ce("load",o);break;case"video":case"audio":for(e=0;e<nt.length;e++)Ce(nt[e],o);break;case"source":Ce("error",o);break;case"img":case"image":case"link":Ce("error",o),Ce("load",o);break;case"form":Ce("reset",o),Ce("submit",o);break;case"details":Ce("toggle",o);break;case"input":Vs(o,u),Ce("invalid",o),Di(n,"onChange");break;case"select":o._wrapperState={wasMultiple:!!u.multiple},Ce("invalid",o),Di(n,"onChange");break;case"textarea":Qs(o,u),Ce("invalid",o),Di(n,"onChange")}So(l,u),e=null;for(var m in u)if(u.hasOwnProperty(m)){var y=u[m];m==="children"?typeof y=="string"?o.textContent!==y&&(e=["children",y]):typeof y=="number"&&o.textContent!==""+y&&(e=["children",""+y]):V.hasOwnProperty(m)&&y!=null&&Di(n,m)}switch(l){case"input":Lt(o),Ys(o,u,!0);break;case"textarea":Lt(o),qs(o);break;case"select":case"option":break;default:typeof u.onClick=="function"&&(o.onclick=qt)}n=e,i.updateQueue=n,n!==null&&(i.effectTag|=4)}else{switch(m=n.nodeType===9?n:n.ownerDocument,e===Tl&&(e=il(l)),e===Tl?l==="script"?(e=m.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof o.is=="string"?e=m.createElement(l,{is:o.is}):(e=m.createElement(l),l==="select"&&(m=e,o.multiple?m.multiple=!0:o.size&&(m.size=o.size))):e=m.createElementNS(e,l),e[Ji]=i,e[ea]=o,Uc(e,i,!1,!1),i.stateNode=e,m=Go(l,o),l){case"iframe":case"object":case"embed":Ce("load",e),y=o;break;case"video":case"audio":for(y=0;y<nt.length;y++)Ce(nt[y],e);y=o;break;case"source":Ce("error",e),y=o;break;case"img":case"image":case"link":Ce("error",e),Ce("load",e),y=o;break;case"form":Ce("reset",e),Ce("submit",e),y=o;break;case"details":Ce("toggle",e),y=o;break;case"input":Vs(e,o),y=mo(e,o),Ce("invalid",e),Di(n,"onChange");break;case"option":y=zo(e,o);break;case"select":e._wrapperState={wasMultiple:!!o.multiple},y=a({},o,{value:void 0}),Ce("invalid",e),Di(n,"onChange");break;case"textarea":Qs(e,o),y=wo(e,o),Ce("invalid",e),Di(n,"onChange");break;default:y=o}So(l,y);var j=y;for(u in j)if(j.hasOwnProperty(u)){var k=j[u];u==="style"?Dl(e,k):u==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,k!=null&&nl(e,k)):u==="children"?typeof k=="string"?(l!=="textarea"||k!=="")&&it(e,k):typeof k=="number"&&it(e,""+k):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(V.hasOwnProperty(u)?k!=null&&Di(n,u):k!=null&&Ri(e,u,k,m))}switch(l){case"input":Lt(e),Ys(e,o,!1);break;case"textarea":Lt(e),qs(e);break;case"option":o.value!=null&&e.setAttribute("value",""+Fi(o.value));break;case"select":e.multiple=!!o.multiple,n=o.value,n!=null?An(e,!!o.multiple,n,!1):o.defaultValue!=null&&An(e,!!o.multiple,o.defaultValue,!0);break;default:typeof y.onClick=="function"&&(e.onclick=qt)}Bl(l,o)&&(i.effectTag|=4)}i.ref!==null&&(i.effectTag|=128)}return null;case 6:if(e&&i.stateNode!=null)Vc(e,i,e.memoizedProps,o);else{if(typeof o!="string"&&i.stateNode===null)throw Error(s(166));n=ln(Et.current),ln(pi.current),Ea(i)?(n=i.stateNode,o=i.memoizedProps,n[Ji]=i,n.nodeValue!==o&&(i.effectTag|=4)):(n=(n.nodeType===9?n:n.ownerDocument).createTextNode(o),n[Ji]=i,i.stateNode=n)}return null;case 13:return je(Te),o=i.memoizedState,(i.effectTag&64)!==0?(i.expirationTime=n,i):(n=o!==null,o=!1,e===null?i.memoizedProps.fallback!==void 0&&Ea(i):(l=e.memoizedState,o=l!==null,n||l===null||(l=e.child.sibling,l!==null&&(u=i.firstEffect,u!==null?(i.firstEffect=l,l.nextEffect=u):(i.firstEffect=i.lastEffect=l,l.nextEffect=null),l.effectTag=8))),n&&!o&&(i.mode&2)!==0&&(e===null&&i.memoizedProps.unstable_avoidThisFallback!==!0||(Te.current&1)!==0?Ne===dn&&(Ne=Sa):((Ne===dn||Ne===Sa)&&(Ne=Ga),Pt!==0&&ii!==null&&(hn(ii,$e),ju(ii,Pt)))),(n||o)&&(i.effectTag|=4),null);case 4:return In(),Cr(i),null;case 10:return ir(i),null;case 17:return Ve(i.type)&&ra(),null;case 19:if(je(Te),o=i.memoizedState,o===null)return null;if(l=(i.effectTag&64)!==0,u=o.rendering,u===null){if(l)Aa(o,!1);else if(Ne!==dn||e!==null&&(e.effectTag&64)!==0)for(u=i.child;u!==null;){if(e=ga(u),e!==null){for(i.effectTag|=64,Aa(o,!1),l=e.updateQueue,l!==null&&(i.updateQueue=l,i.effectTag|=4),o.lastEffect===null&&(i.firstEffect=null),i.lastEffect=o.lastEffect,o=i.child;o!==null;)l=o,u=n,l.effectTag&=2,l.nextEffect=null,l.firstEffect=null,l.lastEffect=null,e=l.alternate,e===null?(l.childExpirationTime=0,l.expirationTime=u,l.child=null,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null):(l.childExpirationTime=e.childExpirationTime,l.expirationTime=e.expirationTime,l.child=e.child,l.memoizedProps=e.memoizedProps,l.memoizedState=e.memoizedState,l.updateQueue=e.updateQueue,u=e.dependencies,l.dependencies=u===null?null:{expirationTime:u.expirationTime,firstContext:u.firstContext,responders:u.responders}),o=o.sibling;return Pe(Te,Te.current&1|2),i.child}u=u.sibling}}else{if(!l)if(e=ga(u),e!==null){if(i.effectTag|=64,l=!0,n=e.updateQueue,n!==null&&(i.updateQueue=n,i.effectTag|=4),Aa(o,!0),o.tail===null&&o.tailMode==="hidden"&&!u.alternate)return i=i.lastEffect=o.lastEffect,i!==null&&(i.nextEffect=null),null}else 2*oi()-o.renderingStartTime>o.tailExpiration&&1<n&&(i.effectTag|=64,l=!0,Aa(o,!1),i.expirationTime=i.childExpirationTime=n-1);o.isBackwards?(u.sibling=i.child,i.child=u):(n=o.last,n!==null?n.sibling=u:i.child=u,o.last=u)}return o.tail!==null?(o.tailExpiration===0&&(o.tailExpiration=oi()+500),n=o.tail,o.rendering=n,o.tail=n.sibling,o.lastEffect=i.lastEffect,o.renderingStartTime=oi(),n.sibling=null,i=Te.current,Pe(Te,l?i&1|2:i&1),n):null}throw Error(s(156,i.tag))}function _f(e){switch(e.tag){case 1:Ve(e.type)&&ra();var i=e.effectTag;return i&4096?(e.effectTag=i&-4097|64,e):null;case 3:if(In(),je(Ze),je(Je),i=e.effectTag,(i&64)!==0)throw Error(s(285));return e.effectTag=i&-4097|64,e;case 5:return sr(e),null;case 13:return je(Te),i=e.effectTag,i&4096?(e.effectTag=i&-4097|64,e):null;case 19:return je(Te),null;case 4:return In(),null;case 10:return ir(e),null;default:return null}}function vr(e,i){return{value:e,source:i,stack:uo(i)}}var Mf=typeof WeakSet=="function"?WeakSet:Set;function Dr(e,i){var n=i.source,o=i.stack;o===null&&n!==null&&(o=uo(n)),n!==null&&vi(n.type),i=i.value,e!==null&&e.tag===1&&vi(e.type);try{console.error(i)}catch(l){setTimeout(function(){throw l})}}function If(e,i){try{i.props=e.memoizedProps,i.state=e.memoizedState,i.componentWillUnmount()}catch(n){wn(e,n)}}function $c(e){var i=e.ref;if(i!==null)if(typeof i=="function")try{i(null)}catch(n){wn(e,n)}else i.current=null}function Jf(e,i){switch(i.tag){case 0:case 11:case 15:case 22:return;case 1:if(i.effectTag&256&&e!==null){var n=e.memoizedProps,o=e.memoizedState;e=i.stateNode,i=e.getSnapshotBeforeUpdate(i.elementType===i.type?n:di(i.type,n),o),e.__reactInternalSnapshotBeforeUpdate=i}return;case 3:case 5:case 6:case 4:case 17:return}throw Error(s(163))}function Yc(e,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var n=i=i.next;do{if((n.tag&e)===e){var o=n.destroy;n.destroy=void 0,o!==void 0&&o()}n=n.next}while(n!==i)}}function Qc(e,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var n=i=i.next;do{if((n.tag&e)===e){var o=n.create;n.destroy=o()}n=n.next}while(n!==i)}}function Wf(e,i,n){switch(n.tag){case 0:case 11:case 15:case 22:Qc(3,n);return;case 1:if(e=n.stateNode,n.effectTag&4)if(i===null)e.componentDidMount();else{var o=n.elementType===n.type?i.memoizedProps:di(n.type,i.memoizedProps);e.componentDidUpdate(o,i.memoizedState,e.__reactInternalSnapshotBeforeUpdate)}i=n.updateQueue,i!==null&&gc(n,i,e);return;case 3:if(i=n.updateQueue,i!==null){if(e=null,n.child!==null)switch(n.child.tag){case 5:e=n.child.stateNode;break;case 1:e=n.child.stateNode}gc(n,i,e)}return;case 5:e=n.stateNode,i===null&&n.effectTag&4&&Bl(n.type,n.memoizedProps)&&e.focus();return;case 6:return;case 4:return;case 12:return;case 13:n.memoizedState===null&&(n=n.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&jl(n))));return;case 19:case 17:case 20:case 21:return}throw Error(s(163))}function Xc(e,i,n){switch(typeof Fr=="function"&&Fr(i),i.tag){case 0:case 11:case 14:case 15:case 22:if(e=i.updateQueue,e!==null&&(e=e.lastEffect,e!==null)){var o=e.next;Li(97<n?97:n,function(){var l=o;do{var u=l.destroy;if(u!==void 0){var m=i;try{u()}catch(y){wn(m,y)}}l=l.next}while(l!==o)})}break;case 1:$c(i),n=i.stateNode,typeof n.componentWillUnmount=="function"&&If(i,n);break;case 5:$c(i);break;case 4:nu(e,i,n)}}function qc(e){var i=e.alternate;e.return=null,e.child=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.alternate=null,e.firstEffect=null,e.lastEffect=null,e.pendingProps=null,e.memoizedProps=null,e.stateNode=null,i!==null&&qc(i)}function eu(e){return e.tag===5||e.tag===3||e.tag===4}function iu(e){e:{for(var i=e.return;i!==null;){if(eu(i)){var n=i;break e}i=i.return}throw Error(s(160))}switch(i=n.stateNode,n.tag){case 5:var o=!1;break;case 3:i=i.containerInfo,o=!0;break;case 4:i=i.containerInfo,o=!0;break;default:throw Error(s(161))}n.effectTag&16&&(it(i,""),n.effectTag&=-17);e:i:for(n=e;;){for(;n.sibling===null;){if(n.return===null||eu(n.return)){n=null;break e}n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.effectTag&2||n.child===null||n.tag===4)continue i;n.child.return=n,n=n.child}if(!(n.effectTag&2)){n=n.stateNode;break e}}o?Tr(e,n,i):Er(e,n,i)}function Tr(e,i,n){var o=e.tag,l=o===5||o===6;if(l)e=l?e.stateNode:e.stateNode.instance,i?n.nodeType===8?n.parentNode.insertBefore(e,i):n.insertBefore(e,i):(n.nodeType===8?(i=n.parentNode,i.insertBefore(e,n)):(i=n,i.appendChild(e)),n=n._reactRootContainer,n!=null||i.onclick!==null||(i.onclick=qt));else if(o!==4&&(e=e.child,e!==null))for(Tr(e,i,n),e=e.sibling;e!==null;)Tr(e,i,n),e=e.sibling}function Er(e,i,n){var o=e.tag,l=o===5||o===6;if(l)e=l?e.stateNode:e.stateNode.instance,i?n.insertBefore(e,i):n.appendChild(e);else if(o!==4&&(e=e.child,e!==null))for(Er(e,i,n),e=e.sibling;e!==null;)Er(e,i,n),e=e.sibling}function nu(e,i,n){for(var o=i,l=!1,u,m;;){if(!l){l=o.return;e:for(;;){if(l===null)throw Error(s(160));switch(u=l.stateNode,l.tag){case 5:m=!1;break e;case 3:u=u.containerInfo,m=!0;break e;case 4:u=u.containerInfo,m=!0;break e}l=l.return}l=!0}if(o.tag===5||o.tag===6){e:for(var y=e,j=o,k=n,R=j;;)if(Xc(y,R,k),R.child!==null&&R.tag!==4)R.child.return=R,R=R.child;else{if(R===j)break e;for(;R.sibling===null;){if(R.return===null||R.return===j)break e;R=R.return}R.sibling.return=R.return,R=R.sibling}m?(y=u,j=o.stateNode,y.nodeType===8?y.parentNode.removeChild(j):y.removeChild(j)):u.removeChild(o.stateNode)}else if(o.tag===4){if(o.child!==null){u=o.stateNode.containerInfo,m=!0,o.child.return=o,o=o.child;continue}}else if(Xc(e,o,n),o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return,o.tag===4&&(l=!1)}o.sibling.return=o.return,o=o.sibling}}function Ar(e,i){switch(i.tag){case 0:case 11:case 14:case 15:case 22:Yc(3,i);return;case 1:return;case 5:var n=i.stateNode;if(n!=null){var o=i.memoizedProps,l=e!==null?e.memoizedProps:o;e=i.type;var u=i.updateQueue;if(i.updateQueue=null,u!==null){for(n[ea]=o,e==="input"&&o.type==="radio"&&o.name!=null&&$s(n,o),Go(e,l),i=Go(e,o),l=0;l<u.length;l+=2){var m=u[l],y=u[l+1];m==="style"?Dl(n,y):m==="dangerouslySetInnerHTML"?nl(n,y):m==="children"?it(n,y):Ri(n,m,y,i)}switch(e){case"input":fo(n,o);break;case"textarea":Xs(n,o);break;case"select":i=n._wrapperState.wasMultiple,n._wrapperState.wasMultiple=!!o.multiple,e=o.value,e!=null?An(n,!!o.multiple,e,!1):i!==!!o.multiple&&(o.defaultValue!=null?An(n,!!o.multiple,o.defaultValue,!0):An(n,!!o.multiple,o.multiple?[]:"",!1))}}}return;case 6:if(i.stateNode===null)throw Error(s(162));i.stateNode.nodeValue=i.memoizedProps;return;case 3:i=i.stateNode,i.hydrate&&(i.hydrate=!1,jl(i.containerInfo));return;case 12:return;case 13:if(n=i,i.memoizedState===null?o=!1:(o=!0,n=i.child,Sr=oi()),n!==null)e:for(e=n;;){if(e.tag===5)u=e.stateNode,o?(u=u.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none"):(u=e.stateNode,l=e.memoizedProps.style,l=l!=null&&l.hasOwnProperty("display")?l.display:null,u.style.display=vl("display",l));else if(e.tag===6)e.stateNode.nodeValue=o?"":e.memoizedProps;else if(e.tag===13&&e.memoizedState!==null&&e.memoizedState.dehydrated===null){u=e.child.sibling,u.return=e,e=u;continue}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}tu(i);return;case 19:tu(i);return;case 17:return}throw Error(s(163))}function tu(e){var i=e.updateQueue;if(i!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Mf),i.forEach(function(o){var l=Xf.bind(null,e,o);n.has(o)||(n.add(o),o.then(l,l))})}}var Hf=typeof WeakMap=="function"?WeakMap:Map;function au(e,i,n){n=Ui(n,null),n.tag=3,n.payload={element:null};var o=i.value;return n.callback=function(){Na||(Na=!0,Gr=o),Dr(e,i)},n}function ou(e,i,n){n=Ui(n,null),n.tag=3;var o=e.type.getDerivedStateFromError;if(typeof o=="function"){var l=i.value;n.payload=function(){return Dr(e,i),o(l)}}var u=e.stateNode;return u!==null&&typeof u.componentDidCatch=="function"&&(n.callback=function(){typeof o!="function"&&(Yi===null?Yi=new Set([this]):Yi.add(this),Dr(e,i));var m=i.stack;this.componentDidCatch(i.value,{componentStack:m!==null?m:""})}),n}var Lf=Math.ceil,Pa=te.ReactCurrentDispatcher,ru=te.ReactCurrentOwner,Re=0,Pr=8,mi=16,gi=32,dn=0,xa=1,su=2,Sa=3,Ga=4,xr=5,Z=Re,ii=null,Y=null,$e=0,Ne=dn,Ba=null,Si=1073741823,At=1073741823,Oa=null,Pt=0,Ra=!1,Sr=0,lu=500,_=null,Na=!1,Gr=null,Yi=null,Fa=!1,xt=null,St=90,mn=null,Gt=0,Br=null,_a=0;function ji(){return(Z&(mi|gi))!==Re?1073741821-(oi()/10|0):_a!==0?_a:_a=1073741821-(oi()/10|0)}function fn(e,i,n){if(i=i.mode,(i&2)===0)return 1073741823;var o=ua();if((i&4)===0)return o===99?1073741823:1073741822;if((Z&mi)!==Re)return $e;if(n!==null)e=da(e,n.timeoutMs|0||5e3,250);else switch(o){case 99:e=1073741823;break;case 98:e=da(e,150,100);break;case 97:case 96:e=da(e,5e3,250);break;case 95:e=2;break;default:throw Error(s(326))}return ii!==null&&e===$e&&--e,e}function Qi(e,i){if(50<Gt)throw Gt=0,Br=null,Error(s(185));if(e=Ma(e,i),e!==null){var n=ua();i===1073741823?(Z&Pr)!==Re&&(Z&(mi|gi))===Re?Or(e):(ni(e),Z===Re&&wi()):ni(e),(Z&4)===Re||n!==98&&n!==99||(mn===null?mn=new Map([[e,i]]):(n=mn.get(e),(n===void 0||n>i)&&mn.set(e,i)))}}function Ma(e,i){e.expirationTime<i&&(e.expirationTime=i);var n=e.alternate;n!==null&&n.expirationTime<i&&(n.expirationTime=i);var o=e.return,l=null;if(o===null&&e.tag===3)l=e.stateNode;else for(;o!==null;){if(n=o.alternate,o.childExpirationTime<i&&(o.childExpirationTime=i),n!==null&&n.childExpirationTime<i&&(n.childExpirationTime=i),o.return===null&&o.tag===3){l=o.stateNode;break}o=o.return}return l!==null&&(ii===l&&(Ja(i),Ne===Ga&&hn(l,$e)),ju(l,i)),l}function Ia(e){var i=e.lastExpiredTime;if(i!==0||(i=e.firstPendingTime,!gu(e,i)))return i;var n=e.lastPingedTime;return e=e.nextKnownPendingLevel,e=n>e?n:e,2>=e&&i!==e?0:e}function ni(e){if(e.lastExpiredTime!==0)e.callbackExpirationTime=1073741823,e.callbackPriority=99,e.callbackNode=zc(Or.bind(null,e));else{var i=Ia(e),n=e.callbackNode;if(i===0)n!==null&&(e.callbackNode=null,e.callbackExpirationTime=0,e.callbackPriority=90);else{var o=ji();if(i===1073741823?o=99:i===1||i===2?o=95:(o=10*(1073741821-i)-10*(1073741821-o),o=0>=o?99:250>=o?98:5250>=o?97:95),n!==null){var l=e.callbackPriority;if(e.callbackExpirationTime===i&&l>=o)return;n!==dc&&oc(n)}e.callbackExpirationTime=i,e.callbackPriority=o,i=i===1073741823?zc(Or.bind(null,e)):yc(o,cu.bind(null,e),{timeout:10*(1073741821-i)-oi()}),e.callbackNode=i}}}function cu(e,i){if(_a=0,i)return i=ji(),Jr(e,i),ni(e),null;var n=Ia(e);if(n!==0){if(i=e.callbackNode,(Z&(mi|gi))!==Re)throw Error(s(327));if(Hn(),e===ii&&n===$e||yn(e,n),Y!==null){var o=Z;Z|=mi;var l=fu();do try{Zf();break}catch(y){mu(e,y)}while(!0);if(er(),Z=o,Pa.current=l,Ne===xa)throw i=Ba,yn(e,n),hn(e,n),ni(e),i;if(Y===null)switch(l=e.finishedWork=e.current.alternate,e.finishedExpirationTime=n,o=Ne,ii=null,o){case dn:case xa:throw Error(s(345));case su:Jr(e,2<n?2:n);break;case Sa:if(hn(e,n),o=e.lastSuspendedTime,n===o&&(e.nextKnownPendingLevel=Rr(l)),Si===1073741823&&(l=Sr+lu-oi(),10<l)){if(Ra){var u=e.lastPingedTime;if(u===0||u>=n){e.lastPingedTime=n,yn(e,n);break}}if(u=Ia(e),u!==0&&u!==n)break;if(o!==0&&o!==n){e.lastPingedTime=o;break}e.timeoutHandle=Io(zn.bind(null,e),l);break}zn(e);break;case Ga:if(hn(e,n),o=e.lastSuspendedTime,n===o&&(e.nextKnownPendingLevel=Rr(l)),Ra&&(l=e.lastPingedTime,l===0||l>=n)){e.lastPingedTime=n,yn(e,n);break}if(l=Ia(e),l!==0&&l!==n)break;if(o!==0&&o!==n){e.lastPingedTime=o;break}if(At!==1073741823?o=10*(1073741821-At)-oi():Si===1073741823?o=0:(o=10*(1073741821-Si)-5e3,l=oi(),n=10*(1073741821-n)-l,o=l-o,0>o&&(o=0),o=(120>o?120:480>o?480:1080>o?1080:1920>o?1920:3e3>o?3e3:4320>o?4320:1960*Lf(o/1960))-o,n<o&&(o=n)),10<o){e.timeoutHandle=Io(zn.bind(null,e),o);break}zn(e);break;case xr:if(Si!==1073741823&&Oa!==null){u=Si;var m=Oa;if(o=m.busyMinDurationMs|0,0>=o?o=0:(l=m.busyDelayMs|0,u=oi()-(10*(1073741821-u)-(m.timeoutMs|0||5e3)),o=u<=l?0:l+o-u),10<o){hn(e,n),e.timeoutHandle=Io(zn.bind(null,e),o);break}}zn(e);break;default:throw Error(s(329))}if(ni(e),e.callbackNode===i)return cu.bind(null,e)}}return null}function Or(e){var i=e.lastExpiredTime;if(i=i!==0?i:1073741823,(Z&(mi|gi))!==Re)throw Error(s(327));if(Hn(),e===ii&&i===$e||yn(e,i),Y!==null){var n=Z;Z|=mi;var o=fu();do try{Uf();break}catch(l){mu(e,l)}while(!0);if(er(),Z=n,Pa.current=o,Ne===xa)throw n=Ba,yn(e,i),hn(e,i),ni(e),n;if(Y!==null)throw Error(s(261));e.finishedWork=e.current.alternate,e.finishedExpirationTime=i,ii=null,zn(e),ni(e)}return null}function Kf(){if(mn!==null){var e=mn;mn=null,e.forEach(function(i,n){Jr(n,i),ni(n)}),wi()}}function uu(e,i){var n=Z;Z|=1;try{return e(i)}finally{Z=n,Z===Re&&wi()}}function du(e,i){var n=Z;Z&=-2,Z|=Pr;try{return e(i)}finally{Z=n,Z===Re&&wi()}}function yn(e,i){e.finishedWork=null,e.finishedExpirationTime=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Hm(n)),Y!==null)for(n=Y.return;n!==null;){var o=n;switch(o.tag){case 1:o=o.type.childContextTypes,o!=null&&ra();break;case 3:In(),je(Ze),je(Je);break;case 5:sr(o);break;case 4:In();break;case 13:je(Te);break;case 19:je(Te);break;case 10:ir(o)}n=n.return}ii=e,Y=pn(e.current,null),$e=i,Ne=dn,Ba=null,At=Si=1073741823,Oa=null,Pt=0,Ra=!1}function mu(e,i){do{try{if(er(),ja.current=Ta,ka)for(var n=Ge.memoizedState;n!==null;){var o=n.queue;o!==null&&(o.pending=null),n=n.next}if(Vi=0,He=We=Ge=null,ka=!1,Y===null||Y.return===null)return Ne=xa,Ba=i,Y=null;e:{var l=e,u=Y.return,m=Y,y=i;if(i=$e,m.effectTag|=2048,m.firstEffect=m.lastEffect=null,y!==null&&typeof y=="object"&&typeof y.then=="function"){var j=y;if((m.mode&2)===0){var k=m.alternate;k?(m.updateQueue=k.updateQueue,m.memoizedState=k.memoizedState,m.expirationTime=k.expirationTime):(m.updateQueue=null,m.memoizedState=null)}var R=(Te.current&1)!==0,N=u;do{var ae;if(ae=N.tag===13){var de=N.memoizedState;if(de!==null)ae=de.dehydrated!==null;else{var li=N.memoizedProps;ae=li.fallback===void 0?!1:li.unstable_avoidThisFallback!==!0?!0:!R}}if(ae){var _e=N.updateQueue;if(_e===null){var h=new Set;h.add(j),N.updateQueue=h}else _e.add(j);if((N.mode&2)===0){if(N.effectTag|=64,m.effectTag&=-2981,m.tag===1)if(m.alternate===null)m.tag=17;else{var p=Ui(1073741823,null);p.tag=2,Zi(m,p)}m.expirationTime=1073741823;break e}y=void 0,m=i;var v=l.pingCache;if(v===null?(v=l.pingCache=new Hf,y=new Set,v.set(j,y)):(y=v.get(j),y===void 0&&(y=new Set,v.set(j,y))),!y.has(m)){y.add(m);var x=Qf.bind(null,l,j,m);j.then(x,x)}N.effectTag|=4096,N.expirationTime=i;break e}N=N.return}while(N!==null);y=Error((vi(m.type)||"A React component")+` suspended while rendering, but no fallback UI was specified.

Add a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.`+uo(m))}Ne!==xr&&(Ne=su),y=vr(y,m),N=u;do{switch(N.tag){case 3:j=y,N.effectTag|=4096,N.expirationTime=i;var B=au(N,j,i);hc(N,B);break e;case 1:j=y;var F=N.type,L=N.stateNode;if((N.effectTag&64)===0&&(typeof F.getDerivedStateFromError=="function"||L!==null&&typeof L.componentDidCatch=="function"&&(Yi===null||!Yi.has(L)))){N.effectTag|=4096,N.expirationTime=i;var se=ou(N,j,i);hc(N,se);break e}}N=N.return}while(N!==null)}Y=wu(Y)}catch(ve){i=ve;continue}break}while(!0)}function fu(){var e=Pa.current;return Pa.current=Ta,e===null?Ta:e}function yu(e,i){e<Si&&2<e&&(Si=e),i!==null&&e<At&&2<e&&(At=e,Oa=i)}function Ja(e){e>Pt&&(Pt=e)}function Uf(){for(;Y!==null;)Y=zu(Y)}function Zf(){for(;Y!==null&&!Sf();)Y=zu(Y)}function zu(e){var i=hu(e.alternate,e,$e);return e.memoizedProps=e.pendingProps,i===null&&(i=wu(e)),ru.current=null,i}function wu(e){Y=e;do{var i=Y.alternate;if(e=Y.return,(Y.effectTag&2048)===0){if(i=Ff(i,Y,$e),$e===1||Y.childExpirationTime!==1){for(var n=0,o=Y.child;o!==null;){var l=o.expirationTime,u=o.childExpirationTime;l>n&&(n=l),u>n&&(n=u),o=o.sibling}Y.childExpirationTime=n}if(i!==null)return i;e!==null&&(e.effectTag&2048)===0&&(e.firstEffect===null&&(e.firstEffect=Y.firstEffect),Y.lastEffect!==null&&(e.lastEffect!==null&&(e.lastEffect.nextEffect=Y.firstEffect),e.lastEffect=Y.lastEffect),1<Y.effectTag&&(e.lastEffect!==null?e.lastEffect.nextEffect=Y:e.firstEffect=Y,e.lastEffect=Y))}else{if(i=_f(Y),i!==null)return i.effectTag&=2047,i;e!==null&&(e.firstEffect=e.lastEffect=null,e.effectTag|=2048)}if(i=Y.sibling,i!==null)return i;Y=e}while(Y!==null);return Ne===dn&&(Ne=xr),null}function Rr(e){var i=e.expirationTime;return e=e.childExpirationTime,i>e?i:e}function zn(e){var i=ua();return Li(99,Vf.bind(null,e,i)),null}function Vf(e,i){do Hn();while(xt!==null);if((Z&(mi|gi))!==Re)throw Error(s(327));var n=e.finishedWork,o=e.finishedExpirationTime;if(n===null)return null;if(e.finishedWork=null,e.finishedExpirationTime=0,n===e.current)throw Error(s(177));e.callbackNode=null,e.callbackExpirationTime=0,e.callbackPriority=90,e.nextKnownPendingLevel=0;var l=Rr(n);if(e.firstPendingTime=l,o<=e.lastSuspendedTime?e.firstSuspendedTime=e.lastSuspendedTime=e.nextKnownPendingLevel=0:o<=e.firstSuspendedTime&&(e.firstSuspendedTime=o-1),o<=e.lastPingedTime&&(e.lastPingedTime=0),o<=e.lastExpiredTime&&(e.lastExpiredTime=0),e===ii&&(Y=ii=null,$e=0),1<n.effectTag?n.lastEffect!==null?(n.lastEffect.nextEffect=n,l=n.firstEffect):l=n:l=n.firstEffect,l!==null){var u=Z;Z|=gi,ru.current=null,Fo=Qt;var m=xl();if(Oo(m)){if("selectionStart"in m)var y={start:m.selectionStart,end:m.selectionEnd};else e:{y=(y=m.ownerDocument)&&y.defaultView||window;var j=y.getSelection&&y.getSelection();if(j&&j.rangeCount!==0){y=j.anchorNode;var k=j.anchorOffset,R=j.focusNode;j=j.focusOffset;try{y.nodeType,R.nodeType}catch{y=null;break e}var N=0,ae=-1,de=-1,li=0,_e=0,h=m,p=null;i:for(;;){for(var v;h!==y||k!==0&&h.nodeType!==3||(ae=N+k),h!==R||j!==0&&h.nodeType!==3||(de=N+j),h.nodeType===3&&(N+=h.nodeValue.length),(v=h.firstChild)!==null;)p=h,h=v;for(;;){if(h===m)break i;if(p===y&&++li===k&&(ae=N),p===R&&++_e===j&&(de=N),(v=h.nextSibling)!==null)break;h=p,p=h.parentNode}h=v}y=ae===-1||de===-1?null:{start:ae,end:de}}else y=null}y=y||{start:0,end:0}}else y=null;_o={activeElementDetached:null,focusedElem:m,selectionRange:y},Qt=!1,_=l;do try{$f()}catch(ee){if(_===null)throw Error(s(330));wn(_,ee),_=_.nextEffect}while(_!==null);_=l;do try{for(m=e,y=i;_!==null;){var x=_.effectTag;if(x&16&&it(_.stateNode,""),x&128){var B=_.alternate;if(B!==null){var F=B.ref;F!==null&&(typeof F=="function"?F(null):F.current=null)}}switch(x&1038){case 2:iu(_),_.effectTag&=-3;break;case 6:iu(_),_.effectTag&=-3,Ar(_.alternate,_);break;case 1024:_.effectTag&=-1025;break;case 1028:_.effectTag&=-1025,Ar(_.alternate,_);break;case 4:Ar(_.alternate,_);break;case 8:k=_,nu(m,k,y),qc(k)}_=_.nextEffect}}catch(ee){if(_===null)throw Error(s(330));wn(_,ee),_=_.nextEffect}while(_!==null);if(F=_o,B=xl(),x=F.focusedElem,y=F.selectionRange,B!==x&&x&&x.ownerDocument&&Pl(x.ownerDocument.documentElement,x)){for(y!==null&&Oo(x)&&(B=y.start,F=y.end,F===void 0&&(F=B),"selectionStart"in x?(x.selectionStart=B,x.selectionEnd=Math.min(F,x.value.length)):(F=(B=x.ownerDocument||document)&&B.defaultView||window,F.getSelection&&(F=F.getSelection(),k=x.textContent.length,m=Math.min(y.start,k),y=y.end===void 0?m:Math.min(y.end,k),!F.extend&&m>y&&(k=y,y=m,m=k),k=Al(x,m),R=Al(x,y),k&&R&&(F.rangeCount!==1||F.anchorNode!==k.node||F.anchorOffset!==k.offset||F.focusNode!==R.node||F.focusOffset!==R.offset)&&(B=B.createRange(),B.setStart(k.node,k.offset),F.removeAllRanges(),m>y?(F.addRange(B),F.extend(R.node,R.offset)):(B.setEnd(R.node,R.offset),F.addRange(B)))))),B=[],F=x;F=F.parentNode;)F.nodeType===1&&B.push({element:F,left:F.scrollLeft,top:F.scrollTop});for(typeof x.focus=="function"&&x.focus(),x=0;x<B.length;x++)F=B[x],F.element.scrollLeft=F.left,F.element.scrollTop=F.top}Qt=!!Fo,_o=Fo=null,e.current=n,_=l;do try{for(x=e;_!==null;){var L=_.effectTag;if(L&36&&Wf(x,_.alternate,_),L&128){B=void 0;var se=_.ref;if(se!==null){var ve=_.stateNode;_.tag,B=ve,typeof se=="function"?se(B):se.current=B}}_=_.nextEffect}}catch(ee){if(_===null)throw Error(s(330));wn(_,ee),_=_.nextEffect}while(_!==null);_=null,Gf(),Z=u}else e.current=n;if(Fa)Fa=!1,xt=e,St=i;else for(_=l;_!==null;)i=_.nextEffect,_.nextEffect=null,_=i;if(i=e.firstPendingTime,i===0&&(Yi=null),i===1073741823?e===Br?Gt++:(Gt=0,Br=e):Gt=0,typeof Nr=="function"&&Nr(n.stateNode,o),ni(e),Na)throw Na=!1,e=Gr,Gr=null,e;return(Z&Pr)!==Re||wi(),null}function $f(){for(;_!==null;){var e=_.effectTag;(e&256)!==0&&Jf(_.alternate,_),(e&512)===0||Fa||(Fa=!0,yc(97,function(){return Hn(),null})),_=_.nextEffect}}function Hn(){if(St!==90){var e=97<St?97:St;return St=90,Li(e,Yf)}}function Yf(){if(xt===null)return!1;var e=xt;if(xt=null,(Z&(mi|gi))!==Re)throw Error(s(331));var i=Z;for(Z|=gi,e=e.current.firstEffect;e!==null;){try{var n=e;if((n.effectTag&512)!==0)switch(n.tag){case 0:case 11:case 15:case 22:Yc(5,n),Qc(5,n)}}catch(o){if(e===null)throw Error(s(330));wn(e,o)}n=e.nextEffect,e.nextEffect=null,e=n}return Z=i,wi(),!0}function pu(e,i,n){i=vr(n,i),i=au(e,i,1073741823),Zi(e,i),e=Ma(e,1073741823),e!==null&&ni(e)}function wn(e,i){if(e.tag===3)pu(e,e,i);else for(var n=e.return;n!==null;){if(n.tag===3){pu(n,e,i);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Yi===null||!Yi.has(o))){e=vr(i,e),e=ou(n,e,1073741823),Zi(n,e),n=Ma(n,1073741823),n!==null&&ni(n);break}}n=n.return}}function Qf(e,i,n){var o=e.pingCache;o!==null&&o.delete(i),ii===e&&$e===n?Ne===Ga||Ne===Sa&&Si===1073741823&&oi()-Sr<lu?yn(e,$e):Ra=!0:gu(e,n)&&(i=e.lastPingedTime,i!==0&&i<n||(e.lastPingedTime=n,ni(e)))}function Xf(e,i){var n=e.stateNode;n!==null&&n.delete(i),i=0,i===0&&(i=ji(),i=fn(i,e,null)),e=Ma(e,i),e!==null&&ni(e)}var hu;hu=function(e,i,n){var o=i.expirationTime;if(e!==null){var l=i.pendingProps;if(e.memoizedProps!==l||Ze.current)hi=!0;else{if(o<n){switch(hi=!1,i.tag){case 3:Wc(i),hr();break;case 5:if(Dc(i),i.mode&4&&n!==1&&l.hidden)return i.expirationTime=i.childExpirationTime=1,null;break;case 1:Ve(i.type)&&sa(i);break;case 4:rr(i,i.stateNode.containerInfo);break;case 10:o=i.memoizedProps.value,l=i.type._context,Pe(ma,l._currentValue),l._currentValue=o;break;case 13:if(i.memoizedState!==null)return o=i.child.childExpirationTime,o!==0&&o>=n?Hc(e,i,n):(Pe(Te,Te.current&1),i=xi(e,i,n),i!==null?i.sibling:null);Pe(Te,Te.current&1);break;case 19:if(o=i.childExpirationTime>=n,(e.effectTag&64)!==0){if(o)return Kc(e,i,n);i.effectTag|=64}if(l=i.memoizedState,l!==null&&(l.rendering=null,l.tail=null),Pe(Te,Te.current),!o)return null}return xi(e,i,n)}hi=!1}}else hi=!1;switch(i.expirationTime=0,i.tag){case 2:if(o=i.type,e!==null&&(e.alternate=null,i.alternate=null,i.effectTag|=2),e=i.pendingProps,l=Nn(i,Je.current),_n(i,n),l=ur(null,i,o,e,l,n),i.effectTag|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0){if(i.tag=1,i.memoizedState=null,i.updateQueue=null,Ve(o)){var u=!0;sa(i)}else u=!1;i.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,nr(i);var m=o.getDerivedStateFromProps;typeof m=="function"&&za(i,o,m,e),l.updater=wa,i.stateNode=l,l._reactInternalFiber=i,ar(i,o,e,n),i=jr(null,i,o,!0,u,n)}else i.tag=0,ei(null,i,l,n),i=i.child;return i;case 16:e:{if(l=i.elementType,e!==null&&(e.alternate=null,i.alternate=null,i.effectTag|=2),e=i.pendingProps,Tm(l),l._status!==1)throw l._result;switch(l=l._result,i.type=l,u=i.tag=iy(l),e=di(l,e),u){case 0:i=gr(null,i,l,e,n);break e;case 1:i=Jc(null,i,l,e,n);break e;case 11:i=Fc(null,i,l,e,n);break e;case 14:i=_c(null,i,l,di(l.type,e),o,n);break e}throw Error(s(306,l,""))}return i;case 0:return o=i.type,l=i.pendingProps,l=i.elementType===o?l:di(o,l),gr(e,i,o,l,n);case 1:return o=i.type,l=i.pendingProps,l=i.elementType===o?l:di(o,l),Jc(e,i,o,l,n);case 3:if(Wc(i),o=i.updateQueue,e===null||o===null)throw Error(s(282));if(o=i.pendingProps,l=i.memoizedState,l=l!==null?l.element:null,tr(e,i),bt(i,o,null,n),o=i.memoizedState.element,o===l)hr(),i=xi(e,i,n);else{if((l=i.stateNode.hydrate)&&($i=Sn(i.stateNode.containerInfo.firstChild),Pi=i,l=un=!0),l)for(n=or(i,null,o,n),i.child=n;n;)n.effectTag=n.effectTag&-3|1024,n=n.sibling;else ei(e,i,o,n),hr();i=i.child}return i;case 5:return Dc(i),e===null&&pr(i),o=i.type,l=i.pendingProps,u=e!==null?e.memoizedProps:null,m=l.children,Mo(o,l)?m=null:u!==null&&Mo(o,u)&&(i.effectTag|=16),Ic(e,i),i.mode&4&&n!==1&&l.hidden?(i.expirationTime=i.childExpirationTime=1,i=null):(ei(e,i,m,n),i=i.child),i;case 6:return e===null&&pr(i),null;case 13:return Hc(e,i,n);case 4:return rr(i,i.stateNode.containerInfo),o=i.pendingProps,e===null?i.child=Mn(i,null,o,n):ei(e,i,o,n),i.child;case 11:return o=i.type,l=i.pendingProps,l=i.elementType===o?l:di(o,l),Fc(e,i,o,l,n);case 7:return ei(e,i,i.pendingProps,n),i.child;case 8:return ei(e,i,i.pendingProps.children,n),i.child;case 12:return ei(e,i,i.pendingProps.children,n),i.child;case 10:e:{o=i.type._context,l=i.pendingProps,m=i.memoizedProps,u=l.value;var y=i.type._context;if(Pe(ma,y._currentValue),y._currentValue=u,m!==null)if(y=m.value,u=rn(y,u)?0:(typeof o._calculateChangedBits=="function"?o._calculateChangedBits(y,u):1073741823)|0,u===0){if(m.children===l.children&&!Ze.current){i=xi(e,i,n);break e}}else for(y=i.child,y!==null&&(y.return=i);y!==null;){var j=y.dependencies;if(j!==null){m=y.child;for(var k=j.firstContext;k!==null;){if(k.context===o&&(k.observedBits&u)!==0){y.tag===1&&(k=Ui(n,null),k.tag=2,Zi(y,k)),y.expirationTime<n&&(y.expirationTime=n),k=y.alternate,k!==null&&k.expirationTime<n&&(k.expirationTime=n),pc(y.return,n),j.expirationTime<n&&(j.expirationTime=n);break}k=k.next}}else m=y.tag===10&&y.type===i.type?null:y.child;if(m!==null)m.return=y;else for(m=y;m!==null;){if(m===i){m=null;break}if(y=m.sibling,y!==null){y.return=m.return,m=y;break}m=m.return}y=m}ei(e,i,l.children,n),i=i.child}return i;case 9:return l=i.type,u=i.pendingProps,o=u.children,_n(i,n),l=ri(l,u.unstable_observedBits),o=o(l),i.effectTag|=1,ei(e,i,o,n),i.child;case 14:return l=i.type,u=di(l,i.pendingProps),u=di(l.type,u),_c(e,i,l,u,o,n);case 15:return Mc(e,i,i.type,i.pendingProps,o,n);case 17:return o=i.type,l=i.pendingProps,l=i.elementType===o?l:di(o,l),e!==null&&(e.alternate=null,i.alternate=null,i.effectTag|=2),i.tag=1,Ve(o)?(e=!0,sa(i)):e=!1,_n(i,n),bc(i,o,l),ar(i,o,l,n),jr(null,i,o,!0,e,n);case 19:return Kc(e,i,n)}throw Error(s(156,i.tag))};var Nr=null,Fr=null;function qf(e){if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u")return!1;var i=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(i.isDisabled||!i.supportsFiber)return!0;try{var n=i.inject(e);Nr=function(o){try{i.onCommitFiberRoot(n,o,void 0,(o.current.effectTag&64)===64)}catch{}},Fr=function(o){try{i.onCommitFiberUnmount(n,o)}catch{}}}catch{}return!0}function ey(e,i,n,o){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.effectTag=0,this.lastEffect=this.firstEffect=this.nextEffect=null,this.childExpirationTime=this.expirationTime=0,this.alternate=null}function ki(e,i,n,o){return new ey(e,i,n,o)}function _r(e){return e=e.prototype,!(!e||!e.isReactComponent)}function iy(e){if(typeof e=="function")return _r(e)?1:0;if(e!=null){if(e=e.$$typeof,e===yi)return 11;if(e===co)return 14}return 2}function pn(e,i){var n=e.alternate;return n===null?(n=ki(e.tag,i,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=i,n.effectTag=0,n.nextEffect=null,n.firstEffect=null,n.lastEffect=null),n.childExpirationTime=e.childExpirationTime,n.expirationTime=e.expirationTime,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,i=e.dependencies,n.dependencies=i===null?null:{expirationTime:i.expirationTime,firstContext:i.firstContext,responders:i.responders},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Wa(e,i,n,o,l,u){var m=2;if(o=e,typeof e=="function")_r(e)&&(m=1);else if(typeof e=="string")m=5;else e:switch(e){case Ci:return Xi(n.children,l,u,i);case ce:m=8,l|=7;break;case Wt:m=8,l|=1;break;case En:return e=ki(12,n,i,l|8),e.elementType=En,e.type=En,e.expirationTime=u,e;case tn:return e=ki(13,n,i,l),e.type=tn,e.elementType=tn,e.expirationTime=u,e;case lo:return e=ki(19,n,i,l),e.elementType=lo,e.expirationTime=u,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case qn:m=10;break e;case Ht:m=9;break e;case yi:m=11;break e;case co:m=14;break e;case Hs:m=16,o=null;break e;case Ls:m=22;break e}throw Error(s(130,e==null?e:typeof e,""))}return i=ki(m,n,i,l),i.elementType=e,i.type=o,i.expirationTime=u,i}function Xi(e,i,n,o){return e=ki(7,e,o,i),e.expirationTime=n,e}function Mr(e,i,n){return e=ki(6,e,null,i),e.expirationTime=n,e}function Ir(e,i,n){return i=ki(4,e.children!==null?e.children:[],e.key,i),i.expirationTime=n,i.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},i}function ny(e,i,n){this.tag=i,this.current=null,this.containerInfo=e,this.pingCache=this.pendingChildren=null,this.finishedExpirationTime=0,this.finishedWork=null,this.timeoutHandle=-1,this.pendingContext=this.context=null,this.hydrate=n,this.callbackNode=null,this.callbackPriority=90,this.lastExpiredTime=this.lastPingedTime=this.nextKnownPendingLevel=this.lastSuspendedTime=this.firstSuspendedTime=this.firstPendingTime=0}function gu(e,i){var n=e.firstSuspendedTime;return e=e.lastSuspendedTime,n!==0&&n>=i&&e<=i}function hn(e,i){var n=e.firstSuspendedTime,o=e.lastSuspendedTime;n<i&&(e.firstSuspendedTime=i),(o>i||n===0)&&(e.lastSuspendedTime=i),i<=e.lastPingedTime&&(e.lastPingedTime=0),i<=e.lastExpiredTime&&(e.lastExpiredTime=0)}function ju(e,i){i>e.firstPendingTime&&(e.firstPendingTime=i);var n=e.firstSuspendedTime;n!==0&&(i>=n?e.firstSuspendedTime=e.lastSuspendedTime=e.nextKnownPendingLevel=0:i>=e.lastSuspendedTime&&(e.lastSuspendedTime=i+1),i>e.nextKnownPendingLevel&&(e.nextKnownPendingLevel=i))}function Jr(e,i){var n=e.lastExpiredTime;(n===0||n>i)&&(e.lastExpiredTime=i)}function Ha(e,i,n,o){var l=i.current,u=ji(),m=Ct.suspense;u=fn(u,l,m);e:if(n){n=n._reactInternalFiber;i:{if(an(n)!==n||n.tag!==1)throw Error(s(170));var y=n;do{switch(y.tag){case 3:y=y.stateNode.context;break i;case 1:if(Ve(y.type)){y=y.stateNode.__reactInternalMemoizedMergedChildContext;break i}}y=y.return}while(y!==null);throw Error(s(171))}if(n.tag===1){var j=n.type;if(Ve(j)){n=tc(n,j,y);break e}}n=y}else n=Hi;return i.context===null?i.context=n:i.pendingContext=n,i=Ui(u,m),i.payload={element:e},o=o===void 0?null:o,o!==null&&(i.callback=o),Zi(l,i),Qi(l,u),u}function Wr(e){return e=e.current,e.child?(e.child.tag===5,e.child.stateNode):null}function ku(e,i){e=e.memoizedState,e!==null&&e.dehydrated!==null&&e.retryTime<i&&(e.retryTime=i)}function Hr(e,i){ku(e,i),(e=e.alternate)&&ku(e,i)}function Lr(e,i,n){n=n!=null&&n.hydrate===!0;var o=new ny(e,i,n),l=ki(3,null,null,i===2?7:i===1?3:0);o.current=l,l.stateNode=o,nr(l),e[dt]=o.current,n&&i!==0&&Gm(e,e.nodeType===9?e:e.ownerDocument),this._internalRoot=o}Lr.prototype.render=function(e){Ha(e,this._internalRoot,null,null)},Lr.prototype.unmount=function(){var e=this._internalRoot,i=e.containerInfo;Ha(null,e,null,function(){i[dt]=null})};function Bt(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ty(e,i){if(i||(i=e?e.nodeType===9?e.documentElement:e.firstChild:null,i=!(!i||i.nodeType!==1||!i.hasAttribute("data-reactroot"))),!i)for(var n;n=e.lastChild;)e.removeChild(n);return new Lr(e,0,i?{hydrate:!0}:void 0)}function La(e,i,n,o,l){var u=n._reactRootContainer;if(u){var m=u._internalRoot;if(typeof l=="function"){var y=l;l=function(){var k=Wr(m);y.call(k)}}Ha(i,m,e,l)}else{if(u=n._reactRootContainer=ty(n,o),m=u._internalRoot,typeof l=="function"){var j=l;l=function(){var k=Wr(m);j.call(k)}}du(function(){Ha(i,m,e,l)})}return Wr(m)}function ay(e,i,n){var o=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ni,key:o==null?null:""+o,children:e,containerInfo:i,implementation:n}}wl=function(e){if(e.tag===13){var i=da(ji(),150,100);Qi(e,i),Hr(e,i)}},Co=function(e){e.tag===13&&(Qi(e,3),Hr(e,3))},pl=function(e){if(e.tag===13){var i=ji();i=fn(i,e,null),Qi(e,i),Hr(e,i)}},ke=function(e,i,n){switch(i){case"input":if(fo(e,n),i=n.name,n.type==="radio"&&i!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<n.length;i++){var o=n[i];if(o!==e&&o.form===e.form){var l=Wo(o);if(!l)throw Error(s(90));Zs(o),fo(o,l)}}}break;case"textarea":Xs(e,n);break;case"select":i=n.value,i!=null&&An(e,!!n.multiple,i,!1)}},Ee=uu,Ae=function(e,i,n,o,l){var u=Z;Z|=4;try{return Li(98,e.bind(null,i,n,o,l))}finally{Z=u,Z===Re&&wi()}},ue=function(){(Z&(1|mi|gi))===Re&&(Kf(),Hn())},Qe=function(e,i){var n=Z;Z|=2;try{return e(i)}finally{Z=n,Z===Re&&wi()}};function bu(e,i){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Bt(i))throw Error(s(200));return ay(e,i,null,n)}var oy={Events:[ft,on,Wo,re,le,Gn,function(e){jo(e,Km)},ye,ze,Xt,Vt,Hn,{current:!1}]};return(function(e){var i=e.findFiberByHostInstance;return qf(a({},e,{overrideHookState:null,overrideProps:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:te.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=dl(n),n===null?null:n.stateNode},findFiberByHostInstance:function(n){return i?i(n):null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null}))})({findFiberByHostInstance:mt,bundleType:0,version:"16.14.0",rendererPackageName:"react-dom"}),ti.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=oy,ti.createPortal=bu,ti.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var i=e._reactInternalFiber;if(i===void 0)throw typeof e.render=="function"?Error(s(188)):Error(s(268,Object.keys(e)));return e=dl(i),e=e===null?null:e.stateNode,e},ti.flushSync=function(e,i){if((Z&(mi|gi))!==Re)throw Error(s(187));var n=Z;Z|=1;try{return Li(99,e.bind(null,i))}finally{Z=n,wi()}},ti.hydrate=function(e,i,n){if(!Bt(i))throw Error(s(200));return La(null,e,i,!0,n)},ti.render=function(e,i,n){if(!Bt(i))throw Error(s(200));return La(null,e,i,!1,n)},ti.unmountComponentAtNode=function(e){if(!Bt(e))throw Error(s(40));return e._reactRootContainer?(du(function(){La(null,null,e,!1,function(){e._reactRootContainer=null,e[dt]=null})}),!0):!1},ti.unstable_batchedUpdates=uu,ti.unstable_createPortal=function(e,i){return bu(e,i,2<arguments.length&&arguments[2]!==void 0?arguments[2]:null)},ti.unstable_renderSubtreeIntoContainer=function(e,i,n,o){if(!Bt(n))throw Error(s(200));if(e==null||e._reactInternalFiber===void 0)throw Error(s(38));return La(e,i,n,!1,o)},ti.version="16.14.0",ti}var Su;function fy(){if(Su)return Vr.exports;Su=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(a){console.error(a)}}return t(),Vr.exports=my(),Vr.exports}var yy=fy();const bn=Mt(yy),jd=t=>t.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[\u0142]/g,"l").replace(/[^a-z ]/g,"").toLowerCase(),kd="DIRECTIVE",bd="BODY_LINE",zy=t=>{const a=/{(.*):(.*)}/,r=t.match(a);if(r){const z=r[1].trim(),g=r[2].trim(),C=z==="number"?parseInt(g):g;return{type:kd,directive:z,value:C}}const s=/\[.*?]/g,c=t.replace(s,"").trim(),d=(t.match(s)||[]).map(z=>z.replace(/[[\]]/g,""));return{type:bd,bodyLine:{lyrics:c,chords:d}}},wy=t=>{const a=t.split(`
`).map(zy),r=a.filter(z=>z.type===bd).map(z=>z.bodyLine),s=r.findIndex(z=>z.lyrics||z.chords.length),c=r.length-r.slice().reverse().findIndex(z=>z.lyrics||z.chords.length),d=r.slice(s,c),f=a.filter(z=>z.type===kd).reduce((z,g)=>({...z,[g.directive]:g.value}),{});return{...f,latinTitle:jd(f.title||""),body:d}},py=t=>t.split(/---\s*\n/).map(wy),hy=`
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
`,gy=py(hy);var Qr={exports:{}},Xr,Gu;function jy(){if(Gu)return Xr;Gu=1;var t="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return Xr=t,Xr}var qr,Bu;function ky(){if(Bu)return qr;Bu=1;var t=jy();function a(){}function r(){}return r.resetWarningCache=a,qr=function(){function s(f,z,g,C,D,S){if(S!==t){var A=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw A.name="Invariant Violation",A}}s.isRequired=s;function c(){return s}var d={array:s,bool:s,func:s,number:s,object:s,string:s,symbol:s,any:s,arrayOf:c,element:s,elementType:s,instanceOf:c,node:s,objectOf:c,oneOf:c,oneOfType:c,shape:c,exact:c,checkPropTypes:r,resetWarningCache:a};return d.PropTypes=d,d},qr}var Ou;function by(){return Ou||(Ou=1,Qr.exports=ky()()),Qr.exports}var Cy=by();const I=Mt(Cy),Cd=({chord:t})=>E.jsx("span",{className:"sb-chord",children:`${t} `});Cd.propTypes={chord:I.string.isRequired};var es={exports:{}};var Ru;function vy(){return Ru||(Ru=1,(function(t){(function(){var a={}.hasOwnProperty;function r(){for(var d="",f=0;f<arguments.length;f++){var z=arguments[f];z&&(d=c(d,s(z)))}return d}function s(d){if(typeof d=="string"||typeof d=="number")return d;if(typeof d!="object")return"";if(Array.isArray(d))return r.apply(null,d);if(d.toString!==Object.prototype.toString&&!d.toString.toString().includes("[native code]"))return d.toString();var f="";for(var z in d)a.call(d,z)&&d[z]&&(f=c(f,z));return f}function c(d,f){return f?d?d+" "+f:d+f:d}t.exports?(r.default=r,t.exports=r):window.classNames=r})()})(es)),es.exports}var Dy=vy();const Fe=Mt(Dy),vd=({song:t,chordsShown:a,starredCount:r})=>E.jsxs(E.Fragment,{children:[E.jsxs("div",{className:"row songtitle mt-1 mb-1",children:[E.jsxs("div",{className:Fe("col-10",{"sb-starred-song":t.starred}),children:[t.number,". ",t.title]}),E.jsx("div",{className:"col-2 sb-star-info sb-lyrics",children:t.starred?`${t.starredNumber}/${r}`:E.jsx(E.Fragment,{children:" "})})]}),t.body.map(({lyrics:s,chords:c},d)=>E.jsxs("div",{className:"row",children:[E.jsx("div",{className:"col",children:s||E.jsx("br",{})}),a&&c.length>0&&E.jsx("div",{className:"col-4",children:c.map((f,z)=>E.jsx(Cd,{chord:f},z))})]},`songline${d}`))]});vd.propTypes={song:I.object.isRequired,chordsShown:I.bool.isRequired,starredCount:I.number.isRequired};function Ty(t,a){if(t==null)return{};var r={};for(var s in t)if({}.hasOwnProperty.call(t,s)){if(a.indexOf(s)!==-1)continue;r[s]=t[s]}return r}function zs(t,a){return zs=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,s){return r.__proto__=s,r},zs(t,a)}function Ey(t,a){t.prototype=Object.create(a.prototype),t.prototype.constructor=t,zs(t,a)}const Ay=["xxl","xl","lg","md","sm","xs"],Py="xs",Ss=T.createContext({prefixes:{},breakpoints:Ay,minBreakpoint:Py}),{Consumer:Yp,Provider:Qp}=Ss;function Dn(t,a){const{prefixes:r}=T.useContext(Ss);return t||r[a]||a}function xy(){const{dir:t}=T.useContext(Ss);return t==="rtl"}function to(t){return t&&t.ownerDocument||document}function Sy(t){var a=to(t);return a&&a.defaultView||window}function Gy(t,a){return Sy(t).getComputedStyle(t,a)}var By=/([A-Z])/g;function Oy(t){return t.replace(By,"-$1").toLowerCase()}var Ry=/^ms-/;function Ka(t){return Oy(t).replace(Ry,"-ms-")}var Ny=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;function Fy(t){return!!(t&&Ny.test(t))}function vn(t,a){var r="",s="";if(typeof a=="string")return t.style.getPropertyValue(Ka(a))||Gy(t).getPropertyValue(Ka(a));Object.keys(a).forEach(function(c){var d=a[c];!d&&d!==0?t.style.removeProperty(Ka(c)):Fy(c)?s+=c+"("+d+") ":r+=Ka(c)+": "+d+";"}),s&&(r+="transform: "+s+";"),t.style.cssText+=";"+r}const Nu={disabled:!1},Dd=Ye.createContext(null);var _y=function(a){return a.scrollTop},Ot="unmounted",gn="exited",en="entering",jn="entered",ws="exiting",Oi=(function(t){Ey(a,t);function a(s,c){var d;d=t.call(this,s,c)||this;var f=c,z=f&&!f.isMounting?s.enter:s.appear,g;return d.appearStatus=null,s.in?z?(g=gn,d.appearStatus=en):g=jn:s.unmountOnExit||s.mountOnEnter?g=Ot:g=gn,d.state={status:g},d.nextCallback=null,d}a.getDerivedStateFromProps=function(c,d){var f=c.in;return f&&d.status===Ot?{status:gn}:null};var r=a.prototype;return r.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},r.componentDidUpdate=function(c){var d=null;if(c!==this.props){var f=this.state.status;this.props.in?f!==en&&f!==jn&&(d=en):(f===en||f===jn)&&(d=ws)}this.updateStatus(!1,d)},r.componentWillUnmount=function(){this.cancelNextCallback()},r.getTimeouts=function(){var c=this.props.timeout,d,f,z;return d=f=z=c,c!=null&&typeof c!="number"&&(d=c.exit,f=c.enter,z=c.appear!==void 0?c.appear:f),{exit:d,enter:f,appear:z}},r.updateStatus=function(c,d){if(c===void 0&&(c=!1),d!==null)if(this.cancelNextCallback(),d===en){if(this.props.unmountOnExit||this.props.mountOnEnter){var f=this.props.nodeRef?this.props.nodeRef.current:bn.findDOMNode(this);f&&_y(f)}this.performEnter(c)}else this.performExit();else this.props.unmountOnExit&&this.state.status===gn&&this.setState({status:Ot})},r.performEnter=function(c){var d=this,f=this.props.enter,z=this.context?this.context.isMounting:c,g=this.props.nodeRef?[z]:[bn.findDOMNode(this),z],C=g[0],D=g[1],S=this.getTimeouts(),A=z?S.appear:S.enter;if(!c&&!f||Nu.disabled){this.safeSetState({status:jn},function(){d.props.onEntered(C)});return}this.props.onEnter(C,D),this.safeSetState({status:en},function(){d.props.onEntering(C,D),d.onTransitionEnd(A,function(){d.safeSetState({status:jn},function(){d.props.onEntered(C,D)})})})},r.performExit=function(){var c=this,d=this.props.exit,f=this.getTimeouts(),z=this.props.nodeRef?void 0:bn.findDOMNode(this);if(!d||Nu.disabled){this.safeSetState({status:gn},function(){c.props.onExited(z)});return}this.props.onExit(z),this.safeSetState({status:ws},function(){c.props.onExiting(z),c.onTransitionEnd(f.exit,function(){c.safeSetState({status:gn},function(){c.props.onExited(z)})})})},r.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},r.safeSetState=function(c,d){d=this.setNextCallback(d),this.setState(c,d)},r.setNextCallback=function(c){var d=this,f=!0;return this.nextCallback=function(z){f&&(f=!1,d.nextCallback=null,c(z))},this.nextCallback.cancel=function(){f=!1},this.nextCallback},r.onTransitionEnd=function(c,d){this.setNextCallback(d);var f=this.props.nodeRef?this.props.nodeRef.current:bn.findDOMNode(this),z=c==null&&!this.props.addEndListener;if(!f||z){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var g=this.props.nodeRef?[this.nextCallback]:[f,this.nextCallback],C=g[0],D=g[1];this.props.addEndListener(C,D)}c!=null&&setTimeout(this.nextCallback,c)},r.render=function(){var c=this.state.status;if(c===Ot)return null;var d=this.props,f=d.children;d.in,d.mountOnEnter,d.unmountOnExit,d.appear,d.enter,d.exit,d.timeout,d.addEndListener,d.onEnter,d.onEntering,d.onEntered,d.onExit,d.onExiting,d.onExited,d.nodeRef;var z=Ty(d,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return Ye.createElement(Dd.Provider,{value:null},typeof f=="function"?f(c,z):Ye.cloneElement(Ye.Children.only(f),z))},a})(Ye.Component);Oi.contextType=Dd;Oi.propTypes={};function Kn(){}Oi.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:Kn,onEntering:Kn,onEntered:Kn,onExit:Kn,onExiting:Kn,onExited:Kn};Oi.UNMOUNTED=Ot;Oi.EXITED=gn;Oi.ENTERING=en;Oi.ENTERED=jn;Oi.EXITING=ws;function My(t){return t.code==="Escape"||t.keyCode===27}function Iy(){const t=T.version.split(".");return{major:+t[0],minor:+t[1],patch:+t[2]}}function ao(t){if(!t||typeof t=="function")return null;const{major:a}=Iy();return a>=19?t.props.ref:t.ref}const Xn=!!(typeof window<"u"&&window.document&&window.document.createElement);var ps=!1,hs=!1;try{var is={get passive(){return ps=!0},get once(){return hs=ps=!0}};Xn&&(window.addEventListener("test",is,is),window.removeEventListener("test",is,!0))}catch{}function Td(t,a,r,s){if(s&&typeof s!="boolean"&&!hs){var c=s.once,d=s.capture,f=r;!hs&&c&&(f=r.__once||function z(g){this.removeEventListener(a,z,d),r.call(this,g)},r.__once=f),t.addEventListener(a,f,ps?s:d)}t.addEventListener(a,r,s)}function gs(t,a,r,s){var c=s&&typeof s!="boolean"?s.capture:s;t.removeEventListener(a,r,c),r.__once&&t.removeEventListener(a,r.__once,c)}function Qa(t,a,r,s){return Td(t,a,r,s),function(){gs(t,a,r,s)}}function Jy(t,a,r,s){if(s===void 0&&(s=!0),t){var c=document.createEvent("HTMLEvents");c.initEvent(a,r,s),t.dispatchEvent(c)}}function Wy(t){var a=vn(t,"transitionDuration")||"",r=a.indexOf("ms")===-1?1e3:1;return parseFloat(a)*r}function Hy(t,a,r){r===void 0&&(r=5);var s=!1,c=setTimeout(function(){s||Jy(t,"transitionend",!0)},a+r),d=Qa(t,"transitionend",function(){s=!0},{once:!0});return function(){clearTimeout(c),d()}}function Ed(t,a,r,s){r==null&&(r=Wy(t)||0);var c=Hy(t,r,s),d=Qa(t,"transitionend",a);return function(){c(),d()}}function Fu(t,a){const r=vn(t,a)||"",s=r.indexOf("ms")===-1?1e3:1;return parseFloat(r)*s}function Ly(t,a){const r=Fu(t,"transitionDuration"),s=Fu(t,"transitionDelay"),c=Ed(t,d=>{d.target===t&&(c(),a(d))},r+s)}function Ky(t){t.offsetHeight}const _u=t=>!t||typeof t=="function"?t:a=>{t.current=a};function Uy(t,a){const r=_u(t),s=_u(a);return c=>{r&&r(c),s&&s(c)}}function Ad(t,a){return T.useMemo(()=>Uy(t,a),[t,a])}function Zy(t){return t&&"setState"in t?bn.findDOMNode(t):t??null}const Pd=Ye.forwardRef(({onEnter:t,onEntering:a,onEntered:r,onExit:s,onExiting:c,onExited:d,addEndListener:f,children:z,childRef:g,...C},D)=>{const S=T.useRef(null),A=Ad(S,g),H=V=>{A(Zy(V))},W=V=>oe=>{V&&S.current&&V(S.current,oe)},Q=T.useCallback(W(t),[t]),U=T.useCallback(W(a),[a]),G=T.useCallback(W(r),[r]),X=T.useCallback(W(s),[s]),$=T.useCallback(W(c),[c]),ie=T.useCallback(W(d),[d]),le=T.useCallback(W(f),[f]);return E.jsx(Oi,{ref:D,...C,onEnter:Q,onEntered:G,onEntering:U,onExit:X,onExited:ie,onExiting:$,addEndListener:le,nodeRef:S,children:typeof z=="function"?(V,oe)=>z(V,{...oe,ref:H}):Ye.cloneElement(z,{ref:H})})});Pd.displayName="TransitionWrapper";function Vy(t){const a=T.useRef(t);return T.useEffect(()=>{a.current=t},[t]),a}function js(t){const a=Vy(t);return T.useCallback(function(...r){return a.current&&a.current(...r)},[a])}const $y=(t=>T.forwardRef((a,r)=>E.jsx("div",{...a,ref:r,className:Fe(a.className,t)})));function Yy(t){const a=T.useRef(t);return T.useEffect(()=>{a.current=t},[t]),a}function kn(t){const a=Yy(t);return T.useCallback(function(...r){return a.current&&a.current(...r)},[a])}function Qy(){const t=T.useRef(!0),a=T.useRef(()=>t.current);return T.useEffect(()=>(t.current=!0,()=>{t.current=!1}),[]),a.current}function Xy(t){const a=T.useRef(null);return T.useEffect(()=>{a.current=t}),a.current}const qy=typeof global<"u"&&global.navigator&&global.navigator.product==="ReactNative",ez=typeof document<"u",Mu=ez||qy?T.useLayoutEffect:T.useEffect,iz=["as","disabled"];function nz(t,a){if(t==null)return{};var r={};for(var s in t)if({}.hasOwnProperty.call(t,s)){if(a.indexOf(s)>=0)continue;r[s]=t[s]}return r}function tz(t){return!t||t.trim()==="#"}function xd({tagName:t,disabled:a,href:r,target:s,rel:c,role:d,onClick:f,tabIndex:z=0,type:g}){t||(r!=null||s!=null||c!=null?t="a":t="button");const C={tagName:t};if(t==="button")return[{type:g||"button",disabled:a},C];const D=A=>{if((a||t==="a"&&tz(r))&&A.preventDefault(),a){A.stopPropagation();return}f?.(A)},S=A=>{A.key===" "&&(A.preventDefault(),D(A))};return t==="a"&&(r||(r="#"),a&&(r=void 0)),[{role:d??"button",disabled:void 0,tabIndex:a?void 0:z,href:r,target:t==="a"?s:void 0,"aria-disabled":a||void 0,rel:t==="a"?c:void 0,onClick:D,onKeyDown:S},C]}const az=T.forwardRef((t,a)=>{let{as:r,disabled:s}=t,c=nz(t,iz);const[d,{tagName:f}]=xd(Object.assign({tagName:r,disabled:s},c));return E.jsx(f,Object.assign({},c,d,{ref:a}))});az.displayName="Button";const oz={[en]:"show",[jn]:"show"},Gs=T.forwardRef(({className:t,children:a,transitionClasses:r={},onEnter:s,...c},d)=>{const f={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,...c},z=T.useCallback((g,C)=>{Ky(g),s?.(g,C)},[s]);return E.jsx(Pd,{ref:d,addEndListener:Ly,...f,onEnter:z,childRef:ao(a),children:(g,C)=>T.cloneElement(a,{...C,className:Fe("fade",t,a.props.className,oz[g],r[g])})})});Gs.displayName="Fade";var ns={exports:{}},ts,Iu;function rz(){if(Iu)return ts;Iu=1;var t="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return ts=t,ts}var as,Ju;function sz(){if(Ju)return as;Ju=1;var t=rz();function a(){}function r(){}return r.resetWarningCache=a,as=function(){function s(f,z,g,C,D,S){if(S!==t){var A=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw A.name="Invariant Violation",A}}s.isRequired=s;function c(){return s}var d={array:s,bigint:s,bool:s,func:s,number:s,object:s,string:s,symbol:s,any:s,arrayOf:c,element:s,elementType:s,instanceOf:c,node:s,objectOf:c,oneOf:c,oneOfType:c,shape:c,exact:c,checkPropTypes:r,resetWarningCache:a};return d.PropTypes=d,d},as}var Wu;function lz(){return Wu||(Wu=1,ns.exports=sz()()),ns.exports}var cz=lz();const os=Mt(cz),uz={"aria-label":os.string,onClick:os.func,variant:os.oneOf(["white"])},Bs=T.forwardRef(({className:t,variant:a,"aria-label":r="Close",...s},c)=>E.jsx("button",{ref:c,type:"button",className:Fe("btn-close",a&&`btn-close-${a}`,t),"aria-label":r,...s}));Bs.displayName="CloseButton";Bs.propTypes=uz;const $n=T.forwardRef(({as:t,bsPrefix:a,variant:r="primary",size:s,active:c=!1,disabled:d=!1,className:f,...z},g)=>{const C=Dn(a,"btn"),[D,{tagName:S}]=xd({tagName:t,disabled:d,...z}),A=S;return E.jsx(A,{...D,...z,ref:g,disabled:d,className:Fe(f,C,c&&"active",r&&`${C}-${r}`,s&&`${C}-${s}`,z.href&&d&&"disabled")})});$n.displayName="Button";function dz(t){const a=T.useRef(t);return a.current=t,a}function mz(t){const a=dz(t);T.useEffect(()=>()=>a.current(),[])}var fz=Function.prototype.bind.call(Function.prototype.call,[].slice);function Un(t,a){return fz(t.querySelectorAll(a))}function Hu(t,a){if(t.contains)return t.contains(a);if(t.compareDocumentPosition)return t===a||!!(t.compareDocumentPosition(a)&16)}const yz="data-rr-ui-";function zz(t){return`${yz}${t}`}const Sd=T.createContext(Xn?window:void 0);Sd.Provider;function Os(){return T.useContext(Sd)}const Lu=t=>!t||typeof t=="function"?t:a=>{t.current=a};function wz(t,a){const r=Lu(t),s=Lu(a);return c=>{r&&r(c),s&&s(c)}}function Rs(t,a){return T.useMemo(()=>wz(t,a),[t,a])}var Ua;function Ku(t){if((!Ua&&Ua!==0||t)&&Xn){var a=document.createElement("div");a.style.position="absolute",a.style.top="-9999px",a.style.width="50px",a.style.height="50px",a.style.overflow="scroll",document.body.appendChild(a),Ua=a.offsetWidth-a.clientWidth,document.body.removeChild(a)}return Ua}function pz(){return T.useState(null)}function rs(t){t===void 0&&(t=to());try{var a=t.activeElement;return!a||!a.nodeName?null:a}catch{return t.body}}function hz(t){const a=T.useRef(t);return a.current=t,a}function gz(t){const a=hz(t);T.useEffect(()=>()=>a.current(),[])}function jz(t=document){const a=t.defaultView;return Math.abs(a.innerWidth-t.documentElement.clientWidth)}const Uu=zz("modal-open");class Ns{constructor({ownerDocument:a,handleContainerOverflow:r=!0,isRTL:s=!1}={}){this.handleContainerOverflow=r,this.isRTL=s,this.modals=[],this.ownerDocument=a}getScrollbarWidth(){return jz(this.ownerDocument)}getElement(){return(this.ownerDocument||document).body}setModalAttributes(a){}removeModalAttributes(a){}setContainerStyle(a){const r={overflow:"hidden"},s=this.isRTL?"paddingLeft":"paddingRight",c=this.getElement();a.style={overflow:c.style.overflow,[s]:c.style[s]},a.scrollBarWidth&&(r[s]=`${parseInt(vn(c,s)||"0",10)+a.scrollBarWidth}px`),c.setAttribute(Uu,""),vn(c,r)}reset(){[...this.modals].forEach(a=>this.remove(a))}removeContainerStyle(a){const r=this.getElement();r.removeAttribute(Uu),Object.assign(r.style,a.style)}add(a){let r=this.modals.indexOf(a);return r!==-1||(r=this.modals.length,this.modals.push(a),this.setModalAttributes(a),r!==0)||(this.state={scrollBarWidth:this.getScrollbarWidth(),style:{}},this.handleContainerOverflow&&this.setContainerStyle(this.state)),r}remove(a){const r=this.modals.indexOf(a);r!==-1&&(this.modals.splice(r,1),!this.modals.length&&this.handleContainerOverflow&&this.removeContainerStyle(this.state),this.removeModalAttributes(a))}isTopModal(a){return!!this.modals.length&&this.modals[this.modals.length-1]===a}}const ss=(t,a)=>Xn?t==null?(a||to()).body:(typeof t=="function"&&(t=t()),t&&"current"in t&&(t=t.current),t&&("nodeType"in t||t.getBoundingClientRect)?t:null):null;function kz(t,a){const r=Os(),[s,c]=T.useState(()=>ss(t,r?.document));if(!s){const d=ss(t);d&&c(d)}return T.useEffect(()=>{},[a,s]),T.useEffect(()=>{const d=ss(t);d!==s&&c(d)},[t,s]),s}function bz({children:t,in:a,onExited:r,mountOnEnter:s,unmountOnExit:c}){const d=T.useRef(null),f=T.useRef(a),z=kn(r);T.useEffect(()=>{a?f.current=!0:z(d.current)},[a,z]);const g=Rs(d,ao(t)),C=T.cloneElement(t,{ref:g});return a?C:c||!f.current&&s?null:C}const Cz=["onEnter","onEntering","onEntered","onExit","onExiting","onExited","addEndListener","children"];function vz(t,a){if(t==null)return{};var r={};for(var s in t)if({}.hasOwnProperty.call(t,s)){if(a.indexOf(s)>=0)continue;r[s]=t[s]}return r}function Dz(t){let{onEnter:a,onEntering:r,onEntered:s,onExit:c,onExiting:d,onExited:f,addEndListener:z,children:g}=t,C=vz(t,Cz);const D=T.useRef(null),S=Rs(D,ao(g)),A=ie=>le=>{ie&&D.current&&ie(D.current,le)},H=T.useCallback(A(a),[a]),W=T.useCallback(A(r),[r]),Q=T.useCallback(A(s),[s]),U=T.useCallback(A(c),[c]),G=T.useCallback(A(d),[d]),X=T.useCallback(A(f),[f]),$=T.useCallback(A(z),[z]);return Object.assign({},C,{nodeRef:D},a&&{onEnter:H},r&&{onEntering:W},s&&{onEntered:Q},c&&{onExit:U},d&&{onExiting:G},f&&{onExited:X},z&&{addEndListener:$},{children:typeof g=="function"?(ie,le)=>g(ie,Object.assign({},le,{ref:S})):T.cloneElement(g,{ref:S})})}const Tz=["component"];function Ez(t,a){if(t==null)return{};var r={};for(var s in t)if({}.hasOwnProperty.call(t,s)){if(a.indexOf(s)>=0)continue;r[s]=t[s]}return r}const Az=T.forwardRef((t,a)=>{let{component:r}=t,s=Ez(t,Tz);const c=Dz(s);return E.jsx(r,Object.assign({ref:a},c))});function Pz({in:t,onTransition:a}){const r=T.useRef(null),s=T.useRef(!0),c=kn(a);return Mu(()=>{if(!r.current)return;let d=!1;return c({in:t,element:r.current,initial:s.current,isStale:()=>d}),()=>{d=!0}},[t,c]),Mu(()=>(s.current=!1,()=>{s.current=!0}),[]),r}function xz({children:t,in:a,onExited:r,onEntered:s,transition:c}){const[d,f]=T.useState(!a);a&&d&&f(!1);const z=Pz({in:!!a,onTransition:C=>{const D=()=>{C.isStale()||(C.in?s?.(C.element,C.initial):(f(!0),r?.(C.element)))};Promise.resolve(c(C)).then(D,S=>{throw C.in||f(!0),S})}}),g=Rs(z,ao(t));return d&&!a?null:T.cloneElement(t,{ref:g})}function Zu(t,a,r){return t?E.jsx(Az,Object.assign({},r,{component:t})):a?E.jsx(xz,Object.assign({},r,{transition:a})):E.jsx(bz,Object.assign({},r))}const Sz=["show","role","className","style","children","backdrop","keyboard","onBackdropClick","onEscapeKeyDown","transition","runTransition","backdropTransition","runBackdropTransition","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","renderDialog","renderBackdrop","manager","container","onShow","onHide","onExit","onExited","onExiting","onEnter","onEntering","onEntered"];function Gz(t,a){if(t==null)return{};var r={};for(var s in t)if({}.hasOwnProperty.call(t,s)){if(a.indexOf(s)>=0)continue;r[s]=t[s]}return r}let ls;function Bz(t){return ls||(ls=new Ns({ownerDocument:t?.document})),ls}function Oz(t){const a=Os(),r=t||Bz(a),s=T.useRef({dialog:null,backdrop:null});return Object.assign(s.current,{add:()=>r.add(s.current),remove:()=>r.remove(s.current),isTopModal:()=>r.isTopModal(s.current),setDialogRef:T.useCallback(c=>{s.current.dialog=c},[]),setBackdropRef:T.useCallback(c=>{s.current.backdrop=c},[])})}const Gd=T.forwardRef((t,a)=>{let{show:r=!1,role:s="dialog",className:c,style:d,children:f,backdrop:z=!0,keyboard:g=!0,onBackdropClick:C,onEscapeKeyDown:D,transition:S,runTransition:A,backdropTransition:H,runBackdropTransition:W,autoFocus:Q=!0,enforceFocus:U=!0,restoreFocus:G=!0,restoreFocusOptions:X,renderDialog:$,renderBackdrop:ie=te=>E.jsx("div",Object.assign({},te)),manager:le,container:V,onShow:oe,onHide:re=()=>{},onExit:we,onExited:ke,onExiting:pe,onEnter:be,onEntering:Ue,onEntered:ye}=t,ze=Gz(t,Sz);const Ee=Os(),Ae=kz(V),ue=Oz(le),Qe=Qy(),Oe=Xy(r),[Se,Me]=T.useState(!r),he=T.useRef(null);T.useImperativeHandle(a,()=>ue,[ue]),Xn&&!Oe&&r&&(he.current=rs(Ee?.document)),r&&Se&&Me(!1);const P=kn(()=>{if(ue.add(),ne.current=Qa(document,"keydown",J),K.current=Qa(document,"focus",()=>setTimeout(b),!0),oe&&oe(),Q){var te,Ri;const nn=rs((te=(Ri=ue.dialog)==null?void 0:Ri.ownerDocument)!=null?te:Ee?.document);ue.dialog&&nn&&!Hu(ue.dialog,nn)&&(he.current=nn,ue.dialog.focus())}}),w=kn(()=>{if(ue.remove(),ne.current==null||ne.current(),K.current==null||K.current(),G){var te;(te=he.current)==null||te.focus==null||te.focus(X),he.current=null}});T.useEffect(()=>{!r||!Ae||P()},[r,Ae,P]),T.useEffect(()=>{Se&&w()},[Se,w]),gz(()=>{w()});const b=kn(()=>{if(!U||!Qe()||!ue.isTopModal())return;const te=rs(Ee?.document);ue.dialog&&te&&!Hu(ue.dialog,te)&&ue.dialog.focus()}),O=kn(te=>{te.target===te.currentTarget&&(C?.(te),z===!0&&re())}),J=kn(te=>{g&&My(te)&&ue.isTopModal()&&(D?.(te),te.defaultPrevented||re())}),K=T.useRef(),ne=T.useRef(),q=(...te)=>{Me(!0),ke?.(...te)};if(!Ae)return null;const M=Object.assign({role:s,ref:ue.setDialogRef,"aria-modal":s==="dialog"?!0:void 0},ze,{style:d,className:c,tabIndex:-1});let ge=$?$(M):E.jsx("div",Object.assign({},M,{children:T.cloneElement(f,{role:"document"})}));ge=Zu(S,A,{unmountOnExit:!0,mountOnEnter:!0,appear:!0,in:!!r,onExit:we,onExiting:pe,onExited:q,onEnter:be,onEntering:Ue,onEntered:ye,children:ge});let xe=null;return z&&(xe=ie({ref:ue.setBackdropRef,onClick:O}),xe=Zu(H,W,{in:!!r,appear:!0,mountOnEnter:!0,unmountOnExit:!0,children:xe})),E.jsx(E.Fragment,{children:bn.createPortal(E.jsxs(E.Fragment,{children:[xe,ge]}),Ae)})});Gd.displayName="Modal";const Rz=Object.assign(Gd,{Manager:Ns});function Nz(t,a){return t.classList?t.classList.contains(a):(" "+(t.className.baseVal||t.className)+" ").indexOf(" "+a+" ")!==-1}function Fz(t,a){t.classList?t.classList.add(a):Nz(t,a)||(typeof t.className=="string"?t.className=t.className+" "+a:t.setAttribute("class",(t.className&&t.className.baseVal||"")+" "+a))}function Vu(t,a){return t.replace(new RegExp("(^|\\s)"+a+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function _z(t,a){t.classList?t.classList.remove(a):typeof t.className=="string"?t.className=Vu(t.className,a):t.setAttribute("class",Vu(t.className&&t.className.baseVal||"",a))}const Zn={FIXED_CONTENT:".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",STICKY_CONTENT:".sticky-top",NAVBAR_TOGGLER:".navbar-toggler"};class Mz extends Ns{adjustAndStore(a,r,s){const c=r.style[a];r.dataset[a]=c,vn(r,{[a]:`${parseFloat(vn(r,a))+s}px`})}restore(a,r){const s=r.dataset[a];s!==void 0&&(delete r.dataset[a],vn(r,{[a]:s}))}setContainerStyle(a){super.setContainerStyle(a);const r=this.getElement();if(Fz(r,"modal-open"),!a.scrollBarWidth)return;const s=this.isRTL?"paddingLeft":"paddingRight",c=this.isRTL?"marginLeft":"marginRight";Un(r,Zn.FIXED_CONTENT).forEach(d=>this.adjustAndStore(s,d,a.scrollBarWidth)),Un(r,Zn.STICKY_CONTENT).forEach(d=>this.adjustAndStore(c,d,-a.scrollBarWidth)),Un(r,Zn.NAVBAR_TOGGLER).forEach(d=>this.adjustAndStore(c,d,a.scrollBarWidth))}removeContainerStyle(a){super.removeContainerStyle(a);const r=this.getElement();_z(r,"modal-open");const s=this.isRTL?"paddingLeft":"paddingRight",c=this.isRTL?"marginLeft":"marginRight";Un(r,Zn.FIXED_CONTENT).forEach(d=>this.restore(s,d)),Un(r,Zn.STICKY_CONTENT).forEach(d=>this.restore(c,d)),Un(r,Zn.NAVBAR_TOGGLER).forEach(d=>this.restore(c,d))}}let cs;function Iz(t){return cs||(cs=new Mz(t)),cs}const Bd=T.forwardRef(({className:t,bsPrefix:a,as:r="div",...s},c)=>(a=Dn(a,"modal-body"),E.jsx(r,{ref:c,className:Fe(t,a),...s})));Bd.displayName="ModalBody";const Od=T.createContext({onHide(){}}),Fs=T.forwardRef(({bsPrefix:t,className:a,contentClassName:r,centered:s,size:c,fullscreen:d,children:f,scrollable:z,...g},C)=>{t=Dn(t,"modal");const D=`${t}-dialog`,S=typeof d=="string"?`${t}-fullscreen-${d}`:`${t}-fullscreen`;return E.jsx("div",{...g,ref:C,className:Fe(D,a,c&&`${t}-${c}`,s&&`${D}-centered`,z&&`${D}-scrollable`,d&&S),children:E.jsx("div",{className:Fe(`${t}-content`,r),children:f})})});Fs.displayName="ModalDialog";const Rd=T.forwardRef(({className:t,bsPrefix:a,as:r="div",...s},c)=>(a=Dn(a,"modal-footer"),E.jsx(r,{ref:c,className:Fe(t,a),...s})));Rd.displayName="ModalFooter";const Nd=T.forwardRef(({closeLabel:t="Close",closeVariant:a,closeButton:r=!1,onHide:s,children:c,...d},f)=>{const z=T.useContext(Od),g=js(()=>{z?.onHide(),s?.()});return E.jsxs("div",{ref:f,...d,children:[c,r&&E.jsx(Bs,{"aria-label":t,variant:a,onClick:g})]})});Nd.displayName="AbstractModalHeader";const Fd=T.forwardRef(({bsPrefix:t,className:a,closeLabel:r="Close",closeButton:s=!1,...c},d)=>(t=Dn(t,"modal-header"),E.jsx(Nd,{ref:d,...c,className:Fe(a,t),closeLabel:r,closeButton:s})));Fd.displayName="ModalHeader";const Jz=$y("h4"),_d=T.forwardRef(({className:t,bsPrefix:a,as:r=Jz,...s},c)=>(a=Dn(a,"modal-title"),E.jsx(r,{ref:c,className:Fe(t,a),...s})));_d.displayName="ModalTitle";function Wz(t){return E.jsx(Gs,{...t,timeout:null})}function Hz(t){return E.jsx(Gs,{...t,timeout:null})}const Md=T.forwardRef(({bsPrefix:t,className:a,style:r,dialogClassName:s,contentClassName:c,children:d,dialogAs:f=Fs,"data-bs-theme":z,"aria-labelledby":g,"aria-describedby":C,"aria-label":D,show:S=!1,animation:A=!0,backdrop:H=!0,keyboard:W=!0,onEscapeKeyDown:Q,onShow:U,onHide:G,container:X,autoFocus:$=!0,enforceFocus:ie=!0,restoreFocus:le=!0,restoreFocusOptions:V,onEntered:oe,onExit:re,onExiting:we,onEnter:ke,onEntering:pe,onExited:be,backdropClassName:Ue,manager:ye,...ze},Ee)=>{const[Ae,ue]=T.useState({}),[Qe,Oe]=T.useState(!1),Se=T.useRef(!1),Me=T.useRef(!1),he=T.useRef(null),[P,w]=pz(),b=Ad(Ee,w),O=js(G),J=xy();t=Dn(t,"modal");const K=T.useMemo(()=>({onHide:O}),[O]);function ne(){return ye||Iz({isRTL:J})}function q(ce){if(!Xn)return;const yi=ne().getScrollbarWidth()>0,tn=ce.scrollHeight>to(ce).documentElement.clientHeight;ue({paddingRight:yi&&!tn?Ku():void 0,paddingLeft:!yi&&tn?Ku():void 0})}const M=js(()=>{P&&q(P.dialog)});mz(()=>{gs(window,"resize",M),he.current==null||he.current()});const ge=()=>{Se.current=!0},xe=ce=>{Se.current&&P&&ce.target===P.dialog&&(Me.current=!0),Se.current=!1},te=()=>{Oe(!0),he.current=Ed(P.dialog,()=>{Oe(!1)})},Ri=ce=>{ce.target===ce.currentTarget&&te()},nn=ce=>{if(H==="static"){Ri(ce);return}if(Me.current||ce.target!==ce.currentTarget){Me.current=!1;return}G?.()},Ie=ce=>{W?Q?.(ce):(ce.preventDefault(),H==="static"&&te())},Tn=(ce,yi)=>{ce&&q(ce),ke?.(ce,yi)},Ni=ce=>{he.current==null||he.current(),re?.(ce)},Ci=(ce,yi)=>{pe?.(ce,yi),Td(window,"resize",M)},Wt=ce=>{ce&&(ce.style.display=""),be?.(ce),gs(window,"resize",M)},En=T.useCallback(ce=>E.jsx("div",{...ce,className:Fe(`${t}-backdrop`,Ue,!A&&"show")}),[A,Ue,t]),qn={...r,...Ae};qn.display="block";const Ht=ce=>E.jsx("div",{role:"dialog",...ce,style:qn,className:Fe(a,t,Qe&&`${t}-static`,!A&&"show"),onClick:H?nn:void 0,onMouseUp:xe,"data-bs-theme":z,"aria-label":D,"aria-labelledby":g,"aria-describedby":C,children:E.jsx(f,{...ze,onMouseDown:ge,className:s,contentClassName:c,children:d})});return E.jsx(Od.Provider,{value:K,children:E.jsx(Rz,{show:S,ref:b,backdrop:H,container:X,keyboard:!0,autoFocus:$,enforceFocus:ie,restoreFocus:le,restoreFocusOptions:V,onEscapeKeyDown:Ie,onShow:U,onHide:G,onEnter:Tn,onEntering:Ci,onEntered:oe,onExit:Ni,onExiting:we,onExited:Wt,manager:ne(),transition:A?Wz:void 0,backdropTransition:A?Hz:void 0,renderBackdrop:En,renderDialog:Ht})})});Md.displayName="Modal";const Za=Object.assign(Md,{Body:Bd,Header:Fd,Title:_d,Footer:Rd,Dialog:Fs,TRANSITION_DURATION:300,BACKDROP_TRANSITION_DURATION:150}),Ft=({mode:t,large:a,onClick:r})=>E.jsx("i",{className:Fe("fas","fa-star","sb-star",`sb-star-${t}`,{"fa-lg":!!a}),onClick:r});Ft.propTypes={mode:I.string.isRequired,large:I.bool,onClick:I.func};const Id=T.memo(({song:t,chooseSong:a,onlyStarred:r})=>{const s=()=>a(t.number),c=r?t.selected?"selected":"starred":t.starred?"starred":"plain",d=r?t.toggleSelected:t.toggleStarred;return E.jsxs("span",{className:Fe("sb-menu-songtitle",{"sb-starred-song":t.starred}),children:[E.jsxs("span",{onClick:d,children:[E.jsx(Ft,{mode:c})," ",E.jsxs("span",{className:Fe({"sb-chosen-song":t.chosen}),children:[t.number,". "]})]}),E.jsx("a",{href:"#",onClick:s,className:Fe("text-reset",{"sb-chosen-song":t.chosen}),children:t.title})]})});Id.propTypes={song:I.object.isRequired,chooseSong:I.func.isRequired,onlyStarred:I.bool.isRequired};function Nt(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Nt=function(a){return typeof a}:Nt=function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},Nt(t)}function Lz(t,a){if(!(t instanceof a))throw new TypeError("Cannot call a class as a function")}function Kz(t,a){for(var r=0;r<a.length;r++){var s=a[r];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}function Uz(t,a,r){return a&&Kz(t.prototype,a),t}function Zz(t,a,r){return a in t?Object.defineProperty(t,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[a]=r,t}function me(t){for(var a=1;a<arguments.length;a++){var r=arguments[a]!=null?arguments[a]:{},s=Object.keys(r);typeof Object.getOwnPropertySymbols=="function"&&(s=s.concat(Object.getOwnPropertySymbols(r).filter(function(c){return Object.getOwnPropertyDescriptor(r,c).enumerable}))),s.forEach(function(c){Zz(t,c,r[c])})}return t}function Jd(t,a){return Vz(t)||$z(t,a)||Yz()}function Vz(t){if(Array.isArray(t))return t}function $z(t,a){var r=[],s=!0,c=!1,d=void 0;try{for(var f=t[Symbol.iterator](),z;!(s=(z=f.next()).done)&&(r.push(z.value),!(a&&r.length===a));s=!0);}catch(g){c=!0,d=g}finally{try{!s&&f.return!=null&&f.return()}finally{if(c)throw d}}return r}function Yz(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}var $u=function(){},_s={},Wd={},Qz=null,Hd={mark:$u,measure:$u};try{typeof window<"u"&&(_s=window),typeof document<"u"&&(Wd=document),typeof MutationObserver<"u"&&(Qz=MutationObserver),typeof performance<"u"&&(Hd=performance)}catch{}var Xz=_s.navigator||{},Yu=Xz.userAgent,Qu=Yu===void 0?"":Yu,oo=_s,Ke=Wd,Va=Hd;oo.document;var Ms=!!Ke.documentElement&&!!Ke.head&&typeof Ke.addEventListener=="function"&&typeof Ke.createElement=="function";~Qu.indexOf("MSIE")||~Qu.indexOf("Trident/");var Gi="___FONT_AWESOME___",Ld="fa",Kd="svg-inline--fa",qz="data-fa-i2svg";(function(){try{return!0}catch{return!1}})();var us={GROUP:"group",PRIMARY:"primary",SECONDARY:"secondary"},Ud=oo.FontAwesomeConfig||{};function ew(t){var a=Ke.querySelector("script["+t+"]");if(a)return a.getAttribute(t)}function iw(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(Ke&&typeof Ke.querySelector=="function"){var nw=[["data-family-prefix","familyPrefix"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];nw.forEach(function(t){var a=Jd(t,2),r=a[0],s=a[1],c=iw(ew(r));c!=null&&(Ud[s]=c)})}var tw={familyPrefix:Ld,replacementClass:Kd,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},ks=me({},tw,Ud);ks.autoReplaceSvg||(ks.observeMutations=!1);var ai=me({},ks);oo.FontAwesomeConfig=ai;var Bi=oo||{};Bi[Gi]||(Bi[Gi]={});Bi[Gi].styles||(Bi[Gi].styles={});Bi[Gi].hooks||(Bi[Gi].hooks={});Bi[Gi].shims||(Bi[Gi].shims=[]);var bi=Bi[Gi],aw=[],ow=function t(){Ke.removeEventListener("DOMContentLoaded",t),bs=1,aw.map(function(a){return a()})},bs=!1;Ms&&(bs=(Ke.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Ke.readyState),bs||Ke.addEventListener("DOMContentLoaded",ow));var Is="pending",Zd="settled",Xa="fulfilled",qa="rejected",rw=function(){},Vd=typeof global<"u"&&typeof global.process<"u"&&typeof global.process.emit=="function",sw=typeof setImmediate>"u"?setTimeout:setImmediate,Rt=[],Cs;function lw(){for(var t=0;t<Rt.length;t++)Rt[t][0](Rt[t][1]);Rt=[],Cs=!1}function eo(t,a){Rt.push([t,a]),Cs||(Cs=!0,sw(lw,0))}function cw(t,a){function r(c){Js(a,c)}function s(c){_t(a,c)}try{t(r,s)}catch(c){s(c)}}function $d(t){var a=t.owner,r=a._state,s=a._data,c=t[r],d=t.then;if(typeof c=="function"){r=Xa;try{s=c(s)}catch(f){_t(d,f)}}Yd(d,s)||(r===Xa&&Js(d,s),r===qa&&_t(d,s))}function Yd(t,a){var r;try{if(t===a)throw new TypeError("A promises callback cannot return that same promise.");if(a&&(typeof a=="function"||Nt(a)==="object")){var s=a.then;if(typeof s=="function")return s.call(a,function(c){r||(r=!0,a===c?Qd(t,c):Js(t,c))},function(c){r||(r=!0,_t(t,c))}),!0}}catch(c){return r||_t(t,c),!0}return!1}function Js(t,a){(t===a||!Yd(t,a))&&Qd(t,a)}function Qd(t,a){t._state===Is&&(t._state=Zd,t._data=a,eo(uw,t))}function _t(t,a){t._state===Is&&(t._state=Zd,t._data=a,eo(dw,t))}function Xd(t){t._then=t._then.forEach($d)}function uw(t){t._state=Xa,Xd(t)}function dw(t){t._state=qa,Xd(t),!t._handled&&Vd&&global.process.emit("unhandledRejection",t._data,t)}function mw(t){global.process.emit("rejectionHandled",t)}function ui(t){if(typeof t!="function")throw new TypeError("Promise resolver "+t+" is not a function");if(!(this instanceof ui))throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");this._then=[],cw(t,this)}ui.prototype={constructor:ui,_state:Is,_then:null,_data:void 0,_handled:!1,then:function(a,r){var s={owner:this,then:new this.constructor(rw),fulfilled:a,rejected:r};return(r||a)&&!this._handled&&(this._handled=!0,this._state===qa&&Vd&&eo(mw,this)),this._state===Xa||this._state===qa?eo($d,s):this._then.push(s),s.then},catch:function(a){return this.then(null,a)}};ui.all=function(t){if(!Array.isArray(t))throw new TypeError("You must pass an array to Promise.all().");return new ui(function(a,r){var s=[],c=0;function d(g){return c++,function(C){s[g]=C,--c||a(s)}}for(var f=0,z;f<t.length;f++)z=t[f],z&&typeof z.then=="function"?z.then(d(f),r):s[f]=z;c||a(s)})};ui.race=function(t){if(!Array.isArray(t))throw new TypeError("You must pass an array to Promise.race().");return new ui(function(a,r){for(var s=0,c;s<t.length;s++)c=t[s],c&&typeof c.then=="function"?c.then(a,r):a(c)})};ui.resolve=function(t){return t&&Nt(t)==="object"&&t.constructor===ui?t:new ui(function(a){a(t)})};ui.reject=function(t){return new ui(function(a,r){r(t)})};var Yn={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function fw(t){if(!(!t||!Ms)){var a=Ke.createElement("style");a.setAttribute("type","text/css"),a.innerHTML=t;for(var r=Ke.head.childNodes,s=null,c=r.length-1;c>-1;c--){var d=r[c],f=(d.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(f)>-1&&(s=d)}return Ke.head.insertBefore(a,s),t}}var yw="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function io(){for(var t=12,a="";t-- >0;)a+=yw[Math.random()*62|0];return a}function qd(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function zw(t){return Object.keys(t||{}).reduce(function(a,r){return a+"".concat(r,'="').concat(qd(t[r]),'" ')},"").trim()}function em(t){return Object.keys(t||{}).reduce(function(a,r){return a+"".concat(r,": ").concat(t[r],";")},"")}function im(t){return t.size!==Yn.size||t.x!==Yn.x||t.y!==Yn.y||t.rotate!==Yn.rotate||t.flipX||t.flipY}function nm(t){var a=t.transform,r=t.containerWidth,s=t.iconWidth,c={transform:"translate(".concat(r/2," 256)")},d="translate(".concat(a.x*32,", ").concat(a.y*32,") "),f="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),z="rotate(".concat(a.rotate," 0 0)"),g={transform:"".concat(d," ").concat(f," ").concat(z)},C={transform:"translate(".concat(s/2*-1," -256)")};return{outer:c,inner:g,path:C}}var ds={x:0,y:0,width:"100%",height:"100%"};function Xu(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||a)&&(t.attributes.fill="black"),t}function ww(t){return t.tag==="g"?t.children:[t]}function pw(t){var a=t.children,r=t.attributes,s=t.main,c=t.mask,d=t.maskId,f=t.transform,z=s.width,g=s.icon,C=c.width,D=c.icon,S=nm({transform:f,containerWidth:C,iconWidth:z}),A={tag:"rect",attributes:me({},ds,{fill:"white"})},H=g.children?{children:g.children.map(Xu)}:{},W={tag:"g",attributes:me({},S.inner),children:[Xu(me({tag:g.tag,attributes:me({},g.attributes,S.path)},H))]},Q={tag:"g",attributes:me({},S.outer),children:[W]},U="mask-".concat(d||io()),G="clip-".concat(d||io()),X={tag:"mask",attributes:me({},ds,{id:U,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[A,Q]},$={tag:"defs",children:[{tag:"clipPath",attributes:{id:G},children:ww(D)},X]};return a.push($,{tag:"rect",attributes:me({fill:"currentColor","clip-path":"url(#".concat(G,")"),mask:"url(#".concat(U,")")},ds)}),{children:a,attributes:r}}function hw(t){var a=t.children,r=t.attributes,s=t.main,c=t.transform,d=t.styles,f=em(d);if(f.length>0&&(r.style=f),im(c)){var z=nm({transform:c,containerWidth:s.width,iconWidth:s.width});a.push({tag:"g",attributes:me({},z.outer),children:[{tag:"g",attributes:me({},z.inner),children:[{tag:s.icon.tag,children:s.icon.children,attributes:me({},s.icon.attributes,z.path)}]}]})}else a.push(s.icon);return{children:a,attributes:r}}function gw(t){var a=t.children,r=t.main,s=t.mask,c=t.attributes,d=t.styles,f=t.transform;if(im(f)&&r.found&&!s.found){var z=r.width,g=r.height,C={x:z/g/2,y:.5};c.style=em(me({},d,{"transform-origin":"".concat(C.x+f.x/16,"em ").concat(C.y+f.y/16,"em")}))}return[{tag:"svg",attributes:c,children:a}]}function jw(t){var a=t.prefix,r=t.iconName,s=t.children,c=t.attributes,d=t.symbol,f=d===!0?"".concat(a,"-").concat(ai.familyPrefix,"-").concat(r):d;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:me({},c,{id:f}),children:s}]}]}function kw(t){var a=t.icons,r=a.main,s=a.mask,c=t.prefix,d=t.iconName,f=t.transform,z=t.symbol,g=t.title,C=t.maskId,D=t.titleId,S=t.extra,A=t.watchable,H=A===void 0?!1:A,W=s.found?s:r,Q=W.width,U=W.height,G=c==="fak",X=G?"":"fa-w-".concat(Math.ceil(Q/U*16)),$=[ai.replacementClass,d?"".concat(ai.familyPrefix,"-").concat(d):"",X].filter(function(ke){return S.classes.indexOf(ke)===-1}).filter(function(ke){return ke!==""||!!ke}).concat(S.classes).join(" "),ie={children:[],attributes:me({},S.attributes,{"data-prefix":c,"data-icon":d,class:$,role:S.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(Q," ").concat(U)})},le=G&&!~S.classes.indexOf("fa-fw")?{width:"".concat(Q/U*16*.0625,"em")}:{};H&&(ie.attributes[qz]=""),g&&ie.children.push({tag:"title",attributes:{id:ie.attributes["aria-labelledby"]||"title-".concat(D||io())},children:[g]});var V=me({},ie,{prefix:c,iconName:d,main:r,mask:s,maskId:C,transform:f,symbol:z,styles:me({},le,S.styles)}),oe=s.found&&r.found?pw(V):hw(V),re=oe.children,we=oe.attributes;return V.children=re,V.attributes=we,z?jw(V):gw(V)}ai.measurePerformance&&Va&&Va.mark&&Va.measure;var ms=function(a,r,s,c){var d=Object.keys(a),f=d.length,z=r,g,C,D;for(s===void 0?(g=1,D=a[d[0]]):(g=0,D=s);g<f;g++)C=d[g],D=z(D,a[C],C,a);return D};function tm(t,a){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},s=r.skipHooks,c=s===void 0?!1:s,d=Object.keys(a).reduce(function(f,z){var g=a[z],C=!!g.icon;return C?f[g.iconName]=g.icon:f[z]=g,f},{});typeof bi.hooks.addPack=="function"&&!c?bi.hooks.addPack(t,d):bi.styles[t]=me({},bi.styles[t]||{},d),t==="fas"&&tm("fa",a)}var qu=bi.styles,bw=bi.shims,am=function(){var a=function(c){return ms(qu,function(d,f,z){return d[z]=ms(f,c,{}),d},{})};a(function(s,c,d){return c[3]&&(s[c[3]]=d),s}),a(function(s,c,d){var f=c[2];return s[d]=d,f.forEach(function(z){s[z]=d}),s});var r="far"in qu;ms(bw,function(s,c){var d=c[0],f=c[1],z=c[2];return f==="far"&&!r&&(f="fas"),s[d]={prefix:f,iconName:z},s},{})};am();bi.styles;function ed(t,a,r){if(t&&t[a]&&t[a][r])return{prefix:a,iconName:r,icon:t[a][r]}}function om(t){var a=t.tag,r=t.attributes,s=r===void 0?{}:r,c=t.children,d=c===void 0?[]:c;return typeof t=="string"?qd(t):"<".concat(a," ").concat(zw(s),">").concat(d.map(om).join(""),"</").concat(a,">")}var Cw=function(a){var r={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return a?a.toLowerCase().split(" ").reduce(function(s,c){var d=c.toLowerCase().split("-"),f=d[0],z=d.slice(1).join("-");if(f&&z==="h")return s.flipX=!0,s;if(f&&z==="v")return s.flipY=!0,s;if(z=parseFloat(z),isNaN(z))return s;switch(f){case"grow":s.size=s.size+z;break;case"shrink":s.size=s.size-z;break;case"left":s.x=s.x-z;break;case"right":s.x=s.x+z;break;case"up":s.y=s.y-z;break;case"down":s.y=s.y+z;break;case"rotate":s.rotate=s.rotate+z;break}return s},r):r};function vs(t){this.name="MissingIcon",this.message=t||"Icon unavailable",this.stack=new Error().stack}vs.prototype=Object.create(Error.prototype);vs.prototype.constructor=vs;var ro={fill:"currentColor"},rm={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};me({},ro,{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"});var Ws=me({},rm,{attributeName:"opacity"});me({},ro,{cx:"256",cy:"364",r:"28"}),me({},rm,{attributeName:"r",values:"28;14;28;28;14;28;"}),me({},Ws,{values:"1;0;1;1;0;1;"});me({},ro,{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),me({},Ws,{values:"1;0;0;0;0;1;"});me({},ro,{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),me({},Ws,{values:"0;0;1;1;0;0;"});bi.styles;function id(t){var a=t[0],r=t[1],s=t.slice(4),c=Jd(s,1),d=c[0],f=null;return Array.isArray(d)?f={tag:"g",attributes:{class:"".concat(ai.familyPrefix,"-").concat(us.GROUP)},children:[{tag:"path",attributes:{class:"".concat(ai.familyPrefix,"-").concat(us.SECONDARY),fill:"currentColor",d:d[0]}},{tag:"path",attributes:{class:"".concat(ai.familyPrefix,"-").concat(us.PRIMARY),fill:"currentColor",d:d[1]}}]}:f={tag:"path",attributes:{fill:"currentColor",d}},{found:!0,width:a,height:r,icon:f}}bi.styles;var vw=`svg:not(:root).svg-inline--fa {
  overflow: visible;
}

.svg-inline--fa {
  display: inline-block;
  font-size: inherit;
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.225em;
}
.svg-inline--fa.fa-w-1 {
  width: 0.0625em;
}
.svg-inline--fa.fa-w-2 {
  width: 0.125em;
}
.svg-inline--fa.fa-w-3 {
  width: 0.1875em;
}
.svg-inline--fa.fa-w-4 {
  width: 0.25em;
}
.svg-inline--fa.fa-w-5 {
  width: 0.3125em;
}
.svg-inline--fa.fa-w-6 {
  width: 0.375em;
}
.svg-inline--fa.fa-w-7 {
  width: 0.4375em;
}
.svg-inline--fa.fa-w-8 {
  width: 0.5em;
}
.svg-inline--fa.fa-w-9 {
  width: 0.5625em;
}
.svg-inline--fa.fa-w-10 {
  width: 0.625em;
}
.svg-inline--fa.fa-w-11 {
  width: 0.6875em;
}
.svg-inline--fa.fa-w-12 {
  width: 0.75em;
}
.svg-inline--fa.fa-w-13 {
  width: 0.8125em;
}
.svg-inline--fa.fa-w-14 {
  width: 0.875em;
}
.svg-inline--fa.fa-w-15 {
  width: 0.9375em;
}
.svg-inline--fa.fa-w-16 {
  width: 1em;
}
.svg-inline--fa.fa-w-17 {
  width: 1.0625em;
}
.svg-inline--fa.fa-w-18 {
  width: 1.125em;
}
.svg-inline--fa.fa-w-19 {
  width: 1.1875em;
}
.svg-inline--fa.fa-w-20 {
  width: 1.25em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: 0.3em;
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: 0.3em;
  width: auto;
}
.svg-inline--fa.fa-border {
  height: 1.5em;
}
.svg-inline--fa.fa-li {
  width: 2em;
}
.svg-inline--fa.fa-fw {
  width: 1.25em;
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: #ff253a;
  border-radius: 1em;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  color: #fff;
  height: 1.5em;
  line-height: 1;
  max-width: 5em;
  min-width: 1.5em;
  overflow: hidden;
  padding: 0.25em;
  right: 0;
  text-overflow: ellipsis;
  top: 0;
  -webkit-transform: scale(0.25);
          transform: scale(0.25);
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: 0;
  right: 0;
  top: auto;
  -webkit-transform: scale(0.25);
          transform: scale(0.25);
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: 0;
  left: 0;
  right: auto;
  top: auto;
  -webkit-transform: scale(0.25);
          transform: scale(0.25);
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  right: 0;
  top: 0;
  -webkit-transform: scale(0.25);
          transform: scale(0.25);
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: 0;
  right: auto;
  top: 0;
  -webkit-transform: scale(0.25);
          transform: scale(0.25);
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-lg {
  font-size: 1.3333333333em;
  line-height: 0.75em;
  vertical-align: -0.0667em;
}

.fa-xs {
  font-size: 0.75em;
}

.fa-sm {
  font-size: 0.875em;
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

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: 2.5em;
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: -2em;
  position: absolute;
  text-align: center;
  width: 2em;
  line-height: inherit;
}

.fa-border {
  border: solid 0.08em #eee;
  border-radius: 0.1em;
  padding: 0.2em 0.25em 0.15em;
}

.fa-pull-left {
  float: left;
}

.fa-pull-right {
  float: right;
}

.fa.fa-pull-left,
.fas.fa-pull-left,
.far.fa-pull-left,
.fal.fa-pull-left,
.fab.fa-pull-left {
  margin-right: 0.3em;
}
.fa.fa-pull-right,
.fas.fa-pull-right,
.far.fa-pull-right,
.fal.fa-pull-right,
.fab.fa-pull-right {
  margin-left: 0.3em;
}

.fa-spin {
  -webkit-animation: fa-spin 2s infinite linear;
          animation: fa-spin 2s infinite linear;
}

.fa-pulse {
  -webkit-animation: fa-spin 1s infinite steps(8);
          animation: fa-spin 1s infinite steps(8);
}

@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}

@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=1)";
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2)";
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=3)";
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)";
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both, .fa-flip-horizontal.fa-flip-vertical {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

:root .fa-rotate-90,
:root .fa-rotate-180,
:root .fa-rotate-270,
:root .fa-flip-horizontal,
:root .fa-flip-vertical,
:root .fa-flip-both {
  -webkit-filter: none;
          filter: none;
}

.fa-stack {
  display: inline-block;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: #fff;
}

.sr-only {
  border: 0;
  clip: rect(0, 0, 0, 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
}

.sr-only-focusable:active, .sr-only-focusable:focus {
  clip: auto;
  height: auto;
  margin: 0;
  overflow: visible;
  position: static;
  width: auto;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: 1;
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: 0.4;
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: 0.4;
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: 1;
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse {
  color: #fff;
}`;function Dw(){var t=Ld,a=Kd,r=ai.familyPrefix,s=ai.replacementClass,c=vw;if(r!==t||s!==a){var d=new RegExp("\\.".concat(t,"\\-"),"g"),f=new RegExp("\\--".concat(t,"\\-"),"g"),z=new RegExp("\\.".concat(a),"g");c=c.replace(d,".".concat(r,"-")).replace(f,"--".concat(r,"-")).replace(z,".".concat(s))}return c}var Tw=(function(){function t(){Lz(this,t),this.definitions={}}return Uz(t,[{key:"add",value:function(){for(var r=this,s=arguments.length,c=new Array(s),d=0;d<s;d++)c[d]=arguments[d];var f=c.reduce(this._pullDefinitions,{});Object.keys(f).forEach(function(z){r.definitions[z]=me({},r.definitions[z]||{},f[z]),tm(z,f[z]),am()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(r,s){var c=s.prefix&&s.iconName&&s.icon?{0:s}:s;return Object.keys(c).map(function(d){var f=c[d],z=f.prefix,g=f.iconName,C=f.icon;r[z]||(r[z]={}),r[z][g]=C}),r}}]),t})();function Ew(){ai.autoAddCss&&!td&&(fw(Dw()),td=!0)}function Aw(t,a){return Object.defineProperty(t,"abstract",{get:a}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(s){return om(s)})}}),Object.defineProperty(t,"node",{get:function(){if(Ms){var s=Ke.createElement("div");return s.innerHTML=t.html,s.children}}}),t}function nd(t){var a=t.prefix,r=a===void 0?"fa":a,s=t.iconName;if(s)return ed(xw.definitions,r,s)||ed(bi.styles,r,s)}function Pw(t){return function(a){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=(a||{}).icon?a:nd(a||{}),c=r.mask;return c&&(c=(c||{}).icon?c:nd(c||{})),t(s,me({},r,{mask:c}))}}var xw=new Tw,td=!1,Ds={transform:function(a){return Cw(a)}},Sw=Pw(function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.transform,s=r===void 0?Yn:r,c=a.symbol,d=c===void 0?!1:c,f=a.mask,z=f===void 0?null:f,g=a.maskId,C=g===void 0?null:g,D=a.title,S=D===void 0?null:D,A=a.titleId,H=A===void 0?null:A,W=a.classes,Q=W===void 0?[]:W,U=a.attributes,G=U===void 0?{}:U,X=a.styles,$=X===void 0?{}:X;if(t){var ie=t.prefix,le=t.iconName,V=t.icon;return Aw(me({type:"icon"},t),function(){return Ew(),ai.autoA11y&&(S?G["aria-labelledby"]="".concat(ai.replacementClass,"-title-").concat(H||io()):(G["aria-hidden"]="true",G.focusable="false")),kw({icons:{main:id(V),mask:z?id(z.icon):{found:!1,width:null,height:null,icon:{}}},prefix:ie,iconName:le,transform:me({},Yn,s),symbol:d,title:S,maskId:C,titleId:H,extra:{attributes:G,styles:$,classes:Q}})})}});function $a(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?$a=function(a){return typeof a}:$a=function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},$a(t)}function Qn(t,a,r){return a in t?Object.defineProperty(t,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[a]=r,t}function ad(t,a){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);a&&(s=s.filter(function(c){return Object.getOwnPropertyDescriptor(t,c).enumerable})),r.push.apply(r,s)}return r}function Ts(t){for(var a=1;a<arguments.length;a++){var r=arguments[a]!=null?arguments[a]:{};a%2?ad(Object(r),!0).forEach(function(s){Qn(t,s,r[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):ad(Object(r)).forEach(function(s){Object.defineProperty(t,s,Object.getOwnPropertyDescriptor(r,s))})}return t}function Gw(t,a){if(t==null)return{};var r={},s=Object.keys(t),c,d;for(d=0;d<s.length;d++)c=s[d],!(a.indexOf(c)>=0)&&(r[c]=t[c]);return r}function sm(t,a){if(t==null)return{};var r=Gw(t,a),s,c;if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(t);for(c=0;c<d.length;c++)s=d[c],!(a.indexOf(s)>=0)&&Object.prototype.propertyIsEnumerable.call(t,s)&&(r[s]=t[s])}return r}function Es(t){return Bw(t)||Ow(t)||Rw()}function Bw(t){if(Array.isArray(t)){for(var a=0,r=new Array(t.length);a<t.length;a++)r[a]=t[a];return r}}function Ow(t){if(Symbol.iterator in Object(t)||Object.prototype.toString.call(t)==="[object Arguments]")return Array.from(t)}function Rw(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function Nw(t){var a,r=t.spin,s=t.pulse,c=t.fixedWidth,d=t.inverse,f=t.border,z=t.listItem,g=t.flip,C=t.size,D=t.rotation,S=t.pull,A=(a={"fa-spin":r,"fa-pulse":s,"fa-fw":c,"fa-inverse":d,"fa-border":f,"fa-li":z,"fa-flip-horizontal":g==="horizontal"||g==="both","fa-flip-vertical":g==="vertical"||g==="both"},Qn(a,"fa-".concat(C),typeof C<"u"&&C!==null),Qn(a,"fa-rotate-".concat(D),typeof D<"u"&&D!==null&&D!==0),Qn(a,"fa-pull-".concat(S),typeof S<"u"&&S!==null),Qn(a,"fa-swap-opacity",t.swapOpacity),a);return Object.keys(A).map(function(H){return A[H]?H:null}).filter(function(H){return H})}function Fw(t){return t=t-0,t===t}function lm(t){return Fw(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(a,r){return r?r.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}function _w(t){return t.charAt(0).toUpperCase()+t.slice(1)}function Mw(t){return t.split(";").map(function(a){return a.trim()}).filter(function(a){return a}).reduce(function(a,r){var s=r.indexOf(":"),c=lm(r.slice(0,s)),d=r.slice(s+1).trim();return c.startsWith("webkit")?a[_w(c)]=d:a[c]=d,a},{})}function cm(t,a){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof a=="string")return a;var s=(a.children||[]).map(function(g){return cm(t,g)}),c=Object.keys(a.attributes||{}).reduce(function(g,C){var D=a.attributes[C];switch(C){case"class":g.attrs.className=D,delete a.attributes.class;break;case"style":g.attrs.style=Mw(D);break;default:C.indexOf("aria-")===0||C.indexOf("data-")===0?g.attrs[C.toLowerCase()]=D:g.attrs[lm(C)]=D}return g},{attrs:{}}),d=r.style,f=d===void 0?{}:d,z=sm(r,["style"]);return c.attrs.style=Ts({},c.attrs.style,{},f),t.apply(void 0,[a.tag,Ts({},c.attrs,{},z)].concat(Es(s)))}var um=!1;try{um=!0}catch{}function Iw(){if(!um&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function od(t){if(Ds.icon)return Ds.icon(t);if(t===null)return null;if($a(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function fs(t,a){return Array.isArray(a)&&a.length>0||!Array.isArray(a)&&a?Qn({},t,a):{}}function fi(t){var a=t.forwardedRef,r=sm(t,["forwardedRef"]),s=r.icon,c=r.mask,d=r.symbol,f=r.className,z=r.title,g=r.titleId,C=od(s),D=fs("classes",[].concat(Es(Nw(r)),Es(f.split(" ")))),S=fs("transform",typeof r.transform=="string"?Ds.transform(r.transform):r.transform),A=fs("mask",od(c)),H=Sw(C,Ts({},D,{},S,{},A,{symbol:d,title:z,titleId:g}));if(!H)return Iw("Could not find icon",C),null;var W=H.abstract,Q={ref:a};return Object.keys(r).forEach(function(U){fi.defaultProps.hasOwnProperty(U)||(Q[U]=r[U])}),Jw(W[0],Q)}fi.displayName="FontAwesomeIcon";fi.propTypes={border:I.bool,className:I.string,mask:I.oneOfType([I.object,I.array,I.string]),fixedWidth:I.bool,inverse:I.bool,flip:I.oneOf(["horizontal","vertical","both"]),icon:I.oneOfType([I.object,I.array,I.string]),listItem:I.bool,pull:I.oneOf(["right","left"]),pulse:I.bool,rotation:I.oneOf([0,90,180,270]),size:I.oneOf(["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:I.bool,symbol:I.oneOfType([I.bool,I.string]),title:I.string,transform:I.oneOfType([I.string,I.object]),swapOpacity:I.bool};fi.defaultProps={border:!1,className:"",mask:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,symbol:!1,title:"",transform:null,swapOpacity:!1};var Jw=cm.bind(null,Ye.createElement);var Ww={prefix:"fas",iconName:"caret-down",icon:[320,512,[],"f0d7","M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"]},Hw={prefix:"fas",iconName:"caret-up",icon:[320,512,[],"f0d8","M288.662 352H31.338c-17.818 0-26.741-21.543-14.142-34.142l128.662-128.662c7.81-7.81 20.474-7.81 28.284 0l128.662 128.662c12.6 12.599 3.676 34.142-14.142 34.142z"]},Lw={prefix:"fas",iconName:"guitar",icon:[512,512,[],"f7a6","M502.63 39L473 9.37a32 32 0 0 0-45.26 0L381.46 55.7a35.14 35.14 0 0 0-8.53 13.79L360.77 106l-76.26 76.26c-12.16-8.76-25.5-15.74-40.1-19.14-33.45-7.78-67-.88-89.88 22a82.45 82.45 0 0 0-20.24 33.47c-6 18.56-23.21 32.69-42.15 34.46-23.7 2.27-45.73 11.45-62.61 28.44C-16.11 327-7.9 409 47.58 464.45S185 528 230.56 482.52c17-16.88 26.16-38.9 28.45-62.71 1.76-18.85 15.89-36.13 34.43-42.14a82.6 82.6 0 0 0 33.48-20.25c22.87-22.88 29.74-56.36 22-89.75-3.39-14.64-10.37-28-19.16-40.2L406 151.23l36.48-12.16a35.14 35.14 0 0 0 13.79-8.53l46.33-46.32a32 32 0 0 0 .03-45.22zM208 352a48 48 0 1 1 48-48 48 48 0 0 1-48 48z"]},dm={prefix:"fas",iconName:"list-ul",icon:[512,512,[],"f0ca","M48 48a48 48 0 1 0 48 48 48 48 0 0 0-48-48zm0 160a48 48 0 1 0 48 48 48 48 0 0 0-48-48zm0 160a48 48 0 1 0 48 48 48 48 0 0 0-48-48zm448 16H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-320H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16zm0 160H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z"]},Kw={prefix:"fas",iconName:"times",icon:[352,512,[],"f00d","M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"]},Uw={prefix:"fas",iconName:"trash",icon:[448,512,[],"f1f8","M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z"]};const mm=({onlyStarred:t,toggleOnlyStarred:a,starredCount:r,selectedSong:s,searchText:c,setSearchText:d,onClose:f})=>{const z=g=>{d(g.target.value)};return E.jsxs(E.Fragment,{children:[r?E.jsx("div",{className:"me-2",children:E.jsx($n,{variant:"info",onClick:a,children:t?E.jsx(fi,{icon:dm,role:"button",size:"lg"}):E.jsx(E.Fragment,{children:E.jsxs("span",{className:"sb-no-wrap",children:[E.jsx(Ft,{mode:"starred"})," ",r]})})})}):null,t?s?E.jsxs(E.Fragment,{children:[E.jsx($n,{className:"ms-2 me-1",variant:"success",disabled:!s.moveUp,onClick:s.moveUp,children:E.jsx(fi,{icon:Hw,role:"button",size:"lg"})}),E.jsx($n,{className:"me-3",variant:"success",disabled:!s.moveDown,onClick:s.moveDown,children:E.jsx(fi,{icon:Ww,role:"button",size:"lg"})}),E.jsx($n,{className:"me-1",variant:"danger",onClick:s.toggleStarred,children:E.jsx(fi,{icon:Uw,role:"button",size:"lg"})})]}):E.jsx("div",{className:"ms-2",children:E.jsxs("span",{className:"fw-bold sb-no-wrap",children:["Wybrane ",E.jsx(Ft,{mode:"starred"})," ",r]})}):E.jsx("div",{className:"me-2 flex-grow-1",children:E.jsx("input",{type:"search",className:"form-control",placeholder:"Szukaj",autoCapitalize:"none",autoCorrect:"off",value:c,onChange:z})}),E.jsx("div",{className:"ms-auto",children:E.jsx($n,{variant:"light",onClick:f,children:E.jsx(fi,{icon:Kw,role:"button",size:"lg",onClick:f})})})]})};mm.propTypes={onlyStarred:I.bool.isRequired,toggleOnlyStarred:I.func.isRequired,starredCount:I.number.isRequired,selectedSong:I.object,searchText:I.string.isRequired,setSearchText:I.func.isRequired,onClose:I.func.isRequired};const fm=({songs:t,chooseSong:a,starredCount:r,onlyStarred:s,toggleOnlyStarred:c,show:d,onClose:f})=>{const[z,g]=T.useState(""),C=T.useRef(null);T.useEffect(()=>{(!d||s)&&g(""),H()},[d,s]);const S=z.trim()?isNaN(z)?jd(z.trim()):parseInt(z):void 0;T.useEffect(()=>{S||H()},[S]);const A=G=>S?typeof S=="number"?G.number===S:G.latinTitle.includes(S):!0,H=()=>{C.current&&C.current.scrollIntoView()},W=t.findIndex(G=>G.chosen),Q=t.find(G=>G.selected),U=W<3?0:W-3;return E.jsxs(Za,{show:d,onHide:f,scrollable:!0,animation:!1,children:[E.jsx(Za.Header,{className:"py-2 px-2",children:E.jsx(mm,{onlyStarred:s,toggleOnlyStarred:c,starredCount:r,selectedSong:Q,searchText:z,setSearchText:g,onClose:f})}),E.jsx(Za.Body,{children:t.filter(G=>A(G)).map((G,X)=>E.jsxs(Ye.Fragment,{children:[E.jsx(Id,{song:G,chooseSong:a,onlyStarred:s}),E.jsx("br",{ref:X===U?C:null})]},G.number))}),s?null:E.jsx(Za.Footer,{className:"py-0",children:E.jsxs("p",{className:"text-secondary small",children:["Śpiewnik - Tchnienie Boga v","0.2.4"]})})]})};fm.propTypes={songs:I.array.isRequired,chooseSong:I.func.isRequired,starredCount:I.number.isRequired,onlyStarred:I.bool.isRequired,toggleOnlyStarred:I.func.isRequired,show:I.bool.isRequired,onClose:I.func.isRequired};const ym=({onlyStarred:t,chordsShown:a,onClickMenu:r,onClickGuitar:s})=>{const c=d=>f=>{(f.key==="Enter"||f.key===" "||f.key==="Spacebar"||f.which===13||f.which===32)&&(f.preventDefault(),d(f))};return E.jsxs("div",{className:"sb-menu-buttons-container",children:[E.jsx("div",{className:Fe("btn","sb-menu-button","shadow","rounded-circle",a?"sb-menu-button-red":"sb-menu-button-gray","d-flex","justify-content-center","align-items-center","pt-2"),tabIndex:"0",role:"button",onClick:s,onKeyPress:c(s),children:E.jsx("div",{className:"sb-menu-button-icon my-auto",children:E.jsx(fi,{icon:Lw,size:"lg"})})}),E.jsx("div",{className:"btn sb-menu-button shadow rounded-circle sb-menu-button-cyan d-flex justify-content-center align-items-center pt-2",tabIndex:"1",role:"button",onClick:r,onKeyPress:c(r),children:E.jsx("div",{className:"sb-menu-button-icon my-auto",children:t?E.jsx(Ft,{mode:"starred"}):E.jsx(fi,{icon:dm,size:"lg"})})})]})};ym.propTypes={onlyStarred:I.bool.isRequired,chordsShown:I.bool.isRequired,onClickMenu:I.func.isRequired,onClickGuitar:I.func.isRequired};function Zw(t,a,r){return Math.max(a,Math.min(t,r))}const Be={toVector(t,a){return t===void 0&&(t=a),Array.isArray(t)?t:[t,t]},add(t,a){return[t[0]+a[0],t[1]+a[1]]},sub(t,a){return[t[0]-a[0],t[1]-a[1]]},addTo(t,a){t[0]+=a[0],t[1]+=a[1]},subTo(t,a){t[0]-=a[0],t[1]-=a[1]}};function rd(t,a,r){return a===0||Math.abs(a)===1/0?Math.pow(t,r*5):t*a*r/(a+r*t)}function sd(t,a,r,s=.15){return s===0?Zw(t,a,r):t<a?-rd(a-t,r-a,s)+a:t>r?+rd(t-r,r-a,s)+r:t}function Vw(t,[a,r],[s,c]){const[[d,f],[z,g]]=t;return[sd(a,d,f,s),sd(r,z,g,c)]}function $w(t,a){if(typeof t!="object"||t===null)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var s=r.call(t,a);if(typeof s!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(a==="string"?String:Number)(t)}function Yw(t){var a=$w(t,"string");return typeof a=="symbol"?a:String(a)}function Le(t,a,r){return a=Yw(a),a in t?Object.defineProperty(t,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[a]=r,t}function ld(t,a){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);a&&(s=s.filter(function(c){return Object.getOwnPropertyDescriptor(t,c).enumerable})),r.push.apply(r,s)}return r}function De(t){for(var a=1;a<arguments.length;a++){var r=arguments[a]!=null?arguments[a]:{};a%2?ld(Object(r),!0).forEach(function(s){Le(t,s,r[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):ld(Object(r)).forEach(function(s){Object.defineProperty(t,s,Object.getOwnPropertyDescriptor(r,s))})}return t}const zm={pointer:{start:"down",change:"move",end:"up"},mouse:{start:"down",change:"move",end:"up"},touch:{start:"start",change:"move",end:"end"},gesture:{start:"start",change:"change",end:"end"}};function cd(t){return t?t[0].toUpperCase()+t.slice(1):""}const Qw=["enter","leave"];function Xw(t=!1,a){return t&&!Qw.includes(a)}function qw(t,a="",r=!1){const s=zm[t],c=s&&s[a]||a;return"on"+cd(t)+cd(c)+(Xw(r,c)?"Capture":"")}const ep=["gotpointercapture","lostpointercapture"];function ip(t){let a=t.substring(2).toLowerCase();const r=!!~a.indexOf("passive");r&&(a=a.replace("passive",""));const s=ep.includes(a)?"capturecapture":"capture",c=!!~a.indexOf(s);return c&&(a=a.replace("capture","")),{device:a,capture:c,passive:r}}function np(t,a=""){const r=zm[t],s=r&&r[a]||a;return t+s}function so(t){return"touches"in t}function wm(t){return so(t)?"touch":"pointerType"in t?t.pointerType:"mouse"}function tp(t){return Array.from(t.touches).filter(a=>{var r,s;return a.target===t.currentTarget||((r=t.currentTarget)===null||r===void 0||(s=r.contains)===null||s===void 0?void 0:s.call(r,a.target))})}function ap(t){return t.type==="touchend"||t.type==="touchcancel"?t.changedTouches:t.targetTouches}function pm(t){return so(t)?ap(t)[0]:t}function As(t,a){try{const r=a.clientX-t.clientX,s=a.clientY-t.clientY,c=(a.clientX+t.clientX)/2,d=(a.clientY+t.clientY)/2,f=Math.hypot(r,s);return{angle:-(Math.atan2(r,s)*180)/Math.PI,distance:f,origin:[c,d]}}catch{}return null}function op(t){return tp(t).map(a=>a.identifier)}function ud(t,a){const[r,s]=Array.from(t.touches).filter(c=>a.includes(c.identifier));return As(r,s)}function ys(t){const a=pm(t);return so(t)?a.identifier:a.pointerId}function dd(t){const a=pm(t);return[a.clientX,a.clientY]}const md=40,fd=800;function rp(t){let{deltaX:a,deltaY:r,deltaMode:s}=t;return s===1?(a*=md,r*=md):s===2&&(a*=fd,r*=fd),[a,r]}function sp(t){const a={};if("buttons"in t&&(a.buttons=t.buttons),"shiftKey"in t){const{shiftKey:r,altKey:s,metaKey:c,ctrlKey:d}=t;Object.assign(a,{shiftKey:r,altKey:s,metaKey:c,ctrlKey:d})}return a}function no(t,...a){return typeof t=="function"?t(...a):t}function lp(){}function cp(...t){return t.length===0?lp:t.length===1?t[0]:function(){let a;for(const r of t)a=r.apply(this,arguments)||a;return a}}function yd(t,a){return Object.assign({},a,t||{})}const up=32;class hm{constructor(a,r,s){this.ctrl=a,this.args=r,this.key=s,this.state||(this.state={},this.computeValues([0,0]),this.computeInitial(),this.init&&this.init(),this.reset())}get state(){return this.ctrl.state[this.key]}set state(a){this.ctrl.state[this.key]=a}get shared(){return this.ctrl.state.shared}get eventStore(){return this.ctrl.gestureEventStores[this.key]}get timeoutStore(){return this.ctrl.gestureTimeoutStores[this.key]}get config(){return this.ctrl.config[this.key]}get sharedConfig(){return this.ctrl.config.shared}get handler(){return this.ctrl.handlers[this.key]}reset(){const{state:a,shared:r,ingKey:s,args:c}=this;r[s]=a._active=a.active=a._blocked=a._force=!1,a._step=[!1,!1],a.intentional=!1,a._movement=[0,0],a._distance=[0,0],a._direction=[0,0],a._delta=[0,0],a._bounds=[[-1/0,1/0],[-1/0,1/0]],a.args=c,a.axis=void 0,a.memo=void 0,a.elapsedTime=a.timeDelta=0,a.direction=[0,0],a.distance=[0,0],a.overflow=[0,0],a._movementBound=[!1,!1],a.velocity=[0,0],a.movement=[0,0],a.delta=[0,0],a.timeStamp=0}start(a){const r=this.state,s=this.config;r._active||(this.reset(),this.computeInitial(),r._active=!0,r.target=a.target,r.currentTarget=a.currentTarget,r.lastOffset=s.from?no(s.from,r):r.offset,r.offset=r.lastOffset,r.startTime=r.timeStamp=a.timeStamp)}computeValues(a){const r=this.state;r._values=a,r.values=this.config.transform(a)}computeInitial(){const a=this.state;a._initial=a._values,a.initial=a.values}compute(a){const{state:r,config:s,shared:c}=this;r.args=this.args;let d=0;if(a&&(r.event=a,s.preventDefault&&a.cancelable&&r.event.preventDefault(),r.type=a.type,c.touches=this.ctrl.pointerIds.size||this.ctrl.touchIds.size,c.locked=!!document.pointerLockElement,Object.assign(c,sp(a)),c.down=c.pressed=c.buttons%2===1||c.touches>0,d=a.timeStamp-r.timeStamp,r.timeStamp=a.timeStamp,r.elapsedTime=r.timeStamp-r.startTime),r._active){const V=r._delta.map(Math.abs);Be.addTo(r._distance,V)}this.axisIntent&&this.axisIntent(a);const[f,z]=r._movement,[g,C]=s.threshold,{_step:D,values:S}=r;if(s.hasCustomTransform?(D[0]===!1&&(D[0]=Math.abs(f)>=g&&S[0]),D[1]===!1&&(D[1]=Math.abs(z)>=C&&S[1])):(D[0]===!1&&(D[0]=Math.abs(f)>=g&&Math.sign(f)*g),D[1]===!1&&(D[1]=Math.abs(z)>=C&&Math.sign(z)*C)),r.intentional=D[0]!==!1||D[1]!==!1,!r.intentional)return;const A=[0,0];if(s.hasCustomTransform){const[V,oe]=S;A[0]=D[0]!==!1?V-D[0]:0,A[1]=D[1]!==!1?oe-D[1]:0}else A[0]=D[0]!==!1?f-D[0]:0,A[1]=D[1]!==!1?z-D[1]:0;this.restrictToAxis&&!r._blocked&&this.restrictToAxis(A);const H=r.offset,W=r._active&&!r._blocked||r.active;W&&(r.first=r._active&&!r.active,r.last=!r._active&&r.active,r.active=c[this.ingKey]=r._active,a&&(r.first&&("bounds"in s&&(r._bounds=no(s.bounds,r)),this.setup&&this.setup()),r.movement=A,this.computeOffset()));const[Q,U]=r.offset,[[G,X],[$,ie]]=r._bounds;r.overflow=[Q<G?-1:Q>X?1:0,U<$?-1:U>ie?1:0],r._movementBound[0]=r.overflow[0]?r._movementBound[0]===!1?r._movement[0]:r._movementBound[0]:!1,r._movementBound[1]=r.overflow[1]?r._movementBound[1]===!1?r._movement[1]:r._movementBound[1]:!1;const le=r._active?s.rubberband||[0,0]:[0,0];if(r.offset=Vw(r._bounds,r.offset,le),r.delta=Be.sub(r.offset,H),this.computeMovement(),W&&(!r.last||d>up)){r.delta=Be.sub(r.offset,H);const V=r.delta.map(Math.abs);Be.addTo(r.distance,V),r.direction=r.delta.map(Math.sign),r._direction=r._delta.map(Math.sign),!r.first&&d>0&&(r.velocity=[V[0]/d,V[1]/d],r.timeDelta=d)}}emit(){const a=this.state,r=this.shared,s=this.config;if(a._active||this.clean(),(a._blocked||!a.intentional)&&!a._force&&!s.triggerAllEvents)return;const c=this.handler(De(De(De({},r),a),{},{[this.aliasKey]:a.values}));c!==void 0&&(a.memo=c)}clean(){this.eventStore.clean(),this.timeoutStore.clean()}}function dp([t,a],r){const s=Math.abs(t),c=Math.abs(a);if(s>c&&s>r)return"x";if(c>s&&c>r)return"y"}class mp extends hm{constructor(...a){super(...a),Le(this,"aliasKey","xy")}reset(){super.reset(),this.state.axis=void 0}init(){this.state.offset=[0,0],this.state.lastOffset=[0,0]}computeOffset(){this.state.offset=Be.add(this.state.lastOffset,this.state.movement)}computeMovement(){this.state.movement=Be.sub(this.state.offset,this.state.lastOffset)}axisIntent(a){const r=this.state,s=this.config;if(!r.axis&&a){const c=typeof s.axisThreshold=="object"?s.axisThreshold[wm(a)]:s.axisThreshold;r.axis=dp(r._movement,c)}r._blocked=(s.lockDirection||!!s.axis)&&!r.axis||!!s.axis&&s.axis!==r.axis}restrictToAxis(a){if(this.config.axis||this.config.lockDirection)switch(this.state.axis){case"x":a[1]=0;break;case"y":a[0]=0;break}}}const fp=t=>t,zd=.15,gm={enabled(t=!0){return t},eventOptions(t,a,r){return De(De({},r.shared.eventOptions),t)},preventDefault(t=!1){return t},triggerAllEvents(t=!1){return t},rubberband(t=0){switch(t){case!0:return[zd,zd];case!1:return[0,0];default:return Be.toVector(t)}},from(t){if(typeof t=="function")return t;if(t!=null)return Be.toVector(t)},transform(t,a,r){const s=t||r.shared.transform;return this.hasCustomTransform=!!s,s||fp},threshold(t){return Be.toVector(t,0)}},yp=0,It=De(De({},gm),{},{axis(t,a,{axis:r}){if(this.lockDirection=r==="lock",!this.lockDirection)return r},axisThreshold(t=yp){return t},bounds(t={}){if(typeof t=="function")return d=>It.bounds(t(d));if("current"in t)return()=>t.current;if(typeof HTMLElement=="function"&&t instanceof HTMLElement)return t;const{left:a=-1/0,right:r=1/0,top:s=-1/0,bottom:c=1/0}=t;return[[a,r],[s,c]]}}),wd={ArrowRight:(t,a=1)=>[t*a,0],ArrowLeft:(t,a=1)=>[-1*t*a,0],ArrowUp:(t,a=1)=>[0,-1*t*a],ArrowDown:(t,a=1)=>[0,t*a]};class zp extends mp{constructor(...a){super(...a),Le(this,"ingKey","dragging")}reset(){super.reset();const a=this.state;a._pointerId=void 0,a._pointerActive=!1,a._keyboardActive=!1,a._preventScroll=!1,a._delayed=!1,a.swipe=[0,0],a.tap=!1,a.canceled=!1,a.cancel=this.cancel.bind(this)}setup(){const a=this.state;if(a._bounds instanceof HTMLElement){const r=a._bounds.getBoundingClientRect(),s=a.currentTarget.getBoundingClientRect(),c={left:r.left-s.left+a.offset[0],right:r.right-s.right+a.offset[0],top:r.top-s.top+a.offset[1],bottom:r.bottom-s.bottom+a.offset[1]};a._bounds=It.bounds(c)}}cancel(){const a=this.state;a.canceled||(a.canceled=!0,a._active=!1,setTimeout(()=>{this.compute(),this.emit()},0))}setActive(){this.state._active=this.state._pointerActive||this.state._keyboardActive}clean(){this.pointerClean(),this.state._pointerActive=!1,this.state._keyboardActive=!1,super.clean()}pointerDown(a){const r=this.config,s=this.state;if(a.buttons!=null&&(Array.isArray(r.pointerButtons)?!r.pointerButtons.includes(a.buttons):r.pointerButtons!==-1&&r.pointerButtons!==a.buttons))return;const c=this.ctrl.setEventIds(a);r.pointerCapture&&a.target.setPointerCapture(a.pointerId),!(c&&c.size>1&&s._pointerActive)&&(this.start(a),this.setupPointer(a),s._pointerId=ys(a),s._pointerActive=!0,this.computeValues(dd(a)),this.computeInitial(),r.preventScrollAxis&&wm(a)!=="mouse"?(s._active=!1,this.setupScrollPrevention(a)):r.delay>0?(this.setupDelayTrigger(a),r.triggerAllEvents&&(this.compute(a),this.emit())):this.startPointerDrag(a))}startPointerDrag(a){const r=this.state;r._active=!0,r._preventScroll=!0,r._delayed=!1,this.compute(a),this.emit()}pointerMove(a){const r=this.state,s=this.config;if(!r._pointerActive)return;const c=ys(a);if(r._pointerId!==void 0&&c!==r._pointerId)return;const d=dd(a);if(document.pointerLockElement===a.target?r._delta=[a.movementX,a.movementY]:(r._delta=Be.sub(d,r._values),this.computeValues(d)),Be.addTo(r._movement,r._delta),this.compute(a),r._delayed&&r.intentional){this.timeoutStore.remove("dragDelay"),r.active=!1,this.startPointerDrag(a);return}if(s.preventScrollAxis&&!r._preventScroll)if(r.axis)if(r.axis===s.preventScrollAxis||s.preventScrollAxis==="xy"){r._active=!1,this.clean();return}else{this.timeoutStore.remove("startPointerDrag"),this.startPointerDrag(a);return}else return;this.emit()}pointerUp(a){this.ctrl.setEventIds(a);try{this.config.pointerCapture&&a.target.hasPointerCapture(a.pointerId)&&a.target.releasePointerCapture(a.pointerId)}catch{}const r=this.state,s=this.config;if(!r._active||!r._pointerActive)return;const c=ys(a);if(r._pointerId!==void 0&&c!==r._pointerId)return;this.state._pointerActive=!1,this.setActive(),this.compute(a);const[d,f]=r._distance;if(r.tap=d<=s.tapsThreshold&&f<=s.tapsThreshold,r.tap&&s.filterTaps)r._force=!0;else{const[z,g]=r._delta,[C,D]=r._movement,[S,A]=s.swipe.velocity,[H,W]=s.swipe.distance,Q=s.swipe.duration;if(r.elapsedTime<Q){const U=Math.abs(z/r.timeDelta),G=Math.abs(g/r.timeDelta);U>S&&Math.abs(C)>H&&(r.swipe[0]=Math.sign(z)),G>A&&Math.abs(D)>W&&(r.swipe[1]=Math.sign(g))}}this.emit()}pointerClick(a){!this.state.tap&&a.detail>0&&(a.preventDefault(),a.stopPropagation())}setupPointer(a){const r=this.config,s=r.device;r.pointerLock&&a.currentTarget.requestPointerLock(),r.pointerCapture||(this.eventStore.add(this.sharedConfig.window,s,"change",this.pointerMove.bind(this)),this.eventStore.add(this.sharedConfig.window,s,"end",this.pointerUp.bind(this)),this.eventStore.add(this.sharedConfig.window,s,"cancel",this.pointerUp.bind(this)))}pointerClean(){this.config.pointerLock&&document.pointerLockElement===this.state.currentTarget&&document.exitPointerLock()}preventScroll(a){this.state._preventScroll&&a.cancelable&&a.preventDefault()}setupScrollPrevention(a){this.state._preventScroll=!1,wp(a);const r=this.eventStore.add(this.sharedConfig.window,"touch","change",this.preventScroll.bind(this),{passive:!1});this.eventStore.add(this.sharedConfig.window,"touch","end",r),this.eventStore.add(this.sharedConfig.window,"touch","cancel",r),this.timeoutStore.add("startPointerDrag",this.startPointerDrag.bind(this),this.config.preventScrollDelay,a)}setupDelayTrigger(a){this.state._delayed=!0,this.timeoutStore.add("dragDelay",()=>{this.state._step=[0,0],this.startPointerDrag(a)},this.config.delay)}keyDown(a){const r=wd[a.key];if(r){const s=this.state,c=a.shiftKey?10:a.altKey?.1:1;this.start(a),s._delta=r(this.config.keyboardDisplacement,c),s._keyboardActive=!0,Be.addTo(s._movement,s._delta),this.compute(a),this.emit()}}keyUp(a){a.key in wd&&(this.state._keyboardActive=!1,this.setActive(),this.compute(a),this.emit())}bind(a){const r=this.config.device;a(r,"start",this.pointerDown.bind(this)),this.config.pointerCapture&&(a(r,"change",this.pointerMove.bind(this)),a(r,"end",this.pointerUp.bind(this)),a(r,"cancel",this.pointerUp.bind(this)),a("lostPointerCapture","",this.pointerUp.bind(this))),this.config.keys&&(a("key","down",this.keyDown.bind(this)),a("key","up",this.keyUp.bind(this))),this.config.filterTaps&&a("click","",this.pointerClick.bind(this),{capture:!0,passive:!1})}}function wp(t){"persist"in t&&typeof t.persist=="function"&&t.persist()}const Jt=typeof window<"u"&&window.document&&window.document.createElement;function jm(){return Jt&&"ontouchstart"in window}function pp(){return jm()||Jt&&window.navigator.maxTouchPoints>1}function hp(){return Jt&&"onpointerdown"in window}function gp(){return Jt&&"exitPointerLock"in window.document}function jp(){try{return"constructor"in GestureEvent}catch{return!1}}const ci={isBrowser:Jt,gesture:jp(),touch:jm(),touchscreen:pp(),pointer:hp(),pointerLock:gp()},kp=250,bp=180,Cp=.5,vp=50,Dp=250,Tp=10,pd={mouse:0,touch:0,pen:8},Ep=De(De({},It),{},{device(t,a,{pointer:{touch:r=!1,lock:s=!1,mouse:c=!1}={}}){return this.pointerLock=s&&ci.pointerLock,ci.touch&&r?"touch":this.pointerLock?"mouse":ci.pointer&&!c?"pointer":ci.touch?"touch":"mouse"},preventScrollAxis(t,a,{preventScroll:r}){if(this.preventScrollDelay=typeof r=="number"?r:r||r===void 0&&t?kp:void 0,!(!ci.touchscreen||r===!1))return t||(r!==void 0?"y":void 0)},pointerCapture(t,a,{pointer:{capture:r=!0,buttons:s=1,keys:c=!0}={}}){return this.pointerButtons=s,this.keys=c,!this.pointerLock&&this.device==="pointer"&&r},threshold(t,a,{filterTaps:r=!1,tapsThreshold:s=3,axis:c=void 0}){const d=Be.toVector(t,r?s:c?1:0);return this.filterTaps=r,this.tapsThreshold=s,d},swipe({velocity:t=Cp,distance:a=vp,duration:r=Dp}={}){return{velocity:this.transform(Be.toVector(t)),distance:this.transform(Be.toVector(a)),duration:r}},delay(t=0){switch(t){case!0:return bp;case!1:return 0;default:return t}},axisThreshold(t){return t?De(De({},pd),t):pd},keyboardDisplacement(t=Tp){return t}});function Ap(t){const[a,r]=t.overflow,[s,c]=t._delta,[d,f]=t._direction;(a<0&&s>0&&d<0||a>0&&s<0&&d>0)&&(t._movement[0]=t._movementBound[0]),(r<0&&c>0&&f<0||r>0&&c<0&&f>0)&&(t._movement[1]=t._movementBound[1])}const Pp=30,xp=100;class Sp extends hm{constructor(...a){super(...a),Le(this,"ingKey","pinching"),Le(this,"aliasKey","da")}init(){this.state.offset=[1,0],this.state.lastOffset=[1,0],this.state._pointerEvents=new Map}reset(){super.reset();const a=this.state;a._touchIds=[],a.canceled=!1,a.cancel=this.cancel.bind(this),a.turns=0}computeOffset(){const{type:a,movement:r,lastOffset:s}=this.state;a==="wheel"?this.state.offset=Be.add(r,s):this.state.offset=[(1+r[0])*s[0],r[1]+s[1]]}computeMovement(){const{offset:a,lastOffset:r}=this.state;this.state.movement=[a[0]/r[0],a[1]-r[1]]}axisIntent(){const a=this.state,[r,s]=a._movement;if(!a.axis){const c=Math.abs(r)*Pp-Math.abs(s);c<0?a.axis="angle":c>0&&(a.axis="scale")}}restrictToAxis(a){this.config.lockDirection&&(this.state.axis==="scale"?a[1]=0:this.state.axis==="angle"&&(a[0]=0))}cancel(){const a=this.state;a.canceled||setTimeout(()=>{a.canceled=!0,a._active=!1,this.compute(),this.emit()},0)}touchStart(a){this.ctrl.setEventIds(a);const r=this.state,s=this.ctrl.touchIds;if(r._active&&r._touchIds.every(d=>s.has(d))||s.size<2)return;this.start(a),r._touchIds=Array.from(s).slice(0,2);const c=ud(a,r._touchIds);c&&this.pinchStart(a,c)}pointerStart(a){if(a.buttons!=null&&a.buttons%2!==1)return;this.ctrl.setEventIds(a),a.target.setPointerCapture(a.pointerId);const r=this.state,s=r._pointerEvents,c=this.ctrl.pointerIds;if(r._active&&Array.from(s.keys()).every(f=>c.has(f))||(s.size<2&&s.set(a.pointerId,a),r._pointerEvents.size<2))return;this.start(a);const d=As(...Array.from(s.values()));d&&this.pinchStart(a,d)}pinchStart(a,r){const s=this.state;s.origin=r.origin,this.computeValues([r.distance,r.angle]),this.computeInitial(),this.compute(a),this.emit()}touchMove(a){if(!this.state._active)return;const r=ud(a,this.state._touchIds);r&&this.pinchMove(a,r)}pointerMove(a){const r=this.state._pointerEvents;if(r.has(a.pointerId)&&r.set(a.pointerId,a),!this.state._active)return;const s=As(...Array.from(r.values()));s&&this.pinchMove(a,s)}pinchMove(a,r){const s=this.state,c=s._values[1],d=r.angle-c;let f=0;Math.abs(d)>270&&(f+=Math.sign(d)),this.computeValues([r.distance,r.angle-360*f]),s.origin=r.origin,s.turns=f,s._movement=[s._values[0]/s._initial[0]-1,s._values[1]-s._initial[1]],this.compute(a),this.emit()}touchEnd(a){this.ctrl.setEventIds(a),this.state._active&&this.state._touchIds.some(r=>!this.ctrl.touchIds.has(r))&&(this.state._active=!1,this.compute(a),this.emit())}pointerEnd(a){const r=this.state;this.ctrl.setEventIds(a);try{a.target.releasePointerCapture(a.pointerId)}catch{}r._pointerEvents.has(a.pointerId)&&r._pointerEvents.delete(a.pointerId),r._active&&r._pointerEvents.size<2&&(r._active=!1,this.compute(a),this.emit())}gestureStart(a){a.cancelable&&a.preventDefault();const r=this.state;r._active||(this.start(a),this.computeValues([a.scale,a.rotation]),r.origin=[a.clientX,a.clientY],this.compute(a),this.emit())}gestureMove(a){if(a.cancelable&&a.preventDefault(),!this.state._active)return;const r=this.state;this.computeValues([a.scale,a.rotation]),r.origin=[a.clientX,a.clientY];const s=r._movement;r._movement=[a.scale-1,a.rotation],r._delta=Be.sub(r._movement,s),this.compute(a),this.emit()}gestureEnd(a){this.state._active&&(this.state._active=!1,this.compute(a),this.emit())}wheel(a){const r=this.config.modifierKey;r&&(Array.isArray(r)?!r.find(s=>a[s]):!a[r])||(this.state._active?this.wheelChange(a):this.wheelStart(a),this.timeoutStore.add("wheelEnd",this.wheelEnd.bind(this)))}wheelStart(a){this.start(a),this.wheelChange(a)}wheelChange(a){"uv"in a||a.cancelable&&a.preventDefault();const s=this.state;s._delta=[-rp(a)[1]/xp*s.offset[0],0],Be.addTo(s._movement,s._delta),Ap(s),this.state.origin=[a.clientX,a.clientY],this.compute(a),this.emit()}wheelEnd(){this.state._active&&(this.state._active=!1,this.compute(),this.emit())}bind(a){const r=this.config.device;r&&(a(r,"start",this[r+"Start"].bind(this)),a(r,"change",this[r+"Move"].bind(this)),a(r,"end",this[r+"End"].bind(this)),a(r,"cancel",this[r+"End"].bind(this)),a("lostPointerCapture","",this[r+"End"].bind(this))),this.config.pinchOnWheel&&a("wheel","",this.wheel.bind(this),{passive:!1})}}const Gp=De(De({},gm),{},{device(t,a,{shared:r,pointer:{touch:s=!1}={}}){if(r.target&&!ci.touch&&ci.gesture)return"gesture";if(ci.touch&&s)return"touch";if(ci.touchscreen){if(ci.pointer)return"pointer";if(ci.touch)return"touch"}},bounds(t,a,{scaleBounds:r={},angleBounds:s={}}){const c=f=>{const z=yd(no(r,f),{min:-1/0,max:1/0});return[z.min,z.max]},d=f=>{const z=yd(no(s,f),{min:-1/0,max:1/0});return[z.min,z.max]};return typeof r!="function"&&typeof s!="function"?[c(),d()]:f=>[c(f),d(f)]},threshold(t,a,r){return this.lockDirection=r.axis==="lock",Be.toVector(t,this.lockDirection?[.1,3]:0)},modifierKey(t){return t===void 0?"ctrlKey":t},pinchOnWheel(t=!0){return t}});De(De({},It),{},{mouseOnly:(t=!0)=>t});De(De({},It),{},{mouseOnly:(t=!0)=>t});const km=new Map,Ps=new Map;function bm(t){km.set(t.key,t.engine),Ps.set(t.key,t.resolver)}const Bp={key:"drag",engine:zp,resolver:Ep},Op={key:"pinch",engine:Sp,resolver:Gp};function Rp(t,a){if(t==null)return{};var r={},s=Object.keys(t),c,d;for(d=0;d<s.length;d++)c=s[d],!(a.indexOf(c)>=0)&&(r[c]=t[c]);return r}function Np(t,a){if(t==null)return{};var r=Rp(t,a),s,c;if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(t);for(c=0;c<d.length;c++)s=d[c],!(a.indexOf(s)>=0)&&Object.prototype.propertyIsEnumerable.call(t,s)&&(r[s]=t[s])}return r}const Fp={target(t){if(t)return()=>"current"in t?t.current:t},enabled(t=!0){return t},window(t=ci.isBrowser?window:void 0){return t},eventOptions({passive:t=!0,capture:a=!1}={}){return{passive:t,capture:a}},transform(t){return t}},_p=["target","eventOptions","window","enabled","transform"];function Ya(t={},a){const r={};for(const[s,c]of Object.entries(a))switch(typeof c){case"function":r[s]=c.call(r,t[s],s,t);break;case"object":r[s]=Ya(t[s],c);break;case"boolean":c&&(r[s]=t[s]);break}return r}function Mp(t,a,r={}){const s=t,{target:c,eventOptions:d,window:f,enabled:z,transform:g}=s,C=Np(s,_p);if(r.shared=Ya({target:c,eventOptions:d,window:f,enabled:z,transform:g},Fp),a){const D=Ps.get(a);r[a]=Ya(De({shared:r.shared},C),D)}else for(const D in C){const S=Ps.get(D);S&&(r[D]=Ya(De({shared:r.shared},C[D]),S))}return r}class Cm{constructor(a,r){Le(this,"_listeners",new Set),this._ctrl=a,this._gestureKey=r}add(a,r,s,c,d){const f=this._listeners,z=np(r,s),g=this._gestureKey?this._ctrl.config[this._gestureKey].eventOptions:{},C=De(De({},g),d);a.addEventListener(z,c,C);const D=()=>{a.removeEventListener(z,c,C),f.delete(D)};return f.add(D),D}clean(){this._listeners.forEach(a=>a()),this._listeners.clear()}}class Ip{constructor(){Le(this,"_timeouts",new Map)}add(a,r,s=140,...c){this.remove(a),this._timeouts.set(a,window.setTimeout(r,s,...c))}remove(a){const r=this._timeouts.get(a);r&&window.clearTimeout(r)}clean(){this._timeouts.forEach(a=>{window.clearTimeout(a)}),this._timeouts.clear()}}class Jp{constructor(a){Le(this,"gestures",new Set),Le(this,"_targetEventStore",new Cm(this)),Le(this,"gestureEventStores",{}),Le(this,"gestureTimeoutStores",{}),Le(this,"handlers",{}),Le(this,"config",{}),Le(this,"pointerIds",new Set),Le(this,"touchIds",new Set),Le(this,"state",{shared:{shiftKey:!1,metaKey:!1,ctrlKey:!1,altKey:!1}}),Wp(this,a)}setEventIds(a){if(so(a))return this.touchIds=new Set(op(a)),this.touchIds;if("pointerId"in a)return a.type==="pointerup"||a.type==="pointercancel"?this.pointerIds.delete(a.pointerId):a.type==="pointerdown"&&this.pointerIds.add(a.pointerId),this.pointerIds}applyHandlers(a,r){this.handlers=a,this.nativeHandlers=r}applyConfig(a,r){this.config=Mp(a,r,this.config)}clean(){this._targetEventStore.clean();for(const a of this.gestures)this.gestureEventStores[a].clean(),this.gestureTimeoutStores[a].clean()}effect(){return this.config.shared.target&&this.bind(),()=>this._targetEventStore.clean()}bind(...a){const r=this.config.shared,s={};let c;if(!(r.target&&(c=r.target(),!c))){if(r.enabled){for(const f of this.gestures){const z=this.config[f],g=hd(s,z.eventOptions,!!c);if(z.enabled){const C=km.get(f);new C(this,a,f).bind(g)}}const d=hd(s,r.eventOptions,!!c);for(const f in this.nativeHandlers)d(f,"",z=>this.nativeHandlers[f](De(De({},this.state.shared),{},{event:z,args:a})),void 0,!0)}for(const d in s)s[d]=cp(...s[d]);if(!c)return s;for(const d in s){const{device:f,capture:z,passive:g}=ip(d);this._targetEventStore.add(c,f,"",s[d],{capture:z,passive:g})}}}}function Vn(t,a){t.gestures.add(a),t.gestureEventStores[a]=new Cm(t,a),t.gestureTimeoutStores[a]=new Ip}function Wp(t,a){a.drag&&Vn(t,"drag"),a.wheel&&Vn(t,"wheel"),a.scroll&&Vn(t,"scroll"),a.move&&Vn(t,"move"),a.pinch&&Vn(t,"pinch"),a.hover&&Vn(t,"hover")}const hd=(t,a,r)=>(s,c,d,f={},z=!1)=>{var g,C;const D=(g=f.capture)!==null&&g!==void 0?g:a.capture,S=(C=f.passive)!==null&&C!==void 0?C:a.passive;let A=z?s:qw(s,c,D);r&&S&&(A+="Passive"),t[A]=t[A]||[],t[A].push(d)};function vm(t,a={},r,s){const c=Ye.useMemo(()=>new Jp(t),[]);if(c.applyHandlers(t,s),c.applyConfig(a,r),Ye.useEffect(c.effect.bind(c)),Ye.useEffect(()=>c.clean.bind(c),[]),a.target===void 0)return c.bind.bind(c)}function Hp(t,a){return bm(Bp),vm({drag:t},a||{},"drag")}function Lp(t,a){return bm(Op),vm({pinch:t},a||{},"pinch")}const Kp=t=>{const a=localStorage.getItem(t);return typeof a=="string"?JSON.parse(a):void 0},Up=(t,a)=>{a!==void 0&&localStorage.setItem(t,JSON.stringify(a))},Cn=(t,a)=>{const[r,s]=T.useState(()=>{const c=Kp(t);return c||a});return T.useEffect(()=>{Up(t,r)},[t,r]),[r,s]},Zp=(t,a,r,s)=>{const[c,d]=T.useState(null),[f,z]=T.useState(null),[g,C]=Cn("zoomLevel",r),D=A=>{d(A),z(g)},S=A=>{if(!c)return;const H=A/c,W=Math.floor(Math.log10(H)*10),Q=Math.min(Math.max(t,f+W),a);C(Q)};return Lp(A=>{A.first&&D(A.da[0]),S(A.da[0])},{target:s}),[g]},Vp=(t,a)=>{const[r,s]=Cn("chosenSong",1),[c,d]=Cn("starredSongs",[]),[f,z]=Cn("onlyStarred",!1),[g,C]=Cn("selectedSong",null),D=c.length;T.useEffect(()=>{f&&(c.length?c.find(G=>G===r)||s(c[0]):z(!1))},[f,z,r,s,c]);const S=G=>{const X=r===G,$=c.indexOf(G),ie=$+1,le=!!ie,V=g===G;return{chosen:X,starredNumber:ie,starred:le,toggleStarred:()=>{C(le?oe=>oe===G?c.length<=1?null:c.length>$+1?c[$+1]:c[$-1]:oe:G),d(oe=>le?oe.filter(re=>re!==G):[...oe,G])},selected:V,toggleSelected:()=>C(V?null:G),moveUp:$<1?void 0:()=>d(oe=>{const re=oe.filter(we=>we!==G);return re.splice($-1,0,G),re}),moveDown:$>c.length-2?void 0:()=>d(oe=>{const re=oe.filter(we=>we!==G);return re.splice($+1,0,G),re})}},A=G=>({...G,...S(G.number)}),W=(f?c.map(G=>t.find(X=>X.number===G)):t).map(A),Q=G=>{const $=W.findIndex(le=>le.chosen)-G,ie=$>=W.length?0:$<0?W.length-1:$;s(W[ie].number)},U=()=>z(G=>!G);return Hp(G=>{const[X]=G.swipe;X!==0&&Q(X)},{target:a}),{songs:W,setChosenSong:s,starredCount:D,onlyStarred:f,toggleOnlyStarred:U}},Dm=({parsedSongs:t})=>{const a=T.useRef(null),{songs:r,setChosenSong:s,starredCount:c,onlyStarred:d,selectedSong:f,toggleOnlyStarred:z}=Vp(t,a),[g]=Zp(1,20,5,a),[C,D]=Cn("menuShown",!1),[S,A]=Cn("chordsShown",!0),H=()=>D(!0),W=()=>D(!1),Q=()=>A(!0),U=()=>A(!1),G=$=>{s($),W()},X=r.find($=>$.chosen);return E.jsxs(Ye.Fragment,{children:[!C&&E.jsx(ym,{onlyStarred:d,chordsShown:S,onClickMenu:H,onClickGuitar:S?U:Q}),E.jsx("div",{ref:a,className:`container-lg pt-1 min-vh-100 bg-white songbook zoom-level-${g}`,children:!!X&&E.jsx(vd,{song:X,starredCount:c,chordsShown:S})}),E.jsx(fm,{songs:r,chooseSong:G,starredCount:c,selectedSong:f,onlyStarred:d,toggleOnlyStarred:z,show:C,onClose:W})]})};Dm.propTypes={parsedSongs:I.array.isRequired};const $p=()=>E.jsx(Dm,{parsedSongs:gy});bn.render(E.jsx(Ye.StrictMode,{children:E.jsx($p,{})}),document.getElementById("root"));
