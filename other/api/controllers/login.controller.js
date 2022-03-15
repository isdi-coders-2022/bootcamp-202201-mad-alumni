import { createToken } from '../services/auth.js';
import { userCreator } from '../models/user.model.js';
import bcrypt from 'bcryptjs';

export async function userLogin(req, res) {
    const user = {
        userName: req.body.userName,
        password: req.body.password,
    };
    const resp = await userCreator().findOne({
        userName: user.userName,
    });
    console.log(user);

    if (
        resp.userName === user.userName &&
        bcrypt.compareSync(user.password, resp.password)
    ) {
        const token = createToken(user);
        res.json({
            token,
            userName: resp.userName,
            id: resp.id,
            profileImg: resp.profileImg,
            backImg: resp.backImg,
            profileText: resp.profileText,
            friends: resp.friends,
            enemies: resp.enemies,
        });
        return;
    } else {
        return res.status(404).json({
            message: 'Error, user or password not found',
        });
    }
}
