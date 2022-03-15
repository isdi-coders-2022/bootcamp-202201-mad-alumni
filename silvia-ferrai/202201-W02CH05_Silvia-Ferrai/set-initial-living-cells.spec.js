import { setInitialLivingCells } from './set-initial-living-cells.js';

describe('When given the function to build grid', () => {
    describe('When it receive the parameter length', () => {
        test('It should return the grid', () => {
            let enter = [
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0],
            ];
            let coordinator = [
                [1, 2],
                [2, 2],
                [3, 2],
            ];
            let exit = [
                [0, 0, 0, 0, 0],
                [0, 0, 1, 0, 0],
                [0, 0, 1, 0, 0],
                [0, 0, 1, 0, 0],
                [0, 0, 0, 0, 0],
            ];

            expect(setInitialLivingCells(enter, coordinator)).toEqual(exit);
        });
    });
});
