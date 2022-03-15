import { validateToken } from '../services/auth/auth.js';

export const loggedProtect = (req, res, next) => {
    const token = req.get('Authorization')?.substring(7);
    const error = new Error('Authentication error');
    error.status = 403;
    if (!token) {
        next(error);
    } else {
        try {
            const tokenPayload = validateToken(token);
            if (typeof tokenPayload !== 'object') {
                error.message = 'invalid token';
                throw error;
            } else {
                next();
            }
        } catch (err) {
            error.message = err.message;
            next(error);
        }
    }
};
