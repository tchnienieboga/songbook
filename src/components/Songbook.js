import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Song from './Song';
import Menu from './Menu';
import MenuButton from './MenuButton';
import usePinchZoomLevel from "../hooks/usePinchZoomLevel";
import useSwipeChangeSong from "../hooks/useSwipeChangeSong";

const Songbook = ({songbook}) => {
    const songCount = songbook.songs.length;
    const [song, setSong] = useState(1);
    const [zoomLevel, setZoomLevel] = useState(5);
    const [menuShown, setMenuShown] = useState(false);

    const bindPinch = usePinchZoomLevel(zoomLevel, setZoomLevel, 1, 20);
    const bindSwipe = useSwipeChangeSong(song, setSong, songCount);

    // this.state = {
    // song: ls.chosenSong.get() || 1,
    // zoomLevel: ls.zoomLevel.get() || this.defaultZoomLevel,
    // };

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

            <div {...bindSwipe()} {...bindPinch()}
                 className={`container-lg pt-1 min-vh-100 bg-white songbook zoom-level-${zoomLevel}`}>
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

