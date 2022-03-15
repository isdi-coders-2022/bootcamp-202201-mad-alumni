import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./user/user.reducer.js";
// import thunk from "redux-thunk";

const preloadedState = {};

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
  preloadedState,
});
