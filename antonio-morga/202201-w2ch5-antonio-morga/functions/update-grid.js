import { actOnAliveCells, actOnDeadCells } from './act-on-cells.js';

export const updateGrid = (aliveCellsArray, deadCellsArray, currentgrid) => {
    const grid = currentgrid;
    const updatedPostions = [];
    const positionsToUpdate = [
        ...actOnAliveCells(aliveCellsArray),
        ...actOnDeadCells(deadCellsArray),
    ];
    for (let i = 0; i < positionsToUpdate.length; i += 1) {
        if (positionsToUpdate[i].isAlive === true) {
            updatedPostions.push(positionsToUpdate[i]);
            updatedPostions[i].isAlive = false;
        } else {
            updatedPostions.push(positionsToUpdate[i]);
            updatedPostions[i].isAlive = true;
        }
    }
    updatedPostions.forEach((element) => {
        grid.array[element.row][element.column] = Number(element.isAlive);
    });
    aliveCellsArray.forEach((element) => {
        grid.array[element.row][element.column] = Number(element.isAlive);
    });
    return grid;
};
