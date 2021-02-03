import React from 'react';
import PropTypes from 'prop-types';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

class Menu extends React.Component {

    render() {
        const {songbook, songIndex, show, chooseSong, onClose} = this.props;

        const clickSong = number => () => chooseSong(number);

        return (
            <Modal show={show} onHide={onClose} scrollable={true}>
                <Modal.Header closeButton>
                    <h5>Który numer?</h5>
                </Modal.Header>
                <Modal.Body>
                    {songbook.songs.map((song, index) => {
                        const chosenSong = index === songIndex;
                        return <React.Fragment>
                            {chosenSong ? <span className="sb-menu-songtitle font-weight-bold">{song.number}. {song.title}</span>
                                : <span className="sb-menu-songtitle">
                                    {/* eslint-disable-next-line */}
                                    <a className="text-reset" onClick={clickSong(song.number)}>{song.number}. {song.title}</a>
                                </span>}
                            <br/>
                        </React.Fragment>
                    })}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={onClose}>Zamknij</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

Menu.propTypes = {
    songbook: PropTypes.object.isRequired,
    songIndex: PropTypes.number.isRequired,
    show: PropTypes.bool.isRequired,
    chooseSong: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired
};

export default Menu;