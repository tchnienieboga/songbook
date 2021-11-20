
export const smallLatinLetters = (text) => {
    return text.normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace('\u0141', 'L')
        .replace('\u0142', 'l')
        .replace(/[^a-zA-Z ]/g, '')
        .toLowerCase();
}