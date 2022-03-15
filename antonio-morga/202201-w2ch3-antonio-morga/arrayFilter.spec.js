import { myFilter } from './arrayFilter.js';

const arrayForTest = [1, 2, 2];
const iseven = (number) => number % 2 === 0;

describe('Given the function myFilter', () => {
    describe('When it receives the array [1, 3, 3] and the condition isEven', () => {
        test('Then it should return [2, 2]', () => {
            expect(myFilter(arrayForTest, iseven)).toEqual([2, 2]);
        });
    });
});
