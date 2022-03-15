import { myMap } from './arrayMap.js';

const arrayForTest = [1, 2, 3];
const timesFour = (number) => number * 4;

describe('Given the function myMap', () => {
    describe('When it receives the array [1, 2, 3] and function timesFour', () => {
        test('Then it should return [4, 8, 12]', () => {
            expect(myMap(arrayForTest, timesFour)).toEqual([4, 8, 12]);
        });
    });
});
