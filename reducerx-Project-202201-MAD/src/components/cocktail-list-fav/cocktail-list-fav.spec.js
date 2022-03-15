import { screen, render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { CocktailListFav } from './cocktail-list-fav';
import { Context } from '../../context/context';
import { FavoritesIcon } from '../favorites-icon/favorites-icon';

const state = {
    store: {
        favorites: [
            {
                id: '11007',
                idDrink: '11007',
                strDrink: 'Margarita',
            },
        ],
    },
};

describe('CocktailListFav', () => {
    render(
        <BrowserRouter>
            <Context.Provider value={state}>
                <CocktailListFav />
            </Context.Provider>
        </BrowserRouter>
    );

    test('CocktailListFav should be rendered', () => {
        expect(screen.getAllByText(/Margarita/)).toHaveLength(1);
    });

    test('CocktailListFav tittle should be rendered', () => {
        // eslint-disable-next-line testing-library/await-async-query
        expect(screen.findAllByAltText(/My Cocktails/)).toBeDefined();
    });
    test('CocktailListFav Loading message should be rendered', () => {
        // eslint-disable-next-line testing-library/await-async-query
        expect(screen.findAllByAltText(/Loading/)).toBeDefined();
    });

    test('FavoritesIcon module is rendered', () => {
        render(
            <BrowserRouter>
                <FavoritesIcon />
            </BrowserRouter>
        );

        // eslint-disable-next-line testing-library/await-async-query
        expect(screen.findAllByAltText(/⭐️/)).toBeDefined();
    });
});
