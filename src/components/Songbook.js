import React from 'react';
import PropTypes from 'prop-types';
import Song from "./Song";

class Songbook extends React.Component {

    render() {
        const {songbook} = this.props;
        return (
            <div>
                {songbook.songs.map((song, index) => <Song key={`song${index}`} song={song}/>)}
            </div>
        );
    }

}

Songbook.propTypes = {
    songbook: PropTypes.object.isRequired
};

export default Songbook;

