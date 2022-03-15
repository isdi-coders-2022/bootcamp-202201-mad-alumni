import { checkColumns, checkRows, checkDiagonal } from './check-directions.js';

export const findEqualNeighbors = (array) => {
    const cellsAndNeighbors = [...array];
    for (let i = 0; i < cellsAndNeighbors.length; i += 1) {
        for (let j = 0; j < cellsAndNeighbors.length; j += 1) {
            if (
                i < j &&
                checkRows(cellsAndNeighbors[i], cellsAndNeighbors[j])
            ) {
                cellsAndNeighbors[i].neighbors += 1;
                cellsAndNeighbors[j].neighbors += 1;
            }
            if (
                i < j &&
                checkColumns(cellsAndNeighbors[i], cellsAndNeighbors[j])
            ) {
                cellsAndNeighbors[i].neighbors += 1;
                cellsAndNeighbors[j].neighbors += 1;
            }
            if (
                i < j &&
                checkDiagonal(cellsAndNeighbors[i], cellsAndNeighbors[j])
            ) {
                cellsAndNeighbors[i].neighbors += 1;
                cellsAndNeighbors[j].neighbors += 1;
            }
        }
    }
    return cellsAndNeighbors;
};

export const findAliveNeighbors = (deadCells, livingCells) => {
    const livingCellsArray = [...livingCells];
    const deadCellsArray = [...deadCells];
    for (let i = 0; i < deadCells.length; i += 1) {
        for (let j = 0; j < livingCells.length; j += 1) {
            if (checkRows(deadCellsArray[i], livingCellsArray[j])) {
                deadCellsArray[i].neighbors += 1;
            }
            if (checkColumns(deadCellsArray[i], livingCellsArray[j])) {
                deadCellsArray[i].neighbors += 1;
            }
            if (checkDiagonal(deadCellsArray[i], livingCellsArray[j])) {
                deadCellsArray[i].neighbors += 1;
            }
        }
    }
    return deadCellsArray;
};
