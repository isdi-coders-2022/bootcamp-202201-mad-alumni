import { length } from './length.js';

export const every = (array, conditionFunction) => {
    for (let i = 0; i < length(array); i++) {
        if (!conditionFunction(array[i])) {
            return false;
        }
    }

    return true;
};
