import React from 'react';
import {useForm} from 'react-hook-form';

import './style/RegistrationForm.scss';

const RegistrationForm = ({onChangeMode}) => {
    const {register, handleSubmit} = useForm();

    const onSubmit = (data) => {
        console.log('submitted data: ', JSON.stringify(data));
    };

    return (
        <div className="registration-form">
            <div className="registration-form__row">
                <div className="registration-form__header">
                    <h3>Регистрация</h3>
                    <span>Введите необходимые данные для регистрации</span>
                </div>
                <form
                    className="registration-form__body default-form"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <input
                        {...register('fullName')}
                        className="default-form__input"
                        placeholder="Полное имя"
                    />
                    <input
                        {...register('phone')}
                        className="default-form__input"
                        placeholder="Телефон"
                    />
                    <input
                        {...register('email')}
                        className="default-form__input"
                        placeholder="Почта"
                    />
                    <input
                        {...register('password')}
                        className="default-form__input"
                        placeholder="Пароль"
                    />
                    <label className="registration-form__checkbox">
                        <input
                            {...register('agreeWithRules')}
                            type="checkbox"
                            className="default-form__checkbox"
                        />
                        <span>
                            Я принимаю условия
                            <a target="_blanc" href="https://www.google.com/search">
                                {' '}
                                пользовательского соглашения
                            </a>
                        </span>
                    </label>
                    <input
                        type="submit"
                        value="Зарегистрироваться"
                        className="default-form__submit-btn"
                    />
                </form>
                <div className="registration-form__footer">
                    <div className="registration-form__change-mode">
                        <span>Уже есть аккаунт?</span>
                        <p onClick={() => onChangeMode('SIGN_IN')}>Войти</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegistrationForm;
