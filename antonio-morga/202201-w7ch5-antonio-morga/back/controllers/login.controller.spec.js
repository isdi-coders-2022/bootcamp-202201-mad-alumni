import { ObjectId } from 'mongodb';
import bcrypt from 'bcryptjs';
import { userCreator } from '../models/user.model.js';
import { mockUser } from '../test-utils/test-users.js';
import { userLogin } from './login.controller.js';
import { createToken } from '../services/auth/auth.js';

jest.mock('../models/user.model.js');
jest.mock('../services/auth/auth.js');
jest.mock('bcryptjs');

describe('Given the function userLogin', () => {
    const User = { findOne: jest.fn() };
    const req = {};
    const res = {};
    const next = jest.fn();
    beforeAll(async () => {
        res.json = jest.fn();
        userCreator.mockReturnValue(User);
        createToken.mockReturnValue('1a2b3c4d5f');
    });
    describe('When the user is registered and the password is correct', () => {
        req.body = { userName: mockUser.userName, password: mockUser.password };
        User.findOne.mockResolvedValue({
            _doc: {
                _id: ObjectId('62234fbc1776919ae3984c70'),
                userName: 'pepito',
                password:
                    '$2a$10$bkpEjjw65nNTqmBq2aA8RuvgwAzcjtSY4FVcGcDFV1S1Abcy2WcH6',
                birthDate: '2022-02-27',
                image: 'asjkflgsa',
            },
        });
        test('Then resp.json shuld be called', async () => {
            bcrypt.compareSync.mockReturnValue(true);
            await userLogin(req, res, next);
            expect(res.json).toHaveBeenCalled();
        });
    });
    describe('When the user is registered but password is incorrect', () => {
        req.body = { ...mockUser, password: '' };
        User.findOne.mockResolvedValue({
            _doc: {
                _id: ObjectId('62234fbc1776919ae3984c70'),
                userName: 'pepito',
                password:
                    '$2a$10$bkpEjjw65nNTqmBq2aA8RuvgwAzcjtSY4FVcGcDFV1S1Abcy2WcH6',
                birthDate: '2022-02-27',
                image: 'asjkflgsa',
            },
        });
        test('Then it should call next', async () => {
            bcrypt.compareSync.mockReturnValue(false);
            await userLogin(req, res, next);
            expect(next).toHaveBeenCalled();
        });
    });
    describe('When the user is not registered', () => {
        test('Then it should call next', async () => {
            req.body = { ...mockUser, password: '' };
            User.findOne.mockResolvedValue(null);
            await userLogin(req, res, next);
            expect(next).toHaveBeenCalled();
        });
    });
});
