async function getPokemonName() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const pokemonName = urlParams.get('name');
    console.log(pokemonName);
    let pokemonDetails = await getPokemonDetails();
    let pokeDet = {};

    async function getPokemonDetails() {
        const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
        const resp = await fetch(url);
        const data = await resp.json();
        return data;
    }
    console.log(pokemonDetails);

    function pokemonNames(pokemonDetails) {
        let template = '';
        let sprite = pokemonDetails.sprites.front_shiny;
        let name = pokemonName;
        let types = pokemonDetails.types;

        pokeDet = { sprite, name };

        template += `
            <li>${name}</li>
            <li><img src="${sprite}" alt="" /></li>`;

        types.forEach((item) => {
            template += `<li>${item.type.name}</li>`;
        });

        document.querySelector('.pokemon-details').innerHTML = template;
    }

    const favorite = {
        name: pokemonName,
        img: pokemonDetails.sprites.front_shiny,
    };
    const enviarDatosAJson = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(favorite),
    };

    function updateJson() {
        fetch('http://localhost:3000/Pokemon', enviarDatosAJson)
            .then((data) => {
                return data.json();
            })
            .then((favorite) => {
                console.log(favorite);
            });
    }

    document
        .querySelector('#buttonFavorites')
        .addEventListener('click', updateJson);

    pokemonNames(pokemonDetails);
}

document.addEventListener('DOMContentLoaded', getPokemonName);
