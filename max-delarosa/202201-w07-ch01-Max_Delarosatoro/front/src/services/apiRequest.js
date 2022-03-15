import axios from 'axios';

const dbUrl = 'http://localhost:4000/robots/';

const authUrl = 'http://localhost:4000/auth/';

const config = {
    headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
};

export const getAllRobots = async () => axios.get(dbUrl, config);

export const deleteRobot = async (id) => axios.delete(dbUrl + id, config);

export const updateRobot = async (id, partialRobot) => {
    const payload = {
        name: partialRobot.name,
        characteristics: {
            speed: partialRobot.speed,
            resistance: partialRobot.resistance,
            created_at: partialRobot.createdAt,
        },
    };
    return axios.patch(dbUrl + id, payload, config);
};

export const addRobot = async (newRobot) => axios.post(dbUrl, newRobot, config);

export const login = async (user) => axios.post(`${authUrl}login`, user);

export const register = async (newUser) =>
    axios.post(`${authUrl}register`, newUser);
