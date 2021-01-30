import React from 'react';
import {usePinch} from 'react-use-gesture';
import PropTypes from 'prop-types';


const Pinch = ({onPinchStart, onPinchContinue, className, children}) => {
    const bind = usePinch((state) => {
        if (state.first) {
            onPinchStart(state.da[0]);
        }
        onPinchContinue(state.da[0]);
    });

    return (<div {...bind()} className={className}>
        {children}
    </div>)
};

Pinch.propTypes = {
    onPinchStart: PropTypes.func.isRequired,
    onPinchContinue: PropTypes.func.isRequired,
    className: PropTypes.string
};

export default Pinch;