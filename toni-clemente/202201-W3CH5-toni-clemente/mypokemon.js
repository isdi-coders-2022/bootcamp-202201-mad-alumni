async function app() {
    console.log('App loaded');
    let URL_POKEAPI = `http://localhost:3000/pokemons`;
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

    async function paint(data) {
        let template = '';
        data.forEach((item) => {
            console.log(item.id);
            template += `
            <div>${item.name}</div>
            <div><img src="${item.image}"></div>     `;
        });
        document.querySelector('.my-pokemon').innerHTML = template;
    }
}
document.addEventListener('DOMContentLoaded', app);
