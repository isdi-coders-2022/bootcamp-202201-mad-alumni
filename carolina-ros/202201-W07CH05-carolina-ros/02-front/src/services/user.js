import axios from "axios";

const USERSLOGIN_API = "http://localhost:4000/users/login/";
const USERSREGISTER_API = "http://localhost:4000/users/register/";

export function loginUser(user) {
  return axios.post(USERSLOGIN_API, user);
}
export function loginToken(token) {
  return axios.post(USERSLOGIN_API, {
    headers: { authorization: "Bearer " + token },
  });
}
export function registerUser(newUser) {
  return axios.post(USERSREGISTER_API, newUser);
}
