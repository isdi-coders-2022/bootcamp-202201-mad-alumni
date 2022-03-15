export const myFind = (array, someFunction) => {
    for (let i = 0; i < array.length; i++) {
        if (someFunction(array[i])) return array[i];
    }
};
