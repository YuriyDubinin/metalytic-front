import {configureStore} from '@reduxjs/toolkit';

import mainReducer from '../../slice/mainSlice';

export const store = configureStore({
    reducer: {
      general: mainReducer
    },
  });