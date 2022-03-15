import axios from "axios";

const SOCIAL_API = "http://localhost:3600/users/";
const LOGIN_API = "http://localhost:3600/users/login/";

export function getAll() {
  return axios.get(SOCIAL_API);
}

export function get(id) {
  return axios.get(SOCIAL_API + id);
}

export function register(user) {
  return axios.post(SOCIAL_API, user);
}
export function update(user) {
  return axios.patch(SOCIAL_API + user._id, user);
}
export function remove(id) {
  return axios.delete(SOCIAL_API + id);
}

export function userLogin(user, token) {
  return axios.post(SOCIAL_API, user, {
    headers: { authorization: `Bearer ${token}` },
  });
}
export function login(user) {
  return axios.post(LOGIN_API, user);
}
