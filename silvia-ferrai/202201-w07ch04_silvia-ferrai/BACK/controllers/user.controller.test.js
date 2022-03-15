import * as controller from './user.controller.js';
import '../models/user.models.js';
import * as crud from '../services/crud.js';

jest.mock('../models/user.models.js');
jest.mock('../services/crud.js');

describe('Given the User controller', () => {
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

    describe('When getAllUsers is triggered', () => {
        describe('And it works (promise is resolved', () => {
            beforeEach(() => {
                crud.getAllUsers.mockResolvedValue([{}]);
            });

            test('Then call json', async () => {
                await controller.getAllUsers(req, res, next);
                expect(res.json).toHaveBeenCalled();
            });
        });
    });

    describe('And it does not work (promise in rejected', () => {
        beforeEach(() => {
            crud.getAllUsers.mockRejectedValue(
                new Error('Get all Users not possible')
            );
        });

        test('Then call next', async () => {
            await controller.getAllUsers(req, res, next);
            expect(res.json).not.toHaveBeenCalled();
            expect(next).toHaveBeenCalled();
        });
    });
    describe('When getUser is triggered', () => {
        describe('And the id is found( promise resolved', () => {
            beforeEach(() => {
                req.params.id = '619516dd75bcdf9b77e6690c';
                crud.getUser.mockResolvedValue([]);
            });
            test('then call json', async () => {
                await controller.getUser(req, res, next);
                expect(res.json).toHaveBeenCalled();
            });
        });
    });

    describe('And the id is not found (promise reject)', () => {
        beforeEach(() => {
            req.params.id = '0000';
            crud.getUser.mockRejectedValue(new Error('The id has no be found'));
        });
        test('Then call next', async () => {
            await controller.getUser(req, res, next);
            expect(res.json).not.toHaveBeenCalled();
        });
    });

    describe('When update is triggered', () => {
        describe('And the document is update (promise resolved', () => {
            beforeEach(() => {
                crud.updateUser.mockResolvedValue([]);
            });
            test('Then call json', async () => {
                await controller.updateUser(req, res, next);
                expect(res.json).toHaveBeenCalled();
            });
        });
    });
    // describe('And the id or the partial are not found (promise reject)', () => {
    //     beforeEach(() => {
    //         req.params.id = '0000';
    //         req.body = { sex: 'hombre' };
    //         crud.updateUser.mockRejectedValue(
    //             new Error('The id has no be found')
    //         );
    //     });
    //     test('Then call next', async () => {
    //         await controller.updateUser(req, res, next);
    //         expect(res.json).not.toHaveBeenCalled();
    //     });
    // });
});
