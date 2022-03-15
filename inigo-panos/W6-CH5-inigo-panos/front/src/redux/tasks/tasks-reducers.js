import { actionTypes } from "./action-types";

const initialState = {
  robots: [],
};

export const robotsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.loadRobots:
      return { ...state, robots: [...action.payload] };
    case actionTypes.createRobots:
      return { ...state, robots: [...state, action.payload] };
    case actionTypes.removeRobots:
      return {
        ...state,
        robots: state.robots.filter((item) => item._id !== action.payload._id),
      };
    case actionTypes.updateRobots:
      return state.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
    default:
      return state;
  }
};
