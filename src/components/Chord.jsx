import React from 'react';
import PropTypes from 'prop-types';

const Chord = ({chord}) => (
    <span className="sb-chord">{`${chord} `}</span>
);

Chord.propTypes = {
    chord: PropTypes.string.isRequired
};

export default Chord;