import { mongoConnect, robotConnect } from './db.js';
const express = require('express');

const app = express();

describe('calling the function mongoConnect() ', () => {
    afterEach(() => {
        server.close();
    });
    test('it should show the name of my database ROBOTS', async () => {
        const connect = await mongoConnect();

        expect(connect.connections[0]).toHaveProperty('name', 'ROBOTS');
    });
});

describe('calling the function robotConnec() ', () => {
    test('cshould return a model with the properties id,speed,resistance and date', async () => {
        const robotModel = await robotConnect('robots');
        console.log(robotModel);
        expect(robotModel()).toHaveProperty('_id');
        expect(robotModel()).toHaveProperty('speed');
        expect(robotModel()).toHaveProperty('resistance');
        expect(robotModel()).toHaveProperty('creation_date');
    });
});

const server = app.listen(3600, () => {
    console.log('Listening on 3600');
});
