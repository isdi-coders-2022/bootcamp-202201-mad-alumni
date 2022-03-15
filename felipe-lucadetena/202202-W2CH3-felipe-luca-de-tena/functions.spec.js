import { myPush } from './functions.js';
import { myEvery } from './functions.js';
import { myPop } from './functions.js';
import { myShift } from './functions.js';
import { myFind } from './functions.js';

describe('when element is pushed onto initial array', () => {
    test('Then it should return something', () => {
        const a = [1, 2, 3];
        const b = 4;

        const result = [1, 2, 3, 4];
        expect(myPush(a, b)).toEqual(result);
    });
});
describe('when all element in array are same', () => {
    test('should return true', () => {
        const a = [1, 2, 1, 1];
        const result = true;
        expect(myEvery(a)).toEqual(result);
    });
});
describe('removes last element', () => {
    test('Then it should return something', () => {
        const a = [1, 1, 1, 2];

        const result = [1, 1, 1];
        expect(myPop(a)).toEqual(result);
    });
});

describe('when all element in array are same', () => {
    test('Then it should return something', () => {
        const a = [2, 1, 1, 1];

        const result = [1, 1, 1];
        expect(myShift(a)).toEqual(result);
    });
});
describe('when all element in array are same', () => {
    test('Then it should return something', () => {
        const a = [1, 1, 2, 1];
        const b = 2;

        const result = 2;
        expect(myFind(a, b)).toEqual(result);
    });
});
