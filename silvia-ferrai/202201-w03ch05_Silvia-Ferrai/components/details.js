import { Component } from './component.js';
import { initiatePokemon } from '../service/service-api.js';
import { postData } from '../service/api-add.js';

export class Details extends Component {
    template;
    constructor() {
        super();
        this.urlPokemon = window.location.href.split('=')[1];
        this.reRender();
    }

    async reRender() {
        this.template = '';
        await this.generateTemplate();
        this.render('#details');
        this.manageComponent();
    }

    async generateTemplate() {
        this.dataPokemon = await initiatePokemon(this.urlPokemon);

        const dataPokemon = this.dataPokemon;

        this.template = `
          <h2>DETAILS:</h2>
            <div class="details-block">
             <h3 class="name">${dataPokemon.name}</h3>
                <img class= "details-img" src="${dataPokemon.sprites.front_default}" alt="pokemon image">
                <div>Height:${dataPokemon.height}</div>
                <div>Weight:${dataPokemon.weight}</div>
                </div>
        `;

        this.template += `
        <div class="button-details">
                <button class="button-details__add">Add Favorite</button>
                <button class="button-details__delete">Delete Favorite</button>
            </div>
        `;
    }
    manageComponent() {
        const favorite = document.querySelector('.button-details__add');
        favorite.addEventListener('click', () => {
            const miPokemon = {
                name: this.dataPokemon.name,
                weight: this.dataPokemon.weight,
                height: this.dataPokemon.height,
                image: this.dataPokemon.sprites.front_default,
                url: this.urlPokemon,
            };
            console.log(miPokemon);
            postData(miPokemon);
        });
    }
}
