export const myReduce = (array, someFunction) => {
    let currentValue = 0;
    let returnValue;
    for (let i = 0; i < array.length; i++) {
        if (!i) {
            currentValue = array[i];
        } else {
            returnValue = someFunction(currentValue, array[i]);
            currentValue = returnValue;
        }
    }
    return returnValue;
};
