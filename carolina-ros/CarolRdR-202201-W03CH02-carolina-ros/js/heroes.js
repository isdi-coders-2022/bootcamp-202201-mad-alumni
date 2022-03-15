import { Header } from '../components/header.js';
import { HeroesList } from '../components/heroes-list.js';

(() => {
    const app = () => {
        new Header().renderInner('#header');
        new HeroesList().renderInner('#heroes-list');
    };

    document.addEventListener('DOMContentLoaded', app);
})();
