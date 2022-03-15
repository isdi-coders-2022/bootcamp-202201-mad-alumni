export class Cell {
    constructor(row, column, alive) {
        this.row = row;
        this.column = column;
        this.isAlive = alive;
        this.neighbors = 0;
    }
}
