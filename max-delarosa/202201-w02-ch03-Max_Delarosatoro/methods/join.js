import { length } from './length.js';

export const join = (array, joinParameter) => {
    let str = '';

    for (let i = 0; i < length(array); i++) {
        if (joinParameter === null || joinParameter === undefined) {
            joinParameter = ' ';
        }
        if (i === 0) {
            str = str + array[i];
        } else {
            str = str + joinParameter + array[i];
        }
    }

    return str;
};
