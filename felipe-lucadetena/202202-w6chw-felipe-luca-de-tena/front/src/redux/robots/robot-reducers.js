import { actionTypes } from "./action-types.js";

const initialState = {
  robots: [],
};

export const robotsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.loadRobots:
      return { ...state, robots: [...action.payload] };

    case actionTypes.createRobot:
      console.log(state);
      return { ...state, robots: [...state.robots, action.payload] };
    case actionTypes.removeRobot:
      return {
        ...state,
        robots: state.robots.filter((item) => item._id !== action.payload._id),
      };
    case actionTypes.updateRobot:
      return {
        ...state,
        robots: state.robots.map((item) =>
          item.id === action.payload._id ? action.payload : item
        ),
      };
    default:
      return state;
  }
};
