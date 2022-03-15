import { userCreator } from '../models/user.model.js';
import { validateToken } from '../services/auth/auth.js';

export const getAllFiltered = async (req, res, next) => {
    const User = userCreator();
    const { filter } = req.params;
    const error = new Error('Could not get');
    error.status = 444;
    const token = req.get('Authorization').substring(7);
    const tokenPayload = validateToken(token);
    try {
        const loggedUser = await User.findById(tokenPayload.id)
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

        let responseData = [];
        switch (filter) {
            case 'friends':
                responseData = [...loggedUser.friends];
                res.json(responseData);
                break;
            case 'enemies':
                responseData = [...loggedUser.enemies];
                res.json(responseData);
                break;
            default:
                error.message = 'Invalid filter';
                error.status = 403;
                throw error;
        }
        res.json(responseData);
    } catch (err) {
        next(error);
    }
};
