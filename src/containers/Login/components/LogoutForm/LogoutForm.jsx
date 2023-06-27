import React from 'react';
import {useDispatch} from 'react-redux';

import './style/LogoutForm.scss';

import {setIsAuth} from '../../../../slice/mainSlice';

const LogoutForm = ({onCloseModal}) => {
    const dispatch = useDispatch();

    const logout = () => {
        dispatch(setIsAuth(false));
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
