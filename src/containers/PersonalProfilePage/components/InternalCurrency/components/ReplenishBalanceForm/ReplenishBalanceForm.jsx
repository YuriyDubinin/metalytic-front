import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {useForm} from 'react-hook-form';
import toast from 'react-hot-toast';

import './style/ReplenishBalanceForm.scss';

import Loader from '../../../../../../components/Loader/Loader';
import InfoIcon from './assets/info.svg?jsx';
import SuccessIcon from './assets/success-default.svg?jsx';
import FailedIcon from './assets/failed-default.svg?jsx';

import {validateSimpleRequired, validateForNumbersOnly} from '../../../../../../helpers/Validation';

import {selectWallets} from '../../../../../../redux';

const ReplenishBlanceForm = ({onCloseModal, wallet}) => {
    const wallets = useSelector(selectWallets);

    const [isFetching, setFetching] = useState(false);
    const [isSuccess, setSuccess] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');
    const [publicKey, setPublicKey] = useState('');

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm({
        mode: 'all',
        defaultValues: {
            paymentAcc: '',
            internalCurrency: '',
            realCurrency: '',
        },
    });

    const fieldDescription = {
        paymentAcc: 'Выбор способа оплаты',
        publicKey: 'Номер карты или криптокошелька (заполняется автоматически)',
        internalCurrency: 'Количество покупаемой внутренней валюты',
        realCurrency: 'Стоймость',
    };

    const onSubmit = (data) => {
        setFetching(true);

        console.log('data: ', data);
        toast.success(`Метод для формирования заявки`);

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
        <div className="replenish-balance-form">
            {isFetching && (
                <div className="replenish-balance-form__feedback">
                    <Loader />
                </div>
            )}
            {!isFetching && isSuccess === false && (
                <div className="replenish-balance-form__feedback">
                    <div className="replenish-balance-form__feedback_icon">
                        <FailedIcon />
                    </div>
                    <h3>Провал</h3>
                    <p>{errorMessage || 'Что-то пошло не так...'}</p>
                    <button
                        className="replenish-balance-form__feedback_btn"
                        onClick={() => onCloseModal()}
                    >
                        Жаль
                    </button>
                </div>
            )}
            {!isFetching && isSuccess === true && (
                <div className="replenish-balance-form__feedback">
                    <div className="replenish-balance-form__feedback_icon">
                        <SuccessIcon />
                    </div>
                    <h3>Успех</h3>
                    <p>Зявка успешно сформирована, скоро мы с вам свяжемся</p>
                </div>
            )}
            {!isFetching && isSuccess === null && (
                <div className="replenish-balance-form__row">
                    <div className="replenish-balance-form__header">
                        <h3>Пополнить</h3>
                        <span>Пополнить счёт внутренней валюты</span>
                    </div>
                    <form
                        className="replenish-balance-form__body default-form"
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <div className="default-form__input-wrapper replenish-balance-form__payment-method">
                            <div
                                className="replenish-balance-form__info-icon"
                                onClick={() => {
                                    toast(fieldDescription.paymentAcc, {
                                        icon: 'ℹ️',
                                    });
                                }}
                            >
                                <InfoIcon />
                            </div>
                            <select
                                {...register('paymentAcc', {
                                    validate: (value) => validateSimpleRequired(value),
                                })}
                                className="default-form__select"
                                onChange={(e) => setPublicKey(e.target.value)}
                            >
                                <option value="">Способ платежа</option>
                                {wallets &&
                                    wallets.length !== 0 &&
                                    wallets.map((item, i) => {
                                        return (
                                            <option key={i} value={item.publicKey || item.number}>
                                                {item.walletName || item.bankName}
                                            </option>
                                        );
                                    })}
                            </select>
                            {errors.paymentAcc && (
                                <span className="default-form__error-message">
                                    {errors.paymentAcc?.message}
                                </span>
                            )}
                        </div>
                        <div className="default-form__input-wrapper replenish-balance-form__public-key">
                            <div
                                className="replenish-balance-form__info-icon"
                                onClick={() => {
                                    toast(fieldDescription.publicKey, {
                                        icon: 'ℹ️',
                                    });
                                }}
                            >
                                <InfoIcon />
                            </div>
                            <input
                                className="default-form__input default-form__input_read-only"
                                placeholder="Номер карт или публичный ключ"
                                readOnly
                                value={publicKey}
                            />
                        </div>
                        <div className="default-form__input-wrapper replenish-balance-form__internal-currency">
                            <div
                                className="replenish-balance-form__info-icon"
                                onClick={() => {
                                    toast(fieldDescription.internalCurrency, {
                                        icon: 'ℹ️',
                                    });
                                }}
                            >
                                <InfoIcon />
                            </div>
                            <input
                                className="default-form__input"
                                placeholder="Внутренняя валюта"
                                {...register('internalCurrency', {
                                    validate: (value) => validateForNumbersOnly(value, true),
                                })}
                            />
                            {errors.internalCurrency && (
                                <span className="default-form__error-message">
                                    {errors.internalCurrency?.message}
                                </span>
                            )}
                        </div>
                        <div className="default-form__input-wrapper replenish-balance-form__real-currency">
                            <div
                                className="replenish-balance-form__info-icon"
                                onClick={() => {
                                    toast(fieldDescription.realCurrency, {
                                        icon: 'ℹ️',
                                    });
                                }}
                            >
                                <InfoIcon />
                            </div>
                            <input
                                className="default-form__input default-form__input_read-only"
                                placeholder="Итоговая стоймость"
                                readOnly
                            />
                        </div>
                        <button
                            type="submit"
                            className="default-form__submit-btn replenish-balance-form__submit-btn"
                        >
                            Пополнить
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default ReplenishBlanceForm;
