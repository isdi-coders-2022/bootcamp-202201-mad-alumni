import { createNewArray } from './createtable.js';
import { checkNeighborExists } from './checkneighborexists.js';

export function iterate(table) {
    const newTable = createNewArray(table.length);

    for (let row = 0; row < table.length; row++) {
        for (let column = 0; column < table[row].length; column++) {
            let myCoordinates = [row, column];
            let livingCounter = 0;
            myCoordinates.push(row, column);

            const existingNeighbors = checkNeighborExists([row, column], table);

            for (const coordinate of existingNeighbors) {
                if (table[coordinate[0]][coordinate[1]] === 1) {
                    livingCounter = livingCounter + 1;
                }
            }

            if (table[row][column] === 1) {
                if (livingCounter < 2 || livingCounter > 3) {
                    newTable[row][column] = 0;
                } else if (livingCounter === 2 || livingCounter === 3) {
                    newTable[row][column] = 1;
                }
            } else if (table[row][column] === 0) {
                if (livingCounter === 3) {
                    newTable[row][column] = 1;
                }
            }
        }
    }
    return newTable;
}
