import axios from 'axios';

const USERSDATA = 'http://localhost:4500/users';

export function update(user) {
  return axios.patch(USERSDATA + user.id, user);
}
