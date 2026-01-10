export type SongLine = {
    lyrics: string;
    chords: string[];
};

export interface ParsedSong {
    title: string;
    number: number;
    latinTitle: string;
    body: SongLine[];
}

export interface ParsedSongbook {
    songs: ParsedSong[],
    checksum: string;
}

export interface SongState {
    chosen: boolean;
    starredNumber: number;
    starred: boolean;
    toggleStarred: () => void;
    selected: boolean;
    toggleSelected: () => void;
    moveUp: (() => void) | undefined;
    moveDown: (() => void) | undefined
}

export interface Song extends ParsedSong, SongState {
}
