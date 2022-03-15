import { configureStore } from '@reduxjs/toolkit';
import { robotReducer } from './robots/robot-reducer';

export const store = configureStore({
    reducer: robotReducer,
});
