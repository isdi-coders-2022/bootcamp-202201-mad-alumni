async function app() {
    console.log('App loaded');
    let indice = 0;
    let URL_POKEAPI = `https://pokeapi.co/api/v2/pokemon?offset=${indice}&limit=25`;
    let data = await initiatePokeApi();
    showData(data);
    paint(data);
    //manageComponent();

    async function initiatePokeApi() {
        const resp = await fetch(URL_POKEAPI, {
            mode: 'cors',
        });
        return resp.json();
    }

document.addEventListener('DOMContentLoaded', app);
