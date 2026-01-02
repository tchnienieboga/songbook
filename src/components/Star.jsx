import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Star = ({mode, large, onClick}) => {
    return <i className={classNames('fas', 'fa-star', 'sb-star', `sb-star-${mode}`, {'fa-lg': !!large})} onClick={onClick}></i>;
}

Star.propTypes = {
    mode: PropTypes.string.isRequired,
    large: PropTypes.bool,
    onClick: PropTypes.func
}

export default Star;