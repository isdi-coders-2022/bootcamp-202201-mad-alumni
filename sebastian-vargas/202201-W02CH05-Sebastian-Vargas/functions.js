export const createGrid = (nRows, nColumns) => {
    let grid = [];
    for (let i = 0; i < nRows; i++) {
        grid.push([]);
        for (let j = 0; j < nColumns; j++) {
            grid[grid.length - 1].push(0);
        }
    }
    return grid;
};

console.log(createGrid(3, 5));

// let mainArray = [
//     [0, 0, 0, 0, 0],
//     [0, 0, 1, 0, 0],
//     [0, 0, 1, 0, 0],
//     [0, 0, 1, 0, 0],
//     [0, 0, 0, 0, 0],
// ];
// var livingCellsFound = [];

/*for (let i = 0; i < arreglo.length; i++) {
    for (let j = 0; j < arreglo[i].length; j++) {
        if (arreglo[i][j] === 33) {
            r.push(arreglo[i][j].indexOf());
        }
    }
}*/
// function findLivingCells(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr[i].length; j++) {
//             if (arr[i][j] === 1) {
//                 livingCellsFound.push([i]);
//                 livingCellsFound[livingCellsFound.length - 1].push(j);
//             }
//         }
//     }
// }

//1 vecino: MUERE
//2 vecinos: VIVE
//3 vecinos: VIVE
//4 vecinos: MUERE

// function livingDyingProcess(arr, cellsArr) {
//     cellsArr;
// }
