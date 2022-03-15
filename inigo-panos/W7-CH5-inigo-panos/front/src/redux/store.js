import { configureStore } from "@reduxjs/toolkit";
import { membersReducer } from "./members/members-reducer";
import { userReducer } from "./userLog/users-reducers";

export const store = configureStore({
  reducer: {
    members: membersReducer,
    user: userReducer,
  },
});
