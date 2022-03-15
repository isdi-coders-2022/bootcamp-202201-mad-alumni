import { Grid } from './functions/class-grid.js';
import { nextGen } from './functions/next-generation.js';

const gridSize = 20;
const resetButton = document.querySelector('.controls-left__reset');
const randomizeButton = document.querySelector('.controls-left__randomize');
const gridBox = document.querySelector('.grid-box');
const startStop = document.querySelector('.controls-right__start-stop');
let newGenSpeed = document.querySelector('.controls-right__speed').value;

const generateGrid = (size) => {
    for (let i = 0; i < gridSize; i += 1) {
        for (let j = 0; j < gridSize; j += 1) {
            const div = document.createElement('div');
            div.classList.add('grid-box__cell');
            div.classList.add(`grid-box__cell-dimensions${size}`);
            div.addEventListener('click', () => {
                div.classList.toggle('grid-box__cell--alive');
            });
            div.id = `${i} ${j}`;
            gridBox.appendChild(div);
        }
    }
};

generateGrid(gridSize);

const captureHtmlGrid = () => {
    const grid = new Grid(gridSize);
    for (let i = 0; i < grid.array.length; i += 1) {
        for (let j = 0; j < grid.array[i].length; j += 1) {
            const cell = document.getElementById(`${i} ${j}`);
            if (cell.classList.contains('grid-box__cell--alive')) {
                grid.array[i][j] = 1;
            }
        }
    }
    return grid;
};

const updateHtml = (grid) => {
    for (let i = 0; i < grid.array.length; i += 1) {
        for (let j = 0; j < grid.array[i].length; j += 1) {
            const cell = document.getElementById(`${i} ${j}`);
            cell.classList.remove('grid-box__cell--alive');
            if (grid.array[i][j] === 1) {
                cell.classList.add('grid-box__cell--alive');
            }
        }
    }
};

const randomize = (grid) => {
    const array = grid;
    for (let i = 0; i < array.array.length; i += 1) {
        for (let j = 0; j < array.array[i].length; j += 1) {
            array.array[i][j] = Math.round(Math.random());
        }
    }
    return array;
};

let run = false;

resetButton.addEventListener('click', () => {
    const grid = new Grid(gridSize);
    updateHtml(grid);
    document.querySelector('.fa-play').classList.remove('hidden');
    document.querySelector('.fa-stop').classList.add('hidden');
    clearInterval(run);
    run = false;
});

randomizeButton.addEventListener('click', () => {
    let grid = new Grid(gridSize);
    grid = randomize(grid);
    updateHtml(grid);
    document.querySelector('.fa-play').classList.remove('hidden');
    document.querySelector('.fa-stop').classList.add('hidden');
    clearInterval(run);
    run = false;
});

startStop.addEventListener('click', () => {
    if (!run) {
        newGenSpeed = document.querySelector('.controls-right__speed').value;
        document.querySelector('.fa-play').classList.toggle('hidden');
        document.querySelector('.fa-stop').classList.toggle('hidden');
        run = window.setInterval(() => {
            let grid = captureHtmlGrid();
            grid = nextGen(grid);
            updateHtml(grid);
        }, 500 - newGenSpeed);
    } else {
        document.querySelector('.fa-play').classList.toggle('hidden');
        document.querySelector('.fa-stop').classList.toggle('hidden');
        clearInterval(run);
        run = false;
    }
});
