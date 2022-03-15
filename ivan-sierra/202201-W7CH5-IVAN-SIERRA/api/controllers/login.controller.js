import { createToken } from '../services/auth.js';
import bcrypt from 'bcryptjs';
import { User } from '../index.js';



export const login = async (req, resp, next) => {
    const user = req.body;
    const loginError = new Error('user or password invalid');
    loginError.status = 401;
    if (!user.name || !user.passwd) {
        next(loginError);
    } else {
        const userFound = await User.findOne({
            name: user.name,
        });
        if (!userFound) {
            next(loginError);
        } else if (!bcrypt.compareSync(user.passwd, userFound.passwd)) {
            next(loginError);
        } else {
            const token = createToken({
                name: userFound.name,
                id: userFound.id,
            });
            resp.json({
                token,
                userName: userFound.name,
                id: userFound.id,
            });
        }
    }
};
