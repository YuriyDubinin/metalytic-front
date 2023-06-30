import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    isAuth: false,
    customSettings: {
        mainSideBar: {
            show: true,
            mode: 'STATIC',
        },
    },
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
    },
});

export const {setIsAuth, setCustomSettings, setMainSideBar} = mainSlice.actions;

export const selectIsAuth = (state) => state.general.isAuth;
export const selectCustommSettings = (state) => state.general.customSettings;
export const selectMainSideBar = (state) => state.general.customSettings.mainSideBar;

export default mainSlice.reducer;
