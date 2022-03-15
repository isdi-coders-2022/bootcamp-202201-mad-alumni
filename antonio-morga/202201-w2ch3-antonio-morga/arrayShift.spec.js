import { myShift } from './arrayShift.js';

const arrayForTest = [1, 2, 3];

describe('Given the function myShift', () => {
    describe('When it receives the array [1, 2, 3]', () => {
        test('Then it should return [2, 3]', () => {
            expect(myShift(arrayForTest)).toHaveLength(arrayForTest.length - 1);
        });
    });
});
