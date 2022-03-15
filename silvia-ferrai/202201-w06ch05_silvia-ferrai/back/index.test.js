import request from 'supertest';
import { serverInstance } from './index';
import { app } from './index';

describe('Given express app', () => {
    afterEach(() => {
        serverInstance.close();
    });
    test('GET / route returns ', async () => {
        const response = await request(app)
            .get('/')
            .set('Accept', 'application/json');

        expect(response.status).toBe(304);
        // expect(response.body).toEqual();
    });
    // test("GET /users/1 route returns 'This route get info about user 1'", async () => {
    //     const response = await request(app)
    //         .get('/users/1')
    //         .set('Accept', 'application/json');

    //     expect(response.status).toBe(200);
    //     expect(response.body).toEqual('This route get info about user 1');
    // });
});
