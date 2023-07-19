import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import toast from 'react-hot-toast';

import './style/AddSocialForm.scss';

import Loader from '../../../../../../components/Loader/Loader';
import InfoIcon from './assets/info.svg?jsx';
import SuccessIcon from './assets/success-default.svg?jsx';
import FailedIcon from './assets/failed-default.svg?jsx';

import {validateSimpleRequired, validateBankCard} from '../../../../../../helpers/Validation';

const AddSocialForm = ({onCloseModal}) => {
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
            networkName: 'Vkontakte',
            link: '',
        },
    });

    const fieldDescription = {
        networkName: 'Название социальной сети',
        link: 'Ссылка на социальную сеть',
    };

    const onSubmit = (data) => {
        setFetching(true);

        console.log('data: ', data);
        toast.success(`Метод для добавления социальной сети`);

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
        <div className="add-social-form">
            {isFetching && (
                <div className="add-social-form__feedback">
                    <Loader />
                </div>
            )}
            {!isFetching && isSuccess === false && (
                <div className="add-social-form__feedback">
                    <div className="add-social-form__feedback_icon">
                        <FailedIcon />
                    </div>
                    <h3>Провал</h3>
                    <p>{errorMessage || 'Что-то пошло не так...'}</p>
                    <button
                        className="add-social-form__feedback_btn"
                        onClick={() => onCloseModal()}
                    >
                        Жаль
                    </button>
                </div>
            )}
            {!isFetching && isSuccess === true && (
                <div className="add-social-form__feedback">
                    <div className="add-social-form__feedback_icon">
                        <SuccessIcon />
                    </div>
                    <h3>Успех</h3>
                    <p>Новая социальная сеть успешно добавлена в ваш аккаунт</p>
                </div>
            )}
            {!isFetching && isSuccess === null && (
                <div className="add-social-form__row">
                    <div className="add-social-form__header">
                        <h3>Добавить</h3>
                        <span>Добавьте новую социальную сеть</span>
                    </div>
                    <form
                        className="add-social-form__body default-form"
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <div className="default-form__input-wrapper add-social-form__network-name">
                            <div
                                className="add-social-form__info-icon"
                                onClick={() => {
                                    toast(fieldDescription.networkName, {
                                        icon: 'ℹ️',
                                    });
                                }}
                            >
                                <InfoIcon />
                            </div>
                            <select {...register('networkName')} className="default-form__select">
                                <option value="Vkontakte">Vkontakte</option>
                                <option value="Instagram">Instagram</option>
                                <option value="Odnoklassniki">Odnoklassniki</option>
                                <option value="Facebook">Facebook</option>
                                <option value="Linkedin">Linkedin</option>
                                <option value="Twitter">Twitter</option>
                            </select>
                            {errors.networkName && (
                                <span className="default-form__error-message">
                                    {errors.networkName?.message}
                                </span>
                            )}
                        </div>
                        <div className="default-form__input-wrapper add-social-form__link">
                            <div
                                className="add-social-form__info-icon"
                                onClick={() => {
                                    toast(fieldDescription.link, {
                                        icon: 'ℹ️',
                                    });
                                }}
                            >
                                <InfoIcon />
                            </div>
                            <input
                                className="default-form__input"
                                placeholder="Ссылка"
                                {...register('link', {
                                    validate: (value) => validateSimpleRequired(value),
                                })}
                            />
                            {errors.link && (
                                <span className="default-form__error-message">
                                    {errors.link?.message}
                                </span>
                            )}
                        </div>
                        <button
                            type="submit"
                            className="default-form__submit-btn add-social-form__submit-btn"
                        >
                            Добавить
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default AddSocialForm;
