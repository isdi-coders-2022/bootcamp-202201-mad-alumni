export const actOnAliveCells = (aliveCellsArray) => {
    const positionsToUpdate = [];
    for (const element of aliveCellsArray) {
        if (element.neighbors < 2 || element.neighbors > 3) {
            positionsToUpdate.push(element);
        }
    }
    return positionsToUpdate;
};

export const actOnDeadCells = (deadCellsArray) => {
    const positionsToUpdate = [];
    for (const element of deadCellsArray) {
        if (element.neighbors === 3) {
            positionsToUpdate.push(element);
        }
    }
    return positionsToUpdate;
};
