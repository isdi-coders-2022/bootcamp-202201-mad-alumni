import * as controller from './users.controller.js';
// import bcrypt from 'bcryptjs';
// import { createToken } from '../services/auth.js';
import { User } from '../index.js';

jest.mock('../index.js');
// jest.mock('../index.js', () => ({
//     ...jest.requireActual('../index.js'),
//     User: jest.fn(),
// }));

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
                User.find.mockReturnValue({
                    populate: jest.fn().mockResolvedValue([]),
                });
            });
            test('Then call send', async () => {
                await controller.getAllUsers(req, res, next);
                expect(res.json).toHaveBeenCalled();
            });
        });
    });
});


