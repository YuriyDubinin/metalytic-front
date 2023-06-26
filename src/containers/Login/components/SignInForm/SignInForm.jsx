import React from 'react';
import {useForm} from 'react-hook-form';

import './style/SignInForm.scss';

const SignInForm = ({onChangeMode}) => {
    const {
        register,
        handleSubmit,
        watch,
        formState: {errors},
    } = useForm();

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
                    <input
                        {...register('email', {required: true})}
                        className="default-form__input"
                        placeholder="Почта"
                    />
                    <input
                        {...register('password')}
                        className="default-form__input"
                        placeholder="Пароль"
                    />
                    <label>
                        <input
                            {...register('rememberMe')}
                            type="checkbox"
                            className="default-form__checkbox"
                        />
                        <span>Запомнить меня</span>
                    </label>
                    <input type="submit" value="Вход" className="default-form__submit-btn" />
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
