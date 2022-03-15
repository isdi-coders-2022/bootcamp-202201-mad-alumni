import * as dotenv from 'dotenv';
import { mongoDisconnect, mongoConnect, installUsers } from './db.js';
import data from './dataTest.js';
dotenv.config();

describe('given a connection with MongoDB ', () => {
    afterEach(async () => {
        await mongoDisconnect();
    });

    test('then should be possible connect to our DB', async () => {
        const connect = await mongoConnect();
        expect(connect).toBeTruthy();
        expect(connect.connections[0].name).toBe(
            process.env.NODE_ENV === 'test'
                ? process.env.TESTDBNAME
                : process.env.DBNAME
        );
    });

    test('then it should be created', async () => {
        await mongoConnect();
        const mockUsers = data.users;
        const { result } = await installUsers(mockUsers);
        expect(result).toBeTruthy();
        expect(result.length).toBe(data.users.length);
        expect(Array.isArray(result)).toBe(true);
    });
});
