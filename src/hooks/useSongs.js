import usePersistentState from './usePersistentState';
import {useDrag} from 'react-use-gesture';


const useSongs = (parsedSongs) => {

    const [chosenSong, setChosenSong] = usePersistentState('chosenSong', 1);
    const [starredSongs, setStarredSongs] = usePersistentState('starredSongs', []);
    const starredCount = starredSongs.length;

    const songState = (songNumber) => {
        const chosen = chosenSong === songNumber;
        const starredNumber = starredSongs.indexOf(songNumber) + 1;
        const starred = !!starredNumber;
        return {
            chosen,
            starredNumber,
            starred,
            toggleStarred: () => setStarredSongs(current => starred
                ? current.filter(v => v !== songNumber)
                : [...current, songNumber])
        };
    };

    const songs = [...parsedSongs].map(parsedSong => ({
        ...parsedSong,
        ...songState(parsedSong.number)
    }));

    const swipe = (swipeX) => {
        const chosenIndex = songs.findIndex(song => song.chosen);
        const newIndex = chosenIndex - swipeX;
        const newIndexRolled = newIndex >= songs.length ? 0 : newIndex < 0 ? songs.length - 1 : newIndex;
        setChosenSong(songs[newIndexRolled].number);
    };

    const swipeChangeSong = useDrag(state => {
        const [swipeX] = state.swipe;
        if (swipeX !== 0) {
            swipe(swipeX);
        }
    });

    return [songs, setChosenSong, starredCount, swipeChangeSong];

};

export default useSongs;