import {
    arrayPoP,
    arrayPush,
    arrayUnshift,
    arrayFind,
    arrayShift,
    arrayEvery,
    arrayNotEvery,
    arraySome,
    arrayNone,
    arrayFilter,
} from './arrayFunctions';

const array = [
    'Iniesta',
    'Xavi',
    'Xabi',
    'Villa',
    'Casillas',
    'Busquets',
    'Alba',
];

let element = 'Xavi';
let element2 = 'Pique';

describe('Given the function arrayPush', () => {
    describe('When it receives an array and an element', () => {
        test('It should push the element to the array', () => {
            const element = 'Pujol';
            expect(arrayPush(array, element)).toEqual([
                'Iniesta',
                'Xavi',
                'Xabi',
                'Villa',
                'Casillas',
                'Busquets',
                'Alba',
                'Pujol',
            ]);
        });
    });
});

describe('Given the function arrayPoP', () => {
    describe('When it receives an array', () => {
        test('It should pop the last element of the array', () => {
            expect(arrayPoP(array)).toEqual([
                'Iniesta',
                'Xavi',
                'Xabi',
                'Villa',
                'Casillas',
                'Busquets',
            ]);
        });
    });
});

describe('Given the function arrayShift', () => {
    describe('When it receives an array', () => {
        test('It should delete the first element of the array', () => {
            expect(arrayShift(array)).toEqual([
                'Xavi',
                'Xabi',
                'Villa',
                'Casillas',
                'Busquets',
                'Alba',
            ]);
        });
    });
});

describe('Given the function arrayFind', () => {
    describe('When it receives an element', () => {
        test('It should search for this element in the array', () => {
            expect(arrayFind(array, element)).toEqual('Xavi');
        });
    });
});

describe('Given the function arrayUnshift', () => {
    describe('When it receives an array', () => {
        test('It should add the first element to the beggining of the array', () => {
            expect(arrayUnshift(array, element2)).toEqual([
                'Pique',
                'Iniesta',
                'Xavi',
                'Xabi',
                'Villa',
                'Casillas',
                'Busquets',
                'Alba',
            ]);
        });
    });
});

describe('Given the function arrayFind', () => {
    describe('When it receives an element', () => {
        test('It should search for this element in the array', () => {
            expect(arrayFind(array, element)).toEqual('Xavi');
        });
    });
});

let arrayEvery1 = ['1', '1', '1', '1'];
let arrayEvery2 = ['1', '2', '1', '1'];
let elementEvery = '1';
let elementEvery2 = '2';

describe('Given the function arrayEvery', () => {
    describe('When it receives an element', () => {
        test('It should search for this element in the array, return true if every element matches', () => {
            expect(arrayEvery(arrayEvery1, elementEvery)).toEqual(true);
        });
    });
});

describe('Given the function arrayNotEvery', () => {
    describe('When it receives an element', () => {
        test('It should search for this element in the array, return false if only one element matches', () => {
            expect(arrayNotEvery(arrayEvery2, elementEvery)).toEqual(false);
        });
    });
});

describe('Given the function arraySome', () => {
    describe('When it receives an element', () => {
        test('It should search for this element in the array, return true if at leaste one element matches', () => {
            expect(arraySome(arrayEvery2, elementEvery)).toEqual(true);
        });
    });
});

describe('Given the function arrayNone', () => {
    describe('When it receives an element', () => {
        test('It should search for this element in the array, return false if no element matches', () => {
            expect(arrayNone(arrayEvery1, elementEvery2)).toEqual(false);
        });
    });
});

describe('Given the function arrayFilter', () => {
    describe('When it receives an element', () => {
        test('It should search for this element in the array, return the matching elements', () => {
            expect(arrayFilter(arrayEvery2, elementEvery)).toMatch(
                elementEvery
            );
        });
    });
});
