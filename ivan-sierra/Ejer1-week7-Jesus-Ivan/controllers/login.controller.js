import { createToken } from '../services/auth.js';
import bcrypt from 'bcryptjs';
import { USERS } from '../users.js';

export const login = (req, resp, next) => {
    const user = req.body;

    if (!user.name || !user.passwd) {
        next(new Error('user or password invalidd'));
    } else {
        if (
            !USERS.some(
                (item) =>
                    item.name === user.name &&
                    bcrypt.compareSync(user.passwd, item.passwd)
            )
        ) {
            next(new Error('user or password invalidp'));
        } else {
            const id = parseInt(Math.random() * 10000);
            const token = createToken({
                name: user.name,
                id,
            });
            resp.json({
                token,
                userName: user.name,
                id,
            });
        }
    }
};
