import axios from "axios";

const LOGIN_API = "http://localhost:3600/users/login/";

const REGISTER_API = "http://localhost:3600/users/register/";

export function login(user) {
  return axios.post(LOGIN_API, user);
}

export function register(user) {
  return axios.post(REGISTER_API, user);
}
