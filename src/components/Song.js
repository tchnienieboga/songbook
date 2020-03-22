import React from 'react';
import PropTypes from 'prop-types';

class Song extends React.Component {

    render() {
        const {song} = this.props;

        return <div>
            <h4>{song.number}. {song.title}</h4>
            {song.body.map(({lyrics, chords}, index) => <div className="row" key={`songline${index}`}>
                <div className="col-xs-8">
                    {lyrics || <br/>}
                </div>
                <div className="col-xs-4">
                    {chords.map(chord => `${chord} `)}
                </div>
            </div>)}
        </div>;
    }
}

Song.propTypes = {
    song: PropTypes.object.isRequired
};

export default Song;