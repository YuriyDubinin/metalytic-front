import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import toast from 'react-hot-toast';

import './style/ChangePasswordForm.scss';

import Loader from '../../../../../../components/Loader/Loader';
import InfoIcon from './assets/info.svg?jsx';
import ClosedEyeIcon from './assets/eye-closed.svg?jsx';
import OpenEyeIcon from './assets/eye-open.svg?jsx';
import SuccessIcon from './assets/success-default.svg?jsx';
import FailedIcon from './assets/failed-default.svg?jsx';

import {validatePassword} from '../../../../../../helpers/Validation';

// import {login} from './actions/signInFormApi';

const ChangePasswordForm = ({onCloseModal}) => {
    const [oldPasswordType, setOldPasswordType] = useState('password');
    const [newPasswordType, setNewPasswordType] = useState('password');
    const [repeatPasswordType, setRepeatPasswordType] = useState('password');
    const [isFetching, setFetching] = useState(false);
    const [isSuccess, setSuccess] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm({
        mode: 'all',
        defaultValues: {
            oldPassword: '',
            newPassword: '',
            repeatPassword: '',
        },
    });

    const fieldDescription = {
        password:
            'Пароль должен содержать минимум 8 символов, одну заглавную букву, одну прописную букву, одну цифру, один специальный символ (только английский язык)',
    };

    const onSubmit = (data) => {
        setFetching(true);

        console.log('data: ', data);
        toast.success(`Метод для удаления смены пароля`);

        // login(JSON.stringify(data))
        //     .then((res) => {
        //         console.log('res: ', res);

        //         localStorage.setItem('authorization', res?.accessToken);
        //         setSuccess(true);
        //         setErrorMessage('');
        //         setFetching(false);

        //         setTimeout(() => onCloseModal(), 3000);
        //     })
        //     .catch((err) => {
        //         console.log('error: ', err);

        //         setSuccess(false);
        //         setErrorMessage(err?.message);
        //         setFetching(false);
        //     })
        //     .finally(() => {
        //         setFetching(false);
        //     });
    };

    return (
        <div className="change-password-from">
            {isFetching && (
                <div className="change-password-from__feedback">
                    <Loader />
                </div>
            )}
            {!isFetching && isSuccess === false && (
                <div className="change-password-from__feedback">
                    <div className="change-password-from__feedback_icon">
                        <FailedIcon />
                    </div>
                    <h3>Провал</h3>
                    <p>{errorMessage || 'Что-то пошло не так...'}</p>
                    <button
                        className="change-password-from__feedback_btn"
                        onClick={() => onCloseModal()}
                    >
                        Жаль
                    </button>
                </div>
            )}
            {!isFetching && isSuccess === true && (
                <div className="change-password-from__feedback">
                    <div className="change-password-from__feedback_icon">
                        <SuccessIcon />
                    </div>
                    <h3>Успех</h3>
                    <p>{`Добро пожаловать`}</p>
                </div>
            )}
            {!isFetching && isSuccess === null && (
                <div className="change-password-from__row">
                    <div className="change-password-from__header">
                        <h3>Смена пароля</h3>
                        <span>Изменить пароль для личного аккаунта</span>
                    </div>
                    <form
                        className="change-password-from__body default-form"
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <div className="default-form__input-wrapper change-password-form__old-password">
                            <div
                                className="change-password-form__info-icon"
                                onClick={() => {
                                    toast(fieldDescription.password, {
                                        icon: 'ℹ️',
                                    });
                                }}
                            >
                                <InfoIcon />
                            </div>
                            <input
                                type={oldPasswordType}
                                className="default-form__input"
                                placeholder="Старый пароль"
                                {...register('oldPassword', {
                                    validate: (value) => validatePassword(value, true),
                                })}
                            />
                            {errors.oldPassword && (
                                <span className="default-form__error-message">
                                    {errors.oldPassword?.message}
                                </span>
                            )}
                            {oldPasswordType === 'password' && (
                                <div className="change-password-form__eye-icon">
                                    <ClosedEyeIcon onClick={() => setOldPasswordType('text')} />
                                </div>
                            )}
                            {oldPasswordType === 'text' && (
                                <div className="change-password-form__eye-icon">
                                    <OpenEyeIcon onClick={() => setOldPasswordType('password')} />
                                </div>
                            )}
                        </div>
                        <div className="default-form__input-wrapper change-password-form__new-password">
                            <div
                                className="change-password-form__info-icon"
                                onClick={() => {
                                    toast(fieldDescription.password, {
                                        icon: 'ℹ️',
                                    });
                                }}
                            >
                                <InfoIcon />
                            </div>
                            <input
                                type={newPasswordType}
                                className="default-form__input"
                                placeholder="Новый пароль"
                                {...register('newPassword', {
                                    validate: (value) => validatePassword(value, true),
                                })}
                            />
                            {errors.newPassword && (
                                <span className="default-form__error-message">
                                    {errors.newPassword?.message}
                                </span>
                            )}
                            {newPasswordType === 'password' && (
                                <div className="change-password-form__eye-icon">
                                    <ClosedEyeIcon onClick={() => setNewPasswordType('text')} />
                                </div>
                            )}
                            {newPasswordType === 'text' && (
                                <div className="change-password-form__eye-icon">
                                    <OpenEyeIcon onClick={() => setNewPasswordType('password')} />
                                </div>
                            )}
                        </div>
                        <div className="default-form__input-wrapper change-password-form__repeat-password">
                            <div
                                className="change-password-form__info-icon"
                                onClick={() => {
                                    toast(fieldDescription.password, {
                                        icon: 'ℹ️',
                                    });
                                }}
                            >
                                <InfoIcon />
                            </div>
                            <input
                                type={repeatPasswordType}
                                className="default-form__input"
                                placeholder="Повторите пароль"
                                {...register('repeatPassword', {
                                    validate: (value) => validatePassword(value, true),
                                })}
                            />
                            {errors.repeatPassword && (
                                <span className="default-form__error-message">
                                    {errors.repeatPassword?.message}
                                </span>
                            )}
                            {repeatPasswordType === 'password' && (
                                <div className="change-password-form__eye-icon">
                                    <ClosedEyeIcon onClick={() => setRepeatPasswordType('text')} />
                                </div>
                            )}
                            {repeatPasswordType === 'text' && (
                                <div className="change-password-form__eye-icon">
                                    <OpenEyeIcon
                                        onClick={() => setRepeatPasswordType('password')}
                                    />
                                </div>
                            )}
                        </div>
                        <button
                            type="submit"
                            className="default-form__submit-btn change-password-form__submit-btn"
                        >
                            Сменить
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default ChangePasswordForm;
