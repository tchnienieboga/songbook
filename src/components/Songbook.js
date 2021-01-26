import React from 'react';
import PropTypes from 'prop-types';
import './Songbook.css'
import Song from './Song';
import Pinch from './Pinch';

class Songbook extends React.Component {
    defaultFontSize = 16;
    minimumFontSize = 8;
    maximumFontSize = 64;

    constructor(props) {
        super(props);
        this.state = {fontSize: this.defaultFontSize};
        this.pinchStart = this.pinchStart.bind(this);
        this.pinchContinue = this.pinchContinue.bind(this);
    }

    pinchStart(distance) {
        this.setState((state) => ({
            initialDistance: distance,
            initialFontSize: state.fontSize
        }));
    }

    pinchContinue(distance) {
        this.setState(state => {
            if (!state.initialDistance) {
                return {};
            }
            const ratio = distance / state.initialDistance;
            const newFontSize = Math.min(Math.max(this.minimumFontSize, Math.floor(state.initialFontSize * ratio)), this.maximumFontSize);
            return {
                fontSize: newFontSize
            };
        });
    }


    render() {
        const {songbook} = this.props;
        return (
            <Pinch onPinchStart={this.pinchStart} onPinchContinue={this.pinchContinue}>
                <div className="songbook py-1" style={{fontSize: this.state.fontSize + "px"}}>
                    {songbook.songs.map((song, index) => <Song key={`song${index}`} song={song}/>)}
                </div>
            </Pinch>
        );
    }

}

Songbook.propTypes = {
    songbook: PropTypes.object.isRequired
};

export default Songbook;

