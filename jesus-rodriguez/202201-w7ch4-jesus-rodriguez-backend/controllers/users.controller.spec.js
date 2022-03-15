import {
    getAllUsers,
    getUser,
    login,
    registerUser,
    updateUser,
    deleteUser,
} from '../controllers/users.controller.js';
import bcrypt from 'bcryptjs';
import { createToken } from '../services/auth.js';
import { User } from '../models/user.models.js';
import * as crud from '../services/members-crud.js';
jest.mock('bcryptjs');
jest.mock('../services/members-crud.js');
jest.mock('../models/user.models.js');
jest.mock('../services/auth.js');

describe('Given users.controllers', () => {
    let req;
    let res;
    let next;
    beforeEach(() => {
        req = { params: {} };
        res = {};
        res.json = jest.fn().mockReturnValue(res);
        res.status = jest.fn().mockReturnValue(res);
        next = jest.fn();
    });

    describe('Testing getUser()', () => {
        beforeEach(() => {
            crud.getUser.mockResolvedValue([
                {
                    _id: '622244c0a0f4b4162d2803d5',
                    name: 'JESUS',
                    friends: ['62224970a84a6c4d94c4c28d'],
                    enemies: [],
                },
            ]);
        });

        test('Then call json', async () => {
            await getUser(req, res, next);
            expect(res.json).toHaveBeenCalled();
        });
    });

    describe('Testing getAllUsers ', () => {
        beforeEach(() => {
            crud.getAllUsers.mockResolvedValue([{}]);
        });

        test('Check call getAllUsers', async () => {
            await getAllUsers(req, res, next);
            expect(res.json).toHaveBeenCalled();
        });
    });

    describe('Testing Login', () => {
        describe('When loginUser is triggered', () => {
            describe('And there are not user name ', () => {
                test('Then call next', async () => {
                    req.body = { name: 'Jesus' };
                    await login(req, res, next);
                    expect(res.json).not.toHaveBeenCalled();
                    expect(next).toHaveBeenCalled();
                });
            });
            describe('And there are not password', () => {
                test('Then call next ', async () => {
                    req.body = { passwd: '1234' };
                    await login(req, res, next);
                    expect(res.json).not.toHaveBeenCalled();
                    expect(next).toHaveBeenCalled();
                });
            });

            describe('And there are user name or password', () => {
                beforeEach(() => {
                    req.body = { name: 'Jesus', passwd: '123' };
                });

                describe('And the user name is not found', () => {
                    test('Then call next', async () => {
                        User.findOne.mockResolvedValue(null);
                        await login(req, res, next);
                        expect(next).toHaveBeenCalled();
                    });
                });

                describe('And the password is no correct', () => {
                    test('Then call next', async () => {
                        User.findOne.mockResolvedValue({});
                        bcrypt.compareSync.mockReturnValue(false);
                        await login(req, res, next);
                        expect(next).toHaveBeenCalled();
                    });
                });

                describe('And the user name and password are ok', () => {
                    test('Then call send', async () => {
                        const userMock = {
                            name: 'Jesus',
                            id: '123',
                            passwd: '12345',
                            friends: [],
                            enemies: [],
                            image: 'imageString',
                        };
                        req.body = userMock;
                        User.findOne.mockResolvedValue(userMock);
                        bcrypt.compareSync.mockReturnValue(true);
                        createToken.mockReturnValue('mock_token');
                        await login(req, res, next);
                        await expect(res.json).toHaveBeenCalledWith({
                            userName: 'Jesus',
                            id: '123',
                            token: 'mock_token',
                            friends: [],
                            enemies: [],
                            image: 'imageString',
                        });
                    });
                });
            });
        });
    });
    describe('Testing RegisterUsers', () => {
        describe('And it works (promise is resolved)', () => {
            beforeEach(() => {
                req.body = { name: 'Jesus', passwd: '1234' };
                bcrypt.hashSync.mockResolvedValue('encrypted1234');
                User.mockReturnValue({
                    name: 'Jesus',
                    passwd: 'encrypted1234',
                    id: 1,
                });
            });
            test('Then call json', async () => {
                const userMock = {
                    name: 'Jesus',
                    passwd: '12345',
                };
                User.create.mockResolvedValue(userMock);
                await registerUser(req, res, next);
                await expect(res.json).toHaveBeenCalledWith({
                    name: 'Jesus',
                    passwd: '12345',
                });
            });
        });
    });

    describe('Testing UpdateUser()', () => {
        beforeEach(() => {
            crud.updateUser.mockResolvedValue([
                {
                    _id: '622244c0a0f4b4162d2803d5',
                    name: 'Pepe',
                },
            ]);
        });

        test('Then call json', async () => {
            await updateUser(req, res, next);
            expect(res.json).toHaveBeenCalled();
        });
    });

    describe('Testing DeleteUser()', () => {
        beforeEach(() => {
            crud.deleteUser.mockResolvedValue([
                {
                    _id: '622244c0a0f4b4162d2803d5',
                    name: 'Pepe',
                },
            ]);
        });

        test('Then call json', async () => {
            await deleteUser(req, res, next);
            expect(res.json).toHaveBeenCalled();
        });
    });
});
