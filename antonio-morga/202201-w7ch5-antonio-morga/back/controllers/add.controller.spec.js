import { userCreator } from '../models/user.model.js';
import { addToList } from './add.controller.js';
import { validateToken } from '../services/auth/auth.js';

jest.mock('../models/user.model.js');
jest.mock('../services/auth/auth.js');

describe('Given the function addToList', () => {
    const User = { findById: jest.fn(), updateOne: jest.fn() };
    const req = { params: {} };
    const res = {};
    const next = jest.fn();
    beforeAll(async () => {
        req.body = {
            token: 'tomatoken',
            list: 'friends',
        };
        req.params.id = 'someuserid';
        res.json = jest.fn();
        userCreator.mockReturnValue(User);
        validateToken.mockReturnValue({ id: 'anotherid' });
    });
    describe('When calling it with proper params', () => {
        test('Then it should update one of the lists of the user', async () => {
            User.findById.mockResolvedValueOnce({ _id: '1a2b3c' });
            User.findById.mockResolvedValue({
                _id: '4d5e6f',
                userName: 'Pepito',
                birthDate: '2022-02-27',
                image: 'image',
                friends: [],
                enemies: [],
            });
            User.updateOne.mockResolvedValue({ acknowledged: true });
            await addToList(req, res, next);
            expect(res.json).toHaveBeenCalled();
        });
        test('Or throw an error when the user to add does not exist', async () => {
            User.findById.mockResolvedValue(null);
            await addToList(req, res, next);
            expect(next).toHaveBeenCalled();
        });
    });
});
