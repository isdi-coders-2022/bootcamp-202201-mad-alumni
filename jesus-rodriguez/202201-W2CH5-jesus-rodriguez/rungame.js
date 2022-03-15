import { createNewArray } from './createtable.js';
import { setInitialLiving } from './initialconfig.js';
import { iterate } from './gameoflife.js';

const cellBlock = createNewArray(5);

const initialCoordinates = [
    [1, 2],
    [2, 2],
    [3, 2],
];

let gameTable = setInitialLiving(cellBlock, initialCoordinates);

console.log(gameTable);

setInterval(() => {
    gameTable = iterate(gameTable);
    console.log(gameTable);
}, 500);
