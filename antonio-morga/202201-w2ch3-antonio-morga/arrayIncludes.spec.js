import { myIncludes } from './arrayIncludes.js';

const arrayForTest = [1, 2, 3];
const elementForCheck = 2;

describe('Given the function myIncludes', () => {
    describe('When it receives the array [1, 2, 3] and the element is 2', () => {
        test('Then it should return true', () => {
            expect(myIncludes(arrayForTest, elementForCheck)).toBe(true);
        });
    });
});
