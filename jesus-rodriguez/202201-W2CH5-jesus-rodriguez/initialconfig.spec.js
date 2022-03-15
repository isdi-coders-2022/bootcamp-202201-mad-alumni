import { setInitialLiving } from './initialconfig.js';

describe('Give the function setInitialLiving', () => {
    const testArray = [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
    ];

    const initialCoordinates = [
        [1, 2],
        [2, 2],
        [3, 2],
    ];

    test('should set the initial array', () => {
        expect(setInitialLiving(testArray, initialCoordinates)).toEqual([
            [0, 0, 0, 0, 0],
            [0, 0, 1, 0, 0],
            [0, 0, 1, 0, 0],
            [0, 0, 1, 0, 0],
            [0, 0, 0, 0, 0],
        ]);
    });
});
