import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import cors from 'cors';
import expressjwt from 'express-jwt';
import { mongoConnect, testMongoConnect } from './services/connection.js';
import { authRouter } from './routes/auth.routes.js';
import { userRouter } from './routes/users.routes.js';

dotenv.config();

const PORT = process.env.PORT || 4500;

export const app = express();

if (process.env.NODE_ENV === 'test') {
    testMongoConnect();
} else {
    mongoConnect();
}

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

app.use(
    expressjwt({
        secret: process.env.SECRET,
        algorithms: ['HS256'],
    }).unless({
        path: ['/auth/login', '/auth/register', '/auth/login-token'],
    })
);

app.use('/auth', authRouter);
app.use('/users', userRouter);

app.use((err, req, res, next) => {
    res.status(401).json({ Error: err.message });
});

export const serverInstance = app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
