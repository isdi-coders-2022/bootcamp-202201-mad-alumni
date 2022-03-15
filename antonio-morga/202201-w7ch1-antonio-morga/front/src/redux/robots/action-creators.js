import { actionTypes } from './action-types';
import * as api from '../../services/api';

export const loadRobots = (authKey) => (dispatch) => {
  api.getRobots(authKey).then((resp) => {
    dispatch({ type: actionTypes.loadRobots, payload: resp.data });
  });
};

export const addRobot = (Robot) => (dispatch) => {
  api.addRobot(Robot).then((resp) => {
    dispatch({
      type: actionTypes.addRobot,
      payload: resp.data,
    });
  });
};

export const deleteRobot = (Robot) => (dispatch) => {
  api.deleteRobot(Robot).then(() => {
    dispatch({
      type: actionTypes.deleteRobot,
      payload: Robot,
    });
  });
};

export const updateRobot = (Robot) => (dispatch) => {
  api.updateRobot(Robot).then((resp) => {
    dispatch({
      type: actionTypes.updateRobot,
      payload: resp.data,
    });
  });
};
