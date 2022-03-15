async function getNameOfPokemon() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const nameOfPokemon = urlParams.get('name');
  console.log(nameOfPokemon);
  let detailOfPokemon = await getDetailOfPokemon();

  async function getDetailOfPokemon() {
    const url = `https://pokeapi.co/api/v2/pokemon/${nameOfPokemon}`;
    const resp = await fetch(url);
    const data = await resp.json();
    return data;
  }
  console.log(detailOfPokemon);
  let sprite = detailOfPokemon.sprites.front_shiny;
  console.log(sprite);

  async function showingDetailsPokemon(data) {
    let template = '';
    let sprite = detailOfPokemon.sprites.front_shiny;
    let name = nameOfPokemon;
    let types = detailOfPokemon.types;
    template += `
       <li><img src="${sprite}" /></li>
        <li>${name}</li>
        
      `;
    types.forEach((item) => {
      template += `<li>${item.type.name}</li>`;
    });

    document.querySelector('#details-pokemon').innerHTML = template;
  }
  showingDetailsPokemon(detailOfPokemon);
  const favorite = {
    name: nameOfPokemon,
    img: detailOfPokemon.sprites.front_shiny,
  };
  const sendDataToJson = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(favorite),
  };

  function updateJson() {
    let postData = fetch('http://localhost:3000/Pokemon', sendDataToJson)
      .then((data) => {
        return data.json();
      })
      .then((favorite) => {
        console.log(favorite);
      });
  }

  document
    .querySelector('.button-favourite-pokemon')
    .addEventListener('click', updateJson);
}
document.addEventListener('DOMContentLoaded', getNameOfPokemon);
