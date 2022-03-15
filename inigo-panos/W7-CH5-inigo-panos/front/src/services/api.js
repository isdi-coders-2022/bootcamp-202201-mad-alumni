import axios from "axios";

const USERS_API = "http://localhost:4500/users/";
const LOGIN_API = "http://localhost:4500/users/login";
const REGISTER_API = "http://localhost:4500/users/register";

export function getAllUsers() {
  console.log("Get llama a api");
  return axios.get(USERS_API);
}
export function registerUser(user) {
  console.log(user);
  return axios.post(REGISTER_API, user);
}
export function loginUser(user) {
  console.log(user);
  return axios.post(LOGIN_API, user);
}

// export function get(id) {
//   return axios.get(USERS_API + id);
// }
// export function remove(id) {
//   return axios.delete(USERS_API + id);
// }
// export function updateUser(user) {
//   return axios.patch(USERS_API, user);
// }
