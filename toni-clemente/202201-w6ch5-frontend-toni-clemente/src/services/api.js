import axios from "axios";

const ROBOTS_API = "http://localhost:3600/robots/";

export function getAll() {
  return axios.get(ROBOTS_API);
  // return fetch(ROBOTS_API).then(resp => resp.json())
}
export function get(id) {
  return axios.get(ROBOTS_API + id);
  // return fetch(ROBOTS_API+id).then(resp => resp.json())
}
export function set(robot) {
  return axios.post(ROBOTS_API, robot);
  /* return fetch(ROBOTS_API, {
        method: 'POST',
        body: JSON.stringify(robot),
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    }) */
}
export function update(robot) {
  return axios.patch(ROBOTS_API + robot._id, robot);
}
export function remove(id) {
  return axios.delete(ROBOTS_API + id);
}
