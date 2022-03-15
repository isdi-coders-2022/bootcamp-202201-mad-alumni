import axios from 'axios';

const robotsUrl = 'http://localhost:4500/robots/';
const loginUrl = 'http://localhost:4500/login/';

export const getRobots = (authKey) => {
  return axios.get(robotsUrl, {
    headers: { authorization: `bearer ${authKey}` },
  });
};

export const getOneRobot = (id) => {
  return axios.get(robotsUrl + id);
};

export const addRobot = (Robot) => {
  return axios.post(robotsUrl, Robot);
};

export const deleteRobot = (Robot) => {
  return axios.delete(robotsUrl + Robot._id);
};

export const updateRobot = (Robot) => {
  return axios.patch(robotsUrl + Robot._id, Robot);
};

export const login = (user) => {
  return axios.post(loginUrl, user);
};
