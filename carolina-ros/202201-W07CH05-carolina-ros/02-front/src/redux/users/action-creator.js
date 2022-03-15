import { actionTypes } from "./action-types";
import * as api from "../../services/api";

export const registerUser = (user) => {
  return (dispatch) => {
    api.set(user).then((resp) => {
      dispatch({
        type: actionTypes.registerUser,
        payload: resp.data,
      });
    });
  };
};

export const loadUsers = () => {
  return (dispatch) => {
    api.getAll().then((resp) => {
      dispatch({
        type: actionTypes.loadUsers,
        payload: resp.data,
      });
    });
  };
};
export const updateUser = (id, user) => {
  return (dispatch) => {
    api.update(id, user).then((resp) => {
      dispatch({
        type: actionTypes.updateUser,
        payload: resp.data,
      });
    });
  };
};
