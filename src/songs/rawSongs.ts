import { RawSong } from '../utils/types';
import songMetadata from './songMetadata';

const missingLyricsText = 'Nie mamy jeszcze tekstu do tego utworu. 😇';

const songModules = import.meta.glob('./lyrics/*.txt', {
    query: '?raw',
    import: 'default',
    eager: true
}) as Record<string, string>;

const songLyrics = Object.entries(songModules).reduce(
    (acc, [path, content]) => {
        const file = path.split('/').pop();
        if (file) {
            acc[file] = content;
        }
        return acc;
    },
    {} as Record<string, string | undefined>
);

export const rawSongs: RawSong[] = songMetadata.map(({ number, title, file }) => {
    return {
        number,
        title,
        body: songLyrics[file] || missingLyricsText
    };
});
