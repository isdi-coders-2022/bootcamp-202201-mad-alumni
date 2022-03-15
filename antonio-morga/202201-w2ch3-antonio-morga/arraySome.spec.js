import { mySome } from './arraySome.js';

const arrayForTest = [1, 2, 3];
const iseven = (number) => number % 2 === 0;

describe('Given the function mySome', () => {
    describe('When it receives the array [1, 2, 3] and the conditon isEven', () => {
        test('Then it should return true', () => {
            expect(mySome(arrayForTest, iseven)).toBe(true);
        });
    });
});
