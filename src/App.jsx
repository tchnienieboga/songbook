import React from 'react';
import './App.scss';
import parsedSongs from './songs/parsedSongs';
import Songbook from './components/Songbook';

const App = () => (
    <Songbook parsedSongs={parsedSongs}/>
);

export default App;
