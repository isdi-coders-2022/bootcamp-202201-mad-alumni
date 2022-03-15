import { length } from './length.js';
import { push } from './push.js';

export const map = (array, transformFunction) => {
    let newArray = [];
    for (let i = 0; i < length(array); i++) {
        push(newArray, transformFunction(array[i]));
    }

    return newArray;
};
