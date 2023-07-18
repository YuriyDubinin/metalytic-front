import React, {useState} from 'react';
import {useSelector} from 'react-redux';

import './style/Wallets.scss';

import AddWalletIcon from './assets/wallet-add.svg?jsx';
import KeyIcon from './assets/key.svg?jsx';
import CopyIcon from './assets/copy.svg?jsx';
import TrashIcon from './assets/trash.svg?jsx';
import MetaMaskLogoIcon from './assets/metamask-logo.svg?jsx';
import BinanceLogoIcon from './assets/binance-logo.svg?jsx';
import TronLogoIcon from './assets/tron-logo.svg?jsx';
import TrustWalletLogoIcon from './assets/trust-wallet-logo.svg?jsx';
import CreditCardLogoIcon from './assets/credit-card-logo.svg?jsx';

import Modal from '../../../../components/Modal/Modal';
import AddWalletForm from './components/AddWalletForm/AddWalletForm';
import RemoveWalletForm from './components/RemoveWalletForm/RemoveWalletForm';

import copyText from '../../../../helpers/copyText';

import {selectWallets} from '../../../../slices/mainSlice';

const Wallets = () => {
    const wallets = useSelector(selectWallets);

    const [wallet, setWallet] = useState(null);
    const [addWalletModal, setAddWalletModal] = useState(false);
    const [removeWalletModal, setRemoveWalletModal] = useState(false);

    const onCopyWallet = (elementId) => {
        copyText(elementId);
    };

    const createWalletsList = () => {
        return (
            <ul className="wallets__body">
                {wallets && wallets.length === 0 && (
                    <li className="wallets__body-empty">
                        <span>No connected wallets or cards</span>
                    </li>
                )}
                {wallets &&
                    wallets.length !== 0 &&
                    wallets.map((wallet, i) => {
                        return (
                            <li key={i} className="wallets__body-item">
                                <div className="wallets__body-item-logo">
                                    {wallet.type === 'wallet' &&
                                        wallet.walletName === 'MetaMask' && <MetaMaskLogoIcon />}
                                    {wallet.type === 'wallet' &&
                                        wallet.walletName === 'Binance' && <BinanceLogoIcon />}
                                    {wallet.type === 'wallet' && wallet.walletName === 'Tron' && (
                                        <TronLogoIcon />
                                    )}
                                    {wallet.type === 'wallet' &&
                                        wallet.walletName === 'Trust Wallet' && (
                                            <TrustWalletLogoIcon />
                                        )}
                                    {wallet.type === 'card' && <CreditCardLogoIcon />}
                                </div>
                                <div className="wallets__body-item-name">
                                    <span>
                                        {wallet.type === 'wallet'
                                            ? wallet.walletName
                                            : wallet.bankName}
                                    </span>
                                </div>
                                <div className="wallets__body-item-key">
                                    <KeyIcon />
                                    <input
                                        id={`data-wallet=${wallet.id}`}
                                        readOnly
                                        value={
                                            wallet.type === 'wallet'
                                                ? wallet.publicKey
                                                : wallet.number
                                        }
                                        onClick={() => onCopyWallet(`data-wallet=${wallet.id}`)}
                                    />
                                </div>
                                <div className="wallets__body-item-actions">
                                    <div
                                        className="wallets__body-item-action-icon"
                                        title="Скопировать номер"
                                        onClick={() => onCopyWallet(`data-wallet=${wallet.id}`)}
                                    >
                                        <CopyIcon />
                                    </div>
                                    <div
                                        className="wallets__body-item-action-icon"
                                        title="Удалить"
                                        onClick={() => {
                                            setWallet(wallet);
                                            setRemoveWalletModal(true);
                                        }}
                                    >
                                        <TrashIcon />
                                    </div>
                                </div>
                            </li>
                        );
                    })}
            </ul>
        );
    };

    return (
        <>
            <div className="wallets">
                <div className="wallets__header">
                    <h3>Мои кошельки</h3>
                    <div className="wallets__add-icon" onClick={() => setAddWalletModal(true)}>
                        <AddWalletIcon />
                    </div>
                </div>
                {createWalletsList()}
            </div>
            <Modal
                isVisible={removeWalletModal}
                content={
                    <RemoveWalletForm
                        wallet={wallet}
                        onCloseModal={() => setRemoveWalletModal(false)}
                    />
                }
                onClose={() => setRemoveWalletModal(false)}
            />
            <Modal
                isVisible={addWalletModal}
                content={<AddWalletForm onCloseModal={() => setAddWalletModal(false)} />}
                onClose={() => setAddWalletModal(false)}
            />
        </>
    );
};

export default Wallets;
