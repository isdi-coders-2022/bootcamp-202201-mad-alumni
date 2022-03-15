import { myIndexOf } from './arrayIndexOf.js';

const arrayForTest = [1, 2, 3];
const elementToFindIndex = 2;

describe('Given the function myIndexOf', () => {
    describe('When it receives the array [1, 2, 3] and element 2', () => {
        test('Then it should return 1', () => {
            expect(myIndexOf(arrayForTest, elementToFindIndex)).toEqual(1);
        });
    });
});
