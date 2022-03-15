import { Component } from './component.js';
import { initiatePokemon } from '../service/service-api.js';

export class Favorite extends Component {
    template;
    constructor() {
        super();
        this.pokeUrl = 'http://localhost:3000/Pokemon/';
        this.data;
        this.template = '';
        this.reRender();
    }

    async reRender() {
        await this.generateTemplate();
        this.render('#favorite-poke');
    }

    async generateTemplate() {
        const data = await initiatePokemon(this.pokeUrl);
        this.data = data;
        this.template = `
            <h2>FAVORITES:</h2>
        `;
        this.data.forEach((i) => {
            this.template += `
          
          <div class="details-block">
             <h3 ><a class="name" href="/web/details.html?id=${i.url}">${i.name}</a></h3>
                <img class= "details-img" src="${i.image}" alt="pokemon image">
               
                </div>
          `;

            this.template += `
                 <ul class="button-details">
                <li class="button-details__add">Delete Favorite</li>
            </ul>
            `;
        });
    }
}
