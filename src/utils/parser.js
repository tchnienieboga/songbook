import {smallLatinLetters} from './text';

const DIRECTIVE = 'DIRECTIVE';
const BODY_LINE = 'BODY_LINE';

const parseLine = line => {
    const directiveRegex = /{(.*):(.*)}/;

    const directiveMatch = line.match(directiveRegex);
    if (directiveMatch) {
        const directive = directiveMatch[1].trim();
        const rawValue = directiveMatch[2].trim();
        const value = directive === 'number' ? parseInt(rawValue) : rawValue;
        return {type: DIRECTIVE, directive, value}
    }

    const chordRegex = /\[.*?]/g;
    const lyrics = line.replace(chordRegex, '').trim();
    const chords = (line.match(chordRegex) || []).map(chord => chord.replace(/[[\]]/g, ''));
    const bodyLine = {lyrics, chords};

    return {type: BODY_LINE, bodyLine}
};

const parseSong = (song) => {
    const parsedLines = song.split('\n').map(parseLine);
    const body = parsedLines.filter(line => line.type === BODY_LINE).map(line => line.bodyLine);
    const firstNotEmptyHead = body.findIndex(line => line.lyrics || line.chords.length);
    const firstEmptyTail = body.length - body.slice().reverse().findIndex(line => line.lyrics || line.chords.length);
    const trimmedBody = body.slice(firstNotEmptyHead, firstEmptyTail);

    const directives = parsedLines.filter(line => line.type === DIRECTIVE).reduce((acc, val) => ({...acc, [val.directive]: val.value}), {});

    return {
        ...directives,
        latinTitle: smallLatinLetters(directives['title'] || ''),
        body: trimmedBody
    };
};

export const parseSongs = (rawSongs) => {
    return rawSongs.split(/---\s*\n/).map(parseSong);
};