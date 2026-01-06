import usePersistentState from './usePersistentState';
import {useGesture} from '@use-gesture/react';
import {useEffect, useState} from 'react';

const useSongs = ({parsedSongs, minZoom, maxZoom, defaultZoom, gesturesTarget}) => {

    const [chosenSong, setChosenSong] = usePersistentState('chosenSong', 1);
    const [starredSongs, setStarredSongs] = usePersistentState('starredSongs', []);
    const [onlyStarred, setOnlyStarred] = usePersistentState('onlyStarred', false);
    const [selectedSong, setSelectedSong] = usePersistentState('selectedSong', null);
    const [zoomLevel, setZoomLevel] = usePersistentState('zoomLevel', defaultZoom);
    const [initialDistance, setInitialDistance] = useState(null);
    const [initialZoomLevel, setInitialZoomLevel] = useState(null);

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
        const starredSongsIndex = starredSongs.indexOf(songNumber);
        const starredNumber = starredSongsIndex + 1;
        const starred = !!(starredNumber);
        const selected = selectedSong === songNumber;
        return {
            chosen,
            starredNumber,
            starred,
            toggleStarred: () => {
                if (starred) {
                    setSelectedSong(current => {
                        if (current === songNumber) {
                            return starredSongs.length <= 1
                                ? null
                                : starredSongs.length > starredSongsIndex + 1
                                    ? starredSongs[starredSongsIndex + 1]
                                    : starredSongs[starredSongsIndex - 1]
                        } else {
                            return current;
                        }
                    });
                } else {
                    setSelectedSong(songNumber);
                }
                setStarredSongs(current => starred
                    ? current.filter(v => v !== songNumber)
                    : [...current, songNumber]);
            },
            selected,
            toggleSelected: () => setSelectedSong(selected ? null : songNumber),
            moveUp: starredSongsIndex < 1
                ? undefined
                : () => setStarredSongs(current => {
                    const newStarredSongs = current.filter(number => number !== songNumber);
                    newStarredSongs.splice(starredSongsIndex - 1, 0, songNumber);
                    return newStarredSongs;
                }),
            moveDown: starredSongsIndex > starredSongs.length - 2
                ? undefined
                : () => setStarredSongs(current => {
                    const newStarredSongs = current.filter(number => number !== songNumber);
                    newStarredSongs.splice(starredSongsIndex + 1, 0, songNumber);
                    return newStarredSongs;
                }),
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

    const pinchStart = (distance) => {

        setInitialDistance(distance);
        setInitialZoomLevel(zoomLevel);
    }
    const pinchContinue = (distance) => {

        if (!initialDistance) {
            return;
        }
        const ratio = distance / initialDistance;
        const change = Math.floor(Math.log10(ratio) * 10);
        const newZoomLevel = Math.min(Math.max(minZoom, initialZoomLevel + change), maxZoom);
        setZoomLevel(newZoomLevel);
    }

    useGesture({
        onDrag: ({swipe: [swipeX]}) => {
            if (swipeX !== 0) {
                swipe(swipeX);
            }
        },
        onPinch: ({first, da: [distance]}) => {
            if (first) {
                pinchStart(distance);
            }
            pinchContinue(distance);
        }
    }, {
        target: gesturesTarget,
        drag: {
            swipe: {
                distance: 30,
                velocity: 0.1
            }
        }
    });

    const toggleOnlyStarred = () => setOnlyStarred(current => !current);

    return {
        songs,
        setChosenSong,
        starredCount,
        onlyStarred,
        toggleOnlyStarred,
        zoomLevel
    };

};

export default useSongs;