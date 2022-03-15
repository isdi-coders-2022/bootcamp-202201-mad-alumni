import { userCreator } from '../models/user.model.js';

export const getUser = async (req, res, next) => {
    const User = userCreator();
    const error = new Error('User not found');
    error.status = 404;
    try {
        const users = await User.findById(req.params.id)
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
