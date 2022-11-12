import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Star from './Star';

const MenuSong = ({song, chooseSong, selected, onClickStar}) => {
    const clickSong = () => chooseSong(song.number);
    return <span className={classNames(
        'sb-menu-songtitle', {'sb-starred-song': song.starred})}>
        {/* eslint-disable-next-line */}
        <span className="sb-star-info">
            <Star mode={selected ? 'selected' : song.starred ? 'starred' : 'plain'} onClick={onClickStar} />
            &nbsp;&nbsp;
        </span>
        <a href="#" onClick={clickSong}
           className={classNames('text-reset', {'sb-chosen-song': song.chosen})}>
            {`${song.number}. ${song.title}`}
        </a>
    </span>;
}

MenuSong.propTypes = {
    song: PropTypes.object.isRequired,
    chooseSong: PropTypes.func.isRequired,
    selected: PropTypes.bool.isRequired,
    onClickStar: PropTypes.func.isRequired
}

export default MenuSong;