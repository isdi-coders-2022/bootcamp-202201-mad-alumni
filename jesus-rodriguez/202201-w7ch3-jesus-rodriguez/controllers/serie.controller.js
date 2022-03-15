import { createError } from '../services/control-error.js';
import * as crud from '../services/crud-series.js';
import { Serie } from '../models/series.model.js';
export const insertSerie = async (req, res, next) => {
    const serieError = new Error('Error creating serie');
    serieError.status = 400;
    if (req.body) {
        try {
            const result = await crud.createSerie(req.body, Serie);
            res.json(result);
        } catch (error) {
            console.log(error);
            next(createError(error));
        }
    } else {
        res.status(400);
        res.json({ message: 'Error creating serie' });
    }
};

export const getSeries = async (req, res, next) => {
    try {
        const resp = await Serie.find({}).populate('platform', {
            name: 1,
        });
        res.json(resp);
    } catch (err) {
        next(createError(err));
    }
};
