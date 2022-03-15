import express from 'express';
import morgan from 'morgan';
import * as dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
const port = process.env.PORT;

import robotsRouter from './routes/robots.routes.js';
import loginRouter from './routes/login.routes.js';

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

app.use('/robots', robotsRouter);
app.use('/login', loginRouter);

export const server = app.listen(port, () => {
    console.log(`Server listening in http://localhost:${port}`);
});
