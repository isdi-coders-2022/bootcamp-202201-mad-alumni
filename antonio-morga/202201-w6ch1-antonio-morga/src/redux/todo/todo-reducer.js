import { actionTypes } from './action-types';

const initialState = [];

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.loadTasks:
      return [...action.payload];
    case actionTypes.addTask:
      return [...state, action.payload];
    case actionTypes.deleteTask:
      return state.filter((item) => item.id !== action.payload.id);
    case actionTypes.updateTask:
      return state.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
    default:
      return state;
  }
};
