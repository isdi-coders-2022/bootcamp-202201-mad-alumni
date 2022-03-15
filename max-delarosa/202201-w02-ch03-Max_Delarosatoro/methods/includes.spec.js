import { includes } from './includes';

describe('Given the includes function', () => {
    describe('When given a valid array and check value', () => {
        const array = [1, 2, 3, 4, 5];
        const checkValue = 3;
        test('It should return true if the value is found in the array', () => {
            expect(includes(array, checkValue)).toEqual(true);
        });

        const checkValue2 = 6;
        test('It should return false if the value is not found in the array', () => {
            expect(includes(array, checkValue2)).toEqual(false);
        });
    });
});
