import {
    checkColumns,
    checkRows,
    checkDiagonal,
} from '../functions/check-directions.js';

const cell1 = {
    row: 2,
    column: 2,
    isAlive: true,
    neighbors: 0,
};

const cell2 = {
    row: 1,
    column: 2,
    isAlive: true,
    neighbors: 0,
};

const cell3 = {
    row: 1,
    column: 1,
    isAlive: true,
    neighbors: 0,
};

const cell4 = {
    row: 2,
    column: 2,
    isAlive: true,
    neighbors: 0,
};

describe('Given the functions checkColumns, checkRows and checkDiagonal', () => {
    describe('When passing the objects cell1 and cell2', () => {
        test('Then checkColumns should return true', () => {
            expect(checkColumns(cell1, cell2)).toBe(true);
        });
        test('Then checkRows should return false', () => {
            expect(checkRows(cell1, cell2)).toBe(false);
        });
        test('Then checkDiagonal should return false', () => {
            expect(checkDiagonal(cell1, cell2)).toBe(false);
        });
    });
});

describe('Given the functions checkColumns, checkRows and checkDiagonal', () => {
    describe('When passing the objects cell3 and cell4', () => {
        test('Then checkColumns should return false', () => {
            expect(checkColumns(cell3, cell4)).toBe(false);
        });
        test('Then checkRows should return false', () => {
            expect(checkRows(cell3, cell4)).toBe(false);
        });
        test('Then checkDiagonal should return true', () => {
            expect(checkDiagonal(cell3, cell4)).toBe(true);
        });
    });
});
