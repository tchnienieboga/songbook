import React from 'react';
import PropTypes from 'prop-types';

class SongTitle extends React.Component {

    render() {
        const {number, title} = this.props;
        return (
            <div className="row songtitle mt-3 mb-1">
                <div className="col-12">
                    {number}. {title}
                </div>
            </div>
        );
    }

}

SongTitle.propTypes = {
    number: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
};

export default SongTitle;

