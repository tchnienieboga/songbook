import React from 'react';
import PropTypes from 'prop-types';
import Star from './Star';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTimes} from '@fortawesome/free-solid-svg-icons';

const MenuHeader = ({onlyStarred, toggleOnlyStarred, starredCount, searchText, setSearchText, onClose}) => {
    const changeSearchText = (event) => {
        setSearchText(event.target.value);
    };

    return <div className="container px-0">
        <div className="form-row">
            {!!starredCount && <label className="col-1 col-form-label col-form-label-lg text-right">
                <Star selected={onlyStarred} onClick={toggleOnlyStarred}/>
            </label>}
            <div className="col-8 col-sm-6">
                {!onlyStarred
                    ? <input type="text" className="form-control form-control-lg" placeholder="Który numer?"
                             value={searchText} onChange={changeSearchText}/>
                    : <input type="text" readOnly={true}
                             className="form-control-plaintext form-control-lg ml-2 font-weight-bold"
                             value={`Wybrane (${starredCount})`}/>}
            </div>
            <div className="col"/>
            <div className="col-1 text-right">
                <FontAwesomeIcon icon={faTimes} role="button" size={"lg"} onClick={onClose}/>
            </div>
        </div>
    </div>;
}

MenuHeader.propTypes = {
    onlyStarred: PropTypes.bool.isRequired,
    toggleOnlyStarred: PropTypes.func.isRequired,
    starredCount: PropTypes.number.isRequired,
    searchText: PropTypes.string.isRequired,
    setSearchText: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired
}

export default MenuHeader;