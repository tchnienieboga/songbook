import usePersistentState from './usePersistentState';
import {Target, useGesture} from '@use-gesture/react';
import {useEffect, useState} from 'react';
import {ParsedSong, Song, SongState} from "../utils/types";

interface UseSongsParameters {
    parsedSongs: ParsedSong[];
    minZoom: number;
    maxZoom: number;
    defaultZoom: number;
    gesturesTarget: Target
}

const useSongs = ({parsedSongs, minZoom, maxZoom, defaultZoom, gesturesTarget}: UseSongsParameters) => {

    const [chosenSong, setChosenSong] = usePersistentState('chosenSong', 1);
    const [starredSongs, setStarredSongs] = usePersistentState<number[]>('starredSongs', []);
    const [onlyStarred, setOnlyStarred] = usePersistentState('onlyStarred', false);
    const [selectedSong, setSelectedSong] = usePersistentState<number | null>('selectedSong', null);
    const [zoomLevel, setZoomLevel] = usePersistentState('zoomLevel', defaultZoom);
    const [initialDistance, setInitialDistance] = useState<number | null>(null);
    const [initialZoomLevel, setInitialZoomLevel] = useState<number | null>(null);

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

    const songState = (songNumber: number): SongState => {
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

    const mapSong = (parsedSong: ParsedSong): Song => ({
        ...parsedSong,
        ...songState(parsedSong.number)
    });

    const getParsedStarredSongs = (): ParsedSong[] => {
        return starredSongs.flatMap(number => {
            const found = parsedSongs.find(ps => ps.number === number);
            return found ? [found] : [];
        });
    };
    const songs = (onlyStarred ? getParsedStarredSongs() : parsedSongs).map(mapSong);

    const swipe = (swipeX: number) => {
        const chosenIndex = songs.findIndex(song => song.chosen);
        const newIndex = chosenIndex - swipeX;
        const newIndexRolled = newIndex >= songs.length ? 0 : newIndex < 0 ? songs.length - 1 : newIndex;
        setChosenSong(songs[newIndexRolled].number);
    };

    const pinchStart = (distance: number) => {
        setInitialDistance(distance);
        setInitialZoomLevel(zoomLevel);
    }
    const pinchContinue = (distance: number) => {
        if (initialDistance === null || initialZoomLevel === null) {
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
        target: gesturesTarget
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