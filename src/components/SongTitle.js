import React from 'react';
import PropTypes from 'prop-types';
import './SongTitle.css';

class SongTitle extends React.Component {

    render() {
        const {number, title} = this.props;
        return (
            <div className={"songtitle"}>{number}. {title}</div>
        );
    }

}

SongTitle.propTypes = {
    number: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired
};

export default SongTitle;

