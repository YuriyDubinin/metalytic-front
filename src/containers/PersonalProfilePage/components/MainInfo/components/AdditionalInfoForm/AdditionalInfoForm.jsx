import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import toast from 'react-hot-toast';

import './style/AdditionalInfoForm.scss';

import Loader from '../../../../../../components/Loader/Loader';
import InfoIcon from './assets/info.svg?jsx';
import MessagesIcon from './assets/messages.svg?jsx';

import BrokenIcon from './assets/broken.svg?jsx';
import InWorldIcon from './assets/in-world.svg?jsx';

import {validateForWordsOnly} from '../../../../../../helpers/Validation';

// import {login} from './actions/signInFormApi';

const AdditionalInfoForm = ({onCloseModal}) => {
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
            country: '',
            birthdayDt: '',
        },
    });

    const fieldDescription = {
        country: 'Страна вашего проживания',
        birthDate: 'Дата рождения',
        verify: 'Письмо с подтверждением выслано на ваш адрес',
    };

    const onSubmit = (data) => {
        setFetching(true);

        console.log('data: ', data);

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
        <div className="additional-info-from">
            {isFetching && (
                <div className="additional-info-from__feedback">
                    <Loader />
                </div>
            )}
            {!isFetching && isSuccess === false && (
                <div className="additional-info-from__feedback">
                    <div className="additional-info-from__feedback_icon">
                        <BrokenIcon />
                    </div>
                    <h3>Провал</h3>
                    <p>{errorMessage}</p>
                    <button
                        className="additional-info-from__feedback_btn"
                        onClick={() => onCloseModal()}
                    >
                        Жаль
                    </button>
                </div>
            )}
            {!isFetching && isSuccess === true && (
                <div className="additional-info-from__feedback">
                    <div className="additional-info-from__feedback_icon">
                        <InWorldIcon />
                    </div>
                    <h3>Успех</h3>
                    <p>{`Добро пожаловать`}</p>
                </div>
            )}
            {!isFetching && isSuccess === null && (
                <div className="additional-info-from__row">
                    <div className="additional-info-from__header">
                        <h3>Дополнительно</h3>
                        <span>Добавьте информации для вашего аккаунта</span>
                    </div>
                    <form
                        className="additional-info-from__body default-form"
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <div className="default-form__input-wrapper additional-info-form__country">
                            <div
                                className="additional-info-form__info-icon"
                                onClick={() => {
                                    toast(fieldDescription.country, {
                                        icon: 'ℹ️',
                                    });
                                }}
                            >
                                <InfoIcon />
                            </div>
                            <input
                                className="default-form__input"
                                placeholder="Страна"
                                {...register('country', {
                                    validate: (value) => validateForWordsOnly(value, true),
                                })}
                            />
                            {errors.country && (
                                <span className="default-form__error-message">
                                    {errors.country?.message}
                                </span>
                            )}
                        </div>
                        <div className="default-form__input-wrapper additional-info-form__birth-date">
                            <div
                                className="additional-info-form__info-icon"
                                onClick={() => {
                                    toast(fieldDescription.birthDate, {
                                        icon: 'ℹ️',
                                    });
                                }}
                            >
                                <InfoIcon />
                            </div>
                            <input
                                className="default-form__input"
                                placeholder="Дата рождения"
                                {...register('birthdayDt', {
                                    // validate: (value) => validateForWordsOnly(value, true),
                                })}
                            />
                            {errors.birthdayDt && (
                                <span className="default-form__error-message">
                                    {errors.birthdayDt?.message}
                                </span>
                            )}
                        </div>
                        <button
                            type="submit"
                            className="default-form__submit-btn additional-info-form__submit-btn"
                        >
                            Добавить
                        </button>
                    </form>
                    <button
                        className="default-form__submit-btn additional-info-form__verify-btn"
                        onClick={() => {
                            toast(fieldDescription.verify, {
                                icon: 'ℹ️',
                            });
                        }}
                    >
                        <div className="additional-info-form__verify-btn-icon">
                            <MessagesIcon />
                        </div>

                        <p>Верифицировать почту</p>
                    </button>
                </div>
            )}
        </div>
    );
};

export default AdditionalInfoForm;
