import * as controller from './login.controller.js';
import bcrypt from 'bcryptjs';
import { createToken } from '../../services/auth.js';
import { userCreator } from '../../model/user.model.js';

jest.mock('../../model/user.model.js');
jest.mock('bcryptjs');
jest.mock('../../services/auth.js');

describe('Given the login controller', () => {
    const User = { findOne: jest.fn() };
    let req;
    let res;
    // eslint-disable-next-line no-unused-vars
    let next;
    beforeEach(() => {
        req = { params: {} };
        res = {};
        res.send = jest.fn().mockReturnValue(res);
        res.json = jest.fn().mockReturnValue(res);
        res.status = jest.fn().mockReturnValue(res);
        next = jest.fn();
        userCreator.mockReturnValue(User);
    });

    describe('When loginUser is triggered', () => {
        describe('And there are not user name ', () => {
            test('Then call next', async () => {
                req.body = { name: 'Eva' };
                await controller.loginUser(req, res, next);
                expect(res.json).not.toHaveBeenCalled();
                expect(next).toHaveBeenCalled();
            });
        });
        describe('And there are not password', () => {
            test('Then call next ', async () => {
                req.body = { password: '1234' };
                await controller.loginUser(req, res, next);
                expect(res.json).not.toHaveBeenCalled();
                expect(next).toHaveBeenCalled();
            });
        });

        describe('And there are user name or password', () => {
            beforeEach(() => {
                req.body = { name: 'Daniel', password: '123' };
            });

            describe('And the user name is not found', () => {
                test('Then call next', async () => {
                    User.findOne.mockResolvedValue(null);
                    await controller.loginUser(req, res, next);
                    expect(next).toHaveBeenCalled();
                });
            });

            describe('And the password is no correct', () => {
                test('Then call next', async () => {
                    User.findOne.mockResolvedValue({});
                    bcrypt.compareSync.mockReturnValue(null);
                    await controller.loginUser(req, res, next);
                    expect(next).toHaveBeenCalled();
                });
            });

            describe('And the user name and password are ok', () => {
                test('Then call send', async () => {
                    const user = {
                        name: 'Daniel',
                        id: '123',
                    };
                    await User.findOne.mockResolvedValue(user);
                    bcrypt.compareSync.mockReturnValue(true);
                    createToken.mockReturnValue('mock_token');
                    await controller.loginUser(req, res, next);
                    expect(res.json).toHaveBeenCalledWith({
                        userName: 'Daniel',
                        id: '123',
                        token: 'mock_token',
                    });
                });
            });
        });
    });
});
