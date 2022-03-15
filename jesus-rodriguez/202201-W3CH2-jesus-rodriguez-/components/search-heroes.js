import { Components } from './components.js';
import { arrayHeroes } from '../heroesArray.js';

export class MyheroSearch extends Components {
  template;
  constructor(title) {
    super();
    this.arrayInput = arrayHeroes;
    this.template = this.createTemplate(title);
    this.render('#myhero-search');
    this.manageForm();
    this.newId();
  }
  createTemplate(title) {
    let template = `
        <h1>My heroes</h1>
        <form class="form">
        <label for="fname" class="form__label">${title}</label>
        <br>
        <input class="form__input"type="text" id="fname" name="">
        <br>
        <button class="button-delete" type="submit">Add hero</button> 
        </form>`;

    return template;
  }

  manageForm() {
    const form = document.querySelector('form');
    const input = document.querySelector('input');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const userinput = input.value;
      this.arrayInput.push({ id: this.newId(), name: userinput });
    });
  }

  newId() {
    let lastHeroe = this.arrayInput.length - 1;
    let lastId = arrayHeroes[lastHeroe].id;

    return lastId + 1;
  }
}
