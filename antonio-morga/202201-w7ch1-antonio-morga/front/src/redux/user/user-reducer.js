import { actionTypes } from './action-types';

const initialState = { logged: false, authKey: '', userName: '' };

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.login:
      return action.payload === null ? initialState : { ...action.payload };
    case actionTypes.logout:
      localStorage.clear();
      return initialState;
    default:
      return state;
  }
};
