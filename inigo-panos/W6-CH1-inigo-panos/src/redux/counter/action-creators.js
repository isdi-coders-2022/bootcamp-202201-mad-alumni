import { actionTypes } from "./action-types";

export const addTask = (text) => ({
  type: actionTypes.increment,
  text,
});
export const deleteTask = (text) => ({
  type: actionTypes.decrement,
  text,
});
export const resetTasks = () => ({
  type: actionTypes.reset,
  text: 0,
});
