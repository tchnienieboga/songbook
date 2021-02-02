import React from 'react';
import PropTypes from 'prop-types';
import Song from './Song';
import Pinch from './Pinch';
import Menu from "./Menu";
import Button from "react-bootstrap/Button";

class Songbook extends React.Component {
    defaultZoomLevel = 5;
    minimumZoomLevel = 1;
    maximumZoomLevel = 20;

    constructor(props) {
        super(props);
        this.state = {
            zoomLevel: this.defaultZoomLevel,
            menuShown: false,
            song: 1
        };
        this.pinchStart = this.pinchStart.bind(this);
        this.pinchContinue = this.pinchContinue.bind(this);
        this.toggleMenu = this.toggleMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
        this.chooseSong = this.chooseSong.bind(this);
    }

    pinchStart(distance) {
        this.setState((state) => ({
            initialDistance: distance,
            initialZoomLevel: state.zoomLevel
        }));
    }

    pinchContinue(distance) {
        this.setState(state => {
            if (!state.initialDistance) {
                return {};
            }
            const ratio = distance / state.initialDistance;
            const change = Math.floor(Math.log10(ratio) * 10);
            const newZoomLevel = Math.min(Math.max(this.minimumZoomLevel, state.initialZoomLevel + change), this.maximumZoomLevel);
            return {
                zoomLevel: newZoomLevel
            };
        });
    }

    toggleMenu() {
        this.setState(state => ({menuShown: !state.menuShown}));
    }

    closeMenu() {
        this.setState({menuShown: false});
    }

    chooseSong(songNumber) {
        this.setState({song: songNumber, menuShown: false});
    }

    render() {
        const {songbook} = this.props;
        const songIndex = this.state.song - 1;
        const song = songbook.songs.length > songIndex ? songbook.songs[songIndex] : null;
        return (<React.Fragment>
                <div className="sb-menu-button">
                    <Button variant="secondary" className="shadow rounded-lg" onClick={this.toggleMenu}>☰
                    </Button>
                </div>

                <Pinch className={`container-lg pt-1 pb-5 min-vh-100 bg-white songbook zoom-level-${this.state.zoomLevel}`}
                       onPinchStart={this.pinchStart} onPinchContinue={this.pinchContinue}>

                    {song && <Song key={`song${this.state.song}`} song={song}/>}
                </Pinch>
                <Menu songbook={songbook} songIndex={songIndex} show={this.state.menuShown}
                      chooseSong={this.chooseSong} onClose={this.closeMenu}/>
            </React.Fragment>
        );
    }

}

Songbook.propTypes = {
    songbook: PropTypes.object.isRequired
};

export default Songbook;

