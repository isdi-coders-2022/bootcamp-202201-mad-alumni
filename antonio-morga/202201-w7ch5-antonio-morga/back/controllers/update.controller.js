/* eslint-disable no-underscore-dangle */
import bcrypt from 'bcryptjs';
import { userCreator } from '../models/user.model.js';

export const userUpdate = async (req, res, next) => {
    const User = userCreator();
    const error = new Error('Could not update');
    error.status = 404;
    const savedUser = await User.findById(req.params.id);
    if (bcrypt.compareSync(req.body.password, savedUser.password)) {
        const updateResponse = await User.updateOne(
            { _id: savedUser._id },
            { ...req.body, password: savedUser.password }
        );
        if (!updateResponse.acknowledged) {
            next(error);
        } else {
            const updatedUser = await User.findById(req.params.id);
            res.json({
                userName: updatedUser.userName,
                birthDate: updatedUser.birthDate,
                image: updatedUser.image,
                friends: updatedUser.friends,
                enemies: updatedUser.enemies,
            });
        }
    } else {
        next(error);
    }
};
