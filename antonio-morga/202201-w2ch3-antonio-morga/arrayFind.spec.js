import { myFind } from './arrayFind.js';

const arrayForTest = [1, 2, 3];
const iseven = (number) => number % 2 === 0;

describe('Given the function myFind', () => {
    describe('When it receives the array [1, 2, 3] and the condition isEven', () => {
        test('Then it should return 3', () => {
            expect(myFind(arrayForTest, iseven)).toBe(2);
        });
    });
});
