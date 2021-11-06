import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Song from './Song';
import Menu from './Menu';
import MenuButton from './MenuButton';
import usePinchZoomLevel from "../hooks/usePinchZoomLevel";
import useSwipeChangeSong from "../hooks/useSwipeChangeSong";
import usePersistentState from "../hooks/usePersistentState";

const Songbook = ({songbook}) => {

    const songCount = songbook.songs.length;
    const [song, setSong] = usePersistentState("chosenSong", 1);
    const [zoomLevel, setZoomLevel] = usePersistentState("zoomLevel", 5);
    const [menuShown, setMenuShown] = useState(false);

    const bindPinch = usePinchZoomLevel(zoomLevel, setZoomLevel, 1, 20);
    const bindSwipe = useSwipeChangeSong(song, setSong, songCount);

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

