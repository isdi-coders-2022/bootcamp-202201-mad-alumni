import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import * as dotenv from 'dotenv';
import { mongoConnect } from './services/db.js';
import usersRouter from './routes/users.routes.js';
// import { userCreator } from './model/user.model.js';

dotenv.config();
export const app = express();
const port = process.env.PORT;

mongoConnect();
// export const User = userCreator();

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

app.use('/users', usersRouter);

// eslint-disable-next-line no-unused-vars
app.use((err, req, resp, next) => {
    resp.status(401);
    resp.json({ Error: err.message });
});

export const server = app.listen(port, () => {
    console.log(`Server listening in http://localhost:${port}`);
});
