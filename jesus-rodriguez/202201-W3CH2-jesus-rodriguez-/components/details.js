import { Components } from './components.js';
import { arrayHeroes } from '../heroesArray.js';

export class DetailsHeroes extends Components {
  template;
  heroes;
  url;
  template;

  constructor() {
    super();
    this.heroes = arrayHeroes;
    this.url = window.location.href;
    this.findHero = this.finId(this.url);
    this.template = this.createTemplate(this.heroes, this.findHero);
  }
  createTemplate(heroes, id) {
    const heroeSelected = heroes.find((heroe) => heroe.id === id);
    let template = `
    
    <h1>${heroeSelected.name}</h1>
      <form class="form">
        <span class="form__label">ID:${heroeSelected.id}</span>
        <label for="fname" class="form__label">Hero Name</label><br />
        <input class="form__input" type="text" id="fname" name="" value="${heroeSelected.name}"/><br />
        <button class="button" type="buttons">   <a href="/index.html">Go Back</a></button>
        <button class="button" type="buttons">Save</button>
      </form>
    `;

    return template;
  }

  finId(url) {
    let urlHeroe = url.split('=');
    let idHeroe = urlHeroe[1];

    return Number(idHeroe);
  }
}
