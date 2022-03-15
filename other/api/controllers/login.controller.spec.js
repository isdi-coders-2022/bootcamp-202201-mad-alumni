import * as controller from './login.controller.js';
import bcrypt from 'bcryptjs';
import { createToken } from '../services/auth.js';
import { userCreator } from '../models/user.model.js';

jest.mock('../models/user.model.js');
jest.mock('bcryptjs');
jest.mock('../services/auth.js');

describe('Given the tasks controller', () => {
    let req;
    let res;
    let next;
    beforeEach(() => {
        req = { params: {} };
        res = {};
        res.send = jest.fn().mockReturnValue(res);
        res.json = jest.fn().mockReturnValue(res);
        res.status = jest.fn().mockReturnValue(res);
        next = jest.fn();
    });

    describe('When login is triggered', () => {
        describe('And there are not user name ', () => {
            test('Then call next', async () => {
                req.body = { name: 'Pepe' };
                await controller.userLogin(req, res, next);
                expect(res.json).not.toHaveBeenCalled();
                expect(next).toHaveBeenCalled();
            });
        });
        describe('And there are not password', () => {
            test('Then call next ', async () => {
                req.body = { password: '1234' };
                await controller.userLogin(req, res, next);
                expect(res.json).not.toHaveBeenCalled();
                expect(next).toHaveBeenCalled();
            });
        });

        describe('And there are user name or password', () => {
            beforeEach(() => {
                req.body = { name: 'Pepe', password: '1234' };
            });

            describe('And the user name is not found', () => {
                test('Then call next', async () => {
                    await userCreator().findOne.mockResolvedValue(null);
                    await controller.userLogin(req, res, next);
                    expect(next).toHaveBeenCalled();
                });
            });

            describe('And the password is no correct', () => {
                test('Then call next', async () => {
                    await userCreator().findOne.mockResolvedValue({});
                    bcrypt.compareSync.mockReturnValue(null);
                    await controller.userLogin(req, res, next);
                    expect(next).toHaveBeenCalled();
                });
            });

            describe('And the user name and password are ok', () => {
                test('Then call send', async () => {
                    const user = {
                        name: 'Pepe',
                        id: '1',
                    };
                    await userCreator.findOne.mockResolvedValue(user);
                    bcrypt.compareSync.mockReturnValue(true);
                    createToken.mockReturnValue('mock_token');
                    await controller.userLogin(req, res, next);
                    expect(res.json).toHaveBeenCalledWith({
                        userName: 'Pepe',
                        id: '1',
                        token: 'mock_token',
                    });
                });
            });
        });
    });
});
