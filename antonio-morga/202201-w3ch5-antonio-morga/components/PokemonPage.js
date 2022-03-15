import { Component } from './Component.js';
import { fetchPage, fetchPokemon } from '../services/pokeServices.js';
import { Card } from './Card.js';
import { catchPokemon } from '../services/localApiServices.js';

export class PokemonPage extends Component {
    constructor(selector) {
        super();
        this.selector = selector;
        this.reRender(this.selector);
    }

    async reRender(selector, endpoint) {
        const nextEndpoint = '';
        const previousEndpoint = '';
        this.template = await this.generateTemplate(
            endpoint,
            nextEndpoint,
            previousEndpoint
        );
        await this.renderOuter(selector);
        this.nextButtonHandler(selector, nextEndpoint);
        this.previousButtonHandler(selector, nextEndpoint);
        this.catchButtonHandler();
    }

    async generateTemplate(endpoint) {
        const pokemonPage = await fetchPage(endpoint);
        this.nextEndpoint = pokemonPage.next;
        this.previousEndpoint = pokemonPage.previous;
        const lastPokemonEndpoint =
            pokemonPage.results[pokemonPage.results.length - 1].url;
        const lastPokemonData = await fetchPokemon(lastPokemonEndpoint);
        let template = `
            <main class="main">
                <section class="poke-list">
                    <ul class="poke-list__page-menu">
                        <li><button href="" class="poke-list__page--previous"><i class="fas fa-arrow-left"></i></button></li>
                        <li><a href="" class="poke-list__page">${lastPokemonData.id} of ${pokemonPage.count}</a></li>
                        <li><button href="" class="poke-list__page--next"><i class="fas fa-arrow-right"></i></button></li>
                    </ul>
                    <div class="poke-list__items">
                `;

        const cardPromises = [];
        pokemonPage.results.forEach((result) => {
            cardPromises.push(new Card(result, 'catch').template);
        });
        await (
            await Promise.all(cardPromises)
        ).forEach((element) => {
            template += element;
        });
        return template;
    }

    nextEndpoint(url) {
        return url;
    }

    nextButtonHandler() {
        const buttons = document.querySelectorAll('.poke-list__page--next');
        buttons.forEach((button) => {
            button.addEventListener('click', async () => {
                await this.reRender(this.selector, this.nextEndpoint);
            });
        });
    }

    previousButtonHandler() {
        const buttons = document.querySelectorAll('.poke-list__page--previous');
        buttons.forEach((button) => {
            button.addEventListener('click', async () => {
                await this.reRender(this.selector, this.previousEndpoint);
            });
        });
    }

    catchButtonHandler() {
        const buttons = document.querySelectorAll('.card__catch');
        buttons.forEach((button) => {
            button.addEventListener('click', async (ev) => {
                const buttonData = ev.target;
                const id = buttonData.classList[0];
                const pokemonLink = document.querySelector(
                    `.card__actions-data${id}`
                ).innerHTML;
                await catchPokemon({ url: pokemonLink });
            });
        });
    }
}
