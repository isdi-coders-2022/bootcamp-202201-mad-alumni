import { Components } from './components.js';
import { getInformation } from '../get-information.js';
import { deleteData } from '../delete-information.js';

export class MyPokemon extends Components {
  template;
  constructor() {
    super();
    this.fetchUrl = 'http://localhost:3000/pokemon';
    this.reRender();
    this.arrayUrl = [];
  }
  async reRender() {
    this.myPokemonDB = await this.getInfo(this.fetchUrl);
    this.template = this.createTemplate(this.myPokemonDB);
    this.render('.fav-container__fav-list');
    this.managementComponent();
  }
  async getInfo(url) {
    return await getInformation(url);
  }

  createTemplate() {
    this.template = `<ul>`;

    this.myPokemonDB.forEach((pokemon, index) => {
      this.arrayUrl.push({
        urllocal: `http://localhost:3000/pokemon?id=${pokemon.id}`,
        id: pokemon.id,
        index: index,
      });
      this.template += `
        
       
    
       <li class="list-fav-item">
        <a  class="list-fav-item__a" href="details-pokemon.html?pokemon=${pokemon.url}" >${pokemon.name}</a>
        <button href="" class="list-fav-item__delete">❌</button>
       </li>
       
`;
    });
    this.template += `</ul>`;
    return this.template;
  }

  managementComponent() {
    let arrayFav = this.arrayUrl;
    let idDelete = '';
    let deleteButton = document.querySelectorAll('.list-fav-item__delete');
    deleteButton.forEach(function (e, i) {
      console.log(arrayFav);
      e.addEventListener('click', () => {
        if (arrayFav[i].index === i) {
          idDelete = arrayFav[i].id;
          deleteData(idDelete);
          this.reRender();
        }
      });
    });
  }
}
