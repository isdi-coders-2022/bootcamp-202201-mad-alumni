import * as auth from '../../services/auth';
import * as user from '../../services/apiRequest';
import { actionTypes } from './actionTypes';

export const login = (formState) => (dispatch) => {
    auth.login(formState).then((resp) => {
        localStorage.setItem('token', resp.data.token);
        dispatch({ type: actionTypes.login, payload: resp.data });
    });
};

export const logout = () => (dispatch) => {
    localStorage.removeItem('token');
    dispatch({ type: actionTypes.logout });
};

export const loginToken = () => (dispatch) => {
    auth.loginToken().then((resp) => {
        dispatch({ type: actionTypes.login, payload: resp.data });
    });
};

export const updateProfile = (partialUser) => (dispatch) => {
    user.updateProfile(partialUser).then((resp) => {
        dispatch({ type: actionTypes.update, payload: resp.data });
    });
};

export const toggleFriend = (id) => (dispatch) => {
    user.toggleFriend(id).then((resp) =>
        dispatch({ type: actionTypes.toggleFriend, payload: resp.data })
    );
};

export const toggleEnemy = (id) => (dispatch) => {
    user.toggleEnemy(id).then((resp) =>
        dispatch({ type: actionTypes.toggleEnemy, payload: resp.data })
    );
};
