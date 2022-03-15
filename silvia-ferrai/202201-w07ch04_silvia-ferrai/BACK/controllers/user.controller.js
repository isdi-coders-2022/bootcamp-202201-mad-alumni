import bcrypt from 'bcryptjs';
import { User } from '../models/user.models.js';
import * as crud from '../services/crud.js';
import { createError } from '../services/errors.js';

export const userRegister = async (req, resp) => {
    const encryptedPassword = bcrypt.hashSync(req.body.password);
    const userData = { ...req.body, password: encryptedPassword };
    const newUser = await User.create(userData);
    resp.json(newUser);
};

export const getAllUsers = async (req, res, next) => {
    try {
        const resp = await crud.getAllUsers();
        res.json(resp);
    } catch (err) {
        next(createError(err));
    }
};

export const getUser = async (req, res, next) => {
    try {
        const resp = await crud.getUser(req.params.id, User);
        res.json(resp);
    } catch (err) {
        next(createError(err));
    }
};

export const updateUser = (req, res, next) => {
    try {
        const resp = crud.updateUser(req.params.id, req.body, User);
        res.json(resp);
    } catch (err) {
        next(createError(err));
    }
};
