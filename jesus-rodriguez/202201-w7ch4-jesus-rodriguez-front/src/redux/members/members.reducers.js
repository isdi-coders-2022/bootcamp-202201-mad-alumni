import { actionTypes } from '../members/action-types';

const initialState = [];

export const membersReducers = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.loadMembers:
      return [...action.payload];
    case actionTypes.updateMembers:
      return state.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
    default:
      return state;
  }
};
