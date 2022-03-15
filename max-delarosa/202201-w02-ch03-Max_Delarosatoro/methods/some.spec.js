import { some } from './some.js';

describe('Given the some function', () => {
    describe('When passing a valid array and condition', () => {
        const array = [1, 2, 3, 4, 5];
        const even = (element) => element % 2 === 0;

        test('It should return true if at least one element in the array meets the condition', () => {
            expect(some(array, even)).toEqual(true);
        });

        const numberFive = (element) => element === 5;

        test('It should return true if at least one element in the array meets the condition', () => {
            expect(some(array, numberFive)).toEqual(true);
        });
    });
});
