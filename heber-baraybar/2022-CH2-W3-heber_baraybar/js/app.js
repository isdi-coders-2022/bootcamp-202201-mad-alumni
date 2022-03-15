import { Header } from '../components/header.js';
import { Home } from '../components/home.js';
import { Heroes } from '../components/heroes.js';
import { Detail } from '../components/details.js';
// import { Menu } from '../components/menu.js';

(() => {
  const main = () => {
    new Header().render('#header');
    new Home().render('#top-heroes');
    new Heroes().render('#heroes');
    new Detail().render('#hero-details');
  };
  document.addEventListener('DOMContentLoaded', main);
})();
