import { length } from './length.js';

export const pop = (array) => {
    const lastIndex = length(array) - 1;
    const lastElement = array[lastIndex];

    delete array[lastIndex];
    return lastElement;
};
