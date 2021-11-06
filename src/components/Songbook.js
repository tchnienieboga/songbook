import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Song from './Song';
import Pinch from './Pinch';
import Menu from './Menu';
import MenuButton from './MenuButton';

const Songbook = ({songbook}) => {
    const defaultZoomLevel = 5;
    const minimumZoomLevel = 1;
    const maximumZoomLevel = 20;

    const songCount = songbook.songs.length;
    const [song, setSong] = useState(1);
    const [zoomLevel, setZoomLevel] = useState(defaultZoomLevel);
    const [menuShown, setMenuShown] = useState(false);
    const [initialDistance, setInitialDistance] = useState(0);
    const [initialZoomLevel, setInitialZoomLevel] = useState(0);

    // this.state = {
    // song: ls.chosenSong.get() || 1,
    // zoomLevel: ls.zoomLevel.get() || this.defaultZoomLevel,
    // };

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
        const newZoomLevel = Math.min(Math.max(minimumZoomLevel, initialZoomLevel + change), maximumZoomLevel);
        setZoomLevel(newZoomLevel);
    }

    const swipe = (swipeX) => {
        const newSong = song - swipeX;
        const newSongRolled = newSong > songCount ? 1 : newSong < 1 ? songCount : newSong;
        setSong(newSongRolled);
    };

    const openMenu = () => {
        setMenuShown(true);
    }

    const closeMenu = () => {
        setMenuShown(false);
    }

    const chooseSong = (songNumber) => {
        const parsedSongNumber = parseInt(songNumber);
        setSong(isNaN(parsedSongNumber) ? song : parsedSongNumber);
        setMenuShown(false);
    }

    const songIndex = song - 1;
    const chosenSong = songbook.songs.length > songIndex ? songbook.songs[songIndex] : null;
    return (<React.Fragment>
            {!menuShown && <MenuButton onClick={openMenu}/>}

            {/*<Observer value={this.state.zoomLevel} didUpdate={ls.zoomLevel.set}/>*/}
            {/*<Observer value={this.state.song} didUpdate={ls.chosenSong.set}/>*/}

            <Pinch className={`container-lg pt-1 min-vh-100 bg-white songbook zoom-level-${zoomLevel}`}
                   onPinchStart={pinchStart} onPinchContinue={pinchContinue} onSwipeX={swipe}>

                {chosenSong && <Song key={`song${song}`} song={chosenSong}/>}
            </Pinch>
            <Menu songbook={songbook} songIndex={songIndex} show={menuShown}
                  chooseSong={chooseSong} onClose={closeMenu}/>
        </React.Fragment>
    );
}

Songbook.propTypes = {
    songbook: PropTypes.object.isRequired
};

export default Songbook;

