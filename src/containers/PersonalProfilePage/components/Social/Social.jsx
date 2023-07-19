import React, {useState} from 'react';
import {useSelector} from 'react-redux';

import './style/Social.scss';

import AddSocialIcon from './assets/social-add.svg?jsx';
import WarningIcon from './assets/warning.svg?jsx';
import VkIcon from './assets/vk.svg?jsx';
import InstagramIcon from './assets/instagram.svg?jsx';
import OkIcon from './assets/ok.svg?jsx';
import FacebookIcon from './assets/facebook.svg?jsx';
import LinkedinIcon from './assets/linkedin.svg?jsx';
import TwitterIcon from './assets/twitter.svg?jsx';
import CopyIcon from './assets/copy.svg?jsx';
import TrashIcon from './assets/trash.svg?jsx';

import Modal from '../../../../components/Modal/Modal';
import AddSocialForm from './components/AddSocialForm/AddSocialForm';
import RemoveSocialForm from './components/RemoveSocialForm/RemoveSocialForm';

import copyText from '../../../../helpers/copyText';

import {selectSocialNetworks} from '../../../../slices/mainSlice';

const Social = () => {
    const [addSocialModal, setAddSocialModal] = useState(false);
    const [removeSocialModal, setRemoveSocialModal] = useState(false);
    const [social, setSocial] = useState(null);

    const socialList = useSelector(selectSocialNetworks);

    const onCopySocial = (elementId) => {
        copyText(elementId);
    };

    const createSocialList = () => {
        return (
            <ul className="social__body">
                {socialList && socialList.length === 0 && (
                    <li className="social__body-empty">
                        <span>Нет подключённых социальных сетей</span>
                    </li>
                )}
                {socialList &&
                    socialList.length !== 0 &&
                    socialList.map((item, i) => {
                        return (
                            <li key={i} className="social__body-item">
                                <div className="social__body-item-logo">
                                    {item.networkName === 'Vkontakte' && <VkIcon />}
                                    {item.networkName === 'Instagram' && <InstagramIcon />}
                                    {item.networkName === 'Odnoklassniki' && <OkIcon />}
                                    {item.networkName === 'Facebook' && <FacebookIcon />}
                                    {item.networkName === 'Linkedin' && <LinkedinIcon />}
                                    {item.networkName === 'Twitter' && <TwitterIcon />}
                                </div>
                                <div className="social__body-item-name">
                                    <span>{item.networkName}</span>
                                </div>
                                <div className="social__body-item-link">
                                    <input
                                        id={`data-social=${item.id}`}
                                        readOnly
                                        value={item.link}
                                        onClick={() => onCopySocial(`data-social=${item.id}`)}
                                    />
                                </div>
                                <div className="social__body-item-actions">
                                    <div
                                        className="social__body-item-action-icon"
                                        title="Скопировать ссылку"
                                        onClick={() => onCopySocial(`data-social=${item.id}`)}
                                    >
                                        <CopyIcon />
                                    </div>
                                    <div
                                        className="social__body-item-action-icon"
                                        title="Удалить"
                                        onClick={() => {
                                            setSocial(item);
                                            setRemoveSocialModal(true);
                                        }}
                                    >
                                        <TrashIcon />
                                    </div>
                                </div>
                            </li>
                        );
                    })}
            </ul>
        );
    };

    return (
        <>
            <div className="social">
                <div className="social__header">
                    <h3>Мои социальные сети</h3>
                    <div className="social__add-icon" onClick={() => setAddSocialModal(true)}>
                        <AddSocialIcon />
                    </div>
                </div>
                {createSocialList()}
                <div className="social__description">
                    <div className="social__description-header">
                        <h3>Внимание</h3>
                        <div className="social__description-header-icon">
                            <WarningIcon />
                        </div>
                    </div>
                    <div className="social__description-body">
                        Данный раздел предназначен для дополнительной{' '}
                        <span>верификации аккаунта</span>, нам это помогает понять что вы -{' '}
                        <span>реальный человек</span>, а заполнение данного раздела приносит вам{' '}
                        <span>дополнительный опыт</span> и <span>внутреннюю валюту</span>, если у
                        вас есть какие-то вопросы касающиеся этого раздела, рекомендуем вам
                        обратиться в <span>техническую поддержку</span> для получения дополнительной
                        информации. Этот раздел совсем <span>не обязателен</span> к заполнению, так
                        что если это противоречит вашим внутренним принципам, просто{' '}
                        <span>проигнорируйте его</span>.
                    </div>
                </div>
            </div>
            <Modal
                isVisible={removeSocialModal}
                content={
                    <RemoveSocialForm
                        social={social}
                        onCloseModal={() => setRemoveSocialModal(false)}
                    />
                }
                onClose={() => setRemoveSocialModal(false)}
            />
            <Modal
                isVisible={addSocialModal}
                content={<AddSocialForm onCloseModal={() => setAddSocialModal(false)} />}
                onClose={() => setAddSocialModal(false)}
            />
        </>
    );
};

export default Social;
