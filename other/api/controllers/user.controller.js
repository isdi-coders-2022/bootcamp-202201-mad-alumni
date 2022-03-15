import dotenv from 'dotenv';
import { userCreator } from '../models/user.model.js';

dotenv.config();

export const getUser = async (req, res, next) => {
    try {
        const user = await userCreator().findById(req.params.id);
        res.json(user);
    } catch (error) {
        next(error);
    }
};

export const getAllUsers = async (req, res, next) => {
    try {
        const users = await userCreator().find({});
        res.status(200).json(users);
    } catch (error) {
        next(error);
    }
};

export const updateUser = async (req, res, next) => {
    try {
        await userCreator()
            .findByIdAndUpdate(req.params.id, req.body, {
                new: true,
            })
            .then((resp) => {
                res.json(resp);
            });
    } catch (error) {
        next(error);
    }
};
