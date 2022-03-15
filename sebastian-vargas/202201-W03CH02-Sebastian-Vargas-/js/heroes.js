import { Header } from '../components/header.js';

(() => {
    const main = () => {
        // const options = [
        //     { path: './index.html', label: 'Home' },
        // { path: './heroes.html', label: 'ToDo' },
        // ];

        new Header().render('#header');
        // new Footer('Pepito').render('#footer');
    };
    document.addEventListener('DOMContentLoaded', main);
})();
