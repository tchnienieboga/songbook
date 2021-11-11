import usePersistentState from './usePersistentState';

const useStarredSongs = () => {

    const [starredSongs, setStarredSongs] = usePersistentState('starredSongs', []);

    const getStarred = (songNumber) => {
        const index = starredSongs.indexOf(songNumber);
        return ({
            starred: index !== -1,
            number: index + 1,
            count: starredSongs.length
        });
    };

    const toggleStarred = (songNumber) => () => {
        setStarredSongs(current => {
            return getStarred(songNumber).starred ? current.filter(v => v !== songNumber) : [...current, songNumber];
        });
    };

    return [getStarred, toggleStarred];

};

export default useStarredSongs;