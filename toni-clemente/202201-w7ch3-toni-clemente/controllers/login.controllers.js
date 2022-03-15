import { createToken } from '../services/auth.js';
import bcrypt from 'bcryptjs';
import { userCreator } from '../models/user.model.js';

export const login = async (req, resp, next) => {
    const userToCheck = req.body;
    const User = userCreator();
    const userDb = await User.findOne({ name: userToCheck.name });

    if (!userToCheck.name || !userToCheck.passwd) {
        next(new Error('Invalid user or password'));
    } else {
        if (userDb) {
            if (bcrypt.compareSync(userToCheck.passwd, userDb.passwd)) {
                const id = parseInt(Math.random() * 10000);
                const token = createToken({
                    name: userToCheck.name,
                    id,
                });
                resp.json({ token, userName: userToCheck.name, id });
            } else {
                next(new Error('Invalid user or password'));
            }
        } else {
            next(new Error('Invalid user or password'));
        }
    }
};
