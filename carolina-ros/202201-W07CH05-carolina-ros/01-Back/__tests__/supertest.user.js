import mongoose from 'mongoose';
import request from 'supertest';
import { app, server } from '../index.js';
import { userCreator } from '../model/user.model.js';
import { createToken } from '../services/auth.js';

describe('Given the test database with a initial state', () => {
    let authToken;
    let first_id;
    beforeEach(async () => {
        const User = userCreator();
        const mockUsers = await User.find({});
        await User.deleteMany({});
        const result = await User.insertMany(mockUsers);
        first_id = result._id;
        console.log(first_id);
        authToken = createToken({
            name: mockUsers.name,
            id: mockUsers.id,
        });
    });

    afterEach(() => {
        // mongoose.disconnect();
        server.close();
    });
    describe('When the request is POST /users/register creates a user ', function () {
        test('responds with json', async function () {
            const newUser = {
                name: 'Rocinante',
                password: '2468',
                age: 27,
            };
            const response = await request(app)
                .post('/users/register')
                .set('Accept', 'application/json')
                .send(newUser);
            first_id = response.body._id;
            expect(response.status).toBe(200);
            expect(response.body).toBeTruthy();
        });
    });
    describe('When the request is POST /users/login with a wrong user gives 401 status ', function () {
        test('responds with json', async function () {
            const response = await request(app)
                .post('/users/register')
                .set('Accept', 'application/json')
                .send({ name: 'Rocin', password: 2468 });

            expect(response.status).toBe(401);
        });
    });
    describe('When the request is POST /users/login with a wrong password gives 401 status ', function () {
        test('responds with json', async function () {
            const response = await request(app)
                .post('/users/register')
                .set('Accept', 'application/json')
                .send({ name: 'Daniel', password: 1234 });
            first_id = response.body._id;
            expect(response.status).toBe(401);
        });
    });

    describe('When the request is GET /users with authentication', function () {
        test('responds with json', async function () {
            const response = await request(app)
                .get('/users')

                .set('Authorization', 'bearer ' + authToken);
            expect(response.status).toBe(200);
        });
    });

    describe('When the request is GET /users without authentication', function () {
        test('responds with json', async function () {
            const response = await request(app).get('/users');
            expect(response.status).toBe(401);
        });
    });

    describe('When the request is GET /users/:id with authentication', function () {
        test('responds with json', async function () {
            console.log(first_id);
            const response = await request(app)
                .get('/users/' + first_id)
                .set('Authorization', 'bearer ' + authToken);
            expect(response.status).toBe(200);
        });
    });

    describe('When the request is GET /users/:id without authentication', function () {
        test('responds with json', async function () {
            const response = await request(app).get('/users/' + first_id);
            expect(response.status).toBe(401);
        });
    });
    describe('When the request is PATCH /users/:id with authentication', function () {
        test('responds with json', async function () {
            const data = {
                age: 36,
            };
            const response = await request(app)
                .patch('/users/' + first_id)
                .send(data)
                .set('Authorization', 'bearer ' + authToken);

            expect(response.status).toBe(200);
        });
    });
});
