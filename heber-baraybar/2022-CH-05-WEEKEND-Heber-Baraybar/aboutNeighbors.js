import { originalGrid } from './main-grid.js';

export const mainGrid = (mainGrid) => {
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      //cuenta la cantidad de vecinos
      let neighborsParameters = [
        [1, 0], // debajo
        [1, -1], // debajo izquierda
        [0, -1], // izquierda
        [-1, -1], // arriba izquierda
        [-1, 0], // arriba
        [-1, 1], // arriba derecha
        [0, 1], // derecha
        [1, 1], // abajo derecha
      ];
      const aliveCellsNeighbors = 0;
      for (p of neighborsParameters) {
        let neighborRow = i + p[0];
        let neighborCol = j + p[1];
        if (
          neighborRow >= 0 &&
          neighborCol >= 0 &&
          neighborRow < rows &&
          neighborCol < cols
        ) {
          if (mainGrid[neighborRow][neighborCol]) {
            aliveNeighbors++;
          }
        }
      }
    }

    export const neighbors = () => {
      const cordinates = [axisX, axisY];
      console.log(cordinates);
      const myneighbors = [
        [axisX - 1, axisY - 1],
        [axisX - 1, axisY],
        [axisX - 1, +1],
        [axisX, axisY + 1],
        [axisX + 1, axisY + 1],
        [axisX + 1, axisY],
        [axisX + 1, axisY - 1],
        [axisX, axisY - 1],
      ];
      console.log(myneighbors);
    };
  }
};
