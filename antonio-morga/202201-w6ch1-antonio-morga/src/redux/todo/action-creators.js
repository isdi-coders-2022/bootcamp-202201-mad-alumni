import { actionTypes } from './action-types';
import * as api from '../../services/api';

export const loadTasks = () => (dispatch) => {
  api.getTasks().then((resp) => {
    dispatch({ type: actionTypes.loadTasks, payload: resp.data });
  });
};

export const addTask = (task) => (dispatch) => {
  api.addTask(task).then((resp) => {
    dispatch({
      type: actionTypes.addTask,
      payload: resp.data,
    });
  });
};

export const deleteTask = (task) => (dispatch) => {
  api.deleteTask(task).then(() => {
    dispatch({
      type: actionTypes.deleteTask,
      payload: task,
    });
  });
};

export const updateTask = (task) => (dispatch) => {
  api.updateTask(task).then((resp) => {
    dispatch({
      type: actionTypes.updateTask,
      payload: resp.data,
    });
  });
};
