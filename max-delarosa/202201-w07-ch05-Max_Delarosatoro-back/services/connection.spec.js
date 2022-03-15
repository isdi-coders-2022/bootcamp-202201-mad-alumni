import { mongoConnect } from './connection';

let dbObject;
describe('Given the mongoConnect function', () => {
    afterAll((done) => {
        dbObject.connection.close();
        done();
    });
    describe('When called', () => {
        test('It must return a connection to the database object', async () => {
            dbObject = await mongoConnect();
            expect(dbObject.connections).toBeTruthy();
        });
    });
});
