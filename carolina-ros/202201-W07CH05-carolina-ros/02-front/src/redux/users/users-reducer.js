import { actionTypes } from "./action-types";

const initialState = [];

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.loadUsers:
      return [...action.payload];
    case actionTypes.registerUser:
      return [...state, action.payload];
    case actionTypes.updateUser:
      return state.map((item) =>
        item._id === action.payload._id ? action.payload : item
      );
    default:
      return state;
  }
};
