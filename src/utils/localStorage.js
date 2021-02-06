const LOCAL_STORAGE_CHOSEN_SONG = 'chosenSong';
const LOCAL_STORAGE_ZOOM_LEVEL = 'zoomLevel';

const getItem = (key) => {
    const item = localStorage.getItem(key);
    return (typeof item) === 'string' ? JSON.parse(item) : undefined;
};

const setItem = (key, value) => {
    if ((typeof value) !== 'undefined') {
        localStorage.setItem(key, JSON.stringify(value));
    }
};

const ls = {
    chosenSong: {
        get: () => getItem(LOCAL_STORAGE_CHOSEN_SONG),
        set: (value) => setItem(LOCAL_STORAGE_CHOSEN_SONG, value)
    },
    zoomLevel: {
        get: () => getItem(LOCAL_STORAGE_ZOOM_LEVEL),
        set: (value) => setItem(LOCAL_STORAGE_ZOOM_LEVEL, value)
    }
};

export default ls;
