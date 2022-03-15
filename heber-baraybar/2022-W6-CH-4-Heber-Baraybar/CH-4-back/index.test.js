import request from 'supertest';
import { app, serverInstance } from './index';

describe('Given express app', () => {
    afterEach(() => {
        serverInstance.close();
    });
    test('GET /  returns', async () => {
        const response = await request(app)
            .get('/')
            .set('Accept', 'application/json');

        expect(response.status).toBe(200);
        expect(response.body).toEqual('Robots App');
    });
    test('GET /robots This route get all robots', async () => {
        const response = await request(app)
            .get('/rabots')
            .set('Accept', 'application/json');

        expect(response.status).toBe(200);
        expect(response.body).toEqual('This route get all robots');
    });
});
