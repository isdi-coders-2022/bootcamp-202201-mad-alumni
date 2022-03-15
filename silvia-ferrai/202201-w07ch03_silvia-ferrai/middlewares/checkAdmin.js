import { User } from '../models/user.model.js';

export const checkAdmin = async (req, res, next) => {
    let token = req.tokenPayload;
    console.log(token);
    const user = await User.findById(token.id);

    console.log(user);
    if (user.isAdmin) {
        next();
    } else {
        const userError = new Error('not authorized user');
        userError.status = 401;
        next(userError);
    }
};
