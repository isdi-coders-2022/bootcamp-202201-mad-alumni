/* eslint-disable no-underscore-dangle */
import bcrypt from 'bcryptjs';
import { userCreator } from '../models/user.model.js';
import { createToken } from '../services/auth/auth.js';

export const userRegister = async (req, res, next) => {
    const User = userCreator();
    const error = new Error('Invalid params');
    error.status = 402;

    const userToAdd = {
        ...req.body,
        password: bcrypt.hashSync(req.body.password),
        friends: [],
        enemies: [],
    };
    try {
        const savedUser = await User.create(userToAdd);
        const token = createToken(savedUser);
        res.json({ userName: savedUser._doc.userName, token });
    } catch (err) {
        next(error);
    }
};
