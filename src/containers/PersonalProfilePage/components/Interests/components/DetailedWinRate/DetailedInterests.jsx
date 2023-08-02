import React from 'react';
import {Treemap, ResponsiveContainer} from 'recharts';
import {useSelector} from 'react-redux';

import './style/DetailedInterests.scss';

import {selectInterests} from '../../../../../../slices/mainSlice';

const DetailedInterests = () => {
    const interests = useSelector(selectInterests);

    const renderChart = () => {
        return (
            <ResponsiveContainer width="100%" height="100%">
                <Treemap
                    data={interests}
                    dataKey="rate"
                    aspectRatio={4 / 3}
                    fillOpacity={0.7}
                    animationDuration={1200}
                />
            </ResponsiveContainer>
        );
    };

    return <div className="detailed-interests">{renderChart()}</div>;
};

export default DetailedInterests;
