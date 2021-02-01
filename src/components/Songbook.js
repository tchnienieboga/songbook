import React from 'react';
import PropTypes from 'prop-types';
import Song from './Song';
import Pinch from './Pinch';
import Menu from "./Menu";

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
        this.setState(state => ({
            menuShown: !state.menuShown
        }));
    }

    closeMenu() {
        this.setState({
            menuShown: false
        });
    }

    render() {
        const {songbook} = this.props;
        const songIndex = this.state.song - 1;
        const song = songbook.songs.length > songIndex ? songbook.songs[songIndex] : null;
        return (<React.Fragment>
                <Pinch className={`container-lg py-1 min-vh-100 bg-white songbook zoom-level-${this.state.zoomLevel}`}
                       onPinchStart={this.pinchStart} onPinchContinue={this.pinchContinue}>

                    <button type="button" className="btn btn-light float-right" onClick={this.toggleMenu}>...</button>
                    {song && <Song key={`song${this.state.song}`} song={song}/>}
                </Pinch>
                {this.state.menuShown && <Menu songbook={songbook} onClose={this.closeMenu}/>}
            </React.Fragment>
        );
    }

}

Songbook.propTypes = {
    songbook: PropTypes.object.isRequired
};

export default Songbook;

