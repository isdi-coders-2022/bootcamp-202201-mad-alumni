import { configureStore } from '@reduxjs/toolkit';
import { robotsReducer } from './robots/robots-reducer';

export const store = configureStore({
  reducer: robotsReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {},
    }),
});
