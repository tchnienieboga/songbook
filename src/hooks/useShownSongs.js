import usePersistentState from './usePersistentState';


const useShownSongs = (songs) => {

    const [chosenSong, setChosenSong] = usePersistentState('chosenSong', 1);

    const shownSongs = [...songs].map(song => ({
        ...song,
        chosen: song.number === chosenSong
    }));
    return [shownSongs, setChosenSong];

};

export default useShownSongs;