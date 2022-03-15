/* eslint-disable no-unused-vars */
import * as crud from '../services/crud.js';
import { robotsConnect } from '../services/db.js';

const Robot = robotsConnect();

export const getAllRobots = (req, res) => {
    crud.getAllRobots(Robot).then((resp) => {
        res.json(resp);
    });
};

export const getRobot = (req, resp) => {
    crud.getRobot(req.params.id, Robot).then((data) => {
        resp.json(data);
    });
};
export const insertRobot = (req, resp) => {
    crud.insertRobot(req.body, Robot).then((data) => {
        resp.json(data);
    });
};

export const updateRobot = (req, resp) => {
    crud.updateRobot(req.params.id, req.body, Robot).then((data) => {
        resp.json(data);
    });
};
export const deleteRobot = (req, resp) => {
    crud.deleteRobot(req.params.id, Robot).then((data) => {
        resp.json(data);
    });
};
