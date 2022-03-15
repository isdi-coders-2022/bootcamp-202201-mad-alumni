import { Header } from '../components/header.js';
import { Heroes } from '../components/heroes.js';

(() => {
    const main = () => {
        new Header().renderI('#header');
        new Heroes().renderI('.heroes');
    };

    document.addEventListener('DOMContentLoaded', main);
})();
