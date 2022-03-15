import { Header } from '../components/header.js';
import { ButtonReturn } from '../components/button-return.js';
import { MyPokemon } from '../components/my-pokemon.js';

async function main() {
  new Header();
  new MyPokemon();
  new ButtonReturn();
}
document.addEventListener('DOMContentLoaded', main);
