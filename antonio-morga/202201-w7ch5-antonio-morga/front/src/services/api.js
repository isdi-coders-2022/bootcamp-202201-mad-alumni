import axios from 'axios';

const url = 'http://localhost:4500/users/';

export const login = async (user) => {
  const response = await axios.post(url + 'login', {
    userName: user.name,
    password: user.password,
  });
  return response.data;
};

export const updateUser = async (user) => {
  const response = await axios.patch(url + user.id, user, {
    headers: { authorization: `bearer ${user.token}` },
  });
  return response.data;
};

export const addRelation = async (id, relation, token) => {
  const response = await axios.patch(
    url + 'add/' + id,
    { token, list: relation },
    {
      headers: { authorization: `bearer ${token}` },
    }
  );
  return response.data;
};

export const getAllUsers = async (token) => {
  const response = await axios.get(url, {
    headers: { authorization: `bearer ${token}` },
  });
  return response.data;
};

export const getAllFiltered = async (list, token) => {
  const response = await axios.get(url + 'relation/' + list, {
    headers: { authorization: `bearer ${token}` },
  });
  return response.data;
};
