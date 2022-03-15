import { userCreator } from '../../model/user.model.js';
import { createError } from '../../services/errors.js';
import * as crud from '../../services/users-crud.js';

export const getFriends = async (req, res, next) => {
    const User = userCreator();
    try {
        const resp = await crud.getFriends(req.params.id, User);
        delete resp.password;
        res.json(resp);
    } catch (err) {
        next(createError(err));
    }
};
export const getEnemies = async (req, res, next) => {
    const User = userCreator();
    try {
        const resp = await crud.getEnemies(req.params.id, User);
        delete resp.password;
        res.json(resp);
    } catch (err) {
        next(createError(err));
    }
};
