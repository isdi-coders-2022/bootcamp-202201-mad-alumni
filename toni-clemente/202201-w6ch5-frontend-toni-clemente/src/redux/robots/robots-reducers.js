import { actionTypes } from "./action-types";

const initialState = [];

export const robotsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.loadRobots:
      return [...action.payload];
    case actionTypes.createRobot:
      return [...state, action.payload];
    case actionTypes.removeRobot:
      return state.filter((item) => item._id !== action.payload._id);
    case actionTypes.updateRobot:
      return state.map((item) =>
        item._id === action.payload._id ? action.payload : item
      );
    default:
      return state;
  }
};
