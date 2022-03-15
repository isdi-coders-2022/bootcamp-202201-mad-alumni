import { buildGrid } from './build-grid.js';
import { setInitialLivingCells } from './set-initial-living-cells.js';
import { createGrid } from './game-life.js';

const testGrid = buildGrid(6);

const initialCoordinates = [
    [0, 1],
    [1, 2],
    [2, 0],
    [2, 1],
    [2, 2],
];

const initialGrid = setInitialLivingCells(testGrid, initialCoordinates);

console.log(initialGrid);
let newGrid = createGrid(initialGrid);
setInterval(() => {
    newGrid = createGrid(newGrid);
    console.log(newGrid);
}, 500);
