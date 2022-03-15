import { Dashboard } from '../components/dashboard.js';
import { Header } from '../components/header.js';

(() => {
    const main = () => {
        new Header().renderI('#header');
        new Dashboard().renderI('.heroes-list');
    };

    document.addEventListener('DOMContentLoaded', main);
})();
