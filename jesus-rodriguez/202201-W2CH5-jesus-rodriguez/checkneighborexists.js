export function checkNeighborExists(coordinate, arr) {
    let coordinateX = Number(coordinate[0]);
    let coordinateY = Number(coordinate[1]);
    let neighborCells = [];
    for (let row = 0; row < arr.length; row++) {
        for (let column = 0; column < arr[row].length; column++) {
            neighborCells = [
                [coordinateX - 1, coordinateY - 1],
                [coordinateX - 1, coordinateY + 1],
                [coordinateX + 1, coordinateY - 1],
                [coordinateX + 1, coordinateY + 1],
                [coordinateX, coordinateY - 1],
                [coordinateX, coordinateY + 1],
                [coordinateX + 1, coordinateY],
                [coordinateX - 1, coordinateY],
            ];
        }
    }

    let existingNeighbors = neighborCells.filter((position) => {
        return (
            position[0] >= 0 &&
            position[0] < arr.length &&
            position[1] >= 0 &&
            position[1] < arr.length
        );
    });

    return existingNeighbors;
}
