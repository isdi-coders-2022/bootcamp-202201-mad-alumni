import axios from "axios";

const USERS_API = "http://localhost:4000/users/";

export function getAll(token) {
  return axios.get(USERS_API, {
    headers: { authorization: "Bearer " + token },
  });
}
export function get(id) {
  return axios.get(USERS_API + id);
}
export function set(user) {
  return axios.post(USERS_API, user);
}
export function update(id, user, token) {
  return axios.patch(USERS_API + id, user, {
    headers: { authorization: "Bearer " + token },
  });
}
export function remove(id, token) {
  return axios.delete(USERS_API + id, {
    headers: { authorization: "Bearer " + token },
  });
}
