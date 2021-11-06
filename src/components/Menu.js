import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTimes} from '@fortawesome/free-solid-svg-icons';
import classNames from "classnames";

class Menu extends React.Component {

    constructor(props) {
        super(props);

        this.songToScrollRef = React.createRef();
        this.songToFocusRef = React.createRef();
    }

    scrollToSong = () => {
        this.songToScrollRef.current.scrollIntoView();
        this.songToFocusRef.current.focus();
    };

    render() {
        const {songs, songIndex, show, chooseSong, onClose} = this.props;
        const scrollIndex = songIndex < 3 ? 0 : songIndex - 3;

        return (
            <Modal show={show} onShow={this.scrollToSong} onHide={onClose} scrollable={true} animation={false}>
                <Modal.Header>
                    <h5>Który numer?</h5>
                    <FontAwesomeIcon icon={faTimes} role="button" size={"lg"} onClick={onClose}/>
                </Modal.Header>
                <Modal.Body>
                    {songs.map((song, index) => {
                        const chosen = index === songIndex;
                        const clickSong = number => () => chooseSong(number);
                        return <React.Fragment key={index}>
                               <span className={classNames('sb-menu-songtitle', {'font-weight-bold': chosen})}>
                                         {/* eslint-disable-next-line */}
                                         <a href="#"
                                         ref={chosen ? this.songToFocusRef : null}
                                            className="text-reset" onClick={clickSong(song.number)}>{song.number}. {song.title}
                                         </a>
                               </span>
                            <br ref={index === scrollIndex ? this.songToScrollRef : null}/>
                        </React.Fragment>
                    })}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="info" onClick={onClose}>Zamknij</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

Menu.propTypes = {
    songs: PropTypes.array.isRequired,
    songIndex: PropTypes.number.isRequired,
    show: PropTypes.bool.isRequired,
    chooseSong: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired
};

export default Menu;