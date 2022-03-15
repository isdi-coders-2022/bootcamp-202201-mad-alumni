import bcrypt from 'bcryptjs';
import { userCreator } from '../../model/user.model.js';
import { createToken } from '../../services/auth.js';

export const loginUser = async (req, resp, next) => {
    const User = userCreator();
    const user = req.body;
    const loginError = new Error('User or Password invalid ');
    loginError.status = 401;
    if (!user.name || !user.password) {
        next(loginError);
    } else {
        const userFound = await User.findOne({
            name: user.name,
        });
        if (!userFound) {
            next(loginError);
        } else if (!bcrypt.compareSync(user.password, userFound.password)) {
            next(loginError);
        } else {
            const id = userFound.id;
            const token = createToken({
                name: userFound.name,
                id,
            });
            resp.json({
                token,
                userName: userFound.name,
                id,
            });
        }
    }
};
