import React from 'react';
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';

const Star = ({selected, large, onClick}) => {
    const size = !!large ? 'lg' : undefined;
    return <>
        <FontAwesomeIcon icon={faStar} size={size} onClick={onClick} className={
            classNames('sb-star', {'sb-star-yellow': selected})
        }/>
    </>;

}

Star.propTypes = {
    selected: PropTypes.bool.isRequired,
    large: PropTypes.bool,
    onClick: PropTypes.func
}

export default Star;