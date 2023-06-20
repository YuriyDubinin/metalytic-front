import React from 'react';

import './style/Layout.scss';

import MainSideBar from './components/MainSideBar/MainSideBar';
import Header from './components/Header/Header';

const Layout = ({children}) => {
    return (
        <div className="document">
            <Header />
            <main className="main-wrapper">
                <aside>{<MainSideBar />}</aside>
                <div className="main-content">{children && children}</div>
            </main>
        </div>
    );
};

export default Layout;
