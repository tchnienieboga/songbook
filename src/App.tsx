import React from 'react';
import './App.scss';
import Songbook from './components/Songbook';
import rawSongs from './songs/songs.txt?raw';
import {parseSongs} from "./songs/parser";

const App = () => {
    const parsedSongs = parseSongs(rawSongs);
    return (
        <Songbook parsedSongs={parsedSongs}/>
    );
};

export default App;
