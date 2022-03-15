import { fetchPokemon } from '../services/pokeServices.js';
import { Component } from './Component.js';

export class Card extends Component {
    constructor(pokemon, buttonType) {
        super();
        this.template = this.generateTemplate(pokemon, buttonType);
    }

    async generateTemplate(pokemon, buttonType) {
        const pokemonData = await fetchPokemon(pokemon.url);
        const template = `
            <div class="card">
                <a class="card__data" href="../pages/details.html?=id${pokemonData.id}">
                        <img
                            src="${pokemonData.sprites.front_default}"
                            alt=""
                            class="card__image"
                        />
                        <h3 class="card__name">${pokemonData.name}</h3>
                        <ul class="card__stats">
                            <li class="card__stats-item">
                             Experience: ${pokemonData.base_experience}
                            </li>
                            <li class="card__stats-item">Height: ${pokemonData.height}0cm</li>
                            <li class="card__stats-item">Weight: ${pokemonData.weight}Kg</li>
                        </ul>
                </a>
                <div class="card__actions">
                        <div class="url card__actions-data${pokemonData.id}">${pokemon.url}</div>
                        <button class="${pokemonData.id} card__actions-item card__${buttonType}">${buttonType}</button>
                </div>
            </div>
        `;

        return template;
    }
}
