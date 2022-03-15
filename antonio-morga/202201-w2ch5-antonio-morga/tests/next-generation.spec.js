import { nextGen } from '../functions/next-generation.js';

const testGrid1 = {
    array: [
        [0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0],
    ],
};

const resultGrid1 = {
    array: [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 1, 1, 1, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
    ],
};

const testGrid2 = {
    array: [
        [1, 1, 0, 0, 0],
        [1, 1, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 1, 1],
        [0, 0, 0, 1, 1],
    ],
};

const resultGrid2 = {
    array: [
        [1, 1, 0, 0, 0],
        [1, 1, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 1, 1],
        [0, 0, 0, 1, 1],
    ],
};

const testGrid3 = {
    array: [
        [0, 1, 0, 0, 0],
        [0, 0, 1, 0, 0],
        [1, 1, 1, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
    ],
};

const resultGrid3 = {
    array: [
        [0, 0, 0, 0, 0],
        [1, 0, 1, 0, 0],
        [0, 1, 1, 0, 0],
        [0, 1, 0, 0, 0],
        [0, 0, 0, 0, 0],
    ],
};

describe('Given the function nextGen', () => {
    describe('When given the object testGrid1', () => {
        test('Then it should return the object resultGrid1', () => {
            expect(nextGen(testGrid1)).toEqual(resultGrid1);
        });
    });
    describe('When given the object testGrid2', () => {
        test('Then it should return the object resultGrid2', () => {
            expect(nextGen(testGrid2)).toEqual(resultGrid2);
        });
    });
    describe('When given the object testGrid3', () => {
        test('Then it should return the object resultGrid3', () => {
            expect(nextGen(testGrid3)).toEqual(resultGrid3);
        });
    });
});
