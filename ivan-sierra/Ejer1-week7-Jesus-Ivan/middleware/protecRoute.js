import {verifyToken} from '../services/auth.js'

export const protectRoute = (req, res, next) => {
    const authorization = req.get('authorization');
    let token;
    let decodedToken;
    try {
        if (authorization && authorization.toLowerCase().startsWith('bearer')) {
            token = authorization.substring(7);
            decodedToken = verifyToken(token);
            if (typeof decodedToken === 'string') {
                throw new Error();
            }
            next();
        } else {
            throw new Error();
        }
    } catch (error) {
        res.status(401).json({
            error: 'token missing or invalid',
        });
    }
};
