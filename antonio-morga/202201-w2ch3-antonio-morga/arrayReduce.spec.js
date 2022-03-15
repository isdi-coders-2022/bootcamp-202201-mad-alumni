import { myReduce } from './arrayReduce.js';

const arrayForTest = [1, 2, 3];
const sumOfNumbers = (firstNumber, secondNumber) => firstNumber + secondNumber;

describe('Given the function myReduce', () => {
    describe('When it receives the array [1, 2, 3] and the function sumOfNumbers', () => {
        test('Then it should return 6', () => {
            expect(myReduce(arrayForTest, sumOfNumbers)).toBe(6);
        });
    });
});
