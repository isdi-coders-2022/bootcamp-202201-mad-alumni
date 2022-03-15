import { Header } from './components/header.js';
import { PokemonList } from './components/List.js';

async function app() {
    new Header();
    new PokemonList();
}

document.addEventListener('DOMContentLoaded', app);
