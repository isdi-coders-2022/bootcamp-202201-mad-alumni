import { myPush } from './arrayPush.js';

export const myFilter = (array, someFunction) => {
    let filterResult = [];
    for (let i = 0; i < array.length; i++) {
        if (someFunction(array[i])) myPush(filterResult, array[i]);
    }
    return filterResult;
};
