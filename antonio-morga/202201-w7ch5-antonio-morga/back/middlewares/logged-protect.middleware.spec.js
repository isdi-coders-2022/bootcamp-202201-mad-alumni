import { loggedProtect } from './logged-protect.middleware.js';
import { validateToken } from '../services/auth/auth.js';

jest.mock('../services/auth/auth.js');

describe('Given the middleware loggedProtect', () => {
    const req = { get: jest.fn() };
    const next = jest.fn();
    const mockToken =
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMjM3NjcwZGZkZjlhZDlhNWZjZDExYiIsImlhdCI6MTY0NjUwMTExM30.EeUzziYXaO_RKtnWGKnJqeXWSpCj-p2MIKkydkCbyO4';
    describe('When calling it with a valid token', () => {
        req.get.mockReturnValue(`bearer:${mockToken}`);
        validateToken.mockReturnValue({});
        test('Then it should call next without an error', () => {
            loggedProtect(req, '', next);
            expect(next).toHaveBeenCalledWith();
        });
    });
    describe('When calling it with an invalid token', () => {
        test('Then it should call next without an error', () => {
            req.get.mockReturnValue(`bearer:${mockToken}123`);
            validateToken.mockImplementation(() => {
                throw new Error('invalid token');
            });
            loggedProtect(req, '', next);
            expect(next).toHaveBeenNthCalledWith(2, Error('invalid token'));
        });
    });
    describe('When calling it without an invalid token', () => {
        test('Then it should call next without an error', () => {
            req.get.mockReturnValue(undefined);
            validateToken.mockImplementation(() => {
                throw new Error('invalid token');
            });
            loggedProtect(req, '', next);
            expect(next).toHaveBeenNthCalledWith(2, Error('invalid token'));
        });
    });
});
