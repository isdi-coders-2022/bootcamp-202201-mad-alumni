export const buildGrid = (length) => {
    let grid = [];
    for (let i = 0; i < length; i++) {
        let row = [];
        for (let j = 0; j < length; j++) {
            row.push(0);
        }
        grid.push(row);
    }
    if (length === undefined) {
        return 'Error, Enter a number';
    }
    return grid;
};
// buildGrid(5);
// console.log(buildGrid(undefined));
