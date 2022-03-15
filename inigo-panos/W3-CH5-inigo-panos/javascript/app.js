document.addEventListener('DOMContentLoaded', app);
export async function app() {
    let indice = 0;
    let URL_VARIABLE = `https://pokeapi.co/api/v2/pokemon/?offset=${indice}&limit=25`;
    let data = await initiatePokemon(URL_VARIABLE);

    console.log(data);
    console.log(indice);
    await pokemonNames(data);
    showIndex();

    async function initiatePokemon() {
        const resp = await fetch(URL_VARIABLE);
        return resp.json();
    }

    function pokemonNames(data) {
        let template = '';
        console.log('URL = ', URL_VARIABLE);

        // let pokeID = URL_VARIABLE.pathname.split('/')[6]; // Returns 44 in your example;

        data.results.forEach((item) => {
            template += `
            <li> <a href='../details.html?name=${item.name}'> ${item.name}</a></li>
            `;
        });
        document.querySelector('.pokemon-list').innerHTML = template;
    }

    function showIndex() {
        let template = '';
        template += `
        <p>${indice} - 1118</p>
        `;
        document.querySelector('.currentIndex').innerHTML = template;
    }

    async function buttonPrevious() {
        console.log('Index = ', indice);
        if (indice === 0) {
            indice = 0;
        } else {
            indice -= 25;
        }

        URL_VARIABLE = `https://pokeapi.co/api/v2/pokemon/?offset=${indice}&limit=25`;
        let data = await initiatePokemon(URL_VARIABLE);
        console.log(data);
        pokemonNames(data);
    }
    async function buttonNext() {
        console.log('Index = ', indice);
        if (indice >= 1100) {
            indice = 0;
        } else {
            indice += 25;
        }

        console.log(indice);
        URL_VARIABLE = `https://pokeapi.co/api/v2/pokemon/?offset=${indice}&limit=25`;
        let data = await initiatePokemon(URL_VARIABLE);
        console.log(data);
        pokemonNames(data);
        showIndex();
    }

    document
        .querySelector('#buttonPrevious')
        .addEventListener('click', buttonPrevious);

    document.querySelector('#buttonNext').addEventListener('click', buttonNext);
}
