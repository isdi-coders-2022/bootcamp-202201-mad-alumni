import { findIndex } from './findIndex';

describe('Given the findIndex function', () => {
    describe('When passed a valid array and conditional function', () => {
        const array = [1, 2, 3, 4, 5];
        const conditionalFunction = (element) => element === 3;
        const expectedIndex = 2;

        test('It should return the index of the first item that satisfies the condition', () => {
            expect(findIndex(array, conditionalFunction)).toEqual(
                expectedIndex
            );
        });

        const conditionalFunction2 = (element) => element === 6;

        test('It should return the index of the first item that satisfies the condition', () => {
            expect(findIndex(array, conditionalFunction2)).toEqual(-1);
        });
    });
});
