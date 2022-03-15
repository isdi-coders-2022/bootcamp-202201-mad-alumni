import dotenv from 'dotenv';
// import jsonwebtoken from 'jsonwebtoken';
// import { JsonWebTokenError } from 'jsonwebtoken';

import { createToken, verifyToken } from '../services/auth.js';
dotenv.config();

describe('Checks for token functions', () => {
    test('we should check that it generates a token for a registered user ', () => {
        const user = { name: 'Daniel', password: '1234' };
        const token = createToken(user);
        console.log(token);
        expect(token).toEqual(
            expect.stringContaining('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9')
        );
    });
    test('we verify that a previously generated token validates user ', () => {
        const user = { name: 'Daniel', password: '1234' };

        const token = createToken(user);
        const verify = verifyToken(token);
        console.log(verify);
        expect(verify).toHaveProperty('name', 'Daniel');
    });
    // test('should be an invalid token', async () => {
    //     expect.assertions(1);
    //     const token = jsonwebtoken.token({
    //         exp: 0,
    //     });

    //     try {
    //         await verifyToken(token);
    //     } catch (error) {
    //         expect(error).toEqual(new JsonWebTokenError('jwt expired'));
    //     }
    // });
});
