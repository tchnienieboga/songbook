import React from 'react';
import PropTypes from 'prop-types';
import Song from './Song';
import Pinch from './Pinch';
import Menu from './Menu';
import MenuButton from './MenuButton';
import ls from '../utils/localStorage';
import Observer from './Observer';

class Songbook extends React.Component {
    defaultZoomLevel = 5;
    minimumZoomLevel = 1;
    maximumZoomLevel = 20;

    constructor(props) {
        super(props);
        this.state = {
            song: ls.chosenSong.get() || 1,
            zoomLevel: ls.zoomLevel.get() || this.defaultZoomLevel,
            menuShown: false,
        };
        this.pinchStart = this.pinchStart.bind(this);
        this.pinchContinue = this.pinchContinue.bind(this);
        this.openMenu = this.openMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
        this.chooseSong = this.chooseSong.bind(this);
    }

    pinchStart(distance) {
        this.setState(state => ({
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

    openMenu() {
        this.setState({menuShown: true});
    }

    closeMenu() {
        this.setState({menuShown: false});
    }

    chooseSong(songNumber) {
        const song = parseInt(songNumber);
        this.setState(state => ({
            song: isNaN(song) ? state.song : song,
            menuShown: false
        }));
    }

    render() {
        const {songbook} = this.props;
        const songIndex = this.state.song - 1;
        const song = songbook.songs.length > songIndex ? songbook.songs[songIndex] : null;
        return (<React.Fragment>
                {!this.state.menuShown && <MenuButton onClick={this.openMenu}/>}

                <Observer value={this.state.zoomLevel} didUpdate={ls.zoomLevel.set}/>
                <Observer value={this.state.song} didUpdate={ls.chosenSong.set}/>

                <Pinch className={`container-lg pt-1 min-vh-100 bg-white songbook zoom-level-${this.state.zoomLevel}`}
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

