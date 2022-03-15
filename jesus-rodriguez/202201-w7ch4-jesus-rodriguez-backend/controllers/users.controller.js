import { User } from '../models/user.models.js';
import { createError } from '../services/control-error.js';
import * as crud from '../services/members-crud.js';
import { createToken } from '../services/auth.js';
import bcrypt from 'bcryptjs';

export const getAllUsers = async (req, res, next) => {
    // try {
    //     const resp = await User.find({}).populate('friends', {
    //         friends: 0,
    //         enemies: 0,
    //     });
    //     res.json(resp);
    // } catch (err) {
    //     next(createError(err));
    // }

    crud.getAllUsers(User).then((data) => {
        res.json(data);
    });
};

export const getUser = async (req, res) => {
    // const resp = await User.findById(req.params.id).populate('friends', {
    //     friends: 0,
    //     enemies: 0,
    // });
    // res.json(resp);

    crud.getUser(req.params.id, User).then((data) => {
        res.json(data);
    });
};

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
        } else if (
            bcrypt.compareSync(user.passwd, userFound.passwd) === false
        ) {
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
                friends: userFound.friends,
                enemies: userFound.enemies,
                image: userFound.image,
            });
        }
    }
};

export const registerUser = async (req, resp, next) => {
    if (req.body) {
        try {
            const encryptedPasswd = bcrypt.hashSync(req.body.passwd);
            const userData = { ...req.body, passwd: encryptedPasswd };
            const result = await User.create(userData);
            resp.json(result);
        } catch (error) {
            next(createError(error));
        }
    } else {
        resp.status(400);
        resp.json({ message: 'Error creating user' });
    }
};

export const updateUser = async (req, res, next) => {
    // await User.findByIdAndUpdate(req.params.id, req.body, { new: true })
    //     .then((resp) => {
    //         res.json(resp);
    //     })
    //     .catch((err) => next(createError(err)));

    crud.updateUser(req.params.id, req.body, User).then((data) => {
        res.json(data);
    });
};

export const updateRelationship = async (req, res, next) => {
    const type = req.body.type;
    const idUser = req.body.idUser;
    console.log(type);
    console.log(idUser);

    // await User.findByIdAndUpdate(req.params.id, req.body, { new: true })
    //     .then((resp) => {
    //         res.json(resp);
    //     })
    //     .catch((err) => next(createError(err)));
};

export const deleteUser = async (req, res, next) => {
    // User.findByIdAndDelete(req.params.id).then((resp) => {
    //     if (resp) {
    //         res.status(202);
    //         res.json(resp);
    //     } else {
    //         res.status(204);
    //         res.json({ message: '`User no exits' });
    //     }
    // });

    try {
        res.json(
            (await crud.deleteUser(req.params.id)) && { Deleted: req.params.id }
        ).status(200);
    } catch (error) {
        next(new Error('id not found'));
    }
};
