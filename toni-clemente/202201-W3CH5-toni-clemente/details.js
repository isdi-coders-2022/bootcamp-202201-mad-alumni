async function app() {
    console.log('App loaded');
    const pokemonName = window.location.search.split('=')[1];
    console.log(pokemonName);
    let URL_POKEAPI = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
    let data = await initiatePokeApi();
    showData(data);
    paint(data);

    async function initiatePokeApi() {
        const resp = await fetch(URL_POKEAPI, {
            mode: 'cors',
        });
        return resp.json();
    }

    function showData(data) {
        console.log(data);
    }

    function paint(data) {
        let template = `${data.species.name}
        <img src="${data.sprites.front_default}">
        `;
        document.querySelector('.pokemon-details').innerHTML = template;
    }

    //añade pokemon
    async function addFav(data) {
        const pokemonName = window.location.search.split('=')[1];
        console.log(pokemonName);
        URL_POKEAPI = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
        data = await initiatePokeApi();
        let arrPok = {
            id: data.id,
            name: data.species.name,
            image: data.sprites.front_default,
        };
        console.log(arrPok);
        //handleState(arrPok);
        console.log('App loaded');
        URL_POKEAPI = `http://localhost:3000/pokemons/`;
        data = await initiatePokeApi();
        showData(data);
        //const id = ev.target.dataset.id;
        //console.log(id);
        //const index = data.findIndex((item) => item.id === +id);
        //console.log(index);
        // let arrPok = {
        //     id: data.id,
        //     name: data.species.name,
        //     image: data.sprites.front_default,
        // };
        let body = arrPok;
        console.log(body);
        fetch(URL_POKEAPI, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: new Headers({
                'Content-Type': 'application/json',
            }),
            mode: 'cors',
        })
            .then((resp) => {
                console.log(resp);
                return resp.json();
            })
            .then((data) => console.log(data));
    }

    async function delFav(data) {
        const pokemonName = window.location.search.split('=')[1];
        console.log(pokemonName);
        URL_POKEAPI = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
        data = await initiatePokeApi();
        let arrPok = {
            id: data.id,
            name: data.species.name,
            image: data.sprites.front_default,
        };
        console.log(arrPok);
        //handleState(arrPok);
        console.log('App loaded');
        URL_POKEAPI = `http://localhost:3000/pokemons/`;
        data = await initiatePokeApi();
        showData(data);
        //const id = ev.target.dataset.id;
        //console.log(id);
        //const index = data.findIndex((item) => item.id === +id);
        //console.log(index);
        // let arrPok = {
        //     id: data.id,
        //     name: data.species.name,
        //     image: data.sprites.front_default,
        // };
        let body = arrPok;
        console.log(body);
        const id = arrPok.id;
        console.log(id);
        fetch(URL_POKEAPI + id, {
            method: 'DELETE',
            body: JSON.stringify(body),
            headers: new Headers({
                'Content-Type': 'application/json',
            }),
            mode: 'cors',
        })
            .then((resp) => {
                console.log(resp);
                return resp.json();
            })
            .then((data) => console.log(data));
    }

    document.querySelector('#Add').addEventListener('click', addFav);
    document.querySelector('#Delete').addEventListener('click', delFav);
}
document.addEventListener('DOMContentLoaded', app);
