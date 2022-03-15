import { ListPokemon } from '../components/list-pokemon.js';
import { Header } from '../components/header.js';

async function main() {
  new Header();
  new ListPokemon();
}
document.addEventListener('DOMContentLoaded', main);
