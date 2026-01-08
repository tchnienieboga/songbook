(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))s(c);new MutationObserver(c=>{for(const d of c)if(d.type==="childList")for(const f of d.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function r(c){const d={};return c.integrity&&(d.integrity=c.integrity),c.referrerPolicy&&(d.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?d.credentials="include":c.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function s(c){if(c.ep)return;c.ep=!0;const d=r(c);fetch(c.href,d)}})();function wo(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var fl={exports:{}},Ta={},yl={exports:{}},le={};var zm;function sp(){if(zm)return le;zm=1;var a=Symbol.for("react.element"),n=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),d=Symbol.for("react.provider"),f=Symbol.for("react.context"),y=Symbol.for("react.forward_ref"),w=Symbol.for("react.suspense"),j=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),D=Symbol.iterator;function A(g){return g===null||typeof g!="object"?null:(g=D&&g[D]||g["@@iterator"],typeof g=="function"?g:null)}var O={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},L=Object.assign,F={};function I(g,E,q){this.props=g,this.context=E,this.refs=F,this.updater=q||O}I.prototype.isReactComponent={},I.prototype.setState=function(g,E){if(typeof g!="object"&&typeof g!="function"&&g!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,g,E,"setState")},I.prototype.forceUpdate=function(g){this.updater.enqueueForceUpdate(this,g,"forceUpdate")};function J(){}J.prototype=I.prototype;function X(g,E,q){this.props=g,this.context=E,this.refs=F,this.updater=q||O}var ne=X.prototype=new J;ne.constructor=X,L(ne,I.prototype),ne.isPureReactComponent=!0;var ae=Array.isArray,U=Object.prototype.hasOwnProperty,oe={current:null},ce={key:!0,ref:!0,__self:!0,__source:!0};function Pe(g,E,q){var te,se={},ue=null,pe=null;if(E!=null)for(te in E.ref!==void 0&&(pe=E.ref),E.key!==void 0&&(ue=""+E.key),E)U.call(E,te)&&!ce.hasOwnProperty(te)&&(se[te]=E[te]);var me=arguments.length-2;if(me===1)se.children=q;else if(1<me){for(var he=Array(me),Fe=0;Fe<me;Fe++)he[Fe]=arguments[Fe+2];se.children=he}if(g&&g.defaultProps)for(te in me=g.defaultProps,me)se[te]===void 0&&(se[te]=me[te]);return{$$typeof:a,type:g,key:ue,ref:pe,props:se,_owner:oe.current}}function Ye(g,E){return{$$typeof:a,type:g.type,key:E,ref:g.ref,props:g.props,_owner:g._owner}}function Ue(g){return typeof g=="object"&&g!==null&&g.$$typeof===a}function ui(g){var E={"=":"=0",":":"=2"};return"$"+g.replace(/[=:]/g,function(q){return E[q]})}var ee=/\/+/g;function ge(g,E){return typeof g=="object"&&g!==null&&g.key!=null?ui(""+g.key):E.toString(36)}function de(g,E,q,te,se){var ue=typeof g;(ue==="undefined"||ue==="boolean")&&(g=null);var pe=!1;if(g===null)pe=!0;else switch(ue){case"string":case"number":pe=!0;break;case"object":switch(g.$$typeof){case a:case n:pe=!0}}if(pe)return pe=g,se=se(pe),g=te===""?"."+ge(pe,0):te,ae(se)?(q="",g!=null&&(q=g.replace(ee,"$&/")+"/"),de(se,E,q,"",function(Fe){return Fe})):se!=null&&(Ue(se)&&(se=Ye(se,q+(!se.key||pe&&pe.key===se.key?"":(""+se.key).replace(ee,"$&/")+"/")+g)),E.push(se)),1;if(pe=0,te=te===""?".":te+":",ae(g))for(var me=0;me<g.length;me++){ue=g[me];var he=te+ge(ue,me);pe+=de(ue,E,q,he,se)}else if(he=A(g),typeof he=="function")for(g=he.call(g),me=0;!(ue=g.next()).done;)ue=ue.value,he=te+ge(ue,me++),pe+=de(ue,E,q,he,se);else if(ue==="object")throw E=String(g),Error("Objects are not valid as a React child (found: "+(E==="[object Object]"?"object with keys {"+Object.keys(g).join(", ")+"}":E)+"). If you meant to render a collection of children, use an array instead.");return pe}function Be(g,E,q){if(g==null)return g;var te=[],se=0;return de(g,te,"","",function(ue){return E.call(q,ue,se++)}),te}function je(g){if(g._status===-1){var E=g._result;E=E(),E.then(function(q){(g._status===0||g._status===-1)&&(g._status=1,g._result=q)},function(q){(g._status===0||g._status===-1)&&(g._status=2,g._result=q)}),g._status===-1&&(g._status=0,g._result=E)}if(g._status===1)return g._result.default;throw g._result}var ze={current:null},G={transition:null},$={ReactCurrentDispatcher:ze,ReactCurrentBatchConfig:G,ReactCurrentOwner:oe};function _(){throw Error("act(...) is not supported in production builds of React.")}return le.Children={map:Be,forEach:function(g,E,q){Be(g,function(){E.apply(this,arguments)},q)},count:function(g){var E=0;return Be(g,function(){E++}),E},toArray:function(g){return Be(g,function(E){return E})||[]},only:function(g){if(!Ue(g))throw Error("React.Children.only expected to receive a single React element child.");return g}},le.Component=I,le.Fragment=r,le.Profiler=c,le.PureComponent=X,le.StrictMode=s,le.Suspense=w,le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$,le.act=_,le.cloneElement=function(g,E,q){if(g==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+g+".");var te=L({},g.props),se=g.key,ue=g.ref,pe=g._owner;if(E!=null){if(E.ref!==void 0&&(ue=E.ref,pe=oe.current),E.key!==void 0&&(se=""+E.key),g.type&&g.type.defaultProps)var me=g.type.defaultProps;for(he in E)U.call(E,he)&&!ce.hasOwnProperty(he)&&(te[he]=E[he]===void 0&&me!==void 0?me[he]:E[he])}var he=arguments.length-2;if(he===1)te.children=q;else if(1<he){me=Array(he);for(var Fe=0;Fe<he;Fe++)me[Fe]=arguments[Fe+2];te.children=me}return{$$typeof:a,type:g.type,key:se,ref:ue,props:te,_owner:pe}},le.createContext=function(g){return g={$$typeof:f,_currentValue:g,_currentValue2:g,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},g.Provider={$$typeof:d,_context:g},g.Consumer=g},le.createElement=Pe,le.createFactory=function(g){var E=Pe.bind(null,g);return E.type=g,E},le.createRef=function(){return{current:null}},le.forwardRef=function(g){return{$$typeof:y,render:g}},le.isValidElement=Ue,le.lazy=function(g){return{$$typeof:v,_payload:{_status:-1,_result:g},_init:je}},le.memo=function(g,E){return{$$typeof:j,type:g,compare:E===void 0?null:E}},le.startTransition=function(g){var E=G.transition;G.transition={};try{g()}finally{G.transition=E}},le.unstable_act=_,le.useCallback=function(g,E){return ze.current.useCallback(g,E)},le.useContext=function(g){return ze.current.useContext(g)},le.useDebugValue=function(){},le.useDeferredValue=function(g){return ze.current.useDeferredValue(g)},le.useEffect=function(g,E){return ze.current.useEffect(g,E)},le.useId=function(){return ze.current.useId()},le.useImperativeHandle=function(g,E,q){return ze.current.useImperativeHandle(g,E,q)},le.useInsertionEffect=function(g,E){return ze.current.useInsertionEffect(g,E)},le.useLayoutEffect=function(g,E){return ze.current.useLayoutEffect(g,E)},le.useMemo=function(g,E){return ze.current.useMemo(g,E)},le.useReducer=function(g,E,q){return ze.current.useReducer(g,E,q)},le.useRef=function(g){return ze.current.useRef(g)},le.useState=function(g){return ze.current.useState(g)},le.useSyncExternalStore=function(g,E,q){return ze.current.useSyncExternalStore(g,E,q)},le.useTransition=function(){return ze.current.useTransition()},le.version="18.3.1",le}var wm;function lu(){return wm||(wm=1,yl.exports=sp()),yl.exports}var pm;function lp(){if(pm)return Ta;pm=1;var a=lu(),n=Symbol.for("react.element"),r=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,c=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function f(y,w,j){var v,D={},A=null,O=null;j!==void 0&&(A=""+j),w.key!==void 0&&(A=""+w.key),w.ref!==void 0&&(O=w.ref);for(v in w)s.call(w,v)&&!d.hasOwnProperty(v)&&(D[v]=w[v]);if(y&&y.defaultProps)for(v in w=y.defaultProps,w)D[v]===void 0&&(D[v]=w[v]);return{$$typeof:n,type:y,key:A,ref:O,props:D,_owner:c.current}}return Ta.Fragment=r,Ta.jsx=f,Ta.jsxs=f,Ta}var hm;function up(){return hm||(hm=1,fl.exports=lp()),fl.exports}var x=up(),P=lu();const yi=wo(P),Nf=a=>a.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[\u0142]/g,"l").replace(/[^a-z ]/g,"").toLowerCase(),lo={DIRECTIVE:"DIRECTIVE",BODY_LINE:"BODY_LINE"},cp=a=>["title","number"].includes(a),dp=a=>{const n=/{(.*):(.*)}/,r=a.match(n);if(r){const y=r[1].trim(),w=r[2].trim();return cp(y)?{type:lo.DIRECTIVE,directive:y,value:y==="number"?parseInt(w):w}:null}const s=/\[.*?]/g,c=a.replace(s,"").trim(),d=(a.match(s)||[]).map(y=>y.replace(/[[\]]/g,"")),f={lyrics:c,chords:d};return{type:lo.BODY_LINE,body:f}},mp=a=>{const n=a.split(`
`).map(dp).filter(y=>y!==null),r=n.filter(y=>y.type===lo.BODY_LINE).map(y=>y.body),s=r.findIndex(y=>y.lyrics||y.chords.length),c=r.length-r.slice().reverse().findIndex(y=>y.lyrics||y.chords.length),d=r.slice(s,c),f=n.filter(y=>y.type===lo.DIRECTIVE).reduce((y,w)=>({...y,[w.directive]:w.value}),{});return f.title===void 0||f.number===void 0?null:{title:f.title,number:f.number,latinTitle:Nf(f.title||""),body:d}},fp=a=>a.split(/---\s*\n/).map(mp).filter(n=>n!==null),yp=`
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
`,zp=fp(yp),wp=({chord:a})=>x.jsx("span",{className:"sb-chord",children:`${a} `});var zl={exports:{}};var gm;function pp(){return gm||(gm=1,(function(a){(function(){var n={}.hasOwnProperty;function r(){for(var d="",f=0;f<arguments.length;f++){var y=arguments[f];y&&(d=c(d,s(y)))}return d}function s(d){if(typeof d=="string"||typeof d=="number")return d;if(typeof d!="object")return"";if(Array.isArray(d))return r.apply(null,d);if(d.toString!==Object.prototype.toString&&!d.toString.toString().includes("[native code]"))return d.toString();var f="";for(var y in d)n.call(d,y)&&d[y]&&(f=c(f,y));return f}function c(d,f){return f?d?d+" "+f:d+f:d}a.exports?(r.default=r,a.exports=r):window.classNames=r})()})(zl)),zl.exports}var hp=pp();const Ke=wo(hp),gp=({song:a,chordsShown:n,starredCount:r})=>x.jsxs(x.Fragment,{children:[x.jsxs("div",{className:"row songtitle mt-1 mb-1",children:[x.jsxs("div",{className:Ke("col-10",{"sb-starred-song":a.starred}),children:[a.number,". ",a.title]}),x.jsx("div",{className:"col-2 sb-star-info sb-lyrics",children:a.starred?`${a.starredNumber}/${r}`:x.jsx(x.Fragment,{children:" "})})]}),a.body.map(({lyrics:s,chords:c},d)=>x.jsxs("div",{className:"row",children:[x.jsx("div",{className:"col",children:s||x.jsx("br",{})}),n&&c.length>0&&x.jsx("div",{className:"col-4",children:c.map((f,y)=>x.jsx(wp,{chord:f},y))})]},`songline${d}`))]});function jp(a,n){if(a==null)return{};var r={};for(var s in a)if({}.hasOwnProperty.call(a,s)){if(n.indexOf(s)!==-1)continue;r[s]=a[s]}return r}function Ml(a,n){return Ml=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,s){return r.__proto__=s,r},Ml(a,n)}function kp(a,n){a.prototype=Object.create(n.prototype),a.prototype.constructor=a,Ml(a,n)}const vp=["xxl","xl","lg","md","sm","xs"],bp="xs",uu=P.createContext({prefixes:{},breakpoints:vp,minBreakpoint:bp}),{Consumer:e1,Provider:i1}=uu;function en(a,n){const{prefixes:r}=P.useContext(uu);return a||r[n]||n}function Cp(){const{dir:a}=P.useContext(uu);return a==="rtl"}function po(a){return a&&a.ownerDocument||document}function Dp(a){var n=po(a);return n&&n.defaultView||window}function Ap(a,n){return Dp(a).getComputedStyle(a,n)}var Ep=/([A-Z])/g;function Pp(a){return a.replace(Ep,"-$1").toLowerCase()}var Tp=/^ms-/;function Xr(a){return Pp(a).replace(Tp,"-ms-")}var Sp=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;function xp(a){return!!(a&&Sp.test(a))}function Qt(a,n){var r="",s="";if(typeof n=="string")return a.style.getPropertyValue(Xr(n))||Ap(a).getPropertyValue(Xr(n));Object.keys(n).forEach(function(c){var d=n[c];!d&&d!==0?a.style.removeProperty(Xr(c)):xp(c)?s+=c+"("+d+") ":r+=Xr(c)+": "+d+";"}),s&&(r+="transform: "+s+";"),a.style.cssText+=";"+r}var wl={exports:{}},pl,jm;function Gp(){if(jm)return pl;jm=1;var a="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return pl=a,pl}var hl,km;function Np(){if(km)return hl;km=1;var a=Gp();function n(){}function r(){}return r.resetWarningCache=n,hl=function(){function s(f,y,w,j,v,D){if(D!==a){var A=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw A.name="Invariant Violation",A}}s.isRequired=s;function c(){return s}var d={array:s,bool:s,func:s,number:s,object:s,string:s,symbol:s,any:s,arrayOf:c,element:s,elementType:s,instanceOf:c,node:s,objectOf:c,oneOf:c,oneOfType:c,shape:c,exact:c,checkPropTypes:r,resetWarningCache:n};return d.PropTypes=d,d},hl}var vm;function Bp(){return vm||(vm=1,wl.exports=Np()()),wl.exports}Bp();var gl={exports:{}},li={},jl={exports:{}},kl={};var bm;function Rp(){return bm||(bm=1,(function(a){function n(G,$){var _=G.length;G.push($);e:for(;0<_;){var g=_-1>>>1,E=G[g];if(0<c(E,$))G[g]=$,G[_]=E,_=g;else break e}}function r(G){return G.length===0?null:G[0]}function s(G){if(G.length===0)return null;var $=G[0],_=G.pop();if(_!==$){G[0]=_;e:for(var g=0,E=G.length,q=E>>>1;g<q;){var te=2*(g+1)-1,se=G[te],ue=te+1,pe=G[ue];if(0>c(se,_))ue<E&&0>c(pe,se)?(G[g]=pe,G[ue]=_,g=ue):(G[g]=se,G[te]=_,g=te);else if(ue<E&&0>c(pe,_))G[g]=pe,G[ue]=_,g=ue;else break e}}return $}function c(G,$){var _=G.sortIndex-$.sortIndex;return _!==0?_:G.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var d=performance;a.unstable_now=function(){return d.now()}}else{var f=Date,y=f.now();a.unstable_now=function(){return f.now()-y}}var w=[],j=[],v=1,D=null,A=3,O=!1,L=!1,F=!1,I=typeof setTimeout=="function"?setTimeout:null,J=typeof clearTimeout=="function"?clearTimeout:null,X=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ne(G){for(var $=r(j);$!==null;){if($.callback===null)s(j);else if($.startTime<=G)s(j),$.sortIndex=$.expirationTime,n(w,$);else break;$=r(j)}}function ae(G){if(F=!1,ne(G),!L)if(r(w)!==null)L=!0,je(U);else{var $=r(j);$!==null&&ze(ae,$.startTime-G)}}function U(G,$){L=!1,F&&(F=!1,J(Pe),Pe=-1),O=!0;var _=A;try{for(ne($),D=r(w);D!==null&&(!(D.expirationTime>$)||G&&!ui());){var g=D.callback;if(typeof g=="function"){D.callback=null,A=D.priorityLevel;var E=g(D.expirationTime<=$);$=a.unstable_now(),typeof E=="function"?D.callback=E:D===r(w)&&s(w),ne($)}else s(w);D=r(w)}if(D!==null)var q=!0;else{var te=r(j);te!==null&&ze(ae,te.startTime-$),q=!1}return q}finally{D=null,A=_,O=!1}}var oe=!1,ce=null,Pe=-1,Ye=5,Ue=-1;function ui(){return!(a.unstable_now()-Ue<Ye)}function ee(){if(ce!==null){var G=a.unstable_now();Ue=G;var $=!0;try{$=ce(!0,G)}finally{$?ge():(oe=!1,ce=null)}}else oe=!1}var ge;if(typeof X=="function")ge=function(){X(ee)};else if(typeof MessageChannel<"u"){var de=new MessageChannel,Be=de.port2;de.port1.onmessage=ee,ge=function(){Be.postMessage(null)}}else ge=function(){I(ee,0)};function je(G){ce=G,oe||(oe=!0,ge())}function ze(G,$){Pe=I(function(){G(a.unstable_now())},$)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(G){G.callback=null},a.unstable_continueExecution=function(){L||O||(L=!0,je(U))},a.unstable_forceFrameRate=function(G){0>G||125<G?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ye=0<G?Math.floor(1e3/G):5},a.unstable_getCurrentPriorityLevel=function(){return A},a.unstable_getFirstCallbackNode=function(){return r(w)},a.unstable_next=function(G){switch(A){case 1:case 2:case 3:var $=3;break;default:$=A}var _=A;A=$;try{return G()}finally{A=_}},a.unstable_pauseExecution=function(){},a.unstable_requestPaint=function(){},a.unstable_runWithPriority=function(G,$){switch(G){case 1:case 2:case 3:case 4:case 5:break;default:G=3}var _=A;A=G;try{return $()}finally{A=_}},a.unstable_scheduleCallback=function(G,$,_){var g=a.unstable_now();switch(typeof _=="object"&&_!==null?(_=_.delay,_=typeof _=="number"&&0<_?g+_:g):_=g,G){case 1:var E=-1;break;case 2:E=250;break;case 5:E=1073741823;break;case 4:E=1e4;break;default:E=5e3}return E=_+E,G={id:v++,callback:$,priorityLevel:G,startTime:_,expirationTime:E,sortIndex:-1},_>g?(G.sortIndex=_,n(j,G),r(w)===null&&G===r(j)&&(F?(J(Pe),Pe=-1):F=!0,ze(ae,_-g))):(G.sortIndex=E,n(w,G),L||O||(L=!0,je(U))),G},a.unstable_shouldYield=ui,a.unstable_wrapCallback=function(G){var $=A;return function(){var _=A;A=$;try{return G.apply(this,arguments)}finally{A=_}}}})(kl)),kl}var Cm;function Op(){return Cm||(Cm=1,jl.exports=Rp()),jl.exports}var Dm;function Fp(){if(Dm)return li;Dm=1;var a=lu(),n=Op();function r(e){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)i+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,c={};function d(e,i){f(e,i),f(e+"Capture",i)}function f(e,i){for(c[e]=i,e=0;e<i.length;e++)s.add(i[e])}var y=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),w=Object.prototype.hasOwnProperty,j=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},D={};function A(e){return w.call(D,e)?!0:w.call(v,e)?!1:j.test(e)?D[e]=!0:(v[e]=!0,!1)}function O(e,i,t,o){if(t!==null&&t.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return o?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function L(e,i,t,o){if(i===null||typeof i>"u"||O(e,i,t,o))return!0;if(o)return!1;if(t!==null)switch(t.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function F(e,i,t,o,l,u,m){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=o,this.attributeNamespace=l,this.mustUseProperty=t,this.propertyName=e,this.type=i,this.sanitizeURL=u,this.removeEmptyString=m}var I={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){I[e]=new F(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var i=e[0];I[i]=new F(i,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){I[e]=new F(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){I[e]=new F(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){I[e]=new F(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){I[e]=new F(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){I[e]=new F(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){I[e]=new F(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){I[e]=new F(e,5,!1,e.toLowerCase(),null,!1,!1)});var J=/[\-:]([a-z])/g;function X(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var i=e.replace(J,X);I[i]=new F(i,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var i=e.replace(J,X);I[i]=new F(i,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var i=e.replace(J,X);I[i]=new F(i,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){I[e]=new F(e,1,!1,e.toLowerCase(),null,!1,!1)}),I.xlinkHref=new F("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){I[e]=new F(e,1,!1,e.toLowerCase(),null,!0,!0)});function ne(e,i,t,o){var l=I.hasOwnProperty(i)?I[i]:null;(l!==null?l.type!==0:o||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(L(i,t,l,o)&&(t=null),o||l===null?A(i)&&(t===null?e.removeAttribute(i):e.setAttribute(i,""+t)):l.mustUseProperty?e[l.propertyName]=t===null?l.type===3?!1:"":t:(i=l.attributeName,o=l.attributeNamespace,t===null?e.removeAttribute(i):(l=l.type,t=l===3||l===4&&t===!0?"":""+t,o?e.setAttributeNS(o,i,t):e.setAttribute(i,t))))}var ae=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,U=Symbol.for("react.element"),oe=Symbol.for("react.portal"),ce=Symbol.for("react.fragment"),Pe=Symbol.for("react.strict_mode"),Ye=Symbol.for("react.profiler"),Ue=Symbol.for("react.provider"),ui=Symbol.for("react.context"),ee=Symbol.for("react.forward_ref"),ge=Symbol.for("react.suspense"),de=Symbol.for("react.suspense_list"),Be=Symbol.for("react.memo"),je=Symbol.for("react.lazy"),ze=Symbol.for("react.offscreen"),G=Symbol.iterator;function $(e){return e===null||typeof e!="object"?null:(e=G&&e[G]||e["@@iterator"],typeof e=="function"?e:null)}var _=Object.assign,g;function E(e){if(g===void 0)try{throw Error()}catch(t){var i=t.stack.trim().match(/\n( *(at )?)/);g=i&&i[1]||""}return`
`+g+e}var q=!1;function te(e,i){if(!e||q)return"";q=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(C){var o=C}Reflect.construct(e,[],i)}else{try{i.call()}catch(C){o=C}e.call(i.prototype)}else{try{throw Error()}catch(C){o=C}e()}}catch(C){if(C&&o&&typeof C.stack=="string"){for(var l=C.stack.split(`
`),u=o.stack.split(`
`),m=l.length-1,z=u.length-1;1<=m&&0<=z&&l[m]!==u[z];)z--;for(;1<=m&&0<=z;m--,z--)if(l[m]!==u[z]){if(m!==1||z!==1)do if(m--,z--,0>z||l[m]!==u[z]){var p=`
`+l[m].replace(" at new "," at ");return e.displayName&&p.includes("<anonymous>")&&(p=p.replace("<anonymous>",e.displayName)),p}while(1<=m&&0<=z);break}}}finally{q=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?E(e):""}function se(e){switch(e.tag){case 5:return E(e.type);case 16:return E("Lazy");case 13:return E("Suspense");case 19:return E("SuspenseList");case 0:case 2:case 15:return e=te(e.type,!1),e;case 11:return e=te(e.type.render,!1),e;case 1:return e=te(e.type,!0),e;default:return""}}function ue(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ce:return"Fragment";case oe:return"Portal";case Ye:return"Profiler";case Pe:return"StrictMode";case ge:return"Suspense";case de:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ui:return(e.displayName||"Context")+".Consumer";case Ue:return(e._context.displayName||"Context")+".Provider";case ee:var i=e.render;return e=e.displayName,e||(e=i.displayName||i.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Be:return i=e.displayName||null,i!==null?i:ue(e.type)||"Memo";case je:i=e._payload,e=e._init;try{return ue(e(i))}catch{}}return null}function pe(e){var i=e.type;switch(e.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=i.render,e=e.displayName||e.name||"",i.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ue(i);case 8:return i===Pe?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function me(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function he(e){var i=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Fe(e){var i=he(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,i),o=""+e[i];if(!e.hasOwnProperty(i)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var l=t.get,u=t.set;return Object.defineProperty(e,i,{configurable:!0,get:function(){return l.call(this)},set:function(m){o=""+m,u.call(this,m)}}),Object.defineProperty(e,i,{enumerable:t.enumerable}),{getValue:function(){return o},setValue:function(m){o=""+m},stopTracking:function(){e._valueTracker=null,delete e[i]}}}}function Ji(e){e._valueTracker||(e._valueTracker=Fe(e))}function Wi(e){if(!e)return!1;var i=e._valueTracker;if(!i)return!0;var t=i.getValue(),o="";return e&&(o=he(e)?e.checked?"true":"false":e.value),e=o,e!==t?(i.setValue(e),!0):!1}function Gi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ni(e,i){var t=i.checked;return _({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function ve(e,i){var t=i.defaultValue==null?"":i.defaultValue,o=i.checked!=null?i.checked:i.defaultChecked;t=me(i.value!=null?i.value:t),e._wrapperState={initialChecked:o,initialValue:t,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function Tt(e,i){i=i.checked,i!=null&&ne(e,"checked",i,!1)}function Li(e,i){Tt(e,i);var t=me(i.value),o=i.type;if(t!=null)o==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(o==="submit"||o==="reset"){e.removeAttribute("value");return}i.hasOwnProperty("value")?Wn(e,i.type,t):i.hasOwnProperty("defaultValue")&&Wn(e,i.type,me(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(e.defaultChecked=!!i.defaultChecked)}function Wa(e,i,t){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var o=i.type;if(!(o!=="submit"&&o!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+e._wrapperState.initialValue,t||i===e.value||(e.value=i),e.defaultValue=i}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function Wn(e,i,t){(i!=="number"||Gi(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var St=Array.isArray;function rt(e,i,t,o){if(e=e.options,i){i={};for(var l=0;l<t.length;l++)i["$"+t[l]]=!0;for(t=0;t<e.length;t++)l=i.hasOwnProperty("$"+e[t].value),e[t].selected!==l&&(e[t].selected=l),l&&o&&(e[t].defaultSelected=!0)}else{for(t=""+me(t),i=null,l=0;l<e.length;l++){if(e[l].value===t){e[l].selected=!0,o&&(e[l].defaultSelected=!0);return}i!==null||e[l].disabled||(i=e[l])}i!==null&&(i.selected=!0)}}function Ln(e,i){if(i.dangerouslySetInnerHTML!=null)throw Error(r(91));return _({},i,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function La(e,i){var t=i.value;if(t==null){if(t=i.children,i=i.defaultValue,t!=null){if(i!=null)throw Error(r(92));if(St(t)){if(1<t.length)throw Error(r(93));t=t[0]}i=t}i==null&&(i=""),t=i}e._wrapperState={initialValue:me(t)}}function Hn(e,i){var t=me(i.value),o=me(i.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),i.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),o!=null&&(e.defaultValue=""+o)}function Ha(e){var i=e.textContent;i===e._wrapperState.initialValue&&i!==""&&i!==null&&(e.value=i)}function fe(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Bi(e,i){return e==null||e==="http://www.w3.org/1999/xhtml"?fe(i):e==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var xt,Tu=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,t,o,l){MSApp.execUnsafeLocalFunction(function(){return e(i,t,o,l)})}:e})(function(e,i){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=i;else{for(xt=xt||document.createElement("div"),xt.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=xt.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;i.firstChild;)e.appendChild(i.firstChild)}});function Kn(e,i){if(i){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=i;return}}e.textContent=i}var Un={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},dz=["Webkit","ms","Moz","O"];Object.keys(Un).forEach(function(e){dz.forEach(function(i){i=i+e.charAt(0).toUpperCase()+e.substring(1),Un[i]=Un[e]})});function Su(e,i,t){return i==null||typeof i=="boolean"||i===""?"":t||typeof i!="number"||i===0||Un.hasOwnProperty(e)&&Un[e]?(""+i).trim():i+"px"}function xu(e,i){e=e.style;for(var t in i)if(i.hasOwnProperty(t)){var o=t.indexOf("--")===0,l=Su(t,i[t],o);t==="float"&&(t="cssFloat"),o?e.setProperty(t,l):e[t]=l}}var mz=_({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Do(e,i){if(i){if(mz[e]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(r(137,e));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(r(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(r(61))}if(i.style!=null&&typeof i.style!="object")throw Error(r(62))}}function Ao(e,i){if(e.indexOf("-")===-1)return typeof i.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Eo=null;function Po(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var To=null,nn=null,an=null;function Gu(e){if(e=ya(e)){if(typeof To!="function")throw Error(r(280));var i=e.stateNode;i&&(i=fr(i),To(e.stateNode,e.type,i))}}function Nu(e){nn?an?an.push(e):an=[e]:nn=e}function Bu(){if(nn){var e=nn,i=an;if(an=nn=null,Gu(e),i)for(e=0;e<i.length;e++)Gu(i[e])}}function Ru(e,i){return e(i)}function Ou(){}var So=!1;function Fu(e,i,t){if(So)return e(i,t);So=!0;try{return Ru(e,i,t)}finally{So=!1,(nn!==null||an!==null)&&(Ou(),Bu())}}function $n(e,i){var t=e.stateNode;if(t===null)return null;var o=fr(t);if(o===null)return null;t=o[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(r(231,i,typeof t));return t}var xo=!1;if(y)try{var Zn={};Object.defineProperty(Zn,"passive",{get:function(){xo=!0}}),window.addEventListener("test",Zn,Zn),window.removeEventListener("test",Zn,Zn)}catch{xo=!1}function fz(e,i,t,o,l,u,m,z,p){var C=Array.prototype.slice.call(arguments,3);try{i.apply(t,C)}catch(S){this.onError(S)}}var Vn=!1,Ka=null,Ua=!1,Go=null,yz={onError:function(e){Vn=!0,Ka=e}};function zz(e,i,t,o,l,u,m,z,p){Vn=!1,Ka=null,fz.apply(yz,arguments)}function wz(e,i,t,o,l,u,m,z,p){if(zz.apply(this,arguments),Vn){if(Vn){var C=Ka;Vn=!1,Ka=null}else throw Error(r(198));Ua||(Ua=!0,Go=C)}}function Gt(e){var i=e,t=e;if(e.alternate)for(;i.return;)i=i.return;else{e=i;do i=e,(i.flags&4098)!==0&&(t=i.return),e=i.return;while(e)}return i.tag===3?t:null}function _u(e){if(e.tag===13){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function Mu(e){if(Gt(e)!==e)throw Error(r(188))}function pz(e){var i=e.alternate;if(!i){if(i=Gt(e),i===null)throw Error(r(188));return i!==e?null:e}for(var t=e,o=i;;){var l=t.return;if(l===null)break;var u=l.alternate;if(u===null){if(o=l.return,o!==null){t=o;continue}break}if(l.child===u.child){for(u=l.child;u;){if(u===t)return Mu(l),e;if(u===o)return Mu(l),i;u=u.sibling}throw Error(r(188))}if(t.return!==o.return)t=l,o=u;else{for(var m=!1,z=l.child;z;){if(z===t){m=!0,t=l,o=u;break}if(z===o){m=!0,o=l,t=u;break}z=z.sibling}if(!m){for(z=u.child;z;){if(z===t){m=!0,t=u,o=l;break}if(z===o){m=!0,o=u,t=l;break}z=z.sibling}if(!m)throw Error(r(189))}}if(t.alternate!==o)throw Error(r(190))}if(t.tag!==3)throw Error(r(188));return t.stateNode.current===t?e:i}function Iu(e){return e=pz(e),e!==null?Ju(e):null}function Ju(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var i=Ju(e);if(i!==null)return i;e=e.sibling}return null}var Wu=n.unstable_scheduleCallback,Lu=n.unstable_cancelCallback,hz=n.unstable_shouldYield,gz=n.unstable_requestPaint,Re=n.unstable_now,jz=n.unstable_getCurrentPriorityLevel,No=n.unstable_ImmediatePriority,Hu=n.unstable_UserBlockingPriority,$a=n.unstable_NormalPriority,kz=n.unstable_LowPriority,Ku=n.unstable_IdlePriority,Za=null,Ri=null;function vz(e){if(Ri&&typeof Ri.onCommitFiberRoot=="function")try{Ri.onCommitFiberRoot(Za,e,void 0,(e.current.flags&128)===128)}catch{}}var bi=Math.clz32?Math.clz32:Dz,bz=Math.log,Cz=Math.LN2;function Dz(e){return e>>>=0,e===0?32:31-(bz(e)/Cz|0)|0}var Va=64,Ya=4194304;function Yn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Qa(e,i){var t=e.pendingLanes;if(t===0)return 0;var o=0,l=e.suspendedLanes,u=e.pingedLanes,m=t&268435455;if(m!==0){var z=m&~l;z!==0?o=Yn(z):(u&=m,u!==0&&(o=Yn(u)))}else m=t&~l,m!==0?o=Yn(m):u!==0&&(o=Yn(u));if(o===0)return 0;if(i!==0&&i!==o&&(i&l)===0&&(l=o&-o,u=i&-i,l>=u||l===16&&(u&4194240)!==0))return i;if((o&4)!==0&&(o|=t&16),i=e.entangledLanes,i!==0)for(e=e.entanglements,i&=o;0<i;)t=31-bi(i),l=1<<t,o|=e[t],i&=~l;return o}function Az(e,i){switch(e){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ez(e,i){for(var t=e.suspendedLanes,o=e.pingedLanes,l=e.expirationTimes,u=e.pendingLanes;0<u;){var m=31-bi(u),z=1<<m,p=l[m];p===-1?((z&t)===0||(z&o)!==0)&&(l[m]=Az(z,i)):p<=i&&(e.expiredLanes|=z),u&=~z}}function Bo(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Uu(){var e=Va;return Va<<=1,(Va&4194240)===0&&(Va=64),e}function Ro(e){for(var i=[],t=0;31>t;t++)i.push(e);return i}function Qn(e,i,t){e.pendingLanes|=i,i!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,i=31-bi(i),e[i]=t}function Pz(e,i){var t=e.pendingLanes&~i;e.pendingLanes=i,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=i,e.mutableReadLanes&=i,e.entangledLanes&=i,i=e.entanglements;var o=e.eventTimes;for(e=e.expirationTimes;0<t;){var l=31-bi(t),u=1<<l;i[l]=0,o[l]=-1,e[l]=-1,t&=~u}}function Oo(e,i){var t=e.entangledLanes|=i;for(e=e.entanglements;t;){var o=31-bi(t),l=1<<o;l&i|e[o]&i&&(e[o]|=i),t&=~l}}var ke=0;function $u(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Zu,Fo,Vu,Yu,Qu,_o=!1,Xa=[],ot=null,st=null,lt=null,Xn=new Map,qn=new Map,ut=[],Tz="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Xu(e,i){switch(e){case"focusin":case"focusout":ot=null;break;case"dragenter":case"dragleave":st=null;break;case"mouseover":case"mouseout":lt=null;break;case"pointerover":case"pointerout":Xn.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":qn.delete(i.pointerId)}}function ea(e,i,t,o,l,u){return e===null||e.nativeEvent!==u?(e={blockedOn:i,domEventName:t,eventSystemFlags:o,nativeEvent:u,targetContainers:[l]},i!==null&&(i=ya(i),i!==null&&Fo(i)),e):(e.eventSystemFlags|=o,i=e.targetContainers,l!==null&&i.indexOf(l)===-1&&i.push(l),e)}function Sz(e,i,t,o,l){switch(i){case"focusin":return ot=ea(ot,e,i,t,o,l),!0;case"dragenter":return st=ea(st,e,i,t,o,l),!0;case"mouseover":return lt=ea(lt,e,i,t,o,l),!0;case"pointerover":var u=l.pointerId;return Xn.set(u,ea(Xn.get(u)||null,e,i,t,o,l)),!0;case"gotpointercapture":return u=l.pointerId,qn.set(u,ea(qn.get(u)||null,e,i,t,o,l)),!0}return!1}function qu(e){var i=Nt(e.target);if(i!==null){var t=Gt(i);if(t!==null){if(i=t.tag,i===13){if(i=_u(t),i!==null){e.blockedOn=i,Qu(e.priority,function(){Vu(t)});return}}else if(i===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function qa(e){if(e.blockedOn!==null)return!1;for(var i=e.targetContainers;0<i.length;){var t=Io(e.domEventName,e.eventSystemFlags,i[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var o=new t.constructor(t.type,t);Eo=o,t.target.dispatchEvent(o),Eo=null}else return i=ya(t),i!==null&&Fo(i),e.blockedOn=t,!1;i.shift()}return!0}function ec(e,i,t){qa(e)&&t.delete(i)}function xz(){_o=!1,ot!==null&&qa(ot)&&(ot=null),st!==null&&qa(st)&&(st=null),lt!==null&&qa(lt)&&(lt=null),Xn.forEach(ec),qn.forEach(ec)}function ia(e,i){e.blockedOn===i&&(e.blockedOn=null,_o||(_o=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,xz)))}function ta(e){function i(l){return ia(l,e)}if(0<Xa.length){ia(Xa[0],e);for(var t=1;t<Xa.length;t++){var o=Xa[t];o.blockedOn===e&&(o.blockedOn=null)}}for(ot!==null&&ia(ot,e),st!==null&&ia(st,e),lt!==null&&ia(lt,e),Xn.forEach(i),qn.forEach(i),t=0;t<ut.length;t++)o=ut[t],o.blockedOn===e&&(o.blockedOn=null);for(;0<ut.length&&(t=ut[0],t.blockedOn===null);)qu(t),t.blockedOn===null&&ut.shift()}var rn=ae.ReactCurrentBatchConfig,er=!0;function Gz(e,i,t,o){var l=ke,u=rn.transition;rn.transition=null;try{ke=1,Mo(e,i,t,o)}finally{ke=l,rn.transition=u}}function Nz(e,i,t,o){var l=ke,u=rn.transition;rn.transition=null;try{ke=4,Mo(e,i,t,o)}finally{ke=l,rn.transition=u}}function Mo(e,i,t,o){if(er){var l=Io(e,i,t,o);if(l===null)ns(e,i,o,ir,t),Xu(e,o);else if(Sz(l,e,i,t,o))o.stopPropagation();else if(Xu(e,o),i&4&&-1<Tz.indexOf(e)){for(;l!==null;){var u=ya(l);if(u!==null&&Zu(u),u=Io(e,i,t,o),u===null&&ns(e,i,o,ir,t),u===l)break;l=u}l!==null&&o.stopPropagation()}else ns(e,i,o,null,t)}}var ir=null;function Io(e,i,t,o){if(ir=null,e=Po(o),e=Nt(e),e!==null)if(i=Gt(e),i===null)e=null;else if(t=i.tag,t===13){if(e=_u(i),e!==null)return e;e=null}else if(t===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;e=null}else i!==e&&(e=null);return ir=e,null}function ic(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(jz()){case No:return 1;case Hu:return 4;case $a:case kz:return 16;case Ku:return 536870912;default:return 16}default:return 16}}var ct=null,Jo=null,tr=null;function tc(){if(tr)return tr;var e,i=Jo,t=i.length,o,l="value"in ct?ct.value:ct.textContent,u=l.length;for(e=0;e<t&&i[e]===l[e];e++);var m=t-e;for(o=1;o<=m&&i[t-o]===l[u-o];o++);return tr=l.slice(e,1<o?1-o:void 0)}function nr(e){var i=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&i===13&&(e=13)):e=i,e===10&&(e=13),32<=e||e===13?e:0}function ar(){return!0}function nc(){return!1}function ci(e){function i(t,o,l,u,m){this._reactName=t,this._targetInst=l,this.type=o,this.nativeEvent=u,this.target=m,this.currentTarget=null;for(var z in e)e.hasOwnProperty(z)&&(t=e[z],this[z]=t?t(u):u[z]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?ar:nc,this.isPropagationStopped=nc,this}return _(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=ar)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=ar)},persist:function(){},isPersistent:ar}),i}var on={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Wo=ci(on),na=_({},on,{view:0,detail:0}),Bz=ci(na),Lo,Ho,aa,rr=_({},na,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Uo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==aa&&(aa&&e.type==="mousemove"?(Lo=e.screenX-aa.screenX,Ho=e.screenY-aa.screenY):Ho=Lo=0,aa=e),Lo)},movementY:function(e){return"movementY"in e?e.movementY:Ho}}),ac=ci(rr),Rz=_({},rr,{dataTransfer:0}),Oz=ci(Rz),Fz=_({},na,{relatedTarget:0}),Ko=ci(Fz),_z=_({},on,{animationName:0,elapsedTime:0,pseudoElement:0}),Mz=ci(_z),Iz=_({},on,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Jz=ci(Iz),Wz=_({},on,{data:0}),rc=ci(Wz),Lz={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Hz={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Kz={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Uz(e){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(e):(e=Kz[e])?!!i[e]:!1}function Uo(){return Uz}var $z=_({},na,{key:function(e){if(e.key){var i=Lz[e.key]||e.key;if(i!=="Unidentified")return i}return e.type==="keypress"?(e=nr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Hz[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Uo,charCode:function(e){return e.type==="keypress"?nr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?nr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Zz=ci($z),Vz=_({},rr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),oc=ci(Vz),Yz=_({},na,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Uo}),Qz=ci(Yz),Xz=_({},on,{propertyName:0,elapsedTime:0,pseudoElement:0}),qz=ci(Xz),ew=_({},rr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),iw=ci(ew),tw=[9,13,27,32],$o=y&&"CompositionEvent"in window,ra=null;y&&"documentMode"in document&&(ra=document.documentMode);var nw=y&&"TextEvent"in window&&!ra,sc=y&&(!$o||ra&&8<ra&&11>=ra),lc=" ",uc=!1;function cc(e,i){switch(e){case"keyup":return tw.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function dc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var sn=!1;function aw(e,i){switch(e){case"compositionend":return dc(i);case"keypress":return i.which!==32?null:(uc=!0,lc);case"textInput":return e=i.data,e===lc&&uc?null:e;default:return null}}function rw(e,i){if(sn)return e==="compositionend"||!$o&&cc(e,i)?(e=tc(),tr=Jo=ct=null,sn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return sc&&i.locale!=="ko"?null:i.data;default:return null}}var ow={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function mc(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i==="input"?!!ow[e.type]:i==="textarea"}function fc(e,i,t,o){Nu(o),i=cr(i,"onChange"),0<i.length&&(t=new Wo("onChange","change",null,t,o),e.push({event:t,listeners:i}))}var oa=null,sa=null;function sw(e){xc(e,0)}function or(e){var i=mn(e);if(Wi(i))return e}function lw(e,i){if(e==="change")return i}var yc=!1;if(y){var Zo;if(y){var Vo="oninput"in document;if(!Vo){var zc=document.createElement("div");zc.setAttribute("oninput","return;"),Vo=typeof zc.oninput=="function"}Zo=Vo}else Zo=!1;yc=Zo&&(!document.documentMode||9<document.documentMode)}function wc(){oa&&(oa.detachEvent("onpropertychange",pc),sa=oa=null)}function pc(e){if(e.propertyName==="value"&&or(sa)){var i=[];fc(i,sa,e,Po(e)),Fu(sw,i)}}function uw(e,i,t){e==="focusin"?(wc(),oa=i,sa=t,oa.attachEvent("onpropertychange",pc)):e==="focusout"&&wc()}function cw(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return or(sa)}function dw(e,i){if(e==="click")return or(i)}function mw(e,i){if(e==="input"||e==="change")return or(i)}function fw(e,i){return e===i&&(e!==0||1/e===1/i)||e!==e&&i!==i}var Ci=typeof Object.is=="function"?Object.is:fw;function la(e,i){if(Ci(e,i))return!0;if(typeof e!="object"||e===null||typeof i!="object"||i===null)return!1;var t=Object.keys(e),o=Object.keys(i);if(t.length!==o.length)return!1;for(o=0;o<t.length;o++){var l=t[o];if(!w.call(i,l)||!Ci(e[l],i[l]))return!1}return!0}function hc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function gc(e,i){var t=hc(e);e=0;for(var o;t;){if(t.nodeType===3){if(o=e+t.textContent.length,e<=i&&o>=i)return{node:t,offset:i-e};e=o}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=hc(t)}}function jc(e,i){return e&&i?e===i?!0:e&&e.nodeType===3?!1:i&&i.nodeType===3?jc(e,i.parentNode):"contains"in e?e.contains(i):e.compareDocumentPosition?!!(e.compareDocumentPosition(i)&16):!1:!1}function kc(){for(var e=window,i=Gi();i instanceof e.HTMLIFrameElement;){try{var t=typeof i.contentWindow.location.href=="string"}catch{t=!1}if(t)e=i.contentWindow;else break;i=Gi(e.document)}return i}function Yo(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i&&(i==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||i==="textarea"||e.contentEditable==="true")}function yw(e){var i=kc(),t=e.focusedElem,o=e.selectionRange;if(i!==t&&t&&t.ownerDocument&&jc(t.ownerDocument.documentElement,t)){if(o!==null&&Yo(t)){if(i=o.start,e=o.end,e===void 0&&(e=i),"selectionStart"in t)t.selectionStart=i,t.selectionEnd=Math.min(e,t.value.length);else if(e=(i=t.ownerDocument||document)&&i.defaultView||window,e.getSelection){e=e.getSelection();var l=t.textContent.length,u=Math.min(o.start,l);o=o.end===void 0?u:Math.min(o.end,l),!e.extend&&u>o&&(l=o,o=u,u=l),l=gc(t,u);var m=gc(t,o);l&&m&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==m.node||e.focusOffset!==m.offset)&&(i=i.createRange(),i.setStart(l.node,l.offset),e.removeAllRanges(),u>o?(e.addRange(i),e.extend(m.node,m.offset)):(i.setEnd(m.node,m.offset),e.addRange(i)))}}for(i=[],e=t;e=e.parentNode;)e.nodeType===1&&i.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<i.length;t++)e=i[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var zw=y&&"documentMode"in document&&11>=document.documentMode,ln=null,Qo=null,ua=null,Xo=!1;function vc(e,i,t){var o=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Xo||ln==null||ln!==Gi(o)||(o=ln,"selectionStart"in o&&Yo(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),ua&&la(ua,o)||(ua=o,o=cr(Qo,"onSelect"),0<o.length&&(i=new Wo("onSelect","select",null,i,t),e.push({event:i,listeners:o}),i.target=ln)))}function sr(e,i){var t={};return t[e.toLowerCase()]=i.toLowerCase(),t["Webkit"+e]="webkit"+i,t["Moz"+e]="moz"+i,t}var un={animationend:sr("Animation","AnimationEnd"),animationiteration:sr("Animation","AnimationIteration"),animationstart:sr("Animation","AnimationStart"),transitionend:sr("Transition","TransitionEnd")},qo={},bc={};y&&(bc=document.createElement("div").style,"AnimationEvent"in window||(delete un.animationend.animation,delete un.animationiteration.animation,delete un.animationstart.animation),"TransitionEvent"in window||delete un.transitionend.transition);function lr(e){if(qo[e])return qo[e];if(!un[e])return e;var i=un[e],t;for(t in i)if(i.hasOwnProperty(t)&&t in bc)return qo[e]=i[t];return e}var Cc=lr("animationend"),Dc=lr("animationiteration"),Ac=lr("animationstart"),Ec=lr("transitionend"),Pc=new Map,Tc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function dt(e,i){Pc.set(e,i),d(i,[e])}for(var es=0;es<Tc.length;es++){var is=Tc[es],ww=is.toLowerCase(),pw=is[0].toUpperCase()+is.slice(1);dt(ww,"on"+pw)}dt(Cc,"onAnimationEnd"),dt(Dc,"onAnimationIteration"),dt(Ac,"onAnimationStart"),dt("dblclick","onDoubleClick"),dt("focusin","onFocus"),dt("focusout","onBlur"),dt(Ec,"onTransitionEnd"),f("onMouseEnter",["mouseout","mouseover"]),f("onMouseLeave",["mouseout","mouseover"]),f("onPointerEnter",["pointerout","pointerover"]),f("onPointerLeave",["pointerout","pointerover"]),d("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),d("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),d("onBeforeInput",["compositionend","keypress","textInput","paste"]),d("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),d("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),d("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ca="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),hw=new Set("cancel close invalid load scroll toggle".split(" ").concat(ca));function Sc(e,i,t){var o=e.type||"unknown-event";e.currentTarget=t,wz(o,i,void 0,e),e.currentTarget=null}function xc(e,i){i=(i&4)!==0;for(var t=0;t<e.length;t++){var o=e[t],l=o.event;o=o.listeners;e:{var u=void 0;if(i)for(var m=o.length-1;0<=m;m--){var z=o[m],p=z.instance,C=z.currentTarget;if(z=z.listener,p!==u&&l.isPropagationStopped())break e;Sc(l,z,C),u=p}else for(m=0;m<o.length;m++){if(z=o[m],p=z.instance,C=z.currentTarget,z=z.listener,p!==u&&l.isPropagationStopped())break e;Sc(l,z,C),u=p}}}if(Ua)throw e=Go,Ua=!1,Go=null,e}function Ce(e,i){var t=i[us];t===void 0&&(t=i[us]=new Set);var o=e+"__bubble";t.has(o)||(Gc(i,e,2,!1),t.add(o))}function ts(e,i,t){var o=0;i&&(o|=4),Gc(t,e,o,i)}var ur="_reactListening"+Math.random().toString(36).slice(2);function da(e){if(!e[ur]){e[ur]=!0,s.forEach(function(t){t!=="selectionchange"&&(hw.has(t)||ts(t,!1,e),ts(t,!0,e))});var i=e.nodeType===9?e:e.ownerDocument;i===null||i[ur]||(i[ur]=!0,ts("selectionchange",!1,i))}}function Gc(e,i,t,o){switch(ic(i)){case 1:var l=Gz;break;case 4:l=Nz;break;default:l=Mo}t=l.bind(null,i,t,e),l=void 0,!xo||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(l=!0),o?l!==void 0?e.addEventListener(i,t,{capture:!0,passive:l}):e.addEventListener(i,t,!0):l!==void 0?e.addEventListener(i,t,{passive:l}):e.addEventListener(i,t,!1)}function ns(e,i,t,o,l){var u=o;if((i&1)===0&&(i&2)===0&&o!==null)e:for(;;){if(o===null)return;var m=o.tag;if(m===3||m===4){var z=o.stateNode.containerInfo;if(z===l||z.nodeType===8&&z.parentNode===l)break;if(m===4)for(m=o.return;m!==null;){var p=m.tag;if((p===3||p===4)&&(p=m.stateNode.containerInfo,p===l||p.nodeType===8&&p.parentNode===l))return;m=m.return}for(;z!==null;){if(m=Nt(z),m===null)return;if(p=m.tag,p===5||p===6){o=u=m;continue e}z=z.parentNode}}o=o.return}Fu(function(){var C=u,S=Po(t),N=[];e:{var T=Pc.get(e);if(T!==void 0){var M=Wo,H=e;switch(e){case"keypress":if(nr(t)===0)break e;case"keydown":case"keyup":M=Zz;break;case"focusin":H="focus",M=Ko;break;case"focusout":H="blur",M=Ko;break;case"beforeblur":case"afterblur":M=Ko;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":M=ac;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":M=Oz;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":M=Qz;break;case Cc:case Dc:case Ac:M=Mz;break;case Ec:M=qz;break;case"scroll":M=Bz;break;case"wheel":M=iw;break;case"copy":case"cut":case"paste":M=Jz;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":M=oc}var K=(i&4)!==0,Oe=!K&&e==="scroll",k=K?T!==null?T+"Capture":null:T;K=[];for(var h=C,b;h!==null;){b=h;var R=b.stateNode;if(b.tag===5&&R!==null&&(b=R,k!==null&&(R=$n(h,k),R!=null&&K.push(ma(h,R,b)))),Oe)break;h=h.return}0<K.length&&(T=new M(T,H,null,t,S),N.push({event:T,listeners:K}))}}if((i&7)===0){e:{if(T=e==="mouseover"||e==="pointerover",M=e==="mouseout"||e==="pointerout",T&&t!==Eo&&(H=t.relatedTarget||t.fromElement)&&(Nt(H)||H[Hi]))break e;if((M||T)&&(T=S.window===S?S:(T=S.ownerDocument)?T.defaultView||T.parentWindow:window,M?(H=t.relatedTarget||t.toElement,M=C,H=H?Nt(H):null,H!==null&&(Oe=Gt(H),H!==Oe||H.tag!==5&&H.tag!==6)&&(H=null)):(M=null,H=C),M!==H)){if(K=ac,R="onMouseLeave",k="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(K=oc,R="onPointerLeave",k="onPointerEnter",h="pointer"),Oe=M==null?T:mn(M),b=H==null?T:mn(H),T=new K(R,h+"leave",M,t,S),T.target=Oe,T.relatedTarget=b,R=null,Nt(S)===C&&(K=new K(k,h+"enter",H,t,S),K.target=b,K.relatedTarget=Oe,R=K),Oe=R,M&&H)i:{for(K=M,k=H,h=0,b=K;b;b=cn(b))h++;for(b=0,R=k;R;R=cn(R))b++;for(;0<h-b;)K=cn(K),h--;for(;0<b-h;)k=cn(k),b--;for(;h--;){if(K===k||k!==null&&K===k.alternate)break i;K=cn(K),k=cn(k)}K=null}else K=null;M!==null&&Nc(N,T,M,K,!1),H!==null&&Oe!==null&&Nc(N,Oe,H,K,!0)}}e:{if(T=C?mn(C):window,M=T.nodeName&&T.nodeName.toLowerCase(),M==="select"||M==="input"&&T.type==="file")var Z=lw;else if(mc(T))if(yc)Z=mw;else{Z=cw;var Y=uw}else(M=T.nodeName)&&M.toLowerCase()==="input"&&(T.type==="checkbox"||T.type==="radio")&&(Z=dw);if(Z&&(Z=Z(e,C))){fc(N,Z,t,S);break e}Y&&Y(e,T,C),e==="focusout"&&(Y=T._wrapperState)&&Y.controlled&&T.type==="number"&&Wn(T,"number",T.value)}switch(Y=C?mn(C):window,e){case"focusin":(mc(Y)||Y.contentEditable==="true")&&(ln=Y,Qo=C,ua=null);break;case"focusout":ua=Qo=ln=null;break;case"mousedown":Xo=!0;break;case"contextmenu":case"mouseup":case"dragend":Xo=!1,vc(N,t,S);break;case"selectionchange":if(zw)break;case"keydown":case"keyup":vc(N,t,S)}var Q;if($o)e:{switch(e){case"compositionstart":var ie="onCompositionStart";break e;case"compositionend":ie="onCompositionEnd";break e;case"compositionupdate":ie="onCompositionUpdate";break e}ie=void 0}else sn?cc(e,t)&&(ie="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(ie="onCompositionStart");ie&&(sc&&t.locale!=="ko"&&(sn||ie!=="onCompositionStart"?ie==="onCompositionEnd"&&sn&&(Q=tc()):(ct=S,Jo="value"in ct?ct.value:ct.textContent,sn=!0)),Y=cr(C,ie),0<Y.length&&(ie=new rc(ie,e,null,t,S),N.push({event:ie,listeners:Y}),Q?ie.data=Q:(Q=dc(t),Q!==null&&(ie.data=Q)))),(Q=nw?aw(e,t):rw(e,t))&&(C=cr(C,"onBeforeInput"),0<C.length&&(S=new rc("onBeforeInput","beforeinput",null,t,S),N.push({event:S,listeners:C}),S.data=Q))}xc(N,i)})}function ma(e,i,t){return{instance:e,listener:i,currentTarget:t}}function cr(e,i){for(var t=i+"Capture",o=[];e!==null;){var l=e,u=l.stateNode;l.tag===5&&u!==null&&(l=u,u=$n(e,t),u!=null&&o.unshift(ma(e,u,l)),u=$n(e,i),u!=null&&o.push(ma(e,u,l))),e=e.return}return o}function cn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Nc(e,i,t,o,l){for(var u=i._reactName,m=[];t!==null&&t!==o;){var z=t,p=z.alternate,C=z.stateNode;if(p!==null&&p===o)break;z.tag===5&&C!==null&&(z=C,l?(p=$n(t,u),p!=null&&m.unshift(ma(t,p,z))):l||(p=$n(t,u),p!=null&&m.push(ma(t,p,z)))),t=t.return}m.length!==0&&e.push({event:i,listeners:m})}var gw=/\r\n?/g,jw=/\u0000|\uFFFD/g;function Bc(e){return(typeof e=="string"?e:""+e).replace(gw,`
`).replace(jw,"")}function dr(e,i,t){if(i=Bc(i),Bc(e)!==i&&t)throw Error(r(425))}function mr(){}var as=null,rs=null;function os(e,i){return e==="textarea"||e==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var ss=typeof setTimeout=="function"?setTimeout:void 0,kw=typeof clearTimeout=="function"?clearTimeout:void 0,Rc=typeof Promise=="function"?Promise:void 0,vw=typeof queueMicrotask=="function"?queueMicrotask:typeof Rc<"u"?function(e){return Rc.resolve(null).then(e).catch(bw)}:ss;function bw(e){setTimeout(function(){throw e})}function ls(e,i){var t=i,o=0;do{var l=t.nextSibling;if(e.removeChild(t),l&&l.nodeType===8)if(t=l.data,t==="/$"){if(o===0){e.removeChild(l),ta(i);return}o--}else t!=="$"&&t!=="$?"&&t!=="$!"||o++;t=l}while(t);ta(i)}function mt(e){for(;e!=null;e=e.nextSibling){var i=e.nodeType;if(i===1||i===3)break;if(i===8){if(i=e.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return e}function Oc(e){e=e.previousSibling;for(var i=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(i===0)return e;i--}else t==="/$"&&i++}e=e.previousSibling}return null}var dn=Math.random().toString(36).slice(2),Oi="__reactFiber$"+dn,fa="__reactProps$"+dn,Hi="__reactContainer$"+dn,us="__reactEvents$"+dn,Cw="__reactListeners$"+dn,Dw="__reactHandles$"+dn;function Nt(e){var i=e[Oi];if(i)return i;for(var t=e.parentNode;t;){if(i=t[Hi]||t[Oi]){if(t=i.alternate,i.child!==null||t!==null&&t.child!==null)for(e=Oc(e);e!==null;){if(t=e[Oi])return t;e=Oc(e)}return i}e=t,t=e.parentNode}return null}function ya(e){return e=e[Oi]||e[Hi],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function mn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(r(33))}function fr(e){return e[fa]||null}var cs=[],fn=-1;function ft(e){return{current:e}}function De(e){0>fn||(e.current=cs[fn],cs[fn]=null,fn--)}function be(e,i){fn++,cs[fn]=e.current,e.current=i}var yt={},Qe=ft(yt),ni=ft(!1),Bt=yt;function yn(e,i){var t=e.type.contextTypes;if(!t)return yt;var o=e.stateNode;if(o&&o.__reactInternalMemoizedUnmaskedChildContext===i)return o.__reactInternalMemoizedMaskedChildContext;var l={},u;for(u in t)l[u]=i[u];return o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=l),l}function ai(e){return e=e.childContextTypes,e!=null}function yr(){De(ni),De(Qe)}function Fc(e,i,t){if(Qe.current!==yt)throw Error(r(168));be(Qe,i),be(ni,t)}function _c(e,i,t){var o=e.stateNode;if(i=i.childContextTypes,typeof o.getChildContext!="function")return t;o=o.getChildContext();for(var l in o)if(!(l in i))throw Error(r(108,pe(e)||"Unknown",l));return _({},t,o)}function zr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||yt,Bt=Qe.current,be(Qe,e),be(ni,ni.current),!0}function Mc(e,i,t){var o=e.stateNode;if(!o)throw Error(r(169));t?(e=_c(e,i,Bt),o.__reactInternalMemoizedMergedChildContext=e,De(ni),De(Qe),be(Qe,e)):De(ni),be(ni,t)}var Ki=null,wr=!1,ds=!1;function Ic(e){Ki===null?Ki=[e]:Ki.push(e)}function Aw(e){wr=!0,Ic(e)}function zt(){if(!ds&&Ki!==null){ds=!0;var e=0,i=ke;try{var t=Ki;for(ke=1;e<t.length;e++){var o=t[e];do o=o(!0);while(o!==null)}Ki=null,wr=!1}catch(l){throw Ki!==null&&(Ki=Ki.slice(e+1)),Wu(No,zt),l}finally{ke=i,ds=!1}}return null}var zn=[],wn=0,pr=null,hr=0,wi=[],pi=0,Rt=null,Ui=1,$i="";function Ot(e,i){zn[wn++]=hr,zn[wn++]=pr,pr=e,hr=i}function Jc(e,i,t){wi[pi++]=Ui,wi[pi++]=$i,wi[pi++]=Rt,Rt=e;var o=Ui;e=$i;var l=32-bi(o)-1;o&=~(1<<l),t+=1;var u=32-bi(i)+l;if(30<u){var m=l-l%5;u=(o&(1<<m)-1).toString(32),o>>=m,l-=m,Ui=1<<32-bi(i)+l|t<<l|o,$i=u+e}else Ui=1<<u|t<<l|o,$i=e}function ms(e){e.return!==null&&(Ot(e,1),Jc(e,1,0))}function fs(e){for(;e===pr;)pr=zn[--wn],zn[wn]=null,hr=zn[--wn],zn[wn]=null;for(;e===Rt;)Rt=wi[--pi],wi[pi]=null,$i=wi[--pi],wi[pi]=null,Ui=wi[--pi],wi[pi]=null}var di=null,mi=null,Te=!1,Di=null;function Wc(e,i){var t=ki(5,null,null,0);t.elementType="DELETED",t.stateNode=i,t.return=e,i=e.deletions,i===null?(e.deletions=[t],e.flags|=16):i.push(t)}function Lc(e,i){switch(e.tag){case 5:var t=e.type;return i=i.nodeType!==1||t.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(e.stateNode=i,di=e,mi=mt(i.firstChild),!0):!1;case 6:return i=e.pendingProps===""||i.nodeType!==3?null:i,i!==null?(e.stateNode=i,di=e,mi=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(t=Rt!==null?{id:Ui,overflow:$i}:null,e.memoizedState={dehydrated:i,treeContext:t,retryLane:1073741824},t=ki(18,null,null,0),t.stateNode=i,t.return=e,e.child=t,di=e,mi=null,!0):!1;default:return!1}}function ys(e){return(e.mode&1)!==0&&(e.flags&128)===0}function zs(e){if(Te){var i=mi;if(i){var t=i;if(!Lc(e,i)){if(ys(e))throw Error(r(418));i=mt(t.nextSibling);var o=di;i&&Lc(e,i)?Wc(o,t):(e.flags=e.flags&-4097|2,Te=!1,di=e)}}else{if(ys(e))throw Error(r(418));e.flags=e.flags&-4097|2,Te=!1,di=e}}}function Hc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;di=e}function gr(e){if(e!==di)return!1;if(!Te)return Hc(e),Te=!0,!1;var i;if((i=e.tag!==3)&&!(i=e.tag!==5)&&(i=e.type,i=i!=="head"&&i!=="body"&&!os(e.type,e.memoizedProps)),i&&(i=mi)){if(ys(e))throw Kc(),Error(r(418));for(;i;)Wc(e,i),i=mt(i.nextSibling)}if(Hc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));e:{for(e=e.nextSibling,i=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(i===0){mi=mt(e.nextSibling);break e}i--}else t!=="$"&&t!=="$!"&&t!=="$?"||i++}e=e.nextSibling}mi=null}}else mi=di?mt(e.stateNode.nextSibling):null;return!0}function Kc(){for(var e=mi;e;)e=mt(e.nextSibling)}function pn(){mi=di=null,Te=!1}function ws(e){Di===null?Di=[e]:Di.push(e)}var Ew=ae.ReactCurrentBatchConfig;function za(e,i,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(r(309));var o=t.stateNode}if(!o)throw Error(r(147,e));var l=o,u=""+e;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===u?i.ref:(i=function(m){var z=l.refs;m===null?delete z[u]:z[u]=m},i._stringRef=u,i)}if(typeof e!="string")throw Error(r(284));if(!t._owner)throw Error(r(290,e))}return e}function jr(e,i){throw e=Object.prototype.toString.call(i),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":e))}function Uc(e){var i=e._init;return i(e._payload)}function $c(e){function i(k,h){if(e){var b=k.deletions;b===null?(k.deletions=[h],k.flags|=16):b.push(h)}}function t(k,h){if(!e)return null;for(;h!==null;)i(k,h),h=h.sibling;return null}function o(k,h){for(k=new Map;h!==null;)h.key!==null?k.set(h.key,h):k.set(h.index,h),h=h.sibling;return k}function l(k,h){return k=bt(k,h),k.index=0,k.sibling=null,k}function u(k,h,b){return k.index=b,e?(b=k.alternate,b!==null?(b=b.index,b<h?(k.flags|=2,h):b):(k.flags|=2,h)):(k.flags|=1048576,h)}function m(k){return e&&k.alternate===null&&(k.flags|=2),k}function z(k,h,b,R){return h===null||h.tag!==6?(h=sl(b,k.mode,R),h.return=k,h):(h=l(h,b),h.return=k,h)}function p(k,h,b,R){var Z=b.type;return Z===ce?S(k,h,b.props.children,R,b.key):h!==null&&(h.elementType===Z||typeof Z=="object"&&Z!==null&&Z.$$typeof===je&&Uc(Z)===h.type)?(R=l(h,b.props),R.ref=za(k,h,b),R.return=k,R):(R=Hr(b.type,b.key,b.props,null,k.mode,R),R.ref=za(k,h,b),R.return=k,R)}function C(k,h,b,R){return h===null||h.tag!==4||h.stateNode.containerInfo!==b.containerInfo||h.stateNode.implementation!==b.implementation?(h=ll(b,k.mode,R),h.return=k,h):(h=l(h,b.children||[]),h.return=k,h)}function S(k,h,b,R,Z){return h===null||h.tag!==7?(h=Ht(b,k.mode,R,Z),h.return=k,h):(h=l(h,b),h.return=k,h)}function N(k,h,b){if(typeof h=="string"&&h!==""||typeof h=="number")return h=sl(""+h,k.mode,b),h.return=k,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case U:return b=Hr(h.type,h.key,h.props,null,k.mode,b),b.ref=za(k,null,h),b.return=k,b;case oe:return h=ll(h,k.mode,b),h.return=k,h;case je:var R=h._init;return N(k,R(h._payload),b)}if(St(h)||$(h))return h=Ht(h,k.mode,b,null),h.return=k,h;jr(k,h)}return null}function T(k,h,b,R){var Z=h!==null?h.key:null;if(typeof b=="string"&&b!==""||typeof b=="number")return Z!==null?null:z(k,h,""+b,R);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case U:return b.key===Z?p(k,h,b,R):null;case oe:return b.key===Z?C(k,h,b,R):null;case je:return Z=b._init,T(k,h,Z(b._payload),R)}if(St(b)||$(b))return Z!==null?null:S(k,h,b,R,null);jr(k,b)}return null}function M(k,h,b,R,Z){if(typeof R=="string"&&R!==""||typeof R=="number")return k=k.get(b)||null,z(h,k,""+R,Z);if(typeof R=="object"&&R!==null){switch(R.$$typeof){case U:return k=k.get(R.key===null?b:R.key)||null,p(h,k,R,Z);case oe:return k=k.get(R.key===null?b:R.key)||null,C(h,k,R,Z);case je:var Y=R._init;return M(k,h,b,Y(R._payload),Z)}if(St(R)||$(R))return k=k.get(b)||null,S(h,k,R,Z,null);jr(h,R)}return null}function H(k,h,b,R){for(var Z=null,Y=null,Q=h,ie=h=0,He=null;Q!==null&&ie<b.length;ie++){Q.index>ie?(He=Q,Q=null):He=Q.sibling;var we=T(k,Q,b[ie],R);if(we===null){Q===null&&(Q=He);break}e&&Q&&we.alternate===null&&i(k,Q),h=u(we,h,ie),Y===null?Z=we:Y.sibling=we,Y=we,Q=He}if(ie===b.length)return t(k,Q),Te&&Ot(k,ie),Z;if(Q===null){for(;ie<b.length;ie++)Q=N(k,b[ie],R),Q!==null&&(h=u(Q,h,ie),Y===null?Z=Q:Y.sibling=Q,Y=Q);return Te&&Ot(k,ie),Z}for(Q=o(k,Q);ie<b.length;ie++)He=M(Q,k,ie,b[ie],R),He!==null&&(e&&He.alternate!==null&&Q.delete(He.key===null?ie:He.key),h=u(He,h,ie),Y===null?Z=He:Y.sibling=He,Y=He);return e&&Q.forEach(function(Ct){return i(k,Ct)}),Te&&Ot(k,ie),Z}function K(k,h,b,R){var Z=$(b);if(typeof Z!="function")throw Error(r(150));if(b=Z.call(b),b==null)throw Error(r(151));for(var Y=Z=null,Q=h,ie=h=0,He=null,we=b.next();Q!==null&&!we.done;ie++,we=b.next()){Q.index>ie?(He=Q,Q=null):He=Q.sibling;var Ct=T(k,Q,we.value,R);if(Ct===null){Q===null&&(Q=He);break}e&&Q&&Ct.alternate===null&&i(k,Q),h=u(Ct,h,ie),Y===null?Z=Ct:Y.sibling=Ct,Y=Ct,Q=He}if(we.done)return t(k,Q),Te&&Ot(k,ie),Z;if(Q===null){for(;!we.done;ie++,we=b.next())we=N(k,we.value,R),we!==null&&(h=u(we,h,ie),Y===null?Z=we:Y.sibling=we,Y=we);return Te&&Ot(k,ie),Z}for(Q=o(k,Q);!we.done;ie++,we=b.next())we=M(Q,k,ie,we.value,R),we!==null&&(e&&we.alternate!==null&&Q.delete(we.key===null?ie:we.key),h=u(we,h,ie),Y===null?Z=we:Y.sibling=we,Y=we);return e&&Q.forEach(function(op){return i(k,op)}),Te&&Ot(k,ie),Z}function Oe(k,h,b,R){if(typeof b=="object"&&b!==null&&b.type===ce&&b.key===null&&(b=b.props.children),typeof b=="object"&&b!==null){switch(b.$$typeof){case U:e:{for(var Z=b.key,Y=h;Y!==null;){if(Y.key===Z){if(Z=b.type,Z===ce){if(Y.tag===7){t(k,Y.sibling),h=l(Y,b.props.children),h.return=k,k=h;break e}}else if(Y.elementType===Z||typeof Z=="object"&&Z!==null&&Z.$$typeof===je&&Uc(Z)===Y.type){t(k,Y.sibling),h=l(Y,b.props),h.ref=za(k,Y,b),h.return=k,k=h;break e}t(k,Y);break}else i(k,Y);Y=Y.sibling}b.type===ce?(h=Ht(b.props.children,k.mode,R,b.key),h.return=k,k=h):(R=Hr(b.type,b.key,b.props,null,k.mode,R),R.ref=za(k,h,b),R.return=k,k=R)}return m(k);case oe:e:{for(Y=b.key;h!==null;){if(h.key===Y)if(h.tag===4&&h.stateNode.containerInfo===b.containerInfo&&h.stateNode.implementation===b.implementation){t(k,h.sibling),h=l(h,b.children||[]),h.return=k,k=h;break e}else{t(k,h);break}else i(k,h);h=h.sibling}h=ll(b,k.mode,R),h.return=k,k=h}return m(k);case je:return Y=b._init,Oe(k,h,Y(b._payload),R)}if(St(b))return H(k,h,b,R);if($(b))return K(k,h,b,R);jr(k,b)}return typeof b=="string"&&b!==""||typeof b=="number"?(b=""+b,h!==null&&h.tag===6?(t(k,h.sibling),h=l(h,b),h.return=k,k=h):(t(k,h),h=sl(b,k.mode,R),h.return=k,k=h),m(k)):t(k,h)}return Oe}var hn=$c(!0),Zc=$c(!1),kr=ft(null),vr=null,gn=null,ps=null;function hs(){ps=gn=vr=null}function gs(e){var i=kr.current;De(kr),e._currentValue=i}function js(e,i,t){for(;e!==null;){var o=e.alternate;if((e.childLanes&i)!==i?(e.childLanes|=i,o!==null&&(o.childLanes|=i)):o!==null&&(o.childLanes&i)!==i&&(o.childLanes|=i),e===t)break;e=e.return}}function jn(e,i){vr=e,ps=gn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&i)!==0&&(ri=!0),e.firstContext=null)}function hi(e){var i=e._currentValue;if(ps!==e)if(e={context:e,memoizedValue:i,next:null},gn===null){if(vr===null)throw Error(r(308));gn=e,vr.dependencies={lanes:0,firstContext:e}}else gn=gn.next=e;return i}var Ft=null;function ks(e){Ft===null?Ft=[e]:Ft.push(e)}function Vc(e,i,t,o){var l=i.interleaved;return l===null?(t.next=t,ks(i)):(t.next=l.next,l.next=t),i.interleaved=t,Zi(e,o)}function Zi(e,i){e.lanes|=i;var t=e.alternate;for(t!==null&&(t.lanes|=i),t=e,e=e.return;e!==null;)e.childLanes|=i,t=e.alternate,t!==null&&(t.childLanes|=i),t=e,e=e.return;return t.tag===3?t.stateNode:null}var wt=!1;function vs(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Yc(e,i){e=e.updateQueue,i.updateQueue===e&&(i.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Vi(e,i){return{eventTime:e,lane:i,tag:0,payload:null,callback:null,next:null}}function pt(e,i,t){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(ye&2)!==0){var l=o.pending;return l===null?i.next=i:(i.next=l.next,l.next=i),o.pending=i,Zi(e,t)}return l=o.interleaved,l===null?(i.next=i,ks(o)):(i.next=l.next,l.next=i),o.interleaved=i,Zi(e,t)}function br(e,i,t){if(i=i.updateQueue,i!==null&&(i=i.shared,(t&4194240)!==0)){var o=i.lanes;o&=e.pendingLanes,t|=o,i.lanes=t,Oo(e,t)}}function Qc(e,i){var t=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,t===o)){var l=null,u=null;if(t=t.firstBaseUpdate,t!==null){do{var m={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};u===null?l=u=m:u=u.next=m,t=t.next}while(t!==null);u===null?l=u=i:u=u.next=i}else l=u=i;t={baseState:o.baseState,firstBaseUpdate:l,lastBaseUpdate:u,shared:o.shared,effects:o.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=i:e.next=i,t.lastBaseUpdate=i}function Cr(e,i,t,o){var l=e.updateQueue;wt=!1;var u=l.firstBaseUpdate,m=l.lastBaseUpdate,z=l.shared.pending;if(z!==null){l.shared.pending=null;var p=z,C=p.next;p.next=null,m===null?u=C:m.next=C,m=p;var S=e.alternate;S!==null&&(S=S.updateQueue,z=S.lastBaseUpdate,z!==m&&(z===null?S.firstBaseUpdate=C:z.next=C,S.lastBaseUpdate=p))}if(u!==null){var N=l.baseState;m=0,S=C=p=null,z=u;do{var T=z.lane,M=z.eventTime;if((o&T)===T){S!==null&&(S=S.next={eventTime:M,lane:0,tag:z.tag,payload:z.payload,callback:z.callback,next:null});e:{var H=e,K=z;switch(T=i,M=t,K.tag){case 1:if(H=K.payload,typeof H=="function"){N=H.call(M,N,T);break e}N=H;break e;case 3:H.flags=H.flags&-65537|128;case 0:if(H=K.payload,T=typeof H=="function"?H.call(M,N,T):H,T==null)break e;N=_({},N,T);break e;case 2:wt=!0}}z.callback!==null&&z.lane!==0&&(e.flags|=64,T=l.effects,T===null?l.effects=[z]:T.push(z))}else M={eventTime:M,lane:T,tag:z.tag,payload:z.payload,callback:z.callback,next:null},S===null?(C=S=M,p=N):S=S.next=M,m|=T;if(z=z.next,z===null){if(z=l.shared.pending,z===null)break;T=z,z=T.next,T.next=null,l.lastBaseUpdate=T,l.shared.pending=null}}while(!0);if(S===null&&(p=N),l.baseState=p,l.firstBaseUpdate=C,l.lastBaseUpdate=S,i=l.shared.interleaved,i!==null){l=i;do m|=l.lane,l=l.next;while(l!==i)}else u===null&&(l.shared.lanes=0);It|=m,e.lanes=m,e.memoizedState=N}}function Xc(e,i,t){if(e=i.effects,i.effects=null,e!==null)for(i=0;i<e.length;i++){var o=e[i],l=o.callback;if(l!==null){if(o.callback=null,o=t,typeof l!="function")throw Error(r(191,l));l.call(o)}}}var wa={},Fi=ft(wa),pa=ft(wa),ha=ft(wa);function _t(e){if(e===wa)throw Error(r(174));return e}function bs(e,i){switch(be(ha,i),be(pa,e),be(Fi,wa),e=i.nodeType,e){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:Bi(null,"");break;default:e=e===8?i.parentNode:i,i=e.namespaceURI||null,e=e.tagName,i=Bi(i,e)}De(Fi),be(Fi,i)}function kn(){De(Fi),De(pa),De(ha)}function qc(e){_t(ha.current);var i=_t(Fi.current),t=Bi(i,e.type);i!==t&&(be(pa,e),be(Fi,t))}function Cs(e){pa.current===e&&(De(Fi),De(pa))}var Se=ft(0);function Dr(e){for(var i=e;i!==null;){if(i.tag===13){var t=i.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Ds=[];function As(){for(var e=0;e<Ds.length;e++)Ds[e]._workInProgressVersionPrimary=null;Ds.length=0}var Ar=ae.ReactCurrentDispatcher,Es=ae.ReactCurrentBatchConfig,Mt=0,xe=null,Ie=null,We=null,Er=!1,ga=!1,ja=0,Pw=0;function Xe(){throw Error(r(321))}function Ps(e,i){if(i===null)return!1;for(var t=0;t<i.length&&t<e.length;t++)if(!Ci(e[t],i[t]))return!1;return!0}function Ts(e,i,t,o,l,u){if(Mt=u,xe=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Ar.current=e===null||e.memoizedState===null?Gw:Nw,e=t(o,l),ga){u=0;do{if(ga=!1,ja=0,25<=u)throw Error(r(301));u+=1,We=Ie=null,i.updateQueue=null,Ar.current=Bw,e=t(o,l)}while(ga)}if(Ar.current=Sr,i=Ie!==null&&Ie.next!==null,Mt=0,We=Ie=xe=null,Er=!1,i)throw Error(r(300));return e}function Ss(){var e=ja!==0;return ja=0,e}function _i(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return We===null?xe.memoizedState=We=e:We=We.next=e,We}function gi(){if(Ie===null){var e=xe.alternate;e=e!==null?e.memoizedState:null}else e=Ie.next;var i=We===null?xe.memoizedState:We.next;if(i!==null)We=i,Ie=e;else{if(e===null)throw Error(r(310));Ie=e,e={memoizedState:Ie.memoizedState,baseState:Ie.baseState,baseQueue:Ie.baseQueue,queue:Ie.queue,next:null},We===null?xe.memoizedState=We=e:We=We.next=e}return We}function ka(e,i){return typeof i=="function"?i(e):i}function xs(e){var i=gi(),t=i.queue;if(t===null)throw Error(r(311));t.lastRenderedReducer=e;var o=Ie,l=o.baseQueue,u=t.pending;if(u!==null){if(l!==null){var m=l.next;l.next=u.next,u.next=m}o.baseQueue=l=u,t.pending=null}if(l!==null){u=l.next,o=o.baseState;var z=m=null,p=null,C=u;do{var S=C.lane;if((Mt&S)===S)p!==null&&(p=p.next={lane:0,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null}),o=C.hasEagerState?C.eagerState:e(o,C.action);else{var N={lane:S,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null};p===null?(z=p=N,m=o):p=p.next=N,xe.lanes|=S,It|=S}C=C.next}while(C!==null&&C!==u);p===null?m=o:p.next=z,Ci(o,i.memoizedState)||(ri=!0),i.memoizedState=o,i.baseState=m,i.baseQueue=p,t.lastRenderedState=o}if(e=t.interleaved,e!==null){l=e;do u=l.lane,xe.lanes|=u,It|=u,l=l.next;while(l!==e)}else l===null&&(t.lanes=0);return[i.memoizedState,t.dispatch]}function Gs(e){var i=gi(),t=i.queue;if(t===null)throw Error(r(311));t.lastRenderedReducer=e;var o=t.dispatch,l=t.pending,u=i.memoizedState;if(l!==null){t.pending=null;var m=l=l.next;do u=e(u,m.action),m=m.next;while(m!==l);Ci(u,i.memoizedState)||(ri=!0),i.memoizedState=u,i.baseQueue===null&&(i.baseState=u),t.lastRenderedState=u}return[u,o]}function ed(){}function id(e,i){var t=xe,o=gi(),l=i(),u=!Ci(o.memoizedState,l);if(u&&(o.memoizedState=l,ri=!0),o=o.queue,Ns(ad.bind(null,t,o,e),[e]),o.getSnapshot!==i||u||We!==null&&We.memoizedState.tag&1){if(t.flags|=2048,va(9,nd.bind(null,t,o,l,i),void 0,null),Le===null)throw Error(r(349));(Mt&30)!==0||td(t,i,l)}return l}function td(e,i,t){e.flags|=16384,e={getSnapshot:i,value:t},i=xe.updateQueue,i===null?(i={lastEffect:null,stores:null},xe.updateQueue=i,i.stores=[e]):(t=i.stores,t===null?i.stores=[e]:t.push(e))}function nd(e,i,t,o){i.value=t,i.getSnapshot=o,rd(i)&&od(e)}function ad(e,i,t){return t(function(){rd(i)&&od(e)})}function rd(e){var i=e.getSnapshot;e=e.value;try{var t=i();return!Ci(e,t)}catch{return!0}}function od(e){var i=Zi(e,1);i!==null&&Ti(i,e,1,-1)}function sd(e){var i=_i();return typeof e=="function"&&(e=e()),i.memoizedState=i.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ka,lastRenderedState:e},i.queue=e,e=e.dispatch=xw.bind(null,xe,e),[i.memoizedState,e]}function va(e,i,t,o){return e={tag:e,create:i,destroy:t,deps:o,next:null},i=xe.updateQueue,i===null?(i={lastEffect:null,stores:null},xe.updateQueue=i,i.lastEffect=e.next=e):(t=i.lastEffect,t===null?i.lastEffect=e.next=e:(o=t.next,t.next=e,e.next=o,i.lastEffect=e)),e}function ld(){return gi().memoizedState}function Pr(e,i,t,o){var l=_i();xe.flags|=e,l.memoizedState=va(1|i,t,void 0,o===void 0?null:o)}function Tr(e,i,t,o){var l=gi();o=o===void 0?null:o;var u=void 0;if(Ie!==null){var m=Ie.memoizedState;if(u=m.destroy,o!==null&&Ps(o,m.deps)){l.memoizedState=va(i,t,u,o);return}}xe.flags|=e,l.memoizedState=va(1|i,t,u,o)}function ud(e,i){return Pr(8390656,8,e,i)}function Ns(e,i){return Tr(2048,8,e,i)}function cd(e,i){return Tr(4,2,e,i)}function dd(e,i){return Tr(4,4,e,i)}function md(e,i){if(typeof i=="function")return e=e(),i(e),function(){i(null)};if(i!=null)return e=e(),i.current=e,function(){i.current=null}}function fd(e,i,t){return t=t!=null?t.concat([e]):null,Tr(4,4,md.bind(null,i,e),t)}function Bs(){}function yd(e,i){var t=gi();i=i===void 0?null:i;var o=t.memoizedState;return o!==null&&i!==null&&Ps(i,o[1])?o[0]:(t.memoizedState=[e,i],e)}function zd(e,i){var t=gi();i=i===void 0?null:i;var o=t.memoizedState;return o!==null&&i!==null&&Ps(i,o[1])?o[0]:(e=e(),t.memoizedState=[e,i],e)}function wd(e,i,t){return(Mt&21)===0?(e.baseState&&(e.baseState=!1,ri=!0),e.memoizedState=t):(Ci(t,i)||(t=Uu(),xe.lanes|=t,It|=t,e.baseState=!0),i)}function Tw(e,i){var t=ke;ke=t!==0&&4>t?t:4,e(!0);var o=Es.transition;Es.transition={};try{e(!1),i()}finally{ke=t,Es.transition=o}}function pd(){return gi().memoizedState}function Sw(e,i,t){var o=kt(e);if(t={lane:o,action:t,hasEagerState:!1,eagerState:null,next:null},hd(e))gd(i,t);else if(t=Vc(e,i,t,o),t!==null){var l=ti();Ti(t,e,o,l),jd(t,i,o)}}function xw(e,i,t){var o=kt(e),l={lane:o,action:t,hasEagerState:!1,eagerState:null,next:null};if(hd(e))gd(i,l);else{var u=e.alternate;if(e.lanes===0&&(u===null||u.lanes===0)&&(u=i.lastRenderedReducer,u!==null))try{var m=i.lastRenderedState,z=u(m,t);if(l.hasEagerState=!0,l.eagerState=z,Ci(z,m)){var p=i.interleaved;p===null?(l.next=l,ks(i)):(l.next=p.next,p.next=l),i.interleaved=l;return}}catch{}t=Vc(e,i,l,o),t!==null&&(l=ti(),Ti(t,e,o,l),jd(t,i,o))}}function hd(e){var i=e.alternate;return e===xe||i!==null&&i===xe}function gd(e,i){ga=Er=!0;var t=e.pending;t===null?i.next=i:(i.next=t.next,t.next=i),e.pending=i}function jd(e,i,t){if((t&4194240)!==0){var o=i.lanes;o&=e.pendingLanes,t|=o,i.lanes=t,Oo(e,t)}}var Sr={readContext:hi,useCallback:Xe,useContext:Xe,useEffect:Xe,useImperativeHandle:Xe,useInsertionEffect:Xe,useLayoutEffect:Xe,useMemo:Xe,useReducer:Xe,useRef:Xe,useState:Xe,useDebugValue:Xe,useDeferredValue:Xe,useTransition:Xe,useMutableSource:Xe,useSyncExternalStore:Xe,useId:Xe,unstable_isNewReconciler:!1},Gw={readContext:hi,useCallback:function(e,i){return _i().memoizedState=[e,i===void 0?null:i],e},useContext:hi,useEffect:ud,useImperativeHandle:function(e,i,t){return t=t!=null?t.concat([e]):null,Pr(4194308,4,md.bind(null,i,e),t)},useLayoutEffect:function(e,i){return Pr(4194308,4,e,i)},useInsertionEffect:function(e,i){return Pr(4,2,e,i)},useMemo:function(e,i){var t=_i();return i=i===void 0?null:i,e=e(),t.memoizedState=[e,i],e},useReducer:function(e,i,t){var o=_i();return i=t!==void 0?t(i):i,o.memoizedState=o.baseState=i,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},o.queue=e,e=e.dispatch=Sw.bind(null,xe,e),[o.memoizedState,e]},useRef:function(e){var i=_i();return e={current:e},i.memoizedState=e},useState:sd,useDebugValue:Bs,useDeferredValue:function(e){return _i().memoizedState=e},useTransition:function(){var e=sd(!1),i=e[0];return e=Tw.bind(null,e[1]),_i().memoizedState=e,[i,e]},useMutableSource:function(){},useSyncExternalStore:function(e,i,t){var o=xe,l=_i();if(Te){if(t===void 0)throw Error(r(407));t=t()}else{if(t=i(),Le===null)throw Error(r(349));(Mt&30)!==0||td(o,i,t)}l.memoizedState=t;var u={value:t,getSnapshot:i};return l.queue=u,ud(ad.bind(null,o,u,e),[e]),o.flags|=2048,va(9,nd.bind(null,o,u,t,i),void 0,null),t},useId:function(){var e=_i(),i=Le.identifierPrefix;if(Te){var t=$i,o=Ui;t=(o&~(1<<32-bi(o)-1)).toString(32)+t,i=":"+i+"R"+t,t=ja++,0<t&&(i+="H"+t.toString(32)),i+=":"}else t=Pw++,i=":"+i+"r"+t.toString(32)+":";return e.memoizedState=i},unstable_isNewReconciler:!1},Nw={readContext:hi,useCallback:yd,useContext:hi,useEffect:Ns,useImperativeHandle:fd,useInsertionEffect:cd,useLayoutEffect:dd,useMemo:zd,useReducer:xs,useRef:ld,useState:function(){return xs(ka)},useDebugValue:Bs,useDeferredValue:function(e){var i=gi();return wd(i,Ie.memoizedState,e)},useTransition:function(){var e=xs(ka)[0],i=gi().memoizedState;return[e,i]},useMutableSource:ed,useSyncExternalStore:id,useId:pd,unstable_isNewReconciler:!1},Bw={readContext:hi,useCallback:yd,useContext:hi,useEffect:Ns,useImperativeHandle:fd,useInsertionEffect:cd,useLayoutEffect:dd,useMemo:zd,useReducer:Gs,useRef:ld,useState:function(){return Gs(ka)},useDebugValue:Bs,useDeferredValue:function(e){var i=gi();return Ie===null?i.memoizedState=e:wd(i,Ie.memoizedState,e)},useTransition:function(){var e=Gs(ka)[0],i=gi().memoizedState;return[e,i]},useMutableSource:ed,useSyncExternalStore:id,useId:pd,unstable_isNewReconciler:!1};function Ai(e,i){if(e&&e.defaultProps){i=_({},i),e=e.defaultProps;for(var t in e)i[t]===void 0&&(i[t]=e[t]);return i}return i}function Rs(e,i,t,o){i=e.memoizedState,t=t(o,i),t=t==null?i:_({},i,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var xr={isMounted:function(e){return(e=e._reactInternals)?Gt(e)===e:!1},enqueueSetState:function(e,i,t){e=e._reactInternals;var o=ti(),l=kt(e),u=Vi(o,l);u.payload=i,t!=null&&(u.callback=t),i=pt(e,u,l),i!==null&&(Ti(i,e,l,o),br(i,e,l))},enqueueReplaceState:function(e,i,t){e=e._reactInternals;var o=ti(),l=kt(e),u=Vi(o,l);u.tag=1,u.payload=i,t!=null&&(u.callback=t),i=pt(e,u,l),i!==null&&(Ti(i,e,l,o),br(i,e,l))},enqueueForceUpdate:function(e,i){e=e._reactInternals;var t=ti(),o=kt(e),l=Vi(t,o);l.tag=2,i!=null&&(l.callback=i),i=pt(e,l,o),i!==null&&(Ti(i,e,o,t),br(i,e,o))}};function kd(e,i,t,o,l,u,m){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,u,m):i.prototype&&i.prototype.isPureReactComponent?!la(t,o)||!la(l,u):!0}function vd(e,i,t){var o=!1,l=yt,u=i.contextType;return typeof u=="object"&&u!==null?u=hi(u):(l=ai(i)?Bt:Qe.current,o=i.contextTypes,u=(o=o!=null)?yn(e,l):yt),i=new i(t,u),e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=xr,e.stateNode=i,i._reactInternals=e,o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=u),i}function bd(e,i,t,o){e=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(t,o),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(t,o),i.state!==e&&xr.enqueueReplaceState(i,i.state,null)}function Os(e,i,t,o){var l=e.stateNode;l.props=t,l.state=e.memoizedState,l.refs={},vs(e);var u=i.contextType;typeof u=="object"&&u!==null?l.context=hi(u):(u=ai(i)?Bt:Qe.current,l.context=yn(e,u)),l.state=e.memoizedState,u=i.getDerivedStateFromProps,typeof u=="function"&&(Rs(e,i,u,t),l.state=e.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(i=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),i!==l.state&&xr.enqueueReplaceState(l,l.state,null),Cr(e,t,l,o),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function vn(e,i){try{var t="",o=i;do t+=se(o),o=o.return;while(o);var l=t}catch(u){l=`
Error generating stack: `+u.message+`
`+u.stack}return{value:e,source:i,stack:l,digest:null}}function Fs(e,i,t){return{value:e,source:null,stack:t??null,digest:i??null}}function _s(e,i){try{console.error(i.value)}catch(t){setTimeout(function(){throw t})}}var Rw=typeof WeakMap=="function"?WeakMap:Map;function Cd(e,i,t){t=Vi(-1,t),t.tag=3,t.payload={element:null};var o=i.value;return t.callback=function(){_r||(_r=!0,qs=o),_s(e,i)},t}function Dd(e,i,t){t=Vi(-1,t),t.tag=3;var o=e.type.getDerivedStateFromError;if(typeof o=="function"){var l=i.value;t.payload=function(){return o(l)},t.callback=function(){_s(e,i)}}var u=e.stateNode;return u!==null&&typeof u.componentDidCatch=="function"&&(t.callback=function(){_s(e,i),typeof o!="function"&&(gt===null?gt=new Set([this]):gt.add(this));var m=i.stack;this.componentDidCatch(i.value,{componentStack:m!==null?m:""})}),t}function Ad(e,i,t){var o=e.pingCache;if(o===null){o=e.pingCache=new Rw;var l=new Set;o.set(i,l)}else l=o.get(i),l===void 0&&(l=new Set,o.set(i,l));l.has(t)||(l.add(t),e=Vw.bind(null,e,i,t),i.then(e,e))}function Ed(e){do{var i;if((i=e.tag===13)&&(i=e.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return e;e=e.return}while(e!==null);return null}function Pd(e,i,t,o,l){return(e.mode&1)===0?(e===i?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(i=Vi(-1,1),i.tag=2,pt(t,i,1))),t.lanes|=1),e):(e.flags|=65536,e.lanes=l,e)}var Ow=ae.ReactCurrentOwner,ri=!1;function ii(e,i,t,o){i.child=e===null?Zc(i,null,t,o):hn(i,e.child,t,o)}function Td(e,i,t,o,l){t=t.render;var u=i.ref;return jn(i,l),o=Ts(e,i,t,o,u,l),t=Ss(),e!==null&&!ri?(i.updateQueue=e.updateQueue,i.flags&=-2053,e.lanes&=~l,Yi(e,i,l)):(Te&&t&&ms(i),i.flags|=1,ii(e,i,o,l),i.child)}function Sd(e,i,t,o,l){if(e===null){var u=t.type;return typeof u=="function"&&!ol(u)&&u.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(i.tag=15,i.type=u,xd(e,i,u,o,l)):(e=Hr(t.type,null,o,i,i.mode,l),e.ref=i.ref,e.return=i,i.child=e)}if(u=e.child,(e.lanes&l)===0){var m=u.memoizedProps;if(t=t.compare,t=t!==null?t:la,t(m,o)&&e.ref===i.ref)return Yi(e,i,l)}return i.flags|=1,e=bt(u,o),e.ref=i.ref,e.return=i,i.child=e}function xd(e,i,t,o,l){if(e!==null){var u=e.memoizedProps;if(la(u,o)&&e.ref===i.ref)if(ri=!1,i.pendingProps=o=u,(e.lanes&l)!==0)(e.flags&131072)!==0&&(ri=!0);else return i.lanes=e.lanes,Yi(e,i,l)}return Ms(e,i,t,o,l)}function Gd(e,i,t){var o=i.pendingProps,l=o.children,u=e!==null?e.memoizedState:null;if(o.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},be(Cn,fi),fi|=t;else{if((t&1073741824)===0)return e=u!==null?u.baseLanes|t:t,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:e,cachePool:null,transitions:null},i.updateQueue=null,be(Cn,fi),fi|=e,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},o=u!==null?u.baseLanes:t,be(Cn,fi),fi|=o}else u!==null?(o=u.baseLanes|t,i.memoizedState=null):o=t,be(Cn,fi),fi|=o;return ii(e,i,l,t),i.child}function Nd(e,i){var t=i.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(i.flags|=512,i.flags|=2097152)}function Ms(e,i,t,o,l){var u=ai(t)?Bt:Qe.current;return u=yn(i,u),jn(i,l),t=Ts(e,i,t,o,u,l),o=Ss(),e!==null&&!ri?(i.updateQueue=e.updateQueue,i.flags&=-2053,e.lanes&=~l,Yi(e,i,l)):(Te&&o&&ms(i),i.flags|=1,ii(e,i,t,l),i.child)}function Bd(e,i,t,o,l){if(ai(t)){var u=!0;zr(i)}else u=!1;if(jn(i,l),i.stateNode===null)Nr(e,i),vd(i,t,o),Os(i,t,o,l),o=!0;else if(e===null){var m=i.stateNode,z=i.memoizedProps;m.props=z;var p=m.context,C=t.contextType;typeof C=="object"&&C!==null?C=hi(C):(C=ai(t)?Bt:Qe.current,C=yn(i,C));var S=t.getDerivedStateFromProps,N=typeof S=="function"||typeof m.getSnapshotBeforeUpdate=="function";N||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(z!==o||p!==C)&&bd(i,m,o,C),wt=!1;var T=i.memoizedState;m.state=T,Cr(i,o,m,l),p=i.memoizedState,z!==o||T!==p||ni.current||wt?(typeof S=="function"&&(Rs(i,t,S,o),p=i.memoizedState),(z=wt||kd(i,t,z,o,T,p,C))?(N||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(i.flags|=4194308)):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=o,i.memoizedState=p),m.props=o,m.state=p,m.context=C,o=z):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),o=!1)}else{m=i.stateNode,Yc(e,i),z=i.memoizedProps,C=i.type===i.elementType?z:Ai(i.type,z),m.props=C,N=i.pendingProps,T=m.context,p=t.contextType,typeof p=="object"&&p!==null?p=hi(p):(p=ai(t)?Bt:Qe.current,p=yn(i,p));var M=t.getDerivedStateFromProps;(S=typeof M=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(z!==N||T!==p)&&bd(i,m,o,p),wt=!1,T=i.memoizedState,m.state=T,Cr(i,o,m,l);var H=i.memoizedState;z!==N||T!==H||ni.current||wt?(typeof M=="function"&&(Rs(i,t,M,o),H=i.memoizedState),(C=wt||kd(i,t,C,o,T,H,p)||!1)?(S||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(o,H,p),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(o,H,p)),typeof m.componentDidUpdate=="function"&&(i.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof m.componentDidUpdate!="function"||z===e.memoizedProps&&T===e.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||z===e.memoizedProps&&T===e.memoizedState||(i.flags|=1024),i.memoizedProps=o,i.memoizedState=H),m.props=o,m.state=H,m.context=p,o=C):(typeof m.componentDidUpdate!="function"||z===e.memoizedProps&&T===e.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||z===e.memoizedProps&&T===e.memoizedState||(i.flags|=1024),o=!1)}return Is(e,i,t,o,u,l)}function Is(e,i,t,o,l,u){Nd(e,i);var m=(i.flags&128)!==0;if(!o&&!m)return l&&Mc(i,t,!1),Yi(e,i,u);o=i.stateNode,Ow.current=i;var z=m&&typeof t.getDerivedStateFromError!="function"?null:o.render();return i.flags|=1,e!==null&&m?(i.child=hn(i,e.child,null,u),i.child=hn(i,null,z,u)):ii(e,i,z,u),i.memoizedState=o.state,l&&Mc(i,t,!0),i.child}function Rd(e){var i=e.stateNode;i.pendingContext?Fc(e,i.pendingContext,i.pendingContext!==i.context):i.context&&Fc(e,i.context,!1),bs(e,i.containerInfo)}function Od(e,i,t,o,l){return pn(),ws(l),i.flags|=256,ii(e,i,t,o),i.child}var Js={dehydrated:null,treeContext:null,retryLane:0};function Ws(e){return{baseLanes:e,cachePool:null,transitions:null}}function Fd(e,i,t){var o=i.pendingProps,l=Se.current,u=!1,m=(i.flags&128)!==0,z;if((z=m)||(z=e!==null&&e.memoizedState===null?!1:(l&2)!==0),z?(u=!0,i.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),be(Se,l&1),e===null)return zs(i),e=i.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((i.mode&1)===0?i.lanes=1:e.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(m=o.children,e=o.fallback,u?(o=i.mode,u=i.child,m={mode:"hidden",children:m},(o&1)===0&&u!==null?(u.childLanes=0,u.pendingProps=m):u=Kr(m,o,0,null),e=Ht(e,o,t,null),u.return=i,e.return=i,u.sibling=e,i.child=u,i.child.memoizedState=Ws(t),i.memoizedState=Js,e):Ls(i,m));if(l=e.memoizedState,l!==null&&(z=l.dehydrated,z!==null))return Fw(e,i,m,o,z,l,t);if(u){u=o.fallback,m=i.mode,l=e.child,z=l.sibling;var p={mode:"hidden",children:o.children};return(m&1)===0&&i.child!==l?(o=i.child,o.childLanes=0,o.pendingProps=p,i.deletions=null):(o=bt(l,p),o.subtreeFlags=l.subtreeFlags&14680064),z!==null?u=bt(z,u):(u=Ht(u,m,t,null),u.flags|=2),u.return=i,o.return=i,o.sibling=u,i.child=o,o=u,u=i.child,m=e.child.memoizedState,m=m===null?Ws(t):{baseLanes:m.baseLanes|t,cachePool:null,transitions:m.transitions},u.memoizedState=m,u.childLanes=e.childLanes&~t,i.memoizedState=Js,o}return u=e.child,e=u.sibling,o=bt(u,{mode:"visible",children:o.children}),(i.mode&1)===0&&(o.lanes=t),o.return=i,o.sibling=null,e!==null&&(t=i.deletions,t===null?(i.deletions=[e],i.flags|=16):t.push(e)),i.child=o,i.memoizedState=null,o}function Ls(e,i){return i=Kr({mode:"visible",children:i},e.mode,0,null),i.return=e,e.child=i}function Gr(e,i,t,o){return o!==null&&ws(o),hn(i,e.child,null,t),e=Ls(i,i.pendingProps.children),e.flags|=2,i.memoizedState=null,e}function Fw(e,i,t,o,l,u,m){if(t)return i.flags&256?(i.flags&=-257,o=Fs(Error(r(422))),Gr(e,i,m,o)):i.memoizedState!==null?(i.child=e.child,i.flags|=128,null):(u=o.fallback,l=i.mode,o=Kr({mode:"visible",children:o.children},l,0,null),u=Ht(u,l,m,null),u.flags|=2,o.return=i,u.return=i,o.sibling=u,i.child=o,(i.mode&1)!==0&&hn(i,e.child,null,m),i.child.memoizedState=Ws(m),i.memoizedState=Js,u);if((i.mode&1)===0)return Gr(e,i,m,null);if(l.data==="$!"){if(o=l.nextSibling&&l.nextSibling.dataset,o)var z=o.dgst;return o=z,u=Error(r(419)),o=Fs(u,o,void 0),Gr(e,i,m,o)}if(z=(m&e.childLanes)!==0,ri||z){if(o=Le,o!==null){switch(m&-m){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=(l&(o.suspendedLanes|m))!==0?0:l,l!==0&&l!==u.retryLane&&(u.retryLane=l,Zi(e,l),Ti(o,e,l,-1))}return rl(),o=Fs(Error(r(421))),Gr(e,i,m,o)}return l.data==="$?"?(i.flags|=128,i.child=e.child,i=Yw.bind(null,e),l._reactRetry=i,null):(e=u.treeContext,mi=mt(l.nextSibling),di=i,Te=!0,Di=null,e!==null&&(wi[pi++]=Ui,wi[pi++]=$i,wi[pi++]=Rt,Ui=e.id,$i=e.overflow,Rt=i),i=Ls(i,o.children),i.flags|=4096,i)}function _d(e,i,t){e.lanes|=i;var o=e.alternate;o!==null&&(o.lanes|=i),js(e.return,i,t)}function Hs(e,i,t,o,l){var u=e.memoizedState;u===null?e.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:o,tail:t,tailMode:l}:(u.isBackwards=i,u.rendering=null,u.renderingStartTime=0,u.last=o,u.tail=t,u.tailMode=l)}function Md(e,i,t){var o=i.pendingProps,l=o.revealOrder,u=o.tail;if(ii(e,i,o.children,t),o=Se.current,(o&2)!==0)o=o&1|2,i.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=i.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&_d(e,t,i);else if(e.tag===19)_d(e,t,i);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===i)break e;for(;e.sibling===null;){if(e.return===null||e.return===i)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}if(be(Se,o),(i.mode&1)===0)i.memoizedState=null;else switch(l){case"forwards":for(t=i.child,l=null;t!==null;)e=t.alternate,e!==null&&Dr(e)===null&&(l=t),t=t.sibling;t=l,t===null?(l=i.child,i.child=null):(l=t.sibling,t.sibling=null),Hs(i,!1,l,t,u);break;case"backwards":for(t=null,l=i.child,i.child=null;l!==null;){if(e=l.alternate,e!==null&&Dr(e)===null){i.child=l;break}e=l.sibling,l.sibling=t,t=l,l=e}Hs(i,!0,t,null,u);break;case"together":Hs(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Nr(e,i){(i.mode&1)===0&&e!==null&&(e.alternate=null,i.alternate=null,i.flags|=2)}function Yi(e,i,t){if(e!==null&&(i.dependencies=e.dependencies),It|=i.lanes,(t&i.childLanes)===0)return null;if(e!==null&&i.child!==e.child)throw Error(r(153));if(i.child!==null){for(e=i.child,t=bt(e,e.pendingProps),i.child=t,t.return=i;e.sibling!==null;)e=e.sibling,t=t.sibling=bt(e,e.pendingProps),t.return=i;t.sibling=null}return i.child}function _w(e,i,t){switch(i.tag){case 3:Rd(i),pn();break;case 5:qc(i);break;case 1:ai(i.type)&&zr(i);break;case 4:bs(i,i.stateNode.containerInfo);break;case 10:var o=i.type._context,l=i.memoizedProps.value;be(kr,o._currentValue),o._currentValue=l;break;case 13:if(o=i.memoizedState,o!==null)return o.dehydrated!==null?(be(Se,Se.current&1),i.flags|=128,null):(t&i.child.childLanes)!==0?Fd(e,i,t):(be(Se,Se.current&1),e=Yi(e,i,t),e!==null?e.sibling:null);be(Se,Se.current&1);break;case 19:if(o=(t&i.childLanes)!==0,(e.flags&128)!==0){if(o)return Md(e,i,t);i.flags|=128}if(l=i.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),be(Se,Se.current),o)break;return null;case 22:case 23:return i.lanes=0,Gd(e,i,t)}return Yi(e,i,t)}var Id,Ks,Jd,Wd;Id=function(e,i){for(var t=i.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break;for(;t.sibling===null;){if(t.return===null||t.return===i)return;t=t.return}t.sibling.return=t.return,t=t.sibling}},Ks=function(){},Jd=function(e,i,t,o){var l=e.memoizedProps;if(l!==o){e=i.stateNode,_t(Fi.current);var u=null;switch(t){case"input":l=Ni(e,l),o=Ni(e,o),u=[];break;case"select":l=_({},l,{value:void 0}),o=_({},o,{value:void 0}),u=[];break;case"textarea":l=Ln(e,l),o=Ln(e,o),u=[];break;default:typeof l.onClick!="function"&&typeof o.onClick=="function"&&(e.onclick=mr)}Do(t,o);var m;t=null;for(C in l)if(!o.hasOwnProperty(C)&&l.hasOwnProperty(C)&&l[C]!=null)if(C==="style"){var z=l[C];for(m in z)z.hasOwnProperty(m)&&(t||(t={}),t[m]="")}else C!=="dangerouslySetInnerHTML"&&C!=="children"&&C!=="suppressContentEditableWarning"&&C!=="suppressHydrationWarning"&&C!=="autoFocus"&&(c.hasOwnProperty(C)?u||(u=[]):(u=u||[]).push(C,null));for(C in o){var p=o[C];if(z=l?.[C],o.hasOwnProperty(C)&&p!==z&&(p!=null||z!=null))if(C==="style")if(z){for(m in z)!z.hasOwnProperty(m)||p&&p.hasOwnProperty(m)||(t||(t={}),t[m]="");for(m in p)p.hasOwnProperty(m)&&z[m]!==p[m]&&(t||(t={}),t[m]=p[m])}else t||(u||(u=[]),u.push(C,t)),t=p;else C==="dangerouslySetInnerHTML"?(p=p?p.__html:void 0,z=z?z.__html:void 0,p!=null&&z!==p&&(u=u||[]).push(C,p)):C==="children"?typeof p!="string"&&typeof p!="number"||(u=u||[]).push(C,""+p):C!=="suppressContentEditableWarning"&&C!=="suppressHydrationWarning"&&(c.hasOwnProperty(C)?(p!=null&&C==="onScroll"&&Ce("scroll",e),u||z===p||(u=[])):(u=u||[]).push(C,p))}t&&(u=u||[]).push("style",t);var C=u;(i.updateQueue=C)&&(i.flags|=4)}},Wd=function(e,i,t,o){t!==o&&(i.flags|=4)};function ba(e,i){if(!Te)switch(e.tailMode){case"hidden":i=e.tail;for(var t=null;i!==null;)i.alternate!==null&&(t=i),i=i.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var o=null;t!==null;)t.alternate!==null&&(o=t),t=t.sibling;o===null?i||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function qe(e){var i=e.alternate!==null&&e.alternate.child===e.child,t=0,o=0;if(i)for(var l=e.child;l!==null;)t|=l.lanes|l.childLanes,o|=l.subtreeFlags&14680064,o|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)t|=l.lanes|l.childLanes,o|=l.subtreeFlags,o|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=o,e.childLanes=t,i}function Mw(e,i,t){var o=i.pendingProps;switch(fs(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qe(i),null;case 1:return ai(i.type)&&yr(),qe(i),null;case 3:return o=i.stateNode,kn(),De(ni),De(Qe),As(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(e===null||e.child===null)&&(gr(i)?i.flags|=4:e===null||e.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Di!==null&&(tl(Di),Di=null))),Ks(e,i),qe(i),null;case 5:Cs(i);var l=_t(ha.current);if(t=i.type,e!==null&&i.stateNode!=null)Jd(e,i,t,o,l),e.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!o){if(i.stateNode===null)throw Error(r(166));return qe(i),null}if(e=_t(Fi.current),gr(i)){o=i.stateNode,t=i.type;var u=i.memoizedProps;switch(o[Oi]=i,o[fa]=u,e=(i.mode&1)!==0,t){case"dialog":Ce("cancel",o),Ce("close",o);break;case"iframe":case"object":case"embed":Ce("load",o);break;case"video":case"audio":for(l=0;l<ca.length;l++)Ce(ca[l],o);break;case"source":Ce("error",o);break;case"img":case"image":case"link":Ce("error",o),Ce("load",o);break;case"details":Ce("toggle",o);break;case"input":ve(o,u),Ce("invalid",o);break;case"select":o._wrapperState={wasMultiple:!!u.multiple},Ce("invalid",o);break;case"textarea":La(o,u),Ce("invalid",o)}Do(t,u),l=null;for(var m in u)if(u.hasOwnProperty(m)){var z=u[m];m==="children"?typeof z=="string"?o.textContent!==z&&(u.suppressHydrationWarning!==!0&&dr(o.textContent,z,e),l=["children",z]):typeof z=="number"&&o.textContent!==""+z&&(u.suppressHydrationWarning!==!0&&dr(o.textContent,z,e),l=["children",""+z]):c.hasOwnProperty(m)&&z!=null&&m==="onScroll"&&Ce("scroll",o)}switch(t){case"input":Ji(o),Wa(o,u,!0);break;case"textarea":Ji(o),Ha(o);break;case"select":case"option":break;default:typeof u.onClick=="function"&&(o.onclick=mr)}o=l,i.updateQueue=o,o!==null&&(i.flags|=4)}else{m=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=fe(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=m.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof o.is=="string"?e=m.createElement(t,{is:o.is}):(e=m.createElement(t),t==="select"&&(m=e,o.multiple?m.multiple=!0:o.size&&(m.size=o.size))):e=m.createElementNS(e,t),e[Oi]=i,e[fa]=o,Id(e,i,!1,!1),i.stateNode=e;e:{switch(m=Ao(t,o),t){case"dialog":Ce("cancel",e),Ce("close",e),l=o;break;case"iframe":case"object":case"embed":Ce("load",e),l=o;break;case"video":case"audio":for(l=0;l<ca.length;l++)Ce(ca[l],e);l=o;break;case"source":Ce("error",e),l=o;break;case"img":case"image":case"link":Ce("error",e),Ce("load",e),l=o;break;case"details":Ce("toggle",e),l=o;break;case"input":ve(e,o),l=Ni(e,o),Ce("invalid",e);break;case"option":l=o;break;case"select":e._wrapperState={wasMultiple:!!o.multiple},l=_({},o,{value:void 0}),Ce("invalid",e);break;case"textarea":La(e,o),l=Ln(e,o),Ce("invalid",e);break;default:l=o}Do(t,l),z=l;for(u in z)if(z.hasOwnProperty(u)){var p=z[u];u==="style"?xu(e,p):u==="dangerouslySetInnerHTML"?(p=p?p.__html:void 0,p!=null&&Tu(e,p)):u==="children"?typeof p=="string"?(t!=="textarea"||p!=="")&&Kn(e,p):typeof p=="number"&&Kn(e,""+p):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(c.hasOwnProperty(u)?p!=null&&u==="onScroll"&&Ce("scroll",e):p!=null&&ne(e,u,p,m))}switch(t){case"input":Ji(e),Wa(e,o,!1);break;case"textarea":Ji(e),Ha(e);break;case"option":o.value!=null&&e.setAttribute("value",""+me(o.value));break;case"select":e.multiple=!!o.multiple,u=o.value,u!=null?rt(e,!!o.multiple,u,!1):o.defaultValue!=null&&rt(e,!!o.multiple,o.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=mr)}switch(t){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}}o&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return qe(i),null;case 6:if(e&&i.stateNode!=null)Wd(e,i,e.memoizedProps,o);else{if(typeof o!="string"&&i.stateNode===null)throw Error(r(166));if(t=_t(ha.current),_t(Fi.current),gr(i)){if(o=i.stateNode,t=i.memoizedProps,o[Oi]=i,(u=o.nodeValue!==t)&&(e=di,e!==null))switch(e.tag){case 3:dr(o.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&dr(o.nodeValue,t,(e.mode&1)!==0)}u&&(i.flags|=4)}else o=(t.nodeType===9?t:t.ownerDocument).createTextNode(o),o[Oi]=i,i.stateNode=o}return qe(i),null;case 13:if(De(Se),o=i.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Te&&mi!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Kc(),pn(),i.flags|=98560,u=!1;else if(u=gr(i),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(r(318));if(u=i.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[Oi]=i}else pn(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;qe(i),u=!1}else Di!==null&&(tl(Di),Di=null),u=!0;if(!u)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=t,i):(o=o!==null,o!==(e!==null&&e.memoizedState!==null)&&o&&(i.child.flags|=8192,(i.mode&1)!==0&&(e===null||(Se.current&1)!==0?Je===0&&(Je=3):rl())),i.updateQueue!==null&&(i.flags|=4),qe(i),null);case 4:return kn(),Ks(e,i),e===null&&da(i.stateNode.containerInfo),qe(i),null;case 10:return gs(i.type._context),qe(i),null;case 17:return ai(i.type)&&yr(),qe(i),null;case 19:if(De(Se),u=i.memoizedState,u===null)return qe(i),null;if(o=(i.flags&128)!==0,m=u.rendering,m===null)if(o)ba(u,!1);else{if(Je!==0||e!==null&&(e.flags&128)!==0)for(e=i.child;e!==null;){if(m=Dr(e),m!==null){for(i.flags|=128,ba(u,!1),o=m.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),i.subtreeFlags=0,o=t,t=i.child;t!==null;)u=t,e=o,u.flags&=14680066,m=u.alternate,m===null?(u.childLanes=0,u.lanes=e,u.child=null,u.subtreeFlags=0,u.memoizedProps=null,u.memoizedState=null,u.updateQueue=null,u.dependencies=null,u.stateNode=null):(u.childLanes=m.childLanes,u.lanes=m.lanes,u.child=m.child,u.subtreeFlags=0,u.deletions=null,u.memoizedProps=m.memoizedProps,u.memoizedState=m.memoizedState,u.updateQueue=m.updateQueue,u.type=m.type,e=m.dependencies,u.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return be(Se,Se.current&1|2),i.child}e=e.sibling}u.tail!==null&&Re()>Dn&&(i.flags|=128,o=!0,ba(u,!1),i.lanes=4194304)}else{if(!o)if(e=Dr(m),e!==null){if(i.flags|=128,o=!0,t=e.updateQueue,t!==null&&(i.updateQueue=t,i.flags|=4),ba(u,!0),u.tail===null&&u.tailMode==="hidden"&&!m.alternate&&!Te)return qe(i),null}else 2*Re()-u.renderingStartTime>Dn&&t!==1073741824&&(i.flags|=128,o=!0,ba(u,!1),i.lanes=4194304);u.isBackwards?(m.sibling=i.child,i.child=m):(t=u.last,t!==null?t.sibling=m:i.child=m,u.last=m)}return u.tail!==null?(i=u.tail,u.rendering=i,u.tail=i.sibling,u.renderingStartTime=Re(),i.sibling=null,t=Se.current,be(Se,o?t&1|2:t&1),i):(qe(i),null);case 22:case 23:return al(),o=i.memoizedState!==null,e!==null&&e.memoizedState!==null!==o&&(i.flags|=8192),o&&(i.mode&1)!==0?(fi&1073741824)!==0&&(qe(i),i.subtreeFlags&6&&(i.flags|=8192)):qe(i),null;case 24:return null;case 25:return null}throw Error(r(156,i.tag))}function Iw(e,i){switch(fs(i),i.tag){case 1:return ai(i.type)&&yr(),e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 3:return kn(),De(ni),De(Qe),As(),e=i.flags,(e&65536)!==0&&(e&128)===0?(i.flags=e&-65537|128,i):null;case 5:return Cs(i),null;case 13:if(De(Se),e=i.memoizedState,e!==null&&e.dehydrated!==null){if(i.alternate===null)throw Error(r(340));pn()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 19:return De(Se),null;case 4:return kn(),null;case 10:return gs(i.type._context),null;case 22:case 23:return al(),null;case 24:return null;default:return null}}var Br=!1,ei=!1,Jw=typeof WeakSet=="function"?WeakSet:Set,W=null;function bn(e,i){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(o){Ne(e,i,o)}else t.current=null}function Us(e,i,t){try{t()}catch(o){Ne(e,i,o)}}var Ld=!1;function Ww(e,i){if(as=er,e=kc(),Yo(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var o=t.getSelection&&t.getSelection();if(o&&o.rangeCount!==0){t=o.anchorNode;var l=o.anchorOffset,u=o.focusNode;o=o.focusOffset;try{t.nodeType,u.nodeType}catch{t=null;break e}var m=0,z=-1,p=-1,C=0,S=0,N=e,T=null;i:for(;;){for(var M;N!==t||l!==0&&N.nodeType!==3||(z=m+l),N!==u||o!==0&&N.nodeType!==3||(p=m+o),N.nodeType===3&&(m+=N.nodeValue.length),(M=N.firstChild)!==null;)T=N,N=M;for(;;){if(N===e)break i;if(T===t&&++C===l&&(z=m),T===u&&++S===o&&(p=m),(M=N.nextSibling)!==null)break;N=T,T=N.parentNode}N=M}t=z===-1||p===-1?null:{start:z,end:p}}else t=null}t=t||{start:0,end:0}}else t=null;for(rs={focusedElem:e,selectionRange:t},er=!1,W=i;W!==null;)if(i=W,e=i.child,(i.subtreeFlags&1028)!==0&&e!==null)e.return=i,W=e;else for(;W!==null;){i=W;try{var H=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(H!==null){var K=H.memoizedProps,Oe=H.memoizedState,k=i.stateNode,h=k.getSnapshotBeforeUpdate(i.elementType===i.type?K:Ai(i.type,K),Oe);k.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var b=i.stateNode.containerInfo;b.nodeType===1?b.textContent="":b.nodeType===9&&b.documentElement&&b.removeChild(b.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(r(163))}}catch(R){Ne(i,i.return,R)}if(e=i.sibling,e!==null){e.return=i.return,W=e;break}W=i.return}return H=Ld,Ld=!1,H}function Ca(e,i,t){var o=i.updateQueue;if(o=o!==null?o.lastEffect:null,o!==null){var l=o=o.next;do{if((l.tag&e)===e){var u=l.destroy;l.destroy=void 0,u!==void 0&&Us(i,t,u)}l=l.next}while(l!==o)}}function Rr(e,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var t=i=i.next;do{if((t.tag&e)===e){var o=t.create;t.destroy=o()}t=t.next}while(t!==i)}}function $s(e){var i=e.ref;if(i!==null){var t=e.stateNode;e.tag,e=t,typeof i=="function"?i(e):i.current=e}}function Hd(e){var i=e.alternate;i!==null&&(e.alternate=null,Hd(i)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(i=e.stateNode,i!==null&&(delete i[Oi],delete i[fa],delete i[us],delete i[Cw],delete i[Dw])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Kd(e){return e.tag===5||e.tag===3||e.tag===4}function Ud(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Kd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Zs(e,i,t){var o=e.tag;if(o===5||o===6)e=e.stateNode,i?t.nodeType===8?t.parentNode.insertBefore(e,i):t.insertBefore(e,i):(t.nodeType===8?(i=t.parentNode,i.insertBefore(e,t)):(i=t,i.appendChild(e)),t=t._reactRootContainer,t!=null||i.onclick!==null||(i.onclick=mr));else if(o!==4&&(e=e.child,e!==null))for(Zs(e,i,t),e=e.sibling;e!==null;)Zs(e,i,t),e=e.sibling}function Vs(e,i,t){var o=e.tag;if(o===5||o===6)e=e.stateNode,i?t.insertBefore(e,i):t.appendChild(e);else if(o!==4&&(e=e.child,e!==null))for(Vs(e,i,t),e=e.sibling;e!==null;)Vs(e,i,t),e=e.sibling}var $e=null,Ei=!1;function ht(e,i,t){for(t=t.child;t!==null;)$d(e,i,t),t=t.sibling}function $d(e,i,t){if(Ri&&typeof Ri.onCommitFiberUnmount=="function")try{Ri.onCommitFiberUnmount(Za,t)}catch{}switch(t.tag){case 5:ei||bn(t,i);case 6:var o=$e,l=Ei;$e=null,ht(e,i,t),$e=o,Ei=l,$e!==null&&(Ei?(e=$e,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):$e.removeChild(t.stateNode));break;case 18:$e!==null&&(Ei?(e=$e,t=t.stateNode,e.nodeType===8?ls(e.parentNode,t):e.nodeType===1&&ls(e,t),ta(e)):ls($e,t.stateNode));break;case 4:o=$e,l=Ei,$e=t.stateNode.containerInfo,Ei=!0,ht(e,i,t),$e=o,Ei=l;break;case 0:case 11:case 14:case 15:if(!ei&&(o=t.updateQueue,o!==null&&(o=o.lastEffect,o!==null))){l=o=o.next;do{var u=l,m=u.destroy;u=u.tag,m!==void 0&&((u&2)!==0||(u&4)!==0)&&Us(t,i,m),l=l.next}while(l!==o)}ht(e,i,t);break;case 1:if(!ei&&(bn(t,i),o=t.stateNode,typeof o.componentWillUnmount=="function"))try{o.props=t.memoizedProps,o.state=t.memoizedState,o.componentWillUnmount()}catch(z){Ne(t,i,z)}ht(e,i,t);break;case 21:ht(e,i,t);break;case 22:t.mode&1?(ei=(o=ei)||t.memoizedState!==null,ht(e,i,t),ei=o):ht(e,i,t);break;default:ht(e,i,t)}}function Zd(e){var i=e.updateQueue;if(i!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new Jw),i.forEach(function(o){var l=Qw.bind(null,e,o);t.has(o)||(t.add(o),o.then(l,l))})}}function Pi(e,i){var t=i.deletions;if(t!==null)for(var o=0;o<t.length;o++){var l=t[o];try{var u=e,m=i,z=m;e:for(;z!==null;){switch(z.tag){case 5:$e=z.stateNode,Ei=!1;break e;case 3:$e=z.stateNode.containerInfo,Ei=!0;break e;case 4:$e=z.stateNode.containerInfo,Ei=!0;break e}z=z.return}if($e===null)throw Error(r(160));$d(u,m,l),$e=null,Ei=!1;var p=l.alternate;p!==null&&(p.return=null),l.return=null}catch(C){Ne(l,i,C)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Vd(i,e),i=i.sibling}function Vd(e,i){var t=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Pi(i,e),Mi(e),o&4){try{Ca(3,e,e.return),Rr(3,e)}catch(K){Ne(e,e.return,K)}try{Ca(5,e,e.return)}catch(K){Ne(e,e.return,K)}}break;case 1:Pi(i,e),Mi(e),o&512&&t!==null&&bn(t,t.return);break;case 5:if(Pi(i,e),Mi(e),o&512&&t!==null&&bn(t,t.return),e.flags&32){var l=e.stateNode;try{Kn(l,"")}catch(K){Ne(e,e.return,K)}}if(o&4&&(l=e.stateNode,l!=null)){var u=e.memoizedProps,m=t!==null?t.memoizedProps:u,z=e.type,p=e.updateQueue;if(e.updateQueue=null,p!==null)try{z==="input"&&u.type==="radio"&&u.name!=null&&Tt(l,u),Ao(z,m);var C=Ao(z,u);for(m=0;m<p.length;m+=2){var S=p[m],N=p[m+1];S==="style"?xu(l,N):S==="dangerouslySetInnerHTML"?Tu(l,N):S==="children"?Kn(l,N):ne(l,S,N,C)}switch(z){case"input":Li(l,u);break;case"textarea":Hn(l,u);break;case"select":var T=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!u.multiple;var M=u.value;M!=null?rt(l,!!u.multiple,M,!1):T!==!!u.multiple&&(u.defaultValue!=null?rt(l,!!u.multiple,u.defaultValue,!0):rt(l,!!u.multiple,u.multiple?[]:"",!1))}l[fa]=u}catch(K){Ne(e,e.return,K)}}break;case 6:if(Pi(i,e),Mi(e),o&4){if(e.stateNode===null)throw Error(r(162));l=e.stateNode,u=e.memoizedProps;try{l.nodeValue=u}catch(K){Ne(e,e.return,K)}}break;case 3:if(Pi(i,e),Mi(e),o&4&&t!==null&&t.memoizedState.isDehydrated)try{ta(i.containerInfo)}catch(K){Ne(e,e.return,K)}break;case 4:Pi(i,e),Mi(e);break;case 13:Pi(i,e),Mi(e),l=e.child,l.flags&8192&&(u=l.memoizedState!==null,l.stateNode.isHidden=u,!u||l.alternate!==null&&l.alternate.memoizedState!==null||(Xs=Re())),o&4&&Zd(e);break;case 22:if(S=t!==null&&t.memoizedState!==null,e.mode&1?(ei=(C=ei)||S,Pi(i,e),ei=C):Pi(i,e),Mi(e),o&8192){if(C=e.memoizedState!==null,(e.stateNode.isHidden=C)&&!S&&(e.mode&1)!==0)for(W=e,S=e.child;S!==null;){for(N=W=S;W!==null;){switch(T=W,M=T.child,T.tag){case 0:case 11:case 14:case 15:Ca(4,T,T.return);break;case 1:bn(T,T.return);var H=T.stateNode;if(typeof H.componentWillUnmount=="function"){o=T,t=T.return;try{i=o,H.props=i.memoizedProps,H.state=i.memoizedState,H.componentWillUnmount()}catch(K){Ne(o,t,K)}}break;case 5:bn(T,T.return);break;case 22:if(T.memoizedState!==null){Xd(N);continue}}M!==null?(M.return=T,W=M):Xd(N)}S=S.sibling}e:for(S=null,N=e;;){if(N.tag===5){if(S===null){S=N;try{l=N.stateNode,C?(u=l.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none"):(z=N.stateNode,p=N.memoizedProps.style,m=p!=null&&p.hasOwnProperty("display")?p.display:null,z.style.display=Su("display",m))}catch(K){Ne(e,e.return,K)}}}else if(N.tag===6){if(S===null)try{N.stateNode.nodeValue=C?"":N.memoizedProps}catch(K){Ne(e,e.return,K)}}else if((N.tag!==22&&N.tag!==23||N.memoizedState===null||N===e)&&N.child!==null){N.child.return=N,N=N.child;continue}if(N===e)break e;for(;N.sibling===null;){if(N.return===null||N.return===e)break e;S===N&&(S=null),N=N.return}S===N&&(S=null),N.sibling.return=N.return,N=N.sibling}}break;case 19:Pi(i,e),Mi(e),o&4&&Zd(e);break;case 21:break;default:Pi(i,e),Mi(e)}}function Mi(e){var i=e.flags;if(i&2){try{e:{for(var t=e.return;t!==null;){if(Kd(t)){var o=t;break e}t=t.return}throw Error(r(160))}switch(o.tag){case 5:var l=o.stateNode;o.flags&32&&(Kn(l,""),o.flags&=-33);var u=Ud(e);Vs(e,u,l);break;case 3:case 4:var m=o.stateNode.containerInfo,z=Ud(e);Zs(e,z,m);break;default:throw Error(r(161))}}catch(p){Ne(e,e.return,p)}e.flags&=-3}i&4096&&(e.flags&=-4097)}function Lw(e,i,t){W=e,Yd(e)}function Yd(e,i,t){for(var o=(e.mode&1)!==0;W!==null;){var l=W,u=l.child;if(l.tag===22&&o){var m=l.memoizedState!==null||Br;if(!m){var z=l.alternate,p=z!==null&&z.memoizedState!==null||ei;z=Br;var C=ei;if(Br=m,(ei=p)&&!C)for(W=l;W!==null;)m=W,p=m.child,m.tag===22&&m.memoizedState!==null?qd(l):p!==null?(p.return=m,W=p):qd(l);for(;u!==null;)W=u,Yd(u),u=u.sibling;W=l,Br=z,ei=C}Qd(e)}else(l.subtreeFlags&8772)!==0&&u!==null?(u.return=l,W=u):Qd(e)}}function Qd(e){for(;W!==null;){var i=W;if((i.flags&8772)!==0){var t=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:ei||Rr(5,i);break;case 1:var o=i.stateNode;if(i.flags&4&&!ei)if(t===null)o.componentDidMount();else{var l=i.elementType===i.type?t.memoizedProps:Ai(i.type,t.memoizedProps);o.componentDidUpdate(l,t.memoizedState,o.__reactInternalSnapshotBeforeUpdate)}var u=i.updateQueue;u!==null&&Xc(i,u,o);break;case 3:var m=i.updateQueue;if(m!==null){if(t=null,i.child!==null)switch(i.child.tag){case 5:t=i.child.stateNode;break;case 1:t=i.child.stateNode}Xc(i,m,t)}break;case 5:var z=i.stateNode;if(t===null&&i.flags&4){t=z;var p=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":p.autoFocus&&t.focus();break;case"img":p.src&&(t.src=p.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var C=i.alternate;if(C!==null){var S=C.memoizedState;if(S!==null){var N=S.dehydrated;N!==null&&ta(N)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(r(163))}ei||i.flags&512&&$s(i)}catch(T){Ne(i,i.return,T)}}if(i===e){W=null;break}if(t=i.sibling,t!==null){t.return=i.return,W=t;break}W=i.return}}function Xd(e){for(;W!==null;){var i=W;if(i===e){W=null;break}var t=i.sibling;if(t!==null){t.return=i.return,W=t;break}W=i.return}}function qd(e){for(;W!==null;){var i=W;try{switch(i.tag){case 0:case 11:case 15:var t=i.return;try{Rr(4,i)}catch(p){Ne(i,t,p)}break;case 1:var o=i.stateNode;if(typeof o.componentDidMount=="function"){var l=i.return;try{o.componentDidMount()}catch(p){Ne(i,l,p)}}var u=i.return;try{$s(i)}catch(p){Ne(i,u,p)}break;case 5:var m=i.return;try{$s(i)}catch(p){Ne(i,m,p)}}}catch(p){Ne(i,i.return,p)}if(i===e){W=null;break}var z=i.sibling;if(z!==null){z.return=i.return,W=z;break}W=i.return}}var Hw=Math.ceil,Or=ae.ReactCurrentDispatcher,Ys=ae.ReactCurrentOwner,ji=ae.ReactCurrentBatchConfig,ye=0,Le=null,_e=null,Ze=0,fi=0,Cn=ft(0),Je=0,Da=null,It=0,Fr=0,Qs=0,Aa=null,oi=null,Xs=0,Dn=1/0,Qi=null,_r=!1,qs=null,gt=null,Mr=!1,jt=null,Ir=0,Ea=0,el=null,Jr=-1,Wr=0;function ti(){return(ye&6)!==0?Re():Jr!==-1?Jr:Jr=Re()}function kt(e){return(e.mode&1)===0?1:(ye&2)!==0&&Ze!==0?Ze&-Ze:Ew.transition!==null?(Wr===0&&(Wr=Uu()),Wr):(e=ke,e!==0||(e=window.event,e=e===void 0?16:ic(e.type)),e)}function Ti(e,i,t,o){if(50<Ea)throw Ea=0,el=null,Error(r(185));Qn(e,t,o),((ye&2)===0||e!==Le)&&(e===Le&&((ye&2)===0&&(Fr|=t),Je===4&&vt(e,Ze)),si(e,o),t===1&&ye===0&&(i.mode&1)===0&&(Dn=Re()+500,wr&&zt()))}function si(e,i){var t=e.callbackNode;Ez(e,i);var o=Qa(e,e===Le?Ze:0);if(o===0)t!==null&&Lu(t),e.callbackNode=null,e.callbackPriority=0;else if(i=o&-o,e.callbackPriority!==i){if(t!=null&&Lu(t),i===1)e.tag===0?Aw(im.bind(null,e)):Ic(im.bind(null,e)),vw(function(){(ye&6)===0&&zt()}),t=null;else{switch($u(o)){case 1:t=No;break;case 4:t=Hu;break;case 16:t=$a;break;case 536870912:t=Ku;break;default:t=$a}t=um(t,em.bind(null,e))}e.callbackPriority=i,e.callbackNode=t}}function em(e,i){if(Jr=-1,Wr=0,(ye&6)!==0)throw Error(r(327));var t=e.callbackNode;if(An()&&e.callbackNode!==t)return null;var o=Qa(e,e===Le?Ze:0);if(o===0)return null;if((o&30)!==0||(o&e.expiredLanes)!==0||i)i=Lr(e,o);else{i=o;var l=ye;ye|=2;var u=nm();(Le!==e||Ze!==i)&&(Qi=null,Dn=Re()+500,Wt(e,i));do try{$w();break}catch(z){tm(e,z)}while(!0);hs(),Or.current=u,ye=l,_e!==null?i=0:(Le=null,Ze=0,i=Je)}if(i!==0){if(i===2&&(l=Bo(e),l!==0&&(o=l,i=il(e,l))),i===1)throw t=Da,Wt(e,0),vt(e,o),si(e,Re()),t;if(i===6)vt(e,o);else{if(l=e.current.alternate,(o&30)===0&&!Kw(l)&&(i=Lr(e,o),i===2&&(u=Bo(e),u!==0&&(o=u,i=il(e,u))),i===1))throw t=Da,Wt(e,0),vt(e,o),si(e,Re()),t;switch(e.finishedWork=l,e.finishedLanes=o,i){case 0:case 1:throw Error(r(345));case 2:Lt(e,oi,Qi);break;case 3:if(vt(e,o),(o&130023424)===o&&(i=Xs+500-Re(),10<i)){if(Qa(e,0)!==0)break;if(l=e.suspendedLanes,(l&o)!==o){ti(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=ss(Lt.bind(null,e,oi,Qi),i);break}Lt(e,oi,Qi);break;case 4:if(vt(e,o),(o&4194240)===o)break;for(i=e.eventTimes,l=-1;0<o;){var m=31-bi(o);u=1<<m,m=i[m],m>l&&(l=m),o&=~u}if(o=l,o=Re()-o,o=(120>o?120:480>o?480:1080>o?1080:1920>o?1920:3e3>o?3e3:4320>o?4320:1960*Hw(o/1960))-o,10<o){e.timeoutHandle=ss(Lt.bind(null,e,oi,Qi),o);break}Lt(e,oi,Qi);break;case 5:Lt(e,oi,Qi);break;default:throw Error(r(329))}}}return si(e,Re()),e.callbackNode===t?em.bind(null,e):null}function il(e,i){var t=Aa;return e.current.memoizedState.isDehydrated&&(Wt(e,i).flags|=256),e=Lr(e,i),e!==2&&(i=oi,oi=t,i!==null&&tl(i)),e}function tl(e){oi===null?oi=e:oi.push.apply(oi,e)}function Kw(e){for(var i=e;;){if(i.flags&16384){var t=i.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var o=0;o<t.length;o++){var l=t[o],u=l.getSnapshot;l=l.value;try{if(!Ci(u(),l))return!1}catch{return!1}}}if(t=i.child,i.subtreeFlags&16384&&t!==null)t.return=i,i=t;else{if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function vt(e,i){for(i&=~Qs,i&=~Fr,e.suspendedLanes|=i,e.pingedLanes&=~i,e=e.expirationTimes;0<i;){var t=31-bi(i),o=1<<t;e[t]=-1,i&=~o}}function im(e){if((ye&6)!==0)throw Error(r(327));An();var i=Qa(e,0);if((i&1)===0)return si(e,Re()),null;var t=Lr(e,i);if(e.tag!==0&&t===2){var o=Bo(e);o!==0&&(i=o,t=il(e,o))}if(t===1)throw t=Da,Wt(e,0),vt(e,i),si(e,Re()),t;if(t===6)throw Error(r(345));return e.finishedWork=e.current.alternate,e.finishedLanes=i,Lt(e,oi,Qi),si(e,Re()),null}function nl(e,i){var t=ye;ye|=1;try{return e(i)}finally{ye=t,ye===0&&(Dn=Re()+500,wr&&zt())}}function Jt(e){jt!==null&&jt.tag===0&&(ye&6)===0&&An();var i=ye;ye|=1;var t=ji.transition,o=ke;try{if(ji.transition=null,ke=1,e)return e()}finally{ke=o,ji.transition=t,ye=i,(ye&6)===0&&zt()}}function al(){fi=Cn.current,De(Cn)}function Wt(e,i){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,kw(t)),_e!==null)for(t=_e.return;t!==null;){var o=t;switch(fs(o),o.tag){case 1:o=o.type.childContextTypes,o!=null&&yr();break;case 3:kn(),De(ni),De(Qe),As();break;case 5:Cs(o);break;case 4:kn();break;case 13:De(Se);break;case 19:De(Se);break;case 10:gs(o.type._context);break;case 22:case 23:al()}t=t.return}if(Le=e,_e=e=bt(e.current,null),Ze=fi=i,Je=0,Da=null,Qs=Fr=It=0,oi=Aa=null,Ft!==null){for(i=0;i<Ft.length;i++)if(t=Ft[i],o=t.interleaved,o!==null){t.interleaved=null;var l=o.next,u=t.pending;if(u!==null){var m=u.next;u.next=l,o.next=m}t.pending=o}Ft=null}return e}function tm(e,i){do{var t=_e;try{if(hs(),Ar.current=Sr,Er){for(var o=xe.memoizedState;o!==null;){var l=o.queue;l!==null&&(l.pending=null),o=o.next}Er=!1}if(Mt=0,We=Ie=xe=null,ga=!1,ja=0,Ys.current=null,t===null||t.return===null){Je=1,Da=i,_e=null;break}e:{var u=e,m=t.return,z=t,p=i;if(i=Ze,z.flags|=32768,p!==null&&typeof p=="object"&&typeof p.then=="function"){var C=p,S=z,N=S.tag;if((S.mode&1)===0&&(N===0||N===11||N===15)){var T=S.alternate;T?(S.updateQueue=T.updateQueue,S.memoizedState=T.memoizedState,S.lanes=T.lanes):(S.updateQueue=null,S.memoizedState=null)}var M=Ed(m);if(M!==null){M.flags&=-257,Pd(M,m,z,u,i),M.mode&1&&Ad(u,C,i),i=M,p=C;var H=i.updateQueue;if(H===null){var K=new Set;K.add(p),i.updateQueue=K}else H.add(p);break e}else{if((i&1)===0){Ad(u,C,i),rl();break e}p=Error(r(426))}}else if(Te&&z.mode&1){var Oe=Ed(m);if(Oe!==null){(Oe.flags&65536)===0&&(Oe.flags|=256),Pd(Oe,m,z,u,i),ws(vn(p,z));break e}}u=p=vn(p,z),Je!==4&&(Je=2),Aa===null?Aa=[u]:Aa.push(u),u=m;do{switch(u.tag){case 3:u.flags|=65536,i&=-i,u.lanes|=i;var k=Cd(u,p,i);Qc(u,k);break e;case 1:z=p;var h=u.type,b=u.stateNode;if((u.flags&128)===0&&(typeof h.getDerivedStateFromError=="function"||b!==null&&typeof b.componentDidCatch=="function"&&(gt===null||!gt.has(b)))){u.flags|=65536,i&=-i,u.lanes|=i;var R=Dd(u,z,i);Qc(u,R);break e}}u=u.return}while(u!==null)}rm(t)}catch(Z){i=Z,_e===t&&t!==null&&(_e=t=t.return);continue}break}while(!0)}function nm(){var e=Or.current;return Or.current=Sr,e===null?Sr:e}function rl(){(Je===0||Je===3||Je===2)&&(Je=4),Le===null||(It&268435455)===0&&(Fr&268435455)===0||vt(Le,Ze)}function Lr(e,i){var t=ye;ye|=2;var o=nm();(Le!==e||Ze!==i)&&(Qi=null,Wt(e,i));do try{Uw();break}catch(l){tm(e,l)}while(!0);if(hs(),ye=t,Or.current=o,_e!==null)throw Error(r(261));return Le=null,Ze=0,Je}function Uw(){for(;_e!==null;)am(_e)}function $w(){for(;_e!==null&&!hz();)am(_e)}function am(e){var i=lm(e.alternate,e,fi);e.memoizedProps=e.pendingProps,i===null?rm(e):_e=i,Ys.current=null}function rm(e){var i=e;do{var t=i.alternate;if(e=i.return,(i.flags&32768)===0){if(t=Mw(t,i,fi),t!==null){_e=t;return}}else{if(t=Iw(t,i),t!==null){t.flags&=32767,_e=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Je=6,_e=null;return}}if(i=i.sibling,i!==null){_e=i;return}_e=i=e}while(i!==null);Je===0&&(Je=5)}function Lt(e,i,t){var o=ke,l=ji.transition;try{ji.transition=null,ke=1,Zw(e,i,t,o)}finally{ji.transition=l,ke=o}return null}function Zw(e,i,t,o){do An();while(jt!==null);if((ye&6)!==0)throw Error(r(327));t=e.finishedWork;var l=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(r(177));e.callbackNode=null,e.callbackPriority=0;var u=t.lanes|t.childLanes;if(Pz(e,u),e===Le&&(_e=Le=null,Ze=0),(t.subtreeFlags&2064)===0&&(t.flags&2064)===0||Mr||(Mr=!0,um($a,function(){return An(),null})),u=(t.flags&15990)!==0,(t.subtreeFlags&15990)!==0||u){u=ji.transition,ji.transition=null;var m=ke;ke=1;var z=ye;ye|=4,Ys.current=null,Ww(e,t),Vd(t,e),yw(rs),er=!!as,rs=as=null,e.current=t,Lw(t),gz(),ye=z,ke=m,ji.transition=u}else e.current=t;if(Mr&&(Mr=!1,jt=e,Ir=l),u=e.pendingLanes,u===0&&(gt=null),vz(t.stateNode),si(e,Re()),i!==null)for(o=e.onRecoverableError,t=0;t<i.length;t++)l=i[t],o(l.value,{componentStack:l.stack,digest:l.digest});if(_r)throw _r=!1,e=qs,qs=null,e;return(Ir&1)!==0&&e.tag!==0&&An(),u=e.pendingLanes,(u&1)!==0?e===el?Ea++:(Ea=0,el=e):Ea=0,zt(),null}function An(){if(jt!==null){var e=$u(Ir),i=ji.transition,t=ke;try{if(ji.transition=null,ke=16>e?16:e,jt===null)var o=!1;else{if(e=jt,jt=null,Ir=0,(ye&6)!==0)throw Error(r(331));var l=ye;for(ye|=4,W=e.current;W!==null;){var u=W,m=u.child;if((W.flags&16)!==0){var z=u.deletions;if(z!==null){for(var p=0;p<z.length;p++){var C=z[p];for(W=C;W!==null;){var S=W;switch(S.tag){case 0:case 11:case 15:Ca(8,S,u)}var N=S.child;if(N!==null)N.return=S,W=N;else for(;W!==null;){S=W;var T=S.sibling,M=S.return;if(Hd(S),S===C){W=null;break}if(T!==null){T.return=M,W=T;break}W=M}}}var H=u.alternate;if(H!==null){var K=H.child;if(K!==null){H.child=null;do{var Oe=K.sibling;K.sibling=null,K=Oe}while(K!==null)}}W=u}}if((u.subtreeFlags&2064)!==0&&m!==null)m.return=u,W=m;else e:for(;W!==null;){if(u=W,(u.flags&2048)!==0)switch(u.tag){case 0:case 11:case 15:Ca(9,u,u.return)}var k=u.sibling;if(k!==null){k.return=u.return,W=k;break e}W=u.return}}var h=e.current;for(W=h;W!==null;){m=W;var b=m.child;if((m.subtreeFlags&2064)!==0&&b!==null)b.return=m,W=b;else e:for(m=h;W!==null;){if(z=W,(z.flags&2048)!==0)try{switch(z.tag){case 0:case 11:case 15:Rr(9,z)}}catch(Z){Ne(z,z.return,Z)}if(z===m){W=null;break e}var R=z.sibling;if(R!==null){R.return=z.return,W=R;break e}W=z.return}}if(ye=l,zt(),Ri&&typeof Ri.onPostCommitFiberRoot=="function")try{Ri.onPostCommitFiberRoot(Za,e)}catch{}o=!0}return o}finally{ke=t,ji.transition=i}}return!1}function om(e,i,t){i=vn(t,i),i=Cd(e,i,1),e=pt(e,i,1),i=ti(),e!==null&&(Qn(e,1,i),si(e,i))}function Ne(e,i,t){if(e.tag===3)om(e,e,t);else for(;i!==null;){if(i.tag===3){om(i,e,t);break}else if(i.tag===1){var o=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(gt===null||!gt.has(o))){e=vn(t,e),e=Dd(i,e,1),i=pt(i,e,1),e=ti(),i!==null&&(Qn(i,1,e),si(i,e));break}}i=i.return}}function Vw(e,i,t){var o=e.pingCache;o!==null&&o.delete(i),i=ti(),e.pingedLanes|=e.suspendedLanes&t,Le===e&&(Ze&t)===t&&(Je===4||Je===3&&(Ze&130023424)===Ze&&500>Re()-Xs?Wt(e,0):Qs|=t),si(e,i)}function sm(e,i){i===0&&((e.mode&1)===0?i=1:(i=Ya,Ya<<=1,(Ya&130023424)===0&&(Ya=4194304)));var t=ti();e=Zi(e,i),e!==null&&(Qn(e,i,t),si(e,t))}function Yw(e){var i=e.memoizedState,t=0;i!==null&&(t=i.retryLane),sm(e,t)}function Qw(e,i){var t=0;switch(e.tag){case 13:var o=e.stateNode,l=e.memoizedState;l!==null&&(t=l.retryLane);break;case 19:o=e.stateNode;break;default:throw Error(r(314))}o!==null&&o.delete(i),sm(e,t)}var lm;lm=function(e,i,t){if(e!==null)if(e.memoizedProps!==i.pendingProps||ni.current)ri=!0;else{if((e.lanes&t)===0&&(i.flags&128)===0)return ri=!1,_w(e,i,t);ri=(e.flags&131072)!==0}else ri=!1,Te&&(i.flags&1048576)!==0&&Jc(i,hr,i.index);switch(i.lanes=0,i.tag){case 2:var o=i.type;Nr(e,i),e=i.pendingProps;var l=yn(i,Qe.current);jn(i,t),l=Ts(null,i,o,e,l,t);var u=Ss();return i.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,ai(o)?(u=!0,zr(i)):u=!1,i.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,vs(i),l.updater=xr,i.stateNode=l,l._reactInternals=i,Os(i,o,e,t),i=Is(null,i,o,!0,u,t)):(i.tag=0,Te&&u&&ms(i),ii(null,i,l,t),i=i.child),i;case 16:o=i.elementType;e:{switch(Nr(e,i),e=i.pendingProps,l=o._init,o=l(o._payload),i.type=o,l=i.tag=qw(o),e=Ai(o,e),l){case 0:i=Ms(null,i,o,e,t);break e;case 1:i=Bd(null,i,o,e,t);break e;case 11:i=Td(null,i,o,e,t);break e;case 14:i=Sd(null,i,o,Ai(o.type,e),t);break e}throw Error(r(306,o,""))}return i;case 0:return o=i.type,l=i.pendingProps,l=i.elementType===o?l:Ai(o,l),Ms(e,i,o,l,t);case 1:return o=i.type,l=i.pendingProps,l=i.elementType===o?l:Ai(o,l),Bd(e,i,o,l,t);case 3:e:{if(Rd(i),e===null)throw Error(r(387));o=i.pendingProps,u=i.memoizedState,l=u.element,Yc(e,i),Cr(i,o,null,t);var m=i.memoizedState;if(o=m.element,u.isDehydrated)if(u={element:o,isDehydrated:!1,cache:m.cache,pendingSuspenseBoundaries:m.pendingSuspenseBoundaries,transitions:m.transitions},i.updateQueue.baseState=u,i.memoizedState=u,i.flags&256){l=vn(Error(r(423)),i),i=Od(e,i,o,t,l);break e}else if(o!==l){l=vn(Error(r(424)),i),i=Od(e,i,o,t,l);break e}else for(mi=mt(i.stateNode.containerInfo.firstChild),di=i,Te=!0,Di=null,t=Zc(i,null,o,t),i.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(pn(),o===l){i=Yi(e,i,t);break e}ii(e,i,o,t)}i=i.child}return i;case 5:return qc(i),e===null&&zs(i),o=i.type,l=i.pendingProps,u=e!==null?e.memoizedProps:null,m=l.children,os(o,l)?m=null:u!==null&&os(o,u)&&(i.flags|=32),Nd(e,i),ii(e,i,m,t),i.child;case 6:return e===null&&zs(i),null;case 13:return Fd(e,i,t);case 4:return bs(i,i.stateNode.containerInfo),o=i.pendingProps,e===null?i.child=hn(i,null,o,t):ii(e,i,o,t),i.child;case 11:return o=i.type,l=i.pendingProps,l=i.elementType===o?l:Ai(o,l),Td(e,i,o,l,t);case 7:return ii(e,i,i.pendingProps,t),i.child;case 8:return ii(e,i,i.pendingProps.children,t),i.child;case 12:return ii(e,i,i.pendingProps.children,t),i.child;case 10:e:{if(o=i.type._context,l=i.pendingProps,u=i.memoizedProps,m=l.value,be(kr,o._currentValue),o._currentValue=m,u!==null)if(Ci(u.value,m)){if(u.children===l.children&&!ni.current){i=Yi(e,i,t);break e}}else for(u=i.child,u!==null&&(u.return=i);u!==null;){var z=u.dependencies;if(z!==null){m=u.child;for(var p=z.firstContext;p!==null;){if(p.context===o){if(u.tag===1){p=Vi(-1,t&-t),p.tag=2;var C=u.updateQueue;if(C!==null){C=C.shared;var S=C.pending;S===null?p.next=p:(p.next=S.next,S.next=p),C.pending=p}}u.lanes|=t,p=u.alternate,p!==null&&(p.lanes|=t),js(u.return,t,i),z.lanes|=t;break}p=p.next}}else if(u.tag===10)m=u.type===i.type?null:u.child;else if(u.tag===18){if(m=u.return,m===null)throw Error(r(341));m.lanes|=t,z=m.alternate,z!==null&&(z.lanes|=t),js(m,t,i),m=u.sibling}else m=u.child;if(m!==null)m.return=u;else for(m=u;m!==null;){if(m===i){m=null;break}if(u=m.sibling,u!==null){u.return=m.return,m=u;break}m=m.return}u=m}ii(e,i,l.children,t),i=i.child}return i;case 9:return l=i.type,o=i.pendingProps.children,jn(i,t),l=hi(l),o=o(l),i.flags|=1,ii(e,i,o,t),i.child;case 14:return o=i.type,l=Ai(o,i.pendingProps),l=Ai(o.type,l),Sd(e,i,o,l,t);case 15:return xd(e,i,i.type,i.pendingProps,t);case 17:return o=i.type,l=i.pendingProps,l=i.elementType===o?l:Ai(o,l),Nr(e,i),i.tag=1,ai(o)?(e=!0,zr(i)):e=!1,jn(i,t),vd(i,o,l),Os(i,o,l,t),Is(null,i,o,!0,e,t);case 19:return Md(e,i,t);case 22:return Gd(e,i,t)}throw Error(r(156,i.tag))};function um(e,i){return Wu(e,i)}function Xw(e,i,t,o){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ki(e,i,t,o){return new Xw(e,i,t,o)}function ol(e){return e=e.prototype,!(!e||!e.isReactComponent)}function qw(e){if(typeof e=="function")return ol(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ee)return 11;if(e===Be)return 14}return 2}function bt(e,i){var t=e.alternate;return t===null?(t=ki(e.tag,i,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=i,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,i=e.dependencies,t.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function Hr(e,i,t,o,l,u){var m=2;if(o=e,typeof e=="function")ol(e)&&(m=1);else if(typeof e=="string")m=5;else e:switch(e){case ce:return Ht(t.children,l,u,i);case Pe:m=8,l|=8;break;case Ye:return e=ki(12,t,i,l|2),e.elementType=Ye,e.lanes=u,e;case ge:return e=ki(13,t,i,l),e.elementType=ge,e.lanes=u,e;case de:return e=ki(19,t,i,l),e.elementType=de,e.lanes=u,e;case ze:return Kr(t,l,u,i);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ue:m=10;break e;case ui:m=9;break e;case ee:m=11;break e;case Be:m=14;break e;case je:m=16,o=null;break e}throw Error(r(130,e==null?e:typeof e,""))}return i=ki(m,t,i,l),i.elementType=e,i.type=o,i.lanes=u,i}function Ht(e,i,t,o){return e=ki(7,e,o,i),e.lanes=t,e}function Kr(e,i,t,o){return e=ki(22,e,o,i),e.elementType=ze,e.lanes=t,e.stateNode={isHidden:!1},e}function sl(e,i,t){return e=ki(6,e,null,i),e.lanes=t,e}function ll(e,i,t){return i=ki(4,e.children!==null?e.children:[],e.key,i),i.lanes=t,i.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},i}function ep(e,i,t,o,l){this.tag=i,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ro(0),this.expirationTimes=Ro(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ro(0),this.identifierPrefix=o,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function ul(e,i,t,o,l,u,m,z,p){return e=new ep(e,i,t,z,p),i===1?(i=1,u===!0&&(i|=8)):i=0,u=ki(3,null,null,i),e.current=u,u.stateNode=e,u.memoizedState={element:o,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},vs(u),e}function ip(e,i,t){var o=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:oe,key:o==null?null:""+o,children:e,containerInfo:i,implementation:t}}function cm(e){if(!e)return yt;e=e._reactInternals;e:{if(Gt(e)!==e||e.tag!==1)throw Error(r(170));var i=e;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(ai(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(r(171))}if(e.tag===1){var t=e.type;if(ai(t))return _c(e,t,i)}return i}function dm(e,i,t,o,l,u,m,z,p){return e=ul(t,o,!0,e,l,u,m,z,p),e.context=cm(null),t=e.current,o=ti(),l=kt(t),u=Vi(o,l),u.callback=i??null,pt(t,u,l),e.current.lanes=l,Qn(e,l,o),si(e,o),e}function Ur(e,i,t,o){var l=i.current,u=ti(),m=kt(l);return t=cm(t),i.context===null?i.context=t:i.pendingContext=t,i=Vi(u,m),i.payload={element:e},o=o===void 0?null:o,o!==null&&(i.callback=o),e=pt(l,i,m),e!==null&&(Ti(e,l,m,u),br(e,l,m)),m}function $r(e){return e=e.current,e.child?(e.child.tag===5,e.child.stateNode):null}function mm(e,i){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<i?t:i}}function cl(e,i){mm(e,i),(e=e.alternate)&&mm(e,i)}function tp(){return null}var fm=typeof reportError=="function"?reportError:function(e){console.error(e)};function dl(e){this._internalRoot=e}Zr.prototype.render=dl.prototype.render=function(e){var i=this._internalRoot;if(i===null)throw Error(r(409));Ur(e,i,null,null)},Zr.prototype.unmount=dl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var i=e.containerInfo;Jt(function(){Ur(null,e,null,null)}),i[Hi]=null}};function Zr(e){this._internalRoot=e}Zr.prototype.unstable_scheduleHydration=function(e){if(e){var i=Yu();e={blockedOn:null,target:e,priority:i};for(var t=0;t<ut.length&&i!==0&&i<ut[t].priority;t++);ut.splice(t,0,e),t===0&&qu(e)}};function ml(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Vr(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ym(){}function np(e,i,t,o,l){if(l){if(typeof o=="function"){var u=o;o=function(){var C=$r(m);u.call(C)}}var m=dm(i,o,e,0,null,!1,!1,"",ym);return e._reactRootContainer=m,e[Hi]=m.current,da(e.nodeType===8?e.parentNode:e),Jt(),m}for(;l=e.lastChild;)e.removeChild(l);if(typeof o=="function"){var z=o;o=function(){var C=$r(p);z.call(C)}}var p=ul(e,0,!1,null,null,!1,!1,"",ym);return e._reactRootContainer=p,e[Hi]=p.current,da(e.nodeType===8?e.parentNode:e),Jt(function(){Ur(i,p,t,o)}),p}function Yr(e,i,t,o,l){var u=t._reactRootContainer;if(u){var m=u;if(typeof l=="function"){var z=l;l=function(){var p=$r(m);z.call(p)}}Ur(i,m,e,l)}else m=np(t,i,e,l,o);return $r(m)}Zu=function(e){switch(e.tag){case 3:var i=e.stateNode;if(i.current.memoizedState.isDehydrated){var t=Yn(i.pendingLanes);t!==0&&(Oo(i,t|1),si(i,Re()),(ye&6)===0&&(Dn=Re()+500,zt()))}break;case 13:Jt(function(){var o=Zi(e,1);if(o!==null){var l=ti();Ti(o,e,1,l)}}),cl(e,1)}},Fo=function(e){if(e.tag===13){var i=Zi(e,134217728);if(i!==null){var t=ti();Ti(i,e,134217728,t)}cl(e,134217728)}},Vu=function(e){if(e.tag===13){var i=kt(e),t=Zi(e,i);if(t!==null){var o=ti();Ti(t,e,i,o)}cl(e,i)}},Yu=function(){return ke},Qu=function(e,i){var t=ke;try{return ke=e,i()}finally{ke=t}},To=function(e,i,t){switch(i){case"input":if(Li(e,t),i=t.name,t.type==="radio"&&i!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<t.length;i++){var o=t[i];if(o!==e&&o.form===e.form){var l=fr(o);if(!l)throw Error(r(90));Wi(o),Li(o,l)}}}break;case"textarea":Hn(e,t);break;case"select":i=t.value,i!=null&&rt(e,!!t.multiple,i,!1)}},Ru=nl,Ou=Jt;var ap={usingClientEntryPoint:!1,Events:[ya,mn,fr,Nu,Bu,nl]},Pa={findFiberByHostInstance:Nt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},rp={bundleType:Pa.bundleType,version:Pa.version,rendererPackageName:Pa.rendererPackageName,rendererConfig:Pa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ae.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Iu(e),e===null?null:e.stateNode},findFiberByHostInstance:Pa.findFiberByHostInstance||tp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Qr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Qr.isDisabled&&Qr.supportsFiber)try{Za=Qr.inject(rp),Ri=Qr}catch{}}return li.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ap,li.createPortal=function(e,i){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ml(i))throw Error(r(200));return ip(e,i,null,t)},li.createRoot=function(e,i){if(!ml(e))throw Error(r(299));var t=!1,o="",l=fm;return i!=null&&(i.unstable_strictMode===!0&&(t=!0),i.identifierPrefix!==void 0&&(o=i.identifierPrefix),i.onRecoverableError!==void 0&&(l=i.onRecoverableError)),i=ul(e,1,!1,null,null,t,!1,o,l),e[Hi]=i.current,da(e.nodeType===8?e.parentNode:e),new dl(i)},li.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var i=e._reactInternals;if(i===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=Iu(i),e=e===null?null:e.stateNode,e},li.flushSync=function(e){return Jt(e)},li.hydrate=function(e,i,t){if(!Vr(i))throw Error(r(200));return Yr(null,e,i,!0,t)},li.hydrateRoot=function(e,i,t){if(!ml(e))throw Error(r(405));var o=t!=null&&t.hydratedSources||null,l=!1,u="",m=fm;if(t!=null&&(t.unstable_strictMode===!0&&(l=!0),t.identifierPrefix!==void 0&&(u=t.identifierPrefix),t.onRecoverableError!==void 0&&(m=t.onRecoverableError)),i=dm(i,null,e,1,t??null,l,!1,u,m),e[Hi]=i.current,da(e),o)for(e=0;e<o.length;e++)t=o[e],l=t._getVersion,l=l(t._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[t,l]:i.mutableSourceEagerHydrationData.push(t,l);return new Zr(i)},li.render=function(e,i,t){if(!Vr(i))throw Error(r(200));return Yr(null,e,i,!1,t)},li.unmountComponentAtNode=function(e){if(!Vr(e))throw Error(r(40));return e._reactRootContainer?(Jt(function(){Yr(null,null,e,!1,function(){e._reactRootContainer=null,e[Hi]=null})}),!0):!1},li.unstable_batchedUpdates=nl,li.unstable_renderSubtreeIntoContainer=function(e,i,t,o){if(!Vr(t))throw Error(r(200));if(e==null||e._reactInternals===void 0)throw Error(r(38));return Yr(e,i,t,!1,o)},li.version="18.3.1-next-f1338f8080-20240426",li}var Am;function Bf(){if(Am)return gl.exports;Am=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(n){console.error(n)}}return a(),gl.exports=Fp(),gl.exports}var _p=Bf();const Rn=wo(_p),Em={disabled:!1},Rf=yi.createContext(null);var Mp=function(n){return n.scrollTop},Sa="unmounted",Kt="exited",Dt="entering",Ut="entered",Il="exiting",nt=(function(a){kp(n,a);function n(s,c){var d;d=a.call(this,s,c)||this;var f=c,y=f&&!f.isMounting?s.enter:s.appear,w;return d.appearStatus=null,s.in?y?(w=Kt,d.appearStatus=Dt):w=Ut:s.unmountOnExit||s.mountOnEnter?w=Sa:w=Kt,d.state={status:w},d.nextCallback=null,d}n.getDerivedStateFromProps=function(c,d){var f=c.in;return f&&d.status===Sa?{status:Kt}:null};var r=n.prototype;return r.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},r.componentDidUpdate=function(c){var d=null;if(c!==this.props){var f=this.state.status;this.props.in?f!==Dt&&f!==Ut&&(d=Dt):(f===Dt||f===Ut)&&(d=Il)}this.updateStatus(!1,d)},r.componentWillUnmount=function(){this.cancelNextCallback()},r.getTimeouts=function(){var c=this.props.timeout,d,f,y;return d=f=y=c,c!=null&&typeof c!="number"&&(d=c.exit,f=c.enter,y=c.appear!==void 0?c.appear:f),{exit:d,enter:f,appear:y}},r.updateStatus=function(c,d){if(c===void 0&&(c=!1),d!==null)if(this.cancelNextCallback(),d===Dt){if(this.props.unmountOnExit||this.props.mountOnEnter){var f=this.props.nodeRef?this.props.nodeRef.current:Rn.findDOMNode(this);f&&Mp(f)}this.performEnter(c)}else this.performExit();else this.props.unmountOnExit&&this.state.status===Kt&&this.setState({status:Sa})},r.performEnter=function(c){var d=this,f=this.props.enter,y=this.context?this.context.isMounting:c,w=this.props.nodeRef?[y]:[Rn.findDOMNode(this),y],j=w[0],v=w[1],D=this.getTimeouts(),A=y?D.appear:D.enter;if(!c&&!f||Em.disabled){this.safeSetState({status:Ut},function(){d.props.onEntered(j)});return}this.props.onEnter(j,v),this.safeSetState({status:Dt},function(){d.props.onEntering(j,v),d.onTransitionEnd(A,function(){d.safeSetState({status:Ut},function(){d.props.onEntered(j,v)})})})},r.performExit=function(){var c=this,d=this.props.exit,f=this.getTimeouts(),y=this.props.nodeRef?void 0:Rn.findDOMNode(this);if(!d||Em.disabled){this.safeSetState({status:Kt},function(){c.props.onExited(y)});return}this.props.onExit(y),this.safeSetState({status:Il},function(){c.props.onExiting(y),c.onTransitionEnd(f.exit,function(){c.safeSetState({status:Kt},function(){c.props.onExited(y)})})})},r.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},r.safeSetState=function(c,d){d=this.setNextCallback(d),this.setState(c,d)},r.setNextCallback=function(c){var d=this,f=!0;return this.nextCallback=function(y){f&&(f=!1,d.nextCallback=null,c(y))},this.nextCallback.cancel=function(){f=!1},this.nextCallback},r.onTransitionEnd=function(c,d){this.setNextCallback(d);var f=this.props.nodeRef?this.props.nodeRef.current:Rn.findDOMNode(this),y=c==null&&!this.props.addEndListener;if(!f||y){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var w=this.props.nodeRef?[this.nextCallback]:[f,this.nextCallback],j=w[0],v=w[1];this.props.addEndListener(j,v)}c!=null&&setTimeout(this.nextCallback,c)},r.render=function(){var c=this.state.status;if(c===Sa)return null;var d=this.props,f=d.children;d.in,d.mountOnEnter,d.unmountOnExit,d.appear,d.enter,d.exit,d.timeout,d.addEndListener,d.onEnter,d.onEntering,d.onEntered,d.onExit,d.onExiting,d.onExited,d.nodeRef;var y=jp(d,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return yi.createElement(Rf.Provider,{value:null},typeof f=="function"?f(c,y):yi.cloneElement(yi.Children.only(f),y))},n})(yi.Component);nt.contextType=Rf;nt.propTypes={};function En(){}nt.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:En,onEntering:En,onEntered:En,onExit:En,onExiting:En,onExited:En};nt.UNMOUNTED=Sa;nt.EXITED=Kt;nt.ENTERING=Dt;nt.ENTERED=Ut;nt.EXITING=Il;function Ip(a){return a.code==="Escape"||a.keyCode===27}function Jp(){const a=P.version.split(".");return{major:+a[0],minor:+a[1],patch:+a[2]}}function ho(a){if(!a||typeof a=="function")return null;const{major:n}=Jp();return n>=19?a.props.ref:a.ref}const In=!!(typeof window<"u"&&window.document&&window.document.createElement);var Jl=!1,Wl=!1;try{var vl={get passive(){return Jl=!0},get once(){return Wl=Jl=!0}};In&&(window.addEventListener("test",vl,vl),window.removeEventListener("test",vl,!0))}catch{}function Of(a,n,r,s){if(s&&typeof s!="boolean"&&!Wl){var c=s.once,d=s.capture,f=r;!Wl&&c&&(f=r.__once||function y(w){this.removeEventListener(n,y,d),r.call(this,w)},r.__once=f),a.addEventListener(n,f,Jl?s:d)}a.addEventListener(n,r,s)}function Ll(a,n,r,s){var c=s&&typeof s!="boolean"?s.capture:s;a.removeEventListener(n,r,c),r.__once&&a.removeEventListener(n,r.__once,c)}function uo(a,n,r,s){return Of(a,n,r,s),function(){Ll(a,n,r,s)}}function Wp(a,n,r,s){if(s===void 0&&(s=!0),a){var c=document.createEvent("HTMLEvents");c.initEvent(n,r,s),a.dispatchEvent(c)}}function Lp(a){var n=Qt(a,"transitionDuration")||"",r=n.indexOf("ms")===-1?1e3:1;return parseFloat(n)*r}function Hp(a,n,r){r===void 0&&(r=5);var s=!1,c=setTimeout(function(){s||Wp(a,"transitionend",!0)},n+r),d=uo(a,"transitionend",function(){s=!0},{once:!0});return function(){clearTimeout(c),d()}}function Ff(a,n,r,s){r==null&&(r=Lp(a)||0);var c=Hp(a,r,s),d=uo(a,"transitionend",n);return function(){c(),d()}}function Pm(a,n){const r=Qt(a,n)||"",s=r.indexOf("ms")===-1?1e3:1;return parseFloat(r)*s}function Kp(a,n){const r=Pm(a,"transitionDuration"),s=Pm(a,"transitionDelay"),c=Ff(a,d=>{d.target===a&&(c(),n(d))},r+s)}function Up(a){a.offsetHeight}const Tm=a=>!a||typeof a=="function"?a:n=>{a.current=n};function $p(a,n){const r=Tm(a),s=Tm(n);return c=>{r&&r(c),s&&s(c)}}function _f(a,n){return P.useMemo(()=>$p(a,n),[a,n])}function Zp(a){return a&&"setState"in a?Rn.findDOMNode(a):a??null}const Mf=yi.forwardRef(({onEnter:a,onEntering:n,onEntered:r,onExit:s,onExiting:c,onExited:d,addEndListener:f,children:y,childRef:w,...j},v)=>{const D=P.useRef(null),A=_f(D,w),O=oe=>{A(Zp(oe))},L=oe=>ce=>{oe&&D.current&&oe(D.current,ce)},F=P.useCallback(L(a),[a]),I=P.useCallback(L(n),[n]),J=P.useCallback(L(r),[r]),X=P.useCallback(L(s),[s]),ne=P.useCallback(L(c),[c]),ae=P.useCallback(L(d),[d]),U=P.useCallback(L(f),[f]);return x.jsx(nt,{ref:v,...j,onEnter:F,onEntered:J,onEntering:I,onExit:X,onExited:ae,onExiting:ne,addEndListener:U,nodeRef:D,children:typeof y=="function"?(oe,ce)=>y(oe,{...ce,ref:O}):yi.cloneElement(y,{ref:O})})});Mf.displayName="TransitionWrapper";function Vp(a){const n=P.useRef(a);return P.useEffect(()=>{n.current=a},[a]),n}function Hl(a){const n=Vp(a);return P.useCallback(function(...r){return n.current&&n.current(...r)},[n])}const Yp=(a=>P.forwardRef((n,r)=>x.jsx("div",{...n,ref:r,className:Ke(n.className,a)})));function Qp(a){const n=P.useRef(a);return P.useEffect(()=>{n.current=a},[a]),n}function $t(a){const n=Qp(a);return P.useCallback(function(...r){return n.current&&n.current(...r)},[n])}function Xp(){const a=P.useRef(!0),n=P.useRef(()=>a.current);return P.useEffect(()=>(a.current=!0,()=>{a.current=!1}),[]),n.current}function qp(a){const n=P.useRef(null);return P.useEffect(()=>{n.current=a}),n.current}const eh=typeof global<"u"&&global.navigator&&global.navigator.product==="ReactNative",ih=typeof document<"u",Sm=ih||eh?P.useLayoutEffect:P.useEffect,th=["as","disabled"];function nh(a,n){if(a==null)return{};var r={};for(var s in a)if({}.hasOwnProperty.call(a,s)){if(n.indexOf(s)>=0)continue;r[s]=a[s]}return r}function ah(a){return!a||a.trim()==="#"}function If({tagName:a,disabled:n,href:r,target:s,rel:c,role:d,onClick:f,tabIndex:y=0,type:w}){a||(r!=null||s!=null||c!=null?a="a":a="button");const j={tagName:a};if(a==="button")return[{type:w||"button",disabled:n},j];const v=A=>{if((n||a==="a"&&ah(r))&&A.preventDefault(),n){A.stopPropagation();return}f?.(A)},D=A=>{A.key===" "&&(A.preventDefault(),v(A))};return a==="a"&&(r||(r="#"),n&&(r=void 0)),[{role:d??"button",disabled:void 0,tabIndex:n?void 0:y,href:r,target:a==="a"?s:void 0,"aria-disabled":n||void 0,rel:a==="a"?c:void 0,onClick:v,onKeyDown:D},j]}const rh=P.forwardRef((a,n)=>{let{as:r,disabled:s}=a,c=nh(a,th);const[d,{tagName:f}]=If(Object.assign({tagName:r,disabled:s},c));return x.jsx(f,Object.assign({},c,d,{ref:n}))});rh.displayName="Button";const oh={[Dt]:"show",[Ut]:"show"},cu=P.forwardRef(({className:a,children:n,transitionClasses:r={},onEnter:s,...c},d)=>{const f={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,...c},y=P.useCallback((w,j)=>{Up(w),s?.(w,j)},[s]);return x.jsx(Mf,{ref:d,addEndListener:Kp,...f,onEnter:y,childRef:ho(n),children:(w,j)=>P.cloneElement(n,{...j,className:Ke("fade",a,n.props.className,oh[w],r[w])})})});cu.displayName="Fade";var bl={exports:{}},Cl,xm;function sh(){if(xm)return Cl;xm=1;var a="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return Cl=a,Cl}var Dl,Gm;function lh(){if(Gm)return Dl;Gm=1;var a=sh();function n(){}function r(){}return r.resetWarningCache=n,Dl=function(){function s(f,y,w,j,v,D){if(D!==a){var A=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw A.name="Invariant Violation",A}}s.isRequired=s;function c(){return s}var d={array:s,bigint:s,bool:s,func:s,number:s,object:s,string:s,symbol:s,any:s,arrayOf:c,element:s,elementType:s,instanceOf:c,node:s,objectOf:c,oneOf:c,oneOfType:c,shape:c,exact:c,checkPropTypes:r,resetWarningCache:n};return d.PropTypes=d,d},Dl}var Nm;function uh(){return Nm||(Nm=1,bl.exports=lh()()),bl.exports}var ch=uh();const Al=wo(ch),dh={"aria-label":Al.string,onClick:Al.func,variant:Al.oneOf(["white"])},du=P.forwardRef(({className:a,variant:n,"aria-label":r="Close",...s},c)=>x.jsx("button",{ref:c,type:"button",className:Ke("btn-close",n&&`btn-close-${n}`,a),"aria-label":r,...s}));du.displayName="CloseButton";du.propTypes=dh;const Bn=P.forwardRef(({as:a,bsPrefix:n,variant:r="primary",size:s,active:c=!1,disabled:d=!1,className:f,...y},w)=>{const j=en(n,"btn"),[v,{tagName:D}]=If({tagName:a,disabled:d,...y}),A=D;return x.jsx(A,{...v,...y,ref:w,disabled:d,className:Ke(f,j,c&&"active",r&&`${j}-${r}`,s&&`${j}-${s}`,y.href&&d&&"disabled")})});Bn.displayName="Button";function mh(a){const n=P.useRef(a);return n.current=a,n}function fh(a){const n=mh(a);P.useEffect(()=>()=>n.current(),[])}var yh=Function.prototype.bind.call(Function.prototype.call,[].slice);function Pn(a,n){return yh(a.querySelectorAll(n))}function Bm(a,n){if(a.contains)return a.contains(n);if(a.compareDocumentPosition)return a===n||!!(a.compareDocumentPosition(n)&16)}const zh="data-rr-ui-";function wh(a){return`${zh}${a}`}const Jf=P.createContext(In?window:void 0);Jf.Provider;function mu(){return P.useContext(Jf)}const Rm=a=>!a||typeof a=="function"?a:n=>{a.current=n};function ph(a,n){const r=Rm(a),s=Rm(n);return c=>{r&&r(c),s&&s(c)}}function fu(a,n){return P.useMemo(()=>ph(a,n),[a,n])}var qr;function Om(a){if((!qr&&qr!==0||a)&&In){var n=document.createElement("div");n.style.position="absolute",n.style.top="-9999px",n.style.width="50px",n.style.height="50px",n.style.overflow="scroll",document.body.appendChild(n),qr=n.offsetWidth-n.clientWidth,document.body.removeChild(n)}return qr}function hh(){return P.useState(null)}function El(a){a===void 0&&(a=po());try{var n=a.activeElement;return!n||!n.nodeName?null:n}catch{return a.body}}function gh(a){const n=P.useRef(a);return n.current=a,n}function jh(a){const n=gh(a);P.useEffect(()=>()=>n.current(),[])}function kh(a=document){const n=a.defaultView;return Math.abs(n.innerWidth-a.documentElement.clientWidth)}const Fm=wh("modal-open");class yu{constructor({ownerDocument:n,handleContainerOverflow:r=!0,isRTL:s=!1}={}){this.handleContainerOverflow=r,this.isRTL=s,this.modals=[],this.ownerDocument=n}getScrollbarWidth(){return kh(this.ownerDocument)}getElement(){return(this.ownerDocument||document).body}setModalAttributes(n){}removeModalAttributes(n){}setContainerStyle(n){const r={overflow:"hidden"},s=this.isRTL?"paddingLeft":"paddingRight",c=this.getElement();n.style={overflow:c.style.overflow,[s]:c.style[s]},n.scrollBarWidth&&(r[s]=`${parseInt(Qt(c,s)||"0",10)+n.scrollBarWidth}px`),c.setAttribute(Fm,""),Qt(c,r)}reset(){[...this.modals].forEach(n=>this.remove(n))}removeContainerStyle(n){const r=this.getElement();r.removeAttribute(Fm),Object.assign(r.style,n.style)}add(n){let r=this.modals.indexOf(n);return r!==-1||(r=this.modals.length,this.modals.push(n),this.setModalAttributes(n),r!==0)||(this.state={scrollBarWidth:this.getScrollbarWidth(),style:{}},this.handleContainerOverflow&&this.setContainerStyle(this.state)),r}remove(n){const r=this.modals.indexOf(n);r!==-1&&(this.modals.splice(r,1),!this.modals.length&&this.handleContainerOverflow&&this.removeContainerStyle(this.state),this.removeModalAttributes(n))}isTopModal(n){return!!this.modals.length&&this.modals[this.modals.length-1]===n}}const Pl=(a,n)=>In?a==null?(n||po()).body:(typeof a=="function"&&(a=a()),a&&"current"in a&&(a=a.current),a&&("nodeType"in a||a.getBoundingClientRect)?a:null):null;function vh(a,n){const r=mu(),[s,c]=P.useState(()=>Pl(a,r?.document));if(!s){const d=Pl(a);d&&c(d)}return P.useEffect(()=>{},[n,s]),P.useEffect(()=>{const d=Pl(a);d!==s&&c(d)},[a,s]),s}function bh({children:a,in:n,onExited:r,mountOnEnter:s,unmountOnExit:c}){const d=P.useRef(null),f=P.useRef(n),y=$t(r);P.useEffect(()=>{n?f.current=!0:y(d.current)},[n,y]);const w=fu(d,ho(a)),j=P.cloneElement(a,{ref:w});return n?j:c||!f.current&&s?null:j}const Ch=["onEnter","onEntering","onEntered","onExit","onExiting","onExited","addEndListener","children"];function Dh(a,n){if(a==null)return{};var r={};for(var s in a)if({}.hasOwnProperty.call(a,s)){if(n.indexOf(s)>=0)continue;r[s]=a[s]}return r}function Ah(a){let{onEnter:n,onEntering:r,onEntered:s,onExit:c,onExiting:d,onExited:f,addEndListener:y,children:w}=a,j=Dh(a,Ch);const v=P.useRef(null),D=fu(v,ho(w)),A=ae=>U=>{ae&&v.current&&ae(v.current,U)},O=P.useCallback(A(n),[n]),L=P.useCallback(A(r),[r]),F=P.useCallback(A(s),[s]),I=P.useCallback(A(c),[c]),J=P.useCallback(A(d),[d]),X=P.useCallback(A(f),[f]),ne=P.useCallback(A(y),[y]);return Object.assign({},j,{nodeRef:v},n&&{onEnter:O},r&&{onEntering:L},s&&{onEntered:F},c&&{onExit:I},d&&{onExiting:J},f&&{onExited:X},y&&{addEndListener:ne},{children:typeof w=="function"?(ae,U)=>w(ae,Object.assign({},U,{ref:D})):P.cloneElement(w,{ref:D})})}const Eh=["component"];function Ph(a,n){if(a==null)return{};var r={};for(var s in a)if({}.hasOwnProperty.call(a,s)){if(n.indexOf(s)>=0)continue;r[s]=a[s]}return r}const Th=P.forwardRef((a,n)=>{let{component:r}=a,s=Ph(a,Eh);const c=Ah(s);return x.jsx(r,Object.assign({ref:n},c))});function Sh({in:a,onTransition:n}){const r=P.useRef(null),s=P.useRef(!0),c=$t(n);return Sm(()=>{if(!r.current)return;let d=!1;return c({in:a,element:r.current,initial:s.current,isStale:()=>d}),()=>{d=!0}},[a,c]),Sm(()=>(s.current=!1,()=>{s.current=!0}),[]),r}function xh({children:a,in:n,onExited:r,onEntered:s,transition:c}){const[d,f]=P.useState(!n);n&&d&&f(!1);const y=Sh({in:!!n,onTransition:j=>{const v=()=>{j.isStale()||(j.in?s?.(j.element,j.initial):(f(!0),r?.(j.element)))};Promise.resolve(c(j)).then(v,D=>{throw j.in||f(!0),D})}}),w=fu(y,ho(a));return d&&!n?null:P.cloneElement(a,{ref:w})}function _m(a,n,r){return a?x.jsx(Th,Object.assign({},r,{component:a})):n?x.jsx(xh,Object.assign({},r,{transition:n})):x.jsx(bh,Object.assign({},r))}const Gh=["show","role","className","style","children","backdrop","keyboard","onBackdropClick","onEscapeKeyDown","transition","runTransition","backdropTransition","runBackdropTransition","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","renderDialog","renderBackdrop","manager","container","onShow","onHide","onExit","onExited","onExiting","onEnter","onEntering","onEntered"];function Nh(a,n){if(a==null)return{};var r={};for(var s in a)if({}.hasOwnProperty.call(a,s)){if(n.indexOf(s)>=0)continue;r[s]=a[s]}return r}let Tl;function Bh(a){return Tl||(Tl=new yu({ownerDocument:a?.document})),Tl}function Rh(a){const n=mu(),r=a||Bh(n),s=P.useRef({dialog:null,backdrop:null});return Object.assign(s.current,{add:()=>r.add(s.current),remove:()=>r.remove(s.current),isTopModal:()=>r.isTopModal(s.current),setDialogRef:P.useCallback(c=>{s.current.dialog=c},[]),setBackdropRef:P.useCallback(c=>{s.current.backdrop=c},[])})}const Wf=P.forwardRef((a,n)=>{let{show:r=!1,role:s="dialog",className:c,style:d,children:f,backdrop:y=!0,keyboard:w=!0,onBackdropClick:j,onEscapeKeyDown:v,transition:D,runTransition:A,backdropTransition:O,runBackdropTransition:L,autoFocus:F=!0,enforceFocus:I=!0,restoreFocus:J=!0,restoreFocusOptions:X,renderDialog:ne,renderBackdrop:ae=ve=>x.jsx("div",Object.assign({},ve)),manager:U,container:oe,onShow:ce,onHide:Pe=()=>{},onExit:Ye,onExited:Ue,onExiting:ui,onEnter:ee,onEntering:ge,onEntered:de}=a,Be=Nh(a,Gh);const je=mu(),ze=vh(oe),G=Rh(U),$=Xp(),_=qp(r),[g,E]=P.useState(!r),q=P.useRef(null);P.useImperativeHandle(n,()=>G,[G]),In&&!_&&r&&(q.current=El(je?.document)),r&&g&&E(!1);const te=$t(()=>{if(G.add(),Fe.current=uo(document,"keydown",me),he.current=uo(document,"focus",()=>setTimeout(ue),!0),ce&&ce(),F){var ve,Tt;const Li=El((ve=(Tt=G.dialog)==null?void 0:Tt.ownerDocument)!=null?ve:je?.document);G.dialog&&Li&&!Bm(G.dialog,Li)&&(q.current=Li,G.dialog.focus())}}),se=$t(()=>{if(G.remove(),Fe.current==null||Fe.current(),he.current==null||he.current(),J){var ve;(ve=q.current)==null||ve.focus==null||ve.focus(X),q.current=null}});P.useEffect(()=>{!r||!ze||te()},[r,ze,te]),P.useEffect(()=>{g&&se()},[g,se]),jh(()=>{se()});const ue=$t(()=>{if(!I||!$()||!G.isTopModal())return;const ve=El(je?.document);G.dialog&&ve&&!Bm(G.dialog,ve)&&G.dialog.focus()}),pe=$t(ve=>{ve.target===ve.currentTarget&&(j?.(ve),y===!0&&Pe())}),me=$t(ve=>{w&&Ip(ve)&&G.isTopModal()&&(v?.(ve),ve.defaultPrevented||Pe())}),he=P.useRef(),Fe=P.useRef(),Ji=(...ve)=>{E(!0),Ue?.(...ve)};if(!ze)return null;const Wi=Object.assign({role:s,ref:G.setDialogRef,"aria-modal":s==="dialog"?!0:void 0},Be,{style:d,className:c,tabIndex:-1});let Gi=ne?ne(Wi):x.jsx("div",Object.assign({},Wi,{children:P.cloneElement(f,{role:"document"})}));Gi=_m(D,A,{unmountOnExit:!0,mountOnEnter:!0,appear:!0,in:!!r,onExit:Ye,onExiting:ui,onExited:Ji,onEnter:ee,onEntering:ge,onEntered:de,children:Gi});let Ni=null;return y&&(Ni=ae({ref:G.setBackdropRef,onClick:pe}),Ni=_m(O,L,{in:!!r,appear:!0,mountOnEnter:!0,unmountOnExit:!0,children:Ni})),x.jsx(x.Fragment,{children:Rn.createPortal(x.jsxs(x.Fragment,{children:[Ni,Gi]}),ze)})});Wf.displayName="Modal";const Oh=Object.assign(Wf,{Manager:yu});function Fh(a,n){return a.classList?a.classList.contains(n):(" "+(a.className.baseVal||a.className)+" ").indexOf(" "+n+" ")!==-1}function _h(a,n){a.classList?a.classList.add(n):Fh(a,n)||(typeof a.className=="string"?a.className=a.className+" "+n:a.setAttribute("class",(a.className&&a.className.baseVal||"")+" "+n))}function Mm(a,n){return a.replace(new RegExp("(^|\\s)"+n+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function Mh(a,n){a.classList?a.classList.remove(n):typeof a.className=="string"?a.className=Mm(a.className,n):a.setAttribute("class",Mm(a.className&&a.className.baseVal||"",n))}const Tn={FIXED_CONTENT:".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",STICKY_CONTENT:".sticky-top",NAVBAR_TOGGLER:".navbar-toggler"};class Ih extends yu{adjustAndStore(n,r,s){const c=r.style[n];r.dataset[n]=c,Qt(r,{[n]:`${parseFloat(Qt(r,n))+s}px`})}restore(n,r){const s=r.dataset[n];s!==void 0&&(delete r.dataset[n],Qt(r,{[n]:s}))}setContainerStyle(n){super.setContainerStyle(n);const r=this.getElement();if(_h(r,"modal-open"),!n.scrollBarWidth)return;const s=this.isRTL?"paddingLeft":"paddingRight",c=this.isRTL?"marginLeft":"marginRight";Pn(r,Tn.FIXED_CONTENT).forEach(d=>this.adjustAndStore(s,d,n.scrollBarWidth)),Pn(r,Tn.STICKY_CONTENT).forEach(d=>this.adjustAndStore(c,d,-n.scrollBarWidth)),Pn(r,Tn.NAVBAR_TOGGLER).forEach(d=>this.adjustAndStore(c,d,n.scrollBarWidth))}removeContainerStyle(n){super.removeContainerStyle(n);const r=this.getElement();Mh(r,"modal-open");const s=this.isRTL?"paddingLeft":"paddingRight",c=this.isRTL?"marginLeft":"marginRight";Pn(r,Tn.FIXED_CONTENT).forEach(d=>this.restore(s,d)),Pn(r,Tn.STICKY_CONTENT).forEach(d=>this.restore(c,d)),Pn(r,Tn.NAVBAR_TOGGLER).forEach(d=>this.restore(c,d))}}let Sl;function Jh(a){return Sl||(Sl=new Ih(a)),Sl}const Lf=P.forwardRef(({className:a,bsPrefix:n,as:r="div",...s},c)=>(n=en(n,"modal-body"),x.jsx(r,{ref:c,className:Ke(a,n),...s})));Lf.displayName="ModalBody";const Hf=P.createContext({onHide(){}}),zu=P.forwardRef(({bsPrefix:a,className:n,contentClassName:r,centered:s,size:c,fullscreen:d,children:f,scrollable:y,...w},j)=>{a=en(a,"modal");const v=`${a}-dialog`,D=typeof d=="string"?`${a}-fullscreen-${d}`:`${a}-fullscreen`;return x.jsx("div",{...w,ref:j,className:Ke(v,n,c&&`${a}-${c}`,s&&`${v}-centered`,y&&`${v}-scrollable`,d&&D),children:x.jsx("div",{className:Ke(`${a}-content`,r),children:f})})});zu.displayName="ModalDialog";const Kf=P.forwardRef(({className:a,bsPrefix:n,as:r="div",...s},c)=>(n=en(n,"modal-footer"),x.jsx(r,{ref:c,className:Ke(a,n),...s})));Kf.displayName="ModalFooter";const Uf=P.forwardRef(({closeLabel:a="Close",closeVariant:n,closeButton:r=!1,onHide:s,children:c,...d},f)=>{const y=P.useContext(Hf),w=Hl(()=>{y?.onHide(),s?.()});return x.jsxs("div",{ref:f,...d,children:[c,r&&x.jsx(du,{"aria-label":a,variant:n,onClick:w})]})});Uf.displayName="AbstractModalHeader";const $f=P.forwardRef(({bsPrefix:a,className:n,closeLabel:r="Close",closeButton:s=!1,...c},d)=>(a=en(a,"modal-header"),x.jsx(Uf,{ref:d,...c,className:Ke(n,a),closeLabel:r,closeButton:s})));$f.displayName="ModalHeader";const Wh=Yp("h4"),Zf=P.forwardRef(({className:a,bsPrefix:n,as:r=Wh,...s},c)=>(n=en(n,"modal-title"),x.jsx(r,{ref:c,className:Ke(a,n),...s})));Zf.displayName="ModalTitle";function Lh(a){return x.jsx(cu,{...a,timeout:null})}function Hh(a){return x.jsx(cu,{...a,timeout:null})}const Vf=P.forwardRef(({bsPrefix:a,className:n,style:r,dialogClassName:s,contentClassName:c,children:d,dialogAs:f=zu,"data-bs-theme":y,"aria-labelledby":w,"aria-describedby":j,"aria-label":v,show:D=!1,animation:A=!0,backdrop:O=!0,keyboard:L=!0,onEscapeKeyDown:F,onShow:I,onHide:J,container:X,autoFocus:ne=!0,enforceFocus:ae=!0,restoreFocus:U=!0,restoreFocusOptions:oe,onEntered:ce,onExit:Pe,onExiting:Ye,onEnter:Ue,onEntering:ui,onExited:ee,backdropClassName:ge,manager:de,...Be},je)=>{const[ze,G]=P.useState({}),[$,_]=P.useState(!1),g=P.useRef(!1),E=P.useRef(!1),q=P.useRef(null),[te,se]=hh(),ue=_f(je,se),pe=Hl(J),me=Cp();a=en(a,"modal");const he=P.useMemo(()=>({onHide:pe}),[pe]);function Fe(){return de||Jh({isRTL:me})}function Ji(fe){if(!In)return;const Bi=Fe().getScrollbarWidth()>0,xt=fe.scrollHeight>po(fe).documentElement.clientHeight;G({paddingRight:Bi&&!xt?Om():void 0,paddingLeft:!Bi&&xt?Om():void 0})}const Wi=Hl(()=>{te&&Ji(te.dialog)});fh(()=>{Ll(window,"resize",Wi),q.current==null||q.current()});const Gi=()=>{g.current=!0},Ni=fe=>{g.current&&te&&fe.target===te.dialog&&(E.current=!0),g.current=!1},ve=()=>{_(!0),q.current=Ff(te.dialog,()=>{_(!1)})},Tt=fe=>{fe.target===fe.currentTarget&&ve()},Li=fe=>{if(O==="static"){Tt(fe);return}if(E.current||fe.target!==fe.currentTarget){E.current=!1;return}J?.()},Wa=fe=>{L?F?.(fe):(fe.preventDefault(),O==="static"&&ve())},Wn=(fe,Bi)=>{fe&&Ji(fe),Ue?.(fe,Bi)},St=fe=>{q.current==null||q.current(),Pe?.(fe)},rt=(fe,Bi)=>{ui?.(fe,Bi),Of(window,"resize",Wi)},Ln=fe=>{fe&&(fe.style.display=""),ee?.(fe),Ll(window,"resize",Wi)},La=P.useCallback(fe=>x.jsx("div",{...fe,className:Ke(`${a}-backdrop`,ge,!A&&"show")}),[A,ge,a]),Hn={...r,...ze};Hn.display="block";const Ha=fe=>x.jsx("div",{role:"dialog",...fe,style:Hn,className:Ke(n,a,$&&`${a}-static`,!A&&"show"),onClick:O?Li:void 0,onMouseUp:Ni,"data-bs-theme":y,"aria-label":v,"aria-labelledby":w,"aria-describedby":j,children:x.jsx(f,{...Be,onMouseDown:Gi,className:s,contentClassName:c,children:d})});return x.jsx(Hf.Provider,{value:he,children:x.jsx(Oh,{show:D,ref:ue,backdrop:O,container:X,keyboard:!0,autoFocus:ne,enforceFocus:ae,restoreFocus:U,restoreFocusOptions:oe,onEscapeKeyDown:Wa,onShow:I,onHide:J,onEnter:Wn,onEntering:rt,onEntered:ce,onExit:St,onExiting:Ye,onExited:Ln,manager:Fe(),transition:A?Lh:void 0,backdropTransition:A?Hh:void 0,renderBackdrop:La,renderDialog:Ha})})});Vf.displayName="Modal";const eo=Object.assign(Vf,{Body:Lf,Header:$f,Title:Zf,Footer:Kf,Dialog:zu,TRANSITION_DURATION:300,BACKDROP_TRANSITION_DURATION:150});function Kl(a,n){(n==null||n>a.length)&&(n=a.length);for(var r=0,s=Array(n);r<n;r++)s[r]=a[r];return s}function Kh(a){if(Array.isArray(a))return a}function Uh(a){if(Array.isArray(a))return Kl(a)}function $h(a,n){if(!(a instanceof n))throw new TypeError("Cannot call a class as a function")}function Zh(a,n){for(var r=0;r<n.length;r++){var s=n[r];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(a,Yf(s.key),s)}}function Vh(a,n,r){return n&&Zh(a.prototype,n),Object.defineProperty(a,"prototype",{writable:!1}),a}function ao(a,n){var r=typeof Symbol<"u"&&a[Symbol.iterator]||a["@@iterator"];if(!r){if(Array.isArray(a)||(r=wu(a))||n){r&&(a=r);var s=0,c=function(){};return{s:c,n:function(){return s>=a.length?{done:!0}:{done:!1,value:a[s++]}},e:function(w){throw w},f:c}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var d,f=!0,y=!1;return{s:function(){r=r.call(a)},n:function(){var w=r.next();return f=w.done,w},e:function(w){y=!0,d=w},f:function(){try{f||r.return==null||r.return()}finally{if(y)throw d}}}}function re(a,n,r){return(n=Yf(n))in a?Object.defineProperty(a,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):a[n]=r,a}function Yh(a){if(typeof Symbol<"u"&&a[Symbol.iterator]!=null||a["@@iterator"]!=null)return Array.from(a)}function Qh(a,n){var r=a==null?null:typeof Symbol<"u"&&a[Symbol.iterator]||a["@@iterator"];if(r!=null){var s,c,d,f,y=[],w=!0,j=!1;try{if(d=(r=r.call(a)).next,n===0){if(Object(r)!==r)return;w=!1}else for(;!(w=(s=d.call(r)).done)&&(y.push(s.value),y.length!==n);w=!0);}catch(v){j=!0,c=v}finally{try{if(!w&&r.return!=null&&(f=r.return(),Object(f)!==f))return}finally{if(j)throw c}}return y}}function Xh(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function qh(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Im(a,n){var r=Object.keys(a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(a);n&&(s=s.filter(function(c){return Object.getOwnPropertyDescriptor(a,c).enumerable})),r.push.apply(r,s)}return r}function B(a){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?Im(Object(r),!0).forEach(function(s){re(a,s,r[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(r)):Im(Object(r)).forEach(function(s){Object.defineProperty(a,s,Object.getOwnPropertyDescriptor(r,s))})}return a}function go(a,n){return Kh(a)||Qh(a,n)||wu(a,n)||Xh()}function xi(a){return Uh(a)||Yh(a)||wu(a)||qh()}function eg(a,n){if(typeof a!="object"||!a)return a;var r=a[Symbol.toPrimitive];if(r!==void 0){var s=r.call(a,n);if(typeof s!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(a)}function Yf(a){var n=eg(a,"string");return typeof n=="symbol"?n:n+""}function co(a){"@babel/helpers - typeof";return co=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},co(a)}function wu(a,n){if(a){if(typeof a=="string")return Kl(a,n);var r={}.toString.call(a).slice(8,-1);return r==="Object"&&a.constructor&&(r=a.constructor.name),r==="Map"||r==="Set"?Array.from(a):r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Kl(a,n):void 0}}var Jm=function(){},pu={},Qf={},Xf=null,qf={mark:Jm,measure:Jm};try{typeof window<"u"&&(pu=window),typeof document<"u"&&(Qf=document),typeof MutationObserver<"u"&&(Xf=MutationObserver),typeof performance<"u"&&(qf=performance)}catch{}var ig=pu.navigator||{},Wm=ig.userAgent,Lm=Wm===void 0?"":Wm,At=pu,Ae=Qf,Hm=Xf,io=qf;At.document;var at=!!Ae.documentElement&&!!Ae.head&&typeof Ae.addEventListener=="function"&&typeof Ae.createElement=="function",ey=~Lm.indexOf("MSIE")||~Lm.indexOf("Trident/"),xl,tg=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,ng=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Whiteboard)?.*/i,iy={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"},slab:{"fa-regular":"regular",faslr:"regular"},"slab-press":{"fa-regular":"regular",faslpr:"regular"},thumbprint:{"fa-light":"light",fatl:"light"},whiteboard:{"fa-semibold":"semibold",fawsb:"semibold"},notdog:{"fa-solid":"solid",fans:"solid"},"notdog-duo":{"fa-solid":"solid",fands:"solid"},etch:{"fa-solid":"solid",faes:"solid"},jelly:{"fa-regular":"regular",fajr:"regular"},"jelly-fill":{"fa-regular":"regular",fajfr:"regular"},"jelly-duo":{"fa-regular":"regular",fajdr:"regular"},chisel:{"fa-regular":"regular",facr:"regular"},utility:{"fa-semibold":"semibold",fausb:"semibold"},"utility-duo":{"fa-semibold":"semibold",faudsb:"semibold"},"utility-fill":{"fa-semibold":"semibold",faufsb:"semibold"}},ag={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},ty=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-utility","fa-utility-duo","fa-utility-fill"],Ve="classic",Fa="duotone",ny="sharp",ay="sharp-duotone",ry="chisel",oy="etch",sy="jelly",ly="jelly-duo",uy="jelly-fill",cy="notdog",dy="notdog-duo",my="slab",fy="slab-press",yy="thumbprint",zy="utility",wy="utility-duo",py="utility-fill",hy="whiteboard",rg="Classic",og="Duotone",sg="Sharp",lg="Sharp Duotone",ug="Chisel",cg="Etch",dg="Jelly",mg="Jelly Duo",fg="Jelly Fill",yg="Notdog",zg="Notdog Duo",wg="Slab",pg="Slab Press",hg="Thumbprint",gg="Utility",jg="Utility Duo",kg="Utility Fill",vg="Whiteboard",gy=[Ve,Fa,ny,ay,ry,oy,sy,ly,uy,cy,dy,my,fy,yy,zy,wy,py,hy];xl={},re(re(re(re(re(re(re(re(re(re(xl,Ve,rg),Fa,og),ny,sg),ay,lg),ry,ug),oy,cg),sy,dg),ly,mg),uy,fg),cy,yg),re(re(re(re(re(re(re(re(xl,dy,zg),my,wg),fy,pg),yy,hg),zy,gg),wy,jg),py,kg),hy,vg);var bg={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"},slab:{400:"faslr"},"slab-press":{400:"faslpr"},whiteboard:{600:"fawsb"},thumbprint:{300:"fatl"},notdog:{900:"fans"},"notdog-duo":{900:"fands"},etch:{900:"faes"},chisel:{400:"facr"},jelly:{400:"fajr"},"jelly-fill":{400:"fajfr"},"jelly-duo":{400:"fajdr"},utility:{600:"fausb"},"utility-duo":{600:"faudsb"},"utility-fill":{600:"faufsb"}},Cg={"Font Awesome 7 Free":{900:"fas",400:"far"},"Font Awesome 7 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 7 Brands":{400:"fab",normal:"fab"},"Font Awesome 7 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 7 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 7 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"},"Font Awesome 7 Jelly":{400:"fajr",normal:"fajr"},"Font Awesome 7 Jelly Fill":{400:"fajfr",normal:"fajfr"},"Font Awesome 7 Jelly Duo":{400:"fajdr",normal:"fajdr"},"Font Awesome 7 Slab":{400:"faslr",normal:"faslr"},"Font Awesome 7 Slab Press":{400:"faslpr",normal:"faslpr"},"Font Awesome 7 Thumbprint":{300:"fatl",normal:"fatl"},"Font Awesome 7 Notdog":{900:"fans",normal:"fans"},"Font Awesome 7 Notdog Duo":{900:"fands",normal:"fands"},"Font Awesome 7 Etch":{900:"faes",normal:"faes"},"Font Awesome 7 Chisel":{400:"facr",normal:"facr"},"Font Awesome 7 Whiteboard":{600:"fawsb",normal:"fawsb"},"Font Awesome 7 Utility":{600:"fausb",normal:"fausb"},"Font Awesome 7 Utility Duo":{600:"faudsb",normal:"faudsb"},"Font Awesome 7 Utility Fill":{600:"faufsb",normal:"faufsb"}},Dg=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["chisel",{defaultShortPrefixId:"facr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["etch",{defaultShortPrefixId:"faes",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["jelly",{defaultShortPrefixId:"fajr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-duo",{defaultShortPrefixId:"fajdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-fill",{defaultShortPrefixId:"fajfr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["notdog",{defaultShortPrefixId:"fans",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog-duo",{defaultShortPrefixId:"fands",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["slab",{defaultShortPrefixId:"faslr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press",{defaultShortPrefixId:"faslpr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["thumbprint",{defaultShortPrefixId:"fatl",defaultStyleId:"light",styleIds:["light"],futureStyleIds:[],defaultFontWeight:300}],["utility",{defaultShortPrefixId:"fausb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-duo",{defaultShortPrefixId:"faudsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-fill",{defaultShortPrefixId:"faufsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["whiteboard",{defaultShortPrefixId:"fawsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}]]),Ag={chisel:{regular:"facr"},classic:{brands:"fab",light:"fal",regular:"far",solid:"fas",thin:"fat"},duotone:{light:"fadl",regular:"fadr",solid:"fad",thin:"fadt"},etch:{solid:"faes"},jelly:{regular:"fajr"},"jelly-duo":{regular:"fajdr"},"jelly-fill":{regular:"fajfr"},notdog:{solid:"fans"},"notdog-duo":{solid:"fands"},sharp:{light:"fasl",regular:"fasr",solid:"fass",thin:"fast"},"sharp-duotone":{light:"fasdl",regular:"fasdr",solid:"fasds",thin:"fasdt"},slab:{regular:"faslr"},"slab-press":{regular:"faslpr"},thumbprint:{light:"fatl"},utility:{semibold:"fausb"},"utility-duo":{semibold:"faudsb"},"utility-fill":{semibold:"faufsb"},whiteboard:{semibold:"fawsb"}},jy=["fak","fa-kit","fakd","fa-kit-duotone"],Km={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},Eg=["kit"],Pg="kit",Tg="kit-duotone",Sg="Kit",xg="Kit Duotone";re(re({},Pg,Sg),Tg,xg);var Gg={kit:{"fa-kit":"fak"}},Ng={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},Bg={kit:{fak:"fa-kit"}},Um={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},Gl,to={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Rg=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-utility","fa-utility-duo","fa-utility-fill"],Og="classic",Fg="duotone",_g="sharp",Mg="sharp-duotone",Ig="chisel",Jg="etch",Wg="jelly",Lg="jelly-duo",Hg="jelly-fill",Kg="notdog",Ug="notdog-duo",$g="slab",Zg="slab-press",Vg="thumbprint",Yg="utility",Qg="utility-duo",Xg="utility-fill",qg="whiteboard",ej="Classic",ij="Duotone",tj="Sharp",nj="Sharp Duotone",aj="Chisel",rj="Etch",oj="Jelly",sj="Jelly Duo",lj="Jelly Fill",uj="Notdog",cj="Notdog Duo",dj="Slab",mj="Slab Press",fj="Thumbprint",yj="Utility",zj="Utility Duo",wj="Utility Fill",pj="Whiteboard";Gl={},re(re(re(re(re(re(re(re(re(re(Gl,Og,ej),Fg,ij),_g,tj),Mg,nj),Ig,aj),Jg,rj),Wg,oj),Lg,sj),Hg,lj),Kg,uj),re(re(re(re(re(re(re(re(Gl,Ug,cj),$g,dj),Zg,mj),Vg,fj),Yg,yj),Qg,zj),Xg,wj),qg,pj);var hj="kit",gj="kit-duotone",jj="Kit",kj="Kit Duotone";re(re({},hj,jj),gj,kj);var vj={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"},slab:{"fa-regular":"faslr"},"slab-press":{"fa-regular":"faslpr"},whiteboard:{"fa-semibold":"fawsb"},thumbprint:{"fa-light":"fatl"},notdog:{"fa-solid":"fans"},"notdog-duo":{"fa-solid":"fands"},etch:{"fa-solid":"faes"},jelly:{"fa-regular":"fajr"},"jelly-fill":{"fa-regular":"fajfr"},"jelly-duo":{"fa-regular":"fajdr"},chisel:{"fa-regular":"facr"},utility:{"fa-semibold":"fausb"},"utility-duo":{"fa-semibold":"faudsb"},"utility-fill":{"fa-semibold":"faufsb"}},bj={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"],slab:["faslr"],"slab-press":["faslpr"],whiteboard:["fawsb"],thumbprint:["fatl"],notdog:["fans"],"notdog-duo":["fands"],etch:["faes"],jelly:["fajr"],"jelly-fill":["fajfr"],"jelly-duo":["fajdr"],chisel:["facr"],utility:["fausb"],"utility-duo":["faudsb"],"utility-fill":["faufsb"]},Ul={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"},slab:{faslr:"fa-regular"},"slab-press":{faslpr:"fa-regular"},whiteboard:{fawsb:"fa-semibold"},thumbprint:{fatl:"fa-light"},notdog:{fans:"fa-solid"},"notdog-duo":{fands:"fa-solid"},etch:{faes:"fa-solid"},jelly:{fajr:"fa-regular"},"jelly-fill":{fajfr:"fa-regular"},"jelly-duo":{fajdr:"fa-regular"},chisel:{facr:"fa-regular"},utility:{fausb:"fa-semibold"},"utility-duo":{faudsb:"fa-semibold"},"utility-fill":{faufsb:"fa-semibold"}},Cj=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands","fa-semibold"],ky=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt","faslr","faslpr","fawsb","fatl","fans","fands","faes","fajr","fajfr","fajdr","facr","fausb","faudsb","faufsb"].concat(Rg,Cj),Dj=["solid","regular","light","thin","duotone","brands","semibold"],vy=[1,2,3,4,5,6,7,8,9,10],Aj=vy.concat([11,12,13,14,15,16,17,18,19,20]),Ej=["aw","fw","pull-left","pull-right"],Pj=[].concat(xi(Object.keys(bj)),Dj,Ej,["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","inverse","layers","layers-bottom-left","layers-bottom-right","layers-counter","layers-text","layers-top-left","layers-top-right","li","pull-end","pull-start","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul","width-auto","width-fixed",to.GROUP,to.SWAP_OPACITY,to.PRIMARY,to.SECONDARY]).concat(vy.map(function(a){return"".concat(a,"x")})).concat(Aj.map(function(a){return"w-".concat(a)})),Tj={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},it="___FONT_AWESOME___",$l=16,by="fa",Cy="svg-inline--fa",Xt="data-fa-i2svg",Zl="data-fa-pseudo-element",Sj="data-fa-pseudo-element-pending",hu="data-prefix",gu="data-icon",$m="fontawesome-i2svg",xj="async",Gj=["HTML","HEAD","STYLE","SCRIPT"],Dy=["::before","::after",":before",":after"],Ay=(function(){try{return!0}catch{return!1}})();function _a(a){return new Proxy(a,{get:function(r,s){return s in r?r[s]:r[Ve]}})}var Ey=B({},iy);Ey[Ve]=B(B(B(B({},{"fa-duotone":"duotone"}),iy[Ve]),Km.kit),Km["kit-duotone"]);var Nj=_a(Ey),Vl=B({},Ag);Vl[Ve]=B(B(B(B({},{duotone:"fad"}),Vl[Ve]),Um.kit),Um["kit-duotone"]);var Zm=_a(Vl),Yl=B({},Ul);Yl[Ve]=B(B({},Yl[Ve]),Bg.kit);var ju=_a(Yl),Ql=B({},vj);Ql[Ve]=B(B({},Ql[Ve]),Gg.kit);_a(Ql);var Bj=tg,Py="fa-layers-text",Rj=ng,Oj=B({},bg);_a(Oj);var Fj=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Nl=ag,_j=[].concat(xi(Eg),xi(Pj)),Ga=At.FontAwesomeConfig||{};function Mj(a){var n=Ae.querySelector("script["+a+"]");if(n)return n.getAttribute(a)}function Ij(a){return a===""?!0:a==="false"?!1:a==="true"?!0:a}if(Ae&&typeof Ae.querySelector=="function"){var Jj=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-search-pseudo-elements","searchPseudoElements"],["data-search-pseudo-elements-warnings","searchPseudoElementsWarnings"],["data-search-pseudo-elements-full-scan","searchPseudoElementsFullScan"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Jj.forEach(function(a){var n=go(a,2),r=n[0],s=n[1],c=Ij(Mj(r));c!=null&&(Ga[s]=c)})}var Ty={styleDefault:"solid",familyDefault:Ve,cssPrefix:by,replacementClass:Cy,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Ga.familyPrefix&&(Ga.cssPrefix=Ga.familyPrefix);var _n=B(B({},Ty),Ga);_n.autoReplaceSvg||(_n.observeMutations=!1);var V={};Object.keys(Ty).forEach(function(a){Object.defineProperty(V,a,{enumerable:!0,set:function(r){_n[a]=r,Na.forEach(function(s){return s(V)})},get:function(){return _n[a]}})});Object.defineProperty(V,"familyPrefix",{enumerable:!0,set:function(n){_n.cssPrefix=n,Na.forEach(function(r){return r(V)})},get:function(){return _n.cssPrefix}});At.FontAwesomeConfig=V;var Na=[];function Wj(a){return Na.push(a),function(){Na.splice(Na.indexOf(a),1)}}var Sn=$l,Ii={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Lj(a){if(!(!a||!at)){var n=Ae.createElement("style");n.setAttribute("type","text/css"),n.innerHTML=a;for(var r=Ae.head.childNodes,s=null,c=r.length-1;c>-1;c--){var d=r[c],f=(d.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(f)>-1&&(s=d)}return Ae.head.insertBefore(n,s),a}}var Hj="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Vm(){for(var a=12,n="";a-- >0;)n+=Hj[Math.random()*62|0];return n}function Jn(a){for(var n=[],r=(a||[]).length>>>0;r--;)n[r]=a[r];return n}function ku(a){return a.classList?Jn(a.classList):(a.getAttribute("class")||"").split(" ").filter(function(n){return n})}function Sy(a){return"".concat(a).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Kj(a){return Object.keys(a||{}).reduce(function(n,r){return n+"".concat(r,'="').concat(Sy(a[r]),'" ')},"").trim()}function jo(a){return Object.keys(a||{}).reduce(function(n,r){return n+"".concat(r,": ").concat(a[r].trim(),";")},"")}function vu(a){return a.size!==Ii.size||a.x!==Ii.x||a.y!==Ii.y||a.rotate!==Ii.rotate||a.flipX||a.flipY}function Uj(a){var n=a.transform,r=a.containerWidth,s=a.iconWidth,c={transform:"translate(".concat(r/2," 256)")},d="translate(".concat(n.x*32,", ").concat(n.y*32,") "),f="scale(".concat(n.size/16*(n.flipX?-1:1),", ").concat(n.size/16*(n.flipY?-1:1),") "),y="rotate(".concat(n.rotate," 0 0)"),w={transform:"".concat(d," ").concat(f," ").concat(y)},j={transform:"translate(".concat(s/2*-1," -256)")};return{outer:c,inner:w,path:j}}function $j(a){var n=a.transform,r=a.width,s=r===void 0?$l:r,c=a.height,d=c===void 0?$l:c,f="";return ey?f+="translate(".concat(n.x/Sn-s/2,"em, ").concat(n.y/Sn-d/2,"em) "):f+="translate(calc(-50% + ".concat(n.x/Sn,"em), calc(-50% + ").concat(n.y/Sn,"em)) "),f+="scale(".concat(n.size/Sn*(n.flipX?-1:1),", ").concat(n.size/Sn*(n.flipY?-1:1),") "),f+="rotate(".concat(n.rotate,"deg) "),f}var Zj=`:root, :host {
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
}`;function xy(){var a=by,n=Cy,r=V.cssPrefix,s=V.replacementClass,c=Zj;if(r!==a||s!==n){var d=new RegExp("\\.".concat(a,"\\-"),"g"),f=new RegExp("\\--".concat(a,"\\-"),"g"),y=new RegExp("\\.".concat(n),"g");c=c.replace(d,".".concat(r,"-")).replace(f,"--".concat(r,"-")).replace(y,".".concat(s))}return c}var Ym=!1;function Bl(){V.autoAddCss&&!Ym&&(Lj(xy()),Ym=!0)}var Vj={mixout:function(){return{dom:{css:xy,insertCss:Bl}}},hooks:function(){return{beforeDOMElementCreation:function(){Bl()},beforeI2svg:function(){Bl()}}}},tt=At||{};tt[it]||(tt[it]={});tt[it].styles||(tt[it].styles={});tt[it].hooks||(tt[it].hooks={});tt[it].shims||(tt[it].shims=[]);var Si=tt[it],Gy=[],Ny=function(){Ae.removeEventListener("DOMContentLoaded",Ny),mo=1,Gy.map(function(n){return n()})},mo=!1;at&&(mo=(Ae.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Ae.readyState),mo||Ae.addEventListener("DOMContentLoaded",Ny));function Yj(a){at&&(mo?setTimeout(a,0):Gy.push(a))}function Ma(a){var n=a.tag,r=a.attributes,s=r===void 0?{}:r,c=a.children,d=c===void 0?[]:c;return typeof a=="string"?Sy(a):"<".concat(n," ").concat(Kj(s),">").concat(d.map(Ma).join(""),"</").concat(n,">")}function Qm(a,n,r){if(a&&a[n]&&a[n][r])return{prefix:n,iconName:r,icon:a[n][r]}}var Rl=function(n,r,s,c){var d=Object.keys(n),f=d.length,y=r,w,j,v;for(s===void 0?(w=1,v=n[d[0]]):(w=0,v=s);w<f;w++)j=d[w],v=y(v,n[j],j,n);return v};function By(a){return xi(a).length!==1?null:a.codePointAt(0).toString(16)}function Xm(a){return Object.keys(a).reduce(function(n,r){var s=a[r],c=!!s.icon;return c?n[s.iconName]=s.icon:n[r]=s,n},{})}function Xl(a,n){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},s=r.skipHooks,c=s===void 0?!1:s,d=Xm(n);typeof Si.hooks.addPack=="function"&&!c?Si.hooks.addPack(a,Xm(n)):Si.styles[a]=B(B({},Si.styles[a]||{}),d),a==="fas"&&Xl("fa",n)}var Ra=Si.styles,Qj=Si.shims,Ry=Object.keys(ju),Xj=Ry.reduce(function(a,n){return a[n]=Object.keys(ju[n]),a},{}),bu=null,Oy={},Fy={},_y={},My={},Iy={};function qj(a){return~_j.indexOf(a)}function ek(a,n){var r=n.split("-"),s=r[0],c=r.slice(1).join("-");return s===a&&c!==""&&!qj(c)?c:null}var Jy=function(){var n=function(d){return Rl(Ra,function(f,y,w){return f[w]=Rl(y,d,{}),f},{})};Oy=n(function(c,d,f){if(d[3]&&(c[d[3]]=f),d[2]){var y=d[2].filter(function(w){return typeof w=="number"});y.forEach(function(w){c[w.toString(16)]=f})}return c}),Fy=n(function(c,d,f){if(c[f]=f,d[2]){var y=d[2].filter(function(w){return typeof w=="string"});y.forEach(function(w){c[w]=f})}return c}),Iy=n(function(c,d,f){var y=d[2];return c[f]=f,y.forEach(function(w){c[w]=f}),c});var r="far"in Ra||V.autoFetchSvg,s=Rl(Qj,function(c,d){var f=d[0],y=d[1],w=d[2];return y==="far"&&!r&&(y="fas"),typeof f=="string"&&(c.names[f]={prefix:y,iconName:w}),typeof f=="number"&&(c.unicodes[f.toString(16)]={prefix:y,iconName:w}),c},{names:{},unicodes:{}});_y=s.names,My=s.unicodes,bu=ko(V.styleDefault,{family:V.familyDefault})};Wj(function(a){bu=ko(a.styleDefault,{family:V.familyDefault})});Jy();function Cu(a,n){return(Oy[a]||{})[n]}function ik(a,n){return(Fy[a]||{})[n]}function Vt(a,n){return(Iy[a]||{})[n]}function Wy(a){return _y[a]||{prefix:null,iconName:null}}function tk(a){var n=My[a],r=Cu("fas",a);return n||(r?{prefix:"fas",iconName:r}:null)||{prefix:null,iconName:null}}function Et(){return bu}var Ly=function(){return{prefix:null,iconName:null,rest:[]}};function nk(a){var n=Ve,r=Ry.reduce(function(s,c){return s[c]="".concat(V.cssPrefix,"-").concat(c),s},{});return gy.forEach(function(s){(a.includes(r[s])||a.some(function(c){return Xj[s].includes(c)}))&&(n=s)}),n}function ko(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.family,s=r===void 0?Ve:r,c=Nj[s][a];if(s===Fa&&!a)return"fad";var d=Zm[s][a]||Zm[s][c],f=a in Si.styles?a:null,y=d||f||null;return y}function ak(a){var n=[],r=null;return a.forEach(function(s){var c=ek(V.cssPrefix,s);c?r=c:s&&n.push(s)}),{iconName:r,rest:n}}function qm(a){return a.sort().filter(function(n,r,s){return s.indexOf(n)===r})}var ef=ky.concat(jy);function vo(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,s=r===void 0?!1:r,c=null,d=qm(a.filter(function(O){return ef.includes(O)})),f=qm(a.filter(function(O){return!ef.includes(O)})),y=d.filter(function(O){return c=O,!ty.includes(O)}),w=go(y,1),j=w[0],v=j===void 0?null:j,D=nk(d),A=B(B({},ak(f)),{},{prefix:ko(v,{family:D})});return B(B(B({},A),lk({values:a,family:D,styles:Ra,config:V,canonical:A,givenPrefix:c})),rk(s,c,A))}function rk(a,n,r){var s=r.prefix,c=r.iconName;if(a||!s||!c)return{prefix:s,iconName:c};var d=n==="fa"?Wy(c):{},f=Vt(s,c);return c=d.iconName||f||c,s=d.prefix||s,s==="far"&&!Ra.far&&Ra.fas&&!V.autoFetchSvg&&(s="fas"),{prefix:s,iconName:c}}var ok=gy.filter(function(a){return a!==Ve||a!==Fa}),sk=Object.keys(Ul).filter(function(a){return a!==Ve}).map(function(a){return Object.keys(Ul[a])}).flat();function lk(a){var n=a.values,r=a.family,s=a.canonical,c=a.givenPrefix,d=c===void 0?"":c,f=a.styles,y=f===void 0?{}:f,w=a.config,j=w===void 0?{}:w,v=r===Fa,D=n.includes("fa-duotone")||n.includes("fad"),A=j.familyDefault==="duotone",O=s.prefix==="fad"||s.prefix==="fa-duotone";if(!v&&(D||A||O)&&(s.prefix="fad"),(n.includes("fa-brands")||n.includes("fab"))&&(s.prefix="fab"),!s.prefix&&ok.includes(r)){var L=Object.keys(y).find(function(I){return sk.includes(I)});if(L||j.autoFetchSvg){var F=Dg.get(r).defaultShortPrefixId;s.prefix=F,s.iconName=Vt(s.prefix,s.iconName)||s.iconName}}return(s.prefix==="fa"||d==="fa")&&(s.prefix=Et()||"fas"),s}var uk=(function(){function a(){$h(this,a),this.definitions={}}return Vh(a,[{key:"add",value:function(){for(var r=this,s=arguments.length,c=new Array(s),d=0;d<s;d++)c[d]=arguments[d];var f=c.reduce(this._pullDefinitions,{});Object.keys(f).forEach(function(y){r.definitions[y]=B(B({},r.definitions[y]||{}),f[y]),Xl(y,f[y]);var w=ju[Ve][y];w&&Xl(w,f[y]),Jy()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(r,s){var c=s.prefix&&s.iconName&&s.icon?{0:s}:s;return Object.keys(c).map(function(d){var f=c[d],y=f.prefix,w=f.iconName,j=f.icon,v=j[2];r[y]||(r[y]={}),v.length>0&&v.forEach(function(D){typeof D=="string"&&(r[y][D]=j)}),r[y][w]=j}),r}}])})(),tf=[],On={},Fn={},ck=Object.keys(Fn);function dk(a,n){var r=n.mixoutsTo;return tf=a,On={},Object.keys(Fn).forEach(function(s){ck.indexOf(s)===-1&&delete Fn[s]}),tf.forEach(function(s){var c=s.mixout?s.mixout():{};if(Object.keys(c).forEach(function(f){typeof c[f]=="function"&&(r[f]=c[f]),co(c[f])==="object"&&Object.keys(c[f]).forEach(function(y){r[f]||(r[f]={}),r[f][y]=c[f][y]})}),s.hooks){var d=s.hooks();Object.keys(d).forEach(function(f){On[f]||(On[f]=[]),On[f].push(d[f])})}s.provides&&s.provides(Fn)}),r}function ql(a,n){for(var r=arguments.length,s=new Array(r>2?r-2:0),c=2;c<r;c++)s[c-2]=arguments[c];var d=On[a]||[];return d.forEach(function(f){n=f.apply(null,[n].concat(s))}),n}function qt(a){for(var n=arguments.length,r=new Array(n>1?n-1:0),s=1;s<n;s++)r[s-1]=arguments[s];var c=On[a]||[];c.forEach(function(d){d.apply(null,r)})}function Pt(){var a=arguments[0],n=Array.prototype.slice.call(arguments,1);return Fn[a]?Fn[a].apply(null,n):void 0}function eu(a){a.prefix==="fa"&&(a.prefix="fas");var n=a.iconName,r=a.prefix||Et();if(n)return n=Vt(r,n)||n,Qm(Hy.definitions,r,n)||Qm(Si.styles,r,n)}var Hy=new uk,mk=function(){V.autoReplaceSvg=!1,V.observeMutations=!1,qt("noAuto")},fk={i2svg:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return at?(qt("beforeI2svg",n),Pt("pseudoElements2svg",n),Pt("i2svg",n)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=n.autoReplaceSvgRoot;V.autoReplaceSvg===!1&&(V.autoReplaceSvg=!0),V.observeMutations=!0,Yj(function(){zk({autoReplaceSvgRoot:r}),qt("watch",n)})}},yk={icon:function(n){if(n===null)return null;if(co(n)==="object"&&n.prefix&&n.iconName)return{prefix:n.prefix,iconName:Vt(n.prefix,n.iconName)||n.iconName};if(Array.isArray(n)&&n.length===2){var r=n[1].indexOf("fa-")===0?n[1].slice(3):n[1],s=ko(n[0]);return{prefix:s,iconName:Vt(s,r)||r}}if(typeof n=="string"&&(n.indexOf("".concat(V.cssPrefix,"-"))>-1||n.match(Bj))){var c=vo(n.split(" "),{skipLookups:!0});return{prefix:c.prefix||Et(),iconName:Vt(c.prefix,c.iconName)||c.iconName}}if(typeof n=="string"){var d=Et();return{prefix:d,iconName:Vt(d,n)||n}}}},zi={noAuto:mk,config:V,dom:fk,parse:yk,library:Hy,findIconDefinition:eu,toHtml:Ma},zk=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=n.autoReplaceSvgRoot,s=r===void 0?Ae:r;(Object.keys(Si.styles).length>0||V.autoFetchSvg)&&at&&V.autoReplaceSvg&&zi.dom.i2svg({node:s})};function bo(a,n){return Object.defineProperty(a,"abstract",{get:n}),Object.defineProperty(a,"html",{get:function(){return a.abstract.map(function(s){return Ma(s)})}}),Object.defineProperty(a,"node",{get:function(){if(at){var s=Ae.createElement("div");return s.innerHTML=a.html,s.children}}}),a}function wk(a){var n=a.children,r=a.main,s=a.mask,c=a.attributes,d=a.styles,f=a.transform;if(vu(f)&&r.found&&!s.found){var y=r.width,w=r.height,j={x:y/w/2,y:.5};c.style=jo(B(B({},d),{},{"transform-origin":"".concat(j.x+f.x/16,"em ").concat(j.y+f.y/16,"em")}))}return[{tag:"svg",attributes:c,children:n}]}function pk(a){var n=a.prefix,r=a.iconName,s=a.children,c=a.attributes,d=a.symbol,f=d===!0?"".concat(n,"-").concat(V.cssPrefix,"-").concat(r):d;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:B(B({},c),{},{id:f}),children:s}]}]}function hk(a){var n=["aria-label","aria-labelledby","title","role"];return n.some(function(r){return r in a})}function Du(a){var n=a.icons,r=n.main,s=n.mask,c=a.prefix,d=a.iconName,f=a.transform,y=a.symbol,w=a.maskId,j=a.extra,v=a.watchable,D=v===void 0?!1:v,A=s.found?s:r,O=A.width,L=A.height,F=[V.replacementClass,d?"".concat(V.cssPrefix,"-").concat(d):""].filter(function(U){return j.classes.indexOf(U)===-1}).filter(function(U){return U!==""||!!U}).concat(j.classes).join(" "),I={children:[],attributes:B(B({},j.attributes),{},{"data-prefix":c,"data-icon":d,class:F,role:j.attributes.role||"img",viewBox:"0 0 ".concat(O," ").concat(L)})};!hk(j.attributes)&&!j.attributes["aria-hidden"]&&(I.attributes["aria-hidden"]="true"),D&&(I.attributes[Xt]="");var J=B(B({},I),{},{prefix:c,iconName:d,main:r,mask:s,maskId:w,transform:f,symbol:y,styles:B({},j.styles)}),X=s.found&&r.found?Pt("generateAbstractMask",J)||{children:[],attributes:{}}:Pt("generateAbstractIcon",J)||{children:[],attributes:{}},ne=X.children,ae=X.attributes;return J.children=ne,J.attributes=ae,y?pk(J):wk(J)}function nf(a){var n=a.content,r=a.width,s=a.height,c=a.transform,d=a.extra,f=a.watchable,y=f===void 0?!1:f,w=B(B({},d.attributes),{},{class:d.classes.join(" ")});y&&(w[Xt]="");var j=B({},d.styles);vu(c)&&(j.transform=$j({transform:c,width:r,height:s}),j["-webkit-transform"]=j.transform);var v=jo(j);v.length>0&&(w.style=v);var D=[];return D.push({tag:"span",attributes:w,children:[n]}),D}function gk(a){var n=a.content,r=a.extra,s=B(B({},r.attributes),{},{class:r.classes.join(" ")}),c=jo(r.styles);c.length>0&&(s.style=c);var d=[];return d.push({tag:"span",attributes:s,children:[n]}),d}var Ol=Si.styles;function iu(a){var n=a[0],r=a[1],s=a.slice(4),c=go(s,1),d=c[0],f=null;return Array.isArray(d)?f={tag:"g",attributes:{class:"".concat(V.cssPrefix,"-").concat(Nl.GROUP)},children:[{tag:"path",attributes:{class:"".concat(V.cssPrefix,"-").concat(Nl.SECONDARY),fill:"currentColor",d:d[0]}},{tag:"path",attributes:{class:"".concat(V.cssPrefix,"-").concat(Nl.PRIMARY),fill:"currentColor",d:d[1]}}]}:f={tag:"path",attributes:{fill:"currentColor",d}},{found:!0,width:n,height:r,icon:f}}var jk={found:!1,width:512,height:512};function kk(a,n){!Ay&&!V.showMissingIcons&&a&&console.error('Icon with name "'.concat(a,'" and prefix "').concat(n,'" is missing.'))}function tu(a,n){var r=n;return n==="fa"&&V.styleDefault!==null&&(n=Et()),new Promise(function(s,c){if(r==="fa"){var d=Wy(a)||{};a=d.iconName||a,n=d.prefix||n}if(a&&n&&Ol[n]&&Ol[n][a]){var f=Ol[n][a];return s(iu(f))}kk(a,n),s(B(B({},jk),{},{icon:V.showMissingIcons&&a?Pt("missingIconAbstract")||{}:{}}))})}var af=function(){},nu=V.measurePerformance&&io&&io.mark&&io.measure?io:{mark:af,measure:af},xa='FA "7.1.0"',vk=function(n){return nu.mark("".concat(xa," ").concat(n," begins")),function(){return Ky(n)}},Ky=function(n){nu.mark("".concat(xa," ").concat(n," ends")),nu.measure("".concat(xa," ").concat(n),"".concat(xa," ").concat(n," begins"),"".concat(xa," ").concat(n," ends"))},Au={begin:vk,end:Ky},ro=function(){};function rf(a){var n=a.getAttribute?a.getAttribute(Xt):null;return typeof n=="string"}function bk(a){var n=a.getAttribute?a.getAttribute(hu):null,r=a.getAttribute?a.getAttribute(gu):null;return n&&r}function Ck(a){return a&&a.classList&&a.classList.contains&&a.classList.contains(V.replacementClass)}function Dk(){if(V.autoReplaceSvg===!0)return oo.replace;var a=oo[V.autoReplaceSvg];return a||oo.replace}function Ak(a){return Ae.createElementNS("http://www.w3.org/2000/svg",a)}function Ek(a){return Ae.createElement(a)}function Uy(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.ceFn,s=r===void 0?a.tag==="svg"?Ak:Ek:r;if(typeof a=="string")return Ae.createTextNode(a);var c=s(a.tag);Object.keys(a.attributes||[]).forEach(function(f){c.setAttribute(f,a.attributes[f])});var d=a.children||[];return d.forEach(function(f){c.appendChild(Uy(f,{ceFn:s}))}),c}function Pk(a){var n=" ".concat(a.outerHTML," ");return n="".concat(n,"Font Awesome fontawesome.com "),n}var oo={replace:function(n){var r=n[0];if(r.parentNode)if(n[1].forEach(function(c){r.parentNode.insertBefore(Uy(c),r)}),r.getAttribute(Xt)===null&&V.keepOriginalSource){var s=Ae.createComment(Pk(r));r.parentNode.replaceChild(s,r)}else r.remove()},nest:function(n){var r=n[0],s=n[1];if(~ku(r).indexOf(V.replacementClass))return oo.replace(n);var c=new RegExp("".concat(V.cssPrefix,"-.*"));if(delete s[0].attributes.id,s[0].attributes.class){var d=s[0].attributes.class.split(" ").reduce(function(y,w){return w===V.replacementClass||w.match(c)?y.toSvg.push(w):y.toNode.push(w),y},{toNode:[],toSvg:[]});s[0].attributes.class=d.toSvg.join(" "),d.toNode.length===0?r.removeAttribute("class"):r.setAttribute("class",d.toNode.join(" "))}var f=s.map(function(y){return Ma(y)}).join(`
`);r.setAttribute(Xt,""),r.innerHTML=f}};function of(a){a()}function $y(a,n){var r=typeof n=="function"?n:ro;if(a.length===0)r();else{var s=of;V.mutateApproach===xj&&(s=At.requestAnimationFrame||of),s(function(){var c=Dk(),d=Au.begin("mutate");a.map(c),d(),r()})}}var Eu=!1;function Zy(){Eu=!0}function au(){Eu=!1}var fo=null;function sf(a){if(Hm&&V.observeMutations){var n=a.treeCallback,r=n===void 0?ro:n,s=a.nodeCallback,c=s===void 0?ro:s,d=a.pseudoElementsCallback,f=d===void 0?ro:d,y=a.observeMutationsRoot,w=y===void 0?Ae:y;fo=new Hm(function(j){if(!Eu){var v=Et();Jn(j).forEach(function(D){if(D.type==="childList"&&D.addedNodes.length>0&&!rf(D.addedNodes[0])&&(V.searchPseudoElements&&f(D.target),r(D.target)),D.type==="attributes"&&D.target.parentNode&&V.searchPseudoElements&&f([D.target],!0),D.type==="attributes"&&rf(D.target)&&~Fj.indexOf(D.attributeName))if(D.attributeName==="class"&&bk(D.target)){var A=vo(ku(D.target)),O=A.prefix,L=A.iconName;D.target.setAttribute(hu,O||v),L&&D.target.setAttribute(gu,L)}else Ck(D.target)&&c(D.target)})}}),at&&fo.observe(w,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Tk(){fo&&fo.disconnect()}function Sk(a){var n=a.getAttribute("style"),r=[];return n&&(r=n.split(";").reduce(function(s,c){var d=c.split(":"),f=d[0],y=d.slice(1);return f&&y.length>0&&(s[f]=y.join(":").trim()),s},{})),r}function xk(a){var n=a.getAttribute("data-prefix"),r=a.getAttribute("data-icon"),s=a.innerText!==void 0?a.innerText.trim():"",c=vo(ku(a));return c.prefix||(c.prefix=Et()),n&&r&&(c.prefix=n,c.iconName=r),c.iconName&&c.prefix||(c.prefix&&s.length>0&&(c.iconName=ik(c.prefix,a.innerText)||Cu(c.prefix,By(a.innerText))),!c.iconName&&V.autoFetchSvg&&a.firstChild&&a.firstChild.nodeType===Node.TEXT_NODE&&(c.iconName=a.firstChild.data)),c}function Gk(a){var n=Jn(a.attributes).reduce(function(r,s){return r.name!=="class"&&r.name!=="style"&&(r[s.name]=s.value),r},{});return n}function Nk(){return{iconName:null,prefix:null,transform:Ii,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function lf(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},r=xk(a),s=r.iconName,c=r.prefix,d=r.rest,f=Gk(a),y=ql("parseNodeAttributes",{},a),w=n.styleParser?Sk(a):[];return B({iconName:s,prefix:c,transform:Ii,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:d,styles:w,attributes:f}},y)}var Bk=Si.styles;function Vy(a){var n=V.autoReplaceSvg==="nest"?lf(a,{styleParser:!1}):lf(a);return~n.extra.classes.indexOf(Py)?Pt("generateLayersText",a,n):Pt("generateSvgReplacementMutation",a,n)}function Rk(){return[].concat(xi(jy),xi(ky))}function uf(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!at)return Promise.resolve();var r=Ae.documentElement.classList,s=function(D){return r.add("".concat($m,"-").concat(D))},c=function(D){return r.remove("".concat($m,"-").concat(D))},d=V.autoFetchSvg?Rk():ty.concat(Object.keys(Bk));d.includes("fa")||d.push("fa");var f=[".".concat(Py,":not([").concat(Xt,"])")].concat(d.map(function(v){return".".concat(v,":not([").concat(Xt,"])")})).join(", ");if(f.length===0)return Promise.resolve();var y=[];try{y=Jn(a.querySelectorAll(f))}catch{}if(y.length>0)s("pending"),c("complete");else return Promise.resolve();var w=Au.begin("onTree"),j=y.reduce(function(v,D){try{var A=Vy(D);A&&v.push(A)}catch(O){Ay||O.name==="MissingIcon"&&console.error(O)}return v},[]);return new Promise(function(v,D){Promise.all(j).then(function(A){$y(A,function(){s("active"),s("complete"),c("pending"),typeof n=="function"&&n(),w(),v()})}).catch(function(A){w(),D(A)})})}function Ok(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Vy(a).then(function(r){r&&$y([r],n)})}function Fk(a){return function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=(n||{}).icon?n:eu(n||{}),c=r.mask;return c&&(c=(c||{}).icon?c:eu(c||{})),a(s,B(B({},r),{},{mask:c}))}}var _k=function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=r.transform,c=s===void 0?Ii:s,d=r.symbol,f=d===void 0?!1:d,y=r.mask,w=y===void 0?null:y,j=r.maskId,v=j===void 0?null:j,D=r.classes,A=D===void 0?[]:D,O=r.attributes,L=O===void 0?{}:O,F=r.styles,I=F===void 0?{}:F;if(n){var J=n.prefix,X=n.iconName,ne=n.icon;return bo(B({type:"icon"},n),function(){return qt("beforeDOMElementCreation",{iconDefinition:n,params:r}),Du({icons:{main:iu(ne),mask:w?iu(w.icon):{found:!1,width:null,height:null,icon:{}}},prefix:J,iconName:X,transform:B(B({},Ii),c),symbol:f,maskId:v,extra:{attributes:L,styles:I,classes:A}})})}},Mk={mixout:function(){return{icon:Fk(_k)}},hooks:function(){return{mutationObserverCallbacks:function(r){return r.treeCallback=uf,r.nodeCallback=Ok,r}}},provides:function(n){n.i2svg=function(r){var s=r.node,c=s===void 0?Ae:s,d=r.callback,f=d===void 0?function(){}:d;return uf(c,f)},n.generateSvgReplacementMutation=function(r,s){var c=s.iconName,d=s.prefix,f=s.transform,y=s.symbol,w=s.mask,j=s.maskId,v=s.extra;return new Promise(function(D,A){Promise.all([tu(c,d),w.iconName?tu(w.iconName,w.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(O){var L=go(O,2),F=L[0],I=L[1];D([r,Du({icons:{main:F,mask:I},prefix:d,iconName:c,transform:f,symbol:y,maskId:j,extra:v,watchable:!0})])}).catch(A)})},n.generateAbstractIcon=function(r){var s=r.children,c=r.attributes,d=r.main,f=r.transform,y=r.styles,w=jo(y);w.length>0&&(c.style=w);var j;return vu(f)&&(j=Pt("generateAbstractTransformGrouping",{main:d,transform:f,containerWidth:d.width,iconWidth:d.width})),s.push(j||d.icon),{children:s,attributes:c}}}},Ik={mixout:function(){return{layer:function(r){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},c=s.classes,d=c===void 0?[]:c;return bo({type:"layer"},function(){qt("beforeDOMElementCreation",{assembler:r,params:s});var f=[];return r(function(y){Array.isArray(y)?y.map(function(w){f=f.concat(w.abstract)}):f=f.concat(y.abstract)}),[{tag:"span",attributes:{class:["".concat(V.cssPrefix,"-layers")].concat(xi(d)).join(" ")},children:f}]})}}}},Jk={mixout:function(){return{counter:function(r){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};s.title;var c=s.classes,d=c===void 0?[]:c,f=s.attributes,y=f===void 0?{}:f,w=s.styles,j=w===void 0?{}:w;return bo({type:"counter",content:r},function(){return qt("beforeDOMElementCreation",{content:r,params:s}),gk({content:r.toString(),extra:{attributes:y,styles:j,classes:["".concat(V.cssPrefix,"-layers-counter")].concat(xi(d))}})})}}}},Wk={mixout:function(){return{text:function(r){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},c=s.transform,d=c===void 0?Ii:c,f=s.classes,y=f===void 0?[]:f,w=s.attributes,j=w===void 0?{}:w,v=s.styles,D=v===void 0?{}:v;return bo({type:"text",content:r},function(){return qt("beforeDOMElementCreation",{content:r,params:s}),nf({content:r,transform:B(B({},Ii),d),extra:{attributes:j,styles:D,classes:["".concat(V.cssPrefix,"-layers-text")].concat(xi(y))}})})}}},provides:function(n){n.generateLayersText=function(r,s){var c=s.transform,d=s.extra,f=null,y=null;if(ey){var w=parseInt(getComputedStyle(r).fontSize,10),j=r.getBoundingClientRect();f=j.width/w,y=j.height/w}return Promise.resolve([r,nf({content:r.innerHTML,width:f,height:y,transform:c,extra:d,watchable:!0})])}}},Yy=new RegExp('"',"ug"),cf=[1105920,1112319],df=B(B(B(B({},{FontAwesome:{normal:"fas",400:"fas"}}),Cg),Tj),Ng),ru=Object.keys(df).reduce(function(a,n){return a[n.toLowerCase()]=df[n],a},{}),Lk=Object.keys(ru).reduce(function(a,n){var r=ru[n];return a[n]=r[900]||xi(Object.entries(r))[0][1],a},{});function Hk(a){var n=a.replace(Yy,"");return By(xi(n)[0]||"")}function Kk(a){var n=a.getPropertyValue("font-feature-settings").includes("ss01"),r=a.getPropertyValue("content"),s=r.replace(Yy,""),c=s.codePointAt(0),d=c>=cf[0]&&c<=cf[1],f=s.length===2?s[0]===s[1]:!1;return d||f||n}function Uk(a,n){var r=a.replace(/^['"]|['"]$/g,"").toLowerCase(),s=parseInt(n),c=isNaN(s)?"normal":s;return(ru[r]||{})[c]||Lk[r]}function mf(a,n){var r="".concat(Sj).concat(n.replace(":","-"));return new Promise(function(s,c){if(a.getAttribute(r)!==null)return s();var d=Jn(a.children),f=d.filter(function(oe){return oe.getAttribute(Zl)===n})[0],y=At.getComputedStyle(a,n),w=y.getPropertyValue("font-family"),j=w.match(Rj),v=y.getPropertyValue("font-weight"),D=y.getPropertyValue("content");if(f&&!j)return a.removeChild(f),s();if(j&&D!=="none"&&D!==""){var A=y.getPropertyValue("content"),O=Uk(w,v),L=Hk(A),F=j[0].startsWith("FontAwesome"),I=Kk(y),J=Cu(O,L),X=J;if(F){var ne=tk(L);ne.iconName&&ne.prefix&&(J=ne.iconName,O=ne.prefix)}if(J&&!I&&(!f||f.getAttribute(hu)!==O||f.getAttribute(gu)!==X)){a.setAttribute(r,X),f&&a.removeChild(f);var ae=Nk(),U=ae.extra;U.attributes[Zl]=n,tu(J,O).then(function(oe){var ce=Du(B(B({},ae),{},{icons:{main:oe,mask:Ly()},prefix:O,iconName:X,extra:U,watchable:!0})),Pe=Ae.createElementNS("http://www.w3.org/2000/svg","svg");n==="::before"?a.insertBefore(Pe,a.firstChild):a.appendChild(Pe),Pe.outerHTML=ce.map(function(Ye){return Ma(Ye)}).join(`
`),a.removeAttribute(r),s()}).catch(c)}else s()}else s()})}function $k(a){return Promise.all([mf(a,"::before"),mf(a,"::after")])}function Zk(a){return a.parentNode!==document.head&&!~Gj.indexOf(a.tagName.toUpperCase())&&!a.getAttribute(Zl)&&(!a.parentNode||a.parentNode.tagName!=="svg")}var Vk=function(n){return!!n&&Dy.some(function(r){return n.includes(r)})},Yk=function(n){if(!n)return[];var r=new Set,s=n.split(/,(?![^()]*\))/).map(function(w){return w.trim()});s=s.flatMap(function(w){return w.includes("(")?w:w.split(",").map(function(j){return j.trim()})});var c=ao(s),d;try{for(c.s();!(d=c.n()).done;){var f=d.value;if(Vk(f)){var y=Dy.reduce(function(w,j){return w.replace(j,"")},f);y!==""&&y!=="*"&&r.add(y)}}}catch(w){c.e(w)}finally{c.f()}return r};function ff(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(at){var r;if(n)r=a;else if(V.searchPseudoElementsFullScan)r=a.querySelectorAll("*");else{var s=new Set,c=ao(document.styleSheets),d;try{for(c.s();!(d=c.n()).done;){var f=d.value;try{var y=ao(f.cssRules),w;try{for(y.s();!(w=y.n()).done;){var j=w.value,v=Yk(j.selectorText),D=ao(v),A;try{for(D.s();!(A=D.n()).done;){var O=A.value;s.add(O)}}catch(F){D.e(F)}finally{D.f()}}}catch(F){y.e(F)}finally{y.f()}}catch(F){V.searchPseudoElementsWarnings&&console.warn("Font Awesome: cannot parse stylesheet: ".concat(f.href," (").concat(F.message,`)
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`))}}}catch(F){c.e(F)}finally{c.f()}if(!s.size)return;var L=Array.from(s).join(", ");try{r=a.querySelectorAll(L)}catch{}}return new Promise(function(F,I){var J=Jn(r).filter(Zk).map($k),X=Au.begin("searchPseudoElements");Zy(),Promise.all(J).then(function(){X(),au(),F()}).catch(function(){X(),au(),I()})})}}var Qk={hooks:function(){return{mutationObserverCallbacks:function(r){return r.pseudoElementsCallback=ff,r}}},provides:function(n){n.pseudoElements2svg=function(r){var s=r.node,c=s===void 0?Ae:s;V.searchPseudoElements&&ff(c)}}},yf=!1,Xk={mixout:function(){return{dom:{unwatch:function(){Zy(),yf=!0}}}},hooks:function(){return{bootstrap:function(){sf(ql("mutationObserverCallbacks",{}))},noAuto:function(){Tk()},watch:function(r){var s=r.observeMutationsRoot;yf?au():sf(ql("mutationObserverCallbacks",{observeMutationsRoot:s}))}}}},zf=function(n){var r={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return n.toLowerCase().split(" ").reduce(function(s,c){var d=c.toLowerCase().split("-"),f=d[0],y=d.slice(1).join("-");if(f&&y==="h")return s.flipX=!0,s;if(f&&y==="v")return s.flipY=!0,s;if(y=parseFloat(y),isNaN(y))return s;switch(f){case"grow":s.size=s.size+y;break;case"shrink":s.size=s.size-y;break;case"left":s.x=s.x-y;break;case"right":s.x=s.x+y;break;case"up":s.y=s.y-y;break;case"down":s.y=s.y+y;break;case"rotate":s.rotate=s.rotate+y;break}return s},r)},qk={mixout:function(){return{parse:{transform:function(r){return zf(r)}}}},hooks:function(){return{parseNodeAttributes:function(r,s){var c=s.getAttribute("data-fa-transform");return c&&(r.transform=zf(c)),r}}},provides:function(n){n.generateAbstractTransformGrouping=function(r){var s=r.main,c=r.transform,d=r.containerWidth,f=r.iconWidth,y={transform:"translate(".concat(d/2," 256)")},w="translate(".concat(c.x*32,", ").concat(c.y*32,") "),j="scale(".concat(c.size/16*(c.flipX?-1:1),", ").concat(c.size/16*(c.flipY?-1:1),") "),v="rotate(".concat(c.rotate," 0 0)"),D={transform:"".concat(w," ").concat(j," ").concat(v)},A={transform:"translate(".concat(f/2*-1," -256)")},O={outer:y,inner:D,path:A};return{tag:"g",attributes:B({},O.outer),children:[{tag:"g",attributes:B({},O.inner),children:[{tag:s.icon.tag,children:s.icon.children,attributes:B(B({},s.icon.attributes),O.path)}]}]}}}},Fl={x:0,y:0,width:"100%",height:"100%"};function wf(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return a.attributes&&(a.attributes.fill||n)&&(a.attributes.fill="black"),a}function ev(a){return a.tag==="g"?a.children:[a]}var iv={hooks:function(){return{parseNodeAttributes:function(r,s){var c=s.getAttribute("data-fa-mask"),d=c?vo(c.split(" ").map(function(f){return f.trim()})):Ly();return d.prefix||(d.prefix=Et()),r.mask=d,r.maskId=s.getAttribute("data-fa-mask-id"),r}}},provides:function(n){n.generateAbstractMask=function(r){var s=r.children,c=r.attributes,d=r.main,f=r.mask,y=r.maskId,w=r.transform,j=d.width,v=d.icon,D=f.width,A=f.icon,O=Uj({transform:w,containerWidth:D,iconWidth:j}),L={tag:"rect",attributes:B(B({},Fl),{},{fill:"white"})},F=v.children?{children:v.children.map(wf)}:{},I={tag:"g",attributes:B({},O.inner),children:[wf(B({tag:v.tag,attributes:B(B({},v.attributes),O.path)},F))]},J={tag:"g",attributes:B({},O.outer),children:[I]},X="mask-".concat(y||Vm()),ne="clip-".concat(y||Vm()),ae={tag:"mask",attributes:B(B({},Fl),{},{id:X,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[L,J]},U={tag:"defs",children:[{tag:"clipPath",attributes:{id:ne},children:ev(A)},ae]};return s.push(U,{tag:"rect",attributes:B({fill:"currentColor","clip-path":"url(#".concat(ne,")"),mask:"url(#".concat(X,")")},Fl)}),{children:s,attributes:c}}}},tv={provides:function(n){var r=!1;At.matchMedia&&(r=At.matchMedia("(prefers-reduced-motion: reduce)").matches),n.missingIconAbstract=function(){var s=[],c={fill:"currentColor"},d={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};s.push({tag:"path",attributes:B(B({},c),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var f=B(B({},d),{},{attributeName:"opacity"}),y={tag:"circle",attributes:B(B({},c),{},{cx:"256",cy:"364",r:"28"}),children:[]};return r||y.children.push({tag:"animate",attributes:B(B({},d),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:B(B({},f),{},{values:"1;0;1;1;0;1;"})}),s.push(y),s.push({tag:"path",attributes:B(B({},c),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:r?[]:[{tag:"animate",attributes:B(B({},f),{},{values:"1;0;0;0;0;1;"})}]}),r||s.push({tag:"path",attributes:B(B({},c),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:B(B({},f),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:s}}}},nv={hooks:function(){return{parseNodeAttributes:function(r,s){var c=s.getAttribute("data-fa-symbol"),d=c===null?!1:c===""?!0:c;return r.symbol=d,r}}}},av=[Vj,Mk,Ik,Jk,Wk,Qk,Xk,qk,iv,tv,nv];dk(av,{mixoutsTo:zi});zi.noAuto;var Oa=zi.config;zi.library;zi.dom;var Qy=zi.parse;zi.findIconDefinition;zi.toHtml;var rv=zi.icon;zi.layer;zi.text;zi.counter;function ov(a){return a=a-0,a===a}function Xy(a){return ov(a)?a:(a=a.replace(/[_-]+(.)?/g,(n,r)=>r?r.toUpperCase():""),a.charAt(0).toLowerCase()+a.slice(1))}function sv(a){return a.charAt(0).toUpperCase()+a.slice(1)}var xn=new Map,lv=1e3;function uv(a){if(xn.has(a))return xn.get(a);const n={};let r=0;const s=a.length;for(;r<s;){const c=a.indexOf(";",r),d=c===-1?s:c,f=a.slice(r,d).trim();if(f){const y=f.indexOf(":");if(y>0){const w=f.slice(0,y).trim(),j=f.slice(y+1).trim();if(w&&j){const v=Xy(w);n[v.startsWith("webkit")?sv(v):v]=j}}}r=d+1}if(xn.size===lv){const c=xn.keys().next().value;c&&xn.delete(c)}return xn.set(a,n),n}function qy(a,n,r={}){if(typeof n=="string")return n;const s=(n.children||[]).map(v=>qy(a,v)),c=n.attributes||{},d={};for(const[v,D]of Object.entries(c))switch(!0){case v==="class":{d.className=D;break}case v==="style":{d.style=uv(String(D));break}case v.startsWith("aria-"):case v.startsWith("data-"):{d[v.toLowerCase()]=D;break}default:d[Xy(v)]=D}const{style:f,role:y,"aria-label":w,...j}=r;return f&&(d.style=d.style?{...d.style,...f}:f),y&&(d.role=y),w&&(d["aria-label"]=w,d["aria-hidden"]="false"),a(n.tag,{...j,...d},...s)}var cv=qy.bind(null,yi.createElement),pf=(a,n)=>{const r=P.useId();return a||(n?r:void 0)},dv=class{constructor(a="react-fontawesome"){this.enabled=!1;let n=!1;try{n=typeof process<"u"&&!1}catch{}this.scope=a,this.enabled=n}log(...a){this.enabled&&console.log(`[${this.scope}]`,...a)}warn(...a){this.enabled&&console.warn(`[${this.scope}]`,...a)}error(...a){this.enabled&&console.error(`[${this.scope}]`,...a)}},mv="searchPseudoElementsFullScan"in Oa?"7.0.0":"6.0.0",fv=Number.parseInt(mv)>=7,Ba="fa",Xi={beat:"fa-beat",fade:"fa-fade",beatFade:"fa-beat-fade",bounce:"fa-bounce",shake:"fa-shake",spin:"fa-spin",spinPulse:"fa-spin-pulse",spinReverse:"fa-spin-reverse",pulse:"fa-pulse"},yv={left:"fa-pull-left",right:"fa-pull-right"},zv={90:"fa-rotate-90",180:"fa-rotate-180",270:"fa-rotate-270"},wv={"2xs":"fa-2xs",xs:"fa-xs",sm:"fa-sm",lg:"fa-lg",xl:"fa-xl","2xl":"fa-2xl","1x":"fa-1x","2x":"fa-2x","3x":"fa-3x","4x":"fa-4x","5x":"fa-5x","6x":"fa-6x","7x":"fa-7x","8x":"fa-8x","9x":"fa-9x","10x":"fa-10x"},qi={border:"fa-border",fixedWidth:"fa-fw",flip:"fa-flip",flipHorizontal:"fa-flip-horizontal",flipVertical:"fa-flip-vertical",inverse:"fa-inverse",rotateBy:"fa-rotate-by",swapOpacity:"fa-swap-opacity",widthAuto:"fa-width-auto"};function pv(a){const n=Oa.cssPrefix||Oa.familyPrefix||Ba;return n===Ba?a:a.replace(new RegExp(String.raw`(?<=^|\s)${Ba}-`,"g"),`${n}-`)}function hv(a){const{beat:n,fade:r,beatFade:s,bounce:c,shake:d,spin:f,spinPulse:y,spinReverse:w,pulse:j,fixedWidth:v,inverse:D,border:A,flip:O,size:L,rotation:F,pull:I,swapOpacity:J,rotateBy:X,widthAuto:ne,className:ae}=a,U=[];return ae&&U.push(...ae.split(" ")),n&&U.push(Xi.beat),r&&U.push(Xi.fade),s&&U.push(Xi.beatFade),c&&U.push(Xi.bounce),d&&U.push(Xi.shake),f&&U.push(Xi.spin),w&&U.push(Xi.spinReverse),y&&U.push(Xi.spinPulse),j&&U.push(Xi.pulse),v&&U.push(qi.fixedWidth),D&&U.push(qi.inverse),A&&U.push(qi.border),O===!0&&U.push(qi.flip),(O==="horizontal"||O==="both")&&U.push(qi.flipHorizontal),(O==="vertical"||O==="both")&&U.push(qi.flipVertical),L!=null&&U.push(wv[L]),F!=null&&F!==0&&U.push(zv[F]),I!=null&&U.push(yv[I]),J&&U.push(qi.swapOpacity),fv?(X&&U.push(qi.rotateBy),ne&&U.push(qi.widthAuto),(Oa.cssPrefix||Oa.familyPrefix||Ba)===Ba?U:U.map(pv)):U}var gv=a=>typeof a=="object"&&"icon"in a&&!!a.icon;function hf(a){if(a)return gv(a)?a:Qy.icon(a)}function jv(a){return Object.keys(a)}var gf=new dv("FontAwesomeIcon"),ez={border:!1,className:"",mask:void 0,maskId:void 0,fixedWidth:!1,inverse:!1,flip:!1,icon:void 0,listItem:!1,pull:void 0,pulse:!1,rotation:void 0,rotateBy:!1,size:void 0,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:void 0,transform:void 0,swapOpacity:!1,widthAuto:!1},kv=new Set(Object.keys(ez)),et=yi.forwardRef((a,n)=>{const r={...ez,...a},{icon:s,mask:c,symbol:d,title:f,titleId:y,maskId:w,transform:j}=r,v=pf(w,!!c),D=pf(y,!!f),A=hf(s);if(!A)return gf.error("Icon lookup is undefined",s),null;const O=hv(r),L=typeof j=="string"?Qy.transform(j):j,F=hf(c),I=rv(A,{...O.length>0&&{classes:O},...L&&{transform:L},...F&&{mask:F},symbol:d,title:f,titleId:D,maskId:v});if(!I)return gf.error("Could not find icon",A),null;const{abstract:J}=I,X={ref:n};for(const ne of jv(r))kv.has(ne)||(X[ne]=r[ne]);return cv(J[0],X)});et.displayName="FontAwesomeIcon";var vv={prefix:"fas",iconName:"trash",icon:[448,512,[],"f1f8","M136.7 5.9L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-8.7-26.1C306.9-7.2 294.7-16 280.9-16L167.1-16c-13.8 0-26 8.8-30.4 21.9zM416 144L32 144 53.1 467.1C54.7 492.4 75.7 512 101 512L347 512c25.3 0 46.3-19.6 47.9-44.9L416 144z"]},bv={prefix:"fas",iconName:"guitar",icon:[512,512,[],"f7a6","M465 7c-9.4-9.4-24.6-9.4-33.9 0L383 55c-2.4 2.4-4.3 5.3-5.5 8.5l-15.4 41-77.5 77.6c-45.1-29.4-99.3-30.2-131 1.6-11 11-18 24.6-21.4 39.6-3.7 16.6-19.1 30.7-36.1 31.6-25.6 1.3-49.3 10.7-67.3 28.6-44.8 44.8-36.4 125.8 18.7 180.9S183.6 528 228.4 483.2c17.9-17.9 27.4-41.7 28.6-67.3 .9-17 15-32.3 31.6-36.1 15-3.4 28.6-10.5 39.6-21.4 31.8-31.8 31-85.9 1.6-131l77.6-77.6 41-15.4c3.2-1.2 6.1-3.1 8.5-5.5l48-48c9.4-9.4 9.4-24.6 0-33.9L465 7zM208 256a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"]},Cv={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M55.1 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L147.2 256 9.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192.5 301.3 329.9 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.8 256 375.1 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192.5 210.7 55.1 73.4z"]},Dv=Cv,Av={prefix:"fas",iconName:"star",icon:[576,512,[11088,61446],"f005","M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z"]},Ev={prefix:"fas",iconName:"caret-up",icon:[320,512,[],"f0d8","M140.3 135.2c12.6-10.3 31.1-9.5 42.8 2.2l128 128c9.2 9.2 11.9 22.9 6.9 34.9S301.4 320 288.5 320l-256 0c-12.9 0-24.6-7.8-29.6-19.8S.7 274.5 9.9 265.4l128-128 2.4-2.2z"]},Pv={prefix:"fas",iconName:"caret-down",icon:[320,512,[],"f0d7","M140.3 376.8c12.6 10.2 31.1 9.5 42.8-2.2l128-128c9.2-9.2 11.9-22.9 6.9-34.9S301.4 192 288.5 192l-256 0c-12.9 0-24.6 7.8-29.6 19.8S.7 237.5 9.9 246.6l128 128 2.4 2.2z"]},iz={prefix:"fas",iconName:"list-ul",icon:[512,512,["list-dots"],"f0ca","M48 144a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L192 64zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-288 0zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-288 0zM48 464a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM96 256a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z"]};const Yt={PLAIN:"plain",STARRED:"starred",SELECTED:"selected"},yo=({mode:a})=>x.jsx(et,{icon:Av,className:Ke("sb-star",`sb-star-mode-${a}`)}),Tv=P.memo(({song:a,chooseSong:n,onlyStarred:r})=>{const s=()=>n(a.number),c=r?a.selected?Yt.SELECTED:Yt.STARRED:a.starred?Yt.STARRED:Yt.PLAIN,d=r?a.toggleSelected:a.toggleStarred;return x.jsxs("span",{className:Ke("sb-menu-songtitle",{"sb-starred-song":a.starred}),children:[x.jsxs("span",{onClick:d,children:[x.jsx(yo,{mode:c})," ",x.jsxs("span",{className:Ke({"sb-chosen-song":a.chosen}),children:[a.number,". "]})]}),x.jsx("a",{href:"#",onClick:s,className:Ke("text-reset",{"sb-chosen-song":a.chosen}),children:a.title})]})}),Sv=({onlyStarred:a,toggleOnlyStarred:n,starredCount:r,selectedSong:s,searchText:c,setSearchText:d,onClose:f})=>{const y=w=>{d(w.target.value)};return x.jsxs(x.Fragment,{children:[r?x.jsx("div",{className:"me-2",children:x.jsx(Bn,{variant:"info",onClick:n,children:a?x.jsx(et,{icon:iz,role:"button",size:"lg"}):x.jsx(x.Fragment,{children:x.jsxs("span",{className:"sb-no-wrap",children:[x.jsx(yo,{mode:Yt.STARRED})," ",r]})})})}):null,a?s?x.jsxs(x.Fragment,{children:[x.jsx(Bn,{className:"ms-2 me-1",variant:"success",disabled:!s.moveUp,onClick:s.moveUp,children:x.jsx(et,{icon:Ev,role:"button",size:"lg"})}),x.jsx(Bn,{className:"me-3",variant:"success",disabled:!s.moveDown,onClick:s.moveDown,children:x.jsx(et,{icon:Pv,role:"button",size:"lg"})}),x.jsx(Bn,{className:"me-1",variant:"danger",onClick:s.toggleStarred,children:x.jsx(et,{icon:vv,role:"button",size:"lg"})})]}):x.jsx("div",{className:"ms-2",children:x.jsxs("span",{className:"fw-bold sb-no-wrap",children:["Wybrane ",x.jsx(yo,{mode:Yt.STARRED})," ",r]})}):x.jsx("div",{className:"me-2 flex-grow-1",children:x.jsx("input",{type:"search",className:"form-control",placeholder:"Szukaj",autoCapitalize:"none",autoCorrect:"off",value:c,onChange:y})}),x.jsx("div",{className:"ms-auto",children:x.jsx(Bn,{variant:"light",onClick:f,children:x.jsx(et,{icon:Dv,role:"button",size:"lg",onClick:f})})})]})},xv=({songs:a,chooseSong:n,starredCount:r,onlyStarred:s,toggleOnlyStarred:c,show:d,onClose:f})=>{const[y,w]=P.useState(""),j=P.useRef(null);P.useEffect(()=>{(!d||s)&&w(""),O()},[d,s]);const D=(()=>{const J=y.trim();if(!J)return;const X=parseInt(J,10);return Number.isNaN(X)?Nf(J):X})();P.useEffect(()=>{D||O()},[D]);const A=J=>D?typeof D=="number"?J.number===D:J.latinTitle.includes(D):!0,O=()=>{j.current&&j.current.scrollIntoView()},L=a.findIndex(J=>J.chosen),F=a.find(J=>J.selected),I=L<3?0:L-3;return x.jsxs(eo,{show:d,onHide:f,scrollable:!0,animation:!1,children:[x.jsx(eo.Header,{className:"py-2 px-2",children:x.jsx(Sv,{onlyStarred:s,toggleOnlyStarred:c,starredCount:r,selectedSong:F,searchText:y,setSearchText:w,onClose:f})}),x.jsx(eo.Body,{children:a.filter(J=>A(J)).map((J,X)=>x.jsxs(P.Fragment,{children:[x.jsx(Tv,{song:J,chooseSong:n,onlyStarred:s}),x.jsx("br",{ref:X===I?j:null})]},J.number))}),x.jsx(eo.Footer,{className:"py-0",children:x.jsxs("p",{className:"text-secondary small",children:["Śpiewnik - Tchnienie Boga v","0.4.0"]})})]})},Gv=({onlyStarred:a,chordsShown:n,onClickMenu:r,onClickGuitar:s})=>x.jsxs("div",{className:"sb-menu-buttons-container",children:[x.jsx("div",{className:Ke("btn","sb-menu-button","shadow","rounded-circle",n?"sb-menu-button-red":"sb-menu-button-gray","d-flex","justify-content-center","align-items-center","pt-2"),tabIndex:0,role:"button",onClick:s,children:x.jsx("div",{className:"sb-menu-button-icon my-auto",children:x.jsx(et,{icon:bv,size:"lg"})})}),x.jsx("div",{className:"btn sb-menu-button shadow rounded-circle sb-menu-button-cyan d-flex justify-content-center align-items-center pt-2",tabIndex:1,role:"button",onClick:r,children:x.jsx("div",{className:"sb-menu-button-icon my-auto",children:a?x.jsx(yo,{mode:Yt.STARRED}):x.jsx(et,{icon:iz,size:"lg"})})})]}),Nv=a=>{const n=localStorage.getItem(a);return typeof n=="string"?JSON.parse(n):void 0},Bv=(a,n)=>{n!==void 0&&localStorage.setItem(a,JSON.stringify(n))},Zt=(a,n)=>{const[r,s]=P.useState(()=>{const c=Nv(a);return c||n});return P.useEffect(()=>{Bv(a,r)},[a,r]),[r,s]};function Rv(a,n,r){return Math.max(n,Math.min(a,r))}const Ee={toVector(a,n){return a===void 0&&(a=n),Array.isArray(a)?a:[a,a]},add(a,n){return[a[0]+n[0],a[1]+n[1]]},sub(a,n){return[a[0]-n[0],a[1]-n[1]]},addTo(a,n){a[0]+=n[0],a[1]+=n[1]},subTo(a,n){a[0]-=n[0],a[1]-=n[1]}};function jf(a,n,r){return n===0||Math.abs(n)===1/0?Math.pow(a,r*5):a*n*r/(n+r*a)}function kf(a,n,r,s=.15){return s===0?Rv(a,n,r):a<n?-jf(n-a,r-n,s)+n:a>r?+jf(a-r,r-n,s)+r:a}function Ov(a,[n,r],[s,c]){const[[d,f],[y,w]]=a;return[kf(n,d,f,s),kf(r,y,w,c)]}function Fv(a,n){if(typeof a!="object"||a===null)return a;var r=a[Symbol.toPrimitive];if(r!==void 0){var s=r.call(a,n);if(typeof s!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(a)}function _v(a){var n=Fv(a,"string");return typeof n=="symbol"?n:String(n)}function Me(a,n,r){return n=_v(n),n in a?Object.defineProperty(a,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):a[n]=r,a}function vf(a,n){var r=Object.keys(a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(a);n&&(s=s.filter(function(c){return Object.getOwnPropertyDescriptor(a,c).enumerable})),r.push.apply(r,s)}return r}function Ge(a){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?vf(Object(r),!0).forEach(function(s){Me(a,s,r[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(r)):vf(Object(r)).forEach(function(s){Object.defineProperty(a,s,Object.getOwnPropertyDescriptor(r,s))})}return a}const tz={pointer:{start:"down",change:"move",end:"up"},mouse:{start:"down",change:"move",end:"up"},touch:{start:"start",change:"move",end:"end"},gesture:{start:"start",change:"change",end:"end"}};function bf(a){return a?a[0].toUpperCase()+a.slice(1):""}const Mv=["enter","leave"];function Iv(a=!1,n){return a&&!Mv.includes(n)}function Jv(a,n="",r=!1){const s=tz[a],c=s&&s[n]||n;return"on"+bf(a)+bf(c)+(Iv(r,c)?"Capture":"")}const Wv=["gotpointercapture","lostpointercapture"];function Lv(a){let n=a.substring(2).toLowerCase();const r=!!~n.indexOf("passive");r&&(n=n.replace("passive",""));const s=Wv.includes(n)?"capturecapture":"capture",c=!!~n.indexOf(s);return c&&(n=n.replace("capture","")),{device:n,capture:c,passive:r}}function Hv(a,n=""){const r=tz[a],s=r&&r[n]||n;return a+s}function Co(a){return"touches"in a}function nz(a){return Co(a)?"touch":"pointerType"in a?a.pointerType:"mouse"}function Kv(a){return Array.from(a.touches).filter(n=>{var r,s;return n.target===a.currentTarget||((r=a.currentTarget)===null||r===void 0||(s=r.contains)===null||s===void 0?void 0:s.call(r,n.target))})}function Uv(a){return a.type==="touchend"||a.type==="touchcancel"?a.changedTouches:a.targetTouches}function az(a){return Co(a)?Uv(a)[0]:a}function ou(a,n){try{const r=n.clientX-a.clientX,s=n.clientY-a.clientY,c=(n.clientX+a.clientX)/2,d=(n.clientY+a.clientY)/2,f=Math.hypot(r,s);return{angle:-(Math.atan2(r,s)*180)/Math.PI,distance:f,origin:[c,d]}}catch{}return null}function $v(a){return Kv(a).map(n=>n.identifier)}function Cf(a,n){const[r,s]=Array.from(a.touches).filter(c=>n.includes(c.identifier));return ou(r,s)}function _l(a){const n=az(a);return Co(a)?n.identifier:n.pointerId}function Mn(a){const n=az(a);return[n.clientX,n.clientY]}const Df=40,Af=800;function rz(a){let{deltaX:n,deltaY:r,deltaMode:s}=a;return s===1?(n*=Df,r*=Df):s===2&&(n*=Af,r*=Af),[n,r]}function Zv(a){var n,r;const{scrollX:s,scrollY:c,scrollLeft:d,scrollTop:f}=a.currentTarget;return[(n=s??d)!==null&&n!==void 0?n:0,(r=c??f)!==null&&r!==void 0?r:0]}function Vv(a){const n={};if("buttons"in a&&(n.buttons=a.buttons),"shiftKey"in a){const{shiftKey:r,altKey:s,metaKey:c,ctrlKey:d}=a;Object.assign(n,{shiftKey:r,altKey:s,metaKey:c,ctrlKey:d})}return n}function zo(a,...n){return typeof a=="function"?a(...n):a}function Yv(){}function Qv(...a){return a.length===0?Yv:a.length===1?a[0]:function(){let n;for(const r of a)n=r.apply(this,arguments)||n;return n}}function Ef(a,n){return Object.assign({},n,a||{})}const Xv=32;class oz{constructor(n,r,s){this.ctrl=n,this.args=r,this.key=s,this.state||(this.state={},this.computeValues([0,0]),this.computeInitial(),this.init&&this.init(),this.reset())}get state(){return this.ctrl.state[this.key]}set state(n){this.ctrl.state[this.key]=n}get shared(){return this.ctrl.state.shared}get eventStore(){return this.ctrl.gestureEventStores[this.key]}get timeoutStore(){return this.ctrl.gestureTimeoutStores[this.key]}get config(){return this.ctrl.config[this.key]}get sharedConfig(){return this.ctrl.config.shared}get handler(){return this.ctrl.handlers[this.key]}reset(){const{state:n,shared:r,ingKey:s,args:c}=this;r[s]=n._active=n.active=n._blocked=n._force=!1,n._step=[!1,!1],n.intentional=!1,n._movement=[0,0],n._distance=[0,0],n._direction=[0,0],n._delta=[0,0],n._bounds=[[-1/0,1/0],[-1/0,1/0]],n.args=c,n.axis=void 0,n.memo=void 0,n.elapsedTime=n.timeDelta=0,n.direction=[0,0],n.distance=[0,0],n.overflow=[0,0],n._movementBound=[!1,!1],n.velocity=[0,0],n.movement=[0,0],n.delta=[0,0],n.timeStamp=0}start(n){const r=this.state,s=this.config;r._active||(this.reset(),this.computeInitial(),r._active=!0,r.target=n.target,r.currentTarget=n.currentTarget,r.lastOffset=s.from?zo(s.from,r):r.offset,r.offset=r.lastOffset,r.startTime=r.timeStamp=n.timeStamp)}computeValues(n){const r=this.state;r._values=n,r.values=this.config.transform(n)}computeInitial(){const n=this.state;n._initial=n._values,n.initial=n.values}compute(n){const{state:r,config:s,shared:c}=this;r.args=this.args;let d=0;if(n&&(r.event=n,s.preventDefault&&n.cancelable&&r.event.preventDefault(),r.type=n.type,c.touches=this.ctrl.pointerIds.size||this.ctrl.touchIds.size,c.locked=!!document.pointerLockElement,Object.assign(c,Vv(n)),c.down=c.pressed=c.buttons%2===1||c.touches>0,d=n.timeStamp-r.timeStamp,r.timeStamp=n.timeStamp,r.elapsedTime=r.timeStamp-r.startTime),r._active){const oe=r._delta.map(Math.abs);Ee.addTo(r._distance,oe)}this.axisIntent&&this.axisIntent(n);const[f,y]=r._movement,[w,j]=s.threshold,{_step:v,values:D}=r;if(s.hasCustomTransform?(v[0]===!1&&(v[0]=Math.abs(f)>=w&&D[0]),v[1]===!1&&(v[1]=Math.abs(y)>=j&&D[1])):(v[0]===!1&&(v[0]=Math.abs(f)>=w&&Math.sign(f)*w),v[1]===!1&&(v[1]=Math.abs(y)>=j&&Math.sign(y)*j)),r.intentional=v[0]!==!1||v[1]!==!1,!r.intentional)return;const A=[0,0];if(s.hasCustomTransform){const[oe,ce]=D;A[0]=v[0]!==!1?oe-v[0]:0,A[1]=v[1]!==!1?ce-v[1]:0}else A[0]=v[0]!==!1?f-v[0]:0,A[1]=v[1]!==!1?y-v[1]:0;this.restrictToAxis&&!r._blocked&&this.restrictToAxis(A);const O=r.offset,L=r._active&&!r._blocked||r.active;L&&(r.first=r._active&&!r.active,r.last=!r._active&&r.active,r.active=c[this.ingKey]=r._active,n&&(r.first&&("bounds"in s&&(r._bounds=zo(s.bounds,r)),this.setup&&this.setup()),r.movement=A,this.computeOffset()));const[F,I]=r.offset,[[J,X],[ne,ae]]=r._bounds;r.overflow=[F<J?-1:F>X?1:0,I<ne?-1:I>ae?1:0],r._movementBound[0]=r.overflow[0]?r._movementBound[0]===!1?r._movement[0]:r._movementBound[0]:!1,r._movementBound[1]=r.overflow[1]?r._movementBound[1]===!1?r._movement[1]:r._movementBound[1]:!1;const U=r._active?s.rubberband||[0,0]:[0,0];if(r.offset=Ov(r._bounds,r.offset,U),r.delta=Ee.sub(r.offset,O),this.computeMovement(),L&&(!r.last||d>Xv)){r.delta=Ee.sub(r.offset,O);const oe=r.delta.map(Math.abs);Ee.addTo(r.distance,oe),r.direction=r.delta.map(Math.sign),r._direction=r._delta.map(Math.sign),!r.first&&d>0&&(r.velocity=[oe[0]/d,oe[1]/d],r.timeDelta=d)}}emit(){const n=this.state,r=this.shared,s=this.config;if(n._active||this.clean(),(n._blocked||!n.intentional)&&!n._force&&!s.triggerAllEvents)return;const c=this.handler(Ge(Ge(Ge({},r),n),{},{[this.aliasKey]:n.values}));c!==void 0&&(n.memo=c)}clean(){this.eventStore.clean(),this.timeoutStore.clean()}}function qv([a,n],r){const s=Math.abs(a),c=Math.abs(n);if(s>c&&s>r)return"x";if(c>s&&c>r)return"y"}class Ia extends oz{constructor(...n){super(...n),Me(this,"aliasKey","xy")}reset(){super.reset(),this.state.axis=void 0}init(){this.state.offset=[0,0],this.state.lastOffset=[0,0]}computeOffset(){this.state.offset=Ee.add(this.state.lastOffset,this.state.movement)}computeMovement(){this.state.movement=Ee.sub(this.state.offset,this.state.lastOffset)}axisIntent(n){const r=this.state,s=this.config;if(!r.axis&&n){const c=typeof s.axisThreshold=="object"?s.axisThreshold[nz(n)]:s.axisThreshold;r.axis=qv(r._movement,c)}r._blocked=(s.lockDirection||!!s.axis)&&!r.axis||!!s.axis&&s.axis!==r.axis}restrictToAxis(n){if(this.config.axis||this.config.lockDirection)switch(this.state.axis){case"x":n[1]=0;break;case"y":n[0]=0;break}}}const eb=a=>a,Pf=.15,sz={enabled(a=!0){return a},eventOptions(a,n,r){return Ge(Ge({},r.shared.eventOptions),a)},preventDefault(a=!1){return a},triggerAllEvents(a=!1){return a},rubberband(a=0){switch(a){case!0:return[Pf,Pf];case!1:return[0,0];default:return Ee.toVector(a)}},from(a){if(typeof a=="function")return a;if(a!=null)return Ee.toVector(a)},transform(a,n,r){const s=a||r.shared.transform;return this.hasCustomTransform=!!s,s||eb},threshold(a){return Ee.toVector(a,0)}},ib=0,tn=Ge(Ge({},sz),{},{axis(a,n,{axis:r}){if(this.lockDirection=r==="lock",!this.lockDirection)return r},axisThreshold(a=ib){return a},bounds(a={}){if(typeof a=="function")return d=>tn.bounds(a(d));if("current"in a)return()=>a.current;if(typeof HTMLElement=="function"&&a instanceof HTMLElement)return a;const{left:n=-1/0,right:r=1/0,top:s=-1/0,bottom:c=1/0}=a;return[[n,r],[s,c]]}}),Tf={ArrowRight:(a,n=1)=>[a*n,0],ArrowLeft:(a,n=1)=>[-1*a*n,0],ArrowUp:(a,n=1)=>[0,-1*a*n],ArrowDown:(a,n=1)=>[0,a*n]};class tb extends Ia{constructor(...n){super(...n),Me(this,"ingKey","dragging")}reset(){super.reset();const n=this.state;n._pointerId=void 0,n._pointerActive=!1,n._keyboardActive=!1,n._preventScroll=!1,n._delayed=!1,n.swipe=[0,0],n.tap=!1,n.canceled=!1,n.cancel=this.cancel.bind(this)}setup(){const n=this.state;if(n._bounds instanceof HTMLElement){const r=n._bounds.getBoundingClientRect(),s=n.currentTarget.getBoundingClientRect(),c={left:r.left-s.left+n.offset[0],right:r.right-s.right+n.offset[0],top:r.top-s.top+n.offset[1],bottom:r.bottom-s.bottom+n.offset[1]};n._bounds=tn.bounds(c)}}cancel(){const n=this.state;n.canceled||(n.canceled=!0,n._active=!1,setTimeout(()=>{this.compute(),this.emit()},0))}setActive(){this.state._active=this.state._pointerActive||this.state._keyboardActive}clean(){this.pointerClean(),this.state._pointerActive=!1,this.state._keyboardActive=!1,super.clean()}pointerDown(n){const r=this.config,s=this.state;if(n.buttons!=null&&(Array.isArray(r.pointerButtons)?!r.pointerButtons.includes(n.buttons):r.pointerButtons!==-1&&r.pointerButtons!==n.buttons))return;const c=this.ctrl.setEventIds(n);r.pointerCapture&&n.target.setPointerCapture(n.pointerId),!(c&&c.size>1&&s._pointerActive)&&(this.start(n),this.setupPointer(n),s._pointerId=_l(n),s._pointerActive=!0,this.computeValues(Mn(n)),this.computeInitial(),r.preventScrollAxis&&nz(n)!=="mouse"?(s._active=!1,this.setupScrollPrevention(n)):r.delay>0?(this.setupDelayTrigger(n),r.triggerAllEvents&&(this.compute(n),this.emit())):this.startPointerDrag(n))}startPointerDrag(n){const r=this.state;r._active=!0,r._preventScroll=!0,r._delayed=!1,this.compute(n),this.emit()}pointerMove(n){const r=this.state,s=this.config;if(!r._pointerActive)return;const c=_l(n);if(r._pointerId!==void 0&&c!==r._pointerId)return;const d=Mn(n);if(document.pointerLockElement===n.target?r._delta=[n.movementX,n.movementY]:(r._delta=Ee.sub(d,r._values),this.computeValues(d)),Ee.addTo(r._movement,r._delta),this.compute(n),r._delayed&&r.intentional){this.timeoutStore.remove("dragDelay"),r.active=!1,this.startPointerDrag(n);return}if(s.preventScrollAxis&&!r._preventScroll)if(r.axis)if(r.axis===s.preventScrollAxis||s.preventScrollAxis==="xy"){r._active=!1,this.clean();return}else{this.timeoutStore.remove("startPointerDrag"),this.startPointerDrag(n);return}else return;this.emit()}pointerUp(n){this.ctrl.setEventIds(n);try{this.config.pointerCapture&&n.target.hasPointerCapture(n.pointerId)&&n.target.releasePointerCapture(n.pointerId)}catch{}const r=this.state,s=this.config;if(!r._active||!r._pointerActive)return;const c=_l(n);if(r._pointerId!==void 0&&c!==r._pointerId)return;this.state._pointerActive=!1,this.setActive(),this.compute(n);const[d,f]=r._distance;if(r.tap=d<=s.tapsThreshold&&f<=s.tapsThreshold,r.tap&&s.filterTaps)r._force=!0;else{const[y,w]=r._delta,[j,v]=r._movement,[D,A]=s.swipe.velocity,[O,L]=s.swipe.distance,F=s.swipe.duration;if(r.elapsedTime<F){const I=Math.abs(y/r.timeDelta),J=Math.abs(w/r.timeDelta);I>D&&Math.abs(j)>O&&(r.swipe[0]=Math.sign(y)),J>A&&Math.abs(v)>L&&(r.swipe[1]=Math.sign(w))}}this.emit()}pointerClick(n){!this.state.tap&&n.detail>0&&(n.preventDefault(),n.stopPropagation())}setupPointer(n){const r=this.config,s=r.device;r.pointerLock&&n.currentTarget.requestPointerLock(),r.pointerCapture||(this.eventStore.add(this.sharedConfig.window,s,"change",this.pointerMove.bind(this)),this.eventStore.add(this.sharedConfig.window,s,"end",this.pointerUp.bind(this)),this.eventStore.add(this.sharedConfig.window,s,"cancel",this.pointerUp.bind(this)))}pointerClean(){this.config.pointerLock&&document.pointerLockElement===this.state.currentTarget&&document.exitPointerLock()}preventScroll(n){this.state._preventScroll&&n.cancelable&&n.preventDefault()}setupScrollPrevention(n){this.state._preventScroll=!1,nb(n);const r=this.eventStore.add(this.sharedConfig.window,"touch","change",this.preventScroll.bind(this),{passive:!1});this.eventStore.add(this.sharedConfig.window,"touch","end",r),this.eventStore.add(this.sharedConfig.window,"touch","cancel",r),this.timeoutStore.add("startPointerDrag",this.startPointerDrag.bind(this),this.config.preventScrollDelay,n)}setupDelayTrigger(n){this.state._delayed=!0,this.timeoutStore.add("dragDelay",()=>{this.state._step=[0,0],this.startPointerDrag(n)},this.config.delay)}keyDown(n){const r=Tf[n.key];if(r){const s=this.state,c=n.shiftKey?10:n.altKey?.1:1;this.start(n),s._delta=r(this.config.keyboardDisplacement,c),s._keyboardActive=!0,Ee.addTo(s._movement,s._delta),this.compute(n),this.emit()}}keyUp(n){n.key in Tf&&(this.state._keyboardActive=!1,this.setActive(),this.compute(n),this.emit())}bind(n){const r=this.config.device;n(r,"start",this.pointerDown.bind(this)),this.config.pointerCapture&&(n(r,"change",this.pointerMove.bind(this)),n(r,"end",this.pointerUp.bind(this)),n(r,"cancel",this.pointerUp.bind(this)),n("lostPointerCapture","",this.pointerUp.bind(this))),this.config.keys&&(n("key","down",this.keyDown.bind(this)),n("key","up",this.keyUp.bind(this))),this.config.filterTaps&&n("click","",this.pointerClick.bind(this),{capture:!0,passive:!1})}}function nb(a){"persist"in a&&typeof a.persist=="function"&&a.persist()}const Ja=typeof window<"u"&&window.document&&window.document.createElement;function lz(){return Ja&&"ontouchstart"in window}function ab(){return lz()||Ja&&window.navigator.maxTouchPoints>1}function rb(){return Ja&&"onpointerdown"in window}function ob(){return Ja&&"exitPointerLock"in window.document}function sb(){try{return"constructor"in GestureEvent}catch{return!1}}const vi={isBrowser:Ja,gesture:sb(),touch:lz(),touchscreen:ab(),pointer:rb(),pointerLock:ob()},lb=250,ub=180,cb=.5,db=50,mb=250,fb=10,Sf={mouse:0,touch:0,pen:8},yb=Ge(Ge({},tn),{},{device(a,n,{pointer:{touch:r=!1,lock:s=!1,mouse:c=!1}={}}){return this.pointerLock=s&&vi.pointerLock,vi.touch&&r?"touch":this.pointerLock?"mouse":vi.pointer&&!c?"pointer":vi.touch?"touch":"mouse"},preventScrollAxis(a,n,{preventScroll:r}){if(this.preventScrollDelay=typeof r=="number"?r:r||r===void 0&&a?lb:void 0,!(!vi.touchscreen||r===!1))return a||(r!==void 0?"y":void 0)},pointerCapture(a,n,{pointer:{capture:r=!0,buttons:s=1,keys:c=!0}={}}){return this.pointerButtons=s,this.keys=c,!this.pointerLock&&this.device==="pointer"&&r},threshold(a,n,{filterTaps:r=!1,tapsThreshold:s=3,axis:c=void 0}){const d=Ee.toVector(a,r?s:c?1:0);return this.filterTaps=r,this.tapsThreshold=s,d},swipe({velocity:a=cb,distance:n=db,duration:r=mb}={}){return{velocity:this.transform(Ee.toVector(a)),distance:this.transform(Ee.toVector(n)),duration:r}},delay(a=0){switch(a){case!0:return ub;case!1:return 0;default:return a}},axisThreshold(a){return a?Ge(Ge({},Sf),a):Sf},keyboardDisplacement(a=fb){return a}});function uz(a){const[n,r]=a.overflow,[s,c]=a._delta,[d,f]=a._direction;(n<0&&s>0&&d<0||n>0&&s<0&&d>0)&&(a._movement[0]=a._movementBound[0]),(r<0&&c>0&&f<0||r>0&&c<0&&f>0)&&(a._movement[1]=a._movementBound[1])}const zb=30,wb=100;class pb extends oz{constructor(...n){super(...n),Me(this,"ingKey","pinching"),Me(this,"aliasKey","da")}init(){this.state.offset=[1,0],this.state.lastOffset=[1,0],this.state._pointerEvents=new Map}reset(){super.reset();const n=this.state;n._touchIds=[],n.canceled=!1,n.cancel=this.cancel.bind(this),n.turns=0}computeOffset(){const{type:n,movement:r,lastOffset:s}=this.state;n==="wheel"?this.state.offset=Ee.add(r,s):this.state.offset=[(1+r[0])*s[0],r[1]+s[1]]}computeMovement(){const{offset:n,lastOffset:r}=this.state;this.state.movement=[n[0]/r[0],n[1]-r[1]]}axisIntent(){const n=this.state,[r,s]=n._movement;if(!n.axis){const c=Math.abs(r)*zb-Math.abs(s);c<0?n.axis="angle":c>0&&(n.axis="scale")}}restrictToAxis(n){this.config.lockDirection&&(this.state.axis==="scale"?n[1]=0:this.state.axis==="angle"&&(n[0]=0))}cancel(){const n=this.state;n.canceled||setTimeout(()=>{n.canceled=!0,n._active=!1,this.compute(),this.emit()},0)}touchStart(n){this.ctrl.setEventIds(n);const r=this.state,s=this.ctrl.touchIds;if(r._active&&r._touchIds.every(d=>s.has(d))||s.size<2)return;this.start(n),r._touchIds=Array.from(s).slice(0,2);const c=Cf(n,r._touchIds);c&&this.pinchStart(n,c)}pointerStart(n){if(n.buttons!=null&&n.buttons%2!==1)return;this.ctrl.setEventIds(n),n.target.setPointerCapture(n.pointerId);const r=this.state,s=r._pointerEvents,c=this.ctrl.pointerIds;if(r._active&&Array.from(s.keys()).every(f=>c.has(f))||(s.size<2&&s.set(n.pointerId,n),r._pointerEvents.size<2))return;this.start(n);const d=ou(...Array.from(s.values()));d&&this.pinchStart(n,d)}pinchStart(n,r){const s=this.state;s.origin=r.origin,this.computeValues([r.distance,r.angle]),this.computeInitial(),this.compute(n),this.emit()}touchMove(n){if(!this.state._active)return;const r=Cf(n,this.state._touchIds);r&&this.pinchMove(n,r)}pointerMove(n){const r=this.state._pointerEvents;if(r.has(n.pointerId)&&r.set(n.pointerId,n),!this.state._active)return;const s=ou(...Array.from(r.values()));s&&this.pinchMove(n,s)}pinchMove(n,r){const s=this.state,c=s._values[1],d=r.angle-c;let f=0;Math.abs(d)>270&&(f+=Math.sign(d)),this.computeValues([r.distance,r.angle-360*f]),s.origin=r.origin,s.turns=f,s._movement=[s._values[0]/s._initial[0]-1,s._values[1]-s._initial[1]],this.compute(n),this.emit()}touchEnd(n){this.ctrl.setEventIds(n),this.state._active&&this.state._touchIds.some(r=>!this.ctrl.touchIds.has(r))&&(this.state._active=!1,this.compute(n),this.emit())}pointerEnd(n){const r=this.state;this.ctrl.setEventIds(n);try{n.target.releasePointerCapture(n.pointerId)}catch{}r._pointerEvents.has(n.pointerId)&&r._pointerEvents.delete(n.pointerId),r._active&&r._pointerEvents.size<2&&(r._active=!1,this.compute(n),this.emit())}gestureStart(n){n.cancelable&&n.preventDefault();const r=this.state;r._active||(this.start(n),this.computeValues([n.scale,n.rotation]),r.origin=[n.clientX,n.clientY],this.compute(n),this.emit())}gestureMove(n){if(n.cancelable&&n.preventDefault(),!this.state._active)return;const r=this.state;this.computeValues([n.scale,n.rotation]),r.origin=[n.clientX,n.clientY];const s=r._movement;r._movement=[n.scale-1,n.rotation],r._delta=Ee.sub(r._movement,s),this.compute(n),this.emit()}gestureEnd(n){this.state._active&&(this.state._active=!1,this.compute(n),this.emit())}wheel(n){const r=this.config.modifierKey;r&&(Array.isArray(r)?!r.find(s=>n[s]):!n[r])||(this.state._active?this.wheelChange(n):this.wheelStart(n),this.timeoutStore.add("wheelEnd",this.wheelEnd.bind(this)))}wheelStart(n){this.start(n),this.wheelChange(n)}wheelChange(n){"uv"in n||n.cancelable&&n.preventDefault();const s=this.state;s._delta=[-rz(n)[1]/wb*s.offset[0],0],Ee.addTo(s._movement,s._delta),uz(s),this.state.origin=[n.clientX,n.clientY],this.compute(n),this.emit()}wheelEnd(){this.state._active&&(this.state._active=!1,this.compute(),this.emit())}bind(n){const r=this.config.device;r&&(n(r,"start",this[r+"Start"].bind(this)),n(r,"change",this[r+"Move"].bind(this)),n(r,"end",this[r+"End"].bind(this)),n(r,"cancel",this[r+"End"].bind(this)),n("lostPointerCapture","",this[r+"End"].bind(this))),this.config.pinchOnWheel&&n("wheel","",this.wheel.bind(this),{passive:!1})}}const hb=Ge(Ge({},sz),{},{device(a,n,{shared:r,pointer:{touch:s=!1}={}}){if(r.target&&!vi.touch&&vi.gesture)return"gesture";if(vi.touch&&s)return"touch";if(vi.touchscreen){if(vi.pointer)return"pointer";if(vi.touch)return"touch"}},bounds(a,n,{scaleBounds:r={},angleBounds:s={}}){const c=f=>{const y=Ef(zo(r,f),{min:-1/0,max:1/0});return[y.min,y.max]},d=f=>{const y=Ef(zo(s,f),{min:-1/0,max:1/0});return[y.min,y.max]};return typeof r!="function"&&typeof s!="function"?[c(),d()]:f=>[c(f),d(f)]},threshold(a,n,r){return this.lockDirection=r.axis==="lock",Ee.toVector(a,this.lockDirection?[.1,3]:0)},modifierKey(a){return a===void 0?"ctrlKey":a},pinchOnWheel(a=!0){return a}});class gb extends Ia{constructor(...n){super(...n),Me(this,"ingKey","moving")}move(n){this.config.mouseOnly&&n.pointerType!=="mouse"||(this.state._active?this.moveChange(n):this.moveStart(n),this.timeoutStore.add("moveEnd",this.moveEnd.bind(this)))}moveStart(n){this.start(n),this.computeValues(Mn(n)),this.compute(n),this.computeInitial(),this.emit()}moveChange(n){if(!this.state._active)return;const r=Mn(n),s=this.state;s._delta=Ee.sub(r,s._values),Ee.addTo(s._movement,s._delta),this.computeValues(r),this.compute(n),this.emit()}moveEnd(n){this.state._active&&(this.state._active=!1,this.compute(n),this.emit())}bind(n){n("pointer","change",this.move.bind(this)),n("pointer","leave",this.moveEnd.bind(this))}}const jb=Ge(Ge({},tn),{},{mouseOnly:(a=!0)=>a});class kb extends Ia{constructor(...n){super(...n),Me(this,"ingKey","scrolling")}scroll(n){this.state._active||this.start(n),this.scrollChange(n),this.timeoutStore.add("scrollEnd",this.scrollEnd.bind(this))}scrollChange(n){n.cancelable&&n.preventDefault();const r=this.state,s=Zv(n);r._delta=Ee.sub(s,r._values),Ee.addTo(r._movement,r._delta),this.computeValues(s),this.compute(n),this.emit()}scrollEnd(){this.state._active&&(this.state._active=!1,this.compute(),this.emit())}bind(n){n("scroll","",this.scroll.bind(this))}}const vb=tn;class bb extends Ia{constructor(...n){super(...n),Me(this,"ingKey","wheeling")}wheel(n){this.state._active||this.start(n),this.wheelChange(n),this.timeoutStore.add("wheelEnd",this.wheelEnd.bind(this))}wheelChange(n){const r=this.state;r._delta=rz(n),Ee.addTo(r._movement,r._delta),uz(r),this.compute(n),this.emit()}wheelEnd(){this.state._active&&(this.state._active=!1,this.compute(),this.emit())}bind(n){n("wheel","",this.wheel.bind(this))}}const Cb=tn;class Db extends Ia{constructor(...n){super(...n),Me(this,"ingKey","hovering")}enter(n){this.config.mouseOnly&&n.pointerType!=="mouse"||(this.start(n),this.computeValues(Mn(n)),this.compute(n),this.emit())}leave(n){if(this.config.mouseOnly&&n.pointerType!=="mouse")return;const r=this.state;if(!r._active)return;r._active=!1;const s=Mn(n);r._movement=r._delta=Ee.sub(s,r._values),this.computeValues(s),this.compute(n),r.delta=r.movement,this.emit()}bind(n){n("pointer","enter",this.enter.bind(this)),n("pointer","leave",this.leave.bind(this))}}const Ab=Ge(Ge({},tn),{},{mouseOnly:(a=!0)=>a}),Pu=new Map,su=new Map;function Eb(a){Pu.set(a.key,a.engine),su.set(a.key,a.resolver)}const Pb={key:"drag",engine:tb,resolver:yb},Tb={key:"hover",engine:Db,resolver:Ab},Sb={key:"move",engine:gb,resolver:jb},xb={key:"pinch",engine:pb,resolver:hb},Gb={key:"scroll",engine:kb,resolver:vb},Nb={key:"wheel",engine:bb,resolver:Cb};function Bb(a,n){if(a==null)return{};var r={},s=Object.keys(a),c,d;for(d=0;d<s.length;d++)c=s[d],!(n.indexOf(c)>=0)&&(r[c]=a[c]);return r}function Rb(a,n){if(a==null)return{};var r=Bb(a,n),s,c;if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);for(c=0;c<d.length;c++)s=d[c],!(n.indexOf(s)>=0)&&Object.prototype.propertyIsEnumerable.call(a,s)&&(r[s]=a[s])}return r}const Ob={target(a){if(a)return()=>"current"in a?a.current:a},enabled(a=!0){return a},window(a=vi.isBrowser?window:void 0){return a},eventOptions({passive:a=!0,capture:n=!1}={}){return{passive:a,capture:n}},transform(a){return a}},Fb=["target","eventOptions","window","enabled","transform"];function so(a={},n){const r={};for(const[s,c]of Object.entries(n))switch(typeof c){case"function":r[s]=c.call(r,a[s],s,a);break;case"object":r[s]=so(a[s],c);break;case"boolean":c&&(r[s]=a[s]);break}return r}function _b(a,n,r={}){const s=a,{target:c,eventOptions:d,window:f,enabled:y,transform:w}=s,j=Rb(s,Fb);if(r.shared=so({target:c,eventOptions:d,window:f,enabled:y,transform:w},Ob),n){const v=su.get(n);r[n]=so(Ge({shared:r.shared},j),v)}else for(const v in j){const D=su.get(v);D&&(r[v]=so(Ge({shared:r.shared},j[v]),D))}return r}class cz{constructor(n,r){Me(this,"_listeners",new Set),this._ctrl=n,this._gestureKey=r}add(n,r,s,c,d){const f=this._listeners,y=Hv(r,s),w=this._gestureKey?this._ctrl.config[this._gestureKey].eventOptions:{},j=Ge(Ge({},w),d);n.addEventListener(y,c,j);const v=()=>{n.removeEventListener(y,c,j),f.delete(v)};return f.add(v),v}clean(){this._listeners.forEach(n=>n()),this._listeners.clear()}}class Mb{constructor(){Me(this,"_timeouts",new Map)}add(n,r,s=140,...c){this.remove(n),this._timeouts.set(n,window.setTimeout(r,s,...c))}remove(n){const r=this._timeouts.get(n);r&&window.clearTimeout(r)}clean(){this._timeouts.forEach(n=>{window.clearTimeout(n)}),this._timeouts.clear()}}class Ib{constructor(n){Me(this,"gestures",new Set),Me(this,"_targetEventStore",new cz(this)),Me(this,"gestureEventStores",{}),Me(this,"gestureTimeoutStores",{}),Me(this,"handlers",{}),Me(this,"config",{}),Me(this,"pointerIds",new Set),Me(this,"touchIds",new Set),Me(this,"state",{shared:{shiftKey:!1,metaKey:!1,ctrlKey:!1,altKey:!1}}),Jb(this,n)}setEventIds(n){if(Co(n))return this.touchIds=new Set($v(n)),this.touchIds;if("pointerId"in n)return n.type==="pointerup"||n.type==="pointercancel"?this.pointerIds.delete(n.pointerId):n.type==="pointerdown"&&this.pointerIds.add(n.pointerId),this.pointerIds}applyHandlers(n,r){this.handlers=n,this.nativeHandlers=r}applyConfig(n,r){this.config=_b(n,r,this.config)}clean(){this._targetEventStore.clean();for(const n of this.gestures)this.gestureEventStores[n].clean(),this.gestureTimeoutStores[n].clean()}effect(){return this.config.shared.target&&this.bind(),()=>this._targetEventStore.clean()}bind(...n){const r=this.config.shared,s={};let c;if(!(r.target&&(c=r.target(),!c))){if(r.enabled){for(const f of this.gestures){const y=this.config[f],w=xf(s,y.eventOptions,!!c);if(y.enabled){const j=Pu.get(f);new j(this,n,f).bind(w)}}const d=xf(s,r.eventOptions,!!c);for(const f in this.nativeHandlers)d(f,"",y=>this.nativeHandlers[f](Ge(Ge({},this.state.shared),{},{event:y,args:n})),void 0,!0)}for(const d in s)s[d]=Qv(...s[d]);if(!c)return s;for(const d in s){const{device:f,capture:y,passive:w}=Lv(d);this._targetEventStore.add(c,f,"",s[d],{capture:y,passive:w})}}}}function Gn(a,n){a.gestures.add(n),a.gestureEventStores[n]=new cz(a,n),a.gestureTimeoutStores[n]=new Mb}function Jb(a,n){n.drag&&Gn(a,"drag"),n.wheel&&Gn(a,"wheel"),n.scroll&&Gn(a,"scroll"),n.move&&Gn(a,"move"),n.pinch&&Gn(a,"pinch"),n.hover&&Gn(a,"hover")}const xf=(a,n,r)=>(s,c,d,f={},y=!1)=>{var w,j;const v=(w=f.capture)!==null&&w!==void 0?w:n.capture,D=(j=f.passive)!==null&&j!==void 0?j:n.passive;let A=y?s:Jv(s,c,v);r&&D&&(A+="Passive"),a[A]=a[A]||[],a[A].push(d)},Wb=/^on(Drag|Wheel|Scroll|Move|Pinch|Hover)/;function Lb(a){const n={},r={},s=new Set;for(let c in a)Wb.test(c)?(s.add(RegExp.lastMatch),r[c]=a[c]):n[c]=a[c];return[r,n,s]}function Nn(a,n,r,s,c,d){if(!a.has(r)||!Pu.has(s))return;const f=r+"Start",y=r+"End",w=j=>{let v;return j.first&&f in n&&n[f](j),r in n&&(v=n[r](j)),j.last&&y in n&&n[y](j),v};c[s]=w,d[s]=d[s]||{}}function Hb(a,n){const[r,s,c]=Lb(a),d={};return Nn(c,r,"onDrag","drag",d,n),Nn(c,r,"onWheel","wheel",d,n),Nn(c,r,"onScroll","scroll",d,n),Nn(c,r,"onPinch","pinch",d,n),Nn(c,r,"onMove","move",d,n),Nn(c,r,"onHover","hover",d,n),{handlers:d,config:n,nativeHandlers:s}}function Kb(a,n={},r,s){const c=yi.useMemo(()=>new Ib(a),[]);if(c.applyHandlers(a,s),c.applyConfig(n,r),yi.useEffect(c.effect.bind(c)),yi.useEffect(()=>c.clean.bind(c),[]),n.target===void 0)return c.bind.bind(c)}function Ub(a){return a.forEach(Eb),function(r,s){const{handlers:c,nativeHandlers:d,config:f}=Hb(r,s||{});return Kb(c,f,void 0,d)}}function $b(a,n){return Ub([Pb,xb,Gb,Nb,Sb,Tb])(a,n||{})}const Zb=({parsedSongs:a,minZoom:n,maxZoom:r,defaultZoom:s,gesturesTarget:c})=>{const[d,f]=Zt("chosenSong",1),[y,w]=Zt("starredSongs",[]),[j,v]=Zt("onlyStarred",!1),[D,A]=Zt("selectedSong",null),[O,L]=Zt("zoomLevel",s),[F,I]=P.useState(null),[J,X]=P.useState(null),ne=y.length;P.useEffect(()=>{j&&(y.length?y.find(ee=>ee===d)||f(y[0]):v(!1))},[j,v,d,f,y]);const ae=ee=>{const ge=d===ee,de=y.indexOf(ee),Be=de+1,je=!!Be,ze=D===ee;return{chosen:ge,starredNumber:Be,starred:je,toggleStarred:()=>{A(je?G=>G===ee?y.length<=1?null:y.length>de+1?y[de+1]:y[de-1]:G:ee),w(G=>je?G.filter($=>$!==ee):[...G,ee])},selected:ze,toggleSelected:()=>A(ze?null:ee),moveUp:de<1?void 0:()=>w(G=>{const $=G.filter(_=>_!==ee);return $.splice(de-1,0,ee),$}),moveDown:de>y.length-2?void 0:()=>w(G=>{const $=G.filter(_=>_!==ee);return $.splice(de+1,0,ee),$})}},U=ee=>({...ee,...ae(ee.number)}),ce=(j?y.flatMap(ee=>{const ge=a.find(de=>de.number===ee);return ge?[ge]:[]}):a).map(U),Pe=ee=>{const de=ce.findIndex(je=>je.chosen)-ee,Be=de>=ce.length?0:de<0?ce.length-1:de;f(ce[Be].number)},Ye=ee=>{I(ee),X(O)},Ue=ee=>{if(F===null||J===null)return;const ge=ee/F,de=Math.floor(Math.log10(ge)*10),Be=Math.min(Math.max(n,J+de),r);L(Be)};return $b({onDrag:({swipe:[ee]})=>{ee!==0&&Pe(ee)},onPinch:({first:ee,da:[ge]})=>{ee&&Ye(ge),Ue(ge)}},{target:c,drag:{swipe:{distance:30,velocity:.1}}}),{songs:ce,setChosenSong:f,starredCount:ne,onlyStarred:j,toggleOnlyStarred:()=>v(ee=>!ee),zoomLevel:O}},Vb=({parsedSongs:a})=>{const n=P.useRef(null),{songs:r,setChosenSong:s,starredCount:c,onlyStarred:d,toggleOnlyStarred:f,zoomLevel:y}=Zb({parsedSongs:a,minZoom:1,maxZoom:20,defaultZoom:5,gesturesTarget:n}),[w,j]=Zt("menuShown",!1),[v,D]=Zt("chordsShown",!0),A=()=>j(!0),O=()=>j(!1),L=()=>D(!0),F=()=>D(!1),I=X=>{s(X),O()},J=r.find(X=>X.chosen);return x.jsxs(x.Fragment,{children:[!w&&x.jsx(Gv,{onlyStarred:d,chordsShown:v,onClickMenu:A,onClickGuitar:v?F:L}),x.jsx("div",{ref:n,className:`container-lg pt-1 min-vh-100 bg-white songbook zoom-level-${y}`,children:!!J&&x.jsx(gp,{song:J,starredCount:c,chordsShown:v})}),x.jsx(xv,{songs:r,chooseSong:I,starredCount:c,onlyStarred:d,toggleOnlyStarred:f,show:w,onClose:O})]})},Yb=()=>x.jsx(Vb,{parsedSongs:zp});var no={},Gf;function Qb(){if(Gf)return no;Gf=1;var a=Bf();return no.createRoot=a.createRoot,no.hydrateRoot=a.hydrateRoot,no}var Xb=Qb();const qb=Xb.createRoot(document.getElementById("root"));qb.render(x.jsx(yi.StrictMode,{children:x.jsx(Yb,{})}));
