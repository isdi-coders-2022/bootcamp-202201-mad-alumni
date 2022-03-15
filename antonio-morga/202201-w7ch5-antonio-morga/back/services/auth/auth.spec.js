/* eslint-disable no-underscore-dangle */
import { mockUser } from '../../test-utils/test-users';
import { createToken, validateToken } from './auth.js';

describe('Given the function createToken', () => {
    describe('When calling it with a certain payload', () => {
        test('Then it should return a token string', () => {
            const token = createToken({ mockUser, _id: '123456' });
            expect(typeof token).toBe('string');
        });
    });
});

describe('Given the function createToken', () => {
    describe('When calling it with a valid token', () => {
        test('Then it should return the payload data', () => {
            const token = createToken({ mockUser, _id: '123456' });
            const payloadData = validateToken(token);
            expect(payloadData.id).toBe('123456');
        });
    });
});
