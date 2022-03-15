import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export const createToken = (user) => {
    const { SECRET } = process.env;
    const payload = {
        name: user.name,
        _id: user._id,
    };
    return jwt.sign(payload, SECRET);
};
