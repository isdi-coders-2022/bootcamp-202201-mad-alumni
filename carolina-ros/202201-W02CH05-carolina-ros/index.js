let gridHeight = 5;
let gridWidth = 5;
let theGrid = [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0],
];

const initialCoordinates = [
    [1, 2],
    [2, 2],
    [3, 2],
];
function newGrid(gridWidth, gridHeight) {
    let newArray = [];
    for (let rows = 0; rows < gridWidth; rows++) {
        newArray.push([]);
        for (let column = 0; column < gridHeight; column++) {
            newArray[rows].push(0);
        }
    }

    return newArray;
}
function grid(gridWidth, gridHeight, initialCoordinates) {
    let gridArray = [];
    for (let rows = 0; rows < gridWidth; rows++) {
        gridArray.push([]);
        for (let column = 0; column < gridHeight; column++) {
            gridArray[rows].push(0);
        }
    }
    for (const point of initialCoordinates) {
        gridArray[point[0]][point[1]] = 1;
    }
    return gridArray;
}

function checkNeighbours(theGrid) {
    let nextGrid = newGrid(gridWidth, gridHeight);
    for (let i = 0; i < gridWidth; i++) {
        for (let j = 0; j < gridHeight; j++) {
            let allNeighbours = [
                [i - 1, j - 1],
                [i - 1, j],
                [i - 1, j + 1],
                [i, j - 1],
                [i, j + 1],
                [i + 1, j - 1],
                [i + 1, j],
                [i + 1, j + 1],
            ];
            allNeighbours = allNeighbours.filter((e) => {
                return (
                    e[0] >= 0 &&
                    e[1] >= 0 &&
                    e[0] < theGrid.length &&
                    e[1] < theGrid.length
                );
            });

            let countAlive = 0;
            for (const coordinate of allNeighbours) {
                if (theGrid[coordinate[0]][coordinate[1]] === 1) {
                    countAlive = countAlive + 1;
                }
            }

            if (theGrid[i][j] === 0) {
                switch (countAlive) {
                    case 3:
                        nextGrid[i][j] = 1;
                        break;
                    default:
                        nextGrid[i][j] = 0;
                        break;
                }
            } else if (theGrid[i][j] === 1) {
                switch (countAlive) {
                    case 2:
                        nextGrid[i][j] = 1;
                        break;
                    case 3:
                        nextGrid[i][j] = 1;
                        break;
                    default:
                        nextGrid[i][j] = 0;
                        break;
                }
            }
        }
    }
    return nextGrid;
}

let gameTable = grid(gridWidth, gridHeight, initialCoordinates);

console.log(gameTable);
setInterval(() => {
    gameTable = checkNeighbours(gameTable);
    console.log(gameTable);
}, 500);
