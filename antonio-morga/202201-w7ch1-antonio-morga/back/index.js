/* eslint-disable no-console */
import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import cors from 'cors';
import robotRouter from './routes/robots.routes.js';
import loginRouter from './routes/login.routes.js';

dotenv.config();

export const app = express();
const port =
    process.env.NODE_ENV === 'test' ? process.env.TEST_PORT : process.env.PORT;

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

app.use('/robots', robotRouter);
app.use('/login', loginRouter);

export const connection = app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
