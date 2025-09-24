import { configureStore } from '@reduxjs/toolkit';

import currentQueryReducer from '../feautures/currentQuerySlice';
import searchQueryReducer from '../feautures/currentQuerySlice';
import { kinopoiskApi } from '../services/kinopoiskApi';

export const store = configureStore({
  reducer: {
    currentQuery: currentQueryReducer,
    [kinopoiskApi.reducerPath]: kinopoiskApi.reducer,
    searchQuery: searchQueryReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(kinopoiskApi.middleware),
});
