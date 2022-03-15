import * as controller from './getUser.controller.js';
import '../../model/user.model.js';
import * as crud from '../../services/users-crud.js';

jest.mock('../../model/user.model.js', () => {
    return {
        userCreator: jest.fn().mockResolvedValue({}),
    };
});
jest.mock('../../services/users-crud.js');

describe('Given the getUser controller', () => {
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

    describe('When  getFriends or getEnemies is triggered', () => {
        describe('And the id is found (promise resolved)', () => {
            beforeEach(() => {
                req.params.id = '6223417fdb98c4d9ccbd9987';
                crud.getFriends.mockResolvedValue([]);
            });
            test('Then call json', async () => {
                await controller.getFriends(req, res, next);
                expect(res.json).toHaveBeenCalled();
            });
            test('Then call json', async () => {
                await controller.getEnemies(req, res, next);
                expect(res.json).not.toHaveBeenCalled();
            });
        });
        describe('And the id is not found (promise rejected)', () => {
            beforeEach(() => {
                req.params.id = '0000';
                crud.getEnemies.mockRejectedValue(
                    new Error('The id has not be found')
                );
            });
            test('Then call next', async () => {
                await controller.getFriends(req, res, next);
                expect(res.json).toHaveBeenCalled();
                expect(next).not.toHaveBeenCalled();
            });
            test('Then call next', async () => {
                await controller.getEnemies(req, res, next);
                expect(res.json).not.toHaveBeenCalled();
                expect(next).toHaveBeenCalled();
            });
        });
    });
});
