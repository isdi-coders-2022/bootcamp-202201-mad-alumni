import express from 'express';
import * as dotenv from 'dotenv';
import morgan from 'morgan';
import {
    deleteTIK,
    deleteTIKTest,
    getAllTIK,
    getAllTIKTest,
    getTIK,
    getTIKTest,
    insertTIK,
    insertTIKTest,
    updateTIK,
    updateTIKTest,
} from './services/TIK-crud.js';
import { apiInit } from './runAPI.js';

const apiData = await apiInit();

const PORT = apiData.PORT || process.env.PORT;
const app = express();

dotenv.config();
app.use(express.json());
app.use(morgan('dev'));

app.get('/', (req, resp) => {
    resp.send(
        `<h1>Api at:</h1><a href="http://localhost:${PORT}/things">API</a>`
    );
});

app.get('/things', async (req, resp) => {
    const data =
        apiData.dbType === 'Produccion'
            ? await getAllTIK()
            : await getAllTIKTest();
    resp.send(data);
});

app.get('/things/:idThing', async (req, resp) => {
    const { idThing } = { ...req.params };
    const data =
        (await apiData.dbType) === 'Produccion'
            ? await getTIK(idThing)
            : await getTIKTest(idThing);
    resp.send(data);
});

app.delete('/things/:idThing', async (req, resp) => {
    const { idThing } = { ...req.params };
    const data =
        (await apiData.dbType) === 'Produccion'
            ? await deleteTIK(idThing)
            : await deleteTIKTest(idThing);
    resp.send(data);
});

app.post('/things', async (req, resp) => {
    const data =
        (await apiData.dbType) === 'Produccion'
            ? await insertTIK(req.body)
            : await insertTIKTest(req.body);
    resp.send(data);
});

app.put('/things/:idThing', async (req, resp) => {
    const { idThing } = { ...req.params };
    const data =
        (await apiData.dbType) === 'Produccion'
            ? await updateTIK(idThing, req.body)
            : await updateTIKTest(idThing, req.body);
    resp.send(data);
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
