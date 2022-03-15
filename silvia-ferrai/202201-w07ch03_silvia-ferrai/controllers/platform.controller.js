import * as crud from '../services/crud.platform.js';

export const getAllPlatform = async (req, res, next) => {
    try {
        const resp = await crud.getAllPlatform();
        res.json(resp);
    } catch (err) {
        next(err);
    }
};

export const insertPlatform = async (req, res) => {
    try {
        const result = await crud.insertPlatform(req.body);
        res.json(result);
    } catch (error) {
        res.status(400);
        res.json({ message: 'Error' });
    }
};

export const deletePlatform = (req, res) => {
    crud.deletePlatform(req.params.id).then((resp) => {
        if (resp) {
            res.status(202);
            res.json(resp);
        } else {
            res.status(204);
            res.json({ message: `Platform no exists` });
        }
    });
};
