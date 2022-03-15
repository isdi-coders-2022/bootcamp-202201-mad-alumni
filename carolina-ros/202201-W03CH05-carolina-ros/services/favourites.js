async function app() {
    let fetchId = [];
    let URL_POKEMON_LOCAL = `http://localhost:3000/Pokemon/`;
    let dataPokemon = await initiatePokemon(URL_POKEMON_LOCAL);
    showHeader();
    showList(dataPokemon);
    showButton();

    async function initiatePokemon() {
        const response = await fetch(URL_POKEMON_LOCAL);
        return response.json();
    }

    function showHeader() {
        let template = '';
        template += `<h1>Pokémon</h1>
                        <div class="pokemon-logo"><img src="./pokemon-logo.svg" alt="Pokemon Logo"></img></div>
                        <nav><ul class="pokemon__navigation">
                           <li><a class="pokemon__navigation-home" href="../public/index.html">Home</a></li>
                            <li><a class="pokemon__navigation-favourites"href="../public/favourites.html">Favourites</a></li>
                        </ul></nav>`;

        document.querySelector('.header').innerHTML += template;
    }

    function showList(dataPokemon) {
        let template = '';

        dataPokemon.forEach((item, index) => {
            template += `
                <li>
                <img src=${item.image}>
                    <a class="pokemon-delete__name" href= "../public/details.html?id=${item.url}">${item.name} </a>
                </li>`;
            template += `

                    <button class="delete-favourite">Delete Favourite</button>
                `;

            fetchId.push({ name: item.name, id: item.id, index: index });
        });
        console.log(fetchId);
        let idDelete = '';
        document.querySelector('.pokemon-delete').innerHTML = template;
        let buttonDelete = document.querySelectorAll('.delete-favourite');
        buttonDelete.forEach(function (e, i) {
            e.addEventListener('click', () => {
                if (fetchId[i].index === i) {
                    idDelete = fetchId[i].id;
                    console.log(idDelete);
                }

                fetch('http://localhost:3000/Pokemon/' + idDelete, {
                    method: 'DELETE',
                })
                    .then((response) => {
                        return response.json();
                    })
                    .then((data) => console.log(data))
                    .catch((error) => {
                        console.log('Error:', error);
                    });
                console.log('DELETEE', index);
            });
        });
    }
}

document.addEventListener('DOMContentLoaded', app);
