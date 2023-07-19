import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import toast from 'react-hot-toast';

import './style/AddWalletForm.scss';

import Loader from '../../../../../../components/Loader/Loader';
import InfoIcon from './assets/info.svg?jsx';
import SuccessIcon from './assets/success-default.svg?jsx';
import FailedIcon from './assets/failed-default.svg?jsx';

import {validateSimpleRequired, validateBankCard} from '../../../../../../helpers/Validation';

const AddWalletForm = ({onCloseModal}) => {
    const [isFetching, setFetching] = useState(false);
    const [isSuccess, setSuccess] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');
    const [type, setType] = useState('wallet');

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm({
        mode: 'all',
        defaultValues: {
            type: 'wallet',
            walletName: 'MetaMask',
            publicKey: '',
            bankName: 'Tinkoff',
            cardNumber: '',
        },
    });

    const fieldDescription = {
        type: 'Тип платёжной системы',
        walletName: 'Название криптокошелька',
        publicKey: 'Специальный ключ криптокошелька',
        bankName: 'Название банка',
        cardNumber: 'Номер банковской карты (16 цифр)',
    };

    const onSubmit = (data) => {
        setFetching(true);

        if (data.type === 'wallet') {
            delete data.bankName;
            delete data.cardNumber;
        }

        if (data.type === 'card') {
            delete data.walletName;
            delete data.publicKey;
        }

        console.log('data: ', data);
        toast.success(`Метод для добавления кошелька / карты`);

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
        <div className="add-wallet-form">
            {isFetching && (
                <div className="add-wallet-form__feedback">
                    <Loader />
                </div>
            )}
            {!isFetching && isSuccess === false && (
                <div className="add-wallet-form__feedback">
                    <div className="add-wallet-form__feedback_icon">
                        <FailedIcon />
                    </div>
                    <h3>Провал</h3>
                    <p>{errorMessage || 'Что-то пошло не так...'}</p>
                    <button
                        className="add-wallet-form__feedback_btn"
                        onClick={() => onCloseModal()}
                    >
                        Жаль
                    </button>
                </div>
            )}
            {!isFetching && isSuccess === true && (
                <div className="add-wallet-form__feedback">
                    <div className="add-wallet-form__feedback_icon">
                        <SuccessIcon />
                    </div>
                    <h3>Успех</h3>
                    <p>Новый способ оплаты успешно добавлен в личный кабинет</p>
                </div>
            )}
            {!isFetching && isSuccess === null && (
                <div className="add-wallet-form__row">
                    <div className="add-wallet-form__header">
                        <h3>Добавить</h3>
                        <span>Добавьте новый способ оплаты</span>
                    </div>
                    <form
                        className="add-wallet-form__body default-form"
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <div className="default-form__input-wrapper add-wallet-form__wallet-type">
                            <div
                                className="add-wallet-form__info-icon"
                                onClick={() => {
                                    toast(fieldDescription.type, {
                                        icon: 'ℹ️',
                                    });
                                }}
                            >
                                <InfoIcon />
                            </div>
                            <select
                                {...register('type')}
                                className="default-form__select"
                                onChange={(e) => setType(e.target.value)}
                            >
                                <option value="wallet">Криптокошелёк</option>
                                <option value="card">Банковская карта</option>
                            </select>
                            {errors.type && (
                                <span className="default-form__error-message">
                                    {errors.type?.message}
                                </span>
                            )}
                        </div>
                        {type === 'wallet' && (
                            <>
                                <div className="default-form__input-wrapper add-wallet-form__wallet-name">
                                    <div
                                        className="add-wallet-form__info-icon"
                                        onClick={() => {
                                            toast(fieldDescription.walletName, {
                                                icon: 'ℹ️',
                                            });
                                        }}
                                    >
                                        <InfoIcon />
                                    </div>
                                    <select
                                        {...register('walletName')}
                                        className="default-form__select"
                                    >
                                        <option value="MetaMask">MetaMask</option>
                                        <option value="Binance">Binance</option>
                                        <option value="Tron">Tron</option>
                                        <option value="Trust Wallet">Trust Wallet</option>
                                    </select>
                                    {errors.walletName && (
                                        <span className="default-form__error-message">
                                            {errors.walletName?.message}
                                        </span>
                                    )}
                                </div>
                                <div className="default-form__input-wrapper add-wallet-form__public-key">
                                    <div
                                        className="add-wallet-form__info-icon"
                                        onClick={() => {
                                            toast(fieldDescription.publicKey, {
                                                icon: 'ℹ️',
                                            });
                                        }}
                                    >
                                        <InfoIcon />
                                    </div>
                                    <input
                                        className="default-form__input"
                                        placeholder="Публичный ключ"
                                        {...register('publicKey', {
                                            validate: (value) => validateSimpleRequired(value),
                                        })}
                                    />
                                    {errors.publicKey && (
                                        <span className="default-form__error-message">
                                            {errors.publicKey?.message}
                                        </span>
                                    )}
                                </div>
                            </>
                        )}
                        {type === 'card' && (
                            <>
                                <div className="default-form__input-wrapper add-wallet-form__bank-name">
                                    <div
                                        className="add-wallet-form__info-icon"
                                        onClick={() => {
                                            toast(fieldDescription.bankName, {
                                                icon: 'ℹ️',
                                            });
                                        }}
                                    >
                                        <InfoIcon />
                                    </div>
                                    <select
                                        {...register('bankName')}
                                        className="default-form__select"
                                    >
                                        <option value="Tinkoff">Tinkoff</option>
                                        <option value="Sberbank">Sberbank</option>
                                        <option value="Rncb">Rncb</option>
                                    </select>
                                    {errors.walletName && (
                                        <span className="default-form__error-message">
                                            {errors.walletName?.message}
                                        </span>
                                    )}
                                </div>
                                <div className="default-form__input-wrapper add-wallet-form__card-number">
                                    <div
                                        className="add-wallet-form__info-icon"
                                        onClick={() => {
                                            toast(fieldDescription.cardNumber, {
                                                icon: 'ℹ️',
                                            });
                                        }}
                                    >
                                        <InfoIcon />
                                    </div>
                                    <input
                                        className="default-form__input"
                                        placeholder="Номер карты"
                                        {...register('cardNumber', {
                                            validate: (value) => validateBankCard(value, true),
                                        })}
                                    />
                                    {errors.cardNumber && (
                                        <span className="default-form__error-message">
                                            {errors.cardNumber?.message}
                                        </span>
                                    )}
                                </div>
                            </>
                        )}
                        <button
                            type="submit"
                            className="default-form__submit-btn add-wallet-form__submit-btn"
                        >
                            Добавить
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default AddWalletForm;
