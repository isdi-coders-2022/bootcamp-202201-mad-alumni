import { actionTypes } from './action-types';

export const load = (members) => ({
  type: actionTypes.loadMembers,
  payload: members,
});

export const create = (member) => ({
  type: actionTypes.createMembers,
  payload: member,
});
export const remove = (member) => ({
  type: actionTypes.removeMembers,
  payload: member,
});

export const update = (member) => ({
  type: actionTypes.updateMembers,
  payload: member,
});
