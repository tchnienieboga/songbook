import React from 'react';
import PropTypes from 'prop-types';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import MenuSongTitle from "./MenuSongTitle";

class Menu extends React.Component {

    render() {
        const {songbook, songIndex, show, chooseSong, onClose} = this.props;

        return (
            <Modal show={show} onHide={onClose} scrollable={true}>
                <Modal.Header closeButton>
                    <h5>Który numer?</h5>
                </Modal.Header>
                <Modal.Body>
                    {songbook.songs.map((song, index) =>
                        <MenuSongTitle key={index} number={song.number} title={song.title} chosen={index === songIndex} onClick={chooseSong}/>)}
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