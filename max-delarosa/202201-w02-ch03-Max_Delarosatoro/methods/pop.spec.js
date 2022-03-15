import { pop } from './pop.js';
import { length } from './length.js';

describe('Given the pop function', () => {
    describe('When you pass it a valid array', () => {
        const oldArray = [0, 1, 2, 3, 4, 5];
        const oldArrayLength = length(oldArray);

        test('It should return the last element', () => {
            expect(pop(oldArray)).toEqual(5);
        });

        test('Its length should be one less', () => {
            expect(length(oldArray)).toEqual(oldArrayLength - 1);
        });
    });
});
