import bcrypt from 'bcryptjs';
import { User } from '../models/user.model.js';

export const userRegister = async (req, resp) => {
    const encryptedPasswd = bcrypt.hashSync(req.body.password);
    const userData = { ...req.body, password: encryptedPasswd };
    const newUser = await User.create(userData);
    resp.json(newUser);
};
