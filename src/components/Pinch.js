import React from 'react';
import {usePinch} from 'react-use-gesture';


const Pinch = (props) => {

    const bind = usePinch((state) => console.log(state.da));

    return (<div {...bind()}>
        {props.children}
    </div>)
};

export default Pinch;