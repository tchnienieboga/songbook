import {parseSongs} from '../utils/parser';

// language=TEXT
const rawSongs = `
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
O usłysz mój głos! O usłysz mój głos! [c] [B6]
Przyjdź i wysłuchaj mnie. [As] [G7] [c]
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
1. Gdy śliczna Panna Syna kołysała [D] [A] [h] [e] [A7D]
Z wielkim weselem tak Jemu śpiewała:

Ref. Li, li, li, li, laj, moje Dzieciąteczko [h] [e] [A] [G] [D]
Li, li, li, li, laj, śliczne Paniąteczko [h] [G] [g] [D] [e] [A] [D]

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
1. Cicha noc, święta noc, [A]
Pokój niesie ludziom wszem [E] [E7] [A] [A7]
A u żłobka Matka Święta [D] [A]
Czuwa sama uśmiechnięta [D] [A]
Nad Dzieciątka snem, nad Dzieciątka snem [h] [h0] [A] [A] [E] [A]

2. Cicha noc, święta noc, pastuszkowie od swych trzód
Biegną wielce zadziwieni za anielskim głosem pieni
Gdzie się spełnił cud, gdzie się spełnił cud.

3. Cicha noc, święta noc, narodzony Boży Syn
Pan wielkiego majestatu niesie dziś całemu światu
Odkupienie win, odkupienie win
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
1. Pójdźmy wszyscy do stajenki, [F]
Do Jezusa i Panienki! [F]
Powitajmy Maleńkiego, [g] [C7] [F] [d]
I Maryję Matkę Jego. [C7] [F] [F7]
Powitajmy Maleńkiego, [g] [C7] [A] [d]
I Maryję Matkę Jego. [g] [C7] [F] [B] [F]

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
Wody nie ugaszą jej, [C] [G] [a7] [D] [A] [h7]
nie da zdławić się [F] [G] [G] [A]
przez wiatr. [C] [G7] [D] [A7]
Rzeki nie zatopią jej, [C] [G] [a7] [D] [A] [h7]
a jej żar to ognia żar. [F] [G] [C] [G] [A] [D]
Jak śmierć jest miłość, [G] [a7] [A] [h7]
tak potężna jest, [F] [G] [C] [G] [A] [D]
jak śmierć jest miłość, [G] [a7] [A] [h7]
potężniejsza jest. [F] [G] [C] [G] [A] [D]
 [(A7)]
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
Swojego Ducha Panie, wylej na nas dziś! [D] [h] [G] [D]
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
Mów do mnie, Panie, [c] [B] [h] [A]
chcę słyszeć Cię, [As7+] [B] [G7+] [A]
Przyjąć od Ciebie, [As7+] [B] [G7+] [A]
co masz dla mnie. [f7] [e7]
Nie chcę się chować, [c] [B] [h] [A]
lecz w Tobie skryć. [As7+] [B] [G7+] [A]
W cieniu Twym, Panie, [As7+] [B] [G7+] [A]
chcę iść. [f7] [(f6)] [e7] [(e6)]

Ref. 2x Święty, [c] [h]
potężny jesteś, Panie nasz, [B] [As] [c] [A] [G] [h]
Przed Tobą dziś możemy stać [B] [As] [c] [A] [G] [h]
Dzięki łasce, [B] [As] [A] [G]
nie dzięki nam samym. [Es] [B] [D] [A]
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

Ref. x4 Sprawiedliwy jest nasz Pan [D7+] [E] [E7+] [Fis]
Każdy zbierze to, co siał [fis] [A] [gis] [H]
Kto uwierzy, nie zawiedzie się. [D7+] [E] [H] [E7+] [Fis] [Cis]
Przychodzimy przed Twój tron, [D7+] [E] [E7+] [Fis]
chcemy widzieć Twoją moc [fis] [A] [gis] [H]
i doświadczyć, Panie, łaski Twej. [D7+] [E] [Fis5] [E7+] [Fis] [Gis5]

Tylko w Bogu moje jest zbawienie. [E7+] [Fis] [gis] [E7+] [Fis] [Gis]
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
{title:  Nadejdzie dzień}
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
Nie lękajcie się, Ja jestem z wami. [C] [F] [G] [C] [F] [G]
Nie lękajcie się, Ja jestem z wami. [a] [e] [F] [d] [B] [G]
Nie lękajcie się, Bóg jest miłością. [C] [F] [G] [C] [F] [G]
Nie lękajcie się, trwajcie mocni w wierze. [a] [e] [F] [d] [B] [G]

1. Ty jesteś Skałą Zbawienia, [C] [F] [G]
Jedyną naszą ostoją. [C] [F] [G] [a]
Przychodzimy do Ciebie po światło. [a] [e] [F] [C]
Ulecz nasze serca, zmartwychwstać daj. [d] [F] [G]

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
Ofiaruję Tobie, Panie mój, [C] [G] [a] [D] [A] [h]
Całe życie me, cały jestem Twój, [e] [F] [C] [d] [fis] [G] [D] [e]
Aż na wieki. [G7] [A7]
Oto moje serce, przecież wiesz, [C] [G] [a] [D] [A] [h]
Tyś miłością mą jedyną jest [e] [F] [G] [C] [fis] [G] [g6]
 [(A7)] [D7+]
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
1. Jezus daje nam zbawienie [d] [C] [a] [d]
Jezus daje pokój nam [d] [C] [a] [d]
Jemu składam dziękczynienie [d] [C] [a] [d]
Chwałę z serca mego dam [d] [C] [a] [d]

Ref. Jezus siłą mą, Jezus pieśnią mego życia [F] [C] [a] [d]
Królem wiecznym On [F] [C]
niepojęty w mocy Swej [a] [d]
W Nim znalazłem to czego [F] [C]
szukałem do dzisiaj [a] [d]
Sam mi podał dłoń [F] [C]
bym zwyciężał każdy dzień [a] [d]

2. W Jego ranach uzdrowienie, w Jego śmierci życia dar.
Jego krew to oczyszczenie, Jego życie chwałą nam.

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
1. W kruszynie chleba Panie jesteś [G] [h] [e]
Schowany, wielki Ty Pan [C] [D] [G] [e]
Przychodzisz do nas już od wieków [C] [D] [G] [e]
By ofiarować Siebie nam [C] [a7] [D] [D7]

2. W tych kroplach wina Twoja krew, przelana za nas Panie mój.
Tak wiele jej na krzyżu było by odkupić nas od win.

3. Ty, Panie miłością jesteś, Ty Panie kochasz nas.
I proszę Ciebie, by tak było, wciąż przez wiele lat.
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
Pan jest mocą Swojego ludu [E] [A] [H7]
Pieśnią moją jest Pan [E] [A] [H7]
Moja tarcza i moja moc [A] [gis] [cis]
On jest mym Bogiem, nie jestem sam [H7] [E] [A] [H7]
W Nim moja siła, nie jestem sam [gis] [A] [H7] [E]
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
Duchu Święty ogarnij mnie [D] [A] [Fis] [h]
Otwórz oczy mego serca, napełnij miłością [G] [e] [A7sus4] [A7]
Duchu święty ja kocham Cię [D] [A] [Fis] [h]
Niech Twa święta wola spełni się [e] [A7] [D]
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
Chcę wywyższać Imię Twe, [F] [B] [C] [B] [G] [C] [D] [C]
Chcę zaśpiewać Tobie chwałę. [F] [B] [C] [B] [G] [C] [D] [C]
Panie, dziś raduję się, [F] [B] [C] [B] [G] [C] [D] [C]
Bo przyszedłeś, by mnie zbawić. [F] [B] [C] [B] [G] [C] [D] [C]

Ref. Z nieba zstąpiłeś i chcesz [F] [B] [C] [G] [C] [D]
Prowadzić mnie [B] [C]
Na krzyżu zmarłeś, by mój zapłacić dług [F] [B] [C] [B] [G] [C] [D] [C]
Z grobu wstałeś i dziś [F] [B] [C] [G] [C] [D]
Nieba Królem jesteś Ty [d7] [e7]
Chcę wywyższać Imię Twe [B] [C] [F] [C] [D] [G]
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
Ubi caritas et amor, ubi caritas Deus ibi est.
Tam gdzie miłość jest i dobroć, tam gdzie miłość jest
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
Ref. x2 Alleluja, Alleluja, Alleluja, Alleluja! [fis] [E] [D] [cis] [fis]

1. Niech zabrzmi Panu chwała w niebiosach, fis E fis
na wysokościach cześć niech oddadzą, [cis] [D] [E] [fis]
wielbijcie Pana, duchy niebieskie, [fis] [E] [D] [fis]
wielbicie Pana, Jego zastępy [fis] [E] [cis] [fis]

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
1. Pan kiedyś stanął nad brzegiem, [C] [G7] [a] [a7]
szukał ludzi, gotowych pójść za Nim, [d] [F] [G] [G7]
by łowić serca Słów Bożych prawdą. [C] [G7] [C] [C7]

Ref. O Panie, to Ty na mnie spojrzałeś, [F] [G] [C] [A7]
Twoje usta dziś wyrzekły me imię. [d] [G7] [C] [C7]
Swoją barkę pozostawiam na brzegu, [F] [G] [C] [A7]
razem z Tobą nowy zacznę dziś łów. [d] [G7] [C]

2. Jestem ubogim człowiekiem, moim skarbem są ręce gotowe
do pracy z Tobą i czyste serce.

Ref. O Panie...

3. Ty potrzebujesz mych dłoni, mego serca młodego zapałem,
mych kropli potu i samotności.

Ref. O Panie...

4. Dziś wypłyniemy już razem,
łowić serca na morzach dusz ludzkich
Twej prawdy siecią i Słowem Życia.

Ref. O Panie…
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
1. Witaj Pokarmie, w którym niezmierzony
nieba i ziemi Twórca jest zamkniony,
Witaj napoju zupełnie gaszący
Umysł pragnący.

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
Ta Krew z grzechu obmywa mnie [D] [G]
Ta Krew czyni mnie bielszym od śniegu [A] [D] [fis]
Ta Krew z grzechu obmywa mnie [h] [G]
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
Solo gitara fis E cis7 D7+ h7 cis7 E fis (E) |x2

1. Mrok ogarnął całą ziemię [fis] [E] [cis7] [D7+]
na ulicy cisza. [h7] [cis7] [fis] [E]
Tylko Twoje kroki słychać, [fis] [E] [cis7] [D7+]
Twój płacz i jęk. [h7] [cis7] [E] [fis]

Ref. x2: On przyszedł po to, [h7] [cis7] [fis]
by ci pomóc z upadku twego wyjść [h7] [cis7] [fis]
Byś nigdy więcej już nie błądził [h7] [cis7] [fis]
byś znalazł drogę w życiu tym. [h7] [cis7] [fis]

2. Jesteś przecież jeszcze młody [fis] [E] [cis7] [D7+]
Wiele możesz zdziałać. [h7] [cis7] [fis] [E]
Tylko życie tracisz swoje [fis] [E] [cis7] [D7+]
W różny sposób. [h7] [cis7] [E] [fis]

Ref. x2: On przyszedł po to... [h7] [cis7] [fis]

Solo akordeon cis7 D7+ A E cis D7+ A |x2

Jesteś przecież jeszcze młody [fis] [E] [cis7] [D7+]
Wiele możesz zdziałać. [h7] [cis7] [D7+]
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
w Ciało Swe, [H] [7]
Zwykły chleb przemieniasz, Panie, [E]
By nasycić nim bez granic, [A] [E]
By nasycić nim bez granic dzisiaj mnie. [A] [H] [7] [E] [(A] [E)]

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
1. Ty wyzwoliłeś nas Panie [A] [D] [E] [E7]
Z kajdan i samych siebie [Cis] [fis] [D]
A Chrystus stając się bratem [A] [D] [E] [E7]
Nauczył nas wołać do Ciebie. [A] [D] [A] [E] [A] [D] [A] [E]
Ref.: Abba Ojcze, Abba Ojcze! Abba Ojcze, Abba Ojcze! (Ojcze!)

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
Otwórz me oczy, chcę widzieć Jezusa [e] [A] [G] [D] [(h)]
i być bliżej Niego, i kochać goręcej. [e] [A7] [D] [D] [7]
Otwórz me uszy i naucz mnie słuchać. [e] [A] [7] [G] [D] [(h)]
Otwórz me oczy, chcę widzieć Jezusa [e] [A] [7] [G] [D]
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
h Fis D A h Fis h h Fis D A h Fis h H 7
Ref.: e A D h E A 7 D D 7 e A D h E A 7 h

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
W promieniach Jezus mały. [F] [E7] [a] [F7]

2. Nad nim anieli w locie stanęli [b] [c7/5-] [b] [F7]
I pochyleni klęczą [Ges] [es] [b] [F7]
Z włosy złotymi, skrzydły białymi, [b] [c7/5-] [b] [F7]
Pod malowaną tęczą. [Ges] [F7] [b] [Fis7]

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
Bo Pan najwyższym jest [G]
królem nad całą ziemią. [A] [D] [(A)]

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

Jestem tego pewien, nikt nie oddzieli nas [a7/9]
Od Miłości Twojej Panie / x2 [F7+] [G/A]
Ani śmierć, ani życie, ani aniołowie [F] [G] [a] [G] [C]
Potęgi niebieskie, teraźniejszość, przyszłość, moce.
Ani wysokość i głębokość, stworzenie też, [F] [G]
nic nie oddzieli nas [a] [G] [C]
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

Ref. Alleluja, alleluja, alleluja amen [B] [C] [a] [B] [g] [a] [G]
Alleluja, alleluja, alleluja amen. [B] [C] [a] [B] [B] [C] [d]

Memu Bogu, Królowi, [d] [C]
będę śpiewał tę pieśń [a] [d]
Teraz zawsze na wieki amen. / x2 [B] [C] [d]
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
G D/Fis fis0 e Es e0 C c G/H A7 D7 G
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

Duchu Święty, Tchnienie Ojca, Dawco życia. [F] [B] [F]
Duchu Święty, Źródło wody żywej w nas. [F] [B] [F]

Ref. Tak pragniemy Ciebie Panie, [d] [a]
jak spękana ziemia deszczu, [B] [F/A]
jak pustynia kropli wody, [B] [F/A]
Duchu, przyjdź. [C]

Duchu Święty, Tyś Mądrością niezmierzoną. [F] [B] [F]
Duchu Święty, Ty oświetlasz drogi nam. [F] [B] [F]

Ref. I prowadzisz nas do domu, gdzie mieszkanie przed wiekami
przygotował dla nas Ojciec, Duchu, przyjdź.
Tak pragniemy Ciebie Panie, jak spękana ziemia deszczu,
jak pustynia kropli wody, Duchu, przyjdź.

Prowadź mnie, prowadź mnie. [F] [C/E] [B/D] [B]
Prowadź nas, prowadź nas. [F] [C/E] [B/D] [B]
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

Ref. Jak w Betlejem cud zdarzył się [d] [C]
Tak od Juraty po Zakopane [G] [a] [d]
Od Sejn po Cieszyn niech blaskiem lśni [d] [C]
Nad całą Polską nam niebo dziś [G] [a] [d]
Niech każdy kto usłyszy dźwięk [B] [C]
Niebiańskiej muzyki aniołów śpiew [a] [B] [C]
Jaśnieje światłem gwiazdy tej [d] [C]
Co narodziła się w Betlejem [G] [a] [d]

2x Solo skrzypce [d] [C] [G] [a]

1. Choć płoną miasta wkoło [d] [d7/11]
Świątecznych promocji zgiełk [d6] [d]
Chodźcie tu wokoło [d] [d7/11]
Odnajdźmy nawzajem się [d6] [d]
Niech nie zabraknie [d] [G]
miłości w świąteczny czas [B] [F] [C/E]
Głodnych nakarmimy, [d] [d7/11]
Wystarczy dla wszystkich nas [d6] [d]

Ref. Jak w Betlejem cud zdarzył się...

2. Choć rośnie miasto w koło, lombardów i banków tłok
I miejsca wciąż tak mało na zwykłą, pomocną dłoń
2x Niech nie zabraknie miłości w świąteczny czas
Głodnych nakarmimy, wystarczy dla wszystkich nas

Ref. Jak w Betlejem cud zdarzył się...
2x Niech każdy kto usłyszy dźwięk...

3x Solo skrzypce [d]
Ło ło ło ło, ło ło ło, ło ło... [d] [C] [G] [a] [d] [C] [G] [a]
Ło ło ło ło, ło ło ło ło [B] [C] [a] [B] [C] [d] [C] [G] [a]
Ło ło ło ło, ło ło ło, ło ło [d]
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

Ref. I będę wzywać Imię Twe...
 
Więc daj mi odwagę [h] [A/Cis] [D] [A] [G] [/x2]
I prowadź mnie
Chcę ufać Tobie
solo…
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

Ref. I będę wzywać Imię Twe…
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

1. Światłość świata rozjaśnia mrok [c] [As] [B] [f]
przedwieczny Pan Bóg objawia swą moc [c] [As] [B] [f]
dziś w Betlejem zdarzył się cud [c] [Es] [B] [f]
Jezus Chrystus zbawia swój lud [c] [As] [B] [f]

Ref. Śpiewaj, śpiewaj, Jemu ziemio [c] [Es] [F]
I wychwalaj miłości dar [f] [Es] [c]
Stwórca twój odnawia Ciebie [c] [As]
Pokój dziś przynosząc nam. /x2 [B] [F]

2. Pokłon, chwałę, oddajmy Mu [c] [As] [B] [f]
Swoje troski złóżmy u Jego stóp [c] [As] [B] [f]
Przebaczenie przynosi nam [c] [Es] [B] [f]
Jezus Chrystus zbawił świat [c] [As] [B] [f]

Ref. Śpiewaj, śpiewaj... /x2

solo [c] [As] [B] [f] [/x2]

Oooo... /x2 [As] [B] [c] [Es] [As] [B] [F]

Ref. Śpiewaj, śpiewaj... /x3
---
{title:  W żłobie leży}
{number: 226}

1. W żłobie leży, któż pobieży [D] [e] [A7]
Kolędować Małemu? [D] [e7] [A7] [D]
Jezusowi, Chrystusowi [D] [e] [A7]
Dziś nam narodzonemu? [D] [D7] [G] [A7] [D]
Pastuszkowie, przybywajcie [D] [H7] [e]
Jemu wdzięcznie przygrywajcie, [A7] [D]
Jako Panu naszemu. [Fis7] [G] [e] [A7] [D]

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
`;

const parsedSongs = parseSongs(rawSongs);
export default parsedSongs;