export const mySome = (array, someFunction) => {
    for (let i = 0; i < array.length; i++) {
        if (someFunction(array[i])) return true;
    }
    return false;
};
