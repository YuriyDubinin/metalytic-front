import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {Treemap, ResponsiveContainer} from 'recharts';
import toast from 'react-hot-toast';

import './style/Interests.scss';

import InfoIcon from './assets/info-square.svg?jsx';

import Modal from '../../../../components/Modal/Modal';
import DetailedInterests from './components/DetailedWinRate/DetailedInterests';

import {selectInterests} from '../../../../slices/mainSlice';

const Interests = () => {
    const interests = useSelector(selectInterests);

    const [detailedModal, setDetailedModal] = useState(false);

    const fieldDescription = {
        interests:
            'Визуализация ваших спортивных интересов (кликните на график для более развёрнутой информации)',
    };

    const renderChart = () => {
        return (
            <ResponsiveContainer width="100%" height="100%">
                <Treemap data={interests} dataKey="rate" aspectRatio={4 / 3} />
            </ResponsiveContainer>
        );
    };

    return (
        <>
            <div className="interests">
                <div className="interests__header">
                    <h3>Мои интересы</h3>
                    <div
                        className="interests__info-icon"
                        onClick={() => {
                            toast(fieldDescription.interests, {
                                icon: 'ℹ️',
                            });
                        }}
                    >
                        <InfoIcon />
                    </div>
                </div>
                <div className="interests__body">
                    <div className="interests__chart" onClick={() => setDetailedModal(true)}>
                        {renderChart()}
                    </div>
                </div>
            </div>
            <Modal
                isVisible={detailedModal}
                content={<DetailedInterests onCloseModal={() => setDetailedModal(false)} />}
                onClose={() => setDetailedModal(false)}
            />
        </>
    );
};

export default Interests;
