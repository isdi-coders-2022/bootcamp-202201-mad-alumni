/* eslint-disable no-unused-vars */
import * as crud from '../services/crud.js';
import { robotsConnect } from '../services/db.js';

const Robots = robotsConnect();

export const getAllRobots = (req, res) => {
    crud.getAllRobots(Robots).then((resp) => {
        res.json(resp);
    });
};

export const getRobots = (req, res) => {
    crud.getRobots(req.params.id, Robots).then((resp) => {
        res.json(resp);
    });
};
export const insertRobots = (req, res) => {
    crud.insertRobots(req.body, Robots).then((resp) => {
        res.json(resp);
    });
};

export const updateRobots = (req, res) => {
    crud.updateRobots(req.params.id, req.body, Robots).then((resp) => {
        res.json(resp);
    });
};
export const deleteRobots = (req, res) => {
    crud.deleteRobots(req.params.id, Robots).then((resp) => {
        res.json(resp);
    });
};
