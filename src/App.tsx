import './App.scss';
import Songbook from './components/Songbook';
import { parsedSongbook } from './songs/parsedSongbook';

const App = () => {
    return <Songbook parsedSongbook={parsedSongbook} />;
};

export default App;
