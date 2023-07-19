import React from 'react';
import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
    ResponsiveContainer,
} from 'recharts';
import {useSelector} from 'react-redux';

import './style/DetailedWinRate.scss';

import {selectWinrates} from '../../../../../../slices/mainSlice';

const DetailedWinRate = () => {
    const winRates = useSelector(selectWinrates);

    const renderChart = () => {
        return (
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={winRates}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="name" />
                    <PolarRadiusAxis />
                    <Radar
                        dataKey="victories"
                        stroke="#3182bd"
                        fill="#3182bd"
                        fillOpacity={0.6}
                        animationDuration={1200}
                    />
                </RadarChart>
            </ResponsiveContainer>
        );
    };

    return <div className="detailed-win-rate">{renderChart()}</div>;
};

export default DetailedWinRate;
