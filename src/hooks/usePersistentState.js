import {useEffect, useState} from 'react';

const getItem = (key) => {
    const item = localStorage.getItem(key);
    return (typeof item) === 'string' ? JSON.parse(item) : undefined;
};

const setItem = (key, value) => {
    if (value) {
        localStorage.setItem(key, JSON.stringify(value));
    }
};

const usePersistentState = (key, defaultValue) => {

    const [value, setValue] = useState(() => {
        const value = getItem(key);
        return value ? value : defaultValue;
    });

    useEffect(() => {
        setItem(key, value)
    }, [key, value]);

    return [value, setValue];

};

export default usePersistentState;
