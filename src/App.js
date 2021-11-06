import React from 'react';
import './App.scss';
import songbook from './songs/songs';
import Songbook from "./components/Songbook";

const App = () => (
    <Songbook songbook={songbook}/>
);

export default App;
