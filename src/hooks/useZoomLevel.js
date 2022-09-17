import {usePinch} from '@use-gesture/react';
import {useState} from 'react';
import usePersistentState from './usePersistentState';

const useZoomLevel = (min, max, def) => {

    const [initialDistance, setInitialDistance] = useState(null);
    const [initialZoomLevel, setInitialZoomLevel] = useState(null);
    const [zoomLevel, setZoomLevel] = usePersistentState('zoomLevel', def);

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
        const newZoomLevel = Math.min(Math.max(min, initialZoomLevel + change), max);
        setZoomLevel(newZoomLevel);
    }

    const pinchZoomLevel = usePinch(state => {
        if (state.first) {
            pinchStart(state.da[0]);
        }
        pinchContinue(state.da[0]);
    });

    return [zoomLevel, pinchZoomLevel];

};

export default useZoomLevel;