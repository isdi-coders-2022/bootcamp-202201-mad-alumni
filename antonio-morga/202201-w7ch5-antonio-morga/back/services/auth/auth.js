/* eslint-disable no-underscore-dangle */
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export const createToken = (userData) => {
    const payload = { id: userData._id.toString() };
    const secret = process.env.SECRET;
    return jwt.sign(payload, secret);
};

export const validateToken = (token) => {
    const secret = process.env.SECRET;
    const payload = jwt.verify(token, secret);
    return payload;
};
