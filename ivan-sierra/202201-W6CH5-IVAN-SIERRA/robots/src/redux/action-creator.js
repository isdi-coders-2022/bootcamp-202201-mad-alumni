import { actionTypes } from './action-types';

export const load = (robots) => ({
  type: actionTypes.loadRobots,
  payload: robots,
});

export const create = (robot) => ({
  type: actionTypes.createRobots,
  payload: robot,
});
export const remove = (robot) => ({
  type: actionTypes.removeRobots,
  payload: robot,
});

export const update = (robot) => ({
  type: actionTypes.updateRobots,
  payload: robot,
});
