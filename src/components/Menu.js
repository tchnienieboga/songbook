import React, {useRef} from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTimes} from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';

const Menu = ({songs, chooseSong, starredCount, onlyStarred, toggleOnlyStarred, show, onClose}) => {

    const songToScrollRef = useRef(null);
    const songToFocusRef = useRef(null);

    const scrollToSong = () => {
        songToScrollRef.current && songToScrollRef.current.scrollIntoView();
        songToFocusRef.current && songToFocusRef.current.focus();
    };

    const chosenSongIndex = songs.findIndex(song => song.chosen);

    const songToScroll = chosenSongIndex < 3 ? 0 : chosenSongIndex - 3;

    return (
        <Modal show={show} onShow={scrollToSong} onHide={onClose} scrollable={true} animation={false}>
            <Modal.Header>
                <h5>Który numer?</h5>
                <FontAwesomeIcon icon={faTimes} role="button" size={"lg"} onClick={onClose}/>
            </Modal.Header>
            <Modal.Body>
                {songs.map((song, index) => {
                    const clickSong = () => chooseSong(song.number);
                    return <React.Fragment key={song.number}>
                               <span className={classNames(
                                   'sb-menu-songtitle', {'sb-chosen-song': song.chosen}, {'sb-starred-song': song.starred})}>
                                   {/* eslint-disable-next-line */}
                                   <a href="#"
                                      ref={song.chosen ? songToFocusRef : null}
                                      className="text-reset" onClick={clickSong}>
                                       {song.number}. {song.title}
                                       {!onlyStarred && song.starred && ` (${song.starredNumber}/${starredCount})`}
                                   </a>
                               </span>
                        <br ref={index === songToScroll ? songToScrollRef : null}/>
                    </React.Fragment>
                })}
            </Modal.Body>
            <Modal.Footer>
                {!!starredCount && <Button variant={onlyStarred ? 'light' : 'info'} onClick={toggleOnlyStarred}>
                    {onlyStarred ? 'Wszystkie' : 'Wybrane'}
                </Button>}
                <Button variant="primary" onClick={onClose}>Zamknij</Button>
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