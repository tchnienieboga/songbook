import {useDrag} from "react-use-gesture";

const useSwipeChangeSong = (song, setSong, songCount) => {

    const swipe = (swipeX) => {
        const newSong = song - swipeX;
        const newSongRolled = newSong > songCount ? 1 : newSong < 1 ? songCount : newSong;
        setSong(newSongRolled);
    };


    return useDrag(state => {
        const [swipeX] = state.swipe;
        if (swipeX !== 0) {
            swipe(swipeX);
        }
    })

}

export default useSwipeChangeSong;