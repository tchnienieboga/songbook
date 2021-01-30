import React from 'react';
import './App.scss';
import Songbook from './components/Songbook';
import songbook from './songs/songs';

const App = () => (
    <Songbook songbook={songbook}/>
);

export default App;
