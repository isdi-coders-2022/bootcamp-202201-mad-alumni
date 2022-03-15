import bcrypt from 'bcryptjs';
import { createToken } from '../services/auth.js';
import { User } from '../index.js';
import { createError } from '../services/errors.js';

export const getAllUsers = async (req, res, next) => {
    try {
        const resp = await User.find({});
        res.json(resp);
    } catch (err) {
        next(err);
    }
};

export const getUser = (req, res) => {
    if (req.query.id) {
        const idUser = req.params.id;

        User.findById(idUser).then((data) => {
            if (!data) {
                res.status(404).send({ message: '$idUser no exist' });
            } else {
                res.send(data);
            }
        });
    }
};
export const deleteUser = (req, res) => {
    User.findByIdAndDelete(req.params.id).then((resp) => {
        if (resp) {
            res.status(202);
            res.json(resp);
        } else {
            res.status(204);
            res.json({ message: '`User no exits' });
        }
    });
};
export const updateUser = async (req, res, next) => {
    await User.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then((resp) => {
            res.json(resp);
        })
        .catch((err) => next(createError(err)));
};
/*
export const updateUser = (req, res) => {
    if (!req.body) {
        return res.status(400).send({ message: 'Data to update' });
    }

    const idUser = req.params.id;
    console.log(idUser);
    console.log(req.body);
    User.findByIdAndUpdate(idUser, req.body).then((data) => {
        if (!data) {
            res.status(404).send({ message: '$idUser no exist' });
        }
    });
};
*/
export const insertUser = async (req, resp, next) => {
    try {
        const encryptedPasswd = bcrypt.hashSync(req.body.passwd);
        const userData = { ...req.body, passwd: encryptedPasswd };
        const newUser = new User(userData);
        const result = await newUser.save();
        const token = createToken({
            name: result.name,
            id: result.id,
        });
        resp.json({
            token,
            userName: result.name,
            id: result.id,
        });
    } catch (error) {
        next(createError(error));
    }
};
