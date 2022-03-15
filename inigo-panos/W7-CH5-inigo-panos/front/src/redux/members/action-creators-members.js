import { actionTypes } from "./action-types-members";

export const loadUsers = (members) => ({
  type: actionTypes.load,
  payload: members,
});
