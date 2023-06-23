import React from 'react';

import {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {NavLink} from 'react-router-dom';
import classNames from 'classnames';

import './style/MainSideBar.scss';

import ModeIcon from './assets/mode.svg?jsx';
import HideIcon from './assets/back.svg?jsx';
import WorldIcon from './assets/world.svg?jsx';
import ProfileIcon from './assets/profile.svg?jsx';
import SportIcon from './assets/ball-1.svg?jsx';
import TeamIcon from './assets/team.svg?jsx';
import WidgetsIcon from './assets/widgets.svg?jsx';
import PartnersIcon from './assets/partners.svg?jsx';
import SupportIcon from './assets/support.svg?jsx';
import NoticeIcon from './assets/notice.svg?jsx';

import Modal from '../../../components/Modal/Modal';
import Notifications from '../../../components/Notifications/Notifications';

import {selectMainSideBar, setMainSideBar} from '../../../slice/mainSlice';

const MainSideBar = () => {
    const [isModal, setModal] = useState(false);
    const [showDescription, setShowDescription] = useState(false);
    const [descriptorSettings, setDesriptorSettings] = useState({});

    const mainSideBar = useSelector(selectMainSideBar);

    const dispatch = useDispatch();

    const onMouseMove = () => {
        setShowDescription(true);

        if (!mainSideBar.show) {
            return dispatch(setMainSideBar({...mainSideBar, show: true}));
        }
    };

    const onMouseOut = () => {
        setShowDescription(false);

        if (mainSideBar.mode === 'DYNAMIC') {
            setTimeout(() => {
                return dispatch(setMainSideBar({...mainSideBar, show: false}));
            }, 0);
        }
    };

    const onChangeMode = () => {
        mainSideBar.mode === 'STATIC'
            ? dispatch(setMainSideBar({...mainSideBar, mode: 'DYNAMIC'}))
            : dispatch(setMainSideBar({...mainSideBar, mode: 'STATIC'}));
    };

    useEffect(() => {
        if (mainSideBar.mode === 'DYNAMIC') {
            // console.log('mode: DYNAMIC');
        }
    }, [mainSideBar.show, mainSideBar.mode]);

    return (
        <div
            className={classNames({
                'main-side-bar-wrap': true,
                'main-side-bar-wrap_hide': !mainSideBar.show,
                // 'main-side-bar-wrap_close': !mainSideBar.open && mainSideBar.mode === 'DYNAMIC',
            })}
            onMouseMove={(e) => onMouseMove(e)}
            onMouseOut={(e) => onMouseOut(e)}
        >
            <div className="main-side-bar">
                <ul className="main-side-bar__main">
                    <li>
                        <NavLink
                            to={'/'}
                            className="main-side-bar__main-item"
                            activeclassname="main-side-bar__main-item_active"
                        >
                            <WorldIcon />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={'/profile'}
                            className="main-side-bar__main-item"
                            activeclassname="main-side-bar__main-item_active"
                        >
                            <ProfileIcon />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={'/sport'}
                            className="main-side-bar__main-item"
                            activeclassname="main-side-bar__main-item_active"
                        >
                            <SportIcon />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={'/team'}
                            className="main-side-bar__main-item"
                            activeclassname="main-side-bar__main-item_active"
                        >
                            <TeamIcon />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={'/widgets'}
                            className="main-side-bar__main-item"
                            activeclassname="main-side-bar__main-item_active"
                        >
                            <WidgetsIcon />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={'/partners'}
                            className="main-side-bar__main-item"
                            activeclassname="main-side-bar__main-item_active"
                        >
                            <PartnersIcon />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={'/support'}
                            className="main-side-bar__main-item"
                            activeclassname="main-side-bar__main-item_active"
                        >
                            <SupportIcon />
                        </NavLink>
                    </li>
                </ul>
                <div className="main-side-bar__additional">
                    <div
                        className={classNames({
                            'main-side-bar__additional-item': true,
                            'main-side-bar__additional-item_active': false,
                        })}
                        onClick={() => setModal(true)}
                    >
                        <NoticeIcon />
                    </div>
                    <div
                        className={classNames({
                            'main-side-bar__additional-item': true,
                            'main-side-bar__additional-item_active': mainSideBar.mode === 'DYNAMIC',
                        })}
                        onClick={() => onChangeMode()}
                    >
                        <ModeIcon />
                    </div>
                    <div
                        className="main-side-bar__additional-item"
                        onClick={() =>
                            dispatch(setMainSideBar({show: false, mode: mainSideBar.mode}))
                        }
                    >
                        <HideIcon />
                    </div>
                </div>
            </div>
            <Modal
                isVisible={isModal}
                content={<Notifications />}
                onClose={() => setModal(false)}
            />
        </div>
    );
};

export default MainSideBar;
