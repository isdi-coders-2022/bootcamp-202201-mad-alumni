import { verifyToken } from '../services/auth.js';

export const loginAuthentication = (req, res, next) => {
    const authorization = req.get('authorization');
    let token;
    let decodedToken;
    const tokenError = new Error('Token missing or invalid');
    tokenError.status = 401;

    if (authorization && authorization.toLowerCase().startsWith('bearer')) {
        token = authorization.substring(7);
        decodedToken = verifyToken(token);
        console.log({ decodedToken });
        if (typeof decodedToken === 'string') {
            next(tokenError);
        } else {
            req.tokenPayload = decodedToken;
            next();
        }
    } else {
        next(tokenError);
    }
};

// export const adminRequired = async (req, res, next) => {
//     let token = req.tokenPayload;
//     console.log(token);
//     const user = await User.findOne({ name: token.name });
//     console.log(user);
//     if (user.isAdmin) {
//         next();
//     } else {
//         const userError = new Error('User not authorized');
//         userError.status = 401;
//         next(userError);
//     }
// };
