export const myJoin = (array, someChar) => {
    let returnString;
    for (let i = 0; i < array.length; i++) {
        if (!i) {
            returnString = array[i];
        } else {
            returnString = returnString + someChar + array[i];
        }
    }
    return returnString;
};
