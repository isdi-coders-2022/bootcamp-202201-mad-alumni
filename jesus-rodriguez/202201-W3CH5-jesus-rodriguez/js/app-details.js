import { Header } from '../components/header.js';
import { PrintCard } from '../components/card-details-pokemon.js';
import { ButtonReturn } from '../components/button-return.js';

async function main() {
  new Header();
  new PrintCard();
  new ButtonReturn();
}
document.addEventListener('DOMContentLoaded', main);
