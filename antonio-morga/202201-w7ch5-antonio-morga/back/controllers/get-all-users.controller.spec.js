import { userCreator } from '../models/user.model.js';
import { mockUserList } from '../test-utils/test-users.js';
import { getAllUsers } from './get-all-users.controller.js';

jest.mock('../models/user.model.js');

describe('Given the function getAllUsers', () => {
    const User = { find: jest.fn() };
    const res = {};
    const next = jest.fn();
    beforeAll(async () => {
        res.json = jest.fn();
        userCreator.mockReturnValue(User);
        User.find.mockReturnValue({
            populate: jest.fn().mockReturnValue({
                populate: jest.fn().mockResolvedValue(mockUserList),
            }),
        });
    });
    describe('When calling it', () => {
        test('Then it should return an array of users', async () => {
            await getAllUsers('', res, next);
            expect(res.json).toHaveBeenCalled();
        });
        test('Or throw an error', async () => {
            User.find()
                .populate()
                .populate.mockRejectedValue(new Error('Could not get'));
            await getAllUsers('', res, next);
            expect(next).toHaveBeenCalled();
        });
    });
});
