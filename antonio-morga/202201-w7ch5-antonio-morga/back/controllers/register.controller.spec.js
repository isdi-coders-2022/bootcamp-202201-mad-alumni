import { userCreator } from '../models/user.model.js';
import { mockUser } from '../test-utils/test-users.js';
import { userRegister } from './register.controller.js';
import { createToken } from '../services/auth/auth.js';

jest.mock('../models/user.model.js');
jest.mock('../services/auth/auth.js');

describe('Given the function userRegister', () => {
    const User = { create: jest.fn() };
    const req = {};
    const res = {};
    const next = jest.fn();
    beforeAll(async () => {
        res.json = jest.fn();
        userCreator.mockReturnValue(User);
        createToken.mockReturnValue('1a2b3c4d5f');
    });
    describe('When calling it with correct params', () => {
        req.body = mockUser;
        User.create.mockResolvedValue({ _doc: mockUser });
        test('Then resp.json shuld be called', async () => {
            await userRegister(req, res, next);
            expect(res.json).toHaveBeenCalled();
        });
    });
    describe('When calling it with the wrong params', () => {
        test('Then it should call next', async () => {
            req.body = { ...mockUser, password: '' };
            User.create.mockRejectedValue(new Error('Invalid params'));
            await userRegister(req, res, next);
            expect(next).toHaveBeenCalled();
        });
    });
});
