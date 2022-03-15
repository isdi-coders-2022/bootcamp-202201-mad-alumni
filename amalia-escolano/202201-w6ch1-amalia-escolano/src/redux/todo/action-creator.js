import { actionTypes } from "./action-types";
import * as api from "../../services/api";

export const loadTasks = () => {
  return (dispatch) => {
    api.getAll().then((resp) => {
      dispatch({
        type: actionTypes.loadTasks,
        payload: resp.data,
      });
    });
  };
};

export const createTask = (task) => {
  return (dispatch) => {
    api.set(task).then((resp) => {
      dispatch({
        type: actionTypes.createTask,
        payload: resp.data,
      });
    });
  };
};

export const removeTask = (task) => {
  return (dispatch) => {
    api.remove(task.id).then((resp) => {
      if (resp.statusText.toLowerCase() === "ok") {
        dispatch({
          type: actionTypes.removeTask,
          payload: task,
        });
      }
    });
  };
};

export const updateTask = (task) => {
  return (dispatch) => {
    api.update(task).then((resp) => {
      dispatch({
        type: actionTypes.updateTask,
        payload: resp.data,
      });
    });
  };
};
