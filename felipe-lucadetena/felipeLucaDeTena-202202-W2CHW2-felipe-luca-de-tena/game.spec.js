import { filterCoordinates, myGrid } from './game';

describe('testing function that creates new array', () => {
    test('should transform bidimensional array following the rules of game of life', () => {
        const testArray = [
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 1, 1, 1, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
        ];

        const result1 = [
            [0, 0, 0, 0, 0],
            [0, 0, 1, 0, 0],
            [0, 0, 1, 0, 0],
            [0, 0, 1, 0, 0],
            [0, 0, 0, 0, 0],
        ];
        expect(filterCoordinates(testArray)).toEqual(result1);
    });
});

describe('testing function that creates array', () => {
    test('if input is 2, should cerate bidimensional array with values 0', () => {
        const result2 = [
            [0, 0],
            [0, 0],
        ];
        expect(myGrid(2)).toEqual(result2);
    });
});
