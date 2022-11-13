import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Star from './Star';

const MenuSong = ({song, chooseSong, onlyStarred}) => {
    const onClickSong = () => chooseSong(song.number);
    const starMode = onlyStarred
        ? (song.selected ? 'selected' : 'starred')
        : (song.starred ? 'starred' : 'plain');
    const onClickStar = onlyStarred ? song.toggleSelected : song.toggleStarred;
    return <span className={classNames(
        'sb-menu-songtitle', {'sb-starred-song': song.starred})}>
        {/* eslint-disable-next-line */}
        <span className="sb-star-info">
            <Star mode={starMode} onClick={onClickStar}/>
            &nbsp;&nbsp;
        </span>
        <a href="#" onClick={onClickSong}
           className={classNames('text-reset', {'sb-chosen-song': song.chosen})}>
            {`${song.number}. ${song.title}`}
        </a>
    </span>;
}

MenuSong.propTypes = {
    song: PropTypes.object.isRequired,
    chooseSong: PropTypes.func.isRequired,
    onlyStarred: PropTypes.bool.isRequired
}

export default MenuSong;