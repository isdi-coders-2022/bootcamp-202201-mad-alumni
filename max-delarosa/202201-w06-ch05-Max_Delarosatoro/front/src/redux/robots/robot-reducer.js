/* eslint-disable no-underscore-dangle */
/* eslint-disable default-param-last */
import moment from 'moment';
import { actionTypes } from './action-types';

export function robotReducer(state = [], action) {
    switch (action.type) {
        case actionTypes.load:
            // return action.payload.map((item) => ({
            //     ...item,
            //     characteristics: {
            //         ...item.characteristics,
            //         created_at: moment(item.created_at).calendar(),
            //     },
            // }));
            return action.payload;
        case actionTypes.remove:
            return state.filter((item) => item._id !== action.payload);
        case actionTypes.update:
            return state.map((item) =>
                item._id === action.payload._id ? action.payload : item
            );
        case actionTypes.add:
            return [...state, action.payload];
        default:
            return state;
    }
}
