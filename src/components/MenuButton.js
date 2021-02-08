import React from 'react';
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGuitar} from '@fortawesome/free-solid-svg-icons';

const MenuButton = ({onClick}) => {
    const onKeyPress = e => {
        const enterOrSpace = e.key === "Enter" || e.key === " " || e.key === "Spacebar" ||
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
                <FontAwesomeIcon icon={faGuitar} size="lg"/>
            </div>
        </div>
    );
};

MenuButton.propTypes = {
    onClick: PropTypes.func.isRequired
};

export default MenuButton;