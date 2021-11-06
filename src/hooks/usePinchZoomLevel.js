import {usePinch} from "react-use-gesture";
import {useState} from "react";

const usePinchZoomLevel = (zoomLevel, setZoomLevel, min, max) => {

    const [initialDistance, setInitialDistance] = useState(null);
    const [initialZoomLevel, setInitialZoomLevel] = useState(null);

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

    return usePinch(state => {
        if (state.first) {
            pinchStart(state.da[0]);
        }
        pinchContinue(state.da[0]);
    });

};

export default usePinchZoomLevel;