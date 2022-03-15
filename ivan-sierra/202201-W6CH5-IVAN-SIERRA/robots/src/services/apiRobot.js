import axios from 'axios';

const ROBOTS_API = 'http://localhost:4000/robots/';

export function getAll() {
  return axios.get(ROBOTS_API);
}
export function getRobot(id) {
  return axios.get(ROBOTS_API + id);
}
export function newRobot(robot) {
  return axios.post(ROBOTS_API, robot);
}
export function updateRobot(robot) {
  return axios.patch(ROBOTS_API + robot._id, robot);
}
export function removeRobot(id) {
  return axios.delete(ROBOTS_API + id);
}
