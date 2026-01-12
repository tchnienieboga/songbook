interface ChordProps {
    chord: string;
}

const Chord = ({chord}: ChordProps) => (
    <span className="sb-chord">{`${chord} `}</span>
);

export default Chord;