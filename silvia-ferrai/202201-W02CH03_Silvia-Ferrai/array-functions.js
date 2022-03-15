export const pushItem = function (array, element) {
    let newArray = [...array, element];
    return newArray;
};

export const popItem = function (array) {
    let newArray = [];
    for (let i = 0; i < array.length - 1; i++) {
        newArray[i] = array[i];
    }
    return newArray;
};

export const shiftItem = function (array) {
    let newArray = [];
    for (let i = 1; i < array.length; i++) {
        newArray[i - 1] = array[i];
    }
    return newArray;
};

export const unshiftItem = function (element, array) {
    let newArray = [element, ...array];
    return newArray;
};

export const findItem = function (array, element) {
    let result;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === element) return element;
        result = element;
    }
    return result;
};
