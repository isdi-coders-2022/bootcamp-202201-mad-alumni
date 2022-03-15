export const myMap = (array, someFunction) => {
    let resultArray = [];
    for (let i = 0; i < array.length; i++) {
        resultArray[i] = someFunction(array[i]);
    }
    return resultArray;
};
