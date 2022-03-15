import { actionTypes } from "./action.types";
import * as api from "../services/api";

export const loadRobots = () => {
  return (dispatch) => {
    api.getAll().then((resp) => {
      dispatch({
        type: actionTypes.loadRobots,
        payload: resp.data,
      });
    });
  };
};

export const createRobot = (robot) => {
  return (dispatch) => {
    api.set(robot).then((resp) => {
      dispatch({
        type: actionTypes.createRobot,
        payload: resp.data,
      });
    });
  };
};
export const updateRobot = (id, robot) => {
  return (dispatch) => {
    api.update(id, robot).then((resp) => {
      if (resp.statusText.toLowerCase() === "ok") {
        dispatch({
          type: actionTypes.updateRobot,
          payload: robot,
        });
      }
    });
  };
};

export const deleteRobot = (robot) => {
  return (dispatch) => {
    api.remove(robot).then((resp) => {
      dispatch({
        type: actionTypes.removeRobot,
        payload: resp.data,
      });
    });
  };
};
