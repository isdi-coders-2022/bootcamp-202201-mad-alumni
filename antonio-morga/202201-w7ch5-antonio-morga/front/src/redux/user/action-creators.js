import { actionTypes } from './action-types';
import * as api from '../../services/api';

export const Login =
  (user = null) =>
  (dispatch) => {
    user !== null
      ? api.login(user).then((resp) => {
          const loggedUser = {
            logged: true,
            token: resp.token,
            userName: user.name,
            id: resp.id,
          };
          localStorage.setItem('robotUsers', JSON.stringify(loggedUser));
          dispatch({ type: actionTypes.login, payload: loggedUser });
        })
      : (() => {
          const storedUser = JSON.parse(localStorage.getItem('robotUsers'));
          dispatch({ type: actionTypes.login, payload: storedUser });
        })();
  };

export const updateUser = (userData) => (dispatch) => {
  api.updateUser(userData).then((resp) => {
    dispatch({ type: actionTypes.updateUser, payload: resp });
  });
};

export const logout = () => ({
  type: actionTypes.logout,
});
