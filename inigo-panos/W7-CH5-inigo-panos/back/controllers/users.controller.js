import { createToken } from '../services/auth.js';
import { User } from '../models/user.model.js';
import bcrypt from 'bcryptjs';

export async function userLogin(req, res) {
    const userData = {
        userName: req.body.userName,
        password: req.body.password,
    };

    console.log(userData.userName);

    const resp = await User.findOne({
        userName: userData.userName,
    });

    console.log(resp, ' resp');
    console.log(
        resp.userName,
        userData.userName,
        ' nombres de resp username y userdata username'
    );

    if (
        resp.userName === userData.userName &&
        bcrypt.compareSync(userData.password, resp.password)
    ) {
        const token = createToken(userData);
        res.json({ token });
        return;
    } else {
        return res.status(404).json({
            message:
                'Error, el usuario no existe' +
                ' ' +
                userData.userName +
                ' ' +
                userData.password,
        });
    }
}

export async function userRegister(req, res) {
    console.log('Se llama a user register');
    const encryptedPasswd = bcrypt.hashSync(req.body.password);
    const userData = { ...req.body, password: encryptedPasswd };
    console.log(userData);
    console.log(User);
    const newUser = new User(userData);
    console.log(newUser, ' newUser');
    const result = await newUser.save();
    res.json(result);
    console.log(result);
}

export async function getAllUsers(req, res) {
    try {
        const resp = await User.find({});
        res.json(resp);
    } catch (err) {
        next(createError(err, 404));
    }
}

// export const insertUser = async (req, resp) => {
//     const encryptedPasswd = bcrypt.hashSync(req.body.passwd);
//     const userData = { ...req.body, passwd: encryptedPasswd };
//     const newUser = new User(userData);
//     const result = await newUser.save();
//     resp.json(result);
//     console.log(result);
// };
