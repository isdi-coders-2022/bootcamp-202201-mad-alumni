// await mongooseConnect.Collection('robots').drop();
// await mongooseConnect.Collection('robots');

import request from 'supertest';
import { app, connection } from '.';
import { install } from './controllers/robots.controller';
import { mockRobot } from './test-utils/test-robots';

describe('Given the server app on index.js', () => {
    let installResponse;
    let sampleDocId = '';
    beforeAll(async () => {
        installResponse = await install();
        sampleDocId = installResponse.insertedIds[0].toString();
    });
    afterAll(async () => {
        connection.close();
    });

    describe('When running the install function', () => {
        test('Then it should return four inserts', async () => {
            await expect(await installResponse.acknowledged).toBe(true);
        });
    });
    describe('When receiving a get call attacking /robots', () => {
        test('Then it should return a sucessful response with an ok status', async () => {
            const response = await request(app).get('/robots');

            await expect(response.status).toBe(200);
        });
    });
    describe('When receiving a get call attacking /robots/:id', () => {
        test('Then it should return a sucessful response with an object', async () => {
            const response = await request(app)
                .get(`/robots/${sampleDocId}`)
                .set('Accept', 'application/json');

            await expect(JSON.parse(response.text)?.robotName).toBe(
                'Jhonny Slow'
            );
        });
    });
    describe('When receiving a post call attacking /robots', () => {
        test('Then it should return a sucessful response with four inserts', async () => {
            const response = await request(app)
                .post('/robots')
                .send(mockRobot)
                .expect('Content-Type', /json/)
                .set('Accept', 'application/json');

            await expect(JSON.parse(response.text).robotName).toBe(
                mockRobot.robotName
            );
        });
    });
    describe('When receiving a patch call attacking /robots/:id', () => {
        test('Then it should return a sucessful response with four inserts', async () => {
            const response = await request(app)
                .patch(`/robots/${sampleDocId}`)
                .send(mockRobot)
                .expect('Content-Type', /json/)
                .set('Accept', 'application/json');

            await expect(JSON.parse(response.text).robotName).toBe(
                mockRobot.robotName
            );
        });
    });
    describe('When receiving a delete call attacking /robots/:id', () => {
        test('Then it should return a sucessful response with four inserts', async () => {
            const response = await request(app)
                .delete(`/robots/${sampleDocId}`)
                .set('Accept', 'application/json');

            await expect(JSON.parse(response.text).robotName).toBe(
                mockRobot.robotName
            );
        });
    });
});
