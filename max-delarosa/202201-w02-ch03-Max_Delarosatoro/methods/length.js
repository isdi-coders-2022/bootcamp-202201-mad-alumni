export const length = (array) => {
    let index = 0;
    while(array[index] !== undefined) {
        index++;
    }
    return index;
};
