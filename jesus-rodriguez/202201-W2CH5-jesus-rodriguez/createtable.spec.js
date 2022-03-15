import { createNewArray } from './createtable';

describe('Give the function createtable', () => {
    test('should create a square array with the given dimension', () => {
        expect(createNewArray(5)).toEqual([
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
        ]);
    });
});
