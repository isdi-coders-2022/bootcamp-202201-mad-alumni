export const myPush = (array, element) => {
    array[array.length] = element;
    return array.length;
};

const matriz = [2, 3, 5, 6];
export const myPop = (array) => {
    let poppedElement = array[array.length - 1];
    array.length = array.length - 1;
    return poppedElement;
};

console.log(matriz);
myPop(matriz);
console.log(matriz);
