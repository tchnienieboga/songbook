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
    return <span className={classNames('sb-menu-songtitle', { 'sb-starred-song': song.starred })}>
        <span onClick={onClickStar}>
            <Star mode={starMode}/>
            &nbsp;
            <span className={classNames({ 'sb-chosen-song': song.chosen })}>
                {song.number}.&nbsp;
            </span>
        </span>
        {/* eslint-disable-next-line */}
        <a href="#" onClick={onClickSong}
            className={classNames('text-reset', { 'sb-chosen-song': song.chosen })}>
            {song.title}
        </a>
    </span>;
}

MenuSong.propTypes = {
    song: PropTypes.object.isRequired,
    chooseSong: PropTypes.func.isRequired,
    onlyStarred: PropTypes.bool.isRequired
}

export default MenuSong;