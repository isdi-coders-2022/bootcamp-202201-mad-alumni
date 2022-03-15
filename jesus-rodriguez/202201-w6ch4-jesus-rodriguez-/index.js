import express from 'express';
import morgan from 'morgan';
import * as api from './services/functions-crud.js';
import * as dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT || 2345;
const app = express();

app.use(express.json());
app.use(morgan('dev'));

app.use((req, resp, next) => {
    resp.port = PORT;
    next();
});

app.get('/', (req, resp) => {
    resp.send('<h1>API REST Things I already know</h1>');
});

app.get('/things', async (req, resp) => {
    resp.json(await api.getAllThings());
});

app.get('/things/:id', async (req, resp, next) => {
    const { id } = req.params;
    const result = await api.getThings(id);
    if (result) {
        resp.json(result);
    } else {
        next(new Error('Tarea no existente'));
    }
});

app.post('/things', async (req, resp) => {
    const newThings = await api.insertThings(req.body);
    resp.json(newThings);
});

app.patch('/things/:id', async (req, resp) => {
    const { id } = req.params;
    const partialThings = req.body;
    await api.updateThings(id, partialThings);
    resp.json({ updateItem: id, partialThings });
});
// app.put();
app.delete('/things/:id', async (req, resp) => {
    const { id } = req.params;
    await api.deleteThings(id);
    resp.json({ deleteItems: id });
});

// eslint-disable-next-line no-unused-vars
app.use((err, req, resp, next) => {
    console.log(err);
    resp.json({ error: err.message });
});

app.listen(PORT, () => {
    console.log('Server running at http://localhost:' + PORT);
});
