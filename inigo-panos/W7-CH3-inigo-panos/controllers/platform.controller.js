// import { createToken } from '../services/auth.js';
import { Platform } from '../index.js';

export const getPlaforms = async (req, res, next) => {
    try {
        const resp = await Platform.find({}).populate('series', 1);
        res.json(resp);
    } catch (err) {
        next(err);
    }
};

export const insertPlatform = async (req, resp) => {
    const platformData = { ...req.body };
    const newPlatform = new Platform(platformData);
    const result = await newPlatform.save();
    resp.json(result);
};
