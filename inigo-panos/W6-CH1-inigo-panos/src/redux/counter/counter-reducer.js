import { actionTypes } from "./action-types";

const initialState = [];

export function tasksCounter(state = initialState, action) {
  switch (action.type) {
    case actionTypes.increment:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false,
        },
      ];

    case actionTypes.decrement:
      return { ...state, counter: state.counter - action.payload };

    case actionTypes.reset:
      return { ...state, counter: action.payload };

    default:
      return state;
  }
}
