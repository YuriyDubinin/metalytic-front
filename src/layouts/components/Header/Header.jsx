import React, {useState} from 'react';
import {useSelector} from 'react-redux';

import './style/Header.scss';

import LoginIcon from './assets/business-person.svg?jsx';
import CheckMarkIcon from './assets/check-mark-circle-color.svg?jsx';
import CircleDisableIcon from './assets/circledisable.svg?jsx';

import Modal from '../../../components/Modal/Modal';
import Login from '../../../containers/Login/Login';

import {selectIsAuth} from '../../../slice/mainSlice';

const Header = () => {
    const [loginModal, setLoginModal] = useState(false);

    const isAuth = useSelector(selectIsAuth);

    return (
        <div className="main-header">
            <ul className="main-header__bars">
                <li className="main-header__bar">
                    <div className="main-header__bar-item">
                        <div className="main-header__bar-icon" onClick={() => setLoginModal(true)}>
                            <LoginIcon />
                        </div>
                        {isAuth && (
                            <div className="main-header__bar-icon-badge">
                                <CheckMarkIcon />
                            </div>
                        )}
                        {!isAuth && (
                            <div className="main-header__bar-icon-badge main-header__bar-icon-badge_not-auth">
                                <CircleDisableIcon />
                            </div>
                        )}
                    </div>
                </li>
                <li></li>
                <li></li>
            </ul>
            <Modal
                isVisible={loginModal}
                content={<Login onCloseModal={() => setLoginModal(false)} />}
                onClose={() => setLoginModal(false)}
            />
        </div>
    );
};

export default Header;
