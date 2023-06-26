import React from 'react';

import {useState} from 'react';

import './style/Header.scss';

import LoginIcon from './assets/business-person.svg?jsx';

import Modal from '../../../components/Modal/Modal';
import Login from '../../../containers/Login/Login';

const Header = () => {
    const [isModal, setModal] = useState(false);

    return (
        <div className="main-header">
            <ul className="main-header__bars">
                <li className="main-header__bar">
                    <div className="main-header__bar-icon" onClick={() => setModal(true)}>
                        <LoginIcon />
                    </div>
                </li>
                <li></li>
                <li></li>
            </ul>
            <Modal isVisible={isModal} content={<Login />} onClose={() => setModal(false)} />
        </div>
    );
};

export default Header;
