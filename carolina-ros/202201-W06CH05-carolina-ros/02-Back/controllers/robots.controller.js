import * as crud from '../services/robots-crud.js';
import { robotsConnect } from '../services/db.js';

export const Robot = robotsConnect();

export const getAllRobotsController = (req, res) => {
    crud.getAllRobots(Robot).then((resp) => {
        res.json(resp);
    });
};
export const getRobotController = (req, res) => {
    crud.getRobot(req.params.id, Robot).then((resp) => {
        res.json(resp);
    });
};
export const insertRobotController = (req, res) => {
    crud.insertRobot(req.body, Robot).then((resp) => {
        res.json(resp);
    });
};
export const updateRobotController = (req, res) => {
    crud.updateRobot(req.params.id, req.body, Robot).then((resp) => {
        res.json(resp);
    });
};
export const deleteRobotController = (req, res) => {
    crud.deleteRobot(req.params.id, Robot).then((resp) => {
        res.json(resp);
    });
};
