import React, {useState} from 'react';
import moment from 'moment';
import {AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer} from 'recharts';
import toast from 'react-hot-toast';

import './style/MainInfo.scss';

import DefaultAvatar from './assets/default-avatar.png';
import InfoIcon from './assets/info.svg?jsx';
// import SuccessIcon from './assets/success.svg?jsx';
import CancelIcon from './assets/cancel.svg?jsx';
import EditIcon from './assets/edit.svg?jsx';

import Modal from '../../../../components/Modal/Modal';
import ChangePasswordForm from './components/ChangePasswordForm/ChangePasswordForm';
import AdditionalInfoForm from './components/AdditionalInfoForm/AdditionalInfoForm';

const MainInfo = () => {
    const [changePasswordModal, setChangePasswordModal] = useState(false);
    const [additionalInfoModal, setAdditionalInfoModal] = useState(false);

    const testData = [
        {
            date: '1.07',
            activeTime: 3.2,
        },
        {
            date: '2.07',
            activeTime: 1.3,
        },
        {
            date: '3.07',
            activeTime: 1.7,
        },
        {
            date: '4.07',
            activeTime: 0.8,
        },
    ];

    const exitingExperienceWidth = '10%';

    const fieldDescription = {
        experience: `Текущий опыт: ${'100'} \nСледующий уровень на: ${'1000'}`,
        badge: `Статус аккаунта`,
    };

    const renderChart = () => (
        <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={testData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Area
                    type="monotone"
                    dataKey="activeTime"
                    stackId="1"
                    stroke="var(--app-graphic-color-2)"
                    fill="var(--app-graphic-color-2)"
                    margin={{
                        top: 0,
                        right: 0,
                        left: 0,
                        bottom: 0,
                    }}
                />
            </AreaChart>
        </ResponsiveContainer>
    );
    return (
        <>
            <div className="main-info">
                <div
                    className="main-info__additional-info-icon"
                    onClick={() => setAdditionalInfoModal(true)}
                >
                    <EditIcon />
                </div>
                <div className="main-info__body">
                    <div className="main-info__avatar-wrapper">
                        <div className="main-info__avatar">
                            <img src={DefaultAvatar} alt="default avatar" />
                        </div>
                    </div>
                    <ul className="main-info__item">
                        <li>
                            <div className="main-info__item-label">
                                <p>Почта:</p>
                            </div>
                            <span>ololo@admin.com</span>
                        </li>
                        <li>
                            <div className="main-info__item-label">
                                <p>Имя:</p>
                            </div>
                            <span>Ололо</span>
                        </li>
                        <li>
                            <div className="main-info__item-label">
                                <p>Фамилия:</p>
                            </div>
                            <span>Петруччо</span>
                        </li>
                        <li>
                            <div className="main-info__item-label">
                                <p>Номер:</p>
                            </div>
                            <span>+ 88888888888</span>
                        </li>
                        <li>
                            <div className="main-info__item-label">
                                <p>Пароль:</p>
                            </div>
                            <button
                                className="main-info__item-btn"
                                onClick={() => setChangePasswordModal(true)}
                            >
                                Поменять
                            </button>
                        </li>
                    </ul>
                    <ul className="main-info__item">
                        <li>
                            <div className="main-info__item-label">
                                <p>Дата регистрации:</p>
                            </div>
                            <span>{moment().format('MMMM Do YYYY')}</span>
                        </li>
                        <li>
                            <div className="main-info__item-label">
                                <p>Дата рождения:</p>
                            </div>
                            <span>{moment(40111031).format('MMMM Do YYYY')}</span>
                        </li>
                        <li>
                            <div className="main-info__item-label">
                                <p>Страна:</p>
                            </div>
                            <span>Россия</span>
                        </li>
                        <li>
                            <div className="main-info__item-label">
                                <p>Уровень:</p>
                            </div>
                            <span>1</span>
                        </li>
                        <li>
                            <div className="main-info__item-label">
                                <p>Статус:</p>
                            </div>
                            <div
                                className="main-info__item-badge badge badge_success"
                                onClick={() => {
                                    toast(fieldDescription.badge, {
                                        icon: 'ℹ️',
                                    });
                                }}
                            >
                                PREMIUM
                            </div>
                        </li>
                        <li>
                            <div className="main-info__item-label">
                                <p>Верифицирован:</p>
                            </div>
                            <div className="main-info__item-verify-icon">
                                <CancelIcon />
                            </div>
                        </li>
                    </ul>
                    <ul className="main-info__item">
                        <li className="main-info__chart">{renderChart()}</li>
                    </ul>
                </div>
                <div className="main-info__footer">
                    <div
                        className="main-info__footer-icon"
                        onClick={() => {
                            toast(fieldDescription.experience, {
                                icon: 'ℹ️',
                            });
                        }}
                    >
                        <InfoIcon />
                    </div>
                    <div className="main-info__progress-bar">
                        <div
                            style={{width: exitingExperienceWidth}}
                            className="main-info__existing-experience"
                        ></div>
                    </div>
                </div>
            </div>
            <Modal
                isVisible={changePasswordModal}
                content={<ChangePasswordForm onCloseModal={() => setChangePasswordModal(false)} />}
                onClose={() => setChangePasswordModal(false)}
            />
            <Modal
                isVisible={additionalInfoModal}
                content={<AdditionalInfoForm onCloseModal={() => setAdditionalInfoModal(false)} />}
                onClose={() => setAdditionalInfoModal(false)}
            />
        </>
    );
};

export default MainInfo;
