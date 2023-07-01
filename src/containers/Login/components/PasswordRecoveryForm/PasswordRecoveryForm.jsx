import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import toast from 'react-hot-toast';

import './style/PasswordRecoveryForm.scss';

import Loader from '../../../../components/Loader/Loader';
import InfoIcon from './assets/info.svg?jsx';
import MessagesIcon from './assets/messages.svg?jsx';
import CancelIcon from './assets/cancel.svg?jsx';

import {validateEmail} from '../../../../helpers/Validation';

import {passwordRecovery} from './actions/passwordRecoveryForm';

const PasswordRecoveryForm = ({onChangeMode, onCloseModal}) => {
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
            email: '',
        },
    });

    const fieldDescription = {
        email: 'Емейл должен быть написан в стандартном формате и содержать в себе символ "@"',
    };

    const onSubmit = (data) => {
        setFetching(true);

        passwordRecovery(JSON.stringify(data))
            .then((res) => {
                console.log('res: ', res);

                setSuccess(true);
                setErrorMessage('');
                setFetching(false);
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
    };

    return (
        <div className="password-recovery-form">
            {isFetching && (
                <div className="password-recovery-form__feedback">
                    <Loader />
                </div>
            )}
            {!isFetching && isSuccess === false && (
                <div className="password-recovery-form__feedback">
                    <div className="password-recovery-form__feedback_icon">
                        <CancelIcon />
                    </div>
                    <h3>Провал</h3>
                    <p>{errorMessage}</p>
                    <button
                        className="password-recovery-form__feedback_btn"
                        onClick={() => onCloseModal()}
                    >
                        Жаль
                    </button>
                </div>
            )}
            {!isFetching && isSuccess === true && (
                <div className="password-recovery-form__feedback">
                    <div className="password-recovery-form__feedback_icon">
                        <MessagesIcon />
                    </div>
                    <h3>Всё хорошо</h3>
                    <p>{`Письмо уже выслано на ваш почтовый ящик`}</p>
                    <button
                        className="password-recovery-form__feedback_btn"
                        onClick={() => onChangeMode('SIGN_IN')}
                    >
                        Войти
                    </button>
                </div>
            )}
            {!isFetching && isSuccess === null && (
                <div className="password-recovery-form__row">
                    <div className="password-recovery-form__header">
                        <h3>Восстановление пароля</h3>
                        <span>Введите почту к которой привязан аккаунт</span>
                    </div>
                    <form
                        className="password-recovery-form__body default-form"
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <div className="default-form__input-wrapper password-recovery-form__email">
                            <div
                                className="password-recovery-form__info-icon"
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
                        <button
                            type="submit"
                            className="default-form__submit-btn password-recovery-form__submit-btn"
                        >
                            Восстановить
                        </button>
                    </form>
                    <div className="password-recovery-form__footer">
                        <div className="password-recovery-form__change-mode">
                            <p onClick={() => onChangeMode('SIGN_IN')}>Войти</p>
                        </div>
                        <div className="password-recovery-form__change-mode">
                            <span>Отсутствует аккаунт?</span>
                            <p onClick={() => onChangeMode('REGISTRATION')}>Создать аккаунт</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PasswordRecoveryForm;
