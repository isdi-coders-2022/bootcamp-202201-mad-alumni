import bcrypt from 'bcryptjs';
// import { createToken } from '../services/auth.js';
import { User } from '../index.js';

export const getAllUsers = async (req, res, next) => {
    try {
        const resp = await User.find({}).populate('tasks');
        res.json(resp);
    } catch (err) {
        next(err);
    }
};

export const insertUser = async (req, resp) => {
    const encryptedPasswd = bcrypt.hashSync(req.body.passwd);
    const userData = { ...req.body, passwd: encryptedPasswd };
    const newUser = new User(userData);
    const result = await newUser.save();
    resp.json(result);
};
