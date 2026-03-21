import { smallLatinLetters } from '../utils/text';
import { ParsedSong, ParsedSongbook, RawSong, SongLine } from '../utils/types';
import { rawSongs } from './rawSongs';

const parseLine = (line: string): SongLine => {
    const chordRegex = /\[.*?]/g;

    const lyrics = line.replace(chordRegex, '').trim();
    const chords = (line.match(chordRegex) || []).map((chord) => chord.replace(/[[\]]/g, ''));
    return { lyrics, chords };
};

const parseSong = (song: RawSong): ParsedSong => {
    const body = song.body.split('\n').map(parseLine);

    const firstNotEmptyHead = body.findIndex((line) => line.lyrics || line.chords.length);
    const firstEmptyTail =
        body.length -
        body
            .slice()
            .reverse()
            .findIndex((line) => line.lyrics || line.chords.length);

    const trimmedBody = body.slice(firstNotEmptyHead, firstEmptyTail);

    return {
        title: song.title,
        number: song.number,
        latinTitle: smallLatinLetters(song.title),
        body: trimmedBody
    };
};

const getChecksum = (songs: ParsedSong[]): string => {
    let hash = 0;
    const updateHash = (val: string | number) => {
        const str = val.toString();
        for (let i = 0; i < str.length; i++) {
            hash = (hash << 5) - hash + str.charCodeAt(i);
            hash = hash & 0xffff;
        }
    };

    for (const song of songs) {
        updateHash(song.number);
        updateHash(song.title);
        updateHash(song.latinTitle);
        for (const line of song.body) {
            updateHash(line.lyrics);
            for (const chord of line.chords) {
                updateHash(chord);
            }
        }
    }

    return hash.toString(16).toUpperCase().padStart(4, '0');
};

const parseSongbook = (rawSongs: RawSong[]): ParsedSongbook => {
    const songs = rawSongs.map(parseSong);
    const checksum = getChecksum(songs);
    return { songs, checksum };
};

export const parsedSongbook = parseSongbook(rawSongs);
