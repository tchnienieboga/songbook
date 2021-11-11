import usePersistentState from './usePersistentState';


const useSongs = (parsedSongs) => {

    const [chosenSong, setChosenSong] = usePersistentState('chosenSong', 1);
    const [starredSongs, setStarredSongs] = usePersistentState('starredSongs', []);

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

    const starredCount = starredSongs.length;

    return [songs, setChosenSong, starredCount];

};

export default useSongs;