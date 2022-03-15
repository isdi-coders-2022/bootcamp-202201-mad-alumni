import jwt from 'jsonwebtoken';
import * as dotenv from 'dotenv';
dotenv.config();
export function createToken(user) {
    const payload = { userName: user.userName };
    const secret = process.env.SECRET;
    const token = jwt.sign(payload, secret);
    return token;
}
