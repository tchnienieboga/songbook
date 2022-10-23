import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Star from './Star';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTimes} from '@fortawesome/free-solid-svg-icons';

const MenuHeader = ({onlyStarred, toggleOnlyStarred, starredCount, searchText, setSearchText, onClose}) => {
    const changeSearchText = (event) => {
        setSearchText(event.target.value);
    };

    return <div className="container px-0 py-0">
        <div className="form-row">
            {!!starredCount
                ? <div className="col-2">
                    <Button variant={'info'} onClick={toggleOnlyStarred}>
                        <Star selected={onlyStarred} />
                    </Button>
                </div>
                : null}
            <div className="col-7 col-sm-5">
                {!onlyStarred
                    ? <input type="search" className="form-control" placeholder="Szukaj..."
                             autoCapitalize="none" autoCorrect="off"
                             value={searchText} onChange={changeSearchText}/>
                    : <input type="text" readOnly={true}
                             className="form-control-plaintext ml-2 font-weight-bold"
                             value={`Wybrane (${starredCount})`}/>}
            </div>
            <div className="col"/>
            <div className="col-2">
                <Button className="float-right" variant={'light'} onClick={onClose}>
                    <FontAwesomeIcon icon={faTimes} role="button" size={"lg"} onClick={onClose}/>
                </Button>
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