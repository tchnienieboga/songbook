import React from 'react';
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGuitar} from "@fortawesome/free-solid-svg-icons";

const MenuButton = ({onClick}) => (
    <div className="sb-menu-button shadow rounded-circle"
         role="button" onClick={onClick}>
        <div className="sb-menu-button-icon d-flex justify-content-center align-items-center my-auto">
            <FontAwesomeIcon icon={faGuitar} size="lg"/>
        </div>
    </div>
);

MenuButton.propTypes = {
    onClick: PropTypes.func.isRequired
};

export default MenuButton;