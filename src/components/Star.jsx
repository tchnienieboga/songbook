import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";

const Star = ({mode}) => {
    return <FontAwesomeIcon icon={faStar} className={classNames('sb-star', `sb-star-${mode}`)}/>
}

Star.propTypes = {
    mode: PropTypes.string.isRequired,
}

export default Star;