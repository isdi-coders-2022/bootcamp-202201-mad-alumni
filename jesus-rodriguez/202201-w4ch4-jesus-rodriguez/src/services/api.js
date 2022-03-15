import axios from 'axios';

const URL_USERS_API = 'http://localhost:3000/users';

export function getAll() {
    return axios.get(URL_USERS_API);
}
export function getUser(id) {
    return axios.get(URL_USERS_API + id);
}
export function setUser(user) {
    return axios.post(URL_USERS_API, user);
}
export function updateUser(user) {
    return axios.patch(URL_USERS_API + user.id, user);
}
export function deleteUser(id) {
    return axios.delete(URL_USERS_API + id);
}
