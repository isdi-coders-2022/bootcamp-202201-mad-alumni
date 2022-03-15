import express from 'express';
import morgan from 'morgan';
import * as dotenv from 'dotenv';
dotenv.config();
import robotsRouter from './routes/robots.router.js';
const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(morgan('dev'));

app.use('/robots', robotsRouter);

export const serverInstance = app.listen(port, () => {
    console.log(`Server listening in http://localhost:${port}`);
});
