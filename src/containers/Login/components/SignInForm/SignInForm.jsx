import React, {useState} from 'react';
import {useForm} from 'react-hook-form';

import './style/SignInForm.scss';

import ClosedEyeIcon from './assets/eye-closed.svg?jsx';
import OpenEyeIcon from './assets/eye-open.svg?jsx';

import {validateEmail, validatePassword} from '../../../../helpers/Validation';

const SignInForm = ({onChangeMode}) => {
    const [passwordType, setPasswordType] = useState('password');

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm({
        mode: 'all',
        defaultValues: {
            email: '',
            password: '',
            rememberMe: false,
        },
    });

    const onSubmit = (data) => {
        console.log('submitted data: ', JSON.stringify(data));
    };

    return (
        <div className="sign-in-from">
            <div className="sign-in-from__row">
                <div className="sign-in-from__header">
                    <h3>Вход</h3>
                    <span>Введите данные для входа в систему</span>
                </div>
                <form className="sign-in-from__body default-form" onSubmit={handleSubmit(onSubmit)}>
                    <div className="default-form__input-wrapper sign-in-form__email">
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
                    <div className="default-form__input-wrapper sign-in-form__password">
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
                    <div className="default-form__input-wrapper sign-in-form__remember-me">
                        <label>
                            <input
                                {...register('rememberMe')}
                                type="checkbox"
                                className="default-form__checkbox"
                            />
                            <span>Запомнить меня</span>
                        </label>
                    </div>
                    <button
                        type="submit"
                        className="default-form__submit-btn sign-in-form__submit-btn"
                    >
                        Вход
                    </button>
                </form>
                <div className="sign-in-from__footer">
                    <div className="sign-in-from__change-mode">
                        <p onClick={() => onChangeMode('PASSWORD_RECOVERY')}>Забыли пароль?</p>
                    </div>
                    <div className="sign-in-from__change-mode">
                        <span>Отсутствует аккаунт?</span>
                        <p onClick={() => onChangeMode('REGISTRATION')}>Создать аккаунт</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignInForm;
