import React, {useState} from 'react';
import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
    ResponsiveContainer,
} from 'recharts';
import {useSelector} from 'react-redux';
import toast from 'react-hot-toast';

import './style/WinRate.scss';

import InfoIcon from './assets/info-square.svg?jsx';

import Modal from '../../../../components/Modal/Modal';
import DetailedWinRate from './components/DetailedWinRate/DetailedWinRate';

import {selectWinrates} from '../../../../redux';

const WinRate = () => {
    const winRates = useSelector(selectWinrates);

    const [detailedModal, setDetailedModal] = useState(false);

    const fieldDescription = {
        winRate:
            'Рейтинг выших удачных прогнозов (кликните на график для более развёрнутой информации)',
    };

    const renderChart = () => {
        return (
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={winRates}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="name" />
                    <PolarRadiusAxis />
                    <Radar dataKey="victories" stroke="#3182bd" fill="#3182bd" fillOpacity={0.6} />
                </RadarChart>
            </ResponsiveContainer>
        );
    };

    return (
        <>
            <div className="win-rate">
                <div className="win-rate__header">
                    <h3>Мои рейтинги</h3>
                    <div
                        className="win-rate__info-icon"
                        onClick={() => {
                            toast(fieldDescription.winRate, {
                                icon: 'ℹ️',
                            });
                        }}
                    >
                        <InfoIcon />
                    </div>
                </div>
                <div className="win-rate__body">
                    <div className="win-rate__chart" onClick={() => setDetailedModal(true)}>
                        {renderChart()}
                    </div>
                </div>
            </div>
            <Modal
                isVisible={detailedModal}
                content={<DetailedWinRate onCloseModal={() => setDetailedModal(false)} />}
                onClose={() => setDetailedModal(false)}
            />
        </>
    );
};

export default WinRate;
