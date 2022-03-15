import { actionTypes } from "./action-types";

export const loadRobots = (robots) => ({
  type: actionTypes.loadRobots,
  payload: robots,
});

export const createRobot = (robot) => ({
  type: actionTypes.createRobot,
  payload: robot,
});
export const removeRobot = (robot) => ({
  type: actionTypes.removeRobot,
  payload: robot,
});

export const updateRobot = (robot) => ({
  type: actionTypes.updateRobot,
  payload: robot,
});
