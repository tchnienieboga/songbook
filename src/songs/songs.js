import {parseSongs} from "../utils/parser";

// language=TEXT
const songs = `
{title: Otwórz me oczy, o Panie}
{number: 215}
{key: C}

Otwórz me oczy o Panie               [C]
Otwórz me oczy i serce               [e]
Chcę widzieć Ciebie                  [F]
Chcę widzieć Ciebie                  [C]

Ref. Wywyższonego widzieć chcę       [e] [a]
ujrzeć Ciebie w blasku Twej chwały   [F] [G]
Wylej swą miłość i moc,              [G] [e] [a]
gdy śpiewam “Święty, święty, święty” [F] [d] [G]
Chcę widzieć Ciebie                  [C]

---
{title: Nie bój się, Ja Jestem}
{number: 217}
{key: D}

Nie bój się, Ja Jestem               [D] [e7]
Blisko tak, gdy zechcesz             [D/Fis] [G]
Przytul się i trwaj tak przy mnie    [D] [A/Cis]
Zawsze                               [h7/9] [A]
                                     
Czekam tu na ciebie                  [D] [e7]
Abyś był w mym niebie                [D/Fis] [G]
Tylko zechciej wybrać właśnie        [D] [A/Cis]
Mnie                                 [fis] [G]
[B] [a] [G] [B] [C] [D]

Ref. Bo tylko Jezus jest mą miłością [D] [fis]
Tylko On moją radością               [h] [A]
Tylko Jezus jest mym wytchnieniem    [G] [e7]
Panem moim jest                      [fis] [Asus] [A7]
Tylko Jezus jest mą miłością         [D] [A/Cis]
Tylko On moją radością               [h] [A]
Tylko Jezus jest mym wytchnieniem    [G] [e7]
Panem moim jest                      [A]
`;

const songbook = parseSongs(songs);
export default songbook;