import { Header } from '../components/header.js';
import { List } from '../components/list.js';
import { Button } from '../components/button.js';

async function app() {
  const pokemonName = window.location.search.split('=')[1];
  console.log(pokemonName);
  let URL_POKEMON = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;

  const data = await getList();

  console.log(data);

  async function getList() {
    const resp = await fetch(URL_POKEMON);
    return resp.json();
  }

  (() => {
    new Header().render('#header');
    new List(data).render('#list');
    new Button().render('#button');
  })();
}

document.addEventListener('DOMContentLoaded', app);
