/* eslint-disable default-param-last */
import { actionTypes } from './actionTypes';

export function authReducer(state = {}, action) {
    switch (action.type) {
        case actionTypes.login:
            return action.payload;
        case actionTypes.update:
            return { ...state, ...action.payload };
        case actionTypes.toggleFriend:
            return { ...state, ...action.payload };
        case actionTypes.toggleEnemy:
            return { ...state, ...action.payload };
        case actionTypes.logout:
            return {};
        default:
            return state;
    }
}
