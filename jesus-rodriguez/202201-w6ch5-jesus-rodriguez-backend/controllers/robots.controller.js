/* eslint-disable no-unused-vars */
import * as api from '../services/functions-crud.js';
import { robotConnect } from '../services/db.js';

const Robot = robotConnect();

export const getAllRobots = (req, res) => {
    api.getAllRobots(Robot).then((resp) => {
        res.json(resp);
    });
};

export const getRobot = (req, res) => {
    api.getRobot(req.params.id, Robot).then((resp) => {
        res.json(resp);
    });
};
export const insertRobot = (req, res) => {
    api.insertRobot(req.body, Robot).then((resp) => {
        res.json(resp);
    });
};

export const updateRobot = (req, res) => {
    api.updateRobot(req.params.id, req.body, Robot).then((resp) => {
        res.json(resp);
    });
};
export const deleteRobot = (req, res) => {
    api.deleteRobot(req.params.id, Robot).then((resp) => {
        res.json(resp);
    });
};
