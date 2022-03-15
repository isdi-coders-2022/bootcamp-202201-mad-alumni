import { actionTypes } from "./action-types";

export const loadTasks = (tasks) => ({
  type: actionTypes.load,
  tasks,
});

export const addTask = (task) => ({
  type: actionTypes.add,
  task,
});

export const toggleTask = (task) => ({
  type: actionTypes.toggle,
  task,
});

export const removeTask = (task) => ({
  type: actionTypes.remove,
  task,
});
