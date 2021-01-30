import React from 'react';
import PropTypes from 'prop-types';
import SongTitle from './SongTitle';

class Song extends React.Component {

    render() {
        const {song} = this.props;

        return <React.Fragment>
            <SongTitle number={song.number} title={song.title}/>
            {song.body.map(({lyrics, chords}, index) => <div className="row" key={`songline${index}`}>
                <div className="col">
                    {lyrics || <br/>}
                </div>
                {chords.length > 0 && <div className="col-4">
                    {chords.map(chord => `${chord} `)}
                </div>}
            </div>)}
        </React.Fragment>;
    }
}

Song.propTypes = {
    song: PropTypes.object.isRequired
};

export default Song;