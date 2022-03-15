export const myPush = function (array, element) {
    const newArray = [...array, element];
    return newArray;
};
export const myPop = function (array) {
    let newArray = [];
    for (let i = 0; i < array.length - 1; i++) {
        newArray[i] = array[i];
    }
    return newArray;
};
export const myShift = function (array) {
    let newArray = [];
    for (let i = 1; i < array.length; i++) {
        newArray[i - 1] = array[i];
    }
    return newArray;
};
export const myUnshift = function (element, array) {
    let newArray = [element, ...array];
    return newArray;
};

export const myFind = function (array, element) {
    let item = '';
    for (let i = 0; i < array.length; i++) {
        if (Object.is(array[i], element)) {
            item = element;
        }
    }
    return item;
};
export const myEveryT = function (array) {
    for (let i = 0; i < array.length; i++) {
        array[i] = array[i];
    }
    return true;
};
export const myEveryF = function (array) {
    for (let i = 0; i < array.length - 1; i++) {
        array[i + 1] = array[i];
    }
    return false;
};
export const myIncludes = function (array, element) {
    for (let i = 0; i < array.length; i++) {
        array[i] = element;
    }
    return true;
};
