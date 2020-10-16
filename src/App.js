import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Container} from "react-bootstrap";
import Songbook from "./components/Songbook";
import songbook from "./songs/songs";

const App = () => (
    <Container>
        <Songbook songbook={songbook}/>
    </Container>
);

export default App;
