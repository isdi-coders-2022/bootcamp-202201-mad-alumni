import { actionTypes } from "./action.types";

export const login = (user) => ({
  type: actionTypes.login,
  payload: user,
});

export const logout = () => ({
  type: actionTypes.logout,
});
