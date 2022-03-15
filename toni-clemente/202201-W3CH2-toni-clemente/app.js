import { Header } from './component/header.js';
import { Topheroes } from './component/topheroes.js';
import { Herosearch } from './component/herosearch.js';
import { Heroeslist } from './component/heroeslist.js';
import { Newheroeform } from './component/newheroeform.js';

(() => {
    const main = () => {
        new Header().render('#header');
        new Newheroeform().render('#newheroeform');
        //new Herosearch().render('#herosearch');
        new Heroeslist().render('#heroeslist');
    };
    document.addEventListener('DOMContentLoaded', main);
})();
