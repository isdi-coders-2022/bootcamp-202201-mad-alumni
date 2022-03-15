import bcrypt from 'bcryptjs';
import { User } from '../models/user.model.js';
import { createToken } from '../services/auth.js';

export const insertUser = async (req, resp) => {
    const encryptedPasswd = bcrypt.hashSync(req.body.passwd);
    const userData = { ...req.body, passwd: encryptedPasswd };
    const newUser = new User(userData);
    const result = await newUser.save();
    resp.json(result);
};

export const login = async (req, resp, next) => {
    const user = req.body;
    const loginError = new Error('user or password invalid');
    loginError.status = 401;
    if (!user.name || !user.passwd) {
        next(loginError);
    } else {
        let userFound = await User.findOne({
            name: user.name,
        });
        if (!userFound) {
            next(loginError);
        } else if (
            bcrypt.compareSync(user.passwd, userFound.passwd) === false
        ) {
            next(loginError);
        } else {
            const id = userFound.id;
            const token = createToken({
                name: userFound.name,
                id,
                isAdmin: userFound.isAdmin,
            });
            resp.json({
                token,
                userName: userFound.name,
                id,
                isAdmin: userFound.isAdmin,
            });
        }
    }
};
