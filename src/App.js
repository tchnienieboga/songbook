import React from 'react';
import './App.scss';
import songs from './songs/songs';
import Songbook from "./components/Songbook";

const App = () => (
    <Songbook songs={songs}/>
);

export default App;
