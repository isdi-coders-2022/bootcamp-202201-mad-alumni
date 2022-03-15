let array = [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0],
];

export const game = (array) => {
    const newArray = [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
    ];
    for (let x = 0; x < array.length; x++) {
        for (let y = 0; y < array[x].length; y++) {
            let livingCellsBeside = 0;
            const myCoordinates = [x, y];

            const surrounded = [
                [x - 1, y - 1],
                [x - 1, y],
                [x - 1, y + 1],
                [x, y - 1],
                [x, y + 1],
                [x + 1, y - 1],
                [x + 1, y],
                [x + 1, y + 1],
            ];

            const filteredsurround = surrounded.filter(
                (coordinate) =>
                    coordinate[0] >= 0 &&
                    coordinate[0] < array.length &&
                    coordinate[1] >= 0 &&
                    coordinate[1] < array.length
            );

            for (const coordinate of filteredsurround) {
                if (array[coordinate[0]][coordinate[1]] === 1) {
                    livingCellsBeside = livingCellsBeside + 1;
                }
            }

            if (array[myCoordinates[0]][myCoordinates[1]] === 1) {
                if (livingCellsBeside < 2 || livingCellsBeside > 3) {
                    newArray[myCoordinates[0]][myCoordinates[1]] = 0;
                } else if (livingCellsBeside === 2 || livingCellsBeside === 3) {
                    newArray[myCoordinates[0]][myCoordinates[1]] = 1;
                }
            } else if (array[myCoordinates[0]][myCoordinates[1]] === 0) {
                if (livingCellsBeside === 3) {
                    newArray[myCoordinates[0]][myCoordinates[1]] = 1;
                }
            }
        }
    }
    return newArray;
};
