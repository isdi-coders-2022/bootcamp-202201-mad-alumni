const table = createNewArray(6);
const coordinates = [];
const container = document.getElementById('container');
let cell = '';
function createNewArray(size) {
    const cellBlock = [];
    for (let row = 0; row < size; row++) {
        cellBlock.push([]);
        for (let colum = 0; colum < size; colum++) {
            cellBlock[row].push(0);
        }
    }
    return cellBlock;
}

function makeRows(rows) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', rows);

    for (let row = 0; row < table.length; row++) {
        for (let column = 0; column < table[row].length; column++) {
            coordinates.push[(row, column)];
        }
    }

    for (let c = 0; c < rows * rows; c++) {
        cell = document.createElement('li');
        cell.id = coordinates[(c + 1, c + 1)];
        cell.innerText = c + 1;
        container.appendChild(cell).className = 'grid-item';
    }
}

console.log(coordinates);
makeRows(table.length);
