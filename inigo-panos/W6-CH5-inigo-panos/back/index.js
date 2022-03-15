import express from 'express';
import morgan from 'morgan';
import * as dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

export const app = express();
const port = process.env.PORT;

import robotsRouter from './routes/robots-routes.js';

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

app.use('/robots', robotsRouter);

app.get('/', (req, res) => {
    res.status(200).json('Hello World');
});

app.get('/r0b0ts', (req, res) => {
    res.status(200).json('This route get all robots');
});

export const serverInstance = app.listen(port, () => {
    console.log(`Server listening in http://localhost:${port}`);
});
