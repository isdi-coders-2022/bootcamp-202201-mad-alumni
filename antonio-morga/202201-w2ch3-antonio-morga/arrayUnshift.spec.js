import { myUnshift } from './arrayUnshift.js';

const arrayForTest = [1, 2, 3];
const elementToUnshift = 4;

describe('Given the function myUnshift', () => {
    describe('When it receives the array [1, 2, 3] and element 4', () => {
        test('Then it should return [4, 2, 3]', () => {
            expect(myUnshift(arrayForTest, elementToUnshift)[0]).toBe(
                elementToUnshift
            );
        });
    });
});
