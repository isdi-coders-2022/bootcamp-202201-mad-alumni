import axios from "axios";

const TASKS_API = "http://localhost:4500/tasks/";

export function getAll() {
  return axios.get(TASKS_API);
}
export function get(id) {
  return axios.get(TASKS_API + id);
}
export function set(task) {
  return axios.post(TASKS_API, task);
}
export function update(task) {
  return axios.patch(TASKS_API + task.id, task);
}
export function remove(id) {
  return axios.delete(TASKS_API + id);
}
