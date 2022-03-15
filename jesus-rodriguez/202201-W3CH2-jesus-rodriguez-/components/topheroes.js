import { Components } from '../components/components.js';

export class Heroes extends Components {
  template;
  heroes;
  temp;
  constructor(heroes) {
    super();
    this.title = 'Top Heroes';
    this.heroes = heroes;
    this.template = this.createTemplate(this.heroes, this.title);
  }

  createTemplate(heroes, title) {
    let template = `<h2>${title}</h2><nav><ul class="nav-heroes">`;
    heroes.forEach((heroe) => {
      template += `<li class="nav-heroes__item-heroes"><a class="nav-heroes__a" href="/details.html?hero=${heroe.id}">${heroe.name}</a></li>`;
    });

    template += `</nav></ul>`;

    return template;
  }
}
