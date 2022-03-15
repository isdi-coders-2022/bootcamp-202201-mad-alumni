import { Header } from '../components/header.js';
import { Nav } from '../components/menu.js';
import { MyheroSearch } from '../components/search-heroes.js';
import { ListHeroes } from '../components/list-heroes.js';
import { arrayHeroes } from '../heroesArray.js';

function main() {
  const navOptions = [
    { path: './index.html', label: 'Dashboard' },
    { path: './heroes.html', label: 'Heroes' },
  ];

  new Header().render('#header');
  new Nav(navOptions).render('#nav');
  new MyheroSearch('Hero Search');
  new ListHeroes(arrayHeroes);
}
document.addEventListener('DOMContentLoaded', main);
