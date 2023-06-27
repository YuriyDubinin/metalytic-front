import React, {useState} from 'react';
import {useForm} from 'react-hook-form';

import './style/RegistrationForm.scss';

import ClosedEyeIcon from './assets/eye-closed.svg?jsx';
import OpenEyeIcon from './assets/eye-open.svg?jsx';

import {
    validateForWordsOnly,
    validatePhone,
    validateEmail,
    validatePassword,
} from '../../../../helpers/Validation';

const RegistrationForm = ({onChangeMode}) => {
    const [passwordType, setPasswordType] = useState('password');

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm({
        mode: 'all',
        defaultValues: {
            fullName: '',
            phone: '',
            email: '',
            password: '',
            agreeWithRules: false,
        },
    });

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
                    <div className="default-form__input-wrapper registration-form__full-name">
                        <input
                            className="default-form__input"
                            placeholder="Полное имя"
                            {...register('fullName', {
                                validate: (value) => validateForWordsOnly(value, true),
                            })}
                        />
                        {errors.fullName && (
                            <span className="default-form__error-message">
                                {errors.fullName?.message}
                            </span>
                        )}
                    </div>
                    <div className="default-form__input-wrapper registration-form__phone">
                        <input
                            className="default-form__input"
                            placeholder="Телефон"
                            {...register('phone', {
                                validate: (value) => validatePhone(value, true),
                            })}
                        />
                        {errors.phone && (
                            <span className="default-form__error-message">
                                {errors.phone?.message}
                            </span>
                        )}
                    </div>
                    <div className="default-form__input-wrapper registration-form__email">
                        <input
                            className="default-form__input"
                            placeholder="Почта"
                            {...register('email', {
                                validate: (value) => validateEmail(value, true),
                            })}
                        />
                        {errors.email && (
                            <span className="default-form__error-message">
                                {errors.email?.message}
                            </span>
                        )}
                    </div>
                    <div className="default-form__input-wrapper registration-form__password">
                        <input
                            type={passwordType}
                            className="default-form__input"
                            placeholder="Пароль"
                            {...register('password', {
                                validate: (value) => validatePassword(value, true),
                            })}
                        />
                        {errors.password && (
                            <span className="default-form__error-message">
                                {errors.password?.message}
                            </span>
                        )}
                        {passwordType === 'password' && (
                            <ClosedEyeIcon onClick={() => setPasswordType('text')} />
                        )}
                        {passwordType === 'text' && (
                            <OpenEyeIcon onClick={() => setPasswordType('password')} />
                        )}
                    </div>
                    <div className="default-form__input-wrapper registration-form__agree-with-rules">
                        <label className="registration-form__checkbox">
                            <input
                                type="checkbox"
                                className="default-form__checkbox"
                                {...register('agreeWithRules', {
                                    required: {value: true, message: '!'},
                                })}
                            />
                            <span>
                                Я принимаю условия
                                <a target="_blanc" href="https://www.google.com/search">
                                    {' '}
                                    пользовательского соглашения
                                </a>
                            </span>
                        </label>
                        {errors.agreeWithRules && (
                            <span className="default-form__error-message">
                                {errors.agreeWithRules?.message}
                            </span>
                        )}
                    </div>
                    <button
                        type="submit"
                        className="default-form__submit-btn registration-form__submit-btn"
                    >
                        Зарегистрироваться
                    </button>
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
