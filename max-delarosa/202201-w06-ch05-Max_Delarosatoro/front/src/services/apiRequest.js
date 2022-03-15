import axios from 'axios';

const dbUrl = 'http://localhost:4000/robots/';

export const getAllRobots = async () => axios.get(dbUrl);

export const deleteRobot = async (id) => axios.delete(dbUrl + id);

export const updateRobot = async (id, partialRobot) => {
    const payload = {
        name: partialRobot.name,
        characteristics: {
            speed: partialRobot.speed,
            resistance: partialRobot.resistance,
            created_at: partialRobot.createdAt,
        },
    };
    return axios.patch(dbUrl + id, payload);
};

export const addRobot = async (newRobot) => axios.post(dbUrl, newRobot);
