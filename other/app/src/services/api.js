import axios from "axios";

const USERS_API = "http://localhost:3600/users/";

export function getAll(token) {
  return axios.get(USERS_API, {
    headers: { authorization: "Bearer " + token },
  });
}
export function get(id) {
  return axios.get(USERS_API + id);
}

export function update(task, token) {
  return axios.patch(USERS_API + task._id, task, {
    headers: { authorization: "Bearer " + token },
  });
}
