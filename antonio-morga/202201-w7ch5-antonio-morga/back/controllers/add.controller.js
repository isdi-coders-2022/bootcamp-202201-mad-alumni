/* eslint-disable no-underscore-dangle */
import { userCreator } from '../models/user.model.js';
import { validateToken } from '../services/auth/auth.js';

export const addToList = async (req, res, next) => {
    const User = userCreator();
    const error = new Error('The user your are trying to add does not extist');
    error.status = 404;
    const idToAdd = req.params.id;
    const userToAdd = await User.findById(idToAdd);
    if (userToAdd === null) {
        next(error);
    } else {
        const userToUpdate = await User.findById(
            validateToken(req.body.token).id
        );
        const listName = req.body.list;
        let newUserData = {};
        switch (listName) {
            case 'friends':
                newUserData = {
                    friends: [...userToUpdate.friends, userToAdd._id],
                };
                break;
            case 'enemies':
                newUserData = {
                    enemies: [...userToUpdate.enemies, userToAdd._id],
                };
                break;
            default:
                error.message = 'The selected list does not extist';
                next(error);
        }
        const updateResponse = await User.updateOne(
            { _id: userToUpdate._id },
            newUserData
        );
        if (updateResponse.acknowledged) {
            const updatedUser = await User.findById(
                validateToken(req.body.token).id
            );
            res.json({
                userName: updatedUser.userName,
                birthDate: updatedUser.birthDate,
                image: updatedUser.image,
                friends: updatedUser.friends,
                enemies: updatedUser.enemies,
            });
        } else {
            error.message = 'could not update';
            error.status = 444;
            next(error);
        }
    }
};
