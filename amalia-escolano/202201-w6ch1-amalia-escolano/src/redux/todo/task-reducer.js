import { actionTypes } from "./action-types";

const initialState = [];

export const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.loadTasks:
      return [...action.payload];
    case actionTypes.createTask:
      return [...state, action.payload];
    case actionTypes.removeTask:
      return state.filter((item) => item.id !== action.payload.id);
    case actionTypes.updateTask:
      return state.map((item) => (item.id === action.payload.id ? action.payload : item));
    default:
      return state;
  }
};
