export function createNewArray(size) {
    const cellBlock = [];
    for (let row = 0; row < size; row++) {
        cellBlock.push([]);
        for (let colum = 0; colum < size; colum++) {
            cellBlock[row].push(0);
        }
    }
    return cellBlock;
}
