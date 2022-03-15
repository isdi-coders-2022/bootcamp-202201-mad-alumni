import dotenv from 'dotenv';
import { createToken, verifyToken } from '../services/auth.js';
dotenv.config();

describe('Checks for token functions', () => {
    test('we should check that it generates a token for a registered user ', () => {
        const user = { name: 'jesus', passwd: '12345' };
        const tokenHeader = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9';
        const token = createToken(user);
        console.log(token);
        expect(token).toEqual(expect.stringContaining(tokenHeader));
    });

    test('we verify that a previously generated token validates us ', () => {
        const user = { name: 'jesus', passwd: '12345' };
        const token = createToken(user);
        const verify = verifyToken(token);
        expect(verify).toHaveProperty('name', 'jesus');
    });
});
