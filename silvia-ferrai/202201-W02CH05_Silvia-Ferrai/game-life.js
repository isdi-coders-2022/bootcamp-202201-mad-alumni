import { buildGrid } from './build-grid.js';

export function createGrid(grid) {
    const newGrid = buildGrid(grid.length);
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            const mainCoordinates = [i, j];
            let livingCellsBeside = 0;

            const myNeighbors = [
                [i - 1, j - 1],
                [i - 1, j],
                [i - 1, j + 1],
                [i, j - 1],
                [i, j + 1],
                [i + 1, j - 1],
                [i + 1, j],
                [i + 1, j + 1],
            ];

            // console.log(myNeighbors);
            const filteredCoordinates = myNeighbors.filter(
                (coordinate) =>
                    coordinate[0] >= 0 &&
                    coordinate[0] < grid.length &&
                    coordinate[1] >= 0 &&
                    coordinate[1] < grid.length
            );
            filteredCoordinates.forEach((coordinate) => {
                if (grid[coordinate[0]][coordinate[1]] === 1) {
                    livingCellsBeside = livingCellsBeside + 1;
                }
            });

            if (grid[mainCoordinates[0]][mainCoordinates[1]] === 1) {
                if (livingCellsBeside < 2 || livingCellsBeside > 3) {
                    newGrid[mainCoordinates[0]][mainCoordinates[1]] = 0;
                } else if (livingCellsBeside === 2 || livingCellsBeside === 3) {
                    newGrid[mainCoordinates[0]][mainCoordinates[1]] = 1;
                }
            } else if (grid[mainCoordinates[0]][mainCoordinates[1]] === 0) {
                if (livingCellsBeside === 3) {
                    newGrid[mainCoordinates[0]][mainCoordinates[1]] = 1;
                }
            }
        }
    }

    return newGrid;
}
