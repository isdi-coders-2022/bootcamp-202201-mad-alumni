import { userCreator } from '../models/user.model.js';

export const getAllUsers = async (req, res, next) => {
    const User = userCreator();
    const error = new Error('Could not get');
    error.status = 444;

    try {
        const users = await User.find({})
            .populate('friends', {
                password: 0,
                friends: 0,
                enemies: 0,
                birthDate: 0,
            })
            .populate('enemies', {
                password: 0,
                friends: 0,
                enemies: 0,
                birthDate: 0,
            });
        res.json(users);
    } catch (err) {
        next(error);
    }
};
