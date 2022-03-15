import { configureStore } from '@reduxjs/toolkit';
import { usersReducer } from './users/usersReducer';
import { authReducer } from './auth/authReducer';

export const store = configureStore({
    reducer: { auth: authReducer, users: usersReducer },
});
