import { buildGrid } from './build-grid';

describe('When given the function to build grid', () => {
    describe('When it receive the parameter length', () => {
        test('It should return the grid', () => {
            expect(buildGrid(6)).toEqual([
                [0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0],
            ]);
        });
        test('It should return the Error', () => {
            expect(buildGrid(undefined)).toEqual('Error, Enter a number');
        });
    });
});
