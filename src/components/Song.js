import React from 'react';
import PropTypes from 'prop-types';
import Chord from './Chord';

class Song extends React.Component {

    render() {
        const {song} = this.props;

        return <React.Fragment>
            <div className="row songtitle mt-1 mb-1">
                <div className="col-12">
                    {song.number}. {song.title}
                </div>
            </div>
            {song.body.map(({lyrics, chords}, index) => <div className="row" key={`songline${index}`}>
                <div className="col">
                    {lyrics || <br/>}
                </div>
                {chords.length > 0 && <div className="col-4">
                    {chords.map((chord, index) => <Chord key={index} chord={chord}/>)}
                </div>}
            </div>)}
        </React.Fragment>;
    }
}

Song.propTypes = {
    song: PropTypes.object.isRequired
};

export default Song;