import {
    findAliveNeighbors,
    findEqualNeighbors,
} from '../functions/find-neighbors.js';

const aliveArray1 = [
    { row: 1, column: 2, isAlive: true, neighbors: 0 },
    { row: 2, column: 2, isAlive: true, neighbors: 0 },
    { row: 3, column: 2, isAlive: true, neighbors: 0 },
];

const aliveResult1 = [
    { column: 2, isAlive: true, neighbors: 1, row: 1 },
    { column: 2, isAlive: true, neighbors: 2, row: 2 },
    { column: 2, isAlive: true, neighbors: 1, row: 3 },
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

const aliveResult2 = [
    { column: 0, isAlive: true, neighbors: 3, row: 0 },
    { column: 1, isAlive: true, neighbors: 3, row: 0 },
    { column: 0, isAlive: true, neighbors: 3, row: 1 },
    { column: 1, isAlive: true, neighbors: 3, row: 1 },
    { column: 3, isAlive: true, neighbors: 3, row: 3 },
    { column: 4, isAlive: true, neighbors: 3, row: 3 },
    { column: 3, isAlive: true, neighbors: 3, row: 4 },
    { column: 4, isAlive: true, neighbors: 3, row: 4 },
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

const deadResult1 = [
    { column: 0, isAlive: false, neighbors: 0, row: 0 },
    { column: 1, isAlive: false, neighbors: 1, row: 0 },
    { column: 2, isAlive: false, neighbors: 1, row: 0 },
    { column: 3, isAlive: false, neighbors: 1, row: 0 },
    { column: 4, isAlive: false, neighbors: 0, row: 0 },
    { column: 0, isAlive: false, neighbors: 0, row: 1 },
    { column: 1, isAlive: false, neighbors: 2, row: 1 },
    { column: 3, isAlive: false, neighbors: 2, row: 1 },
    { column: 4, isAlive: false, neighbors: 0, row: 1 },
    { column: 0, isAlive: false, neighbors: 0, row: 2 },
    { column: 1, isAlive: false, neighbors: 3, row: 2 },
    { column: 3, isAlive: false, neighbors: 3, row: 2 },
    { column: 4, isAlive: false, neighbors: 0, row: 2 },
    { column: 0, isAlive: false, neighbors: 0, row: 3 },
    { column: 1, isAlive: false, neighbors: 2, row: 3 },
    { column: 3, isAlive: false, neighbors: 2, row: 3 },
    { column: 4, isAlive: false, neighbors: 0, row: 3 },
    { column: 0, isAlive: false, neighbors: 0, row: 4 },
    { column: 1, isAlive: false, neighbors: 1, row: 4 },
    { column: 2, isAlive: false, neighbors: 1, row: 4 },
    { column: 3, isAlive: false, neighbors: 1, row: 4 },
    { column: 4, isAlive: false, neighbors: 0, row: 4 },
];

describe('Given the function findEqualNeighbors', () => {
    describe('When passing aliveArray1', () => {
        test('then it should return aliveResult1', () => {
            expect(findEqualNeighbors(aliveArray1)).toEqual(aliveResult1);
        });
    });
});

describe('Given the function findEqualNeighbors', () => {
    describe('When passing aliveArray2', () => {
        test('then it should return aliveResult1', () => {
            expect(findEqualNeighbors(aliveArray2)).toEqual(aliveResult2);
        });
    });
});

describe('Given the function findAliveNeighbors', () => {
    describe('When passing deadArray1', () => {
        test('then it should return deadResult1', () => {
            expect(findAliveNeighbors(deadArray1, aliveArray1)).toEqual(
                deadResult1
            );
        });
    });
});
