import { allUsersTest, userTest } from '../utils/model-data.js';
import { User } from '../models/user.models.js';
import * as crud from './members-crud.js';
import { mongoConnect } from './db.js';
import { installUsers } from './db.js';

describe('Given the functions of our CRUD', () => {
    let insertResponse;
    let sampleId = '';
    let idToDelete = '';
    beforeAll(async () => {
        await mongoConnect();
        const { result: mockCollection } = await installUsers(allUsersTest);
        sampleId = mockCollection[0].id;
        idToDelete = mockCollection[3].id;
    });
    describe('Once a connection to the DB is established', () => {
        test('We should be able to connect to our collection', () => {
            expect(User.collection.name).toBe('users');
        });
        test('We should be able to insert a number of articles', () => {
            expect(insertResponse.acknowledged).toBe(true);
        });
    });
    describe('Once or collection is populated', () => {
        test('The function getAllUsers should fetch all users', async () => {
            await expect(await crud.getAllUsers(User)).toHaveLength(3);
        });
        test('The function getUser should one user  by id', async () => {
            await expect((await crud.getUser(sampleId, User)).name).toBe(
                'Pepe'
            );
        });

        test('The function updateUser should update the user of the given id', async () => {
            await expect(
                (
                    await crud.updateUser(sampleId, userTest, User)
                ).name
            ).toBe(userTest.name);
        });
        test('The function deleteUser should delete the user of the given id', async () => {
            await expect((await crud.deleteUser(idToDelete, User)).name).toBe(
                'Juan'
            );
        });
    });
});
