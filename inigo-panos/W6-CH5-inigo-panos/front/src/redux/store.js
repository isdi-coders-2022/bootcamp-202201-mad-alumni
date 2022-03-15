import { compose } from "redux";
import { configureStore } from "@reduxjs/toolkit";

import { robotsReducer } from "./tasks/tasks-reducers";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = configureStore({
  reducer: robotsReducer,
  enhancers: composeEnhancer,
});
