import * as api from '../../services/api';
import { actionTypes as userActions } from '../user/action-types';
import { actionTypes } from './action-types';

export const addFriend = (id) => (dispatch) => {
  api.addRelation(id, 'friend').then((resp) => {
    dispatch({ type: userActions.updateUser, payload: resp });
  });
};

export const addEnemy = (id) => (dispatch) => {
  api.addRelation(id, 'enemy').then((resp) => {
    dispatch({ type: userActions.updateUser, payload: resp });
  });
};

export const getAllUsers = () => (dispatch) => {
  api.getAllUsers().then((resp) => {
    dispatch({ type: actionTypes.getAllUsers, payload: resp });
  });
};

export const getAllFriends = () => (dispatch) => {
  api.getFiltered('friends').then((resp) => {
    dispatch({ type: actionTypes.getAllFriends, payload: resp });
  });
};

export const getAllEnemies = () => (dispatch) => {
  api.getFiltered('enemies').then((resp) => {
    dispatch({ type: actionTypes.getAllEnemies, payload: resp });
  });
};
