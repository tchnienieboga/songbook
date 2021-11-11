import React from 'react';
import PropTypes from 'prop-types';
import Chord from './Chord';
import classNames from 'classnames';

const Song = ({song, starred, toggleStarred}) => {

    return <React.Fragment>
        <div className="row songtitle mt-1 mb-1">
            <div className={classNames('col-12', {'sb-starred-song': starred.starred})} onClick={toggleStarred}>
                {song.number}. {song.title} {starred.starred && ` (${starred.number}/${starred.count})`}
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

Song.propTypes = {
    song: PropTypes.object.isRequired,
    starred: PropTypes.object.isRequired,
    toggleStarred: PropTypes.func.isRequired
};

export default Song;