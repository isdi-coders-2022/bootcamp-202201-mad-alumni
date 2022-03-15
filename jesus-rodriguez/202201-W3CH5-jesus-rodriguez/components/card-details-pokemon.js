import { Components } from './components.js';
import { getInformation } from '../get-information.js';
import { postData } from '../post-information.js';

export class PrintCard extends Components {
  template;
  constructor() {
    super();
    this.urlPokemon = window.location.href.split('=')[1];
    console.log(this.urlPokemon);
    this.reRender();
  }
  async reRender() {
    this.allPromise = await this.getInfo(this.urlPokemon);
    this.pokemonData = this.allPromise;
    this.createTemplate(this.allPromise.results);
    this.render('.card-container');
    // console.log(this.pokemonData);
    this.managementComponent();
  }
  async getInfo(url) {
    return await getInformation(url);
  }

  createTemplate() {
    this.template = `

        <div class="pokemon-card">
          <div class="pokemon-card__img">
            <img
              class="pokemon-card__img-element"
              src="${this.pokemonData.sprites.back_default}"
              alt=""
            />
          </div>
          <span class="pokemon-card__name"><span class="pokemon-card__property">Name</span> ${this.pokemonData.name}</span>
          <span class="pokemon-card__weight"><span class="pokemon-card__property">Weight</span> ${this.pokemonData.weight}</span>
          <span class="pokemon-card__experience"><span class="pokemon-card__property">Experience</span> ${this.pokemonData.base_experience}</span>
          <span class="pokemon-card__experience"><span class="pokemon-card__property">Tipo</span> ${this.pokemonData.types[0].type.name}</span>
          <button class="pokemon-card__fav-button">❤</button>
          </div>
       
          
      

    `;
  }

  managementComponent() {
    let favButton = document.querySelector('.pokemon-card__fav-button');

    favButton.addEventListener('click', () => {
      const myFavPokemon = {
        name: this.pokemonData.name,
        weight: this.pokemonData.weight,
        experience: this.pokemonData.base_experience,
        type: this.pokemonData.types[0].type.name,
        url: this.urlPokemon,
      };
      postData(myFavPokemon);
      confirm('Pokemon añadido');
    });
  }
}
