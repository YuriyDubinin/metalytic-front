import React, {useEffect, useState} from 'react';
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
import MainSideBarDescriptor from './components/MainSideBarDescriptor/MainSideBarDescriptor';

import {selectMainSideBar, setMainSideBar} from '../../../slices/mainSlice';

const MainSideBar = () => {
    const [isModal, setModal] = useState(false);
    const [showDescription, setShowDescription] = useState(false);
    const [itemLabel, setItemLabel] = useState('');

    const mainSideBar = useSelector(selectMainSideBar);

    const dispatch = useDispatch();

    const onMouseMoveSideBar = () => {
        if (!mainSideBar.show) {
            return dispatch(setMainSideBar({...mainSideBar, show: true}));
        }
    };

    const onMouseOutSideBar = () => {
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

    const onMouseMoveItem = (label) => {
        setShowDescription(true);
        setItemLabel(label);
    };

    const onMouseOutItem = () => {
        setShowDescription(false);
        setItemLabel('');
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
            })}
            onMouseMove={(e) => onMouseMoveSideBar(e)}
            onMouseOut={(e) => onMouseOutSideBar(e)}
        >
            <div className="main-side-bar">
                <ul className="main-side-bar__main">
                    <li
                        onMouseMove={() => onMouseMoveItem('ГЛАВНАЯ')}
                        onMouseOut={() => onMouseOutItem()}
                    >
                        <NavLink
                            to={'/'}
                            className="main-side-bar__main-item"
                            activeclassname="main-side-bar__main-item_active"
                        >
                            <WorldIcon />
                        </NavLink>
                        {itemLabel === 'ГЛАВНАЯ' && (
                            <MainSideBarDescriptor showDescription={showDescription}>
                                {itemLabel}
                            </MainSideBarDescriptor>
                        )}
                    </li>
                    <li
                        onMouseMove={() => onMouseMoveItem('ПРОФИЛЬ')}
                        onMouseOut={() => onMouseOutItem()}
                    >
                        <NavLink
                            to={'/profile'}
                            className="main-side-bar__main-item"
                            activeclassname="main-side-bar__main-item_active"
                        >
                            <ProfileIcon />
                        </NavLink>
                        {itemLabel === 'ПРОФИЛЬ' && (
                            <MainSideBarDescriptor showDescription={showDescription}>
                                {'ПРОФИЛЬ'}
                            </MainSideBarDescriptor>
                        )}
                    </li>
                    <li
                        onMouseMove={() => onMouseMoveItem('СПОРТ')}
                        onMouseOut={() => onMouseOutItem()}
                    >
                        <NavLink
                            to={'/sport'}
                            className="main-side-bar__main-item"
                            activeclassname="main-side-bar__main-item_active"
                        >
                            <SportIcon />
                        </NavLink>
                        {itemLabel === 'СПОРТ' && (
                            <MainSideBarDescriptor showDescription={showDescription}>
                                {'СПОРТ'}
                            </MainSideBarDescriptor>
                        )}
                    </li>
                    <li
                        onMouseMove={() => onMouseMoveItem('КОМАНДА')}
                        onMouseOut={() => onMouseOutItem()}
                    >
                        <NavLink
                            to={'/team'}
                            className="main-side-bar__main-item"
                            activeclassname="main-side-bar__main-item_active"
                        >
                            <TeamIcon />
                        </NavLink>
                        {itemLabel === 'КОМАНДА' && (
                            <MainSideBarDescriptor showDescription={showDescription}>
                                {'КОМАНДА'}
                            </MainSideBarDescriptor>
                        )}
                    </li>
                    <li
                        onMouseMove={() => onMouseMoveItem('ВИДЖЕТЫ')}
                        onMouseOut={() => onMouseOutItem()}
                    >
                        <NavLink
                            to={'/widgets'}
                            className="main-side-bar__main-item"
                            activeclassname="main-side-bar__main-item_active"
                        >
                            <WidgetsIcon />
                        </NavLink>
                        {itemLabel === 'ВИДЖЕТЫ' && (
                            <MainSideBarDescriptor showDescription={showDescription}>
                                {'ВИДЖЕТЫ'}
                            </MainSideBarDescriptor>
                        )}
                    </li>
                    <li
                        onMouseMove={() => onMouseMoveItem('ПАРТНЁРЫ')}
                        onMouseOut={() => onMouseOutItem()}
                    >
                        <NavLink
                            to={'/partners'}
                            className="main-side-bar__main-item"
                            activeclassname="main-side-bar__main-item_active"
                        >
                            <PartnersIcon />
                        </NavLink>
                        {itemLabel === 'ПАРТНЁРЫ' && (
                            <MainSideBarDescriptor showDescription={showDescription}>
                                {'ПАРТНЁРЫ'}
                            </MainSideBarDescriptor>
                        )}
                    </li>
                    <li
                        onMouseMove={() => onMouseMoveItem('ПОДДЕРЖКА')}
                        onMouseOut={() => onMouseOutItem()}
                    >
                        <NavLink
                            to={'/support'}
                            className="main-side-bar__main-item"
                            activeclassname="main-side-bar__main-item_active"
                        >
                            <SupportIcon />
                        </NavLink>
                        {itemLabel === 'ПОДДЕРЖКА' && (
                            <MainSideBarDescriptor showDescription={showDescription}>
                                {'ПОДДЕРЖКА'}
                            </MainSideBarDescriptor>
                        )}
                    </li>
                </ul>
                <ul className="main-side-bar__additional">
                    <li
                        className={classNames({
                            'main-side-bar__additional-item': true,
                            'main-side-bar__additional-item_active': false,
                        })}
                        onClick={() => setModal(true)}
                        onMouseMove={() => onMouseMoveItem('УВЕДОМЛЕНИЯ')}
                        onMouseOut={() => onMouseOutItem()}
                    >
                        <NoticeIcon />
                        {itemLabel === 'УВЕДОМЛЕНИЯ' && (
                            <MainSideBarDescriptor showDescription={showDescription}>
                                {'УВЕДОМЛЕНИЯ'}
                            </MainSideBarDescriptor>
                        )}
                    </li>
                    {/* <li
                        className={classNames({
                            'main-side-bar__additional-item': true,
                            'main-side-bar__additional-item_active': mainSideBar.mode === 'DYNAMIC',
                        })}
                        onClick={() => onChangeMode()}
                        onMouseMove={() => onMouseMoveItem('РЕЖИМ')}
                        onMouseOut={() => onMouseOutItem()}
                    >
                        <ModeIcon />
                        {itemLabel === 'РЕЖИМ' && (
                            <MainSideBarDescriptor showDescription={showDescription}>
                                {'РЕЖИМ'}
                            </MainSideBarDescriptor>
                        )}
                    </li> */}
                    <li
                        className="main-side-bar__additional-item"
                        onClick={() =>
                            dispatch(setMainSideBar({show: false, mode: mainSideBar.mode}))
                        }
                        onMouseMove={() => onMouseMoveItem('СКРЫТЬ')}
                        onMouseOut={() => onMouseOutItem()}
                    >
                        <HideIcon />
                        {itemLabel === 'СКРЫТЬ' && (
                            <MainSideBarDescriptor showDescription={showDescription}>
                                {'СКРЫТЬ'}
                            </MainSideBarDescriptor>
                        )}
                    </li>
                </ul>
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
