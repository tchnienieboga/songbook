import React, {useRef} from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faStar, faTimes} from '@fortawesome/free-solid-svg-icons';
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
                <h5>
                    {!!starredCount && <FontAwesomeIcon icon={faStar} onClick={toggleOnlyStarred} className={classNames({
                        'sb-star': true,
                        'sb-star-yellow': onlyStarred
                    })}/>}
                    {!onlyStarred ? ' Który numer?' : ' Wybrane'}
                </h5>
                <FontAwesomeIcon icon={faTimes} role="button" size={"lg"} onClick={onClose}/>
            </Modal.Header>
            <Modal.Body>
                {songs.map((song, index) => {
                    const clickSong = () => chooseSong(song.number);
                    return <React.Fragment key={song.number}>
                        <span className={classNames(
                            'sb-menu-songtitle', {'sb-starred-song': song.starred})}>
                            {/* eslint-disable-next-line */}
                            <a href="#" onClick={clickSong}
                               className={classNames('text-reset', {'sb-chosen-song': song.chosen})}
                               ref={song.chosen ? songToFocusRef : null}>
                                {`${song.number}. ${song.title}`}
                            </a>
                            {!onlyStarred && song.starred && <span className="sb-star-info">
                                &nbsp;
                                <FontAwesomeIcon icon={faStar} className="sb-star sb-star-yellow"/>
                                {` (${song.starredNumber}/${starredCount})`}
                            </span>}
                        </span>
                        <br ref={index === songToScroll ? songToScrollRef : null}/>
                    </React.Fragment>
                })}
            </Modal.Body>
            <Modal.Footer>
                {!!starredCount && <Button variant={'info'} onClick={toggleOnlyStarred}>
                    {onlyStarred ? 'Wszystkie' : <><FontAwesomeIcon icon={faStar} className="sb-star sb-star-yellow" />{' Wybrane'}</>}
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