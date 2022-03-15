import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import cors from 'cors';
import { robotsRouter } from './routes/robots.routes.js';

dotenv.config();

export const app = express();

const PORT = process.env.PORT || 4500;

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

app.use('/robots', robotsRouter);

app.use((err, req, res, next) => {
    res.status(404).json({ Error: err.message });
});

export const serverInstance = app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
