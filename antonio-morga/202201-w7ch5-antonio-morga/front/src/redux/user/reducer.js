import { actionTypes } from './action-types';

const initialState = {
  userName: '',
  birthDate: '',
  image: '',
  friends: [],
  enemies: [],
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.login:
      return action.payload === null ? initialState : { ...action.payload };
    case actionTypes.logout:
      localStorage.clear();
      return initialState;
    case actionTypes.updateUser:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
