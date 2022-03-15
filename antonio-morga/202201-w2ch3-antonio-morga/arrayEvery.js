export const myEvery = (array, somefunction) => {
    for (let i = 0; i < array.length; i++) {
        if (!somefunction(array[i])) return false;
    }
    return true;
};
