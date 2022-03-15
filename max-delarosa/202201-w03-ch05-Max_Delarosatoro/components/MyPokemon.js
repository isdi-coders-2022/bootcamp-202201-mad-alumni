import {
    getMyPokemonDataById,
    patchMyPokemon,
    deleteMyPokemon,
} from '../services/apiRequests.js';
import { Component } from './Component.js';

export class MyPokemon extends Component {
    pokemonData;
    template;
    offset;
    constructor() {
        super();
        this.payload;
        this.dbUrl = 'http://localhost:3000/pokemon/';
        this.pokemonData;
        this.template;
        this.reRender();
    }

    async reRender() {
        await this.generatePokemonInfo();
        this.generateTemplate();
        this.render('#pokemon');
        this.manageComponent();
    }

    async generatePokemonInfo() {
        const id = window.location.search.split('=')[1];
        this.pokemonData = await getMyPokemonDataById(id);
    }

    async generateTemplate() {
        this.template = `
        <section class="pokemon">
            <div class="pokemon__img-title-container">
                <h1 class="pokemon__title">${this.pokemonData.name}</h1>
                <h2 class="pokemon__name">${this.pokemonData.pokemonName}</h2>
                <img class="pokemon__img" src="${this.pokemonData.sprites.front_default}">
                <div class="pokemon__sprites-container">`;

        this.addSprites();

        this.template += `
                </div>
            </div>
            <div class="pokemon__info-container">
                <h2 class="pokemon__info-title">Information</h2>
                <div class="pokemon__abilities-container">
                    <h3 class="pokemon__abilities-title">Abilities</h3>`;

        this.addAbilities();

        this.template += `
                </div>
                <p class="pokemon__info-paragraph">
                <span class="pokemon__info-label">Weight</span>: ${this.pokemonData.weight}kg
                </p>
                <div class="pokemon__types-container">
                    <h3 class="pokemon__types-title">Types</h3>`;
        this.pokemonData.types.forEach((type) => {
            this.template += `
                    <p class="pokemon__type">${type.type.name}</p>`;
        });
        this.template += `
                </div>
                <button class="pokemon__button pokemon__button--edit">Edit</button>
                <button class="pokemon__button pokemon__button--save hide">Save</button>
                <button class="pokemon__button pokemon__button--cancel hide">Cancel</button>
                <button class="pokemon__button pokemon__button--delete">Delete</button>
            </div>
        </section>
        `;
    }

    addSprites() {
        let sprites = [];
        for (const key in this.pokemonData.sprites) {
            const element = this.pokemonData.sprites[key];
            sprites.push(element);
        }
        sprites = sprites.filter(
            (sprite) => sprite !== null && typeof sprite === 'string'
        );
        sprites.forEach((sprite) => {
            this.template += `
            <div class="pokemon__sprite-container">
                <img class="pokemon__sprite" src="${sprite}">
            </div>
            `;
        });
    }

    addAbilities() {
        this.pokemonData.abilities.forEach((ability) => {
            this.template += `
                    <div class="pokemon__ability-container">
                        <p class="pokemon__ability-name">${ability.ability.name}</p>
                    </div>
            `;
        });
    }

    manageComponent() {
        const sprites = document.querySelectorAll('.pokemon__sprite');
        const bigSprite = document.querySelector('.pokemon__img');
        sprites.forEach((spriteElement) => {
            spriteElement.addEventListener('click', () => {
                bigSprite.src = spriteElement.src;
            });
        });

        const imgContainer = document.querySelector(
            '.pokemon__img-title-container'
        );
        const titleElement = imgContainer.querySelector('.pokemon__title');
        const pokemonNameElement = document.querySelector('.pokemon__name');
        const editButton = document.querySelector('.pokemon__button--edit');
        const cancelButton = document.querySelector('.pokemon__button--cancel');
        const saveButton = document.querySelector('.pokemon__button--save');
        const deleteButton = document.querySelector('.pokemon__button--delete');
        editButton.addEventListener('click', () => {
            titleElement.classList.add('hide');
            const titleInput = document.createElement('input');
            titleInput.value = this.pokemonData.name;
            titleInput.classList.add('pokemon__title-input');
            imgContainer.insertBefore(titleInput, pokemonNameElement);

            saveButton.classList.remove('hide');
            cancelButton.classList.remove('hide');
            editButton.classList.add('hide');
        });

        saveButton.addEventListener('click', async () => {
            const titleInput = document.querySelector('.pokemon__title-input');
            this.payload = {
                name: titleInput.value,
            };
            await patchMyPokemon(this.pokemonData.id, this.payload);
            await this.reRender();
        });

        cancelButton.addEventListener('click', () => {
            this.reRender();
        });

        deleteButton.addEventListener('click', async () => {
            await deleteMyPokemon(this.pokemonData.id);
            await this.reRender();
            window.location.href = './my-pokemons.html';
        });
    }
}
