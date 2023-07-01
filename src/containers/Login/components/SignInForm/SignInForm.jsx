import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {useForm} from 'react-hook-form';
import toast from 'react-hot-toast';

import './style/SignInForm.scss';

import Loader from '../../../../components/Loader/Loader';
import InfoIcon from './assets/info.svg?jsx';
import ClosedEyeIcon from './assets/eye-closed.svg?jsx';
import OpenEyeIcon from './assets/eye-open.svg?jsx';
import BrokenIcon from './assets/broken.svg?jsx';
import InWorldIcon from './assets/in-world.svg?jsx';

import {validateEmail, validatePassword} from '../../../../helpers/Validation';
import {setIsAuth} from '../../../../slices/mainSlice';

import {login} from './actions/signInFormApi';

const SignInForm = ({onChangeMode, onCloseModal}) => {
    const [passwordType, setPasswordType] = useState('password');
    const [isFetching, setFetching] = useState(false);
    const [isSuccess, setSuccess] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');

    const dispatch = useDispatch();

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

    const fieldDescription = {
        email: 'Емейл должен быть написан в стандартном формате и содержать в себе символ "@"',
        password:
            'Пароль должен содержать минимум 8 символов, одну заглавную букву, одну прописную букву, одну цифру, один специальный символ (только английский язык)',
    };

    const onSubmit = (data) => {
        setFetching(true);

        login(JSON.stringify(data))
            .then((res) => {
                console.log('res: ', res);

                localStorage.setItem('authorization', res?.accessToken);
                dispatch(setIsAuth(true));
                setSuccess(true);
                setErrorMessage('');
                setFetching(false);

                setTimeout(() => onCloseModal(), 3000);
            })
            .catch((err) => {
                console.log('error: ', err);

                setSuccess(false);
                setErrorMessage(err?.message);
                setFetching(false);
            })
            .finally(() => {
                setFetching(false);
            });

        // fake admin
        // if (data.email === 'admin@ololo.com') {
        //     dispatch(setIsAuth(true));
        //     onCloseModal();
        // }
    };

    return (
        <div className="sign-in-from">
            {isFetching && (
                <div className="sign-in-from__feedback">
                    <Loader />
                </div>
            )}
            {!isFetching && isSuccess === false && (
                <div className="sign-in-from__feedback">
                    <div className="sign-in-from__feedback_icon">
                        <BrokenIcon />
                    </div>
                    <h3>Провал</h3>
                    <p>{errorMessage}</p>
                    <button className="sign-in-from__feedback_btn" onClick={() => onCloseModal()}>
                        Жаль
                    </button>
                </div>
            )}
            {!isFetching && isSuccess === true && (
                <div className="sign-in-from__feedback">
                    <div className="sign-in-from__feedback_icon">
                        <InWorldIcon />
                    </div>
                    <h3>Успех</h3>
                    <p>{`Добро пожаловать`}</p>
                </div>
            )}
            {!isFetching && isSuccess === null && (
                <div className="sign-in-from__row">
                    <div className="sign-in-from__header">
                        <h3>Вход</h3>
                        <span>Введите данные для входа в систему</span>
                    </div>
                    <form
                        className="sign-in-from__body default-form"
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <div className="default-form__input-wrapper sign-in-form__email">
                            <div
                                className="sign-in-form__info-icon"
                                onClick={() => {
                                    toast(fieldDescription.email, {
                                        icon: 'ℹ️',
                                    });
                                }}
                            >
                                <InfoIcon />
                            </div>
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
                            <div
                                className="sign-in-form__info-icon"
                                onClick={() => {
                                    toast(fieldDescription.password, {
                                        icon: 'ℹ️',
                                    });
                                }}
                            >
                                <InfoIcon />
                            </div>
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
                                <div className="sign-in-form__eye-icon">
                                    <ClosedEyeIcon onClick={() => setPasswordType('text')} />
                                </div>
                            )}
                            {passwordType === 'text' && (
                                <div className="sign-in-form__eye-icon">
                                    <OpenEyeIcon onClick={() => setPasswordType('password')} />
                                </div>
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
            )}
        </div>
    );
};

export default SignInForm;
