import * as controller from './getAllUsers.controller.js';
import '../../model/user.model.js';
import * as crud from '../../services/users-crud.js';

jest.mock('../../model/user.model.js', () => {
    return {
        userCreator: jest.fn().mockResolvedValue([{}]),
    };
});
jest.mock('../../services/users-crud.js');

describe('Given the getAllUsers controller', () => {
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
        describe('And it works (promise is resolved)', () => {
            beforeEach(() => {
                crud.getAllUsers.mockResolvedValue([]);
            });
            test('Then call json', async () => {
                await controller.getAllUsers(req, res, next);
                await expect(res.json).toHaveBeenCalled();
            });
        });
        describe('And it works with null(promise is resolved)', () => {
            beforeEach(() => {
                crud.getAllUsers.mockResolvedValue(null);
            });
            test('Then call json', async () => {
                await controller.getAllUsers(req, res, next);
                await expect(next).toHaveBeenCalled();
            });
        });
        describe('And it does not work (promise is rejected)', () => {
            beforeEach(() => {
                crud.getAllUsers.mockRejectedValue(
                    new Error('Get All Users not possible')
                );
            });
            test('Then call next', async () => {
                await controller.getAllUsers(req, res, next);
                expect(res.json).not.toHaveBeenCalled();
                expect(next).toHaveBeenCalled();
            });
        });
    });
});
