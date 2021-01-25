import React from 'react';
import './App.scss';
import Songbook from './components/Songbook';
import songbook from './songs/songs';

const App = () => (
    <div className="container-md bg-white">
        <Songbook songbook={songbook}/>
    </div>
);

export default App;
