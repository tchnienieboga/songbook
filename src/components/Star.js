import React from 'react';
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons';

const Star = ({mode, large, onClick}) => {
    const size = !!large ? 'lg' : undefined;
    return <FontAwesomeIcon icon={faStar} size={size} onClick={onClick} className={`sb-star sb-star-${mode}`} />;
}

Star.propTypes = {
    mode: PropTypes.string.isRequired,
    large: PropTypes.bool,
    onClick: PropTypes.func
}

export default Star;