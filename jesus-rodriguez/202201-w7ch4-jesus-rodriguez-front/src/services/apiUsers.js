import axios from 'axios';

const LOGIN_URL = 'http://localhost:5000/users/login/';
const REGISTER_URL = 'http://localhost:5000/users/register';

export async function register(user) {
  return await axios.post(REGISTER_URL, user).catch((e) => console.log(e));
}

export function login(user) {
  return axios.post(LOGIN_URL, user);
}
