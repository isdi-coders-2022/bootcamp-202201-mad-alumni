const testArray = [
    [0, 0, 1, 0, 0],
    [0, 0, 0, 1, 0],
    [0, 1, 1, 1, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
];

export const myGrid = (a) =>
    [...Array(a)].map(() => Array(a).fill(Math.floor(Math.random())));

export const filterCoordinates = (grid) => {
    const newGrid = myGrid(grid.length);
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            let imAlive = 0;
            let myNeighbours = [
                [i - 1, j - 1],
                [i - 1, j],
                [i - 1, j + 1],
                [i, j - 1],
                [i, j + 1],
                [i + 1, j - 1],
                [i + 1, j],
                [i + 1, j + 1],
            ];

            myNeighbours = myNeighbours.filter((coordinate) => {
                return (
                    coordinate[0] >= 0 &&
                    coordinate[0] < grid.length &&
                    coordinate[1] >= 0 &&
                    coordinate[1] < grid.length
                );
            });
            myNeighbours.forEach((coordinate) => {
                if (grid[coordinate[0]][coordinate[1]] === 1) {
                    imAlive = imAlive + 1;
                }
            });

            if (grid[i][j] === 1) {
                if (imAlive < 2 || imAlive > 3) {
                    newGrid[i][j] = 0;
                } else if (imAlive === 2 || imAlive === 3) {
                    newGrid[i][j] = 1;
                }
            }
            if (grid[i][j] === 0) {
                if (imAlive === 3) {
                    newGrid[i][j] = 1;
                }
            }
        }
    }
    return newGrid;
};

let currentGrid = testArray;
console.log(currentGrid);

export const timer = setInterval(() => {
    currentGrid = filterCoordinates(currentGrid);
    console.log(currentGrid);
}, 600);
