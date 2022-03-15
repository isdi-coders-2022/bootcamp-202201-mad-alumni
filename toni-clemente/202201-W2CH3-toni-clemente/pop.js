export function myPop(array) {
    let returnArray = [];
    for (let i = 0; i < array.length - 1; i++) {
        returnArray[i] = array[i];
    }
    let prueba = [returnArray];

    return returnArray;
}

const testPop = ["queso", "casa", "chozas", "jefe"];
myPop(testPop);
//console.log(myPush(arrayPrueba, "esto")); // para comprobar que funciona
console.log(myPop(testPop));
