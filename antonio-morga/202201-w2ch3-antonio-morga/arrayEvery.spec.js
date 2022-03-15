import { myEvery } from './arrayEvery.js';

const arrayForTest = [1, 2, 3];
const iseven = (number) => number % 2 === 0;

describe('Given the function myEvery', () => {
    describe('When it receives the array [3, 3, 3] and the condition isEven', () => {
        test('Then it should return false', () => {
            expect(myEvery(arrayForTest, iseven)).toBe(false);
        });
    });
});
