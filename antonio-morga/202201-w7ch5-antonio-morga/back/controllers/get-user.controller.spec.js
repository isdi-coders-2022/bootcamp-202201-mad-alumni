import { userCreator } from '../models/user.model.js';
import { mockUserList } from '../test-utils/test-users.js';
import { getUser } from './get-user.controller.js';

jest.mock('../models/user.model.js');

describe('Given the function getUser', () => {
    const User = { findById: jest.fn() };
    const req = { params: {} };
    const res = {};
    const next = jest.fn();
    beforeAll(async () => {
        res.json = jest.fn();
        userCreator.mockReturnValue(User);
        User.findById.mockReturnValue({
            populate: jest.fn().mockReturnValue({
                populate: jest.fn().mockResolvedValue(mockUserList),
            }),
        });
        req.params.id = '12345';
    });
    describe('When calling it', () => {
        test('Then it should call res.json with a user object', async () => {
            await getUser(req, res, next);
            expect(res.json).toHaveBeenCalled();
        });
        test('Or throw an error', async () => {
            User.findById()
                .populate()
                .populate.mockRejectedValue(new Error('Could not get'));
            await getUser(req, res, next);
            expect(next).toHaveBeenCalled();
        });
    });
});
