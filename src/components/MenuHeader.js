import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Star from './Star';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTimes} from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';

const MenuHeader = ({onlyStarred, toggleOnlyStarred, starredCount, searchText, setSearchText, onClose}) => {
    const changeSearchText = (event) => {
        setSearchText(event.target.value);
    };

    return <>
        <div className="col-10 px-1">
            <div className="form-row px-1">
                {!!starredCount
                    ? <Button className="mx-1" variant={'info'} onClick={toggleOnlyStarred}>
                        <Star mode={onlyStarred ? 'chosen' : 'plain'} />
                        <span className={classNames({'font-weight-bold': onlyStarred})}>&nbsp;{starredCount}</span>
                    </Button>
                    : null}
                {!onlyStarred
                    ? <input type="search" className="form-control col-8 mx-2" placeholder="Szukaj..."
                        autoCapitalize="none" autoCorrect="off"
                        value={searchText} onChange={changeSearchText} />
                    : <input type="text" readOnly={true}
                        className="form-control-plaintext col-8 ml-1 font-weight-bold"
                        value={`Wybrane`} />}
            </div>
        </div>
        <div className="col-2 px-1">
            <Button className="float-right" variant={'light'} onClick={onClose}>
                <FontAwesomeIcon icon={faTimes} role="button" size={"lg"} onClick={onClose} />
            </Button>
        </div>
    </>;
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