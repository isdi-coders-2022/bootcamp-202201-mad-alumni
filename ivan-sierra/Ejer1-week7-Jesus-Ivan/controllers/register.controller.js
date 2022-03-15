import bcrypt from 'bcryptjs';
import { User } from '../models/user.model.js';

export const insertUser = async (req, resp) => {
    const encryptedPasswd = bcrypt.hashSync(req.body.passwd);
    const userData = { ...req.body, passwd: encryptedPasswd };
    const newUser = new User(userData);
    const result = await newUser.save();
    resp.json(result);
};
