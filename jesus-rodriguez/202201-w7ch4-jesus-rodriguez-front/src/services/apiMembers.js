import axios from 'axios';

const SOCIAL_API = 'http://localhost:5000/users/';

export function getAllUsers(token) {
  return axios.get(SOCIAL_API, {
    headers: { authorization: 'Bearer ' + token },
  });
}
export function getUser(id) {
  return axios.get(SOCIAL_API + id);
}

export function updateUser(user, token) {
  return axios.patch(SOCIAL_API + user._id, user, {
    headers: { authorization: 'Bearer ' + token },
  });
}
export function removeUser(id) {
  return axios.delete(SOCIAL_API + id);
}
