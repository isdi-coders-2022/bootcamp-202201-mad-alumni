export const myIndexOf = (array, element) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === element) return i;
    }
};