import { length } from './length';

export const includes = (array, checkValue) => {
    for (let i = 0; i < length(array); i++) {
        if (array[i] === checkValue) return true;
    }

    return false;
};
