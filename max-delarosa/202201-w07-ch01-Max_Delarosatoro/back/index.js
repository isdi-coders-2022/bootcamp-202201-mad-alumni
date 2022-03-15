import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import cors from 'cors';
import expressjwt from 'express-jwt';
import { robotsRouter } from './routes/robots.routes.js';
import { authRouter } from './routes/auth.routes.js';

dotenv.config();

export const app = express();

const PORT = process.env.PORT || 4500;

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

app.use(
    expressjwt({
        secret: process.env.SECRET,
        algorithms: ['HS256'],
    }).unless({
        path: ['/auth/login', '/auth/register'],
    })
);

app.use('/robots', robotsRouter);
app.use('/auth', authRouter);

app.use((err, req, res, next) => {
    res.status(401).json({ Error: err.message });
});

export const serverInstance = app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
