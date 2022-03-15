import * as dotenv from 'dotenv';
import { mongoConnect, robotsConnect } from './db.js';

dotenv.config();

describe('given a connection with MongoDB', () => {
    test('then it should be possible to connect to our DB ', async () => {
        const connect = await mongoConnect();
        expect(connect).toBeTruthy();
        expect(connect.connections[0].name).toBe(process.env.TEST_DBNAME);
        connect.disconnect();
    });

    test('then should exist our Model ', async () => {
        const Robot = await robotsConnect();
        expect(Robot.db.name).toBe(process.env.TEST_DBNAME);
        expect(Robot.modelName).toBe('robots');
    });
});
