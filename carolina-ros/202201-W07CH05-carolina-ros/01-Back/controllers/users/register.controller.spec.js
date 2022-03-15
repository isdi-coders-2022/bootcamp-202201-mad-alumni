import * as controller from './register.controller.js';
import bcrypt from 'bcryptjs';
import { createToken } from '../../services/auth.js';
import { userCreator } from '../../model/user.model.js';

jest.mock('../../model/user.model.js');
jest.mock('bcryptjs');
jest.mock('../../services/auth.js');

describe('Given the register controller', () => {
    let req;
    let res;
    let next;

    const User = { create: jest.fn() };
    beforeEach(() => {
        userCreator.mockReturnValue(User);
        req = { params: {} };
        res = {};
        res.send = jest.fn().mockReturnValue(res);
        res.json = jest.fn().mockReturnValue(res);
        res.status = jest.fn().mockReturnValue(res);
        next = jest.fn();
    });
    describe('When registerUser is triggered', () => {
        describe('And it works (promise is resolved)', () => {
            test('Then call json', async () => {
                req.body = { name: 'Pepe', password: '1234' };
                bcrypt.hashSync.mockReturnValue('encrypted1234');
                User.create.mockReturnValue({
                    name: 'Pepe',
                    password: 'encrypted1234',
                    id: 5,
                });
                createToken.mockReturnValue('mock_token');

                await controller.registerUser(req, res, next);
                expect(res.json).toHaveBeenCalledWith({
                    token: 'mock_token',
                    userName: 'Pepe',
                    id: 5,
                });
            });
        });
        describe('And it does not works (promise is rejected)', () => {
            test('Then call next', async () => {
                req.body = { name: 'Pepe', password: '1234' };
                bcrypt.hashSync.mockReturnValue('encrypted1234');
                User.create.mockRejectedValue(new Error('Error adding user'));
                await controller.registerUser(req, res, next);
                expect(next).toHaveBeenCalled();
            });
        });
        describe('And there is no password', () => {
            test('Then call next', async () => {
                req.body = { password: undefined };
                User.create.mockResolvedValue({});
                bcrypt.hashSync.mockImplementation(() => {
                    throw new Error('Error, no password');
                });
                await controller.registerUser(req, res, next);
                expect(next).toHaveBeenCalled();
            });
        });
        describe('And there is no user name', () => {
            test('Then call next', async () => {
                User.create.mockResolvedValue(null);
                await controller.registerUser(req, res, next);
                expect(next).toHaveBeenCalled();
            });
        });
    });
});
