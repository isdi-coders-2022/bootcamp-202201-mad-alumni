import { Heronav } from '../components/heronav.js';
import { Nav } from '../components/nav.js';
import { Search } from '../components/search.js';

(() => {
    const app = () => {
        const optionsNav = [
            { path: '../index.html', label: 'Home' },
            { path: '../pages/heroes-list.html', label: 'Dashboard' },
        ];
        const oHeroNav = [
            { path: '../pages/heroes/magenta.html', label: 'Magenta' },
            { path: '../pages/heroes/bombardo.html', label: 'Bombardo' },
            { path: '../pages/heroes/celeritas.html', label: 'Celeritas' },
            { path: '../pages/heroes/narco.html', label: 'Narco' },
        ];
        new Nav(optionsNav).render('#nav');
        new Heronav(oHeroNav).render('#heronav');
        new Search().render('#search');
    };
    document.addEventListener('DOMContentLoaded', app);
})();
