async function app() {
    let url_pokemon = window.location.href.split('=')[1];
    let URL_POKEMON = `${url_pokemon}`;
    let dataPokemon = await initiatePokemon(URL_POKEMON, {
        mode: 'cors',
    });
    console.log(window.location.search.split('=')[1]);
    showHeader();
    showList(dataPokemon);
    addPokemon();

    async function initiatePokemon() {
        const response = await fetch(URL_POKEMON);
        return response.json();
    }

    function showHeader() {
        let template = '';
        template += `<h1>Pokémon</h1>
                        <div class="pokemon-logo"><img src="./pokemon-logo.svg" alt="Pokemon Logo"></img></div>
                        <nav><ul class="pokemon__navigation">
                            <li><a class="pokemon__navigation-home" href="../public/index.html">Home</a></li>
                            <li><a class="pokemon__navigation-favourites" href="../public/favourites.html">Favourites</a></li>
                        </ul></nav>`;

        document.querySelector('.header').innerHTML += template;
    }

    function showList() {
        let template = '';
        template += `
        <h2>${dataPokemon.name}</h2>
        <div class="pokemon-images">
        <img class="pokemon-image" src="${dataPokemon.sprites.front_default}" alt="Pokemon shiny"></img>
        <img class="pokemon-image" src="${dataPokemon.sprites.front_shiny}" alt="Pokemon shiny"></img>
        </div>`;

        template += `
               <div class="pokemon-description">
                 <div class="characteristic weight">Weight: ${dataPokemon.weight}</div>
                 <div class="characteristic height">Height: ${dataPokemon.height}</div>
                 <div class="characteristic species">Species: ${dataPokemon.species.name}</div>
                 <div class="characteristic moves">Moves: ${dataPokemon.moves[0].move.name}</div>
               </div>`;

        template += `
        <div class="button-add">
                    <button class="add-favourite">Add Favourite</button>

               </div>`;

        document.querySelector('.pokemon-detail').innerHTML = template;
    }

    async function addPokemon() {
        URL_POKEMON = dataPokemon.name;
        dataPokemon = await initiatePokemon(URL_POKEMON);

        showList(dataPokemon);
    }
    document
        .querySelector('.add-favourite')
        .addEventListener('click', handleAdd);

    function handleAdd() {
        const dataInfo = {};
        dataInfo.id = dataPokemon.id;
        dataInfo.name = dataPokemon.name;
        dataInfo.url = url_pokemon;
        dataInfo.image = dataPokemon.sprites.front_default;
        console.log(dataInfo);

        fetch('http://localhost:3000/Pokemon/', {
            method: 'POST',
            body: JSON.stringify(dataInfo),
            headers: new Headers({
                'Content-Type': 'application/json',
            }),
            mode: 'cors',
        })
            .then((response) => {
                console.log(response);
                return response.json();
            })
            .then((data) => console.log(data))
            .catch((error) => {
                console.log('Error:', error);
            });
    }
}
document.addEventListener('DOMContentLoaded', app);
