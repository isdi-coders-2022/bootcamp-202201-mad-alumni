/* eslint-disable no-restricted-globals */
import { catchPokemon } from '../services/localApiServices.js';
import { fetchPokemon } from '../services/pokeServices.js';
import { Component } from './Component.js';

export class Details extends Component {
    constructor(selector) {
        super();
        this.reRender(selector);
    }

    async reRender(selector) {
        this.template = await this.generateTemplate();
        await this.renderInner(selector);
        this.catchButtonHandler();
    }

    async generateTemplate() {
        const route = location.search;
        const id = route
            .match(/\d/g)
            .reduce(
                (previousValue, currentValue) =>
                    previousValue.toString() + currentValue.toString()
            );
        const pokemonData = await fetchPokemon(
            `https://pokeapi.co/api/v2/pokemon/${id}/`
        );
        const template = `
            <img src="${pokemonData.sprites.other.dream_world.front_default}" alt="" class="pokemon-details__image" />
            
            <div class="pokemon-details__stats">
                <h2 class="pokemon-details__name">${pokemonData.name}</h2> 
                <p class="pokemon-details__stats-item">Type: ${pokemonData.types[0].type.name}</p>
                <p class="pokemon-details__stats-item">${pokemonData.stats[0].stat.name}: ${pokemonData.stats[0].base_stat}</p>
                <p class="pokemon-details__stats-item">${pokemonData.stats[1].stat.name}: ${pokemonData.stats[1].base_stat}</p>
                <p class="pokemon-details__stats-item">${pokemonData.stats[2].stat.name}: ${pokemonData.stats[2].base_stat}</p>
                <button
                    class="${pokemonData.id} pokemon-details__button pokemon-details__button--catch"
                >
                    Catch
                </button>
            </div>
            <div class="pokemon-details__actions">
            <div class="pokemon-details__url">https://pokeapi.co/api/v2/pokemon/${id}/</div>
                
            </div>`;
        return template;
    }

    async catchButtonHandler() {
        const button = document.querySelector(
            '.pokemon-details__button--catch'
        );
        button.addEventListener('click', async () => {
            const pokemonLink = document.querySelector(
                '.pokemon-details__url'
            ).innerHTML;
            await catchPokemon({ url: pokemonLink });
        });
    }
}
