import {createSlice} from '@reduxjs/toolkit';

const initialState = {
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

export const {setCustomSettings, setMainSideBar} = mainSlice.actions;

export const selectCustommSettings = (state) => state.general.customSettings;
export const selectMainSideBar = (state) => state.general.customSettings.mainSideBar;

export default mainSlice.reducer;
