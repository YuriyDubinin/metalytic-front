import React from 'react';
import {useForm} from 'react-hook-form';

import './style/PasswordRecoveryForm.scss';

const PasswordRecoveryForm = ({onChangeMode}) => {
    const {register, handleSubmit} = useForm();

    const onSubmit = (data) => {
        console.log('submitted data: ', JSON.stringify(data));
    };

    return (
        <div className="password-recovery">
            <div className="password-recovery__row">
                <div className="password-recovery__header">
                    <h3>Восстановление пароля</h3>
                    <span>Введите почту к которой привязан аккаунт</span>
                </div>
                <form
                    className="password-recovery__body default-form"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <input
                        {...register('email')}
                        className="default-form__input"
                        placeholder="Почта"
                    />
                    <input
                        type="submit"
                        value="Восстановить"
                        className="default-form__submit-btn"
                    />
                </form>
                <div className="password-recovery__footer">
                    <div className="password-recovery__change-mode">
                        <p onClick={() => onChangeMode('SIGN_IN')}>Войти</p>
                    </div>
                    <div className="password-recovery__change-mode">
                        <span>Отсутствует аккаунт?</span>
                        <p onClick={() => onChangeMode('REGISTRATION')}>Создать аккаунт</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PasswordRecoveryForm;
