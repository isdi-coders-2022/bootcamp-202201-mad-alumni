import { configureStore } from '@reduxjs/toolkit';
import { todoReducer } from './todo/todo-reducer';

export const store = configureStore({
  reducer: todoReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {},
    }),
});
