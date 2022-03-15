import { mongoConnect, mongoDisconnect } from '../services/db.js';
import { User } from '../models/user.models.js';
import data from './dataTest.js';
import * as crud from '../services/crud.js';

describe('given a connection with a MongoDB', () => {
    let initialCount;
    let first_id;
    let invalid_id;
    beforeAll(async () => {
        await mongoConnect();
        const mockCollection = await User.find({});
        initialCount = mockCollection.length;
        first_id = mockCollection[0].id;
        invalid_id = '621a1603366d76fe79fbb93a';
    });
    afterAll(async () => {
        await mongoDisconnect();
    });
    describe('and try to get all the items', () => {
        test('should get all of them', async () => {
            const result = await crud.getAllUsers(data);
            expect(result.length).toBe(initialCount);
        });
    });

    describe('and try to get one item by id', () => {
        test('should find and get the item', async () => {
            const result = await crud.getUser(first_id, User);
            expect(result).toHaveProperty('_id');
            expect(result.id).toBe(first_id);
            expect(result.name).toBe('Carlos');
        });
    });
    test('should not find and get the item with invalid id', async () => {
        const result = await crud.getUser(invalid_id, User);
        expect(result).toBe(null);
    });
    test('should not find and get the item with malformed id', async () => {
        await expect(crud.getUser('0000', User)).rejects.toThrowError(
            Error.CastError
        );
    });

    describe('and try to update one item by id', () => {
        test('should update the item if id is valid', async () => {
            const partial = {
                sex: 'mujer',
            };
            const result = await crud.updateUser(first_id, partial, User);
            expect(result.name).toBe('Carlos');
            expect(result.sex).toBe('mujer');
        });
    });
});
