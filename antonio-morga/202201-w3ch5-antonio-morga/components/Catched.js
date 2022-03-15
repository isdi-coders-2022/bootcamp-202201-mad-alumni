/* eslint-disable no-unused-expressions */
import { getAllCatched, releasePokemon } from '../services/localApiServices.js';
import { Card } from './Card.js';
import { Component } from './Component.js';

export class CatchedPage extends Component {
    constructor(selector) {
        super();
        this.selector = selector;
        this.reRender(selector);
    }

    async reRender(buttonType) {
        this.template = await this.generateTemplate(buttonType);
        await this.renderInner(this.selector);
        await this.releaseButtonHandler();
    }

    async generateTemplate() {
        const allCatchedPokemons = await getAllCatched();
        let template = '';
        const cards = [];
        allCatchedPokemons.forEach((pokemon) => {
            cards.push(new Card(pokemon, 'release').template);
        });
        await (
            await Promise.all(cards)
        ).forEach((cardTemplate, index) => {
            template += `<div class="localId">Local Id: ${allCatchedPokemons[index].id}</div>`;
            template += cardTemplate;
        });

        return template;
    }

    async releaseButtonHandler() {
        const allCatchedPokemons = await getAllCatched();
        const buttons = document.querySelectorAll('.card__release');
        buttons.forEach((button, index) => {
            button.addEventListener('click', async () => {
                await releasePokemon(allCatchedPokemons[index].id);
                this.reRender(this.selector);
            });
        });
    }
}
