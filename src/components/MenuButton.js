import React from 'react';
import PropTypes from 'prop-types';
import Star from './Star';

const MenuButton = ({onlyStarred, onClick}) => {
    const onKeyPress = e => {
        const enterOrSpace = e.key === 'Enter' || e.key === " " || e.key === 'Spacebar' ||
            e.which === 13 || e.which === 32;
        if (enterOrSpace) {
            e.preventDefault();
            onClick(e);
        }
    };
    return (
        <div className="sb-menu-button shadow rounded-circle"
             tabIndex="0"
             role="button" onClick={onClick} onKeyPress={onKeyPress}>
            <div className="sb-menu-button-icon d-flex justify-content-center align-items-center my-auto">
                <Star selected={onlyStarred}/>
            </div>
        </div>
    );
};

MenuButton.propTypes = {
    onlyStarred: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired
};

export default MenuButton;