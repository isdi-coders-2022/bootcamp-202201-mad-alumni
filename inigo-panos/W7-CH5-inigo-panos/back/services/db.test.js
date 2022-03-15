import * as dotenv from 'dotenv';
dotenv.config();
import {
    mongoConnect,
    mongoDisconnect,
    // installTasks,
    // installUsers,
} from './db.js';
// import data from './task.data.js';

describe('Al conectar a MongoDB', () => {
    afterEach(async () => {
        await mongoDisconnect();
    });

    test('Debería ser posible conectarse a la base de datos.', async () => {
        const connect = await mongoConnect();
        expect(connect).toBeTruthy();
        expect(connect.connections[0].name).toBe(
            process.env.NODE_ENV === 'test'
                ? process.env.DBNAMETEST
                : process.env.DBNAME
        );
    });
});
