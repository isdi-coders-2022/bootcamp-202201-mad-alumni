import { length } from './length.js';

export const some = (array, conditionFunction) => {
    for (let i = 0; i < length(array); i++) {
        if (conditionFunction(array[i])) {
            return true;
        }
    }

    return false;
};
