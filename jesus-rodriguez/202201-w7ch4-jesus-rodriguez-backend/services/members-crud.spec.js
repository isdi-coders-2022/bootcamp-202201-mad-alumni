import { mongoConnect } from './db.js';
import mongoose from 'mongoose';
import { User } from '../models/user.models.js';
import { allUsersTest } from '../utils/model-data.js';
import * as crud from '../services/members-crud.js';
import { installUsers } from '../services/db.js';

describe('given a connection with a MongoDB', () => {
    let initialCount;
    let first_id;
    let invalid_id;
    let firstName;
    beforeAll(async () => {
        await mongoConnect();
        const { result: mockUsers } = await installUsers(allUsersTest);
        firstName = mockUsers[0].name;
        initialCount = mockUsers.length;
        first_id = mockUsers[0].id;
        invalid_id = '621a1615266d76fe79fbb93a';
    });
    afterAll(async () => {
        await mongoose.disconnect();
    });
    describe('and try to get all the items', () => {
        test('should get all of them', async () => {
            const result = await crud.getAllUsers(allUsersTest);
            expect(result.length).toBe(initialCount);
        });
    });

    describe('and try to get one item by id', () => {
        test('should find and get the item', async () => {
            const result = await crud.getUser(first_id, User);
            expect(result).toHaveProperty('_id');
            expect(result.id).toBe(first_id);
            expect(result.name).toBe(firstName);
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

    describe('and try to UPDATE one item by id', () => {
        test('should update the item if id is valid', async () => {
            const partial = {
                name: 'PEPE',
            };
            const result = await crud.updateUser(first_id, partial, User);
            expect(result.name).toBe('PEPE');
        });
    });
});
