import { createToken } from '../services/auth.js';
import bcrypt from 'bcryptjs';
import { USERS } from '../models/user-sample.js';
export const login = (req, resp, next) => {
    const user = req.body;

    if (!user.name || !user.passwd) {
        next(new Error('user or password invalid'));
    } else {
        if (
            !USERS.some(
                (item) =>
                    item.name === user.name &&
                    bcrypt.compareSync(user.passwd, item.passwd)
            )
        ) {
            next(new Error('user or password invalid'));
        } else {
            const token = createToken({
                name: user.name,
                id: parseInt(Math.random() * 10000),
            });
            resp.json({ token });
        }
    }
};
