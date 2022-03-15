/* eslint-disable no-underscore-dangle */
import request from 'supertest';
import { app, connection } from './index.js';
import { install, mongoConnect } from './services/db.js';
import { mockUser } from './test-utils/test-users.js';

describe('Given our api server on index.js', () => {
    let installResponse;
    let sampleUserId = '';
    let connect;
    let userToken = '';

    beforeAll(async () => {
        connect = await mongoConnect();
        installResponse = await install();
        sampleUserId = installResponse.insertedIds[0].toString();
    });

    afterAll(() => {
        connect.disconnect();
        connection.close();
    });

    describe('When running the install function', () => {
        test('Then it should return three inserts', async () => {
            await expect(installResponse.acknowledged).toBe(true);
            await expect(installResponse.insertedCount).toBe(3);
        });
    });

    describe('When attacking the route users/login with a post request', () => {
        test('Then it should return user data and a token', async () => {
            const loginResponse = await request(app)
                .post('/users/login')
                .send({ userName: 'soler', password: '1234' })
                .expect('Content-Type', /json/)
                .set('Accept', 'application/json');
            await expect(loginResponse._body.token).toBeTruthy();
            userToken = loginResponse._body.token;
        });
        test('Or send an error when user is not registered', async () => {
            const loginResponse = await request(app)
                .post('/users/login')
                .send({ userName: 'Juan', password: '1234' });
            expect(loginResponse.status).toBe(401);
        });
        test('Or send an error when the password is not correct', async () => {
            const loginResponse = await request(app)
                .post('/users/login')
                .send({ userName: 'Pepe', password: '12345' });
            expect(loginResponse.status).toBe(401);
        });
    });

    describe('When attacking the route users/register with a post request', () => {
        test('Then it should return user data and a token', async () => {
            const registerResponse = await request(app)
                .post('/users/register')
                .send(mockUser)
                .expect('Content-Type', /json/)
                .set('Accept', 'application/json');
            expect(registerResponse.status).toBe(200);
            expect(registerResponse._body.token).toBeTruthy();
            expect(registerResponse._body.userName).toBe('cris');
        });
        test('Or return an error when any of the fields are missing', async () => {
            const registerResponse = await request(app)
                .post('/users/register')
                .send({
                    name: 'Antonio',
                    password: '1234',
                });
            expect(registerResponse.status).toBe(402);
        });
    });

    describe('When attacking the route /users/:id with a patch request', () => {
        test('Then it should return the updated user data', async () => {
            const updateResponse = await request(app)
                .patch(`/users/${sampleUserId}`)
                .set('Authorization', `bearer:${userToken}`)
                .set('Accept', 'application/json')
                .send({
                    userName: 'Toño',
                    birthDate: '1997-12-23',
                    password: '1234',
                })
                .expect('Content-Type', /json/);
            expect(updateResponse._body.userName).toBe('toño');
            expect(updateResponse._body.birthDate).toBe('1997-12-23');
        });
    });

    describe('When attacking the route /users/ with a get request', () => {
        test('Then it should return a list of all users', async () => {
            const getResponse = await request(app)
                .get('/users/')
                .set('Authorization', `bearer:${userToken}`)
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/);
            expect(getResponse._body).toHaveLength(4);
        });
        test('Or throw an error', async () => {
            const getResponse = await request(app)
                .get('/users/')
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/);
            expect(JSON.stringify(getResponse._body)).toBe(
                '{"error":"Authentication error"}'
            );
        });
    });

    describe('When attacking the route /users/relation/friends with a get request and a filter', () => {
        test('Then it should return a list of all of the logged users friends', async () => {
            const getResponse = await request(app)
                .get('/users/relation/friends')
                .set('Authorization', `bearer:${userToken}`)
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/);
            expect(getResponse._body.length).toBeDefined();
        });
        test('Or throw an error', async () => {
            const getResponse = await request(app)
                .get('/users/relation/friends')
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/);
            expect(JSON.stringify(getResponse._body)).toBe(
                '{"error":"Authentication error"}'
            );
        });
    });

    describe('When attacking the route /users/:id with a get request', () => {
        test('Then it should return the user with that id', async () => {
            const getResponse = await request(app)
                .get(`/users/${sampleUserId}`)
                .set('Authorization', `bearer:${userToken}`)
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/);
            expect(typeof getResponse._body).toBe('object');
            expect(getResponse._body.userName).toBe('toño');
        });
        test('Or throw an error', async () => {
            const getResponse = await request(app)
                .get(`/users/${sampleUserId}`)
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/);
            expect(JSON.stringify(getResponse._body)).toBe(
                '{"error":"Authentication error"}'
            );
        });
    });

    describe('When attacking the route /users/add/:id with a patch request', () => {
        test('Then it should return the updated user data', async () => {
            const updateResponse = await request(app)
                .patch(`/users/add/${sampleUserId}`)
                .set('Authorization', `bearer:${userToken}`)
                .set('Accept', 'application/json')
                .send({
                    list: 'friends',
                    token: userToken,
                })
                .expect('Content-Type', /json/);
            expect(updateResponse._body.userName).toBe('soler');
            expect(updateResponse._body.friends).toHaveLength(1);
        });
    });
});
