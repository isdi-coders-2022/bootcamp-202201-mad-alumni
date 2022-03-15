import {
    getAllPokemonsByPage,
    getPokemonData,
} from '../services/apiRequests.js';
import { Component } from './Component.js';

export class AllPokemons extends Component {
    pokemonData;
    template;
    offset;
    constructor() {
        super();
        this.pokemonData;
        this.template;
        this.offset = 0;
        this.reRender();
    }

    async reRender() {
        await this.generatePokemonInfo();
        this.generateTemplate();
        this.render('#all-pokemons');
        this.manageComponent();
    }

    async generatePokemonInfo() {
        this.pokemonData = await getAllPokemonsByPage(this.offset * 20);
        console.log(this.pokemonData);
        this.count = this.pokemonData.count;
        const promises = await Promise.all(
            this.pokemonData.results.map(async (pokemon) => {
                const specificData = await getPokemonData(pokemon.url);
                return specificData;
            })
        );
        this.pokemonData = promises;
    }

    async generateTemplate() {
        this.template = `
        <h2 class="title">All Pokemons</h2>
        <p class="pokemon-count">Showing ${this.offset * 20 + 20}/${
            this.count
        }</p>
        <ul class="pokemon-list">`;
        this.pokemonData.forEach((pokemon) => {
            console.log(pokemon);
            this.template += `
            <a class="pokemon__link" href="./pokemon.html?id=${pokemon.id}">
                <li class="pokemon">
                    <h3 class="pokemon__name">#${pokemon.id} ${pokemon.name}</h3>
                    <img src="${pokemon.sprites.front_default}" alt="">
        
                </li>
            </a>
            `;
        });
        this.template += `
        </ul>
        <div class="button-container">
            <button class="button-container__button button-container__button--previous">Previous</button>
            <button class="button-container__button button-container__button--next">Next</button>
        </div>
        <div class="navigation-container">`;

        for (let i = 0; i < 10; i++) {
            if (!((this.offset + i) * 20 > this.count)) {
                this.template += `<p class="navigation-container__page-link" data-offset="${
                    this.offset + i
                }">${this.offset + i}</p>`;
            }
        }

        this.template += `</div>
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

        const navigationLinks = document.querySelectorAll(
            '.navigation-container__page-link'
        );
        navigationLinks.forEach((link) => {
            link.addEventListener('click', (e) => {
                this.offset = Number(e.target.dataset.offset);
                this.reRender();
            });
        });
    }
}
