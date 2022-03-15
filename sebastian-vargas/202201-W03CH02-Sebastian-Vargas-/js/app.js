import { NavBar } from '../components/NavBar.js';
import { SearchBar } from '../components/SearchBar.js';
import { TopHeroes } from '../components/TopHeroes.js';

(() => {
    const main = () => {
        // const options = [
        //     { path: './index.html', label: 'Home' },
        // { path: './heroes.html', label: 'ToDo' },
        // ];

        new NavBar().render('#header');
        new TopHeroes().render('#main');
        new SearchBar().render('#label');
        
    };
    document.addEventListener('DOMContentLoaded', main);
})();
