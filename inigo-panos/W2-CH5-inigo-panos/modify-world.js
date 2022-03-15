import { array } from './create-world.js';

// let numberOf1s = 0;
let nextGen = [];
nextGen = array;

function findLivingCells(arrayCells) {
    for (let i = 0; i < arrayCells.length; i++) {
        for (let j = 0; j < arrayCells[i].length; j++) {
            let livingCells = [
                [i - 1, j - 1],
                [i - 1, j],
                [i - 1, j + 1],
                [i, j - 1],
                [i, j + 1],
                [i + 1, j - 1],
                [i + 1, j],
                [i + 1, j + 1],
            ];

            console.log('             ');
            console.log('I: ' + i + ' J: ' + j);
            console.log(livingCells);
            console.log('Longitud livingCells = ' + livingCells.length);

            livingCells = livingCells.filter((cell) => {
                cell[i] >= 0 &&
                    cell[i] < arrayCells.length &&
                    cell[j] >= 0 &&
                    cell[j] < arrayCells.length;
                return livingCells;
            });
            console.log(livingCells);

            // if (numberOf1s < 2 || numberOf1s > 3) {
            //     nextGen[i][j] = 0;
            //     console.log('Resultado = 0');
            //     numberOf1s = 0;
            // } else {
            //     nextGen[i][j] = 1;
            //     console.log('Resultado = 1');
            //     numberOf1s = 0;
            // }
            // livingCells = [];
            // } else if (array[i][j] === 0) {
            //     let deadCells = [];
            //     deadCells.push(
            //         [i - 1, j - 1],
            //         [i - 1, j],
            //         [i - 1, j + 1],
            //         [i, j - 1],
            //         [i + 1, j - 1],
            //         [i + 1, j],
            //         [i + 1, j + 1]
            //     );
            //     for (let k = 0; k < deadCells.length; k++) {
            //         for (let l = 0; l < deadCells[k].length; l++) {
            //             if (deadCells[k][l] === 1) {
            //                 numberOf1s += 1;
            //             }
            //         }
            //     }

            //     if (numberOf1s === 3) {
            //         nextGen[i][j] = 1;
            //         numberOf1s = 0;
            //     } else if (numberOf1s < 3 || numberOf1s > 3) {
            //         nextGen[i][j] = 0;
            //         numberOf1s = 0;
            //     }
            //     deadCells = [];
        }
    }
}

console.log(array);
findLivingCells(array);
console.log(nextGen);
