import { length } from './length.js';
import { push } from './push.js';

export const filter = (array, conditionalFunction) => {
    let returnArr = [];

    for (let i = 0; i < length(array); i++) {
        if (conditionalFunction(array[i])) {
            push(returnArr, array[i]);
        }
    }

    return returnArr;
};
