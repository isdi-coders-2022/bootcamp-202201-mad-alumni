import { createGrid } from './game-life.js';

describe('When given the function to build grid', () => {
    describe('When it receive the parameter length', () => {
        test('It should return the grid', () => {
            let enter = [
                [0, 0, 0, 0, 0],
                [0, 0, 1, 0, 0],
                [0, 0, 1, 0, 0],
                [0, 0, 1, 0, 0],
                [0, 0, 0, 0, 0],
            ];
            let exit = [
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0],
                [0, 1, 1, 1, 0],
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0],
            ];

            expect(createGrid(enter)).toEqual(exit);
        });
        test('It should return the grid', () => {
            let enter = [
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0],
                [0, 1, 1, 1, 0],
                [0, 0, 0, 1, 0],
                [0, 0, 0, 0, 0],
            ];
            let exit = [
                [0, 0, 0, 0, 0],
                [0, 0, 1, 0, 0],
                [0, 0, 1, 1, 0],
                [0, 0, 0, 1, 0],
                [0, 0, 0, 0, 0],
            ];

            expect(createGrid(enter)).toEqual(exit);
        });
    });
});
