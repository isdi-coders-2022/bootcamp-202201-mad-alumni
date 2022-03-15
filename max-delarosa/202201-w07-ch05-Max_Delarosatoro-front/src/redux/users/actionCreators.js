import * as services from '../../services/apiRequest';
import { actionTypes } from './actionTypes';

export const loadUsers = () => (dispatch) => {
    services.loadUsers().then((resp) => {
        dispatch({ type: actionTypes.load, payload: resp.data });
    });
};
