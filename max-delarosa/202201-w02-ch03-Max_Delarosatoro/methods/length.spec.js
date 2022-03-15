import { length } from './length.js';

describe('Given the length function', () => {
    describe('When an array is passed', () => {
        const testArray = [0, 1, 2, 3, 4, 5];

        test('Then it should return the array length', () => {
            expect(length(testArray)).toEqual(6);
        });
    });
});
