import { Dispatch, SetStateAction, useEffect, useState } from 'react';

const getItem = <T>(key: string): T | undefined => {
    const item = localStorage.getItem(key);
    return typeof item === 'string' ? JSON.parse(item) : undefined;
};

const setItem = <T>(key: string, value: T | undefined) => {
    if (value !== undefined) {
        localStorage.setItem(key, JSON.stringify(value));
    }
};

const usePersistentState = <T>(key: string, defaultValue: T): [T, Dispatch<SetStateAction<T>>] => {
    const [value, setValue] = useState<T>(() => {
        const value = getItem<T>(key);
        return value ? value : defaultValue;
    });

    useEffect(() => {
        setItem(key, value);
    }, [key, value]);

    return [value, setValue];
};

export default usePersistentState;
