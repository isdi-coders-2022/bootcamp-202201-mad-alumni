import { Components } from './components.js';

export class HeroSearch extends Components {
  template;
  constructor(title) {
    super();
    this.template = this.createTemplate(title);
  }
  createTemplate(title) {
    let template = `<form class="form"><label for="fname" class="form__label">${title}</label><br>
                    <input class="form__input"type="text" id="fname" name=""><br></form>`;

    return template;
  }
}
