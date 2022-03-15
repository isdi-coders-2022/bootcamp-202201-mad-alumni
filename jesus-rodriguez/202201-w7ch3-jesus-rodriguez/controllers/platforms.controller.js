import { Platform } from '../models/platform.model.js';
import { createError } from '../services/control-error.js';
import * as crud from '../services/crud-platform.js';

export const getAllPlatform = async (req, res, next) => {
    try {
        const resp = await Platform.find({});
        res.json(resp);
    } catch (err) {
        next(err);
    }
};

export const deletePlatform = (req, res) => {
    Platform.findByIdAndDelete(req.params.id).then((resp) => {
        if (resp) {
            res.status(202);
            res.json(resp);
        } else {
            res.status(204);
            res.json({ message: '`Platform no exits' });
        }
    });
};

export const insertPlatform = async (req, res) => {
    const platformError = new Error('Error to create platform');
    platformError.status = 201;

    if (req.body) {
        try {
            const newPlatform = new Platform(req.body);
            const result = await newPlatform.save();
            res.json(result);
        } catch (error) {
            res.status(201);
            res.json({ message: 'Error to create platform' });
        }
    } else {
        res.status(201);
        res.json({ message: 'Error to create platform' });
    }
};

export const updatePlatform = (req, res, next) => {
    crud.updatePlatform(req.params.id, req.body, Platform)
        .then((resp) => {
            res.json(resp);
        })
        .catch((err) => next(createError(err)));
};
