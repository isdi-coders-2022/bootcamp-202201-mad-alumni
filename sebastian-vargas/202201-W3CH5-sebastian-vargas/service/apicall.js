import { Header } from '../components/header.js';
import { List } from '../components/list.js';
import { Button } from '../components/button.js';

async function app() {
  console.log('App loaded');
  let index = 0;
  const URL_POKEMON = `https://pokeapi.co/api/v2/pokemon?&limit=25&offset=${index}`;
  const data = await getList();

  console.log(data);

  console.log(data.results[0].url);
  console.log(data.results[1].url);
  console.log(data.results[0].url);

  async function getList() {
    const resp = await fetch(URL_POKEMON);
    return resp.json();
  }

  (() => {
    new Header().render('#header');
    new List(data).render('#list');
    new Button().render('.button');
    new Button().prevButton('#prevButton');
    new Button().nextButton(data);
  })();
}

document.addEventListener('DOMContentLoaded', app);
