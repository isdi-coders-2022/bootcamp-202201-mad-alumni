import { Components } from './components.js';
import { getInformation } from '../get-information.js';

export class ListPokemon extends Components {
  template;
  constructor() {
    super();
    this.fetchUrl = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20';
    this.reRender();
  }
  async reRender() {
    this.allPromise = await this.getInfo(this.fetchUrl);
    this.template = this.createTemplate(this.allPromise.results);
    this.render('.list-pokemon');
    this.managementComponent();
  }
  async getInfo(url) {
    return await getInformation(url);
  }

  createTemplate(blockPokemon) {
    this.template = '';

    blockPokemon.forEach((pokemon) => {
      this.template += `
        
        <div class="list-pokemon__div">
          <a class="list-pokemon__div" href="details-pokemon.html?pokemon=${pokemon.url}" >${pokemon.name}</a>
       </div>
`;
    });

    return this.template;
  }

  managementComponent() {
    let previousButton = document.querySelector('.button-content__previous');

    previousButton.addEventListener('click', () => {
      this.fetchUrl = this.allPromise.previous;
      this.reRender();
    });

    let nextButton = document.querySelector('.button-content__next');

    nextButton.addEventListener('click', async () => {
      this.fetchUrl = this.allPromise.next;
      this.reRender();
    });

    let favButton = document.querySelector('.button-content__fav');

    favButton.addEventListener('click', async () => {
      window.location.href = './my-pokemons.html';
    });
  }
}
