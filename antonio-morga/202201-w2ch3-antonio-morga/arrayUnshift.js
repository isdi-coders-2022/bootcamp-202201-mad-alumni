import { myShift } from './arrayShift.js';

export const myUnshift = (array, element) => {
    let helperArray = myShift(array);
    let resultArray = [];
    for (let i = 0; i < helperArray.length; i++)
        resultArray[i + 1] = helperArray[i];
    resultArray[0] = element;
    return resultArray;
};
