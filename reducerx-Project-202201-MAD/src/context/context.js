/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useEffect, useReducer } from 'react';
import { CocktailsReducer } from '../reducers/reducers';
import * as api from '../services/api';
import * as actions from '../reducers/action-creator';

export const Context = createContext({
    store: {
        cocktails: [],
        favorites: [],
        cocktail: [],
    },
    addCocktail: () => {},
    deleteCocktail: () => {},
    updateCocktail: () => {},
});

export function ContextProvider({ children }) {
    const [store, dispatch] = useReducer(CocktailsReducer, []);

    useEffect(() => {
        api.getAll()
            .then((resp) => dispatch(actions.loadCocktails(resp.data.drinks)))
            .catch((error) => console.log(error));
    }, []);

    useEffect(() => {
        api.getAllFav()
            .then((resp) => dispatch(actions.loadCocktailsFav(resp.data)))
            .catch((error) => console.log(error));
    }, []);

    const addCocktail = (newCocktail) => {
        api.setFav(newCocktail).then((resp) => {
            dispatch(actions.addCocktail(resp.data));
        });
    };

    // // const isFav = (id) => {};
    // const updateCocktail = (cocktail) => {
    //     api.update(cocktail).then((resp) => {
    //         dispatch(actions.toggleCocktail(resp.data));
    //     });
    // };

    const deleteCocktail = (cocktail) => {
        api.removeFav(cocktail).then((resp) => {
            if (resp.status === 200) {
                dispatch(actions.removeCocktail(cocktail));
            }
        });
    };

    const contextValue = {
        store,
        addCocktail,
        deleteCocktail,
        // updateCocktail,
    };
    return <Context.Provider value={contextValue}>{children}</Context.Provider>;
}
