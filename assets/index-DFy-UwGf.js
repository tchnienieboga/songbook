(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))s(c);new MutationObserver(c=>{for(const d of c)if(d.type==="childList")for(const f of d.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function r(c){const d={};return c.integrity&&(d.integrity=c.integrity),c.referrerPolicy&&(d.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?d.credentials="include":c.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function s(c){if(c.ep)return;c.ep=!0;const d=r(c);fetch(c.href,d)}})();function Ra(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var ul={exports:{}},Aa={},cl={exports:{}},se={};var cm;function fp(){if(cm)return se;cm=1;var n=Symbol.for("react.element"),a=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),d=Symbol.for("react.provider"),f=Symbol.for("react.context"),y=Symbol.for("react.forward_ref"),w=Symbol.for("react.suspense"),j=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),D=Symbol.iterator;function A(g){return g===null||typeof g!="object"?null:(g=D&&g[D]||g["@@iterator"],typeof g=="function"?g:null)}var F={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,_={};function W(g,E,ee){this.props=g,this.context=E,this.refs=_,this.updater=ee||F}W.prototype.isReactComponent={},W.prototype.setState=function(g,E){if(typeof g!="object"&&typeof g!="function"&&g!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,g,E,"setState")},W.prototype.forceUpdate=function(g){this.updater.enqueueForceUpdate(this,g,"forceUpdate")};function O(){}O.prototype=W.prototype;function Y(g,E,ee){this.props=g,this.context=E,this.refs=_,this.updater=ee||F}var Z=Y.prototype=new O;Z.constructor=Y,M(Z,W.prototype),Z.isPureReactComponent=!0;var ne=Array.isArray,H=Object.prototype.hasOwnProperty,ae={current:null},le={key:!0,ref:!0,__self:!0,__source:!0};function ze(g,E,ee){var te,oe={},ue=null,ye=null;if(E!=null)for(te in E.ref!==void 0&&(ye=E.ref),E.key!==void 0&&(ue=""+E.key),E)H.call(E,te)&&!le.hasOwnProperty(te)&&(oe[te]=E[te]);var ce=arguments.length-2;if(ce===1)oe.children=ee;else if(1<ce){for(var we=Array(ce),Ne=0;Ne<ce;Ne++)we[Ne]=arguments[Ne+2];oe.children=we}if(g&&g.defaultProps)for(te in ce=g.defaultProps,ce)oe[te]===void 0&&(oe[te]=ce[te]);return{$$typeof:n,type:g,key:ue,ref:ye,props:oe,_owner:ae.current}}function _e(g,E){return{$$typeof:n,type:g.type,key:E,ref:g.ref,props:g.props,_owner:g._owner}}function qe(g){return typeof g=="object"&&g!==null&&g.$$typeof===n}function wi(g){var E={"=":"=0",":":"=2"};return"$"+g.replace(/[=:]/g,function(ee){return E[ee]})}var ei=/\/+/g;function Me(g,E){return typeof g=="object"&&g!==null&&g.key!=null?wi(""+g.key):E.toString(36)}function $e(g,E,ee,te,oe){var ue=typeof g;(ue==="undefined"||ue==="boolean")&&(g=null);var ye=!1;if(g===null)ye=!0;else switch(ue){case"string":case"number":ye=!0;break;case"object":switch(g.$$typeof){case n:case a:ye=!0}}if(ye)return ye=g,oe=oe(ye),g=te===""?"."+Me(ye,0):te,ne(oe)?(ee="",g!=null&&(ee=g.replace(ei,"$&/")+"/"),$e(oe,E,ee,"",function(Ne){return Ne})):oe!=null&&(qe(oe)&&(oe=_e(oe,ee+(!oe.key||ye&&ye.key===oe.key?"":(""+oe.key).replace(ei,"$&/")+"/")+g)),E.push(oe)),1;if(ye=0,te=te===""?".":te+":",ne(g))for(var ce=0;ce<g.length;ce++){ue=g[ce];var we=te+Me(ue,ce);ye+=$e(ue,E,ee,we,oe)}else if(we=A(g),typeof we=="function")for(g=we.call(g),ce=0;!(ue=g.next()).done;)ue=ue.value,we=te+Me(ue,ce++),ye+=$e(ue,E,ee,we,oe);else if(ue==="object")throw E=String(g),Error("Objects are not valid as a React child (found: "+(E==="[object Object]"?"object with keys {"+Object.keys(g).join(", ")+"}":E)+"). If you meant to render a collection of children, use an array instead.");return ye}function ai(g,E,ee){if(g==null)return g;var te=[],oe=0;return $e(g,te,"","",function(ue){return E.call(ee,ue,oe++)}),te}function Ae(g){if(g._status===-1){var E=g._result;E=E(),E.then(function(ee){(g._status===0||g._status===-1)&&(g._status=1,g._result=ee)},function(ee){(g._status===0||g._status===-1)&&(g._status=2,g._result=ee)}),g._status===-1&&(g._status=0,g._result=E)}if(g._status===1)return g._result.default;throw g._result}var pe={current:null},N={transition:null},Q={ReactCurrentDispatcher:pe,ReactCurrentBatchConfig:N,ReactCurrentOwner:ae};function I(){throw Error("act(...) is not supported in production builds of React.")}return se.Children={map:ai,forEach:function(g,E,ee){ai(g,function(){E.apply(this,arguments)},ee)},count:function(g){var E=0;return ai(g,function(){E++}),E},toArray:function(g){return ai(g,function(E){return E})||[]},only:function(g){if(!qe(g))throw Error("React.Children.only expected to receive a single React element child.");return g}},se.Component=W,se.Fragment=r,se.Profiler=c,se.PureComponent=Y,se.StrictMode=s,se.Suspense=w,se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Q,se.act=I,se.cloneElement=function(g,E,ee){if(g==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+g+".");var te=M({},g.props),oe=g.key,ue=g.ref,ye=g._owner;if(E!=null){if(E.ref!==void 0&&(ue=E.ref,ye=ae.current),E.key!==void 0&&(oe=""+E.key),g.type&&g.type.defaultProps)var ce=g.type.defaultProps;for(we in E)H.call(E,we)&&!le.hasOwnProperty(we)&&(te[we]=E[we]===void 0&&ce!==void 0?ce[we]:E[we])}var we=arguments.length-2;if(we===1)te.children=ee;else if(1<we){ce=Array(we);for(var Ne=0;Ne<we;Ne++)ce[Ne]=arguments[Ne+2];te.children=ce}return{$$typeof:n,type:g.type,key:oe,ref:ue,props:te,_owner:ye}},se.createContext=function(g){return g={$$typeof:f,_currentValue:g,_currentValue2:g,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},g.Provider={$$typeof:d,_context:g},g.Consumer=g},se.createElement=ze,se.createFactory=function(g){var E=ze.bind(null,g);return E.type=g,E},se.createRef=function(){return{current:null}},se.forwardRef=function(g){return{$$typeof:y,render:g}},se.isValidElement=qe,se.lazy=function(g){return{$$typeof:v,_payload:{_status:-1,_result:g},_init:Ae}},se.memo=function(g,E){return{$$typeof:j,type:g,compare:E===void 0?null:E}},se.startTransition=function(g){var E=N.transition;N.transition={};try{g()}finally{N.transition=E}},se.unstable_act=I,se.useCallback=function(g,E){return pe.current.useCallback(g,E)},se.useContext=function(g){return pe.current.useContext(g)},se.useDebugValue=function(){},se.useDeferredValue=function(g){return pe.current.useDeferredValue(g)},se.useEffect=function(g,E){return pe.current.useEffect(g,E)},se.useId=function(){return pe.current.useId()},se.useImperativeHandle=function(g,E,ee){return pe.current.useImperativeHandle(g,E,ee)},se.useInsertionEffect=function(g,E){return pe.current.useInsertionEffect(g,E)},se.useLayoutEffect=function(g,E){return pe.current.useLayoutEffect(g,E)},se.useMemo=function(g,E){return pe.current.useMemo(g,E)},se.useReducer=function(g,E,ee){return pe.current.useReducer(g,E,ee)},se.useRef=function(g){return pe.current.useRef(g)},se.useState=function(g){return pe.current.useState(g)},se.useSyncExternalStore=function(g,E,ee){return pe.current.useSyncExternalStore(g,E,ee)},se.useTransition=function(){return pe.current.useTransition()},se.version="18.3.1",se}var dm;function au(){return dm||(dm=1,cl.exports=fp()),cl.exports}var mm;function yp(){if(mm)return Aa;mm=1;var n=au(),a=Symbol.for("react.element"),r=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function f(y,w,j){var v,D={},A=null,F=null;j!==void 0&&(A=""+j),w.key!==void 0&&(A=""+w.key),w.ref!==void 0&&(F=w.ref);for(v in w)s.call(w,v)&&!d.hasOwnProperty(v)&&(D[v]=w[v]);if(y&&y.defaultProps)for(v in w=y.defaultProps,w)D[v]===void 0&&(D[v]=w[v]);return{$$typeof:a,type:y,key:A,ref:F,props:D,_owner:c.current}}return Aa.Fragment=r,Aa.jsx=f,Aa.jsxs=f,Aa}var fm;function zp(){return fm||(fm=1,ul.exports=yp()),ul.exports}var x=zp(),T=au();const ni=Ra(T),Tf=n=>n.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[\u0142]/g,"l").replace(/[^a-z ]/g,"").toLowerCase(),Sf="DIRECTIVE",xf="BODY_LINE",wp=n=>{const a=/{(.*):(.*)}/,r=n.match(a);if(r){const y=r[1].trim(),w=r[2].trim(),j=y==="number"?parseInt(w):w;return{type:Sf,directive:y,value:j}}const s=/\[.*?]/g,c=n.replace(s,"").trim(),d=(n.match(s)||[]).map(y=>y.replace(/[[\]]/g,""));return{type:xf,bodyLine:{lyrics:c,chords:d}}},pp=n=>{const a=n.split(`
`).map(wp),r=a.filter(y=>y.type===xf).map(y=>y.bodyLine),s=r.findIndex(y=>y.lyrics||y.chords.length),c=r.length-r.slice().reverse().findIndex(y=>y.lyrics||y.chords.length),d=r.slice(s,c),f=a.filter(y=>y.type===Sf).reduce((y,w)=>({...y,[w.directive]:w.value}),{});return{...f,latinTitle:Tf(f.title||""),body:d}},hp=n=>n.split(/---\s*\n/).map(pp),gp=`
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
`,jp=hp(gp);var dl={exports:{}},ml,ym;function kp(){if(ym)return ml;ym=1;var n="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return ml=n,ml}var fl,zm;function vp(){if(zm)return fl;zm=1;var n=kp();function a(){}function r(){}return r.resetWarningCache=a,fl=function(){function s(f,y,w,j,v,D){if(D!==n){var A=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw A.name="Invariant Violation",A}}s.isRequired=s;function c(){return s}var d={array:s,bool:s,func:s,number:s,object:s,string:s,symbol:s,any:s,arrayOf:c,element:s,elementType:s,instanceOf:c,node:s,objectOf:c,oneOf:c,oneOfType:c,shape:c,exact:c,checkPropTypes:r,resetWarningCache:a};return d.PropTypes=d,d},fl}var wm;function bp(){return wm||(wm=1,dl.exports=vp()()),dl.exports}var Cp=bp();const je=Ra(Cp),Gf=({chord:n})=>x.jsx("span",{className:"sb-chord",children:`${n} `});Gf.propTypes={chord:je.string.isRequired};var yl={exports:{}};var pm;function Dp(){return pm||(pm=1,(function(n){(function(){var a={}.hasOwnProperty;function r(){for(var d="",f=0;f<arguments.length;f++){var y=arguments[f];y&&(d=c(d,s(y)))}return d}function s(d){if(typeof d=="string"||typeof d=="number")return d;if(typeof d!="object")return"";if(Array.isArray(d))return r.apply(null,d);if(d.toString!==Object.prototype.toString&&!d.toString.toString().includes("[native code]"))return d.toString();var f="";for(var y in d)a.call(d,y)&&d[y]&&(f=c(f,y));return f}function c(d,f){return f?d?d+" "+f:d+f:d}n.exports?(r.default=r,n.exports=r):window.classNames=r})()})(yl)),yl.exports}var Ap=Dp();const Le=Ra(Ap),Nf=({song:n,chordsShown:a,starredCount:r})=>x.jsxs(x.Fragment,{children:[x.jsxs("div",{className:"row songtitle mt-1 mb-1",children:[x.jsxs("div",{className:Le("col-10",{"sb-starred-song":n.starred}),children:[n.number,". ",n.title]}),x.jsx("div",{className:"col-2 sb-star-info sb-lyrics",children:n.starred?`${n.starredNumber}/${r}`:x.jsx(x.Fragment,{children:" "})})]}),n.body.map(({lyrics:s,chords:c},d)=>x.jsxs("div",{className:"row",children:[x.jsx("div",{className:"col",children:s||x.jsx("br",{})}),a&&c.length>0&&x.jsx("div",{className:"col-4",children:c.map((f,y)=>x.jsx(Gf,{chord:f},y))})]},`songline${d}`))]});Nf.propTypes={song:je.object.isRequired,chordsShown:je.bool.isRequired,starredCount:je.number.isRequired};function Ep(n,a){if(n==null)return{};var r={};for(var s in n)if({}.hasOwnProperty.call(n,s)){if(a.indexOf(s)!==-1)continue;r[s]=n[s]}return r}function Rl(n,a){return Rl=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,s){return r.__proto__=s,r},Rl(n,a)}function Pp(n,a){n.prototype=Object.create(a.prototype),n.prototype.constructor=n,Rl(n,a)}const Tp=["xxl","xl","lg","md","sm","xs"],Sp="xs",ru=T.createContext({prefixes:{},breakpoints:Tp,minBreakpoint:Sp}),{Consumer:Mb,Provider:Ib}=ru;function en(n,a){const{prefixes:r}=T.useContext(ru);return n||r[a]||a}function xp(){const{dir:n}=T.useContext(ru);return n==="rtl"}function fo(n){return n&&n.ownerDocument||document}function Gp(n){var a=fo(n);return a&&a.defaultView||window}function Np(n,a){return Gp(n).getComputedStyle(n,a)}var Bp=/([A-Z])/g;function Rp(n){return n.replace(Bp,"-$1").toLowerCase()}var Op=/^ms-/;function Qr(n){return Rp(n).replace(Op,"-ms-")}var Fp=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;function _p(n){return!!(n&&Fp.test(n))}function Qt(n,a){var r="",s="";if(typeof a=="string")return n.style.getPropertyValue(Qr(a))||Np(n).getPropertyValue(Qr(a));Object.keys(a).forEach(function(c){var d=a[c];!d&&d!==0?n.style.removeProperty(Qr(c)):_p(c)?s+=c+"("+d+") ":r+=Qr(c)+": "+d+";"}),s&&(r+="transform: "+s+";"),n.style.cssText+=";"+r}var zl={exports:{}},ci={},wl={exports:{}},pl={};var hm;function Mp(){return hm||(hm=1,(function(n){function a(N,Q){var I=N.length;N.push(Q);e:for(;0<I;){var g=I-1>>>1,E=N[g];if(0<c(E,Q))N[g]=Q,N[I]=E,I=g;else break e}}function r(N){return N.length===0?null:N[0]}function s(N){if(N.length===0)return null;var Q=N[0],I=N.pop();if(I!==Q){N[0]=I;e:for(var g=0,E=N.length,ee=E>>>1;g<ee;){var te=2*(g+1)-1,oe=N[te],ue=te+1,ye=N[ue];if(0>c(oe,I))ue<E&&0>c(ye,oe)?(N[g]=ye,N[ue]=I,g=ue):(N[g]=oe,N[te]=I,g=te);else if(ue<E&&0>c(ye,I))N[g]=ye,N[ue]=I,g=ue;else break e}}return Q}function c(N,Q){var I=N.sortIndex-Q.sortIndex;return I!==0?I:N.id-Q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var d=performance;n.unstable_now=function(){return d.now()}}else{var f=Date,y=f.now();n.unstable_now=function(){return f.now()-y}}var w=[],j=[],v=1,D=null,A=3,F=!1,M=!1,_=!1,W=typeof setTimeout=="function"?setTimeout:null,O=typeof clearTimeout=="function"?clearTimeout:null,Y=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Z(N){for(var Q=r(j);Q!==null;){if(Q.callback===null)s(j);else if(Q.startTime<=N)s(j),Q.sortIndex=Q.expirationTime,a(w,Q);else break;Q=r(j)}}function ne(N){if(_=!1,Z(N),!M)if(r(w)!==null)M=!0,Ae(H);else{var Q=r(j);Q!==null&&pe(ne,Q.startTime-N)}}function H(N,Q){M=!1,_&&(_=!1,O(ze),ze=-1),F=!0;var I=A;try{for(Z(Q),D=r(w);D!==null&&(!(D.expirationTime>Q)||N&&!wi());){var g=D.callback;if(typeof g=="function"){D.callback=null,A=D.priorityLevel;var E=g(D.expirationTime<=Q);Q=n.unstable_now(),typeof E=="function"?D.callback=E:D===r(w)&&s(w),Z(Q)}else s(w);D=r(w)}if(D!==null)var ee=!0;else{var te=r(j);te!==null&&pe(ne,te.startTime-Q),ee=!1}return ee}finally{D=null,A=I,F=!1}}var ae=!1,le=null,ze=-1,_e=5,qe=-1;function wi(){return!(n.unstable_now()-qe<_e)}function ei(){if(le!==null){var N=n.unstable_now();qe=N;var Q=!0;try{Q=le(!0,N)}finally{Q?Me():(ae=!1,le=null)}}else ae=!1}var Me;if(typeof Y=="function")Me=function(){Y(ei)};else if(typeof MessageChannel<"u"){var $e=new MessageChannel,ai=$e.port2;$e.port1.onmessage=ei,Me=function(){ai.postMessage(null)}}else Me=function(){W(ei,0)};function Ae(N){le=N,ae||(ae=!0,Me())}function pe(N,Q){ze=W(function(){N(n.unstable_now())},Q)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(N){N.callback=null},n.unstable_continueExecution=function(){M||F||(M=!0,Ae(H))},n.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):_e=0<N?Math.floor(1e3/N):5},n.unstable_getCurrentPriorityLevel=function(){return A},n.unstable_getFirstCallbackNode=function(){return r(w)},n.unstable_next=function(N){switch(A){case 1:case 2:case 3:var Q=3;break;default:Q=A}var I=A;A=Q;try{return N()}finally{A=I}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(N,Q){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var I=A;A=N;try{return Q()}finally{A=I}},n.unstable_scheduleCallback=function(N,Q,I){var g=n.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?g+I:g):I=g,N){case 1:var E=-1;break;case 2:E=250;break;case 5:E=1073741823;break;case 4:E=1e4;break;default:E=5e3}return E=I+E,N={id:v++,callback:Q,priorityLevel:N,startTime:I,expirationTime:E,sortIndex:-1},I>g?(N.sortIndex=I,a(j,N),r(w)===null&&N===r(j)&&(_?(O(ze),ze=-1):_=!0,pe(ne,I-g))):(N.sortIndex=E,a(w,N),M||F||(M=!0,Ae(H))),N},n.unstable_shouldYield=wi,n.unstable_wrapCallback=function(N){var Q=A;return function(){var I=A;A=Q;try{return N.apply(this,arguments)}finally{A=I}}}})(pl)),pl}var gm;function Ip(){return gm||(gm=1,wl.exports=Mp()),wl.exports}var jm;function Jp(){if(jm)return ci;jm=1;var n=au(),a=Ip();function r(e){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)i+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,c={};function d(e,i){f(e,i),f(e+"Capture",i)}function f(e,i){for(c[e]=i,e=0;e<i.length;e++)s.add(i[e])}var y=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),w=Object.prototype.hasOwnProperty,j=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},D={};function A(e){return w.call(D,e)?!0:w.call(v,e)?!1:j.test(e)?D[e]=!0:(v[e]=!0,!1)}function F(e,i,t,o){if(t!==null&&t.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return o?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function M(e,i,t,o){if(i===null||typeof i>"u"||F(e,i,t,o))return!0;if(o)return!1;if(t!==null)switch(t.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function _(e,i,t,o,l,u,m){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=o,this.attributeNamespace=l,this.mustUseProperty=t,this.propertyName=e,this.type=i,this.sanitizeURL=u,this.removeEmptyString=m}var W={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){W[e]=new _(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var i=e[0];W[i]=new _(i,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){W[e]=new _(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){W[e]=new _(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){W[e]=new _(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){W[e]=new _(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){W[e]=new _(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){W[e]=new _(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){W[e]=new _(e,5,!1,e.toLowerCase(),null,!1,!1)});var O=/[\-:]([a-z])/g;function Y(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var i=e.replace(O,Y);W[i]=new _(i,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var i=e.replace(O,Y);W[i]=new _(i,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var i=e.replace(O,Y);W[i]=new _(i,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){W[e]=new _(e,1,!1,e.toLowerCase(),null,!1,!1)}),W.xlinkHref=new _("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){W[e]=new _(e,1,!1,e.toLowerCase(),null,!0,!0)});function Z(e,i,t,o){var l=W.hasOwnProperty(i)?W[i]:null;(l!==null?l.type!==0:o||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(M(i,t,l,o)&&(t=null),o||l===null?A(i)&&(t===null?e.removeAttribute(i):e.setAttribute(i,""+t)):l.mustUseProperty?e[l.propertyName]=t===null?l.type===3?!1:"":t:(i=l.attributeName,o=l.attributeNamespace,t===null?e.removeAttribute(i):(l=l.type,t=l===3||l===4&&t===!0?"":""+t,o?e.setAttributeNS(o,i,t):e.setAttribute(i,t))))}var ne=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,H=Symbol.for("react.element"),ae=Symbol.for("react.portal"),le=Symbol.for("react.fragment"),ze=Symbol.for("react.strict_mode"),_e=Symbol.for("react.profiler"),qe=Symbol.for("react.provider"),wi=Symbol.for("react.context"),ei=Symbol.for("react.forward_ref"),Me=Symbol.for("react.suspense"),$e=Symbol.for("react.suspense_list"),ai=Symbol.for("react.memo"),Ae=Symbol.for("react.lazy"),pe=Symbol.for("react.offscreen"),N=Symbol.iterator;function Q(e){return e===null||typeof e!="object"?null:(e=N&&e[N]||e["@@iterator"],typeof e=="function"?e:null)}var I=Object.assign,g;function E(e){if(g===void 0)try{throw Error()}catch(t){var i=t.stack.trim().match(/\n( *(at )?)/);g=i&&i[1]||""}return`
`+g+e}var ee=!1;function te(e,i){if(!e||ee)return"";ee=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(C){var o=C}Reflect.construct(e,[],i)}else{try{i.call()}catch(C){o=C}e.call(i.prototype)}else{try{throw Error()}catch(C){o=C}e()}}catch(C){if(C&&o&&typeof C.stack=="string"){for(var l=C.stack.split(`
`),u=o.stack.split(`
`),m=l.length-1,z=u.length-1;1<=m&&0<=z&&l[m]!==u[z];)z--;for(;1<=m&&0<=z;m--,z--)if(l[m]!==u[z]){if(m!==1||z!==1)do if(m--,z--,0>z||l[m]!==u[z]){var p=`
`+l[m].replace(" at new "," at ");return e.displayName&&p.includes("<anonymous>")&&(p=p.replace("<anonymous>",e.displayName)),p}while(1<=m&&0<=z);break}}}finally{ee=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?E(e):""}function oe(e){switch(e.tag){case 5:return E(e.type);case 16:return E("Lazy");case 13:return E("Suspense");case 19:return E("SuspenseList");case 0:case 2:case 15:return e=te(e.type,!1),e;case 11:return e=te(e.type.render,!1),e;case 1:return e=te(e.type,!0),e;default:return""}}function ue(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case le:return"Fragment";case ae:return"Portal";case _e:return"Profiler";case ze:return"StrictMode";case Me:return"Suspense";case $e:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case wi:return(e.displayName||"Context")+".Consumer";case qe:return(e._context.displayName||"Context")+".Provider";case ei:var i=e.render;return e=e.displayName,e||(e=i.displayName||i.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ai:return i=e.displayName||null,i!==null?i:ue(e.type)||"Memo";case Ae:i=e._payload,e=e._init;try{return ue(e(i))}catch{}}return null}function ye(e){var i=e.type;switch(e.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=i.render,e=e.displayName||e.name||"",i.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ue(i);case 8:return i===ze?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function ce(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function we(e){var i=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ne(e){var i=we(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,i),o=""+e[i];if(!e.hasOwnProperty(i)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var l=t.get,u=t.set;return Object.defineProperty(e,i,{configurable:!0,get:function(){return l.call(this)},set:function(m){o=""+m,u.call(this,m)}}),Object.defineProperty(e,i,{enumerable:t.enumerable}),{getValue:function(){return o},setValue:function(m){o=""+m},stopTracking:function(){e._valueTracker=null,delete e[i]}}}}function Wi(e){e._valueTracker||(e._valueTracker=Ne(e))}function Li(e){if(!e)return!1;var i=e._valueTracker;if(!i)return!0;var t=i.getValue(),o="";return e&&(o=we(e)?e.checked?"true":"false":e.value),e=o,e!==t?(i.setValue(e),!0):!1}function Ni(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Bi(e,i){var t=i.checked;return I({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function ge(e,i){var t=i.defaultValue==null?"":i.defaultValue,o=i.checked!=null?i.checked:i.defaultChecked;t=ce(i.value!=null?i.value:t),e._wrapperState={initialChecked:o,initialValue:t,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function St(e,i){i=i.checked,i!=null&&Z(e,"checked",i,!1)}function Hi(e,i){St(e,i);var t=ce(i.value),o=i.type;if(t!=null)o==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(o==="submit"||o==="reset"){e.removeAttribute("value");return}i.hasOwnProperty("value")?Mn(e,i.type,t):i.hasOwnProperty("defaultValue")&&Mn(e,i.type,ce(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(e.defaultChecked=!!i.defaultChecked)}function Ja(e,i,t){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var o=i.type;if(!(o!=="submit"&&o!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+e._wrapperState.initialValue,t||i===e.value||(e.value=i),e.defaultValue=i}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function Mn(e,i,t){(i!=="number"||Ni(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var xt=Array.isArray;function ot(e,i,t,o){if(e=e.options,i){i={};for(var l=0;l<t.length;l++)i["$"+t[l]]=!0;for(t=0;t<e.length;t++)l=i.hasOwnProperty("$"+e[t].value),e[t].selected!==l&&(e[t].selected=l),l&&o&&(e[t].defaultSelected=!0)}else{for(t=""+ce(t),i=null,l=0;l<e.length;l++){if(e[l].value===t){e[l].selected=!0,o&&(e[l].defaultSelected=!0);return}i!==null||e[l].disabled||(i=e[l])}i!==null&&(i.selected=!0)}}function In(e,i){if(i.dangerouslySetInnerHTML!=null)throw Error(r(91));return I({},i,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Wa(e,i){var t=i.value;if(t==null){if(t=i.children,i=i.defaultValue,t!=null){if(i!=null)throw Error(r(92));if(xt(t)){if(1<t.length)throw Error(r(93));t=t[0]}i=t}i==null&&(i=""),t=i}e._wrapperState={initialValue:ce(t)}}function Jn(e,i){var t=ce(i.value),o=ce(i.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),i.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),o!=null&&(e.defaultValue=""+o)}function La(e){var i=e.textContent;i===e._wrapperState.initialValue&&i!==""&&i!==null&&(e.value=i)}function de(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ri(e,i){return e==null||e==="http://www.w3.org/1999/xhtml"?de(i):e==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Gt,Cu=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,t,o,l){MSApp.execUnsafeLocalFunction(function(){return e(i,t,o,l)})}:e})(function(e,i){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=i;else{for(Gt=Gt||document.createElement("div"),Gt.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Gt.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;i.firstChild;)e.appendChild(i.firstChild)}});function Wn(e,i){if(i){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=i;return}}e.textContent=i}var Ln={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},pz=["Webkit","ms","Moz","O"];Object.keys(Ln).forEach(function(e){pz.forEach(function(i){i=i+e.charAt(0).toUpperCase()+e.substring(1),Ln[i]=Ln[e]})});function Du(e,i,t){return i==null||typeof i=="boolean"||i===""?"":t||typeof i!="number"||i===0||Ln.hasOwnProperty(e)&&Ln[e]?(""+i).trim():i+"px"}function Au(e,i){e=e.style;for(var t in i)if(i.hasOwnProperty(t)){var o=t.indexOf("--")===0,l=Du(t,i[t],o);t==="float"&&(t="cssFloat"),o?e.setProperty(t,l):e[t]=l}}var hz=I({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ko(e,i){if(i){if(hz[e]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(r(137,e));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(r(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(r(61))}if(i.style!=null&&typeof i.style!="object")throw Error(r(62))}}function vo(e,i){if(e.indexOf("-")===-1)return typeof i.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var bo=null;function Co(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Do=null,tn=null,nn=null;function Eu(e){if(e=da(e)){if(typeof Do!="function")throw Error(r(280));var i=e.stateNode;i&&(i=mr(i),Do(e.stateNode,e.type,i))}}function Pu(e){tn?nn?nn.push(e):nn=[e]:tn=e}function Tu(){if(tn){var e=tn,i=nn;if(nn=tn=null,Eu(e),i)for(e=0;e<i.length;e++)Eu(i[e])}}function Su(e,i){return e(i)}function xu(){}var Ao=!1;function Gu(e,i,t){if(Ao)return e(i,t);Ao=!0;try{return Su(e,i,t)}finally{Ao=!1,(tn!==null||nn!==null)&&(xu(),Tu())}}function Hn(e,i){var t=e.stateNode;if(t===null)return null;var o=mr(t);if(o===null)return null;t=o[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(r(231,i,typeof t));return t}var Eo=!1;if(y)try{var Kn={};Object.defineProperty(Kn,"passive",{get:function(){Eo=!0}}),window.addEventListener("test",Kn,Kn),window.removeEventListener("test",Kn,Kn)}catch{Eo=!1}function gz(e,i,t,o,l,u,m,z,p){var C=Array.prototype.slice.call(arguments,3);try{i.apply(t,C)}catch(S){this.onError(S)}}var Un=!1,Ha=null,Ka=!1,Po=null,jz={onError:function(e){Un=!0,Ha=e}};function kz(e,i,t,o,l,u,m,z,p){Un=!1,Ha=null,gz.apply(jz,arguments)}function vz(e,i,t,o,l,u,m,z,p){if(kz.apply(this,arguments),Un){if(Un){var C=Ha;Un=!1,Ha=null}else throw Error(r(198));Ka||(Ka=!0,Po=C)}}function Nt(e){var i=e,t=e;if(e.alternate)for(;i.return;)i=i.return;else{e=i;do i=e,(i.flags&4098)!==0&&(t=i.return),e=i.return;while(e)}return i.tag===3?t:null}function Nu(e){if(e.tag===13){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function Bu(e){if(Nt(e)!==e)throw Error(r(188))}function bz(e){var i=e.alternate;if(!i){if(i=Nt(e),i===null)throw Error(r(188));return i!==e?null:e}for(var t=e,o=i;;){var l=t.return;if(l===null)break;var u=l.alternate;if(u===null){if(o=l.return,o!==null){t=o;continue}break}if(l.child===u.child){for(u=l.child;u;){if(u===t)return Bu(l),e;if(u===o)return Bu(l),i;u=u.sibling}throw Error(r(188))}if(t.return!==o.return)t=l,o=u;else{for(var m=!1,z=l.child;z;){if(z===t){m=!0,t=l,o=u;break}if(z===o){m=!0,o=l,t=u;break}z=z.sibling}if(!m){for(z=u.child;z;){if(z===t){m=!0,t=u,o=l;break}if(z===o){m=!0,o=u,t=l;break}z=z.sibling}if(!m)throw Error(r(189))}}if(t.alternate!==o)throw Error(r(190))}if(t.tag!==3)throw Error(r(188));return t.stateNode.current===t?e:i}function Ru(e){return e=bz(e),e!==null?Ou(e):null}function Ou(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var i=Ou(e);if(i!==null)return i;e=e.sibling}return null}var Fu=a.unstable_scheduleCallback,_u=a.unstable_cancelCallback,Cz=a.unstable_shouldYield,Dz=a.unstable_requestPaint,xe=a.unstable_now,Az=a.unstable_getCurrentPriorityLevel,To=a.unstable_ImmediatePriority,Mu=a.unstable_UserBlockingPriority,Ua=a.unstable_NormalPriority,Ez=a.unstable_LowPriority,Iu=a.unstable_IdlePriority,$a=null,Oi=null;function Pz(e){if(Oi&&typeof Oi.onCommitFiberRoot=="function")try{Oi.onCommitFiberRoot($a,e,void 0,(e.current.flags&128)===128)}catch{}}var Ci=Math.clz32?Math.clz32:xz,Tz=Math.log,Sz=Math.LN2;function xz(e){return e>>>=0,e===0?32:31-(Tz(e)/Sz|0)|0}var Za=64,Va=4194304;function $n(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ya(e,i){var t=e.pendingLanes;if(t===0)return 0;var o=0,l=e.suspendedLanes,u=e.pingedLanes,m=t&268435455;if(m!==0){var z=m&~l;z!==0?o=$n(z):(u&=m,u!==0&&(o=$n(u)))}else m=t&~l,m!==0?o=$n(m):u!==0&&(o=$n(u));if(o===0)return 0;if(i!==0&&i!==o&&(i&l)===0&&(l=o&-o,u=i&-i,l>=u||l===16&&(u&4194240)!==0))return i;if((o&4)!==0&&(o|=t&16),i=e.entangledLanes,i!==0)for(e=e.entanglements,i&=o;0<i;)t=31-Ci(i),l=1<<t,o|=e[t],i&=~l;return o}function Gz(e,i){switch(e){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Nz(e,i){for(var t=e.suspendedLanes,o=e.pingedLanes,l=e.expirationTimes,u=e.pendingLanes;0<u;){var m=31-Ci(u),z=1<<m,p=l[m];p===-1?((z&t)===0||(z&o)!==0)&&(l[m]=Gz(z,i)):p<=i&&(e.expiredLanes|=z),u&=~z}}function So(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ju(){var e=Za;return Za<<=1,(Za&4194240)===0&&(Za=64),e}function xo(e){for(var i=[],t=0;31>t;t++)i.push(e);return i}function Zn(e,i,t){e.pendingLanes|=i,i!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,i=31-Ci(i),e[i]=t}function Bz(e,i){var t=e.pendingLanes&~i;e.pendingLanes=i,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=i,e.mutableReadLanes&=i,e.entangledLanes&=i,i=e.entanglements;var o=e.eventTimes;for(e=e.expirationTimes;0<t;){var l=31-Ci(t),u=1<<l;i[l]=0,o[l]=-1,e[l]=-1,t&=~u}}function Go(e,i){var t=e.entangledLanes|=i;for(e=e.entanglements;t;){var o=31-Ci(t),l=1<<o;l&i|e[o]&i&&(e[o]|=i),t&=~l}}var he=0;function Wu(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Lu,No,Hu,Ku,Uu,Bo=!1,Qa=[],st=null,lt=null,ut=null,Vn=new Map,Yn=new Map,ct=[],Rz="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function $u(e,i){switch(e){case"focusin":case"focusout":st=null;break;case"dragenter":case"dragleave":lt=null;break;case"mouseover":case"mouseout":ut=null;break;case"pointerover":case"pointerout":Vn.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Yn.delete(i.pointerId)}}function Qn(e,i,t,o,l,u){return e===null||e.nativeEvent!==u?(e={blockedOn:i,domEventName:t,eventSystemFlags:o,nativeEvent:u,targetContainers:[l]},i!==null&&(i=da(i),i!==null&&No(i)),e):(e.eventSystemFlags|=o,i=e.targetContainers,l!==null&&i.indexOf(l)===-1&&i.push(l),e)}function Oz(e,i,t,o,l){switch(i){case"focusin":return st=Qn(st,e,i,t,o,l),!0;case"dragenter":return lt=Qn(lt,e,i,t,o,l),!0;case"mouseover":return ut=Qn(ut,e,i,t,o,l),!0;case"pointerover":var u=l.pointerId;return Vn.set(u,Qn(Vn.get(u)||null,e,i,t,o,l)),!0;case"gotpointercapture":return u=l.pointerId,Yn.set(u,Qn(Yn.get(u)||null,e,i,t,o,l)),!0}return!1}function Zu(e){var i=Bt(e.target);if(i!==null){var t=Nt(i);if(t!==null){if(i=t.tag,i===13){if(i=Nu(t),i!==null){e.blockedOn=i,Uu(e.priority,function(){Hu(t)});return}}else if(i===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Xa(e){if(e.blockedOn!==null)return!1;for(var i=e.targetContainers;0<i.length;){var t=Oo(e.domEventName,e.eventSystemFlags,i[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var o=new t.constructor(t.type,t);bo=o,t.target.dispatchEvent(o),bo=null}else return i=da(t),i!==null&&No(i),e.blockedOn=t,!1;i.shift()}return!0}function Vu(e,i,t){Xa(e)&&t.delete(i)}function Fz(){Bo=!1,st!==null&&Xa(st)&&(st=null),lt!==null&&Xa(lt)&&(lt=null),ut!==null&&Xa(ut)&&(ut=null),Vn.forEach(Vu),Yn.forEach(Vu)}function Xn(e,i){e.blockedOn===i&&(e.blockedOn=null,Bo||(Bo=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,Fz)))}function qn(e){function i(l){return Xn(l,e)}if(0<Qa.length){Xn(Qa[0],e);for(var t=1;t<Qa.length;t++){var o=Qa[t];o.blockedOn===e&&(o.blockedOn=null)}}for(st!==null&&Xn(st,e),lt!==null&&Xn(lt,e),ut!==null&&Xn(ut,e),Vn.forEach(i),Yn.forEach(i),t=0;t<ct.length;t++)o=ct[t],o.blockedOn===e&&(o.blockedOn=null);for(;0<ct.length&&(t=ct[0],t.blockedOn===null);)Zu(t),t.blockedOn===null&&ct.shift()}var an=ne.ReactCurrentBatchConfig,qa=!0;function _z(e,i,t,o){var l=he,u=an.transition;an.transition=null;try{he=1,Ro(e,i,t,o)}finally{he=l,an.transition=u}}function Mz(e,i,t,o){var l=he,u=an.transition;an.transition=null;try{he=4,Ro(e,i,t,o)}finally{he=l,an.transition=u}}function Ro(e,i,t,o){if(qa){var l=Oo(e,i,t,o);if(l===null)qo(e,i,o,er,t),$u(e,o);else if(Oz(l,e,i,t,o))o.stopPropagation();else if($u(e,o),i&4&&-1<Rz.indexOf(e)){for(;l!==null;){var u=da(l);if(u!==null&&Lu(u),u=Oo(e,i,t,o),u===null&&qo(e,i,o,er,t),u===l)break;l=u}l!==null&&o.stopPropagation()}else qo(e,i,o,null,t)}}var er=null;function Oo(e,i,t,o){if(er=null,e=Co(o),e=Bt(e),e!==null)if(i=Nt(e),i===null)e=null;else if(t=i.tag,t===13){if(e=Nu(i),e!==null)return e;e=null}else if(t===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;e=null}else i!==e&&(e=null);return er=e,null}function Yu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Az()){case To:return 1;case Mu:return 4;case Ua:case Ez:return 16;case Iu:return 536870912;default:return 16}default:return 16}}var dt=null,Fo=null,ir=null;function Qu(){if(ir)return ir;var e,i=Fo,t=i.length,o,l="value"in dt?dt.value:dt.textContent,u=l.length;for(e=0;e<t&&i[e]===l[e];e++);var m=t-e;for(o=1;o<=m&&i[t-o]===l[u-o];o++);return ir=l.slice(e,1<o?1-o:void 0)}function tr(e){var i=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&i===13&&(e=13)):e=i,e===10&&(e=13),32<=e||e===13?e:0}function nr(){return!0}function Xu(){return!1}function di(e){function i(t,o,l,u,m){this._reactName=t,this._targetInst=l,this.type=o,this.nativeEvent=u,this.target=m,this.currentTarget=null;for(var z in e)e.hasOwnProperty(z)&&(t=e[z],this[z]=t?t(u):u[z]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?nr:Xu,this.isPropagationStopped=Xu,this}return I(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=nr)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=nr)},persist:function(){},isPersistent:nr}),i}var rn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_o=di(rn),ea=I({},rn,{view:0,detail:0}),Iz=di(ea),Mo,Io,ia,ar=I({},ea,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Wo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ia&&(ia&&e.type==="mousemove"?(Mo=e.screenX-ia.screenX,Io=e.screenY-ia.screenY):Io=Mo=0,ia=e),Mo)},movementY:function(e){return"movementY"in e?e.movementY:Io}}),qu=di(ar),Jz=I({},ar,{dataTransfer:0}),Wz=di(Jz),Lz=I({},ea,{relatedTarget:0}),Jo=di(Lz),Hz=I({},rn,{animationName:0,elapsedTime:0,pseudoElement:0}),Kz=di(Hz),Uz=I({},rn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),$z=di(Uz),Zz=I({},rn,{data:0}),ec=di(Zz),Vz={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Yz={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Qz={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Xz(e){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(e):(e=Qz[e])?!!i[e]:!1}function Wo(){return Xz}var qz=I({},ea,{key:function(e){if(e.key){var i=Vz[e.key]||e.key;if(i!=="Unidentified")return i}return e.type==="keypress"?(e=tr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Yz[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Wo,charCode:function(e){return e.type==="keypress"?tr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?tr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ew=di(qz),iw=I({},ar,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ic=di(iw),tw=I({},ea,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Wo}),nw=di(tw),aw=I({},rn,{propertyName:0,elapsedTime:0,pseudoElement:0}),rw=di(aw),ow=I({},ar,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),sw=di(ow),lw=[9,13,27,32],Lo=y&&"CompositionEvent"in window,ta=null;y&&"documentMode"in document&&(ta=document.documentMode);var uw=y&&"TextEvent"in window&&!ta,tc=y&&(!Lo||ta&&8<ta&&11>=ta),nc=" ",ac=!1;function rc(e,i){switch(e){case"keyup":return lw.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function oc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var on=!1;function cw(e,i){switch(e){case"compositionend":return oc(i);case"keypress":return i.which!==32?null:(ac=!0,nc);case"textInput":return e=i.data,e===nc&&ac?null:e;default:return null}}function dw(e,i){if(on)return e==="compositionend"||!Lo&&rc(e,i)?(e=Qu(),ir=Fo=dt=null,on=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return tc&&i.locale!=="ko"?null:i.data;default:return null}}var mw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function sc(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i==="input"?!!mw[e.type]:i==="textarea"}function lc(e,i,t,o){Pu(o),i=ur(i,"onChange"),0<i.length&&(t=new _o("onChange","change",null,t,o),e.push({event:t,listeners:i}))}var na=null,aa=null;function fw(e){Ac(e,0)}function rr(e){var i=dn(e);if(Li(i))return e}function yw(e,i){if(e==="change")return i}var uc=!1;if(y){var Ho;if(y){var Ko="oninput"in document;if(!Ko){var cc=document.createElement("div");cc.setAttribute("oninput","return;"),Ko=typeof cc.oninput=="function"}Ho=Ko}else Ho=!1;uc=Ho&&(!document.documentMode||9<document.documentMode)}function dc(){na&&(na.detachEvent("onpropertychange",mc),aa=na=null)}function mc(e){if(e.propertyName==="value"&&rr(aa)){var i=[];lc(i,aa,e,Co(e)),Gu(fw,i)}}function zw(e,i,t){e==="focusin"?(dc(),na=i,aa=t,na.attachEvent("onpropertychange",mc)):e==="focusout"&&dc()}function ww(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return rr(aa)}function pw(e,i){if(e==="click")return rr(i)}function hw(e,i){if(e==="input"||e==="change")return rr(i)}function gw(e,i){return e===i&&(e!==0||1/e===1/i)||e!==e&&i!==i}var Di=typeof Object.is=="function"?Object.is:gw;function ra(e,i){if(Di(e,i))return!0;if(typeof e!="object"||e===null||typeof i!="object"||i===null)return!1;var t=Object.keys(e),o=Object.keys(i);if(t.length!==o.length)return!1;for(o=0;o<t.length;o++){var l=t[o];if(!w.call(i,l)||!Di(e[l],i[l]))return!1}return!0}function fc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function yc(e,i){var t=fc(e);e=0;for(var o;t;){if(t.nodeType===3){if(o=e+t.textContent.length,e<=i&&o>=i)return{node:t,offset:i-e};e=o}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=fc(t)}}function zc(e,i){return e&&i?e===i?!0:e&&e.nodeType===3?!1:i&&i.nodeType===3?zc(e,i.parentNode):"contains"in e?e.contains(i):e.compareDocumentPosition?!!(e.compareDocumentPosition(i)&16):!1:!1}function wc(){for(var e=window,i=Ni();i instanceof e.HTMLIFrameElement;){try{var t=typeof i.contentWindow.location.href=="string"}catch{t=!1}if(t)e=i.contentWindow;else break;i=Ni(e.document)}return i}function Uo(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i&&(i==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||i==="textarea"||e.contentEditable==="true")}function jw(e){var i=wc(),t=e.focusedElem,o=e.selectionRange;if(i!==t&&t&&t.ownerDocument&&zc(t.ownerDocument.documentElement,t)){if(o!==null&&Uo(t)){if(i=o.start,e=o.end,e===void 0&&(e=i),"selectionStart"in t)t.selectionStart=i,t.selectionEnd=Math.min(e,t.value.length);else if(e=(i=t.ownerDocument||document)&&i.defaultView||window,e.getSelection){e=e.getSelection();var l=t.textContent.length,u=Math.min(o.start,l);o=o.end===void 0?u:Math.min(o.end,l),!e.extend&&u>o&&(l=o,o=u,u=l),l=yc(t,u);var m=yc(t,o);l&&m&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==m.node||e.focusOffset!==m.offset)&&(i=i.createRange(),i.setStart(l.node,l.offset),e.removeAllRanges(),u>o?(e.addRange(i),e.extend(m.node,m.offset)):(i.setEnd(m.node,m.offset),e.addRange(i)))}}for(i=[],e=t;e=e.parentNode;)e.nodeType===1&&i.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<i.length;t++)e=i[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var kw=y&&"documentMode"in document&&11>=document.documentMode,sn=null,$o=null,oa=null,Zo=!1;function pc(e,i,t){var o=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Zo||sn==null||sn!==Ni(o)||(o=sn,"selectionStart"in o&&Uo(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),oa&&ra(oa,o)||(oa=o,o=ur($o,"onSelect"),0<o.length&&(i=new _o("onSelect","select",null,i,t),e.push({event:i,listeners:o}),i.target=sn)))}function or(e,i){var t={};return t[e.toLowerCase()]=i.toLowerCase(),t["Webkit"+e]="webkit"+i,t["Moz"+e]="moz"+i,t}var ln={animationend:or("Animation","AnimationEnd"),animationiteration:or("Animation","AnimationIteration"),animationstart:or("Animation","AnimationStart"),transitionend:or("Transition","TransitionEnd")},Vo={},hc={};y&&(hc=document.createElement("div").style,"AnimationEvent"in window||(delete ln.animationend.animation,delete ln.animationiteration.animation,delete ln.animationstart.animation),"TransitionEvent"in window||delete ln.transitionend.transition);function sr(e){if(Vo[e])return Vo[e];if(!ln[e])return e;var i=ln[e],t;for(t in i)if(i.hasOwnProperty(t)&&t in hc)return Vo[e]=i[t];return e}var gc=sr("animationend"),jc=sr("animationiteration"),kc=sr("animationstart"),vc=sr("transitionend"),bc=new Map,Cc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function mt(e,i){bc.set(e,i),d(i,[e])}for(var Yo=0;Yo<Cc.length;Yo++){var Qo=Cc[Yo],vw=Qo.toLowerCase(),bw=Qo[0].toUpperCase()+Qo.slice(1);mt(vw,"on"+bw)}mt(gc,"onAnimationEnd"),mt(jc,"onAnimationIteration"),mt(kc,"onAnimationStart"),mt("dblclick","onDoubleClick"),mt("focusin","onFocus"),mt("focusout","onBlur"),mt(vc,"onTransitionEnd"),f("onMouseEnter",["mouseout","mouseover"]),f("onMouseLeave",["mouseout","mouseover"]),f("onPointerEnter",["pointerout","pointerover"]),f("onPointerLeave",["pointerout","pointerover"]),d("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),d("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),d("onBeforeInput",["compositionend","keypress","textInput","paste"]),d("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),d("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),d("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var sa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Cw=new Set("cancel close invalid load scroll toggle".split(" ").concat(sa));function Dc(e,i,t){var o=e.type||"unknown-event";e.currentTarget=t,vz(o,i,void 0,e),e.currentTarget=null}function Ac(e,i){i=(i&4)!==0;for(var t=0;t<e.length;t++){var o=e[t],l=o.event;o=o.listeners;e:{var u=void 0;if(i)for(var m=o.length-1;0<=m;m--){var z=o[m],p=z.instance,C=z.currentTarget;if(z=z.listener,p!==u&&l.isPropagationStopped())break e;Dc(l,z,C),u=p}else for(m=0;m<o.length;m++){if(z=o[m],p=z.instance,C=z.currentTarget,z=z.listener,p!==u&&l.isPropagationStopped())break e;Dc(l,z,C),u=p}}}if(Ka)throw e=Po,Ka=!1,Po=null,e}function ve(e,i){var t=i[rs];t===void 0&&(t=i[rs]=new Set);var o=e+"__bubble";t.has(o)||(Ec(i,e,2,!1),t.add(o))}function Xo(e,i,t){var o=0;i&&(o|=4),Ec(t,e,o,i)}var lr="_reactListening"+Math.random().toString(36).slice(2);function la(e){if(!e[lr]){e[lr]=!0,s.forEach(function(t){t!=="selectionchange"&&(Cw.has(t)||Xo(t,!1,e),Xo(t,!0,e))});var i=e.nodeType===9?e:e.ownerDocument;i===null||i[lr]||(i[lr]=!0,Xo("selectionchange",!1,i))}}function Ec(e,i,t,o){switch(Yu(i)){case 1:var l=_z;break;case 4:l=Mz;break;default:l=Ro}t=l.bind(null,i,t,e),l=void 0,!Eo||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(l=!0),o?l!==void 0?e.addEventListener(i,t,{capture:!0,passive:l}):e.addEventListener(i,t,!0):l!==void 0?e.addEventListener(i,t,{passive:l}):e.addEventListener(i,t,!1)}function qo(e,i,t,o,l){var u=o;if((i&1)===0&&(i&2)===0&&o!==null)e:for(;;){if(o===null)return;var m=o.tag;if(m===3||m===4){var z=o.stateNode.containerInfo;if(z===l||z.nodeType===8&&z.parentNode===l)break;if(m===4)for(m=o.return;m!==null;){var p=m.tag;if((p===3||p===4)&&(p=m.stateNode.containerInfo,p===l||p.nodeType===8&&p.parentNode===l))return;m=m.return}for(;z!==null;){if(m=Bt(z),m===null)return;if(p=m.tag,p===5||p===6){o=u=m;continue e}z=z.parentNode}}o=o.return}Gu(function(){var C=u,S=Co(t),G=[];e:{var P=bc.get(e);if(P!==void 0){var J=_o,K=e;switch(e){case"keypress":if(tr(t)===0)break e;case"keydown":case"keyup":J=ew;break;case"focusin":K="focus",J=Jo;break;case"focusout":K="blur",J=Jo;break;case"beforeblur":case"afterblur":J=Jo;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":J=qu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":J=Wz;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":J=nw;break;case gc:case jc:case kc:J=Kz;break;case vc:J=rw;break;case"scroll":J=Iz;break;case"wheel":J=sw;break;case"copy":case"cut":case"paste":J=$z;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":J=ic}var U=(i&4)!==0,Ge=!U&&e==="scroll",k=U?P!==null?P+"Capture":null:P;U=[];for(var h=C,b;h!==null;){b=h;var R=b.stateNode;if(b.tag===5&&R!==null&&(b=R,k!==null&&(R=Hn(h,k),R!=null&&U.push(ua(h,R,b)))),Ge)break;h=h.return}0<U.length&&(P=new J(P,K,null,t,S),G.push({event:P,listeners:U}))}}if((i&7)===0){e:{if(P=e==="mouseover"||e==="pointerover",J=e==="mouseout"||e==="pointerout",P&&t!==bo&&(K=t.relatedTarget||t.fromElement)&&(Bt(K)||K[Ki]))break e;if((J||P)&&(P=S.window===S?S:(P=S.ownerDocument)?P.defaultView||P.parentWindow:window,J?(K=t.relatedTarget||t.toElement,J=C,K=K?Bt(K):null,K!==null&&(Ge=Nt(K),K!==Ge||K.tag!==5&&K.tag!==6)&&(K=null)):(J=null,K=C),J!==K)){if(U=qu,R="onMouseLeave",k="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(U=ic,R="onPointerLeave",k="onPointerEnter",h="pointer"),Ge=J==null?P:dn(J),b=K==null?P:dn(K),P=new U(R,h+"leave",J,t,S),P.target=Ge,P.relatedTarget=b,R=null,Bt(S)===C&&(U=new U(k,h+"enter",K,t,S),U.target=b,U.relatedTarget=Ge,R=U),Ge=R,J&&K)i:{for(U=J,k=K,h=0,b=U;b;b=un(b))h++;for(b=0,R=k;R;R=un(R))b++;for(;0<h-b;)U=un(U),h--;for(;0<b-h;)k=un(k),b--;for(;h--;){if(U===k||k!==null&&U===k.alternate)break i;U=un(U),k=un(k)}U=null}else U=null;J!==null&&Pc(G,P,J,U,!1),K!==null&&Ge!==null&&Pc(G,Ge,K,U,!0)}}e:{if(P=C?dn(C):window,J=P.nodeName&&P.nodeName.toLowerCase(),J==="select"||J==="input"&&P.type==="file")var $=yw;else if(sc(P))if(uc)$=hw;else{$=ww;var X=zw}else(J=P.nodeName)&&J.toLowerCase()==="input"&&(P.type==="checkbox"||P.type==="radio")&&($=pw);if($&&($=$(e,C))){lc(G,$,t,S);break e}X&&X(e,P,C),e==="focusout"&&(X=P._wrapperState)&&X.controlled&&P.type==="number"&&Mn(P,"number",P.value)}switch(X=C?dn(C):window,e){case"focusin":(sc(X)||X.contentEditable==="true")&&(sn=X,$o=C,oa=null);break;case"focusout":oa=$o=sn=null;break;case"mousedown":Zo=!0;break;case"contextmenu":case"mouseup":case"dragend":Zo=!1,pc(G,t,S);break;case"selectionchange":if(kw)break;case"keydown":case"keyup":pc(G,t,S)}var q;if(Lo)e:{switch(e){case"compositionstart":var ie="onCompositionStart";break e;case"compositionend":ie="onCompositionEnd";break e;case"compositionupdate":ie="onCompositionUpdate";break e}ie=void 0}else on?rc(e,t)&&(ie="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(ie="onCompositionStart");ie&&(tc&&t.locale!=="ko"&&(on||ie!=="onCompositionStart"?ie==="onCompositionEnd"&&on&&(q=Qu()):(dt=S,Fo="value"in dt?dt.value:dt.textContent,on=!0)),X=ur(C,ie),0<X.length&&(ie=new ec(ie,e,null,t,S),G.push({event:ie,listeners:X}),q?ie.data=q:(q=oc(t),q!==null&&(ie.data=q)))),(q=uw?cw(e,t):dw(e,t))&&(C=ur(C,"onBeforeInput"),0<C.length&&(S=new ec("onBeforeInput","beforeinput",null,t,S),G.push({event:S,listeners:C}),S.data=q))}Ac(G,i)})}function ua(e,i,t){return{instance:e,listener:i,currentTarget:t}}function ur(e,i){for(var t=i+"Capture",o=[];e!==null;){var l=e,u=l.stateNode;l.tag===5&&u!==null&&(l=u,u=Hn(e,t),u!=null&&o.unshift(ua(e,u,l)),u=Hn(e,i),u!=null&&o.push(ua(e,u,l))),e=e.return}return o}function un(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Pc(e,i,t,o,l){for(var u=i._reactName,m=[];t!==null&&t!==o;){var z=t,p=z.alternate,C=z.stateNode;if(p!==null&&p===o)break;z.tag===5&&C!==null&&(z=C,l?(p=Hn(t,u),p!=null&&m.unshift(ua(t,p,z))):l||(p=Hn(t,u),p!=null&&m.push(ua(t,p,z)))),t=t.return}m.length!==0&&e.push({event:i,listeners:m})}var Dw=/\r\n?/g,Aw=/\u0000|\uFFFD/g;function Tc(e){return(typeof e=="string"?e:""+e).replace(Dw,`
`).replace(Aw,"")}function cr(e,i,t){if(i=Tc(i),Tc(e)!==i&&t)throw Error(r(425))}function dr(){}var es=null,is=null;function ts(e,i){return e==="textarea"||e==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var ns=typeof setTimeout=="function"?setTimeout:void 0,Ew=typeof clearTimeout=="function"?clearTimeout:void 0,Sc=typeof Promise=="function"?Promise:void 0,Pw=typeof queueMicrotask=="function"?queueMicrotask:typeof Sc<"u"?function(e){return Sc.resolve(null).then(e).catch(Tw)}:ns;function Tw(e){setTimeout(function(){throw e})}function as(e,i){var t=i,o=0;do{var l=t.nextSibling;if(e.removeChild(t),l&&l.nodeType===8)if(t=l.data,t==="/$"){if(o===0){e.removeChild(l),qn(i);return}o--}else t!=="$"&&t!=="$?"&&t!=="$!"||o++;t=l}while(t);qn(i)}function ft(e){for(;e!=null;e=e.nextSibling){var i=e.nodeType;if(i===1||i===3)break;if(i===8){if(i=e.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return e}function xc(e){e=e.previousSibling;for(var i=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(i===0)return e;i--}else t==="/$"&&i++}e=e.previousSibling}return null}var cn=Math.random().toString(36).slice(2),Fi="__reactFiber$"+cn,ca="__reactProps$"+cn,Ki="__reactContainer$"+cn,rs="__reactEvents$"+cn,Sw="__reactListeners$"+cn,xw="__reactHandles$"+cn;function Bt(e){var i=e[Fi];if(i)return i;for(var t=e.parentNode;t;){if(i=t[Ki]||t[Fi]){if(t=i.alternate,i.child!==null||t!==null&&t.child!==null)for(e=xc(e);e!==null;){if(t=e[Fi])return t;e=xc(e)}return i}e=t,t=e.parentNode}return null}function da(e){return e=e[Fi]||e[Ki],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function dn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(r(33))}function mr(e){return e[ca]||null}var os=[],mn=-1;function yt(e){return{current:e}}function be(e){0>mn||(e.current=os[mn],os[mn]=null,mn--)}function ke(e,i){mn++,os[mn]=e.current,e.current=i}var zt={},Ze=yt(zt),ri=yt(!1),Rt=zt;function fn(e,i){var t=e.type.contextTypes;if(!t)return zt;var o=e.stateNode;if(o&&o.__reactInternalMemoizedUnmaskedChildContext===i)return o.__reactInternalMemoizedMaskedChildContext;var l={},u;for(u in t)l[u]=i[u];return o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=l),l}function oi(e){return e=e.childContextTypes,e!=null}function fr(){be(ri),be(Ze)}function Gc(e,i,t){if(Ze.current!==zt)throw Error(r(168));ke(Ze,i),ke(ri,t)}function Nc(e,i,t){var o=e.stateNode;if(i=i.childContextTypes,typeof o.getChildContext!="function")return t;o=o.getChildContext();for(var l in o)if(!(l in i))throw Error(r(108,ye(e)||"Unknown",l));return I({},t,o)}function yr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||zt,Rt=Ze.current,ke(Ze,e),ke(ri,ri.current),!0}function Bc(e,i,t){var o=e.stateNode;if(!o)throw Error(r(169));t?(e=Nc(e,i,Rt),o.__reactInternalMemoizedMergedChildContext=e,be(ri),be(Ze),ke(Ze,e)):be(ri),ke(ri,t)}var Ui=null,zr=!1,ss=!1;function Rc(e){Ui===null?Ui=[e]:Ui.push(e)}function Gw(e){zr=!0,Rc(e)}function wt(){if(!ss&&Ui!==null){ss=!0;var e=0,i=he;try{var t=Ui;for(he=1;e<t.length;e++){var o=t[e];do o=o(!0);while(o!==null)}Ui=null,zr=!1}catch(l){throw Ui!==null&&(Ui=Ui.slice(e+1)),Fu(To,wt),l}finally{he=i,ss=!1}}return null}var yn=[],zn=0,wr=null,pr=0,pi=[],hi=0,Ot=null,$i=1,Zi="";function Ft(e,i){yn[zn++]=pr,yn[zn++]=wr,wr=e,pr=i}function Oc(e,i,t){pi[hi++]=$i,pi[hi++]=Zi,pi[hi++]=Ot,Ot=e;var o=$i;e=Zi;var l=32-Ci(o)-1;o&=~(1<<l),t+=1;var u=32-Ci(i)+l;if(30<u){var m=l-l%5;u=(o&(1<<m)-1).toString(32),o>>=m,l-=m,$i=1<<32-Ci(i)+l|t<<l|o,Zi=u+e}else $i=1<<u|t<<l|o,Zi=e}function ls(e){e.return!==null&&(Ft(e,1),Oc(e,1,0))}function us(e){for(;e===wr;)wr=yn[--zn],yn[zn]=null,pr=yn[--zn],yn[zn]=null;for(;e===Ot;)Ot=pi[--hi],pi[hi]=null,Zi=pi[--hi],pi[hi]=null,$i=pi[--hi],pi[hi]=null}var mi=null,fi=null,De=!1,Ai=null;function Fc(e,i){var t=vi(5,null,null,0);t.elementType="DELETED",t.stateNode=i,t.return=e,i=e.deletions,i===null?(e.deletions=[t],e.flags|=16):i.push(t)}function _c(e,i){switch(e.tag){case 5:var t=e.type;return i=i.nodeType!==1||t.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(e.stateNode=i,mi=e,fi=ft(i.firstChild),!0):!1;case 6:return i=e.pendingProps===""||i.nodeType!==3?null:i,i!==null?(e.stateNode=i,mi=e,fi=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(t=Ot!==null?{id:$i,overflow:Zi}:null,e.memoizedState={dehydrated:i,treeContext:t,retryLane:1073741824},t=vi(18,null,null,0),t.stateNode=i,t.return=e,e.child=t,mi=e,fi=null,!0):!1;default:return!1}}function cs(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ds(e){if(De){var i=fi;if(i){var t=i;if(!_c(e,i)){if(cs(e))throw Error(r(418));i=ft(t.nextSibling);var o=mi;i&&_c(e,i)?Fc(o,t):(e.flags=e.flags&-4097|2,De=!1,mi=e)}}else{if(cs(e))throw Error(r(418));e.flags=e.flags&-4097|2,De=!1,mi=e}}}function Mc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;mi=e}function hr(e){if(e!==mi)return!1;if(!De)return Mc(e),De=!0,!1;var i;if((i=e.tag!==3)&&!(i=e.tag!==5)&&(i=e.type,i=i!=="head"&&i!=="body"&&!ts(e.type,e.memoizedProps)),i&&(i=fi)){if(cs(e))throw Ic(),Error(r(418));for(;i;)Fc(e,i),i=ft(i.nextSibling)}if(Mc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));e:{for(e=e.nextSibling,i=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(i===0){fi=ft(e.nextSibling);break e}i--}else t!=="$"&&t!=="$!"&&t!=="$?"||i++}e=e.nextSibling}fi=null}}else fi=mi?ft(e.stateNode.nextSibling):null;return!0}function Ic(){for(var e=fi;e;)e=ft(e.nextSibling)}function wn(){fi=mi=null,De=!1}function ms(e){Ai===null?Ai=[e]:Ai.push(e)}var Nw=ne.ReactCurrentBatchConfig;function ma(e,i,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(r(309));var o=t.stateNode}if(!o)throw Error(r(147,e));var l=o,u=""+e;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===u?i.ref:(i=function(m){var z=l.refs;m===null?delete z[u]:z[u]=m},i._stringRef=u,i)}if(typeof e!="string")throw Error(r(284));if(!t._owner)throw Error(r(290,e))}return e}function gr(e,i){throw e=Object.prototype.toString.call(i),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":e))}function Jc(e){var i=e._init;return i(e._payload)}function Wc(e){function i(k,h){if(e){var b=k.deletions;b===null?(k.deletions=[h],k.flags|=16):b.push(h)}}function t(k,h){if(!e)return null;for(;h!==null;)i(k,h),h=h.sibling;return null}function o(k,h){for(k=new Map;h!==null;)h.key!==null?k.set(h.key,h):k.set(h.index,h),h=h.sibling;return k}function l(k,h){return k=Ct(k,h),k.index=0,k.sibling=null,k}function u(k,h,b){return k.index=b,e?(b=k.alternate,b!==null?(b=b.index,b<h?(k.flags|=2,h):b):(k.flags|=2,h)):(k.flags|=1048576,h)}function m(k){return e&&k.alternate===null&&(k.flags|=2),k}function z(k,h,b,R){return h===null||h.tag!==6?(h=nl(b,k.mode,R),h.return=k,h):(h=l(h,b),h.return=k,h)}function p(k,h,b,R){var $=b.type;return $===le?S(k,h,b.props.children,R,b.key):h!==null&&(h.elementType===$||typeof $=="object"&&$!==null&&$.$$typeof===Ae&&Jc($)===h.type)?(R=l(h,b.props),R.ref=ma(k,h,b),R.return=k,R):(R=Lr(b.type,b.key,b.props,null,k.mode,R),R.ref=ma(k,h,b),R.return=k,R)}function C(k,h,b,R){return h===null||h.tag!==4||h.stateNode.containerInfo!==b.containerInfo||h.stateNode.implementation!==b.implementation?(h=al(b,k.mode,R),h.return=k,h):(h=l(h,b.children||[]),h.return=k,h)}function S(k,h,b,R,$){return h===null||h.tag!==7?(h=Kt(b,k.mode,R,$),h.return=k,h):(h=l(h,b),h.return=k,h)}function G(k,h,b){if(typeof h=="string"&&h!==""||typeof h=="number")return h=nl(""+h,k.mode,b),h.return=k,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case H:return b=Lr(h.type,h.key,h.props,null,k.mode,b),b.ref=ma(k,null,h),b.return=k,b;case ae:return h=al(h,k.mode,b),h.return=k,h;case Ae:var R=h._init;return G(k,R(h._payload),b)}if(xt(h)||Q(h))return h=Kt(h,k.mode,b,null),h.return=k,h;gr(k,h)}return null}function P(k,h,b,R){var $=h!==null?h.key:null;if(typeof b=="string"&&b!==""||typeof b=="number")return $!==null?null:z(k,h,""+b,R);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case H:return b.key===$?p(k,h,b,R):null;case ae:return b.key===$?C(k,h,b,R):null;case Ae:return $=b._init,P(k,h,$(b._payload),R)}if(xt(b)||Q(b))return $!==null?null:S(k,h,b,R,null);gr(k,b)}return null}function J(k,h,b,R,$){if(typeof R=="string"&&R!==""||typeof R=="number")return k=k.get(b)||null,z(h,k,""+R,$);if(typeof R=="object"&&R!==null){switch(R.$$typeof){case H:return k=k.get(R.key===null?b:R.key)||null,p(h,k,R,$);case ae:return k=k.get(R.key===null?b:R.key)||null,C(h,k,R,$);case Ae:var X=R._init;return J(k,h,b,X(R._payload),$)}if(xt(R)||Q(R))return k=k.get(b)||null,S(h,k,R,$,null);gr(h,R)}return null}function K(k,h,b,R){for(var $=null,X=null,q=h,ie=h=0,We=null;q!==null&&ie<b.length;ie++){q.index>ie?(We=q,q=null):We=q.sibling;var fe=P(k,q,b[ie],R);if(fe===null){q===null&&(q=We);break}e&&q&&fe.alternate===null&&i(k,q),h=u(fe,h,ie),X===null?$=fe:X.sibling=fe,X=fe,q=We}if(ie===b.length)return t(k,q),De&&Ft(k,ie),$;if(q===null){for(;ie<b.length;ie++)q=G(k,b[ie],R),q!==null&&(h=u(q,h,ie),X===null?$=q:X.sibling=q,X=q);return De&&Ft(k,ie),$}for(q=o(k,q);ie<b.length;ie++)We=J(q,k,ie,b[ie],R),We!==null&&(e&&We.alternate!==null&&q.delete(We.key===null?ie:We.key),h=u(We,h,ie),X===null?$=We:X.sibling=We,X=We);return e&&q.forEach(function(Dt){return i(k,Dt)}),De&&Ft(k,ie),$}function U(k,h,b,R){var $=Q(b);if(typeof $!="function")throw Error(r(150));if(b=$.call(b),b==null)throw Error(r(151));for(var X=$=null,q=h,ie=h=0,We=null,fe=b.next();q!==null&&!fe.done;ie++,fe=b.next()){q.index>ie?(We=q,q=null):We=q.sibling;var Dt=P(k,q,fe.value,R);if(Dt===null){q===null&&(q=We);break}e&&q&&Dt.alternate===null&&i(k,q),h=u(Dt,h,ie),X===null?$=Dt:X.sibling=Dt,X=Dt,q=We}if(fe.done)return t(k,q),De&&Ft(k,ie),$;if(q===null){for(;!fe.done;ie++,fe=b.next())fe=G(k,fe.value,R),fe!==null&&(h=u(fe,h,ie),X===null?$=fe:X.sibling=fe,X=fe);return De&&Ft(k,ie),$}for(q=o(k,q);!fe.done;ie++,fe=b.next())fe=J(q,k,ie,fe.value,R),fe!==null&&(e&&fe.alternate!==null&&q.delete(fe.key===null?ie:fe.key),h=u(fe,h,ie),X===null?$=fe:X.sibling=fe,X=fe);return e&&q.forEach(function(mp){return i(k,mp)}),De&&Ft(k,ie),$}function Ge(k,h,b,R){if(typeof b=="object"&&b!==null&&b.type===le&&b.key===null&&(b=b.props.children),typeof b=="object"&&b!==null){switch(b.$$typeof){case H:e:{for(var $=b.key,X=h;X!==null;){if(X.key===$){if($=b.type,$===le){if(X.tag===7){t(k,X.sibling),h=l(X,b.props.children),h.return=k,k=h;break e}}else if(X.elementType===$||typeof $=="object"&&$!==null&&$.$$typeof===Ae&&Jc($)===X.type){t(k,X.sibling),h=l(X,b.props),h.ref=ma(k,X,b),h.return=k,k=h;break e}t(k,X);break}else i(k,X);X=X.sibling}b.type===le?(h=Kt(b.props.children,k.mode,R,b.key),h.return=k,k=h):(R=Lr(b.type,b.key,b.props,null,k.mode,R),R.ref=ma(k,h,b),R.return=k,k=R)}return m(k);case ae:e:{for(X=b.key;h!==null;){if(h.key===X)if(h.tag===4&&h.stateNode.containerInfo===b.containerInfo&&h.stateNode.implementation===b.implementation){t(k,h.sibling),h=l(h,b.children||[]),h.return=k,k=h;break e}else{t(k,h);break}else i(k,h);h=h.sibling}h=al(b,k.mode,R),h.return=k,k=h}return m(k);case Ae:return X=b._init,Ge(k,h,X(b._payload),R)}if(xt(b))return K(k,h,b,R);if(Q(b))return U(k,h,b,R);gr(k,b)}return typeof b=="string"&&b!==""||typeof b=="number"?(b=""+b,h!==null&&h.tag===6?(t(k,h.sibling),h=l(h,b),h.return=k,k=h):(t(k,h),h=nl(b,k.mode,R),h.return=k,k=h),m(k)):t(k,h)}return Ge}var pn=Wc(!0),Lc=Wc(!1),jr=yt(null),kr=null,hn=null,fs=null;function ys(){fs=hn=kr=null}function zs(e){var i=jr.current;be(jr),e._currentValue=i}function ws(e,i,t){for(;e!==null;){var o=e.alternate;if((e.childLanes&i)!==i?(e.childLanes|=i,o!==null&&(o.childLanes|=i)):o!==null&&(o.childLanes&i)!==i&&(o.childLanes|=i),e===t)break;e=e.return}}function gn(e,i){kr=e,fs=hn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&i)!==0&&(si=!0),e.firstContext=null)}function gi(e){var i=e._currentValue;if(fs!==e)if(e={context:e,memoizedValue:i,next:null},hn===null){if(kr===null)throw Error(r(308));hn=e,kr.dependencies={lanes:0,firstContext:e}}else hn=hn.next=e;return i}var _t=null;function ps(e){_t===null?_t=[e]:_t.push(e)}function Hc(e,i,t,o){var l=i.interleaved;return l===null?(t.next=t,ps(i)):(t.next=l.next,l.next=t),i.interleaved=t,Vi(e,o)}function Vi(e,i){e.lanes|=i;var t=e.alternate;for(t!==null&&(t.lanes|=i),t=e,e=e.return;e!==null;)e.childLanes|=i,t=e.alternate,t!==null&&(t.childLanes|=i),t=e,e=e.return;return t.tag===3?t.stateNode:null}var pt=!1;function hs(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Kc(e,i){e=e.updateQueue,i.updateQueue===e&&(i.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Yi(e,i){return{eventTime:e,lane:i,tag:0,payload:null,callback:null,next:null}}function ht(e,i,t){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(me&2)!==0){var l=o.pending;return l===null?i.next=i:(i.next=l.next,l.next=i),o.pending=i,Vi(e,t)}return l=o.interleaved,l===null?(i.next=i,ps(o)):(i.next=l.next,l.next=i),o.interleaved=i,Vi(e,t)}function vr(e,i,t){if(i=i.updateQueue,i!==null&&(i=i.shared,(t&4194240)!==0)){var o=i.lanes;o&=e.pendingLanes,t|=o,i.lanes=t,Go(e,t)}}function Uc(e,i){var t=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,t===o)){var l=null,u=null;if(t=t.firstBaseUpdate,t!==null){do{var m={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};u===null?l=u=m:u=u.next=m,t=t.next}while(t!==null);u===null?l=u=i:u=u.next=i}else l=u=i;t={baseState:o.baseState,firstBaseUpdate:l,lastBaseUpdate:u,shared:o.shared,effects:o.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=i:e.next=i,t.lastBaseUpdate=i}function br(e,i,t,o){var l=e.updateQueue;pt=!1;var u=l.firstBaseUpdate,m=l.lastBaseUpdate,z=l.shared.pending;if(z!==null){l.shared.pending=null;var p=z,C=p.next;p.next=null,m===null?u=C:m.next=C,m=p;var S=e.alternate;S!==null&&(S=S.updateQueue,z=S.lastBaseUpdate,z!==m&&(z===null?S.firstBaseUpdate=C:z.next=C,S.lastBaseUpdate=p))}if(u!==null){var G=l.baseState;m=0,S=C=p=null,z=u;do{var P=z.lane,J=z.eventTime;if((o&P)===P){S!==null&&(S=S.next={eventTime:J,lane:0,tag:z.tag,payload:z.payload,callback:z.callback,next:null});e:{var K=e,U=z;switch(P=i,J=t,U.tag){case 1:if(K=U.payload,typeof K=="function"){G=K.call(J,G,P);break e}G=K;break e;case 3:K.flags=K.flags&-65537|128;case 0:if(K=U.payload,P=typeof K=="function"?K.call(J,G,P):K,P==null)break e;G=I({},G,P);break e;case 2:pt=!0}}z.callback!==null&&z.lane!==0&&(e.flags|=64,P=l.effects,P===null?l.effects=[z]:P.push(z))}else J={eventTime:J,lane:P,tag:z.tag,payload:z.payload,callback:z.callback,next:null},S===null?(C=S=J,p=G):S=S.next=J,m|=P;if(z=z.next,z===null){if(z=l.shared.pending,z===null)break;P=z,z=P.next,P.next=null,l.lastBaseUpdate=P,l.shared.pending=null}}while(!0);if(S===null&&(p=G),l.baseState=p,l.firstBaseUpdate=C,l.lastBaseUpdate=S,i=l.shared.interleaved,i!==null){l=i;do m|=l.lane,l=l.next;while(l!==i)}else u===null&&(l.shared.lanes=0);Jt|=m,e.lanes=m,e.memoizedState=G}}function $c(e,i,t){if(e=i.effects,i.effects=null,e!==null)for(i=0;i<e.length;i++){var o=e[i],l=o.callback;if(l!==null){if(o.callback=null,o=t,typeof l!="function")throw Error(r(191,l));l.call(o)}}}var fa={},_i=yt(fa),ya=yt(fa),za=yt(fa);function Mt(e){if(e===fa)throw Error(r(174));return e}function gs(e,i){switch(ke(za,i),ke(ya,e),ke(_i,fa),e=i.nodeType,e){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:Ri(null,"");break;default:e=e===8?i.parentNode:i,i=e.namespaceURI||null,e=e.tagName,i=Ri(i,e)}be(_i),ke(_i,i)}function jn(){be(_i),be(ya),be(za)}function Zc(e){Mt(za.current);var i=Mt(_i.current),t=Ri(i,e.type);i!==t&&(ke(ya,e),ke(_i,t))}function js(e){ya.current===e&&(be(_i),be(ya))}var Ee=yt(0);function Cr(e){for(var i=e;i!==null;){if(i.tag===13){var t=i.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var ks=[];function vs(){for(var e=0;e<ks.length;e++)ks[e]._workInProgressVersionPrimary=null;ks.length=0}var Dr=ne.ReactCurrentDispatcher,bs=ne.ReactCurrentBatchConfig,It=0,Pe=null,Re=null,Ie=null,Ar=!1,wa=!1,pa=0,Bw=0;function Ve(){throw Error(r(321))}function Cs(e,i){if(i===null)return!1;for(var t=0;t<i.length&&t<e.length;t++)if(!Di(e[t],i[t]))return!1;return!0}function Ds(e,i,t,o,l,u){if(It=u,Pe=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Dr.current=e===null||e.memoizedState===null?_w:Mw,e=t(o,l),wa){u=0;do{if(wa=!1,pa=0,25<=u)throw Error(r(301));u+=1,Ie=Re=null,i.updateQueue=null,Dr.current=Iw,e=t(o,l)}while(wa)}if(Dr.current=Tr,i=Re!==null&&Re.next!==null,It=0,Ie=Re=Pe=null,Ar=!1,i)throw Error(r(300));return e}function As(){var e=pa!==0;return pa=0,e}function Mi(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ie===null?Pe.memoizedState=Ie=e:Ie=Ie.next=e,Ie}function ji(){if(Re===null){var e=Pe.alternate;e=e!==null?e.memoizedState:null}else e=Re.next;var i=Ie===null?Pe.memoizedState:Ie.next;if(i!==null)Ie=i,Re=e;else{if(e===null)throw Error(r(310));Re=e,e={memoizedState:Re.memoizedState,baseState:Re.baseState,baseQueue:Re.baseQueue,queue:Re.queue,next:null},Ie===null?Pe.memoizedState=Ie=e:Ie=Ie.next=e}return Ie}function ha(e,i){return typeof i=="function"?i(e):i}function Es(e){var i=ji(),t=i.queue;if(t===null)throw Error(r(311));t.lastRenderedReducer=e;var o=Re,l=o.baseQueue,u=t.pending;if(u!==null){if(l!==null){var m=l.next;l.next=u.next,u.next=m}o.baseQueue=l=u,t.pending=null}if(l!==null){u=l.next,o=o.baseState;var z=m=null,p=null,C=u;do{var S=C.lane;if((It&S)===S)p!==null&&(p=p.next={lane:0,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null}),o=C.hasEagerState?C.eagerState:e(o,C.action);else{var G={lane:S,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null};p===null?(z=p=G,m=o):p=p.next=G,Pe.lanes|=S,Jt|=S}C=C.next}while(C!==null&&C!==u);p===null?m=o:p.next=z,Di(o,i.memoizedState)||(si=!0),i.memoizedState=o,i.baseState=m,i.baseQueue=p,t.lastRenderedState=o}if(e=t.interleaved,e!==null){l=e;do u=l.lane,Pe.lanes|=u,Jt|=u,l=l.next;while(l!==e)}else l===null&&(t.lanes=0);return[i.memoizedState,t.dispatch]}function Ps(e){var i=ji(),t=i.queue;if(t===null)throw Error(r(311));t.lastRenderedReducer=e;var o=t.dispatch,l=t.pending,u=i.memoizedState;if(l!==null){t.pending=null;var m=l=l.next;do u=e(u,m.action),m=m.next;while(m!==l);Di(u,i.memoizedState)||(si=!0),i.memoizedState=u,i.baseQueue===null&&(i.baseState=u),t.lastRenderedState=u}return[u,o]}function Vc(){}function Yc(e,i){var t=Pe,o=ji(),l=i(),u=!Di(o.memoizedState,l);if(u&&(o.memoizedState=l,si=!0),o=o.queue,Ts(qc.bind(null,t,o,e),[e]),o.getSnapshot!==i||u||Ie!==null&&Ie.memoizedState.tag&1){if(t.flags|=2048,ga(9,Xc.bind(null,t,o,l,i),void 0,null),Je===null)throw Error(r(349));(It&30)!==0||Qc(t,i,l)}return l}function Qc(e,i,t){e.flags|=16384,e={getSnapshot:i,value:t},i=Pe.updateQueue,i===null?(i={lastEffect:null,stores:null},Pe.updateQueue=i,i.stores=[e]):(t=i.stores,t===null?i.stores=[e]:t.push(e))}function Xc(e,i,t,o){i.value=t,i.getSnapshot=o,ed(i)&&id(e)}function qc(e,i,t){return t(function(){ed(i)&&id(e)})}function ed(e){var i=e.getSnapshot;e=e.value;try{var t=i();return!Di(e,t)}catch{return!0}}function id(e){var i=Vi(e,1);i!==null&&Si(i,e,1,-1)}function td(e){var i=Mi();return typeof e=="function"&&(e=e()),i.memoizedState=i.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ha,lastRenderedState:e},i.queue=e,e=e.dispatch=Fw.bind(null,Pe,e),[i.memoizedState,e]}function ga(e,i,t,o){return e={tag:e,create:i,destroy:t,deps:o,next:null},i=Pe.updateQueue,i===null?(i={lastEffect:null,stores:null},Pe.updateQueue=i,i.lastEffect=e.next=e):(t=i.lastEffect,t===null?i.lastEffect=e.next=e:(o=t.next,t.next=e,e.next=o,i.lastEffect=e)),e}function nd(){return ji().memoizedState}function Er(e,i,t,o){var l=Mi();Pe.flags|=e,l.memoizedState=ga(1|i,t,void 0,o===void 0?null:o)}function Pr(e,i,t,o){var l=ji();o=o===void 0?null:o;var u=void 0;if(Re!==null){var m=Re.memoizedState;if(u=m.destroy,o!==null&&Cs(o,m.deps)){l.memoizedState=ga(i,t,u,o);return}}Pe.flags|=e,l.memoizedState=ga(1|i,t,u,o)}function ad(e,i){return Er(8390656,8,e,i)}function Ts(e,i){return Pr(2048,8,e,i)}function rd(e,i){return Pr(4,2,e,i)}function od(e,i){return Pr(4,4,e,i)}function sd(e,i){if(typeof i=="function")return e=e(),i(e),function(){i(null)};if(i!=null)return e=e(),i.current=e,function(){i.current=null}}function ld(e,i,t){return t=t!=null?t.concat([e]):null,Pr(4,4,sd.bind(null,i,e),t)}function Ss(){}function ud(e,i){var t=ji();i=i===void 0?null:i;var o=t.memoizedState;return o!==null&&i!==null&&Cs(i,o[1])?o[0]:(t.memoizedState=[e,i],e)}function cd(e,i){var t=ji();i=i===void 0?null:i;var o=t.memoizedState;return o!==null&&i!==null&&Cs(i,o[1])?o[0]:(e=e(),t.memoizedState=[e,i],e)}function dd(e,i,t){return(It&21)===0?(e.baseState&&(e.baseState=!1,si=!0),e.memoizedState=t):(Di(t,i)||(t=Ju(),Pe.lanes|=t,Jt|=t,e.baseState=!0),i)}function Rw(e,i){var t=he;he=t!==0&&4>t?t:4,e(!0);var o=bs.transition;bs.transition={};try{e(!1),i()}finally{he=t,bs.transition=o}}function md(){return ji().memoizedState}function Ow(e,i,t){var o=vt(e);if(t={lane:o,action:t,hasEagerState:!1,eagerState:null,next:null},fd(e))yd(i,t);else if(t=Hc(e,i,t,o),t!==null){var l=ti();Si(t,e,o,l),zd(t,i,o)}}function Fw(e,i,t){var o=vt(e),l={lane:o,action:t,hasEagerState:!1,eagerState:null,next:null};if(fd(e))yd(i,l);else{var u=e.alternate;if(e.lanes===0&&(u===null||u.lanes===0)&&(u=i.lastRenderedReducer,u!==null))try{var m=i.lastRenderedState,z=u(m,t);if(l.hasEagerState=!0,l.eagerState=z,Di(z,m)){var p=i.interleaved;p===null?(l.next=l,ps(i)):(l.next=p.next,p.next=l),i.interleaved=l;return}}catch{}t=Hc(e,i,l,o),t!==null&&(l=ti(),Si(t,e,o,l),zd(t,i,o))}}function fd(e){var i=e.alternate;return e===Pe||i!==null&&i===Pe}function yd(e,i){wa=Ar=!0;var t=e.pending;t===null?i.next=i:(i.next=t.next,t.next=i),e.pending=i}function zd(e,i,t){if((t&4194240)!==0){var o=i.lanes;o&=e.pendingLanes,t|=o,i.lanes=t,Go(e,t)}}var Tr={readContext:gi,useCallback:Ve,useContext:Ve,useEffect:Ve,useImperativeHandle:Ve,useInsertionEffect:Ve,useLayoutEffect:Ve,useMemo:Ve,useReducer:Ve,useRef:Ve,useState:Ve,useDebugValue:Ve,useDeferredValue:Ve,useTransition:Ve,useMutableSource:Ve,useSyncExternalStore:Ve,useId:Ve,unstable_isNewReconciler:!1},_w={readContext:gi,useCallback:function(e,i){return Mi().memoizedState=[e,i===void 0?null:i],e},useContext:gi,useEffect:ad,useImperativeHandle:function(e,i,t){return t=t!=null?t.concat([e]):null,Er(4194308,4,sd.bind(null,i,e),t)},useLayoutEffect:function(e,i){return Er(4194308,4,e,i)},useInsertionEffect:function(e,i){return Er(4,2,e,i)},useMemo:function(e,i){var t=Mi();return i=i===void 0?null:i,e=e(),t.memoizedState=[e,i],e},useReducer:function(e,i,t){var o=Mi();return i=t!==void 0?t(i):i,o.memoizedState=o.baseState=i,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},o.queue=e,e=e.dispatch=Ow.bind(null,Pe,e),[o.memoizedState,e]},useRef:function(e){var i=Mi();return e={current:e},i.memoizedState=e},useState:td,useDebugValue:Ss,useDeferredValue:function(e){return Mi().memoizedState=e},useTransition:function(){var e=td(!1),i=e[0];return e=Rw.bind(null,e[1]),Mi().memoizedState=e,[i,e]},useMutableSource:function(){},useSyncExternalStore:function(e,i,t){var o=Pe,l=Mi();if(De){if(t===void 0)throw Error(r(407));t=t()}else{if(t=i(),Je===null)throw Error(r(349));(It&30)!==0||Qc(o,i,t)}l.memoizedState=t;var u={value:t,getSnapshot:i};return l.queue=u,ad(qc.bind(null,o,u,e),[e]),o.flags|=2048,ga(9,Xc.bind(null,o,u,t,i),void 0,null),t},useId:function(){var e=Mi(),i=Je.identifierPrefix;if(De){var t=Zi,o=$i;t=(o&~(1<<32-Ci(o)-1)).toString(32)+t,i=":"+i+"R"+t,t=pa++,0<t&&(i+="H"+t.toString(32)),i+=":"}else t=Bw++,i=":"+i+"r"+t.toString(32)+":";return e.memoizedState=i},unstable_isNewReconciler:!1},Mw={readContext:gi,useCallback:ud,useContext:gi,useEffect:Ts,useImperativeHandle:ld,useInsertionEffect:rd,useLayoutEffect:od,useMemo:cd,useReducer:Es,useRef:nd,useState:function(){return Es(ha)},useDebugValue:Ss,useDeferredValue:function(e){var i=ji();return dd(i,Re.memoizedState,e)},useTransition:function(){var e=Es(ha)[0],i=ji().memoizedState;return[e,i]},useMutableSource:Vc,useSyncExternalStore:Yc,useId:md,unstable_isNewReconciler:!1},Iw={readContext:gi,useCallback:ud,useContext:gi,useEffect:Ts,useImperativeHandle:ld,useInsertionEffect:rd,useLayoutEffect:od,useMemo:cd,useReducer:Ps,useRef:nd,useState:function(){return Ps(ha)},useDebugValue:Ss,useDeferredValue:function(e){var i=ji();return Re===null?i.memoizedState=e:dd(i,Re.memoizedState,e)},useTransition:function(){var e=Ps(ha)[0],i=ji().memoizedState;return[e,i]},useMutableSource:Vc,useSyncExternalStore:Yc,useId:md,unstable_isNewReconciler:!1};function Ei(e,i){if(e&&e.defaultProps){i=I({},i),e=e.defaultProps;for(var t in e)i[t]===void 0&&(i[t]=e[t]);return i}return i}function xs(e,i,t,o){i=e.memoizedState,t=t(o,i),t=t==null?i:I({},i,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var Sr={isMounted:function(e){return(e=e._reactInternals)?Nt(e)===e:!1},enqueueSetState:function(e,i,t){e=e._reactInternals;var o=ti(),l=vt(e),u=Yi(o,l);u.payload=i,t!=null&&(u.callback=t),i=ht(e,u,l),i!==null&&(Si(i,e,l,o),vr(i,e,l))},enqueueReplaceState:function(e,i,t){e=e._reactInternals;var o=ti(),l=vt(e),u=Yi(o,l);u.tag=1,u.payload=i,t!=null&&(u.callback=t),i=ht(e,u,l),i!==null&&(Si(i,e,l,o),vr(i,e,l))},enqueueForceUpdate:function(e,i){e=e._reactInternals;var t=ti(),o=vt(e),l=Yi(t,o);l.tag=2,i!=null&&(l.callback=i),i=ht(e,l,o),i!==null&&(Si(i,e,o,t),vr(i,e,o))}};function wd(e,i,t,o,l,u,m){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,u,m):i.prototype&&i.prototype.isPureReactComponent?!ra(t,o)||!ra(l,u):!0}function pd(e,i,t){var o=!1,l=zt,u=i.contextType;return typeof u=="object"&&u!==null?u=gi(u):(l=oi(i)?Rt:Ze.current,o=i.contextTypes,u=(o=o!=null)?fn(e,l):zt),i=new i(t,u),e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Sr,e.stateNode=i,i._reactInternals=e,o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=u),i}function hd(e,i,t,o){e=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(t,o),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(t,o),i.state!==e&&Sr.enqueueReplaceState(i,i.state,null)}function Gs(e,i,t,o){var l=e.stateNode;l.props=t,l.state=e.memoizedState,l.refs={},hs(e);var u=i.contextType;typeof u=="object"&&u!==null?l.context=gi(u):(u=oi(i)?Rt:Ze.current,l.context=fn(e,u)),l.state=e.memoizedState,u=i.getDerivedStateFromProps,typeof u=="function"&&(xs(e,i,u,t),l.state=e.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(i=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),i!==l.state&&Sr.enqueueReplaceState(l,l.state,null),br(e,t,l,o),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function kn(e,i){try{var t="",o=i;do t+=oe(o),o=o.return;while(o);var l=t}catch(u){l=`
Error generating stack: `+u.message+`
`+u.stack}return{value:e,source:i,stack:l,digest:null}}function Ns(e,i,t){return{value:e,source:null,stack:t??null,digest:i??null}}function Bs(e,i){try{console.error(i.value)}catch(t){setTimeout(function(){throw t})}}var Jw=typeof WeakMap=="function"?WeakMap:Map;function gd(e,i,t){t=Yi(-1,t),t.tag=3,t.payload={element:null};var o=i.value;return t.callback=function(){Fr||(Fr=!0,Vs=o),Bs(e,i)},t}function jd(e,i,t){t=Yi(-1,t),t.tag=3;var o=e.type.getDerivedStateFromError;if(typeof o=="function"){var l=i.value;t.payload=function(){return o(l)},t.callback=function(){Bs(e,i)}}var u=e.stateNode;return u!==null&&typeof u.componentDidCatch=="function"&&(t.callback=function(){Bs(e,i),typeof o!="function"&&(jt===null?jt=new Set([this]):jt.add(this));var m=i.stack;this.componentDidCatch(i.value,{componentStack:m!==null?m:""})}),t}function kd(e,i,t){var o=e.pingCache;if(o===null){o=e.pingCache=new Jw;var l=new Set;o.set(i,l)}else l=o.get(i),l===void 0&&(l=new Set,o.set(i,l));l.has(t)||(l.add(t),e=ip.bind(null,e,i,t),i.then(e,e))}function vd(e){do{var i;if((i=e.tag===13)&&(i=e.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return e;e=e.return}while(e!==null);return null}function bd(e,i,t,o,l){return(e.mode&1)===0?(e===i?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(i=Yi(-1,1),i.tag=2,ht(t,i,1))),t.lanes|=1),e):(e.flags|=65536,e.lanes=l,e)}var Ww=ne.ReactCurrentOwner,si=!1;function ii(e,i,t,o){i.child=e===null?Lc(i,null,t,o):pn(i,e.child,t,o)}function Cd(e,i,t,o,l){t=t.render;var u=i.ref;return gn(i,l),o=Ds(e,i,t,o,u,l),t=As(),e!==null&&!si?(i.updateQueue=e.updateQueue,i.flags&=-2053,e.lanes&=~l,Qi(e,i,l)):(De&&t&&ls(i),i.flags|=1,ii(e,i,o,l),i.child)}function Dd(e,i,t,o,l){if(e===null){var u=t.type;return typeof u=="function"&&!tl(u)&&u.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(i.tag=15,i.type=u,Ad(e,i,u,o,l)):(e=Lr(t.type,null,o,i,i.mode,l),e.ref=i.ref,e.return=i,i.child=e)}if(u=e.child,(e.lanes&l)===0){var m=u.memoizedProps;if(t=t.compare,t=t!==null?t:ra,t(m,o)&&e.ref===i.ref)return Qi(e,i,l)}return i.flags|=1,e=Ct(u,o),e.ref=i.ref,e.return=i,i.child=e}function Ad(e,i,t,o,l){if(e!==null){var u=e.memoizedProps;if(ra(u,o)&&e.ref===i.ref)if(si=!1,i.pendingProps=o=u,(e.lanes&l)!==0)(e.flags&131072)!==0&&(si=!0);else return i.lanes=e.lanes,Qi(e,i,l)}return Rs(e,i,t,o,l)}function Ed(e,i,t){var o=i.pendingProps,l=o.children,u=e!==null?e.memoizedState:null;if(o.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},ke(bn,yi),yi|=t;else{if((t&1073741824)===0)return e=u!==null?u.baseLanes|t:t,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:e,cachePool:null,transitions:null},i.updateQueue=null,ke(bn,yi),yi|=e,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},o=u!==null?u.baseLanes:t,ke(bn,yi),yi|=o}else u!==null?(o=u.baseLanes|t,i.memoizedState=null):o=t,ke(bn,yi),yi|=o;return ii(e,i,l,t),i.child}function Pd(e,i){var t=i.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(i.flags|=512,i.flags|=2097152)}function Rs(e,i,t,o,l){var u=oi(t)?Rt:Ze.current;return u=fn(i,u),gn(i,l),t=Ds(e,i,t,o,u,l),o=As(),e!==null&&!si?(i.updateQueue=e.updateQueue,i.flags&=-2053,e.lanes&=~l,Qi(e,i,l)):(De&&o&&ls(i),i.flags|=1,ii(e,i,t,l),i.child)}function Td(e,i,t,o,l){if(oi(t)){var u=!0;yr(i)}else u=!1;if(gn(i,l),i.stateNode===null)Gr(e,i),pd(i,t,o),Gs(i,t,o,l),o=!0;else if(e===null){var m=i.stateNode,z=i.memoizedProps;m.props=z;var p=m.context,C=t.contextType;typeof C=="object"&&C!==null?C=gi(C):(C=oi(t)?Rt:Ze.current,C=fn(i,C));var S=t.getDerivedStateFromProps,G=typeof S=="function"||typeof m.getSnapshotBeforeUpdate=="function";G||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(z!==o||p!==C)&&hd(i,m,o,C),pt=!1;var P=i.memoizedState;m.state=P,br(i,o,m,l),p=i.memoizedState,z!==o||P!==p||ri.current||pt?(typeof S=="function"&&(xs(i,t,S,o),p=i.memoizedState),(z=pt||wd(i,t,z,o,P,p,C))?(G||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(i.flags|=4194308)):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=o,i.memoizedState=p),m.props=o,m.state=p,m.context=C,o=z):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),o=!1)}else{m=i.stateNode,Kc(e,i),z=i.memoizedProps,C=i.type===i.elementType?z:Ei(i.type,z),m.props=C,G=i.pendingProps,P=m.context,p=t.contextType,typeof p=="object"&&p!==null?p=gi(p):(p=oi(t)?Rt:Ze.current,p=fn(i,p));var J=t.getDerivedStateFromProps;(S=typeof J=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(z!==G||P!==p)&&hd(i,m,o,p),pt=!1,P=i.memoizedState,m.state=P,br(i,o,m,l);var K=i.memoizedState;z!==G||P!==K||ri.current||pt?(typeof J=="function"&&(xs(i,t,J,o),K=i.memoizedState),(C=pt||wd(i,t,C,o,P,K,p)||!1)?(S||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(o,K,p),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(o,K,p)),typeof m.componentDidUpdate=="function"&&(i.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof m.componentDidUpdate!="function"||z===e.memoizedProps&&P===e.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||z===e.memoizedProps&&P===e.memoizedState||(i.flags|=1024),i.memoizedProps=o,i.memoizedState=K),m.props=o,m.state=K,m.context=p,o=C):(typeof m.componentDidUpdate!="function"||z===e.memoizedProps&&P===e.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||z===e.memoizedProps&&P===e.memoizedState||(i.flags|=1024),o=!1)}return Os(e,i,t,o,u,l)}function Os(e,i,t,o,l,u){Pd(e,i);var m=(i.flags&128)!==0;if(!o&&!m)return l&&Bc(i,t,!1),Qi(e,i,u);o=i.stateNode,Ww.current=i;var z=m&&typeof t.getDerivedStateFromError!="function"?null:o.render();return i.flags|=1,e!==null&&m?(i.child=pn(i,e.child,null,u),i.child=pn(i,null,z,u)):ii(e,i,z,u),i.memoizedState=o.state,l&&Bc(i,t,!0),i.child}function Sd(e){var i=e.stateNode;i.pendingContext?Gc(e,i.pendingContext,i.pendingContext!==i.context):i.context&&Gc(e,i.context,!1),gs(e,i.containerInfo)}function xd(e,i,t,o,l){return wn(),ms(l),i.flags|=256,ii(e,i,t,o),i.child}var Fs={dehydrated:null,treeContext:null,retryLane:0};function _s(e){return{baseLanes:e,cachePool:null,transitions:null}}function Gd(e,i,t){var o=i.pendingProps,l=Ee.current,u=!1,m=(i.flags&128)!==0,z;if((z=m)||(z=e!==null&&e.memoizedState===null?!1:(l&2)!==0),z?(u=!0,i.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),ke(Ee,l&1),e===null)return ds(i),e=i.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((i.mode&1)===0?i.lanes=1:e.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(m=o.children,e=o.fallback,u?(o=i.mode,u=i.child,m={mode:"hidden",children:m},(o&1)===0&&u!==null?(u.childLanes=0,u.pendingProps=m):u=Hr(m,o,0,null),e=Kt(e,o,t,null),u.return=i,e.return=i,u.sibling=e,i.child=u,i.child.memoizedState=_s(t),i.memoizedState=Fs,e):Ms(i,m));if(l=e.memoizedState,l!==null&&(z=l.dehydrated,z!==null))return Lw(e,i,m,o,z,l,t);if(u){u=o.fallback,m=i.mode,l=e.child,z=l.sibling;var p={mode:"hidden",children:o.children};return(m&1)===0&&i.child!==l?(o=i.child,o.childLanes=0,o.pendingProps=p,i.deletions=null):(o=Ct(l,p),o.subtreeFlags=l.subtreeFlags&14680064),z!==null?u=Ct(z,u):(u=Kt(u,m,t,null),u.flags|=2),u.return=i,o.return=i,o.sibling=u,i.child=o,o=u,u=i.child,m=e.child.memoizedState,m=m===null?_s(t):{baseLanes:m.baseLanes|t,cachePool:null,transitions:m.transitions},u.memoizedState=m,u.childLanes=e.childLanes&~t,i.memoizedState=Fs,o}return u=e.child,e=u.sibling,o=Ct(u,{mode:"visible",children:o.children}),(i.mode&1)===0&&(o.lanes=t),o.return=i,o.sibling=null,e!==null&&(t=i.deletions,t===null?(i.deletions=[e],i.flags|=16):t.push(e)),i.child=o,i.memoizedState=null,o}function Ms(e,i){return i=Hr({mode:"visible",children:i},e.mode,0,null),i.return=e,e.child=i}function xr(e,i,t,o){return o!==null&&ms(o),pn(i,e.child,null,t),e=Ms(i,i.pendingProps.children),e.flags|=2,i.memoizedState=null,e}function Lw(e,i,t,o,l,u,m){if(t)return i.flags&256?(i.flags&=-257,o=Ns(Error(r(422))),xr(e,i,m,o)):i.memoizedState!==null?(i.child=e.child,i.flags|=128,null):(u=o.fallback,l=i.mode,o=Hr({mode:"visible",children:o.children},l,0,null),u=Kt(u,l,m,null),u.flags|=2,o.return=i,u.return=i,o.sibling=u,i.child=o,(i.mode&1)!==0&&pn(i,e.child,null,m),i.child.memoizedState=_s(m),i.memoizedState=Fs,u);if((i.mode&1)===0)return xr(e,i,m,null);if(l.data==="$!"){if(o=l.nextSibling&&l.nextSibling.dataset,o)var z=o.dgst;return o=z,u=Error(r(419)),o=Ns(u,o,void 0),xr(e,i,m,o)}if(z=(m&e.childLanes)!==0,si||z){if(o=Je,o!==null){switch(m&-m){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=(l&(o.suspendedLanes|m))!==0?0:l,l!==0&&l!==u.retryLane&&(u.retryLane=l,Vi(e,l),Si(o,e,l,-1))}return il(),o=Ns(Error(r(421))),xr(e,i,m,o)}return l.data==="$?"?(i.flags|=128,i.child=e.child,i=tp.bind(null,e),l._reactRetry=i,null):(e=u.treeContext,fi=ft(l.nextSibling),mi=i,De=!0,Ai=null,e!==null&&(pi[hi++]=$i,pi[hi++]=Zi,pi[hi++]=Ot,$i=e.id,Zi=e.overflow,Ot=i),i=Ms(i,o.children),i.flags|=4096,i)}function Nd(e,i,t){e.lanes|=i;var o=e.alternate;o!==null&&(o.lanes|=i),ws(e.return,i,t)}function Is(e,i,t,o,l){var u=e.memoizedState;u===null?e.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:o,tail:t,tailMode:l}:(u.isBackwards=i,u.rendering=null,u.renderingStartTime=0,u.last=o,u.tail=t,u.tailMode=l)}function Bd(e,i,t){var o=i.pendingProps,l=o.revealOrder,u=o.tail;if(ii(e,i,o.children,t),o=Ee.current,(o&2)!==0)o=o&1|2,i.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=i.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Nd(e,t,i);else if(e.tag===19)Nd(e,t,i);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===i)break e;for(;e.sibling===null;){if(e.return===null||e.return===i)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}if(ke(Ee,o),(i.mode&1)===0)i.memoizedState=null;else switch(l){case"forwards":for(t=i.child,l=null;t!==null;)e=t.alternate,e!==null&&Cr(e)===null&&(l=t),t=t.sibling;t=l,t===null?(l=i.child,i.child=null):(l=t.sibling,t.sibling=null),Is(i,!1,l,t,u);break;case"backwards":for(t=null,l=i.child,i.child=null;l!==null;){if(e=l.alternate,e!==null&&Cr(e)===null){i.child=l;break}e=l.sibling,l.sibling=t,t=l,l=e}Is(i,!0,t,null,u);break;case"together":Is(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Gr(e,i){(i.mode&1)===0&&e!==null&&(e.alternate=null,i.alternate=null,i.flags|=2)}function Qi(e,i,t){if(e!==null&&(i.dependencies=e.dependencies),Jt|=i.lanes,(t&i.childLanes)===0)return null;if(e!==null&&i.child!==e.child)throw Error(r(153));if(i.child!==null){for(e=i.child,t=Ct(e,e.pendingProps),i.child=t,t.return=i;e.sibling!==null;)e=e.sibling,t=t.sibling=Ct(e,e.pendingProps),t.return=i;t.sibling=null}return i.child}function Hw(e,i,t){switch(i.tag){case 3:Sd(i),wn();break;case 5:Zc(i);break;case 1:oi(i.type)&&yr(i);break;case 4:gs(i,i.stateNode.containerInfo);break;case 10:var o=i.type._context,l=i.memoizedProps.value;ke(jr,o._currentValue),o._currentValue=l;break;case 13:if(o=i.memoizedState,o!==null)return o.dehydrated!==null?(ke(Ee,Ee.current&1),i.flags|=128,null):(t&i.child.childLanes)!==0?Gd(e,i,t):(ke(Ee,Ee.current&1),e=Qi(e,i,t),e!==null?e.sibling:null);ke(Ee,Ee.current&1);break;case 19:if(o=(t&i.childLanes)!==0,(e.flags&128)!==0){if(o)return Bd(e,i,t);i.flags|=128}if(l=i.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),ke(Ee,Ee.current),o)break;return null;case 22:case 23:return i.lanes=0,Ed(e,i,t)}return Qi(e,i,t)}var Rd,Js,Od,Fd;Rd=function(e,i){for(var t=i.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break;for(;t.sibling===null;){if(t.return===null||t.return===i)return;t=t.return}t.sibling.return=t.return,t=t.sibling}},Js=function(){},Od=function(e,i,t,o){var l=e.memoizedProps;if(l!==o){e=i.stateNode,Mt(_i.current);var u=null;switch(t){case"input":l=Bi(e,l),o=Bi(e,o),u=[];break;case"select":l=I({},l,{value:void 0}),o=I({},o,{value:void 0}),u=[];break;case"textarea":l=In(e,l),o=In(e,o),u=[];break;default:typeof l.onClick!="function"&&typeof o.onClick=="function"&&(e.onclick=dr)}ko(t,o);var m;t=null;for(C in l)if(!o.hasOwnProperty(C)&&l.hasOwnProperty(C)&&l[C]!=null)if(C==="style"){var z=l[C];for(m in z)z.hasOwnProperty(m)&&(t||(t={}),t[m]="")}else C!=="dangerouslySetInnerHTML"&&C!=="children"&&C!=="suppressContentEditableWarning"&&C!=="suppressHydrationWarning"&&C!=="autoFocus"&&(c.hasOwnProperty(C)?u||(u=[]):(u=u||[]).push(C,null));for(C in o){var p=o[C];if(z=l?.[C],o.hasOwnProperty(C)&&p!==z&&(p!=null||z!=null))if(C==="style")if(z){for(m in z)!z.hasOwnProperty(m)||p&&p.hasOwnProperty(m)||(t||(t={}),t[m]="");for(m in p)p.hasOwnProperty(m)&&z[m]!==p[m]&&(t||(t={}),t[m]=p[m])}else t||(u||(u=[]),u.push(C,t)),t=p;else C==="dangerouslySetInnerHTML"?(p=p?p.__html:void 0,z=z?z.__html:void 0,p!=null&&z!==p&&(u=u||[]).push(C,p)):C==="children"?typeof p!="string"&&typeof p!="number"||(u=u||[]).push(C,""+p):C!=="suppressContentEditableWarning"&&C!=="suppressHydrationWarning"&&(c.hasOwnProperty(C)?(p!=null&&C==="onScroll"&&ve("scroll",e),u||z===p||(u=[])):(u=u||[]).push(C,p))}t&&(u=u||[]).push("style",t);var C=u;(i.updateQueue=C)&&(i.flags|=4)}},Fd=function(e,i,t,o){t!==o&&(i.flags|=4)};function ja(e,i){if(!De)switch(e.tailMode){case"hidden":i=e.tail;for(var t=null;i!==null;)i.alternate!==null&&(t=i),i=i.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var o=null;t!==null;)t.alternate!==null&&(o=t),t=t.sibling;o===null?i||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Ye(e){var i=e.alternate!==null&&e.alternate.child===e.child,t=0,o=0;if(i)for(var l=e.child;l!==null;)t|=l.lanes|l.childLanes,o|=l.subtreeFlags&14680064,o|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)t|=l.lanes|l.childLanes,o|=l.subtreeFlags,o|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=o,e.childLanes=t,i}function Kw(e,i,t){var o=i.pendingProps;switch(us(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ye(i),null;case 1:return oi(i.type)&&fr(),Ye(i),null;case 3:return o=i.stateNode,jn(),be(ri),be(Ze),vs(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(e===null||e.child===null)&&(hr(i)?i.flags|=4:e===null||e.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Ai!==null&&(Xs(Ai),Ai=null))),Js(e,i),Ye(i),null;case 5:js(i);var l=Mt(za.current);if(t=i.type,e!==null&&i.stateNode!=null)Od(e,i,t,o,l),e.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!o){if(i.stateNode===null)throw Error(r(166));return Ye(i),null}if(e=Mt(_i.current),hr(i)){o=i.stateNode,t=i.type;var u=i.memoizedProps;switch(o[Fi]=i,o[ca]=u,e=(i.mode&1)!==0,t){case"dialog":ve("cancel",o),ve("close",o);break;case"iframe":case"object":case"embed":ve("load",o);break;case"video":case"audio":for(l=0;l<sa.length;l++)ve(sa[l],o);break;case"source":ve("error",o);break;case"img":case"image":case"link":ve("error",o),ve("load",o);break;case"details":ve("toggle",o);break;case"input":ge(o,u),ve("invalid",o);break;case"select":o._wrapperState={wasMultiple:!!u.multiple},ve("invalid",o);break;case"textarea":Wa(o,u),ve("invalid",o)}ko(t,u),l=null;for(var m in u)if(u.hasOwnProperty(m)){var z=u[m];m==="children"?typeof z=="string"?o.textContent!==z&&(u.suppressHydrationWarning!==!0&&cr(o.textContent,z,e),l=["children",z]):typeof z=="number"&&o.textContent!==""+z&&(u.suppressHydrationWarning!==!0&&cr(o.textContent,z,e),l=["children",""+z]):c.hasOwnProperty(m)&&z!=null&&m==="onScroll"&&ve("scroll",o)}switch(t){case"input":Wi(o),Ja(o,u,!0);break;case"textarea":Wi(o),La(o);break;case"select":case"option":break;default:typeof u.onClick=="function"&&(o.onclick=dr)}o=l,i.updateQueue=o,o!==null&&(i.flags|=4)}else{m=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=de(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=m.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof o.is=="string"?e=m.createElement(t,{is:o.is}):(e=m.createElement(t),t==="select"&&(m=e,o.multiple?m.multiple=!0:o.size&&(m.size=o.size))):e=m.createElementNS(e,t),e[Fi]=i,e[ca]=o,Rd(e,i,!1,!1),i.stateNode=e;e:{switch(m=vo(t,o),t){case"dialog":ve("cancel",e),ve("close",e),l=o;break;case"iframe":case"object":case"embed":ve("load",e),l=o;break;case"video":case"audio":for(l=0;l<sa.length;l++)ve(sa[l],e);l=o;break;case"source":ve("error",e),l=o;break;case"img":case"image":case"link":ve("error",e),ve("load",e),l=o;break;case"details":ve("toggle",e),l=o;break;case"input":ge(e,o),l=Bi(e,o),ve("invalid",e);break;case"option":l=o;break;case"select":e._wrapperState={wasMultiple:!!o.multiple},l=I({},o,{value:void 0}),ve("invalid",e);break;case"textarea":Wa(e,o),l=In(e,o),ve("invalid",e);break;default:l=o}ko(t,l),z=l;for(u in z)if(z.hasOwnProperty(u)){var p=z[u];u==="style"?Au(e,p):u==="dangerouslySetInnerHTML"?(p=p?p.__html:void 0,p!=null&&Cu(e,p)):u==="children"?typeof p=="string"?(t!=="textarea"||p!=="")&&Wn(e,p):typeof p=="number"&&Wn(e,""+p):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(c.hasOwnProperty(u)?p!=null&&u==="onScroll"&&ve("scroll",e):p!=null&&Z(e,u,p,m))}switch(t){case"input":Wi(e),Ja(e,o,!1);break;case"textarea":Wi(e),La(e);break;case"option":o.value!=null&&e.setAttribute("value",""+ce(o.value));break;case"select":e.multiple=!!o.multiple,u=o.value,u!=null?ot(e,!!o.multiple,u,!1):o.defaultValue!=null&&ot(e,!!o.multiple,o.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=dr)}switch(t){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}}o&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return Ye(i),null;case 6:if(e&&i.stateNode!=null)Fd(e,i,e.memoizedProps,o);else{if(typeof o!="string"&&i.stateNode===null)throw Error(r(166));if(t=Mt(za.current),Mt(_i.current),hr(i)){if(o=i.stateNode,t=i.memoizedProps,o[Fi]=i,(u=o.nodeValue!==t)&&(e=mi,e!==null))switch(e.tag){case 3:cr(o.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&cr(o.nodeValue,t,(e.mode&1)!==0)}u&&(i.flags|=4)}else o=(t.nodeType===9?t:t.ownerDocument).createTextNode(o),o[Fi]=i,i.stateNode=o}return Ye(i),null;case 13:if(be(Ee),o=i.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(De&&fi!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Ic(),wn(),i.flags|=98560,u=!1;else if(u=hr(i),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(r(318));if(u=i.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[Fi]=i}else wn(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Ye(i),u=!1}else Ai!==null&&(Xs(Ai),Ai=null),u=!0;if(!u)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=t,i):(o=o!==null,o!==(e!==null&&e.memoizedState!==null)&&o&&(i.child.flags|=8192,(i.mode&1)!==0&&(e===null||(Ee.current&1)!==0?Oe===0&&(Oe=3):il())),i.updateQueue!==null&&(i.flags|=4),Ye(i),null);case 4:return jn(),Js(e,i),e===null&&la(i.stateNode.containerInfo),Ye(i),null;case 10:return zs(i.type._context),Ye(i),null;case 17:return oi(i.type)&&fr(),Ye(i),null;case 19:if(be(Ee),u=i.memoizedState,u===null)return Ye(i),null;if(o=(i.flags&128)!==0,m=u.rendering,m===null)if(o)ja(u,!1);else{if(Oe!==0||e!==null&&(e.flags&128)!==0)for(e=i.child;e!==null;){if(m=Cr(e),m!==null){for(i.flags|=128,ja(u,!1),o=m.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),i.subtreeFlags=0,o=t,t=i.child;t!==null;)u=t,e=o,u.flags&=14680066,m=u.alternate,m===null?(u.childLanes=0,u.lanes=e,u.child=null,u.subtreeFlags=0,u.memoizedProps=null,u.memoizedState=null,u.updateQueue=null,u.dependencies=null,u.stateNode=null):(u.childLanes=m.childLanes,u.lanes=m.lanes,u.child=m.child,u.subtreeFlags=0,u.deletions=null,u.memoizedProps=m.memoizedProps,u.memoizedState=m.memoizedState,u.updateQueue=m.updateQueue,u.type=m.type,e=m.dependencies,u.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return ke(Ee,Ee.current&1|2),i.child}e=e.sibling}u.tail!==null&&xe()>Cn&&(i.flags|=128,o=!0,ja(u,!1),i.lanes=4194304)}else{if(!o)if(e=Cr(m),e!==null){if(i.flags|=128,o=!0,t=e.updateQueue,t!==null&&(i.updateQueue=t,i.flags|=4),ja(u,!0),u.tail===null&&u.tailMode==="hidden"&&!m.alternate&&!De)return Ye(i),null}else 2*xe()-u.renderingStartTime>Cn&&t!==1073741824&&(i.flags|=128,o=!0,ja(u,!1),i.lanes=4194304);u.isBackwards?(m.sibling=i.child,i.child=m):(t=u.last,t!==null?t.sibling=m:i.child=m,u.last=m)}return u.tail!==null?(i=u.tail,u.rendering=i,u.tail=i.sibling,u.renderingStartTime=xe(),i.sibling=null,t=Ee.current,ke(Ee,o?t&1|2:t&1),i):(Ye(i),null);case 22:case 23:return el(),o=i.memoizedState!==null,e!==null&&e.memoizedState!==null!==o&&(i.flags|=8192),o&&(i.mode&1)!==0?(yi&1073741824)!==0&&(Ye(i),i.subtreeFlags&6&&(i.flags|=8192)):Ye(i),null;case 24:return null;case 25:return null}throw Error(r(156,i.tag))}function Uw(e,i){switch(us(i),i.tag){case 1:return oi(i.type)&&fr(),e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 3:return jn(),be(ri),be(Ze),vs(),e=i.flags,(e&65536)!==0&&(e&128)===0?(i.flags=e&-65537|128,i):null;case 5:return js(i),null;case 13:if(be(Ee),e=i.memoizedState,e!==null&&e.dehydrated!==null){if(i.alternate===null)throw Error(r(340));wn()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 19:return be(Ee),null;case 4:return jn(),null;case 10:return zs(i.type._context),null;case 22:case 23:return el(),null;case 24:return null;default:return null}}var Nr=!1,Qe=!1,$w=typeof WeakSet=="function"?WeakSet:Set,L=null;function vn(e,i){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(o){Se(e,i,o)}else t.current=null}function Ws(e,i,t){try{t()}catch(o){Se(e,i,o)}}var _d=!1;function Zw(e,i){if(es=qa,e=wc(),Uo(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var o=t.getSelection&&t.getSelection();if(o&&o.rangeCount!==0){t=o.anchorNode;var l=o.anchorOffset,u=o.focusNode;o=o.focusOffset;try{t.nodeType,u.nodeType}catch{t=null;break e}var m=0,z=-1,p=-1,C=0,S=0,G=e,P=null;i:for(;;){for(var J;G!==t||l!==0&&G.nodeType!==3||(z=m+l),G!==u||o!==0&&G.nodeType!==3||(p=m+o),G.nodeType===3&&(m+=G.nodeValue.length),(J=G.firstChild)!==null;)P=G,G=J;for(;;){if(G===e)break i;if(P===t&&++C===l&&(z=m),P===u&&++S===o&&(p=m),(J=G.nextSibling)!==null)break;G=P,P=G.parentNode}G=J}t=z===-1||p===-1?null:{start:z,end:p}}else t=null}t=t||{start:0,end:0}}else t=null;for(is={focusedElem:e,selectionRange:t},qa=!1,L=i;L!==null;)if(i=L,e=i.child,(i.subtreeFlags&1028)!==0&&e!==null)e.return=i,L=e;else for(;L!==null;){i=L;try{var K=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(K!==null){var U=K.memoizedProps,Ge=K.memoizedState,k=i.stateNode,h=k.getSnapshotBeforeUpdate(i.elementType===i.type?U:Ei(i.type,U),Ge);k.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var b=i.stateNode.containerInfo;b.nodeType===1?b.textContent="":b.nodeType===9&&b.documentElement&&b.removeChild(b.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(r(163))}}catch(R){Se(i,i.return,R)}if(e=i.sibling,e!==null){e.return=i.return,L=e;break}L=i.return}return K=_d,_d=!1,K}function ka(e,i,t){var o=i.updateQueue;if(o=o!==null?o.lastEffect:null,o!==null){var l=o=o.next;do{if((l.tag&e)===e){var u=l.destroy;l.destroy=void 0,u!==void 0&&Ws(i,t,u)}l=l.next}while(l!==o)}}function Br(e,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var t=i=i.next;do{if((t.tag&e)===e){var o=t.create;t.destroy=o()}t=t.next}while(t!==i)}}function Ls(e){var i=e.ref;if(i!==null){var t=e.stateNode;e.tag,e=t,typeof i=="function"?i(e):i.current=e}}function Md(e){var i=e.alternate;i!==null&&(e.alternate=null,Md(i)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(i=e.stateNode,i!==null&&(delete i[Fi],delete i[ca],delete i[rs],delete i[Sw],delete i[xw])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Id(e){return e.tag===5||e.tag===3||e.tag===4}function Jd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Id(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Hs(e,i,t){var o=e.tag;if(o===5||o===6)e=e.stateNode,i?t.nodeType===8?t.parentNode.insertBefore(e,i):t.insertBefore(e,i):(t.nodeType===8?(i=t.parentNode,i.insertBefore(e,t)):(i=t,i.appendChild(e)),t=t._reactRootContainer,t!=null||i.onclick!==null||(i.onclick=dr));else if(o!==4&&(e=e.child,e!==null))for(Hs(e,i,t),e=e.sibling;e!==null;)Hs(e,i,t),e=e.sibling}function Ks(e,i,t){var o=e.tag;if(o===5||o===6)e=e.stateNode,i?t.insertBefore(e,i):t.appendChild(e);else if(o!==4&&(e=e.child,e!==null))for(Ks(e,i,t),e=e.sibling;e!==null;)Ks(e,i,t),e=e.sibling}var He=null,Pi=!1;function gt(e,i,t){for(t=t.child;t!==null;)Wd(e,i,t),t=t.sibling}function Wd(e,i,t){if(Oi&&typeof Oi.onCommitFiberUnmount=="function")try{Oi.onCommitFiberUnmount($a,t)}catch{}switch(t.tag){case 5:Qe||vn(t,i);case 6:var o=He,l=Pi;He=null,gt(e,i,t),He=o,Pi=l,He!==null&&(Pi?(e=He,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):He.removeChild(t.stateNode));break;case 18:He!==null&&(Pi?(e=He,t=t.stateNode,e.nodeType===8?as(e.parentNode,t):e.nodeType===1&&as(e,t),qn(e)):as(He,t.stateNode));break;case 4:o=He,l=Pi,He=t.stateNode.containerInfo,Pi=!0,gt(e,i,t),He=o,Pi=l;break;case 0:case 11:case 14:case 15:if(!Qe&&(o=t.updateQueue,o!==null&&(o=o.lastEffect,o!==null))){l=o=o.next;do{var u=l,m=u.destroy;u=u.tag,m!==void 0&&((u&2)!==0||(u&4)!==0)&&Ws(t,i,m),l=l.next}while(l!==o)}gt(e,i,t);break;case 1:if(!Qe&&(vn(t,i),o=t.stateNode,typeof o.componentWillUnmount=="function"))try{o.props=t.memoizedProps,o.state=t.memoizedState,o.componentWillUnmount()}catch(z){Se(t,i,z)}gt(e,i,t);break;case 21:gt(e,i,t);break;case 22:t.mode&1?(Qe=(o=Qe)||t.memoizedState!==null,gt(e,i,t),Qe=o):gt(e,i,t);break;default:gt(e,i,t)}}function Ld(e){var i=e.updateQueue;if(i!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new $w),i.forEach(function(o){var l=np.bind(null,e,o);t.has(o)||(t.add(o),o.then(l,l))})}}function Ti(e,i){var t=i.deletions;if(t!==null)for(var o=0;o<t.length;o++){var l=t[o];try{var u=e,m=i,z=m;e:for(;z!==null;){switch(z.tag){case 5:He=z.stateNode,Pi=!1;break e;case 3:He=z.stateNode.containerInfo,Pi=!0;break e;case 4:He=z.stateNode.containerInfo,Pi=!0;break e}z=z.return}if(He===null)throw Error(r(160));Wd(u,m,l),He=null,Pi=!1;var p=l.alternate;p!==null&&(p.return=null),l.return=null}catch(C){Se(l,i,C)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Hd(i,e),i=i.sibling}function Hd(e,i){var t=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ti(i,e),Ii(e),o&4){try{ka(3,e,e.return),Br(3,e)}catch(U){Se(e,e.return,U)}try{ka(5,e,e.return)}catch(U){Se(e,e.return,U)}}break;case 1:Ti(i,e),Ii(e),o&512&&t!==null&&vn(t,t.return);break;case 5:if(Ti(i,e),Ii(e),o&512&&t!==null&&vn(t,t.return),e.flags&32){var l=e.stateNode;try{Wn(l,"")}catch(U){Se(e,e.return,U)}}if(o&4&&(l=e.stateNode,l!=null)){var u=e.memoizedProps,m=t!==null?t.memoizedProps:u,z=e.type,p=e.updateQueue;if(e.updateQueue=null,p!==null)try{z==="input"&&u.type==="radio"&&u.name!=null&&St(l,u),vo(z,m);var C=vo(z,u);for(m=0;m<p.length;m+=2){var S=p[m],G=p[m+1];S==="style"?Au(l,G):S==="dangerouslySetInnerHTML"?Cu(l,G):S==="children"?Wn(l,G):Z(l,S,G,C)}switch(z){case"input":Hi(l,u);break;case"textarea":Jn(l,u);break;case"select":var P=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!u.multiple;var J=u.value;J!=null?ot(l,!!u.multiple,J,!1):P!==!!u.multiple&&(u.defaultValue!=null?ot(l,!!u.multiple,u.defaultValue,!0):ot(l,!!u.multiple,u.multiple?[]:"",!1))}l[ca]=u}catch(U){Se(e,e.return,U)}}break;case 6:if(Ti(i,e),Ii(e),o&4){if(e.stateNode===null)throw Error(r(162));l=e.stateNode,u=e.memoizedProps;try{l.nodeValue=u}catch(U){Se(e,e.return,U)}}break;case 3:if(Ti(i,e),Ii(e),o&4&&t!==null&&t.memoizedState.isDehydrated)try{qn(i.containerInfo)}catch(U){Se(e,e.return,U)}break;case 4:Ti(i,e),Ii(e);break;case 13:Ti(i,e),Ii(e),l=e.child,l.flags&8192&&(u=l.memoizedState!==null,l.stateNode.isHidden=u,!u||l.alternate!==null&&l.alternate.memoizedState!==null||(Zs=xe())),o&4&&Ld(e);break;case 22:if(S=t!==null&&t.memoizedState!==null,e.mode&1?(Qe=(C=Qe)||S,Ti(i,e),Qe=C):Ti(i,e),Ii(e),o&8192){if(C=e.memoizedState!==null,(e.stateNode.isHidden=C)&&!S&&(e.mode&1)!==0)for(L=e,S=e.child;S!==null;){for(G=L=S;L!==null;){switch(P=L,J=P.child,P.tag){case 0:case 11:case 14:case 15:ka(4,P,P.return);break;case 1:vn(P,P.return);var K=P.stateNode;if(typeof K.componentWillUnmount=="function"){o=P,t=P.return;try{i=o,K.props=i.memoizedProps,K.state=i.memoizedState,K.componentWillUnmount()}catch(U){Se(o,t,U)}}break;case 5:vn(P,P.return);break;case 22:if(P.memoizedState!==null){$d(G);continue}}J!==null?(J.return=P,L=J):$d(G)}S=S.sibling}e:for(S=null,G=e;;){if(G.tag===5){if(S===null){S=G;try{l=G.stateNode,C?(u=l.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none"):(z=G.stateNode,p=G.memoizedProps.style,m=p!=null&&p.hasOwnProperty("display")?p.display:null,z.style.display=Du("display",m))}catch(U){Se(e,e.return,U)}}}else if(G.tag===6){if(S===null)try{G.stateNode.nodeValue=C?"":G.memoizedProps}catch(U){Se(e,e.return,U)}}else if((G.tag!==22&&G.tag!==23||G.memoizedState===null||G===e)&&G.child!==null){G.child.return=G,G=G.child;continue}if(G===e)break e;for(;G.sibling===null;){if(G.return===null||G.return===e)break e;S===G&&(S=null),G=G.return}S===G&&(S=null),G.sibling.return=G.return,G=G.sibling}}break;case 19:Ti(i,e),Ii(e),o&4&&Ld(e);break;case 21:break;default:Ti(i,e),Ii(e)}}function Ii(e){var i=e.flags;if(i&2){try{e:{for(var t=e.return;t!==null;){if(Id(t)){var o=t;break e}t=t.return}throw Error(r(160))}switch(o.tag){case 5:var l=o.stateNode;o.flags&32&&(Wn(l,""),o.flags&=-33);var u=Jd(e);Ks(e,u,l);break;case 3:case 4:var m=o.stateNode.containerInfo,z=Jd(e);Hs(e,z,m);break;default:throw Error(r(161))}}catch(p){Se(e,e.return,p)}e.flags&=-3}i&4096&&(e.flags&=-4097)}function Vw(e,i,t){L=e,Kd(e)}function Kd(e,i,t){for(var o=(e.mode&1)!==0;L!==null;){var l=L,u=l.child;if(l.tag===22&&o){var m=l.memoizedState!==null||Nr;if(!m){var z=l.alternate,p=z!==null&&z.memoizedState!==null||Qe;z=Nr;var C=Qe;if(Nr=m,(Qe=p)&&!C)for(L=l;L!==null;)m=L,p=m.child,m.tag===22&&m.memoizedState!==null?Zd(l):p!==null?(p.return=m,L=p):Zd(l);for(;u!==null;)L=u,Kd(u),u=u.sibling;L=l,Nr=z,Qe=C}Ud(e)}else(l.subtreeFlags&8772)!==0&&u!==null?(u.return=l,L=u):Ud(e)}}function Ud(e){for(;L!==null;){var i=L;if((i.flags&8772)!==0){var t=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:Qe||Br(5,i);break;case 1:var o=i.stateNode;if(i.flags&4&&!Qe)if(t===null)o.componentDidMount();else{var l=i.elementType===i.type?t.memoizedProps:Ei(i.type,t.memoizedProps);o.componentDidUpdate(l,t.memoizedState,o.__reactInternalSnapshotBeforeUpdate)}var u=i.updateQueue;u!==null&&$c(i,u,o);break;case 3:var m=i.updateQueue;if(m!==null){if(t=null,i.child!==null)switch(i.child.tag){case 5:t=i.child.stateNode;break;case 1:t=i.child.stateNode}$c(i,m,t)}break;case 5:var z=i.stateNode;if(t===null&&i.flags&4){t=z;var p=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":p.autoFocus&&t.focus();break;case"img":p.src&&(t.src=p.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var C=i.alternate;if(C!==null){var S=C.memoizedState;if(S!==null){var G=S.dehydrated;G!==null&&qn(G)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(r(163))}Qe||i.flags&512&&Ls(i)}catch(P){Se(i,i.return,P)}}if(i===e){L=null;break}if(t=i.sibling,t!==null){t.return=i.return,L=t;break}L=i.return}}function $d(e){for(;L!==null;){var i=L;if(i===e){L=null;break}var t=i.sibling;if(t!==null){t.return=i.return,L=t;break}L=i.return}}function Zd(e){for(;L!==null;){var i=L;try{switch(i.tag){case 0:case 11:case 15:var t=i.return;try{Br(4,i)}catch(p){Se(i,t,p)}break;case 1:var o=i.stateNode;if(typeof o.componentDidMount=="function"){var l=i.return;try{o.componentDidMount()}catch(p){Se(i,l,p)}}var u=i.return;try{Ls(i)}catch(p){Se(i,u,p)}break;case 5:var m=i.return;try{Ls(i)}catch(p){Se(i,m,p)}}}catch(p){Se(i,i.return,p)}if(i===e){L=null;break}var z=i.sibling;if(z!==null){z.return=i.return,L=z;break}L=i.return}}var Yw=Math.ceil,Rr=ne.ReactCurrentDispatcher,Us=ne.ReactCurrentOwner,ki=ne.ReactCurrentBatchConfig,me=0,Je=null,Be=null,Ke=0,yi=0,bn=yt(0),Oe=0,va=null,Jt=0,Or=0,$s=0,ba=null,li=null,Zs=0,Cn=1/0,Xi=null,Fr=!1,Vs=null,jt=null,_r=!1,kt=null,Mr=0,Ca=0,Ys=null,Ir=-1,Jr=0;function ti(){return(me&6)!==0?xe():Ir!==-1?Ir:Ir=xe()}function vt(e){return(e.mode&1)===0?1:(me&2)!==0&&Ke!==0?Ke&-Ke:Nw.transition!==null?(Jr===0&&(Jr=Ju()),Jr):(e=he,e!==0||(e=window.event,e=e===void 0?16:Yu(e.type)),e)}function Si(e,i,t,o){if(50<Ca)throw Ca=0,Ys=null,Error(r(185));Zn(e,t,o),((me&2)===0||e!==Je)&&(e===Je&&((me&2)===0&&(Or|=t),Oe===4&&bt(e,Ke)),ui(e,o),t===1&&me===0&&(i.mode&1)===0&&(Cn=xe()+500,zr&&wt()))}function ui(e,i){var t=e.callbackNode;Nz(e,i);var o=Ya(e,e===Je?Ke:0);if(o===0)t!==null&&_u(t),e.callbackNode=null,e.callbackPriority=0;else if(i=o&-o,e.callbackPriority!==i){if(t!=null&&_u(t),i===1)e.tag===0?Gw(Yd.bind(null,e)):Rc(Yd.bind(null,e)),Pw(function(){(me&6)===0&&wt()}),t=null;else{switch(Wu(o)){case 1:t=To;break;case 4:t=Mu;break;case 16:t=Ua;break;case 536870912:t=Iu;break;default:t=Ua}t=am(t,Vd.bind(null,e))}e.callbackPriority=i,e.callbackNode=t}}function Vd(e,i){if(Ir=-1,Jr=0,(me&6)!==0)throw Error(r(327));var t=e.callbackNode;if(Dn()&&e.callbackNode!==t)return null;var o=Ya(e,e===Je?Ke:0);if(o===0)return null;if((o&30)!==0||(o&e.expiredLanes)!==0||i)i=Wr(e,o);else{i=o;var l=me;me|=2;var u=Xd();(Je!==e||Ke!==i)&&(Xi=null,Cn=xe()+500,Lt(e,i));do try{qw();break}catch(z){Qd(e,z)}while(!0);ys(),Rr.current=u,me=l,Be!==null?i=0:(Je=null,Ke=0,i=Oe)}if(i!==0){if(i===2&&(l=So(e),l!==0&&(o=l,i=Qs(e,l))),i===1)throw t=va,Lt(e,0),bt(e,o),ui(e,xe()),t;if(i===6)bt(e,o);else{if(l=e.current.alternate,(o&30)===0&&!Qw(l)&&(i=Wr(e,o),i===2&&(u=So(e),u!==0&&(o=u,i=Qs(e,u))),i===1))throw t=va,Lt(e,0),bt(e,o),ui(e,xe()),t;switch(e.finishedWork=l,e.finishedLanes=o,i){case 0:case 1:throw Error(r(345));case 2:Ht(e,li,Xi);break;case 3:if(bt(e,o),(o&130023424)===o&&(i=Zs+500-xe(),10<i)){if(Ya(e,0)!==0)break;if(l=e.suspendedLanes,(l&o)!==o){ti(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=ns(Ht.bind(null,e,li,Xi),i);break}Ht(e,li,Xi);break;case 4:if(bt(e,o),(o&4194240)===o)break;for(i=e.eventTimes,l=-1;0<o;){var m=31-Ci(o);u=1<<m,m=i[m],m>l&&(l=m),o&=~u}if(o=l,o=xe()-o,o=(120>o?120:480>o?480:1080>o?1080:1920>o?1920:3e3>o?3e3:4320>o?4320:1960*Yw(o/1960))-o,10<o){e.timeoutHandle=ns(Ht.bind(null,e,li,Xi),o);break}Ht(e,li,Xi);break;case 5:Ht(e,li,Xi);break;default:throw Error(r(329))}}}return ui(e,xe()),e.callbackNode===t?Vd.bind(null,e):null}function Qs(e,i){var t=ba;return e.current.memoizedState.isDehydrated&&(Lt(e,i).flags|=256),e=Wr(e,i),e!==2&&(i=li,li=t,i!==null&&Xs(i)),e}function Xs(e){li===null?li=e:li.push.apply(li,e)}function Qw(e){for(var i=e;;){if(i.flags&16384){var t=i.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var o=0;o<t.length;o++){var l=t[o],u=l.getSnapshot;l=l.value;try{if(!Di(u(),l))return!1}catch{return!1}}}if(t=i.child,i.subtreeFlags&16384&&t!==null)t.return=i,i=t;else{if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function bt(e,i){for(i&=~$s,i&=~Or,e.suspendedLanes|=i,e.pingedLanes&=~i,e=e.expirationTimes;0<i;){var t=31-Ci(i),o=1<<t;e[t]=-1,i&=~o}}function Yd(e){if((me&6)!==0)throw Error(r(327));Dn();var i=Ya(e,0);if((i&1)===0)return ui(e,xe()),null;var t=Wr(e,i);if(e.tag!==0&&t===2){var o=So(e);o!==0&&(i=o,t=Qs(e,o))}if(t===1)throw t=va,Lt(e,0),bt(e,i),ui(e,xe()),t;if(t===6)throw Error(r(345));return e.finishedWork=e.current.alternate,e.finishedLanes=i,Ht(e,li,Xi),ui(e,xe()),null}function qs(e,i){var t=me;me|=1;try{return e(i)}finally{me=t,me===0&&(Cn=xe()+500,zr&&wt())}}function Wt(e){kt!==null&&kt.tag===0&&(me&6)===0&&Dn();var i=me;me|=1;var t=ki.transition,o=he;try{if(ki.transition=null,he=1,e)return e()}finally{he=o,ki.transition=t,me=i,(me&6)===0&&wt()}}function el(){yi=bn.current,be(bn)}function Lt(e,i){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,Ew(t)),Be!==null)for(t=Be.return;t!==null;){var o=t;switch(us(o),o.tag){case 1:o=o.type.childContextTypes,o!=null&&fr();break;case 3:jn(),be(ri),be(Ze),vs();break;case 5:js(o);break;case 4:jn();break;case 13:be(Ee);break;case 19:be(Ee);break;case 10:zs(o.type._context);break;case 22:case 23:el()}t=t.return}if(Je=e,Be=e=Ct(e.current,null),Ke=yi=i,Oe=0,va=null,$s=Or=Jt=0,li=ba=null,_t!==null){for(i=0;i<_t.length;i++)if(t=_t[i],o=t.interleaved,o!==null){t.interleaved=null;var l=o.next,u=t.pending;if(u!==null){var m=u.next;u.next=l,o.next=m}t.pending=o}_t=null}return e}function Qd(e,i){do{var t=Be;try{if(ys(),Dr.current=Tr,Ar){for(var o=Pe.memoizedState;o!==null;){var l=o.queue;l!==null&&(l.pending=null),o=o.next}Ar=!1}if(It=0,Ie=Re=Pe=null,wa=!1,pa=0,Us.current=null,t===null||t.return===null){Oe=1,va=i,Be=null;break}e:{var u=e,m=t.return,z=t,p=i;if(i=Ke,z.flags|=32768,p!==null&&typeof p=="object"&&typeof p.then=="function"){var C=p,S=z,G=S.tag;if((S.mode&1)===0&&(G===0||G===11||G===15)){var P=S.alternate;P?(S.updateQueue=P.updateQueue,S.memoizedState=P.memoizedState,S.lanes=P.lanes):(S.updateQueue=null,S.memoizedState=null)}var J=vd(m);if(J!==null){J.flags&=-257,bd(J,m,z,u,i),J.mode&1&&kd(u,C,i),i=J,p=C;var K=i.updateQueue;if(K===null){var U=new Set;U.add(p),i.updateQueue=U}else K.add(p);break e}else{if((i&1)===0){kd(u,C,i),il();break e}p=Error(r(426))}}else if(De&&z.mode&1){var Ge=vd(m);if(Ge!==null){(Ge.flags&65536)===0&&(Ge.flags|=256),bd(Ge,m,z,u,i),ms(kn(p,z));break e}}u=p=kn(p,z),Oe!==4&&(Oe=2),ba===null?ba=[u]:ba.push(u),u=m;do{switch(u.tag){case 3:u.flags|=65536,i&=-i,u.lanes|=i;var k=gd(u,p,i);Uc(u,k);break e;case 1:z=p;var h=u.type,b=u.stateNode;if((u.flags&128)===0&&(typeof h.getDerivedStateFromError=="function"||b!==null&&typeof b.componentDidCatch=="function"&&(jt===null||!jt.has(b)))){u.flags|=65536,i&=-i,u.lanes|=i;var R=jd(u,z,i);Uc(u,R);break e}}u=u.return}while(u!==null)}em(t)}catch($){i=$,Be===t&&t!==null&&(Be=t=t.return);continue}break}while(!0)}function Xd(){var e=Rr.current;return Rr.current=Tr,e===null?Tr:e}function il(){(Oe===0||Oe===3||Oe===2)&&(Oe=4),Je===null||(Jt&268435455)===0&&(Or&268435455)===0||bt(Je,Ke)}function Wr(e,i){var t=me;me|=2;var o=Xd();(Je!==e||Ke!==i)&&(Xi=null,Lt(e,i));do try{Xw();break}catch(l){Qd(e,l)}while(!0);if(ys(),me=t,Rr.current=o,Be!==null)throw Error(r(261));return Je=null,Ke=0,Oe}function Xw(){for(;Be!==null;)qd(Be)}function qw(){for(;Be!==null&&!Cz();)qd(Be)}function qd(e){var i=nm(e.alternate,e,yi);e.memoizedProps=e.pendingProps,i===null?em(e):Be=i,Us.current=null}function em(e){var i=e;do{var t=i.alternate;if(e=i.return,(i.flags&32768)===0){if(t=Kw(t,i,yi),t!==null){Be=t;return}}else{if(t=Uw(t,i),t!==null){t.flags&=32767,Be=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Oe=6,Be=null;return}}if(i=i.sibling,i!==null){Be=i;return}Be=i=e}while(i!==null);Oe===0&&(Oe=5)}function Ht(e,i,t){var o=he,l=ki.transition;try{ki.transition=null,he=1,ep(e,i,t,o)}finally{ki.transition=l,he=o}return null}function ep(e,i,t,o){do Dn();while(kt!==null);if((me&6)!==0)throw Error(r(327));t=e.finishedWork;var l=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(r(177));e.callbackNode=null,e.callbackPriority=0;var u=t.lanes|t.childLanes;if(Bz(e,u),e===Je&&(Be=Je=null,Ke=0),(t.subtreeFlags&2064)===0&&(t.flags&2064)===0||_r||(_r=!0,am(Ua,function(){return Dn(),null})),u=(t.flags&15990)!==0,(t.subtreeFlags&15990)!==0||u){u=ki.transition,ki.transition=null;var m=he;he=1;var z=me;me|=4,Us.current=null,Zw(e,t),Hd(t,e),jw(is),qa=!!es,is=es=null,e.current=t,Vw(t),Dz(),me=z,he=m,ki.transition=u}else e.current=t;if(_r&&(_r=!1,kt=e,Mr=l),u=e.pendingLanes,u===0&&(jt=null),Pz(t.stateNode),ui(e,xe()),i!==null)for(o=e.onRecoverableError,t=0;t<i.length;t++)l=i[t],o(l.value,{componentStack:l.stack,digest:l.digest});if(Fr)throw Fr=!1,e=Vs,Vs=null,e;return(Mr&1)!==0&&e.tag!==0&&Dn(),u=e.pendingLanes,(u&1)!==0?e===Ys?Ca++:(Ca=0,Ys=e):Ca=0,wt(),null}function Dn(){if(kt!==null){var e=Wu(Mr),i=ki.transition,t=he;try{if(ki.transition=null,he=16>e?16:e,kt===null)var o=!1;else{if(e=kt,kt=null,Mr=0,(me&6)!==0)throw Error(r(331));var l=me;for(me|=4,L=e.current;L!==null;){var u=L,m=u.child;if((L.flags&16)!==0){var z=u.deletions;if(z!==null){for(var p=0;p<z.length;p++){var C=z[p];for(L=C;L!==null;){var S=L;switch(S.tag){case 0:case 11:case 15:ka(8,S,u)}var G=S.child;if(G!==null)G.return=S,L=G;else for(;L!==null;){S=L;var P=S.sibling,J=S.return;if(Md(S),S===C){L=null;break}if(P!==null){P.return=J,L=P;break}L=J}}}var K=u.alternate;if(K!==null){var U=K.child;if(U!==null){K.child=null;do{var Ge=U.sibling;U.sibling=null,U=Ge}while(U!==null)}}L=u}}if((u.subtreeFlags&2064)!==0&&m!==null)m.return=u,L=m;else e:for(;L!==null;){if(u=L,(u.flags&2048)!==0)switch(u.tag){case 0:case 11:case 15:ka(9,u,u.return)}var k=u.sibling;if(k!==null){k.return=u.return,L=k;break e}L=u.return}}var h=e.current;for(L=h;L!==null;){m=L;var b=m.child;if((m.subtreeFlags&2064)!==0&&b!==null)b.return=m,L=b;else e:for(m=h;L!==null;){if(z=L,(z.flags&2048)!==0)try{switch(z.tag){case 0:case 11:case 15:Br(9,z)}}catch($){Se(z,z.return,$)}if(z===m){L=null;break e}var R=z.sibling;if(R!==null){R.return=z.return,L=R;break e}L=z.return}}if(me=l,wt(),Oi&&typeof Oi.onPostCommitFiberRoot=="function")try{Oi.onPostCommitFiberRoot($a,e)}catch{}o=!0}return o}finally{he=t,ki.transition=i}}return!1}function im(e,i,t){i=kn(t,i),i=gd(e,i,1),e=ht(e,i,1),i=ti(),e!==null&&(Zn(e,1,i),ui(e,i))}function Se(e,i,t){if(e.tag===3)im(e,e,t);else for(;i!==null;){if(i.tag===3){im(i,e,t);break}else if(i.tag===1){var o=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(jt===null||!jt.has(o))){e=kn(t,e),e=jd(i,e,1),i=ht(i,e,1),e=ti(),i!==null&&(Zn(i,1,e),ui(i,e));break}}i=i.return}}function ip(e,i,t){var o=e.pingCache;o!==null&&o.delete(i),i=ti(),e.pingedLanes|=e.suspendedLanes&t,Je===e&&(Ke&t)===t&&(Oe===4||Oe===3&&(Ke&130023424)===Ke&&500>xe()-Zs?Lt(e,0):$s|=t),ui(e,i)}function tm(e,i){i===0&&((e.mode&1)===0?i=1:(i=Va,Va<<=1,(Va&130023424)===0&&(Va=4194304)));var t=ti();e=Vi(e,i),e!==null&&(Zn(e,i,t),ui(e,t))}function tp(e){var i=e.memoizedState,t=0;i!==null&&(t=i.retryLane),tm(e,t)}function np(e,i){var t=0;switch(e.tag){case 13:var o=e.stateNode,l=e.memoizedState;l!==null&&(t=l.retryLane);break;case 19:o=e.stateNode;break;default:throw Error(r(314))}o!==null&&o.delete(i),tm(e,t)}var nm;nm=function(e,i,t){if(e!==null)if(e.memoizedProps!==i.pendingProps||ri.current)si=!0;else{if((e.lanes&t)===0&&(i.flags&128)===0)return si=!1,Hw(e,i,t);si=(e.flags&131072)!==0}else si=!1,De&&(i.flags&1048576)!==0&&Oc(i,pr,i.index);switch(i.lanes=0,i.tag){case 2:var o=i.type;Gr(e,i),e=i.pendingProps;var l=fn(i,Ze.current);gn(i,t),l=Ds(null,i,o,e,l,t);var u=As();return i.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,oi(o)?(u=!0,yr(i)):u=!1,i.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,hs(i),l.updater=Sr,i.stateNode=l,l._reactInternals=i,Gs(i,o,e,t),i=Os(null,i,o,!0,u,t)):(i.tag=0,De&&u&&ls(i),ii(null,i,l,t),i=i.child),i;case 16:o=i.elementType;e:{switch(Gr(e,i),e=i.pendingProps,l=o._init,o=l(o._payload),i.type=o,l=i.tag=rp(o),e=Ei(o,e),l){case 0:i=Rs(null,i,o,e,t);break e;case 1:i=Td(null,i,o,e,t);break e;case 11:i=Cd(null,i,o,e,t);break e;case 14:i=Dd(null,i,o,Ei(o.type,e),t);break e}throw Error(r(306,o,""))}return i;case 0:return o=i.type,l=i.pendingProps,l=i.elementType===o?l:Ei(o,l),Rs(e,i,o,l,t);case 1:return o=i.type,l=i.pendingProps,l=i.elementType===o?l:Ei(o,l),Td(e,i,o,l,t);case 3:e:{if(Sd(i),e===null)throw Error(r(387));o=i.pendingProps,u=i.memoizedState,l=u.element,Kc(e,i),br(i,o,null,t);var m=i.memoizedState;if(o=m.element,u.isDehydrated)if(u={element:o,isDehydrated:!1,cache:m.cache,pendingSuspenseBoundaries:m.pendingSuspenseBoundaries,transitions:m.transitions},i.updateQueue.baseState=u,i.memoizedState=u,i.flags&256){l=kn(Error(r(423)),i),i=xd(e,i,o,t,l);break e}else if(o!==l){l=kn(Error(r(424)),i),i=xd(e,i,o,t,l);break e}else for(fi=ft(i.stateNode.containerInfo.firstChild),mi=i,De=!0,Ai=null,t=Lc(i,null,o,t),i.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(wn(),o===l){i=Qi(e,i,t);break e}ii(e,i,o,t)}i=i.child}return i;case 5:return Zc(i),e===null&&ds(i),o=i.type,l=i.pendingProps,u=e!==null?e.memoizedProps:null,m=l.children,ts(o,l)?m=null:u!==null&&ts(o,u)&&(i.flags|=32),Pd(e,i),ii(e,i,m,t),i.child;case 6:return e===null&&ds(i),null;case 13:return Gd(e,i,t);case 4:return gs(i,i.stateNode.containerInfo),o=i.pendingProps,e===null?i.child=pn(i,null,o,t):ii(e,i,o,t),i.child;case 11:return o=i.type,l=i.pendingProps,l=i.elementType===o?l:Ei(o,l),Cd(e,i,o,l,t);case 7:return ii(e,i,i.pendingProps,t),i.child;case 8:return ii(e,i,i.pendingProps.children,t),i.child;case 12:return ii(e,i,i.pendingProps.children,t),i.child;case 10:e:{if(o=i.type._context,l=i.pendingProps,u=i.memoizedProps,m=l.value,ke(jr,o._currentValue),o._currentValue=m,u!==null)if(Di(u.value,m)){if(u.children===l.children&&!ri.current){i=Qi(e,i,t);break e}}else for(u=i.child,u!==null&&(u.return=i);u!==null;){var z=u.dependencies;if(z!==null){m=u.child;for(var p=z.firstContext;p!==null;){if(p.context===o){if(u.tag===1){p=Yi(-1,t&-t),p.tag=2;var C=u.updateQueue;if(C!==null){C=C.shared;var S=C.pending;S===null?p.next=p:(p.next=S.next,S.next=p),C.pending=p}}u.lanes|=t,p=u.alternate,p!==null&&(p.lanes|=t),ws(u.return,t,i),z.lanes|=t;break}p=p.next}}else if(u.tag===10)m=u.type===i.type?null:u.child;else if(u.tag===18){if(m=u.return,m===null)throw Error(r(341));m.lanes|=t,z=m.alternate,z!==null&&(z.lanes|=t),ws(m,t,i),m=u.sibling}else m=u.child;if(m!==null)m.return=u;else for(m=u;m!==null;){if(m===i){m=null;break}if(u=m.sibling,u!==null){u.return=m.return,m=u;break}m=m.return}u=m}ii(e,i,l.children,t),i=i.child}return i;case 9:return l=i.type,o=i.pendingProps.children,gn(i,t),l=gi(l),o=o(l),i.flags|=1,ii(e,i,o,t),i.child;case 14:return o=i.type,l=Ei(o,i.pendingProps),l=Ei(o.type,l),Dd(e,i,o,l,t);case 15:return Ad(e,i,i.type,i.pendingProps,t);case 17:return o=i.type,l=i.pendingProps,l=i.elementType===o?l:Ei(o,l),Gr(e,i),i.tag=1,oi(o)?(e=!0,yr(i)):e=!1,gn(i,t),pd(i,o,l),Gs(i,o,l,t),Os(null,i,o,!0,e,t);case 19:return Bd(e,i,t);case 22:return Ed(e,i,t)}throw Error(r(156,i.tag))};function am(e,i){return Fu(e,i)}function ap(e,i,t,o){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function vi(e,i,t,o){return new ap(e,i,t,o)}function tl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function rp(e){if(typeof e=="function")return tl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ei)return 11;if(e===ai)return 14}return 2}function Ct(e,i){var t=e.alternate;return t===null?(t=vi(e.tag,i,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=i,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,i=e.dependencies,t.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function Lr(e,i,t,o,l,u){var m=2;if(o=e,typeof e=="function")tl(e)&&(m=1);else if(typeof e=="string")m=5;else e:switch(e){case le:return Kt(t.children,l,u,i);case ze:m=8,l|=8;break;case _e:return e=vi(12,t,i,l|2),e.elementType=_e,e.lanes=u,e;case Me:return e=vi(13,t,i,l),e.elementType=Me,e.lanes=u,e;case $e:return e=vi(19,t,i,l),e.elementType=$e,e.lanes=u,e;case pe:return Hr(t,l,u,i);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case qe:m=10;break e;case wi:m=9;break e;case ei:m=11;break e;case ai:m=14;break e;case Ae:m=16,o=null;break e}throw Error(r(130,e==null?e:typeof e,""))}return i=vi(m,t,i,l),i.elementType=e,i.type=o,i.lanes=u,i}function Kt(e,i,t,o){return e=vi(7,e,o,i),e.lanes=t,e}function Hr(e,i,t,o){return e=vi(22,e,o,i),e.elementType=pe,e.lanes=t,e.stateNode={isHidden:!1},e}function nl(e,i,t){return e=vi(6,e,null,i),e.lanes=t,e}function al(e,i,t){return i=vi(4,e.children!==null?e.children:[],e.key,i),i.lanes=t,i.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},i}function op(e,i,t,o,l){this.tag=i,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=xo(0),this.expirationTimes=xo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=xo(0),this.identifierPrefix=o,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function rl(e,i,t,o,l,u,m,z,p){return e=new op(e,i,t,z,p),i===1?(i=1,u===!0&&(i|=8)):i=0,u=vi(3,null,null,i),e.current=u,u.stateNode=e,u.memoizedState={element:o,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},hs(u),e}function sp(e,i,t){var o=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ae,key:o==null?null:""+o,children:e,containerInfo:i,implementation:t}}function rm(e){if(!e)return zt;e=e._reactInternals;e:{if(Nt(e)!==e||e.tag!==1)throw Error(r(170));var i=e;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(oi(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(r(171))}if(e.tag===1){var t=e.type;if(oi(t))return Nc(e,t,i)}return i}function om(e,i,t,o,l,u,m,z,p){return e=rl(t,o,!0,e,l,u,m,z,p),e.context=rm(null),t=e.current,o=ti(),l=vt(t),u=Yi(o,l),u.callback=i??null,ht(t,u,l),e.current.lanes=l,Zn(e,l,o),ui(e,o),e}function Kr(e,i,t,o){var l=i.current,u=ti(),m=vt(l);return t=rm(t),i.context===null?i.context=t:i.pendingContext=t,i=Yi(u,m),i.payload={element:e},o=o===void 0?null:o,o!==null&&(i.callback=o),e=ht(l,i,m),e!==null&&(Si(e,l,m,u),vr(e,l,m)),m}function Ur(e){return e=e.current,e.child?(e.child.tag===5,e.child.stateNode):null}function sm(e,i){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<i?t:i}}function ol(e,i){sm(e,i),(e=e.alternate)&&sm(e,i)}function lp(){return null}var lm=typeof reportError=="function"?reportError:function(e){console.error(e)};function sl(e){this._internalRoot=e}$r.prototype.render=sl.prototype.render=function(e){var i=this._internalRoot;if(i===null)throw Error(r(409));Kr(e,i,null,null)},$r.prototype.unmount=sl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var i=e.containerInfo;Wt(function(){Kr(null,e,null,null)}),i[Ki]=null}};function $r(e){this._internalRoot=e}$r.prototype.unstable_scheduleHydration=function(e){if(e){var i=Ku();e={blockedOn:null,target:e,priority:i};for(var t=0;t<ct.length&&i!==0&&i<ct[t].priority;t++);ct.splice(t,0,e),t===0&&Zu(e)}};function ll(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Zr(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function um(){}function up(e,i,t,o,l){if(l){if(typeof o=="function"){var u=o;o=function(){var C=Ur(m);u.call(C)}}var m=om(i,o,e,0,null,!1,!1,"",um);return e._reactRootContainer=m,e[Ki]=m.current,la(e.nodeType===8?e.parentNode:e),Wt(),m}for(;l=e.lastChild;)e.removeChild(l);if(typeof o=="function"){var z=o;o=function(){var C=Ur(p);z.call(C)}}var p=rl(e,0,!1,null,null,!1,!1,"",um);return e._reactRootContainer=p,e[Ki]=p.current,la(e.nodeType===8?e.parentNode:e),Wt(function(){Kr(i,p,t,o)}),p}function Vr(e,i,t,o,l){var u=t._reactRootContainer;if(u){var m=u;if(typeof l=="function"){var z=l;l=function(){var p=Ur(m);z.call(p)}}Kr(i,m,e,l)}else m=up(t,i,e,l,o);return Ur(m)}Lu=function(e){switch(e.tag){case 3:var i=e.stateNode;if(i.current.memoizedState.isDehydrated){var t=$n(i.pendingLanes);t!==0&&(Go(i,t|1),ui(i,xe()),(me&6)===0&&(Cn=xe()+500,wt()))}break;case 13:Wt(function(){var o=Vi(e,1);if(o!==null){var l=ti();Si(o,e,1,l)}}),ol(e,1)}},No=function(e){if(e.tag===13){var i=Vi(e,134217728);if(i!==null){var t=ti();Si(i,e,134217728,t)}ol(e,134217728)}},Hu=function(e){if(e.tag===13){var i=vt(e),t=Vi(e,i);if(t!==null){var o=ti();Si(t,e,i,o)}ol(e,i)}},Ku=function(){return he},Uu=function(e,i){var t=he;try{return he=e,i()}finally{he=t}},Do=function(e,i,t){switch(i){case"input":if(Hi(e,t),i=t.name,t.type==="radio"&&i!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<t.length;i++){var o=t[i];if(o!==e&&o.form===e.form){var l=mr(o);if(!l)throw Error(r(90));Li(o),Hi(o,l)}}}break;case"textarea":Jn(e,t);break;case"select":i=t.value,i!=null&&ot(e,!!t.multiple,i,!1)}},Su=qs,xu=Wt;var cp={usingClientEntryPoint:!1,Events:[da,dn,mr,Pu,Tu,qs]},Da={findFiberByHostInstance:Bt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},dp={bundleType:Da.bundleType,version:Da.version,rendererPackageName:Da.rendererPackageName,rendererConfig:Da.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ne.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ru(e),e===null?null:e.stateNode},findFiberByHostInstance:Da.findFiberByHostInstance||lp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Yr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Yr.isDisabled&&Yr.supportsFiber)try{$a=Yr.inject(dp),Oi=Yr}catch{}}return ci.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=cp,ci.createPortal=function(e,i){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ll(i))throw Error(r(200));return sp(e,i,null,t)},ci.createRoot=function(e,i){if(!ll(e))throw Error(r(299));var t=!1,o="",l=lm;return i!=null&&(i.unstable_strictMode===!0&&(t=!0),i.identifierPrefix!==void 0&&(o=i.identifierPrefix),i.onRecoverableError!==void 0&&(l=i.onRecoverableError)),i=rl(e,1,!1,null,null,t,!1,o,l),e[Ki]=i.current,la(e.nodeType===8?e.parentNode:e),new sl(i)},ci.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var i=e._reactInternals;if(i===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=Ru(i),e=e===null?null:e.stateNode,e},ci.flushSync=function(e){return Wt(e)},ci.hydrate=function(e,i,t){if(!Zr(i))throw Error(r(200));return Vr(null,e,i,!0,t)},ci.hydrateRoot=function(e,i,t){if(!ll(e))throw Error(r(405));var o=t!=null&&t.hydratedSources||null,l=!1,u="",m=lm;if(t!=null&&(t.unstable_strictMode===!0&&(l=!0),t.identifierPrefix!==void 0&&(u=t.identifierPrefix),t.onRecoverableError!==void 0&&(m=t.onRecoverableError)),i=om(i,null,e,1,t??null,l,!1,u,m),e[Ki]=i.current,la(e),o)for(e=0;e<o.length;e++)t=o[e],l=t._getVersion,l=l(t._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[t,l]:i.mutableSourceEagerHydrationData.push(t,l);return new $r(i)},ci.render=function(e,i,t){if(!Zr(i))throw Error(r(200));return Vr(null,e,i,!1,t)},ci.unmountComponentAtNode=function(e){if(!Zr(e))throw Error(r(40));return e._reactRootContainer?(Wt(function(){Vr(null,null,e,!1,function(){e._reactRootContainer=null,e[Ki]=null})}),!0):!1},ci.unstable_batchedUpdates=qs,ci.unstable_renderSubtreeIntoContainer=function(e,i,t,o){if(!Zr(t))throw Error(r(200));if(e==null||e._reactInternals===void 0)throw Error(r(38));return Vr(e,i,t,!1,o)},ci.version="18.3.1-next-f1338f8080-20240426",ci}var km;function Bf(){if(km)return zl.exports;km=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(a){console.error(a)}}return n(),zl.exports=Jp(),zl.exports}var Wp=Bf();const Nn=Ra(Wp),vm={disabled:!1},Rf=ni.createContext(null);var Lp=function(a){return a.scrollTop},Ea="unmounted",Ut="exited",At="entering",$t="entered",Ol="exiting",at=(function(n){Pp(a,n);function a(s,c){var d;d=n.call(this,s,c)||this;var f=c,y=f&&!f.isMounting?s.enter:s.appear,w;return d.appearStatus=null,s.in?y?(w=Ut,d.appearStatus=At):w=$t:s.unmountOnExit||s.mountOnEnter?w=Ea:w=Ut,d.state={status:w},d.nextCallback=null,d}a.getDerivedStateFromProps=function(c,d){var f=c.in;return f&&d.status===Ea?{status:Ut}:null};var r=a.prototype;return r.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},r.componentDidUpdate=function(c){var d=null;if(c!==this.props){var f=this.state.status;this.props.in?f!==At&&f!==$t&&(d=At):(f===At||f===$t)&&(d=Ol)}this.updateStatus(!1,d)},r.componentWillUnmount=function(){this.cancelNextCallback()},r.getTimeouts=function(){var c=this.props.timeout,d,f,y;return d=f=y=c,c!=null&&typeof c!="number"&&(d=c.exit,f=c.enter,y=c.appear!==void 0?c.appear:f),{exit:d,enter:f,appear:y}},r.updateStatus=function(c,d){if(c===void 0&&(c=!1),d!==null)if(this.cancelNextCallback(),d===At){if(this.props.unmountOnExit||this.props.mountOnEnter){var f=this.props.nodeRef?this.props.nodeRef.current:Nn.findDOMNode(this);f&&Lp(f)}this.performEnter(c)}else this.performExit();else this.props.unmountOnExit&&this.state.status===Ut&&this.setState({status:Ea})},r.performEnter=function(c){var d=this,f=this.props.enter,y=this.context?this.context.isMounting:c,w=this.props.nodeRef?[y]:[Nn.findDOMNode(this),y],j=w[0],v=w[1],D=this.getTimeouts(),A=y?D.appear:D.enter;if(!c&&!f||vm.disabled){this.safeSetState({status:$t},function(){d.props.onEntered(j)});return}this.props.onEnter(j,v),this.safeSetState({status:At},function(){d.props.onEntering(j,v),d.onTransitionEnd(A,function(){d.safeSetState({status:$t},function(){d.props.onEntered(j,v)})})})},r.performExit=function(){var c=this,d=this.props.exit,f=this.getTimeouts(),y=this.props.nodeRef?void 0:Nn.findDOMNode(this);if(!d||vm.disabled){this.safeSetState({status:Ut},function(){c.props.onExited(y)});return}this.props.onExit(y),this.safeSetState({status:Ol},function(){c.props.onExiting(y),c.onTransitionEnd(f.exit,function(){c.safeSetState({status:Ut},function(){c.props.onExited(y)})})})},r.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},r.safeSetState=function(c,d){d=this.setNextCallback(d),this.setState(c,d)},r.setNextCallback=function(c){var d=this,f=!0;return this.nextCallback=function(y){f&&(f=!1,d.nextCallback=null,c(y))},this.nextCallback.cancel=function(){f=!1},this.nextCallback},r.onTransitionEnd=function(c,d){this.setNextCallback(d);var f=this.props.nodeRef?this.props.nodeRef.current:Nn.findDOMNode(this),y=c==null&&!this.props.addEndListener;if(!f||y){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var w=this.props.nodeRef?[this.nextCallback]:[f,this.nextCallback],j=w[0],v=w[1];this.props.addEndListener(j,v)}c!=null&&setTimeout(this.nextCallback,c)},r.render=function(){var c=this.state.status;if(c===Ea)return null;var d=this.props,f=d.children;d.in,d.mountOnEnter,d.unmountOnExit,d.appear,d.enter,d.exit,d.timeout,d.addEndListener,d.onEnter,d.onEntering,d.onEntered,d.onExit,d.onExiting,d.onExited,d.nodeRef;var y=Ep(d,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return ni.createElement(Rf.Provider,{value:null},typeof f=="function"?f(c,y):ni.cloneElement(ni.Children.only(f),y))},a})(ni.Component);at.contextType=Rf;at.propTypes={};function An(){}at.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:An,onEntering:An,onEntered:An,onExit:An,onExiting:An,onExited:An};at.UNMOUNTED=Ea;at.EXITED=Ut;at.ENTERING=At;at.ENTERED=$t;at.EXITING=Ol;function Hp(n){return n.code==="Escape"||n.keyCode===27}function Kp(){const n=T.version.split(".");return{major:+n[0],minor:+n[1],patch:+n[2]}}function yo(n){if(!n||typeof n=="function")return null;const{major:a}=Kp();return a>=19?n.props.ref:n.ref}const Fn=!!(typeof window<"u"&&window.document&&window.document.createElement);var Fl=!1,_l=!1;try{var hl={get passive(){return Fl=!0},get once(){return _l=Fl=!0}};Fn&&(window.addEventListener("test",hl,hl),window.removeEventListener("test",hl,!0))}catch{}function Of(n,a,r,s){if(s&&typeof s!="boolean"&&!_l){var c=s.once,d=s.capture,f=r;!_l&&c&&(f=r.__once||function y(w){this.removeEventListener(a,y,d),r.call(this,w)},r.__once=f),n.addEventListener(a,f,Fl?s:d)}n.addEventListener(a,r,s)}function Ml(n,a,r,s){var c=s&&typeof s!="boolean"?s.capture:s;n.removeEventListener(a,r,c),r.__once&&n.removeEventListener(a,r.__once,c)}function so(n,a,r,s){return Of(n,a,r,s),function(){Ml(n,a,r,s)}}function Up(n,a,r,s){if(s===void 0&&(s=!0),n){var c=document.createEvent("HTMLEvents");c.initEvent(a,r,s),n.dispatchEvent(c)}}function $p(n){var a=Qt(n,"transitionDuration")||"",r=a.indexOf("ms")===-1?1e3:1;return parseFloat(a)*r}function Zp(n,a,r){r===void 0&&(r=5);var s=!1,c=setTimeout(function(){s||Up(n,"transitionend",!0)},a+r),d=so(n,"transitionend",function(){s=!0},{once:!0});return function(){clearTimeout(c),d()}}function Ff(n,a,r,s){r==null&&(r=$p(n)||0);var c=Zp(n,r,s),d=so(n,"transitionend",a);return function(){c(),d()}}function bm(n,a){const r=Qt(n,a)||"",s=r.indexOf("ms")===-1?1e3:1;return parseFloat(r)*s}function Vp(n,a){const r=bm(n,"transitionDuration"),s=bm(n,"transitionDelay"),c=Ff(n,d=>{d.target===n&&(c(),a(d))},r+s)}function Yp(n){n.offsetHeight}const Cm=n=>!n||typeof n=="function"?n:a=>{n.current=a};function Qp(n,a){const r=Cm(n),s=Cm(a);return c=>{r&&r(c),s&&s(c)}}function _f(n,a){return T.useMemo(()=>Qp(n,a),[n,a])}function Xp(n){return n&&"setState"in n?Nn.findDOMNode(n):n??null}const Mf=ni.forwardRef(({onEnter:n,onEntering:a,onEntered:r,onExit:s,onExiting:c,onExited:d,addEndListener:f,children:y,childRef:w,...j},v)=>{const D=T.useRef(null),A=_f(D,w),F=ae=>{A(Xp(ae))},M=ae=>le=>{ae&&D.current&&ae(D.current,le)},_=T.useCallback(M(n),[n]),W=T.useCallback(M(a),[a]),O=T.useCallback(M(r),[r]),Y=T.useCallback(M(s),[s]),Z=T.useCallback(M(c),[c]),ne=T.useCallback(M(d),[d]),H=T.useCallback(M(f),[f]);return x.jsx(at,{ref:v,...j,onEnter:_,onEntered:O,onEntering:W,onExit:Y,onExited:ne,onExiting:Z,addEndListener:H,nodeRef:D,children:typeof y=="function"?(ae,le)=>y(ae,{...le,ref:F}):ni.cloneElement(y,{ref:F})})});Mf.displayName="TransitionWrapper";function qp(n){const a=T.useRef(n);return T.useEffect(()=>{a.current=n},[n]),a}function Il(n){const a=qp(n);return T.useCallback(function(...r){return a.current&&a.current(...r)},[a])}const eh=(n=>T.forwardRef((a,r)=>x.jsx("div",{...a,ref:r,className:Le(a.className,n)})));function ih(n){const a=T.useRef(n);return T.useEffect(()=>{a.current=n},[n]),a}function Zt(n){const a=ih(n);return T.useCallback(function(...r){return a.current&&a.current(...r)},[a])}function th(){const n=T.useRef(!0),a=T.useRef(()=>n.current);return T.useEffect(()=>(n.current=!0,()=>{n.current=!1}),[]),a.current}function nh(n){const a=T.useRef(null);return T.useEffect(()=>{a.current=n}),a.current}const ah=typeof global<"u"&&global.navigator&&global.navigator.product==="ReactNative",rh=typeof document<"u",Dm=rh||ah?T.useLayoutEffect:T.useEffect,oh=["as","disabled"];function sh(n,a){if(n==null)return{};var r={};for(var s in n)if({}.hasOwnProperty.call(n,s)){if(a.indexOf(s)>=0)continue;r[s]=n[s]}return r}function lh(n){return!n||n.trim()==="#"}function If({tagName:n,disabled:a,href:r,target:s,rel:c,role:d,onClick:f,tabIndex:y=0,type:w}){n||(r!=null||s!=null||c!=null?n="a":n="button");const j={tagName:n};if(n==="button")return[{type:w||"button",disabled:a},j];const v=A=>{if((a||n==="a"&&lh(r))&&A.preventDefault(),a){A.stopPropagation();return}f?.(A)},D=A=>{A.key===" "&&(A.preventDefault(),v(A))};return n==="a"&&(r||(r="#"),a&&(r=void 0)),[{role:d??"button",disabled:void 0,tabIndex:a?void 0:y,href:r,target:n==="a"?s:void 0,"aria-disabled":a||void 0,rel:n==="a"?c:void 0,onClick:v,onKeyDown:D},j]}const uh=T.forwardRef((n,a)=>{let{as:r,disabled:s}=n,c=sh(n,oh);const[d,{tagName:f}]=If(Object.assign({tagName:r,disabled:s},c));return x.jsx(f,Object.assign({},c,d,{ref:a}))});uh.displayName="Button";const ch={[At]:"show",[$t]:"show"},ou=T.forwardRef(({className:n,children:a,transitionClasses:r={},onEnter:s,...c},d)=>{const f={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,...c},y=T.useCallback((w,j)=>{Yp(w),s?.(w,j)},[s]);return x.jsx(Mf,{ref:d,addEndListener:Vp,...f,onEnter:y,childRef:yo(a),children:(w,j)=>T.cloneElement(a,{...j,className:Le("fade",n,a.props.className,ch[w],r[w])})})});ou.displayName="Fade";var gl={exports:{}},jl,Am;function dh(){if(Am)return jl;Am=1;var n="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return jl=n,jl}var kl,Em;function mh(){if(Em)return kl;Em=1;var n=dh();function a(){}function r(){}return r.resetWarningCache=a,kl=function(){function s(f,y,w,j,v,D){if(D!==n){var A=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw A.name="Invariant Violation",A}}s.isRequired=s;function c(){return s}var d={array:s,bigint:s,bool:s,func:s,number:s,object:s,string:s,symbol:s,any:s,arrayOf:c,element:s,elementType:s,instanceOf:c,node:s,objectOf:c,oneOf:c,oneOfType:c,shape:c,exact:c,checkPropTypes:r,resetWarningCache:a};return d.PropTypes=d,d},kl}var Pm;function fh(){return Pm||(Pm=1,gl.exports=mh()()),gl.exports}var yh=fh();const vl=Ra(yh),zh={"aria-label":vl.string,onClick:vl.func,variant:vl.oneOf(["white"])},su=T.forwardRef(({className:n,variant:a,"aria-label":r="Close",...s},c)=>x.jsx("button",{ref:c,type:"button",className:Le("btn-close",a&&`btn-close-${a}`,n),"aria-label":r,...s}));su.displayName="CloseButton";su.propTypes=zh;const Gn=T.forwardRef(({as:n,bsPrefix:a,variant:r="primary",size:s,active:c=!1,disabled:d=!1,className:f,...y},w)=>{const j=en(a,"btn"),[v,{tagName:D}]=If({tagName:n,disabled:d,...y}),A=D;return x.jsx(A,{...v,...y,ref:w,disabled:d,className:Le(f,j,c&&"active",r&&`${j}-${r}`,s&&`${j}-${s}`,y.href&&d&&"disabled")})});Gn.displayName="Button";function wh(n){const a=T.useRef(n);return a.current=n,a}function ph(n){const a=wh(n);T.useEffect(()=>()=>a.current(),[])}var hh=Function.prototype.bind.call(Function.prototype.call,[].slice);function En(n,a){return hh(n.querySelectorAll(a))}function Tm(n,a){if(n.contains)return n.contains(a);if(n.compareDocumentPosition)return n===a||!!(n.compareDocumentPosition(a)&16)}const gh="data-rr-ui-";function jh(n){return`${gh}${n}`}const Jf=T.createContext(Fn?window:void 0);Jf.Provider;function lu(){return T.useContext(Jf)}const Sm=n=>!n||typeof n=="function"?n:a=>{n.current=a};function kh(n,a){const r=Sm(n),s=Sm(a);return c=>{r&&r(c),s&&s(c)}}function uu(n,a){return T.useMemo(()=>kh(n,a),[n,a])}var Xr;function xm(n){if((!Xr&&Xr!==0||n)&&Fn){var a=document.createElement("div");a.style.position="absolute",a.style.top="-9999px",a.style.width="50px",a.style.height="50px",a.style.overflow="scroll",document.body.appendChild(a),Xr=a.offsetWidth-a.clientWidth,document.body.removeChild(a)}return Xr}function vh(){return T.useState(null)}function bl(n){n===void 0&&(n=fo());try{var a=n.activeElement;return!a||!a.nodeName?null:a}catch{return n.body}}function bh(n){const a=T.useRef(n);return a.current=n,a}function Ch(n){const a=bh(n);T.useEffect(()=>()=>a.current(),[])}function Dh(n=document){const a=n.defaultView;return Math.abs(a.innerWidth-n.documentElement.clientWidth)}const Gm=jh("modal-open");class cu{constructor({ownerDocument:a,handleContainerOverflow:r=!0,isRTL:s=!1}={}){this.handleContainerOverflow=r,this.isRTL=s,this.modals=[],this.ownerDocument=a}getScrollbarWidth(){return Dh(this.ownerDocument)}getElement(){return(this.ownerDocument||document).body}setModalAttributes(a){}removeModalAttributes(a){}setContainerStyle(a){const r={overflow:"hidden"},s=this.isRTL?"paddingLeft":"paddingRight",c=this.getElement();a.style={overflow:c.style.overflow,[s]:c.style[s]},a.scrollBarWidth&&(r[s]=`${parseInt(Qt(c,s)||"0",10)+a.scrollBarWidth}px`),c.setAttribute(Gm,""),Qt(c,r)}reset(){[...this.modals].forEach(a=>this.remove(a))}removeContainerStyle(a){const r=this.getElement();r.removeAttribute(Gm),Object.assign(r.style,a.style)}add(a){let r=this.modals.indexOf(a);return r!==-1||(r=this.modals.length,this.modals.push(a),this.setModalAttributes(a),r!==0)||(this.state={scrollBarWidth:this.getScrollbarWidth(),style:{}},this.handleContainerOverflow&&this.setContainerStyle(this.state)),r}remove(a){const r=this.modals.indexOf(a);r!==-1&&(this.modals.splice(r,1),!this.modals.length&&this.handleContainerOverflow&&this.removeContainerStyle(this.state),this.removeModalAttributes(a))}isTopModal(a){return!!this.modals.length&&this.modals[this.modals.length-1]===a}}const Cl=(n,a)=>Fn?n==null?(a||fo()).body:(typeof n=="function"&&(n=n()),n&&"current"in n&&(n=n.current),n&&("nodeType"in n||n.getBoundingClientRect)?n:null):null;function Ah(n,a){const r=lu(),[s,c]=T.useState(()=>Cl(n,r?.document));if(!s){const d=Cl(n);d&&c(d)}return T.useEffect(()=>{},[a,s]),T.useEffect(()=>{const d=Cl(n);d!==s&&c(d)},[n,s]),s}function Eh({children:n,in:a,onExited:r,mountOnEnter:s,unmountOnExit:c}){const d=T.useRef(null),f=T.useRef(a),y=Zt(r);T.useEffect(()=>{a?f.current=!0:y(d.current)},[a,y]);const w=uu(d,yo(n)),j=T.cloneElement(n,{ref:w});return a?j:c||!f.current&&s?null:j}const Ph=["onEnter","onEntering","onEntered","onExit","onExiting","onExited","addEndListener","children"];function Th(n,a){if(n==null)return{};var r={};for(var s in n)if({}.hasOwnProperty.call(n,s)){if(a.indexOf(s)>=0)continue;r[s]=n[s]}return r}function Sh(n){let{onEnter:a,onEntering:r,onEntered:s,onExit:c,onExiting:d,onExited:f,addEndListener:y,children:w}=n,j=Th(n,Ph);const v=T.useRef(null),D=uu(v,yo(w)),A=ne=>H=>{ne&&v.current&&ne(v.current,H)},F=T.useCallback(A(a),[a]),M=T.useCallback(A(r),[r]),_=T.useCallback(A(s),[s]),W=T.useCallback(A(c),[c]),O=T.useCallback(A(d),[d]),Y=T.useCallback(A(f),[f]),Z=T.useCallback(A(y),[y]);return Object.assign({},j,{nodeRef:v},a&&{onEnter:F},r&&{onEntering:M},s&&{onEntered:_},c&&{onExit:W},d&&{onExiting:O},f&&{onExited:Y},y&&{addEndListener:Z},{children:typeof w=="function"?(ne,H)=>w(ne,Object.assign({},H,{ref:D})):T.cloneElement(w,{ref:D})})}const xh=["component"];function Gh(n,a){if(n==null)return{};var r={};for(var s in n)if({}.hasOwnProperty.call(n,s)){if(a.indexOf(s)>=0)continue;r[s]=n[s]}return r}const Nh=T.forwardRef((n,a)=>{let{component:r}=n,s=Gh(n,xh);const c=Sh(s);return x.jsx(r,Object.assign({ref:a},c))});function Bh({in:n,onTransition:a}){const r=T.useRef(null),s=T.useRef(!0),c=Zt(a);return Dm(()=>{if(!r.current)return;let d=!1;return c({in:n,element:r.current,initial:s.current,isStale:()=>d}),()=>{d=!0}},[n,c]),Dm(()=>(s.current=!1,()=>{s.current=!0}),[]),r}function Rh({children:n,in:a,onExited:r,onEntered:s,transition:c}){const[d,f]=T.useState(!a);a&&d&&f(!1);const y=Bh({in:!!a,onTransition:j=>{const v=()=>{j.isStale()||(j.in?s?.(j.element,j.initial):(f(!0),r?.(j.element)))};Promise.resolve(c(j)).then(v,D=>{throw j.in||f(!0),D})}}),w=uu(y,yo(n));return d&&!a?null:T.cloneElement(n,{ref:w})}function Nm(n,a,r){return n?x.jsx(Nh,Object.assign({},r,{component:n})):a?x.jsx(Rh,Object.assign({},r,{transition:a})):x.jsx(Eh,Object.assign({},r))}const Oh=["show","role","className","style","children","backdrop","keyboard","onBackdropClick","onEscapeKeyDown","transition","runTransition","backdropTransition","runBackdropTransition","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","renderDialog","renderBackdrop","manager","container","onShow","onHide","onExit","onExited","onExiting","onEnter","onEntering","onEntered"];function Fh(n,a){if(n==null)return{};var r={};for(var s in n)if({}.hasOwnProperty.call(n,s)){if(a.indexOf(s)>=0)continue;r[s]=n[s]}return r}let Dl;function _h(n){return Dl||(Dl=new cu({ownerDocument:n?.document})),Dl}function Mh(n){const a=lu(),r=n||_h(a),s=T.useRef({dialog:null,backdrop:null});return Object.assign(s.current,{add:()=>r.add(s.current),remove:()=>r.remove(s.current),isTopModal:()=>r.isTopModal(s.current),setDialogRef:T.useCallback(c=>{s.current.dialog=c},[]),setBackdropRef:T.useCallback(c=>{s.current.backdrop=c},[])})}const Wf=T.forwardRef((n,a)=>{let{show:r=!1,role:s="dialog",className:c,style:d,children:f,backdrop:y=!0,keyboard:w=!0,onBackdropClick:j,onEscapeKeyDown:v,transition:D,runTransition:A,backdropTransition:F,runBackdropTransition:M,autoFocus:_=!0,enforceFocus:W=!0,restoreFocus:O=!0,restoreFocusOptions:Y,renderDialog:Z,renderBackdrop:ne=ge=>x.jsx("div",Object.assign({},ge)),manager:H,container:ae,onShow:le,onHide:ze=()=>{},onExit:_e,onExited:qe,onExiting:wi,onEnter:ei,onEntering:Me,onEntered:$e}=n,ai=Fh(n,Oh);const Ae=lu(),pe=Ah(ae),N=Mh(H),Q=th(),I=nh(r),[g,E]=T.useState(!r),ee=T.useRef(null);T.useImperativeHandle(a,()=>N,[N]),Fn&&!I&&r&&(ee.current=bl(Ae?.document)),r&&g&&E(!1);const te=Zt(()=>{if(N.add(),Ne.current=so(document,"keydown",ce),we.current=so(document,"focus",()=>setTimeout(ue),!0),le&&le(),_){var ge,St;const Hi=bl((ge=(St=N.dialog)==null?void 0:St.ownerDocument)!=null?ge:Ae?.document);N.dialog&&Hi&&!Tm(N.dialog,Hi)&&(ee.current=Hi,N.dialog.focus())}}),oe=Zt(()=>{if(N.remove(),Ne.current==null||Ne.current(),we.current==null||we.current(),O){var ge;(ge=ee.current)==null||ge.focus==null||ge.focus(Y),ee.current=null}});T.useEffect(()=>{!r||!pe||te()},[r,pe,te]),T.useEffect(()=>{g&&oe()},[g,oe]),Ch(()=>{oe()});const ue=Zt(()=>{if(!W||!Q()||!N.isTopModal())return;const ge=bl(Ae?.document);N.dialog&&ge&&!Tm(N.dialog,ge)&&N.dialog.focus()}),ye=Zt(ge=>{ge.target===ge.currentTarget&&(j?.(ge),y===!0&&ze())}),ce=Zt(ge=>{w&&Hp(ge)&&N.isTopModal()&&(v?.(ge),ge.defaultPrevented||ze())}),we=T.useRef(),Ne=T.useRef(),Wi=(...ge)=>{E(!0),qe?.(...ge)};if(!pe)return null;const Li=Object.assign({role:s,ref:N.setDialogRef,"aria-modal":s==="dialog"?!0:void 0},ai,{style:d,className:c,tabIndex:-1});let Ni=Z?Z(Li):x.jsx("div",Object.assign({},Li,{children:T.cloneElement(f,{role:"document"})}));Ni=Nm(D,A,{unmountOnExit:!0,mountOnEnter:!0,appear:!0,in:!!r,onExit:_e,onExiting:wi,onExited:Wi,onEnter:ei,onEntering:Me,onEntered:$e,children:Ni});let Bi=null;return y&&(Bi=ne({ref:N.setBackdropRef,onClick:ye}),Bi=Nm(F,M,{in:!!r,appear:!0,mountOnEnter:!0,unmountOnExit:!0,children:Bi})),x.jsx(x.Fragment,{children:Nn.createPortal(x.jsxs(x.Fragment,{children:[Bi,Ni]}),pe)})});Wf.displayName="Modal";const Ih=Object.assign(Wf,{Manager:cu});function Jh(n,a){return n.classList?n.classList.contains(a):(" "+(n.className.baseVal||n.className)+" ").indexOf(" "+a+" ")!==-1}function Wh(n,a){n.classList?n.classList.add(a):Jh(n,a)||(typeof n.className=="string"?n.className=n.className+" "+a:n.setAttribute("class",(n.className&&n.className.baseVal||"")+" "+a))}function Bm(n,a){return n.replace(new RegExp("(^|\\s)"+a+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function Lh(n,a){n.classList?n.classList.remove(a):typeof n.className=="string"?n.className=Bm(n.className,a):n.setAttribute("class",Bm(n.className&&n.className.baseVal||"",a))}const Pn={FIXED_CONTENT:".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",STICKY_CONTENT:".sticky-top",NAVBAR_TOGGLER:".navbar-toggler"};class Hh extends cu{adjustAndStore(a,r,s){const c=r.style[a];r.dataset[a]=c,Qt(r,{[a]:`${parseFloat(Qt(r,a))+s}px`})}restore(a,r){const s=r.dataset[a];s!==void 0&&(delete r.dataset[a],Qt(r,{[a]:s}))}setContainerStyle(a){super.setContainerStyle(a);const r=this.getElement();if(Wh(r,"modal-open"),!a.scrollBarWidth)return;const s=this.isRTL?"paddingLeft":"paddingRight",c=this.isRTL?"marginLeft":"marginRight";En(r,Pn.FIXED_CONTENT).forEach(d=>this.adjustAndStore(s,d,a.scrollBarWidth)),En(r,Pn.STICKY_CONTENT).forEach(d=>this.adjustAndStore(c,d,-a.scrollBarWidth)),En(r,Pn.NAVBAR_TOGGLER).forEach(d=>this.adjustAndStore(c,d,a.scrollBarWidth))}removeContainerStyle(a){super.removeContainerStyle(a);const r=this.getElement();Lh(r,"modal-open");const s=this.isRTL?"paddingLeft":"paddingRight",c=this.isRTL?"marginLeft":"marginRight";En(r,Pn.FIXED_CONTENT).forEach(d=>this.restore(s,d)),En(r,Pn.STICKY_CONTENT).forEach(d=>this.restore(c,d)),En(r,Pn.NAVBAR_TOGGLER).forEach(d=>this.restore(c,d))}}let Al;function Kh(n){return Al||(Al=new Hh(n)),Al}const Lf=T.forwardRef(({className:n,bsPrefix:a,as:r="div",...s},c)=>(a=en(a,"modal-body"),x.jsx(r,{ref:c,className:Le(n,a),...s})));Lf.displayName="ModalBody";const Hf=T.createContext({onHide(){}}),du=T.forwardRef(({bsPrefix:n,className:a,contentClassName:r,centered:s,size:c,fullscreen:d,children:f,scrollable:y,...w},j)=>{n=en(n,"modal");const v=`${n}-dialog`,D=typeof d=="string"?`${n}-fullscreen-${d}`:`${n}-fullscreen`;return x.jsx("div",{...w,ref:j,className:Le(v,a,c&&`${n}-${c}`,s&&`${v}-centered`,y&&`${v}-scrollable`,d&&D),children:x.jsx("div",{className:Le(`${n}-content`,r),children:f})})});du.displayName="ModalDialog";const Kf=T.forwardRef(({className:n,bsPrefix:a,as:r="div",...s},c)=>(a=en(a,"modal-footer"),x.jsx(r,{ref:c,className:Le(n,a),...s})));Kf.displayName="ModalFooter";const Uf=T.forwardRef(({closeLabel:n="Close",closeVariant:a,closeButton:r=!1,onHide:s,children:c,...d},f)=>{const y=T.useContext(Hf),w=Il(()=>{y?.onHide(),s?.()});return x.jsxs("div",{ref:f,...d,children:[c,r&&x.jsx(su,{"aria-label":n,variant:a,onClick:w})]})});Uf.displayName="AbstractModalHeader";const $f=T.forwardRef(({bsPrefix:n,className:a,closeLabel:r="Close",closeButton:s=!1,...c},d)=>(n=en(n,"modal-header"),x.jsx(Uf,{ref:d,...c,className:Le(a,n),closeLabel:r,closeButton:s})));$f.displayName="ModalHeader";const Uh=eh("h4"),Zf=T.forwardRef(({className:n,bsPrefix:a,as:r=Uh,...s},c)=>(a=en(a,"modal-title"),x.jsx(r,{ref:c,className:Le(n,a),...s})));Zf.displayName="ModalTitle";function $h(n){return x.jsx(ou,{...n,timeout:null})}function Zh(n){return x.jsx(ou,{...n,timeout:null})}const Vf=T.forwardRef(({bsPrefix:n,className:a,style:r,dialogClassName:s,contentClassName:c,children:d,dialogAs:f=du,"data-bs-theme":y,"aria-labelledby":w,"aria-describedby":j,"aria-label":v,show:D=!1,animation:A=!0,backdrop:F=!0,keyboard:M=!0,onEscapeKeyDown:_,onShow:W,onHide:O,container:Y,autoFocus:Z=!0,enforceFocus:ne=!0,restoreFocus:H=!0,restoreFocusOptions:ae,onEntered:le,onExit:ze,onExiting:_e,onEnter:qe,onEntering:wi,onExited:ei,backdropClassName:Me,manager:$e,...ai},Ae)=>{const[pe,N]=T.useState({}),[Q,I]=T.useState(!1),g=T.useRef(!1),E=T.useRef(!1),ee=T.useRef(null),[te,oe]=vh(),ue=_f(Ae,oe),ye=Il(O),ce=xp();n=en(n,"modal");const we=T.useMemo(()=>({onHide:ye}),[ye]);function Ne(){return $e||Kh({isRTL:ce})}function Wi(de){if(!Fn)return;const Ri=Ne().getScrollbarWidth()>0,Gt=de.scrollHeight>fo(de).documentElement.clientHeight;N({paddingRight:Ri&&!Gt?xm():void 0,paddingLeft:!Ri&&Gt?xm():void 0})}const Li=Il(()=>{te&&Wi(te.dialog)});ph(()=>{Ml(window,"resize",Li),ee.current==null||ee.current()});const Ni=()=>{g.current=!0},Bi=de=>{g.current&&te&&de.target===te.dialog&&(E.current=!0),g.current=!1},ge=()=>{I(!0),ee.current=Ff(te.dialog,()=>{I(!1)})},St=de=>{de.target===de.currentTarget&&ge()},Hi=de=>{if(F==="static"){St(de);return}if(E.current||de.target!==de.currentTarget){E.current=!1;return}O?.()},Ja=de=>{M?_?.(de):(de.preventDefault(),F==="static"&&ge())},Mn=(de,Ri)=>{de&&Wi(de),qe?.(de,Ri)},xt=de=>{ee.current==null||ee.current(),ze?.(de)},ot=(de,Ri)=>{wi?.(de,Ri),Of(window,"resize",Li)},In=de=>{de&&(de.style.display=""),ei?.(de),Ml(window,"resize",Li)},Wa=T.useCallback(de=>x.jsx("div",{...de,className:Le(`${n}-backdrop`,Me,!A&&"show")}),[A,Me,n]),Jn={...r,...pe};Jn.display="block";const La=de=>x.jsx("div",{role:"dialog",...de,style:Jn,className:Le(a,n,Q&&`${n}-static`,!A&&"show"),onClick:F?Hi:void 0,onMouseUp:Bi,"data-bs-theme":y,"aria-label":v,"aria-labelledby":w,"aria-describedby":j,children:x.jsx(f,{...ai,onMouseDown:Ni,className:s,contentClassName:c,children:d})});return x.jsx(Hf.Provider,{value:we,children:x.jsx(Ih,{show:D,ref:ue,backdrop:F,container:Y,keyboard:!0,autoFocus:Z,enforceFocus:ne,restoreFocus:H,restoreFocusOptions:ae,onEscapeKeyDown:Ja,onShow:W,onHide:O,onEnter:Mn,onEntering:ot,onEntered:le,onExit:xt,onExiting:_e,onExited:In,manager:Ne(),transition:A?$h:void 0,backdropTransition:A?Zh:void 0,renderBackdrop:Wa,renderDialog:La})})});Vf.displayName="Modal";const qr=Object.assign(Vf,{Body:Lf,Header:$f,Title:Zf,Footer:Kf,Dialog:du,TRANSITION_DURATION:300,BACKDROP_TRANSITION_DURATION:150});function Jl(n,a){(a==null||a>n.length)&&(a=n.length);for(var r=0,s=Array(a);r<a;r++)s[r]=n[r];return s}function Vh(n){if(Array.isArray(n))return n}function Yh(n){if(Array.isArray(n))return Jl(n)}function Qh(n,a){if(!(n instanceof a))throw new TypeError("Cannot call a class as a function")}function Xh(n,a){for(var r=0;r<a.length;r++){var s=a[r];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(n,Yf(s.key),s)}}function qh(n,a,r){return a&&Xh(n.prototype,a),Object.defineProperty(n,"prototype",{writable:!1}),n}function no(n,a){var r=typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(!r){if(Array.isArray(n)||(r=mu(n))||a){r&&(n=r);var s=0,c=function(){};return{s:c,n:function(){return s>=n.length?{done:!0}:{done:!1,value:n[s++]}},e:function(w){throw w},f:c}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var d,f=!0,y=!1;return{s:function(){r=r.call(n)},n:function(){var w=r.next();return f=w.done,w},e:function(w){y=!0,d=w},f:function(){try{f||r.return==null||r.return()}finally{if(y)throw d}}}}function re(n,a,r){return(a=Yf(a))in n?Object.defineProperty(n,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[a]=r,n}function eg(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function ig(n,a){var r=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(r!=null){var s,c,d,f,y=[],w=!0,j=!1;try{if(d=(r=r.call(n)).next,a===0){if(Object(r)!==r)return;w=!1}else for(;!(w=(s=d.call(r)).done)&&(y.push(s.value),y.length!==a);w=!0);}catch(v){j=!0,c=v}finally{try{if(!w&&r.return!=null&&(f=r.return(),Object(f)!==f))return}finally{if(j)throw c}}return y}}function tg(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ng(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Rm(n,a){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);a&&(s=s.filter(function(c){return Object.getOwnPropertyDescriptor(n,c).enumerable})),r.push.apply(r,s)}return r}function B(n){for(var a=1;a<arguments.length;a++){var r=arguments[a]!=null?arguments[a]:{};a%2?Rm(Object(r),!0).forEach(function(s){re(n,s,r[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):Rm(Object(r)).forEach(function(s){Object.defineProperty(n,s,Object.getOwnPropertyDescriptor(r,s))})}return n}function zo(n,a){return Vh(n)||ig(n,a)||mu(n,a)||tg()}function Gi(n){return Yh(n)||eg(n)||mu(n)||ng()}function ag(n,a){if(typeof n!="object"||!n)return n;var r=n[Symbol.toPrimitive];if(r!==void 0){var s=r.call(n,a);if(typeof s!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(a==="string"?String:Number)(n)}function Yf(n){var a=ag(n,"string");return typeof a=="symbol"?a:a+""}function lo(n){"@babel/helpers - typeof";return lo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},lo(n)}function mu(n,a){if(n){if(typeof n=="string")return Jl(n,a);var r={}.toString.call(n).slice(8,-1);return r==="Object"&&n.constructor&&(r=n.constructor.name),r==="Map"||r==="Set"?Array.from(n):r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Jl(n,a):void 0}}var Om=function(){},fu={},Qf={},Xf=null,qf={mark:Om,measure:Om};try{typeof window<"u"&&(fu=window),typeof document<"u"&&(Qf=document),typeof MutationObserver<"u"&&(Xf=MutationObserver),typeof performance<"u"&&(qf=performance)}catch{}var rg=fu.navigator||{},Fm=rg.userAgent,_m=Fm===void 0?"":Fm,Et=fu,Ce=Qf,Mm=Xf,eo=qf;Et.document;var rt=!!Ce.documentElement&&!!Ce.head&&typeof Ce.addEventListener=="function"&&typeof Ce.createElement=="function",ey=~_m.indexOf("MSIE")||~_m.indexOf("Trident/"),El,og=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,sg=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Whiteboard)?.*/i,iy={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"},slab:{"fa-regular":"regular",faslr:"regular"},"slab-press":{"fa-regular":"regular",faslpr:"regular"},thumbprint:{"fa-light":"light",fatl:"light"},whiteboard:{"fa-semibold":"semibold",fawsb:"semibold"},notdog:{"fa-solid":"solid",fans:"solid"},"notdog-duo":{"fa-solid":"solid",fands:"solid"},etch:{"fa-solid":"solid",faes:"solid"},jelly:{"fa-regular":"regular",fajr:"regular"},"jelly-fill":{"fa-regular":"regular",fajfr:"regular"},"jelly-duo":{"fa-regular":"regular",fajdr:"regular"},chisel:{"fa-regular":"regular",facr:"regular"},utility:{"fa-semibold":"semibold",fausb:"semibold"},"utility-duo":{"fa-semibold":"semibold",faudsb:"semibold"},"utility-fill":{"fa-semibold":"semibold",faufsb:"semibold"}},lg={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},ty=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-utility","fa-utility-duo","fa-utility-fill"],Ue="classic",Oa="duotone",ny="sharp",ay="sharp-duotone",ry="chisel",oy="etch",sy="jelly",ly="jelly-duo",uy="jelly-fill",cy="notdog",dy="notdog-duo",my="slab",fy="slab-press",yy="thumbprint",zy="utility",wy="utility-duo",py="utility-fill",hy="whiteboard",ug="Classic",cg="Duotone",dg="Sharp",mg="Sharp Duotone",fg="Chisel",yg="Etch",zg="Jelly",wg="Jelly Duo",pg="Jelly Fill",hg="Notdog",gg="Notdog Duo",jg="Slab",kg="Slab Press",vg="Thumbprint",bg="Utility",Cg="Utility Duo",Dg="Utility Fill",Ag="Whiteboard",gy=[Ue,Oa,ny,ay,ry,oy,sy,ly,uy,cy,dy,my,fy,yy,zy,wy,py,hy];El={},re(re(re(re(re(re(re(re(re(re(El,Ue,ug),Oa,cg),ny,dg),ay,mg),ry,fg),oy,yg),sy,zg),ly,wg),uy,pg),cy,hg),re(re(re(re(re(re(re(re(El,dy,gg),my,jg),fy,kg),yy,vg),zy,bg),wy,Cg),py,Dg),hy,Ag);var Eg={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"},slab:{400:"faslr"},"slab-press":{400:"faslpr"},whiteboard:{600:"fawsb"},thumbprint:{300:"fatl"},notdog:{900:"fans"},"notdog-duo":{900:"fands"},etch:{900:"faes"},chisel:{400:"facr"},jelly:{400:"fajr"},"jelly-fill":{400:"fajfr"},"jelly-duo":{400:"fajdr"},utility:{600:"fausb"},"utility-duo":{600:"faudsb"},"utility-fill":{600:"faufsb"}},Pg={"Font Awesome 7 Free":{900:"fas",400:"far"},"Font Awesome 7 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 7 Brands":{400:"fab",normal:"fab"},"Font Awesome 7 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 7 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 7 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"},"Font Awesome 7 Jelly":{400:"fajr",normal:"fajr"},"Font Awesome 7 Jelly Fill":{400:"fajfr",normal:"fajfr"},"Font Awesome 7 Jelly Duo":{400:"fajdr",normal:"fajdr"},"Font Awesome 7 Slab":{400:"faslr",normal:"faslr"},"Font Awesome 7 Slab Press":{400:"faslpr",normal:"faslpr"},"Font Awesome 7 Thumbprint":{300:"fatl",normal:"fatl"},"Font Awesome 7 Notdog":{900:"fans",normal:"fans"},"Font Awesome 7 Notdog Duo":{900:"fands",normal:"fands"},"Font Awesome 7 Etch":{900:"faes",normal:"faes"},"Font Awesome 7 Chisel":{400:"facr",normal:"facr"},"Font Awesome 7 Whiteboard":{600:"fawsb",normal:"fawsb"},"Font Awesome 7 Utility":{600:"fausb",normal:"fausb"},"Font Awesome 7 Utility Duo":{600:"faudsb",normal:"faudsb"},"Font Awesome 7 Utility Fill":{600:"faufsb",normal:"faufsb"}},Tg=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["chisel",{defaultShortPrefixId:"facr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["etch",{defaultShortPrefixId:"faes",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["jelly",{defaultShortPrefixId:"fajr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-duo",{defaultShortPrefixId:"fajdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-fill",{defaultShortPrefixId:"fajfr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["notdog",{defaultShortPrefixId:"fans",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog-duo",{defaultShortPrefixId:"fands",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["slab",{defaultShortPrefixId:"faslr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press",{defaultShortPrefixId:"faslpr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["thumbprint",{defaultShortPrefixId:"fatl",defaultStyleId:"light",styleIds:["light"],futureStyleIds:[],defaultFontWeight:300}],["utility",{defaultShortPrefixId:"fausb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-duo",{defaultShortPrefixId:"faudsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-fill",{defaultShortPrefixId:"faufsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["whiteboard",{defaultShortPrefixId:"fawsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}]]),Sg={chisel:{regular:"facr"},classic:{brands:"fab",light:"fal",regular:"far",solid:"fas",thin:"fat"},duotone:{light:"fadl",regular:"fadr",solid:"fad",thin:"fadt"},etch:{solid:"faes"},jelly:{regular:"fajr"},"jelly-duo":{regular:"fajdr"},"jelly-fill":{regular:"fajfr"},notdog:{solid:"fans"},"notdog-duo":{solid:"fands"},sharp:{light:"fasl",regular:"fasr",solid:"fass",thin:"fast"},"sharp-duotone":{light:"fasdl",regular:"fasdr",solid:"fasds",thin:"fasdt"},slab:{regular:"faslr"},"slab-press":{regular:"faslpr"},thumbprint:{light:"fatl"},utility:{semibold:"fausb"},"utility-duo":{semibold:"faudsb"},"utility-fill":{semibold:"faufsb"},whiteboard:{semibold:"fawsb"}},jy=["fak","fa-kit","fakd","fa-kit-duotone"],Im={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},xg=["kit"],Gg="kit",Ng="kit-duotone",Bg="Kit",Rg="Kit Duotone";re(re({},Gg,Bg),Ng,Rg);var Og={kit:{"fa-kit":"fak"}},Fg={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},_g={kit:{fak:"fa-kit"}},Jm={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},Pl,io={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Mg=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-utility","fa-utility-duo","fa-utility-fill"],Ig="classic",Jg="duotone",Wg="sharp",Lg="sharp-duotone",Hg="chisel",Kg="etch",Ug="jelly",$g="jelly-duo",Zg="jelly-fill",Vg="notdog",Yg="notdog-duo",Qg="slab",Xg="slab-press",qg="thumbprint",ej="utility",ij="utility-duo",tj="utility-fill",nj="whiteboard",aj="Classic",rj="Duotone",oj="Sharp",sj="Sharp Duotone",lj="Chisel",uj="Etch",cj="Jelly",dj="Jelly Duo",mj="Jelly Fill",fj="Notdog",yj="Notdog Duo",zj="Slab",wj="Slab Press",pj="Thumbprint",hj="Utility",gj="Utility Duo",jj="Utility Fill",kj="Whiteboard";Pl={},re(re(re(re(re(re(re(re(re(re(Pl,Ig,aj),Jg,rj),Wg,oj),Lg,sj),Hg,lj),Kg,uj),Ug,cj),$g,dj),Zg,mj),Vg,fj),re(re(re(re(re(re(re(re(Pl,Yg,yj),Qg,zj),Xg,wj),qg,pj),ej,hj),ij,gj),tj,jj),nj,kj);var vj="kit",bj="kit-duotone",Cj="Kit",Dj="Kit Duotone";re(re({},vj,Cj),bj,Dj);var Aj={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"},slab:{"fa-regular":"faslr"},"slab-press":{"fa-regular":"faslpr"},whiteboard:{"fa-semibold":"fawsb"},thumbprint:{"fa-light":"fatl"},notdog:{"fa-solid":"fans"},"notdog-duo":{"fa-solid":"fands"},etch:{"fa-solid":"faes"},jelly:{"fa-regular":"fajr"},"jelly-fill":{"fa-regular":"fajfr"},"jelly-duo":{"fa-regular":"fajdr"},chisel:{"fa-regular":"facr"},utility:{"fa-semibold":"fausb"},"utility-duo":{"fa-semibold":"faudsb"},"utility-fill":{"fa-semibold":"faufsb"}},Ej={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"],slab:["faslr"],"slab-press":["faslpr"],whiteboard:["fawsb"],thumbprint:["fatl"],notdog:["fans"],"notdog-duo":["fands"],etch:["faes"],jelly:["fajr"],"jelly-fill":["fajfr"],"jelly-duo":["fajdr"],chisel:["facr"],utility:["fausb"],"utility-duo":["faudsb"],"utility-fill":["faufsb"]},Wl={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"},slab:{faslr:"fa-regular"},"slab-press":{faslpr:"fa-regular"},whiteboard:{fawsb:"fa-semibold"},thumbprint:{fatl:"fa-light"},notdog:{fans:"fa-solid"},"notdog-duo":{fands:"fa-solid"},etch:{faes:"fa-solid"},jelly:{fajr:"fa-regular"},"jelly-fill":{fajfr:"fa-regular"},"jelly-duo":{fajdr:"fa-regular"},chisel:{facr:"fa-regular"},utility:{fausb:"fa-semibold"},"utility-duo":{faudsb:"fa-semibold"},"utility-fill":{faufsb:"fa-semibold"}},Pj=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands","fa-semibold"],ky=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt","faslr","faslpr","fawsb","fatl","fans","fands","faes","fajr","fajfr","fajdr","facr","fausb","faudsb","faufsb"].concat(Mg,Pj),Tj=["solid","regular","light","thin","duotone","brands","semibold"],vy=[1,2,3,4,5,6,7,8,9,10],Sj=vy.concat([11,12,13,14,15,16,17,18,19,20]),xj=["aw","fw","pull-left","pull-right"],Gj=[].concat(Gi(Object.keys(Ej)),Tj,xj,["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","inverse","layers","layers-bottom-left","layers-bottom-right","layers-counter","layers-text","layers-top-left","layers-top-right","li","pull-end","pull-start","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul","width-auto","width-fixed",io.GROUP,io.SWAP_OPACITY,io.PRIMARY,io.SECONDARY]).concat(vy.map(function(n){return"".concat(n,"x")})).concat(Sj.map(function(n){return"w-".concat(n)})),Nj={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},tt="___FONT_AWESOME___",Ll=16,by="fa",Cy="svg-inline--fa",Xt="data-fa-i2svg",Hl="data-fa-pseudo-element",Bj="data-fa-pseudo-element-pending",yu="data-prefix",zu="data-icon",Wm="fontawesome-i2svg",Rj="async",Oj=["HTML","HEAD","STYLE","SCRIPT"],Dy=["::before","::after",":before",":after"],Ay=(function(){try{return!0}catch{return!1}})();function Fa(n){return new Proxy(n,{get:function(r,s){return s in r?r[s]:r[Ue]}})}var Ey=B({},iy);Ey[Ue]=B(B(B(B({},{"fa-duotone":"duotone"}),iy[Ue]),Im.kit),Im["kit-duotone"]);var Fj=Fa(Ey),Kl=B({},Sg);Kl[Ue]=B(B(B(B({},{duotone:"fad"}),Kl[Ue]),Jm.kit),Jm["kit-duotone"]);var Lm=Fa(Kl),Ul=B({},Wl);Ul[Ue]=B(B({},Ul[Ue]),_g.kit);var wu=Fa(Ul),$l=B({},Aj);$l[Ue]=B(B({},$l[Ue]),Og.kit);Fa($l);var _j=og,Py="fa-layers-text",Mj=sg,Ij=B({},Eg);Fa(Ij);var Jj=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Tl=lg,Wj=[].concat(Gi(xg),Gi(Gj)),Ta=Et.FontAwesomeConfig||{};function Lj(n){var a=Ce.querySelector("script["+n+"]");if(a)return a.getAttribute(n)}function Hj(n){return n===""?!0:n==="false"?!1:n==="true"?!0:n}if(Ce&&typeof Ce.querySelector=="function"){var Kj=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-search-pseudo-elements","searchPseudoElements"],["data-search-pseudo-elements-warnings","searchPseudoElementsWarnings"],["data-search-pseudo-elements-full-scan","searchPseudoElementsFullScan"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Kj.forEach(function(n){var a=zo(n,2),r=a[0],s=a[1],c=Hj(Lj(r));c!=null&&(Ta[s]=c)})}var Ty={styleDefault:"solid",familyDefault:Ue,cssPrefix:by,replacementClass:Cy,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Ta.familyPrefix&&(Ta.cssPrefix=Ta.familyPrefix);var On=B(B({},Ty),Ta);On.autoReplaceSvg||(On.observeMutations=!1);var V={};Object.keys(Ty).forEach(function(n){Object.defineProperty(V,n,{enumerable:!0,set:function(r){On[n]=r,Sa.forEach(function(s){return s(V)})},get:function(){return On[n]}})});Object.defineProperty(V,"familyPrefix",{enumerable:!0,set:function(a){On.cssPrefix=a,Sa.forEach(function(r){return r(V)})},get:function(){return On.cssPrefix}});Et.FontAwesomeConfig=V;var Sa=[];function Uj(n){return Sa.push(n),function(){Sa.splice(Sa.indexOf(n),1)}}var Tn=Ll,Ji={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function $j(n){if(!(!n||!rt)){var a=Ce.createElement("style");a.setAttribute("type","text/css"),a.innerHTML=n;for(var r=Ce.head.childNodes,s=null,c=r.length-1;c>-1;c--){var d=r[c],f=(d.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(f)>-1&&(s=d)}return Ce.head.insertBefore(a,s),n}}var Zj="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Hm(){for(var n=12,a="";n-- >0;)a+=Zj[Math.random()*62|0];return a}function _n(n){for(var a=[],r=(n||[]).length>>>0;r--;)a[r]=n[r];return a}function pu(n){return n.classList?_n(n.classList):(n.getAttribute("class")||"").split(" ").filter(function(a){return a})}function Sy(n){return"".concat(n).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Vj(n){return Object.keys(n||{}).reduce(function(a,r){return a+"".concat(r,'="').concat(Sy(n[r]),'" ')},"").trim()}function wo(n){return Object.keys(n||{}).reduce(function(a,r){return a+"".concat(r,": ").concat(n[r].trim(),";")},"")}function hu(n){return n.size!==Ji.size||n.x!==Ji.x||n.y!==Ji.y||n.rotate!==Ji.rotate||n.flipX||n.flipY}function Yj(n){var a=n.transform,r=n.containerWidth,s=n.iconWidth,c={transform:"translate(".concat(r/2," 256)")},d="translate(".concat(a.x*32,", ").concat(a.y*32,") "),f="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),y="rotate(".concat(a.rotate," 0 0)"),w={transform:"".concat(d," ").concat(f," ").concat(y)},j={transform:"translate(".concat(s/2*-1," -256)")};return{outer:c,inner:w,path:j}}function Qj(n){var a=n.transform,r=n.width,s=r===void 0?Ll:r,c=n.height,d=c===void 0?Ll:c,f="";return ey?f+="translate(".concat(a.x/Tn-s/2,"em, ").concat(a.y/Tn-d/2,"em) "):f+="translate(calc(-50% + ".concat(a.x/Tn,"em), calc(-50% + ").concat(a.y/Tn,"em)) "),f+="scale(".concat(a.size/Tn*(a.flipX?-1:1),", ").concat(a.size/Tn*(a.flipY?-1:1),") "),f+="rotate(".concat(a.rotate,"deg) "),f}var Xj=`:root, :host {
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
}`;function xy(){var n=by,a=Cy,r=V.cssPrefix,s=V.replacementClass,c=Xj;if(r!==n||s!==a){var d=new RegExp("\\.".concat(n,"\\-"),"g"),f=new RegExp("\\--".concat(n,"\\-"),"g"),y=new RegExp("\\.".concat(a),"g");c=c.replace(d,".".concat(r,"-")).replace(f,"--".concat(r,"-")).replace(y,".".concat(s))}return c}var Km=!1;function Sl(){V.autoAddCss&&!Km&&($j(xy()),Km=!0)}var qj={mixout:function(){return{dom:{css:xy,insertCss:Sl}}},hooks:function(){return{beforeDOMElementCreation:function(){Sl()},beforeI2svg:function(){Sl()}}}},nt=Et||{};nt[tt]||(nt[tt]={});nt[tt].styles||(nt[tt].styles={});nt[tt].hooks||(nt[tt].hooks={});nt[tt].shims||(nt[tt].shims=[]);var xi=nt[tt],Gy=[],Ny=function(){Ce.removeEventListener("DOMContentLoaded",Ny),uo=1,Gy.map(function(a){return a()})},uo=!1;rt&&(uo=(Ce.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Ce.readyState),uo||Ce.addEventListener("DOMContentLoaded",Ny));function ek(n){rt&&(uo?setTimeout(n,0):Gy.push(n))}function _a(n){var a=n.tag,r=n.attributes,s=r===void 0?{}:r,c=n.children,d=c===void 0?[]:c;return typeof n=="string"?Sy(n):"<".concat(a," ").concat(Vj(s),">").concat(d.map(_a).join(""),"</").concat(a,">")}function Um(n,a,r){if(n&&n[a]&&n[a][r])return{prefix:a,iconName:r,icon:n[a][r]}}var xl=function(a,r,s,c){var d=Object.keys(a),f=d.length,y=r,w,j,v;for(s===void 0?(w=1,v=a[d[0]]):(w=0,v=s);w<f;w++)j=d[w],v=y(v,a[j],j,a);return v};function By(n){return Gi(n).length!==1?null:n.codePointAt(0).toString(16)}function $m(n){return Object.keys(n).reduce(function(a,r){var s=n[r],c=!!s.icon;return c?a[s.iconName]=s.icon:a[r]=s,a},{})}function Zl(n,a){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},s=r.skipHooks,c=s===void 0?!1:s,d=$m(a);typeof xi.hooks.addPack=="function"&&!c?xi.hooks.addPack(n,$m(a)):xi.styles[n]=B(B({},xi.styles[n]||{}),d),n==="fas"&&Zl("fa",a)}var Ga=xi.styles,ik=xi.shims,Ry=Object.keys(wu),tk=Ry.reduce(function(n,a){return n[a]=Object.keys(wu[a]),n},{}),gu=null,Oy={},Fy={},_y={},My={},Iy={};function nk(n){return~Wj.indexOf(n)}function ak(n,a){var r=a.split("-"),s=r[0],c=r.slice(1).join("-");return s===n&&c!==""&&!nk(c)?c:null}var Jy=function(){var a=function(d){return xl(Ga,function(f,y,w){return f[w]=xl(y,d,{}),f},{})};Oy=a(function(c,d,f){if(d[3]&&(c[d[3]]=f),d[2]){var y=d[2].filter(function(w){return typeof w=="number"});y.forEach(function(w){c[w.toString(16)]=f})}return c}),Fy=a(function(c,d,f){if(c[f]=f,d[2]){var y=d[2].filter(function(w){return typeof w=="string"});y.forEach(function(w){c[w]=f})}return c}),Iy=a(function(c,d,f){var y=d[2];return c[f]=f,y.forEach(function(w){c[w]=f}),c});var r="far"in Ga||V.autoFetchSvg,s=xl(ik,function(c,d){var f=d[0],y=d[1],w=d[2];return y==="far"&&!r&&(y="fas"),typeof f=="string"&&(c.names[f]={prefix:y,iconName:w}),typeof f=="number"&&(c.unicodes[f.toString(16)]={prefix:y,iconName:w}),c},{names:{},unicodes:{}});_y=s.names,My=s.unicodes,gu=po(V.styleDefault,{family:V.familyDefault})};Uj(function(n){gu=po(n.styleDefault,{family:V.familyDefault})});Jy();function ju(n,a){return(Oy[n]||{})[a]}function rk(n,a){return(Fy[n]||{})[a]}function Vt(n,a){return(Iy[n]||{})[a]}function Wy(n){return _y[n]||{prefix:null,iconName:null}}function ok(n){var a=My[n],r=ju("fas",n);return a||(r?{prefix:"fas",iconName:r}:null)||{prefix:null,iconName:null}}function Pt(){return gu}var Ly=function(){return{prefix:null,iconName:null,rest:[]}};function sk(n){var a=Ue,r=Ry.reduce(function(s,c){return s[c]="".concat(V.cssPrefix,"-").concat(c),s},{});return gy.forEach(function(s){(n.includes(r[s])||n.some(function(c){return tk[s].includes(c)}))&&(a=s)}),a}function po(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.family,s=r===void 0?Ue:r,c=Fj[s][n];if(s===Oa&&!n)return"fad";var d=Lm[s][n]||Lm[s][c],f=n in xi.styles?n:null,y=d||f||null;return y}function lk(n){var a=[],r=null;return n.forEach(function(s){var c=ak(V.cssPrefix,s);c?r=c:s&&a.push(s)}),{iconName:r,rest:a}}function Zm(n){return n.sort().filter(function(a,r,s){return s.indexOf(a)===r})}var Vm=ky.concat(jy);function ho(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.skipLookups,s=r===void 0?!1:r,c=null,d=Zm(n.filter(function(F){return Vm.includes(F)})),f=Zm(n.filter(function(F){return!Vm.includes(F)})),y=d.filter(function(F){return c=F,!ty.includes(F)}),w=zo(y,1),j=w[0],v=j===void 0?null:j,D=sk(d),A=B(B({},lk(f)),{},{prefix:po(v,{family:D})});return B(B(B({},A),mk({values:n,family:D,styles:Ga,config:V,canonical:A,givenPrefix:c})),uk(s,c,A))}function uk(n,a,r){var s=r.prefix,c=r.iconName;if(n||!s||!c)return{prefix:s,iconName:c};var d=a==="fa"?Wy(c):{},f=Vt(s,c);return c=d.iconName||f||c,s=d.prefix||s,s==="far"&&!Ga.far&&Ga.fas&&!V.autoFetchSvg&&(s="fas"),{prefix:s,iconName:c}}var ck=gy.filter(function(n){return n!==Ue||n!==Oa}),dk=Object.keys(Wl).filter(function(n){return n!==Ue}).map(function(n){return Object.keys(Wl[n])}).flat();function mk(n){var a=n.values,r=n.family,s=n.canonical,c=n.givenPrefix,d=c===void 0?"":c,f=n.styles,y=f===void 0?{}:f,w=n.config,j=w===void 0?{}:w,v=r===Oa,D=a.includes("fa-duotone")||a.includes("fad"),A=j.familyDefault==="duotone",F=s.prefix==="fad"||s.prefix==="fa-duotone";if(!v&&(D||A||F)&&(s.prefix="fad"),(a.includes("fa-brands")||a.includes("fab"))&&(s.prefix="fab"),!s.prefix&&ck.includes(r)){var M=Object.keys(y).find(function(W){return dk.includes(W)});if(M||j.autoFetchSvg){var _=Tg.get(r).defaultShortPrefixId;s.prefix=_,s.iconName=Vt(s.prefix,s.iconName)||s.iconName}}return(s.prefix==="fa"||d==="fa")&&(s.prefix=Pt()||"fas"),s}var fk=(function(){function n(){Qh(this,n),this.definitions={}}return qh(n,[{key:"add",value:function(){for(var r=this,s=arguments.length,c=new Array(s),d=0;d<s;d++)c[d]=arguments[d];var f=c.reduce(this._pullDefinitions,{});Object.keys(f).forEach(function(y){r.definitions[y]=B(B({},r.definitions[y]||{}),f[y]),Zl(y,f[y]);var w=wu[Ue][y];w&&Zl(w,f[y]),Jy()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(r,s){var c=s.prefix&&s.iconName&&s.icon?{0:s}:s;return Object.keys(c).map(function(d){var f=c[d],y=f.prefix,w=f.iconName,j=f.icon,v=j[2];r[y]||(r[y]={}),v.length>0&&v.forEach(function(D){typeof D=="string"&&(r[y][D]=j)}),r[y][w]=j}),r}}])})(),Ym=[],Bn={},Rn={},yk=Object.keys(Rn);function zk(n,a){var r=a.mixoutsTo;return Ym=n,Bn={},Object.keys(Rn).forEach(function(s){yk.indexOf(s)===-1&&delete Rn[s]}),Ym.forEach(function(s){var c=s.mixout?s.mixout():{};if(Object.keys(c).forEach(function(f){typeof c[f]=="function"&&(r[f]=c[f]),lo(c[f])==="object"&&Object.keys(c[f]).forEach(function(y){r[f]||(r[f]={}),r[f][y]=c[f][y]})}),s.hooks){var d=s.hooks();Object.keys(d).forEach(function(f){Bn[f]||(Bn[f]=[]),Bn[f].push(d[f])})}s.provides&&s.provides(Rn)}),r}function Vl(n,a){for(var r=arguments.length,s=new Array(r>2?r-2:0),c=2;c<r;c++)s[c-2]=arguments[c];var d=Bn[n]||[];return d.forEach(function(f){a=f.apply(null,[a].concat(s))}),a}function qt(n){for(var a=arguments.length,r=new Array(a>1?a-1:0),s=1;s<a;s++)r[s-1]=arguments[s];var c=Bn[n]||[];c.forEach(function(d){d.apply(null,r)})}function Tt(){var n=arguments[0],a=Array.prototype.slice.call(arguments,1);return Rn[n]?Rn[n].apply(null,a):void 0}function Yl(n){n.prefix==="fa"&&(n.prefix="fas");var a=n.iconName,r=n.prefix||Pt();if(a)return a=Vt(r,a)||a,Um(Hy.definitions,r,a)||Um(xi.styles,r,a)}var Hy=new fk,wk=function(){V.autoReplaceSvg=!1,V.observeMutations=!1,qt("noAuto")},pk={i2svg:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return rt?(qt("beforeI2svg",a),Tt("pseudoElements2svg",a),Tt("i2svg",a)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=a.autoReplaceSvgRoot;V.autoReplaceSvg===!1&&(V.autoReplaceSvg=!0),V.observeMutations=!0,ek(function(){gk({autoReplaceSvgRoot:r}),qt("watch",a)})}},hk={icon:function(a){if(a===null)return null;if(lo(a)==="object"&&a.prefix&&a.iconName)return{prefix:a.prefix,iconName:Vt(a.prefix,a.iconName)||a.iconName};if(Array.isArray(a)&&a.length===2){var r=a[1].indexOf("fa-")===0?a[1].slice(3):a[1],s=po(a[0]);return{prefix:s,iconName:Vt(s,r)||r}}if(typeof a=="string"&&(a.indexOf("".concat(V.cssPrefix,"-"))>-1||a.match(_j))){var c=ho(a.split(" "),{skipLookups:!0});return{prefix:c.prefix||Pt(),iconName:Vt(c.prefix,c.iconName)||c.iconName}}if(typeof a=="string"){var d=Pt();return{prefix:d,iconName:Vt(d,a)||a}}}},zi={noAuto:wk,config:V,dom:pk,parse:hk,library:Hy,findIconDefinition:Yl,toHtml:_a},gk=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=a.autoReplaceSvgRoot,s=r===void 0?Ce:r;(Object.keys(xi.styles).length>0||V.autoFetchSvg)&&rt&&V.autoReplaceSvg&&zi.dom.i2svg({node:s})};function go(n,a){return Object.defineProperty(n,"abstract",{get:a}),Object.defineProperty(n,"html",{get:function(){return n.abstract.map(function(s){return _a(s)})}}),Object.defineProperty(n,"node",{get:function(){if(rt){var s=Ce.createElement("div");return s.innerHTML=n.html,s.children}}}),n}function jk(n){var a=n.children,r=n.main,s=n.mask,c=n.attributes,d=n.styles,f=n.transform;if(hu(f)&&r.found&&!s.found){var y=r.width,w=r.height,j={x:y/w/2,y:.5};c.style=wo(B(B({},d),{},{"transform-origin":"".concat(j.x+f.x/16,"em ").concat(j.y+f.y/16,"em")}))}return[{tag:"svg",attributes:c,children:a}]}function kk(n){var a=n.prefix,r=n.iconName,s=n.children,c=n.attributes,d=n.symbol,f=d===!0?"".concat(a,"-").concat(V.cssPrefix,"-").concat(r):d;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:B(B({},c),{},{id:f}),children:s}]}]}function vk(n){var a=["aria-label","aria-labelledby","title","role"];return a.some(function(r){return r in n})}function ku(n){var a=n.icons,r=a.main,s=a.mask,c=n.prefix,d=n.iconName,f=n.transform,y=n.symbol,w=n.maskId,j=n.extra,v=n.watchable,D=v===void 0?!1:v,A=s.found?s:r,F=A.width,M=A.height,_=[V.replacementClass,d?"".concat(V.cssPrefix,"-").concat(d):""].filter(function(H){return j.classes.indexOf(H)===-1}).filter(function(H){return H!==""||!!H}).concat(j.classes).join(" "),W={children:[],attributes:B(B({},j.attributes),{},{"data-prefix":c,"data-icon":d,class:_,role:j.attributes.role||"img",viewBox:"0 0 ".concat(F," ").concat(M)})};!vk(j.attributes)&&!j.attributes["aria-hidden"]&&(W.attributes["aria-hidden"]="true"),D&&(W.attributes[Xt]="");var O=B(B({},W),{},{prefix:c,iconName:d,main:r,mask:s,maskId:w,transform:f,symbol:y,styles:B({},j.styles)}),Y=s.found&&r.found?Tt("generateAbstractMask",O)||{children:[],attributes:{}}:Tt("generateAbstractIcon",O)||{children:[],attributes:{}},Z=Y.children,ne=Y.attributes;return O.children=Z,O.attributes=ne,y?kk(O):jk(O)}function Qm(n){var a=n.content,r=n.width,s=n.height,c=n.transform,d=n.extra,f=n.watchable,y=f===void 0?!1:f,w=B(B({},d.attributes),{},{class:d.classes.join(" ")});y&&(w[Xt]="");var j=B({},d.styles);hu(c)&&(j.transform=Qj({transform:c,width:r,height:s}),j["-webkit-transform"]=j.transform);var v=wo(j);v.length>0&&(w.style=v);var D=[];return D.push({tag:"span",attributes:w,children:[a]}),D}function bk(n){var a=n.content,r=n.extra,s=B(B({},r.attributes),{},{class:r.classes.join(" ")}),c=wo(r.styles);c.length>0&&(s.style=c);var d=[];return d.push({tag:"span",attributes:s,children:[a]}),d}var Gl=xi.styles;function Ql(n){var a=n[0],r=n[1],s=n.slice(4),c=zo(s,1),d=c[0],f=null;return Array.isArray(d)?f={tag:"g",attributes:{class:"".concat(V.cssPrefix,"-").concat(Tl.GROUP)},children:[{tag:"path",attributes:{class:"".concat(V.cssPrefix,"-").concat(Tl.SECONDARY),fill:"currentColor",d:d[0]}},{tag:"path",attributes:{class:"".concat(V.cssPrefix,"-").concat(Tl.PRIMARY),fill:"currentColor",d:d[1]}}]}:f={tag:"path",attributes:{fill:"currentColor",d}},{found:!0,width:a,height:r,icon:f}}var Ck={found:!1,width:512,height:512};function Dk(n,a){!Ay&&!V.showMissingIcons&&n&&console.error('Icon with name "'.concat(n,'" and prefix "').concat(a,'" is missing.'))}function Xl(n,a){var r=a;return a==="fa"&&V.styleDefault!==null&&(a=Pt()),new Promise(function(s,c){if(r==="fa"){var d=Wy(n)||{};n=d.iconName||n,a=d.prefix||a}if(n&&a&&Gl[a]&&Gl[a][n]){var f=Gl[a][n];return s(Ql(f))}Dk(n,a),s(B(B({},Ck),{},{icon:V.showMissingIcons&&n?Tt("missingIconAbstract")||{}:{}}))})}var Xm=function(){},ql=V.measurePerformance&&eo&&eo.mark&&eo.measure?eo:{mark:Xm,measure:Xm},Pa='FA "7.1.0"',Ak=function(a){return ql.mark("".concat(Pa," ").concat(a," begins")),function(){return Ky(a)}},Ky=function(a){ql.mark("".concat(Pa," ").concat(a," ends")),ql.measure("".concat(Pa," ").concat(a),"".concat(Pa," ").concat(a," begins"),"".concat(Pa," ").concat(a," ends"))},vu={begin:Ak,end:Ky},ao=function(){};function qm(n){var a=n.getAttribute?n.getAttribute(Xt):null;return typeof a=="string"}function Ek(n){var a=n.getAttribute?n.getAttribute(yu):null,r=n.getAttribute?n.getAttribute(zu):null;return a&&r}function Pk(n){return n&&n.classList&&n.classList.contains&&n.classList.contains(V.replacementClass)}function Tk(){if(V.autoReplaceSvg===!0)return ro.replace;var n=ro[V.autoReplaceSvg];return n||ro.replace}function Sk(n){return Ce.createElementNS("http://www.w3.org/2000/svg",n)}function xk(n){return Ce.createElement(n)}function Uy(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.ceFn,s=r===void 0?n.tag==="svg"?Sk:xk:r;if(typeof n=="string")return Ce.createTextNode(n);var c=s(n.tag);Object.keys(n.attributes||[]).forEach(function(f){c.setAttribute(f,n.attributes[f])});var d=n.children||[];return d.forEach(function(f){c.appendChild(Uy(f,{ceFn:s}))}),c}function Gk(n){var a=" ".concat(n.outerHTML," ");return a="".concat(a,"Font Awesome fontawesome.com "),a}var ro={replace:function(a){var r=a[0];if(r.parentNode)if(a[1].forEach(function(c){r.parentNode.insertBefore(Uy(c),r)}),r.getAttribute(Xt)===null&&V.keepOriginalSource){var s=Ce.createComment(Gk(r));r.parentNode.replaceChild(s,r)}else r.remove()},nest:function(a){var r=a[0],s=a[1];if(~pu(r).indexOf(V.replacementClass))return ro.replace(a);var c=new RegExp("".concat(V.cssPrefix,"-.*"));if(delete s[0].attributes.id,s[0].attributes.class){var d=s[0].attributes.class.split(" ").reduce(function(y,w){return w===V.replacementClass||w.match(c)?y.toSvg.push(w):y.toNode.push(w),y},{toNode:[],toSvg:[]});s[0].attributes.class=d.toSvg.join(" "),d.toNode.length===0?r.removeAttribute("class"):r.setAttribute("class",d.toNode.join(" "))}var f=s.map(function(y){return _a(y)}).join(`
`);r.setAttribute(Xt,""),r.innerHTML=f}};function ef(n){n()}function $y(n,a){var r=typeof a=="function"?a:ao;if(n.length===0)r();else{var s=ef;V.mutateApproach===Rj&&(s=Et.requestAnimationFrame||ef),s(function(){var c=Tk(),d=vu.begin("mutate");n.map(c),d(),r()})}}var bu=!1;function Zy(){bu=!0}function eu(){bu=!1}var co=null;function tf(n){if(Mm&&V.observeMutations){var a=n.treeCallback,r=a===void 0?ao:a,s=n.nodeCallback,c=s===void 0?ao:s,d=n.pseudoElementsCallback,f=d===void 0?ao:d,y=n.observeMutationsRoot,w=y===void 0?Ce:y;co=new Mm(function(j){if(!bu){var v=Pt();_n(j).forEach(function(D){if(D.type==="childList"&&D.addedNodes.length>0&&!qm(D.addedNodes[0])&&(V.searchPseudoElements&&f(D.target),r(D.target)),D.type==="attributes"&&D.target.parentNode&&V.searchPseudoElements&&f([D.target],!0),D.type==="attributes"&&qm(D.target)&&~Jj.indexOf(D.attributeName))if(D.attributeName==="class"&&Ek(D.target)){var A=ho(pu(D.target)),F=A.prefix,M=A.iconName;D.target.setAttribute(yu,F||v),M&&D.target.setAttribute(zu,M)}else Pk(D.target)&&c(D.target)})}}),rt&&co.observe(w,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Nk(){co&&co.disconnect()}function Bk(n){var a=n.getAttribute("style"),r=[];return a&&(r=a.split(";").reduce(function(s,c){var d=c.split(":"),f=d[0],y=d.slice(1);return f&&y.length>0&&(s[f]=y.join(":").trim()),s},{})),r}function Rk(n){var a=n.getAttribute("data-prefix"),r=n.getAttribute("data-icon"),s=n.innerText!==void 0?n.innerText.trim():"",c=ho(pu(n));return c.prefix||(c.prefix=Pt()),a&&r&&(c.prefix=a,c.iconName=r),c.iconName&&c.prefix||(c.prefix&&s.length>0&&(c.iconName=rk(c.prefix,n.innerText)||ju(c.prefix,By(n.innerText))),!c.iconName&&V.autoFetchSvg&&n.firstChild&&n.firstChild.nodeType===Node.TEXT_NODE&&(c.iconName=n.firstChild.data)),c}function Ok(n){var a=_n(n.attributes).reduce(function(r,s){return r.name!=="class"&&r.name!=="style"&&(r[s.name]=s.value),r},{});return a}function Fk(){return{iconName:null,prefix:null,transform:Ji,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function nf(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},r=Rk(n),s=r.iconName,c=r.prefix,d=r.rest,f=Ok(n),y=Vl("parseNodeAttributes",{},n),w=a.styleParser?Bk(n):[];return B({iconName:s,prefix:c,transform:Ji,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:d,styles:w,attributes:f}},y)}var _k=xi.styles;function Vy(n){var a=V.autoReplaceSvg==="nest"?nf(n,{styleParser:!1}):nf(n);return~a.extra.classes.indexOf(Py)?Tt("generateLayersText",n,a):Tt("generateSvgReplacementMutation",n,a)}function Mk(){return[].concat(Gi(jy),Gi(ky))}function af(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!rt)return Promise.resolve();var r=Ce.documentElement.classList,s=function(D){return r.add("".concat(Wm,"-").concat(D))},c=function(D){return r.remove("".concat(Wm,"-").concat(D))},d=V.autoFetchSvg?Mk():ty.concat(Object.keys(_k));d.includes("fa")||d.push("fa");var f=[".".concat(Py,":not([").concat(Xt,"])")].concat(d.map(function(v){return".".concat(v,":not([").concat(Xt,"])")})).join(", ");if(f.length===0)return Promise.resolve();var y=[];try{y=_n(n.querySelectorAll(f))}catch{}if(y.length>0)s("pending"),c("complete");else return Promise.resolve();var w=vu.begin("onTree"),j=y.reduce(function(v,D){try{var A=Vy(D);A&&v.push(A)}catch(F){Ay||F.name==="MissingIcon"&&console.error(F)}return v},[]);return new Promise(function(v,D){Promise.all(j).then(function(A){$y(A,function(){s("active"),s("complete"),c("pending"),typeof a=="function"&&a(),w(),v()})}).catch(function(A){w(),D(A)})})}function Ik(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Vy(n).then(function(r){r&&$y([r],a)})}function Jk(n){return function(a){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=(a||{}).icon?a:Yl(a||{}),c=r.mask;return c&&(c=(c||{}).icon?c:Yl(c||{})),n(s,B(B({},r),{},{mask:c}))}}var Wk=function(a){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=r.transform,c=s===void 0?Ji:s,d=r.symbol,f=d===void 0?!1:d,y=r.mask,w=y===void 0?null:y,j=r.maskId,v=j===void 0?null:j,D=r.classes,A=D===void 0?[]:D,F=r.attributes,M=F===void 0?{}:F,_=r.styles,W=_===void 0?{}:_;if(a){var O=a.prefix,Y=a.iconName,Z=a.icon;return go(B({type:"icon"},a),function(){return qt("beforeDOMElementCreation",{iconDefinition:a,params:r}),ku({icons:{main:Ql(Z),mask:w?Ql(w.icon):{found:!1,width:null,height:null,icon:{}}},prefix:O,iconName:Y,transform:B(B({},Ji),c),symbol:f,maskId:v,extra:{attributes:M,styles:W,classes:A}})})}},Lk={mixout:function(){return{icon:Jk(Wk)}},hooks:function(){return{mutationObserverCallbacks:function(r){return r.treeCallback=af,r.nodeCallback=Ik,r}}},provides:function(a){a.i2svg=function(r){var s=r.node,c=s===void 0?Ce:s,d=r.callback,f=d===void 0?function(){}:d;return af(c,f)},a.generateSvgReplacementMutation=function(r,s){var c=s.iconName,d=s.prefix,f=s.transform,y=s.symbol,w=s.mask,j=s.maskId,v=s.extra;return new Promise(function(D,A){Promise.all([Xl(c,d),w.iconName?Xl(w.iconName,w.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(F){var M=zo(F,2),_=M[0],W=M[1];D([r,ku({icons:{main:_,mask:W},prefix:d,iconName:c,transform:f,symbol:y,maskId:j,extra:v,watchable:!0})])}).catch(A)})},a.generateAbstractIcon=function(r){var s=r.children,c=r.attributes,d=r.main,f=r.transform,y=r.styles,w=wo(y);w.length>0&&(c.style=w);var j;return hu(f)&&(j=Tt("generateAbstractTransformGrouping",{main:d,transform:f,containerWidth:d.width,iconWidth:d.width})),s.push(j||d.icon),{children:s,attributes:c}}}},Hk={mixout:function(){return{layer:function(r){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},c=s.classes,d=c===void 0?[]:c;return go({type:"layer"},function(){qt("beforeDOMElementCreation",{assembler:r,params:s});var f=[];return r(function(y){Array.isArray(y)?y.map(function(w){f=f.concat(w.abstract)}):f=f.concat(y.abstract)}),[{tag:"span",attributes:{class:["".concat(V.cssPrefix,"-layers")].concat(Gi(d)).join(" ")},children:f}]})}}}},Kk={mixout:function(){return{counter:function(r){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};s.title;var c=s.classes,d=c===void 0?[]:c,f=s.attributes,y=f===void 0?{}:f,w=s.styles,j=w===void 0?{}:w;return go({type:"counter",content:r},function(){return qt("beforeDOMElementCreation",{content:r,params:s}),bk({content:r.toString(),extra:{attributes:y,styles:j,classes:["".concat(V.cssPrefix,"-layers-counter")].concat(Gi(d))}})})}}}},Uk={mixout:function(){return{text:function(r){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},c=s.transform,d=c===void 0?Ji:c,f=s.classes,y=f===void 0?[]:f,w=s.attributes,j=w===void 0?{}:w,v=s.styles,D=v===void 0?{}:v;return go({type:"text",content:r},function(){return qt("beforeDOMElementCreation",{content:r,params:s}),Qm({content:r,transform:B(B({},Ji),d),extra:{attributes:j,styles:D,classes:["".concat(V.cssPrefix,"-layers-text")].concat(Gi(y))}})})}}},provides:function(a){a.generateLayersText=function(r,s){var c=s.transform,d=s.extra,f=null,y=null;if(ey){var w=parseInt(getComputedStyle(r).fontSize,10),j=r.getBoundingClientRect();f=j.width/w,y=j.height/w}return Promise.resolve([r,Qm({content:r.innerHTML,width:f,height:y,transform:c,extra:d,watchable:!0})])}}},Yy=new RegExp('"',"ug"),rf=[1105920,1112319],of=B(B(B(B({},{FontAwesome:{normal:"fas",400:"fas"}}),Pg),Nj),Fg),iu=Object.keys(of).reduce(function(n,a){return n[a.toLowerCase()]=of[a],n},{}),$k=Object.keys(iu).reduce(function(n,a){var r=iu[a];return n[a]=r[900]||Gi(Object.entries(r))[0][1],n},{});function Zk(n){var a=n.replace(Yy,"");return By(Gi(a)[0]||"")}function Vk(n){var a=n.getPropertyValue("font-feature-settings").includes("ss01"),r=n.getPropertyValue("content"),s=r.replace(Yy,""),c=s.codePointAt(0),d=c>=rf[0]&&c<=rf[1],f=s.length===2?s[0]===s[1]:!1;return d||f||a}function Yk(n,a){var r=n.replace(/^['"]|['"]$/g,"").toLowerCase(),s=parseInt(a),c=isNaN(s)?"normal":s;return(iu[r]||{})[c]||$k[r]}function sf(n,a){var r="".concat(Bj).concat(a.replace(":","-"));return new Promise(function(s,c){if(n.getAttribute(r)!==null)return s();var d=_n(n.children),f=d.filter(function(ae){return ae.getAttribute(Hl)===a})[0],y=Et.getComputedStyle(n,a),w=y.getPropertyValue("font-family"),j=w.match(Mj),v=y.getPropertyValue("font-weight"),D=y.getPropertyValue("content");if(f&&!j)return n.removeChild(f),s();if(j&&D!=="none"&&D!==""){var A=y.getPropertyValue("content"),F=Yk(w,v),M=Zk(A),_=j[0].startsWith("FontAwesome"),W=Vk(y),O=ju(F,M),Y=O;if(_){var Z=ok(M);Z.iconName&&Z.prefix&&(O=Z.iconName,F=Z.prefix)}if(O&&!W&&(!f||f.getAttribute(yu)!==F||f.getAttribute(zu)!==Y)){n.setAttribute(r,Y),f&&n.removeChild(f);var ne=Fk(),H=ne.extra;H.attributes[Hl]=a,Xl(O,F).then(function(ae){var le=ku(B(B({},ne),{},{icons:{main:ae,mask:Ly()},prefix:F,iconName:Y,extra:H,watchable:!0})),ze=Ce.createElementNS("http://www.w3.org/2000/svg","svg");a==="::before"?n.insertBefore(ze,n.firstChild):n.appendChild(ze),ze.outerHTML=le.map(function(_e){return _a(_e)}).join(`
`),n.removeAttribute(r),s()}).catch(c)}else s()}else s()})}function Qk(n){return Promise.all([sf(n,"::before"),sf(n,"::after")])}function Xk(n){return n.parentNode!==document.head&&!~Oj.indexOf(n.tagName.toUpperCase())&&!n.getAttribute(Hl)&&(!n.parentNode||n.parentNode.tagName!=="svg")}var qk=function(a){return!!a&&Dy.some(function(r){return a.includes(r)})},ev=function(a){if(!a)return[];var r=new Set,s=a.split(/,(?![^()]*\))/).map(function(w){return w.trim()});s=s.flatMap(function(w){return w.includes("(")?w:w.split(",").map(function(j){return j.trim()})});var c=no(s),d;try{for(c.s();!(d=c.n()).done;){var f=d.value;if(qk(f)){var y=Dy.reduce(function(w,j){return w.replace(j,"")},f);y!==""&&y!=="*"&&r.add(y)}}}catch(w){c.e(w)}finally{c.f()}return r};function lf(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(rt){var r;if(a)r=n;else if(V.searchPseudoElementsFullScan)r=n.querySelectorAll("*");else{var s=new Set,c=no(document.styleSheets),d;try{for(c.s();!(d=c.n()).done;){var f=d.value;try{var y=no(f.cssRules),w;try{for(y.s();!(w=y.n()).done;){var j=w.value,v=ev(j.selectorText),D=no(v),A;try{for(D.s();!(A=D.n()).done;){var F=A.value;s.add(F)}}catch(_){D.e(_)}finally{D.f()}}}catch(_){y.e(_)}finally{y.f()}}catch(_){V.searchPseudoElementsWarnings&&console.warn("Font Awesome: cannot parse stylesheet: ".concat(f.href," (").concat(_.message,`)
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`))}}}catch(_){c.e(_)}finally{c.f()}if(!s.size)return;var M=Array.from(s).join(", ");try{r=n.querySelectorAll(M)}catch{}}return new Promise(function(_,W){var O=_n(r).filter(Xk).map(Qk),Y=vu.begin("searchPseudoElements");Zy(),Promise.all(O).then(function(){Y(),eu(),_()}).catch(function(){Y(),eu(),W()})})}}var iv={hooks:function(){return{mutationObserverCallbacks:function(r){return r.pseudoElementsCallback=lf,r}}},provides:function(a){a.pseudoElements2svg=function(r){var s=r.node,c=s===void 0?Ce:s;V.searchPseudoElements&&lf(c)}}},uf=!1,tv={mixout:function(){return{dom:{unwatch:function(){Zy(),uf=!0}}}},hooks:function(){return{bootstrap:function(){tf(Vl("mutationObserverCallbacks",{}))},noAuto:function(){Nk()},watch:function(r){var s=r.observeMutationsRoot;uf?eu():tf(Vl("mutationObserverCallbacks",{observeMutationsRoot:s}))}}}},cf=function(a){var r={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return a.toLowerCase().split(" ").reduce(function(s,c){var d=c.toLowerCase().split("-"),f=d[0],y=d.slice(1).join("-");if(f&&y==="h")return s.flipX=!0,s;if(f&&y==="v")return s.flipY=!0,s;if(y=parseFloat(y),isNaN(y))return s;switch(f){case"grow":s.size=s.size+y;break;case"shrink":s.size=s.size-y;break;case"left":s.x=s.x-y;break;case"right":s.x=s.x+y;break;case"up":s.y=s.y-y;break;case"down":s.y=s.y+y;break;case"rotate":s.rotate=s.rotate+y;break}return s},r)},nv={mixout:function(){return{parse:{transform:function(r){return cf(r)}}}},hooks:function(){return{parseNodeAttributes:function(r,s){var c=s.getAttribute("data-fa-transform");return c&&(r.transform=cf(c)),r}}},provides:function(a){a.generateAbstractTransformGrouping=function(r){var s=r.main,c=r.transform,d=r.containerWidth,f=r.iconWidth,y={transform:"translate(".concat(d/2," 256)")},w="translate(".concat(c.x*32,", ").concat(c.y*32,") "),j="scale(".concat(c.size/16*(c.flipX?-1:1),", ").concat(c.size/16*(c.flipY?-1:1),") "),v="rotate(".concat(c.rotate," 0 0)"),D={transform:"".concat(w," ").concat(j," ").concat(v)},A={transform:"translate(".concat(f/2*-1," -256)")},F={outer:y,inner:D,path:A};return{tag:"g",attributes:B({},F.outer),children:[{tag:"g",attributes:B({},F.inner),children:[{tag:s.icon.tag,children:s.icon.children,attributes:B(B({},s.icon.attributes),F.path)}]}]}}}},Nl={x:0,y:0,width:"100%",height:"100%"};function df(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return n.attributes&&(n.attributes.fill||a)&&(n.attributes.fill="black"),n}function av(n){return n.tag==="g"?n.children:[n]}var rv={hooks:function(){return{parseNodeAttributes:function(r,s){var c=s.getAttribute("data-fa-mask"),d=c?ho(c.split(" ").map(function(f){return f.trim()})):Ly();return d.prefix||(d.prefix=Pt()),r.mask=d,r.maskId=s.getAttribute("data-fa-mask-id"),r}}},provides:function(a){a.generateAbstractMask=function(r){var s=r.children,c=r.attributes,d=r.main,f=r.mask,y=r.maskId,w=r.transform,j=d.width,v=d.icon,D=f.width,A=f.icon,F=Yj({transform:w,containerWidth:D,iconWidth:j}),M={tag:"rect",attributes:B(B({},Nl),{},{fill:"white"})},_=v.children?{children:v.children.map(df)}:{},W={tag:"g",attributes:B({},F.inner),children:[df(B({tag:v.tag,attributes:B(B({},v.attributes),F.path)},_))]},O={tag:"g",attributes:B({},F.outer),children:[W]},Y="mask-".concat(y||Hm()),Z="clip-".concat(y||Hm()),ne={tag:"mask",attributes:B(B({},Nl),{},{id:Y,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[M,O]},H={tag:"defs",children:[{tag:"clipPath",attributes:{id:Z},children:av(A)},ne]};return s.push(H,{tag:"rect",attributes:B({fill:"currentColor","clip-path":"url(#".concat(Z,")"),mask:"url(#".concat(Y,")")},Nl)}),{children:s,attributes:c}}}},ov={provides:function(a){var r=!1;Et.matchMedia&&(r=Et.matchMedia("(prefers-reduced-motion: reduce)").matches),a.missingIconAbstract=function(){var s=[],c={fill:"currentColor"},d={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};s.push({tag:"path",attributes:B(B({},c),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var f=B(B({},d),{},{attributeName:"opacity"}),y={tag:"circle",attributes:B(B({},c),{},{cx:"256",cy:"364",r:"28"}),children:[]};return r||y.children.push({tag:"animate",attributes:B(B({},d),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:B(B({},f),{},{values:"1;0;1;1;0;1;"})}),s.push(y),s.push({tag:"path",attributes:B(B({},c),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:r?[]:[{tag:"animate",attributes:B(B({},f),{},{values:"1;0;0;0;0;1;"})}]}),r||s.push({tag:"path",attributes:B(B({},c),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:B(B({},f),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:s}}}},sv={hooks:function(){return{parseNodeAttributes:function(r,s){var c=s.getAttribute("data-fa-symbol"),d=c===null?!1:c===""?!0:c;return r.symbol=d,r}}}},lv=[qj,Lk,Hk,Kk,Uk,iv,tv,nv,rv,ov,sv];zk(lv,{mixoutsTo:zi});zi.noAuto;var Na=zi.config;zi.library;zi.dom;var Qy=zi.parse;zi.findIconDefinition;zi.toHtml;var uv=zi.icon;zi.layer;zi.text;zi.counter;function cv(n){return n=n-0,n===n}function Xy(n){return cv(n)?n:(n=n.replace(/[_-]+(.)?/g,(a,r)=>r?r.toUpperCase():""),n.charAt(0).toLowerCase()+n.slice(1))}function dv(n){return n.charAt(0).toUpperCase()+n.slice(1)}var Sn=new Map,mv=1e3;function fv(n){if(Sn.has(n))return Sn.get(n);const a={};let r=0;const s=n.length;for(;r<s;){const c=n.indexOf(";",r),d=c===-1?s:c,f=n.slice(r,d).trim();if(f){const y=f.indexOf(":");if(y>0){const w=f.slice(0,y).trim(),j=f.slice(y+1).trim();if(w&&j){const v=Xy(w);a[v.startsWith("webkit")?dv(v):v]=j}}}r=d+1}if(Sn.size===mv){const c=Sn.keys().next().value;c&&Sn.delete(c)}return Sn.set(n,a),a}function qy(n,a,r={}){if(typeof a=="string")return a;const s=(a.children||[]).map(v=>qy(n,v)),c=a.attributes||{},d={};for(const[v,D]of Object.entries(c))switch(!0){case v==="class":{d.className=D;break}case v==="style":{d.style=fv(String(D));break}case v.startsWith("aria-"):case v.startsWith("data-"):{d[v.toLowerCase()]=D;break}default:d[Xy(v)]=D}const{style:f,role:y,"aria-label":w,...j}=r;return f&&(d.style=d.style?{...d.style,...f}:f),y&&(d.role=y),w&&(d["aria-label"]=w,d["aria-hidden"]="false"),n(a.tag,{...j,...d},...s)}var yv=qy.bind(null,ni.createElement),mf=(n,a)=>{const r=T.useId();return n||(a?r:void 0)},zv=class{constructor(n="react-fontawesome"){this.enabled=!1;let a=!1;try{a=typeof process<"u"&&!1}catch{}this.scope=n,this.enabled=a}log(...n){this.enabled&&console.log(`[${this.scope}]`,...n)}warn(...n){this.enabled&&console.warn(`[${this.scope}]`,...n)}error(...n){this.enabled&&console.error(`[${this.scope}]`,...n)}},wv="searchPseudoElementsFullScan"in Na?"7.0.0":"6.0.0",pv=Number.parseInt(wv)>=7,xa="fa",qi={beat:"fa-beat",fade:"fa-fade",beatFade:"fa-beat-fade",bounce:"fa-bounce",shake:"fa-shake",spin:"fa-spin",spinPulse:"fa-spin-pulse",spinReverse:"fa-spin-reverse",pulse:"fa-pulse"},hv={left:"fa-pull-left",right:"fa-pull-right"},gv={90:"fa-rotate-90",180:"fa-rotate-180",270:"fa-rotate-270"},jv={"2xs":"fa-2xs",xs:"fa-xs",sm:"fa-sm",lg:"fa-lg",xl:"fa-xl","2xl":"fa-2xl","1x":"fa-1x","2x":"fa-2x","3x":"fa-3x","4x":"fa-4x","5x":"fa-5x","6x":"fa-6x","7x":"fa-7x","8x":"fa-8x","9x":"fa-9x","10x":"fa-10x"},et={border:"fa-border",fixedWidth:"fa-fw",flip:"fa-flip",flipHorizontal:"fa-flip-horizontal",flipVertical:"fa-flip-vertical",inverse:"fa-inverse",rotateBy:"fa-rotate-by",swapOpacity:"fa-swap-opacity",widthAuto:"fa-width-auto"};function kv(n){const a=Na.cssPrefix||Na.familyPrefix||xa;return a===xa?n:n.replace(new RegExp(String.raw`(?<=^|\s)${xa}-`,"g"),`${a}-`)}function vv(n){const{beat:a,fade:r,beatFade:s,bounce:c,shake:d,spin:f,spinPulse:y,spinReverse:w,pulse:j,fixedWidth:v,inverse:D,border:A,flip:F,size:M,rotation:_,pull:W,swapOpacity:O,rotateBy:Y,widthAuto:Z,className:ne}=n,H=[];return ne&&H.push(...ne.split(" ")),a&&H.push(qi.beat),r&&H.push(qi.fade),s&&H.push(qi.beatFade),c&&H.push(qi.bounce),d&&H.push(qi.shake),f&&H.push(qi.spin),w&&H.push(qi.spinReverse),y&&H.push(qi.spinPulse),j&&H.push(qi.pulse),v&&H.push(et.fixedWidth),D&&H.push(et.inverse),A&&H.push(et.border),F===!0&&H.push(et.flip),(F==="horizontal"||F==="both")&&H.push(et.flipHorizontal),(F==="vertical"||F==="both")&&H.push(et.flipVertical),M!=null&&H.push(jv[M]),_!=null&&_!==0&&H.push(gv[_]),W!=null&&H.push(hv[W]),O&&H.push(et.swapOpacity),pv?(Y&&H.push(et.rotateBy),Z&&H.push(et.widthAuto),(Na.cssPrefix||Na.familyPrefix||xa)===xa?H:H.map(kv)):H}var bv=n=>typeof n=="object"&&"icon"in n&&!!n.icon;function ff(n){if(n)return bv(n)?n:Qy.icon(n)}function Cv(n){return Object.keys(n)}var yf=new zv("FontAwesomeIcon"),ez={border:!1,className:"",mask:void 0,maskId:void 0,fixedWidth:!1,inverse:!1,flip:!1,icon:void 0,listItem:!1,pull:void 0,pulse:!1,rotation:void 0,rotateBy:!1,size:void 0,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:void 0,transform:void 0,swapOpacity:!1,widthAuto:!1},Dv=new Set(Object.keys(ez)),it=ni.forwardRef((n,a)=>{const r={...ez,...n},{icon:s,mask:c,symbol:d,title:f,titleId:y,maskId:w,transform:j}=r,v=mf(w,!!c),D=mf(y,!!f),A=ff(s);if(!A)return yf.error("Icon lookup is undefined",s),null;const F=vv(r),M=typeof j=="string"?Qy.transform(j):j,_=ff(c),W=uv(A,{...F.length>0&&{classes:F},...M&&{transform:M},..._&&{mask:_},symbol:d,title:f,titleId:D,maskId:v});if(!W)return yf.error("Could not find icon",A),null;const{abstract:O}=W,Y={ref:a};for(const Z of Cv(r))Dv.has(Z)||(Y[Z]=r[Z]);return yv(O[0],Y)});it.displayName="FontAwesomeIcon";var Av={prefix:"fas",iconName:"trash",icon:[448,512,[],"f1f8","M136.7 5.9L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-8.7-26.1C306.9-7.2 294.7-16 280.9-16L167.1-16c-13.8 0-26 8.8-30.4 21.9zM416 144L32 144 53.1 467.1C54.7 492.4 75.7 512 101 512L347 512c25.3 0 46.3-19.6 47.9-44.9L416 144z"]},Ev={prefix:"fas",iconName:"guitar",icon:[512,512,[],"f7a6","M465 7c-9.4-9.4-24.6-9.4-33.9 0L383 55c-2.4 2.4-4.3 5.3-5.5 8.5l-15.4 41-77.5 77.6c-45.1-29.4-99.3-30.2-131 1.6-11 11-18 24.6-21.4 39.6-3.7 16.6-19.1 30.7-36.1 31.6-25.6 1.3-49.3 10.7-67.3 28.6-44.8 44.8-36.4 125.8 18.7 180.9S183.6 528 228.4 483.2c17.9-17.9 27.4-41.7 28.6-67.3 .9-17 15-32.3 31.6-36.1 15-3.4 28.6-10.5 39.6-21.4 31.8-31.8 31-85.9 1.6-131l77.6-77.6 41-15.4c3.2-1.2 6.1-3.1 8.5-5.5l48-48c9.4-9.4 9.4-24.6 0-33.9L465 7zM208 256a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"]},Pv={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M55.1 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L147.2 256 9.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192.5 301.3 329.9 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.8 256 375.1 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192.5 210.7 55.1 73.4z"]},Tv=Pv,Sv={prefix:"fas",iconName:"star",icon:[576,512,[11088,61446],"f005","M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z"]},xv={prefix:"fas",iconName:"caret-up",icon:[320,512,[],"f0d8","M140.3 135.2c12.6-10.3 31.1-9.5 42.8 2.2l128 128c9.2 9.2 11.9 22.9 6.9 34.9S301.4 320 288.5 320l-256 0c-12.9 0-24.6-7.8-29.6-19.8S.7 274.5 9.9 265.4l128-128 2.4-2.2z"]},Gv={prefix:"fas",iconName:"caret-down",icon:[320,512,[],"f0d7","M140.3 376.8c12.6 10.2 31.1 9.5 42.8-2.2l128-128c9.2-9.2 11.9-22.9 6.9-34.9S301.4 192 288.5 192l-256 0c-12.9 0-24.6 7.8-29.6 19.8S.7 237.5 9.9 246.6l128 128 2.4 2.2z"]},iz={prefix:"fas",iconName:"list-ul",icon:[512,512,["list-dots"],"f0ca","M48 144a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L192 64zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-288 0zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-288 0zM48 464a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM96 256a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z"]};const Ba=({mode:n})=>x.jsx(it,{icon:Sv,className:Le("sb-star",`sb-star-${n}`)});Ba.propTypes={mode:je.string.isRequired};const tz=T.memo(({song:n,chooseSong:a,onlyStarred:r})=>{const s=()=>a(n.number),c=r?n.selected?"selected":"starred":n.starred?"starred":"plain",d=r?n.toggleSelected:n.toggleStarred;return x.jsxs("span",{className:Le("sb-menu-songtitle",{"sb-starred-song":n.starred}),children:[x.jsxs("span",{onClick:d,children:[x.jsx(Ba,{mode:c})," ",x.jsxs("span",{className:Le({"sb-chosen-song":n.chosen}),children:[n.number,". "]})]}),x.jsx("a",{href:"#",onClick:s,className:Le("text-reset",{"sb-chosen-song":n.chosen}),children:n.title})]})});tz.propTypes={song:je.object.isRequired,chooseSong:je.func.isRequired,onlyStarred:je.bool.isRequired};const nz=({onlyStarred:n,toggleOnlyStarred:a,starredCount:r,selectedSong:s,searchText:c,setSearchText:d,onClose:f})=>{const y=w=>{d(w.target.value)};return x.jsxs(x.Fragment,{children:[r?x.jsx("div",{className:"me-2",children:x.jsx(Gn,{variant:"info",onClick:a,children:n?x.jsx(it,{icon:iz,role:"button",size:"lg"}):x.jsx(x.Fragment,{children:x.jsxs("span",{className:"sb-no-wrap",children:[x.jsx(Ba,{mode:"starred"})," ",r]})})})}):null,n?s?x.jsxs(x.Fragment,{children:[x.jsx(Gn,{className:"ms-2 me-1",variant:"success",disabled:!s.moveUp,onClick:s.moveUp,children:x.jsx(it,{icon:xv,role:"button",size:"lg"})}),x.jsx(Gn,{className:"me-3",variant:"success",disabled:!s.moveDown,onClick:s.moveDown,children:x.jsx(it,{icon:Gv,role:"button",size:"lg"})}),x.jsx(Gn,{className:"me-1",variant:"danger",onClick:s.toggleStarred,children:x.jsx(it,{icon:Av,role:"button",size:"lg"})})]}):x.jsx("div",{className:"ms-2",children:x.jsxs("span",{className:"fw-bold sb-no-wrap",children:["Wybrane ",x.jsx(Ba,{mode:"starred"})," ",r]})}):x.jsx("div",{className:"me-2 flex-grow-1",children:x.jsx("input",{type:"search",className:"form-control",placeholder:"Szukaj",autoCapitalize:"none",autoCorrect:"off",value:c,onChange:y})}),x.jsx("div",{className:"ms-auto",children:x.jsx(Gn,{variant:"light",onClick:f,children:x.jsx(it,{icon:Tv,role:"button",size:"lg",onClick:f})})})]})};nz.propTypes={onlyStarred:je.bool.isRequired,toggleOnlyStarred:je.func.isRequired,starredCount:je.number.isRequired,selectedSong:je.object,searchText:je.string.isRequired,setSearchText:je.func.isRequired,onClose:je.func.isRequired};const az=({songs:n,chooseSong:a,starredCount:r,onlyStarred:s,toggleOnlyStarred:c,show:d,onClose:f})=>{const[y,w]=T.useState(""),j=T.useRef(null);T.useEffect(()=>{(!d||s)&&w(""),F()},[d,s]);const D=y.trim()?isNaN(y)?Tf(y.trim()):parseInt(y):void 0;T.useEffect(()=>{D||F()},[D]);const A=O=>D?typeof D=="number"?O.number===D:O.latinTitle.includes(D):!0,F=()=>{j.current&&j.current.scrollIntoView()},M=n.findIndex(O=>O.chosen),_=n.find(O=>O.selected),W=M<3?0:M-3;return x.jsxs(qr,{show:d,onHide:f,scrollable:!0,animation:!1,children:[x.jsx(qr.Header,{className:"py-2 px-2",children:x.jsx(nz,{onlyStarred:s,toggleOnlyStarred:c,starredCount:r,selectedSong:_,searchText:y,setSearchText:w,onClose:f})}),x.jsx(qr.Body,{children:n.filter(O=>A(O)).map((O,Y)=>x.jsxs(ni.Fragment,{children:[x.jsx(tz,{song:O,chooseSong:a,onlyStarred:s}),x.jsx("br",{ref:Y===W?j:null})]},O.number))}),s?null:x.jsx(qr.Footer,{className:"py-0",children:x.jsxs("p",{className:"text-secondary small",children:["Śpiewnik - Tchnienie Boga v","0.3.0"]})})]})};az.propTypes={songs:je.array.isRequired,chooseSong:je.func.isRequired,starredCount:je.number.isRequired,onlyStarred:je.bool.isRequired,toggleOnlyStarred:je.func.isRequired,show:je.bool.isRequired,onClose:je.func.isRequired};const rz=({onlyStarred:n,chordsShown:a,onClickMenu:r,onClickGuitar:s})=>{const c=d=>f=>{(f.key==="Enter"||f.key===" "||f.key==="Spacebar"||f.which===13||f.which===32)&&(f.preventDefault(),d(f))};return x.jsxs("div",{className:"sb-menu-buttons-container",children:[x.jsx("div",{className:Le("btn","sb-menu-button","shadow","rounded-circle",a?"sb-menu-button-red":"sb-menu-button-gray","d-flex","justify-content-center","align-items-center","pt-2"),tabIndex:"0",role:"button",onClick:s,onKeyPress:c(s),children:x.jsx("div",{className:"sb-menu-button-icon my-auto",children:x.jsx(it,{icon:Ev,size:"lg"})})}),x.jsx("div",{className:"btn sb-menu-button shadow rounded-circle sb-menu-button-cyan d-flex justify-content-center align-items-center pt-2",tabIndex:"1",role:"button",onClick:r,onKeyPress:c(r),children:x.jsx("div",{className:"sb-menu-button-icon my-auto",children:n?x.jsx(Ba,{mode:"starred"}):x.jsx(it,{icon:iz,size:"lg"})})})]})};rz.propTypes={onlyStarred:je.bool.isRequired,chordsShown:je.bool.isRequired,onClickMenu:je.func.isRequired,onClickGuitar:je.func.isRequired};function Nv(n,a,r){return Math.max(a,Math.min(n,r))}const Fe={toVector(n,a){return n===void 0&&(n=a),Array.isArray(n)?n:[n,n]},add(n,a){return[n[0]+a[0],n[1]+a[1]]},sub(n,a){return[n[0]-a[0],n[1]-a[1]]},addTo(n,a){n[0]+=a[0],n[1]+=a[1]},subTo(n,a){n[0]-=a[0],n[1]-=a[1]}};function zf(n,a,r){return a===0||Math.abs(a)===1/0?Math.pow(n,r*5):n*a*r/(a+r*n)}function wf(n,a,r,s=.15){return s===0?Nv(n,a,r):n<a?-zf(a-n,r-a,s)+a:n>r?+zf(n-r,r-a,s)+r:n}function Bv(n,[a,r],[s,c]){const[[d,f],[y,w]]=n;return[wf(a,d,f,s),wf(r,y,w,c)]}function Rv(n,a){if(typeof n!="object"||n===null)return n;var r=n[Symbol.toPrimitive];if(r!==void 0){var s=r.call(n,a);if(typeof s!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(a==="string"?String:Number)(n)}function Ov(n){var a=Rv(n,"string");return typeof a=="symbol"?a:String(a)}function Xe(n,a,r){return a=Ov(a),a in n?Object.defineProperty(n,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[a]=r,n}function pf(n,a){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);a&&(s=s.filter(function(c){return Object.getOwnPropertyDescriptor(n,c).enumerable})),r.push.apply(r,s)}return r}function Te(n){for(var a=1;a<arguments.length;a++){var r=arguments[a]!=null?arguments[a]:{};a%2?pf(Object(r),!0).forEach(function(s){Xe(n,s,r[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):pf(Object(r)).forEach(function(s){Object.defineProperty(n,s,Object.getOwnPropertyDescriptor(r,s))})}return n}const oz={pointer:{start:"down",change:"move",end:"up"},mouse:{start:"down",change:"move",end:"up"},touch:{start:"start",change:"move",end:"end"},gesture:{start:"start",change:"change",end:"end"}};function hf(n){return n?n[0].toUpperCase()+n.slice(1):""}const Fv=["enter","leave"];function _v(n=!1,a){return n&&!Fv.includes(a)}function Mv(n,a="",r=!1){const s=oz[n],c=s&&s[a]||a;return"on"+hf(n)+hf(c)+(_v(r,c)?"Capture":"")}const Iv=["gotpointercapture","lostpointercapture"];function Jv(n){let a=n.substring(2).toLowerCase();const r=!!~a.indexOf("passive");r&&(a=a.replace("passive",""));const s=Iv.includes(a)?"capturecapture":"capture",c=!!~a.indexOf(s);return c&&(a=a.replace("capture","")),{device:a,capture:c,passive:r}}function Wv(n,a=""){const r=oz[n],s=r&&r[a]||a;return n+s}function jo(n){return"touches"in n}function sz(n){return jo(n)?"touch":"pointerType"in n?n.pointerType:"mouse"}function Lv(n){return Array.from(n.touches).filter(a=>{var r,s;return a.target===n.currentTarget||((r=n.currentTarget)===null||r===void 0||(s=r.contains)===null||s===void 0?void 0:s.call(r,a.target))})}function Hv(n){return n.type==="touchend"||n.type==="touchcancel"?n.changedTouches:n.targetTouches}function lz(n){return jo(n)?Hv(n)[0]:n}function tu(n,a){try{const r=a.clientX-n.clientX,s=a.clientY-n.clientY,c=(a.clientX+n.clientX)/2,d=(a.clientY+n.clientY)/2,f=Math.hypot(r,s);return{angle:-(Math.atan2(r,s)*180)/Math.PI,distance:f,origin:[c,d]}}catch{}return null}function Kv(n){return Lv(n).map(a=>a.identifier)}function gf(n,a){const[r,s]=Array.from(n.touches).filter(c=>a.includes(c.identifier));return tu(r,s)}function Bl(n){const a=lz(n);return jo(n)?a.identifier:a.pointerId}function jf(n){const a=lz(n);return[a.clientX,a.clientY]}const kf=40,vf=800;function Uv(n){let{deltaX:a,deltaY:r,deltaMode:s}=n;return s===1?(a*=kf,r*=kf):s===2&&(a*=vf,r*=vf),[a,r]}function $v(n){const a={};if("buttons"in n&&(a.buttons=n.buttons),"shiftKey"in n){const{shiftKey:r,altKey:s,metaKey:c,ctrlKey:d}=n;Object.assign(a,{shiftKey:r,altKey:s,metaKey:c,ctrlKey:d})}return a}function mo(n,...a){return typeof n=="function"?n(...a):n}function Zv(){}function Vv(...n){return n.length===0?Zv:n.length===1?n[0]:function(){let a;for(const r of n)a=r.apply(this,arguments)||a;return a}}function bf(n,a){return Object.assign({},a,n||{})}const Yv=32;class uz{constructor(a,r,s){this.ctrl=a,this.args=r,this.key=s,this.state||(this.state={},this.computeValues([0,0]),this.computeInitial(),this.init&&this.init(),this.reset())}get state(){return this.ctrl.state[this.key]}set state(a){this.ctrl.state[this.key]=a}get shared(){return this.ctrl.state.shared}get eventStore(){return this.ctrl.gestureEventStores[this.key]}get timeoutStore(){return this.ctrl.gestureTimeoutStores[this.key]}get config(){return this.ctrl.config[this.key]}get sharedConfig(){return this.ctrl.config.shared}get handler(){return this.ctrl.handlers[this.key]}reset(){const{state:a,shared:r,ingKey:s,args:c}=this;r[s]=a._active=a.active=a._blocked=a._force=!1,a._step=[!1,!1],a.intentional=!1,a._movement=[0,0],a._distance=[0,0],a._direction=[0,0],a._delta=[0,0],a._bounds=[[-1/0,1/0],[-1/0,1/0]],a.args=c,a.axis=void 0,a.memo=void 0,a.elapsedTime=a.timeDelta=0,a.direction=[0,0],a.distance=[0,0],a.overflow=[0,0],a._movementBound=[!1,!1],a.velocity=[0,0],a.movement=[0,0],a.delta=[0,0],a.timeStamp=0}start(a){const r=this.state,s=this.config;r._active||(this.reset(),this.computeInitial(),r._active=!0,r.target=a.target,r.currentTarget=a.currentTarget,r.lastOffset=s.from?mo(s.from,r):r.offset,r.offset=r.lastOffset,r.startTime=r.timeStamp=a.timeStamp)}computeValues(a){const r=this.state;r._values=a,r.values=this.config.transform(a)}computeInitial(){const a=this.state;a._initial=a._values,a.initial=a.values}compute(a){const{state:r,config:s,shared:c}=this;r.args=this.args;let d=0;if(a&&(r.event=a,s.preventDefault&&a.cancelable&&r.event.preventDefault(),r.type=a.type,c.touches=this.ctrl.pointerIds.size||this.ctrl.touchIds.size,c.locked=!!document.pointerLockElement,Object.assign(c,$v(a)),c.down=c.pressed=c.buttons%2===1||c.touches>0,d=a.timeStamp-r.timeStamp,r.timeStamp=a.timeStamp,r.elapsedTime=r.timeStamp-r.startTime),r._active){const ae=r._delta.map(Math.abs);Fe.addTo(r._distance,ae)}this.axisIntent&&this.axisIntent(a);const[f,y]=r._movement,[w,j]=s.threshold,{_step:v,values:D}=r;if(s.hasCustomTransform?(v[0]===!1&&(v[0]=Math.abs(f)>=w&&D[0]),v[1]===!1&&(v[1]=Math.abs(y)>=j&&D[1])):(v[0]===!1&&(v[0]=Math.abs(f)>=w&&Math.sign(f)*w),v[1]===!1&&(v[1]=Math.abs(y)>=j&&Math.sign(y)*j)),r.intentional=v[0]!==!1||v[1]!==!1,!r.intentional)return;const A=[0,0];if(s.hasCustomTransform){const[ae,le]=D;A[0]=v[0]!==!1?ae-v[0]:0,A[1]=v[1]!==!1?le-v[1]:0}else A[0]=v[0]!==!1?f-v[0]:0,A[1]=v[1]!==!1?y-v[1]:0;this.restrictToAxis&&!r._blocked&&this.restrictToAxis(A);const F=r.offset,M=r._active&&!r._blocked||r.active;M&&(r.first=r._active&&!r.active,r.last=!r._active&&r.active,r.active=c[this.ingKey]=r._active,a&&(r.first&&("bounds"in s&&(r._bounds=mo(s.bounds,r)),this.setup&&this.setup()),r.movement=A,this.computeOffset()));const[_,W]=r.offset,[[O,Y],[Z,ne]]=r._bounds;r.overflow=[_<O?-1:_>Y?1:0,W<Z?-1:W>ne?1:0],r._movementBound[0]=r.overflow[0]?r._movementBound[0]===!1?r._movement[0]:r._movementBound[0]:!1,r._movementBound[1]=r.overflow[1]?r._movementBound[1]===!1?r._movement[1]:r._movementBound[1]:!1;const H=r._active?s.rubberband||[0,0]:[0,0];if(r.offset=Bv(r._bounds,r.offset,H),r.delta=Fe.sub(r.offset,F),this.computeMovement(),M&&(!r.last||d>Yv)){r.delta=Fe.sub(r.offset,F);const ae=r.delta.map(Math.abs);Fe.addTo(r.distance,ae),r.direction=r.delta.map(Math.sign),r._direction=r._delta.map(Math.sign),!r.first&&d>0&&(r.velocity=[ae[0]/d,ae[1]/d],r.timeDelta=d)}}emit(){const a=this.state,r=this.shared,s=this.config;if(a._active||this.clean(),(a._blocked||!a.intentional)&&!a._force&&!s.triggerAllEvents)return;const c=this.handler(Te(Te(Te({},r),a),{},{[this.aliasKey]:a.values}));c!==void 0&&(a.memo=c)}clean(){this.eventStore.clean(),this.timeoutStore.clean()}}function Qv([n,a],r){const s=Math.abs(n),c=Math.abs(a);if(s>c&&s>r)return"x";if(c>s&&c>r)return"y"}class Xv extends uz{constructor(...a){super(...a),Xe(this,"aliasKey","xy")}reset(){super.reset(),this.state.axis=void 0}init(){this.state.offset=[0,0],this.state.lastOffset=[0,0]}computeOffset(){this.state.offset=Fe.add(this.state.lastOffset,this.state.movement)}computeMovement(){this.state.movement=Fe.sub(this.state.offset,this.state.lastOffset)}axisIntent(a){const r=this.state,s=this.config;if(!r.axis&&a){const c=typeof s.axisThreshold=="object"?s.axisThreshold[sz(a)]:s.axisThreshold;r.axis=Qv(r._movement,c)}r._blocked=(s.lockDirection||!!s.axis)&&!r.axis||!!s.axis&&s.axis!==r.axis}restrictToAxis(a){if(this.config.axis||this.config.lockDirection)switch(this.state.axis){case"x":a[1]=0;break;case"y":a[0]=0;break}}}const qv=n=>n,Cf=.15,cz={enabled(n=!0){return n},eventOptions(n,a,r){return Te(Te({},r.shared.eventOptions),n)},preventDefault(n=!1){return n},triggerAllEvents(n=!1){return n},rubberband(n=0){switch(n){case!0:return[Cf,Cf];case!1:return[0,0];default:return Fe.toVector(n)}},from(n){if(typeof n=="function")return n;if(n!=null)return Fe.toVector(n)},transform(n,a,r){const s=n||r.shared.transform;return this.hasCustomTransform=!!s,s||qv},threshold(n){return Fe.toVector(n,0)}},eb=0,Ma=Te(Te({},cz),{},{axis(n,a,{axis:r}){if(this.lockDirection=r==="lock",!this.lockDirection)return r},axisThreshold(n=eb){return n},bounds(n={}){if(typeof n=="function")return d=>Ma.bounds(n(d));if("current"in n)return()=>n.current;if(typeof HTMLElement=="function"&&n instanceof HTMLElement)return n;const{left:a=-1/0,right:r=1/0,top:s=-1/0,bottom:c=1/0}=n;return[[a,r],[s,c]]}}),Df={ArrowRight:(n,a=1)=>[n*a,0],ArrowLeft:(n,a=1)=>[-1*n*a,0],ArrowUp:(n,a=1)=>[0,-1*n*a],ArrowDown:(n,a=1)=>[0,n*a]};class ib extends Xv{constructor(...a){super(...a),Xe(this,"ingKey","dragging")}reset(){super.reset();const a=this.state;a._pointerId=void 0,a._pointerActive=!1,a._keyboardActive=!1,a._preventScroll=!1,a._delayed=!1,a.swipe=[0,0],a.tap=!1,a.canceled=!1,a.cancel=this.cancel.bind(this)}setup(){const a=this.state;if(a._bounds instanceof HTMLElement){const r=a._bounds.getBoundingClientRect(),s=a.currentTarget.getBoundingClientRect(),c={left:r.left-s.left+a.offset[0],right:r.right-s.right+a.offset[0],top:r.top-s.top+a.offset[1],bottom:r.bottom-s.bottom+a.offset[1]};a._bounds=Ma.bounds(c)}}cancel(){const a=this.state;a.canceled||(a.canceled=!0,a._active=!1,setTimeout(()=>{this.compute(),this.emit()},0))}setActive(){this.state._active=this.state._pointerActive||this.state._keyboardActive}clean(){this.pointerClean(),this.state._pointerActive=!1,this.state._keyboardActive=!1,super.clean()}pointerDown(a){const r=this.config,s=this.state;if(a.buttons!=null&&(Array.isArray(r.pointerButtons)?!r.pointerButtons.includes(a.buttons):r.pointerButtons!==-1&&r.pointerButtons!==a.buttons))return;const c=this.ctrl.setEventIds(a);r.pointerCapture&&a.target.setPointerCapture(a.pointerId),!(c&&c.size>1&&s._pointerActive)&&(this.start(a),this.setupPointer(a),s._pointerId=Bl(a),s._pointerActive=!0,this.computeValues(jf(a)),this.computeInitial(),r.preventScrollAxis&&sz(a)!=="mouse"?(s._active=!1,this.setupScrollPrevention(a)):r.delay>0?(this.setupDelayTrigger(a),r.triggerAllEvents&&(this.compute(a),this.emit())):this.startPointerDrag(a))}startPointerDrag(a){const r=this.state;r._active=!0,r._preventScroll=!0,r._delayed=!1,this.compute(a),this.emit()}pointerMove(a){const r=this.state,s=this.config;if(!r._pointerActive)return;const c=Bl(a);if(r._pointerId!==void 0&&c!==r._pointerId)return;const d=jf(a);if(document.pointerLockElement===a.target?r._delta=[a.movementX,a.movementY]:(r._delta=Fe.sub(d,r._values),this.computeValues(d)),Fe.addTo(r._movement,r._delta),this.compute(a),r._delayed&&r.intentional){this.timeoutStore.remove("dragDelay"),r.active=!1,this.startPointerDrag(a);return}if(s.preventScrollAxis&&!r._preventScroll)if(r.axis)if(r.axis===s.preventScrollAxis||s.preventScrollAxis==="xy"){r._active=!1,this.clean();return}else{this.timeoutStore.remove("startPointerDrag"),this.startPointerDrag(a);return}else return;this.emit()}pointerUp(a){this.ctrl.setEventIds(a);try{this.config.pointerCapture&&a.target.hasPointerCapture(a.pointerId)&&a.target.releasePointerCapture(a.pointerId)}catch{}const r=this.state,s=this.config;if(!r._active||!r._pointerActive)return;const c=Bl(a);if(r._pointerId!==void 0&&c!==r._pointerId)return;this.state._pointerActive=!1,this.setActive(),this.compute(a);const[d,f]=r._distance;if(r.tap=d<=s.tapsThreshold&&f<=s.tapsThreshold,r.tap&&s.filterTaps)r._force=!0;else{const[y,w]=r._delta,[j,v]=r._movement,[D,A]=s.swipe.velocity,[F,M]=s.swipe.distance,_=s.swipe.duration;if(r.elapsedTime<_){const W=Math.abs(y/r.timeDelta),O=Math.abs(w/r.timeDelta);W>D&&Math.abs(j)>F&&(r.swipe[0]=Math.sign(y)),O>A&&Math.abs(v)>M&&(r.swipe[1]=Math.sign(w))}}this.emit()}pointerClick(a){!this.state.tap&&a.detail>0&&(a.preventDefault(),a.stopPropagation())}setupPointer(a){const r=this.config,s=r.device;r.pointerLock&&a.currentTarget.requestPointerLock(),r.pointerCapture||(this.eventStore.add(this.sharedConfig.window,s,"change",this.pointerMove.bind(this)),this.eventStore.add(this.sharedConfig.window,s,"end",this.pointerUp.bind(this)),this.eventStore.add(this.sharedConfig.window,s,"cancel",this.pointerUp.bind(this)))}pointerClean(){this.config.pointerLock&&document.pointerLockElement===this.state.currentTarget&&document.exitPointerLock()}preventScroll(a){this.state._preventScroll&&a.cancelable&&a.preventDefault()}setupScrollPrevention(a){this.state._preventScroll=!1,tb(a);const r=this.eventStore.add(this.sharedConfig.window,"touch","change",this.preventScroll.bind(this),{passive:!1});this.eventStore.add(this.sharedConfig.window,"touch","end",r),this.eventStore.add(this.sharedConfig.window,"touch","cancel",r),this.timeoutStore.add("startPointerDrag",this.startPointerDrag.bind(this),this.config.preventScrollDelay,a)}setupDelayTrigger(a){this.state._delayed=!0,this.timeoutStore.add("dragDelay",()=>{this.state._step=[0,0],this.startPointerDrag(a)},this.config.delay)}keyDown(a){const r=Df[a.key];if(r){const s=this.state,c=a.shiftKey?10:a.altKey?.1:1;this.start(a),s._delta=r(this.config.keyboardDisplacement,c),s._keyboardActive=!0,Fe.addTo(s._movement,s._delta),this.compute(a),this.emit()}}keyUp(a){a.key in Df&&(this.state._keyboardActive=!1,this.setActive(),this.compute(a),this.emit())}bind(a){const r=this.config.device;a(r,"start",this.pointerDown.bind(this)),this.config.pointerCapture&&(a(r,"change",this.pointerMove.bind(this)),a(r,"end",this.pointerUp.bind(this)),a(r,"cancel",this.pointerUp.bind(this)),a("lostPointerCapture","",this.pointerUp.bind(this))),this.config.keys&&(a("key","down",this.keyDown.bind(this)),a("key","up",this.keyUp.bind(this))),this.config.filterTaps&&a("click","",this.pointerClick.bind(this),{capture:!0,passive:!1})}}function tb(n){"persist"in n&&typeof n.persist=="function"&&n.persist()}const Ia=typeof window<"u"&&window.document&&window.document.createElement;function dz(){return Ia&&"ontouchstart"in window}function nb(){return dz()||Ia&&window.navigator.maxTouchPoints>1}function ab(){return Ia&&"onpointerdown"in window}function rb(){return Ia&&"exitPointerLock"in window.document}function ob(){try{return"constructor"in GestureEvent}catch{return!1}}const bi={isBrowser:Ia,gesture:ob(),touch:dz(),touchscreen:nb(),pointer:ab(),pointerLock:rb()},sb=250,lb=180,ub=.5,cb=50,db=250,mb=10,Af={mouse:0,touch:0,pen:8},fb=Te(Te({},Ma),{},{device(n,a,{pointer:{touch:r=!1,lock:s=!1,mouse:c=!1}={}}){return this.pointerLock=s&&bi.pointerLock,bi.touch&&r?"touch":this.pointerLock?"mouse":bi.pointer&&!c?"pointer":bi.touch?"touch":"mouse"},preventScrollAxis(n,a,{preventScroll:r}){if(this.preventScrollDelay=typeof r=="number"?r:r||r===void 0&&n?sb:void 0,!(!bi.touchscreen||r===!1))return n||(r!==void 0?"y":void 0)},pointerCapture(n,a,{pointer:{capture:r=!0,buttons:s=1,keys:c=!0}={}}){return this.pointerButtons=s,this.keys=c,!this.pointerLock&&this.device==="pointer"&&r},threshold(n,a,{filterTaps:r=!1,tapsThreshold:s=3,axis:c=void 0}){const d=Fe.toVector(n,r?s:c?1:0);return this.filterTaps=r,this.tapsThreshold=s,d},swipe({velocity:n=ub,distance:a=cb,duration:r=db}={}){return{velocity:this.transform(Fe.toVector(n)),distance:this.transform(Fe.toVector(a)),duration:r}},delay(n=0){switch(n){case!0:return lb;case!1:return 0;default:return n}},axisThreshold(n){return n?Te(Te({},Af),n):Af},keyboardDisplacement(n=mb){return n}});function yb(n){const[a,r]=n.overflow,[s,c]=n._delta,[d,f]=n._direction;(a<0&&s>0&&d<0||a>0&&s<0&&d>0)&&(n._movement[0]=n._movementBound[0]),(r<0&&c>0&&f<0||r>0&&c<0&&f>0)&&(n._movement[1]=n._movementBound[1])}const zb=30,wb=100;class pb extends uz{constructor(...a){super(...a),Xe(this,"ingKey","pinching"),Xe(this,"aliasKey","da")}init(){this.state.offset=[1,0],this.state.lastOffset=[1,0],this.state._pointerEvents=new Map}reset(){super.reset();const a=this.state;a._touchIds=[],a.canceled=!1,a.cancel=this.cancel.bind(this),a.turns=0}computeOffset(){const{type:a,movement:r,lastOffset:s}=this.state;a==="wheel"?this.state.offset=Fe.add(r,s):this.state.offset=[(1+r[0])*s[0],r[1]+s[1]]}computeMovement(){const{offset:a,lastOffset:r}=this.state;this.state.movement=[a[0]/r[0],a[1]-r[1]]}axisIntent(){const a=this.state,[r,s]=a._movement;if(!a.axis){const c=Math.abs(r)*zb-Math.abs(s);c<0?a.axis="angle":c>0&&(a.axis="scale")}}restrictToAxis(a){this.config.lockDirection&&(this.state.axis==="scale"?a[1]=0:this.state.axis==="angle"&&(a[0]=0))}cancel(){const a=this.state;a.canceled||setTimeout(()=>{a.canceled=!0,a._active=!1,this.compute(),this.emit()},0)}touchStart(a){this.ctrl.setEventIds(a);const r=this.state,s=this.ctrl.touchIds;if(r._active&&r._touchIds.every(d=>s.has(d))||s.size<2)return;this.start(a),r._touchIds=Array.from(s).slice(0,2);const c=gf(a,r._touchIds);c&&this.pinchStart(a,c)}pointerStart(a){if(a.buttons!=null&&a.buttons%2!==1)return;this.ctrl.setEventIds(a),a.target.setPointerCapture(a.pointerId);const r=this.state,s=r._pointerEvents,c=this.ctrl.pointerIds;if(r._active&&Array.from(s.keys()).every(f=>c.has(f))||(s.size<2&&s.set(a.pointerId,a),r._pointerEvents.size<2))return;this.start(a);const d=tu(...Array.from(s.values()));d&&this.pinchStart(a,d)}pinchStart(a,r){const s=this.state;s.origin=r.origin,this.computeValues([r.distance,r.angle]),this.computeInitial(),this.compute(a),this.emit()}touchMove(a){if(!this.state._active)return;const r=gf(a,this.state._touchIds);r&&this.pinchMove(a,r)}pointerMove(a){const r=this.state._pointerEvents;if(r.has(a.pointerId)&&r.set(a.pointerId,a),!this.state._active)return;const s=tu(...Array.from(r.values()));s&&this.pinchMove(a,s)}pinchMove(a,r){const s=this.state,c=s._values[1],d=r.angle-c;let f=0;Math.abs(d)>270&&(f+=Math.sign(d)),this.computeValues([r.distance,r.angle-360*f]),s.origin=r.origin,s.turns=f,s._movement=[s._values[0]/s._initial[0]-1,s._values[1]-s._initial[1]],this.compute(a),this.emit()}touchEnd(a){this.ctrl.setEventIds(a),this.state._active&&this.state._touchIds.some(r=>!this.ctrl.touchIds.has(r))&&(this.state._active=!1,this.compute(a),this.emit())}pointerEnd(a){const r=this.state;this.ctrl.setEventIds(a);try{a.target.releasePointerCapture(a.pointerId)}catch{}r._pointerEvents.has(a.pointerId)&&r._pointerEvents.delete(a.pointerId),r._active&&r._pointerEvents.size<2&&(r._active=!1,this.compute(a),this.emit())}gestureStart(a){a.cancelable&&a.preventDefault();const r=this.state;r._active||(this.start(a),this.computeValues([a.scale,a.rotation]),r.origin=[a.clientX,a.clientY],this.compute(a),this.emit())}gestureMove(a){if(a.cancelable&&a.preventDefault(),!this.state._active)return;const r=this.state;this.computeValues([a.scale,a.rotation]),r.origin=[a.clientX,a.clientY];const s=r._movement;r._movement=[a.scale-1,a.rotation],r._delta=Fe.sub(r._movement,s),this.compute(a),this.emit()}gestureEnd(a){this.state._active&&(this.state._active=!1,this.compute(a),this.emit())}wheel(a){const r=this.config.modifierKey;r&&(Array.isArray(r)?!r.find(s=>a[s]):!a[r])||(this.state._active?this.wheelChange(a):this.wheelStart(a),this.timeoutStore.add("wheelEnd",this.wheelEnd.bind(this)))}wheelStart(a){this.start(a),this.wheelChange(a)}wheelChange(a){"uv"in a||a.cancelable&&a.preventDefault();const s=this.state;s._delta=[-Uv(a)[1]/wb*s.offset[0],0],Fe.addTo(s._movement,s._delta),yb(s),this.state.origin=[a.clientX,a.clientY],this.compute(a),this.emit()}wheelEnd(){this.state._active&&(this.state._active=!1,this.compute(),this.emit())}bind(a){const r=this.config.device;r&&(a(r,"start",this[r+"Start"].bind(this)),a(r,"change",this[r+"Move"].bind(this)),a(r,"end",this[r+"End"].bind(this)),a(r,"cancel",this[r+"End"].bind(this)),a("lostPointerCapture","",this[r+"End"].bind(this))),this.config.pinchOnWheel&&a("wheel","",this.wheel.bind(this),{passive:!1})}}const hb=Te(Te({},cz),{},{device(n,a,{shared:r,pointer:{touch:s=!1}={}}){if(r.target&&!bi.touch&&bi.gesture)return"gesture";if(bi.touch&&s)return"touch";if(bi.touchscreen){if(bi.pointer)return"pointer";if(bi.touch)return"touch"}},bounds(n,a,{scaleBounds:r={},angleBounds:s={}}){const c=f=>{const y=bf(mo(r,f),{min:-1/0,max:1/0});return[y.min,y.max]},d=f=>{const y=bf(mo(s,f),{min:-1/0,max:1/0});return[y.min,y.max]};return typeof r!="function"&&typeof s!="function"?[c(),d()]:f=>[c(f),d(f)]},threshold(n,a,r){return this.lockDirection=r.axis==="lock",Fe.toVector(n,this.lockDirection?[.1,3]:0)},modifierKey(n){return n===void 0?"ctrlKey":n},pinchOnWheel(n=!0){return n}});Te(Te({},Ma),{},{mouseOnly:(n=!0)=>n});Te(Te({},Ma),{},{mouseOnly:(n=!0)=>n});const mz=new Map,nu=new Map;function fz(n){mz.set(n.key,n.engine),nu.set(n.key,n.resolver)}const gb={key:"drag",engine:ib,resolver:fb},jb={key:"pinch",engine:pb,resolver:hb};function kb(n,a){if(n==null)return{};var r={},s=Object.keys(n),c,d;for(d=0;d<s.length;d++)c=s[d],!(a.indexOf(c)>=0)&&(r[c]=n[c]);return r}function vb(n,a){if(n==null)return{};var r=kb(n,a),s,c;if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(n);for(c=0;c<d.length;c++)s=d[c],!(a.indexOf(s)>=0)&&Object.prototype.propertyIsEnumerable.call(n,s)&&(r[s]=n[s])}return r}const bb={target(n){if(n)return()=>"current"in n?n.current:n},enabled(n=!0){return n},window(n=bi.isBrowser?window:void 0){return n},eventOptions({passive:n=!0,capture:a=!1}={}){return{passive:n,capture:a}},transform(n){return n}},Cb=["target","eventOptions","window","enabled","transform"];function oo(n={},a){const r={};for(const[s,c]of Object.entries(a))switch(typeof c){case"function":r[s]=c.call(r,n[s],s,n);break;case"object":r[s]=oo(n[s],c);break;case"boolean":c&&(r[s]=n[s]);break}return r}function Db(n,a,r={}){const s=n,{target:c,eventOptions:d,window:f,enabled:y,transform:w}=s,j=vb(s,Cb);if(r.shared=oo({target:c,eventOptions:d,window:f,enabled:y,transform:w},bb),a){const v=nu.get(a);r[a]=oo(Te({shared:r.shared},j),v)}else for(const v in j){const D=nu.get(v);D&&(r[v]=oo(Te({shared:r.shared},j[v]),D))}return r}class yz{constructor(a,r){Xe(this,"_listeners",new Set),this._ctrl=a,this._gestureKey=r}add(a,r,s,c,d){const f=this._listeners,y=Wv(r,s),w=this._gestureKey?this._ctrl.config[this._gestureKey].eventOptions:{},j=Te(Te({},w),d);a.addEventListener(y,c,j);const v=()=>{a.removeEventListener(y,c,j),f.delete(v)};return f.add(v),v}clean(){this._listeners.forEach(a=>a()),this._listeners.clear()}}class Ab{constructor(){Xe(this,"_timeouts",new Map)}add(a,r,s=140,...c){this.remove(a),this._timeouts.set(a,window.setTimeout(r,s,...c))}remove(a){const r=this._timeouts.get(a);r&&window.clearTimeout(r)}clean(){this._timeouts.forEach(a=>{window.clearTimeout(a)}),this._timeouts.clear()}}class Eb{constructor(a){Xe(this,"gestures",new Set),Xe(this,"_targetEventStore",new yz(this)),Xe(this,"gestureEventStores",{}),Xe(this,"gestureTimeoutStores",{}),Xe(this,"handlers",{}),Xe(this,"config",{}),Xe(this,"pointerIds",new Set),Xe(this,"touchIds",new Set),Xe(this,"state",{shared:{shiftKey:!1,metaKey:!1,ctrlKey:!1,altKey:!1}}),Pb(this,a)}setEventIds(a){if(jo(a))return this.touchIds=new Set(Kv(a)),this.touchIds;if("pointerId"in a)return a.type==="pointerup"||a.type==="pointercancel"?this.pointerIds.delete(a.pointerId):a.type==="pointerdown"&&this.pointerIds.add(a.pointerId),this.pointerIds}applyHandlers(a,r){this.handlers=a,this.nativeHandlers=r}applyConfig(a,r){this.config=Db(a,r,this.config)}clean(){this._targetEventStore.clean();for(const a of this.gestures)this.gestureEventStores[a].clean(),this.gestureTimeoutStores[a].clean()}effect(){return this.config.shared.target&&this.bind(),()=>this._targetEventStore.clean()}bind(...a){const r=this.config.shared,s={};let c;if(!(r.target&&(c=r.target(),!c))){if(r.enabled){for(const f of this.gestures){const y=this.config[f],w=Ef(s,y.eventOptions,!!c);if(y.enabled){const j=mz.get(f);new j(this,a,f).bind(w)}}const d=Ef(s,r.eventOptions,!!c);for(const f in this.nativeHandlers)d(f,"",y=>this.nativeHandlers[f](Te(Te({},this.state.shared),{},{event:y,args:a})),void 0,!0)}for(const d in s)s[d]=Vv(...s[d]);if(!c)return s;for(const d in s){const{device:f,capture:y,passive:w}=Jv(d);this._targetEventStore.add(c,f,"",s[d],{capture:y,passive:w})}}}}function xn(n,a){n.gestures.add(a),n.gestureEventStores[a]=new yz(n,a),n.gestureTimeoutStores[a]=new Ab}function Pb(n,a){a.drag&&xn(n,"drag"),a.wheel&&xn(n,"wheel"),a.scroll&&xn(n,"scroll"),a.move&&xn(n,"move"),a.pinch&&xn(n,"pinch"),a.hover&&xn(n,"hover")}const Ef=(n,a,r)=>(s,c,d,f={},y=!1)=>{var w,j;const v=(w=f.capture)!==null&&w!==void 0?w:a.capture,D=(j=f.passive)!==null&&j!==void 0?j:a.passive;let A=y?s:Mv(s,c,v);r&&D&&(A+="Passive"),n[A]=n[A]||[],n[A].push(d)};function zz(n,a={},r,s){const c=ni.useMemo(()=>new Eb(n),[]);if(c.applyHandlers(n,s),c.applyConfig(a,r),ni.useEffect(c.effect.bind(c)),ni.useEffect(()=>c.clean.bind(c),[]),a.target===void 0)return c.bind.bind(c)}function Tb(n,a){return fz(gb),zz({drag:n},a||{},"drag")}function Sb(n,a){return fz(jb),zz({pinch:n},a||{},"pinch")}const xb=n=>{const a=localStorage.getItem(n);return typeof a=="string"?JSON.parse(a):void 0},Gb=(n,a)=>{a!==void 0&&localStorage.setItem(n,JSON.stringify(a))},Yt=(n,a)=>{const[r,s]=T.useState(()=>{const c=xb(n);return c||a});return T.useEffect(()=>{Gb(n,r)},[n,r]),[r,s]},Nb=(n,a,r,s)=>{const[c,d]=T.useState(null),[f,y]=T.useState(null),[w,j]=Yt("zoomLevel",r),v=A=>{d(A),y(w)},D=A=>{if(!c)return;const F=A/c,M=Math.floor(Math.log10(F)*10),_=Math.min(Math.max(n,f+M),a);j(_)};return Sb(A=>{A.first&&v(A.da[0]),D(A.da[0])},{target:s}),[w]},Bb=(n,a)=>{const[r,s]=Yt("chosenSong",1),[c,d]=Yt("starredSongs",[]),[f,y]=Yt("onlyStarred",!1),[w,j]=Yt("selectedSong",null),v=c.length;T.useEffect(()=>{f&&(c.length?c.find(O=>O===r)||s(c[0]):y(!1))},[f,y,r,s,c]);const D=O=>{const Y=r===O,Z=c.indexOf(O),ne=Z+1,H=!!ne,ae=w===O;return{chosen:Y,starredNumber:ne,starred:H,toggleStarred:()=>{j(H?le=>le===O?c.length<=1?null:c.length>Z+1?c[Z+1]:c[Z-1]:le:O),d(le=>H?le.filter(ze=>ze!==O):[...le,O])},selected:ae,toggleSelected:()=>j(ae?null:O),moveUp:Z<1?void 0:()=>d(le=>{const ze=le.filter(_e=>_e!==O);return ze.splice(Z-1,0,O),ze}),moveDown:Z>c.length-2?void 0:()=>d(le=>{const ze=le.filter(_e=>_e!==O);return ze.splice(Z+1,0,O),ze})}},A=O=>({...O,...D(O.number)}),M=(f?c.map(O=>n.find(Y=>Y.number===O)):n).map(A),_=O=>{const Z=M.findIndex(H=>H.chosen)-O,ne=Z>=M.length?0:Z<0?M.length-1:Z;s(M[ne].number)},W=()=>y(O=>!O);return Tb(O=>{const[Y]=O.swipe;Y!==0&&_(Y)},{target:a}),{songs:M,setChosenSong:s,starredCount:v,onlyStarred:f,toggleOnlyStarred:W}},wz=({parsedSongs:n})=>{const a=T.useRef(null),{songs:r,setChosenSong:s,starredCount:c,onlyStarred:d,selectedSong:f,toggleOnlyStarred:y}=Bb(n,a),[w]=Nb(1,20,5,a),[j,v]=Yt("menuShown",!1),[D,A]=Yt("chordsShown",!0),F=()=>v(!0),M=()=>v(!1),_=()=>A(!0),W=()=>A(!1),O=Z=>{s(Z),M()},Y=r.find(Z=>Z.chosen);return x.jsxs(ni.Fragment,{children:[!j&&x.jsx(rz,{onlyStarred:d,chordsShown:D,onClickMenu:F,onClickGuitar:D?W:_}),x.jsx("div",{ref:a,className:`container-lg pt-1 min-vh-100 bg-white songbook zoom-level-${w}`,children:!!Y&&x.jsx(Nf,{song:Y,starredCount:c,chordsShown:D})}),x.jsx(az,{songs:r,chooseSong:O,starredCount:c,selectedSong:f,onlyStarred:d,toggleOnlyStarred:y,show:j,onClose:M})]})};wz.propTypes={parsedSongs:je.array.isRequired};const Rb=()=>x.jsx(wz,{parsedSongs:jp});var to={},Pf;function Ob(){if(Pf)return to;Pf=1;var n=Bf();return to.createRoot=n.createRoot,to.hydrateRoot=n.hydrateRoot,to}var Fb=Ob();const _b=Fb.createRoot(document.getElementById("root"));_b.render(x.jsx(ni.StrictMode,{children:x.jsx(Rb,{})}));
