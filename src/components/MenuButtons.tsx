import React from 'react';
import classNames from 'classnames';
import Star, {Mode} from './Star';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGuitar, faListUl} from '@fortawesome/free-solid-svg-icons';

interface MenuButtonsProps {
    onlyStarred: boolean;
    chordsShown: boolean;
    onClickMenu: () => void;
    onClickGuitar: () => void;
}

const MenuButtons = ({onlyStarred, chordsShown, onClickMenu, onClickGuitar}: MenuButtonsProps) => {
    return (
        <div className='sb-menu-buttons-container'>
            <div
                className={classNames('btn', 'sb-menu-button', 'shadow', 'rounded-circle', chordsShown ? 'sb-menu-button-red' : 'sb-menu-button-gray',
                    'd-flex', 'justify-content-center', 'align-items-center', 'pt-2')}
                tabIndex={0}
                role="button" onClick={onClickGuitar}>
                <div className="sb-menu-button-icon my-auto">
                    <FontAwesomeIcon icon={faGuitar} size="lg"/>
                </div>
            </div>
            <div className="btn sb-menu-button shadow rounded-circle sb-menu-button-cyan d-flex justify-content-center align-items-center pt-2"
                 tabIndex={1}
                 role="button" onClick={onClickMenu}>
                <div className="sb-menu-button-icon my-auto">
                    {onlyStarred ? <Star mode={Mode.STARRED}/> : <FontAwesomeIcon icon={faListUl} size="lg"/>}
                </div>
            </div>
        </div>
    );
};

export default MenuButtons;