import { length } from './length.js';

export const push = (array, element) => {
    array[length(array)] = element;
    return length(array);
};
