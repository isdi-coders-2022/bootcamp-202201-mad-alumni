import axios from 'axios';

const authUrl = 'http://localhost:4000/auth/';

export const login = async (user) => axios.post(`${authUrl}login`, user);

export const register = async (newUser) =>
    axios.post(`${authUrl}register`, newUser);

export const loginToken = async () =>
    axios.get(`${authUrl}token-login`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
    });
