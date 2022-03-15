import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import * as dotenv from 'dotenv';
dotenv.config();
import usersRouter from './routes/user.routes.js';
import { mongoConnect } from './services/db.js';
import loginRouter from './routes/login.routes.js';
import { userCreator } from './models/user.model.js';
import registerRouter from './routes/register.routes.js';
import { platformCreator } from './models/platform.model.js';
import platformsRouter from './routes/platform.routes.js';
import platformPostRouter from './routes/platform.post.routes.js';
export const app = express();
const port = process.env.PORT;

mongoConnect();
export const User = userCreator();
export const Platform = platformCreator();

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

//app.use('/items', usersRouter);
app.use('/users/login', loginRouter);
app.use('/users/register', registerRouter);
app.use('/users', usersRouter);
app.use('/platforms', platformsRouter);
app.use('/platform', platformPostRouter);
// app.use('/series', seriesRouter);

// eslint-disable-next-line no-unused-vars
app.use((err, req, resp, next) => {
    console.log(err.message);
    resp.send({ error: err.message });
});

export const server = app.listen(port, () => {
    console.log(`Server listening in http://localhost:${port}`);
});
