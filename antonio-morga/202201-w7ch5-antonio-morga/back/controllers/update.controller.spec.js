import bcrypt from 'bcryptjs';
import { userCreator } from '../models/user.model.js';
import { mockUser } from '../test-utils/test-users.js';
import { userUpdate } from './update.controller.js';

jest.mock('../models/user.model.js');
jest.mock('bcryptjs');

describe('Given the function userLogin', () => {
    const User = { updateOne: jest.fn(), findById: jest.fn() };
    const req = { params: {} };
    const res = {};
    const next = jest.fn();
    beforeAll(async () => {
        res.json = jest.fn();
        userCreator.mockReturnValue(User);
        User.updateOne.mockResolvedValue({ acknowledged: true });
    });
    describe('When calling it with a correct password', () => {
        req.params.id = '1234';
        req.body = mockUser;
        User.findById.mockResolvedValueOnce({
            userName: 'pepe',
            birthDate: '2022-02-27',
            image: 'asjkflgsa',
        });
        User.findById.mockResolvedValue({
            userName: 'soler',
            birthDate: '2022-02-27',
            image: 'asjkflgsa',
        });
        test('Then it should return the user updated', async () => {
            bcrypt.compareSync.mockReturnValue(true);
            await userUpdate(req, res, next);
            expect(res.json).toHaveBeenCalled();
        });
    });
    describe('When calling it with incorrect password', () => {
        req.params.id = '1234';
        req.body = { userName: '', mockUser };
        test('Then it should return the user updated', async () => {
            bcrypt.compareSync.mockReturnValue(false);
            await userUpdate(req, res, next);
            expect(next).toHaveBeenCalled();
        });
    });
});
