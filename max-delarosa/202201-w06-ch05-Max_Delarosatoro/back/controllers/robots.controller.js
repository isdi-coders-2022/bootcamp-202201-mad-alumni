import moment from 'moment';
import * as services from '../services/robots-crud.js';

export const getAllRobots = async (req, res) => {
    res.json(await services.getAllRobots()).status(200);
};

export const getRobot = async (req, res, next) => {
    try {
        res.json(await services.getRobot(req.params.id)).status(200);
    } catch (error) {
        next(new Error('id not found'));
    }
};

export const addRobot = async (req, res) => {
    res.json(
        await services.addRobot({
            ...req.body,
            characteristics: {
                ...req.body.characteristics,
                created_at: moment(),
            },
        })
    ).status(201);
};

export const updateRobot = async (req, res, next) => {
    try {
        res.json(await services.updateRobot(req.params.id, req.body)).status(
            200
        );
    } catch (error) {
        next(new Error('id not found'));
    }
};

export const deleteRobot = async (req, res, next) => {
    try {
        res.json((await services.deleteRobot(req.params.id)) && {}).status(200);
    } catch (error) {
        next(new Error('id not found'));
    }
};
