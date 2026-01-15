import Chord from './Chord';
import classNames from 'classnames';
import { Song } from '../utils/types';

interface SongViewProps {
    song: Song;
    chordsShown: boolean;
    starredCount: number;
}

const SongView = ({ song, chordsShown, starredCount }: SongViewProps) => {
    return (
        <>
            <div className="row songtitle mt-1 mb-1">
                <div className={classNames('col-10', { 'sb-starred-song': song.starred })}>
                    {song.number}. {song.title}
                </div>
                <div className="col-2 sb-star-info sb-lyrics">
                    {song.starred ? `${song.starredNumber}/${starredCount}` : <>&nbsp;</>}
                </div>
            </div>
            {song.body.map(({ lyrics, chords }, index) => (
                <div className="row" key={`songline${index}`}>
                    <div className="col">{lyrics || <br />}</div>
                    {chordsShown && chords.length > 0 && (
                        <div className="col-4">
                            {chords.map((chord, index) => (
                                <Chord key={index} chord={chord} />
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </>
    );
};

export default SongView;
