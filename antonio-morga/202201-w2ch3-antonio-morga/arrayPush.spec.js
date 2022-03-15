import { myPush } from './arrayPush.js';

const arrayForTest = [1, 2, 3];
const elementToPush = 4;

describe('Given the function myPush', () => {
    describe('When it receives the array [1, 2, 3] and the element 4', () => {
        test('Then it should return [1, 2, 3, 4]', () => {
            myPush(arrayForTest, elementToPush);
            expect(arrayForTest[arrayForTest.length - 1]).toBe(elementToPush);
        });
    });
});
