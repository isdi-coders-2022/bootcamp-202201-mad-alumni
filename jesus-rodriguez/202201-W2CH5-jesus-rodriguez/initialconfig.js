export const setInitialLiving = (table, coordinates) => {
    for (const coordinate of coordinates) {
        table[coordinate[0]][coordinate[1]] = 1;
    }
    return table;
};
