import React, {lazy, Suspense} from 'react';
import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Toaster} from 'react-hot-toast';

import Layout from '../layouts/Layout';
import MainPage from '../containers/MainPage/MainPage';

import {setCustomSettings} from '../slices/mainSlice';

const PersonalProfilePage = lazy(() => import('../containers/PersonalProfilePage/PersonalProfilePage'));
const SportPage = lazy(() => import('../containers/SportPage/SportPage'));
const TeamPage = lazy(() => import('../containers/TeamPage/TeamPage'));
const WidgetsPage = lazy(() => import('../containers/WidgetsPage/WidgetsPage'));
const PartnersPage = lazy(() => import('../containers/PartnersPage/PartnersPage'));
const SupportPage = lazy(() => import('../containers/SupportPage/SupportPage'));


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
                <Suspense>
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
                </Suspense>
            </Layout>
            <Toaster />
        </BrowserRouter>
    );
};

export default App;
