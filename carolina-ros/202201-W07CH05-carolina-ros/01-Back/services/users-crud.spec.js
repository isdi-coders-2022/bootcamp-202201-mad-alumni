import { Error } from 'mongoose';
import { mongoConnect, mongoDisconnect } from './db.js';
import { userCreator } from '../model/user.model.js';

import * as crud from './users-crud.js';

describe('given a connection with a MongoDB', () => {
    describe('when a collection is defined and populated', () => {
        let initialCount;
        let first_id;
        let invalid_id;
        const User = userCreator();
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
        // test('should connect to the collection', async () => {
        //     expect(User).toBeTruthy();
        //     expect(User.mockCollection).toBe(mockCollection);
        // });

        describe('and try to get all the users', () => {
            test('should get all of them', async () => {
                const result = await crud.getAllUsers(User);
                expect(result.length).toBe(initialCount);
            });
        });

        describe('and try to get one user by id', () => {
            test('should find and get the user', async () => {
                const result = await crud.getFriends(first_id, User);
                expect(result).toHaveProperty('_id');
                expect(result.id).toBe(first_id);
                expect(result.name).toBe('Daniel');
            });
            test('should not find and get the user with invalid id', async () => {
                const result = await crud.getFriends(invalid_id, User);
                expect(result).toBe(null);
            });
            test('should not find and get the user with malformed id', async () => {
                await expect(
                    crud.getFriends('0000', User)
                ).rejects.toThrowError(Error.CastError);
            });
        });
        describe('and try to update a user', () => {
            test('should update the user if id is valid', async () => {
                const partialUser = {
                    age: 38,
                };
                const result = await crud.updateUser(
                    first_id,
                    partialUser,
                    User
                );
                expect(result.name).toBe('Daniel');
                expect(result.age).toBe(38);
            });
            test('should not update the user if id is not valid', async () => {
                const result = await crud.updateUser(invalid_id, {}, User);
                expect(result).toBe(null);
            });
        });
    });
});
