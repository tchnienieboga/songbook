import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import {Container} from "react-bootstrap";
import Song from "./components/Song";

// language=TEXT
const song = '{title: 218. Nie bój się, Ja Jestem}\n{key: D}\n\nNie bój się, Ja Jestem               [D] [e7]\nBlisko tak, gdy zechcesz             [D/Fis] [G]\nPrzytul się i trwaj tak przy mnie    [D] [A/Cis]\nZawsze                               [h7/9] [A]\n                                     \nCzekam tu na ciebie                  [D] [e7]\nAbyś był w mym niebie                [D/Fis] [G]\nTylko zechciej wybrać właśnie        [D] [A/Cis]\nMnie                                 [fis] [G]\n[B] [a] [G] [B] [C] [D]\n\nRef. Bo tylko Jezus jest mą miłością [D] [fis]\nTylko On moją radością               [h] [A]\nTylko Jezus jest mym wytchnieniem    [G] [e7]\nPanem moim jest                      [fis] [Asus] [A7]\nTylko Jezus jest mą miłością         [D] [A/Cis]\nTylko On moją radością               [h] [A]\nTylko Jezus jest mym wytchnieniem    [G] [e7]\nPanem moim jest                      [A]\n';

const App = () => (
    <Container>
        <Song song={song}/>
    </Container>
);

export default App;
