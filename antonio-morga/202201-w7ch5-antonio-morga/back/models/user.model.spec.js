import { mongoConnect } from '../services/db';
import { userCreator } from './user.model';

describe('Given the function createUser', () => {
    describe('When calling it withour parameters', () => {
        test('Then it should return a model', async () => {
            await mongoConnect;
            const User = userCreator();
            await expect(User.collection.collectionName).toBe('users');
        });
    });
});
