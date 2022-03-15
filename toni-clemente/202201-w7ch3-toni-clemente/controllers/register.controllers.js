import bcrypt from 'bcryptjs';
// import { createToken } from '../services/auth.js';

import { userCreator } from '../models/user.model.js';

const User = userCreator();

export const insertUser = async (req, resp) => {
    const encryptedPasswd = bcrypt.hashSync(req.body.passwd);
    const userData = { ...req.body, passwd: encryptedPasswd };
    const newUser = new User(userData);
    const result = await newUser.save();
    resp.json(result);
};
