import React from 'react';
import {useForm} from 'react-hook-form';

import './style/PasswordRecoveryForm.scss';

import {validateEmail} from '../../../../helpers/Validation';

const PasswordRecoveryForm = ({onChangeMode}) => {
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

    const onSubmit = (data) => {
        console.log('submitted data: ', JSON.stringify(data));
    };

    return (
        <div className="password-recovery-form">
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
        </div>
    );
};

export default PasswordRecoveryForm;
