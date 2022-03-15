import * as dotenv from 'dotenv';
dotenv.config();
import { mongoConnect, mongoDisconnect, installUsers } from './db.js';
import users from './user.data.js';

describe('given a connection with MongoDB', () => {
    afterEach(async () => {
        await mongoDisconnect();
    });

    test('then should be possible connect to our DB ', async () => {
        const connect = await mongoConnect();
        expect(connect).toBeTruthy();
        expect(connect.connections[0]).toHaveProperty('name', 'W07CH05-test');
    });

    test('then it should be created and populated', async () => {
        await mongoConnect();
        const { result } = await installUsers(users);
        // console.log(result);
        expect(result).toBeTruthy();
        expect(Array.isArray(result)).toBe(true);
        expect(result.length).toBe(users.users.length);
    });
});
