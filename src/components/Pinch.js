import React from 'react';
import {useGesture} from 'react-use-gesture';
import PropTypes from 'prop-types';

const Pinch = ({onPinchStart, onPinchContinue, onSwipeX, className, children}) => {
    const bind = useGesture(
        {
            onDragEnd: state => {
                const [swipeX] = state.swipe;
                if (swipeX !== 0) {
                    onSwipeX(swipeX);
                }
            },
            onPinch: state => {
                if (state.first) {
                    onPinchStart(state.da[0]);
                }
                onPinchContinue(state.da[0]);
            }
        }, {
        }
    );

    return (<div {...bind()} className={className}>
        {children}
    </div>)
};

Pinch.propTypes = {
    onPinchStart: PropTypes.func.isRequired,
    onPinchContinue: PropTypes.func.isRequired,
    onSwipeX: PropTypes.func.isRequired,
    className: PropTypes.string
};

export default Pinch;