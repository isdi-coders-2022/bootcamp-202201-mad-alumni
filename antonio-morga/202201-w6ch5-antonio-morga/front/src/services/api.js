import axios from 'axios';

const apiUrl = ' http://localhost:4500/robots/';

export const getRobots = () => {
  return axios.get(apiUrl);
};

export const getOneRobot = (id) => {
  return axios.get(apiUrl + id);
};

export const addRobot = (Robot) => {
  return axios.post(apiUrl, Robot);
};

export const deleteRobot = (Robot) => {
  return axios.delete(apiUrl + Robot._id);
};

export const updateRobot = (Robot) => {
  return axios.patch(apiUrl + Robot._id, Robot);
};
