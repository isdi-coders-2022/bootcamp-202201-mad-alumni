import { shift } from './shift.js';

describe('When given the shift function', () => {
    describe('When passing a valid array', () => {
        const oldArray = [0, 1, 2, 3, 4, 5];
        const newArray = [1, 2, 3, 4, 5];

        test('It should return the first element from the array', () => {
            expect(shift(oldArray)).toEqual(0);
        });

        test('The old array should not have the removed element', () => {
            expect(oldArray).toEqual(newArray);
        });
    });
});
