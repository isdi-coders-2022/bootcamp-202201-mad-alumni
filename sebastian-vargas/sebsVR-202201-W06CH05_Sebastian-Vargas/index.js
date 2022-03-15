import express from 'express';
import morgan from 'morgan';
import * as dotenv from 'dotenv';
import cors from 'cors';
dotenv.config();

// Crea la APP
const app = express();
const port = process.env.PORT;

// const usersRouter = require('./routes/tasks.js');

// Importa las rutas
import robotsRouter from './routes/robots.routes.js';

// Crea las rutas
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

app.use('/robots', robotsRouter);

app.listen(port, () => {
    console.log(`Server listening in http://localhost:${port}`);
});
