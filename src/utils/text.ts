export const smallLatinLetters = (text: string): string => {
    return text
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[\u0142]/g, 'l')
        .replace(/[^a-z ]/g, '')
        .toLowerCase();
};
