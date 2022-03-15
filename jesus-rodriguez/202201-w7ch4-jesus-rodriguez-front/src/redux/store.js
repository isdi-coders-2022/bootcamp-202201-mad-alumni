import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from '../redux/control-users/users.reducers';
import { membersReducers } from '../redux/members/members.reducers';

export const store = configureStore({
  reducer: {
    members: membersReducers,
    user: userReducer,
  },
});
