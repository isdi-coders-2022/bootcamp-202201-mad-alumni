import { mongoConnect, installUsers } from '../services/db.js';
import * as dotenv from 'dotenv';
dotenv.config();
import model from './data.js';

describe('first should check mongoConnect()', () => {
    test('should show my name DBNAME ', async () => {
        const connect = await mongoConnect();
        expect(connect.connections[0]).toHaveProperty('name', '');
    });

    test('should ', async () => {
        await mongoConnect();

        const { result } = await installUsers(model.users);
        expect(Array.isArray(result)).toBe(true);
        expect(result.length).toBe(model.users.length);
    });
});
