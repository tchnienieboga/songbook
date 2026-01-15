import { ChangeEventHandler, Dispatch, SetStateAction } from 'react';
import Button from 'react-bootstrap/Button';
import Star, { Mode } from './Star';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp, faListUl, faTimes, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Song } from '../utils/types';

interface MenuHeaderProps {
    onlyStarred: boolean;
    toggleOnlyStarred: () => void;
    starredCount: number;
    selectedSong?: Song;
    searchText: string;
    setSearchText: Dispatch<SetStateAction<string>>;
    onClose: () => void;
}

const MenuHeader = ({
    onlyStarred,
    toggleOnlyStarred,
    starredCount,
    selectedSong,
    searchText,
    setSearchText,
    onClose
}: MenuHeaderProps) => {
    const changeSearchText: ChangeEventHandler<HTMLInputElement> = (event) => {
        setSearchText(event.target.value);
    };

    return (
        <>
            {!!starredCount ? (
                <div className="me-2">
                    <Button variant={'info'} onClick={toggleOnlyStarred}>
                        {onlyStarred ? (
                            <FontAwesomeIcon icon={faListUl} role="button" size={'lg'} />
                        ) : (
                            <>
                                <span className="sb-no-wrap">
                                    <Star mode={Mode.STARRED} />
                                    &nbsp;{starredCount}
                                </span>
                            </>
                        )}
                    </Button>
                </div>
            ) : null}
            {!onlyStarred ? (
                <div className="me-2 flex-grow-1">
                    <input
                        type="search"
                        className="form-control"
                        placeholder="Szukaj"
                        autoCapitalize="none"
                        autoCorrect="off"
                        value={searchText}
                        onChange={changeSearchText}
                    />
                </div>
            ) : !!selectedSong ? (
                <>
                    <Button
                        className="ms-2 me-1"
                        variant={'success'}
                        disabled={!selectedSong.moveUp}
                        onClick={selectedSong.moveUp}>
                        <FontAwesomeIcon icon={faCaretUp} role="button" size={'lg'} />
                    </Button>
                    <Button
                        className="me-3"
                        variant={'success'}
                        disabled={!selectedSong.moveDown}
                        onClick={selectedSong.moveDown}>
                        <FontAwesomeIcon icon={faCaretDown} role="button" size={'lg'} />
                    </Button>
                    <Button className="me-1" variant={'danger'} onClick={selectedSong.toggleStarred}>
                        <FontAwesomeIcon icon={faTrash} role="button" size={'lg'} />
                    </Button>
                </>
            ) : (
                <div className="ms-2">
                    <span className="fw-bold sb-no-wrap">
                        Wybrane <Star mode={Mode.STARRED} />
                        &nbsp;{starredCount}
                    </span>
                </div>
            )}
            <div className="ms-auto">
                <Button variant={'light'} onClick={onClose}>
                    <FontAwesomeIcon icon={faTimes} role="button" size={'lg'} onClick={onClose} />
                </Button>
            </div>
        </>
    );
};

export default MenuHeader;
