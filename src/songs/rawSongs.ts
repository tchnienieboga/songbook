import { RawSong } from '../utils/types';

const songModules = import.meta.glob('./lyrics/*.txt', {
    query: '?raw',
    import: 'default',
    eager: true
}) as Record<string, string>;

const parseSongNumber = (filename: string): number => {
    const parts = filename.split('-');
    if (parts.length < 1) return 0;
    const songNumber = Number.parseInt(parts[0], 10);
    return Number.isNaN(songNumber) ? 0 : songNumber;
};

export const rawSongs: RawSong[] = Object.entries(songModules)
    .map(([path, content]) => {
        const file = path.split('/').pop() || '';
        const number = parseSongNumber(file);
        const song = content;
        const title = song.match(/^.*/m)?.[0] || '';
        const body = song.replace(/^.*\n?/, '');

        return { number, title, body };
    })
    .sort((a, b) => a.number - b.number);
