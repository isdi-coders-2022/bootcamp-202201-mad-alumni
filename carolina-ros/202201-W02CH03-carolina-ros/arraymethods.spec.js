import {
    myPush,
    myPop,
    myShift,
    myUnshift,
    myFind,
    myEveryT,
    myEveryF,
    myIncludes,
} from './arraymethods.js';

describe('Given the function myPush', () => {
    describe('When it receives the parameters array and methods', () => {
        test('Then it should return newArray', () => {
            expect(
                myPush(['Cat', 'Dog', 'Rabbit', 'Cheetah'], 'Snake')
            ).toEqual(['Cat', 'Dog', 'Rabbit', 'Cheetah', 'Snake']);
        });
    });
});
describe('Given the function myPop', () => {
    describe('When it receives the parameters array and methods', () => {
        test('Then it should return newArray', () => {
            expect(myPop(['Cat', 'Dog', 'Rabbit', 'Cheetah'])).toEqual([
                'Cat',
                'Dog',
                'Rabbit',
            ]);
        });
    });
});
describe('Given the function myShift', () => {
    describe('When it receives the parameters array and methods', () => {
        test('Then it should return newArray', () => {
            expect(myShift(['Cat', 'Dog', 'Rabbit', 'Cheetah'])).toEqual([
                'Dog',
                'Rabbit',
                'Cheetah',
            ]);
        });
    });
});
describe('Given the function myUnshift', () => {
    describe('When it receives the parameters array and methods', () => {
        test('Then it should return newArray', () => {
            expect(myUnshift('Cat', ['Dog', 'Rabbit', 'Cheetah'])).toEqual([
                'Cat',
                'Dog',
                'Rabbit',
                'Cheetah',
            ]);
        });
    });
});
describe('Given the function myFind', () => {
    describe('When it receives the parameters array and methods', () => {
        test('Then it should return newArray', () => {
            expect(
                myFind(['Cat', 'Dog', 'Rabbit', 'Cheetah'], 'Rabbit')
            ).toEqual('Rabbit');
        });
    });
});
describe('Given the function myEveryT', () => {
    describe('When it receives the parameters array and methods', () => {
        test('Then it should return newArray', () => {
            expect(myEveryT(['Cat', 'Dog', 'Rabbit', 'Cheetah'])).toBe(true);
        });
    });
});
describe('Given the function myEveryF', () => {
    describe('When it receives the parameters array and methods', () => {
        test('Then it should return newArray', () => {
            expect(myEveryF(['Cat', 'Dog', 'Rabbit', 'Cheetah'])).toBe(false);
        });
    });
});
describe('Given the function myIncludes', () => {
    describe('When it receives the parameters array and methods', () => {
        test('Then it should return newArray', () => {
            expect(myIncludes(['Cat', 'Dog', 'Rabbit', 'Cheetah'])).toBe(true);
        });
    });
});
