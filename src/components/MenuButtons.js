import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Star from './Star';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGuitar, faListUl} from '@fortawesome/free-solid-svg-icons';

const MenuButtons = ({onlyStarred, chordsShown, onClickMenu, onClickGuitar}) => {
    const onKeyPress = callback => e => {
        const enterOrSpace = e.key === 'Enter' || e.key === " " || e.key === 'Spacebar' ||
            e.which === 13 || e.which === 32;
        if (enterOrSpace) {
            e.preventDefault();
            callback(e);
        }
    };
    return (
        <div className='sb-menu-buttons-container'>
            <div
                className={classNames('btn', 'sb-menu-button', 'shadow', 'rounded-circle', chordsShown ? 'sb-menu-button-red' : 'sb-menu-button-gray',
                    'd-flex', 'justify-content-center', 'align-items-center', 'pt-2')}
                tabIndex="0"
                role="button" onClick={onClickGuitar} onKeyPress={onKeyPress(onClickGuitar)}>
                <div className="sb-menu-button-icon my-auto">
                    <FontAwesomeIcon icon={faGuitar} size="lg"/>
                </div>
            </div>
            <div className="btn sb-menu-button shadow rounded-circle sb-menu-button-cyan d-flex justify-content-center align-items-center pt-2"
                 tabIndex="1"
                 role="button" onClick={onClickMenu} onKeyPress={onKeyPress(onClickMenu)}>
                <div className="sb-menu-button-icon my-auto">
                    {onlyStarred ? <Star mode="starred"/> : <FontAwesomeIcon icon={faListUl} size="lg"/>}
                </div>
            </div>
        </div>
    );
};

MenuButtons.propTypes = {
    onlyStarred: PropTypes.bool.isRequired,
    chordsShown: PropTypes.bool.isRequired,
    onClickMenu: PropTypes.func.isRequired,
    onClickGuitar: PropTypes.func.isRequired
};

export default MenuButtons;