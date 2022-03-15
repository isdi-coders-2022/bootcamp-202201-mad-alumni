import { actionTypes } from "./action-types";

export const loadRobots = (robots) => ({
  type: actionTypes.loadRobots,
  payload: robots,
});

export const createRobots = (robots) => ({
  type: actionTypes.createRobots,
  payload: robots,
});
export const removeRobots = (robots) => ({
  type: actionTypes.removeRobots,
  payload: robots,
});

export const updateRobots = (robots) => ({
  type: actionTypes.updateRobots,
  payload: robots,
});
