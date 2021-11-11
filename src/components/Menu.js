import React, {useRef} from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTimes} from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';

const Menu = ({songs, chooseSong, starredCount, show, onClose}) => {

    const songToScrollRef = useRef(null);
    const songToFocusRef = useRef(null);

    const scrollToSong = () => {
        songToScrollRef.current.scrollIntoView();
        songToFocusRef.current.focus();
    };

    const chosenSong = songs.find(song => song.chosen).number;

    const songToScroll = chosenSong < 4 ? 1 : chosenSong - 3;

    return (
        <Modal show={show} onShow={scrollToSong} onHide={onClose} scrollable={true} animation={false}>
            <Modal.Header>
                <h5>Który numer?</h5>
                <FontAwesomeIcon icon={faTimes} role="button" size={"lg"} onClick={onClose}/>
            </Modal.Header>
            <Modal.Body>
                {songs.map((song) => {
                    const clickSong = () => chooseSong(song.number);
                    return <React.Fragment key={song.number}>
                               <span className={classNames(
                                   'sb-menu-songtitle', {'sb-chosen-song': song.chosen}, {'sb-starred-song': song.starred})}>
                                   {/* eslint-disable-next-line */}
                                   <a href="#"
                                      ref={song.chosen ? songToFocusRef : null}
                                      className="text-reset" onClick={clickSong}>
                                       {song.number}. {song.title} {song.starred && ` (${song.starredNumber}/${starredCount})`}
                                   </a>
                               </span>
                        <br ref={song.number === songToScroll ? songToScrollRef : null}/>
                    </React.Fragment>
                })}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="info" onClick={onClose}>Zamknij</Button>
            </Modal.Footer>
        </Modal>
    );
}

Menu.propTypes = {
    songs: PropTypes.array.isRequired,
    chooseSong: PropTypes.func.isRequired,
    starredCount: PropTypes.number.isRequired,
    show: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired
};

export default Menu;