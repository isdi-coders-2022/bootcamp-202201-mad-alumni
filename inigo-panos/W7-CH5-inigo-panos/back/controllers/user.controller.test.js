import * as controller from './users.controller.js';
// import bcrypt from 'bcryptjs';
// import { createToken } from '../services/auth.js';
import { User } from '../models/user.model.js';
import users from '../services/users.data.js';

jest.mock('../models/user.model.js');

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

    describe('When getAllUsers is triggered', () => {
        describe('And it works (promise is resolved)', () => {
            beforeEach(() => {
                users;
            });
            test('Then the call is sent', async () => {
                await controller.getAllUsers(req, res, next);
                expect(res.json).toHaveBeenCalled();
            });
        });

        // describe('And it does not work (promise is unresolved)', () => {
        //     beforeEach(() => {
        //         User.find = jest.fn().mockRejectedValue(new Error('Error 404'));
        //     });

        //     test('Then next is called', async () => {
        //         await controller.getAllUsers(req, res, next);
        //         expect(res.json).not.toHaveBeenCalled();
        //         expect(next).toHaveBeenCalled();
        //     });
        // });
    });
});
