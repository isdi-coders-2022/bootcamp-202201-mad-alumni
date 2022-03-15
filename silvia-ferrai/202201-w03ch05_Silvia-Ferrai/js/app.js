import { Header } from '../components/header.js';
import { Home } from '../components/home.js';
import { Details } from '../components/details.js';
import { Favorite } from '../components/favorite.js';

async function app() {
    new Header();

    if (window.location.pathname === '/web/index.html') {
        new Home();
    } else if (window.location.pathname === '/web/details.html') {
        new Details();
    } else if (window.location.pathname === '/web/favorite.html') {
        new Favorite();
    }
}

document.addEventListener('DOMContentLoaded', app);
