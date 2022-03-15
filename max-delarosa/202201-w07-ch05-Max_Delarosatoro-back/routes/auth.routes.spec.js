import request from 'supertest';
import { app, serverInstance } from '../index.js';

let userId;
let token;

describe('Given the auth routes', () => {
    describe('', () => {
        afterEach(() => {
            serverInstance.close();
        });
        const testUser = {
            username: 'testuser2',
            password: '1234',
            name: 'Test2',
            lastName: 'Test2',
        };
        test('Post /auth/register creates a user in DB', async () => {
            const response = await request(app)
                .post('/auth/register')
                .set('Accept', 'application/json')
                .send(testUser);
            userId = response.body._id;
            expect(response.status).toBe(201);
            expect(response.body).toBeTruthy();
        });
        test('Post /auth/register with wrong Json gives 401', async () => {
            const response = await request(app)
                .post('/auth/register')
                .set('Accept', 'application/json')
                .send({ a: 1 });
            expect(response.status).toBe(401);
            expect(response.body).toBeTruthy();
        });
        test('Post /login with a wrong user gives 401 status', async () => {
            const response = await request(app)
                .post('/auth/login')
                .set('Accept', 'application/json')
                .send({ username: 'test-user-3', password: '123456' });
            expect(response.status).toBe(401);
        });
        test('Post /login with a wrong password gives 401 status', async () => {
            const response = await request(app)
                .post('/auth/login')
                .set('Accept', 'application/json')
                .send({ username: 'test-user-2', password: '12345' });
            expect(response.status).toBe(401);
        });
        test('Post /auth/login logs a user in DB', async () => {
            const response = await request(app)
                .post('/auth/login')
                .set('Accept', 'application/json')
                .send({
                    username: testUser.username,
                    password: testUser.password,
                });
            token = response.body.token;
            expect(response.status).toBe(200);
            expect(response.body).toBeTruthy();
        });
        test('Get /auth/token-login with a bad token gives 401', async () => {
            const response = await request(app)
                .get('/auth/token-login')
                .set('Accept', 'application/json')
                .set('Authorization', `Bearer ${token}a`);
            expect(response.status).toBe(401);
            expect(response.body).toBeTruthy();
        });

        test('Get /auth/token-login with a valid token with invalid info gives 401', async () => {
            const response = await request(app)
                .get('/auth/token-login')
                .set('Accept', 'application/json')
                .set(
                    'Authorization',
                    `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.6liWt0yc6ujSwkIk0QWgTeJsQGGPOOaDe_fJc3_OcLE`
                );
            expect(response.status).toBe(401);
            expect(response.body).toBeTruthy();
        });
        test('Get /auth/token-login logs a user in DB', async () => {
            const response = await request(app)
                .get('/auth/token-login')
                .set('Accept', 'application/json')
                .set('Authorization', `Bearer ${token}`);
            expect(response.status).toBe(200);
            expect(response.body).toBeTruthy();

            await request(app)
                .delete(`/users/${userId}`)
                .set('Accept', 'application/json')
                .set('Authorization', `Bearer ${token}`);
        });
    });
});
