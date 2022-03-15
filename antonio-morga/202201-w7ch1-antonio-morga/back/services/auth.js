/* eslint-disable no-underscore-dangle */
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();

export const createToken = (user) => {
    const tokenPayload = {
        userName: user.name,
        id: user._id,
        password: user.password,
        role: user.role,
    };
    const secret = process.env.SECRET;

    return jwt.sign(tokenPayload, secret);
};

export const verifyToken = (token) => {
    try {
        return jwt.verify(token, process.env.SECRET);
    } catch (err) {
        return err.message;
    }
};
