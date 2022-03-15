/* eslint-disable default-param-last */
import { actionTypes } from './actionTypes';

const initialState = {
    taskList: [],
};

export function taskReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.load:
            return { ...state, taskList: action.payload };
        case actionTypes.add:
            return { ...state, taskList: [...state.taskList, action.payload] };
        case actionTypes.remove:
            return {
                ...state,
                taskList: state.taskList.filter(
                    (item) => item.id !== action.payload
                ),
            };
        case actionTypes.toggle:
            return {
                ...state,
                taskList: state.taskList.map((item) =>
                    item.id === action.payload.id ? action.payload : item
                ),
            };
        default:
            return state;
    }
}
