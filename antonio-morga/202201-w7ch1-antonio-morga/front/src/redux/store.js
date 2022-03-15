import { configureStore } from '@reduxjs/toolkit';
import { robotsReducer } from './robots/robots-reducer';
import { userReducer } from './user/user-reducer';

export const store = configureStore({
  reducer: { robots: robotsReducer, user: userReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {},
    }),
});
