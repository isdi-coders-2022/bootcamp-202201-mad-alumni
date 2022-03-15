import axios from 'axios';

const API__URL = 'http://localhost:4500/reactForm/';

export function postNewUser(user) {
  axios.post(API__URL, user);
}
