import { actionTypes } from "./action-types";
import * as user from "../../services/user";

export const login = (formState) => (dispatch) => {
  user.loginUser(formState).then((resp) => {
    localStorage.setItem("token", resp.data.token);
    dispatch({ type: actionTypes.login, payload: resp.data });
  });
};

export const logout = (dispatch) => {
  localStorage.removeItem("token");
  dispatch({ type: actionTypes.logout });
};
