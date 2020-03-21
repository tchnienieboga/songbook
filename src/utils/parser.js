const DIRECTIVE = 'DIRECTIVE';
const BODY_LINE = 'BODY_LINE';

export const parseSong = (lines) => {
    const parsedLines = lines.split("\n").map(line => {
        const directiveRegex = /{(.*):(.*)}/;

        const directiveMatch = line.match(directiveRegex);
        if (directiveMatch) {
            return {
                type: DIRECTIVE,
                directive: directiveMatch[1].trim(),
                value: directiveMatch[2].trim()
            }
        }

        const chordRegex = /\[.*?]/g;
        const lyrics = line.replace(chordRegex, '').trim();
        const chords = (line.match(chordRegex) || []).map(chord => chord.replace(/[[\]]/g, ''));

        return {
            type: BODY_LINE,
            bodyLine: {lyrics, chords}
        }
    });
    const body = parsedLines.filter(line => line.type === BODY_LINE).map(line => line.bodyLine);
    const directives = parsedLines.filter(line => line.type === DIRECTIVE).reduce((acc, val) => ({...acc, [val.directive]: val.value}), {});
    return {
        ...directives,
        body
    };
};