import { actionTypes } from "./action-types";

const initialState = [];
export function taskReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.load:
      return [...action.tasks];
    case actionTypes.add:
      return [...state, action.task];
    case actionTypes.toggle:
      return state.map((item) =>
        item.id === action.task.id
          ? { ...item, isCompleted: !item.isCompleted }
          : item
      );
    case actionTypes.remove:
      return state.filter((item) => item.id !== action.task.id);
    default:
      return state;
  }
}
