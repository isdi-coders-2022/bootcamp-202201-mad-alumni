// Creamos el mundo, un 5x5

let world = [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0],
];
let nextWorld = [];
nextWorld = world;

console.log(world[0]);
console.log(world[0][1]);

function readWorld(array) {
    console.log(array);
}

readWorld(nextWorld);
// function generateNextGeneration(world) {
//     //Se empieza a generar de arriba a abajo, izquierda a derecha
//     //Solo hay dos valores, 1 o 0
//     //Comprobar cuáles son los valores 1.
//     //Dos arrays iguales
// }
function whoIsAlive(array) {
    //j = filas, k = columnas

    for (let j = 0; j < array.length - 1; j++) {
        for (let k = 0; k < array[j].length - 1; k++) {
            let totalNeighbourCells;
            if (array[j][k] === 1) {
                totalNeighbourCells += array[j - 1][k - 1];
                totalNeighbourCells += array[j - 1][k - 1];
                totalNeighbourCells += array[j - 1][k];

                totalNeighbourCells += array[j][k - 1];
                totalNeighbourCells += array[j][k + 1];

                totalNeighbourCells += array[j + 1][k - 1];
                totalNeighbourCells += array[j + 1][k];
                totalNeighbourCells += array[j + 1][k + 1];
            }
            if (array[j][k] === 0) {
                switch (totalNeighbourCells) {
                    case 3:
                        nextWorld[j][k] = 1;
                        break;
                    default:
                        nextWorld[j][k] = 0;
                }
            } else if (array[j][k] === 1) {
                switch (totalNeighbourCells) {
                    case 0:
                    case 1:
                        nextWorld[j][k] = 0;
                        break;
                    case 2:
                        nextWorld[j][k] = 1;
                        break;
                    case 3:
                        nextWorld[j][k] = 1;
                        break;
                    case 4:
                    case 5:
                    case 6:
                    case 7:
                    case 8:
                        nextWorld[j][k] = 0;
                        break;
                    default:
                        nextWorld[j][k] = 0;
                        break;
                }
            }
        }
    }

    for (let x = 0; x < world.length; x++) {
        for (let y = 0; y < world[x].length; y++) {
            world[x][y] = nextWorld[x][y];
            console.log(world);
        }
    }

    console.log('Terminada next world');
}

whoIsAlive(world);
