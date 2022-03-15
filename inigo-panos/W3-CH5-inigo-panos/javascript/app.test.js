/**
 * @jest-environment jsdom
 */

import { queryByText, screen } from '@testing-library/dom';
import { getDataFromApi } from './apiRequest.js';
import { app } from './app.js';
import { pokemonNames } from './app.js';

describe('Given the function pokemonNames of app', () => {
    describe('When calling the pokemonNames function', () => {
        const pokemonNamesFunction = jest.fn();
        const app = () => pokemonNamesFunction();

        test('pokemonNames should be called', () => {
            app();
            expect(pokemonNamesFunction).toHaveBeenCalled();
        });
    });
});

describe('Given the function pokemonNames', () => {
    describe('When getting names from api', () => {
        const pokemonNamesFunction = jest.fn();
        const app = () => pokemonNamesFunction();

        test('bulbasaur should be rendered', () => {
            app();
            expect(screen.queryByText(' bulbasaur'));
            expect(screen.queryByText(' ivysaur'));
            expect(screen.queryByAltText('venusaur'));
        });
    });
});
