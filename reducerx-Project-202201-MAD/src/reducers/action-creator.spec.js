import * as action from './action-creator';

describe('Given the actionCreator', () => {
    describe('When calling loadCocktails', () => {
        test('It gives us an action object', () => {
            expect(action.loadCocktails([{ id: 11007 }])).toBeDefined();
        });
    });
    describe('When calling loadCocktailsFav', () => {
        test('It gives us an action object', () => {
            expect(action.loadCocktailsFav([{ id: 11007 }])).toBeDefined();
        });
    });
    describe('When calling addCocktail', () => {
        test('It gives us an action object', () => {
            expect(action.addCocktail({ id: 11007 })).toBeDefined();
        });
    });
    describe('When calling removeCocktail', () => {
        test('It gives us an action object', () => {
            expect(action.removeCocktail({ id: 11007 })).toBeDefined();
        });
    });
});
