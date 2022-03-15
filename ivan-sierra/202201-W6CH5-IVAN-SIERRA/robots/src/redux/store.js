import { configureStore } from '@reduxjs/toolkit';
import { compose } from 'redux';
import { robotReducer } from './reducers';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = configureStore({
  reducer: robotReducer,

  enhancers: composeEnhancer,
});
