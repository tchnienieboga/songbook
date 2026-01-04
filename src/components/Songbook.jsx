import React, {useRef} from 'react';
import PropTypes from 'prop-types';
import Song from './Song';
import Menu from './Menu';
import MenuButtons from './MenuButtons';
import useZoomLevel from '../hooks/useZoomLevel';
import useSongs from '../hooks/useSongs';
import usePersistentState from '../hooks/usePersistentState';

const Songbook = ({parsedSongs}) => {

    const songContainer = useRef(null);

    const {
        songs,
        setChosenSong,
        starredCount,
        onlyStarred,
        selectedSong,
        toggleOnlyStarred
    } = useSongs(parsedSongs, songContainer);

    const [zoomLevel] = useZoomLevel(1, 20, 5, songContainer);
    const [menuShown, setMenuShown] = usePersistentState('menuShown', false);
    const [chordsShown, setChordsShown] = usePersistentState('chordsShown', true);

    const openMenu = () => setMenuShown(true);

    const closeMenu = () => setMenuShown(false);

    const showChords = () => setChordsShown(true);

    const hideChords = () => setChordsShown(false);

    const chooseSong = (songNumber) => {
        setChosenSong(songNumber);
        closeMenu();
    }

    const chosenSong = songs.find(song => song.chosen);
    return (<React.Fragment>
            {!menuShown && <MenuButtons onlyStarred={onlyStarred} chordsShown={chordsShown}
                                        onClickMenu={openMenu} onClickGuitar={chordsShown ? hideChords : showChords}/>}

            <div ref={songContainer}
                 className={`container-lg pt-1 min-vh-100 bg-white songbook zoom-level-${zoomLevel}`}>
                {!!chosenSong && <Song song={chosenSong} starredCount={starredCount} chordsShown={chordsShown}/>}
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

