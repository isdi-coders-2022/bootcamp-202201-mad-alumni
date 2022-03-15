import { getPokemonDataById } from '../services/apiRequests.js';
import { Component } from './Component.js';

export class Pokemon extends Component {
    pokemonData;
    template;
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
        this.pokemonData = await getPokemonDataById(id);
        this.preparePayload();
    }

    preparePayload() {
        this.payload = {
            myId: this.pokemonData.id,
            name: this.pokemonData.name,
            pokemonName: this.pokemonData.name,
            sprites: this.pokemonData.sprites,
            abilities: this.pokemonData.abilities,
            weight: this.pokemonData.weight,
            types: this.pokemonData.types,
        };
    }

    async generateTemplate() {
        this.template = `
        <section class="pokemon">
            <div class="pokemon__img-title-container">
                <h1 class="pokemon__title">${this.pokemonData.name}</h1>
                <img class="pokemon__img" alt="${this.pokemonData.name}" src="${this.pokemonData.sprites.front_default}">
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
                <button class="pokemon__add-button">Add to My Pokemon</button>
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

        const addButton = document.querySelector('.pokemon__add-button');
        addButton.addEventListener('click', async () => {
            await fetch(this.dbUrl, {
                headers: {
                    'Content-Type': 'application/json',
                },
                method: 'POST',
                body: JSON.stringify(this.payload),
            });
        });
    }
}
