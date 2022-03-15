import express from 'express';
import things from './books.js';
import {
    addThing,
    deleteThing,
    getAllClients,
    getThing,
    insertThing,
} from './clients-crud.js';

const PORT = 1453;
const app = express();

app.use(express.json());

app.get('/things', async (req, resp) => {
    const resultThings = await getAllClients();
    resp.send(resultThings);
});

app.get('/things/:id', async (req, resp) => {
    const { id } = { ...req.params };
    console.log(req.params);
    console.log(id + ' id');
    const resultThings = await getThing(id);
    resp.send(resultThings);
});

app.delete('/things/:id', async (req, resp) => {
    const { id } = { ...req.params };
    const resultThings = await deleteThing(id);
    resp.send(resultThings);

    // resp.send(del)
});

// app.get('/things/:id', (req, resp) => {
//     // devolver las tareas
//     const result =f TASKS.find((item) => +item.id === +req.params.id);
// });

app.post('/things', async (req, resp) => {
    const { id } = { ...req.params };
    const resultThings = await addThing(id);
    resp.send(resultThings);
});

// app.patch('/things/:id', (req, resp) => {
//     const index = TASKS.findIndex((item) => +item.id === +req.params.id);
//     TASKS[index] = { ...TASKS[index], ...req.body };
// });

app.put('/things', async (req, resp) => {
    const { id } = { ...req.params };
    const resultThings = await insertThing(id);
    resp.send(resultThings);
});

app.listen(PORT, () => {
    console.log('Server running at http://localhost:' + PORT);
});
