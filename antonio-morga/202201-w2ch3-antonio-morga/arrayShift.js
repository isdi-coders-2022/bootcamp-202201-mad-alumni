export const myShift = (array) => {
    let resultArray = [];
    for (let i = array.length - 1; i > 0; i--) {
        resultArray[i - 1] = array[i];
    }
    return resultArray;
};
