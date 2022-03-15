export async function app() {
    let index = 0;
    let limit;
    let URL_POKEMON = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${index}`;
    let dataPokemon = await initiatePokemon(URL_POKEMON);
    let pokemon = dataPokemon[dataPokemon.length - 1].id;
    showHeader();
    showList(dataPokemon);
    showButton();

    async function initiatePokemon() {
        const response = await fetch(URL_POKEMON);
        return response.json();
        /*const pokemonDetails = await Promise.all(
        dataPokemon.map(async (pokemon) => {
            const response = await fetch(pokemon.sprites);
            return response.json();
        })
    );*/
    }

    function showHeader() {
        let template = '';
        template += `<h1>Pokémon</h1>
                        <div class="pokemon-logo"><img src="./pokemon-logo.svg" alt="Pokemon Logo"></img></div>
                        <nav><ul class="pokemon__navigation">
                            <li><a class="pokemon__navigation-home" href="../public/index.html">Home</a></li>
                            <li><a class="pokemon__navigation-favourites"href="../public/favourites.html">Favourites</a></li>
                        </ul></nav>`;
        template += `<div class="pokemon-showing">SHOWING ${pokemon} OF 1118</div>`;

        document.querySelector('.header').innerHTML += template;
    }

    function showList(dataPokemon) {
        let template = '';

        dataPokemon.results.forEach((item) => {
            // console.log(dataPokemon);
            template += `
                <li>
                    <a class ="pokemon-list__name" href= "../public/details.html?id=${item.url}">${item.name} </a>
                </li>`;
        });

        document.querySelector('.pokemon-list').innerHTML = template;
    }

    function showButton() {
        let template = '';
        template += `
                           <button class="previous-page">Previous Page</button>
                           <button class="next-page">Next Page</button>
                      `;
        document.querySelector('.button-navigation').innerHTML = template;
    }

    async function buttonNext() {
        URL_POKEMON = dataPokemon.next;
        dataPokemon = await initiatePokemon(URL_POKEMON);
        showList(dataPokemon);
    }
    document.querySelector('.next-page').addEventListener('click', buttonNext);

    async function buttonPrevious() {
        URL_POKEMON = dataPokemon.previous;
        dataPokemon = await initiatePokemon(URL_POKEMON);
        showList(dataPokemon);
    }
    document
        .querySelector('.previous-page')
        .addEventListener('click', buttonPrevious);
}
document.addEventListener('DOMContentLoaded', app);
