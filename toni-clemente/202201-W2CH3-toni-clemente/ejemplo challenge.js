const myPush = (array, element) => {
    const returnArray = [...array, element];
    return returnArray;
};

//otro ejemplo para hacer un push

const myPush = (array, element) => {
    const returnArray = [];
    for (let i = 0; i < array.length; i++) {
        returnArray[i] = array[i];
    }
    returnArr[array.length] = element;
    return returnArray;
};
