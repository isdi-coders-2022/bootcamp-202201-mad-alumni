import { createToken, verifyToken } from '../services/auth.js';
import { isUser } from '../services/login.js';

export const login = (req, resp, next) => {
    const user = req.body;
    if (!user.name || !user.password) {
        next(new Error('No password'));
    } else {
        const token = createToken({
            name: user.name,
            _id: parseInt(Math.random() * 10000, 10),
            password: user.password,
        });
        resp.json({ token });
    }
};

export const handleGet = (req, resp) => {
    const token = req.get('authorization').substring(7);
    const data = verifyToken(token);
    resp.json(data);
};

export const loginControl = (req, resp, next) => {
    console.log(req.body);
    return isUser(req.body)
        ? next()
        : resp.status(401).json({ error: 'no estás registrado' });
};
