import { length } from './length.js';

export const indexOf = (array, checkValue) => {
    for (let i = 0; i < length(array); i++) {
        if (array[i] === checkValue) {
            return i;
        }
    }

    return -1;
};
