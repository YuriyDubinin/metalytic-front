import React from 'react';
import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Toaster} from 'react-hot-toast';

import Layout from '../layouts/Layout';
import MainPage from '../containers/MainPage/MainPage';
import PersonalProfilePage from '../containers/PersonalProfilePage/PersonalProfilePage';
import SportPage from '../containers/SportPage/SportPage';
import TeamPage from '../containers/TeamPage/TeamPage';
import WidgetsPage from '../containers/WidgetsPage/WidgetsPage';
import PartnersPage from '../containers/PartnersPage/PartnersPage';
import SupportPage from '../containers/SupportPage/SupportPage';

import {setCustomSettings} from '../slice/mainSlice';

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        // from localStorage
        const getCustomSettings = () => {
            const custommSettings = localStorage.getItem('customSettings');

            if (custommSettings) {
                dispatch(setCustomSettings(custommSettings));
            }
        };

        Promise.all([getCustomSettings()]);
    }, []);

    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/profile" element={<PersonalProfilePage />} />
                    <Route path="/sport" element={<SportPage />} />
                    <Route path="/team" element={<TeamPage />} />
                    <Route path="/widgets" element={<WidgetsPage />} />
                    <Route path="/partners" element={<PartnersPage />} />
                    <Route path="/support" element={<SupportPage />} />
                    <Route path="*" element={<>404</>} />
                </Routes>
            </Layout>
            <Toaster />
        </BrowserRouter>
    );
};

export default App;
