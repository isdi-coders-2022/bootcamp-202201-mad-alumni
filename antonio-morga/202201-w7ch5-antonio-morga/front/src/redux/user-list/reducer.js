import { actionTypes } from './action-types';

const initialState = [];

export const userListReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.getAllUsers:
      return action.payload;
    case actionTypes.getAllFriends:
      return action.payload;
    case actionTypes.getAllEnemies:
      return action.payload;
    default:
      return state;
  }
};
