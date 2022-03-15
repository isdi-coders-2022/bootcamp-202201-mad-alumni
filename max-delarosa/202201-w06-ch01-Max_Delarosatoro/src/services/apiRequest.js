import axios from 'axios';

const apiUrl = 'http://localhost:4500/tasks/';

export const loadTasks = () => axios.get(apiUrl);

export const addTask = (task) => axios.post(apiUrl, task);

export const toggleTask = (id, task) => axios.patch(apiUrl + id, task);

export const removeTask = (id) => axios.delete(apiUrl + id);
