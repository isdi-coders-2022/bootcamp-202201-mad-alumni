import express from 'express';
import morgan from 'morgan';
import * as dotenv from 'dotenv';
dotenv.config();

export const app = express();
const port = process.env.PORT || 8000;

// const usersRouter = require('./routes/tasks.js');
import robotsRouter from './routes/robots.routes.js';

app.use(express.json());
app.use(morgan('dev'));

app.use('/robots', robotsRouter);

app.get('/', (req, res) => {
    res.status(200).json('Robots App');
});

app.get('/rabots', (req, res) => {
    res.status(200).json('This route get all robots');
});

app.get('/robots/:name', (req, res) => {
    res.json('This route get info about name of robot ' + req.params.name);
});

export const serverInstance = app.listen(port, () => {
    console.log(`Server listening in http://localhost:${port}`);
});

// app.get('/users/', (req, res) => {
//     res.status(200).json('This route get all users');
// });

// app.get('/users/stats/', (req, res) => {
//     res.send('This route get users stats');
// });
