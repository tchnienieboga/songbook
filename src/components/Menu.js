import React, {useEffect, useRef, useState} from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Star from './Star';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGuitar, faTimes} from '@fortawesome/free-solid-svg-icons';
import MenuSong from './MenuSong';

const Menu = ({songs, chooseSong, starredCount, onlyStarred, toggleOnlyStarred, show, onClose}) => {

    const [searchText, setSearchText] = useState('');
    const songToScrollRef = useRef(null);

    const changeSearchText = (event) => {
        setSearchText(event.target.value);
    };

    useEffect(() => {
        if (!show || onlyStarred) {
            setSearchText('');
        }
        scrollToSong();
    }, [show, onlyStarred]);

    const getSearchPhrase = () => !searchText.trim() ? undefined
        : !isNaN(searchText) ? parseInt(searchText)
            : searchText.toLowerCase();

    const searchPhrase = getSearchPhrase();

    useEffect(() => {
        if (!searchPhrase) {
            scrollToSong();
        }
    }, [searchPhrase]);

    const scrollToSong = () => {
        songToScrollRef.current && songToScrollRef.current.scrollIntoView();
    };

    const filterSong = (number, title) => {
        if (!searchPhrase) {
            return true;
        }
        if (typeof searchPhrase === 'number') {
            return number === searchPhrase;
        }
        return title.toLowerCase().includes(searchPhrase);
    }


    const chosenSongIndex = songs.findIndex(song => song.chosen);

    const songToScroll = chosenSongIndex < 3 ? 0 : chosenSongIndex - 3;

    return (
        <Modal show={show} onHide={onClose} scrollable={true} animation={false}>
            <Modal.Header className="py-2">
                <div className="container px-0">
                    <div className="form-row">
                        {!!starredCount &&
                        <label className="col-1 col-form-label col-form-label-lg text-right">
                            <Star selected={onlyStarred} onClick={toggleOnlyStarred}/>
                        </label>
                        }
                        <div className="col-8 col-sm-6">
                            {!onlyStarred
                                ? <input type="text" className="form-control form-control-lg" placeholder="Który numer?"
                                         value={searchText} onChange={changeSearchText}/>
                                : <input type="text" readOnly={true}
                                         className="form-control-plaintext form-control-lg ml-2 font-weight-bold"
                                         value={`Wybrane (${starredCount})`}/>}
                        </div>
                        <div className="col"/>
                        <div className="col-1 text-right">
                            <FontAwesomeIcon icon={faTimes} role="button" size={"lg"} onClick={onClose}/>
                        </div>
                    </div>
                </div>
            </Modal.Header>
            <Modal.Body>
                {songs.filter(song => filterSong(song.number, song.title)).map((song, index) =>
                    <React.Fragment key={song.number}>
                        <MenuSong song={song} chooseSong={chooseSong} starredCount={starredCount}
                                  showStar={song.starred || !!searchPhrase} showCount={!onlyStarred}/>
                        <br ref={index === songToScroll ? songToScrollRef : null}/>
                    </React.Fragment>
                )}
            </Modal.Body>
            <Modal.Footer>
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