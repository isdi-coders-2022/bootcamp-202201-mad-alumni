import { compose } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { robotsReducer } from "./robots/robot-reducers.js";
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

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
