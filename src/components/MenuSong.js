import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Star from './Star';

const MenuSong = ({song, chooseSong, showStar, showCount, starredCount}) => {
    const clickSong = () => chooseSong(song.number);
    return <span className={classNames(
        'sb-menu-songtitle', {'sb-starred-song': song.starred})}>
        {/* eslint-disable-next-line */}
        <a href="#" onClick={clickSong}
           className={classNames('text-reset', {'sb-chosen-song': song.chosen})}>
            {`${song.number}. ${song.title}`}
        </a>
        {showStar && <span className="sb-star-info">
            &nbsp;
            <Star selected={song.starred} onClick={song.toggleStarred}/>
            {showCount && ` ${song.starred ? song.starredNumber : starredCount + 1}`}
        </span>}
    </span>;
}

MenuSong.propTypes = {
    song: PropTypes.object.isRequired,
    chooseSong: PropTypes.func.isRequired,
    showStar: PropTypes.bool.isRequired,
    showCount: PropTypes.bool.isRequired,
    starredCount: PropTypes.number.isRequired
}

export default MenuSong;