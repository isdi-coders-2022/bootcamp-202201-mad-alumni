import { length } from './length.js';
import { pop } from './pop.js';
import { push } from './push.js';

export const unshift = (array, ...args) => {
    const auxArr = [...array];
    const argsArr = [...args];

    while (length(array) > 0) {
        pop(array);
    }

    for (let i = 0; i < argsArr.length; i++) {
        push(array, argsArr[i]);
    }

    for (let i = 0; i < auxArr.length; i++) {
        push(array, auxArr[i]);
    }

    console.log(array);

    return length(array);
};
