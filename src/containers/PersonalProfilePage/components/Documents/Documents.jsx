import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import toast from 'react-hot-toast';

import './style/Documents.scss';

import InfoIcon from './assets/info.svg?jsx';

import Modal from '../../../../components/Modal/Modal';

const Documents = () => {
    const fieldDescription = {
        documentsInfo:
            'Документы помогают нам удостовериться в том, что вы реальный человек, а вам приносят дополнительный опыт и внутреннюю валюту',
    };

    return (
        <div className="documents">
            <div className="documents__header">
                <h3>Мои документы</h3>
                {/* <div
                    className="documents__info-icon"
                    onClick={() => {
                        toast(fieldDescription.documentsInfo, {
                            icon: 'ℹ️',
                        });
                    }}
                >
                    <InfoIcon />
                </div> */}
            </div>
        </div>
    );
};

export default Documents;
