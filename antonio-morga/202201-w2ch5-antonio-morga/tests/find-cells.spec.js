import { findAliveCells, findDeadCells } from '../functions/find-cells.js';

const testgrid1 = [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0],
];

const aliveArray1 = [
    { row: 1, column: 2, isAlive: true, neighbors: 0 },
    { row: 2, column: 2, isAlive: true, neighbors: 0 },
    { row: 3, column: 2, isAlive: true, neighbors: 0 },
];

const testgrid2 = [
    [1, 1, 0, 0, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 1, 1],
    [0, 0, 0, 1, 1],
];

const aliveArray2 = [
    { row: 0, column: 0, isAlive: true, neighbors: 0 },
    { row: 0, column: 1, isAlive: true, neighbors: 0 },
    { row: 1, column: 0, isAlive: true, neighbors: 0 },
    { row: 1, column: 1, isAlive: true, neighbors: 0 },
    { row: 3, column: 3, isAlive: true, neighbors: 0 },
    { row: 3, column: 4, isAlive: true, neighbors: 0 },
    { row: 4, column: 3, isAlive: true, neighbors: 0 },
    { row: 4, column: 4, isAlive: true, neighbors: 0 },
];

const deadArray1 = [
    { row: 0, column: 0, isAlive: false, neighbors: 0 },
    { row: 0, column: 1, isAlive: false, neighbors: 0 },
    { row: 0, column: 2, isAlive: false, neighbors: 0 },
    { row: 0, column: 3, isAlive: false, neighbors: 0 },
    { row: 0, column: 4, isAlive: false, neighbors: 0 },
    { row: 1, column: 0, isAlive: false, neighbors: 0 },
    { row: 1, column: 1, isAlive: false, neighbors: 0 },
    { row: 1, column: 3, isAlive: false, neighbors: 0 },
    { row: 1, column: 4, isAlive: false, neighbors: 0 },
    { row: 2, column: 0, isAlive: false, neighbors: 0 },
    { row: 2, column: 1, isAlive: false, neighbors: 0 },
    { row: 2, column: 3, isAlive: false, neighbors: 0 },
    { row: 2, column: 4, isAlive: false, neighbors: 0 },
    { row: 3, column: 0, isAlive: false, neighbors: 0 },
    { row: 3, column: 1, isAlive: false, neighbors: 0 },
    { row: 3, column: 3, isAlive: false, neighbors: 0 },
    { row: 3, column: 4, isAlive: false, neighbors: 0 },
    { row: 4, column: 0, isAlive: false, neighbors: 0 },
    { row: 4, column: 1, isAlive: false, neighbors: 0 },
    { row: 4, column: 2, isAlive: false, neighbors: 0 },
    { row: 4, column: 3, isAlive: false, neighbors: 0 },
    { row: 4, column: 4, isAlive: false, neighbors: 0 },
];

describe('Given the function findAliveCells', () => {
    describe('When it receives the grid testgrid1', () => {
        test('then it should return resultArray1', () => {
            expect(findAliveCells(testgrid1)).toEqual(aliveArray1);
        });
    });
});

describe('Given the function findAliveCells', () => {
    describe('When it receives the grid testgrid2', () => {
        test('then it should return resultArray2', () => {
            expect(findAliveCells(testgrid2)).toEqual(aliveArray2);
        });
    });
});

describe('Given the function findDeadCells', () => {
    describe('When it receives the grid testgrid2', () => {
        test('then it should return resultArray2', () => {
            expect(findDeadCells(testgrid1)).toEqual(deadArray1);
        });
    });
});
