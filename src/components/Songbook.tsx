import { useRef } from 'react';
import SongView from './SongView';
import Menu from './Menu';
import MenuButtons from './MenuButtons';
import useSongs from '../hooks/useSongs';
import usePersistentState from '../hooks/usePersistentState';
import { ParsedSongbook } from '../utils/types';

interface SongbookProps {
    parsedSongbook: ParsedSongbook;
}

const Songbook = ({ parsedSongbook }: SongbookProps) => {
    const songContainer = useRef<HTMLDivElement>(null);

    const { songs, setChosenSong, starredCount, onlyStarred, toggleOnlyStarred, zoomLevel } = useSongs({
        parsedSongs: parsedSongbook.songs,
        minZoom: 1,
        maxZoom: 20,
        defaultZoom: 5,
        gesturesTarget: songContainer
    });

    const [menuShown, setMenuShown] = usePersistentState('menuShown', false);
    const [chordsShown, setChordsShown] = usePersistentState('chordsShown', true);

    const openMenu = () => setMenuShown(true);

    const closeMenu = () => setMenuShown(false);

    const showChords = () => setChordsShown(true);

    const hideChords = () => setChordsShown(false);

    const chooseSong = (songNumber: number) => {
        setChosenSong(songNumber);
        closeMenu();
    };

    const chosenSong = songs.find((song) => song.chosen);
    return (
        <>
            {!menuShown && (
                <MenuButtons
                    onlyStarred={onlyStarred}
                    chordsShown={chordsShown}
                    onClickMenu={openMenu}
                    onClickGuitar={chordsShown ? hideChords : showChords}
                />
            )}

            <div
                ref={songContainer}
                className={`container-lg pt-1 min-vh-100 bg-white songbook zoom-level-${zoomLevel}`}>
                {!!chosenSong && <SongView song={chosenSong} starredCount={starredCount} chordsShown={chordsShown} />}
            </div>

            <Menu
                songs={songs}
                checksum={parsedSongbook.checksum}
                chooseSong={chooseSong}
                starredCount={starredCount}
                onlyStarred={onlyStarred}
                toggleOnlyStarred={toggleOnlyStarred}
                show={menuShown}
                onClose={closeMenu}
            />
        </>
    );
};

export default Songbook;
