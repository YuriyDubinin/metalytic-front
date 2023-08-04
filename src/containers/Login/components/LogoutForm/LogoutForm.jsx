import React from 'react';
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';

import './style/LogoutForm.scss';

import {setIsAuth} from '../../../../redux';

import {clearStorages} from './actions/logoutFormApi';

const LogoutForm = ({onCloseModal}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logout = () => {
        clearStorages();
        dispatch(setIsAuth(false));
        navigate('/');
        onCloseModal();
    };

    return (
        <div className="logout-form">
            <div className="logout-form__row">
                <div className="logout-form__header">
                    <h3>Выход</h3>
                    <span>Вы уверены что хотите выйти из аккаунта?</span>
                </div>
                <div className="logout-form__body">
                    <button
                        className="logout-form__btn logout-form__btn_accept"
                        onClick={() => logout()}
                    >
                        Да
                    </button>
                    <button
                        className="logout-form__btn logout-form__btn_cancel"
                        onClick={() => onCloseModal()}
                    >
                        Нет
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LogoutForm;
