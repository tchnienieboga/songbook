import React from 'react';
import PropTypes from 'prop-types';

class SongTitle extends React.Component {

    render() {
        const {number, title} = this.props;
        return (
            <div className={"songtitle"}>{number}. {title}</div>
        );
    }

}

SongTitle.propTypes = {
    number: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
};

export default SongTitle;

