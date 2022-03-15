import * as crud from '../../services/users-crud.js';
import { createError } from '../../services/errors.js';
// import { User } from '../../index.js';
import { userCreator } from '../../model/user.model.js';

export const updateUser = (req, res, next) => {
    const User = userCreator();
    try {
        const response = crud.updateUser(req.params.id, req.body, User);
        res.json(response);
    } catch (error) {
        next(createError(error));
    }
};
