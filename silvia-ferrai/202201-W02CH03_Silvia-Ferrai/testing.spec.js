import {
    pushItem,
    popItem,
    shiftItem,
    unshiftItem,
    findItem,
    everyItem,
} from './array-functions.js';

describe('Given the function pushItem', () => {
    describe('When it receives the parameters ...', () => {
        test('it should return new array', () => {
            const a = [1, 2, 3];
            const b = 4;

            const result = [1, 2, 3, 4];

            expect(pushItem(a, b)).toEqual(result);
        });
    });
});

describe('Given the function popItem', () => {
    describe('When it receives the parameters ...', () => {
        test('it should return new array', () => {
            const a = [1, 2, 3];

            const result = [1, 2];

            expect(popItem(a)).toEqual(result);
        });
    });
});

describe('Given the function shiftItem', () => {
    describe('When it receives the parameters ...', () => {
        test('it should return new array', () => {
            const a = [1, 2, 3];

            const result = [2, 3];

            expect(shiftItem(a)).toEqual(result);
        });
    });
});

describe('Given the function unshiftItem', () => {
    describe('When it receives the parameters ...', () => {
        test('it should return new array', () => {
            const a = [2, 3, 4];
            const b = 1;

            const result = [1, 2, 3, 4];

            expect(unshiftItem(b, a)).toEqual(result);
        });
    });
});
describe('Given the function findItem', () => {
    describe('When it receives the parameters ...', () => {
        test('it should return new array', () => {
            const a = [1, 1, 2, 1];
            const b = [2];

            const result = [2];

            expect(findItem(a, b)).toEqual(result);
        });
    });
});
