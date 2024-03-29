import React from 'react';
import PropTypes from 'prop-types';
import Song from './Song';
import Menu from './Menu';
import MenuButton from './MenuButton';
import useZoomLevel from '../hooks/useZoomLevel';
import useSongs from '../hooks/useSongs';
import usePersistentState from '../hooks/usePersistentState';

const Songbook = ({parsedSongs}) => {

    const { 
        songs,
        setChosenSong,
        starredCount,
        onlyStarred,
        selectedSong,
        toggleOnlyStarred,
        swipeChangeSong
    } = useSongs(parsedSongs);
    const [zoomLevel, pinchZoomLevel] = useZoomLevel(1, 20, 5);
    const [menuShown, setMenuShown] = usePersistentState('menuShown', false);

    const openMenu = () => setMenuShown(true);

    const closeMenu = () => setMenuShown(false);

    const chooseSong = (songNumber) => {
        setChosenSong(songNumber);
        closeMenu();
    }

    const chosenSong = songs.find(song => song.chosen);
    return (<React.Fragment>
            {!menuShown && <MenuButton onlyStarred={onlyStarred} onClick={openMenu}/>}

            <div {...swipeChangeSong()} {...pinchZoomLevel()}
                 className={`container-lg pt-1 min-vh-100 bg-white songbook zoom-level-${zoomLevel}`}>
                {!!chosenSong && <Song song={chosenSong} starredCount={starredCount}/>}
            </div>

        <Menu songs={songs} chooseSong={chooseSong} starredCount={starredCount} selectedSong={selectedSong}
            onlyStarred={onlyStarred} toggleOnlyStarred={toggleOnlyStarred}
            show={menuShown} onClose={closeMenu} />

        </React.Fragment>
    );

}

Songbook.propTypes = {
    parsedSongs: PropTypes.array.isRequired
};

export default Songbook;

