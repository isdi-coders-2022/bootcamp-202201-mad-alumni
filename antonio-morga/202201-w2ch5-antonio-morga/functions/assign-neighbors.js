import { findEqualNeighbors, findAliveNeighbors } from './find-neighbors.js';

export const obtainNeighbors = (livingCells, deadCells) => {
    let assignedNeighbors = [];
    if (!deadCells) {
        assignedNeighbors = findEqualNeighbors(livingCells);
    } else {
        assignedNeighbors = findAliveNeighbors(deadCells, livingCells);
    }
    return assignedNeighbors;
};
