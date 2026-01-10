import React, {Fragment, useEffect, useRef, useState} from 'react';
import {Modal} from "react-bootstrap";
import MenuSong from './MenuSong';
import MenuHeader from './MenuHeader';
import {smallLatinLetters} from '../utils/text';
import {Song} from "../utils/types";

interface MenuProps {
    songs: Song[];
    checksum: string;
    chooseSong: (number: number) => void;
    starredCount: number;
    onlyStarred: boolean;
    toggleOnlyStarred: () => void;
    show: boolean;
    onClose: () => void;
}

const Menu = ({songs, checksum, chooseSong, starredCount, onlyStarred, toggleOnlyStarred, show, onClose}: MenuProps) => {

    const [searchText, setSearchText] = useState('');
    const songToScrollRef = useRef<HTMLBRElement>(null);

    useEffect(() => {
        if (!show || onlyStarred) {
            setSearchText('');
        }
        scrollToSong();
    }, [show, onlyStarred]);

    const getSearchPhrase = () => {
        const trimmed = searchText.trim();
        if (!trimmed) {
            return undefined;
        }
        const numericValue = parseInt(trimmed, 10);
        return Number.isNaN(numericValue) ? smallLatinLetters(trimmed) : numericValue;
    };

    const searchPhrase = getSearchPhrase();

    useEffect(() => {
        if (!searchPhrase) {
            scrollToSong();
        }
    }, [searchPhrase]);

    const filterSong = (song: Song): boolean => {
        if (!searchPhrase) {
            return true;
        }
        if (typeof searchPhrase === 'number') {
            return song.number === searchPhrase;
        }
        return song.latinTitle.includes(searchPhrase);
    }

    const scrollToSong = () => {
        songToScrollRef.current && songToScrollRef.current.scrollIntoView();
    };

    const chosenSongIndex = songs.findIndex(song => song.chosen);
    const selectedSong = songs.find(song => song.selected);
    const songToScroll = chosenSongIndex < 3 ? 0 : chosenSongIndex - 3;

    return (
        <Modal show={show} onHide={onClose} scrollable={true} animation={false}>
            <Modal.Header className="py-2 px-2">
                <MenuHeader onlyStarred={onlyStarred} toggleOnlyStarred={toggleOnlyStarred}
                            starredCount={starredCount} selectedSong={selectedSong}
                            searchText={searchText} setSearchText={setSearchText} onClose={onClose}/>
            </Modal.Header>
            <Modal.Body>
                {songs.filter(song => filterSong(song)).map((song, index) =>
                    <Fragment key={song.number}>
                        <MenuSong song={song} chooseSong={chooseSong} onlyStarred={onlyStarred}/>
                        <br ref={index === songToScroll ? songToScrollRef : null}/>
                    </Fragment>
                )}
            </Modal.Body>
            <Modal.Footer className="py-0">
                <p className="text-secondary small">Śpiewnik - Tchnienie Boga v{import.meta.env.VITE_VERSION} [{checksum}]</p>
            </Modal.Footer>
        </Modal>
    );
}

export default Menu;