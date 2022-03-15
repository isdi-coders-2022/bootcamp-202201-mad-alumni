import { actionTypes } from "./action.types";
import * as api from "../../services/api";

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
export const createUser = (user) => {
  return (dispatch) => {
    api.register(user).then((resp) => {
      console.log("resp", resp.data);
      dispatch({
        type: actionTypes.createUser,
        payload: resp.data,
      });
    });
  };
};

export const updateUser = (user, token) => {
  return (dispatch) => {
    api.update(user, token).then((resp) => {
      dispatch({
        type: actionTypes.updateUser,
        payload: resp.data,
      });
    });
  };
};
