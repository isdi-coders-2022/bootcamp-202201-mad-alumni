import { buildInitialGrid } from './buildInitialGrid.js';
import { setInitialLivingCells } from './setInitialLivingCells.js';
import { nextEraGrid } from './nextEraGrid.js';

const gridContainer = document.querySelector('.main__grid-container');
const startBtn = document.querySelector('.main__start-button');
const stopBtn = document.querySelector('.main__stop-button');
const clearBtn = document.querySelector('.main__clear-button');
const randomBtn = document.querySelector('.main__random-button');
const gridRangeDOM = document.querySelector('.main__grid-size-range');
const gridRangeValueDOM = document.querySelector('.main__range-value');
const speedRangeDOM = document.querySelector('.main__speed-range');
const libraryIcon = document.querySelector('.header__icon--library');
const infoIcon = document.querySelector('.header__icon--info');
const body = document.querySelector('body');

const initialGridLength = 10;
const emptyInitialGrid = buildInitialGrid(initialGridLength);

let initialCoordinates = [];

let gameStartGrid = emptyInitialGrid;
let currentGrid = gameStartGrid;

const DOMBuildGrid = (gameGrid) => {
    const gridLength = gameGrid.length;
    for (let i = 0; i < gridLength; i++) {
        const row = document.createElement('div');
        row.classList.add('main__grid-row');
        for (let j = 0; j < gridLength; j++) {
            const cell = document.createElement('div');
            cell.setAttribute('id', `cell-${i}-${j}`);
            if (gameGrid[i][j][0] == [0]) {
                cell.classList.add('main__grid-cell');
            } else if (gameGrid[i][j][0] == [1]) {
                cell.classList.add('main__grid-cell');
                cell.classList.add('main__grid-cell--active');
            }
            cell.addEventListener('click', (e) => {
                const cellId = e.target.getAttribute('id');
                const splitCellId = cellId.split('-');
                const myCoordinates = [splitCellId[1], splitCellId[2]];
                const indexOfCoordinate = initialCoordinates.findIndex(
                    (coordinate) =>
                        JSON.stringify(coordinate) ==
                        JSON.stringify(myCoordinates)
                );
                if (indexOfCoordinate === -1) {
                    initialCoordinates.push(myCoordinates);
                } else if (indexOfCoordinate !== -1) {
                    initialCoordinates.splice(indexOfCoordinate, 1);
                }
                const newGrid = buildInitialGrid(gridRangeDOM.value);
                gameStartGrid = setInitialLivingCells(
                    newGrid,
                    initialCoordinates
                );
                currentGrid = gameStartGrid;
                gridContainer.innerHTML = '';
                DOMBuildGrid(gameStartGrid);
            });
            row.appendChild(cell);
        }
        gridContainer.appendChild(row);
    }
};

DOMBuildGrid(gameStartGrid);

const DOMChangeGrid = (oldGrid) => {
    const gridLength = oldGrid.length;
    for (let i = 0; i < gridLength; i++) {
        for (let j = 0; j < gridLength; j++) {
            const cell = document.querySelector(`#cell-${i}-${j}`);
            cell.className = '';
            if (oldGrid[i][j][0] == [0]) {
                cell.classList.add('main__grid-cell');
            } else if (oldGrid[i][j][0] == [1]) {
                cell.classList.add('main__grid-cell');
                cell.classList.add('main__grid-cell--active');
            }
        }
    }
};

let gameLoop;
let speed = speedRangeDOM.value;

const startGame = () => {
    gameLoop = setInterval(() => {
        currentGrid = nextEraGrid(currentGrid);
        DOMChangeGrid(currentGrid);
    }, speed);
    startBtn.classList.add('hide');
    stopBtn.classList.remove('hide');
};

speedRangeDOM.addEventListener('change', () => {
    speed = speedRangeDOM.value;
    clearInterval(gameLoop);
    startGame();
});

startBtn.addEventListener('click', startGame);

stopBtn.addEventListener('click', () => {
    clearInterval(gameLoop);
    startBtn.classList.remove('hide');
    stopBtn.classList.add('hide');
});

const clearGrid = () => {
    const newGrid = buildInitialGrid(gridRangeDOM.value);
    initialCoordinates = [];
    gridContainer.innerHTML = '';
    currentGrid = newGrid;
    DOMBuildGrid(currentGrid);
};

gridRangeDOM.addEventListener('change', (e) => {
    clearGrid();
    gridRangeValueDOM.textContent = e.target.value;
    gridContainer.innerHTML = '';
    const newEmptyGrid = buildInitialGrid(e.target.value);
    const newStartGrid = setInitialLivingCells(
        newEmptyGrid,
        initialCoordinates
    );
    currentGrid = newStartGrid;
    DOMBuildGrid(newStartGrid);
});

clearBtn.addEventListener('click', clearGrid);

randomBtn.addEventListener('click', () => {
    const newGrid = buildInitialGrid(gridRangeDOM.value);
    initialCoordinates = [];
    for (let i = 0; i < newGrid.length; i++) {
        for (let j = 0; j < newGrid[i].length; j++) {
            const myCoordinates = [i, j];
            const randomNumber = Math.random();
            const living = randomNumber > 0.5 ? true : false;
            if (living) initialCoordinates.push(myCoordinates);
        }
    }
    currentGrid = setInitialLivingCells(newGrid, initialCoordinates);
    gridContainer.innerHTML = '';
    DOMBuildGrid(currentGrid);
});

libraryIcon.addEventListener('click', () => {});

infoIcon.addEventListener('click', () => {
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');

    console.log(overlay);

    body.appendChild(overlay);
});
