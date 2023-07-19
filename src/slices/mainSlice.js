import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    isAuth: true,
    customSettings: {
        mainSideBar: {
            show: true,
            mode: 'STATIC',
        },
    },
    wallets: [
        {
            id: 1,
            walletName: 'MetaMask',
            publicKey: 'bc1qfg9t7fwn0atn4yf9spca5502vk8dyhq8a9aqd8',
            type: 'wallet',
            connected: true,
        },
        {
            id: 2,
            walletName: 'Binance',
            publicKey: '1N4Qbzg6LSXUXyXu2MDuGfzxwMA7do8AyL',
            type: 'wallet',
            connected: true,
        },
        {
            id: 3,
            walletName: 'Tron',
            publicKey: 'bc1peu5hzzyj8cnqm05le6ag7uwry0ysmtf3v4uuxv3v8hqhvsatca8ss2vuwx',
            type: 'wallet',
            connected: true,
        },
        {
            id: 4,
            walletName: 'Trust Wallet',
            publicKey: '24soidjfoj1o2joj21o3ij23o4j234j23j42k3nj5k34nj5',
            type: 'wallet',
            connected: true,
        },
        {
            id: 5,
            bankName: 'Tinkoff',
            number: '1234567890123456',
            type: 'card',
            paymentSystem: 'Mastercard',
            connected: true,
        },
        {
            id: 6,
            bankName: 'Sberbank',
            number: '0123456789012345',
            type: 'card',
            paymentSystem: 'Mastercard',
            connected: true,
        },
        {
            id: 7,
            bankName: 'RNCB',
            number: '0123456789012345',
            type: 'card',
            paymentSystem: 'МИР',
            connected: true,
        },
    ],
    internalCurrencyLogs: [
        {
            currency: 50,
            action: 'Регистрация аккаунта',
            date: '1.07.2023',
        },
        {
            currency: 50,
            action: 'Верификация почты',
            date: '1.07.2023',
        },
        {
            currency: 10,
            action: 'Заполнение доп.данных',
            date: '4.07.2023',
        },
        {
            currency: 20,
            action: 'Добавление MetaMsk',
            date: '11.07.2023',
        },
        {
            currency: 20,
            action: 'Добавление Binance',
            date: '11.07.2023',
        },
        {
            currency: 20,
            action: 'Добавление Tron',
            date: '11.07.2023',
        },
        {
            currency: 20,
            action: 'Добавление Trust Wallet',
            date: '11.07.2023',
        },
        {
            currency: 20,
            action: 'Добавление Tinkoff',
            date: '18.07.2023',
        },
        {
            currency: 20,
            action: 'Добавление Sberbank',
            date: '18.07.2023',
        },
        {
            currency: 20,
            action: 'Добавление RNCB',
            date: '18.07.2023',
        },
    ],
    socialNetworks: [
        {
            id: 1,
            networkName: 'Vkontakte',
            link: 'https://vk.com/jfkshdkfjhsdkfhksdhfksd',
        },
        {
            id: 2,
            networkName: 'Instagram',
            link: 'https://www.instagram.com/accounts/login/?next=https%3A%2F%2Fwww.instagram.com%2F',
        },
        {
            id: 3,
            networkName: 'Odnoklassniki',
            link: 'https://ok.ru/ksdjflskdflskdklskdmlfksmdlfkms',
        },
        {
            id: 4,
            networkName: 'Facebook',
            link: 'https://ru-ru.facebook.com/sdfishdkjnfksdjnfksndklfnskdf',
        },
        {
            id: 5,
            networkName: 'Linkedin',
            link: 'https://ru.linkedin.com/jsjdkfhsldkfhskdhfksldhf',
        },
        {
            id: 6,
            networkName: 'Twitter',
            link: 'https://twitter.com/i/flow/login?redirect_after_login=%2F%3Flang%3Dru',
        },
    ],
};

export const mainSlice = createSlice({
    name: 'general',
    initialState,
    reducers: {
        setIsAuth: (state, action) => {
            state.isAuth = action.payload;
        },
        setCustomSettings: (state, action) => {
            state.customSettings = action.payload;
        },
        setMainSideBar: (state, action) => {
            state.customSettings = {
                mainSideBar: action.payload,
            };
        },
        setWallets: (state, action) => {
            state.wallets = action.payload;
        },
        setInternalCurrencyLogs: (state, action) => {
            state.internalCurrencyLogs = action.payload;
        },
        setSocialNetworks: (state, action) => {
            state.socialNetworks = action.payload;
        },
    },
});

export const {
    setIsAuth,
    setCustomSettings,
    setMainSideBar,
    setWallets,
    setInternalCurrencyLogs,
    setSocialNetworks,
} = mainSlice.actions;

export const selectIsAuth = (state) => state.general.isAuth;
export const selectCustommSettings = (state) => state.general.customSettings;
export const selectMainSideBar = (state) => state.general.customSettings.mainSideBar;
export const selectWallets = (state) => state.general.wallets;
export const selectInternalCurrencyLogs = (state) => state.general.internalCurrencyLogs;
export const selectSocialNetworks = (state) => state.general.socialNetworks;

export default mainSlice.reducer;
