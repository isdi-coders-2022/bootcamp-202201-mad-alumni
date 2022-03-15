import { fetchData } from './fetch.js';
import { Component } from './render.js';

export class Details extends Component {
    template;
    constructor() {
        super();
        this.queryString = window.location.search;
        this.urlParams = new URLSearchParams(this.queryString);
        this.pokemonName = this.urlParams.get('name');
        console.log(this.frontSprite);
        this.reRender();
    }
    async reRender() {
        this.data = await this.generateData(
            `https://pokeapi.co/api/v2/pokemon/${this.pokemonName}`
        );
        this.frontSprite = this.data.sprites.front_shiny;
        this.backSprite = this.data.sprites.back_shiny;
        this.name = this.data.name;
        this.abilities = this.data.abilities;
        this.weight = this.data.weight;
        this.types = this.data.types;
        this.template = this.createTemplate();
        this.render('#details');
    }

    async generateData(url) {
        return await fetchData(url);
    }

    createTemplate() {
        console.log(this.data);
        this.template = '';
        this.template += `<div class='image__container'><img class="image" src="${this.frontSprite}" alt="none">
        <img class="image" src="${this.backSprite}" alt="none"><div><p>${this.name}</p><p> ${this.abilities}</p><p>${this.weight}</p></div></div>`;
        return this.template;
    }
}
