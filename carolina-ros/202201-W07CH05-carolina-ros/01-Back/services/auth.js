import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

/**
 * @description Function returns a JWS Token
 * @author Carolina Ros
 * @param {string} user
 * @returns {string} token
 */

export function createToken(user) {
    const tokenPayload = {
        name: user.name,
        id: user._id,
        isAuthor: user.isAuthor,
    };
    const secret = process.env.SECRET;
    return jwt.sign(tokenPayload, secret);
}

export function verifyToken(token) {
    const secret = process.env.SECRET;
    try {
        return jwt.verify(token, secret);
    } catch (error) {
        return error.message;
    }
}
