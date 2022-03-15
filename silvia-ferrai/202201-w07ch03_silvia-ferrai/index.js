import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import * as dotenv from 'dotenv';
dotenv.config();
export const app = express();
const port = process.env.PORT;

mongoConnect();

import seriesRouter from './routes/user.routes.js';
import userRouter from './routes/user.routes.js';
import { mongoConnect } from './services/db.js';
import platformRouter from './routes/platform.routes.js';

import { Serie } from './models/series.model.js';

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

// app.use('/items', itemRouter);
app.use('/users', userRouter);
app.use('/series', seriesRouter);
app.use('/platforms', platformRouter);

// eslint-disable-next-line no-unused-vars
app.use((err, req, resp, next) => {
    resp.status(err.status);
    resp.send({ error: err.message });
});

export const server = app.listen(port, () => {
    console.log(`Server listening in http://localhost:${port}`);
});
