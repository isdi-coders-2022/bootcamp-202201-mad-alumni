import axios from 'axios';

const apiUrl = ' http://localhost:4500/tasks/';

export const getTasks = () => {
  return axios.get(apiUrl);
};

export const addTask = (task) => {
  return axios.post(apiUrl, task);
};

export const deleteTask = (task) => {
  return axios.delete(apiUrl + task.id);
};

export const updateTask = (task) => {
  return axios.patch(apiUrl + task.id, task);
};
