import React from 'react';
import PropTypes from 'prop-types';
import Song from './Song';
import Pinch from './Pinch';

class Songbook extends React.Component {
    defaultZoomLevel = 5;
    minimumZoomLevel = 1;
    maximumZoomLevel = 20;

    constructor(props) {
        super(props);
        this.state = {zoomLevel: this.defaultZoomLevel};
        this.pinchStart = this.pinchStart.bind(this);
        this.pinchContinue = this.pinchContinue.bind(this);
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


    render() {
        const {songbook} = this.props;
        return (
            <Pinch className={`container-lg bg-white py-1 songbook zoom-level-${this.state.zoomLevel}`}
                   onPinchStart={this.pinchStart} onPinchContinue={this.pinchContinue}>
                {songbook.songs.map((song, index) => <Song key={`song${index}`} song={song}/>)}
            </Pinch>
        );
    }

}

Songbook.propTypes = {
    songbook: PropTypes.object.isRequired
};

export default Songbook;

