import request from 'supertest';
import { app, serverInstance } from './index.js';

describe('Given express app', () => {
    afterEach(() => {
        serverInstance.close();
    });
    test("GET / route returns 'Hello World'", async () => {
        const response = await request(app)
            .get('/')
            .set('Accept', 'application/json');

        expect(response.status).toBe(200);
        expect(response.body).toEqual('Hello World');
    });
    test('GET /robots route returns the list of robots', async () => {
        const response = await request(app)
            .get('/r0b0ts')
            .set('Accept', 'application/json');

        expect(response.status).toBe(200);
        expect(response.body).toBe('This route get all robots');
    });
});
