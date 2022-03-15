import { unshift } from './unshift.js';

describe('Given the unshift function', () => {
    describe('When passing a valid array', () => {
        const oldArray = [0, 1, 2, 3, 4, 5];
        const element1 = 'a';
        const element2 = 'b';
        const newArray = ['a', 'b', 0, 1, 2, 3, 4, 5];

        test('It should return the new array length', () => {
            expect(unshift(oldArray, element1, element2)).toEqual(8);
        });

        test('The old array should have the new elements added in front', () => {
            expect(oldArray).toEqual(newArray);
        });
    });
});
