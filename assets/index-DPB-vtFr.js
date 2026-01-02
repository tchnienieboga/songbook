(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))a(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&a(f)}).observe(document,{childList:!0,subtree:!0});function u(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(l){if(l.ep)return;l.ep=!0;const c=u(l);fetch(l.href,c)}})();function Wt(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Xo={exports:{}},Zn={},qo={exports:{}},fe={};var es,xc;function Ed(){if(xc)return es;xc=1;var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;function a(c){if(c==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(c)}function l(){try{if(!Object.assign)return!1;var c=new String("abc");if(c[5]="de",Object.getOwnPropertyNames(c)[0]==="5")return!1;for(var f={},z=0;z<10;z++)f["_"+String.fromCharCode(z)]=z;var p=Object.getOwnPropertyNames(f).map(function(k){return f[k]});if(p.join("")!=="0123456789")return!1;var g={};return"abcdefghijklmnopqrst".split("").forEach(function(k){g[k]=k}),Object.keys(Object.assign({},g)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}return es=l()?Object.assign:function(c,f){for(var z,p=a(c),g,k=1;k<arguments.length;k++){z=Object(arguments[k]);for(var T in z)r.call(z,T)&&(p[T]=z[T]);if(t){g=t(z);for(var E=0;E<g.length;E++)u.call(z,g[E])&&(p[g[E]]=z[g[E]])}}return p},es}var Bc;function vz(){if(Bc)return fe;Bc=1;var t=Ed(),r=typeof Symbol=="function"&&Symbol.for,u=r?Symbol.for("react.element"):60103,a=r?Symbol.for("react.portal"):60106,l=r?Symbol.for("react.fragment"):60107,c=r?Symbol.for("react.strict_mode"):60108,f=r?Symbol.for("react.profiler"):60114,z=r?Symbol.for("react.provider"):60109,p=r?Symbol.for("react.context"):60110,g=r?Symbol.for("react.forward_ref"):60112,k=r?Symbol.for("react.suspense"):60113,T=r?Symbol.for("react.memo"):60115,E=r?Symbol.for("react.lazy"):60116,M=typeof Symbol=="function"&&Symbol.iterator;function _(w){for(var C="https://reactjs.org/docs/error-decoder.html?invariant="+w,O=1;O<arguments.length;O++)C+="&args[]="+encodeURIComponent(arguments[O]);return"Minified React error #"+w+"; visit "+C+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},$={};function x(w,C,O){this.props=w,this.context=C,this.refs=$,this.updater=O||Y}x.prototype.isReactComponent={},x.prototype.setState=function(w,C){if(typeof w!="object"&&typeof w!="function"&&w!=null)throw Error(_(85));this.updater.enqueueSetState(this,w,C,"setState")},x.prototype.forceUpdate=function(w){this.updater.enqueueForceUpdate(this,w,"forceUpdate")};function V(){}V.prototype=x.prototype;function K(w,C,O){this.props=w,this.context=C,this.refs=$,this.updater=O||Y}var Q=K.prototype=new V;Q.constructor=K,t(Q,x.prototype),Q.isPureReactComponent=!0;var te={current:null},X=Object.prototype.hasOwnProperty,ee={key:!0,ref:!0,__self:!0,__source:!0};function se(w,C,O){var H,U={},ae=null,ie=null;if(C!=null)for(H in C.ref!==void 0&&(ie=C.ref),C.key!==void 0&&(ae=""+C.key),C)X.call(C,H)&&!ee.hasOwnProperty(H)&&(U[H]=C[H]);var J=arguments.length-2;if(J===1)U.children=O;else if(1<J){for(var je=Array(J),Se=0;Se<J;Se++)je[Se]=arguments[Se+2];U.children=je}if(w&&w.defaultProps)for(H in J=w.defaultProps,J)U[H]===void 0&&(U[H]=J[H]);return{$$typeof:u,type:w,key:ae,ref:ie,props:U,_owner:te.current}}function pe(w,C){return{$$typeof:u,type:w.type,key:C,ref:w.ref,props:w.props,_owner:w._owner}}function be(w){return typeof w=="object"&&w!==null&&w.$$typeof===u}function he(w){var C={"=":"=0",":":"=2"};return"$"+(""+w).replace(/[=:]/g,function(O){return C[O]})}var ve=/\/+/g,Ue=[];function ze(w,C,O,H){if(Ue.length){var U=Ue.pop();return U.result=w,U.keyPrefix=C,U.func=O,U.context=H,U.count=0,U}return{result:w,keyPrefix:C,func:O,context:H,count:0}}function ye(w){w.result=null,w.keyPrefix=null,w.func=null,w.context=null,w.count=0,10>Ue.length&&Ue.push(w)}function Ee(w,C,O,H){var U=typeof w;(U==="undefined"||U==="boolean")&&(w=null);var ae=!1;if(w===null)ae=!0;else switch(U){case"string":case"number":ae=!0;break;case"object":switch(w.$$typeof){case u:case a:ae=!0}}if(ae)return O(H,w,C===""?"."+ce(w,0):C),1;if(ae=0,C=C===""?".":C+":",Array.isArray(w))for(var ie=0;ie<w.length;ie++){U=w[ie];var J=C+ce(U,ie);ae+=Ee(U,J,O,H)}else if(w===null||typeof w!="object"?J=null:(J=M&&w[M]||w["@@iterator"],J=typeof J=="function"?J:null),typeof J=="function")for(w=J.call(w),ie=0;!(U=w.next()).done;)U=U.value,J=C+ce(U,ie++),ae+=Ee(U,J,O,H);else if(U==="object")throw O=""+w,Error(_(31,O==="[object Object]"?"object with keys {"+Object.keys(w).join(", ")+"}":O,""));return ae}function Ae(w,C,O){return w==null?0:Ee(w,"",C,O)}function ce(w,C){return typeof w=="object"&&w!==null&&w.key!=null?he(w.key):C.toString(36)}function Ye(w,C){w.func.call(w.context,C,w.count++)}function Oe(w,C,O){var H=w.result,U=w.keyPrefix;w=w.func.call(w.context,C,w.count++),Array.isArray(w)?xe(w,H,O,function(ae){return ae}):w!=null&&(be(w)&&(w=pe(w,U+(!w.key||C&&C.key===w.key?"":(""+w.key).replace(ve,"$&/")+"/")+O)),H.push(w))}function xe(w,C,O,H,U){var ae="";O!=null&&(ae=(""+O).replace(ve,"$&/")+"/"),C=ze(C,ae,H,U),Ae(w,Oe,C),ye(C)}var _e={current:null};function ge(){var w=_e.current;if(w===null)throw Error(_(321));return w}var S={ReactCurrentDispatcher:_e,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:te,IsSomeRendererActing:{current:!1},assign:t};return fe.Children={map:function(w,C,O){if(w==null)return w;var H=[];return xe(w,H,null,C,O),H},forEach:function(w,C,O){if(w==null)return w;C=ze(null,null,C,O),Ae(w,Ye,C),ye(C)},count:function(w){return Ae(w,function(){return null},null)},toArray:function(w){var C=[];return xe(w,C,null,function(O){return O}),C},only:function(w){if(!be(w))throw Error(_(143));return w}},fe.Component=x,fe.Fragment=l,fe.Profiler=f,fe.PureComponent=K,fe.StrictMode=c,fe.Suspense=k,fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=S,fe.cloneElement=function(w,C,O){if(w==null)throw Error(_(267,w));var H=t({},w.props),U=w.key,ae=w.ref,ie=w._owner;if(C!=null){if(C.ref!==void 0&&(ae=C.ref,ie=te.current),C.key!==void 0&&(U=""+C.key),w.type&&w.type.defaultProps)var J=w.type.defaultProps;for(je in C)X.call(C,je)&&!ee.hasOwnProperty(je)&&(H[je]=C[je]===void 0&&J!==void 0?J[je]:C[je])}var je=arguments.length-2;if(je===1)H.children=O;else if(1<je){J=Array(je);for(var Se=0;Se<je;Se++)J[Se]=arguments[Se+2];H.children=J}return{$$typeof:u,type:w.type,key:U,ref:ae,props:H,_owner:ie}},fe.createContext=function(w,C){return C===void 0&&(C=null),w={$$typeof:p,_calculateChangedBits:C,_currentValue:w,_currentValue2:w,_threadCount:0,Provider:null,Consumer:null},w.Provider={$$typeof:z,_context:w},w.Consumer=w},fe.createElement=se,fe.createFactory=function(w){var C=se.bind(null,w);return C.type=w,C},fe.createRef=function(){return{current:null}},fe.forwardRef=function(w){return{$$typeof:g,render:w}},fe.isValidElement=be,fe.lazy=function(w){return{$$typeof:E,_ctor:w,_status:-1,_result:null}},fe.memo=function(w,C){return{$$typeof:T,type:w,compare:C===void 0?null:C}},fe.useCallback=function(w,C){return ge().useCallback(w,C)},fe.useContext=function(w,C){return ge().useContext(w,C)},fe.useDebugValue=function(){},fe.useEffect=function(w,C){return ge().useEffect(w,C)},fe.useImperativeHandle=function(w,C,O){return ge().useImperativeHandle(w,C,O)},fe.useLayoutEffect=function(w,C){return ge().useLayoutEffect(w,C)},fe.useMemo=function(w,C){return ge().useMemo(w,C)},fe.useReducer=function(w,C,O){return ge().useReducer(w,C,O)},fe.useRef=function(w){return ge().useRef(w)},fe.useState=function(w){return ge().useState(w)},fe.version="16.14.0",fe}var Oc;function Ns(){return Oc||(Oc=1,qo.exports=vz()),qo.exports}var Rc;function Cz(){if(Rc)return Zn;Rc=1;var t=Ns(),r=60103;if(Zn.Fragment=60107,typeof Symbol=="function"&&Symbol.for){var u=Symbol.for;r=u("react.element"),Zn.Fragment=u("react.fragment")}var a=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l=Object.prototype.hasOwnProperty,c={key:!0,ref:!0,__self:!0,__source:!0};function f(z,p,g){var k,T={},E=null,M=null;g!==void 0&&(E=""+g),p.key!==void 0&&(E=""+p.key),p.ref!==void 0&&(M=p.ref);for(k in p)l.call(p,k)&&!c.hasOwnProperty(k)&&(T[k]=p[k]);if(z&&z.defaultProps)for(k in p=z.defaultProps,p)T[k]===void 0&&(T[k]=p[k]);return{$$typeof:r,type:z,key:E,ref:M,props:T,_owner:a.current}}return Zn.jsx=f,Zn.jsxs=f,Zn}var Nc;function Dz(){return Nc||(Nc=1,Xo.exports=Cz()),Xo.exports}var P=Dz(),A=Ns();const ti=Wt(A);var is={exports:{}},ni={},ns={exports:{}},ts={};var Fc;function Tz(){return Fc||(Fc=1,(function(t){var r,u,a,l,c;if(typeof window>"u"||typeof MessageChannel!="function"){var f=null,z=null,p=function(){if(f!==null)try{var S=t.unstable_now();f(!0,S),f=null}catch(w){throw setTimeout(p,0),w}},g=Date.now();t.unstable_now=function(){return Date.now()-g},r=function(S){f!==null?setTimeout(r,0,S):(f=S,setTimeout(p,0))},u=function(S,w){z=setTimeout(S,w)},a=function(){clearTimeout(z)},l=function(){return!1},c=t.unstable_forceFrameRate=function(){}}else{var k=window.performance,T=window.Date,E=window.setTimeout,M=window.clearTimeout;if(typeof console<"u"){var _=window.cancelAnimationFrame;typeof window.requestAnimationFrame!="function"&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"),typeof _!="function"&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills")}if(typeof k=="object"&&typeof k.now=="function")t.unstable_now=function(){return k.now()};else{var Y=T.now();t.unstable_now=function(){return T.now()-Y}}var $=!1,x=null,V=-1,K=5,Q=0;l=function(){return t.unstable_now()>=Q},c=function(){},t.unstable_forceFrameRate=function(S){0>S||125<S?console.error("forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported"):K=0<S?Math.floor(1e3/S):5};var te=new MessageChannel,X=te.port2;te.port1.onmessage=function(){if(x!==null){var S=t.unstable_now();Q=S+K;try{x(!0,S)?X.postMessage(null):($=!1,x=null)}catch(w){throw X.postMessage(null),w}}else $=!1},r=function(S){x=S,$||($=!0,X.postMessage(null))},u=function(S,w){V=E(function(){S(t.unstable_now())},w)},a=function(){M(V),V=-1}}function ee(S,w){var C=S.length;S.push(w);e:for(;;){var O=C-1>>>1,H=S[O];if(H!==void 0&&0<be(H,w))S[O]=w,S[C]=H,C=O;else break e}}function se(S){return S=S[0],S===void 0?null:S}function pe(S){var w=S[0];if(w!==void 0){var C=S.pop();if(C!==w){S[0]=C;e:for(var O=0,H=S.length;O<H;){var U=2*(O+1)-1,ae=S[U],ie=U+1,J=S[ie];if(ae!==void 0&&0>be(ae,C))J!==void 0&&0>be(J,ae)?(S[O]=J,S[ie]=C,O=ie):(S[O]=ae,S[U]=C,O=U);else if(J!==void 0&&0>be(J,C))S[O]=J,S[ie]=C,O=ie;else break e}}return w}return null}function be(S,w){var C=S.sortIndex-w.sortIndex;return C!==0?C:S.id-w.id}var he=[],ve=[],Ue=1,ze=null,ye=3,Ee=!1,Ae=!1,ce=!1;function Ye(S){for(var w=se(ve);w!==null;){if(w.callback===null)pe(ve);else if(w.startTime<=S)pe(ve),w.sortIndex=w.expirationTime,ee(he,w);else break;w=se(ve)}}function Oe(S){if(ce=!1,Ye(S),!Ae)if(se(he)!==null)Ae=!0,r(xe);else{var w=se(ve);w!==null&&u(Oe,w.startTime-S)}}function xe(S,w){Ae=!1,ce&&(ce=!1,a()),Ee=!0;var C=ye;try{for(Ye(w),ze=se(he);ze!==null&&(!(ze.expirationTime>w)||S&&!l());){var O=ze.callback;if(O!==null){ze.callback=null,ye=ze.priorityLevel;var H=O(ze.expirationTime<=w);w=t.unstable_now(),typeof H=="function"?ze.callback=H:ze===se(he)&&pe(he),Ye(w)}else pe(he);ze=se(he)}if(ze!==null)var U=!0;else{var ae=se(ve);ae!==null&&u(Oe,ae.startTime-w),U=!1}return U}finally{ze=null,ye=C,Ee=!1}}function _e(S){switch(S){case 1:return-1;case 2:return 250;case 5:return 1073741823;case 4:return 1e4;default:return 5e3}}var ge=c;t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(S){S.callback=null},t.unstable_continueExecution=function(){Ae||Ee||(Ae=!0,r(xe))},t.unstable_getCurrentPriorityLevel=function(){return ye},t.unstable_getFirstCallbackNode=function(){return se(he)},t.unstable_next=function(S){switch(ye){case 1:case 2:case 3:var w=3;break;default:w=ye}var C=ye;ye=w;try{return S()}finally{ye=C}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=ge,t.unstable_runWithPriority=function(S,w){switch(S){case 1:case 2:case 3:case 4:case 5:break;default:S=3}var C=ye;ye=S;try{return w()}finally{ye=C}},t.unstable_scheduleCallback=function(S,w,C){var O=t.unstable_now();if(typeof C=="object"&&C!==null){var H=C.delay;H=typeof H=="number"&&0<H?O+H:O,C=typeof C.timeout=="number"?C.timeout:_e(S)}else C=_e(S),H=O;return C=H+C,S={id:Ue++,callback:w,priorityLevel:S,startTime:H,expirationTime:C,sortIndex:-1},H>O?(S.sortIndex=H,ee(ve,S),se(he)===null&&S===se(ve)&&(ce?a():ce=!0,u(Oe,H-O))):(S.sortIndex=C,ee(he,S),Ae||Ee||(Ae=!0,r(xe))),S},t.unstable_shouldYield=function(){var S=t.unstable_now();Ye(S);var w=se(he);return w!==ze&&ze!==null&&w!==null&&w.callback!==null&&w.startTime<=S&&w.expirationTime<ze.expirationTime||l()},t.unstable_wrapCallback=function(S){var w=ye;return function(){var C=ye;ye=w;try{return S.apply(this,arguments)}finally{ye=C}}}})(ts)),ts}var Mc;function Ez(){return Mc||(Mc=1,ns.exports=Tz()),ns.exports}var Ic;function Az(){if(Ic)return ni;Ic=1;var t=Ns(),r=Ed(),u=Ez();function a(e){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)i+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}if(!t)throw Error(a(227));function l(e,i,n,o,s,d,m,y,b){var v=Array.prototype.slice.call(arguments,3);try{i.apply(n,v)}catch(R){this.onError(R)}}var c=!1,f=null,z=!1,p=null,g={onError:function(e){c=!0,f=e}};function k(e,i,n,o,s,d,m,y,b){c=!1,f=null,l.apply(g,arguments)}function T(e,i,n,o,s,d,m,y,b){if(k.apply(this,arguments),c){if(c){var v=f;c=!1,f=null}else throw Error(a(198));z||(z=!0,p=v)}}var E=null,M=null,_=null;function Y(e,i,n){var o=e.type||"unknown-event";e.currentTarget=_(n),T(o,i,void 0,e),e.currentTarget=null}var $=null,x={};function V(){if($)for(var e in x){var i=x[e],n=$.indexOf(e);if(!(-1<n))throw Error(a(96,e));if(!Q[n]){if(!i.extractEvents)throw Error(a(97,e));Q[n]=i,n=i.eventTypes;for(var o in n){var s=void 0,d=n[o],m=i,y=o;if(te.hasOwnProperty(y))throw Error(a(99,y));te[y]=d;var b=d.phasedRegistrationNames;if(b){for(s in b)b.hasOwnProperty(s)&&K(b[s],m,y);s=!0}else d.registrationName?(K(d.registrationName,m,y),s=!0):s=!1;if(!s)throw Error(a(98,o,e))}}}}function K(e,i,n){if(X[e])throw Error(a(100,e));X[e]=i,ee[e]=i.eventTypes[n].dependencies}var Q=[],te={},X={},ee={};function se(e){var i=!1,n;for(n in e)if(e.hasOwnProperty(n)){var o=e[n];if(!x.hasOwnProperty(n)||x[n]!==o){if(x[n])throw Error(a(102,n));x[n]=o,i=!0}}i&&V()}var pe=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),be=null,he=null,ve=null;function Ue(e){if(e=M(e)){if(typeof be!="function")throw Error(a(280));var i=e.stateNode;i&&(i=E(i),be(e.stateNode,e.type,i))}}function ze(e){he?ve?ve.push(e):ve=[e]:he=e}function ye(){if(he){var e=he,i=ve;if(ve=he=null,Ue(e),i)for(e=0;e<i.length;e++)Ue(i[e])}}function Ee(e,i){return e(i)}function Ae(e,i,n,o,s){return e(i,n,o,s)}function ce(){}var Ye=Ee,Oe=!1,xe=!1;function _e(){(he!==null||ve!==null)&&(ce(),ye())}function ge(e,i,n){if(xe)return e(i,n);xe=!0;try{return Ye(e,i,n)}finally{xe=!1,_e()}}var S=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,w=Object.prototype.hasOwnProperty,C={},O={};function H(e){return w.call(O,e)?!0:w.call(C,e)?!1:S.test(e)?O[e]=!0:(C[e]=!0,!1)}function U(e,i,n,o){if(n!==null&&n.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return o?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function ae(e,i,n,o){if(i===null||typeof i>"u"||U(e,i,n,o))return!0;if(o)return!1;if(n!==null)switch(n.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function ie(e,i,n,o,s,d){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=o,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=e,this.type=i,this.sanitizeURL=d}var J={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){J[e]=new ie(e,0,!1,e,null,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var i=e[0];J[i]=new ie(i,1,!1,e[1],null,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){J[e]=new ie(e,2,!1,e.toLowerCase(),null,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){J[e]=new ie(e,2,!1,e,null,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){J[e]=new ie(e,3,!1,e.toLowerCase(),null,!1)}),["checked","multiple","muted","selected"].forEach(function(e){J[e]=new ie(e,3,!0,e,null,!1)}),["capture","download"].forEach(function(e){J[e]=new ie(e,4,!1,e,null,!1)}),["cols","rows","size","span"].forEach(function(e){J[e]=new ie(e,6,!1,e,null,!1)}),["rowSpan","start"].forEach(function(e){J[e]=new ie(e,5,!1,e.toLowerCase(),null,!1)});var je=/[\-:]([a-z])/g;function Se(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var i=e.replace(je,Se);J[i]=new ie(i,1,!1,e,null,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var i=e.replace(je,Se);J[i]=new ie(i,1,!1,e,"http://www.w3.org/1999/xlink",!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var i=e.replace(je,Se);J[i]=new ie(i,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1)}),["tabIndex","crossOrigin"].forEach(function(e){J[e]=new ie(e,1,!1,e.toLowerCase(),null,!1)}),J.xlinkHref=new ie("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0),["src","href","action","formAction"].forEach(function(e){J[e]=new ie(e,1,!1,e.toLowerCase(),null,!0)});var re=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;re.hasOwnProperty("ReactCurrentDispatcher")||(re.ReactCurrentDispatcher={current:null}),re.hasOwnProperty("ReactCurrentBatchConfig")||(re.ReactCurrentBatchConfig={suspense:null});function Ri(e,i,n,o){var s=J.hasOwnProperty(i)?J[i]:null,d=s!==null?s.type===0:o?!1:!(!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N");d||(ae(i,n,s,o)&&(n=null),o||s===null?H(i)&&(n===null?e.removeAttribute(i):e.setAttribute(i,""+n)):s.mustUseProperty?e[s.propertyName]=n===null?s.type===3?!1:"":n:(i=s.attributeName,o=s.attributeNamespace,n===null?e.removeAttribute(i):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,o?e.setAttributeNS(o,i,n):e.setAttribute(i,n))))}var rn=/^(.*)[\\\/]/,Je=typeof Symbol=="function"&&Symbol.for,Pn=Je?Symbol.for("react.element"):60103,Ni=Je?Symbol.for("react.portal"):60106,vi=Je?Symbol.for("react.fragment"):60107,Lt=Je?Symbol.for("react.strict_mode"):60108,Sn=Je?Symbol.for("react.profiler"):60114,it=Je?Symbol.for("react.provider"):60109,Kt=Je?Symbol.for("react.context"):60110,le=Je?Symbol.for("react.concurrent_mode"):60111,zi=Je?Symbol.for("react.forward_ref"):60112,on=Je?Symbol.for("react.suspense"):60113,yr=Je?Symbol.for("react.suspense_list"):60120,wr=Je?Symbol.for("react.memo"):60115,Xs=Je?Symbol.for("react.lazy"):60116,qs=Je?Symbol.for("react.block"):60121,eu=typeof Symbol=="function"&&Symbol.iterator;function nt(e){return e===null||typeof e!="object"?null:(e=eu&&e[eu]||e["@@iterator"],typeof e=="function"?e:null)}function Wm(e){if(e._status===-1){e._status=0;var i=e._ctor;i=i(),e._result=i,i.then(function(n){e._status===0&&(n=n.default,e._status=1,e._result=n)},function(n){e._status===0&&(e._status=2,e._result=n)})}}function Ci(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case vi:return"Fragment";case Ni:return"Portal";case Sn:return"Profiler";case Lt:return"StrictMode";case on:return"Suspense";case yr:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Kt:return"Context.Consumer";case it:return"Context.Provider";case zi:var i=e.render;return i=i.displayName||i.name||"",e.displayName||(i!==""?"ForwardRef("+i+")":"ForwardRef");case wr:return Ci(e.type);case qs:return Ci(e.render);case Xs:if(e=e._status===1?e._result:null)return Ci(e)}return null}function pr(e){var i="";do{e:switch(e.tag){case 3:case 4:case 6:case 7:case 10:case 9:var n="";break e;default:var o=e._debugOwner,s=e._debugSource,d=Ci(e.type);n=null,o&&(n=Ci(o.type)),o=d,d="",s?d=" (at "+s.fileName.replace(rn,"")+":"+s.lineNumber+")":n&&(d=" (created by "+n+")"),n=`
    in `+(o||"Unknown")+d}i+=n,e=e.return}while(e);return i}function Fi(e){switch(typeof e){case"boolean":case"number":case"object":case"string":case"undefined":return e;default:return""}}function iu(e){var i=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Hm(e){var i=iu(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,i),o=""+e[i];if(!e.hasOwnProperty(i)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,d=n.set;return Object.defineProperty(e,i,{configurable:!0,get:function(){return s.call(this)},set:function(m){o=""+m,d.call(this,m)}}),Object.defineProperty(e,i,{enumerable:n.enumerable}),{getValue:function(){return o},setValue:function(m){o=""+m},stopTracking:function(){e._valueTracker=null,delete e[i]}}}}function Ut(e){e._valueTracker||(e._valueTracker=Hm(e))}function nu(e){if(!e)return!1;var i=e._valueTracker;if(!i)return!0;var n=i.getValue(),o="";return e&&(o=iu(e)?e.checked?"true":"false":e.value),e=o,e!==n?(i.setValue(e),!0):!1}function hr(e,i){var n=i.checked;return r({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function tu(e,i){var n=i.defaultValue==null?"":i.defaultValue,o=i.checked!=null?i.checked:i.defaultChecked;n=Fi(i.value!=null?i.value:n),e._wrapperState={initialChecked:o,initialValue:n,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function au(e,i){i=i.checked,i!=null&&Ri(e,"checked",i,!1)}function gr(e,i){au(e,i);var n=Fi(i.value),o=i.type;if(n!=null)o==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(o==="submit"||o==="reset"){e.removeAttribute("value");return}i.hasOwnProperty("value")?jr(e,i.type,n):i.hasOwnProperty("defaultValue")&&jr(e,i.type,Fi(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(e.defaultChecked=!!i.defaultChecked)}function ru(e,i,n){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var o=i.type;if(!(o!=="submit"&&o!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+e._wrapperState.initialValue,n||i===e.value||(e.value=i),e.defaultValue=i}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function jr(e,i,n){(i!=="number"||e.ownerDocument.activeElement!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}function Lm(e){var i="";return t.Children.forEach(e,function(n){n!=null&&(i+=n)}),i}function kr(e,i){return e=r({children:void 0},i),(i=Lm(i.children))&&(e.children=i),e}function Gn(e,i,n,o){if(e=e.options,i){i={};for(var s=0;s<n.length;s++)i["$"+n[s]]=!0;for(n=0;n<e.length;n++)s=i.hasOwnProperty("$"+e[n].value),e[n].selected!==s&&(e[n].selected=s),s&&o&&(e[n].defaultSelected=!0)}else{for(n=""+Fi(n),i=null,s=0;s<e.length;s++){if(e[s].value===n){e[s].selected=!0,o&&(e[s].defaultSelected=!0);return}i!==null||e[s].disabled||(i=e[s])}i!==null&&(i.selected=!0)}}function br(e,i){if(i.dangerouslySetInnerHTML!=null)throw Error(a(91));return r({},i,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ou(e,i){var n=i.value;if(n==null){if(n=i.children,i=i.defaultValue,n!=null){if(i!=null)throw Error(a(92));if(Array.isArray(n)){if(!(1>=n.length))throw Error(a(93));n=n[0]}i=n}i==null&&(i=""),n=i}e._wrapperState={initialValue:Fi(n)}}function su(e,i){var n=Fi(i.value),o=Fi(i.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),i.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),o!=null&&(e.defaultValue=""+o)}function uu(e){var i=e.textContent;i===e._wrapperState.initialValue&&i!==""&&i!==null&&(e.value=i)}var lu={html:"http://www.w3.org/1999/xhtml",svg:"http://www.w3.org/2000/svg"};function cu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function vr(e,i){return e==null||e==="http://www.w3.org/1999/xhtml"?cu(i):e==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Zt,du=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,n,o,s){MSApp.execUnsafeLocalFunction(function(){return e(i,n,o,s)})}:e})(function(e,i){if(e.namespaceURI!==lu.svg||"innerHTML"in e)e.innerHTML=i;else{for(Zt=Zt||document.createElement("div"),Zt.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Zt.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;i.firstChild;)e.appendChild(i.firstChild)}});function tt(e,i){if(i){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=i;return}}e.textContent=i}function $t(e,i){var n={};return n[e.toLowerCase()]=i.toLowerCase(),n["Webkit"+e]="webkit"+i,n["Moz"+e]="moz"+i,n}var xn={animationend:$t("Animation","AnimationEnd"),animationiteration:$t("Animation","AnimationIteration"),animationstart:$t("Animation","AnimationStart"),transitionend:$t("Transition","TransitionEnd")},Cr={},mu={};pe&&(mu=document.createElement("div").style,"AnimationEvent"in window||(delete xn.animationend.animation,delete xn.animationiteration.animation,delete xn.animationstart.animation),"TransitionEvent"in window||delete xn.transitionend.transition);function Vt(e){if(Cr[e])return Cr[e];if(!xn[e])return e;var i=xn[e],n;for(n in i)if(i.hasOwnProperty(n)&&n in mu)return Cr[e]=i[n];return e}var fu=Vt("animationend"),zu=Vt("animationiteration"),yu=Vt("animationstart"),wu=Vt("transitionend"),at="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),pu=new(typeof WeakMap=="function"?WeakMap:Map);function Dr(e){var i=pu.get(e);return i===void 0&&(i=new Map,pu.set(e,i)),i}function sn(e){var i=e,n=e;if(e.alternate)for(;i.return;)i=i.return;else{e=i;do i=e,(i.effectTag&1026)!==0&&(n=i.return),e=i.return;while(e)}return i.tag===3?n:null}function hu(e){if(e.tag===13){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function gu(e){if(sn(e)!==e)throw Error(a(188))}function Km(e){var i=e.alternate;if(!i){if(i=sn(e),i===null)throw Error(a(188));return i!==e?null:e}for(var n=e,o=i;;){var s=n.return;if(s===null)break;var d=s.alternate;if(d===null){if(o=s.return,o!==null){n=o;continue}break}if(s.child===d.child){for(d=s.child;d;){if(d===n)return gu(s),e;if(d===o)return gu(s),i;d=d.sibling}throw Error(a(188))}if(n.return!==o.return)n=s,o=d;else{for(var m=!1,y=s.child;y;){if(y===n){m=!0,n=s,o=d;break}if(y===o){m=!0,o=s,n=d;break}y=y.sibling}if(!m){for(y=d.child;y;){if(y===n){m=!0,n=d,o=s;break}if(y===o){m=!0,o=d,n=s;break}y=y.sibling}if(!m)throw Error(a(189))}}if(n.alternate!==o)throw Error(a(190))}if(n.tag!==3)throw Error(a(188));return n.stateNode.current===n?e:i}function ju(e){if(e=Km(e),!e)return null;for(var i=e;;){if(i.tag===5||i.tag===6)return i;if(i.child)i.child.return=i,i=i.child;else{if(i===e)break;for(;!i.sibling;){if(!i.return||i.return===e)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}}return null}function Bn(e,i){if(i==null)throw Error(a(30));return e==null?i:Array.isArray(e)?Array.isArray(i)?(e.push.apply(e,i),e):(e.push(i),e):Array.isArray(i)?[e].concat(i):[e,i]}function Tr(e,i,n){Array.isArray(e)?e.forEach(i,n):e&&i.call(n,e)}var rt=null;function Um(e){if(e){var i=e._dispatchListeners,n=e._dispatchInstances;if(Array.isArray(i))for(var o=0;o<i.length&&!e.isPropagationStopped();o++)Y(e,i[o],n[o]);else i&&Y(e,i,n);e._dispatchListeners=null,e._dispatchInstances=null,e.isPersistent()||e.constructor.release(e)}}function Yt(e){if(e!==null&&(rt=Bn(rt,e)),e=rt,rt=null,e){if(Tr(e,Um),rt)throw Error(a(95));if(z)throw e=p,z=!1,p=null,e}}function Er(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}function ku(e){if(!pe)return!1;e="on"+e;var i=e in document;return i||(i=document.createElement("div"),i.setAttribute(e,"return;"),i=typeof i[e]=="function"),i}var Qt=[];function bu(e){e.topLevelType=null,e.nativeEvent=null,e.targetInst=null,e.ancestors.length=0,10>Qt.length&&Qt.push(e)}function vu(e,i,n,o){if(Qt.length){var s=Qt.pop();return s.topLevelType=e,s.eventSystemFlags=o,s.nativeEvent=i,s.targetInst=n,s}return{topLevelType:e,eventSystemFlags:o,nativeEvent:i,targetInst:n,ancestors:[]}}function Cu(e){var i=e.targetInst,n=i;do{if(!n){e.ancestors.push(n);break}var o=n;if(o.tag===3)o=o.stateNode.containerInfo;else{for(;o.return;)o=o.return;o=o.tag!==3?null:o.stateNode.containerInfo}if(!o)break;i=n.tag,i!==5&&i!==6||e.ancestors.push(n),n=zt(o)}while(n);for(n=0;n<e.ancestors.length;n++){i=e.ancestors[n];var s=Er(e.nativeEvent);o=e.topLevelType;var d=e.nativeEvent,m=e.eventSystemFlags;n===0&&(m|=64);for(var y=null,b=0;b<Q.length;b++){var v=Q[b];v&&(v=v.extractEvents(o,i,d,s,m))&&(y=Bn(y,v))}Yt(y)}}function Ar(e,i,n){if(!n.has(e)){switch(e){case"scroll":dt(i,"scroll",!0);break;case"focus":case"blur":dt(i,"focus",!0),dt(i,"blur",!0),n.set("blur",null),n.set("focus",null);break;case"cancel":case"close":ku(e)&&dt(i,e,!0);break;case"invalid":case"submit":case"reset":break;default:at.indexOf(e)===-1&&Ce(e,i)}n.set(e,null)}}var Du,Pr,Tu,Sr=!1,yi=[],Mi=null,Ii=null,_i=null,ot=new Map,st=new Map,ut=[],Gr="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput close cancel copy cut paste click change contextmenu reset submit".split(" "),Zm="focus blur dragenter dragleave mouseover mouseout pointerover pointerout gotpointercapture lostpointercapture".split(" ");function $m(e,i){var n=Dr(i);Gr.forEach(function(o){Ar(o,i,n)}),Zm.forEach(function(o){Ar(o,i,n)})}function xr(e,i,n,o,s){return{blockedOn:e,topLevelType:i,eventSystemFlags:n|32,nativeEvent:s,container:o}}function Eu(e,i){switch(e){case"focus":case"blur":Mi=null;break;case"dragenter":case"dragleave":Ii=null;break;case"mouseover":case"mouseout":_i=null;break;case"pointerover":case"pointerout":ot.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":st.delete(i.pointerId)}}function lt(e,i,n,o,s,d){return e===null||e.nativeEvent!==d?(e=xr(i,n,o,s,d),i!==null&&(i=yt(i),i!==null&&Pr(i)),e):(e.eventSystemFlags|=o,e)}function Vm(e,i,n,o,s){switch(i){case"focus":return Mi=lt(Mi,e,i,n,o,s),!0;case"dragenter":return Ii=lt(Ii,e,i,n,o,s),!0;case"mouseover":return _i=lt(_i,e,i,n,o,s),!0;case"pointerover":var d=s.pointerId;return ot.set(d,lt(ot.get(d)||null,e,i,n,o,s)),!0;case"gotpointercapture":return d=s.pointerId,st.set(d,lt(st.get(d)||null,e,i,n,o,s)),!0}return!1}function Ym(e){var i=zt(e.target);if(i!==null){var n=sn(i);if(n!==null){if(i=n.tag,i===13){if(i=hu(n),i!==null){e.blockedOn=i,u.unstable_runWithPriority(e.priority,function(){Tu(n)});return}}else if(i===3&&n.stateNode.hydrate){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Xt(e){if(e.blockedOn!==null)return!1;var i=Nr(e.topLevelType,e.eventSystemFlags,e.container,e.nativeEvent);if(i!==null){var n=yt(i);return n!==null&&Pr(n),e.blockedOn=i,!1}return!0}function Au(e,i,n){Xt(e)&&n.delete(i)}function Qm(){for(Sr=!1;0<yi.length;){var e=yi[0];if(e.blockedOn!==null){e=yt(e.blockedOn),e!==null&&Du(e);break}var i=Nr(e.topLevelType,e.eventSystemFlags,e.container,e.nativeEvent);i!==null?e.blockedOn=i:yi.shift()}Mi!==null&&Xt(Mi)&&(Mi=null),Ii!==null&&Xt(Ii)&&(Ii=null),_i!==null&&Xt(_i)&&(_i=null),ot.forEach(Au),st.forEach(Au)}function ct(e,i){e.blockedOn===i&&(e.blockedOn=null,Sr||(Sr=!0,u.unstable_scheduleCallback(u.unstable_NormalPriority,Qm)))}function Pu(e){function i(s){return ct(s,e)}if(0<yi.length){ct(yi[0],e);for(var n=1;n<yi.length;n++){var o=yi[n];o.blockedOn===e&&(o.blockedOn=null)}}for(Mi!==null&&ct(Mi,e),Ii!==null&&ct(Ii,e),_i!==null&&ct(_i,e),ot.forEach(i),st.forEach(i),n=0;n<ut.length;n++)o=ut[n],o.blockedOn===e&&(o.blockedOn=null);for(;0<ut.length&&(n=ut[0],n.blockedOn===null);)Ym(n),n.blockedOn===null&&ut.shift()}var Su={},Gu=new Map,Br=new Map,Xm=["abort","abort",fu,"animationEnd",zu,"animationIteration",yu,"animationStart","canplay","canPlay","canplaythrough","canPlayThrough","durationchange","durationChange","emptied","emptied","encrypted","encrypted","ended","ended","error","error","gotpointercapture","gotPointerCapture","load","load","loadeddata","loadedData","loadedmetadata","loadedMetadata","loadstart","loadStart","lostpointercapture","lostPointerCapture","playing","playing","progress","progress","seeking","seeking","stalled","stalled","suspend","suspend","timeupdate","timeUpdate",wu,"transitionEnd","waiting","waiting"];function Or(e,i){for(var n=0;n<e.length;n+=2){var o=e[n],s=e[n+1],d="on"+(s[0].toUpperCase()+s.slice(1));d={phasedRegistrationNames:{bubbled:d,captured:d+"Capture"},dependencies:[o],eventPriority:i},Br.set(o,i),Gu.set(o,d),Su[s]=d}}Or("blur blur cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focus focus input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "),0),Or("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "),1),Or(Xm,2);for(var xu="change selectionchange textInput compositionstart compositionend compositionupdate".split(" "),Rr=0;Rr<xu.length;Rr++)Br.set(xu[Rr],0);var qm=u.unstable_UserBlockingPriority,ef=u.unstable_runWithPriority,qt=!0;function Ce(e,i){dt(i,e,!1)}function dt(e,i,n){var o=Br.get(i);switch(o===void 0?2:o){case 0:o=nf.bind(null,i,1,e);break;case 1:o=tf.bind(null,i,1,e);break;default:o=ea.bind(null,i,1,e)}n?e.addEventListener(i,o,!0):e.addEventListener(i,o,!1)}function nf(e,i,n,o){Oe||ce();var s=ea,d=Oe;Oe=!0;try{Ae(s,e,i,n,o)}finally{(Oe=d)||_e()}}function tf(e,i,n,o){ef(qm,ea.bind(null,e,i,n,o))}function ea(e,i,n,o){if(qt)if(0<yi.length&&-1<Gr.indexOf(e))e=xr(null,e,i,n,o),yi.push(e);else{var s=Nr(e,i,n,o);if(s===null)Eu(e,o);else if(-1<Gr.indexOf(e))e=xr(s,e,i,n,o),yi.push(e);else if(!Vm(s,e,i,n,o)){Eu(e,o),e=vu(e,o,null,i);try{ge(Cu,e)}finally{bu(e)}}}}function Nr(e,i,n,o){if(n=Er(o),n=zt(n),n!==null){var s=sn(n);if(s===null)n=null;else{var d=s.tag;if(d===13){if(n=hu(s),n!==null)return n;n=null}else if(d===3){if(s.stateNode.hydrate)return s.tag===3?s.stateNode.containerInfo:null;n=null}else s!==n&&(n=null)}}e=vu(e,o,n,i);try{ge(Cu,e)}finally{bu(e)}return null}var mt={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},af=["Webkit","ms","Moz","O"];Object.keys(mt).forEach(function(e){af.forEach(function(i){i=i+e.charAt(0).toUpperCase()+e.substring(1),mt[i]=mt[e]})});function Bu(e,i,n){return i==null||typeof i=="boolean"||i===""?"":n||typeof i!="number"||i===0||mt.hasOwnProperty(e)&&mt[e]?(""+i).trim():i+"px"}function Ou(e,i){e=e.style;for(var n in i)if(i.hasOwnProperty(n)){var o=n.indexOf("--")===0,s=Bu(n,i[n],o);n==="float"&&(n="cssFloat"),o?e.setProperty(n,s):e[n]=s}}var rf=r({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Fr(e,i){if(i){if(rf[e]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(a(137,e,""));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(a(60));if(!(typeof i.dangerouslySetInnerHTML=="object"&&"__html"in i.dangerouslySetInnerHTML))throw Error(a(61))}if(i.style!=null&&typeof i.style!="object")throw Error(a(62,""))}}function Mr(e,i){if(e.indexOf("-")===-1)return typeof i.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ru=lu.html;function Di(e,i){e=e.nodeType===9||e.nodeType===11?e:e.ownerDocument;var n=Dr(e);i=ee[i];for(var o=0;o<i.length;o++)Ar(i[o],e,n)}function ia(){}function Ir(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Nu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Fu(e,i){var n=Nu(e);e=0;for(var o;n;){if(n.nodeType===3){if(o=e+n.textContent.length,e<=i&&o>=i)return{node:n,offset:i-e};e=o}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Nu(n)}}function Mu(e,i){return e&&i?e===i?!0:e&&e.nodeType===3?!1:i&&i.nodeType===3?Mu(e,i.parentNode):"contains"in e?e.contains(i):e.compareDocumentPosition?!!(e.compareDocumentPosition(i)&16):!1:!1}function Iu(){for(var e=window,i=Ir();i instanceof e.HTMLIFrameElement;){try{var n=typeof i.contentWindow.location.href=="string"}catch{n=!1}if(n)e=i.contentWindow;else break;i=Ir(e.document)}return i}function _r(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i&&(i==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||i==="textarea"||e.contentEditable==="true")}var _u="$",Ju="/$",Jr="$?",Wr="$!",Hr=null,Lr=null;function Wu(e,i){switch(e){case"button":case"input":case"select":case"textarea":return!!i.autoFocus}return!1}function Kr(e,i){return e==="textarea"||e==="option"||e==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Ur=typeof setTimeout=="function"?setTimeout:void 0,of=typeof clearTimeout=="function"?clearTimeout:void 0;function On(e){for(;e!=null;e=e.nextSibling){var i=e.nodeType;if(i===1||i===3)break}return e}function Hu(e){e=e.previousSibling;for(var i=0;e;){if(e.nodeType===8){var n=e.data;if(n===_u||n===Wr||n===Jr){if(i===0)return e;i--}else n===Ju&&i++}e=e.previousSibling}return null}var Zr=Math.random().toString(36).slice(2),Ji="__reactInternalInstance$"+Zr,na="__reactEventHandlers$"+Zr,ft="__reactContainere$"+Zr;function zt(e){var i=e[Ji];if(i)return i;for(var n=e.parentNode;n;){if(i=n[ft]||n[Ji]){if(n=i.alternate,i.child!==null||n!==null&&n.child!==null)for(e=Hu(e);e!==null;){if(n=e[Ji])return n;e=Hu(e)}return i}e=n,n=e.parentNode}return null}function yt(e){return e=e[Ji]||e[ft],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function un(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(a(33))}function $r(e){return e[na]||null}function Ti(e){do e=e.return;while(e&&e.tag!==5);return e||null}function Lu(e,i){var n=e.stateNode;if(!n)return null;var o=E(n);if(!o)return null;n=o[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(a(231,i,typeof n));return n}function Ku(e,i,n){(i=Lu(e,n.dispatchConfig.phasedRegistrationNames[i]))&&(n._dispatchListeners=Bn(n._dispatchListeners,i),n._dispatchInstances=Bn(n._dispatchInstances,e))}function sf(e){if(e&&e.dispatchConfig.phasedRegistrationNames){for(var i=e._targetInst,n=[];i;)n.push(i),i=Ti(i);for(i=n.length;0<i--;)Ku(n[i],"captured",e);for(i=0;i<n.length;i++)Ku(n[i],"bubbled",e)}}function Vr(e,i,n){e&&n&&n.dispatchConfig.registrationName&&(i=Lu(e,n.dispatchConfig.registrationName))&&(n._dispatchListeners=Bn(n._dispatchListeners,i),n._dispatchInstances=Bn(n._dispatchInstances,e))}function uf(e){e&&e.dispatchConfig.registrationName&&Vr(e._targetInst,null,e)}function Rn(e){Tr(e,sf)}var Wi=null,Yr=null,ta=null;function Uu(){if(ta)return ta;var e,i=Yr,n=i.length,o,s="value"in Wi?Wi.value:Wi.textContent,d=s.length;for(e=0;e<n&&i[e]===s[e];e++);var m=n-e;for(o=1;o<=m&&i[n-o]===s[d-o];o++);return ta=s.slice(e,1<o?1-o:void 0)}function aa(){return!0}function ra(){return!1}function Qe(e,i,n,o){this.dispatchConfig=e,this._targetInst=i,this.nativeEvent=n,e=this.constructor.Interface;for(var s in e)e.hasOwnProperty(s)&&((i=e[s])?this[s]=i(n):s==="target"?this.target=o:this[s]=n[s]);return this.isDefaultPrevented=(n.defaultPrevented!=null?n.defaultPrevented:n.returnValue===!1)?aa:ra,this.isPropagationStopped=ra,this}r(Qe.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!="unknown"&&(e.returnValue=!1),this.isDefaultPrevented=aa)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!="unknown"&&(e.cancelBubble=!0),this.isPropagationStopped=aa)},persist:function(){this.isPersistent=aa},isPersistent:ra,destructor:function(){var e=this.constructor.Interface,i;for(i in e)this[i]=null;this.nativeEvent=this._targetInst=this.dispatchConfig=null,this.isPropagationStopped=this.isDefaultPrevented=ra,this._dispatchInstances=this._dispatchListeners=null}}),Qe.Interface={type:null,target:null,currentTarget:function(){return null},eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null},Qe.extend=function(e){function i(){}function n(){return o.apply(this,arguments)}var o=this;i.prototype=o.prototype;var s=new i;return r(s,n.prototype),n.prototype=s,n.prototype.constructor=n,n.Interface=r({},o.Interface,e),n.extend=o.extend,Zu(n),n},Zu(Qe);function lf(e,i,n,o){if(this.eventPool.length){var s=this.eventPool.pop();return this.call(s,e,i,n,o),s}return new this(e,i,n,o)}function cf(e){if(!(e instanceof this))throw Error(a(279));e.destructor(),10>this.eventPool.length&&this.eventPool.push(e)}function Zu(e){e.eventPool=[],e.getPooled=lf,e.release=cf}var df=Qe.extend({data:null}),mf=Qe.extend({data:null}),ff=[9,13,27,32],Qr=pe&&"CompositionEvent"in window,wt=null;pe&&"documentMode"in document&&(wt=document.documentMode);var zf=pe&&"TextEvent"in window&&!wt,$u=pe&&(!Qr||wt&&8<wt&&11>=wt),Vu=" ",Ei={beforeInput:{phasedRegistrationNames:{bubbled:"onBeforeInput",captured:"onBeforeInputCapture"},dependencies:["compositionend","keypress","textInput","paste"]},compositionEnd:{phasedRegistrationNames:{bubbled:"onCompositionEnd",captured:"onCompositionEndCapture"},dependencies:"blur compositionend keydown keypress keyup mousedown".split(" ")},compositionStart:{phasedRegistrationNames:{bubbled:"onCompositionStart",captured:"onCompositionStartCapture"},dependencies:"blur compositionstart keydown keypress keyup mousedown".split(" ")},compositionUpdate:{phasedRegistrationNames:{bubbled:"onCompositionUpdate",captured:"onCompositionUpdateCapture"},dependencies:"blur compositionupdate keydown keypress keyup mousedown".split(" ")}},Yu=!1;function Qu(e,i){switch(e){case"keyup":return ff.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"blur":return!0;default:return!1}}function Xu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Nn=!1;function yf(e,i){switch(e){case"compositionend":return Xu(i);case"keypress":return i.which!==32?null:(Yu=!0,Vu);case"textInput":return e=i.data,e===Vu&&Yu?null:e;default:return null}}function wf(e,i){if(Nn)return e==="compositionend"||!Qr&&Qu(e,i)?(e=Uu(),ta=Yr=Wi=null,Nn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return $u&&i.locale!=="ko"?null:i.data;default:return null}}var pf={eventTypes:Ei,extractEvents:function(e,i,n,o){var s;if(Qr)e:{switch(e){case"compositionstart":var d=Ei.compositionStart;break e;case"compositionend":d=Ei.compositionEnd;break e;case"compositionupdate":d=Ei.compositionUpdate;break e}d=void 0}else Nn?Qu(e,n)&&(d=Ei.compositionEnd):e==="keydown"&&n.keyCode===229&&(d=Ei.compositionStart);return d?($u&&n.locale!=="ko"&&(Nn||d!==Ei.compositionStart?d===Ei.compositionEnd&&Nn&&(s=Uu()):(Wi=o,Yr="value"in Wi?Wi.value:Wi.textContent,Nn=!0)),d=df.getPooled(d,i,n,o),s?d.data=s:(s=Xu(n),s!==null&&(d.data=s)),Rn(d),s=d):s=null,(e=zf?yf(e,n):wf(e,n))?(i=mf.getPooled(Ei.beforeInput,i,n,o),i.data=e,Rn(i)):i=null,s===null?i:i===null?s:[s,i]}},hf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function qu(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i==="input"?!!hf[e.type]:i==="textarea"}var el={change:{phasedRegistrationNames:{bubbled:"onChange",captured:"onChangeCapture"},dependencies:"blur change click focus input keydown keyup selectionchange".split(" ")}};function il(e,i,n){return e=Qe.getPooled(el.change,e,i,n),e.type="change",ze(n),Rn(e),e}var pt=null,ht=null;function gf(e){Yt(e)}function oa(e){var i=un(e);if(nu(i))return e}function jf(e,i){if(e==="change")return i}var Xr=!1;pe&&(Xr=ku("input")&&(!document.documentMode||9<document.documentMode));function nl(){pt&&(pt.detachEvent("onpropertychange",tl),ht=pt=null)}function tl(e){if(e.propertyName==="value"&&oa(ht))if(e=il(ht,e,Er(e)),Oe)Yt(e);else{Oe=!0;try{Ee(gf,e)}finally{Oe=!1,_e()}}}function kf(e,i,n){e==="focus"?(nl(),pt=i,ht=n,pt.attachEvent("onpropertychange",tl)):e==="blur"&&nl()}function bf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return oa(ht)}function vf(e,i){if(e==="click")return oa(i)}function Cf(e,i){if(e==="input"||e==="change")return oa(i)}var Df={eventTypes:el,_isInputEventSupported:Xr,extractEvents:function(e,i,n,o){var s=i?un(i):window,d=s.nodeName&&s.nodeName.toLowerCase();if(d==="select"||d==="input"&&s.type==="file")var m=jf;else if(qu(s))if(Xr)m=Cf;else{m=bf;var y=kf}else(d=s.nodeName)&&d.toLowerCase()==="input"&&(s.type==="checkbox"||s.type==="radio")&&(m=vf);if(m&&(m=m(e,i)))return il(m,n,o);y&&y(e,s,i),e==="blur"&&(e=s._wrapperState)&&e.controlled&&s.type==="number"&&jr(s,"number",s.value)}},gt=Qe.extend({view:null,detail:null}),Tf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ef(e){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(e):(e=Tf[e])?!!i[e]:!1}function qr(){return Ef}var al=0,rl=0,ol=!1,sl=!1,jt=gt.extend({screenX:null,screenY:null,clientX:null,clientY:null,pageX:null,pageY:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,getModifierState:qr,button:null,buttons:null,relatedTarget:function(e){return e.relatedTarget||(e.fromElement===e.srcElement?e.toElement:e.fromElement)},movementX:function(e){if("movementX"in e)return e.movementX;var i=al;return al=e.screenX,ol?e.type==="mousemove"?e.screenX-i:0:(ol=!0,0)},movementY:function(e){if("movementY"in e)return e.movementY;var i=rl;return rl=e.screenY,sl?e.type==="mousemove"?e.screenY-i:0:(sl=!0,0)}}),ul=jt.extend({pointerId:null,width:null,height:null,pressure:null,tangentialPressure:null,tiltX:null,tiltY:null,twist:null,pointerType:null,isPrimary:null}),kt={mouseEnter:{registrationName:"onMouseEnter",dependencies:["mouseout","mouseover"]},mouseLeave:{registrationName:"onMouseLeave",dependencies:["mouseout","mouseover"]},pointerEnter:{registrationName:"onPointerEnter",dependencies:["pointerout","pointerover"]},pointerLeave:{registrationName:"onPointerLeave",dependencies:["pointerout","pointerover"]}},Af={eventTypes:kt,extractEvents:function(e,i,n,o,s){var d=e==="mouseover"||e==="pointerover",m=e==="mouseout"||e==="pointerout";if(d&&(s&32)===0&&(n.relatedTarget||n.fromElement)||!m&&!d)return null;if(d=o.window===o?o:(d=o.ownerDocument)?d.defaultView||d.parentWindow:window,m){if(m=i,i=(i=n.relatedTarget||n.toElement)?zt(i):null,i!==null){var y=sn(i);(i!==y||i.tag!==5&&i.tag!==6)&&(i=null)}}else m=null;if(m===i)return null;if(e==="mouseout"||e==="mouseover")var b=jt,v=kt.mouseLeave,R=kt.mouseEnter,N="mouse";else(e==="pointerout"||e==="pointerover")&&(b=ul,v=kt.pointerLeave,R=kt.pointerEnter,N="pointer");if(e=m==null?d:un(m),d=i==null?d:un(i),v=b.getPooled(v,m,n,o),v.type=N+"leave",v.target=e,v.relatedTarget=d,n=b.getPooled(R,i,n,o),n.type=N+"enter",n.target=d,n.relatedTarget=e,o=m,N=i,o&&N)e:{for(b=o,R=N,m=0,e=b;e;e=Ti(e))m++;for(e=0,i=R;i;i=Ti(i))e++;for(;0<m-e;)b=Ti(b),m--;for(;0<e-m;)R=Ti(R),e--;for(;m--;){if(b===R||b===R.alternate)break e;b=Ti(b),R=Ti(R)}b=null}else b=null;for(R=b,b=[];o&&o!==R&&(m=o.alternate,!(m!==null&&m===R));)b.push(o),o=Ti(o);for(o=[];N&&N!==R&&(m=N.alternate,!(m!==null&&m===R));)o.push(N),N=Ti(N);for(N=0;N<b.length;N++)Vr(b[N],"bubbled",v);for(N=o.length;0<N--;)Vr(o[N],"captured",n);return(s&64)===0?[v]:[v,n]}};function Pf(e,i){return e===i&&(e!==0||1/e===1/i)||e!==e&&i!==i}var ln=typeof Object.is=="function"?Object.is:Pf,Sf=Object.prototype.hasOwnProperty;function bt(e,i){if(ln(e,i))return!0;if(typeof e!="object"||e===null||typeof i!="object"||i===null)return!1;var n=Object.keys(e),o=Object.keys(i);if(n.length!==o.length)return!1;for(o=0;o<n.length;o++)if(!Sf.call(i,n[o])||!ln(e[n[o]],i[n[o]]))return!1;return!0}var Gf=pe&&"documentMode"in document&&11>=document.documentMode,ll={select:{phasedRegistrationNames:{bubbled:"onSelect",captured:"onSelectCapture"},dependencies:"blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(" ")}},Fn=null,eo=null,vt=null,io=!1;function cl(e,i){var n=i.window===i?i.document:i.nodeType===9?i:i.ownerDocument;return io||Fn==null||Fn!==Ir(n)?null:(n=Fn,"selectionStart"in n&&_r(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),vt&&bt(vt,n)?null:(vt=n,e=Qe.getPooled(ll.select,eo,e,i),e.type="select",e.target=Fn,Rn(e),e))}var xf={eventTypes:ll,extractEvents:function(e,i,n,o,s,d){if(s=d||(o.window===o?o.document:o.nodeType===9?o:o.ownerDocument),!(d=!s)){e:{s=Dr(s),d=ee.onSelect;for(var m=0;m<d.length;m++)if(!s.has(d[m])){s=!1;break e}s=!0}d=!s}if(d)return null;switch(s=i?un(i):window,e){case"focus":(qu(s)||s.contentEditable==="true")&&(Fn=s,eo=i,vt=null);break;case"blur":vt=eo=Fn=null;break;case"mousedown":io=!0;break;case"contextmenu":case"mouseup":case"dragend":return io=!1,cl(n,o);case"selectionchange":if(Gf)break;case"keydown":case"keyup":return cl(n,o)}return null}},Bf=Qe.extend({animationName:null,elapsedTime:null,pseudoElement:null}),Of=Qe.extend({clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Rf=gt.extend({relatedTarget:null});function sa(e){var i=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&i===13&&(e=13)):e=i,e===10&&(e=13),32<=e||e===13?e:0}var Nf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ff={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Mf=gt.extend({key:function(e){if(e.key){var i=Nf[e.key]||e.key;if(i!=="Unidentified")return i}return e.type==="keypress"?(e=sa(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ff[e.keyCode]||"Unidentified":""},location:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,repeat:null,locale:null,getModifierState:qr,charCode:function(e){return e.type==="keypress"?sa(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?sa(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),If=jt.extend({dataTransfer:null}),_f=gt.extend({touches:null,targetTouches:null,changedTouches:null,altKey:null,metaKey:null,ctrlKey:null,shiftKey:null,getModifierState:qr}),Jf=Qe.extend({propertyName:null,elapsedTime:null,pseudoElement:null}),Wf=jt.extend({deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:null,deltaMode:null}),Hf={eventTypes:Su,extractEvents:function(e,i,n,o){var s=Gu.get(e);if(!s)return null;switch(e){case"keypress":if(sa(n)===0)return null;case"keydown":case"keyup":e=Mf;break;case"blur":case"focus":e=Rf;break;case"click":if(n.button===2)return null;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":e=jt;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":e=If;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":e=_f;break;case fu:case zu:case yu:e=Bf;break;case wu:e=Jf;break;case"scroll":e=gt;break;case"wheel":e=Wf;break;case"copy":case"cut":case"paste":e=Of;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":e=ul;break;default:e=Qe}return i=e.getPooled(s,i,n,o),Rn(i),i}};if($)throw Error(a(101));$=Array.prototype.slice.call("ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" ")),V();var Lf=yt;E=$r,M=Lf,_=un,se({SimpleEventPlugin:Hf,EnterLeaveEventPlugin:Af,ChangeEventPlugin:Df,SelectEventPlugin:xf,BeforeInputEventPlugin:pf});var no=[],Mn=-1;function ke(e){0>Mn||(e.current=no[Mn],no[Mn]=null,Mn--)}function Pe(e,i){Mn++,no[Mn]=e.current,e.current=i}var Hi={},We={current:Hi},Ze={current:!1},cn=Hi;function In(e,i){var n=e.type.contextTypes;if(!n)return Hi;var o=e.stateNode;if(o&&o.__reactInternalMemoizedUnmaskedChildContext===i)return o.__reactInternalMemoizedMaskedChildContext;var s={},d;for(d in n)s[d]=i[d];return o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),s}function $e(e){return e=e.childContextTypes,e!=null}function ua(){ke(Ze),ke(We)}function dl(e,i,n){if(We.current!==Hi)throw Error(a(168));Pe(We,i),Pe(Ze,n)}function ml(e,i,n){var o=e.stateNode;if(e=i.childContextTypes,typeof o.getChildContext!="function")return n;o=o.getChildContext();for(var s in o)if(!(s in e))throw Error(a(108,Ci(i)||"Unknown",s));return r({},n,{},o)}function la(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Hi,cn=We.current,Pe(We,e),Pe(Ze,Ze.current),!0}function fl(e,i,n){var o=e.stateNode;if(!o)throw Error(a(169));n?(e=ml(e,i,cn),o.__reactInternalMemoizedMergedChildContext=e,ke(Ze),ke(We),Pe(We,e)):ke(Ze),Pe(Ze,n)}var Kf=u.unstable_runWithPriority,to=u.unstable_scheduleCallback,zl=u.unstable_cancelCallback,yl=u.unstable_requestPaint,ao=u.unstable_now,Uf=u.unstable_getCurrentPriorityLevel,ca=u.unstable_ImmediatePriority,wl=u.unstable_UserBlockingPriority,pl=u.unstable_NormalPriority,hl=u.unstable_LowPriority,gl=u.unstable_IdlePriority,jl={},Zf=u.unstable_shouldYield,$f=yl!==void 0?yl:function(){},Ai=null,da=null,ro=!1,kl=ao(),ri=1e4>kl?ao:function(){return ao()-kl};function ma(){switch(Uf()){case ca:return 99;case wl:return 98;case pl:return 97;case hl:return 96;case gl:return 95;default:throw Error(a(332))}}function bl(e){switch(e){case 99:return ca;case 98:return wl;case 97:return pl;case 96:return hl;case 95:return gl;default:throw Error(a(332))}}function Li(e,i){return e=bl(e),Kf(e,i)}function vl(e,i,n){return e=bl(e),to(e,i,n)}function Cl(e){return Ai===null?(Ai=[e],da=to(ca,Dl)):Ai.push(e),jl}function wi(){if(da!==null){var e=da;da=null,zl(e)}Dl()}function Dl(){if(!ro&&Ai!==null){ro=!0;var e=0;try{var i=Ai;Li(99,function(){for(;e<i.length;e++){var n=i[e];do n=n(!0);while(n!==null)}}),Ai=null}catch(n){throw Ai!==null&&(Ai=Ai.slice(e+1)),to(ca,wi),n}finally{ro=!1}}}function fa(e,i,n){return n/=10,1073741821-(((1073741821-e+i/10)/n|0)+1)*n}function ci(e,i){if(e&&e.defaultProps){i=r({},i),e=e.defaultProps;for(var n in e)i[n]===void 0&&(i[n]=e[n])}return i}var za={current:null},ya=null,_n=null,wa=null;function oo(){wa=_n=ya=null}function so(e){var i=za.current;ke(za),e.type._context._currentValue=i}function Tl(e,i){for(;e!==null;){var n=e.alternate;if(e.childExpirationTime<i)e.childExpirationTime=i,n!==null&&n.childExpirationTime<i&&(n.childExpirationTime=i);else if(n!==null&&n.childExpirationTime<i)n.childExpirationTime=i;else break;e=e.return}}function Jn(e,i){ya=e,wa=_n=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.expirationTime>=i&&(hi=!0),e.firstContext=null)}function oi(e,i){if(wa!==e&&i!==!1&&i!==0)if((typeof i!="number"||i===1073741823)&&(wa=e,i=1073741823),i={context:e,observedBits:i,next:null},_n===null){if(ya===null)throw Error(a(308));_n=i,ya.dependencies={expirationTime:0,firstContext:i,responders:null}}else _n=_n.next=i;return e._currentValue}var Ki=!1;function uo(e){e.updateQueue={baseState:e.memoizedState,baseQueue:null,shared:{pending:null},effects:null}}function lo(e,i){e=e.updateQueue,i.updateQueue===e&&(i.updateQueue={baseState:e.baseState,baseQueue:e.baseQueue,shared:e.shared,effects:e.effects})}function Ui(e,i){return e={expirationTime:e,suspenseConfig:i,tag:0,payload:null,callback:null,next:null},e.next=e}function Zi(e,i){if(e=e.updateQueue,e!==null){e=e.shared;var n=e.pending;n===null?i.next=i:(i.next=n.next,n.next=i),e.pending=i}}function El(e,i){var n=e.alternate;n!==null&&lo(n,e),e=e.updateQueue,n=e.baseQueue,n===null?(e.baseQueue=i.next=i,i.next=i):(i.next=n.next,n.next=i)}function Ct(e,i,n,o){var s=e.updateQueue;Ki=!1;var d=s.baseQueue,m=s.shared.pending;if(m!==null){if(d!==null){var y=d.next;d.next=m.next,m.next=y}d=m,s.shared.pending=null,y=e.alternate,y!==null&&(y=y.updateQueue,y!==null&&(y.baseQueue=m))}if(d!==null){y=d.next;var b=s.baseState,v=0,R=null,N=null,oe=null;if(y!==null){var de=y;do{if(m=de.expirationTime,m<o){var ui={expirationTime:de.expirationTime,suspenseConfig:de.suspenseConfig,tag:de.tag,payload:de.payload,callback:de.callback,next:null};oe===null?(N=oe=ui,R=b):oe=oe.next=ui,m>v&&(v=m)}else{oe!==null&&(oe=oe.next={expirationTime:1073741823,suspenseConfig:de.suspenseConfig,tag:de.tag,payload:de.payload,callback:de.callback,next:null}),vc(m,de.suspenseConfig);e:{var Ie=e,j=de;switch(m=i,ui=n,j.tag){case 1:if(Ie=j.payload,typeof Ie=="function"){b=Ie.call(ui,b,m);break e}b=Ie;break e;case 3:Ie.effectTag=Ie.effectTag&-4097|64;case 0:if(Ie=j.payload,m=typeof Ie=="function"?Ie.call(ui,b,m):Ie,m==null)break e;b=r({},b,m);break e;case 2:Ki=!0}}de.callback!==null&&(e.effectTag|=32,m=s.effects,m===null?s.effects=[de]:m.push(de))}if(de=de.next,de===null||de===y){if(m=s.shared.pending,m===null)break;de=d.next=m.next,m.next=y,s.baseQueue=d=m,s.shared.pending=null}}while(!0)}oe===null?R=b:oe.next=N,s.baseState=R,s.baseQueue=oe,Ha(v),e.expirationTime=v,e.memoizedState=b}}function Al(e,i,n){if(e=i.effects,i.effects=null,e!==null)for(i=0;i<e.length;i++){var o=e[i],s=o.callback;if(s!==null){if(o.callback=null,o=s,s=n,typeof o!="function")throw Error(a(191,o));o.call(s)}}}var Dt=re.ReactCurrentBatchConfig,Pl=new t.Component().refs;function pa(e,i,n,o){i=e.memoizedState,n=n(o,i),n=n==null?i:r({},i,n),e.memoizedState=n,e.expirationTime===0&&(e.updateQueue.baseState=n)}var ha={isMounted:function(e){return(e=e._reactInternalFiber)?sn(e)===e:!1},enqueueSetState:function(e,i,n){e=e._reactInternalFiber;var o=ji(),s=Dt.suspense;o=wn(o,e,s),s=Ui(o,s),s.payload=i,n!=null&&(s.callback=n),Zi(e,s),Qi(e,o)},enqueueReplaceState:function(e,i,n){e=e._reactInternalFiber;var o=ji(),s=Dt.suspense;o=wn(o,e,s),s=Ui(o,s),s.tag=1,s.payload=i,n!=null&&(s.callback=n),Zi(e,s),Qi(e,o)},enqueueForceUpdate:function(e,i){e=e._reactInternalFiber;var n=ji(),o=Dt.suspense;n=wn(n,e,o),o=Ui(n,o),o.tag=2,i!=null&&(o.callback=i),Zi(e,o),Qi(e,n)}};function Sl(e,i,n,o,s,d,m){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,d,m):i.prototype&&i.prototype.isPureReactComponent?!bt(n,o)||!bt(s,d):!0}function Gl(e,i,n){var o=!1,s=Hi,d=i.contextType;return typeof d=="object"&&d!==null?d=oi(d):(s=$e(i)?cn:We.current,o=i.contextTypes,d=(o=o!=null)?In(e,s):Hi),i=new i(n,d),e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=ha,e.stateNode=i,i._reactInternalFiber=e,o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=s,e.__reactInternalMemoizedMaskedChildContext=d),i}function xl(e,i,n,o){e=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(n,o),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(n,o),i.state!==e&&ha.enqueueReplaceState(i,i.state,null)}function co(e,i,n,o){var s=e.stateNode;s.props=n,s.state=e.memoizedState,s.refs=Pl,uo(e);var d=i.contextType;typeof d=="object"&&d!==null?s.context=oi(d):(d=$e(i)?cn:We.current,s.context=In(e,d)),Ct(e,n,s,o),s.state=e.memoizedState,d=i.getDerivedStateFromProps,typeof d=="function"&&(pa(e,i,d,n),s.state=e.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(i=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),i!==s.state&&ha.enqueueReplaceState(s,s.state,null),Ct(e,n,s,o),s.state=e.memoizedState),typeof s.componentDidMount=="function"&&(e.effectTag|=4)}var ga=Array.isArray;function Tt(e,i,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(a(309));var o=n.stateNode}if(!o)throw Error(a(147,e));var s=""+e;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===s?i.ref:(i=function(d){var m=o.refs;m===Pl&&(m=o.refs={}),d===null?delete m[s]:m[s]=d},i._stringRef=s,i)}if(typeof e!="string")throw Error(a(284));if(!n._owner)throw Error(a(290,e))}return e}function ja(e,i){if(e.type!=="textarea")throw Error(a(31,Object.prototype.toString.call(i)==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":i,""))}function Bl(e){function i(j,h){if(e){var D=j.lastEffect;D!==null?(D.nextEffect=h,j.lastEffect=h):j.firstEffect=j.lastEffect=h,h.nextEffect=null,h.effectTag=8}}function n(j,h){if(!e)return null;for(;h!==null;)i(j,h),h=h.sibling;return null}function o(j,h){for(j=new Map;h!==null;)h.key!==null?j.set(h.key,h):j.set(h.index,h),h=h.sibling;return j}function s(j,h){return j=jn(j,h),j.index=0,j.sibling=null,j}function d(j,h,D){return j.index=D,e?(D=j.alternate,D!==null?(D=D.index,D<h?(j.effectTag=2,h):D):(j.effectTag=2,h)):h}function m(j){return e&&j.alternate===null&&(j.effectTag=2),j}function y(j,h,D,G){return h===null||h.tag!==6?(h=Uo(D,j.mode,G),h.return=j,h):(h=s(h,D),h.return=j,h)}function b(j,h,D,G){return h!==null&&h.elementType===D.type?(G=s(h,D.props),G.ref=Tt(j,h,D),G.return=j,G):(G=La(D.type,D.key,D.props,null,j.mode,G),G.ref=Tt(j,h,D),G.return=j,G)}function v(j,h,D,G){return h===null||h.tag!==4||h.stateNode.containerInfo!==D.containerInfo||h.stateNode.implementation!==D.implementation?(h=Zo(D,j.mode,G),h.return=j,h):(h=s(h,D.children||[]),h.return=j,h)}function R(j,h,D,G,B){return h===null||h.tag!==7?(h=Xi(D,j.mode,G,B),h.return=j,h):(h=s(h,D),h.return=j,h)}function N(j,h,D){if(typeof h=="string"||typeof h=="number")return h=Uo(""+h,j.mode,D),h.return=j,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Pn:return D=La(h.type,h.key,h.props,null,j.mode,D),D.ref=Tt(j,null,h),D.return=j,D;case Ni:return h=Zo(h,j.mode,D),h.return=j,h}if(ga(h)||nt(h))return h=Xi(h,j.mode,D,null),h.return=j,h;ja(j,h)}return null}function oe(j,h,D,G){var B=h!==null?h.key:null;if(typeof D=="string"||typeof D=="number")return B!==null?null:y(j,h,""+D,G);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case Pn:return D.key===B?D.type===vi?R(j,h,D.props.children,G,B):b(j,h,D,G):null;case Ni:return D.key===B?v(j,h,D,G):null}if(ga(D)||nt(D))return B!==null?null:R(j,h,D,G,null);ja(j,D)}return null}function de(j,h,D,G,B){if(typeof G=="string"||typeof G=="number")return j=j.get(D)||null,y(h,j,""+G,B);if(typeof G=="object"&&G!==null){switch(G.$$typeof){case Pn:return j=j.get(G.key===null?D:G.key)||null,G.type===vi?R(h,j,G.props.children,B,G.key):b(h,j,G,B);case Ni:return j=j.get(G.key===null?D:G.key)||null,v(h,j,G,B)}if(ga(G)||nt(G))return j=j.get(D)||null,R(h,j,G,B,null);ja(h,G)}return null}function ui(j,h,D,G){for(var B=null,F=null,L=h,ue=h=0,De=null;L!==null&&ue<D.length;ue++){L.index>ue?(De=L,L=null):De=L.sibling;var ne=oe(j,L,D[ue],G);if(ne===null){L===null&&(L=De);break}e&&L&&ne.alternate===null&&i(j,L),h=d(ne,h,ue),F===null?B=ne:F.sibling=ne,F=ne,L=De}if(ue===D.length)return n(j,L),B;if(L===null){for(;ue<D.length;ue++)L=N(j,D[ue],G),L!==null&&(h=d(L,h,ue),F===null?B=L:F.sibling=L,F=L);return B}for(L=o(j,L);ue<D.length;ue++)De=de(L,j,ue,D[ue],G),De!==null&&(e&&De.alternate!==null&&L.delete(De.key===null?ue:De.key),h=d(De,h,ue),F===null?B=De:F.sibling=De,F=De);return e&&L.forEach(function(qi){return i(j,qi)}),B}function Ie(j,h,D,G){var B=nt(D);if(typeof B!="function")throw Error(a(150));if(D=B.call(D),D==null)throw Error(a(151));for(var F=B=null,L=h,ue=h=0,De=null,ne=D.next();L!==null&&!ne.done;ue++,ne=D.next()){L.index>ue?(De=L,L=null):De=L.sibling;var qi=oe(j,L,ne.value,G);if(qi===null){L===null&&(L=De);break}e&&L&&qi.alternate===null&&i(j,L),h=d(qi,h,ue),F===null?B=qi:F.sibling=qi,F=qi,L=De}if(ne.done)return n(j,L),B;if(L===null){for(;!ne.done;ue++,ne=D.next())ne=N(j,ne.value,G),ne!==null&&(h=d(ne,h,ue),F===null?B=ne:F.sibling=ne,F=ne);return B}for(L=o(j,L);!ne.done;ue++,ne=D.next())ne=de(L,j,ue,ne.value,G),ne!==null&&(e&&ne.alternate!==null&&L.delete(ne.key===null?ue:ne.key),h=d(ne,h,ue),F===null?B=ne:F.sibling=ne,F=ne);return e&&L.forEach(function(bz){return i(j,bz)}),B}return function(j,h,D,G){var B=typeof D=="object"&&D!==null&&D.type===vi&&D.key===null;B&&(D=D.props.children);var F=typeof D=="object"&&D!==null;if(F)switch(D.$$typeof){case Pn:e:{for(F=D.key,B=h;B!==null;){if(B.key===F){switch(B.tag){case 7:if(D.type===vi){n(j,B.sibling),h=s(B,D.props.children),h.return=j,j=h;break e}break;default:if(B.elementType===D.type){n(j,B.sibling),h=s(B,D.props),h.ref=Tt(j,B,D),h.return=j,j=h;break e}}n(j,B);break}else i(j,B);B=B.sibling}D.type===vi?(h=Xi(D.props.children,j.mode,G,D.key),h.return=j,j=h):(G=La(D.type,D.key,D.props,null,j.mode,G),G.ref=Tt(j,h,D),G.return=j,j=G)}return m(j);case Ni:e:{for(B=D.key;h!==null;){if(h.key===B)if(h.tag===4&&h.stateNode.containerInfo===D.containerInfo&&h.stateNode.implementation===D.implementation){n(j,h.sibling),h=s(h,D.children||[]),h.return=j,j=h;break e}else{n(j,h);break}else i(j,h);h=h.sibling}h=Zo(D,j.mode,G),h.return=j,j=h}return m(j)}if(typeof D=="string"||typeof D=="number")return D=""+D,h!==null&&h.tag===6?(n(j,h.sibling),h=s(h,D),h.return=j,j=h):(n(j,h),h=Uo(D,j.mode,G),h.return=j,j=h),m(j);if(ga(D))return ui(j,h,D,G);if(nt(D))return Ie(j,h,D,G);if(F&&ja(j,D),typeof D>"u"&&!B)switch(j.tag){case 1:case 0:throw j=j.type,Error(a(152,j.displayName||j.name||"Component"))}return n(j,h)}}var Wn=Bl(!0),mo=Bl(!1),Et={},pi={current:Et},At={current:Et},Pt={current:Et};function dn(e){if(e===Et)throw Error(a(174));return e}function fo(e,i){switch(Pe(Pt,i),Pe(At,e),Pe(pi,Et),e=i.nodeType,e){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:vr(null,"");break;default:e=e===8?i.parentNode:i,i=e.namespaceURI||null,e=e.tagName,i=vr(i,e)}ke(pi),Pe(pi,i)}function Hn(){ke(pi),ke(At),ke(Pt)}function Ol(e){dn(Pt.current);var i=dn(pi.current),n=vr(i,e.type);i!==n&&(Pe(At,e),Pe(pi,n))}function zo(e){At.current===e&&(ke(pi),ke(At))}var Te={current:0};function ka(e){for(var i=e;i!==null;){if(i.tag===13){var n=i.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data===Jr||n.data===Wr))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.effectTag&64)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}function yo(e,i){return{responder:e,props:i}}var ba=re.ReactCurrentDispatcher,si=re.ReactCurrentBatchConfig,$i=0,Be=null,He=null,Le=null,va=!1;function Xe(){throw Error(a(321))}function wo(e,i){if(i===null)return!1;for(var n=0;n<i.length&&n<e.length;n++)if(!ln(e[n],i[n]))return!1;return!0}function po(e,i,n,o,s,d){if($i=d,Be=i,i.memoizedState=null,i.updateQueue=null,i.expirationTime=0,ba.current=e===null||e.memoizedState===null?Vf:Yf,e=n(o,s),i.expirationTime===$i){d=0;do{if(i.expirationTime=0,!(25>d))throw Error(a(301));d+=1,Le=He=null,i.updateQueue=null,ba.current=Qf,e=n(o,s)}while(i.expirationTime===$i)}if(ba.current=Aa,i=He!==null&&He.next!==null,$i=0,Le=He=Be=null,va=!1,i)throw Error(a(300));return e}function Ln(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Le===null?Be.memoizedState=Le=e:Le=Le.next=e,Le}function Kn(){if(He===null){var e=Be.alternate;e=e!==null?e.memoizedState:null}else e=He.next;var i=Le===null?Be.memoizedState:Le.next;if(i!==null)Le=i,He=e;else{if(e===null)throw Error(a(310));He=e,e={memoizedState:He.memoizedState,baseState:He.baseState,baseQueue:He.baseQueue,queue:He.queue,next:null},Le===null?Be.memoizedState=Le=e:Le=Le.next=e}return Le}function mn(e,i){return typeof i=="function"?i(e):i}function Ca(e){var i=Kn(),n=i.queue;if(n===null)throw Error(a(311));n.lastRenderedReducer=e;var o=He,s=o.baseQueue,d=n.pending;if(d!==null){if(s!==null){var m=s.next;s.next=d.next,d.next=m}o.baseQueue=s=d,n.pending=null}if(s!==null){s=s.next,o=o.baseState;var y=m=d=null,b=s;do{var v=b.expirationTime;if(v<$i){var R={expirationTime:b.expirationTime,suspenseConfig:b.suspenseConfig,action:b.action,eagerReducer:b.eagerReducer,eagerState:b.eagerState,next:null};y===null?(m=y=R,d=o):y=y.next=R,v>Be.expirationTime&&(Be.expirationTime=v,Ha(v))}else y!==null&&(y=y.next={expirationTime:1073741823,suspenseConfig:b.suspenseConfig,action:b.action,eagerReducer:b.eagerReducer,eagerState:b.eagerState,next:null}),vc(v,b.suspenseConfig),o=b.eagerReducer===e?b.eagerState:e(o,b.action);b=b.next}while(b!==null&&b!==s);y===null?d=o:y.next=m,ln(o,i.memoizedState)||(hi=!0),i.memoizedState=o,i.baseState=d,i.baseQueue=y,n.lastRenderedState=o}return[i.memoizedState,n.dispatch]}function Da(e){var i=Kn(),n=i.queue;if(n===null)throw Error(a(311));n.lastRenderedReducer=e;var o=n.dispatch,s=n.pending,d=i.memoizedState;if(s!==null){n.pending=null;var m=s=s.next;do d=e(d,m.action),m=m.next;while(m!==s);ln(d,i.memoizedState)||(hi=!0),i.memoizedState=d,i.baseQueue===null&&(i.baseState=d),n.lastRenderedState=d}return[d,o]}function ho(e){var i=Ln();return typeof e=="function"&&(e=e()),i.memoizedState=i.baseState=e,e=i.queue={pending:null,dispatch:null,lastRenderedReducer:mn,lastRenderedState:e},e=e.dispatch=Wl.bind(null,Be,e),[i.memoizedState,e]}function go(e,i,n,o){return e={tag:e,create:i,destroy:n,deps:o,next:null},i=Be.updateQueue,i===null?(i={lastEffect:null},Be.updateQueue=i,i.lastEffect=e.next=e):(n=i.lastEffect,n===null?i.lastEffect=e.next=e:(o=n.next,n.next=e,e.next=o,i.lastEffect=e)),e}function Rl(){return Kn().memoizedState}function jo(e,i,n,o){var s=Ln();Be.effectTag|=e,s.memoizedState=go(1|i,n,void 0,o===void 0?null:o)}function ko(e,i,n,o){var s=Kn();o=o===void 0?null:o;var d=void 0;if(He!==null){var m=He.memoizedState;if(d=m.destroy,o!==null&&wo(o,m.deps)){go(i,n,d,o);return}}Be.effectTag|=e,s.memoizedState=go(1|i,n,d,o)}function Nl(e,i){return jo(516,4,e,i)}function Ta(e,i){return ko(516,4,e,i)}function Fl(e,i){return ko(4,2,e,i)}function Ml(e,i){if(typeof i=="function")return e=e(),i(e),function(){i(null)};if(i!=null)return e=e(),i.current=e,function(){i.current=null}}function Il(e,i,n){return n=n!=null?n.concat([e]):null,ko(4,2,Ml.bind(null,i,e),n)}function bo(){}function _l(e,i){return Ln().memoizedState=[e,i===void 0?null:i],e}function Ea(e,i){var n=Kn();i=i===void 0?null:i;var o=n.memoizedState;return o!==null&&i!==null&&wo(i,o[1])?o[0]:(n.memoizedState=[e,i],e)}function Jl(e,i){var n=Kn();i=i===void 0?null:i;var o=n.memoizedState;return o!==null&&i!==null&&wo(i,o[1])?o[0]:(e=e(),n.memoizedState=[e,i],e)}function vo(e,i,n){var o=ma();Li(98>o?98:o,function(){e(!0)}),Li(97<o?97:o,function(){var s=si.suspense;si.suspense=i===void 0?null:i;try{e(!1),n()}finally{si.suspense=s}})}function Wl(e,i,n){var o=ji(),s=Dt.suspense;o=wn(o,e,s),s={expirationTime:o,suspenseConfig:s,action:n,eagerReducer:null,eagerState:null,next:null};var d=i.pending;if(d===null?s.next=s:(s.next=d.next,d.next=s),i.pending=s,d=e.alternate,e===Be||d!==null&&d===Be)va=!0,s.expirationTime=$i,Be.expirationTime=$i;else{if(e.expirationTime===0&&(d===null||d.expirationTime===0)&&(d=i.lastRenderedReducer,d!==null))try{var m=i.lastRenderedState,y=d(m,n);if(s.eagerReducer=d,s.eagerState=y,ln(y,m))return}catch{}Qi(e,o)}}var Aa={readContext:oi,useCallback:Xe,useContext:Xe,useEffect:Xe,useImperativeHandle:Xe,useLayoutEffect:Xe,useMemo:Xe,useReducer:Xe,useRef:Xe,useState:Xe,useDebugValue:Xe,useResponder:Xe,useDeferredValue:Xe,useTransition:Xe},Vf={readContext:oi,useCallback:_l,useContext:oi,useEffect:Nl,useImperativeHandle:function(e,i,n){return n=n!=null?n.concat([e]):null,jo(4,2,Ml.bind(null,i,e),n)},useLayoutEffect:function(e,i){return jo(4,2,e,i)},useMemo:function(e,i){var n=Ln();return i=i===void 0?null:i,e=e(),n.memoizedState=[e,i],e},useReducer:function(e,i,n){var o=Ln();return i=n!==void 0?n(i):i,o.memoizedState=o.baseState=i,e=o.queue={pending:null,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},e=e.dispatch=Wl.bind(null,Be,e),[o.memoizedState,e]},useRef:function(e){var i=Ln();return e={current:e},i.memoizedState=e},useState:ho,useDebugValue:bo,useResponder:yo,useDeferredValue:function(e,i){var n=ho(e),o=n[0],s=n[1];return Nl(function(){var d=si.suspense;si.suspense=i===void 0?null:i;try{s(e)}finally{si.suspense=d}},[e,i]),o},useTransition:function(e){var i=ho(!1),n=i[0];return i=i[1],[_l(vo.bind(null,i,e),[i,e]),n]}},Yf={readContext:oi,useCallback:Ea,useContext:oi,useEffect:Ta,useImperativeHandle:Il,useLayoutEffect:Fl,useMemo:Jl,useReducer:Ca,useRef:Rl,useState:function(){return Ca(mn)},useDebugValue:bo,useResponder:yo,useDeferredValue:function(e,i){var n=Ca(mn),o=n[0],s=n[1];return Ta(function(){var d=si.suspense;si.suspense=i===void 0?null:i;try{s(e)}finally{si.suspense=d}},[e,i]),o},useTransition:function(e){var i=Ca(mn),n=i[0];return i=i[1],[Ea(vo.bind(null,i,e),[i,e]),n]}},Qf={readContext:oi,useCallback:Ea,useContext:oi,useEffect:Ta,useImperativeHandle:Il,useLayoutEffect:Fl,useMemo:Jl,useReducer:Da,useRef:Rl,useState:function(){return Da(mn)},useDebugValue:bo,useResponder:yo,useDeferredValue:function(e,i){var n=Da(mn),o=n[0],s=n[1];return Ta(function(){var d=si.suspense;si.suspense=i===void 0?null:i;try{s(e)}finally{si.suspense=d}},[e,i]),o},useTransition:function(e){var i=Da(mn),n=i[0];return i=i[1],[Ea(vo.bind(null,i,e),[i,e]),n]}},Pi=null,Vi=null,fn=!1;function Hl(e,i){var n=ki(5,null,null,0);n.elementType="DELETED",n.type="DELETED",n.stateNode=i,n.return=e,n.effectTag=8,e.lastEffect!==null?(e.lastEffect.nextEffect=n,e.lastEffect=n):e.firstEffect=e.lastEffect=n}function Ll(e,i){switch(e.tag){case 5:var n=e.type;return i=i.nodeType!==1||n.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(e.stateNode=i,!0):!1;case 6:return i=e.pendingProps===""||i.nodeType!==3?null:i,i!==null?(e.stateNode=i,!0):!1;case 13:return!1;default:return!1}}function Co(e){if(fn){var i=Vi;if(i){var n=i;if(!Ll(e,i)){if(i=On(n.nextSibling),!i||!Ll(e,i)){e.effectTag=e.effectTag&-1025|2,fn=!1,Pi=e;return}Hl(Pi,n)}Pi=e,Vi=On(i.firstChild)}else e.effectTag=e.effectTag&-1025|2,fn=!1,Pi=e}}function Kl(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Pi=e}function Pa(e){if(e!==Pi)return!1;if(!fn)return Kl(e),fn=!0,!1;var i=e.type;if(e.tag!==5||i!=="head"&&i!=="body"&&!Kr(i,e.memoizedProps))for(i=Vi;i;)Hl(e,i),i=On(i.nextSibling);if(Kl(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));e:{for(e=e.nextSibling,i=0;e;){if(e.nodeType===8){var n=e.data;if(n===Ju){if(i===0){Vi=On(e.nextSibling);break e}i--}else n!==_u&&n!==Wr&&n!==Jr||i++}e=e.nextSibling}Vi=null}}else Vi=Pi?On(e.stateNode.nextSibling):null;return!0}function Do(){Vi=Pi=null,fn=!1}var Xf=re.ReactCurrentOwner,hi=!1;function qe(e,i,n,o){i.child=e===null?mo(i,null,n,o):Wn(i,e.child,n,o)}function Ul(e,i,n,o,s){n=n.render;var d=i.ref;return Jn(i,s),o=po(e,i,n,o,d,s),e!==null&&!hi?(i.updateQueue=e.updateQueue,i.effectTag&=-517,e.expirationTime<=s&&(e.expirationTime=0),Si(e,i,s)):(i.effectTag|=1,qe(e,i,o,s),i.child)}function Zl(e,i,n,o,s,d){if(e===null){var m=n.type;return typeof m=="function"&&!Ko(m)&&m.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(i.tag=15,i.type=m,$l(e,i,m,o,s,d)):(e=La(n.type,null,o,null,i.mode,d),e.ref=i.ref,e.return=i,i.child=e)}return m=e.child,s<d&&(s=m.memoizedProps,n=n.compare,n=n!==null?n:bt,n(s,o)&&e.ref===i.ref)?Si(e,i,d):(i.effectTag|=1,e=jn(m,o),e.ref=i.ref,e.return=i,i.child=e)}function $l(e,i,n,o,s,d){return e!==null&&bt(e.memoizedProps,o)&&e.ref===i.ref&&(hi=!1,s<d)?(i.expirationTime=e.expirationTime,Si(e,i,d)):To(e,i,n,o,d)}function Vl(e,i){var n=i.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(i.effectTag|=128)}function To(e,i,n,o,s){var d=$e(n)?cn:We.current;return d=In(i,d),Jn(i,s),n=po(e,i,n,o,d,s),e!==null&&!hi?(i.updateQueue=e.updateQueue,i.effectTag&=-517,e.expirationTime<=s&&(e.expirationTime=0),Si(e,i,s)):(i.effectTag|=1,qe(e,i,n,s),i.child)}function Yl(e,i,n,o,s){if($e(n)){var d=!0;la(i)}else d=!1;if(Jn(i,s),i.stateNode===null)e!==null&&(e.alternate=null,i.alternate=null,i.effectTag|=2),Gl(i,n,o),co(i,n,o,s),o=!0;else if(e===null){var m=i.stateNode,y=i.memoizedProps;m.props=y;var b=m.context,v=n.contextType;typeof v=="object"&&v!==null?v=oi(v):(v=$e(n)?cn:We.current,v=In(i,v));var R=n.getDerivedStateFromProps,N=typeof R=="function"||typeof m.getSnapshotBeforeUpdate=="function";N||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(y!==o||b!==v)&&xl(i,m,o,v),Ki=!1;var oe=i.memoizedState;m.state=oe,Ct(i,o,m,s),b=i.memoizedState,y!==o||oe!==b||Ze.current||Ki?(typeof R=="function"&&(pa(i,n,R,o),b=i.memoizedState),(y=Ki||Sl(i,n,y,o,oe,b,v))?(N||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(i.effectTag|=4)):(typeof m.componentDidMount=="function"&&(i.effectTag|=4),i.memoizedProps=o,i.memoizedState=b),m.props=o,m.state=b,m.context=v,o=y):(typeof m.componentDidMount=="function"&&(i.effectTag|=4),o=!1)}else m=i.stateNode,lo(e,i),y=i.memoizedProps,m.props=i.type===i.elementType?y:ci(i.type,y),b=m.context,v=n.contextType,typeof v=="object"&&v!==null?v=oi(v):(v=$e(n)?cn:We.current,v=In(i,v)),R=n.getDerivedStateFromProps,(N=typeof R=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(y!==o||b!==v)&&xl(i,m,o,v),Ki=!1,b=i.memoizedState,m.state=b,Ct(i,o,m,s),oe=i.memoizedState,y!==o||b!==oe||Ze.current||Ki?(typeof R=="function"&&(pa(i,n,R,o),oe=i.memoizedState),(R=Ki||Sl(i,n,y,o,b,oe,v))?(N||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(o,oe,v),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(o,oe,v)),typeof m.componentDidUpdate=="function"&&(i.effectTag|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(i.effectTag|=256)):(typeof m.componentDidUpdate!="function"||y===e.memoizedProps&&b===e.memoizedState||(i.effectTag|=4),typeof m.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&b===e.memoizedState||(i.effectTag|=256),i.memoizedProps=o,i.memoizedState=oe),m.props=o,m.state=oe,m.context=v,o=R):(typeof m.componentDidUpdate!="function"||y===e.memoizedProps&&b===e.memoizedState||(i.effectTag|=4),typeof m.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&b===e.memoizedState||(i.effectTag|=256),o=!1);return Eo(e,i,n,o,d,s)}function Eo(e,i,n,o,s,d){Vl(e,i);var m=(i.effectTag&64)!==0;if(!o&&!m)return s&&fl(i,n,!1),Si(e,i,d);o=i.stateNode,Xf.current=i;var y=m&&typeof n.getDerivedStateFromError!="function"?null:o.render();return i.effectTag|=1,e!==null&&m?(i.child=Wn(i,e.child,null,d),i.child=Wn(i,null,y,d)):qe(e,i,y,d),i.memoizedState=o.state,s&&fl(i,n,!0),i.child}function Ql(e){var i=e.stateNode;i.pendingContext?dl(e,i.pendingContext,i.pendingContext!==i.context):i.context&&dl(e,i.context,!1),fo(e,i.containerInfo)}var Ao={dehydrated:null,retryTime:0};function Xl(e,i,n){var o=i.mode,s=i.pendingProps,d=Te.current,m=!1,y;if((y=(i.effectTag&64)!==0)||(y=(d&2)!==0&&(e===null||e.memoizedState!==null)),y?(m=!0,i.effectTag&=-65):e!==null&&e.memoizedState===null||s.fallback===void 0||s.unstable_avoidThisFallback===!0||(d|=1),Pe(Te,d&1),e===null){if(s.fallback!==void 0&&Co(i),m){if(m=s.fallback,s=Xi(null,o,0,null),s.return=i,(i.mode&2)===0)for(e=i.memoizedState!==null?i.child.child:i.child,s.child=e;e!==null;)e.return=s,e=e.sibling;return n=Xi(m,o,n,null),n.return=i,s.sibling=n,i.memoizedState=Ao,i.child=s,n}return o=s.children,i.memoizedState=null,i.child=mo(i,null,o,n)}if(e.memoizedState!==null){if(e=e.child,o=e.sibling,m){if(s=s.fallback,n=jn(e,e.pendingProps),n.return=i,(i.mode&2)===0&&(m=i.memoizedState!==null?i.child.child:i.child,m!==e.child))for(n.child=m;m!==null;)m.return=n,m=m.sibling;return o=jn(o,s),o.return=i,n.sibling=o,n.childExpirationTime=0,i.memoizedState=Ao,i.child=n,o}return n=Wn(i,e.child,s.children,n),i.memoizedState=null,i.child=n}if(e=e.child,m){if(m=s.fallback,s=Xi(null,o,0,null),s.return=i,s.child=e,e!==null&&(e.return=s),(i.mode&2)===0)for(e=i.memoizedState!==null?i.child.child:i.child,s.child=e;e!==null;)e.return=s,e=e.sibling;return n=Xi(m,o,n,null),n.return=i,s.sibling=n,n.effectTag|=2,s.childExpirationTime=0,i.memoizedState=Ao,i.child=s,n}return i.memoizedState=null,i.child=Wn(i,e,s.children,n)}function ql(e,i){e.expirationTime<i&&(e.expirationTime=i);var n=e.alternate;n!==null&&n.expirationTime<i&&(n.expirationTime=i),Tl(e.return,i)}function Po(e,i,n,o,s,d){var m=e.memoizedState;m===null?e.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:o,tail:n,tailExpiration:0,tailMode:s,lastEffect:d}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=o,m.tail=n,m.tailExpiration=0,m.tailMode=s,m.lastEffect=d)}function ec(e,i,n){var o=i.pendingProps,s=o.revealOrder,d=o.tail;if(qe(e,i,o.children,n),o=Te.current,(o&2)!==0)o=o&1|2,i.effectTag|=64;else{if(e!==null&&(e.effectTag&64)!==0)e:for(e=i.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ql(e,n);else if(e.tag===19)ql(e,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===i)break e;for(;e.sibling===null;){if(e.return===null||e.return===i)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}if(Pe(Te,o),(i.mode&2)===0)i.memoizedState=null;else switch(s){case"forwards":for(n=i.child,s=null;n!==null;)e=n.alternate,e!==null&&ka(e)===null&&(s=n),n=n.sibling;n=s,n===null?(s=i.child,i.child=null):(s=n.sibling,n.sibling=null),Po(i,!1,s,n,d,i.lastEffect);break;case"backwards":for(n=null,s=i.child,i.child=null;s!==null;){if(e=s.alternate,e!==null&&ka(e)===null){i.child=s;break}e=s.sibling,s.sibling=n,n=s,s=e}Po(i,!0,n,null,d,i.lastEffect);break;case"together":Po(i,!1,null,null,void 0,i.lastEffect);break;default:i.memoizedState=null}return i.child}function Si(e,i,n){e!==null&&(i.dependencies=e.dependencies);var o=i.expirationTime;if(o!==0&&Ha(o),i.childExpirationTime<n)return null;if(e!==null&&i.child!==e.child)throw Error(a(153));if(i.child!==null){for(e=i.child,n=jn(e,e.pendingProps),i.child=n,n.return=i;e.sibling!==null;)e=e.sibling,n=n.sibling=jn(e,e.pendingProps),n.return=i;n.sibling=null}return i.child}var ic,So,nc,tc;ic=function(e,i){for(var n=i.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break;for(;n.sibling===null;){if(n.return===null||n.return===i)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},So=function(){},nc=function(e,i,n,o,s){var d=e.memoizedProps;if(d!==o){var m=i.stateNode;switch(dn(pi.current),e=null,n){case"input":d=hr(m,d),o=hr(m,o),e=[];break;case"option":d=kr(m,d),o=kr(m,o),e=[];break;case"select":d=r({},d,{value:void 0}),o=r({},o,{value:void 0}),e=[];break;case"textarea":d=br(m,d),o=br(m,o),e=[];break;default:typeof d.onClick!="function"&&typeof o.onClick=="function"&&(m.onclick=ia)}Fr(n,o);var y,b;n=null;for(y in d)if(!o.hasOwnProperty(y)&&d.hasOwnProperty(y)&&d[y]!=null)if(y==="style")for(b in m=d[y],m)m.hasOwnProperty(b)&&(n||(n={}),n[b]="");else y!=="dangerouslySetInnerHTML"&&y!=="children"&&y!=="suppressContentEditableWarning"&&y!=="suppressHydrationWarning"&&y!=="autoFocus"&&(X.hasOwnProperty(y)?e||(e=[]):(e=e||[]).push(y,null));for(y in o){var v=o[y];if(m=d?.[y],o.hasOwnProperty(y)&&v!==m&&(v!=null||m!=null))if(y==="style")if(m){for(b in m)!m.hasOwnProperty(b)||v&&v.hasOwnProperty(b)||(n||(n={}),n[b]="");for(b in v)v.hasOwnProperty(b)&&m[b]!==v[b]&&(n||(n={}),n[b]=v[b])}else n||(e||(e=[]),e.push(y,n)),n=v;else y==="dangerouslySetInnerHTML"?(v=v?v.__html:void 0,m=m?m.__html:void 0,v!=null&&m!==v&&(e=e||[]).push(y,v)):y==="children"?m===v||typeof v!="string"&&typeof v!="number"||(e=e||[]).push(y,""+v):y!=="suppressContentEditableWarning"&&y!=="suppressHydrationWarning"&&(X.hasOwnProperty(y)?(v!=null&&Di(s,y),e||m===v||(e=[])):(e=e||[]).push(y,v))}n&&(e=e||[]).push("style",n),s=e,(i.updateQueue=s)&&(i.effectTag|=4)}},tc=function(e,i,n,o){n!==o&&(i.effectTag|=4)};function Sa(e,i){switch(e.tailMode){case"hidden":i=e.tail;for(var n=null;i!==null;)i.alternate!==null&&(n=i),i=i.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var o=null;n!==null;)n.alternate!==null&&(o=n),n=n.sibling;o===null?i||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function qf(e,i,n){var o=i.pendingProps;switch(i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return null;case 1:return $e(i.type)&&ua(),null;case 3:return Hn(),ke(Ze),ke(We),n=i.stateNode,n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),e!==null&&e.child!==null||!Pa(i)||(i.effectTag|=4),So(i),null;case 5:zo(i),n=dn(Pt.current);var s=i.type;if(e!==null&&i.stateNode!=null)nc(e,i,s,o,n),e.ref!==i.ref&&(i.effectTag|=128);else{if(!o){if(i.stateNode===null)throw Error(a(166));return null}if(e=dn(pi.current),Pa(i)){o=i.stateNode,s=i.type;var d=i.memoizedProps;switch(o[Ji]=i,o[na]=d,s){case"iframe":case"object":case"embed":Ce("load",o);break;case"video":case"audio":for(e=0;e<at.length;e++)Ce(at[e],o);break;case"source":Ce("error",o);break;case"img":case"image":case"link":Ce("error",o),Ce("load",o);break;case"form":Ce("reset",o),Ce("submit",o);break;case"details":Ce("toggle",o);break;case"input":tu(o,d),Ce("invalid",o),Di(n,"onChange");break;case"select":o._wrapperState={wasMultiple:!!d.multiple},Ce("invalid",o),Di(n,"onChange");break;case"textarea":ou(o,d),Ce("invalid",o),Di(n,"onChange")}Fr(s,d),e=null;for(var m in d)if(d.hasOwnProperty(m)){var y=d[m];m==="children"?typeof y=="string"?o.textContent!==y&&(e=["children",y]):typeof y=="number"&&o.textContent!==""+y&&(e=["children",""+y]):X.hasOwnProperty(m)&&y!=null&&Di(n,m)}switch(s){case"input":Ut(o),ru(o,d,!0);break;case"textarea":Ut(o),uu(o);break;case"select":case"option":break;default:typeof d.onClick=="function"&&(o.onclick=ia)}n=e,i.updateQueue=n,n!==null&&(i.effectTag|=4)}else{switch(m=n.nodeType===9?n:n.ownerDocument,e===Ru&&(e=cu(s)),e===Ru?s==="script"?(e=m.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof o.is=="string"?e=m.createElement(s,{is:o.is}):(e=m.createElement(s),s==="select"&&(m=e,o.multiple?m.multiple=!0:o.size&&(m.size=o.size))):e=m.createElementNS(e,s),e[Ji]=i,e[na]=o,ic(e,i,!1,!1),i.stateNode=e,m=Mr(s,o),s){case"iframe":case"object":case"embed":Ce("load",e),y=o;break;case"video":case"audio":for(y=0;y<at.length;y++)Ce(at[y],e);y=o;break;case"source":Ce("error",e),y=o;break;case"img":case"image":case"link":Ce("error",e),Ce("load",e),y=o;break;case"form":Ce("reset",e),Ce("submit",e),y=o;break;case"details":Ce("toggle",e),y=o;break;case"input":tu(e,o),y=hr(e,o),Ce("invalid",e),Di(n,"onChange");break;case"option":y=kr(e,o);break;case"select":e._wrapperState={wasMultiple:!!o.multiple},y=r({},o,{value:void 0}),Ce("invalid",e),Di(n,"onChange");break;case"textarea":ou(e,o),y=br(e,o),Ce("invalid",e),Di(n,"onChange");break;default:y=o}Fr(s,y);var b=y;for(d in b)if(b.hasOwnProperty(d)){var v=b[d];d==="style"?Ou(e,v):d==="dangerouslySetInnerHTML"?(v=v?v.__html:void 0,v!=null&&du(e,v)):d==="children"?typeof v=="string"?(s!=="textarea"||v!=="")&&tt(e,v):typeof v=="number"&&tt(e,""+v):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(X.hasOwnProperty(d)?v!=null&&Di(n,d):v!=null&&Ri(e,d,v,m))}switch(s){case"input":Ut(e),ru(e,o,!1);break;case"textarea":Ut(e),uu(e);break;case"option":o.value!=null&&e.setAttribute("value",""+Fi(o.value));break;case"select":e.multiple=!!o.multiple,n=o.value,n!=null?Gn(e,!!o.multiple,n,!1):o.defaultValue!=null&&Gn(e,!!o.multiple,o.defaultValue,!0);break;default:typeof y.onClick=="function"&&(e.onclick=ia)}Wu(s,o)&&(i.effectTag|=4)}i.ref!==null&&(i.effectTag|=128)}return null;case 6:if(e&&i.stateNode!=null)tc(e,i,e.memoizedProps,o);else{if(typeof o!="string"&&i.stateNode===null)throw Error(a(166));n=dn(Pt.current),dn(pi.current),Pa(i)?(n=i.stateNode,o=i.memoizedProps,n[Ji]=i,n.nodeValue!==o&&(i.effectTag|=4)):(n=(n.nodeType===9?n:n.ownerDocument).createTextNode(o),n[Ji]=i,i.stateNode=n)}return null;case 13:return ke(Te),o=i.memoizedState,(i.effectTag&64)!==0?(i.expirationTime=n,i):(n=o!==null,o=!1,e===null?i.memoizedProps.fallback!==void 0&&Pa(i):(s=e.memoizedState,o=s!==null,n||s===null||(s=e.child.sibling,s!==null&&(d=i.firstEffect,d!==null?(i.firstEffect=s,s.nextEffect=d):(i.firstEffect=i.lastEffect=s,s.nextEffect=null),s.effectTag=8))),n&&!o&&(i.mode&2)!==0&&(e===null&&i.memoizedProps.unstable_avoidThisFallback!==!0||(Te.current&1)!==0?Ne===zn&&(Ne=Ba):((Ne===zn||Ne===Ba)&&(Ne=Oa),Gt!==0&&ei!==null&&(kn(ei,Ve),Pc(ei,Gt)))),(n||o)&&(i.effectTag|=4),null);case 4:return Hn(),So(i),null;case 10:return so(i),null;case 17:return $e(i.type)&&ua(),null;case 19:if(ke(Te),o=i.memoizedState,o===null)return null;if(s=(i.effectTag&64)!==0,d=o.rendering,d===null){if(s)Sa(o,!1);else if(Ne!==zn||e!==null&&(e.effectTag&64)!==0)for(d=i.child;d!==null;){if(e=ka(d),e!==null){for(i.effectTag|=64,Sa(o,!1),s=e.updateQueue,s!==null&&(i.updateQueue=s,i.effectTag|=4),o.lastEffect===null&&(i.firstEffect=null),i.lastEffect=o.lastEffect,o=i.child;o!==null;)s=o,d=n,s.effectTag&=2,s.nextEffect=null,s.firstEffect=null,s.lastEffect=null,e=s.alternate,e===null?(s.childExpirationTime=0,s.expirationTime=d,s.child=null,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null):(s.childExpirationTime=e.childExpirationTime,s.expirationTime=e.expirationTime,s.child=e.child,s.memoizedProps=e.memoizedProps,s.memoizedState=e.memoizedState,s.updateQueue=e.updateQueue,d=e.dependencies,s.dependencies=d===null?null:{expirationTime:d.expirationTime,firstContext:d.firstContext,responders:d.responders}),o=o.sibling;return Pe(Te,Te.current&1|2),i.child}d=d.sibling}}else{if(!s)if(e=ka(d),e!==null){if(i.effectTag|=64,s=!0,n=e.updateQueue,n!==null&&(i.updateQueue=n,i.effectTag|=4),Sa(o,!0),o.tail===null&&o.tailMode==="hidden"&&!d.alternate)return i=i.lastEffect=o.lastEffect,i!==null&&(i.nextEffect=null),null}else 2*ri()-o.renderingStartTime>o.tailExpiration&&1<n&&(i.effectTag|=64,s=!0,Sa(o,!1),i.expirationTime=i.childExpirationTime=n-1);o.isBackwards?(d.sibling=i.child,i.child=d):(n=o.last,n!==null?n.sibling=d:i.child=d,o.last=d)}return o.tail!==null?(o.tailExpiration===0&&(o.tailExpiration=ri()+500),n=o.tail,o.rendering=n,o.tail=n.sibling,o.lastEffect=i.lastEffect,o.renderingStartTime=ri(),n.sibling=null,i=Te.current,Pe(Te,s?i&1|2:i&1),n):null}throw Error(a(156,i.tag))}function ez(e){switch(e.tag){case 1:$e(e.type)&&ua();var i=e.effectTag;return i&4096?(e.effectTag=i&-4097|64,e):null;case 3:if(Hn(),ke(Ze),ke(We),i=e.effectTag,(i&64)!==0)throw Error(a(285));return e.effectTag=i&-4097|64,e;case 5:return zo(e),null;case 13:return ke(Te),i=e.effectTag,i&4096?(e.effectTag=i&-4097|64,e):null;case 19:return ke(Te),null;case 4:return Hn(),null;case 10:return so(e),null;default:return null}}function Go(e,i){return{value:e,source:i,stack:pr(i)}}var iz=typeof WeakSet=="function"?WeakSet:Set;function xo(e,i){var n=i.source,o=i.stack;o===null&&n!==null&&(o=pr(n)),n!==null&&Ci(n.type),i=i.value,e!==null&&e.tag===1&&Ci(e.type);try{console.error(i)}catch(s){setTimeout(function(){throw s})}}function nz(e,i){try{i.props=e.memoizedProps,i.state=e.memoizedState,i.componentWillUnmount()}catch(n){gn(e,n)}}function ac(e){var i=e.ref;if(i!==null)if(typeof i=="function")try{i(null)}catch(n){gn(e,n)}else i.current=null}function tz(e,i){switch(i.tag){case 0:case 11:case 15:case 22:return;case 1:if(i.effectTag&256&&e!==null){var n=e.memoizedProps,o=e.memoizedState;e=i.stateNode,i=e.getSnapshotBeforeUpdate(i.elementType===i.type?n:ci(i.type,n),o),e.__reactInternalSnapshotBeforeUpdate=i}return;case 3:case 5:case 6:case 4:case 17:return}throw Error(a(163))}function rc(e,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var n=i=i.next;do{if((n.tag&e)===e){var o=n.destroy;n.destroy=void 0,o!==void 0&&o()}n=n.next}while(n!==i)}}function oc(e,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var n=i=i.next;do{if((n.tag&e)===e){var o=n.create;n.destroy=o()}n=n.next}while(n!==i)}}function az(e,i,n){switch(n.tag){case 0:case 11:case 15:case 22:oc(3,n);return;case 1:if(e=n.stateNode,n.effectTag&4)if(i===null)e.componentDidMount();else{var o=n.elementType===n.type?i.memoizedProps:ci(n.type,i.memoizedProps);e.componentDidUpdate(o,i.memoizedState,e.__reactInternalSnapshotBeforeUpdate)}i=n.updateQueue,i!==null&&Al(n,i,e);return;case 3:if(i=n.updateQueue,i!==null){if(e=null,n.child!==null)switch(n.child.tag){case 5:e=n.child.stateNode;break;case 1:e=n.child.stateNode}Al(n,i,e)}return;case 5:e=n.stateNode,i===null&&n.effectTag&4&&Wu(n.type,n.memoizedProps)&&e.focus();return;case 6:return;case 4:return;case 12:return;case 13:n.memoizedState===null&&(n=n.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&Pu(n))));return;case 19:case 17:case 20:case 21:return}throw Error(a(163))}function sc(e,i,n){switch(typeof Lo=="function"&&Lo(i),i.tag){case 0:case 11:case 14:case 15:case 22:if(e=i.updateQueue,e!==null&&(e=e.lastEffect,e!==null)){var o=e.next;Li(97<n?97:n,function(){var s=o;do{var d=s.destroy;if(d!==void 0){var m=i;try{d()}catch(y){gn(m,y)}}s=s.next}while(s!==o)})}break;case 1:ac(i),n=i.stateNode,typeof n.componentWillUnmount=="function"&&nz(i,n);break;case 5:ac(i);break;case 4:dc(e,i,n)}}function uc(e){var i=e.alternate;e.return=null,e.child=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.alternate=null,e.firstEffect=null,e.lastEffect=null,e.pendingProps=null,e.memoizedProps=null,e.stateNode=null,i!==null&&uc(i)}function lc(e){return e.tag===5||e.tag===3||e.tag===4}function cc(e){e:{for(var i=e.return;i!==null;){if(lc(i)){var n=i;break e}i=i.return}throw Error(a(160))}switch(i=n.stateNode,n.tag){case 5:var o=!1;break;case 3:i=i.containerInfo,o=!0;break;case 4:i=i.containerInfo,o=!0;break;default:throw Error(a(161))}n.effectTag&16&&(tt(i,""),n.effectTag&=-17);e:i:for(n=e;;){for(;n.sibling===null;){if(n.return===null||lc(n.return)){n=null;break e}n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.effectTag&2||n.child===null||n.tag===4)continue i;n.child.return=n,n=n.child}if(!(n.effectTag&2)){n=n.stateNode;break e}}o?Bo(e,n,i):Oo(e,n,i)}function Bo(e,i,n){var o=e.tag,s=o===5||o===6;if(s)e=s?e.stateNode:e.stateNode.instance,i?n.nodeType===8?n.parentNode.insertBefore(e,i):n.insertBefore(e,i):(n.nodeType===8?(i=n.parentNode,i.insertBefore(e,n)):(i=n,i.appendChild(e)),n=n._reactRootContainer,n!=null||i.onclick!==null||(i.onclick=ia));else if(o!==4&&(e=e.child,e!==null))for(Bo(e,i,n),e=e.sibling;e!==null;)Bo(e,i,n),e=e.sibling}function Oo(e,i,n){var o=e.tag,s=o===5||o===6;if(s)e=s?e.stateNode:e.stateNode.instance,i?n.insertBefore(e,i):n.appendChild(e);else if(o!==4&&(e=e.child,e!==null))for(Oo(e,i,n),e=e.sibling;e!==null;)Oo(e,i,n),e=e.sibling}function dc(e,i,n){for(var o=i,s=!1,d,m;;){if(!s){s=o.return;e:for(;;){if(s===null)throw Error(a(160));switch(d=s.stateNode,s.tag){case 5:m=!1;break e;case 3:d=d.containerInfo,m=!0;break e;case 4:d=d.containerInfo,m=!0;break e}s=s.return}s=!0}if(o.tag===5||o.tag===6){e:for(var y=e,b=o,v=n,R=b;;)if(sc(y,R,v),R.child!==null&&R.tag!==4)R.child.return=R,R=R.child;else{if(R===b)break e;for(;R.sibling===null;){if(R.return===null||R.return===b)break e;R=R.return}R.sibling.return=R.return,R=R.sibling}m?(y=d,b=o.stateNode,y.nodeType===8?y.parentNode.removeChild(b):y.removeChild(b)):d.removeChild(o.stateNode)}else if(o.tag===4){if(o.child!==null){d=o.stateNode.containerInfo,m=!0,o.child.return=o,o=o.child;continue}}else if(sc(e,o,n),o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return,o.tag===4&&(s=!1)}o.sibling.return=o.return,o=o.sibling}}function Ro(e,i){switch(i.tag){case 0:case 11:case 14:case 15:case 22:rc(3,i);return;case 1:return;case 5:var n=i.stateNode;if(n!=null){var o=i.memoizedProps,s=e!==null?e.memoizedProps:o;e=i.type;var d=i.updateQueue;if(i.updateQueue=null,d!==null){for(n[na]=o,e==="input"&&o.type==="radio"&&o.name!=null&&au(n,o),Mr(e,s),i=Mr(e,o),s=0;s<d.length;s+=2){var m=d[s],y=d[s+1];m==="style"?Ou(n,y):m==="dangerouslySetInnerHTML"?du(n,y):m==="children"?tt(n,y):Ri(n,m,y,i)}switch(e){case"input":gr(n,o);break;case"textarea":su(n,o);break;case"select":i=n._wrapperState.wasMultiple,n._wrapperState.wasMultiple=!!o.multiple,e=o.value,e!=null?Gn(n,!!o.multiple,e,!1):i!==!!o.multiple&&(o.defaultValue!=null?Gn(n,!!o.multiple,o.defaultValue,!0):Gn(n,!!o.multiple,o.multiple?[]:"",!1))}}}return;case 6:if(i.stateNode===null)throw Error(a(162));i.stateNode.nodeValue=i.memoizedProps;return;case 3:i=i.stateNode,i.hydrate&&(i.hydrate=!1,Pu(i.containerInfo));return;case 12:return;case 13:if(n=i,i.memoizedState===null?o=!1:(o=!0,n=i.child,Mo=ri()),n!==null)e:for(e=n;;){if(e.tag===5)d=e.stateNode,o?(d=d.style,typeof d.setProperty=="function"?d.setProperty("display","none","important"):d.display="none"):(d=e.stateNode,s=e.memoizedProps.style,s=s!=null&&s.hasOwnProperty("display")?s.display:null,d.style.display=Bu("display",s));else if(e.tag===6)e.stateNode.nodeValue=o?"":e.memoizedProps;else if(e.tag===13&&e.memoizedState!==null&&e.memoizedState.dehydrated===null){d=e.child.sibling,d.return=e,e=d;continue}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}mc(i);return;case 19:mc(i);return;case 17:return}throw Error(a(163))}function mc(e){var i=e.updateQueue;if(i!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new iz),i.forEach(function(o){var s=zz.bind(null,e,o);n.has(o)||(n.add(o),o.then(s,s))})}}var rz=typeof WeakMap=="function"?WeakMap:Map;function fc(e,i,n){n=Ui(n,null),n.tag=3,n.payload={element:null};var o=i.value;return n.callback=function(){Ma||(Ma=!0,Io=o),xo(e,i)},n}function zc(e,i,n){n=Ui(n,null),n.tag=3;var o=e.type.getDerivedStateFromError;if(typeof o=="function"){var s=i.value;n.payload=function(){return xo(e,i),o(s)}}var d=e.stateNode;return d!==null&&typeof d.componentDidCatch=="function"&&(n.callback=function(){typeof o!="function"&&(Yi===null?Yi=new Set([this]):Yi.add(this),xo(e,i));var m=i.stack;this.componentDidCatch(i.value,{componentStack:m!==null?m:""})}),n}var oz=Math.ceil,Ga=re.ReactCurrentDispatcher,yc=re.ReactCurrentOwner,Re=0,No=8,di=16,gi=32,zn=0,xa=1,wc=2,Ba=3,Oa=4,Fo=5,Z=Re,ei=null,q=null,Ve=0,Ne=zn,Ra=null,Gi=1073741823,St=1073741823,Na=null,Gt=0,Fa=!1,Mo=0,pc=500,I=null,Ma=!1,Io=null,Yi=null,Ia=!1,xt=null,Bt=90,yn=null,Ot=0,_o=null,_a=0;function ji(){return(Z&(di|gi))!==Re?1073741821-(ri()/10|0):_a!==0?_a:_a=1073741821-(ri()/10|0)}function wn(e,i,n){if(i=i.mode,(i&2)===0)return 1073741823;var o=ma();if((i&4)===0)return o===99?1073741823:1073741822;if((Z&di)!==Re)return Ve;if(n!==null)e=fa(e,n.timeoutMs|0||5e3,250);else switch(o){case 99:e=1073741823;break;case 98:e=fa(e,150,100);break;case 97:case 96:e=fa(e,5e3,250);break;case 95:e=2;break;default:throw Error(a(326))}return ei!==null&&e===Ve&&--e,e}function Qi(e,i){if(50<Ot)throw Ot=0,_o=null,Error(a(185));if(e=Ja(e,i),e!==null){var n=ma();i===1073741823?(Z&No)!==Re&&(Z&(di|gi))===Re?Jo(e):(ii(e),Z===Re&&wi()):ii(e),(Z&4)===Re||n!==98&&n!==99||(yn===null?yn=new Map([[e,i]]):(n=yn.get(e),(n===void 0||n>i)&&yn.set(e,i)))}}function Ja(e,i){e.expirationTime<i&&(e.expirationTime=i);var n=e.alternate;n!==null&&n.expirationTime<i&&(n.expirationTime=i);var o=e.return,s=null;if(o===null&&e.tag===3)s=e.stateNode;else for(;o!==null;){if(n=o.alternate,o.childExpirationTime<i&&(o.childExpirationTime=i),n!==null&&n.childExpirationTime<i&&(n.childExpirationTime=i),o.return===null&&o.tag===3){s=o.stateNode;break}o=o.return}return s!==null&&(ei===s&&(Ha(i),Ne===Oa&&kn(s,Ve)),Pc(s,i)),s}function Wa(e){var i=e.lastExpiredTime;if(i!==0||(i=e.firstPendingTime,!Ac(e,i)))return i;var n=e.lastPingedTime;return e=e.nextKnownPendingLevel,e=n>e?n:e,2>=e&&i!==e?0:e}function ii(e){if(e.lastExpiredTime!==0)e.callbackExpirationTime=1073741823,e.callbackPriority=99,e.callbackNode=Cl(Jo.bind(null,e));else{var i=Wa(e),n=e.callbackNode;if(i===0)n!==null&&(e.callbackNode=null,e.callbackExpirationTime=0,e.callbackPriority=90);else{var o=ji();if(i===1073741823?o=99:i===1||i===2?o=95:(o=10*(1073741821-i)-10*(1073741821-o),o=0>=o?99:250>=o?98:5250>=o?97:95),n!==null){var s=e.callbackPriority;if(e.callbackExpirationTime===i&&s>=o)return;n!==jl&&zl(n)}e.callbackExpirationTime=i,e.callbackPriority=o,i=i===1073741823?Cl(Jo.bind(null,e)):vl(o,hc.bind(null,e),{timeout:10*(1073741821-i)-ri()}),e.callbackNode=i}}}function hc(e,i){if(_a=0,i)return i=ji(),$o(e,i),ii(e),null;var n=Wa(e);if(n!==0){if(i=e.callbackNode,(Z&(di|gi))!==Re)throw Error(a(327));if(Un(),e===ei&&n===Ve||pn(e,n),q!==null){var o=Z;Z|=di;var s=bc();do try{lz();break}catch(y){kc(e,y)}while(!0);if(oo(),Z=o,Ga.current=s,Ne===xa)throw i=Ra,pn(e,n),kn(e,n),ii(e),i;if(q===null)switch(s=e.finishedWork=e.current.alternate,e.finishedExpirationTime=n,o=Ne,ei=null,o){case zn:case xa:throw Error(a(345));case wc:$o(e,2<n?2:n);break;case Ba:if(kn(e,n),o=e.lastSuspendedTime,n===o&&(e.nextKnownPendingLevel=Wo(s)),Gi===1073741823&&(s=Mo+pc-ri(),10<s)){if(Fa){var d=e.lastPingedTime;if(d===0||d>=n){e.lastPingedTime=n,pn(e,n);break}}if(d=Wa(e),d!==0&&d!==n)break;if(o!==0&&o!==n){e.lastPingedTime=o;break}e.timeoutHandle=Ur(hn.bind(null,e),s);break}hn(e);break;case Oa:if(kn(e,n),o=e.lastSuspendedTime,n===o&&(e.nextKnownPendingLevel=Wo(s)),Fa&&(s=e.lastPingedTime,s===0||s>=n)){e.lastPingedTime=n,pn(e,n);break}if(s=Wa(e),s!==0&&s!==n)break;if(o!==0&&o!==n){e.lastPingedTime=o;break}if(St!==1073741823?o=10*(1073741821-St)-ri():Gi===1073741823?o=0:(o=10*(1073741821-Gi)-5e3,s=ri(),n=10*(1073741821-n)-s,o=s-o,0>o&&(o=0),o=(120>o?120:480>o?480:1080>o?1080:1920>o?1920:3e3>o?3e3:4320>o?4320:1960*oz(o/1960))-o,n<o&&(o=n)),10<o){e.timeoutHandle=Ur(hn.bind(null,e),o);break}hn(e);break;case Fo:if(Gi!==1073741823&&Na!==null){d=Gi;var m=Na;if(o=m.busyMinDurationMs|0,0>=o?o=0:(s=m.busyDelayMs|0,d=ri()-(10*(1073741821-d)-(m.timeoutMs|0||5e3)),o=d<=s?0:s+o-d),10<o){kn(e,n),e.timeoutHandle=Ur(hn.bind(null,e),o);break}}hn(e);break;default:throw Error(a(329))}if(ii(e),e.callbackNode===i)return hc.bind(null,e)}}return null}function Jo(e){var i=e.lastExpiredTime;if(i=i!==0?i:1073741823,(Z&(di|gi))!==Re)throw Error(a(327));if(Un(),e===ei&&i===Ve||pn(e,i),q!==null){var n=Z;Z|=di;var o=bc();do try{uz();break}catch(s){kc(e,s)}while(!0);if(oo(),Z=n,Ga.current=o,Ne===xa)throw n=Ra,pn(e,i),kn(e,i),ii(e),n;if(q!==null)throw Error(a(261));e.finishedWork=e.current.alternate,e.finishedExpirationTime=i,ei=null,hn(e),ii(e)}return null}function sz(){if(yn!==null){var e=yn;yn=null,e.forEach(function(i,n){$o(n,i),ii(n)}),wi()}}function gc(e,i){var n=Z;Z|=1;try{return e(i)}finally{Z=n,Z===Re&&wi()}}function jc(e,i){var n=Z;Z&=-2,Z|=No;try{return e(i)}finally{Z=n,Z===Re&&wi()}}function pn(e,i){e.finishedWork=null,e.finishedExpirationTime=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,of(n)),q!==null)for(n=q.return;n!==null;){var o=n;switch(o.tag){case 1:o=o.type.childContextTypes,o!=null&&ua();break;case 3:Hn(),ke(Ze),ke(We);break;case 5:zo(o);break;case 4:Hn();break;case 13:ke(Te);break;case 19:ke(Te);break;case 10:so(o)}n=n.return}ei=e,q=jn(e.current,null),Ve=i,Ne=zn,Ra=null,St=Gi=1073741823,Na=null,Gt=0,Fa=!1}function kc(e,i){do{try{if(oo(),ba.current=Aa,va)for(var n=Be.memoizedState;n!==null;){var o=n.queue;o!==null&&(o.pending=null),n=n.next}if($i=0,Le=He=Be=null,va=!1,q===null||q.return===null)return Ne=xa,Ra=i,q=null;e:{var s=e,d=q.return,m=q,y=i;if(i=Ve,m.effectTag|=2048,m.firstEffect=m.lastEffect=null,y!==null&&typeof y=="object"&&typeof y.then=="function"){var b=y;if((m.mode&2)===0){var v=m.alternate;v?(m.updateQueue=v.updateQueue,m.memoizedState=v.memoizedState,m.expirationTime=v.expirationTime):(m.updateQueue=null,m.memoizedState=null)}var R=(Te.current&1)!==0,N=d;do{var oe;if(oe=N.tag===13){var de=N.memoizedState;if(de!==null)oe=de.dehydrated!==null;else{var ui=N.memoizedProps;oe=ui.fallback===void 0?!1:ui.unstable_avoidThisFallback!==!0?!0:!R}}if(oe){var Ie=N.updateQueue;if(Ie===null){var j=new Set;j.add(b),N.updateQueue=j}else Ie.add(b);if((N.mode&2)===0){if(N.effectTag|=64,m.effectTag&=-2981,m.tag===1)if(m.alternate===null)m.tag=17;else{var h=Ui(1073741823,null);h.tag=2,Zi(m,h)}m.expirationTime=1073741823;break e}y=void 0,m=i;var D=s.pingCache;if(D===null?(D=s.pingCache=new rz,y=new Set,D.set(b,y)):(y=D.get(b),y===void 0&&(y=new Set,D.set(b,y))),!y.has(m)){y.add(m);var G=fz.bind(null,s,b,m);b.then(G,G)}N.effectTag|=4096,N.expirationTime=i;break e}N=N.return}while(N!==null);y=Error((Ci(m.type)||"A React component")+` suspended while rendering, but no fallback UI was specified.

Add a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.`+pr(m))}Ne!==Fo&&(Ne=wc),y=Go(y,m),N=d;do{switch(N.tag){case 3:b=y,N.effectTag|=4096,N.expirationTime=i;var B=fc(N,b,i);El(N,B);break e;case 1:b=y;var F=N.type,L=N.stateNode;if((N.effectTag&64)===0&&(typeof F.getDerivedStateFromError=="function"||L!==null&&typeof L.componentDidCatch=="function"&&(Yi===null||!Yi.has(L)))){N.effectTag|=4096,N.expirationTime=i;var ue=zc(N,b,i);El(N,ue);break e}}N=N.return}while(N!==null)}q=Dc(q)}catch(De){i=De;continue}break}while(!0)}function bc(){var e=Ga.current;return Ga.current=Aa,e===null?Aa:e}function vc(e,i){e<Gi&&2<e&&(Gi=e),i!==null&&e<St&&2<e&&(St=e,Na=i)}function Ha(e){e>Gt&&(Gt=e)}function uz(){for(;q!==null;)q=Cc(q)}function lz(){for(;q!==null&&!Zf();)q=Cc(q)}function Cc(e){var i=Ec(e.alternate,e,Ve);return e.memoizedProps=e.pendingProps,i===null&&(i=Dc(e)),yc.current=null,i}function Dc(e){q=e;do{var i=q.alternate;if(e=q.return,(q.effectTag&2048)===0){if(i=qf(i,q,Ve),Ve===1||q.childExpirationTime!==1){for(var n=0,o=q.child;o!==null;){var s=o.expirationTime,d=o.childExpirationTime;s>n&&(n=s),d>n&&(n=d),o=o.sibling}q.childExpirationTime=n}if(i!==null)return i;e!==null&&(e.effectTag&2048)===0&&(e.firstEffect===null&&(e.firstEffect=q.firstEffect),q.lastEffect!==null&&(e.lastEffect!==null&&(e.lastEffect.nextEffect=q.firstEffect),e.lastEffect=q.lastEffect),1<q.effectTag&&(e.lastEffect!==null?e.lastEffect.nextEffect=q:e.firstEffect=q,e.lastEffect=q))}else{if(i=ez(q),i!==null)return i.effectTag&=2047,i;e!==null&&(e.firstEffect=e.lastEffect=null,e.effectTag|=2048)}if(i=q.sibling,i!==null)return i;q=e}while(q!==null);return Ne===zn&&(Ne=Fo),null}function Wo(e){var i=e.expirationTime;return e=e.childExpirationTime,i>e?i:e}function hn(e){var i=ma();return Li(99,cz.bind(null,e,i)),null}function cz(e,i){do Un();while(xt!==null);if((Z&(di|gi))!==Re)throw Error(a(327));var n=e.finishedWork,o=e.finishedExpirationTime;if(n===null)return null;if(e.finishedWork=null,e.finishedExpirationTime=0,n===e.current)throw Error(a(177));e.callbackNode=null,e.callbackExpirationTime=0,e.callbackPriority=90,e.nextKnownPendingLevel=0;var s=Wo(n);if(e.firstPendingTime=s,o<=e.lastSuspendedTime?e.firstSuspendedTime=e.lastSuspendedTime=e.nextKnownPendingLevel=0:o<=e.firstSuspendedTime&&(e.firstSuspendedTime=o-1),o<=e.lastPingedTime&&(e.lastPingedTime=0),o<=e.lastExpiredTime&&(e.lastExpiredTime=0),e===ei&&(q=ei=null,Ve=0),1<n.effectTag?n.lastEffect!==null?(n.lastEffect.nextEffect=n,s=n.firstEffect):s=n:s=n.firstEffect,s!==null){var d=Z;Z|=gi,yc.current=null,Hr=qt;var m=Iu();if(_r(m)){if("selectionStart"in m)var y={start:m.selectionStart,end:m.selectionEnd};else e:{y=(y=m.ownerDocument)&&y.defaultView||window;var b=y.getSelection&&y.getSelection();if(b&&b.rangeCount!==0){y=b.anchorNode;var v=b.anchorOffset,R=b.focusNode;b=b.focusOffset;try{y.nodeType,R.nodeType}catch{y=null;break e}var N=0,oe=-1,de=-1,ui=0,Ie=0,j=m,h=null;i:for(;;){for(var D;j!==y||v!==0&&j.nodeType!==3||(oe=N+v),j!==R||b!==0&&j.nodeType!==3||(de=N+b),j.nodeType===3&&(N+=j.nodeValue.length),(D=j.firstChild)!==null;)h=j,j=D;for(;;){if(j===m)break i;if(h===y&&++ui===v&&(oe=N),h===R&&++Ie===b&&(de=N),(D=j.nextSibling)!==null)break;j=h,h=j.parentNode}j=D}y=oe===-1||de===-1?null:{start:oe,end:de}}else y=null}y=y||{start:0,end:0}}else y=null;Lr={activeElementDetached:null,focusedElem:m,selectionRange:y},qt=!1,I=s;do try{dz()}catch(ne){if(I===null)throw Error(a(330));gn(I,ne),I=I.nextEffect}while(I!==null);I=s;do try{for(m=e,y=i;I!==null;){var G=I.effectTag;if(G&16&&tt(I.stateNode,""),G&128){var B=I.alternate;if(B!==null){var F=B.ref;F!==null&&(typeof F=="function"?F(null):F.current=null)}}switch(G&1038){case 2:cc(I),I.effectTag&=-3;break;case 6:cc(I),I.effectTag&=-3,Ro(I.alternate,I);break;case 1024:I.effectTag&=-1025;break;case 1028:I.effectTag&=-1025,Ro(I.alternate,I);break;case 4:Ro(I.alternate,I);break;case 8:v=I,dc(m,v,y),uc(v)}I=I.nextEffect}}catch(ne){if(I===null)throw Error(a(330));gn(I,ne),I=I.nextEffect}while(I!==null);if(F=Lr,B=Iu(),G=F.focusedElem,y=F.selectionRange,B!==G&&G&&G.ownerDocument&&Mu(G.ownerDocument.documentElement,G)){for(y!==null&&_r(G)&&(B=y.start,F=y.end,F===void 0&&(F=B),"selectionStart"in G?(G.selectionStart=B,G.selectionEnd=Math.min(F,G.value.length)):(F=(B=G.ownerDocument||document)&&B.defaultView||window,F.getSelection&&(F=F.getSelection(),v=G.textContent.length,m=Math.min(y.start,v),y=y.end===void 0?m:Math.min(y.end,v),!F.extend&&m>y&&(v=y,y=m,m=v),v=Fu(G,m),R=Fu(G,y),v&&R&&(F.rangeCount!==1||F.anchorNode!==v.node||F.anchorOffset!==v.offset||F.focusNode!==R.node||F.focusOffset!==R.offset)&&(B=B.createRange(),B.setStart(v.node,v.offset),F.removeAllRanges(),m>y?(F.addRange(B),F.extend(R.node,R.offset)):(B.setEnd(R.node,R.offset),F.addRange(B)))))),B=[],F=G;F=F.parentNode;)F.nodeType===1&&B.push({element:F,left:F.scrollLeft,top:F.scrollTop});for(typeof G.focus=="function"&&G.focus(),G=0;G<B.length;G++)F=B[G],F.element.scrollLeft=F.left,F.element.scrollTop=F.top}qt=!!Hr,Lr=Hr=null,e.current=n,I=s;do try{for(G=e;I!==null;){var L=I.effectTag;if(L&36&&az(G,I.alternate,I),L&128){B=void 0;var ue=I.ref;if(ue!==null){var De=I.stateNode;I.tag,B=De,typeof ue=="function"?ue(B):ue.current=B}}I=I.nextEffect}}catch(ne){if(I===null)throw Error(a(330));gn(I,ne),I=I.nextEffect}while(I!==null);I=null,$f(),Z=d}else e.current=n;if(Ia)Ia=!1,xt=e,Bt=i;else for(I=s;I!==null;)i=I.nextEffect,I.nextEffect=null,I=i;if(i=e.firstPendingTime,i===0&&(Yi=null),i===1073741823?e===_o?Ot++:(Ot=0,_o=e):Ot=0,typeof Ho=="function"&&Ho(n.stateNode,o),ii(e),Ma)throw Ma=!1,e=Io,Io=null,e;return(Z&No)!==Re||wi(),null}function dz(){for(;I!==null;){var e=I.effectTag;(e&256)!==0&&tz(I.alternate,I),(e&512)===0||Ia||(Ia=!0,vl(97,function(){return Un(),null})),I=I.nextEffect}}function Un(){if(Bt!==90){var e=97<Bt?97:Bt;return Bt=90,Li(e,mz)}}function mz(){if(xt===null)return!1;var e=xt;if(xt=null,(Z&(di|gi))!==Re)throw Error(a(331));var i=Z;for(Z|=gi,e=e.current.firstEffect;e!==null;){try{var n=e;if((n.effectTag&512)!==0)switch(n.tag){case 0:case 11:case 15:case 22:rc(5,n),oc(5,n)}}catch(o){if(e===null)throw Error(a(330));gn(e,o)}n=e.nextEffect,e.nextEffect=null,e=n}return Z=i,wi(),!0}function Tc(e,i,n){i=Go(n,i),i=fc(e,i,1073741823),Zi(e,i),e=Ja(e,1073741823),e!==null&&ii(e)}function gn(e,i){if(e.tag===3)Tc(e,e,i);else for(var n=e.return;n!==null;){if(n.tag===3){Tc(n,e,i);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Yi===null||!Yi.has(o))){e=Go(i,e),e=zc(n,e,1073741823),Zi(n,e),n=Ja(n,1073741823),n!==null&&ii(n);break}}n=n.return}}function fz(e,i,n){var o=e.pingCache;o!==null&&o.delete(i),ei===e&&Ve===n?Ne===Oa||Ne===Ba&&Gi===1073741823&&ri()-Mo<pc?pn(e,Ve):Fa=!0:Ac(e,n)&&(i=e.lastPingedTime,i!==0&&i<n||(e.lastPingedTime=n,ii(e)))}function zz(e,i){var n=e.stateNode;n!==null&&n.delete(i),i=0,i===0&&(i=ji(),i=wn(i,e,null)),e=Ja(e,i),e!==null&&ii(e)}var Ec;Ec=function(e,i,n){var o=i.expirationTime;if(e!==null){var s=i.pendingProps;if(e.memoizedProps!==s||Ze.current)hi=!0;else{if(o<n){switch(hi=!1,i.tag){case 3:Ql(i),Do();break;case 5:if(Ol(i),i.mode&4&&n!==1&&s.hidden)return i.expirationTime=i.childExpirationTime=1,null;break;case 1:$e(i.type)&&la(i);break;case 4:fo(i,i.stateNode.containerInfo);break;case 10:o=i.memoizedProps.value,s=i.type._context,Pe(za,s._currentValue),s._currentValue=o;break;case 13:if(i.memoizedState!==null)return o=i.child.childExpirationTime,o!==0&&o>=n?Xl(e,i,n):(Pe(Te,Te.current&1),i=Si(e,i,n),i!==null?i.sibling:null);Pe(Te,Te.current&1);break;case 19:if(o=i.childExpirationTime>=n,(e.effectTag&64)!==0){if(o)return ec(e,i,n);i.effectTag|=64}if(s=i.memoizedState,s!==null&&(s.rendering=null,s.tail=null),Pe(Te,Te.current),!o)return null}return Si(e,i,n)}hi=!1}}else hi=!1;switch(i.expirationTime=0,i.tag){case 2:if(o=i.type,e!==null&&(e.alternate=null,i.alternate=null,i.effectTag|=2),e=i.pendingProps,s=In(i,We.current),Jn(i,n),s=po(null,i,o,e,s,n),i.effectTag|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0){if(i.tag=1,i.memoizedState=null,i.updateQueue=null,$e(o)){var d=!0;la(i)}else d=!1;i.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,uo(i);var m=o.getDerivedStateFromProps;typeof m=="function"&&pa(i,o,m,e),s.updater=ha,i.stateNode=s,s._reactInternalFiber=i,co(i,o,e,n),i=Eo(null,i,o,!0,d,n)}else i.tag=0,qe(null,i,s,n),i=i.child;return i;case 16:e:{if(s=i.elementType,e!==null&&(e.alternate=null,i.alternate=null,i.effectTag|=2),e=i.pendingProps,Wm(s),s._status!==1)throw s._result;switch(s=s._result,i.type=s,d=i.tag=pz(s),e=ci(s,e),d){case 0:i=To(null,i,s,e,n);break e;case 1:i=Yl(null,i,s,e,n);break e;case 11:i=Ul(null,i,s,e,n);break e;case 14:i=Zl(null,i,s,ci(s.type,e),o,n);break e}throw Error(a(306,s,""))}return i;case 0:return o=i.type,s=i.pendingProps,s=i.elementType===o?s:ci(o,s),To(e,i,o,s,n);case 1:return o=i.type,s=i.pendingProps,s=i.elementType===o?s:ci(o,s),Yl(e,i,o,s,n);case 3:if(Ql(i),o=i.updateQueue,e===null||o===null)throw Error(a(282));if(o=i.pendingProps,s=i.memoizedState,s=s!==null?s.element:null,lo(e,i),Ct(i,o,null,n),o=i.memoizedState.element,o===s)Do(),i=Si(e,i,n);else{if((s=i.stateNode.hydrate)&&(Vi=On(i.stateNode.containerInfo.firstChild),Pi=i,s=fn=!0),s)for(n=mo(i,null,o,n),i.child=n;n;)n.effectTag=n.effectTag&-3|1024,n=n.sibling;else qe(e,i,o,n),Do();i=i.child}return i;case 5:return Ol(i),e===null&&Co(i),o=i.type,s=i.pendingProps,d=e!==null?e.memoizedProps:null,m=s.children,Kr(o,s)?m=null:d!==null&&Kr(o,d)&&(i.effectTag|=16),Vl(e,i),i.mode&4&&n!==1&&s.hidden?(i.expirationTime=i.childExpirationTime=1,i=null):(qe(e,i,m,n),i=i.child),i;case 6:return e===null&&Co(i),null;case 13:return Xl(e,i,n);case 4:return fo(i,i.stateNode.containerInfo),o=i.pendingProps,e===null?i.child=Wn(i,null,o,n):qe(e,i,o,n),i.child;case 11:return o=i.type,s=i.pendingProps,s=i.elementType===o?s:ci(o,s),Ul(e,i,o,s,n);case 7:return qe(e,i,i.pendingProps,n),i.child;case 8:return qe(e,i,i.pendingProps.children,n),i.child;case 12:return qe(e,i,i.pendingProps.children,n),i.child;case 10:e:{o=i.type._context,s=i.pendingProps,m=i.memoizedProps,d=s.value;var y=i.type._context;if(Pe(za,y._currentValue),y._currentValue=d,m!==null)if(y=m.value,d=ln(y,d)?0:(typeof o._calculateChangedBits=="function"?o._calculateChangedBits(y,d):1073741823)|0,d===0){if(m.children===s.children&&!Ze.current){i=Si(e,i,n);break e}}else for(y=i.child,y!==null&&(y.return=i);y!==null;){var b=y.dependencies;if(b!==null){m=y.child;for(var v=b.firstContext;v!==null;){if(v.context===o&&(v.observedBits&d)!==0){y.tag===1&&(v=Ui(n,null),v.tag=2,Zi(y,v)),y.expirationTime<n&&(y.expirationTime=n),v=y.alternate,v!==null&&v.expirationTime<n&&(v.expirationTime=n),Tl(y.return,n),b.expirationTime<n&&(b.expirationTime=n);break}v=v.next}}else m=y.tag===10&&y.type===i.type?null:y.child;if(m!==null)m.return=y;else for(m=y;m!==null;){if(m===i){m=null;break}if(y=m.sibling,y!==null){y.return=m.return,m=y;break}m=m.return}y=m}qe(e,i,s.children,n),i=i.child}return i;case 9:return s=i.type,d=i.pendingProps,o=d.children,Jn(i,n),s=oi(s,d.unstable_observedBits),o=o(s),i.effectTag|=1,qe(e,i,o,n),i.child;case 14:return s=i.type,d=ci(s,i.pendingProps),d=ci(s.type,d),Zl(e,i,s,d,o,n);case 15:return $l(e,i,i.type,i.pendingProps,o,n);case 17:return o=i.type,s=i.pendingProps,s=i.elementType===o?s:ci(o,s),e!==null&&(e.alternate=null,i.alternate=null,i.effectTag|=2),i.tag=1,$e(o)?(e=!0,la(i)):e=!1,Jn(i,n),Gl(i,o,s),co(i,o,s,n),Eo(null,i,o,!0,e,n);case 19:return ec(e,i,n)}throw Error(a(156,i.tag))};var Ho=null,Lo=null;function yz(e){if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u")return!1;var i=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(i.isDisabled||!i.supportsFiber)return!0;try{var n=i.inject(e);Ho=function(o){try{i.onCommitFiberRoot(n,o,void 0,(o.current.effectTag&64)===64)}catch{}},Lo=function(o){try{i.onCommitFiberUnmount(n,o)}catch{}}}catch{}return!0}function wz(e,i,n,o){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.effectTag=0,this.lastEffect=this.firstEffect=this.nextEffect=null,this.childExpirationTime=this.expirationTime=0,this.alternate=null}function ki(e,i,n,o){return new wz(e,i,n,o)}function Ko(e){return e=e.prototype,!(!e||!e.isReactComponent)}function pz(e){if(typeof e=="function")return Ko(e)?1:0;if(e!=null){if(e=e.$$typeof,e===zi)return 11;if(e===wr)return 14}return 2}function jn(e,i){var n=e.alternate;return n===null?(n=ki(e.tag,i,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=i,n.effectTag=0,n.nextEffect=null,n.firstEffect=null,n.lastEffect=null),n.childExpirationTime=e.childExpirationTime,n.expirationTime=e.expirationTime,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,i=e.dependencies,n.dependencies=i===null?null:{expirationTime:i.expirationTime,firstContext:i.firstContext,responders:i.responders},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function La(e,i,n,o,s,d){var m=2;if(o=e,typeof e=="function")Ko(e)&&(m=1);else if(typeof e=="string")m=5;else e:switch(e){case vi:return Xi(n.children,s,d,i);case le:m=8,s|=7;break;case Lt:m=8,s|=1;break;case Sn:return e=ki(12,n,i,s|8),e.elementType=Sn,e.type=Sn,e.expirationTime=d,e;case on:return e=ki(13,n,i,s),e.type=on,e.elementType=on,e.expirationTime=d,e;case yr:return e=ki(19,n,i,s),e.elementType=yr,e.expirationTime=d,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case it:m=10;break e;case Kt:m=9;break e;case zi:m=11;break e;case wr:m=14;break e;case Xs:m=16,o=null;break e;case qs:m=22;break e}throw Error(a(130,e==null?e:typeof e,""))}return i=ki(m,n,i,s),i.elementType=e,i.type=o,i.expirationTime=d,i}function Xi(e,i,n,o){return e=ki(7,e,o,i),e.expirationTime=n,e}function Uo(e,i,n){return e=ki(6,e,null,i),e.expirationTime=n,e}function Zo(e,i,n){return i=ki(4,e.children!==null?e.children:[],e.key,i),i.expirationTime=n,i.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},i}function hz(e,i,n){this.tag=i,this.current=null,this.containerInfo=e,this.pingCache=this.pendingChildren=null,this.finishedExpirationTime=0,this.finishedWork=null,this.timeoutHandle=-1,this.pendingContext=this.context=null,this.hydrate=n,this.callbackNode=null,this.callbackPriority=90,this.lastExpiredTime=this.lastPingedTime=this.nextKnownPendingLevel=this.lastSuspendedTime=this.firstSuspendedTime=this.firstPendingTime=0}function Ac(e,i){var n=e.firstSuspendedTime;return e=e.lastSuspendedTime,n!==0&&n>=i&&e<=i}function kn(e,i){var n=e.firstSuspendedTime,o=e.lastSuspendedTime;n<i&&(e.firstSuspendedTime=i),(o>i||n===0)&&(e.lastSuspendedTime=i),i<=e.lastPingedTime&&(e.lastPingedTime=0),i<=e.lastExpiredTime&&(e.lastExpiredTime=0)}function Pc(e,i){i>e.firstPendingTime&&(e.firstPendingTime=i);var n=e.firstSuspendedTime;n!==0&&(i>=n?e.firstSuspendedTime=e.lastSuspendedTime=e.nextKnownPendingLevel=0:i>=e.lastSuspendedTime&&(e.lastSuspendedTime=i+1),i>e.nextKnownPendingLevel&&(e.nextKnownPendingLevel=i))}function $o(e,i){var n=e.lastExpiredTime;(n===0||n>i)&&(e.lastExpiredTime=i)}function Ka(e,i,n,o){var s=i.current,d=ji(),m=Dt.suspense;d=wn(d,s,m);e:if(n){n=n._reactInternalFiber;i:{if(sn(n)!==n||n.tag!==1)throw Error(a(170));var y=n;do{switch(y.tag){case 3:y=y.stateNode.context;break i;case 1:if($e(y.type)){y=y.stateNode.__reactInternalMemoizedMergedChildContext;break i}}y=y.return}while(y!==null);throw Error(a(171))}if(n.tag===1){var b=n.type;if($e(b)){n=ml(n,b,y);break e}}n=y}else n=Hi;return i.context===null?i.context=n:i.pendingContext=n,i=Ui(d,m),i.payload={element:e},o=o===void 0?null:o,o!==null&&(i.callback=o),Zi(s,i),Qi(s,d),d}function Vo(e){return e=e.current,e.child?(e.child.tag===5,e.child.stateNode):null}function Sc(e,i){e=e.memoizedState,e!==null&&e.dehydrated!==null&&e.retryTime<i&&(e.retryTime=i)}function Yo(e,i){Sc(e,i),(e=e.alternate)&&Sc(e,i)}function Qo(e,i,n){n=n!=null&&n.hydrate===!0;var o=new hz(e,i,n),s=ki(3,null,null,i===2?7:i===1?3:0);o.current=s,s.stateNode=o,uo(s),e[ft]=o.current,n&&i!==0&&$m(e,e.nodeType===9?e:e.ownerDocument),this._internalRoot=o}Qo.prototype.render=function(e){Ka(e,this._internalRoot,null,null)},Qo.prototype.unmount=function(){var e=this._internalRoot,i=e.containerInfo;Ka(null,e,null,function(){i[ft]=null})};function Rt(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function gz(e,i){if(i||(i=e?e.nodeType===9?e.documentElement:e.firstChild:null,i=!(!i||i.nodeType!==1||!i.hasAttribute("data-reactroot"))),!i)for(var n;n=e.lastChild;)e.removeChild(n);return new Qo(e,0,i?{hydrate:!0}:void 0)}function Ua(e,i,n,o,s){var d=n._reactRootContainer;if(d){var m=d._internalRoot;if(typeof s=="function"){var y=s;s=function(){var v=Vo(m);y.call(v)}}Ka(i,m,e,s)}else{if(d=n._reactRootContainer=gz(n,o),m=d._internalRoot,typeof s=="function"){var b=s;s=function(){var v=Vo(m);b.call(v)}}jc(function(){Ka(i,m,e,s)})}return Vo(m)}function jz(e,i,n){var o=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ni,key:o==null?null:""+o,children:e,containerInfo:i,implementation:n}}Du=function(e){if(e.tag===13){var i=fa(ji(),150,100);Qi(e,i),Yo(e,i)}},Pr=function(e){e.tag===13&&(Qi(e,3),Yo(e,3))},Tu=function(e){if(e.tag===13){var i=ji();i=wn(i,e,null),Qi(e,i),Yo(e,i)}},be=function(e,i,n){switch(i){case"input":if(gr(e,n),i=n.name,n.type==="radio"&&i!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<n.length;i++){var o=n[i];if(o!==e&&o.form===e.form){var s=$r(o);if(!s)throw Error(a(90));nu(o),gr(o,s)}}}break;case"textarea":su(e,n);break;case"select":i=n.value,i!=null&&Gn(e,!!n.multiple,i,!1)}},Ee=gc,Ae=function(e,i,n,o,s){var d=Z;Z|=4;try{return Li(98,e.bind(null,i,n,o,s))}finally{Z=d,Z===Re&&wi()}},ce=function(){(Z&(1|di|gi))===Re&&(sz(),Un())},Ye=function(e,i){var n=Z;Z|=2;try{return e(i)}finally{Z=n,Z===Re&&wi()}};function Gc(e,i){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Rt(i))throw Error(a(200));return jz(e,i,null,n)}var kz={Events:[yt,un,$r,se,te,Rn,function(e){Tr(e,uf)},ze,ye,ea,Yt,Un,{current:!1}]};return(function(e){var i=e.findFiberByHostInstance;return yz(r({},e,{overrideHookState:null,overrideProps:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:re.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=ju(n),n===null?null:n.stateNode},findFiberByHostInstance:function(n){return i?i(n):null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null}))})({findFiberByHostInstance:zt,bundleType:0,version:"16.14.0",rendererPackageName:"react-dom"}),ni.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=kz,ni.createPortal=Gc,ni.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var i=e._reactInternalFiber;if(i===void 0)throw typeof e.render=="function"?Error(a(188)):Error(a(268,Object.keys(e)));return e=ju(i),e=e===null?null:e.stateNode,e},ni.flushSync=function(e,i){if((Z&(di|gi))!==Re)throw Error(a(187));var n=Z;Z|=1;try{return Li(99,e.bind(null,i))}finally{Z=n,wi()}},ni.hydrate=function(e,i,n){if(!Rt(i))throw Error(a(200));return Ua(null,e,i,!0,n)},ni.render=function(e,i,n){if(!Rt(i))throw Error(a(200));return Ua(null,e,i,!1,n)},ni.unmountComponentAtNode=function(e){if(!Rt(e))throw Error(a(40));return e._reactRootContainer?(jc(function(){Ua(null,null,e,!1,function(){e._reactRootContainer=null,e[ft]=null})}),!0):!1},ni.unstable_batchedUpdates=gc,ni.unstable_createPortal=function(e,i){return Gc(e,i,2<arguments.length&&arguments[2]!==void 0?arguments[2]:null)},ni.unstable_renderSubtreeIntoContainer=function(e,i,n,o){if(!Rt(n))throw Error(a(200));if(e==null||e._reactInternalFiber===void 0)throw Error(a(38));return Ua(e,i,n,!1,o)},ni.version="16.14.0",ni}var _c;function Pz(){if(_c)return is.exports;_c=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(r){console.error(r)}}return t(),is.exports=Az(),is.exports}var Sz=Pz();const Dn=Wt(Sz),Ad=t=>t.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[\u0142]/g,"l").replace(/[^a-z ]/g,"").toLowerCase(),Pd="DIRECTIVE",Sd="BODY_LINE",Gz=t=>{const r=/{(.*):(.*)}/,u=t.match(r);if(u){const z=u[1].trim(),p=u[2].trim(),g=z==="number"?parseInt(p):p;return{type:Pd,directive:z,value:g}}const a=/\[.*?]/g,l=t.replace(a,"").trim(),c=(t.match(a)||[]).map(z=>z.replace(/[[\]]/g,""));return{type:Sd,bodyLine:{lyrics:l,chords:c}}},xz=t=>{const r=t.split(`
`).map(Gz),u=r.filter(z=>z.type===Sd).map(z=>z.bodyLine),a=u.findIndex(z=>z.lyrics||z.chords.length),l=u.length-u.slice().reverse().findIndex(z=>z.lyrics||z.chords.length),c=u.slice(a,l),f=r.filter(z=>z.type===Pd).reduce((z,p)=>({...z,[p.directive]:p.value}),{});return{...f,latinTitle:Ad(f.title||""),body:c}},Bz=t=>t.split(/---\s*\n/).map(xz),Oz=`
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
`,Rz=Bz(Oz);var as={exports:{}},rs,Jc;function Nz(){if(Jc)return rs;Jc=1;var t="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return rs=t,rs}var os,Wc;function Fz(){if(Wc)return os;Wc=1;var t=Nz();function r(){}function u(){}return u.resetWarningCache=r,os=function(){function a(f,z,p,g,k,T){if(T!==t){var E=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw E.name="Invariant Violation",E}}a.isRequired=a;function l(){return a}var c={array:a,bool:a,func:a,number:a,object:a,string:a,symbol:a,any:a,arrayOf:l,element:a,elementType:a,instanceOf:l,node:a,objectOf:l,oneOf:l,oneOfType:l,shape:l,exact:l,checkPropTypes:u,resetWarningCache:r};return c.PropTypes=c,c},os}var Hc;function Mz(){return Hc||(Hc=1,as.exports=Fz()()),as.exports}var Iz=Mz();const W=Wt(Iz),Gd=({chord:t})=>P.jsx("span",{className:"sb-chord",children:`${t} `});Gd.propTypes={chord:W.string.isRequired};var ss={exports:{}};var Lc;function _z(){return Lc||(Lc=1,(function(t){(function(){var r={}.hasOwnProperty;function u(){for(var c="",f=0;f<arguments.length;f++){var z=arguments[f];z&&(c=l(c,a(z)))}return c}function a(c){if(typeof c=="string"||typeof c=="number")return c;if(typeof c!="object")return"";if(Array.isArray(c))return u.apply(null,c);if(c.toString!==Object.prototype.toString&&!c.toString.toString().includes("[native code]"))return c.toString();var f="";for(var z in c)r.call(c,z)&&c[z]&&(f=l(f,z));return f}function l(c,f){return f?c?c+" "+f:c+f:c}t.exports?(u.default=u,t.exports=u):window.classNames=u})()})(ss)),ss.exports}var Jz=_z();const Me=Wt(Jz),xd=({song:t,chordsShown:r,starredCount:u})=>P.jsxs(P.Fragment,{children:[P.jsxs("div",{className:"row songtitle mt-1 mb-1",children:[P.jsxs("div",{className:Me("col-10",{"sb-starred-song":t.starred}),children:[t.number,". ",t.title]}),P.jsx("div",{className:"col-2 sb-star-info sb-lyrics",children:t.starred?`${t.starredNumber}/${u}`:P.jsx(P.Fragment,{children:" "})})]}),t.body.map(({lyrics:a,chords:l},c)=>P.jsxs("div",{className:"row",children:[P.jsx("div",{className:"col",children:a||P.jsx("br",{})}),r&&l.length>0&&P.jsx("div",{className:"col-4",children:l.map((f,z)=>P.jsx(Gd,{chord:f},z))})]},`songline${c}`))]});xd.propTypes={song:W.object.isRequired,chordsShown:W.bool.isRequired,starredCount:W.number.isRequired};function Wz(t,r){if(t==null)return{};var u={};for(var a in t)if({}.hasOwnProperty.call(t,a)){if(r.indexOf(a)!==-1)continue;u[a]=t[a]}return u}function ks(t,r){return ks=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(u,a){return u.__proto__=a,u},ks(t,r)}function Hz(t,r){t.prototype=Object.create(r.prototype),t.prototype.constructor=t,ks(t,r)}const Lz=["xxl","xl","lg","md","sm","xs"],Kz="xs",Fs=A.createContext({prefixes:{},breakpoints:Lz,minBreakpoint:Kz}),{Consumer:Xp,Provider:qp}=Fs;function An(t,r){const{prefixes:u}=A.useContext(Fs);return t||u[r]||r}function Uz(){const{dir:t}=A.useContext(Fs);return t==="rtl"}function sr(t){return t&&t.ownerDocument||document}function Zz(t){var r=sr(t);return r&&r.defaultView||window}function $z(t,r){return Zz(t).getComputedStyle(t,r)}var Vz=/([A-Z])/g;function Yz(t){return t.replace(Vz,"-$1").toLowerCase()}var Qz=/^ms-/;function Za(t){return Yz(t).replace(Qz,"-ms-")}var Xz=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;function qz(t){return!!(t&&Xz.test(t))}function En(t,r){var u="",a="";if(typeof r=="string")return t.style.getPropertyValue(Za(r))||$z(t).getPropertyValue(Za(r));Object.keys(r).forEach(function(l){var c=r[l];!c&&c!==0?t.style.removeProperty(Za(l)):qz(l)?a+=l+"("+c+") ":u+=Za(l)+": "+c+";"}),a&&(u+="transform: "+a+";"),t.style.cssText+=";"+u}const Kc={disabled:!1},Bd=ti.createContext(null);var ey=function(r){return r.scrollTop},Ft="unmounted",bn="exited",en="entering",vn="entered",bs="exiting",Oi=(function(t){Hz(r,t);function r(a,l){var c;c=t.call(this,a,l)||this;var f=l,z=f&&!f.isMounting?a.enter:a.appear,p;return c.appearStatus=null,a.in?z?(p=bn,c.appearStatus=en):p=vn:a.unmountOnExit||a.mountOnEnter?p=Ft:p=bn,c.state={status:p},c.nextCallback=null,c}r.getDerivedStateFromProps=function(l,c){var f=l.in;return f&&c.status===Ft?{status:bn}:null};var u=r.prototype;return u.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},u.componentDidUpdate=function(l){var c=null;if(l!==this.props){var f=this.state.status;this.props.in?f!==en&&f!==vn&&(c=en):(f===en||f===vn)&&(c=bs)}this.updateStatus(!1,c)},u.componentWillUnmount=function(){this.cancelNextCallback()},u.getTimeouts=function(){var l=this.props.timeout,c,f,z;return c=f=z=l,l!=null&&typeof l!="number"&&(c=l.exit,f=l.enter,z=l.appear!==void 0?l.appear:f),{exit:c,enter:f,appear:z}},u.updateStatus=function(l,c){if(l===void 0&&(l=!1),c!==null)if(this.cancelNextCallback(),c===en){if(this.props.unmountOnExit||this.props.mountOnEnter){var f=this.props.nodeRef?this.props.nodeRef.current:Dn.findDOMNode(this);f&&ey(f)}this.performEnter(l)}else this.performExit();else this.props.unmountOnExit&&this.state.status===bn&&this.setState({status:Ft})},u.performEnter=function(l){var c=this,f=this.props.enter,z=this.context?this.context.isMounting:l,p=this.props.nodeRef?[z]:[Dn.findDOMNode(this),z],g=p[0],k=p[1],T=this.getTimeouts(),E=z?T.appear:T.enter;if(!l&&!f||Kc.disabled){this.safeSetState({status:vn},function(){c.props.onEntered(g)});return}this.props.onEnter(g,k),this.safeSetState({status:en},function(){c.props.onEntering(g,k),c.onTransitionEnd(E,function(){c.safeSetState({status:vn},function(){c.props.onEntered(g,k)})})})},u.performExit=function(){var l=this,c=this.props.exit,f=this.getTimeouts(),z=this.props.nodeRef?void 0:Dn.findDOMNode(this);if(!c||Kc.disabled){this.safeSetState({status:bn},function(){l.props.onExited(z)});return}this.props.onExit(z),this.safeSetState({status:bs},function(){l.props.onExiting(z),l.onTransitionEnd(f.exit,function(){l.safeSetState({status:bn},function(){l.props.onExited(z)})})})},u.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},u.safeSetState=function(l,c){c=this.setNextCallback(c),this.setState(l,c)},u.setNextCallback=function(l){var c=this,f=!0;return this.nextCallback=function(z){f&&(f=!1,c.nextCallback=null,l(z))},this.nextCallback.cancel=function(){f=!1},this.nextCallback},u.onTransitionEnd=function(l,c){this.setNextCallback(c);var f=this.props.nodeRef?this.props.nodeRef.current:Dn.findDOMNode(this),z=l==null&&!this.props.addEndListener;if(!f||z){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var p=this.props.nodeRef?[this.nextCallback]:[f,this.nextCallback],g=p[0],k=p[1];this.props.addEndListener(g,k)}l!=null&&setTimeout(this.nextCallback,l)},u.render=function(){var l=this.state.status;if(l===Ft)return null;var c=this.props,f=c.children;c.in,c.mountOnEnter,c.unmountOnExit,c.appear,c.enter,c.exit,c.timeout,c.addEndListener,c.onEnter,c.onEntering,c.onEntered,c.onExit,c.onExiting,c.onExited,c.nodeRef;var z=Wz(c,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return ti.createElement(Bd.Provider,{value:null},typeof f=="function"?f(l,z):ti.cloneElement(ti.Children.only(f),z))},r})(ti.Component);Oi.contextType=Bd;Oi.propTypes={};function $n(){}Oi.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:$n,onEntering:$n,onEntered:$n,onExit:$n,onExiting:$n,onExited:$n};Oi.UNMOUNTED=Ft;Oi.EXITED=bn;Oi.ENTERING=en;Oi.ENTERED=vn;Oi.EXITING=bs;function iy(t){return t.code==="Escape"||t.keyCode===27}function ny(){const t=A.version.split(".");return{major:+t[0],minor:+t[1],patch:+t[2]}}function ur(t){if(!t||typeof t=="function")return null;const{major:r}=ny();return r>=19?t.props.ref:t.ref}const et=!!(typeof window<"u"&&window.document&&window.document.createElement);var vs=!1,Cs=!1;try{var us={get passive(){return vs=!0},get once(){return Cs=vs=!0}};et&&(window.addEventListener("test",us,us),window.removeEventListener("test",us,!0))}catch{}function Od(t,r,u,a){if(a&&typeof a!="boolean"&&!Cs){var l=a.once,c=a.capture,f=u;!Cs&&l&&(f=u.__once||function z(p){this.removeEventListener(r,z,c),u.call(this,p)},u.__once=f),t.addEventListener(r,f,vs?a:c)}t.addEventListener(r,u,a)}function Ds(t,r,u,a){var l=a&&typeof a!="boolean"?a.capture:a;t.removeEventListener(r,u,l),u.__once&&t.removeEventListener(r,u.__once,l)}function er(t,r,u,a){return Od(t,r,u,a),function(){Ds(t,r,u,a)}}function ty(t,r,u,a){if(a===void 0&&(a=!0),t){var l=document.createEvent("HTMLEvents");l.initEvent(r,u,a),t.dispatchEvent(l)}}function ay(t){var r=En(t,"transitionDuration")||"",u=r.indexOf("ms")===-1?1e3:1;return parseFloat(r)*u}function ry(t,r,u){u===void 0&&(u=5);var a=!1,l=setTimeout(function(){a||ty(t,"transitionend",!0)},r+u),c=er(t,"transitionend",function(){a=!0},{once:!0});return function(){clearTimeout(l),c()}}function Rd(t,r,u,a){u==null&&(u=ay(t)||0);var l=ry(t,u,a),c=er(t,"transitionend",r);return function(){l(),c()}}function Uc(t,r){const u=En(t,r)||"",a=u.indexOf("ms")===-1?1e3:1;return parseFloat(u)*a}function oy(t,r){const u=Uc(t,"transitionDuration"),a=Uc(t,"transitionDelay"),l=Rd(t,c=>{c.target===t&&(l(),r(c))},u+a)}function sy(t){t.offsetHeight}const Zc=t=>!t||typeof t=="function"?t:r=>{t.current=r};function uy(t,r){const u=Zc(t),a=Zc(r);return l=>{u&&u(l),a&&a(l)}}function Nd(t,r){return A.useMemo(()=>uy(t,r),[t,r])}function ly(t){return t&&"setState"in t?Dn.findDOMNode(t):t??null}const Fd=ti.forwardRef(({onEnter:t,onEntering:r,onEntered:u,onExit:a,onExiting:l,onExited:c,addEndListener:f,children:z,childRef:p,...g},k)=>{const T=A.useRef(null),E=Nd(T,p),M=X=>{E(ly(X))},_=X=>ee=>{X&&T.current&&X(T.current,ee)},Y=A.useCallback(_(t),[t]),$=A.useCallback(_(r),[r]),x=A.useCallback(_(u),[u]),V=A.useCallback(_(a),[a]),K=A.useCallback(_(l),[l]),Q=A.useCallback(_(c),[c]),te=A.useCallback(_(f),[f]);return P.jsx(Oi,{ref:k,...g,onEnter:Y,onEntered:x,onEntering:$,onExit:V,onExited:Q,onExiting:K,addEndListener:te,nodeRef:T,children:typeof z=="function"?(X,ee)=>z(X,{...ee,ref:M}):ti.cloneElement(z,{ref:M})})});Fd.displayName="TransitionWrapper";function cy(t){const r=A.useRef(t);return A.useEffect(()=>{r.current=t},[t]),r}function Ts(t){const r=cy(t);return A.useCallback(function(...u){return r.current&&r.current(...u)},[r])}const dy=(t=>A.forwardRef((r,u)=>P.jsx("div",{...r,ref:u,className:Me(r.className,t)})));function my(t){const r=A.useRef(t);return A.useEffect(()=>{r.current=t},[t]),r}function Cn(t){const r=my(t);return A.useCallback(function(...u){return r.current&&r.current(...u)},[r])}function fy(){const t=A.useRef(!0),r=A.useRef(()=>t.current);return A.useEffect(()=>(t.current=!0,()=>{t.current=!1}),[]),r.current}function zy(t){const r=A.useRef(null);return A.useEffect(()=>{r.current=t}),r.current}const yy=typeof global<"u"&&global.navigator&&global.navigator.product==="ReactNative",wy=typeof document<"u",$c=wy||yy?A.useLayoutEffect:A.useEffect,py=["as","disabled"];function hy(t,r){if(t==null)return{};var u={};for(var a in t)if({}.hasOwnProperty.call(t,a)){if(r.indexOf(a)>=0)continue;u[a]=t[a]}return u}function gy(t){return!t||t.trim()==="#"}function Md({tagName:t,disabled:r,href:u,target:a,rel:l,role:c,onClick:f,tabIndex:z=0,type:p}){t||(u!=null||a!=null||l!=null?t="a":t="button");const g={tagName:t};if(t==="button")return[{type:p||"button",disabled:r},g];const k=E=>{if((r||t==="a"&&gy(u))&&E.preventDefault(),r){E.stopPropagation();return}f?.(E)},T=E=>{E.key===" "&&(E.preventDefault(),k(E))};return t==="a"&&(u||(u="#"),r&&(u=void 0)),[{role:c??"button",disabled:void 0,tabIndex:r?void 0:z,href:u,target:t==="a"?a:void 0,"aria-disabled":r||void 0,rel:t==="a"?l:void 0,onClick:k,onKeyDown:T},g]}const jy=A.forwardRef((t,r)=>{let{as:u,disabled:a}=t,l=hy(t,py);const[c,{tagName:f}]=Md(Object.assign({tagName:u,disabled:a},l));return P.jsx(f,Object.assign({},l,c,{ref:r}))});jy.displayName="Button";const ky={[en]:"show",[vn]:"show"},Ms=A.forwardRef(({className:t,children:r,transitionClasses:u={},onEnter:a,...l},c)=>{const f={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,...l},z=A.useCallback((p,g)=>{sy(p),a?.(p,g)},[a]);return P.jsx(Fd,{ref:c,addEndListener:oy,...f,onEnter:z,childRef:ur(r),children:(p,g)=>A.cloneElement(r,{...g,className:Me("fade",t,r.props.className,ky[p],u[p])})})});Ms.displayName="Fade";var ls={exports:{}},cs,Vc;function by(){if(Vc)return cs;Vc=1;var t="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return cs=t,cs}var ds,Yc;function vy(){if(Yc)return ds;Yc=1;var t=by();function r(){}function u(){}return u.resetWarningCache=r,ds=function(){function a(f,z,p,g,k,T){if(T!==t){var E=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw E.name="Invariant Violation",E}}a.isRequired=a;function l(){return a}var c={array:a,bigint:a,bool:a,func:a,number:a,object:a,string:a,symbol:a,any:a,arrayOf:l,element:a,elementType:a,instanceOf:l,node:a,objectOf:l,oneOf:l,oneOfType:l,shape:l,exact:l,checkPropTypes:u,resetWarningCache:r};return c.PropTypes=c,c},ds}var Qc;function Cy(){return Qc||(Qc=1,ls.exports=vy()()),ls.exports}var Dy=Cy();const ms=Wt(Dy),Ty={"aria-label":ms.string,onClick:ms.func,variant:ms.oneOf(["white"])},Is=A.forwardRef(({className:t,variant:r,"aria-label":u="Close",...a},l)=>P.jsx("button",{ref:l,type:"button",className:Me("btn-close",r&&`btn-close-${r}`,t),"aria-label":u,...a}));Is.displayName="CloseButton";Is.propTypes=Ty;const Qn=A.forwardRef(({as:t,bsPrefix:r,variant:u="primary",size:a,active:l=!1,disabled:c=!1,className:f,...z},p)=>{const g=An(r,"btn"),[k,{tagName:T}]=Md({tagName:t,disabled:c,...z}),E=T;return P.jsx(E,{...k,...z,ref:p,disabled:c,className:Me(f,g,l&&"active",u&&`${g}-${u}`,a&&`${g}-${a}`,z.href&&c&&"disabled")})});Qn.displayName="Button";function Ey(t){const r=A.useRef(t);return r.current=t,r}function Ay(t){const r=Ey(t);A.useEffect(()=>()=>r.current(),[])}var Py=Function.prototype.bind.call(Function.prototype.call,[].slice);function Vn(t,r){return Py(t.querySelectorAll(r))}function Xc(t,r){if(t.contains)return t.contains(r);if(t.compareDocumentPosition)return t===r||!!(t.compareDocumentPosition(r)&16)}const Sy="data-rr-ui-";function Gy(t){return`${Sy}${t}`}const Id=A.createContext(et?window:void 0);Id.Provider;function _s(){return A.useContext(Id)}const qc=t=>!t||typeof t=="function"?t:r=>{t.current=r};function xy(t,r){const u=qc(t),a=qc(r);return l=>{u&&u(l),a&&a(l)}}function Js(t,r){return A.useMemo(()=>xy(t,r),[t,r])}var $a;function ed(t){if((!$a&&$a!==0||t)&&et){var r=document.createElement("div");r.style.position="absolute",r.style.top="-9999px",r.style.width="50px",r.style.height="50px",r.style.overflow="scroll",document.body.appendChild(r),$a=r.offsetWidth-r.clientWidth,document.body.removeChild(r)}return $a}function By(){return A.useState(null)}function fs(t){t===void 0&&(t=sr());try{var r=t.activeElement;return!r||!r.nodeName?null:r}catch{return t.body}}function Oy(t){const r=A.useRef(t);return r.current=t,r}function Ry(t){const r=Oy(t);A.useEffect(()=>()=>r.current(),[])}function Ny(t=document){const r=t.defaultView;return Math.abs(r.innerWidth-t.documentElement.clientWidth)}const id=Gy("modal-open");class Ws{constructor({ownerDocument:r,handleContainerOverflow:u=!0,isRTL:a=!1}={}){this.handleContainerOverflow=u,this.isRTL=a,this.modals=[],this.ownerDocument=r}getScrollbarWidth(){return Ny(this.ownerDocument)}getElement(){return(this.ownerDocument||document).body}setModalAttributes(r){}removeModalAttributes(r){}setContainerStyle(r){const u={overflow:"hidden"},a=this.isRTL?"paddingLeft":"paddingRight",l=this.getElement();r.style={overflow:l.style.overflow,[a]:l.style[a]},r.scrollBarWidth&&(u[a]=`${parseInt(En(l,a)||"0",10)+r.scrollBarWidth}px`),l.setAttribute(id,""),En(l,u)}reset(){[...this.modals].forEach(r=>this.remove(r))}removeContainerStyle(r){const u=this.getElement();u.removeAttribute(id),Object.assign(u.style,r.style)}add(r){let u=this.modals.indexOf(r);return u!==-1||(u=this.modals.length,this.modals.push(r),this.setModalAttributes(r),u!==0)||(this.state={scrollBarWidth:this.getScrollbarWidth(),style:{}},this.handleContainerOverflow&&this.setContainerStyle(this.state)),u}remove(r){const u=this.modals.indexOf(r);u!==-1&&(this.modals.splice(u,1),!this.modals.length&&this.handleContainerOverflow&&this.removeContainerStyle(this.state),this.removeModalAttributes(r))}isTopModal(r){return!!this.modals.length&&this.modals[this.modals.length-1]===r}}const zs=(t,r)=>et?t==null?(r||sr()).body:(typeof t=="function"&&(t=t()),t&&"current"in t&&(t=t.current),t&&("nodeType"in t||t.getBoundingClientRect)?t:null):null;function Fy(t,r){const u=_s(),[a,l]=A.useState(()=>zs(t,u?.document));if(!a){const c=zs(t);c&&l(c)}return A.useEffect(()=>{},[r,a]),A.useEffect(()=>{const c=zs(t);c!==a&&l(c)},[t,a]),a}function My({children:t,in:r,onExited:u,mountOnEnter:a,unmountOnExit:l}){const c=A.useRef(null),f=A.useRef(r),z=Cn(u);A.useEffect(()=>{r?f.current=!0:z(c.current)},[r,z]);const p=Js(c,ur(t)),g=A.cloneElement(t,{ref:p});return r?g:l||!f.current&&a?null:g}const Iy=["onEnter","onEntering","onEntered","onExit","onExiting","onExited","addEndListener","children"];function _y(t,r){if(t==null)return{};var u={};for(var a in t)if({}.hasOwnProperty.call(t,a)){if(r.indexOf(a)>=0)continue;u[a]=t[a]}return u}function Jy(t){let{onEnter:r,onEntering:u,onEntered:a,onExit:l,onExiting:c,onExited:f,addEndListener:z,children:p}=t,g=_y(t,Iy);const k=A.useRef(null),T=Js(k,ur(p)),E=Q=>te=>{Q&&k.current&&Q(k.current,te)},M=A.useCallback(E(r),[r]),_=A.useCallback(E(u),[u]),Y=A.useCallback(E(a),[a]),$=A.useCallback(E(l),[l]),x=A.useCallback(E(c),[c]),V=A.useCallback(E(f),[f]),K=A.useCallback(E(z),[z]);return Object.assign({},g,{nodeRef:k},r&&{onEnter:M},u&&{onEntering:_},a&&{onEntered:Y},l&&{onExit:$},c&&{onExiting:x},f&&{onExited:V},z&&{addEndListener:K},{children:typeof p=="function"?(Q,te)=>p(Q,Object.assign({},te,{ref:T})):A.cloneElement(p,{ref:T})})}const Wy=["component"];function Hy(t,r){if(t==null)return{};var u={};for(var a in t)if({}.hasOwnProperty.call(t,a)){if(r.indexOf(a)>=0)continue;u[a]=t[a]}return u}const Ly=A.forwardRef((t,r)=>{let{component:u}=t,a=Hy(t,Wy);const l=Jy(a);return P.jsx(u,Object.assign({ref:r},l))});function Ky({in:t,onTransition:r}){const u=A.useRef(null),a=A.useRef(!0),l=Cn(r);return $c(()=>{if(!u.current)return;let c=!1;return l({in:t,element:u.current,initial:a.current,isStale:()=>c}),()=>{c=!0}},[t,l]),$c(()=>(a.current=!1,()=>{a.current=!0}),[]),u}function Uy({children:t,in:r,onExited:u,onEntered:a,transition:l}){const[c,f]=A.useState(!r);r&&c&&f(!1);const z=Ky({in:!!r,onTransition:g=>{const k=()=>{g.isStale()||(g.in?a?.(g.element,g.initial):(f(!0),u?.(g.element)))};Promise.resolve(l(g)).then(k,T=>{throw g.in||f(!0),T})}}),p=Js(z,ur(t));return c&&!r?null:A.cloneElement(t,{ref:p})}function nd(t,r,u){return t?P.jsx(Ly,Object.assign({},u,{component:t})):r?P.jsx(Uy,Object.assign({},u,{transition:r})):P.jsx(My,Object.assign({},u))}const Zy=["show","role","className","style","children","backdrop","keyboard","onBackdropClick","onEscapeKeyDown","transition","runTransition","backdropTransition","runBackdropTransition","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","renderDialog","renderBackdrop","manager","container","onShow","onHide","onExit","onExited","onExiting","onEnter","onEntering","onEntered"];function $y(t,r){if(t==null)return{};var u={};for(var a in t)if({}.hasOwnProperty.call(t,a)){if(r.indexOf(a)>=0)continue;u[a]=t[a]}return u}let ys;function Vy(t){return ys||(ys=new Ws({ownerDocument:t?.document})),ys}function Yy(t){const r=_s(),u=t||Vy(r),a=A.useRef({dialog:null,backdrop:null});return Object.assign(a.current,{add:()=>u.add(a.current),remove:()=>u.remove(a.current),isTopModal:()=>u.isTopModal(a.current),setDialogRef:A.useCallback(l=>{a.current.dialog=l},[]),setBackdropRef:A.useCallback(l=>{a.current.backdrop=l},[])})}const _d=A.forwardRef((t,r)=>{let{show:u=!1,role:a="dialog",className:l,style:c,children:f,backdrop:z=!0,keyboard:p=!0,onBackdropClick:g,onEscapeKeyDown:k,transition:T,runTransition:E,backdropTransition:M,runBackdropTransition:_,autoFocus:Y=!0,enforceFocus:$=!0,restoreFocus:x=!0,restoreFocusOptions:V,renderDialog:K,renderBackdrop:Q=re=>P.jsx("div",Object.assign({},re)),manager:te,container:X,onShow:ee,onHide:se=()=>{},onExit:pe,onExited:be,onExiting:he,onEnter:ve,onEntering:Ue,onEntered:ze}=t,ye=$y(t,Zy);const Ee=_s(),Ae=Fy(X),ce=Yy(te),Ye=fy(),Oe=zy(u),[xe,_e]=A.useState(!u),ge=A.useRef(null);A.useImperativeHandle(r,()=>ce,[ce]),et&&!Oe&&u&&(ge.current=fs(Ee?.document)),u&&xe&&_e(!1);const S=Cn(()=>{if(ce.add(),ae.current=er(document,"keydown",H),U.current=er(document,"focus",()=>setTimeout(C),!0),ee&&ee(),Y){var re,Ri;const rn=fs((re=(Ri=ce.dialog)==null?void 0:Ri.ownerDocument)!=null?re:Ee?.document);ce.dialog&&rn&&!Xc(ce.dialog,rn)&&(ge.current=rn,ce.dialog.focus())}}),w=Cn(()=>{if(ce.remove(),ae.current==null||ae.current(),U.current==null||U.current(),x){var re;(re=ge.current)==null||re.focus==null||re.focus(V),ge.current=null}});A.useEffect(()=>{!u||!Ae||S()},[u,Ae,S]),A.useEffect(()=>{xe&&w()},[xe,w]),Ry(()=>{w()});const C=Cn(()=>{if(!$||!Ye()||!ce.isTopModal())return;const re=fs(Ee?.document);ce.dialog&&re&&!Xc(ce.dialog,re)&&ce.dialog.focus()}),O=Cn(re=>{re.target===re.currentTarget&&(g?.(re),z===!0&&se())}),H=Cn(re=>{p&&iy(re)&&ce.isTopModal()&&(k?.(re),re.defaultPrevented||se())}),U=A.useRef(),ae=A.useRef(),ie=(...re)=>{_e(!0),be?.(...re)};if(!Ae)return null;const J=Object.assign({role:a,ref:ce.setDialogRef,"aria-modal":a==="dialog"?!0:void 0},ye,{style:c,className:l,tabIndex:-1});let je=K?K(J):P.jsx("div",Object.assign({},J,{children:A.cloneElement(f,{role:"document"})}));je=nd(T,E,{unmountOnExit:!0,mountOnEnter:!0,appear:!0,in:!!u,onExit:pe,onExiting:he,onExited:ie,onEnter:ve,onEntering:Ue,onEntered:ze,children:je});let Se=null;return z&&(Se=Q({ref:ce.setBackdropRef,onClick:O}),Se=nd(M,_,{in:!!u,appear:!0,mountOnEnter:!0,unmountOnExit:!0,children:Se})),P.jsx(P.Fragment,{children:Dn.createPortal(P.jsxs(P.Fragment,{children:[Se,je]}),Ae)})});_d.displayName="Modal";const Qy=Object.assign(_d,{Manager:Ws});function Xy(t,r){return t.classList?t.classList.contains(r):(" "+(t.className.baseVal||t.className)+" ").indexOf(" "+r+" ")!==-1}function qy(t,r){t.classList?t.classList.add(r):Xy(t,r)||(typeof t.className=="string"?t.className=t.className+" "+r:t.setAttribute("class",(t.className&&t.className.baseVal||"")+" "+r))}function td(t,r){return t.replace(new RegExp("(^|\\s)"+r+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function ew(t,r){t.classList?t.classList.remove(r):typeof t.className=="string"?t.className=td(t.className,r):t.setAttribute("class",td(t.className&&t.className.baseVal||"",r))}const Yn={FIXED_CONTENT:".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",STICKY_CONTENT:".sticky-top",NAVBAR_TOGGLER:".navbar-toggler"};class iw extends Ws{adjustAndStore(r,u,a){const l=u.style[r];u.dataset[r]=l,En(u,{[r]:`${parseFloat(En(u,r))+a}px`})}restore(r,u){const a=u.dataset[r];a!==void 0&&(delete u.dataset[r],En(u,{[r]:a}))}setContainerStyle(r){super.setContainerStyle(r);const u=this.getElement();if(qy(u,"modal-open"),!r.scrollBarWidth)return;const a=this.isRTL?"paddingLeft":"paddingRight",l=this.isRTL?"marginLeft":"marginRight";Vn(u,Yn.FIXED_CONTENT).forEach(c=>this.adjustAndStore(a,c,r.scrollBarWidth)),Vn(u,Yn.STICKY_CONTENT).forEach(c=>this.adjustAndStore(l,c,-r.scrollBarWidth)),Vn(u,Yn.NAVBAR_TOGGLER).forEach(c=>this.adjustAndStore(l,c,r.scrollBarWidth))}removeContainerStyle(r){super.removeContainerStyle(r);const u=this.getElement();ew(u,"modal-open");const a=this.isRTL?"paddingLeft":"paddingRight",l=this.isRTL?"marginLeft":"marginRight";Vn(u,Yn.FIXED_CONTENT).forEach(c=>this.restore(a,c)),Vn(u,Yn.STICKY_CONTENT).forEach(c=>this.restore(l,c)),Vn(u,Yn.NAVBAR_TOGGLER).forEach(c=>this.restore(l,c))}}let ws;function nw(t){return ws||(ws=new iw(t)),ws}const Jd=A.forwardRef(({className:t,bsPrefix:r,as:u="div",...a},l)=>(r=An(r,"modal-body"),P.jsx(u,{ref:l,className:Me(t,r),...a})));Jd.displayName="ModalBody";const Wd=A.createContext({onHide(){}}),Hs=A.forwardRef(({bsPrefix:t,className:r,contentClassName:u,centered:a,size:l,fullscreen:c,children:f,scrollable:z,...p},g)=>{t=An(t,"modal");const k=`${t}-dialog`,T=typeof c=="string"?`${t}-fullscreen-${c}`:`${t}-fullscreen`;return P.jsx("div",{...p,ref:g,className:Me(k,r,l&&`${t}-${l}`,a&&`${k}-centered`,z&&`${k}-scrollable`,c&&T),children:P.jsx("div",{className:Me(`${t}-content`,u),children:f})})});Hs.displayName="ModalDialog";const Hd=A.forwardRef(({className:t,bsPrefix:r,as:u="div",...a},l)=>(r=An(r,"modal-footer"),P.jsx(u,{ref:l,className:Me(t,r),...a})));Hd.displayName="ModalFooter";const Ld=A.forwardRef(({closeLabel:t="Close",closeVariant:r,closeButton:u=!1,onHide:a,children:l,...c},f)=>{const z=A.useContext(Wd),p=Ts(()=>{z?.onHide(),a?.()});return P.jsxs("div",{ref:f,...c,children:[l,u&&P.jsx(Is,{"aria-label":t,variant:r,onClick:p})]})});Ld.displayName="AbstractModalHeader";const Kd=A.forwardRef(({bsPrefix:t,className:r,closeLabel:u="Close",closeButton:a=!1,...l},c)=>(t=An(t,"modal-header"),P.jsx(Ld,{ref:c,...l,className:Me(r,t),closeLabel:u,closeButton:a})));Kd.displayName="ModalHeader";const tw=dy("h4"),Ud=A.forwardRef(({className:t,bsPrefix:r,as:u=tw,...a},l)=>(r=An(r,"modal-title"),P.jsx(u,{ref:l,className:Me(t,r),...a})));Ud.displayName="ModalTitle";function aw(t){return P.jsx(Ms,{...t,timeout:null})}function rw(t){return P.jsx(Ms,{...t,timeout:null})}const Zd=A.forwardRef(({bsPrefix:t,className:r,style:u,dialogClassName:a,contentClassName:l,children:c,dialogAs:f=Hs,"data-bs-theme":z,"aria-labelledby":p,"aria-describedby":g,"aria-label":k,show:T=!1,animation:E=!0,backdrop:M=!0,keyboard:_=!0,onEscapeKeyDown:Y,onShow:$,onHide:x,container:V,autoFocus:K=!0,enforceFocus:Q=!0,restoreFocus:te=!0,restoreFocusOptions:X,onEntered:ee,onExit:se,onExiting:pe,onEnter:be,onEntering:he,onExited:ve,backdropClassName:Ue,manager:ze,...ye},Ee)=>{const[Ae,ce]=A.useState({}),[Ye,Oe]=A.useState(!1),xe=A.useRef(!1),_e=A.useRef(!1),ge=A.useRef(null),[S,w]=By(),C=Nd(Ee,w),O=Ts(x),H=Uz();t=An(t,"modal");const U=A.useMemo(()=>({onHide:O}),[O]);function ae(){return ze||nw({isRTL:H})}function ie(le){if(!et)return;const zi=ae().getScrollbarWidth()>0,on=le.scrollHeight>sr(le).documentElement.clientHeight;ce({paddingRight:zi&&!on?ed():void 0,paddingLeft:!zi&&on?ed():void 0})}const J=Ts(()=>{S&&ie(S.dialog)});Ay(()=>{Ds(window,"resize",J),ge.current==null||ge.current()});const je=()=>{xe.current=!0},Se=le=>{xe.current&&S&&le.target===S.dialog&&(_e.current=!0),xe.current=!1},re=()=>{Oe(!0),ge.current=Rd(S.dialog,()=>{Oe(!1)})},Ri=le=>{le.target===le.currentTarget&&re()},rn=le=>{if(M==="static"){Ri(le);return}if(_e.current||le.target!==le.currentTarget){_e.current=!1;return}x?.()},Je=le=>{_?Y?.(le):(le.preventDefault(),M==="static"&&re())},Pn=(le,zi)=>{le&&ie(le),be?.(le,zi)},Ni=le=>{ge.current==null||ge.current(),se?.(le)},vi=(le,zi)=>{he?.(le,zi),Od(window,"resize",J)},Lt=le=>{le&&(le.style.display=""),ve?.(le),Ds(window,"resize",J)},Sn=A.useCallback(le=>P.jsx("div",{...le,className:Me(`${t}-backdrop`,Ue,!E&&"show")}),[E,Ue,t]),it={...u,...Ae};it.display="block";const Kt=le=>P.jsx("div",{role:"dialog",...le,style:it,className:Me(r,t,Ye&&`${t}-static`,!E&&"show"),onClick:M?rn:void 0,onMouseUp:Se,"data-bs-theme":z,"aria-label":k,"aria-labelledby":p,"aria-describedby":g,children:P.jsx(f,{...ye,onMouseDown:je,className:a,contentClassName:l,children:c})});return P.jsx(Wd.Provider,{value:U,children:P.jsx(Qy,{show:T,ref:C,backdrop:M,container:V,keyboard:!0,autoFocus:K,enforceFocus:Q,restoreFocus:te,restoreFocusOptions:X,onEscapeKeyDown:Je,onShow:$,onHide:x,onEnter:Pn,onEntering:vi,onEntered:ee,onExit:Ni,onExiting:pe,onExited:Lt,manager:ae(),transition:E?aw:void 0,backdropTransition:E?rw:void 0,renderBackdrop:Sn,renderDialog:Kt})})});Zd.displayName="Modal";const Va=Object.assign(Zd,{Body:Jd,Header:Kd,Title:Ud,Footer:Hd,Dialog:Hs,TRANSITION_DURATION:300,BACKDROP_TRANSITION_DURATION:150}),_t=({mode:t,large:r,onClick:u})=>P.jsx("i",{className:Me("fas","fa-star","sb-star",`sb-star-${t}`,{"fa-lg":!!r}),onClick:u});_t.propTypes={mode:W.string.isRequired,large:W.bool,onClick:W.func};const $d=A.memo(({song:t,chooseSong:r,onlyStarred:u})=>{const a=()=>r(t.number),l=u?t.selected?"selected":"starred":t.starred?"starred":"plain",c=u?t.toggleSelected:t.toggleStarred;return P.jsxs("span",{className:Me("sb-menu-songtitle",{"sb-starred-song":t.starred}),children:[P.jsxs("span",{onClick:c,children:[P.jsx(_t,{mode:l})," ",P.jsxs("span",{className:Me({"sb-chosen-song":t.chosen}),children:[t.number,". "]})]}),P.jsx("a",{href:"#",onClick:a,className:Me("text-reset",{"sb-chosen-song":t.chosen}),children:t.title})]})});$d.propTypes={song:W.object.isRequired,chooseSong:W.func.isRequired,onlyStarred:W.bool.isRequired};function It(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?It=function(r){return typeof r}:It=function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},It(t)}function ow(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}function sw(t,r){for(var u=0;u<r.length;u++){var a=r[u];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function uw(t,r,u){return r&&sw(t.prototype,r),t}function lw(t,r,u){return r in t?Object.defineProperty(t,r,{value:u,enumerable:!0,configurable:!0,writable:!0}):t[r]=u,t}function me(t){for(var r=1;r<arguments.length;r++){var u=arguments[r]!=null?arguments[r]:{},a=Object.keys(u);typeof Object.getOwnPropertySymbols=="function"&&(a=a.concat(Object.getOwnPropertySymbols(u).filter(function(l){return Object.getOwnPropertyDescriptor(u,l).enumerable}))),a.forEach(function(l){lw(t,l,u[l])})}return t}function Vd(t,r){return cw(t)||dw(t,r)||mw()}function cw(t){if(Array.isArray(t))return t}function dw(t,r){var u=[],a=!0,l=!1,c=void 0;try{for(var f=t[Symbol.iterator](),z;!(a=(z=f.next()).done)&&(u.push(z.value),!(r&&u.length===r));a=!0);}catch(p){l=!0,c=p}finally{try{!a&&f.return!=null&&f.return()}finally{if(l)throw c}}return u}function mw(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}var ad=function(){},Ls={},Yd={},fw=null,Qd={mark:ad,measure:ad};try{typeof window<"u"&&(Ls=window),typeof document<"u"&&(Yd=document),typeof MutationObserver<"u"&&(fw=MutationObserver),typeof performance<"u"&&(Qd=performance)}catch{}var zw=Ls.navigator||{},rd=zw.userAgent,od=rd===void 0?"":rd,lr=Ls,Ke=Yd,Ya=Qd;lr.document;var Ks=!!Ke.documentElement&&!!Ke.head&&typeof Ke.addEventListener=="function"&&typeof Ke.createElement=="function";~od.indexOf("MSIE")||~od.indexOf("Trident/");var xi="___FONT_AWESOME___",Xd="fa",qd="svg-inline--fa",yw="data-fa-i2svg";(function(){try{return!0}catch{return!1}})();var ps={GROUP:"group",PRIMARY:"primary",SECONDARY:"secondary"},em=lr.FontAwesomeConfig||{};function ww(t){var r=Ke.querySelector("script["+t+"]");if(r)return r.getAttribute(t)}function pw(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(Ke&&typeof Ke.querySelector=="function"){var hw=[["data-family-prefix","familyPrefix"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];hw.forEach(function(t){var r=Vd(t,2),u=r[0],a=r[1],l=pw(ww(u));l!=null&&(em[a]=l)})}var gw={familyPrefix:Xd,replacementClass:qd,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},Es=me({},gw,em);Es.autoReplaceSvg||(Es.observeMutations=!1);var ai=me({},Es);lr.FontAwesomeConfig=ai;var Bi=lr||{};Bi[xi]||(Bi[xi]={});Bi[xi].styles||(Bi[xi].styles={});Bi[xi].hooks||(Bi[xi].hooks={});Bi[xi].shims||(Bi[xi].shims=[]);var bi=Bi[xi],jw=[],kw=function t(){Ke.removeEventListener("DOMContentLoaded",t),As=1,jw.map(function(r){return r()})},As=!1;Ks&&(As=(Ke.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Ke.readyState),As||Ke.addEventListener("DOMContentLoaded",kw));var Us="pending",im="settled",ir="fulfilled",nr="rejected",bw=function(){},nm=typeof global<"u"&&typeof global.process<"u"&&typeof global.process.emit=="function",vw=typeof setImmediate>"u"?setTimeout:setImmediate,Mt=[],Ps;function Cw(){for(var t=0;t<Mt.length;t++)Mt[t][0](Mt[t][1]);Mt=[],Ps=!1}function tr(t,r){Mt.push([t,r]),Ps||(Ps=!0,vw(Cw,0))}function Dw(t,r){function u(l){Zs(r,l)}function a(l){Jt(r,l)}try{t(u,a)}catch(l){a(l)}}function tm(t){var r=t.owner,u=r._state,a=r._data,l=t[u],c=t.then;if(typeof l=="function"){u=ir;try{a=l(a)}catch(f){Jt(c,f)}}am(c,a)||(u===ir&&Zs(c,a),u===nr&&Jt(c,a))}function am(t,r){var u;try{if(t===r)throw new TypeError("A promises callback cannot return that same promise.");if(r&&(typeof r=="function"||It(r)==="object")){var a=r.then;if(typeof a=="function")return a.call(r,function(l){u||(u=!0,r===l?rm(t,l):Zs(t,l))},function(l){u||(u=!0,Jt(t,l))}),!0}}catch(l){return u||Jt(t,l),!0}return!1}function Zs(t,r){(t===r||!am(t,r))&&rm(t,r)}function rm(t,r){t._state===Us&&(t._state=im,t._data=r,tr(Tw,t))}function Jt(t,r){t._state===Us&&(t._state=im,t._data=r,tr(Ew,t))}function om(t){t._then=t._then.forEach(tm)}function Tw(t){t._state=ir,om(t)}function Ew(t){t._state=nr,om(t),!t._handled&&nm&&global.process.emit("unhandledRejection",t._data,t)}function Aw(t){global.process.emit("rejectionHandled",t)}function li(t){if(typeof t!="function")throw new TypeError("Promise resolver "+t+" is not a function");if(!(this instanceof li))throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");this._then=[],Dw(t,this)}li.prototype={constructor:li,_state:Us,_then:null,_data:void 0,_handled:!1,then:function(r,u){var a={owner:this,then:new this.constructor(bw),fulfilled:r,rejected:u};return(u||r)&&!this._handled&&(this._handled=!0,this._state===nr&&nm&&tr(Aw,this)),this._state===ir||this._state===nr?tr(tm,a):this._then.push(a),a.then},catch:function(r){return this.then(null,r)}};li.all=function(t){if(!Array.isArray(t))throw new TypeError("You must pass an array to Promise.all().");return new li(function(r,u){var a=[],l=0;function c(p){return l++,function(g){a[p]=g,--l||r(a)}}for(var f=0,z;f<t.length;f++)z=t[f],z&&typeof z.then=="function"?z.then(c(f),u):a[f]=z;l||r(a)})};li.race=function(t){if(!Array.isArray(t))throw new TypeError("You must pass an array to Promise.race().");return new li(function(r,u){for(var a=0,l;a<t.length;a++)l=t[a],l&&typeof l.then=="function"?l.then(r,u):r(l)})};li.resolve=function(t){return t&&It(t)==="object"&&t.constructor===li?t:new li(function(r){r(t)})};li.reject=function(t){return new li(function(r,u){u(t)})};var Xn={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Pw(t){if(!(!t||!Ks)){var r=Ke.createElement("style");r.setAttribute("type","text/css"),r.innerHTML=t;for(var u=Ke.head.childNodes,a=null,l=u.length-1;l>-1;l--){var c=u[l],f=(c.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(f)>-1&&(a=c)}return Ke.head.insertBefore(r,a),t}}var Sw="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function ar(){for(var t=12,r="";t-- >0;)r+=Sw[Math.random()*62|0];return r}function sm(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Gw(t){return Object.keys(t||{}).reduce(function(r,u){return r+"".concat(u,'="').concat(sm(t[u]),'" ')},"").trim()}function um(t){return Object.keys(t||{}).reduce(function(r,u){return r+"".concat(u,": ").concat(t[u],";")},"")}function lm(t){return t.size!==Xn.size||t.x!==Xn.x||t.y!==Xn.y||t.rotate!==Xn.rotate||t.flipX||t.flipY}function cm(t){var r=t.transform,u=t.containerWidth,a=t.iconWidth,l={transform:"translate(".concat(u/2," 256)")},c="translate(".concat(r.x*32,", ").concat(r.y*32,") "),f="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),z="rotate(".concat(r.rotate," 0 0)"),p={transform:"".concat(c," ").concat(f," ").concat(z)},g={transform:"translate(".concat(a/2*-1," -256)")};return{outer:l,inner:p,path:g}}var hs={x:0,y:0,width:"100%",height:"100%"};function sd(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||r)&&(t.attributes.fill="black"),t}function xw(t){return t.tag==="g"?t.children:[t]}function Bw(t){var r=t.children,u=t.attributes,a=t.main,l=t.mask,c=t.maskId,f=t.transform,z=a.width,p=a.icon,g=l.width,k=l.icon,T=cm({transform:f,containerWidth:g,iconWidth:z}),E={tag:"rect",attributes:me({},hs,{fill:"white"})},M=p.children?{children:p.children.map(sd)}:{},_={tag:"g",attributes:me({},T.inner),children:[sd(me({tag:p.tag,attributes:me({},p.attributes,T.path)},M))]},Y={tag:"g",attributes:me({},T.outer),children:[_]},$="mask-".concat(c||ar()),x="clip-".concat(c||ar()),V={tag:"mask",attributes:me({},hs,{id:$,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[E,Y]},K={tag:"defs",children:[{tag:"clipPath",attributes:{id:x},children:xw(k)},V]};return r.push(K,{tag:"rect",attributes:me({fill:"currentColor","clip-path":"url(#".concat(x,")"),mask:"url(#".concat($,")")},hs)}),{children:r,attributes:u}}function Ow(t){var r=t.children,u=t.attributes,a=t.main,l=t.transform,c=t.styles,f=um(c);if(f.length>0&&(u.style=f),lm(l)){var z=cm({transform:l,containerWidth:a.width,iconWidth:a.width});r.push({tag:"g",attributes:me({},z.outer),children:[{tag:"g",attributes:me({},z.inner),children:[{tag:a.icon.tag,children:a.icon.children,attributes:me({},a.icon.attributes,z.path)}]}]})}else r.push(a.icon);return{children:r,attributes:u}}function Rw(t){var r=t.children,u=t.main,a=t.mask,l=t.attributes,c=t.styles,f=t.transform;if(lm(f)&&u.found&&!a.found){var z=u.width,p=u.height,g={x:z/p/2,y:.5};l.style=um(me({},c,{"transform-origin":"".concat(g.x+f.x/16,"em ").concat(g.y+f.y/16,"em")}))}return[{tag:"svg",attributes:l,children:r}]}function Nw(t){var r=t.prefix,u=t.iconName,a=t.children,l=t.attributes,c=t.symbol,f=c===!0?"".concat(r,"-").concat(ai.familyPrefix,"-").concat(u):c;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:me({},l,{id:f}),children:a}]}]}function Fw(t){var r=t.icons,u=r.main,a=r.mask,l=t.prefix,c=t.iconName,f=t.transform,z=t.symbol,p=t.title,g=t.maskId,k=t.titleId,T=t.extra,E=t.watchable,M=E===void 0?!1:E,_=a.found?a:u,Y=_.width,$=_.height,x=l==="fak",V=x?"":"fa-w-".concat(Math.ceil(Y/$*16)),K=[ai.replacementClass,c?"".concat(ai.familyPrefix,"-").concat(c):"",V].filter(function(be){return T.classes.indexOf(be)===-1}).filter(function(be){return be!==""||!!be}).concat(T.classes).join(" "),Q={children:[],attributes:me({},T.attributes,{"data-prefix":l,"data-icon":c,class:K,role:T.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(Y," ").concat($)})},te=x&&!~T.classes.indexOf("fa-fw")?{width:"".concat(Y/$*16*.0625,"em")}:{};M&&(Q.attributes[yw]=""),p&&Q.children.push({tag:"title",attributes:{id:Q.attributes["aria-labelledby"]||"title-".concat(k||ar())},children:[p]});var X=me({},Q,{prefix:l,iconName:c,main:u,mask:a,maskId:g,transform:f,symbol:z,styles:me({},te,T.styles)}),ee=a.found&&u.found?Bw(X):Ow(X),se=ee.children,pe=ee.attributes;return X.children=se,X.attributes=pe,z?Nw(X):Rw(X)}ai.measurePerformance&&Ya&&Ya.mark&&Ya.measure;var gs=function(r,u,a,l){var c=Object.keys(r),f=c.length,z=u,p,g,k;for(a===void 0?(p=1,k=r[c[0]]):(p=0,k=a);p<f;p++)g=c[p],k=z(k,r[g],g,r);return k};function dm(t,r){var u=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=u.skipHooks,l=a===void 0?!1:a,c=Object.keys(r).reduce(function(f,z){var p=r[z],g=!!p.icon;return g?f[p.iconName]=p.icon:f[z]=p,f},{});typeof bi.hooks.addPack=="function"&&!l?bi.hooks.addPack(t,c):bi.styles[t]=me({},bi.styles[t]||{},c),t==="fas"&&dm("fa",r)}var ud=bi.styles,Mw=bi.shims,mm=function(){var r=function(l){return gs(ud,function(c,f,z){return c[z]=gs(f,l,{}),c},{})};r(function(a,l,c){return l[3]&&(a[l[3]]=c),a}),r(function(a,l,c){var f=l[2];return a[c]=c,f.forEach(function(z){a[z]=c}),a});var u="far"in ud;gs(Mw,function(a,l){var c=l[0],f=l[1],z=l[2];return f==="far"&&!u&&(f="fas"),a[c]={prefix:f,iconName:z},a},{})};mm();bi.styles;function ld(t,r,u){if(t&&t[r]&&t[r][u])return{prefix:r,iconName:u,icon:t[r][u]}}function fm(t){var r=t.tag,u=t.attributes,a=u===void 0?{}:u,l=t.children,c=l===void 0?[]:l;return typeof t=="string"?sm(t):"<".concat(r," ").concat(Gw(a),">").concat(c.map(fm).join(""),"</").concat(r,">")}var Iw=function(r){var u={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return r?r.toLowerCase().split(" ").reduce(function(a,l){var c=l.toLowerCase().split("-"),f=c[0],z=c.slice(1).join("-");if(f&&z==="h")return a.flipX=!0,a;if(f&&z==="v")return a.flipY=!0,a;if(z=parseFloat(z),isNaN(z))return a;switch(f){case"grow":a.size=a.size+z;break;case"shrink":a.size=a.size-z;break;case"left":a.x=a.x-z;break;case"right":a.x=a.x+z;break;case"up":a.y=a.y-z;break;case"down":a.y=a.y+z;break;case"rotate":a.rotate=a.rotate+z;break}return a},u):u};function Ss(t){this.name="MissingIcon",this.message=t||"Icon unavailable",this.stack=new Error().stack}Ss.prototype=Object.create(Error.prototype);Ss.prototype.constructor=Ss;var cr={fill:"currentColor"},zm={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};me({},cr,{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"});var $s=me({},zm,{attributeName:"opacity"});me({},cr,{cx:"256",cy:"364",r:"28"}),me({},zm,{attributeName:"r",values:"28;14;28;28;14;28;"}),me({},$s,{values:"1;0;1;1;0;1;"});me({},cr,{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),me({},$s,{values:"1;0;0;0;0;1;"});me({},cr,{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),me({},$s,{values:"0;0;1;1;0;0;"});bi.styles;function cd(t){var r=t[0],u=t[1],a=t.slice(4),l=Vd(a,1),c=l[0],f=null;return Array.isArray(c)?f={tag:"g",attributes:{class:"".concat(ai.familyPrefix,"-").concat(ps.GROUP)},children:[{tag:"path",attributes:{class:"".concat(ai.familyPrefix,"-").concat(ps.SECONDARY),fill:"currentColor",d:c[0]}},{tag:"path",attributes:{class:"".concat(ai.familyPrefix,"-").concat(ps.PRIMARY),fill:"currentColor",d:c[1]}}]}:f={tag:"path",attributes:{fill:"currentColor",d:c}},{found:!0,width:r,height:u,icon:f}}bi.styles;var _w=`svg:not(:root).svg-inline--fa {
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
}`;function Jw(){var t=Xd,r=qd,u=ai.familyPrefix,a=ai.replacementClass,l=_w;if(u!==t||a!==r){var c=new RegExp("\\.".concat(t,"\\-"),"g"),f=new RegExp("\\--".concat(t,"\\-"),"g"),z=new RegExp("\\.".concat(r),"g");l=l.replace(c,".".concat(u,"-")).replace(f,"--".concat(u,"-")).replace(z,".".concat(a))}return l}var Ww=(function(){function t(){ow(this,t),this.definitions={}}return uw(t,[{key:"add",value:function(){for(var u=this,a=arguments.length,l=new Array(a),c=0;c<a;c++)l[c]=arguments[c];var f=l.reduce(this._pullDefinitions,{});Object.keys(f).forEach(function(z){u.definitions[z]=me({},u.definitions[z]||{},f[z]),dm(z,f[z]),mm()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(u,a){var l=a.prefix&&a.iconName&&a.icon?{0:a}:a;return Object.keys(l).map(function(c){var f=l[c],z=f.prefix,p=f.iconName,g=f.icon;u[z]||(u[z]={}),u[z][p]=g}),u}}]),t})();function Hw(){ai.autoAddCss&&!md&&(Pw(Jw()),md=!0)}function Lw(t,r){return Object.defineProperty(t,"abstract",{get:r}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(a){return fm(a)})}}),Object.defineProperty(t,"node",{get:function(){if(Ks){var a=Ke.createElement("div");return a.innerHTML=t.html,a.children}}}),t}function dd(t){var r=t.prefix,u=r===void 0?"fa":r,a=t.iconName;if(a)return ld(Uw.definitions,u,a)||ld(bi.styles,u,a)}function Kw(t){return function(r){var u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=(r||{}).icon?r:dd(r||{}),l=u.mask;return l&&(l=(l||{}).icon?l:dd(l||{})),t(a,me({},u,{mask:l}))}}var Uw=new Ww,md=!1,Gs={transform:function(r){return Iw(r)}},Zw=Kw(function(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},u=r.transform,a=u===void 0?Xn:u,l=r.symbol,c=l===void 0?!1:l,f=r.mask,z=f===void 0?null:f,p=r.maskId,g=p===void 0?null:p,k=r.title,T=k===void 0?null:k,E=r.titleId,M=E===void 0?null:E,_=r.classes,Y=_===void 0?[]:_,$=r.attributes,x=$===void 0?{}:$,V=r.styles,K=V===void 0?{}:V;if(t){var Q=t.prefix,te=t.iconName,X=t.icon;return Lw(me({type:"icon"},t),function(){return Hw(),ai.autoA11y&&(T?x["aria-labelledby"]="".concat(ai.replacementClass,"-title-").concat(M||ar()):(x["aria-hidden"]="true",x.focusable="false")),Fw({icons:{main:cd(X),mask:z?cd(z.icon):{found:!1,width:null,height:null,icon:{}}},prefix:Q,iconName:te,transform:me({},Xn,a),symbol:c,title:T,maskId:g,titleId:M,extra:{attributes:x,styles:K,classes:Y}})})}});function Qa(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Qa=function(r){return typeof r}:Qa=function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},Qa(t)}function qn(t,r,u){return r in t?Object.defineProperty(t,r,{value:u,enumerable:!0,configurable:!0,writable:!0}):t[r]=u,t}function fd(t,r){var u=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);r&&(a=a.filter(function(l){return Object.getOwnPropertyDescriptor(t,l).enumerable})),u.push.apply(u,a)}return u}function xs(t){for(var r=1;r<arguments.length;r++){var u=arguments[r]!=null?arguments[r]:{};r%2?fd(Object(u),!0).forEach(function(a){qn(t,a,u[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(u)):fd(Object(u)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(u,a))})}return t}function $w(t,r){if(t==null)return{};var u={},a=Object.keys(t),l,c;for(c=0;c<a.length;c++)l=a[c],!(r.indexOf(l)>=0)&&(u[l]=t[l]);return u}function ym(t,r){if(t==null)return{};var u=$w(t,r),a,l;if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(l=0;l<c.length;l++)a=c[l],!(r.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(t,a)&&(u[a]=t[a])}return u}function Bs(t){return Vw(t)||Yw(t)||Qw()}function Vw(t){if(Array.isArray(t)){for(var r=0,u=new Array(t.length);r<t.length;r++)u[r]=t[r];return u}}function Yw(t){if(Symbol.iterator in Object(t)||Object.prototype.toString.call(t)==="[object Arguments]")return Array.from(t)}function Qw(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function Xw(t){var r,u=t.spin,a=t.pulse,l=t.fixedWidth,c=t.inverse,f=t.border,z=t.listItem,p=t.flip,g=t.size,k=t.rotation,T=t.pull,E=(r={"fa-spin":u,"fa-pulse":a,"fa-fw":l,"fa-inverse":c,"fa-border":f,"fa-li":z,"fa-flip-horizontal":p==="horizontal"||p==="both","fa-flip-vertical":p==="vertical"||p==="both"},qn(r,"fa-".concat(g),typeof g<"u"&&g!==null),qn(r,"fa-rotate-".concat(k),typeof k<"u"&&k!==null&&k!==0),qn(r,"fa-pull-".concat(T),typeof T<"u"&&T!==null),qn(r,"fa-swap-opacity",t.swapOpacity),r);return Object.keys(E).map(function(M){return E[M]?M:null}).filter(function(M){return M})}function qw(t){return t=t-0,t===t}function wm(t){return qw(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(r,u){return u?u.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}function ep(t){return t.charAt(0).toUpperCase()+t.slice(1)}function ip(t){return t.split(";").map(function(r){return r.trim()}).filter(function(r){return r}).reduce(function(r,u){var a=u.indexOf(":"),l=wm(u.slice(0,a)),c=u.slice(a+1).trim();return l.startsWith("webkit")?r[ep(l)]=c:r[l]=c,r},{})}function pm(t,r){var u=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof r=="string")return r;var a=(r.children||[]).map(function(p){return pm(t,p)}),l=Object.keys(r.attributes||{}).reduce(function(p,g){var k=r.attributes[g];switch(g){case"class":p.attrs.className=k,delete r.attributes.class;break;case"style":p.attrs.style=ip(k);break;default:g.indexOf("aria-")===0||g.indexOf("data-")===0?p.attrs[g.toLowerCase()]=k:p.attrs[wm(g)]=k}return p},{attrs:{}}),c=u.style,f=c===void 0?{}:c,z=ym(u,["style"]);return l.attrs.style=xs({},l.attrs.style,{},f),t.apply(void 0,[r.tag,xs({},l.attrs,{},z)].concat(Bs(a)))}var hm=!1;try{hm=!0}catch{}function np(){if(!hm&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function zd(t){if(Gs.icon)return Gs.icon(t);if(t===null)return null;if(Qa(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function js(t,r){return Array.isArray(r)&&r.length>0||!Array.isArray(r)&&r?qn({},t,r):{}}function fi(t){var r=t.forwardedRef,u=ym(t,["forwardedRef"]),a=u.icon,l=u.mask,c=u.symbol,f=u.className,z=u.title,p=u.titleId,g=zd(a),k=js("classes",[].concat(Bs(Xw(u)),Bs(f.split(" ")))),T=js("transform",typeof u.transform=="string"?Gs.transform(u.transform):u.transform),E=js("mask",zd(l)),M=Zw(g,xs({},k,{},T,{},E,{symbol:c,title:z,titleId:p}));if(!M)return np("Could not find icon",g),null;var _=M.abstract,Y={ref:r};return Object.keys(u).forEach(function($){fi.defaultProps.hasOwnProperty($)||(Y[$]=u[$])}),tp(_[0],Y)}fi.displayName="FontAwesomeIcon";fi.propTypes={border:W.bool,className:W.string,mask:W.oneOfType([W.object,W.array,W.string]),fixedWidth:W.bool,inverse:W.bool,flip:W.oneOf(["horizontal","vertical","both"]),icon:W.oneOfType([W.object,W.array,W.string]),listItem:W.bool,pull:W.oneOf(["right","left"]),pulse:W.bool,rotation:W.oneOf([0,90,180,270]),size:W.oneOf(["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:W.bool,symbol:W.oneOfType([W.bool,W.string]),title:W.string,transform:W.oneOfType([W.string,W.object]),swapOpacity:W.bool};fi.defaultProps={border:!1,className:"",mask:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,symbol:!1,title:"",transform:null,swapOpacity:!1};var tp=pm.bind(null,ti.createElement);var ap={prefix:"fas",iconName:"caret-down",icon:[320,512,[],"f0d7","M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"]},rp={prefix:"fas",iconName:"caret-up",icon:[320,512,[],"f0d8","M288.662 352H31.338c-17.818 0-26.741-21.543-14.142-34.142l128.662-128.662c7.81-7.81 20.474-7.81 28.284 0l128.662 128.662c12.6 12.599 3.676 34.142-14.142 34.142z"]},op={prefix:"fas",iconName:"guitar",icon:[512,512,[],"f7a6","M502.63 39L473 9.37a32 32 0 0 0-45.26 0L381.46 55.7a35.14 35.14 0 0 0-8.53 13.79L360.77 106l-76.26 76.26c-12.16-8.76-25.5-15.74-40.1-19.14-33.45-7.78-67-.88-89.88 22a82.45 82.45 0 0 0-20.24 33.47c-6 18.56-23.21 32.69-42.15 34.46-23.7 2.27-45.73 11.45-62.61 28.44C-16.11 327-7.9 409 47.58 464.45S185 528 230.56 482.52c17-16.88 26.16-38.9 28.45-62.71 1.76-18.85 15.89-36.13 34.43-42.14a82.6 82.6 0 0 0 33.48-20.25c22.87-22.88 29.74-56.36 22-89.75-3.39-14.64-10.37-28-19.16-40.2L406 151.23l36.48-12.16a35.14 35.14 0 0 0 13.79-8.53l46.33-46.32a32 32 0 0 0 .03-45.22zM208 352a48 48 0 1 1 48-48 48 48 0 0 1-48 48z"]},gm={prefix:"fas",iconName:"list-ul",icon:[512,512,[],"f0ca","M48 48a48 48 0 1 0 48 48 48 48 0 0 0-48-48zm0 160a48 48 0 1 0 48 48 48 48 0 0 0-48-48zm0 160a48 48 0 1 0 48 48 48 48 0 0 0-48-48zm448 16H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-320H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16zm0 160H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z"]},sp={prefix:"fas",iconName:"times",icon:[352,512,[],"f00d","M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"]},up={prefix:"fas",iconName:"trash",icon:[448,512,[],"f1f8","M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z"]};const jm=({onlyStarred:t,toggleOnlyStarred:r,starredCount:u,selectedSong:a,searchText:l,setSearchText:c,onClose:f})=>{const z=p=>{c(p.target.value)};return P.jsxs(P.Fragment,{children:[u?P.jsx("div",{className:"me-2",children:P.jsx(Qn,{variant:"info",onClick:r,children:t?P.jsx(fi,{icon:gm,role:"button",size:"lg"}):P.jsx(P.Fragment,{children:P.jsxs("span",{className:"sb-no-wrap",children:[P.jsx(_t,{mode:"starred"})," ",u]})})})}):null,t?a?P.jsxs(P.Fragment,{children:[P.jsx(Qn,{className:"ms-2 me-1",variant:"success",disabled:!a.moveUp,onClick:a.moveUp,children:P.jsx(fi,{icon:rp,role:"button",size:"lg"})}),P.jsx(Qn,{className:"me-3",variant:"success",disabled:!a.moveDown,onClick:a.moveDown,children:P.jsx(fi,{icon:ap,role:"button",size:"lg"})}),P.jsx(Qn,{className:"me-1",variant:"danger",onClick:a.toggleStarred,children:P.jsx(fi,{icon:up,role:"button",size:"lg"})})]}):P.jsx("div",{className:"ms-2",children:P.jsxs("span",{className:"fw-bold sb-no-wrap",children:["Wybrane ",P.jsx(_t,{mode:"starred"})," ",u]})}):P.jsx("div",{className:"me-2 flex-grow-1",children:P.jsx("input",{type:"search",className:"form-control",placeholder:"Szukaj",autoCapitalize:"none",autoCorrect:"off",value:l,onChange:z})}),P.jsx("div",{className:"ms-auto",children:P.jsx(Qn,{variant:"light",onClick:f,children:P.jsx(fi,{icon:sp,role:"button",size:"lg",onClick:f})})})]})};jm.propTypes={onlyStarred:W.bool.isRequired,toggleOnlyStarred:W.func.isRequired,starredCount:W.number.isRequired,selectedSong:W.object,searchText:W.string.isRequired,setSearchText:W.func.isRequired,onClose:W.func.isRequired};const km=({songs:t,chooseSong:r,starredCount:u,onlyStarred:a,toggleOnlyStarred:l,show:c,onClose:f})=>{const[z,p]=A.useState(""),g=A.useRef(null);A.useEffect(()=>{(!c||a)&&p(""),M()},[c,a]);const T=z.trim()?isNaN(z)?Ad(z.trim()):parseInt(z):void 0;A.useEffect(()=>{T||M()},[T]);const E=x=>T?typeof T=="number"?x.number===T:x.latinTitle.includes(T):!0,M=()=>{g.current&&g.current.scrollIntoView()},_=t.findIndex(x=>x.chosen),Y=t.find(x=>x.selected),$=_<3?0:_-3;return P.jsxs(Va,{show:c,onHide:f,scrollable:!0,animation:!1,children:[P.jsx(Va.Header,{className:"py-2 px-2",children:P.jsx(jm,{onlyStarred:a,toggleOnlyStarred:l,starredCount:u,selectedSong:Y,searchText:z,setSearchText:p,onClose:f})}),P.jsx(Va.Body,{children:t.filter(x=>E(x)).map((x,V)=>P.jsxs(ti.Fragment,{children:[P.jsx($d,{song:x,chooseSong:r,onlyStarred:a}),P.jsx("br",{ref:V===$?g:null})]},x.number))}),a?null:P.jsx(Va.Footer,{className:"py-0",children:P.jsxs("p",{className:"text-secondary small",children:["Śpiewnik - Tchnienie Boga v","0.2.3"]})})]})};km.propTypes={songs:W.array.isRequired,chooseSong:W.func.isRequired,starredCount:W.number.isRequired,onlyStarred:W.bool.isRequired,toggleOnlyStarred:W.func.isRequired,show:W.bool.isRequired,onClose:W.func.isRequired};const bm=({onlyStarred:t,chordsShown:r,onClickMenu:u,onClickGuitar:a})=>{const l=c=>f=>{(f.key==="Enter"||f.key===" "||f.key==="Spacebar"||f.which===13||f.which===32)&&(f.preventDefault(),c(f))};return P.jsxs("div",{className:"sb-menu-buttons-container",children:[P.jsx("div",{className:Me("btn","sb-menu-button","shadow","rounded-circle",r?"sb-menu-button-red":"sb-menu-button-gray","d-flex","justify-content-center","align-items-center","pt-2"),tabIndex:"0",role:"button",onClick:a,onKeyPress:l(a),children:P.jsx("div",{className:"sb-menu-button-icon my-auto",children:P.jsx(fi,{icon:op,size:"lg"})})}),P.jsx("div",{className:"btn sb-menu-button shadow rounded-circle sb-menu-button-cyan d-flex justify-content-center align-items-center pt-2",tabIndex:"1",role:"button",onClick:u,onKeyPress:l(u),children:P.jsx("div",{className:"sb-menu-button-icon my-auto",children:t?P.jsx(_t,{mode:"starred"}):P.jsx(fi,{icon:gm,size:"lg"})})})]})};bm.propTypes={onlyStarred:W.bool.isRequired,chordsShown:W.bool.isRequired,onClickMenu:W.func.isRequired,onClickGuitar:W.func.isRequired};function Os(t,r){return t.map(function(u,a){return u+r[a]})}function Vs(t,r){return t.map(function(u,a){return u-r[a]})}function Rs(t){return Math.hypot.apply(Math,t)}function vm(t,r,u){var a=Rs(r),l=a===0?0:1/a,c=u===0?0:1/u,f=c*a,z=r.map(function(k){return c*k}),p=r.map(function(k){return l*k}),g=Rs(t);return{velocities:z,velocity:f,distance:g,direction:p}}function rr(t){return Math.sign?Math.sign(t):+(t>0)-+(t<0)||+t}function lp(t,r,u){return Math.max(r,Math.min(t,u))}function cp(t,r){return Math.pow(t,r*5)}function yd(t,r,u){return r===0||Math.abs(r)===1/0?cp(t,u):t*r*u/(r+u*t)}function wd(t,r,u,a){return a===void 0&&(a=.15),a===0?lp(t,r,u):t<r?-yd(r-t,u-r,a)+r:t>u?+yd(t-u,u-r,a)+u:t}function dp(t,r){for(var u=0;u<r.length;u++){var a=r[u];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function mp(t,r,u){return r&&dp(t.prototype,r),t}function we(){return we=Object.assign||function(t){for(var r=1;r<arguments.length;r++){var u=arguments[r];for(var a in u)Object.prototype.hasOwnProperty.call(u,a)&&(t[a]=u[a])}return t},we.apply(this,arguments)}function dr(t,r){t.prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r}function Ys(t,r){if(t==null)return{};var u={},a=Object.keys(t),l,c;for(c=0;c<a.length;c++)l=a[c],!(r.indexOf(l)>=0)&&(u[l]=t[l]);return u}function Ge(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function fp(t,r){if(t){if(typeof t=="string")return pd(t,r);var u=Object.prototype.toString.call(t).slice(8,-1);if(u==="Object"&&t.constructor&&(u=t.constructor.name),u==="Map"||u==="Set")return Array.from(t);if(u==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u))return pd(t,r)}}function pd(t,r){(r==null||r>t.length)&&(r=t.length);for(var u=0,a=new Array(r);u<r;u++)a[u]=t[u];return a}function mr(t,r){var u;if(typeof Symbol>"u"||t[Symbol.iterator]==null){if(Array.isArray(t)||(u=fp(t))||r){u&&(t=u);var a=0;return function(){return a>=t.length?{done:!0}:{done:!1,value:t[a++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}return u=t[Symbol.iterator](),u.next.bind(u)}function Cm(){}function Dm(){for(var t=arguments.length,r=new Array(t),u=0;u<t;u++)r[u]=arguments[u];return r.length===0?Cm:r.length===1?r[0]:function(){for(var a,l=mr(r),c;!(c=l()).done;){var f=c.value;a=f.apply(this,arguments)||a}return a}}function an(t,r){if(t===void 0){if(r===void 0)throw new Error("Must define fallback value if undefined is expected");t=r}return Array.isArray(t)?t:[t,t]}function hd(t,r){return Object.assign({},r,t||{})}function or(t){if(typeof t=="function"){for(var r=arguments.length,u=new Array(r>1?r-1:0),a=1;a<r;a++)u[a-1]=arguments[a];return t.apply(void 0,u)}else return t}function fr(t,r){t===void 0&&(t={});for(var u={},a=0,l=Object.entries(r);a<l.length;a++){var c=l[a],f=c[0],z=c[1];switch(typeof z){case"function":u[f]=z.call(u,t[f],f,t);break;case"object":u[f]=fr(t[f],z);break;case"boolean":z&&(u[f]=t[f]);break}}return u}var zp=260;function yp(){try{return"constructor"in GestureEvent}catch{return!1}}function Tm(){return typeof window<"u"&&"ontouchstart"in window}function Em(t){return"pointerId"in t?null:t.type==="touchend"?t.changedTouches:t.targetTouches}function Qs(t){return"pointerId"in t?[t.pointerId]:Array.from(Em(t)).map(function(r){return r.identifier})}function nn(t){var r="buttons"in t?t.buttons:0,u=t.shiftKey,a=t.altKey,l=t.metaKey,c=t.ctrlKey;return{buttons:r,shiftKey:u,altKey:a,metaKey:l,ctrlKey:c}}var zr=function(r){return r};function gd(t,r){r===void 0&&(r=zr);var u=Em(t),a=u?u[0]:t,l=a.clientX,c=a.clientY;return r([l,c])}function jd(t,r,u){u===void 0&&(u=zr);var a=Array.from(t.touches).filter(function(_){return r.includes(_.identifier)}),l=a[0],c=a[1],f=c.clientX-l.clientX,z=c.clientY-l.clientY,p=(c.clientX+l.clientX)/2,g=(c.clientY+l.clientY)/2,k=Math.hypot(f,z),T=-(Math.atan2(f,z)*180)/Math.PI,E=u([k,T]),M=u([p,g]);return{values:E,origin:M}}var kd=40,bd=800;function wp(t,r){r===void 0&&(r=zr);var u=t.deltaX,a=t.deltaY,l=t.deltaMode;return l===1?(u*=kd,a*=kd):l===2&&(u*=bd,a*=bd),r([u,a])}function vd(t,r){return r===void 0&&(r=zr),r([t.scale*zp,t.rotation])}var pp=180,hp=.15,gp=.5,jp=50,kp=250,Am={threshold:function(r){return r===void 0&&(r=0),an(r)},rubberband:function(r){switch(r===void 0&&(r=0),r){case!0:return an(hp);case!1:return an(0);default:return an(r)}},enabled:function(r){return r===void 0&&(r=!0),r},triggerAllEvents:function(r){return r===void 0&&(r=!1),r},initial:function(r){return r===void 0&&(r=0),typeof r=="function"?r:an(r)},transform:!0},Pm=we({},Am,{axis:!0,lockDirection:function(r){return r===void 0&&(r=!1),r},bounds:function(r){if(r===void 0&&(r={}),typeof r=="function")return function(T){return Pm.bounds(r(T))};var u=r,a=u.left,l=a===void 0?-1/0:a,c=u.right,f=c===void 0?1/0:c,z=u.top,p=z===void 0?-1/0:z,g=u.bottom,k=g===void 0?1/0:g;return[[l,f],[p,k]]}}),bp=typeof window<"u"&&window.document&&window.document.createElement,vp={enabled:function(r){return r===void 0&&(r=!0),r},domTarget:!0,window:(function(t){function r(u){return t.apply(this,arguments)}return r.toString=function(){return t.toString()},r})(function(t){return t===void 0&&(t=bp?window:void 0),t}),eventOptions:function(r){var u=r===void 0?{}:r,a=u.passive,l=a===void 0?!0:a,c=u.capture,f=c===void 0?!1:c;return{passive:l,capture:f}},transform:!0},Cp=we({},Am,{bounds:function(r,u,a){var l=a.distanceBounds,c=l===void 0?{}:l,f=a.angleBounds,z=f===void 0?{}:f,p=function(T){var E=hd(or(c,T),{min:-1/0,max:1/0});return[E.min,E.max]},g=function(T){var E=hd(or(z,T),{min:-1/0,max:1/0});return[E.min,E.max]};return typeof c!="function"&&typeof z!="function"?[p(),g()]:function(k){return[p(k),g(k)]}}}),Dp=we({},Pm,{useTouch:function(r){return r===void 0&&(r=!1),r&&Tm()},experimental_preventWindowScrollY:function(r){return r===void 0&&(r=!1),r},threshold:function(r,u,a){var l=a.filterTaps,c=l===void 0?!1:l,f=a.lockDirection,z=f===void 0?!1:f,p=a.axis,g=p===void 0?void 0:p,k=an(r,c?3:z||g?1:0);return this.filterTaps=c,k},swipeVelocity:function(r){return r===void 0&&(r=gp),an(r)},swipeDistance:function(r){return r===void 0&&(r=jp),an(r)},swipeDuration:function(r){return r===void 0&&(r=kp),r},delay:function(r){switch(r===void 0&&(r=0),r){case!0:return pp;case!1:return 0;default:return r}}});function Sm(t){return t===void 0&&(t={}),fr(t,vp)}function Tp(t){return t===void 0&&(t={}),fr(t,Cp)}function Ep(t){return t===void 0&&(t={}),fr(t,Dp)}function Ap(t){var r=t.domTarget,u=t.eventOptions,a=t.window,l=t.enabled,c=Ys(t,["domTarget","eventOptions","window","enabled"]),f=Sm({domTarget:r,eventOptions:u,window:a,enabled:l});return f.drag=Ep(c),f}function Pp(t){var r=t.domTarget,u=t.eventOptions,a=t.window,l=t.enabled,c=Ys(t,["domTarget","eventOptions","window","enabled"]),f=Sm({domTarget:r,eventOptions:u,window:a,enabled:l});return f.pinch=Tp(c),f}function Nt(t){return we({_active:!1,_blocked:!1,_intentional:[!1,!1],_movement:[0,0],_initial:[0,0],_bounds:[[-1/0,1/0],[-1/0,1/0]],_lastEventType:void 0,_dragStarted:!1,_dragPreventScroll:!1,_dragIsTap:!0,_dragDelayed:!1,event:void 0,intentional:!1,values:[0,0],velocities:[0,0],delta:[0,0],movement:[0,0],offset:[0,0],lastOffset:[0,0],direction:[0,0],initial:[0,0],previous:[0,0],first:!1,last:!1,active:!1,timeStamp:0,startTime:0,elapsedTime:0,cancel:Cm,canceled:!1,memo:void 0,args:void 0},t)}function Gm(){var t={hovering:!1,scrolling:!1,wheeling:!1,dragging:!1,moving:!1,pinching:!1,touches:0,buttons:0,down:!1,shiftKey:!1,altKey:!1,metaKey:!1,ctrlKey:!1,locked:!1},r=Nt({_pointerId:void 0,axis:void 0,xy:[0,0],vxvy:[0,0],velocity:0,distance:0,tap:!1,swipe:[0,0]}),u=Nt({_pointerIds:[],da:[0,0],vdva:[0,0],origin:void 0,turns:0}),a=Nt({axis:void 0,xy:[0,0],vxvy:[0,0],velocity:0,distance:0}),l=Nt({axis:void 0,xy:[0,0],vxvy:[0,0],velocity:0,distance:0}),c=Nt({axis:void 0,xy:[0,0],vxvy:[0,0],velocity:0,distance:0});return{shared:t,drag:r,pinch:u,wheel:a,move:l,scroll:c}}var tn=new Map,Sp=function(r){return r},xm=(function(){function t(u,a){var l=this;a===void 0&&(a=[]),this.controller=u,this.args=a,this.debounced=!0,this.setTimeout=function(c,f){var z;f===void 0&&(f=140),clearTimeout(l.controller.timeouts[l.stateKey]);for(var p=arguments.length,g=new Array(p>2?p-2:0),k=2;k<p;k++)g[k-2]=arguments[k];l.controller.timeouts[l.stateKey]=(z=window).setTimeout.apply(z,[c,f].concat(g))},this.clearTimeout=function(){clearTimeout(l.controller.timeouts[l.stateKey])},this.fireGestureHandler=function(c){if(c===void 0&&(c=!1),l.state._blocked)return l.debounced||(l.state._active=!1,l.clean()),null;if(!c&&!l.state.intentional&&!l.config.triggerAllEvents)return null;if(l.state.intentional){var f=l.state.active,z=l.state._active;l.state.active=z,l.state.first=z&&!f,l.state.last=f&&!z,l.controller.state.shared[l.ingKey]=z}var p=l.controller.pointerIds.size||l.controller.touchIds.size,g=l.controller.state.shared.buttons>0||p>0,k=we({},l.controller.state.shared,l.state,l.mapStateValues(l.state),{locked:!!document.pointerLockElement,touches:p,down:g}),T=l.handler(k);return l.state.memo=T!==void 0?T:l.state.memo,k},this.controller=u,this.args=a}var r=t.prototype;return r.updateSharedState=function(a){Object.assign(this.controller.state.shared,a)},r.updateGestureState=function(a){Object.assign(this.state,a)},r.checkIntentionality=function(a,l){return{_intentional:a,_blocked:!1}},r.getMovement=function(a){var l=this.config,c=l.rubberband,f=l.threshold,z=this.state,p=z._bounds,g=z._initial,k=z._active,T=z._intentional,E=z.lastOffset,M=z.movement,_=this.getInternalMovement(a,this.state),Y=this.transform(f).map(Math.abs),$=T[0]===!1?Cd(_[0],Y[0]):T[0],x=T[1]===!1?Cd(_[1],Y[1]):T[1],V=this.checkIntentionality([$,x],_);if(V._blocked)return we({},V,{_movement:_,delta:[0,0]});var K=V._intentional,Q=_,te=[K[0]!==!1?_[0]-K[0]:0,K[1]!==!1?_[1]-K[1]:0],X=Os(te,E),ee=k?c:[0,0];return te=Dd(p,Os(te,g),ee),we({},V,{intentional:K[0]!==!1||K[1]!==!1,_initial:g,_movement:Q,movement:te,values:a,offset:Dd(p,X,ee),delta:Vs(te,M)})},r.clean=function(){this.clearTimeout()},mp(t,[{key:"config",get:function(){return this.controller.config[this.stateKey]}},{key:"enabled",get:function(){return this.controller.config.enabled&&this.config.enabled}},{key:"state",get:function(){return this.controller.state[this.stateKey]}},{key:"handler",get:function(){return this.controller.handlers[this.stateKey]}},{key:"transform",get:function(){return this.config.transform||this.controller.config.transform||Sp}}]),t})();function Cd(t,r){return Math.abs(t)>=r?rr(t)*r:!1}function Dd(t,r,u){var a=r[0],l=r[1],c=u[0],f=u[1],z=t[0],p=z[0],g=z[1],k=t[1],T=k[0],E=k[1];return[wd(a,p,g,c),wd(l,T,E,f)]}function mi(t,r,u){var a=t.state,l=r.timeStamp,c=r.type,f=a.values,z=u?0:l-a.startTime;return{_lastEventType:c,event:r,timeStamp:l,elapsedTime:z,previous:f}}function Xa(t,r,u){var a=t.state,l=t.config,c=t.stateKey,f=t.args,z=a.offset,p=u.timeStamp,g=l.initial,k=l.bounds,T=we({},Gm()[c],{_active:!0,args:f,values:r,initial:r,offset:z,lastOffset:z,startTime:p});return we({},T,{_initial:or(g,T),_bounds:or(k,T)})}function Gp(t,r){return function(u){for(var a=arguments.length,l=new Array(a>1?a-1:0),c=1;c<a;c++)l[c-1]=arguments[c];return t.call.apply(t,[this,we({},r,{event:u})].concat(l))}}var xp=function(r){var u=this;this.classes=r,this.pointerIds=new Set,this.touchIds=new Set,this.supportsTouchEvents=Tm(),this.supportsGestureEvents=yp(),this.bind=function(){for(var a={},l=arguments.length,c=new Array(l),f=0;f<l;f++)c[f]=arguments[f];for(var z=mr(u.classes),p;!(p=z()).done;){var g=p.value;new g(u,c).addBindings(a)}for(var k=0,T=Object.entries(u.nativeRefs);k<T.length;k++){var E=T[k],M=E[0],_=E[1];Fe(a,M,Gp(_,we({},u.state.shared,{args:c})))}return u.config.domTarget?Np(u,a):Fp(u,a)},this.effect=function(){return u.config.domTarget&&u.bind(),u.clean},this.clean=function(){var a=Nm(u.config),l=u.config.eventOptions;a&&Ht(a,Rm(u.domListeners),l),Object.values(u.timeouts).forEach(clearTimeout),Bp(u)},this.classes=r,this.state=Gm(),this.timeouts={},this.domListeners=[],this.windowListeners={}};function Bm(t,r){var u="pointerId"in r?t.pointerIds:t.touchIds;Qs(r).forEach(u.add,u)}function Om(t,r){var u="pointerId"in r?t.pointerIds:t.touchIds;Qs(r).forEach(u.delete,u)}function Bp(t){var r=t.config,u=r.window,a=r.eventOptions,l=t.windowListeners;if(u){for(var c in l){var f=l[c];Ht(u,f,a)}t.windowListeners={}}}function Op(t,r,u){var a=t.config,l=t.windowListeners;u===void 0&&(u=a.eventOptions),a.window&&(Ht(a.window,l[r],u),delete l[r])}function Rp(t,r,u,a){var l=t.config,c=t.windowListeners;u===void 0&&(u=[]),a===void 0&&(a=l.eventOptions),l.window&&(Ht(l.window,c[r],a),Fm(l.window,c[r]=u,a))}function Np(t,r){var u=t.config,a=t.domListeners,l=Nm(u);if(!l)throw new Error("domTarget must be defined");var c=u.eventOptions;Ht(l,Rm(a),c);for(var f=0,z=Object.entries(r);f<z.length;f++){var p=z[f],g=p[0],k=p[1],T=g.slice(2).toLowerCase();a.push([T,Dm.apply(void 0,k)])}Fm(l,a,c)}function Fp(t,r){for(var u=t.config,a={},l=u.eventOptions.capture?"Capture":"",c=0,f=Object.entries(r);c<f.length;c++){var z=f[c],p=z[0],g=z[1],k=Array.isArray(g)?g:[g],T=p+l;a[T]=Dm.apply(void 0,k)}return a}function Rm(t){return t===void 0&&(t=[]),t.splice(0,t.length)}function Nm(t){var r=t.domTarget;return r&&"current"in r?r.current:r}function Fe(t,r,u){t[r]||(t[r]=[]),t[r].push(u)}function Fm(t,r,u){r===void 0&&(r=[]),u===void 0&&(u={});for(var a=mr(r),l;!(l=a()).done;){var c=l.value,f=c[0],z=c[1];t.addEventListener(f,z,u)}}function Ht(t,r,u){r===void 0&&(r=[]),u===void 0&&(u={});for(var a=mr(r),l;!(l=a()).done;){var c=l.value,f=c[0],z=c[1];t.removeEventListener(f,z,u)}}function Mm(t,r,u){u===void 0&&(u={});var a=Ip(t),l=ti.useMemo(function(){return new xp(a)},[]);return l.config=r,l.handlers=t,l.nativeRefs=u,ti.useEffect(l.effect,[]),l.config.domTarget?Mp:l.bind}function Mp(){}function Ip(t){var r=new Set;return t.drag&&r.add(tn.get("drag")),t.wheel&&r.add(tn.get("wheel")),t.scroll&&r.add(tn.get("scroll")),t.move&&r.add(tn.get("move")),t.pinch&&r.add(tn.get("pinch")),t.hover&&r.add(tn.get("hover")),r}var _p=(function(t){dr(r,t);function r(){return t.apply(this,arguments)||this}var u=r.prototype;return u.getInternalMovement=function(l,c){return Vs(l,c.initial)},u.checkIntentionality=function(l,c){if(l[0]===!1&&l[1]===!1)return{_intentional:l,axis:this.state.axis};var f=c.map(Math.abs),z=f[0],p=f[1],g=this.state.axis||(z>p?"x":z<p?"y":void 0);return!this.config.axis&&!this.config.lockDirection?{_intentional:l,_blocked:!1,axis:g}:g?this.config.axis&&g!==this.config.axis?{_intentional:l,_blocked:!0,axis:g}:(l[g==="x"?1:0]=!1,{_intentional:l,_blocked:!1,axis:g}):{_intentional:[!1,!1],_blocked:!1,axis:g}},u.getKinematics=function(l,c){var f=this.getMovement(l);if(!f._blocked){var z=c.timeStamp-this.state.timeStamp;Object.assign(f,vm(f.movement,f.delta,z))}return f},u.mapStateValues=function(l){return{xy:l.values,vxvy:l.velocities}},r})(xm),Jp=3;function Td(t){"persist"in t&&typeof t.persist=="function"&&t.persist()}var Wp=(function(t){dr(r,t);function r(){var a;return a=t.apply(this,arguments)||this,a.ingKey="dragging",a.stateKey="drag",a.setPointerCapture=function(l){if(!(a.config.useTouch||document.pointerLockElement)){var c=l.target,f=l.pointerId;c&&"setPointerCapture"in c&&c.setPointerCapture(f),a.updateGestureState({_dragTarget:c,_dragPointerId:f})}},a.releasePointerCapture=function(){if(!(a.config.useTouch||document.pointerLockElement)){var l=a.state,c=l._dragTarget,f=l._dragPointerId;if(f&&c&&"releasePointerCapture"in c&&(!("hasPointerCapture"in c)||c.hasPointerCapture(f)))try{c.releasePointerCapture(f)}catch{}}},a.preventScroll=function(l){a.state._dragPreventScroll&&l.cancelable&&l.preventDefault()},a.getEventId=function(l){return a.config.useTouch?l.changedTouches[0].identifier:l.pointerId},a.isValidEvent=function(l){return a.state._pointerId===a.getEventId(l)},a.shouldPreventWindowScrollY=a.config.experimental_preventWindowScrollY&&a.controller.supportsTouchEvents,a.setUpWindowScrollDetection=function(l){Td(l),Rp(a.controller,a.stateKey,[["touchmove",a.preventScroll],["touchend",a.clean.bind(Ge(a))],["touchcancel",a.clean.bind(Ge(a))]],{passive:!1}),a.setTimeout(a.startDrag.bind(Ge(a)),250,l)},a.setUpDelayedDragTrigger=function(l){a.state._dragDelayed=!0,Td(l),a.setTimeout(a.startDrag.bind(Ge(a)),a.config.delay,l)},a.setStartState=function(l){var c=gd(l,a.transform);a.updateSharedState(nn(l)),a.updateGestureState(we({},Xa(Ge(a),c,l),mi(Ge(a),l,!0),{_pointerId:a.getEventId(l)})),a.updateGestureState(a.getMovement(c))},a.onDragStart=function(l){Bm(a.controller,l),!(!a.enabled||a.state._active)&&(a.setStartState(l),a.setPointerCapture(l),a.shouldPreventWindowScrollY?a.setUpWindowScrollDetection(l):a.config.delay>0?a.setUpDelayedDragTrigger(l):a.startDrag(l,!0))},a.onDragChange=function(l){if(!(a.state.canceled||!a.state._active||!a.isValidEvent(l)||a.state._lastEventType===l.type&&l.timeStamp===a.state.timeStamp)){var c;if(document.pointerLockElement){var f=l.movementX,z=l.movementY;c=Os(a.transform([f,z]),a.state.values)}else c=gd(l,a.transform);var p=a.getKinematics(c,l);if(!a.state._dragStarted){if(a.state._dragDelayed){a.startDrag(l);return}if(a.shouldPreventWindowScrollY)if(!a.state._dragPreventScroll&&p.axis)if(p.axis==="x")a.startDrag(l);else{a.state._active=!1;return}else return;else return}var g=nn(l);a.updateSharedState(g);var k=mi(Ge(a),l),T=Rs(p._movement),E=a.state._dragIsTap;E&&T>=Jp&&(E=!1),a.updateGestureState(we({},k,p,{_dragIsTap:E})),a.fireGestureHandler()}},a.onDragEnd=function(l){if(Om(a.controller,l),!!a.isValidEvent(l)&&(a.clean(),!!a.state._active)){a.state._active=!1;var c=a.state._dragIsTap,f=a.state.velocities,z=f[0],p=f[1],g=a.state.movement,k=g[0],T=g[1],E=a.state._intentional,M=E[0],_=E[1],Y=a.config.swipeVelocity,$=Y[0],x=Y[1],V=a.config.swipeDistance,K=V[0],Q=V[1],te=a.config.swipeDuration,X=we({},mi(Ge(a),l),a.getMovement(a.state.values)),ee=[0,0];X.elapsedTime<te&&(M!==!1&&Math.abs(z)>$&&Math.abs(k)>K&&(ee[0]=rr(z)),_!==!1&&Math.abs(p)>x&&Math.abs(T)>Q&&(ee[1]=rr(p))),a.updateSharedState({buttons:0}),a.updateGestureState(we({},X,{tap:c,swipe:ee})),a.fireGestureHandler(a.config.filterTaps&&c===!0)}},a.clean=function(){t.prototype.clean.call(Ge(a)),a.state._dragStarted=!1,a.releasePointerCapture(),Op(a.controller,a.stateKey)},a.onCancel=function(){a.state.canceled||(a.updateGestureState({canceled:!0,_active:!1}),a.updateSharedState({buttons:0}),setTimeout(function(){return a.fireGestureHandler()},0))},a.onClick=function(l){a.state._dragIsTap||l.stopPropagation()},a}var u=r.prototype;return u.startDrag=function(l,c){c===void 0&&(c=!1),!(!this.state._active||this.state._dragStarted)&&(c||this.setStartState(l),this.updateGestureState({_dragStarted:!0,_dragPreventScroll:!0,cancel:this.onCancel}),this.clearTimeout(),this.fireGestureHandler())},u.addBindings=function(l){if(this.config.useTouch?(Fe(l,"onTouchStart",this.onDragStart),Fe(l,"onTouchMove",this.onDragChange),Fe(l,"onTouchEnd",this.onDragEnd),Fe(l,"onTouchCancel",this.onDragEnd)):(Fe(l,"onPointerDown",this.onDragStart),Fe(l,"onPointerMove",this.onDragChange),Fe(l,"onPointerUp",this.onDragEnd),Fe(l,"onPointerCancel",this.onDragEnd)),this.config.filterTaps){var c=this.controller.config.eventOptions.capture?"onClick":"onClickCapture";Fe(l,c,this.onClick)}},r})(_p);function Im(t,r){var u,a=[],l,c=!1;function f(){for(var z=arguments.length,p=new Array(z),g=0;g<z;g++)p[g]=arguments[g];return c&&u===this&&r(p,a)||(l=t.apply(this,p),c=!0,u=this,a=p),l}return f}function qa(t,r){if(t===r)return!0;if(t&&r&&typeof t=="object"&&typeof r=="object"){if(t.constructor!==r.constructor)return!1;var u,a,l;if(Array.isArray(t)){if(u=t.length,u!==r.length)return!1;for(a=u;a--!==0;)if(!qa(t[a],r[a]))return!1;return!0}var c;if(typeof Map=="function"&&t instanceof Map&&r instanceof Map){if(t.size!==r.size)return!1;for(c=t.entries();!(a=c.next()).done;)if(!r.has(a.value[0]))return!1;for(c=t.entries();!(a=c.next()).done;)if(!qa(a.value[1],r.get(a.value[0])))return!1;return!0}if(typeof Set=="function"&&t instanceof Set&&r instanceof Set){if(t.size!==r.size)return!1;for(c=t.entries();!(a=c.next()).done;)if(!r.has(a.value[0]))return!1;return!0}if(t.constructor===RegExp)return t.source===r.source&&t.flags===r.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===r.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===r.toString();if(l=Object.keys(t),u=l.length,u!==Object.keys(r).length)return!1;for(a=u;a--!==0;)if(!Object.prototype.hasOwnProperty.call(r,l[a]))return!1;if(typeof Element<"u"&&t instanceof Element)return!1;for(a=u;a--!==0;)if(!(l[a]==="_owner"&&t.$$typeof)&&!qa(t[l[a]],r[l[a]]))return!1;return!0}return t!==t&&r!==r}function _m(t,r){try{return qa(t,r)}catch(u){if((u.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw u}}function Hp(t,r){r===void 0&&(r={}),tn.set("drag",Wp);var u=A.useRef();return u.current||(u.current=Im(Ap,_m)),Mm({drag:t},u.current(r))}var Lp=(function(t){dr(r,t);function r(){return t.apply(this,arguments)||this}var u=r.prototype;return u.getInternalMovement=function(l,c){var f=c.values[1],z=l[0],p=l[1],g=p===void 0?f:p,k=g-f,T=c.turns;return Math.abs(k)>270&&(T+=rr(k)),Vs([z,g-360*T],c.initial)},u.getKinematics=function(l,c){var f=this.getMovement(l),z=(l[1]-f._movement[1]-this.state.initial[1])/360,p=c.timeStamp-this.state.timeStamp,g=vm(f.movement,f.delta,p),k=Ys(g,["distance","velocity"]);return we({turns:z},f,k)},u.mapStateValues=function(l){return{da:l.values,vdva:l.velocities}},r})(xm),Kp=(function(t){dr(r,t);function r(){var a;return a=t.apply(this,arguments)||this,a.ingKey="pinching",a.stateKey="pinch",a.onPinchStart=function(l){if(Bm(a.controller,l),!(!a.enabled||a.state._active)&&!(a.controller.touchIds.size<2)){var c=Array.from(a.controller.touchIds).slice(0,2),f=jd(l,c,a.transform),z=f.values,p=f.origin;a.updateSharedState(nn(l)),a.updateGestureState(we({},Xa(Ge(a),z,l),mi(Ge(a),l,!0),{_pointerIds:c,cancel:a.onCancel,origin:p})),a.updateGestureState(a.getMovement(z)),a.fireGestureHandler()}},a.onPinchChange=function(l){var c=a.state,f=c.canceled,z=c._active;if(!(f||!z||l.timeStamp===a.state.timeStamp)){var p=nn(l);a.updateSharedState(p);var g=jd(l,a.state._pointerIds,a.transform),k=g.values,T=g.origin,E=a.getKinematics(k,l);a.updateGestureState(we({},mi(Ge(a),l),E,{origin:T})),a.fireGestureHandler()}},a.onPinchEnd=function(l){Om(a.controller,l);var c=Qs(l);a.state._pointerIds.every(function(f){return!c.includes(f)})||(a.clean(),a.state._active&&(a.updateGestureState(we({},mi(Ge(a),l),a.getMovement(a.state.values),{_active:!1})),a.fireGestureHandler()))},a.onCancel=function(){a.state.canceled||(a.updateGestureState({_active:!1,canceled:!0}),setTimeout(function(){return a.fireGestureHandler()},0))},a.onGestureStart=function(l){if(a.enabled){l.preventDefault();var c=vd(l,a.transform);a.updateSharedState(nn(l)),a.updateGestureState(we({},Xa(Ge(a),c,l),mi(Ge(a),l,!0),{origin:[l.clientX,l.clientY],cancel:a.onCancel})),a.updateGestureState(a.getMovement(c)),a.fireGestureHandler()}},a.onGestureChange=function(l){var c=a.state,f=c.canceled,z=c._active;if(!(f||!z)){l.preventDefault();var p=nn(l);a.updateSharedState(p);var g=vd(l,a.transform),k=a.getKinematics(g,l);a.updateGestureState(we({},mi(Ge(a),l),k,{origin:[l.clientX,l.clientY]})),a.fireGestureHandler()}},a.onGestureEnd=function(l){a.clean(),a.state._active&&(a.updateGestureState(we({},mi(Ge(a),l),a.getMovement(a.state.values),{_active:!1,origin:[l.clientX,l.clientY]})),a.fireGestureHandler())},a.wheelShouldRun=function(l){return a.enabled&&l.ctrlKey},a.getWheelValuesFromEvent=function(l){var c=wp(l,a.transform),f=c[1],z=a.state.values,p=z[0],g=z[1],k=p-f,T=g!==void 0?g:0;return{values:[k,T],origin:[l.clientX,l.clientY],delta:[0,f]}},a.onWheel=function(l){a.wheelShouldRun(l)&&(a.setTimeout(a.onWheelEnd),a.state._active?a.onWheelChange(l):a.onWheelStart(l))},a.onWheelStart=function(l){var c=a.getWheelValuesFromEvent(l),f=c.values,z=c.delta,p=c.origin;l.cancelable&&l.preventDefault(),a.updateSharedState(nn(l)),a.updateGestureState(we({},Xa(Ge(a),f,l),mi(Ge(a),l,!0),{initial:a.state.values,offset:f,delta:z,origin:p})),a.updateGestureState(a.getMovement(f)),a.fireGestureHandler()},a.onWheelChange=function(l){l.cancelable&&l.preventDefault(),a.updateSharedState(nn(l));var c=a.getWheelValuesFromEvent(l),f=c.values,z=c.origin,p=c.delta;a.updateGestureState(we({},mi(Ge(a),l),a.getKinematics(f,l),{origin:z,delta:p})),a.fireGestureHandler()},a.onWheelEnd=function(){a.clean(),a.state._active&&(a.state._active=!1,a.updateGestureState(a.getMovement(a.state.values)),a.fireGestureHandler())},a}var u=r.prototype;return u.addBindings=function(l){this.controller.config.domTarget&&!this.controller.supportsTouchEvents&&this.controller.supportsGestureEvents?(Fe(l,"onGestureStart",this.onGestureStart),Fe(l,"onGestureChange",this.onGestureChange),Fe(l,"onGestureEnd",this.onGestureEnd)):(Fe(l,"onTouchStart",this.onPinchStart),Fe(l,"onTouchMove",this.onPinchChange),Fe(l,"onTouchEnd",this.onPinchEnd),Fe(l,"onTouchCancel",this.onPinchEnd),Fe(l,"onWheel",this.onWheel))},r})(Lp);function Up(t,r){r===void 0&&(r={}),tn.set("pinch",Kp);var u=A.useRef();return u.current||(u.current=Im(Pp,_m)),Mm({pinch:t},u.current(r))}const Zp=t=>{const r=localStorage.getItem(t);return typeof r=="string"?JSON.parse(r):void 0},$p=(t,r)=>{r!==void 0&&localStorage.setItem(t,JSON.stringify(r))},Tn=(t,r)=>{const[u,a]=A.useState(()=>{const l=Zp(t);return l||r});return A.useEffect(()=>{$p(t,u)},[t,u]),[u,a]},Vp=(t,r,u)=>{const[a,l]=A.useState(null),[c,f]=A.useState(null),[z,p]=Tn("zoomLevel",u),g=E=>{l(E),f(z)},k=E=>{if(!a)return;const M=E/a,_=Math.floor(Math.log10(M)*10),Y=Math.min(Math.max(t,c+_),r);p(Y)},T=Up(E=>{E.first&&g(E.da[0]),k(E.da[0])});return[z,T]},Yp=t=>{const[r,u]=Tn("chosenSong",1),[a,l]=Tn("starredSongs",[]),[c,f]=Tn("onlyStarred",!1),[z,p]=Tn("selectedSong",null),g=a.length;A.useEffect(()=>{c&&(a.length?a.find(x=>x===r)||u(a[0]):f(!1))},[c,f,r,u,a]);const k=x=>{const V=r===x,K=a.indexOf(x),Q=K+1,te=!!Q,X=z===x;return{chosen:V,starredNumber:Q,starred:te,toggleStarred:()=>{p(te?ee=>ee===x?a.length<=1?null:a.length>K+1?a[K+1]:a[K-1]:ee:x),l(ee=>te?ee.filter(se=>se!==x):[...ee,x])},selected:X,toggleSelected:()=>p(X?null:x),moveUp:K<1?void 0:()=>l(ee=>{const se=ee.filter(pe=>pe!==x);return se.splice(K-1,0,x),se}),moveDown:K>a.length-2?void 0:()=>l(ee=>{const se=ee.filter(pe=>pe!==x);return se.splice(K+1,0,x),se})}},T=x=>({...x,...k(x.number)}),M=(c?a.map(x=>t.find(V=>V.number===x)):t).map(T),_=x=>{const K=M.findIndex(te=>te.chosen)-x,Q=K>=M.length?0:K<0?M.length-1:K;u(M[Q].number)},Y=()=>f(x=>!x),$=Hp(x=>{const[V]=x.swipe;V!==0&&_(V)});return{songs:M,setChosenSong:u,starredCount:g,onlyStarred:c,toggleOnlyStarred:Y,swipeChangeSong:$}},Jm=({parsedSongs:t})=>{const{songs:r,setChosenSong:u,starredCount:a,onlyStarred:l,selectedSong:c,toggleOnlyStarred:f,swipeChangeSong:z}=Yp(t),[p,g]=Vp(1,20,5),[k,T]=Tn("menuShown",!1),[E,M]=Tn("chordsShown",!0),_=()=>T(!0),Y=()=>T(!1),$=()=>M(!0),x=()=>M(!1),V=Q=>{u(Q),Y()},K=r.find(Q=>Q.chosen);return P.jsxs(ti.Fragment,{children:[!k&&P.jsx(bm,{onlyStarred:l,chordsShown:E,onClickMenu:_,onClickGuitar:E?x:$}),P.jsx("div",{...z(),...g(),className:`container-lg pt-1 min-vh-100 bg-white songbook zoom-level-${p}`,children:!!K&&P.jsx(xd,{song:K,starredCount:a,chordsShown:E})}),P.jsx(km,{songs:r,chooseSong:V,starredCount:a,selectedSong:c,onlyStarred:l,toggleOnlyStarred:f,show:k,onClose:Y})]})};Jm.propTypes={parsedSongs:W.array.isRequired};const Qp=()=>P.jsx(Jm,{parsedSongs:Rz});Dn.render(P.jsx(ti.StrictMode,{children:P.jsx(Qp,{})}),document.getElementById("root"));
