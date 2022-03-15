/* eslint-disable no-underscore-dangle */
import { createStore } from 'redux';
import { taskReducer } from './tasks/taskReducer';

export const store = createStore(
    taskReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
