import React from 'react';
import PropTypes from 'prop-types';
import './Songbook.css'
import Song from './Song';
import Pinch from './Pinch';

class Songbook extends React.Component {
    defaultFontSize = 14;

    constructor(props) {
        super(props);
        this.state = {fontSize: this.defaultFontSize};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({
            ...state,
            fontSize: state.fontSize + 1
        }))
    }

    render() {
        const {songbook} = this.props;
        return (
            <Pinch>
                <div className={"songbook"} style={{fontSize: this.state.fontSize + "px"}}>
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

