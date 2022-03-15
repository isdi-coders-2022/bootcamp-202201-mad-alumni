import { length } from './length.js';

export const find = (array, conditionalFunction) => {
    for (let i = 0; i < length(array); i++) {
        if (conditionalFunction(array[i])) {
            return array[i];
        }
    }

    return undefined;
};
