import { userCreator } from '../models/user.model.js';
import { mockUser } from '../test-utils/test-users.js';
import { getAllFiltered } from './get-all-filtered.controller.js';
import { validateToken } from '../services/auth/auth.js';

jest.mock('../models/user.model.js');
jest.mock('../services/auth/auth.js');

describe('Given the function getAllFiltered', () => {
    const User = { findById: jest.fn() };
    const req = { params: {}, get: jest.fn() };
    const res = {};
    const next = jest.fn();
    const mockToken =
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMjM3NjcwZGZkZjlhZDlhNWZjZDExYiIsImlhdCI6MTY0NjUwMTExM30.EeUzziYXaO_RKtnWGKnJqeXWSpCj-p2MIKkydkCbyO4';
    beforeAll(async () => {
        res.json = jest.fn();
        userCreator.mockReturnValue(User);
        User.findById.mockReturnValue({
            populate: jest.fn().mockReturnValue({
                populate: jest.fn().mockResolvedValue(mockUser),
            }),
        });
        validateToken.mockReturnValue({
            id: '1234',
        });
    });
    describe('When calling it with friends as params', () => {
        req.get.mockReturnValue(`bearer:${mockToken}`);
        test('Then it should return an array of friends of the user', async () => {
            req.params.filter = 'friends';
            await getAllFiltered(req, res, next);
            expect(res.json).toHaveBeenCalled();
        });
        test('Or throw an error', async () => {
            User.findById()
                .populate()
                .populate.mockRejectedValue(new Error('Could not get'));
            await getAllFiltered(req, res, next);
            expect(next).toHaveBeenCalled();
        });
    });
    describe('When calling it with enemies as params', () => {
        req.get.mockReturnValue(`bearer:${mockToken}`);
        test('Then it should return an array of enemies of the user', async () => {
            req.params.filter = 'enemies';
            await getAllFiltered(req, res, next);
            expect(res.json).toHaveBeenCalled();
        });
        test('Or throw an error', async () => {
            User.findById()
                .populate()
                .populate.mockRejectedValue(new Error('Could not get'));
            await getAllFiltered(req, res, next);
            expect(next).toHaveBeenCalled();
        });
    });
    describe('When calling it with bananas as params', () => {
        req.get.mockReturnValue(`bearer:${mockToken}`);
        test('Then it should throw an error', async () => {
            req.params.filter = 'bananas';
            await getAllFiltered(req, res, next);
            expect(next).toHaveBeenCalled();
        });
    });
});
