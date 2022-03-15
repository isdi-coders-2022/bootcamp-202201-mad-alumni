import * as action from './action-creator';
import { CocktailsReducer } from './reducers';

const state = {
    store: {
        cocktails: [],
        favorites: [],
    },
};
const cocktailList = {
    store: {
        cocktails: [
            {
                id: 16108,
            },
        ],
        favorites: [],
    },
};

const resultState = {
    store: {
        cocktails: [
            {
                id: 16108,
            },
        ],
        favorites: [],
    },
};
const resultLoadState = {
    store: {
        cocktails: [],
        favorites: [
            {
                id: 16108,
            },
        ],
    },
};

describe('Given load Cocktail', () => {
    it('Should return initial state', () => {
        expect(
            CocktailsReducer(state, action.loadCocktails(cocktailList))
        ).toEqual(resultState);
    });
});
describe('Given load Favorites', () => {
    it('Should return initial state', () => {
        expect(
            CocktailsReducer(state, action.loadCocktailsFav(cocktailList))
        ).toEqual(resultLoadState);
    });
});
describe('Given add', () => {
    it('Should return initial state', () => {
        const addCocktailFav = {
            store: {
                cocktails: [],
                favorites: [
                    {
                        id: 16108,
                    },
                ],
            },
        };
        expect(
            CocktailsReducer(state, action.addCocktail(addCocktailFav))
        ).toEqual(resultLoadState);
    });
});
describe('Given remove function', () => {
    it('Should return initial state', () => {
        const initialState = {
            store: {
                cocktails: [],
                favorites: [
                    {
                        id: 16108,
                    },
                ],
            },
        };

        expect(
            CocktailsReducer(
                initialState,
                action.removeCocktail({
                    id: 16108,
                })
            )
        ).toEqual(state);
    });
});

describe('Given default', () => {
    it('Should return initial state', () => {
        const initialState = {
            store: {
                cocktails: [],
                favorites: [
                    {
                        id: 1,
                    },
                ],
            },
        };
        expect(CocktailsReducer(initialState, '155 Belmont')).toEqual(
            initialState
        );
    });
});
