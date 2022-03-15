import { push } from './push.js';
import { length } from './length.js';

describe('Given the push function', () => {
    describe('When a valid array and a new element is passed', () => {
        const oldArray = [0, 1, 2, 3, 4, 5];
        const oldArrayLength = length(oldArray);
        const newElement = 6;
        const newArray = [0, 1, 2, 3, 4, 5, 6];

        test('Then it should return the new length of the array', () => {
            expect(push(oldArray, newElement)).toEqual(oldArrayLength + 1);
        });

        test('Then the old array should equal the new array', () => {
            expect(oldArray).toEqual(newArray);
        });
    });
});
