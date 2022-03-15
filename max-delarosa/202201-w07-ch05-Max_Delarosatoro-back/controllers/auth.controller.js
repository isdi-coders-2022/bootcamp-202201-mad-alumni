import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import * as services from '../services/auth.js';
import { createToken } from '../services/token.js';

dotenv.config();

export const login = async (req, res, next) => {
    const possibleUser = req.body;
    try {
        const dbUser = await services.findUser(possibleUser);
        if (dbUser) {
            const passwordCheck = bcrypt.compareSync(
                possibleUser.password,
                dbUser.password
            );
            if (passwordCheck) {
                const token = createToken(dbUser);
                res.json({
                    token,
                    id: dbUser._id,
                    username: dbUser.username,
                    name: dbUser.name,
                    lastName: dbUser.lastName,
                    profilePicUrl: dbUser.profilePicUrl,
                    friends: dbUser.friends,
                    enemies: dbUser.enemies,
                });
            } else {
                throw new Error('user or password incorrect');
            }
        } else {
            throw new Error('user or password incorrect');
        }
    } catch (error) {
        next(new Error('user or password incorrect'));
    }
};

export const loginToken = async (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1];
    try {
        const verifyToken = jwt.verify(token, process.env.SECRET);
        if (verifyToken) {
            const tokenContains = jwt.decode(token);
            const dbUser = await services.findUserById(tokenContains.id);
            const userPayload = {
                token,
                id: dbUser._id,
                username: dbUser.username,
                name: dbUser.name,
                lastName: dbUser.lastName,
                profilePicUrl: dbUser.profilePicUrl,
                friends: dbUser.friends,
                enemies: dbUser.enemies,
            };
            res.status(200).json(userPayload);
        }
    } catch (error) {
        next(error);
    }
};

export const register = async (req, res, next) => {
    try {
        const newUser = req.body;
        newUser.password = bcrypt.hashSync(newUser.password);
        const newUserDb = await services.addUser(newUser);
        res.status(201).json(newUserDb);
    } catch (error) {
        next(error);
    }
};
