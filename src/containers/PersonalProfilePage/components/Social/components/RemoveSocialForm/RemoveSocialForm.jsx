import React, {useState} from 'react';
import toast from 'react-hot-toast';

import './style/RemoveSocialForm.scss';

import Loader from '../../../../../../components/Loader/Loader';
import SuccessIcon from './assets/success-default.svg?jsx';
import FailedIcon from './assets/failed-default.svg?jsx';

const RemoveSocialForm = ({onCloseModal, social}) => {
    const [isFetching, setFetching] = useState(false);
    const [isSuccess, setSuccess] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');

    const onSubmit = () => {
        setFetching(true);
        toast.success(`Метод для удаления ${social.networkName}, id: ${social.id}`);
    };

    return (
        <div className="remove-social-form">
            {isFetching && (
                <div className="remove-social-form__feedback">
                    <Loader />
                </div>
            )}
            {!isFetching && isSuccess === false && (
                <div className="remove-social-form__feedback">
                    <div className="remove-social-form__feedback_icon">
                        <FailedIcon />
                    </div>
                    <h3>Провал</h3>
                    <p>{errorMessage}</p>
                    <button
                        className="remove-social-form__feedback_btn"
                        onClick={() => onCloseModal()}
                    >
                        Жаль
                    </button>
                </div>
            )}
            {!isFetching && isSuccess === true && (
                <div className="remove-social-form__feedback">
                    <div className="remove-social-form__feedback_icon">
                        <SuccessIcon />
                    </div>
                    <h3>Успех</h3>
                    <p>{`${social.networkName} успешно удалён из списка социальных сетей`}</p>
                </div>
            )}
            {!isFetching && isSuccess === null && (
                <div className="remove-social-form__row">
                    <div className="remove-social-form__header">
                        <h3>Удалить</h3>
                        <span>{`Вы уверены что хотите удалить свой ${social.networkName}?`}</span>
                    </div>
                    <div className="remove-social-form__body">
                        <button
                            className="remove-social-form__btn remove-social-form__btn_accept"
                            onClick={() => onSubmit()}
                        >
                            Да
                        </button>
                        <button
                            className="remove-social-form__btn remove-social-form__btn_cancel"
                            onClick={() => onCloseModal()}
                        >
                            Нет
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default RemoveSocialForm;
