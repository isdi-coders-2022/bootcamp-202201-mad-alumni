import { length } from './length.js';

export const findIndex = (array, conditionalFunction) => {
    for (let i = 0; i < length(array); i++) {
        if (conditionalFunction(array[i])) {
            return i;
        }
    }

    return -1;
};
