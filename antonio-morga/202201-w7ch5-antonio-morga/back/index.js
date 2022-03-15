import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import dotenv from 'dotenv';
import userRouter from './routes/users.routes.js';
import { mongoConnect } from './services/db.js';

dotenv.config();

export const app = express();

mongoConnect();

const port =
    process.env.NODE_ENV === 'test' ? process.env.TEST_PORT : process.env.PORT;

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

app.use('/users', userRouter);

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
    res.status(err.status);
    res.json({ error: err.message });
});

export const connection = app.listen(port);
console.log(`Server running at http://localhost:${port}`);
