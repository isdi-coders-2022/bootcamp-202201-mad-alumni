import { actionTypes } from "./action-types";

const initialState = { counter: 0 };

export function counterReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.increment:
      return { ...state, counter: state.counter + action.payload };
    case actionTypes.decrement:
      return { ...state, counter: state.counter - action.payload };
    case actionTypes.reset:
      return { ...state, counter: action.payload };
    default:
      return state;
  }
}
