/**
 * @jest-environment jsdom
 */

import { screen } from '@testing-library/dom';
import { App } from './apicall.js';
import { ShowHeader } from './apicall.js';
import { ShowList } from './apicall.js';

describe('Given the component showHeader', () => {
    describe('When it will be instantiated ', () => {
        document.body.innerHTML = "<div class='header'></div>";
    });

    test('Then the menu should be visible for the user', () => {
        expect(screen.findByText(/Home/i)).toBeTruthy();
        expect(screen.findByText(/Favorites/i)).toBeTruthy();
    });
});

describe('Given the component showList', () => {
    describe('When it will be instantiated ', () => {
        document.body.innerHTML = "<div class='pokemon-list'></div>";
    });
    test('Then the title "Pokemon" should be visible for the user', () => {
        expect(screen.findByText(/Pokemon/i)).toBeTruthy();
    });
});
describe('Given the component showButton', () => {
    describe('When it will be instantiated ', () => {
        document.body.innerHTML = "<div class='button-navigation'></div>";
    });
    test('Then the menu should be visible for the user', () => {
        expect(screen.findByText(/Previous Page/i)).toBeTruthy();
        expect(screen.findByText(/Next Page/i)).toBeTruthy();
    });
});
