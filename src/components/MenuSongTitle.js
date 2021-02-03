import React from 'react';
import PropTypes from 'prop-types';

const MenuSongTitle = ({number, title, chosen, onClick}) => {
    const clickSong = number => () => onClick(number);

    return (
        <React.Fragment>
            {chosen ? <span className="sb-menu-songtitle font-weight-bold">{number}. {title}</span>
                : <span className="sb-menu-songtitle">
                    {/* eslint-disable-next-line */}
                    <a href="#" className="text-reset" onClick={clickSong(number)}>{number}. {title}</a>
                </span>}
            <br/>
        </React.Fragment>
    );
};

MenuSongTitle.propTypes = {
    number: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    chosen: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired
};

export default MenuSongTitle;