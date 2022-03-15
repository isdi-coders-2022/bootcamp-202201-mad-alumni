async function app() {
  let index = 0;
  let URL = `https://pokeapi.co/api/v2/pokemon/?offset=${index}&limit=25`;
  let data = await pokemonResult(URL);

  console.log(data);
  await pokemonList(data);

  async function pokemonResult() {
    const response = await fetch(URL);
    return response.json();
  }

  async function pokemonList(data) {
    let template = '';
    data.results.forEach((item) => {
      template += `
      <li><a href="../details.html?name=${item.name}"> ${item.name}</a></li>`;
    });
    document.querySelector('.pokemon-list').innerHTML = template;
  }
  function indexList() {
    let template = `
      <h2>Showing: ${index} of 1118 pokemon</h2>`;

    document.querySelector('#showed-pokemon').innerHTML = template;
  }

  indexList();
  async function buttonBack() {
    console.log('Index = ' + index);
    if (index === 0) {
      index = 0;
    } else {
      index -= 25;
    }

    URL = `https://pokeapi.co/api/v2/pokemon/?offset=${index}&limit=25`;
    let data = await pokemonResult(URL);
    pokemonList(data);
    indexList();
  }

  async function buttonNext() {
    console.log('Index = ' + index);
    if (index === 1100) {
      index = 0;
    } else {
      index += 25;
    }

    URL = `https://pokeapi.co/api/v2/pokemon/?offset=${index}&limit=25`;
    let data = await pokemonResult(URL);
    console.log(data);
    pokemonList(data);
    indexList();
  }

  document
    .querySelector('#button-previous')
    .addEventListener('click', buttonBack);
  document.querySelector('#button-next').addEventListener('click', buttonNext);
}
document.addEventListener('DOMContentLoaded', app);
