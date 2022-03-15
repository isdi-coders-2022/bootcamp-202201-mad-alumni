import { Cell } from './class-cell.js';

export const findAliveCells = (grid) => {
    const liveCellsArray = [];
    for (let rowPos = 0; rowPos < grid.length; rowPos += 1) {
        for (let colPos = 0; colPos < grid[rowPos].length; colPos += 1) {
            if (grid[rowPos][colPos])
                liveCellsArray.push(new Cell(rowPos, colPos, true));
        }
    }
    return liveCellsArray;
};

export const findDeadCells = (grid) => {
    const deadCellsArray = [];
    for (let rowPos = 0; rowPos < grid.length; rowPos += 1) {
        for (let colPos = 0; colPos < grid[rowPos].length; colPos += 1) {
            if (!grid[rowPos][colPos])
                deadCellsArray.push(new Cell(rowPos, colPos, false));
        }
    }
    return deadCellsArray;
};
