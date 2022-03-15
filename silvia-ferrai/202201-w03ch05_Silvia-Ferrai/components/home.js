import { initiatePokemon } from '../service/service-api.js';
import { Component } from './component.js';

export class Home extends Component {
    template;
    constructor() {
        super();
        this.fetchUrl = 'https://pokeapi.co/api/v2/pokemon?limit=25&offset=0';
        this.data;
        this.template = '';
        this.reRender();
    }

    async reRender() {
        await this.generateTemplate();
        this.render('.poke-list');
        this.manageComponent();
    }

    async generateTemplate() {
        this.template = '';
        const data = await initiatePokemon(this.fetchUrl);

        const arrayPokemon = data.results;
        this.data = data;

        this.template += `
        <h2>Showing ${arrayPokemon.length} /${data.count}</h2>
        `;
        arrayPokemon.forEach((pokemon) => {
            this.template += `
          
          <li><a class="poke-list__item" href="/web/details.html?id=${pokemon.url}">${pokemon.name}</a> <img src="" alt=""></li>
          
          `;
        });
        this.template += `
        <div>
                <button id="button-back">Back</button>
                <button id="button-next">Next</button>
            </div>`;
    }
    manageComponent() {
        document.querySelector('#button-next').addEventListener('click', () => {
            this.fetchUrl = this.data.next;
            this.reRender();
        });
        document
            .querySelector('#button-back')
            .addEventListener('click', async () => {
                if (!(this.data.previous === null)) {
                    this.fetchUrl = this.data.previous;
                }

                await this.reRender();
            });
    }
}
