import usePersistentState from './usePersistentState';
import {useDrag} from 'react-use-gesture';
import {useEffect} from 'react';


const useSongs = (parsedSongs) => {

    const [chosenSong, setChosenSong] = usePersistentState('chosenSong', 1);
    const [starredSongs, setStarredSongs] = usePersistentState('starredSongs', []);
    const [onlyStarred, setOnlyStarred] = usePersistentState('onlyStarred', false);
    const starredCount = starredSongs.length;

    useEffect(() => {
        if (onlyStarred) {
            if (!starredSongs.length) {
                setOnlyStarred(false);
            } else if (!starredSongs.find(song => song === chosenSong)) {
                setChosenSong(starredSongs[0]);
            }
        }
    }, [onlyStarred, setOnlyStarred, chosenSong, setChosenSong, starredSongs]);

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

    const mapSong = parsedSong => ({
        ...parsedSong,
        ...songState(parsedSong.number)
    });

    const getParsedStarredSongs = () => starredSongs.map(number => parsedSongs.find(ps => ps.number === number));
    const songs = (onlyStarred ? getParsedStarredSongs() : parsedSongs).map(mapSong);

    const swipe = (swipeX) => {
        const chosenIndex = songs.findIndex(song => song.chosen);
        const newIndex = chosenIndex - swipeX;
        const newIndexRolled = newIndex >= songs.length ? 0 : newIndex < 0 ? songs.length - 1 : newIndex;
        setChosenSong(songs[newIndexRolled].number);
    };

    const toggleOnlyStarred = () => setOnlyStarred(current => !current);

    const swipeChangeSong = useDrag(state => {
        const [swipeX] = state.swipe;
        if (swipeX !== 0) {
            swipe(swipeX);
        }
    });

    return [
        songs,
        setChosenSong,
        starredCount,
        onlyStarred,
        toggleOnlyStarred,
        swipeChangeSong
    ];

};

export default useSongs;