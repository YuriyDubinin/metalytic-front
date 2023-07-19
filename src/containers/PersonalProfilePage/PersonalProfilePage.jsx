import React from 'react';

import './style/PersonalProfilePage.scss';

import MainInfo from './components/MainInfo/MainInfo';
import Wallets from './components/Wallets/Wallets';
import InternalCurrency from './components/InternalCurrency/InternalCurrency';
import Social from './components/Social/Social';
import Interests from './components/Interests/Interests';
import WinRate from './components/WinRate/WinRate';

const PersonalProfilePage = () => {
    return (
        <div className="personal-profile-page">
            <ul className="personal-profile-page__container">
                <li className="personal-profile-page__main-info-card">
                    <MainInfo />
                </li>
                <li className="personal-profile-page__wallets">
                    <Wallets />
                </li>
                <li className="personal-profile-page__currencies">
                    <InternalCurrency />
                </li>
                <li className="personal-profile-page__social">
                    <Social />
                </li>
                <li className="personal-profile-page__interests">
                    <Interests />
                </li>
                <li className="personal-profile-page__win-rate">
                    <WinRate />
                </li>
            </ul>
        </div>
    );
};

export default PersonalProfilePage;
