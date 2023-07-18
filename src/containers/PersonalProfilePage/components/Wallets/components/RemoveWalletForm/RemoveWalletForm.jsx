import React, {useState} from 'react';
import toast from 'react-hot-toast';

import './style/RemoveWalletForm.scss';

import Loader from '../../../../../../components/Loader/Loader';
import SuccessIcon from './assets/success-default.svg?jsx';
import FailedIcon from './assets/failed-default.svg?jsx';

const RemoveWalletForm = ({onCloseModal, wallet}) => {
    const [isFetching, setFetching] = useState(false);
    const [isSuccess, setSuccess] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');

    const onRemoveWallet = () => {
        setFetching(true);
        toast.success(`Метод для удаления ${wallet.name}, id: ${wallet.id}`);
    };

    return (
        <div className="remove-wallet-form">
            {isFetching && (
                <div className="remove-wallet-form__feedback">
                    <Loader />
                </div>
            )}
            {!isFetching && isSuccess === false && (
                <div className="remove-wallet-form__feedback">
                    <div className="remove-wallet-form__feedback_icon">
                        <FailedIcon />
                    </div>
                    <h3>Провал</h3>
                    <p>{errorMessage}</p>
                    <button
                        className="remove-wallet-form__feedback_btn"
                        onClick={() => onCloseModal()}
                    >
                        Жаль
                    </button>
                </div>
            )}
            {!isFetching && isSuccess === true && (
                <div className="remove-wallet-form__feedback">
                    <div className="remove-wallet-form__feedback_icon">
                        <SuccessIcon />
                    </div>
                    <h3>Успех</h3>
                    <p>{`${wallet.name} успешно удалён из списка кошельков`}</p>
                </div>
            )}
            {!isFetching && isSuccess === null && (
                <div className="remove-wallet-form__row">
                    <div className="remove-wallet-form__header">
                        <h3>Удалить</h3>
                        <span>{`Вы уверены что хотите удалить свой ${wallet.name}?`}</span>
                    </div>
                    <div className="remove-wallet-form__body">
                        <button
                            className="remove-wallet-form__btn remove-wallet-form__btn_accept"
                            onClick={() => onRemoveWallet()}
                        >
                            Да
                        </button>
                        <button
                            className="remove-wallet-form__btn remove-wallet-form__btn_cancel"
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

export default RemoveWalletForm;
