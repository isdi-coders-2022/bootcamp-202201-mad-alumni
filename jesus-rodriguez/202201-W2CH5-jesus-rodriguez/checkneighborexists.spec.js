import { checkNeighborExists } from './checkneighborexists.js';

describe('Give the function checkNeighborExists', () => {
    test('should ', () => {
        let coordinate = [0, 0];
        let arr = [
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
        ];
        expect(checkNeighborExists(coordinate, arr)).toEqual([
            [1, 1],
            [0, 1],
            [1, 0],
        ]);
    });
});
