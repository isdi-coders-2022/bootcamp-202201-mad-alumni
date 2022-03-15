import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import * as dotenv from 'dotenv';
dotenv.config();
import { mongoConnect } from './services/db.js';

import itemsRouter from './routes/item.route.js';
import usersRouter from './routes/user.route.js';

export const app = express();
const port = process.env.PORT;

// const usersRouter = require('./routes/tasks.js');

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

mongoConnect();
app.use('/items', itemsRouter);
app.use('/users', usersRouter);

// eslint-disable-next-line no-unused-vars
app.use((err, req, resp, next) => {
    console.log(err.message);
    resp.send({ error: err.message });
});

export const server = app.listen(port, () => {
    console.log(`Server listening in http://localhost:${port}`);
});
