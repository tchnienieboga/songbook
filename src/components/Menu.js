import React, {useEffect, useRef, useState} from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Star from './Star';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGuitar} from '@fortawesome/free-solid-svg-icons';
import MenuSong from './MenuSong';
import MenuHeader from './MenuHeader';
import {smallLatinLetters} from '../utils/text';

const Menu = ({songs, chooseSong, starredCount, onlyStarred, toggleOnlyStarred, show, onClose}) => {

    const [searchText, setSearchText] = useState('');
    const songToScrollRef = useRef(null);

    useEffect(() => {
        if (!show || onlyStarred) {
            setSearchText('');
        }
        scrollToSong();
    }, [show, onlyStarred]);

    const getSearchPhrase = () => !searchText.trim() ? undefined
        : !isNaN(searchText) ? parseInt(searchText)
            : smallLatinLetters(searchText.trim());

    const searchPhrase = getSearchPhrase();

    useEffect(() => {
        if (!searchPhrase) {
            scrollToSong();
        }
    }, [searchPhrase]);

    const filterSong = (song) => {
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

    const songToScroll = chosenSongIndex < 3 ? 0 : chosenSongIndex - 3;

    return (
        <Modal show={show} onHide={onClose} scrollable={true} animation={false}>
            <Modal.Header className="py-2">
                <MenuHeader onlyStarred={onlyStarred} toggleOnlyStarred={toggleOnlyStarred} starredCount={starredCount}
                            searchText={searchText} setSearchText={setSearchText} onClose={onClose}/>
            </Modal.Header>
            <Modal.Body>
                {songs.filter(song => filterSong(song)).map((song, index) =>
                    <React.Fragment key={song.number}>
                        <MenuSong song={song} chooseSong={chooseSong} starredCount={starredCount}
                                  showStar={song.starred || !!searchPhrase} showCount={!onlyStarred}/>
                        <br ref={index === songToScroll ? songToScrollRef : null}/>
                    </React.Fragment>
                )}
            </Modal.Body>
            <Modal.Footer className="py-1">
                {!!starredCount && <Button variant={'info'} onClick={toggleOnlyStarred}>
                    {onlyStarred
                        ? <><FontAwesomeIcon icon={faGuitar} size="lg"/>{' Wszystkie'}</>
                        : <><Star selected={true}/>{` Wybrane (${starredCount})`}</>
                    }
                </Button>}
                <Button variant="secondary" onClick={onClose}>Zamknij</Button>
            </Modal.Footer>
        </Modal>
    );
}

Menu.propTypes = {
    songs: PropTypes.array.isRequired,
    chooseSong: PropTypes.func.isRequired,
    starredCount: PropTypes.number.isRequired,
    onlyStarred: PropTypes.bool.isRequired,
    toggleOnlyStarred: PropTypes.func.isRequired,
    show: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired
};

export default Menu;