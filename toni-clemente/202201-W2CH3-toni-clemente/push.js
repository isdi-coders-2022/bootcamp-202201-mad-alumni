export function myPush(array, element) {
    const returnArray = [];
    for (let i = 0; i < array.length; i++) {
        returnArray[i] = array[i];
    }
    returnArray[array.length] = element;
    return returnArray;
}
const testPush = ["queso", "casa", "chozas", "jefe"];
myPush(testPush, "esto");
