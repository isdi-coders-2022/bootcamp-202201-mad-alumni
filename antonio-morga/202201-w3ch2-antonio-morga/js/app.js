/* eslint-disable no-restricted-globals */
import { Dashboard } from '../components/dashboard.js';
import { Detail } from '../components/detail.js';
import { HeroSearch } from '../components/hero-search.js';
import { Heroes } from '../components/heroes.js';
import { Navbar } from '../components/navbar.js';

import { HEROES } from '../heroesMock.js';

(() => {
    const app = () => {
        if (!localStorage.getItem('Heroes'))
            localStorage.setItem('Heroes', JSON.stringify(HEROES));
        const HeroesArray = JSON.parse(localStorage.getItem('Heroes'));
        new Navbar();
        switch (location.pathname) {
            case '/index.html':
                new Dashboard(HeroesArray);
                new HeroSearch();
                break;

            case '/detail.html':
                new Detail();
                break;

            case '/heroes.html':
                new Heroes(HeroesArray);
                break;
            default:
                break;
        }
    };

    document.addEventListener('DOMContentLoaded', app);
})();
