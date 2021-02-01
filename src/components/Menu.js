import React from 'react';
import PropTypes from 'prop-types';

class Menu extends React.Component {

    render() {
        const {songbook, onClose} = this.props;

        return <React.Fragment>
            <div className="modal" style={{display: "block"}} tabIndex="-1" role="dialog">
                <div className="modal-dialog modal-dialog-scrollable" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Menu</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={onClose}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={onClose}>Zamknij</button>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>;
    }
}

Menu.propTypes = {
    songbook: PropTypes.object.isRequired,
    onClose: PropTypes.func.isRequired
};

export default Menu;