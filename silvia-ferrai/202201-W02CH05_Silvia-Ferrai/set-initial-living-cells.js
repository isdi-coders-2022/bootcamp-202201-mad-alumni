export const setInitialLivingCells = (emptyGrid, coordinates) => {
    for (const coordinate of coordinates) {
        emptyGrid[coordinate[0]][coordinate[1]] = 1;
    }
    return emptyGrid;
};
