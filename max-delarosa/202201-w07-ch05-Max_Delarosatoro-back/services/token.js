import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export const createToken = (user) => {
    const { SECRET } = process.env;
    const payload = {
        id: user._id,
        username: user.username,
        name: user.name,
        lastName: user.lastName,
        profilePicUrl: user.profilePicUrl,
        friends: user.friends,
        enemies: user.enemies,
    };
    return jwt.sign(payload, SECRET);
};
