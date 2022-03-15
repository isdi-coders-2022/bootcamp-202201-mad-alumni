import { length } from './length.js';

export const reduce = (array, reducerFunction) => {
    let previousValue = null;
    let currentValue = null;
    for (let i = 0; i < length(array); i++) {
        if (i === 0) {
            previousValue = array[i];
        } else {
            currentValue = array[i];
            previousValue = reducerFunction(previousValue, currentValue);

            console.log(previousValue);
        }
    }

    return previousValue;
};
