import { myPop } from './arrayPop.js';

const arrayForTest = [1, 2, 3];
myPop(arrayForTest);

describe('Given the function myPop', () => {
    describe('When it receives the array [1, 2, 3]', () => {
        test('Then it should return [1, 2]', () => {
            expect(arrayForTest[arrayForTest.length]).toBe(undefined);
        });
    });
});
