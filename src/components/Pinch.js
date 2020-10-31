import React from 'react';
import {usePinch} from 'react-use-gesture';


const Pinch = (props) => {

    const bind = usePinch((state) => {
        if (state.first) {
            props.onPinchStart(state.da[0]);
        }
        props.onPinchContinue(state.da[0]);
    });

    return (<div {...bind()}>
        {props.children}
    </div>)
};

export default Pinch;