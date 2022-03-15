import request from 'supertest';
import { app, serverInstance } from '../index.js';

let userId1;
let userId2;
let token;

const testUser1 = {
    username: 'testuser1',
    password: '1234',
    name: 'Test1',
    lastName: 'Test1',
};

const testUser2 = {
    username: 'testuser2',
    password: '1234',
    name: 'Test2',
    lastName: 'Test2',
};

describe('Given the auth routes', () => {
    describe('', () => {
        afterEach(() => {
            serverInstance.close();
        });
        beforeAll(async () => {
            const registerResponse1 = await request(app)
                .post('/auth/register')
                .set('Accept', 'application/json')
                .send(testUser1);
            userId1 = registerResponse1.body._id;

            const registerResponse2 = await request(app)
                .post('/auth/register')
                .set('Accept', 'application/json')
                .send(testUser2);
            userId2 = registerResponse2.body._id;

            const loginResponse = await request(app)
                .post('/auth/login')
                .set('Accept', 'application/json')
                .send({
                    username: testUser1.username,
                    password: testUser1.password,
                });
            token = loginResponse.body.token;
        });
        afterAll(async () => {
            await request(app)
                .delete(`/users/${userId1}`)
                .set('Accept', 'application/json')
                .set('Authorization', `Bearer ${token}`);
        });

        test('Get /users gets all users in DB', async () => {
            const response = await request(app)
                .get('/users')
                .set('Accept', 'application/json')
                .set('Authorization', `Bearer ${token}`);
            expect(response.status).toBe(200);
            expect(response.body).toBeTruthy();
            expect(response.body).toHaveLength(2);
        });

        test('Get /users/other-users gets all other users in DB', async () => {
            const response = await request(app)
                .get('/users/other-users')
                .set('Accept', 'application/json')
                .set('Authorization', `Bearer ${token}`);
            expect(response.status).toBe(200);
            expect(response.body).toBeTruthy();
            expect(response.body).toHaveLength(1);
        });

        test('Get /users/other-users gets all other users in DB', async () => {
            const response = await request(app)
                .get('/users/other-users')
                .set('Accept', 'application/json')
                .set('Authorization', `Bearer ${token}`);
            expect(response.status).toBe(200);
            expect(response.body).toBeTruthy();
            expect(response.body).toHaveLength(1);
        });

        test('Get /users/my-info gets logged user info', async () => {
            const response = await request(app)
                .get('/users/my-info')
                .set('Accept', 'application/json')
                .set('Authorization', `Bearer ${token}`);
            expect(response.status).toBe(200);
            expect(response.body).toBeTruthy();
            expect(response.body.username).toBe(testUser1.username);
            expect(response.body.name).toBe(testUser1.name);
            expect(response.body.lastName).toBe(testUser1.lastName);
        });
        test('Get /users/toggle-friend/:idUser toggles friend - add', async () => {
            const response = await request(app)
                .get(`/users/toggle-friend/${userId2}`)
                .set('Accept', 'application/json')
                .set('Authorization', `Bearer ${token}`);
            expect(response.status).toBe(200);
            expect(response.body).toBeTruthy();
            expect(response.body.username).toBe(testUser1.username);
            expect(response.body.name).toBe(testUser1.name);
            expect(response.body.lastName).toBe(testUser1.lastName);
            expect(response.body.friends[0]).toBe(userId2);
        });
        test('Get /users/friends/:idUser gets friend list', async () => {
            const response = await request(app)
                .get(`/users/friends`)
                .set('Accept', 'application/json')
                .set('Authorization', `Bearer ${token}`);
            expect(response.status).toBe(200);
            expect(response.body).toBeTruthy();
            expect(response.body[0]._id).toBe(userId2);
        });
        test('Get /users/toggle-friend/:idUser toggles friend - remove', async () => {
            const response = await request(app)
                .get(`/users/toggle-friend/${userId2}`)
                .set('Accept', 'application/json')
                .set('Authorization', `Bearer ${token}`);
            expect(response.status).toBe(200);
            expect(response.body).toBeTruthy();
            expect(response.body.friends).toHaveLength(0);
        });
        test('Get /users/toggle-enemy/:idUser toggles enemy - add', async () => {
            const response = await request(app)
                .get(`/users/toggle-enemy/${userId2}`)
                .set('Accept', 'application/json')
                .set('Authorization', `Bearer ${token}`);
            expect(response.status).toBe(200);
            expect(response.body).toBeTruthy();
            expect(response.body.username).toBe(testUser1.username);
            expect(response.body.name).toBe(testUser1.name);
            expect(response.body.lastName).toBe(testUser1.lastName);
            expect(response.body.enemies[0]).toBe(userId2);
        });
        test('Get /users/enemies gets enemy list', async () => {
            const response = await request(app)
                .get(`/users/enemies`)
                .set('Accept', 'application/json')
                .set('Authorization', `Bearer ${token}`);
            expect(response.status).toBe(200);
            expect(response.body).toBeTruthy();
            expect(response.body[0]._id).toBe(userId2);
        });
        test('Get /users/toggle-enemy/:idUser toggles enemy - remove', async () => {
            const response = await request(app)
                .get(`/users/toggle-enemy/${userId2}`)
                .set('Accept', 'application/json')
                .set('Authorization', `Bearer ${token}`);
            expect(response.status).toBe(200);
            expect(response.body).toBeTruthy();
            expect(response.body.enemies).toHaveLength(0);
        });
        test('Patch /users/my-profile updates logged profile', async () => {
            const updateInfo = {
                name: 'testuser1-update',
                lastName: 'testuser1-update',
            };
            const response = await request(app)
                .patch(`/users/my-profile`)
                .send(updateInfo)
                .set('Accept', 'application/json')
                .set('Authorization', `Bearer ${token}`);
            expect(response.status).toBe(200);
            expect(response.body).toBeTruthy();
            expect(response.body.name).toBe(updateInfo.name);
            expect(response.body.lastName).toBe(updateInfo.lastName);
        });
        test('Delete /users/:idUser deletes user', async () => {
            const response = await request(app)
                .delete(`/users/${userId2}`)
                .set('Accept', 'application/json')
                .set('Authorization', `Bearer ${token}`);
            expect(response.status).toBe(200);
            expect(response.body).toBeTruthy();
        });
    });
});
