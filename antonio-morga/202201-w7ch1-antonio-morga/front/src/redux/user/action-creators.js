import * as api from '../../services/api';
import { actionTypes } from '../user/action-types';

export const login =
  (user = null) =>
  (dispatch) => {
    user !== null
      ? api.login(user).then((resp) => {
          const loggedUser = {
            logged: true,
            authKey: resp.data.token,
            userName: user.name,
          };
          localStorage.setItem('robotUsers', JSON.stringify(loggedUser));
          dispatch({ type: actionTypes.login, payload: loggedUser });
        })
      : (() => {
          const storedUser = JSON.parse(localStorage.getItem('robotUsers'));
          dispatch({ type: actionTypes.login, payload: storedUser });
        })();
  };

export const logout = () => {
  return { type: actionTypes.logout };
};
