import { createToken, verifyToken } from './auth.js';

const user = {
    _id: '123a455f17',
    name: 'soler',
    role: 'admin',
};

const token = createToken(user);
const verification = verifyToken(token);
console.log('token', typeof token);
console.log('Verification', verification);
