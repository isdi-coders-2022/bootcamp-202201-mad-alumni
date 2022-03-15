import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "../redux/user.redux/reducer";
import { loginReducer } from "../redux/login.logout/reducer.login";

const preloadedState = {
  user: [],
  usersMembers: [],
};
export const store = configureStore({
  reducer: {
    usersMembers: reducer,
    user: loginReducer,
  },
  preloadedState,
});
