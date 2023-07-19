import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    isAuth: true,
    customSettings: {
        mainSideBar: {
            show: true,
            mode: 'STATIC',
        },
    },
    activity: [
        {
            date: '1.07',
            activeTime: 3.2,
        },
        {
            date: '2.07',
            activeTime: 1.3,
        },
        {
            date: '3.07',
            activeTime: 1.7,
        },
        {
            date: '4.07',
            activeTime: 0.8,
        },
    ],
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
    interests: [
        {
            name: 'Баскетбол',
            rate: 45,
        },
        {
            name: 'Хоккей',
            rate: 15,
        },
        {
            name: 'Волейбол',
            rate: 20,
        },
        {
            name: 'Крикет',
            rate: 10,
        },
        {
            name: 'Кёрлинг',
            rate: 10,
        },
        {
            name: 'Бокс',
            rate: 15,
        },
    ],
    winRates: [
        {
            name: 'Баскетбол',
            victories: 5,
        },
        {
            name: 'Хоккей',
            victories: 11,
        },
        {
            name: 'Волейбол',
            victories: 2,
        },
        {
            name: 'Крикет',
            victories: 4,
        },
        {
            name: 'Кёрлинг',
            victories: 3,
        },
        {
            name: 'Бокс',
            victories: 15,
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
        setActivity: (state, action) => {
            state.activity = action.payload;
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
        setInterests: (state, action) => {
            state.interests = action.payload;
        },
        setWinrates: (state, action) => {
            state.winRates = action.payload;
        },
    },
});

export const {
    setIsAuth,
    setCustomSettings,
    setMainSideBar,
    setActivity,
    setWallets,
    setInternalCurrencyLogs,
    setSocialNetworks,
    setInterests,
    setWinrates,
} = mainSlice.actions;

export const selectIsAuth = (state) => state.general.isAuth;
export const selectCustommSettings = (state) => state.general.customSettings;
export const selectMainSideBar = (state) => state.general.customSettings.mainSideBar;
export const selectActivity = (state) => state.general.activity;
export const selectWallets = (state) => state.general.wallets;
export const selectInternalCurrencyLogs = (state) => state.general.internalCurrencyLogs;
export const selectSocialNetworks = (state) => state.general.socialNetworks;
export const selectInterests = (state) => state.general.interests;
export const selectWinrates = (state) => state.general.winRates;

export default mainSlice.reducer;
