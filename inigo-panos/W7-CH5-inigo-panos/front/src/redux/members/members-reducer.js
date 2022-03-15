import { actionTypes } from "./action-types-members";

const initialState = [];

export const membersReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.load:
      return [...action.payload];
    default:
      return state;
  }
};
