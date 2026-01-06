import React from 'react';
import { memo } from 'react';
import classNames from 'classnames';
import Star, {Mode, StarMode} from './Star';
import {Song} from "../utils/types";

interface MenuSongProps {
    song: Song;
    chooseSong: (number: number) => void;
    onlyStarred: boolean;
}

const MenuSong = memo(({song, chooseSong, onlyStarred}: MenuSongProps) => {
    const onClickSong = () => chooseSong(song.number);
    const starMode: StarMode = onlyStarred
        ? (song.selected ? Mode.SELECTED : Mode.STARRED)
        : (song.starred ? Mode.STARRED : Mode.PLAIN);
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
});

export default MenuSong;