import { fetchData } from './fetch.js';
import { Component } from './render.js';

export class PokemonList extends Component {
    template;
    constructor() {
        super();
        this.URL = `https://pokeapi.co/api/v2/pokemon/?offset=0&limit=27`;
        this.reRender();
        this.generateDetails();
    }
    async reRender() {
        this.data = await this.generateData(this.URL);
        this.details = await this.generateDetails();
        this.template = this.createTemplate();
        this.render('#pokelist');
        this.manageComponent();
    }

    async generateData(url) {
        return await fetchData(url);
    }
    async generateDetails() {
        this.data = await this.generateData(this.URL);
        return await Promise.all(
            this.data.results.map(async (pokemon) => {
                const response = await fetch(pokemon.url);
                const data = await response.json();
                return data;
            })
        );
    }

    createTemplate() {
        this.template = '';
        this.template += `<ul class= "pokecontainer">`;
        this.details.forEach((item) => {
            this.template += `<li><a class="button" href="../details.html?name=${item.name}">${item.name}</a><img src="${item.sprites.front_shiny}" alt="none" /><li>`;
        });
        this.template += `</ul><div class= "button__container">
        <button class="button button-prev">prev</button>
        <button class="button button-next">next</button>
        </div>`;
        return this.template;
    }
    manageComponent() {
        document.querySelector('.button-prev').addEventListener('click', () => {
            this.URL = this.data.previous;
            this.reRender();
        });

        document
            .querySelector('.button-next')
            .addEventListener('click', async () => {
                this.URL = this.data.next;
                this.reRender();
            });
    }
}
