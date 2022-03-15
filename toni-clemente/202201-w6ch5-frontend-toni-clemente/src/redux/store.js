import { createStore, combineReducers, compose } from "redux";
import { configureStore } from "@reduxjs/toolkit";
//import { counterReducer } from "./counter/counter-reducer";
import { robotsReducer } from "./robots/robots-reducers";

// const [state, dispatch] = useReducer(myReducere)

/* export const store = createStore(
  counterReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const tasksStore = createStore(
  tasksReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
); */

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

/* export const store = createStore(
  combineReducers({
    counter: counterReducer,
    tasks: tasksReducer,
  }),
  composeEnhancer()
); */

const preloadedState = {
  robots: [],
};

export const store = configureStore({
  reducer: {
    robots: robotsReducer,
  },
  enhancers: composeEnhancer,
  preloadedState,
});
