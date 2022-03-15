export class Grid {
    constructor(size) {
        this.array = [];
        for (let i = 0; i < size; i += 1) {
            this.array[i] = [];
            for (let j = 0; j < size; j += 1) {
                this.array[i].push(0);
            }
        }
    }
}
