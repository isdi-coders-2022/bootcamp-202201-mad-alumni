import axios from "axios";

const ROBOT_API = "http://localhost:3500/robots/";

export function getAll() {
  return axios.get(ROBOT_API);
}

export function get(id) {
  return axios.get(ROBOT_API + id);
}

export function set(robot) {
  return axios.post(ROBOT_API, robot);
}
export function update(robot, id) {
  return axios.patch(ROBOT_API + id, robot);
}
export function remove(id) {
  return axios.delete(ROBOT_API + id);
}
