import jwt from 'jsonwebtoken';
import fs from 'fs/promises';
import dotenv from 'dotenv';
import { User } from '../models/user.model.js';

dotenv.config();

export const getAllUsers = async (req, res, next) => {
    try {
        const users = await User.find({});
        res.status(200);
        res.json(users);
    } catch (error) {
        next(error);
    }
};

export const getAllOtherUsers = async (req, res, next) => {
    try {
        const { id } = req.user;
        const users = await User.find({});
        const filteredUsers = users.filter(
            (item) => item._id.toString() !== id
        );
        res.status(200);
        res.json(filteredUsers);
    } catch (error) {
        next(error);
    }
};

export const getUserInfo = async (req, res, next) => {
    try {
        const authHeader = req.get('Authorization').split(' ')[1];
        const tokenInfo = jwt.verify(authHeader, process.env.SECRET);
        const dbUser = await User.findById(tokenInfo.id).populate(
            'friends enemies'
        );
        res.status(200);
        res.json(dbUser);
    } catch (error) {
        next(error);
    }
};

export const getFriends = async (req, res, next) => {
    try {
        const { id } = req.user;
        const userDb = await User.findById(id).populate('friends enemies');
        res.status(200);
        res.json(userDb.friends);
    } catch (error) {
        next(error);
    }
};
export const getEnemies = async (req, res, next) => {
    try {
        const { id } = req.user;
        const userDb = await User.findById(id).populate('friends enemies');
        res.status(200);
        res.json(userDb.enemies);
    } catch (error) {
        next(error);
    }
};

export const toggleFriend = async (req, res, next) => {
    try {
        const { id } = req.user;
        const user = await User.findById(id);

        const { idUser } = req.params;
        const friend = await User.findById(idUser);

        if (friend) {
            if (user.enemies.includes(friend._id)) {
                user.enemies = user.enemies.filter(
                    (item) => !item.equals(friend._id)
                );
            }
            if (!user.friends.includes(friend._id)) {
                user.friends.push(friend._id);
                await fs.appendFile(
                    'logs.txt',
                    `New relationship: ${user.name} ${user.lastName} & ${friend.name} ${friend.lastName} (friends)\n`
                );
            } else {
                user.friends = user.friends.filter(
                    (item) => !item.equals(friend._id)
                );
            }
            await user.save();
            res.status(200);
            res.json(user);
        } else {
            throw new Error(
                `User ${idUser} can't be added as friend, because it does not exist on the DB.`
            );
        }
    } catch (error) {
        next(error);
    }
};

export const toggleEnemy = async (req, res, next) => {
    try {
        const { id } = req.user;
        const user = await User.findById(id);

        const { idUser } = req.params;
        const enemy = await User.findById(idUser);

        if (enemy) {
            if (user.friends.includes(enemy._id)) {
                user.friends = user.friends.filter(
                    (item) => !item.equals(enemy._id)
                );
            }
            if (!user.enemies.includes(enemy._id)) {
                user.enemies.push(enemy._id);
                await fs.appendFile(
                    'logs.txt',
                    `New relationship: ${user.name} ${user.lastName} & ${enemy.name} ${enemy.lastName} (enemies)\n`
                );
            } else {
                user.enemies = user.enemies.filter(
                    (item) => !item.equals(enemy._id)
                );
            }
            await user.save();
            res.status(200).json(user);
        } else {
            throw new Error(
                `User ${idUser} can't be added as enemy, because it does not exist on the DB.`
            );
        }
    } catch (error) {
        next(error);
    }
};

export const deleteUser = async (req, res, next) => {
    try {
        const { idUser } = req.params;
        const response = await User.findByIdAndDelete(idUser);
        if (response) {
            res.json({});
        } else {
            const error = new Error(
                `User id ${idUser} not found in the database`
            );
            error.status = 404;
            throw error;
        }
    } catch (error) {
        next(error);
    }
};

export const updateProfile = async (req, res, next) => {
    try {
        const { id } = req.user;
        const partialUser = req.body;
        const updatedUser = await User.findByIdAndUpdate(id, partialUser, {
            new: true,
        });
        const payload = {
            id: updatedUser._id,
            username: updatedUser.username,
            name: updatedUser.name,
            lastName: updatedUser.lastName,
            profilePicUrl: updatedUser.profilePicUrl,
            friends: updatedUser.friends,
            enemies: updatedUser.enemies,
        };
        res.json(payload);
    } catch (error) {
        next(error);
    }
};
