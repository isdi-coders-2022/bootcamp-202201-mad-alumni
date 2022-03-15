import { mongoConnect, installUsers } from '../services/db.js';
import * as dotenv from 'dotenv';
dotenv.config();
import { allUsersTest } from '../utils/model-data.js';

describe('first should check mongoConnect()', () => {
    test('should show my name DBNAME ', async () => {
        const connect = await mongoConnect();
        expect(connect.connections[0]).toHaveProperty('name', 'SOCIAL_TEST');
    });

    test('should ', async () => {
        await mongoConnect();

        const { result: mockUsers } = await installUsers(allUsersTest);
        expect(Array.isArray(mockUsers)).toBe(true);
        expect(mockUsers.length).toBe(allUsersTest.length);
    });
});
