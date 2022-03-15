import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import * as dotenv from 'dotenv';
import { mongoConnect } from './services/db.js';

import usersRouter from './routes/users.routes.js';

dotenv.config();
mongoConnect();

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

app.use('/users', usersRouter);
app.listen(port, () => {
    console.log(`Server listening in http://localhost:${port}`);
});
