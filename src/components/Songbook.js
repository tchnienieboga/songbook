import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Song from './Song';
import Menu from './Menu';
import MenuButton from './MenuButton';
import usePinchZoomLevel from '../hooks/usePinchZoomLevel';
import usePersistentState from '../hooks/usePersistentState';
import useStarredSongs from '../hooks/useStarredSongs';
import useShownSongs from '../hooks/useShownSongs';

const Songbook = ({songs}) => {

    const [shownSongs, setChosenSong] = useShownSongs(songs);

    const [zoomLevel, setZoomLevel] = usePersistentState('zoomLevel', 5);
    const [menuShown, setMenuShown] = useState(false);
    const [getStarred, toggleStarred] = useStarredSongs();

    const pinchZoomLevel = usePinchZoomLevel(zoomLevel, setZoomLevel, 1, 20);
    // const swipeChangeSong = useSwipeChangeSong(chosenSong, setChosenSong, shownSongs.length);

    const openMenu = () => setMenuShown(true);

    const closeMenu = () => setMenuShown(false);

    const chooseSong = (songNumber) => {
        setChosenSong(songNumber);
        closeMenu();
    }

    const song = shownSongs.find(song => song.chosen);
    return (<React.Fragment>
            {!menuShown && <MenuButton onClick={openMenu}/>}

            <div {/*{...swipeChangeSong()}*/...{}} {...pinchZoomLevel()}
                 className={`container-lg pt-1 min-vh-100 bg-white songbook zoom-level-${zoomLevel}`}>
                {!!song && <Song song={song} starred={getStarred(song.number)} toggleStarred={toggleStarred(song.number)}/>}
            </div>

            <Menu songs={shownSongs} getStarred={getStarred} show={menuShown}
                  chooseSong={chooseSong} onClose={closeMenu}/>

        </React.Fragment>
    );

}

Songbook.propTypes = {
    songs: PropTypes.array.isRequired
};

export default Songbook;

