import { actionTypes } from "./action.types";

const initialState = [];

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.loadUsers:
      return [...action.payload];
    case actionTypes.createUser:
      return [...state, action.payload];
    case actionTypes.updateUser:
      return state.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
    default:
      return state;
  }
};
