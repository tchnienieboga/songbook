import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Song from './Song';
import Menu from './Menu';
import MenuButton from './MenuButton';
import {useDrag} from "react-use-gesture";
import usePinchZoomLevel from "../hooks/usePinchZoomLevel";

const Songbook = ({songbook}) => {
    const defaultZoomLevel = 5;

    const songCount = songbook.songs.length;
    const [song, setSong] = useState(1);
    const [zoomLevel, setZoomLevel] = useState(defaultZoomLevel);
    const [menuShown, setMenuShown] = useState(false);

    const bindPinch = usePinchZoomLevel(zoomLevel, setZoomLevel, 1, 20);

    const bind = useDrag(state => {
        const [swipeX] = state.swipe;
        if (swipeX !== 0) {
            swipe(swipeX);
        }
    })

    // this.state = {
    // song: ls.chosenSong.get() || 1,
    // zoomLevel: ls.zoomLevel.get() || this.defaultZoomLevel,
    // };

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

            <div {...bind()} {...bindPinch()} className={`container-lg pt-1 min-vh-100 bg-white songbook zoom-level-${zoomLevel}`}>
                {chosenSong && <Song key={`song${song}`} song={chosenSong}/>}
            </div>
            <Menu songbook={songbook} songIndex={songIndex} show={menuShown}
                  chooseSong={chooseSong} onClose={closeMenu}/>
        </React.Fragment>
    );
}

Songbook.propTypes = {
    songbook: PropTypes.object.isRequired
};

export default Songbook;

