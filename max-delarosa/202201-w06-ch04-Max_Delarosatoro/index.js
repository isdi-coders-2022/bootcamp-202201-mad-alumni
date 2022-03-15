import express from 'express';
import * as dotenv from 'dotenv';
import morgan from 'morgan';
import * as services from './services/things-i-know-crud.js';
import { startup } from './startup.js';
dotenv.config();

const answer = await startup();

const PORT = answer.port || process.env.PORT;
const app = express();

app.use(express.json());
app.use(morgan('dev'));

app.use((req, res, next) => {
    res.port = PORT;
    next();
});

app.get('/', (req, res) => {
    res.send('<h1>Things I Know API</h1>');
});

app.get('/things', async (req, res) => {
    //devolver las tareas
    const response = await services.getAllthingsIKnow(answer.deployment);
    res.json(response);
});

app.get('/things/:idThing', async (req, res, next) => {
    //devolver las tarea
    const result = await services.getThingIKnow(
        req.params.idThing,
        answer.deployment
    );
    if (result) {
        res.json(result);
    } else {
        next(new Error('Thing id not defined'));
    }
});

app.post('/things', async (req, res) => {
    const newThingIKnow = { ...req.body };
    const response = await services.addThingIKnow(
        newThingIKnow,
        answer.deployment
    );
    res.json(response);
});

app.patch('/things/:idThing', async (req, res) => {
    const partialThingIKnow = { ...req.body };
    const response = await services.updateThingIKnow(
        req.params.idThing,
        partialThingIKnow,
        answer.deployment
    );
    res.json(response);
});

app.delete('/things/:idThing', async (req, res) => {
    const id = req.params.idThing;
    const response = await services.removeThingIKnow(id, answer.deployment);

    res.json(response && {});
});

app.use((err, req, res, next) => {
    console.log(err);
    res.json({ error: err.message });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
