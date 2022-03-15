import * as crud from '../services/crud.js';
import { robotsConnect } from '../services/db.js';

// async function getRobotAsync() {
//     const Robot = await robotsConnect();
//     console.log(Robot);
//     return Robot;
// }

// getRobotAsync();

const Robot = robotsConnect();

export const getAllRobots = (req, res) => {
    crud.getAllRobots(Robot).then((resp) => {
        res.json(resp);
    });
};

export const getRobot = (req, res) => {
    crud.getRobot(req.params.id, Robot).then((resp) => {
        res.json(resp);
    });
};
export const insertRobot = (req, res) => {
    crud.insertRobot(req.body, Robot).then((resp) => {
        res.json(resp);
    });
};

export const updateRobot = (req, res) => {
    crud.updateRobot(req.params.id, req.body, Robot).then((resp) => {
        res.json(resp);
    });
};
export const deleteRobot = (req, res) => {
    crud.deleteRobot(req.params.id, Robot).then((resp) => {
        res.json(resp);
    });
};
