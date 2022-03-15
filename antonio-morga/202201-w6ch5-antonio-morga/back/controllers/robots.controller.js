import * as crud from '../services/robots-crud.js';
import { robotsConnect } from '../services/db.js';
import { robotsForTesting } from '../test-utils/test-robots.js';

const Robot = robotsConnect();

export const getAllRobots = async (req, resp, next) => {
    try {
        crud.getAllRobots(Robot).then((data) => {
            resp.json(data);
        });
    } catch (err) {
        next(err);
    }
};

export const getRobot = async (req, resp, next) => {
    try {
        crud.getRobot(req.params.id, Robot).then((data) => {
            resp.json(data);
        });
    } catch (err) {
        next(err);
    }
};

export const insertRobot = async (req, resp, next) => {
    try {
        crud.insertRobot(req.body, Robot).then((data) => {
            resp.json(data);
        });
    } catch (err) {
        next(err);
    }
};

export const updateRobot = async (req, resp, next) => {
    try {
        crud.updateRobot(req.params.id, req.body, Robot).then((data) => {
            resp.json(data);
        });
    } catch (err) {
        next(err);
    }
};

export const deleteRobot = async (req, resp, next) => {
    try {
        crud.deleteRobot(req.params.id, Robot).then((data) => {
            resp.json(data);
        });
    } catch (err) {
        next(err);
    }
};

export const install = () => {
    Robot.collection.drop();
    return Robot.insertMany(robotsForTesting, { rawResult: true });
};
