import { userCreator } from '../../model/user.model.js';
import { createError } from '../../services/errors.js';
import * as crud from '../../services/users-crud.js';

export const getAllUsers = async (req, res, next) => {
    const User = userCreator();
    try {
        const response = await crud.getAllUsers(User);
        if (response === null) {
            const error = new Error('No data');
            error.status = 204;
            next(error);
        }
        res.json(response);
    } catch (err) {
        next(createError(err));
    }
};

// export const getAllUsers = async (req, res, next) => {
//     try {
//         const resp = await User.find({});
//         res.json(resp);
//     } catch (err) {
//         next(createError(err));
//     }
// };
