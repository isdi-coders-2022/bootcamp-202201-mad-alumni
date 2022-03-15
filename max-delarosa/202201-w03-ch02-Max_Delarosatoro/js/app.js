import { Header } from '../components/Header.js';
import { Hero } from '../components/Hero.js';
import { HeroSearch } from '../components/HeroSearch.js';
import { MyHeroes } from '../components/MyHeroes.js';
import { Nav } from '../components/Nav.js';
import { TopHeroes } from '../components/TopHeroes.js';
import { heroes } from './mock-heroes.js';

(() => {
    const main = () => {
        const navOptions = [
            { path: '/index.html', label: 'Dashboard' },
            { path: '/pages/heroes.html', label: 'Heroes' },
        ];

        if (
            !localStorage.getItem('heroes') ||
            localStorage.getItem('heroes') === '[]'
        ) {
            localStorage.setItem('heroes', JSON.stringify(heroes));
        }

        new Header();
        new Nav(navOptions);
        switch (location.pathname) {
            case '/index.html':
                new TopHeroes();
                new HeroSearch();
                break;

            case '/pages/heroes.html':
                new MyHeroes();
                break;

            case '/pages/hero.html': {
                new Hero();
                break;
            }
        }
    };

    document.addEventListener('DOMContentLoaded', main);
})();
