import usePersistentState from './usePersistentState';

const useStarredSongs = () => {

    const [starredSongs, setStarredSongs] = usePersistentState('starredSongs', []);

    const isStarred = (songNumber) => !!starredSongs.find(number => number === songNumber);

    const toggleStarred = (songNumber) => () => {
        setStarredSongs(current => {
            return isStarred(songNumber) ? current.filter(v => v !== songNumber) : [...current, songNumber];
        });
    };

    return [starredSongs, isStarred, toggleStarred];

};

export default useStarredSongs;