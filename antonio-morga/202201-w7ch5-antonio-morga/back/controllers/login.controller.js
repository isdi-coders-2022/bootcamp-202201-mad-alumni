/* eslint-disable no-underscore-dangle */
import bcrypt from 'bcryptjs';
import { userCreator } from '../models/user.model.js';
import { createToken } from '../services/auth/auth.js';

export const userLogin = async (req, res, next) => {
    const User = userCreator();
    const userToCheck = req.body;
    const error = new Error('Username or password incorrect');
    error.status = 401;
    try {
        const savedUser = await User.findOne({
            userName: userToCheck.userName,
        });
        if (savedUser === null) {
            next(error);
        } else if (
            !bcrypt.compareSync(userToCheck.password, savedUser.password)
        ) {
            next(error);
        } else {
            const token = createToken(savedUser);
            res.json({ userName: savedUser._doc.userName, token });
        }
    } catch (err) {
        next(error);
    }
};
