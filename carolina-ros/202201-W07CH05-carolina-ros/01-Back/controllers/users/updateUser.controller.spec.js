import * as controller from './updateUser.controller.js';
import '../../model/user.model.js';
import * as crud from '../../services/users-crud.js';

jest.mock('../../model/user.model.js', () => {
    return {
        userCreator: jest.fn().mockResolvedValue({}),
    };
});
jest.mock('../../services/users-crud.js');

describe('Given the updateUser controller', () => {
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

    describe('When  updateUser is triggered', () => {
        describe('And the document is updated (promise resolved)', () => {
            beforeEach(() => {
                crud.updateUser.mockResolvedValue([]);
            });
            test('Then call json', async () => {
                await controller.updateUser(req, res, next);
                expect(res.json).toHaveBeenCalled();
            });
        });
        // describe('And it does not work (promise is rejected)', () => {
        //     beforeEach(() => {
        //         crud.updateUser.mockRejectedValue(
        //             new Error('The id was not found')
        //         );
        //     });
        //     test('Then call next', async () => {
        //         await controller.updateUser(req, res, next);
        //         expect(res.json).toHaveBeenCalled();
        //         expect(next).toHaveBeenCalled();
        //     });
        // });
    });
});
