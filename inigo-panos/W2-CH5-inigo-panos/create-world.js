let worldArray = [];

export function buildWorld(rows, columns) {
    for (let i = 0; i < rows; i++) {
        worldArray[i] = [];
        for (let j = 0; j < columns; j++) {
            worldArray[i][j] = [];
        }
    }
}

function firstGenerationOfCells(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            //No entra dentro de este for loop
            let randomNumberGenerator = Math.random() * 2;
            let randomBinary = Math.floor(randomNumberGenerator);

            if (randomBinary === 1) {
                array[i][j] = 1;
            } else {
                array[i][j] = 0;
            }
        }
    }
}

buildWorld(5, 5);

firstGenerationOfCells(worldArray);
export const array = worldArray;
