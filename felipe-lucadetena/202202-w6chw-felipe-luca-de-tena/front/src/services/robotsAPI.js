import axios from "axios";

const API_LOCAL = "http://localhost:3600/robots/";

export function getRobots() {
  return axios.get(API_LOCAL);
}
export function getRobot(id) {
  return axios.get(API_LOCAL + id);
}

export function deleteRobot(id) {
  return axios.delete(API_LOCAL + id);
}

export function updateRobot(id, robot) {
  return axios.patch(API_LOCAL + id, robot);
}

export function setRobot(robot) {
  return axios.post(API_LOCAL, robot);
}
