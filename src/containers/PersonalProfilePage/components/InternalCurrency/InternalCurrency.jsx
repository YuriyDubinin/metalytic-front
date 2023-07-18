import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import toast from 'react-hot-toast';

import './style/InternalCurrency.scss';

import CoinIcon from './assets/coin.svg?jsx';

import Modal from '../../../../components/Modal/Modal';
import ReplenishBlanceForm from './components/ReplenishBalanceForm/ReplenishBalanceForm';

import {selectInternalCurrencyLogs} from '../../../../slices/mainSlice';

const InternalCurrency = () => {
    const internalCurrencLogs = useSelector(selectInternalCurrencyLogs);

    const [replenishBalanceModal, setReplenishBalanceModal] = useState(false);

    const createLogList = () => {
        return (
            <ul className="internal-currency__body">
                {internalCurrencLogs && internalCurrencLogs.length === 0 && (
                    <li className="internal-currency__body-empty">
                        <span>Действия приносящие внутреннюю валюту отсутствуют</span>
                    </li>
                )}
                {internalCurrencLogs &&
                    internalCurrencLogs.length !== 0 &&
                    internalCurrencLogs.map((item, i) => {
                        return (
                            <li key={i} className="internal-currency__body-item">
                                <div className="internal-currency__body-item-currency">
                                    <div className="internal-currency__body-item-logo">
                                        <CoinIcon />
                                    </div>
                                    <p>{item.currency}</p>
                                </div>
                                <div className="internal-currency__body-item-action">
                                    {item.action}
                                </div>
                                <div className="internal-currency__body-item-date">{item.date}</div>
                            </li>
                        );
                    })}
            </ul>
        );
    };

    const fieldDescription = {
        badge: `Статус аккаунта`,
        currency: `Количество внутренней валюты`,
    };

    return (
        <>
            <div className="internal-currency">
                <div className="internal-currency__header">
                    <div
                        className="internal-currency__currency"
                        onClick={() => {
                            toast(fieldDescription.currency, {
                                icon: 'ℹ️',
                            });
                        }}
                    >
                        <CoinIcon />
                        <p>250</p>
                    </div>
                    <div className="internal-currency__personal-status">
                        <p>Статус аккаунта: </p>
                        <div
                            className="internal-currency__badge badge badge_success"
                            onClick={() => {
                                toast(fieldDescription.badge, {
                                    icon: 'ℹ️',
                                });
                            }}
                        >
                            PREMIUM
                        </div>
                    </div>
                    <div className="internal-currency__replenish-balance">
                        <button onClick={() => setReplenishBalanceModal(true)}>Пополнить</button>
                    </div>
                </div>
                {createLogList()}
            </div>
            <Modal
                isVisible={replenishBalanceModal}
                content={
                    <ReplenishBlanceForm onCloseModal={() => setReplenishBalanceModal(false)} />
                }
                onClose={() => setReplenishBalanceModal(false)}
            />
        </>
    );
};

export default InternalCurrency;
