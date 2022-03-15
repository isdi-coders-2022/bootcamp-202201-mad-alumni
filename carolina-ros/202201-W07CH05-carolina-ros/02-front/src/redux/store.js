import { usersReducer } from "./users/users-reducer";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
  preloadedState: {
    users: [],
  },
});
