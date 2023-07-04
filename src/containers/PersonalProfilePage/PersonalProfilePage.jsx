import React from 'react';

import './style/PersonalProfilePage.scss';

import MainInfo from './components/MainInfo/MainInfo';

const PersonalProfilePage = () => {
    return (
        <div className="personal-profile-page">
            <ul className="personal-profile-page__container">
                <li className="personal-profile-page__main-info-card">
                    <MainInfo />
                </li>
                <li className="personal-profile-page__wallets"></li>
                <li className="personal-profile-page__currencies"></li>
                <li className="personal-profile-page__documents"></li>
                <li className="personal-profile-page__activity"></li>
                <li className="personal-profile-page__activity-description"></li>
            </ul>
        </div>
    );
};

export default PersonalProfilePage;
