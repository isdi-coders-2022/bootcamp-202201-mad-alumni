import mongoose from 'mongoose';
import request from 'supertest';
import { app } from './index';
import { serverInstance } from './index.js';
import { mongoConnect } from './services/db';

describe('Given express app', () => {
    // afterAll(async () => {
    //     await mongoose.close();
    // });let clientsCollection;
    // let initialCount;
    // let first_id;
    // const collection = 'testingClients';
    // beforeEach(async () => {
    //     const mockCollection = await install(collection);
    //     initialCount = mockCollection.insertedCount;
    //     first_id = mockCollection.insertedIds['0'];
    //     ({ mongoClient, robotsCollection } = await robotsConnect(collection));
    // });
    afterAll(() => {
        serverInstance.close();
        mongoose.disconnect();
    });
    test('GET / route returns Error 404', async () => {
        // app.get('/robots', function (req, res) {
        //     res.status(200).json({});
        // });

        const response = await request(app)
            .get('/')
            .set('Accept', 'application/json');

        expect(response.status).toBe(404);
        expect(response.body).toEqual({});
    });
    test('GET /robots/621921b655a4c74bb0914f94 route returns and object', async () => {
        const response = await request(app)
            .get('/robots/621921b655a4c74bb0914f94')
            .set('Accept', 'application/json');

        expect(response.status).toBe(200);
        expect(response.body).toEqual({
            __v: 0,
            _id: '621921b655a4c74bb0914f94',
            date: '2-3-780',
            image: 'https://www.piratesandprincesses.net/wp-content/uploads/2019/08/Disney-Genie.jpg',
            name: 'Genie',
            speed: 10,
            strength: 10,
        });
    });
    test('GET /robots route returns and object', async () => {
        const response = await request(app)
            .get('/robots')
            .set('Accept', 'application/json');

        expect(response.status).toBe(200);
        expect(response.body.length).toEqual(7);
    });
    describe('POST / route returns a new added object', () => {
        let data = {
            date: '9-10-3000',
            image: 'https://www.piratesandprincesses.net/wp-content/uploads/2019/08/Disney-Genie.jpg',
            name: 'Cruella',
            speed: 3,
            strength: 4,
        };

        test('POST / route returns a new added object', async () => {
            await request(app)
                .post('/robots')
                .send(data)
                .set('Accept', 'application/json')
                .expect(201);

            // expect(response.status).toBe(201);
            // expect(response.body.length).toEqual(6);
        });
    });
});
