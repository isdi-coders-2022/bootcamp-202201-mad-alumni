import { actionTypes } from "./action-types.js";
const initialState = {
  token: "",
  userName: "",
  id: "",
  isLogged: false,
};

export function userReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.login:
      state = { ...action.payload, isLogged: true };
      return state;
    case actionTypes.logout:
      state = initialState;
      return state;
    default:
      return state;
  }
}
