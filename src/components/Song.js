import React from 'react';
import PropTypes from 'prop-types';
import Chord from './Chord';
import classNames from 'classnames';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons';

const Song = ({song, starredCount}) => {
    return <>
        <div className="row songtitle mt-1 mb-1">
            <div className={classNames('col-10', {'sb-starred-song': song.starred})}>
                {song.number}. {song.title}
            </div>
            <div className="col-2 sb-song-title-star" onClick={song.toggleStarred}>
                <FontAwesomeIcon icon={faStar} size="lg" className={classNames({'yellow-star': song.starred})}/>
                <br/>
                {song.starred ? `${song.starredNumber}/${starredCount}` : <>&nbsp;</>}
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
    </>;

}

Song.propTypes = {
    song: PropTypes.object.isRequired,
    starredCount: PropTypes.number.isRequired
};

export default Song;