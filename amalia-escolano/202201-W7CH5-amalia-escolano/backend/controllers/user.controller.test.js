import * as controller from './user.controller.js';
import { User } from '../models/user.model.js';
import { createToken } from '../services/auth.js';
import bcrypt from 'bcryptjs';

jest.mock('../models/user.model.js');
jest.mock('bcryptjs');
jest.mock('../services/auth.js');

describe('Given the user controller', () => {
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

    describe('Given the user controller', () => {
        describe('And it not works (promise is rejected)', () => {
            beforeEach(() => {
                User.find.mockImplementation(() => {
                    throw new Error('Get All Users not possible');
                });
            });
            test('Then call next', async () => {
                await controller.getAllUsers(req, res, next);
                expect(next).toHaveBeenCalled();
            });
        });

        describe('When getAllUsers is triggered', () => {
            beforeEach(() => {
                User.find.mockReturnValue({
                    populate: jest.fn().mockResolvedValue([]),
                });
            });
            test('Then call send', async () => {
                await controller.getAllUsers(req, res, next);
                expect(res.json).toHaveBeenCalled();
            });

            test('Then call send', async () => {
                await controller.getUser(req, res, next);
                expect(res.json).toHaveBeenCalled();
            });
        });

        describe('And it not works (promise is rejected)', () => {
            beforeEach(() => {
                User.findOne.mockImplementation(() => {
                    throw new Error('Get All Users not possible');
                });
            });
            test('Then call next', async () => {
                await controller.getUser(req, res, next);
                expect(next).toHaveBeenCalled();
            });
        });

        describe('When User functions is triggered', () => {
            test('Then call send', async () => {
                await controller.insertUser(req, res, next);
                expect(next).toHaveBeenCalled();
                expect(res.json).toBeTruthy();
            });
        });

        describe('And it works (promise is resolved)', () => {
            beforeEach(() => {
                req.body = { name: 'Eva', passwd: '12345' };
                bcrypt.hashSync.mockResolvedValue('encrypted1234');
                User.create.mockReturnValue({
                    name: 'Eva',
                    passwd: 'encrypted1234',
                    id: 1,
                });
                createToken.mockReturnValue('mock_token');
            });
            test('Then call json', async () => {
                await controller.insertUser(req, res, next);
                expect(res.json).toBeTruthy();
            });
        });

        describe('When updateUser function is called', () => {
            test('Then call send', async () => {
                await controller.updateUser(req, res, next);
                expect(res.json).toBeTruthy();
            });
        });
    });
});
