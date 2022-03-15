import bcrypt from 'bcryptjs';
import * as services from '../services/auth.js';
import { createToken } from '../services/token.js';

export const login = async (req, res, next) => {
    const possibleUser = req.body;
    try {
        const dbUser = await services.findUser(possibleUser);
        if (dbUser) {
            const passwordCheck = bcrypt.compareSync(
                possibleUser.password,
                dbUser.password
            );
            if (passwordCheck) {
                const token = createToken(dbUser);
                res.json({ token });
            } else {
                next(new Error('user or password incorrect'));
            }
        } else {
            next(new Error('user or password incorrect'));
        }
    } catch (error) {
        next(new Error('user or password incorrect'));
    }
};

export const register = async (req, res, next) => {
    const newUser = req.body;
    newUser.password = bcrypt.hashSync(newUser.password);
    try {
        const newUserDb = await services.addUser(newUser);
        if (newUserDb) {
            res.status(201).json(newUserDb);
        } else {
            next(new Error('Something went wrong while registering'));
        }
    } catch (error) {
        next(new Error('Something went wrong while registering'));
    }
};
