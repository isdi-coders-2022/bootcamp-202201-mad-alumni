import { createGrid } from './functions.js';

describe('Given the function createGrid', () => {
    test('It should return a new array filled with zeros based on the rows and columns passed to the function as parameters', () => {
        // const newArray = [];
        expect(createGrid(5, 6)).toEqual([
            // newArray ===
            [
                [0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0],
            ],
        ]);
    });
});
