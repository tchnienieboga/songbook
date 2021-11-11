import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Song from './Song';
import Menu from './Menu';
import MenuButton from './MenuButton';
import usePinchZoomLevel from '../hooks/usePinchZoomLevel';
import usePersistentState from '../hooks/usePersistentState';
import useSongs from '../hooks/useSongs';

const Songbook = ({parsedSongs}) => {

    const [songs, setChosenSong, starredCount] = useSongs(parsedSongs);

    const [zoomLevel, setZoomLevel] = usePersistentState('zoomLevel', 5);
    const [menuShown, setMenuShown] = useState(false);

    const pinchZoomLevel = usePinchZoomLevel(zoomLevel, setZoomLevel, 1, 20);

    const openMenu = () => setMenuShown(true);

    const closeMenu = () => setMenuShown(false);

    const chooseSong = (songNumber) => {
        setChosenSong(songNumber);
        closeMenu();
    }

    const chosenSong = songs.find(song => song.chosen);
    return (<React.Fragment>
            {!menuShown && <MenuButton onClick={openMenu}/>}

            <div {/*{...swipeChangeSong()}*/...{}} {...pinchZoomLevel()}
                 className={`container-lg pt-1 min-vh-100 bg-white songbook zoom-level-${zoomLevel}`}>
                {!!chosenSong && <Song song={chosenSong} starredCount={starredCount}/>}
            </div>

            <Menu songs={songs} chooseSong={chooseSong} starredCount={starredCount}
                  show={menuShown} onClose={closeMenu}/>

        </React.Fragment>
    );

}

Songbook.propTypes = {
    parsedSongs: PropTypes.array.isRequired
};

export default Songbook;

