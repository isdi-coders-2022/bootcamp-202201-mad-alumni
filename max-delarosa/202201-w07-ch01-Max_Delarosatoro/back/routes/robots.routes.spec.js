import request from 'supertest';
import { app, serverInstance } from '../index.js';

let robotId;

describe('Given the robots routes', () => {
    describe('', () => {
        afterEach(() => {
            serverInstance.close();
        });
        test('Get / router returns array of robots', async () => {
            process.env.DB_NAME = 'robots-test';
            const response = await request(app)
                .get('/robots')
                .set('Accept', 'application/json');
            expect(response.status).toBe(200);
            expect(response.body).toBeTruthy();
        });
        test('Get /:id router returns robot', async () => {
            process.env.DB_NAME = 'robots-test';
            const expectedResponse = {
                __v: 0,
                _id: '621a2a878d75fd7bb09701bc',
                characteristics: {
                    created_at: '1970-01-06T00:07:14.232Z',
                    resistance: 2,
                    speed: 7,
                },
                image: 'https://media.istockphoto.com/photos/ai-robot-thinking-picture-id1029035836?k=20&m=1029035836&s=612x612&w=0&h=uLxGJ9Y-Q6dP840LmH6jIt0ns7az5_4uke98dn5833A=',
                name: 'TestName',
            };
            const response = await request(app)
                .get(`/robots/${expectedResponse._id}`)
                .set('Accept', 'application/json');
            expect(response.status).toBe(200);
            expect(response.body).toEqual(expectedResponse);
        });
        test('Post / router returns new robot', async () => {
            process.env.DB_NAME = 'robots-test';
            const newRobot = {
                characteristics: {
                    created_at: '1970-01-06T00:07:14.232Z',
                    resistance: 2,
                    speed: 7,
                },
                image: 'https://media.istockphoto.com/photos/ai-robot-thinking-picture-id1029035836?k=20&m=1029035836&s=612x612&w=0&h=uLxGJ9Y-Q6dP840LmH6jIt0ns7az5_4uke98dn5833A=',
                name: 'TestName-2',
            };
            const response = await request(app)
                .post(`/robots`)
                .set('Accept', 'application/json')
                .send(newRobot);
            robotId = response.body._id;
            expect(response.status).toBe(200);
            expect(response.body.name).toEqual(newRobot.name);
            expect(response.body.image).toEqual(newRobot.image);
            expect(response.body.characteristics.speed).toEqual(
                newRobot.characteristics.speed
            );
            expect(response.body.characteristics.resistance).toEqual(
                newRobot.characteristics.resistance
            );
        });
        test('Patch /:id router returns new robot', async () => {
            process.env.DB_NAME = 'robots-test';
            const newRobot = {
                name: 'TestName-2-patch',
            };
            const response = await request(app)
                .patch(`/robots/${robotId}`)
                .set('Accept', 'application/json')
                .send(newRobot);
            expect(response.status).toBe(200);
            expect(response.body.name).toEqual(newRobot.name);
        });
        test('Delete /:id router returns {}', async () => {
            process.env.DB_NAME = 'robots-test';
            const response = await request(app)
                .delete(`/robots/${robotId}`)
                .set('Accept', 'application/json');
            expect(response.status).toBe(200);
            expect(response.body).toEqual({});
        });
        test('Get /:id with a false id throws error', async () => {
            process.env.DB_NAME = 'robots-test';
            const response = await request(app)
                .get(`/robots/fakeId`)
                .set('Accept', 'application/json');
            expect(response.status).toBe(404);
        });
        test('Patch /:id with a false id throws error', async () => {
            process.env.DB_NAME = 'robots-test';
            const response = await request(app)
                .patch(`/robots/fakeId`)
                .set('Accept', 'application/json');
            expect(response.status).toBe(404);
        });
        test('Delete /:id with a false id throws error', async () => {
            process.env.DB_NAME = 'robots-test';
            const response = await request(app)
                .delete(`/robots/fakeId`)
                .set('Accept', 'application/json');
            expect(response.status).toBe(404);
        });
    });
});
