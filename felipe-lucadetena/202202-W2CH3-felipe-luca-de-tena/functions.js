//Push
export const myPush = function (array, element) {
    let newArray = [...array, element];
    return newArray;
};
//Every

export const myEvery = function (array) {
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] !== array[i + 1]) {
            return false;
        } else {
            return true;
        }
    }
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
export const myFind = function (array, element) {
    for (let i = 0; i < array.length; i++) {
        if (Object.is(array[i], element)) return element;
    }
};
