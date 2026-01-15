import './App.scss';
import Songbook from './components/Songbook';
import rawSongs from './songs/songs.txt?raw';
import { parseSongbook } from './songs/parser';

const App = () => {
    const songbook = parseSongbook(rawSongs);
    return <Songbook parsedSongbook={songbook} />;
};

export default App;
