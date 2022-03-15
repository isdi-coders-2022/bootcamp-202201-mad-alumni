import request from 'supertest';
import { app, server } from './index.js';
import { User } from './models/user.models.js';
import { createToken } from './services/auth.js';
import { allUsersTest, userTest } from './utils/model-data.js';

describe('Given the test database with a initial state', () => {
    let authToken;
    let first_id;
    beforeEach(async () => {
        await User.deleteMany({});
        const result = await User.insertMany(allUsersTest);
        first_id = result[0].id;
        console.log(first_id);

        authToken = createToken({
            name: userTest[0].name,
            id: userTest[0].id,
        });
    });

    afterEach(() => {
        server.close();
    });

    describe('When the request is GET /users with authentication', function () {
        test('responds with json', async function () {
            const response = await request(app)
                .get('/users')
                .set('Authorization', 'bearer ' + authToken);
            expect(response.statusCode).toBe(200);
        });
    });

    describe('When the request is GET /users without authentication', function () {
        test('responds with json', async function () {
            const response = await request(app).get('/users');
            expect(response.statusCode).toBe(401);
        });
    });

    describe('When the request is GET /users/:id with authentication', function () {
        test('responds with json', async function () {
            const response = await request(app)
                .get('/users/' + first_id)
                .set('Authorization', 'bearer ' + authToken);
            expect(response.statusCode).toBe(200);
        });
    });

    describe('When the request is GET /users/:id without authentication', function () {
        test('responds with json', async function () {
            const response = await request(app).get('/users/' + first_id);
            expect(response.statusCode).toBe(200);
        });
    });
});
