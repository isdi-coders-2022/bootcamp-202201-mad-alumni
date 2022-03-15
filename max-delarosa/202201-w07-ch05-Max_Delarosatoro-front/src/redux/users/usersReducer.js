/* eslint-disable default-param-last */
import { actionTypes } from './actionTypes';

export function usersReducer(state = [], action) {
    switch (action.type) {
        case actionTypes.load:
            return action.payload;

        default:
            return state;
    }
}
