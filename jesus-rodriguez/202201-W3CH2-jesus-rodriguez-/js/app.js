import { Header } from '../components/header.js';
import { Nav } from '../components/menu.js';
import { Heroes } from '../components/topheroes.js';
import { HeroSearch } from '../components/search-index.js';

function main() {
  const navOptions = [
    { path: './index.html', label: 'Dashboard' },
    { path: './heroes.html', label: 'Heroes' },
  ];

  const topHeroes = [
    { id: 11, name: 'Dr Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
  ];

  new Header().render('#header');
  new Nav(navOptions).render('#nav');
  new Heroes(topHeroes).render('#top-heroes');
  new HeroSearch('Hero Search').render('#hero-search');
}
document.addEventListener('DOMContentLoaded', main);
