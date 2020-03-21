import React from 'react';
import PropTypes from 'prop-types';



class Song extends React.Component {

    parseLine(line) {
        const chordRegex = /\[.*?]/g;

        const lyrics = line.replace(chordRegex, '').trim();
        const chords = (line.match(chordRegex) || []).map(chord => chord.replace(/[[\]]/g, ''));

        return {
            lyrics,
            chords
        }
    };

    render() {
        const {song, title} = this.props;
        const lines = (song.split('\n') || []).map(this.parseLine);

        return <div>
            <h4>{title}</h4>
            {lines.map(line => <div className="row">
                <div className="col-xs-8">
                    {line.lyrics || <br/>}
                </div>
                <div className="col-xs-4">
                    {line.chords.map(chord => `${chord} `)}
                </div>
            </div>)}
        </div>;
    }
}

Song.propTypes = {
    title: PropTypes.string.isRequired,
    song: PropTypes.string.isRequired
};

export default Song;