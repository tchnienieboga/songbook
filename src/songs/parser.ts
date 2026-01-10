import {smallLatinLetters} from '../utils/text';
import {ParsedSong, ParsedSongbook, SongLine} from "../utils/types";

const LineType = {
    DIRECTIVE: 'DIRECTIVE',
    BODY_LINE: 'BODY_LINE'
} as const;

interface DirectiveMap {
    title: string;
    number: number;
}

type DirectiveName = keyof DirectiveMap;

interface DirectiveLine<K extends DirectiveName = DirectiveName> {
    type: typeof LineType.DIRECTIVE;
    directive: K;
    value: DirectiveMap[K];
}

interface BodyLine {
    type: typeof LineType.BODY_LINE;
    body: SongLine;
}

type ParsedLine = DirectiveLine | BodyLine

const isValidDirective = (key: string): key is DirectiveName => {
    return ['title', 'number'].includes(key);
}

const parseLine = (line: string): ParsedLine | null => {
    const directiveRegex = /{(.*):(.*)}/;

    const directiveMatch = line.match(directiveRegex);
    if (directiveMatch) {
        const directive = directiveMatch[1].trim();
        const rawValue = directiveMatch[2].trim();
        if (!isValidDirective(directive)) {
            return null;
        }
        return {
            type: LineType.DIRECTIVE,
            directive,
            value: directive === 'number' ? parseInt(rawValue) : rawValue
        };
    }

    const chordRegex = /\[.*?]/g;
    const lyrics = line.replace(chordRegex, '').trim();
    const chords = (line.match(chordRegex) || []).map(chord => chord.replace(/[[\]]/g, ''));
    const body = {lyrics, chords};

    return {type: LineType.BODY_LINE, body}
};

const parseSong = (song: string): ParsedSong | null  => {
    const parsedLines = song.split('\n').map(parseLine).filter((line): line is ParsedLine => line !== null);
    const body = parsedLines.filter(line => line.type === LineType.BODY_LINE).map(line => line.body);
    const firstNotEmptyHead = body.findIndex(line => line.lyrics || line.chords.length);
    const firstEmptyTail = body.length - body.slice().reverse().findIndex(line => line.lyrics || line.chords.length);
    const trimmedBody = body.slice(firstNotEmptyHead, firstEmptyTail);

    const directives = parsedLines
        .filter(line => line.type === LineType.DIRECTIVE)
        .reduce<Partial<DirectiveMap>>((acc, val) => ({...acc, [val.directive]: val.value}), {});

    if (directives.title === undefined || directives.number === undefined) {
        return null;
    }

    return {
        title: directives.title,
        number: directives.number,
        latinTitle: smallLatinLetters(directives.title || ''),
        body: trimmedBody
    };
};

const getChecksum = (s: string): string => {
    let hash = 0;
    for (let i = 0; i < s.length; i++) {
        hash = ((hash << 5) - hash) + s.charCodeAt(i);
        hash = hash & 0xFFFF;
    }

    return hash.toString(16).toUpperCase().padStart(4, '0');
}

export const parseSongbook = (rawSongs: string): ParsedSongbook => {
    const songs = rawSongs.split(/---\s*\n/).map(parseSong).filter((song): song is ParsedSong => song !== null);
    return {
        songs,
        checksum: getChecksum(rawSongs)
    };
};