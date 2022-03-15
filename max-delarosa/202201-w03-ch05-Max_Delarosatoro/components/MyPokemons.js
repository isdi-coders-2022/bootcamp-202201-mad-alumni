import { getPokemonData } from '../services/apiRequests.js';
import { Component } from './Component.js';

export class MyPokemons extends Component {
    pokemonData;
    template;
    offset;
    constructor() {
        super();
        this.fetchUrl = 'http://localhost:3000/pokemon/';
        this.pokemonData;
        this.template;
        this.reRender();
    }

    async reRender() {
        await this.generatePokemonInfo();
        this.generateTemplate();
        this.render('#my-pokemons');
        // this.manageComponent();
    }

    async generatePokemonInfo() {
        this.pokemonData = await getPokemonData(this.fetchUrl);
    }

    async generateTemplate() {
        this.template = `
        <ul class="pokemon-list">`;
        this.pokemonData.forEach((pokemon) => {
            this.template += `
            <a class="pokemon__link" href="./my-pokemon.html?id=${pokemon.id}">
                <li class="pokemon">
                    <h3 class="pokemon__name">${pokemon.name}</h3>
                    <img src="${pokemon.sprites.front_default}" alt="">
                </li>
            </a>
            `;
        });
        this.template += `
        </ul>
        `;
    }

    manageComponent() {
        const previousButton = document.querySelector(
            '.button-container__button--previous'
        );
        previousButton.addEventListener('click', () => {
            this.offset === 0 ? (this.offset = 0) : (this.offset -= 1);
            this.reRender();
        });
        const nextButton = document.querySelector(
            '.button-container__button--next'
        );
        nextButton.addEventListener('click', () => {
            this.offset += 1;
            this.reRender();
        });
    }
}
