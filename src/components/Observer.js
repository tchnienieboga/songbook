import React from 'react';

const Observer = ({ value, didUpdate }) => {
    React.useEffect(() => {
        didUpdate(value)
    }, [value, didUpdate]);
    return null;
};

export default Observer;


