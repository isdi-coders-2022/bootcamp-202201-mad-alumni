export const myPop = (array) => {
    array[array.length - 1] = undefined;
    return array.length;
};
