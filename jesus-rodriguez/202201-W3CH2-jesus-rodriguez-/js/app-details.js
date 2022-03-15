import { Header } from '../components/header.js';
import { Nav } from '../components/menu.js';
import { arrayHeroes } from '../heroesArray.js';
import { DetailsHeroes } from '../components/details.js';

function main() {
  const navOptions = [
    { path: './index.html', label: 'Dashboard' },
    { path: './heroes.html', label: 'Heroes' },
  ];

  new Header().render('#header');
  new Nav(navOptions).render('#nav');
  new DetailsHeroes(arrayHeroes).render('#details');
}
document.addEventListener('DOMContentLoaded', main);
