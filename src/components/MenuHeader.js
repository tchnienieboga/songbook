import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Star from './Star';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCaretDown, faCaretUp, faListUl, faTimes, faTrash} from '@fortawesome/free-solid-svg-icons';

const MenuHeader = ({
                        onlyStarred,
                        toggleOnlyStarred,
                        starredCount,
                        selectedSong,
                        searchText,
                        setSearchText,
                        onClose
                    }) => {
    const changeSearchText = (event) => {
        setSearchText(event.target.value);
    };

    return <>
        {!!starredCount
            ? <div className="me-2">
                <Button variant={'info'} onClick={toggleOnlyStarred}>
                    {onlyStarred
                        ? <FontAwesomeIcon icon={faListUl} role="button" size={"lg"}/>
                        : <>
                            <span className="sb-no-wrap">
                                <Star mode="starred"/>&nbsp;{starredCount}
                            </span>
                        </>}
                </Button>
            </div>
            : null}
        {!onlyStarred
            ? <div className="me-2 flex-grow-1">
                <input type="search" className="form-control" placeholder="Szukaj"
                       autoCapitalize="none" autoCorrect="off"
                       value={searchText} onChange={changeSearchText}/>
            </div>
            : !!selectedSong
                ? <>
                    <Button className="ms-2 me-1" variant={'success'} disabled={!selectedSong.moveUp}
                            onClick={selectedSong.moveUp}>
                        <FontAwesomeIcon icon={faCaretUp} role="button" size={"lg"}/>
                    </Button>
                    <Button className="me-3" variant={'success'} disabled={!selectedSong.moveDown}
                            onClick={selectedSong.moveDown}>
                        <FontAwesomeIcon icon={faCaretDown} role="button" size={"lg"}/>
                    </Button>
                    <Button className="me-1" variant={'danger'} onClick={selectedSong.toggleStarred}>
                        <FontAwesomeIcon icon={faTrash} role="button" size={"lg"}/>
                    </Button>
                </>
                :
                <div className="ms-2">
                    <input type="text" readOnly={true} className="form-control-plaintext fw-bold"
                           value={`Wybrane: ${starredCount}`}/>
                </div>
        }
        <div className="ms-auto">
            <Button variant={'light'} onClick={onClose}>
                <FontAwesomeIcon icon={faTimes} role="button" size={"lg"} onClick={onClose}/>
            </Button>
        </div>
    </>;
}

MenuHeader.propTypes = {
    onlyStarred: PropTypes.bool.isRequired,
    toggleOnlyStarred: PropTypes.func.isRequired,
    starredCount: PropTypes.number.isRequired,
    selectedSong: PropTypes.object,
    searchText: PropTypes.string.isRequired,
    setSearchText: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired
}

export default MenuHeader;