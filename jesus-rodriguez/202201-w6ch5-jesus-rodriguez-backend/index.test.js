const request = require('supertest');
const express = require('express');

const app = express();

describe('Given app connection', function () {
    afterEach(() => {
        server.close();
    });
    test('GET all', async () => {
        app.get('/robots', function (req, res) {
            res.status(200).json({});
        });

        const response = await request(app)
            .get('/robots')
            .set('Accept', 'application/json');

        expect(response.status).toBe(200);
        expect(response.body).toEqual({});
    });
    test('GET /robots/id', async () => {
        app.get('/robots/62192281b1479b6332e8ce22', function (req, res) {
            res.json({});
        });
        const response = await request(app)
            .get('/robots/62192281b1479b6332e8ce22')
            .set('Accept', 'application/json');

        expect(response.status).toBe(200);
        expect(response.body).toEqual({});
    });
});

export const server = app.listen(3600, () => {
    console.log('Listening on 3600');
});
