import { mongoConnect, install } from './db.js';

describe('Given the function mongoConnect', () => {
    describe('When calling it', () => {
        test('Then a connection to aour database should be established', async () => {
            const connect = await mongoConnect();
            expect(connect).toBeTruthy();
            expect(connect.connections[0].name).toBe(process.env.TEST_DBNAME);
            connect.disconnect();
        });
    });
});

describe('Given the function install', () => {
    let connect;
    let installResponse;
    beforeAll(async () => {
        connect = await mongoConnect();
        installResponse = await install();
    });
    describe('When calling it', () => {
        test('Then our test db should have 4 users', async () => {
            await expect(await installResponse.acknowledged).toBe(true);
            connect.disconnect();
        });
    });
});
