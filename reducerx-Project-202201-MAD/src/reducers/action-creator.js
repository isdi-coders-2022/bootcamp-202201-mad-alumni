import { cocktailActionTypes } from './action-type';

export const loadCocktails = (cocktails) => ({
    type: cocktailActionTypes.load,
    payload: cocktails,
});

export const loadCocktailsFav = (favorites) => ({
    type: cocktailActionTypes.loadFav,
    payload: favorites,
});

export const addCocktail = (favorites) => ({
    type: cocktailActionTypes.add,
    favorites,
});

// will be use in future
// export const toggleCocktail = (cocktail) => ({
//     type: cocktailActionTypes.toggle,
//     cocktail,
// });

export const removeCocktail = (favorites) => ({
    type: cocktailActionTypes.remove,
    payload: favorites,
});
