let elemento = 'Pique';
const array = [
    'Iniesta',
    'Xavi',
    'Xabi',
    'Villa',
    'Casillas',
    'Busquets',
    'Alba',
];

let arrayEvery1 = ['1', '1', '1', '1'];
let arrayEvery2 = ['1', '2', '1', '1'];
let elementEvery = '1';
let elementEvery2 = '2';

export function arrayPush(array, element) {
    let newArray = [...array, element];

    console.log(newArray);
    return newArray;
}

export function arrayPoP(array) {
    let newArray = [];
    for (let i = 0; i < array.length - 1; i++) {
        newArray[i] = array[i];
    }
    return newArray;
}

export function arrayUnshift(array, element) {
    //unshift añade al principio
    let newArray = [element];
    for (let i = 0; i < array.length; i++) {
        newArray[1 + i] = array[i];
    }
    console.log(newArray);
    return newArray;
}

arrayUnshift(array, elemento);

export function arrayShift(array) {
    //Borra
    let newArray = [];
    for (let i = 1; i < array.length; i++) {
        newArray[i - 1] = array[i];
    }
    return newArray;
}

export function arrayFind(array, element) {
    let foundElement = '';
    for (let i = 0; i < array.length; i++) {
        if (Object.is(array[i], element)) {
            foundElement = element;
        }
    }
    return foundElement;
}

export function arrayEvery(arrayEvery1, elementEvery) {
    let counter = 0;
    for (let i = 0; i < arrayEvery1.length; i++) {
        if (Object.is(arrayEvery1[i], elementEvery)) {
            counter++;
        }
    }
    if (counter === arrayEvery1.length) {
        return true;
    }
}

export function arrayNotEvery(arrayEvery1, elementEvery) {
    let counter = 0;
    for (let i = 0; i < arrayEvery1.length; i++) {
        if (Object.is(arrayEvery1[i], elementEvery)) {
            counter++;
        }
    }
    return Object.is(counter, arrayEvery1.length);
}

export function arraySome(array, elemento) {
    let counter = 0;
    for (let i = 0; i < array.length; i++) {
        if (Object.is(array[i], elemento)) {
            counter++;
        }
    }
    if (counter >= 1) {
        return true;
    }
}

export function arrayNone(array, elemento) {
    let counter = 0;
    for (let i = 0; i < array.length; i++) {
        if (Object.is(array[i], elemento)) {
            counter++;
        }
    }
    if (counter === 0) {
        return false;
    }
}

// export function arrayFilter(arrayEvery2, elementEvery) {
//     let newArray = [];
//     for (let i = 0; i < arrayEvery2.length; i++) {
//         if (Object.is(arrayEvery2[i], elementEvery)) {
//             arrayEvery2[i] = elementEvery;
//         }
//     }
//     if (newArray.length != 0) {
//         return newArray;
//     }
//     for (let j = 0; j < newArray.length; j++) {
//         if (newArray[i] == '') {
//             arrayShift(newArray, '');
//         }
//     }
//     console.log(newArray);
// }

// arrayFilter(arrayEvery2, elementEvery);
