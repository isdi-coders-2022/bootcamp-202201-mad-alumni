async function app() {
    console.log('App loaded');
    let indice = 0;
    let URL_POKEAPI = `https://pokeapi.co/api/v2/pokemon?offset=${indice}&limit=25`;
    let data = await initiatePokeApi();
    showData(data);
    paint(data);
    showIndex(indice);
    //manageComponent();

    async function initiatePokeApi() {
        const resp = await fetch(URL_POKEAPI, {
            mode: 'cors',
        });
        return resp.json();
    }

    function showData(data) {
        console.log(data);
    }

    async function showIndex(indice) {
        if (indice < 0) {
            indice = 0;
        } else if (indice > 1118) {
            indice = 1118;
        }
        let indicepost = Number(indice) + 25;
        if (indicepost > 1118) {
            indicepost = 1118;
        }
        let template = '';
        template += `
        <p>${indice}-${indicepost} / 1118 </p>`;
        document.querySelector('#Indice').innerHTML = template;
    }

    async function paint(data) {
        let template = '';
        data.results.forEach((item) => {
            //const id = item.url.split('/')[6]; //sacamos la id de la url de cada pokemon
            //console.log(id);
            // console.log(item);
            template += `
        <li class="pokemon-class"><a href="details.html?id=${item.name}">${item.name}</a></li>`;
        });
        document.querySelector('.pokemon-list').innerHTML = template;
    }

    // function manageComponent() {
    //     const allPokemons = document.querySelectorAll('.pokemon-class');
    //     console.log(allPokemons);
    //     allPokemons.forEach((pokemonNode) => {
    //         console.log(pokemonNode);
    //     });
    // }

    async function buttonBack() {
        console.log(`Index =`, indice);
        indice -= 25;
        URL_POKEAPI = `https://pokeapi.co/api/v2/pokemon?offset=${indice}&limit=25`;
        let data = await initiatePokeApi();
        showData(data);
        paint(data);
        showIndex(indice);
    }

    async function buttonNext() {
        console.log(`Index =`, indice);
        indice += 25;
        URL_POKEAPI = `https://pokeapi.co/api/v2/pokemon?offset=${indice}&limit=25`;
        let data = await initiatePokeApi();
        showData(data);
        paint(data);
        showIndex(indice);
    }

    // function render() {
    //     showData(
    //         data.filter((item) => {
    //             return !item.watched;
    //         }),
    //         '.series-pending'
    //     );
    //     showData(
    //         data.filter((item) => {
    //             return item.watched;
    //         }),
    //         '.series-watched'
    //     );
    //     document
    //         .querySelectorAll('.serie__poster')
    //         .forEach((poster) => poster.addEventListener('click', handleState));
    // }

    // function handleState(ev) {
    //     const id = ev.target.dataset.id;
    //     console.log(id);
    //     const index = data.findIndex((item) => item.id === +id);
    //     console.log(index);
    //     data[index].watched = !data[index].watched;
    //     const body = {
    //         watched: data[index].watched,
    //     };
    //     fetch(URL_SERIES + id, {
    //         method: 'PATCH',
    //         body: JSON.stringify(body),
    //         headers: new Headers({
    //             'Content-Type': 'application/json',
    //         }),
    //         mode: 'cors',
    //     })
    //         .then((resp) => {
    //             console.log(resp);
    //             return resp.json();
    //         })
    //         .then((data) => console.log(data));
    //     render();
    // }
    document.querySelector('#ButtonBack').addEventListener('click', buttonBack);
    document.querySelector('#ButtonNext').addEventListener('click', buttonNext);
}

document.addEventListener('DOMContentLoaded', app);

//data-id="${item.index}"
