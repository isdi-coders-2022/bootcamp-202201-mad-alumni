import { actionTypes } from './action-types';

const initialState = {
  robots: [],
};

export const robotReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.loadRobots:
      // return [{ ...state, robots: action.payload }];
      return { ...state, robots: [...action.payload] };
    case actionTypes.createRobots:
      console.log(state);
      return { ...state, robots: [...state.robots, action.payload] };
    case actionTypes.removeRobots:
      return {
        ...state,
        robots: state.robots.filter((item) => item._id !== action.payload._id),
      };
    case actionTypes.updateRobots:
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
